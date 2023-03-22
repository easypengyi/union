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
namespace app\common\logic;
use app\common\{enum\PayEnum, model\Order, model\User, model\UserLevel};

/**
 * 用户逻辑类
 * Class UserLogic
 * @package app\common\logic
 */
class UserLogic  extends BaseLogic
{
    /**
     * @notes 注册奖励
     * @param int $userId
     * @author cjhao
     * @date 2021/9/15 15:25
     */
    public static function registerAward(int $userId)
    {
        // 创建分销基础表
        DistributionLogic::add($userId);
        //默认等级
        self::defaultUserLevel($userId);


    }

    /**
     * @notes 注册后调整默认等级
     * @param $userId
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author cjhao
     * @date 2021/9/15 15:33
     */
    public static function defaultUserLevel($userId)
    {
        $level = UserLevel::where(['rank'=>1])->find();
        if($level){
            User::where(['id'=>$userId])->update(['level'=>$level->id]);
        }

    }

    /**
     * @notes 更新会员等级 todo 该方法调在更新用户的累计金额和累计订单数后调用
     * @param int $userId
     * @return bool
     * @author cjhao
     * @date 2021/7/29 18:06
     */
    public static function updateLevel(int $userId){

        $user = User::with('user_level')->find($userId);
        $levelList = UserLevel::where('rank','>',$user->rank)
            ->order('rank desc')
            ->select();
        //没有比会员当前高的等级，直接断掉
        if(empty($levelList)){
            return true;
        }
        $orderAmount = Order::where(['user_id'=>$userId,'pay_status'=>PayEnum::ISPAID])
            ->order('order_amount desc')
            ->value('order_amount');

        //从最高等级开始遍历
        foreach ($levelList as $level){

            //满足全部条件
            if($level->condition['condition_type']){

                if( $orderAmount >= $level->condition['single_money'] &&
                    $user->total_order_amount >= $level->condition['total_money'] &&
                    $user->total_order_num >= $level->condition['total_num']
                ){
                    $user->level  = $level->id;
                    $user->save();
                    break;
                }

            }else{

                //满足其中任意条件
                if( $orderAmount >= $level->condition['single_money'] ||
                    $user->total_order_amount >= $level->condition['total_money'] ||
                    $user->total_order_num >= $level->condition['total_num']
                ){

                    $user->level  = $level->id;
                    $user->save();
                    break;
                }
            }

        }

        return true;
    }

}