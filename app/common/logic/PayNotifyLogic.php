<?php
// +----------------------------------------------------------------------
// | LikeShop100%开源免费商用电商系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | 商业版本务必购买商业授权，以免引起法律纠纷
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | Gitee下载：https://gitee.com/likeshop_gitee/likeshop
// | 访问官网：https://www.likemarket.net
// | 访问社区：https://home.likemarket.net
// | 访问手册：http://doc.likemarket.net
// | 微信公众号：好象科技
// | 好象科技开发团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------

// | Author: LikeShopTeam
// +----------------------------------------------------------------------

namespace app\common\logic;


use app\adminapi\logic\distribution\DistributionLevelLogic;
use app\common\cache\YlyPrinterCache;
use app\common\enum\AccountLogEnum;
use app\common\enum\DeliveryEnum;
use app\common\enum\NoticeEnum;
use app\common\enum\OrderEnum;
use app\common\enum\OrderLogEnum;
use app\common\enum\PayEnum;
use app\common\enum\PrinterEnum;
use app\common\model\Goods;
use app\common\model\Order;
use app\common\model\OrderGoods;
use app\common\model\OrderLog;
use app\common\model\Partnersy;
use app\common\model\RechargeOrder;
use app\common\model\SeckillGoodsItem;
use app\common\model\SelffetchShop;
use app\common\model\TeamFound;
use app\common\model\TeamGoodsItem;
use app\common\model\User;
use app\common\service\ConfigService;
use app\common\service\printer\YlyPrinterService;
use app\shopapi\logic\AkcLogic;
use app\shopapi\logic\TeamLogic;
use think\facade\Db;
use think\facade\Log;
use app\common\model\Delivery; //爱库存
use app\common\model\Express; //爱库存

/**
 * 支付成功后处理订单状态
 * Class PayNotifyLogic
 * @package app\api\logic
 */
class PayNotifyLogic extends BaseLogic
{
    public static function handle($action, $orderSn, $extra = [])
    {

        Db::startTrans();
        try {

            self::$action($orderSn, $extra);

            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            Log::write(implode('-', [
                __CLASS__,
                __FUNCTION__,
                $e->getFile(),
                $e->getLine(),
                $e->getMessage()
            ]));
            self::setError($e->getMessage());
            return $e->getMessage();
        }
    }



    //下单回调 //调用回调方法统一处理 更新订单支付状态
    private static function order($orderSn, $extra = [])
    {
        $order = Order::with(['order_goods'])->where(['sn' => $orderSn])->findOrEmpty();

        //增加用户累计消费额度
        User::where(['id' => $order['user_id']])
            ->inc('total_order_amount', $order['order_amount'])
            ->inc('total_order_num')
            ->update();

        //更新订单状态
        Order::update([
            'pay_status' => PayEnum::ISPAID,
            'pay_time' => time(),
            'order_status' => OrderEnum::STATUS_WAIT_DELIVERY,
            'transaction_id' => $extra['transaction_id'] ?? ''
        ], ['id' => $order['id']]);

        //爱库存商品支付
        if($order['is_new'] == 1){
            $AkcLogic = new AkcLogic();
            $res = $AkcLogic->payorder($order['paymentNo']);
            $res_msg = json_encode($res);
            //更新订单状态
            Order::update(['return_msg'=> $res_msg], ['id' => $order['id']]);
        }

        // 秒杀订单更新销售数据
        if ($order['order_type'] == OrderEnum::SECKILL_ORDER) {
            $orderGoods = OrderGoods::where('order_id', $order['id'])->findOrEmpty()->toArray();
            if (empty($orderGoods)) {
                return false;
            }
            $seckillGoodsItem = SeckillGoodsItem::where([
                'seckill_id' => $order['seckill_id'],
                'item_id' => $orderGoods['item_id'],
            ])->findOrEmpty();
            if ($seckillGoodsItem->isEmpty()) {
                return false;
            }
            $seckillGoodsItem->sales_amount += $orderGoods['total_pay_price'];
            $seckillGoodsItem->sales_volume += $orderGoods['goods_num'];
            $seckillGoodsItem->closing_order ++;
            $seckillGoodsItem->save();
        }

        // 拼团订单数据更新
        if ($order['order_type'] == OrderEnum::TEAM_ORDER) {
            if (empty($order['order_goods'])) {
                return false;
            }

            $teamId = (new TeamFound())->where(['id'=>$order['team_found_id']])->value('team_id');
            TeamGoodsItem::update([
                'sales_amount'  => ['inc', $order['order_amount']],
                'sales_volume'  => ['inc', $order['total_num']],
                'closing_order' => ['inc', 1]
            ], ['team_id'=>$teamId, 'item_id'=>$order['order_goods'][0]['item_id']]);
        }

        // 生成分销订单
        DistributionOrderGoodsLogic::add($order['id']);

        // 生成运营订单
        GroupOrderGoodsLogic::add($order['id'], $order['user_id']);

        // 生成合作伙伴分佣订单
//        PartnersyOrderGoodsLogic::add($order['id']);
        // 更新分销商等级
        DistributionLevelLogic::updateDistributionLevel($order['user_id']);

        //下架库存为零的商品
//        $goods_ids = OrderGoods::where('order_id',$order['id'])->column('goods_id');
//        Goods::update(['status'=>0],['id'=>$goods_ids,'total_stock'=>0]);

        //订单日志
        (new OrderLog())->record([
            'type' => OrderLogEnum::TYPE_USER,
            'channel' => OrderLogEnum::USER_PAID_ORDER,
            'order_id' => $order['id'],
            'operator_id' => $order['user_id']
        ]);

        // 如果是拼团订单
        if ($order['order_type'] == OrderEnum::TEAM_ORDER) {
            TeamLogic::checkTeamSuccess($order['team_found_id']);
        }

        // 消息通知 - 通知买家
        event('Notice', [
            'scene_id' =>  NoticeEnum::ORDER_PAY_NOTICE,
            'params' => [
                'user_id' => $order['user_id'],
                'order_id' => $order['id']
            ]
        ]);

        // 消息通知 - 通知卖家
        $mobile = ConfigService::get('shop', 'return_contact_mobile');
        event('Notice', [
            'scene_id' =>  NoticeEnum::SELLER_ORDER_PAY_NOTICE,
            'params' => [
                'mobile' => $mobile,
                'order_id' => $order['id']
            ]
        ]);
        //更新用户等级
        //UserLogic::updateLevel($order['user_id']);

        // 自动小票打印
        self::orderPrint($order['id']);
    }


    //爱库存
    public static function deliveryakc($params)
    {
        Db::startTrans();
        try {
            $order = Order::find($params['id']);
            $express_name = ($params['send_type'] == 1) ? Express::where('name',$params['deliveryCompany'])->value('name') : '';
            $invoice_no = ($params['send_type'] == 1) ? $params['invoice_no'] : '';
            //添加发货单记录
            $delivery = new Delivery;
            $delivery->order_id = $params['id'];
            $delivery->order_sn = $order['sn'];
            $delivery->user_id = $order['user_id'];
            $delivery->admin_id = $params['admin_id'];
            $delivery->contact = $order['address']->contact;
            $delivery->mobile = $order['address']->mobile;
            $delivery->province = $order['address']->province;
            $delivery->city = $order['address']->city;
            $delivery->district = $order['address']->district;
            $delivery->address = $order['address']->address;
            $delivery->express_status = ($params['send_type'] == 1) ? DeliveryEnum::SHIPPED : DeliveryEnum::NOT_SHIPPED;
            $delivery->express_id = ($params['send_type'] == 1) ? $params['express_id'] : '';
            $delivery->express_name = $express_name;
            $delivery->invoice_no = $invoice_no;
            $delivery->send_type = $params['send_type'];
            $delivery->remark = $params['remark'] ?? '';
            $delivery->save();

            //更新订单表
            $order->order_status = OrderEnum::STATUS_WAIT_RECEIVE;
            $order->express_status = DeliveryEnum::SHIPPED;
            $order->express_time = time();
            $order->delivery_id = $delivery->id;
            $order->save();

            //订单日志
            (new OrderLog())->record([
                'type' => OrderLogEnum::TYPE_SHOP,
                'channel' => OrderLogEnum::SHOP_DELIVERY_ORDER,
                'order_id' => $params['id'],
                'operator_id' => $params['admin_id'],
            ]);



            // 消息通知
            event('Notice', [
                'scene_id' => NoticeEnum::ORDER_SHIP_NOTICE,
                'params' => [
                    'user_id' => $order->user_id,
                    'order_id' => $order->id,
                    'express_name' => $express_name,
                    'invoice_no' => $invoice_no,
                    'ship_time' => date('Y-m-d H:i:s')
                ]
            ]);

            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            self::$error = $e->getMessage();
            return false;
        }
    }
    //爱库存
    private static function orderakc($getmsg, $extra = [])
    {

        $order = Order::with(['order_goods'])->where(['orderId' => $getmsg['data']['orderId']])->findOrEmpty();




        //增加用户累计消费额度
        User::where(['id' => $order['user_id']])
            ->inc('total_order_amount', $order['order_amount'])
            ->inc('total_order_num')
            ->update();

        //更新订单状态
        Order::update([
            'pay_status' => PayEnum::ISPAID,
            'pay_time' => time(),
            'order_status' => 2,'re_msg'=>json_encode($order),
            'transaction_id' => $extra['transaction_id'] ?? ''
        ], ['id' => $order['id']]);

        //爱库存商品支付
        if($order['is_new'] == 1){
            $AkcLogic = new AkcLogic();
            $res = $AkcLogic->payorder($order['paymentNo']);
            $res_msg = json_encode($res);
            //更新订单状态
            Order::update(['return_msg'=> $res_msg], ['id' => $order['id']]);
        }

        //爱库存
        /*
        $obj =array();
        $obj['id'] = $order['id'];
        $obj['send_type'] =1;
        $obj['deliveryCompany'] =$getmsg['data']['deliveryList']['deliveryCompany'];
        $obj['invoice_no'] =$getmsg['data']['deliveryList']['deliveryNo'];

        self::deliveryakc($obj);*/

        // 秒杀订单更新销售数据
        if ($order['order_type'] == OrderEnum::SECKILL_ORDER) {
            $orderGoods = OrderGoods::where('order_id', $order['id'])->findOrEmpty()->toArray();
            if (empty($orderGoods)) {
                return false;
            }
            $seckillGoodsItem = SeckillGoodsItem::where([
                'seckill_id' => $order['seckill_id'],
                'item_id' => $orderGoods['item_id'],
            ])->findOrEmpty();
            if ($seckillGoodsItem->isEmpty()) {
                return false;
            }
            $seckillGoodsItem->sales_amount += $orderGoods['total_pay_price'];
            $seckillGoodsItem->sales_volume += $orderGoods['goods_num'];
            $seckillGoodsItem->closing_order ++;
            $seckillGoodsItem->save();
        }

        // 拼团订单数据更新
        if ($order['order_type'] == OrderEnum::TEAM_ORDER) {
            if (empty($order['order_goods'])) {
                return false;
            }

            $teamId = (new TeamFound())->where(['id'=>$order['team_found_id']])->value('team_id');
            TeamGoodsItem::update([
                'sales_amount'  => ['inc', $order['order_amount']],
                'sales_volume'  => ['inc', $order['total_num']],
                'closing_order' => ['inc', 1]
            ], ['team_id'=>$teamId, 'item_id'=>$order['order_goods'][0]['item_id']]);
        }

        // 生成分销订单
        DistributionOrderGoodsLogic::add($order['id']);
        // 生成合作伙伴分佣订单
//        PartnersyOrderGoodsLogic::add($order['id']);
        // 更新分销商等级
        DistributionLevelLogic::updateDistributionLevel($order['user_id']);

        //下架库存为零的商品
//        $goods_ids = OrderGoods::where('order_id',$order['id'])->column('goods_id');
//        Goods::update(['status'=>0],['id'=>$goods_ids,'total_stock'=>0]);

        //订单日志
        (new OrderLog())->record([
            'type' => OrderLogEnum::TYPE_USER,
            'channel' => OrderLogEnum::USER_PAID_ORDER,
            'order_id' => $order['id'],
            'operator_id' => $order['user_id']
        ]);

        // 如果是拼团订单
        if ($order['order_type'] == OrderEnum::TEAM_ORDER) {
            TeamLogic::checkTeamSuccess($order['team_found_id']);
        }

        // 消息通知 - 通知买家
        event('Notice', [
            'scene_id' =>  NoticeEnum::ORDER_PAY_NOTICE,
            'params' => [
                'user_id' => $order['user_id'],
                'order_id' => $order['id']
            ]
        ]);

        // 消息通知 - 通知卖家
        $mobile = ConfigService::get('shop', 'return_contact_mobile');
        event('Notice', [
            'scene_id' =>  NoticeEnum::SELLER_ORDER_PAY_NOTICE,
            'params' => [
                'mobile' => $mobile,
                'order_id' => $order['id']
            ]
        ]);
        //更新用户等级
        //UserLogic::updateLevel($order['user_id']);

        // 自动小票打印
        self::orderPrint($order['id']);
    }

    /**
     * @notes 充值成功回调
     * @param $orderSn
     * @param array $extra
     * @author Tab
     * @date 2021/8/11 14:43
     */
    public static function recharge($orderSn, $extra = [])
    {
        $order = RechargeOrder::where('sn', $orderSn)->findOrEmpty();
        // 增加用户累计充值金额及用户余额
        $user = User::findOrEmpty($order->user_id);
        $user->total_recharge_amount = $user->total_recharge_amount + $order->order_amount;
        $user->user_money = $user->user_money + $order->order_amount;
        $user->save();

        // 记录账户流水
        AccountLogLogic::add($order->user_id, AccountLogEnum::BNW_INC_RECHARGE, AccountLogEnum::INC, $order->order_amount, $order->sn, '用户充值');

        // 更新充值订单状态
        $order->transaction_id = $extra['transaction_id'];
        $order->pay_status = PayEnum::ISPAID;
        $order->pay_time = time();
        $order->save();

        // 充值奖励
        foreach($order->award as $item) {
            if(isset($item['give_money']) && $item['give_money'] > 0) {
                // 充值送余额
                self::awardMoney($order, $item['give_money']);
            }
        }

    }

    /**
     * @notes 充值送余额
     * @param $userId
     * @param $giveMoney
     * @author Tab
     * @date 2021/8/11 14:35
     */
    public static function awardMoney($order, $giveMoney)
    {
        // 充值送余额
        $user = User::findOrEmpty($order->user_id);
        $user->user_money = $user->user_money + $giveMoney;
        $user->save();
        // 记录账户流水
        AccountLogLogic::add($order->user_id, AccountLogEnum::BNW_INC_RECHARGE_GIVE, AccountLogEnum::INC, $giveMoney, $order->sn, '充值赠送');
    }

    /**
     * @notes 小票打印
     * @param $orderId
     * @author Tab
     * @date 2021/11/17 9:53
     */
    public static function orderPrint($orderId)
    {
        try {
            $order = self::getOrderInfo($orderId);
            (new YlyPrinterService())->startPrint($order, PrinterEnum::ORDER_PAY);
        } catch (\Exception $e) {
            self::handleCatch($e);
        }
    }

    public static function getOrderInfo($orderId)
    {
        $field = [
            'id',
            'sn',
            'pay_way',
            'delivery_type',
            'goods_price',
            'order_amount',
            'discount_amount',
            'express_price',
            'user_remark',
            'address',
            'selffetch_shop_id',
            'create_time',
        ];
        $order = Order::field($field)->with(['orderGoods' => function($query) {
            $query->field(['goods_num', 'order_id', 'goods_price', 'goods_snap']);
        }])
            ->append(['delivery_address', 'pay_way_desc', 'delivery_type_desc'])
            ->findOrEmpty($orderId);
        if ($order->isEmpty()) {
            throw new \Exception("订单不存在");
        }
        // 门店自提
        if ($order->delivery_type == DeliveryEnum::SELF_DELIVERY) {
            $field = [
                'id',
                'name',
                'contact',
                'province',
                'city',
                'district',
                'address',
            ];
            $selffetchShop = SelffetchShop::field($field)
                ->append(['detailed_address'])
                ->findOrEmpty($order->selffetch_shop_id);
            $order->selffetch_shop = $selffetchShop;
        }

        return $order->toArray();
    }

    /**
     * @notes 处理易联云异常
     * @param $e
     * @return false
     * @author Tab
     * @date 2021/11/17 10:01
     */
    public static function handleCatch($e)
    {
        $msg = json_decode($e->getMessage(),true);
        if(18 === $e->getCode()){
            //access_token过期，清除缓存中的access_token
            (new YlyPrinterCache())->deleteTag();
        };
        if($msg && isset($msg['error'])){
            Log::write('小票打印出错1:易联云'.$msg['error_description']);
        }
        Log::write('小票打印出错2：'.$e->getMessage());
    }
}
