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

namespace app\adminapi\controller\settings\delivery;


use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\settings\delivery\ExpressLists;
use app\adminapi\logic\settings\delivery\ExpressLogic;
use app\adminapi\validate\settings\delivery\ExpressValidate;
use app\common\model\Express;

class ExpressController extends BaseAdminController
{
    /**
     * @notes 添加快递公司
     * @return \think\response\Json
     * @author ljj
     * @date 2021/7/29 4:38 下午
     */
    public function add()
    {
        $params = (new ExpressValidate())->post()->goCheck('add');
        (new ExpressLogic())->add($params);
        return $this->success('添加成功',[],1, 1);
    }

    /**
     * @notes 查看快递公司列表
     * @return \think\response\Json
     * @author ljj
     * @date 2021/7/29 4:41 下午
     */
    public function lists()
    {
        return $this->dataLists(new ExpressLists());
    }

    /**
     * @notes 编辑快递公司
     * @return \think\response\Json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author ljj
     * @date 2021/7/29 5:43 下午
     */
    public function edit()
    {
        $params = (new ExpressValidate())->post()->goCheck('edit');
        (new ExpressLogic())->edit($params);
        return $this->success('修改成功',[],1,1);
    }

    /**
     * @notes 删除快递公司
     * @return \think\response\Json
     * @author ljj
     * @date 2021/7/29 5:27 下午
     */
    public function del()
    {
        $params = (new ExpressValidate())->post()->goCheck('del');
        (new ExpressLogic())->del($params);
        return $this->success('删除成功',[],1,1);
    }

    /**
     * @notes 查看快递公司详情
     * @return \think\response\Json
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author ljj
     * @date 2021/7/29 5:43 下午
     */
    public function detail()
    {
        $params = (new ExpressValidate())->goCheck('detail');
        $result = (new ExpressLogic())->detail($params);
        return $this->success('获取成功',$result);
    }
}