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

namespace app\common\model;

use think\model\concern\SoftDelete;
use app\common\enum\YesNoEnum;
use app\common\service\FileService;

class GoodsActivity extends BaseModel
{
    use SoftDelete;

    protected $deleteTime = 'delete_time';


    /**
     * @notes 关联供应商
     * @return \think\model\relation\belongsTo
     */
    public function supplier()
    {
        return $this->belongsTo(GoodsSupplier::class, 'supplier_id');
    }

    /**
     * @notes 关联活动素材
     * @return \think\model\relation\hasMany
     */
    public function msg()
    {
        return $this->hasMany(GoodsActivityMsg::class, 'activity_id', 'id');
    }

    /**
     * @notes 关联活动推送
     * @return \think\model\relation\hasMany
     */
    public function pushList()
    {
        return $this->hasMany(GoodsActivityPush::class, 'activity_id', 'id');
    }

    /**
     * 获取两个时间差
     *
     * @param $startDate
     * @param $endDate
     * @return array
     */
    public static function getDateDetail($startDate, $endDate){
        $timediff = strtotime($endDate) - strtotime($startDate);
        $days = intval($timediff/86400);
        $remain = $timediff%86400;
        $hours = intval($remain/3600);
        $remain = $timediff%3600;
        $mins = intval($remain/60);
        return ['day'=> $days, 'hour'=> $hours < 10 ? '0'.$hours : $hours, 'min'=>$mins < 10 ? '0'.$mins : $mins];
    }
}
