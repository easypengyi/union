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

namespace app\adminapi\validate\distribution;

use app\common\model\GroupLevel;
use app\common\validate\BaseValidate;

/**
 * 分销会员等级验证器
 * Class DistributionLevelValidate
 * @package app\adminapi\validate\distribution
 */
class GroupLevelValidate extends BaseValidate
{
    protected $rule = [
        'name' => 'require|checkName',
        'weights' => 'require|integer|gt:0|checkWeights',
        'rate' => 'require|between:0,100',
        'id' => 'require',
    ];

    protected $message = [
        'name.require' => '请填写等级名称',
        'weights.require' => '请输入级别',
        'weights.integer' => '级别须为整型',
        'weights.gt' => '级别须大于1',
        'rate.require' => '请输入自购佣金比例',
        'rate.between' => '自购佣金比例须在0-100之间',
        'id.require' => '参数缺失',
    ];

    /**
     * @notes 添加分销会员等级场景
     * @return DistributionLevelValidate
     * @author Tab
     * @date 2021/7/22 11:18
     */
    public function sceneAdd()
    {
        return $this->only(['name', 'weights', 'rate', 'remark']);
    }


    /**
     * @notes 删除分销会员等级
     * @return DistributionLevelValidate
     * @author Tab
     * @date 2021/7/22 16:28
     */
    public function sceneDelete()
    {
        return $this->only(['id']);
    }

    /**
     * @notes 校验等级名称
     * @param $value
     * @param $rule
     * @param $data
     * @return bool|string
     * @author Tab
     * @date 2021/7/22 11:13
     */
    public function checkName($value, $rule, $data)
    {
        $where = [['name', '=', $value]];
        if(isset($data['id'])) {
            // 编辑的场景
            $where[] = ['id', '<>', $data['id']];
        }
        $level = GroupLevel::where($where)->findOrEmpty();
        if(!$level->isEmpty()) {
            return '等级名称已存在';
        }
        return true;
    }

    /**
     * @notes 校验等级级别
     * @param $value
     * @param $rule
     * @param $data
     * @return bool|string
     * @author Tab
     * @date 2021/7/22 11:16
     */
    public function checkWeights($value, $rule, $data)
    {
        $where = [['weights', '=', $value]];
        if(isset($data['id'])) {
            // 编辑的场景
            $where[] = ['id', '<>', $data['id']];
        }
        $level = GroupLevel::where($where)->findOrEmpty();
        if(!$level->isEmpty()) {
            return '等级级别已存在';
        }
        return true;
    }

}
