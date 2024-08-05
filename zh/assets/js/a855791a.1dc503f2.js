"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[528],{56092:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>h,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=r(74848),i=r(28453),a=r(11470),l=r(19365);const o={sidebar_position:2,title:"Query"},s=void 0,c={id:"graphql/query",title:"Query",description:"\u529f\u80fd\u63cf\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/graphql/query.mdx",sourceDirName:"graphql",slug:"/graphql/query",permalink:"/jimmer-doc/zh/docs/graphql/query",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/graphql/query.mdx",tags:[],version:"current",lastUpdatedAt:1722888025e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Query"},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u672c\u6982\u5ff5",permalink:"/jimmer-doc/zh/docs/graphql/concept"},next:{title:"Mutation",permalink:"/jimmer-doc/zh/docs/graphql/mutation"}},h={},d=[{value:"\u529f\u80fd\u63cf\u8ff0",id:"\u529f\u80fd\u63cf\u8ff0",level:2},{value:"\u5b9e\u73b0GraphQL\u670d\u52a1",id:"\u5b9e\u73b0graphql\u670d\u52a1",level:2},{value:"1. \u6700\u7b80\u5b9e\u73b0",id:"1-\u6700\u7b80\u5b9e\u73b0",level:3},{value:"2. \u4f18\u5316\u6027\u80fd",id:"2-\u4f18\u5316\u6027\u80fd",level:3},{value:"\u8fd0\u884c\u6548\u679c",id:"\u8fd0\u884c\u6548\u679c",level:2}];function u(n){const e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u529f\u80fd\u63cf\u8ff0",children:"\u529f\u80fd\u63cf\u8ff0"}),"\n",(0,t.jsx)(e.p,{children:"\u5047\u5982\u6ca1\u6709Jimmer\u7684\u652f\u6301\uff0c\u5b9e\u73b0GraphQL\u67e5\u8be2\u9700\u8981\u505a\u4e24\u7c7b\u5de5\u4f5c"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u67e5\u8be2\u805a\u5408\u6839\u5bf9\u8c61"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u662f\u5f00\u53d1\u4efb\u4f55\u6570\u636e\u670d\u52a1\u90fd\u9700\u8981\u505a\u7684\u5de5\u4f5c\uff0c\u65e0\u8bba\u662fGraphQL\u670d\u52a1\uff0cREST\u670d\u52a1\uff0c\u751a\u81f3\u5176\u4ed6\u81ea\u5b9a\u4e49\u534f\u8bae\u7684\u670d\u52a1\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5f00\u53d1\u4eba\u5458\u53ea\u9700\u67e5\u8be2\u5e76\u8fd4\u56de\u5b64\u5355\u7684\u805a\u5408\u6839\u5bf9\u8c61\u5373\u53ef\uff0c\u65e0\u9700\u8003\u8651\u8fd9\u4e9b\u5bf9\u8c61\u7684\u5173\u8054\u5c5e\u6027\u3002\u6240\u4ee5\uff0c\u8fd9\u662f\u76f8\u5bf9\u7b80\u5355\u7684\u5f00\u53d1\u4efb\u52a1\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u5bf9",(0,t.jsx)(e.a,{href:"https://spring.io/projects/spring-graphql",children:"Spring GraphQL"}),"\u800c\u8a00\uff0c\u4e3a\u63a7\u5236\u5668\u7c7b\u7684\u7684\u67e5\u8be2\u65b9\u6cd5\u6dfb\u52a0\u6ce8\u89e3",(0,t.jsx)(e.code,{children:"@QueryMapping"}),"\u5373\u53ef\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u67e5\u8be2\u5173\u8054\u5c5e\u6027\u548c\u8ba1\u7b97\u5c5e\u6027"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u662f\u5b9e\u73b0GraphQL\u67e5\u8be2\u7684\u4e3b\u8981\u5de5\u4f5c\u91cf\uff0c\u9700\u8981\u8003\u8651\u5f53\u524d\u5bf9\u8c61\u7684\u6240\u6709\u5173\u8054\uff0c\u4ee5\u53ca\u5b9e\u65bd\u6279\u91cf\u52a0\u8f7d\u3002\u5b58\u5728\u4e00\u5b9a\u7684\u5de5\u4f5c\u91cf\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5176\u5b9e\uff0c\u4e5f\u53ef\u4ee5\u6362\u4e00\u79cd\u8bf4\u6cd5\uff0c\u6b63\u662f\u5e94\u4e3a\u670d\u52a1\u7aef\u627f\u62c5\u4e86\u8fd9\u4e9b\u8d23\u4efb\uff0c\u5ba2\u6237\u7aef\u4f7f\u7528\u8d77\u6765\u624d\u4f1a\u611f\u89c9\u5230\u81ea\u7531\u3001\u4fbf\u6377\u548c\u5f3a\u5927\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u5bf9",(0,t.jsx)(e.a,{href:"https://spring.io/projects/spring-graphql",children:"Spring GraphQL"}),"\u800c\u8a00\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e9b\u7528\u4e8e\u67e5\u8be2\u5173\u8054\u5c5e\u6027\u7684\u65b9\u6848\uff0c\u6bd4\u5982"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://docs.spring.io/spring-graphql/docs/current/reference/html/#controllers.schema-mapping",children:"@SchemaMapping"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://docs.spring.io/spring-graphql/docs/current/reference/html/#execution.batching",children:"Batch Loading"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://docs.spring.io/spring-graphql/docs/current/reference/html/#controllers.batch-mapping",children:"@BatchMapping"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u7528Jimer\u5b9e\u73b0GraphQL\u67e5\u8be2\u65f6\uff0c\u5f00\u53d1\u4eba\u5458\u53ea\u9700\u5173\u6ce8\u4e8e\u805a\u5408\u6839\u5bf9\u8c61\u7684\u67e5\u8be2\uff0c\u53ea\u9700\u8981\u4fdd\u8bc1\u8fd9\u4e9b\u805a\u5408\u6839\u5bf9\u8c61\u5177\u5907\u7b80\u5355\u6807\u91cf\u5b57\u6bb5\u5373\u53ef\u3002\u8fd9\u662f\u56e0\u4e3a"}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsx)(e.p,{children:"\u5b9e\u4f53\u5bf9\u8c61\u7684\u6240\u6709\u5173\u8054\u5c5e\u6027\u548c\u8ba1\u7b97\u5c5e\u6027\u90fd\u4f1a\u88abJimmer\u81ea\u52a8\u6620\u5c04\u4e3aGraphQL\u5b57\u6bb5\uff0c\u65e0\u9700\u4efb\u4f55\u5f00\u53d1"})}),"\n",(0,t.jsxs)(e.admonition,{type:"caution",children:[(0,t.jsx)(e.p,{children:"\u622a\u6b62\u5230\u76ee\u524d\u4e3a\u6b62\uff0cGraphQL\u534f\u8bae\u5e76\u4e0d\u652f\u6301\u81ea\u5173\u8054\u5c5e\u6027\u7684\u9012\u5f52\u67e5\u8be2\u3002"}),(0,t.jsxs)(e.p,{children:["\u56e0\u6b64\uff0c\u65e0\u6cd5\u901a\u8fc7GraphQL\u66b4\u9732\u7c7b\u4f3c\u4e8e",(0,t.jsx)(e.a,{href:"../query/object-fetcher/recursive",children:"\u5bf9\u8c61\u6293\u53d6\u5668\u7684\u9012\u5f52\u67e5\u8be2"}),"\u7684\u529f\u80fd\uff0c\u8fd9\u662f\u76ee\u524d\u4f7f\u7528GraphQL\u5fc5\u987b\u63a5\u53d7\u7684\u529f\u80fd\u727a\u7272\u3002"]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u5b9e\u73b0graphql\u670d\u52a1",children:"\u5b9e\u73b0GraphQL\u670d\u52a1"}),"\n",(0,t.jsx)(e.h3,{id:"1-\u6700\u7b80\u5b9e\u73b0",children:"1. \u6700\u7b80\u5b9e\u73b0"}),"\n",(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(l.A,{value:"java",label:"Java",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",metastring:'title="BookStoreService.java"',children:"package com.example.business;\n\nimport org.springframework.graphql.data.method.annotation.Argument;\n// highlight-next-line\nimport org.springframework.graphql.data.method.annotation.QueryMapping;\nimport org.springframework.stereotype.Controller;\n\n...\u7701\u7565\u5176\u4ed6\u5bfc\u5165...\n\n@Controller\npublic class BookStoreService {\n\n    private final JSqlClient sqlClient;\n\n    public BookStoreService(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    // highlight-next-line\n    @QueryMapping\n    public List<BookStore> bookStores(\n            @Argument @Nullable String name\n    ) {\n        BookStoreTable table = Tables.BOOK_STORE_TABLE;\n        return sqlClient\n            .createQuery(table)\n            .where(table.name().ilikeIf(name))\n            .select(table)\n            .execute();\n    }\n}\n"})})}),(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-kotlin",metastring:'title="BookStoreService.kt"',children:"package com.example.business\n\nimport org.springframework.graphql.data.method.annotation.Argument\n// highlight-next-line\nimport org.springframework.graphql.data.method.annotation.QueryMapping\nimport org.springframework.stereotype.Controller\n\n...\u7701\u7565\u5176\u4ed6\u5bfc\u5165...\n\n@Controller\nclass BookStoreService(\n    private val sqlClient: KSqlClient\n) {\n\n    // highlight-next-line\n    @QueryMapping\n    fun bookStores(\n        @Argument name: String?\n    ): List<BookStore> =\n        sqlClient\n            .createQuery(BookStore::class) {\n                where(table.name `ilike?` name)\n                select(table)\n            }\n            .execute()\n}\n"})})})]}),"\n",(0,t.jsxs)(e.p,{children:["\u548c\u4e4b\u524d\u7684REST\u670d\u52a1\u4e0d\u540c\uff0c\u8fd9\u4e2a\u4f8b\u5b50\u5e76",(0,t.jsx)(e.strong,{children:"\u672a"}),"\u4f7f\u7528",(0,t.jsx)(e.a,{href:"../query/object-fetcher",children:"\u5bf9\u8c61\u6293\u53d6\u5668"}),"\uff0c\u8fd4\u56de\u6700\u7b80\u5355\u7684\u5b64\u5355\u5bf9\u8c61\u5373\u53ef ",(0,t.jsx)(e.em,{children:"(\u5b64\u5355\u5bf9\u8c61\u65e2\u4e0d\u5305\u542b\u5173\u8054\u5c5e\u6027\u4e5f\u4e0d\u5305\u542b\u8ba1\u7b97\u5c5e\u6027)"}),"\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u867d\u7136\u8fd9\u91cc\u6211\u4eec\u8fd4\u56de\u4e86\u5b64\u5355\u5bf9\u8c61\uff0c\u4f46\u662f\u5982\u679c\u5ba2\u6237\u7aef\u7684GraphQL\u8bf7\u6c42\u5305\u542b\u5173\u8054\u5bf9\u8c61\uff0cJimmer\u4ecd\u7136\u4f1a\u81ea\u52a8\u52a0\u8f7d\u6240\u9700\u7684\u5173\u8054\u5c5e\u6027\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4f46\u662f\uff0c\u8fd9\u79cd\u5199\u6cd5\u5b58\u5728\u4e00\u4e2a\u95ee\u9898\uff1a\u5728\u975e\u7f13\u5b58\u6a21\u5f0f\u4e0b\uff0c\u4e0d\u9700\u8981\u7684\u5c5e\u6027\u4e5f\u4f1a\u88ab\u67e5\u8be2\uff0c\u8fd9\u6709\u6027\u80fd\u95ee\u9898\uff0c\u7a0d\u540e\u6211\u4eec\u5c06\u4ecb\u7ecd\u53e6\u5916\u4e00\u79cd\u5177\u6709\u4f18\u5316\u80fd\u529b\u7684\u5199\u6cd5\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"2-\u4f18\u5316\u6027\u80fd",children:"2. \u4f18\u5316\u6027\u80fd"}),"\n",(0,t.jsxs)(e.p,{children:["\u5728\u975e\u7f13\u5b58\u6a21\u5f0f\u4e0b\uff0c\u4e3a\u4e86\u4e0d\u67e5\u8be2\u4e0d\u9700\u8981\u975e\u5173\u8054\u7684\u5c5e\u6027\uff0cJimmer\u53ef\u4ee5\u6839\u636e",(0,t.jsx)(e.code,{children:"graphql.schema.DataFetchingEnvironment"}),"\u521b\u5efa",(0,t.jsx)(e.code,{children:"Fetcher"}),"\u5bf9\u8c61\uff0c\u4ee5\u6b64Fetcher\u5bf9\u5bf9\u8c61\u4f5c\u4e3a\u53c2\u6570\u67e5\u8be2\u6570\u636e\u5e93\u5373\u53ef\u3002"]}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsx)(e.p,{children:"\u975e\u7f13\u5b58\u6a21\u5f0f\u4e0b\uff0c\u4e0d\u67e5\u8be2\u4e0d\u9700\u8981\u7684\u975e\u5173\u8054\u5c5e\u6027\uff0c\u662fJimmer GraphQL\u76f8\u6bd4Java\u751f\u6001\u4e2d\u5176\u4ed6GraphQL\u5b9e\u73b0\u7684\u672c\u8d28\u533a\u522b\u3002"})}),"\n",(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(l.A,{value:"java",label:"Java",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",metastring:'title="BookStoreService.java"',children:"package com.example.business;\n\nimport org.springframework.graphql.data.method.annotation.Argument;\n// highlight-next-line\nimport graphql.schema.DataFetchingEnvironment;\n// highlight-next-line\nimport org.babyfish.jimmer.spring.graphql.DataFetchingEnvironments;\nimport org.springframework.graphql.data.method.annotation.QueryMapping;\nimport org.springframework.stereotype.Controller;\n\n...\u7701\u7565\u5176\u4ed6\u5bfc\u5165...\n\n@Controller\npublic class BookStoreService {\n\n    private final JSqlClient sqlClient;\n\n    public BookStoreService(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    @QueryMapping\n    public List<BookStore> bookStores(\n            @Argument @Nullable String name,\n            // highlight-next-line\n            DataFetchingEnvironment env\n    ) {\n        BookStoreTable table = Tables.BOOK_STORE_TABLE;\n        return sqlClient\n            .createQuery(table)\n            .where(table.name().ilikeIf(name))\n            .select(\n                table.fetch(\n                    // highlight-next-line\n                    DataFetchingEnvironments.createQuery(\n                        BookStore.class,\n                        env\n                    )\n                )\n            )\n            .execute();\n    }\n}\n"})})}),(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-kotlin",metastring:'title="BookStoreService.kt"',children:"package com.example.business\n\nimport org.springframework.graphql.data.method.annotation.Argument\n// highlight-next-line\nimport graphql.schema.DataFetchingEnvironment\n// highlight-next-line\nimport org.babyfish.jimmer.spring.graphql.toFetcher\nimport org.springframework.graphql.data.method.annotation.QueryMapping\nimport org.springframework.stereotype.Controller\n\n...\u7701\u7565\u5176\u4ed6\u5bfc\u5165...\n\n@Controller\nclass BookStoreService(\n    private val sqlClient: KSqlClient\n) {\n\n    @QueryMapping\n    fun bookStores(\n        @Argument name: String?,\n        // highlight-next-line\n        env: DataFetchingEnvironment\n    ): List<BookStore> =\n        sqlClient\n            .createQuery(BookStore::class) {\n                where(table.name `ilike?` name)\n                select(\n                    table.fetch(\n                        // highlight-next-line\n                        env.toFetcher()\n                    )\n                )\n            }\n            .execute()\n}\n"})})})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8fd0\u884c\u6548\u679c",children:"\u8fd0\u884c\u6548\u679c"}),"\n",(0,t.jsx)(e.p,{children:"\u9644\u5e26\u7684\u4f8b\u5b50\u4e2d, GraphQL\u76f8\u5173\u7684\u9879\u76ee\u5728\u8fd9\u91cc"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Language"}),(0,t.jsx)(e.th,{children:"Example"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Java"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"https://github.com/babyfish-ct/jimmer-examples/tree/main/java/jimmer-sql-graphql",children:"jimmer-examples/java/jimmer-sql-graphql"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Kotlin"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"https://github.com/babyfish-ct/jimmer-examples/tree/main/kotlin/jimmer-sql-graphql-kt",children:"jimmer-examples/kotlin/jimmer-sql-graphql-kt"})})]})]})]}),"\n",(0,t.jsxs)(e.p,{children:["\u9009\u62e9\u4efb\u4f55\u4e00\u4e2a\u9879\u76ee\uff0c\u6253\u5f00\uff0c\u542f\u52a8\u3002\u6700\u540e\uff0c\u4f7f\u7528\u6d4f\u89c8\u5668\u8bbf\u95ee",(0,t.jsx)(e.a,{href:"http://localhost:8080/graphiql",children:"http://localhost:8080/graphiql"})]}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsxs)(e.p,{children:["\u5c0f\u5fc3\uff0c\u662f/graph",(0,t.jsx)(e.strong,{children:"i"}),"ql, \u4e0d\u662f/graphql"]})}),"\n",(0,t.jsx)(e.p,{children:"\u6267\u884c\u8bf7\u6c42"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"query {\n  bookStores {\n    id\n    name\n    avgPrice \u2776\n    books { \u2777\n      id\n      name\n      edition\n      price\n      authors { \u2778\n        id\n        firstName\n        fullName\n        gender\n      }\n    }\n  }\n}\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u2776 \u67e5\u8be2\u8ba1\u7b97\u5c5e\u6027",(0,t.jsx)(e.code,{children:"BookStore.avgPrice"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u2777 \u67e5\u8be2\u5173\u8054\u5c5e\u6027",(0,t.jsx)(e.code,{children:"BookStore.books"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u2778 \u67e5\u8be2\u5173\u8054\u5c5e\u6027",(0,t.jsx)(e.code,{children:"Book.authors"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u8fd4\u56de\u7ed3\u679c\u4e3a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n    "data":{\n        "bookStores":[\n            {\n                "id":2,\n                "name":"MANNING",\n                // highlight-next-line\n                "avgPrice":80.333333,\n                // highlight-next-line\n                "books":[\n                    {\n                        "id":10,\n                        "name":"GraphQL in Action",\n                        "edition":1,\n                        "price":80,\n                        // highlight-next-line\n                        "authors":[\n                            {\n                                "id":5,\n                                "firstName":"Samer",\n                                "fullName":"Samer Buna",\n                                "gender":"MALE"\n                            }\n                        ]\n                    },\n                    {\n                        "id":11,\n                        ...\u7565...\n                    },\n                    {\n                        "id":12,\n                        ...\u7565...\n                    }\n                ]\n            },\n            {\n                "id":1,\n                "name":"O\'REILLY",\n                // highlight-next-line\n                "avgPrice":58.5,\n                // highlight-next-line\n                "books":[\n                    {\n                        "id":4,\n                        "name":"Effective TypeScript",\n                        "edition":1,\n                        "price":73,\n                        // highlight-next-line\n                        "authors":[\n                            {\n                                "id":3,\n                                "firstName":"Dan",\n                                "fullName":"Dan Vanderkam",\n                                "gender":"MALE"\n                            }\n                        ]\n                    },\n                    {\n                        "id":5,\n                        ...\u7565...\n                    },\n                    {\n                        "id":6,\n                        ...\u7565...\n                    },\n                    {\n                        "id":1,\n                        "name":"Learning GraphQL",\n                        "edition":1,\n                        "price":50,\n                        "authors":[\n                            {\n                                "id":2,\n                                "firstName":"Alex",\n                                "fullName":"Alex Banks",\n                                "gender":"MALE"\n                            },\n                            {\n                                "id":1,\n                                "firstName":"Eve",\n                                "fullName":"Eve Procello",\n                                "gender":"FEMALE"\n                            }\n                        ]\n                    },\n                    {\n                        "id":2,\n                        "name":"Learning GraphQL",\n                        "edition":2,\n                        "price":55,\n                        "authors":[\n                            {\n                                "id":2,\n                                "firstName":"Alex",\n                                "fullName":"Alex Banks",\n                                "gender":"MALE"\n                            },\n                            {\n                                "id":1,\n                                "firstName":"Eve",\n                                "fullName":"Eve Procello",\n                                "gender":"FEMALE"\n                            }\n                        ]\n                    },\n                    {\n                        "id":3,\n                        "name":"Learning GraphQL",\n                        "edition":3,\n                        "price":51,\n                        "authors":[\n                            {\n                                "id":2,\n                                "firstName":"Alex",\n                                "fullName":"Alex Banks",\n                                "gender":"MALE"\n                            },\n                            {\n                                "id":1,\n                                "firstName":"Eve",\n                                "fullName":"Eve Procello",\n                                "gender":"FEMALE"\n                            }\n                        ]\n                    },\n                    {\n                        "id":7,\n                        "name":"Programming TypeScript",\n                        "edition":1,\n                        "price":47.5,\n                        "authors":[\n                            {\n                                "id":4,\n                                "firstName":"Boris",\n                                "fullName":"Boris Cherny",\n                                "gender":"MALE"\n                            }\n                        ]\n                    },\n                    {\n                        "id":8,\n                        "name":"Programming TypeScript",\n                        "edition":2,\n                        "price":45,\n                        "authors":[\n                            {\n                                "id":4,\n                                "firstName":"Boris",\n                                "fullName":"Boris Cherny",\n                                "gender":"MALE"\n                            }\n                        ]\n                    },\n                    {\n                        "id":9,\n                        "name":"Programming TypeScript",\n                        "edition":3,\n                        "price":48,\n                        "authors":[\n                            {\n                                "id":4,\n                                "firstName":"Boris",\n                                "fullName":"Boris Cherny",\n                                "gender":"MALE"\n                            }\n                        ]\n                    }\n                ]\n            }\n        ]\n    }\n}\n'})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},19365:(n,e,r)=>{r.d(e,{A:()=>l});r(96540);var t=r(18215);const i={tabItem:"tabItem_Ymn6"};var a=r(74848);function l(n){let{children:e,hidden:r,className:l}=n;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,l),hidden:r,children:e})}},11470:(n,e,r)=>{r.d(e,{A:()=>q});var t=r(96540),i=r(18215),a=r(23104),l=r(56347),o=r(205),s=r(57485),c=r(31682),h=r(70679);function d(n){return t.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,t.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(n){const{values:e,children:r}=n;return(0,t.useMemo)((()=>{const n=e??function(n){return d(n).map((n=>{let{props:{value:e,label:r,attributes:t,default:i}}=n;return{value:e,label:r,attributes:t,default:i}}))}(r);return function(n){const e=(0,c.X)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,r])}function p(n){let{value:e,tabValues:r}=n;return r.some((n=>n.value===e))}function m(n){let{queryString:e=!1,groupId:r}=n;const i=(0,l.W6)(),a=function(n){let{queryString:e=!1,groupId:r}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,s.aZ)(a),(0,t.useCallback)((n=>{if(!a)return;const e=new URLSearchParams(i.location.search);e.set(a,n),i.replace({...i.location,search:e.toString()})}),[a,i])]}function g(n){const{defaultValue:e,queryString:r=!1,groupId:i}=n,a=u(n),[l,s]=(0,t.useState)((()=>function(n){let{defaultValue:e,tabValues:r}=n;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=r.find((n=>n.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:e,tabValues:a}))),[c,d]=m({queryString:r,groupId:i}),[g,x]=function(n){let{groupId:e}=n;const r=function(n){return n?`docusaurus.tab.${n}`:null}(e),[i,a]=(0,h.Dv)(r);return[i,(0,t.useCallback)((n=>{r&&a.set(n)}),[r,a])]}({groupId:i}),f=(()=>{const n=c??g;return p({value:n,tabValues:a})?n:null})();(0,o.A)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,t.useCallback)((n=>{if(!p({value:n,tabValues:a}))throw new Error(`Can't select invalid tab value=${n}`);s(n),d(n),x(n)}),[d,x,a]),tabValues:a}}var x=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(74848);function b(n){let{className:e,block:r,selectedValue:t,selectValue:l,tabValues:o}=n;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),h=n=>{const e=n.currentTarget,r=s.indexOf(e),i=o[r].value;i!==t&&(c(e),l(i))},d=n=>{let e=null;switch(n.key){case"Enter":h(n);break;case"ArrowRight":{const r=s.indexOf(n.currentTarget)+1;e=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(n.currentTarget)-1;e=s[r]??s[s.length-1];break}}e?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},e),children:o.map((n=>{let{value:e,label:r,attributes:a}=n;return(0,j.jsx)("li",{role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:n=>s.push(n),onKeyDown:d,onClick:h,...a,className:(0,i.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":t===e}),children:r??e},e)}))})}function v(n){let{lazy:e,children:r,selectedValue:i}=n;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){const n=a.find((n=>n.props.value===i));return n?(0,t.cloneElement)(n,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((n,e)=>(0,t.cloneElement)(n,{key:e,hidden:n.props.value!==i})))})}function k(n){const e=g(n);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,j.jsx)(b,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function q(n){const e=(0,x.A)();return(0,j.jsx)(k,{...n,children:d(n.children)},String(e))}},28453:(n,e,r)=>{r.d(e,{R:()=>l,x:()=>o});var t=r(96540);const i={},a=t.createContext(i);function l(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);