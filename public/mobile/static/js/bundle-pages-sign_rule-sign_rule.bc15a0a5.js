(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bundle-pages-sign_rule-sign_rule"],{5385:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"m-t-20 m-l-20 m-r-20"},[n("v-uni-text",{staticClass:"nr sign-rule"},[e._v(e._s(e.rules))])],1)},u=[]},"56ea":function(e,t,n){"use strict";var r=n("65c8"),a=n.n(r);a.a},"65c8":function(e,t,n){var r=n("680e");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("4f06").default;a("f6386de4",r,!0,{sourceMap:!1,shadowMode:!1})},"680e":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,"@charset \"UTF-8\";\n/* 颜色变量 */\n/** S Font's size **/\n/** E Font's size **/[data-v-14365789]:export{red_theme:#ff2c3c;orange_theme:#f7971e;pink_theme:#fa444d;gold_theme:#e0a356;blue_theme:#2f80ed;green_theme:#2ec840}.sign-rule[data-v-14365789]{line-height:%?36?%}",""]),e.exports=t},"8c42":function(e,t,n){"use strict";n.r(t);var r=n("ae2b"),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=a.a},9924:function(e,t,n){"use strict";n.r(t);var r=n("5385"),a=n("8c42");for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("56ea");var i,s=n("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"14365789",null,!1,r["a"],i);t["default"]=c.exports},ae2b:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("d19d"),a={data:function(){return{rules:""}},methods:{signGetRemark:function(){var e=this;(0,r.apiSignGetRemark)().then((function(t){e.rules=t.remark}))}},onLoad:function(){this.signGetRemark()}};t.default=a}}]);