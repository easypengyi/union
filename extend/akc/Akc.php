<?php

namespace akc;

use app\adminapi\controller\goods\GoodsAkcController;
use app\adminapi\logic\goods\GoodsActivityLogic;
use app\adminapi\validate\goods\GoodsValidate;
use app\common\enum\GoodsEnum;
use app\common\model\GoodsActivity;
use app\common\service\ConfigService;
use Requests;

/**
 * 爱库存
 * Class Akc
 * @package expressage
 */
class Akc
{
    public $pageNo = 1;
    public $pageSize = 1;
    public static $config = [];
    public static $url = [];

    public static $configFormal = [
        'appKey' => 'akb1251f300ed143e4',
        'appSecret' => '4f9154b7d682499fbb3a418e236eb6e2',
        'version' => '1.0',
    ];

    public static $urlFormal =[
        'category' => 'https://open.aikucun.com/open/api/category/getTree',  //获取商品分类
        'activity' => 'https://open.aikucun.com/open/api/activity/v2/list/filter',  //活动
        'activityDetail'=> 'https://open.aikucun.com/open/api/activity/detail',
        'goods' => 'https://open.aikucun.com/open/api/product/list',  //获取商品
        'goodsList'=> 'https://open.aikucun.com/open/api/product/listByIds',
        'goodsDetail' => 'https://open.aikucun.com/open/api/product/detail',  //商品详情
        'order' => 'https://open.aikucun.com/open/api/order/queryByOrderId',  //订单

        'queryPay' => 'https://open.aikucun.com/open/api/order/queryByOrderPaymentNo',  //支付订单查询
        'queryLogistics' => 'https://open.aikucun.com/open/api/delivery/order/track',  //查询订单物流轨迹
        'queryAfterSale' => 'https://open.aikucun.com/open/api/after-sale/new/query',  //查询售后订单
        'confirmAfterSale' => 'https://open.aikucun.com/open/api/after-sale/new/feedback',  //确认售后退款金额
        'orderTrack'=> 'https://open.aikucun.com/open/api/delivery/order/track' //物流轨迹
    ];

    public function __construct()
    {
        self::$config = self::$configFormal;
        self::$url = self::$urlFormal;
    }

    /**
     * 活动详情
     *
     * @param $id
     * @return mixed
     */
    public function activityList($id){
        $dt['activeIds'][] = $id;
        $dt['pageNo'] = $this->pageNo;
        $dt['pageSize'] = 1;
        $dt['activeModel'] = 1; //预告
        $res = $this->curlUrl('activity', $dt);
        return $res;
    }

    /**
     * 活动详情
     *
     * @param $id
     * @return mixed
     */
    public function activityDetail($id){
        $params = [
            'liveId'=> $id
        ];

        $res = $this->curlUrl('activityDetail', $params);
        return $res;
    }

    /**
     * 同步活动商品
     */
    public function activityGoods($params)
    {
        $res = $this->curlUrl('goods', $params);
        return $res;
    }

    public function activityGoodsList($params){

        $res = $this->curlUrl('goodsList', $params);
        return $res;
    }

    /**
     * 获取商品详情
     *
     * @param $productId
     * @param $activeId
     * @return mixed
     */
    public function goodsDetail($activeId, $productId){
        $params = [
            'productId'=> $productId,
            'activeId'=> $activeId
        ];

        $res = $this->curlUrl('goodsDetail', $params);
        return $res;
    }

    /**
     * 获取物流轨迹
     *
     * @param $orderId
     */
    public function orderTrack($orderId){
        $params = [
            'orderId'=> $orderId
        ];

        $res = $this->curlUrl('orderTrack', $params);
        return $res;
    }

    /*
     * $urlval  接口代码
     * $dt  接口参数
     * */
    function curlUrl($urlval,$dt =array())
    {
        $url =self::$url[$urlval];
        $param  =$this->generateSign($dt);
        $param = json_encode($param );
        $data = $this->curlPost($url, $param );
        return json_decode($data ,true);
    }

    public static  function generateSign($data=array())
    {
        $comps = explode(' ', microtime());
        $millis_time = sprintf('%d%03d', $comps[1], $comps[0] * 1000);
        $data['appKey'] = self::$config['appKey'];
        $data['timestamp'] = $millis_time;
        $data['version'] =  self::$config['version'];
        ksort($data);
        $parameter = json_encode($data, 320) .  self::$config['appSecret'];
        $base_parameter = md5(base64_encode($parameter), true);
        $data['sign'] = strtoupper(bin2hex($base_parameter));

        return $data;
    }

    /**
     * post 请求
     *
     * @param $url
     * @param $data
     * @param string $method
     * @return bool|string
     */
    function curlPost($url, $data, $method ="POST"){

        $ch = curl_init();   //1.初始化
        curl_setopt($ch, CURLOPT_URL, $url); //2.请求地址
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST,$method);//3.请求方式
        //4.参数如下

        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);//https
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)');//模拟浏览器
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_AUTOREFERER, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER,array('Content-Type: application/json'));//gzip解压内容
        curl_setopt($ch, CURLOPT_ENCODING, 'gzip,deflate');

        // if($method=="GET"){//5.post方式的时候添加数据
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        //}
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $tmpInfo = curl_exec($ch);//6.执行

        if (curl_errno($ch)) {//7.如果出错
            return curl_error($ch);
        }
        curl_close($ch);//8.关闭

        return $tmpInfo;
    }

}