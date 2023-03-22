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
use app\common\validate\BaseValidate;

class WechatLoginValidate extends BaseValidate
{
    protected $rule = [
        'code'          => 'require',
        'nickname'      => 'require',
        'headimgurl'    => 'require',
        'openid'        => 'require',
        'access_token'  => 'require',
        'terminal'      => 'require',
    ];

    protected $message = [
        'code.require'          => 'code缺少',
        'nickname.require'      => '昵称缺少',
        'headimgurl.require'    => '头像缺少',
        'openid.require'        => 'opendid缺少',
        'access_token.require'  => 'access_token缺少',
        'terminal.require'      => '终端参数缺少',
    ];

    public function sceneSilent(){
        return $this->only(['code']);
    }

    public function sceneOa()
    {
        return $this->only(['code']);
    }

    public function sceneAuth()
    {
        return $this->only(['code','nickname','headimgurl']);
    }

    public function sceneUninapp()
    {
        return $this->only(['openid','access_token','terminal']);
    }



}