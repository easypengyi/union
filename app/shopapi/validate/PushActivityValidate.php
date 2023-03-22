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

use app\common\model\GoodsSupplier;
use app\common\validate\BaseValidate;

class PushActivityValidate extends BaseValidate
{
    protected $rule = [
        'supplier_name' => 'require|checkName',
    ];

    protected $message = [
        'supplier_name.require' => '供应商名称不能为空'
    ];

    public function scenePush()
    {
        return $this->only(['supplier_name']);
    }

    /**
     * @notes 验证
     * @param $name
     * @return bool|string
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function checkName($name)
    {
        //供应商是否存在
        $supplier = GoodsSupplier::where('name', $name)->find();
        if(is_null($supplier)){
            return '供应商名称有误';
        }

        return true;
    }

}
