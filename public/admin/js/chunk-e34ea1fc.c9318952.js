(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e34ea1fc"],{"13f5":function(t,s,e){"use strict";e("8868")},"669d":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"user-profile"},[s("div",{staticClass:"ls-card"},[s("div",{staticClass:"card-title"},[t._v(" 用户数据 ")]),s("div",{staticClass:"card-content m-t-24"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{staticClass:"flex-col col-center",attrs:{span:6}},[s("div",{staticClass:"lighter m-b-8"},[t._v("用户数")]),s("div",{staticClass:"font-size-30"},[t._v(t._s(t.UserData.user_count))])]),s("el-col",{staticClass:"flex-col col-center",attrs:{span:6}},[s("div",{staticClass:"lighter m-b-8"},[t._v("今日新增用户数")]),s("div",{staticClass:"font-size-30"},[t._v(t._s(t.UserData.user_new_count))])]),s("el-col",{staticClass:"flex-col col-center",attrs:{span:6}},[s("div",{staticClass:"lighter m-b-8"},[t._v("成交用户数")]),s("div",{staticClass:"font-size-30"},[t._v(t._s(t.UserData.purchase_count))])]),s("el-col",{staticClass:"flex-col col-center",attrs:{span:6}},[s("div",{staticClass:"lighter m-b-8"},[t._v("复购用户数")]),s("div",{staticClass:"font-size-30"},[t._v(t._s(t.UserData.repetition_count))])])],1)],1)]),s("div",{staticClass:"ls-card m-t-16"},[s("div",{staticClass:"card-title"},[t._v(" 新增用户数 ")]),s("div",{staticClass:"card-content m-t-24 ls-chart--visitors"},[s("div",{staticClass:"content"},[s("e-chart",{staticClass:"chart",attrs:{option:t.option}})],1)])])])},r=[],i=e("9ab4"),n=e("1b40"),u=e("22b4"),c=e("4cb5"),o=e("3620"),l=e("4b2a"),d=e("9394"),f=e("ff32"),p=e("bb6f"),v=e("f95e"),_=e("f633");u["a"]([c["a"],l["a"],v["a"],d["a"],f["a"],p["a"],o["a"]]);let h=class extends n["e"]{constructor(){super(...arguments),this.UserData={echarts_data:[]},this.tableData=[],this.option={xAxis:{type:"category",data:[0]},yAxis:{type:"value"},legend:{data:["人数"]},itemStyle:{color:"red"},tooltip:{trigger:"axis"},series:[{name:"人数",data:[0],type:"line"}]}}apiUserIndexFunc(){this.option.xAxis.data=[],Object(_["c"])().then(t=>{this.UserData=t,this.option.xAxis.data=[],this.option.series[0].data=[],this.UserData.echarts_data.forEach(t=>{this.option.xAxis.data.push(t.day),this.option.series[0].data.push(t.user_new_count)})}).catch(()=>{this.$message.error("请求数据失败，请刷新重载!")})}created(){}mounted(){this.apiUserIndexFunc()}};h=Object(i["a"])([n["a"]],h);var b=h,g=b,m=(e("13f5"),e("2877")),C=Object(m["a"])(g,a,r,!1,null,"ea74667e",null);s["default"]=C.exports},8868:function(t,s,e){},f633:function(t,s,e){"use strict";e.d(s,"o",(function(){return r})),e.d(s,"k",(function(){return i})),e.d(s,"m",(function(){return n})),e.d(s,"n",(function(){return u})),e.d(s,"l",(function(){return c})),e.d(s,"j",(function(){return o})),e.d(s,"f",(function(){return l})),e.d(s,"h",(function(){return d})),e.d(s,"i",(function(){return f})),e.d(s,"g",(function(){return p})),e.d(s,"p",(function(){return v})),e.d(s,"q",(function(){return _})),e.d(s,"b",(function(){return h})),e.d(s,"s",(function(){return b})),e.d(s,"t",(function(){return g})),e.d(s,"u",(function(){return m})),e.d(s,"r",(function(){return C})),e.d(s,"c",(function(){return x})),e.d(s,"d",(function(){return U})),e.d(s,"e",(function(){return w})),e.d(s,"v",(function(){return y})),e.d(s,"a",(function(){return D}));var a=e("f175");const r=t=>a["a"].get("/user.user_level/lists",{params:t}),i=t=>a["a"].post("/user.user_level/add",t),n=t=>a["a"].get("/user.user_level/detail",{params:t}),u=t=>a["a"].post("/user.user_level/edit",t),c=t=>a["a"].post("/user.user_level/del",t),o=t=>a["a"].get("/user.user_label/lists",{params:t}),l=t=>a["a"].post("/user.user_label/add",t),d=t=>a["a"].get("/user.user_label/detail",{params:t}),f=t=>a["a"].post("/user.user_label/edit",t),p=t=>a["a"].post("/user.user_label/del",t),v=t=>a["a"].get("/user.user/lists",{params:t}),_=()=>a["a"].get("/user.user/otherList"),h=t=>a["a"].get("/user.user/detail",{params:t}),b=t=>a["a"].post("/user.user/setInfo",t),g=t=>a["a"].post("/user.user/setLabel",t),m=t=>a["a"].post("/user.user/setUserLabel",t),C=t=>a["a"].post("/user.user/adjustUserWallet",t),x=()=>a["a"].get("/user.user/index"),U=t=>a["a"].get("/user.user/info",{params:t}),w=t=>a["a"].get("/user.user/userInviterLists",{params:t}),y=t=>a["a"].post("/user.user/adjustFirstLeader",t),D=t=>a["a"].get("/user.user/selectUserLists",{params:t})}}]);
//# sourceMappingURL=chunk-e34ea1fc.c9318952.js.map