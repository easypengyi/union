(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dfc93f2a"],{3207:function(t,e,i){"use strict";i("9554")},9554:function(t,e,i){},9947:function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"buyers p-b-60"},[i("div",{staticClass:"ls-card"},[i("el-page-header",{attrs:{content:"编辑消息通知"},on:{back:function(e){return t.$router.go(-1)}}})],1),i("div",{staticClass:"ls-card m-t-24"},[i("div",{staticClass:"xxl m-b-20"},[t._v("通知名称")]),i("div",{staticClass:"m-l-30 m-t-10"},[t._v("通知名称： "+t._s(t.detail.scene_name))]),i("div",{staticClass:"m-l-30 m-t-10"},[t._v("通知类型： 业务通知")]),i("div",{staticClass:"m-l-30 m-t-10"},[t._v("通知业务： "+t._s(t.detail.scene_desc))])]),t.detail.system_notice.is_show?i("div",{staticClass:"ls-card m-t-24"},[i("div",{staticClass:"xxl m-b-20"},[t._v("系统通知")]),i("div",{staticStyle:{width:"90%"}},[i("el-form",{ref:"form",attrs:{"label-width":"135px"}},[i("el-form-item",{attrs:{label:"开启状态",required:""}},[i("el-radio",{attrs:{label:"0"},model:{value:t.detail.system_notice.status,callback:function(e){t.$set(t.detail.system_notice,"status",e)},expression:"detail.system_notice.status"}},[t._v("关闭")]),i("el-radio",{attrs:{label:"1"},model:{value:t.detail.system_notice.status,callback:function(e){t.$set(t.detail.system_notice,"status",e)},expression:"detail.system_notice.status"}},[t._v("开启")])],1),i("el-form-item",{attrs:{label:"通知标题",size:"mini",required:""}},[i("el-input",{model:{value:t.detail.system_notice.title,callback:function(e){t.$set(t.detail.system_notice,"title",e)},expression:"detail.system_notice.title"}})],1),i("el-form-item",{attrs:{label:"通知内容",size:"mini",required:""}},[i("el-input",{staticClass:"text",staticStyle:{width:"300px"},attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:t.detail.system_notice.content,callback:function(e){t.$set(t.detail.system_notice,"content",e)},expression:"detail.system_notice.content"}})],1)],1),i("div",{staticClass:"desc m-t-20 ",staticStyle:{"margin-left":"135px"}},t._l(t.detail.system_notice.tips,(function(e,l){return i("div",{key:l},[t._v(" "+t._s(e)+" ")])})),0)],1)]):t._e(),t.detail.sms_notice.is_show?i("div",{staticClass:"ls-card m-t-24"},[i("div",{staticClass:"xxl m-b-20"},[t._v("短信通知")]),i("div",{staticStyle:{width:"90%"}},[i("el-form",{ref:"form",attrs:{"label-width":"135px"}},[i("el-form-item",{attrs:{label:"开启状态",required:""}},[i("el-radio",{attrs:{label:"0"},model:{value:t.detail.sms_notice.status,callback:function(e){t.$set(t.detail.sms_notice,"status",e)},expression:"detail.sms_notice.status"}},[t._v("关闭")]),i("el-radio",{attrs:{label:"1"},model:{value:t.detail.sms_notice.status,callback:function(e){t.$set(t.detail.sms_notice,"status",e)},expression:"detail.sms_notice.status"}},[t._v("开启")])],1),i("el-form-item",{attrs:{label:"模板ID",size:"mini",required:""}},[i("el-input",{model:{value:t.detail.sms_notice.template_id,callback:function(e){t.$set(t.detail.sms_notice,"template_id",e)},expression:"detail.sms_notice.template_id"}})],1),i("el-form-item",{attrs:{label:"短信内容",size:"mini",required:""}},[i("el-input",{staticClass:"text",staticStyle:{width:"300px"},attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:t.detail.sms_notice.content,callback:function(e){t.$set(t.detail.sms_notice,"content",e)},expression:"detail.sms_notice.content"}})],1)],1),i("div",{staticClass:"desc m-t-20",staticStyle:{"margin-left":"135px"}},t._l(t.detail.sms_notice.tips,(function(e,l){return i("div",{key:l},[t._v(" "+t._s(e)+" ")])})),0)],1)]):t._e(),t.detail.oa_notice.is_show?i("div",{staticClass:"ls-card m-t-24"},[i("div",{staticClass:"xxl m-b-20"},[t._v("微信模板消息")]),i("el-alert",{attrs:{title:"温馨提示：\n1. 请前往微信公众平台，将【主营行业：IT科技/互联网|电子商务 副营行业：消费品】类目添加至您的服务类目，否则将影响订阅通知的正常发送。\n2. 查找订阅通知并选用，调整关键词的顺序后，复制模板ID，粘贴在此页面对应的模板ID输入框中",type:"success","show-icon":"",closable:!1}}),i("div",{staticStyle:{width:"90%"}},[i("el-form",{ref:"form",attrs:{"label-width":"135px"}},[i("el-form-item",{attrs:{label:"开启状态",required:""}},[i("el-radio",{attrs:{label:"0"},model:{value:t.detail.oa_notice.status,callback:function(e){t.$set(t.detail.oa_notice,"status",e)},expression:"detail.oa_notice.status"}},[t._v("关闭")]),i("el-radio",{attrs:{label:"1"},model:{value:t.detail.oa_notice.status,callback:function(e){t.$set(t.detail.oa_notice,"status",e)},expression:"detail.oa_notice.status"}},[t._v("开启")])],1),i("el-form-item",{attrs:{label:"模板ID",size:"mini",required:""}},[i("el-input",{model:{value:t.detail.oa_notice.template_id,callback:function(e){t.$set(t.detail.oa_notice,"template_id",e)},expression:"detail.oa_notice.template_id"}})],1),i("el-form-item",{attrs:{label:"模板字段first内容",size:"mini",required:""}},[i("el-input",{model:{value:t.detail.oa_notice.first,callback:function(e){t.$set(t.detail.oa_notice,"first",e)},expression:"detail.oa_notice.first"}})],1),i("el-form-item",{attrs:{label:"模板字段remrk内容",size:"mini",required:""}},[i("el-input",{model:{value:t.detail.oa_notice.remark,callback:function(e){t.$set(t.detail.oa_notice,"remark",e)},expression:"detail.oa_notice.remark"}})],1),i("el-form-item",{attrs:{label:"模板内容",size:"mini",required:""}},[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.onAddModeField}},[t._v("新增模板字段")]),i("el-table",{staticClass:"m-t-12",staticStyle:{width:"100%"},attrs:{data:t.detail.oa_notice.tpl,size:"mini"}},[i("el-table-column",{attrs:{label:"字段名",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{attrs:{placeholder:"例如:订单编号"},model:{value:t.detail.oa_notice.tpl[e.$index].tpl_name,callback:function(i){t.$set(t.detail.oa_notice.tpl[e.$index],"tpl_name",i)},expression:"detail.oa_notice.tpl[scope.$index].tpl_name"}})]}}],null,!1,163554065)}),i("el-table-column",{attrs:{label:"字段值",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{attrs:{placeholder:"例如:keyword1.DT"},model:{value:t.detail.oa_notice.tpl[e.$index].tpl_keyword,callback:function(i){t.$set(t.detail.oa_notice.tpl[e.$index],"tpl_keyword",i)},expression:"detail.oa_notice.tpl[scope.$index].tpl_keyword"}})]}}],null,!1,4090576943)}),i("el-table-column",{attrs:{label:"字段内容",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{attrs:{placeholder:"例如:${order.sn}"},model:{value:t.detail.oa_notice.tpl[e.$index].tpl_content,callback:function(i){t.$set(t.detail.oa_notice.tpl[e.$index],"tpl_content",i)},expression:"detail.oa_notice.tpl[scope.$index].tpl_content"}})]}}],null,!1,3692726710)}),i("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"text",size:"mall"},on:{click:function(i){return t.detail.oa_notice.tpl.splice(e.$index,1)}}},[t._v("删除")])]}}],null,!1,3652526816)})],1)],1)],1),i("div",{staticClass:"desc m-t-20",staticStyle:{"margin-left":"135px"}},t._l(t.detail.oa_notice.tips,(function(e,l){return i("div",{key:l},[t._v(" "+t._s(e)+" ")])})),0)],1)],1):t._e(),t.detail.mnp_notice.is_show?i("div",{staticClass:"ls-card m-t-24"},[i("div",{staticClass:"xxl m-b-20"},[t._v("微信小程序提醒")]),i("el-alert",{attrs:{title:"温馨提示：\n1. 请前往微信公众平台，将【主营行业：IT科技/互联网|电子商务 副营行业：消费品】类目添加至您的服务类目，否则将影响订阅通知的正常发送。\n2. 查找订阅通知并选用，调整关键词的顺序后，复制模板ID，粘贴在此页面对应的模板ID输入框中",type:"success","show-icon":"",closable:!1}}),i("div",{staticStyle:{width:"90%"}},[i("el-form",{ref:"form",attrs:{"label-width":"135px"}},[i("el-form-item",{attrs:{label:"开启状态",required:""}},[i("el-radio",{attrs:{label:"0"},model:{value:t.detail.mnp_notice.status,callback:function(e){t.$set(t.detail.mnp_notice,"status",e)},expression:"detail.mnp_notice.status"}},[t._v("关闭")]),i("el-radio",{attrs:{label:"1"},model:{value:t.detail.mnp_notice.status,callback:function(e){t.$set(t.detail.mnp_notice,"status",e)},expression:"detail.mnp_notice.status"}},[t._v("开启")])],1),i("el-form-item",{attrs:{label:"模板ID",size:"mini",required:""}},[i("el-input",{model:{value:t.detail.mnp_notice.template_id,callback:function(e){t.$set(t.detail.mnp_notice,"template_id",e)},expression:"detail.mnp_notice.template_id"}})],1),i("el-form-item",{attrs:{label:"模板内容",size:"mini",required:""}},[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.onAddWeChatModeField}},[t._v("新增模板字段")]),i("el-table",{staticClass:"m-t-12",staticStyle:{width:"100%"},attrs:{data:t.detail.mnp_notice.tpl,size:"mini"}},[i("el-table-column",{attrs:{label:"字段名",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{attrs:{placeholder:"例如:订单编号"},model:{value:t.detail.mnp_notice.tpl[e.$index].tpl_name,callback:function(i){t.$set(t.detail.mnp_notice.tpl[e.$index],"tpl_name",i)},expression:"detail.mnp_notice.tpl[scope.$index].tpl_name"}})]}}],null,!1,1484079852)}),i("el-table-column",{attrs:{label:"字段值",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{attrs:{placeholder:"例如:keyword1.DT"},model:{value:t.detail.mnp_notice.tpl[e.$index].tpl_keyword,callback:function(i){t.$set(t.detail.mnp_notice.tpl[e.$index],"tpl_keyword",i)},expression:"detail.mnp_notice.tpl[scope.$index].tpl_keyword"}})]}}],null,!1,3502734418)}),i("el-table-column",{attrs:{label:"字段内容",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{attrs:{placeholder:"例如:${order.sn}"},model:{value:t.detail.mnp_notice.tpl[e.$index].tpl_content,callback:function(i){t.$set(t.detail.mnp_notice.tpl[e.$index],"tpl_content",i)},expression:"detail.mnp_notice.tpl[scope.$index].tpl_content"}})]}}],null,!1,4083064203)}),i("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"text",size:"mall"},on:{click:function(i){return t.detail.mnp_notice.tpl.splice(e.$index,1)}}},[t._v("删除")])]}}],null,!1,615637085)})],1)],1)],1),i("div",{staticClass:"desc m-t-20",staticStyle:{"margin-left":"135px"}},t._l(t.detail.mnp_notice.tips,(function(e,l){return i("div",{key:l},[t._v(" "+t._s(e)+" ")])})),0)],1)],1):t._e(),i("div",{staticClass:"bg-white flex row-center ls-fixed-footer"},[i("div",{staticClass:"row-center flex"},[i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("取消")]),i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.onSubmit("form")}}},[t._v("保存")])],1)])])},a=[],s=i("5530"),n=i("d4ec"),o=i("bee2"),c=i("262e"),d=i("2caf"),r=i("9ab4"),u=i("1b40"),m=i("bf32"),p=function(t){Object(c["a"])(i,t);var e=Object(d["a"])(i);function i(){var t;return Object(n["a"])(this,i),t=e.apply(this,arguments),t.id=1,t.detail={system_notice:{is_show:!1,content:"",status:"",title:""},sms_notice:{content:"",is_show:!0,status:"",template_id:""},oa_notice:{first:"",is_show:!1,name:"",remark:"",status:"",template_id:"",template_sn:"",tpl:[]},mnp_notice:{is_show:!1,name:"",status:"",template_id:"",template_sn:"",tpl:[]}},t}return Object(o["a"])(i,[{key:"onSubmit",value:function(){var t=this,e={id:this.id,template:[Object(s["a"])({type:"system"},this.detail.system_notice),Object(s["a"])({type:"sms"},this.detail.sms_notice),Object(s["a"])({type:"oa"},this.detail.oa_notice),Object(s["a"])({type:"mnp"},this.detail.mnp_notice)]};Object(m["c"])(Object(s["a"])({},e)).then((function(e){t.$router.go(-1),t.$message.success("设置成功!")})).catch((function(){t.$message.error("数据请求失败，刷新重载!")}))}},{key:"getNoticeDetail",value:function(){var t=this;Object(m["b"])({id:this.id}).then((function(e){t.detail=e})).catch((function(){t.$message.error("数据请求失败，刷新重载!")}))}},{key:"onAddModeField",value:function(){this.detail.oa_notice.tpl.push({tpl_name:"",tpl_keyword:"",tpl_content:""})}},{key:"onAddWeChatModeField",value:function(){this.detail.mnp_notice.tpl.push({tpl_name:"",tpl_keyword:"",tpl_content:""})}},{key:"created",value:function(){this.id=this.$route.query.id,this.id&&this.getNoticeDetail()}}]),i}(u["e"]);p=Object(r["a"])([u["a"]],p);var _=p,f=_,b=(i("3207"),i("2877")),v=Object(b["a"])(f,l,a,!1,null,"b5e155d6",null);e["default"]=v.exports},bf32:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"d",(function(){return o})),i.d(e,"e",(function(){return c})),i.d(e,"f",(function(){return d}));var l=i("f175"),a=function(t){return l["a"].get("/notice.notice/settingLists",{params:t})},s=function(t){return l["a"].get("/notice.notice/detail",{params:t})},n=function(t){return l["a"].post("/notice.notice/set",t)},o=function(){return l["a"].get("/notice.sms_config/getConfig")},c=function(t){return l["a"].get("/notice.sms_config/detail",{params:t})},d=function(t){return l["a"].post("/notice.sms_config/setConfig",t)}}}]);
//# sourceMappingURL=chunk-dfc93f2a.484c6759.js.map