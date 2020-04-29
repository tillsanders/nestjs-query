(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{151:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(1),a=(r(0),r(215));const o={title:"Getting Started"},i={id:"graphql/getting-started",title:"Getting Started",description:"The `@nestjs-query/query-graphql` package provided base `Resolvers` and graphql type classes to make creating code-first graphql CRUD applications easy.",source:"@site/docs/graphql/getting-started.md",permalink:"/nestjs-query/docs/graphql/getting-started",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/graphql/getting-started.md",sidebar:"docs",previous:{title:"Usage",permalink:"/nestjs-query/docs/sequelize/usage"},next:{title:"DTOs",permalink:"/nestjs-query/docs/graphql/dtos"}},c=[{value:"Installation",id:"installation",children:[{value:"Docs",id:"docs",children:[]}]}],l={rightToc:c};function s({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-graphql")," package provided base ",Object(a.b)("inlineCode",{parentName:"p"},"Resolvers")," and graphql type classes to make creating code-first graphql CRUD applications easy."),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../introduction/install#nestjs-queryquery-graphql"}),"Installation Docs")),Object(a.b)("h3",{id:"docs"},"Docs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./dtos"}),"DTOs")," - Documentation about the use of DTOs and associated annotations."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./resolvers"}),"Resolvers")," - Documentation about crud resolvers and their usage."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./queries"}),"Queries")," - Documentation about the provided graphql query endpoints."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./mutations"}),"Mutations")," -  Documentation about the provided graphql mutation endpoints."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./relations"}),"Relations")," -  Documentation about specifying relations in your resolvers."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./types"}),"Types")," - Documentation for the provided graphql types."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./federation"}),"Federation")," - Documentation for using ",Object(a.b)("inlineCode",{parentName:"li"},"nestjs-query")," with federation.")))}s.isMDXComponent=!0},215:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,c({ref:t},s,{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);