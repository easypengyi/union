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

namespace app\adminapi\logic\distribution;

use app\common\logic\BaseLogic;
use app\common\model\DistributionConfig;
use app\common\enum\DistributionConfigEnum;
use app\common\service\FileService;

/**
 * 分销配置逻辑层
 * Class DistributionConfigLogic
 * @package app\adminapi\logic\distribution
 */
class DistributionConfigLogic extends BaseLogic
{
    /**
     * @notes 获取分销配置
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author Tab
     * @date 2021/7/22 9:38
     */
    public static function getConfig()
    {
        $dbConfig = DistributionConfig::column('value', 'key');
        $config['switch'] = $dbConfig['switch'] ?? DistributionConfigEnum::DEFAULT_SWITCH;
        $config['level'] = $dbConfig['level'] ?? DistributionConfigEnum::DEFAULT_LEVEL;
        $config['self'] = $dbConfig['self'] ?? DistributionConfigEnum::DEFAULT_SELF;
        $config['open'] = $dbConfig['open'] ?? DistributionConfigEnum::DEFAULT_OPEN;
        $config['apply_image'] = $dbConfig['apply_image'] ?? DistributionConfigEnum::DEFAULT_APPLY_IMAGE;
        $config['poster'] = $dbConfig['poster'] ?? DistributionConfigEnum::DEFAULT_POSTER;
        $config['protocol_show'] = $dbConfig['protocol_show'] ?? DistributionConfigEnum::DEFAULT_PROTOCOL_SHOW;
        $config['protocol_content'] = $dbConfig['protocol_content'] ?? DistributionConfigEnum::DEFAULT_PROTOCOL_CONTENT;
        $config['cal_method'] = $dbConfig['cal_method'] ?? DistributionConfigEnum::DEFAULT_CAL_METHOD;
        $config['settlement_timing'] = $dbConfig['settlement_timing'] ?? DistributionConfigEnum::DEFAULT_SETTLEMENT_TIMING;
        $config['settlement_time'] = $dbConfig['settlement_time'] ?? DistributionConfigEnum::DEFAULT_SETTLEMENT_TIME;
        $config['store_poster'] = $dbConfig['store_poster'] ?? DistributionConfigEnum::DEFAULT_POSTER;
        $config['apply_image'] = FileService::getFileUrl($config['apply_image']);
        $config['poster'] = FileService::getFileUrl($config['poster']);
        $config['store_poster'] = FileService::getFileUrl($config['store_poster']);

        $config['group_rate'] = $dbConfig['group_rate'] ?? 0;


        return $config;
    }

    /**
     * @notes 分销配置
     * @param $params
     * @author Tab
     * @date 2021/7/22 9:38
     */
    public static function setConfig($params)
    {
        $allowFields = ['switch', 'level', 'self','open', 'apply_image', 'protocol_show', 'protocol_content',
            'binding_condition', 'cal_method','settlement_timing', 'settlement_time','poster','store_poster', 'group_rate'];

        foreach($params as $k => $v) {
            // 判断是否在允许修改的字段中
            if(!in_array($k, $allowFields, true)) {
                continue;
            }
            if ($k == 'apply_image' || $k == 'poster' || $k == 'store_poster') {
                $v = empty($v) ? '' : FileService::setFileUrl($v);
            }
            $item = DistributionConfig::where('key', $k)->findOrEmpty();
            if($item->isEmpty()) {
                // 没有则创建
                DistributionConfig::create(['key' => $k, 'value' => $v]);
                continue;
            }
            // 有则更新
            $item->value = $v;
            $item->save();
        }
    }
}
