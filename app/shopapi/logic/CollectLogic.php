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
use app\common\logic\BaseLogic;
use app\common\model\GoodsCollect;

/**
 * 收藏逻辑层
 * Class CollectLogic
 * @package app\common\logic
 */
class CollectLogic extends BaseLogic
{

    /**
     * @notes 操作收藏商品
     * @param array $params
     * @param int $userId
     * @return bool
     * @author cjhao
     * @date 2021/8/3 10:00
     */
    public function handleCollectGoods(array $params,int $userId)
    {
        if (!isset($params['is_collect']) || !isset($params['goods_id'])) {
            return '参数缺失';
        }
        //收藏
        if($params['is_collect']){
            $goodsCollect = GoodsCollect::
                        where(['goods_id'=>$params['goods_id'],'user_id'=>$userId])
                        ->findOrEmpty();

            if(!$goodsCollect->isEmpty()){
                return true;
            }
            $goodsCollect->goods_id = $params['goods_id'];
            $goodsCollect->user_id  = $userId;
            $goodsCollect->save();
            return true;
        }
        //取消删除
        GoodsCollect::destroy(['goods_id'=>$params['goods_id'],'user_id'=>$userId]);
        return true;

    }




}