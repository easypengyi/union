(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1708c834"],{1848:function(e,t,a){"use strict";a("3d9f")},"3d9f":function(e,t,a){},"4ae1":function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"export-data inline"},[t("ls-dialog",{ref:"dialog",attrs:{title:"导出设置",width:"500px",top:"35vh","confirm-button-text":"确认导出",async:!0},on:{confirm:e.handleConfirm,open:e.handleOpen}},[t("div",{attrs:{slot:"trigger"},slot:"trigger"},[t("el-button",{attrs:{size:"small"}},[e._v("导出")])],1),t("div",[t("el-form",{ref:"form",attrs:{model:e.formData,"label-width":"120px",size:"small"}},[t("el-form-item",{attrs:{label:"数据量："}},[e._v(" 预计导出"+e._s(e.exportData.count)+"条数据，共"+e._s(e.exportData.sum_page)+"页，每页"+e._s(e.exportData.page_size)+"条数据 ")]),t("el-form-item",{attrs:{label:"导出限制："}},[e._v(" 每次导出最大允许"+e._s(e.exportData.max_page)+"页，共"+e._s(e.exportData.all_max_size)+"条数据 ")]),t("el-form-item",{attrs:{label:"导出范围：",required:""}},[t("el-radio-group",{model:{value:e.formData.page_type,callback:function(t){e.$set(e.formData,"page_type",t)},expression:"formData.page_type"}},[t("el-radio",{attrs:{label:0}},[e._v("全部导出")]),t("el-radio",{attrs:{label:1}},[e._v("分页导出")])],1)],1),1==e.formData.page_type?t("el-form-item",{attrs:{label:"分页范围：",required:""}},[t("div",{staticClass:"flex"},[t("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:e.formData.page_start,callback:function(t){e.$set(e.formData,"page_start",t)},expression:"formData.page_start"}}),t("span",{staticClass:"flex-none m-l-8 m-r-8"},[e._v("页，至")]),t("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:e.formData.page_end,callback:function(t){e.$set(e.formData,"page_end",t)},expression:"formData.page_end"}})],1)]):e._e(),t("el-form-item",{attrs:{label:"导出文件名称：",prop:"file_name"}},[t("el-input",{attrs:{placeholder:"请输入导出文件名称"},model:{value:e.formData.file_name,callback:function(t){e.$set(e.formData,"file_name",t)},expression:"formData.file_name"}})],1)],1)],1)])],1)},l=[],r=a("9ab4"),i=a("1b40"),o=a("0a6d");let n=class extends i["e"]{constructor(){super(...arguments),this.exportData={},this.formData={page_type:0,page_start:1,page_end:200,file_name:""}}handleOpen(){this.getData()}handleConfirm(){const e=this.$loading({lock:!0,text:"正在导出中...",spinner:"el-icon-loading"});this.method({export:2,...this.param,...this.formData,user_id:this.userId,type:this.type,page_size:this.pageSize}).then(()=>{this.$refs.dialog.close()}).finally(()=>{e.close()})}getData(){this.method({...this.param,export:1,user_id:this.userId,type:this.type,page_size:this.pageSize}).then(e=>{this.exportData=e,this.formData.file_name=e.file_name,this.formData.page_end=e.page_end,this.formData.page_start=e.page_start})}created(){}};Object(r["a"])([Object(i["c"])()],n.prototype,"method",void 0),Object(r["a"])([Object(i["c"])()],n.prototype,"param",void 0),Object(r["a"])([Object(i["c"])()],n.prototype,"userId",void 0),Object(r["a"])([Object(i["c"])()],n.prototype,"type",void 0),Object(r["a"])([Object(i["c"])()],n.prototype,"pageSize",void 0),n=Object(r["a"])([Object(i["a"])({components:{LsDialog:o["a"]}})],n);var c=n,u=c,m=a("2877"),p=Object(m["a"])(u,s,l,!1,null,null,null);t["a"]=p.exports},a994:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"user-management"},[t("div",{staticClass:"ls-User__top ls-card"},[t("el-alert",{staticClass:"xxl",attrs:{title:"温馨提示：1.管理用户信息，可以进行编辑、账户调整、等级调整和资料查看等操作。",type:"info",closable:!1,"show-icon":""}}),t("div",{staticClass:"member-search m-t-16"},[t("el-form",{ref:"form",attrs:{inline:"",model:e.form,"label-width":"70px",size:"small"}},[t("el-form-item",{attrs:{label:"用户信息"}},[t("el-input",{staticClass:"ls-select-keyword",attrs:{placeholder:"请输入用户编号/昵称/手机号码"},model:{value:e.form.keyword,callback:function(t){e.$set(e.form,"keyword",t)},expression:"form.keyword"}})],1),t("el-form-item",{attrs:{label:"用户等级"}},[t("el-select",{staticClass:"ls-select",attrs:{placeholder:"全部"},model:{value:e.form.level,callback:function(t){e.$set(e.form,"level",t)},expression:"form.level"}},e._l(e.userLevelList,(function(e,a){return t("div",{key:a},[t("el-option",{attrs:{label:e.name,value:e.id}})],1)})),0)],1),t("el-form-item",{attrs:{label:"用户标签"}},[t("el-select",{staticClass:"ls-select",attrs:{placeholder:"全部"},model:{value:e.form.label_id,callback:function(t){e.$set(e.form,"label_id",t)},expression:"form.label_id"}},e._l(e.userLabelList,(function(e,a){return t("div",{key:a},[t("el-option",{attrs:{label:e.name,value:e.id}})],1)})),0)],1),t("el-form-item",{attrs:{label:"消费金额"}},[t("div",{staticClass:"flex"},[t("el-input",{staticClass:"ls-input-price",attrs:{size:"small",clearable:"",placeholder:"最低价"},model:{value:e.form.min_amount,callback:function(t){e.$set(e.form,"min_amount",t)},expression:"form.min_amount"}}),t("div",{staticClass:"m-l-10 m-r-10 lighter"},[e._v("至")]),t("el-input",{staticClass:"ls-input-price",attrs:{size:"small",clearable:"",placeholder:"最高价"},model:{value:e.form.max_amount,callback:function(t){e.$set(e.form,"max_amount",t)},expression:"form.max_amount"}})],1)]),t("el-form-item",{attrs:{label:"注册来源"}},[t("el-select",{staticClass:"ls-select",attrs:{placeholder:"全部"},model:{value:e.form.source,callback:function(t){e.$set(e.form,"source",t)},expression:"form.source"}},e._l(e.sourceList,(function(e,a){return t("div",{key:a},[t("el-option",{attrs:{label:e,value:a}})],1)})),0)],1),t("el-form-item",{attrs:{label:"注册时间"}},[t("el-date-picker",{attrs:{type:"datetimerange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:e.splitTime},model:{value:e.timeForm,callback:function(t){e.timeForm=t},expression:"timeForm"}})],1),t("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.query()}}},[e._v("查询")]),t("el-button",{attrs:{size:"small"},on:{click:function(t){return e.onReset()}}},[e._v("重置")]),t("export-data",{staticClass:"m-l-10",attrs:{method:e.apiUserList,param:e.form,pageSize:e.pager.size}})],1)],1)],1),t("div",{staticClass:"ls-User__centent ls-card m-t-16"},[t("div",{staticClass:"list-header"},[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.openDialogVisible}},[e._v("设置用户标签")])],1),t("div",{staticClass:"list-table m-t-16"},[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.pager.loading,expression:"pager.loading"}],staticStyle:{width:"100%"},attrs:{data:e.pager.lists,size:"mini","header-cell-style":{background:"#f5f8ff"}},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",{attrs:{prop:"sn",label:"用户编号"}}),t("el-table-column",{attrs:{label:"用户头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[t("div",{staticClass:"flex"},[t("el-image",{staticStyle:{width:"34px",height:"34px"},attrs:{src:e.row.avatar}})],1)]}}])}),t("el-table-column",{attrs:{prop:"nickname",label:"用户昵称"}}),t("el-table-column",{attrs:{prop:"name",label:"用户等级"}}),t("el-table-column",{attrs:{prop:"mobile",label:"手机号码"}}),t("el-table-column",{attrs:{prop:"total_user_money",label:"钱包金额"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",{staticClass:"flex"},[a.row.total_user_money?t("div",{},[e._v(" ￥ ")]):e._e(),t("div",{},[e._v(" "+e._s(a.row.total_user_money)+" ")])])]}}])}),t("el-table-column",{attrs:{prop:"total_order_amount",label:"消费金额"}}),t("el-table-column",{attrs:{prop:"login_time",label:"最后登陆时间","min-width":"120"}}),t("el-table-column",{attrs:{prop:"create_time",label:"注册时间","min-width":"120"}}),t("el-table-column",{attrs:{fixed:"right",label:"操作","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.DetailsClick(a.row)}}},[e._v("详情")])]}}])})],1)],1),t("div",{staticClass:"flex row-right m-t-16 row-right"},[t("ls-pagination",{on:{change:function(t){return e.getUserList()}},model:{value:e.pager,callback:function(t){e.pager=t},expression:"pager"}})],1)]),t("el-dialog",{attrs:{title:"设置用户标签",visible:e.dialogVisible,width:"60vh",top:"40vh",center:""},on:{"update:visible":function(t){e.dialogVisible=t},close:e.closeDialog}},[t("el-form",{ref:"form",attrs:{inline:"",model:e.form,"label-width":"70px",size:"small"}},[t("el-form-item",{attrs:{label:"用户标签"}},[t("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.labelValue,callback:function(t){e.labelValue=t},expression:"labelValue"}},e._l(e.userLabelList,(function(e,a){return t("div",{key:a},[t("el-option",{attrs:{label:e.name,value:e.id}})],1)})),0),t("div",{staticClass:"xxs lighter"},[e._v(" 可以多选用户标签 ")])],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.changeUserLabel}},[e._v("确 定")])],1)],1)],1)},l=[],r=a("9ab4"),i=a("1b40"),o=a("f633"),n=a("6ddb"),c=a("3c50"),u=a("4ae1");let m=class extends i["e"]{constructor(){super(...arguments),this.pickerOptions={shortcuts:[{text:"最近一周",onClick(e){const t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick(e){const t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick(e){const t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},this.form={keyword:"",level:"",label_id:"",min_amount:"",max_amount:"",source:"",create_start_time:0,create_end_time:0},this.timeForm=[],this.dialogVisible=!1,this.labelValue=[],this.userLevelList={},this.userLabelList={},this.sourceList={},this.pager=new n["a"],this.multipleSelection=[],this.apiUserList=o["p"]}handleSelectionChange(e){this.multipleSelection=e}query(){if(this.pager.page=1,this.form.min_amount&&this.form.max_amount&&this.form.min_amount>=this.form.max_amount)return this.$message.error("消费金额最低价应小于最高价");this.getUserList()}getUserList(){this.pager.request({callback:o["p"],params:{...this.form}})}getUserSearchList(){Object(o["q"])().then(e=>{this.userLevelList=e.user_level_list,this.userLabelList=e.user_label_list,this.sourceList=e.source_list})}add(e){return e<10?"0"+e:e}baseTime(e){const t=new Date(e);return`${this.add(t.getFullYear())}-${this.add(t.getMonth()+1)}-${this.add(t.getDate())} ${this.add(t.getHours())}:${this.add(t.getMinutes())}:${this.add(t.getSeconds())}`}splitTime(){null!=this.timeForm&&(this.form.create_start_time=new Date(this.timeForm[0]).getTime()/1e3,this.form.create_end_time=new Date(this.timeForm[1]).getTime()/1e3)}onReset(){this.form={keyword:"",level:"",label_id:"",min_amount:"",max_amount:"",source:"",create_start_time:0,create_end_time:0},this.timeForm=[],this.getUserList()}openDialogVisible(){this.multipleSelection?this.multipleSelection.length<=0?this.$message.error("请选择用户!"):this.dialogVisible=!0:this.$message.error("请选择用户!")}changeUserLabel(){let e=[];this.multipleSelection.forEach(t=>{e=[...e,t.id]}),Object(o["t"])({user_ids:e,label_ids:this.labelValue}).then(e=>{}).catch(e=>{console.log(e)}),this.dialogVisible=!1}closeDialog(){this.labelValue=[]}DetailsClick(e){this.$router.push({path:"/user/user_details",query:{id:e.id}})}created(){this.getUserList(),this.getUserSearchList()}};m=Object(r["a"])([Object(i["a"])({components:{LsPagination:c["a"],ExportData:u["a"]}})],m);var p=m,d=p,f=(a("1848"),a("2877")),h=Object(f["a"])(d,s,l,!1,null,"9c91b9b4",null);t["default"]=h.exports},f633:function(e,t,a){"use strict";a.d(t,"o",(function(){return l})),a.d(t,"k",(function(){return r})),a.d(t,"m",(function(){return i})),a.d(t,"n",(function(){return o})),a.d(t,"l",(function(){return n})),a.d(t,"j",(function(){return c})),a.d(t,"f",(function(){return u})),a.d(t,"h",(function(){return m})),a.d(t,"i",(function(){return p})),a.d(t,"g",(function(){return d})),a.d(t,"p",(function(){return f})),a.d(t,"q",(function(){return h})),a.d(t,"b",(function(){return b})),a.d(t,"s",(function(){return _})),a.d(t,"t",(function(){return g})),a.d(t,"u",(function(){return v})),a.d(t,"r",(function(){return x})),a.d(t,"c",(function(){return y})),a.d(t,"d",(function(){return k})),a.d(t,"e",(function(){return D})),a.d(t,"v",(function(){return w})),a.d(t,"a",(function(){return L}));var s=a("f175");const l=e=>s["a"].get("/user.user_level/lists",{params:e}),r=e=>s["a"].post("/user.user_level/add",e),i=e=>s["a"].get("/user.user_level/detail",{params:e}),o=e=>s["a"].post("/user.user_level/edit",e),n=e=>s["a"].post("/user.user_level/del",e),c=e=>s["a"].get("/user.user_label/lists",{params:e}),u=e=>s["a"].post("/user.user_label/add",e),m=e=>s["a"].get("/user.user_label/detail",{params:e}),p=e=>s["a"].post("/user.user_label/edit",e),d=e=>s["a"].post("/user.user_label/del",e),f=e=>s["a"].get("/user.user/lists",{params:e}),h=()=>s["a"].get("/user.user/otherList"),b=e=>s["a"].get("/user.user/detail",{params:e}),_=e=>s["a"].post("/user.user/setInfo",e),g=e=>s["a"].post("/user.user/setLabel",e),v=e=>s["a"].post("/user.user/setUserLabel",e),x=e=>s["a"].post("/user.user/adjustUserWallet",e),y=()=>s["a"].get("/user.user/index"),k=e=>s["a"].get("/user.user/info",{params:e}),D=e=>s["a"].get("/user.user/userInviterLists",{params:e}),w=e=>s["a"].post("/user.user/adjustFirstLeader",e),L=e=>s["a"].get("/user.user/selectUserLists",{params:e})}}]);
//# sourceMappingURL=chunk-1708c834.c913dfd3.js.map