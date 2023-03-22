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
namespace app\common\service\sms;

use app\common\enum\NoticeEnum;
use app\common\enum\SmsEnum;
use app\common\logic\NoticeLogic;
use app\common\model\NoticeSetting;
use app\common\model\SmsLog;
use app\common\service\ConfigService;

/**
 * 短信服务
 * Class SmsMessageService
 * @package app\common\service
 */
class SmsMessageService
{
    protected $notice;
    protected $smsLog;

    public function send($params)
    {
        try {
            // 通知设置
            $noticeSetting = NoticeSetting::where('scene_id', $params['scene_id'])->findOrEmpty()->toArray();
            // 添加短信记录
            $content = $this->contentFormat($noticeSetting, $params);
            $this->smsLog = $this->addSmsLog($params, $content);
            // 添加通知记录
            $this->notice = NoticeLogic::addNotice($params, $noticeSetting, NoticeEnum::SMS, $content);
            // 发送短信
            $smsDriver = new SmsDriver();
            if(!is_null($smsDriver->getError())) {
                throw new \Exception($smsDriver->getError());
            }
            $result =  $smsDriver->send($params['params']['mobile'], [
                'template_id' => $noticeSetting['sms_notice']['template_id'],
                'params' => $this->setSmsParams($noticeSetting, $params)
            ]);
            if ($result === false) {
                // 发送失败更新短信记录
                $this->updateSmsLog($this->smsLog['id'], SmsEnum::SEND_FAIL, $smsDriver->getError());
                throw new \Exception($smsDriver->getError());
            }
            // 发送成功更新短信记录
            $this->updateSmsLog($this->smsLog['id'], SmsEnum::SEND_SUCCESS, $result);
            return true;
        } catch (\Exception $e) {
            throw new \Exception($e->getMessage());
        }
    }

    /**
     * @notes 格式化消息(替换内容中的变量占位符)
     * @param $noticeSetting
     * @param $params
     * @return array|string|string[]
     * @author Tab
     * @date 2021/8/19 10:55
     */
    public function contentFormat($noticeSetting, $params)
    {
        $content = $noticeSetting['sms_notice']['content'];
        foreach($params['params'] as $k => $v) {
            $search = '${' . $k . '}';
            $content = str_replace($search, $v, $content);
        }
        return $content;
    }

    /**
     * @notes 添加短信记录
     * @param $params
     * @param $content
     * @return SmsLog|\think\Model
     * @author Tab
     * @date 2021/8/19 11:11
     */
    public function addSmsLog($params, $content)
    {
        $data = [
            'scene_id'   => $params['scene_id'],
            'mobile'        => $params['params']['mobile'],
            'content'       => $content,
            'code'          => $params['params']['code'] ?? '',
            'send_status'   => SmsEnum::SEND_ING,
            'send_time'     => time(),
        ];
        return SmsLog::create($data);
    }

    /**
     * @notes 腾讯云参数处理
     * @param $noticeSetting
     * @param $params
     * @return mixed
     * @author Tab
     * @date 2021/8/19 15:55
     */
    public function setSmsParams($noticeSetting, $params)
    {
        $defaultEngine = ConfigService::get('sms', 'engine', false);
        // 阿里云 且是 验证码类型
        if($defaultEngine != 'TENCENT' && in_array($params['scene_id'], NoticeEnum::SMS_SCENE)) {
            return ['code' => $params['params']['code']];
        }

        if($defaultEngine != 'TENCENT') {
            return $params['params'];
        }

        // 腾讯云参数特殊处理  {具体参数名} => {数字}
        $tencentParams = [];
        $index = 1;
        foreach ($params['params'] as $k => $v) {
            if(strpos($noticeSetting['sms_notice']['content'], $k) !== false) {
                $noticeSetting['sms_notice']['content'] = str_replace($k, $index,$noticeSetting['sms_notice']['content']);
                $tencentParams[] = $v . "";
                $index++;
            }
        }
        return $tencentParams;
    }

    /**
     * @notes 更新短信记录
     * @param $id
     * @param $status
     * @param $result
     * @author Tab
     * @date 2021/8/19 16:07
     */
    public function updateSmsLog($id, $status, $result)
    {
        SmsLog::update([
            'id' => $id,
            'send_status' => $status,
            'results' => json_encode($result, JSON_UNESCAPED_UNICODE)
        ]);
    }
}