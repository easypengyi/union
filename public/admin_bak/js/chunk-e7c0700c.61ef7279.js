(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7c0700c"],{"31d6":function(t,e,i){},"470d":function(t,e,i){"use strict";i("c83c")},"568b":function(t,e,i){"use strict";i("31d6")},b3ad:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ls-dialog",{ref:"materialDialog",staticClass:"material-select",attrs:{title:"选择"+t.tipsText,width:"1050px",top:"15vh"},on:{confirm:t.handleConfirm}},[t.hiddenTrigger?t._e():i("div",{staticClass:"material-select__trigger clearfix",attrs:{slot:"trigger"},on:{click:function(t){t.stopPropagation()}},slot:"trigger"},[i("draggable",{staticClass:"ls-draggable",attrs:{animation:"300",disabled:t.disabled||t.dragDisabled},on:{update:t.handleChange},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}},t._l(t.fileList,(function(e,a){return i("div",{key:e+a,staticClass:"material-preview ls-del-wrap",class:{"is-disabled":t.disabled,"is-one":1==t.limit},on:{click:function(e){return t.showDialog(!1,a)}}},[t.$scopedSlots.preview?i("div",[t._t("preview",null,{item:t.imageUri(e)})],2):i("file-item",{attrs:{type:t.type,item:{uri:t.imageUri(e)},size:t.size}}),t.enableDelete?i("i",{staticClass:"el-icon-close ls-icon-del",on:{click:function(e){return e.stopPropagation(),t.delImage(a)}}}):t._e()],1)})),0),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showUpload,expression:"showUpload"}],staticClass:"material-upload",class:{"is-disabled":t.disabled,"is-one":1==t.limit},on:{click:function(e){return t.showDialog(!0)}}},[t.$slots.upload?i("div",[t._t("upload")],2):i("div",{staticClass:"upload-btn flex row-center",style:{width:t.size+"px",height:t.size+"px",background:t.uploadBg}},[t._t("default"),t.$slots.default?t._e():i("span",[t._v("添加"+t._s(t.tipsText))])],2)])],1),i("div",{staticClass:"material-wrap"},[i("ls-material",{ref:"material",attrs:{"page-size":15,type:t.type,limit:t.meterialLimit},on:{change:t.selectChange}})],1)])},s=[],l=i("d4ec"),o=i("bee2"),n=i("262e"),r=i("2caf"),c=(i("d81d"),i("a434"),i("99af"),i("9ab4")),d=i("1b40"),u=i("0a6d"),m=i("c6fe"),f=i("e915"),p=i("b76a"),v=i.n(p),b=function(t){Object(n["a"])(i,t);var e=Object(r["a"])(i);function i(){var t;return Object(l["a"])(this,i),t=e.apply(this,arguments),t.isAdd=!0,t.fileList=[],t}return Object(o["a"])(i,[{key:"showUpload",get:function(){var t=this.fileList,e=this.limit;return e-t.length>0}},{key:"meterialLimit",get:function(){return this.isAdd?this.limit?this.limit-this.fileList.length:null:1}},{key:"tipsText",get:function(){switch(this.type){case"image":return"图片";case"video":return"视频"}}},{key:"imageUri",get:function(){var t=this;return function(e){return t.enableDomain?e:t.$getImageUri(e)}}},{key:"valueChange",value:function(t){this.fileList=Array.isArray(t)?t:""==t?[]:[t]}},{key:"showDialog",value:function(){var t,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=arguments.length>1?arguments[1]:void 0;this.disabled||(this.isAdd=e,void 0!==i&&(this.currentIndex=i),null===(t=this.$refs.materialDialog)||void 0===t||t.onTrigger())}},{key:"selectChange",value:function(t){this.select=t}},{key:"handleConfirm",value:function(){var t=this;this.$refs.material.clearSelectList();var e=this.select.map((function(e){return t.enableDomain?e.uri:e.url}));this.isAdd?this.fileList=this.fileList.concat(e):this.fileList.splice(this.currentIndex,1,e.shift()),this.handleChange()}},{key:"delImage",value:function(t){this.fileList.splice(t,1),this.handleChange()}},{key:"handleChange",value:function(){var t=1!=this.limit?this.fileList:this.fileList[0]||"";this.$emit("input",t),this.$emit("change",t),this.fileList=[]}}]),i}(d["e"]);Object(c["a"])([Object(d["c"])({default:function(){return[]}})],b.prototype,"value",void 0),Object(c["a"])([Object(d["c"])({default:1})],b.prototype,"limit",void 0),Object(c["a"])([Object(d["c"])({default:"100"})],b.prototype,"size",void 0),Object(c["a"])([Object(d["c"])({default:!1})],b.prototype,"disabled",void 0),Object(c["a"])([Object(d["c"])({default:!1})],b.prototype,"dragDisabled",void 0),Object(c["a"])([Object(d["c"])({default:!1})],b.prototype,"hiddenTrigger",void 0),Object(c["a"])([Object(d["c"])({default:"image"})],b.prototype,"type",void 0),Object(c["a"])([Object(d["c"])({default:"transparent"})],b.prototype,"uploadBg",void 0),Object(c["a"])([Object(d["c"])({default:!0})],b.prototype,"enableDomain",void 0),Object(c["a"])([Object(d["c"])({default:!0})],b.prototype,"enableDelete",void 0),Object(c["a"])([Object(d["f"])("value",{immediate:!0})],b.prototype,"valueChange",null),b=Object(c["a"])([Object(d["a"])({components:{LsDialog:u["a"],LsMaterial:m["a"],Draggable:v.a,FileItem:f["a"]}})],b);var h=b,g=h,_=(i("568b"),i("2877")),y=Object(_["a"])(g,a,s,!1,null,"1503bff6",null);e["a"]=y.exports},c83c:function(t,e,i){},f6c7:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mp-toutiao"},[i("div",{staticClass:"ls-card"},[i("el-alert",{attrs:{title:"温馨提示：请先前往字节小程序开发平台申请认证字节小程序。",type:"info",closable:!1,"show-icon":""}})],1),i("el-form",{ref:"formRef",attrs:{model:t.form,rules:t.formRules,"label-width":"140px",size:"small"}},[i("div",{staticClass:"ls-card m-t-16"},[i("div",{staticClass:"card-title"},[t._v("开发者ID")]),i("div",{staticClass:"card-content m-t-24"},[i("el-form-item",{attrs:{label:"AppID",prop:"appid"}},[i("el-input",{staticClass:"ls-input",attrs:{size:"small"},model:{value:t.form.appid,callback:function(e){t.$set(t.form,"appid",e)},expression:"form.appid"}})],1),i("el-form-item",{attrs:{label:"AppSecret",prop:"secret"}},[i("el-input",{staticClass:"ls-input",attrs:{size:"small"},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret",e)},expression:"form.secret"}}),i("div",{staticClass:"muted xs m-r-16"},[t._v(" 登录字节小程序开发平台，点击开发管理>开发设置->小程序Key，设置AppID和AppSecret ")])],1),i("el-form-item",{attrs:{label:"SALT",prop:"pay_salt"}},[i("el-input",{staticClass:"ls-input m-r-10",attrs:{size:"small"},model:{value:t.form.pay_salt,callback:function(e){t.$set(t.form,"pay_salt",e)},expression:"form.pay_salt"}}),i("div",{staticClass:"muted xs m-r-16"},[t._v(" 登录字节小程序开发平台进入对应的小程序，点击功能管理>支付->担保交易->担保交易设置->支付回调信息配置，设置SALT ")])],1)],1)]),i("div",{staticClass:"ls-card m-t-16"},[i("div",{staticClass:"card-title"},[t._v("服务器域名")]),i("div",{staticClass:"card-content m-t-24"},[i("el-form-item",{attrs:{label:"request合法域名"}},[i("el-input",{staticClass:"ls-input m-r-10",attrs:{size:"small",disabled:""},model:{value:t.form.request_domain,callback:function(e){t.$set(t.form,"request_domain",e)},expression:"form.request_domain"}}),i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.onCopy(t.form.request_domain)}}},[t._v("复制")]),i("div",{staticClass:"muted xs m-r-16"},[t._v(" 登录字节小程序开发平台进入对应的小程序，点击开发管理>开发设置->服务器域名，填写https协议域名 ")])],1),i("el-form-item",{attrs:{label:"socket合法域名"}},[i("el-input",{staticClass:"ls-input m-r-10",attrs:{size:"small",disabled:""},model:{value:t.form.socket_domain,callback:function(e){t.$set(t.form,"socket_domain",e)},expression:"form.socket_domain"}}),i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.onCopy(t.form.socket_domain)}}},[t._v("复制")]),i("div",{staticClass:"muted xs m-r-16"},[t._v(" 登录字节小程序开发平台进入对应的小程序，点击开发管理>开发设置->服务器域名，填写wss协议域名 ")])],1),i("el-form-item",{attrs:{label:"uploadFile合法域名"}},[i("el-input",{staticClass:"ls-input m-r-10",attrs:{size:"small",disabled:""},model:{value:t.form.upload_file_domain,callback:function(e){t.$set(t.form,"upload_file_domain",e)},expression:"form.upload_file_domain"}}),i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.onCopy(t.form.upload_file_domain)}}},[t._v("复制")]),i("div",{staticClass:"muted xs m-r-16"},[t._v(" 登录字节小程序开发平台进入对应的小程序，点击开发管理>开发设置->服务器域名，填写https协议域名 ")])],1),i("el-form-item",{attrs:{label:"downloadFile合法域名"}},[i("el-input",{staticClass:"ls-input m-r-10",attrs:{size:"small",disabled:""},model:{value:t.form.download_file_domain,callback:function(e){t.$set(t.form,"download_file_domain",e)},expression:"form.download_file_domain"}}),i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.onCopy(t.form.download_file_domain)}}},[t._v("复制")]),i("div",{staticClass:"muted xs m-r-16"},[t._v(" 登录字节小程序开发平台进入对应的小程序，点击开发管理>开发设置->服务器域名，填写https协议域名 ")])],1)],1)]),i("div",{staticClass:"ls-card m-t-16"},[i("div",{staticClass:"card-title"},[t._v("业务域名")]),i("div",{staticClass:"card-content m-t-24"},[i("el-form-item",{attrs:{label:"业务域名"}},[i("el-input",{staticClass:"ls-input m-r-10",attrs:{size:"small",disabled:""},model:{value:t.form.business_domain,callback:function(e){t.$set(t.form,"business_domain",e)},expression:"form.business_domain"}}),i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.onCopy(t.form.business_domain)}}},[t._v("复制")]),i("div",{staticClass:"muted xs m-r-16"},[t._v(" 登录字节小程序开发平台进入对应的小程序，点击开发管理>开发设置->业务域名，填写业务域名 ")])],1)],1)]),i("div",{staticClass:"ls-card m-t-16"},[i("div",{staticClass:"card-title"},[t._v("支付回调信息配置")]),i("div",{staticClass:"card-content m-t-24"},[i("el-form-item",{attrs:{label:"URL(服务器地址)"}},[i("el-input",{staticClass:"ls-input m-r-10",attrs:{size:"small",disabled:""},model:{value:t.form.notify,callback:function(e){t.$set(t.form,"notify",e)},expression:"form.notify"}}),i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.onCopy(t.form.notify)}}},[t._v("复制")]),i("div",{staticClass:"muted xs m-r-16"},[t._v(" 登录字节小程序开发平台进入对应的小程序，点击功能管理>支付->担保交易->担保交易设置->支付回调信息配置，填写URL(服务器地址) ")])],1)],1)])]),i("div",{staticClass:"bg-white ls-fixed-footer"},[i("div",{staticClass:"row-center flex",staticStyle:{height:"100%"}},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.putWechatAppSetting()}}},[t._v("保存")])],1)])],1)},s=[],l=i("d4ec"),o=i("bee2"),n=i("262e"),r=i("2caf"),c=i("9ab4"),d=i("1b40"),u=i("b3ad"),m=i("f175"),f=function(){return m["a"].get("/toutiao.toutiao_setting/getConfig")},p=function(t){return m["a"].post("/toutiao.toutiao_setting/setConfig",t)},v=i("6ddb"),b=function(t){Object(n["a"])(i,t);var e=Object(r["a"])(i);function i(){var t;return Object(l["a"])(this,i),t=e.apply(this,arguments),t.form={name:"",original_id:"",qr_code:"",appid:"",secret:"",pay_salt:"",request_domain:"",socket_domain:"",upload_file_domain:"",download_file_domain:"",udp_domain:"",business_domain:"",url:"",token:"",encoding_aes_key:"",encryption_type:1,data_format:1},t.formRules={appid:[{required:!0,message:"必填项不能为空",trigger:"blur"}],secret:[{required:!0,message:"必填项不能为空",trigger:"blur"}],pay_salt:[{required:!0,message:"必填项不能为空",trigger:"blur"}]},t}return Object(o["a"])(i,[{key:"getWechatAppSetting",value:function(){var t=this;f().then((function(e){t.form=e})).catch((function(){console.log("数据请求失败!")}))}},{key:"putWechatAppSetting",value:function(){var t=this;this.$refs.formRef.validate((function(e){if(!e)return t.$message.error("请完善信息");p(t.form).then((function(e){t.getWechatAppSetting()})).catch((function(){}))}))}},{key:"onCopy",value:function(t){var e=this;Object(v["b"])(t).then((function(){e.$message.success("复制成功")})).catch((function(t){e.$message.error("复制失败"),console.log(t)}))}},{key:"created",value:function(){this.getWechatAppSetting()}}]),i}(d["e"]);b=Object(c["a"])([Object(d["a"])({components:{MaterialSelect:u["a"]}})],b);var h=b,g=h,_=(i("470d"),i("2877")),y=Object(_["a"])(g,a,s,!1,null,"334dc1a6",null);e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-e7c0700c.61ef7279.js.map