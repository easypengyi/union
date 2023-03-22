(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d0dfabc4"],{"658d":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"ls-card"},[e("el-page-header",{attrs:{content:t.identity?"编辑打印机":"新增打印机"},on:{back:function(e){return t.$router.go(-1)}}})],1),e("div",{staticClass:"ls-card m-t-24 m-b-60"},[e("el-form",{ref:"printData",staticClass:"m-l-24",attrs:{"hide-required-asterisk":!1,rules:t.rules,model:t.printData,"label-width":"120px"}},[e("el-form-item",{attrs:{label:"打印机名称",prop:"name","label-position":"right"}},[e("el-input",{staticClass:"ls-input",attrs:{placeholder:"请输入打印机名称"},model:{value:t.printData.name,callback:function(e){t.$set(t.printData,"name",e)},expression:"printData.name"}})],1),e("el-form-item",{attrs:{label:"设备类型",prop:"type","label-position":"right"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.printData.type,callback:function(e){t.$set(t.printData,"type",e)},expression:"printData.type"}},t._l(t.printType,(function(t,i){return e("el-option",{key:i,attrs:{label:t.label,value:t.value}})})),1)],1),e("el-form-item",{attrs:{label:"终端号",prop:"machine_code","label-position":"right"}},[e("el-input",{staticClass:"ls-input",attrs:{placeholder:"请输入设备终端号"},model:{value:t.printData.machine_code,callback:function(e){t.$set(t.printData,"machine_code",e)},expression:"printData.machine_code"}})],1),e("el-form-item",{attrs:{prop:"private_key",label:"打印机密钥","label-position":"right"}},[e("el-input",{staticClass:"ls-input",attrs:{placeholder:"请输入打印机密钥"},model:{value:t.printData.private_key,callback:function(e){t.$set(t.printData,"private_key",e)},expression:"printData.private_key"}})],1),e("el-form-item",{attrs:{label:"应用ID",prop:"client_id","label-position":"right"}},[e("el-input",{staticClass:"ls-input",attrs:{placeholder:"请输入应用ID"},model:{value:t.printData.client_id,callback:function(e){t.$set(t.printData,"client_id",e)},expression:"printData.client_id"}}),e("span",{staticClass:"desc"},[t._v("应用id在易联云-开发者中心-应用中心获取")])],1),e("el-form-item",{attrs:{label:"应用密钥",prop:"client_secret","label-position":"right"}},[e("el-input",{staticClass:"ls-input",attrs:{placeholder:"请输入应用密钥"},model:{value:t.printData.client_secret,callback:function(e){t.$set(t.printData,"client_secret",e)},expression:"printData.client_secret"}}),e("span",{staticClass:"desc"},[t._v("apiKey在易联云-开发者中心-应用中心获取")])],1),e("el-form-item",{attrs:{label:"小票模版",prop:"template_id","label-position":"right"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.printData.template_id,callback:function(e){t.$set(t.printData,"template_id",e)},expression:"printData.template_id"}},t._l(t.printTemplate,(function(t,i){return e("el-option",{key:i,attrs:{label:t.template_name,value:t.id}})})),1),e("span",{staticClass:"m-l-20 primary pointer",on:{click:t.newTemplate}},[t._v("新建小票模版")]),e("span",{staticClass:"primary m-l-10 m-r-10"},[t._v("|")]),e("span",{staticClass:"primary pointer",on:{click:t.getPrintTemplateFunc}},[t._v("刷新")])],1),e("el-form-item",{attrs:{label:"打印联数","label-position":"right",required:""}},[e("el-radio-group",{model:{value:t.printData.print_number,callback:function(e){t.$set(t.printData,"print_number",e)},expression:"printData.print_number"}},[e("el-radio",{attrs:{label:1}},[t._v("1联")]),e("el-radio",{attrs:{label:2}},[t._v("2联")]),e("el-radio",{attrs:{label:3}},[t._v("3联")]),e("el-radio",{attrs:{label:4}},[t._v("4联")])],1)],1),e("el-form-item",{attrs:{label:"自动打印","label-position":"right",required:""}},[e("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":t.styleConfig.primary,"inactive-color":"#f4f4f5"},on:{change:function(e){return t.changeStatusPaymentSet(t.scope.$index,t.index)}},model:{value:t.printData.auto_print,callback:function(e){t.$set(t.printData,"auto_print",e)},expression:"printData.auto_print"}}),e("span",{staticClass:"muted m-l-20"},[t._v("订单付款后自动打印小票，默认关闭")])],1),e("el-form-item",{attrs:{label:"状态","label-position":"right",required:""}},[e("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":t.styleConfig.primary,"inactive-color":"#f4f4f5"},on:{change:function(e){return t.changeStatusPaymentSet(t.scope.$index,t.index)}},model:{value:t.printData.status,callback:function(e){t.$set(t.printData,"status",e)},expression:"printData.status"}}),e("span",{staticClass:"muted m-l-20"},[t._v("关闭和开启打印机的使用，默认关闭")])],1)],1)],1),e("div",{staticClass:"bg-white ls-fixed-footer"},[e("div",{staticClass:"row-center flex m-t-15"},[e("el-button",{attrs:{size:"small"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("取消")]),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.onSubmit("printData")}}},[t._v("保存")])],1)])])},a=[],n=i("9ab4"),s=i("1b40"),l=i("c136");let p=class extends s["e"]{constructor(){super(...arguments),this.identity=1,this.status="",this.printType=[],this.printTemplate=[],this.printData={name:"",type:1,machine_code:"",private_key:"",client_id:"",client_secret:"",template_id:"请选择",print_number:1,auto_print:1,status:1},this.rules={name:[{required:!0,message:"请输入打印机名称",trigger:"blur"}],type:[{required:!0,message:"请选择设备类型",trigger:"change"}],machine_code:[{required:!0,message:"请输入终端号",trigger:"blur"}],private_key:[{required:!0,message:"请输入打印机密钥",trigger:"blur"}],client_id:[{required:!0,message:"请输入应用ID",trigger:"blur"}],client_secret:[{required:!0,message:"请输入应用密钥",trigger:"blur"}],template_id:[{required:!0,message:"请选择模板",trigger:"change"}]}}newTemplate(){const t=this.$router.resolve("/print/edit_template");window.open(t.href,"_blank")}async getPrintDetail(){const t=await Object(l["i"])({id:this.identity});this.printData=t}getPrintTypeFunc(){Object(l["k"])({}).then(t=>{this.printType=t}).catch(()=>{this.$message.error("数据初始化失败，请刷新重载！")})}getPrintTemplateFunc(){Object(l["m"])({}).then(t=>{this.printTemplate=t.lists}).catch(()=>{this.$message.error("数据初始化失败，请刷新重载！")})}onSubmit(t){const e=this.$refs[t];e.validate(t=>{t&&(this.identity?this.handlePrintEdit():this.handlePrintAdd())})}handlePrintAdd(){const t=this.printData;Object(l["a"])({...t}).then(()=>{setTimeout(()=>this.$router.go(-1),500)})}handlePrintEdit(){const t=this.printData,e=this.identity;Object(l["f"])({...t,id:e}).then(()=>{setTimeout(()=>this.$router.go(-1),500)})}created(){const t=this.$route.query;this.identity=t.id,this.getPrintTypeFunc(),this.getPrintTemplateFunc(),this.identity&&this.getPrintDetail()}};p=Object(n["a"])([s["a"]],p);var o=p,c=o,u=(i("f421"),i("2877")),d=Object(u["a"])(c,r,a,!1,null,"78bc1b44",null);e["default"]=d.exports},c136:function(t,e,i){"use strict";i.d(e,"j",(function(){return a})),i.d(e,"i",(function(){return n})),i.d(e,"k",(function(){return s})),i.d(e,"a",(function(){return l})),i.d(e,"f",(function(){return p})),i.d(e,"d",(function(){return o})),i.d(e,"n",(function(){return c})),i.d(e,"h",(function(){return u})),i.d(e,"c",(function(){return d})),i.d(e,"m",(function(){return m})),i.d(e,"b",(function(){return h})),i.d(e,"g",(function(){return b})),i.d(e,"e",(function(){return f})),i.d(e,"l",(function(){return g}));var r=i("f175");const a=t=>r["a"].get("/printer.printer/printerLists",{params:t}),n=t=>r["a"].get("/printer.printer/printerDetail",{params:t}),s=t=>r["a"].get("/printer.printer/getPrinterType",{params:t}),l=t=>r["a"].post("/printer.printer/addPrinter",t),p=t=>r["a"].post("/printer.printer/editPrinter",t),o=t=>r["a"].post("/printer.printer/deletePrinter",t),c=t=>r["a"].post("/printer.printer/testPrinter",t),u=t=>r["a"].post("/order.order/orderPrint",t),d=t=>r["a"].post("/printer.printer/autoPrint",t),m=t=>r["a"].get("/printer.printer/printerTemplateLists",{params:t}),h=t=>r["a"].post("/printer.printer/addTemplate",t),b=t=>r["a"].post("/printer.printer/editTemplate",t),f=t=>r["a"].post("/printer.printer/deleteTemplate",t),g=t=>r["a"].get("/printer.printer/templateDetail",{params:t})},ca85:function(t,e,i){},f421:function(t,e,i){"use strict";i("ca85")}}]);
//# sourceMappingURL=chunk-d0dfabc4.7f76021d.js.map