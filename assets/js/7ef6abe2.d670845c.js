"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[35],{13748:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var o=t(74848),n=t(28453),i=t(11470),a=t(19365);const s={sidebar_position:1,title:"Define Repository"},l=void 0,c={id:"spring/repository/concept",title:"Define Repository",description:"Jimmer integrates spring data and provides a base repository interface for Java and Kotlin users respectively.",source:"@site/docs/spring/repository/concept.mdx",sourceDirName:"spring/repository",slug:"/spring/repository/concept",permalink:"/jimmer-doc/docs/spring/repository/concept",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/spring/repository/concept.mdx",tags:[],version:"current",lastUpdatedAt:1722888025e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Define Repository"},sidebar:"tutorialSidebar",previous:{title:"Spring Data",permalink:"/jimmer-doc/docs/spring/repository/"},next:{title:"Simple Queries",permalink:"/jimmer-doc/docs/spring/repository/abstract"}},p={},u=[];function d(e){const r={admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"Jimmer integrates spring data and provides a base repository interface for Java and Kotlin users respectively."}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"Java"}),(0,o.jsx)("td",{children:"org.babyfish.jimmer.spring.repository.JRepository<E, ID>"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"Kotlin"}),(0,o.jsx)("td",{children:"org.babyfish.jimmer.spring.repository.KRepository<E, ID>"})]})]}),"\n",(0,o.jsx)(r.p,{children:"This interface has two generic parameters"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"E: Entity type"}),"\n",(0,o.jsx)(r.li,{children:"ID: Entity ID type"}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"By inheriting this interface, developers can quickly implement various Repository"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"BookStoreRepository"}),"\n",(0,o.jsxs)(i.A,{groupId:"language",children:[(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-java",metastring:'title="BookStoreRepostory.java" ',children:"package com.example.repository;\n\nimport com.example.model.BookStore;\n\nimport org.babyfish.jimmer.spring.repository.JRepository;\n\npublic interface BookRepository extends JRepository<BookStore, Long> {}\n"})})}),(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-kotlin",metastring:'title="BookStoreRepostory.kt"',children:"package com.example.repository\n\nimport com.example.model.BookStore\n\nimport org.babyfish.jimmer.spring.repository.KRepository\n\ninterface BookRepository : KRepository<BookStore, Long>\n"})})})]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"BookRepository"}),"\n",(0,o.jsxs)(i.A,{groupId:"language",children:[(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-java",metastring:'title="BookRepostory.java"',children:"package com.example.repository;\n\nimport com.example.model.Book;\n\nimport org.babyfish.jimmer.spring.repository.JRepository;\n\npublic interface BookRepository extends JRepository<Book, Long> {}\n"})})}),(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-kotlin",metastring:'title="BookRepostory.kt"',children:"package com.example.repository\n\nimport com.example.model.Book\n\nimport org.babyfish.jimmer.spring.repository.KRepository\n\ninterface BookRepository : KRepository<Book, Long>\n"})})})]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"AuthorRepository"}),"\n",(0,o.jsxs)(i.A,{groupId:"language",children:[(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-java",metastring:'title="AuthorRepostory.java"',children:"package com.example.repository;\n\nimport com.example.model.Auhtor;\n\nimport org.babyfish.jimmer.spring.repository.JRepository;\n\npublic interface AuthorRepository extends JRepository<Author, Long> {}\n"})})}),(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-kotlin",metastring:'title="AuthorRepostory.kt"',children:"package com.example.repository\n\nimport com.example.model.Author\n\nimport org.babyfish.jimmer.spring.repository.KRepository\n\ninterface AuthorRepository : KRepository<Author, Long>\n"})})})]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"TreeNodeRepository"}),"\n",(0,o.jsxs)(i.A,{groupId:"language",children:[(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-java",metastring:'title="TreeNodeRepostory.java"',children:"package com.example.repository;\n\nimport com.example.model.TreeNode;\n\nimport org.babyfish.jimmer.spring.repository.JRepository;\n\npublic interface TreeNodeRepository extends JRepository<TreeNode, Long> {}\n"})})}),(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-kotlin",metastring:'title="TreeNodeRepostory.kt"',children:"package com.example.repository\n\nimport com.example.model.TreeNode\n\nimport org.babyfish.jimmer.spring.repository.KRepository\n\ninterface TreeNodeRepository : KRepository<TreeNode, Long>\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.admonition,{type:"note",children:[(0,o.jsx)(r.p,{children:"The rest is the same as spring-data. Just define the interface and Jimmer will automatically implement these interfaces and register them in Spring."}),(0,o.jsx)(r.p,{children:"However, there is one caveat:"}),(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"By default, the package of the custom Repository must be the same as the package of the SpringBoot main class or its subpackage."}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Otherwise, you need to use ",(0,o.jsx)(r.code,{children:"@org.babyfish.jimmer.spring.repository.EnableJimmerRepositories"})," to annotate the SpringBoot main class or other Spring configuration class to explicitly specify the package where the custom Repository interface is located."]}),"\n"]}),"\n"]})]})]})}function m(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var o=t(18215);const n={tabItem:"tabItem_Ymn6"};var i=t(74848);function a(e){let{children:r,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,o.A)(n.tabItem,a),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>k});var o=t(96540),n=t(18215),i=t(23104),a=t(56347),s=t(205),l=t(57485),c=t(31682),p=t(70679);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:r,children:t}=e;return(0,o.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:t,attributes:o,default:n}}=e;return{value:r,label:t,attributes:o,default:n}}))}(t);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function m(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:t}=e;const n=(0,a.W6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(i),(0,o.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(n.location.search);r.set(i,e),n.replace({...n.location,search:r.toString()})}),[i,n])]}function g(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,i=d(e),[a,l]=(0,o.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:r,tabValues:i}))),[c,u]=h({queryString:t,groupId:n}),[g,y]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,i]=(0,p.Dv)(t);return[n,(0,o.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:n}),b=(()=>{const e=c??g;return m({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),y(e)}),[u,y,i]),tabValues:i}}var y=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function x(e){let{className:r,block:t,selectedValue:o,selectValue:a,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),p=e=>{const r=e.currentTarget,t=l.indexOf(r),n=s[t].value;n!==o&&(c(r),a(n))},u=e=>{let r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},r),children:s.map((e=>{let{value:r,label:t,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:o===r?0:-1,"aria-selected":o===r,ref:e=>l.push(e),onKeyDown:u,onClick:p,...i,className:(0,n.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":o===r}),children:t??r},r)}))})}function j(e){let{lazy:r,children:t,selectedValue:n}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,o.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function v(e){const r=g(e);return(0,f.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,f.jsx)(x,{...r,...e}),(0,f.jsx)(j,{...r,...e})]})}function k(e){const r=(0,y.A)();return(0,f.jsx)(v,{...e,children:u(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>s});var o=t(96540);const n={},i=o.createContext(n);function a(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);