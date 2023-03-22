(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b72cdbca"],{"0769":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"lucky-draw-edit"},[e("div",{staticClass:"ls-card"},["details"==t.type?e("el-page-header",{attrs:{content:"抽奖活动详情"},on:{back:function(e){return t.$router.go(-1)}}}):e("el-page-header",{attrs:{content:"add"===t.mode?"新增抽奖活动":"编辑抽奖活动"},on:{back:function(e){return t.$router.go(-1)}}})],1),e("el-form",{ref:"formRef",attrs:{rules:t.formRules,model:t.form,"label-width":"120px",size:"small",disabled:"details"==t.type}},[e("div",{staticClass:"ls-card m-t-16"},[e("div",{staticClass:"card-title"},[t._v(" 基本设置 ")]),e("div",{staticClass:"card-content m-t-24"},[e("el-form-item",{attrs:{label:"活动名称",prop:"",required:""}},[e("el-input",{attrs:{placeholder:"请输入活动名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("el-form-item",{attrs:{label:"活动时间",required:""}},[e("date-picker",{attrs:{type:"datetimerange","start-time":t.form.start_time,"end-time":t.form.end_time},on:{"update:startTime":function(e){return t.$set(t.form,"start_time",e)},"update:start-time":function(e){return t.$set(t.form,"start_time",e)},"update:endTime":function(e){return t.$set(t.form,"end_time",e)},"update:end-time":function(e){return t.$set(t.form,"end_time",e)}}})],1),e("el-form-item",{attrs:{label:"活动备注",prop:"remark"}},[e("el-input",{staticClass:"ls-input-textarea",attrs:{placeholder:"请输入活动备注",type:"textarea",rows:3,disabled:1==t.status},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1)],1)]),e("div",{staticClass:"ls-card m-t-16"},[e("div",{staticClass:"card-title"},[t._v(" 活动设置 ")]),e("div",{staticClass:"card-content m-t-24"},[e("el-form-item",{attrs:{label:"消耗积分",prop:"",required:""}},[e("el-input",{attrs:{placeholder:"请输入消耗积分",disabled:1==t.status},model:{value:t.form.need_integral,callback:function(e){t.$set(t.form,"need_integral",e)},expression:"form.need_integral"}}),e("div",{staticClass:"muted xs"},[t._v("每次抽奖消耗的积分数量")])],1),e("el-form-item",{attrs:{label:"抽奖次数",prop:"frequency_type",required:""}},[e("div",{},[e("el-radio",{staticClass:"m-r-16",attrs:{label:0,disabled:1==t.status},model:{value:t.form.frequency_type,callback:function(e){t.$set(t.form,"frequency_type",e)},expression:"form.frequency_type"}},[t._v("不限制抽奖次数")])],1),e("div",{},[e("el-radio",{attrs:{label:1,disabled:1==t.status},model:{value:t.form.frequency_type,callback:function(e){t.$set(t.form,"frequency_type",e)},expression:"form.frequency_type"}},[e("span",{staticClass:"m-r-5"},[t._v("每人每天抽奖不超过")]),e("el-input",{staticClass:"ls-input",attrs:{placeholder:"请输入抽奖次数",disabled:1==t.status},model:{value:t.form.frequency,callback:function(e){t.$set(t.form,"frequency",e)},expression:"form.frequency"}}),e("span",{staticClass:"m-l-5"},[t._v("次")])],1)],1)]),e("el-form-item",{attrs:{label:"抽奖奖品",prop:"prizes",required:""}},[e("div",{staticClass:"muted xs"},[t._v("需要设置8个奖品。抽中概率总和不能超过100%，未中奖类型的抽中概率无需填写")]),e("div",{staticClass:"list-table m-t-16"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:!1,expression:"false"}],staticStyle:{width:"100%"},attrs:{data:t.form.prizes,size:"mini","header-cell-style":{background:"#f5f8ff"}}},[e("el-table-column",{attrs:{prop:"",label:"位置"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("div",{},[t._v(" "+t._s(i.$index+1)+" ")])]}}])}),e("el-table-column",{attrs:{prop:"name",label:"奖品名称"}}),e("el-table-column",{attrs:{label:"奖品图片"},scopedSlots:t._u([{key:"default",fn:function(i){return[i.row.image?e("div",{staticClass:"flex"},[e("el-image",{staticStyle:{width:"34px",height:"34px"},attrs:{src:i.row.image}})],1):t._e()]}}])}),e("el-table-column",{attrs:{prop:"type_desc",label:"奖品类型"}}),e("el-table-column",{attrs:{prop:"num",label:"奖品数量"}}),"add"==t.mode?e("el-table-column",{attrs:{prop:"probability",label:"中奖概率"}}):t._e(),"edit"==t.mode?e("el-table-column",{attrs:{prop:"probability_desc",label:"中奖概率"}}):t._e(),e("el-table-column",{attrs:{fixed:"right",label:"操作","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("ls-lucky-draw-change",{attrs:{title:"编辑奖品",val:i.row,index:i.$index,status:t.status,mode:t.mode},on:{setPrize:t.setPrize}},[e("el-button",{attrs:{slot:"trigger",type:"text",size:"small",disabled:1==t.status},slot:"trigger"},[t._v(" 编辑")])],1)]}}])})],1)],1)]),e("el-form-item",{attrs:{label:"抽奖规则",prop:"",required:""}},[e("el-input",{staticClass:"ls-input-textarea",attrs:{placeholder:"请输入抽奖规则",type:"textarea",rows:3,disabled:1==t.status},model:{value:t.form.rule,callback:function(e){t.$set(t.form,"rule",e)},expression:"form.rule"}})],1),e("el-form-item",{attrs:{label:"中奖名单",prop:"show_winning_list",required:""}},[e("div",{staticClass:"flex"},[e("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":t.styleConfig.primary,"inactive-color":"#f4f4f5",disabled:1==t.status},model:{value:t.form.show_winning_list,callback:function(e){t.$set(t.form,"show_winning_list",e)},expression:"form.show_winning_list"}}),e("span",{staticClass:"m-l-16"},[t._v(t._s(t.form.show_winning_list?"显示":"隐藏"))])],1)])],1)])]),e("div",{staticClass:"bg-white ls-fixed-footer"},[e("div",{staticClass:"row-center flex",staticStyle:{height:"100%"}},[e("el-button",{attrs:{size:"small"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("取消")]),e("el-button",{attrs:{size:"small",type:"primary",disabled:"details"==t.type},on:{click:function(e){return t.onSubmit()}}},[t._v("保存")])],1)])],1)},s=[],l=i("9ab4"),r=i("1b40"),o=i("131b"),n=i("4201"),c=i("3c50"),d=i("5f8a"),u=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"ls-dialog__trigger",on:{click:t.onTrigger}},[t._t("trigger")],2),e("el-dialog",{attrs:{"coustom-class":"ls-dialog__content",title:t.title,visible:t.visible,width:t.width,top:t.top,"append-to-body":!0,center:"","before-close":t.close,"close-on-click-modal":!0,modal:!0}},[e("div",{staticClass:"dialog-content"},[e("el-form",{ref:"valueRef",attrs:{rules:t.valueRules,model:t.form,"label-width":"120px",size:"small",disabled:1==t.status}},[e("el-form-item",{attrs:{label:"奖品名称",required:""}},[e("el-input",{staticClass:"ls-input",staticStyle:{width:"300px"},attrs:{placeholder:"请输入奖品名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("el-form-item",{attrs:{label:"奖品图片",required:""}},[e("div",{},[e("material-select",{attrs:{limit:1},model:{value:t.form.image,callback:function(e){t.$set(t.form,"image",e)},expression:"form.image"}}),e("div",{staticClass:"muted xs m-r-16"},[t._v("建议尺寸：100*100")])],1)]),e("el-form-item",{attrs:{label:"奖品类型",required:""}},[e("el-radio-group",{staticClass:"m-r-16",model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[e("el-radio",{attrs:{label:0}},[t._v("未中奖")]),e("el-radio",{attrs:{label:1}},[t._v("积分")]),e("el-radio",{attrs:{label:2}},[t._v("优惠券")]),e("el-radio",{attrs:{label:3}},[t._v("余额")])],1),1==t.form.type?e("div",{},[e("el-input",{staticClass:"ls-input",staticStyle:{width:"300px"},attrs:{placeholder:"请输入积分"},model:{value:t.form.type_value,callback:function(e){t.$set(t.form,"type_value",e)},expression:"form.type_value"}},[e("template",{slot:"append"},[t._v("积分")])],2)],1):t._e(),3==t.form.type?e("div",{},[e("el-input",{staticClass:"ls-input",staticStyle:{width:"300px"},attrs:{placeholder:"请输入金额"},model:{value:t.form.type_value,callback:function(e){t.$set(t.form,"type_value",e)},expression:"form.type_value"}},[e("template",{slot:"append"},[t._v("元")])],2),e("div",{staticClass:"muted xs"},[t._v("余额发放至用户钱包余额")])],1):t._e(),2==t.form.type?e("div",{staticClass:"flex"},[e("el-select",{staticClass:"ls-select",attrs:{placeholder:"全部"},model:{value:t.form.type_value,callback:function(e){t.$set(t.form,"type_value",e)},expression:"form.type_value"}},t._l(t.coupon,(function(t,i){return e("div",{key:i},[e("el-option",{attrs:{label:t.name,value:t.id}})],1)})),0),e("div",{staticClass:"m-l-10"},[e("router-link",{staticClass:"m-r-10",attrs:{target:"_blank",to:"/coupon/edit"}},[e("el-button",{attrs:{type:"text",size:"small"}},[t._v("新建优惠券")])],1),e("el-button",{attrs:{size:"small",type:"text"},on:{click:t.couponLists}},[t._v("刷新")])],1)],1):t._e()],1),0!=t.form.type?e("el-form-item",{attrs:{label:"奖品数量",required:""}},[e("el-input",{staticClass:"ls-input",staticStyle:{width:"300px"},attrs:{placeholder:"请输入奖品数量"},model:{value:t.form.num,callback:function(e){t.$set(t.form,"num",e)},expression:"form.num"}})],1):t._e(),0!=t.form.type?e("el-form-item",{attrs:{label:"抽中概率",required:""}},["add"==t.mode?e("el-input",{staticClass:"ls-input",staticStyle:{width:"300px"},attrs:{placeholder:"请输入抽中概率"},model:{value:t.form.probability,callback:function(e){t.$set(t.form,"probability",e)},expression:"form.probability"}},[e("template",{slot:"append"},[t._v("%")])],2):t._e(),"edit"==t.mode?e("el-input",{staticClass:"ls-input",staticStyle:{width:"300px"},attrs:{placeholder:"请输入抽中概率"},model:{value:t.form.probability_desc,callback:function(e){t.$set(t.form,"probability_desc",e)},expression:"form.probability_desc"}},[e("template",{slot:"append"},[t._v("%")])],2):t._e(),e("div",{staticClass:"muted xs"},[t._v("概率不能超过100%，可保留两位小数")])],1):t._e(),e("el-form-item",{attrs:{label:"抽中提示语",required:""}},[e("el-input",{staticClass:"ls-input",staticStyle:{width:"300px"},attrs:{placeholder:"请输入抽中提示语"},model:{value:t.form.tips,callback:function(e){t.$set(t.form,"tips",e)},expression:"form.tips"}})],1)],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{size:"small"},on:{click:t.close}},[t._v("取消")]),e("el-button",{attrs:{size:"small",type:"primary",disabled:1==t.status},on:{click:t.onSubimt}},[t._v("确认")])],1)])],1)},p=[],m=i("0cbf"),f=i("b3ad"),b=i("6ddb");let y=class extends r["e"]{constructor(){super(...arguments),this.visible=!1,this.form={name:"",image:"",type:0,type_value:0,type_desc:"",num:0,probability:0,tips:"",status:"",probability_desc:0},this.coupon=[],this.valueRules={}}getValue(t){console.log("val",t),this.form=Object(b["c"])(t),console.log(this.form)}getProbability(t){"edit"==this.mode&&(this.form.probability=1*t)}getType(t){0==t?this.form.type_desc="未中奖":1==t?this.form.type_desc="积分":2==t?this.form.type_desc="优惠券":3==t&&(this.form.type_desc="余额")}goToCouponEdit(){window.open("/admin/coupon/edit","_blank")}couponLists(){Object(m["g"])({status:2,get_type:2}).then(t=>{console.log("res",t),this.coupon=t.lists})}onSubimt(){this.form.type_value=1*this.form.type_value,this.$emit("setPrize",this.form,this.index),this.visible=!1}onTrigger(){this.couponLists(),this.visible=!0}close(){this.visible=!1}};Object(l["a"])([Object(r["c"])()],y.prototype,"index",void 0),Object(l["a"])([Object(r["c"])()],y.prototype,"val",void 0),Object(l["a"])([Object(r["c"])()],y.prototype,"status",void 0),Object(l["a"])([Object(r["c"])()],y.prototype,"mode",void 0),Object(l["a"])([Object(r["c"])({default:"编辑奖品"})],y.prototype,"title",void 0),Object(l["a"])([Object(r["c"])({default:"700px"})],y.prototype,"width",void 0),Object(l["a"])([Object(r["c"])({default:"20vh"})],y.prototype,"top",void 0),Object(l["a"])([Object(r["f"])("val",{immediate:!0})],y.prototype,"getValue",null),Object(l["a"])([Object(r["f"])("form.probability_desc",{immediate:!0})],y.prototype,"getProbability",null),Object(l["a"])([Object(r["f"])("form.type",{immediate:!0})],y.prototype,"getType",null),y=Object(l["a"])([Object(r["a"])({components:{MaterialSelect:f["a"]}})],y);var h=y,_=h,v=(i("7e15"),i("2877")),g=Object(v["a"])(_,u,p,!1,null,"3c1337dc",null),k=g.exports;let w=class extends r["e"]{constructor(){super(...arguments),this.mode=n["f"]["ADD"],this.identity=null,this.status=null,this.type="",this.prizeType=0,this.form={name:"",start_time:"",end_time:"",need_integral:0,frequency_type:0,frequency:0,rule:"",show_winning_list:0,remark:"",prizes:[{}]},this.formRules={},this.lists=[{name:"",image:"",type:0,type_value:0,type_desc:"",num:0,probability:0,tips:"",status:"",probability_desc:0},{name:"",image:"",type:0,type_value:0,type_desc:"",num:0,probability:0,tips:"",status:"",probability_desc:0},{name:"",image:"",type:0,type_value:0,type_desc:"",num:0,probability:0,tips:"",status:"",probability_desc:0},{name:"",image:"",type:0,type_value:0,type_desc:"",num:0,probability:0,tips:"",status:"",probability_desc:0},{name:"",image:"",type:0,type_value:0,type_desc:"",num:0,probability:0,tips:"",status:"",probability_desc:0},{name:"",image:"",type:0,type_value:0,type_desc:"",num:0,probability:0,tips:"",status:"",probability_desc:0},{name:"",image:"",type:0,type_value:0,type_desc:"",num:0,probability:0,tips:"",status:"",probability_desc:0},{name:"",image:"",type:0,type_value:0,type_desc:"",num:0,probability:0,tips:"",status:"",probability_desc:0}]}setPrize(t,e){console.log(t,e),this.$set(this.form.prizes,e,Object(b["c"])(t)),this.$forceUpdate()}onSubmit(){this.mode==n["f"]["ADD"]?this.luckyDrawAdd():this.mode==n["f"]["EDIT"]&&this.luckyDrawEdit()}luckyDrawDetail(){Object(o["c"])({id:this.identity}).then(t=>{console.log("res",t),t.start_time=t.start_time_desc,t.end_time=t.end_time_desc,this.form=t})}luckyDrawEdit(){Object(o["d"])(this.form).then(t=>{setTimeout(()=>{this.$router.go(-1)},500)}).catch(t=>{console.log("err",t)})}luckyDrawAdd(){Object(o["a"])(this.form).then(t=>{setTimeout(()=>{this.$router.go(-1)},500)}).catch(t=>{console.log("err",t)})}created(){const t=this.$route.query;t.mode&&(this.mode=t.mode),this.mode===n["f"]["EDIT"]?(this.identity=1*t.id,this.status=t.status,this.type=t.type,this.luckyDrawDetail()):this.form.prizes=this.lists}};w=Object(l["a"])([Object(r["a"])({components:{LsPagination:c["a"],DatePicker:d["a"],LsLuckyDrawChange:k}})],w);var x=w,O=x,j=(i("383bc"),Object(v["a"])(O,a,s,!1,null,"b5438338",null));e["default"]=j.exports},"0cbf":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"e",(function(){return l})),i.d(e,"g",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"h",(function(){return n})),i.d(e,"l",(function(){return c})),i.d(e,"k",(function(){return d})),i.d(e,"d",(function(){return u})),i.d(e,"f",(function(){return p})),i.d(e,"m",(function(){return m})),i.d(e,"i",(function(){return f})),i.d(e,"n",(function(){return b})),i.d(e,"j",(function(){return y})),i.d(e,"b",(function(){return h}));var a=i("f175");const s=t=>a["a"].post("/marketing.coupon/add",t),l=t=>a["a"].post("/marketing.coupon/edit",t),r=t=>a["a"].get("/marketing.coupon/lists",{params:t}),o=t=>a["a"].post("/marketing.coupon/delete",t),n=t=>a["a"].post("/marketing.coupon/open",t),c=t=>a["a"].post("/marketing.coupon/stop",t),d=t=>a["a"].post("/marketing.coupon/sort",t),u=t=>a["a"].get("/marketing.coupon/detail",{params:{id:t}}),p=t=>a["a"].get("/marketing.coupon/info",{params:{id:t}}),m=()=>a["a"].get("/marketing.coupon/survey"),f=t=>a["a"].get("/marketing.coupon/record",{params:t}),b=t=>a["a"].post("/marketing.coupon/void",t),y=t=>a["a"].post("/marketing.coupon/send",t),h=t=>a["a"].get("/marketing.coupon/commonLists",{params:t})},"131b":function(t,e,i){"use strict";i.d(e,"g",(function(){return s})),i.d(e,"b",(function(){return l})),i.d(e,"e",(function(){return r})),i.d(e,"i",(function(){return o})),i.d(e,"d",(function(){return n})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return d})),i.d(e,"f",(function(){return u})),i.d(e,"h",(function(){return p}));var a=i("f175");const s=t=>a["a"].get("/lucky_draw.lucky_draw/lists",{params:t}),l=t=>a["a"].post("/lucky_draw.lucky_draw/delete",t),r=t=>a["a"].post("/lucky_draw.lucky_draw/end",t),o=t=>a["a"].post("/lucky_draw.lucky_draw/start",t),n=t=>a["a"].post("lucky_draw.lucky_draw/edit",t),c=t=>a["a"].get("/lucky_draw.lucky_draw/detail",{params:t}),d=t=>a["a"].post("lucky_draw.lucky_draw/add",t),u=()=>a["a"].get("lucky_draw.lucky_draw/getPrizeType"),p=t=>a["a"].get("lucky_draw.lucky_draw/record",{params:t})},"239d":function(t,e,i){},"383bc":function(t,e,i){"use strict";i("4eea")},"4eea":function(t,e,i){},"5f8a":function(t,e,i){"use strict";var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-date-picker",{attrs:{type:t.type,"picker-options":t.pickerOptions,"range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",align:"right","value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:t.changeDate},model:{value:t.pickerValue,callback:function(e){t.pickerValue=e},expression:"pickerValue"}})},s=[],l=i("9ab4"),r=i("1b40");let o=class extends r["e"]{constructor(){super(...arguments),this.pickerValue=[],this.pickerOptions={shortcuts:[{text:"最近一周",onClick(t){const e=new Date,i=new Date;i.setTime(i.getTime()-6048e5),t.$emit("pick",[i,e])}},{text:"最近一个月",onClick(t){const e=new Date,i=new Date;i.setTime(i.getTime()-2592e6),t.$emit("pick",[i,e])}},{text:"最近三个月",onClick(t){const e=new Date,i=new Date;i.setTime(i.getTime()-7776e6),t.$emit("pick",[i,e])}}]}}changeDate(){const t=this.pickerValue?this.pickerValue:this.pickerValue=["",""];this.$emit("update:start-time",t[0]),this.$emit("update:end-time",t[1])}handleStartTime(t){!this.pickerValue&&(this.pickerValue=[]),this.$set(this.pickerValue,0,t)}handleEndTime(t){!this.pickerValue&&(this.pickerValue=[]),this.$set(this.pickerValue,1,t)}};Object(l["a"])([Object(r["c"])()],o.prototype,"startTime",void 0),Object(l["a"])([Object(r["c"])()],o.prototype,"endTime",void 0),Object(l["a"])([Object(r["c"])({default:"datetimerange"})],o.prototype,"type",void 0),Object(l["a"])([Object(r["f"])("startTime",{immediate:!0})],o.prototype,"handleStartTime",null),Object(l["a"])([Object(r["f"])("endTime",{immediate:!0})],o.prototype,"handleEndTime",null),o=Object(l["a"])([r["a"]],o);var n=o,c=n,d=i("2877"),u=Object(d["a"])(c,a,s,!1,null,null,null);e["a"]=u.exports},"7e15":function(t,e,i){"use strict";i("83e2")},"83e2":function(t,e,i){},b3ad:function(t,e,i){"use strict";var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ls-dialog",{ref:"materialDialog",staticClass:"material-select",attrs:{title:"选择"+t.tipsText,width:"1050px",top:"15vh"},on:{confirm:t.handleConfirm}},[t.hiddenTrigger?t._e():e("div",{staticClass:"material-select__trigger clearfix",attrs:{slot:"trigger"},on:{click:function(t){t.stopPropagation()}},slot:"trigger"},[e("draggable",{staticClass:"ls-draggable",attrs:{animation:"300",disabled:t.disabled||t.dragDisabled},on:{update:t.handleChange},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}},t._l(t.fileList,(function(i,a){return e("div",{key:i+a,staticClass:"material-preview ls-del-wrap",class:{"is-disabled":t.disabled,"is-one":1==t.limit},on:{click:function(e){return t.showDialog(!1,a)}}},[t.$scopedSlots.preview?e("div",[t._t("preview",null,{item:t.imageUri(i)})],2):e("file-item",{attrs:{type:t.type,item:{uri:t.imageUri(i)},size:t.size}}),t.enableDelete?e("i",{staticClass:"el-icon-close ls-icon-del",on:{click:function(e){return e.stopPropagation(),t.delImage(a)}}}):t._e()],1)})),0),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showUpload,expression:"showUpload"}],staticClass:"material-upload",class:{"is-disabled":t.disabled,"is-one":1==t.limit},on:{click:function(e){return t.showDialog(!0)}}},[t.$slots.upload?e("div",[t._t("upload")],2):e("div",{staticClass:"upload-btn flex row-center",style:{width:t.size+"px",height:t.size+"px",background:t.uploadBg}},[t._t("default"),t.$slots.default?t._e():e("span",[t._v("添加"+t._s(t.tipsText))])],2)])],1),e("div",{staticClass:"material-wrap"},[e("ls-material",{ref:"material",attrs:{"page-size":15,type:t.type,limit:t.meterialLimit},on:{change:t.selectChange}})],1)])},s=[],l=i("9ab4"),r=i("1b40"),o=i("0a6d"),n=i("c6fe"),c=i("e915"),d=i("b76a"),u=i.n(d);let p=class extends r["e"]{constructor(){super(...arguments),this.isAdd=!0,this.fileList=[]}get showUpload(){const{fileList:t,limit:e}=this;return e-t.length>0}get meterialLimit(){return this.isAdd?this.limit?this.limit-this.fileList.length:null:1}get tipsText(){switch(this.type){case"image":return"图片";case"video":return"视频"}}get imageUri(){return t=>this.enableDomain?t:this.$getImageUri(t)}valueChange(t){this.fileList=Array.isArray(t)?t:""==t?[]:[t]}showDialog(t=!0,e){var i;this.disabled||(this.isAdd=t,void 0!==e&&(this.currentIndex=e),null===(i=this.$refs.materialDialog)||void 0===i||i.onTrigger())}selectChange(t){this.select=t}handleConfirm(){this.$refs.material.clearSelectList();const t=this.select.map(t=>this.enableDomain?t.uri:t.url);this.isAdd?this.fileList=this.fileList.concat(t):this.fileList.splice(this.currentIndex,1,t.shift()),this.handleChange()}delImage(t){this.fileList.splice(t,1),this.handleChange()}handleChange(){const t=1!=this.limit?this.fileList:this.fileList[0]||"";this.$emit("input",t),this.$emit("change",t),this.fileList=[]}};Object(l["a"])([Object(r["c"])({default:()=>[]})],p.prototype,"value",void 0),Object(l["a"])([Object(r["c"])({default:1})],p.prototype,"limit",void 0),Object(l["a"])([Object(r["c"])({default:"100"})],p.prototype,"size",void 0),Object(l["a"])([Object(r["c"])({default:!1})],p.prototype,"disabled",void 0),Object(l["a"])([Object(r["c"])({default:!1})],p.prototype,"dragDisabled",void 0),Object(l["a"])([Object(r["c"])({default:!1})],p.prototype,"hiddenTrigger",void 0),Object(l["a"])([Object(r["c"])({default:"image"})],p.prototype,"type",void 0),Object(l["a"])([Object(r["c"])({default:"transparent"})],p.prototype,"uploadBg",void 0),Object(l["a"])([Object(r["c"])({default:!0})],p.prototype,"enableDomain",void 0),Object(l["a"])([Object(r["c"])({default:!0})],p.prototype,"enableDelete",void 0),Object(l["a"])([Object(r["f"])("value",{immediate:!0})],p.prototype,"valueChange",null),p=Object(l["a"])([Object(r["a"])({components:{LsDialog:o["a"],LsMaterial:n["a"],Draggable:u.a,FileItem:c["a"]}})],p);var m=p,f=m,b=(i("fb48"),i("2877")),y=Object(b["a"])(f,a,s,!1,null,"1503bff6",null);e["a"]=y.exports},fb48:function(t,e,i){"use strict";i("239d")}}]);
//# sourceMappingURL=chunk-b72cdbca.a12fc656.js.map