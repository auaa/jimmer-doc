"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2539],{89485:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=a(74848),r=a(28453),s=a(11470),o=a(19365);const i={sidebar_position:2,title:"2.2 More Associations"},l=void 0,c={id:"showcase/fetch-association/more-association",title:"2.2 More Associations",description:"Query Dynamic Entities",source:"@site/docs/showcase/fetch-association/more-association.mdx",sourceDirName:"showcase/fetch-association",slug:"/showcase/fetch-association/more-association",permalink:"/jimmer-doc/docs/showcase/fetch-association/more-association",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/showcase/fetch-association/more-association.mdx",tags:[],version:"current",lastUpdatedAt:1722888025e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"2.2 More Associations"},sidebar:"tutorialSidebar",previous:{title:"2.1 Associated Object",permalink:"/jimmer-doc/docs/showcase/fetch-association/associated-object"},next:{title:"2.4 Associated Id",permalink:"/jimmer-doc/docs/showcase/fetch-association/associated-id"}},u={},d=[{value:"Query Dynamic Entities",id:"query-dynamic-entities",level:2},{value:"Query Static DTO",id:"query-static-dto",level:2}];function h(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"query-dynamic-entities",children:"Query Dynamic Entities"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'BookTable table = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("Learning GraphQL"))\n    .orderBy(table.edition().desc())\n    .select(\n        table.fetch(\n            BookFetcher.$\n                .allScalarFields()\n                .store( \u2776\n                    BookStoreFetcher.$\n                        .allScalarFields()\n                )\n                .authors( \u2777\n                    AuthorFetcher.$\n                        .allScalarFields()\n                )\n        )\n    )\n    .execute();\n'})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.name  eq "Learning GraphQL")\n        orderBy(table.edition.desc())\n        select(\n            table.fetchBy {\n                allScalarFields()\n                store { \u2776\n                    allScalarFields()\n                }\n                authors { \u2777\n                    allScalarFields()\n                }\n            }\n        )\n    }\n    .execute()\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"The result is"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "id":3,\n        "name":"Learning GraphQL",\n        "edition":3,\n        "price":51,\n        "store":{ \u2776\n            "id":1,\n            "name":"O\'REILLY",\n            "website":null\n        },\n        "authors":[ \u2777\n            {\n                "id":2,\n                "firstName":"Alex",\n                "lastName":"Banks",\n                "gender":"MALE"\n            },\n            {\n                "id":1,\n                "firstName":"Eve",\n                "lastName":"Procello",\n                "gender":"FEMALE"\n            }\n        ]\n    },\n    {\n        "id":2,\n        "name":"Learning GraphQL",\n        "edition":2,\n        "price":55,\n        "store":{ \u2776\n            "id":1,\n            "name":"O\'REILLY",\n            "website":null\n        },\n        "authors":[ \u2777\n            {\n                "id":2,\n                "firstName":"Alex",\n                "lastName":"Banks",\n                "gender":"MALE"\n            },\n            {\n                "id":1,\n                "firstName":"Eve",\n                "lastName":"Procello",\n                "gender":"FEMALE"\n            }\n        ]\n    },\n    {\n        "id":1,\n        "name":"Learning GraphQL",\n        "edition":1,\n        "price":50,\n        "store":{ \u2776\n            "id":1,\n            "name":"O\'REILLY",\n            "website":null\n        },\n        "authors":[ \u2777\n            {\n                "id":2,\n                "firstName":"Alex",\n                "lastName":"Banks",\n                "gender":"MALE"\n            },\n            {\n                "id":1,\n                "firstName":"Eve",\n                "lastName":"Procello",\n                "gender":"FEMALE"\n            }\n        ]\n    }\n]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"query-static-dto",children:"Query Static DTO"}),"\n",(0,t.jsxs)(n.p,{children:["Create any file with the ",(0,t.jsx)(n.code,{children:"dto"})," extension under the ",(0,t.jsx)(n.code,{children:"src/main/dto"})," folder, and edit the code as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"export com.yourcompany.yourproject.model.Book\n    -> package com.yourcompany.yourproject.model.dto\n\nBookView {\n    #allScalars(this)\n    store { \u2776\n        #allScalars(this)\n    }\n    authors { \u2777\n        #allScalars(this)\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Compile the project, a java/kotlin class named ",(0,t.jsx)(n.code,{children:"BookView"})," will be automatically generated."]}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'BookTable table = BookTable.$;\n\nList<BookView> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("Learning GraphQL"))\n    .orderBy(table.edition().desc())\n    .select(\n        table.fetch(BookView.class)\n    )\n    .execute();\n'})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.name  eq "Learning GraphQL")\n        orderBy(table.edition.desc())\n        select(\n            table.fetch(BookView::class)\n        )\n    }\n    .execute()\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"The result is"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"[\n    BookView(\n        id=1, \n        name=Learning GraphQL, \n        edition=1, \n        price=50.00, \n        store=BookView.TargetOf_store( \u2776\n            id=1, \n            name=O'REILLY, \n            website=null\n        ), \n        authors=[ \u2777\n            BookView.TargetOf_authors(\n                id=2, \n                firstName=Alex, \n                lastName=Banks, \n                gender=MALE\n            ), \n            BookView.TargetOf_authors(\n                id=1, \n                firstName=Eve, \n                lastName=Procello, \n                gender=FEMALE\n            )\n        ]\n    ), \n    BookView(\n        id=2, \n        name=Learning GraphQL, \n        edition=2, \n        price=55.00, \n        store=BookView.TargetOf_store( \u2776\n            id=1, \n            name=O'REILLY, \n            website=null\n        ), \n        authors=[ \u2777\n            BookView.TargetOf_authors(\n                id=2, \n                firstName=Alex, \n                lastName=Banks, \n                gender=MALE\n            ), \n            BookView.TargetOf_authors(\n                id=1, \n                firstName=Eve, \n                lastName=Procello, \n                gender=FEMALE\n            )\n        ]\n    ), \n    BookView(\n        id=3, \n        name=Learning GraphQL, \n        edition=3, \n        price=51.00, \n        store=BookView.TargetOf_store( \u2776\n            id=1, \n            name=O'REILLY, \n            website=null\n        ), \n        authors=[ \u2777\n            BookView.TargetOf_authors(\n                id=2, \n                firstName=Alex, \n                lastName=Banks, \n                gender=MALE\n            ), \n            BookView.TargetOf_authors(\n                id=1, \n                firstName=Eve, \n                lastName=Procello, \n                gender=FEMALE\n            )\n        ]\n    )\n]\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>o});a(96540);var t=a(18215);const r={tabItem:"tabItem_Ymn6"};var s=a(74848);function o(e){let{children:n,hidden:a,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,o),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>j});var t=a(96540),r=a(18215),s=a(23104),o=a(56347),i=a(205),l=a(57485),c=a(31682),u=a(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const r=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=h(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,d]=p({queryString:a,groupId:r}),[f,b]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),g=(()=>{const e=c??f;return m({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function x(e){let{className:n,block:a,selectedValue:t,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,a=l.indexOf(n),r=i[a].value;r!==t&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function k(e){let{lazy:n,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(k,{...n,...e})]})}function j(e){const n=(0,b.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>i});var t=a(96540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);