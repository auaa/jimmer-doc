"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1989],{30747:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=t(74848),a=t(28453),i=t(11470),s=t(19365);const l={sidebar_position:8,title:"\u975e\u7ed3\u6784\u5316\u6620\u5c04"},o=void 0,c={id:"mapping/advanced/join-sql",title:"\u975e\u7ed3\u6784\u5316\u6620\u5c04",description:"\u975e\u7ed3\u6784\u5316\u8bbe\u8ba1\u6848\u4f8b",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/join-sql.mdx",sourceDirName:"mapping/advanced",slug:"/mapping/advanced/join-sql",permalink:"/jimmer-doc/zh/docs/mapping/advanced/join-sql",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/join-sql.mdx",tags:[],version:"current",lastUpdatedAt:1722888025e3,sidebarPosition:8,frontMatter:{sidebar_position:8,title:"\u975e\u7ed3\u6784\u5316\u6620\u5c04"},sidebar:"tutorialSidebar",previous:{title:"JSON\u6620\u5c04",permalink:"/jimmer-doc/zh/docs/mapping/advanced/json"},next:{title:"\u4e2d\u95f4\u8868\u8fc7\u6ee4\u5668",permalink:"/jimmer-doc/zh/docs/mapping/advanced/join-table-filter"}},d={},u=[{value:"\u975e\u7ed3\u6784\u5316\u8bbe\u8ba1\u6848\u4f8b",id:"\u975e\u7ed3\u6784\u5316\u8bbe\u8ba1\u6848\u4f8b",level:2},{value:"\u975e\u7ed3\u6784\u5316\u5173\u8054",id:"\u975e\u7ed3\u6784\u5316\u5173\u8054",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u975e\u7ed3\u6784\u5316\u8bbe\u8ba1\u6848\u4f8b",children:"\u975e\u7ed3\u6784\u5316\u8bbe\u8ba1\u6848\u4f8b"}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7",(0,r.jsx)(n.a,{href:"../base/association",children:"\u5173\u8054\u6620\u5c04"}),"\u76f8\u5173\u5185\u5bb9\uff0c\u4e0d\u96be\u53d1\u73b0\uff0c\u6240\u6709\u5173\u8054\u90fd\u662f\u57fa\u4e8e",(0,r.jsx)(n.code,{children:"@JoinColumn"}),"\u548c",(0,r.jsx)(n.code,{children:"@JoinTable"})," ",(0,r.jsx)(n.em,{children:"\uff08\u53ef\u80fd\u88ab\u7701\u7565\uff09"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u867d\u7136Jimmer\u652f\u6301\u4f2a\u5916\u952e ",(0,r.jsx)(n.em,{children:"(\u5728\u5f00\u53d1\u4eba\u5458\u610f\u8bc6\u4e2d\u662f\u5916\u952e\uff0c\u4f46\u662f\u6570\u636e\u5e93\u4e2d\u5e76\u6ca1\u6709\u5bf9\u5e94\u7684\u5916\u952e\u7ea6\u675f)"}),"\uff0c\u4f46\u662f\u4e4b\u524d\u6211\u4eec\u8ba8\u8bba\u7684\u6240\u6709\u5173\u8054\u6620\u5c04\u90fd\u662f\u57fa\u4e8e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u76843NF\u8bbe\u8ba1\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u800c\uff0c\u4f60\u53ef\u80fd\u4f1a\u63a5\u624b\u4e00\u4e2a\u9057\u7559\u6570\u636e\u5e93\uff0c\u5305\u542b\u975e\u8303\u5f0f\u5316\u7684\u6570\u636e\u5e93\u8bbe\u8ba1\uff0c\u4f8b\u5982"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"create table book(\n    id bigint unsigned not null auto_increment primary key,\n    // highlight-next-line\n    author_ids varchar(100),\n    ...\u7701\u7565\u5176\u4ed6\u5b57\u6bb5...\n) engine=innodb;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\uff0c",(0,r.jsx)(n.code,{children:"author_ids"}),"\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u5217\uff0c\u5176\u6570\u636e\u4e3a\u5f53\u524d",(0,r.jsx)(n.code,{children:"Book"}),"\u6240\u5173\u8054\u7684\u6240\u6709",(0,r.jsx)(n.code,{children:"Author"}),"\u5bf9\u8c61\u7684id\u7528\u201c\u9017\u53f7\u201d\u62fc\u63a5\u5728\u4e00\u8d77\uff0c\u6bd4\u5982",(0,r.jsx)(n.code,{children:"1, 5, 100, 206"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5f88\u660e\u663e\uff0c\u8fd9\u662f\u4e00\u4e2a\u975e\u7ed3\u6784\u5316\u8bbe\u8ba1\uff0c\u4e0d\u6ee1\u8db3\u5173\u7cfb\u578b\u6570\u636e\u5e93\u76843NF\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"\u5bf9\u4e8e\u652f\u6301\u6570\u7ec4\u7c7b\u578b\u7684Postgres\u800c\u8a00\uff0c\u91c7\u7528\u6570\u7ec4\u662f\u66f4\u597d\u7684\u9009\u62e9\uff0c\u4f46\u662f\uff0c\u4e3a\u4e86\u8ba9\u793a\u8303\u6709\u66f4\u597d\u7684\u666e\u9002\u6027\uff0c\u8fd9\u4e2a\u4f8b\u5b50\u4ecd\u7136\u91c7\u7528\u5b57\u7b26\u4e32\u62fc\u63a5\uff0c\u4e0d\u5229\u7528\u6570\u636e\u5e93\u4ea7\u54c1\u7684\u7279\u6709\u529f\u80fd\u3002"})}),"\n",(0,r.jsx)(n.h2,{id:"\u975e\u7ed3\u6784\u5316\u5173\u8054",children:"\u975e\u7ed3\u6784\u5316\u5173\u8054"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3a\u4e86\u652f\u6301\u8fd9\u79cd\u975e\u7ed3\u6784\u5316\u8bbe\u8ba1\uff0cJimmer\u63d0\u4f9b\u4e86",(0,r.jsx)(n.code,{children:"@org.babyfish.jimmer.sql.JoinSql"}),"\u6ce8\u89e3\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@JoinSql"}),"\u5fc5\u987b\u4e5f\u53ea\u80fd\u548c",(0,r.jsx)(n.code,{children:"@ManyToMany"}),"\u914d\u5408\u4f7f\u7528"]})}),"\n",(0,r.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\uff0c\u521b\u5efa\u4e00\u4e2aSQL\u51fd\u6570 ",(0,r.jsx)(n.em,{children:"(\u8fd9\u91cc\u4ee5MySQL\u4e3a\u4f8b)"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"create function concatenation_string_contains(\n\tself varchar(100),\n\tid bigint\n) returns boolean\nbegin\n\tif self is null then\n\t\treturn false;\n\tend if;\n\treturn self regexp concat('(^|\\\\,)\\\\s*', id, '\\\\s*(\\\\,|$)');\nend;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8be5\u51fd\u6570\u5047\u8bbe\u53c2\u6570",(0,r.jsx)(n.code,{children:"self"}),"\u7684\u683c\u5f0f\u662f\u591a\u4e2a\u6570\u5b57\u7528\u9017\u53f7\u8fde\u63a5\u7684\u7ed3\u679c\uff0c\u5224\u65ad\u5176\u4e2d\u662f\u5426\u5305\u542b\u53c2\u6570",(0,r.jsx)(n.code,{children:"id"}),"\u3002\u4f8b\u5982"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"concatenation_string_contains('100, 200, 300', 200)"}),"\u8fd4\u56detrue"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"concatenation_string_contains('100, 200, 300', 201)"}),"\u8fd4\u56defalse"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u73b0\u5728\uff0c\u6211\u4eec\u53ef\u4ee5\u6620\u5c04\u975e\u7ed3\u6784\u5316\u7684\u591a\u5bf9\u591a\u5173\u8054"}),"\n",(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:'@Entity\npublic interface Book {\n\n    @ManyToMany\n    // highlight-next-line\n    @JoinSql(\n        "concatenation_string_contains(" +\n        "    %alias.author_ids, " +\n        "    %target_alias.id" +\n        ")"\n    )\n    List<Author> authors();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Book.kt"',children:'@Entity\ninterface Book {\n\n    @ManyToMany\n    // highlight-next-line\n    @JoinSql(\n        "concatenation_string_contains(" +\n        "    %alias.author_ids, " +\n        "    %target_alias.id" +\n        ")"\n    )\n    val authors: List<Author>\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@JsonSql"}),"\u4f7f\u7528\u7684SQL\u8868\u8fbe\u5f0f\u8868\u793a\u8fde\u63a5\u6761\u4ef6\uff0c\u5176\u4e2d"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"concatenation_string_contains"}),": \u6211\u4eec\u4e4b\u524d\u5b9a\u4e49\u7684SQL\u51fd\u6570"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"%alias"}),": Jimmer\u7ea6\u5b9a\u7684\u7279\u6b8a\u7b26\u53f7\uff0c\u8868\u793a\u5f53\u524d\u8868 ",(0,r.jsxs)(n.em,{children:["\uff08\u5728\u672c\u4f8b\u4e2d\u4e3a",(0,r.jsx)(n.code,{children:"book"}),"\u8868\uff09"]})," \u7684alias"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"%target_alias"}),": Jimmer\u7ea6\u5b9a\u7684\u7279\u6b8a\u7b26\u53f7\uff0c\u8868\u793a\u76ee\u6807\u8868 ",(0,r.jsxs)(n.em,{children:["\uff08\u5728\u672c\u4f8b\u4e2d\u4e3a",(0,r.jsx)(n.code,{children:"author"}),"\u8868\uff09"]})," \u7684alias"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsxs)(n.p,{children:["ORM\u81ea\u52a8\u751f\u6210SQL ",(0,r.jsxs)(n.em,{children:["(\u8fd9\u5bf9\u52a8\u6001\u67e5\u8be2\u975e\u5e38\u91cd\u8981\uff0c\u5c24\u5176\u662fJimmer\u8fd9\u79cd\u9996\u6b21\u63d0\u51fa",(0,r.jsx)(n.a,{href:"../../query/dynamic-join",children:"\u52a8\u6001\u8868\u8fde\u63a5"}),"\u6982\u5ff5\u7684ORM)"]}),"\uff0c\u7528\u6237\u65e0\u6cd5\u5e72\u9884\u6700\u7ec8SQL\u4e2d\u5404\u8868\u7684alias\u3002"]}),(0,r.jsxs)(n.p,{children:["\u56e0\u6b64\uff0c\u5728\u6b64\u4f7f\u7528",(0,r.jsx)(n.code,{children:"%alias"}),"\u548c",(0,r.jsx)(n.code,{children:"%target_alias"}),"\u662f\u552f\u4e00\u7684\u529e\u6cd5\u3002"]})]}),"\n",(0,r.jsxs)(n.p,{children:["\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u5982\u679c\u60f3\u5b9a\u4e49\u53cc\u5411\u591a\u5bf9\u591a\u5173\u8054\uff0c\u7531\u4e8e",(0,r.jsx)(n.code,{children:"Book.authors"}),"\u5df2\u7ecf\u4f7f\u7528\u4e86",(0,r.jsx)(n.code,{children:"@JoinSql"}),"\uff0c\u53e6\u5916\u4e00\u7aef\u7684",(0,r.jsx)(n.code,{children:"Author.books"}),"\u5c31\u6ca1\u5fc5\u8981\u518d\u6b21\u4f7f\u7528",(0,r.jsx)(n.code,{children:"@JoinSql"}),"\u4e86\uff0c\u548c\u4ee5\u524d\u4e00\u6837\uff0c\u4f7f\u7528",(0,r.jsx)(n.code,{children:"mappedBy"}),"\u8868\u793a\u81ea\u5df1\u662f\u4ece\u52a8\u7aef\u5c5e\u6027\u5373\u53ef"]}),"\n",(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Author.java"',children:'@Entity\npublic interface Author {\n\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    List<Book> books();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="Author.kt"',children:'@Entity\ninterface Author {\n\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    val books: List<Book>\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsxs)(n.p,{children:["\u9664\u975e\u5fc5\u987b\u8981\u517c\u5bb9\u5df2\u6709\u6570\u636e\u5e93\uff0c\u5426\u5219\u4e0d\u8981\u8fdb\u884c\u975e\u7ed3\u6784\u5316\u8bbe\u8ba1\u5e76\u7528",(0,r.jsx)(n.code,{children:"@JoinSql"}),"\u8fdb\u884c\u6620\u5c04\uff0c\u56e0\u4e3a\u975e\u7ed3\u6784\u5316\u591a\u5bf9\u591a\u5173\u8054\u5b58\u5728\u5f88\u591a\u9650\u5236\uff1a"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u65e0\u6cd5\u4f5c\u4e3a",(0,r.jsx)(n.a,{href:"./remote",children:"\u8fdc\u7a0b\u5173\u8054"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u65e0\u6cd5\u88ab\u53c2\u4e0e",(0,r.jsx)(n.a,{href:"../../query/dynamic-join/optimization",children:"\u534a\u8fde\u63a5\u4f18\u5316"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u65e0\u6cd5\u4f7f\u7528",(0,r.jsx)(n.a,{href:"../../cache/cache-type/association",children:"\u5173\u8054\u7f13\u5b58"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4e0d\u80fd\u4f5c\u4e3a\u6570\u636e\u7ed3\u6784\u7684\u4e00\u90e8\u5206\u88ab",(0,r.jsx)(n.a,{href:"../../mutation/save-command",children:"\u4fdd\u5b58\u6307\u4ee4"}),"\u4fdd\u5b58\u3002\u751a\u81f3\uff0c\u88ab\u4fdd\u5b58\u7684\u6570\u636e\u7ed3\u6784\u5305\u542b\u975e\u7ed3\u6784\u5316\u5173\u8054\u4f1a\u5bfc\u81f4\u5f02\u5e38"]}),"\n"]}),"\n"]})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),a=t(18215),i=t(23104),s=t(56347),l=t(205),o=t(57485),c=t(31682),d=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,u]=j({queryString:t,groupId:a}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),f=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,i]),tabValues:i}}var m=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==r&&(c(n),s(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...i,className:(0,a.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function k(e){const n=(0,m.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(96540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);