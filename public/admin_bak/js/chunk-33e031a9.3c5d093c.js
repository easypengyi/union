(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33e031a9"],{"0c33":function(t,e,n){},"0cbf":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return s})),n.d(e,"g",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"h",(function(){return u})),n.d(e,"l",(function(){return c})),n.d(e,"k",(function(){return l})),n.d(e,"d",(function(){return d})),n.d(e,"f",(function(){return f})),n.d(e,"m",(function(){return p})),n.d(e,"i",(function(){return m})),n.d(e,"n",(function(){return b})),n.d(e,"j",(function(){return h})),n.d(e,"b",(function(){return v}));var r=n("f175"),i=function(t){return r["a"].post("/marketing.coupon/add",t)},s=function(t){return r["a"].post("/marketing.coupon/edit",t)},a=function(t){return r["a"].get("/marketing.coupon/lists",{params:t})},o=function(t){return r["a"].post("/marketing.coupon/delete",t)},u=function(t){return r["a"].post("/marketing.coupon/open",t)},c=function(t){return r["a"].post("/marketing.coupon/stop",t)},l=function(t){return r["a"].post("/marketing.coupon/sort",t)},d=function(t){return r["a"].get("/marketing.coupon/detail",{params:{id:t}})},f=function(t){return r["a"].get("/marketing.coupon/info",{params:{id:t}})},p=function(){return r["a"].get("/marketing.coupon/survey")},m=function(t){return r["a"].get("/marketing.coupon/record",{params:t})},b=function(t){return r["a"].post("/marketing.coupon/void",t)},h=function(t){return r["a"].post("/marketing.coupon/send",t)},v=function(t){return r["a"].get("/marketing.coupon/commonLists",{params:t})}},"597e":function(t,e,n){"use strict";n("0c33")},"5cf7":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"area-select"},[n("el-cascader",{style:{width:t.width},attrs:{options:t.options},model:{value:t.areaValue,callback:function(e){t.areaValue=e},expression:"areaValue"}})],1)},i=[],s=n("d4ec"),a=n("bee2"),o=n("262e"),u=n("2caf"),c=n("9ab4"),l=n("0463"),d=n("1b40"),f=function(t){Object(o["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.options=l["a"],t}return Object(a["a"])(n,[{key:"areaValue",get:function(){return[this.province,this.city,this.district]},set:function(t){this.$emit("update:province",t[0]),this.$emit("update:city",t[1]),this.$emit("update:district",t[2])}}]),n}(d["e"]);Object(c["a"])([Object(d["c"])()],f.prototype,"province",void 0),Object(c["a"])([Object(d["c"])()],f.prototype,"city",void 0),Object(c["a"])([Object(d["c"])()],f.prototype,"district",void 0),Object(c["a"])([Object(d["c"])({default:"380px"})],f.prototype,"width",void 0),f=Object(c["a"])([d["a"]],f);var p=f,m=p,b=n("2877"),h=Object(b["a"])(m,r,i,!1,null,null,null);e["a"]=h.exports},"65a4":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"ls-dialog__trigger",on:{click:t.onTrigger}},[t._t("trigger")],2),n("el-dialog",{attrs:{"coustom-class":"ls-dialog__content",title:"用户选择",visible:t.visible,width:"70vw",top:t.top,"modal-append-to-body":!1,center:"","before-close":t.close,"close-on-click-modal":!1,"append-to-body":""}},[n("div",{staticClass:"user-search m-t-16 flex row-between"},[n("div",{staticStyle:{height:"53px"}},[n("el-checkbox",{model:{value:t.selectAll,callback:function(e){t.selectAll=e},expression:"selectAll"}},[t._v("全选")])],1),n("el-form",{ref:"form",attrs:{inline:"",model:t.userSearchData,"label-width":"80px",size:"small"}},[n("el-form-item",{attrs:{label:"用户搜索"}},[n("el-input",{staticClass:"header-input",attrs:{placeholder:"请输入用户名称"},model:{value:t.userSearchData.nickname,callback:function(e){t.$set(t.userSearchData,"nickname",e)},expression:"userSearchData.nickname"}})],1),n("el-form-item",{staticClass:"m-l-6",attrs:{label:""}},[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.getUserInfoList(1)}}},[t._v("查询")]),n("el-button",{attrs:{size:"small"},on:{click:t.resetuserSearchData}},[t._v("重置")])],1)],1)],1),n("div",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.pager.loading,expression:"pager.loading"}],ref:"paneTable",staticStyle:{width:"100%"},attrs:{height:"500",size:"mini",data:t.pager.lists}},[n("el-table-column",{attrs:{fixed:"left",width:"55"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-checkbox",{attrs:{value:t.selectItem(e.row)},on:{change:function(n){return t.handleSelect(n,e.row)}}})]}}])}),n("el-table-column",{attrs:{prop:"sn",label:"用户编号","min-width":"120"}}),n("el-table-column",{attrs:{label:"用户昵称","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"flex"},[n("el-image",{staticStyle:{width:"34px",height:"34px"},attrs:{src:e.row.avatar}}),n("div",{staticClass:"m-l-10"},[t._v(" "+t._s(e.row.nickname)+" ")])],1)]}}])}),n("el-table-column",{attrs:{prop:"user_money",label:"用户余额","min-width":"120"}}),n("el-table-column",{attrs:{prop:"mobile",label:"手机号码","min-width":"120"}}),n("el-table-column",{attrs:{prop:"is_distribution",label:"分销商","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(1==e.row.is_distribution?"是":"否")+" ")]}}])}),n("el-table-column",{attrs:{prop:"create_time",label:"注册时间","min-width":"120"}})],1)],1),n("div",{staticClass:"m-t-24 flex row-center"},[n("ls-pagination",{on:{change:function(e){return t.getUserInfoList()}},model:{value:t.pager,callback:function(e){t.pager=e},expression:"pager"}})],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.handleEvent("cancel")}}},[t._v("取消并关闭")]),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.handleEvent("confirm")}}},[t._v("确认选择")])],1)]),0!=t.selectIds.length?n("el-table",{ref:"paneTable",staticClass:"m-t-24",staticStyle:{width:"100%"},attrs:{height:"250",size:"mini",data:t.selectIds}},[n("el-table-column",{attrs:{prop:"sn",label:"用户编号"}}),n("el-table-column",{attrs:{label:"用户昵称","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"flex"},[n("el-image",{staticStyle:{width:"34px",height:"34px"},attrs:{src:e.row.avatar}}),n("div",{staticClass:"m-l-10"},[t._v(" "+t._s(e.row.nickname)+" ")])],1)]}}],null,!1,3993698936)}),n("el-table-column",{attrs:{prop:"is_distribution",label:"分销商",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(1==e.row.is_distribution?"是":"否")+" ")]}}],null,!1,1179022239)}),n("el-table-column",{attrs:{prop:"mobile",label:"手机号码"}}),n("el-table-column",{attrs:{label:"操作",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.removeSelectGoods(e.row.id)}}},[t._v("移除")])]}}],null,!1,3764884895)})],1):t._e()],1)},i=[],s=n("5530"),a=n("d4ec"),o=n("bee2"),u=n("262e"),c=n("2caf"),l=(n("d81d"),n("caad"),n("2532"),n("c740"),n("a434"),n("b64b"),n("9ab4")),d=n("1b40"),f=n("6ddb"),p=n("3c50"),m=n("f633"),b=function(t){Object(u["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.visible=!1,t.userSearchData={nickname:""},t.pager=new f["a"],t.selectIds=[],t}return Object(o["a"])(n,[{key:"selectItem",get:function(){var t=this;return function(e){return t.selectIds.some((function(t){return t.id===e.id}))}}},{key:"selectAll",get:function(){var t=this.selectIds.map((function(t){return t.id}));return this.pager.lists.every((function(e){return t.includes(e.id)}))},set:function(t){this.selectIds=t?JSON.parse(JSON.stringify(this.pager.lists)):[]}},{key:"handleSelect",value:function(t,e){if(t)this.selectIds.push(e);else{var n=this.selectIds.findIndex((function(t){return t.id===e.id}));-1!=n&&this.selectIds.splice(n,1)}}},{key:"removeSelectGoods",value:function(t){var e=this.selectIds.map((function(e){return e.id==t}));-1!=e&&this.selectIds.splice(e,1)}},{key:"getUserInfoList",value:function(t){t&&(this.pager.page=t),this.pager.request({callback:m["a"],params:Object(s["a"])(Object(s["a"])({},this.userSearchData),{},{is_distribution:this.is_distribution})})}},{key:"resetuserSearchData",value:function(){var t=this;Object.keys(this.userSearchData).map((function(e){t.$set(t.userSearchData,e,"")})),this.getUserInfoList()}},{key:"selectionChange",value:function(t){this.selectIds=t.map((function(t){return t}))}},{key:"handleEvent",value:function(t){"cancel"===t&&(this.selectIds=[],this.close()),"confirm"===t&&(this.$emit("input",this.selectIds),this.close())}},{key:"onTrigger",value:function(){this.visible=!0,this.getUserInfoList()}},{key:"close",value:function(){this.visible=!1}},{key:"created",value:function(){this.getUserInfoList()}}]),n}(d["e"]);Object(l["a"])([Object(d["c"])({default:"5vh"})],b.prototype,"top",void 0),Object(l["a"])([Object(d["c"])({default:0})],b.prototype,"is_distribution",void 0),b=Object(l["a"])([Object(d["a"])({components:{LsPagination:p["a"]}})],b);var h=b,v=h,g=(n("597e"),n("2877")),_=Object(g["a"])(v,r,i,!1,null,"1de17008",null);e["a"]=_.exports},c740:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").findIndex,s=n("44d2"),a="findIndex",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),r({target:"Array",proto:!0,forced:o},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s(a)},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,s=n("1dde"),a=s("map");r({target:"Array",proto:!0,forced:!a},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},f633:function(t,e,n){"use strict";n.d(e,"o",(function(){return i})),n.d(e,"k",(function(){return s})),n.d(e,"m",(function(){return a})),n.d(e,"n",(function(){return o})),n.d(e,"l",(function(){return u})),n.d(e,"j",(function(){return c})),n.d(e,"f",(function(){return l})),n.d(e,"h",(function(){return d})),n.d(e,"i",(function(){return f})),n.d(e,"g",(function(){return p})),n.d(e,"p",(function(){return m})),n.d(e,"q",(function(){return b})),n.d(e,"b",(function(){return h})),n.d(e,"s",(function(){return v})),n.d(e,"t",(function(){return g})),n.d(e,"u",(function(){return _})),n.d(e,"r",(function(){return k})),n.d(e,"c",(function(){return y})),n.d(e,"d",(function(){return I})),n.d(e,"e",(function(){return w})),n.d(e,"v",(function(){return j})),n.d(e,"a",(function(){return O}));var r=n("f175"),i=function(t){return r["a"].get("/user.user_level/lists",{params:t})},s=function(t){return r["a"].post("/user.user_level/add",t)},a=function(t){return r["a"].get("/user.user_level/detail",{params:t})},o=function(t){return r["a"].post("/user.user_level/edit",t)},u=function(t){return r["a"].post("/user.user_level/del",t)},c=function(t){return r["a"].get("/user.user_label/lists",{params:t})},l=function(t){return r["a"].post("/user.user_label/add",t)},d=function(t){return r["a"].get("/user.user_label/detail",{params:t})},f=function(t){return r["a"].post("/user.user_label/edit",t)},p=function(t){return r["a"].post("/user.user_label/del",t)},m=function(t){return r["a"].get("/user.user/lists",{params:t})},b=function(){return r["a"].get("/user.user/otherList")},h=function(t){return r["a"].get("/user.user/detail",{params:t})},v=function(t){return r["a"].post("/user.user/setInfo",t)},g=function(t){return r["a"].post("/user.user/setLabel",t)},_=function(t){return r["a"].post("/user.user/setUserLabel",t)},k=function(t){return r["a"].post("/user.user/adjustUserWallet",t)},y=function(){return r["a"].get("/user.user/index")},I=function(t){return r["a"].get("/user.user/info",{params:t})},w=function(t){return r["a"].get("/user.user/userInviterLists",{params:t})},j=function(t){return r["a"].post("/user.user/adjustFirstLeader",t)},O=function(t){return r["a"].get("/user.user/selectUserLists",{params:t})}},f9e6:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ls-coupon-edit"},[n("div",{staticClass:"ls-card ls-coupon-edit__header"},[n("el-page-header",{attrs:{content:"发放优惠券"},on:{back:function(e){return t.$router.go(-1)}}})],1),n("div",{staticClass:"ls-card ls-coupon-edit__form m-t-10"},[n("div",{staticClass:"lg weight-500 m-b-20"},[t._v("优惠券信息")]),n("el-form",{ref:"couponInfo",attrs:{model:t.couponInfo,"label-width":"120px",size:"small"}},[n("el-form-item",{attrs:{label:"优惠券编号：",prop:"",required:""}},[[t._v(" "+t._s(this.couponInfo.sn)+" ")]],2),n("el-form-item",{attrs:{label:"优惠券名称：",prop:"",required:""}},[[t._v(" "+t._s(this.couponInfo.name)+" ")]],2),n("el-form-item",{attrs:{label:"推广方式：",prop:"",required:""}},[[t._v(" "+t._s(this.couponInfo.get_method)+" ")]],2),n("el-form-item",{attrs:{label:"用券时间：",prop:"",required:""}},[[t._v(" "+t._s(this.couponInfo.use_time_text)+" ")]],2),n("el-form-item",{attrs:{label:"发放总量：",prop:"",required:""}},[[t._v(" "+t._s(this.couponInfo.send_total)+" ")]],2),n("el-form-item",{attrs:{label:"剩余发放量：",prop:"",required:""}},[[t._v(" "+t._s(this.couponInfo.surplus_number)+" ")]],2)],1)],1),n("div",{staticClass:"ls-card ls-coupon-edit__form m-t-10 m-b-60"},[n("div",{staticClass:"lg weight-500 m-b-20"},[t._v("发放设置")]),n("el-form",{ref:"couponInfo",attrs:{model:t.couponInfo,"label-width":"120px",size:"small"}},[n("el-form-item",{attrs:{label:"每人发放张数"}},[n("el-input",{staticStyle:{width:"280px"},attrs:{placeholder:"请输入发放的优惠券数量"},model:{value:t.couponInfo.send_user_num,callback:function(e){t.$set(t.couponInfo,"send_user_num",e)},expression:"couponInfo.send_user_num"}})],1),n("el-form-item",{attrs:{label:"发放范围"}},[n("div",[n("user-select",{attrs:{is_distribution:""},model:{value:t.userSelectData,callback:function(e){t.userSelectData=e},expression:"userSelectData"}},[n("el-button",{attrs:{slot:"trigger",size:"mini",type:"primary"},slot:"trigger"},[t._v("选择用户")])],1)],1)])],1)],1),n("div",{staticClass:"ls-coupon-edit__footer bg-white ls-fixed-footer"},[n("div",{staticClass:"btns row-center flex",staticStyle:{height:"100%"}},[n("el-button",{attrs:{size:"small"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("取消")]),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.submit("couponInfo")}}},[t._v("保存 ")])],1)])])},i=[],s=n("5530"),a=n("d4ec"),o=n("bee2"),u=n("262e"),c=n("2caf"),l=(n("d81d"),n("9ab4")),d=n("1b40"),f=n("5cf7"),p=n("65a4"),m=n("0cbf"),b=function(t){Object(u["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.couponInfo={id:t.id,send_user_num:"",send_user:[]},t.userSelectData=[],t}return Object(o["a"])(n,[{key:"submit",value:function(t){var e=this,n=this.$refs[t];n.validate((function(t){t&&e.couponSend()}))}},{key:"couponSend",value:function(){var t=this;if(void 0==this.couponInfo.send_user_num)return this.$message.error("请输入要发放的优惠券数量！!");var e={id:this.id,send_user_num:this.couponInfo.send_user_num,send_user:this.userSelectData.map((function(t){return t.id}))};Object(m["j"])(Object(s["a"])({},e)).then((function(e){t.$message.success("发放成功!"),setTimeout((function(){return t.$router.go(-1)}),500)})).catch((function(){t.$message.error("发放失败!")}))}},{key:"getCouponInfo",value:function(){var t=this;Object(m["f"])(this.id).then((function(e){t.couponInfo=e}))}},{key:"created",value:function(){this.id=this.$route.query.id,this.id&&this.getCouponInfo()}}]),n}(d["e"]);b=Object(l["a"])([Object(d["a"])({components:{AreaSelect:f["a"],UserSelect:p["a"]}})],b);var h=b,v=h,g=n("2877"),_=Object(g["a"])(v,r,i,!1,null,"fb27ad8e",null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-33e031a9.3c5d093c.js.map