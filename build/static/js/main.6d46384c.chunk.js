(this["webpackJsonpmagic-memory"]=this["webpackJsonpmagic-memory"]||[]).push([[0],[,,,,,,,,,,function(c,e,t){},function(c,e,t){},function(c,e,t){},,function(c,e,t){"use strict";t.r(e);var n=t(1),r=t.n(n),a=t(5),s=t.n(a),i=(t(10),t(3)),u=t(2),l=(t(11),t(12),t(0)),o=function(c){var e=c.card,t=c.userSelection,n=c.flipped,r=c.disabled;return Object(l.jsx)("div",{className:"card",children:Object(l.jsxs)("div",{className:n?"flipped":"",children:[Object(l.jsx)("img",{className:"front",src:e.src,alt:"card front"}),Object(l.jsx)("img",{className:"back",src:"./img/cover.png",alt:"card back",onClick:function(){r||t(e)}})]})})},d=[{matched:!1,src:"./img/sword-1.png"},{matched:!1,src:"./img/helmet-1.png"},{matched:!1,src:"./img/potion-1.png"},{matched:!1,src:"./img/ring-1.png"},{matched:!1,src:"./img/scroll-1.png"},{matched:!1,src:"./img/shield-1.png"}];var j=function(){var c=Object(n.useState)([]),e=Object(u.a)(c,2),t=e[0],r=e[1],a=Object(n.useState)(0),s=Object(u.a)(a,2),j=s[0],m=s[1],b=Object(n.useState)(null),h=Object(u.a)(b,2),O=h[0],f=h[1],p=Object(n.useState)(null),g=Object(u.a)(p,2),x=g[0],v=g[1],N=Object(n.useState)(!1),S=Object(u.a)(N,2),k=S[0],y=S[1],M=function(c){O?v(c):f(c)};Object(n.useEffect)((function(){O&&x&&(y(!0),O.src===x.src?(r((function(c){return c.map((function(c){return c.src===O.src?Object(i.a)(Object(i.a)({},c),{},{matched:!0}):c}))})),w()):setTimeout((function(){w()}),2e3))}),[O,x]);var w=function(){f(null),v(null),m((function(c){return c+1})),y(!1)},C=function(){var c=[].concat(d,d).sort((function(){return Math.random()-.5})).map((function(c){return Object(i.a)(Object(i.a)({},c),{},{id:Math.random()})}));f(null),v(null),r(c),m(0)};return Object(n.useEffect)((function(){C()}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Magic Match"}),Object(l.jsxs)("p",{className:"turns",children:["Turns - ",j]}),Object(l.jsx)("button",{onClick:C,children:"New Game"}),Object(l.jsx)("div",{className:"cards",children:t.map((function(c){return Object(l.jsx)(o,{card:c,userSelection:M,flipped:c.matched||c===O||c===x,disabled:k},c.id)}))}),Object(l.jsx)("p",{className:"copyright",children:"Copyright \xa9 2022 Balaji. All rights reserved"})]})};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.6d46384c.chunk.js.map