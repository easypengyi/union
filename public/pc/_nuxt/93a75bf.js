(window.webpackJsonp=window.webpackJsonp||[]).push([[13,20],{438:function(t,e,r){"use strict";var o=r(19),n=r(2),l=r(3),c=r(135),d=r(28),f=r(20),m=r(273),h=r(53),v=r(134),x=r(272),_=r(4),y=r(90).f,w=r(44).f,N=r(27).f,S=r(439),k=r(440).trim,I="Number",E=n.Number,C=E.prototype,z=n.TypeError,T=l("".slice),F=l("".charCodeAt),A=function(t){var e=x(t,"number");return"bigint"==typeof e?e:M(e)},M=function(t){var e,r,o,n,l,c,d,code,f=x(t,"number");if(v(f))throw z("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=k(f),43===(e=F(f,0))||45===e){if(88===(r=F(f,2))||120===r)return NaN}else if(48===e){switch(F(f,1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+f}for(c=(l=T(f,2)).length,d=0;d<c;d++)if((code=F(l,d))<48||code>n)return NaN;return parseInt(l,o)}return+f};if(c(I,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var O,R=function(t){var e=arguments.length<1?0:E(A(t)),r=this;return h(C,r)&&_((function(){S(r)}))?m(Object(e),r,R):e},$=o?y(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),V=0;$.length>V;V++)f(E,O=$[V])&&!f(R,O)&&N(R,O,w(E,O));R.prototype=C,C.constructor=R,d(n,I,R)}},439:function(t,e,r){var o=r(3);t.exports=o(1..valueOf)},440:function(t,e,r){var o=r(3),n=r(26),l=r(15),c=r(441),d=o("".replace),f="["+c+"]",m=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),v=function(t){return function(e){var r=l(n(e));return 1&t&&(r=d(r,m,"")),2&t&&(r=d(r,h,"")),r}};t.exports={start:v(1),end:v(2),trim:v(3)}},441:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},442:function(t,e,r){var content=r(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("3181fc86",content,!0,{sourceMap:!1})},444:function(t,e,r){"use strict";r.r(e);r(438),r(38),r(274);var o={data:function(){return{priceSlice:{}}},components:{},props:{firstSize:{type:Number,default:14},secondSize:{type:Number,default:14},color:{type:String},weight:{type:[String,Number],default:400},price:{type:[String,Number],default:""},showSubscript:{type:Boolean,default:!0},subscriptSize:{type:Number,default:14},lineThrough:{type:Boolean,default:!1}},created:function(){this.priceFormat()},watch:{price:function(t){this.priceFormat()}},methods:{priceFormat:function(){var t=this.price,e={};null!==t&&(t=parseFloat(t),t=String(t).split("."),e.first=t[0],e.second=t[1],this.priceSlice=e)}}},n=(r(445),r(10)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{class:(t.lineThrough?"line-through":"")+"price-format",style:{color:t.color,"font-weight":t.weight}},[t.showSubscript?r("span",{style:{"font-size":t.subscriptSize+"px","margin-right":"1px"}},[t._v("¥")]):t._e(),t._v(" "),r("span",{style:{"font-size":t.firstSize+"px","margin-right":"1px"}},[t._v(t._s(t.priceSlice.first))]),t._v(" "),t.priceSlice.second?r("span",{style:{"font-size":t.secondSize+"px"}},[t._v("."+t._s(t.priceSlice.second))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},445:function(t,e,r){"use strict";r(442)},446:function(t,e,r){var o=r(16)(!1);o.push([t.i,".price-format{display:flex;align-items:baseline}",""]),t.exports=o},456:function(t,e,r){var content=r(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("85990eec",content,!0,{sourceMap:!1})},469:function(t,e,r){"use strict";r(456)},470:function(t,e,r){var o=r(16)(!1);o.push([t.i,".goods-list[data-v-3b1b8184]{align-items:stretch}.goods-list .goods-item[data-v-3b1b8184]{display:block;box-sizing:border-box;width:224px;height:310px;margin-bottom:16px;padding:12px 12px 16px;border-radius:4px;transition:all .2s}.goods-list .goods-item[data-v-3b1b8184]:hover{transform:translateY(-8px);box-shadow:0 0 6px rgba(0,0,0,.1)}.goods-list .goods-item .goods-img[data-v-3b1b8184]{width:200px;height:200px}.goods-list .goods-item .name[data-v-3b1b8184]{margin-bottom:10px;height:40px;line-height:20px}.goods-list .goods-item .seckill .btn[data-v-3b1b8184]{padding:4px 12px;border-radius:4px;border:1px solid transparent}.goods-list .goods-item .seckill .btn.not-start[data-v-3b1b8184]{border-color:#ff2c3c;color:#ff2c3c;background-color:transparent}.goods-list .goods-item .seckill .btn.end[data-v-3b1b8184]{background-color:#e5e5e5;color:#fff}",""]),t.exports=o},478:function(t,e,r){"use strict";r.r(e);r(438);var o={props:{list:{type:Array,default:function(){return[]}},num:{type:Number,default:5},type:{type:String},status:{type:Number}},watch:{list:{immediate:!0,handler:function(t){}}},computed:{getSeckillText:function(){switch(this.status){case 0:return"未开始";case 1:return"立即抢购";case 2:return"已结束"}}},methods:{goTo:function(t){"seckill"==this.type?this.$router.push("/goods_details_seckill?id="+t.id):this.$router.push("/goods_details?id="+t.id)}}},n=(r(469),r(10)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"goods-list flex flex-wrap"},t._l(t.list,(function(e,o){return r("div",{key:o,staticClass:"goods-item bg-white pointer",style:{marginRight:(o+1)%t.num==0?0:"14px"},on:{click:function(r){return t.goTo(e)}}},[r("el-image",{staticClass:"goods-img",attrs:{lazy:"",src:e.image,alt:""}}),t._v(" "),r("div",{staticClass:"name line-2"},[t._v(t._s(e.name))]),t._v(" "),"seckill"==t.type?r("div",{staticClass:"seckill flex row-between"},[r("div",{staticClass:"primary flex"},[t._v("\n        秒杀价\n        "),r("price-formate",{attrs:{price:e.min_seckill_price,"first-size":18}})],1),t._v(" "),r("div",{class:["btn bg-primary white",{"not-start":0==t.status,end:2==t.status}]},[t._v(t._s(t.getSeckillText))])]):r("div",{staticClass:"flex row-between flex-wrap"},[r("div",{staticClass:"price flex"},[r("div",{staticClass:"primary m-r-8"},[r("price-formate",{attrs:{price:e.sell_price,"first-size":16}})],1),t._v(" "),r("div",{staticClass:"muted sm line-through"},[r("price-formate",{attrs:{price:e.lineation_price}})],1)]),t._v(" "),r("div",{staticClass:"muted xs"},[t._v(t._s(e.sales_num)+"人购买")])])],1)})),0)}),[],!1,null,"3b1b8184",null);e.default=component.exports;installComponents(component,{PriceFormate:r(444).default})}}]);