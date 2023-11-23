<?php
// +----------------------------------------------------------------------
// | likeshop100%开源免费商用商城系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | 商业版本务必购买商业授权，以免引起法律纠纷
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | gitee下载：https://gitee.com/likeshop_gitee
// | github下载：https://github.com/likeshop-github
// | 访问官网：https://www.likeshop.cn
// | 访问社区：https://home.likeshop.cn
// | 访问手册：http://doc.likeshop.cn
// | 微信公众号：likeshop技术社区
// | likeshop团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeshopTeam
// +----------------------------------------------------------------------

namespace app\adminapi\logic\order;


use app\common\cache\YlyPrinterCache;
use app\common\enum\AfterSaleLogEnum;
use app\common\enum\DeliveryEnum;
use app\common\enum\NoticeEnum;
use app\common\enum\OrderEnum;
use app\common\enum\OrderLogEnum;
use app\common\enum\UserTerminalEnum;
use app\common\enum\PayEnum;
use app\common\enum\YesNoEnum;
use app\common\logic\BaseLogic;
use app\common\model\Delivery;
use app\common\model\Express;
use app\common\model\GoodsSupplier;
use app\common\model\Order;
use app\common\model\OrderGoods;
use app\common\model\OrderLog;
use app\common\model\SelffetchShop;
use app\common\service\after_sale\AfterSaleService;
use app\common\service\ConfigService;
use app\common\service\printer\YlyPrinterService;
use app\common\service\RegionService;
use app\shopapi\logic\AkcLogic;
use app\shopapi\logic\TeamLogic;
use expressage\Kd100;
use expressage\Kdniao;
use PhpOffice\PhpSpreadsheet\IOFactory;
use think\facade\Db;

class OrderLogic extends BaseLogic
{
    /**
     * @notes 查看其他列表
     * @return array
     * @author ljj
     * @date 2021/8/5 10:09 上午
     */
    public function otherLists()
    {
        $other_lists = [
            'order_terminal_lists' => UserTerminalEnum::getTermInalDesc(true),
            'order_type_lists' => OrderEnum::getOrderTypeDesc(true),
            'pay_way_lists' => PayEnum::getPayDesc(true),
            'pay_status_lists' => PayEnum::getPayStatusDesc(true),
            'delivery_type_lists' => DeliveryEnum::getDeliveryTypeDesc(true),
            'refund_status_lists' => [],
            'delivery_lists'=> [1=> '待发货'],
            'akc_lists'=> [0=>'否', 1=>'是'],
            'supplier_lists'=> GoodsSupplier::field('id,name')->select()->toArray()
        ];

        return $other_lists;
    }

    /**
     * @notes 查看订单详情
     * @param $params
     * @return mixed
     * @author ljj
     * @date 2021/8/9 5:27 下午
     */
    public function detail($params)
    {
        $info = Order::alias('o')
            ->join('user u', 'o.user_id = u.id')
            ->leftjoin('selffetch_shop ss', 'ss.id = o.selffetch_shop_id')
            ->leftjoin('delivery d', 'd.order_id = o.id')
            ->leftjoin('verification v', 'v.order_id = o.id')
            ->where('o.id',$params['id'])
            ->with(['order_goods' => function($query){
                $query->field('id,order_id,goods_snap,goods_name,goods_price,goods_num,total_price,discount_price,change_price,total_pay_price')->append(['goods_image','spec_value_str'])->hidden(['goods_snap']);
            },'order_log' => function($query){
                $query->field('order_id,type,operator_id,channel,create_time')->append(['operator','channel_desc'])->hidden(['operator_id','channel'])->order('id','desc');
            }])
            ->field('o.id,o.order_status,o.sn,o.order_type,o.order_terminal,o.create_time,o.pay_status,o.pay_way,o.pay_time,confirm_take_time,u.id as user_id,u.sn as user_sn,u.nickname,o.address,o.express_status,o.delivery_type,o.express_time,o.user_remark,o.order_remarks,o.goods_price  as total_goods_price,o.discount_amount,o.change_price,o.express_price,o.order_amount,o.integral_amount,d.express_name,d.invoice_no,ss.name as shop_name,o.pickup_code,v.create_time as verification_time,ss.province as shop_province,ss.city as shop_city,ss.district as shop_district,ss.address as shop_address')
            ->append(['order_status_desc','order_type_desc','order_terminal_desc','pay_status_desc','pay_way_desc','delivery_address','express_status_desc','delivery_type_desc','admin_order_btn'])
            ->find()
            ->toArray();

        //TODO 计算订单商品实付总额(订单商品总价-优惠券金额-积分抵扣金额-商品改价)
        $info['total_goods_pay_price'] = $info['total_goods_price'] - $info['discount_amount'] - $info['integral_amount'] - $info['change_price'];
        if ($info['total_goods_pay_price'] < 0) {
            $info['total_goods_pay_price'] = 0;
        }

        //收货信息
        $info['contact'] = $info['address']->contact;
        $info['mobile'] = $info['address']->mobile;
        unset($info['address']);

        //若是门店自提，收货地址改为门店地址
        if ($info['delivery_type'] == DeliveryEnum::SELF_DELIVERY) {
            $info['delivery_address'] = RegionService::getAddress(
                [
                    $info['shop_province'] ?? '',
                    $info['shop_city'] ?? '',
                    $info['shop_district'] ?? ''
                ],
                $info['shop_address'] ?? '',
            );
        }

        //退款信息
//        $info['refund_status'] = '—';
//        $info['refund_type'] = '—';
//        $info['refund_amount'] = '—';
//        $info['refund_time'] = '—';

        //处理操作按钮
        $info['admin_order_btn']['address_btn'] = ($info['express_status'] == 1 || $info['delivery_type'] == DeliveryEnum::SELF_DELIVERY) ? 0 : 1;
        $info['admin_order_btn']['price_btn'] = ($info['pay_status'] == 1) ? 0 : 1;
        $info['admin_order_btn']['express_btn'] = ($info['pay_status'] == 1) ? 0 : 1;
        unset($info['admin_order_btn']['detail_btn']);
        unset($info['admin_order_btn']['print_btn']);

        return $info;
    }

    /**
     * @notes 修改地址
     * @param $params
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author ljj
     * @date 2021/8/10 11:34 上午
     */
    public function addressEdit($params)
    {
        $order = Order::find($params['id']);

        $address = [
            'contact'   => $order['address']->contact,
            'province'  => $params['province_id'],
            'city'      => $params['city_id'],
            'district'  => $params['district_id'],
            'address'   => $params['address'],
            'mobile'    => $order['address']->mobile,
        ];
        $order->address = $address;
        $order->save();

        $change_address= RegionService::getAddress(
            [
                $params['province_id'] ?? '',
                $params['city_id'] ?? '',
                $params['district_id'] ?? ''
            ],
            $params['address'] ?? '',
        );

        //订单日志
        (new OrderLog())->record([
            'type' => OrderLogEnum::TYPE_SHOP,
            'channel' => OrderLogEnum::SHOP_ADDRESS_EDIT,
            'order_id' => $params['id'],
            'operator_id' => $params['admin_id'],
            'content' => '商家修改收货地址为：'.$change_address,
        ]);

        return true;
    }

    /**
     * @notes 设置商家备注
     * @param $params
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author ljj
     * @date 2021/8/10 11:49 上午
     */
    public function orderRemarks($params)
    {
        foreach ($params['id'] as $id) {
            $order = Order::find($id);
            if (!$order) {
                continue;
            }
            $order->order_remarks = $params['order_remarks'] ?? '';
            $order->save();

            //订单日志
            (new OrderLog())->record([
                'type' => OrderLogEnum::TYPE_SHOP,
                'channel' => OrderLogEnum::SHOP_ORDER_REMARKS,
                'order_id' => $id,
                'operator_id' => $params['admin_id'],
                'content' => '商家备注：'.$order->order_remarks,
            ]);
        }

        return true;
    }

    /**
     * @notes 修改价格(订单详情)
     * @param $params
     * @return bool
     * @author ljj
     * @date 2021/8/10 2:53 下午
     */
    public function changePrice($params)
    {
        // 启动事务
        Db::startTrans();
        try {
            //更新订单商品表
            $order_goods = OrderGoods::find($params['order_goods_id']);
            $order_goods->change_price = $params['change_price'];
            // TODO 实际支付商品金额(商品总价-优惠券金额-积分抵扣的金额-商品改价)
            $order_goods->total_pay_price = $order_goods->total_price - $order_goods->discount_price - $order_goods->integral_price - $params['change_price'];
            if ($order_goods->total_pay_price < 0) {
                $order_goods->total_pay_price = 0;
            }
            $order_goods->save();

            //更新订单表
            $total_change_price = OrderGoods::where('order_id',$order_goods->order_id)->sum('change_price');
            $order = Order::find($order_goods->order_id);
            $order->change_price = $total_change_price;
            // TODO 应付款金额(订单商品总价-优惠券金额-积分抵扣金额-商品改价+运费)
            $order->order_amount = $order->goods_price - $order->discount_amount - $order->integral_amount - $total_change_price + $order->express_price;
            if ($order->order_amount < 0) {
                $order->order_amount = 0;
            }
            $order->save();

            //订单日志
            (new OrderLog())->record([
                'type' => OrderLogEnum::TYPE_SHOP,
                'channel' => OrderLogEnum::SHOP_CHANGE_PRICE,
                'order_id' => $order_goods->order_id,
                'operator_id' => $params['admin_id'],
                'content' => '商家修改订单商品【'.$order_goods->goods_name.'】的商品改价为：'.$params['change_price'],
            ]);

            // 提交事务
            Db::commit();
            return true;
        } catch (\Exception $e) {
            // 回滚事务
            Db::rollback();
            self::$error = $e->getMessage();
            return false;
        }
    }

    /**
     * @notes 修改运费(订单详情)
     * @param $params
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author ljj
     * @date 2021/8/10 3:11 下午
     */
    public function changeExpressPrice($params)
    {
        $order = Order::find($params['id']);
        $order->express_price = $params['express_price'];
        // TODO 订单总价(订单商品总价+运费)
        $order->total_amount = $order->goods_price + $order->express_price;
        // TODO 应付款金额(订单商品总价-优惠券金额-积分抵扣金额-商品改价+运费)
        $order->order_amount = $order->goods_price - $order->discount_amount - $order->integral_amount - $order->change_price + $order->express_price;
        $order->save();

        //订单日志
        (new OrderLog())->record([
            'type' => OrderLogEnum::TYPE_SHOP,
            'channel' => OrderLogEnum::SHOP_EXPRESS_PRICE,
            'order_id' => $params['id'],
            'operator_id' => $params['admin_id'],
            'content' => '商家修改运费为：'.$params['express_price'],
        ]);

        return true;
    }

    /**
     * @notes 取消订单
     * @param $params
     * @return bool
     * @author ljj
     * @date 2021/8/10 4:50 下午
     */
    public function cancel($params)
    {
        Db::startTrans();
        try {

            $order = Order::find($params['id']);

            if ($order['order_type'] == OrderEnum::TEAM_ORDER) {

                TeamLogic::signFailTeam($order['id']);

            } else {

                //更新订单表
                $order->order_status = OrderEnum::STATUS_CLOSE;
                $order->cancel_time = time();

                //TODO  处于已支付状态的发起整单售后
                if ($order->pay_status == PayEnum::ISPAID) {

                    //爱库存已支付订单-取消
                    if($order['is_new'] == 1){
                        $AkcLogic = new AkcLogic;
                        $res = $AkcLogic->cancelByOrder($order['orderId']);
//                        var_dump($res);die;
                        if(!$res){
                            self::$error = '请联系客服处理'; //爱库存取消失败
                            return false;
                        }
                    }

                    AfterSaleService::orderRefund([
                        'order_id' => $params['id'],
                        'scene' => AfterSaleLogEnum::SELLER_CANCEL_ORDER
                    ]);
                }
                $order->save();

                $returnInventory = ConfigService::get('transaction', 'return_inventory');
                if ($returnInventory) {
                    // 需退还库存
                    AfterSaleService::returnInventory(['order_id' => $order['id']]);
                }

                $returnCoupon = ConfigService::get('transaction', 'return_coupon');
                if ($returnCoupon) {
                    // 需退还优惠券
                    AfterSaleService::returnCoupon($order);
                }


                //订单日志
                (new OrderLog())->record([
                    'type' => OrderLogEnum::TYPE_SHOP,
                    'channel' => OrderLogEnum::SHOP_CANCEL_ORDER,
                    'order_id' => $params['id'],
                    'operator_id' => $params['admin_id'],
                ]);
            }

            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            self::$error = $e->getMessage();
            return false;
        }
    }

    /**
     * @notes 发货
     * @param $params
     * @return bool
     * @author ljj
     * @date 2021/8/10 6:25 下午
     */
    public function delivery($params)
    {
        Db::startTrans();
        try {
            $order = Order::find($params['id']);
            $express_name = ($params['send_type'] == 1) ? Express::where('id',$params['express_id'])->value('name') : '';
            $invoice_no = ($params['send_type'] == 1) ? $params['invoice_no'] : '';
            if($params['send_type'] == 3){
                $express_name = $params['express_name'];
                $invoice_no = $params['invoice_no'];
                $params['express_id'] = '';
                $params['send_type'] = 1;
            }

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

    public function queryPaylist()
    {
        $info = Order::field('id,paymentNo')
            ->where('order_status','=',1)->where('pay_status','=',1)->where('is_new','=',1)->where('paymentNo','>',0)
            ->select()
            ->toArray();
        return $info;
    }

    public function deliveryakc($params)
    {

        Db::startTrans();
        try {
            $order = Order::find($params['id']);

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
            $delivery->express_name = $params['express_name'];
            $delivery->invoice_no = $params['invoice_no'];
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
                    'express_name' => $params['express_name'],
                    'invoice_no' => $params['invoice_no'],
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


    /**
     * @notes 发货信息
     * @param $params
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author ljj
     * @date 2021/8/10 7:16 下午
     */
    public function deliveryInfo($params)
    {
        $info = Order::field('id,address')
            ->with(['order_goods'=> function($query){
                $query->field('id,order_id,goods_snap,goods_name,goods_price,discount_price,goods_num,total_pay_price')->append(['goods_image','spec_value_str'])->hidden(['goods_snap']);
            }])
            ->where('id',$params['id'])
            ->append(['delivery_address'])
            ->hidden(['id'])
            ->find()
            ->toArray();

        //计算单个商品实付价格
        foreach ($info['order_goods'] as &$val) {
            $val['pay_price'] = $val['total_pay_price'] / $val['goods_num'];
        }

        //处理收货信息
        $info['contact'] = $info['address']->contact;
        $info['mobile'] = $info['address']->mobile;
        unset($info['address']);

        //获取物流公司
        $info['express'] = Express::field('id,name')->select()->toArray();

        return $info;
    }

    /**
     * @notes 确认收货
     * @param $params
     * @return bool
     * @author ljj
     * @date 2021/8/11 10:37 上午
     */
    public function confirm($params)
    {
        // 启动事务
        Db::startTrans();
        try {
            //更新订单状态
            $order = Order::find($params['id']);
            $order->order_status = OrderEnum::STATUS_FINISH;
            $order->confirm_take_time = time();
            $order->after_sale_deadline = self::getAfterSaleDeadline();
            $order->save();

            //订单日志
            (new OrderLog())->record([
                'type' => OrderLogEnum::TYPE_SHOP,
                'channel' => OrderLogEnum::SHOP_CONFIRM_ORDER,
                'order_id' => $params['id'],
                'operator_id' => $params['admin_id'],
            ]);

            // 提交事务
            Db::commit();
            return true;
        } catch (\Exception $e) {
            // 回滚事务
            Db::rollback();
            self::$error = $e->getMessage();
            return false;
        }
    }

    /**
     * @notes 获取当前售后
     * @return float|int
     * @author ljj
     * @date 2021/9/1 3:09 下午
     */
    public static function getAfterSaleDeadline()
    {
        //是否关闭维权
        $afterSale = ConfigService::get('transaction', 'after_sales');
        //可维权时间
        $afterSaleDays = ConfigService::get('transaction', 'after_sales_days');

        if ($afterSale == YesNoEnum::NO) {
            $afterSaleDeadline = time();
        } else {
            $afterSaleDeadline = ($afterSaleDays * 24 * 60 * 60) + time();
        }

        return $afterSaleDeadline;
    }

    /**
     * @notes 物流查询
     * @param $params
     * @return mixed
     * @author ljj
     * @date 2021/8/13 3:48 下午
     */
    public function logistics($params)
    {
        $order = Order::alias('o')
            ->join('delivery d', 'o.id = d.order_id')
            ->with(['order_goods' => function($query){
                $query->field('id,order_id,goods_snap,goods_name,goods_price,discount_price,round(total_pay_price / goods_num,2) as pay_price,goods_num,total_pay_price')->append(['goods_image','spec_value_str'])->hidden(['goods_snap']);
            }])
            ->field('o.id,o.express_time,d.send_type,d.express_name,d.invoice_no,o.express_status,d.express_id,o.address')
            ->where('o.id',$params['id'])
            ->find()
            ->toArray();

        //发货方式
        $order['send_type_desc'] = DeliveryEnum::getSendTypeDesc($order['send_type']);

        if ($order['send_type'] == DeliveryEnum::NO_EXPRESS) {
            $order['traces'] = ['无需物流'];
            return $order;
        }

        //查询物流信息
        $express_type = ConfigService::get('logistics_config', 'express_type', '');
        $express_bird = unserialize(ConfigService::get('logistics_config', 'express_bird', ''));
        $express_hundred = unserialize(ConfigService::get('logistics_config', 'express_hundred', ''));

        if (empty($express_type) || $order['express_status'] != DeliveryEnum::SHIPPED) {
            $order['traces'] = ['暂无物流信息'];
            return $order;
        }

        //快递配置设置为快递鸟时
        if($express_type === 'express_bird') {
            $expressage = (new Kdniao($express_bird['ebussiness_id'], $express_bird['app_key']));
            $express_field = 'codebird';
        } elseif($express_type === 'express_hundred') {
            $expressage = (new Kd100($express_hundred['customer'], $express_hundred['app_key']));
            $express_field = 'code100';
        }

        //快递编码
        $express_code = Express::where('id',$order['express_id'])->value($express_field);

        //获取物流轨迹
        if ($express_code === 'SF' && $express_type === 'express_bird') {
            $expressage->logistics($express_code, $order['invoice_no'], substr($order['address']->mobile,-4));
        }else {
            $expressage->logistics($express_code, $order['invoice_no']);
        }

        $order['traces'] = $expressage->logisticsFormat();
        if ($order['traces'] == false) {
            $order['traces'] = ['暂无物流信息'];
        } else {
            foreach ($order['traces'] as &$item) {
                $item = array_values(array_unique($item));
            }
        }

        return $order;
    }

    /**
     * @notes 小票打印
     * @param $params
     * @return bool
     * @author Tab
     * @date 2021/11/16 11:16
     */
    public function orderPrint($params)
    {
        try {
            $order = $this->getOrderInfo($params['id']);
            (new YlyPrinterService())->startPrint($order);
            return true;
        } catch (\Exception $e) {
            return $this->handleCatch($e);
        }
    }

    /**
     * @notes 获取商品信息
     * @param $orderId
     * @return array
     * @throws \Exception
     * @author Tab
     * @date 2021/11/16 11:16
     */
    public function getOrderInfo($orderId)
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
     * @notes 统一处理涉及易联云的错误
     * @param $e
     * @return false
     * @author Tab
     * @date 2021/11/16 17:30
     */
    public function handleCatch($e)
    {
        $msg = json_decode($e->getMessage(),true);
        if(18 === $e->getCode()){
            //access_token过期，清除缓存中的access_token
            (new YlyPrinterCache())->deleteTag();
        };
        if($msg && isset($msg['error'])){
            self::$error =  '易联云：'.$msg['error_description'];
            return false;
        }

        self::$error = $e->getMessage();
        return false;
    }


    /**
     * 批量发货
     *
     * @param $file
     * @param $admin_id
     * @return bool
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     * @throws \PhpOffice\PhpSpreadsheet\Reader\Exception
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function batchDelivery($file, $admin_id){
        $fileExtendName = substr(strrchr($file['name'], '.'), 1);
        if($fileExtendName != 'xlsx'){
            self::$error =  '必须为excel表格，且必须为xlsx格式';
            return false;
        }
        $num = 0;
        if(is_uploaded_file($file['tmp_name'])){
            $objReader = IOFactory::createReader('Xlsx');
            $filename = $file['tmp_name'];
            $objPHPExcel = $objReader->load($filename);
            $sheet = $objPHPExcel->getSheet(0);
            $highestRow = $sheet->getHighestRow();
            $list = [];
            $orderExits = [];
            $akc_order = [];
            for($j = 2; $j<= $highestRow; $j++){
                $id = $objPHPExcel->getActiveSheet()->getCell('A'.$j)->getValue();
                $express_name = trim($objPHPExcel->getActiveSheet()->getCell('M'.$j)->getValue());
                $invoice_no = trim($objPHPExcel->getActiveSheet()->getCell('N'.$j)->getValue());
                if(empty($id)|| empty($express_name) || empty($invoice_no)){
                    continue;
                }

                //是否已发货
                $order = Order::where('id', $id)
                    ->where('pay_status', 1)->find()->toArray();

                if(!is_null($order)){
                    if($order['order_status'] == 1){
                        $list[] = [
                            'id'=> $id,
                            'express_name'=> $express_name,
                            'invoice_no'=> $invoice_no,
                        ];
                    }else if($order['order_status'] > 1){
                        $orderExits[] = $id;
                    }
                }else{
                    $orderExits[] = $id;
                }
            }

            if(count($orderExits) > 0){
                self::$error =  'Excel中以下订单已发货或不存在：'. implode(',', $orderExits);
                return false;
            }

            $res_ids = [];
            foreach ($list as $item){
                $params = [
                    'id'=> $item['id'],
                    'admin_id'=> $admin_id,
                    'send_type'=> 3,
                    'express_name'=> $item['express_name'],
                    'invoice_no'=> $item['invoice_no'],
                    'remark'=> '批量导入发货信息'
                ];
                $res = $this->delivery($params);
                if($res == false){
                    $res_ids[] = $item['id'];
                }else{
                    $num++;
                }
            }
            if(count($res_ids) > 0){
                self::$error =  '发货失败：'. implode(',', $res_ids);
                return false;
            }
        }
        return $num;
    }
}
