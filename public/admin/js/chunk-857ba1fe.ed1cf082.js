(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-857ba1fe"],{"14c6":function(o,t,s){"use strict";s.d(t,"q",(function(){return n})),s.d(t,"A",(function(){return a})),s.d(t,"B",(function(){return d})),s.d(t,"x",(function(){return r})),s.d(t,"F",(function(){return i})),s.d(t,"y",(function(){return u})),s.d(t,"E",(function(){return c})),s.d(t,"z",(function(){return g})),s.d(t,"C",(function(){return l})),s.d(t,"D",(function(){return p})),s.d(t,"c",(function(){return f})),s.d(t,"g",(function(){return _})),s.d(t,"h",(function(){return m})),s.d(t,"d",(function(){return b})),s.d(t,"e",(function(){return h})),s.d(t,"f",(function(){return w})),s.d(t,"H",(function(){return v})),s.d(t,"K",(function(){return y})),s.d(t,"I",(function(){return x})),s.d(t,"J",(function(){return k})),s.d(t,"G",(function(){return L})),s.d(t,"O",(function(){return C})),s.d(t,"L",(function(){return S})),s.d(t,"M",(function(){return j})),s.d(t,"N",(function(){return O})),s.d(t,"i",(function(){return D})),s.d(t,"o",(function(){return z})),s.d(t,"j",(function(){return $})),s.d(t,"p",(function(){return q})),s.d(t,"m",(function(){return G})),s.d(t,"k",(function(){return J})),s.d(t,"n",(function(){return P})),s.d(t,"l",(function(){return A})),s.d(t,"P",(function(){return N})),s.d(t,"S",(function(){return T})),s.d(t,"Q",(function(){return B})),s.d(t,"R",(function(){return E})),s.d(t,"u",(function(){return F})),s.d(t,"t",(function(){return H})),s.d(t,"v",(function(){return I})),s.d(t,"w",(function(){return K})),s.d(t,"s",(function(){return M})),s.d(t,"r",(function(){return Q})),s.d(t,"a",(function(){return R})),s.d(t,"b",(function(){return U}));var e=s("f175");const n=o=>e["a"].post("/goods.goods/add",o),a=o=>e["a"].post("/goods.goods/edit",o),d=o=>e["a"].get("/goods.goods/lists",{params:o}),r=o=>e["a"].get("/goods.goods/commonLists",{params:o}),i=o=>e["a"].post("/goods.goods/status",o),u=o=>e["a"].post("/goods.goods/del",o),c=o=>e["a"].post("/goods.goods/sort",o),g=o=>e["a"].get("/goods.goods/detail",{params:{id:o}}),l=o=>e["a"].get("/goods.goods/otherList",{params:o}),p=o=>e["a"].post("goods.goods/rename ",o),f=o=>e["a"].post("/goods.goods_brand/add",o),_=o=>e["a"].get("/goods.goods_brand/lists",{params:o}),m=o=>e["a"].post("/goods.goods_brand/status",o),b=o=>e["a"].post("/goods.goods_brand/del",o),h=o=>e["a"].get("/goods.goods_brand/detail",{params:{id:o}}),w=o=>e["a"].post("/goods.goods_brand/edit",o),v=o=>e["a"].post("/goods.goods_supplier_category/add",o),y=o=>e["a"].get("goods.goods_supplier_category/lists",{params:o}),x=o=>e["a"].post("goods.goods_supplier_category/del",{id:o}),k=o=>e["a"].post("goods.goods_supplier_category/edit",o),L=o=>e["a"].post("/goods.goods_supplier/add",o),C=o=>e["a"].get("/goods.goods_supplier/lists",{params:o}),S=o=>e["a"].post("goods.goods_supplier/del",{id:o}),j=o=>e["a"].get("/goods.goods_supplier/detail",{params:{id:o}}),O=o=>e["a"].post("/goods.goods_supplier/edit",o),D=o=>e["a"].post("/goods.goods_category/add",o),z=o=>e["a"].get("/goods.goods_category/lists",{params:o}),$=o=>e["a"].get("/goods.goods_category/commonLists",{params:o}),q=o=>e["a"].post("/goods.goods_category/status",o),G=o=>e["a"].post("/goods.goods_category/down_good",o),J=o=>e["a"].post("goods.goods_category/del",{id:o}),P=o=>e["a"].post("/goods.goods_category/edit",o),A=o=>e["a"].get("/goods.goods_category/detail",{params:{id:o}}),N=o=>e["a"].post("/goods.goods_unit/add",o),T=o=>e["a"].get("/goods.goods_unit/lists",{params:o}),B=o=>e["a"].post("goods.goods_unit/del",{id:o}),E=o=>e["a"].post("/goods.goods_unit/edit",o),F=o=>e["a"].get("goods.goods_comment/lists",{params:o}),H=o=>e["a"].post("goods.goods_comment/del",o),I=o=>e["a"].post("goods.goods_comment/reply",o),K=o=>e["a"].post("/goods.goods_comment/status",o),M=o=>e["a"].get("goods.goods_comment_assistant/lists",{params:o}),Q=o=>e["a"].post("goods.goods_comment_assistant/add",o),R=o=>e["a"].get("/goods.goods_activity/lists",{params:o}),U=o=>e["a"].post("/goods.goods_activity/status",o)},a17e:function(o,t,s){"use strict";s.r(t);var e=function(){var o=this,t=o._self._c;o._self._setupProxy;return t("div",{staticClass:"ls-category"},[t("div",{staticClass:"ls-category__top ls-card"},[t("el-alert",{attrs:{title:"温馨提示：1.用户可以根据商品分类搜索商品，请正确创建分类；2.点击分类名称前符号，显示该商品分类的下级分类。",type:"info","show-icon":"",closable:!1}})],1),t("div",{staticClass:"ls-category__content m-t-16 ls-card"},[t("div",{staticClass:"ls-content__btns"},[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return o.$router.push("/goods/category_edit")}}},[o._v("新增商品分类")])],1),t("div",{directives:[{name:"loading",rawName:"v-loading",value:o.pager.loading,expression:"pager.loading"}],staticClass:"ls-content__table m-t-16"},[t("u-table",{ref:"plTreeTable",attrs:{data:o.pager.lists,"fixed-columns-roll":"",height:800,treeConfig:{children:"sons",expandAll:!1},"use-virtual":"","row-id":"id",border:!1,size:"mini"}},[t("u-table-column",{attrs:{"tree-node":!0,prop:"name",label:"分类名称"}}),t("u-table-column",{attrs:{label:"分类图片"},scopedSlots:o._u([{key:"default",fn:function(o){return[t("div",{staticClass:"flex"},[t("el-image",{staticStyle:{width:"58px",height:"58px"},attrs:{fit:"cover",src:o.row.image}})],1)]}}])}),t("u-table-column",{attrs:{label:"是否显示"},scopedSlots:o._u([{key:"default",fn:function(s){return[t("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(t){return o.handleStatus(t,s.row.id)}},model:{value:s.row.is_show,callback:function(t){o.$set(s.row,"is_show",t)},expression:"scope.row.is_show"}})]}}])}),t("u-table-column",{attrs:{label:"是否下载商品"},scopedSlots:o._u([{key:"default",fn:function(s){return[t("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(t){return o.handleDownGoods(t,s.row.id)}},model:{value:s.row.is_down_good,callback:function(t){o.$set(s.row,"is_down_good",t)},expression:"scope.row.is_down_good"}})]}}])}),t("u-table-column",{attrs:{prop:"sort",label:"排序"}}),t("u-table-column",{attrs:{label:"操作"},scopedSlots:o._u([{key:"default",fn:function(s){return[t("div",{staticClass:"flex"},[t("div",[t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return o.$router.push({path:"/goods/category_edit",query:{id:s.row.id}})}}},[o._v("编辑")]),t("el-divider",{attrs:{direction:"vertical"}})],1),t("ls-dialog",{attrs:{content:`确定删除：${s.row.name}？请谨慎操作。`},on:{confirm:function(t){return o.handleDelete(s.row.id)}}},[t("el-button",{attrs:{slot:"trigger",type:"text",size:"small"},slot:"trigger"},[o._v("删除")])],1)],1)]}}])})],1)],1)])])},n=[],a=s("9ab4"),d=s("6ddb"),r=s("1b40"),i=s("0a6d"),u=s("3c50"),c=s("14c6");let g=class extends r["e"]{constructor(){super(...arguments),this.pager=new d["a"]}getList(){this.pager.request({callback:c["o"],params:{pager_type:1}}).then(o=>{})}handleStatus(o,t){Object(c["p"])({id:t,is_show:o}).then(()=>{this.getList()})}handleDownGoods(o,t){Object(c["m"])({id:t,is_down_good:o}).then(()=>{this.getList()})}handleDelete(o){Object(c["k"])(o).then(()=>{this.getList()})}created(){this.getList()}};g=Object(a["a"])([Object(r["a"])({components:{LsDialog:i["a"],LsPagination:u["a"]}})],g);var l=g,p=l,f=s("2877"),_=Object(f["a"])(p,e,n,!1,null,"a704a150",null);t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-857ba1fe.ed1cf082.js.map