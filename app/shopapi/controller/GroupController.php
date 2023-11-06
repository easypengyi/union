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

use app\shopapi\lists\FansLists;
use app\shopapi\logic\GroupLogic;
use app\shopapi\validate\DistributionValidate;

/**
 * 分销控制器
 * Class DistributionController
 * @package app\shopapi\controller
 */
class GroupController extends BaseShopController
{
    public array $notNeedLogin = ['fixAncestorRelation'];

    /**
     * @notes 查看分销推广主页
     * @return \think\response\Json
     * @author Tab
     * @date 2021/7/17 15:40
     */
    public function index()
    {
        $result = GroupLogic::index($this->userId);
        return $this->data($result);
    }

    /**
     * @notes 查看分销订单列表
     * @return \think\response\Json
     * @author Tab
     * @date 2021/7/17 16:46
     */
    public function order()
    {
        $params = $this->request->get();
        $params['page_no'] = $params['page_no'] ?? 1;
        $params['page_size'] = $params['page_size'] ?? 25;
        $params['user_id'] = $this->userId;
        $result = GroupLogic::order($params);
        return $this->data($result);
    }

    /**
     * @notes 查看月度账单
     * @return \think\response\Json
     * @author Tab
     * @date 2021/7/17 18:45
     */
    public function monthBill()
    {
        $params = $this->request->get();
        $params['page_no'] = $params['page_no'] ?? 1;
        $params['page_size'] = $params['page_size'] ?? 25;
        $params['user_id'] = $this->userId;
        $result = GroupLogic::monthBill($params);
        return $this->data($result);
    }

    /**
     * @notes 查看月度账单明细
     * @return \think\response\Json
     * @author Tab
     * @date 2021/7/19 10:25
     */
    public function monthDetail()
    {
        $params = $this->request->get();
        $params['page_no'] = $params['page_no'] ?? 1;
        $params['page_size'] = $params['page_size'] ?? 25;
        $params['year'] = $params['year'] ?? date('Y');
        $params['month'] = $params['month'] ?? date('m');
        $params['user_id'] = $this->userId;
        $result = GroupLogic::monthDetail($params);
        return $this->data($result);
    }
}
