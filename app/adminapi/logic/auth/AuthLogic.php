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
namespace app\adminapi\logic\auth;
use think\facade\Cache;
use think\facade\Config;

/**
 * 权限功能类
 * Class AuthLogic
 * @package app\adminapi\logic\auth
 */
class AuthLogic
{
    /**
     * @notes 获取菜单
     * @return array
     * @author cjhao
     * @date 2021/8/25 17:37
     */
    public static function getMenu():array
    {
        $menu = Config::get('menu');
        return $menu;
    }

    /**
     * @notes 获取权限
     * @param array $authKeys array-返回指定权限
     * @return array
     * @author cjhao
     * @date 2021/8/26 11:09
     */
    public static function getAuth(array $authKeys = []):array
    {
        $authConfigList = Config::get('auth');
        //获取指定权限
        if(!empty($authKeys)){
            $authList = [];
            foreach ($authKeys as $keys){
                $keyList = explode('/',$keys);
                $authConfig = $authConfigList[$keyList[0]] ?? [];
                if(empty($authConfig)){
                    continue;
                }
                $keyList = explode('.',$keyList[1]);

                $buttonAuth = $authConfig[$keyList[0]][$keyList[1]]['button_auth'] ?? [];
                $actionAuth = $authConfig[$keyList[0]][$keyList[1]]['action_auth'] ?? [];

                $authList = [
                    'button_auth'   => array_merge($authList['button_auth'] ?? [],$buttonAuth),
                    'action_auth'   => array_merge($authList['action_auth'] ?? [],$actionAuth),
                ];
            }
            return $authList;
        }
        return $authConfigList;

    }
}