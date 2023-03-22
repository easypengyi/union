(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-190f8506"],{"20da":function(t,e,i){},"239d":function(t,e,i){},3941:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"h5_store"},[e("el-form",{ref:"formRef",attrs:{rules:t.formRules,model:t.form,"label-width":"140px",size:"small"}},[e("div",{staticClass:"ls-card"},[e("div",{staticClass:"card-title"},[t._v("基础设置")]),e("div",{staticClass:"card-content m-t-24"},[e("el-form-item",{attrs:{label:"渠道状态",prop:"status"}},[e("div",{staticClass:"flex"},[e("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":t.styleConfig.primary,"inactive-color":"#f4f4f5"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}}),e("span",{staticClass:"m-l-16"},[t._v(t._s(t.form.status?"开启":"关闭"))])],1)]),e("el-form-item",{attrs:{label:"渠道访问链接"}},[e("el-input",{staticClass:"ls-input m-r-10",attrs:{size:"small",disabled:""},model:{value:t.form.visit_url,callback:function(e){t.$set(t.form,"visit_url",e)},expression:"form.visit_url"}}),e("el-button",{attrs:{size:"small"},on:{click:function(e){return t.onCopy(t.form.visit_url)}}},[t._v("复制")])],1)],1)]),e("div",{staticClass:"ls-card m-t-16"},[e("div",{staticClass:"card-title"},[t._v("推广设置")]),e("div",{staticClass:"card-content m-t-24"},[e("el-form-item",{attrs:{label:"网站标题",prop:"title"}},[e("el-input",{staticClass:"ls-input m-r-10",attrs:{size:"small",placeholder:"请输入网站标题"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),e("div",{staticClass:"muted xs m-r-16"},[t._v(" 网站标题默认为商城名称 ")])],1),e("el-form-item",{attrs:{label:"网站图标",prop:"ico"}},[e("material-select",{attrs:{limit:1},model:{value:t.form.ico,callback:function(e){t.$set(t.form,"ico",e)},expression:"form.ico"}}),e("div",{staticClass:"muted xs m-r-16"},[t._v(" 建议尺寸：100 x 100 ")])],1),e("el-form-item",{attrs:{label:"网站描述",prop:"description"}},[e("el-input",{staticClass:"ls-input m-r-10",attrs:{size:"small",placeholder:"请输入网站描述"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),e("el-form-item",{attrs:{label:"网站关键词",prop:"keywords"}},[e("el-input",{staticClass:"ls-input m-r-10",attrs:{size:"small",placeholder:"请输入网站关键词"},model:{value:t.form.keywords,callback:function(e){t.$set(t.form,"keywords",e)},expression:"form.keywords"}})],1),e("el-form-item",{attrs:{label:"工具代码",prop:"tools_code"}},[e("el-input",{staticClass:"ls-input m-r-10",attrs:{size:"small",type:"textarea",autosize:{minRows:3,maxRows:6},"show-word-limit":"",placeholder:"请输入百度统计、CNZZ统计等代码"},model:{value:t.form.tools_code,callback:function(e){t.$set(t.form,"tools_code",e)},expression:"form.tools_code"}}),e("div",{staticClass:"muted xs m-r-16"},[t._v(" 支持百度统计、CNZZ统计等，需请前往相应统计后台获取代码 ")])],1)],1)])]),e("div",{staticClass:"bg-white ls-fixed-footer"},[e("div",{staticClass:"row-center flex",staticStyle:{height:"100%"}},[e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.putPCSettingsSet()}}},[t._v("保存")])],1)])],1)},a=[],l=i("9ab4"),r=i("1b40"),o=i("b3ad"),c=i("f175");const n=()=>c["a"].get("/settings.pc.pc_setting/getConfig"),d=t=>c["a"].post("/settings.pc.pc_setting/setConfig",t);var m=i("6ddb");let u=class extends r["e"]{constructor(){super(...arguments),this.form={status:0,redirect_type:0,redirect_content:"",title:"",ico:"",description:"",keywords:"",tools_code:"",visit_url:""},this.jumpDesc="",this.jumpLink="",this.formRules={status:[{required:!0,message:"请设置渠道状态",trigger:"blur"}],redirect_type:[{required:!0,message:"请设置渠道关闭后访问方式",trigger:"blur"}]}}getJumpDesc(t){this.form.redirect_content=t}getJumpLink(t){this.form.redirect_content=t}getPCSettings(){n().then(t=>{this.form=t}).catch(()=>{console.log("数据请求失败!")})}putPCSettingsSet(){this.$refs.formRef.validate(t=>{if(!t)return this.$message.error("请完善设置");d(this.form).then(t=>{this.getPCSettings()}).catch(()=>{console.log("数据请求失败!")})})}onCopy(t){Object(m["b"])(t).then(()=>{this.$message.success("复制成功")}).catch(t=>{this.$message.error("复制失败"),console.log(t)})}created(){this.getPCSettings()}};Object(l["a"])([Object(r["f"])("jumpDesc",{immediate:!0})],u.prototype,"getJumpDesc",null),Object(l["a"])([Object(r["f"])("jumpLink",{immediate:!0})],u.prototype,"getJumpLink",null),u=Object(l["a"])([Object(r["a"])({components:{MaterialSelect:o["a"]}})],u);var p=u,f=p,h=(i("e9e0"),i("2877")),g=Object(h["a"])(f,s,a,!1,null,"776ee507",null);e["default"]=g.exports},b3ad:function(t,e,i){"use strict";var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ls-dialog",{ref:"materialDialog",staticClass:"material-select",attrs:{title:"选择"+t.tipsText,width:"1050px",top:"15vh"},on:{confirm:t.handleConfirm}},[t.hiddenTrigger?t._e():e("div",{staticClass:"material-select__trigger clearfix",attrs:{slot:"trigger"},on:{click:function(t){t.stopPropagation()}},slot:"trigger"},[e("draggable",{staticClass:"ls-draggable",attrs:{animation:"300",disabled:t.disabled||t.dragDisabled},on:{update:t.handleChange},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}},t._l(t.fileList,(function(i,s){return e("div",{key:i+s,staticClass:"material-preview ls-del-wrap",class:{"is-disabled":t.disabled,"is-one":1==t.limit},on:{click:function(e){return t.showDialog(!1,s)}}},[t.$scopedSlots.preview?e("div",[t._t("preview",null,{item:t.imageUri(i)})],2):e("file-item",{attrs:{type:t.type,item:{uri:t.imageUri(i)},size:t.size}}),t.enableDelete?e("i",{staticClass:"el-icon-close ls-icon-del",on:{click:function(e){return e.stopPropagation(),t.delImage(s)}}}):t._e()],1)})),0),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showUpload,expression:"showUpload"}],staticClass:"material-upload",class:{"is-disabled":t.disabled,"is-one":1==t.limit},on:{click:function(e){return t.showDialog(!0)}}},[t.$slots.upload?e("div",[t._t("upload")],2):e("div",{staticClass:"upload-btn flex row-center",style:{width:t.size+"px",height:t.size+"px",background:t.uploadBg}},[t._t("default"),t.$slots.default?t._e():e("span",[t._v("添加"+t._s(t.tipsText))])],2)])],1),e("div",{staticClass:"material-wrap"},[e("ls-material",{ref:"material",attrs:{"page-size":15,type:t.type,limit:t.meterialLimit},on:{change:t.selectChange}})],1)])},a=[],l=i("9ab4"),r=i("1b40"),o=i("0a6d"),c=i("c6fe"),n=i("e915"),d=i("b76a"),m=i.n(d);let u=class extends r["e"]{constructor(){super(...arguments),this.isAdd=!0,this.fileList=[]}get showUpload(){const{fileList:t,limit:e}=this;return e-t.length>0}get meterialLimit(){return this.isAdd?this.limit?this.limit-this.fileList.length:null:1}get tipsText(){switch(this.type){case"image":return"图片";case"video":return"视频"}}get imageUri(){return t=>this.enableDomain?t:this.$getImageUri(t)}valueChange(t){this.fileList=Array.isArray(t)?t:""==t?[]:[t]}showDialog(t=!0,e){var i;this.disabled||(this.isAdd=t,void 0!==e&&(this.currentIndex=e),null===(i=this.$refs.materialDialog)||void 0===i||i.onTrigger())}selectChange(t){this.select=t}handleConfirm(){this.$refs.material.clearSelectList();const t=this.select.map(t=>this.enableDomain?t.uri:t.url);this.isAdd?this.fileList=this.fileList.concat(t):this.fileList.splice(this.currentIndex,1,t.shift()),this.handleChange()}delImage(t){this.fileList.splice(t,1),this.handleChange()}handleChange(){const t=1!=this.limit?this.fileList:this.fileList[0]||"";this.$emit("input",t),this.$emit("change",t),this.fileList=[]}};Object(l["a"])([Object(r["c"])({default:()=>[]})],u.prototype,"value",void 0),Object(l["a"])([Object(r["c"])({default:1})],u.prototype,"limit",void 0),Object(l["a"])([Object(r["c"])({default:"100"})],u.prototype,"size",void 0),Object(l["a"])([Object(r["c"])({default:!1})],u.prototype,"disabled",void 0),Object(l["a"])([Object(r["c"])({default:!1})],u.prototype,"dragDisabled",void 0),Object(l["a"])([Object(r["c"])({default:!1})],u.prototype,"hiddenTrigger",void 0),Object(l["a"])([Object(r["c"])({default:"image"})],u.prototype,"type",void 0),Object(l["a"])([Object(r["c"])({default:"transparent"})],u.prototype,"uploadBg",void 0),Object(l["a"])([Object(r["c"])({default:!0})],u.prototype,"enableDomain",void 0),Object(l["a"])([Object(r["c"])({default:!0})],u.prototype,"enableDelete",void 0),Object(l["a"])([Object(r["f"])("value",{immediate:!0})],u.prototype,"valueChange",null),u=Object(l["a"])([Object(r["a"])({components:{LsDialog:o["a"],LsMaterial:c["a"],Draggable:m.a,FileItem:n["a"]}})],u);var p=u,f=p,h=(i("fb48"),i("2877")),g=Object(h["a"])(f,s,a,!1,null,"1503bff6",null);e["a"]=g.exports},e9e0:function(t,e,i){"use strict";i("20da")},fb48:function(t,e,i){"use strict";i("239d")}}]);
//# sourceMappingURL=chunk-190f8506.e846c74e.js.map