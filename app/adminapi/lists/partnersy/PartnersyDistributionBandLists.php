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

namespace app\adminapi\lists\partnersy;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\enum\YesNoEnum;
use app\common\lists\ListsExcelInterface;
use app\common\lists\ListsSearchInterface;
use app\common\model\DistributionLevel;
use app\common\model\DistributionOrderGoods;
use app\common\model\User;
use app\common\model\PartnersyDistribution;
use app\common\model\UserLevel;
use app\common\service\FileService;

/**
 * 列表
 * Class PartnersyDistributionBandLists
 * @package app\adminapi\lists
 */
class PartnersyDistributionBandLists extends BaseAdminDataLists implements ListsSearchInterface,ListsExcelInterface
{
    /**
     * @notes 设置搜索条件
     * @return array
     * @author Tab
     * @date 2021/7/27 16:44
     */
    public function setSearch(): array
    {
        return [
            'between_time' => 'pd.create_time'
        ];
    }

    /**
     * @notes 附加搜索
     * @author Tab
     * @date 2021/9/22 10:46
     */
    public function attachSearch()
    {

        // 根据用户信息搜索
        if (isset($this->params['user_info']) && !empty($this->params['user_info'])) {
            $this->searchWhere[] = ['u.sn|u.nickname', 'like', '%' . trim($this->params['user_info']) . '%'];
        }
    }

    /**
     * @notes 导出表名
     * @return string
     * @author Tab
     * @date 2021/8/5 15:15
     */
    public function setFileName(): string
    {
        return '合作伙伴表';
    }

    /**
     * @notes 导出字段名
     * @return array
     * @author Tab
     * @date 2021/8/5 15:16
     */
    public function setExcelFields(): array
    {
        return [
            'user_info' => '用户信息',
            'distribution_level_name' => '分销等级',
            'earnings' => '已入账佣金',
            'wait_earnings' => '待结算佣金',
            'first_leader_name' => '上级分销商',
            'is_freeze_desc' => '合作伙伴状态',
            'partnersy_time' => '成为合作伙伴时间',
        ];
    }

    /**
     * @notes 列表
     * @return array
     * @author Tab
     * @date 2021/7/27 17:19
     */
    public function lists(): array
    {

        $this->attachSearch();
        $field = 'u.id,u.sn, u.avatar, u.nickname, u.level, u.first_leader,u.mobile';
        $field .= ', u_p.id as p_id,u_p.sn as p_sn, u_p.avatar as p_avatar, u_p.nickname as p_nickname, u_p.level as p_level, u_p.first_leader as p_first_leader,u_p.mobile as p_mobile';
        $field .= ', pd.id as pd_id,pd.create_time';

        $this->sortOrder = ['pd.id' => 'desc'];
        $lists = PartnersyDistribution::alias('pd')
            ->join('user u_p', 'pd.partnersy_user_id = u_p.id') //合作伙伴用户
            ->join('user u', 'pd.distribution_user_id = u.id') //团长用户
            ->field($field)
            ->where('pd.is_delete',0)
            ->where($this->searchWhere)
            ->order($this->sortOrder)
            ->limit($this->limitOffset, $this->limitLength)
            ->select()
            ->toArray();

        foreach ($lists as &$item) {
            $item['avatar'] = trim($item['avatar']) ? FileService::getFileUrl($item['avatar']) : '';
            $item['p_avatar'] = trim($item['p_avatar']) ? FileService::getFileUrl($item['p_avatar']) : '';
            $item['user_info'] = $item['nickname'] . '(' . $item['sn'] . ')';
            $item['p_user_info'] = $item['p_nickname'] . '(' . $item['p_sn'] . ')';
        }

        return $lists;
    }

    /**
     * @notes 记录数
     * @return int
     * @author Tab
     * @date 2021/7/27 17:19
     */
    public function count(): int
    {
        $this->attachSearch();

        $count = User::alias('u')
            ->leftJoin('partnersy d', 'd.user_id = u.id')
            ->where($this->searchWhere)
            ->count();

        return $count;
    }
}