(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d0109c98"],{2732:function(t,s,e){},"7b7e":function(t,s,e){"use strict";e.d(s,"b",(function(){return l})),e.d(s,"e",(function(){return a})),e.d(s,"g",(function(){return n})),e.d(s,"a",(function(){return r})),e.d(s,"d",(function(){return o})),e.d(s,"c",(function(){return d})),e.d(s,"f",(function(){return c}));var i=e("f175");const l=()=>i["a"].post("/sign.sign/dataCenter"),a=t=>i["a"].get("/sign.sign/getConfig",{params:t}),n=t=>i["a"].post("/sign.sign/setConfig",t),r=t=>i["a"].post("/sign.sign/add",t),o=t=>i["a"].post("/sign.sign/edit",t),d=t=>i["a"].post("/sign.sign/delete",t),c=t=>i["a"].get("/sign.sign/lists",{params:t})},c81a:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"ls-add-admin"},[s("div",{staticClass:"ls-card ls-coupon-edit__form"},[s("div",{staticClass:"nr weight-500 m-b-20"},[t._v("签到设置")]),s("el-form",{ref:"list",attrs:{model:t.list,"label-width":"120px",size:"small"}},[s("el-form-item",{attrs:{label:"应用状态"}},[s("el-radio",{attrs:{label:0},model:{value:t.list.is_open,callback:function(s){t.$set(t.list,"is_open",s)},expression:"list.is_open"}},[t._v("关闭")]),s("el-radio",{attrs:{label:1},model:{value:t.list.is_open,callback:function(s){t.$set(t.list,"is_open",s)},expression:"list.is_open"}},[t._v("开启")]),s("span",{staticClass:"desc"},[t._v("关闭或开启充值奖励应用，关闭后不显示商城充值奖励入口")])],1)],1)],1),s("div",{staticClass:"ls-card ls-coupon-edit__form m-t-16"},[s("div",{staticClass:"nr weight-500 m-b-20"},[t._v("签到规则")]),s("el-form",{attrs:{"label-width":"120px"}},[s("el-form-item",{attrs:{label:"每天签到奖励"}},[s("el-checkbox",{model:{value:t.status,callback:function(s){t.status=s},expression:"status"}},[t._v("积分")]),s("el-input",{model:{value:t.list.daily.integral,callback:function(s){t.$set(t.list.daily,"integral",s)},expression:"list.daily.integral"}})],1),s("el-form-item",{attrs:{label:"连续签到奖励"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list.continuous,size:"mini"}},[s("el-table-column",{attrs:{prop:"days","min-width":"150",label:"连续天数"},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(" "+t._s(s.row.days)+" 天 ")]}}])}),s("el-table-column",{attrs:{"min-width":"250",prop:"integral",label:"连续奖励"},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(" "+t._s(s.row.integral)+" 积分 ")]}}])}),s("el-table-column",{attrs:{fixed:"right",label:"操作",width:"350"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.days>=2?[s("div",{staticClass:"flex"},[s("ls-dialog",{staticClass:"inline flex row-center m-r-24",attrs:{width:"35vw"},on:{confirm:function(s){return t.editRule(e.row)}}},[s("el-button",{attrs:{slot:"trigger",type:"text",size:"small"},on:{click:function(s){return t.setting(e.row)}},slot:"trigger"},[t._v("编辑")]),s("div",{staticClass:"flex row-center"},[s("el-form",{ref:"address",attrs:{"label-width":"120px"}},[s("el-form-item",{attrs:{label:"连续签到天数",prop:"return_district"}},[s("el-input",{staticClass:"ls-input",attrs:{"show-word-limit":""},model:{value:e.row.days,callback:function(s){t.$set(e.row,"days",s)},expression:"scope.row.days"}})],1),s("el-form-item",{attrs:{label:"连续积分状态",prop:"return_district"}},[s("el-radio",{attrs:{label:0},model:{value:e.row.integral_status,callback:function(s){t.$set(e.row,"integral_status",s)},expression:"scope.row.integral_status"}},[t._v("关闭")]),s("el-radio",{attrs:{label:1},model:{value:e.row.integral_status,callback:function(s){t.$set(e.row,"integral_status",s)},expression:"scope.row.integral_status"}},[t._v("开启")])],1),s("el-form-item",{attrs:{label:"赠送积分数量",prop:"return_address"}},[s("el-input",{staticClass:"ls-input",attrs:{"show-word-limit":""},model:{value:e.row.integral,callback:function(s){t.$set(e.row,"integral",s)},expression:"scope.row.integral"}})],1)],1)],1)],1),s("ls-dialog",{staticClass:"inline flex row-center m-r-24",attrs:{content:"确认删除这条连续签到奖励吗？",width:"30vw"},on:{confirm:function(s){return t.delRule(e.row)}}},[s("el-button",{attrs:{slot:"trigger",type:"text",size:"small"},slot:"trigger"},[t._v("删除")])],1)],1)]:void 0}}],null,!0)})],1),s("ls-dialog",{staticClass:"inline flex row-center m-l-24",attrs:{width:"40vw"},on:{confirm:function(s){return t.addRule()}}},[s("div",{staticClass:"add-btn flex m-t-24 row-center",attrs:{slot:"trigger"},on:{click:function(s){t.signAdd.days="",t.signAdd.integral="",t.signAdd.integral_status=1}},slot:"trigger"},[t._v("添加连续签到奖励")]),s("div",{staticClass:"flex row-center"},[s("el-form",{ref:"address",attrs:{"label-width":"120px"}},[s("el-form-item",{attrs:{label:"连续签到天数",prop:"return_district"}},[s("el-input",{staticClass:"ls-input",attrs:{"show-word-limit":""},model:{value:t.signAdd.days,callback:function(s){t.$set(t.signAdd,"days",s)},expression:"signAdd.days"}})],1),s("el-form-item",{attrs:{label:"连续积分状态",prop:"return_district"}},[s("el-radio",{attrs:{label:0},model:{value:t.signAdd.integral_status,callback:function(s){t.$set(t.signAdd,"integral_status",s)},expression:"signAdd.integral_status"}},[t._v("关闭")]),s("el-radio",{attrs:{label:1},model:{value:t.signAdd.integral_status,callback:function(s){t.$set(t.signAdd,"integral_status",s)},expression:"signAdd.integral_status"}},[t._v("开启")])],1),s("el-form-item",{attrs:{label:"赠送积分数量",prop:"return_address"}},[s("el-input",{staticClass:"ls-input",attrs:{"show-word-limit":""},model:{value:t.signAdd.integral,callback:function(s){t.$set(t.signAdd,"integral",s)},expression:"signAdd.integral"}})],1)],1)],1)])],1),s("el-form-item",{attrs:{label:"每天签到奖励"}},[s("el-input",{staticClass:"m-t-10",attrs:{type:"textarea",rows:10,placeholder:"请输入内容"},model:{value:t.list.remark,callback:function(s){t.$set(t.list,"remark",s)},expression:"list.remark"}})],1)],1)],1),s("div",{staticClass:"bg-white flex row-center ls-fixed-footer"},[s("div",{staticClass:"row-center flex"},[s("el-button",{attrs:{size:"small"},on:{click:function(s){return t.$router.go(-1)}}},[t._v("取消")]),s("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(s){return t.onSubmit("form")}}},[t._v("保存")])],1)])])},l=[],a=e("9ab4"),n=e("1b40"),r=e("0a6d"),o=e("7b7e");let d=class extends n["e"]{constructor(){super(...arguments),this.list={is_open:1,daily:{integral_status:!1,integral:""},continuous:[],remark:""},this.signAdd={days:"",integral_status:"0",integral:""}}addRule(){Object(o["a"])({...this.signAdd}).then(t=>{this.detail()})}setting(t){this.signAdd.days=t.days,this.signAdd.integral_status=t.integral_status,this.signAdd.integral=t.integral}editRule(t){Object(o["d"])({...t}).then(t=>{this.detail()})}delRule(t){Object(o["c"])({id:t.id}).then(t=>{this.detail()})}onSubmit(){this.list.daily.integral_status=this.list.daily.integral_status?1:0,Object(o["g"])({...this.list}).then(()=>{this.detail()}).catch(()=>{})}detail(){Object(o["e"])({}).then(t=>{this.list=t}).catch(()=>{})}created(){this.detail()}get status(){return 1==this.list.daily.integral_status}set status(t){this.list.daily.integral_status=t}};d=Object(a["a"])([Object(n["a"])({components:{lsDialog:r["a"]}})],d);var c=d,u=c,g=(e("cc3e"),e("2877")),f=Object(g["a"])(u,i,l,!1,null,"e0dd4b14",null);s["default"]=f.exports},cc3e:function(t,s,e){"use strict";e("2732")}}]);
//# sourceMappingURL=chunk-d0109c98.7cdb6c18.js.map