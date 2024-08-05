"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7162],{26567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=n(74848),r=n(28453),s=n(11470),i=n(19365);const a={sidebar_position:9,title:"Other Features"},l=void 0,c={id:"mutation/save-command/other",title:"Other Features",description:"Save Command Result",source:"@site/docs/mutation/save-command/other.mdx",sourceDirName:"mutation/save-command",slug:"/mutation/save-command/other",permalink:"/jimmer-doc/docs/mutation/save-command/other",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/save-command/other.mdx",tags:[],version:"current",lastUpdatedAt:1722888025e3,sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Other Features"},sidebar:"tutorialSidebar",previous:{title:"Optimistic/Pessimistic Lock",permalink:"/jimmer-doc/docs/mutation/save-command/lock"},next:{title:"Input DTO",permalink:"/jimmer-doc/docs/mutation/save-command/input-dto/"}},d={},u=[{value:"Save Command Result",id:"save-command-result",level:2}];function h(e){const t={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"save-command-result",children:"Save Command Result"}),"\n",(0,o.jsxs)(t.p,{children:["The result returned by a save command is an object, e.g. ",(0,o.jsx)(t.code,{children:"SimpleSaveResult<E>/KSimpleSaveResult<E>"})," for the ",(0,o.jsx)(t.code,{children:"save"})," method that saves a single object."]}),"\n",(0,o.jsx)(t.p,{children:"The result supports the following behaviors:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"originalEntity"})," property: Returns the original parameter passed to the ",(0,o.jsx)(t.code,{children:"save"})," method by the developer."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"modifiedEntity"})," property: A data structure identical in shape to ",(0,o.jsx)(t.code,{children:"originalEntity"}),", with the differences:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["If ",(0,o.jsx)(t.code,{children:"originalEntity"})," contains some objects without id properties that rely on id generation strategies ",(0,o.jsx)(t.em,{children:"(e.g. auto increment, sequence, UUID, snowflake id etc.)"}),", the corresponding objects in ",(0,o.jsx)(t.code,{children:"modifiedEntity"})," will necessarily have the id property set to the value automatically assigned by the database/application."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["If some objects belong to entity types with optimistic locking fields, the ",(0,o.jsx)(t.code,{children:"version"})," properties of the corresponding objects in ",(0,o.jsx)(t.code,{children:"modifiedEntity"})," will have the latest version number after modification."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"modifiedEntity"})," is discussed many times in previous docs, so is not elaborated here."]})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"totalAffectedRowCount"})," property: The execution of a save command may modify multiple tables in the database. This property summarizes the total number of affected rows across all modified tables."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"getAffectedRowCountMap"})," property: A map of affected tables and their affected row counts."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"getAffectedRowCount"})," method, taking a parameter to get the affected row count of the specified table. Accepts two kinds of parameters:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Entity type: Gets affected row count of the table corresponding to this entity type."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Association property based on join table: Gets affected row count of the join table corresponding to this association property."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Let's look at some examples of the ",(0,o.jsx)(t.code,{children:"totalAffectedRowCount"})," property and ",(0,o.jsx)(t.code,{children:"getAffectedRowCount"})," method:"]}),"\n",(0,o.jsxs)(s.A,{groupId:"language",children:[(0,o.jsx)(i.A,{value:"java",label:"Java",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:'SimpleSaveResult<Book> result = sqlClient.update(\n        Objects.createBook(draft -> {\n            draft.setId(3L);\n            draft.setPrice(new BigDecimal("59.9"));\n            draft.addIntoAuthors(author -> author.setId(1L));\n            draft.addIntoAuthors(author -> author.setId(3L));\n            draft.addIntoAuthors(author -> {\n                author.setId(1000L); // does not exist, created automatically\n                author.setFirstName("Svetlana");\n                author.setLastName("Isakova");\n                author.setGender(Gender.FEMALE);\n            });\n        })\n);\nSystem.out.println(\n    "Total affected row count: " + \n    // highlight-next-line\n    result.getTotalAffectedRowCount() \n);\nSystem.out.println(\n    "Affected row count for entity table BOOK: " +\n    // highlight-next-line\n    result.getAffectedRowCount(Book.class)\n); \nSystem.out.println(\n    "Affected row count for entity table AUTHOR: " +\n    // highlight-next-line\n    result.getAffectedRowCount(Author.class)\n);\nSystem.out.println(\n    "Affected row count for join table BOOK_AUTHOR_MAPPING: " +\n    // highlight-next-line\n    result.getAffectedRowCount(BookProps.AUTHORS) \n);\n'})})}),(0,o.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:'val result = sqlClient.update(\n    new(Book::class).by {\n        id = 3L\n        price = BigDecimal("59.9"))\n        authors().addBy { id = 1L }\n        authors().addBy { id = 3L }\n        authors().addBy {\n            id = 1000L // does not exist, created automatically\n            firstName = "Svetlana"\n            lastName = "Isakova"\n            gender = Gender.FEMALE\n        }\n    }\n);\nprintln(\n    "Total affected row count: " +\n    // highlight-next-line\n    result.totalAffectedRowCount\n)\nprintln(\n    "Affected row count for entity table BOOK: " +\n    // highlight-next-line\n    result.getAffectedRowCount(Book::class)  \n)\nprintln(\n    "Affected row count for entity table AUTHOR: " + \n    // highlight-next-line\n    result.getAffectedRowCount(Author::class)\n)\nprintln(\n    "Affected row count for join table BOOK_AUTHOR_MAPPING: " +\n    // highlight-next-line  \n    result.getAffectedRowCount(Book::authors)\n)\n'})})})]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["The code ",(0,o.jsx)(t.code,{children:"getAffectedRowCount(BookProps.AUTHORS)"})," is equivalent to ",(0,o.jsx)(t.code,{children:"getAffectedRowCount(AuthorProps.BOOKS)"})]})}),"\n",(0,o.jsx)(t.p,{children:"The printed result is:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"Total affected row count: 5\nAffected row count for entity table BOOK: 1  \nAffected row count for entity table AUTHOR: 1\nAffected row count for join table BOOK_AUTHOR_MAPPING: 3\n"})}),"\n",(0,o.jsx)(t.p,{children:"The explanation is:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["The affected row count for table ",(0,o.jsx)(t.code,{children:"BOOK"})," is 1:"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"price"})," of the aggregate root object ",(0,o.jsx)(t.code,{children:"Book(id=3L)"})," is modified."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["The affected row count for table ",(0,o.jsx)(t.code,{children:"AUTHOR"})," is 1:"]}),"\n",(0,o.jsxs)(t.p,{children:["The associated object ",(0,o.jsx)(t.code,{children:"Author(id=1000L)"})," does not exist and is created automatically."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["The affected row count for table ",(0,o.jsx)(t.code,{children:"BOOK_AUTHOR_MAPPING"})," is 3:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Dissociation between ",(0,o.jsx)(t.code,{children:"Book(id=3L)"})," and ",(0,o.jsx)(t.code,{children:"Author(id=2L)"})," ",(0,o.jsx)(t.em,{children:"(For dissociation operations on join tables, this is deleting the association)"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["New association between ",(0,o.jsx)(t.code,{children:"Book(id=3L)"})," and ",(0,o.jsx)(t.code,{children:"Author(id=3L)"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["New association between ",(0,o.jsx)(t.code,{children:"Book(id=3L)"})," and ",(0,o.jsx)(t.code,{children:"Author(id=1000L)"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var o=n(18215);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var o=n(96540),r=n(18215),s=n(23104),i=n(56347),a=n(205),l=n(57485),c=n(31682),d=n(70679);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:s}))),[c,u]=p({queryString:n,groupId:r}),[m,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Dv)(n);return[r,(0,o.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),j=(()=>{const e=c??m;return f({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function g(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),r=a[n].value;r!==o&&(c(t),i(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,b.jsx)(g,{...t,...e}),(0,b.jsx)(v,{...t,...e})]})}function w(e){const t=(0,x.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(96540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);