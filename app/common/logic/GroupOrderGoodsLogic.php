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

namespace app\common\logic;

use app\adminapi\logic\distribution\DistributionConfigLogic;
use app\common\enum\DistributionConfigEnum;
use app\common\enum\DistributionGoodsEnum;
use app\common\enum\DistributionOrderGoodsEnum;
use app\common\enum\OrderEnum;
use app\common\model\DistributionConfig;
use app\common\model\DistributionGoods;
use app\common\model\DistributionLevel;
use app\common\model\DistributionOrderGoods;
use app\common\model\GroupLevel;
use app\common\model\GroupOperator;
use app\common\model\GroupOrderGoods;
use app\common\model\Order;
use app\common\model\OrderGoods;
use app\common\model\SeckillActivity;
use app\common\model\TeamActivity;
use app\common\model\TeamFound;
use app\common\model\User;

/**
 * 运营商订单逻辑层
 * Class GroupOrderGoodsLogic
 * @package app\common\logic
 */
class GroupOrderGoodsLogic extends BaseLogic
{
    /**
     * @notes 添加分销订单
     * @param $orderId
     * @return false
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author Tab
     * @date 2021/8/4 20:47
     */
    public static function add($orderId, $userId)
    {
        // 校验订单类型
        $allowDistribution = self::checkOrderType($orderId);
        if(!$allowDistribution) {
            return false;
        }

        // 订单信息
        $orderInfo = self::orderInfo($orderId);
        foreach($orderInfo as $item) {
            // 判断商品是否参与分销
            $goodsDistribution = self::checkGoodsDistribution($item['goods_id']);
            if(empty($goodsDistribution) || !$goodsDistribution['is_distribution']) {
                // 商品未参与分销
                continue;
            }

            if($item['room_id'] > 0){
                //获取群对应的运营商信息
                $userInfo = self::userInfo($item['room_id']);
                if($userInfo['is_freeze']) {
                    // 上级不是分销会员 或 分销资格已冻结
                    continue;
                }
                $rate = self::getRatio($item, $userInfo['level_id']);
                $userInfo['ratio'] = $rate;
                $userInfo['level'] = DistributionConfigEnum::LEVEL_TWO;
                self::addGroupOrderGoods($item, $userInfo);
            }
        }

    }

    /**
     * @notes 校验订单类型
     * @param $orderId
     * @return bool
     * @author Tab
     * @date 2021/7/26 17:21
     */
    public static function checkOrderType($orderId)
    {
        $order = Order::field('order_type')->where('id', $orderId)->findOrEmpty()->toArray();

        // 普通订单
        if($order['order_type'] == OrderEnum::NORMAL_ORDER) {
            return true;
        }

        // 非普通订单不参与分销
        return false;
    }

    /**
     * @notes 订单信息
     * @param $orderId
     * @return mixed
     * @author Tab
     * @date 2021/7/26 17:21
     */
    public static function orderInfo($orderId)
    {
        $orderInfo = OrderGoods::alias('og')
            ->leftJoin('order o', 'o.id = og.order_id')
            ->field('og.id as order_goods_id,og.order_id,og.goods_id,og.item_id,og.total_pay_price,og.is_new,og.profit,og.room_id,o.user_id')
            ->where('og.order_id', $orderId)
            ->select()
            ->toArray();
        return $orderInfo;
    }

    /**
     * @notes 用户信息
     * @param $userId
     * @return mixed
     * @author Tab
     * @date 2021/7/26 17:21
     */
    public static function userInfo($room_id)
    {
        $userInfo = User::alias('u')
            ->join('group_operator d', 'd.user_id = u.id')
            ->field('u.id,d.level_id,d.is_freeze')
            ->whereFindInSet('d.room_ids', $room_id)
            ->findOrEmpty()
            ->toArray();
        return $userInfo;
    }

    /**
     * @notes 校验商品是否参与分销
     * @param $goodsId
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author Tab
     * @date 2021/7/26 17:21
     */
    public static function checkGoodsDistribution($goodsId)
    {
        $distributionGoods = DistributionGoods::field('goods_id,item_id,level_id,self_ratio,first_ratio,second_ratio,is_distribution,rule')
            ->where('goods_id', $goodsId)
            ->select()
            ->toArray();

        if(empty($distributionGoods)) {
            return [];
        }

        return [
            'goods_id' => $distributionGoods[0]['goods_id'],
            'is_distribution' => $distributionGoods[0]['is_distribution'],
            'rule' => $distributionGoods[0]['rule']
        ];
    }

    /**
     * 获取佣金比例
     *
     * @param $goods
     * @param $level_id
     * @return float|int
     */
    public static function getRatio($goods, $level_id)
    {
        //商品二级佣金比例
        $ratioArr = DistributionGoods::field('first_ratio,second_ratio,self_ratio')
            ->where([
                'goods_id' => $goods['goods_id'],
                'item_id' => $goods['item_id'],
                'level_id' => 1
            ])
            ->findOrEmpty()
            ->toArray();
        $rate = 0;
        if(!empty($ratioArr['second_ratio']) && $ratioArr['second_ratio'] > 0){
            $rate = $ratioArr['second_ratio']/100;
        }

        // 运营商等级对应的比例
        $level = GroupLevel::field('rate')
            ->where('id', $level_id)
            ->findOrEmpty()
            ->toArray();
        if(!empty($level['rate']) && $level['rate'] > 0){
            $rate = $rate * ($level['rate'])/100;
        }

        //结算设置的佣金比例
        $group_rate = DistributionConfig::where('key', 'group_rate')->value('value');
        if(!empty($group_rate) && $group_rate>0){
            $rate = $rate * ($group_rate/100);
        }

        return $rate * 100;
    }

    /**
     * @notes 生成运营订单
     * @param $item
     * @param $userInfo
     * @return false
     * @author Tab
     * @date 2021/7/26 17:22
     */
    public static function addGroupOrderGoods($item, $userInfo)
    {
        $earnings = self::calByPaymentAmount($item, $userInfo);
        if($earnings < 0.01) {
            return false;
        }
        $data = [
            'user_id' => $userInfo['id'],
            'level_id' => $userInfo['level_id'],
            'level' => 2,
            'ratio' => $userInfo['ratio'],
            'order_goods_id' => $item['order_goods_id'],
            'goods_id' => $item['goods_id'],
            'item_id' => $item['item_id'],
            'earnings' => $earnings,
            'status' => DistributionOrderGoodsEnum::UN_RETURNED,
            'room_id'=> $item['room_id']
        ];

        GroupOrderGoods::create($data);
    }

    /**
     * @notes 根据商品实际支付金额计算佣金
     * @param $item
     * @param $userInfo
     * @return float
     * @author Tab
     * @date 2021/7/27 11:54
     */
    public static function calByPaymentAmount($item, $userInfo)
    {
        //爱库存
        if($item['is_new'] == 1){
            $earnings = round(($item['profit'] * $userInfo['ratio'] / 100), 2);
        }else{
            $earnings = round(($item['total_pay_price'] * $userInfo['ratio'] / 100), 2);
        }

        return $earnings;
    }
}
