(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a208e8da"],{c136:function(t,e,r){"use strict";r.d(e,"j",(function(){return i})),r.d(e,"i",(function(){return a})),r.d(e,"k",(function(){return s})),r.d(e,"a",(function(){return o})),r.d(e,"f",(function(){return l})),r.d(e,"d",(function(){return p})),r.d(e,"n",(function(){return c})),r.d(e,"h",(function(){return u})),r.d(e,"c",(function(){return d})),r.d(e,"m",(function(){return m})),r.d(e,"b",(function(){return g})),r.d(e,"g",(function(){return f})),r.d(e,"e",(function(){return b})),r.d(e,"l",(function(){return h}));var n=r("f175");const i=t=>n["a"].get("/printer.printer/printerLists",{params:t}),a=t=>n["a"].get("/printer.printer/printerDetail",{params:t}),s=t=>n["a"].get("/printer.printer/getPrinterType",{params:t}),o=t=>n["a"].post("/printer.printer/addPrinter",t),l=t=>n["a"].post("/printer.printer/editPrinter",t),p=t=>n["a"].post("/printer.printer/deletePrinter",t),c=t=>n["a"].post("/printer.printer/testPrinter",t),u=t=>n["a"].post("/order.order/orderPrint",t),d=t=>n["a"].post("/printer.printer/autoPrint",t),m=t=>n["a"].get("/printer.printer/printerTemplateLists",{params:t}),g=t=>n["a"].post("/printer.printer/addTemplate",t),f=t=>n["a"].post("/printer.printer/editTemplate",t),b=t=>n["a"].post("/printer.printer/deleteTemplate",t),h=t=>n["a"].get("/printer.printer/templateDetail",{params:t})},d92d:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"ls-card"},[e("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.goTaskAdd}},[t._v("新增打印机")]),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.pager.loading,expression:"pager.loading"}],ref:"paneTable",staticClass:"m-t-24",staticStyle:{width:"100%"},attrs:{data:t.pager.lists,size:"mini"}},[e("el-table-column",{attrs:{prop:"name",label:"打印机名称","min-width":"180"}}),e("el-table-column",{attrs:{prop:"type_desc",label:"设备类型","min-width":"180"}}),e("el-table-column",{attrs:{prop:"name",label:"自动打印","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(r){return[e("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":t.styleConfig.primary,"inactive-color":"#f4f4f5"},on:{change:function(e){return t.handleStatusPrintSet(r.row)}},model:{value:r.row.auto_print,callback:function(e){t.$set(r.row,"auto_print",e)},expression:"scope.row.auto_print"}})]}}])}),e("el-table-column",{attrs:{prop:"name",label:"状态","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.status?"开启":"关闭")+" ")]}}])}),e("el-table-column",{attrs:{prop:"create_time",label:"创建时间","min-width":"180"}}),e("el-table-column",{attrs:{label:"操作","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(r){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.goTaskEdit(r.row.id)}}},[t._v("编辑")]),e("ls-dialog",{staticClass:"m-l-10 inline",attrs:{content:"确定要测试打印吗？"},on:{confirm:function(e){return t.onTestPrintFunc(r.row.id)}}},[e("el-button",{attrs:{slot:"trigger",type:"text",size:"mini"},slot:"trigger"},[t._v("测试打印 ")])],1),e("ls-dialog",{staticClass:"m-l-10 m-t-4 m-b-4 inline",attrs:{content:"确定要删除这个打印机吗？请谨慎操作"},on:{confirm:function(e){return t.onDel(r.row.id)}}},[e("el-button",{attrs:{slot:"trigger",type:"text",size:"mini"},slot:"trigger"},[t._v("删除 ")])],1)]}}])})],1),e("div",{staticClass:"m-t-24 flex row-right"},[e("ls-pagination",{on:{change:t.getList},model:{value:t.pager,callback:function(e){t.pager=e},expression:"pager"}})],1)],1)])},i=[],a=r("9ab4"),s=r("c136"),o=r("1b40"),l=r("3c50"),p=r("6ddb"),c=r("4201"),u=r("0a6d");let d=class extends o["e"]{constructor(){super(...arguments),this.pager=new p["a"]}getList(){this.pager.request({callback:s["j"],params:{}}).catch(()=>{this.$message.error("数据请求失败，刷新重载!")})}async handleStatusPrintSet(t){await Object(s["c"])({id:t.id}),this.getList()}async onTestPrintFunc(t){await Object(s["n"])({id:t})}onDel(t){Object(s["d"])({id:t}).then(()=>{this.getList(),this.$message.success("删除成功!")}).catch(()=>{this.$message.error("删除失败!")})}goTaskAdd(){this.$router.push({path:"/print/edit_print",query:{mode:c["f"]["ADD"]}})}goTaskEdit(t){this.$router.push({path:"/print/edit_print",query:{id:t,mode:c["f"]["EDIT"]}})}created(){this.getList()}};d=Object(a["a"])([Object(o["a"])({components:{LsDialog:u["a"],LsPagination:l["a"]}})],d);var m=d,g=m,f=r("2877"),b=Object(f["a"])(g,n,i,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-a208e8da.1f42b818.js.map