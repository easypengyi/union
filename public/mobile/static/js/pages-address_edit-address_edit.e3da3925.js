(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address_edit-address_edit"],{"0509":function(e,t,i){"use strict";var a=i("3ead"),s=i.n(a);s.a},"117c":function(e,t,i){"use strict";i.r(t);var a=i("6bb1"),s=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);t["default"]=s.a},1776:function(e,t,i){"use strict";i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return a}));var a={uLoading:i("1271").default},s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-switch",class:[1==e.value?"u-switch--on":"",e.disabled?"u-switch--disabled":""],style:[e.switchStyle],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-switch__node node-class",style:{width:e.$u.addUnit(this.size),height:e.$u.addUnit(this.size)}},[i("u-loading",{staticClass:"u-switch__loading",attrs:{show:e.loading,size:.6*e.size,color:e.loadingColor}})],1)],1)},n=[]},2070:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,"@charset \"UTF-8\";\n/* 颜色变量 */\n/** S Font's size **/\n/** E Font's size **/[data-v-22ff1eee]:export{red_theme:#ff2c3c;orange_theme:#f7971e;pink_theme:#fa444d;gold_theme:#e0a356;blue_theme:#2f80ed;green_theme:#2ec840}.address-edit[data-v-22ff1eee]{padding-top:%?10?%}.address-edit .bb[data-v-22ff1eee]{border-bottom:1px solid #e5e5e5}.address-edit .form-item[data-v-22ff1eee]{height:%?110?%}.address-edit .form-item .label[data-v-22ff1eee]{width:%?150?%;font-weight:500;font-size:%?30?%}.address-edit .form-item uni-input[data-v-22ff1eee]{height:100%;flex:1}.address-edit .my-btn[data-v-22ff1eee]{height:%?80?%;margin:%?30?% %?26?%;margin-top:%?80?%;text-align:center}.red_theme .address-edit .my-btn[data-v-22ff1eee]{background-color:#ff2c3c}.orange_theme .address-edit .my-btn[data-v-22ff1eee]{background-color:#f7971e}.pink_theme .address-edit .my-btn[data-v-22ff1eee]{background-color:#fa444d}.gold_theme .address-edit .my-btn[data-v-22ff1eee]{background-color:#e0a356}.blue_theme .address-edit .my-btn[data-v-22ff1eee]{background-color:#2f80ed}.green_theme .address-edit .my-btn[data-v-22ff1eee]{background-color:#2ec840}",""]),e.exports=t},"3ead":function(e,t,i){var a=i("c556");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var s=i("4f06").default;s("50b41067",a,!0,{sourceMap:!1,shadowMode:!1})},"3efc":function(e,t,i){"use strict";i.r(t);var a=i("1776"),s=i("117c");for(var n in s)"default"!==n&&function(e){i.d(t,e,(function(){return s[e]}))}(n);i("0509");var r,d=i("f0c5"),o=Object(d["a"])(s["default"],a["b"],a["c"],!1,null,"c3b32f22",null,!1,a["a"],r);t["default"]=o.exports},"492c":function(e,t,i){"use strict";i.r(t);var a=i("869e"),s=i("6c5e");for(var n in s)"default"!==n&&function(e){i.d(t,e,(function(){return s[e]}))}(n);i("5a48");var r,d=i("f0c5"),o=Object(d["a"])(s["default"],a["b"],a["c"],!1,null,"22ff1eee",null,!1,a["a"],r);t["default"]=o.exports},"5a48":function(e,t,i){"use strict";var a=i("c728"),s=i.n(a);s.a},"6bb1":function(e,t,i){"use strict";i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"u-switch",props:{loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:[Number,String],default:50},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#ffffff"},value:{type:Boolean,default:!1},vibrateShort:{type:Boolean,default:!1},activeValue:{type:[Number,String,Boolean],default:!0},inactiveValue:{type:[Number,String,Boolean],default:!1}},data:function(){return{}},computed:{switchStyle:function(){var e={};return e.fontSize=this.size+"rpx",e.backgroundColor=this.value?this.activeColor:this.inactiveColor,e},loadingColor:function(){return this.value?this.activeColor:null}},methods:{onClick:function(){var e=this;this.disabled||this.loading||(this.vibrateShort&&uni.vibrateShort(),this.$emit("input",!this.value),this.$nextTick((function(){e.$emit("change",e.value?e.activeValue:e.inactiveValue)})))}}};t.default=a},"6c5e":function(e,t,i){"use strict";i.r(t);var a=i("82a8"),s=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);t["default"]=s.a},"82a8":function(e,t,i){"use strict";var a=i("4ea4");i("99af"),i("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(i("5530")),n=i("d19d"),r=a(i("704b")),d={data:function(){return{addressObj:{contact:"",mobile:"",province:"",city:"",district:"",address:"",is_default:0},region:"",addressId:"",defaultRegion:["广东省","广州市","番禺区"],defaultRegionCode:"440113",showRegion:!1,lists:[]}},onLoad:function(e){this.lists=r.default,this.addressId=parseInt(e.id),e.id?(uni.setNavigationBarTitle({title:"编辑地址"}),this.apiAddressDetailFun()):(uni.setNavigationBarTitle({title:"添加地址"}),this.getWxAddressFun())},onUnload:function(){uni.removeStorageSync("wxAddress")},methods:{changeChecked:function(e){this.addressObj.is_default=e?1:0},onSubmit:function(){var e=this,t=this.addressId;this.addressObj.province_id,this.addressObj.city_id,this.addressObj.district_id,this.addressObj.type,this.addressObj.is_default,this.addressObj.addressId;return this.addressObj.is_default=this.addressObj.is_default?1:0,this.addressObj.contact?!this.addressObj.contact.length>=20?this.$toast({title:"输入的收货人长度不得大于20位"}):this.addressObj.mobile?this.region?this.addressObj.address?void(t?(0,n.apiAddressEdit)((0,s.default)({},this.addressObj)).then((function(t){e.$toast({title:"编辑成功"},{tab:3,url:1})})).catch((function(t){return e.$toast({title:t})})):(0,n.apiAddressAdd)((0,s.default)({},this.addressObj)).then((function(t){e.$toast({title:"添加成功"},{tab:3,url:1})})).catch((function(t){return e.$toast({title:t})}))):this.$toast({title:"请填写小区、街道、门牌号等信息"}):this.$toast({title:"请选择地区"}):this.$toast({title:"请填写手机号码"}):this.$toast({title:"请填写收货人姓名"})},regionChange:function(e){this.addressObj.province_id=e[0].value,this.addressObj.city_id=e[1].value,this.addressObj.district_id=e[2].value,this.region=e[0].label+" "+e[1].label+" "+e[2].label},apiAddressDetailFun:function(){var e=this;(0,n.apiAddressDetail)({id:this.addressId}).then((function(t){t.type-=1,e.addressObj=t,e.region="".concat(t.province," ").concat(t.city," ").concat(t.district)}))},getWxAddressFun:function(){var e=this,t=uni.getStorageSync("wxAddress");if(t){t=JSON.parse(t),console.log(t);var i=t,a=i.userName,s=i.telNumber,r=i.provinceName,d=i.cityName,o=i.detailInfo,c=t.countryName||t.countyName;(0,n.apiAddresshandleRegion)({province:r,city:d,district:c}).then((function(t){t.province&&(e.region="".concat(r," ").concat(d," ").concat(c),e.addressObj.contact=a,e.addressObj.mobile=s,e.addressObj.address=o,e.addressObj.province_id=t.province,e.addressObj.city_id=t.city,e.addressObj.district_id=t.district)}))}}}};t.default=d},"869e":function(e,t,i){"use strict";i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return a}));var a={uIcon:i("e466").default,uSwitch:i("3efc").default,uSelect:i("bc67").default},s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{class:e.themeName},[i("v-uni-view",{staticClass:"address-edit"},[i("v-uni-view",{staticClass:"p-l-30 p-r-30 bg-white"},[i("v-uni-view",{staticClass:"form-item bb flex"},[i("v-uni-view",{staticClass:"label"},[e._v("收货人")]),i("v-uni-input",{staticClass:"m-l-10",attrs:{name:"contact",type:"text",placeholder:"请填写收货人姓名"},model:{value:e.addressObj.contact,callback:function(t){e.$set(e.addressObj,"contact",t)},expression:"addressObj.contact"}})],1),i("v-uni-view",{staticClass:"form-item bb flex"},[i("v-uni-view",{staticClass:"label"},[e._v("联系方式")]),i("v-uni-input",{staticClass:"m-l-10",attrs:{name:"mobile",type:"number",placeholder:"请填写手机号码"},model:{value:e.addressObj.mobile,callback:function(t){e.$set(e.addressObj,"mobile",t)},expression:"addressObj.mobile"}})],1),i("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showRegion=!0}}},[i("v-uni-view",{staticClass:"form-item bb flex"},[i("v-uni-view",{staticClass:"label"},[e._v("所在地区")]),i("v-uni-view",{staticClass:"flex flex-1 row-between m-l-10",staticStyle:{width:"100%"}},[i("v-uni-input",{attrs:{name:"region",disabled:!0,type:"text",placeholder:"请选择省、市、区"},model:{value:e.region,callback:function(t){e.region=t},expression:"region"}}),i("u-icon",{attrs:{color:"#707070",name:"arrow-right"}})],1)],1)],1),i("v-uni-view",{staticClass:"form-item flex col-top bb m-t-10",staticStyle:{height:"170rpx"}},[i("v-uni-view",{staticClass:"label m-t-20"},[e._v("详细地址")]),i("v-uni-textarea",{staticClass:"nr flex-1 m-l-10 p-t-25",staticStyle:{height:"130rpx"},attrs:{name:"address",placeholder:"请填写小区、街道、门牌号等信息","auto-blur":!0},model:{value:e.addressObj.address,callback:function(t){e.$set(e.addressObj,"address",t)},expression:"addressObj.address"}})],1),i("v-uni-view",[i("v-uni-view",{staticClass:"m-t-10 m-b-10 bg-white flex row-between form-item"},[i("v-uni-view",{staticClass:"label",staticStyle:{width:"250rpx"}},[e._v("设置为默认地址")]),i("u-switch",{attrs:{size:"35","active-color":e.themeColor,"inactive-color":"#eee"},model:{value:e.addressObj.is_default,callback:function(t){e.$set(e.addressObj,"is_default",t)},expression:"addressObj.is_default"}})],1)],1)],1),i("v-uni-button",{staticClass:"my-btn white flex br60 row-center",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmit.apply(void 0,arguments)}}},[e._v("完成")]),i("u-select",{attrs:{"confirm-color":e.themeColor,"cancel-color":"#999",mode:"mutil-column-auto",list:e.lists},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.regionChange.apply(void 0,arguments)}},model:{value:e.showRegion,callback:function(t){e.showRegion=t},expression:"showRegion"}})],1)],1)},n=[]},c556:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,"@charset \"UTF-8\";\n/* 颜色变量 */\n/** S Font's size **/\n/** E Font's size **/[data-v-c3b32f22]:export{red_theme:#ff2c3c;orange_theme:#f7971e;pink_theme:#fa444d;gold_theme:#e0a356;blue_theme:#2f80ed;green_theme:#2ec840}.u-switch[data-v-c3b32f22]{position:relative;display:inline-block;box-sizing:initial;width:2em;height:1em;background-color:#fff;border:1px solid rgba(0,0,0,.1);border-radius:1em;transition:background-color .3s;font-size:%?50?%}.u-switch__node[data-v-c3b32f22]{display:flex;flex-direction:row;align-items:center;justify-content:center;position:absolute;top:0;left:0;border-radius:100%;z-index:1;background-color:#fff;background-color:#fff;box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);transition:-webkit-transform .3s cubic-bezier(.3,1.05,.4,1.05);transition:transform .3s cubic-bezier(.3,1.05,.4,1.05);transition:transform .3s cubic-bezier(.3,1.05,.4,1.05),-webkit-transform .3s cubic-bezier(.3,1.05,.4,1.05);transition:-webkit-transform cubic-bezier(.3,1.05,.4,1.05);transition:transform cubic-bezier(.3,1.05,.4,1.05);transition:transform cubic-bezier(.3,1.05,.4,1.05),-webkit-transform cubic-bezier(.3,1.05,.4,1.05);transition:transform .3s cubic-bezier(.3,1.05,.4,1.05)}.u-switch__loading[data-v-c3b32f22]{display:flex;flex-direction:row;align-items:center;justify-content:center}.u-switch--on[data-v-c3b32f22]{background-color:#1989fa}.u-switch--on .u-switch__node[data-v-c3b32f22]{-webkit-transform:translateX(100%);transform:translateX(100%)}.u-switch--disabled[data-v-c3b32f22]{opacity:.4}",""]),e.exports=t},c728:function(e,t,i){var a=i("2070");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var s=i("4f06").default;s("8a5d8ef0",a,!0,{sourceMap:!1,shadowMode:!1})}}]);