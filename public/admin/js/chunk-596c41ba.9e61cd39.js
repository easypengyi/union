(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-596c41ba"],{4072:function(t,e,a){"use strict";a.d(e,"f",(function(){return s})),a.d(e,"z",(function(){return r})),a.d(e,"A",(function(){return n})),a.d(e,"m",(function(){return o})),a.d(e,"l",(function(){return l})),a.d(e,"k",(function(){return d})),a.d(e,"n",(function(){return u})),a.d(e,"u",(function(){return c})),a.d(e,"t",(function(){return p})),a.d(e,"c",(function(){return m})),a.d(e,"d",(function(){return f})),a.d(e,"e",(function(){return b})),a.d(e,"v",(function(){return _})),a.d(e,"y",(function(){return g})),a.d(e,"b",(function(){return h})),a.d(e,"a",(function(){return v})),a.d(e,"g",(function(){return x})),a.d(e,"i",(function(){return w})),a.d(e,"j",(function(){return y})),a.d(e,"s",(function(){return C})),a.d(e,"q",(function(){return D})),a.d(e,"r",(function(){return j})),a.d(e,"o",(function(){return k})),a.d(e,"p",(function(){return O})),a.d(e,"w",(function(){return z})),a.d(e,"h",(function(){return S})),a.d(e,"x",(function(){return L}));var i=a("f175");const s=()=>i["a"].get("/distribution.distribution_data/dataCenter"),r=()=>i["a"].get("/distribution.distribution_data/topMemberEarnings"),n=()=>i["a"].get("/distribution.distribution_data/topMemberFans"),o=t=>i["a"].get("/distribution.distribution_goods/lists",{params:t}),l=t=>i["a"].post("/distribution.distribution_goods/join",t),d=t=>i["a"].get("/distribution.distribution_goods/detail",{params:t}),u=t=>i["a"].post("/distribution.distribution_goods/set",t),c=t=>i["a"].get("/distribution.distribution_member/lists",{params:t}),p=t=>i["a"].get("/distribution.distribution_apply/detail",{params:t}),m=t=>i["a"].get("/distribution.distribution_apply/lists",{params:t}),f=t=>i["a"].post("/distribution.distribution_apply/pass",t),b=t=>i["a"].post("/distribution.distribution_apply/refuse",t),_=t=>i["a"].post("/distribution.distribution_member/open",t),g=t=>i["a"].post("/distribution.distribution_member/freeze",t),h=t=>i["a"].get("/distribution.distribution_member/adjustLevelInfo",{params:t}),v=t=>i["a"].post("/distribution.distribution_member/adjustLevel",t),x=t=>i["a"].get("/distribution.distribution_member/detail",{params:t}),w=t=>i["a"].get("/distribution.distribution_member/getFans",{params:t}),y=t=>i["a"].get("/distribution.distribution_member/getFansLists",{params:t}),C=t=>i["a"].get("/distribution.distribution_level/lists",t),D=t=>i["a"].get("/distribution.distribution_level/detail",{params:t}),j=t=>i["a"].post("/distribution.distribution_level/edit",t),k=t=>i["a"].post("/distribution.distribution_level/add",t),O=t=>i["a"].post("/distribution.distribution_level/delete",t),z=t=>i["a"].get("/distribution.distribution_order_goods/lists",{params:t}),S=t=>i["a"].get("/distribution.distribution_config/getConfig",{params:t}),L=t=>i["a"].post("/distribution.distribution_config/setConfig",t)},"4ae1":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"export-data inline"},[e("ls-dialog",{ref:"dialog",attrs:{title:"导出设置",width:"500px",top:"35vh","confirm-button-text":"确认导出",async:!0},on:{confirm:t.handleConfirm,open:t.handleOpen}},[e("div",{attrs:{slot:"trigger"},slot:"trigger"},[e("el-button",{attrs:{size:"small"}},[t._v("导出")])],1),e("div",[e("el-form",{ref:"form",attrs:{model:t.formData,"label-width":"120px",size:"small"}},[e("el-form-item",{attrs:{label:"数据量："}},[t._v(" 预计导出"+t._s(t.exportData.count)+"条数据，共"+t._s(t.exportData.sum_page)+"页，每页"+t._s(t.exportData.page_size)+"条数据 ")]),e("el-form-item",{attrs:{label:"导出限制："}},[t._v(" 每次导出最大允许"+t._s(t.exportData.max_page)+"页，共"+t._s(t.exportData.all_max_size)+"条数据 ")]),e("el-form-item",{attrs:{label:"导出范围：",required:""}},[e("el-radio-group",{model:{value:t.formData.page_type,callback:function(e){t.$set(t.formData,"page_type",e)},expression:"formData.page_type"}},[e("el-radio",{attrs:{label:0}},[t._v("全部导出")]),e("el-radio",{attrs:{label:1}},[t._v("分页导出")])],1)],1),1==t.formData.page_type?e("el-form-item",{attrs:{label:"分页范围：",required:""}},[e("div",{staticClass:"flex"},[e("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:t.formData.page_start,callback:function(e){t.$set(t.formData,"page_start",e)},expression:"formData.page_start"}}),e("span",{staticClass:"flex-none m-l-8 m-r-8"},[t._v("页，至")]),e("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:t.formData.page_end,callback:function(e){t.$set(t.formData,"page_end",e)},expression:"formData.page_end"}})],1)]):t._e(),e("el-form-item",{attrs:{label:"导出文件名称：",prop:"file_name"}},[e("el-input",{attrs:{placeholder:"请输入导出文件名称"},model:{value:t.formData.file_name,callback:function(e){t.$set(t.formData,"file_name",e)},expression:"formData.file_name"}})],1)],1)],1)])],1)},s=[],r=a("9ab4"),n=a("1b40"),o=a("0a6d");let l=class extends n["e"]{constructor(){super(...arguments),this.exportData={},this.formData={page_type:0,page_start:1,page_end:200,file_name:""}}handleOpen(){this.getData()}handleConfirm(){const t=this.$loading({lock:!0,text:"正在导出中...",spinner:"el-icon-loading"});this.method({export:2,...this.param,...this.formData,user_id:this.userId,type:this.type,page_size:this.pageSize}).then(()=>{this.$refs.dialog.close()}).finally(()=>{t.close()})}getData(){this.method({...this.param,export:1,user_id:this.userId,type:this.type,page_size:this.pageSize}).then(t=>{this.exportData=t,this.formData.file_name=t.file_name,this.formData.page_end=t.page_end,this.formData.page_start=t.page_start})}created(){}};Object(r["a"])([Object(n["c"])()],l.prototype,"method",void 0),Object(r["a"])([Object(n["c"])()],l.prototype,"param",void 0),Object(r["a"])([Object(n["c"])()],l.prototype,"userId",void 0),Object(r["a"])([Object(n["c"])()],l.prototype,"type",void 0),Object(r["a"])([Object(n["c"])()],l.prototype,"pageSize",void 0),l=Object(r["a"])([Object(n["a"])({components:{LsDialog:o["a"]}})],l);var d=l,u=d,c=a("2877"),p=Object(c["a"])(u,i,s,!1,null,null,null);e["a"]=p.exports},"7d83":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"withdraw-pane"},[e("div",{staticClass:"pane-table"},[e("div",{staticClass:"list-table"},[e("el-table",{ref:"valueRef",staticStyle:{width:"100%"},attrs:{data:t.value,size:"mini","header-cell-style":{background:"#f5f8ff"}}},[e("el-table-column",{attrs:{label:"用户信息","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"flex"},[e("el-image",{staticClass:"flex-none",staticStyle:{width:"58px",height:"58px"},attrs:{src:a.row.avatar}}),e("div",{staticClass:"m-l-8"},[e("div",[t._v(t._s(a.row.nickname))])])],1)]}}])}),e("el-table-column",{attrs:{label:"推荐人","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"flex"},[e("el-image",{staticClass:"flex-none",staticStyle:{width:"58px",height:"58px"},attrs:{src:a.row.leader_avatar}}),e("div",{staticClass:"m-l-8"},[e("div",[t._v(t._s(a.row.leader_name))])])],1)]}}])}),e("el-table-column",{attrs:{prop:"name",label:"用户等级"}}),e("el-table-column",{attrs:{prop:"mobile",label:"手机号码"}}),e("el-table-column",{attrs:{prop:"create_time",label:"注册时间"}})],1)],1),e("div",{staticClass:"flex row-right m-t-16 row-right"},[e("ls-pagination",{on:{change:function(e){return t.$emit("refresh")}},model:{value:t.pager,callback:function(e){t.pager=e},expression:"pager"}})],1)])])},s=[],r=a("9ab4"),n=a("1b40"),o=a("0a6d"),l=a("3c50");let d=class extends n["e"]{};Object(r["a"])([Object(n["c"])()],d.prototype,"value",void 0),Object(r["a"])([Object(n["c"])()],d.prototype,"pager",void 0),d=Object(r["a"])([Object(n["a"])({components:{LsDialog:o["a"],LsPagination:l["a"]}})],d);var u=d,c=u,p=a("2877"),m=Object(p["a"])(c,i,s,!1,null,"066f9a05",null);e["a"]=m.exports},ac94:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"user-invitation-list"},[e("div",{staticClass:"ls-card"},[e("el-page-header",{attrs:{content:"下级列表"},on:{back:function(e){return t.$router.go(-1)}}})],1),e("el-form",{attrs:{"label-width":"120px",size:"small"}},[e("div",{staticClass:"ls-card m-t-16"},[e("div",{staticClass:"card-title"},[t._v(" 分销商信息 ")]),e("div",{staticClass:"card-content m-t-24"},[e("el-form-item",{attrs:{label:"用户信息",prop:""}},[t._v(" "+t._s(t.user_info.user_info.nickname)+"("+t._s(t.user_info.user_info.sn)+") ")]),e("el-form-item",{attrs:{label:"下级人数",prop:""}},[t._v(" "+t._s(t.user_info.fans||"-")+" ")]),e("el-form-item",{attrs:{label:"下级分销商人数 ",prop:""}},[t._v(" "+t._s(t.user_info.fans_distribution||"-")+" ")]),e("el-form-item",{attrs:{label:"下一级人数",prop:""}},[t._v(" "+t._s(t.user_info.fans_one||"-")+" ")]),e("el-form-item",{attrs:{label:"下二级人数  ",prop:""}},[t._v(" "+t._s(t.user_info.fans_two||"-")+" ")])],1)])]),e("div",{staticClass:"ls-card m-t-16"},[e("div",{staticClass:"card-title"},[t._v(" 下级列表 ")]),e("div",{staticClass:"journal-search m-t-24"},[e("el-form",{staticClass:"ls-form",attrs:{inline:"",model:t.form,"label-width":"120px",size:"small"}},[e("el-form-item",{attrs:{label:"用户信息"}},[e("el-input",{attrs:{placeholder:"请输入用户昵称/用户编号"},model:{value:t.form.user_info,callback:function(e){t.$set(t.form,"user_info",e)},expression:"form.user_info"}})],1),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.getList(1)}}},[t._v("查询")]),e("el-button",{attrs:{size:"small"},on:{click:t.onReset}},[t._v("重置")])],1),e("div",{staticClass:"p-b-24",staticStyle:{margin:"0 55px"}},[e("el-tabs",{on:{"tab-click":function(e){return t.getList(1)}},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.tabs,(function(a,i){return e("el-tab-pane",{key:i,attrs:{label:`${a.label}(${t.tabCount[a.name]})`,name:a.name}})})),1)],1),e("div",{staticClass:"list-table m-t-16",staticStyle:{margin:"0 55px"}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.pager.loading,expression:"pager.loading"}],staticStyle:{width:"100%"},attrs:{data:t.pager.lists,size:"mini","header-cell-style":{background:"#f5f8ff"}}},[e("el-table-column",{attrs:{prop:"avatar",label:"用户头像","min-width":"",width:"250"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"flex"},[e("el-image",{staticStyle:{width:"34px",height:"34px"},attrs:{src:a.row.avatar}}),e("span",{staticClass:"m-l-15"},[t._v(t._s(a.row.nickname)+"("+t._s(a.row.sn)+")")])],1)]}}])}),e("el-table-column",{attrs:{prop:"level_name",label:"分销等级","min-width":"",width:""}}),e("el-table-column",{attrs:{prop:"mobile",label:"已入账佣金","min-width":"",width:""}}),e("el-table-column",{attrs:{prop:"user_money",label:"待结算佣金","min-width":"",width:""}}),e("el-table-column",{attrs:{prop:"total_order_amount",label:"上级分销商","min-width":"",width:""}}),e("el-table-column",{attrs:{prop:"login_time",label:"分销状态","min-width":"",width:""}}),e("el-table-column",{attrs:{prop:"create_time",label:"成为分销商时间","min-width":"",width:""}})],1)],1),e("div",{staticClass:"flex row-right p-t-24 row-right",staticStyle:{margin:"0 55px"}},[e("ls-pagination",{on:{change:function(e){return t.getList()}},model:{value:t.pager,callback:function(e){t.pager=e},expression:"pager"}})],1)],1)])],1)},s=[],r=a("9ab4"),n=a("1b40"),o=a("4072"),l=a("6ddb"),d=a("3c50"),u=a("7d83"),c=a("4ae1");let p=class extends n["e"]{constructor(){super(...arguments),this.apiDistributionGetFansLists=o["i"],this.user_info={user_info:{nickname:"",sn:""},fans:"",fans_distribution:"",fans_one:"",fans_two:""},this.activeName="1",this.tabs=[{label:"下一级",name:"1"},{label:"下二级",name:"2"}],this.tabCount={1:"0",2:"0"},this.form={user_id:"",user_info:""},this.pager=new l["a"]}onReset(){this.form.user_info="",this.getList()}getUserInfo(){Object(o["i"])({user_id:this.form.user_id}).then(t=>{console.log(t),this.user_info=t})}getList(t){t&&(this.pager.page=t),this.pager.request({callback:o["j"],params:{level:this.activeName,...this.form}}).then(t=>{this.tabCount["1"]=t.extend.one,this.tabCount["2"]=t.extend.two})}created(){const t=this.$route.query;t.id&&this.$set(this.form,"user_id",t.id),setTimeout(()=>{this.getUserInfo(),this.getList()},50)}};p=Object(r["a"])([Object(n["a"])({components:{LsPagination:d["a"],FansPane:u["a"],ExportData:c["a"]}})],p);var m=p,f=m,b=(a("d2fa"),a("2877")),_=Object(b["a"])(f,i,s,!1,null,"75991d98",null);e["default"]=_.exports},ceda:function(t,e,a){},d2fa:function(t,e,a){"use strict";a("ceda")}}]);
//# sourceMappingURL=chunk-596c41ba.9e61cd39.js.map