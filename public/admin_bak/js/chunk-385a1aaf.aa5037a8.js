(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-385a1aaf"],{"192a":function(e,t,a){"use strict";a.d(t,"u",(function(){return n})),a.d(t,"q",(function(){return s})),a.d(t,"r",(function(){return i})),a.d(t,"t",(function(){return o})),a.d(t,"k",(function(){return l})),a.d(t,"p",(function(){return c})),a.d(t,"o",(function(){return u})),a.d(t,"s",(function(){return f})),a.d(t,"j",(function(){return d})),a.d(t,"n",(function(){return p})),a.d(t,"l",(function(){return m})),a.d(t,"m",(function(){return _})),a.d(t,"f",(function(){return b})),a.d(t,"e",(function(){return v})),a.d(t,"a",(function(){return h})),a.d(t,"g",(function(){return g})),a.d(t,"c",(function(){return k})),a.d(t,"h",(function(){return y})),a.d(t,"b",(function(){return x})),a.d(t,"i",(function(){return O})),a.d(t,"d",(function(){return j}));var r=a("f175"),n=function(){return r["a"].get("/order.order/otherLists")},s=function(e){return r["a"].get("/order.order/detail",{params:e})},i=function(e){return r["a"].get("/order.order/lists",{params:e})},o=function(e){return r["a"].post("/order.order/orderRemarks",e)},l=function(e){return r["a"].post("/order.order/cancel",e)},c=function(e){return r["a"].get("/order.order/deliveryInfo",{params:e})},u=function(e){return r["a"].post("/order.order/delivery",e)},f=function(e){return r["a"].get("/order.order/logistics",{params:e})},d=function(e){return r["a"].post("/order.order/addressEdit",e)},p=function(e){return r["a"].post("/order.order/confirm",e)},m=function(e){return r["a"].post("/order.order/changeExpressPrice",e)},_=function(e){return r["a"].post("/order.order/changePrice",e)},b=function(e){return r["a"].get("/after_sale.after_sale/lists",{params:e})},v=function(e){return r["a"].get("/after_sale.after_sale/detail",{params:e})},h=function(e){return r["a"].post("/after_sale.after_sale/agree",e)},g=function(e){return r["a"].post("/after_sale.after_sale/refuse",e)},k=function(e){return r["a"].post("/after_sale.after_sale/confirmGoods",e)},y=function(e){return r["a"].post("/after_sale.after_sale/refuseGoods",e)},x=function(e){return r["a"].post("/after_sale.after_sale/agreeRefund",e)},O=function(e){return r["a"].post("/after_sale.after_sale/refuseRefund",e)},j=function(e){return r["a"].post("/after_sale.after_sale/confirmRefund",e)}},"2be9":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ls-after-sales"},[a("div",{staticClass:"ls-after-sales__top ls-card"},[a("div",{staticClass:"ls-top__search m-t-16"},[a("el-form",{ref:"form",attrs:{inline:"",model:e.form,"label-width":"80px",size:"small"}},[a("el-form-item",{attrs:{label:"售后单号"}},[a("el-input",{staticStyle:{width:"230px"},attrs:{placeholder:"请输入售后单号"},model:{value:e.form.after_sale_sn,callback:function(t){e.$set(e.form,"after_sale_sn",t)},expression:"form.after_sale_sn"}})],1),a("el-form-item",{attrs:{label:"用户信息"}},[a("el-input",{staticStyle:{width:"230px"},attrs:{placeholder:"请输入手机号/用户昵称/用户编号"},model:{value:e.form.user_info,callback:function(t){e.$set(e.form,"user_info",t)},expression:"form.user_info"}})],1),a("el-form-item",{attrs:{label:"商品名称"}},[a("el-input",{staticStyle:{width:"230px"},attrs:{placeholder:"请输入商品名称/商品编码"},model:{value:e.form.goods_info,callback:function(t){e.$set(e.form,"goods_info",t)},expression:"form.goods_info"}})],1),a("el-form-item",{attrs:{label:"快递单号"}},[a("el-input",{staticStyle:{width:"230px"},attrs:{placeholder:"请输入内容"},model:{value:e.form.invoice_no,callback:function(t){e.$set(e.form,"invoice_no",t)},expression:"form.invoice_no"}})],1),a("el-form-item",{attrs:{label:"售后类型"}},[a("el-select",{attrs:{placeholder:"全部"},model:{value:e.form.refund_type,callback:function(t){e.$set(e.form,"refund_type",t)},expression:"form.refund_type"}},[a("el-option",{attrs:{label:"全部",value:""}}),a("el-option",{attrs:{label:"整单退款",value:"1"}}),a("el-option",{attrs:{label:"商品售后",value:"2"}})],1)],1),a("el-form-item",{attrs:{label:"售后方式"}},[a("el-select",{attrs:{placeholder:"请选择商品分类"},model:{value:e.form.refund_method,callback:function(t){e.$set(e.form,"refund_method",t)},expression:"form.refund_method"}},[a("el-option",{attrs:{label:"全部",value:""}}),a("el-option",{attrs:{label:"仅退款",value:"1"}}),a("el-option",{attrs:{label:"退货退款",value:"2"}})],1)],1),a("el-form-item",{attrs:{label:"申请时间"}},[a("date-picker",{attrs:{"start-time":e.form.start_time,"end-time":e.form.end_time},on:{"update:startTime":function(t){return e.$set(e.form,"start_time",t)},"update:start-time":function(t){return e.$set(e.form,"start_time",t)},"update:endTime":function(t){return e.$set(e.form,"end_time",t)},"update:end-time":function(t){return e.$set(e.form,"end_time",t)}}})],1),a("el-form-item",{staticClass:"m-l-6",attrs:{label:""}},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.getAfterSaleLists(1)}}},[e._v("查询")]),a("el-button",{attrs:{size:"small"},on:{click:e.reset}},[e._v("重置")]),a("export-data",{staticClass:"m-l-10",attrs:{pageSize:e.pager.size,method:e.apiAfterSaleLists,param:e.form}})],1)],1)],1)]),a("div",{staticClass:"ls-after-sales__table ls-card m-t-16"},[a("el-tabs",{directives:[{name:"loading",rawName:"v-loading",value:e.pager.loading,expression:"pager.loading"}],on:{"tab-click":function(t){return e.getAfterSaleLists(1)}},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},e._l(e.tabs,(function(t,r){return a("el-tab-pane",{key:r,attrs:{label:t.label+"("+e.tabCount[t.name]+")",name:t.name}},[a("after-sales-pane",{attrs:{pager:e.pager},on:{refresh:function(t){return e.getAfterSaleLists()}},model:{value:e.pager.lists,callback:function(t){e.$set(e.pager,"lists",t)},expression:"pager.lists"}})],1)})),1)],1)])},n=[],s=a("5530"),i=a("d4ec"),o=a("bee2"),l=a("262e"),c=a("2caf"),u=(a("d81d"),a("b64b"),a("9ab4")),f=a("1b40"),d=a("192a"),p=a("6ddb"),m=a("5f8a"),_=a("4201"),b=a("4ae13"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"after-sales-pane"},[a("div",{staticClass:"pane-table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.value,size:"mini"}},[a("el-table-column",{attrs:{label:"售后单号",prop:"sn","min-width":"180"}}),a("el-table-column",{attrs:{label:"用户","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{placement:"top",width:"200",trigger:"hover"}},[a("div",{staticClass:"flex"},[a("span",{staticClass:"flex-none m-r-20"},[e._v("头像：")]),a("el-image",{staticStyle:{width:"40px",height:"40px","border-radius":"50%"},attrs:{src:t.row.avatar}})],1),a("div",{staticClass:"flex m-t-20 col-top"},[a("span",{staticClass:"flex-none m-r-20"},[e._v("昵称：")]),a("span",[e._v(e._s(t.row.nickname))])]),a("div",{staticClass:"flex m-t-20 col-top"},[a("span",{staticClass:"flex-none m-r-20"},[e._v("编号：")]),a("span",[e._v(e._s(t.row.user_sn))])]),a("div",{staticClass:"pointer",attrs:{slot:"reference"},on:{click:function(a){return e.toUser(t.row.user_id)}},slot:"reference"},[e._v(e._s(t.row.nickname))])])]}}])}),a("el-table-column",{attrs:{label:"订单编号",prop:"order_sn","min-width":"150"}}),a("el-table-column",{attrs:{label:"商品图片","min-width":"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._l(t.row.after_sale_goods,(function(r,n){return a("div",{key:n,staticClass:"m-t-10",on:{click:function(a){return e.click(t.row)}}},[n<3?a("el-image",{staticClass:"flex-none",staticStyle:{width:"58px",height:"58px"},attrs:{src:r.goods_snap.image}}):e._e()],1)})),t.row.after_sale_goods.length>3?a("div",{staticClass:"muted m-t-5 flex ",on:{click:function(a){return e.click(t.row)}}},[e._v(" 共"+e._s(t.row.after_sale_goods.length)+"件商品 "),a("i",{staticClass:"el-icon-arrow-right"})]):e._e()]}}])}),a("el-table-column",{attrs:{label:"商品信息","min-width":"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{style:{"margin-bottom":t.row.after_sale_goods.length>2?"30px":""},on:{click:function(a){return e.click(t.row)}}},e._l(t.row.after_sale_goods,(function(t,r){return a("div",{key:r,staticClass:"goods"},[r<3?a("div",{},[a("div",{staticClass:"flex row-between normal p-r-24 line-1"},[a("span",{staticClass:"line-1 name"},[e._v(e._s(t.goods_snap.goods_name))])]),a("div",{staticClass:"xs lighter flex line-1 p-r-24"},[e._v(" 规格："+e._s(t.goods_snap.spec_value_str)+" ")]),a("div",{staticClass:"xs muted flex p-r-24 line-1"},[e._v(" 价格："),a("span",{staticClass:"normal m-r-10"},[e._v("¥"+e._s(t.goods_snap.sub_price))]),e._v(" 数量："),a("span",{staticClass:"normal"},[e._v(e._s(t.goods_snap.goods_num))])])]):e._e()])})),0)]}}])}),a("el-table-column",{attrs:{label:"售后类型",prop:"refund_type_desc","min-width":"100"}}),a("el-table-column",{attrs:{label:"退款方式",prop:"refund_method_desc","min-width":"100"}}),a("el-table-column",{attrs:{label:"退款金额",prop:"refund_total_amount","min-width":"100"}}),a("el-table-column",{attrs:{label:"售后状态",prop:"sub_status_desc","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(t.row.status_desc))]),a("div",[e._v(e._s(t.row.sub_status_desc))])]}}])}),a("el-table-column",{attrs:{label:"申请时间",prop:"create_time","min-width":"180"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.click(t.row)}}},[e._v("售后详情")])]}}])})],1)],1),a("div",{staticClass:"pane-footer m-t-16 flex row-right"},[a("ls-pagination",{on:{change:function(t){return e.$emit("refresh")}},model:{value:e.pager,callback:function(t){e.pager=t},expression:"pager"}})],1)])},h=[],g=a("0a6d"),k=a("3c50"),y=function(e){Object(l["a"])(a,e);var t=Object(c["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return Object(o["a"])(a,[{key:"click",value:function(e){this.$router.push({path:"/order/after_sales_detail",query:{id:e.id}})}},{key:"toUser",value:function(e){this.$router.push({path:"/user/user_details",query:{id:e}})}}]),a}(f["e"]);Object(u["a"])([Object(f["c"])()],y.prototype,"value",void 0),Object(u["a"])([Object(f["c"])()],y.prototype,"pager",void 0),y=Object(u["a"])([Object(f["a"])({components:{LsDialog:g["a"],LsPagination:k["a"]}})],y);var x=y,O=x,j=(a("6047"),a("2877")),w=Object(j["a"])(O,v,h,!1,null,"403afad2",null),D=w.exports,C=function(e){Object(l["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.activeName="all",e.apiAfterSaleLists=d["f"],e.tabs=[{label:"全部",name:_["b"][0]},{label:"售后中",name:_["b"][1]},{label:"售后成功",name:_["b"][2]},{label:"售后失败",name:_["b"][3]}],e.tabCount={all:0,ing:0,success:0,fail:0},e.form={after_sale_sn:"",order_sn:"",user_info:"",goods_info:"",refund_type:"",refund_method:"",start_time:"",end_time:"",invoice_no:""},e.pager=new p["a"],e}return Object(o["a"])(a,[{key:"getAfterSaleLists",value:function(e){var t=this;e&&(this.pager.page=e);var a="all"==this.activeName?"":_["b"][this.activeName];this.pager.request({callback:d["f"],params:Object(s["a"])({status:a},this.form)}).then((function(e){t.tabCount=null===e||void 0===e?void 0:e.extend}))}},{key:"reset",value:function(){var e=this;Object.keys(this.form).map((function(t){e.$set(e.form,t,"")})),this.getAfterSaleLists()}},{key:"created",value:function(){this.getAfterSaleLists()}}]),a}(f["e"]);C=Object(u["a"])([Object(f["a"])({components:{AfterSalesPane:D,DatePicker:m["a"],ExportData:b["a"]}})],C);var $=C,S=$,z=Object(j["a"])(S,r,n,!1,null,null,null);t["default"]=z.exports},"4ae13":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"export-data inline"},[a("ls-dialog",{ref:"dialog",attrs:{title:"导出设置",width:"500px",top:"35vh","confirm-button-text":"确认导出",async:!0},on:{confirm:e.handleConfirm,open:e.handleOpen}},[a("div",{attrs:{slot:"trigger"},slot:"trigger"},[a("el-button",{attrs:{size:"small"}},[e._v("导出")])],1),a("div",[a("el-form",{ref:"form",attrs:{model:e.formData,"label-width":"120px",size:"small"}},[a("el-form-item",{attrs:{label:"数据量："}},[e._v(" 预计导出"+e._s(e.exportData.count)+"条数据，共"+e._s(e.exportData.sum_page)+"页，每页"+e._s(e.exportData.page_size)+"条数据 ")]),a("el-form-item",{attrs:{label:"导出限制："}},[e._v(" 每次导出最大允许"+e._s(e.exportData.max_page)+"页，共"+e._s(e.exportData.all_max_size)+"条数据 ")]),a("el-form-item",{attrs:{label:"导出范围：",required:""}},[a("el-radio-group",{model:{value:e.formData.page_type,callback:function(t){e.$set(e.formData,"page_type",t)},expression:"formData.page_type"}},[a("el-radio",{attrs:{label:0}},[e._v("全部导出")]),a("el-radio",{attrs:{label:1}},[e._v("分页导出")])],1)],1),1==e.formData.page_type?a("el-form-item",{attrs:{label:"分页范围：",required:""}},[a("div",{staticClass:"flex"},[a("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:e.formData.page_start,callback:function(t){e.$set(e.formData,"page_start",t)},expression:"formData.page_start"}}),a("span",{staticClass:"flex-none m-l-8 m-r-8"},[e._v("页，至")]),a("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:e.formData.page_end,callback:function(t){e.$set(e.formData,"page_end",t)},expression:"formData.page_end"}})],1)]):e._e(),a("el-form-item",{attrs:{label:"导出文件名称：",prop:"file_name"}},[a("el-input",{attrs:{placeholder:"请输入导出文件名称"},model:{value:e.formData.file_name,callback:function(t){e.$set(e.formData,"file_name",t)},expression:"formData.file_name"}})],1)],1)],1)])],1)},n=[],s=a("5530"),i=a("d4ec"),o=a("bee2"),l=a("262e"),c=a("2caf"),u=(a("d3b7"),a("9ab4")),f=a("1b40"),d=a("0a6d"),p=function(e){Object(l["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.exportData={},e.formData={page_type:0,page_start:1,page_end:200,file_name:""},e}return Object(o["a"])(a,[{key:"handleOpen",value:function(){this.getData()}},{key:"handleConfirm",value:function(){var e=this,t=this.$loading({lock:!0,text:"正在导出中...",spinner:"el-icon-loading"});this.method(Object(s["a"])(Object(s["a"])(Object(s["a"])({export:2},this.param),this.formData),{},{user_id:this.userId,type:this.type,page_size:this.pageSize})).then((function(){e.$refs.dialog.close()})).finally((function(){t.close()}))}},{key:"getData",value:function(){var e=this;this.method(Object(s["a"])(Object(s["a"])({},this.param),{},{export:1,user_id:this.userId,type:this.type,page_size:this.pageSize})).then((function(t){e.exportData=t,e.formData.file_name=t.file_name,e.formData.page_end=t.page_end,e.formData.page_start=t.page_start}))}},{key:"created",value:function(){}}]),a}(f["e"]);Object(u["a"])([Object(f["c"])()],p.prototype,"method",void 0),Object(u["a"])([Object(f["c"])()],p.prototype,"param",void 0),Object(u["a"])([Object(f["c"])()],p.prototype,"userId",void 0),Object(u["a"])([Object(f["c"])()],p.prototype,"type",void 0),Object(u["a"])([Object(f["c"])()],p.prototype,"pageSize",void 0),p=Object(u["a"])([Object(f["a"])({components:{LsDialog:d["a"]}})],p);var m=p,_=m,b=a("2877"),v=Object(b["a"])(_,r,n,!1,null,null,null);t["a"]=v.exports},"5f8a":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-date-picker",{attrs:{type:e.type,"picker-options":e.pickerOptions,"range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",align:"right","value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:e.changeDate},model:{value:e.pickerValue,callback:function(t){e.pickerValue=t},expression:"pickerValue"}})},n=[],s=a("d4ec"),i=a("bee2"),o=a("262e"),l=a("2caf"),c=a("9ab4"),u=a("1b40"),f=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.pickerValue=[],e.pickerOptions={shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},e}return Object(i["a"])(a,[{key:"changeDate",value:function(){var e=this.pickerValue?this.pickerValue:this.pickerValue=["",""];this.$emit("update:start-time",e[0]),this.$emit("update:end-time",e[1])}},{key:"handleStartTime",value:function(e){!this.pickerValue&&(this.pickerValue=[]),this.$set(this.pickerValue,0,e)}},{key:"handleEndTime",value:function(e){!this.pickerValue&&(this.pickerValue=[]),this.$set(this.pickerValue,1,e)}}]),a}(u["e"]);Object(c["a"])([Object(u["c"])()],f.prototype,"startTime",void 0),Object(c["a"])([Object(u["c"])()],f.prototype,"endTime",void 0),Object(c["a"])([Object(u["c"])({default:"datetimerange"})],f.prototype,"type",void 0),Object(c["a"])([Object(u["f"])("startTime",{immediate:!0})],f.prototype,"handleStartTime",null),Object(c["a"])([Object(u["f"])("endTime",{immediate:!0})],f.prototype,"handleEndTime",null),f=Object(c["a"])([u["a"]],f);var d=f,p=d,m=a("2877"),_=Object(m["a"])(p,r,n,!1,null,null,null);t["a"]=_.exports},6047:function(e,t,a){"use strict";a("a578")},a578:function(e,t,a){},d81d:function(e,t,a){"use strict";var r=a("23e7"),n=a("b727").map,s=a("1dde"),i=s("map");r({target:"Array",proto:!0,forced:!i},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-385a1aaf.aa5037a8.js.map