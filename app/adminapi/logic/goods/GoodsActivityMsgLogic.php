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

namespace app\adminapi\logic\goods;


use app\common\enum\DefaultEnum;
use app\common\model\GoodsActivityMsg;
use app\common\model\GoodsUnit;

class GoodsActivityMsgLogic
{
    /**
     * 添加素材
     *
     * @param $params
     * @return bool
     */
    public function add($params)
    {
        $goods_msg = new GoodsActivityMsg();
        $goods_msg->type = $params['type'];
        $goods_msg->content = $params['content'];
        $goods_msg->times = $params['times'];
        $goods_msg->activity_id = $params['activity_id'];
        $goods_msg->sort = (isset($params['sort']) && !empty($params['sort'])) ? $params['sort'] : DefaultEnum::SORT;
        return $goods_msg->save();
    }

    /**
     * 删除素材
     *
     * @param $params
     * @return bool
     */
    public function del($params)
    {
        return GoodsActivityMsg::destroy($params['id']);
    }
}
