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

namespace app\adminapi\controller\notice;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\notice\NoticeSettingLists;
use app\adminapi\logic\notice\NoticeLogic;
use app\adminapi\validate\notice\NoticeValidate;
use app\common\enum\NoticeEnum;
use app\common\model\Notice;

/**
 * 通知控制器
 * Class NoticeController
 * @package app\adminapi\controller\notice
 */
class NoticeController extends BaseAdminController
{
    /**
     * @notes 查看通知设置列表
     * @return \think\response\Json
     * @author Tab
     * @date 2021/8/18 16:00
     */
    public function settingLists()
    {
        return $this->dataLists(new NoticeSettingLists());
    }

    /**
     * @notes 查看通知设置详情
     * @return \think\response\Json
     * @author Tab
     * @date 2021/8/18 18:40
     */
    public function detail()
    {
        $params = (new NoticeValidate())->goCheck('detail');
        $result = NoticeLogic::detail($params);
        return $this->data($result);
    }

    /**
     * @notes 通知设置
     * @return \think\response\Json
     * @author Tab
     * @date 2021/8/18 18:00
     */
    public function set()
    {
        $params = $this->request->post();
        $result = NoticeLogic::set($params);
        if($result) {
            return $this->success('设置成功');
        }
        return $this->fail(NoticeLogic::getError());
    }
}