(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f34f90a2","chunk-778c0968"],{"056d":function(t,e,i){"use strict";i("1c03")},"0f42":function(t,e,i){},"1c03":function(t,e,i){},7958:function(t,e,i){},a21c:function(t,e,i){"use strict";i("ba91")},a75b:function(t,e,i){"use strict";i("daaf");var n=i("d10f");e["a"]=n["a"].extend({name:"v-content",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,i=t.top,n=t.right,s=t.footer,a=t.insetFooter,r=t.bottom,o=t.left;return{paddingTop:"".concat(i+e,"px"),paddingRight:"".concat(n,"px"),paddingBottom:"".concat(s+a+r,"px"),paddingLeft:"".concat(o,"px")}}},render:function(t){var e={staticClass:"v-content",style:this.styles,ref:"content"};return t(this.tag,e,[t("div",{staticClass:"v-content__wrap"},this.$slots.default)])}})},b8fa:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-navigation-drawer",{staticClass:"custom",staticStyle:{"padding-left":"4rem","padding-top":"1rem"},attrs:{width:t.small?"350px":"100%",color:"white",permanent:!t.small,temporary:t.small,fixed:t.small},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",{attrs:{dense:""}},[t._l(t.cGroupList,(function(e){return i("v-list-group",{key:e.key,staticClass:"custom",attrs:{value:t.isSelectGroup(e.key),color:"purple--text text--darken-4","active-class":"purple--text text--darken-4"},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-list-item-content",[i("v-list-item-title",{staticClass:"body-2"},[t._v(t._s(e.name))])],1)]},proxy:!0}],null,!0)},t._l(e.singleSub,(function(e){return i("v-list-item",{key:e.key,class:t.getItemClass(e.key),attrs:{value:"true"},on:{click:function(i){return t.routeAssignUrl(e.key)}}},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"body-2"},[t._v(t._s(e.name))])],1)],1)})),1)})),t._l(t.cList,(function(e){return i("v-list-item",{key:e.name},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"body-2"},[t._v(t._s(e.name))])],1)],1)}))],2)],1)},s=[],a=i("87a1"),r=i("8edb"),o=i("44ad"),c=i.n(o),u=i("d0ef"),h={name:"navigation",methods:{routeAssignUrl:a["d"],Lang:c.a,getItemClass:function(t){return this.$route.path===t?"ml-6 blue-grey lighten-5":"ml-6"},isSelectGroup:function(t){var e=new RegExp("^".concat(t));return!!this.$route.path.match(e)}},components:{},created:function(){var t=this;r["a"].$on("navi-draw",(function(e){t.drawer=e}))},computed:{small_:function(){return this.$store.getters.small}},watch:{small_:function(t){this.small=t}},data:function(){return{drawer:!1,cGroupList:u["a"].cGroupList,cList:u["a"].cList,small:this.$store.getters.small,item:null}}},l=h,d=(i("a21c"),i("056d"),i("2877")),v=i("6544"),f=i.n(v),p=i("8860"),m=i("56b0"),g=i("da13"),b=i("5d23"),w=i("f774"),y=Object(d["a"])(l,n,s,!1,null,"392ad44c",null);e["default"]=y.exports;f()(y,{VList:p["a"],VListGroup:m["a"],VListItem:g["a"],VListItemContent:b["a"],VListItemTitle:b["c"],VNavigationDrawer:w["a"]})},ba91:function(t,e,i){},c3f0:function(t,e,i){"use strict";var n=i("80d2"),s=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,s=t.touchendY,a=.5,r=16;t.offsetX=i-e,t.offsetY=s-n,Math.abs(t.offsetY)<a*Math.abs(t.offsetX)&&(t.left&&i<e-r&&t.left(t),t.right&&i>e+r&&t.right(t)),Math.abs(t.offsetX)<a*Math.abs(t.offsetY)&&(t.up&&s<n-r&&t.up(t),t.down&&s>n+r&&t.down(t))};function a(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function r(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),s(e)}function o(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function c(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return a(t,e)},touchend:function(t){return r(t,e)},touchmove:function(t){return o(t,e)}}}function u(t,e,i){var s=e.value,a=s.parent?t.parentElement:t,r=s.options||{passive:!0};if(a){var o=c(e.value);a._touchHandlers=Object(a._touchHandlers),a._touchHandlers[i.context._uid]=o,Object(n["r"])(o).forEach((function(t){a.addEventListener(t,o[t],r)}))}}function h(t,e,i){var s=e.value.parent?t.parentElement:t;if(s&&s._touchHandlers){var a=s._touchHandlers[i.context._uid];Object(n["r"])(a).forEach((function(t){s.removeEventListener(t,a[t])})),delete s._touchHandlers[i.context._uid]}}var l={inserted:u,unbind:h};e["a"]=l},daaf:function(t,e,i){},dc22:function(t,e,i){"use strict";function n(t,e){var i=e.value,n=e.options||{passive:!0};window.addEventListener("resize",i,n),t._onResize={callback:i,options:n},e.modifiers&&e.modifiers.quiet||i()}function s(t){if(t._onResize){var e=t._onResize,i=e.callback,n=e.options;window.removeEventListener("resize",i,n),delete t._onResize}}var a={inserted:n,unbind:s};e["a"]=a},e310:function(t,e,i){"use strict";i("0f42")},eba1:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-content",[i("v-row",{staticStyle:{overflow:"hidden",height:"100%",width:"100%",margin:"0"}},[i("v-col",{staticClass:"d-none d-md-flex pr-1 pl-0 py-0",attrs:{cols:"0",md:"3",xl:"2"}},[i("Navi")],1),i("Navi",{staticClass:"d-md-none"}),i("v-col",{staticStyle:{overflow:"auto"}},[i("v-row",{attrs:{align:"center"}},[i("v-col",{staticStyle:{display:"block",height:"500px"}},[i("transition",{attrs:{name:"scroll-y-reverse-transition"}},[i("router-view")],1)],1)],1)],1)],1)],1)},s=[],a=i("b8fa"),r=i("87a1"),o={name:"docs",components:{Navi:a["default"]},mounted:function(){"/docs"===this.$route.path&&Object(r["d"])("/docs/quick-start/how-to-sign/",this)},data:function(){return{}}},c=o,u=(i("e310"),i("2877")),h=i("6544"),l=i.n(h),d=i("62ad"),v=i("a75b"),f=i("0fd9"),p=Object(u["a"])(c,n,s,!1,null,null,null);e["default"]=p.exports;l()(p,{VCol:d["a"],VContent:v["a"],VRow:f["a"]})},f774:function(t,e,i){"use strict";i("7958");var n=i("adda"),s=i("3a66"),a=i("a9ad"),r=i("b848"),o=i("e707"),c=i("d10f"),u=i("7560"),h=i("a293"),l=i("dc22"),d=i("c3f0"),v=i("80d2"),f=i("58df");function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function m(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach((function(e){g(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function g(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var b=Object(f["a"])(Object(s["a"])("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),a["a"],r["a"],o["a"],c["a"],u["a"]);e["a"]=b.extend({name:"v-navigation-drawer",provide:function(){return{isInNav:"nav"===this.tag}},directives:{ClickOutside:h["a"],Resize:l["a"],Touch:d["a"]},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},mobileBreakPoint:{type:[Number,String],default:1264},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return m({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&this.$vuetify.breakpoint.width<parseInt(this.mobileBreakPoint,10)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX",e={height:Object(v["f"])(this.height),top:this.isBottom?"auto":Object(v["f"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(v["f"])(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(v["f"])(this.computedTransform,"%"),")"),width:Object(v["f"])(this.computedWidth)};return e}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(n["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives:function(){var t=this,e=[{name:"click-outside",value:function(){return t.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners:function(){var t=this,e={transitionend:function(e){if(e.target===e.currentTarget){t.$emit("transitionend",e);var i=document.createEvent("UIEvents");i.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(i)}}};return this.miniVariant&&(e.click=function(){return t.$emit("update:mini-variant",!1)}),this.expandOnHover&&(e.mouseenter=function(){return t.isMouseover=!0},e.mouseleave=function(){return t.isMouseover=!1}),e},genPosition:function(t){var e=Object(v["m"])(this,t);return e?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},e):e},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(v["m"])(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}})}}]);
//# sourceMappingURL=chunk-f34f90a2.js.map