(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3643b631"],{4704:function(t,s,a){"use strict";a("d889")},"6b2a":function(t,s,a){"use strict";a.d(s,"a",(function(){return i})),a.d(s,"e",(function(){return r})),a.d(s,"d",(function(){return n})),a.d(s,"b",(function(){return l})),a.d(s,"c",(function(){return c}));var e=a("f175");const i=t=>e["a"].get("/data.center/trafficAnalysis",{params:t}),r=t=>e["a"].get("/data.center/userAnalysis",{params:t}),n=t=>e["a"].get("/data.center/transactionAnalysis",{params:t}),l=t=>e["a"].get("/data.center/goodsAnalysis",{params:t}),c=t=>e["a"].get("/data.center/goodsTop",{params:t})},d889:function(t,s,a){},f9c8:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"flow-analysis"},[s("div",{staticClass:"ls-card ls-card-top"},[s("div",{staticClass:"journal-search m-t-16"},[s("el-form",{ref:"formRef",attrs:{inline:"",model:t.summary,"label-width":"80px",size:"small"}},[s("el-form-item",{attrs:{label:"统计时间"}},[s("el-date-picker",{attrs:{format:"yyyy 年 MM 月","value-format":"yyyy-MM",type:"month",placeholder:"选择月"},model:{value:t.month,callback:function(s){t.month=s},expression:"month"}})],1),s("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.getDataCenterVisit}},[t._v("查询")]),s("el-button",{attrs:{size:"small",type:""},on:{click:t.onReset}},[t._v("重置")])],1)],1)]),s("div",{staticClass:"ls-card m-t-16"},[s("div",{staticClass:"card-title"},[t._v(" 数据汇总 ")]),s("div",{staticClass:"card-content m-t-24"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{staticClass:"flex-col col-center",attrs:{span:6}},[s("div",{staticClass:"lighter m-b-8"},[t._v("访问量")]),s("div",{staticClass:"font-size-30"},[t._v(t._s(t.summary.visit))])]),s("el-col",{staticClass:"flex-col col-center",attrs:{span:6}},[s("div",{staticClass:"lighter m-b-8"},[t._v("访客数")]),s("div",{staticClass:"font-size-30"},[t._v(t._s(t.summary.visitor))])])],1)],1)]),s("div",{staticClass:"ls-card m-t-24 ls-chart--visitors"},[s("div",{staticClass:"card-title"},[t._v("访问量")]),s("div",{staticClass:"content"},[s("e-chart",{staticClass:"chart",attrs:{option:t.visitor}})],1)]),s("div",{staticClass:"ls-card m-t-24 ls-chart--turnover"},[s("div",{staticClass:"card-title"},[t._v("访客数")]),s("div",{staticClass:"content"},[s("e-chart",{staticClass:"chart",attrs:{option:t.business}})],1)])])},i=[],r=a("9ab4"),n=a("1b40"),l=a("22b4"),c=a("4cb5"),o=a("3620"),d=a("49bb"),u=a("4b2a"),v=a("9394"),m=a("ff32"),h=a("bb6f"),p=a("f95e"),f=a("6b2a");l["a"]([c["a"],u["a"],p["a"],v["a"],m["a"],h["a"],o["a"],d["a"]]);let y=class extends n["e"]{constructor(){super(...arguments),this.summary={visit:"",visitor:""},this.month=(new Date).getFullYear()+"-"+((new Date).getMonth()+1),this.visitor={tooltip:{trigger:"axis"},legend:{data:["访客"]},xAxis:{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"],splitLine:{show:!0,interval:"1"}},yAxis:{type:"value"},series:[{name:"访客",type:"line",stack:"总量",data:[]}]},this.business={tooltip:{trigger:"axis"},legend:{data:["浏览量"]},xAxis:{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"],splitLine:{show:!0,interval:"1"}},yAxis:{type:"value"},series:[{name:"浏览量",type:"line",stack:"总量",data:[]}]}}onReset(){this.month=(new Date).getFullYear()+"-"+((new Date).getMonth()+1),this.getDataCenterVisit()}getDataCenterVisit(){this.business.xAxis.data=[],this.visitor.xAxis.data=[],Object(f["a"])({month:this.month}).then(t=>{t.user.list[0].data=t.user.list[0].data.reverse(),t.visit.list[0].data=t.visit.list[0].data.reverse(),this.summary=t.summary,this.business.xAxis.data=t.user.date.reverse(),this.visitor.xAxis.data=t.visit.date.reverse(),t.user.list.forEach((t,s)=>{this.business.series[s].data=t.data,this.business.series[s].name=t.name,this.business.legend.data[s]=t.name}),t.visit.list.forEach((t,s)=>{this.visitor.series[s].data=t.data,this.visitor.series[s].name=t.name,this.visitor.legend.data[s]=t.name})})}created(){this.getDataCenterVisit()}};y=Object(r["a"])([n["a"]],y);var b=y,g=b,C=(a("4704"),a("2877")),x=Object(C["a"])(g,e,i,!1,null,"80e7291a",null);s["default"]=x.exports}}]);
//# sourceMappingURL=chunk-3643b631.d69f9d1a.js.map