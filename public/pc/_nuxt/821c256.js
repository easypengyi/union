(window.webpackJsonp=window.webpackJsonp||[]).push([[30,5,9],{438:function(e,t,n){"use strict";var o=n(19),r=n(2),l=n(3),c=n(135),d=n(28),f=n(20),m=n(273),h=n(53),v=n(134),x=n(272),w=n(4),y=n(90).f,k=n(44).f,S=n(27).f,C=n(439),_=n(440).trim,O="Number",N=r.Number,T=N.prototype,I=r.TypeError,E=l("".slice),R=l("".charCodeAt),M=function(e){var t=x(e,"number");return"bigint"==typeof t?t:j(t)},j=function(e){var t,n,o,r,l,c,d,code,f=x(e,"number");if(v(f))throw I("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=_(f),43===(t=R(f,0))||45===t){if(88===(n=R(f,2))||120===n)return NaN}else if(48===t){switch(R(f,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+f}for(c=(l=E(f,2)).length,d=0;d<c;d++)if((code=R(l,d))<48||code>r)return NaN;return parseInt(l,o)}return+f};if(c(O,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var D,L=function(e){var t=arguments.length<1?0:N(M(e)),n=this;return h(T,n)&&w((function(){C(n)}))?m(Object(t),n,L):t},A=o?y(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;A.length>P;P++)f(N,D=A[P])&&!f(L,D)&&S(L,D,k(N,D));L.prototype=T,T.constructor=L,d(r,O,L)}},439:function(e,t,n){var o=n(3);e.exports=o(1..valueOf)},440:function(e,t,n){var o=n(3),r=n(26),l=n(15),c=n(441),d=o("".replace),f="["+c+"]",m=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),v=function(e){return function(t){var n=l(r(t));return 1&e&&(n=d(n,m,"")),2&e&&(n=d(n,h,"")),n}};e.exports={start:v(1),end:v(2),trim:v(3)}},441:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},443:function(e,t,n){"use strict";n(18),n(60);t.a={head:function(){var e=this.$store.getters.headerMeta;return{title:e.title,link:[{rel:"icon",type:"image/x-icon",href:e.ico}],meta:[{hid:"description",name:"description",content:e.description},{hid:"keywords",name:"keywords",content:e.keywords}]}}}},448:function(e,t,n){"use strict";n.r(t);n(438),n(62),n(61),n(11),n(92),n(38),n(91);var o=6e4,r=36e5,l=24*r;function c(e){return(0+e.toString()).slice(-2)}var d={components:{},props:{isSlot:{type:Boolean,default:!1},time:{type:Number,default:0},format:{type:String,default:"hh:mm:ss"},autoStart:{type:Boolean,default:!0}},watch:{time:{immediate:!0,handler:function(e){e&&this.reset()}}},data:function(){return{timeObj:{},formateTime:0}},created:function(){},computed:{},methods:{createTimer:function(e){return setTimeout(e,100)},isSameSecond:function(e,t){return Math.floor(e)===Math.floor(t)},start:function(){this.counting||(this.counting=!0,this.endTime=Date.now()+1e3*this.remain,this.setTimer())},setTimer:function(){var e=this;this.tid=this.createTimer((function(){var t=e.getRemain();e.isSameSecond(t,e.remain)&&0!==t||e.setRemain(t),0!==e.remain&&e.setTimer()}))},getRemain:function(){return Math.max(this.endTime-Date.now(),0)},pause:function(){this.counting=!1,clearTimeout(this.tid)},reset:function(){this.pause(),this.remain=this.time,this.setRemain(this.remain),this.autoStart&&this.start()},setRemain:function(e){var t=this.format;this.remain=e;var time,n=(time=e,{days:Math.floor(time/l),hours:c(Math.floor(time%l/r)),minutes:c(Math.floor(time%r/o)),seconds:c(Math.floor(time%o/1e3))});this.formateTime=function(e,t){var n=t.days,o=t.hours,r=t.minutes,l=t.seconds;return-1!==e.indexOf("dd")&&(e=e.replace("dd",n)),-1!==e.indexOf("hh")&&(e=e.replace("hh",c(o))),-1!==e.indexOf("mm")&&(e=e.replace("mm",c(r))),-1!==e.indexOf("ss")&&(e=e.replace("ss",c(l))),e}(t,n),this.$emit("change",n),0===e&&(this.pause(),this.$emit("finish"))}}},f=n(10),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.time>=0?n("div",[n("client-only",[e.isSlot?e._t("default"):n("span",[e._v(e._s(e.formateTime))])],2)],1):e._e()}),[],!1,null,null,null);t.default=component.exports},452:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));n(34),n(38),n(274),n(93),n(61),n(11),n(45),n(63),n(46),n(18),n(60),n(64),n(47);var o=function(e){var time=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,t=arguments.length>2?arguments[2]:void 0,n=new Date(0).getTime();return function(){var o=(new Date).getTime();if(o-n>time){for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];e.apply(t,l),n=o}}};var r=function(e){var t=document.createElement("input");t.setAttribute("value",e),document.body.appendChild(t),t.select();try{if(document.execCommand("copy"))return Promise.resolve();throw new Error}catch(e){return Promise.reject(e)}finally{document.body.removeChild(t)}}},453:function(e,t,n){var content=n(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("38f78140",content,!0,{sourceMap:!1})},454:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return r})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return d}));var o=4,r={SMS:0,ACCOUNT:1},l={REGISTER:"ZCYZ",FINDPWD:"ZHMM",LOGIN:"YZMDL",SJSQYZ:"SJSQYZ",CHANGE_MOBILE:"BGSJHM",BIND:"BDSJHM"},c={NONE:"",SEX:"sex",NICKNAME:"nickname",AVATAR:"avatar",MOBILE:"mobile"},d={NORMAL:"apply",HANDLING:"status_ing",FINISH:"status_success_fail"}},460:function(e,t,n){"use strict";var o=n(6),r=n(275);o({target:"String",proto:!0,forced:n(276)("link")},{link:function(e){return r(this,"a","href",e)}})},461:function(e,t,n){"use strict";n(453)},462:function(e,t,n){var o=n(16)(!1);o.push([e.i,".ad-item[data-v-0bdad4aa]{width:100%;height:100%;cursor:pointer}",""]),e.exports=o},467:function(e,t,n){"use strict";n.r(t);n(460),n(452);var o={components:{},props:{item:{type:Object,default:function(){return{}}}},methods:{goPage:function(e){var t=e.link,n=t.type,path=t.path,o=t.params;switch(n){case"goods":case"seckill":case"category":path+="?id=".concat(o.id),this.$router.push({path:path});break;default:this.$router.push({path:path})}}}},r=(n(461),n(10)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ad-item",on:{click:function(t){return t.stopPropagation(),e.goPage(e.item)}}},[n("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.$getImageUri(e.item.url)}})],1)}),[],!1,null,"0bdad4aa",null);t.default=component.exports},537:function(e,t,n){var content=n(596);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("178bc540",content,!0,{sourceMap:!1})},595:function(e,t,n){"use strict";n(537)},596:function(e,t,n){var o=n(16)(!1);o.push([e.i,'.login[data-v-adbfa7a0]{flex:1;background-size:cover;background-repeat:no-repeat;background-position:50%;min-width:1180px}.login .login-container[data-v-adbfa7a0]{margin:0 auto;width:1180px;height:100%;position:relative}.login .login-container .login-banner[data-v-adbfa7a0]{display:flex;align-items:center;justify-content:center;width:750px;margin-right:30px;height:440px;overflow:hidden;-webkit-animation:loadimg-data-v-adbfa7a0 2s infinite;animation:loadimg-data-v-adbfa7a0 2s infinite;transition:background-color 2s}@-webkit-keyframes loadimg-data-v-adbfa7a0{0%{background-color:#e4e4e4}50%{background-color:#f0f0f0}to{background-color:#e4e4e4}}@keyframes loadimg-data-v-adbfa7a0{0%{background-color:#e4e4e4}50%{background-color:#f0f0f0}to{background-color:#e4e4e4}}.login .login-container .login-float-form-wrap[data-v-adbfa7a0]{width:400px;height:440px}.login .login-container .login-float-form-wrap .login-box[data-v-adbfa7a0]{background-color:#fff;height:100%;display:flex;flex-direction:column;justify-content:space-between}.login .login-container .login-float-form-wrap .login-box .login-header-box[data-v-adbfa7a0]{padding-top:20px}.login .login-container .login-float-form-wrap .login-box .login-header-box .header-tabs .header-tab[data-v-adbfa7a0]{width:160px;height:35px;display:flex;flex-direction:column;align-items:center;cursor:pointer}.login .login-container .login-float-form-wrap .login-box .login-header-box .header-tabs .active-tab[data-v-adbfa7a0]{color:#ff2c3c;text-align:center}.login .login-container .login-float-form-wrap .login-box .login-header-box .header-tabs .active-tab[data-v-adbfa7a0]:after{content:"";height:2px;width:72px;margin-top:8px;background-color:#ff2c3c}.login .login-container .login-float-form-wrap .login-box .login-header-box .login-form-box[data-v-adbfa7a0]{padding:20px 30px 0}.login .login-container .login-float-form-wrap .login-box .login-header-box .login-form-box .login-form-item[data-v-adbfa7a0]{margin-top:20px}.login .login-container .login-float-form-wrap .login-box .login-header-box .login-form-box .login-form-item .input-phone-num[data-v-adbfa7a0]{width:340px}.login .login-container .login-float-form-wrap .login-box .login-header-box .login-form-box .login-form-item .verify-code-img[data-v-adbfa7a0]{width:100px;height:40px;margin-left:20px;background-color:red}.login .login-container .login-float-form-wrap .login-box .login-header-box .login-form-box .login-form-item .sms-btn[data-v-adbfa7a0]{margin-left:20px;height:40px}.login .login-container .login-float-form-wrap .login-box .login-header-box .option-box[data-v-adbfa7a0]{padding:0 30px;margin-top:40px}.login .login-container .login-float-form-wrap .login-box .login-header-box .option-box[data-v-adbfa7a0]  .el-checkbox{color:#888}.login .login-container .login-float-form-wrap .login-box .login-footer-box[data-v-adbfa7a0]{height:60px;padding:20px}.login .login-container .login-float-form-wrap .login-box .login-footer-box .login__other-item[data-v-adbfa7a0]{cursor:pointer}.login .login-container .login-float-form-wrap .login-box .login-footer-box .login__weixin-icon[data-v-adbfa7a0]{width:1.5em;height:1.5em;text-align:center;line-height:1.5em;border-radius:50%;background-color:#0abd5d;color:#fff}',""]),e.exports=o},663:function(e,t,n){"use strict";n.r(t);n(23),n(18),n(22),n(11),n(29),n(21),n(30);var o=n(8),r=n(9),l=(n(38),n(91),n(52),n(454)),c=n(117),d=n.n(c),f=n(12),m=n(448);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var x={mixins:[n(443).a],layout:"default-layout",components:{CountDown:m.default},data:function(){return{selectNumberType:"中国+86",account:"",password:"",telephone:"",verifyCode:"",smsCode:"",isRemember:!0,loginStatus:l.e.SMS,canSend:!0,adData:{content:{url:""}}}},computed:v({},Object(f.d)(["publicData"])),methods:v(v(v({},Object(f.c)(["setToken"])),Object(f.b)(["getPublicData"])),{},{getPage:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$get("Pc/getPage",{params:{type:2}});case 2:data=t.sent,console.log(data,"data"),1==data.code&&(e.adData=data.data);case 5:case"end":return t.stop()}}),t)})))()},changeLoginType:function(e){this.loginStatus=e,this.telephone="",this.verifyCode="",this.smsCode="";var t=JSON.parse(localStorage.getItem("ACCOUNT")),n=JSON.parse(localStorage.getItem("TEL"));t&&t.account&&(this.account=t.account),n&&n.telephone&&(this.telephone=n.telephone)},sendSMSCode:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.canSend){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$post("login/captcha",{mobile:e.telephone,key:l.c.LOGIN,client:l.d});case 4:1==(n=t.sent).code&&(e.$message({message:n.msg,type:"success"}),e.canSend=!1);case 6:case"end":return t.stop()}}),t)})))()},smsLogin:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$post("login/account",{account:e.telephone,code:e.smsCode,scene:2,terminal:l.d});case 2:1==(n=t.sent).code&&(o=n.data.token,d.a.set("token",o,{expires:60}),e.setToken(o),e.$router.replace({path:d.a.get("back_url")||"/"}),d.a.remove("back_url"),e.getPublicData(),e.isRemember?localStorage.setItem("TEL",JSON.stringify({telephone:e.telephone})):localStorage.setItem("TEL",JSON.stringify({telephone:""})));case 4:case"end":return t.stop()}}),t)})))()},accountLogin:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$post("login/account",{account:e.account,password:e.password,scene:1,terminal:l.d});case 2:1==(n=t.sent).code&&(o=n.data.token,d.a.set("token",o,{expires:60}),e.setToken(o),e.$router.replace({path:d.a.get("back_url")||"/"}),d.a.remove("back_url"),e.getPublicData(),e.isRemember?localStorage.setItem("ACCOUNT",JSON.stringify({account:e.account})):localStorage.setItem("ACCOUNT",JSON.stringify({account:""})));case 4:case"end":return t.stop()}}),t)})))()}}),created:function(){var e=this.$route.query;e.code&&e.state&&this.handleWechatLogin({code:e.code,state:e.state}),this.getPage()},mounted:function(){var e,t,n,o;console.log(localStorage);var r=null!==(e=JSON.parse(localStorage.getItem("ACCOUNT")))&&void 0!==e?e:{},l=null!==(t=JSON.parse(localStorage.getItem("TEL")))&&void 0!==t?t:{};this.account=null!==(n=null==r?void 0:r.account)&&void 0!==n?n:"",this.telephone=null!==(o=null==l?void 0:l.telephone)&&void 0!==o?o:""}},w=(n(595),n(10)),component=Object(w.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login flex col-center"},[n("div",{staticClass:"login-container flex col-stretch"},[n("div",{staticClass:"login-banner"},[e.adData.content?n("ad-item",{attrs:{item:e.adData.content}}):e._e()],1),e._v(" "),n("div",{staticClass:"login-float-form-wrap"},[n("div",{staticClass:"login-box"},[n("div",{staticClass:"login-header-box"},[n("div",{staticClass:"header-tabs flex row-center"},[n("div",{staticClass:"header-tab xxl",class:{"active-tab":0==e.loginStatus},on:{click:function(t){return e.changeLoginType(0)}}},[e._v("\n                            验证码登录\n                        ")]),e._v(" "),n("div",{staticClass:"header-tab xxl",class:{"active-tab":1==e.loginStatus},on:{click:function(t){return e.changeLoginType(1)}}},[e._v("\n                            账号密码登录\n                        ")])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0==e.loginStatus,expression:"loginStatus == 0"}],on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.smsLogin.apply(null,arguments)}}},[n("div",{staticClass:"login-form-box"},[n("div",{staticClass:"login-form-item"},[n("el-input",{staticClass:"input-phone-num",attrs:{placeholder:"请输入手机号码"},model:{value:e.telephone,callback:function(t){e.telephone=t},expression:"telephone"}},[n("el-select",{staticStyle:{width:"100px"},attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.selectNumberType,callback:function(t){e.selectNumberType=t},expression:"selectNumberType"}},[n("el-option",{attrs:{label:"中国+86",value:"1"}})],1)],1)],1),e._v(" "),n("div",{staticClass:"login-form-item flex"},[n("el-input",{staticStyle:{width:"210px"},attrs:{placeholder:"短信验证码"},model:{value:e.smsCode,callback:function(t){e.smsCode=t},expression:"smsCode"}}),e._v(" "),n("el-button",{staticClass:"sms-btn",on:{click:e.sendSMSCode}},[e.canSend?n("div",[e._v("获取验证码")]):n("count-down",{attrs:{time:60,format:"ss秒",autoStart:!0},on:{finish:function(t){e.canSend=!0}}})],1)],1)]),e._v(" "),n("div",{staticClass:"option-box flex-col"},[n("el-checkbox",{staticClass:"muted",model:{value:e.isRemember,callback:function(t){e.isRemember=t},expression:"isRemember"}},[e._v("记住账号")]),e._v(" "),n("div",{staticClass:"m-t-26 flex-col"},[n("el-button",{attrs:{type:"primary"},on:{click:e.smsLogin}},[e._v("立即登录")])],1)],1)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:1==e.loginStatus,expression:"loginStatus == 1"}],on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.accountLogin.apply(null,arguments)}}},[n("div",{staticClass:"login-form-box"},[n("div",{staticClass:"login-form-item"},[n("el-input",{staticClass:"input-phone-num",attrs:{placeholder:"请输入账号/手机号码"},model:{value:e.account,callback:function(t){e.account=t},expression:"account"}},[n("i",{staticClass:"el-icon-user",staticStyle:{"font-size":"18px"},attrs:{slot:"prepend"},slot:"prepend"})])],1),e._v(" "),n("div",{staticClass:"login-form-item flex"},[n("el-input",{attrs:{placeholder:"请输入密码","show-password":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}},[n("i",{staticClass:"el-icon-more-outline",staticStyle:{"font-size":"18px"},attrs:{slot:"prepend"},slot:"prepend"})])],1)]),e._v(" "),n("div",{staticClass:"option-box flex-col"},[n("div",{staticClass:"flex row-between"},[n("el-checkbox",{staticClass:"muted",model:{value:e.isRemember,callback:function(t){e.isRemember=t},expression:"isRemember"}},[e._v("记住账号")]),e._v(" "),n("nuxt-link",{staticClass:"muted",attrs:{to:"/account/forget_pwd"}},[e._v("忘记密码？")])],1),e._v(" "),n("div",{staticClass:"m-t-26 flex-col"},[n("el-button",{attrs:{type:"primary"},on:{click:e.accountLogin}},[e._v("立即登录")])],1)])])]),e._v(" "),n("div",{staticClass:"login-footer-box flex row-center"},[n("nuxt-link",{staticClass:"primary",attrs:{to:"/account/register"}},[e._v("\n                        注册账号\n                    ")])],1)])])])])}),[],!1,null,"adbfa7a0",null);t.default=component.exports;installComponents(component,{AdItem:n(467).default,CountDown:n(448).default})}}]);