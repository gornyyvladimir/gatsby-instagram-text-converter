(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"9d8Q":function(e,t,a){},HCc9:function(e,t,a){var n=a("q1tI");function l(e){return n.createElement("svg",e,[n.createElement("g",{key:0},[n.createElement("path",{d:"M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26\r\n\t\tS12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z",key:0}),n.createElement("path",{d:"M38.252,15.336l-15.369,17.29l-9.259-7.407c-0.43-0.345-1.061-0.274-1.405,0.156c-0.345,0.432-0.275,1.061,0.156,1.406\r\n\t\tl10,8C22.559,34.928,22.78,35,23,35c0.276,0,0.551-0.114,0.748-0.336l16-18c0.367-0.412,0.33-1.045-0.083-1.411\r\n\t\tC39.251,14.885,38.62,14.922,38.252,15.336z",key:1})]),n.createElement("g",{key:1}),n.createElement("g",{key:2}),n.createElement("g",{key:3}),n.createElement("g",{key:4}),n.createElement("g",{key:5}),n.createElement("g",{key:6}),n.createElement("g",{key:7}),n.createElement("g",{key:8}),n.createElement("g",{key:9}),n.createElement("g",{key:10}),n.createElement("g",{key:11}),n.createElement("g",{key:12}),n.createElement("g",{key:13}),n.createElement("g",{key:14}),n.createElement("g",{key:15})])}l.defaultProps={version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 52 52",style:{enableBackground:"new 0 0 52 52"},xmlSpace:"preserve"},e.exports=l,l.default=l},IBf8:function(e,t,a){},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),c=(a("pIFo"),a("HCc9")),r=a.n(c),m=(a("IBf8"),function(e){var t=e.show,a=e.children;return l.a.createElement("div",{className:"notification "+(t?"":"hide")},l.a.createElement("div",{className:"icon"},l.a.createElement(r.a,{width:"32px",height:"32px",fill:"#fff"})),l.a.createElement("p",{className:"text no-margin"},a))});a("9d8Q"),a("gqNJ");t.default=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(""),a=t[0],c=t[1],r=Object(n.useState)(""),s=r[0],o=r[1],u=Object(n.useState)(!0),i=u[0],E=u[1],g=Object(n.useState)(!1),f=g[0],p=g[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{show:f},"Текст скопирован! Вставьте его в Instagram."),l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"title"},"Как сделать абзац в инстаграм?"),l.a.createElement("p",{className:"text"},"Этот инструмент поможет вам добавить специальный пробел в инстаграм, чтобы ваши описания в инстаграм могли начинаться с новой строки."),l.a.createElement("div",{className:"wrapper"},l.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault();var t=function(e){return e.replace(/⠀/g,"").replace(/\s*\n{2,}/g,"\n⠀\n").replace(/\s+\n/g,"\n")}(a);o(t),E(!1)}},l.a.createElement("label",{className:"label",htmlFor:"text"},"Текст, который вы хотите преобразовать",l.a.createElement("textarea",{id:"text",className:"textarea",onChange:function(e){c(e.target.value)},value:a,placeholder:"Пожалуйста, введите текст",rows:"5",cols:"30",required:!0})),l.a.createElement("button",{className:"button",type:"submit"},"Конвертировать")),l.a.createElement("form",{className:"form",onSubmit:function(t){var a;t.preventDefault(),e.current.select(),document.execCommand("copy"),void 0===a&&(a=3e3),p(!0),setTimeout((function(){p(!1)}),a)}},l.a.createElement("label",{className:"label",htmlFor:"converted-text"},"Преобразованный текст",l.a.createElement("textarea",{id:"converted-text",className:"textarea",ref:e,onFocus:function(e){e.target.select()},value:s,placeholder:"Здесь будет преобразованный текст",rows:"5",cols:"30",readOnly:!0})),l.a.createElement("button",{className:"button",type:"submit",disabled:i},"Копировать"))),l.a.createElement("p",{className:"text text--margin-bottom-2"},"Количество символов: ",l.a.createElement("b",null,a.length),l.a.createElement("br",null),"Максимальное количество символов в посте Instagram: ",l.a.createElement("b",null,"2200"))))}},gqNJ:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-ee197df4ac4928a5e164.js.map