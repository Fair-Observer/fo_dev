(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("@babel/runtime/helpers/defineProperty");var r=e.n(t);const n=require("@babel/runtime/helpers/classCallCheck");var c=e.n(n);const o=require("@babel/runtime/helpers/createClass");var i=e.n(o);const a=require("@babel/runtime/helpers/inherits");var l=e.n(a);const s=require("@babel/runtime/helpers/possibleConstructorReturn");var p=e.n(s);const u=require("@babel/runtime/helpers/getPrototypeOf");var d=e.n(u);const f=require("react");var m=e.n(f);require("react-dom");var h=function(e){l()(o,e);var t,r,n=(t=o,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=d()(t);if(r){var c=d()(this).constructor;e=Reflect.construct(n,arguments,c)}else e=n.apply(this,arguments);return p()(this,e)});function o(e){return c()(this,o),n.call(this,e)}return i()(o,[{key:"render",value:function(){return m().createElement("div",null,m().createElement("h1",null,"Welcome to Fair Observer!"))}}]),o}(f.Component);const v=require("react-dom/server");var b=e.n(v);const y=require("react-router-dom"),g=require("serialize-javascript");var O=e.n(g);const w=require("express");var q=e.n(w);const j=require("cors");var P=e.n(j);const x=require("styled-components"),S=require("firebase-functions"),E=require("firebase-admin");function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}E.initializeApp({credential:E.credential.applicationDefault(),databaseURL:"https://fo-dev.firebaseio.com"});var R=q()();function D(e,t,n,c,o){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},c);i.url=e.url,i.seodata=o;var a,l=new x.ServerStyleSheet,s={initialData:i};a=b().renderToNodeStream(l.collectStyles(m().createElement(y.StaticRouter,{location:e.url,context:s},m().createElement(h,{req:e})))),l.getStyleTags(),t.set("Cache-Control","public, max-age=600, s-maxage=1200");var p,u,d='<!doctype html>\n    <html lang="en">\n      <head>\n        <meta charset="utf-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        <link rel="icon" type="image/png" href="/favicon.png?'.concat((new Date).getTime(),'">\n        <meta name="author" content="Fair Observer">  \n        ').concat((p=o,u="https://fairobserver.com","\n    \x3c!-- Primary Meta Tags --\x3e\n    <title>".concat(p.title,'</title>\n    <meta name="title" content="').concat(p.title,'">\n    <meta name="description" content="').concat(p.description,'">\n\n    \x3c!-- Open Graph / Facebook --\x3e\n    <meta property="og:type" content="website">\n    <meta property="og:url" content="').concat(u).concat(p.path,'">\n    <meta property="og:title" content="').concat(p.title,'">\n    <meta property="og:description" content="').concat(p.description,'">\n\n    \x3c!-- Twitter --\x3e\n    <meta property="twitter:url" content=content="').concat(u).concat(p.path,'">\n    <meta property="twitter:title" content="').concat(p.title,'">\n    <meta property="twitter:description" content="').concat(p.description,'">\n  ')),"\n        <script>window.__FOinitialData__ = ").concat(O()(i),';window.__FOinitialPage__ = true<\/script>\n        <style>body {	background-color: lightblue;}</style>\n      </head>\n      <body>\n        <div id="root">');t.write(d),a.pipe(t,{end:!1});var f='</div>\n        <script src="/index_bundle.js?'.concat((new Date).getTime(),'">\n        <\/script>\n      </body>\n    </html>');a.on("end",(function(){t.write(f),t.end()}))}R.use(P()({origin:!0})),R.get("/article/:articleslug",(function(e,t,r){E.firestore().collection("articles").doc(e.params.articleslug).get().then((function(r){var n,c;if(r.exists){var o=r.data();(n=o).type="writing",c={title:"".concat(o.title," | Fair Observer"),description:o.short,path:"/article/".concat(e.params.articleslug)}}else n={none:!0,type:"article"};D(e,t,0,n,c)})).catch((function(e){t.send("<!doctype html>\n      <head>\n        <title>Error on Server</title>\n      </head>\n      <h1>Error on Server</h1>\n      <p>".concat(e,"</p>\n    </html>"))}))})),R.get("*",(function(e,t,r){D(e,t,0,{},{title:"Fair Observer",description:"Citizen Jounalism",path:"/"})})),exports.httpServer=S.https.onRequest(R)})();