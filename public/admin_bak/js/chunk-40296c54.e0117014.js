(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40296c54"],{a254:function(e,t,a){"use strict";a("c69a")},c69a:function(e,t,a){},d81d:function(e,t,a){"use strict";var n=a("23e7"),r=a("b727").map,i=a("1dde"),o=i("map");n({target:"Array",proto:!0,forced:!o},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},f1c7:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"channel-mp_wechat-menu"},[a("div",{staticClass:"ls-card"},[a("el-alert",{attrs:{title:"温馨提示：点击保存并发布菜单后，菜单才会发布至微信公众号，需提前设置好公众号相关配置。",type:"info",closable:!1,"show-icon":""}})],1),a("div",{staticClass:"m-t-16",staticStyle:{display:"flex"}},[a("div",{staticClass:"mp_wechat__phone"},[a("div",{staticClass:"mp_wechat__phone-menu mp_wechat__phone-active"},e._l(e.form.menu,(function(t,n){return a("div",{key:n,staticClass:"mp_wechat__phone-menu-item"},[a("div",{staticClass:"mp_wechat__phone-menu-item--title"},[a("span",[e._v(e._s(t.name))])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.form.menu[n].has_menu,expression:"form.menu[index].has_menu"}],staticClass:"mp_wechat__phone-submenu"},e._l(e.form.menu[n].sub_button,(function(t,n){return a("div",{key:n,staticClass:"mp_wechat__phone-submenu-item"},[e._v(e._s(t.name)+" ")])})),0)])})),0)]),a("div",{staticClass:"ls-card m-l-16 mp_wechat__form"},[a("div",{staticClass:"mp_wechat__form--title"},[e._v("菜单配置")]),a("div",{staticClass:"m-t-16"},[a("el-button",{attrs:{type:"primary",plain:"",size:"small"},on:{click:e.onMenuAdd}},[a("i",{staticClass:"el-icon-plus"}),a("span",[e._v("新增主菜单（"+e._s(e.form.menu.length||0)+"/3）")])])],1),a("div",{staticClass:"mp_wechat__form--content m-t-24"},e._l(e.form.menu,(function(t,n){return a("div",{key:n,staticClass:"menu-item"},[a("div",{staticClass:"menu-item__delete"},[a("ls-dialog",{staticClass:"m-l-10 inline",attrs:{top:"35vh"},on:{confirm:function(t){return e.handleMenuDel(n)}}},[a("i",{staticClass:"el-icon-delete primary pointer",attrs:{slot:"trigger"},slot:"trigger"})])],1),a("el-form",{ref:"form",refInFor:!0,attrs:{model:e.form.menu[n],rules:e.rules,"label-position":"top",size:"small"}},[a("el-form-item",{attrs:{label:"主菜单",prop:"name"}},[a("el-input",{staticClass:"ls-input",attrs:{"show-word-limit":""},model:{value:e.form.menu[n].name,callback:function(t){e.$set(e.form.menu[n],"name",t)},expression:"form.menu[index].name"}})],1),a("el-form-item",{attrs:{label:"主菜单类型"}},[a("el-radio-group",{model:{value:e.form.menu[n].has_menu,callback:function(t){e.$set(e.form.menu[n],"has_menu",t)},expression:"form.menu[index].has_menu"}},[a("el-radio",{attrs:{label:!1}},[e._v("不配置子菜单")]),a("el-radio",{attrs:{label:!0}},[e._v("配置子菜单")])],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.form.menu[n].has_menu,expression:"!form.menu[index].has_menu"}]},[a("MPWechatMenuForm",{attrs:{mode:"index",url:e.form.menu[n].url,appid:e.form.menu[n].appid,type:e.form.menu[n].type,pagepath:e.form.menu[n].pagepath},on:{"update:url":function(t){return e.$set(e.form.menu[n],"url",t)},"update:appid":function(t){return e.$set(e.form.menu[n],"appid",t)},"update:type":function(t){return e.$set(e.form.menu[n],"type",t)},"update:pagepath":function(t){return e.$set(e.form.menu[n],"pagepath",t)}}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.form.menu[n].has_menu,expression:"form.menu[index].has_menu"}]},[a("ul",e._l(e.form.menu[n].sub_button,(function(t,r){return a("li",{key:r,staticClass:"flex",staticStyle:{padding:"8px"}},[a("span",{staticStyle:{"margin-right":"auto"}},[e._v(e._s(t.name))]),a("ls-dialog",{ref:"SubMenuDialogEdit-"+n+"-"+r,refInFor:!0,staticClass:"inline",attrs:{top:"25vh",title:"子菜单",async:!0,disabled:!0,clickModalClose:!1},on:{close:function(t){e.$refs["SubMenuFormEdit-"+n+"-"+r][0].resetFrom()},confirm:function(t){return e.onSubMenuEdit(n,r)}}},[a("MPWechatMenuForm",{ref:"SubMenuFormEdit-"+n+"-"+r,refInFor:!0,attrs:{name:t.name,url:t.url,appid:t.appid,type:t.type,pagepath:t.pagepath}}),a("i",{staticClass:"el-icon-edit-outline pointer",attrs:{slot:"trigger"},on:{click:function(t){e.$refs["SubMenuDialogEdit-"+n+"-"+r][0].open()}},slot:"trigger"})],1),a("ls-dialog",{staticClass:"m-l-10 inline",attrs:{top:"35vh"},on:{confirm:function(t){return e.handleSubMenuDel(n,r)}}},[a("i",{staticClass:"el-icon-delete m-l-16 pointer",attrs:{slot:"trigger"},slot:"trigger"})])],1)})),0),a("ls-dialog",{ref:"SubMenuDialogAdd-"+n,refInFor:!0,staticClass:"inline",attrs:{top:"25vh",async:!0,disabled:!0,clickModalClose:!1,title:"子菜单"},on:{confirm:function(t){return e.handleSubMenuAdd(e.form.menu[n],n)}}},[a("MPWechatMenuForm",{ref:"SubMenuFormAdd-"+n,refInFor:!0}),a("el-button",{attrs:{slot:"trigger",type:"text",size:"small"},on:{click:function(t){e.$refs["SubMenuDialogAdd-"+n][0].open()}},slot:"trigger"},[e._v("添加子菜单（"+e._s(e.form.menu[n].sub_button.length||0)+"/5）")])],1)],1)],1)],1)})),0)])]),a("div",{staticClass:"bg-white ls-fixed-footer"},[a("div",{staticClass:"row-center flex",staticStyle:{height:"100%"}},[a("el-button",{attrs:{size:"small",type:"normal"},on:{click:e.onFromSave}},[e._v("保存")]),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.onFromPublish}},[e._v("保存并发布")])],1)])])},r=[],i=a("5530"),o=a("d4ec"),u=a("bee2"),s=a("262e"),l=a("2caf"),c=(a("99af"),a("a434"),a("d3b7"),a("d81d"),a("9ab4")),m=a("1b40"),p=a("f7b7"),f=a("0a6d"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",attrs:{inline:!0,"label-position":"top",model:e.form,rules:e.rules}},["index"!==e.mode?a("el-form-item",{attrs:{label:"菜单名称",prop:"name"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1):e._e(),a("el-form-item",{attrs:{label:"index"!==e.mode?"菜单类型":"",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-option",{attrs:{label:"网页",value:"view"}}),a("el-option",{attrs:{label:"小程序",value:"miniprogram"}})],1)],1),"view"===e.form.type?a("div",[a("el-form-item",{attrs:{label:"网址",prop:"url",required:""}},[a("el-input",{model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1)],1):e._e(),"miniprogram"===e.form.type?a("div",[a("el-form-item",{attrs:{label:"网址",prop:"url",required:""}},[a("el-input",{model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1),a("el-form-item",{attrs:{label:"AppID",prop:"appid",required:""}},[a("el-input",{model:{value:e.form.appid,callback:function(t){e.$set(e.form,"appid",t)},expression:"form.appid"}})],1),a("el-form-item",{attrs:{label:"路径",prop:"pagepath",required:""}},[a("el-input",{model:{value:e.form.pagepath,callback:function(t){e.$set(e.form,"pagepath",t)},expression:"form.pagepath"}})],1)],1):e._e()],1)},h=[],b=(a("159b"),a("b64b"),a("b0c0"),function(e){Object(s["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.form={name:"",type:"",url:"",appid:"",pagepath:""},e.rules={name:[{required:!0,message:"必填项不能为空",trigger:["blur","change"]},{min:1,max:18,message:"长度限制18个字符",trigger:["blur","change"]}],type:[{required:!0,message:"必填项不能为空",trigger:["blur","change"]}],url:[{required:!0,message:"必填项不能为空",trigger:["blur","change"]},{pattern:/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/,message:"请输入合法链接",trigger:["blur","change"]}],appid:[{validator:function(t,a,n){a||"miniprogram"!==e.form.type?n():n(new Error)},message:"必填项不能为空",trigger:["blur","change"]}],pagepath:[{validator:function(t,a,n){a||"miniprogram"!==e.form.type?n():n(new Error)},message:"必填项不能为空",trigger:["blur","change"]}]},e}return Object(u["a"])(a,[{key:"validateForm",value:function(){var e=this.$refs["form"],t=!1;return e.validate((function(e){return t=e})),{valid:t,data:Object(i["a"])({},this.form)}}},{key:"clearFrom",value:function(){var e=this;Object.keys(this.form).forEach((function(t){e.$set(e.form,t,"")}))}},{key:"resetFrom",value:function(){var e=this.$refs["form"];e.resetFields()}},{key:"handler",value:function(e){this.$emit("update:name",e.name),this.$emit("update:type",e.type),this.$emit("update:url",e.url),this.$emit("update:appid",e.appid),this.$emit("update:pagepath",e.pagepath)}},{key:"handlerName",value:function(e){this.$set(this.form,"name",e)}},{key:"handlerType",value:function(e){this.$set(this.form,"type",e)}},{key:"handlerUrl",value:function(e){this.$set(this.form,"url",e)}},{key:"handlerAppid",value:function(e){this.$set(this.form,"appid",e)}},{key:"handlerPagePath",value:function(e){this.$set(this.form,"pagepath",e)}}]),a}(m["e"]));Object(c["a"])([Object(m["c"])({default:"normal"})],b.prototype,"mode",void 0),Object(c["a"])([Object(m["c"])()],b.prototype,"name",void 0),Object(c["a"])([Object(m["c"])()],b.prototype,"type",void 0),Object(c["a"])([Object(m["c"])()],b.prototype,"url",void 0),Object(c["a"])([Object(m["c"])()],b.prototype,"appid",void 0),Object(c["a"])([Object(m["c"])()],b.prototype,"pagepath",void 0),Object(c["a"])([Object(m["f"])("form",{deep:!0})],b.prototype,"handler",null),Object(c["a"])([Object(m["f"])("name",{immediate:!0})],b.prototype,"handlerName",null),Object(c["a"])([Object(m["f"])("type",{immediate:!0})],b.prototype,"handlerType",null),Object(c["a"])([Object(m["f"])("url",{immediate:!0})],b.prototype,"handlerUrl",null),Object(c["a"])([Object(m["f"])("appid",{immediate:!0})],b.prototype,"handlerAppid",null),Object(c["a"])([Object(m["f"])("pagepath",{immediate:!0})],b.prototype,"handlerPagePath",null),b=Object(c["a"])([m["a"]],b);var v=b,g=v,_=a("2877"),y=Object(_["a"])(g,d,h,!1,null,null,null),j=y.exports,w=function(e){Object(s["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.form={menu:[]},e.rules={name:[{required:!0,message:"必填项不能为空",trigger:["blur","change"]},{min:1,max:12,message:"长度限制12个字符",trigger:["blur","change"]}]},e}return Object(u["a"])(a,[{key:"onMenuAdd",value:function(){if(this.form.menu.length>=3)return this.$message.info("主菜单仅限有3项!");this.form.menu.push({name:"",type:"",has_menu:!1,key:"",url:"",appid:"",pagepath:"",sub_button:[]})}},{key:"handleSubMenuAdd",value:function(e,t){var a=this.$refs["SubMenuFormAdd-".concat(t)],n=this.$refs["SubMenuDialogAdd-".concat(t)],r=a[0].validateForm(),o=r.valid,u=r.data;if(!o)return this.$message.error("表单验证失败!");e.sub_button.push(Object(i["a"])({},u)),this.$message.success("添加成功"),a[0].clearFrom(),n[0].close()}},{key:"onSubMenuEdit",value:function(e,t){var a,n=this.$refs["SubMenuFormEdit-".concat(e,"-").concat(t)],r=this.$refs["SubMenuDialogEdit-".concat(e,"-").concat(t)],o=n[0].validateForm(),u=o.valid,s=o.data;if(!u)return this.$message.error("表单验证失败!");var l=null===(a=this.form)||void 0===a?void 0:a.menu[e].sub_button;this.$set(l,t,Object(i["a"])({},s)),this.$message.success("修改成功"),n[0].clearFrom(),r[0].close()}},{key:"handleMenuDel",value:function(e){this.form.menu.splice(e,1)}},{key:"handleSubMenuDel",value:function(e,t){var a=this.form.menu[e];a.sub_button.splice(t,1)}},{key:"initMPWeChatMenuData",value:function(){var e=this;return new Promise((function(t,a){Object(p["c"])().then((function(t){t.map((function(e){var t;e.has_menu=!(null===(t=e.sub_button)||void 0===t||!t.length)})),e.$set(e.form,"menu",t)}))}))}},{key:"onFromSave",value:function(){var e=this;Object(p["e"])(Object(i["a"])({},this.form)).then((function(t){e.initMPWeChatMenuData(),e.$message.success("保存成功")})).catch((function(e){}))}},{key:"onFromPublish",value:function(){var e=this;Object(p["d"])(Object(i["a"])({},this.form)).then((function(t){e.initMPWeChatMenuData(),e.$message.success("发布成功")})).catch((function(e){}))}},{key:"created",value:function(){this.initMPWeChatMenuData()}}]),a}(m["e"]);w=Object(c["a"])([Object(m["a"])({components:{LsDialog:f["a"],MPWechatMenuForm:j}})],w);var O=w,k=O,$=(a("a254"),Object(_["a"])(k,n,r,!1,null,"9742c102",null));t["default"]=$.exports},f7b7:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"e",(function(){return u})),a.d(t,"d",(function(){return s})),a.d(t,"f",(function(){return l})),a.d(t,"i",(function(){return c})),a.d(t,"h",(function(){return m})),a.d(t,"g",(function(){return p})),a.d(t,"j",(function(){return f})),a.d(t,"k",(function(){return d}));var n=a("f175"),r=function(){return n["a"].get("/wechat.official_account_setting/getConfig")},i=function(e){return n["a"].post("/wechat.official_account_setting/setConfig",e)},o=function(){return n["a"].get("/wechat.official_account_menu/detail")},u=function(e){return n["a"].post("/wechat.official_account_menu/save",e)},s=function(e){return n["a"].post("/wechat.official_account_menu/saveAndPublish",e)},l=function(e){return n["a"].post("/wechat.official_account_reply/add",e)},c=function(e){return n["a"].post("/wechat.official_account_reply/edit",e)},m=function(e){return n["a"].get("/wechat.official_account_reply/detail",{params:e})},p=function(e){return n["a"].post("/wechat.official_account_reply/delete",e)},f=function(e){return n["a"].get("/wechat.official_account_reply/lists",{params:e})},d=function(e){return n["a"].post("/wechat.official_account_reply/status",e)}}}]);
//# sourceMappingURL=chunk-40296c54.e0117014.js.map