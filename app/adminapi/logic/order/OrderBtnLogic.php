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


use app\common\enum\DeliveryEnum;
use app\common\enum\OrderEnum;
use app\common\enum\PayEnum;
use app\common\enum\YesNoEnum;
use app\common\logic\BaseLogic;
use app\common\model\Order;

class OrderBtnLogic extends BaseLogic
{
    /**
     * @notes 订单按钮状态
     * @param Order $order
     * @return array
     * @author ljj
     * @date 2021/8/4 8:24 下午
     */
    public static function getOrderBtn(Order $order)
    {
        return [
            'detail_btn'          => self::getDetailBtn($order),
            'print_btn'           => self::getPrintBtn($order),
            'remark_btn'          => self::getRemarkBtn($order),
            'cancel_btn'          => self::getCancelBtn($order),
            'delete_btn'          => self::getDeleteBtn($order),
            'deliver_btn'         => self::getDeliverBtn($order),
            'confirm_btn'         => self::getConfirmBtn($order),
            'logistics_btn'       => self::getLogisticsBtn($order),
            'refund_btn'          => self::getRefundBtn($order),
            'refund_detail_btn'   => self::getRefundDetailBtn($order),
            'verification_btn'    => self::getVerificationBtn($order),
            'verification_query_btn'    => self::getVerificationQueryBtn($order),
        ];
    }

    /**
     * @notes 详情按钮
     * @param $order
     * @return int
     * @author ljj
     * @date 2021/8/4 8:26 下午
     */
    public static function getDetailBtn($order)
    {
        return OrderEnum::BTN_SHOW;
    }

    /**
     * @notes 小票打印按钮
     * @param $order
     * @return int
     * @author ljj
     * @date 2021/8/4 8:27 下午
     */
    public static function getPrintBtn($order)
    {
        return OrderEnum::BTN_SHOW;
    }

    /**
     * @notes 商家备注按钮
     * @param $order
     * @return int
     * @author ljj
     * @date 2021/8/4 8:28 下午
     */
    public static function getRemarkBtn($order)
    {
        return OrderEnum::BTN_SHOW;
    }

    /**
     * @notes 取消订单按钮
     * @param $order
     * @return int
     * @author ljj
     * @date 2021/8/4 8:31 下午
     */
    public static function getCancelBtn($order)
    {
        if ($order['order_status'] == OrderEnum::STATUS_WAIT_PAY || $order['order_status'] == OrderEnum::STATUS_WAIT_DELIVERY) {
            return OrderEnum::BTN_SHOW;
        }
        return OrderEnum::BTN_HIDE;
    }

    /**
     * @notes 删除订单按钮
     * @param $order
     * @return int
     * @author ljj
     * @date 2021/8/4 8:34 下午
     */
    public static function getDeleteBtn($order)
    {
        if ($order['order_status'] == OrderEnum::STATUS_CLOSE) {
            return OrderEnum::BTN_SHOW;
        }
        return OrderEnum::BTN_HIDE;
    }

    /**
     * @notes 发货按钮
     * @param $order
     * @return int
     * @author ljj
     * @date 2021/8/4 8:36 下午
     */
    public static function getDeliverBtn($order)
    {
        if ($order['order_status'] == OrderEnum::STATUS_WAIT_DELIVERY && $order['delivery_type'] != DeliveryEnum::SELF_DELIVERY) {
            return OrderEnum::BTN_SHOW;
        }
        return OrderEnum::BTN_HIDE;
    }

    /**
     * @notes 提货核销按钮
     * @param $order
     * @return int
     * @author ljj
     * @date 2021/8/27 11:45 上午
     */
    public static function getVerificationBtn($order)
    {
        if ($order['order_status'] == OrderEnum::STATUS_WAIT_DELIVERY && $order['delivery_type'] == DeliveryEnum::SELF_DELIVERY) {
            return OrderEnum::BTN_SHOW;
        }
        return OrderEnum::BTN_HIDE;
    }

    /**
     * @notes 核销查询按钮
     * @param $order
     * @return int
     * @author ljj
     * @date 2021/8/27 11:47 上午
     */
    public static function getVerificationQueryBtn($order)
    {
        if ($order['verification_status'] == OrderEnum::WRITTEN_OFF && $order['delivery_type'] == DeliveryEnum::SELF_DELIVERY) {
            return OrderEnum::BTN_SHOW;
        }
        return OrderEnum::BTN_HIDE;
    }

    /**
     * @notes 确认收货按钮
     * @param $order
     * @return int
     * @author ljj
     * @date 2021/8/4 8:36 下午
     */
    public static function getConfirmBtn($order)
    {
        if ($order['order_status'] == OrderEnum::STATUS_WAIT_RECEIVE && $order['express_status'] == YesNoEnum::YES) {
            return OrderEnum::BTN_SHOW;
        }
        return OrderEnum::BTN_HIDE;
    }

    /**
     * @notes 物流按钮
     * @param $order
     * @return int
     * @author ljj
     * @date 2021/8/4 8:38 下午
     */
    public static function getLogisticsBtn($order)
    {
        if ($order['order_status'] >= OrderEnum::STATUS_WAIT_RECEIVE && $order['pay_status'] == PayEnum::ISPAID && $order['express_status'] == DeliveryEnum::SHIPPED && $order['delivery_type'] != DeliveryEnum::SELF_DELIVERY) {
            return OrderEnum::BTN_SHOW;
        }
        return OrderEnum::BTN_HIDE;
    }

    /**
     * @notes 手动退款按钮
     * @param $order
     * @return int
     * @author ljj
     * @date 2021/8/4 8:39 下午
     */
    public static function getRefundBtn($order)
    {
        return OrderEnum::BTN_HIDE;
    }

    /**
     * @notes 退款明细按钮
     *
     * @param $order
     * @return int
     * @author ljj
     * @date 2021/8/4 8:39 下午
     */
    public static function getRefundDetailBtn($order)
    {
        return OrderEnum::BTN_HIDE;
    }
}