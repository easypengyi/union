(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd24d560"],{1610:function(t,e,r){"use strict";r("e733")},"192a":function(t,e,r){"use strict";r.d(e,"u",(function(){return s})),r.d(e,"q",(function(){return i})),r.d(e,"r",(function(){return o})),r.d(e,"t",(function(){return l})),r.d(e,"k",(function(){return n})),r.d(e,"p",(function(){return c})),r.d(e,"o",(function(){return d})),r.d(e,"s",(function(){return f})),r.d(e,"j",(function(){return u})),r.d(e,"n",(function(){return _})),r.d(e,"l",(function(){return m})),r.d(e,"m",(function(){return p})),r.d(e,"f",(function(){return v})),r.d(e,"e",(function(){return h})),r.d(e,"a",(function(){return b})),r.d(e,"g",(function(){return g})),r.d(e,"c",(function(){return y})),r.d(e,"h",(function(){return w})),r.d(e,"b",(function(){return D})),r.d(e,"i",(function(){return x})),r.d(e,"d",(function(){return C}));var a=r("f175"),s=function(){return a["a"].get("/order.order/otherLists")},i=function(t){return a["a"].get("/order.order/detail",{params:t})},o=function(t){return a["a"].get("/order.order/lists",{params:t})},l=function(t){return a["a"].post("/order.order/orderRemarks",t)},n=function(t){return a["a"].post("/order.order/cancel",t)},c=function(t){return a["a"].get("/order.order/deliveryInfo",{params:t})},d=function(t){return a["a"].post("/order.order/delivery",t)},f=function(t){return a["a"].get("/order.order/logistics",{params:t})},u=function(t){return a["a"].post("/order.order/addressEdit",t)},_=function(t){return a["a"].post("/order.order/confirm",t)},m=function(t){return a["a"].post("/order.order/changeExpressPrice",t)},p=function(t){return a["a"].post("/order.order/changePrice",t)},v=function(t){return a["a"].get("/after_sale.after_sale/lists",{params:t})},h=function(t){return a["a"].get("/after_sale.after_sale/detail",{params:t})},b=function(t){return a["a"].post("/after_sale.after_sale/agree",t)},g=function(t){return a["a"].post("/after_sale.after_sale/refuse",t)},y=function(t){return a["a"].post("/after_sale.after_sale/confirmGoods",t)},w=function(t){return a["a"].post("/after_sale.after_sale/refuseGoods",t)},D=function(t){return a["a"].post("/after_sale.after_sale/agreeRefund",t)},x=function(t){return a["a"].post("/after_sale.after_sale/refuseRefund",t)},C=function(t){return a["a"].post("/after_sale.after_sale/confirmRefund",t)}},"52d3":function(t,e,r){"use strict";r("c68d")},"5cf7":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"area-select"},[r("el-cascader",{style:{width:t.width},attrs:{options:t.options},model:{value:t.areaValue,callback:function(e){t.areaValue=e},expression:"areaValue"}})],1)},s=[],i=r("d4ec"),o=r("bee2"),l=r("262e"),n=r("2caf"),c=r("9ab4"),d=r("0463"),f=r("1b40"),u=function(t){Object(l["a"])(r,t);var e=Object(n["a"])(r);function r(){var t;return Object(i["a"])(this,r),t=e.apply(this,arguments),t.options=d["a"],t}return Object(o["a"])(r,[{key:"areaValue",get:function(){return[this.province,this.city,this.district]},set:function(t){this.$emit("update:province",t[0]),this.$emit("update:city",t[1]),this.$emit("update:district",t[2])}}]),r}(f["e"]);Object(c["a"])([Object(f["c"])()],u.prototype,"province",void 0),Object(c["a"])([Object(f["c"])()],u.prototype,"city",void 0),Object(c["a"])([Object(f["c"])()],u.prototype,"district",void 0),Object(c["a"])([Object(f["c"])({default:"380px"})],u.prototype,"width",void 0),u=Object(c["a"])([f["a"]],u);var _=u,m=_,p=r("2877"),v=Object(p["a"])(m,a,s,!1,null,null,null);e["a"]=v.exports},"995c":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("header",[r("div",{staticClass:"ls-card"},[r("el-page-header",{attrs:{content:"订单详情"},on:{back:function(e){return t.$router.go(-1)}}})],1),r("div",{staticClass:"flex m-t-24"},[r("div",{staticClass:"ls-card flex flex-wrap col-stretch",staticStyle:{height:"450px"}},[r("div",{staticStyle:{width:"100%"}},[r("div",{staticClass:"nr weight-500 m-b-20 title"},[t._v("订单信息")]),r("div",{staticClass:"flex col-top"},[r("el-form",{ref:"form",attrs:{model:t.orderData,"label-width":"120px",size:"small"}},[r("el-form-item",{attrs:{label:"订单状态"}},[t._v(" "+t._s(t.orderData.order_status_desc)+" ")]),r("el-form-item",{attrs:{label:"订单编号"}},[t._v(" "+t._s(t.orderData.sn)+" ")]),r("el-form-item",{attrs:{label:"订单类型"}},[t._v(" "+t._s(t.orderData.order_type_desc)+" ")]),r("el-form-item",{attrs:{label:"订单来源"}},[t._v(" "+t._s(t.orderData.order_terminal_desc)+" ")]),r("el-form-item",{attrs:{label:"下单时间"}},[t._v(" "+t._s(t.orderData.create_time)+" ")])],1),r("el-form",{ref:"form",staticStyle:{"margin-left":"20vw"},attrs:{model:t.orderData,"label-width":"120px",size:"small"}},[r("el-form-item",{attrs:{label:"支付状态"}},[t._v(" "+t._s(t.orderData.pay_status_desc)+" ")]),r("el-form-item",{attrs:{label:"支付方式"}},[t._v(" "+t._s(t.orderData.pay_way_desc)+" ")]),r("el-form-item",{attrs:{label:"支付时间"}},[t._v(" "+t._s(t.orderData.pay_time)+" ")]),r("el-form-item",{attrs:{label:"完成时间"}},[t._v(" "+t._s(t.orderData.confirm_take_time)+" ")]),r("el-form-item",{attrs:{label:"用户备注"}},[t._v(" "+t._s(t.orderData.user_remark)+" ")]),r("el-form-item",{attrs:{label:"商家备注"}},[t._v(" "+t._s(t.orderData.order_remarks)+" ")])],1)],1)]),r("div",{staticClass:"flex col-bottom",staticStyle:{width:"100%"}},[r("div",{staticClass:"border-top flex col-bottom row-left p-t-24",staticStyle:{width:"100%",height:"57px"}},[t.orderData.admin_order_btn.cancel_btn?r("ls-dialog",{staticClass:"inline m-l-24",attrs:{title:"取消订单",content:"确定取消订单("+t.orderData.sn+")吗?请谨慎操作"},on:{confirm:t.orderCancel}},[r("el-button",{staticStyle:{},attrs:{slot:"trigger",size:"small"},slot:"trigger"},[t._v("取消订单")])],1):t._e(),t.orderData.admin_order_btn.verification_btn?r("ls-dialog",{staticClass:"inline m-l-24",attrs:{title:"提货核销",content:"确定核销订单("+t.orderData.sn+")吗?请谨慎操作"},on:{confirm:t.selffetch}},[r("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("提货核销")])],1):t._e(),t.orderData.admin_order_btn.remark_btn?r("ls-dialog",{staticClass:"inline m-l-24",attrs:{title:"商家备注"},on:{confirm:t.postOrderRemarks}},[r("el-button",{staticStyle:{},attrs:{slot:"trigger",size:"small"},slot:"trigger"},[t._v("商家备注")]),r("div",[r("span",{staticClass:"m-b-10"},[t._v("商家备注")]),r("el-input",{staticClass:"m-t-10",attrs:{type:"textarea",rows:5,placeholder:"请输入内容"},model:{value:t.remarks,callback:function(e){t.remarks=e},expression:"remarks"}})],1)],1):t._e(),t.orderData.admin_order_btn.logistics_btn?r("order-logistics",{staticClass:"m-l-24",attrs:{flag:!1,id:t.id}},[r("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("物流查询")])],1):t._e(),t.orderData.admin_order_btn.deliver_btn?r("order-logistics",{staticClass:"m-l-24",attrs:{flag:!0,id:t.id},on:{update:t.getOrderDetail}},[r("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("发货")])],1):t._e(),t.orderData.admin_order_btn.confirm_btn?r("ls-dialog",{staticClass:"inline m-l-24",attrs:{title:"确认收货",content:"确定确认收货吗?请谨慎操作"},on:{confirm:t.orderConfirm}},[r("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("确认收货")])],1):t._e()],1)])])])]),r("section",[r("div",{staticClass:"ls-card m-t-24 flex flex-wrap col-stretch",staticStyle:{height:"auto"}},[r("div",{staticStyle:{width:"100%"}},[r("div",{staticClass:"nr weight-500 m-b-20 title"},[t._v("买家信息")]),r("el-form",{ref:"form",staticClass:"flex",attrs:{model:t.orderData,"label-width":"120px",size:"small"}},[r("el-form-item",{attrs:{label:"买家昵称"}},[r("div",{staticClass:"username pointer",on:{click:function(e){return t.toUserDetail()}}},[t._v(" "+t._s(t.orderData.nickname)+"（"+t._s(t.orderData.user_sn)+"）")])])],1)],1)]),r("div",{staticClass:"ls-card m-t-24 flex flex-wrap col-stretch",staticStyle:{height:"auto"}},[r("div",{staticStyle:{width:"100%"}},[r("div",{staticClass:"nr weight-500 m-b-20 title"},[t._v(t._s(1==t.orderData.delivery_type?"用户及收货信息":"提货信息"))]),r("div",{staticClass:"flex col-top"},[r("el-form",{ref:"form",attrs:{model:t.orderData,"label-width":"120px",size:"small"}},[r("el-form-item",{attrs:{label:"配送方式"}},[t._v(" "+t._s(t.orderData.delivery_type_desc)+" ")]),r("el-form-item",{attrs:{label:1==t.orderData.delivery_type?"收货人":"提货人"}},[t._v(" "+t._s(t.orderData.contact)+" ")]),r("el-form-item",{attrs:{label:"手机号码"}},[t._v(" "+t._s(t.orderData.mobile)+" ")]),r("el-form-item",{attrs:{label:1==t.orderData.delivery_type?"收货地址":"提货地址"}},[t._v(" "+t._s(t.orderData.delivery_address)+" ")])],1),r("el-form",{ref:"form",staticStyle:{"margin-left":"15vw"},attrs:{model:t.orderData,"label-width":"120px",size:"small"}},[1==t.orderData.delivery_type?r("el-form-item",{attrs:{label:"发货状态"}},[t._v(" "+t._s(t.orderData.express_status_desc)+" ")]):t._e(),1==t.orderData.delivery_type?r("el-form-item",{attrs:{label:"物流公司"}},[t._v(" "+t._s(t.orderData.express_name)+" ")]):t._e(),1==t.orderData.delivery_type?r("el-form-item",{attrs:{label:"快递单号"}},[t._v(" "+t._s(t.orderData.invoice_no)+" ")]):t._e(),1==t.orderData.delivery_type?r("el-form-item",{attrs:{label:"发货时间"}},[t._v(" "+t._s(t.orderData.express_time)+" ")]):t._e(),2==t.orderData.delivery_type?r("el-form-item",{attrs:{label:"核销状态"}},[t._v(" "+t._s(null==t.orderData.verification_time?"待核销":"已核销")+" ")]):t._e(),2==t.orderData.delivery_type?r("el-form-item",{attrs:{label:"核销码"}},[t._v(" "+t._s(t.orderData.pickup_code)+" ")]):t._e(),2==t.orderData.delivery_type?r("el-form-item",{attrs:{label:"提货时间"}},[t._v(" "+t._s(t.orderData.verification_time)+" ")]):t._e()],1)],1)]),t.orderData.admin_order_btn.address_btn?r("div",{staticClass:"flex col-bottom",staticStyle:{width:"100%"}},[r("div",{staticClass:"border-top flex col-bottom row-left p-t-24",staticStyle:{width:"100%",height:"57px"}},[r("ls-dialog",{staticClass:"inline m-l-24",attrs:{title:"收货地址修改",width:"35vw"},on:{confirm:function(e){return t.orderAddressSet()}}},[r("el-button",{staticStyle:{},attrs:{slot:"trigger",size:"small"},slot:"trigger"},[t._v("修改地址")]),r("div",{staticClass:"flex row-center"},[r("el-form",{ref:"address",attrs:{model:t.address,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"地区",prop:"return_district"}},[r("area-select",{attrs:{width:"280px",province:t.address.province_id,city:t.address.city_id,district:t.address.district_id},on:{"update:province":function(e){return t.$set(t.address,"province_id",e)},"update:city":function(e){return t.$set(t.address,"city_id",e)},"update:district":function(e){return t.$set(t.address,"district_id",e)}}})],1),r("el-form-item",{attrs:{label:"详细地址",prop:"return_address"}},[r("el-input",{staticClass:"ls-input",attrs:{"show-word-limit":""},model:{value:t.address.address,callback:function(e){t.$set(t.address,"address",e)},expression:"address.address"}})],1)],1)],1)],1)],1)]):t._e()]),r("div",{staticClass:"ls-card m-t-24 "},[r("div",{staticClass:"nr weight-500 m-b-20 title"},[t._v("商品信息")]),r("el-table",{ref:"paneTable",staticStyle:{width:"100%"},attrs:{data:t.orderData.order_goods,"header-cell-style":{background:"#f5f8ff",border:"none",color:"#666666",height:"60px",width:"100%"},size:"mini","summary-method":t.getSummaries,"show-summary":!0}},[r("el-table-column",{attrs:{label:"商品信息","min-width":"460"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",{staticClass:"flex m-t-10"},[r("el-image",{staticClass:"flex-none",staticStyle:{width:"58px",height:"58px"},attrs:{src:e.row.goods_image}}),r("div",{staticClass:"m-l-8 flex-1"},[r("div",{staticClass:"line-2"},[t._v(" "+t._s(e.row.goods_name)+" ")]),r("div",{staticClass:"xs muted"},[t._v(" "+t._s(e.row.spec_value_str)+" ")])])],1)]}}])}),r("el-table-column",{attrs:{prop:"goods_price",label:"商品价格","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v("¥"+t._s(e.row.goods_price))])]}}])}),r("el-table-column",{attrs:{prop:"goods_num",label:"购买数量","min-width":"180"}}),r("el-table-column",{attrs:{label:"商品总额",prop:"total_price","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v("¥"+t._s(e.row.total_price))])]}}])}),r("el-table-column",{attrs:{label:"优惠金额",prop:"discount_price","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v("¥"+t._s(e.row.discount_price))])]}}])}),r("el-table-column",{attrs:{label:"商品改价",prop:"change_price","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v("-¥"+t._s(e.row.change_price))]),t.orderData.admin_order_btn.price_btn?r("el-popover",{attrs:{placement:"top",title:"",width:"300",trigger:"hover"}},[r("i",{staticClass:"el-icon-edit primary m-l-30 lg",attrs:{slot:"reference"},slot:"reference"}),r("div",{staticClass:"flex"},[r("el-input",{staticClass:"m-r-24",staticStyle:{width:"188px"},attrs:{placeholder:"请输入商品价格"},model:{value:t.goods_price,callback:function(e){t.goods_price=e},expression:"goods_price"}}),r("el-button",{staticClass:"m-l-24",attrs:{size:"small",type:"primary"},on:{click:function(r){return t.orderChangeGoodsPrice(e.row.id)}}},[t._v("修改价格")])],1)]):t._e()]}}])}),r("el-table-column",{attrs:{label:"商品实付总额",prop:"total_pay_price","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ¥"+t._s(e.row.total_pay_price)+" ")]}}])})],1)],1),r("div",{staticClass:"ls-card m-t-24"},[r("div",{staticClass:"nr weight-500 m-b-20 title"},[t._v("金额明细")]),r("el-form",{ref:"form",attrs:{model:t.orderData,"label-width":"160px",size:"small"}},[r("el-form-item",{attrs:{label:"商品总额"}},[t._v(" ¥"+t._s(t.orderData.total_goods_price)+" ")]),r("el-form-item",{attrs:{label:"商品改价"}},[t._v(" -¥"+t._s(t.orderData.change_price||0)+" ")]),r("el-form-item",{attrs:{label:"优惠金额"}},[t._v(" -¥"+t._s(t.orderData.discount_amount)+" ")]),r("el-form-item",{attrs:{label:"商品运费"}},[t._v(" +¥"+t._s(t.orderData.express_price)+" "),t.orderData.admin_order_btn.express_btn?r("el-popover",{attrs:{placement:"top",title:"",width:"300",trigger:"hover"}},[r("i",{staticClass:"el-icon-edit primary m-l-30 lg",attrs:{slot:"reference"},slot:"reference"}),r("div",{staticClass:"flex"},[r("el-input",{staticClass:"m-r-24",staticStyle:{width:"188px"},attrs:{placeholder:"请输入运费"},model:{value:t.express_price,callback:function(e){t.express_price=e},expression:"express_price"}}),r("el-button",{staticClass:"m-l-24",attrs:{size:"small",type:"primary"},on:{click:t.orderChangeExpress}},[t._v(" 修改运费 ")])],1)]):t._e()],1),r("el-form-item",{attrs:{label:"商品实付金额"}},[t._v(" ¥"+t._s(t.orderData.order_amount)+" ")])],1)],1)]),r("footer",{staticClass:"flex col-top"},[r("div",{staticClass:"ls-card m-t-24"},[r("div",{staticClass:"nr weight-500 m-b-20 title"},[t._v("订单日志")]),r("el-table",{ref:"paneTable",staticStyle:{width:"100%"},attrs:{data:t.orderData.order_log,size:"mini"}},[r("el-table-column",{attrs:{label:"操作人",prop:"operator",width:"155"}}),r("el-table-column",{attrs:{prop:"channel_desc",label:"操作事件","min-width":"220"}}),r("el-table-column",{attrs:{prop:"create_time",label:"操作时间","min-width":"180"}})],1)],1)])])},s=[],i=r("5530"),o=r("d4ec"),l=r("bee2"),n=r("262e"),c=r("2caf"),d=(r("159b"),r("d81d"),r("a9e3"),r("9ab4")),f=r("1b40"),u=r("0a6d"),_=r("5cf7"),m=r("ffae"),p=r("192a"),v=r("ce09"),h=function(t){Object(n["a"])(r,t);var e=Object(c["a"])(r);function r(){var t;return Object(o["a"])(this,r),t=e.apply(this,arguments),t.id=0,t.orderData={admin_order_btn:{remark_btn:1,cancel_btn:0,confirm_btn:0,logistics_btn:0,refund_btn:0,address_btn:1,price_btn:1}},t.address={province_id:"",city_id:"",district_id:"",address:""},t.remarks="",t.express_price="",t.goods_price="",t}return Object(l["a"])(r,[{key:"getOrderDetail",value:function(){var t=this;Object(p["q"])({id:this.id}).then((function(e){t.orderData=e}))}},{key:"orderCancel",value:function(){var t=this;Object(p["k"])({id:this.id}).then((function(e){t.getOrderDetail()}))}},{key:"selffetch",value:function(){var t=this;Object(v["h"])({id:this.id}).then((function(){t.getOrderDetail()}))}},{key:"orderAddressSet",value:function(){var t=this;Object(p["j"])(Object(i["a"])({id:this.id},this.address)).then((function(e){t.getOrderDetail()}))}},{key:"orderConfirm",value:function(){var t=this;Object(p["n"])({id:this.id}).then((function(e){t.getOrderDetail()}))}},{key:"postOrderRemarks",value:function(){var t=this;Object(p["t"])({id:[this.id],order_remarks:this.remarks}).then((function(e){t.getOrderDetail()}))}},{key:"orderChangeGoodsPrice",value:function(t){var e=this;if(""==this.goods_price)return this.$message.error("请输入价格");Object(p["m"])({order_goods_id:t,change_price:this.goods_price}).then((function(t){e.getOrderDetail(),e.goods_price=""}))}},{key:"orderChangeExpress",value:function(){var t=this;if(""==this.express_price)return this.$message.error("请输入运费！");Object(p["l"])({id:this.id,express_price:this.express_price}).then((function(e){t.getOrderDetail()}))}},{key:"getSummaries",value:function(t){var e=this,r=t.columns,a=t.data,s=[];return r.forEach((function(t,r){if(0!==r){var i=a.map((function(e){return Number(e[t.property])}));if(!i.every((function(t){return isNaN(t)}))){if(1==r)return;s[r]=i.reduce((function(t,e){var r=Number(e);return isNaN(r)?t:t+e}),0),2!==r&&(s[r]="¥"+s[r]),5==r&&(s[r]="-¥"+s[r]),6==r&&(s[r]=e.orderData.total_goods_pay_price)}}else s[0]="总价"})),s}},{key:"toUserDetail",value:function(){this.$router.push({path:"/user/user_details",query:{id:this.orderData.user_id}})}},{key:"created",value:function(){this.id=this.$route.query.id,this.id&&this.getOrderDetail()}}]),r}(f["e"]);h=Object(d["a"])([Object(f["a"])({components:{LsDialog:u["a"],AreaSelect:_["a"],OrderLogistics:m["a"]}})],h);var b=h,g=b,y=(r("52d3"),r("2877")),w=Object(y["a"])(g,a,s,!1,null,"fe87dace",null);e["default"]=w.exports},c68d:function(t,e,r){},ce09:function(t,e,r){"use strict";r.d(e,"f",(function(){return s})),r.d(e,"b",(function(){return i})),r.d(e,"d",(function(){return o})),r.d(e,"e",(function(){return l})),r.d(e,"g",(function(){return n})),r.d(e,"c",(function(){return c})),r.d(e,"a",(function(){return d})),r.d(e,"o",(function(){return f})),r.d(e,"k",(function(){return u})),r.d(e,"m",(function(){return _})),r.d(e,"n",(function(){return m})),r.d(e,"p",(function(){return p})),r.d(e,"l",(function(){return v})),r.d(e,"h",(function(){return h})),r.d(e,"i",(function(){return b})),r.d(e,"j",(function(){return g}));var a=r("f175"),s=function(t){return a["a"].get("/selffetch_shop.selffetch_shop/lists",{params:t})},i=function(t){return a["a"].post("/selffetch_shop.selffetch_shop/add",t)},o=function(t){return a["a"].get("/selffetch_shop.selffetch_shop/detail",{params:t})},l=function(t){return a["a"].post("/selffetch_shop.selffetch_shop/edit",t)},n=function(t){return a["a"].post("/selffetch_shop.selffetch_shop/status",t)},c=function(t){return a["a"].post("/selffetch_shop.selffetch_shop/del",t)},d=function(t){return a["a"].get("/selffetch_shop.selffetch_shop/regionSearch",{params:t})},f=function(t){return a["a"].get("/selffetch_shop.selffetch_verifier/lists",{params:t})},u=function(t){return a["a"].post("/selffetch_shop.selffetch_verifier/add",t)},_=function(t){return a["a"].get("/selffetch_shop.selffetch_verifier/detail",{params:t})},m=function(t){return a["a"].post("/selffetch_shop.selffetch_verifier/edit",t)},p=function(t){return a["a"].post("/selffetch_shop.selffetch_verifier/status",t)},v=function(t){return a["a"].post("/selffetch_shop.selffetch_verifier/del",t)},h=function(t){return a["a"].post("/selffetch_shop.verification/verification",t)},b=function(t){return a["a"].get("selffetch_shop.verification/lists",{params:t})},g=function(t){return a["a"].get("selffetch_shop.verification/verificationQuery",{params:t})}},d81d:function(t,e,r){"use strict";var a=r("23e7"),s=r("b727").map,i=r("1dde"),o=i("map");a({target:"Array",proto:!0,forced:!o},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},e733:function(t,e,r){},ffae:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"ls-dialog__trigger",on:{click:t.onTrigger}},[t._t("trigger")],2),r("el-dialog",{attrs:{"coustom-class":"ls-dialog__content",title:1==t.flag?"发货":"物流查询",visible:t.visible,width:"70vw",top:t.top,"modal-append-to-body":!1,center:"","before-close":t.close,"close-on-click-modal":!1}},[r("div",{directives:[{name:"loading",rawName:"v-loading",value:0==t.orderData.length,expression:"orderData.length == 0"}],staticStyle:{height:"75vh","overflow-x":"hidden"}},[r("div",[r("div",{staticClass:"nr weight-500 m-b-20"},[t._v("商品信息")]),r("el-table",{ref:"paneTable",staticStyle:{width:"100%"},attrs:{data:t.orderData.order_goods,size:"mini","summary-method":t.getSummaries,"show-summary":!0}},[r("el-table-column",{attrs:{label:"序号",prop:"id",width:"75"}}),r("el-table-column",{attrs:{label:"商品信息","min-width":"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",{staticClass:"flex m-t-10"},[r("el-image",{staticClass:"flex-none",staticStyle:{width:"58px",height:"58px"},attrs:{src:e.row.goods_image}}),r("div",{staticClass:"m-l-8 flex-1"},[r("div",{staticClass:"line-2"},[t._v(" "+t._s(e.row.goods_name)+" ")])])],1)]}}])}),r("el-table-column",{attrs:{label:"","min-width":"150"}}),r("el-table-column",{attrs:{prop:"spec_value_str",label:"商品规格","min-width":"150"}}),r("el-table-column",{attrs:{prop:"goods_price",label:"商品价格","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ¥"+t._s(e.row.goods_price)+" ")]}}])}),r("el-table-column",{attrs:{prop:"goods_num",label:"购买数量","min-width":"120"}}),r("el-table-column",{attrs:{label:"优惠金额",prop:"discount_price","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ¥"+t._s(e.row.discount_price)+" ")]}}])}),r("el-table-column",{attrs:{label:"商品实付总额",prop:"total_pay_price","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ¥"+t._s(e.row.total_pay_price)+" ")]}}])})],1)],1),1==t.flag?r("div",{staticClass:"m-t-30"},[r("div",{staticClass:"nr weight-500 m-b-20"},[t._v("收货信息")]),r("div",{staticClass:"flex"},[r("div",{staticClass:"m-r-24"},[t._v("收货人： "+t._s(t.orderData.contact))]),r("div",{staticClass:"m-r-24"},[t._v("收货人手机号码： "+t._s(t.orderData.mobile))]),r("div",{staticClass:"m-r-24"},[t._v("收货人地址： "+t._s(t.orderData.delivery_address))])])]):t._e(),1==t.flag?r("div",{staticClass:"m-t-30"},[r("div",{staticClass:"nr weight-500 m-b-20"},[t._v("物流配送")]),r("div",{staticClass:"flex"},[r("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"配送方式"}},[r("el-radio",{attrs:{label:1},model:{value:t.form.send_type,callback:function(e){t.$set(t.form,"send_type",e)},expression:"form.send_type"}},[t._v("需要物流")]),r("el-radio",{attrs:{label:2},model:{value:t.form.send_type,callback:function(e){t.$set(t.form,"send_type",e)},expression:"form.send_type"}},[t._v("无需物流")])],1),1==t.form.send_type?r("el-form-item",{attrs:{label:"物流公司"}},[r("el-input",{staticStyle:{width:"530px"},attrs:{placeholder:"请输入快递单号"},model:{value:t.form.invoice_no,callback:function(e){t.$set(t.form,"invoice_no",e)},expression:"form.invoice_no"}},[r("template",{slot:"prepend"},[r("div",[r("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:t.form.express_id,callback:function(e){t.$set(t.form,"express_id",e)},expression:"form.express_id"}},t._l(t.orderData.express,(function(t,e){return r("el-option",{key:e,attrs:{label:t.name,value:t.id}})})),1)],1)])],2)],1):t._e(),r("el-form-item",{attrs:{label:"发货备注"}},[r("el-input",{staticClass:"m-t-10",staticStyle:{width:"530px"},attrs:{type:"textarea",rows:7,placeholder:"请输入内容"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1)],1)],1)]):t._e(),0==t.flag?r("div",{staticClass:"m-t-30"},[r("div",{staticClass:"nr weight-500 m-b-20"},[t._v("物流信息")]),r("div",{staticClass:"flex"},[r("div",{staticClass:"m-r-24"},[t._v("发货时间： "+t._s(t.orderData.express_time))]),r("div",{staticClass:"m-r-24"},[t._v("物流公司： "+t._s(t.orderData.express_name||"无"))]),r("div",{staticClass:"m-r-24"},[t._v("物流单号 "+t._s(t.orderData.invoice_no||"无"))])])]):t._e(),0==t.flag?r("div",{staticClass:"m-t-30"},[r("div",{staticClass:"nr weight-500 m-b-20"},[t._v("物流轨迹")]),1==t.orderData.send_type?r("div",[r("el-table",{ref:"paneTable",staticStyle:{width:"100%"},attrs:{data:t.orderData.traces,size:"mini"}},[r("el-table-column",{attrs:{label:"日期",prop:"0","min-width":"205"}}),r("el-table-column",{attrs:{label:"轨迹",prop:"1","min-width":"405"}})],1)],1):r("div",{staticClass:"nr weight-500 m-t-60 flex row-center"},[t._v(" 无需物流 ")])]):t._e()]),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(e){return t.handleEvent("cancel")}}},[t._v("取消")]),1==t.flag?r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.handleEvent("confirm")}}},[t._v("发货")]):r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.handleEvent("cancel")}}},[t._v("确认")])],1)])],1)},s=[],i=r("5530"),o=r("d4ec"),l=r("bee2"),n=r("262e"),c=r("2caf"),d=(r("159b"),r("d81d"),r("a9e3"),r("9ab4")),f=r("1b40"),u=r("192a"),_=function(t){Object(n["a"])(r,t);var e=Object(c["a"])(r);function r(){var t;return Object(o["a"])(this,r),t=e.apply(this,arguments),t.visible=!1,t.fullscreenLoading=!1,t.orderData={traces:{}},t.form={send_type:1,express_id:"",invoice_no:"",remark:""},t}return Object(l["a"])(r,[{key:"getOrderDeliveryInfo",value:function(){var t=this;Object(u["p"])({id:this.id}).then((function(e){t.orderData=e,t.fullscreenLoading=!1}))}},{key:"getOrderLogistics",value:function(){var t=this;Object(u["s"])({id:this.id}).then((function(e){t.orderData=e,t.fullscreenLoading=!1}))}},{key:"orderDelivery",value:function(){var t=this;Object(u["o"])(Object(i["a"])({id:this.id},this.form)).then((function(e){t.$emit("update",""),t.getOrderLogistics()}))}},{key:"getSummaries",value:function(t){var e=t.columns,r=t.data,a=[];return e.forEach((function(t,e){if(0!==e){var s=r.map((function(e){return Number(e[t.property])}));if(!s.every((function(t){return isNaN(t)}))){if(4==e)return;a[e]=s.reduce((function(t,e){var r=Number(e);return isNaN(r)?t:t+e}),0),5!==e&&3!==e&&(a[e]="¥"+a[e])}}else a[2]="总价"})),a}},{key:"handleEvent",value:function(t){if("cancel"===t&&this.close(),"confirm"===t){if(this.flag&&1==this.form.send_type){if(""==this.form.express_id)return this.$message.error("请选择快递公司");if(""==this.form.invoice_no)return this.$message.error("请填写快递单号")}this.orderDelivery(),this.close()}}},{key:"onTrigger",value:function(){this.fullscreenLoading=!0,1==this.flag?this.getOrderDeliveryInfo():this.getOrderLogistics(),console.log("打开弹窗再请求"),this.visible=!0}},{key:"close",value:function(){this.visible=!1}}]),r}(f["e"]);Object(d["a"])([Object(f["c"])({default:"5vh"})],_.prototype,"top",void 0),Object(d["a"])([Object(f["c"])({default:"0"})],_.prototype,"id",void 0),Object(d["a"])([Object(f["c"])({default:!0})],_.prototype,"flag",void 0),Object(d["a"])([Object(f["c"])({default:""})],_.prototype,"isShow",void 0),_=Object(d["a"])([f["a"]],_);var m=_,p=m,v=(r("1610"),r("2877")),h=Object(v["a"])(p,a,s,!1,null,"46b98320",null);e["a"]=h.exports}}]);
//# sourceMappingURL=chunk-cd24d560.31a1f94b.js.map