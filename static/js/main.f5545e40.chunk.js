(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(4),r=c.n(s),i=(c(9),c(2)),o="f987c8c1feb5128f0c98a8d59e8f2d3f",j="https://api.openweathermap.org/data/2.5/",h=c(0),l=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)({}),r=Object(i.a)(s,2),l=r[0],d=r[1],b=Object(n.useState)(""),u=Object(i.a)(b,2),m=u[0],O=u[1];Object(n.useEffect)((function(){l.main&&f(l.main.temp)}),[c]);var f=function(e){return O(e>30?"hot ":e>20?"nice ":e>10?"chill ":e>0?"cold ":"snow ")};return Object(h.jsx)("div",{className:"".concat(m," main-container"),children:Object(h.jsxs)("main",{children:[Object(h.jsx)("div",{className:"search-box",children:Object(h.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return a(e.target.value)},value:c,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(j,"weather?q=").concat(c,"&units=metric&APPID=").concat(o)).then((function(e){return e.json()})).then((function(e){d(e),f(e.main.temp),a("")})).catch((function(e){alert("Try a different place"),console.error(e)}))}})}),l.main&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"location-box",children:[Object(h.jsxs)("div",{className:"location",children:[l.name,", ",l.sys.country]}),Object(h.jsx)("div",{className:"date",children:(new Date).toDateString()})]}),Object(h.jsxs)("div",{className:"weather-box",children:[Object(h.jsxs)("div",{className:"temp",children:[Math.round(l.main.temp),"\xb0c"]}),Object(h.jsx)("div",{className:"weather",children:l.weather[0].main})]})]})]})})};var d=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(l,{})})};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(d,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.f5545e40.chunk.js.map