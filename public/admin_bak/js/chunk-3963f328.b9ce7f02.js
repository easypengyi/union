(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3963f328"],{a2cc:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user-grade"},[r("div",{staticClass:"ls-card"},[r("el-alert",{staticClass:"xxl",attrs:{title:"温馨提示：1.管理用户等级，系统默认等级不能删除；2.删除用户等级时，会重新调整用户等级为系统默认等级，请谨慎操作。",type:"info",closable:!1,"show-icon":""}})],1),r("div",{staticClass:"ls-user__grade ls-card m-t-20"},[r("div",{staticClass:"list-header"},[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.onUserLevelAdd()}}},[e._v("新增用户等级")])],1),r("div",{staticClass:"list-table m-t-16"},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.pager.loading,expression:"pager.loading"}],staticStyle:{width:"100%"},attrs:{data:e.pager.lists,"default-sort":{prop:"rank",order:"ascending"},"header-cell-style":{background:"#f5f8ff"},size:"mini"}},[r("el-table-column",{attrs:{prop:"rank",label:"等级级别","min-width":"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.rank?r("div",[e._v(e._s(t.row.rank)+"级（默认等级）")]):r("div",[e._v(e._s(t.row.rank)+"级")])]}}])}),r("el-table-column",{attrs:{prop:"name",label:"等级名称","min-width":"100px"}}),r("el-table-column",{attrs:{prop:"image",label:"等级图标","min-width":"100px"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("el-image",{staticStyle:{width:"34px",height:"34px"},attrs:{src:e.row.image}})]}}])}),r("el-table-column",{attrs:{prop:"num",label:"用户数","min-width":"100px"}}),r("el-table-column",{attrs:{prop:"discount",label:"等级折扣","min-width":"100px"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.onUserLevelSee(t.row)}}},[e._v("详情")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.onUserLevelEdit(t.row)}}},[e._v("编辑")]),1!==t.row.rank?r("ls-dialog",{staticClass:"m-l-10 inline",on:{confirm:function(r){return e.onUserLevelDel(t.row)}}},[r("el-button",{attrs:{slot:"trigger",type:"text",size:"small"},slot:"trigger"},[e._v("删除")])],1):e._e()]}}])})],1)],1),r("div",{staticClass:"flex row-right m-t-16 row-right"},[r("ls-pagination",{on:{change:function(t){return e.getUserLevelList()}},model:{value:e.pager,callback:function(t){e.pager=t},expression:"pager"}})],1)])])},s=[],u=r("d4ec"),a=r("bee2"),i=r("262e"),l=r("2caf"),o=r("9ab4"),c=r("1b40"),d=r("f633"),f=r("4201"),p=r("6ddb"),g=r("0a6d"),v=r("3c50"),m=function(e){Object(i["a"])(r,e);var t=Object(l["a"])(r);function r(){var e;return Object(u["a"])(this,r),e=t.apply(this,arguments),e.pager=new p["a"],e}return Object(a["a"])(r,[{key:"getUserLevelList",value:function(){var e=this;this.pager.request({callback:d["o"],params:{}}).catch((function(){e.$message.error("数据请求失败，刷新重载!")}))}},{key:"onUserLevelAdd",value:function(){this.$router.push({path:"/user/grade_edit",query:{mode:f["f"]["ADD"]}})}},{key:"onUserLevelEdit",value:function(e){this.$router.push({path:"/user/grade_edit",query:{mode:f["f"]["EDIT"],id:e.id,level:e.rank}})}},{key:"onUserLevelSee",value:function(e){this.$router.push({path:"/user/grade_edit",query:{mode:f["f"]["EDIT"],id:e.id,level:e.rank,disabled:"true"}})}},{key:"onUserLevelDel",value:function(e){var t=this;Object(d["l"])({id:e.id}).then((function(){t.getUserLevelList(),t.$message.success("删除成功!")})).catch((function(){t.$message.error("删除失败")}))}},{key:"created",value:function(){this.getUserLevelList()}}]),r}(c["e"]);m=Object(o["a"])([Object(c["a"])({components:{LsDialog:g["a"],LsPagination:v["a"]}})],m);var b=m,h=b,_=r("2877"),k=Object(_["a"])(h,n,s,!1,null,null,null);t["default"]=k.exports},f633:function(e,t,r){"use strict";r.d(t,"o",(function(){return s})),r.d(t,"k",(function(){return u})),r.d(t,"m",(function(){return a})),r.d(t,"n",(function(){return i})),r.d(t,"l",(function(){return l})),r.d(t,"j",(function(){return o})),r.d(t,"f",(function(){return c})),r.d(t,"h",(function(){return d})),r.d(t,"i",(function(){return f})),r.d(t,"g",(function(){return p})),r.d(t,"p",(function(){return g})),r.d(t,"q",(function(){return v})),r.d(t,"b",(function(){return m})),r.d(t,"s",(function(){return b})),r.d(t,"t",(function(){return h})),r.d(t,"u",(function(){return _})),r.d(t,"r",(function(){return k})),r.d(t,"c",(function(){return w})),r.d(t,"d",(function(){return L})),r.d(t,"e",(function(){return y})),r.d(t,"v",(function(){return x})),r.d(t,"a",(function(){return U}));var n=r("f175"),s=function(e){return n["a"].get("/user.user_level/lists",{params:e})},u=function(e){return n["a"].post("/user.user_level/add",e)},a=function(e){return n["a"].get("/user.user_level/detail",{params:e})},i=function(e){return n["a"].post("/user.user_level/edit",e)},l=function(e){return n["a"].post("/user.user_level/del",e)},o=function(e){return n["a"].get("/user.user_label/lists",{params:e})},c=function(e){return n["a"].post("/user.user_label/add",e)},d=function(e){return n["a"].get("/user.user_label/detail",{params:e})},f=function(e){return n["a"].post("/user.user_label/edit",e)},p=function(e){return n["a"].post("/user.user_label/del",e)},g=function(e){return n["a"].get("/user.user/lists",{params:e})},v=function(){return n["a"].get("/user.user/otherList")},m=function(e){return n["a"].get("/user.user/detail",{params:e})},b=function(e){return n["a"].post("/user.user/setInfo",e)},h=function(e){return n["a"].post("/user.user/setLabel",e)},_=function(e){return n["a"].post("/user.user/setUserLabel",e)},k=function(e){return n["a"].post("/user.user/adjustUserWallet",e)},w=function(){return n["a"].get("/user.user/index")},L=function(e){return n["a"].get("/user.user/info",{params:e})},y=function(e){return n["a"].get("/user.user/userInviterLists",{params:e})},x=function(e){return n["a"].post("/user.user/adjustFirstLeader",e)},U=function(e){return n["a"].get("/user.user/selectUserLists",{params:e})}}}]);
//# sourceMappingURL=chunk-3963f328.b9ce7f02.js.map