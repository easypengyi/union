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

namespace app\adminapi\controller\distribution;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\distribution\DistributionLevelLogic;
use app\adminapi\logic\distribution\GroupLogic;
use app\adminapi\validate\distribution\DistributionLevelValidate;
use app\adminapi\validate\distribution\GroupValidate;

/**
 * 分销会员等级控制器
 * Class DistributionLevelController
 * @package app\adminapi\controller\distribution
 */
class GroupController extends BaseAdminController
{
    /**
     * @notes 查看分销会员等级列表
     * @return \think\response\Json
     * @author Tab
     * @date 2021/7/23 9:24
     */
    public function lists()
    {
        return $this->dataLists();
    }

    /**
     * 获取商家列表
     *
     * @return \think\response\Json
     */
    public function shopLists(){
        $result = GroupLogic::shopLists();
        return $this->data($result);
    }

    /**
     * 获取群和企微人员信息
     *
     * @return \think\response\Json
     */
    public function otherLists(){
        $shop_id = input('shop_id');
        $result = GroupLogic::otherLists($shop_id);
        return $this->data($result);
    }

    /**
     * @notes 添加分销会员等级
     * @return \think\response\Json
     * @author Tab
     * @date 2021/7/22 11:19
     */
    public function add()
    {
        $params = (new GroupValidate())->post()->goCheck('add');
        $result = GroupLogic::open($params);
        if($result) {
            return $this->success('添加成功', [], 1, 1);
        }
        return $this->fail(GroupLogic::getError());
    }

    /**
     * @notes 调整分销等级界面信息
     * @return \think\response\Json
     * @author Tab
     * @date 2021/9/14 18:39
     */
    public function adjustLevelInfo()
    {
        $params = (new GroupValidate())->goCheck('adjustLevelInfo');
        $result = GroupLogic::adjustLevelInfo($params);
        return $this->data($result);
    }

    /**
     * @notes 调整分销商等级
     * @return \think\response\Json
     * @author Tab
     * @date 2021/9/14 18:55
     */
    public function adjustLevel()
    {
        $params = (new GroupValidate())->post()->goCheck('adjustLevel');
        $result = GroupLogic::adjustLevel($params);
        if ($result) {
            return $this->success('调整成功', [], 1, 1);
        }
        return $this->fail(DistributionMemberLogic::getError());
    }

    /**
     * @notes 冻结/解冻资格
     * @return \think\response\Json
     * @author Tab
     * @date 2021/9/14 19:09
     */
    public function freeze()
    {
        $params = (new GroupValidate())->post()->goCheck('freeze');
        $result = GroupLogic::freeze($params);
        if ($result) {
            return $this->success('操作成功', [], 1, 1);
        }
        return $this->fail(GroupLogic::getError());
    }
}
