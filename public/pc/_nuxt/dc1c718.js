(window.webpackJsonp=window.webpackJsonp||[]).push([[33,6,23],{442:function(e,t,o){var content=o(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(17).default)("3181fc86",content,!0,{sourceMap:!1})},443:function(e,t,o){"use strict";o(18),o(60);t.a={head:function(){var e=this.$store.getters.headerMeta;return{title:e.title,link:[{rel:"icon",type:"image/x-icon",href:e.ico}],meta:[{hid:"description",name:"description",content:e.description},{hid:"keywords",name:"keywords",content:e.keywords}]}}}},444:function(e,t,o){"use strict";o.r(t);o(438),o(38),o(274);var r={data:function(){return{priceSlice:{}}},components:{},props:{firstSize:{type:Number,default:14},secondSize:{type:Number,default:14},color:{type:String},weight:{type:[String,Number],default:400},price:{type:[String,Number],default:""},showSubscript:{type:Boolean,default:!0},subscriptSize:{type:Number,default:14},lineThrough:{type:Boolean,default:!1}},created:function(){this.priceFormat()},watch:{price:function(e){this.priceFormat()}},methods:{priceFormat:function(){var e=this.price,t={};null!==e&&(e=parseFloat(e),e=String(e).split("."),t.first=e[0],t.second=e[1],this.priceSlice=t)}}},n=(o(445),o(10)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",{class:(e.lineThrough?"line-through":"")+"price-format",style:{color:e.color,"font-weight":e.weight}},[e.showSubscript?o("span",{style:{"font-size":e.subscriptSize+"px","margin-right":"1px"}},[e._v("¥")]):e._e(),e._v(" "),o("span",{style:{"font-size":e.firstSize+"px","margin-right":"1px"}},[e._v(e._s(e.priceSlice.first))]),e._v(" "),e.priceSlice.second?o("span",{style:{"font-size":e.secondSize+"px"}},[e._v("."+e._s(e.priceSlice.second))]):e._e()])}),[],!1,null,null,null);t.default=component.exports},445:function(e,t,o){"use strict";o(442)},446:function(e,t,o){var r=o(16)(!1);r.push([e.i,".price-format{display:flex;align-items:baseline}",""]),e.exports=r},457:function(e,t,o){"use strict";var r=o(6),n=o(94).find,d=o(187),c="find",l=!0;c in[]&&Array(1).find((function(){l=!1})),r({target:"Array",proto:!0,forced:l},{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),d(c)},458:function(e,t,o){var content=o(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(17).default)("a78255d0",content,!0,{sourceMap:!1})},459:function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));var r=o(137);var n=o(189),d=o(95);function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||Object(n.a)(e)||Object(d.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},471:function(e,t,o){e.exports=o.p+"img/coupons_img_receive.d691393.png"},472:function(e,t,o){"use strict";o(458)},473:function(e,t,o){var r=o(16),n=o(188),d=o(474),c=o(475),l=r(!1),f=n(d),h=n(c);l.push([e.i,".coupons-list[data-v-775e57e6]{padding:0 18px;flex-wrap:wrap;position:relative}.coupons-list .item[data-v-775e57e6]{margin-bottom:20px;margin-right:16px;position:relative;cursor:pointer}.coupons-list .item .info[data-v-775e57e6]{padding:0 10px;background:url("+f+") no-repeat;width:240px;height:80px;background-size:100%}.coupons-list .item .info.gray[data-v-775e57e6]{background-image:url("+h+")}.coupons-list .item .info .info-hd[data-v-775e57e6]{overflow:hidden}.coupons-list .item .tips[data-v-775e57e6]{position:relative;background-color:#f2f2f2;height:30px;padding:0 8px}.coupons-list .item .tips .tips-con[data-v-775e57e6]{width:100%;left:0;background-color:#f2f2f2;position:absolute;top:30px;padding:10px;z-index:99}.coupons-list .item .receice[data-v-775e57e6]{position:absolute;top:0;right:0;width:58px;height:45px}.coupons-list .item .choose[data-v-775e57e6]{position:absolute;top:0;right:0;background-color:#ffe72c;color:#ff2c3c;padding:1px 5px}.coupons-list .more[data-v-775e57e6]{position:absolute;bottom:20px;cursor:pointer;right:30px}",""]),e.exports=l},474:function(e,t,o){e.exports=o.p+"img/bg_coupon_s.3f57cfd.png"},475:function(e,t,o){e.exports=o.p+"img/bg_coupon.b22691e.png"},477:function(e,t,o){"use strict";o.r(t);o(23),o(18),o(22),o(29),o(30);var r=o(459),n=o(8),d=o(9),c=(o(52),o(438),o(11),o(21),o(65),o(12));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={props:{list:{type:Array,default:function(){return[]}},type:{type:Number},showMore:{type:Boolean,default:!1}},data:function(){return{showTips:[],couponsList:[],id:"",isMore:!1}},methods:f(f({},Object(c.b)(["getPublicData"])),{},{onHandle:function(e){switch(this.id=e,this.type){case 0:case 1:case 2:break;case 3:this.getCoupon();break;case 4:this.selectId==e&&(this.id=""),this.$emit("use",this.id),this.selectId=this.id}},getCoupon:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$post("coupon/receive",{id:e.id});case 2:o=t.sent,r=o.msg,1==o.code&&(e.$message({message:r,type:"success"}),e.getPublicData(),e.$emit("reflash"));case 6:case"end":return t.stop()}}),t)})))()},onShowTips:function(e){var t=this.showTips;this.showTips[e]=t[e]?0:1,this.showTips=Object.assign([],this.showTips)},changeShow:function(){var e=this;this.isMore=!this.isMore,this.list.forEach((function(t,o){t.isShow=!0,!e.isMore&&o>=4&&(t.isShow=!1)})),this.couponsList=Object(r.a)(this.list)}}),watch:{list:{handler:function(e){var t=this;e.length&&4==this.type&&(this.id=e[0].id,this.selectId=this.id,this.$emit("use",this.id));var o=e.map((function(e){return 0}));this.showTips=o,this.list.forEach((function(e,o){e.isShow=!0,t.showMore&&o>=4&&(e.isShow=!1)})),this.couponsList=this.list},immediate:!0,deep:!0}}},v=(o(472),o(10)),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"coupons-list flex"},[e._l(e.couponsList,(function(t,n){return[r("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"item.isShow"}],key:n,staticClass:"item",on:{"!click":function(o){return e.onHandle(t.id)}}},[r("div",{class:["info white",{gray:2==e.type||1==e.type||t.is_get}]},[r("div",{staticClass:"info-hd flex"},[r("div",[r("price-formate",{attrs:{price:t.money,"first-size":38,"second-size":38}})],1),e._v(" "),r("div",{staticClass:"m-l-8 flex-1"},[r("div",{staticClass:"line-1"},[e._v(e._s(t.name))]),e._v(" "),r("div",{staticClass:"xs line-1"},[e._v(e._s(t.condition||t.condition_tips))])])]),e._v(" "),r("div",{staticClass:"info-time xs"},[e._v(e._s(t.effective_time||t.use_time_tips))])]),e._v(" "),r("div",{staticClass:"tips flex row-between",on:{click:function(t){return t.stopPropagation(),e.onShowTips(n)}}},[r("div",{staticClass:"muted xs"},[e._v(e._s(t.use_scene||t.goods_tips))]),e._v(" "),t.tips?r("div",[r("i",{class:e.showTips[n]?"el-icon-arrow-up":"el-icon-arrow-down"}),e._v(" "),t.tips&&e.showTips[n]?r("div",{staticClass:"tips-con xs lighter"},[e._v("\n                        "+e._s(t.tips)+"\n                    ")]):e._e()]):e._e(),e._v(" "),3!=e.type||t.is_get?e._e():r("div",{staticClass:"primary sm"},[e._v("\n                    立即领取\n                ")])]),e._v(" "),t.is_get?r("img",{staticClass:"receice",attrs:{src:o(471),alt:""}}):e._e(),e._v(" "),4==e.type&&e.id==t.id?r("div",{staticClass:"choose xs"},[e._v("已选择")]):e._e()])]})),e._v(" "),e.showMore&&e.list.length>4?r("div",{staticClass:"more muted",on:{click:e.changeShow}},[e._v("\n        "+e._s(e.isMore?"收起":"更多")+"\n        "),r("i",{class:e.isMore?"el-icon-arrow-up":"el-icon-arrow-down"})]):e._e()],2)}),[],!1,null,"775e57e6",null);t.default=component.exports;installComponents(component,{PriceFormate:o(444).default})},480:function(e,t,o){var content=o(501);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(17).default)("ad2a7c86",content,!0,{sourceMap:!1})},481:function(e,t,o){var content=o(503);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(17).default)("fa5fba7c",content,!0,{sourceMap:!1})},500:function(e,t,o){"use strict";o(480)},501:function(e,t,o){var r=o(16)(!1);r.push([e.i,'.address-list[data-v-327f9201]  .el-dialog__body{height:460px;overflow-y:auto}.address-list .list[data-v-327f9201]{margin:0 auto;width:800px}.address-list .list .item[data-v-327f9201]{position:relative;cursor:pointer;height:100px;padding:16px 150px 16px 20px;border:1px solid hsla(0,0%,89.8%,.89804);border-radius:2px}.address-list .list .item.active[data-v-327f9201]{border-color:#ff2c3c}.address-list .list .item.disabled[data-v-327f9201]:before{z-index:9;position:absolute;top:0;left:0;right:0;bottom:0;display:block;content:"";width:100%;height:100%;background-color:hsla(0,0%,100%,.5)}.address-list .list .item .oprate[data-v-327f9201]{position:absolute;right:20px;bottom:9px}.address-list .dialog-footer[data-v-327f9201]{text-align:center}.address-list .dialog-footer .el-button[data-v-327f9201]{width:160px}',""]),e.exports=r},502:function(e,t,o){"use strict";o(481)},503:function(e,t,o){var r=o(16)(!1);r.push([e.i,".address-list[data-v-f52f00f0]  .el-dialog__body{height:460px;overflow-y:auto}.address-list .list[data-v-f52f00f0]{margin:0 auto;width:800px}.address-list .list .item[data-v-f52f00f0]{position:relative;cursor:pointer;height:100px;padding:16px 150px 16px 20px;border:1px solid hsla(0,0%,89.8%,.89804);border-radius:2px}.address-list .list .item.active[data-v-f52f00f0]{border-color:#ff2c3c}.address-list .list .item .oprate[data-v-f52f00f0]{position:absolute;right:20px;bottom:9px}.address-list .dialog-footer[data-v-f52f00f0]{text-align:center}.address-list .dialog-footer .el-button[data-v-f52f00f0]{width:160px}",""]),e.exports=r},524:function(e,t,o){"use strict";o.r(t);o(457),o(11);var r={props:{value:{type:Boolean,default:!1},list:{type:Array,require:!0}},data:function(){return{showDialog:!1,selectId:""}},methods:{onConfirm:function(){var e=this.selectId,t=this.list.find((function(t){return t.id===e}));this.$emit("confirm",t),this.showDialog=!1},onSelectShop:function(e){if(!(1*e.business_status))return this.$message.error("不在营业中");this.selectId=e.id},loadShopList:function(){console.log("Loading Shopping ..."),this.$emit("load",this.selectId)}},watch:{value:function(e){this.showDialog=e},showDialog:function(e){this.$emit("input",e)},list:function(data){var e;this.selectId=null==data||null===(e=data[0])||void 0===e?void 0:e.id}}},n=(o(500),o(10)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"address-list"},[o("el-dialog",{attrs:{title:"更换地址",visible:e.showDialog,width:"900px"},on:{"update:visible":function(t){e.showDialog=t}}},[o("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadShopList,expression:"loadShopList"}],staticClass:"list black infinite-list",staticStyle:{overflow:"auto"}},e._l(e.list,(function(t){return o("div",{key:t.id,class:["item m-b-16",{active:t.id==e.selectId},{disabled:!t.business_status}],on:{click:function(o){return e.onSelectShop(t)}}},[o("div",[o("span",{staticClass:"bold"},[e._v(e._s(t.name))]),e._v(" "),o("span",{staticClass:"muted ml10"},[o("i",{staticClass:"el-icon-position"}),e._v("\n            "+e._s(t.distance)+"\n          ")])]),e._v(" "),o("div",{staticClass:"lighter mt8"},[e._v(e._s(t.shop_address))]),e._v(" "),o("div",{staticClass:"muted mt8"},[o("i",{staticClass:"el-icon-time"}),e._v(" "),o("span",[e._v(e._s(t.business_start_time+"-"+t.business_end_time))])])])})),0),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:e.onConfirm}},[e._v("确认")]),e._v(" "),o("el-button",{on:{click:function(t){e.showDialog=!1}}},[e._v("取消")])],1)])],1)}),[],!1,null,"327f9201",null);t.default=component.exports},529:function(e,t,o){var content=o(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(17).default)("5447f0c2",content,!0,{sourceMap:!1})},567:function(e,t,o){"use strict";o.r(t);var r=o(8),n=(o(52),{components:{},props:{value:{type:Boolean,default:!1}},data:function(){return{showDialog:!1,showAddressAdd:!1,addressList:[],selectId:0,editId:""}},methods:{getAddress:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var o,code,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$get("user_address/lists");case 2:o=t.sent,code=o.code,data=o.data,1==code&&(e.addressList=data);case 6:case"end":return t.stop()}}),t)})))()},setDefault:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var r,code,n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.$post("user_address/setDefault",{id:e});case 2:r=o.sent,code=r.code,r.data,n=r.msg,1==code&&(t.$message({message:n,type:"success"}),t.getAddress());case 7:case"end":return o.stop()}}),o)})))()},onConfirm:function(){this.$emit("confirm",this.selectId),this.showDialog=!1}},watch:{value:function(e){this.showDialog=e,1==e&&this.getAddress()},showDialog:function(e){this.$emit("input",e)}}}),d=(o(502),o(10)),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"address-list"},[o("el-dialog",{attrs:{title:"更换地址",visible:e.showDialog,width:"900px"},on:{"update:visible":function(t){e.showDialog=t}}},[o("div",{staticClass:"list black"},e._l(e.addressList,(function(t,r){return o("div",{key:r,class:["item m-b-16",{active:t.id==e.selectId}],on:{click:function(o){e.selectId=t.id}}},[o("div",[o("span",{staticClass:"bold"},[e._v(e._s(t.contact))]),e._v("\n          "+e._s(t.telephone)+"\n          "),t.is_default?o("el-tag",{attrs:{size:"mini",type:"warning",effect:"dark"}},[e._v("默认")]):e._e()],1),e._v(" "),o("div",{staticClass:"lighter m-t-8"},[e._v("\n          "+e._s(t.province)+" "+e._s(t.city)+" "+e._s(t.district)+"\n          "+e._s(t.address)+"\n        ")]),e._v(" "),o("div",{staticClass:"oprate lighter flex"},[o("div",{staticClass:"m-r-16",on:{click:function(o){o.stopPropagation(),e.editId=t.id,e.showAddressAdd=!0}}},[e._v("\n            修改\n          ")]),e._v(" "),o("div",{on:{click:function(o){return o.stopPropagation(),e.setDefault(t.id)}}},[e._v("设为默认")])])])})),0),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:e.onConfirm}},[e._v("确认")]),e._v(" "),o("el-button",{on:{click:function(t){e.showDialog=!1}}},[e._v("取消")])],1)]),e._v(" "),o("address-add",{attrs:{aid:e.editId},on:{success:e.getAddress},model:{value:e.showAddressAdd,callback:function(t){e.showAddressAdd=t},expression:"showAddressAdd"}})],1)}),[],!1,null,"f52f00f0",null);t.default=component.exports;installComponents(component,{AddressAdd:o(496).default})},576:function(e,t,o){"use strict";o(529)},577:function(e,t,o){var r=o(16)(!1);r.push([e.i,'.confirm-order[data-v-8388eaea]{padding:16px 0}.confirm-order .title[data-v-8388eaea]{padding:12px 20px;font-weight:700}.confirm-order .title>i[data-v-8388eaea]{cursor:pointer}.confirm-order .contact[data-v-8388eaea]{padding:10px 20px 22px}.confirm-order .contact-item[data-v-8388eaea]{display:flex;align-items:center;height:36px}.confirm-order .contact-item-label[data-v-8388eaea]{width:72px;color:#888}.confirm-order .order-hd .address[data-v-8388eaea]{padding:10px 20px 22px}.confirm-order .order-hd .address .address-con[data-v-8388eaea]{position:relative;cursor:pointer;width:800px;height:100px;padding:16px 150px 16px 20px;border:1px solid #ff2c3c;border-radius:2px}.confirm-order .order-hd .address .address-con:hover .oprate[data-v-8388eaea]{display:flex}.confirm-order .order-hd .address .address-con .oprate[data-v-8388eaea]{display:none;position:absolute;right:20px;bottom:9px}.confirm-order .order-hd .address .address-add[data-v-8388eaea]{cursor:pointer;width:320px;height:100px;border:1px dashed hsla(0,0%,89.8%,.89804)}.confirm-order .order-con .goods[data-v-8388eaea]{border-bottom:1px dashed hsla(0,0%,89.8%,.89804)}.confirm-order .order-con .goods .goods-hd[data-v-8388eaea]{height:40px;margin:0 20px}.confirm-order .order-con .goods .goods-list .item[data-v-8388eaea]{padding:10px 20px}.confirm-order .order-con .goods .goods-list .item-disabled[data-v-8388eaea]{position:relative}.confirm-order .order-con .goods .goods-list .item-disabled[data-v-8388eaea]:before{z-index:9;position:absolute;top:0;left:0;bottom:0;right:0;height:100%;display:block;content:"";background-color:hsla(0,0%,100%,.5)}.confirm-order .order-con .goods .info[data-v-8388eaea]{width:500px}.confirm-order .order-con .goods .info .pictrue[data-v-8388eaea]{margin-right:10px}.confirm-order .order-con .goods .info .pictrue .el-image[data-v-8388eaea]{width:72px;height:72px}.confirm-order .order-con .goods .info .name[data-v-8388eaea]{margin-bottom:10px}.confirm-order .order-con .goods .info .delivery-support[data-v-8388eaea]{font-size:12px;padding:4px 15px;border-radius:60px;margin-left:20px;background-color:#f4f4f4;color:#666}.confirm-order .order-con .goods .price[data-v-8388eaea]{width:200px}.confirm-order .order-con .goods .num[data-v-8388eaea]{width:250px}.confirm-order .order-con .goods .money[data-v-8388eaea]{width:200px}.confirm-order .order-con .input .textarea[data-v-8388eaea]{margin:0 20px;width:1000px}.confirm-order .order-con .integral .check-box[data-v-8388eaea]{padding:0 20px 12px}.confirm-order .order-footer[data-v-8388eaea]{margin-top:2px;padding:25px 20px;justify-content:flex-end}.confirm-order .order-footer .money>div[data-v-8388eaea]{text-align:right}.confirm-order .order-footer .money>div[data-v-8388eaea]:first-of-type{width:80px;margin-right:50px}.confirm-order .order-footer .money>div[data-v-8388eaea]:last-of-type{flex:1}.confirm-order .order-footer .btn[data-v-8388eaea]{width:152px;height:44px;margin-top:18px;border-radius:2px;cursor:pointer}',""]),e.exports=r},656:function(e,t,o){"use strict";o.r(t);o(23),o(18),o(22),o(11),o(29),o(21),o(30);var r=o(459),n=o(9),d=o(8),c=(o(93),o(438),o(38),o(91),o(52),o(12)),l=o(85),f=o(524);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={mixins:[o(443).a],components:{SelffetchShopList:f.default},asyncData:function(e){return Object(d.a)(regeneratorRuntime.mark((function t(){var o,r,n,c,f,source,h,v,m,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.query,r=e.$post,n=e.$get,c=JSON.parse(decodeURIComponent(o.data)),f=c.goods,source=o.source,h=o.order_type,v="",m="",_={},o.seckill_id&&(v=o.seckill_id),_.seckill_id=v,o.cart_id&&(m=o.cart_id),_.cart_id=m,t.next=13,n("order/getDeliveryType").then((function(e){var code=e.code,data=e.data,t=e.msg;if(1!=code)throw new Error(t);return data})).then((function(data){var e=[];return data.is_express&&e.push({id:1,sign:"express",name:"快递发货"}),_.deliveries=e,_.delivery=e[0].id,e})).then(function(){var e=Object(d.a)(regeneratorRuntime.mark((function e(data){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("order/placeOrder",{source:source,order_type:h,action:"settle",goods:f,delivery_type:data[0].id,seckill_id:v,cart_id:m}).then((function(e){var code=e.code,data=e.data,t=e.msg;if(1!=code)throw new Error(t);return data})).then((function(data){_.orderInfo=data,_.address=null==data?void 0:data.address})).catch((function(e){throw new Error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then(Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("coupon/orderCoupon",{goods:f,source:source}).then((function(e){var code=e.code,data=e.data,t=e.msg;if(1!=code)throw new Error(t);return data})).then((function(data){_.coupon=data})).catch((function(e){throw new Error(e)}));case 2:case"end":return e.stop()}}),e)})))).catch((function(e){l.Message.error("数据请求失败，请稍后重试"),console.log(e)}));case 13:return t.abrupt("return",_);case 14:case"end":return t.stop()}}),t)})))()},data:function(){return{orderInfo:{},address:{},coupon:{can_use:[],not_can_use:[]},active:0,userRemark:"",showAddress:!1,showAddressAdd:!1,addressId:"",editId:"",isEdit:!1,useIntegral:0,selffetchShop:[],checkedSelffetchShop:{},showSelffetch:!1,selffetchShopID:"",contactName:"",contactPhone:"",contactNameValue:"",contactPhoneValue:"",contactNameEdit:!1,contactPhoneEdit:!1,shopPage:1,seckill_id:"",cart_id:""}},methods:v(v({},Object(c.b)(["getPublicData"])),{},{useCoupon:function(e){this.couponId=e,this.orderBuy()},changeContactName:function(){this.contactNameEdit=!1,this.contactNameValue=this.contactName},changeContactPhone:function(){this.contactPhoneEdit=!1,this.contactPhoneValue=this.contactPhone},closeContactNameEdit:function(){this.contactNameEdit=!1,this.contactName=this.contactNameValue},closeContactPhoneEdit:function(){this.contactPhoneEdit=!1,this.contactPhone=this.contactPhoneValue},getShopList:function(){var e=this;this.shopPage&&this.$get("selffetch_shop/lists",{params:{longitude:this.lng,latitude:this.lat,page_no:this.shopPage,page_size:10}}).then((function(t){var code=t.code,data=t.data,o=t.msg;if(1!=code)throw new Error(o);return data.more?e.shopPage+=1:e.shopPage=0,data})).then((function(t){var o=t.list;e.selffetchShop=[].concat(Object(r.a)(e.selffetchShop),Object(r.a)(o))}))},editAddress:function(e){this.editId=e,this.showAddressAdd=!0},changeAddress:function(e){this.addressId=e,this.orderBuy()},changeSelffetch:function(e){this.checkedSelffetchShop=e,this.selffetchShopID=e.id,this.orderBuy()},changeIntegral:function(){this.orderBuy()},showTipsDialog:function(){var e=this.orderInfo,t=e.integral_config,o=e.integral_limit;this.$alert("·1积分可抵扣".concat(t,"元\n·单次扣减积分不能低于").concat(o,"积分"),{confirmButtonText:"确定",title:"积分使用说明"})},submitOrder:function(){this.orderBuy("buy")},orderBuy:function(){var e=arguments,t=this;return Object(d.a)(regeneratorRuntime.mark((function o(){var r,n,d,data,address;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:"settle",n={action:r,delivery_type:t.delivery,goods:t.goods,use_integral:Number(t.useIntegral),address_id:t.addressId,coupon_list_id:t.couponId,order_type:t.order_type,source:t.source,seckill_id:t.seckill_id,cart_id:t.cart_id},"buy"==r&&(n.remark=t.userRemark,n.type=t.type,2===n.delivery_type&&(n.selffetch_shop_id=t.selffetchShopID,n.consignee=t.contactNameValue,n.mobile=t.contactPhoneValue,delete n.address_id)),o.next=5,t.$post("order/placeOrder",n);case 5:d=o.sent,data=d.data,1==d.code&&("settle"==r?(address=data.address,t.orderInfo=data,t.address=address):"buy"==r&&(t.getPublicData(),t.$router.replace({path:"/payment",query:{id:data.order_id}})));case 9:case"end":return o.stop()}}),o)})))()}}),watch:{contactNameValue:function(e){this.contactName=e},contactPhoneValue:function(e){this.contactPhone=e}},created:function(){var e,t,o,r,n,d,c=JSON.parse(decodeURIComponent(this.$route.query.data)),l=c.goods,f=c.type;this.goods=l,this.type=f,this.source=this.$route.query.source,this.order_type=this.$route.query.order_type,this.contactNameValue=null!==(e=null===(t=this.orderInfo)||void 0===t||null===(o=t.address)||void 0===o?void 0:o.contact)&&void 0!==e?e:"",this.contactPhoneValue=null!==(r=null===(n=this.orderInfo)||void 0===n||null===(d=n.address)||void 0===d?void 0:d.telephone)&&void 0!==r?r:""}},_=m,x=(o(576),o(10)),component=Object(x.a)(_,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"confirm-order"},[o("div",{staticClass:"order-hd bg-white m-b-16"},[o("div",{staticClass:"title lg"},[e._v("收货地址")]),e._v(" "),o("div",{staticClass:"address flex row-between"},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.address.contact,expression:"address.contact"}],staticClass:"address-con"},[o("div",[o("span",{staticClass:"bold"},[e._v(e._s(e.address.contact))]),e._v("\n                    "+e._s(e.address.telephone)+"\n                    "),e.address.is_default?o("el-tag",{attrs:{size:"mini",type:"warning",effect:"dark"}},[e._v("默认")]):e._e()],1),e._v(" "),o("div",{staticClass:"lighter m-t-8"},[e._v("\n                    "+e._s(e.address.province)+" "+e._s(e.address.city)+"\n                    "+e._s(e.address.district)+"\n                    "+e._s(e.address.address)+"\n                ")]),e._v(" "),o("div",{staticClass:"oprate primary flex"},[o("div",{staticClass:"m-r-16",on:{click:function(t){return e.editAddress(e.address.id)}}},[e._v("\n                        修改\n                    ")]),e._v(" "),o("div",{on:{click:function(t){e.showAddress=!0}}},[e._v("更换地址")])])]),e._v(" "),o("div",{staticClass:"address-add flex row-center",on:{click:function(t){return e.editAddress("")}}},[e._v("\n                + 添加地址\n            ")])]),e._v(" "),o("div",{staticClass:"title lg"},[e._v("配送方式")]),e._v(" "),o("div",{staticClass:"address flex row-between"},[o("el-radio-group",{model:{value:e.delivery,callback:function(t){e.delivery=t},expression:"delivery"}},e._l(e.deliveries,(function(t){return o("el-radio",{key:t.id,attrs:{label:t.id}},[e._v(e._s(t.name))])})),1)],1)]),e._v(" "),o("div",{staticClass:"order-con bg-white"},[o("div",{staticClass:"goods m-b-16"},[o("div",{staticClass:"title lg"},[e._v("商品信息")]),e._v(" "),e._m(0),e._v(" "),o("div",{staticClass:"goods-list"},e._l(e.orderInfo.goods,(function(t,r){return o("div",{key:r,class:["flex","item",{"item-disabled":1===e.delivery?!t.is_express:!t.is_selffetch}]},[o("div",{staticClass:"info flex"},[o("div",{staticClass:"pictrue flex-none"},[o("el-image",{attrs:{src:t.image}})],1),e._v(" "),o("div",[o("div",{staticClass:"name line-2"},[t.is_seckill?o("el-tag",{attrs:{size:"mini",effect:"plain"}},[e._v("秒杀")]):e._e(),e._v("\n                                "+e._s(t.goods_name)+"\n                            ")],1),e._v(" "),o("div",{staticClass:"muted"},[o("span",[e._v(e._s(t.spec_value_str))]),e._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:2===e.delivery&&!t.is_selffetch,expression:"\n                                        delivery === 2 && !item.is_selffetch\n                                    "}],staticClass:"delivery-support"},[e._v("该商品不支持门店自提")]),e._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:1===e.delivery&&!t.is_express,expression:"\n                                        delivery === 1 && !item.is_express\n                                    "}],staticClass:"delivery-support"},[e._v("该商品不支持快递配送")])])])]),e._v(" "),o("div",{staticClass:"price flex row-center"},[o("price-formate",{attrs:{price:t.sell_price}})],1),e._v(" "),o("div",{staticClass:"num flex row-center"},[e._v("\n                        "+e._s(t.goods_num)+"\n                    ")]),e._v(" "),o("div",{staticClass:"money flex row-center"},[o("price-formate",{attrs:{price:t.sub_price}})],1)])})),0)]),e._v(" "),o("div",{staticClass:"input",staticStyle:{"padding-bottom":"16px"}},[o("div",{staticClass:"title"},[e._v("买家留言")]),e._v(" "),o("div",{staticClass:"textarea"},[o("el-input",{attrs:{type:"textarea",placeholder:"选填，给商家备注留言，100字以内",maxlength:"100",rows:3,"show-word-limit":"",resize:"none"},model:{value:e.userRemark,callback:function(t){e.userRemark=t},expression:"userRemark"}})],1)]),e._v(" "),0==e.orderInfo.order_type?o("div",{staticClass:"coupons p-l-10 p-r-10"},[o("el-tabs",{model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[o("el-tab-pane",{attrs:{label:"可用优惠券("+e.coupon.can_use.length+")"}},[e.coupon.can_use.length?o("div",{staticClass:"coupons-con"},[o("coupons-list",{attrs:{list:e.coupon.can_use,"show-more":!0,type:4},on:{use:e.useCoupon}})],1):o("div",{staticClass:"ml20",staticStyle:{"padding-bottom":"40px"}},[e._v("\n                        暂无可用优惠券\n                    ")])]),e._v(" "),o("el-tab-pane",{attrs:{label:"不可用优惠券("+e.coupon.not_can_use.length+")"}},[e.coupon.not_can_use.length?o("div",{staticClass:"coupons-con"},[o("coupons-list",{attrs:{list:e.coupon.not_can_use,"show-more":!0,type:2}})],1):o("div",{staticClass:"m-l-20",staticStyle:{"padding-bottom":"40px"}},[e._v("\n                        暂无不可用优惠券\n                    ")])])],1)],1):e._e(),e._v(" "),e.orderInfo.integral_switch?o("div",{staticClass:"integral"},[o("div",{staticClass:"title"},[e._v("\n                积分抵扣\n                "),o("i",{staticClass:"el-icon-question",on:{click:e.showTipsDialog}})]),e._v(" "),o("div",{staticClass:"flex check-box"},[o("el-checkbox",{attrs:{disabled:e.orderInfo.user_integral<e.orderInfo.integral_limit},on:{change:e.changeIntegral},model:{value:e.useIntegral,callback:function(t){e.useIntegral=t},expression:"useIntegral"}},[e._v("积分抵扣")]),e._v(" "),o("div",{staticClass:"muted m-l-8"},[e._v("\n                    共"+e._s(e.orderInfo.user_integral)+"积分"+e._s(e.orderInfo.user_integral<e.orderInfo.integral_limit?"，满"+e.orderInfo.integral_limit+"可用":"")+"\n                ")])],1)]):e._e()]),e._v(" "),o("div",{staticClass:"order-footer flex bg-white"},[o("div",[o("div",{staticClass:"money flex m-b-8"},[o("div",{staticClass:"lighter"},[e._v("商品总价：")]),e._v(" "),o("div",[e._v("¥"+e._s(e.orderInfo.total_goods_price))])]),e._v(" "),o("div",{staticClass:"money flex m-b-8"},[o("div",{staticClass:"lighter"},[e._v("运费：")]),e._v(" "),o("div",[e._v("¥"+e._s(e.orderInfo.express_price))])]),e._v(" "),e.orderInfo.discount_amount?o("div",{staticClass:"money flex m-b-8"},[o("div",{staticClass:"lighter"},[e._v("优惠券：")]),e._v(" "),o("div",[e._v("-¥"+e._s(e.orderInfo.discount_amount))])]):e._e(),e._v(" "),e.orderInfo.integral_amount?o("div",{staticClass:"money flex m-b-8"},[o("div",{staticClass:"lighter"},[e._v("积分抵扣：")]),e._v(" "),o("div",[e._v("-¥"+e._s(e.orderInfo.integral_amount))])]):e._e(),e._v(" "),o("div",{staticClass:"money flex m-t-16"},[o("div",{staticClass:"lighter"},[e._v("实付金额：")]),e._v(" "),o("div",{staticClass:"primary",staticStyle:{"font-size":"20px"}},[e._v("\n                    ¥"+e._s(e.orderInfo.order_amount)+"\n                ")])]),e._v(" "),o("div",{staticClass:"flex",staticStyle:{"justify-content":"flex-end"}},[o("div",{staticClass:"white bg-primary lg btn flex row-center",on:{click:e.submitOrder}},[e._v("\n                    提交订单\n                ")])])])]),e._v(" "),o("address-add",{attrs:{aid:e.editId},on:{success:function(t){return e.orderBuy("settle")}},model:{value:e.showAddressAdd,callback:function(t){e.showAddressAdd=t},expression:"showAddressAdd"}}),e._v(" "),o("address-list",{on:{confirm:e.changeAddress},model:{value:e.showAddress,callback:function(t){e.showAddress=t},expression:"showAddress"}}),e._v(" "),o("selffetch-shop-list",{attrs:{list:e.selffetchShop},on:{load:e.getShopList,confirm:e.changeSelffetch},model:{value:e.showSelffetch,callback:function(t){e.showSelffetch=t},expression:"showSelffetch"}})],1)}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"goods-hd flex lighter"},[o("div",{staticClass:"info flex"},[e._v("商品信息")]),e._v(" "),o("div",{staticClass:"price flex row-center"},[e._v("单价")]),e._v(" "),o("div",{staticClass:"num flex row-center"},[e._v("数量")]),e._v(" "),o("div",{staticClass:"money flex row-center"},[e._v("合计")])])}],!1,null,"8388eaea",null);t.default=component.exports;installComponents(component,{PriceFormate:o(444).default,CouponsList:o(477).default,AddressAdd:o(496).default,AddressList:o(567).default,SelffetchShopList:o(524).default})}}]);