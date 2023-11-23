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

namespace app\adminapi\controller\goods;


use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\goods\GoodsPushMsgLists;
use app\adminapi\logic\goods\GoodsPushLogic;
use app\adminapi\validate\goods\GoodsPushMsgValidate;
use app\adminapi\validate\goods\GoodsPushValidate;

class GoodsPushController extends BaseAdminController
{

    /**
     * 添加推送条件
     *
     * @return \think\response\Json
     */
    public function addPush(){
        $params = (new GoodsPushValidate())->post()->goCheck('add');
        $res = (new GoodsPushLogic())->addPush($params);
        return $this->success('开始创建推送',['info'=> $res],1,1);
    }

    /**
     * 专场列表
     *
     * @return \think\response\Json
     */
    public function activityList(){
        $list = (new GoodsPushLogic())->activityList();
        return $this->success('', $list);
    }

    /**
     * 添加素材
     *
     * @return \think\response\Json
     */
    public function add()
    {
        $params = (new GoodsPushMsgValidate())->post()->goCheck('add');
        (new GoodsPushLogic())->add($params);
        return $this->success('添加成功',[],1,1);
    }

    /**
     * 添加素材
     *
     * @return \think\response\Json
     */
    public function edit()
    {
        $params = (new GoodsPushMsgValidate())->post()->goCheck('edit');
        (new GoodsPushLogic())->edit($params);
        return $this->success('修改成功',[],1,1);
    }

    /**
     * 素材列表
     *
     * @return \think\response\Json
     */
    public function lists()
    {
        return $this->dataLists(new GoodsPushMsgLists());
    }

    /**
     * 删除素材
     *
     * @return \think\response\Json
     */
    public function del()
    {
        $params = (new GoodsPushMsgValidate())->post()->goCheck('del');
        (new GoodsPushLogic())->del($params);
        return $this->success('删除成功',[],1,1);
    }

    /**
     * 即时推送
     *
     * @return \think\response\Json
     */
    public function goodsPush(){

        $params = (new GoodsPushValidate())->post()->goCheck('push');
        $res = (new GoodsPushLogic())->goodsPush($params['push_id']);
        return $this->success('推送消息已发起', [],1,1);
    }

}
