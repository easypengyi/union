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

namespace app\adminapi\logic\wechat;

use app\common\enum\OfficialAccountEnum;
use app\common\logic\BaseLogic;
use app\common\service\ConfigService;
use EasyWeChat\Factory;

/**
 * 微信公众号菜单逻辑层
 * Class OfficialAccountMenuLogic
 * @package app\adminapi\logic\wechat
 */
class OfficialAccountMenuLogic extends BaseLogic
{
    /**
     * @notes 保存
     * @param $params
     * @author Tab
     * @date 2021/7/29 10:53
     */
    public static function save($params)
    {
        try {
            self::checkMenu($params['menu']);
            ConfigService::set('official_account', 'menu', $params['menu']);
            return true;
        } catch(\Exception $e) {
            OfficialAccountMenuLogic::setError($e->getMessage());
            return false;
        }
    }

    /**
     * @notes 一级菜单校验
     * @param $menu
     * @throws \think\Exception
     * @author Tab
     * @date 2021/7/29 11:47
     */
    public static function checkMenu($menu)
    {
        if(count($menu) >3) {
            throw new \think\Exception('一级菜单超出限制(最多3个)');
        }

        foreach($menu as $item) {
            if(!is_array($item)) {
                throw new \think\Exception('一级菜单项须为数组格式');
            }

            if(empty($item['name'])) {
                throw new \think\Exception('请输入一级菜单名称');
            }

            if(empty($item['type']) || !in_array($item['type'], OfficialAccountEnum::MENU_TYPE)) {
                throw new \think\Exception('一级菜单未选择菜单类型或菜单类型错误');
            }

            self::checkType($item);

            if(!empty($item['sub_button'])) {
                self::checkSubButton($item['sub_button']);
            }
        }
    }

    /**
     * @notes 二级菜单校验
     * @param $subButtion
     * @throws \think\Exception
     * @author Tab
     * @date 2021/7/29 11:46
     */
    public static function checkSubButton($subButtion)
    {
        if(!is_array($subButtion)) {
            throw new \think\Exception('二级菜单须为数组格式');
        }

        if(count($subButtion) > 5) {
            throw new \think\Exception('二级菜单超出限制(最多5个)');
        }

        foreach($subButtion as $subItem) {
            if(!is_array($subItem)) {
                throw new \think\Exception('二级菜单项须为数组');
            }

            if(empty($subItem['name'])) {
                throw new \think\Exception('请输入二级菜单名称');
            }

            if(empty($subItem['type']) || !in_array($subItem['type'], OfficialAccountEnum::MENU_TYPE)) {
                throw new \think\Exception('二级未选择菜单类型或菜单类型错误');
            }

            self::checkType($subItem);
        }
    }

    /**
     * @notes 菜单类型校验
     * @param $item
     * @throws \think\Exception
     * @author Tab
     * @date 2021/7/29 11:33
     */
    public static function checkType($item)
    {
        switch($item['type']) {
            // 关键字
            case 'click':
                if(empty($item['key'])) {
                    throw new \think\Exception('请输入关键字');
                }
                break;
            // 跳转网页链接
            case 'view':
                if(empty($item['url'])) {
                    throw new \think\Exception('请输入网页链接');
                }
                break;
            // 小程序
            case 'miniprogram':
                if(empty($item['url'])) {
                    throw new \think\Exception('请输入网页链接');
                }
                if(empty($item['appid'])) {
                    throw new \think\Exception('请输入appid');
                }
                if(empty($item['pagepath'])) {
                    throw new \think\Exception('请输入小程序路径');
                }
                break;
        }
    }

    /**
     * @notes 保存发布菜单
     * @param $params
     * @return bool
     * @throws \GuzzleHttp\Exception\GuzzleException
     * @author Tab
     * @date 2021/7/29 15:12
     */
    public static function saveAndPublish($params)
    {
        try {
            self::checkMenu($params['menu']);

            $officialAccountSetting = OfficialAccountSettingLogic::getConfig();
            if(empty($officialAccountSetting['app_id']) || empty($officialAccountSetting['app_secret'])) {
                throw new \think\Exception('请先配置好微信公众号');
            }

            $config = [
                'app_id' => $officialAccountSetting['app_id'],
                'secret' => $officialAccountSetting['app_secret'],
                'response_type' => 'array',
            ];
            $app = Factory::officialAccount($config);
            $result = $app->menu->create($params['menu']);
            if($result['errcode'] == 0){
                ConfigService::set('official_account', 'menu', $params['menu']);
                return true;
            }
            self::setError('保存发布菜单失败'.json_encode($result));
            return false;
        } catch (\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }

    /**
     * @notes 查看菜单详情
     * @return array|int|mixed|string
     * @author Tab
     * @date 2021/7/29 18:45
     */
    public static function detail()
    {
        return ConfigService::get('official_account', 'menu', []);
    }
}