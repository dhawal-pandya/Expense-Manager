(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(8),l=n.n(c),s=(n(18),n(5)),i=n(2),r=n(6),j=(n(19),n(0)),u=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],l=n[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),u=r[0],o=r[1],b=Object(a.useState)(""),d=Object(i.a)(b,2),x=d[0],O=d[1];return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:u,date:new Date(x)};e.onSaveExpenseData(n),l(""),o(""),O("")},children:[Object(j.jsxs)("div",{className:"new-expense__controls",children:[Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)("input",{type:"text",value:c,onChange:function(e){l(e.target.value)}})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Amount"}),Object(j.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:u,onChange:function(e){o(e.target.value)}})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Date"}),Object(j.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:x,onChange:function(e){O(e.target.value)}})]})]}),Object(j.jsxs)("div",{className:"new-expense__actions",children:[Object(j.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(j.jsx)("button",{type:"submit",children:"Add Expense"})]})]})},o=(n(21),function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],l=n[1];return Object(j.jsxs)("div",{className:"new-expense",children:[!c&&Object(j.jsx)("button",{onClick:function(){l(!0)},children:"Add New Expense"}),c&&Object(j.jsx)(u,{onSaveExpenseData:function(t){var n=Object(r.a)(Object(r.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),l(!1)},onCancel:function(){l(!1)}})]})}),b=(n(22),function(e){var t="card "+e.className;return Object(j.jsx)("div",{className:t,children:e.children})}),d=(n(23),function(e){return Object(j.jsx)("div",{className:"expenses-filter",children:Object(j.jsxs)("div",{className:"expenses-filter__control",children:[Object(j.jsx)("label",{children:"Filter by year"}),Object(j.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(j.jsx)("option",{value:"2022",children:"2022"}),Object(j.jsx)("option",{value:"2021",children:"2021"}),Object(j.jsx)("option",{value:"2020",children:"2020"}),Object(j.jsx)("option",{value:"2019",children:"2019"})]})]})})}),x=(n(24),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(j.jsxs)("div",{className:"expense-date",children:[Object(j.jsx)("div",{className:"expense-date__day",children:n}),Object(j.jsx)("div",{className:"expense-date__month",children:t}),Object(j.jsx)("div",{className:"expense-date__year",children:a})]})}),O=(n(25),function(e){return Object(j.jsx)("li",{children:Object(j.jsxs)(b,{className:"expense-item",children:[Object(j.jsx)(x,{date:e.date}),Object(j.jsxs)("div",{className:"expense-item__description",children:[Object(j.jsx)("h2",{children:e.title}),Object(j.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})}),v=(n(26),function(e){return 0===e.items.length?Object(j.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses."}):Object(j.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(j.jsx)(O,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),h=n(9),m=(n(27),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(j.jsxs)("div",{className:"chart-bar",children:[Object(j.jsx)("div",{className:"chart-bar__inner",children:Object(j.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(j.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),p=(n(28),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(s.a)(t));return Object(j.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(j.jsx)(m,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),f=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(h.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(j.jsx)(p,{dataPoints:n})},_=(n(29),function(e){var t=Object(a.useState)("2020"),n=Object(i.a)(t,2),c=n[0],l=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(j.jsx)("div",{children:Object(j.jsxs)(b,{className:"expenses",children:[Object(j.jsx)(d,{selected:c,onChangeFilter:function(e){l(e)}}),Object(j.jsx)(f,{expenses:s}),Object(j.jsx)(v,{items:s})]})})}),N=[],g=function(){var e=Object(a.useState)(N),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(o,{onAddExpense:function(e){c((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(j.jsx)(_,{items:n})]})};l.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(g,{}))}},[[30,1,2]]]);
//# sourceMappingURL=main.d257c1cb.chunk.js.map