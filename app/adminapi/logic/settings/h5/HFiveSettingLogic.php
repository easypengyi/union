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
namespace app\adminapi\logic\settings\h5;

use app\common\logic\BaseLogic;
use app\common\service\ConfigService;

/**
 * H5设置逻辑层
 * Class HFiveSettingLogic
 * @package app\adminapi\logic\settings\h5
 */
class HFiveSettingLogic extends BaseLogic
{
    /**
     * @notes 获取H5设置
     * @return array
     * @author Tab
     * @date 2021/7/30 14:07
     */
    public static function getConfig()
    {
        $config = [
            'status' => ConfigService::get('h5', 'status'),
            'url' => request()->domain() . '/mobile'
        ];

        return $config;
    }

    /**
     * @notes H5设置
     * @param $params
     * @author Tab
     * @date 2021/7/30 14:15
     */
    public static function setConfig($params)
    {
        ConfigService::set('h5', 'status', $params['status']);
//        // 恢复原入口
//        if(file_exists('./mobile/index_lock.html')) {
//            // 存在则原商城入口被修改过，先清除修改后的入口
//            unlink('./mobile/index.html');
//            // 恢复原入口
//            rename('./mobile/index_lock.html', './mobile/index.html');
//        }
//
//        // H5商城关闭 且 显示空白页
//        if($params['status'] == 0) {
//            // 变更文件名
//            rename('./mobile/index.html', './mobile/index_lock.html');
//            // 创建新空白文件
//            $newfile = fopen('./mobile/index.html', 'w');
//            fclose($newfile);
//        }
    }
}