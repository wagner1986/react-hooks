(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),o=n(6),r=n.n(o),s=(n(12),n(7)),u=n(5),i=n(0);var l=function(){var t=Object(c.useState)(["Pagar conta","Estudar react"]),e=Object(u.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(""),r=Object(u.a)(o,2),l=r[0],j=r[1];Object(c.useEffect)((function(){console.log("carregou tela");var t=localStorage.getItem("tarefas");t&&a(JSON.parse(t))}),[]),Object(c.useEffect)((function(){console.log("mudou tarefas"),localStorage.setItem("tarefas",JSON.stringify(n))}),[n]);var b=Object(c.useCallback)((function(){console.log("handleAdd"),a([].concat(Object(s.a)(n),[l])),j("")}),[n,l]),f=Object(c.useMemo)((function(){return n.length}),[n]);return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("ul",{children:n.map((function(t){return Object(i.jsx)("li",{children:t},t)}))}),Object(i.jsxs)("strong",{children:["Voc\xea tem ",f," tarefas"]}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"text",value:l,onChange:function(t){return j(t.target.value)}}),Object(i.jsx)("button",{type:"button",onClick:b,children:" adicionar"})]})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),o(t),r(t)}))};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(l,{})}),document.getElementById("root")),j()}},[[14,1,2]]]);
//# sourceMappingURL=main.3f136d3c.chunk.js.map