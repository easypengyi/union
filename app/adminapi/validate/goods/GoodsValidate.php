<?php
// +----------------------------------------------------------------------
// | LikeShop有特色的全开源社交分销电商系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 商业用途务必购买系统授权，以免引起不必要的法律纠纷
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | 微信公众号：好象科技
// | 访问官网：http://www.likemarket.net
// | 访问社区：http://bbs.likemarket.net
// | 访问手册：http://doc.likemarket.net
// | 好象科技开发团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | Author: LikeShopTeam
// +----------------------------------------------------------------------
namespace app\adminapi\validate\goods;
use app\common\{logic\GoodsActivityLogic,
    model\Goods,
    model\Freight,
    enum\GoodsEnum,
    model\GoodsBrand,
    model\GoodsCategory,
    model\GoodsSupplier,
    validate\BaseValidate};

/**
 * 商品验证器
 * Class GoodsValidate
 * @package app\adminapi\validate\goods
 */
class GoodsValidate extends BaseValidate
{

    protected $regex = ['money'=>'/^[0-9]+(.[0-9]{1,2})?$/'];
    protected $rule = [
        'ids'                   => 'require|array',
        'id'                    => 'require|checkGoods',
        'name'                  => 'require|max:64|unique:'.Goods::class.',name',
        'code'                  => 'require|max:32|unique:'.Goods::class.',code',
        'category_id'           => 'require|array|checkCategory',
        'goods_image'           => 'require|array|max:5',
        'video_source'          => 'in:1,2',
        'brand_id'              => 'checkBrand',
        'supplier_id'           => 'checkSupplier',
        'express_type'          => 'require|in:1,2,3',
        'express_money'         => 'requireIf:express_type,2|regex:money',
        'express_template_id'   => 'requireIf:express_type,3|checkTemplateId',
        'spec_type'             => 'require|in:'.GoodsEnum::SEPC_TYPE_SIGNLE.','.GoodsEnum::SEPC_TYPE_MORE,
        'is_express'            => 'require|in:0,1',
        'is_selffetch'          => 'require|in:0,1|checkDelivery',
        'stock_warning'         => 'number',
        'virtual_sales_num'     => 'number'
    ];

    protected $message = [
        'ids.require'                   => '请选择商品',
        'ids.array'                     => '参数格式错误',
        'id.require'                    => '请选择商品',
        'name.require'                  => '请选择商品名称',
        'name.max'                      => '商品名称不可以超过64个字符',
        'name.unique'                   => '商品名称已存在',
        'code.require'                  => '请输入商品编码',
        'code.max'                      => '商品编码不可以超过32个字符',
        'code.unique'                   => '商品编码已存在',
        'goods_image.require'           => '请上传商品轮播图',
        'goods_image.array'             => '商品轮播图信息错误',
        'goods_image.max'               => '商品轮播图不能超过5张',
        'express_type.require'          => '请选择配送设置',
        'express_money.requireIf'       => '请输入运费',
        'express_money.regex'           => '运费必须小于零，且保留两位小数',
        'express_template_id.requireIf' => '请选择运费模板',
        'spec_type.require'             => '请选择规格',
        'spec_type.in'                  => '商品规格类型错误',
        'is_express.require'            => '请选择物流',
        'is_express.in'                 => '物流支持数据错误',
        'is_selffetch.require'          => '请选择物流',
        'is_selffetch.in'               => '物流支持数据错误',
        'stock_warning.number'          => '库存预警只能输入正整数字',
        'virtual_sales_num.number'      => '虚拟销量只能输入正整数字',
    ];

    //商品添加验证
    public function sceneAdd()
    {
        return $this->remove(['id'=>'require','ids'=>'require|array']);
    }

    //商品编辑验证
    public function sceneEdit(){
        return $this->remove(['ids'=>'require|array'])->append(['id'=>'checkAcitvity']);
    }

    //商品详情验证
    public function sceneDetail(){
        return $this->only(['id']);
    }

    //商品状态验证
    public function sceneStatus(){
        return $this->only(['ids'])->append(['ids'=>'checkAcitvity']);
    }

    //商品排序验证
    public function sceneSort(){
        return $this->only(['id'=>'require']);
    }

    //重命名
    public function sceneRename(){
        return $this->only(['id'=>'require','name']);
    }
    //删除商品
    public function sceneDel(){
        return $this->only(['ids'])->append(['ids'=>'checkAcitvity']);
    }


    public function checkGoods($value, $rule, $data){
        $goods = Goods::find($value);
        if(empty($goods)){
            return '商品已不存在';
        }
        return true;
    }
    // todo 编辑、删除时需要考虑商品的营销活动等问题
    public function checkAcitvity($value,$rule,$data){

        //商品下架需要验证是否在活动中
        if('status' == $this->currentScene && 1 == $data['status'] ){
            return true;
        };
        
        $activity_list = GoodsActivityLogic::activityInfo($value);
        if($activity_list){
            return '商品正在参加活动中，不允许修改';
        }
        return true;
    }

    //验证品牌
    public function checkBrand($value,$rule,$data)
    {
        if (empty($value)) {
            return true;
        }
        if (!(GoodsBrand::find($value))) {
            return '商品品牌不存在';
        }
        return true;
    }

    //验证供应商
    public function checkSupplier($value,$rule,$data)
    {
        if (empty($value)) {
            return true;
        }
        if (!(GoodsSupplier::find($value))) {
            return '供应商不存在';
        }
        return true;

    }

    //验证分类
    public function checkCategory($value,$rule,$data){
        $category_ids = GoodsCategory::where(['id'=>$value])->column('id');

        //提交的分类和找到的分类数量不一致
        if(count($value) != count($category_ids)){
            return '分类信息错误，请刷新分类';
        }
        return true;
    }



    /**
     * @notes 检查运费模版是否存在
     * @param $value
     * @param $rule
     * @param $data
     * @return bool|string
     * @author ljj
     * @date 2021/8/2 5:54 下午
     */
    public function checkTemplateId($value,$rule,$data)
    {
        if ($data['express_type'] == 3) {
            $result = Freight::where('id',$value)->findOrEmpty();
            if ($result->isEmpty()) {
                return '运费模版不存在';
            }
        }
        return true;
    }


    public function checkDelivery($value,$rule,$data)
    {
        if(empty($value) && empty($data['is_express'])){
            return '至少选择一个物流支持';
        }
        return true;


    }

    public function checkAkcGoods($value,$rule,$data){

        $goods = Goods::where(['code'=>$value])->column('code');
        if(!empty($goods)){
            return false;
        }
        return true;
    }

    public function updateAkcGoods($value,$rule,$data){

        $goods = new Goods;
        $res =$goods::where(['code'=>$value])->update(['status'=>$rule['status']]);
    }



}