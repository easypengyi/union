(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bundle-pages-input_express_info-input_express_info"],{"0760":function(e,t,a){"use strict";var r=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("5530")),n=a("3d42"),o={data:function(){return{form:{id:"",express_name:"",invoice_no:"",express_remark:"",express_image:[]}}},methods:{applyExpressInfo:function(){var e=this;(0,n.apiExpressInfo)((0,i.default)({},this.form)).then((function(t){e.$toast({title:"提交成功"}),setTimeout((function(){uni.navigateBack(1)}),1e3)}))}},onLoad:function(){var e=this.$Route.query;this.form.id=e.id}};t.default=o},"3b33":function(e,t,a){"use strict";a.r(t);var r=a("5788"),i=a("908d");for(var n in i)"default"!==n&&function(e){a.d(t,e,(function(){return i[e]}))}(n);a("6935");var o,s=a("f0c5"),f=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"0e0f134b",null,!1,r["a"],o);t["default"]=f.exports},"3d42":function(e,t,a){"use strict";var r=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.apiExpressInfo=t.apiAfterSaleCancel=t.apiAfterSaleDetail=t.apiAfterSaleList=t.apiAfterSalePost=t.apiAfterSaleGoods=t.apiCommentGoodsInfo=t.apiCommentCategory=t.apiCommentAdd=t.apiCommentGoodsLists=t.apiCommentLists=t.apiVerificationOrderConfirm=t.apiVerificationOrderDetail=t.apiVerificationOrderList=t.apiOrderDelete=t.apiOrderConfirm=t.apiOrderClose=t.apiOrderDetail=t.apiOrderList=t.apiOrderPlace=t.apiOrderLogistics=t.apiDeliveryType=void 0;var i=r(a("8164")),n=function(){return i.default.get("order/getDeliveryType")};t.apiDeliveryType=n;var o=function(e){return i.default.get("order/orderTraces",{params:e})};t.apiOrderLogistics=o;var s=function(e){return i.default.post("order/placeOrder",e)};t.apiOrderPlace=s;var f=function(e){return i.default.get("order/lists",{params:e})};t.apiOrderList=f;var l=function(e){return i.default.get("order/detail",{params:e})};t.apiOrderDetail=l;var u=function(e){return i.default.post("order/cancel",e)};t.apiOrderClose=u;var c=function(e){return i.default.post("order/confirm",e)};t.apiOrderConfirm=c;var d=function(e){return i.default.post("order/del",e)};t.apiOrderDelete=d;var p=function(e){return i.default.get("verification/lists",{params:e})};t.apiVerificationOrderList=p;var m=function(e){return i.default.get("verification/verification",{params:e})};t.apiVerificationOrderDetail=m;var v=function(e){return i.default.post("verification/verificationConfirm",e)};t.apiVerificationOrderConfirm=v;var _=function(e){return i.default.get("goods_comment/lists",{params:e})};t.apiCommentLists=_;var b=function(e){return i.default.get("goods_comment/commentGoodsLists",{params:e})};t.apiCommentGoodsLists=b;var g=function(e){return i.default.post("goods_comment/add",e)};t.apiCommentAdd=g;var x=function(e){return i.default.get("goods_comment/commentCategory",{params:e})};t.apiCommentCategory=x;var C=function(e){return i.default.get("goods_comment/commentGoodsInfo",{params:e})};t.apiCommentGoodsInfo=C;var h=function(e){return i.default.get("after_sale/orderGoodsInfo",{params:e})};t.apiAfterSaleGoods=h;var w=function(e){return i.default.post("after_sale/apply",e)};t.apiAfterSalePost=w;var O=function(e){return i.default.get("after_sale/lists",{params:e})};t.apiAfterSaleList=O;var k=function(e){return i.default.get("after_sale/detail",{params:e})};t.apiAfterSaleDetail=k;var y=function(e){return i.default.post("after_sale/cancel",e)};t.apiAfterSaleCancel=y;var L=function(e){return i.default.post("after_sale/returnGoods",e)};t.apiExpressInfo=L},5788:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r}));var r={uploader:a("c7dc").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{class:e.themeName},[a("v-uni-view",{staticClass:"m-t-24 bg-white"},[a("v-uni-view",{staticClass:"flex"},[a("v-uni-view",{staticClass:"label nr normal"},[e._v("物流公司")]),a("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入物流公司名称"},model:{value:e.form.express_name,callback:function(t){e.$set(e.form,"express_name",t)},expression:"form.express_name"}})],1),a("v-uni-view",{staticClass:"flex"},[a("v-uni-view",{staticClass:"label nr normal"},[e._v("快递单号")]),a("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入快递单号"},model:{value:e.form.invoice_no,callback:function(t){e.$set(e.form,"invoice_no",t)},expression:"form.invoice_no"}})],1),a("v-uni-view",{staticClass:"flex"},[a("v-uni-view",{staticClass:"label nr normal"},[e._v("备注说明")]),a("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"选填"},model:{value:e.form.express_remark,callback:function(t){e.$set(e.form,"express_remark",t)},expression:"form.express_remark"}})],1)],1),a("v-uni-view",{staticClass:"m-t-24 bg-white p-24"},[a("v-uni-view",{staticClass:"flex p-b-24"},[a("v-uni-view",{staticClass:"nr"},[e._v("上传凭证")]),a("v-uni-view",{staticClass:"m-r-12 muted sm"},[e._v("（选填，最多可上传3张）")])],1),a("uploader",{attrs:{deletable:!0,"preview-size":"160rpx",maxUpload:"3","image-fit":"aspectFill"},model:{value:e.form.express_image,callback:function(t){e.$set(e.form,"express_image",t)},expression:"form.express_image"}})],1),a("v-uni-view",{staticClass:"btn flex row-center br60 lg white",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.applyExpressInfo.apply(void 0,arguments)}}},[e._v("申请退款")])],1)},n=[]},6935:function(e,t,a){"use strict";var r=a("f4a1"),i=a.n(r);i.a},"6bef":function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,"@charset \"UTF-8\";\n/* 颜色变量 */\n/** S Font's size **/\n/** E Font's size **/[data-v-0e0f134b]:export{red_theme:#ff2c3c;orange_theme:#f7971e;pink_theme:#fa444d;gold_theme:#e0a356;blue_theme:#2f80ed;green_theme:#2ec840}.label[data-v-0e0f134b]{margin:%?24?% 0;width:%?180?%;text-align:center}.input[data-v-0e0f134b]{width:80%}.btn[data-v-0e0f134b]{height:%?84?%;margin:%?50?% %?24?% 0 %?24?%}.red_theme .btn[data-v-0e0f134b]{background-color:#ff2c3c}.orange_theme .btn[data-v-0e0f134b]{background-color:#f7971e}.pink_theme .btn[data-v-0e0f134b]{background-color:#fa444d}.gold_theme .btn[data-v-0e0f134b]{background-color:#e0a356}.blue_theme .btn[data-v-0e0f134b]{background-color:#2f80ed}.green_theme .btn[data-v-0e0f134b]{background-color:#2ec840}",""]),e.exports=t},"908d":function(e,t,a){"use strict";a.r(t);var r=a("0760"),i=a.n(r);for(var n in r)"default"!==n&&function(e){a.d(t,e,(function(){return r[e]}))}(n);t["default"]=i.a},f4a1:function(e,t,a){var r=a("6bef");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=a("4f06").default;i("5798182c",r,!0,{sourceMap:!1,shadowMode:!1})}}]);