(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b3f07fb"],{1733:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"express-edit flex-col"},[t("div",{staticClass:"ls-card express-edit__header"},[t("el-page-header",{attrs:{content:e.id?"编辑快递公司":"新增快递公司"},on:{back:function(t){return e.$router.go(-1)}}})],1),t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"ls-card express-edit__form m-t-10"},[t("el-form",{ref:"form",staticClass:"ls-form",attrs:{model:e.form,"label-width":"120px",size:"small"}},[t("el-form-item",{attrs:{label:"快递名称",required:"",prop:"name",rules:[{required:!0,message:"请输入快递名称",trigger:["blur","change"]}]}},[t("el-input",{attrs:{placeholder:"请输入快递名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"快递图标"}},[t("material-select",{attrs:{limit:1},model:{value:e.form.icon,callback:function(t){e.$set(e.form,"icon",t)},expression:"form.icon"}}),t("div",{staticClass:"muted"},[e._v("快递图标，建议宽高尺寸200px*200px。")])],1),t("el-form-item",{attrs:{label:"快递编码"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}}),t("div",{staticClass:"muted"},[e._v("快递公司编码。")])],1),t("el-form-item",{attrs:{label:"快递100编码"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.form.code100,callback:function(t){e.$set(e.form,"code100",t)},expression:"form.code100"}}),t("div",{staticClass:"muted"},[e._v("快递公司在快递100平台的编码，用于快递查询跟踪")])],1),t("el-form-item",{attrs:{label:"快递鸟编码"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.form.codebird,callback:function(t){e.$set(e.form,"codebird",t)},expression:"form.codebird"}}),t("div",{staticClass:"muted"},[e._v("快递公司在快递鸟平台的编码，用于快递查询跟踪")])],1),t("el-form-item",{attrs:{label:"排序"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1)],1)],1),t("div",{staticClass:"express-edit__footer bg-white ls-fixed-footer"},[t("div",{staticClass:"btns row-center flex",staticStyle:{height:"100%"}},[t("el-button",{attrs:{size:"small"},on:{click:function(t){return e.$router.go(-1)}}},[e._v("取消")]),t("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.handleSave}},[e._v("保存")])],1)])])},a=[],l=i("9ab4"),r=i("1b40"),o=i("b3ad"),n=i("2b8e");let d=class extends r["e"]{constructor(){super(...arguments),this.form={name:"",icon:"",code:"",code100:"",codebird:"",sort:""},this.loading=!1}handleSave(){this.$refs.form.validate(e=>{if(!e)return!1;{const e=this.id?Object(n["d"])(this.form):Object(n["a"])(this.form);e.then(()=>{this.$router.go(-1)})}})}getExpressDetail(){this.loading=!0,Object(n["c"])({id:this.id}).then(e=>{this.loading=!1,this.form=e})}created(){this.id=this.$route.query.id,this.id&&this.getExpressDetail()}};d=Object(l["a"])([Object(r["a"])({components:{MaterialSelect:o["a"]}})],d);var c=d,u=c,f=(i("6296"),i("2877")),p=Object(f["a"])(u,s,a,!1,null,"43009d8f",null);t["default"]=p.exports},"239d":function(e,t,i){},"2b8e":function(e,t,i){"use strict";i.d(t,"m",(function(){return a})),i.d(t,"n",(function(){return l})),i.d(t,"a",(function(){return r})),i.d(t,"d",(function(){return o})),i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return d})),i.d(t,"e",(function(){return c})),i.d(t,"k",(function(){return u})),i.d(t,"l",(function(){return f})),i.d(t,"f",(function(){return p})),i.d(t,"i",(function(){return m})),i.d(t,"j",(function(){return g})),i.d(t,"h",(function(){return h})),i.d(t,"g",(function(){return b}));var s=i("f175");const a=()=>s["a"].get("settings.delivery.delivery_way/getConfig"),l=e=>s["a"].post("settings.delivery.delivery_way/setConfig",e),r=e=>s["a"].post("/settings.delivery.express/add",e),o=e=>s["a"].post("/settings.delivery.express/edit",e),n=e=>s["a"].post("/settings.delivery.express/del",e),d=e=>s["a"].get("/settings.delivery.express/detail",{params:e}),c=e=>s["a"].get("/settings.delivery.express/lists",{params:e}),u=()=>s["a"].get("settings.delivery.logistics_config/getLogisticsConfig"),f=e=>s["a"].post("settings.delivery.logistics_config/setLogisticsConfig",e),p=e=>s["a"].post("settings.delivery.freight/add",e),m=e=>s["a"].post("settings.delivery.freight/edit",e),g=e=>s["a"].get("settings.delivery.freight/lists",{params:e}),h=e=>s["a"].get("settings.delivery.freight/detail",{params:e}),b=e=>s["a"].post("settings.delivery.freight/del",e)},"357b":function(e,t,i){},6296:function(e,t,i){"use strict";i("357b")},b3ad:function(e,t,i){"use strict";var s=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("ls-dialog",{ref:"materialDialog",staticClass:"material-select",attrs:{title:"选择"+e.tipsText,width:"1050px",top:"15vh"},on:{confirm:e.handleConfirm}},[e.hiddenTrigger?e._e():t("div",{staticClass:"material-select__trigger clearfix",attrs:{slot:"trigger"},on:{click:function(e){e.stopPropagation()}},slot:"trigger"},[t("draggable",{staticClass:"ls-draggable",attrs:{animation:"300",disabled:e.disabled||e.dragDisabled},on:{update:e.handleChange},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}},e._l(e.fileList,(function(i,s){return t("div",{key:i+s,staticClass:"material-preview ls-del-wrap",class:{"is-disabled":e.disabled,"is-one":1==e.limit},on:{click:function(t){return e.showDialog(!1,s)}}},[e.$scopedSlots.preview?t("div",[e._t("preview",null,{item:e.imageUri(i)})],2):t("file-item",{attrs:{type:e.type,item:{uri:e.imageUri(i)},size:e.size}}),e.enableDelete?t("i",{staticClass:"el-icon-close ls-icon-del",on:{click:function(t){return t.stopPropagation(),e.delImage(s)}}}):e._e()],1)})),0),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showUpload,expression:"showUpload"}],staticClass:"material-upload",class:{"is-disabled":e.disabled,"is-one":1==e.limit},on:{click:function(t){return e.showDialog(!0)}}},[e.$slots.upload?t("div",[e._t("upload")],2):t("div",{staticClass:"upload-btn flex row-center",style:{width:e.size+"px",height:e.size+"px",background:e.uploadBg}},[e._t("default"),e.$slots.default?e._e():t("span",[e._v("添加"+e._s(e.tipsText))])],2)])],1),t("div",{staticClass:"material-wrap"},[t("ls-material",{ref:"material",attrs:{"page-size":15,type:e.type,limit:e.meterialLimit},on:{change:e.selectChange}})],1)])},a=[],l=i("9ab4"),r=i("1b40"),o=i("0a6d"),n=i("c6fe"),d=i("e915"),c=i("b76a"),u=i.n(c);let f=class extends r["e"]{constructor(){super(...arguments),this.isAdd=!0,this.fileList=[]}get showUpload(){const{fileList:e,limit:t}=this;return t-e.length>0}get meterialLimit(){return this.isAdd?this.limit?this.limit-this.fileList.length:null:1}get tipsText(){switch(this.type){case"image":return"图片";case"video":return"视频"}}get imageUri(){return e=>this.enableDomain?e:this.$getImageUri(e)}valueChange(e){this.fileList=Array.isArray(e)?e:""==e?[]:[e]}showDialog(e=!0,t){var i;this.disabled||(this.isAdd=e,void 0!==t&&(this.currentIndex=t),null===(i=this.$refs.materialDialog)||void 0===i||i.onTrigger())}selectChange(e){this.select=e}handleConfirm(){this.$refs.material.clearSelectList();const e=this.select.map(e=>this.enableDomain?e.uri:e.url);this.isAdd?this.fileList=this.fileList.concat(e):this.fileList.splice(this.currentIndex,1,e.shift()),this.handleChange()}delImage(e){this.fileList.splice(e,1),this.handleChange()}handleChange(){const e=1!=this.limit?this.fileList:this.fileList[0]||"";this.$emit("input",e),this.$emit("change",e),this.fileList=[]}};Object(l["a"])([Object(r["c"])({default:()=>[]})],f.prototype,"value",void 0),Object(l["a"])([Object(r["c"])({default:1})],f.prototype,"limit",void 0),Object(l["a"])([Object(r["c"])({default:"100"})],f.prototype,"size",void 0),Object(l["a"])([Object(r["c"])({default:!1})],f.prototype,"disabled",void 0),Object(l["a"])([Object(r["c"])({default:!1})],f.prototype,"dragDisabled",void 0),Object(l["a"])([Object(r["c"])({default:!1})],f.prototype,"hiddenTrigger",void 0),Object(l["a"])([Object(r["c"])({default:"image"})],f.prototype,"type",void 0),Object(l["a"])([Object(r["c"])({default:"transparent"})],f.prototype,"uploadBg",void 0),Object(l["a"])([Object(r["c"])({default:!0})],f.prototype,"enableDomain",void 0),Object(l["a"])([Object(r["c"])({default:!0})],f.prototype,"enableDelete",void 0),Object(l["a"])([Object(r["f"])("value",{immediate:!0})],f.prototype,"valueChange",null),f=Object(l["a"])([Object(r["a"])({components:{LsDialog:o["a"],LsMaterial:n["a"],Draggable:u.a,FileItem:d["a"]}})],f);var p=f,m=p,g=(i("fb48"),i("2877")),h=Object(g["a"])(m,s,a,!1,null,"1503bff6",null);t["a"]=h.exports},fb48:function(e,t,i){"use strict";i("239d")}}]);
//# sourceMappingURL=chunk-2b3f07fb.fa45eb8f.js.map