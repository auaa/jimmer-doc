"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[555],{39818:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=t(74848),r=t(28453),i=t(11470),o=t(19365);const s={sidebar_position:3,title:"Multiple DataSources"},l=void 0,c={id:"configuration/multi-datasources",title:"Multiple DataSources",description:"In Jimmer, each data source corresponds to a sqlClient object (whose type is JSqlClient or KSqlClient).",source:"@site/docs/configuration/multi-datasources.mdx",sourceDirName:"configuration",slug:"/configuration/multi-datasources",permalink:"/jimmer-doc/docs/configuration/multi-datasources",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/configuration/multi-datasources.mdx",tags:[],version:"current",lastUpdatedAt:1722888025e3,sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Multiple DataSources"},sidebar:"tutorialSidebar",previous:{title:"Connection Manager",permalink:"/jimmer-doc/docs/configuration/connection-manager"},next:{title:"Batch Control",permalink:"/jimmer-doc/docs/configuration/batch-size"}},u={},d=[{value:"Distributed Transaction Mode",id:"distributed-transaction-mode",level:2},{value:"Local Transaction Mode",id:"local-transaction-mode",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["In Jimmer, each data source corresponds to a ",(0,a.jsx)(n.code,{children:"sqlClient"})," object ",(0,a.jsxs)(n.em,{children:["(whose type is ",(0,a.jsx)(n.code,{children:"JSqlClient"})," or ",(0,a.jsx)(n.code,{children:"KSqlClient"}),")"]}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["For the most classic single data source case, one ",(0,a.jsx)(n.code,{children:"sqlClient"})," object is sufficient. Even the Jimmer Spring Boot Starter can automatically create a single ",(0,a.jsx)(n.code,{children:"sqlClient"})," object."]}),"\n",(0,a.jsxs)(n.p,{children:["For multiple data sources, developers need to manually create multiple ",(0,a.jsx)(n.code,{children:"sqlClient"})," objects."]}),"\n",(0,a.jsx)(n.p,{children:"For the Jimmer Spring Boot Starter, the support for multiple data sources falls into two cases:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Distributed Transaction Mode"}),"\n",(0,a.jsx)(n.li,{children:"Local Transaction Mode"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"distributed-transaction-mode",children:"Distributed Transaction Mode"}),"\n",(0,a.jsxs)(n.p,{children:["Here, distributed transactions refer to using ",(0,a.jsx)(n.a,{href:"https://docs.spring.io/spring-boot/docs/2.1.13.RELEASE/reference/html/boot-features-jta.html",children:"Spring's support for JTA transactions"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["In this mode, simply create multiple ",(0,a.jsx)(n.code,{children:"sqlClient"})," objects."]}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import org.springframework.beans.factory.annotation.Qualifier;\nimport org.babyfish.jimmer.spring.SpringClients;\n\n@configuration\npublic class SqlClientConfig {\n\n    @Bean\n    public JSqlClient sqlClient1(\n        ApplicationContext ctx,\n        @Qualifier("ds1") DataSource dataSource\n    ) {\n        return SqlClients.java(ctx, dataSoruce, null);\n    }\n\n    @Bean\n    public JSqlClient sqlClient2(\n        ApplicationContext ctx,\n        @Qualifier("ds2") DataSource dataSource\n    ) {\n        return SqlClients.java(ctx, dataSoruce, null);\n    }\n}\n'})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'import org.springframework.beans.factory.annotation.Qualifier\nimport org.babyfish.jimmer.spring.SpringClients\n\n@configuration\nclass SqlClientConfig {\n\n    @Bean\n    public fun sqlClient1(\n        ctx: ApplicationContext,\n        @Qualifier("ds1") dataSource: DataSource\n    ): KSqlClient =\n        SqlClients.kotlin(ctx, dataSoruce)\n\n    @Bean\n    public fun sqlClient2(\n        ctx: ApplicationContext,\n        @Qualifier("ds2") dataSource: DataSource\n    ): KSqlClient =\n        SqlClients.kotlin(ctx, dataSoruce)\n}\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Then, developers can freely use any of the ",(0,a.jsx)(n.code,{children:"sqlClient"})," objects. Even if two data sources are operated within a transaction, the JTA transaction will ensure consistency between them."]}),"\n",(0,a.jsx)(n.h2,{id:"local-transaction-mode",children:"Local Transaction Mode"}),"\n",(0,a.jsx)(n.p,{children:"Local transactions are slightly different, let's first look at the code:"}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import org.springframework.beans.factory.annotation.Qualifier;\nimport org.springframework.transaction.support.PlatformTransactionManager;\nimport org.babyfish.jimmer.spring.SpringClients;\n// highlight-next-line\nimport org.babyfish.jimmer.spring.transaction.JimmerTransactionManager;\n// highlight-next-line\nimport org.babyfish.jimmer.spring.transaction.TransactionalSqlClients;\n\n@configuration\npublic class SqlClientConfig {\n\n    @Bean\n    public PlatformTransactionManager tm1( \u2776\n        ApplicationContext ctx,\n        @Qualifier("ds1") DataSource dataSource\n    ) {\n        return new JimmerTransactionManager(\n            SqlClients.java(ctx, dataSoruce, null)\n        );\n    }\n\n    @Bean\n    public PlatformTransactionManager tm2(  \u2777\n        ApplicationContext ctx,\n        @Qualifier("ds2") DataSource dataSource\n    ) {\n        return new JimmerTransactionManager(\n            SqlClients.java(ctx, dataSoruce, null)\n        );\n    }\n\n    @Bean\n    public JSqlClient sqlClient() {  \u2778\n        TransactionalSqlClients.java();\n    }\n}\n'})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'import org.springframework.beans.factory.annotation.Qualifier\nimport org.springframework.transaction.support.PlatformTransactionManager\nimport org.babyfish.jimmer.spring.SpringClients\n// highlight-next-line\nimport org.babyfish.jimmer.spring.transaction.JimmerTransactionManager\n// highlight-next-line\nimport org.babyfish.jimmer.spring.transaction.TransactionalSqlClients\n\n@configuration\npublic class SqlClientConfig {\n\n    @Bean\n    fun tm1(\n        ctx: ApplicationContext,\n        @Qualifier("ds1") dataSource: DataSource\n    ): PlatformTransactionManager = \u2776\n        JimmerTransactionManager(\n            SqlClients.kotlin(ctx, dataSoruce, null)\n        )\n\n    @Bean\n    fun tm2(  \n        ctx: ApplicationContext,\n        @Qualifier("ds2") dataSource: DataSource\n    ): PlatformTransactionManager = \u2777\n        JimmerTransactionManager(\n            SqlClients.kotlin(ctx, dataSoruce, null)\n        )\n\n    @Bean\n    public JSqlClient sqlClient() = \u2778\n        TransactionalSqlClients.kotlin()\n}\n'})})})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u2776 Create the first transaction manager based on the first ",(0,a.jsx)(n.code,{children:"DataSource"}),", note that:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["The transaction manager type is ",(0,a.jsx)(n.code,{children:"org.babyfish.jimmer.spring.transaction.JimmerTransactionManager"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Although the internal code creates a ",(0,a.jsx)(n.code,{children:"sqlClient"})," object, it is not exposed to the Spring context, but is held and hidden by the transaction manager."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u2777 Create the second transaction manager based on the second ",(0,a.jsx)(n.code,{children:"DataSource"}),", same as \u2776, no need to repeat."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u2778 Create a ",(0,a.jsx)(n.code,{children:"sqlClient"})," proxy and expose it to the Spring context for developers to inject and use."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["For any business method that needs to operate Jimmer, the annotation ",(0,a.jsx)(n.code,{children:'@Transactional("tm1")'})," or ",(0,a.jsx)(n.code,{children:'@Transactional("tm2")'})," must be used, so that Jimmer can be told which ",(0,a.jsx)(n.code,{children:"JimmerTransactionManager"})," the current business method is using. Otherwise, using the \u2778 ",(0,a.jsx)(n.code,{children:"sqlClient"})," proxy will result in the following exception:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'The transactional sql client is used, \nhowever, there is no AOP transaction, or the transaction manager is not \n"org.babyfish.jimmer.spring.transaction.JimmerTransactionManager"\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Once Jimmer understands that the current thread is using one of the transaction managers from \u2776 and \u2777, the \u2778 ",(0,a.jsx)(n.code,{children:"sqlClient"})," proxy will use the internal ",(0,a.jsx)(n.code,{children:"sqlClient"})," of the corresponding ",(0,a.jsx)(n.code,{children:"JimmerTransactionManager"})," from \u2776 or \u2777 to provide services for the user."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["That is, in the local transaction mode, although multiple ",(0,a.jsx)(n.code,{children:"sqlClient"})," objects can be created, the business method must explicitly specify which data source to use through the Spring annotation ",(0,a.jsx)(n.code,{children:"@Transactional(transactionManagerRef)"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(18215);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>v});var a=t(96540),r=t(18215),i=t(23104),o=t(56347),s=t(205),l=t(57485),c=t(31682),u=t(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,d]=m({queryString:t,groupId:r}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),b=(()=>{const e=c??f;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function j(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),r=s[t].value;r!==a&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function S(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function C(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(S,{...n,...e})]})}function v(e){const n=(0,g.A)();return(0,x.jsx)(C,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(96540);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);