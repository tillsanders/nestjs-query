(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{129:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(1),a=(r(0),r(215));const i={title:"Services"},c={id:"concepts/services",title:"Services",description:"The `core` package defines a `QueryService` which is used to query and modify records.",source:"@site/docs/concepts/services.md",permalink:"/nestjs-query/docs/concepts/services",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/concepts/services.md",sidebar:"docs",previous:{title:"Queries",permalink:"/nestjs-query/docs/concepts/queries"},next:{title:"Assemblers",permalink:"/nestjs-query/docs/concepts/assemblers"}},l=[],o={rightToc:l};function b({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"core")," package defines a ",Object(a.b)("inlineCode",{parentName:"p"},"QueryService")," which is used to query and modify records."),Object(a.b)("p",null,"The following methods are defined on the ",Object(a.b)("inlineCode",{parentName:"p"},"QueryService")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"query(query: Query<DTO>): Promise<DTO[]>"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"find multiple records."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"findById(id: string | number): Promise<DTO | undefined>"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"find a record by its id."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"getById(id: string | number): Promise<DTO>"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"get a record by its id or return a rejected promise with a NotFound error."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"createMany<C extends DeepPartial<DTO>>(items: C[]): Promise<DTO[]>"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"create multiple records."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"createOne<C extends DeepPartial<DTO>>(item: C): Promise<DTO>"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"create one record."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"updateMany<U extends DeepPartial<DTO>>(update: U, filter: Filter<DTO>): Promise<UpdateManyResponse>"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"update many records."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"updateOne<U extends DeepPartial<DTO>>(id: string | number, update: U): Promise<DTO>"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"update a single record."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"deleteMany(filter: Filter<DTO>): Promise<DeleteManyResponse>"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"delete multiple records."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"deleteOne(id: number | string): Promise<DTO>"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"delete a single record.")))),Object(a.b)("p",null,"All ",Object(a.b)("inlineCode",{parentName:"p"},"QueryServices")," should be decorated with the ",Object(a.b)("inlineCode",{parentName:"p"},"@QueryService")," decorator."),Object(a.b)("p",null,"You can create your own service for use with the ",Object(a.b)("inlineCode",{parentName:"p"},"CRUDResolver")," as long as it implements the ",Object(a.b)("inlineCode",{parentName:"p"},"QueryService")," interface."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-typeorm")," and ",Object(a.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-sequelize")," packages define an implementation to use."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"../typeorm/usage"}),"Read about the TypeOrmQueryService")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"../sequelize/usage"}),"Read about the SequelizeQueryService"))))}b.isMDXComponent=!0},215:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,d=p["".concat(c,".").concat(m)]||p[m]||s[m]||i;return r?a.a.createElement(d,l({ref:t},b,{components:r})):a.a.createElement(d,l({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var b=2;b<i;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);