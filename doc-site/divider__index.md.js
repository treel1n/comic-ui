(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"+pnj":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("dEAq"),i={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["a"]=function(e){var t=e.identifier,a=e["export"],c=Object(l["useApiData"])(t),d=Object(n["useContext"])(l["context"]),o=d.locale,m=/^zh|cn$/i.test(o)?i["zh-CN"]:i["en-US"];return r.a.createElement(r.a.Fragment,null,c&&r.a.createElement("table",{style:{marginTop:24}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,m.name),r.a.createElement("th",null,m.description),r.a.createElement("th",null,m.type),r.a.createElement("th",null,m["default"]))),r.a.createElement("tbody",null,c[a].map((function(e){return r.a.createElement("tr",{key:e.identifier},r.a.createElement("td",null,e.identifier),r.a.createElement("td",null,e.description||"--"),r.a.createElement("td",null,r.a.createElement("code",null,e.type)),r.a.createElement("td",null,r.a.createElement("code",null,e["default"]||e.required&&m.required||"--")))})))))}},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},TOB0:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("dEAq"),i=a("+pnj"),c=a("Zxc8"),d=r.a.memo((e=>{var t=e.demos,a=t["divider-basic"].component,n=t["divider-vertical"].component,d=t["divider-color"].component,o=t["divider-text"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"divider-\u5206\u5272\u7ebf"},r.a.createElement(l["AnchorLink"],{to:"#divider-\u5206\u5272\u7ebf","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Divider \u5206\u5272\u7ebf"),r.a.createElement("h6",{id:"\u533a\u9694\u5185\u5bb9\u7684\u5206\u5272\u7ebf"},r.a.createElement(l["AnchorLink"],{to:"#\u533a\u9694\u5185\u5bb9\u7684\u5206\u5272\u7ebf","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u533a\u9694\u5185\u5bb9\u7684\u5206\u5272\u7ebf"),r.a.createElement("h2",{id:"\u57fa\u7840\u7528\u6cd5"},r.a.createElement(l["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),r.a.createElement(c["default"],t["divider-basic"].previewerProps,r.a.createElement(a,null)),r.a.createElement(c["default"],t["divider-vertical"].previewerProps,r.a.createElement(n,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u8272\u5f69"},r.a.createElement(l["AnchorLink"],{to:"#\u8272\u5f69","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u8272\u5f69")),r.a.createElement(c["default"],t["divider-color"].previewerProps,r.a.createElement(d,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u6807\u9898"},r.a.createElement(l["AnchorLink"],{to:"#\u6807\u9898","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u6807\u9898")),r.a.createElement(c["default"],t["divider-text"].previewerProps,r.a.createElement(o,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(i["a"],{src:"./index.tsx",identifier:"divider",export:"default"}))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),a=t.demos;return r.a.useEffect((()=>{var t;(null===e||void 0===e||null===(t=e.location)||void 0===t?void 0:t.hash)&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(d,{demos:a})}}}]);