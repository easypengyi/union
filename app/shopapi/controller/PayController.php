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


namespace app\shopapi\controller;

use app\common\enum\UserTerminalEnum;
use app\common\logic\PaymentLogic;
use app\common\service\pay\AliPayService;
use app\common\service\pay\ToutiaoPayService;
use app\common\service\pay\WeChatPayService;
use app\shopapi\validate\PayValidate;
use think\facade\Log;
use app\shopapi\logic\AkcLogic;
use app\common\service\pay\AkcPayService;

/**
 * 支付
 * Class PayController
 * @package app\shopapi\controller
 */
class PayController extends BaseShopController
{

    public array $notNeedLogin = ['notifyMnp', 'notifyOa', 'notifyApp', 'aliNotify', 'toutiaoNotify' ,'akcNotify']; //爱库存


    /**
     * @notes 预支付
     * @return \think\response\Json
     * @throws \Exception
     * @author 段誉
     * @date 2021/8/3 14:03
     */
    public function prepay()
    {
        $params = (new PayValidate())->post()->goCheck();
        //订单信息
        $order = PaymentLogic::getPayOrderInfo($params);
        if (false === $order) {
            return $this->fail(PaymentLogic::getError(), $params);
        }

        //爱库存
//        if($order->is_new == 1){
//            //查询一下订单创建是否可以成功，如果订单创建失败就提示错误
//            $AkcLogic =new AkcLogic;
//            $res= $AkcLogic->payorder($order->paymentNo);
//            var_dump($res);die;
//
//            if ($res['resultCode'] == 999999)
//            {
//
//            }else
//            {
//                return $this->fail(PaymentLogic::getError(), $params);
//            }
//        }

        //爱库存需要判断余额
        if($order->is_new == 1){
            $AkcLogic = new AkcLogic;
            $balance = $AkcLogic->queryAccount();
            if ($balance < $order['akc_order_amount']) {
                return $this->fail('当前商品无法下单，请联系客服处理', $params);
            }
        }

        //支付流程
        $result = PaymentLogic::pay($params['pay_way'], $params['from'], $order, $this->userInfo['terminal']);

        if (false === $result) {
            return $this->fail(PaymentLogic::getError(), $params);
        }

//        $fopen = fopen('./uploads/wxpay.txt', 'a+');
//        fwrite($fopen, json_encode($result));
//        fclose($fopen);

        return $this->success('', $result);
    }

    /**
     * @notes 小程序支付回调
     * @return \Symfony\Component\HttpFoundation\Response
     * @author 段誉
     * @date 2021/8/13 14:17
     */
    public function notifyMnp()
    {
        return (new WeChatPayService(UserTerminalEnum::WECHAT_MMP))->notify();
    }


    /**
     * @notes 公众号支付回调
     * @return \Symfony\Component\HttpFoundation\Response
     * @author 段誉
     * @date 2021/8/13 14:17
     */
    public function notifyOa()
    {
        return (new WeChatPayService(UserTerminalEnum::WECHAT_OA))->notify();
    }



    /**
     * @notes app支付回调
     * @author 段誉
     * @date 2021/8/13 14:16
     */
    public function notifyApp()
    {
        return (new WeChatPayService(UserTerminalEnum::IOS))->notify();
    }


    /**
     * @notes 支付宝回调
     * @return bool
     * @author 段誉
     * @date 2021/8/13 14:16
     */
    public function aliNotify()
    {
        $params = $this->request->post();
        $result = (new AliPayService())->notify($params);
        if (true === $result) {
            echo 'success';
        } else {
            echo 'fail';
        }
    }

    /**
     * @notes 头条支付回调(字节小程序)
     * @return mixed
     * @author Tab
     * @date 2021/11/17 11:40
     */
    public function toutiaoNotify()
    {
        $params = $this->request->post();
        $result =  (new ToutiaoPayService())->notify($params);
        return $result;
    }

    //爱库存
    public function akcNotify()
    {
        //爱库存


        $params = $this->request->post();

        $result =  (new AkcPayService())->notify($params);
        return $result;
    }


    /**
     * @notes  支付方式列表
     * @return \think\response\Json
     * @author 段誉
     * @date 2021/8/13 14:33
     */
    public function payway()
    {
        $params = (new PayValidate())->goCheck('payway');
        $result = PaymentLogic::getPayWay($this->userId, $this->userInfo['terminal'], $params);
        if ($result === false) {
            return $this->fail(PaymentLogic::getError());
        }

        return $this->data($result);
    }

    public function payStatus()
    {
        $params = (new PayValidate())->goCheck('paystatus');
        $result = PaymentLogic::getPayStatus($params);
        if ($result === false) {
           return $this->fail(PaymentLogic::getError());
        }
        return $this->data($result);
    }
}
