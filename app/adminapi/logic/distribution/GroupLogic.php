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
use app\common\enum\DistributionOrderGoodsEnum;
use app\common\enum\YesNoEnum;
use app\common\logic\BaseLogic;
use app\common\model\Distribution;
use app\common\model\DistributionLevel;
use app\common\model\DistributionOrderGoods;
use app\common\model\GroupLevel;
use app\common\model\GroupOperator;
use app\common\model\GroupOrderGoods;
use app\common\model\OrderGoods;
use app\common\model\User;

/**
 * 分销会员逻辑层
 * Class DistributionMemberLogic
 * @package app\adminapi\logic\distribution
 */
class GroupLogic extends BaseLogic
{
    public static function roomCommissionList($user_id){
        $date = strtotime(date('Y').'-01-01');
        $field = [
            "any_value(FROM_UNIXTIME(create_time,'%Y年%m月')) as date",
            "any_value(FROM_UNIXTIME(create_time,'%Y')) as year",
            "any_value(FROM_UNIXTIME(create_time,'%m')) as month",
            'sum(earnings) as total_money',
            'count(order_goods_id) as order_goods_num,room_id'
        ];

        $lists = GroupOrderGoods::field($field)
            ->where('user_id', $user_id)
            ->where('status', 'in', [DistributionOrderGoodsEnum::UN_RETURNED, DistributionOrderGoodsEnum::RETURNED])
            ->where('create_time', '>', $date)
            ->group('date,room_id')
            ->select()
            ->toArray();

        $month_data = [];
        foreach ($lists as $item){
            $month_data[$item['room_id'] . '_' . intval($item['month'])] = $item['total_money'];
        }

        // 获取群信息
        $user = GroupOperator::where('user_id', $user_id)->find();
        $room_ids = explode(',', $user['room_ids']);
        $room_names = explode(',', $user['room_names']);
        $res = [];
        foreach ($room_names as $key=> $name){
            $data['name'] = $name;
            for($i = 1; $i <= 12; $i++){
                $data['sum_'.$i] = isset($month_data[$room_ids[$key].'_'.$i]) ? $month_data[$room_ids[$key].'_'.$i] : '0.00';
            }
            $res[] = $data;
        }
        return $res;
    }

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
     * 获取群列表
     *
     * @return array
     */
    public static function otherLists($shop_id){
        $params['shop_id'] = $shop_id;
        $res = self::reqPost('/shop/task/shopAccountList', $params);
        if($res['code'] == 1){
            $room_list = $res['data']['room_list'];
//            $list = GroupOperator::field('room_ids')
//                ->where('shop_id', $shop_id)->where('is_freeze', 0)->select();
//            $flag_room = [];
//            foreach ($list as $item){
//                $flag_room = array_merge($flag_room, explode(',', $item['room_ids']));
//            }
//            if(count($flag_room) > 0){
//                foreach($room_list as $key=>$room){
//                    if(in_array($room['value'], $flag_room)){
//                        unset($room_list[$key]);
//                    }
//                }
//            }
            $res['data']['room_list'] = $room_list;
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

            $level = GroupLevel::findOrEmpty($params['level_id']);
            if($level->isEmpty()) {
                throw new \Exception('无效的运营等级');
            }

            if(empty($params['id'])){
                $group = GroupOperator::where('user_id', $countIds[0])->find();
                if(!is_null($group)){
                    throw new \Exception('已经是运营商，无需重复操作');
                }
                //验证绑定群
                foreach ($params['room_ids'] as $room_id){
                    $info = GroupOperator::where('is_freeze', 0)->whereFindInSet('room_ids', $room_id)->find();
                    if(!is_null($info)){
                        throw new \Exception('群已被绑定，请确认');
                    }
                }

                $updateData = [
                    'user_id'=> $countIds[0],
                    'level_id'=> $params['level_id'],
                    'shop_id' => $params['shop_id'],
                    'shop_name'=> $params['shop_name'],
                    'room_ids'=> implode(',', $params['room_ids']),
                    'room_names'=> implode(',', $params['room_names']),
                    'account_id'=> $params['account_id'],
                    'account_name'=> $params['account_name'],
                    'operator_time'=> time()
                ];

                (new GroupOperator())->save($updateData);
            }else{
                $group = GroupOperator::where('id', '<>', $params['id'])
                    ->where('user_id', $countIds[0])->find();
                if(!is_null($group)){
                    throw new \Exception('已经是运营商，无需重复操作');
                }
                //验证绑定群
                foreach ($params['room_ids'] as $room_id){
                    $info = GroupOperator::where('id', '<>', $params['id'])
                        ->where('is_freeze', 0)
                        ->whereFindInSet('room_ids', $room_id)->find();

                    if(!is_null($info)){
                        throw new \Exception('群已被绑定，请确认');
                    }
                }
                $updateData = [
//                    'user_id'=> $countIds[0],
                    'level_id'=> $params['level_id'],
                    'shop_id' => $params['shop_id'],
                    'shop_name'=> $params['shop_name'],
                    'room_ids'=> implode(',', $params['room_ids']),
                    'room_names'=> implode(',', $params['room_names']),
                    'account_id'=> $params['account_id'],
                    'account_name'=> $params['account_name'],
                    'operator_time'=> time()
                ];

                GroupOperator::where('id', $params['id'])->update($updateData);
            }

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
            'd.level_id',
            'd.shop_id',
            'd.shop_name',
            'd.account_id',
            'd.room_ids',
            'd.room_names',
        ];
        $user = GroupOperator::alias('d')
            ->join('user u', 'u.id = d.user_id')
            ->field($field)
            ->where('d.id', $params['id'])
            ->findOrEmpty()
            ->toArray();
        $user['level_name'] = GroupLevel::getLevelName($user['level_id']);
        $levels = GroupLevel::order('weights', 'asc')->column('id,name,weights');
        $user['rooms'] = explode(',', $user['room_ids']);
        $user['rooms'] = explode(',', $user['room_names']);

        return [
            'user' => $user,
            'levels' => $levels,
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
