(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cccef5d","chunk-513649ef"],{"2da8":function(t,e,i){},"8ce9":function(t,e,i){},9968:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-content",[i("v-row",{staticClass:"mt-12"},[i("v-col",{attrs:{cols:"0",sm:"1",md:"3"}}),i("v-col",{staticClass:"px-12",attrs:{align:"center",cols:"12",sm:"10",md:"6"}},[i("h1",{staticClass:"display-1 font-weight-bold"},[t._v(" 구매해 주셔서 감사합니다! ")]),i("p",{staticClass:"text-left mt-6"},[t._v(" 소피아를 아끼는 마음으로 굿즈를 구매해 주신것에 대해 진심으로 감사드립니다. ")]),i("p",{staticClass:"text-left"},[t._v(" 굿즈는 물량확보 후 순차 발송이 아니라 구매신청 완료 후 주문제작에 들어가므로 다소 시간이 걸립니다. ")]),i("p",{staticClass:"text-left"},[t._v(" 5월 4일부터 주문 후, 물량을 확보하는 대로 순차발송하게 되므로 짧게는 2주 길게는 1달정도 후에 배송받으실 수 있습니다. ")]),i("p",{staticClass:"text-left"},[t._v(" 더 나은 서비스와 기능, 더 좋은 굿즈로 찾아뵙겠습니다. ")]),i("p",{staticClass:"red--text mt-12 text--darken-3"},[t._v(" 신청 후 24시간 이내 입금이 확인되지 않으면 신청 취소될 수 있습니다. ")]),i("h2",{staticClass:"title mt-12"},[t._v(" 아래 계좌로 "+t._s(t.numberWithCommas(t.price))+" 원을 이체해 주시면 됩니다. ")]),i("p",{staticClass:"grey--text"},[t._v("입금 확인시 메일이 발송됩니다.")]),i("p",{staticClass:"headline mt-6 purple--text text--darken-4"},[t._v("국민은행 620601-01-521114 윤여준")])]),i("v-col",{attrs:{cols:"0",sm:"1",md:"3"}})],1),i("Footer",{staticClass:"mt-12"})],1)},n=[],s=i("e25d"),a=i("87a1"),o=i("44ad"),c=i.n(o),l={name:"shopList",components:{Footer:s["default"]},methods:{routeAssignUrl:a["d"],Lang:c.a,numberWithCommas:function(t){for(var e=t.toString(),i=e.length-1,r=[],n=1;i>=0;n++,i--)r.unshift(e[i]),n%3===0&&r.unshift(",");return r.join("")}},mounted:function(){var t=this.$store.getters.fin;if(!t)return alert("구매한 이력이 없습니다."),void this.routeAssignUrl("/shop/",this);this.$store.commit("fin",!1),this.price=t},computed:{small_:function(){return this.$store.getters.small}},watch:{small_:function(t){this.small=t}},data:function(){return{price:0}}},u=l,f=(i("f923"),i("2877")),d=i("6544"),p=i.n(d),h=i("62ad"),v=i("a75b"),b=i("0fd9"),m=Object(f["a"])(u,r,n,!1,null,null,null);e["default"]=m.exports;p()(m,{VCol:h["a"],VContent:v["a"],VRow:b["a"]})},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return c}));var r=i("b0af"),n=i("80d2"),s=Object(n["g"])("v-card__actions"),a=Object(n["g"])("v-card__subtitle"),o=Object(n["g"])("v-card__text"),c=Object(n["g"])("v-card__title");r["a"]},a75b:function(t,e,i){"use strict";i("bd0c");var r=i("d10f"),n=r["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,i=t.top,r=t.right,n=t.footer,s=t.insetFooter,a=t.bottom,o=t.left;return{paddingTop:"".concat(i+e,"px"),paddingRight:"".concat(r,"px"),paddingBottom:"".concat(n+s+a,"px"),paddingLeft:"".concat(o,"px")}}},render:function(t){var e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}}),s=i("d9bd");e["a"]=n.extend({name:"v-main",created:function(){Object(s["d"])("v-content","v-main",this)},render:function(t){var e=n.options.render.call(this,t);return e.data.staticClass+=" v-content",e.children[0].data.staticClass+=" v-content__wrap",t(e.tag,e.data,e.children)}})},b5b6:function(t,e,i){},bd0c:function(t,e,i){},ce7e:function(t,e,i){"use strict";i("8ce9");var r=i("7560");function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e["a"]=r["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:s({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:s({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},e25d:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{attrs:{dark:"",padless:""}},[i("v-card",{staticClass:"text-center",attrs:{flat:"",tile:"",width:"100%"}},[i("v-divider"),i("v-card-text",[t._v(" "+t._s((new Date).getFullYear())+" - "),i("strong",[t._v("개발자 윤군")])])],1)],1)},n=[],s=i("2877"),a=i("6544"),o=i.n(a),c=i("b0af"),l=i("99d9"),u=i("ce7e"),f=(i("b5b6"),i("8dd9")),d=i("3a66"),p=i("d10f"),h=i("58df"),v=i("80d2");function b(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function m(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?b(Object(i),!0).forEach((function(e){g(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function g(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var O=Object(h["a"])(f["a"],Object(d["a"])("footer",["height","inset"]),p["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return m(m({},f["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return m(m({},f["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(v["f"])(t),left:Object(v["f"])(this.computedLeft),right:Object(v["f"])(this.computedRight),bottom:Object(v["f"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),y={},j=Object(s["a"])(y,r,n,!1,null,null,null);e["default"]=j.exports;o()(j,{VCard:c["a"],VCardText:l["b"],VDivider:u["a"],VFooter:O})},f923:function(t,e,i){"use strict";i("2da8")}}]);
//# sourceMappingURL=chunk-2cccef5d.js.map