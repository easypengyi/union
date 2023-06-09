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
namespace app\adminapi\controller\theme;

use app\adminapi\{
    controller\BaseAdminController,
    logic\theme\DecorateThemeConfigLogic
};


/**
 * 主题配置控制器
 * Class DecorateController
 * @package app\adminapi\controller\decorate
 */
class DecorateThemeConfigController extends BaseAdminController
{

    /**
     * @notes 获取装修内容
     * @return \think\response\Json
     * @author cjhao
     * @date 2021/8/4 20:35
     */
    public function getContent()
    {
        $type = $this->request->get('type', 1);
        $data = (new DecorateThemeConfigLogic)->getContent($type);
        return $this->success('', $data);

    }

    /**
     * @notes 设置装修
     * @return \think\response\Json
     * @author cjhao
     * @date 2021/8/4 20:40
     */
    public function setContent()
    {
        $params = $this->request->post();
        (new DecorateThemeConfigLogic)->setContent($params);
        return $this->success('操作成功',[],1,1);
    }


}