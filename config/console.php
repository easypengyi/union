<?php
// +----------------------------------------------------------------------
// | 控制台配置
// +----------------------------------------------------------------------
return [
    // 指令定义
    'commands' => [
        // 分销结算
        'distribution_settlement' => 'app\common\command\DistributionSettlement',
        // 过期优惠券
        'coupon_end' => 'app\common\command\CouponEnd',
        // 拼团结束
        'team_end' => 'app\common\command\TeamEnd',
        // 订单自动确认收货
        'order_confirm' => 'app\common\command\OrderConfirm',
        // 订单自动关闭超时未付款订单
        'order_close' => 'app\common\command\OrderClose',
        // 售后退款查询
        'after_sale_refund' => 'app\common\command\AfterSaleRefund',
        // 结束过期的砍价活动
        'bargain_close' => 'app\common\command\BargainClose',
        // 结束过期的秒杀活动
        'seckill_end' => 'app\common\command\SeckillEnd',
        // 修改超级管理员密码
        'password' => 'app\common\command\Password',
        // 结束过期的幸运抽奖
        'lucky_draw_end' => 'app\common\command\LuckyDrawEnd',
        // 定时任务
        'crontab' => 'app\common\command\Crontab',

        // 爱库存定时器
        'akcapi' => 'app\common\command\AkcApi',
        // 自动设置爱库存商品分销佣金
        'set_distribution_goods' => 'app\common\command\SetDistributionGoods',
        // 自动设置爱库存商品分销佣金
        'partner_settlement' => 'app\common\command\PartnerSettlement',
    ],
];
