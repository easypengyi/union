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

namespace app\shopapi\validate;


use app\common\model\ShopNotice;
use app\common\validate\BaseValidate;

class ShopNoticeValidate extends BaseValidate
{
    protected $rule = [
        'id' => 'require|checkId',
    ];

    public function sceneDetail()
    {
        return $this->only(['id']);
    }

    /**
     * @notes 检查公告ID是否存在
     * @param $value
     * @param $rule
     * @param $data
     * @return bool|string
     * @author ljj
     * @date 2021/8/23 7:14 下午
     */
    public function checkId($value,$rule,$data)
    {
        $result = ShopNotice::findOrEmpty($value);
        if ($result->isEmpty()) {
            return '公告不存在';
        }
        if ($result['status'] == 0) {
            return '公告已隐藏，无法查看';
        }
        return true;
    }
}