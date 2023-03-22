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

namespace app\adminapi\controller\data;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\data\CenterLogic;

/**
 * 数据中心
 * Class CenterController
 * @package app\adminapi\controller\data
 */
class CenterController extends BaseAdminController
{
    /**
     * @notes 流量分析
     * @return \think\response\Json
     * @author Tab
     * @date 2021/9/27 10:28
     */
    public function trafficAnalysis()
    {
        $params = $this->request->get();
        $result = CenterLogic::trafficAnalysis($params);
        return $this->data($result);
    }

    /**
     * @notes 用户分析
     * @return \think\response\Json
     * @author Tab
     * @date 2021/9/27 11:18
     */
    public function userAnalysis()
    {
        $params = $this->request->get();
        $result = CenterLogic::userAnalysis($params);
        return $this->data($result);
    }

    /**
     * @notes 交易分析
     * @return \think\response\Json
     * @author Tab
     * @date 2021/9/27 15:00
     */
    public function transactionAnalysis()
    {
        $params = $this->request->get();
        $result = CenterLogic::transactionAnalysis($params);
        return $this->data($result);
    }

    /**
     * @notes 商品分析
     * @return \think\response\Json
     * @author Tab
     * @date 2021/9/27 15:34
     */
    public function goodsAnalysis()
    {
        $params = $this->request->get();
        $result = CenterLogic::goodsAnalysis($params);
        return $this->data($result);
    }

    /**
     * @notes 商品排行榜
     * @return \think\response\Json
     * @author Tab
     * @date 2021/9/27 15:48
     */
    public function goodsTop()
    {
        $params = $this->request->get();
        $result = CenterLogic::goodsTop($params);
        return $this->data($result);
    }
}