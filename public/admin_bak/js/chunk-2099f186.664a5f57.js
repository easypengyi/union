(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2099f186"],{"6b2a":function(t,a,e){"use strict";e.d(a,"a",(function(){return i})),e.d(a,"e",(function(){return r})),e.d(a,"d",(function(){return n})),e.d(a,"b",(function(){return c})),e.d(a,"c",(function(){return o}));var s=e("f175"),i=function(t){return s["a"].get("/data.center/trafficAnalysis",{params:t})},r=function(t){return s["a"].get("/data.center/userAnalysis",{params:t})},n=function(t){return s["a"].get("/data.center/transactionAnalysis",{params:t})},c=function(t){return s["a"].get("/data.center/goodsAnalysis",{params:t})},o=function(t){return s["a"].get("/data.center/goodsTop",{params:t})}},b808:function(t,a,e){"use strict";e("e7f5")},da6a:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"user"},[e("div",{staticClass:"ls-card ls-card-top"},[e("div",{staticClass:"journal-search m-t-16"},[e("el-form",{ref:"formRef",attrs:{inline:"",model:t.summary,"label-width":"80px",size:"small"}},[e("el-form-item",{attrs:{label:"统计时间"}},[e("el-date-picker",{attrs:{format:"yyyy 年 MM 月","value-format":"yyyy-MM",type:"month",placeholder:"选择月"},model:{value:t.month,callback:function(a){t.month=a},expression:"month"}})],1),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.getDataCenterVisit}},[t._v("查询")]),e("el-button",{attrs:{size:"small",type:""},on:{click:t.onReset}},[t._v("重置")])],1)],1)]),e("div",{staticClass:"ls-card m-t-16"},[e("div",{staticClass:"card-title"},[t._v(" 数据汇总 ")]),e("div",{staticClass:"card-content m-t-24"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{staticClass:"flex-col col-center",attrs:{span:6}},[e("div",{staticClass:"lighter m-b-8"},[t._v("成交订单")]),e("div",{staticClass:"font-size-30"},[t._v(t._s(t.summary.order))])]),e("el-col",{staticClass:"flex-col col-center",attrs:{span:6}},[e("div",{staticClass:"lighter m-b-8"},[t._v("订单金额")]),e("div",{staticClass:"font-size-30"},[t._v(t._s(t.summary.order_amount))])])],1)],1)]),e("div",{staticClass:"ls-card m-t-24 ls-chart--visitors"},[e("div",{staticClass:"card-title"},[t._v("成交订单")]),e("div",{staticClass:"content"},[e("e-chart",{staticClass:"chart",attrs:{option:t.business}})],1)]),e("div",{staticClass:"ls-card m-t-24 ls-chart--turnover"},[e("div",{staticClass:"card-title"},[t._v("订单金额")]),e("div",{staticClass:"content"},[e("e-chart",{staticClass:"chart",attrs:{option:t.visitor}})],1)])])},i=[],r=e("d4ec"),n=e("bee2"),c=e("262e"),o=e("2caf"),l=(e("159b"),e("b0c0"),e("9ab4")),d=e("1b40"),u=e("22b4"),m=e("4cb5"),v=e("3620"),f=e("49bb"),b=e("4b2a"),h=e("9394"),p=e("ff32"),y=e("bb6f"),g=e("f95e"),C=e("6b2a");u["a"]([m["a"],b["a"],g["a"],h["a"],p["a"],y["a"],v["a"],f["a"]]);var x=function(t){Object(c["a"])(e,t);var a=Object(o["a"])(e);function e(){var t;return Object(r["a"])(this,e),t=a.apply(this,arguments),t.summary={visit:"",visitor:""},t.month=(new Date).getFullYear()+"-"+((new Date).getMonth()+1),t.visitor={tooltip:{trigger:"axis"},legend:{data:["订单金额"]},xAxis:{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"],splitLine:{show:!0,interval:"1"}},yAxis:{type:"value"},series:[{name:"成交订单",type:"line",stack:"总量",data:[]}]},t.business={tooltip:{trigger:"axis"},legend:{data:["订单金额"]},xAxis:{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"],splitLine:{show:!0,interval:"1"}},yAxis:{type:"value"},series:[{name:"订单金额",type:"line",stack:"总量",data:[]}]},t}return Object(n["a"])(e,[{key:"onReset",value:function(){this.month=(new Date).getFullYear()+"-"+((new Date).getMonth()+1),this.getDataCenterVisit()}},{key:"getDataCenterVisit",value:function(){var t=this;this.business.xAxis.data=[],this.visitor.xAxis.data=[],Object(C["d"])({month:this.month}).then((function(a){a.order.list[0].data=a.order.list[0].data.reverse(),a.order_amount.list[0].data=a.order_amount.list[0].data.reverse(),t.summary=a.summary,t.business.xAxis.data=a.order.date.reverse(),t.visitor.xAxis.data=a.order_amount.date.reverse(),a.order.list.forEach((function(a,e){t.business.series[e].data=a.data,t.business.series[e].name=a.name,t.business.legend.data[e]=a.name})),a.order_amount.list.forEach((function(a,e){t.visitor.series[e].data=a.data,t.visitor.series[e].name=a.name,t.visitor.legend.data[e]=a.name}))}))}},{key:"created",value:function(){this.getDataCenterVisit()}}]),e}(d["e"]);x=Object(l["a"])([d["a"]],x);var _=x,w=_,k=(e("b808"),e("2877")),A=Object(k["a"])(w,s,i,!1,null,"f8957d96",null);a["default"]=A.exports},e7f5:function(t,a,e){}}]);
//# sourceMappingURL=chunk-2099f186.664a5f57.js.map