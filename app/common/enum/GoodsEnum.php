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
namespace app\common\enum;

/**
 * 商品枚举
 * Class GoodsEnum
 * @package app\common\enum
 */
class GoodsEnum
{
    const STATUS_SELL       = 1;
    const STATUS_STORAGE    = 0;

    const SEPC_TYPE_SIGNLE  = 1;
    const SEPC_TYPE_MORE    = 2;
    const SPEC_SEPARATOR    = ','; //规格名称分隔符

    /**
     * @notes 商品规格类型
     * @param bool $from
     * @return array|mixed|string
     * @author cjhao
     * @date 2021/8/23 10:30
     */
    public static function getSpecTypeDesc($from = true)
    {
        $desc = [
            self::SEPC_TYPE_SIGNLE      =>  '单规格',
            self::SEPC_TYPE_MORE        =>  '多规格',
        ];
        if(true === $from){
            return $desc;
        }
        return $desc[$from] ?? '';
    }

    /**
     * @notes 商品状态
     * @param bool $from
     * @return array|mixed|string
     * @author cjhao
     * @date 2021/9/10 15:09
     */
    public static function getStatusDesc($from = true)
    {
        $desc = [
            self::STATUS_SELL       => '销售中',
            self::STATUS_STORAGE    => '仓库中',
        ];
        if(true === $from){
            return $desc;
        }
        return $desc[$from] ?? '';
    }
}
