(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c665a69a"],{"14c6":function(t,e,o){"use strict";o.d(e,"q",(function(){return s})),o.d(e,"A",(function(){return r})),o.d(e,"B",(function(){return n})),o.d(e,"x",(function(){return i})),o.d(e,"F",(function(){return l})),o.d(e,"y",(function(){return d})),o.d(e,"E",(function(){return p})),o.d(e,"z",(function(){return u})),o.d(e,"C",(function(){return c})),o.d(e,"D",(function(){return g})),o.d(e,"c",(function(){return m})),o.d(e,"g",(function(){return f})),o.d(e,"h",(function(){return _})),o.d(e,"d",(function(){return b})),o.d(e,"e",(function(){return h})),o.d(e,"f",(function(){return y})),o.d(e,"H",(function(){return v})),o.d(e,"K",(function(){return x})),o.d(e,"I",(function(){return D})),o.d(e,"J",(function(){return w})),o.d(e,"G",(function(){return O})),o.d(e,"O",(function(){return j})),o.d(e,"L",(function(){return z})),o.d(e,"M",(function(){return k})),o.d(e,"N",(function(){return C})),o.d(e,"i",(function(){return L})),o.d(e,"o",(function(){return q})),o.d(e,"j",(function(){return S})),o.d(e,"p",(function(){return $})),o.d(e,"m",(function(){return I})),o.d(e,"k",(function(){return P})),o.d(e,"n",(function(){return J})),o.d(e,"l",(function(){return R})),o.d(e,"P",(function(){return E})),o.d(e,"S",(function(){return N})),o.d(e,"Q",(function(){return A})),o.d(e,"R",(function(){return B})),o.d(e,"u",(function(){return F})),o.d(e,"t",(function(){return G})),o.d(e,"v",(function(){return H})),o.d(e,"w",(function(){return K})),o.d(e,"s",(function(){return M})),o.d(e,"r",(function(){return Q})),o.d(e,"a",(function(){return T})),o.d(e,"b",(function(){return U}));var a=o("f175");const s=t=>a["a"].post("/goods.goods/add",t),r=t=>a["a"].post("/goods.goods/edit",t),n=t=>a["a"].get("/goods.goods/lists",{params:t}),i=t=>a["a"].get("/goods.goods/commonLists",{params:t}),l=t=>a["a"].post("/goods.goods/status",t),d=t=>a["a"].post("/goods.goods/del",t),p=t=>a["a"].post("/goods.goods/sort",t),u=t=>a["a"].get("/goods.goods/detail",{params:{id:t}}),c=t=>a["a"].get("/goods.goods/otherList",{params:t}),g=t=>a["a"].post("goods.goods/rename ",t),m=t=>a["a"].post("/goods.goods_brand/add",t),f=t=>a["a"].get("/goods.goods_brand/lists",{params:t}),_=t=>a["a"].post("/goods.goods_brand/status",t),b=t=>a["a"].post("/goods.goods_brand/del",t),h=t=>a["a"].get("/goods.goods_brand/detail",{params:{id:t}}),y=t=>a["a"].post("/goods.goods_brand/edit",t),v=t=>a["a"].post("/goods.goods_supplier_category/add",t),x=t=>a["a"].get("goods.goods_supplier_category/lists",{params:t}),D=t=>a["a"].post("goods.goods_supplier_category/del",{id:t}),w=t=>a["a"].post("goods.goods_supplier_category/edit",t),O=t=>a["a"].post("/goods.goods_supplier/add",t),j=t=>a["a"].get("/goods.goods_supplier/lists",{params:t}),z=t=>a["a"].post("goods.goods_supplier/del",{id:t}),k=t=>a["a"].get("/goods.goods_supplier/detail",{params:{id:t}}),C=t=>a["a"].post("/goods.goods_supplier/edit",t),L=t=>a["a"].post("/goods.goods_category/add",t),q=t=>a["a"].get("/goods.goods_category/lists",{params:t}),S=t=>a["a"].get("/goods.goods_category/commonLists",{params:t}),$=t=>a["a"].post("/goods.goods_category/status",t),I=t=>a["a"].post("/goods.goods_category/down_good",t),P=t=>a["a"].post("goods.goods_category/del",{id:t}),J=t=>a["a"].post("/goods.goods_category/edit",t),R=t=>a["a"].get("/goods.goods_category/detail",{params:{id:t}}),E=t=>a["a"].post("/goods.goods_unit/add",t),N=t=>a["a"].get("/goods.goods_unit/lists",{params:t}),A=t=>a["a"].post("goods.goods_unit/del",{id:t}),B=t=>a["a"].post("/goods.goods_unit/edit",t),F=t=>a["a"].get("goods.goods_comment/lists",{params:t}),G=t=>a["a"].post("goods.goods_comment/del",t),H=t=>a["a"].post("goods.goods_comment/reply",t),K=t=>a["a"].post("/goods.goods_comment/status",t),M=t=>a["a"].get("goods.goods_comment_assistant/lists",{params:t}),Q=t=>a["a"].post("goods.goods_comment_assistant/add",t),T=t=>a["a"].get("/goods.goods_activity/lists",{params:t}),U=t=>a["a"].post("/goods.goods_activity/status",t)},"4ae1":function(t,e,o){"use strict";var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"export-data inline"},[e("ls-dialog",{ref:"dialog",attrs:{title:"导出设置",width:"500px",top:"35vh","confirm-button-text":"确认导出",async:!0},on:{confirm:t.handleConfirm,open:t.handleOpen}},[e("div",{attrs:{slot:"trigger"},slot:"trigger"},[e("el-button",{attrs:{size:"small"}},[t._v("导出")])],1),e("div",[e("el-form",{ref:"form",attrs:{model:t.formData,"label-width":"120px",size:"small"}},[e("el-form-item",{attrs:{label:"数据量："}},[t._v(" 预计导出"+t._s(t.exportData.count)+"条数据，共"+t._s(t.exportData.sum_page)+"页，每页"+t._s(t.exportData.page_size)+"条数据 ")]),e("el-form-item",{attrs:{label:"导出限制："}},[t._v(" 每次导出最大允许"+t._s(t.exportData.max_page)+"页，共"+t._s(t.exportData.all_max_size)+"条数据 ")]),e("el-form-item",{attrs:{label:"导出范围：",required:""}},[e("el-radio-group",{model:{value:t.formData.page_type,callback:function(e){t.$set(t.formData,"page_type",e)},expression:"formData.page_type"}},[e("el-radio",{attrs:{label:0}},[t._v("全部导出")]),e("el-radio",{attrs:{label:1}},[t._v("分页导出")])],1)],1),1==t.formData.page_type?e("el-form-item",{attrs:{label:"分页范围：",required:""}},[e("div",{staticClass:"flex"},[e("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:t.formData.page_start,callback:function(e){t.$set(t.formData,"page_start",e)},expression:"formData.page_start"}}),e("span",{staticClass:"flex-none m-l-8 m-r-8"},[t._v("页，至")]),e("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:t.formData.page_end,callback:function(e){t.$set(t.formData,"page_end",e)},expression:"formData.page_end"}})],1)]):t._e(),e("el-form-item",{attrs:{label:"导出文件名称：",prop:"file_name"}},[e("el-input",{attrs:{placeholder:"请输入导出文件名称"},model:{value:t.formData.file_name,callback:function(e){t.$set(t.formData,"file_name",e)},expression:"formData.file_name"}})],1)],1)],1)])],1)},s=[],r=o("9ab4"),n=o("1b40"),i=o("0a6d");let l=class extends n["e"]{constructor(){super(...arguments),this.exportData={},this.formData={page_type:0,page_start:1,page_end:200,file_name:""}}handleOpen(){this.getData()}handleConfirm(){const t=this.$loading({lock:!0,text:"正在导出中...",spinner:"el-icon-loading"});this.method({export:2,...this.param,...this.formData,user_id:this.userId,type:this.type,page_size:this.pageSize}).then(()=>{this.$refs.dialog.close()}).finally(()=>{t.close()})}getData(){this.method({...this.param,export:1,user_id:this.userId,type:this.type,page_size:this.pageSize}).then(t=>{this.exportData=t,this.formData.file_name=t.file_name,this.formData.page_end=t.page_end,this.formData.page_start=t.page_start})}created(){}};Object(r["a"])([Object(n["c"])()],l.prototype,"method",void 0),Object(r["a"])([Object(n["c"])()],l.prototype,"param",void 0),Object(r["a"])([Object(n["c"])()],l.prototype,"userId",void 0),Object(r["a"])([Object(n["c"])()],l.prototype,"type",void 0),Object(r["a"])([Object(n["c"])()],l.prototype,"pageSize",void 0),l=Object(r["a"])([Object(n["a"])({components:{LsDialog:i["a"]}})],l);var d=l,p=d,u=o("2877"),c=Object(u["a"])(p,a,s,!1,null,null,null);e["a"]=c.exports},8987:function(t,e,o){"use strict";o("a513")},a513:function(t,e,o){},a5b1:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"ls-supplier"},[e("div",{staticClass:"ls-supplier__top ls-card"},[e("el-alert",{attrs:{title:"温馨提示：发布商品时可以选择供货商，方便货源管理。",type:"info","show-icon":"",closable:!1}}),e("div",{staticClass:"ls-top__search m-t-16"},[e("el-form",{ref:"form",attrs:{inline:"",model:t.queryObj,"label-width":"90px",size:"small"}},[e("el-form-item",{attrs:{label:"供应商名称"}},[e("el-input",{staticStyle:{width:"280px"},attrs:{placeholder:"请输入供应商名称"},model:{value:t.queryObj.name,callback:function(e){t.$set(t.queryObj,"name",e)},expression:"queryObj.name"}})],1),e("el-form-item",{staticClass:"m-l-20",attrs:{label:""}},[e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.getList(1)}}},[t._v("查询")]),e("el-button",{attrs:{size:"small"},on:{click:t.handleReset}},[t._v("重置")]),e("export-data",{staticClass:"m-l-10",attrs:{pageSize:t.pager.size,method:t.apiSupplierLists,param:t.queryObj}})],1)],1)],1)],1),e("div",{staticClass:"ls-supplier__content ls-card m-t-16"},[e("div",{staticClass:"ls-content__btns"},[e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.$router.push("/goods/supplier/edit")}}},[t._v("新增供应商")])],1),e("div",{staticClass:"ls-content__table m-t-16"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.pager.loading,expression:"pager.loading"}],staticStyle:{width:"100%"},attrs:{data:t.pager.lists,size:"mini"}},[e("el-table-column",{attrs:{prop:"code",label:"编号","min-width":"100"}}),e("el-table-column",{attrs:{prop:"name",label:"供应商","min-width":"150"}}),e("el-table-column",{attrs:{prop:"supplier_category",label:"供应商分类","min-width":"150"}}),e("el-table-column",{attrs:{prop:"contact",label:"联系人","min-width":"150"}}),e("el-table-column",{attrs:{prop:"mobile",label:"联系人手机","min-width":"150"}}),e("el-table-column",{attrs:{prop:"landline",label:"座机号码","min-width":"150"}}),e("el-table-column",{attrs:{prop:"sort",label:"排序","min-width":"100"}}),e("el-table-column",{attrs:{prop:"create_time",label:"创建时间","min-width":"150"}}),e("el-table-column",{attrs:{fixed:"right",label:"操作","min-width":"140"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.$router.push({path:"/goods/supplier/edit",query:{id:o.row.id}})}}},[t._v("编辑")]),e("ls-dialog",{staticClass:"m-l-10 inline",attrs:{content:`确定删除：${o.row.name}？请谨慎操作。`},on:{confirm:function(e){return t.handleDelete(o.row.id)}}},[e("el-button",{attrs:{slot:"trigger",type:"text",size:"small"},slot:"trigger"},[t._v("删除")])],1)]}}])})],1)],1),e("div",{staticClass:"flex row-right m-t-16"},[e("ls-pagination",{on:{change:function(e){return t.getList()}},model:{value:t.pager,callback:function(e){t.pager=e},expression:"pager"}})],1)])])},s=[],r=o("9ab4"),n=o("14c6"),i=o("6ddb"),l=o("1b40"),d=o("0a6d"),p=o("3c50"),u=o("4ae1");let c=class extends l["e"]{constructor(){super(...arguments),this.queryObj={name:""},this.pager=new i["a"],this.apiSupplierLists=n["O"]}getList(t){t&&(this.pager.page=t),this.pager.request({callback:n["O"],params:{...this.queryObj}})}handleReset(){this.queryObj={name:""},this.getList()}handleDelete(t){Object(n["L"])(t).then(()=>{this.getList()})}created(){this.getList()}};c=Object(r["a"])([Object(l["a"])({components:{LsDialog:d["a"],LsPagination:p["a"],ExportData:u["a"]}})],c);var g=c,m=g,f=(o("8987"),o("2877")),_=Object(f["a"])(m,a,s,!1,null,"60649130",null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-c665a69a.c6b61ddf.js.map