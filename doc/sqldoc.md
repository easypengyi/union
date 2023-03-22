新增合作伙伴表：

CREATE TABLE `sylm_partnersy` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '用户id',
  `level_id` int(11) DEFAULT '0' COMMENT '分销会员等级id',
  `is_partnersy` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否分销会员 0-否 1-是',
  `is_freeze` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否冻结 0-否 1-是',
  `remark` varchar(255) NOT NULL DEFAULT '' COMMENT '备注',
  `partnersy_time` int(10) DEFAULT NULL COMMENT '成为合作伙伴会员时间',
  `mnp_qr_code` varchar(255) DEFAULT '' COMMENT '小程序分享二维码',
  `h5_qr_code` varchar(255) DEFAULT '' COMMENT 'h5分享二维码',
  `app_qr_code` varchar(255) DEFAULT '' COMMENT 'app分享二维码',
  `province_id` int(10) DEFAULT NULL COMMENT '省份id',
  `city_id` int(10) DEFAULT NULL COMMENT '城市id',
  `district_id` int(10) DEFAULT NULL COMMENT '区域id',
  `province_title` varchar(50) DEFAULT '' COMMENT '省份名称',
  `city_title` varchar(50) DEFAULT '' COMMENT '城市名称',
  `district_title` varchar(50) DEFAULT '' COMMENT '区域名称',
  `create_time` int(10) DEFAULT NULL COMMENT '创建时间',
  `update_time` int(10) DEFAULT NULL COMMENT '更新时间',
  `delete_time` int(10) DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='合作伙伴基础信息表';

CREATE TABLE `sylm_partnersy_distribution` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `partnersy_id` int(11) DEFAULT '0' COMMENT '合伙人表id',
  `partnersy_user_id` int(11) DEFAULT '0' COMMENT '合伙人用户id',
  `distribution_id` int(11) DEFAULT '0' COMMENT '分销商团长id',
  `distribution_user_id` int(11) DEFAULT '0' COMMENT '分销商用户id',
  `is_delete` tinyint(1) DEFAULT '0' COMMENT '是否删除（0-未删除 1-删除）',
  `delete_time` int(11) DEFAULT NULL COMMENT '删除时间',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `update_time` int(11) DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='团长跟合伙人关联表';

修改用户表 添加归属合伙人
`partnersy_user_id` int(11) NOT NULL DEFAULT '0' COMMENT '合伙人id',

合作伙伴配置
CREATE TABLE `sylm_partnersy_config` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `key` varchar(255) NOT NULL COMMENT '配置项名称',
  `value` text COMMENT '配置项值',
  `create_time` int(10) DEFAULT NULL COMMENT '创建时间',
  `update_time` int(10) DEFAULT NULL COMMENT '更新时间',
  `delete_time` int(10) DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='合作伙伴配置表';


表sylm_goods_supplier新增字段

`store_name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '' COMMENT '店铺名称',
  `business_license_img` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '' COMMENT '营业执照',
  `store_logo` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '' COMMENT '店铺logo',

CREATE TABLE `sylm_partnersy_order_goods` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL COMMENT '用户id',
  `order_goods_id` int unsigned NOT NULL COMMENT '子订单id',
  `goods_id` int NOT NULL COMMENT '商品id',
  `item_id` int NOT NULL COMMENT '商品SKU',
  `earnings` decimal(10,2) unsigned NOT NULL COMMENT '预估收入',
  `level_id` int NOT NULL COMMENT '分销会员等级',
  `level` int NOT NULL COMMENT '分销层级',
  `ratio` decimal(10,2) NOT NULL COMMENT '分佣比例',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态：1-未返佣金 2-已返佣金 3-佣金失效',
  `create_time` int DEFAULT NULL COMMENT '创建时间',
  `update_time` int DEFAULT NULL COMMENT '更新时间',
  `delete_time` int DEFAULT NULL COMMENT '删除时间',
  `settlement_time` int DEFAULT NULL COMMENT '结算时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='分销订单表';













