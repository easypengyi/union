(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e42ccc7a"],{"14c6":function(t,e,n){"use strict";n.d(e,"n",(function(){return i})),n.d(e,"x",(function(){return a})),n.d(e,"y",(function(){return s})),n.d(e,"u",(function(){return r})),n.d(e,"C",(function(){return c})),n.d(e,"v",(function(){return l})),n.d(e,"B",(function(){return u})),n.d(e,"w",(function(){return d})),n.d(e,"z",(function(){return p})),n.d(e,"A",(function(){return f})),n.d(e,"a",(function(){return g})),n.d(e,"e",(function(){return b})),n.d(e,"f",(function(){return m})),n.d(e,"b",(function(){return v})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return y})),n.d(e,"E",(function(){return _})),n.d(e,"H",(function(){return O})),n.d(e,"F",(function(){return j})),n.d(e,"G",(function(){return k})),n.d(e,"D",(function(){return x})),n.d(e,"L",(function(){return w})),n.d(e,"I",(function(){return C})),n.d(e,"J",(function(){return D})),n.d(e,"K",(function(){return S})),n.d(e,"g",(function(){return $})),n.d(e,"l",(function(){return L})),n.d(e,"h",(function(){return E})),n.d(e,"m",(function(){return z})),n.d(e,"i",(function(){return I})),n.d(e,"k",(function(){return P})),n.d(e,"j",(function(){return A})),n.d(e,"M",(function(){return J})),n.d(e,"P",(function(){return N})),n.d(e,"N",(function(){return G})),n.d(e,"O",(function(){return T})),n.d(e,"r",(function(){return q})),n.d(e,"q",(function(){return F})),n.d(e,"s",(function(){return B})),n.d(e,"t",(function(){return H})),n.d(e,"p",(function(){return K})),n.d(e,"o",(function(){return M}));var o=n("f175"),i=function(t){return o["a"].post("/goods.goods/add",t)},a=function(t){return o["a"].post("/goods.goods/edit",t)},s=function(t){return o["a"].get("/goods.goods/lists",{params:t})},r=function(t){return o["a"].get("/goods.goods/commonLists",{params:t})},c=function(t){return o["a"].post("/goods.goods/status",t)},l=function(t){return o["a"].post("/goods.goods/del",t)},u=function(t){return o["a"].post("/goods.goods/sort",t)},d=function(t){return o["a"].get("/goods.goods/detail",{params:{id:t}})},p=function(t){return o["a"].get("/goods.goods/otherList",{params:t})},f=function(t){return o["a"].post("goods.goods/rename ",t)},g=function(t){return o["a"].post("/goods.goods_brand/add",t)},b=function(t){return o["a"].get("/goods.goods_brand/lists",{params:t})},m=function(t){return o["a"].post("/goods.goods_brand/status",t)},v=function(t){return o["a"].post("/goods.goods_brand/del",t)},h=function(t){return o["a"].get("/goods.goods_brand/detail",{params:{id:t}})},y=function(t){return o["a"].post("/goods.goods_brand/edit",t)},_=function(t){return o["a"].post("/goods.goods_supplier_category/add",t)},O=function(t){return o["a"].get("goods.goods_supplier_category/lists",{params:t})},j=function(t){return o["a"].post("goods.goods_supplier_category/del",{id:t})},k=function(t){return o["a"].post("goods.goods_supplier_category/edit",t)},x=function(t){return o["a"].post("/goods.goods_supplier/add",t)},w=function(t){return o["a"].get("/goods.goods_supplier/lists",{params:t})},C=function(t){return o["a"].post("goods.goods_supplier/del",{id:t})},D=function(t){return o["a"].get("/goods.goods_supplier/detail",{params:{id:t}})},S=function(t){return o["a"].post("/goods.goods_supplier/edit",t)},$=function(t){return o["a"].post("/goods.goods_category/add",t)},L=function(t){return o["a"].get("/goods.goods_category/lists",{params:t})},E=function(t){return o["a"].get("/goods.goods_category/commonLists",{params:t})},z=function(t){return o["a"].post("/goods.goods_category/status",t)},I=function(t){return o["a"].post("goods.goods_category/del",{id:t})},P=function(t){return o["a"].post("/goods.goods_category/edit",t)},A=function(t){return o["a"].get("/goods.goods_category/detail",{params:{id:t}})},J=function(t){return o["a"].post("/goods.goods_unit/add",t)},N=function(t){return o["a"].get("/goods.goods_unit/lists",{params:t})},G=function(t){return o["a"].post("goods.goods_unit/del",{id:t})},T=function(t){return o["a"].post("/goods.goods_unit/edit",t)},q=function(t){return o["a"].get("goods.goods_comment/lists",{params:t})},F=function(t){return o["a"].post("goods.goods_comment/del",t)},B=function(t){return o["a"].post("goods.goods_comment/reply",t)},H=function(t){return o["a"].post("/goods.goods_comment/status",t)},K=function(t){return o["a"].get("goods.goods_comment_assistant/lists",{params:t})},M=function(t){return o["a"].post("goods.goods_comment_assistant/add",t)}},"8fc6":function(t,e,n){"use strict";n("dc30")},dc30:function(t,e,n){},dcb0:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.pager.loading,expression:"pager.loading"}],staticClass:"detail"},[n("div",{staticClass:"flex row m-b-10 m-l-10"},[n("div",{staticClass:"m-r-20"},["multiple"==t.type?n("el-checkbox",{model:{value:t.selectAll,callback:function(e){t.selectAll=e},expression:"selectAll"}},[t._v("全选")]):t._e()],1),n("div",{staticClass:"flex"},[n("div",{staticClass:"m-r-10"},[t._v("商品搜索")]),n("el-input",{staticStyle:{width:"220px"},attrs:{size:"small",placeholder:"请输入商品名称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(1)}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.getList(1)}},slot:"append"})],1)],1)]),n("el-table",{ref:"table",staticStyle:{width:"100%"},attrs:{data:t.pager.lists,height:"370px",size:"mini","row-key":"id"}},["single"==t.type?n("el-table-column",{attrs:{width:"45"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.row;return[n("el-checkbox",{attrs:{value:t.selectItem(o)},on:{change:function(e){return t.handleSelect(e,o)}}})]}}],null,!1,95690818)}):t._e(),"multiple"==t.type?n("el-table-column",{attrs:{width:"45"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.row;return[n("el-checkbox",{attrs:{value:t.selectItem(o)},on:{change:function(e){return t.handleSelect(e,o)}}})]}}],null,!1,95690818)}):t._e(),n("el-table-column",{attrs:{label:"商品信息","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"flex"},[n("el-image",{staticClass:"flex-none",staticStyle:{width:"48px",height:"48px"},attrs:{src:e.row.image,fit:"cover"}}),n("div",{staticClass:"goods-info m-l-8"},[n("div",{staticClass:"line-2"},[t._v(t._s(e.row.name))]),n("div",[2==e.row.spec_type?n("el-tag",{attrs:{size:"mini"}},[t._v("多规格")]):t._e()],1)])],1)]}}])}),n("el-table-column",{attrs:{prop:"price",label:"价格",width:"200"}}),n("el-table-column",{attrs:{prop:"total_stock",label:"库存",width:"80"}})],1),n("div",{staticClass:"flex row-right m-t-20"},[n("ls-pagination",{on:{change:function(e){return t.getList()}},model:{value:t.pager,callback:function(e){t.pager=e},expression:"pager"}})],1)],1)},i=[],a=n("d4ec"),s=n("bee2"),r=n("262e"),c=n("2caf"),l=(n("b0c0"),n("d81d"),n("caad"),n("2532"),n("159b"),n("c740"),n("a434"),n("9ab4")),u=n("1b40"),d=n("3c50"),p=n("6ddb"),f=n("14c6"),g=function(t){Object(r["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.name="",t.pager=new p["a"],t.selectedObj={},t}return Object(s["a"])(n,[{key:"visibleChange",value:function(t){t.val&&this.getList()}},{key:"selectData",get:function(){return this.value},set:function(t){this.$emit("input",t)}},{key:"selectItem",get:function(){var t=this;return function(e){return"single"==t.type?t.selectData.id==e.id:t.selectData.some((function(t){return t.id==e.id}))}}},{key:"selectAll",get:function(){var t=this.pager.lists,e=this.selectData.map((function(t){return t.id}));return!!t.length&&t.every((function(t){return e.includes(t.id)}))},set:function(t){var e=this,n=this.pager.lists;if(t)for(var o=0;o<n.length;o++){var i=n[o],a=this.selectData.map((function(t){return t.id}));if(!a.includes(i.id)){if(this.checkLength())return;this.selectData.push(i)}}else n.forEach((function(t){e.setSelectData(t)}))}},{key:"getList",value:function(t){t&&(this.pager.page=t),this.pager.request({callback:f["u"],params:{name:this.name,is_spec:this.isSpec}}).then((function(t){}))}},{key:"handleSelect",value:function(t,e){if("single"==this.type)this.selectData=t?e:{};else if(t){if(this.checkLength())return;this.selectData.push(e)}else this.setSelectData(e)}},{key:"setSelectData",value:function(t){var e=this.selectData.findIndex((function(e){return e.id==t.id}));-1!=e&&this.selectData.splice(e,1)}},{key:"checkLength",value:function(){return this.selectData.length>=this.limit&&(this.$message({message:"选多选择".concat(this.limit,"件商品"),type:"warning"}),!0)}}]),n}(u["e"]);Object(l["a"])([Object(u["b"])("visible")],g.prototype,"visible",void 0),Object(l["a"])([Object(u["c"])()],g.prototype,"value",void 0),Object(l["a"])([Object(u["c"])()],g.prototype,"goods",void 0),Object(l["a"])([Object(u["c"])({default:"single"})],g.prototype,"type",void 0),Object(l["a"])([Object(u["c"])()],g.prototype,"limit",void 0),Object(l["a"])([Object(u["c"])({default:!1})],g.prototype,"isSpec",void 0),Object(l["a"])([Object(u["f"])("visible",{deep:!0,immediate:!0})],g.prototype,"visibleChange",null),g=Object(l["a"])([Object(u["a"])({components:{LsPagination:d["a"]}})],g);var b=g,m=b,v=n("2877"),h=Object(v["a"])(m,o,i,!1,null,"452f71ca",null);e["a"]=h.exports},f50c:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"select"},[n("div",{staticClass:"flex"},[n("g-dialog",{attrs:{type:t.type,disabled:t.disabled,limit:t.limit,"is-spec":t.isSpec},model:{value:t.selectData,callback:function(e){t.selectData=e},expression:"selectData"}},[t._t("default")],2),n("div",{staticClass:"m-r-20"},[n("span",{staticClass:"muted m-l-20"},[t._v("最多添加"+t._s(t.limit)+"件商品")])]),t.selectData.length?n("div",{staticClass:"clear"},[n("el-button",{attrs:{size:"small",type:"text"},on:{click:function(e){t.selectData=[]}}},[t._v("清空")])],1):t._e()],1),n("div",{staticClass:"select-content"},["list"==t.mode?n("list",{model:{value:t.selectData,callback:function(e){t.selectData=e},expression:"selectData"}}):t._e(),"table"==t.mode?n("g-table",{attrs:{"is-spec":t.isSpec,extend:t.extend},model:{value:t.selectData,callback:function(e){t.selectData=e},expression:"selectData"}}):t._e()],1)])},i=[],a=n("d4ec"),s=n("bee2"),r=n("262e"),c=n("2caf"),l=n("9ab4"),u=n("1b40"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ls-dialog",{ref:"dialog",staticClass:"goods-select",attrs:{title:"选择商品",width:"900px",top:"20vh",disabled:t.disabled},on:{confirm:t.handleConfirm}},[n("div",{staticClass:"goods-select__trigger",attrs:{slot:"trigger"},slot:"trigger"},[t._t("trigger",(function(){return[n("el-button",{attrs:{disabled:t.disabled,size:"mini",type:"primary"}},[t._v("选择商品")])]}))],2),n("div",{staticClass:"p-l-20 p-r-20"},[n("detail",{attrs:{goods:t.value,limit:t.limit,type:t.type},model:{value:t.goods,callback:function(e){t.goods=e},expression:"goods"}})],1)])},p=[],f=n("0a6d"),g=n("dcb0"),b=function(t){Object(r["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.visible=!1,t.goods=[],t}return Object(s["a"])(n,[{key:"valueChange",value:function(t){this.goods=JSON.parse(JSON.stringify(t))}},{key:"handleConfirm",value:function(){this.$emit("input",this.goods)}}]),n}(u["e"]);Object(l["a"])([Object(u["c"])({default:function(){return[]}})],b.prototype,"value",void 0),Object(l["a"])([Object(u["c"])({default:"multiple"})],b.prototype,"type",void 0),Object(l["a"])([Object(u["c"])({default:!1})],b.prototype,"disabled",void 0),Object(l["a"])([Object(u["c"])({default:50})],b.prototype,"limit",void 0),Object(l["a"])([Object(u["c"])({default:!1})],b.prototype,"isSpec",void 0),Object(l["a"])([Object(u["f"])("value",{immediate:!0})],b.prototype,"valueChange",null),b=Object(l["a"])([Object(u["a"])({components:{LsDialog:f["a"],Detail:g["a"]}})],b);var m=b,v=m,h=n("2877"),y=Object(h["a"])(v,d,p,!1,null,"408a7860",null),_=y.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[n("div",{staticClass:"goods-lists"},[n("draggable",{staticClass:"flex flex-wrap",attrs:{animation:"300"},model:{value:t.list,callback:function(e){t.list=e},expression:"list"}},t._l(t.list,(function(e,o){return n("div",{key:o,staticClass:"goods-item ls-del-wrap"},[n("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{fit:"cover",src:e.image}}),n("i",{staticClass:"el-icon-close ls-icon-del",on:{click:function(e){return t.handleDelete(o)}}})],1)})),0)],1)])},j=[],k=(n("a434"),n("b76a")),x=n.n(k),w=function(t){Object(r["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(s["a"])(n,[{key:"list",get:function(){return this.value},set:function(t){this.$emit("input",t)}},{key:"handleDelete",value:function(t){this.list.splice(t,1)}}]),n}(u["e"]);Object(l["a"])([Object(u["c"])({default:function(){return[]}})],w.prototype,"value",void 0),w=Object(l["a"])([Object(u["a"])({components:{Draggable:x.a}})],w);var C=w,D=C,S=(n("8fc6"),Object(h["a"])(D,O,j,!1,null,"224551a2",null)),$=S.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table m-t-20"},[t.list.length?n("el-table",{ref:"paneTable",attrs:{size:"mini",data:t.list,"max-height":"500"}},[n("el-table-column",{attrs:{label:"商品信息","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"flex"},[n("el-image",{staticClass:"flex-none",staticStyle:{width:"58px",height:"58px"},attrs:{src:e.row.image,fit:"cover"}}),n("div",{staticClass:"goods-info m-l-8"},[n("div",{staticClass:"line-2"},[t._v(t._s(e.row.name))]),2==e.row.spec_type?n("el-tag",{attrs:{size:"mini"}},[t._v("多规格")]):t._e()],1)],1)]}}],null,!1,1517623647)}),n("el-table-column",{attrs:{label:"价格","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ￥"+t._s(e.row.sell_price)+" ")]}}],null,!1,2489262044)}),t.extend.name?n("el-table-column",{attrs:{label:t.extend.name+"设置","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[2==e.row.spec_type?n("sepc-table",{attrs:{extend:t.extend},model:{value:e.row.item,callback:function(n){t.$set(e.row,"item",n)},expression:"scope.row.item"}}):t._l(t.extendPrice,(function(o,i){return n("el-input",{key:i,staticClass:"m-r-10 m-t-5",staticStyle:{width:"150px"},attrs:{type:"number",placeholder:o.title},model:{value:e.row.item[0][o.key],callback:function(n){t.$set(e.row.item[0],o.key,n)},expression:"scope.row.item[0][item.key]"}})}))]}}],null,!1,1072403207)}):t._e(),n("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.handleDelete(e.$index)}}},[t._v("移除")])]}}],null,!1,283771553)})],1):t._e()],1)},E=[],z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ls-dialog",{ref:"dialog",attrs:{width:"800px",top:"20vh",title:"设置"+t.extend.name+"价格"},on:{close:t.handleClose,open:t.initPrice,confirm:t.handleConfirm}},[n("el-button",{attrs:{slot:"trigger",size:"small"},slot:"trigger"},[t._v(t._s("设置"+t.extend.name+"价格"))]),n("div",{staticClass:"spec-table"},[n("div",{staticClass:"m-b-20"},t._l(t.extend.price,(function(e,o){return n("popover-input",{key:o,ref:"popoverInput",refInFor:!0,staticClass:"m-r-10",on:{confirm:function(n){return t.batchSetting(n,e.key)}}},[n("el-button",{attrs:{size:"small"}},[t._v("设置"+t._s(e.title))])],1)})),1),n("u-table",{attrs:{data:t.value,"use-virtual":"",size:"mini",height:"400","row-height":50,"tooltip-effect":"dark",border:!1}},[n("u-table-column",{attrs:{label:"规格名",prop:"spec_value_str"}}),n("u-table-column",{attrs:{label:"原价"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ￥"+t._s(e.row.sell_price)+" ")]}}])}),n("u-table-column",{attrs:{label:"现有库存",prop:"stock"}}),t._l(t.extend.price,(function(e,o){return n("u-table-column",{key:o,attrs:{label:e.title},scopedSlots:t._u([{key:"default",fn:function(i){return[n("el-input",{key:o,staticClass:"m-r-10 m-t-5",staticStyle:{width:"100px"},attrs:{type:"number"},model:{value:t.price[i.$index][e.key],callback:function(n){t.$set(t.price[i.$index],e.key,n)},expression:"price[scope.$index][item.key]"}})]}}],null,!0)})}))],2)],1)],1)},I=[],P=(n("d81d"),n("159b"),n("d455")),A=function(t){Object(r["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.price=[],t}return Object(s["a"])(n,[{key:"valueChange",value:function(t){this.initPrice()}},{key:"initPrice",value:function(){var t=this;this.price=this.value.map((function(e){var n={};return t.extend.price.forEach((function(t){n[t.key]=e[t.key]||""})),n}))}},{key:"handleClose",value:function(){this.price=this.price.map((function(){return{}})),this.$refs.popoverInput.forEach((function(t){t.close()}))}},{key:"handleConfirm",value:function(){var t=this;this.value.forEach((function(e,n){t.extend.price.forEach((function(o){t.$set(e,o.key,t.price[n][o.key])}))}))}},{key:"batchSetting",value:function(t,e){var n=this;this.price.forEach((function(o,i){n.$set(o,e,t)}))}}]),n}(u["e"]);Object(l["a"])([Object(u["c"])({default:function(){return[]}})],A.prototype,"value",void 0),Object(l["a"])([Object(u["c"])({default:function(){return[]}})],A.prototype,"extend",void 0),Object(l["a"])([Object(u["f"])("value",{immediate:!0})],A.prototype,"valueChange",null),A=Object(l["a"])([Object(u["a"])({components:{PopoverInput:P["a"],LsDialog:f["a"]}})],A);var J=A,N=J,G=Object(h["a"])(N,z,I,!1,null,"a1830fca",null),T=G.exports,q=function(t){Object(r["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(s["a"])(n,[{key:"list",get:function(){return this.value},set:function(t){this.$emit("input",t)}},{key:"extendPrice",get:function(){return this.extend.price||[]}},{key:"handleDelete",value:function(t){this.list.splice(t,1)}}]),n}(u["e"]);Object(l["a"])([Object(u["c"])({default:function(){return[]}})],q.prototype,"value",void 0),Object(l["a"])([Object(u["c"])({default:!1})],q.prototype,"isSpec",void 0),Object(l["a"])([Object(u["c"])({default:function(){return{}}})],q.prototype,"extend",void 0),q=Object(l["a"])([Object(u["a"])({components:{LsDialog:f["a"],SepcTable:T}})],q);var F=q,B=F,H=Object(h["a"])(B,L,E,!1,null,"0c4ab870",null),K=H.exports,M=function(t){Object(r["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(s["a"])(n,[{key:"selectData",get:function(){return this.value},set:function(t){this.$emit("input",t),this.$emit("change",t)}}]),n}(u["e"]);Object(l["a"])([Object(u["c"])({default:function(){return[]}})],M.prototype,"value",void 0),Object(l["a"])([Object(u["c"])({default:"multiple"})],M.prototype,"type",void 0),Object(l["a"])([Object(u["c"])({default:!1})],M.prototype,"disabled",void 0),Object(l["a"])([Object(u["c"])({default:50})],M.prototype,"limit",void 0),Object(l["a"])([Object(u["c"])({default:"list"})],M.prototype,"mode",void 0),Object(l["a"])([Object(u["c"])({default:!1})],M.prototype,"isSpec",void 0),Object(l["a"])([Object(u["c"])()],M.prototype,"extend",void 0),M=Object(l["a"])([Object(u["a"])({components:{GDialog:_,List:$,GTable:K}})],M);var Q=M,R=Q,U=Object(h["a"])(R,o,i,!1,null,"22337bc1",null);e["a"]=U.exports}}]);
//# sourceMappingURL=chunk-e42ccc7a.d5434093.js.map