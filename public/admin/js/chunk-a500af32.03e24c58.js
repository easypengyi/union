(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a500af32"],{"192a":function(t,e,r){"use strict";r.d(e,"u",(function(){return a})),r.d(e,"q",(function(){return i})),r.d(e,"r",(function(){return l})),r.d(e,"t",(function(){return o})),r.d(e,"k",(function(){return d})),r.d(e,"p",(function(){return n})),r.d(e,"o",(function(){return c})),r.d(e,"s",(function(){return f})),r.d(e,"j",(function(){return _})),r.d(e,"n",(function(){return m})),r.d(e,"l",(function(){return p})),r.d(e,"m",(function(){return u})),r.d(e,"f",(function(){return h})),r.d(e,"e",(function(){return v})),r.d(e,"a",(function(){return b})),r.d(e,"g",(function(){return g})),r.d(e,"c",(function(){return y})),r.d(e,"h",(function(){return w})),r.d(e,"b",(function(){return x})),r.d(e,"i",(function(){return D})),r.d(e,"d",(function(){return C}));var s=r("f175");const a=()=>s["a"].get("/order.order/otherLists"),i=t=>s["a"].get("/order.order/detail",{params:t}),l=t=>s["a"].get("/order.order/lists",{params:t}),o=t=>s["a"].post("/order.order/orderRemarks",t),d=t=>s["a"].post("/order.order/cancel",t),n=t=>s["a"].get("/order.order/deliveryInfo",{params:t}),c=t=>s["a"].post("/order.order/delivery",t),f=t=>s["a"].get("/order.order/logistics",{params:t}),_=t=>s["a"].post("/order.order/addressEdit",t),m=t=>s["a"].post("/order.order/confirm",t),p=t=>s["a"].post("/order.order/changeExpressPrice",t),u=t=>s["a"].post("/order.order/changePrice",t),h=t=>s["a"].get("/after_sale.after_sale/lists",{params:t}),v=t=>s["a"].get("/after_sale.after_sale/detail",{params:t}),b=t=>s["a"].post("/after_sale.after_sale/agree",t),g=t=>s["a"].post("/after_sale.after_sale/refuse",t),y=t=>s["a"].post("/after_sale.after_sale/confirmGoods",t),w=t=>s["a"].post("/after_sale.after_sale/refuseGoods",t),x=t=>s["a"].post("/after_sale.after_sale/agreeRefund",t),D=t=>s["a"].post("/after_sale.after_sale/refuseRefund",t),C=t=>s["a"].post("/after_sale.after_sale/confirmRefund",t)},"2b7e":function(t,e,r){"use strict";r("a55f")},"383b":function(t,e,r){"use strict";r("407f")},"407f":function(t,e,r){},"5cf7":function(t,e,r){"use strict";var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"area-select"},[e("el-cascader",{style:{width:t.width},attrs:{options:t.options},model:{value:t.areaValue,callback:function(e){t.areaValue=e},expression:"areaValue"}})],1)},a=[],i=r("9ab4"),l=r("0463"),o=r("1b40");let d=class extends o["e"]{constructor(){super(...arguments),this.options=l["a"]}get areaValue(){return[this.province,this.city,this.district]}set areaValue(t){this.$emit("update:province",t[0]),this.$emit("update:city",t[1]),this.$emit("update:district",t[2])}};Object(i["a"])([Object(o["c"])()],d.prototype,"province",void 0),Object(i["a"])([Object(o["c"])()],d.prototype,"city",void 0),Object(i["a"])([Object(o["c"])()],d.prototype,"district",void 0),Object(i["a"])([Object(o["c"])({default:"380px"})],d.prototype,"width",void 0),d=Object(i["a"])([o["a"]],d);var n=d,c=n,f=r("2877"),_=Object(f["a"])(c,s,a,!1,null,null,null);e["a"]=_.exports},"995c":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("header",[e("div",{staticClass:"ls-card"},[e("el-page-header",{attrs:{content:"订单详情"},on:{back:function(e){return t.$router.go(-1)}}})],1),e("div",{staticClass:"flex m-t-24"},[e("div",{staticClass:"ls-card flex flex-wrap col-stretch",staticStyle:{height:"450px"}},[e("div",{staticStyle:{width:"100%"}},[e("div",{staticClass:"nr weight-500 m-b-20 title"},[t._v("订单信息")]),e("div",{staticClass:"flex col-top"},[e("el-form",{ref:"form",attrs:{model:t.orderData,"label-width":"120px",size:"small"}},[e("el-form-item",{attrs:{label:"订单状态"}},[t._v(" "+t._s(t.orderData.order_status_desc)+" ")]),e("el-form-item",{attrs:{label:"订单编号"}},[t._v(" "+t._s(t.orderData.sn)+" ")]),e("el-form-item",{attrs:{label:"订单类型"}},[t._v(" "+t._s(t.orderData.order_type_desc)+" ")]),e("el-form-item",{attrs:{label:"订单来源"}},[t._v(" "+t._s(t.orderData.order_terminal_desc)+" ")]),e("el-form-item",{attrs:{label:"下单时间"}},[t._v(" "+t._s(t.orderData.create_time)+" ")])],1),e("el-form",{ref:"form",staticStyle:{"margin-left":"20vw"},attrs:{model:t.orderData,"label-width":"120px",size:"small"}},[e("el-form-item",{attrs:{label:"支付状态"}},[t._v(" "+t._s(t.orderData.pay_status_desc)+" ")]),e("el-form-item",{attrs:{label:"支付方式"}},[t._v(" "+t._s(t.orderData.pay_way_desc)+" ")]),e("el-form-item",{attrs:{label:"支付时间"}},[t._v(" "+t._s(t.orderData.pay_time)+" ")]),e("el-form-item",{attrs:{label:"完成时间"}},[t._v(" "+t._s(t.orderData.confirm_take_time)+" ")]),e("el-form-item",{attrs:{label:"用户备注"}},[t._v(" "+t._s(t.orderData.user_remark)+" ")]),e("el-form-item",{attrs:{label:"商家备注"}},[t._v(" "+t._s(t.orderData.order_remarks)+" ")])],1)],1)]),e("div",{staticClass:"flex col-bottom",staticStyle:{width:"100%"}},[e("div",{staticClass:"border-top flex col-bottom row-left p-t-24",staticStyle:{width:"100%",height:"57px"}},[t.orderData.admin_order_btn.cancel_btn?e("ls-dialog",{staticClass:"inline m-l-24",attrs:{title:"取消订单",content:`确定取消订单(${t.orderData.sn})吗?请谨慎操作`},on:{confirm:t.orderCancel}},[e("el-button",{staticStyle:{},attrs:{slot:"trigger",size:"small"},slot:"trigger"},[t._v("取消订单")])],1):t._e(),t.orderData.admin_order_btn.verification_btn?e("ls-dialog",{staticClass:"inline m-l-24",attrs:{title:"提货核销",content:`确定核销订单(${t.orderData.sn})吗?请谨慎操作`},on:{confirm:t.selffetch}},[e("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("提货核销")])],1):t._e(),t.orderData.admin_order_btn.remark_btn?e("ls-dialog",{staticClass:"inline m-l-24",attrs:{title:"商家备注"},on:{confirm:t.postOrderRemarks}},[e("el-button",{staticStyle:{},attrs:{slot:"trigger",size:"small"},slot:"trigger"},[t._v("商家备注")]),e("div",[e("span",{staticClass:"m-b-10"},[t._v("商家备注")]),e("el-input",{staticClass:"m-t-10",attrs:{type:"textarea",rows:5,placeholder:"请输入内容"},model:{value:t.remarks,callback:function(e){t.remarks=e},expression:"remarks"}})],1)],1):t._e(),t.orderData.admin_order_btn.logistics_btn?e("order-logistics",{staticClass:"m-l-24",attrs:{flag:!1,id:t.id}},[e("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("物流查询")])],1):t._e(),t.orderData.admin_order_btn.deliver_btn?e("order-logistics",{staticClass:"m-l-24",attrs:{flag:!0,id:t.id},on:{update:t.getOrderDetail}},[e("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("发货")])],1):t._e(),t.orderData.admin_order_btn.confirm_btn?e("ls-dialog",{staticClass:"inline m-l-24",attrs:{title:"确认收货",content:"确定确认收货吗?请谨慎操作"},on:{confirm:t.orderConfirm}},[e("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("确认收货")])],1):t._e()],1)])])])]),e("section",[e("div",{staticClass:"ls-card m-t-24 flex flex-wrap col-stretch",staticStyle:{height:"auto"}},[e("div",{staticStyle:{width:"100%"}},[e("div",{staticClass:"nr weight-500 m-b-20 title"},[t._v("买家信息")]),e("el-form",{ref:"form",staticClass:"flex",attrs:{model:t.orderData,"label-width":"120px",size:"small"}},[e("el-form-item",{attrs:{label:"买家昵称"}},[e("div",{staticClass:"username pointer",on:{click:function(e){return t.toUserDetail()}}},[t._v(" "+t._s(t.orderData.nickname)+"（"+t._s(t.orderData.user_sn)+"）")])])],1)],1)]),e("div",{staticClass:"ls-card m-t-24 flex flex-wrap col-stretch",staticStyle:{height:"auto"}},[e("div",{staticStyle:{width:"100%"}},[e("div",{staticClass:"nr weight-500 m-b-20 title"},[t._v(t._s(1==t.orderData.delivery_type?"用户及收货信息":"提货信息"))]),e("div",{staticClass:"flex col-top"},[e("el-form",{ref:"form",attrs:{model:t.orderData,"label-width":"120px",size:"small"}},[e("el-form-item",{attrs:{label:"配送方式"}},[t._v(" "+t._s(t.orderData.delivery_type_desc)+" ")]),e("el-form-item",{attrs:{label:1==t.orderData.delivery_type?"收货人":"提货人"}},[t._v(" "+t._s(t.orderData.contact)+" ")]),e("el-form-item",{attrs:{label:"手机号码"}},[t._v(" "+t._s(t.orderData.mobile)+" ")]),e("el-form-item",{attrs:{label:1==t.orderData.delivery_type?"收货地址":"提货地址"}},[t._v(" "+t._s(t.orderData.delivery_address)+" ")])],1),e("el-form",{ref:"form",staticStyle:{"margin-left":"15vw"},attrs:{model:t.orderData,"label-width":"120px",size:"small"}},[1==t.orderData.delivery_type?e("el-form-item",{attrs:{label:"发货状态"}},[t._v(" "+t._s(t.orderData.express_status_desc)+" ")]):t._e(),1==t.orderData.delivery_type?e("el-form-item",{attrs:{label:"物流公司"}},[t._v(" "+t._s(t.orderData.express_name)+" ")]):t._e(),1==t.orderData.delivery_type?e("el-form-item",{attrs:{label:"快递单号"}},[t._v(" "+t._s(t.orderData.invoice_no)+" ")]):t._e(),1==t.orderData.delivery_type?e("el-form-item",{attrs:{label:"发货时间"}},[t._v(" "+t._s(t.orderData.express_time)+" ")]):t._e(),2==t.orderData.delivery_type?e("el-form-item",{attrs:{label:"核销状态"}},[t._v(" "+t._s(null==t.orderData.verification_time?"待核销":"已核销")+" ")]):t._e(),2==t.orderData.delivery_type?e("el-form-item",{attrs:{label:"核销码"}},[t._v(" "+t._s(t.orderData.pickup_code)+" ")]):t._e(),2==t.orderData.delivery_type?e("el-form-item",{attrs:{label:"提货时间"}},[t._v(" "+t._s(t.orderData.verification_time)+" ")]):t._e()],1)],1)]),t.orderData.admin_order_btn.address_btn?e("div",{staticClass:"flex col-bottom",staticStyle:{width:"100%"}},[e("div",{staticClass:"border-top flex col-bottom row-left p-t-24",staticStyle:{width:"100%",height:"57px"}},[e("ls-dialog",{staticClass:"inline m-l-24",attrs:{title:"收货地址修改",width:"35vw"},on:{confirm:function(e){return t.orderAddressSet()}}},[e("el-button",{staticStyle:{},attrs:{slot:"trigger",size:"small"},slot:"trigger"},[t._v("修改地址")]),e("div",{staticClass:"flex row-center"},[e("el-form",{ref:"address",attrs:{model:t.address,"label-width":"80px"}},[e("el-form-item",{attrs:{label:"地区",prop:"return_district"}},[e("area-select",{attrs:{width:"280px",province:t.address.province_id,city:t.address.city_id,district:t.address.district_id},on:{"update:province":function(e){return t.$set(t.address,"province_id",e)},"update:city":function(e){return t.$set(t.address,"city_id",e)},"update:district":function(e){return t.$set(t.address,"district_id",e)}}})],1),e("el-form-item",{attrs:{label:"详细地址",prop:"return_address"}},[e("el-input",{staticClass:"ls-input",attrs:{"show-word-limit":""},model:{value:t.address.address,callback:function(e){t.$set(t.address,"address",e)},expression:"address.address"}})],1)],1)],1)],1)],1)]):t._e()]),e("div",{staticClass:"ls-card m-t-24"},[e("div",{staticClass:"nr weight-500 m-b-20 title"},[t._v("商品信息")]),e("el-table",{ref:"paneTable",staticStyle:{width:"100%"},attrs:{data:t.orderData.order_goods,"header-cell-style":{background:"#f5f8ff",border:"none",color:"#666666",height:"60px",width:"100%"},size:"mini","summary-method":t.getSummaries,"show-summary":!0}},[e("el-table-column",{attrs:{label:"商品信息","min-width":"460"},scopedSlots:t._u([{key:"default",fn:function(r){return[e("div",{staticClass:"flex m-t-10"},[e("el-image",{staticClass:"flex-none",staticStyle:{width:"58px",height:"58px"},attrs:{src:r.row.goods_image}}),e("div",{staticClass:"m-l-8 flex-1"},[e("div",{staticClass:"line-2"},[t._v(" "+t._s(r.row.goods_name)+" ")]),e("div",{staticClass:"xs muted"},[t._v(" "+t._s(r.row.spec_value_str)+" ")])])],1)]}}])}),e("el-table-column",{attrs:{prop:"goods_price",label:"商品价格","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(r){return[e("span",[t._v("¥"+t._s(r.row.goods_price))])]}}])}),e("el-table-column",{attrs:{prop:"goods_num",label:"购买数量","min-width":"180"}}),e("el-table-column",{attrs:{label:"商品总额",prop:"total_price","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(r){return[e("span",[t._v("¥"+t._s(r.row.total_price))])]}}])}),e("el-table-column",{attrs:{label:"优惠金额",prop:"discount_price","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(r){return[e("span",[t._v("¥"+t._s(r.row.discount_price))])]}}])}),e("el-table-column",{attrs:{label:"商品改价",prop:"change_price","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(r){return[e("span",[t._v("-¥"+t._s(r.row.change_price))]),t.orderData.admin_order_btn.price_btn?e("el-popover",{attrs:{placement:"top",title:"",width:"300",trigger:"hover"}},[e("i",{staticClass:"el-icon-edit primary m-l-30 lg",attrs:{slot:"reference"},slot:"reference"}),e("div",{staticClass:"flex"},[e("el-input",{staticClass:"m-r-24",staticStyle:{width:"188px"},attrs:{placeholder:"请输入商品价格"},model:{value:t.goods_price,callback:function(e){t.goods_price=e},expression:"goods_price"}}),e("el-button",{staticClass:"m-l-24",attrs:{size:"small",type:"primary"},on:{click:function(e){return t.orderChangeGoodsPrice(r.row.id)}}},[t._v("修改价格")])],1)]):t._e()]}}])}),e("el-table-column",{attrs:{label:"商品实付总额",prop:"total_pay_price","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ¥"+t._s(e.row.total_pay_price)+" ")]}}])})],1)],1),e("div",{staticClass:"ls-card m-t-24"},[e("div",{staticClass:"nr weight-500 m-b-20 title"},[t._v("金额明细")]),e("el-form",{ref:"form",attrs:{model:t.orderData,"label-width":"160px",size:"small"}},[e("el-form-item",{attrs:{label:"商品总额"}},[t._v(" ¥"+t._s(t.orderData.total_goods_price)+" ")]),e("el-form-item",{attrs:{label:"商品改价"}},[t._v(" -¥"+t._s(t.orderData.change_price||0)+" ")]),e("el-form-item",{attrs:{label:"优惠金额"}},[t._v(" -¥"+t._s(t.orderData.discount_amount)+" ")]),e("el-form-item",{attrs:{label:"商品运费"}},[t._v(" +¥"+t._s(t.orderData.express_price)+" "),t.orderData.admin_order_btn.express_btn?e("el-popover",{attrs:{placement:"top",title:"",width:"300",trigger:"hover"}},[e("i",{staticClass:"el-icon-edit primary m-l-30 lg",attrs:{slot:"reference"},slot:"reference"}),e("div",{staticClass:"flex"},[e("el-input",{staticClass:"m-r-24",staticStyle:{width:"188px"},attrs:{placeholder:"请输入运费"},model:{value:t.express_price,callback:function(e){t.express_price=e},expression:"express_price"}}),e("el-button",{staticClass:"m-l-24",attrs:{size:"small",type:"primary"},on:{click:t.orderChangeExpress}},[t._v(" 修改运费 ")])],1)]):t._e()],1),e("el-form-item",{attrs:{label:"商品实付金额"}},[t._v(" ¥"+t._s(t.orderData.order_amount)+" ")])],1)],1)]),e("footer",{staticClass:"flex col-top"},[e("div",{staticClass:"ls-card m-t-24"},[e("div",{staticClass:"nr weight-500 m-b-20 title"},[t._v("订单日志")]),e("el-table",{ref:"paneTable",staticStyle:{width:"100%"},attrs:{data:t.orderData.order_log,size:"mini"}},[e("el-table-column",{attrs:{label:"操作人",prop:"operator",width:"155"}}),e("el-table-column",{attrs:{prop:"channel_desc",label:"操作事件","min-width":"220"}}),e("el-table-column",{attrs:{prop:"create_time",label:"操作时间","min-width":"180"}})],1)],1)])])},a=[],i=(r("13d5"),r("9ab4")),l=r("1b40"),o=r("0a6d"),d=r("5cf7"),n=r("ffae"),c=r("192a"),f=r("ce09");let _=class extends l["e"]{constructor(){super(...arguments),this.id=0,this.orderData={admin_order_btn:{remark_btn:1,cancel_btn:0,confirm_btn:0,logistics_btn:0,refund_btn:0,address_btn:1,price_btn:1}},this.address={province_id:"",city_id:"",district_id:"",address:""},this.remarks="",this.express_price="",this.goods_price=""}getOrderDetail(){Object(c["q"])({id:this.id}).then(t=>{this.orderData=t})}orderCancel(){Object(c["k"])({id:this.id}).then(t=>{this.getOrderDetail()})}selffetch(){Object(f["h"])({id:this.id}).then(()=>{this.getOrderDetail()})}orderAddressSet(){Object(c["j"])({id:this.id,...this.address}).then(t=>{this.getOrderDetail()})}orderConfirm(){Object(c["n"])({id:this.id}).then(t=>{this.getOrderDetail()})}postOrderRemarks(){Object(c["t"])({id:[this.id],order_remarks:this.remarks}).then(t=>{this.getOrderDetail()})}orderChangeGoodsPrice(t){if(""==this.goods_price)return this.$message.error("请输入价格");Object(c["m"])({order_goods_id:t,change_price:this.goods_price}).then(t=>{this.getOrderDetail(),this.goods_price=""})}orderChangeExpress(){if(""==this.express_price)return this.$message.error("请输入运费！");Object(c["l"])({id:this.id,express_price:this.express_price}).then(t=>{this.getOrderDetail()})}getSummaries(t){const{columns:e,data:r}=t,s=[];return e.forEach((t,e)=>{if(0===e)return void(s[0]="总价");const a=r.map(e=>Number(e[t.property]));if(!a.every(t=>isNaN(t))){if(1==e)return;s[e]=a.reduce((t,e)=>{const r=Number(e);return isNaN(r)?t:t+e},0),2!==e&&(s[e]="¥"+s[e]),5==e&&(s[e]="-¥"+s[e]),6==e&&(s[e]=this.orderData.total_goods_pay_price)}}),s}toUserDetail(){this.$router.push({path:"/user/user_details",query:{id:this.orderData.user_id}})}created(){this.id=this.$route.query.id,this.id&&this.getOrderDetail()}};_=Object(i["a"])([Object(l["a"])({components:{LsDialog:o["a"],AreaSelect:d["a"],OrderLogistics:n["a"]}})],_);var m=_,p=m,u=(r("383b"),r("2877")),h=Object(u["a"])(p,s,a,!1,null,"fe87dace",null);e["default"]=h.exports},a55f:function(t,e,r){},ce09:function(t,e,r){"use strict";r.d(e,"f",(function(){return a})),r.d(e,"b",(function(){return i})),r.d(e,"d",(function(){return l})),r.d(e,"e",(function(){return o})),r.d(e,"g",(function(){return d})),r.d(e,"c",(function(){return n})),r.d(e,"a",(function(){return c})),r.d(e,"o",(function(){return f})),r.d(e,"k",(function(){return _})),r.d(e,"m",(function(){return m})),r.d(e,"n",(function(){return p})),r.d(e,"p",(function(){return u})),r.d(e,"l",(function(){return h})),r.d(e,"h",(function(){return v})),r.d(e,"i",(function(){return b})),r.d(e,"j",(function(){return g}));var s=r("f175");const a=t=>s["a"].get("/selffetch_shop.selffetch_shop/lists",{params:t}),i=t=>s["a"].post("/selffetch_shop.selffetch_shop/add",t),l=t=>s["a"].get("/selffetch_shop.selffetch_shop/detail",{params:t}),o=t=>s["a"].post("/selffetch_shop.selffetch_shop/edit",t),d=t=>s["a"].post("/selffetch_shop.selffetch_shop/status",t),n=t=>s["a"].post("/selffetch_shop.selffetch_shop/del",t),c=t=>s["a"].get("/selffetch_shop.selffetch_shop/regionSearch",{params:t}),f=t=>s["a"].get("/selffetch_shop.selffetch_verifier/lists",{params:t}),_=t=>s["a"].post("/selffetch_shop.selffetch_verifier/add",t),m=t=>s["a"].get("/selffetch_shop.selffetch_verifier/detail",{params:t}),p=t=>s["a"].post("/selffetch_shop.selffetch_verifier/edit",t),u=t=>s["a"].post("/selffetch_shop.selffetch_verifier/status",t),h=t=>s["a"].post("/selffetch_shop.selffetch_verifier/del",t),v=t=>s["a"].post("/selffetch_shop.verification/verification",t),b=t=>s["a"].get("selffetch_shop.verification/lists",{params:t}),g=t=>s["a"].get("selffetch_shop.verification/verificationQuery",{params:t})},ffae:function(t,e,r){"use strict";var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"ls-dialog__trigger",on:{click:t.onTrigger}},[t._t("trigger")],2),e("el-dialog",{attrs:{"coustom-class":"ls-dialog__content",title:1==t.flag?"发货":"物流查询",visible:t.visible,width:"70vw",top:t.top,"modal-append-to-body":!1,center:"","before-close":t.close,"close-on-click-modal":!1}},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:0==t.orderData.length,expression:"orderData.length == 0"}],staticStyle:{height:"75vh","overflow-x":"hidden"}},[e("div",[e("div",{staticClass:"nr weight-500 m-b-20"},[t._v("商品信息")]),e("el-table",{ref:"paneTable",staticStyle:{width:"100%"},attrs:{data:t.orderData.order_goods,size:"mini","summary-method":t.getSummaries,"show-summary":!0}},[e("el-table-column",{attrs:{label:"序号",prop:"id",width:"75"}}),e("el-table-column",{attrs:{label:"商品信息","min-width":"300"},scopedSlots:t._u([{key:"default",fn:function(r){return[e("div",{staticClass:"flex m-t-10"},[e("el-image",{staticClass:"flex-none",staticStyle:{width:"58px",height:"58px"},attrs:{src:r.row.goods_image}}),e("div",{staticClass:"m-l-8 flex-1"},[e("div",{staticClass:"line-2"},[t._v(" "+t._s(r.row.goods_name)+" ")])])],1)]}}])}),e("el-table-column",{attrs:{label:"","min-width":"150"}}),e("el-table-column",{attrs:{prop:"spec_value_str",label:"商品规格","min-width":"150"}}),e("el-table-column",{attrs:{prop:"goods_price",label:"商品价格","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ¥"+t._s(e.row.goods_price)+" ")]}}])}),e("el-table-column",{attrs:{prop:"goods_num",label:"购买数量","min-width":"120"}}),e("el-table-column",{attrs:{label:"优惠金额",prop:"discount_price","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ¥"+t._s(e.row.discount_price)+" ")]}}])}),e("el-table-column",{attrs:{label:"商品实付总额",prop:"total_pay_price","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ¥"+t._s(e.row.total_pay_price)+" ")]}}])})],1)],1),1==t.flag?e("div",{staticClass:"m-t-30"},[e("div",{staticClass:"nr weight-500 m-b-20"},[t._v("收货信息")]),e("div",{staticClass:"flex"},[e("div",{staticClass:"m-r-24"},[t._v("收货人： "+t._s(t.orderData.contact))]),e("div",{staticClass:"m-r-24"},[t._v("收货人手机号码： "+t._s(t.orderData.mobile))]),e("div",{staticClass:"m-r-24"},[t._v("收货人地址： "+t._s(t.orderData.delivery_address))])])]):t._e(),1==t.flag?e("div",{staticClass:"m-t-30"},[e("div",{staticClass:"nr weight-500 m-b-20"},[t._v("物流配送")]),e("div",{staticClass:"flex"},[e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[e("el-form-item",{attrs:{label:"配送方式"}},[e("el-radio",{attrs:{label:1},model:{value:t.form.send_type,callback:function(e){t.$set(t.form,"send_type",e)},expression:"form.send_type"}},[t._v("需要物流")]),e("el-radio",{attrs:{label:2},model:{value:t.form.send_type,callback:function(e){t.$set(t.form,"send_type",e)},expression:"form.send_type"}},[t._v("无需物流")])],1),1==t.form.send_type?e("el-form-item",{attrs:{label:"物流公司"}},[e("el-input",{staticStyle:{width:"530px"},attrs:{placeholder:"请输入快递单号"},model:{value:t.form.invoice_no,callback:function(e){t.$set(t.form,"invoice_no",e)},expression:"form.invoice_no"}},[e("template",{slot:"prepend"},[e("div",[e("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:t.form.express_id,callback:function(e){t.$set(t.form,"express_id",e)},expression:"form.express_id"}},t._l(t.orderData.express,(function(t,r){return e("el-option",{key:r,attrs:{label:t.name,value:t.id}})})),1)],1)])],2)],1):t._e(),e("el-form-item",{attrs:{label:"发货备注"}},[e("el-input",{staticClass:"m-t-10",staticStyle:{width:"530px"},attrs:{type:"textarea",rows:7,placeholder:"请输入内容"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1)],1)],1)]):t._e(),0==t.flag?e("div",{staticClass:"m-t-30"},[e("div",{staticClass:"nr weight-500 m-b-20"},[t._v("物流信息")]),e("div",{staticClass:"flex"},[e("div",{staticClass:"m-r-24"},[t._v("发货时间： "+t._s(t.orderData.express_time))]),e("div",{staticClass:"m-r-24"},[t._v("物流公司： "+t._s(t.orderData.express_name||"无"))]),e("div",{staticClass:"m-r-24"},[t._v("物流单号 "+t._s(t.orderData.invoice_no||"无"))])])]):t._e(),0==t.flag?e("div",{staticClass:"m-t-30"},[e("div",{staticClass:"nr weight-500 m-b-20"},[t._v("物流轨迹")]),1==t.orderData.send_type?e("div",[e("el-table",{ref:"paneTable",staticStyle:{width:"100%"},attrs:{data:t.orderData.traces,size:"mini"}},[e("el-table-column",{attrs:{label:"日期",prop:"0","min-width":"205"}}),e("el-table-column",{attrs:{label:"轨迹",prop:"1","min-width":"405"}})],1)],1):e("div",{staticClass:"nr weight-500 m-t-60 flex row-center"},[t._v(" 无需物流 ")])]):t._e()]),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{size:"small"},on:{click:function(e){return t.handleEvent("cancel")}}},[t._v("取消")]),1==t.flag?e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.handleEvent("confirm")}}},[t._v("发货")]):e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.handleEvent("cancel")}}},[t._v("确认")])],1)])],1)},a=[],i=(r("13d5"),r("9ab4")),l=r("1b40"),o=r("192a");let d=class extends l["e"]{constructor(){super(...arguments),this.visible=!1,this.fullscreenLoading=!1,this.orderData={traces:{}},this.form={send_type:1,express_id:"",invoice_no:"",remark:""}}getOrderDeliveryInfo(){Object(o["p"])({id:this.id}).then(t=>{this.orderData=t,this.fullscreenLoading=!1})}getOrderLogistics(){Object(o["s"])({id:this.id}).then(t=>{this.orderData=t,this.fullscreenLoading=!1})}orderDelivery(){Object(o["o"])({id:this.id,...this.form}).then(t=>{this.$emit("update",""),this.getOrderLogistics()})}getSummaries(t){const{columns:e,data:r}=t,s=[];return e.forEach((t,e)=>{if(0===e)return void(s[2]="总价");const a=r.map(e=>Number(e[t.property]));if(!a.every(t=>isNaN(t))){if(4==e)return;s[e]=a.reduce((t,e)=>{const r=Number(e);return isNaN(r)?t:t+e},0),5!==e&&3!==e&&(s[e]="¥"+s[e])}}),s}handleEvent(t){if("cancel"===t&&this.close(),"confirm"===t){if(this.flag&&1==this.form.send_type){if(""==this.form.express_id)return this.$message.error("请选择快递公司");if(""==this.form.invoice_no)return this.$message.error("请填写快递单号")}this.orderDelivery(),this.close()}}onTrigger(){this.fullscreenLoading=!0,1==this.flag?this.getOrderDeliveryInfo():this.getOrderLogistics(),console.log("打开弹窗再请求"),this.visible=!0}close(){this.visible=!1}};Object(i["a"])([Object(l["c"])({default:"5vh"})],d.prototype,"top",void 0),Object(i["a"])([Object(l["c"])({default:"0"})],d.prototype,"id",void 0),Object(i["a"])([Object(l["c"])({default:!0})],d.prototype,"flag",void 0),Object(i["a"])([Object(l["c"])({default:""})],d.prototype,"isShow",void 0),d=Object(i["a"])([l["a"]],d);var n=d,c=n,f=(r("2b7e"),r("2877")),_=Object(f["a"])(c,s,a,!1,null,"46b98320",null);e["a"]=_.exports}}]);
//# sourceMappingURL=chunk-a500af32.03e24c58.js.map