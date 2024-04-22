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

namespace app\common\command;

use app\adminapi\logic\after_sale\AfterSaleLogic;
use app\common\enum\AfterSaleLogEnum;
use app\common\enum\GoodsEnum;
use app\common\enum\OrderEnum;
use app\common\enum\OrderLogEnum;
use app\common\enum\PayEnum;
use app\common\model\AfterSale;
use app\common\model\GoodsActivity;
use app\common\model\OrderLog;
use app\common\service\after_sale\AfterSaleService;
use app\common\service\ConfigService;
use think\console\Command;
use think\console\Input;
use think\console\Output;
use app\adminapi\logic\goods\GoodsCategoryLogic;
use app\adminapi\validate\goods\GoodsCategoryValidate;
use app\adminapi\logic\goods\GoodsActivityLogic;
use app\adminapi\validate\goods\GoodsActivityValidate;
use app\adminapi\controller\goods\GoodsAkcController;
use app\adminapi\validate\goods\GoodsValidate;
use app\common\model\Order;
use app\common\model\Goods;
use app\common\model\GoodsItem;
use think\facade\Log;


/**
 * 定时任务
 * Class AkcApi
 * @package app\command
 */
class AkcApi extends Command
{

    public $isTest = 0;   //测试环境参数 0-正式 1-测试
    public $pageNo = 1;
    public $pageSize = 20;
    public static $config = [];
    public static $configFormal = [
        'appKey' => 'akb1251f300ed143e4',
        'appSecret' => '4f9154b7d682499fbb3a418e236eb6e2',
        'version' => '1.0',
    ];

    public static $configTest = [
        'appKey' => 'akff265df7d87d448a',
        'appSecret' => '46c0d329b6f44c5a9f18da04753d987a',
        'version' => '1.0',
    ];
    public static $url = array();
    public static $urlFormal =[
        'category' => 'https://open.aikucun.com/open/api/category/getTree',  //获取商品分类
        'activity' => 'https://open.aikucun.com/open/api/activity/v2/list/filter',  //活动
        'activityDetail'=> 'https://open.aikucun.com/open/api/activity/detail',
        'goods' => 'https://open.aikucun.com/open/api/product/list',  //获取商品
        'goodsDetail' => 'https://open.aikucun.com/open/api/product/detail',  //商品详情
        'order' => 'https://open.aikucun.com/open/api/order/queryByOrderId',  //订单

        'queryPay' => 'https://open.aikucun.com/open/api/order/queryByOrderPaymentNo',  //支付订单查询
        'queryLogistics' => 'https://open.aikucun.com/open/api/delivery/order/track',  //查询订单物流轨迹
        'queryAfterSale' => 'https://open.aikucun.com/open/api/after-sale/new/query',  //查询售后订单
        'confirmAfterSale' => 'https://open.aikucun.com/open/api/after-sale/new/feedback',  //确认售后退款金额
    ];


    public static $urlTest =[
        'category' => 'https://doulmapi-stable.akucun.com/open/api/category/getTree', //获取商品分类
        'activity' => 'https://doulmapi-stable.akucun.com/open/api/activity/v2/list/filter',  //活动
        'activityDetail'=> 'https://doulmapi-stable.akucun.com/open/api/activity/detail',
        'goods' =>'https://doulmapi-stable.akucun.com/open/api/product/list', //获取商品
        'goodsDetail' => 'https://doulmapi-stable.akucun.com/open/api/product/detail',  //商品详情
        'order' => 'https://doulmapi-stable.akucun.com/open/api/order/queryByOrderId',  //订单

        'queryPay' => 'https://doulmapi-stable.akucun.com/open/api/order/queryByOrderPaymentNo',  //支付订单查询
        'queryLogistics' => 'https://doulmapi-stable.akucun.com/open/api/delivery/order/track',  //查询订单物流
        'queryAfterSale' => 'https://doulmapi-stable.akucun.com/open/api/after-sale/new/query',  //查询售后订单
        'confirmAfterSale' => 'https://doulmapi-stable.akucun.com/open/api/after-sale/new/feedback',  //确认售后退款金额
        'queryTest'=> 'https://doulmapi-stable.akucun.com/open/api/order/queryLogistics'
    ];


    protected function configure()
    {
        $this->setName('akc')
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
                $res = $this->cate(); //同步分类
                break;
            case 'activity':
                $res = $this->activity();//同步活动
                break;
            case 'activityDetail':
                $res = $this->activityDetail();//
                break;
            case 'goods':
                $res = $this->goods();//同步活动商品
                break;
            case 'goodsDetail':
                $res = $this->goodsDetail();//
                break;
            case 'queryPay':
                $res = $this->queryPay();//同步发货
                break;
            case 'queryAfterSale':
                $res = $this->queryAfterSale(); //同步售后
                break;
            case 'sysCancelOrder':
                $res = $this->sysCancelOrder(); //同步系统(已支付)-取消订单
                break;
            case 'test':
                $res = $this->test();
                break;
        }
    }

    /**
     * 同步分类
     *
     * @return bool|mixed|string
     */
    public function cate()
    {
        $dt =array();
        $dt['level'] =3;
        $category= $this->curlUrl('category', $dt);
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

    /**
     * 同步活动
     */
    public function activity()
    {
        Log::write('更新专场列表*********开始');
        $__start_time = time();
        $dt = array();
        $dt['pageNo'] = $this->pageNo;
        $dt['pageSize'] = 1;
        $dt['activeModel'] = 1; //预告
        Log::write('更新专场列表*********参数'.json_encode($dt));
        $activity = $this->curlUrl('activity', $dt);
//        var_dump($activity);die;
        $total = $activity['total'];

        $pageTotal = ceil($total/$this->pageSize);
        $data = [];
        for ($k = 0; $k < $pageTotal; $k++)
        {
            $dt = array();
            $dt['pageNo'] = $k + 1;
            $dt['pageSize'] = $this->pageSize;
            $dt['activeModel'] = 1; //预告
            $activity = $this->curlUrl('activity', $dt);

            $res = $activity['data'];

            for ($i=0;$i<count($res);$i++) {
                $dt = $res[$i]['activity'];
                $info = GoodsActivity::where('id', $dt['id'])->find();
                if ($info)
                {
                    if($info['startDate'] != $dt['startDate'] || $info['endDate'] != $dt['endDate'] || $info['name']!= $dt['name']){
                        Log::write('更新专场列表*********更新'.json_encode($dt));
                        GoodsActivity::where('id', $dt['id'])
                            ->update(['startDate'=> $dt['startDate'], 'endDate'=> $dt['endDate'], 'name'=> $dt['name']]);
                    }
                }else
                {
                    if(!isset($dt['banner']) || empty($dt['banner'])){
                        continue;
                    }
                    //活动详情
                    $params = [
                        'liveId'=> $dt['id']
                    ];
                    $detail = $this->curlUrl('activityDetail', $params);
                    if($detail['resultCode'] == 999999){
                        $dt['waterMarkLicense'] = isset($detail['data']['activity']['waterMarkLicense']) ? $detail['data']['activity']['waterMarkLicense'] : null;
                    }

                    $dt['activity_type'] =0;
                    $dt['activity_id'] =0;
                    $dt['goods_id'] =0;
                    $dt['item_id'] =0;
                    $dt['banner'] = isset($dt['banner']) ? json_encode($dt['banner']) : '';
                    $data[] = $dt;
                    Log::write('更新专场列表*********添加ID:'. $dt['id']);
                    $get= (new GoodsActivityLogic())->add($dt);
                }
            }
        }

        $__end_time = time();
        Log::write('更新专场列表任务执行完成*********耗时:'. ($__end_time - $__start_time)."秒");
    }

    /**
     *
     *
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function activityDetail(){
        $list = GoodsActivity::where('id', '1764492884558942209')
            ->where('is_new', 1)->select()->toArray();

        $num = 0;
        foreach ($list as $item){
            //活动详情
            $params = [
                'liveId'=> $item['id']
            ];
            $detail = $this->curlUrl('activityDetail', $params);
            var_dump($detail);die;
            if($detail['resultCode'] == 999999 && isset($detail['data']['activity']['waterMarkLicense'])){
                $waterMarkLicense = $detail['data']['activity']['waterMarkLicense'];
                GoodsActivity::where('id', $item['id'])->update(['waterMarkLicense'=> $waterMarkLicense]);
                $num++;
            }
        }
        echo $num;die;
    }

    /**
     * 同步活动商品
     */
    public function goods()
    {
        //获取期间的商品数量
        $list = (new GoodsActivityLogic())->getActivityDownGoodsLists();
//        var_dump($list);die;
//        $id ='1589879053356281857';
//        $list[0]['id'] =$id;

        for ($n=0;$n<count($list);$n++)
        {
            $dt = array();
            $dt['liveId'] = $list[$n]['id'];
            $dt['pageNo'] = $this->pageNo;
            $dt['pageSize'] = 1;
            $goods = $this->curlUrl('goods', $dt);
            if (!isset($goods['data']))
            {
                GoodsActivity::where('id', $list[$n]['id'])->update(['down_goods_status'=> 1]);
                echo $goods['resultMessage']."\n";
                continue;
                //return;
            }
            $res = $goods['data'];

            $total = $res['total'];
            $pageTotal = ceil($total/$this->pageSize);
            for ($k=0; $k < $pageTotal; $k++) {
                $params = [];
                $params['liveId'] =$list[$n]['id'];
                $params['pageNo'] = $k + 1;
                $params['pageSize'] = $this->pageSize;
                $goods = $this->curlUrl('goods', $params);
                if(!isset($goods['data']['productList'])){
                    continue;
                }
                $productList = $goods['data']['productList'];
                $data = [];
                foreach ($productList as $product)
                {
                    $check = (new GoodsValidate())->checkAkcGoods($product['productId'], [], []);
                    if (!$check){
                        $check = (new GoodsValidate())->updateAkcGoods($product['productId'], ['status'=> $product['status']],[]);
                        echo $product['productId']."/status:".$product['status']."已存在\n";
                        continue;
                    }
                    //没有商品图片
                    if(!isset($product['picture']) || count($product['picture']) == 0){
                        continue;
                    }
                    //插入商品主表
                    //判断唯一
                    $dt = [];
                    $dt['goods_image'] =  $product['picture'];
                    $dt['category_id'][0] = $product['categoryCode'];  //分类id
                    $dt['name'] = $product['name'];  //
                    $dt['brand_id'] = 0;//$productList[$i]['name'];  //品牌id   brand
                    $dt['express_type'] = 1;
                    $dt['supplier_id'] = 0;
                    $dt['is_express'] = 1;
                    $dt['is_selffetch'] = 0;
                    $dt['delivery_type'] = 1;
                    $dt['content'] = '';
                    if (!empty($product['detailUrls']))
                    {
                        $str ='';
                        foreach ($product['detailUrls'] as $key =>$obj)
                        {
                            $str .= '<p><img src="'.$obj.'"></p>';
                        }
                        $dt['content'] = $str;
                    }

                    //如果存在多维规格，就进行拼凑
                    $skusAttributeList = $product['skusAttributeList'];
                    $sku_list = [];
                    if(!empty($skusAttributeList))
                    {
                        foreach ($skusAttributeList as $item){
                            $sku_list[$item['attributeName']][] = $item;
                        }

                        $spec_value = [];
                        $spec_value_key = 0;
                        foreach ($sku_list as $key => $sl)
                        {
                            $spec_value[$spec_value_key]['has_image'] ='';
                            $spec_value[$spec_value_key]['id'] = '';
                            $spec_value[$spec_value_key]['name'] = $key;
                            $spec_list = [];
                            foreach ($sl as $kk => $slmx )
                            {
                                $spec_list_item['id'] = '';
                                $spec_list_item['value'] = str_replace(',', '、', $slmx['attributeValue']);
                                $spec_list_item['image'] = '';
                                $spec_list[] = $spec_list_item;
                            }
                            $spec_value[$spec_value_key]['spec_list'] = $spec_list;
                            $spec_value_key++;
                        }
                        $dt['spec_value'] = $spec_value;
                    }

                    $dt['spec_type'] = count($sku_list) >= 1 ? GoodsEnum::SEPC_TYPE_MORE : GoodsEnum::SEPC_TYPE_SIGNLE;

                    $dt['code'] = $product['productId'];  //
                    $dt['unit_id'] = 2;
                    $dt['video_source'] = 1;
                    $dt['video_cover'] = '';
                    $dt['video'] ='';
                    $dt['poster'] ='';
                    $dt['express_money'] ='';
                    $dt['express_template_id'] ='';
                    $dt['stock_warning'] ='';
                    $dt['virtual_sales_num'] ='';
                    $dt['status'] = $product['status'];
                    $dt['express_money'] ='';
                    $dt['is_new'] =1;
                    $dt['activity_id'] = $product['activityId'];
                    $dt['productMateria'] = '';
                    if (!empty($product['productMateria']['urls']))
                    {
                        $str2 = '';
                        foreach ($product['productMateria']['urls'] as $key =>$obj)
                        {
                            $str2 .='<p><img src="'.$obj.'"></p>';
                        }
                        $dt['productMateria'] = $str2;
                    }

                    //匹配现有系统规格数据
                    list($spec_attr_list, $spec_value_list, $spec_name_list) = $this->getSpecValueList($dt);
                    $sku_list = $product['skuList'];
                    foreach ($sku_list as $kk =>$sku )
                    {
                        $data_sku = [];
                        $spec_key = '';
                        foreach ($sku['attributeList'] as $sku_attr){
                            $data_sku[$sku_attr['attributeName']] = str_replace(',', '、', $sku_attr['attributeValue']);
                        }
                        foreach ($spec_attr_list as $key=>$spec_item){
                            $data_spec = [];
                            foreach ($spec_item as $spec_attr){
                                $data_spec[$spec_attr['attributeName']] = str_replace(',', '、', $spec_attr['attributeValue']);
                            }
                            if(is_array($data_sku) && is_array($data_spec)){
                                if(count(array_diff_assoc($data_sku, $data_spec)) == 0){
                                    $spec_key = $key;
                                    break;
                                }
                            }
                        }

                        $sku_list[$kk]['ids'] = '';
                        $sku_list[$kk]['spec_value'] = '';
                        if($spec_key !== ''){
                            $sku_list[$kk]['ids'] = implode(',', $spec_value_list[$spec_key]);
                            $sku_list[$kk]['spec_value'] = implode(',', $spec_name_list[$spec_key]);
                            $sku_list[$kk]['skuId'] = $sku['skuId'];
                            $sku_list[$kk]['leftStoreNum'] = $sku['leftStoreNum'];
                        }
                    }

                    $spec2 = [];
                    foreach ($sku_list as $key =>$lp)
                    {
                        $temp = [];
                        $temp['id'] ='';
                        $temp['ids'] = $lp['ids'];
                        $temp['value'] = explode(',', $lp['spec_value']);
                        $temp['spec_value_str'] = $lp['spec_value'];
                        $temp['image'] ='';
                        $temp['sell_price'] = round($product['price']/100 ,2);
                        $temp['lineation_price'] = round($product['tagPrice']/100 ,2);
                        $temp['cost_price'] = round($product['settlementPrice']/100 ,2);
                        $temp['profit'] = round($product['profit']/100 ,2);
                        $temp['stock'] =0;
                        $temp['volume'] =0;
                        $temp['weight'] =0;
                        $temp['bar_code'] ='';
                        $temp['skuId'] ='';
                        $temp['skuId'] = $lp['skuId'];
                        $temp['stock'] = $lp['leftStoreNum'];
                        $spec2[$key] = $temp;
                    }
                    $dt['spec_value_list'] = $spec2;
                    $data[] = $dt;
//                    var_dump($dt);die;
                    (new GoodsAkcController())->add_temp($dt);
                }
//                var_dump($data);die;
            }

            //$res =$goods['data']['productList'];
//            if($k + 1 == $pageTotal){
                GoodsActivity::where('id', $list[$n]['id'])->update(['down_goods_status'=> 1]);
//            }
        }

        //活动过期后将商品下架
    }

    /**
     * 获取商品规格排序
     *
     * @param $dt
     * @return array
     */
    public function getSpecValueList($dt){
        $ids = $names = $lists = [];
        if(!empty($dt['spec_value'][0])){
            $spec1 = $dt['spec_value'][0];
            foreach ($spec1['spec_list'] as $k1=>$sp1){
                if(!empty($dt['spec_value'][1])){
                    $spec2 = $dt['spec_value'][1];
                    foreach ($spec2['spec_list'] as $k2=>$sp2){
                        if(!empty($dt['spec_value'][2])) {
                            $spec3 = $dt['spec_value'][2];
                            foreach ($spec3['spec_list'] as $k3=>$sp3){
                                $ids[$k1.$k2.$k3][] = $k1;
                                $ids[$k1.$k2.$k3][] = $k2;
                                $ids[$k1.$k2.$k3][] = $k3;
                                $lists[$k1.$k2.$k3][] = ['attributeName'=>$spec1['name'], 'attributeValue'=>$sp1['value']];
                                $lists[$k1.$k2.$k3][] = ['attributeName'=>$spec2['name'], 'attributeValue'=>$sp2['value']];
                                $lists[$k1.$k2.$k3][] = ['attributeName'=>$spec3['name'], 'attributeValue'=>$sp3['value']];
                                $names[$k1.$k2.$k3][] = $spec1['name'];
                                $names[$k1.$k2.$k3][] = $spec2['name'];
                                $names[$k1.$k2.$k3][] = $spec3['name'];
                            }
                        }else{
                            $ids[$k1.$k2][] = $k1;
                            $ids[$k1.$k2][] = $k2;
                            $lists[$k1.$k2][] = ['attributeName'=>$spec1['name'], 'attributeValue'=>$sp1['value']];
                            $lists[$k1.$k2][] = ['attributeName'=>$spec2['name'], 'attributeValue'=>$sp2['value']];
                            $names[$k1.$k2][] = $spec1['name'];
                            $names[$k1.$k2][] = $spec2['name'];
                        }
                    }
                }else{
                    $ids[$k1][] = $k1;
                    $lists[$k1][] = ['attributeName'=>$spec1['name'], 'attributeValue'=>$sp1['value']];
                    $names[$k1][] = $spec1['name'];
                }
            }
        }
        return [$lists, $ids, $names];
    }

    /**
     * 获取商品详情
     *
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function goodsDetail()
    {
        $lists = Goods::field('id,code,activity_id')->where('is_new', 1)->select();
        $success = $fail = 0;
        foreach ($lists as $item){
            $params = [
              'productId'=> $item['code'],
              'activeId'=>  $item['activity_id'],
            ];
            $res = $this->curlUrl('goodsDetail', $params);
            if ($res['resultCode'] == 999999)
            {
                $info = $res['data']['product'];
                //更新佣金
                GoodsItem::where('goods_id', $item['id'])->update(['profit'=> round($info['profit']/100 ,2)]);
                $success++;
            }else
            {
                $fail++;
            }
        }

        echo 'success:'.$success.';fail:'.$fail;
//        $dt = array();
//        $dt['productId'] = '2063265449498165762';
//        $dt['activeId'] = '1397382005021306882';
//        $res = $this->curlUrl('goodsDetail', $dt);
//        print_r($res);
    }

    /**
     * 爱库存发货
     */
    public function queryPay()
    {
        $list = (new GoodsAkcController())->queryPaylist();
//        $list[0]['id'] = 168;
//        $list[0]['paymentNo'] = '202211210030100040000001';

        for($i=0;$i<count($list);$i++)
        {
            $dt = array();
            $dt['orderPaymentNo'] = $list[$i]['paymentNo'];
            $res = $this->curlUrl('queryPay', $dt);
            if ($res['resultCode'] == 999999 and $res['resultMessage'] == 'success')
            {
                $orderstatus = $res['data']['paymentOrder']['orderList'][0]['orderStatus'];
                $orderId = $res['data']['paymentOrder']['orderList'][0]['orderId'];
                if ($orderstatus == 2)
                {
                    $logis = $this->queryLogistics($orderId);
                    $par = array();
                    $par['id'] = $list[$i]['id'];
//                    var_dump($par['id'], $logis);die;

                    if ($logis['resultCode'] == 999999 and $logis['resultMessage'] == 'success') {
                        if(count($logis['data']) == 0){
                            continue;
                        }
                        $par['send_type'] = 1;
//                        $par['express_id'] = 0;
//                        $par['express_name'] = '';
//                        $par['invoice_no'] = '';
//                        if(isset($logis['data'])){
                            $express = $logis['data'][0];
                            $par['express_id'] = $express['expressCompanyNo'];
                            $par['express_name'] = $express['logisticsCompany'];
                            $par['invoice_no'] = $express['logisticsNo'];
//                        }
                        $par['admin_id'] = 1;
                        $par['remark'] = '爱库存';
//                        var_dump($par);

                        (new GoodsAkcController())->deliveryakc($par);
                    }
                }
            }


            /*
            0	待付款
            1	待发货
            2	已发货
            3	截单待发货
            4	用户取消
            5	系统取消
            6	用户取消(已支付)
            7	系统取消(已支付)
            20	已完成 (备注: 订单手动签收和自动签收，都会改成已完成)*/
            //print_r($res);
        }
    }

    /**
     * 查询订单物流
     *
     * @param $orderId
     * @return bool|mixed|string
     */
    public function queryLogistics($orderId)
    {
        $dt = array();
        $dt['orderId'] = $orderId;
        $res = $this->curlUrl('queryLogistics', $dt);
        return $res;
    }

    /**
     * 查询售后单
     */
    public function queryAfterSale()
    {
        $search = ['status'=> 0];
        $lists = AfterSaleLogic::querySaleList($search);

        if(count($lists) == 0){
            return 'success:0';
        }

        foreach ($lists as $item){
            $dt = array();
            $dt['applicationNo'] = $item['applicationNo'];
            $res = $this->curlUrl('queryAfterSale', $dt);

            if ($res['resultCode'] == 999999 and $res['resultMessage'] == 'success')
            {
                $auditStatus = $res['data']['auditStatus'];
                //同意售后-系统确认退款金额
                if($auditStatus == 15 || $auditStatus == 7){
                    $flag = true;
                    if($auditStatus == 15){
                        $confirm_params = [
                            'applicationNo'=> $item['applicationNo'],
                            'status'=> 1
                        ];
                        $res_confirm = $this->curlUrl('confirmAfterSale', $confirm_params);//系统确认退款
                        if($res_confirm['resultCode'] != 999999){
                            $flag = false;
                        }else{
                            AfterSale::where('id', $item['id'])->update(['applicationStatus'=> 1]);
                        }
                    }
                    if($flag){
                        //同意售后
                        $params = [
                            'id'=> $item['id'],
                            'admin_id'=> 1,
                            'admin_remark'=> '系统同意售后'
                        ];
                        AfterSaleLogic::agree($params); //同意售后
                    }
                }else if($auditStatus == -1){ //拒绝售后
                    AfterSale::where('id', $item['id'])->update(['applicationStatus'=> 2]);
                    $params = [
                        'id'=> $item['id'],
                        'admin_id'=> 1,
                        'admin_remark'=> '系统拒绝售后'
                    ];
                    AfterSaleLogic::refuse($params); //拒绝售后
                    //二次拒绝
//                    if(!empty($res['data']['logisticsCompany']) && !empty($res['data']['shipmentNo'])){
//
//                    }
                }else if($auditStatus == 4){ //确认退款
                    //退货退款-确认收货
                    if($item['refund_method'] == 2){
                        $params = [
                            'id'=> $item['id'],
                            'admin_id'=> 1
                        ];
                        $res = AfterSaleLogic::confirmGoods($params); //确认收货
                        if($res){
                            AfterSale::where('id', $item['id'])->update(['applicationStatus'=> 1]);
                        }
                    }
                }else if($auditStatus == 41){
                    $params = [
                        'id'=> $item['id'],
                        'admin_id'=> 1,
                        'refund_remark'=> '商品影响二次销售，商家已将货物退回给您，请注意查收！'
                    ];
                    $res = AfterSaleLogic::refuseGoods($params); //确认收货
                    if($res){
                        AfterSale::where('id', $item['id'])->update(['applicationStatus'=> 1]);
                    }
                }
            }
        }
    }

    /**
     * 定时系统已支付-取消订单
     */
    public function sysCancelOrder(){
        $lists = (new GoodsAkcController())->queryPaylist();
        $num = 0;
        foreach($lists as $order) {
            $dt = [];
            $dt['orderPaymentNo'] = $order['paymentNo'];
            $res = $this->curlUrl('queryPay', $dt);
            if ($res['resultCode'] == 999999 and $res['resultMessage'] == 'success') {
                $orderStatus = $res['data']['paymentOrder']['orderList'][0]['orderStatus'];
                //系统取消已支付订单
                if($orderStatus == 7){
                    if ($order['pay_status'] == PayEnum::ISPAID) {
                        AfterSaleService::orderRefund([
                            'order_id' => $order['id'],
                            'scene' => AfterSaleLogEnum::BUYER_CANCEL_ORDER
                        ]);
                    }

                    //更新订单为已关闭
                    Order::update([
                        'order_status' => OrderEnum::STATUS_CLOSE,
                        'cancel_time' => time()
                    ], ['id' => $order['id']]);

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
                        'type' => OrderLogEnum::TYPE_USER,
                        'channel' => OrderLogEnum::USER_CANCEL_ORDER,
                        'order_id' => $order['id'],
                        'operator_id' => $order['user_id'],
                    ]);
                    $num++;
                }
            }
        }
        echo 'success:'.$num;
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

    /**
     *  测试
     */
    public  function test(){
        $dt['liveId'] = "1602235690842763265";
        $dt['pageNo'] = $this->pageNo;
        $dt['pageSize'] = 1;
        $goods = $this->curlUrl('goods', $dt);
        print_r($goods);die;

//        $dt['applicationNo'] = "API2212080050627000702000";
//        $res = $this->curlUrl('queryAfterSale', $dt);

//        $dt['orderId'] = '202211220030100040000137';
//        $res = $this->curlUrl('queryAfterSale', $dt);
//        print_r($res);die;
    }
}
