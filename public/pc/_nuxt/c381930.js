(window.webpackJsonp=window.webpackJsonp||[]).push([[41,9,20],{438:function(t,e,r){"use strict";var n=r(19),o=r(2),c=r(3),d=r(135),l=r(28),m=r(20),f=r(273),h=r(53),v=r(134),y=r(272),_=r(4),x=r(90).f,w=r(44).f,S=r(27).f,C=r(439),N=r(440).trim,I="Number",T=o.Number,E=T.prototype,O=o.TypeError,M=c("".slice),k=c("".charCodeAt),A=function(t){var e=y(t,"number");return"bigint"==typeof e?e:R(e)},R=function(t){var e,r,n,o,c,d,l,code,m=y(t,"number");if(v(m))throw O("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=N(m),43===(e=k(m,0))||45===e){if(88===(r=k(m,2))||120===r)return NaN}else if(48===e){switch(k(m,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+m}for(d=(c=M(m,2)).length,l=0;l<d;l++)if((code=k(c,l))<48||code>o)return NaN;return parseInt(c,n)}return+m};if(d(I,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var z,F=function(t){var e=arguments.length<1?0:T(A(t)),r=this;return h(E,r)&&_((function(){C(r)}))?f(Object(e),r,F):e},$=n?x(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),D=0;$.length>D;D++)m(T,z=$[D])&&!m(F,z)&&S(F,z,w(T,z));F.prototype=E,E.constructor=F,l(o,I,F)}},439:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},440:function(t,e,r){var n=r(3),o=r(26),c=r(15),d=r(441),l=n("".replace),m="["+d+"]",f=RegExp("^"+m+m+"*"),h=RegExp(m+m+"*$"),v=function(t){return function(e){var r=c(o(e));return 1&t&&(r=l(r,f,"")),2&t&&(r=l(r,h,"")),r}};t.exports={start:v(1),end:v(2),trim:v(3)}},441:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},442:function(t,e,r){var content=r(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("3181fc86",content,!0,{sourceMap:!1})},443:function(t,e,r){"use strict";r(18),r(60);e.a={head:function(){var t=this.$store.getters.headerMeta;return{title:t.title,link:[{rel:"icon",type:"image/x-icon",href:t.ico}],meta:[{hid:"description",name:"description",content:t.description},{hid:"keywords",name:"keywords",content:t.keywords}]}}}},444:function(t,e,r){"use strict";r.r(e);r(438),r(38),r(274);var n={data:function(){return{priceSlice:{}}},components:{},props:{firstSize:{type:Number,default:14},secondSize:{type:Number,default:14},color:{type:String},weight:{type:[String,Number],default:400},price:{type:[String,Number],default:""},showSubscript:{type:Boolean,default:!0},subscriptSize:{type:Number,default:14},lineThrough:{type:Boolean,default:!1}},created:function(){this.priceFormat()},watch:{price:function(t){this.priceFormat()}},methods:{priceFormat:function(){var t=this.price,e={};null!==t&&(t=parseFloat(t),t=String(t).split("."),e.first=t[0],e.second=t[1],this.priceSlice=e)}}},o=(r(445),r(10)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{class:(t.lineThrough?"line-through":"")+"price-format",style:{color:t.color,"font-weight":t.weight}},[t.showSubscript?r("span",{style:{"font-size":t.subscriptSize+"px","margin-right":"1px"}},[t._v("¥")]):t._e(),t._v(" "),r("span",{style:{"font-size":t.firstSize+"px","margin-right":"1px"}},[t._v(t._s(t.priceSlice.first))]),t._v(" "),t.priceSlice.second?r("span",{style:{"font-size":t.secondSize+"px"}},[t._v("."+t._s(t.priceSlice.second))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},445:function(t,e,r){"use strict";r(442)},446:function(t,e,r){var n=r(16)(!1);n.push([t.i,".price-format{display:flex;align-items:baseline}",""]),t.exports=n},448:function(t,e,r){"use strict";r.r(e);r(438),r(62),r(61),r(11),r(92),r(38),r(91);var n=6e4,o=36e5,c=24*o;function d(t){return(0+t.toString()).slice(-2)}var l={components:{},props:{isSlot:{type:Boolean,default:!1},time:{type:Number,default:0},format:{type:String,default:"hh:mm:ss"},autoStart:{type:Boolean,default:!0}},watch:{time:{immediate:!0,handler:function(t){t&&this.reset()}}},data:function(){return{timeObj:{},formateTime:0}},created:function(){},computed:{},methods:{createTimer:function(t){return setTimeout(t,100)},isSameSecond:function(t,e){return Math.floor(t)===Math.floor(e)},start:function(){this.counting||(this.counting=!0,this.endTime=Date.now()+1e3*this.remain,this.setTimer())},setTimer:function(){var t=this;this.tid=this.createTimer((function(){var e=t.getRemain();t.isSameSecond(e,t.remain)&&0!==e||t.setRemain(e),0!==t.remain&&t.setTimer()}))},getRemain:function(){return Math.max(this.endTime-Date.now(),0)},pause:function(){this.counting=!1,clearTimeout(this.tid)},reset:function(){this.pause(),this.remain=this.time,this.setRemain(this.remain),this.autoStart&&this.start()},setRemain:function(t){var e=this.format;this.remain=t;var time,r=(time=t,{days:Math.floor(time/c),hours:d(Math.floor(time%c/o)),minutes:d(Math.floor(time%o/n)),seconds:d(Math.floor(time%n/1e3))});this.formateTime=function(t,e){var r=e.days,n=e.hours,o=e.minutes,c=e.seconds;return-1!==t.indexOf("dd")&&(t=t.replace("dd",r)),-1!==t.indexOf("hh")&&(t=t.replace("hh",d(n))),-1!==t.indexOf("mm")&&(t=t.replace("mm",d(o))),-1!==t.indexOf("ss")&&(t=t.replace("ss",d(c))),t}(e,r),this.$emit("change",r),0===t&&(this.pause(),this.$emit("finish"))}}},m=r(10),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.time>=0?r("div",[r("client-only",[t.isSlot?t._t("default"):r("span",[t._v(t._s(t.formateTime))])],2)],1):t._e()}),[],!1,null,null,null);e.default=component.exports},454:function(t,e,r){"use strict";r.d(e,"d",(function(){return n})),r.d(e,"e",(function(){return o})),r.d(e,"c",(function(){return c})),r.d(e,"b",(function(){return d})),r.d(e,"a",(function(){return l}));var n=4,o={SMS:0,ACCOUNT:1},c={REGISTER:"ZCYZ",FINDPWD:"ZHMM",LOGIN:"YZMDL",SJSQYZ:"SJSQYZ",CHANGE_MOBILE:"BGSJHM",BIND:"BDSJHM"},d={NONE:"",SEX:"sex",NICKNAME:"nickname",AVATAR:"avatar",MOBILE:"mobile"},l={NORMAL:"apply",HANDLING:"status_ing",FINISH:"status_success_fail"}},505:function(t,e,r){t.exports=r.p+"img/pay_success.3a82887.png"},533:function(t,e,r){var content=r(586);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("64094781",content,!0,{sourceMap:!1})},584:function(t,e,r){t.exports=r.p+"img/pay_wait.2214e17.png"},585:function(t,e,r){"use strict";r(533)},586:function(t,e,r){var n=r(16)(!1);n.push([t.i,".payment[data-v-7605cdda]{margin:16px 0;padding:0 40px}.payment .payment-hd>img[data-v-7605cdda]{width:32px;height:32px}.payment .payment-hd .status[data-v-7605cdda]{font-size:24px}.payment .payment-con[data-v-7605cdda],.payment .payment-hd[data-v-7605cdda]{padding:32px 0;border-bottom:1px dashed hsla(0,0%,89.8%,.89804)}.payment .payment-con .item[data-v-7605cdda]{align-items:flex-start}.payment .payment-footer[data-v-7605cdda]{padding:32px 0}.payment .payment-footer .pay-way[data-v-7605cdda]{width:200px;height:68px;cursor:pointer;margin-right:32px;border:1px dashed hsla(0,0%,89.8%,.89804)}.payment .payment-footer .pay-way img[data-v-7605cdda]{width:30px;height:30px}.payment .payment-footer .btn[data-v-7605cdda]{width:134px;height:40px;border:1px solid hsla(0,0%,89.8%,.89804)}.payment .el-dialog .pay-code[data-v-7605cdda]{width:270px;height:270px}.payment .el-dialog .pay-money[data-v-7605cdda]{font-size:18px;margin-top:24px;align-items:baseline}",""]),t.exports=n},659:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(62),r(52),r(448)),c=(r(454),{mixins:[r(443).a],components:{CountDown:o.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.$get,e.next=3,n("order/detail",{params:{id:r.id}});case 3:return o=e.sent,data=o.data,e.abrupt("return",{order:data});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{showWxpay:!1,showAlipay:!1,payWayArr:[],payInfo:{config:{code_url:"",order_amount:0}},cancelTime:0,alipayHtml:""}},created:function(){this.id=this.$route.query.id,this.getPayway()},beforeDestroy:function(){clearInterval(this.timer)},methods:{getPayway:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,code,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$get("pay/payway",{params:{from:"order",order_id:t.id,scene:4}});case 2:r=e.sent,code=r.code,data=r.data,1==code&&(t.payWayArr=data.lists,t.payWayArr.length||t.$message({message:"请联系管理员配置支付方式",type:"error"}));case 6:case"end":return e.stop()}}),e)})))()},orderPay:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,data,code,o,div;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$post("pay/prepay",{order_id:e.id,pay_way:t,from:"order"});case 2:n=r.sent,data=n.data,code=n.code,n.msg,1==code&&2==data.pay_way?(e.payInfo=data,e.showWxpay=!0,e.createTimer()):1==code&&3==data.pay_way?((o=document.getElementsByTagName("divform")).length&&document.body.removeChild(o[0]),(div=document.createElement("divform")).innerHTML=data.config,document.body.appendChild(div),document.forms[0].submit()):1==code&&1==data.pay_way&&e.getOrder();case 7:case"end":return r.stop()}}),r)})))()},clearTimer:function(){clearInterval(this.timer)},createTimer:function(){var t=this;this.timer&&clearInterval(this.timer),this.timer=setInterval((function(){t.getOrder()}),2e3)},getOrder:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data,code;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$get("order/detail",{params:{id:t.id}});case 2:r=e.sent,data=r.data,code=r.code,r.msg,1==code&&(t.order=data,1==data.pay_status&&(clearInterval(t.timer),t.showWxpay=!1,t.$message({message:"支付成功",type:"success"})));case 7:case"end":return e.stop()}}),e)})))()}},computed:{getOrderStatus:function(){return function(t){var text="";switch(t){case 0:text="待支付";break;case 1:text="待发货";break;case 2:text="待收货";break;case 3:text="已完成";break;case 4:text="订单已关闭"}return text}},getCancelTime:function(){return function(time){return time-Date.now()/1e3}}}}),d=(r(585),r(10)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"payment bg-white"},[n("div",{staticClass:"payment-hd flex"},[0==t.order.pay_status?[n("img",{attrs:{src:r(584),alt:""}}),t._v(" "),n("div",{staticClass:"status m-l-8 m-r-16 bold"},[t._v("\n                "+t._s(t.getOrderStatus(t.order.order_status))+"\n            ")]),t._v(" "),t.getCancelTime(t.order.order_cancel_time)>0?n("div",{staticClass:"row"},[t._v("\n                请在\n                "),n("count-down",{style:{color:"#FF2C3C"},attrs:{time:t.getCancelTime(t.order.order_cancel_time),format:"hh时mm分ss秒"},on:{finish:t.getOrder}}),t._v("\n                完成支付, 超时后将取消订单\n            ")],1):t._e()]:t._e(),t._v(" "),1==t.order.pay_status?[n("img",{attrs:{src:r(505),alt:""}}),t._v(" "),n("div",{staticClass:"status m-l-8 m-r-16 bold"},[t._v("支付成功")])]:t._e()],2),t._v(" "),n("div",{staticClass:"payment-con"},[n("div",{staticClass:"item flex m-b-16"},[t._v("订单编号："+t._s(t.order.sn))]),t._v(" "),n("div",{staticClass:"item flex m-b-16"},[t._v("\n            订单价格："),n("span",{staticClass:"primary"},[t._v("￥"+t._s(t.order.order_amount))])]),t._v(" "),n("div",{staticClass:"item flex m-b-16"},[t._v("\n            收货地址：\n            "),n("div",[t._v("\n                "+t._s(t.order.consignee)+" "+t._s(t.order.mobile)+"\n                "),n("span",{staticClass:"ml16"},[t._v(t._s(t.order.delivery_address))])])]),t._v(" "),n("div",{staticClass:"item flex m-b-16"},[t._v("\n            商品名称：\n            "),n("div",t._l(t.order.order_goods,(function(e,r){return n("div",{key:r},[n("div",{staticClass:"flex"},[t._v("\n                        "+t._s(e.goods_name)+" /\n                        "),n("span",{staticClass:"m-l-8"},[t._v("\n                            "+t._s(e.spec_value_str))])])])})),0)])]),t._v(" "),n("div",{staticClass:"payment-footer"},[0==t.order.pay_status&&0==t.order.order_status?[n("div",{staticClass:"title lg bold"},[t._v("请选择支付方式")]),t._v(" "),n("div",{staticClass:"flex m-t-16"},t._l(t.payWayArr,(function(e,r){return n("div",{key:r},[n("div",{staticClass:"pay-way flex row-center",on:{click:function(r){return t.orderPay(e.pay_way)}}},[n("img",{attrs:{src:e.icon,alt:""}}),t._v(" "),n("span",{staticClass:"m-l-16 xxl"},[t._v(t._s(e.name))])])])})),0)]:n("nuxt-link",{staticClass:"btn flex row-center",attrs:{to:"/user/order"}},[t._v("查看订单")])],2),t._v(" "),n("el-dialog",{attrs:{title:"微信支付",visible:t.showWxpay,width:"700px",center:""},on:{"update:visible":function(e){t.showWxpay=e},close:t.clearTimer}},[n("div",{staticClass:"flex flex-col row-center black"},[n("vue-qr",{staticClass:"bicode",attrs:{logoScale:20,margin:0,dotScale:1,text:t.payInfo.config.code_url}}),t._v(" "),n("div",{staticClass:"m-t-8",staticStyle:{"font-size":"18px"}},[t._v("\n                微信扫一扫，完成支付\n            ")]),t._v(" "),n("div",{staticClass:"pay-money flex"},[n("span",[t._v("需支付金额：")]),t._v(" "),n("span",{staticClass:"primary"},[n("price-formate",{attrs:{price:t.payInfo.config.order_amount,"subscript-size":18,"first-size":28,"second-size":28}})],1)])],1)])],1)}),[],!1,null,"7605cdda",null);e.default=component.exports;installComponents(component,{CountDown:r(448).default,PriceFormate:r(444).default})}}]);