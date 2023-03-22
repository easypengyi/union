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

namespace app\shopapi\controller;


use app\common\logic\GoodsActivityLogic;
use app\shopapi\lists\GoodsActivityLists;
use app\shopapi\validate\PushActivityValidate;

class ActivityController extends BaseShopController
{
    public array $notNeedLogin = ['lists', 'detail', 'pushList', 'categoryList', 'setPushStatus'];

    /**
     * @notes 列表
     */
    public function lists()
    {
        return $this->dataLists(new GoodsActivityLists());
    }

    /**
     * @notes  详情
     */
    public function detail()
    {
        $params = request()->get();
        $result = GoodsActivityLogic::detail($params);
//        var_dump($result);die;
        return $this->data($result);
    }

    /**
     * @notes 获取推送列表
     */
    public function pushList()
    {
        $params = (new PushActivityValidate())->post()->goCheck('push');
        $result = GoodsActivityLogic::pushList($params);
        return $this->data($result);
    }

    /**
     * 获取商品分类
     *
     * @return \think\response\Json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function categoryList(){
        $result = GoodsActivityLogic::categoryList();
        return $this->data($result);
    }

    /**
     * @notes 更新推送活动状态
     */
    public function setPushStatus()
    {
        $params = request()->post('activity_ids');
        $result = GoodsActivityLogic::setPushActivity($params);
        if($result === true){
            return $this->success('设置成功');
        }
        return $this->fail($result);
    }

}
