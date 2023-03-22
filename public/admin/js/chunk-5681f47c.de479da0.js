(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5681f47c"],{1832:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"ls-add-admin"},[e("div",{staticClass:"ls-card"},[e("el-page-header",{attrs:{content:t.identity?"编辑管理员":"添加管理员"},on:{back:function(e){return t.$router.go(-1)}}})],1),e("div",{staticClass:"ls-card m-t-16"},[e("el-form",{ref:"form",attrs:{rules:t.rules,model:t.form,"label-width":"120px",size:"small"}},[e("el-form-item",{attrs:{label:"账号",prop:"account"}},[e("el-input",{staticClass:"ls-input",attrs:{maxlength:"8","show-word-limit":"",placeholder:"请输入账号"},model:{value:t.form.account,callback:function(e){t.$set(t.form,"account",e)},expression:"form.account"}})],1),e("el-form-item",{attrs:{label:"名称",prop:"name"}},[e("el-input",{staticClass:"ls-input",attrs:{maxlength:"8","show-word-limit":"",placeholder:"请输入名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("el-form-item",{attrs:{label:"角色",prop:"role_id"}},[e("el-select",{attrs:{placeholder:"请选择角色"},model:{value:t.form.role_id,callback:function(e){t.$set(t.form,"role_id",e)},expression:"form.role_id"}},t._l(t.roleList,(function(t,i){return e("el-option",{key:i,attrs:{label:t.name,value:t.id}})})),1)],1),e("el-form-item",{attrs:{label:"密码",prop:"password"}},[e("el-input",{staticClass:"ls-input",attrs:{"show-word-limit":"",placeholder:"请输入密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),e("el-form-item",{attrs:{label:"确认密码",prop:"password_confirm"}},[e("el-input",{staticClass:"ls-input",attrs:{"show-word-limit":"",placeholder:"请输入确认密码"},model:{value:t.form.password_confirm,callback:function(e){t.$set(t.form,"password_confirm",e)},expression:"form.password_confirm"}})],1),e("el-form-item",{attrs:{label:"管理员状态"}},[e("el-switch",{attrs:{"active-value":0,"inactive-value":1,"active-color":t.styleConfig.primary,"inactive-color":"#f4f4f5"},on:{change:t=>this.$set(this.form,"disable",t)},model:{value:t.form.disable,callback:function(e){t.$set(t.form,"disable",e)},expression:"form.disable"}})],1),e("el-form-item",{attrs:{label:"支持多处登录"}},[e("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":t.styleConfig.primary,"inactive-color":"#f4f4f5"},on:{change:t=>this.$set(this.form,"multipoint_login",t)},model:{value:t.form.multipoint_login,callback:function(e){t.$set(t.form,"multipoint_login",e)},expression:"form.multipoint_login"}})],1),e("el-form-item",{attrs:{label:"管理员头像"}},[e("material-select",{attrs:{limit:1},model:{value:t.form.avatar,callback:function(e){t.$set(t.form,"avatar",e)},expression:"form.avatar"}})],1)],1)],1),e("div",{staticClass:"bg-white ls-fixed-footer"},[e("div",{staticClass:"row-center flex",staticStyle:{height:"100%"}},[e("el-button",{attrs:{size:"small"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("取消")]),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.onSubmit("form")}}},[t._v("保存")])],1)])])},a=[],r=(i("d9e2"),i("9ab4")),o=i("1b40"),l=i("68eb"),n=i("4201"),c=i("b3ad");let d=class extends o["e"]{constructor(){super(...arguments),this.mode=n["f"]["ADD"],this.identity=null,this.roleList=[],this.form={account:"",name:"",password:"",password_confirm:"",role_id:"",disable:0,multipoint_login:1,avatar:""},this.validatePassword=[{required:!0,message:"请输入密码",trigger:"blur"},{validator:(t,e,i)=>{e?i():i(new Error("请输入密码"))},trigger:"blur"}],this.validatePasswordConfirm=[{required:!0,message:"请再次输入密码",trigger:"blur"},{validator:(t,e,i)=>{this.form.password&&(e||i(new Error("请再次输入密码")),e!==this.form.password&&i(new Error("两次输入密码不一致!"))),i()},trigger:"blur"}],this.rules={account:[{required:!0,message:"请输入账号",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],role_id:[{required:!0,message:"请选择角色",trigger:"change"}],password:[],password_confirm:[]}}onSubmit(t){const e=this.$refs[t];e.validate(t=>{if(t)switch(this.mode){case n["f"]["ADD"]:return this.handleAdminAdd();case n["f"]["EDIT"]:return this.handleAdminEdit()}})}handleAdminAdd(){const t=this.form;Object(l["a"])(t).then(()=>{this.$message.success("添加成功!"),setTimeout(()=>this.$router.go(-1),500)}).catch(()=>{this.$message.error("保存失败!")})}handleAdminEdit(){const t=this.form,e=this.identity;Object(l["d"])({...t,id:e}).then(()=>{this.$message.success("修改成功!"),setTimeout(()=>this.$router.go(-1),500)}).catch(()=>{this.$message.error("保存失败!")})}geRoleList(){Object(l["k"])({page_type:1}).then(t=>{this.roleList=t.lists})}initFormDataForAdminEdit(){Object(l["c"])({id:this.identity}).then(t=>{Object.keys(t).map(e=>{this.$set(this.form,e,t[e])}),console.log(this.form)}).catch(()=>{this.$message.error("数据初始化失败，请刷新重载！")})}created(){const t=this.$route.query;t.mode&&(this.mode=t.mode),this.mode===n["f"]["EDIT"]&&(this.identity=1*t.id,this.initFormDataForAdminEdit()),this.mode===n["f"]["ADD"]&&(this.$set(this.rules,"password",this.validatePassword),this.$set(this.rules,"password_confirm",this.validatePasswordConfirm)),this.geRoleList()}changePasswordInput(t){this.mode===n["f"]["EDIT"]&&(t?this.$set(this.rules,"password_confirm",this.validatePasswordConfirm):this.$set(this.rules,"password_confirm",[]))}};Object(r["a"])([Object(o["f"])("form.password")],d.prototype,"changePasswordInput",null),d=Object(r["a"])([Object(o["a"])({components:{MaterialSelect:c["a"]}})],d);var u=d,m=u,f=(i("964c"),i("2877")),h=Object(f["a"])(m,s,a,!1,null,"ea7396b6",null);e["default"]=h.exports},"239d":function(t,e,i){},"68eb":function(t,e,i){"use strict";i.d(e,"e",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return l})),i.d(e,"d",(function(){return n})),i.d(e,"k",(function(){return c})),i.d(e,"i",(function(){return d})),i.d(e,"g",(function(){return u})),i.d(e,"j",(function(){return m})),i.d(e,"h",(function(){return f})),i.d(e,"f",(function(){return h}));var s=i("f175");const a=t=>s["a"].get("/auth.admin/lists",{params:t}),r=t=>s["a"].get("/auth.admin/detail",{params:t}),o=t=>s["a"].post("/auth.admin/add",t),l=t=>s["a"].post("/auth.admin/delete",t),n=t=>s["a"].post("/auth.admin/edit",t),c=t=>s["a"].get("/auth.role/lists",{params:t}),d=t=>s["a"].get("/auth.role/detail",{params:t}),u=t=>s["a"].post("/auth.role/add",t),m=t=>s["a"].post("/auth.role/edit",t),f=t=>s["a"].post("/auth.role/delete",t),h=()=>s["a"].post("/config/getMenu")},"964c":function(t,e,i){"use strict";i("a824")},a824:function(t,e,i){},b3ad:function(t,e,i){"use strict";var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ls-dialog",{ref:"materialDialog",staticClass:"material-select",attrs:{title:"选择"+t.tipsText,width:"1050px",top:"15vh"},on:{confirm:t.handleConfirm}},[t.hiddenTrigger?t._e():e("div",{staticClass:"material-select__trigger clearfix",attrs:{slot:"trigger"},on:{click:function(t){t.stopPropagation()}},slot:"trigger"},[e("draggable",{staticClass:"ls-draggable",attrs:{animation:"300",disabled:t.disabled||t.dragDisabled},on:{update:t.handleChange},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}},t._l(t.fileList,(function(i,s){return e("div",{key:i+s,staticClass:"material-preview ls-del-wrap",class:{"is-disabled":t.disabled,"is-one":1==t.limit},on:{click:function(e){return t.showDialog(!1,s)}}},[t.$scopedSlots.preview?e("div",[t._t("preview",null,{item:t.imageUri(i)})],2):e("file-item",{attrs:{type:t.type,item:{uri:t.imageUri(i)},size:t.size}}),t.enableDelete?e("i",{staticClass:"el-icon-close ls-icon-del",on:{click:function(e){return e.stopPropagation(),t.delImage(s)}}}):t._e()],1)})),0),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showUpload,expression:"showUpload"}],staticClass:"material-upload",class:{"is-disabled":t.disabled,"is-one":1==t.limit},on:{click:function(e){return t.showDialog(!0)}}},[t.$slots.upload?e("div",[t._t("upload")],2):e("div",{staticClass:"upload-btn flex row-center",style:{width:t.size+"px",height:t.size+"px",background:t.uploadBg}},[t._t("default"),t.$slots.default?t._e():e("span",[t._v("添加"+t._s(t.tipsText))])],2)])],1),e("div",{staticClass:"material-wrap"},[e("ls-material",{ref:"material",attrs:{"page-size":15,type:t.type,limit:t.meterialLimit},on:{change:t.selectChange}})],1)])},a=[],r=i("9ab4"),o=i("1b40"),l=i("0a6d"),n=i("c6fe"),c=i("e915"),d=i("b76a"),u=i.n(d);let m=class extends o["e"]{constructor(){super(...arguments),this.isAdd=!0,this.fileList=[]}get showUpload(){const{fileList:t,limit:e}=this;return e-t.length>0}get meterialLimit(){return this.isAdd?this.limit?this.limit-this.fileList.length:null:1}get tipsText(){switch(this.type){case"image":return"图片";case"video":return"视频"}}get imageUri(){return t=>this.enableDomain?t:this.$getImageUri(t)}valueChange(t){this.fileList=Array.isArray(t)?t:""==t?[]:[t]}showDialog(t=!0,e){var i;this.disabled||(this.isAdd=t,void 0!==e&&(this.currentIndex=e),null===(i=this.$refs.materialDialog)||void 0===i||i.onTrigger())}selectChange(t){this.select=t}handleConfirm(){this.$refs.material.clearSelectList();const t=this.select.map(t=>this.enableDomain?t.uri:t.url);this.isAdd?this.fileList=this.fileList.concat(t):this.fileList.splice(this.currentIndex,1,t.shift()),this.handleChange()}delImage(t){this.fileList.splice(t,1),this.handleChange()}handleChange(){const t=1!=this.limit?this.fileList:this.fileList[0]||"";this.$emit("input",t),this.$emit("change",t),this.fileList=[]}};Object(r["a"])([Object(o["c"])({default:()=>[]})],m.prototype,"value",void 0),Object(r["a"])([Object(o["c"])({default:1})],m.prototype,"limit",void 0),Object(r["a"])([Object(o["c"])({default:"100"})],m.prototype,"size",void 0),Object(r["a"])([Object(o["c"])({default:!1})],m.prototype,"disabled",void 0),Object(r["a"])([Object(o["c"])({default:!1})],m.prototype,"dragDisabled",void 0),Object(r["a"])([Object(o["c"])({default:!1})],m.prototype,"hiddenTrigger",void 0),Object(r["a"])([Object(o["c"])({default:"image"})],m.prototype,"type",void 0),Object(r["a"])([Object(o["c"])({default:"transparent"})],m.prototype,"uploadBg",void 0),Object(r["a"])([Object(o["c"])({default:!0})],m.prototype,"enableDomain",void 0),Object(r["a"])([Object(o["c"])({default:!0})],m.prototype,"enableDelete",void 0),Object(r["a"])([Object(o["f"])("value",{immediate:!0})],m.prototype,"valueChange",null),m=Object(r["a"])([Object(o["a"])({components:{LsDialog:l["a"],LsMaterial:n["a"],Draggable:u.a,FileItem:c["a"]}})],m);var f=m,h=f,p=(i("fb48"),i("2877")),g=Object(p["a"])(h,s,a,!1,null,"1503bff6",null);e["a"]=g.exports},fb48:function(t,e,i){"use strict";i("239d")}}]);
//# sourceMappingURL=chunk-5681f47c.de479da0.js.map