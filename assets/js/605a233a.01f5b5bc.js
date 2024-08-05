"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3238],{15689:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=t(74848),r=t(28453),a=t(11470),l=t(19365);const o={sidebar_position:2,title:"Super QBE"},s=void 0,c={id:"quick-view/dsl/super_qbe",title:"Super QBE",description:"Can It Be Simpler",source:"@site/docs/quick-view/dsl/super_qbe.mdx",sourceDirName:"quick-view/dsl",slug:"/quick-view/dsl/super_qbe",permalink:"/jimmer-doc/docs/quick-view/dsl/super_qbe",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/quick-view/dsl/super_qbe.mdx",tags:[],version:"current",lastUpdatedAt:1722888025e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Super QBE"},sidebar:"tutorialSidebar",previous:{title:"Feature Introduction",permalink:"/jimmer-doc/docs/quick-view/dsl/feature"},next:{title:"Get Started",permalink:"/jimmer-doc/docs/quick-view/get-started/"}},u={},d=[{value:"Can It Be Simpler",id:"can-it-be-simpler",level:2},{value:"Define Specification DTO",id:"define-specification-dto",level:2},{value:"Generated Code",id:"generated-code",level:2},{value:"Usage",id:"usage",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"can-it-be-simpler",children:"Can It Be Simpler"}),"\n",(0,i.jsxs)(n.p,{children:["From the ",(0,i.jsx)(n.a,{href:"./feature",children:"previous article"}),", we know Jimmer SQL DSL is inherently designed for arbitrary complex dynamic queries, completely different from other frameworks' SQL DSLs that only provide strong typing experience."]}),"\n",(0,i.jsx)(n.p,{children:"But there are two issues:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["With more and more parameters introduced in the ",(0,i.jsx)(n.a,{href:"./feature",children:"previous article"}),", the method signatures become less Java-friendly. We urgently need to encapsulate all the query parameters into one object."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["I'm really lazy. I want to achieve all the capabilities introduced in the ",(0,i.jsx)(n.a,{href:"./feature",children:"previous article"}),", but I don't want to write those code. I just want to write one line of code."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Jimmer's built-in ",(0,i.jsx)(n.a,{href:"../../object/view/dto-language",children:"DTO language"})," can quickly solve the above two problems."]}),"\n",(0,i.jsx)(n.h2,{id:"define-specification-dto",children:"Define Specification DTO"}),"\n",(0,i.jsxs)(n.p,{children:["Since in the article ",(0,i.jsx)(n.a,{href:"../fetch/export/dto",children:"Query Arbitrary Shape/Exposing Features/Return Output DTO"}),", we have already had some understanding about the DTO language when introducing Output DTO, this article does not repeat it."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Install the DTO language Intellij plugin: ",(0,i.jsx)(n.a,{href:"https://github.com/ClearPlume/jimmer-dto",children:"https://github.com/ClearPlume/jimmer-dto"})," ",(0,i.jsx)(n.em,{children:"(This step is not required but highly recommended)"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a new directory ",(0,i.jsx)(n.code,{children:"src/main/dto"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a file ",(0,i.jsx)(n.code,{children:"Book.dto"})," under ",(0,i.jsx)(n.code,{children:"src/main/dto"})," and write the code below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",metastring:'title="Book.dto"',children:"export com.yourcompany.yourproject.model.Book  \n    -> package com.yourcompany.yourproject.model.dto\n\n#highlight-next-line  \nspecification BookSpecification {\n    like/i(name)\n    ge(price) // Default alias: minPrice\n    le(price) // Default alias: maxPrice \n    flat(store) {\n        as(^ -> store) { \n            like/i(name)\n            like/i(website)\n        }\n    }\n    flat(authors) {\n        like/i(firstName, lastName) as authorName\n        gender as authorGender\n    }\n}\n...Omit other DTO type definitions...\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{}),(0,i.jsxs)(n.p,{children:["Different from the Output/Input DTO we discussed before, here the query Specification DTO uses the ",(0,i.jsx)(n.code,{children:"specification"})," modifier."]}),(0,i.jsx)(n.p,{children:"The QBE functions used extensively inside this Specification DTO are self-explanatory. As this article belongs to the quick tour section, we do not explain them in detail."})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"generated-code",children:"Generated Code"}),"\n",(0,i.jsx)(n.p,{children:"After compiling the project, Jimmer will automatically generate the following code:"}),"\n",(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(l.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="BookSpecification.java"   ',children:'@GeneratedBy( \u2776\n        file = "<yourproject>/src/main/dto/Book.dto"  \n) \npublic class BookSpecification  \nimplements JSpecification<Book, BookTable> {  \u2777\n\n    @Nullable \n    private String name;\n\n    @Nullable\n    private BigDecimal minPrice;   \n\n    @Nullable\n    private BigDecimal maxPrice;\n\n    @Nullable\n    private String storeName;\n\n    @Nullable\n    private String storeWebsite;\n\n    @Nullable\n    private String authorName;\n\n    @Nullable\n    private Gender authorGender;\n\n    @Override\n    public void applyTo(SpecificationArgs<Book, BookTable> args) { \u2778\n        ...Omit complex dynamic query logic...\n    }\n\n    ...Omit getters, setters, hashCode, equals, toString...\n}\n'})})}),(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookSpecification.kt"  ',children:'@GeneratedBy( \u2776\n        file = "<yourproject>/src/main/dto/Book.dto"\n)  \ndata class BookSpecification(   \n    val name: String? = null,\n    val minPrice: BigDecimal? = null, \n    val maxPrice: BigDecimal? = null,\n    val storeName: String? = null,\n    val storeWebsite: String? = null,\n    val authorName: String? = null,\n    val authorGender: Gender? = null   \n) : KSpecification<Book> { \u2777\n\n    override applyTo(args: KSpecificationArgs<Book>) { \u2778\n        ...Omit complex dynamic query logic...\n    }\n}\n'})})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u2776 Reminds developers that this class is auto-generated by Jimmer at compile time"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u2777 Interface implemented by the Specification DTO"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u2778 This class knows how to generate SQL predicates"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(l.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="BookRepository.java"',children:"@Repository\npublic class BookRepository {\n\n    private final JSqlClient sqlClient;\n\n    public BookRepository(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient; \n    }\n\n    List<Book> findBooks(   \n        // highlight-next-line\n        BookSpecification specification,  \n        @Nullable Fetcher<Book> fetcher\n    ) {\n        BookTable table = Tables.BOOK_TABLE;   \n\n        return sqlClient\n            .createQuery(table)\n            // highlight-next-line \n            .where(specification)\n            .select(table.fetch(fetcher)) \n            .execute();\n    }  \n}\n"})})}),(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookRepository.kt" ',children:"@Repository  \nclass BookRepository(\n    private val sqlClient: KSqlClient   \n) {\n\n    fun findBooks(\n        // highlight-next-line\n        specification: BookSpecification, \n        fetcher: Fetcher<Book>? = null\n    ): List<Book> =  \n        sqlClient\n            .createQuery(Book::class) {\n                // highlight-next-line\n                where(specification) \n            }\n            .select(table.fetch(table))\n            .execute()  \n}\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"We can see that with only one line of code, complex dynamic queries can be achieved."}),"\n",(0,i.jsxs)(n.p,{children:["It has the same capabilities as the last example in the ",(0,i.jsx)(n.a,{href:"./feature",children:"previous article"}),". No need to repeat here."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var i=t(18215);const r={tabItem:"tabItem_Ymn6"};var a=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var i=t(96540),r=t(18215),a=t(23104),l=t(56347),o=t(205),s=t(57485),c=t(31682),u=t(70679);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[l,s]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[c,d]=m({queryString:t,groupId:r}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,u.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),g=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=s.indexOf(n),r=o[t].value;r!==i&&(c(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function k(e){const n=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(96540);const r={},a=i.createContext(r);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);