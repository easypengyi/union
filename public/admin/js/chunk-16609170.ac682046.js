(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16609170"],{"5f8a":function(t,e,i){"use strict";var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-date-picker",{attrs:{type:t.type,"picker-options":t.pickerOptions,"range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",align:"right","value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:t.changeDate},model:{value:t.pickerValue,callback:function(e){t.pickerValue=e},expression:"pickerValue"}})},s=[],r=i("9ab4"),l=i("1b40");let o=class extends l["e"]{constructor(){super(...arguments),this.pickerValue=[],this.pickerOptions={shortcuts:[{text:"最近一周",onClick(t){const e=new Date,i=new Date;i.setTime(i.getTime()-6048e5),t.$emit("pick",[i,e])}},{text:"最近一个月",onClick(t){const e=new Date,i=new Date;i.setTime(i.getTime()-2592e6),t.$emit("pick",[i,e])}},{text:"最近三个月",onClick(t){const e=new Date,i=new Date;i.setTime(i.getTime()-7776e6),t.$emit("pick",[i,e])}}]}}changeDate(){const t=this.pickerValue?this.pickerValue:this.pickerValue=["",""];this.$emit("update:start-time",t[0]),this.$emit("update:end-time",t[1])}handleStartTime(t){!this.pickerValue&&(this.pickerValue=[]),this.$set(this.pickerValue,0,t)}handleEndTime(t){!this.pickerValue&&(this.pickerValue=[]),this.$set(this.pickerValue,1,t)}};Object(r["a"])([Object(l["c"])()],o.prototype,"startTime",void 0),Object(r["a"])([Object(l["c"])()],o.prototype,"endTime",void 0),Object(r["a"])([Object(l["c"])({default:"datetimerange"})],o.prototype,"type",void 0),Object(r["a"])([Object(l["f"])("startTime",{immediate:!0})],o.prototype,"handleStartTime",null),Object(r["a"])([Object(l["f"])("endTime",{immediate:!0})],o.prototype,"handleEndTime",null),o=Object(r["a"])([l["a"]],o);var n=o,c=n,d=i("2877"),m=Object(d["a"])(c,a,s,!1,null,null,null);e["a"]=m.exports},ade8:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"user-tag-edit"},[e("div",{staticClass:"ls-card"},[0==t.status?e("el-page-header",{attrs:{content:"砍价活动详情"},on:{back:function(e){return t.$router.go(-1)}}}):e("el-page-header",{attrs:{content:"add"===t.mode?"新增砍价活动":"编辑砍价活动"},on:{back:function(e){return t.$router.go(-1)}}})],1),e("el-form",{ref:"formRef",attrs:{rules:t.formRules,model:t.form,"label-width":"120px",size:"small",disabled:0==t.status}},[e("div",{staticClass:"ls-card m-t-16"},[e("div",{staticClass:"card-title"},[t._v(" 基本信息 ")]),e("div",{staticClass:"card-content m-t-24"},[e("el-form-item",{attrs:{label:"活动名称",prop:"name"}},[e("el-input",{attrs:{placeholder:"请输入活动名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("el-form-item",{attrs:{label:"活动时间",required:""}},[e("date-picker",{attrs:{type:"datetimerange","start-time":t.form.start_time,"end-time":t.form.end_time},on:{"update:startTime":function(e){return t.$set(t.form,"start_time",e)},"update:start-time":function(e){return t.$set(t.form,"start_time",e)},"update:endTime":function(e){return t.$set(t.form,"end_time",e)},"update:end-time":function(e){return t.$set(t.form,"end_time",e)}}})],1),e("el-form-item",{attrs:{label:"标签描述",prop:"remark"}},[e("el-input",{staticClass:"ls-input-textarea",attrs:{placeholder:"请输入标签描述",type:"textarea",rows:3},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1)],1)]),e("div",{staticClass:"ls-card m-t-16"},[e("div",{staticClass:"card-title"},[t._v(" 活动商品 ")]),e("div",{staticClass:"card-content m-t-24"},[e("el-form-item",{attrs:{label:"砍价商品",prop:"",required:""}},[e("goods-select",{attrs:{mode:"table","is-spec":!0,limit:25,extend:{name:"砍价",price:[{title:"首刀价格",key:"first_knife"},{title:"底价价格",key:"floor_price"}]}},model:{value:t.selectGoods,callback:function(e){t.selectGoods=e},expression:"selectGoods"}},[e("el-button",{attrs:{size:"mini",type:"primary",disabled:2==t.status}},[t._v("选择砍价商品")])],1)],1)],1)]),e("div",{staticClass:"ls-card m-t-16"},[e("div",{staticClass:"card-title"},[t._v(" 活动规则 ")]),e("div",{staticClass:"card-content m-t-24"},[e("el-form-item",{attrs:{label:"购买方式",prop:"buy_condition"}},[e("el-radio-group",{staticClass:"m-r-16",attrs:{disabled:2==t.status},model:{value:t.form.buy_condition,callback:function(e){t.$set(t.form,"buy_condition",e)},expression:"form.buy_condition"}},[e("el-radio",{staticClass:"m-r-16",attrs:{label:1}},[t._v("砍到任意金额可购买")]),e("el-radio",{attrs:{label:2}},[t._v("砍到底价价格才可购买")])],1)],1),e("el-form-item",{attrs:{label:"砍价有效期",prop:"valid_period"}},[e("el-input",{staticClass:"ls-input",attrs:{placeholder:"请输入金额",disabled:2==t.status},model:{value:t.form.valid_period,callback:function(e){t.$set(t.form,"valid_period",e)},expression:"form.valid_period"}},[e("template",{slot:"append"},[t._v("分钟")])],2),e("div",{staticClass:"muted xs"},[t._v("用户发起砍价到砍价截止的时长，超出时间没有达到帮砍人数视为砍价失败")])],1),e("el-form-item",{attrs:{label:"帮砍人数",prop:"help_num"}},[e("el-input",{staticClass:"ls-input",attrs:{placeholder:"请输入金额",disabled:2==t.status},model:{value:t.form.help_num,callback:function(e){t.$set(t.form,"help_num",e)},expression:"form.help_num"}},[e("template",{slot:"append"},[t._v("人")])],2),e("div",{staticClass:"muted xs"},[t._v("设置帮砍人数，至少设置1人")])],1),e("el-form-item",{attrs:{label:"每刀金额",prop:"knife_amount_type",required:""}},[e("el-radio-group",{staticClass:"m-r-16",attrs:{disabled:2==t.status},model:{value:t.form.knife_amount_type,callback:function(e){t.$set(t.form,"knife_amount_type",e)},expression:"form.knife_amount_type"}},[e("el-radio",{staticClass:"m-r-16",attrs:{label:1}},[t._v("每刀固定金额")]),e("el-radio",{attrs:{label:2}},[t._v("每刀任意金额")])],1),e("div",{staticClass:"muted xs m-r-16"},[t._v(" 选择每刀固定金额时，每人砍价金额相同，达到帮砍人数才可砍至底价 ")])],1),e("el-form-item",{attrs:{label:"自己砍价",prop:"self",required:""}},[e("div",{staticClass:"flex"},[e("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":t.styleConfig.primary,"inactive-color":"#f4f4f5",disabled:2==t.status},model:{value:t.form.self,callback:function(e){t.$set(t.form,"self",e)},expression:"form.self"}}),e("span",{staticClass:"m-l-16"},[t._v(t._s(t.form.self?"允许":"禁止"))])],1)]),e("el-form-item",{attrs:{label:"每人发起次数",prop:"count"}},[e("el-input",{staticClass:"ls-input",attrs:{placeholder:"请输入金额",disabled:2==t.status},model:{value:t.form.count,callback:function(e){t.$set(t.form,"count",e)},expression:"form.count"}},[e("template",{slot:"append"},[t._v("次")])],2),e("div",{staticClass:"muted xs"},[t._v("活动期间内，同一个活动商品允许用户发起的砍价次数")])],1),e("el-form-item",{attrs:{label:"每单限制",prop:"",required:""}},[e("div",[e("el-radio",{attrs:{label:0,disabled:2==t.status},model:{value:t.isOrderLimit,callback:function(e){t.isOrderLimit=e},expression:"isOrderLimit"}},[t._v("不限制")])],1),e("div",{staticClass:"flex"},[e("el-radio",{attrs:{label:1,disabled:2==t.status},model:{value:t.isOrderLimit,callback:function(e){t.isOrderLimit=e},expression:"isOrderLimit"}},[t._v(" 限制 ")]),e("el-input",{staticClass:"ls-input",attrs:{size:"small",disabled:2==t.status},model:{value:t.form.order_limit,callback:function(e){t.$set(t.form,"order_limit",t._n(e))},expression:"form.order_limit"}},[e("template",{slot:"append"},[t._v("件")])],2)],1),e("div",{staticClass:"muted xs"},[t._v("砍价成功后，每件商品单笔订单最多购买的件数")])])],1)])]),e("div",{staticClass:"bg-white ls-fixed-footer"},[e("div",{staticClass:"row-center flex",staticStyle:{height:"100%"}},[e("el-button",{attrs:{size:"small"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("取消")]),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.onSubmit()}}},[t._v("保存")])],1)])],1)},s=[],r=i("9ab4"),l=i("1b40"),o=i("4201"),n=i("fac6"),c=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"ls-dialog__trigger",on:{click:t.onTrigger}},[t._t("trigger")],2),e("el-dialog",{attrs:{"coustom-class":"ls-dialog__content",title:t.title,visible:t.visible,width:t.width,top:t.top,"modal-append-to-body":!1,center:"","before-close":t.close,"close-on-click-modal":!1,"append-to-body":!0}},[e("div",{},[e("el-form",{staticClass:"ls-form",attrs:{inline:"",model:t.form,"label-width":"70px",size:"small"}},[e("el-form-item",{attrs:{label:"商品信息"}},[e("el-input",{attrs:{placeholder:"请输入商品名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.getList}},[t._v("查询")]),e("el-button",{attrs:{size:"small"},on:{click:t.onReset}},[t._v("重置")])],1),e("div",{staticClass:"list-table m-t-16"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.pager.loading,expression:"pager.loading"}],staticStyle:{width:"100%"},attrs:{height:"420",data:t.pager.lists,size:"mini","header-cell-style":{background:"#f5f8ff"},"highlight-current-row":""},on:{"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{type:"selection",width:"55"}}),e("el-table-column",{attrs:{prop:"",label:"商品信息","min-width":"",width:""},scopedSlots:t._u([{key:"default",fn:function(i){return[e("div",{staticClass:"flex"},[e("el-image",{staticStyle:{width:"34px",height:"34px"},attrs:{src:i.row.image}}),e("div",{staticClass:"m-l-10"},[t._v(t._s(i.row.name))])],1)]}}])}),e("el-table-column",{attrs:{prop:"total_stock",label:"总库存","min-width":"",width:""}})],1)],1),e("div",{staticClass:"flex row-right m-t-16 row-right"},[e("ls-pagination",{on:{change:function(e){return t.getList()}},model:{value:t.pager,callback:function(e){t.pager=e},expression:"pager"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{size:"small"},on:{click:t.close}},[t._v("取消")]),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.onSubmit}},[t._v("确认")])],1)])],1)},d=[],m=i("6ddb"),u=i("3c50");let p=class extends l["e"]{constructor(){super(...arguments),this.visible=!1,this.isNameSN="",this.form={name:"",category_id:""},this.pager=new m["a"],this.multipleSelection=[]}onTrigger(){this.getList(),this.visible=!0}close(){this.visible=!1,this.form.name="",this.form.category_id=""}handleSelectionChange(t){console.log(t),this.multipleSelection=t}onReset(){this.form.name="",this.form.category_id="",this.getList()}onSubmit(){if(!this.multipleSelection.length)return this.$message.error("请选择商品");const t=this.multipleSelection.map(t=>t.id);this.$emit("getGoods",t),this.visible=!1}getList(){this.pager.request({callback:n["f"],params:{...this.form}}).then(t=>{console.log(t)})}};Object(r["a"])([Object(l["c"])({default:""})],p.prototype,"title",void 0),Object(r["a"])([Object(l["c"])({default:"880px"})],p.prototype,"width",void 0),Object(r["a"])([Object(l["c"])({default:"10vh"})],p.prototype,"top",void 0),p=Object(r["a"])([Object(l["a"])({components:{LsPagination:u["a"]}})],p);var f=p,h=f,b=i("2877"),g=Object(b["a"])(h,c,d,!1,null,"562dad46",null),v=g.exports,_=i("5f8a"),y=i("f50c");let k=class extends l["e"]{constructor(){super(...arguments),this.mode=o["f"]["ADD"],this.identity=null,this.status=null,this.form={name:"",start_time:"",end_time:"",remark:"",is_distribution:0,buy_condition:1,valid_period:0,help_num:0,knife_amount_type:1,self:1,count:0,buy_limit:0,order_limit:0,use_coupon:0,goods:[]},this.tableData=["",""],this.goods_ids=[],this.isBuyLimit=0,this.isOrderLimit=0,this.selectGoods=[],this.formRules={name:[{required:!0,message:"请输入活动名称",trigger:"blur"}],is_distribution:[{required:!0,message:"请选择是否参与分销",trigger:"change"}],buy_condition:[{required:!0,message:"请选择购买方式",trigger:"change"}],valid_period:[{required:!0,message:"请输入砍价有效期",trigger:"blur"}],help_num:[{required:!0,message:"请输入帮砍人数",trigger:"blur"}],count:[{required:!0,message:"请输入每人发起次数",trigger:"blur"}]}}isBuyLimitChange(t){0==t&&this.$set(this.form,"buy_limit",0)}isOrderLimitChange(t){0==t&&this.$set(this.form,"order_limit",0)}buyLimitChange(t){this.isBuyLimit=0==t?0:1}orderLimitChange(t){this.isOrderLimit=0==t?0:1}selectGoodsChange(t){this.form.goods=t.map(t=>({goods_id:t.id,items:t.item.map(t=>({item_id:t.id,first_knife:t.first_knife,floor_price:t.floor_price}))}))}checkGoods(){let t=this.form.goods;if(!t.length)return this.$message.error("请选择砍价商品"),!1;for(let e=0;e<t.length;e++)for(let i=0;i<t[e].items.length;i++){if(!t[e].items[i].first_knife)return this.$message.error("请输入砍价商品首刀金额"),!1;if(!t[e].items[i].floor_price)return this.$message.error("请输入砍价商品底价金额"),!1}return!0}onSubmit(){this.$refs.formRef.validate(t=>{if(t)switch(this.mode){case o["f"]["ADD"]:return this.handleAdd();case o["f"]["EDIT"]:return this.handleEdit()}})}handleAdd(){this.checkGoods(),Object(n["a"])(this.form).then(()=>{setTimeout(()=>this.$router.go(-1),500)}).catch(()=>{})}handleEdit(){this.checkGoods(),Object(n["e"])({...this.form,id:this.identity}).then(()=>{setTimeout(()=>this.$router.go(-1),500)})}initBargainActivityDetail(){Object(n["d"])({id:this.identity}).then(t=>{this.form=t,this.selectGoods=t.goods}).catch(t=>{console.log(t)})}created(){const t=this.$route.query;t.mode&&(this.mode=t.mode),this.mode===o["f"]["EDIT"]&&(this.identity=1*t.id,this.status=1*t.status,this.initBargainActivityDetail())}};Object(r["a"])([Object(l["f"])("isBuyLimit",{immediate:!0})],k.prototype,"isBuyLimitChange",null),Object(r["a"])([Object(l["f"])("isOrderLimit",{immediate:!0})],k.prototype,"isOrderLimitChange",null),Object(r["a"])([Object(l["f"])("form.buy_limit",{immediate:!0})],k.prototype,"buyLimitChange",null),Object(r["a"])([Object(l["f"])("form.order_limit",{immediate:!0})],k.prototype,"orderLimitChange",null),Object(r["a"])([Object(l["f"])("selectGoods",{deep:!0})],k.prototype,"selectGoodsChange",null),k=Object(r["a"])([Object(l["a"])({components:{LsGoodsSelect:v,DatePicker:_["a"],GoodsSelect:y["a"]}})],k);var C=k,O=C,x=(i("bd7d"),Object(b["a"])(O,a,s,!1,null,"ae5b026c",null));e["default"]=x.exports},ba09:function(t,e,i){},bd7d:function(t,e,i){"use strict";i("ba09")},fac6:function(t,e,i){"use strict";i.d(e,"g",(function(){return s})),i.d(e,"c",(function(){return r})),i.d(e,"i",(function(){return l})),i.d(e,"b",(function(){return o})),i.d(e,"e",(function(){return n})),i.d(e,"d",(function(){return c})),i.d(e,"a",(function(){return d})),i.d(e,"f",(function(){return m})),i.d(e,"h",(function(){return u})),i.d(e,"j",(function(){return p}));var a=i("f175");const s=t=>a["a"].get("/bargain.bargain_activity/lists",{params:t}),r=t=>a["a"].post("/bargain.bargain_activity/delete",t),l=t=>a["a"].post("/bargain.bargain_activity/stop",t),o=t=>a["a"].post("/bargain.bargain_activity/confirm",t),n=t=>a["a"].post("/bargain.bargain_activity/edit",t),c=t=>a["a"].get("/bargain.bargain_activity/detail",{params:t}),d=t=>a["a"].post("/bargain.bargain_activity/add",t),m=t=>a["a"].get("/bargain.bargain_activity/goodsLists",{params:t}),u=t=>a["a"].get("/bargain.bargain_activity/activityRecord",{params:t}),p=t=>a["a"].post("/bargain.bargain_activity/stopInitiate",t)}}]);
//# sourceMappingURL=chunk-16609170.ac682046.js.map