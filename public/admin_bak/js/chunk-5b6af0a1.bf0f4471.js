(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b6af0a1"],{3803:function(t,e,a){"use strict";a("7566")},4072:function(t,e,a){"use strict";a.d(e,"f",(function(){return n})),a.d(e,"z",(function(){return r})),a.d(e,"A",(function(){return o})),a.d(e,"m",(function(){return s})),a.d(e,"l",(function(){return l})),a.d(e,"k",(function(){return u})),a.d(e,"n",(function(){return c})),a.d(e,"u",(function(){return d})),a.d(e,"t",(function(){return p})),a.d(e,"c",(function(){return m})),a.d(e,"d",(function(){return b})),a.d(e,"e",(function(){return f})),a.d(e,"v",(function(){return g})),a.d(e,"y",(function(){return h})),a.d(e,"b",(function(){return _})),a.d(e,"a",(function(){return v})),a.d(e,"g",(function(){return D})),a.d(e,"i",(function(){return y})),a.d(e,"j",(function(){return k})),a.d(e,"s",(function(){return x})),a.d(e,"q",(function(){return O})),a.d(e,"r",(function(){return j})),a.d(e,"o",(function(){return w})),a.d(e,"p",(function(){return S})),a.d(e,"w",(function(){return C})),a.d(e,"h",(function(){return $})),a.d(e,"x",(function(){return z}));var i=a("f175"),n=function(){return i["a"].get("/distribution.distribution_data/dataCenter")},r=function(){return i["a"].get("/distribution.distribution_data/topMemberEarnings")},o=function(){return i["a"].get("/distribution.distribution_data/topMemberFans")},s=function(t){return i["a"].get("/distribution.distribution_goods/lists",{params:t})},l=function(t){return i["a"].post("/distribution.distribution_goods/join",t)},u=function(t){return i["a"].get("/distribution.distribution_goods/detail",{params:t})},c=function(t){return i["a"].post("/distribution.distribution_goods/set",t)},d=function(t){return i["a"].get("/distribution.distribution_member/lists",{params:t})},p=function(t){return i["a"].get("/distribution.distribution_apply/detail",{params:t})},m=function(t){return i["a"].get("/distribution.distribution_apply/lists",{params:t})},b=function(t){return i["a"].post("/distribution.distribution_apply/pass",t)},f=function(t){return i["a"].post("/distribution.distribution_apply/refuse",t)},g=function(t){return i["a"].post("/distribution.distribution_member/open",t)},h=function(t){return i["a"].post("/distribution.distribution_member/freeze",t)},_=function(t){return i["a"].get("/distribution.distribution_member/adjustLevelInfo",{params:t})},v=function(t){return i["a"].post("/distribution.distribution_member/adjustLevel",t)},D=function(t){return i["a"].get("/distribution.distribution_member/detail",{params:t})},y=function(t){return i["a"].get("/distribution.distribution_member/getFans",{params:t})},k=function(t){return i["a"].get("/distribution.distribution_member/getFansLists",{params:t})},x=function(t){return i["a"].get("/distribution.distribution_level/lists",t)},O=function(t){return i["a"].get("/distribution.distribution_level/detail",{params:t})},j=function(t){return i["a"].post("/distribution.distribution_level/edit",t)},w=function(t){return i["a"].post("/distribution.distribution_level/add",t)},S=function(t){return i["a"].post("/distribution.distribution_level/delete",t)},C=function(t){return i["a"].get("/distribution.distribution_order_goods/lists",{params:t})},$=function(t){return i["a"].get("/distribution.distribution_config/getConfig",{params:t})},z=function(t){return i["a"].post("/distribution.distribution_config/setConfig",t)}},"4ae13":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"export-data inline"},[a("ls-dialog",{ref:"dialog",attrs:{title:"导出设置",width:"500px",top:"35vh","confirm-button-text":"确认导出",async:!0},on:{confirm:t.handleConfirm,open:t.handleOpen}},[a("div",{attrs:{slot:"trigger"},slot:"trigger"},[a("el-button",{attrs:{size:"small"}},[t._v("导出")])],1),a("div",[a("el-form",{ref:"form",attrs:{model:t.formData,"label-width":"120px",size:"small"}},[a("el-form-item",{attrs:{label:"数据量："}},[t._v(" 预计导出"+t._s(t.exportData.count)+"条数据，共"+t._s(t.exportData.sum_page)+"页，每页"+t._s(t.exportData.page_size)+"条数据 ")]),a("el-form-item",{attrs:{label:"导出限制："}},[t._v(" 每次导出最大允许"+t._s(t.exportData.max_page)+"页，共"+t._s(t.exportData.all_max_size)+"条数据 ")]),a("el-form-item",{attrs:{label:"导出范围：",required:""}},[a("el-radio-group",{model:{value:t.formData.page_type,callback:function(e){t.$set(t.formData,"page_type",e)},expression:"formData.page_type"}},[a("el-radio",{attrs:{label:0}},[t._v("全部导出")]),a("el-radio",{attrs:{label:1}},[t._v("分页导出")])],1)],1),1==t.formData.page_type?a("el-form-item",{attrs:{label:"分页范围：",required:""}},[a("div",{staticClass:"flex"},[a("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:t.formData.page_start,callback:function(e){t.$set(t.formData,"page_start",e)},expression:"formData.page_start"}}),a("span",{staticClass:"flex-none m-l-8 m-r-8"},[t._v("页，至")]),a("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:t.formData.page_end,callback:function(e){t.$set(t.formData,"page_end",e)},expression:"formData.page_end"}})],1)]):t._e(),a("el-form-item",{attrs:{label:"导出文件名称：",prop:"file_name"}},[a("el-input",{attrs:{placeholder:"请输入导出文件名称"},model:{value:t.formData.file_name,callback:function(e){t.$set(t.formData,"file_name",e)},expression:"formData.file_name"}})],1)],1)],1)])],1)},n=[],r=a("5530"),o=a("d4ec"),s=a("bee2"),l=a("262e"),u=a("2caf"),c=(a("d3b7"),a("9ab4")),d=a("1b40"),p=a("0a6d"),m=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.exportData={},t.formData={page_type:0,page_start:1,page_end:200,file_name:""},t}return Object(s["a"])(a,[{key:"handleOpen",value:function(){this.getData()}},{key:"handleConfirm",value:function(){var t=this,e=this.$loading({lock:!0,text:"正在导出中...",spinner:"el-icon-loading"});this.method(Object(r["a"])(Object(r["a"])(Object(r["a"])({export:2},this.param),this.formData),{},{user_id:this.userId,type:this.type,page_size:this.pageSize})).then((function(){t.$refs.dialog.close()})).finally((function(){e.close()}))}},{key:"getData",value:function(){var t=this;this.method(Object(r["a"])(Object(r["a"])({},this.param),{},{export:1,user_id:this.userId,type:this.type,page_size:this.pageSize})).then((function(e){t.exportData=e,t.formData.file_name=e.file_name,t.formData.page_end=e.page_end,t.formData.page_start=e.page_start}))}},{key:"created",value:function(){}}]),a}(d["e"]);Object(c["a"])([Object(d["c"])()],m.prototype,"method",void 0),Object(c["a"])([Object(d["c"])()],m.prototype,"param",void 0),Object(c["a"])([Object(d["c"])()],m.prototype,"userId",void 0),Object(c["a"])([Object(d["c"])()],m.prototype,"type",void 0),Object(c["a"])([Object(d["c"])()],m.prototype,"pageSize",void 0),m=Object(c["a"])([Object(d["a"])({components:{LsDialog:p["a"]}})],m);var b=m,f=b,g=a("2877"),h=Object(g["a"])(f,i,n,!1,null,null,null);e["a"]=h.exports},"5f8a":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-date-picker",{attrs:{type:t.type,"picker-options":t.pickerOptions,"range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",align:"right","value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:t.changeDate},model:{value:t.pickerValue,callback:function(e){t.pickerValue=e},expression:"pickerValue"}})},n=[],r=a("d4ec"),o=a("bee2"),s=a("262e"),l=a("2caf"),u=a("9ab4"),c=a("1b40"),d=function(t){Object(s["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.pickerValue=[],t.pickerOptions={shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},t}return Object(o["a"])(a,[{key:"changeDate",value:function(){var t=this.pickerValue?this.pickerValue:this.pickerValue=["",""];this.$emit("update:start-time",t[0]),this.$emit("update:end-time",t[1])}},{key:"handleStartTime",value:function(t){!this.pickerValue&&(this.pickerValue=[]),this.$set(this.pickerValue,0,t)}},{key:"handleEndTime",value:function(t){!this.pickerValue&&(this.pickerValue=[]),this.$set(this.pickerValue,1,t)}}]),a}(c["e"]);Object(u["a"])([Object(c["c"])()],d.prototype,"startTime",void 0),Object(u["a"])([Object(c["c"])()],d.prototype,"endTime",void 0),Object(u["a"])([Object(c["c"])({default:"datetimerange"})],d.prototype,"type",void 0),Object(u["a"])([Object(c["f"])("startTime",{immediate:!0})],d.prototype,"handleStartTime",null),Object(u["a"])([Object(c["f"])("endTime",{immediate:!0})],d.prototype,"handleEndTime",null),d=Object(u["a"])([c["a"]],d);var p=d,m=p,b=a("2877"),f=Object(b["a"])(m,i,n,!1,null,null,null);e["a"]=f.exports},7566:function(t,e,a){},b255:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ls-goods"},[a("div",{staticClass:"ls-goods__top ls-card"},[a("el-alert",{attrs:{title:"温馨提示：1.分销订单明细。",type:"info","show-icon":"",closable:!1}}),a("div",{staticClass:"coupon-search m-t-16"},[a("el-form",{ref:"form",attrs:{inline:"",model:t.goodsSearchData,"label-width":"100px",size:"small"}},[a("el-form-item",{attrs:{label:"订单信息"}},[a("el-input",{staticStyle:{width:"280px"},attrs:{placeholder:"请输入订单编号"},model:{value:t.goodsSearchData.sn,callback:function(e){t.$set(t.goodsSearchData,"sn",e)},expression:"goodsSearchData.sn"}})],1),a("el-form-item",{attrs:{label:"用户信息"}},[a("el-input",{staticStyle:{width:"280px"},attrs:{placeholder:"用户名称/编码"},model:{value:t.goodsSearchData.nickname,callback:function(e){t.$set(t.goodsSearchData,"nickname",e)},expression:"goodsSearchData.nickname"}})],1),a("el-form-item",{attrs:{label:"商品信息"}},[a("el-input",{staticStyle:{width:"280px"},attrs:{placeholder:"商品名称/编码"},model:{value:t.goodsSearchData.name,callback:function(e){t.$set(t.goodsSearchData,"name",e)},expression:"goodsSearchData.name"}})],1),a("el-form-item",{attrs:{label:"分销商"}},[a("el-input",{staticStyle:{width:"280px"},attrs:{placeholder:"请输入分销商信息"},model:{value:t.goodsSearchData.name,callback:function(e){t.$set(t.goodsSearchData,"name",e)},expression:"goodsSearchData.name"}})],1),a("el-form-item",{attrs:{label:"佣金状态"}},[a("el-select",{staticClass:"header-input",attrs:{placeholder:"全部"},model:{value:t.goodsSearchData.status,callback:function(e){t.$set(t.goodsSearchData,"status",e)},expression:"goodsSearchData.status"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",{attrs:{label:"下单时间"}},[a("date-picker",{attrs:{"start-time":t.goodsSearchData.start_time,"end-time":t.goodsSearchData.end_time},on:{"update:startTime":function(e){return t.$set(t.goodsSearchData,"start_time",e)},"update:start-time":function(e){return t.$set(t.goodsSearchData,"start_time",e)},"update:endTime":function(e){return t.$set(t.goodsSearchData,"end_time",e)},"update:end-time":function(e){return t.$set(t.goodsSearchData,"end_time",e)}}})],1),a("el-form-item",{staticClass:"m-l-6",attrs:{label:""}},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.getDistributionData(1)}}},[t._v("查询")]),a("el-button",{attrs:{size:"small"},on:{click:t.resetgoodsSearchData}},[t._v("重置")]),a("export-data",{staticClass:"m-l-10",attrs:{pageSize:t.pager.size,method:t.apiDistributionOrdersLists,param:t.goodsSearchData}})],1)],1)],1)],1),a("div",{staticClass:"m-t-24 ls-card pane-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.pager.loading,expression:"pager.loading"}],ref:"paneTable",staticStyle:{width:"100%"},attrs:{data:t.pager.lists,size:"mini"}},[a("el-table-column",{attrs:{prop:"name",label:"买家","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"flex"},[a("el-image",{staticClass:"flex-none",staticStyle:{width:"58px",height:"58px"},attrs:{src:e.row.buyer_avatar}}),a("div",{staticClass:"goods-info m-l-8"},[a("div",{staticClass:"line-2"},[t._v(t._s(e.row.buyer_nickname)+"("+t._s(e.row.buyer_sn)+")")])])],1)]}}])}),a("el-table-column",{attrs:{prop:"sn",label:"订单编号","min-width":"180"}}),a("el-table-column",{attrs:{prop:"is_distribution_desc",label:"商品信息","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"flex"},[a("el-image",{staticClass:"flex-none",staticStyle:{width:"58px",height:"58px"},attrs:{src:e.row.image}}),a("div",{staticClass:"goods-info m-l-8"},[a("div",{staticClass:"line-2"},[t._v(t._s(e.row.goods_name))])])],1)]}}])}),a("el-table-column",{attrs:{prop:"goods_price",label:"实付单价","min-width":"80"}}),a("el-table-column",{attrs:{prop:"goods_num",label:"购买数量","min-width":"100"}}),a("el-table-column",{attrs:{prop:"total_pay_price",label:"实付金额","min-width":"80"}}),a("el-table-column",{attrs:{prop:"level_desc",label:"当前分销等级","min-width":"130"}}),a("el-table-column",{attrs:{prop:"ratio",label:"当前佣金比例","min-width":"80"}}),a("el-table-column",{attrs:{prop:"earnings",label:"佣金金额","min-width":"80"}}),a("el-table-column",{attrs:{prop:"status_desc",label:"佣金状态","min-width":"80"}}),a("el-table-column",{attrs:{prop:"settlement_time",label:"结算时间","min-width":"110"}}),a("el-table-column",{attrs:{prop:"order_create_time",label:"下单时间","min-width":"110"}})],1),a("div",{staticClass:"m-t-24 flex row-right"},[a("ls-pagination",{on:{change:function(e){return t.getDistributionData()}},model:{value:t.pager,callback:function(e){t.pager=e},expression:"pager"}})],1)],1)])},n=[],r=a("5530"),o=a("d4ec"),s=a("bee2"),l=a("262e"),u=a("2caf"),c=(a("d81d"),a("b64b"),a("9ab4")),d=a("1b40"),p=a("3c50"),m=a("0a6d"),b=a("6ddb"),f=a("5f8a"),g=a("4ae13"),h=a("4072"),_=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.apiDistributionOrdersLists=h["w"],t.distributionList=[],t.goodsSearchData={nickname:"",name:"",status:"",start_time:"",end_time:""},t.options=[{value:"",label:"全部"},{value:"0",label:"待结算"},{value:"1",label:"已入账"},{value:"2",label:"已失效"}],t.pager=new b["a"],t}return Object(s["a"])(a,[{key:"getDistributionData",value:function(t){t&&(this.pager.page=t),this.pager.request({callback:h["w"],params:Object(r["a"])({},this.goodsSearchData)})}},{key:"resetgoodsSearchData",value:function(){var t=this;Object.keys(this.goodsSearchData).map((function(e){t.$set(t.goodsSearchData,e,"")})),this.getDistributionData()}},{key:"created",value:function(){this.getDistributionData()}}]),a}(d["e"]);_=Object(c["a"])([Object(d["a"])({components:{LsPagination:p["a"],LsDialog:m["a"],DatePicker:f["a"],ExportData:g["a"]}})],_);var v=_,D=v,y=(a("3803"),a("2877")),k=Object(y["a"])(D,i,n,!1,null,"63aed770",null);e["default"]=k.exports},d81d:function(t,e,a){"use strict";var i=a("23e7"),n=a("b727").map,r=a("1dde"),o=r("map");i({target:"Array",proto:!0,forced:!o},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-5b6af0a1.bf0f4471.js.map