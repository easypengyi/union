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

namespace app\adminapi\lists\goods;

use app\adminapi\lists\BaseAdminDataLists;
use app\common\lists\ListsExcelInterface;
use app\common\model\GoodsActivity;
use app\common\lists\ListsSearchInterface;

class GoodsActivityLists extends BaseAdminDataLists implements ListsSearchInterface,ListsExcelInterface
{
    /**
     * @notes 设置搜索条件
     * @return \string[][]
     * @author ljj
     * @date 2021/7/14 6:20
     */
    public function setSearch(): array
    {
        $where = [];
        if(!empty($this->params['name'])){
            $where[] = ['name', 'like', '%'.$this->params['name'].'%'];
        }

        if(!empty($this->params['is_index'])){
            $where[] = ['is_index', '=', $this->params['is_index']];
        }

        if(!empty($this->params['startDate'])){
            $where[] = ['startDate', '>=', $this->params['startDate'] . ' 00:00:00'];
            $where[] = ['startDate', '<', $this->params['startDate']. ' 23:59:59'];
        }
        return $where;
    }

    /**
     * @notes 查看商品品牌列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author ljj
     * @date 2021/7/14 5:48
     */
    public function lists(): array
    {
        $lists = GoodsActivity::field('*,id as sid,brandLogoUrl as image')
            ->with(['supplier'])
            ->where($this->setSearch())
            ->limit($this->limitOffset, $this->limitLength)
            ->order(['sort'=>'asc','id'=>'desc'])
            ->append(['is_show_desc'])
            ->select()
            ->toArray();

        return $lists;
    }

    /**
     * @notes 查看商品品牌总数
     * @return int
     * @author ljj
     * @date 2021/7/14 5:48
     */
    public function count(): int
    {
        return GoodsActivity::where($this->setSearch())->count();
    }

    /**
     * @notes 设置导出字段
     * @return string[]
     * @author ljj
     * @date 2021/7/31 3:35 下午
     */
    public function setExcelFields(): array
    {
        return [
            // '数据库字段名(支持别名) => 'Excel表字段名'
            'id' => 'ID',
            'name' => '品牌名称',
            'sort' => '排序',
            'is_show_desc' => '显示状态',
        ];
    }

    /**
     * @notes 设置默认表名
     * @return string
     * @author ljj
     * @date 2021/7/31 3:35 下午
     */
    public function setFileName(): string
    {
        return '商品品牌';
    }
}
