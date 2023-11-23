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

use akc\Akc;
use app\adminapi\controller\goods\GoodsAkcController;
use app\adminapi\logic\goods\GoodsActivityLogic;
use app\adminapi\validate\goods\GoodsValidate;
use app\common\enum\GoodsEnum;
use app\common\model\GoodsActivity;
use think\console\Command;
use think\console\Input;
use think\console\Output;
use think\facade\Log;

class AkcActivityGoods extends Command
{

    protected function configure()
    {
        $this->setName('akc_activity_goods')
            ->setDescription('获取爱库存专场活动商品');
    }

    protected function execute(Input $input, Output $output)
    {
        $__startTime = time();
        Log::info('拉取专场活动商品********开始');
        //获取期间的商品数量
        $activity_list = (new GoodsActivityLogic())->getActivityDownGoodsLists();
        if(count($activity_list) == 0){
            Log::info('拉取专场活动商品********无活动需要更新');
            return ;
        }
        $pageSize = 20;
        $akc = new Akc();
        foreach ($activity_list as $activity){
            $params = [
                'liveId'=> $activity['id'],
                'pageNo' => 1,
                'pageSize' => 1
            ];
            $total_goods = $akc->activityGoods($params);
            if(!isset($total_goods['data']))
            {
                GoodsActivity::where('id', $activity['id'])->update(['down_goods_status'=> 1]);
                Log::info('拉取专场活动商品********拉取列表ID:'.$activity['id']);
                Log::info('拉取专场活动商品********拉取列表失败:'.$total_goods['resultMessage']);
                continue;
            }
            $total = $total_goods['data']['total'];
            $pageTotal = ceil($total/$pageSize);
            $num = 0;
            for ($k=0; $k < $pageTotal; $k++) {
                $params = [
                    'liveId'=> $activity['id'],
                    'pageNo' => $k + 1,
                    'pageSize' =>  $pageSize
                ];
                $goods = $akc->activityGoods($params);
                if(!isset($goods['data']['productList'])){
                    Log::info('拉取专场活动商品********第'.($k + 1).'页拉取列表ID:'.$activity['id']);
                    Log::info('拉取专场活动商品********第'.($k + 1).'页取列表失败:'.json_encode($goods));
                    continue;
                }
                $productList = $goods['data']['productList'];
                foreach ($productList as $product)
                {
                    $check = (new GoodsValidate())->checkAkcGoods($product['productId'], [], []);
                    if (!$check){
                        (new GoodsValidate())->updateAkcGoods($product['productId'], ['status'=> $product['status']],[]);
                        Log::info('拉取专场活动商品********'.$product['productId']."/status:".$product['status']."已存在");
                        continue;
                    }
                    //没有商品图片
                    if(!isset($product['picture']) || count($product['picture']) == 0){
                        Log::info('拉取专场活动商品********'.$product['productId']."没有商品图片");
                        continue;
                    }
                    $category_ids[] = $product['categoryCode'];
                    $detailUrls     = $product['detailUrls']??[];
                    $content = $this->getContent($detailUrls);
                    list($spec_value, $spec_type) = $this->getSpec($product['skusAttributeList']);

                    $goods_item = [
                        'goods_image'=> $product['picture'],
                        'category_id'=> $category_ids,
                        'name'=> $product['name'],
                        'express_type'=> 1,
                        'is_express'=> 1,
                        'is_selffetch'=> 0,
                        'express_money'=> 0,
                        'express_template_id'=> null,
                        'delivery_type'=> 1,
                        'brand_id'=> null,
                        'supplier_id'=> null,
                        'unit_id'=> null,
                        'video_source'=> null,
                        'video_cover'=> null,
                        'video'=> null,
                        'poster'=> null,
                        'stock_warning'=> '',
                        'virtual_sales_num'=> '',
                        'content'=> $content,
                        'spec_value'=> $spec_value,
                        'spec_type'=> $spec_type,
                        'code'=> $product['productId'],
                        'status'=> $product['status'],
                        'is_new'=> 1,
                        'activity_id'=> $product['activityId'],
                        'productMateria'=> $this->getMateria($product)
                    ];
                    //匹配现有系统规格数据
                    list($spec_attr_list, $spec_value_list, $spec_name_list) = $this->getSpecValueList($goods_item);
                    $goods_item['spec_value_list'] = $this->getSkuList($product, $spec_attr_list, $spec_value_list, $spec_name_list);
                    Log::info('拉取专场活动商品********拉取数据productId:'.$product['productId']);
                    (new GoodsAkcController())->add_temp($goods_item);
                    $num++;
                    $category_ids = [];
                }
            }

            Log::info('拉取专场活动商品********拉取专场ID:'.$activity['id']);
            Log::info('拉取专场活动商品********拉取专场商品成功:'.$num);
            GoodsActivity::where('id', $activity['id'])->update(['down_goods_status'=> 1]);
        }

        $__endTime = time();
        Log::write('拉取专场活动商品任务执行完成，成功;耗时：' . ($__endTime - $__startTime) . '秒');
    }

    /**
     * 获取详情
     *
     * @param $list
     * @return string
     */
    private function getContent($list){
        $str ='';
        if (!empty($list))
        {
            foreach ($list as $key =>$obj)
            {
                $str .= '<p><img src="'.$obj.'"></p>';
            }
        }
        return $str;
    }

    /**
     * 获取素材
     *
     * @param $product
     * @return string
     */
    private function getMateria($product){
        $str2 = '';
        if (!empty($product['productMateria']['urls']))
        {
            foreach ($product['productMateria']['urls'] as $key =>$obj)
            {
                $str2 .='<p><img src="'.$obj.'"></p>';
            }
        }
        return $str2;
    }

    /**
     * 规格
     *
     * @param $skusAttributeList
     * @return array
     *
     */
    private function getSpec($skusAttributeList){
        //如果存在多维规格，就进行拼凑
        $sku_list = [];
        $spec_value = [];
        if(!empty($skusAttributeList))
        {
            foreach ($skusAttributeList as $item){
                $sku_list[$item['attributeName']][] = $item;
            }
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

        }
        $spec_type = count($sku_list) >= 1 ? GoodsEnum::SEPC_TYPE_MORE : GoodsEnum::SEPC_TYPE_SIGNLE;
        return [$spec_value, $spec_type];
    }

    /**
     * 获取sku
     *
     * @param $product
     * @param $sku_list
     * @param $spec_attr_list
     * @param $spec_value_list
     * @param $spec_name_list
     * @return array
     */
    private function getSkuList($product, $spec_attr_list, $spec_value_list, $spec_name_list){
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
            $temp['sell_price'] = round($product['price2C']/100 ,2);
            $temp['lineation_price'] = round($product['tagPrice']/100 ,2);
            $temp['cost_price'] = round($product['settlementPrice']/100 ,2);
            $temp['profit'] = round($product['profit']/100 ,2);
            $temp['volume'] =0;
            $temp['weight'] =0;
            $temp['bar_code'] ='';
            $temp['skuId'] = $lp['skuId'];
            $temp['stock'] = $lp['leftStoreNum'];
            $spec2[$key] = $temp;
        }

        return $spec2;
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
}