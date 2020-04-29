(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(1),o=(n(0),n(215));const i={title:"Soft Delete"},a={id:"typeorm/advanced/soft-delete",title:"Soft Delete",description:"`TypeOrm` supports [soft deletes](https://typeorm.io/#/delete-query-builder/soft-delete). This feature does not delete records but instead updates the column decorated with `@DeletedDateColumn`. ",source:"@site/docs/typeorm/advanced/soft-delete.md",permalink:"/nestjs-query/docs/typeorm/advanced/soft-delete",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/typeorm/advanced/soft-delete.md",sidebar:"docs",previous:{title:"Multiple Databases",permalink:"/nestjs-query/docs/typeorm/advanced/multiple-databases"},next:{title:"Getting Started",permalink:"/nestjs-query/docs/sequelize/getting-started"}},l=[{value:"Setting up your entity.",id:"setting-up-your-entity",children:[]},{value:"Soft Delete Service",id:"soft-delete-service",children:[{value:"Adding restore mutations.",id:"adding-restore-mutations",children:[]}]},{value:"Complete Example",id:"complete-example",children:[]}],s={rightToc:l};function d({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"TypeOrm")," supports ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://typeorm.io/#/delete-query-builder/soft-delete"}),"soft deletes"),". This feature does not delete records but instead updates the column decorated with ",Object(o.b)("inlineCode",{parentName:"p"},"@DeletedDateColumn"),". "),Object(o.b)("p",null,"Before continuing it is recommended that you read the following."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://typeorm.io/#/decorator-reference/deletedatecolumn"}),"https://typeorm.io/#/decorator-reference/deletedatecolumn")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://typeorm.io/#/delete-query-builder/soft-delete"}),"https://typeorm.io/#/delete-query-builder/soft-delete"))),Object(o.b)("h2",{id:"setting-up-your-entity"},"Setting up your entity."),Object(o.b)("p",null,"Before enabling soft deletes you must add the DeletedDateColumn to your entity."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item.entity.ts',title:'"todo-item.entity.ts'}),"import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';\n\n@Entity({ name: 'todo_item' })\nexport class TodoItemEntity {\n  @PrimaryGeneratedColumn()\n  id!: number;\n\n  @Column()\n  title!: string;\n\n  @Column({ nullable: true })\n  description?: string;\n\n  @Column()\n  completed!: boolean;\n\n  @CreateDateColumn()\n  created!: Date;\n\n  @UpdateDateColumn()\n  updated!: Date;\n\n  // Add this column to your entity!\n  @DeleteDateColumn()\n  deletedAt?: Date;\n}\n")),Object(o.b)("p",null,"The important column is the ",Object(o.b)("inlineCode",{parentName:"p"},"deletedAt")," column in the above example. Without this column soft deletes will not work. If you add this column all reads from the ",Object(o.b)("inlineCode",{parentName:"p"},"typeorm")," repository will add a where clause checking that the column ",Object(o.b)("inlineCode",{parentName:"p"},"IS NULL"),"."),Object(o.b)("h2",{id:"soft-delete-service"},"Soft Delete Service"),Object(o.b)("p",null,"Once you have added the column to your entity you need to declare your service setting the ",Object(o.b)("inlineCode",{parentName:"p"},"useSoftDelete")," flag."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item.service.ts"',title:'"todo-item.service.ts"'}),"import { QueryService } from '@nestjs-query/core';\nimport { TypeOrmQueryService } from '@nestjs-query/query-typeorm';\nimport { InjectRepository } from '@nestjs/typeorm';\nimport { Repository } from 'typeorm';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@QueryService(TodoItemEntity)\nexport class TodoItemService extends TypeOrmQueryService<TodoItemEntity> {\n  constructor(@InjectRepository(TodoItemEntity) repo: Repository<TodoItemEntity>) {\n    // pass the use soft delete option to the service.\n    super(repo, { useSoftDelete: true });\n  }\n}\n")),Object(o.b)("p",null,"Notice that when calling ",Object(o.b)("inlineCode",{parentName:"p"},"super")," the ",Object(o.b)("inlineCode",{parentName:"p"},"useSoftDelete")," option is set to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),". This will ensure that all ",Object(o.b)("inlineCode",{parentName:"p"},"deletes")," use the ",Object(o.b)("inlineCode",{parentName:"p"},"softRemove")," when deleting one or ",Object(o.b)("inlineCode",{parentName:"p"},"softDelete")," when deleting many."),Object(o.b)("h3",{id:"adding-restore-mutations"},"Adding restore mutations."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"nestjs-query")," does not automatically expose ",Object(o.b)("inlineCode",{parentName:"p"},"restore")," mutations. In this example we add the restore mutations."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item.resolver.ts',title:'"todo-item.resolver.ts'}),"import { UpdateManyResponse, Filter } from '@nestjs-query/core';\nimport { CRUDResolver, FilterType, UpdateManyResponseType } from '@nestjs-query/query-graphql';\nimport { Resolver, Args, Mutation, ID } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n\n  // restore one mutation will update the `deletedAt` column to null.\n  @Mutation(() => TodoItemDTO)\n  restoreOneTodoItem(@Args('input', { type: () => ID }) id: number): Promise<TodoItemDTO> {\n    return this.service.restoreOne(id);\n  }\n\n  // restore many mutation will update the `deletedAt` column to null for all todo items that\n  // match the filter.\n  @Mutation(() => UpdateManyResponseType())\n  restoreManyTodoItems(\n    @Args('input', { type: () => FilterType(TodoItemDTO) }) filter: Filter<TodoItemDTO>,\n  ): Promise<UpdateManyResponse> {\n    return this.service.restoreMany(filter);\n  }\n}\n")),Object(o.b)("h2",{id:"complete-example"},"Complete Example"),Object(o.b)("p",null,"To see a complete example ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/doug-martin/nestjs-query/tree/master/examples/nest-graphql-typeorm-soft-delete"}),"see here.")))}d.isMDXComponent=!0},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),p=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},c=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,b=c["".concat(a,".").concat(u)]||c[u]||m[u]||i;return n?o.a.createElement(b,l({ref:t},d,{components:n})):o.a.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);