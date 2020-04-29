(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(1),a=(n(0),n(215));const o={title:"FAQ"},i={id:"faq",title:"FAQ",description:"## The resolver is complaining about my QueryService",source:"@site/docs/faq.md",permalink:"/nestjs-query/docs/faq",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/faq.md"},c=[{value:"The resolver is complaining about my QueryService",id:"the-resolver-is-complaining-about-my-queryservice",children:[]},{value:"Do I need a DTO and Entity?",id:"do-i-need-a-dto-and-entity",children:[]}],l={rightToc:c};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"the-resolver-is-complaining-about-my-queryservice"},"The resolver is complaining about my QueryService"),Object(a.b)("p",null,"If you see an error that contains the following "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"The types of 'service.query' are incompatible between these types.\n")),Object(a.b)("p",null,"It means that your entity and DTO are not compatible. "),Object(a.b)("p",null,"Typically this indicates that your DTO contains additional fields that your entity does not OR that you have different types for fields. "),Object(a.b)("p",null,"To fix:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Ensure that your entity has the same fields and field types as your DTO."),Object(a.b)("li",{parentName:"ul"},"If you have fields that should be computed or derived from your entity try using an ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"./concepts/assemblers"}),"Assembler")," ")),Object(a.b)("h2",{id:"do-i-need-a-dto-and-entity"},"Do I need a DTO and Entity?"),Object(a.b)("p",null,"No, you do not! "),Object(a.b)("p",null,"For a small project the overhead may not be worth managing both the Entity and DTO especially if they are copies of eachother."),Object(a.b)("p",null,"In a larger, longer lived project the initial overhead of creating a DTO in the beginning can pay off if you need to make changes to your persistence layer while keeping changes in your API passive. "),Object(a.b)("p",null,"DTOs also provide a clean separation between the fields and relationships that the persistence layer should not know or care about."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"When combining your entity and DTO you should ",Object(a.b)("strong",{parentName:"p"},"NOT")," decorate your relationships with ",Object(a.b)("inlineCode",{parentName:"p"},"@Field")," or ",Object(a.b)("inlineCode",{parentName:"p"},"@FilterableField"),". Instead, add them to your CRUDResolver. "),Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"./typeorm/usage#relations"}),"Typeorm Relations")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"./sequelize/usage#relations"}),"Sequelize Relations"))))))}s.isMDXComponent=!0},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,c({ref:t},s,{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);