(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-937e1c34"],{"4e9b":function(t,e,a){"use strict";a("fe94")},e86f:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",{staticClass:"custom"},[a("v-snackbar",{attrs:{timeout:5e3,"multi-line":""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.snackText)+" "),a("v-btn",{attrs:{color:"red",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v(" Close ")])],1),a("v-dialog",{attrs:{width:"80%","max-width":"600"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"pa-3"},[a("v-card-title",{staticClass:"headline purple--text text--darken-4"},[t._v("유저 검색")]),a("v-card-text",[a("v-container",[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"7",sm:"9"}},[a("v-text-field",{attrs:{label:"닉네임",color:"purple darken-4","single-line":""},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}})],1),a("v-col",{attrs:{align:"center"}},[a("v-btn",{attrs:{text:"",color:"purple darken-4"},on:{click:t.searchUsers}},[t._v(" 검색 ")])],1)],1),a("v-divider"),a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{align:"center"}},[a("v-list",{attrs:{"two-line":""}},t._l(t.users,(function(e,n){return a("v-list-item",{key:n,attrs:{align:"center"},on:{click:function(a){t.newacctag=e.tag,t.dialog=!1}}},[a("v-list-item-avatar",[a("v-img",{attrs:{src:e.profile_url}})],1),a("v-list-item-content",{attrs:{align:"left"}},[a("v-list-item-title",[t._v(t._s(e.nickname))]),a("v-list-item-subtitle",[t._v(t._s(e.tag))])],1)],1)})),1)],1)],1)],1)],1)],1)],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"0",sm:"2",md:"3"}}),a("v-col",{attrs:{align:"center"}},[a("v-stepper",{staticStyle:{"box-shadow":"none"},attrs:{vertical:""},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[a("v-stepper-step",{attrs:{complete:t.step>1,step:"1",color:"purple darken-3"}},[t._v(" 기존 시리얼을 입력하십시오. ")]),a("v-stepper-content",{attrs:{step:"1"}},[a("v-row",{attrs:{align:"center"}},[a("v-col",[a("v-text-field",{attrs:{label:"XXXX-XXXX-XXXX-HHMM",rules:[t.rules.serial],color:"purple darken-4","single-line":""},model:{value:t.serial,callback:function(e){t.serial=e},expression:"serial"}})],1)],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"pr-6",attrs:{align:"right"}},[a("v-btn",{attrs:{disabled:"string"===typeof t.rules.serial(t.serial)&&!t.loading,color:"purple darken-4",dark:"string"!==typeof t.rules.serial(t.serial),loading:t.loading},on:{click:t.checkSerial}},[t._v("다음")])],1)],1)],1),a("v-stepper-step",{attrs:{complete:t.step>2&&""!==t.acctag,step:"2",color:"purple darken-3"}},[t._v(" 다음 계정을 변경합니다. - "+t._s(t.acctag)+" ")]),a("v-stepper-content",{attrs:{step:"2"}},[a("v-row",{attrs:{align:"center"}},[a("v-col",[a("v-text-field",{attrs:{label:"@고유 닉네임",disabled:"",color:"purple darken-4","single-line":""},model:{value:t.acctag,callback:function(e){t.acctag=e},expression:"acctag"}})],1)],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"pr-6",attrs:{align:"right"}},[a("v-btn",{staticClass:"mr-3",on:{click:function(e){t.step=1}}},[t._v("이전")]),a("v-btn",{attrs:{disabled:""===t.acctag,color:"purple darken-4",dark:""!==t.acctag},on:{click:function(e){t.step=3}}},[t._v("다음")])],1)],1)],1),a("v-stepper-step",{attrs:{complete:t.step>3&&""!==t.newacctag,step:"3",color:"purple darken-3"}},[t._v(" 발급받을 계정은 무엇인가요? - "+t._s(t.newacctag)+" ")]),a("v-stepper-content",{attrs:{step:"3"}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"8"}},[a("v-text-field",{attrs:{label:"@고유 닉네임",disabled:"",color:"purple darken-4","single-line":""},model:{value:t.newacctag,callback:function(e){t.newacctag=e},expression:"newacctag"}})],1),a("v-col",{attrs:{align:"right"}},[a("v-btn",{attrs:{text:"",color:"purple darken-4"},on:{click:function(e){t.users=[],t.nickname="",t.dialog=!0}}},[t._v(" 검색 ")])],1)],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"pr-6",attrs:{align:"right"}},[a("v-btn",{staticClass:"mr-3",on:{click:function(e){t.step=2}}},[t._v("이전")]),a("v-btn",{attrs:{disabled:""===t.newacctag,color:"purple darken-4",dark:""!==t.newacctag},on:{click:function(e){t.step=4}}},[t._v("다음")])],1)],1)],1),a("v-stepper-step",{attrs:{complete:t.step>4,step:"4",color:"purple darken-3"}},[t._v(" 시리얼 변경 요청 ")]),a("v-stepper-content",{attrs:{step:"4"}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{align:"center"}},[a("h2",{staticClass:"title"},[t._v("변경 신청 준비가 완료되었습니다!")]),a("h3",{staticClass:"subtitle-1"},[t._v("아래 버튼을 눌러 시리얼을 변경하세요!")])])],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"pr-6",attrs:{align:"center"}},[a("v-btn",{attrs:{color:"light-blue accent-2",disabled:t.loading,loading:t.loading,dark:!t.loading},on:{click:function(e){return t.refSerial()}}},[t._v(" 변경해 주세요! ")])],1)],1)],1)],1)],1),a("v-col",{attrs:{cols:"0",sm:"2",md:"3"}})],1)],1)},s=[],r=a("87a1"),c=a("44ad"),i=a.n(c),l={metaInfo:{title:"소피아 시리얼 변경",htmlAttrs:{lang:navigator.language,dir:"ltr"},meta:[{charset:"utf-8"},{meta:"description",content:"유효하지 않은 시리얼을 변경하세요.",vmid:"description"},{name:"keywords",content:Object(r["b"])()},{name:"author",content:i()("author")},{property:"og:title",content:"소피아 시리얼 변경",vmid:"og:title"},{property:"og:description",content:"유효하지 않은 시리얼을 변경하세요.",vmid:"og:description"},{property:"og:image",content:a("5e56"),vmid:"og:image"},{name:"viewport",content:"width=device-width, initial-scale=1"}]},name:"refresh-serial-key",mounted:function(){},methods:{searchUsers:function(){var t=this,e=new XMLHttpRequest;e.onreadystatechange=function(){if(200===e.status&&4===e.readyState){var a=JSON.parse(e.responseText),n=a.results;t.users=n}},e.open("get","https://api.spooncast.net/search/user/?q=".concat(this.nickname)),e.send()},checkSerial:function(){var t=this,e=new XMLHttpRequest;e.onreadystatechange=function(){if(200===e.status&&4===e.readyState){t.loading=!1;var a=JSON.parse(e.responseText);a.result?(t.acctag=a.msg,t.step=2):(t.snackText=a.msg,t.snackbar=!0)}},e.open("get","https://us-central1-sopia-bot.cloudfunctions.net/getUserBySerial/".concat(this.serial)),e.send(),this.loading=!0},refSerial:function(){var t=this,e=new XMLHttpRequest;e.onreadystatechange=function(){if(200===e.status&&4===e.readyState){var a=JSON.parse(e.responseText);t.snackText=a.msg,t.snackbar=!0,t.loading=!1}},e.open("post","https://us-central1-sopia-bot.cloudfunctions.net/refreshSerial/".concat(this.serial)),e.send(JSON.stringify({spoon_id:this.newacctag})),this.loading=!0}},data:function(){return{step:1,acctag:"",newacctag:"",dialog:!1,nickname:"",users:[],search:"",selected:[],snackbar:!1,snackText:"",resDiag:!1,resText:"",serial:"",loading:!1,rules:{serial:function(t){return!!t.match(/[A-Z]{4}-[A-Z]{4}-[A-Z]{4}-[0-9]{4}/)||"시리얼 형식이 맞지 않습니다."}}}}},o=l,p=(a("4e9b"),a("2877")),d=a("6544"),v=a.n(d),g=a("8336"),u=a("b0af"),k=a("99d9"),m=a("62ad"),f=a("a523"),b=a("a75b"),h=a("169a"),w=a("ce7e"),x=a("adda"),_=a("8860"),V=a("da13"),C=a("8270"),S=a("5d23"),y=a("0fd9"),X=a("2db4"),T=a("7e85"),L=a("e516"),I=a("56a4"),J=a("8654"),O=Object(p["a"])(o,n,s,!1,null,"abf71506",null);e["default"]=O.exports;v()(O,{VBtn:g["a"],VCard:u["a"],VCardText:k["b"],VCardTitle:k["c"],VCol:m["a"],VContainer:f["a"],VContent:b["a"],VDialog:h["a"],VDivider:w["a"],VImg:x["a"],VList:_["a"],VListItem:V["a"],VListItemAvatar:C["a"],VListItemContent:S["a"],VListItemSubtitle:S["b"],VListItemTitle:S["c"],VRow:y["a"],VSnackbar:X["a"],VStepper:T["a"],VStepperContent:L["a"],VStepperStep:I["a"],VTextField:J["a"]})},fe94:function(t,e,a){}}]);
//# sourceMappingURL=chunk-937e1c34.js.map