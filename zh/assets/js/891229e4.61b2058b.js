"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9019],{86706:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=r(74848),l=r(28453),a=r(11470),s=r(19365);const i={sidebar_position:2,title:"\u8868\u8fde\u63a5\u4f18\u5316"},o=void 0,c={id:"query/paging/unncessary-join",title:"\u8868\u8fde\u63a5\u4f18\u5316",description:"\u5728\u4e0a\u4e00\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u63d0\u53ca\uff0cJimmer\u4e0d\u4ec5\u80fd\u6839\u636edata-query\u81ea\u52a8\u751f\u6210count-query\uff0c\u8fd8\u80fd\u81ea\u52a8\u4f18\u5316count-query\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/paging/unncessary-join.mdx",sourceDirName:"query/paging",slug:"/query/paging/unncessary-join",permalink:"/jimmer-doc/zh/docs/query/paging/unncessary-join",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/query/paging/unncessary-join.mdx",tags:[],version:"current",lastUpdatedAt:1722888025e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u8868\u8fde\u63a5\u4f18\u5316"},sidebar:"tutorialSidebar",previous:{title:"\u7528\u6cd5",permalink:"/jimmer-doc/zh/docs/query/paging/usage"},next:{title:"\u53cd\u6392\u5e8f\u4f18\u5316",permalink:"/jimmer-doc/zh/docs/query/paging/reverse-sorting"}},u={},d=[{value:"\u4f18\u5316\u89c4\u5219",id:"\u4f18\u5316\u89c4\u5219",level:2},{value:"\u65e0\u6cd5\u4f18\u5316\u7684\u573a\u666f\u793a\u8303",id:"\u65e0\u6cd5\u4f18\u5316\u7684\u573a\u666f\u793a\u8303",level:2},{value:"\u53ef\u4f18\u5316\u7684\u573a\u666f\u793a\u8303",id:"\u53ef\u4f18\u5316\u7684\u573a\u666f\u793a\u8303",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u5728\u4e0a\u4e00\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u63d0\u53ca\uff0cJimmer\u4e0d\u4ec5\u80fd\u6839\u636e",(0,t.jsx)(n.code,{children:"data-query"}),"\u81ea\u52a8\u751f\u6210",(0,t.jsx)(n.code,{children:"count-query"}),"\uff0c\u8fd8\u80fd\u81ea\u52a8\u4f18\u5316",(0,t.jsx)(n.code,{children:"count-query"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u7531\u4e8e",(0,t.jsx)(n.code,{children:"count-query"}),"\u53ea\u5173\u5fc3\u6570\u636e\u7684\u603b\u884c\u6570\uff0c\u4e0d\u5728\u4e4e\u6570\u636e\u7684\u987a\u5e8f\u548c\u683c\u5f0f\u3002\u6240\u4ee5\uff0c\u539f",(0,t.jsx)(n.code,{children:"data-query"}),"\u4e2d\u7684\u67d0\u4e9btable join\u53ef\u80fd\u4e0d\u9700\u8981\u590d\u5236\u5230",(0,t.jsx)(n.code,{children:"count-query"}),"\u4e2d\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["Jimmer\u4f1a\u81ea\u52a8\u4f18\u5316",(0,t.jsx)(n.code,{children:"count-query"}),"\uff0c\u8ba9\u5176\u4ece\u539fdata-query\u4e2d\u590d\u5236\u5c3d\u53ef\u80fd\u5c11\u7684table join\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f18\u5316\u89c4\u5219",children:"\u4f18\u5316\u89c4\u5219"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u88abwhere\u5b50\u53e5\u4f7f\u7528\u7684\u8868\u8fde\u63a5\uff0c\u4e0d\u80fd\u88ab\u4f18\u5316\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5373\uff0c",(0,t.jsx)(n.strong,{children:"\u4ec5"}),"\u88ab\u539fdata-query\u7684\u9876\u7ea7\u67e5\u8be2\u7684",(0,t.jsx)(n.code,{children:"select"}),"\u6216",(0,t.jsx)(n.code,{children:"order by"}),"\u5b50\u53e5\u6240\u4f7f\u7528\u7684\u8868\u8fde\u63a5\uff0c\u624d\u53ef\u88ab\u4f18\u5316\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u57fa\u4e8e\u96c6\u5408\u5173\u8054(\u4e00\u5bf9\u591a\u3001\u591a\u5bf9\u591a)\u7684\u8868\u8fde\u63a5\uff0c\u4e0d\u80fd\u88ab\u4f18\u5316\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u96c6\u5408\u5173\u8054\u4f1a\u5bfc\u81f4\u91cd\u590d\u6570\u636e\uff0c\u8fdb\u800c\u5f71\u54cd\u6570\u636e\u884c\u6570\uff0c\u56e0\u6b64\u8fd9\u4e9b\u8868\u8fde\u63a5\u5fc5\u9700\u590d\u5236\u5230",(0,t.jsx)(n.code,{children:"count-query"}),"\uff0c\u65e0\u6cd5\u4f18\u5316\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u57fa\u4e8e\u5f15\u7528\u5173\u8054(\u4e00\u5bf9\u4e00\u3001\u591a\u5bf9\u4e00)\u7684\u8868\u8fde\u63a5\uff0c\u6709\u53ef\u80fd\u88ab\u4f18\u5316\uff0c\u9700\u6ee1\u8db3\u4ee5\u4e0b\u4efb\u4f55\u4e00\u4e2a\u6761\u4ef6\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u8fde\u63a5\u7c7b\u578b\u4e3a\u5de6\u5916\u8fde\u63a5"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u867d\u7136\u8fde\u63a5\u7c7b\u578b\u662f\u5185\u8fde\u63a5\uff0c\u4f46\u5173\u8054\u57fa\u4e8e\u975enull\u771f\u5b9e\u5916\u952e\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u6240\u8c13\u771f\u5b9e\u5916\u952e\uff0c\u6307\u6570\u636e\u5e93\u4e2d\u5b58\u5728\u5916\u952e\u7ea6\u675f\uff0c\u8bf7\u53c2\u89c1",(0,t.jsx)(n.a,{href:"../../mapping/base/foreignkey",children:"\u771f\u5047\u5916\u952e"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u7efc\u4e0a\u63cf\u8ff0\uff0c\u8981\u5224\u65ad\u539fdata-query\u4e2d\u67d0\u4e2a\u8868\u8fde\u63a5\u662f\u5426\u53ef\u4ee5\u5728count-query\u4e2d\u88ab\u81ea\u52a8\u5220\u9664\uff0c\u9700\u91c7\u7528\u5982\u4e0b\u4f18\u5316\u89c4\u5219\uff1a"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"4",children:(0,t.jsx)(n.p,{children:"\u4e0e"})}),(0,t.jsx)("td",{colspan:"2",children:(0,t.jsx)(n.p,{children:"\u662f\u5426\u57fa\u4e8e\u5f15\u7528\u5173\u8054\uff0c\u5373\u591a\u5bf9\u4e00\u6216\u4e00\u5bf9\u4e00"})})]}),(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colspan:"2",children:(0,t.jsxs)(n.p,{children:["\u662f\u5426 ",(0,t.jsx)("b",{children:"\u4ec5"})," \u88ab\u539fdata-query\u7684\u9876\u7ea7\u67e5\u8be2\u7684select\u6216orderBy\u5b50\u53e5\u6240\u7528"]})})}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"2",children:(0,t.jsx)(n.p,{children:"\u6216"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"\u662f\u5426\u662f\u5de6\u5916\u8fde\u63a5"})})]}),(0,t.jsx)("tr",{children:(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"\u5173\u8054\u975e\u7a7a\uff0c\u4e14\u6570\u636e\u5e93\u4e2d\u5b58\u5728\u5916\u952e\u7ea6\u675f"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u65e0\u6cd5\u4f18\u5316\u7684\u573a\u666f\u793a\u8303",children:"\u65e0\u6cd5\u4f18\u5316\u7684\u573a\u666f\u793a\u8303"}),"\n",(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title=""',children:"BookTable book = Tables.BOOK_TABLE;\nAuthorTableEx author = TableExes.AUTHOR_TABLE_EX;\n\nConfigurableRootQuery<BookTable, Book> query = sqlClient\n    .createQuery(book)\n    .where(\n        book.price().between(\n            new BigDecimal(20),\n            new BigDecimal(30)\n        )\n    )\n    // highlight-next-line\n    .orderBy(book.store().name())\n    .orderBy(book.name())\n    .select(book);\n\nint rowCount = query.fetchUnlimitedCount();\n"})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title=""',children:"val query = sqlClient.createQuery(Book::class) {\n    where(\n        table.price.between(\n            BigDecimal(20),\n            BigDecimal(30)\n        )\n    )\n    // highlight-next-line\n    orderBy(table.store.name) // \u03b1\n    orderBy(table.name)\n    select(table)\n}\n\nval rowCount = query.fetchUnlimitedCount()\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"\u6ce8\u91ca\u03b1\u5904"}),"\n",(0,t.jsxs)(n.p,{children:["\u867d\u7136",(0,t.jsx)(n.code,{children:"table.store()"}),"\u4ec5\u88aborderBy\u5b50\u53e5\u4f7f\u7528\uff0c\u6ca1\u6709\u88abwhere\u5b50\u53e5\u4f7f\u7528\uff0c\u4f46\u662f"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"table.store()"}),"\u662f\u5185\u8fde\u63a5"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Book.store"}),"\u5173\u8054\u53ef\u7a7a"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6240\u4ee5\uff0c\u4f18\u5316\u89c4\u5219\u5e76\u4e0d\u80fd\u751f\u6548\uff0ccount-query\u4ecd\u7136\u9700\u8981\u4fdd\u7559",(0,t.jsx)(n.code,{children:"table.store()"}),"\uff0c\u5e76\u6700\u7ec8\u5728SQL\u4e2d\u751f\u6210JOIN\u5b50\u53e5"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select \n    count(tb_1_.ID) \nfrom BOOK as tb_1_ \n/* highlight-start */\ninner join BOOK_STORE as tb_2_ \n    on tb_1_.STORE_ID = tb_2_.ID\n/* highlight-end */ \nwhere tb_1_.PRICE between ? and ?\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53ef\u4f18\u5316\u7684\u573a\u666f\u793a\u8303",children:"\u53ef\u4f18\u5316\u7684\u573a\u666f\u793a\u8303"}),"\n",(0,t.jsx)(n.p,{children:"\u9488\u5bf9\u4e0a\u6587\u6240\u8ba8\u8bba\u7684\u65e0\u6cd5\u88ab\u4f18\u5316\u7684\u8fd9\u79cd\u60c5\u51b5\uff0c\u91c7\u7528\u4ee5\u4e0b\u4efb\u4f55\u4e00\u79cd\u4fee\u6539\uff0c\u90fd\u53ef\u4ee5\u8ba9\u4f18\u5316\u751f\u6548"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u628a",(0,t.jsx)(n.code,{children:"Book.store"}),"\u5173\u8054\u4fee\u6539\u4e3a\u975e\u7a7a"]}),"\n",(0,t.jsx)(n.li,{children:"\u91c7\u7528\u5de6\u5916\u8fde\u63a5"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u9009\u7528\u7b2c\u4e8c\u79cd\u65b9\u6848\uff0c\u5de6\u5916\u8fde\u63a5"}),"\n",(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title=""',children:"BookTable book = Tables.BOOK_TABLE;\nAuthorTableEx author = TableExes.AUTHOR_TABLE_EX;\n\nConfigurableRootQuery<BookTable, Book> query = sqlClient\n    .createQuery(book)\n    .where(\n        book.price().between(\n            new BigDecimal(20),\n            new BigDecimal(30)\n        )\n    )\n    // highlight-next-line\n    .orderBy(book.store(JoinType.LEFT).name())\n    .orderBy(book.name())\n    .select(book);\n\nint rowCount = query.fetchUnlimitedCount();\n"})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title=""',children:"val query = sqlClient.createQuery(Book::class) {\n    where(\n        table.price.between(\n            BigDecimal(20),\n            BigDecimal(30)\n        )\n    )\n    // highlight-next-line\n    orderBy(table.`store?`.name) // \u03b1\n    orderBy(table.name)\n    select(table)\n}\n\nval rowCount = query.fetchUnlimitedCount()\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"\u73b0\u5728\uff0c\u4f18\u5316\u53ef\u4ee5\u751f\u6548\uff0c\u6700\u7ec8count-query\u751f\u6210SQL\u5982\u4e0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select \n    count(tb_1_.ID) \nfrom BOOK as tb_1_ \nwhere tb_1_.PRICE between ? and ?\n"})})]})}function b(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var t=r(18215);const l={tabItem:"tabItem_Ymn6"};var a=r(74848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(l.tabItem,s),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>q});var t=r(96540),l=r(18215),a=r(23104),s=r(56347),i=r(205),o=r(57485),c=r(31682),u=r(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:l}}=e;return{value:n,label:r,attributes:t,default:l}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function b(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const l=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(l.location.search);n.set(a,e),l.replace({...l.location,search:n.toString()})}),[a,l])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:l}=e,a=h(e),[s,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,d]=p({queryString:r,groupId:l}),[x,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,a]=(0,u.Dv)(r);return[l,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:l}),m=(()=>{const e=c??x;return b({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{m&&o(m)}),[m]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),j(e)}),[d,j,a]),tabValues:a}}var j=r(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function y(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,r=o.indexOf(n),l=i[r].value;l!==t&&(c(n),s(l))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,l.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function f(e){let{lazy:n,children:r,selectedValue:l}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function v(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",m.tabList),children:[(0,g.jsx)(y,{...n,...e}),(0,g.jsx)(f,{...n,...e})]})}function q(e){const n=(0,j.A)();return(0,g.jsx)(v,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var t=r(96540);const l={},a=t.createContext(l);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);