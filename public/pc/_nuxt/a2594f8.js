(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{443:function(t,e,n){"use strict";n(18),n(60);e.a={head:function(){var t=this.$store.getters.headerMeta;return{title:t.title,link:[{rel:"icon",type:"image/x-icon",href:t.ico}],meta:[{hid:"description",name:"description",content:t.description},{hid:"keywords",name:"keywords",content:t.keywords}]}}}},539:function(t,e,n){var content=n(600);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("a7eed592",content,!0,{sourceMap:!1})},599:function(t,e,n){"use strict";n(539)},600:function(t,e,n){var o=n(16)(!1);o.push([t.i,".news-details-container .nav-container[data-v-3b8aab2e]{padding:15px 16px}.news-details-container .content-box[data-v-3b8aab2e]{display:flex;flex-direction:row}.news-details-container .content-box .news-detail-box[data-v-3b8aab2e]{width:900px}.news-details-container .content-box .news-detail-box .content-header[data-v-3b8aab2e]{padding:20px;border-bottom:1px solid #e5e5e5}.news-details-container .content-box .news-detail-box .content-header .news-detail-title[data-v-3b8aab2e]{color:#222;font-size:24px;font-weight:500;margin-bottom:43px}.news-details-container .content-box .news-detail-box .content-html-box[data-v-3b8aab2e]{padding:24px 20px}.news-details-container .content-box .news-detail-box .content-html-box>div[data-v-3b8aab2e]{width:100%;overflow:hidden}.news-details-container .content-box .news-detail-box .content-html-box>div[data-v-3b8aab2e]  img{width:100%}.news-details-container .content-box .recommend-box[data-v-3b8aab2e]{width:264px}.news-details-container .content-box .recommend-box .recommend-box-header[data-v-3b8aab2e]{padding:15px 10px;border-bottom:1px solid #e5e5e5}.news-details-container .content-box .recommend-box .recommend-box-header .primary-line[data-v-3b8aab2e]{margin-right:10px;background-color:#ff2c3c;width:4px;height:20px}.news-details-container .content-box .recommend-box .recommend-box-content .recommend-list-container .recommend-list-item[data-v-3b8aab2e]{padding:10px;cursor:pointer}.news-details-container .content-box .recommend-box .recommend-box-content .recommend-list-container .recommend-list-item .goods-info[data-v-3b8aab2e]{margin-top:8px}",""]),t.exports=o},665:function(t,e,n){"use strict";n.r(e);var o=n(8),d=(n(52),{mixins:[n(443).a],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,d,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$get,t.$post,o=t.query,d={},r=[],e.next=5,n("shop_notice/detail",{params:{id:o.id,client:2}});case 5:return 1==(c=e.sent).code&&(d=c.data,r=c.data.newest),e.abrupt("return",{detailsObj:d,recommend_list:r});case 8:case"end":return e.stop()}}),e)})))()},watchQuery:["id"],data:function(){return{recommend_list:[]}},mounted:function(){console.log("route",this.$route)},methods:{toOther:function(t){this.$router.push("/news_list/news_list_detail?id="+t)}}}),r=(n(599),n(10)),component=Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-details-container m-t-16"},[n("div",{staticClass:"nav-container flex"},[n("div",{staticClass:"nr",staticStyle:{width:"70px"}},[t._v("当前位置：")]),t._v(" "),n("el-breadcrumb",{staticStyle:{flex:"1"},attrs:{separator:"/"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),n("el-breadcrumb-item",[n("nuxt-link",{attrs:{to:"/news_list"}},[t._v("商城资讯")])],1),t._v(" "),n("el-breadcrumb-item",{staticClass:"line-1",staticStyle:{"max-width":"800px"}},[t._v(t._s(t.detailsObj.name))])],1)],1),t._v(" "),n("div",{staticClass:"content-box"},[n("div",{staticClass:"news-detail-box m-r-16"},[n("div",{staticClass:"content-header bg-white"},[n("div",{staticClass:"news-detail-title"},[t._v("\n                    "+t._s(t.detailsObj.name)+"\n                ")]),t._v(" "),n("div",{staticClass:"flex "},[n("div",{staticClass:"sm muted"},[t._v("\n                        发布时间："+t._s(t.detailsObj.create_time)+"\n                    ")]),t._v(" "),n("div",{staticClass:"flex ",staticStyle:{"margin-left":"40px"}},[n("i",{staticClass:"el-icon-view muted"}),t._v(" "),n("div",{staticClass:"muted",staticStyle:{"margin-left":"3px"}},[t._v(t._s(t.detailsObj.views)+" 人浏览")])])])]),t._v(" "),n("div",{staticClass:"content-html-box bg-white"},[n("div",{domProps:{innerHTML:t._s(t.detailsObj.content)}})])]),t._v(" "),n("div",{staticClass:"recommend-box"},[t._m(0),t._v(" "),n("div",{staticClass:"recommend-box-content bg-white"},[n("div",{staticClass:"recommend-list-container"},t._l(t.recommend_list,(function(e){return n("div",{key:e.id,staticClass:"recommend-list-item",on:{click:function(n){return t.toOther(e.id)}}},[n("el-image",{staticStyle:{width:"244px",height:"183px","border-radius":"6px"},attrs:{fit:"cover",src:e.image}}),t._v(" "),n("div",{staticClass:"goods-info"},[n("div",{staticClass:"line-2 goods-name"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"flex",staticStyle:{"margin-top":"10px"}},[n("i",{staticClass:"el-icon-view muted"}),t._v(" "),n("div",{staticClass:"muted xs",staticStyle:{"margin-left":"4px"}},[t._v(t._s(e.views)+" 人浏览")])])])],1)})),0)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend-box-header flex  bg-white"},[n("div",{staticClass:"primary-line"}),t._v(" "),n("div",{staticClass:"xxl",staticStyle:{"font-weight":"500"}},[t._v("为您推荐")])])}],!1,null,"3b8aab2e",null);e.default=component.exports}}]);