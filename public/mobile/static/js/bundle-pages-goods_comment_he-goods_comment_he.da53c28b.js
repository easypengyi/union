(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bundle-pages-goods_comment_he-goods_comment_he"],{"14cb":function(e,t,a){"use strict";var o=a("4f73"),n=a.n(o);n.a},1814:function(e,t,a){"use strict";var o=a("daa1"),n=a.n(o);n.a},"1dbd":function(e,t,a){"use strict";a.r(t);var o=a("9dbd"),n=a.n(o);for(var i in o)"default"!==i&&function(e){a.d(t,e,(function(){return o[e]}))}(i);t["default"]=n.a},"2cab":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return o}));var o={mescrollUni:a("fc25").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mescroll-uni",{ref:"mescrollRef",attrs:{top:e.top,height:e.height,up:e.upOption,down:e.downOption,bottom:e.bottom},on:{init:function(t){arguments[0]=t=e.$handleEvent(t),e.mescrollInit.apply(void 0,arguments)},down:function(t){arguments[0]=t=e.$handleEvent(t),e.downCallback.apply(void 0,arguments)},up:function(t){arguments[0]=t=e.$handleEvent(t),e.upCallback.apply(void 0,arguments)}}},[e._t("default")],2)},i=[]},"40ac":function(e,t,a){"use strict";a.r(t);var o=a("6ed5"),n=a.n(o);for(var i in o)"default"!==i&&function(e){a.d(t,e,(function(){return o[e]}))}(i);t["default"]=n.a},"4f73":function(e,t,a){var o=a("67b0");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("4f06").default;n("1beaf7f6",o,!0,{sourceMap:!1,shadowMode:!1})},"67b0":function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,"@charset \"UTF-8\";\n/* 颜色变量 */\n/** S Font's size **/\n/** E Font's size **/[data-v-eb725cd6]:export{red_theme:#ff2c3c;orange_theme:#f7971e;pink_theme:#fa444d;gold_theme:#e0a356;blue_theme:#2f80ed;green_theme:#2ec840}.u-empty[data-v-eb725cd6]{display:flex;flex-direction:row;flex-direction:column;justify-content:center;align-items:center;height:100%}.u-image[data-v-eb725cd6]{margin-bottom:%?20?%}.u-slot-wrap[data-v-eb725cd6]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:%?20?%}",""]),e.exports=t},"6ce0":function(e,t,a){"use strict";a.r(t);var o=a("6eba"),n=a("40ac");for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);a("1814");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"06c84da6",null,!1,o["a"],r);t["default"]=c.exports},"6eba":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return o}));var o={mescrollContain:a("b23d").default,uImage:a("9b1a").default,uRate:a("c50b").default,uEmpty:a("a3f7").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"goods-comment-user",class:e.themeName},[e.hasComment?a("v-uni-view",{staticClass:"header"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-text",[e._v("商品好评率")]),a("v-uni-text",{style:{color:e.themeColor}},[e._v(e._s(e.goodsPercent))])],1),a("v-uni-view",{staticClass:"nav"},[e._l(e.goodsCategory,(function(t,o){return[a("v-uni-view",{key:t.id+"_0",class:["nav-item",{"nav-item--active":t.id===e.goodsCategoryCurrent.id}],on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.changeCategory(t)}}},[a("v-uni-text",[e._v(e._s(t.name))]),a("v-uni-text",[e._v(e._s("("+t.count+")"))])],1)]}))],2)],1):e._e(),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.hasComment,expression:"hasComment"}],staticClass:"main"},[a("mescroll-contain",{ref:"mescroll",attrs:{height:"80%","up-option":{auto:!1},"down-option":{auto:!1}},on:{upcallback:function(t){arguments[0]=t=e.$handleEvent(t),e.upCallback.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"contain"},e._l(e.goodsCommentList,(function(t){return a("v-uni-view",{key:t.id,staticClass:"evaluate nr"},[a("v-uni-view",{staticClass:"flex"},[a("u-image",{attrs:{width:"70",height:"70",mode:"scaleToFill","border-radius":"50%",src:t.avatar}}),a("v-uni-text",{staticClass:"m-l-20 m-r-20"},[e._v(e._s(t.nickname))]),a("u-rate",{attrs:{current:t.goods_comment,"active-color":e.themeColor,disabled:!0}})],1),a("v-uni-view",{staticClass:"muted xs m-t-10"},[a("v-uni-text",[e._v(e._s(t.create_time))]),a("v-uni-text",{staticClass:"m-l-20"},[e._v(e._s(t.spec_value_str))])],1),a("v-uni-view",{staticClass:"m-t-16"},[e._v(e._s(t.comment))]),t.image?a("v-uni-view",{staticClass:"evaluate-images"},e._l(t.image,(function(o,n){return a("u-image",{key:o,staticClass:"m-r-16 m-t-16",attrs:{src:o,width:"200",height:"200",mode:"scaleToFill"},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.showCommentImage(t.image,n)}}})})),1):e._e(),t.reply?a("v-uni-view",{staticClass:"evaluate-reply"},[a("v-uni-text",{staticClass:"m-r-20 muted"},[e._v("商家回复:")]),a("v-uni-text",[e._v(e._s(t.reply))])],1):e._e()],1)})),1)],1)],1),a("u-empty",{attrs:{show:!e.hasComment,text:"暂无评价",src:"/static/images/empty/evaluate.png","icon-size":280,"margin-top":"280"}})],1)},i=[]},"6ed5":function(e,t,a){"use strict";var o=a("4ea4");a("99af"),a("4de4"),a("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var n=o(a("1da1")),i=o(a("2909")),r=a("905b"),s=null,c={name:"GoodsCommentHe",data:function(){return{goods_id:"",goodsPercent:"",goodsCategory:[],goodsCategoryCurrent:{},goodsCommentList:[],hasComment:!1}},methods:{initCommentCategory:function(){var e=this;return new Promise((function(t,a){(0,r.apiGoodsCommentCategory)({goods_id:e.goods_id}).then((function(a){var o,n;e.goodsPercent=null!==(o=a.percent)&&void 0!==o?o:"0%",e.goodsCategory=null!==(n=a.comment.filter((function(e){return e.count})))&&void 0!==n?n:[],e.goodsCategoryCurrent=e.goodsCategory[0],t(a)})).catch((function(e){a(e)}))}))},upCallback:function(e){var t=this,a=e.num,o=e.size;(0,r.apiGoodsCommentList)({id:this.goodsCategoryCurrent.id,goods_id:this.goods_id,page_no:a,page_size:o}).then((function(e){var o=e.lists,n=e.page_size,r=e.count;1===a&&(t.goodsCommentList=[]),t.goodsCommentList=[].concat((0,i.default)(t.goodsCommentList),(0,i.default)(o)),s.endBySize(n,r)})).catch((function(e){s.endBySize()}))},changeCategory:function(e){this.goodsCategoryCurrent=e,s.downCallback()},showCommentImage:function(e,t){uni.previewImage({urls:e,current:t})}},onLoad:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.$Route.query,t.prev=1,a.id){t.next=4;break}throw new Error;case 4:return e.goods_id=a.id,t.next=7,e.initCommentCategory().then((function(){e.hasComment=!!e.goodsCategory.length,e.hasComment&&e.$nextTick((function(){s.downCallback()}))}));case 7:t.next=14;break;case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0),e.$toast({title:"页面异常"}),setTimeout((function(){e.$Router.back()}),1200);case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))()},mounted:function(){s=this.$refs["mescroll"]}};t.default=c},"905b":function(e,t,a){"use strict";var o=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.apiBrandLists=t.apiGoodsTeamHistory=t.apiGoodsTeamPlace=t.apiGoodsTeamDetail=t.apiGoodsTeamList=t.apiGoodsCommentList=t.apiGoodsCommentCategory=t.apiGoodsCollectList=t.apiGoodsCollect=t.apiGoodsMarketing=t.apiGoodsCategory=t.apiSearchHistoryClear=t.apiSearchHistory=t.apiGoodsDetail=t.apiGoodsLists=void 0;var n=o(a("8164")),i=function(e){return n.default.get("goods/lists",{params:e})};t.apiGoodsLists=i;var r=function(e){return n.default.get("goods/detail",{params:e})};t.apiGoodsDetail=r;var s=function(){return n.default.get("goods/searchRecord")};t.apiSearchHistory=s;var c=function(){return n.default.post("goods/clearRecord")};t.apiSearchHistoryClear=c;var d=function(){return n.default.get("goodsCategory/lists")};t.apiGoodsCategory=d;var u=function(e){return n.default.get("goods/goodsMarketing",{params:e})};t.apiGoodsMarketing=u;var l=function(e){return n.default.post("collect/handleCollectgoods",e)};t.apiGoodsCollect=l;var f=function(e){return n.default.get("collect/lists",{params:e})};t.apiGoodsCollectList=f;var m=function(e){return n.default.get("goods_comment/commentCategory",{params:e})};t.apiGoodsCommentCategory=m;var v=function(e){return n.default.get("goods_comment/lists",{params:e})};t.apiGoodsCommentList=v;var p=function(e){return n.default.get("team/lists",{params:e})};t.apiGoodsTeamList=p;var g=function(e){return n.default.get("team/detail",{params:e})};t.apiGoodsTeamDetail=g;var h=function(e){return n.default.post("team/kaituan",e)};t.apiGoodsTeamPlace=h;var b=function(e){return n.default.get("team/record",{params:e})};t.apiGoodsTeamHistory=b;var y=function(e){return n.default.get("goods_brand/lists",{params:e})};t.apiBrandLists=y},"9dbd":function(e,t,a){"use strict";var o=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("4548")),i={name:"MescrollContain",mixins:[n.default],props:{height:{type:String},top:{type:String},bottom:{type:String},upOption:{type:Object,default:function(){return{}}},downOption:{type:Object,default:function(){return{}}}},methods:{downCallback:function(){this.mescroll&&this.mescroll.resetUpScroll()},upCallback:function(e){var t=e.num,a=e.size;this.$emit("upcallback",{num:t,size:a})},endErr:function(){this.mescroll.endErr()},endBySize:function(e,t){this.mescroll.endBySize(e,t)},endSuccess:function(e,t){this.mescroll.endBySize(e,t)}}};t.default=i},a3f7:function(e,t,a){"use strict";a.r(t);var o=a("de3c"),n=a("dd17");for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);a("14cb");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"eb725cd6",null,!1,o["a"],r);t["default"]=c.exports},b23d:function(e,t,a){"use strict";a.r(t);var o=a("2cab"),n=a("1dbd");for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);var r,s=a("f0c5"),c=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);t["default"]=c.exports},b53f:function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\n/* 颜色变量 */\n/** S Font\'s size **/\n/** E Font\'s size **/[data-v-06c84da6]:export{red_theme:#ff2c3c;orange_theme:#f7971e;pink_theme:#fa444d;gold_theme:#e0a356;blue_theme:#2f80ed;green_theme:#2ec840}.goods-comment-user[data-v-06c84da6]{display:flex;flex-direction:column;max-height:100vh;overflow:hidden}.header[data-v-06c84da6]{background-color:#fff}.header .title[data-v-06c84da6]{display:flex;align-items:center;height:%?80?%;padding:0 %?20?%;border-bottom:1px solid #e5e5e5;font-size:%?24?%;color:#666}.header .nav[data-v-06c84da6]{display:flex;flex-wrap:wrap;padding:%?20?%;font-size:%?24?%}.header .nav-item[data-v-06c84da6]{padding:%?8?% %?30?%;border-radius:60px;margin:%?10?% %?10?% 0 0;background-color:#f4f4f4}.header .nav-item--active[data-v-06c84da6]{color:#fff}.red_theme .header .nav-item--active[data-v-06c84da6]{background-color:#ff2c3c}.orange_theme .header .nav-item--active[data-v-06c84da6]{background-color:#f7971e}.pink_theme .header .nav-item--active[data-v-06c84da6]{background-color:#fa444d}.gold_theme .header .nav-item--active[data-v-06c84da6]{background-color:#e0a356}.blue_theme .header .nav-item--active[data-v-06c84da6]{background-color:#2f80ed}.green_theme .header .nav-item--active[data-v-06c84da6]{background-color:#2ec840}.main[data-v-06c84da6]{flex:1;margin-top:%?20?%;overflow:hidden}.main .evaluate[data-v-06c84da6]{padding:%?24?%;background-color:#fff}.main .evaluate[data-v-06c84da6]:nth-child(n+2){border-top:1px solid #e5e5e5}.main .evaluate-images[data-v-06c84da6]{display:flex;flex-wrap:wrap}.main .evaluate-reply[data-v-06c84da6]{position:relative;padding:%?30?% %?20?%;margin-top:%?30?%;border-radius:8px;font-size:%?28?%;background-color:#f6f6f6}.main .evaluate-reply[data-v-06c84da6]::after{position:absolute;top:calc(%?-20?% * 2);left:%?40?%;display:block;content:"";width:0;height:0;border-top:%?20?% solid transparent;border-right:%?20?% solid transparent;border-left:%?20?% solid transparent;border-bottom:%?20?% solid #f6f6f6}',""]),e.exports=t},daa1:function(e,t,a){var o=a("b53f");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("4f06").default;n("f362dfca",o,!0,{sourceMap:!1,shadowMode:!1})},dd17:function(e,t,a){"use strict";a.r(t);var o=a("f4cf"),n=a.n(o);for(var i in o)"default"!==i&&function(e){a.d(t,e,(function(){return o[e]}))}(i);t["default"]=n.a},de3c:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return o}));var o={uIcon:a("e466").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.show?a("v-uni-view",{staticClass:"u-empty",style:{marginTop:e.marginTop+"rpx"}},[a("u-icon",{attrs:{name:e.src?e.src:"empty-"+e.mode,"custom-style":e.iconStyle,label:e.text?e.text:e.icons[e.mode],"label-pos":"bottom","label-color":e.color,"label-size":e.fontSize,size:e.iconSize,color:e.iconColor,"margin-top":"14"}}),a("v-uni-view",{staticClass:"u-slot-wrap"},[e._t("bottom")],2)],1):e._e()},i=[]},f4cf:function(e,t,a){"use strict";a("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"u-empty",props:{src:{type:String,default:""},text:{type:String,default:""},color:{type:String,default:"#c0c4cc"},iconColor:{type:String,default:"#c0c4cc"},iconSize:{type:[String,Number],default:120},fontSize:{type:[String,Number],default:26},mode:{type:String,default:"data"},imgWidth:{type:[String,Number],default:120},imgHeight:{type:[String,Number],default:"auto"},show:{type:Boolean,default:!0},marginTop:{type:[String,Number],default:0},iconStyle:{type:Object,default:function(){return{}}}},data:function(){return{icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址",wifi:"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空"}}}};t.default=o}}]);