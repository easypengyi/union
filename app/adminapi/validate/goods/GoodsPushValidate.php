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

namespace app\adminapi\validate\goods;


use app\common\model\Goods;
use app\common\model\GoodsActivityMsg;
use app\common\model\GoodsPushMsg;
use app\common\model\GoodsUnit;
use app\common\validate\BaseValidate;

class GoodsPushValidate extends BaseValidate
{
    protected $rule = [
        'category_id' => 'require',
        'supplier_id' => 'require',
        'push_type' => 'require',
        'push_id'=>  'require|checkId',
    ];

    protected $message = [
        'category_id.require' => '请选择发送素材所属类目',
        'supplier_id.require' => '请选择供应商',
        'push_type.number' => '请选择群类型',
        'push_id.require' => '请先选择类目和供应商',
    ];

    public function sceneAdd()
    {
        return $this->only(['category_id','supplier_id', 'push_type']);
    }

    public function scenePush()
    {
        return $this->only(['push_id']);
    }

    /**
     *
     *
     * @param $value
     * @param $rule
     * @param $data
     * @return bool|string
     */
    public function checkId($value,$rule,$data)
    {
        $result = GoodsPushMsg::where('push_id', $value)->count();

        if ($result == 0) {
            return '请先添加发送的素材';
        }
        return true;
    }
}
