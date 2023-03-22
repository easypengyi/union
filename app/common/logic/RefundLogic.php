<?php
// +----------------------------------------------------------------------
// | LikeShop有特色的全开源社交分销电商系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 商业用途务必购买系统授权，以免引起不必要的法律纠纷
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | 微信公众号：好象科技
// | 访问官网：http://www.likemarket.net
// | 访问社区：http://bbs.likemarket.net
// | 访问手册：http://doc.likemarket.net
// | 好象科技开发团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | Author: LikeShopTeam-段誉
// +----------------------------------------------------------------------


namespace app\common\logic;



use app\common\enum\AfterSaleEnum;
use app\common\enum\PayEnum;
use app\common\model\Refund;
use app\common\service\pay\AliPayService;
use app\common\service\pay\BalancePayService;
use app\common\service\pay\ToutiaoPayService;
use app\common\service\pay\WeChatPayService;
use app\common\service\WeChatConfigService;

/**
 * 订单退款逻辑
 * Class OrderRefundLogic
 * @package app\common\logic
 */
class RefundLogic extends BaseLogic
{

    protected static $refund;

    /**
     * @notes 发起退款
     * @param $refundWay //退款类型;(原路退,退回到余额)
     * @param $order //订单信息
     * @param $afterSaleId //售后退款id
     * @param $refundAmount //退款金额
     * @throws \EasyWeChat\Kernel\Exceptions\InvalidConfigException
     * @author 段誉
     * @date 2021/8/9 17:31
     */
    public static function refund($refundWay, $order, $afterSaleId, $refundAmount)
    {
        if ($refundAmount <= 0) {
            return false;
        }

        self::log($order, $afterSaleId, $refundAmount);

        //区分原路退 还是退回到余额
        if ($refundWay == AfterSaleEnum::REFUND_WAYS_BALANCE) {
            self::balancePayRefund($order, $refundAmount, $afterSaleId);
            return true;
        }

        switch ($order['pay_way']) {
            //余额退款
            case PayEnum::BALANCE_PAY:
                self::balancePayRefund($order, $refundAmount,$afterSaleId);
                break;
            //微信退款
            case PayEnum::WECHAT_PAY:
                self::wechatPayRefund($order, $refundAmount);
                break;
            //支付宝退款
            case PayEnum::ALI_PAY:
                self::aliPayRefund($order, $refundAmount);
                break;
            //字节退款
            case PayEnum::BYTE_PAY:
                self::bytePayRefund($order, $refundAmount);
                break;
        }

        return true;
    }



    /**
     * @notes 余额退款
     * @param $order
     * @param $refundAmount
     * @author 段誉
     * @date 2021/8/5 10:25
     */
    public static function balancePayRefund($order, $refundAmount,$afterSaleId)
    {
        (new BalancePayService())->refund($order, $refundAmount,$afterSaleId);
    }



    /**
     * @notes 微信退款
     * @param $refundWay
     * @param $order
     * @param $refundAmount
     * @return bool|void
     * @throws \EasyWeChat\Kernel\Exceptions\InvalidConfigException
     * @author 段誉
     * @date 2021/8/5 10:25
     */
    public static function wechatPayRefund($order, $refundAmount)
    {
        //原来退回到微信的情况
        $wechatConfig = WeChatConfigService::getWechatConfigByTerminal($order['order_terminal']);

        if (!isset($wechatConfig['cert_path']) || !isset($wechatConfig['key_path'])) {
            throw new \Exception('请联系管理员设置微信证书!');
        }

        if (!file_exists($wechatConfig['cert_path']) || !file_exists($wechatConfig['key_path'])) {
            throw new \Exception('微信证书不存在,请联系管理员!');
        }

        //发起退款
        $result = (new WeChatPayService($order['order_terminal']))->refund([
            'transaction_id' => $order['transaction_id'],
            'refund_sn' => self::$refund['sn'],
            'total_fee' => $order['order_amount'] * 100,//订单金额,单位为分
            'refund_fee' => intval($refundAmount * 100),//退款金额
        ]);

        if (isset($result['return_code']) && $result['return_code'] == 'FAIL') {
            throw new \Exception($result['return_msg']);
        }

        if (isset($result['err_code_des'])) {
            throw new \Exception($result['err_code_des']);
        }

        //更新退款日志记录
        Refund::update([
            'wechat_refund_id' => $result['refund_id'] ?? 0,
            'refund_status' => (isset($result['result_code']) && $result['result_code'] == 'SUCCESS') ? 1 : 2,
            'refund_msg' => json_encode($result, JSON_UNESCAPED_UNICODE),
        ], ['id' => self::$refund['id']]);

        if ($result['return_code'] == 'FAIL' || $result['result_code'] == 'FAIL') {
            throw new \Exception('微信支付退款失败');
        }

        return true;
    }


    /**
     * @notes 支付宝退款
     * @param $order
     * @param $refundAmount
     * @return bool
     * @throws \Exception
     * @author 段誉
     * @date 2021/8/5 10:25
     */
    public static function aliPayRefund($order, $refundAmount)
    {
        //原路退回到支付宝的情况
        $result = (new AliPayService())->refund($order['sn'], $refundAmount, self::$refund['sn']);
        $result = (array)$result;

        //更新退款日志记录
        Refund::update([
            'refund_status' => (isset($result['result_code']) && $result['result_code'] == 'SUCCESS') ? 1 : 2,
            'refund_msg' => json_encode($result['httpBody'], JSON_UNESCAPED_UNICODE),
        ], ['id' => self::$refund['id']]);

        if ($result['code'] != '10000' || $result['msg'] != 'Success' || $result['fundChange'] != 'Y') {
            throw new \Exception('支付宝退款失败');
        }

        return true;
    }

    /**
     * @notes 字节退款
     * @param $order
     * @param $refundAmount
     * @author Tab
     * @date 2021/11/18 14:09
     */
    public static function bytePayRefund($order, $refundAmount)
    {
        (new ToutiaoPayService())->refund($order, $refundAmount, self::$refund);
    }



    /**
     * @notes 退款日志
     * @param $order
     * @param $afterSaleId
     * @param $refundAmount
     * @author 段誉
     * @date 2021/8/9 17:32
     */
    public static function log($order, $afterSaleId, $refundAmount)
    {
        $result = Refund::create([
            'order_id' => $order['id'],
            'after_sale_id' => $afterSaleId,
            'user_id' => $order['user_id'],
            'sn' => generate_sn(new Refund(), 'sn'),
            'order_amount' => $order['order_amount'],
            'refund_amount' => $refundAmount,
        ]);

        self::$refund = $result;
    }

}
