(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3530b42a"],{"337c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-withdrawal"},[a("div",{staticClass:"ls-card"},[a("el-alert",{staticClass:"xxl",attrs:{title:"温馨提示： 1.进行中的砍价商品可以修改名称和活动时间。",type:"info",closable:!1,"show-icon":""}}),a("div",{staticClass:"journal-search m-t-16"},[a("el-form",{ref:"formRef",staticClass:"ls-form",attrs:{inline:"",model:t.form,"label-width":"70px",size:"small"}},[a("el-form-item",{attrs:{label:"活动信息",prop:"sn"}},[a("el-input",{attrs:{placeholder:"请输入活动名称/活动编号查询"},model:{value:t.form.activity_info,callback:function(e){t.$set(t.form,"activity_info",e)},expression:"form.activity_info"}})],1),a("el-form-item",{attrs:{label:"商品信息"}},[a("el-input",{attrs:{placeholder:"请输入商品名称/编号查询"},model:{value:t.form.goods_info,callback:function(e){t.$set(t.form,"goods_info",e)},expression:"form.goods_info"}})],1),a("el-form-item",{attrs:{label:"活动时间"}},[a("el-date-picker",{attrs:{type:"datetimerange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间","picker-options":t.pickerOptions,"value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:t.splitTime},model:{value:t.tableData,callback:function(e){t.tableData=e},expression:"tableData"}})],1),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.getList(1)}}},[t._v("查询")]),a("el-button",{attrs:{size:"small"},on:{click:t.onReset}},[t._v("重置")])],1)],1)],1),a("div",{staticClass:"ls-withdrawal__centent ls-card m-t-16"},[a("el-tabs",{directives:[{name:"loading",rawName:"v-loading",value:t.pager.loading,expression:"pager.loading"}],on:{"tab-click":function(e){return t.getList(1)}},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[a("el-tab-pane",{attrs:{label:"全部("+t.tabCount.all+")",name:" "}},[a("bargain-pane",{attrs:{pager:t.pager},on:{refresh:function(e){return t.getList()}},model:{value:t.pager.lists,callback:function(e){t.$set(t.pager,"lists",e)},expression:"pager.lists"}})],1),a("el-tab-pane",{attrs:{label:"未开始("+t.tabCount.wait+")",name:"1"}},[a("bargain-pane",{attrs:{pager:t.pager},on:{refresh:function(e){return t.getList()}},model:{value:t.pager.lists,callback:function(e){t.$set(t.pager,"lists",e)},expression:"pager.lists"}})],1),a("el-tab-pane",{attrs:{lazy:"",label:"进行中("+t.tabCount.ing+")",name:"2"}},[a("bargain-pane",{attrs:{pager:t.pager},on:{refresh:function(e){return t.getList()}},model:{value:t.pager.lists,callback:function(e){t.$set(t.pager,"lists",e)},expression:"pager.lists"}})],1),a("el-tab-pane",{attrs:{lazy:"",label:"已结束("+t.tabCount.end+")",name:"3"}},[a("bargain-pane",{attrs:{pager:t.pager},on:{refresh:function(e){return t.getList()}},model:{value:t.pager.lists,callback:function(e){t.$set(t.pager,"lists",e)},expression:"pager.lists"}})],1)],1)],1)])},i=[],r=a("5530"),s=a("d4ec"),o=a("bee2"),l=a("262e"),c=a("2caf"),u=a("9ab4"),f=a("1b40"),p=a("fac6"),d=a("6ddb"),g=a("3c50"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"withdraw-pane"},[a("div",{staticClass:"pane-table "},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.toAdd}},[t._v("新增砍价活动")]),a("div",{staticClass:"list-table m-t-16"},[a("el-table",{ref:"valueRef",staticStyle:{width:"100%"},attrs:{data:t.value,size:"mini","header-cell-style":{background:"#f5f8ff"}}},[a("el-table-column",{attrs:{prop:"name",label:"活动名称"}}),a("el-table-column",{attrs:{prop:"",label:"活动时间","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.start_time_desc)+"~"+t._s(e.row.end_time_desc))])]}}])}),a("el-table-column",{attrs:{prop:"order_count",label:"砍价订单"}}),a("el-table-column",{attrs:{prop:"total_amount",label:"砍价销售额"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v("¥"+t._s(e.row.total_amount))])]}}])}),a("el-table-column",{attrs:{prop:"total_num",label:"砍价销售量"}}),a("el-table-column",{attrs:{prop:"",label:"活动状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?a("el-tag",{attrs:{size:"medium",type:"danger"}},[t._v(t._s(e.row.status_desc))]):t._e(),2==e.row.status?a("el-tag",{attrs:{size:"medium",type:"success"}},[t._v(t._s(e.row.status_desc))]):t._e(),3==e.row.status?a("el-tag",{attrs:{size:"medium",type:"info"}},[t._v(t._s(e.row.status_desc))]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间"}}),a("el-table-column",{attrs:{label:"操作","min-width":"160",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{slot:"trigger",type:"text",size:"small"},on:{click:function(a){return t.toDetails(e.row)}},slot:"trigger"},[t._v("详情 ")]),3!=e.row.status?a("el-button",{attrs:{slot:"trigger",type:"text",size:"small"},on:{click:function(a){return t.toEdit(e.row)}},slot:"trigger"},[t._v("编辑 ")]):t._e(),1==e.row.status?a("ls-dialog",{staticClass:"m-l-10 inline",attrs:{title:"确定开始砍价："+e.row.name+"("+e.row.sn+"）",content:"活动确认后不能编辑修改砍价商品价格信息, 请谨慎操作。"},on:{confirm:function(a){return t.onConfirm(e.row.id)}}},[a("el-button",{attrs:{slot:"trigger",type:"text",size:"small"},slot:"trigger"},[t._v("开始砍价 ")])],1):t._e(),2==e.row.status?a("ls-dialog",{staticClass:"m-l-10 inline",attrs:{title:"确定结束砍价："+e.row.name+"("+e.row.sn+"）",content:"砍价活动结束后不能重新开始, 请谨慎操作。"},on:{confirm:function(a){return t.onStop(e.row.id)}}},[a("el-button",{attrs:{slot:"trigger",type:"text",size:"small"},slot:"trigger"},[t._v("结束砍价 ")])],1):t._e(),a("ls-dialog",{staticClass:"m-l-10 inline",attrs:{title:"确定删除："+e.row.name+"("+e.row.sn+"）",content:"砍价活动删除时,未支付订单会被系统自动关闭。砍价活动删除后不能查看活动数据, 请谨慎操作。"},on:{confirm:function(a){return t.onDelete(e.row.id)}}},[a("el-button",{attrs:{slot:"trigger",type:"text",size:"small"},slot:"trigger"},[t._v("删除 ")])],1)]}}])})],1)],1),a("div",{staticClass:"flex row-right m-t-16 row-right"},[a("ls-pagination",{on:{change:function(e){return t.$emit("refresh")}},model:{value:t.pager,callback:function(e){t.pager=e},expression:"pager"}})],1)],1)])},b=[],v=a("0a6d"),_=a("4201"),h=function(t){Object(l["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.status=!0,t}return Object(o["a"])(a,[{key:"toAdd",value:function(){this.$router.push({path:"/bargain/bargain_edit",query:{mode:_["f"]["ADD"]}})}},{key:"toDetails",value:function(t){this.$router.push({path:"/bargain/bargain_edit",query:{mode:_["f"]["EDIT"],id:t.id,status:"0"}})}},{key:"toEdit",value:function(t){this.$router.push({path:"/bargain/bargain_edit",query:{mode:_["f"]["EDIT"],id:t.id,status:t.status}})}},{key:"toData",value:function(t){}},{key:"onDelete",value:function(t){var e=this;Object(p["c"])({id:t}).then((function(t){e.$emit("refresh")}))}},{key:"onStop",value:function(t){var e=this;Object(p["i"])({id:t}).then((function(t){e.$emit("refresh")}))}},{key:"onConfirm",value:function(t){var e=this;Object(p["b"])({id:t}).then((function(t){e.$emit("refresh")}))}}]),a}(f["e"]);Object(u["a"])([Object(f["c"])()],h.prototype,"value",void 0),Object(u["a"])([Object(f["c"])()],h.prototype,"pager",void 0),h=Object(u["a"])([Object(f["a"])({components:{LsDialog:v["a"],LsPagination:g["a"]}})],h);var y=h,w=y,k=a("2877"),x=Object(k["a"])(w,m,b,!1,null,"5107f6d2",null),j=x.exports,C=function(t){Object(l["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.pickerOptions={shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},t.tableData=[],t.pager=new d["a"],t.form={status:" ",start_time:"",end_time:"",activity_info:"",goods_info:""},t.tabCount={all:0,end:0,ing:0,wait:0},t}return Object(o["a"])(a,[{key:"splitTime",value:function(){null!=this.tableData&&(this.form.start_time=this.tableData[0],this.form.end_time=this.tableData[1])}},{key:"onReset",value:function(){this.tableData=[],this.form.status=" ",this.form.start_time="",this.form.end_time="",this.form.activity_info="",this.form.goods_info="",this.getList()}},{key:"getList",value:function(t){var e=this;t&&(this.pager.page=t),this.pager.request({callback:p["g"],params:Object(r["a"])({},this.form)}).then((function(t){e.tabCount=null===t||void 0===t?void 0:t.extend}))}},{key:"created",value:function(){this.getList()}}]),a}(f["e"]);C=Object(u["a"])([Object(f["a"])({components:{LsPagination:g["a"],BargainPane:j}})],C);var D=C,O=D,$=Object(k["a"])(O,n,i,!1,null,"051a24ef",null);e["default"]=$.exports},fac6:function(t,e,a){"use strict";a.d(e,"g",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"i",(function(){return s})),a.d(e,"b",(function(){return o})),a.d(e,"e",(function(){return l})),a.d(e,"d",(function(){return c})),a.d(e,"a",(function(){return u})),a.d(e,"f",(function(){return f})),a.d(e,"h",(function(){return p})),a.d(e,"j",(function(){return d}));var n=a("f175"),i=function(t){return n["a"].get("/bargain.bargain_activity/lists",{params:t})},r=function(t){return n["a"].post("/bargain.bargain_activity/delete",t)},s=function(t){return n["a"].post("/bargain.bargain_activity/stop",t)},o=function(t){return n["a"].post("/bargain.bargain_activity/confirm",t)},l=function(t){return n["a"].post("/bargain.bargain_activity/edit",t)},c=function(t){return n["a"].get("/bargain.bargain_activity/detail",{params:t})},u=function(t){return n["a"].post("/bargain.bargain_activity/add",t)},f=function(t){return n["a"].get("/bargain.bargain_activity/goodsLists",{params:t})},p=function(t){return n["a"].get("/bargain.bargain_activity/activityRecord",{params:t})},d=function(t){return n["a"].post("/bargain.bargain_activity/stopInitiate",t)}}}]);
//# sourceMappingURL=chunk-3530b42a.bf4e9962.js.map