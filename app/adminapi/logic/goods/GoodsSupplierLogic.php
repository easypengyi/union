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
use app\common\model\GoodsSupplier;
use app\common\service\FileService;

class GoodsSupplierLogic
{
    /**
     * @notes 添加供应商
     * @param $params
     * @return bool
     * @author ljj
     * @date 2021/7/17 11:46
     */
    public function add($params)
    {
        $goods_supplier = new GoodsSupplier;
        $goods_supplier->code = $params['code'];
        $goods_supplier->name = $params['name'];
        $goods_supplier->supplier_category_id = $params['supplier_category_id'];
        $goods_supplier->contact = $params['contact'] ?? '';
        $goods_supplier->mobile = $params['mobile'] ?? '';
        $goods_supplier->landline = $params['landline'] ?? '';
        $goods_supplier->email = $params['email'] ?? '';
        $goods_supplier->province_id = $params['province_id'] ?? '';
        $goods_supplier->city_id = $params['city_id'] ?? '';
        $goods_supplier->district_id = $params['district_id'] ?? '';
        $goods_supplier->address = $params['address'] ?? '';
        $goods_supplier->bank_account = $params['bank_account'] ?? '';
        $goods_supplier->bank = $params['bank'] ?? '';
        $goods_supplier->cardholder_name = $params['cardholder_name'] ?? '';
        $goods_supplier->tax_id = $params['tax_id'] ?? '';
        $goods_supplier->sort = (isset($params['sort']) && !empty($params['sort'])) ? $params['sort'] : DefaultEnum::SORT;
        $goods_supplier->store_name = $params['store_name'] ?? "";
        $goods_supplier->business_license_img = trim($params['business_license_img']) ? FileService::setFileUrl($params['business_license_img']) : '';
        $goods_supplier->store_logo = trim($params['store_logo']) ? FileService::setFileUrl($params['store_logo']) : '';

        $goods_supplier->return_contact = isset($params['return_contact']) ? $params['return_contact'] : '';
        $goods_supplier->return_contact_mobile = isset($params['return_contact_mobile']) ? $params['return_contact_mobile'] : '';
        $goods_supplier->return_province = isset($params['return_province']) ? $params['return_province'] : '';
        $goods_supplier->return_city = isset($params['return_city']) ? $params['return_city'] : '';
        $goods_supplier->return_district = isset($params['return_district']) ? $params['return_district'] : '';
        $goods_supplier->return_address = isset($params['return_address']) ? $params['return_address'] : '';
        return $goods_supplier->save();
    }

    /**
     * @notes 删除供应商
     * @param $params
     * @return bool
     * @author ljj
     * @date 2021/7/17 3:14
     */
    public function del($params)
    {
        return GoodsSupplier::destroy($params['id']);
    }

    /**
     * @notes 编辑供应商
     * @param $params
     * @return bool
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author ljj
     * @date 2021/7/17 3:42 下午
     */
    public function edit($params)
    {
        $goods_supplier = GoodsSupplier::find($params['id']);
        $goods_supplier->code = $params['code'];
        $goods_supplier->name = $params['name'];
        $goods_supplier->supplier_category_id = $params['supplier_category_id'];
        $goods_supplier->contact = $params['contact'];
        $goods_supplier->mobile = $params['mobile'];
        $goods_supplier->landline = $params['landline'];
        $goods_supplier->email = $params['email'];
        $goods_supplier->province_id = $params['province_id'];
        $goods_supplier->city_id = $params['city_id'];
        $goods_supplier->district_id = $params['district_id'];
        $goods_supplier->address = $params['address'];
        $goods_supplier->bank_account = $params['bank_account'];
        $goods_supplier->bank = $params['bank'];
        $goods_supplier->cardholder_name = $params['cardholder_name'];
        $goods_supplier->tax_id = $params['tax_id'];
        $goods_supplier->sort = $params['sort'];
        $goods_supplier->store_name = $params['store_name'] ?? "";
        $goods_supplier->business_license_img = trim($params['business_license_img']) ? FileService::setFileUrl($params['business_license_img']) : '';
        $goods_supplier->store_logo = trim($params['store_logo']) ? FileService::setFileUrl($params['store_logo']) : '';

        $goods_supplier->return_contact = isset($params['return_contact']) ? $params['return_contact'] : '';
        $goods_supplier->return_contact_mobile = isset($params['return_contact_mobile']) ? $params['return_contact_mobile'] : '';
        $goods_supplier->return_province = isset($params['return_province']) ? $params['return_province'] : '';
        $goods_supplier->return_city = isset($params['return_city']) ? $params['return_city'] : '';
        $goods_supplier->return_district = isset($params['return_district']) ? $params['return_district'] : '';
        $goods_supplier->return_address = isset($params['return_address']) ? $params['return_address'] : '';

        return $goods_supplier->save();
    }

    /**
     * @notes 查看供应商详情
     * @param $params
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author ljj
     * @date 2021/7/19 4:59 下午
     */
    public function detail($params)
    {
        $info = GoodsSupplier::find($params['id'])->toArray();
        if(!empty($info)){
            $info['business_license_img'] = trim($info['business_license_img']) ? FileService::getFileUrl($info['business_license_img']) : '';
            $info['store_logo'] = trim($info['store_logo']) ? FileService::getFileUrl($info['store_logo']) : '';
            $info['return_province'] = intval($info['return_province']);
            $info['return_city'] = intval($info['return_city']);
            $info['return_district'] = intval($info['return_district']);
        }
        return $info;
    }
}
