"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[394],{997:function(n,e,r){r.d(e,{Df:function(){return u},Pg:function(){return l},gH:function(){return g},tx:function(){return x},zv:function(){return h}});var t=r(861),a=r(757),c=r.n(a),i=r(243),s="https://api.themoviedb.org/3/",o="c507087864cb411db64415ec97acb434";function u(){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"trending/movie/day?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return b.apply(this,arguments)}function b(){return(b=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},394:function(n,e,r){r.r(e),r.d(e,{default:function(){return U}});var t,a,c,i,s,o,u,p=r(439),l=r(87),d=r(689),h=r(791),f=r(997),x=r(168),v=r(444),g=v.ZP.div(t||(t=(0,x.Z)(["\n  padding: 20px;\n"]))),b=(0,v.ZP)(l.rU)(a||(a=(0,x.Z)(["\n  padding: 5px;\n  border: 1px solid black;\n  border-radius: 8px;\n  :hover,\n  :focus {\n    background-color: blue;\n    transition-duration: 250ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),m=v.ZP.div(c||(c=(0,x.Z)(["\n  display: flex;\n  margin-top: 15px;\n  gap: 15px;\n"]))),j=v.ZP.div(i||(i=(0,x.Z)(["\n  display: block;\n"]))),Z=v.ZP.li(s||(s=(0,x.Z)(["\n  margin-bottom: 15px;\n"]))),k=v.ZP.ul(o||(o=(0,x.Z)(["\n  display: flex;\n"]))),w=v.ZP.li(u||(u=(0,x.Z)(["\n  padding: 10px;\n  border: 1px solid black;\n  border-radius: 8px;\n  margin: 15px;\n  :hover,\n  :focus {\n    background-color: blue;\n    transition-duration: 250ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),y=r(184),_=function(n){var e=n.data,r=e.poster_path,t=e.original_title,a=e.release_date,c=e.vote_average,i=e.overview,s=e.genres;return(0,y.jsxs)(m,{children:[(0,y.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w300/".concat(r):"https://wikireviews.com/blog/wp-content/uploads/2015/06/Movies-where-nothing-happens.jpg",alt:t}),(0,y.jsx)(j,{children:(0,y.jsxs)("ul",{children:[(0,y.jsx)(Z,{children:(0,y.jsxs)("h1",{children:[t," (",a.slice(0,4),")"]})}),(0,y.jsx)(Z,{children:(0,y.jsxs)("h3",{children:["User Score: ",Math.round(10*c)," %"]})}),(0,y.jsxs)(Z,{children:[(0,y.jsx)("h3",{children:"Overview"}),(0,y.jsx)("p",{children:i})]}),(0,y.jsxs)(Z,{children:[(0,y.jsx)("h3",{children:"Genres"}),null===s?(0,y.jsx)("p",{children:"No genres"}):(0,y.jsx)("p",{children:s.map((function(n){return n.name})).join(", ")})]})]})})]})},P=r(649),U=function(){var n,e,r=(0,h.useState)(null),t=(0,p.Z)(r,2),a=t[0],c=t[1],i=(0,d.TH)(),s=(0,h.useRef)(null!==(n=null===(e=i.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),o=(0,d.UO)().movieId;return(0,h.useEffect)((function(){(0,f.Pg)(o).then((function(n){c(n)})).catch((function(n){return console.log(n)}))}),[o]),(0,y.jsxs)(g,{children:[(0,y.jsx)(b,{to:s.current,children:"Go back"}),a?(0,y.jsx)(_,{data:a}):(0,y.jsx)(P.Z,{}),(0,y.jsxs)(k,{children:[(0,y.jsx)(w,{children:(0,y.jsx)(l.rU,{to:"cast",children:"Cast"})}),(0,y.jsx)(w,{children:(0,y.jsx)(l.rU,{to:"reviews",children:"Reviews"})})]}),(0,y.jsx)(h.Suspense,{fallback:(0,y.jsx)(P.Z,{}),children:(0,y.jsx)(d.j3,{})})]})}}}]);
//# sourceMappingURL=394.c3f1e32d.chunk.js.map