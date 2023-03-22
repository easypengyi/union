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
namespace app\shopapi\logic;
use EasyWeChat\Factory;
use app\common\{enum\DistributionConfigEnum,
    model\DistributionConfig,
    model\GoodsCollect,
    model\User,
    model\Order,
    enum\PayEnum,
    enum\OrderEnum,
    enum\CouponEnum,
    model\UserLevel,
    logic\BaseLogic,
    model\AfterSale,
    model\CouponList,
    enum\AfterSaleEnum,
    model\UserTransfer,
    service\FileService,
    enum\AccountLogEnum,
    service\ConfigService,
    logic\AccountLogLogic,
    service\sms\SmsDriver};

use think\facade\Config;
use think\facade\Db;

/**
 * 会员逻辑层
 * Class UserLogic
 * @package app\shopapi\logic
 */
class UserLogic extends BaseLogic
{

    /**
     * @notes 个人中心
     * @param int $userId
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author cjhao
     * @date 2021/8/6 19:16
     */
    public function centre(int $userId):array
    {
        $user = User::with('user_level')->field('id,sn,sex,nickname,avatar,user_money,user_integral,mobile,level,create_time,code,store_title')
            ->find($userId);
        $user->level_rank = $user->rank ?? '';
        $user->level_name = $user->name ?? '';
        //待支付
        $user->wait_pay = Order::where(['user_id'=>$userId,'order_status'=>OrderEnum::STATUS_WAIT_PAY,'pay_status'=>PayEnum::UNPAID])->count();
        //待发货
        $user->wait_delivery = Order::where(['user_id'=>$userId,'order_status'=>OrderEnum::STATUS_WAIT_DELIVERY,'pay_status'=>PayEnum::ISPAID])->count();
        //待收货
        $user->wait_take = Order::where(['user_id'=>$userId,'order_status'=>OrderEnum::STATUS_WAIT_RECEIVE,'pay_status'=>PayEnum::ISPAID])->count();
        //待评论
        $user->wait_comment = Order::where(['user_id'=>$userId,'order_status'=>OrderEnum::STATUS_FINISH,'pay_status'=>PayEnum::ISPAID])->count();
        //退款、售后
        $user->after_sale = AfterSale::where(['user_id'=>$userId,'status'=>AfterSaleEnum::STATUS_ING])->count();
        //优惠券
        $user->coupon = CouponList::where([
            ['user_id', '=', $userId],
            ['status', '=', CouponEnum::USE_STATUS_NOT],
            ['invalid_time', '>=', time()]
        ])->count();
        //收藏数量
        $user->collect = GoodsCollect::where(['user_id'=>$userId])->count();
        // 自定义邀请海报
        $dbConfig = DistributionConfig::column('value', 'key');
        $dbConfig['apply_image'] = $dbConfig['apply_image'] ?? DistributionConfigEnum::DEFAULT_APPLY_IMAGE;
        $dbConfig['poster'] = $dbConfig['poster'] ?? DistributionConfigEnum::DEFAULT_POSTER;
        $dbConfig['apply_image'] = FileService::getFileUrl($dbConfig['apply_image']);
        $dbConfig['poster'] = FileService::getFileUrl($dbConfig['poster']);
        $user->poster = $dbConfig['poster'];
        $user->apply_image = $dbConfig['apply_image'];

        $user->hidden(['name','rank']);
        return $user->toArray();
    }


    /**
     * @notes 设置用户信息
     * @param int $userId
     * @param array $params
     * @return bool
     * @author cjhao
     * @date 2021/8/6 19:44
     */
    public static function setInfo(int $userId,array $params):bool
    {
        User::update(['id'=>$userId,$params['field']=>$params['value']]);
        return true;
    }

    /**
     * @notes 绑定手机号
     * @param $params
     * @return bool
     * @author Tab
     * @date 2021/8/25 17:55
     */
    public static function bindMobile($params)
    {
        try {
            $smsDriver = new SmsDriver();
            $result = $smsDriver->verify($params['mobile'], $params['code']);
            if(!$result) {
                throw new \Exception('验证码错误');
            }
            $user = User::where('mobile', $params['mobile'])->findOrEmpty();
            if(!$user->isEmpty()) {
                throw new \Exception('该手机号已被其他账号绑定');
            }
            unset($params['code']);
            User::update($params);
            return true;
        } catch (\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }

    /**
     * @notes 会员中心
     * @param int $userId
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author cjhao
     * @date 2021/8/9 11:03
     */
    public function userLevel(int $userId):array
    {
        $user = User::field('id,nickname,avatar,level')->find($userId);
        $levelList = UserLevel::order(['rank'=>'asc'])->withoutField('remark,create_time,update_time,delete_time')->select();
        $levelName = '';
        foreach ($levelList as $levelKey => $level){

            if($level->discount > 0){
                $level->discount = '会员折扣:'.floatval($level->discount).'折';
            }
            //下个等级
            $level->next_level = $levelList[$levelKey+1]->name ?? '';

            $level->status = 0;
            if($user->level == $level->id){
                $level->status = 1;
                $levelName = $level->name;
                $user->rank = $level->rank;//更新为等级权重
            }
            //会员条件
            $conditionArray = [];

            if($level->condition){
                $conditionType = $level->condition['condition_type'] ?? '';

                //没有设置条件；直接返回空数组
                if('' === $conditionType){
                    $level->condition = $conditionArray;
                    continue;
                }

                $level->condition_tips = '满足以下任意条件即可升级';
                //满足全部条件
                if($conditionType){
                    $level->condition_tips = '满足以下全部条件即可升级';
                }

                $singleMoney = $level->condition['single_money'] ?? 0;
                $totalMoney  = $level->condition['total_money'] ?? 0;
                $totalNum    = $level->condition['total_num'] ?? 0;

                //单笔消费满足金额
                if($singleMoney > 0){

                    $conditionArray[] = '单消费金额满'.$singleMoney.'元';
                }
                //累计消费金额
                if($totalMoney  > 0){

                    $conditionArray[] = '累计消费金额满'.$totalMoney.'元';
                }
                //累计消费次数
                if($totalNum  > 0){

                    $conditionArray[] = '累计消费次数'.$totalNum.'次';
                }
            }

            $level->condition = $conditionArray;


        }
        $user->level_name = $levelName;
        $data = [
            'user'          => $user,
            'level_list'    => $levelList,
        ];

        return $data;
    }

    /**
     * @notes 余额转账
     * @param $params
     * @return false
     * @author Tab
     * @date 2021/8/12 9:15
     */
    public static function transfer($params)
    {
        Db::startTrans();
        try {
            // 扣减自身余额
            $me = User::findOrEmpty($params['user_id']);
            $me->user_money = $me->user_money - $params['money'];
            $me->save();
            // 记录账户流水
            AccountLogLogic::add($me->id,AccountLogEnum::BNW_DEC_TRANSFER, AccountLogEnum::DEC, $params['money'], '', '余额转账-转出');
            // 增加收款方余额
            $transferIn = User::whereOr('sn', $params['transfer_in'])
                ->whereOr('mobile', $params['transfer_in'])
                ->findOrEmpty();
            $transferIn->user_money = $transferIn->user_money + $params['money'];
            $transferIn->save();
            // 记录账户流水
            AccountLogLogic::add($transferIn->id,AccountLogEnum::BNW_INC_TRANSFER, AccountLogEnum::INC, $params['money'], '', '余额转账-转入');
            // 转账记录
            UserTransfer::create([
                'transfer_out' => $me->id,
                'transfer_in' => $transferIn->id,
                'money' => $params['money']
            ]);

            Db::commit();
            return true;
        } catch(\Exception $e) {
            Db::rollback();
            self::setError($e->getMessage());
            return false;
        }
    }

    /**
     * @notes 最近转账记录(3条)
     * @param $userId
     * @return mixed
     * @author Tab
     * @date 2021/8/12 10:35
     */
    public static function transferRecent($userId)
    {
        $lists = UserTransfer::alias('ut')
            ->leftJoin('user u', 'u.id = ut.transfer_in')
            ->field('u.avatar,u.sn,u.nickname')
            ->distinct(true)
            ->where('ut.transfer_out', $userId)
            ->limit(3)
            ->select()
            ->toArray();
        foreach($lists as &$item) {
            $item['avatar'] = FileService::getFileUrl($item['avatar']);
        }
        return $lists;
    }

    /**
     * @notes 收款用户信息
     * @param $params
     * @return array|false
     * @author Tab
     * @date 2021/8/12 11:03
     */
    public static function transferIn($params)
    {
        try {
            $user = User::field('avatar,nickname,sn')
                ->whereOr('sn', $params['transfer_in'])
                ->whereOr('mobile', $params['transfer_in'])
                ->findOrEmpty();
            if($user->isEmpty()) {
                throw new \think\Exception('收款用户不存在');
            }
            return $user->toArray();
        }catch(\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }

    /**
     * @notes 判断用户是否已设置支付密码
     * @param $userId
     * @return bool
     * @author Tab
     * @date 2021/8/17 10:31
     */
    public static function hasPayPassword($userId)
    {
        $user = User::findOrEmpty($userId);
        if(empty($user->pay_password)) {
            return ['has_pay_password' => false];
        }
        return ['has_pay_password' => true];
    }

    /**
     * @notes 设置/修改交易密码
     * @param $params
     * @return bool
     * @author Tab
     * @date 2021/8/12 11:32
     */
    public static function setPayPassword($params)
    {
        try {
            $user = User::findOrEmpty($params['user_id']);
            if(empty($user->pay_password)) {
                // 首次设置密码
                $user->pay_password = md5($params['pay_password']);
                $user->save();
                return true;
            }
            // 修改密码
            if(!isset($params['origin_pay_password']) || empty($params['origin_pay_password'])) {
                throw new \think\Exception('请输入原支付密码');
            }
            if($user->pay_password != md5($params['origin_pay_password'])) {
                throw new \think\Exception('原支付密码错误');
            }
            // 设置新支付密码
            $user->pay_password = md5($params['pay_password']);
            $user->save();

            return true;
        } catch (\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }

    /**
     * @notes 重置支付密码
     * @param $params
     * @return bool
     * @author Tab
     * @date 2021/8/24 16:30
     */
    public static function resetPayPassword($params)
    {
        try {
            // 校验验证码
            $smsDriver = new SmsDriver();
            if(!$smsDriver->verify($params['mobile'], $params['code'])) {
                throw new \Exception('验证码错误');
            }
            $params['pay_password'] = md5($params['pay_password']);
            unset($params['code']);
            unset($params['mobile']);
            User::update($params);

            return true;
        } catch(\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }

    /**
     * @notes 重置登录密码
     * @param $params
     * @return bool
     * @author Tab
     * @date 2021/8/25 17:03
     */
    public static function resetPassword($params)
    {
        try {
            // 校验验证码
            $smsDriver = new SmsDriver();
            if(!$smsDriver->verify($params['mobile'], $params['code'])) {
                throw new \Exception('验证码错误');
            }
            $passwordSalt = Config::get('project.unique_identification');
            $password = create_password($params['password'], $passwordSalt);

            User::where('mobile', $params['mobile'])->update([
                'password' => $password
            ]);

            return true;
        } catch(\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }

    /**
     * @notes 钱包
     * @param $userId
     * @return array
     * @author Tab
     * @date 2021/8/12 14:58
     */
    public static function wallet($userId)
    {
        $user = User::findOrEmpty($userId);
        $rechargeOpen = ConfigService::get('recharge', 'open');
        $userMoney = is_null($user->user_money) ? 0 : $user->user_money;
        $userEarnings = is_null($user->user_earnings) ? 0 : $user->user_earnings;
        $withdraw_date = ConfigService::get('config', 'withdraw_date', 20);
        return [
            'user_money' => $userMoney,
            'user_earnings' => $userEarnings,
            'total_amount' => $userMoney + $userEarnings,
            'recharge_open' => $rechargeOpen,
            'withdraw_date'=> $withdraw_date
        ];
    }

    /**
     * @notes 用户信息
     * @param $userId
     * @return array
     * @author Tab
     * @date 2021/8/25 17:22
     */
    public static function info($userId)
    {
         $user =  User::field('sn,avatar,nickname,sex,mobile,create_time')->findOrEmpty($userId)->toArray();
         $user['has_password'] = empty($user['password']) ? '未设置' : '已设置';
         $user['version'] = request()->header('version');
         return $user;
    }

    /**
     * @notes 获取微信手机号
     * @param $params
     * @return array|false
     * @author Tab
     * @date 2021/8/24 15:20
     */
    public static function getMobileByMnp($params)
    {
        try {
            $config = [
                'app_id' => ConfigService::get('mini_program', 'app_id'),
                'secret' => ConfigService::get('mini_program', 'app_secret'),
            ];
            $app = Factory::miniProgram($config);
            $response = $app->auth->session($params['code']);
            if (!isset($response['session_key'])) {
                throw new \Exception('获取用户信息失败');
            }
            $response = $app->encryptor->decryptData($response['session_key'], $params['iv'], $params['encrypted_data']);
            $user = User::where([
                ['mobile', '=', $response['phoneNumber']],
                ['id', '<>', $params['user_id']]
            ])->findOrEmpty();
            if (!$user->isEmpty()) {
                throw new \Exception('手机号已被其他账号绑定');
            }
            // 绑定手机号
            self::setInfo($params['user_id'], [
                'field' => 'mobile',
                'value' => $response['phoneNumber']
            ]);

            return true;
        } catch(\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }

    /**
     * @notes 获取服务协议
     * @return array
     * @author Tab
     * @date 2021/8/24 16:48
     */
    public static function getServiceAgreement()
    {
        $data = [
            'service_agreement_name' => ConfigService::get('shop', 'service_agreement_name', ''),
            'service_agreement_content' => ConfigService::get('shop', 'service_agreement_content', ''),
        ];
        return $data;
    }

    /**
     * @notes 获取隐私政策
     * @return array
     * @author Tab
     * @date 2021/8/24 16:50
     */
    public static function getPrivacyPolicy()
    {
        $data = [
            'privacy_policy_name' => ConfigService::get('shop', 'privacy_policy_name', ''),
            'privacy_policy_content' => ConfigService::get('shop', 'privacy_policy_content', '')
        ];
        return $data;
    }

    /**
     * @notes 设置登录密码
     * @author Tab
     * @date 2021/10/22 18:10
     */
    public static function setPassword($params)
    {
        try {
            $user = User::findOrEmpty($params['user_id']);
            if ($user->isEmpty()) {
                throw new \Exception('用户不存在');
            }
            if (!empty($user->password)) {
                throw new \Exception('用户已设置登录密码');
            }
            $passwordSalt = Config::get('project.unique_identification');
            $password = create_password($params['password'], $passwordSalt);
            $user->password = $password;
            $user->save();

            return true;;
        } catch (\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }

    /**
     * @notes 修改登录密码
     * @param $params
     * @return bool
     * @author Tab
     * @date 2021/10/22 18:17
     */
    public static function changePassword($params)
    {
        try {
            $user = User::findOrEmpty($params['user_id']);
            if ($user->isEmpty()) {
                throw new \Exception('用户不存在');
            }
            $passwordSalt = Config::get('project.unique_identification');
            $oldPassword = create_password($params['old_password'], $passwordSalt);
            $newPassword = create_password($params['password'], $passwordSalt);
            if ($user->password != $oldPassword) {
                throw new \Exception('原密码错误');
            }
            $user->password = $newPassword;
            $user->save();

            return true;;
        } catch (\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }

    /**
     * @notes 判断用户是否有设置登录密码
     * @param $userId
     * @author Tab
     * @date 2021/10/22 18:25
     */
    public static function hasPassword($userId)
    {
        $user = User::findOrEmpty($userId);
        return empty($user->password) ? false : true;
    }
}
