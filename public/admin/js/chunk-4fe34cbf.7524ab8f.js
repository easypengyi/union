(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fe34cbf"],{"142d":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"app_store"},[s("el-form",{ref:"formRef",attrs:{rules:t.formRules,model:t.form,"label-width":"140px",size:"small"}},[s("div",{staticClass:"ls-card m-t-16"},[s("div",{staticClass:"card-title"},[t._v("APP下载")]),s("div",{staticClass:"card-content m-t-24"},[s("div",{staticClass:"ls-card-alert"},[s("el-alert",{staticClass:"xs",attrs:{title:"苹果APP可通过上架APP至苹果App Store获取下载链接；安卓APP可通过上架APP至应用宝获取下载链接；下载链接也可使用蒲公英等分发渠道的链接。",type:"info",closable:!1,"show-icon":""}})],1),s("el-form-item",{attrs:{label:"苹果APP下载链接"}},[s("el-input",{staticClass:"ls-input m-r-10",attrs:{size:"small"},model:{value:t.form.ios_download_url,callback:function(s){t.$set(t.form,"ios_download_url",s)},expression:"form.ios_download_url"}})],1),s("el-form-item",{attrs:{label:"安卓APP下载链接"}},[s("el-input",{staticClass:"ls-input m-r-10",attrs:{size:"small"},model:{value:t.form.android_download_url,callback:function(s){t.$set(t.form,"android_download_url",s)},expression:"form.android_download_url"}})],1),s("el-form-item",{attrs:{label:"APP下载引导文案"}},[s("el-input",{staticClass:"ls-input m-r-10",attrs:{size:"small"},model:{value:t.form.download_title,callback:function(s){t.$set(t.form,"download_title",s)},expression:"form.download_title"}}),s("div",{staticClass:"muted xs m-r-16"},[t._v(" 分享APP页面打开后，H5页面顶部会显示APP下载引导文案 ")])],1)],1)]),s("div",{staticClass:"ls-card m-t-16"},[s("div",{staticClass:"card-title"},[t._v("微信开放平台")]),s("div",{staticClass:"card-content m-t-24"},[s("div",{staticClass:"ls-card-alert"},[s("el-alert",{staticClass:"xs",attrs:{title:"APP需要使用微信授权登录、微信支付等微信生态能力时，需要设置关联微信开发平台；请填写APP在微信开发平台申请的应用ID等信息。",type:"info",closable:!1,"show-icon":""}})],1),s("el-form-item",{attrs:{label:"AppID",prop:"app_id"}},[s("el-input",{staticClass:"ls-input m-r-10",attrs:{size:"small"},model:{value:t.form.app_id,callback:function(s){t.$set(t.form,"app_id",s)},expression:"form.app_id"}})],1),s("el-form-item",{attrs:{label:"AppSecret",prop:"app_secret"}},[s("el-input",{staticClass:"ls-input m-r-10",attrs:{size:"small"},model:{value:t.form.app_secret,callback:function(s){t.$set(t.form,"app_secret",s)},expression:"form.app_secret"}})],1)],1)])]),s("div",{staticClass:"bg-white ls-fixed-footer"},[s("div",{staticClass:"row-center flex",staticStyle:{height:"100%"}},[s("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(s){return t.putAppSettings()}}},[t._v("保存")])],1)])],1)},l=[],i=e("9ab4"),r=e("1b40"),o=e("f175");const n=()=>o["a"].get("/settings.app.app_setting/getConfig"),c=t=>o["a"].post("/settings.app.app_setting/setConfig",t);let p=class extends r["e"]{constructor(){super(...arguments),this.form={ios_download_url:"",android_download_url:"",download_title:"",app_id:"",app_secret:""},this.formRules={app_id:[{required:!0,message:"必填项不能为空",trigger:"blur"}],app_secret:[{required:!0,message:"必填项不能为空",trigger:"blur"}]}}getAppSettings(){n().then(t=>{this.form=t}).catch(()=>{console.log("数据请求失败!")})}putAppSettings(){this.$refs.formRef.validate(t=>{if(!t)return this.$message.error("请完善信息");c(this.form).then(t=>{this.getAppSettings()}).catch(()=>{})})}created(){this.getAppSettings()}};p=Object(i["a"])([Object(r["a"])({components:{}})],p);var d=p,m=d,f=(e("c883"),e("2877")),u=Object(f["a"])(m,a,l,!1,null,"65ab81c6",null);s["default"]=u.exports},"5f7a":function(t,s,e){},c883:function(t,s,e){"use strict";e("5f7a")}}]);
//# sourceMappingURL=chunk-4fe34cbf.7524ab8f.js.map