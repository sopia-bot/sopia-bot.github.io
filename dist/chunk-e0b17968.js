(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e0b17968"],{2284:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-content",[a("pre",[t._v(t._s(t.sitemap)+"\n\t\t")])])},o=[],i=(a("4160"),a("a15b"),a("b0c0"),a("159b"),a("df7c")),s=a.n(i),r={name:"sitemap",mounted:function(){var t="https://sopia-bot.github.io",n='<?xml version="1.0" encoding="UTF-8"?>\n';if(n+='<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n',localStorage.routes){var a=JSON.parse(localStorage.routes);a.forEach((function(a){if("Sitemap"!==a.name){n+="\t<url>\n",n+="\t\t<loc>",n+=t+a.path,n+="</loc>\n",n+="\t</url>\n";var e=a.children;e&&e.forEach((function(e){var o=s.a.join(a.path,e.path);n+="\t<url>\n",n+="\t\t<loc>",n+=t+o,n+="</loc>\n",n+="\t</url>\n"}))}}))}n+="</urlset>",this.sitemap=n},data:function(){return{sitemap:"test"}}},c=r,p=a("2877"),l=a("6544"),u=a.n(l),f=a("a75b"),d=Object(p["a"])(c,e,o,!1,null,null,null);n["default"]=d.exports;u()(d,{VContent:f["a"]})},a75b:function(t,n,a){"use strict";a("daaf");var e=a("d10f");n["a"]=e["a"].extend({name:"v-content",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,n=t.bar,a=t.top,e=t.right,o=t.footer,i=t.insetFooter,s=t.bottom,r=t.left;return{paddingTop:"".concat(a+n,"px"),paddingRight:"".concat(e,"px"),paddingBottom:"".concat(o+i+s,"px"),paddingLeft:"".concat(r,"px")}}},render:function(t){var n={staticClass:"v-content",style:this.styles,ref:"content"};return t(this.tag,n,[t("div",{staticClass:"v-content__wrap"},this.$slots.default)])}})},daaf:function(t,n,a){}}]);
//# sourceMappingURL=chunk-e0b17968.js.map