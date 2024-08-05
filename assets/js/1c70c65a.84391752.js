"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1119],{16719:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var t=i(74848),o=i(28453),r=i(11470),l=i(19365);const a={sidebar_position:5,title:"Real and Fake Foreign Keys"},s=void 0,c={id:"mapping/base/foreignkey",title:"Real and Fake Foreign Keys",description:"Through the discussion of Association Mapping, we know that association mapping requires a lot of foreign keys.",source:"@site/docs/mapping/base/foreignkey.mdx",sourceDirName:"mapping/base",slug:"/mapping/base/foreignkey",permalink:"/jimmer-doc/docs/mapping/base/foreignkey",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/base/foreignkey.mdx",tags:[],version:"current",lastUpdatedAt:1722888025e3,sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Real and Fake Foreign Keys"},sidebar:"tutorialSidebar",previous:{title:"Naming Strategy",permalink:"/jimmer-doc/docs/mapping/base/naming-strategy"},next:{title:"JSON Converter",permalink:"/jimmer-doc/docs/mapping/base/json-converter"}},d={},u=[{value:"Explicitly specify real foreign key",id:"explicitly-specify-real-foreign-key",level:2},{value:"Explicitly specify fake foreign key",id:"explicitly-specify-fake-foreign-key",level:2},{value:"Do not explicitly specify the authenticity of foreign keys",id:"do-not-explicitly-specify-the-authenticity-of-foreign-keys",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Through the discussion of ",(0,t.jsx)(n.a,{href:"./association",children:"Association Mapping"}),", we know that association mapping requires a lot of foreign keys."]}),"\n",(0,t.jsx)(n.p,{children:"There are two types of foreign keys in Jimmer:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Real foreign key:"}),"\n",(0,t.jsx)(n.p,{children:"There is a corresponding foreign key constraint in the database."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fake foreign key:"}),"\n",(0,t.jsx)(n.p,{children:"It is a foreign key in the developer's mind, but there is no corresponding foreign key constraint in the database."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsx)(n.p,{children:"When saving data:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Real foreign keys rely on the ability of relational databases themselves to ensure referential integrity."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fake foreign keys rely on additional checks inserted by the ORM in the upper layer code to ensure referential integrity."}),"\n"]}),"\n"]}),(0,t.jsx)(n.p,{children:"This difference is transparent to the user. The user only needs to configure the authenticity of the foreign key without modifying the business code."})]}),"\n",(0,t.jsx)(n.h2,{id:"explicitly-specify-real-foreign-key",children:"Explicitly specify real foreign key"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Association property based on foreign key"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(l.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity\npublic interface Book {\n\n    @ManyToOne  \n    // highlight-next-line\n    @JoinColumn(foreignKeyType = ForeignKeyType.REAL)\n    BookStore store();\n\n    ...Omit other code...\n}\n"})})}),(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Entity\ninterface Book {\n    \n    @ManyToOne\n    // highlight-next-line  \n    @JoinColumn(foreignKeyType = ForeignKeyType.REAL)\n    val store: BookStore\n\n    ...Omit other code...\n}\n"})})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Association property based on join table"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(l.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        // highlight-next-line\n        joinColumns = {@JoinColumn(foreignKeyType = ForeignKeyType.REAL)},\n        // highlight-next-line\n        inverseJoinColumns = {@JoinColumn(foreignKeyType = ForeignKeyType.REAL)}\n    )\n    List<Author> authors();\n\n    ...Omit other code...\n}\n"})})}),(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Entity\ninterface Book {\n    \n    @ManyToMany\n    @JoinTable(\n        // highlight-next-line\n        joinColumns = [JoinColumn(foreignKeyType = ForeignKeyType.REAL)],\n        // highlight-next-line\n        inverseJoinColumns = [JoinColumn(foreignKeyType = ForeignKeyType.REAL)]\n    )\n    val authors: List<Author>\n    \n    ...Omit other code...\n}\n"})})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsx)(n.p,{children:"Different from previous examples:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure ",(0,t.jsx)(n.code,{children:"JoinTable.joinColumns"})," instead of ",(0,t.jsx)(n.code,{children:"JoinTable.joinColumnName"})]}),"\n",(0,t.jsxs)(n.p,{children:["If the foreign key has only one column and the authenticity does not need to be explicitly specified, ",(0,t.jsx)(n.code,{children:"joinColumnName"})," is a simplified configuration. Otherwise, ",(0,t.jsx)(n.code,{children:"joinColumns"})," should be used."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure ",(0,t.jsx)(n.code,{children:"JoinTable.inverseJoinColumns"})," instead of ",(0,t.jsx)(n.code,{children:"JoinTable.inverseJoinColumnName"})]}),"\n",(0,t.jsxs)(n.p,{children:["If the foreign key has only one column and the authenticity does not need to be explicitly specified, ",(0,t.jsx)(n.code,{children:"inverseJoinColumnName"})," is a simplified configuration. Otherwise, ",(0,t.jsx)(n.code,{children:"inverseJoinColumns"})," should be used."]}),"\n"]}),"\n"]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.p,{children:["If the database dialect does not support foreign keys (e.g. ",(0,t.jsx)(n.code,{children:"org.babyfish.jimmer.sql.dialect.TiDBDialect"}),"), real foreign keys cannot be explicitly specified."]}),(0,t.jsx)(n.p,{children:"This is because TiDB, as a distributed relational database, does not support foreign key constraints."})]}),"\n",(0,t.jsx)(n.h2,{id:"explicitly-specify-fake-foreign-key",children:"Explicitly specify fake foreign key"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Association property based on foreign key"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(l.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity\npublic interface Book {\n\n    @ManyToOne\n    @Nullable\n    // highlight-next-line\n    @JoinColumn(foreignKeyType = ForeignKeyType.FAKE)\n    BookStore store();\n\n    ...Omit other code...\n}\n"})})}),(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Entity\ninterface Book {\n    \n    @ManyToOne\n    // highlight-next-line\n    @JoinColumn(foreignKeyType = ForeignKeyType.FAKE)\n    val store: BookStore?\n\n    ...Omit other code...\n}\n"})})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Association property based on join table"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(l.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        // highlight-next-line\n        joinColumns = @JoinColumn(foreignKeyType = ForeignKeyType.FAKE),\n        // highlight-next-line\n        inverseJoinColumns = @JoinColumn(foreignKeyType = ForeignKeyType.FAKE)\n    )\n    List<Author> authors();\n\n    ...Omit other code...\n}\n"})})}),(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Entity\ninterface Book {\n    \n    @ManyToMany\n    // highlight-next-line\n    @JoinTable(\n        // highlight-next-line\n        joinColumns = @JoinColumn(foreignKeyType = ForeignKeyType.FAKE),\n        // highlight-next-line\n        inverseJoinColumns = @JoinColumn(foreignKeyType = ForeignKeyType.FAKE)\n    )\n    val authors: List<Author>\n    \n    ...Omit other code...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"do-not-explicitly-specify-the-authenticity-of-foreign-keys",children:"Do not explicitly specify the authenticity of foreign keys"}),"\n",(0,t.jsxs)(n.p,{children:["To avoid explicitly specifying the authenticity of foreign keys, use ",(0,t.jsx)(n.code,{children:"@JoinColumn(foreignKeyType = ForeignKeyType.AUTO)"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Since ",(0,t.jsx)(n.code,{children:"ForeignKeyType.AUTO"})," is the default configuration for the ",(0,t.jsx)(n.code,{children:"@JoinColumn"})," annotation, an even better choice is to make no configuration at all."]}),"\n",(0,t.jsxs)(n.p,{children:["Therefore, the code is no different from the sample code in ",(0,t.jsx)(n.a,{href:"./association",children:"Association Mapping"}),", so there is no need for sample code here."]}),"\n",(0,t.jsx)(n.p,{children:"If the authenticity of the foreign key is not explicitly specified, whether the foreign key is real or fake is automatically determined by the following two steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If the database dialect does not support foreign keys (e.g. ",(0,t.jsx)(n.code,{children:"org.babyfish.jimmer.sql.dialect.TiDBDialect"}),"), it is determined to be a fake foreign key."]}),"\n",(0,t.jsx)(n.p,{children:"At this point, the judgment is completed and it returns early without executing step 2."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If step 1 cannot complete the determination, check Jimmer's global configuration ",(0,t.jsx)(n.code,{children:"foreign-key-enabled-by-default"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"If this configuration is true, it is determined to be a real foreign key; otherwise, it is determined to be a fake foreign key."}),"\n",(0,t.jsx)(n.p,{children:"The default value of this configuration is true. Users can override it to false:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"When using SpringBoot"}),"\n",(0,t.jsxs)(n.p,{children:["Modify ",(0,t.jsx)(n.code,{children:"application.yml"})," or ",(0,t.jsx)(n.code,{children:"application.properties"})," and set ",(0,t.jsx)(n.code,{children:"jimmer.foreign-key-enabled-by-default"})," to false"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"When not using SpringBoot"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(l.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    // highlight-next-line\n    .setForeignKeyEnabledByDefault(false)\n    ...Omit other configurations...\n    .build();\n"})})}),(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = newKSqlClient {\n    // highlight-next-line\n    setForeignKeyEnabledByDefault(false)\n    ...Omit other configurations...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,i)=>{i.d(n,{A:()=>l});i(96540);var t=i(18215);const o={tabItem:"tabItem_Ymn6"};var r=i(74848);function l(e){let{children:n,hidden:i,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,l),hidden:i,children:n})}},11470:(e,n,i)=>{i.d(n,{A:()=>v});var t=i(96540),o=i(18215),r=i(23104),l=i(56347),a=i(205),s=i(57485),c=i(31682),d=i(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:o}}=e;return{value:n,label:i,attributes:t,default:o}}))}(i);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function p(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:i}=e;const o=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,s.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function f(e){const{defaultValue:n,queryString:i=!1,groupId:o}=e,r=h(e),[l,s]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[c,u]=g({queryString:i,groupId:o}),[f,y]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,d.Dv)(i);return[o,(0,t.useCallback)((e=>{i&&r.set(e)}),[i,r])]}({groupId:o}),m=(()=>{const e=c??f;return p({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{m&&s(m)}),[m]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),y(e)}),[u,y,r]),tabValues:r}}var y=i(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=i(74848);function j(e){let{className:n,block:i,selectedValue:t,selectValue:l,tabValues:a}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,i=s.indexOf(n),o=a[i].value;o!==t&&(c(n),l(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=s.indexOf(e.currentTarget)+1;n=s[i]??s[0];break}case"ArrowLeft":{const i=s.indexOf(e.currentTarget)-1;n=s[i]??s[s.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":i},n),children:a.map((e=>{let{value:n,label:i,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>s.push(e),onKeyDown:u,onClick:d,...r,className:(0,o.A)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function b(e){let{lazy:n,children:i,selectedValue:o}=e;const r=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function k(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,o.A)("tabs-container",m.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(b,{...n,...e})]})}function v(e){const n=(0,y.A)();return(0,x.jsx)(k,{...e,children:u(e.children)},String(n))}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var t=i(96540);const o={},r=t.createContext(o);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);