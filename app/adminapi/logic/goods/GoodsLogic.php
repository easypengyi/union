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
// | Author: LikeShopTeam
// +----------------------------------------------------------------------
namespace app\adminapi\logic\goods;
use think\facade\Db;
use app\common\enum\{
    YesNoEnum,
    GoodsEnum,
    DefaultEnum,
};
use app\common\model\{DistributionGoods,
    Goods,
    Freight,
    GoodsActivity,
    GoodsUnit,
    GoodsSpec,
    GoodsItem,
    GoodsImage,
    GoodsBrand,
    GoodsSupplier,
    GoodsCategory,
    GoodsSpecValue,
    GoodsCategoryIndex};

/**
 * 商品逻辑层
 * Class GoodsLogic
 * @package app\adminapi\logic\goods
 */
class GoodsLogic
{

    /**
     * Notes:添加商品
     * @param array $postData 商品信息
     * @return bool|string
     * @author: cjhao 2021/7/9 18:04
     */
    public function add(array $params)
    {
        Db::startTrans();
        try {

            $goods = $this->setBase($params);
            $this->addGoodsItem($goods,$params);
            Db::commit();

            return true;
        } catch (\Exception $e) {
            Db::rollback();

            return $e->getMessage();
        }

    }


    /**
     * @notes 编辑商品
     * @param array $params
     * @return bool|string
     * @author cjhao
     * @date 2021/7/14 18:09
     */
    public function edit(array $params)
    {
        Db::startTrans();
        try {

            $goods = $this->setBase($params);
            $this->editGoodsItem($goods,$params);
            //todo 其他业务逻辑

            // 编辑商品时清除已设置好的分销比例，商家须重新设置
            $deleteIds = DistributionGoods::where('goods_id', $params['id'])->column('id');
            DistributionGoods::destroy($deleteIds);

            Db::commit();
            return true;
        } catch (\Exception $e) {

            Db::rollback();
            return $e->getMessage();
        }
    }

    /**
     * @notes 商品基础信息
     * @param array $params
     * @return Goods|array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author cjhao
     * @date 2021/7/22 14:01
     */
    public function setBase(array $params){

        $goods = new Goods();
        $goodsImage = $params['goods_image'];
        $goodsCategory = $params['category_id'];
        //总库存
        $totalStock = array_sum(array_column($params['spec_value_list'],'stock'));
        //售价数组
        $specPriceArray = array_column($params['spec_value_list'],'sell_price');
        //划线价数组
        $specLineationPriceArray = array_column($params['spec_value_list'],'lineation_price');

        //编辑操作
        if(isset($params['id'])){
            $goods = $goods::find($params['id']);
            //删除轮播图
            GoodsImage::where(['goods_id'=>$goods->id])->delete();
            //删除商品分类
            GoodsCategoryIndex::where(['goods_id'=>$goods->id])->delete();
            //保存改变前的规格类型
            $goods->oldSpecType = $goods->spec_type;
        }

        //更新商品基础信息
        $goods->name                = $params['name'];
        $goods->code                = $params['code'];
        $goods->brand_id            = $params['brand_id'];
        $goods->supplier_id         = $params['supplier_id'];
        $goods->unit_id             = $params['unit_id'];
        $goods->image               = array_shift($goodsImage); //弹出第一张图片，设为商品主图;
        $goods->spec_type           = $params['spec_type'];
        $goods->video_source        = $params['video_source'];
        $goods->video_cover         = $params['video_cover'];
        $goods->video               = $params['video'];
        $goods->poster              = $params['poster'];
        $goods->total_stock         = $totalStock;
        $goods->min_price           = min($specPriceArray);
        $goods->max_price           = max($specPriceArray);
        $goods->min_lineation_price = min($specLineationPriceArray);
        $goods->max_lineation_price = max($specLineationPriceArray);
        $goods->express_type        = $params['express_type'];
        $goods->express_money       = $params['express_money'];
        $goods->express_template_id = $params['express_template_id'];
        $goods->stock_warning       = $params['stock_warning'];
        $goods->virtual_sales_num   = $params['virtual_sales_num'];
        $goods->sort                = $params['sort'] ?? DefaultEnum::SORT;
        $goods->status              = $params['status'];
        $goods->content             = $params['content'];
        $goods->is_express          = $params['is_express'];        //快递配送
        $goods->is_selffetch        = $params['is_selffetch'];      //上门自提
        $goods->click_num   = $params['click_num'] ?? 0;


        //爱库存

        if (isset($params['activity_id']))
        {
            $goods->activity_id             = $params['activity_id'];
            $goods->is_new = $params['is_new'];
            $goods->productMateria             = $params['productMateria'];
        }

        //编辑活动id
        if(!empty($params['goods_activity_id'])){
            $goods->activity_id         = $params['goods_activity_id'];
        }


        $goods->save();

        //添加商品轮播图
        if ($goodsImage) {
            array_walk($goodsImage, function (&$image){
                $image = ['uri' => $image];
            });
            $goods->imageList()->saveAll($goodsImage);
        }
        //添加商品分类关联表
        if($goodsCategory){
            array_walk($goodsCategory, function (&$category_id){
                $category_id = ['category_id' => $category_id];
            });
            $goods->goodsCategoryIndex()->saveAll($goodsCategory);

        }

        return $goods;
    }

    /**
     * @notes 添加商品规格信息
     * @param Goods $goods
     * @param array $params
     * @author cjhao
     * @date 2021/7/22 14:37
     */
    public function addGoodsItem(Goods $goods,array $params)
    {

        $specType = $params['spec_type'];
        //添加商品规格
        if (GoodsEnum::SEPC_TYPE_SIGNLE == $specType) {

            //单规格商品
            $specValueList = $params['spec_value_list'];
            foreach ($specValueList as $spec) {

                $goodsSpec = new GoodsSpec();
                $goodsSpec->goods_id = $goods->id;
                $goodsSpec->name = '默认';
                $goodsSpec->save();

                $goodsSpecValue = new GoodsSpecValue();
                $goodsSpecValue->save([
                    'goods_id'  => $goodsSpec->goods_id,
                    'spec_id'   => $goodsSpec->id,
                    'value'     => '默认',
                ]);

                $specValueData = [
                    'goods_id'         => $goods->id,
                    'spec_value_ids'   => $goodsSpecValue->id,
                    'spec_value_str'   => '默认',
                    'image'            => $spec['image'],
                    'sell_price'       => $spec['sell_price'],
                    'lineation_price'  => $spec['lineation_price'],
                    'cost_price'       => $spec['cost_price'],
                    'profit'           => isset($spec['profit']) ? $spec['profit'] : 0,
                    'stock'            => $spec['stock'],
                    'volume'           => $spec['volume'],
                    'weight'           => $spec['weight'],
                    'bar_code'         => $spec['bar_code'],
                    //akc

                ];

                if (isset($specValueList['skuId']))
                {
                    $specValueData['skuId']= $specValueList['skuId'];
                }

                (new GoodsItem())->save($specValueData);
            }


        } else {

            //添加规格项
            $postSpecValue = $params['spec_value'];
            $specData = [];
            foreach ($postSpecValue as $sepcKey => $specVal) {
                $goodsSpec = new GoodsSpec();
                $goodsSpec->goods_id = $goods->id;
                $goodsSpec->name = $specVal['name'];
                $goodsSpec->save();
                //处理规格值
                array_walk($specVal['spec_list'], function ($spec) use ($goodsSpec,&$specData){
                    $specData[] = ['spec_id'=>$goodsSpec->id,'value'=>$spec['value']];

                });

            }

            $goods->specValueSpec()->saveAll($specData);

            //添加规格信息
            $serverSpecValueList = $params['server_spec_value_list'];
            //改变数据结构，ids为索引
            $postSpecValueList = array_column($params['spec_value_list'], null, 'ids');
            $goodsSpecValueList = GoodsSpecValue::where(['goods_id'=>$goods->id])
                        ->group('spec_id')
                        ->column(' GROUP_CONCAT(value Separator \',\') as spec_values,GROUP_CONCAT(id Separator \',\') as spec_ids');
//            var_dump($goodsSpecValueList);die;

            $specValueData = [];

            foreach ($serverSpecValueList as $serverValue) {

                $specValueList = $postSpecValueList[$serverValue['ids']];
                $specValue = explode(GoodsEnum::SPEC_SEPARATOR, $serverValue['spec_value']);
                $specIds = [];

                //获取规格值对应的id
                foreach ($specValue as $specIndex => $specVal){
                    $specListValues = explode(',',$goodsSpecValueList[$specIndex]['spec_values']);
                    $specListIds = explode(',',$goodsSpecValueList[$specIndex]['spec_ids']);
                    $specValueIds = array_combine($specListValues,$specListIds);
                    $specIds[] = $specValueIds[$specVal];

                }

                $specValueData[] = [
                    'spec_value_ids'    => implode(GoodsEnum::SPEC_SEPARATOR, $specIds),
                    'spec_value_str'    => $serverValue['spec_value'],
                    'image'             => $specValueList['image'],
                    'sell_price'        => $specValueList['sell_price'],
                    'lineation_price'   => $specValueList['lineation_price'],
                    'cost_price'        => $specValueList['cost_price'],
                    'profit'           => isset($specValueList['profit']) ? $specValueList['profit'] : 0,
                    'stock'             => $specValueList['stock'],
                    'volume'            => $specValueList['volume'],
                    'weight'            => $specValueList['weight'],
                    'bar_code'          => $specValueList['bar_code'],
                    //akc
                    'skuId'         => $specValueList['skuId'] ?? null,
                ];

            }
            $goods->specValueList()->saveAll($specValueData);
        }
    }

    /**
     * @notes 编辑商品规格信息
     * @param Goods $goods
     * @param array $params
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author cjhao
     * @date 2021/7/22 14:46
     */
    public function editGoodsItem(Goods $goods,array $params)
    {
        $specType = $params['spec_type'];         //编辑后的规格类型
        $oldSpecType = $goods->oldSpecType;       //原来的规格类型
        //编辑商品规格
        if(GoodsEnum::SEPC_TYPE_SIGNLE == $specType){
            //原来单规格，更新规格信息
            $specValueList = $params['spec_value_list'][0];

            if(GoodsEnum::SEPC_TYPE_SIGNLE == $oldSpecType){
                GoodsItem::update([
                    'id'               => $specValueList['id'],
                    'sell_price'       => $specValueList['sell_price'],
                    'lineation_price'  => $specValueList['lineation_price'],
                    'cost_price'       => $specValueList['cost_price'],
                    'stock'            => $specValueList['stock'],
                    'volume'           => $specValueList['volume'],
                    'weight'           => $specValueList['weight'],
                    'bar_code'         => $specValueList['bar_code'],
                    //akc
                    'skuId'         => $specValueList['skuId'] ?? null,
                ]);

            }else{

                //原来多规格，删除多规格数据
                GoodsSpec::where(['goods_id'=>$goods->id])->delete();
                GoodsSpecValue::where(['goods_id'=>$goods->id])->delete();
                GoodsItem::where(['goods_id'=>$goods->id])->delete();

                //写入单规格数据
                $goodsSpec = new GoodsSpec();
                $goodsSpec->goods_id = $goods->id;
                $goodsSpec->name = '默认';
                $goodsSpec->save();
                $goodsSpecValue = new GoodsSpecValue();
                $goodsSpecValue->save([
                    'goods_id'  => $goodsSpec->goods_id,
                    'spec_id'   => $goodsSpec->id,
                    'value'     => '默认',
                ]);

                $specValueData = [
                    'goods_id'         => $goods->id,
                    'spec_value_ids'   => $goodsSpecValue->id,
                    'spec_value_str'   => '默认',
                    'image'            => $specValueList['image'],
                    'sell_price'       => $specValueList['sell_price'],
                    'lineation_price'  => $specValueList['lineation_price'],
                    'cost_price'       => $specValueList['cost_price'],
                    'stock'            => $specValueList['stock'],
                    'volume'           => $specValueList['volume'],
                    'weight'           => $specValueList['weight'],
                    'bar_code'         => $specValueList['bar_code'],
                    //akc
                    'skuId'         => $specValueList['skuId'] ?? null,
                ];
                (new GoodsItem())->save($specValueData);

            }

        }else{

            //原单规格
            if(GoodsEnum::SEPC_TYPE_SIGNLE == $oldSpecType){
                //原来单规格，删除单规格数据
                GoodsSpec::where(['goods_id'=>$goods->id])->delete();
                GoodsSpecValue::where(['goods_id'=>$goods->id])->delete();
                GoodsItem::where(['goods_id'=>$goods->id])->delete();

                //添加规格项
                $postSpecValue = $params['spec_value'];
                $specData = [];
                foreach ($postSpecValue as $specVal) {
                    $goodsSpec = new GoodsSpec();
                    $goodsSpec->goods_id = $goods->id;
                    $goodsSpec->name = $specVal['name'];
                    $goodsSpec->save();

                    //处理规格值
                    array_walk($specVal['spec_list'], function ($spec) use ($goodsSpec,&$specData){
                        $specData[] = ['spec_id'=>$goodsSpec->id,'value'=>$spec['value']];
                    });

                }

                $goods->specValueSpec()->saveAll($specData);

                //添加规格信息
                $serverSpecValueList = $params['server_spec_value_list'];
                //改变数据结构，ids为索引
                $postSpecValueList = array_column($params['spec_value_list'], null, 'ids');
                $goodsSpecValueList = GoodsSpecValue::where(['goods_id'=>$goods->id])
                    ->group('spec_id')
                    ->column(' GROUP_CONCAT(value Separator \',\') as spec_values,GROUP_CONCAT(id Separator \',\') as spec_ids');
                $specValueData = [];

                foreach ($serverSpecValueList as $serverValue) {

                    $specValueList = $postSpecValueList[$serverValue['ids']];
                    $specValue = explode(GoodsEnum::SPEC_SEPARATOR, $serverValue['spec_value']);
                    $specIds = [];

                    //获取规格值对应的id
                    foreach ($specValue as $specIndex => $specVal){
                        $specListValues = explode(',',$goodsSpecValueList[$specIndex]['spec_values']);
                        $specListIds = explode(',',$goodsSpecValueList[$specIndex]['spec_ids']);
                        $specValueIds = array_combine($specListValues,$specListIds);
                        $specIds[] = $specValueIds[$specVal];


                    }

                    $specValueData[] = [
                        'spec_value_ids'    => implode(GoodsEnum::SPEC_SEPARATOR, $specIds),
                        'spec_value_str'    => $serverValue['spec_value'],
                        'image'             => $specValueList['image'],
                        'sell_price'        => $specValueList['sell_price'],
                        'lineation_price'   => $specValueList['lineation_price'],
                        'cost_price'        => $specValueList['cost_price'],
                        'stock'             => $specValueList['stock'],
                        'volume'            => $specValueList['volume'],
                        'weight'            => $specValueList['weight'],
                        'bar_code'          => $specValueList['bar_code'],
                        //akc
                        'skuId'         => $specValueList['skuId'] ?? null,
                    ];

                }
                $goods->specValueList()->saveAll($specValueData);


            }else{

                //原来多规格，改变后还是多规格
                $goodsSpecIds = GoodsSpec::where(['goods_id'=>$goods->id])->column('id');
                $goodsSpecValueIds = GoodsSpecValue::where(['goods_id'=>$goods->id])->column('id');
                $goodsItemIds = GoodsItem::where(['goods_id'=>$goods->id])->column('id');
                $postSpecValue = $params['spec_value'];
                $postGoodsSpecValueIds = [];

                foreach ($postSpecValue as $spec) {

                    $goodsSpec = new GoodsSpec();
                    //存在规格id,进行更新操作
                    if($spec['id'] > 0){
                        $goodsSpec = $goodsSpec->find($spec['id']);
                    }
                    $goodsSpec->goods_id = $goods->id;
                    $goodsSpec->name = $spec['name'];
                    $goodsSpec->save();
                    //合并规格值id
                    $postGoodsSpecValueIds = array_merge($postGoodsSpecValueIds,array_column($spec['spec_list'],'id'));

                    //写入规格，存在则更新
                    array_walk($spec['spec_list'], function ($specVal) use ($goodsSpec, &$specList) {
                        $goodsSpecValue = new GoodsSpecValue();
                        //存在规格值id，进行更新操作
                        if($specVal['id'] > 0){
                            $goodsSpecValue = $goodsSpecValue->find($specVal['id']);
                        }
                        $goodsSpecValue->save([
                            'goods_id'  => $goodsSpec->goods_id,
                            'spec_id'   => $goodsSpec->id,
                            'value'     => $specVal['value'],
                        ]);

                    });
                }

                //添加规格信息
                $serverSpecValueList = $params['server_spec_value_list'];

                //改变数据结构，ids为索引
                $postSpecValueList = array_column($params['spec_value_list'], null, 'ids');
                $specValues = array_column($serverSpecValueList, 'spec_value');
                $specValues = implode(',',$specValues);
                $goodsSpecValueList = GoodsSpecValue::where(['goods_id'=>$goods->id])
                    ->where('value','in',$specValues)
                    ->group('spec_id')
                    ->column(' GROUP_CONCAT(value Separator \',\') as spec_values,GROUP_CONCAT(id Separator \',\') as spec_ids');

                $specValueData = [];

                foreach ($serverSpecValueList as $serverValue) {

                    $specValueList = $postSpecValueList[$serverValue['ids']];
                    $specValue = explode(GoodsEnum::SPEC_SEPARATOR, $serverValue['spec_value']);
                    $specIds = [];

                    //获取规格值对应的id
                    foreach ($specValue as $specIndex => $specVal){

                        $specListValues = explode(',',$goodsSpecValueList[$specIndex]['spec_values']);
                        $specListIds = explode(',',$goodsSpecValueList[$specIndex]['spec_ids']);
                        $specValueIds = array_combine($specListValues,$specListIds);
                        $specIds[] = $specValueIds[$specVal];

                    }

                    //添加的数据
                    $itemData = [
                        'spec_value_ids'    => implode(GoodsEnum::SPEC_SEPARATOR, $specIds),
                        'spec_value_str'    => $serverValue['spec_value'],
                        'image'             => $specValueList['image'],
                        'sell_price'        => $specValueList['sell_price'],
                        'lineation_price'   => $specValueList['lineation_price'],
                        'cost_price'        => $specValueList['cost_price'],
                        'stock'             => $specValueList['stock'],
                        'volume'            => $specValueList['volume'],
                        'weight'            => $specValueList['weight'],
                        'bar_code'          => $specValueList['bar_code'],
                        //akc
                        'skuId'         => $specValueList['skuId'] ?? null,
                    ];
                    //更新规格
                    if($specValueList['id'] > 0){
                        $itemData['id'] = $specValueList['id'];
                    }
                    $specValueData[] = $itemData;

                }

                $goods->specValueList()->saveAll($specValueData);


                $postSpecIds = array_column($postSpecValue,'id');
                $postItemIds = array_column($params['spec_value_list'],'id');
                //对比规格是否需要删除
                $delSpecIds = array_diff($goodsSpecIds, $postSpecIds);

                $delSpecValyeIds = array_diff($goodsSpecValueIds, $postGoodsSpecValueIds);

                $delItemIds = array_diff($goodsItemIds, $postItemIds);

                //需要删除规格名
                if($delSpecIds){
                    GoodsSpec::where(['id'=>array_values($delSpecIds)])->delete();
                }
                //删除规格值
                if($delSpecValyeIds){
                    GoodsSpecValue::where(['id'=>array_values($delSpecValyeIds)])->delete();
                }
                //删除规格信息
                if($delItemIds){
                    GoodsItem::where(['id'=>array_values($delItemIds)])->delete();
                }
            }

        }

    }


    /**
     * @notes 商品其他列表
     * @param string $type
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author cjhao
     * @date 2021/7/22 15:47
     */
    public function otherList(string $type)
    {
        $date = date('Y-m-d H:i:s');
        $supplierList = GoodsSupplier::field('id,name')->order('sort','asc')->select();
        $activityList = GoodsActivity::field('id,name')
            ->where('startDate', '>', $date)
            ->where('endDate', '>', $date)
            ->where('is_new', 0)
            ->order('sort','asc')->select();
        $categoryList = GoodsCategory::field('id,pid,name')->order('sort','asc')->select()->toArray();
        $categoryList = linear_to_tree($categoryList,'sons');
//        $categoryList = [];

        if('all' !== $type){
            $shopIndustry = GoodsActivityLogic::shopIndustry();
            //专场列表
            $day_lists = GoodsActivity::field('id as value,name')
                ->where('startDate', '<', $date)
                ->where('endDate', '>', $date)
                ->order('startDate',  'asc')
                ->select()
                ->toArray();


            return [
                'industry_list' => $shopIndustry,
                'activity_list' => $day_lists,
                'supplier_list'     => $supplierList,
                'category_list'     => $categoryList,
            ];
        }

        $unitList = GoodsUnit::field('id,name')->order('sort','asc')->select();
        $brandList = GoodsBrand::field('id,name')->order('sort','asc')->select();
        $freightList = Freight::field('id,name')->select();

        $list = [
            'supplier_list'     => $supplierList,
            'category_list'     => $categoryList,
            'brand_list'        => $brandList,
            'unit_list'         => $unitList,
            'freight_list'      => $freightList,
            'activity_list'      => $activityList
        ];
        return $list;


    }


    /**
     * @notes 商品详情
     * @param int $id 商品id
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author cjhao
     * @date 2021/7/15 15:49
     */
    public function detail(int $id)
    {

        $goods = Goods::with(['spec_value.spec_list','spec_value_list'])
            ->withoutField('create_time,update_time')
            ->append(['goods_image','category_id'])
            ->find($id)
            ->toArray();

        $goods['goods_activity_id'] = $goods['activity_id'];

        return $goods;
    }


    /**
     * @notes 商品上下架
     * @param array $params
     * @return Goods
     * @author cjhao
     * @date 2021/7/17 17:10
     */
    public function status(array $params)
    {
        $status = YesNoEnum::YES == $params['status'] ? 1 : 0;
        return Goods::update(['status'=>$status],['id'=>$params['ids']]);
    }

    /**
     * @notes 设置商品上下架
     * @param array $params
     * @return Goods
     * @author cjhao
     * @date 2021/7/22 9:51
     */
    public function sort(array $params)
    {

        return Goods::update(['id'=>$params['id'],'sort'=>(int)$params['sort']]);
    }

    /**
     * @notes 删除商品 todo 删除接口需要考虑商品的其他状态
     * @param array $ids
     * @return bool
     * @author cjhao
     * @date 2021/7/17 17:23
     */
    public function del(array $ids)
    {
        Db::startTrans();
        try {
            Goods::destroy(['id'=>$ids]);

            // 删除商品时清除已设置好的分销比例
            $deleteIds = DistributionGoods::where('goods_id', 'in', $ids)->column('id');
            DistributionGoods::destroy($deleteIds);

            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            return false;
        }
    }


    /**
     * @notes 修改商品名称
     * @param array $params
     * @return Goods
     * @author cjhao
     * @date 2021/7/29 16:11
     */
    public function rename(array $params)
    {
        return Goods::update(['id'=>$params['id'],'name'=>$params['name']]);
    }


}
