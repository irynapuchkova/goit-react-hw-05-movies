"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[163],{4735:function(e,t,r){r.d(t,{zR:function(){return i},Fn:function(){return s},Y5:function(){return f},uV:function(){return p},r7:function(){return l}});var n=r(5861),a=r(7757),u=r.n(a),c=r(4569),o=r.n(c);o().defaults.baseURL="https://api.themoviedb.org/3",o().defaults.params={api_key:"9cd9c5b7e8e826e5ef2c1aca08004ce5"};var i=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/trending/movie/day",{params:{page:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(u().mark((function e(t,r){var n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/search/movie",{params:{page:t,query:r}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(t,r){var n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t,"/reviews"),{params:{page:r}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},6368:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(3504),a=r(184);function u(e){var t=e.movies,r=e.location;return(0,a.jsx)("ul",{children:t.map((function(e){var t=e.original_title,u=e.id;return(0,a.jsx)("li",{children:(0,a.jsx)(n.rU,{to:"/movies/".concat(u),state:{from:r},children:t})},u)}))})}},1149:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t),r.d(t,{default:function(){return d}});var c=r(5861),o=r(8152),i=r(7757),s=r.n(i),f=r(2791),p=r(6871),l=r(4735),v={},m=r(184);function b(e){var t=e.onSubmit;return(0,m.jsxs)("form",{className:v.form,onSubmit:function(e){e.preventDefault(),t(e.target.elements.inputValue.value)},children:[(0,m.jsx)("input",{className:v.input,name:"inputValue",type:"text",placeholder:"Search movie",autoFocus:!0,autoComplete:"off"}),(0,m.jsx)("button",{className:v.button,type:"submit",children:"Find"})]})}var h=r(6368);function d(){var e=(0,p.s0)(),t=(0,p.TH)(),r=(0,f.useState)([]),n=(0,o.Z)(r,2),a=n[0],i=n[1],v=new URLSearchParams(t.search).get("query");(0,f.useEffect)((function(){v&&(0,c.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Fn)(1,v);case 3:t=e.sent,(r=t.results)&&i(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[v]);return(0,m.jsxs)("div",{children:[(0,m.jsx)(b,{onSubmit:function(r){e(u(u({},t),{},{search:"?query=".concat(r)}))}}),a&&(0,m.jsx)(h.Z,{movies:a,location:t})]})}}}]);
//# sourceMappingURL=movies-view.6ef57ef3.chunk.js.map