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

namespace app\adminapi\lists\auth;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\lists\ListsExcelInterface;
use app\common\model\Admin;
use app\common\model\Role;

/**
 * 角色列表
 * Class RoleLists
 * @package app\adminapi\lists\auth
 */
class RoleLists extends BaseAdminDataLists implements ListsExcelInterface
{
    /**
     * @notes 导出字段
     * @return string[]
     * @author Tab
     * @date 2021/9/22 18:52
     */
    public function setExcelFields(): array
    {
        return [
            'name' => '角色名称',
            'desc' => '备注',
            'create_time' => '创建时间'
        ];
    }

    /**
     * @notes 导出表名
     * @return string
     * @author Tab
     * @date 2021/9/22 18:52
     */
    public function setFileName(): string
    {
        return '角色表';
    }

    /**
     * @notes 角色列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author cjhao
     * @date 2021/8/25 18:00
     */
    public function lists(): array
    {
        $lists = Role::field('id,name,desc,create_time')
            ->limit($this->limitOffset, $this->limitLength)
            ->order('id', 'desc')
            ->select()
            ->toArray();

        $roleCountList = Admin::group('role_id')->column('count(id)','role_id');
        
        foreach ($lists as $key => $role){
            //使用角色的人数
            $lists[$key]['num'] = $roleCountList[$role['id']] ?? 0;
        }

        return $lists;
    }

    /**
     * @notes 总记录数
     * @return int
     * @author Tab
     * @date 2021/7/13 11:26
     */
    public function count(): int
    {
        return Role::count();
    }
}