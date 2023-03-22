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
use app\common\{logic\GoodsActivityLogic,
    model\User,
    model\Goods,
    logic\BaseLogic,
    model\GoodsVisit,
    model\GoodsCollect,
    model\SearchRecord,
    model\GoodsComment,
    enum\GoodsCommentEnum,
    service\FileService};
use app\common\service\ConfigService;
use app\common\model\Distribution;


/**
 * 商品接口逻辑层
 * Class GoodsLogic
 * @package app\shopapi\logic
 */
class GoodsLogic extends BaseLogic
{

    /**
     * @notes 商品详情
     * @param $id
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author cjhao
     * @date 2021/8/2 19:54
     */
    public function detail($params)
    {
        $id = $params['id'];
        $userId = $params['user_id'];

        $goods = Goods::with(['spec_value.spec_list','spec_value_list'])
            ->field('id,name,code,image,video,video_cover,total_stock,click_num,virtual_sales_num+sales_num as sales_num,spec_type,content,poster,is_new')
            ->append(['goods_image','commission_price'])
            ->find($id);
        if(empty($goods)){
            self::$error = '商品已下架！';
            return false;
        }
        // 判断是否需要统计浏览量
        if (isset($params['visit'])) {
            //记录点击量
            $goods->click_num = $goods->click_num + 1;
            $goods->save();

            // 浏览量
            $this->visit($id, $userId);
        }
        $is_commission_price = 0;
        $userLevel = [];
        if($userId){
            $userLevel = User::with(['userLevel'])->find(1);
            $discount = $UserLevel->discount ?? 10;
            $IsCollect = GoodsCollect::where(['goods_id'=>$id,'user_id'=>$userId])->value('id');
            $goods->is_collect = $IsCollect ? 1 : 0;

            //判断这个用户是否是分销人员
            $user_distribution = Distribution::where('user_id',$userId)->where('is_distribution',1)->where('is_freeze',0)->findOrEmpty();
            if($user_distribution->isEmpty()){
                $is_commission_price = 0;
            }else{
                $is_commission_price = 1;
            }
        }
        $stockShow = ConfigService::get('goods_set', 'is_show', 0);
        $goods->stock_show = true;
        if(0 == $stockShow){
            $goods->stock_show = false;
        }
        //显示会员价
        foreach ($goods->spec_value_list as $specVal ){
            if(!$specVal->image){
                $specVal->image = $goods->image;
            }
            $specVal->member_price = '';
            if($userLevel){
                $specVal->member_price = round($specVal->sell_price * $discount/10,2);
            }
        }

        $goods->sell_price      = $goods->spec_value_list[0]->sell_price;
        $goods->member_price    = $goods->spec_value_list[0]->member_price;
        $goods->lineation_price = $goods->spec_value_list[0]->lineation_price;
        $goods->profit          = $goods->spec_value_list[0]->profit; //爱库存佣金

        $goods->goods_comment = $this->getComment($goods->id);
        $goods = $goods->toArray();
        if($is_commission_price==0){
            $goods['commission_price'] = 0;
        }
        return $goods;
    }

    /**
     * @notes 商品搜索记录
     * @param $userId
     * @param $limit
     * @return array
     * @author cjhao
     * @date 2021/8/11 17:12
     */
    public function searchRecord($userId,$limit){
        $recordList = SearchRecord::where(['user_id'=>$userId])
            ->limit($limit)
            ->order('id desc')
            ->column('keyword');

        return $recordList;
    }

    /**
     * @notes 商品营销接口
     * @param int $goodsId
     * @param int $userId
     * @return array
     * @author cjhao
     * @date 2021/8/27 17:27
     */
    public function goodsMarketing(int $goodsId,int $userId):array
    {
        $coupon = CouponLogic::goodsCoupon($goodsId,$userId);
        $activityList = GoodsActivityLogic::activityInfo($goodsId)[$goodsId] ?? [];
        $marketing = [
            'coupon'    => $coupon,
            'activity'  => array_values($activityList),
        ];

        return $marketing;

    }

    /**
     * @notes 清空搜索记录
     * @param int $userId
     * @author cjhao
     * @date 2021/9/15 11:35
     */
    public function clearRecord(int $userId)
    {
        SearchRecord::where(['user_id'=>$userId])->delete();
    }

    /**
     * @notes 商品浏览记录
     * @param $goodsId
     * @param $userId
     * @return bool
     * @author Tab
     * @date 2021/9/15 14:04
     */
    public function visit($goodsId, $userId)
    {
        if (empty($userId)) {
            $userId = 0;
        }
        $ip = request()->ip();

        // 一个ip一个商品一个用户一天只生成一条记录
        $record = GoodsVisit::where([
            'ip' => $ip,
            'goods_id' => $goodsId,
            'user_id' => $userId,
        ])->whereDay('create_time')->findOrEmpty();

        if (!$record->isEmpty()) {
            // 增加浏览量
            $record->visit += 1;
            $record->save();
            return true;
        }

        // 生成商品浏览记录
        GoodsVisit::create([
            'ip' => $ip,
            'goods_id' => $goodsId,
            'user_id' => $userId,
            'visit' => 1
        ]);
    }

    /**
     * @notes 获取最近的商品评价
     * @param $id
     * @param int $limit
     * @author cjhao
     * @date 2021/11/17 17:44
     */
    public static function getComment($id,$limit = 1){
        //商品评论
        $goodsComment = GoodsComment::with(['goods_comment_image','user'])
            ->where(['goods_id'=>$id,'status'=>GoodsCommentEnum::APPROVED])
            ->field('id,user_id,spec_value_str,comment,virtual')
            ->order('id desc')
            ->limit($limit)
            ->findOrEmpty();

        if(!$goodsComment->isEmpty()){
            $commentCount = GoodsComment::where(['goods_id'=>$id,'status'=>GoodsCommentEnum::APPROVED])->count();
            $goodsCommentCount = GoodsComment::where([['goods_id','=',$id],['goods_comment','>',3],['status', '=', GoodsCommentEnum::APPROVED]])->count();

            $goodsRate = $commentCount > 0 ? round(($goodsCommentCount/$commentCount)*100).'%' : '100%';
            $goodsComment->goods_rate = $goodsRate;
            $goodsComment->comment_image = array_column($goodsComment->goods_comment_image->toArray(),'uri');
            $goodsComment->hidden(['user_id','goods_comment_image']);

            if (!is_null($goodsComment->virtual)) {
                // 虚拟评价
                $vitual = json_decode($goodsComment->virtual, true);
                $goodsComment->nickname = $vitual['nickname'];
                $goodsComment->avatar = FileService::getFileUrl($vitual['avatar']);
            }
            //隐藏用户昵称
            $goodsComment->nickname = hide_substr($goodsComment->nickname);
            if(empty($goodsComment->comment)){
                $goodsComment->comment = '此用户没有填写评论';
            }
        }
        return $goodsComment->toArray();
    }
}
