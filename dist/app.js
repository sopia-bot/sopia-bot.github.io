(function(t){function e(e){for(var r,o,i=e[0],s=e[1],u=e[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a={app:0},c=[];function i(t){return s.p+"dist/"+({}[t]||t)+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-460365c5":1,"chunk-1d2b2c2e":1,"chunk-4cae96f8":1,"chunk-6d537668":1,"chunk-1a389542":1,"chunk-de5617da":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-460365c5":"3b23a388","chunk-1d2b2c2e":"09b6a25b","chunk-4cae96f8":"c7315fda","chunk-6d537668":"beee7ec2","chunk-1a389542":"f5df35ce","chunk-79bb3ca9":"31d6cfe0","chunk-a250af9c":"31d6cfe0","chunk-de5617da":"49064715"}[t]+".css",a=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[t],f.parentNode.removeChild(f),n(c)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("8a23"),o=n.n(r);o.a},2879:function(t){t.exports=JSON.parse('{"error":"에러","notification":"알림","warning":"경고","apply":"적용","ok":"예","no":"아니오","confirm":"확인","modify":"수정","delete":"삭제","cancel":"취소","comment":"댓글","add":"추가","please-input":"값을 입력해 주세요.","action":"동작","applying":"값을 적용합니다.","download":"다운로드","home.introduce":"당신의 스푼 방송을 더 멋지게 만들어주는 매니저 프로그램","home.download":"최신 다운로드","home.google-down":"구글 드라이브","home.use-doc":"사용 방법보기","intro.good-design":"깔끔하며, 눈을 뗄 수 없는 디자인이 당신을 사로잡을 겁니다.","intro.good-design2":"디자인 뿐만 아니라 사용자 경험 측면에서도 쉽게 다가갈 수 있습니다.","intro.free":"엄청난 자유도를 가지고 봇의 머리를 코딩할 수 있습니다.","intro.free2":"입문 장벽이 낮은 자바스크립트는 당신이 원하는 대로 할 수 있습니다.","intro.spoorchat":"스푼라디오에 드디어 도네이션 기능이 추가되었습니다.","intro.spoorchat2":"스푼을 후원한 청취자의 채팅을 읽는 것으로 더 재밌는 방송을 진행할 수 있습니다.","intro.spoorchat3":"특정 텍스트를 자신의 목소리로 대신 읽어주는 시그니처 기능 또한 있습니다.","intro.setting":"자동 로그인 기능을 포함한 몇몇 설정은 매우 간편합니다.","intro.bundle":"원하는 기능만 골라 사용할 수 있는 번들 기능을 제공합니다.","intro.bundle2":"프로그램을 업데이트 하지 않아도, 번들은 업데이트 할 수 있습니다.","intro.comunity":"커뮤니티","intro.kakao":"스푼라디오에서 가장 큰 커뮤니티라고 생각합니다.","intro.kakao2":"100명이 넘는 사람들이 서로 질문하고 친목을 도모하며 교류합니다","intro.anydesk":"Anydesk를 사용하여 문제 해결에 도움을 드리고 있습니다.","intro.anydesk2":"어려운 문제는 원격으로 해결하세요!","docs.quick.start":"빠른 시작 안내","docs.quick.install":"설치하기","docs.quick.manager":"간편 매니저"}')},"44add":function(t,e,n){n("ac1f"),n("5319");var r=n("7037"),o="ko",a="ko",c=navigator.language.substr(0,2),i=null;if(null!=a)i=n("98cd")("./"+a+".json");else switch(c){case"ko":i=n("2879");break;default:i=n("98cd")("./"+o+".json")}t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e="Unkown";return"object"===r(i)&&(e=i[t]||"Unkown",e=e.replace(/\r\n/g,"<br>")),e}},"4a27":function(t,e,n){"use strict";var r=n("9ffe"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"white",prominent:"",height:t.small?"":"75px",elevation:"2"}},[t.small?n("v-container",{staticClass:"px-0",staticStyle:{"max-width":"unset"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{align:"center"}},[n("h1",{staticClass:"title"},[n("router-link",{staticClass:"black--text",staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[t._v("SOPIA")])],1)])],1),n("v-row",{attrs:{align:"center",justify:"center"}},[t.docs?n("v-col",{staticClass:"py-0",attrs:{cols:"1"}},[n("v-app-bar-nav-icon",{staticClass:"pa-0",on:{click:t.openMenu}})],1):t._e(),n("v-col",{staticClass:"pa-2 px-0",attrs:{align:"center"}},[n("v-btn",{attrs:{text:"",tile:"",color:"purple darken-4"},on:{click:function(e){return t.routeAssignUrl("/")}}},[t._v("Home")]),t._l(t.menus,(function(e){return n("v-btn",{key:e.route,attrs:{text:"",tile:"",color:"purple darken-4"},on:{click:function(n){return t.routeAssignUrl(e.route)}}},[t._v(" "+t._s(e.route)+" ")])}))],2),t.docs?n("v-col",{attrs:{cols:"1"}}):t._e()],1)],1):n("v-container",{staticClass:"pa-1",staticStyle:{"max-width":"unset"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"4",sm:"3",md:"3",lg:"2",xl:"2",align:"center"}},[n("div",{staticStyle:{"border-right":"1.2px solid #e5e5e5"}},[n("h1",{staticClass:"title"},[n("router-link",{staticClass:"black--text",staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[n("span",{staticClass:"purple--text text--darken-4"},[t._v("SOPIA")])])],1)])]),n("v-col",t._l(t.menus,(function(e){return n("v-btn",{key:e.route,attrs:{text:"",tile:"",color:"purple darken-4"},on:{click:function(n){return t.routeAssignUrl(e.route)}}},[t._v(" "+t._s(e.route)+" ")])})),1)],1)],1)],1),n("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"router-view",tile:"","max-height":"100vh"}},[n("transition",{attrs:{name:"scroll-y-reverse-transition"}},[n("router-view")],1)],1)],1)},a=[],c=(n("ac1f"),n("466d"),n("c96a"),n("87a1")),i=n("8edb"),s=function(){i["a"].$emit("navi-draw",!0)},u={name:"App",methods:{routeAssignUrl:c["c"],getWindowWidth:function(){this.windowWidth=document.documentElement.clientWidth,this.$store.commit("small",this.windowWidth<960)},openMenu:s},components:{},data:function(){return{windowWidth:0,small:this.$store.getters.small,docs:!1,menus:[{route:"docs"}]}},mounted:function(){this.$nextTick((function(){window.addEventListener("resize",this.getWindowWidth),this.getWindowWidth()}))},computed:{small_:function(){return this.$store.getters.small}},watch:{small_:function(t){this.small=t},$route:function(){this.$route.path.match(/^\/docs/)?this.docs=!0:this.docs=!1}},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)}},l=u,d=(n("034f"),n("4a27"),n("2877")),f=n("6544"),h=n.n(f),p=n("7496"),v=n("40dc"),m=n("5bc1"),k=n("8336"),g=n("62ad"),w=n("a523"),b=n("0fd9"),y=n("8dd9"),x=Object(d["a"])(l,o,a,!1,null,"07e60193",null),_=x.exports;h()(x,{VApp:p["a"],VAppBar:v["a"],VAppBarNavIcon:m["a"],VBtn:k["a"],VCol:g["a"],VContainer:w["a"],VRow:b["a"],VSheet:y["a"]});n("4160"),n("d3b7"),n("5319"),n("159b");var O=n("8c4f"),C=n("d0ef");r["a"].use(O["a"]);var j=[];C["a"].cGroupList.forEach((function(t){var e=t.singleSub;e.forEach((function(t){var e=new Object;e.path=t.key.replace("/docs/",""),e.component=function(){return n("627e")("./views"+t.key+".vue")},j.push(e)}))})),C["a"].cList.forEach((function(t){var e=new Object;e.path=t.key.replace("/docs/",""),e.component=function(){return n("627e")("./views"+t.key+".vue")},j.push(e)})),console.log(j);var S=[{path:"/",name:"Home",component:function(){return Promise.all([n.e("chunk-6d537668"),n.e("chunk-de5617da")]).then(n.bind(null,"bb51"))},meta:{title:"Vue Blog"}},{path:"/docs",name:"Docs",component:function(){return Promise.all([n.e("chunk-460365c5"),n.e("chunk-1d2b2c2e")]).then(n.bind(null,"eba1"))},children:j,meta:{title:"Vue Blog"}}],E=new O["a"]({mode:"history",base:"/",routes:S}),A=E,P=n("2f62");r["a"].use(P["a"]);var q=new P["a"].Store({state:{small:!1,draw:!1},getters:{small:function(t){return t.small},draw:function(t){return t.draw}},mutations:{small:function(t,e){t.small=e},draw:function(t,e){t.draw=e}},actions:{},modules:{}}),L=n("f309");r["a"].use(L["a"]);var W=new L["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:A,store:q,vuetify:W,render:function(t){return t(_)}}).$mount("#app")},"627e":function(t,e,n){var r={"./views/Com/footer.vue":["e25d","chunk-6d537668","chunk-1a389542"],"./views/Com/navi.vue":["b8fa","chunk-460365c5"],"./views/Docs.vue":["eba1","chunk-460365c5","chunk-1d2b2c2e"],"./views/Home.vue":["bb51","chunk-6d537668","chunk-de5617da"],"./views/docs/quick-start/install.vue":["7a38","chunk-6d537668","chunk-79bb3ca9"],"./views/docs/quick-start/manager.vue":["7b71","chunk-6d537668","chunk-a250af9c"],"./views/docs/template.vue":["97ce","chunk-4cae96f8"]};function o(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],o=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="627e",t.exports=o},"87a1":function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a}));n("d3b7");var r=function(t,e){var n=this&&this.$router||e&&e.$router;"string"===typeof t&&n&&n.history.current.path!==t&&n.push({path:t})},o=function(t){"string"===typeof t&&window.location.assign(t)},a=function(t){"string"===typeof t&&window.open(t)}},"8a23":function(t,e,n){},"8edb":function(t,e,n){"use strict";var r=n("2b0e"),o=new r["a"];e["a"]=o},"98cd":function(t,e,n){var r={"./ko.json":"2879"};function o(t){var e=a(t);return n(e)}function a(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="98cd"},"9ffe":function(t,e,n){},d0ef:function(t,e,n){"use strict";var r=n("44add"),o=n.n(r);n("87a1");e["a"]={cGroupList:[{name:o()("docs.quick.start"),key:"/docs/quick-start",singleSub:[{key:"/docs/quick-start/install",name:o()("docs.quick.install")},{key:"/docs/quick-start/manager",name:o()("docs.quick.manager")}],click:function(){}}],cList:[]}}});
//# sourceMappingURL=app.js.map