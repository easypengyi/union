(window.webpackJsonp=window.webpackJsonp||[]).push([[1,9,11,20],{438:function(e,t,r){"use strict";var n=r(19),o=r(2),l=r(3),c=r(135),d=r(28),v=r(20),f=r(273),m=r(53),h=r(134),_=r(272),x=r(4),y=r(90).f,w=r(44).f,C=r(27).f,S=r(439),k=r(440).trim,T="Number",O=o.Number,N=O.prototype,D=o.TypeError,E=l("".slice),I=l("".charCodeAt),F=function(e){var t=_(e,"number");return"bigint"==typeof t?t:M(t)},M=function(e){var t,r,n,o,l,c,d,code,v=_(e,"number");if(h(v))throw D("Cannot convert a Symbol value to a number");if("string"==typeof v&&v.length>2)if(v=k(v),43===(t=I(v,0))||45===t){if(88===(r=I(v,2))||120===r)return NaN}else if(48===t){switch(I(v,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+v}for(c=(l=E(v,2)).length,d=0;d<c;d++)if((code=I(l,d))<48||code>o)return NaN;return parseInt(l,n)}return+v};if(c(T,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var z,A=function(e){var t=arguments.length<1?0:O(F(e)),r=this;return m(N,r)&&x((function(){S(r)}))?f(Object(t),r,A):t},$=n?y(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),B=0;$.length>B;B++)v(O,z=$[B])&&!v(A,z)&&C(A,z,w(O,z));A.prototype=N,N.constructor=A,d(o,T,A)}},439:function(e,t,r){var n=r(3);e.exports=n(1..valueOf)},440:function(e,t,r){var n=r(3),o=r(26),l=r(15),c=r(441),d=n("".replace),v="["+c+"]",f=RegExp("^"+v+v+"*"),m=RegExp(v+v+"*$"),h=function(e){return function(t){var r=l(o(t));return 1&e&&(r=d(r,f,"")),2&e&&(r=d(r,m,"")),r}};e.exports={start:h(1),end:h(2),trim:h(3)}},441:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},442:function(e,t,r){var content=r(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("3181fc86",content,!0,{sourceMap:!1})},444:function(e,t,r){"use strict";r.r(t);r(438),r(38),r(274);var n={data:function(){return{priceSlice:{}}},components:{},props:{firstSize:{type:Number,default:14},secondSize:{type:Number,default:14},color:{type:String},weight:{type:[String,Number],default:400},price:{type:[String,Number],default:""},showSubscript:{type:Boolean,default:!0},subscriptSize:{type:Number,default:14},lineThrough:{type:Boolean,default:!1}},created:function(){this.priceFormat()},watch:{price:function(e){this.priceFormat()}},methods:{priceFormat:function(){var e=this.price,t={};null!==e&&(e=parseFloat(e),e=String(e).split("."),t.first=e[0],t.second=e[1],this.priceSlice=t)}}},o=(r(445),r(10)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{class:(e.lineThrough?"line-through":"")+"price-format",style:{color:e.color,"font-weight":e.weight}},[e.showSubscript?r("span",{style:{"font-size":e.subscriptSize+"px","margin-right":"1px"}},[e._v("¥")]):e._e(),e._v(" "),r("span",{style:{"font-size":e.firstSize+"px","margin-right":"1px"}},[e._v(e._s(e.priceSlice.first))]),e._v(" "),e.priceSlice.second?r("span",{style:{"font-size":e.secondSize+"px"}},[e._v("."+e._s(e.priceSlice.second))]):e._e()])}),[],!1,null,null,null);t.default=component.exports},445:function(e,t,r){"use strict";r(442)},446:function(e,t,r){var n=r(16)(!1);n.push([e.i,".price-format{display:flex;align-items:baseline}",""]),e.exports=n},448:function(e,t,r){"use strict";r.r(t);r(438),r(62),r(61),r(11),r(92),r(38),r(91);var n=6e4,o=36e5,l=24*o;function c(e){return(0+e.toString()).slice(-2)}var d={components:{},props:{isSlot:{type:Boolean,default:!1},time:{type:Number,default:0},format:{type:String,default:"hh:mm:ss"},autoStart:{type:Boolean,default:!0}},watch:{time:{immediate:!0,handler:function(e){e&&this.reset()}}},data:function(){return{timeObj:{},formateTime:0}},created:function(){},computed:{},methods:{createTimer:function(e){return setTimeout(e,100)},isSameSecond:function(e,t){return Math.floor(e)===Math.floor(t)},start:function(){this.counting||(this.counting=!0,this.endTime=Date.now()+1e3*this.remain,this.setTimer())},setTimer:function(){var e=this;this.tid=this.createTimer((function(){var t=e.getRemain();e.isSameSecond(t,e.remain)&&0!==t||e.setRemain(t),0!==e.remain&&e.setTimer()}))},getRemain:function(){return Math.max(this.endTime-Date.now(),0)},pause:function(){this.counting=!1,clearTimeout(this.tid)},reset:function(){this.pause(),this.remain=this.time,this.setRemain(this.remain),this.autoStart&&this.start()},setRemain:function(e){var t=this.format;this.remain=e;var time,r=(time=e,{days:Math.floor(time/l),hours:c(Math.floor(time%l/o)),minutes:c(Math.floor(time%o/n)),seconds:c(Math.floor(time%n/1e3))});this.formateTime=function(e,t){var r=t.days,n=t.hours,o=t.minutes,l=t.seconds;return-1!==e.indexOf("dd")&&(e=e.replace("dd",r)),-1!==e.indexOf("hh")&&(e=e.replace("hh",c(n))),-1!==e.indexOf("mm")&&(e=e.replace("mm",c(o))),-1!==e.indexOf("ss")&&(e=e.replace("ss",c(l))),e}(t,r),this.$emit("change",r),0===e&&(this.pause(),this.$emit("finish"))}}},v=r(10),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.time>=0?r("div",[r("client-only",[e.isSlot?e._t("default"):r("span",[e._v(e._s(e.formateTime))])],2)],1):e._e()}),[],!1,null,null,null);t.default=component.exports},466:function(e,t,r){var content=r(488);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("5848cf1c",content,!0,{sourceMap:!1})},487:function(e,t,r){"use strict";r(466)},488:function(e,t,r){var n=r(16)(!1);n.push([e.i,".deliver-search-container .deliver-box .deliver-recode-box[data-v-07f98fc2]{padding:10px 20px;background-color:#f2f2f2}.deliver-search-container .deliver-box .deliver-recode-box .recode-img[data-v-07f98fc2]{position:relative;width:72px;height:72px}.deliver-search-container .deliver-box .deliver-recode-box .recode-img .float-count[data-v-07f98fc2]{position:absolute;bottom:0;height:20px;width:100%;background-color:rgba(0,0,0,.5);color:#fff;font-size:12px}.deliver-search-container .deliver-box .deliver-recode-box .recode-info-container[data-v-07f98fc2]{flex:1}.deliver-search-container .deliver-box .deliver-recode-box .recode-info-container .recode-label[data-v-07f98fc2]{width:70px}.deliver-search-container .deliver-box .deliver-recode-box .recode-info-container .copy-btn[data-v-07f98fc2]{height:20px;min-width:42px;border:1px solid #ff2c3c;font-size:12px;margin-left:8px;border-radius:60px;cursor:pointer}.deliver-search-container .deliver-box .deliver-recode-box .recode-info-container .copy-btn[data-v-07f98fc2]:hover{background-color:#fff}.deliver-search-container .deliver-box .deliver-flow-box[data-v-07f98fc2]{padding-left:15px}.deliver-search-container .deliver-box .time-line-title[data-v-07f98fc2]{font-weight:500px;font-size:16px;margin-bottom:10px}",""]),e.exports=n},499:function(e,t,r){"use strict";r.r(t);var n=r(8),o=(r(52),r(438),r(11),{props:{value:{type:Boolean,default:!1},aid:{type:Number|String}},data:function(){return{showDialog:!1,deliverBuy:{},delivery:{},deliverFinish:{},deliverOrder:{},deliverShipment:{},deliverTake:{},timeLineArray:[]}},watch:{value:function(e){console.log(e,"val"),this.showDialog=e},showDialog:function(e){e&&this.aid&&(this.timeLineArray=[],this.getDeliverTraces()),this.$emit("input",e)}},methods:{getDeliverTraces:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data,r,n,o,l,c,d,v,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return data={id:e.aid},t.next=3,e.$get("order/orderTraces",{params:data});case 3:1==(r=t.sent).code&&(n=r.data,o=n.buy,l=n.delivery,c=n.finish,d=n.order,v=n.shipment,f=n.take,e.deliverBuy=o,e.delivery=l,e.deliverFinish=c,e.deliverOrder=d,e.deliverShipment=v,e.deliverTake=f,e.timeLineArray.push(e.deliverFinish),e.timeLineArray.push(e.delivery),e.timeLineArray.push(e.deliverShipment),e.timeLineArray.push(e.deliverBuy),console.log(e.timeLineArray));case 5:case"end":return t.stop()}}),t)})))()},onCopy:function(){var e=document.createElement("input");e.value=this.deliverOrder.invoice_no,document.body.appendChild(e),e.select(),document.execCommand("Copy"),this.$message.success("复制成功"),e.remove()}}}),l=(r(487),r(10)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"deliver-search-container"},[r("el-dialog",{attrs:{visible:e.showDialog,top:"30vh",width:"900px",title:"物流查询"},on:{"update:visible":function(t){e.showDialog=t}}},[r("div",{staticClass:"deliver-box"},[r("div",{staticClass:"deliver-recode-box flex"},[r("div",{staticClass:"recode-img"},[r("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{fit:"cover",src:e.deliverOrder.goods_image}}),e._v(" "),r("div",{staticClass:"float-count flex row-center"},[e._v("共"+e._s(e.deliverOrder.goods_count)+"件商品")])],1),e._v(" "),r("div",{staticClass:"recode-info-container m-l-10"},[r("div",{staticClass:"flex"},[r("div",{staticClass:"recode-label"},[e._v("物流状态：")]),e._v(" "),r("div",{staticClass:"primary lg",staticStyle:{"font-weight":"500"}},[e._v(e._s(e.delivery.title))])]),e._v(" "),r("div",{staticClass:"flex",staticStyle:{margin:"6px 0"}},[r("div",{staticClass:"recode-label"},[e._v("快递公司：")]),e._v(" "),r("div",[e._v(e._s(e.deliverOrder.express_name||"-"))])]),e._v(" "),r("div",{staticClass:"flex"},[r("div",{staticClass:"recode-label"},[e._v("快递单号：")]),e._v(" "),r("div",[e._v(e._s(e.deliverOrder.invoice_no||"-"))]),e._v(" "),r("div",{staticClass:"copy-btn primary flex row-center",on:{click:e.onCopy}},[e._v("复制")])])])]),e._v(" "),r("div",{staticClass:"deliver-flow-box m-t-16"},[r("el-timeline",[e.deliverFinish.tips?r("el-timeline-item",[r("div",[r("div",{staticClass:"flex lg"},[r("div",{staticClass:"m-r-8",staticStyle:{"font-weight":"500"}},[e._v("\n                                    "+e._s(e.deliverTake.contacts)+"\n                                ")]),e._v(" "),r("div",{staticStyle:{"font-weight":"500"}},[e._v(e._s(e.deliverTake.mobile))])]),e._v(" "),r("div",{staticClass:"lighter m-t-8"},[e._v(e._s(e.deliverTake.address))])])]):e._e(),e._v(" "),e.deliverFinish.tips?r("el-timeline-item",{attrs:{timestamp:e.deliverFinish.time}},[r("div",{staticClass:"time-line-title"},[e._v(e._s(e.deliverFinish.title))]),e._v(" "),r("div",[e._v(e._s(e.deliverFinish.tips))])]):e._e(),e._v(" "),e.delivery.traces&&e.delivery.traces.length?r("el-timeline-item",{attrs:{timestamp:e.delivery.time}},[r("div",{staticClass:"time-line-title m-b-8"},[e._v(e._s(e.delivery.title))]),e._v(" "),e._l(e.delivery.traces,(function(t,n){return r("el-timeline-item",{key:n,attrs:{timestamp:t[0]}},[r("div",{staticClass:"muted"},[e._v(e._s(t[1]))])])}))],2):e._e(),e._v(" "),e.deliverShipment.tips?r("el-timeline-item",{attrs:{timestamp:e.deliverShipment.time}},[r("div",{staticClass:"time-line-title"},[e._v(e._s(e.deliverShipment.title))]),e._v(" "),r("div",[e._v(e._s(e.deliverShipment.tips))])]):e._e(),e._v(" "),e.deliverBuy.tips?r("el-timeline-item",{attrs:{timestamp:e.deliverBuy.time}},[r("div",{staticClass:"time-line-title"},[e._v(e._s(e.deliverBuy.title))]),e._v(" "),r("div",[e._v(e._s(e.deliverBuy.tips))])]):e._e()],1)],1)])])],1)}),[],!1,null,"07f98fc2",null);t.default=component.exports},546:function(e,t,r){var content=r(618);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("166d932a",content,!0,{sourceMap:!1})},617:function(e,t,r){"use strict";r(546)},618:function(e,t,r){var n=r(16)(!1);n.push([e.i,".order-list[data-v-24f76ca6]{padding:0 10px}.order-list .item[data-v-24f76ca6]{margin-bottom:20px}.order-list .item .item-hd[data-v-24f76ca6]{height:40px;border:1px solid #e5e5e5;background:#f2f2f2;padding:0 20px}.order-list .item .item-hd .status[data-v-24f76ca6]{width:100px;text-align:right}.order-list .item .item-con[data-v-24f76ca6]{box-shadow:0 3px 4px rgba(0,0,0,.08);align-items:stretch}.order-list .item .item-con .goods[data-v-24f76ca6]{padding:17px 0;width:560px}.order-list .item .item-con .goods .goods-item[data-v-24f76ca6]{padding:10px 20px}.order-list .item .item-con .goods .goods-item .goods-img[data-v-24f76ca6]{flex:none;margin-right:10px;width:72px;height:72px}.order-list .item .item-con .goods .goods-item .goods-name[data-v-24f76ca6]{width:100%}.order-list .item .item-con .goods .goods-item .goods-name .num[data-v-24f76ca6]{padding:0 42px}.order-list .item .item-con .pay-price[data-v-24f76ca6]{width:200px;border-left:1px solid #e5e5e5;border-right:1px solid #e5e5e5}.order-list .item .item-con .operate[data-v-24f76ca6]{width:185px}.order-list .item .item-con .operate>div[data-v-24f76ca6]{cursor:pointer}.order-list .item .item-con .operate .btn[data-v-24f76ca6]{width:120px;height:32px;border-radius:2px}.order-list .item .item-con .operate .btn.plain[data-v-24f76ca6]{border:1px solid #ff2c3c}",""]),e.exports=n},654:function(e,t,r){"use strict";r.r(t);var n=r(8),o=(r(52),{components:{CountDown:r(448).default},props:{list:{type:Array,default:function(){return[]}}},data:function(){return{showDeliver:!1,aid:-1}},created:function(){console.log(this.list)},methods:{handleOrder:function(e,t){var r=this;this.type=e,this.orderId=t,this.$confirm(this.getTipsText(e),{title:"温馨提示",center:!0,confirmButtonText:"确定",cancelButtonText:"取消",callback:function(e){"confirm"==e&&r.postOrder()}})},postOrder:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,l,code,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.type,n=e.orderId,o="",t.t0=r,t.next=0===t.t0?5:1===t.t0?7:2===t.t0?9:11;break;case 5:return o="order/cancel",t.abrupt("break",11);case 7:return o="order/del",t.abrupt("break",11);case 9:return o="order/confirm",t.abrupt("break",11);case 11:return t.next=13,e.$post(o,{id:n});case 13:l=t.sent,code=l.code,l.data,c=l.msg,1==code&&(e.$message({message:c,type:"success"}),e.$emit("refresh"));case 18:case"end":return t.stop()}}),t)})))()},getTipsText:function(e){switch(e){case 0:return"确认取消订单吗？";case 1:return"确认删除订单吗?";case 2:return"确认收货吗?"}},showDeliverDialog:function(e){console.log("showDeliverDialog"),this.aid=e,this.showDeliver=!0}},computed:{getOrderStatus:function(){return function(e){var text="";switch(e){case 0:text="待支付";break;case 1:text="待发货";break;case 2:text="待收货";break;case 3:text="已完成";break;case 4:text="订单已关闭"}return text}},getCancelTime:function(){return function(time){return time-Date.now()/1e3}}}}),l=(r(617),r(10)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"order-list"},[e._l(e.list,(function(t){return r("div",{key:t.id,staticClass:"item m-b-16"},[r("div",{staticClass:"item-hd flex "},[r("div",{staticClass:"flex-1 lighter sm"},[e._v("下单时间："+e._s(t.create_time))]),e._v(" "),r("div",{staticClass:"flex-1 lighter sm"},[e._v("订单编号："+e._s(t.sn))]),e._v(" "),r("div",{staticClass:"flex-1 lighter sm"},[e._v("订单类型："+e._s(t.order_type_desc))]),e._v(" "),r("div",{class:["status sm",{primary:0==t.order_status}]},[e._v("\n        "+e._s(t.order_status_desc)+"\n      ")])]),e._v(" "),r("div",{staticClass:"item-con flex flex-1"},[r("div",{staticClass:"goods"},e._l(t.order_goods,(function(t,n){return r("nuxt-link",{key:n,staticClass:"goods-item flex ",attrs:{to:"/goods_details?id="+t.goods_id}},[r("el-image",{staticClass:"goods-img",attrs:{src:t.goods_image,alt:""}}),e._v(" "),r("div",{staticClass:"goods-info flex-1"},[r("div",{staticClass:"goods-name m-b-8 flex row-between"},[r("div",{staticClass:"line1",staticStyle:{width:"350px"}},[t.is_seckill?r("el-tag",{attrs:{size:"mini",effect:"plain"}},[e._v("秒杀")]):e._e(),e._v("\n                  "+e._s(t.goods_name)+"\n              ")],1),e._v(" "),r("div",{staticClass:"num"},[e._v("x"+e._s(t.goods_num))])]),e._v(" "),r("div",{staticClass:"sm muted m-b-8"},[e._v(e._s(t.spec_value_str))]),e._v(" "),r("div",{staticClass:"primary"},[r("price-formate",{attrs:{price:t.goods_price}})],1)])],1)})),1),e._v(" "),r("div",{staticClass:"pay-price flex flex-col flex-1 col-center row-center",staticStyle:{"padding-left":"30px"}},[r("div",{staticClass:"muted"},[e._v("共"+e._s(t.total_num)+"件商品")]),e._v(" "),r("div",{staticClass:"muted m-t-8 flex "},[e._v("\n          应付金额：\n          "),r("span",{staticClass:"primary"},[r("price-formate",{attrs:{price:t.order_amount,"subscript-size":16,"first-size":16,"second-size":16}})],1)])]),e._v(" "),r("div",{staticClass:"operate flex-col col-center sm row-center",staticStyle:{flex:"1"}},[t.btn.pay_btn?r("nuxt-link",{staticClass:"btn m-b-16 bg-primary flex row-center white sm",attrs:{to:"/payment?id="+t.id}},[r("span",{staticClass:"m-r-8"},[e._v("去付款")]),e._v(" "),e.getCancelTime(t.order_cancel_time)>0?r("count-down",{attrs:{time:e.getCancelTime(t.order_cancel_time),format:"hh:mm:ss"},on:{finish:function(t){return e.$emit("refresh")}}}):e._e()],1):e._e(),e._v(" "),t.btn.confirm_btn?r("div",{staticClass:"btn m-b-10 primary flex row-center sm plain",on:{click:function(r){return e.handleOrder(2,t.id)}}},[e._v("\n          确认收货\n        ")]):e._e(),e._v(" "),t.btn.logistics_btn?r("div",{staticClass:"m-b-10 muted flex row-center sm",on:{click:function(r){return e.showDeliverDialog(t.id)}}},[e._v("\n          物流查询\n        ")]):e._e(),e._v(" "),t.btn.cancel_btn?r("div",{staticClass:"m-b-10 muted flex row-center sm",on:{click:function(r){return e.handleOrder(0,t.id)}}},[e._v("\n          取消订单\n        ")]):e._e(),e._v(" "),t.btn.delete_btn?r("div",{staticClass:"m-b-10 muted flex row-center sm",on:{click:function(r){return e.handleOrder(1,t.id)}}},[e._v("\n          删除订单\n        ")]):e._e(),e._v(" "),r("nuxt-link",{staticClass:"lighter",attrs:{to:"/user/order/detail?id="+t.id}},[r("span",[e._v("查看详情")])])],1)])])})),e._v(" "),r("deliver-search",{attrs:{aid:e.aid},model:{value:e.showDeliver,callback:function(t){e.showDeliver=t},expression:"showDeliver"}})],2)}),[],!1,null,"24f76ca6",null);t.default=component.exports;installComponents(component,{PriceFormate:r(444).default,CountDown:r(448).default,DeliverSearch:r(499).default})}}]);