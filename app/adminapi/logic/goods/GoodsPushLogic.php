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

namespace app\adminapi\logic\goods;


use app\common\enum\DefaultEnum;
use app\common\logic\BaseLogic;
use app\common\model\GoodsActivity;
use app\common\model\GoodsPush;
use app\common\model\GoodsPushMsg;

class GoodsPushLogic extends BaseLogic
{
    public function addPush($params){
        $push = new GoodsPush();
        $push->category_id = implode(',', $params['category_id']);
        $push->supplier_id = $params['supplier_id'];
        $push->push_type = $params['push_type'];
        $push->save();
        return $push;
    }

    /**
     * 专场列表
     *
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function activityList(){
        $date = date('Y-m-d H:i:s');
        $activityList = GoodsActivity::field('id,name')
            ->where('startDate', '>', $date)
            ->where('endDate', '>', $date)
            ->order('sort','asc')->select();
        $list = [
            'activity_list'      => $activityList
        ];
        return $list;
    }


    /**
     * 添加素材
     *
     * @param $params
     * @return bool
     */
    public function add($params)
    {
        $goods_msg = new GoodsPushMsg();
        $goods_msg->type = $params['type'];
        $goods_msg->content = $params['content'];
        $goods_msg->times = $params['times'];
        $goods_msg->push_id = $params['push_id'];
        $goods_msg->sort = (isset($params['sort']) && !empty($params['sort'])) ? $params['sort'] : DefaultEnum::SORT;

        return $goods_msg->save();
    }

    /**
     * 添加素材
     *
     * @param $params
     * @return bool
     */
    public function edit($params)
    {
        $goods_msg = GoodsPushMsg::find($params['id']);
        $goods_msg->type = $params['type'];
        $goods_msg->content = $params['content'];
        $goods_msg->times = $params['times'];
        $goods_msg->push_id = $params['push_id'];
        $goods_msg->sort = (isset($params['sort']) && !empty($params['sort'])) ? $params['sort'] : DefaultEnum::SORT;

        return $goods_msg->save();
    }

    /**
     * 删除素材
     *
     * @param $params
     * @return bool
     */
    public function del($params)
    {
        return GoodsPushMsg::destroy($params['id']);
    }

    /**
     * 即时推送
     *
     * @return bool
     */
    public function goodsPush($push_id){
        $push = GoodsPush::with(['supplier'=>function($query){
            $query->field('id,name');
        },'msg'=>function($query){
            $query->field('id,push_id,type,content,sort,times')->order('sort', 'asc');
        }])->where('id', $push_id)->find()->toArray();

        foreach ($push['msg'] as &$item){
            if($item['type'] == 3){
                $activity = GoodsActivity::field('id,name,brandLogoUrl as image,content')->where('id', $item['content'])->find()->toArray();
                $activity['url'] = env('project.wap_domain', '') . '/mobile/pages/activity_detail/activity_detail?id='.$item['content'];
                $item['activity'] = $activity;
            }
        }
//        var_dump($push);die;

        //类目
        $category_ids = \app\common\logic\GoodsActivityLogic::shieldCategoryList($push['category_id']);

        $push['category_ids'] = $category_ids;
        $res = self::reqPost('/shop/task/goodsPush', $push);
        if($res['code'] == 1){
            return true;
        }
        return false;
    }
}
