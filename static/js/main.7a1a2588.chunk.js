(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(4),r=c.n(s),i=(c(9),c(2)),o="f987c8c1feb5128f0c98a8d59e8f2d3f",d="https://api.openweathermap.org/data/2.5/",h=c(0),j=function(){console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/Weather-App",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"f987c8c1feb5128f0c98a8d59e8f2d3f",REACT_APP_URL_BASE:"https://api.openweathermap.org/data/2.5/"}));var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)({}),r=Object(i.a)(s,2),j=r[0],l=r[1],b=Object(a.useState)(""),u=Object(i.a)(b,2),O=u[0],m=u[1],p=function(e){return e>35?m("hot "):e>20?m("nice "):e>10?m("chill "):e>0?m("cold "):e<0?m("snow "):void 0};return Object(h.jsx)("div",{className:"".concat(O," main-container"),children:Object(h.jsxs)("main",{children:[Object(h.jsx)("div",{className:"search-box",children:Object(h.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return n(e.target.value)},value:c,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(d,"weather?q=").concat(c,"&units=metric&APPID=").concat(o)).then((function(e){return e.json()})).then((function(e){l(e),p(e.main.temp),n("")})).catch((function(e){console.error(e),alert("Try a different place")}))}})}),j.main&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"location-box",children:[Object(h.jsxs)("div",{className:"location",children:[j.name,", ",j.sys.country]}),Object(h.jsx)("div",{className:"date",children:(new Date).toDateString()})]}),Object(h.jsxs)("div",{className:"weather-box",children:[Object(h.jsxs)("div",{className:"temp",children:[Math.round(j.main.temp),"\xb0c"]}),Object(h.jsx)("div",{className:"weather",children:j.weather[0].main})]})]})]})})};var l=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(j,{})})};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(l,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.7a1a2588.chunk.js.map