(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-266c489d"],{"724e":function(t,s,a){"use strict";a("7e4f")},"7e4f":function(t,s,a){},e74b:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"ls-home"},[a("el-row",{staticClass:"ls-home__top col-stretch",attrs:{gutter:16,type:"flex"}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"ls-card ls-top__store"},[a("div",{staticClass:"title weight-500"},[t._v("商城信息")]),a("div",{staticClass:"content"},[a("div",{staticClass:"flex"},[a("el-image",{staticStyle:{width:"58px",height:"58px","border-radius":"50%"},attrs:{fit:"scale-down",src:t.indexData.shop_info.logo}}),a("div",{staticClass:"m-l-20"},[a("div",{staticClass:"store-name sm flex weight-600"},[a("span",[t._v(t._s(t.indexData.shop_info.name))])]),a("div",{staticClass:"store-status m-t-14 flex"},[a("span",{staticClass:"label m-r-20"},[t._v("管理员")]),a("span",[t._v(t._s(t.indexData.shop_info.admin_name))])])])],1),a("div",{staticClass:"store-time m-t-14 flex"})])])]),a("el-col",{attrs:{span:18}},[a("div",{staticClass:"ls-card ls-top__data"},[a("div",{staticClass:"title"},[t._v("今日数据")]),a("div",{staticClass:"content"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"lighter"},[t._v("营业额（元）")]),a("div",{staticClass:"m-t-8 font-size-30"},[t._v(t._s(t.indexData.today.today_order_amount))])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"lighter"},[t._v("成交订单（笔）")]),a("div",{staticClass:"m-t-8 font-size-30"},[t._v(t._s(t.indexData.today.today_order_num))])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"lighter"},[t._v("访客数（人）")]),a("div",{staticClass:"m-t-8 font-size-30"},[t._v(t._s(t.indexData.today.today_visitor))])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"lighter"},[t._v("新增用户（人）")]),a("div",{staticClass:"m-t-8 font-size-30"},[t._v(t._s(t.indexData.today.today_new_user))])])],1)],1)])])],1),a("div",{staticClass:"ls-card ls-home_todo m-t-16"},[a("div",{staticClass:"title"},[t._v("待办事项")]),a("div",{staticClass:"content"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"pointer",on:{click:function(s){return t.goPage("order/order")}}},[a("div",{staticClass:"lighter"},[t._v("待发货订单")]),a("div",{staticClass:"m-t-8 font-size-30"},[t._v(t._s(t.indexData.pending.wait_shipped))])])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"pointer",on:{click:function(s){return t.goPage("/order/after_sales")}}},[a("div",{staticClass:"lighter"},[t._v("待审核售后申请")]),a("div",{staticClass:"m-t-8 font-size-30"},[t._v(t._s(t.indexData.pending.wait_audit))])])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"pointer",on:{click:function(s){return t.goPage("/goods/evaluation")}}},[a("div",{staticClass:"lighter"},[t._v("待回复商品评价")]),a("div",{staticClass:"m-t-8 font-size-30"},[t._v(t._s(t.indexData.pending.wait_reply))])])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"pointer",on:{click:function(s){return t.goPage("/goods/lists")}}},[a("div",{staticClass:"lighter"},[t._v("售罄商品")]),a("div",{staticClass:"m-t-8 font-size-30"},[t._v(t._s(t.indexData.pending.no_stock_goods))])])])],1)],1)]),a("el-row",{staticClass:"ls-home__chart  m-t-16",attrs:{gutter:16}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"ls-card ls-chart--turnover"},[a("div",{staticClass:"title"},[t._v("近15天营业额（元）")]),a("div",{staticClass:"content"},[a("e-chart",{staticClass:"chart",attrs:{option:t.business}})],1)])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"ls-card ls-chart--visitors"},[a("div",{staticClass:"title"},[t._v("近15天访客数（人）")]),a("div",{staticClass:"content"},[a("e-chart",{staticClass:"chart",attrs:{option:t.visitor}})],1)])])],1),a("el-row",{staticClass:"ls-home__rank  m-t-16",attrs:{gutter:16}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"ls-card"},[a("div",{staticClass:"title"},[t._v("商品销量排行")]),a("div",{staticClass:"content"},[a("el-table",{attrs:{data:t.pagerTopGoods.lists,size:"mini"}},[a("el-table-column",{attrs:{label:"排名","min-width":"70"},scopedSlots:t._u([{key:"default",fn:function(s){return[s.$index+(t.pagerTopGoods._page-1)*t.pagerTopGoods._size==0?a("div",{staticClass:"icon",staticStyle:{background:"#F86056",color:"#fff"}},[t._v(" "+t._s(s.$index+1+(t.pagerTopGoods._page-1)*t.pagerTopGoods._size))]):t._e(),s.$index+(t.pagerTopGoods._page-1)*t.pagerTopGoods._size==1?a("div",{staticClass:"icon",staticStyle:{background:"#FC8D2E",color:"#fff"}},[t._v(" "+t._s(s.$index+1+(t.pagerTopGoods._page-1)*t.pagerTopGoods._size))]):t._e(),s.$index+(t.pagerTopGoods._page-1)*t.pagerTopGoods._size==2?a("div",{staticClass:"icon",staticStyle:{background:"#FCBC2E",color:"#fff"}},[t._v(" "+t._s(s.$index+1+(t.pagerTopGoods._page-1)*t.pagerTopGoods._size))]):t._e(),s.$index+(t.pagerTopGoods._page-1)*t.pagerTopGoods._size>=3?a("div",{staticClass:"icon"},[t._v(t._s(s.$index+1+(t.pagerTopGoods._page-1)*t.pagerTopGoods._size))]):t._e()]}}])}),a("el-table-column",{attrs:{label:"商品信息","min-width":"300","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(s){return[a("div",{staticClass:"flex"},[a("el-image",{staticClass:"flex-none",staticStyle:{width:"34px",height:"34px"},attrs:{src:s.row.image}}),a("div",{staticClass:"m-l-10 line-1"},[t._v(" "+t._s(s.row.name)+" ")])],1)]}}])}),a("el-table-column",{attrs:{prop:"total_num",label:"销量"}}),a("el-table-column",{attrs:{prop:"total_pay_price",label:"销售额"},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(" ¥"+t._s(s.row.total_pay_price)+" ")]}}])})],1)],1),a("div",{staticClass:"flex row-right m-t-16 row-right"},[a("ls-pagination",{on:{change:t.getTopGoods},model:{value:t.pagerTopGoods,callback:function(s){t.pagerTopGoods=s},expression:"pagerTopGoods"}})],1)])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"ls-card"},[a("div",{staticClass:"title"},[t._v("用户购买能力排行")]),a("div",{staticClass:"content"},[a("el-table",{attrs:{data:t.pagerTopUser.lists,size:"mini"}},[a("el-table-column",{attrs:{label:"排名","min-width":"70"},scopedSlots:t._u([{key:"default",fn:function(s){return[s.$index+(t.pagerTopUser._page-1)*t.pagerTopUser._size==0?a("div",{staticClass:"icon",staticStyle:{background:"#F86056",color:"#fff"}},[t._v(" "+t._s(s.$index+1+(t.pagerTopUser._page-1)*t.pagerTopUser._size))]):t._e(),s.$index+(t.pagerTopUser._page-1)*t.pagerTopUser._size==1?a("div",{staticClass:"icon",staticStyle:{background:"#FC8D2E",color:"#fff"}},[t._v(" "+t._s(s.$index+1+(t.pagerTopUser._page-1)*t.pagerTopUser._size))]):t._e(),s.$index+(t.pagerTopUser._page-1)*t.pagerTopUser._size==2?a("div",{staticClass:"icon",staticStyle:{background:"#FCBC2E",color:"#fff"}},[t._v(" "+t._s(s.$index+1+(t.pagerTopUser._page-1)*t.pagerTopUser._size))]):t._e(),s.$index+(t.pagerTopUser._page-1)*t.pagerTopUser._size>=3?a("div",{staticClass:"icon"},[t._v(t._s(s.$index+1+(t.pagerTopUser._page-1)*t.pagerTopUser._size))]):t._e()]}}])}),a("el-table-column",{attrs:{label:"用户信息","min-width":"300","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(s){return[a("div",{staticClass:"flex"},[a("el-image",{staticClass:"flex-none",staticStyle:{width:"34px",height:"34px"},attrs:{src:s.row.avatar}}),a("div",{staticClass:"m-l-10 line-1"},[t._v(" "+t._s(s.row.nickname)+" ")])],1)]}}])}),a("el-table-column",{attrs:{prop:"total_num",label:"成交单数"}}),a("el-table-column",{attrs:{prop:"total_order_amount",label:"消费金额"},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(" ¥"+t._s(s.row.total_order_amount)+" ")]}}])})],1)],1),a("div",{staticClass:"flex row-right m-t-16 row-right"},[a("ls-pagination",{on:{change:t.getTopUser},model:{value:t.pagerTopUser,callback:function(s){t.pagerTopUser=s},expression:"pagerTopUser"}})],1)])])],1)],1)},i=[],o=a("d4ec"),r=a("bee2"),l=a("262e"),n=a("2caf"),c=(a("159b"),a("b0c0"),a("9ab4")),d=a("1b40"),p=a("22b4"),_=a("4cb5"),g=a("3620"),v=a("f175"),u=function(t){return v["a"].get("/workbench/index",t)},f=function(t){return v["a"].get("/workbench/topGoods50",{params:t})},h=function(t){return v["a"].get("/workbench/topUser50",{params:t})},C=a("3c50"),m=a("4b2a"),b=a("9394"),x=a("ff32"),T=a("bb6f"),w=a("f95e"),y=a("6ddb");p["a"]([_["a"],m["a"],w["a"],b["a"],x["a"],T["a"],g["a"]]);var k=function(t){Object(l["a"])(a,t);var s=Object(n["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=s.apply(this,arguments),t.visitor={tooltip:{trigger:"axis"},legend:{data:["访客"]},xAxis:{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"],splitLine:{show:!0,interval:"1"}},yAxis:{},series:[{name:"访客",type:"line",stack:"总量",data:[]}]},t.business={tooltip:{trigger:"axis"},legend:{data:["营业额","商品数量","订单数量"]},xAxis:{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"],splitLine:{show:!0,interval:"1"}},yAxis:{type:"value"},series:[{name:"营业额",type:"line",stack:"总量",data:[]},{name:"商品数量",type:"line",stack:"总量",data:[]},{name:"订单数量",type:"line",stack:"总量",data:[]}]},t.indexData={shop_info:{logo:""},today:{today_order_num:"",today_order_amount:"",today_new_user:"",today_visitor:""},pending:{wait_shipped:"",wait_audit:"",wait_reply:"",no_stock_goods:""}},t.pagerTopGoods=new y["a"],t.pagerTopUser=new y["a"],t}return Object(r["a"])(a,[{key:"getWorkbenchIndexData",value:function(){var t=this;this.business.xAxis.data=[],this.business.legend.data=[],u({}).then((function(s){t.indexData=s,s.business15.list[0].data=s.business15.list[0].data.reverse(),s.visitor15.list[0].data=s.visitor15.list[0].data.reverse(),console.log(s.business15.list),t.business.xAxis.data=s.business15.date.reverse(),t.visitor.xAxis.data=s.visitor15.date.reverse(),s.business15.list.forEach((function(s,a){t.business.series[a].data=s.data,t.business.series[a].name=s.name,t.business.legend.data[a]=s.name})),s.visitor15.list.forEach((function(s,a){t.visitor.series[a].data=s.data,t.visitor.series[a].name=s.name}))}))}},{key:"goPage",value:function(t){this.$router.push({path:t})}},{key:"getTopGoods",value:function(){this.pagerTopGoods.request({callback:f}).then((function(t){console.log("pagerTopGoods",t)}))}},{key:"getTopUser",value:function(){this.pagerTopUser.request({callback:h}).then((function(t){console.log("pagerTopUser",t)}))}},{key:"created",value:function(){this.getWorkbenchIndexData(),this.getTopGoods(),this.getTopUser()}}]),a}(d["e"]);k=Object(c["a"])([Object(d["a"])({components:{LsPagination:C["a"]}})],k);var G=k,U=G,z=(a("724e"),a("2877")),$=Object(z["a"])(U,e,i,!1,null,"6f06417c",null);s["default"]=$.exports}}]);
//# sourceMappingURL=chunk-266c489d.7daf6ca0.js.map