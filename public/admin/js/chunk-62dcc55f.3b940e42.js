(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62dcc55f"],{"0f57":function(t,a,e){"use strict";e("6a6a")},6460:function(t,a,e){"use strict";e.d(a,"d",(function(){return n})),e.d(a,"e",(function(){return i})),e.d(a,"c",(function(){return l})),e.d(a,"a",(function(){return c})),e.d(a,"b",(function(){return o}));var s=e("f175");const n=()=>s["a"].get("/settings.pay.pay_way/getPayWay"),i=t=>s["a"].post("/settings.pay.pay_way/setPayWay",t),l=t=>s["a"].post("/settings.pay.pay_config/setConfig",t),c=t=>s["a"].get("/settings.pay.pay_config/getConfig",{params:t}),o=()=>s["a"].get("/settings.pay.pay_config/lists")},"6a6a":function(t,a,e){},7109:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;t._self._setupProxy;return a("div",{attrs:{id:"pay-method"}},[a("div",{staticClass:"m-t-24"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.onSetPayMethod}},[t._v("设置支付方式 ")])],1),t._l(t.paymentMethodData,(function(e,s){return a("div",{directives:[{name:"loading",rawName:"v-loading",value:0==t.paymentMethodData.length,expression:"paymentMethodData.length == 0"}],key:s,staticClass:"ls-card m-t-24",staticStyle:{"padding-bottom":"50px"}},[1==s?a("div",{staticClass:"lg m-b-24 card-title"},[t._v(" 微信小程序"),a("span",{staticClass:"xs muted m-l-10"},[t._v("在微信小程序中付款的场景")])]):t._e(),2==s?a("div",{staticClass:"lg m-b-24 card-title"},[t._v(" 微信公众号"),a("span",{staticClass:"xs muted m-l-10"},[t._v("在微信公众号H5页面中付款的场景，公众号类型一般为服务号")])]):t._e(),3==s?a("div",{staticClass:"lg m-b-24 card-title"},[t._v(" H5支付"),a("span",{staticClass:"xs muted m-l-10"},[t._v("在浏览器H5页面中付款的场景")])]):t._e(),4==s?a("div",{staticClass:"lg m-b-24 card-title"},[t._v(" PC商城"),a("span",{staticClass:"xs muted m-l-10"},[t._v("在PC商城页面中付款的场景")])]):t._e(),5==s?a("div",{staticClass:"lg m-b-24 card-title"},[t._v(" APP支付"),a("span",{staticClass:"xs muted m-l-10"},[t._v("在APP中付款的场景")])]):t._e(),7==s?a("div",{staticClass:"lg m-b-24 card-title"},[t._v(" 字节小程序"),a("span",{staticClass:"xs muted m-l-10"},[t._v("在字节小程序中付款的场景")])]):t._e(),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e,size:"mini"}},[a("el-table-column",{attrs:{prop:"icon",label:"图标","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{width:"34px",height:"34px"},attrs:{src:t.row.icon,alt:"图标"}})]}}],null,!0)}),a("el-table-column",{attrs:{prop:"pay_way_name",label:"支付方式","min-width":"150"}}),a("el-table-column",{attrs:{prop:"is_default",label:"默认支付","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(1==a.row.is_default?"默认":"-")+" ")]}}],null,!0)}),a("el-table-column",{attrs:{prop:"status",label:"开启状态","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(1==a.row.status?"开启":"关闭")+" ")]}}],null,!0)})],1)],1)}))],2)},n=[],i=e("9ab4"),l=e("1b40"),c=e("6460");let o=class extends l["e"]{constructor(){super(...arguments),this.paymentMethodData=[]}getPaymentMethodList(){Object(c["d"])().then(t=>{this.paymentMethodData=t}).catch(()=>{this.$message.error("数据初始化失败，请刷新重载！")})}onSetPayMethod(){this.$router.push("/setting/payment/pay_method_edit")}created(){this.getPaymentMethodList()}};o=Object(i["a"])([Object(l["a"])({components:{}})],o);var d=o,r=d,u=(e("0f57"),e("2877")),p=Object(u["a"])(r,s,n,!1,null,"026743e2",null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-62dcc55f.3b940e42.js.map