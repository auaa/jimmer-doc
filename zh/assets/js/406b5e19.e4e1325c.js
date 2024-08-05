"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6627],{82662:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=r(74848),t=r(28453),i=r(11470),l=r(19365);const s={sidebar_position:10,title:"\u8fdc\u7a0b\u5173\u8054"},o=void 0,c={id:"mapping/advanced/remote",title:"\u8fdc\u7a0b\u5173\u8054",description:"\u8fdc\u7a0b\u5173\u8054\u662fJimmer\u548c\u5fae\u670d\u52a1\u6280\u672f\u4f53\u7cfb\u76f8\u7ed3\u5408\u540e\u7684\u4ea7\u7269\uff0c\u4f1a\u5728Spring Cloud\u548c\u8fdc\u7a0b\u5173\u8054\u4e2d\u8be6\u7ec6\u4ecb\u7ecd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/remote.mdx",sourceDirName:"mapping/advanced",slug:"/mapping/advanced/remote",permalink:"/jimmer-doc/zh/docs/mapping/advanced/remote",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/remote.mdx",tags:[],version:"current",lastUpdatedAt:1722888025e3,sidebarPosition:10,frontMatter:{sidebar_position:10,title:"\u8fdc\u7a0b\u5173\u8054"},sidebar:"tutorialSidebar",previous:{title:"Key",permalink:"/jimmer-doc/zh/docs/mapping/advanced/key"},next:{title:"OnDissociate",permalink:"/jimmer-doc/zh/docs/mapping/advanced/on-dissociate"}},d={},u=[{value:"@Entity",id:"entity",level:2},{value:"@MappedSuperclass",id:"mappedsuperclass",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsxs)(n.p,{children:["\u8fdc\u7a0b\u5173\u8054\u662fJimmer\u548c\u5fae\u670d\u52a1\u6280\u672f\u4f53\u7cfb\u76f8\u7ed3\u5408\u540e\u7684\u4ea7\u7269\uff0c\u4f1a\u5728",(0,a.jsx)(n.a,{href:"../../spring/spring-cloud",children:"Spring Cloud\u548c\u8fdc\u7a0b\u5173\u8054"}),"\u4e2d\u8be6\u7ec6\u4ecb\u7ecd\u3002"]}),(0,a.jsx)(n.p,{children:"\u672c\u6587\u7684\u76ee\u7684\u5e76\u975e\u7cfb\u7edf\u6027\u8bb2\u89e3\u8fdc\u7a0b\u5173\u8054\uff0c\u4ec5\u4ec5\u4ecb\u7ecd\u8fdc\u7a0b\u5173\u8054\u6240\u9700\u6620\u5c04\u914d\u7f6e\u3002"})]}),"\n",(0,a.jsx)(n.h2,{id:"entity",children:"@Entity"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"@Entity"}),"\u6ce8\u89e3\u5177\u5907\u53ef\u9009\u53c2\u6570",(0,a.jsx)(n.code,{children:"microServiceName"}),'\uff0c\u9ed8\u8ba4\u4e3a""\u3002']}),"\n",(0,a.jsxs)(n.p,{children:["\u5173\u8054\u5c5e\u6027\u6d89\u53ca\u4e24\u4e2a\u5b9e\u4f53\u7c7b\u578b\uff0c\u56e0\u4e3a\u5173\u8054\u5fc5\u7136\u4ece\u6e90\u5934\u65b9\u6307\u5411\u76ee\u6807\u65b9 ",(0,a.jsx)(n.em,{children:"(\u81ea\u5173\u8054\u5c5e\u6027\u6bd4\u8f83\u7279\u6b8a\uff0c\u6e90\u5934\u65b9\u548c\u76ee\u6807\u65b9\u91cd\u5408)"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u5982\u679c\u5173\u8054\u5c5e\u6027\u7684\u6e90\u5b9e\u4f53\u548c\u76ee\u6807\u5b9e\u4f53\u7684",(0,a.jsx)(n.code,{children:"microServiceName"}),"\u76f8\u7b49\uff0c\u5219\u8be5\u5173\u8054\u4e3a\u672c\u5730\u5173\u8054 ",(0,a.jsxs)(n.em,{children:["\uff08\u672c\u6587\u4e4b\u524d\u6240\u6709\u4f8b\u5b50\u4e2d\u7684\u5b9e\u4f53\u90fd\u91c7\u7528\u9ed8\u8ba4\u7684",(0,a.jsx)(n.code,{children:"microServiceName"}),"\uff0c\u56e0\u6b64\u90fd\u662f\u672c\u5730\u5173\u8054\uff09"]})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u5982\u679c\u5173\u8054\u5c5e\u6027\u7684\u6e90\u5b9e\u4f53\u548c\u76ee\u6807\u5b9e\u4f53\u7684",(0,a.jsx)(n.code,{children:"microServiceName"}),"\u4e0d\u76f8\u7b49\uff0c\u5219\u8be5\u5173\u8054\u4e3a\u8fdc\u7a0b\u5173\u8054\u3002"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u4f8b\u5982"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u4e3b\u52a8\u65b9 ",(0,a.jsx)(n.em,{children:"(\u5fc5\u9700)"}),": ",(0,a.jsx)(n.code,{children:"Book.authors"})]}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(l.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:'// highlight-next-line\n@Entity(microServiceName = "book-service")\npublic interface Book {\n\n    @ManyToMany\n    List<Author> authors();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'})})}),(0,a.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Book.kt"',children:'// highlight-next-line\n@Entity(microServiceName = "book-service")\ninterface Book {\n\n    @ManyToMany\n    val authors: List<Author>\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'})})})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u4ece\u52a8\u65b9 ",(0,a.jsx)(n.em,{children:"(\u53ef\u9009)"}),": ",(0,a.jsx)(n.code,{children:"Author.authors"})]}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(l.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Author.java"',children:'// highlight-next-line\n@Entity(microServiceName = "author-service")\npublic interface Author {\n\n    @ManyToMany(mappedBy = "authors")\n    List<Book> books();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'})})}),(0,a.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Author.kt"',children:'// highlight-next-line\n@Entity(microServiceName = "author-service")\ninterface Author {\n\n    @ManyToMany(mappedBy = "authors")\n    val books: List<Book>\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd9\u91cc\uff0c",(0,a.jsx)(n.code,{children:"Book"}),"\u7684\u5fae\u670d\u52a1\u540d\u4e3a",(0,a.jsx)(n.code,{children:"book-service"}),"\uff0c",(0,a.jsx)(n.code,{children:"Author"}),"\u7684\u5fae\u670d\u52a1\u540d\u4e3a",(0,a.jsx)(n.code,{children:"author-service"}),"\u3002\u4e8c\u8005\u4e0d\u76f8\u7b49\uff0c\u56e0\u6b64",(0,a.jsx)(n.code,{children:"Book.authors"}),"\u548c",(0,a.jsx)(n.code,{children:"Author.books"}),"\u90fd\u662f\u8fdc\u7a0b\u5173\u8054"]}),"\n",(0,a.jsx)(n.h2,{id:"mappedsuperclass",children:"@MappedSuperclass"}),"\n",(0,a.jsxs)(n.p,{children:["\u4f5c\u4e3a\u8d85\u7c7b\u578b\u7684",(0,a.jsx)(n.code,{children:"MappedSuperclass"}),"\u6709\u4e24\u79cd\u7528\u6cd5"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u53ef\u4ee5\u5305\u542b\u5173\u8054\u5c5e\u6027\uff0c\u4f46\u5fc5\u9700\u96b6\u5c5e\u4e8e\u540c\u4e00\u4e2a\u5fae\u670d\u52a1"}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(l.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="BookServiceCommonEnity.java"',children:'// highlight-next-line\n@MappedSuperclass(microServiceName = "book-service")\npublic interface BookServiceCommonEnity {\n\n    LocalDateTime createdTime();\n\n    @ManyToOne\n    User createdBy();\n\n    LocalDateTime modifiedTime();\n\n    @ManyToOne\n    User modifiedBy();\n}\n'})})}),(0,a.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="BookServiceCommonEnity.kt"',children:'// highlight-next-line\n@MappedSuperclass(microServiceName = "book-service")\ninterface BookServiceCommonEnity {\n\n    val createdTime: LocalDateTime\n\n    @ManyToOne\n    val createdBy: User\n\n    val modifiedTime: LocalDateTime\n\n    @ManyToOne\n    val modifiedBy: User\n}\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd9\u91cc",(0,a.jsx)(n.code,{children:"BookServiceCommonEnity"}),"\u5177\u5907\u5173\u8054\u5c5e\u6027",(0,a.jsx)(n.code,{children:"createdBy"}),"\u548c",(0,a.jsx)(n.code,{children:"modifiedBy"}),'\uff0c\u4f46\u662f\u53ea\u6709\u540c\u5c5e\u4e8e\u5fae\u670d\u52a1"book-service"\u7684',(0,a.jsx)(n.code,{children:"Entity"}),"\u6216\u5176\u4ed6",(0,a.jsx)(n.code,{children:"MappedSuperclass"}),"\u624d\u53ef\u4ee5\u7ee7\u627f\u5b83\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u8de8\u8d8a\u4efb\u4f55\u5fae\u670d\u52a1\uff0c\u4f46\u4e0d\u5f97\u5305\u542b\u5173\u8054\u5c5e\u6027"}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(l.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="CommonEnity.java"',children:"// highlight-next-line\n@MappedSuperclass(acrossMicroServices = true)\npublic interface CommonEnity {\n\n    LocalDateTime createdTime();\n\n    LocalDateTime modifiedTime();\n}\n"})})}),(0,a.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="CommonEnity.kt"',children:"// highlight-next-line\n@MappedSuperclass(acrossMicroServices = true)\ninterface CommonEnity {\n\n    val createdTime: LocalDateTime\n\n    val modifiedTime: LocalDateTime\n}\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd9\u91cc",(0,a.jsx)(n.code,{children:"CommonEnity"}),"\u53ef\u4ee5\u8de8\u8d8a\u4efb\u4f55\u5fae\u670d\u52a1\uff0c\u4efb\u4f55\u5fae\u670d\u52a1\u4e0b\u7684",(0,a.jsx)(n.code,{children:"Entity"}),"\u6216\u5176\u4ed6",(0,a.jsx)(n.code,{children:"MappedSuperclass"}),"\u90fd\u53ef\u4ee5\u7ee7\u627f\u5b83\uff0c\u4f46\u5176\u672c\u8eab\u4e0d\u7684\u5305\u542b\u4efb\u4f55\u5173\u8054\u5c5e\u6027\u3002"]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>l});r(96540);var a=r(18215);const t={tabItem:"tabItem_Ymn6"};var i=r(74848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,l),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>k});var a=r(96540),t=r(18215),i=r(23104),l=r(56347),s=r(205),o=r(57485),c=r(31682),d=r(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const t=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function v(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,i=h(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,u]=p({queryString:r,groupId:t}),[v,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,d.Dv)(r);return[t,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:t}),x=(()=>{const e=c??v;return m({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{x&&o(x)}),[x]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=r(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function b(e){let{className:n,block:r,selectedValue:a,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),t=s[r].value;t!==a&&(c(n),l(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...i,className:(0,t.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function f(e){let{lazy:n,children:r,selectedValue:t}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=v(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(f,{...n,...e})]})}function k(e){const n=(0,j.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>s});var a=r(96540);const t={},i=a.createContext(t);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);