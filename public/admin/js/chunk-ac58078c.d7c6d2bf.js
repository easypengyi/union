(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac58078c"],{"14c6":function(t,e,s){"use strict";s.d(e,"q",(function(){return a})),s.d(e,"A",(function(){return i})),s.d(e,"B",(function(){return l})),s.d(e,"x",(function(){return n})),s.d(e,"F",(function(){return c})),s.d(e,"y",(function(){return r})),s.d(e,"E",(function(){return d})),s.d(e,"z",(function(){return u})),s.d(e,"C",(function(){return p})),s.d(e,"D",(function(){return g})),s.d(e,"c",(function(){return f})),s.d(e,"g",(function(){return m})),s.d(e,"h",(function(){return b})),s.d(e,"d",(function(){return h})),s.d(e,"e",(function(){return v})),s.d(e,"f",(function(){return _})),s.d(e,"H",(function(){return y})),s.d(e,"K",(function(){return x})),s.d(e,"I",(function(){return O})),s.d(e,"J",(function(){return j})),s.d(e,"G",(function(){return k})),s.d(e,"O",(function(){return w})),s.d(e,"L",(function(){return C})),s.d(e,"M",(function(){return D})),s.d(e,"N",(function(){return S})),s.d(e,"i",(function(){return $})),s.d(e,"o",(function(){return L})),s.d(e,"j",(function(){return P})),s.d(e,"p",(function(){return z})),s.d(e,"m",(function(){return I})),s.d(e,"k",(function(){return E})),s.d(e,"n",(function(){return A})),s.d(e,"l",(function(){return J})),s.d(e,"P",(function(){return N})),s.d(e,"S",(function(){return G})),s.d(e,"Q",(function(){return T})),s.d(e,"R",(function(){return q})),s.d(e,"u",(function(){return F})),s.d(e,"t",(function(){return B})),s.d(e,"v",(function(){return H})),s.d(e,"w",(function(){return K})),s.d(e,"s",(function(){return M})),s.d(e,"r",(function(){return Q})),s.d(e,"a",(function(){return R})),s.d(e,"b",(function(){return U}));var o=s("f175");const a=t=>o["a"].post("/goods.goods/add",t),i=t=>o["a"].post("/goods.goods/edit",t),l=t=>o["a"].get("/goods.goods/lists",{params:t}),n=t=>o["a"].get("/goods.goods/commonLists",{params:t}),c=t=>o["a"].post("/goods.goods/status",t),r=t=>o["a"].post("/goods.goods/del",t),d=t=>o["a"].post("/goods.goods/sort",t),u=t=>o["a"].get("/goods.goods/detail",{params:{id:t}}),p=t=>o["a"].get("/goods.goods/otherList",{params:t}),g=t=>o["a"].post("goods.goods/rename ",t),f=t=>o["a"].post("/goods.goods_brand/add",t),m=t=>o["a"].get("/goods.goods_brand/lists",{params:t}),b=t=>o["a"].post("/goods.goods_brand/status",t),h=t=>o["a"].post("/goods.goods_brand/del",t),v=t=>o["a"].get("/goods.goods_brand/detail",{params:{id:t}}),_=t=>o["a"].post("/goods.goods_brand/edit",t),y=t=>o["a"].post("/goods.goods_supplier_category/add",t),x=t=>o["a"].get("goods.goods_supplier_category/lists",{params:t}),O=t=>o["a"].post("goods.goods_supplier_category/del",{id:t}),j=t=>o["a"].post("goods.goods_supplier_category/edit",t),k=t=>o["a"].post("/goods.goods_supplier/add",t),w=t=>o["a"].get("/goods.goods_supplier/lists",{params:t}),C=t=>o["a"].post("goods.goods_supplier/del",{id:t}),D=t=>o["a"].get("/goods.goods_supplier/detail",{params:{id:t}}),S=t=>o["a"].post("/goods.goods_supplier/edit",t),$=t=>o["a"].post("/goods.goods_category/add",t),L=t=>o["a"].get("/goods.goods_category/lists",{params:t}),P=t=>o["a"].get("/goods.goods_category/commonLists",{params:t}),z=t=>o["a"].post("/goods.goods_category/status",t),I=t=>o["a"].post("/goods.goods_category/down_good",t),E=t=>o["a"].post("goods.goods_category/del",{id:t}),A=t=>o["a"].post("/goods.goods_category/edit",t),J=t=>o["a"].get("/goods.goods_category/detail",{params:{id:t}}),N=t=>o["a"].post("/goods.goods_unit/add",t),G=t=>o["a"].get("/goods.goods_unit/lists",{params:t}),T=t=>o["a"].post("goods.goods_unit/del",{id:t}),q=t=>o["a"].post("/goods.goods_unit/edit",t),F=t=>o["a"].get("goods.goods_comment/lists",{params:t}),B=t=>o["a"].post("goods.goods_comment/del",t),H=t=>o["a"].post("goods.goods_comment/reply",t),K=t=>o["a"].post("/goods.goods_comment/status",t),M=t=>o["a"].get("goods.goods_comment_assistant/lists",{params:t}),Q=t=>o["a"].post("goods.goods_comment_assistant/add",t),R=t=>o["a"].get("/goods.goods_activity/lists",{params:t}),U=t=>o["a"].post("/goods.goods_activity/status",t)},9966:function(t,e,s){},dcb0:function(t,e,s){"use strict";var o=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.pager.loading,expression:"pager.loading"}],staticClass:"detail"},[e("div",{staticClass:"flex row m-b-10 m-l-10"},[e("div",{staticClass:"m-r-20"},["multiple"==t.type?e("el-checkbox",{model:{value:t.selectAll,callback:function(e){t.selectAll=e},expression:"selectAll"}},[t._v("全选")]):t._e()],1),e("div",{staticClass:"flex"},[e("div",{staticClass:"m-r-10"},[t._v("商品搜索")]),e("el-input",{staticStyle:{width:"220px"},attrs:{size:"small",placeholder:"请输入商品名称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(1)}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}},[e("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.getList(1)}},slot:"append"})],1)],1)]),e("el-table",{ref:"table",staticStyle:{width:"100%"},attrs:{data:t.pager.lists,height:"370px",size:"mini","row-key":"id"}},["single"==t.type?e("el-table-column",{attrs:{width:"45"},scopedSlots:t._u([{key:"default",fn:function({row:s}){return[e("el-checkbox",{attrs:{value:t.selectItem(s)},on:{change:function(e){return t.handleSelect(e,s)}}})]}}],null,!1,95690818)}):t._e(),"multiple"==t.type?e("el-table-column",{attrs:{width:"45"},scopedSlots:t._u([{key:"default",fn:function({row:s}){return[e("el-checkbox",{attrs:{value:t.selectItem(s)},on:{change:function(e){return t.handleSelect(e,s)}}})]}}],null,!1,95690818)}):t._e(),e("el-table-column",{attrs:{label:"商品信息","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("div",{staticClass:"flex"},[e("el-image",{staticClass:"flex-none",staticStyle:{width:"48px",height:"48px"},attrs:{src:s.row.image,fit:"cover"}}),e("div",{staticClass:"goods-info m-l-8"},[e("div",{staticClass:"line-2"},[t._v(t._s(s.row.name))]),e("div",[2==s.row.spec_type?e("el-tag",{attrs:{size:"mini"}},[t._v("多规格")]):t._e()],1)])],1)]}}])}),e("el-table-column",{attrs:{prop:"price",label:"价格",width:"200"}}),e("el-table-column",{attrs:{prop:"total_stock",label:"库存",width:"80"}})],1),e("div",{staticClass:"flex row-right m-t-20"},[e("ls-pagination",{on:{change:function(e){return t.getList()}},model:{value:t.pager,callback:function(e){t.pager=e},expression:"pager"}})],1)],1)},a=[],i=(s("caad"),s("9ab4")),l=s("1b40"),n=s("3c50"),c=s("6ddb"),r=s("14c6");let d=class extends l["e"]{constructor(){super(...arguments),this.name="",this.pager=new c["a"],this.selectedObj={}}visibleChange(t){t.val&&this.getList()}get selectData(){return this.value}set selectData(t){this.$emit("input",t)}get selectItem(){return t=>"single"==this.type?this.selectData.id==t.id:this.selectData.some(e=>e.id==t.id)}get selectAll(){const{pager:{lists:t}}=this,e=this.selectData.map(t=>t.id);return!!t.length&&t.every(t=>e.includes(t.id))}set selectAll(t){const{pager:{lists:e}}=this;if(t)for(let s=0;s<e.length;s++){const t=e[s],o=this.selectData.map(t=>t.id);if(!o.includes(t.id)){if(this.checkLength())return;this.selectData.push(t)}}else e.forEach(t=>{this.setSelectData(t)})}getList(t){t&&(this.pager.page=t),this.pager.request({callback:r["x"],params:{name:this.name,is_spec:this.isSpec}}).then(t=>{})}handleSelect(t,e){if("single"==this.type)this.selectData=t?e:{};else if(t){if(this.checkLength())return;this.selectData.push(e)}else this.setSelectData(e)}setSelectData(t){let e=this.selectData.findIndex(e=>e.id==t.id);-1!=e&&this.selectData.splice(e,1)}checkLength(){return this.selectData.length>=this.limit&&(this.$message({message:`选多选择${this.limit}件商品`,type:"warning"}),!0)}};Object(i["a"])([Object(l["b"])("visible")],d.prototype,"visible",void 0),Object(i["a"])([Object(l["c"])()],d.prototype,"value",void 0),Object(i["a"])([Object(l["c"])()],d.prototype,"goods",void 0),Object(i["a"])([Object(l["c"])({default:"single"})],d.prototype,"type",void 0),Object(i["a"])([Object(l["c"])()],d.prototype,"limit",void 0),Object(i["a"])([Object(l["c"])({default:!1})],d.prototype,"isSpec",void 0),Object(i["a"])([Object(l["f"])("visible",{deep:!0,immediate:!0})],d.prototype,"visibleChange",null),d=Object(i["a"])([Object(l["a"])({components:{LsPagination:n["a"]}})],d);var u=d,p=u,g=s("2877"),f=Object(g["a"])(p,o,a,!1,null,"452f71ca",null);e["a"]=f.exports},f50c:function(t,e,s){"use strict";var o=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"select"},[e("div",{staticClass:"flex"},[e("g-dialog",{attrs:{type:t.type,disabled:t.disabled,limit:t.limit,"is-spec":t.isSpec},model:{value:t.selectData,callback:function(e){t.selectData=e},expression:"selectData"}},[t._t("default")],2),e("div",{staticClass:"m-r-20"},[e("span",{staticClass:"muted m-l-20"},[t._v("最多添加"+t._s(t.limit)+"件商品")])]),t.selectData.length?e("div",{staticClass:"clear"},[e("el-button",{attrs:{size:"small",type:"text"},on:{click:function(e){t.selectData=[]}}},[t._v("清空")])],1):t._e()],1),e("div",{staticClass:"select-content"},["list"==t.mode?e("list",{model:{value:t.selectData,callback:function(e){t.selectData=e},expression:"selectData"}}):t._e(),"table"==t.mode?e("g-table",{attrs:{"is-spec":t.isSpec,extend:t.extend},model:{value:t.selectData,callback:function(e){t.selectData=e},expression:"selectData"}}):t._e()],1)])},a=[],i=s("9ab4"),l=s("1b40"),n=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ls-dialog",{ref:"dialog",staticClass:"goods-select",attrs:{title:"选择商品",width:"900px",top:"20vh",disabled:t.disabled},on:{confirm:t.handleConfirm}},[e("div",{staticClass:"goods-select__trigger",attrs:{slot:"trigger"},slot:"trigger"},[t._t("trigger",(function(){return[e("el-button",{attrs:{disabled:t.disabled,size:"mini",type:"primary"}},[t._v("选择商品")])]}))],2),e("div",{staticClass:"p-l-20 p-r-20"},[e("detail",{attrs:{goods:t.value,limit:t.limit,type:t.type},model:{value:t.goods,callback:function(e){t.goods=e},expression:"goods"}})],1)])},c=[],r=s("0a6d"),d=s("dcb0");let u=class extends l["e"]{constructor(){super(...arguments),this.visible=!1,this.goods=[]}valueChange(t){this.goods=JSON.parse(JSON.stringify(t))}handleConfirm(){this.$emit("input",this.goods)}};Object(i["a"])([Object(l["c"])({default:()=>[]})],u.prototype,"value",void 0),Object(i["a"])([Object(l["c"])({default:"multiple"})],u.prototype,"type",void 0),Object(i["a"])([Object(l["c"])({default:!1})],u.prototype,"disabled",void 0),Object(i["a"])([Object(l["c"])({default:50})],u.prototype,"limit",void 0),Object(i["a"])([Object(l["c"])({default:!1})],u.prototype,"isSpec",void 0),Object(i["a"])([Object(l["f"])("value",{immediate:!0})],u.prototype,"valueChange",null),u=Object(i["a"])([Object(l["a"])({components:{LsDialog:r["a"],Detail:d["a"]}})],u);var p=u,g=p,f=s("2877"),m=Object(f["a"])(g,n,c,!1,null,"408a7860",null),b=m.exports,h=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"list"},[e("div",{staticClass:"goods-lists"},[e("draggable",{staticClass:"flex flex-wrap",attrs:{animation:"300"},model:{value:t.list,callback:function(e){t.list=e},expression:"list"}},t._l(t.list,(function(s,o){return e("div",{key:o,staticClass:"goods-item ls-del-wrap"},[e("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{fit:"cover",src:s.image}}),e("i",{staticClass:"el-icon-close ls-icon-del",on:{click:function(e){return t.handleDelete(o)}}})],1)})),0)],1)])},v=[],_=s("b76a"),y=s.n(_);let x=class extends l["e"]{get list(){return this.value}set list(t){this.$emit("input",t)}handleDelete(t){this.list.splice(t,1)}};Object(i["a"])([Object(l["c"])({default:()=>[]})],x.prototype,"value",void 0),x=Object(i["a"])([Object(l["a"])({components:{Draggable:y.a}})],x);var O=x,j=O,k=(s("f620"),Object(f["a"])(j,h,v,!1,null,"224551a2",null)),w=k.exports,C=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"table m-t-20"},[t.list.length?e("el-table",{ref:"paneTable",attrs:{size:"mini",data:t.list,"max-height":"500"}},[e("el-table-column",{attrs:{label:"商品信息","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("div",{staticClass:"flex"},[e("el-image",{staticClass:"flex-none",staticStyle:{width:"58px",height:"58px"},attrs:{src:s.row.image,fit:"cover"}}),e("div",{staticClass:"goods-info m-l-8"},[e("div",{staticClass:"line-2"},[t._v(t._s(s.row.name))]),2==s.row.spec_type?e("el-tag",{attrs:{size:"mini"}},[t._v("多规格")]):t._e()],1)],1)]}}],null,!1,1517623647)}),e("el-table-column",{attrs:{label:"价格","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ￥"+t._s(e.row.sell_price)+" ")]}}],null,!1,2489262044)}),t.extend.name?e("el-table-column",{attrs:{label:t.extend.name+"设置","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(s){return[2==s.row.spec_type?e("sepc-table",{attrs:{extend:t.extend},model:{value:s.row.item,callback:function(e){t.$set(s.row,"item",e)},expression:"scope.row.item"}}):t._l(t.extendPrice,(function(o,a){return e("el-input",{key:a,staticClass:"m-r-10 m-t-5",staticStyle:{width:"150px"},attrs:{type:"number",placeholder:o.title},model:{value:s.row.item[0][o.key],callback:function(e){t.$set(s.row.item[0],o.key,e)},expression:"scope.row.item[0][item.key]"}})}))]}}],null,!1,1072403207)}):t._e(),e("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.handleDelete(s.$index)}}},[t._v("移除")])]}}],null,!1,283771553)})],1):t._e()],1)},D=[],S=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ls-dialog",{ref:"dialog",attrs:{width:"800px",top:"20vh",title:`设置${t.extend.name}价格`},on:{close:t.handleClose,open:t.initPrice,confirm:t.handleConfirm}},[e("el-button",{attrs:{slot:"trigger",size:"small"},slot:"trigger"},[t._v(t._s(`设置${t.extend.name}价格`))]),e("div",{staticClass:"spec-table"},[e("div",{staticClass:"m-b-20"},t._l(t.extend.price,(function(s,o){return e("popover-input",{key:o,ref:"popoverInput",refInFor:!0,staticClass:"m-r-10",on:{confirm:function(e){return t.batchSetting(e,s.key)}}},[e("el-button",{attrs:{size:"small"}},[t._v("设置"+t._s(s.title))])],1)})),1),e("u-table",{attrs:{data:t.value,"use-virtual":"",size:"mini",height:"400","row-height":50,"tooltip-effect":"dark",border:!1}},[e("u-table-column",{attrs:{label:"规格名",prop:"spec_value_str"}}),e("u-table-column",{attrs:{label:"原价"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ￥"+t._s(e.row.sell_price)+" ")]}}])}),e("u-table-column",{attrs:{label:"现有库存",prop:"stock"}}),t._l(t.extend.price,(function(s,o){return e("u-table-column",{key:o,attrs:{label:s.title},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-input",{key:o,staticClass:"m-r-10 m-t-5",staticStyle:{width:"100px"},attrs:{type:"number"},model:{value:t.price[a.$index][s.key],callback:function(e){t.$set(t.price[a.$index],s.key,e)},expression:"price[scope.$index][item.key]"}})]}}],null,!0)})}))],2)],1)],1)},$=[],L=s("d455");let P=class extends l["e"]{constructor(){super(...arguments),this.price=[]}valueChange(t){this.initPrice()}initPrice(){this.price=this.value.map(t=>{const e={};return this.extend.price.forEach(s=>{e[s.key]=t[s.key]||""}),e})}handleClose(){this.price=this.price.map(()=>({})),this.$refs.popoverInput.forEach(t=>{t.close()})}handleConfirm(){this.value.forEach((t,e)=>{this.extend.price.forEach(s=>{this.$set(t,s.key,this.price[e][s.key])})})}batchSetting(t,e){this.price.forEach((s,o)=>{this.$set(s,e,t)})}};Object(i["a"])([Object(l["c"])({default:()=>[]})],P.prototype,"value",void 0),Object(i["a"])([Object(l["c"])({default:()=>[]})],P.prototype,"extend",void 0),Object(i["a"])([Object(l["f"])("value",{immediate:!0})],P.prototype,"valueChange",null),P=Object(i["a"])([Object(l["a"])({components:{PopoverInput:L["a"],LsDialog:r["a"]}})],P);var z=P,I=z,E=Object(f["a"])(I,S,$,!1,null,"a1830fca",null),A=E.exports;let J=class extends l["e"]{get list(){return this.value}set list(t){this.$emit("input",t)}get extendPrice(){return this.extend.price||[]}handleDelete(t){this.list.splice(t,1)}};Object(i["a"])([Object(l["c"])({default:()=>[]})],J.prototype,"value",void 0),Object(i["a"])([Object(l["c"])({default:!1})],J.prototype,"isSpec",void 0),Object(i["a"])([Object(l["c"])({default:()=>({})})],J.prototype,"extend",void 0),J=Object(i["a"])([Object(l["a"])({components:{LsDialog:r["a"],SepcTable:A}})],J);var N=J,G=N,T=Object(f["a"])(G,C,D,!1,null,"0c4ab870",null),q=T.exports;let F=class extends l["e"]{get selectData(){return this.value}set selectData(t){this.$emit("input",t),this.$emit("change",t)}};Object(i["a"])([Object(l["c"])({default:()=>[]})],F.prototype,"value",void 0),Object(i["a"])([Object(l["c"])({default:"multiple"})],F.prototype,"type",void 0),Object(i["a"])([Object(l["c"])({default:!1})],F.prototype,"disabled",void 0),Object(i["a"])([Object(l["c"])({default:50})],F.prototype,"limit",void 0),Object(i["a"])([Object(l["c"])({default:"list"})],F.prototype,"mode",void 0),Object(i["a"])([Object(l["c"])({default:!1})],F.prototype,"isSpec",void 0),Object(i["a"])([Object(l["c"])()],F.prototype,"extend",void 0),F=Object(i["a"])([Object(l["a"])({components:{GDialog:b,List:w,GTable:q}})],F);var B=F,H=B,K=Object(f["a"])(H,o,a,!1,null,"22337bc1",null);e["a"]=K.exports},f620:function(t,e,s){"use strict";s("9966")}}]);
//# sourceMappingURL=chunk-ac58078c.d7c6d2bf.js.map