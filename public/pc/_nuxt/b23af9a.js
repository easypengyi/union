(window.webpackJsonp=window.webpackJsonp||[]).push([[42,5,13,19,20],{438:function(t,e,r){"use strict";var n=r(19),o=r(2),c=r(3),l=r(135),d=r(28),f=r(20),m=r(273),h=r(53),v=r(134),x=r(272),_=r(4),w=r(90).f,y=r(44).f,k=r(27).f,S=r(439),N=r(440).trim,C="Number",E=o.Number,I=E.prototype,z=o.TypeError,M=c("".slice),T=c("".charCodeAt),P=function(t){var e=x(t,"number");return"bigint"==typeof e?e:$(e)},$=function(t){var e,r,n,o,c,l,d,code,f=x(t,"number");if(v(f))throw z("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=N(f),43===(e=T(f,0))||45===e){if(88===(r=T(f,2))||120===r)return NaN}else if(48===e){switch(T(f,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(l=(c=M(f,2)).length,d=0;d<l;d++)if((code=T(c,d))<48||code>o)return NaN;return parseInt(c,n)}return+f};if(l(C,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var A,O=function(t){var e=arguments.length<1?0:E(P(t)),r=this;return h(I,r)&&_((function(){S(r)}))?m(Object(e),r,O):e},F=n?w(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;F.length>j;j++)f(E,A=F[j])&&!f(O,A)&&k(O,A,y(E,A));O.prototype=I,I.constructor=O,d(o,C,O)}},439:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},440:function(t,e,r){var n=r(3),o=r(26),c=r(15),l=r(441),d=n("".replace),f="["+l+"]",m=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),v=function(t){return function(e){var r=c(o(e));return 1&t&&(r=d(r,m,"")),2&t&&(r=d(r,h,"")),r}};t.exports={start:v(1),end:v(2),trim:v(3)}},441:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},442:function(t,e,r){var content=r(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("3181fc86",content,!0,{sourceMap:!1})},443:function(t,e,r){"use strict";r(18),r(60);e.a={head:function(){var t=this.$store.getters.headerMeta;return{title:t.title,link:[{rel:"icon",type:"image/x-icon",href:t.ico}],meta:[{hid:"description",name:"description",content:t.description},{hid:"keywords",name:"keywords",content:t.keywords}]}}}},444:function(t,e,r){"use strict";r.r(e);r(438),r(38),r(274);var n={data:function(){return{priceSlice:{}}},components:{},props:{firstSize:{type:Number,default:14},secondSize:{type:Number,default:14},color:{type:String},weight:{type:[String,Number],default:400},price:{type:[String,Number],default:""},showSubscript:{type:Boolean,default:!0},subscriptSize:{type:Number,default:14},lineThrough:{type:Boolean,default:!1}},created:function(){this.priceFormat()},watch:{price:function(t){this.priceFormat()}},methods:{priceFormat:function(){var t=this.price,e={};null!==t&&(t=parseFloat(t),t=String(t).split("."),e.first=t[0],e.second=t[1],this.priceSlice=e)}}},o=(r(445),r(10)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{class:(t.lineThrough?"line-through":"")+"price-format",style:{color:t.color,"font-weight":t.weight}},[t.showSubscript?r("span",{style:{"font-size":t.subscriptSize+"px","margin-right":"1px"}},[t._v("¥")]):t._e(),t._v(" "),r("span",{style:{"font-size":t.firstSize+"px","margin-right":"1px"}},[t._v(t._s(t.priceSlice.first))]),t._v(" "),t.priceSlice.second?r("span",{style:{"font-size":t.secondSize+"px"}},[t._v("."+t._s(t.priceSlice.second))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},445:function(t,e,r){"use strict";r(442)},446:function(t,e,r){var n=r(16)(!1);n.push([t.i,".price-format{display:flex;align-items:baseline}",""]),t.exports=n},447:function(t,e,r){var content=r(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("b58c77bc",content,!0,{sourceMap:!1})},449:function(t,e,r){"use strict";r(447)},450:function(t,e,r){var n=r(16)(!1);n.push([t.i,".null-data[data-v-847c0814]{padding:100px}.null-data .img-null[data-v-847c0814]{width:150px;height:150px}",""]),t.exports=n},451:function(t,e,r){"use strict";r.r(e);var n={components:{},props:{img:{type:String},text:{type:String,default:"暂无数据"},imgStyle:{type:String,default:""}},methods:{}},o=(r(449),r(10)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-white flex-col col-center null-data"},[r("img",{staticClass:"img-null",style:t.imgStyle,attrs:{src:t.img,alt:""}}),t._v(" "),r("div",{staticClass:"muted m-t-8"},[t._v(t._s(t.text))])])}),[],!1,null,"847c0814",null);e.default=component.exports},452:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return o}));r(34),r(38),r(274),r(93),r(61),r(11),r(45),r(63),r(46),r(18),r(60),r(64),r(47);var n=function(t){var time=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,e=arguments.length>2?arguments[2]:void 0,r=new Date(0).getTime();return function(){var n=(new Date).getTime();if(n-r>time){for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];t.apply(e,c),r=n}}};var o=function(t){var e=document.createElement("input");e.setAttribute("value",t),document.body.appendChild(e),e.select();try{if(document.execCommand("copy"))return Promise.resolve();throw new Error}catch(t){return Promise.reject(t)}finally{document.body.removeChild(e)}}},453:function(t,e,r){var content=r(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("38f78140",content,!0,{sourceMap:!1})},456:function(t,e,r){var content=r(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("85990eec",content,!0,{sourceMap:!1})},460:function(t,e,r){"use strict";var n=r(6),o=r(275);n({target:"String",proto:!0,forced:r(276)("link")},{link:function(t){return o(this,"a","href",t)}})},461:function(t,e,r){"use strict";r(453)},462:function(t,e,r){var n=r(16)(!1);n.push([t.i,".ad-item[data-v-0bdad4aa]{width:100%;height:100%;cursor:pointer}",""]),t.exports=n},467:function(t,e,r){"use strict";r.r(e);r(460),r(452);var n={components:{},props:{item:{type:Object,default:function(){return{}}}},methods:{goPage:function(t){var e=t.link,r=e.type,path=e.path,n=e.params;switch(r){case"goods":case"seckill":case"category":path+="?id=".concat(n.id),this.$router.push({path:path});break;default:this.$router.push({path:path})}}}},o=(r(461),r(10)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ad-item",on:{click:function(e){return e.stopPropagation(),t.goPage(t.item)}}},[r("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.$getImageUri(t.item.url)}})],1)}),[],!1,null,"0bdad4aa",null);e.default=component.exports},469:function(t,e,r){"use strict";r(456)},470:function(t,e,r){var n=r(16)(!1);n.push([t.i,".goods-list[data-v-3b1b8184]{align-items:stretch}.goods-list .goods-item[data-v-3b1b8184]{display:block;box-sizing:border-box;width:224px;height:310px;margin-bottom:16px;padding:12px 12px 16px;border-radius:4px;transition:all .2s}.goods-list .goods-item[data-v-3b1b8184]:hover{transform:translateY(-8px);box-shadow:0 0 6px rgba(0,0,0,.1)}.goods-list .goods-item .goods-img[data-v-3b1b8184]{width:200px;height:200px}.goods-list .goods-item .name[data-v-3b1b8184]{margin-bottom:10px;height:40px;line-height:20px}.goods-list .goods-item .seckill .btn[data-v-3b1b8184]{padding:4px 12px;border-radius:4px;border:1px solid transparent}.goods-list .goods-item .seckill .btn.not-start[data-v-3b1b8184]{border-color:#ff2c3c;color:#ff2c3c;background-color:transparent}.goods-list .goods-item .seckill .btn.end[data-v-3b1b8184]{background-color:#e5e5e5;color:#fff}",""]),t.exports=n},478:function(t,e,r){"use strict";r.r(e);r(438);var n={props:{list:{type:Array,default:function(){return[]}},num:{type:Number,default:5},type:{type:String},status:{type:Number}},watch:{list:{immediate:!0,handler:function(t){}}},computed:{getSeckillText:function(){switch(this.status){case 0:return"未开始";case 1:return"立即抢购";case 2:return"已结束"}}},methods:{goTo:function(t){"seckill"==this.type?this.$router.push("/goods_details_seckill?id="+t.id):this.$router.push("/goods_details?id="+t.id)}}},o=(r(469),r(10)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"goods-list flex flex-wrap"},t._l(t.list,(function(e,n){return r("div",{key:n,staticClass:"goods-item bg-white pointer",style:{marginRight:(n+1)%t.num==0?0:"14px"},on:{click:function(r){return t.goTo(e)}}},[r("el-image",{staticClass:"goods-img",attrs:{lazy:"",src:e.image,alt:""}}),t._v(" "),r("div",{staticClass:"name line-2"},[t._v(t._s(e.name))]),t._v(" "),"seckill"==t.type?r("div",{staticClass:"seckill flex row-between"},[r("div",{staticClass:"primary flex"},[t._v("\n        秒杀价\n        "),r("price-formate",{attrs:{price:e.min_seckill_price,"first-size":18}})],1),t._v(" "),r("div",{class:["btn bg-primary white",{"not-start":0==t.status,end:2==t.status}]},[t._v(t._s(t.getSeckillText))])]):r("div",{staticClass:"flex row-between flex-wrap"},[r("div",{staticClass:"price flex"},[r("div",{staticClass:"primary m-r-8"},[r("price-formate",{attrs:{price:e.sell_price,"first-size":16}})],1),t._v(" "),r("div",{staticClass:"muted sm line-through"},[r("price-formate",{attrs:{price:e.lineation_price}})],1)]),t._v(" "),r("div",{staticClass:"muted xs"},[t._v(t._s(e.sales_num)+"人购买")])])],1)})),0)}),[],!1,null,"3b1b8184",null);e.default=component.exports;installComponents(component,{PriceFormate:r(444).default})},479:function(t,e,r){t.exports=r.p+"img/goods_null.38f1689.png"},534:function(t,e,r){var content=r(588);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("72c5a8ab",content,!0,{sourceMap:!1})},587:function(t,e,r){"use strict";r(534)},588:function(t,e,r){var n=r(16)(!1);n.push([t.i,".seckill .banner img[data-v-5acc60bf]{width:100%;display:block}.seckill .time-list[data-v-5acc60bf]{background-color:#414141}.seckill .time-list .swiper[data-v-5acc60bf]{--swiper-navigation-size:20px;--swiper-navigation-color:#fff}.seckill .time-list .swiper .swiper-button-next[data-v-5acc60bf],.seckill .time-list .swiper .swiper-button-prev[data-v-5acc60bf]{top:0;width:25px;height:100%;margin-top:0;background-size:12px 22px}.seckill .time-list .swiper .swiper-button-prev[data-v-5acc60bf]{left:0}.seckill .time-list .swiper .swiper-button-next[data-v-5acc60bf]{right:0}.seckill .time-list .swiper .swiper-item[data-v-5acc60bf]{cursor:pointer;height:60px;width:120px}.seckill .time-list .swiper .swiper-item.active[data-v-5acc60bf]{background-color:#ff2c3c}.seckill .time-list .swiper .swiper-item.active .time-status[data-v-5acc60bf]{background-color:#fff;color:#ff2c3c}.seckill .time-list .swiper .swiper-item .time-status[data-v-5acc60bf]{color:#ccc;border-radius:60px;padding:1px 8px}",""]),t.exports=n},660:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(52),{mixins:[r(443).a],data:function(){return{page:1,count:0,goodsList:[],hasData:!0,adData:{}}},created:function(){this.getGoods(),this.getPage()},methods:{changePage:function(t){this.page=t,this.getGoods()},getGoods:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.page,e.next=3,t.$get("seckill/lists",{params:{page_size:10,page_no:r}});case 3:n=e.sent,o=n.data,c=o.lists,l=o.count,1==n.code&&(t.goodsList=c,t.hasData=!!c.length,t.count=l);case 9:case"end":return e.stop()}}),e)})))()},getPage:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$get("Pc/getPage",{params:{type:3}});case 2:data=e.sent,console.log(data,"data"),1==data.code&&(t.adData=data.data);case 5:case"end":return e.stop()}}),e)})))()}},computed:{}}),c=(r(587),r(10)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"seckill"},[n("div",{staticClass:"banner m-t-16 flex-col"},[t.adData.content?n("ad-item",{attrs:{item:t.adData.content}}):t._e()],1),t._v(" "),n("div",{staticClass:"goods m-t-16"},[t.hasData?[n("goods-list",{attrs:{type:"seckill",list:t.goodsList,status:1}}),t._v(" "),t.count?n("div",{staticClass:"pagination flex row-center",staticStyle:{"padding-bottom":"38px"}},[n("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.count,"prev-text":"上一页","next-text":"下一页","hide-on-single-page":"","page-size":10},on:{"current-change":t.changePage}})],1):t._e()]:n("null-data",{attrs:{img:r(479),text:"暂无秒杀~"}})],2)])}),[],!1,null,"5acc60bf",null);e.default=component.exports;installComponents(component,{AdItem:r(467).default,GoodsList:r(478).default,NullData:r(451).default})}}]);