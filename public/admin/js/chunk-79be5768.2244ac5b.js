(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79be5768"],{"65a5":function(t,e,i){},8511:function(t,e,i){"use strict";i("65a5")},9947:function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"buyers p-b-60"},[e("div",{staticClass:"ls-card"},[e("el-page-header",{attrs:{content:"编辑消息通知"},on:{back:function(e){return t.$router.go(-1)}}})],1),e("div",{staticClass:"ls-card m-t-24"},[e("div",{staticClass:"xxl m-b-20"},[t._v("通知名称")]),e("div",{staticClass:"m-l-30 m-t-10"},[t._v("通知名称： "+t._s(t.detail.scene_name))]),e("div",{staticClass:"m-l-30 m-t-10"},[t._v("通知类型： 业务通知")]),e("div",{staticClass:"m-l-30 m-t-10"},[t._v("通知业务： "+t._s(t.detail.scene_desc))])]),t.detail.system_notice.is_show?e("div",{staticClass:"ls-card m-t-24"},[e("div",{staticClass:"xxl m-b-20"},[t._v("系统通知")]),e("div",{staticStyle:{width:"90%"}},[e("el-form",{ref:"form",attrs:{"label-width":"135px"}},[e("el-form-item",{attrs:{label:"开启状态",required:""}},[e("el-radio",{attrs:{label:"0"},model:{value:t.detail.system_notice.status,callback:function(e){t.$set(t.detail.system_notice,"status",e)},expression:"detail.system_notice.status"}},[t._v("关闭")]),e("el-radio",{attrs:{label:"1"},model:{value:t.detail.system_notice.status,callback:function(e){t.$set(t.detail.system_notice,"status",e)},expression:"detail.system_notice.status"}},[t._v("开启")])],1),e("el-form-item",{attrs:{label:"通知标题",size:"mini",required:""}},[e("el-input",{model:{value:t.detail.system_notice.title,callback:function(e){t.$set(t.detail.system_notice,"title",e)},expression:"detail.system_notice.title"}})],1),e("el-form-item",{attrs:{label:"通知内容",size:"mini",required:""}},[e("el-input",{staticClass:"text",staticStyle:{width:"300px"},attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:t.detail.system_notice.content,callback:function(e){t.$set(t.detail.system_notice,"content",e)},expression:"detail.system_notice.content"}})],1)],1),e("div",{staticClass:"desc m-t-20",staticStyle:{"margin-left":"135px"}},t._l(t.detail.system_notice.tips,(function(i,l){return e("div",{key:l},[t._v(" "+t._s(i)+" ")])})),0)],1)]):t._e(),t.detail.sms_notice.is_show?e("div",{staticClass:"ls-card m-t-24"},[e("div",{staticClass:"xxl m-b-20"},[t._v("短信通知")]),e("div",{staticStyle:{width:"90%"}},[e("el-form",{ref:"form",attrs:{"label-width":"135px"}},[e("el-form-item",{attrs:{label:"开启状态",required:""}},[e("el-radio",{attrs:{label:"0"},model:{value:t.detail.sms_notice.status,callback:function(e){t.$set(t.detail.sms_notice,"status",e)},expression:"detail.sms_notice.status"}},[t._v("关闭")]),e("el-radio",{attrs:{label:"1"},model:{value:t.detail.sms_notice.status,callback:function(e){t.$set(t.detail.sms_notice,"status",e)},expression:"detail.sms_notice.status"}},[t._v("开启")])],1),e("el-form-item",{attrs:{label:"模板ID",size:"mini",required:""}},[e("el-input",{model:{value:t.detail.sms_notice.template_id,callback:function(e){t.$set(t.detail.sms_notice,"template_id",e)},expression:"detail.sms_notice.template_id"}})],1),e("el-form-item",{attrs:{label:"短信内容",size:"mini",required:""}},[e("el-input",{staticClass:"text",staticStyle:{width:"300px"},attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:t.detail.sms_notice.content,callback:function(e){t.$set(t.detail.sms_notice,"content",e)},expression:"detail.sms_notice.content"}})],1)],1),e("div",{staticClass:"desc m-t-20",staticStyle:{"margin-left":"135px"}},t._l(t.detail.sms_notice.tips,(function(i,l){return e("div",{key:l},[t._v(" "+t._s(i)+" ")])})),0)],1)]):t._e(),t.detail.oa_notice.is_show?e("div",{staticClass:"ls-card m-t-24"},[e("div",{staticClass:"xxl m-b-20"},[t._v("微信模板消息")]),e("el-alert",{attrs:{title:"温馨提示：\n1. 请前往微信公众平台，将【主营行业：IT科技/互联网|电子商务 副营行业：消费品】类目添加至您的服务类目，否则将影响订阅通知的正常发送。\n2. 查找订阅通知并选用，调整关键词的顺序后，复制模板ID，粘贴在此页面对应的模板ID输入框中",type:"success","show-icon":"",closable:!1}}),e("div",{staticStyle:{width:"90%"}},[e("el-form",{ref:"form",attrs:{"label-width":"135px"}},[e("el-form-item",{attrs:{label:"开启状态",required:""}},[e("el-radio",{attrs:{label:"0"},model:{value:t.detail.oa_notice.status,callback:function(e){t.$set(t.detail.oa_notice,"status",e)},expression:"detail.oa_notice.status"}},[t._v("关闭")]),e("el-radio",{attrs:{label:"1"},model:{value:t.detail.oa_notice.status,callback:function(e){t.$set(t.detail.oa_notice,"status",e)},expression:"detail.oa_notice.status"}},[t._v("开启")])],1),e("el-form-item",{attrs:{label:"模板ID",size:"mini",required:""}},[e("el-input",{model:{value:t.detail.oa_notice.template_id,callback:function(e){t.$set(t.detail.oa_notice,"template_id",e)},expression:"detail.oa_notice.template_id"}})],1),e("el-form-item",{attrs:{label:"模板字段first内容",size:"mini",required:""}},[e("el-input",{model:{value:t.detail.oa_notice.first,callback:function(e){t.$set(t.detail.oa_notice,"first",e)},expression:"detail.oa_notice.first"}})],1),e("el-form-item",{attrs:{label:"模板字段remrk内容",size:"mini",required:""}},[e("el-input",{model:{value:t.detail.oa_notice.remark,callback:function(e){t.$set(t.detail.oa_notice,"remark",e)},expression:"detail.oa_notice.remark"}})],1),e("el-form-item",{attrs:{label:"模板内容",size:"mini",required:""}},[e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.onAddModeField}},[t._v("新增模板字段")]),e("el-table",{staticClass:"m-t-12",staticStyle:{width:"100%"},attrs:{data:t.detail.oa_notice.tpl,size:"mini"}},[e("el-table-column",{attrs:{label:"字段名",width:"120"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-input",{attrs:{placeholder:"例如:订单编号"},model:{value:t.detail.oa_notice.tpl[i.$index].tpl_name,callback:function(e){t.$set(t.detail.oa_notice.tpl[i.$index],"tpl_name",e)},expression:"detail.oa_notice.tpl[scope.$index].tpl_name"}})]}}],null,!1,163554065)}),e("el-table-column",{attrs:{label:"字段值",width:"120"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-input",{attrs:{placeholder:"例如:keyword1.DT"},model:{value:t.detail.oa_notice.tpl[i.$index].tpl_keyword,callback:function(e){t.$set(t.detail.oa_notice.tpl[i.$index],"tpl_keyword",e)},expression:"detail.oa_notice.tpl[scope.$index].tpl_keyword"}})]}}],null,!1,4090576943)}),e("el-table-column",{attrs:{label:"字段内容",width:"180"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-input",{attrs:{placeholder:"例如:${order.sn}"},model:{value:t.detail.oa_notice.tpl[i.$index].tpl_content,callback:function(e){t.$set(t.detail.oa_notice.tpl[i.$index],"tpl_content",e)},expression:"detail.oa_notice.tpl[scope.$index].tpl_content"}})]}}],null,!1,3692726710)}),e("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-button",{attrs:{type:"text",size:"mall"},on:{click:function(e){return t.detail.oa_notice.tpl.splice(i.$index,1)}}},[t._v("删除")])]}}],null,!1,3652526816)})],1)],1)],1),e("div",{staticClass:"desc m-t-20",staticStyle:{"margin-left":"135px"}},t._l(t.detail.oa_notice.tips,(function(i,l){return e("div",{key:l},[t._v(" "+t._s(i)+" ")])})),0)],1)],1):t._e(),t.detail.mnp_notice.is_show?e("div",{staticClass:"ls-card m-t-24"},[e("div",{staticClass:"xxl m-b-20"},[t._v("微信小程序提醒")]),e("el-alert",{attrs:{title:"温馨提示：\n1. 请前往微信公众平台，将【主营行业：IT科技/互联网|电子商务 副营行业：消费品】类目添加至您的服务类目，否则将影响订阅通知的正常发送。\n2. 查找订阅通知并选用，调整关键词的顺序后，复制模板ID，粘贴在此页面对应的模板ID输入框中",type:"success","show-icon":"",closable:!1}}),e("div",{staticStyle:{width:"90%"}},[e("el-form",{ref:"form",attrs:{"label-width":"135px"}},[e("el-form-item",{attrs:{label:"开启状态",required:""}},[e("el-radio",{attrs:{label:"0"},model:{value:t.detail.mnp_notice.status,callback:function(e){t.$set(t.detail.mnp_notice,"status",e)},expression:"detail.mnp_notice.status"}},[t._v("关闭")]),e("el-radio",{attrs:{label:"1"},model:{value:t.detail.mnp_notice.status,callback:function(e){t.$set(t.detail.mnp_notice,"status",e)},expression:"detail.mnp_notice.status"}},[t._v("开启")])],1),e("el-form-item",{attrs:{label:"模板ID",size:"mini",required:""}},[e("el-input",{model:{value:t.detail.mnp_notice.template_id,callback:function(e){t.$set(t.detail.mnp_notice,"template_id",e)},expression:"detail.mnp_notice.template_id"}})],1),e("el-form-item",{attrs:{label:"模板内容",size:"mini",required:""}},[e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.onAddWeChatModeField}},[t._v("新增模板字段")]),e("el-table",{staticClass:"m-t-12",staticStyle:{width:"100%"},attrs:{data:t.detail.mnp_notice.tpl,size:"mini"}},[e("el-table-column",{attrs:{label:"字段名",width:"120"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-input",{attrs:{placeholder:"例如:订单编号"},model:{value:t.detail.mnp_notice.tpl[i.$index].tpl_name,callback:function(e){t.$set(t.detail.mnp_notice.tpl[i.$index],"tpl_name",e)},expression:"detail.mnp_notice.tpl[scope.$index].tpl_name"}})]}}],null,!1,1484079852)}),e("el-table-column",{attrs:{label:"字段值",width:"120"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-input",{attrs:{placeholder:"例如:keyword1.DT"},model:{value:t.detail.mnp_notice.tpl[i.$index].tpl_keyword,callback:function(e){t.$set(t.detail.mnp_notice.tpl[i.$index],"tpl_keyword",e)},expression:"detail.mnp_notice.tpl[scope.$index].tpl_keyword"}})]}}],null,!1,3502734418)}),e("el-table-column",{attrs:{label:"字段内容",width:"180"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-input",{attrs:{placeholder:"例如:${order.sn}"},model:{value:t.detail.mnp_notice.tpl[i.$index].tpl_content,callback:function(e){t.$set(t.detail.mnp_notice.tpl[i.$index],"tpl_content",e)},expression:"detail.mnp_notice.tpl[scope.$index].tpl_content"}})]}}],null,!1,4083064203)}),e("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-button",{attrs:{type:"text",size:"mall"},on:{click:function(e){return t.detail.mnp_notice.tpl.splice(i.$index,1)}}},[t._v("删除")])]}}],null,!1,615637085)})],1)],1)],1),e("div",{staticClass:"desc m-t-20",staticStyle:{"margin-left":"135px"}},t._l(t.detail.mnp_notice.tips,(function(i,l){return e("div",{key:l},[t._v(" "+t._s(i)+" ")])})),0)],1)],1):t._e(),e("div",{staticClass:"bg-white flex row-center ls-fixed-footer"},[e("div",{staticClass:"row-center flex"},[e("el-button",{attrs:{size:"small"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("取消")]),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.onSubmit("form")}}},[t._v("保存")])],1)])])},s=[],a=i("9ab4"),n=i("1b40"),o=i("bf32");let c=class extends n["e"]{constructor(){super(...arguments),this.id=1,this.detail={system_notice:{is_show:!1,content:"",status:"",title:""},sms_notice:{content:"",is_show:!0,status:"",template_id:""},oa_notice:{first:"",is_show:!1,name:"",remark:"",status:"",template_id:"",template_sn:"",tpl:[]},mnp_notice:{is_show:!1,name:"",status:"",template_id:"",template_sn:"",tpl:[]}}}onSubmit(){const t={id:this.id,template:[{type:"system",...this.detail.system_notice},{type:"sms",...this.detail.sms_notice},{type:"oa",...this.detail.oa_notice},{type:"mnp",...this.detail.mnp_notice}]};Object(o["c"])({...t}).then(t=>{this.$router.go(-1),this.$message.success("设置成功!")}).catch(()=>{this.$message.error("数据请求失败，刷新重载!")})}getNoticeDetail(){Object(o["b"])({id:this.id}).then(t=>{this.detail=t}).catch(()=>{this.$message.error("数据请求失败，刷新重载!")})}onAddModeField(){this.detail.oa_notice.tpl.push({tpl_name:"",tpl_keyword:"",tpl_content:""})}onAddWeChatModeField(){this.detail.mnp_notice.tpl.push({tpl_name:"",tpl_keyword:"",tpl_content:""})}created(){this.id=this.$route.query.id,this.id&&this.getNoticeDetail()}};c=Object(a["a"])([n["a"]],c);var d=c,r=d,m=(i("8511"),i("2877")),u=Object(m["a"])(r,l,s,!1,null,"b5e155d6",null);e["default"]=u.exports},bf32:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"d",(function(){return o})),i.d(e,"e",(function(){return c})),i.d(e,"f",(function(){return d}));var l=i("f175");const s=t=>l["a"].get("/notice.notice/settingLists",{params:t}),a=t=>l["a"].get("/notice.notice/detail",{params:t}),n=t=>l["a"].post("/notice.notice/set",t),o=()=>l["a"].get("/notice.sms_config/getConfig"),c=t=>l["a"].get("/notice.sms_config/detail",{params:t}),d=t=>l["a"].post("/notice.sms_config/setConfig",t)}}]);
//# sourceMappingURL=chunk-79be5768.2244ac5b.js.map