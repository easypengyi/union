(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53e0748d"],{"14c6":function(t,e,o){"use strict";o.d(e,"n",(function(){return i})),o.d(e,"x",(function(){return r})),o.d(e,"y",(function(){return a})),o.d(e,"u",(function(){return s})),o.d(e,"C",(function(){return d})),o.d(e,"v",(function(){return u})),o.d(e,"B",(function(){return l})),o.d(e,"w",(function(){return c})),o.d(e,"z",(function(){return f})),o.d(e,"A",(function(){return g})),o.d(e,"a",(function(){return p})),o.d(e,"e",(function(){return m})),o.d(e,"f",(function(){return h})),o.d(e,"b",(function(){return b})),o.d(e,"c",(function(){return v})),o.d(e,"d",(function(){return _})),o.d(e,"E",(function(){return y})),o.d(e,"H",(function(){return j})),o.d(e,"F",(function(){return O})),o.d(e,"G",(function(){return w})),o.d(e,"D",(function(){return k})),o.d(e,"L",(function(){return x})),o.d(e,"I",(function(){return C})),o.d(e,"J",(function(){return L})),o.d(e,"K",(function(){return $})),o.d(e,"g",(function(){return D})),o.d(e,"l",(function(){return z})),o.d(e,"h",(function(){return q})),o.d(e,"m",(function(){return A})),o.d(e,"i",(function(){return I})),o.d(e,"k",(function(){return S})),o.d(e,"j",(function(){return U})),o.d(e,"M",(function(){return T})),o.d(e,"P",(function(){return B})),o.d(e,"N",(function(){return E})),o.d(e,"O",(function(){return J})),o.d(e,"r",(function(){return M})),o.d(e,"q",(function(){return N})),o.d(e,"s",(function(){return P})),o.d(e,"t",(function(){return F})),o.d(e,"p",(function(){return G})),o.d(e,"o",(function(){return H}));var n=o("f175"),i=function(t){return n["a"].post("/goods.goods/add",t)},r=function(t){return n["a"].post("/goods.goods/edit",t)},a=function(t){return n["a"].get("/goods.goods/lists",{params:t})},s=function(t){return n["a"].get("/goods.goods/commonLists",{params:t})},d=function(t){return n["a"].post("/goods.goods/status",t)},u=function(t){return n["a"].post("/goods.goods/del",t)},l=function(t){return n["a"].post("/goods.goods/sort",t)},c=function(t){return n["a"].get("/goods.goods/detail",{params:{id:t}})},f=function(t){return n["a"].get("/goods.goods/otherList",{params:t})},g=function(t){return n["a"].post("goods.goods/rename ",t)},p=function(t){return n["a"].post("/goods.goods_brand/add",t)},m=function(t){return n["a"].get("/goods.goods_brand/lists",{params:t})},h=function(t){return n["a"].post("/goods.goods_brand/status",t)},b=function(t){return n["a"].post("/goods.goods_brand/del",t)},v=function(t){return n["a"].get("/goods.goods_brand/detail",{params:{id:t}})},_=function(t){return n["a"].post("/goods.goods_brand/edit",t)},y=function(t){return n["a"].post("/goods.goods_supplier_category/add",t)},j=function(t){return n["a"].get("goods.goods_supplier_category/lists",{params:t})},O=function(t){return n["a"].post("goods.goods_supplier_category/del",{id:t})},w=function(t){return n["a"].post("goods.goods_supplier_category/edit",t)},k=function(t){return n["a"].post("/goods.goods_supplier/add",t)},x=function(t){return n["a"].get("/goods.goods_supplier/lists",{params:t})},C=function(t){return n["a"].post("goods.goods_supplier/del",{id:t})},L=function(t){return n["a"].get("/goods.goods_supplier/detail",{params:{id:t}})},$=function(t){return n["a"].post("/goods.goods_supplier/edit",t)},D=function(t){return n["a"].post("/goods.goods_category/add",t)},z=function(t){return n["a"].get("/goods.goods_category/lists",{params:t})},q=function(t){return n["a"].get("/goods.goods_category/commonLists",{params:t})},A=function(t){return n["a"].post("/goods.goods_category/status",t)},I=function(t){return n["a"].post("goods.goods_category/del",{id:t})},S=function(t){return n["a"].post("/goods.goods_category/edit",t)},U=function(t){return n["a"].get("/goods.goods_category/detail",{params:{id:t}})},T=function(t){return n["a"].post("/goods.goods_unit/add",t)},B=function(t){return n["a"].get("/goods.goods_unit/lists",{params:t})},E=function(t){return n["a"].post("goods.goods_unit/del",{id:t})},J=function(t){return n["a"].post("/goods.goods_unit/edit",t)},M=function(t){return n["a"].get("goods.goods_comment/lists",{params:t})},N=function(t){return n["a"].post("goods.goods_comment/del",t)},P=function(t){return n["a"].post("goods.goods_comment/reply",t)},F=function(t){return n["a"].post("/goods.goods_comment/status",t)},G=function(t){return n["a"].get("goods.goods_comment_assistant/lists",{params:t})},H=function(t){return n["a"].post("goods.goods_comment_assistant/add",t)}},"31d6":function(t,e,o){},"557b":function(t,e,o){"use strict";o("ad04")},"568b":function(t,e,o){"use strict";o("31d6")},"5c51":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ls-brand-edit"},[o("div",{staticClass:"ls-card ls-brand-edit__header"},[o("el-page-header",{attrs:{content:t.id?"编辑品牌":"新增品牌"},on:{back:function(e){return t.$router.go(-1)}}})],1),o("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"ls-card ls-brand-edit__form m-t-10"},[o("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px",size:"small",rules:t.rules}},[o("el-form-item",{attrs:{label:"品牌名称",required:"",prop:"name"}},[o("el-input",{staticClass:"ls-input",attrs:{maxlength:"8","show-word-limit":"",placeholder:"请输入品牌名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),o("el-form-item",{attrs:{label:"品牌图标",required:"",prop:"image"}},[o("material-select",{attrs:{limit:1},model:{value:t.form.image,callback:function(e){t.$set(t.form,"image",e)},expression:"form.image"}}),o("div",{staticClass:"xs muted"},[t._v(" 建议尺寸：宽80像素*高80像素的jpg，jpeg，png，gif图片 ")])],1),o("el-form-item",{attrs:{label:"排序"}},[o("el-input",{staticStyle:{width:"220px"},attrs:{placeholder:""},model:{value:t.form.sort,callback:function(e){t.$set(t.form,"sort",e)},expression:"form.sort"}})],1),o("el-form-item",{attrs:{label:"是否显示",required:""}},[o("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form.is_show,callback:function(e){t.$set(t.form,"is_show",e)},expression:"form.is_show"}})],1)],1)],1),o("div",{staticClass:"ls-brand-edit__footer bg-white ls-fixed-footer"},[o("div",{staticClass:"btns row-center flex",staticStyle:{height:"100%"}},[o("el-button",{attrs:{size:"small"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("取消")]),o("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.handleSave}},[t._v("保存")])],1)])])},i=[],r=o("d4ec"),a=o("bee2"),s=o("262e"),d=o("2caf"),u=o("9ab4"),l=o("1b40"),c=o("b3ad"),f=o("14c6"),g=function(t){Object(s["a"])(o,t);var e=Object(d["a"])(o);function o(){var t;return Object(r["a"])(this,o),t=e.apply(this,arguments),t.loading=!1,t.form={name:"",image:"",sort:"",is_show:1},t.rules={name:[{required:!0,message:"请输入品牌名称",trigger:["blur","change"]}],image:[{required:!0,message:"请添加品牌图标",trigger:["blur","change"]}]},t}return Object(a["a"])(o,[{key:"handleSave",value:function(){var t=this;this.$refs.form.validate((function(e,o){if(!e)return!1;var n=t.id?Object(f["d"])(t.form):Object(f["a"])(t.form);n.then((function(){t.$router.go(-1)}))}))}},{key:"getBrandDetail",value:function(){var t=this;this.loading=!0,Object(f["c"])(this.id).then((function(e){t.form=e,t.loading=!1}))}},{key:"created",value:function(){this.id=this.$route.query.id,this.id&&this.getBrandDetail()}}]),o}(l["e"]);g=Object(u["a"])([Object(l["a"])({components:{MaterialSelect:c["a"]}})],g);var p=g,m=p,h=(o("557b"),o("2877")),b=Object(h["a"])(m,n,i,!1,null,"a8a449e2",null);e["default"]=b.exports},ad04:function(t,e,o){},b3ad:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ls-dialog",{ref:"materialDialog",staticClass:"material-select",attrs:{title:"选择"+t.tipsText,width:"1050px",top:"15vh"},on:{confirm:t.handleConfirm}},[t.hiddenTrigger?t._e():o("div",{staticClass:"material-select__trigger clearfix",attrs:{slot:"trigger"},on:{click:function(t){t.stopPropagation()}},slot:"trigger"},[o("draggable",{staticClass:"ls-draggable",attrs:{animation:"300",disabled:t.disabled||t.dragDisabled},on:{update:t.handleChange},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}},t._l(t.fileList,(function(e,n){return o("div",{key:e+n,staticClass:"material-preview ls-del-wrap",class:{"is-disabled":t.disabled,"is-one":1==t.limit},on:{click:function(e){return t.showDialog(!1,n)}}},[t.$scopedSlots.preview?o("div",[t._t("preview",null,{item:t.imageUri(e)})],2):o("file-item",{attrs:{type:t.type,item:{uri:t.imageUri(e)},size:t.size}}),t.enableDelete?o("i",{staticClass:"el-icon-close ls-icon-del",on:{click:function(e){return e.stopPropagation(),t.delImage(n)}}}):t._e()],1)})),0),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showUpload,expression:"showUpload"}],staticClass:"material-upload",class:{"is-disabled":t.disabled,"is-one":1==t.limit},on:{click:function(e){return t.showDialog(!0)}}},[t.$slots.upload?o("div",[t._t("upload")],2):o("div",{staticClass:"upload-btn flex row-center",style:{width:t.size+"px",height:t.size+"px",background:t.uploadBg}},[t._t("default"),t.$slots.default?t._e():o("span",[t._v("添加"+t._s(t.tipsText))])],2)])],1),o("div",{staticClass:"material-wrap"},[o("ls-material",{ref:"material",attrs:{"page-size":15,type:t.type,limit:t.meterialLimit},on:{change:t.selectChange}})],1)])},i=[],r=o("d4ec"),a=o("bee2"),s=o("262e"),d=o("2caf"),u=(o("d81d"),o("a434"),o("99af"),o("9ab4")),l=o("1b40"),c=o("0a6d"),f=o("c6fe"),g=o("e915"),p=o("b76a"),m=o.n(p),h=function(t){Object(s["a"])(o,t);var e=Object(d["a"])(o);function o(){var t;return Object(r["a"])(this,o),t=e.apply(this,arguments),t.isAdd=!0,t.fileList=[],t}return Object(a["a"])(o,[{key:"showUpload",get:function(){var t=this.fileList,e=this.limit;return e-t.length>0}},{key:"meterialLimit",get:function(){return this.isAdd?this.limit?this.limit-this.fileList.length:null:1}},{key:"tipsText",get:function(){switch(this.type){case"image":return"图片";case"video":return"视频"}}},{key:"imageUri",get:function(){var t=this;return function(e){return t.enableDomain?e:t.$getImageUri(e)}}},{key:"valueChange",value:function(t){this.fileList=Array.isArray(t)?t:""==t?[]:[t]}},{key:"showDialog",value:function(){var t,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],o=arguments.length>1?arguments[1]:void 0;this.disabled||(this.isAdd=e,void 0!==o&&(this.currentIndex=o),null===(t=this.$refs.materialDialog)||void 0===t||t.onTrigger())}},{key:"selectChange",value:function(t){this.select=t}},{key:"handleConfirm",value:function(){var t=this;this.$refs.material.clearSelectList();var e=this.select.map((function(e){return t.enableDomain?e.uri:e.url}));this.isAdd?this.fileList=this.fileList.concat(e):this.fileList.splice(this.currentIndex,1,e.shift()),this.handleChange()}},{key:"delImage",value:function(t){this.fileList.splice(t,1),this.handleChange()}},{key:"handleChange",value:function(){var t=1!=this.limit?this.fileList:this.fileList[0]||"";this.$emit("input",t),this.$emit("change",t),this.fileList=[]}}]),o}(l["e"]);Object(u["a"])([Object(l["c"])({default:function(){return[]}})],h.prototype,"value",void 0),Object(u["a"])([Object(l["c"])({default:1})],h.prototype,"limit",void 0),Object(u["a"])([Object(l["c"])({default:"100"})],h.prototype,"size",void 0),Object(u["a"])([Object(l["c"])({default:!1})],h.prototype,"disabled",void 0),Object(u["a"])([Object(l["c"])({default:!1})],h.prototype,"dragDisabled",void 0),Object(u["a"])([Object(l["c"])({default:!1})],h.prototype,"hiddenTrigger",void 0),Object(u["a"])([Object(l["c"])({default:"image"})],h.prototype,"type",void 0),Object(u["a"])([Object(l["c"])({default:"transparent"})],h.prototype,"uploadBg",void 0),Object(u["a"])([Object(l["c"])({default:!0})],h.prototype,"enableDomain",void 0),Object(u["a"])([Object(l["c"])({default:!0})],h.prototype,"enableDelete",void 0),Object(u["a"])([Object(l["f"])("value",{immediate:!0})],h.prototype,"valueChange",null),h=Object(u["a"])([Object(l["a"])({components:{LsDialog:c["a"],LsMaterial:f["a"],Draggable:m.a,FileItem:g["a"]}})],h);var b=h,v=b,_=(o("568b"),o("2877")),y=Object(_["a"])(v,n,i,!1,null,"1503bff6",null);e["a"]=y.exports}}]);
//# sourceMappingURL=chunk-53e0748d.522412bf.js.map