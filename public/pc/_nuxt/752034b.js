(window.webpackJsonp=window.webpackJsonp||[]).push([[18,15],{495:function(t,e,r){var content=r(523);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("4ea4674e",content,!0,{sourceMap:!1})},522:function(t,e,r){"use strict";r(495)},523:function(t,e,r){var o=r(16)(!1);o.push([t.i,".category[data-v-bdbaf238]{position:relative}.category .title[data-v-bdbaf238]{padding:12px 20px;flex:none;width:160px;box-sizing:border-box}.category .category-con[data-v-bdbaf238]{position:absolute;width:100%;z-index:999;height:440px;padding:10px 0;box-shadow:0 2px 4px rgba(0,0,0,.1)}.category .category-con .category-one[data-v-bdbaf238]{height:100%;overflow:hidden}.category .category-con .category-one li>a[data-v-bdbaf238]{height:42px;padding:0 20px}.category .category-con .category-one li.active[data-v-bdbaf238]{background-color:#ffeeef}.category .category-con .category-one li.active a[data-v-bdbaf238]{color:#ff2c3c}.category .category-con .category-one .category-float[data-v-bdbaf238]{box-shadow:0 2px 4px rgba(0,0,0,.1);position:absolute;left:160px;top:0;width:880px;height:440px;padding:0 24px;overflow-y:auto}.category .category-con .category-one .category-float[data-v-bdbaf238]::-webkit-scrollbar{display:none}.category .category-con .category-one .category-float a[data-v-bdbaf238]:hover{color:#ff2c3c}.category .category-con .category-one .category-float .float-con .category-three[data-v-bdbaf238]{border-bottom:1px dashed hsla(0,0%,89.8%,.89804)}.category .category-con .category-one .category-float .float-con .category-three .item[data-v-bdbaf238]{width:20%;margin-bottom:20px;padding-right:10px}",""]),t.exports=o},566:function(t,e,r){var content=r(653);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("dde25ec8",content,!0,{sourceMap:!1})},573:function(t,e,r){"use strict";r.r(e);r(23),r(18),r(22),r(11),r(29),r(21),r(30);var o=r(9),c=r(12);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={data:function(){return{cateTwo:[],showCateFloat:!1,showCate:!1,selectIndex:""}},mounted:function(){console.log(this.category)},methods:{enterCate:function(t){this.cateTwo=this.category.lists[t].sons,this.showCateFloat=!0,this.selectIndex=t},leaveCate:function(){"/"!=this.$route.path&&(this.showCate=!1),this.selectIndex="",this.showCateFloat=!1}},watch:{$route:{immediate:!0,handler:function(t){this.showCate="/"==t.path}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.d)(["category"]))},d=l,h=(r(522),r(10)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"category",on:{mouseenter:function(e){t.showCate=!0},mouseleave:t.leaveCate}},[r("nuxt-link",{staticClass:"title bg-primary lg white flex",attrs:{to:"/category"}},[r("i",{staticClass:"el-icon-s-fold"}),t._v(" "),r("div",{staticClass:"ml8"},[t._v("全部商品分类")])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.category.length&&t.showCate,expression:"category.length && showCate"}],staticClass:"category-con bg-white"},[r("ul",{staticClass:"category-one"},[t._l(t.category.lists,(function(e,o){return r("li",{key:o,class:{active:o===t.selectIndex},on:{mouseenter:function(e){return t.enterCate(o)}}},[r("nuxt-link",{staticClass:"flex row-center",attrs:{to:"/category?id="+e.id}},[r("span",{staticClass:"line1"},[t._v(t._s(e.name))])])],1)})),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showCateFloat,expression:"showCateFloat"}],staticClass:"category-float bg-white"},[r("div",{staticClass:"float-con"},t._l(t.cateTwo,(function(e,o){return r("div",{key:o,staticClass:"mt16"},[r("div",{staticClass:"category-two bold mb8"},[r("nuxt-link",{attrs:{to:"/category?id="+e.id}},[t._v(t._s(e.name))])],1),t._v(" "),r("div",{staticClass:"category-three flex wrap"},t._l(e.sons,(function(e,o){return r("div",{key:o,staticClass:"item"},[r("nuxt-link",{staticClass:"flex",attrs:{to:"/category?id="+e.id}},[r("el-image",{staticStyle:{width:"48px",height:"48px"},attrs:{src:e.image,fit:"contain"}}),t._v(" "),r("span",{staticClass:"ml8"},[t._v(t._s(e.name))])],1)],1)})),0)])})),0)])],2)])],1)}),[],!1,null,"bdbaf238",null);e.default=component.exports},652:function(t,e,r){"use strict";r(566)},653:function(t,e,r){var o=r(16)(!1);o.push([t.i,'.header-wrap[data-v-d7e94bcc]{min-width:1180px;position:relative;z-index:1000}.header-wrap[data-v-d7e94bcc]  .swiper-container{margin-left:0;margin-right:0;height:100%;width:400px}.header-wrap .swiper-item[data-v-d7e94bcc]{color:#ccc;height:17px}.header-wrap .header-con[data-v-d7e94bcc]{background-color:#333;height:40px;color:#f2f2f2}.header-wrap .header-con>div[data-v-d7e94bcc]{height:100%;color:#ccc}.header-wrap .header-con>div a[data-v-d7e94bcc]{color:#ccc}.header-wrap .header-con>div a[data-v-d7e94bcc]:hover{color:#fff}.header-wrap .header-con>div ul li[data-v-d7e94bcc]{margin-left:20px}.header-wrap .header-con>div ul #tel-phone-block[data-v-d7e94bcc]{position:relative}.header-wrap .header-con>div ul #tel-phone-block:hover .float-code[data-v-d7e94bcc]{display:flex;box-shadow:0 2px 8px 0 rgba(0,0,0,.1)}.header-wrap .header-con>div ul #tel-phone-block .float-code[data-v-d7e94bcc]{display:none;position:absolute;padding:22px 16px;background-color:#fff;top:24px;right:-20px}.header-wrap .header-con>div ul #tel-phone-block .float-code[data-v-d7e94bcc]:after{content:"";width:8px;box-shadow:0 2px 8px 0 rgba(0,0,0,.1);transform:matrix(.71,.71,-.71,.71,0,0);right:35px;top:-4px;height:8px;background-color:#fff;position:absolute}.header-wrap .header-main .search-wrap[data-v-d7e94bcc]{height:80px}.header-wrap .header-main .search-wrap .logo[data-v-d7e94bcc]{height:56px;width:auto}.header-wrap .header-main .search-wrap .search[data-v-d7e94bcc]{width:460px;height:42px;overflow:hidden}.header-wrap .header-main .search-wrap .search input[data-v-d7e94bcc]{flex:1;height:100%;border-radius:4px 0 0 4px;border:1px solid #ff2c3c;border-right-width:0;padding:0 10px}.header-wrap .header-main .search-wrap .search .search-btn[data-v-d7e94bcc]{width:82px;height:42px;cursor:pointer;border-radius:0 4px 4px 0}.header-wrap .header-main .search-wrap .cart[data-v-d7e94bcc]{cursor:pointer;background-color:#ffeeef;border:1px solid #ff2c3c;border-radius:4px;width:142px;height:42px;margin-left:16px}.header-wrap .header-main .search-wrap .cart span[data-v-d7e94bcc]{font-size:24px}.header-wrap .header-nav[data-v-d7e94bcc]{border-top:1px solid #f5f7f9}.header-wrap .header-nav .nav-wrap[data-v-d7e94bcc]{width:1180px;margin:0 auto}.header-wrap .header-nav .nav[data-v-d7e94bcc]{overflow-x:auto;overflow-y:hidden}.header-wrap .header-nav .nav .item a[data-v-d7e94bcc]{padding:12px 15px;margin:0 10px;color:#333;font-size:16px;white-space:nowrap}.header-wrap .header-nav .nav .item a.nuxt-link-exact-active[data-v-d7e94bcc],.header-wrap .header-nav .nav .item a[data-v-d7e94bcc]:hover{color:#ff2c3c}.user-nav .item[data-v-d7e94bcc]{text-align:center;line-height:34px;display:block;cursor:pointer}.user-nav .item[data-v-d7e94bcc]:not(:last-child){border-bottom:1px solid #e5e5e5}.user-nav .item[data-v-d7e94bcc]:hover{color:#ff2c3c}',""]),t.exports=o},687:function(t,e,r){"use strict";r.r(e);r(23),r(18),r(22),r(11),r(29),r(21),r(30);var o=r(9),c=(r(45),r(62),r(573)),n=r(261),l=r(12);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={components:{Category:c.default},directives:{swiper:n.directive},data:function(){return{name:"",swiperOptions:{direction:"vertical",height:40,initialSlide:0,autoplay:!0}}},methods:h(h(h({},Object(l.c)(["logout"])),Object(l.b)(["getPublicData"])),{},{toSearch:function(){if(!this.name)return this.$message.error("请输入商品名称");this.$router.push({path:"/goods_list",query:{name:this.name}})},onLogout:function(){this.logout(),this.$message({message:"退出成功",type:"success"}),setTimeout((function(){return location.reload()}),1500)}}),watch:{$route:{immediate:!0,handler:function(t){console.log(t),"/goods_list"==t.path?this.name=t.query.name:this.name=""}}},computed:h({},Object(l.d)(["publicData"]))},f=(r(652),r(10)),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",{staticClass:"header-wrap"},[r("div",{staticClass:"header-con xs"},[r("div",{staticClass:"wrapper1180 flex row-between"},[r("div",{staticClass:"flex",staticStyle:{height:"100%"}},[t.publicData.shop.name?r("div",[t._v("您好，欢迎来到 "+t._s(t.publicData.shop.name)+"！")]):t._e(),t._v(" "),t.publicData.article&&t.publicData.article.length?[r("client-only",[r("swiper",{ref:"headerSwiper",attrs:{options:t.swiperOptions}},t._l(t.publicData.article,(function(e,o){return r("swiper-slide",{key:o,staticClass:"swiper-item"},[r("nuxt-link",{staticClass:"column",staticStyle:{height:"100%"},attrs:{to:"/news_list/news_list_detail?id="+e.id}},[r("div",{staticClass:"line1"},[t._v(t._s(e.title))])])],1)})),1)],1)]:t._e()],2),t._v(" "),r("div",{staticClass:"user flex "},[r("ul",{staticClass:"flex flex-1"},[t.publicData.my.nickname?r("li",[r("el-popover",{attrs:{placement:"bottom",trigger:"hover"}},[r("div",{staticClass:"user-nav"},[r("nuxt-link",{staticClass:"lighter xs item",attrs:{to:"/user/user_wallet"}},[t._v("我的钱包")]),t._v(" "),r("nuxt-link",{staticClass:"lighter xs item",attrs:{to:"/user/coupons"}},[t._v("\n                                        优惠券("+t._s(t.publicData.coupon_num)+")")]),t._v(" "),r("nuxt-link",{staticClass:"lighter xs item",attrs:{to:"/user/collection"}},[t._v("我的收藏")]),t._v(" "),r("div",{staticClass:"lighter xs item",on:{click:t.onLogout}},[t._v("\n                                        退出登录\n                                    ")])],1),t._v(" "),r("nuxt-link",{attrs:{slot:"reference",to:"/user/profile"},slot:"reference"},[t._v("\n                                    "+t._s(t.publicData.my.nickname)+"\n                                    "),r("i",{staticClass:"el-icon-arrow-down"})])],1)],1):r("li",[r("nuxt-link",{attrs:{to:"/account/login"}},[t._v("登录")]),t._v("\n                            ｜\n                            "),r("nuxt-link",{attrs:{to:"/account/register"}},[t._v("注册")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/user/order"}},[t._v("我的订单")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/user/profile"}},[t._v("个人中心")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/help_center"}},[t._v("帮助中心")])],1),t._v(" "),t.publicData.mnp_qr_code||t.publicData.oa_qr_code?r("li",{attrs:{id:"tel-phone-block"}},[r("nuxt-link",{attrs:{to:"/"}},[t._v("手机端\n                                "),r("i",{staticClass:"el-icon-arrow-down"})]),t._v(" "),r("div",{staticClass:"float-code flex bg-white"},[t.publicData.mnp_qr_code?r("div",{staticClass:"column-center bg-white"},[r("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.publicData.mnp_qr_code,alt:""}}),t._v(" "),r("div",{staticClass:"lighter mt10"},[t._v("官方小程序")])]):t._e(),t._v(" "),t.publicData.oa_qr_code?r("div",{staticClass:"column-center",staticStyle:{"margin-left":"30px"}},[r("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.publicData.oa_qr_code,alt:""}}),t._v(" "),r("div",{staticClass:"lighter mt10"},[t._v("公众号演示")])]):t._e()])],1):t._e(),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/"}},[t._v("返回官网")])],1)])])])]),t._v(" "),r("div",{staticClass:"header-main bg-white"},[r("div",{staticClass:"wrapper1180"},[r("div",{staticClass:"search-wrap flex row-between"},[r("nuxt-link",{staticClass:"flex row-center",attrs:{to:"/"}},[r("img",{staticClass:"logo",attrs:{src:t.publicData.shop.logo,alt:"logo"}})]),t._v(" "),r("div",{staticClass:"flex"},[r("div",{staticClass:"search flex"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"请输入要搜索的商品名称"},domProps:{value:t.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.toSearch.apply(null,arguments)},input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),r("div",{staticClass:"search-btn bg-primary white flex row-center",on:{click:t.toSearch}},[t._v("\n                                搜索\n                            ")])]),t._v(" "),r("nuxt-link",{staticClass:"cart primary flex row-center",attrs:{to:"/shop_cart"}},[r("span",{staticClass:"iconfont icon-cart-Empty"}),t._v(" 我的购物车("+t._s(t.publicData.my.cart)+")\n                        ")])],1)],1)])]),t._v(" "),r("div",{staticClass:"header-nav bg-white"},[r("div",{staticClass:"nav-wrap flex"},[r("category"),t._v(" "),r("ul",{staticClass:"nav flex"},[r("li",{staticClass:"item"},[r("nuxt-link",{attrs:{to:"/"}},[t._v("首页")])],1),t._v(" "),r("li",{staticClass:"item"},[r("nuxt-link",{attrs:{to:"/goods_list/1"}},[t._v("热销榜单")])],1),t._v(" "),r("li",{staticClass:"item"},[r("nuxt-link",{attrs:{to:"/goods_list/2"}},[t._v("新品推荐")])],1),t._v(" "),r("li",{staticClass:"item"},[r("nuxt-link",{attrs:{to:"/goods_list/3"}},[t._v("好物优选")])],1),t._v(" "),r("li",{staticClass:"item"},[r("nuxt-link",{attrs:{to:"/seckill"}},[t._v("限时秒杀")])],1),t._v(" "),r("li",{staticClass:"item"},[r("nuxt-link",{attrs:{to:"/get_coupons"}},[t._v("领券中心")])],1),t._v(" "),r("li",{staticClass:"item"},[r("nuxt-link",{attrs:{to:"/news_list"}},[t._v("商城资讯")])],1),t._v(" "),r("li",{staticClass:"item"},[r("nuxt-link",{attrs:{to:"/help_center"}},[t._v("帮助中心")])],1)])],1)])])])}),[],!1,null,"d7e94bcc",null);e.default=component.exports}}]);