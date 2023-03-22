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

namespace app\shopapi\event;

use app\common\service\ConfigService;
use app\common\enum\DefaultEnum;
use app\common\enum\FootprintEnum;
use app\common\model\Footprint as FootprintModel;
use app\common\model\FootprintRecord;
use app\common\model\Goods;
use app\common\model\Coupon;

/**
 * 气泡足迹事件
 * Class Footprint
 * @package app\shopapi\event
 * 不同场景触发示例
 * event('Footprint', ['type' => 1, 'user_id' => 1]);  // 访问商城
 * event('Footprint', ['type' => 2, 'user_id' => 1, 'foreign_id'=>1]); // 浏览商品，  foreign_id为商品id
 * event('Footprint', ['type' => 3, 'user_id' => 1, 'foreign_id'=>1]); // 加入购物车， foreign_id为商品id
 * event('Footprint', ['type' => 4, 'user_id' => 1, 'foreign_id'=>1]); // 领取优惠券， foreign_id为优惠券id
 * event('Footprint', ['type' => 5, 'user_id' => 1, 'total_money'=>888]); // 下单结算, total_money为下单金额
 */
class Footprint
{
    public function __construct($params)
    {
        // 全局气泡开关
        $footprint_status = ConfigService::get('footprint', 'status', FootprintEnum::DEFAULT_STATUS);
        if (!$footprint_status) {
            return false;
        }
        // 判断模板允许使用
        if ($this->isAllowUse($params['type'])) {
            // 记录足迹
            $this->record($params);
        }
    }

    /**
     * @notes 判断足迹气泡模板是否允许使用
     * @param $type
     * @return bool
     * @author Tab
     * @date 2021/7/15 16:47
     */
    private function isAllowUse($type)
    {
        $model = FootprintModel::where(['type'=>(int)$type])->findOrEmpty();
        if (!$model->isEmpty() && $model['status']) {
            return true;
        }
        return false;
    }

    /**
     * @notes 记录足迹
     * @param $params
     * @return false
     * @author Tab
     * @date 2021/7/15 17:45
     */
    private function record($params)
    {
        // 获取参数(主要参数: type, user_id, goods_id[可能不存在])
        if (empty($params['type']) || !$params['type']) {
            return false;
        }
        if (empty($params['user_id']) || !$params['user_id']) {
            return false;
        }

        switch ($params['type']) {
            case FootprintEnum::VISIT_MALL: //进入商城(30分钟内没记录才记录)
                if(!$this->getPeriodTimeRecord($params)) {
                    $tpl = '访问了商城';
                    $this->add($params, $tpl);
                }
                break;
            case FootprintEnum::BROWSE_PRODUCT: //浏览商品(30分钟内没记录才记录)
                if(!$this->getPeriodTimeRecord($params)) {
                    $tpl = '正在浏览'.$this->getGoodsName($params['foreign_id']);
                    $this->add($params, $tpl);
                }
                break;
            case FootprintEnum::ADD_CART: //加入购物车
                $tpl = '正在购买'.$this->getGoodsName($params['foreign_id']);
                $this->add($params, $tpl);
                break;
            case FootprintEnum::GET_COUPONS: //领取优惠券
                $tpl = '正在领取'.$this->getCouponName($params['foreign_id']).'优惠券';
                $this->add($params, $tpl);
                break;
            case FootprintEnum::ORDER_SETTLEMENT:    //下单结算
                $tpl = '成功下单'.$params['total_money'];
                $this->add($params, $tpl);
                break;
        }
    }

    /**
     * @notes 获取30分钟内足迹记录
     * @param $params
     * @return mixed
     * @author Tab
     * @date 2021/7/15 17:23
     */
    private function getPeriodTimeRecord($params)
    {
        // 一小时前时间戳
        $an_hour_ago = strtotime("-1 hour");
        // 30分钟前时间戳
        $half_an_hour_ago = $an_hour_ago + 1800;
        // 当前时间戳
        $current_time = time();

        $where = [
            ['create_time', '>', $half_an_hour_ago],
            ['create_time', '<', $current_time]
        ];

        if ($params['type']) {
            $where[] = ['user_id', '=', (int)$params['user_id']];
            $where[] = ['type', '=', (int)$params['type']];
        }

        // 访问商城
        if ($params['type'] === FootprintEnum::VISIT_MALL) {
            $where[] = ['foreign_id', '=', 0];
        }

        // 浏览器商品
        if ($params['type'] === FootprintEnum::BROWSE_PRODUCT) {
            $where[] = ['foreign_id', '=', (int)$params['foreign_id']];
        }

        return FootprintRecord::where($where)->select()->toArray();
    }

    /**
     * @notes 添加足迹记录
     * @param $params
     * @param $tpl
     * @return mixed
     * @author Tab
     * @date 2021/7/15 17:25
     */
    private function add($params, $tpl)
    {
        return FootprintRecord::create([
            'type'        => $params['type'],
            'user_id'     => $params['user_id'],
            'foreign_id'  => empty($params['foreign_id']) ? 0 : $params['foreign_id'],
            'template'    => $tpl
        ]);
    }

    /**
     * @notes 获取商品名称
     * @param $goods_id
     * @return mixed|string
     * @author Tab
     * @date 2021/7/15 17:33
     */
    private function getGoodsName($goods_id)
    {
        $goods = Goods::field('id,name')->findOrEmpty($goods_id);
        if ($goods->isEmpty()) {
            return '';
        }

        $goods = $goods->toArray();

        // 商品名称过长处理
        if (mb_strlen($goods['name']) > 6) {
            return mb_substr($goods['name'], 0, 6). '**';
        }

        return $goods['name'];
    }

    /**
     * @notes 获取优惠券名称
     * @param $coupon_id
     * @return mixed|string
     * @author Tab
     * @date 2021/7/15 17:37
     */
    private function getCouponName($coupon_id)
    {
        $coupon = Coupon::findOrEmpty($coupon_id);
        return $coupon->isEmpty() ? '' : $coupon['name'];
    }
}