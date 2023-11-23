<?php

namespace app\job;

use akc\Akc;
use app\common\model\Goods;
use app\common\model\GoodsItem;
use think\facade\Log;
use think\queue\Job;

/**
 * 更新活动商品
 */
class UpdateActivityGoods
{
    const NAME = "update:goods";

    public function fire(Job $job, $data)
    {
        $__startTime = time();
        //尝试三次
        if ($job->attempts() > 3) {
            $job->delete();
            return;
        }
        Log::write('更新专场活动商品-------开始');
        Log::write('更新专场活动商品-------专场ID'. $data['activity_id']);

        //成功与否先移出队列
        $this->syncGoods($data['activity_id']);
        $job->delete();
        $__endTime = time();
        Log::write('更新专场活动商品任务执行完成，成功;耗时：' . ($__endTime - $__startTime) . '秒');
    }

    private function syncGoods($activity_id){
        $pageSize = 20;
        $akc = new Akc();

        $params = [
            'liveId'=> $activity_id,
            'pageNo' => 1,
            'pageSize' => 1
        ];
        $total_goods = $akc->activityGoods($params);
        if(!isset($total_goods['data']))
        {
            Log::info('更新专场活动商品********拉取列表ID:'.$activity_id);
            Log::info('更新专场活动商品********拉取列表失败:'.$total_goods['resultMessage']);
            return false;
        }
        $total = $total_goods['data']['total'];
        Log::info('更新专场活动商品********商品总数量:'.$total);
        $pageTotal = ceil($total/$pageSize);
        Log::info('更新专场活动商品********商品总页数:'.$pageTotal);
        $num = 0;
        for ($k=0; $k < $pageTotal; $k++) {
            $params = [
                'liveId'=> $activity_id,
                'pageNo' => $k + 1,
                'pageSize' =>  $pageSize
            ];
            $goods = $akc->activityGoods($params);
            if(!isset($goods['data']['productList'])){
                Log::info('更新专场活动商品********第'.($k + 1).'页拉取列表ID:'.$activity_id);
                Log::info('更新专场活动商品********第'.($k + 1).'页取列表失败:'.json_encode($goods));
                continue;
            }
            $productList = $goods['data']['productList'];
            foreach ($productList as $product)
            {
                if ($product['status'] == 0){
                    Log::info('更新专场活动商品********商品ID:'.$product['productId'].'商品已下架');
                    Goods::where('activity_id', $activity_id)
                        ->where('code', $product['productId'])
                        ->update(['status'=> 0]);
                    continue;
                }
                Log::info('更新专场活动商品********商品ID:'.$product['productId']);
                //更新价格
                $skuList = $product['skuList'];
                Log::info('更新专场活动商品********商品SKU:'.json_encode($skuList));
                $flag = false;
                $specPriceArr = [];
                $specLineationPriceArr = [];
                $goods_id = Goods::where('activity_id', $activity_id)
                    ->where('code', $product['productId'])
                    ->value('id');
                if(empty($goods_id)){
                    Log::info('更新专场活动商品********未找到商品信息');
                    continue;
                }

                $has_sku_list = GoodsItem::where('goods_id', $goods_id)->column('sell_price','skuId');
                foreach ($skuList as $sku){
                    if(isset($has_sku_list[$sku['skuId']])){
                        $sell_price = round($sku['price2C']/100 ,2);
                        $lineation_price = round($sku['tagPrice']/100 ,2);
                        $cost_price = round($sku['settlementPrice']/100 ,2);
                        if($has_sku_list[$sku['skuId']] != $sell_price){
                            Log::info('更新专场活动商品********商品ID:'.$product['productId'].'价格变动');
                            Log::info('更新专场活动商品********商品ID:'.$product['productId'].'价格变动'.$has_sku_list[$sku['skuId']].'|'.$sell_price);
                            if(!$flag){
                                $flag = true;
                            }
                            GoodsItem::where('goods_id', $goods_id)
                                ->where('skuId', $sku['skuId'])->update([
                                    'sell_price'=> $sell_price,
                                    'lineation_price'=> $lineation_price,
                                    'cost_price'=> $cost_price,
                                    'stock'=> $sku['leftStoreNum']
                                ]);
                            $num++;
                        }
                        $specPriceArr[] = $sell_price;
                        $specLineationPriceArr[] = $lineation_price;
                    }
                }

                if($flag){
                    Goods::where('code', $product['productId'])
                        ->update([
                            'min_price'=> min($specPriceArr),
                            'max_price'=> max($specPriceArr),
                            'min_lineation_price'=> min($specLineationPriceArr),
                            'max_lineation_price'=> min($specLineationPriceArr)
                        ]);

                    Log::info('更新专场活动商品********商品ID:'.$product['productId'].'更新价格');
                }else{
                    Log::info('更新专场活动商品********商品ID:'.$product['productId'].'价格无变化');
                }
            }
        }

        Log::info('更新专场活动商品********更新专场ID:'.$activity_id);
        Log::info('更新专场活动商品********更新专场商品成功:'.$num);
    }
}