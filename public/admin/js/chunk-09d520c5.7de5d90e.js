(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09d520c5"],{"192a":function(t,e,r){"use strict";r.d(e,"u",(function(){return s})),r.d(e,"q",(function(){return i})),r.d(e,"r",(function(){return o})),r.d(e,"t",(function(){return l})),r.d(e,"k",(function(){return n})),r.d(e,"p",(function(){return d})),r.d(e,"o",(function(){return c})),r.d(e,"s",(function(){return _})),r.d(e,"j",(function(){return f})),r.d(e,"n",(function(){return u})),r.d(e,"l",(function(){return m})),r.d(e,"m",(function(){return p})),r.d(e,"f",(function(){return v})),r.d(e,"e",(function(){return h})),r.d(e,"a",(function(){return b})),r.d(e,"g",(function(){return g})),r.d(e,"c",(function(){return y})),r.d(e,"h",(function(){return w})),r.d(e,"b",(function(){return x})),r.d(e,"i",(function(){return C})),r.d(e,"d",(function(){return D}));var a=r("f175");const s=()=>a["a"].get("/order.order/otherLists"),i=t=>a["a"].get("/order.order/detail",{params:t}),o=t=>a["a"].get("/order.order/lists",{params:t}),l=t=>a["a"].post("/order.order/orderRemarks",t),n=t=>a["a"].post("/order.order/cancel",t),d=t=>a["a"].get("/order.order/deliveryInfo",{params:t}),c=t=>a["a"].post("/order.order/delivery",t),_=t=>a["a"].get("/order.order/logistics",{params:t}),f=t=>a["a"].post("/order.order/addressEdit",t),u=t=>a["a"].post("/order.order/confirm",t),m=t=>a["a"].post("/order.order/changeExpressPrice",t),p=t=>a["a"].post("/order.order/changePrice",t),v=t=>a["a"].get("/after_sale.after_sale/lists",{params:t}),h=t=>a["a"].get("/after_sale.after_sale/detail",{params:t}),b=t=>a["a"].post("/after_sale.after_sale/agree",t),g=t=>a["a"].post("/after_sale.after_sale/refuse",t),y=t=>a["a"].post("/after_sale.after_sale/confirmGoods",t),w=t=>a["a"].post("/after_sale.after_sale/refuseGoods",t),x=t=>a["a"].post("/after_sale.after_sale/agreeRefund",t),C=t=>a["a"].post("/after_sale.after_sale/refuseRefund",t),D=t=>a["a"].post("/after_sale.after_sale/confirmRefund",t)},2397:function(t,e,r){},"2b7e":function(t,e,r){"use strict";r("a55f")},"4ba2":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("header",[e("div",{staticClass:"ls-card"},[e("el-page-header",{attrs:{content:"售后详情"},on:{back:function(e){return t.$router.go(-1)}}})],1),e("div",{staticClass:"flex m-t-24"},[e("div",{staticClass:"ls-card flex flex-wrap col-stretch",staticStyle:{height:"320px"}},[e("div",{staticStyle:{width:"100%"}},[e("div",{staticClass:"nr weight-500 m-b-20 title"},[t._v("售后信息")]),e("div",{staticClass:"flex col-top"},[e("el-form",{ref:"form",attrs:{model:t.orderData,"label-width":"120px",size:"small"}},[e("el-form-item",{attrs:{label:"售后状态"}},[e("div",[t._v(" "+t._s(t.orderData.after_sale.status_desc)+" ")]),t.orderData.after_sale.refund_image?e("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{fit:t.fit,src:t.orderData.after_sale.refund_image}}):t._e()],1),e("el-form-item",{attrs:{label:"售后单号"}},[t._v(" "+t._s(t.orderData.after_sale.sn||"")+" ")]),e("el-form-item",{attrs:{label:"售后类型"}},[t._v(" "+t._s(t.orderData.after_sale.refund_type_desc)+" ")]),e("el-form-item",{attrs:{label:"售后方式"}},[t._v(" "+t._s(t.orderData.after_sale.refund_method_desc)+" ")]),e("el-form-item",{attrs:{label:"申请时间"}},[t._v(" "+t._s(t.orderData.after_sale.create_time)+" ")])],1),e("el-form",{ref:"form",staticStyle:{"margin-left":"15vw"},attrs:{model:t.orderData,"label-width":"120px",size:"small"}},[e("el-form-item",{attrs:{label:"订单编号"}},[e("span",{staticClass:"order pointer",on:{click:function(e){return t.toOrder(t.orderData.after_sale.order_id)}}},[t._v(t._s(t.orderData.order_info.sn||"")+" ")])]),e("el-form-item",{attrs:{label:"售后原因"}},[t._v(" "+t._s(t.orderData.after_sale.refund_reason)+" ")]),e("el-form-item",{attrs:{label:"售后凭证"}},t._l(t.orderData.after_sale.voucher,(function(r,a){return e("div",{key:a,staticClass:"inline m-r-10"},[e("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{src:r,fit:"fit"},on:{click:function(e){return t.reviews(r)}}})],1)})),0),e("el-form-item",{attrs:{label:"售后说明"}},[t._v(" "+t._s(t.orderData.after_sale.refund_remark||"-")+" ")])],1)],1)]),e("div",{staticClass:"flex col-bottom",staticStyle:{width:"100%"}},[e("div",{staticClass:"border-top flex col-bottom row-left p-t-24",staticStyle:{width:"100%"}},[t.orderData.btns.agree_btn?e("ls-dialog",{staticClass:"inline m-l-24",attrs:{title:"同意售后",width:"20vw"},on:{confirm:t.afterSaleAgree}},[e("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("同意售后")]),e("div",[t._v(" 提示：售后同意 ")])],1):t._e(),t.orderData.btns.refuse_btn?e("ls-dialog",{staticClass:"inline m-l-24",attrs:{title:"拒绝售后",width:"20vw"},on:{confirm:t.afterSaleRefuse}},[e("el-button",{staticStyle:{},attrs:{slot:"trigger",size:"small"},slot:"trigger"},[t._v("拒绝售后")]),e("div",[t._v(" 提示：请填写拒绝售后的原因 ")]),e("div",{staticClass:"flex m-t-12"},[e("span",{staticClass:"inline m-b-24",staticStyle:{width:"70px"}},[t._v("拒绝原因")]),e("el-input",{staticClass:"m-t-10",attrs:{type:"textarea",rows:2,placeholder:"请输入拒绝原因"},model:{value:t.reason,callback:function(e){t.reason=e},expression:"reason"}})],1)],1):t._e(),t.orderData.btns.confirm_goods_btn?e("ls-dialog",{staticClass:"inline m-l-24",attrs:{title:"确认收货",width:"20vw"},on:{confirm:t.afterSaleConfirmGoods}},[e("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("确认收货")]),e("div",[t._v(" 提示：确认收货 ")])],1):t._e(),t.orderData.btns.refuse_goods_btn?e("ls-dialog",{staticClass:"inline m-l-24",attrs:{title:"拒绝收货",width:"20vw"},on:{confirm:t.afterSaleRefuseGoods}},[e("el-button",{staticStyle:{},attrs:{slot:"trigger",size:"small"},slot:"trigger"},[t._v("拒绝收货")]),e("div",[t._v(" 提示：请填写拒绝收货的原因 ")]),e("div",{staticClass:"flex m-t-12"},[e("span",{staticClass:"inline m-b-24",staticStyle:{width:"70px"}},[t._v("拒绝原因")]),e("el-input",{staticClass:"m-t-10",attrs:{type:"textarea",rows:2,placeholder:"请输入拒绝原因"},model:{value:t.reason,callback:function(e){t.reason=e},expression:"reason"}})],1)],1):t._e(),t.orderData.btns.change_btn?e("ls-dialog",{staticClass:"inline m-l-24",attrs:{title:"确认退款",width:"20vw"},on:{confirm:t.afterSaleConfirmRefund}},[e("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("确认退款")]),e("div",{staticClass:"m-t-12"},[t._v(" 退款方式： "),e("el-radio",{attrs:{label:"1"},model:{value:t.refund_way,callback:function(e){t.refund_way=e},expression:"refund_way"}},[t._v("原路退回")]),e("el-radio",{attrs:{label:"2"},model:{value:t.refund_way,callback:function(e){t.refund_way=e},expression:"refund_way"}},[t._v("退回余额")])],1),e("div",{staticClass:"m-t-12"},[t._v(" 退款金额： "),e("span",{staticStyle:{color:"red"}},[t._v("¥"+t._s(t.orderData.goods_info.order_goods_sum.sum_refund_amount))])])],1):t._e(),t.orderData.btns.agree_refund_btn?e("ls-dialog",{staticClass:"inline m-l-24",attrs:{title:"同意退款",width:"20vw"},on:{confirm:t.afterSaleAgreeRefund}},[e("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("同意退款")]),e("div",[t._v(" 提示：该笔订单通过微信支付付款，同意售后申请后，退款将自动原路退回会员账户。 ")]),e("div",{staticClass:"m-t-12"},[t._v(" 退货方式： "+t._s(t.orderData.after_sale.refund_method_desc)+" ")]),e("div",{staticClass:"m-t-12"},[t._v(" 退款金额： "),e("span",{staticStyle:{color:"red"}},[t._v("¥"+t._s(t.orderData.goods_info.order_goods_sum.sum_refund_amount))])])],1):t._e(),t.orderData.btns.refuse_refund?e("ls-dialog",{staticClass:"inline m-l-24",attrs:{title:"拒绝退款",width:"20vw"},on:{confirm:t.afterSaleRefuseRefund}},[e("el-button",{staticStyle:{},attrs:{slot:"trigger",size:"small"},slot:"trigger"},[t._v("拒绝退款")]),e("div",[t._v(" 提示：请与会员协商后确认拒绝申请，会员可再次发起退款。 ")]),e("div",{staticClass:"m-t-12"},[t._v(" 退货方式： "+t._s(t.orderData.after_sale.refund_method_desc)+" ")]),e("div",{staticClass:"m-t-12"},[t._v(" 退款金额： "),e("span",{staticStyle:{color:"red"}},[t._v("¥"+t._s(t.orderData.goods_info.order_goods_sum.sum_refund_amount))])]),e("div",{staticClass:"flex m-t-12"},[e("span",{staticClass:"inline m-b-24",staticStyle:{width:"70px"}},[t._v("拒绝原因")]),e("el-input",{staticClass:"m-t-10",attrs:{type:"textarea",rows:2,placeholder:"请输入拒绝原因"},model:{value:t.reason,callback:function(e){t.reason=e},expression:"reason"}})],1)],1):t._e()],1)])])])]),e("section",[e("div",{staticClass:"ls-card m-t-24 flex flex-wrap col-stretch",staticStyle:{height:"auto"}},[e("div",{staticStyle:{width:"100%"}},[e("div",{staticClass:"nr weight-500 m-b-20 title"},[t._v("买家信息")]),e("el-form",{ref:"form",staticClass:"flex",attrs:{model:t.orderData,"label-width":"120px",size:"small"}},[e("el-form-item",{attrs:{label:"买家昵称"}},[e("div",{staticClass:"order pointer",on:{click:function(e){return t.toUserDetail()}}},[t._v(" "+t._s(t.orderData.return_goods_info.user_nickname)+"（"+t._s(t.orderData.return_goods_info.user_sn)+"） ")])])],1)],1)]),e("div",{staticClass:"ls-card m-t-24"},[e("div",{staticClass:"nr weight-500 m-b-20 title"},[t._v("商品信息")]),e("el-table",{ref:"paneTable",staticStyle:{width:"100%"},attrs:{data:t.orderData.goods_info.order_goods,"header-cell-style":{background:"#f5f8ff",border:"none",color:"#666666",height:"60px",width:"100%"},size:"mini","summary-method":t.getSummaries,"show-summary":!0}},[e("el-table-column",{attrs:{label:"商品信息","min-width":"460"},scopedSlots:t._u([{key:"default",fn:function(r){return[e("div",{staticClass:"flex m-t-10"},[e("el-image",{staticClass:"flex-none",staticStyle:{width:"58px",height:"58px"},attrs:{src:r.row.goods_image}}),e("div",{staticClass:"m-l-8 flex-1"},[e("div",{staticClass:"line-2"},[t._v(" "+t._s(r.row.goods_name)+" ")]),e("div",{staticClass:"xs muted"},[t._v(" "+t._s(r.row.spec_value_str)+" ")])])],1)]}}])}),e("el-table-column",{attrs:{prop:"goods_price",label:"商品价格","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(r){return[e("span",[t._v(t._s(r.row.goods_price))])]}}])}),e("el-table-column",{attrs:{prop:"goods_num",label:"购买数量","min-width":"180"}}),e("el-table-column",{attrs:{label:"商品总额",prop:"total_price","min-width":"180"}}),e("el-table-column",{attrs:{label:"优惠金额",prop:"discount_price","min-width":"180"}}),e("el-table-column",{attrs:{label:"商品实付总额",prop:"total_pay_price","min-width":"180"}})],1)],1)]),e("footer",{staticClass:"col-top"},[e("div",{staticClass:"ls-card m-r-24 m-t-24",staticStyle:{width:"100%"}},[e("div",{staticClass:"nr weight-500 m-b-20 title"},[t._v("售后金额")]),e("el-form",{ref:"form",attrs:{model:t.orderData,"label-width":"160px",size:"small"}},[e("el-form-item",{attrs:{label:"商品实付金额"}},[t._v(" "+t._s(t.orderData.goods_info.order_goods_sum.sum_total_pay_price)+" ")]),e("el-form-item",{attrs:{label:"商品售后数量"}},[t._v(" "+t._s(t.orderData.goods_info.order_goods_sum.sum_goods_num||0)+" ")]),e("el-form-item",{attrs:{label:"商品售后金额"}},[t._v(" "+t._s(t.orderData.goods_info.order_goods_sum.sum_total_price)+" ")]),e("el-form-item",{attrs:{label:"实际退款金额"}},[t._v(" "+t._s(t.orderData.goods_info.order_goods_sum.sum_refund_amount)+" ")])],1)],1),t.orderData.after_sale.express_name?e("div",{staticClass:"ls-card m-t-24",staticStyle:{height:"auto"}},[e("div",{staticStyle:{width:"100%"}},[e("div",{staticClass:"nr weight-500 m-b-20 title"},[t._v("退货信息")]),e("el-form",{ref:"form",attrs:{model:t.orderData,"label-width":"120px",size:"small"}},[e("el-form-item",{attrs:{label:"快递公司"}},[t._v(" "+t._s(t.orderData.after_sale.express_name)+" ")]),e("el-form-item",{attrs:{label:"快递单号"}},[t._v(" "+t._s(t.orderData.after_sale.invoice_no)+" ")]),e("el-form-item",{attrs:{label:"退货时间"}},[t._v(" "+t._s(t.orderData.after_sale.express_time)+" ")])],1)],1)]):t._e(),e("div",{staticClass:"ls-card m-t-24"},[e("div",{staticClass:"nr weight-500 m-b-20 title"},[t._v("售后日志")]),e("el-table",{ref:"paneTable",staticStyle:{width:"100%"},attrs:{data:t.orderData.after_sale_log,size:"mini"}},[e("el-table-column",{attrs:{label:"操作人",prop:"operator_name",width:"155"}}),e("el-table-column",{attrs:{prop:"content",label:"操作事件","min-width":"220"}}),e("el-table-column",{attrs:{prop:"create_time",label:"操作时间","min-width":"180"}})],1)],1)])])},s=[],i=(r("13d5"),r("9ab4")),o=r("1b40"),l=r("0a6d"),n=r("5cf7"),d=r("ffae"),c=r("192a");let _=class extends o["e"]{constructor(){super(...arguments),this.id=0,this.orderData={after_sale:{id:2,order_id:1,user_id:1,sn:"20210809184530062266134",refund_type:2,refund_type_desc:"商品售后",refund_method:1,refund_method_desc:"仅退款",status:1,status_desc:"售后中",refund_reason:"7天无理由",refund_remark:"",refund_image:"",create_time:"2021-08-09 18:45:30",express_name:"",invoice_no:"",express_remark:"",express_image:""},return_goods_info:{user_sn:"100001",user_nickname:"测试用户",user_mobile:"13800138000"},order_info:{order_status:3,order_status_desc:"已完成",sn:"SN0001",order_type:0,order_type_desc:"普通订单",order_terminal:1,order_terminal_desc:"微信小程序",create_time:"2021-08-05 16:35:31",pay_status:1,pay_status_desc:"已支付",pay_way:1,pay_way_desc:"微信支付",pay_time:"——",confirm_take_time:"——"},goods_info:{order_goods:[{item_image:"",spec_value_str:"黑色,L码",goods_name:"小米10青春版",goods_image:"",goods_price:"20.00",goods_num:1,total_price:null,discount_price:null,total_pay_price:"80.00",refund_amount:"50.00"}],order_goods_sum:{sum_refund_amount:50,sum_total_pay_price:80,sum_discount_price:0,sum_total_price:0,sum_goods_num:1}},after_sale_log:[{operator_role:3,operator_id:1,content:"卖家已确认退款，售后退款中",create_time:"2021-08-09 20:29:14",operator_name:"ljj"},{operator_role:3,operator_id:1,content:"卖家已同意,等待退款",create_time:"2021-08-09 20:24:57",operator_name:"ljj"},{operator_role:2,operator_id:1,content:"买家发起商品售后,等待卖家同意",create_time:"2021-08-09 18:45:30",operator_name:"测试用户"}],btns:{agree_btn:!1,refuse_btn:!1,refuse_goods_btn:!1,confirm_goods_btn:!1,agree_refund_btn:!0,refuse_refund:!0,change_btn:!1}},this.reason="",this.refund_total_amount="",this.refund_way="1"}toUserDetail(){this.$router.push({path:"/user/user_details",query:{id:this.orderData.after_sale.user_id}})}reviews(t){window.open(t)}getOrderDetail(){Object(c["e"])({id:this.id}).then(t=>{this.orderData=t,this.refund_total_amount=t.goods_info.order_goods_sum.sum_refund_amount})}afterSaleAgree(){Object(c["a"])({id:this.id}).then(t=>{this.getOrderDetail()})}afterSaleRefuse(){Object(c["g"])({id:this.id}).then(t=>{this.getOrderDetail()})}afterSaleConfirmGoods(){Object(c["c"])({id:this.id}).then(t=>{this.getOrderDetail()})}afterSaleRefuseGoods(){Object(c["h"])({id:this.id}).then(t=>{this.getOrderDetail()})}afterSaleAgreeRefund(){Object(c["b"])({id:this.id}).then(t=>{this.getOrderDetail()})}afterSaleRefuseRefund(){Object(c["i"])({id:this.id}).then(t=>{this.getOrderDetail()})}afterSaleConfirmRefund(){Object(c["d"])({id:this.id,refund_way:this.refund_way,refund_total_amount:this.refund_total_amount}).then(t=>{this.getOrderDetail()})}toOrder(t){this.$router.push({path:"/order/order_detail",query:{id:t}})}getSummaries(t){const{columns:e,data:r}=t,a=[];return e.forEach((t,e)=>{if(0===e)return void(a[0]="总价");const s=r.map(e=>Number(e[t.property]));if(!s.every(t=>isNaN(t))){if(1==e)return;a[e]=s.reduce((t,e)=>{const r=Number(e);return isNaN(r)?t:t+e},0),2!==e&&(a[e]="¥"+a[e])}}),a}created(){this.id=this.$route.query.id,this.id&&this.getOrderDetail()}};_=Object(i["a"])([Object(o["a"])({components:{LsDialog:l["a"],AreaSelect:n["a"],OrderLogistics:d["a"]}})],_);var f=_,u=f,m=(r("bdef"),r("2877")),p=Object(m["a"])(u,a,s,!1,null,"79433b1c",null);e["default"]=p.exports},"5cf7":function(t,e,r){"use strict";var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"area-select"},[e("el-cascader",{style:{width:t.width},attrs:{options:t.options},model:{value:t.areaValue,callback:function(e){t.areaValue=e},expression:"areaValue"}})],1)},s=[],i=r("9ab4"),o=r("0463"),l=r("1b40");let n=class extends l["e"]{constructor(){super(...arguments),this.options=o["a"]}get areaValue(){return[this.province,this.city,this.district]}set areaValue(t){this.$emit("update:province",t[0]),this.$emit("update:city",t[1]),this.$emit("update:district",t[2])}};Object(i["a"])([Object(l["c"])()],n.prototype,"province",void 0),Object(i["a"])([Object(l["c"])()],n.prototype,"city",void 0),Object(i["a"])([Object(l["c"])()],n.prototype,"district",void 0),Object(i["a"])([Object(l["c"])({default:"380px"})],n.prototype,"width",void 0),n=Object(i["a"])([l["a"]],n);var d=n,c=d,_=r("2877"),f=Object(_["a"])(c,a,s,!1,null,null,null);e["a"]=f.exports},a55f:function(t,e,r){},bdef:function(t,e,r){"use strict";r("2397")},ffae:function(t,e,r){"use strict";var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"ls-dialog__trigger",on:{click:t.onTrigger}},[t._t("trigger")],2),e("el-dialog",{attrs:{"coustom-class":"ls-dialog__content",title:1==t.flag?"发货":"物流查询",visible:t.visible,width:"70vw",top:t.top,"modal-append-to-body":!1,center:"","before-close":t.close,"close-on-click-modal":!1}},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:0==t.orderData.length,expression:"orderData.length == 0"}],staticStyle:{height:"75vh","overflow-x":"hidden"}},[e("div",[e("div",{staticClass:"nr weight-500 m-b-20"},[t._v("商品信息")]),e("el-table",{ref:"paneTable",staticStyle:{width:"100%"},attrs:{data:t.orderData.order_goods,size:"mini","summary-method":t.getSummaries,"show-summary":!0}},[e("el-table-column",{attrs:{label:"序号",prop:"id",width:"75"}}),e("el-table-column",{attrs:{label:"商品信息","min-width":"300"},scopedSlots:t._u([{key:"default",fn:function(r){return[e("div",{staticClass:"flex m-t-10"},[e("el-image",{staticClass:"flex-none",staticStyle:{width:"58px",height:"58px"},attrs:{src:r.row.goods_image}}),e("div",{staticClass:"m-l-8 flex-1"},[e("div",{staticClass:"line-2"},[t._v(" "+t._s(r.row.goods_name)+" ")])])],1)]}}])}),e("el-table-column",{attrs:{label:"","min-width":"150"}}),e("el-table-column",{attrs:{prop:"spec_value_str",label:"商品规格","min-width":"150"}}),e("el-table-column",{attrs:{prop:"goods_price",label:"商品价格","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ¥"+t._s(e.row.goods_price)+" ")]}}])}),e("el-table-column",{attrs:{prop:"goods_num",label:"购买数量","min-width":"120"}}),e("el-table-column",{attrs:{label:"优惠金额",prop:"discount_price","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ¥"+t._s(e.row.discount_price)+" ")]}}])}),e("el-table-column",{attrs:{label:"商品实付总额",prop:"total_pay_price","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ¥"+t._s(e.row.total_pay_price)+" ")]}}])})],1)],1),1==t.flag?e("div",{staticClass:"m-t-30"},[e("div",{staticClass:"nr weight-500 m-b-20"},[t._v("收货信息")]),e("div",{staticClass:"flex"},[e("div",{staticClass:"m-r-24"},[t._v("收货人： "+t._s(t.orderData.contact))]),e("div",{staticClass:"m-r-24"},[t._v("收货人手机号码： "+t._s(t.orderData.mobile))]),e("div",{staticClass:"m-r-24"},[t._v("收货人地址： "+t._s(t.orderData.delivery_address))])])]):t._e(),1==t.flag?e("div",{staticClass:"m-t-30"},[e("div",{staticClass:"nr weight-500 m-b-20"},[t._v("物流配送")]),e("div",{staticClass:"flex"},[e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[e("el-form-item",{attrs:{label:"配送方式"}},[e("el-radio",{attrs:{label:1},model:{value:t.form.send_type,callback:function(e){t.$set(t.form,"send_type",e)},expression:"form.send_type"}},[t._v("需要物流")]),e("el-radio",{attrs:{label:2},model:{value:t.form.send_type,callback:function(e){t.$set(t.form,"send_type",e)},expression:"form.send_type"}},[t._v("无需物流")])],1),1==t.form.send_type?e("el-form-item",{attrs:{label:"物流公司"}},[e("el-input",{staticStyle:{width:"530px"},attrs:{placeholder:"请输入快递单号"},model:{value:t.form.invoice_no,callback:function(e){t.$set(t.form,"invoice_no",e)},expression:"form.invoice_no"}},[e("template",{slot:"prepend"},[e("div",[e("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:t.form.express_id,callback:function(e){t.$set(t.form,"express_id",e)},expression:"form.express_id"}},t._l(t.orderData.express,(function(t,r){return e("el-option",{key:r,attrs:{label:t.name,value:t.id}})})),1)],1)])],2)],1):t._e(),e("el-form-item",{attrs:{label:"发货备注"}},[e("el-input",{staticClass:"m-t-10",staticStyle:{width:"530px"},attrs:{type:"textarea",rows:7,placeholder:"请输入内容"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1)],1)],1)]):t._e(),0==t.flag?e("div",{staticClass:"m-t-30"},[e("div",{staticClass:"nr weight-500 m-b-20"},[t._v("物流信息")]),e("div",{staticClass:"flex"},[e("div",{staticClass:"m-r-24"},[t._v("发货时间： "+t._s(t.orderData.express_time))]),e("div",{staticClass:"m-r-24"},[t._v("物流公司： "+t._s(t.orderData.express_name||"无"))]),e("div",{staticClass:"m-r-24"},[t._v("物流单号 "+t._s(t.orderData.invoice_no||"无"))])])]):t._e(),0==t.flag?e("div",{staticClass:"m-t-30"},[e("div",{staticClass:"nr weight-500 m-b-20"},[t._v("物流轨迹")]),1==t.orderData.send_type?e("div",[e("el-table",{ref:"paneTable",staticStyle:{width:"100%"},attrs:{data:t.orderData.traces,size:"mini"}},[e("el-table-column",{attrs:{label:"日期",prop:"0","min-width":"205"}}),e("el-table-column",{attrs:{label:"轨迹",prop:"1","min-width":"405"}})],1)],1):e("div",{staticClass:"nr weight-500 m-t-60 flex row-center"},[t._v(" 无需物流 ")])]):t._e()]),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{size:"small"},on:{click:function(e){return t.handleEvent("cancel")}}},[t._v("取消")]),1==t.flag?e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.handleEvent("confirm")}}},[t._v("发货")]):e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.handleEvent("cancel")}}},[t._v("确认")])],1)])],1)},s=[],i=(r("13d5"),r("9ab4")),o=r("1b40"),l=r("192a");let n=class extends o["e"]{constructor(){super(...arguments),this.visible=!1,this.fullscreenLoading=!1,this.orderData={traces:{}},this.form={send_type:1,express_id:"",invoice_no:"",remark:""}}getOrderDeliveryInfo(){Object(l["p"])({id:this.id}).then(t=>{this.orderData=t,this.fullscreenLoading=!1})}getOrderLogistics(){Object(l["s"])({id:this.id}).then(t=>{this.orderData=t,this.fullscreenLoading=!1})}orderDelivery(){Object(l["o"])({id:this.id,...this.form}).then(t=>{this.$emit("update",""),this.getOrderLogistics()})}getSummaries(t){const{columns:e,data:r}=t,a=[];return e.forEach((t,e)=>{if(0===e)return void(a[2]="总价");const s=r.map(e=>Number(e[t.property]));if(!s.every(t=>isNaN(t))){if(4==e)return;a[e]=s.reduce((t,e)=>{const r=Number(e);return isNaN(r)?t:t+e},0),5!==e&&3!==e&&(a[e]="¥"+a[e])}}),a}handleEvent(t){if("cancel"===t&&this.close(),"confirm"===t){if(this.flag&&1==this.form.send_type){if(""==this.form.express_id)return this.$message.error("请选择快递公司");if(""==this.form.invoice_no)return this.$message.error("请填写快递单号")}this.orderDelivery(),this.close()}}onTrigger(){this.fullscreenLoading=!0,1==this.flag?this.getOrderDeliveryInfo():this.getOrderLogistics(),console.log("打开弹窗再请求"),this.visible=!0}close(){this.visible=!1}};Object(i["a"])([Object(o["c"])({default:"5vh"})],n.prototype,"top",void 0),Object(i["a"])([Object(o["c"])({default:"0"})],n.prototype,"id",void 0),Object(i["a"])([Object(o["c"])({default:!0})],n.prototype,"flag",void 0),Object(i["a"])([Object(o["c"])({default:""})],n.prototype,"isShow",void 0),n=Object(i["a"])([o["a"]],n);var d=n,c=d,_=(r("2b7e"),r("2877")),f=Object(_["a"])(c,a,s,!1,null,"46b98320",null);e["a"]=f.exports}}]);
//# sourceMappingURL=chunk-09d520c5.7de5d90e.js.map