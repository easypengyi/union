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

namespace app\shopapi\logic;

use app\common\enum\FootprintEnum;
use app\common\service\ConfigService;
use app\common\model\FootprintRecord;

class FootprintLogic
{
    /**
     * @notes 获取足迹列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author Tab
     * @date 2021/7/15 18:47
     */
    public static function lists()
    {
        $footprint_status = ConfigService::get('footprint','status', FootprintEnum::DEFAULT_STATUS);
        if (!$footprint_status) {
            return ['time'=>time(), 'lists'=>[]];
        }

        $footprint_duration = ConfigService::get('footprint','duration', FootprintEnum::DEFAULT_DURATION);
        $where = [];
        if ($footprint_duration) {
            // 转换为秒
            $duration = $footprint_duration * 60;
            $time = time() - $duration; //获取多少分钟前
            $where = [
                ['create_time', '>=', $time]
            ];
        }

        $lists = FootprintRecord::field(true)->where($where)
            ->with(['user'=>function($query){
                $query->withAttr('nickname', function ($value){
                    if (mb_strlen($value) > 4) {
                        return mb_substr($value, 0, 4).'**';
                    }
                    return $value;
                });
            }])
            ->order('id', 'desc')
            ->limit(50)
            ->select()
            ->toArray();

        foreach ($lists as &$item) {
            $item['template'] = self::getTemplate($item);
            unset($item['user_id']);
            unset($item['foreign_id']);
        }
        return ['time'=>time(), 'lists'=>$lists];
    }

    /**
     * @notes 拼接模板
     * @param $data
     * @return string
     * @author Tab
     * @date 2021/7/15 18:47
     */
    private static function getTemplate($data)
    {
        $nickname = $data['user']['nickname'].' ';
        $time = $data['time'];
        return $nickname.$time.$data['template'];
    }
}