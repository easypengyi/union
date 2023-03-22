(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91ff8eb2"],{"2b8e":function(e,t,i){"use strict";i.d(t,"m",(function(){return a})),i.d(t,"n",(function(){return s})),i.d(t,"a",(function(){return l})),i.d(t,"d",(function(){return n})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return c})),i.d(t,"e",(function(){return d})),i.d(t,"k",(function(){return f})),i.d(t,"l",(function(){return u})),i.d(t,"f",(function(){return h})),i.d(t,"i",(function(){return p})),i.d(t,"j",(function(){return g})),i.d(t,"h",(function(){return m})),i.d(t,"g",(function(){return b}));var r=i("f175");const a=()=>r["a"].get("settings.delivery.delivery_way/getConfig"),s=e=>r["a"].post("settings.delivery.delivery_way/setConfig",e),l=e=>r["a"].post("/settings.delivery.express/add",e),n=e=>r["a"].post("/settings.delivery.express/edit",e),o=e=>r["a"].post("/settings.delivery.express/del",e),c=e=>r["a"].get("/settings.delivery.express/detail",{params:e}),d=e=>r["a"].get("/settings.delivery.express/lists",{params:e}),f=()=>r["a"].get("settings.delivery.logistics_config/getLogisticsConfig"),u=e=>r["a"].post("settings.delivery.logistics_config/setLogisticsConfig",e),h=e=>r["a"].post("settings.delivery.freight/add",e),p=e=>r["a"].post("settings.delivery.freight/edit",e),g=e=>r["a"].get("settings.delivery.freight/lists",{params:e}),m=e=>r["a"].get("settings.delivery.freight/detail",{params:e}),b=e=>r["a"].post("settings.delivery.freight/del",e)},3558:function(e,t,i){},"4a5d":function(e,t,i){"use strict";i("e192")},"780f":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"freight-edit flex-col"},[t("div",{staticClass:"ls-card freight-edit__header"},[t("el-page-header",{attrs:{content:e.id?"编辑运费模板":"新增运费模板"},on:{back:function(t){return e.$router.go(-1)}}})],1),t("div",{staticClass:"ls-card freight-edit__form m-t-10"},[t("el-form",{ref:"form",staticClass:"ls-form",attrs:{model:e.form,"label-width":"120px",size:"small"}},[t("el-form-item",{attrs:{label:"模板名称",prop:"name",required:"",rules:[{required:!0,message:"请输入模板名称",trigger:["blur","change"]}]}},[t("el-input",{attrs:{placeholder:"请输入模板名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"计费方式",required:""}},[t("el-radio-group",{model:{value:e.form.charge_way,callback:function(t){e.$set(e.form,"charge_way",t)},expression:"form.charge_way"}},[t("el-radio",{attrs:{label:1}},[e._v("件数计费")]),t("el-radio",{attrs:{label:2}},[e._v("重量计费")]),t("el-radio",{attrs:{label:3}},[e._v("体积计费")])],1),t("div",{staticClass:"muted"},[e._v("保存后计费方式不能更改")])],1),t("el-form-item",{attrs:{label:"配送区域",required:""}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.form.region,size:"mini"}},[t("el-table-column",{attrs:{label:"配送区域",prop:"region_name","min-width":"300"}}),t("el-table-column",{attrs:{"min-width":"150",label:"首"+e.getTableTitle},scopedSlots:e._u([{key:"default",fn:function(i){return[t("el-input",{staticClass:"p-t-8 p-b-8",staticStyle:{width:"90%"},attrs:{type:"number"},model:{value:i.row.first_unit,callback:function(t){e.$set(i.row,"first_unit",t)},expression:"scope.row.first_unit"}})]}}])}),t("el-table-column",{attrs:{"min-width":"150",label:"运费（元）"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("el-input",{staticClass:"p-t-8 p-b-8",staticStyle:{width:"90%"},attrs:{type:"number"},model:{value:i.row.first_money,callback:function(t){e.$set(i.row,"first_money",t)},expression:"scope.row.first_money"}})]}}])}),t("el-table-column",{attrs:{"min-width":"150",label:"续"+e.getTableTitle},scopedSlots:e._u([{key:"default",fn:function(i){return[t("el-input",{staticClass:"p-t-8 p-b-8",staticStyle:{width:"90%"},attrs:{type:"number"},model:{value:i.row.continue_unit,callback:function(t){e.$set(i.row,"continue_unit",t)},expression:"scope.row.continue_unit"}})]}}])}),t("el-table-column",{attrs:{"min-width":"150",label:"续费（元）"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("el-input",{staticClass:"p-t-8 p-b-8",staticStyle:{width:"90%"},attrs:{type:"number"},model:{value:i.row.continue_money,callback:function(t){e.$set(i.row,"continue_money",t)},expression:"scope.row.continue_money"}})]}}])}),t("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(i){return i.$index>0?[t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.handleEdit(i.row.area_id)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.handleDelete(i.row.area_id)}}},[e._v("删除")])]:void 0}}],null,!0)})],1)],1),t("el-form-item",[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.handleShowDelivery}},[e._v("指定配送区域和运费")]),t("span",{staticClass:"muted m-l-10"},[e._v("根据件数来计算运费，当物品不足《首件数量》时，按照《首件费用》计算，超过部分按照《续件件数》和《续件费用》乘积来计算")])],1),t("el-form-item",{attrs:{label:"备注"}},[t("el-input",{staticStyle:{width:"600px"},attrs:{rows:"8",type:"textarea",placeholder:"请输入备注内容"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),t("delivery-area",{ref:"deliveryArea",attrs:{"area-id":e.areaId,"default-region":e.form.region},on:{change:e.areaChange}})],1),t("div",{staticClass:"freight-edit__footer bg-white ls-fixed-footer"},[t("div",{staticClass:"btns row-center flex",staticStyle:{height:"100%"}},[t("el-button",{attrs:{size:"small"},on:{click:function(t){return e.$router.go(-1)}}},[e._v("取消")]),t("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.handleSave}},[e._v("保存")])],1)])])},a=[],s=i("9ab4"),l=i("1b40"),n=i("0463"),o=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"delivery-area"},[t("ls-dialog",{ref:"dialog",attrs:{title:"区域选择",width:"900px",top:"20vh"},on:{confirm:e.onConfirm}},[t("div",{staticClass:"area-content flex col-stretch"},[t("div",{staticClass:"area-content__left flex-1"},[t("div",{staticClass:"flex row-between area-title"},[t("div",{staticClass:"normal nr"},[e._v("地区选择")]),t("el-input",{staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"输入地区关键字"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}})],1),t("area-panel",{ref:"panelAll",attrs:{option:e.areaLists,"filter-text":e.filterText,"area-id":e.areaId},on:{select:e.onSelect}})],1),t("div",{staticClass:"area-content__center flex row-center"},[t("i",{staticClass:"el-icon-arrow-right font-size-30"})]),t("div",{staticClass:"area-content__right flex-1"},[t("div",{staticClass:"flex row-between area-title"},[t("div",{staticClass:"normal nr"},[e._v("已选择")])]),t("div",{staticClass:"select-area-list"},[t("area-panel",{ref:"panelSelect",attrs:{option:e.areaLists,"area-id":e.areaId,type:"select"},on:{cancel:e.onCancel}})],1)])])])],1)},c=[],d=(i("caad"),function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"area-panel"},[t("el-scrollbar",{staticClass:"ls-scrollbar",staticStyle:{height:"450px"}},[t("div",{staticClass:"area-tree"},[t("el-tree",{ref:"tree",attrs:{"node-key":"value",data:e.option,"icon-class":"el-icon-arrow-right","filter-node-method":e.filterMethod},scopedSlots:e._u([{key:"default",fn:function({node:i,data:r}){return t("div",{staticClass:"flex flex-1"},[t("span",{staticClass:"flex-1"},[e._v(e._s(i.label))]),t("div",{staticClass:"flex-none m-r-10"},["select"==e.type?t("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return t.stopPropagation(),e.onCancel(i,r)}}},[e._v(" 取消 ")]):t("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return t.stopPropagation(),e.onSelect(i,r)}}},[e._v(" 选择 ")])],1)])}}])})],1)])],1)}),f=[],u=i("0a6d");let h=class extends l["e"]{constructor(){super(...arguments),this.filterMethod=(e,t)=>"select"==this.type?!(!t.select||t.areaId!=this.areaId):!t.select&&(!this.isSelectAll(t)&&(!e||-1!==t.label.indexOf(e)))}filterTextChange(e){this.$refs.tree.filter(e)}areaIdChange(){this.filter()}onSelect(e,t){this.selectChildren(e,!0),this.filter(),this.$emit("select")}onCancel(e,t){this.selectChildren(e,!1),this.filter(),this.$emit("cancel")}filter(){console.log(this.areaId,this.option,this.type),this.$refs.tree.filter()}selectChildren(e,t){const{data:i,childNodes:r}=e;if(!r.length)return i.areaId&&i.areaId!=this.areaId||(i.select=t),void(i.areaId=i.areaId?t?i.areaId:0:this.areaId);r.forEach(e=>{this.selectChildren(e,t)})}isSelectAll(e){return e.children?e.children.every(e=>this.isSelectAll(e)):e.select}mounted(){this.filter()}};Object(s["a"])([Object(l["c"])({default:()=>{}})],h.prototype,"option",void 0),Object(s["a"])([Object(l["c"])()],h.prototype,"type",void 0),Object(s["a"])([Object(l["c"])()],h.prototype,"filterText",void 0),Object(s["a"])([Object(l["c"])()],h.prototype,"areaId",void 0),Object(s["a"])([Object(l["f"])("filterText")],h.prototype,"filterTextChange",null),Object(s["a"])([Object(l["f"])("areaId")],h.prototype,"areaIdChange",null),h=Object(s["a"])([Object(l["a"])({components:{LsDialog:u["a"]}})],h);var p=h,g=p,m=(i("8e26"),i("2877")),b=Object(m["a"])(g,d,f,!1,null,"45981e74",null),v=b.exports,_=i("6ddb");let y=class extends l["e"]{constructor(){super(...arguments),this.isFirst=!0,this.filterText="",this.areaLists=JSON.parse(JSON.stringify(n["a"])),this.onConfirm=Object(_["h"])(()=>{const e=this.getSelectArea(this.areaLists);this.$emit("change",e)})}defaultRegionChange(e){this.isFirst&&(this.isFirst=!1,e.forEach(e=>{this.setSelectArea(e,this.areaLists)}))}show(){var e;null===(e=this.$refs.dialog)||void 0===e||e.onTrigger()}onSelect(){this.$refs.panelSelect.filter()}onCancel(){this.$refs.panelAll.filter()}getSelectArea(e){let t=[];return e.forEach(e=>{let i=[];e.children&&e.children.forEach(e=>{let r=e.children.filter(e=>e.select&&e.areaId==this.areaId);e.children.length==r.length?i.push(e):t.push(...r)}),i.length==e.children.length?t.push(e):t.push(...i)}),t}clearSelectArea(e){e=e||this.areaLists;for(let t in e)e[t].select&&e[t].areaId==this.areaId&&(console.log(this.areaId),e[t].select=!1,e[t].areaId=0),e[t].children&&this.clearSelectArea(e[t].children)}setSelectArea(e,t){t.forEach(t=>{t.children&&t.children.forEach(i=>{i.children&&i.children.forEach(r=>{(e.region_id.includes(t.value)||e.region_id.includes(i.value)||e.region_id.includes(r.value))&&(r.select=!0,r.areaId=e.area_id)})})})}mounted(){console.log(this.$refs)}};Object(s["a"])([Object(l["c"])()],y.prototype,"areaId",void 0),Object(s["a"])([Object(l["c"])()],y.prototype,"defaultRegion",void 0),Object(s["a"])([Object(l["f"])("defaultRegion")],y.prototype,"defaultRegionChange",null),y=Object(s["a"])([Object(l["a"])({components:{AreaPanel:v,LsDialog:u["a"]}})],y);var x=y,w=x,C=(i("9473"),Object(m["a"])(w,o,c,!1,null,"0e9b4898",null)),S=C.exports,j=i("2b8e");let O=class extends l["e"]{constructor(){super(...arguments),this.areaLists=n["a"],this.form={name:"",charge_way:1,remark:"",region:[{area_id:"",region_id:"100000",region_name:"全国统一运费",first_unit:"",first_money:"",continue_unit:"",continue_money:""}]},this.areaId=""}get getTableTitle(){const{charge_way:e}=this.form;switch(e){case 1:return"件（件）";case 2:return"重（Kg）";case 3:return"体积（m³）"}}get checkRegion(){const e=this.form.region.every(e=>e.region_id&&""!==e.first_unit&&""!==e.first_unit&&""!==e.first_unit&&""!==e.first_unit);return e||this.$message.error("填写完整运费模板"),e}handleShowDelivery(){this.areaId=Object(_["f"])(),this.$refs.deliveryArea.show()}handleEdit(e){this.areaId=e,this.$refs.deliveryArea.show()}handleDelete(e){this.areaId=e;let t=this.form.region.findIndex(t=>t.area_id==e);-1!=t&&this.form.region.splice(t,1),this.$nextTick(()=>{this.$refs.deliveryArea.clearSelectArea()})}areaChange(e){let t=this.form.region.findIndex(e=>e.area_id==this.areaId);const i=e.map(e=>e.value).join(),r=e.map(e=>e.label).join("、");if(-1!=t)return this.form.region[t].region_id=i,void(this.form.region[t].region_name=r);this.form.region.push({area_id:this.areaId,region_id:i,region_name:r,first_unit:"",first_money:"",continue_unit:"",continue_money:""})}handleSave(){this.$refs.form.validate(e=>{if(!e||!this.checkRegion)return!1;{const e=this.id?Object(j["i"])(this.form):Object(j["f"])(this.form);e.then(()=>{this.$router.go(-1)})}})}getFreightDetail(){Object(j["h"])({id:this.id}).then(e=>{e.region.forEach(e=>{e.area_id=Object(_["f"])()}),this.form=e,console.log(this.form)})}created(){this.id=this.$route.query.id,this.id&&this.getFreightDetail()}};O=Object(s["a"])([Object(l["a"])({components:{DeliveryArea:S,LsDialog:u["a"]}})],O);var k=O,I=k,$=(i("4a5d"),Object(m["a"])(I,r,a,!1,null,"6175cbf4",null));t["default"]=$.exports},"8e26":function(e,t,i){"use strict";i("a680")},9473:function(e,t,i){"use strict";i("3558")},a680:function(e,t,i){},e192:function(e,t,i){}}]);
//# sourceMappingURL=chunk-91ff8eb2.d8637e80.js.map