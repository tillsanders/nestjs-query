(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return p}));var r=n(2),o=(n(0),n(190));const i={title:"Multiple Databases"},s={unversionedId:"persistence/typeorm/multiple-databases",id:"persistence/typeorm/multiple-databases",isDocsHomePage:!1,title:"Multiple Databases",description:"TypeOrm offers the possibility to connect your application to multiple databases or schemas. More details on this can be found on their official documentation.",source:"@site/docs/persistence/typeorm/multiple-databases.md",slug:"/persistence/typeorm/multiple-databases",permalink:"/nestjs-query/docs/persistence/typeorm/multiple-databases",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/persistence/typeorm/multiple-databases.md",version:"current",sidebar:"docs",previous:{title:"Custom Service",permalink:"/nestjs-query/docs/persistence/typeorm/custom-service"},next:{title:"Soft Delete",permalink:"/nestjs-query/docs/persistence/typeorm/soft-delete"}},a=[{value:"Defining multiple connections",id:"defining-multiple-connections",children:[]},{value:"Create a new Feature Module",id:"create-a-new-feature-module",children:[]},{value:"Custom TypeOrmQueryService",id:"custom-typeormqueryservice",children:[]}],c={rightToc:a};function p({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"TypeOrm")," offers the possibility to connect your application to multiple databases or schemas. More details on this can be found on their ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://typeorm.io/#/multiple-connections"}),"official documentation"),"."),Object(o.b)("p",null,"Further, the official ",Object(o.b)("inlineCode",{parentName:"p"},"@nestjs/typeorm")," package also provides functionality to support multiple databases within the application. For details, consider the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.nestjs.com/techniques/database#multiple-databases"}),"official documentation"),"."),Object(o.b)("p",null,"Therefore, ",Object(o.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-typeorm")," also offers this functionality. This section will walk you through a short example indicating how to connect your application to multiple databases. Further, this will assume, that you ",Object(o.b)("strong",{parentName:"p"},"already have a working application with a configured database"),". Please note that only key aspects are shown here:"),Object(o.b)("h2",{id:"defining-multiple-connections"},"Defining multiple connections"),Object(o.b)("p",null,"First lets set up a constants file to hold our connection names."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="constants.ts"',title:'"constants.ts"'}),"export const MUSIC_DB_CONNECTION = 'default';\nexport const SECRET_DB_CONNECTION = 'secret';\n")),Object(o.b)("p",null,"Then setup multiple database connections."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="app.module.ts"',title:'"app.module.ts"'}),"import { MUSIC_DB_CONNECTION, SECRET_DB_CONNECTION } from './constants';\n\nconst musicEntities = [\n  ArtistEntity,\n  AlbumEntity,\n  SongEntity,\n  GenreEntity,\n  // ...\n];\n\nconst secretEntities = [SecretEntity];\n\n@Module({\n  imports: [\n    ConfigModule.forRoot(environment),\n    TypeOrmModule.forRoot({\n      // name: MUSIC_DB_CONNECTION, // if you leave this out, this will be the \"default\" connection!\n      type: \"postgres\",\n      host: \"localhost\",\n      port: 5436,\n      username: 'user',\n      password: 'password',\n      database: 'music',\n      synchronize: true,\n      logging: true,\n      entities: musicEntities,\n    }),\n    // this also works with the ASYNC configuration!\n    TypeOrmModule.forRootAsync({\n      name: SECRET_DB_CONNECTION,   // you need to set the name here!\n      imports: [ConfigModule],\n      inject: [ConfigService],\n      useFactory: (configService: ConfigService): TypeOrmModuleOptions => ({\n        ...configService.get('dbConnections.secret'),\n        entities: secretEntities,\n      }),\n    }),\n    GraphQLModule.forRootAsync({\n      // ...\n    }),\n    // other modules\n  ],\n  controllers: [],\n  providers: [],\n})\nexport class AppModule {}\n")),Object(o.b)("p",null,"Of course, there can only be one ",Object(o.b)("inlineCode",{parentName:"p"},"default")," database connection. All other connections ",Object(o.b)("strong",{parentName:"p"},"must")," have a proper ",Object(o.b)("inlineCode",{parentName:"p"},"name")," set up. Further, this name ",Object(o.b)("strong",{parentName:"p"},"must")," be used when connecting against this specific entity."),Object(o.b)("h2",{id:"create-a-new-feature-module"},"Create a new Feature Module"),Object(o.b)("p",null,"Second, you need to create a new module for the feature that should store its data in another database using the previously defined connection."),Object(o.b)("p",null,"First, define your ",Object(o.b)("inlineCode",{parentName:"p"},"Entity")," class that is stored within the database"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="secret/secret.entity.ts"',title:'"secret/secret.entity.ts"'}),"import { Entity, Column } from 'typeorm';\n\n@Entity('secrets')\nexport class SecretEntity {\n  // some properties here, like\n  @Column()\n  name: string;\n}\n")),Object(o.b)("p",null,"and the corresponding ",Object(o.b)("inlineCode",{parentName:"p"},"ObjectType")," that is used for ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQL")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="secret/secret.dto.ts"',title:'"secret/secret.dto.ts"'}),"import { ObjectType, Field } from '@nestjs/graphql';\n\n@ObjectType('Secret')\nexport class SecretDTO {\n  @Field()\n  name: string;\n}\n")),Object(o.b)("p",null,"Now lets register the ",Object(o.b)("inlineCode",{parentName:"p"},"SecretEntity")," with ",Object(o.b)("inlineCode",{parentName:"p"},"NestjsQueryTypeOrmModule"),". "),Object(o.b)("p",null,"The only difference is you need to pass the name of the ",Object(o.b)("inlineCode",{parentName:"p"},"Connection")," when importing respective ",Object(o.b)("inlineCode",{parentName:"p"},"TypeOrmModule"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="secret/secret.module.ts"',title:'"secret/secret.module.ts"'}),"import { Module } from '@nestjs/common';\nimport { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'; \nimport { SECRET_DB_CONNECTION } from '../constants';\nimport { SecretEntity } from './secret.entity';\nimport { SecretDTO } from './secret.dto'\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      // import the NestjsQueryTypeOrmModule to register the entity with typeorm\n      // and provide a QueryService\n      imports: [\n        NestjsQueryTypeOrmModule.forFeature(\n          [SecretEntity], \n          SECRET_DB_CONNECTION, // specify the connection name\n        )\n      ],\n      // describe the resolvers you want to expose\n      resolvers: [{ DTOClass: SecretDTO, EntityClass: SecretEntity }],\n    }),\n    \n  ],  \n})\nexport class SecretModule {}\n")),Object(o.b)("p",null,"Now the ",Object(o.b)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule")," will create a ",Object(o.b)("inlineCode",{parentName:"p"},"Resolver")," for the ",Object(o.b)("inlineCode",{parentName:"p"},"SecretDTO")," and ",Object(o.b)("inlineCode",{parentName:"p"},"SecretEntity")," that will use the custom connection."),Object(o.b)("h2",{id:"custom-typeormqueryservice"},"Custom TypeOrmQueryService"),Object(o.b)("p",null,"If you want to create a custom ",Object(o.b)("inlineCode",{parentName:"p"},"SecretService")," responsible for the database access, a custom ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/nestjs-query/docs/persistence/services"}),"QueryService"),", you need to pass an additional argument to the ",Object(o.b)("inlineCode",{parentName:"p"},"@InjectRepository()")," decorator that indicates the ",Object(o.b)("inlineCode",{parentName:"p"},"Connection")," you are using. This string has to match the ",Object(o.b)("inlineCode",{parentName:"p"},"name")," property in the ",Object(o.b)("inlineCode",{parentName:"p"},"TypeOrmModule")," options!"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="secret/secret.service.ts"',title:'"secret/secret.service.ts"'}),"import { QueryService } from '@nestjs-query/core';\nimport { TypeOrmQueryService } from '@nestjs-query/query-typeorm';\nimport { InjectRepository } from '@nestjs/typeorm';\nimport { Repository } from 'typeorm';\nimport { SECRET_DB_CONNECTION } from '../constants';\nimport { SecretEntity } from './secret.entity';\n\n@QueryService(SecretEntity)\nexport class SecretService extends TypeOrmQueryService<SecretEntity> {\n  constructor(\n    @InjectRepository(SecretEntity, SECRET_DB_CONNECTION) repository: Repository<SecretEntity>,\n  ) {\n    super(repository);\n  }\n}\n")),Object(o.b)("p",null,"For the sake of brevity, the ",Object(o.b)("inlineCode",{parentName:"p"},"AssemblerService")," is not covered here, as it should not directly interact with the database itself. Therefore, no further adaptations are required. This also applies to the ",Object(o.b)("inlineCode",{parentName:"p"},"Resolver"),"!"),Object(o.b)("p",null,"For a full example see the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/doug-martin/nestjs-query/tree/master/examples/typeorm-multidb"}),"examples"),"."))}p.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,d=u["".concat(s,".").concat(b)]||u[b]||m[b]||i;return n?o.a.createElement(d,a(a({ref:t},p),{},{components:n})):o.a.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);