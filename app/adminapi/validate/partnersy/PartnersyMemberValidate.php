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

namespace app\adminapi\validate\partnersy;

use app\common\validate\BaseValidate;

/**
 * 分销会员验证器
 * Class PartnersyMemberValidate
 * @package app\adminapi\validate
 */
class PartnersyMemberValidate extends BaseValidate
{
    protected $rule = [
        'ids' => 'require|array',
        'user_id' => 'require',
        'province_id' => 'require',
        'city_id' => 'require',
        'district_id' => 'require',
        'partnersy_user_ids' => 'require',
        'distribution_user_ids' => 'require',
    ];

    protected $message = [
        'ids.require' => '参数缺失',
        'ids.array' => '参数须为数组格式',
        'user_id.require' => '参数缺失',
        'province_id.require' => '请选择省份',
        'city_id.require' => '请选择城市',
        'district_id.require' => '请选择区域',
        'partnersy_user_ids.require' => '请选择合伙人',
        'distribution_user_ids.require' => '请选择团长',
    ];

    /**
     * @notes 开通合伙人
     * @return PartnersyMemberValidate
     * @author Tab
     * @date 2021/9/14 16:54
     */
    public function sceneOpen()
    {
        return $this->only(['ids', 'province_id','city_id','district_id']);
    }

    /**
     * @notes 冻结/解冻资格
     * @return PartnersyMemberValidate
     * @author Tab
     * @date 2021/9/14 19:10
     */
    public function sceneFreeze()
    {
        return $this->only(['user_id']);
    }

    public function sceneBand()
    {
        return $this->only(['partnersy_user_ids','distribution_user_ids']);
    }


}