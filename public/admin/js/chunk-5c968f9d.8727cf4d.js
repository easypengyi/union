(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c968f9d"],{b863:function(e,t,a){"use strict";a("db69")},db69:function(e,t,a){},f1c7:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"channel-mp_wechat-menu"},[t("div",{staticClass:"ls-card"},[t("el-alert",{attrs:{title:"温馨提示：点击保存并发布菜单后，菜单才会发布至微信公众号，需提前设置好公众号相关配置。",type:"info",closable:!1,"show-icon":""}})],1),t("div",{staticClass:"m-t-16",staticStyle:{display:"flex"}},[t("div",{staticClass:"mp_wechat__phone"},[t("div",{staticClass:"mp_wechat__phone-menu mp_wechat__phone-active"},e._l(e.form.menu,(function(a,r){return t("div",{key:r,staticClass:"mp_wechat__phone-menu-item"},[t("div",{staticClass:"mp_wechat__phone-menu-item--title"},[t("span",[e._v(e._s(a.name))])]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.form.menu[r].has_menu,expression:"form.menu[index].has_menu"}],staticClass:"mp_wechat__phone-submenu"},e._l(e.form.menu[r].sub_button,(function(a,r){return t("div",{key:r,staticClass:"mp_wechat__phone-submenu-item"},[e._v(e._s(a.name)+" ")])})),0)])})),0)]),t("div",{staticClass:"ls-card m-l-16 mp_wechat__form"},[t("div",{staticClass:"mp_wechat__form--title"},[e._v("菜单配置")]),t("div",{staticClass:"m-t-16"},[t("el-button",{attrs:{type:"primary",plain:"",size:"small"},on:{click:e.onMenuAdd}},[t("i",{staticClass:"el-icon-plus"}),t("span",[e._v("新增主菜单（"+e._s(e.form.menu.length||0)+"/3）")])])],1),t("div",{staticClass:"mp_wechat__form--content m-t-24"},e._l(e.form.menu,(function(a,r){return t("div",{key:r,staticClass:"menu-item"},[t("div",{staticClass:"menu-item__delete"},[t("ls-dialog",{staticClass:"m-l-10 inline",attrs:{top:"35vh"},on:{confirm:function(t){return e.handleMenuDel(r)}}},[t("i",{staticClass:"el-icon-delete primary pointer",attrs:{slot:"trigger"},slot:"trigger"})])],1),t("el-form",{ref:"form",refInFor:!0,attrs:{model:e.form.menu[r],rules:e.rules,"label-position":"top",size:"small"}},[t("el-form-item",{attrs:{label:"主菜单",prop:"name"}},[t("el-input",{staticClass:"ls-input",attrs:{"show-word-limit":""},model:{value:e.form.menu[r].name,callback:function(t){e.$set(e.form.menu[r],"name",t)},expression:"form.menu[index].name"}})],1),t("el-form-item",{attrs:{label:"主菜单类型"}},[t("el-radio-group",{model:{value:e.form.menu[r].has_menu,callback:function(t){e.$set(e.form.menu[r],"has_menu",t)},expression:"form.menu[index].has_menu"}},[t("el-radio",{attrs:{label:!1}},[e._v("不配置子菜单")]),t("el-radio",{attrs:{label:!0}},[e._v("配置子菜单")])],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.form.menu[r].has_menu,expression:"!form.menu[index].has_menu"}]},[t("MPWechatMenuForm",{attrs:{mode:"index",url:e.form.menu[r].url,appid:e.form.menu[r].appid,type:e.form.menu[r].type,pagepath:e.form.menu[r].pagepath},on:{"update:url":function(t){return e.$set(e.form.menu[r],"url",t)},"update:appid":function(t){return e.$set(e.form.menu[r],"appid",t)},"update:type":function(t){return e.$set(e.form.menu[r],"type",t)},"update:pagepath":function(t){return e.$set(e.form.menu[r],"pagepath",t)}}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.form.menu[r].has_menu,expression:"form.menu[index].has_menu"}]},[t("ul",e._l(e.form.menu[r].sub_button,(function(a,n){return t("li",{key:n,staticClass:"flex",staticStyle:{padding:"8px"}},[t("span",{staticStyle:{"margin-right":"auto"}},[e._v(e._s(a.name))]),t("ls-dialog",{ref:`SubMenuDialogEdit-${r}-${n}`,refInFor:!0,staticClass:"inline",attrs:{top:"25vh",title:"子菜单",async:!0,disabled:!0,clickModalClose:!1},on:{close:function(t){e.$refs[`SubMenuFormEdit-${r}-${n}`][0].resetFrom()},confirm:function(t){return e.onSubMenuEdit(r,n)}}},[t("MPWechatMenuForm",{ref:`SubMenuFormEdit-${r}-${n}`,refInFor:!0,attrs:{name:a.name,url:a.url,appid:a.appid,type:a.type,pagepath:a.pagepath}}),t("i",{staticClass:"el-icon-edit-outline pointer",attrs:{slot:"trigger"},on:{click:function(t){e.$refs[`SubMenuDialogEdit-${r}-${n}`][0].open()}},slot:"trigger"})],1),t("ls-dialog",{staticClass:"m-l-10 inline",attrs:{top:"35vh"},on:{confirm:function(t){return e.handleSubMenuDel(r,n)}}},[t("i",{staticClass:"el-icon-delete m-l-16 pointer",attrs:{slot:"trigger"},slot:"trigger"})])],1)})),0),t("ls-dialog",{ref:"SubMenuDialogAdd-"+r,refInFor:!0,staticClass:"inline",attrs:{top:"25vh",async:!0,disabled:!0,clickModalClose:!1,title:"子菜单"},on:{confirm:function(t){return e.handleSubMenuAdd(e.form.menu[r],r)}}},[t("MPWechatMenuForm",{ref:"SubMenuFormAdd-"+r,refInFor:!0}),t("el-button",{attrs:{slot:"trigger",type:"text",size:"small"},on:{click:function(t){e.$refs["SubMenuDialogAdd-"+r][0].open()}},slot:"trigger"},[e._v("添加子菜单（"+e._s(e.form.menu[r].sub_button.length||0)+"/5）")])],1)],1)],1)],1)})),0)])]),t("div",{staticClass:"bg-white ls-fixed-footer"},[t("div",{staticClass:"row-center flex",staticStyle:{height:"100%"}},[t("el-button",{attrs:{size:"small",type:"normal"},on:{click:e.onFromSave}},[e._v("保存")]),t("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.onFromPublish}},[e._v("保存并发布")])],1)])])},n=[],i=a("9ab4"),s=a("1b40"),o=a("f7b7"),l=a("0a6d"),u=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("el-form",{ref:"form",attrs:{inline:!0,"label-position":"top",model:e.form,rules:e.rules}},["index"!==e.mode?t("el-form-item",{attrs:{label:"菜单名称",prop:"name"}},[t("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1):e._e(),t("el-form-item",{attrs:{label:"index"!==e.mode?"菜单类型":"",prop:"type"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[t("el-option",{attrs:{label:"网页",value:"view"}}),t("el-option",{attrs:{label:"小程序",value:"miniprogram"}})],1)],1),"view"===e.form.type?t("div",[t("el-form-item",{attrs:{label:"网址",prop:"url",required:""}},[t("el-input",{model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1)],1):e._e(),"miniprogram"===e.form.type?t("div",[t("el-form-item",{attrs:{label:"网址",prop:"url",required:""}},[t("el-input",{model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1),t("el-form-item",{attrs:{label:"AppID",prop:"appid",required:""}},[t("el-input",{model:{value:e.form.appid,callback:function(t){e.$set(e.form,"appid",t)},expression:"form.appid"}})],1),t("el-form-item",{attrs:{label:"路径",prop:"pagepath",required:""}},[t("el-input",{model:{value:e.form.pagepath,callback:function(t){e.$set(e.form,"pagepath",t)},expression:"form.pagepath"}})],1)],1):e._e()],1)},m=[];a("d9e2");let c=class extends s["e"]{constructor(){super(...arguments),this.form={name:"",type:"",url:"",appid:"",pagepath:""},this.rules={name:[{required:!0,message:"必填项不能为空",trigger:["blur","change"]},{min:1,max:18,message:"长度限制18个字符",trigger:["blur","change"]}],type:[{required:!0,message:"必填项不能为空",trigger:["blur","change"]}],url:[{required:!0,message:"必填项不能为空",trigger:["blur","change"]},{pattern:/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/,message:"请输入合法链接",trigger:["blur","change"]}],appid:[{validator:(e,t,a)=>{t||"miniprogram"!==this.form.type?a():a(new Error)},message:"必填项不能为空",trigger:["blur","change"]}],pagepath:[{validator:(e,t,a)=>{t||"miniprogram"!==this.form.type?a():a(new Error)},message:"必填项不能为空",trigger:["blur","change"]}]}}validateForm(){const e=this.$refs["form"];let t=!1;return e.validate(e=>t=e),{valid:t,data:{...this.form}}}clearFrom(){Object.keys(this.form).forEach(e=>{this.$set(this.form,e,"")})}resetFrom(){const e=this.$refs["form"];e.resetFields()}handler(e){this.$emit("update:name",e.name),this.$emit("update:type",e.type),this.$emit("update:url",e.url),this.$emit("update:appid",e.appid),this.$emit("update:pagepath",e.pagepath)}handlerName(e){this.$set(this.form,"name",e)}handlerType(e){this.$set(this.form,"type",e)}handlerUrl(e){this.$set(this.form,"url",e)}handlerAppid(e){this.$set(this.form,"appid",e)}handlerPagePath(e){this.$set(this.form,"pagepath",e)}};Object(i["a"])([Object(s["c"])({default:"normal"})],c.prototype,"mode",void 0),Object(i["a"])([Object(s["c"])()],c.prototype,"name",void 0),Object(i["a"])([Object(s["c"])()],c.prototype,"type",void 0),Object(i["a"])([Object(s["c"])()],c.prototype,"url",void 0),Object(i["a"])([Object(s["c"])()],c.prototype,"appid",void 0),Object(i["a"])([Object(s["c"])()],c.prototype,"pagepath",void 0),Object(i["a"])([Object(s["f"])("form",{deep:!0})],c.prototype,"handler",null),Object(i["a"])([Object(s["f"])("name",{immediate:!0})],c.prototype,"handlerName",null),Object(i["a"])([Object(s["f"])("type",{immediate:!0})],c.prototype,"handlerType",null),Object(i["a"])([Object(s["f"])("url",{immediate:!0})],c.prototype,"handlerUrl",null),Object(i["a"])([Object(s["f"])("appid",{immediate:!0})],c.prototype,"handlerAppid",null),Object(i["a"])([Object(s["f"])("pagepath",{immediate:!0})],c.prototype,"handlerPagePath",null),c=Object(i["a"])([s["a"]],c);var p=c,d=p,f=a("2877"),h=Object(f["a"])(d,u,m,!1,null,null,null),b=h.exports;let g=class extends s["e"]{constructor(){super(...arguments),this.form={menu:[]},this.rules={name:[{required:!0,message:"必填项不能为空",trigger:["blur","change"]},{min:1,max:12,message:"长度限制12个字符",trigger:["blur","change"]}]}}onMenuAdd(){if(this.form.menu.length>=3)return this.$message.info("主菜单仅限有3项!");this.form.menu.push({name:"",type:"",has_menu:!1,key:"",url:"",appid:"",pagepath:"",sub_button:[]})}handleSubMenuAdd(e,t){const a=this.$refs["SubMenuFormAdd-"+t],r=this.$refs["SubMenuDialogAdd-"+t],{valid:n,data:i}=a[0].validateForm();if(!n)return this.$message.error("表单验证失败!");e.sub_button.push({...i}),this.$message.success("添加成功"),a[0].clearFrom(),r[0].close()}onSubMenuEdit(e,t){var a;const r=this.$refs[`SubMenuFormEdit-${e}-${t}`],n=this.$refs[`SubMenuDialogEdit-${e}-${t}`],{valid:i,data:s}=r[0].validateForm();if(!i)return this.$message.error("表单验证失败!");const o=null===(a=this.form)||void 0===a?void 0:a.menu[e].sub_button;this.$set(o,t,{...s}),this.$message.success("修改成功"),r[0].clearFrom(),n[0].close()}handleMenuDel(e){this.form.menu.splice(e,1)}handleSubMenuDel(e,t){const a=this.form.menu[e];a.sub_button.splice(t,1)}initMPWeChatMenuData(){return new Promise((e,t)=>{Object(o["c"])().then(e=>{e.map(e=>{var t;e.has_menu=!(null===(t=e.sub_button)||void 0===t||!t.length)}),this.$set(this.form,"menu",e)})})}onFromSave(){Object(o["e"])({...this.form}).then(e=>{this.initMPWeChatMenuData(),this.$message.success("保存成功")}).catch(e=>{})}onFromPublish(){Object(o["d"])({...this.form}).then(e=>{this.initMPWeChatMenuData(),this.$message.success("发布成功")}).catch(e=>{})}created(){this.initMPWeChatMenuData()}};g=Object(i["a"])([Object(s["a"])({components:{LsDialog:l["a"],MPWechatMenuForm:b}})],g);var _=g,v=_,y=(a("b863"),Object(f["a"])(v,r,n,!1,null,"9742c102",null));t["default"]=y.exports},f7b7:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"e",(function(){return o})),a.d(t,"d",(function(){return l})),a.d(t,"f",(function(){return u})),a.d(t,"i",(function(){return m})),a.d(t,"h",(function(){return c})),a.d(t,"g",(function(){return p})),a.d(t,"j",(function(){return d})),a.d(t,"k",(function(){return f}));var r=a("f175");const n=()=>r["a"].get("/wechat.official_account_setting/getConfig"),i=e=>r["a"].post("/wechat.official_account_setting/setConfig",e),s=()=>r["a"].get("/wechat.official_account_menu/detail"),o=e=>r["a"].post("/wechat.official_account_menu/save",e),l=e=>r["a"].post("/wechat.official_account_menu/saveAndPublish",e),u=e=>r["a"].post("/wechat.official_account_reply/add",e),m=e=>r["a"].post("/wechat.official_account_reply/edit",e),c=e=>r["a"].get("/wechat.official_account_reply/detail",{params:e}),p=e=>r["a"].post("/wechat.official_account_reply/delete",e),d=e=>r["a"].get("/wechat.official_account_reply/lists",{params:e}),f=e=>r["a"].post("/wechat.official_account_reply/status",e)}}]);
//# sourceMappingURL=chunk-5c968f9d.8727cf4d.js.map