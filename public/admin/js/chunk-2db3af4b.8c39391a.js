(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2db3af4b"],{"192f":function(t,e,i){t.exports=i.p+"img/img_shili_mine_touxiang.7d7916d3.png"},"239d":function(t,e,i){},3138:function(t,e,i){"use strict";i("32fd")},"32fd":function(t,e,i){},"5be2":function(t,e,i){"use strict";i.d(e,"c",(function(){return a})),i.d(e,"d",(function(){return l})),i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return n})),i.d(e,"e",(function(){return o})),i.d(e,"f",(function(){return c}));var s=i("f175");const a=()=>s["a"].get("/settings.user.user/getConfig"),l=t=>s["a"].post("/settings.user.user/setConfig",t),r=()=>s["a"].get("/settings.user.user/getRegisterConfig"),n=t=>s["a"].post("/settings.user.user/setRegisterConfig",t),o=()=>s["a"].get("/settings.user.user/getWithdrawConfig"),c=t=>s["a"].post("/settings.user.user/setWithdrawConfig",t)},b3ad:function(t,e,i){"use strict";var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ls-dialog",{ref:"materialDialog",staticClass:"material-select",attrs:{title:"选择"+t.tipsText,width:"1050px",top:"15vh"},on:{confirm:t.handleConfirm}},[t.hiddenTrigger?t._e():e("div",{staticClass:"material-select__trigger clearfix",attrs:{slot:"trigger"},on:{click:function(t){t.stopPropagation()}},slot:"trigger"},[e("draggable",{staticClass:"ls-draggable",attrs:{animation:"300",disabled:t.disabled||t.dragDisabled},on:{update:t.handleChange},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}},t._l(t.fileList,(function(i,s){return e("div",{key:i+s,staticClass:"material-preview ls-del-wrap",class:{"is-disabled":t.disabled,"is-one":1==t.limit},on:{click:function(e){return t.showDialog(!1,s)}}},[t.$scopedSlots.preview?e("div",[t._t("preview",null,{item:t.imageUri(i)})],2):e("file-item",{attrs:{type:t.type,item:{uri:t.imageUri(i)},size:t.size}}),t.enableDelete?e("i",{staticClass:"el-icon-close ls-icon-del",on:{click:function(e){return e.stopPropagation(),t.delImage(s)}}}):t._e()],1)})),0),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showUpload,expression:"showUpload"}],staticClass:"material-upload",class:{"is-disabled":t.disabled,"is-one":1==t.limit},on:{click:function(e){return t.showDialog(!0)}}},[t.$slots.upload?e("div",[t._t("upload")],2):e("div",{staticClass:"upload-btn flex row-center",style:{width:t.size+"px",height:t.size+"px",background:t.uploadBg}},[t._t("default"),t.$slots.default?t._e():e("span",[t._v("添加"+t._s(t.tipsText))])],2)])],1),e("div",{staticClass:"material-wrap"},[e("ls-material",{ref:"material",attrs:{"page-size":15,type:t.type,limit:t.meterialLimit},on:{change:t.selectChange}})],1)])},a=[],l=i("9ab4"),r=i("1b40"),n=i("0a6d"),o=i("c6fe"),c=i("e915"),d=i("b76a"),u=i.n(d);let f=class extends r["e"]{constructor(){super(...arguments),this.isAdd=!0,this.fileList=[]}get showUpload(){const{fileList:t,limit:e}=this;return e-t.length>0}get meterialLimit(){return this.isAdd?this.limit?this.limit-this.fileList.length:null:1}get tipsText(){switch(this.type){case"image":return"图片";case"video":return"视频"}}get imageUri(){return t=>this.enableDomain?t:this.$getImageUri(t)}valueChange(t){this.fileList=Array.isArray(t)?t:""==t?[]:[t]}showDialog(t=!0,e){var i;this.disabled||(this.isAdd=t,void 0!==e&&(this.currentIndex=e),null===(i=this.$refs.materialDialog)||void 0===i||i.onTrigger())}selectChange(t){this.select=t}handleConfirm(){this.$refs.material.clearSelectList();const t=this.select.map(t=>this.enableDomain?t.uri:t.url);this.isAdd?this.fileList=this.fileList.concat(t):this.fileList.splice(this.currentIndex,1,t.shift()),this.handleChange()}delImage(t){this.fileList.splice(t,1),this.handleChange()}handleChange(){const t=1!=this.limit?this.fileList:this.fileList[0]||"";this.$emit("input",t),this.$emit("change",t),this.fileList=[]}};Object(l["a"])([Object(r["c"])({default:()=>[]})],f.prototype,"value",void 0),Object(l["a"])([Object(r["c"])({default:1})],f.prototype,"limit",void 0),Object(l["a"])([Object(r["c"])({default:"100"})],f.prototype,"size",void 0),Object(l["a"])([Object(r["c"])({default:!1})],f.prototype,"disabled",void 0),Object(l["a"])([Object(r["c"])({default:!1})],f.prototype,"dragDisabled",void 0),Object(l["a"])([Object(r["c"])({default:!1})],f.prototype,"hiddenTrigger",void 0),Object(l["a"])([Object(r["c"])({default:"image"})],f.prototype,"type",void 0),Object(l["a"])([Object(r["c"])({default:"transparent"})],f.prototype,"uploadBg",void 0),Object(l["a"])([Object(r["c"])({default:!0})],f.prototype,"enableDomain",void 0),Object(l["a"])([Object(r["c"])({default:!0})],f.prototype,"enableDelete",void 0),Object(l["a"])([Object(r["f"])("value",{immediate:!0})],f.prototype,"valueChange",null),f=Object(l["a"])([Object(r["a"])({components:{LsDialog:n["a"],LsMaterial:o["a"],Draggable:u.a,FileItem:c["a"]}})],f);var p=f,m=p,v=(i("fb48"),i("2877")),g=Object(v["a"])(m,s,a,!1,null,"1503bff6",null);e["a"]=g.exports},eb49:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"user_setting"},[e("el-form",{ref:"form",attrs:{"label-width":"120px",size:"small"}},[e("div",{staticClass:"ls-card"},[e("div",{staticClass:"card-title"},[t._v("基本设置")]),e("div",{staticClass:"card-content m-t-24"},[e("el-form-item",{attrs:{label:"用户默认头像"}},[e("material-select",{attrs:{limit:1,disabled:!1},model:{value:t.form.default_avatar,callback:function(e){t.$set(t.form,"default_avatar",e)},expression:"form.default_avatar"}}),e("div",{staticClass:"flex"},[e("div",{staticClass:"muted xs m-r-16"},[t._v("建议尺寸：400*400像素，支持jpg，jpeg，png格式")]),e("el-popover",{attrs:{placement:"right",width:"200",trigger:"hover"}},[e("el-image",{attrs:{src:t.images.avater}}),e("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[t._v("查看示例")])],1)],1)],1)],1)]),e("div",{staticClass:"ls-card m-t-16"},[e("div",{staticClass:"card-title"},[t._v("用户关系")]),e("div",{staticClass:"card-content m-t-24"},[e("el-form-item",{attrs:{label:"开启邀请下级",required:""}},[e("div",{staticClass:"flex"},[e("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":t.styleConfig.primary,"inactive-color":"#f4f4f5"},model:{value:t.form.invite_open,callback:function(e){t.$set(t.form,"invite_open",e)},expression:"form.invite_open"}}),e("span",{staticClass:"m-l-16"},[t._v(t._s(t.form.invite_open?"开启":"关闭"))])],1),e("div",{staticClass:"muted xs"},[t._v("系统是否开启邀请下级功能，关闭功能后用户之间不能建立新的上下级关系。")])])],1),e("div",{staticClass:"card-content m-t-24"},[e("el-form-item",{attrs:{label:"邀请下级资格",required:""}},[e("el-radio-group",{staticClass:"m-r-16",model:{value:t.form.invite_ways,callback:function(e){t.$set(t.form,"invite_ways",e)},expression:"form.invite_ways"}},[e("el-radio",{attrs:{label:1}},[t._v("全部用户可以邀")]),e("el-radio",{attrs:{label:2}},[t._v("指定用户")])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:2==t.form.invite_ways,expression:"form.invite_ways == 2"}]},[e("el-checkbox-group",{model:{value:t.form.invite_appoint_user,callback:function(e){t.$set(t.form,"invite_appoint_user",e)},expression:"form.invite_appoint_user"}},[e("el-checkbox",{attrs:{label:"1"}},[t._v("分销会员")]),e("el-checkbox",{attrs:{label:"2"}},[t._v("股东会员")]),e("el-checkbox",{attrs:{label:"3"}},[t._v("代理会员")])],1)],1)],1)],1),e("div",{staticClass:"card-content m-t-24"},[e("el-form-item",{attrs:{label:"成为下级条件",required:""}},[e("el-radio",{attrs:{label:1},model:{value:t.form.invite_condition,callback:function(e){t.$set(t.form,"invite_condition",e)},expression:"form.invite_condition"}},[t._v("首次绑定邀请码")]),e("div",{staticClass:"muted xs"},[t._v("用户登录后首次绑定邀请码建立上下级关系。包括扫码，点击分享链接，输入邀请码等场景。")])],1)],1)])]),e("div",{staticClass:"bg-white ls-fixed-footer"},[e("div",{staticClass:"row-center flex",staticStyle:{height:"100%"}},[e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.setUserSetting()}}},[t._v("保存")])],1)])],1)},a=[],l=i("9ab4"),r=i("1b40"),n=i("b3ad"),o=i("5be2");let c=class extends r["e"]{constructor(){super(...arguments),this.form={default_avatar:"",scene:"",invite_open:0,invite_ways:1,invite_appoint_user:[],invite_condition:1},this.invite_appoint_user=[],this.images={avater:i("192f")}}getUserSetting(){Object(o["c"])().then(t=>{this.form=t,null===this.form.invite_appoint_user&&(this.form.invite_appoint_user=[])}).catch(()=>{this.$message.error("数据请求失败!")})}setUserSetting(){1===this.form.invite_ways&&(this.form.invite_appoint_user=[]),this.form.scene="user",Object(o["d"])(this.form).then(t=>{setTimeout(()=>{this.getUserSetting()},50)}).catch(()=>{})}created(){this.getUserSetting()}};c=Object(l["a"])([Object(r["a"])({components:{MaterialSelect:n["a"]}})],c);var d=c,u=d,f=(i("3138"),i("2877")),p=Object(f["a"])(u,s,a,!1,null,"7a986de2",null);e["default"]=p.exports},fb48:function(t,e,i){"use strict";i("239d")}}]);
//# sourceMappingURL=chunk-2db3af4b.8c39391a.js.map