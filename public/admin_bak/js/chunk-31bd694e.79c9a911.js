(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31bd694e"],{"2b8e":function(t,e,a){"use strict";a.d(e,"m",(function(){return i})),a.d(e,"n",(function(){return n})),a.d(e,"a",(function(){return s})),a.d(e,"d",(function(){return l})),a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return c})),a.d(e,"e",(function(){return u})),a.d(e,"k",(function(){return p})),a.d(e,"l",(function(){return d})),a.d(e,"f",(function(){return f})),a.d(e,"i",(function(){return g})),a.d(e,"j",(function(){return m})),a.d(e,"h",(function(){return b})),a.d(e,"g",(function(){return h}));var r=a("f175"),i=function(){return r["a"].get("settings.delivery.delivery_way/getConfig")},n=function(t){return r["a"].post("settings.delivery.delivery_way/setConfig",t)},s=function(t){return r["a"].post("/settings.delivery.express/add",t)},l=function(t){return r["a"].post("/settings.delivery.express/edit",t)},o=function(t){return r["a"].post("/settings.delivery.express/del",t)},c=function(t){return r["a"].get("/settings.delivery.express/detail",{params:t})},u=function(t){return r["a"].get("/settings.delivery.express/lists",{params:t})},p=function(){return r["a"].get("settings.delivery.logistics_config/getLogisticsConfig")},d=function(t){return r["a"].post("settings.delivery.logistics_config/setLogisticsConfig",t)},f=function(t){return r["a"].post("settings.delivery.freight/add",t)},g=function(t){return r["a"].post("settings.delivery.freight/edit",t)},m=function(t){return r["a"].get("settings.delivery.freight/lists",{params:t})},b=function(t){return r["a"].get("settings.delivery.freight/detail",{params:t})},h=function(t){return r["a"].post("settings.delivery.freight/del",t)}},"3c72":function(t,e,a){},"4ae13":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"export-data inline"},[a("ls-dialog",{ref:"dialog",attrs:{title:"导出设置",width:"500px",top:"35vh","confirm-button-text":"确认导出",async:!0},on:{confirm:t.handleConfirm,open:t.handleOpen}},[a("div",{attrs:{slot:"trigger"},slot:"trigger"},[a("el-button",{attrs:{size:"small"}},[t._v("导出")])],1),a("div",[a("el-form",{ref:"form",attrs:{model:t.formData,"label-width":"120px",size:"small"}},[a("el-form-item",{attrs:{label:"数据量："}},[t._v(" 预计导出"+t._s(t.exportData.count)+"条数据，共"+t._s(t.exportData.sum_page)+"页，每页"+t._s(t.exportData.page_size)+"条数据 ")]),a("el-form-item",{attrs:{label:"导出限制："}},[t._v(" 每次导出最大允许"+t._s(t.exportData.max_page)+"页，共"+t._s(t.exportData.all_max_size)+"条数据 ")]),a("el-form-item",{attrs:{label:"导出范围：",required:""}},[a("el-radio-group",{model:{value:t.formData.page_type,callback:function(e){t.$set(t.formData,"page_type",e)},expression:"formData.page_type"}},[a("el-radio",{attrs:{label:0}},[t._v("全部导出")]),a("el-radio",{attrs:{label:1}},[t._v("分页导出")])],1)],1),1==t.formData.page_type?a("el-form-item",{attrs:{label:"分页范围：",required:""}},[a("div",{staticClass:"flex"},[a("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:t.formData.page_start,callback:function(e){t.$set(t.formData,"page_start",e)},expression:"formData.page_start"}}),a("span",{staticClass:"flex-none m-l-8 m-r-8"},[t._v("页，至")]),a("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:t.formData.page_end,callback:function(e){t.$set(t.formData,"page_end",e)},expression:"formData.page_end"}})],1)]):t._e(),a("el-form-item",{attrs:{label:"导出文件名称：",prop:"file_name"}},[a("el-input",{attrs:{placeholder:"请输入导出文件名称"},model:{value:t.formData.file_name,callback:function(e){t.$set(t.formData,"file_name",e)},expression:"formData.file_name"}})],1)],1)],1)])],1)},i=[],n=a("5530"),s=a("d4ec"),l=a("bee2"),o=a("262e"),c=a("2caf"),u=(a("d3b7"),a("9ab4")),p=a("1b40"),d=a("0a6d"),f=function(t){Object(o["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.exportData={},t.formData={page_type:0,page_start:1,page_end:200,file_name:""},t}return Object(l["a"])(a,[{key:"handleOpen",value:function(){this.getData()}},{key:"handleConfirm",value:function(){var t=this,e=this.$loading({lock:!0,text:"正在导出中...",spinner:"el-icon-loading"});this.method(Object(n["a"])(Object(n["a"])(Object(n["a"])({export:2},this.param),this.formData),{},{user_id:this.userId,type:this.type,page_size:this.pageSize})).then((function(){t.$refs.dialog.close()})).finally((function(){e.close()}))}},{key:"getData",value:function(){var t=this;this.method(Object(n["a"])(Object(n["a"])({},this.param),{},{export:1,user_id:this.userId,type:this.type,page_size:this.pageSize})).then((function(e){t.exportData=e,t.formData.file_name=e.file_name,t.formData.page_end=e.page_end,t.formData.page_start=e.page_start}))}},{key:"created",value:function(){}}]),a}(p["e"]);Object(u["a"])([Object(p["c"])()],f.prototype,"method",void 0),Object(u["a"])([Object(p["c"])()],f.prototype,"param",void 0),Object(u["a"])([Object(p["c"])()],f.prototype,"userId",void 0),Object(u["a"])([Object(p["c"])()],f.prototype,"type",void 0),Object(u["a"])([Object(p["c"])()],f.prototype,"pageSize",void 0),f=Object(u["a"])([Object(p["a"])({components:{LsDialog:d["a"]}})],f);var g=f,m=g,b=a("2877"),h=Object(b["a"])(m,r,i,!1,null,null,null);e["a"]=h.exports},"75d3":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"freight-template"},[a("div",{staticClass:"freight-template__top ls-card"},[a("el-page-header",{attrs:{content:t.$route.meta.title},on:{back:function(e){return t.$router.go(-1)}}}),a("div",{staticClass:"ls-top__search m-t-20"},[a("el-form",{ref:"form",attrs:{inline:"",model:t.queryObj,"label-width":"80px",size:"small"}},[a("el-form-item",{attrs:{label:"模版名称"}},[a("el-input",{staticStyle:{width:"280px"},attrs:{placeholder:"请输入模版名称"},model:{value:t.queryObj.name,callback:function(e){t.$set(t.queryObj,"name",e)},expression:"queryObj.name"}})],1),a("el-form-item",{attrs:{label:"计费方式"}},[a("el-select",{attrs:{placeholder:"请选择计费方式"},model:{value:t.queryObj.charge_way,callback:function(e){t.$set(t.queryObj,"charge_way",e)},expression:"queryObj.charge_way"}},[a("el-option",{attrs:{label:"件数计费",value:1}}),a("el-option",{attrs:{label:"重量计费",value:2}}),a("el-option",{attrs:{label:"体积计费",value:3}})],1)],1),a("el-form-item",{staticClass:"m-l-20",attrs:{label:""}},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.getList(1)}}},[t._v("查询")]),a("el-button",{attrs:{size:"small"},on:{click:t.handleReset}},[t._v("重置")]),a("export-data",{staticClass:"m-l-10",attrs:{pageSize:t.pager.size,method:t.apiFreightLists,param:t.queryObj}})],1)],1)],1)],1),a("div",{staticClass:"freight-template__content ls-card m-t-16"},[a("div",{staticClass:"ls-content__btns"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.$router.push("/setting/delivery/freight_edit")}}},[t._v("新增运费模版")])],1),a("div",{staticClass:"ls-content__table m-t-16"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.pager.loading,expression:"pager.loading"}],staticStyle:{width:"100%"},attrs:{data:t.pager.lists,size:"mini"}},[a("el-table-column",{attrs:{prop:"name",label:"模版名称"}}),a("el-table-column",{attrs:{prop:"charge_way_name",label:"计费方式"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注"}}),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.$router.push({path:"/setting/delivery/freight_edit",query:{id:e.row.id}})}}},[t._v("编辑")]),a("ls-dialog",{staticClass:"m-l-10 inline",attrs:{content:"确定删除："+e.row.name+"？"},on:{confirm:function(a){return t.handleDelete(e.row.id)}}},[a("el-button",{attrs:{slot:"trigger",type:"text",size:"small"},slot:"trigger"},[t._v("删除")])],1)]}}])})],1)],1),a("div",{staticClass:"flex row-right m-t-16"},[a("ls-pagination",{on:{change:function(e){return t.getList()}},model:{value:t.pager,callback:function(e){t.pager=e},expression:"pager"}})],1)])])},i=[],n=a("5530"),s=a("d4ec"),l=a("bee2"),o=a("262e"),c=a("2caf"),u=a("9ab4"),p=a("6ddb"),d=a("1b40"),f=a("0a6d"),g=a("3c50"),m=a("2b8e"),b=a("4ae13"),h=function(t){Object(o["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.queryObj={name:"",charge_way:""},t.pager=new p["a"],t.apiFreightLists=m["j"],t}return Object(l["a"])(a,[{key:"getList",value:function(t){t&&(this.pager.page=t),this.pager.request({callback:m["j"],params:Object(n["a"])({},this.queryObj)})}},{key:"handleReset",value:function(){this.queryObj={name:"",charge_way:""},this.getList()}},{key:"handleDelete",value:function(t){var e=this;Object(m["g"])({id:t}).then((function(){e.getList()}))}},{key:"created",value:function(){this.getList()}}]),a}(d["e"]);h=Object(u["a"])([Object(d["a"])({components:{LsDialog:f["a"],LsPagination:g["a"],ExportData:b["a"]}})],h);var v=h,_=v,y=(a("f570"),a("2877")),j=Object(y["a"])(_,r,i,!1,null,"a276b8ea",null);e["default"]=j.exports},f570:function(t,e,a){"use strict";a("3c72")}}]);
//# sourceMappingURL=chunk-31bd694e.79c9a911.js.map