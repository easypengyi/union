(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16da72c1"],{"33e6":function(t,e,r){"use strict";r("ffcf")},c18c:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"user-tag-edit"},[r("div",{staticClass:"ls-card"},[1==t.form.reply_type?r("el-page-header",{attrs:{content:"add"===t.mode?"新增关注回复":"编辑关注回复"},on:{back:function(e){return t.$router.go(-1)}}}):t._e(),2==t.form.reply_type?r("el-page-header",{attrs:{content:"add"===t.mode?"新增关键字回复":"编辑关键字回复"},on:{back:function(e){return t.$router.go(-1)}}}):t._e(),3==t.form.reply_type?r("el-page-header",{attrs:{content:"add"===t.mode?"新增默认回复":"编辑默认回复"},on:{back:function(e){return t.$router.go(-1)}}}):t._e()],1),r("el-form",{ref:"formRef",attrs:{rules:t.formRules,model:t.form,"label-width":"120px",size:"small"}},[r("div",{staticClass:"ls-card m-t-16"},[r("div",{staticClass:"card-title"},[t._v(" 关注回复 ")]),r("div",{staticClass:"card-content m-t-24"},[r("el-form-item",{attrs:{label:"规则名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入规则名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),r("div",{staticClass:" muted xs"},[t._v("方便通过名称管理关注回复内容")])],1),2==t.form.reply_type?r("el-form-item",{attrs:{label:"关键词",prop:"keyword"}},[r("el-input",{attrs:{placeholder:"请输入关键词"},model:{value:t.form.keyword,callback:function(e){t.$set(t.form,"keyword",e)},expression:"form.keyword"}})],1):t._e(),2==t.form.reply_type?r("el-form-item",{attrs:{label:"排序值",prop:"sort"}},[r("el-input",{attrs:{placeholder:"请输入排序值"},model:{value:t.form.sort,callback:function(e){t.$set(t.form,"sort",t._n(e))},expression:"form.sort"}}),r("div",{staticClass:" muted xs"},[t._v("关键词排序值")])],1):t._e(),2==t.form.reply_type?r("el-form-item",{attrs:{label:"匹配方式",prop:"matching_type"}},[r("el-select",{staticClass:"ls-select",attrs:{placeholder:"请选择匹配方式"},model:{value:t.form.matching_type,callback:function(e){t.$set(t.form,"matching_type",e)},expression:"form.matching_type"}},[r("el-option",{attrs:{label:"全匹配",value:1}}),r("el-option",{attrs:{label:"模糊匹配",value:2}})],1),r("div",{staticClass:" muted xs"},[t._v("模糊匹配时，关键词部分匹配用户输入的内容即可")])],1):t._e(),r("el-form-item",{attrs:{label:"内容类型",prop:"content_type"}},[r("el-select",{staticClass:"ls-select",attrs:{placeholder:"请选择内容类型"},model:{value:t.form.content_type,callback:function(e){t.$set(t.form,"content_type",e)},expression:"form.content_type"}},[r("el-option",{attrs:{label:"文本",value:1}})],1),r("div",{staticClass:" muted xs"},[t._v("暂时支持文本类型")])],1),r("el-form-item",{attrs:{label:"回复内容",prop:"content"}},[r("el-input",{staticClass:"ls-input-textarea",attrs:{placeholder:"请输入回复内容",type:"textarea",rows:6},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),2==t.form.reply_type?r("el-form-item",{attrs:{label:"回复数量",prop:"reply_num",required:""}},[r("el-radio-group",{staticClass:"m-r-16",model:{value:t.form.reply_num,callback:function(e){t.$set(t.form,"reply_num",e)},expression:"form.reply_num"}},[r("el-radio",{staticClass:"m-r-16",attrs:{label:1}},[t._v("回复匹配首条")])],1),r("div",{staticClass:"muted xs m-r-16"},[t._v(" 设置关键词匹配多条时回复的数量，暂时支持回复一条内容 ")])],1):t._e(),r("el-form-item",{attrs:{label:"启用状态"}},[r("div",{staticClass:"flex"},[r("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":t.styleConfig.primary,"inactive-color":"#f4f4f5"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}}),r("span",{staticClass:"m-l-16"},[t._v(t._s(t.form.status?"开启":"关闭"))])],1)])],1)])]),r("div",{staticClass:"bg-white ls-fixed-footer"},[r("div",{staticClass:"row-center flex",staticStyle:{height:"100%"}},[r("el-button",{attrs:{size:"small"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("取消")]),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.onSubmit()}}},[t._v("保存")])],1)])],1)},n=[],o=r("5530"),i=r("d4ec"),c=r("bee2"),s=r("262e"),l=r("2caf"),u=(r("d81d"),r("b64b"),r("9ab4")),f=r("1b40"),m=r("4201"),p=r("f7b7"),d=function(t){Object(s["a"])(r,t);var e=Object(l["a"])(r);function r(){var t;return Object(i["a"])(this,r),t=e.apply(this,arguments),t.mode=m["f"]["ADD"],t.identity=null,t.form={reply_type:1,name:"",content_type:1,content:"",status:1,keyword:"",matching_type:1,sort:"",reply_num:1},t.formRules={name:[{required:!0,message:"请输入规则名称",trigger:"blur"}],keyword:[{required:!0,message:"请输入关键词",trigger:"blur"}],sort:[{required:!0,message:"请输入排序值",trigger:"blur"},{type:"number",min:1,message:"请输入大于0的数字值",trigger:"blur"}],matching_type:[{required:!0,message:"请选择匹配方式",trigger:"change"}],content_type:[{required:!0,message:"请选择内容类型",trigger:"change"}],content:[{required:!0,message:"请输入回复内容",trigger:"blur"}]},t}return Object(c["a"])(r,[{key:"onSubmit",value:function(){var t=this;this.$refs.formRef.validate((function(e){if(e)switch(t.mode){case m["f"]["ADD"]:return t.handleMpWeChatReplyAdd();case m["f"]["EDIT"]:return t.handleMpWeChatReplyEdit()}}))}},{key:"handleMpWeChatReplyAdd",value:function(){var t=this;Object(p["f"])(this.form).then((function(){setTimeout((function(){return t.$router.go(-1)}),500)})).catch((function(){}))}},{key:"handleMpWeChatReplyEdit",value:function(){var t=this,e=this.form,r=this.identity;Object(p["i"])(Object(o["a"])(Object(o["a"])({},e),{},{id:r})).then((function(){setTimeout((function(){return t.$router.go(-1)}),500)})).catch((function(){}))}},{key:"initMpWeChatReplyDetail",value:function(){var t=this;Object(p["h"])({id:this.identity}).then((function(e){Object.keys(e).map((function(r){t.$set(t.form,r,e[r])}))})).catch((function(){}))}},{key:"created",value:function(){var t=this.$route.query;t.mode&&(this.mode=t.mode),t.replyType&&(this.form.reply_type=1*t.replyType),this.mode===m["f"]["EDIT"]&&(this.identity=t.id,this.initMpWeChatReplyDetail())}}]),r}(f["e"]);d=Object(u["a"])([Object(f["a"])({components:{}})],d);var y=d,h=y,_=(r("33e6"),r("2877")),v=Object(_["a"])(h,a,n,!1,null,"430d2946",null);e["default"]=v.exports},d81d:function(t,e,r){"use strict";var a=r("23e7"),n=r("b727").map,o=r("1dde"),i=o("map");a({target:"Array",proto:!0,forced:!i},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},f7b7:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"e",(function(){return c})),r.d(e,"d",(function(){return s})),r.d(e,"f",(function(){return l})),r.d(e,"i",(function(){return u})),r.d(e,"h",(function(){return f})),r.d(e,"g",(function(){return m})),r.d(e,"j",(function(){return p})),r.d(e,"k",(function(){return d}));var a=r("f175"),n=function(){return a["a"].get("/wechat.official_account_setting/getConfig")},o=function(t){return a["a"].post("/wechat.official_account_setting/setConfig",t)},i=function(){return a["a"].get("/wechat.official_account_menu/detail")},c=function(t){return a["a"].post("/wechat.official_account_menu/save",t)},s=function(t){return a["a"].post("/wechat.official_account_menu/saveAndPublish",t)},l=function(t){return a["a"].post("/wechat.official_account_reply/add",t)},u=function(t){return a["a"].post("/wechat.official_account_reply/edit",t)},f=function(t){return a["a"].get("/wechat.official_account_reply/detail",{params:t})},m=function(t){return a["a"].post("/wechat.official_account_reply/delete",t)},p=function(t){return a["a"].get("/wechat.official_account_reply/lists",{params:t})},d=function(t){return a["a"].post("/wechat.official_account_reply/status",t)}},ffcf:function(t,e,r){}}]);
//# sourceMappingURL=chunk-16da72c1.7c01844e.js.map