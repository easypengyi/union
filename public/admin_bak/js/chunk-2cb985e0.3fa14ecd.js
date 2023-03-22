(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cb985e0"],{"0501":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"storage-setting"},[r("div",{staticClass:"ls-card"},[r("el-page-header",{attrs:{content:"存储设置"},on:{back:function(t){return e.$router.go(-1)}}})],1),"local"!==e.engine?r("div",{staticClass:"ls-card m-t-16"},["qiniu"==e.engine?r("el-alert",{attrs:{title:"温馨提示：切换七牛云存储后，素材库需要重新上传至七牛云。",type:"info",closable:!1,"show-icon":""}}):e._e(),"aliyun"==e.engine?r("el-alert",{attrs:{title:"温馨提示：切换阿里云OSS后，素材库需要重新上传至阿里云OSS。",type:"info",closable:!1,"show-icon":""}}):e._e(),"qcloud"==e.engine?r("el-alert",{attrs:{title:"温馨提示：切换腾讯云OSS后，素材库需要重新上传至腾讯云OSS。",type:"info",closable:!1,"show-icon":""}}):e._e()],1):e._e(),r("el-form",{ref:"formRef",attrs:{model:e.form,rules:e.formRules,"label-width":"240px",size:"small"}},[r("div",{staticClass:"ls-card m-t-16"},[r("div",{staticClass:"card-content m-t-24"},[r("el-form-item",{attrs:{label:"存储方式"}},["local"==e.engine?r("div",[e._v("本地存储")]):e._e(),"qiniu"==e.engine?r("div",[e._v("七牛云存储")]):e._e(),"aliyun"==e.engine?r("div",[e._v("阿里云OSS")]):e._e(),"qcloud"==e.engine?r("div",[e._v("腾讯云OSS")]):e._e(),"local"==e.engine?r("div",{staticClass:"muted xs m-r-16"},[e._v(" 本地存储方式不需要配置其他参数 ")]):e._e()])],1),"local"!==e.engine?r("div",[r("el-form-item",{attrs:{label:" 存储空间名称(Bucket)",prop:"bucket"}},[r("el-input",{attrs:{placeholder:"请输入存储空间名称(Bucket)"},model:{value:e.form.bucket,callback:function(t){e.$set(e.form,"bucket",t)},expression:"form.bucket"}})],1),r("el-form-item",{attrs:{label:"ACCESS_KEY（AK）",prop:"access_key"}},[r("el-input",{attrs:{placeholder:"请输入ACCESS_KEY"},model:{value:e.form.access_key,callback:function(t){e.$set(e.form,"access_key",t)},expression:"form.access_key"}})],1),r("el-form-item",{attrs:{label:"SECRET_KEY（SK）",prop:"secret_key"}},[r("el-input",{attrs:{placeholder:"请输入SECRET_KEY"},model:{value:e.form.secret_key,callback:function(t){e.$set(e.form,"secret_key",t)},expression:"form.secret_key"}})],1),r("el-form-item",{attrs:{label:"空间域名（Domain）",prop:"domain"}},[r("el-input",{attrs:{placeholder:"请输入空间域名"},model:{value:e.form.domain,callback:function(t){e.$set(e.form,"domain",t)},expression:"form.domain"}}),r("div",{staticClass:"muted xs m-r-16"},[e._v(" 请补全http://或https://，例如https://static.cloud.com ")])],1),"qcloud"==e.engine?r("el-form-item",{attrs:{label:"REGION",prop:"region"}},[r("el-input",{attrs:{placeholder:"请输入region"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}})],1):e._e()],1):e._e(),r("el-form-item",{attrs:{label:"状态",prop:"status"}},[r("el-radio-group",{staticClass:"m-r-16 ",model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[r("el-radio",{attrs:{label:0}},[e._v("停用·")]),r("el-radio",{attrs:{label:1}},[e._v("启用")])],1)],1)],1)]),r("div",{staticClass:"bg-white ls-fixed-footer"},[r("div",{staticClass:"row-center flex",staticStyle:{height:"100%"}},[r("el-button",{attrs:{size:"small"},on:{click:function(t){return e.$router.go(-1)}}},[e._v("取消")]),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.onSubmit()}}},[e._v("保存")])],1)])],1)},o=[],s=r("5530"),a=r("d4ec"),i=r("bee2"),l=r("262e"),c=r("2caf"),u=r("9ab4"),f=r("1b40"),m=r("6be0"),d=function(e){Object(l["a"])(r,e);var t=Object(c["a"])(r);function r(){var e;return Object(a["a"])(this,r),e=t.apply(this,arguments),e.engine="",e.form={bucket:"",access_key:"",secret_key:"",domain:"",region:"",status:0},e.formRules={bucket:[{required:!0,message:"请输入存储空间名称",trigger:"blur"}],access_key:[{required:!0,message:"请输入ACCESS_KEY",trigger:"blur"}],secret_key:[{required:!0,message:"请输入SECRET_KEY",trigger:"blur"}],domain:[{required:!0,message:"请输入空间域名",trigger:"blur"}],region:[{required:!0,message:"请输入REGION",trigger:"blur"}]},e}return Object(i["a"])(r,[{key:"onSubmit",value:function(){var e=this;this.$refs.formRef.validate((function(t){t&&Object(m["d"])(Object(s["a"])(Object(s["a"])({},e.form),{},{engine:e.engine})).then((function(t){setTimeout((function(){return e.$router.go(-1)}),500)})).catch((function(e){console.log(e)}))}))}},{key:"getStorageIndex",value:function(){var e=this;Object(m["b"])({engine:this.engine}).then((function(t){console.log(t),e.form=t})).catch((function(e){console.log(e)}))}},{key:"created",value:function(){var e=this.$route.query;e.engine&&(this.engine=e.engine),this.getStorageIndex()}}]),r}(f["e"]);d=Object(u["a"])([Object(f["a"])({components:{}})],d);var g=d,b=g,p=(r("925a"),r("2877")),v=Object(p["a"])(b,n,o,!1,null,"f85c4a38",null);t["default"]=v.exports},"6be0":function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return s})),r.d(t,"d",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r("f175"),o=function(){return n["a"].get("/settings.shop.Storage/lists")},s=function(e){return n["a"].get("/settings.shop.Storage/index",{params:e})},a=function(e){return n["a"].post("/settings.shop.Storage/setup",e)},i=function(e){return n["a"].post("/settings.shop.Storage/change",e)}},"6ea2":function(e,t,r){},"925a":function(e,t,r){"use strict";r("6ea2")}}]);
//# sourceMappingURL=chunk-2cb985e0.3fa14ecd.js.map