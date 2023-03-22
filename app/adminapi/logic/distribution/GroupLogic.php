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

use app\adminapi\logic\user\UserLogic;
use app\common\enum\YesNoEnum;
use app\common\logic\BaseLogic;
use app\common\model\Distribution;
use app\common\model\DistributionLevel;
use app\common\model\DistributionOrderGoods;
use app\common\model\GroupLevel;
use app\common\model\GroupOperator;
use app\common\model\OrderGoods;
use app\common\model\User;

/**
 * 分销会员逻辑层
 * Class DistributionMemberLogic
 * @package app\adminapi\logic\distribution
 */
class GroupLogic extends BaseLogic
{
    /**
     * 获取商家信息
     *
     * @return array
     */
    public static function shopLists(){
        $res = self::reqPost('/shop/task/shopList', []);
        if($res['code'] == 1){
            return $res['data'];
        }
        return [];
    }

    /**
     * 获取
     *
     * @return array
     */
    public static function otherLists($shop_id){
        $params['shop_id'] = $shop_id;
        $res = self::reqPost('/shop/task/shopAccountList', $params);
        if($res['code'] == 1){
            return $res['data'];
        }
        return [];
    }

    /**
     * @notes 开通分销
     * @param $params
     * @throws \Exception
     * @author Tab
     * @date 2021/7/27 17:49
     */
    public static function open($params)
    {
        try {
            $countIds = $params['ids'];
            $user = User::where('id', $countIds[0])->find();
            if (is_null($user)) {
                throw new \Exception('请选择有效用户');
            }

            $group = GroupOperator::where('user_id', $countIds[0])->findOrEmpty();
            if(!is_null($group)){
                throw new \Exception('已经是运营商，无需重复操作');
            }

            $level = GroupLevel::findOrEmpty($params['level_id']);
            if($level->isEmpty()) {
                throw new \Exception('无效的运营等级');
            }
            $updateData = [
                'user_id'=> $countIds[0],
                'level_id'=> $params['level_id'],
                'shop_id' => $params['shop_id'],
                'shop_name'=> $params['shop_name'],
                'room_ids'=> implode(',', $params['room_ids']),
                'account_id'=> $params['account_id'],
                'account_name'=> $params['account_name'],
                'operator_time'=> time(),
            ];

            (new GroupOperator())->save($updateData);
            return true;
        } catch(\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }

    /**
     * @notes 调整分销等级界面信息
     * @param $params
     * @return array
     * @author Tab
     * @date 2021/9/14 18:50
     */
    public static function adjustLevelInfo($params)
    {
        $field = [
            'u.sn',
            'u.nickname',
            'd.user_id',
            'd.level_id'
        ];
        $user = GroupOperator::alias('d')
            ->join('user u', 'u.id = d.user_id')
            ->field($field)
            ->where('d.id', $params['id'])
            ->findOrEmpty()
            ->toArray();
        $user['level_name'] = GroupLevel::getLevelName($user['level_id']);
        $levels = GroupLevel::order('weights', 'asc')->column('id,name,weights');

        return [
            'user' => $user,
            'levels' => $levels
        ];
    }

    /**
     * @notes 调整分销商等级
     * @param $params
     * @author Tab
     * @date 2021/9/14 18:58
     */
    public static function adjustLevel($params)
    {
        try {
            $distribution = GroupOperator::where('id', $params['id'])->findOrEmpty();
            if ($distribution->isEmpty()) {
                throw new \Exception('运营商不存在');
            }
            $level = GroupLevel::findOrEmpty($params['level_id']);
            if ($level->isEmpty()) {
                throw new \Exception('运营等级不存在');
            }
            $distribution->level_id = $params['level_id'];
            $distribution->save();

            return true;
        } catch (\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }

    /**
     * @notes 冻结/解冻资格
     * @param $params
     * @return bool
     * @author Tab
     * @date 2021/9/14 19:11
     */
    public static function freeze($params)
    {
        try {
            $group = GroupOperator::where('id', $params['id'])->findOrEmpty();
            if ($group->isEmpty()) {
                throw new \Exception('运营商不存在');
            }
            $group->is_freeze = !$group->is_freeze;
            $group->save();

            return true;
        } catch (\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }

}
