(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7434a5a8"],{"093d":function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e._self._c;e._self._setupProxy;return s("div",{staticClass:"ls-logistics"},[s("div",{staticClass:"ls-card ls-logistics__header"},[s("el-page-header",{attrs:{content:e.$route.meta.title},on:{back:function(s){return e.$router.go(-1)}}})],1),s("div",{staticClass:"ls-card ls-logistics__form m-t-10"},[s("el-form",{ref:"form",staticClass:"ls-form",attrs:{model:e.form,"label-width":"120px",size:"small"}},[s("el-form-item",{attrs:{label:"选择类型"}},[s("el-radio-group",{model:{value:e.form.express_type,callback:function(s){e.$set(e.form,"express_type",s)},expression:"form.express_type"}},[s("el-radio",{attrs:{label:"express_bird"}},[e._v("快递鸟")]),s("el-radio",{attrs:{label:"express_hundred"}},[e._v("快递100")])],1)],1),"express_bird"==e.form.express_type?[s("el-form-item",{attrs:{label:"快递鸟套餐"}},[s("el-radio-group",{model:{value:e.form.express_bird.set_meal,callback:function(s){e.$set(e.form.express_bird,"set_meal",s)},expression:"form.express_bird.set_meal"}},[s("el-radio",{attrs:{label:"free"}},[e._v("免费")]),s("el-radio",{attrs:{label:"pay"}},[e._v("收费")])],1)],1),s("el-form-item",{attrs:{label:"EBussiness ID"}},[s("el-input",{attrs:{placeholder:""},model:{value:e.form.express_bird.ebussiness_id,callback:function(s){e.$set(e.form.express_bird,"ebussiness_id",s)},expression:"form.express_bird.ebussiness_id"}})],1),s("el-form-item",{attrs:{label:"APPKEY"}},[s("el-input",{attrs:{placeholder:""},model:{value:e.form.express_bird.app_key,callback:function(s){e.$set(e.form.express_bird,"app_key",s)},expression:"form.express_bird.app_key"}})],1)]:[s("el-form-item",{attrs:{label:"接口类型"}},[s("el-radio-group",{model:{value:e.form.express_hundred.interface_type,callback:function(s){e.$set(e.form.express_hundred,"interface_type",s)},expression:"form.express_hundred.interface_type"}},[s("el-radio",{attrs:{label:"free"}},[e._v("免费版")]),s("el-radio",{attrs:{label:"limited_free"}},[e._v("限量免费")]),s("el-radio",{attrs:{label:"enterprise"}},[e._v("企业接口")])],1)],1),s("el-form-item",{attrs:{label:"CUSTOMER"}},[s("el-input",{attrs:{placeholder:""},model:{value:e.form.express_hundred.customer,callback:function(s){e.$set(e.form.express_hundred,"customer",s)},expression:"form.express_hundred.customer"}})],1),s("el-form-item",{attrs:{label:"APPKEY"}},[s("el-input",{attrs:{placeholder:""},model:{value:e.form.express_hundred.app_key,callback:function(s){e.$set(e.form.express_hundred,"app_key",s)},expression:"form.express_hundred.app_key"}})],1)]],2)],1),s("div",{staticClass:"ls-logistics__footer bg-white ls-fixed-footer"},[s("div",{staticClass:"btns row-center flex",staticStyle:{height:"100%"}},[s("el-button",{attrs:{size:"small"}},[e._v("取消")]),s("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.handleSave}},[e._v("保存")])],1)])])},i=[],a=t("9ab4"),l=t("2b8e"),o=t("1b40");let n=class extends o["e"]{constructor(){super(...arguments),this.form={express_bird:{set_meal:"free",app_key:"",ebussiness_id:""},express_hundred:{interface_type:"enterprise",app_key:"",customer:""},express_type:"express_bird"}}handleSave(){Object(l["l"])(this.form)}getLogisticsConfig(){Object(l["k"])().then(e=>{this.form=e})}created(){this.getLogisticsConfig()}};n=Object(a["a"])([o["a"]],n);var d=n,p=d,c=t("2877"),f=Object(c["a"])(p,r,i,!1,null,"a3838532",null);s["default"]=f.exports},"2b8e":function(e,s,t){"use strict";t.d(s,"m",(function(){return i})),t.d(s,"n",(function(){return a})),t.d(s,"a",(function(){return l})),t.d(s,"d",(function(){return o})),t.d(s,"b",(function(){return n})),t.d(s,"c",(function(){return d})),t.d(s,"e",(function(){return p})),t.d(s,"k",(function(){return c})),t.d(s,"l",(function(){return f})),t.d(s,"f",(function(){return u})),t.d(s,"i",(function(){return _})),t.d(s,"j",(function(){return m})),t.d(s,"h",(function(){return b})),t.d(s,"g",(function(){return g}));var r=t("f175");const i=()=>r["a"].get("settings.delivery.delivery_way/getConfig"),a=e=>r["a"].post("settings.delivery.delivery_way/setConfig",e),l=e=>r["a"].post("/settings.delivery.express/add",e),o=e=>r["a"].post("/settings.delivery.express/edit",e),n=e=>r["a"].post("/settings.delivery.express/del",e),d=e=>r["a"].get("/settings.delivery.express/detail",{params:e}),p=e=>r["a"].get("/settings.delivery.express/lists",{params:e}),c=()=>r["a"].get("settings.delivery.logistics_config/getLogisticsConfig"),f=e=>r["a"].post("settings.delivery.logistics_config/setLogisticsConfig",e),u=e=>r["a"].post("settings.delivery.freight/add",e),_=e=>r["a"].post("settings.delivery.freight/edit",e),m=e=>r["a"].get("settings.delivery.freight/lists",{params:e}),b=e=>r["a"].get("settings.delivery.freight/detail",{params:e}),g=e=>r["a"].post("settings.delivery.freight/del",e)}}]);
//# sourceMappingURL=chunk-7434a5a8.b9b85382.js.map