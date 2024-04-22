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

namespace app\shopapi\logic;

use app\common\enum\CrontabEnum;
use think\console\Command;
use think\console\Input;
use think\console\Output;
use Cron\CronExpression;
use think\facade\Console;
use app\adminapi\logic\goods\GoodsCategoryLogic;
use app\adminapi\validate\goods\GoodsCategoryValidate;
use app\adminapi\logic\goods\GoodsActivityLogic;
use app\adminapi\validate\goods\GoodsActivityValidate;
use app\adminapi\logic\goods\GoodsLogic;
use app\adminapi\controller\goods\GoodsAkcController;
use app\adminapi\validate\goods\GoodsValidate;
use app\common\model\Order;
use app\common\model\OrderGoods;
use app\common\model\Goods;
use app\common\model\GoodsItem;
use app\common\model\AfterSale;


/**
 * 定时任务
 * Class Crontab
 * @package app\command
 */
class AkcLogic
{

    public $isTest = 0;   //测试环境参数0-正式环境 1-测试环境
    public $pageNo = 1;
    public $pageSize = 20;
    public static $config =[];
    public static $configFormal =[
        'appKey' => 'akb1251f300ed143e4',
        'appSecret' => '4f9154b7d682499fbb3a418e236eb6e2',
        'version' => '1.0',
    ];
    public static $configTest =[
        'appKey' => 'akff265df7d87d448a',
        'appSecret' => '46c0d329b6f44c5a9f18da04753d987a',
        'version' => '1.0',
    ];
    public static $url =array();
    public static $urlFormal =[
        'category' => 'https://open.aikucun.com/open/api/category/getTree',  //获取商品分类
        'activety' => 'https://open.aikucun.com/open/api/activity/v2/list/filter',  //活动
        'activityDetail'=> 'https://open.aikucun.com/open/api/activity/detail',
        'goods' => 'https://open.aikucun.com/open/api/product/list',  //获取商品
        'goodsDetail' => 'https://open.aikucun.com/open/api/product/detail',  //商品详情
        'goodsStock' => 'https://open.aikucun.com/open/api/inventory/query',  //库存
        'goodsList' => 'https://open.aikucun.com/open/api/product/listByIds',  //批量获取商品
        'order' => 'https://open.aikucun.com/open/api/order/queryByOrderId',  //订单
        'createorder' => 'https://open.aikucun.com/open/api/order/create',  //创建订单
        'payorder' => 'https://open.aikucun.com/open/api/order/pay',  //支付订单
        'cancelByOrder'=> 'https://open.aikucun.com/open/api/order/after/cancelByOrder',//取消订单

        'afterSaleCreate' => 'https://open.aikucun.com/open/api/after-sale/new/create',  //创建售后订单
        'afterSaleCancel' => 'https://open.aikucun.com/open/api/after-sale/new/cancel',  //取消售后订单
        'afterSaleQuery'=> 'https://open.aikucun.com/open/api/after-sale/new/query', //查询售后单
        'queryAfterSaleAdd'=> 'https://open.aikucun.com/open/api/after-sale/new/queryAfterSaleAdd',//查询售后地址
        'uploadlogistics'=> 'https://open.aikucun.com/open/api/after-sale/new/uploadlogistics',//上传快递单

        'queryAccount'=> 'https://open.aikucun.com/open/api/account/queryAccount' //获取余额
    ];

    public static $urlTest =[
        'category' => 'https://doulmapi-stable.akucun.com/open/api/category/getTree', //获取商品分类
        'activety' => 'https://doulmapi-stable.akucun.com/open/api/activity/v2/list/filter',  //活动
        'goods' =>'https://doulmapi-stable.akucun.com/open/api/product/list', //获取商品
        'goodsDetail' => 'https://doulmapi-stable.akucun.com/open/api/product/detail',  //商品详情
        'goodsStock' => 'https://doulmapi-stable.akucun.com/open/api/inventory/query',  //库存
        'goodsList' => 'https://doulmapi-stable.akucun.com/open/api/product/listByIds',  //批量获取商品
        'order' => 'https://doulmapi-stable.akucun.com/open/api/order/queryByOrderId',  //订单
        'createorder' => 'https://doulmapi-stable.akucun.com/open/api/order/create',  //创建订单
        'payorder' => 'https://doulmapi-stable.akucun.com/open/api/order/pay',  //支付订单
        'cancelByOrder' => 'https://doulmapi-stable.akucun.com/open/api/order/after/cancelByOrder',  //取消订单

        'afterSaleCreate' => 'https://doulmapi-stable.akucun.com/open/api/after-sale/new/create',  //创建售后订单
        'afterSaleCancel' => 'https://doulmapi-stable.akucun.com/open/api/after-sale/new/cancel',  //取消售后订单
        'afterSaleQuery'=> 'https://doulmapi-stable.akucun.com/open/api/after-sale/new/query', //查询售后单
        'queryAfterSaleAdd'=> 'https://doulmapi-stable.akucun.com/open/api/after-sale/new/queryAfterSaleAdd',//查询售后地址
        'uploadlogistics'=> 'https://doulmapi-stable.akucun.com/open/api/after-sale/new/uploadlogistics',//上传快递单

        'queryAccount'=> 'https://doulmapi-stable.akucun.com/open/api/account/queryAccount' //获取余额
    ];


    protected function configure()
    {
        $this->setName('akcapi')
            ->setDescription('定时任务')
            ->addArgument('name');
    }

    protected function setting()
    {
        if ($this->isTest ==1)
        {
            self::$config = self::$configTest;
            self::$url = self::$urlTest;
        }else
        {
            self::$config = self::$configFormal;
            self::$url = self::$urlFormal;
        }
    }
    protected function execute(Input $input, Output $output)
    {
        $this->setting();

        $name = $input->getArgument('name');
        switch($name){
            case 'cate':
                $res = $this->cate();
                break;
            case 'activety':
                $res = $this->activety();
                break;
            case 'goods':
                $res = $this->goods();
                break;
            case 'goodsDetail':
                $res = $this->goodsDetail();
                break;
            case 'goodsStock':
                $res = $this->goodsStock();
                break;
            case 'goodsList':
                $res = $this->goodsList();
                break;
            case 'order':
                $res = $this->order();
                break;
            case 'createorder':
                $res = $this->createorder();
                break;
            case 'payorder':
                $res = $this->payorder();
                break;
            case 'saleorder':
                $res = $this->saleorder();
                break;
            case 'afterSaleCreate':
                $res = $this->afterSaleCreate();
                break;
        }


    }
    function cate()
    {
        $this->setting();
        $dt =array();
        $dt['level'] =3;
        $category= $this->curlUrl('category',$dt);
        $category = $category['data'];
        for ($i=0;$i<count($category);$i++)
        {
            $id = (new GoodsCategoryValidate())->checkId($category[$i]['categoryCode'],array(),array());

            if($id == 1)
            {

            }else
            {

                $dt =array();
                $dt['id'] = $category[$i]['categoryCode'];
                $dt['name'] = $category[$i]['categoryName'];
                $dt['pid'] = $category[$i]['pid'];
                if ($category[$i]['categoryCode'] == $category[$i]['pid'])
                {
                    $dt['pid'] = 0;
                }
                $dt['level'] = $category[$i]['categoryLevel'];
                $dt['sort'] = $category[$i]['orderNo'];
                $dt['is_show'] = 1;
                $dt['create_time'] = time();
                $dt['is_new'] =1;

                //转换pid类型
                $dt['pid'] = (int)$dt['pid'];

                (new GoodsCategoryLogic())->add($dt);
                if (isset($category[$i]['children']))
                {
                    $categoryC1 =$category[$i]['children'];
                    if (!empty($categoryC1))
                    {
                        for ($k=0;$k<count($categoryC1);$k++)
                        {

                            $dt =array();
                            $dt['id'] = $categoryC1[$k]['categoryCode'];
                            $dt['name'] = $categoryC1[$k]['categoryName'];
                            $dt['pid'] = $categoryC1[$k]['parentId'];
                            $dt['level'] = $categoryC1[$k]['categoryLevel'];
                            $dt['sort'] = $categoryC1[$k]['orderNo'];
                            $dt['is_show'] = 1;
                            $dt['create_time'] = time();
                            $dt['is_new'] =1;
                            $dt['pid'] = (int)$dt['pid'];

                            $id2 = (new GoodsCategoryValidate())->checkId($dt['id'],array(),array());
                            if($id2 == 1) {

                            } else
                            {
                                (new GoodsCategoryLogic())->add($dt);
                                if (isset($categoryC1[$k]['children']))
                                {
                                    $categoryC2 =$categoryC1[$k]['children'];
                                    if (!empty($categoryC2))
                                    {
                                        for ($n=0;$n<count($categoryC2);$n++)
                                        {
                                            $dt =array();
                                            $dt['id'] = $categoryC2[$n]['categoryCode'];
                                            $dt['name'] = $categoryC2[$n]['categoryName'];
                                            $dt['pid'] = $categoryC2[$n]['parentId'];
                                            $dt['level'] = $categoryC1[$k]['categoryLevel'];
                                            $dt['sort'] = $categoryC2[$n]['orderNo'];
                                            $dt['is_show'] = 1;
                                            $dt['create_time'] = time();
                                            $dt['is_new'] =1;
                                            $dt['pid'] = (int)$dt['pid'];
                                            $id3 = (new GoodsCategoryValidate())->checkId($dt['id'],array(),array());
                                            if($id3) {
                                                (new GoodsCategoryLogic())->add($dt);
                                            }
                                        }

                                    }
                                }
                            }


                        }

                    }
                }
            }
        }
        return $category;
    }
    function activety()
    {
        $dt = array();
        $dt['pageNo'] = $this->pageNo;
        $dt['pageSize'] = 1;
        $activety = $this->curlUrl('activety', $dt);
        $res =$activety['data'];
        $total =$activety['total'];
        $pageTotal = ceil($total/$this->pageSize);
        for ($k=0;$k<$pageTotal;$k++)
        {
            $dt = array();
            $dt['pageNo'] = $k + 1;
            $dt['pageSize'] = $this->pageSize;
            $activety = $this->curlUrl('activety', $dt);
            $res =$activety['data'];
            //print_r($res);
            for ($i=0;$i<count($res);$i++) {
                $id = (new GoodsActivityValidate())->checkId($res[$i]['activity']['id'], array(), array());
                if ($id ==1)
                {
                    //print_r($id);
                }else
                {
                    $dt =array();
                    $dt =$res[$i]['activity'];
                    $dt['activity_type'] =0;
                    $dt['activity_id'] =0;
                    $dt['goods_id'] =0;
                    $dt['item_id'] =0;
                    $dt['banner'] =json_encode($dt['banner']);
                    (new GoodsActivityLogic())->add($dt);
                }
            }
        }

    }
    function goods()
    {
        //获取期间的商品数量
        $list = (new GoodsActivityLogic())->getActivityDownGoodsLists();


        for ($n=0;$n<count($list);$n++)
        {

            $dt = array();
            $dt['liveId'] =$list[$n]['id'];
            $dt['pageNo'] = $this->pageNo;
            $dt['pageSize'] = 1;
            $goods = $this->curlUrl('goods', $dt);

            //print_r($goods);
            if (!isset($goods['data']))
            {
                echo $goods['resultMessage']."\n";
                continue;
                //return;
            }
            $res =$goods['data'];

            $total =$res['total'];
            $pageTotal = ceil($total/$this->pageSize);
            for ($k=0;$k<$pageTotal;$k++) {
                $dt = array();
                $dt['liveId'] =$list[$n]['id'];
                $dt['pageNo'] = $this->pageNo;
                $dt['pageSize'] = $this->pageSize;
                $goods = $this->curlUrl('goods', $dt);

                $res =$goods['data'];

                $productList =$res['productList'];

                for ($i=0;$i<count($productList);$i++)
                {
                    $check = (new GoodsValidate())->checkAkcGoods($productList[$i]['productId'],array(),array());
                    if ($check)
                    {
                    }else
                    {
                        $check = (new GoodsValidate())->updateAkcGoods($productList[$i]['productId'],array('status'=>$productList[$i]['status']),array());
                        echo $productList[$i]['productId']."/status:".$productList[$i]['status']."已存在\n";
                        continue;
                    }
                    //print_r($productList[$i]);
                    //插入商品主表
                    //判断唯一
                    $dt = array();
                    $dt['goods_image'] =  $productList[$i]['picture'];
                    $dt['category_id'][0] = $productList[$i]['categoryCode'];  //分类id
                    $dt['name'] = $productList[$i]['name'];  //分类id
                    $dt['brand_id'] = 0;//$productList[$i]['name'];  //品牌id   brand
                    $dt['express_type'] = 1;
                    $dt['supplier_id'] = 0;
                    $dt['is_express'] = 1;
                    $dt['is_selffetch'] = 0;
                    $dt['delivery_type'] = 1;

                    if (!empty($productList[$i]['detailUrls']))
                    {
                        $str ='';
                        foreach ($productList[$i]['detailUrls'] as $key =>$obj)
                        {
                            $str.='<p><img src="'.$obj.'"></p>';

                        }
                        $dt['content'] = $str;
                    }else
                    {
                        $dt['content'] = '';
                    }

                    //print_r($productList[$i]);
                    $skusAttributeList = $productList[$i]['skusAttributeList'];
                    //如果存在多维规格，就进行拼凑
                    if(!empty($skusAttributeList))
                    {

                        $spec_value =  array();
                        for ($j=0;$j<count($skusAttributeList);$j++)
                        {
                            $attributeName =  $skusAttributeList[$j]['attributeName'];
                            $spec_value[$attributeName] =  array();
                        }
                        for ($j=0;$j<count($skusAttributeList);$j++)
                        {
                            $attributeName =  $skusAttributeList[$j]['attributeName'];
                            array_push($spec_value[$attributeName],$skusAttributeList[$j]);
                        }
                        $spec =array();
                        $nn =0;
                        foreach ($spec_value as $key => $sl)
                        {
                            $spec[$nn]['has_image'] ='';
                            $spec[$nn]['id'] ='';
                            $spec[$nn]['name'] =$key;
                            $spec[$nn]['spec_list'] =array();
                            foreach ($sl as $kk => $slmx )
                            {
                                $spec[$nn]['spec_list'][$kk]['id'] = '';
                                $spec[$nn]['spec_list'][$kk]['value'] = $slmx['attributeValue'];
                                $spec[$nn]['spec_list'][$kk]['image'] = '';
                            }
                            $nn ++;
                        }
                        //print_r($spec_value);
                        //print_r($spec);
                        $dt['spec_value'] = $spec;
                    }

                    $server_spec_value_list =array();
                    $spec1=array();
                    $spec2=array();



                    //print_r($spec);exit;
                    if (count($spec) >=1)
                    {
                        $dt['spec_type'] =2;
                    }else
                    {
                        $dt['spec_type'] = 1;
                    }

                    $dt['code'] =$productList[$i]['productId'];  //分类id
                    $dt['unit_id'] =2;
                    $dt['video_source'] =1;
                    $dt['video_cover'] ='';
                    $dt['video'] ='';
                    $dt['poster'] ='';
                    $dt['express_money'] ='';
                    $dt['express_template_id'] ='';
                    $dt['stock_warning'] ='';
                    $dt['virtual_sales_num'] ='';
                    $dt['status'] =$productList[$i]['status'];
                    $dt['express_money'] ='';
                    $dt['is_new'] =1;
                    $dt['activity_id'] =$productList[$i]['activityId'];

                    if (!empty($productList[$i]['productMateria']['urls']))
                    {
                        foreach ($productList[$i]['productMateria']['urls'] as $key =>$obj)
                        {
                            $str2.='<p><img src="'.$obj.'"></p>';

                        }
                        $dt['productMateria'] = $str2;
                        //print_r($productList[$i]['productMateria']);exit;
                    }else
                    {
                        $dt['productMateria'] ='';
                    }





                    foreach ($spec as $key => $sp)
                    {
                        $l[$key] =array();
                        foreach ($sp['spec_list'] as $key1 => $sp1) {
                            array_push($l[$key],array('id'=>$key1 ,'spec_value'=>$sp1['value']));
                        }
                    }
                    //print_r($spec);
                    $spec1=array();
                    foreach ($l as $key =>$lp)
                    {
                        $spec1= $this->respac($spec1,$lp);
                    }
                    //$dt['server_spec_value_list'] = $spec1;


                    $sku_list =$productList[$i]['skuList'];

                    foreach ($sku_list as $kk =>$sku )
                    {

                        $str ='';
                        $str2 ='';
                        foreach ($sku['attributeList'] as $k2 => $sk2)
                        {
                            foreach ($spec as $k3 => $spec_t1)
                            {
                                foreach ($spec_t1['spec_list'] as $k4 => $spec_t2) {

                                    //$spec_t2['attributeName'] == $sk2['attributeName'] and
                                    if ($spec_t2['value'] == $sk2['attributeValue']) {
                                        $str .= $k4 . ",";
                                        $str2 .= $spec_t2['value'] . ",";
                                        //array_push($sku['attributeList'][$k2]['ids'],$k3);
                                    }
                                }
                            }
                            //echo $str;

                        }

                        $sku_list[$kk]['ids'] =substr($str, 0, -1);
                        $sku_list[$kk]['spec_value'] =substr($str2, 0, -1);
                        $sku_list[$kk]['skuId'] =$sku['skuId'];
                        $sku_list[$kk]['leftStoreNum'] =$sku['leftStoreNum'];


                    }
                    //$sku_list
                    print_r($sku_list);
                    /*
                    print_r($sku_list);exit;

                    exit;
                    print_r($productList[$i]['skuList']);
                    print_r($spec1);exit;*/
                    $spec1 =$sku_list;

                    $spec2= array();

                    //print_r($spec1);
                    foreach ($spec1 as $key =>$lp)
                    {
                        $temp =array();
                        $temp['id'] ='';
                        $temp['ids'] =$lp['ids'];
                        $temp['value'] =explode(',',$lp['spec_value']);
                        $temp['spec_value_str'] =$lp['spec_value'];
                        $temp['image'] ='';
                        $temp['sell_price'] = round($productList[$i]['price']/100 ,2);
                        $temp['lineation_price'] =round($productList[$i]['tagPrice']/100 ,2);
                        $temp['cost_price'] = round($productList[$i]['settlementPrice']/100 ,2);
                        $temp['stock'] =0;
                        $temp['volume'] =0;
                        $temp['weight'] =0;
                        $temp['bar_code'] ='';
                        $temp['skuId'] ='';
                        $temp['skuId'] =$lp['skuId'];
                        $temp['stock'] =$lp['leftStoreNum'];


                        $spec2[$key] = $temp;

                    }
                    $dt['spec_value_list'] = $spec2;

                    //print_r($dt);

                    //print_r($spec);


                    //$spec_value_list;
                    (new GoodsAkcController())->add_temp($dt);

                }
            }
            //$res =$goods['data']['productList'];


        }

        //活动过期后将商品下架



    }
    function respac($res,$obj){
        if (!empty($res) and !empty($obj))
        {
            $arr =array();
            foreach ($res as $key => $resobj)
            {
                foreach ($obj as $k2 => $ob)
                {
                    $temp =array();
                    $temp['ids'] =$resobj['id'].",".$ob['id'];
                    $temp['spec_value'] =$resobj['spec_value'].",".$ob['spec_value'];

                    array_push($arr,$temp);
                }

            }
            return $arr;
        }
        return $obj;


    }
    public  function goodsDetail($obj)
    {
        $this->setting();

        $dt = array();
        $dt['productId'] = $obj['code'];
        $dt['activeId'] = $obj['activity_id'];

        $res = $this->curlUrl('goodsDetail', $dt);
        if ($res['resultCode'] ==999999)
        {
            return $res['data']['product'] ;

        }else
        {
            return false;
        }
    }
    function goodsStock($obj)
    {
        $this->setting();
        $dt = array();
        $dt['liveId'] = $obj['activity_id'];
        $dt['skuIds'] = [];
        $dt['skuIds'][0] =$obj['skuId'];
        $res = $this->curlUrl('goodsStock', $dt);
        ///print_r($res);
        if ($res['resultCode'] ==999999)
        {
            return $res['data']['inventoryList'][0]['currentStock'];

        }else
        {
            return false;
        }

    }
    function goodsList()
    {
        $dt = array();
        $goods = array();
        $goods['productId'] = '2063265449498165762';
        $goods['activeId'] = '1397382005021306882';

        $dt['params'][0] =$goods ;
        $res = $this->curlUrl('goodsList', $dt);
        print_r($res);
    }

    /**
     * 查询订单状态
     *
     * @param $sn
     * @return bool|mixed|string
     */
    function order($sn)
    {
        $this->setting();
        $dt = array();
        $dt['orderId'] = $sn;
        $res = $this->curlUrl('order', $dt);
        return $res;
    }

    function createorder($id='')
    {
        $this->setting();
        if ($id > 0)
        {
            $lists = (new Order)::alias('o')
                ->join('user u','o.user_id = u.id')
                ->join('order_goods og','o.id = og.order_id')
                ->field('o.id,o.sn,o.order_type,o.order_amount,o.address,o.pay_status,o.order_status,o.create_time,u.id as user_id,u.nickname,u.sn as user_sn,u.avatar,o.delivery_type,o.verification_status,o.express_status')
                ->order('o.id','desc')
                ->append(['order_type_desc','pay_status_desc','order_status_desc','admin_order_btn','delivery_type_desc','delivery_address'])
                ->hidden(['order_type','pay_status','order_status','delivery_type','verification_status'])
                ->with(['order_goods' => function($query){
                    $query->field('goods_id,order_id,goods_snap,goods_name,goods_price,goods_num,item_id')->append(['goods_image','spec_value_str'])->hidden(['goods_snap']);
                }])
                ->where(['o.is_new'=>1])
                ->where(['o.is_send'=>0])
                ->where(['o.id'=>$id])
                ->select()
                ->toArray();
        }else
        {
            $lists = (new Order)::alias('o')
                ->join('user u','o.user_id = u.id')
                ->join('order_goods og','o.id = og.order_id')
                ->field('o.id,o.sn,o.order_type,o.order_amount,o.address,o.pay_status,o.order_status,o.create_time,u.id as user_id,u.nickname,u.sn as user_sn,u.avatar,o.delivery_type,o.verification_status,o.express_status')
                ->order('o.id','desc')
                ->append(['order_type_desc','pay_status_desc','order_status_desc','admin_order_btn','delivery_type_desc','delivery_address'])
                ->hidden(['order_type','pay_status','order_status','delivery_type','verification_status'])
                ->with(['order_goods' => function($query){
                    $query->field('goods_id,order_id,goods_snap,goods_name,goods_price,goods_num,item_id')->append(['goods_image','spec_value_str'])->hidden(['goods_snap']);
                }])
                ->where(['o.is_new'=>1])
                ->where(['o.is_send'=>0])
                ->select()
                ->toArray();
        }


        foreach ($lists as &$list) {
            //获取收件人
            $list['contact'] = $list['address']->contact ?? '';
            $list['mobile'] = $list['address']->mobile ?? '';
            unset($list['address']);

            //增加订单商品信息，用于导出
            unset($val);
            $list['order_goods_snap'] = '';
            foreach ($list['order_goods'] as $val) {
                $list['order_goods_snap'] .= '【商品名称：'.$val['goods_name'].'；商品规格：'.$val['spec_value_str'].'；商品价格：'.$val['goods_price'].'；商品数量：'.$val['goods_num'].'】、';
            }
        }

        foreach ($lists as &$list) {

            $goods = (new Goods())->where(['id'=>$list['order_goods'][0]['goods_id']])->select()->toArray();
            $goodsItem = (new GoodsItem())->where(['id'=>$list['order_goods'][0]['item_id']])->select()->toArray();

            $dt = array();
            $dt['externalOrderNo'] = $list['sn'];
            $address = explode(' ',$list['delivery_address']);

            $dt['address'] = ['area'=>$address[2],'city'=>$address[1],'province'=>$address[0],'street'=>$address[3],'name'=>$list['contact'],'mobile'=>$list['mobile']];


            ksort($dt['address']);
            $dt['productList'] = [['amount'=>$list['order_goods'][0]['goods_num'],'liveId'=>$goods[0]['activity_id'],'productId'=>$goods[0]['code'],'skuId'=>$goodsItem[0]['skuId']]];
            ksort($dt['productList']);

            $res = $this->curlUrl('createorder', $dt);

            if ($res['resultCode'] == 999999)
            {
                //支付一下订单
                $pno = $res['data']['paymentOrder']['paymentNo'] ;

                $orderId = $res['data']['paymentOrder']['orderList'][0]['orderId'] ;

                $orderDetailId = $res['data']['paymentOrder']['orderList'][0]['orderDetailList'][0]['orderDetailId'] ;

                $order_amount = $res['data']['paymentOrder']['orderList'][0]['totalAmount'] ;

                //print_r($pno);
                //$this->order($pno);
                //更新一下订单

                Order::update(
                    [
                        'paymentNo'=>$pno,
                        'orderId'=>$orderId,
                        'orderDetailId'=>$orderDetailId,
                        'akc_order_amount'=> round($order_amount/100 ,2),
                        're_msg'=>json_encode($res)],
                    ['sn'=>$list['sn']]);

            }else
            {
                //更新一下订单
                if ($res['resultCode'] == 100102)
                {
                    Order::update(['is_send'=>1],['sn'=>$list['sn']]);
                }
            }
            //print_r($res);
        }

        //$order = (new Order())->where(['is_new'=>1])->select()->toArray();

        /*
        externalOrderNo	是	string	外部订单号 (长度最大varchar(50)) (必须唯一)
        address	是	Address	收货地址
        productList	是	Product[]	商品列表
        outerUserId	否	string	渠道商用户ID 使用优惠券时必填
        couponIds	否	string[]	优惠券使用ID列表 使用优惠券时必填*/

        return $res;
        //print_r($res);
    }
    function payorder($obj)
    {
        $this->setting();
        /*
        externalOrderNo	是	string	外部订单号 (长度最大varchar(50)) (必须唯一)
        address	是	Address	收货地址
        productList	是	Product[]	商品列表
        outerUserId	否	string	渠道商用户ID 使用优惠券时必填
        couponIds	否	string[]	优惠券使用ID列表 使用优惠券时必填*/
        $dt = array();
        $dt['orderPaymentNo'] = $obj;
        $res = $this->curlUrl('payorder', $dt);
        return $res;
    }

    /**
     * 支付后整单取消（Order级别）
     *
     * @param $orderId
     * @return bool
     */
    public function cancelByOrder($orderId){
        $this->setting();
        $params = [
            'orderId'=> $orderId
        ];

        $res = $this->curlUrl('cancelByOrder', $params);
//        var_dump($res);die;
        if ($res['resultCode'] == 999999)
        {
            return true;
        }else {
            return false;
        }
    }

    function saleorder()
    {
        $dt = array();
        $dt['applicationNo'] = "API20190402010192539447";
        $res = $this->curlUrl('saleorder', $dt);
        print_r($res);
    }

    /**
     * 创建售后订单
     *
     * @param $params
     * @param array $order
     * @return bool|mixed|string
     */
    public function afterSaleCreate($params, $order =array())
    {
        $this->setting();
        $dt = array();
        $dt['orderId'] = $order['orderId'];
        $dt['orderDetatilId'] = $order['orderDetailId'];
        //$pic_str ='';
        if (!empty($params['voucher'])) {
            $pic_str = implode(",", $params['voucher']);
            $dt['picUrls'] = $pic_str;
        } else {
            $dt['picUrls'] = ',';
        }
        if (!empty($params['refund_remark'])) {
            $dt['description'] = $params['refund_remark'];
        } else {
            $dt['description'] = '无';
        }

        $refund_reason = $params['refund_reason'];

        $rs =0;
        if ($refund_reason == '不喜欢/不要了') {
            $rs = 0;
        } elseif ($refund_reason == '商品漏发') {
            $rs = 1;
        } elseif ($refund_reason == '质量问题') {
            $rs = 2;
        } elseif ($refund_reason == '发错款号') {
            $rs = 3;
        } elseif ($refund_reason == '发错颜色') {
            $rs = 4;
        } elseif ($refund_reason == '发错尺码') {
            $rs = 5;
        }

        /*
         * 退货原因:
            0- 不想要了（无理由）
            1- 商品漏发
            2-质量问题
            3-发错款号
            4-发错颜色
            5-发错尺码
         */
        $dt['applicationType'] = $params['refund_method'] * 2;
        if ($params['refund_status'] == '整件漏发') {
            $dt['isReceived'] = '0';
//            $dt['amount'] = $order['akc_order_amount'];
        } else
        {
            $dt['isReceived'] = '1';
            //漏发件数 退款金额是（总金额/订单数）*漏发件数
            $orderGoods = OrderGoods::findOrEmpty($params['order_goods_id']);
        }
        $dt['amount'] = round($order['akc_order_amount'] / $orderGoods['goods_num'] * $params['refund_num'] ,2);
        $dt['refundReason'] = $rs;

        $res = $this->curlUrl('afterSaleCreate', $dt);
//        var_dump($dt);
//        var_dump($res);die;

        return $res;
    }

    /**
     * 查询余额
     *
     * @return bool|mixed|string
     */
    public function queryAccount(){
        $params['type'] = 1;
        $this->setting();
        $res = $this->curlUrl('queryAccount', $params);
//        var_dump($res);die;
        $balance = 0;
        if ($res['resultCode'] == 999999)
        {
            $balance = $res['data']['balance'];
        }
        return $balance;
    }

    /**
     * 撤销售后
     *
     * @param $params
     * @return bool|mixed|string
     */
    public function afterSaleCancel($params){
        $this->setting();
        $res = $this->curlUrl('afterSaleCancel', $params);
        return $res;
    }

    /**
     * 查询售后单
     *
     * @param $params
     * @return bool|mixed|string
     */
    public function afterSaleQuery($params){
        $this->setting();
        $res = $this->curlUrl('afterSaleQuery', $params);
        return $res;
    }

    /**
     * @param $params
     * @return bool|mixed|string
     */
    public function queryAfterSaleAdd($params){
        $this->setting();
        $res = $this->curlUrl('queryAfterSaleAdd', $params);
        return $res;
    }

    /**
     * 上传快递单
     *
     * @param $params
     * @return bool|mixed|string
     */
    public function uploadlogistics($params){
        $this->setting();
        $res = $this->curlUrl('uploadlogistics', $params);
        return $res;
    }


    /*
     * $urlval  接口代码
     * $dt  接口参数
     * */
    function curlUrl($urlval,$dt =array())
    {
        $url = self::$url[$urlval];
        $param  =$this->generateSign($dt);
        $param = json_encode($param );
        $data = $this->curl_post($url, $param );
        $data = json_decode($data ,true);
        if ($data['resultCode'] == 999999 and $data['resultMessage'] == 'success')
        {
            return $data;
        }else
        {
            return $data;
        }
    }

    function curl_post($url,$data,$method ="POST"){

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
}
