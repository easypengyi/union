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

namespace app\common\command;


use app\common\model\DistributionGoods;
use app\common\model\Goods;
use app\common\model\GoodsItem;
use Exception;
use think\console\Command;
use think\console\Input;
use think\console\Output;
use think\facade\Db;

class SetDistributionGoods extends Command
{
    protected function configure()
    {
        $this->setName('set_distribution_goods')
            ->setDescription('设置分销佣金');
    }

    /**
     * @notes 设置分销佣金
     * @param Input $input
     * @param Output $output
     * @return bool|int|null
     * @throws Exception
     */
    protected function execute(Input $input, Output $output)
    {
        $good_ids = Goods::where('is_new', 1)->where('is_distribution_set', 0)->column('id');
        if(count($good_ids) == 0){
            return 'success:0';
        }
        Db::startTrans();
        try {
            $time = time();
            //查询未自动设置过佣金的爱库存商品 -- 所有规格
            $goods_items = GoodsItem::whereIn('goods_id', $good_ids)->select()->toArray();
            $data = [];
            foreach ($goods_items as $item){
                $data[] = [
                    'goods_id'=> $item['goods_id'],
                    'item_id'=> $item['id'],
                    'level_id'=> 1,
                    'is_distribution'=> 1,
                    'rule'=> 2,
                    'self_ratio'=> 80,
                    'first_ratio'=> 80,
                    'second_ratio'=> 20
                ];
            }
            (new DistributionGoods())->saveAll($data);
            Goods::whereIn('id', $good_ids)->update(['is_distribution_set'=> 1]);
            Db::commit();
            return true;
        } catch (Exception $e) {
            Db::rollback();
            throw new Exception($e->getMessage());
        }
    }
}
