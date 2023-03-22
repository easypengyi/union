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

namespace app\adminapi\logic;

use app\common\enum\FootprintEnum;
use app\common\logic\BaseLogic;
use app\common\model\Footprint;
use app\common\service\ConfigService;

class FootprintLogic extends BaseLogic
{
    /**
     * @notes 足迹气泡列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author Tab
     * @date 2021/7/15 15:44
     */
    public static function lists()
    {
        return Footprint::select()->toArray();
    }

    /**
     * @notes 查看足迹气泡详情
     * @param $params
     * @return array
     * @author Tab
     * @date 2021/7/15 15:57
     */
    public static function detail($params)
    {
        return Footprint::findOrEmpty($params['id'])->toArray();
    }

    /**
     * @notes 编辑足迹气泡模板
     * @param $params
     * @return Footprint
     * @author Tab
     * @date 2021/7/15 16:12
     */
    public static function edit($params)
    {
        return Footprint::update($params);
    }

    /**
     * @notes 获取足迹气泡配置
     * @return array
     * @author Tab
     * @date 2021/7/15 16:16
     */
    public static function getConfig()
    {
        return [
            'footprint_duration' => ConfigService::get('footprint', 'duration', FootprintEnum::DEFAULT_DURATION),
            'footprint_status' => ConfigService::get('footprint', 'status', FootprintEnum::DEFAULT_STATUS)
        ];
    }

    /**
     * @notes 设置足迹气泡
     * @param $params
     * @author Tab
     * @date 2021/7/15 16:23
     */
    public static function setConfig($params)
    {
        ConfigService::set('footprint', 'duration', $params['duration']);
        ConfigService::set('footprint', 'status', $params['status']);
    }
}