(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39d534c2"],{2284:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-content",[a("pre",[t._v(t._s(t.sitemap)+"\n\t\t")])])},i=[],o=a("df7c"),r=a.n(o),s={name:"sitemap",mounted:function(){var t="https://sopia-bot.github.io",n='<?xml version="1.0" encoding="UTF-8"?>\n';if(n+='<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n',localStorage.routes){var a=JSON.parse(localStorage.routes);a.forEach((function(a){if("Sitemap"!==a.name){n+="\t<url>\n",n+="\t\t<loc>",n+=t+a.path,n+="</loc>\n",n+="\t</url>\n";var e=a.children;e&&e.forEach((function(e){var i=r.a.join(a.path,e.path);n+="\t<url>\n",n+="\t\t<loc>",n+=t+i,n+="</loc>\n",n+="\t</url>\n"}))}}))}n+="</urlset>",this.sitemap=n},data:function(){return{sitemap:"test"}}},c=s,l=a("2877"),p=a("6544"),u=a.n(p),d=a("a75b"),f=Object(l["a"])(c,e,i,!1,null,null,null);n["default"]=f.exports;u()(f,{VContent:d["a"]})},a75b:function(t,n,a){"use strict";a("bd0c");var e=a("d10f"),i=e["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,n=t.bar,a=t.top,e=t.right,i=t.footer,o=t.insetFooter,r=t.bottom,s=t.left;return{paddingTop:"".concat(a+n,"px"),paddingRight:"".concat(e,"px"),paddingBottom:"".concat(i+o+r,"px"),paddingLeft:"".concat(s,"px")}}},render:function(t){var n={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,n,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}}),o=a("d9bd");n["a"]=i.extend({name:"v-main",created:function(){Object(o["d"])("v-content","v-main",this)},render:function(t){var n=i.options.render.call(this,t);return n.data.staticClass+=" v-content",n.children[0].data.staticClass+=" v-content__wrap",t(n.tag,n.data,n.children)}})},bd0c:function(t,n,a){}}]);
//# sourceMappingURL=chunk-39d534c2.js.map