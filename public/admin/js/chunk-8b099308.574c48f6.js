(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b099308"],{"239d":function(t,e,i){},6914:function(t,e,i){"use strict";i("c2a6")},b3ad:function(t,e,i){"use strict";var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ls-dialog",{ref:"materialDialog",staticClass:"material-select",attrs:{title:"选择"+t.tipsText,width:"1050px",top:"15vh"},on:{confirm:t.handleConfirm}},[t.hiddenTrigger?t._e():e("div",{staticClass:"material-select__trigger clearfix",attrs:{slot:"trigger"},on:{click:function(t){t.stopPropagation()}},slot:"trigger"},[e("draggable",{staticClass:"ls-draggable",attrs:{animation:"300",disabled:t.disabled||t.dragDisabled},on:{update:t.handleChange},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}},t._l(t.fileList,(function(i,s){return e("div",{key:i+s,staticClass:"material-preview ls-del-wrap",class:{"is-disabled":t.disabled,"is-one":1==t.limit},on:{click:function(e){return t.showDialog(!1,s)}}},[t.$scopedSlots.preview?e("div",[t._t("preview",null,{item:t.imageUri(i)})],2):e("file-item",{attrs:{type:t.type,item:{uri:t.imageUri(i)},size:t.size}}),t.enableDelete?e("i",{staticClass:"el-icon-close ls-icon-del",on:{click:function(e){return e.stopPropagation(),t.delImage(s)}}}):t._e()],1)})),0),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showUpload,expression:"showUpload"}],staticClass:"material-upload",class:{"is-disabled":t.disabled,"is-one":1==t.limit},on:{click:function(e){return t.showDialog(!0)}}},[t.$slots.upload?e("div",[t._t("upload")],2):e("div",{staticClass:"upload-btn flex row-center",style:{width:t.size+"px",height:t.size+"px",background:t.uploadBg}},[t._t("default"),t.$slots.default?t._e():e("span",[t._v("添加"+t._s(t.tipsText))])],2)])],1),e("div",{staticClass:"material-wrap"},[e("ls-material",{ref:"material",attrs:{"page-size":15,type:t.type,limit:t.meterialLimit},on:{change:t.selectChange}})],1)])},a=[],l=i("9ab4"),o=i("1b40"),r=i("0a6d"),n=i("c6fe"),c=i("e915"),d=i("b76a"),m=i.n(d);let u=class extends o["e"]{constructor(){super(...arguments),this.isAdd=!0,this.fileList=[]}get showUpload(){const{fileList:t,limit:e}=this;return e-t.length>0}get meterialLimit(){return this.isAdd?this.limit?this.limit-this.fileList.length:null:1}get tipsText(){switch(this.type){case"image":return"图片";case"video":return"视频"}}get imageUri(){return t=>this.enableDomain?t:this.$getImageUri(t)}valueChange(t){this.fileList=Array.isArray(t)?t:""==t?[]:[t]}showDialog(t=!0,e){var i;this.disabled||(this.isAdd=t,void 0!==e&&(this.currentIndex=e),null===(i=this.$refs.materialDialog)||void 0===i||i.onTrigger())}selectChange(t){this.select=t}handleConfirm(){this.$refs.material.clearSelectList();const t=this.select.map(t=>this.enableDomain?t.uri:t.url);this.isAdd?this.fileList=this.fileList.concat(t):this.fileList.splice(this.currentIndex,1,t.shift()),this.handleChange()}delImage(t){this.fileList.splice(t,1),this.handleChange()}handleChange(){const t=1!=this.limit?this.fileList:this.fileList[0]||"";this.$emit("input",t),this.$emit("change",t),this.fileList=[]}};Object(l["a"])([Object(o["c"])({default:()=>[]})],u.prototype,"value",void 0),Object(l["a"])([Object(o["c"])({default:1})],u.prototype,"limit",void 0),Object(l["a"])([Object(o["c"])({default:"100"})],u.prototype,"size",void 0),Object(l["a"])([Object(o["c"])({default:!1})],u.prototype,"disabled",void 0),Object(l["a"])([Object(o["c"])({default:!1})],u.prototype,"dragDisabled",void 0),Object(l["a"])([Object(o["c"])({default:!1})],u.prototype,"hiddenTrigger",void 0),Object(l["a"])([Object(o["c"])({default:"image"})],u.prototype,"type",void 0),Object(l["a"])([Object(o["c"])({default:"transparent"})],u.prototype,"uploadBg",void 0),Object(l["a"])([Object(o["c"])({default:!0})],u.prototype,"enableDomain",void 0),Object(l["a"])([Object(o["c"])({default:!0})],u.prototype,"enableDelete",void 0),Object(l["a"])([Object(o["f"])("value",{immediate:!0})],u.prototype,"valueChange",null),u=Object(l["a"])([Object(o["a"])({components:{LsDialog:r["a"],LsMaterial:n["a"],Draggable:m.a,FileItem:c["a"]}})],u);var p=u,f=p,h=(i("fb48"),i("2877")),_=Object(h["a"])(f,s,a,!1,null,"1503bff6",null);e["a"]=_.exports},bd1a:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"channel-mp_wechat-index"},[e("div",{staticClass:"ls-card"},[e("el-alert",{attrs:{title:"温馨提示：请先前往微信公众号后台申请认证微信公众号-服务号。",type:"info",closable:!1,"show-icon":""}})],1),e("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"120px",size:"small"}},[e("div",{staticClass:"ls-card m-t-16"},[e("div",{staticClass:"card-title"},[t._v("微信公众号")]),e("div",{staticClass:"card-content m-t-24"},[e("el-form-item",{attrs:{label:"名称",prop:"name"}},[e("el-input",{staticClass:"ls-input",attrs:{"show-word-limit":""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("el-form-item",{attrs:{label:"原始ID",prop:"original_id"}},[e("el-input",{staticClass:"ls-input",attrs:{"show-word-limit":""},model:{value:t.form.original_id,callback:function(e){t.$set(t.form,"original_id",e)},expression:"form.original_id"}})],1),e("el-form-item",{attrs:{label:"二维码",prop:"qr_code"}},[e("material-select",{attrs:{limit:1},model:{value:t.form.qr_code,callback:function(e){t.$set(t.form,"qr_code",e)},expression:"form.qr_code"}}),e("div",{staticClass:"muted xs m-r-16"},[t._v("建议尺寸：宽400px*高400px。jpg，jpeg，png格式")])],1)],1)]),e("div",{staticClass:"ls-card m-t-16"},[e("div",{staticClass:"card-title"},[t._v("公众号开发者信息")]),e("div",{staticClass:"card-content m-t-24"},[e("el-form-item",{attrs:{label:"AppID",prop:"app_id"}},[e("el-input",{staticClass:"ls-input",attrs:{"show-word-limit":""},model:{value:t.form.app_id,callback:function(e){t.$set(t.form,"app_id",e)},expression:"form.app_id"}})],1),e("el-form-item",{attrs:{label:"AppSecret",prop:"app_secret"}},[e("el-input",{staticClass:"ls-input",attrs:{"show-word-limit":""},model:{value:t.form.app_secret,callback:function(e){t.$set(t.form,"app_secret",e)},expression:"form.app_secret"}}),e("div",{staticClass:"muted xs m-r-16"},[t._v("登录微信公众平台，点击开发>基本配置>公众号开发信息，设置AppID和AppSecret")])],1)],1)]),e("div",{staticClass:"ls-card m-t-16"},[e("div",{staticClass:"card-title"},[t._v("服务器配置")]),e("div",{staticClass:"card-content m-t-24"},[e("el-form-item",{attrs:{label:"URL"}},[e("el-input",{staticClass:"ls-input m-r-16",attrs:{"show-word-limit":"",disabled:""},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}}),e("el-button",{on:{click:function(e){return t.handleCopy(t.form.url)}}},[t._v("复制")]),e("div",{staticClass:"muted xs"},[t._v("登录微信公众平台，点击开发>基本配置>服务器配置，填写服务器地址（URL）")])],1),e("el-form-item",{attrs:{label:"Token",prop:"token"}},[e("el-input",{staticClass:"ls-input",attrs:{"show-word-limit":""},model:{value:t.form.token,callback:function(e){t.$set(t.form,"token",e)},expression:"form.token"}}),e("div",{staticClass:"muted xs"},[t._v("登录微信公众平台，点击开发>基本配置>服务器配置，设置令牌Token。不填默认为“likeshop”")])],1),e("el-form-item",{attrs:{label:"EncodingAESKey",prop:"encoding_aes_key"}},[e("el-input",{staticClass:"ls-input",attrs:{"show-word-limit":""},model:{value:t.form.encoding_aes_key,callback:function(e){t.$set(t.form,"encoding_aes_key",e)},expression:"form.encoding_aes_key"}}),e("div",{staticClass:"muted xs"},[t._v("消息加密密钥由43位字符组成，字符范围为A-Z,a-z,0-9")])],1),e("el-form-item",{attrs:{label:"消息加密方式",prop:"encryption_type"}},[e("el-radio-group",{model:{value:t.form.encryption_type,callback:function(e){t.$set(t.form,"encryption_type",e)},expression:"form.encryption_type"}},[e("el-radio",{staticClass:"form__item-encryption",attrs:{label:1}},[t._v("明文模式 (不使用消息体加解密功能，安全系数较低)")]),e("el-radio",{staticClass:"form__item-encryption",attrs:{label:2}},[t._v("兼容模式 (明文、密文将共存，方便开发者调试和维护)")]),e("el-radio",{staticClass:"form__item-encryption",attrs:{label:3}},[t._v("安全模式（推荐） (消息包为纯密文，需要开发者加密和解密，安全系数高)")])],1)],1)],1)]),e("div",{staticClass:"ls-card m-t-16"},[e("div",{staticClass:"card-title"},[t._v("功能设置")]),e("div",{staticClass:"card-content m-t-24"},[e("el-form-item",{attrs:{label:"业务域名"}},[e("el-input",{staticClass:"ls-input m-r-16",attrs:{"show-word-limit":"",disabled:""},model:{value:t.form.business_domain,callback:function(e){t.$set(t.form,"business_domain",e)},expression:"form.business_domain"}}),e("el-button",{staticClass:"m-l-16",on:{click:function(e){return t.handleCopy(t.form.business_domain)}}},[t._v("复制")]),e("div",{staticClass:"muted xs"},[t._v("登录微信公众平台，点击设置>公众号设置>功能设置，填写业务域名")])],1),e("el-form-item",{attrs:{label:"JS接口安全域名"}},[e("el-input",{staticClass:"ls-input m-r-16",attrs:{"show-word-limit":"",disabled:""},model:{value:t.form.js_secure_domain,callback:function(e){t.$set(t.form,"js_secure_domain",e)},expression:"form.js_secure_domain"}}),e("el-button",{staticClass:"m-l-16",on:{click:function(e){return t.handleCopy(t.form.js_secure_domain)}}},[t._v("复制")]),e("div",{staticClass:"muted xs"},[t._v("登录微信公众平台，点击设置>公众号设置>功能设置，填写JS接口安全域名")])],1),e("el-form-item",{attrs:{label:"网页授权域名"}},[e("el-input",{staticClass:"ls-input m-r-16",attrs:{"show-word-limit":"",disabled:""},model:{value:t.form.web_auth_domain,callback:function(e){t.$set(t.form,"web_auth_domain",e)},expression:"form.web_auth_domain"}}),e("el-button",{on:{click:function(e){return t.handleCopy(t.form.web_auth_domain)}}},[t._v("复制")]),e("div",{staticClass:"muted xs"},[t._v("登录微信公众平台，点击设置>公众号设置>功能设置，填写网页授权域名")])],1)],1)])]),e("div",{staticClass:"bg-white ls-fixed-footer"},[e("div",{staticClass:"row-center flex",staticStyle:{height:"100%"}},[e("el-button",{attrs:{size:"small"},on:{click:t.onResetFrom}},[t._v("重置")]),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.onSubmitFrom("form")}}},[t._v("保存")])],1)])],1)},a=[],l=i("9ab4"),o=i("1b40"),r=i("b3ad"),n=i("f7b7"),c=i("6ddb");let d=class extends o["e"]{constructor(){super(...arguments),this.form={name:"",original_id:"",qr_code:"",app_id:"",app_secret:"",url:"",token:"",encoding_aes_key:"",encryption_type:"",business_domain:"",js_secure_domain:"",web_auth_domain:""},this.rules={app_id:[{required:!0,message:"必填项不能为空",trigger:"blur"}],app_secret:[{required:!0,message:"必填项不能为空",trigger:"blur"}],encryption_type:[{required:!0,message:"必填项不能为空",trigger:"blur"}]}}initFormData(){Object(n["a"])().then(t=>{for(const e in t)this.form.hasOwnProperty(e)&&(this.form[e]=t[e])}).catch(()=>{this.$message.error("数据加载失败，请刷新重载")})}onResetFrom(){this.initFormData(),this.$message.info("已重置数据")}onSubmitFrom(t){const e=this.$refs[t];console.log(e.validate(t=>t)),e.validate(t=>{if(!t)return this.$message.error("请完善信息");const e=this.$loading({text:"保存中"}),i={...this.form};delete i.url,delete i.business_domain,delete i.js_secure_domain,delete i.web_auth_domain,Object(n["b"])({...i}).then(()=>{this.$message.success("保存成功")}).catch(()=>{this.$message.error("保存失败")}).finally(()=>{e.close()})})}handleCopy(t){Object(c["b"])(t).then(()=>{this.$message.success("复制成功")}).catch(t=>{this.$message.error("复制失败"),console.log(t)})}created(){this.initFormData()}};d=Object(l["a"])([Object(o["a"])({components:{MaterialSelect:r["a"]}})],d);var m=d,u=m,p=(i("6914"),i("2877")),f=Object(p["a"])(u,s,a,!1,null,"4f378cef",null);e["default"]=f.exports},c2a6:function(t,e,i){},f7b7:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return l})),i.d(e,"c",(function(){return o})),i.d(e,"e",(function(){return r})),i.d(e,"d",(function(){return n})),i.d(e,"f",(function(){return c})),i.d(e,"i",(function(){return d})),i.d(e,"h",(function(){return m})),i.d(e,"g",(function(){return u})),i.d(e,"j",(function(){return p})),i.d(e,"k",(function(){return f}));var s=i("f175");const a=()=>s["a"].get("/wechat.official_account_setting/getConfig"),l=t=>s["a"].post("/wechat.official_account_setting/setConfig",t),o=()=>s["a"].get("/wechat.official_account_menu/detail"),r=t=>s["a"].post("/wechat.official_account_menu/save",t),n=t=>s["a"].post("/wechat.official_account_menu/saveAndPublish",t),c=t=>s["a"].post("/wechat.official_account_reply/add",t),d=t=>s["a"].post("/wechat.official_account_reply/edit",t),m=t=>s["a"].get("/wechat.official_account_reply/detail",{params:t}),u=t=>s["a"].post("/wechat.official_account_reply/delete",t),p=t=>s["a"].get("/wechat.official_account_reply/lists",{params:t}),f=t=>s["a"].post("/wechat.official_account_reply/status",t)},fb48:function(t,e,i){"use strict";i("239d")}}]);
//# sourceMappingURL=chunk-8b099308.574c48f6.js.map