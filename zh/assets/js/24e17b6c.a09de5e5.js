"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4273],{37182:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>b});var t=l(74848),a=l(28453),r=l(11470),s=l(19365);const o={sidebar_position:11,title:"\u5b50\u67e5\u8be2"},i=void 0,c={id:"query/sub-query",title:"\u5b50\u67e5\u8be2",description:"\u6709\u7c7b\u578b\u5b50\u67e5\u8be2",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/sub-query.mdx",sourceDirName:"query",slug:"/query/sub-query",permalink:"/jimmer-doc/zh/docs/query/sub-query",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/query/sub-query.mdx",tags:[],version:"current",lastUpdatedAt:1722888025e3,sidebarPosition:11,frontMatter:{sidebar_position:11,title:"\u5b50\u67e5\u8be2"},sidebar:"tutorialSidebar",previous:{title:"\u903b\u8f91\u5220\u9664",permalink:"/jimmer-doc/zh/docs/query/global-filter/logical-deleted"},next:{title:"\u76f4\u63a5\u67e5\u8be2\u4e2d\u95f4\u8868",permalink:"/jimmer-doc/zh/docs/query/associations"}},u={},b=[{value:"\u6709\u7c7b\u578b\u5b50\u67e5\u8be2",id:"\u6709\u7c7b\u578b\u5b50\u67e5\u8be2",level:2},{value:"\u57fa\u4e8e\u5355\u5217\u7684IN\u8868\u8fbe\u5f0f",id:"\u57fa\u4e8e\u5355\u5217\u7684in\u8868\u8fbe\u5f0f",level:3},{value:"\u57fa\u4e8e\u591a\u5217\u7684IN\u8868\u8fbe\u5f0f",id:"\u57fa\u4e8e\u591a\u5217\u7684in\u8868\u8fbe\u5f0f",level:3},{value:"\u5c06\u5b50\u67e5\u8be2\u89c6\u4e3a\u7b80\u5355\u503c",id:"\u5c06\u5b50\u67e5\u8be2\u89c6\u4e3a\u7b80\u5355\u503c",level:3},{value:"\u5728select\u548corderBy\u5b50\u53e5\u4e2d\u4f7f\u7528\u5b50\u67e5\u8be2",id:"\u5728select\u548corderby\u5b50\u53e5\u4e2d\u4f7f\u7528\u5b50\u67e5\u8be2",level:3},{value:"\u4f7f\u7528any\u8fd0\u7b97\u7b26",id:"\u4f7f\u7528any\u8fd0\u7b97\u7b26",level:3},{value:"\u4f7f\u7528all\u8fd0\u7b97\u7b26",id:"\u4f7f\u7528all\u8fd0\u7b97\u7b26",level:3},{value:"\u4f7f\u7528exists\u8fd0\u7b97\u7b26",id:"\u4f7f\u7528exists\u8fd0\u7b97\u7b26",level:3},{value:"\u65e0\u7c7b\u578b\u5b50\u67e5\u8be2",id:"\u65e0\u7c7b\u578b\u5b50\u67e5\u8be2",level:2}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u6709\u7c7b\u578b\u5b50\u67e5\u8be2",children:"\u6709\u7c7b\u578b\u5b50\u67e5\u8be2"}),"\n",(0,t.jsx)(n.h3,{id:"\u57fa\u4e8e\u5355\u5217\u7684in\u8868\u8fbe\u5f0f",children:"\u57fa\u4e8e\u5355\u5217\u7684IN\u8868\u8fbe\u5f0f"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'BookTable book = Tables.BOOK_TABLE;\nAuthorTableEx author = TableExes.AUTHOR_TABLE_EX;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .where(\n        // highlight-next-line\n        book.id().in(sqlClient\n            .createSubQuery(author)\n            .where(author.firstName().eq("Alex"))\n            .select(author.books().id())\n        )\n    )\n    .select(book)\n    .execute();\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where( \n            // highlight-next-line\n            table.id valueIn subQuery(Author::class) {\n                where(table.firstName eq "Alex")\n                select(table.books.id)\n            }\n        )\n        select(table)    \n    }\n    .execute()\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \nwhere \n    /* highlight-next-line */\n    tb_1_.ID in (\n        select \n            tb_3_.BOOK_ID \n        from AUTHOR as tb_2_ \n        inner join BOOK_AUTHOR_MAPPING as tb_3_ \n            on tb_2_.ID = tb_3_.AUTHOR_ID \n        where \n            tb_2_.FIRST_NAME = ?\n    )\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u57fa\u4e8e\u591a\u5217\u7684in\u8868\u8fbe\u5f0f",children:"\u57fa\u4e8e\u591a\u5217\u7684IN\u8868\u8fbe\u5f0f"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> newestBooks = sqlClient\n    .createQuery(book)\n    .where(\n        // highlight-next-line\n        Expression.tuple(\n            book.name(),\n            book.edition()\n        ).in(sqlClient\n            .createSubQuery(book)\n            .groupBy(book.name())\n            .select(\n                book.name(),\n                book.edition().max()\n            )\n        )\n    )\n    .select(book)\n    .execute();\n"})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val newestBooks = sqlClient\n    .createQuery(Book::class) {\n        where( \n            // highlight-next-line\n            tuple(\n                table.name, \n                table.edition\n            ) valueIn subQuery(Book::class) {\n                groupBy(table.name)\n                select(\n                    table.name,\n                    max(table.edition).asNonNull()\n                )\n            }\n        )\n        select(table)\n    }\n    .execute()\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \nwhere \n    /* highlight-next-line */\n    (tb_1_.NAME, tb_1_.EDITION) in (\n        select \n            tb_2_.NAME, \n            max(tb_2_.EDITION) \n            from BOOK as tb_2_ \n            group by tb_2_.NAME\n    )\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5c06\u5b50\u67e5\u8be2\u89c6\u4e3a\u7b80\u5355\u503c",children:"\u5c06\u5b50\u67e5\u8be2\u89c6\u4e3a\u7b80\u5355\u503c"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> newestBooks = sqlClient\n    .createQuery(book)\n    .where(\n        // highlight-next-line\n        book.price().gt(sqlClient\n            .createSubQuery(book)\n            .groupBy(book.name())\n            .select(\n                book\n                    .price()\n                    .avg()\n                    .coalesce(BigDecimal.ZERO)\n            )\n        )\n    )\n    .select(book)\n    .execute();\n"})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val books = sqlClient\n    .createQuery(Book::class) {\n        where( \n            // highlight-next-line\n            table.price gt subQuery(Book::class) {\n                select(\n                    avg(table.price)\n                        .coalesce(BigDecimal.ZERO)\n                )\n            }\n        )\n        select(table)\n    }\n    .execute()\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \nwhere \n    /* highlight-next-line */\n    tb_1_.PRICE > (\n        select \n            coalesce(avg(tb_2_.PRICE), ?) \n        from BOOK as tb_2_\n    )\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5728select\u548corderby\u5b50\u53e5\u4e2d\u4f7f\u7528\u5b50\u67e5\u8be2",children:"\u5728select\u548corderBy\u5b50\u53e5\u4e2d\u4f7f\u7528\u5b50\u67e5\u8be2"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"BookStoreTable store = Tables.BOOK_STORE_TABLE;\nBookTable book = Tables.BOOK_TABLE;\n\nMutableRootQuery<BookStoreTable> query =\n    sqlClient.createQuery(store);\nTypedSubQuery<BigDecimal> subQuery =\n    sqlClient\n        .createSubQuery(book)\n        .where(book.store().eq(store))\n        .select(\n            book\n                .price()\n                .avg()\n                .coalesce(BigDecimal.ZERO)\n        );\nList<Tuple2<BookStore, BigDecimal>> storeAvgPriceTuples =\n    query\n        \n        .orderBy(\n            // highlight-next-line\n            subQuery.desc()\n        )\n        .select(\n            store, \n            // highlight-next-line\n            subQuery\n        )\n        .execute();\n"})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val storeAvgPriceTuples = sqlClient\n    .createQuery(BookStore::class) {\n        val avgPriceSubQuery = subQuery(Book::class) {\n            where(table.store eq parentTable)\n            select(avg(table.price))\n        }\n        \n        orderBy(\n            // highlight-next-line\n            avgPriceSubQuery.desc()\n        )\n        select(\n            table,\n            // highlight-next-line\n            avgPriceSubQuery\n        )\n    }\n    .execute()\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.WEBSITE, \n    (\n        /* highlight-next-line */\n        select coalesce(avg(tb_2_.PRICE), ?) \n        from BOOK as tb_2_\n    ) \nfrom BOOK_STORE as tb_1_ \norder by (\n    /* highlight-next-line */\n    select coalesce(avg(tb_2_.PRICE), ?) \n    from BOOK as tb_2_\n) desc\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4f7f\u7528any\u8fd0\u7b97\u7b26",children:"\u4f7f\u7528any\u8fd0\u7b97\u7b26"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'BookTable book = Tables.BOOK_TABLE;\nAuthorTableEx author = TableExes.AUTHOR_TABLE_EX;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .where(\n        book.id().eq(sqlClient\n            .createSubQuery(author)\n            .where(\n                author.firstName().in(\n                    Arrays.asList("Alex", "Bill")\n                )\n            )\n            .select(author.books().id())\n            // highlight-next-line\n            .any()\n        )\n    )\n    .select(book)\n    .execute();\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            // highlight-next-line\n            table.id eq any(\n                subQuery(Author::class) {\n                    where(\n                        table.firstName valueIn listOf(\n                            "Alex",\n                            "Bill"\n                        )\n                    )\n                    select(table.id)\n                }\n            )\n        )\n        select(table)\n    }\n    .execute()\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \nwhere tb_1_.ID = \n    /* highlight-next-line */\n    any(\n        select \n            tb_3_.BOOK_ID \n        from AUTHOR as tb_2_ \n        inner join BOOK_AUTHOR_MAPPING as tb_3_ \n            on tb_2_.ID = tb_3_.AUTHOR_ID \n        where \n            tb_2_.FIRST_NAME in (?, ?)\n    )\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4f7f\u7528all\u8fd0\u7b97\u7b26",children:"\u4f7f\u7528all\u8fd0\u7b97\u7b26"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'BookTable book = Tables.BOOK_TABLE;\nAuthorTableEx author = TableExes.AUTHOR_TABLE_EX;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .where(\n        book.id().ne(sqlClient\n            .createSubQuery(author)\n            .where(\n                author.firstName().in(\n                    Arrays.asList("Alex", "Bill")\n                )\n            )\n            .select(author.books().id())\n            // highlight-next-line\n            .all()\n        )\n    )\n    .select(book)\n    .execute();\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            // highlight-next-line\n            table.id ne all(\n                subQuery(Author::class) {\n                    where(\n                        table.firstName valueIn listOf(\n                            "Alex",\n                            "Bill"\n                        )\n                    )\n                    select(table.id)\n                }\n            )\n        )\n        select(table)\n    }\n    .execute()\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \nwhere tb_1_.ID = \n    /* highlight-next-line */\n    all(\n        select \n            tb_3_.BOOK_ID \n        from AUTHOR as tb_2_ \n        inner join BOOK_AUTHOR_MAPPING as tb_3_ \n            on tb_2_.ID = tb_3_.AUTHOR_ID \n        where \n            tb_2_.FIRST_NAME in (?, ?)\n    )\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4f7f\u7528exists\u8fd0\u7b97\u7b26",children:"\u4f7f\u7528exists\u8fd0\u7b97\u7b26"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'BookTable book = Tables.BOOK_TABLE;\nAuthorTableEx author = TableExes.AUTHOR_TABLE_EX;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .where(sqlClient\n        .createSubQuery(author)\n        .where(\n            author.books().eq(book),\n            author.firstName().eq("Alex")\n        )\n        .select(author)\n        // highlight-next-line\n        .exists()\n    )\n    .select(book)\n    .execute();\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            // highlight-next-line\n            exists(\n                subQuery(Author::class) {\n                    where(\n                        table.books eq parentTable,\n                        table.firstName eq "Alex"\n                    )\n                    select(table)\n                }\n            )\n        )\n        select(table)\n    }\n    .execute()\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \nwhere \n    /* highlight-next-line */\n    exists (\n        select \n            1 \n        from AUTHOR as tb_2_ \n        inner join BOOK_AUTHOR_MAPPING as tb_3_ \n            on tb_2_.ID = tb_3_.AUTHOR_ID \n        where \n            tb_1_.ID = tb_3_.BOOK_ID \n        and \n            tb_2_.FIRST_NAME = ?\n    )\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["\u6ce8\u610f\uff0c\u5728\u6700\u7ec8\u751f\u6210\u7684SQL\u4e2d\uff0c\u5b50\u67e5\u8be2\u9009\u53d6\u7684\u5217\u662f\u5e38\u91cf",(0,t.jsx)(n.code,{children:"1"}),"\uff0c\u5e76\u975eJava/Kotlin\u4ee3\u7801\u7684\u8bbe\u7f6e\u3002"]}),(0,t.jsxs)(n.p,{children:["\u8fd9\u662f\u56e0\u4e3a",(0,t.jsx)(n.code,{children:"exists"}),"\u8fd0\u7b97\u7b26\u53ea\u5728\u4e4e\u5b50\u67e5\u8be2\u662f\u5426\u80fd\u5339\u914d\u5230\u6570\u636e\uff0c\u5e76\u4e0d\u5728\u4e4e\u5b50\u67e5\u8be2\u9009\u53d6\u4e86\u90a3\u4e9b\u5217\u3002\u65e0\u8bba\u4f60\u5728Java/Kotlin\u4ee3\u7801\u4e2d\u8ba9\u5b50\u67e5\u8be2\u9009\u53d6\u4ec0\u4e48\uff0c\u90fd\u4f1a\u88ab\u65e0\u89c6\u3002"]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u65e0\u7c7b\u578b\u5b50\u67e5\u8be2",children:"\u65e0\u7c7b\u578b\u5b50\u67e5\u8be2"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0a\u4e00\u8282\u6700\u540e\u4e00\u4e2a\u4f8b\u5b50\u662f",(0,t.jsx)(n.code,{children:"exists"}),"\u5b50\u67e5\u8be2\uff0c\u65e0\u8bba\u4f60\u5728Java\u4ee3\u7801\u4e2d\u8ba9\u5b50\u67e5\u8be2\u9009\u53d6\u4ec0\u4e48\u90fd\u4f1a\u88ab\u65e0\u89c6\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u65e2\u7136\u5982\u6b64\uff0c\u4e3a\u4ec0\u4e48\u8981\u4e3a",(0,t.jsx)(n.code,{children:"exists"}),"\u5b50\u67e5\u8be2\u6307\u5b9a\u8fd4\u56de\u683c\u5f0f\u5462\uff1f"]}),"\n",(0,t.jsx)(n.p,{children:"\u56e0\u6b64\uff0cjimmer-sql\u652f\u6301\u65e0\u7c7b\u578b\u5b50\u67e5\u8be2(Wild sub query)\uff0c\u548c\u666e\u901a\u5b50\u67e5\u8be2\u4e0d\u540c\uff0c\u65e0\u7c7b\u578b\u5b50\u67e5\u8be2\u5b9e\u73b0\u4e2d\uff0c\u4e0d\u518d\u9700\u8981\u6700\u540e\u90a3\u4e00\u53e5select\u65b9\u6cd5\u8c03\u7528\uff0c\u5373\uff0c\u4e0d\u9700\u8981\u8fd4\u56de\u7c7b\u578b\u3002"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'BookTable book = Tables.BOOK_TABLE;\nAuthorTableEx author = TableExes.AUTHOR_TABLE_EX;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .where(sqlClient\n        .createSubQuery(author)\n        .where(\n            author.books().eq(book),\n            author.firstName().eq("Alex")\n        )\n        // \u6b64\u5904\u65e0select\n        .exists()\n    )\n    .select(book)\n    .execute();\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            exists(\n                // highlight-next-line\n                wildSubQuery(Author::class) {\n                    where(\n                        table.books eq parentTable,\n                        table.firstName eq "Alex"\n                    )\n                    // \u6b64\u5904\u65e0select\n                }\n            )\n        )\n        select(table)\n    }\n    .execute()\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u7ec8\u751f\u6210\u7684SQL\u4e0d\u53d8\uff0c\u4ecd\u7136\u662f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \nwhere \n    /* highlight-next-line */\n    exists (\n        select \n            1 \n        from AUTHOR as tb_2_ \n        inner join BOOK_AUTHOR_MAPPING as tb_3_ \n            on tb_2_.ID = tb_3_.AUTHOR_ID \n        where \n            tb_1_.ID = tb_3_.BOOK_ID \n        and \n            tb_2_.FIRST_NAME = ?\n    )\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["\u65e0\u7c7b\u578b\u5b50\u67e5\u8be2\u552f\u4e00\u7684\u4ef7\u503c\uff0c\u5c31\u662f\u548c",(0,t.jsx)(n.code,{children:"exists"}),"\u8fd0\u7b97\u7b26\u914d\u5408\u3002"]})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,l)=>{l.d(n,{A:()=>s});l(96540);var t=l(18215);const a={tabItem:"tabItem_Ymn6"};var r=l(74848);function s(e){let{children:n,hidden:l,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:l,children:n})}},11470:(e,n,l)=>{l.d(n,{A:()=>A});var t=l(96540),a=l(18215),r=l(23104),s=l(56347),o=l(205),i=l(57485),c=l(31682),u=l(70679);function b(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:l}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return b(e).map((e=>{let{props:{value:n,label:l,attributes:t,default:a}}=e;return{value:n,label:l,attributes:t,default:a}}))}(l);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function d(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function _(e){let{queryString:n=!1,groupId:l}=e;const a=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,i.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function x(e){const{defaultValue:n,queryString:l=!1,groupId:a}=e,r=h(e),[s,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=l.find((e=>e.default))??l[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[c,b]=_({queryString:l,groupId:a}),[x,g]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,u.Dv)(l);return[a,(0,t.useCallback)((e=>{l&&r.set(e)}),[l,r])]}({groupId:a}),m=(()=>{const e=c??x;return d({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{m&&i(m)}),[m]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),b(e),g(e)}),[b,g,r]),tabValues:r}}var g=l(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var p=l(74848);function j(e){let{className:n,block:l,selectedValue:t,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,l=i.indexOf(n),a=o[l].value;a!==t&&(c(n),s(a))},b=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const l=i.indexOf(e.currentTarget)+1;n=i[l]??i[0];break}case"ArrowLeft":{const l=i.indexOf(e.currentTarget)-1;n=i[l]??i[i.length-1];break}}n?.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":l},n),children:o.map((e=>{let{value:n,label:l,attributes:r}=e;return(0,p.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:b,onClick:u,...r,className:(0,a.A)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":t===n}),children:l??n},n)}))})}function v(e){let{lazy:n,children:l,selectedValue:a}=e;const r=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function k(e){const n=x(e);return(0,p.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,p.jsx)(j,{...n,...e}),(0,p.jsx)(v,{...n,...e})]})}function A(e){const n=(0,g.A)();return(0,p.jsx)(k,{...e,children:b(e.children)},String(n))}},28453:(e,n,l)=>{l.d(n,{R:()=>s,x:()=>o});var t=l(96540);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);