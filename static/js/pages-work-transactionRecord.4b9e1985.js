(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-work-transactionRecord"],{1115:function(t,e,i){"use strict";i.r(e);var a=i("6a3e"),n=i("ee18");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("7da9");var r=i("f0c5"),o=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"26e5d2dc",null,!1,a["a"],void 0);e["default"]=o.exports},3279:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{show:!1}},methods:{}}},"6a3e":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={uNavbar:i("faf1").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("u-navbar",{attrs:{"is-back":!1,title:t.$t("交易记录"),"title-color":"#333333","title-size":"34","border-bottom":!1,background:{backgroundColor:"#ffffff"},"z-index":"9999999"}},[a("v-uni-view",{staticStyle:{"padding-left":"30rpx"}},[0==t.show?a("v-uni-image",{staticClass:"menu_icon",attrs:{src:"/static/index/heimenu.png",mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!0}}}):a("v-uni-image",{staticClass:"menu_icon",attrs:{src:"/static/index/heicha.png",mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!1}}})],1)],1),a("v-uni-view",{staticClass:"ct"},t._l(10,(function(e){return a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"box_top"},[a("v-uni-view",{staticClass:"d-f-a m-b10"},[a("v-uni-text",{staticClass:"m-r20"},[t._v("[意甲]")]),a("v-uni-view",{staticClass:"d-f-a"},[a("v-uni-text",[t._v(t._s(t.$t("反对"))+"橫濱FC")]),a("v-uni-image",{staticClass:"vs_icon",attrs:{src:i("99da"),mode:""}}),a("v-uni-text",[t._v("町田則利亞 0:0")])],1)],1),a("v-uni-view",{staticClass:"d-f-a"},[t._v(t._s(t.$t("交易时间"))+": 2022-04-27 13:44:21")])],1),a("v-uni-view",{staticClass:"box_bottom"},[a("v-uni-view",{staticClass:"d-f-a m-b40"},[a("v-uni-view",{staticClass:"box_bottom_text"},[t._v(t._s(t.$t("开赛时间"))+"：")]),a("v-uni-view",{staticClass:"d-w"},[t._v("2022-04-27 19:15:00")])],1),a("v-uni-view",{staticClass:"d-f-a m-b40"},[a("v-uni-view",{staticClass:"box_bottom_text"},[t._v(t._s(t.$t("波胆项目"))+"：")]),a("v-uni-view",{staticClass:"d-w"},[t._v(t._s(t.$t("全场波胆"))+" 0:0")])],1),a("v-uni-view",{staticClass:"d-f-a m-b40"},[a("v-uni-view",{staticClass:"box_bottom_text"},[t._v(t._s(t.$t("交易点数"))+"：")]),a("v-uni-view",{staticClass:"d-w"},[t._v("10000 "+t._s(t.$t("收益率"))+"4.26%")])],1),a("v-uni-view",{staticClass:"d-f-a"},[a("v-uni-view",{staticClass:"box_bottom_text"},[t._v(t._s(t.$t("波胆结果"))+"：")]),a("v-uni-view",{staticClass:"d-w",staticStyle:{color:"#B19E73"}},[t._v(t._s(t.$t("暂未结算")))])],1)],1)],1)})),1),a("menuList",{attrs:{show:t.show},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!1}}})],1)},s=[]},7633:function(t,e,i){"use strict";var a=i("af21"),n=i.n(a);n.a},"7da9":function(t,e,i){"use strict";var a=i("c05e"),n=i.n(a);n.a},"99da":function(t,e,i){t.exports=i.p+"static/img/vs.bea64bf7.png"},ad78:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var a=uni.getSystemInfoSync(),n={},s={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:n,statusBarHeight:a.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(a.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(a.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};e.default=s},af21:function(t,e,i){var a=i("b5f6");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("77b990c0",a,!0,{sourceMap:!1,shadowMode:!1})},b5f6:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-navbar[data-v-1d7f90d0]{width:100%}.u-navbar-fixed[data-v-1d7f90d0]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-1d7f90d0]{width:100%}.u-navbar-inner[data-v-1d7f90d0]{display:flex;flex-direction:row;justify-content:space-between;position:relative;align-items:center}.u-back-wrap[data-v-1d7f90d0]{display:flex;flex-direction:row;align-items:center;flex:1;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-1d7f90d0]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-1d7f90d0]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;flex-shrink:0}.u-navbar-centent-slot[data-v-1d7f90d0]{flex:1}.u-title[data-v-1d7f90d0]{line-height:%?60?%;font-size:%?32?%;flex:1}.u-navbar-right[data-v-1d7f90d0]{flex:1;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.u-slot-content[data-v-1d7f90d0]{flex:1;display:flex;flex-direction:row;align-items:center}',""]),t.exports=e},be5e:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-26e5d2dc]{background:#fafafa}body.?%PAGE?%[data-v-26e5d2dc]{background:#fafafa}.menu_icon[data-v-26e5d2dc]{width:%?48?%;height:%?48?%}.box[data-v-26e5d2dc]{width:100%;height:%?504?%;background:#fff;box-shadow:0 %?11?% %?46?% %?1?% rgba(0,0,0,.09);border-radius:%?32?%;overflow:hidden;border:%?1?% solid #e4e4e4;margin-bottom:%?40?%}.box_top[data-v-26e5d2dc]{width:100%;padding:%?30?%;box-sizing:border-box;border-radius:%?32?% %?32?% 0 0;background:#1c1931;font-size:%?24?%;color:hsla(0,0%,100%,.8)}.vs_icon[data-v-26e5d2dc]{width:%?44?%;height:%?44?%;margin:0 %?20?%}.box_bottom[data-v-26e5d2dc]{padding:%?40?% %?30?%;background:#fff;font-size:%?28?%;color:#1c1931;border-radius:0 0 %?32?% %?32?%}.box_bottom_text[data-v-26e5d2dc]{width:%?160?%;font-size:%?28?%;color:#666}",""]),t.exports=e},c05e:function(t,e,i){var a=i("be5e");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6c0b928f",a,!0,{sourceMap:!1,shadowMode:!1})},c2eb:function(t,e,i){"use strict";i.r(e);var a=i("ad78"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},edd5:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={uIcon:i("4428").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[i("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),i("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?i("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?i("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?i("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[i("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx",fontWeight:t.titleBold?"bold":"normal"}},[t._v(t._s(t.title))])],1):t._e(),i("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),i("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?i("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},s=[]},ee18:function(t,e,i){"use strict";i.r(e);var a=i("3279"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},faf1:function(t,e,i){"use strict";i.r(e);var a=i("edd5"),n=i("c2eb");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("7633");var r=i("f0c5"),o=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"1d7f90d0",null,!1,a["a"],void 0);e["default"]=o.exports}}]);