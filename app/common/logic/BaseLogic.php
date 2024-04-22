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


/**
 * 逻辑基类
 * Class BaseLogic
 * @package app\common\logic
 */
class BaseLogic
{
    /**
     * 错误信息
     * @var string
     */
    protected static $error;

    /**
     * 返回状态码
     * @var int
     */
    protected static $returnCode = 0;

    protected static $returnData;

    /**
     * @notes 获取错误信息
     * @return string
     * @author 段誉
     * @date 2021/7/21 18:23
     */
    public static function getError()
    {
        if (false === self::hasError()) {
            return '系统错误';
        }
        return self::$error;
    }


    /**
     * @notes 设置错误信息
     * @param $error
     * @author 段誉
     * @date 2021/7/21 18:20
     */
    public static function setError($error)
    {
        !empty($error) && self::$error = $error;
    }


    /**
     * @notes 是否存在错误
     * @return bool
     * @author 段誉
     * @date 2021/7/21 18:32
     */
    public static function hasError()
    {
        return !empty(self::$error);
    }


    /**
     * @notes 设置状态码
     * @param $code
     * @author 段誉
     * @date 2021/7/28 17:05
     */
    public static function setReturnCode($code)
    {
        self::$returnCode = $code;
    }


    /**
     * @notes 特殊场景返回指定状态码,默认为0
     * @return int
     * @author 段誉
     * @date 2021/7/28 15:14
     */
    public static function getReturnCode()
    {
        return self::$returnCode;
    }

    /**
     * @notes 获取内容
     * @return mixed
     * @author cjhao
     * @date 2021/9/11 17:29
     */
    public static function getReturnData()
    {
        return self::$returnData;
    }

    /**
     * post 请求
     *
     * @param $url
     * @param array $data
     * @return mixed
     */
    public static function reqPost($url, $params){
        $header = [
            'Content-Type: application/json'
        ];
        $post_url = env('project.scrm_domain', '') . $url;
        $data = json_encode($params);
        $ch = curl_init ();

//        $post_url = 'http://47.94.7.218:8083/' . $url;
        curl_setopt ( $ch, CURLOPT_URL, $post_url );
        curl_setopt ( $ch, CURLOPT_POST, 1 );
        curl_setopt ( $ch, CURLOPT_HEADER, 0 );
        curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, 1 );
        curl_setopt ( $ch, CURLOPT_POSTFIELDS, $data );
        curl_setopt ($ch, CURLOPT_HTTPHEADER, $header);
//
        $res = curl_exec ( $ch );
//        var_dump($res);die;
        curl_close ( $ch );

        $data = json_decode($res, true, 512, JSON_BIGINT_AS_STRING);
        return $data;
    }

}
