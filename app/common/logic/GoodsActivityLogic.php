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

namespace app\common\logic;

use app\common\enum\ActivityEnum;
use app\common\enum\GoodsEnum;
use app\common\model\Goods;
use app\common\model\GoodsActivity;
use app\common\model\GoodsActivityPush;
use app\common\model\GoodsCategory;
use app\common\model\GoodsCategoryIndex;
use app\common\model\GoodsSupplier;
use think\facade\Cache;

/**
 * 商品活动信息
 */
class GoodsActivityLogic extends BaseLogic
{
    /**
     * @notes 获取商品活动信息
     * @param $goodsIds
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author Tab
     * @date 2021/10/11 18:16
     */
    public static function activityInfo($goodsIds)
    {
        // 转数组
        if (!is_array($goodsIds)) {
            $goodsIds = [$goodsIds];
        }

        // 获取活动信息
       $lists =  GoodsActivity::where('goods_id', 'in', $goodsIds)->select()->toArray();

        if (empty($lists)) {
            return [];
        }
        // 提取有参与活动的商品ids
        $goodsIds = array_column($lists, 'goods_id');
        $goodsIds = array_unique($goodsIds);

        // 生成初始化数据
        $data = [];
        foreach ($goodsIds as $goodsId) {
            $data[$goodsId] = [];
            foreach (ActivityEnum::TYPE as $type) {
                $data[$goodsId][$type]['type'] = $type;
                $data[$goodsId][$type]['activity_id'] = null;
                $data[$goodsId][$type]['item_id'] = [];
            }
        }

        // 填充活动信息
        foreach ($lists as $item) {
            $data[$item['goods_id']][$item['activity_type']]['activity_id'] = $item['activity_id'];
            $data[$item['goods_id']][$item['activity_type']]['item_id'][] = $item['item_id'];
        }

        // 去除没有活动信息的初始数据
        foreach($data as $key => $item) {
            foreach (ActivityEnum::TYPE as $type) {
                if (is_null($item[$type]['activity_id'])) {
                    unset($data[$key][$type]);
                }
            }
            if (empty($data[$key])) {
                unset($data[$key]);
            }
        }

        return $data;
    }

    /**
     * @param $param
     */
    public static function detail($param){

        $info = GoodsActivity::field('id,name,is_new,category_id,supplier_id,endDate,brandLogoUrl as image,content,previewInformation')
            ->where('id', $param['id'])
            ->find()->toArray();

        $date = date('Y-m-d H:i:s');
        //通过关联读取对应的商品
        $info['goods'] = Goods::where(['activity_id' => $info['id'],'status'=>GoodsEnum::STATUS_SELL])
            ->field('id,name,image,virtual_sales_num+sales_num as sales_num,min_price as sell_price,min_lineation_price as lineation_price')
            ->select()
            ->toArray();

        //计算时间
        $info['date'] = GoodsActivity::getDateDetail($date, $info['endDate']);

        return $info;
    }

    /**
     * 获取推送内容
     *
     */
    public static function pushList($params){
        //设置了商家行业
        if(empty($params['industry_id'])){
            return [];
        }
        $supplier = GoodsSupplier::where('name', $params['supplier_name'])->find();
        $flag = false;
        $category_limit = [];
        if(isset($params['category_ids']) && !empty($params['category_ids'])){
            $category_limit = self::shieldCategoryList($params['category_ids']);
            $flag = true;
        }
        if(is_null($supplier)){
            return [];
        }
        $map1 = array(['supplier_id', '=', $supplier['id']]);
        $map2 = array(['category_id', 'notIn', $category_limit]);

        $date = date('Y-m-d H:i:s');
        $start_date = date('Y-m-d H:i:s', time() - 3600);
        $activity_lists = GoodsActivityPush::field('activity_id,industry_level_id')
            ->where('industry_id', $params['industry_id'])
            ->where('push_time', '>', $start_date)
            ->where('push_time', '<', $date)
            ->select()->toArray();
        $activity_ids = [];
        $industry_level_id = $params['industry_level_id'] ?? 0;
        foreach ($activity_lists as $ac){
            //推送所有
            if($ac['industry_level_id'] <= 0 || empty($industry_level_id)){
                $activity_ids[] = $ac['activity_id'];
            }
            if($industry_level_id > 0 && $ac['industry_level_id'] == $industry_level_id){
                $activity_ids[] = $ac['activity_id'];
            }
        }
//        var_dump($activity_ids);die;

        $date = date('Y-m-d H:i:s');
        //获取专场内容
        $lists = GoodsActivity::field('id,name,brandLogoUrl as image,category_id,endDate,push_time,push_type,content,supplier_id')
            ->with(['msg'=>function($query){
                $query->field('id,activity_id,type,content,sort,times')->order('sort', 'asc');
            }])
            ->when($flag, function($query) use($map1, $map2){
                $query->where(function($query) use($map1, $map2){
                    $query->whereOr([$map1,$map2]);
                });
            })
            ->whereIn('id', $activity_ids)
            ->where('endDate', '>', $date)
//            ->where('push_time', '<', $date)
            ->where('push_status', 1)
//            ->where('is_push', 0)
            ->order(['sort'=>'asc','id'=>'asc'])
            ->select()
            ->toArray();

//        var_dump($category_id);
//        var_dump($flag);

//        $res_data = [];
        foreach ($lists as &$item){
            $item['url'] = env('project.wap_domain', '') . '/mobile/pages/activity_detail/activity_detail?id='.$item['id'];
//            if(!is_null($supplier) && $supplier['id'] != $item['supplier_id'] && $flag){
//                if(!isset($category_limit[$item['category_id']])){
//                    $res_data[] = $item['id'];
//                }
//            }else{
//                $res_data[] = $item['id'];
//            }
        }

        return $lists;
    }

    /**
     * 屏蔽类目
     *
     * @param string $ids
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public static function shieldCategoryList($ids = ''){
        $category_limit = [];
        $category_ids = explode(',', $ids);
        foreach ($category_ids as $i){
            $category_limit[$i] = $i;
        }
        $cache_key = 'SC_category_list';
        $category_list = Cache::get($cache_key);
        if(empty($category_list)){
            $category_list = self::categoryList();
            Cache::set($cache_key, $category_list, 365*3600*24);
        }

        foreach ($category_list as $key=>$item){
            //屏蔽一级类目
            if(in_array($item['id'], $category_ids)){
                $category_limit[$item['id']] = $item['id'];
                if(!empty($item['children'])){
                    foreach ($item['children'] as $l){
                        $category_limit[$l['id']] = $l['id'];
                        if(!empty($l['children'])){
                            foreach ($l['children'] as $v){
                                $category_limit[$v['id']] = $v['id'];
                            }
                        }
                    }
                }
            }
            if(!empty($item['children'])){
                //屏蔽二级类目
                foreach ($item['children'] as $a){
                    if(in_array($a['id'], $category_ids)){
                        $category_limit[$a['id']] = $a['id'];
                        if(!empty($a['children'])){
                            foreach ($a['children'] as $b){
                                $category_limit[$b['id']] = $b['id'];
                            }
                        }
                    }
                }
            }
        }

        return $category_limit;
    }

    /**
     * 获取商品分类
     *
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     *
     */
    public static function categoryList(){
        $categoryList = GoodsCategory::field('id,id as value,pid,name as label')->order('sort','asc')->select()->toArray();
        $categoryList = linear_to_tree($categoryList,'children');
        return $categoryList;
    }

    /**
     * 更新活动推送状态
     *
     * @param $params
     * @return bool|string
     */
    public static function setPushActivity($ids){
//        var_dump($ids);die;
        if(empty($ids)){
            return '参数错误';
        }

        GoodsActivity::whereIn('id', $ids)->update(['is_push'=> 1]);
        return true;
    }
}
