"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{617:function(n,r,t){t.d(r,{O:function(){return i}});var e=t(689),u=t(87),a=t(184),c=function(n){var r=n.movie,t=(0,e.TH)();return(0,a.jsx)("li",{children:(0,a.jsx)(u.rU,{to:"/movies/".concat(r.id),state:{from:t},children:r.title||r.name})})},i=function(n){var r=n.movies,t=n.title;return(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:t}),(0,a.jsx)("ul",{children:r.map((function(n){return(0,a.jsx)(c,{movie:n},n.id)}))})]})}},304:function(n,r,t){t.r(r),t.d(r,{default:function(){return h}});var e,u=t(861),a=t(439),c=t(757),i=t.n(c),s=t(791),o=t(617),f=t(263),p=t(168),v=t(867).ZP.div(e||(e=(0,p.Z)(["\nbackground-color: green;"]))),l=t(569),d=t(184),h=function(){var n=(0,s.useState)(null),r=(0,a.Z)(n,2),t=r[0],e=r[1],c=(0,s.useState)(!1),p=(0,a.Z)(c,2),h=p[0],m=p[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,u.Z)(i().mark((function n(){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m(!0),n.next=4,(0,l.Hg)();case 4:r=n.sent,t=r.map((function(n){return{id:n.id,title:n.title,name:n.name}})),e(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:return n.prev=12,m(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,d.jsxs)(v,{children:[t&&!h&&(0,d.jsx)(o.O,{movies:t,title:"Trending movies today"}),h&&f.a]})}},569:function(n,r,t){t.d(r,{Hg:function(){return i},Jh:function(){return f},Pg:function(){return s},Pt:function(){return p},yO:function(){return o}});var e=t(861),u=t(757),a=t.n(u),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjY1YTNiN2Y5NWUyMjQyZmQwM2RlN2IzMzAyODhiNyIsInN1YiI6IjYzNmFhYTRlOWQ2ZTMzMDA3YTViNDYxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1PsLFsO9fG4eV0HqtD51yNs18xB47fHVSbOrLH4wGmQ";var i=function(){var n=(0,e.Z)(a().mark((function n(){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("trending/all/day");case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(a().mark((function n(r){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(r));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(a().mark((function n(r){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(r,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(a().mark((function n(r){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(r,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(r){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("search/movie?query=/".concat(r));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=304.b02ad138.chunk.js.map