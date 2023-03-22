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

namespace app\shopapi\lists;

use app\common\enum\GoodsEnum;
use app\common\logic\GoodsActivityLogic;
use app\common\model\Goods;
use app\common\model\GoodsActivity;
use app\common\lists\ListsSearchInterface;
use app\common\model\GoodsCategoryIndex;
use think\facade\Cache;

class GoodsActivityLists extends BaseShopDataLists implements ListsSearchInterface
{
    /**
     * @notes 设置搜索条件
     * @return \string[][]
     */
    public function setSearch(): array
    {
        $where = [];
        if(!empty($this->params['name'])){
            $where[] = ['name', 'like', '%'.$this->params['name'].'%'];
        }

//        if(!empty($this->params['supplier_id'])){
//            $where[] = ['supplier_id', '=', $this->params['supplier_id']];
//        }
//
//        if(!empty($this->params['category_id'])){
//            $where[] = ['category_id','=', $this->params['category_id']];
//        }

        //下载并已拉取商品的专场
        $where[] = ['is_down_goods', '=', 1];
        $where[] = ['down_goods_status', '=', 1];

        //未过期的专场
        $date = date('Y-m-d H:i:s');
        $where[] = ['startDate', '<', $date];
        $where[] = ['endDate', '>=', $date];
//        var_dump($where);die;
        return $where;
    }

    /**
     * @notes 列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function lists(): array
    {
        list($flag, $map1, $map2) = $this->setCondition();

        //第一页获取今天的数据
        if($this->pageNo == 1){
            $curr_date = date('Y-m-d');
            $lists = GoodsActivity::field('id,name,is_new,category_id,supplier_id,startDate,endDate,brandLogoUrl as image')
                ->where($this->setSearch())
                ->when($flag, function($query) use($map1, $map2){
                    $query->where(function($query) use($map1, $map2){
                        $query->whereOr([$map1,$map2]);
                    });
                })
                ->whereBetween('startDate', [$curr_date.' 00:00:00', $curr_date.' 23:59:59'])
                ->order('startDate', 'asc')
                ->select()
                ->toArray();
            if(count($lists) < $this->limitLength){
                $ids = [];
                if(count($lists) > 0){
                    foreach ($lists as $item){
                        $ids[] = $item['id'];
                    }
                }
                $add_lists = GoodsActivity::field('id,name,is_new,category_id,supplier_id,startDate,endDate,brandLogoUrl as image')
                    ->where($this->setSearch())
                    ->when($ids, function($query) use($ids){
                        $query->whereNotIn('id', $ids);
                    })
                    ->when($flag, function($query) use($map1, $map2){
                        $query->where(function($query) use($map1, $map2){
                            $query->whereOr([$map1,$map2]);
                        });
                    })
                    ->limit($this->limitLength - count($lists))
                    ->order('startDate', 'desc')
                    ->select()
                    ->toArray();
                $lists = array_merge($lists, $add_lists);
            }
        }else{
            $lists = GoodsActivity::field('id,name,is_new,category_id,supplier_id,startDate,endDate,brandLogoUrl as image')
                ->where($this->setSearch())
                ->when($flag, function($query) use($map1, $map2){
                    $query->where(function($query) use($map1, $map2){
                        $query->whereOr([$map1,$map2]);
                    });
                })
                ->limit($this->limitOffset, $this->limitLength)
                ->order('startDate', 'desc')
                ->select()
                ->toArray();
        }

        $date = date('Y-m-d H:i:s');
        //获取专场对应的商品
        foreach ($lists as $key=>&$item){
            //爱库存读取对应的商品
//            if($item['is_new'] == 1){
                //通过关联读取对应的商品
                $item['goods'] = Goods::where(['activity_id' => $item['id'],'status'=>GoodsEnum::STATUS_SELL])
                    ->field('id,name,image,virtual_sales_num+sales_num as sales_num,min_price as sell_price,min_lineation_price as lineation_price')
                    ->limit(3)
                    ->select()
                    ->toArray();
//            }else{
//                //类目
//                $goods_ids = GoodsCategoryIndex::where('category_id', $item['category_id'])->column('goods_id');
//                $item['goods'] = Goods::where(['supplier_id' => $item['supplier_id'],'status'=>GoodsEnum::STATUS_SELL])
//                    ->whereIn('id', $goods_ids)
//                    ->field('id,name,image,virtual_sales_num+sales_num as sales_num,min_price as sell_price,min_lineation_price as lineation_price')
//                    ->limit(3)
//                    ->select()
//                    ->toArray();
//            }

            if(count($item['goods']) == 0){
                $item['goods'][] = [];
                $item['goods'][] = [];
                $item['goods'][] = [];
            }
            if(count($item['goods']) == 1){
                $item['goods'][] = [];
                $item['goods'][] = [];
            }
            if(count($item['goods']) == 2){
                $item['goods'][] = [];
            }

            //计算时间
            $item['date'] = GoodsActivity::getDateDetail($date, $item['endDate']);
        }

//        sort($lists);

        return $lists;
    }

    /**
     * 限制供应商和屏蔽类目
     *
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function setCondition(): array{
        $where = $this->params;
        $flag = false;
        $map1 = [];
        $map2 = [];
        $userId = $this->userId;
        $cache_supplier = $userId.'_supplier_id';
        $cache_category = $userId.'_category_id';
        if(!empty($where['supplier_id']) && !empty($where['category_id'])){
            $flag = true;
            $supplier_id = $where['supplier_id'];
            $category_id = $where['category_id'];
            Cache::set($cache_supplier, $where['supplier_id'], 3600);
            Cache::set($cache_category, $where['category_id'], 3600);
        }else{
            //看看缓存
            $supplier_id = Cache::get($cache_supplier, '');
            $category_id = Cache::get($cache_category, '');
            if(!empty($supplier_id) && !empty($category_id)){
                $flag = true;
            }
        }

        if($flag){
            $category_limit = GoodsActivityLogic::shieldCategoryList($category_id);
            $map1 = array(['supplier_id', '=', $supplier_id]);
            $map2 = array(['category_id', 'notIn', $category_limit]);
        }

        return [$flag, $map1, $map2];
    }


    /**
     * @notes 查看总数
     * @return int
     */
    public function count(): int
    {
        list($flag, $map1, $map2) = $this->setCondition();
        return GoodsActivity::where($this->setSearch())
            ->when($flag, function($query) use($map1, $map2){
            $query->where(function($query) use($map1, $map2){
                $query->whereOr([$map1,$map2]);
            });
        })->count();
    }
}
