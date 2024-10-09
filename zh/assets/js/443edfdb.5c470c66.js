"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[593],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>N});var a=t(67294);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,l=function(n,e){if(null==n)return{};var t,a,l={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var m=a.createContext({}),p=function(n){var e=a.useContext(m),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=p(n.components);return a.createElement(m.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,l=n.mdxType,r=n.originalType,m=n.parentName,u=o(n,["components","mdxType","originalType","parentName"]),d=p(t),N=l,c=d["".concat(m,".").concat(N)]||d[N]||s[N]||r;return t?a.createElement(c,i(i({ref:e},u),{},{components:t})):a.createElement(c,i({ref:e},u))}));function N(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=n,o.mdxType="string"==typeof n?n:l,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(n,e,t)=>{t.d(e,{Z:()=>i});var a=t(67294),l=t(34334);const r="tabItem_Ymn6";function i(n){let{children:e,hidden:t,className:i}=n;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:t},e)}},65488:(n,e,t)=>{t.d(e,{Z:()=>N});var a=t(83117),l=t(67294),r=t(34334),i=t(72389),o=t(67392),m=t(7094),p=t(12466);const u="tabList__CuJ",s="tabItem_LNqP";function d(n){var e;const{lazy:t,block:i,defaultValue:d,values:N,groupId:c,className:T}=n,_=l.Children.map(n.children,(n=>{if((0,l.isValidElement)(n)&&"value"in n.props)return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=N??_.map((n=>{let{props:{value:e,label:t,attributes:a}}=n;return{value:e,label:t,attributes:a}})),g=(0,o.l)(k,((n,e)=>n.value===e.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===d?d:d??(null==(e=_.find((n=>n.props.default)))?void 0:e.props.value)??_[0].props.value;if(null!==O&&!k.some((n=>n.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${k.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:P}=(0,m.U)(),[y,I]=(0,l.useState)(O),h=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=c){const n=b[c];null!=n&&n!==y&&k.some((e=>e.value===n))&&I(n)}const A=n=>{const e=n.currentTarget,t=h.indexOf(e),a=k[t].value;a!==y&&(C(e),I(a),null!=c&&P(c,String(a)))},S=n=>{var e;let t=null;switch(n.key){case"ArrowRight":{const e=h.indexOf(n.currentTarget)+1;t=h[e]??h[0];break}case"ArrowLeft":{const e=h.indexOf(n.currentTarget)-1;t=h[e]??h[h.length-1];break}}null==(e=t)||e.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},T)},k.map((n=>{let{value:e,label:t,attributes:i}=n;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,key:e,ref:n=>h.push(n),onKeyDown:S,onFocus:A,onClick:A},i,{className:(0,r.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":y===e})}),t??e)}))),t?(0,l.cloneElement)(_.filter((n=>n.props.value===y))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},_.map(((n,e)=>(0,l.cloneElement)(n,{key:e,hidden:n.props.value!==y})))))}function N(n){const e=(0,i.Z)();return l.createElement(d,(0,a.Z)({key:String(e)},n))}},86124:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>m,default:()=>N,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=t(83117),l=(t(67294),t(3905)),r=t(65488),i=t(85162);const o={sidebar_position:9,title:"\u4e2d\u95f4\u8868\u8fc7\u6ee4\u5668"},m=void 0,p={unversionedId:"mapping/advanced/join-table-filter",id:"mapping/advanced/join-table-filter",title:"\u4e2d\u95f4\u8868\u8fc7\u6ee4\u5668",description:"\u4e24\u79cd\u573a\u666f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/join-table-filter.mdx",sourceDirName:"mapping/advanced",slug:"/mapping/advanced/join-table-filter",permalink:"/jimmer-doc/zh/docs/mapping/advanced/join-table-filter",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/join-table-filter.mdx",tags:[],version:"current",lastUpdatedAt:1710161015,formattedLastUpdatedAt:"2024\u5e743\u670811\u65e5",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"\u4e2d\u95f4\u8868\u8fc7\u6ee4\u5668"},sidebar:"tutorialSidebar",previous:{title:"\u975e\u7ed3\u6784\u5316\u6620\u5c04",permalink:"/jimmer-doc/zh/docs/mapping/advanced/join-sql"},next:{title:"Key",permalink:"/jimmer-doc/zh/docs/mapping/advanced/key"}},u={},s=[{value:"\u4e24\u79cd\u573a\u666f",id:"\u4e24\u79cd\u573a\u666f",level:2},{value:"1. \u53cc\u8fb9\u5b9e\u4f53\u7c7b\u578b\u76f8\u540c\u7684\u591a\u4e2a\u5173\u8054",id:"1-\u53cc\u8fb9\u5b9e\u4f53\u7c7b\u578b\u76f8\u540c\u7684\u591a\u4e2a\u5173\u8054",level:3},{value:"2. \u53cc\u8fb9\u5b9e\u4f53\u7c7b\u578b\u4e0d\u540c\u7684\u591a\u4e2a\u5173\u8054",id:"2-\u53cc\u8fb9\u5b9e\u4f53\u7c7b\u578b\u4e0d\u540c\u7684\u591a\u4e2a\u5173\u8054",level:3},{value:"\u6df7\u5408\u548c\u591a\u5bf9\u4e00\u548c\u591a\u5bf9\u591a",id:"\u6df7\u5408\u548c\u591a\u5bf9\u4e00\u548c\u591a\u5bf9\u591a",level:2},{value:"\u5b9a\u4e49\u5173\u8054",id:"\u5b9a\u4e49\u5173\u8054",level:3},{value:"\u6761\u4ef6\u7d22\u5f15",id:"\u6761\u4ef6\u7d22\u5f15",level:3}],d={toc:s};function N(n){let{components:e,...t}=n;return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4e24\u79cd\u573a\u666f"},"\u4e24\u79cd\u573a\u666f"),(0,l.kt)("p",null,"Jimmer\u652f\u6301\u4e2d\u95f4\u8868\u8fc7\u6ee4\u5668\uff0c\u6709\u4e24\u79cd\u573a\u666f"),(0,l.kt)("h3",{id:"1-\u53cc\u8fb9\u5b9e\u4f53\u7c7b\u578b\u76f8\u540c\u7684\u591a\u4e2a\u5173\u8054"},"1. \u53cc\u8fb9\u5b9e\u4f53\u7c7b\u578b\u76f8\u540c\u7684\u591a\u4e2a\u5173\u8054"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Shop {\n\n    @Id\n    long id();\n\n    String name();\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        readonly = true\n    )\n    List<Customer> customers();\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "VIP"\n        )\n    )\n    List<Customer> vipCustomers();\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "ORDINARY"\n        )\n    )\n    List<Customer> ordinaryCustomers();\n}\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface Shop {\n\n    @Id\n    val id: Long\n\n    val name: String\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        readonly = true\n    )\n    val customers: List<Customer>\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        filter = JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "VIP"\n        )\n    )\n    val vipCustomers: List<Customer>\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        filter = JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "ORDINARY"\n        )\n    )\n    val ordinaryCustomers: List<Customer>\n}\n')))),(0,l.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Shop.customers"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Shop.vipCustomers"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"Shop.ordinaryCustomers"),"\u5171\u4eab\u4e00\u5f20\u4e2d\u95f4\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table SHOP_CUSTOMER_MAPPING(\n    SHOP_ID bigint not null,\n    CUSTOMER_ID bigint not null,\n    MAPPING_TYPE varchar(8) not null\n);\n\n// \u4e2d\u95f4\u8868\u4e3b\u952e\u662f\u5426\u5305\u542b\u8fc7\u6ee4\u5b57\u6bb5\uff0c\u9700\u8981\u5177\u4f53\u95ee\u9898\u5177\u4f53\u5206\u6790\u3002\n// \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u4e00\u4e2a`Shop`\u548c\u4e00\u4e2a`Customer`\u4e4b\u95f4\u7684\u5173\u8054\n// \u4e0d\u80fd\u65e2\u662f\"VIP\"\u53c8\u662f\"ORDINARY\"\uff0c\n// \u6240\u4ee5\uff0c\u4e3b\u952e\u7ea6\u675f\u4e0d\u5305\u542b`MAPPING_TYPE`\nalter table SHOP_CUSTOMER_MAPPING\n    add constraint pk_SHOP_CUSTOMER_MAPPING\n        primary key(SHOP_ID, CUSTOMER_ID);\n\nalter table SHOP_CUSTOMER_MAPPING\n    add constraint fk_SHOP_CUSTOMER_MAPPING__SHOP\n        foreign key(SHOP_ID)\n            references SHOP(ID);\n\nalter table SHOP_CUSTOMER_MAPPING\n    add constraint fk_SHOP_CUSTOMER_MAPPING__CUSTOMER\n        foreign key(CUSTOMER_ID)\n            references CUSTOMER(ID);\n\nalter table SHOP_CUSTOMER_MAPPING\n    add constraint fk_SHOP_CUSTOMER_MAPPING__MAPPING_TYPE\n        check(MAPPING_TYPE in ('VIP', 'ORDINARY'));\n")),(0,l.kt)("p",null,"\u8be5\u8868\u4ee5\u5982\u4e0b\u65b9\u5f0f\u5b58\u50a8\u6570\u636e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"SHOP_ID"),(0,l.kt)("th",{parentName:"tr",align:null},"CUSTOMER_ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MAPPING_TYPE"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"21"),(0,l.kt)("td",{parentName:"tr",align:null},"3176"),(0,l.kt)("td",{parentName:"tr",align:null},"VIP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"21"),(0,l.kt)("td",{parentName:"tr",align:null},"1087"),(0,l.kt)("td",{parentName:"tr",align:null},"ORDINARY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"21"),(0,l.kt)("td",{parentName:"tr",align:null},"9155"),(0,l.kt)("td",{parentName:"tr",align:null},"ORDINARY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"40"),(0,l.kt)("td",{parentName:"tr",align:null},"8347"),(0,l.kt)("td",{parentName:"tr",align:null},"VIP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"40"),(0,l.kt)("td",{parentName:"tr",align:null},"4365"),(0,l.kt)("td",{parentName:"tr",align:null},"ORDINARY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"40"),(0,l.kt)("td",{parentName:"tr",align:null},"3478"),(0,l.kt)("td",{parentName:"tr",align:null},"ORDINARY")))),(0,l.kt)("p",null,"\u5176\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Shop.vipCustomers"),"\u5bf9\u5e94\u4e24\u6761\u6570\u636e\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Shop.ordinaryCustomers"),"\u5bf9\u5e944\u6761\u6570\u636e\uff0c\u800c",(0,l.kt)("inlineCode",{parentName:"p"},"Shop.customers"),"\u53ef\u4ee5\u770b\u5230\u6240\u6709\u6570\u636e\uff0c\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Shop.customers = Shop.vipCustomers + Shop.ordinaryCustomers\n")),(0,l.kt)("p",null,"\u53ef\u89c1\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Shop.customers"),"\u5e76\u975e\u539f\u59cb\u5173\u8054\uff0c\u800c\u662f\u5176\u4ed6\u591a\u4e2a\u5173\u8054\u7684\u5e76\u96c6\u3002\u6211\u4eec\u4e0d\u59a8\u79f0\u5176\u4e3a\u5e76\u96c6\u5173\u8054\u3002"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u5e76\u96c6\u5173\u8054\u4e0d\u80fd\u88ab\u76f4\u63a5\u4fee\u6539\uff0c\u56e0\u6b64\u5fc5\u987b\u58f0\u660e",(0,l.kt)("inlineCode",{parentName:"p"},"readonly = true"),"\u3002")),(0,l.kt)("p",null,"\u5176\u5b9e\uff0c\u5e76\u96c6\u5173\u8054",(0,l.kt)("inlineCode",{parentName:"p"},"Shop.customers"),"\u8fd8\u6709\u53e6\u5916\u4e00\u79cd\u7b49\u4ef7\u7684\u5199\u6cd5"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u53c2\u6570...,\n    filter = @JoinTable.JoinTableFilter(\n        columnName = "MAPPING_TYPE",\n        type = String.class,\n        // highlight-next-line\n        values = {"VIP", "ORDINARY"}\n    )\n)\nList<Customer> customers();\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u53c2\u6570...,\n    filter = @JoinTable.JoinTableFilter(\n        columnName = "MAPPING_TYPE",\n        type = String.class,\n        // highlight-next-line\n        values = {"VIP", "ORDINARY"}\n    )\n)\nval customers: List<Customer>\n')))),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u8ba9\u6211\u4eec\u770b\u770b\u8fd9\u4e09\u4e2a\u5173\u8054\u7684JOIN\u884c\u4e3a\u7684\u5dee\u5f02"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Shop.customers")),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ShopTable table = Tables.SHOP_TABLE;\n\nList<Long> shopIds = sqlClient\n    .create(table)\n    .where(\n        table\n            .asTableEx()\n            // highlight-next-line\n            .customers()\n            .name().eq("Smith")\n    )\n    .select(table.id())\n    .distinct()\n    .execute();\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val shopIds = sqlClient\n    .create(Shop::class) {\n        where(\n            table\n                .asTableEx()\n                // highlight-next-line\n                .customers\n                .name eq "Smith"\n        )\n        select(table.id())\n    }\n    .distinct()\n    .execute();\n')))),(0,l.kt)("p",{parentName:"li"},"\u6700\u7ec8\u751f\u6210\u7684SQL\u4e3a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select distinct tb_1_.ID, tb_1_.NAME\nfrom SHOP tb_1_\ninner join SHOP_CUSTOMER_MAPPING tb_2_ \n    /* highlight-next-line */\n    on tb_1_.ID = tb_2_.SHOP_ID\ninner join CUSTOMER tb_3_ \n    on tb_2_.CUSTOMER_ID = tb_3_.ID\nwhere tb_3_.NAME = ? /* Smith */\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Shop.vipCustomers")),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ShopTable table = Tables.SHOP_TABLE;\n\nList<Long> shopIds = sqlClient\n    .create(table)\n    .where(\n        table\n            .asTableEx()\n            // highlight-next-line\n            .vipCustomers()\n            .name().eq("Smith")\n    )\n    .select(table.id())\n    .distinct()\n    .execute();\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val shopIds = sqlClient\n    .create(Shop::class) {\n        where(\n            table\n                .asTableEx()\n                // highlight-next-line\n                .vipCustomers\n                .name eq "Smith"\n        )\n        select(table.id())\n    }\n    .distinct()\n    .execute();\n')))),(0,l.kt)("p",{parentName:"li"},"\u6700\u7ec8\u751f\u6210\u7684SQL\u4e3a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select distinct tb_1_.ID, tb_1_.NAME\nfrom SHOP tb_1_\ninner join SHOP_CUSTOMER_MAPPING tb_2_ \n    /* highlight-next-line */\n    on tb_1_.ID = tb_2_.SHOP_ID\n    /* highlight-next-line */\n    and tb_2_.MAPPING_TYPE = ? /* VIP */\nand\n    tb_2_.type = ?\ninner join CUSTOMER tb_3_ \n    on tb_2_.CUSTOMER_ID = tb_3_.ID\nwhere tb_3_.NAME = ? /* Smith */\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Shop.ordinaryCustomers")),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ShopTable table = Tables.SHOP_TABLE;\n\nList<Long> shopIds = sqlClient\n    .create(table)\n    .where(\n        table\n            .asTableEx()\n            // highlight-next-line\n            .ordinaryCustomers()\n            .name().eq("Smith")\n    )\n    .select(table.id())\n    .distinct()\n    .execute();\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val shopIds = sqlClient\n    .create(Shop::class) {\n        where(\n            table\n                .asTableEx()\n                // highlight-next-line\n                .ordinaryCustomers\n                .name eq "Smith"\n        )\n        select(table.id())\n    }\n    .distinct()\n    .execute();\n')))),(0,l.kt)("p",{parentName:"li"},"\u6700\u7ec8\u751f\u6210\u7684SQL\u4e3a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select distinct tb_1_.ID, tb_1_.NAME\nfrom SHOP tb_1_\ninner join SHOP_CUSTOMER_MAPPING tb_2_ \n    /* highlight-next-line */\n    on tb_1_.ID = tb_2_.SHOP_ID\n    /* highlight-next-line */\n    and tb_2_.MAPPING_TYPE = ? /* ORDINARY */\nand\n    tb_2_.type = ?\ninner join CUSTOMER tb_3_ \n    on tb_2_.CUSTOMER_ID = tb_3_.ID\nwhere tb_3_.NAME = ? /* Smith */\n")))),(0,l.kt)("h3",{id:"2-\u53cc\u8fb9\u5b9e\u4f53\u7c7b\u578b\u4e0d\u540c\u7684\u591a\u4e2a\u5173\u8054"},"2. \u53cc\u8fb9\u5b9e\u4f53\u7c7b\u578b\u4e0d\u540c\u7684\u591a\u4e2a\u5173\u8054"),(0,l.kt)("p",null,"\u6709\u4e00\u79cd\u5e38\u89c1\u7684\u6848\u4f8b\uff0c\u9879\u76ee\u4e2d\u6709\u5f88\u591a\u79cd\u4e0d\u540c\u7684\u6570\u636e\uff0c\u6bcf\u4e00\u79cd\u6570\u636e\u90fd\u53ef\u4ee5\u6807\u8bb0\u591a\u4e2aTag\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Tag")),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\npublic interface Tag {\n\n    @Id\n    long id();\n\n    String name();\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Entity\ninterface Tag {\n\n    @Id\n    val id: Long\n\n    val name: String\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"BookStore")),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface BookStore {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING",\n        joinColumns = @joinColumn(\n            name = "SOURCE_ID",\n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class,\n            values = "BOOK_STORE",\n        )\n    )\n    List<Tag> tags();\n    \n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface BookStore {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING",\n        joinColumns = @joinColumn(\n            name = "SOURCE_ID",\n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class,\n            values = "BOOK_STORE",\n        )\n    )\n    val tags: List<Tag>\n    \n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Book")),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING",\n        joinColumns = @joinColumn(\n            name = "SOURCE_ID",\n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class,\n            values = "BOOK",\n        )\n    )\n    List<Tag> tags();\n    \n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING",\n        joinColumns = @joinColumn(\n            name = "SOURCE_ID",\n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class,\n            values = "BOOK",\n        )\n    )\n    val tags: List<Tag>\n    \n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Author")),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Author {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING",\n        joinColumns = @joinColumn(\n            name = "SOURCE_ID",\n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class,\n            values = "AUTHOR",\n        )\n    )\n    List<Tag> tags();\n    \n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface Author {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING",\n        joinColumns = @joinColumn(\n            name = "SOURCE_ID",\n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class,\n            values = "AUTHOR",\n        )\n    )\n    val tags: List<Tag>\n    \n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n')))))),(0,l.kt)("p",null,"\u5bf9\u4e8e\u4e2d\u95f4\u8868",(0,l.kt)("inlineCode",{parentName:"p"},"SOURCE_TAG_MAPPING"),"\u800c\u8a00\uff0c\u867d\u7136\u5176\u5916\u952e",(0,l.kt)("inlineCode",{parentName:"p"},"TAG_ID"),"\u6307\u5411TAG\u8868\uff0c\u4f46\u662f\u53e6\u5916\u4e00\u4e2a\u5916\u952e",(0,l.kt)("inlineCode",{parentName:"p"},"SOURCE_ID"),"\u5374\u6ca1\u6709\u56fa\u5b9a\u7684\u76ee\u6807\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"BOOK_STORE"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"BOOK"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"AUTHOR"),"\u90fd\u6709\u53ef\u80fd\u662f\u5176\u76ee\u6807\u8868\u3002"),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u65e0\u6cd5\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"SOURCE_ID"),"\u6dfb\u52a0\u5916\u952e\u7ea6\u675f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table SOURCE_TAG_MAPPING(\n    SOURCE_ID bigint not null,\n    TAG_ID bigint not null,\n    SOURCE_TYPE varchar(10) not null\n);\n\n// \u4e2d\u95f4\u8868\u4e3b\u952e\u662f\u5426\u5305\u542b\u8fc7\u6ee4\u5b57\u6bb5\uff0c\u9700\u8981\u5177\u4f53\u95ee\u9898\u5177\u4f53\u5206\u6790\u3002\n// \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u4e0d\u80fd\u7c7b\u578b\u7684`SOURCE_ID`\u53ef\u80fd\u76f8\u7b49\uff0c\n// \u6240\u4ee5\uff0c\u4e3b\u952e\u7ea6\u675f\u9700\u8981\u5305\u542b`SOURCE_TYPE`\nalter table SOURCE_TAG_MAPPING\n    add constraint pk_SHOP_CUSTOMER_MAPPING\n        primary key(SOURCE_ID, TAG_ID, SOURCE_TYPE);\n\n// highlight-next-line\n// `SOURCE_ID`\u53ef\u80fd\u5f15\u7528`BOOK_STORE`\u3001`BOOK`\u548c`AUTHOR`\u8868\uff0c\n// highlight-next-line\n// \u7531\u4e8e\u6ca1\u6709\u56fa\u5b9a\u7684\u884c\u4e3a\uff0c\u6545\u800c\u65e0\u6cd5\u4e3a\u5efa\u7acb\u5916\u952e\u7ea6\u675f\n\nalter table SOURCE_TAG_MAPPING\n    add constraint fk_SOURCE_TAG_MAPPING__TAG\n        primary key(TAG_ID)\n            references TAG(ID);\n\nalter table SOURCE_TAG_MAPPING\n    add constraint ck_SOURCE_TAG_MAPPING__SOURCE_TYPE\n        check(SOURCE_TYPE in ('BOOK_STORE', 'BOOK', 'AUTHOR'));\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SOURCE_ID"),"\u65e0\u6cd5\u5efa\u7acb\u5916\u952e\u7ea6\u675f\uff0c\u6240\u4ee5\uff0c\u8fd9\u662f\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"../base/foreignkey"},"\u4f2a\u5916\u952e"),"\uff0c\u6240\u4ee5\uff0c\u5373\uff0c\u4e0a\u8ff0\u4ee3\u7801\u4e2d\u7684"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@JoinTable(\n    joinColumns = @joinColumn(\n        name = "SOURCE_ID",\n        // highlight-next-line\n        foreignKeyType = ForeignKeyType.FAKE\n    ),\n    ...\u7701\u7565\u5176\u4ed6\u53c2\u6570...\n)\n')),(0,l.kt)("p",null,"\u8be5\u8868\u6570\u636e\u770b\u8d77\u6765\u5982\u590f"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"SOURCE_ID"),(0,l.kt)("th",{parentName:"tr",align:null},"TARGET_ID"),(0,l.kt)("th",{parentName:"tr",align:null},"SOURCE_TYPE"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOK_STORE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOK_STORE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"86"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"86"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"781"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"AUTHOR")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"781"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"AUTHOR")))),(0,l.kt)("h2",{id:"\u6df7\u5408\u548c\u591a\u5bf9\u4e00\u548c\u591a\u5bf9\u591a"},"\u6df7\u5408\u548c\u591a\u5bf9\u4e00\u548c\u591a\u5bf9\u591a"),(0,l.kt)("p",null,"\u591a\u5bf9\u4e00\u548c\u591a\u5bf9\u591a\u90fd\u53ef\u4ee5\u7ed9\u4e88\u4e2d\u95f4\u8868\u6620\u5c04\uff0c\u6240\u4ee5\uff0c\u53ef\u4ee5\u5229\u7528\u8fd9\u4e2a\u6280\u5de7\u628a\u4e8c\u8005\u7684\u4e2d\u95f4\u8868\u5408\u5e76\u6210\u4e00\u5f20\u8868\u3002\u4f46\u662f\uff0c\u8bf7\u6ce8\u610f"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u5f3a\u70c8\u5efa\u8bae\u4ec5\u5728\u6570\u636e\u5e93\u652f\u6301\u6761\u4ef6\u7d22\u5f15\u65f6\uff0c\u624d\u4f7f\u7528\u6b64\u7528\u6cd5\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u5373\uff0c\u4e0d\u8981\u5728\u4ee5MySQL\u4e3a\u4ee3\u8868\u7684\u4e0d\u652f\u6301\u6761\u4ef6\u7d22\u5f15\u7684\u6570\u636e\u5e93\u4e2d\u4f7f\u7528\u6b64\u7528\u6cd5\u3002")),(0,l.kt)("h3",{id:"\u5b9a\u4e49\u5173\u8054"},"\u5b9a\u4e49\u5173\u8054"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID",\n        readonly = true\n    )\n    List<Author> authors();\n\n    @Nullable\n    @ManyToOne\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "PRIMARY"\n        )\n    )\n    Author primaryAuthor();\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "SECONDARY"\n        )\n    )\n    List<Author> secondaryAuthors();\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID",\n        readonly = true\n    )\n    val authors: List<Author>\n\n    @Nullable\n    @ManyToOne\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID",\n        filter = JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "PRIMARY"\n        )\n    )\n    val primaryAuthor: Author?\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "SECONDARY"\n        )\n    )\n    val secondaryAuthors: List<Author>\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n')))),(0,l.kt)("p",null,"\u5f88\u660e\u663e"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"authors")," ",(0,l.kt)("em",{parentName:"p"},"(many-to-many)")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"primaryAuthor")," ",(0,l.kt)("em",{parentName:"p"},"(many-to-one)")," + ",(0,l.kt)("inlineCode",{parentName:"p"},"secondaryAuthors")," ",(0,l.kt)("em",{parentName:"p"},"(many-to-many)")),(0,l.kt)("h3",{id:"\u6761\u4ef6\u7d22\u5f15"},"\u6761\u4ef6\u7d22\u5f15"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table BOOK_AUTHOR_MAPPING(\n    BOOK_ID bigint not null,\n    AUTHOR_ID bigint not null,\n    MAPPING_TYPE varchar(9) not null\n);\n\n// \u4e2d\u95f4\u8868\u4e3b\u952e\u662f\u5426\u5305\u542b\u8fc7\u6ee4\u5b57\u6bb5\uff0c\u9700\u8981\u5177\u4f53\u95ee\u9898\u5177\u4f53\u5206\u6790\u3002\n// \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u4e00\u4e2a`Author`\u548c\u4e00\u4e2a`Book`\u4e4b\u95f4\u7684\u5173\u8054\n// \u4e0d\u80fd\u65e2\u662f\"PRIMARY\"\u53c8\u662f\"SECONDARY\"\uff0c\n// \u6240\u4ee5\uff0c\u4e3b\u952e\u7ea6\u675f\u4e0d\u5305\u542b`MAPPING_TYPE`\nalter table BOOK_AUTHOR_MAPPING\n    add constraint pk_BOOK_AUTHOR_MAPPING\n        primary key(BOOK_ID, AUTHOR_ID);\n\nalter table BOOK_AUTHOR_MAPPING\n    add constraint fk_BOOK_AUTHOR_MAPPING__BOOK\n        foreign key(BOOK_ID)\n            references BOOK(ID);\n\nalter table BOOK_AUTHOR_MAPPING\n    add constraint fk_BOOK_AUTHOR_MAPPING__BOOK\n        foreign key(AUTHOR_ID)\n            references AUTHOR(ID);\n\nalter table BOOK_AUTHOR_MAPPING\n    add constraint ck_BOOK_AUTHOR_MAPPING__MAPPING_TYPE\n        check(MAPPING_TYPE in ('PRIMARY', 'SECONDARY'));\n\n// highlight-start\n// \u4e0d\u540c\u6570\u636e\u5e93\u7684\u6761\u4ef6\u7d22\u5f15\u7684\u8bed\u6cd5\u53ef\u80fd\u6709\u5c11\u91cf\u5dee\u5f02\uff0c\n// \u8fd9\u91cc\u4ee5Postgres\u4e3a\u4f8b\ncreate unique index BOOK_AUTHOR_MAPPING__PRIMARY_INDEX \n    on BOOK_AUTHOR_MAPPING(AUTHOR_ID)\n    when MAPPING_TYPE = 'PRIMARY';\n// highlight-end\n")),(0,l.kt)("p",null,"\u5176\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"when"),"\u8bed\u53e5\u975e\u5e38\u91cd\u8981\uff0c\u8868\u793a\u8be5\u7d22\u5f15\u65f6\u6761\u4ef6\u7d22\u5f15\u3002"),(0,l.kt)("p",null,"\u4e0d\u540c\u6570\u636e\u5e93\u7684\u6761\u4ef6\u7d22\u5f15\u7684\u8bed\u6cd5\u53ef\u80fd\u6709\u5c11\u91cf\u5dee\u5f02\uff0c\u8fd9\u91cc\u4ee5Postgres\u4e3a\u4f8b\u3002\u66f4\u591a\u8be6\u60c5\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/indexes-partial.html"},"https://www.postgresql.org/docs/current/indexes-partial.html")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f53",(0,l.kt)("inlineCode",{parentName:"p"},"MAPPING_TYPE"),'\u4e3a"PRIMARY"\u65f6\uff0c\u4e3a',(0,l.kt)("inlineCode",{parentName:"p"},"AUTHOR_ID"),"\u5916\u952e\u6dfb\u52a0\u4e00\u4e2a\u552f\u4e00\u7d22\u5f15\uff0c\u4fdd\u8bc1\u6bcf\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"Book"),"\u6700\u591a\u53ea\u80fd\u6709\u4e00\u4e2aprimary ",(0,l.kt)("inlineCode",{parentName:"p"},"Author"),"\u3002\n\u5373\uff0c\u4fdd\u8bc1",(0,l.kt)("inlineCode",{parentName:"p"},"Book.primaryAuthor"),"\u4e3a\u591a\u5bf9\u4e00\u5173\u8054\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5426\u5219\uff0c\u6ca1\u6709\u552f\u4e00\u6027\u7ea6\u675f\uff0c\u6bcf\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"Book"),"\u53ef\u4ee5\u6709\u4efb\u610f\u6570\u91cf\u7684secondary ",(0,l.kt)("inlineCode",{parentName:"p"},"Author"),"\u3002\n\u5373\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Book.secondaryAuthors"),"\u4ecd\u7136\u4e3a\u591a\u5bf9\u591a\u5173\u8054\u3002"))))}N.isMDXComponent=!0}}]);