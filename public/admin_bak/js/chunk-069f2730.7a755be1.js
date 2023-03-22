(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-069f2730"],{"0af0":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lucky-draw-log"},[a("div",{staticClass:"ls-card"},[a("el-page-header",{attrs:{content:"抽奖记录"},on:{back:function(t){return e.$router.go(-1)}}})],1),a("el-form",{attrs:{"label-width":"120px",size:"small"}},[a("div",{staticClass:"ls-card m-t-16"},[a("div",{staticClass:"card-title"},[e._v(" 活动信息 ")]),a("div",{staticClass:"card-content m-t-24"},[a("el-form-item",{attrs:{label:"活动名称"}},[e._v(" "+e._s(e.desc.name)+" ")]),a("el-form-item",{attrs:{label:"活动时间"}},[e._v(" "+e._s(e.desc.start_time_desc)+" - "+e._s(e.desc.end_time_desc)+" ")]),a("el-form-item",{attrs:{label:"活动说明"}},[e._v(" "+e._s(e.desc.remark)+" ")]),a("el-form-item",{attrs:{label:"活动时状态"}},[e._v(" "+e._s(e.desc.status_desc)+" ")]),a("el-form-item",{attrs:{label:"创建时间"}},[e._v(" "+e._s(e.create_time)+" ")])],1)])]),a("div",{staticClass:"m-t-16 ls-card"},[a("el-form",{ref:"form",attrs:{inline:"",model:e.form,"label-width":"70px",size:"small"}},[a("el-form-item",{attrs:{label:"用户信息"}},[a("el-input",{staticClass:"ls-select-keyword",attrs:{placeholder:"请输入用户编号/昵称/手机号码"},model:{value:e.form.user_info,callback:function(t){e.$set(e.form,"user_info",t)},expression:"form.user_info"}})],1),a("el-form-item",{attrs:{label:"奖品类型"}},[a("el-select",{staticClass:"ls-select",attrs:{placeholder:"全部"},model:{value:e.form.prize_type,callback:function(t){e.$set(e.form,"prize_type",t)},expression:"form.prize_type"}},e._l(e.prizeTypeList,(function(e,t){return a("div",{key:t},[a("el-option",{attrs:{label:e.label,value:e.value}})],1)})),0)],1),a("el-form-item",{attrs:{label:"中奖状态"}},[a("el-select",{staticClass:"ls-select",attrs:{placeholder:"全部"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[a("el-option",{attrs:{label:"未中奖",value:0}}),a("el-option",{attrs:{label:"中奖",value:1}})],1)],1),a("el-form-item",{attrs:{label:"中奖时间"}},[a("date-picker",{attrs:{"start-time":e.form.start_time,"end-time":e.form.end_time},on:{"update:startTime":function(t){return e.$set(e.form,"start_time",t)},"update:start-time":function(t){return e.$set(e.form,"start_time",t)},"update:endTime":function(t){return e.$set(e.form,"end_time",t)},"update:end-time":function(t){return e.$set(e.form,"end_time",t)}}})],1),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.query(1)}}},[e._v("查询")]),a("el-button",{attrs:{size:"small"},on:{click:function(t){return e.onReset()}}},[e._v("重置")])],1),a("div",{staticClass:"list-table m-t-16"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.pager.loading,expression:"pager.loading"}],staticStyle:{width:"100%"},attrs:{data:e.pager.lists,size:"mini","header-cell-style":{background:"#f5f8ff"}}},[a("el-table-column",{attrs:{label:"用户信息"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"flex"},[a("el-image",{staticStyle:{width:"34px",height:"34px"},attrs:{src:t.row.avatar}}),a("div",{staticClass:"m-l-10"},[e._v(" "+e._s(t.row.nickname)+" ")])],1)]}}])}),a("el-table-column",{attrs:{prop:"name",label:"奖品名称"}}),a("el-table-column",{attrs:{prop:"prize_type_desc",label:"奖品类型"}}),a("el-table-column",{attrs:{prop:"prize_content",label:"奖品内容"}}),a("el-table-column",{attrs:{prop:"status_desc",label:"中奖状态"}}),a("el-table-column",{attrs:{prop:"create_time",label:"中奖时间","min-width":"120"}})],1)],1),a("div",{staticClass:"flex row-right m-t-16 row-right"},[a("ls-pagination",{on:{change:function(t){return e.query()}},model:{value:e.pager,callback:function(t){e.pager=t},expression:"pager"}})],1)],1)],1)},i=[],n=a("5530"),l=a("d4ec"),s=a("bee2"),c=a("262e"),o=a("2caf"),u=a("9ab4"),d=a("1b40"),m=a("131b"),p=a("6ddb"),f=a("3c50"),b=a("5f8a"),k=function(e){Object(c["a"])(a,e);var t=Object(o["a"])(a);function a(){var e;return Object(l["a"])(this,a),e=t.apply(this,arguments),e.pager=new p["a"],e.form={id:0,start_time:"",end_time:"",user_info:"",prize_type:"",status:""},e.prizeTypeList=[],e.desc={},e.create_time="",e}return Object(s["a"])(a,[{key:"luckyDrawDetail",value:function(){var e=this;Object(m["c"])({id:this.form.id}).then((function(t){console.log("desc",t),e.desc=t}))}},{key:"luckyDrawGetPrizeType",value:function(){var e=this;Object(m["f"])().then((function(t){e.prizeTypeList=t})).catch((function(e){console.log("err",e)}))}},{key:"query",value:function(e){var t=this;e&&(this.pager.page=e),this.pager.request({callback:m["h"],params:Object(n["a"])({},this.form)}).catch((function(){t.$message.error("数据请求失败，刷新重载")}))}},{key:"onReset",value:function(){this.form.start_time="",this.form.end_time="",this.form.user_info="",this.form.prize_type="",this.form.status="",this.query()}},{key:"created",value:function(){var e=this.$route.query;this.form.id=e.id,this.query(),this.luckyDrawGetPrizeType(),this.luckyDrawDetail(),this.create_time=e.create_time}}]),a}(d["e"]);k=Object(u["a"])([Object(d["a"])({components:{LsPagination:f["a"],DatePicker:b["a"]}})],k);var _=k,h=_,y=a("2877"),v=Object(y["a"])(h,r,i,!1,null,"17e259f2",null);t["default"]=v.exports},"131b":function(e,t,a){"use strict";a.d(t,"g",(function(){return i})),a.d(t,"b",(function(){return n})),a.d(t,"e",(function(){return l})),a.d(t,"i",(function(){return s})),a.d(t,"d",(function(){return c})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return u})),a.d(t,"f",(function(){return d})),a.d(t,"h",(function(){return m}));var r=a("f175"),i=function(e){return r["a"].get("/lucky_draw.lucky_draw/lists",{params:e})},n=function(e){return r["a"].post("/lucky_draw.lucky_draw/delete",e)},l=function(e){return r["a"].post("/lucky_draw.lucky_draw/end",e)},s=function(e){return r["a"].post("/lucky_draw.lucky_draw/start",e)},c=function(e){return r["a"].post("lucky_draw.lucky_draw/edit",e)},o=function(e){return r["a"].get("/lucky_draw.lucky_draw/detail",{params:e})},u=function(e){return r["a"].post("lucky_draw.lucky_draw/add",e)},d=function(){return r["a"].get("lucky_draw.lucky_draw/getPrizeType")},m=function(e){return r["a"].get("lucky_draw.lucky_draw/record",{params:e})}},"5f8a":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-date-picker",{attrs:{type:e.type,"picker-options":e.pickerOptions,"range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",align:"right","value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:e.changeDate},model:{value:e.pickerValue,callback:function(t){e.pickerValue=t},expression:"pickerValue"}})},i=[],n=a("d4ec"),l=a("bee2"),s=a("262e"),c=a("2caf"),o=a("9ab4"),u=a("1b40"),d=function(e){Object(s["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;return Object(n["a"])(this,a),e=t.apply(this,arguments),e.pickerValue=[],e.pickerOptions={shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},e}return Object(l["a"])(a,[{key:"changeDate",value:function(){var e=this.pickerValue?this.pickerValue:this.pickerValue=["",""];this.$emit("update:start-time",e[0]),this.$emit("update:end-time",e[1])}},{key:"handleStartTime",value:function(e){!this.pickerValue&&(this.pickerValue=[]),this.$set(this.pickerValue,0,e)}},{key:"handleEndTime",value:function(e){!this.pickerValue&&(this.pickerValue=[]),this.$set(this.pickerValue,1,e)}}]),a}(u["e"]);Object(o["a"])([Object(u["c"])()],d.prototype,"startTime",void 0),Object(o["a"])([Object(u["c"])()],d.prototype,"endTime",void 0),Object(o["a"])([Object(u["c"])({default:"datetimerange"})],d.prototype,"type",void 0),Object(o["a"])([Object(u["f"])("startTime",{immediate:!0})],d.prototype,"handleStartTime",null),Object(o["a"])([Object(u["f"])("endTime",{immediate:!0})],d.prototype,"handleEndTime",null),d=Object(o["a"])([u["a"]],d);var m=d,p=m,f=a("2877"),b=Object(f["a"])(p,r,i,!1,null,null,null);t["a"]=b.exports}}]);
//# sourceMappingURL=chunk-069f2730.7a755be1.js.map