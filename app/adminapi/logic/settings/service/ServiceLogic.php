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

namespace app\adminapi\logic\settings\service;

use app\common\logic\BaseLogic;
use app\common\service\ConfigService;
use app\common\service\FileService;

/**
 * 客取设置逻辑层
 * Class ServiceLogic
 * @package app\adminapi\logic\settings\service
 */
class ServiceLogic extends BaseLogic
{
    /**
     * @notes 获取客服设置
     * @return array
     * @author Tab
     * @date 2021/8/11 17:32
     */
    public static function getConfig()
    {
        $qrCode = ConfigService::get('service', 'qr_code');
        $qrCode = empty($qrCode) ? '' : FileService::getFileUrl($qrCode);
        $config = [
            'service_type' => ConfigService::get('service', 'service_type', 1),
            'phone' => ConfigService::get('service', 'phone', ''),
            'qr_code' => $qrCode,
            'wechat' => ConfigService::get('service', 'wechat', ''),
            'online_type' => ConfigService::get('service', 'online_type', 1),
            'h5_url' => ConfigService::get('service', 'h5_url', ''),
        ];
        return $config;
    }

    /**
     * @notes 客服设置
     * @param $params
     * @author Tab
     * @date 2021/8/11 17:39
     */
    public static function setConfig($params)
    {
        $allowField = ['service_type','phone','qr_code','wechat','online_type','h5_url'];
        foreach($params as $key => $value) {
            if(in_array($key, $allowField)) {
                ConfigService::set('service', $key, $value);
            }
        }
    }
}