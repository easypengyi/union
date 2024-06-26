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


use akc\Akc;
use app\common\enum\DefaultEnum;
use app\common\enum\YesNoEnum;
use app\common\logic\BaseLogic;
use app\common\model\DistributionGoods;
use app\common\model\Goods;
use app\common\model\GoodsActivity;
use app\common\model\GoodsActivityLog;
use app\common\model\GoodsActivityMany;
use app\common\model\GoodsActivityMsg;
use app\common\model\GoodsActivityPush;
use app\common\model\GoodsCategoryIndex;
use app\common\model\GoodsItem;
use app\common\model\GoodsSpec;
use app\common\model\GoodsSpecValue;
use think\facade\Db;

class GoodsActivityLogic extends BaseLogic
{
    /**
     * @notes 添加商品分类
     * @param $params
     * @return bool
     * @author ljj
     * @date 2021/7/17 5:46 下午
     */
    public function add($params)
    {
        $GoodsActivity = new GoodsActivity;
        $GoodsActivity->id = $params['id'];
        $GoodsActivity->activity_type = isset($params['activity_type']) ? $params['activity_type'] : 0;
        $GoodsActivity->activity_id = isset($params['activity_id']) ? $params['activity_id'] : 0;
        $GoodsActivity->goods_id = isset($params['goods_id']) ? $params['goods_id'] : 0;
        $GoodsActivity->item_id = isset($params['item_id']) ? $params['item_id'] : 0;
        $GoodsActivity->name = $params['name'];
        $GoodsActivity->description = isset($params['description']) ? $params['description'] : ' ';
        $GoodsActivity->startDate = $params['startDate'];
        $GoodsActivity->endDate = $params['endDate'];
        $GoodsActivity->brand = $params['brand'];
        $GoodsActivity->brandLogoUrl = isset($params['brandLogoUrl']) ? $params['brandLogoUrl'] : '';
        $GoodsActivity->statementByDay = isset($params['statementByDay']) ? $params['statementByDay'] : 0;
        $GoodsActivity->categoryId = isset($params['categoryId']) ? $params['categoryId'] : '';
        $GoodsActivity->category = isset($params['category']) ? $params['category'] : '';
        $GoodsActivity->deliverTime = isset($params['deliverTime']) ? $params['deliverTime'] : '';
        $GoodsActivity->content = $params['content'];
        $GoodsActivity->activeModel = isset($params['activeModel']) ? $params['activeModel'] : 0;
        $GoodsActivity->aftersaleEndTime = isset($params['aftersaleEndTime']) ? $params['aftersaleEndTime'] : '';
        $GoodsActivity->previewInformation = $params['previewInformation'];
        $GoodsActivity->refundInsurance = isset($params['refundInsurance']) ? $params['refundInsurance'] : 0;
        $GoodsActivity->isExchangeRefundGoods = isset($params['isExchangeRefundGoods']) ? $params['isExchangeRefundGoods'] : 0;
        $GoodsActivity->activeType = isset($params['activeType']) ? $params['activeType'] : 0;
        $GoodsActivity->status = isset($params['status']) ? $params['status'] : 1;
        $GoodsActivity->push_type = isset($params['push_type']) ? $params['push_type'] : '';
        $GoodsActivity->push_status = isset($params['push_status']) ? $params['push_status'] : '';
        $GoodsActivity->is_index = isset($params['is_index']) ? $params['is_index'] : '';
//        $GoodsActivity->push_time = !empty($params['push_time']) ? $params['push_time'] : null;
        $GoodsActivity->supplier_id = isset($params['supplier_id']) ? $params['supplier_id'] : '';
        $GoodsActivity->category_id = isset($params['category_id']) ? $params['category_id']: '';
        $GoodsActivity->is_new = isset($params['is_new']) ? $params['is_new']: 1;
        $GoodsActivity->waterMarkLicense = isset($params['waterMarkLicense']) ? $params['waterMarkLicense']: '';
        $GoodsActivity->title = $params['title']??'';

        GoodsActivityLog::create(['activity_id'=> $params['id']]);
        //设置不同的推送时间
        if(!empty($params['push_list'])){
            $insert_data = [];
            foreach ($params['push_list'] as $item){
                if(empty($item['push_time'])){
                    continue;
                }
                $industry_name = '';
                $industry_level_name = '所有';
                foreach ($item['industry_list'] as $industry){
                    if($industry['id'] == $item['industry_id']){
                        $industry_name = $industry['name'];
                        break;
                    }
                }
                foreach ($item['industry_level_list'] as $level){
                    if($level['id'] == $item['industry_level_id']){
                        $industry_level_name = $level['name'];
                        break;
                    }
                }
                $insert_data[] = [
                    'activity_id'=> $params['id'],
                    'industry_id'=> $item['industry_id'],
                    'industry_name'=> $industry_name,
                    'industry_level_id'=> $item['industry_level_id'],
                    'industry_level_name'=> $industry_level_name,
                    'push_time'=> $item['push_time'],
                    'create_time'=> time()
                ];
            }
            GoodsActivityPush::insertAll($insert_data);
        }

        //设置不同的推送时间
        if(!empty($params['activity_list'])){
            $ids = GoodsActivityMany::where('activity_id', $params['id'])->column('id');
            GoodsActivityMany::destroy($ids, true);
            $insert_data = [];
            foreach ($params['activity_list'] as $item){
                if(empty($item['has_activity_id'])){
                    continue;
                }
                $insert_data[] = [
                    'activity_id'=> $params['id'],
                    'has_activity_id'=> $item['has_activity_id'],
                    'has_activity_title'=> $item['has_activity_title'],
                    'create_time'=> time()
                ];
            }
            GoodsActivityMany::insertAll($insert_data);
        }


        return $GoodsActivity->save();
    }

    /**
     * @notes 获取当前时间内需要下载的商品
     * @return array
     * @author cjhao
     * @date 2021/7/26 10:41
     */
    public static function getActivityDownGoodsLists(array $ids = []):array
    {
        $where = [];
        if($ids){
            $where[] = ['C.id'=>$ids];
        }
        $where['is_down_goods'] = 1;
        $where['down_goods_status'] = 0;
        $list = GoodsActivity::where($where)->field("id")->limit(1)->select()->toArray();;
        return $list;
    }

    /**
     * @notes 获取商品列表
     * @return array
     * @author cjhao
     * @date 2021/7/26 10:41
     */
    public static function getActivityGoodsLists():array
    {
        $endDate = date('Y-m-d H:i:s');
        $where[] = ['is_down_goods', '=', 1];
        $where[] = ['down_goods_status', '=', 1];
//        $where[] = ['startDate', '>', $endDate];
        $where[] = ['endDate', '>', $endDate];
//        $where[] = ['id', '=', '1742818973816115202'];
        $list = GoodsActivity::where($where)->column("id");
        return $list;
    }



    /**
     * @notes 修改商品品牌显示状态
     * @param $params
     * @return bool
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author ljj
     * @date 2021/7/15 11:41
     */
    public function status($params)
    {
        $GoodsActivity = new GoodsActivity;
        return $GoodsActivity::update(['id'=>$params['id'],'is_down_goods'=>$params['is_down_goods']]);

    }

    /**
     * 修改推送状态
     *
     * @param $params
     * @return GoodsActivity
     */
    public function push ($params)
    {
        $GoodsActivity = new GoodsActivity;
        return $GoodsActivity::update(['id'=>$params['id'],'push_status'=>$params['push_status']]);

    }

    /**
     * @notes 删除商品分类
     * @param $params
     * @return bool
     * @author ljj
     * @date 2021/7/19 4:03 下午
     */
    public function del($params)
    {
        Db::startTrans();
        try {
            $res = GoodsActivity::destroy($params['id'], true);
            if ($res) {
                //删除对应的商品
                $goods_ids = Goods::where('activity_id', $params['id'])->column('id');
                $where[] = ['goods_id', 'in', $goods_ids];
                $deleteIds = DistributionGoods::where($where)->column('id');
                DistributionGoods::destroy($deleteIds, true);

                //分类
                $category_ids = GoodsCategoryIndex::where($where)->column('id');
                GoodsCategoryIndex::destroy($category_ids, true);

                $items = GoodsItem::where($where)->column('id');
                GoodsItem::destroy($items, true);
                $spec = GoodsSpec::where($where)->column('id');
                GoodsSpec::destroy($spec, true);
                $spec_value = GoodsSpecValue::where($where)->column('id');
                GoodsSpecValue::destroy($spec_value, true);

                Goods::destroy(['activity_id' => $params['id']], true);
                GoodsActivityMsg::destroy(['activity_id' => $params['id']], true);
            }
            Db::commit();

            return true;
        }catch (\Exception $e) {
            Db::rollback();
            return $e->getMessage();
        }
    }

    /**
     * 活动详情
     *
     * @param int $id
     * @return mixed
     */
    public function detail(int $id)
    {
//        $ack = new Akc();
//        $id = "1739220331559297025";
//        $info = $ack->activityList($id);
//        var_dump($id, $info);die;


        $info = GoodsActivity::withoutField('create_time,update_time')
            ->find($id)
            ->toArray();

        $info['categoryId'] = [$info['categoryId']];
        $push_list = [];
        //推送时间
        if($info['push_status'] == 1){
            $push_list = GoodsActivityPush::field('industry_id,industry_level_id,push_time')
                ->where('activity_id', $id)->order('push_time','asc')->select()->toArray();
        }

        //关联专场
        $activity_list = GoodsActivityMany::field('has_activity_id,has_activity_title')
            ->where('activity_id', $id)->select()->toArray();

        $info['push_list'] = $push_list;
        $info['activity_list'] = $activity_list;
        return $info;
    }

    /**
     * 编辑活动
     *
     * @param $params
     * @return bool
     */
    public function edit($params)
    {
        //更新活动信息
        $GoodsActivity = GoodsActivity::find($params['id']);
        $GoodsActivity->name = $params['name'];
        $GoodsActivity->startDate = $params['startDate'];
        $GoodsActivity->endDate = $params['endDate'];
        $GoodsActivity->brand = $params['brand'];
        $GoodsActivity->brandLogoUrl = isset($params['brandLogoUrl']) ? $params['brandLogoUrl'] : '';
        $GoodsActivity->content = $params['content'];
        $GoodsActivity->push_type = isset($params['push_type']) ? $params['push_type'] : '';
        $GoodsActivity->push_status = isset($params['push_status']) ? $params['push_status'] : '';
        $GoodsActivity->is_index = isset($params['is_index']) ? $params['is_index'] : '';
//        $GoodsActivity->push_time = !empty($params['push_time']) ? $params['push_time'] : null;
        $GoodsActivity->supplier_id = isset($params['supplier_id']) ? $params['supplier_id'] : '';
        $GoodsActivity->category_id = $params['category_id'];
        $GoodsActivity->previewInformation = $params['previewInformation'];
        $GoodsActivity->title = $params['title']??'';

        //爱库存同步一下
        if(!empty($params['supplier_id']) && $GoodsActivity->is_new == 1){
            Goods::where('activity_id', $params['id'])->update(['supplier_id'=> $params['supplier_id']]);
        }

        //设置不同的推送时间
        if(!empty($params['push_list'])){
            $ids = GoodsActivityPush::where('activity_id', $params['id'])->column('id');
            GoodsActivityPush::destroy($ids, true);
            $insert_data = [];
            foreach ($params['push_list'] as $item){
                if(empty($item['push_time'])){
                    continue;
                }
                $industry_name = '';
                $industry_level_name = '所有';
                foreach ($item['industry_list'] as $industry){
                    if($industry['id'] == $item['industry_id']){
                        $industry_name = $industry['name'];
                        break;
                    }
                }
                foreach ($item['industry_level_list'] as $level){
                    if($level['id'] == $item['industry_level_id']){
                        $industry_level_name = $level['name'];
                        break;
                    }
                }
                $insert_data[] = [
                    'activity_id'=> $params['id'],
                    'industry_id'=> $item['industry_id'],
                    'industry_name'=> $industry_name,
                    'industry_level_id'=> $item['industry_level_id'],
                    'industry_level_name'=> $industry_level_name,
                    'push_time'=> $item['push_time'],
                    'create_time'=> time()
                ];
            }
            GoodsActivityPush::insertAll($insert_data);
        }

        //设置不同的推送时间
        if(!empty($params['activity_list'])){
            $ids = GoodsActivityMany::where('activity_id', $params['id'])->column('id');
            GoodsActivityMany::destroy($ids, true);
            $insert_data = [];
            foreach ($params['activity_list'] as $item){
                if(empty($item['has_activity_id'])){
                    continue;
                }
                $insert_data[] = [
                    'activity_id'=> $params['id'],
                    'has_activity_id'=> $item['has_activity_id'],
                    'has_activity_title'=> $item['has_activity_title'],
                    'create_time'=> time()
                ];
            }
            GoodsActivityMany::insertAll($insert_data);
        }

        return $GoodsActivity->save();
    }

    /**
     * 获取商家行业和层级
     *
     * @return array
     */
    public static function shopIndustry()
    {
        //获取商家行业
        $params = [];
        $res = self::reqPost('/shop/task/shopIndustry', $params);
        $list = [];
        if($res['code'] == 1){
            $list = $res['data']['list'];
        }

        return $list;
    }

}
