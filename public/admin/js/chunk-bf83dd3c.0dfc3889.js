(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf83dd3c"],{"2b8e":function(t,e,a){"use strict";a.d(e,"m",(function(){return r})),a.d(e,"n",(function(){return i})),a.d(e,"a",(function(){return l})),a.d(e,"d",(function(){return n})),a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return c})),a.d(e,"e",(function(){return p})),a.d(e,"k",(function(){return d})),a.d(e,"l",(function(){return u})),a.d(e,"f",(function(){return g})),a.d(e,"i",(function(){return m})),a.d(e,"j",(function(){return f})),a.d(e,"h",(function(){return h})),a.d(e,"g",(function(){return b}));var s=a("f175");const r=()=>s["a"].get("settings.delivery.delivery_way/getConfig"),i=t=>s["a"].post("settings.delivery.delivery_way/setConfig",t),l=t=>s["a"].post("/settings.delivery.express/add",t),n=t=>s["a"].post("/settings.delivery.express/edit",t),o=t=>s["a"].post("/settings.delivery.express/del",t),c=t=>s["a"].get("/settings.delivery.express/detail",{params:t}),p=t=>s["a"].get("/settings.delivery.express/lists",{params:t}),d=()=>s["a"].get("settings.delivery.logistics_config/getLogisticsConfig"),u=t=>s["a"].post("settings.delivery.logistics_config/setLogisticsConfig",t),g=t=>s["a"].post("settings.delivery.freight/add",t),m=t=>s["a"].post("settings.delivery.freight/edit",t),f=t=>s["a"].get("settings.delivery.freight/lists",{params:t}),h=t=>s["a"].get("settings.delivery.freight/detail",{params:t}),b=t=>s["a"].post("settings.delivery.freight/del",t)},"4ae1":function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"export-data inline"},[e("ls-dialog",{ref:"dialog",attrs:{title:"导出设置",width:"500px",top:"35vh","confirm-button-text":"确认导出",async:!0},on:{confirm:t.handleConfirm,open:t.handleOpen}},[e("div",{attrs:{slot:"trigger"},slot:"trigger"},[e("el-button",{attrs:{size:"small"}},[t._v("导出")])],1),e("div",[e("el-form",{ref:"form",attrs:{model:t.formData,"label-width":"120px",size:"small"}},[e("el-form-item",{attrs:{label:"数据量："}},[t._v(" 预计导出"+t._s(t.exportData.count)+"条数据，共"+t._s(t.exportData.sum_page)+"页，每页"+t._s(t.exportData.page_size)+"条数据 ")]),e("el-form-item",{attrs:{label:"导出限制："}},[t._v(" 每次导出最大允许"+t._s(t.exportData.max_page)+"页，共"+t._s(t.exportData.all_max_size)+"条数据 ")]),e("el-form-item",{attrs:{label:"导出范围：",required:""}},[e("el-radio-group",{model:{value:t.formData.page_type,callback:function(e){t.$set(t.formData,"page_type",e)},expression:"formData.page_type"}},[e("el-radio",{attrs:{label:0}},[t._v("全部导出")]),e("el-radio",{attrs:{label:1}},[t._v("分页导出")])],1)],1),1==t.formData.page_type?e("el-form-item",{attrs:{label:"分页范围：",required:""}},[e("div",{staticClass:"flex"},[e("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:t.formData.page_start,callback:function(e){t.$set(t.formData,"page_start",e)},expression:"formData.page_start"}}),e("span",{staticClass:"flex-none m-l-8 m-r-8"},[t._v("页，至")]),e("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:t.formData.page_end,callback:function(e){t.$set(t.formData,"page_end",e)},expression:"formData.page_end"}})],1)]):t._e(),e("el-form-item",{attrs:{label:"导出文件名称：",prop:"file_name"}},[e("el-input",{attrs:{placeholder:"请输入导出文件名称"},model:{value:t.formData.file_name,callback:function(e){t.$set(t.formData,"file_name",e)},expression:"formData.file_name"}})],1)],1)],1)])],1)},r=[],i=a("9ab4"),l=a("1b40"),n=a("0a6d");let o=class extends l["e"]{constructor(){super(...arguments),this.exportData={},this.formData={page_type:0,page_start:1,page_end:200,file_name:""}}handleOpen(){this.getData()}handleConfirm(){const t=this.$loading({lock:!0,text:"正在导出中...",spinner:"el-icon-loading"});this.method({export:2,...this.param,...this.formData,user_id:this.userId,type:this.type,page_size:this.pageSize}).then(()=>{this.$refs.dialog.close()}).finally(()=>{t.close()})}getData(){this.method({...this.param,export:1,user_id:this.userId,type:this.type,page_size:this.pageSize}).then(t=>{this.exportData=t,this.formData.file_name=t.file_name,this.formData.page_end=t.page_end,this.formData.page_start=t.page_start})}created(){}};Object(i["a"])([Object(l["c"])()],o.prototype,"method",void 0),Object(i["a"])([Object(l["c"])()],o.prototype,"param",void 0),Object(i["a"])([Object(l["c"])()],o.prototype,"userId",void 0),Object(i["a"])([Object(l["c"])()],o.prototype,"type",void 0),Object(i["a"])([Object(l["c"])()],o.prototype,"pageSize",void 0),o=Object(i["a"])([Object(l["a"])({components:{LsDialog:n["a"]}})],o);var c=o,p=c,d=a("2877"),u=Object(d["a"])(p,s,r,!1,null,null,null);e["a"]=u.exports},"5e86":function(t,e,a){"use strict";a("eba4")},"75d3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"freight-template"},[e("div",{staticClass:"freight-template__top ls-card"},[e("el-page-header",{attrs:{content:t.$route.meta.title},on:{back:function(e){return t.$router.go(-1)}}}),e("div",{staticClass:"ls-top__search m-t-20"},[e("el-form",{ref:"form",attrs:{inline:"",model:t.queryObj,"label-width":"80px",size:"small"}},[e("el-form-item",{attrs:{label:"模版名称"}},[e("el-input",{staticStyle:{width:"280px"},attrs:{placeholder:"请输入模版名称"},model:{value:t.queryObj.name,callback:function(e){t.$set(t.queryObj,"name",e)},expression:"queryObj.name"}})],1),e("el-form-item",{attrs:{label:"计费方式"}},[e("el-select",{attrs:{placeholder:"请选择计费方式"},model:{value:t.queryObj.charge_way,callback:function(e){t.$set(t.queryObj,"charge_way",e)},expression:"queryObj.charge_way"}},[e("el-option",{attrs:{label:"件数计费",value:1}}),e("el-option",{attrs:{label:"重量计费",value:2}}),e("el-option",{attrs:{label:"体积计费",value:3}})],1)],1),e("el-form-item",{staticClass:"m-l-20",attrs:{label:""}},[e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.getList(1)}}},[t._v("查询")]),e("el-button",{attrs:{size:"small"},on:{click:t.handleReset}},[t._v("重置")]),e("export-data",{staticClass:"m-l-10",attrs:{pageSize:t.pager.size,method:t.apiFreightLists,param:t.queryObj}})],1)],1)],1)],1),e("div",{staticClass:"freight-template__content ls-card m-t-16"},[e("div",{staticClass:"ls-content__btns"},[e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.$router.push("/setting/delivery/freight_edit")}}},[t._v("新增运费模版")])],1),e("div",{staticClass:"ls-content__table m-t-16"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.pager.loading,expression:"pager.loading"}],staticStyle:{width:"100%"},attrs:{data:t.pager.lists,size:"mini"}},[e("el-table-column",{attrs:{prop:"name",label:"模版名称"}}),e("el-table-column",{attrs:{prop:"charge_way_name",label:"计费方式"}}),e("el-table-column",{attrs:{prop:"remark",label:"备注"}}),e("el-table-column",{attrs:{prop:"create_time",label:"创建时间"}}),e("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.$router.push({path:"/setting/delivery/freight_edit",query:{id:a.row.id}})}}},[t._v("编辑")]),e("ls-dialog",{staticClass:"m-l-10 inline",attrs:{content:`确定删除：${a.row.name}？`},on:{confirm:function(e){return t.handleDelete(a.row.id)}}},[e("el-button",{attrs:{slot:"trigger",type:"text",size:"small"},slot:"trigger"},[t._v("删除")])],1)]}}])})],1)],1),e("div",{staticClass:"flex row-right m-t-16"},[e("ls-pagination",{on:{change:function(e){return t.getList()}},model:{value:t.pager,callback:function(e){t.pager=e},expression:"pager"}})],1)])])},r=[],i=a("9ab4"),l=a("6ddb"),n=a("1b40"),o=a("0a6d"),c=a("3c50"),p=a("2b8e"),d=a("4ae1");let u=class extends n["e"]{constructor(){super(...arguments),this.queryObj={name:"",charge_way:""},this.pager=new l["a"],this.apiFreightLists=p["j"]}getList(t){t&&(this.pager.page=t),this.pager.request({callback:p["j"],params:{...this.queryObj}})}handleReset(){this.queryObj={name:"",charge_way:""},this.getList()}handleDelete(t){Object(p["g"])({id:t}).then(()=>{this.getList()})}created(){this.getList()}};u=Object(i["a"])([Object(n["a"])({components:{LsDialog:o["a"],LsPagination:c["a"],ExportData:d["a"]}})],u);var g=u,m=g,f=(a("5e86"),a("2877")),h=Object(f["a"])(m,s,r,!1,null,"a276b8ea",null);e["default"]=h.exports},eba4:function(t,e,a){}}]);
//# sourceMappingURL=chunk-bf83dd3c.0dfc3889.js.map