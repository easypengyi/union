(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a66cdaa"],{c8e4:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"default-reply"},[e("div",{staticClass:"ls-card"},[e("el-alert",{staticClass:"xxl",attrs:{title:"温馨提示：1.粉丝在公众号发送内容时，系统无法匹配情况下发送启用的默认文本回复；2.同时只能启用一个默认回复。",type:"info",closable:!1,"show-icon":""}})],1),e("div",{staticClass:"ls-user__grade ls-card m-t-20"},[e("div",{staticClass:"list-header"},[e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.onReplyAdd()}}},[t._v("新增默认回复")])],1),e("div",{staticClass:"list-table m-t-16"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.pager.loading,expression:"pager.loading"}],staticStyle:{width:"100%"},attrs:{data:t.pager.lists,"default-sort":{prop:"level",order:"ascending"},"header-cell-style":{background:"#f5f8ff"},size:"mini"}},[e("el-table-column",{attrs:{prop:"name",label:"规则名称","min-width":"100px"}}),e("el-table-column",{attrs:{prop:"content_type_desc",label:"回复类型","min-width":"100px"}}),e("el-table-column",{attrs:{prop:"status",label:"启用状态","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":t.styleConfig.primary,"inactive-color":"#f4f4f5"},on:{change:function(e){return t.putMpWeChatReplyStatus(a.row)}},model:{value:a.row.status,callback:function(e){t.$set(a.row,"status",e)},expression:"scope.row.status"}})]}}])}),e("el-table-column",{attrs:{fixed:"right",label:"操作","min-width":"120px"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.onReplyEdit(a.row)}}},[t._v("编辑")]),e("ls-dialog",{staticClass:"m-l-10 inline",on:{confirm:function(e){return t.onMpWeChatReplyDelete(a.row)}}},[e("el-button",{attrs:{slot:"trigger",type:"text",size:"small"},slot:"trigger"},[t._v("删除")])],1)]}}])})],1)],1),e("div",{staticClass:"flex row-right m-t-16 row-right"},[e("ls-pagination",{on:{change:function(e){return t.getMpWeChatReplyLists()}},model:{value:t.pager,callback:function(e){t.pager=e},expression:"pager"}})],1)])])},l=[],n=a("9ab4"),s=a("1b40"),c=a("f7b7"),r=a("4201"),o=a("6ddb"),p=a("0a6d"),u=a("3c50");let d=class extends s["e"]{constructor(){super(...arguments),this.pager=new o["a"],this.reply_type="3"}getMpWeChatReplyLists(){this.pager.request({callback:c["j"],params:{reply_type:this.reply_type}}).catch(()=>{})}onReplyAdd(){this.$router.push({path:"/channel/mp_wechat/reply/reply_edit",query:{mode:r["f"]["ADD"],replyType:this.reply_type}})}onReplyEdit(t){this.$router.push({path:"/channel/mp_wechat/reply/reply_edit",query:{mode:r["f"]["EDIT"],id:t.id,replyType:this.reply_type}})}putMpWeChatReplyStatus(t){Object(c["k"])({id:t.id}).then(()=>{this.getMpWeChatReplyLists()}).catch(()=>{})}onMpWeChatReplyDelete(t){Object(c["g"])({id:t.id}).then(()=>{this.getMpWeChatReplyLists()}).catch(()=>{})}created(){this.getMpWeChatReplyLists()}};d=Object(n["a"])([Object(s["a"])({components:{LsDialog:p["a"],LsPagination:u["a"]}})],d);var f=d,h=f,y=a("2877"),g=Object(y["a"])(h,i,l,!1,null,"21e5fc12",null);e["default"]=g.exports},f7b7:function(t,e,a){"use strict";a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"e",(function(){return c})),a.d(e,"d",(function(){return r})),a.d(e,"f",(function(){return o})),a.d(e,"i",(function(){return p})),a.d(e,"h",(function(){return u})),a.d(e,"g",(function(){return d})),a.d(e,"j",(function(){return f})),a.d(e,"k",(function(){return h}));var i=a("f175");const l=()=>i["a"].get("/wechat.official_account_setting/getConfig"),n=t=>i["a"].post("/wechat.official_account_setting/setConfig",t),s=()=>i["a"].get("/wechat.official_account_menu/detail"),c=t=>i["a"].post("/wechat.official_account_menu/save",t),r=t=>i["a"].post("/wechat.official_account_menu/saveAndPublish",t),o=t=>i["a"].post("/wechat.official_account_reply/add",t),p=t=>i["a"].post("/wechat.official_account_reply/edit",t),u=t=>i["a"].get("/wechat.official_account_reply/detail",{params:t}),d=t=>i["a"].post("/wechat.official_account_reply/delete",t),f=t=>i["a"].get("/wechat.official_account_reply/lists",{params:t}),h=t=>i["a"].post("/wechat.official_account_reply/status",t)}}]);
//# sourceMappingURL=chunk-2a66cdaa.c05c75d3.js.map