(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-367f8d5d"],{"31d6":function(t,e,i){},"568b":function(t,e,i){"use strict";i("31d6")},"9d77":function(t,e,i){"use strict";i("bd3f")},b3ad:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ls-dialog",{ref:"materialDialog",staticClass:"material-select",attrs:{title:"选择"+t.tipsText,width:"1050px",top:"15vh"},on:{confirm:t.handleConfirm}},[t.hiddenTrigger?t._e():i("div",{staticClass:"material-select__trigger clearfix",attrs:{slot:"trigger"},on:{click:function(t){t.stopPropagation()}},slot:"trigger"},[i("draggable",{staticClass:"ls-draggable",attrs:{animation:"300",disabled:t.disabled||t.dragDisabled},on:{update:t.handleChange},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}},t._l(t.fileList,(function(e,a){return i("div",{key:e+a,staticClass:"material-preview ls-del-wrap",class:{"is-disabled":t.disabled,"is-one":1==t.limit},on:{click:function(e){return t.showDialog(!1,a)}}},[t.$scopedSlots.preview?i("div",[t._t("preview",null,{item:t.imageUri(e)})],2):i("file-item",{attrs:{type:t.type,item:{uri:t.imageUri(e)},size:t.size}}),t.enableDelete?i("i",{staticClass:"el-icon-close ls-icon-del",on:{click:function(e){return e.stopPropagation(),t.delImage(a)}}}):t._e()],1)})),0),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showUpload,expression:"showUpload"}],staticClass:"material-upload",class:{"is-disabled":t.disabled,"is-one":1==t.limit},on:{click:function(e){return t.showDialog(!0)}}},[t.$slots.upload?i("div",[t._t("upload")],2):i("div",{staticClass:"upload-btn flex row-center",style:{width:t.size+"px",height:t.size+"px",background:t.uploadBg}},[t._t("default"),t.$slots.default?t._e():i("span",[t._v("添加"+t._s(t.tipsText))])],2)])],1),i("div",{staticClass:"material-wrap"},[i("ls-material",{ref:"material",attrs:{"page-size":15,type:t.type,limit:t.meterialLimit},on:{change:t.selectChange}})],1)])},s=[],l=i("d4ec"),o=i("bee2"),n=i("262e"),r=i("2caf"),c=(i("d81d"),i("a434"),i("99af"),i("9ab4")),d=i("1b40"),m=i("0a6d"),u=i("c6fe"),f=i("e915"),p=i("b76a"),b=i.n(p),v=function(t){Object(n["a"])(i,t);var e=Object(r["a"])(i);function i(){var t;return Object(l["a"])(this,i),t=e.apply(this,arguments),t.isAdd=!0,t.fileList=[],t}return Object(o["a"])(i,[{key:"showUpload",get:function(){var t=this.fileList,e=this.limit;return e-t.length>0}},{key:"meterialLimit",get:function(){return this.isAdd?this.limit?this.limit-this.fileList.length:null:1}},{key:"tipsText",get:function(){switch(this.type){case"image":return"图片";case"video":return"视频"}}},{key:"imageUri",get:function(){var t=this;return function(e){return t.enableDomain?e:t.$getImageUri(e)}}},{key:"valueChange",value:function(t){this.fileList=Array.isArray(t)?t:""==t?[]:[t]}},{key:"showDialog",value:function(){var t,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=arguments.length>1?arguments[1]:void 0;this.disabled||(this.isAdd=e,void 0!==i&&(this.currentIndex=i),null===(t=this.$refs.materialDialog)||void 0===t||t.onTrigger())}},{key:"selectChange",value:function(t){this.select=t}},{key:"handleConfirm",value:function(){var t=this;this.$refs.material.clearSelectList();var e=this.select.map((function(e){return t.enableDomain?e.uri:e.url}));this.isAdd?this.fileList=this.fileList.concat(e):this.fileList.splice(this.currentIndex,1,e.shift()),this.handleChange()}},{key:"delImage",value:function(t){this.fileList.splice(t,1),this.handleChange()}},{key:"handleChange",value:function(){var t=1!=this.limit?this.fileList:this.fileList[0]||"";this.$emit("input",t),this.$emit("change",t),this.fileList=[]}}]),i}(d["e"]);Object(c["a"])([Object(d["c"])({default:function(){return[]}})],v.prototype,"value",void 0),Object(c["a"])([Object(d["c"])({default:1})],v.prototype,"limit",void 0),Object(c["a"])([Object(d["c"])({default:"100"})],v.prototype,"size",void 0),Object(c["a"])([Object(d["c"])({default:!1})],v.prototype,"disabled",void 0),Object(c["a"])([Object(d["c"])({default:!1})],v.prototype,"dragDisabled",void 0),Object(c["a"])([Object(d["c"])({default:!1})],v.prototype,"hiddenTrigger",void 0),Object(c["a"])([Object(d["c"])({default:"image"})],v.prototype,"type",void 0),Object(c["a"])([Object(d["c"])({default:"transparent"})],v.prototype,"uploadBg",void 0),Object(c["a"])([Object(d["c"])({default:!0})],v.prototype,"enableDomain",void 0),Object(c["a"])([Object(d["c"])({default:!0})],v.prototype,"enableDelete",void 0),Object(c["a"])([Object(d["f"])("value",{immediate:!0})],v.prototype,"valueChange",null),v=Object(c["a"])([Object(d["a"])({components:{LsDialog:m["a"],LsMaterial:u["a"],Draggable:b.a,FileItem:f["a"]}})],v);var h=v,_=h,g=(i("568b"),i("2877")),C=Object(g["a"])(_,a,s,!1,null,"1503bff6",null);e["a"]=C.exports},bd3f:function(t,e,i){},dfab:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wechat_app"},[i("div",{staticClass:"ls-card"},[i("el-alert",{attrs:{title:"温馨提示：请先前往微信小程序后台申请认证微信小程序。",type:"info",closable:!1,"show-icon":""}})],1),i("el-form",{ref:"formRef",attrs:{model:t.form,rules:t.formRules,"label-width":"140px",size:"small"}},[i("div",{staticClass:"ls-card m-t-16"},[i("div",{staticClass:"card-title"},[t._v("微信小程序")]),i("div",{staticClass:"card-content m-t-24"},[i("el-form-item",{attrs:{label:"小程序名称"}},[i("el-input",{staticClass:"ls-input",attrs:{size:"small"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),i("el-form-item",{attrs:{label:"原始ID"}},[i("el-input",{staticClass:"ls-input",attrs:{size:"small"},model:{value:t.form.original_id,callback:function(e){t.$set(t.form,"original_id",e)},expression:"form.original_id"}})],1),i("el-form-item",{attrs:{label:"小程序码"}},[i("material-select",{attrs:{limit:1},model:{value:t.form.qr_code,callback:function(e){t.$set(t.form,"qr_code",e)},expression:"form.qr_code"}}),i("div",{staticClass:"flex"},[i("div",{staticClass:"muted xs m-r-16"},[t._v("建议尺寸：400*400像素，支持jpg，jpeg，png格式")])])],1)],1)]),i("div",{staticClass:"ls-card m-t-16"},[i("div",{staticClass:"card-title"},[t._v("开发者ID")]),i("div",{staticClass:"card-content m-t-24"},[i("el-form-item",{attrs:{label:"AppID",prop:"app_id"}},[i("el-input",{staticClass:"ls-input",attrs:{size:"small"},model:{value:t.form.app_id,callback:function(e){t.$set(t.form,"app_id",e)},expression:"form.app_id"}})],1),i("el-form-item",{attrs:{label:"AppSecret",prop:"app_secret"}},[i("el-input",{staticClass:"ls-input",attrs:{size:"small"},model:{value:t.form.app_secret,callback:function(e){t.$set(t.form,"app_secret",e)},expression:"form.app_secret"}}),i("div",{staticClass:"muted xs m-r-16"},[t._v(" 小程序账号登录微信公众平台，点击开发>开发设置->开发者ID，设置AppID和AppSecret ")])],1)],1)]),i("div",{staticClass:"ls-card m-t-16"},[i("div",{staticClass:"card-title"},[t._v("服务器域名")]),i("div",{staticClass:"card-content m-t-24"},[i("el-form-item",{attrs:{label:"request合法域名"}},[i("el-input",{staticClass:"ls-input m-r-10",attrs:{size:"small",disabled:""},model:{value:t.form.request_domain,callback:function(e){t.$set(t.form,"request_domain",e)},expression:"form.request_domain"}}),i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.onCopy(t.form.request_domain)}}},[t._v("复制")]),i("div",{staticClass:"muted xs m-r-16"},[t._v(" 小程序账号登录微信公众平台，点击开发>开发设置->服务器域名，填写https协议域名 ")])],1),i("el-form-item",{attrs:{label:"socket合法域名"}},[i("el-input",{staticClass:"ls-input m-r-10",attrs:{size:"small",disabled:""},model:{value:t.form.socket_domain,callback:function(e){t.$set(t.form,"socket_domain",e)},expression:"form.socket_domain"}}),i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.onCopy(t.form.socket_domain)}}},[t._v("复制")]),i("div",{staticClass:"muted xs m-r-16"},[t._v(" 小程序账号登录微信公众平台，点击开发>开发设置->服务器域名，填写wss协议域名 ")])],1),i("el-form-item",{attrs:{label:"uploadFile合法域名"}},[i("el-input",{staticClass:"ls-input m-r-10",attrs:{size:"small",disabled:""},model:{value:t.form.upload_file_domain,callback:function(e){t.$set(t.form,"upload_file_domain",e)},expression:"form.upload_file_domain"}}),i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.onCopy(t.form.upload_file_domain)}}},[t._v("复制")]),i("div",{staticClass:"muted xs m-r-16"},[t._v(" 小程序账号登录微信公众平台，点击开发>开发设置->服务器域名，填写https协议域名 ")])],1),i("el-form-item",{attrs:{label:"downloadFile合法域名"}},[i("el-input",{staticClass:"ls-input m-r-10",attrs:{size:"small",disabled:""},model:{value:t.form.download_file_domain,callback:function(e){t.$set(t.form,"download_file_domain",e)},expression:"form.download_file_domain"}}),i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.onCopy(t.form.download_file_domain)}}},[t._v("复制")]),i("div",{staticClass:"muted xs m-r-16"},[t._v(" 小程序账号登录微信公众平台，点击开发>开发设置->服务器域名，填写https协议域名 ")])],1),i("el-form-item",{attrs:{label:"udp合法域名"}},[i("el-input",{staticClass:"ls-input m-r-10",attrs:{size:"small",disabled:""},model:{value:t.form.udp_domain,callback:function(e){t.$set(t.form,"udp_domain",e)},expression:"form.udp_domain"}}),i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.onCopy(t.form.udp_domain)}}},[t._v("复制")]),i("div",{staticClass:"muted xs m-r-16"},[t._v(" 小程序账号登录微信公众平台，点击开发>开发设置->服务器域名，填写udp协议域名 ")])],1)],1)]),i("div",{staticClass:"ls-card m-t-16"},[i("div",{staticClass:"card-title"},[t._v("业务域名")]),i("div",{staticClass:"card-content m-t-24"},[i("el-form-item",{attrs:{label:"业务域名"}},[i("el-input",{staticClass:"ls-input m-r-10",attrs:{size:"small",disabled:""},model:{value:t.form.business_domain,callback:function(e){t.$set(t.form,"business_domain",e)},expression:"form.business_domain"}}),i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.onCopy(t.form.business_domain)}}},[t._v("复制")]),i("div",{staticClass:"muted xs m-r-16"},[t._v(" 小程序账号登录微信公众平台，点击开发>开发设置->业务域名，填写业务域名 ")])],1)],1)])]),i("div",{staticClass:"bg-white ls-fixed-footer"},[i("div",{staticClass:"row-center flex",staticStyle:{height:"100%"}},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.putWechatAppSetting()}}},[t._v("保存")])],1)])],1)},s=[],l=i("d4ec"),o=i("bee2"),n=i("262e"),r=i("2caf"),c=i("9ab4"),d=i("1b40"),m=i("b3ad"),u=i("f175"),f=function(){return u["a"].get("/wechat.mini_program_setting/getConfig")},p=function(t){return u["a"].post("/wechat.mini_program_setting/setConfig",t)},b=i("6ddb"),v=function(t){Object(n["a"])(i,t);var e=Object(r["a"])(i);function i(){var t;return Object(l["a"])(this,i),t=e.apply(this,arguments),t.form={name:"",original_id:"",qr_code:"",app_id:"",app_secret:"",request_domain:"",socket_domain:"",upload_file_domain:"",download_file_domain:"",udp_domain:"",business_domain:"",url:"",token:"",encoding_aes_key:"",encryption_type:1,data_format:1},t.formRules={app_id:[{required:!0,message:"必填项不能为空",trigger:"blur"}],app_secret:[{required:!0,message:"必填项不能为空",trigger:"blur"}]},t}return Object(o["a"])(i,[{key:"getWechatAppSetting",value:function(){var t=this;f().then((function(e){t.form=e})).catch((function(){console.log("数据请求失败!")}))}},{key:"putWechatAppSetting",value:function(){var t=this;this.$refs.formRef.validate((function(e){if(!e)return t.$message.error("请完善信息");p(t.form).then((function(e){t.getWechatAppSetting()})).catch((function(){}))}))}},{key:"onCopy",value:function(t){var e=this;Object(b["b"])(t).then((function(){e.$message.success("复制成功")})).catch((function(t){e.$message.error("复制失败"),console.log(t)}))}},{key:"created",value:function(){this.getWechatAppSetting()}}]),i}(d["e"]);v=Object(c["a"])([Object(d["a"])({components:{MaterialSelect:m["a"]}})],v);var h=v,_=h,g=(i("9d77"),i("2877")),C=Object(g["a"])(_,a,s,!1,null,"2b91d0ba",null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-367f8d5d.725c41d5.js.map