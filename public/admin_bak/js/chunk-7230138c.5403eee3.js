(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7230138c"],{1008:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"live-broadcast"},[a("div",{staticClass:"ls-card"},[a("el-alert",{staticClass:"xxl",attrs:{type:"info",closable:!1}},[a("template",{slot:"title"},[a("div",{staticClass:"iconSize"},[t._v("温馨提示：")]),a("div",{staticClass:"iconSize"},[t._v("1.同步直播间信息每天最多可同步100000次，请合理使用同步次数；")]),a("div",{staticClass:"iconSize flex col-top"},[a("div",{},[t._v(" 2.扫描微信直播二维码开启直播： ")]),a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.weChatZhiBoImg,"preview-src-list":[t.weChatZhiBoImg]}})],1)])],2)],1),a("div",{staticClass:"ls-card m-t-16"},[a("div",{staticClass:"list-header"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.onAdd()}}},[t._v("创建直播间")]),a("el-button",{attrs:{size:"small"},on:{click:function(e){return t.onReset()}}},[t._v("同步直播间")])],1),a("div",{staticClass:"list-table m-t-16"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.pager.loading,expression:"pager.loading"}],staticStyle:{width:"100%"},attrs:{data:t.pager.lists,size:"mini","header-cell-style":{background:"#f5f8ff"}}},[a("el-table-column",{attrs:{prop:"room_id",label:"直播间ID"}}),a("el-table-column",{attrs:{prop:"name",label:"直播间标题"}}),a("el-table-column",{attrs:{prop:"anchor_name",label:"主播昵称"}}),a("el-table-column",{attrs:{prop:"start_time",label:"开播时间","min-width":"120"}}),a("el-table-column",{attrs:{prop:"end_time",label:"结束时间","min-width":"120"}}),a("el-table-column",{attrs:{prop:"goods",label:"商品数量"}}),a("el-table-column",{attrs:{prop:"live_status",label:"状态"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("ls-dialog",{staticClass:"m-l-10 inline",attrs:{content:"确定删除直播间："+e.row.name},on:{confirm:function(a){return t.onDelete(e.row)}}},[a("el-button",{attrs:{slot:"trigger",type:"text",size:"small"},slot:"trigger"},[t._v("删除")])],1)]}}])})],1)],1),a("div",{staticClass:"flex row-right m-t-16 row-right"},[a("ls-pagination",{on:{change:function(e){return t.getList()}},model:{value:t.pager,callback:function(e){t.pager=e},expression:"pager"}})],1)])])},n=[],l=a("d4ec"),s=a("bee2"),o=a("262e"),r=a("2caf"),c=a("9ab4"),u=a("1b40"),d=a("6ddb"),p=a("3c50"),f=a("623a"),b=a("4201"),m=a("0a6d"),v=function(t){Object(o["a"])(i,t);var e=Object(r["a"])(i);function i(){var t;return Object(l["a"])(this,i),t=e.apply(this,arguments),t.srcList=["https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg"],t.weChatZhiBoImg=a("7aac9"),t.pager=new d["a"],t}return Object(s["a"])(i,[{key:"onAdd",value:function(){this.$router.push({path:"/live_broadcast/edit",query:{mode:b["f"]["ADD"]}})}},{key:"onDelete",value:function(t){var e=this;console.log("删除商品：",t),Object(f["e"])({room_id:t.room_id}).then((function(){e.getList()})).catch((function(){}))}},{key:"onReset",value:function(){this.getList()}},{key:"getList",value:function(){var t=this;this.pager.request({callback:f["f"]}).catch((function(){t.$message.error("数据请求失败，刷新重载")}))}},{key:"created",value:function(){this.getList()}}]),i}(u["e"]);v=Object(c["a"])([Object(u["a"])({components:{LsPagination:p["a"],LsDialog:m["a"]}})],v);var g=v,h=g,w=(a("d80b"),a("2877")),_=Object(w["a"])(h,i,n,!1,null,"33a329d3",null);e["default"]=_.exports},"623a":function(t,e,a){"use strict";a.d(e,"f",(function(){return n})),a.d(e,"d",(function(){return l})),a.d(e,"e",(function(){return s})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return c}));var i=a("f175"),n=function(t){return i["a"].get("/live.LiveRoom/lists",{params:t})},l=function(t){return i["a"].post("/live.LiveRoom/add",t)},s=function(t){return i["a"].post("/live.LiveRoom/del",t)},o=function(t){return i["a"].get("/live.LiveGoods/lists",{params:t})},r=function(t){return i["a"].post("/live.LiveGoods/add",t)},c=function(t){return i["a"].post("/live.LiveGoods/del",t)}},"7aac9":function(t,e,a){t.exports=a.p+"img/wechatzhibo.8ea25b21.png"},a860:function(t,e,a){},d80b:function(t,e,a){"use strict";a("a860")}}]);
//# sourceMappingURL=chunk-7230138c.5403eee3.js.map