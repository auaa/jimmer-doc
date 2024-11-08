"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4591],{56778:(e,n,l)=>{l.d(n,{A:()=>r});l(96540);var a=l(18215);const i={tabItem:"tabItem_Ymn6"};var t=l(74848);function r(e){let{children:n,hidden:l,className:r}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,r),hidden:l,children:n})}},37244:(e,n,l)=>{l.d(n,{A:()=>k});var a=l(96540),i=l(18215),t=l(44319),r=l(56347),s=l(94280),o=l(73024),c=l(58417),d=l(44031);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:l}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:l,attributes:a,default:i}}=e;return{value:n,label:l,attributes:a,default:i}}))}(l);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function b(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:l}=e;const i=(0,r.W6)(),t=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,o.aZ)(t),(0,a.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(i.location.search);n.set(t,e),i.replace({...i.location,search:n.toString()})}),[t,i])]}function j(e){const{defaultValue:n,queryString:l=!1,groupId:i}=e,t=u(e),[r,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=l.find((e=>e.default))??l[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:t}))),[c,h]=x({queryString:l,groupId:i}),[j,m]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,t]=(0,d.Dv)(l);return[i,(0,a.useCallback)((e=>{l&&t.set(e)}),[l,t])]}({groupId:i}),p=(()=>{const e=c??j;return b({value:e,tabValues:t})?e:null})();(0,s.A)((()=>{p&&o(p)}),[p]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),m(e)}),[h,m,t]),tabValues:t}}var m=l(46916);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=l(74848);function T(e){let{className:n,block:l,selectedValue:a,selectValue:r,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),d=e=>{const n=e.currentTarget,l=o.indexOf(n),i=s[l].value;i!==a&&(c(n),r(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const l=o.indexOf(e.currentTarget)+1;n=o[l]??o[0];break}case"ArrowLeft":{const l=o.indexOf(e.currentTarget)-1;n=o[l]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":l},n),children:s.map((e=>{let{value:n,label:l,attributes:t}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...t,className:(0,i.A)("tabs__item",p.tabItem,t?.className,{"tabs__item--active":a===n}),children:l??n},n)}))})}function v(e){let{lazy:n,children:l,selectedValue:t}=e;const r=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function f(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",p.tabList),children:[(0,g.jsx)(T,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function k(e){const n=(0,m.A)();return(0,g.jsx)(f,{...e,children:h(e.children)},String(n))}},58226:(e,n,l)=>{l.d(n,{a:()=>j});var a=l(96540),i=l(72774),t=l(63051),r=l(28968),s=l(48875),o=l(44676),c=l(47859),d=l(4671),h=l(99343),u=l(7324),b=l(39781),x=l(74848);const j=(0,a.memo)((e=>{let{open:n,fullScreen:l=!1,title:s,maxWidth:j="md",onClose:p,children:g}=e;const[T,v]=(0,a.useState)(l),f=(0,a.useCallback)((()=>{v((e=>!e))}),[]);return(0,x.jsxs)(t.A,{open:n,onClose:p,fullScreen:T,TransitionComponent:m,maxWidth:j,children:[(0,x.jsx)(i.A,{sx:{position:"relative"},children:(0,x.jsxs)(o.A,{children:[(0,x.jsx)(c.A,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:s}),(0,x.jsx)(d.A,{onClick:f,style:{color:"white"},children:T?(0,x.jsx)(u.A,{}):(0,x.jsx)(h.A,{})}),(0,x.jsx)(d.A,{"aria-label":"close",onClick:p,style:{color:"white"},children:(0,x.jsx)(b.A,{})})]})}),(0,x.jsx)(r.A,{children:g})]})})),m=a.forwardRef((function(e,n){return(0,x.jsx)(s.A,{direction:"up",ref:n,...e})}))},47389:(e,n,l)=>{l.d(n,{l:()=>s});var a=l(96540),i=l(67512),t=l(58226),r=l(74848);const s=(0,a.memo)((e=>{let{buttonText:n,fullScreen:l=!1,title:s=n,variant:o="outlined",large:c=!1,maxWidth:d,useOriginalText:h=!0,children:u}=e;const[b,x]=(0,a.useState)(!1),j=(0,a.useCallback)((e=>{x(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),m=(0,a.useCallback)((()=>{x(!1)}),[]),p=h?{textTransform:"none"}:{};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{"data-is-view-more-button":"true",onClick:j,variant:o,size:c?"large":"small",style:p,children:n}),(0,r.jsx)(t.a,{open:b,onClose:m,title:s,maxWidth:d,fullScreen:l,children:u})]})}))},43436:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"query/dynamic-join/table-ex","title":"\u5206\u9875\u5b89\u5168\u6027","description":"\u5206\u9875\u5b89\u5168\u6027\u662f\u4e3a\u5206\u9875\u8bbe\u8ba1\u7684\u529f\u80fd\uff0c\u4f46\u662f\u8868\u8fde\u63a5\u529f\u80fd\u4e3a\u5176\u63d0\u4f9b\u5e95\u5c42\u652f\u6301\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/dynamic-join/table-ex.mdx","sourceDirName":"query/dynamic-join","slug":"/query/dynamic-join/table-ex","permalink":"/jimmer-doc/zh/docs/query/dynamic-join/table-ex","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/query/dynamic-join/table-ex.mdx","tags":[],"version":"current","lastUpdatedAt":1731052394000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"\u5206\u9875\u5b89\u5168\u6027"},"sidebar":"tutorialSidebar","previous":{"title":"\u4f18\u5316\u4e0d\u5fc5\u8981\u8fde\u63a5","permalink":"/jimmer-doc/zh/docs/query/dynamic-join/optimization"},"next":{"title":"\u5f31\u8fde\u63a5","permalink":"/jimmer-doc/zh/docs/query/dynamic-join/weak-join"}}');var i=l(74848),t=l(28453),r=l(47389),s=l(37244),o=l(56778);const c={sidebar_position:5,title:"\u5206\u9875\u5b89\u5168\u6027"},d=void 0,h={},u=[{value:"\u96c6\u5408\u5173\u8054\u7684\u95ee\u9898",id:"\u96c6\u5408\u5173\u8054\u7684\u95ee\u9898",level:2},{value:"\u96c6\u5408JOIN\u5bfc\u81f4\u91cd\u590d\u67e5\u8be2\u7ed3\u679c",id:"\u96c6\u5408join\u5bfc\u81f4\u91cd\u590d\u67e5\u8be2\u7ed3\u679c",level:3},{value:"\u67e5\u8be2\u7ed3\u679c\u91cd\u590d\u7684\u5371\u5bb3",id:"\u67e5\u8be2\u7ed3\u679c\u91cd\u590d\u7684\u5371\u5bb3",level:3},{value:"\u9690\u542b\u5b50\u67e5\u8be2",id:"\u9690\u542b\u5b50\u67e5\u8be2",level:2},{value:"Table\u548cTableEx",id:"table\u548ctableex",level:2},{value:"\u751f\u6210\u7684\u4ee3\u7801",id:"\u751f\u6210\u7684\u4ee3\u7801",level:3},{value:"\u53ea\u80fd\u57fa\u4e8eTable\u521b\u5efa\u7684\u9876\u5c42\u67e5\u8be2",id:"\u53ea\u80fd\u57fa\u4e8etable\u521b\u5efa\u7684\u9876\u5c42\u67e5\u8be2",level:3},{value:"\u5141\u8bb8\u57fa\u4e8eTableEx\u521b\u5efa\u5b50\u67e5\u8be2",id:"\u5141\u8bb8\u57fa\u4e8etableex\u521b\u5efa\u5b50\u67e5\u8be2",level:3},{value:"asTableEx",id:"astableex",level:2}];function b(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u5206\u9875\u5b89\u5168\u6027\u662f\u4e3a\u5206\u9875\u8bbe\u8ba1\u7684\u529f\u80fd\uff0c\u4f46\u662f\u8868\u8fde\u63a5\u529f\u80fd\u4e3a\u5176\u63d0\u4f9b\u5e95\u5c42\u652f\u6301\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u96c6\u5408\u5173\u8054\u7684\u95ee\u9898",children:"\u96c6\u5408\u5173\u8054\u7684\u95ee\u9898"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u91cc\uff0c\u6211\u4eec\u5148\u4ecb\u7ecd\u4e24\u79cd\u5173\u8054\u5c5e\u6027\uff0c\u5f15\u7528\u5173\u8054\u548c\u96c6\u5408\u5173\u8054\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u88ab",(0,i.jsx)(n.code,{children:"@OneToOne"}),"\u6216",(0,i.jsx)(n.code,{children:"@ManyToOne"}),"\u4fee\u9970\u7684\u5173\u8054\u5c5e\u6027\uff0c\u79f0\u4e3a\u5f15\u7528\u5173\u8054"]}),"\n",(0,i.jsxs)(n.li,{children:["\u88ab",(0,i.jsx)(n.code,{children:"@OneToMany"}),"\u6216",(0,i.jsx)(n.code,{children:"@ManyToMany"}),"\u4fee\u9970\u7684\u5173\u8054\u5c5e\u6027\uff0c\u79f0\u4e3a\u96c6\u5408\u5173\u8054"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u8bf7\u53c2\u8003\u4f8b\u5b50,"}),"\n",(0,i.jsxs)(r.l,{buttonText:"\u5173\u8054\u5206\u7c7b\u7684\u4f8b\u5b50",children:[(0,i.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u6765\u770b\u8fd9\u4e2a\u5b9e\u4f53\u5b9a\u4e49"}),(0,i.jsxs)(s.A,{groupId:"language",children:[(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:'\npackage org.babyfish.jimmer.sql.example.model;\n\nimport java.math.BigDecimal;\nimport java.util.List;\nimport javax.validation.constraints.Null;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\npublic interface Book {\n\n    @Id\n    long id();\n\n    String name();\n\n    int edition();\n\n    BigDecimal price();\n\n    @Null\n    @ManyToOne\n    // highlight-next-line\n    BookStore store();\n\n    @ManyToMany\n    @JoinTable(\n            name = "BOOK_AUTHOR_MAPPING",\n            joinColumnName = "BOOK_ID",\n            inverseJoinColumnName = "AUTHOR_ID"\n    )\n    // highlight-next-line\n    List<Author> authors();\n}\n'})})}),(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:'\npackage org.babyfish.jimmer.sql.example.model\n\nimport java.math.BigDecimal;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\ninterface Book {\n\n    @Id\n    val id: Long\n\n    val name: String\n\n    val edition: Int\n\n    val price: BigDecimal\n\n    @ManyToOne\n    // highlight-next-line\n    val store: BookStore?\n\n    @ManyToMany\n    @JoinTable(\n            name = "BOOK_AUTHOR_MAPPING",\n            joinColumnName = "BOOK_ID",\n            inverseJoinColumnName = "AUTHOR_ID"\n    )\n    // highlight-next-line\n    val authors: List<Author>\n}\n'})})})]}),(0,i.jsx)(n.p,{children:"\u8fd9\u4e2a\u4f8b\u5b50\u4e2d"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Book.store"}),"\u88ab",(0,i.jsx)(n.code,{children:"@ManyToOne"}),"\u4fee\u9970\uff0c\u662f\u4e00\u4e2a\u5f15\u7528\u5173\u8054"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Book.authors"}),"\u88ab",(0,i.jsx)(n.code,{children:"@ManyToMany\u4fee\u9970"}),"\uff0c\u662f\u4e00\u4e2a\u96c6\u5408\u5173\u8054"]}),"\n"]})]}),"\n",(0,i.jsx)(n.h3,{id:"\u96c6\u5408join\u5bfc\u81f4\u91cd\u590d\u67e5\u8be2\u7ed3\u679c",children:"\u96c6\u5408JOIN\u5bfc\u81f4\u91cd\u590d\u67e5\u8be2\u7ed3\u679c"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u6211\u4eec\u628a\u5f53\u524d\u88ab\u67e5\u8be2\u7684\u7b2c\u4e00\u5f20\u8868\u6240\u5bf9\u5e94\u7684\u5b9e\u4f53\u5bf9\u8c61\u79f0\u4e3a\u805a\u5408\u6839\u5bf9\u8c61\uff0c\u5f15\u7528\u5173\u8054\u548c\u96c6\u5408\u5173\u8054\u4e4b\u95f4\u6709\u5982\u4e0b\u5dee\u5f02\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u67e5\u8be2\u4e00\u4e2a\u5bf9\u8c61\uff0c\u901a\u8fc7\u5f15\u7528\u5173\u8054\u8fdb\u884ctable join\uff0c\u5728SQL\u67e5\u8be2\u7ed3\u679c\u4e2d\uff0c\u5f53\u524d\u4e3b\u5bf9\u8c61\u4e0d\u4f1a\u51fa\u73b0\u91cd\u590d\u8bb0\u5f55\u3002\u4f8b\u5982\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select \n    b.id as root_id,\n    b.name as root_name,\n    s.id as associated_id,\n    s.name as associated_name \nfrom book b\ninner join book_store s\n    on b.store_id = s.id\nwhere b.id = 1;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u67e5\u8be2\u7ed3\u679c\u5982\u4e0b\uff0c\u805a\u5408\u6839\u5bf9\u8c61\u6ca1\u6709\u51fa\u73b0\u91cd\u590d"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"root_id"}),(0,i.jsx)(n.th,{children:"root_name"}),(0,i.jsx)(n.th,{children:"associated_id"}),(0,i.jsx)(n.th,{children:"associated_name"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Learning GraphQL"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"O'REILLY"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u67e5\u8be2\u4e00\u4e2a\u5bf9\u8c61\uff0c\u901a\u8fc7\u96c6\u5408\u5173\u8054\u8fdb\u884ctable join\uff0c\u5728SQL\u67e5\u8be2\u7ed3\u679c\u4e2d\uff0c\u5f53\u524d\u4e3b\u5bf9\u8c61\u4f1a\u51fa\u73b0\u91cd\u590d\u8bb0\u5f55\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select \n    b.id as root_id,\n    b.name as root_name,\n    a.id as associated_id,\n    a.first_name as associated_first_name,\n    a.last_name as associated_last_name \nfrom book b\ninner join book_author_mapping m\n    on b.id = m.book_id\ninner join author a\n    on m.author_id = a.id\nwhere b.id = 1;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u67e5\u8be2\u7ed3\u679c\u5982\u4e0b\uff0c\u805a\u5408\u6839\u5bf9\u8c61\u6709\u53ef\u80fd\u51fa\u73b0\u91cd\u590d\uff1a"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"root_id"}),(0,i.jsx)(n.th,{children:"root_name"}),(0,i.jsx)(n.th,{children:"associated_id"}),(0,i.jsx)(n.th,{children:"associated_first_name"}),(0,i.jsx)(n.th,{children:"associated_last_name"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Learning GraphQL"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Eve"}),(0,i.jsx)(n.td,{children:"Procello"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Learning GaphhQL"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Alex"}),(0,i.jsx)(n.td,{children:"Banks"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u67e5\u8be2\u7ed3\u679c\u91cd\u590d\u7684\u5371\u5bb3",children:"\u67e5\u8be2\u7ed3\u679c\u91cd\u590d\u7684\u5371\u5bb3"}),"\n",(0,i.jsx)(n.p,{children:"\u57fa\u4e8e\u96c6\u5408\u5173\u8054\u7684table join\u4f1a\u5bfc\u81f4\u91cd\u590d\u6570\u636e\uff0c\u8fdb\u800c\u5f15\u53d1\u4ee5\u4e0b\u95ee\u9898\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u5f00\u53d1\u8005\u5fd8\u8bb0\u53bb\u91cd\uff0c\u5c31\u4f1a\u5f15\u5165bug\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5373\u4fbf\u5f00\u53d1\u8005\u6ca1\u6709\u5fd8\u8bb0\u53bb\u91cd\uff0c\u5728\u5ba2\u6237\u7aef\u4f7f\u7528",(0,i.jsx)(n.code,{children:"java.util.LinkedHashSet"}),"\u8fdb\u884c\u53bb\u91cd\uff0c\u4e5f\u5e76\u975e\u4e00\u4e2a\u597d\u7684\u9009\u62e9\u3002\n\u56e0\u4e3a\u4e8b\u540e\u7684\u53bb\u91cd\u64cd\u4f5c\u4e5f\u4e0d\u80fd\u6539\u53d8\u6570\u636e\u5e93\u8fd4\u56de\u7684\u539f\u59cb\u7ed3\u679c\u5305\u542b\u91cd\u590d\u6570\u636e\u65e2\u5b9a\u4e8b\u5b9e\uff0c\u4e14\u4f1a\u6d88\u8017\u989d\u5916\u7684\u7f51\u7edc\u4f20\u8f93\u548cJVM\u5904\u7406\u6570\u636e\u7684\u6210\u672c\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6700\u91cd\u8981\u7684\u4e00\u70b9\uff0c\u5bf9\u5206\u9875\u67e5\u8be2\u4e0d\u53cb\u597d"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5728SQL\u5c42\u9762\u5bf9table join\u8fde\u63a5\u7ed3\u679c\u8fdb\u884c\u5206\u9875\uff0c\u5f80\u5f80\u4e0d\u662f\u4eba\u4eec\u6240\u9700\uff1b\u66f4\u591a\u7684\u573a\u666f\u4e0b\uff0c\u4eba\u4eec\u5e0c\u671b\u5206\u9875\u64cd\u4f5c\u88ab\u5e94\u7528\u5728\u805a\u5408\u6839\u5bf9\u8c61\u4e0a\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5Hibernate\u4e3a\u4f8b\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cHibernate\u4e0d\u5f97\u4e0d\u653e\u5f03SQL\u5c42\u9762\u7684\u5206\u9875\u7b56\u7565\uff0c\u800c\u91c7\u7528\u5185\u5b58\u5c42\u9762\u7684\u5206\u9875\u7b56\u7565\u3002\u8fd9\u6837\u505a\u6027\u80fd\u975e\u5e38\u4f4e\u4e0b\uff0c\u4e3a\u4e86\u5f15\u8d77\u5f00\u53d1\u4eba\u5458\u7684\u91cd\u89c6\uff0cHibernate\u4f1a\u5728\u65e5\u5fd7\u4e2d\u8fdb\u884c\u544a\u8b66\u3002\u5982\u679c\u8bfb\u8005\u4f60\u6709Hibernate\u4f7f\u7528\u7ecf\u9a8c\uff0c\u76f8\u4fe1\u4e0b\u9762\u8fd9\u6761\u65e5\u5fd7\u4f1a\u8ba9\u4f60\u611f\u5230\u975e\u5e38\u5934\u75bc\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://tech.asimio.net/2021/05/19/Fixing-Hibernate-HHH000104-firstResult-maxResults-warning-using-Spring-Data-JPA.html",children:"firstResult/maxResults specified with collection fetch; applying in memory"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u6ce8\u610f\uff0cJimmer\u7684\u53e6\u5916\u4e00\u4e2a\u529f\u80fd",(0,i.jsx)(n.a,{href:"../object-fetcher",children:"\u5bf9\u8c61\u6293\u53d6\u5668"}),"\uff0c\u5e76\u4e0d\u662f\u57fa\u4e8etable join\u6765\u5b9e\u73b0\u5bf9\u96c6\u5408\u5173\u8054\u5c5e\u6027\u8fdb\u884cfetch\u7684\uff0c\u6545\u800c\u65e0\u6b64\u95ee\u9898\uff0c\u8bf7\u653e\u5fc3\u4f7f\u7528\u3002"]})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7531\u4e8eSQL\u652f\u6301\u5b50\u67e5\u8be2\uff0c\u6211\u4eec\u628a\u6700\u5916\u5c42\u7684\u67e5\u8be2\u79f0\u4e3a\u9876\u5c42\u67e5\u8be2\u3002\u7efc\u4e0a\uff0c\u5728\u9876\u7ea7\u67e5\u8be2\u4e2d\u4f7f\u7528\u96c6\u5408\u8fde\u63a5\u7684\u7f3a\u70b9\u975e\u5e38\u660e\u663e\uff0c\u4f46\u4e0d\u53ef\u5426\u8ba4\uff0c\u5728\u5b50\u67e5\u8be2\u4e2d\u4f7f\u7528\u96c6\u5408\u8fde\u63a5\u4ecd\u7136\u6709\u5ba2\u89c2\u7684\u4ef7\u503c\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6240\u4ee5\uff0cJimmer\u7684SQL DSL\u6709\u8fd9\u6837\u7684\u7279\u8272"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u57fa\u4e8e\u96c6\u5408\u5173\u8054\u7684table join\uff0c\u5728",(0,i.jsx)(n.strong,{children:"\u9876\u7ea7"}),"\u67e5\u8be2\u4e2d\u9700\u8981\u88ab\u7981\u6b62\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u57fa\u4e8e\u96c6\u5408\u5173\u8054\u7684table join\uff0c\u5728\u5b50\u67e5\u8be2\u3001update\u8bed\u53e5\u548cdelete\u8bed\u53e5\u4e2d\u4ecd\u7136\u53ef\u7528\u3002"}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"\u9690\u542b\u5b50\u67e5\u8be2",children:"\u9690\u542b\u5b50\u67e5\u8be2"}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["\u5bf9\u4e8e\u96c6\u5408\u5173\u8054\u800c\u8a00\uff0c\u5176\u5b9e\u4e0d\u63a8\u8350JOIN\uff0c\u66f4\u63a8\u8350",(0,i.jsx)(n.a,{href:"../implicit-subquery",children:"\u9690\u5f0f\u5b50\u67e5\u8be2"}),"\u3002"]}),(0,i.jsx)(n.p,{children:"\u5982\u679c\u4ecd\u7136\u8981\u5bf9\u96c6\u5408\u5173\u8054\u5c5e\u6027\u8fdb\u884cJOIN\uff0c\u8bf7\u7ee7\u7eed\u9605\u8bfb\u4e0b\u6587\u3002"})]}),"\n",(0,i.jsx)(n.h2,{id:"table\u548ctableex",children:"Table\u548cTableEx"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728Jimmer\u7684SQL DSL\u4e2d\uff0c\u5b58\u5728\u4e24\u79cd\u8868\u5bf9\u8c61\uff0c",(0,i.jsx)(n.code,{children:"Table<E>"}),"\u548c",(0,i.jsx)(n.code,{children:"TableEx<E>"}),"\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Table"}),"\n",(0,i.jsx)(n.p,{children:"\u7279\u70b9\uff1a\u53ea\u80fd\u901a\u8fc7\u5f15\u7528\u5173\u8054\u8fdb\u884cjoin\uff0c\u65e0\u6cd5\u901a\u8fc7\u96c6\u5408\u5173\u8054\u5c5e\u6027\u8fdb\u884cjoin"}),"\n",(0,i.jsx)(n.p,{children:"Java\u7c7b\u578b\uff1aorg.babyfish.jimmer.sql.ast.table.Table<E>"}),"\n",(0,i.jsx)(n.p,{children:"Kotlin\u7c7b\u578b\uff1aorg.babyfish.jimmer.sql.kt.ast.table.KTable<E>"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"TableEx"}),"\n",(0,i.jsx)(n.p,{children:"\u7279\u70b9\uff1a\u53ef\u4ee5\u901a\u8fc7\u4efb\u4f55\u5173\u8054\u5c5e\u6027\u8fdb\u884cjoin"}),"\n",(0,i.jsx)(n.p,{children:"Java\u7c7b\u578b\uff1aorg.babyfish.jimmer.sql.ast.table.TableEx<E>"}),"\n",(0,i.jsx)(n.p,{children:"Kotlin\u7c7b\u578b\uff1aorg.babyfish.jimmer.sql.kt.ast.table.KTableEx<E>"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u751f\u6210\u7684\u4ee3\u7801",children:"\u751f\u6210\u7684\u4ee3\u7801"}),"\n",(0,i.jsx)(n.p,{children:"\u4e3a\u4e86\u5b9e\u73b0\u5f3a\u7c7b\u578b\u7684SQL DSL\uff0cJimmer\u4f7f\u7528Annotation processor(Java)\u6216KSP(kotlin)\uff0c\u6839\u636e\u7528\u6237\u5b9a\u4e49\u7684\u5b9e\u4f53\u63a5\u53e3\u751f\u6210SQL DSL\u76f8\u5173\u7684\u6e90\u4ee3\u7801\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd8\u662f\u4ee5\u6587\u7ae0\u5f00\u5934\u7684Book\u5b9e\u4f53\u63a5\u53e3\u4e3a\u4f8b\uff0c\u5982\u4e0b\u4e24\u4e2a\u7c7b\u578b\u4f1a\u88ab\u81ea\u52a8\u751f\u6210"}),"\n",(0,i.jsxs)(s.A,{groupId:"language",children:[(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Generated java code"',children:'/* \n * BookTable.java\n */\npackage org.babyfish.jimmer.sql.example.model;\n\nimport java.lang.Integer;\nimport java.math.BigDecimal;\nimport javax.persistence.criteria.JoinType;\nimport org.babyfish.jimmer.sql.ast.Expression;\nimport org.babyfish.jimmer.sql.ast.PropExpression;\nimport org.babyfish.jimmer.sql.ast.table.Table;\nimport org.babyfish.jimmer.sql.ast.table.spi.AbstractTableWrapper;\n\npublic class BookTable extends AbstractTableWrapper<Book> {\n    public BookTable(Table<Book> table) {\n        super(table);\n    }\n\n    public Expression<Long> id() {\n        return get("id");\n    }\n\n    public PropExpression.Str name() {\n        return get("name");\n    }\n\n    public PropExpression.Num<Integer> edition() {\n        return get("edition");\n    }\n\n    public PropExpression.Num<BigDecimal> price() {\n        return get("price");\n    }\n\n    public BookStoreTable store() {\n        return join("store");\n    }\n\n    public BookStoreTable store(JoinType joinType) {\n        return join("store", joinType);\n    }\n}\n\n/* \n * BookTableEx.java\n */\npackage org.babyfish.jimmer.sql.example.model;\n\nimport javax.persistence.criteria.JoinType;\nimport org.babyfish.jimmer.sql.ast.table.TableEx;\n\npublic class BookTableEx extends BookTable implements TableEx<Book> {\n    public BookTableEx(TableEx<Book> table) {\n        super(table);\n    }\n\n    public AuthorTableEx authors() {\n        return join("authors");\n    }\n\n    public AuthorTableEx authors(JoinType joinType) {\n        return join("authors", joinType);\n    }\n}\n'})})}),(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="Generated kotlin code"',children:'package org.babyfish.jimmer.example.kt.sql.model\n\nimport java.math.BigDecimal\nimport org.babyfish.jimmer.sql.ast.Selection\nimport org.babyfish.jimmer.sql.kt.ast.expression.KNonNullPropExpression\nimport org.babyfish.jimmer.sql.kt.ast.expression.KNullablePropExpression\nimport org.babyfish.jimmer.sql.kt.ast.table.KNonNullTable\nimport org.babyfish.jimmer.sql.kt.ast.table.KNonNullTableEx\nimport org.babyfish.jimmer.sql.kt.ast.table.KNullableTable\nimport org.babyfish.jimmer.sql.kt.ast.table.KNullableTableEx\nimport org.babyfish.jimmer.sql.kt.ast.table.KTable\nimport org.babyfish.jimmer.sql.kt.ast.table.KTableEx\n\n/* \n * Extension for Table<Book>\n */\npublic val KTable<Book>.id: KNullablePropExpression<Long>\n    get() = get("id")\n\npublic val KNonNullTable<Book>.id: KNonNullPropExpression<Long>\n    get() = get("id")\n\npublic val KTable<Book>.name: KNullablePropExpression<String>\n    get() = get("name")\n\npublic val KNonNullTable<Book>.name: KNonNullPropExpression<String>\n    get() = get("name")\n\npublic val KTable<Book>.edition: KNullablePropExpression<Int>\n    get() = get("edition")\n\npublic val KNonNullTable<Book>.edition: KNonNullPropExpression<Int>\n    get() = get("edition")\n\npublic val KTable<Book>.price: KNullablePropExpression<BigDecimal>\n    get() = get("price")\n\npublic val KNonNullTable<Book>.price: KNonNullPropExpression<BigDecimal>\n    get() = get("price")\n\npublic val KNullableTable<Book>.store: KNullableTable<BookStore>\n    get() = join("store")\n\npublic val KNonNullTable<Book>.store: KNonNullTable<BookStore>\n    get() = join("store")\n\npublic val KTable<Book>.`store?`: KNullableTable<BookStore>\n    get() = outerJoin("store")\n\n/* \n * Extension for TableEx<Book>\n */\n\npublic val KNullableTableEx<Book>.authors: KNullableTableEx<Author>\n    get() = join("authors")\n\npublic val KNonNullTableEx<Book>.authors: KNonNullTableEx<Author>\n    get() = join("authors")\n\npublic val KTableEx<Book>.`authors?`: KNullableTableEx<Author>\n    get() = outerJoin("authors")\n'})})})]}),"\n",(0,i.jsx)(n.p,{children:"\u89c2\u5bdf\u8fd9\u4e24\u4e2a\u81ea\u52a8\u751f\u6210\u7684\u7c7b\u578b\uff0c\u4e0d\u96be\u770b\u51fa"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"BookTableEx"}),"\u7ee7\u627f\u4e86",(0,i.jsx)(n.code,{children:"BookTable"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"BookTable"}),"\u4e0d\u652f\u6301\u96c6\u5408\u5173\u8054\uff0c\u4f46\u652f\u6301\u666e\u901a\u5b57\u6bb5\u548c\u5f15\u7528\u5173\u8054(\u672c\u4f8b\u4e2d\u4e3a",(0,i.jsx)(n.code,{children:"store"}),")\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"BookTableEx"}),"\u589e\u52a0\u4e86\u5bf9\u96c6\u5408\u5173\u8054\u7684\u652f\u6301\uff08\u672c\u4f8b\u4e2d\u4e3a",(0,i.jsx)(n.code,{children:"authors"}),"\uff09\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u56e0\u6b64jimmer-sql\u7684API\u9075\u5faa\u5982\u4e0b\u7684\u6a21\u5f0f"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u9876\u7ea7\u67e5\u8be2\u53ea\u80fd\u57fa\u4e8e",(0,i.jsx)(n.code,{children:"Table"}),"\u521b\u5efa\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5b50\u67e5\u8be2\u3001update\u8bed\u53e5\u548cdelete\u8bed\u53e5\u65e2\u53ef\u57fa\u4e8e",(0,i.jsx)(n.code,{children:"Table"}),"\u521b\u5efa\uff0c\u4e5f\u53ef\u57fa\u4e8e",(0,i.jsx)(n.code,{children:"TableEx"}),"\u521b\u5efa\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\uff0c\u4ee5\u9876\u5c42\u67e5\u8be2\u548c\u5b50\u67e5\u8be2\u4e3a\u4f8b\uff0c\u505a\u5bf9\u6bd4\u6027\u793a\u8303\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u53ea\u80fd\u57fa\u4e8etable\u521b\u5efa\u7684\u9876\u5c42\u67e5\u8be2",children:"\u53ea\u80fd\u57fa\u4e8eTable\u521b\u5efa\u7684\u9876\u5c42\u67e5\u8be2"}),"\n",(0,i.jsx)(n.p,{children:"\u6240\u4ee5\uff0c\u4f60\u7684\u4ee3\u7801\u770b\u8d77\u6765\u5982\u6b64"}),"\n",(0,i.jsxs)(s.A,{groupId:"language",children:[(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'BookTable table = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(\n        table\n            // highlight-next-line\n            .name() // \u53ef\u4ee5\u8bbf\u95ee\u666e\u901a\u5b57\u6bb5name\n            .eq("Book Name")\n    )\n    .where(\n        table\n            // highlight-next-line\n            .store() // \u4e5f\u53ef\u4ee5\u5bf9\u5f15\u7528\u5173\u8054store\u8fdb\u884cjoin\n            .name()\n            .eq("Store Name")\n    )\n    /* \n     * \u7136\u800c\uff0c\u65e0\u6cd5\u4f7f\u7528"table.authors()"\uff0c\u56e0\u4e3aauthors()\n     * \u65b9\u6cd5\u88ab\u5b9a\u4e49\u5728\u4e86BookTableEx\u4e2d\uff0c\u800c\u975eBookTable\u4e2d\u3002\n     * \n     * \u5373\uff0c\u7f16\u8bd1\u65f6\u7981\u6b62\u4e86\u7528\u6237\u5728\u9876\u7ea7\u67e5\u8be2\u4e2d\u5bf9\u96c6\u5408\u5173\u8054\u8fdb\u884cjoin\n     */\n    .select(table)\n    .execute();\n'})})}),(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table\n                // highlight-next-line\n                .name // \u53ef\u4ee5\u8bbf\u95ee\u666e\u901a\u5b57\u6bb5name\n                eq "Book Name"\n        )\n        where(\n            table\n                // highlight-next-line\n                .store // \u4e5f\u53ef\u4ee5\u5bf9\u5f15\u7528\u5173\u8054store\u8fdb\u884cjoin\n                .name\n                eq "Store Name"\n        )\n        /* \n         * \u7136\u800c\uff0c\u65e0\u6cd5\u4f7f\u7528"table.authors"\uff0c\u56e0\u4e3a\u6269\u5c55\u5c5e\u6027authors\n         * \u88ab\u5b9a\u4e49\u4e3aTableEx<Book>\u5b9a\u4e49\uff0c\u800c\u975eTable<Book>\u3002\n         * \n         * \u5373\uff0c\u7f16\u8bd1\u65f6\u7981\u6b62\u4e86\u7528\u6237\u5728\u9876\u7ea7\u67e5\u8be2\u4e2d\u5bf9\u96c6\u5408\u5173\u8054\u8fdb\u884cjoin\n         */\n        select(table)\n    }\n    .execute()\n'})})})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Java: ",(0,i.jsx)(n.code,{children:"createQuery"}),"\u7684\u53c2\u6570\u7531\u7528\u6237\u6307\u5b9a\uff0c\u53ea\u80fd\u6307\u5b9a\u4e3a",(0,i.jsx)(n.code,{children:"Table"}),"\u7c7b\u578b\uff0c\u5982\u679c\u6307\u5b9a\u4e3a",(0,i.jsx)(n.code,{children:"TableEx"}),"\u7c7b\u578b\uff0c\u62a5\u9519"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Kotlin: ",(0,i.jsx)(n.code,{children:"createQuery"}),"\u81ea\u52a8\u521b\u5efa\u8868\u5bf9\u8c61\uff0clamba\u4e2d\u7684\u81ea\u52a8\u53d8\u91cf",(0,i.jsx)(n.code,{children:"table"}),"\u7684\u7c7b\u578b\u88ab\u81ea\u52a8\u8bc6\u522b\u4e3a",(0,i.jsx)(n.code,{children:"Table"}),"\u800c\u975e",(0,i.jsx)(n.code,{children:"TableEx"})]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \ninner join BOOK_STORE as tb_2_ on tb_1_.STORE_ID = tb_2_.ID \nwhere \n    tb_1_.NAME = ? \nand \n    tb_2_.NAME = ?\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u5141\u8bb8\u57fa\u4e8etableex\u521b\u5efa\u5b50\u67e5\u8be2",children:"\u5141\u8bb8\u57fa\u4e8eTableEx\u521b\u5efa\u5b50\u67e5\u8be2"}),"\n",(0,i.jsx)(n.p,{children:"\u548c\u9876\u7ea7\u67e5\u8be2\u4e0d\u540c\uff0c\u5b50\u67e5\u8be2\u3001update\u8bed\u53e5\u548cdelete\u8bed\u53e5\u5141\u8bb8\u4f7f\u7528TableEx\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0b\u9762\u4f8b\u5b50\u4e2d\u7684",(0,i.jsx)(n.code,{children:"Author.books"}),"\u548c\u4e0a\u9762\u8ba8\u8bba\u7684",(0,i.jsx)(n.code,{children:"Book.authors"}),"\u4e00\u6837\uff0c\u4e5f\u662f\u4e00\u4e2a\u591a\u5bf9\u591a\u5173\u8054\u3002"]}),"\n",(0,i.jsxs)(s.A,{groupId:"language",children:[(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'BookTable table = Tables.BOOK_TABLE;\n\n// `author`\u4e3a\u5b50\u67e5\u8be2\u6240\u7528\uff0c\u91c7\u7528TableEx\nAuthorTableEx author = TableExes.AUTHOR_TABLE_EX;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(sqlClient\n        // highlight-next-line\n        .createSubQuery(author)\n        .where(\n            author\n                // `author`\u662fTableEx\uff0c\n                // \u6240\u4ee5\u96c6\u5408\u5173\u8054`books`\u662f\u5141\u8bb8\u7684\n                // highlight-next-line\n                .books()\n                .eq(table),\n\n            author.firstName().eq("Alex")\n        )\n        .exists()\n    )\n    .select(table)\n    .execute();\n'})})}),(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n\n        // \u5728\u7236\u67e5\u8be2\u4e2d`table`\u8868\u793a`Table<Book>`\n        \n        where(\n            exists(\n                // highlight-next-line\n                wildSubQuery(Author::class) {\n\n                    // \u5728\u5b50\u67e5\u8be2\u4e2d\uff0c`table`\u8868\u793aTableEx<Author>\n                    \n                    where(\n                        table\n                            // \u5b50\u67e5\u8be2\u7684`table`\u662fTableEx\uff0c\n                            // \u6240\u4ee5\u96c6\u5408\u5173\u8054`books`\u662f\u5141\u8bb8\u7684\n                            // highlight-next-line\n                            .books eq\n                            parentTable,\n\n                        table.firstName.eq("Alex")\n                    )\n                }\n            )\n        )\n        select(table)\n    }\n    .execute()\n'})})})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Java: ",(0,i.jsx)(n.code,{children:"createSubQuery"}),"\u7684\u53c2\u6570\u7531\u7528\u6237\u6307\u5b9a\uff0c\u4e0d\u5f3a\u5236\u4f46\u5efa\u8bae\u6307\u5b9a\u4e3a",(0,i.jsx)(n.code,{children:"TableEx"}),"\u7c7b\u578b"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Kotlin: ",(0,i.jsx)(n.code,{children:"wildSubQuery"})," ",(0,i.jsxs)(n.em,{children:["(\u6216",(0,i.jsx)(n.code,{children:"subQuery"}),")"]})," \u81ea\u52a8\u521b\u5efa\u8868\u5bf9\u8c61\uff0clamba\u4e2d\u7684\u81ea\u52a8\u53d8\u91cf",(0,i.jsx)(n.code,{children:"table"}),"\u7684\u7c7b\u578b\u88ab\u81ea\u52a8\u8bc6\u522b\u4e3a",(0,i.jsx)(n.code,{children:"TableEx"}),"\u800c\u975e",(0,i.jsx)(n.code,{children:"Table"})]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \nwhere exists(\n    select 1 \n    from AUTHOR as tb_2_ \n    // highlight-start\n    inner join BOOK_AUTHOR_MAPPING as tb_3_ \n        on tb_2_.ID = tb_3_.AUTHOR_ID \n    // highlight-end\n    where \n        tb_3_.BOOK_ID = tb_1_.ID \n    and \n        tb_2_.FIRST_NAME = ?\n)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"astableex",children:"asTableEx"}),"\n",(0,i.jsx)(n.p,{children:"\u7981\u6b62\u5728\u9876\u7ea7\u67e5\u8be2\u4e2d\u4f7f\u7528\u96c6\u5408\u5173\u8054\uff0c\u7edd\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u90fd\u662f\u5408\u7406\u7684\uff0c\u4f46\u5e76\u975e\u6240\u6709\u60c5\u51b5\u90fd\u5408\u7406\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u6bd4\u5982\uff0c\u7528\u6237\u5e76\u4e0d\u67e5\u8be2\u6574\u4e2a\u5bf9\u8c61\uff0c\u800c\u4e14\u67e5\u8be2\u4e2a\u522b\u5b57\u6bb5\uff0c\u5e76\u4f7f\u7528SQL\u5173\u952e\u5b57",(0,i.jsx)(n.code,{children:"distinct"}),"\u6765\u62b5\u6d88\u5bf9\u96c6\u5408\u5173\u8054join\u6240\u5e26\u6765\u7684\u526f\u4f5c\u7528\u3002\u8fd9\u79cd\u573a\u666f\u662f\u5b8c\u5168\u5408\u7406\u7684\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u6240\u4ee5\uff0c\u7981\u6b62\u5728\u9876\u7ea7\u67e5\u8be2\u4e2d\u4f7f\u7528\u96c6\u5408\u5173\u8054\u662f\u4e00\u4e2a\u8f6f\u6027\u9650\u5236\uff0c\u800c\u975e\u521a\u6027\u9650\u5236\u3002\u53ef\u4ee5\u8f7b\u677e\u7a81\u7834\u3002"}),"\n",(0,i.jsxs)(s.A,{groupId:"language",children:[(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'BookTable book = Tables.BOOK_TABLE;\n\nList<Long> bookIds = sqlClient\n    .createQuery(book)\n    .where(\n        book\n            .asTableEx() \u2776\n            .authors()\n            .firstName()\n            .ilike("A%")\n    )\n    .select(book.id())\n    .distinct() \u2777\n    .execute();\n'})})}),(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val bookIds = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table\n                .asTableEx() \u2776\n                .authors\n                .firstName ilike "A%"\n        )\n        select(table.id)\n    }\n    .distinct() \u2777\n    .execute()\n'})})})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u2776 \u5f00\u53d1\u4eba\u5458\u5411Jimmer\u8868\u793aTA\u6e05\u695a\u81ea\u5df1\u5728\u5e72\u4ec0\u4e48\uff0c\u8bf7\u6c42Jimmer\u5141\u8bb8TA\u57fa\u4e8e\u96c6\u5408\u5173\u8054\u8fdb\u884c\u8868\u8fde\u63a5"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u2777 \u5f00\u53d1\u4eba\u5458\u5bf9\u81ea\u5df1\u7684\u884c\u4e3a\u8d1f\u8d23\uff0c\u5982\u679c\u6b64\u5904\u6709\u989d\u5916\u7684\u64cd\u4f5c\uff0c\u5219\u5e94\u8be5\u662fdistinct\u800c\u4e0d\u5e94\u8be5\u662f\u5206\u9875\u76f8\u5173\u7684\u64cd\u4f5c"}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select \n    distinct tb_1_.ID \nfrom BOOK as tb_1_ \n/* highlight-start */\ninner join BOOK_AUTHOR_MAPPING as tb_2_ \n    on tb_1_.ID = tb_2_.BOOK_ID \ninner join AUTHOR as tb_3_ \n    on tb_2_.AUTHOR_ID = tb_3_.ID \n/* highlight-end */\nwhere lower(tb_3_.FIRST_NAME) like ?\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>r,x:()=>s});var a=l(96540);const i={},t=a.createContext(i);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);