(function(e){function n(n){for(var c,o,u=n[0],i=n[1],d=n[2],r=0,l=[];r<u.length;r++)o=u[r],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);h&&h(n);while(l.length)l.shift()();return s.push.apply(s,d||[]),t()}function t(){for(var e,n=0;n<s.length;n++){for(var t=s[n],c=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(c=!1)}c&&(s.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},o={app:0},a={app:0},s=[];function u(e){return i.p+"dist/"+({}[e]||e)+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-00673b0d":1,"chunk-01a78b9c":1,"chunk-039548ba":1,"chunk-04c3bc59":1,"chunk-0fd1ff96":1,"chunk-1e10be20":1,"chunk-205141e2":1,"chunk-255d0abe":1,"chunk-2fc01141":1,"chunk-33398028":1,"chunk-3517bb45":1,"chunk-364aa0d1":1,"chunk-37c40df9":1,"chunk-3d1dbdd4":1,"chunk-3faf8bb8":1,"chunk-4058a129":1,"chunk-40cce8af":1,"chunk-42b3a0da":1,"chunk-45935608":1,"chunk-496c92fc":1,"chunk-4cae96f8":1,"chunk-513649ef":1,"chunk-5ba5bc6e":1,"chunk-69d2a300":1,"chunk-6d863cb6":1,"chunk-6f6f95cf":1,"chunk-74572f50":1,"chunk-7908f8de":1,"chunk-822689be":1,"chunk-b74e9344":1,"chunk-b7854a6c":1,"chunk-bb9b7e00":1,"chunk-19ebd6ac":1,"chunk-71de2a35":1,"chunk-5935c5a4":1,"chunk-6e86468e":1,"chunk-735493ce":1,"chunk-83042fac":1,"chunk-7e91e8d9":1,"chunk-778c0968":1,"chunk-4af125d0":1,"chunk-e0b17968":1,"chunk-e97fac5e":1,"chunk-f8d90532":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-00673b0d":"c7315fda","chunk-01a78b9c":"c7315fda","chunk-039548ba":"c7315fda","chunk-04c3bc59":"10b33ca9","chunk-0fd1ff96":"c7315fda","chunk-1e10be20":"c7315fda","chunk-205141e2":"c7315fda","chunk-255d0abe":"c7315fda","chunk-2fc01141":"d1cc9e93","chunk-33398028":"10b33ca9","chunk-3517bb45":"a2579224","chunk-364aa0d1":"c7315fda","chunk-37c40df9":"90dceffe","chunk-3d1dbdd4":"c7315fda","chunk-3faf8bb8":"c7315fda","chunk-4058a129":"c7315fda","chunk-40cce8af":"65be97b3","chunk-42b3a0da":"c7315fda","chunk-45935608":"c7315fda","chunk-496c92fc":"10b33ca9","chunk-4cae96f8":"c7315fda","chunk-513649ef":"08889015","chunk-5ba5bc6e":"c7315fda","chunk-69d2a300":"c7315fda","chunk-6d863cb6":"a2579224","chunk-6f6f95cf":"c7315fda","chunk-74572f50":"5205a56c","chunk-7908f8de":"c7315fda","chunk-822689be":"c7315fda","chunk-b74e9344":"a2579224","chunk-b7854a6c":"10b33ca9","chunk-bb9b7e00":"0e6b002a","chunk-19ebd6ac":"a2579224","chunk-71de2a35":"cf0c2f9c","chunk-5935c5a4":"43c18c31","chunk-6e86468e":"9a105cd7","chunk-735493ce":"b67228f0","chunk-83042fac":"15a5c346","chunk-dca34cd6":"31d6cfe0","chunk-7e91e8d9":"2d5e738a","chunk-778c0968":"dae3f406","chunk-4af125d0":"f991e2c7","chunk-e0b17968":"ce9e4fb0","chunk-e97fac5e":"c7315fda","chunk-f8d90532":"c7315fda"}[e]+".css",a=i.p+c,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var d=s[u],r=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(r===c||r===a))return n()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){d=l[u],r=d.getAttribute("data-href");if(r===c||r===a)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var c=n&&n.target&&n.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=c,delete o[e],h.parentNode.removeChild(h),t(s)},h.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){o[e]=0})));var c=a[e];if(0!==c)if(c)n.push(c[2]);else{var s=new Promise((function(n,t){c=a[e]=[n,t]}));n.push(c[2]=s);var d,r=document.createElement("script");r.charset="utf-8",r.timeout=120,i.nc&&r.setAttribute("nonce",i.nc),r.src=u(e);var l=new Error;d=function(n){r.onerror=r.onload=null,clearTimeout(h);var t=a[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+o+")",l.name="ChunkLoadError",l.type=c,l.request=o,t[1](l)}a[e]=void 0}};var h=setTimeout((function(){d({type:"timeout",target:r})}),12e4);r.onerror=r.onload=d,document.head.appendChild(r)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],r=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var h=r;s.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var c=t("8a23"),o=t.n(c);o.a},"0ac9":function(e,n,t){"use strict";var c=t("fd4b"),o=t.n(c);o.a},"0d23":function(e,n,t){},2879:function(e){e.exports=JSON.parse('{"error":"에러","notification":"알림","warning":"경고","apply":"적용","ok":"예","no":"아니오","confirm":"확인","modify":"수정","delete":"삭제","cancel":"취소","comment":"댓글","add":"추가","please-input":"값을 입력해 주세요.","action":"동작","applying":"값을 적용합니다.","download":"다운로드","author":"개발자 윤군","meta.home":"No.1 매니저 소피아","meta.home.desc":"스푼 라디오 No.1 매니저 봇 소피아를 사용해 보세요.","meta.docs.how-to-sign":"어떻게 시리얼을 발급하나요? | 소피아 사용법","meta.docs.how-to-sign.desc":"아래 링크를 클릭해 가입 페이지로 들어갑니다. 계정 신청자가 DJ인지 매니저인지 선택합니다. 소피아가 사용될 주 방송의 DJ를 한 명 고릅니다. 하도 제대로 못 보내서 스푼 검색 시스템을 넣어놨습니다. 소피아를 사용할 계정을 선택합니다.","meta.docs.install":"설치하기 | 소피아 사용법","meta.docs.install.desc":"소피아는 가장 최신 버전을 사용한 걸 권장하고 있습니다. 최신 버전을 다운로드해 주세요. 소피아는 PC에서만 실행시킬 수 있습니다. Windows 시스템 기반이지만 리눅스나 Mac OS 또한 가능합니다.","meta.docs.manager":"간편 매니저 | 소피아 사용법","meta.docs.manager.desc":"소피아는 시리얼을 할당받아야만 사용 가능합니다.  개발자 및 운영진에게 상담해 쉽게 시리얼을 받을 수 있습니다. 시리얼을 할당받은 계정으로 스푼에 로그인 합니다. 이외의 계정은 사용할 수 없습니다.","meta.docs.load-setting":"설정 불러오기 | 소피아 사용법","meta.docs.load-setting.desc":"기존 사용자가 새로 업데이트 했을 때만 해당됩니다!  이전 버전 설정이 잘못 된 상태로 불러오면, 새로운 버전도 잘못됩니다.  설정이 잘 불러와 지는지 확인하고 이전 버전을 삭제해 주세요.","meta.docs.q.spoor-chat":"Spoor Chat 사용 | 소피아 사용법","meta.docs.q.spoor-chat.desc":"Spoon + Super Chat 의 합성어로, 유튜브의 후원기능인 Super Chat을 스푼라디오에 도입시켰습니다.  청취자가 최소 요구 스푼을 선물하고, 대기 시간 이내에 채팅을 치면 음성합성 시스템이 읽어줍니다.","meta.docs.home":"HOME | 소피아 사용법","meta.docs.home.desc":"라이브 정보는 로그인 한 뒤, 방송에 입장해야 수집됩니다. 라이브 및 디제이 정보가 화면에 표시되며, 오른쪽 텍스트를 클릭하면 클립보드에 복사됩니다.","meta.docs.ez-cmd":"쉬운 명령어 추가 | 소피아 사용법","meta.docs.ez-cmd.desc":"해당 번들과 동시에 OnOff 번들을 사용중이라면, 소피아에 오동작이 일어날 수 있습니다.  해당 번들을 사용기로 하면, OTHER 메뉴에 EZ-CMD 메뉴가 추가됩니다.  만약 추가되지 않았거나 페이지가 정상 이동하지 않을 경우 소피아 프로그램을 재시작 해야 합니다.  입장 & 하트에 대한 반응을 쉽게 설정할 수 있습니다.  설명에 존재하듯, 예약어 목록을 그대로 사용하면 정보가 변경되어 출력됩니다.","meta.docs.code":"CODE | 소피아 사용법","meta.docs.code.desc":"이 문서에선 CODE 탭의 설명만 진행합니다.  상세한 프로그래밍 방법은 API DOC 을 참고하세요. 소피아가 초기화 될 땐 무조건 sopia/main.js 파일을 실행시킵니다. 즉, main.js는 무조건 필요합니다.","meta.docs.m.spoor-chat":"Spoor Chat | 소피아 사용법","meta.docs.m.spoor-chat.desc":"간단한 사용법은 Spoor Chat 설정 문서를 참고하세요.  이 문서에선 시그니처에 대해 설명합니다.  시그니처란?  특정 단어에 대하여 DJ 본인의 음성을 등록해 두면, 해당 단어의 Spoor Chat은 음성합성 시스템이 아닌 등록한 음성이 재생됩니다.","meta.docs.setting":"SETTING | 소피아 사용법","meta.docs.setting.desc":"자동로그인 및 소피아 설정관리 자동 매니저 멘트 시작 매니저일때만 매니저 멘트 작동 설정 불러오기 자동 로그인을 사용 설정하고, 로그인 타입을 설정한 뒤 저장하면 다음 소피아 실행시 자동 로그인이 진행됩니다.","meta.docs.bundle":"BUNDLE | 소피아 사용법","meta.docs.bundle.desc":"소피아가 기본적으로 제공하지 않는 편리한 기능들을 기능별로 사용할 수 있습니다. 프로그램을 업데이트하지 않아도, 번들은 업데이트 가능합니다. 매니저 라고 적혀있는 번들은, 매니저 이상의 권한을 가진 사람만 사용할 수 있습니다.","meta.docs.bundle.onoff":"OnOff | 소피아 번들","meta.docs.bundle.onoff.desc":"해당 번들을 설치하면 모든 반응이 off 되어있습니다.  명령어를 사용해 기능별로 on 할 수 있습니다.","meta.docs.bundle.loop":"반복 | 소피아 번들","meta.docs.bundle.loop.desc":"!반복 [초] [문장] 명령어를 이용하여, 원하는 문장을 일정 시간마다 반복해서 출력되도록 할 수 있습니다.  !반복 제거 또는 !반복 삭제 명령어를 이용하여, 현재 반복 중인 동작을 정지할 수 있습니다.","meta.docs.bundle.signature":"시그니처 | 소피아 번들","meta.docs.bundle.signature.desc":"시그니처는 에서 부가적으로 본인이 등록해야 하는 것을, 똑똑한 여러분이라면 이미 이전 글을 읽어서 알고 계실겁니다.  시그니처 번들은 등록된 시그니처 목록을 보여주는 !시그니처 명령어를 추가합니다.","meta.docs.bundle.song-request":"신청곡 | 소피아 번들","meta.docs.bundle.song-request.desc":"!신청곡 명령어로 현재 신청곡 목록을 확인할 수 있습니다.  !신청곡 [신청할 곡 이름] 명령어로 신청곡을 목록에 추가할 수 있습니다.  !신청곡 삭제 또는 !신청곡 제거 명령어로 가장 마지막에 추가된 신청곡을 제거할 수 있습니다. ","meta.docs.bundle.vote":"투표 | 소피아 번들","meta.docs.bundle.vote.desc":"!신청곡 명령어로 현재 신청곡 목록을 확인할 수 있습니다.  !신청곡 [신청할 곡 이름] 명령어로 신청곡을 목록에 추가할 수 있습니다.  !신청곡 삭제 또는 !신청곡 제거 명령어로 가장 마지막에 추가된 신청곡을 제거할 수 있습니다. ","meta.docs.bundle.now-song":"현재곡 | 소피아 번들","meta.docs.bundle.now-song.desc":"- Windows 에서만 동작합니다.  - 멜론 플레이어에서 재생되는 노래만 가능합니다.  !현재곡 명령어를 이용하여, 재생중인 곡의 제목 및 가수명을 알 수 있습니다.","meta.docs.bundle.minigame":"미니게임 | 소피아 번들","meta.docs.bundle.minigame.desc":"미니게임 디제이의 컨텐츠는 어디까지 늘어날까 1. 추첨 닉네임 노출 허락받은 사진입니다. !추첨 명령어를 이용하여, 현재 방송 목록에 있는 청취자 중 한 명을 고릅니다.","meta.docs.bundle.ez-cmd":"쉬운 명령어 추가 | 소피아 번들","meta.docs.bundle.ez-cmd.desc":"해당 번들과 동시에 OnOff 번들을 사용중이라면, 소피아에 오동작이 일어날 수 있습니다.  해당 번들을 사용기로 하면, OTHER 메뉴에 EZ-CMD 메뉴가 추가됩니다.  만약 추가되지 않았거나 페이지가 정상 이동하지 않을 경우 소피아 프로그램을 재시작 해야 합니다.  입장 & 하트에 대한 반응을 쉽게 설정할 수 있습니다.  설명에 존재하듯, 예약어 목록을 그대로 사용하면 정보가 변경되어 출력됩니다.","meta.docs.api.start":"시작하기 | API 가이드","meta.docs.api.start.desc":"사전 지식 소피아는 프로그래밍 언어 중 하나인 Javascript 를 사용했습니다. API 가이드에선 프로그래밍에 관한 설명은 없으며, 오로지 소피아가 지원하는 객체와 그 사용법에 대해서만 설명합니다. 자바스크립트 가이드는 MDN 을 참고하십시오.","meta.docs.api.sopia":"Sopia 객체 | API 가이드","meta.docs.api.sopia.desc":"모든 API 는 sopia 객체에서 지원합니다. 해당 객체는 EventEmitter 입니다.  sopia EventEmitter Event all 모든 라이브 이벤트 발생시 파라미터 Live Event Object 라이브 이벤트 발생시 정보 Event message 청취자가 채팅을 쳤을 때 파라미터","meta.docs.api.var":"Var 객체 | API 가이드","meta.docs.api.var.desc":"해당 객체는 코드 리로딩 ( F5, 번들 설치 ) 발생시 초기화되는 객체입니다.  sopia.var :Object sopia.var.live 현재 라이브 정보 sopia.var.created 현재 라이브 시작 시간 (UTC) sopia.var._send_sopia.send 함수와 동일 사용 예제 다음 예제는 !before","meta.docs.api.config":"Config 객체 | API 가이드","meta.docs.api.config.desc":"Config 객체 소피아 설정 sopia.config : Object Object sopia 소피아 설정 정보 하위 변수 Autostart Boolean 소피아 자동 시작 Onlymanager Boolean 매니저일때만 매니저 멘트 작동 Limitoff Boolean 소피아 글자수 제한 넘어갈 시 100글자씩 나누어 전송","meta.docs.api.itv":"Itv 객체 | API 가이드","meta.docs.api.itv.desc":" Itv 객체 일정 시간마다 반복 작업 수행 sopia.itv : Object Function add 반복 작업 추가 파라미터 Key String 반복 작업 이름 Func Function 반복 작업을 수행할 함수 Time Number 반복 시간 ( Ms 단위 )","meta.docs.api.inject":"스크립트 삽입 | API 가이드","meta.docs.api.inject.desc":"프로그램이 로딩되기 전, 로딩 중, 로딩 완료 세 단계에 따른 커스텀 스크립트를 삽입할 수 있습니다.  해당 기능은 sopia/inject 폴더 안에 있는 스크립트를 파일 이름 순으로 정렬한 뒤, 순차적으로 실행합니다. 프로그램 로딩 전 호출되는 함수 정확히 Head 태그가 로딩될 때 호출됩니다.","home.introduce":"당신의 스푼 방송을 더 멋지게 만들어주는 매니저 프로그램","home.download":"최신 다운로드","home.google-down":"구글 드라이브","home.use-doc":"사용 방법보기","intro.good-design":"깔끔하며, 눈을 뗄 수 없는 디자인이 당신을 사로잡을 겁니다.","intro.good-design2":"디자인 뿐만 아니라 사용자 경험 측면에서도 쉽게 다가갈 수 있습니다.","intro.free":"엄청난 자유도를 가지고 봇의 머리를 코딩할 수 있습니다.","intro.free2":"입문 장벽이 낮은 자바스크립트는 당신이 원하는 대로 할 수 있습니다.","intro.spoorchat":"스푼라디오에 드디어 도네이션 기능이 추가되었습니다.","intro.spoorchat2":"스푼을 후원한 청취자의 채팅을 읽는 것으로 더 재밌는 방송을 진행할 수 있습니다.","intro.spoorchat3":"특정 텍스트를 자신의 목소리로 대신 읽어주는 시그니처 기능 또한 있습니다.","intro.setting":"자동 로그인 기능을 포함한 몇몇 설정은 매우 간편합니다.","intro.bundle":"원하는 기능만 골라 사용할 수 있는 번들 기능을 제공합니다.","intro.bundle2":"프로그램을 업데이트 하지 않아도, 번들은 업데이트 할 수 있습니다.","intro.comunity":"커뮤니티","intro.kakao":"스푼라디오에서 가장 큰 커뮤니티라고 생각합니다.","intro.kakao2":"약 1000명의 사람들이 서로 질문하고 친목을 도모하며 교류합니다","intro.anydesk":"Anydesk를 사용하여 문제 해결에 도움을 드리고 있습니다.","intro.anydesk2":"어려운 문제는 원격으로 해결하세요!","docs.quick.start":"빠른 시작 안내","docs.quick.how-to-sign":"어떻게 시리얼을 발급하나요?","docs.quick.install":"설치하기","docs.quick.manager":"간편 매니저","docs.quick.load-setting":"설정 불러오기","docs.quick.spoor-chat":"Spoor Chat 사용","docs.menus":"프로그램 메뉴 안내","docs.menus.home":"HOME","docs.menus.ez-cmd":"EZ CMD","docs.menus.code":"CODE","docs.menus.spoor-chat":"SPOOR CHAT","docs.menus.setting":"SETTING","docs.menus.bundle":"BUNDLE","docs.bundle":"번들 안내","docs.bundle.onoff":"OnOff","docs.bundle.loop":"반복","docs.bundle.signature":"시그니처","docs.bundle.song-request":"신청곡","docs.bundle.vote":"투표","docs.bundle.now-song":"현재곡","docs.bundle.minigame":"미니게임","docs.bundle.ez-cmd":"쉬운 명령어 추가","docs.api":"API 가이드","docs.api.start":"시작하기","docs.api.sopia":"Sopia 객체","docs.api.var":"Var 객체","docs.api.config":"Config 객체","docs.api.itv":"Itv 객체","docs.api.inject":"스크립트 삽입"}')},"44ad":function(e,n,t){function c(e){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}var o="ko",a="ko",s=navigator.language.substr(0,2),u=null;if(null!=a)u=t("98cd")("./"+a+".json");else switch(s){case"ko":u=t("2879");break;default:u=t("98cd")("./"+o+".json")}e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n="Unkown";return"object"===c(u)&&(n=u[e]||"Unkown",n=n.replace(/\r\n/g,"<br>")),n}},"56d7":function(e,n,t){"use strict";t.r(n);t("db4d");var c=t("a026"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("v-app-bar",{attrs:{app:"",color:"white",prominent:"",height:e.small?"":"75px",elevation:"2"}},[e.small?t("v-container",{staticClass:"px-0",staticStyle:{"max-width":"unset"}},[t("v-row",{attrs:{align:"center",justify:"center"}},[t("v-col",{attrs:{align:"center"}},[t("h1",{staticClass:"title"},[t("router-link",{staticClass:"black--text",staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[e._v("SOPIA")])],1)])],1),t("v-row",{attrs:{align:"center",justify:"center"}},[e.docs||e.shop?t("v-col",{staticClass:"pa-0",attrs:{cols:"1"}},[e.docs?t("v-app-bar-nav-icon",{staticClass:"pa-0",on:{click:e.openMenu}}):e._e()],1):e._e(),t("v-col",{staticClass:"pa-2 px-0",attrs:{align:"center"}},e._l(e.menus,(function(n){return t("v-btn",{key:n.route,attrs:{text:"",tile:"",color:"purple darken-4"},on:{click:function(t){return e.routeAssignUrl(n.route)}}},[e._v(" "+e._s(n.name)+" ")])})),1),e.docs||e.shop?t("v-col",{staticClass:"pa-0 text-left",attrs:{cols:"1"}},[e.shop?t("v-app-bar-nav-icon",{staticClass:"pa-0",on:{click:e.openShop}}):e._e()],1):e._e()],1)],1):t("v-container",{staticClass:"pa-1",staticStyle:{"max-width":"unset"}},[t("v-row",{attrs:{align:"center",justify:"center"}},[t("v-col",{attrs:{cols:"4",sm:"3",md:"3",lg:"2",xl:"2",align:"center"}},[t("div",{staticStyle:{"border-right":"1.2px solid #e5e5e5"}},[t("h1",{staticClass:"title"},[t("router-link",{staticClass:"black--text",staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[t("span",{staticClass:"purple--text text--darken-4"},[e._v("SOPIA")])])],1)])]),t("v-col",e._l(e.menus,(function(n){return t("v-btn",{key:n.route,attrs:{text:"",tile:"",color:"purple darken-4"},on:{click:function(t){return e.routeAssignUrl(n.route)}}},[e._v(" "+e._s(n.name)+" ")])})),1)],1)],1)],1),t("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"router-view",tile:"","max-height":"100vh"}},[t("transition",{attrs:{name:"scroll-y-reverse-transition"}},[t("router-view")],1)],1)],1)},a=[],s=t("87a1"),u=t("8edb"),i=function(){u["a"].$emit("navi-draw",!0)},d={name:"App",methods:{routeAssignUrl:s["d"],getWindowWidth:function(){this.windowWidth=document.documentElement.clientWidth,this.$store.commit("small",this.windowWidth<960)},openMenu:i,openShop:function(){u["a"].$emit("cart-draw",!0)}},components:{},data:function(){return{windowWidth:0,small:this.$store.getters.small,docs:!1,shop:!1,menus:[{route:"/docs/",name:"docs"},{route:"/release/",name:"note"}]}},mounted:function(){this.$nextTick((function(){window.addEventListener("resize",this.getWindowWidth),this.getWindowWidth()}))},computed:{small_:function(){return this.$store.getters.small}},watch:{small_:function(e){this.small=e},$route:function(){this.$route.path.match(/^\/docs/)?this.docs=!0:this.docs=!1,this.$route.path.match(/^\/shop/)?this.shop=!0:this.shop=!1}},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)}},r=d,l=(t("034f"),t("0ac9"),t("2877")),h=t("6544"),f=t.n(h),m=t("7496"),p=t("40dc"),b=t("5bc1"),k=t("8336"),v=t("62ad"),g=t("a523"),w=t("0fd9"),y=t("8dd9"),S=Object(l["a"])(r,o,a,!1,null,"5ff818cc",null),O=S.exports;f()(S,{VApp:m["a"],VAppBar:p["a"],VAppBarNavIcon:b["a"],VBtn:k["a"],VCol:v["a"],VContainer:g["a"],VRow:w["a"],VSheet:y["a"]});var C=t("8c4f"),E=t("d0ef");t("df7c");c["a"].use(C["a"]);var j=[];E["a"].cGroupList.forEach((function(e){var n=e.singleSub;n.forEach((function(e){var n=new Object;n.path=e.key.replace("/docs/",""),n.component=function(){return t("627e")("./views"+e.key.replace(/\/$/,"")+".vue")},n.pathToRegexpOptions={strict:!0},j.push(n)}))})),E["a"].cList.forEach((function(e){var n=new Object;n.path=e.key.replace("/docs/",""),n.component=function(){return t("627e")("./views"+e.key.replace(/\/$/,"")+".vue")},n.pathToRegexpOptions={strict:!0},j.push(n)})),console.log(j);var x=[{path:"/",name:"Home",component:function(){return t.e("chunk-40cce8af").then(t.bind(null,"bb51"))}},{path:"/docs",name:"Docs",component:function(){return Promise.all([t.e("chunk-bb9b7e00"),t.e("chunk-778c0968"),t.e("chunk-4af125d0")]).then(t.bind(null,"eba1"))},children:j,redirect:"/docs/quick-start/how-to-sign/"},{path:"/sitemap",name:"Sitemap",component:function(){return t.e("chunk-e0b17968").then(t.bind(null,"2284"))}},{path:"/signin/",name:"Sign In",component:function(){return Promise.all([t.e("chunk-bb9b7e00"),t.e("chunk-71de2a35"),t.e("chunk-7e91e8d9")]).then(t.bind(null,"54e2"))}},{path:"/release/",name:"Release Note",component:function(){return t.e("chunk-37c40df9").then(t.bind(null,"639e"))}},{path:"/refresh-key/",name:"Refresh Serial Key",component:function(){return Promise.all([t.e("chunk-bb9b7e00"),t.e("chunk-71de2a35"),t.e("chunk-6e86468e")]).then(t.bind(null,"e86f"))}}];localStorage.setItem("routes",JSON.stringify(x));var _=new C["a"]({mode:"history",base:"/",routes:x}),P=_,q=t("2f62");c["a"].use(q["a"]);var A=new q["a"].Store({state:{small:!1,draw:!1,cart:[],fin:!1},getters:{small:function(e){return e.small},draw:function(e){return e.draw},cart:function(e){return e.cart},fin:function(e){return e.fin}},mutations:{small:function(e,n){e.small=n},draw:function(e,n){e.draw=n},cart:function(e,n){e.cart=n},fin:function(e,n){e.fin=n}},actions:{},modules:{}}),I=t("f309");c["a"].use(I["a"]);var D=new I["a"]({}),T=t("766e"),N=t("58ca"),L=t("5693"),M=t.n(L);c["a"].config.productionTip=!1,c["a"].component("Picture",T["default"]),c["a"].use(N["a"]),c["a"].component("vue-embed-gist",M.a),new c["a"]({router:P,store:A,vuetify:D,render:function(e){return e(O)}}).$mount("#app")},"627e":function(e,n,t){var c={"./views/Com/Picture.vue":["766e"],"./views/Com/footer.vue":["e25d","chunk-513649ef"],"./views/Com/navi.vue":["b8fa","chunk-bb9b7e00","chunk-778c0968"],"./views/Docs.vue":["eba1","chunk-bb9b7e00","chunk-778c0968","chunk-4af125d0"],"./views/Home.vue":["bb51","chunk-40cce8af"],"./views/Note.vue":["639e","chunk-37c40df9"],"./views/RefKey.vue":["e86f","chunk-bb9b7e00","chunk-71de2a35","chunk-6e86468e"],"./views/Shop/Accept.vue":["c14b","chunk-6d863cb6"],"./views/Shop/Calc.vue":["1e47","chunk-b74e9344"],"./views/Shop/Fin.vue":["9968","chunk-3517bb45"],"./views/Shop/List.vue":["82a8","chunk-bb9b7e00","chunk-71de2a35","chunk-735493ce","chunk-83042fac"],"./views/Shop/Pay.vue":["44e1","chunk-bb9b7e00","chunk-71de2a35","chunk-5935c5a4"],"./views/SignIn.vue":["54e2","chunk-bb9b7e00","chunk-71de2a35","chunk-7e91e8d9"],"./views/Test.vue":["78c1","chunk-bb9b7e00","chunk-19ebd6ac"],"./views/UserChart.vue":["168f","chunk-74572f50"],"./views/docs/api-template.vue":["db20","chunk-04c3bc59"],"./views/docs/api/config.vue":["878d","chunk-b7854a6c"],"./views/docs/api/inject.vue":["1d8e","chunk-2fc01141"],"./views/docs/api/itv.vue":["0d27","chunk-496c92fc"],"./views/docs/api/sopia.vue":["631a","chunk-33398028"],"./views/docs/api/start.vue":["5b42","chunk-4058a129"],"./views/docs/api/var.vue":["47b0","chunk-f8d90532"],"./views/docs/bundle/ez-cmd.vue":["f44f","chunk-205141e2"],"./views/docs/bundle/loop.vue":["bf62","chunk-5ba5bc6e"],"./views/docs/bundle/minigame.vue":["178e","chunk-364aa0d1"],"./views/docs/bundle/now-song.vue":["bcd4","chunk-7908f8de"],"./views/docs/bundle/onoff.vue":["cc14","chunk-69d2a300"],"./views/docs/bundle/signature.vue":["5aac","chunk-42b3a0da"],"./views/docs/bundle/song-request.vue":["ec32","chunk-e97fac5e"],"./views/docs/bundle/vote.vue":["bedc","chunk-3faf8bb8"],"./views/docs/menus/bundle.vue":["2520","chunk-45935608"],"./views/docs/menus/code.vue":["48a7","chunk-bb9b7e00","chunk-71de2a35","chunk-735493ce","chunk-dca34cd6"],"./views/docs/menus/ez-cmd.vue":["898e","chunk-255d0abe"],"./views/docs/menus/home.vue":["0066","chunk-00673b0d"],"./views/docs/menus/setting.vue":["bbe0","chunk-6f6f95cf"],"./views/docs/menus/spoor-chat.vue":["4472","chunk-3d1dbdd4"],"./views/docs/quick-start/how-to-sign.vue":["2cd8","chunk-0fd1ff96"],"./views/docs/quick-start/install.vue":["7a38","chunk-01a78b9c"],"./views/docs/quick-start/load-setting.vue":["90e6","chunk-039548ba"],"./views/docs/quick-start/manager.vue":["7b71","chunk-822689be"],"./views/docs/quick-start/spoor-chat.vue":["3df8","chunk-1e10be20"],"./views/docs/template.vue":["97ce","chunk-4cae96f8"],"./views/sitemap.vue":["2284","chunk-e0b17968"]};function o(e){if(!t.o(c,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=c[e],o=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(o)}))}o.keys=function(){return Object.keys(c)},o.id="627e",e.exports=o},"766e":function(e,n,t){"use strict";t.r(n);var c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-dialog",{scopedSlots:e._u([{key:"activator",fn:function(n){var c=n.on;return[t("v-row",{class:e.rowClass},[t("v-col",{attrs:{align:"center"}},[t("v-hover",{staticClass:"my-12",scopedSlots:e._u([{key:"default",fn:function(n){var o=n.hover;return[t("v-card",e._g({attrs:{"max-width":e.maxWidth||"600px",elevation:o?24:6}},c),[t("v-img",{attrs:{src:e.src,width:"100%"}})],1)]}}],null,!0)}),t("p",{staticClass:"caption"},[e._v(e._s(e.caption))])],1)],1)]}}]),model:{value:e.dialog,callback:function(n){e.dialog=n},expression:"dialog"}},[t("v-card",[t("v-img",{attrs:{src:e.src,width:"100%"}})],1)],1)},o=[],a={name:"Picture",props:["maxWidth","src","caption","rowClass"],components:{},methods:{},mounted:function(){},data:function(){return{dialog:!1}}},s=a,u=(t("d180"),t("2877")),i=t("6544"),d=t.n(i),r=t("b0af"),l=t("62ad"),h=t("169a"),f=t("ce87"),m=t("adda"),p=t("0fd9"),b=Object(u["a"])(s,c,o,!1,null,null,null);n["default"]=b.exports;d()(b,{VCard:r["a"],VCol:l["a"],VDialog:h["a"],VHover:f["a"],VImg:m["a"],VRow:p["a"]})},"87a1":function(e,n,t){"use strict";t.d(n,"d",(function(){return c})),t.d(n,"a",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"b",(function(){return s}));var c=function(e,n){var t=this&&this.$router||n&&n.$router;"string"===typeof e&&t&&t.history.current.path!==e&&t.push({path:e})},o=function(e){"string"===typeof e&&window.location.assign(e)},a=function(e){"string"===typeof e&&window.open(e)},s=function(e){var n=["SOPIA","소피아","스푼 매니저","스푼 봇","스푼","스푼 라디오","매니저","매크로","스푼 매크로","스푼 윤군","스푼 개발자 윤군"];return n.concat(e).join(", ")}},"8a23":function(e,n,t){},"8edb":function(e,n,t){"use strict";var c=t("a026"),o=new c["a"];n["a"]=o},"98cd":function(e,n,t){var c={"./ko.json":"2879"};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(c,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return c[e]}o.keys=function(){return Object.keys(c)},o.resolve=a,e.exports=o,o.id="98cd"},d0ef:function(e,n,t){"use strict";var c=t("44ad"),o=t.n(c);t("87a1");n["a"]={cGroupList:[{name:o()("docs.quick.start"),key:"/docs/quick-start",singleSub:[{key:"/docs/quick-start/how-to-sign/",name:o()("docs.quick.how-to-sign")},{key:"/docs/quick-start/install/",name:o()("docs.quick.install")},{key:"/docs/quick-start/manager/",name:o()("docs.quick.manager")},{key:"/docs/quick-start/spoor-chat/",name:o()("docs.quick.spoor-chat")}]},{name:o()("docs.menus"),key:"/docs/menus",singleSub:[{key:"/docs/menus/home/",name:o()("docs.menus.home")},{key:"/docs/menus/ez-cmd/",name:o()("docs.menus.ez-cmd")},{key:"/docs/menus/code/",name:o()("docs.menus.code")},{key:"/docs/menus/spoor-chat/",name:o()("docs.menus.spoor-chat")},{key:"/docs/menus/setting/",name:o()("docs.menus.setting")},{key:"/docs/menus/bundle/",name:o()("docs.menus.bundle")}]},{name:o()("docs.bundle"),key:"/docs/bundle",singleSub:[{key:"/docs/bundle/onoff/",name:o()("docs.bundle.onoff")},{key:"/docs/bundle/loop/",name:o()("docs.bundle.loop")},{key:"/docs/bundle/signature/",name:o()("docs.bundle.signature")},{key:"/docs/bundle/song-request/",name:o()("docs.bundle.song-request")},{key:"/docs/bundle/vote/",name:o()("docs.bundle.vote")},{key:"/docs/bundle/now-song/",name:o()("docs.bundle.now-song")},{key:"/docs/bundle/minigame/",name:o()("docs.bundle.minigame")},{key:"/docs/bundle/ez-cmd/",name:o()("docs.bundle.ez-cmd")}]},{name:o()("docs.api"),key:"/docs/api",singleSub:[{key:"/docs/api/start/",name:o()("docs.api.start")},{key:"/docs/api/sopia/",name:o()("docs.api.sopia")},{key:"/docs/api/var/",name:o()("docs.api.var")},{key:"/docs/api/config/",name:o()("docs.api.config")},{key:"/docs/api/itv/",name:o()("docs.api.itv")},{key:"/docs/api/inject/",name:o()("docs.api.inject")}]}],cList:[]}},d180:function(e,n,t){"use strict";var c=t("0d23"),o=t.n(c);o.a},fd4b:function(e,n,t){}});
//# sourceMappingURL=app.js.map