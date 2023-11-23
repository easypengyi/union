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
namespace app\common\model;

use app\common\service\FileService;
use think\model\concern\SoftDelete;
use app\common\enum\{DistributionOrderGoodsEnum, GoodsCommentEnum, GoodsEnum, YesNoEnum};
use app\common\model\DistributionConfig;
use app\common\model\DistributionGoods;
use app\common\model\DistributionLevel;

/**
 * 商品模型
 * Class Goods
 * @package app\common\model
 */
class Goods extends BaseModel
{
    use SoftDelete;
    protected $deleteTime = 'delete_time';

    /**
     * @notes 关联轮播图模型
     * @return \think\model\relation\HasMany
     * @author cjhao
     * @date 2021/8/16 17:59
     */
    public function imageList()
    {
        return $this->hasMany(GoodsImage::class, 'goods_id');
    }

    /**
     * @notes 关联商品分类模型
     * @return \think\model\relation\HasMany
     * @author cjhao
     * @date 2021/8/16 17:59
     */
    public function goodsCategoryIndex()
    {
        return $this->hasMany(GoodsCategoryIndex::class, 'goods_id');
    }


    /**
     * @notes 关联规格项模型
     * @return \think\model\relation\HasMany
     * @author cjhao
     * @date 2021/8/16 18:00
     */
    public function specValue()
    {
        return $this->hasMany(GoodsSpec::class, 'goods_id');
    }


    /**
     * @notes 关联规格值模型
     * @return \think\model\relation\HasMany
     * @author cjhao
     * @date 2021/8/16 18:00
     */
    public function specValueSpec()
    {
        return $this->hasMany(GoodsSpecValue::class, 'goods_id');
    }


    /**
     * @notes 关联规格信息模型
     * @return \think\model\relation\HasMany
     * @author cjhao
     * @date 2021/8/16 18:00
     */
    public function specValueList()
    {
        return $this->hasMany(GoodsItem::class, 'goods_id');
    }


    /**
     * @notes 关联评论模型
     * @return \think\model\relation\HasMany
     * @author cjhao
     * @date 2021/8/16 18:00
     */
    public function goodsComment()
    {
        return $this->hasMany(GoodsComment::class,'goods_id');
    }

    /**
     * @notes 处理商品图片
     * @param $value
     * @param $data
     * @return array
     * @author cjhao
     * @date 2021/8/16 18:01
     */
    public function getGoodsImageAttr($value, $data)
    {
        $goodsImage = array_column($this->imageList->toArray(), 'uri');
        array_unshift($goodsImage, FileService::getFileUrl($data['image']));
        return $goodsImage;
    }

    /**
     * @notes 处理分类
     * @param $value
     * @param $data
     * @return array
     * @author cjhao
     * @date 2021/8/16 18:01
     */
    public function getCategoryIdAttr($value, $data)
    {
        $goods_category_index = $this->goodsCategoryIndex->toArray();
        return array_column($goods_category_index, 'category_id');
    }


    /**
     * @notes 关键词搜索
     * @param $query
     * @param $value
     * @param $data
     * @author cjhao
     * @date 2021/8/16 18:01
     */
    public function searchKeywordAttr($query, $value, $data)
    {
        if ($value) {
            $query->where('id|code|name', 'like', '%' . $value . '%');
        }
    }

    /**
     * @notes 分类搜索
     * @param $query
     * @param $value
     * @param $data
     * @author cjhao
     * @date 2021/8/16 18:02
     */
    public function searchCategoryIdAttr($query, $value, $data)
    {
        if ($value) {
            $goodsCategory = GoodsCategory::find($value);
            $level = $goodsCategory['level'] ?? '';
            $categoryIds = [];
            switch ($level){
                case 1:
                    $categoryIds = GoodsCategory::alias('A')
                            ->join('goods_category B','A.id = B.pid')
                            ->where(['A.pid'=>$value])
                            ->field('A.id as aid,B.id as bid')
                            ->select()->toArray();
                    $categoryIds = array_merge(array_column($categoryIds,'aid'),array_column($categoryIds,'bid'));
                    break;
                case 2:
                    $categoryIds = GoodsCategory::where(['pid'=>$value])
                            ->column('id');
                    break;
            }
            $categoryIds = array_merge([(int)$value],$categoryIds);
            $goodsIds = GoodsCategoryIndex::where(['category_id' => $categoryIds])->column('goods_id');
            $query->where('id', 'in', $goodsIds);

        }

    }

    /**
     * @notes 品牌搜索
     * @param $query
     * @param $value
     * @param $data
     * @author ljj
     * @date 2021/10/9 11:52 上午
     */
    public function searchBrandIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where('brand_id', '=', $value);
        }

    }

    /**
     * @notes 供应商搜索
     * @param $query
     * @param $value
     * @param $data
     * @author cjhao
     * @date 2021/8/16 18:02
     */
    public function searchSupplierIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where('supplier_id', '=', $value);
        }

    }

    /**
     * @notes 价格排序
     * @param $query
     * @param $value
     * @param $data
     * @author cjhao
     * @date 2021/8/16 18:02
     */
    public function searchPriceAttr($query, $value, $data)
    {
        $query->order(['min_price' => $value]);
    }

    /**
     * @notes 销售排序
     * @param $query
     * @param $value
     * @param $data
     * @author cjhao
     * @date 2021/8/16 18:02
     */
    public function searchSaleAttr($query, $value, $data)
    {
        $query->order(['sales_num' => $value]);
    }

    /**
     * @notes 商品名称搜索
     * @param $query
     * @param $value
     * @param $data
     * @author cjhao
     * @date 2021/8/16 18:02
     */
    public function searchNameAttr($query, $value, $data)
    {
        if ($value) {
            $query->where('name', 'like', '%' . $value . '%');
        }
    }

    /**
     * @notes 类型搜索
     * @param $query
     * @param $value
     * @param $data
     * @author cjhao
     * @date 2021/8/16 18:02
     */
    public function searchTypeAttr($query, $value, $data)
    {
        switch ($value) {
            case 1:   //销售中 todo 列出「销售状态：销售中」的商品
                $query->where(['status'=>GoodsEnum::STATUS_SELL]);
                break;
            case 2:  //库存预警 todo 列出「销售状态：销售中」且「库存预警：开启预警」 且「0 < 总库存 < 库存预警值」
                $query->where([
                    ['status', '=', GoodsEnum::STATUS_SELL],
                    ['stock_warning', '>', 0],
                    ['total_stock', '>', 0],
                ]);
                $query->whereColumn('stock_warning','>','total_stock');
                break;

            case 3:  //已售罄 todo 「销售状态：销售中」且 「总库存 == 0」
                $query->where(['status' => GoodsEnum::STATUS_SELL, 'total_stock' => 0]);
                break;
            case 4:  //仓库中 todo 列出「销售状态：仓库中」的商品
                $query->where(['status'=> GoodsEnum::STATUS_STORAGE]);
                break;

        }

    }

    /**
     * @notes 根据分销状态搜索
     * @param $query
     * @param $value
     * @param $data
     * @author Tab
     * @date 2021/7/23 16:01
     */
    public function searchIsDistributionAttr($query, $value, $data)
    {
        // 获取已开启分销的商品id
        $joinIds = DistributionGoods::where('is_distribution', YesNoEnum::YES)->column('goods_id');

        if ($value == 1) {
            // 分销商品
            return $query->where('id', 'in', $joinIds);
        }
        if ($value == 0) {
            // 非分销商品
            return $query->where('id', 'not in', $joinIds);
        }
        return false;
    }

    /**
     * @notes 分销状态获取器
     * @param $value
     * @return int
     * @author Tab
     * @date 2021/7/23 16:23
     */
    public function getIsDistributionAttr($value)
    {
        $distributionGoods = DistributionGoods::where('goods_id', $value)->findOrEmpty();
        if ($distributionGoods->isEmpty()) {
            return YesNoEnum::NO;
        }
        if (!$distributionGoods->is_distribution) {
            return YesNoEnum::NO;
        }
        return YesNoEnum::YES;
    }

    /**
     * @notes 该商品累计已返佣金
     * @param $value
     * @return float
     * @author Tab
     * @date 2021/7/23 14:17
     */
    public function getCommissionAttr($value)
    {
        $where = [
            'status' => DistributionOrderGoodsEnum::RETURNED,
            'goods_id' => $value
        ];
        return DistributionOrderGoods::where($where)->sum('earnings');
    }

    /**
     * @notes 最小值获取器
     * @param $value
     * @return int|mixed|string
     * @author Tab
     * @date 2021/9/18 11:09
     */
    public function getMinPriceAttr($value)
    {
        return clearZero($value);
    }

    /**
     * @notes 最大值获取器
     * @param $value
     * @return int|mixed|string
     * @author Tab
     * @date 2021/9/18 11:10
     */
    public function getMaxPriceAttr($value)
    {
        return clearZero($value);
    }

    /**
     * @notes 价格获取器
     * @param $value
     * @param $data
     * @author Tab
     * @datetime 2022/1/17 17:14
     */
    public function getPriceTextAttr($value, $data)
    {
        if ($data['spec_type'] == 1) {
            // 单规格
            return '¥ ' . clear_zero($data['min_price']);
        } else {
            // 多规格
            return '¥ ' . clear_zero($data['min_price']) . ' ~ ' . clear_zero($data['max_price']);
        }
    }

    /**
     * @notes 状态获取器
     * @param $value
     * @param $data
     * @return array|mixed|string
     * @author Tab
     * @datetime 2022/1/17 17:24
     */
    public function getStatusTextAttr($value, $data)
    {
        return GoodsEnum::getStatusDesc($data['status']);
    }

    /**
     * @notes 分类获取器
     * @param $value
     * @param $data
     * @author Tab
     * @datetime 2022/1/17 17:25
     */
    public function getCategoryTextAttr($value, $data)
    {
        $field = ['gci.goods_id, gci.category_id, gc.name'];
        $lists = GoodsCategoryIndex::alias('gci')
            ->leftJoin('goods_category gc', 'gc.id = gci.category_id')
            ->field($field)
            ->where('gci.goods_id', $data['id'])
            ->select()
            ->toArray();

        $categoryText = '';
        foreach($lists as $item) {
            $categoryText .= $item['name'] . '/';
        }
        return trim($categoryText, '/');
    }

    /**
     * @notes 评论条数获取器(审核通过的)
     * @param $value
     * @param $data
     * @author Tab
     * @datetime 2022/1/17 17:32
     */
    public function getCommentTextAttr($value, $data)
    {
        $count = GoodsComment::where([
            'goods_id' => $data['id'],
            'status' => GoodsCommentEnum::APPROVED
        ])->count();
        return $count;
    }

    //详情页显示佣金金额
    public function getCommissionPriceAttr($value, $data)
    {
        $distribution = DistributionConfig::where('key','switch')->find();
        if ($distribution && $distribution->value==1) {
            //获取该商品的分享金额
            $list = DistributionGoods::where('goods_id',$data['id'])->where('is_distribution',1)->select()->toArray();
            if(empty($list)){
                return 0;
            }
//            return 0;
            $max_money = 0;
            foreach($list as $key => $value){
                if($value['rule']==1){
                    //按分销等级
                    $level_info = DistributionLevel::where('id','>',0)->order('first_ratio desc')->find();
                    if(!empty($level_info)){
                        $level_info = $level_info->toArray();
                        $money = round($level_info['first_ratio'] * $data['sell_price'] / 100, 2);
                        $max_money = $max_money < $money ? $money : $max_money;
                    }

                }else{
                    //爱库存商品单独计算
                    $is_new = isset($data['is_new']) ? $data['is_new'] : 0;
                    if($is_new == 1){
                        $money = round($value['first_ratio'] * ($data['sell_price'] - $data['settlementPrice'] ) / 100, 2);
                    }else{
                        $money = round($value['first_ratio'] * $data['sell_price'] / 100, 2);
                    }
                    $max_money = $max_money < $money ? $money : $max_money;
                }

            }

            if ($max_money > 0) {
                return $money;
            }
        }
        return 0;
    }
}
