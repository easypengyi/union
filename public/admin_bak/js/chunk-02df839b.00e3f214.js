(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02df839b"],{"0bb6":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"d",(function(){return n})),a.d(t,"c",(function(){return l})),a.d(t,"e",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"f",(function(){return c})),a.d(t,"g",(function(){return u}));var i=a("f175"),r=function(e){return i["a"].post("/marketing.seckill/add",e)},n=function(e){return i["a"].post("/marketing.seckill/edit",e)},l=function(e){return i["a"].get("/marketing.seckill/detail",{params:e})},s=function(e){return i["a"].get("/marketing.seckill/lists",{params:e})},o=function(e){return i["a"].post("/marketing.seckill/delete",e)},c=function(e){return i["a"].post("/marketing.seckill/open",{params:e})},u=function(e){return i["a"].post("/marketing.seckill/stop",{params:e})}},"13f6":function(e,t,a){"use strict";a("b7c8")},3967:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ls-seckill"},[a("div",{staticClass:"ls-seckill__top ls-card"},[a("el-alert",{attrs:{title:"温馨提示：进行中的秒杀商品可以修改名称和活动时间。",type:"info","show-icon":"",closable:!1}}),a("div",{staticClass:"seckill-search m-t-16"},[a("el-form",{ref:"form",attrs:{inline:"",model:e.queryObj,"label-width":"80px",size:"small"}},[a("el-form-item",{attrs:{label:"活动名称"}},[a("el-input",{attrs:{placeholder:"请输入活动名称"},model:{value:e.queryObj.activity,callback:function(t){e.$set(e.queryObj,"activity",t)},expression:"queryObj.activity"}})],1),a("el-form-item",{attrs:{label:"商品信息"}},[a("el-input",{attrs:{placeholder:"请输入商品名称/编号"},model:{value:e.queryObj.goods,callback:function(t){e.$set(e.queryObj,"goods",t)},expression:"queryObj.goods"}})],1),a("el-form-item",{attrs:{label:"活动时间"}},[a("date-picker",{attrs:{"start-time":e.queryObj.start_time,"end-time":e.queryObj.end_time},on:{"update:startTime":function(t){return e.$set(e.queryObj,"start_time",t)},"update:start-time":function(t){return e.$set(e.queryObj,"start_time",t)},"update:endTime":function(t){return e.$set(e.queryObj,"end_time",t)},"update:end-time":function(t){return e.$set(e.queryObj,"end_time",t)}}})],1),a("el-form-item",{staticClass:"m-l-6",attrs:{label:""}},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.getList(1)}}},[e._v("查询")]),a("el-button",{attrs:{size:"mini"},on:{click:e.resetQueryObj}},[e._v("重置")]),a("export-data",{staticClass:"m-l-10",attrs:{"page-size":e.pager.size,method:e.apiSeckillLists,param:e.queryObj}})],1)],1)],1)],1),a("div",{staticClass:"ls-seckill__content ls-card m-t-16"},[a("el-tabs",{directives:[{name:"loading",rawName:"v-loading",value:e.pager.loading,expression:"pager.loading"}],on:{"tab-click":function(t){return e.getList(1)}},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},e._l(e.tabs,(function(t,i){return a("el-tab-pane",{key:i,attrs:{label:t.label+"("+e.tabCount[t.name]+")",name:t.name}},[a("seckill-pane",{attrs:{pager:e.pager},on:{refresh:function(t){return e.getList()}},model:{value:e.pager.lists,callback:function(t){e.$set(e.pager,"lists",t)},expression:"pager.lists"}})],1)})),1)],1)])},r=[],n=a("5530"),l=a("d4ec"),s=a("bee2"),o=a("262e"),c=a("2caf"),u=(a("d81d"),a("b64b"),a("9ab4")),p=a("1b40"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"seckill-pane"},[a("div",{staticClass:"pane-header"},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.$router.push("/seckill/edit")}}},[e._v("新增秒杀活动")])],1),a("div",{staticClass:"pane-table m-t-16"},[a("el-table",{ref:"paneTable",staticStyle:{width:"100%"},attrs:{data:e.value,size:"mini"}},[a("el-table-column",{attrs:{prop:"name",label:"活动名称","min-width":"100"}}),a("el-table-column",{attrs:{prop:"activity_time",label:"活动时间","min-width":"150"}}),a("el-table-column",{attrs:{prop:"closing_order",label:"秒杀订单","min-width":"100"}}),a("el-table-column",{attrs:{label:"秒杀销售额","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" ￥"+e._s(t.row.sales_amount)+" ")]}}])}),a("el-table-column",{attrs:{prop:"sales_volume",label:"秒杀销售量","min-width":"100"}}),a("el-table-column",{attrs:{label:"活动状态","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.status?a("el-tag",{attrs:{size:"medium",type:"danger"}},[e._v("未开始")]):2==t.row.status?a("el-tag",{attrs:{size:"medium",type:"success"}},[e._v("进行中")]):a("el-tag",{attrs:{size:"medium",type:"info"}},[e._v("已结束")])]}}])}),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间","min-width":"120"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.$router.push({path:"/seckill/edit",query:{id:t.row.id,disabled:!0}})}}},[e._v("详情")]),1==t.row.status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.$router.push({path:"/seckill/edit",query:{id:t.row.id}})}}},[e._v("编辑")]):e._e(),1==t.row.status?a("ls-dialog",{staticClass:"inline m-l-10",attrs:{content:"确认开始秒杀："+t.row.name+"？请谨慎操作。"},on:{confirm:function(a){return e.handleStart(t.row.id)}}},[a("el-button",{attrs:{slot:"trigger",type:"text",size:"small"},slot:"trigger"},[e._v("开始秒杀")])],1):e._e(),2==t.row.status?a("ls-dialog",{staticClass:"inline m-l-10",attrs:{content:"确定结束秒杀："+t.row.name+"？请谨慎操作。"},on:{confirm:function(a){return e.handleStop(t.row.id)}}},[a("el-button",{attrs:{slot:"trigger",type:"text",size:"small"},slot:"trigger"},[e._v("结束秒杀")])],1):e._e(),a("ls-dialog",{staticClass:"inline m-l-10",attrs:{content:"确定删除："+t.row.name+"？请谨慎操作。\n*秒杀活动删除后，未支付订单会被系统自动关闭。"},on:{confirm:function(a){return e.handleDelete(t.row.id)}}},[a("el-button",{attrs:{slot:"trigger",type:"text",size:"small"},slot:"trigger"},[e._v("删除")])],1)]}}])})],1)],1),a("div",{staticClass:"pane-footer m-t-16 flex row-right"},[a("ls-pagination",{on:{change:function(t){return e.$emit("refresh")}},model:{value:e.pager,callback:function(t){e.pager=t},expression:"pager"}})],1)])},d=[],b=a("0a6d"),f=a("3c50"),g=a("d455"),h=a("0bb6"),v=function(e){Object(o["a"])(a,e);var t=Object(c["a"])(a);function a(){return Object(l["a"])(this,a),t.apply(this,arguments)}return Object(s["a"])(a,[{key:"handleDelete",value:function(e){var t=this;Object(h["b"])({id:e}).then((function(){t.$emit("refresh")}))}},{key:"handleStart",value:function(e){var t=this;Object(h["f"])({id:e}).then((function(){t.$emit("refresh")}))}},{key:"handleStop",value:function(e){var t=this;Object(h["g"])({id:e}).then((function(){t.$emit("refresh")}))}}]),a}(p["e"]);Object(u["a"])([Object(p["c"])()],v.prototype,"value",void 0),Object(u["a"])([Object(p["c"])()],v.prototype,"pager",void 0),v=Object(u["a"])([Object(p["a"])({components:{LsDialog:b["a"],LsPagination:f["a"],PopoverInput:g["a"]}})],v);var y=v,k=y,_=a("2877"),O=Object(_["a"])(k,m,d,!1,null,"23b6ae1d",null),j=O.exports,x=a("6ddb"),w=a("5f8a"),D=a("4ae13"),$=a("4201"),z=function(e){Object(o["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;return Object(l["a"])(this,a),e=t.apply(this,arguments),e.tabs=[{label:"全部",name:$["g"][0]},{label:"未开始",name:$["g"][1]},{label:"进行中",name:$["g"][2]},{label:"已结束",name:$["g"][3]}],e.queryObj={activity:"",end_time:"",start_time:"",goods:""},e.lists=[],e.tabCount={all:0,not:0,conduct:0,end:0},e.pager=new x["a"],e.activeName="all",e.apiSeckillLists=h["e"],e}return Object(s["a"])(a,[{key:"getList",value:function(e){var t=this;e&&(this.pager.page=e),this.pager.request({callback:h["e"],params:Object(n["a"])({status:$["g"][this.activeName]},this.queryObj)}).then((function(e){t.tabCount=null===e||void 0===e?void 0:e.extend}))}},{key:"resetQueryObj",value:function(){var e=this;Object.keys(this.queryObj).map((function(t){e.$set(e.queryObj,t,"")})),this.getList()}},{key:"created",value:function(){this.getList()}}]),a}(p["e"]);z=Object(u["a"])([Object(p["a"])({components:{DatePicker:w["a"],ExportData:D["a"],SeckillPane:j}})],z);var C=z,q=C,S=(a("13f6"),Object(_["a"])(q,i,r,!1,null,"b62702ea",null));t["default"]=S.exports},"4ae13":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"export-data inline"},[a("ls-dialog",{ref:"dialog",attrs:{title:"导出设置",width:"500px",top:"35vh","confirm-button-text":"确认导出",async:!0},on:{confirm:e.handleConfirm,open:e.handleOpen}},[a("div",{attrs:{slot:"trigger"},slot:"trigger"},[a("el-button",{attrs:{size:"small"}},[e._v("导出")])],1),a("div",[a("el-form",{ref:"form",attrs:{model:e.formData,"label-width":"120px",size:"small"}},[a("el-form-item",{attrs:{label:"数据量："}},[e._v(" 预计导出"+e._s(e.exportData.count)+"条数据，共"+e._s(e.exportData.sum_page)+"页，每页"+e._s(e.exportData.page_size)+"条数据 ")]),a("el-form-item",{attrs:{label:"导出限制："}},[e._v(" 每次导出最大允许"+e._s(e.exportData.max_page)+"页，共"+e._s(e.exportData.all_max_size)+"条数据 ")]),a("el-form-item",{attrs:{label:"导出范围：",required:""}},[a("el-radio-group",{model:{value:e.formData.page_type,callback:function(t){e.$set(e.formData,"page_type",t)},expression:"formData.page_type"}},[a("el-radio",{attrs:{label:0}},[e._v("全部导出")]),a("el-radio",{attrs:{label:1}},[e._v("分页导出")])],1)],1),1==e.formData.page_type?a("el-form-item",{attrs:{label:"分页范围：",required:""}},[a("div",{staticClass:"flex"},[a("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:e.formData.page_start,callback:function(t){e.$set(e.formData,"page_start",t)},expression:"formData.page_start"}}),a("span",{staticClass:"flex-none m-l-8 m-r-8"},[e._v("页，至")]),a("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:e.formData.page_end,callback:function(t){e.$set(e.formData,"page_end",t)},expression:"formData.page_end"}})],1)]):e._e(),a("el-form-item",{attrs:{label:"导出文件名称：",prop:"file_name"}},[a("el-input",{attrs:{placeholder:"请输入导出文件名称"},model:{value:e.formData.file_name,callback:function(t){e.$set(e.formData,"file_name",t)},expression:"formData.file_name"}})],1)],1)],1)])],1)},r=[],n=a("5530"),l=a("d4ec"),s=a("bee2"),o=a("262e"),c=a("2caf"),u=(a("d3b7"),a("9ab4")),p=a("1b40"),m=a("0a6d"),d=function(e){Object(o["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;return Object(l["a"])(this,a),e=t.apply(this,arguments),e.exportData={},e.formData={page_type:0,page_start:1,page_end:200,file_name:""},e}return Object(s["a"])(a,[{key:"handleOpen",value:function(){this.getData()}},{key:"handleConfirm",value:function(){var e=this,t=this.$loading({lock:!0,text:"正在导出中...",spinner:"el-icon-loading"});this.method(Object(n["a"])(Object(n["a"])(Object(n["a"])({export:2},this.param),this.formData),{},{user_id:this.userId,type:this.type,page_size:this.pageSize})).then((function(){e.$refs.dialog.close()})).finally((function(){t.close()}))}},{key:"getData",value:function(){var e=this;this.method(Object(n["a"])(Object(n["a"])({},this.param),{},{export:1,user_id:this.userId,type:this.type,page_size:this.pageSize})).then((function(t){e.exportData=t,e.formData.file_name=t.file_name,e.formData.page_end=t.page_end,e.formData.page_start=t.page_start}))}},{key:"created",value:function(){}}]),a}(p["e"]);Object(u["a"])([Object(p["c"])()],d.prototype,"method",void 0),Object(u["a"])([Object(p["c"])()],d.prototype,"param",void 0),Object(u["a"])([Object(p["c"])()],d.prototype,"userId",void 0),Object(u["a"])([Object(p["c"])()],d.prototype,"type",void 0),Object(u["a"])([Object(p["c"])()],d.prototype,"pageSize",void 0),d=Object(u["a"])([Object(p["a"])({components:{LsDialog:m["a"]}})],d);var b=d,f=b,g=a("2877"),h=Object(g["a"])(f,i,r,!1,null,null,null);t["a"]=h.exports},"5f8a":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-date-picker",{attrs:{type:e.type,"picker-options":e.pickerOptions,"range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",align:"right","value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:e.changeDate},model:{value:e.pickerValue,callback:function(t){e.pickerValue=t},expression:"pickerValue"}})},r=[],n=a("d4ec"),l=a("bee2"),s=a("262e"),o=a("2caf"),c=a("9ab4"),u=a("1b40"),p=function(e){Object(s["a"])(a,e);var t=Object(o["a"])(a);function a(){var e;return Object(n["a"])(this,a),e=t.apply(this,arguments),e.pickerValue=[],e.pickerOptions={shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},e}return Object(l["a"])(a,[{key:"changeDate",value:function(){var e=this.pickerValue?this.pickerValue:this.pickerValue=["",""];this.$emit("update:start-time",e[0]),this.$emit("update:end-time",e[1])}},{key:"handleStartTime",value:function(e){!this.pickerValue&&(this.pickerValue=[]),this.$set(this.pickerValue,0,e)}},{key:"handleEndTime",value:function(e){!this.pickerValue&&(this.pickerValue=[]),this.$set(this.pickerValue,1,e)}}]),a}(u["e"]);Object(c["a"])([Object(u["c"])()],p.prototype,"startTime",void 0),Object(c["a"])([Object(u["c"])()],p.prototype,"endTime",void 0),Object(c["a"])([Object(u["c"])({default:"datetimerange"})],p.prototype,"type",void 0),Object(c["a"])([Object(u["f"])("startTime",{immediate:!0})],p.prototype,"handleStartTime",null),Object(c["a"])([Object(u["f"])("endTime",{immediate:!0})],p.prototype,"handleEndTime",null),p=Object(c["a"])([u["a"]],p);var m=p,d=m,b=a("2877"),f=Object(b["a"])(d,i,r,!1,null,null,null);t["a"]=f.exports},b7c8:function(e,t,a){},d81d:function(e,t,a){"use strict";var i=a("23e7"),r=a("b727").map,n=a("1dde"),l=n("map");i({target:"Array",proto:!0,forced:!l},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-02df839b.00e3f214.js.map