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

namespace app\adminapi\logic\settings\shop;

use app\common\enum\YesNoEnum;
use app\common\logic\BaseLogic;
use app\common\service\ConfigService;
use app\common\service\FileService;
use app\common\service\RegionService;

class ShopSettingLogic extends BaseLogic
{
    /**
     * @notes 获取店铺信息
     * @return array
     * @author Tab
     * @date 2021/7/28 14:19
     */
    public static function getShopInfo()
    {
        $config = [
            'name' => ConfigService::get('shop', 'name'),
            'logo' => ConfigService::get('shop', 'logo'),
            'admin_login_image' => ConfigService::get('shop', 'admin_login_image'),
            'login_restrictions' => ConfigService::get('shop', 'login_restrictions'),
            'password_error_times' => ConfigService::get('shop', 'password_error_times'),
            'limit_login_time' => ConfigService::get('shop', 'limit_login_time'),
            'status' => ConfigService::get('shop', 'status'),
            'close_example_image' => ConfigService::get('shop', 'close_example_image'),
            'logo_example_image' => ConfigService::get('shop', 'logo_example_image'),
            'login_example_image' => ConfigService::get('shop', 'login_example_image'),
            'mall_contact' => ConfigService::get('shop', 'mall_contact', ''),
            'mall_contact_mobile' => ConfigService::get('shop', 'mall_contact_mobile', ''),
            'return_contact' => ConfigService::get('shop', 'return_contact', ''),
            'return_contact_mobile' => ConfigService::get('shop', 'return_contact_mobile', ''),
            'return_province' => ConfigService::get('shop', 'return_province', ''),
            'return_city' => ConfigService::get('shop', 'return_city', ''),
            'return_district' => ConfigService::get('shop', 'return_district', ''),
            'return_address' => ConfigService::get('shop', 'return_address', ''),
        ];
        $config['logo'] = FileService::getFileUrl($config['logo']);
        $config['admin_login_image'] = FileService::getFileUrl($config['admin_login_image']);
        $config['close_example_image'] = FileService::getFileUrl($config['close_example_image']);
        $config['logo_example_image'] = FileService::getFileUrl($config['logo_example_image']);
        $config['login_example_image'] = FileService::getFileUrl($config['login_example_image']);
        $config['address'] = RegionService::getAddress([$config['return_province'], $config['return_city'], $config['return_district']], $config['return_address']);

        return $config;
    }

    /**
     * @notes 设置店铺信息
     * @param $params
     * @author Tab
     * @date 2021/7/28 14:47
     */
    public static function setShopInfo($params)
    {
        $params['logo'] = FileService::setFileUrl($params['logo']);
        $params['admin_login_image'] = FileService::setFileUrl($params['admin_login_image']);

        ConfigService::set('shop','name', $params['name']);
        ConfigService::set('shop','logo', $params['logo']);
        ConfigService::set('shop','admin_login_image', $params['admin_login_image']);
        ConfigService::set('shop','login_restrictions', $params['login_restrictions']);
        ConfigService::set('shop','status', $params['status']);
        ConfigService::set('shop','mall_contact', $params['mall_contact']);
        ConfigService::set('shop','mall_contact_mobile', $params['mall_contact_mobile']);
        ConfigService::set('shop','return_contact', $params['return_contact']);
        ConfigService::set('shop','return_contact_mobile', $params['return_contact_mobile']);
        ConfigService::set('shop','return_province', $params['return_province']);
        ConfigService::set('shop','return_city', $params['return_city']);
        ConfigService::set('shop','return_district', $params['return_district']);
        ConfigService::set('shop','return_address', $params['return_address']);

        if($params['login_restrictions']) {
            ConfigService::set('shop','password_error_times', $params['password_error_times']);
            ConfigService::set('shop','limit_login_time', $params['limit_login_time']);
        }
    }

    /**
     * @notes 获取备案信息
     * @param $params
     * @return array
     * @author Tab
     * @date 2021/7/28 15:08
     */
    public static function getRecordInfo()
    {
        $config = [
            'copyright' => ConfigService::get('shop', 'copyright', ''),
            'record_number' => ConfigService::get('shop', 'record_number', ''),
            'record_system_link' => ConfigService::get('shop', 'record_system_link', ''),
        ];

        return $config;
    }

    /**
     * @notes 设置备案信息
     * @param $params
     * @author Tab
     * @date 2021/7/28 15:14
     */
    public static function setRecordInfo($params)
    {
        ConfigService::set('shop', 'copyright', $params['copyright'] ?? '');
        ConfigService::set('shop', 'record_number', $params['record_number'] ?? '');
        ConfigService::set('shop', 'record_system_link', $params['record_system_link'] ?? '');
    }

    /**
     * @notes 获取分享设置
     * @return array
     * @author Tab
     * @date 2021/7/28 15:29
     */
    public static function getShareSetting()
    {
        $config = [
            'share_page' => ConfigService::get('shop', 'share_page'),
            'share_title' => ConfigService::get('shop', 'share_title', ''),
            'share_intro' => ConfigService::get('shop', 'share_intro', ''),
            'share_image' => ConfigService::get('shop', 'share_image'),
        ];
        $config['share_image'] = FileService::getFileUrl($config['share_image']);

        return $config;
    }

    /**
     * @notes 分享设置
     * @param $params
     * @author Tab
     * @date 2021/7/28 15:37
     */
    public static function setShareSetting($params)
    {
        ConfigService::set('shop', 'share_page', $params['share_page']);
        ConfigService::set('shop', 'share_title', $params['share_title'] ?? '');
        ConfigService::set('shop', 'share_intro', $params['share_intro'] ?? '');
        ConfigService::set('shop', 'share_image', FileService::setFileUrl($params['share_image']));
    }

    /**
     * @notes 获取政策协议
     * @return array
     * @author Tab
     * @date 2021/7/28 16:08
     */
    public static function getPolicyAgreement()
    {
        $config = [
            'service_agreement_name' => ConfigService::get('shop', 'service_agreement_name', ''),
            'service_agreement_content' => ConfigService::get('shop', 'service_agreement_content', ''),
            'privacy_policy_name' => ConfigService::get('shop', 'privacy_policy_name', ''),
            'privacy_policy_content' => ConfigService::get('shop', 'privacy_policy_content', ''),
        ];

        return $config;
    }

    /**
     * @notes 设置政策协议
     * @param $params
     * @author Tab
     * @date 2021/7/28 16:13
     */
    public static function setPolicyAgreement($params)
    {
        if(isset($params['service_agreement_name']) && isset($params['service_agreement_content'])) {
            ConfigService::set('shop', 'service_agreement_name', $params['service_agreement_name']);
            ConfigService::set('shop', 'service_agreement_content', $params['service_agreement_content']);
        }

        if(isset($params['privacy_policy_name']) && isset($params['privacy_policy_content'])) {
            ConfigService::set('shop', 'privacy_policy_name', $params['privacy_policy_name']);
            ConfigService::set('shop', 'privacy_policy_content', $params['privacy_policy_content']);
        }
    }
}