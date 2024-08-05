"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8932],{84946:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(74848),s=t(28453),a=t(11470),l=t(19365);const i={sidebar_position:10,title:"Native SQL Expressions"},o=void 0,c={id:"query/native-sql",title:"Native SQL Expressions",description:"Native SQL expressions are an important feature to leverage database-specific capabilities, as database products always have proprietary features.",source:"@site/docs/query/native-sql.mdx",sourceDirName:"query",slug:"/query/native-sql",permalink:"/jimmer-doc/docs/query/native-sql",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/native-sql.mdx",tags:[],version:"current",lastUpdatedAt:1722888025e3,sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Native SQL Expressions"},sidebar:"tutorialSidebar",previous:{title:"DSL Expressions",permalink:"/jimmer-doc/docs/query/expression"},next:{title:"Subqueries",permalink:"/jimmer-doc/docs/query/sub-query"}},u={},d=[{value:"Example 1: Regular Expression Matching",id:"example-1-regular-expression-matching",level:2},{value:"Example 2: Analytic Functions",id:"example-2-analytic-functions",level:2}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Native SQL expressions are an important feature to leverage database-specific capabilities, as database products always have proprietary features."}),"\n",(0,r.jsx)(n.h2,{id:"example-1-regular-expression-matching",children:"Example 1: Regular Expression Matching"}),"\n",(0,r.jsx)(n.p,{children:"This example shows how to use regular expression matching in Oracle and HSQLDB:"}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(l.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'AuthorTable table = Tables.AUTHOR_TABLE;\n\nList<Author> authors = sqlClient\n    .createQuery(table)\n    .where(\n        Predicate.sql(\n            "regexp_like(%e, %v)", \n            it -> it\n                .expression(table.firstName())\n                .value("^Ste(v|ph)en$")\n        )\n    )\n    .select(table)\n    .execute();\n'})})}),(0,r.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'val authors = sqlClient\n    .createQuery(Author::class) {\n        where(\n            // highlight-next-line\n            sql(Boolean::class, "regexp_like(%e, %v)") {\n                expression(table.firstName)\n                value("^Ste(v|ph)en$")\n            }\n        )\n        select(table)\n    }\n    .execute() \n'})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["In the Java code, ",(0,r.jsx)(n.code,{children:"Predicate.sql"})," is called to create a query condition based on native SQL. In fact, other expression types also support native SQL expressions. There are 5 ",(0,r.jsx)(n.code,{children:"sql"})," functions:"]}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Predicate.sql(...)"}),"\n",(0,r.jsx)(n.li,{children:"Expression.string().sql(...)"}),"\n",(0,r.jsx)(n.li,{children:"Expression.numeric().sql(...)"}),"\n",(0,r.jsx)(n.li,{children:"Expression.comparable().sql(...)"}),"\n",(0,r.jsx)(n.li,{children:"Expression.any().sql(...)"}),"\n"]}),(0,r.jsx)(n.p,{children:"Kotlin does not have this issue, its API is unified."})]}),"\n",(0,r.jsxs)(n.p,{children:["The first parameter of ",(0,r.jsx)(n.code,{children:"sql(...)"})," is the SQL template string, which can contain special symbols ",(0,r.jsx)(n.code,{children:"%e"})," and ",(0,r.jsx)(n.code,{children:"%v"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"%e"}),": Expression, to embed an expression"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"%v"}),": Value, to embed a value"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The second parameter of ",(0,r.jsx)(n.code,{children:"sql(...)"})," is optional, a lambda expression whose parameter is an object supporting two methods:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"expression(Expression<?>)"}),": Embed an expression, corresponding to ",(0,r.jsx)(n.code,{children:"%e"})," in SQL template."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"value(Object)"}),": Embed a value, corresponding to ",(0,r.jsx)(n.code,{children:"%v"})," in SQL template."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The final generated SQL is:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.FIRST_NAME,\n    tb_1_.LAST_NAME, \n    tb_1_.GENDER\nfrom AUTHOR as tb_1_  \nwhere\n    /* highlight-next-line */\n    regexp_like(tb_1_.FIRST_NAME, ?) \n"})}),"\n",(0,r.jsx)(n.h2,{id:"example-2-analytic-functions",children:"Example 2: Analytic Functions"}),"\n",(0,r.jsx)(n.p,{children:"Let's look at another example using analytic functions:"}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(l.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'List<Tuple3<Book, Integer, Integer>> tuples = sqlClient\n    .createQuery(table)\n    .select(\n        table,\n        Expression.numeric().sql(\n            Integer.class,\n            // highlight-next-line\n            "rank() over(order by %e desc)",\n            table.price()\n        ),\n        Expression.numeric().sql(\n            Integer.class,\n            // highlight-next-line\n            "rank() over(partition by %e order by %e desc)",\n            new Expression[] { table.storeId(), table.price() }\n        )\n    )\n    .execute();\n'})})}),(0,r.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'val tuples = sqlClient\n    .createQuery(Author::class) {\n        select(\n            table,\n            // highlight-next-line\n            sql(Int::class, "rank() over(order by %e desc)") {\n                expression(table.price)\n            },\n            // highlight-next-line\n            sql("rank() over(partition by %e order by %e desc)") {\n                expression(table.store.id)\n                expression(table.price)\n            }\n        )\n    }\n    .execute()\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"Three columns are queried here:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"First column: Book object"}),"\n",(0,r.jsx)(n.li,{children:"Second column: The rank of the book price among all books"}),"\n",(0,r.jsx)(n.li,{children:"Third column: The rank of the book price within its store"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The generated SQL is:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID,\n    /* highlight-next-line */\n    rank() over(\n        order by tb_1_.PRICE desc\n    ),\n    /* highlight-next-line */ \n    rank() over(\n        partition by tb_1_.STORE_ID\n        order by tb_1_.PRICE desc \n    )\nfrom BOOK tb_1_\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>_});var r=t(96540),s=t(18215),a=t(23104),l=t(56347),i=t(205),o=t(57485),c=t(31682),u=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,d]=x({queryString:t,groupId:s}),[b,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,u.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),v=(()=>{const e=c??b;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),s=i[t].value;s!==r&&(c(n),l(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=b(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,f.jsx)(g,{...n,...e}),(0,f.jsx)(j,{...n,...e})]})}function _(e){const n=(0,m.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var r=t(96540);const s={},a=r.createContext(s);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);