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
namespace app\adminapi\logic\user;
use app\common\enum\PayEnum;
use app\common\model\
{
    User,
    Order,
    UserLevel
};


/**
 * 会员等级逻辑层
 * Class UserLevelLogic
 * @package app\adminapi\logic\user
 */
class UserLevelLogic
{

    /**
     * @notes 添加会员等级
     * @param array $params
     * @return bool
     * @author cjhao
     * @date 2021/7/28 15:08
     */
    public function add(array $params)
    {

        $userLevel = new UserLevel();

        //等级条件
        $condition = [
            'condition_type'    => $params['condition_type'],
            'single_money'       => isset($params['single_money']) ? round($params['single_money'],2) : '',
            'total_money'        => isset($params['total_money']) ? round($params['total_money'],2) : '',
            'total_num'          => isset($params['total_num']) ? (int)$params['total_num'] : '',
        ];

        $userLevel->name             = $params['name'];
        $userLevel->rank             = $params['rank'];
        $userLevel->image            = $params['image'];
        $userLevel->background_image = $params['background_image'];
        $userLevel->remark           = $params['remark'];
        $userLevel->discount         = $params['level_discount'] ? $params['discount'] : '';
        $userLevel->condition        = json_encode($condition,JSON_UNESCAPED_UNICODE);
        $userLevel->save();
        return true;
    }


    /**
     * @notes 获取用户等级
     * @param $id
     * @return array
     * @author cjhao
     * @date 2021/7/29 17:14
     */
    public function detail($id){
        $userLevel = UserLevel::find($id);
        
        $detail = [
            'id'                => $userLevel->id,
            'name'              => $userLevel->name,
            'rank'              => $userLevel->rank,
            'image'             => $userLevel->image,
            'background_image'  => $userLevel->background_image,
            'remark'            => $userLevel->remark,
            'level_discount'    => $userLevel->discount > 0 ? 1 :0,
            'discount'          => $userLevel->discount,
            'condition_type'    => isset($userLevel->condition['condition_type']) ? (int)$userLevel->condition['condition_type'] : '',
            'single_money'      => $userLevel->condition['single_money'] ?? '',
            'total_money'       => $userLevel->condition['total_money'] ?? '',
            'total_num'         => $userLevel->condition['total_num'] ?? '',
        ];

        return $detail;
    }

    /**
     * @notes 编辑会员等级
     * @param array $params
     * @author cjhao
     * @date 2021/7/28 15:15
     */
    public function edit(array $params){
        $Userlevel = UserLevel::find($params['id']);

        $Userlevel->name             = $params['name'];
        $Userlevel->image            = $params['image'];
        $Userlevel->background_image = $params['background_image'];
        $Userlevel->remark           = $params['remark'];
        $Userlevel->discount         = $params['level_discount'] ? $params['discount'] : '';

        //非系统默认，可设置等级条件
        if(1 != $Userlevel->rank){
            $Userlevel->rank            = $params['rank'];
            //等级条件
            $condition = [
                'condition_type'     => $params['condition_type'],
                'single_money'       => $params['single_money'] ? round($params['single_money'],2) : '',
                'total_money'        => $params['total_money'] ? round($params['total_money'],2) : '',
                'total_num'          => $params['total_num'] ? (int)$params['total_num'] : '',
            ];
            $Userlevel->condition    = json_encode($condition,JSON_UNESCAPED_UNICODE);
        }

        $Userlevel->save();
        return true;
    }

    /**
     * @notes 删除会员等级
     * @param int $id
     * @return bool
     * @author cjhao
     * @date 2021/7/28 16:59
     */
    public function del(int $id){
        $res = UserLevel::destroy($id);
        //todo 将该等级的用户全部降到系统默认等级
        if($res){

            $level = UserLevel::where(['rank'=>1])->find();
            if($level){
                User::where(['level'=>$id])->update(['level'=>$level->id]);
            }

        }
        return true;
    }
    

}