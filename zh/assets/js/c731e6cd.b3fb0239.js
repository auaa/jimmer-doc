"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5197],{32260:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"mapping/advanced/json","title":"JSON\u6620\u5c04","description":"Jimmer\u652f\u6301JSON\u5c5e\u6027\u3002\u5728Java/Kotlin\u5b9e\u4f53\u7c7b\u578b\u4e2d\uff0c\u8fd9\u79cd\u5c5e\u6027\u53ef\u4ee5\u88ab\u58f0\u660e\u4e3a\u9664\u4e86java.lang.Object\u548ckotlin.Any\u5916\u7684\u4efb\u4f55\u7c7b\u578b\uff0c\u5728\u6570\u636e\u5e93\u4e2d\uff0c\u5bf9\u5e94\u5217\u7684\u5b58\u50a8\u7684\u4fe1\u606f\u662fJSON\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/json.mdx","sourceDirName":"mapping/advanced","slug":"/mapping/advanced/json","permalink":"/jimmer-doc/zh/docs/mapping/advanced/json","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/json.mdx","tags":[],"version":"current","lastUpdatedAt":1731427770000,"sidebarPosition":7,"frontMatter":{"sidebar_position":7,"title":"JSON\u6620\u5c04"},"sidebar":"tutorialSidebar","previous":{"title":"Enum\u6620\u5c04","permalink":"/jimmer-doc/zh/docs/mapping/advanced/enum"},"next":{"title":"\u975e\u7ed3\u6784\u5316\u6620\u5c04","permalink":"/jimmer-doc/zh/docs/mapping/advanced/join-sql"}}');var t=a(74848),l=a(28453),i=a(11470),s=a(19365);const c={sidebar_position:7,title:"JSON\u6620\u5c04"},o=void 0,d={},u=[{value:"\u5168\u5c40JSON\u6620\u5c04",id:"\u5168\u5c40json\u6620\u5c04",level:2},{value:"\u5c5e\u6027\u7ea7JSON\u6620\u5c04",id:"\u5c5e\u6027\u7ea7json\u6620\u5c04",level:2},{value:"ObjectMapper\u914d\u7f6e",id:"objectmapper\u914d\u7f6e",level:2},{value:"\u4f7f\u7528\u5e95\u5c42API",id:"\u4f7f\u7528\u5e95\u5c42api",level:3},{value:"\u4f7f\u7528Spring Boot Starter",id:"\u4f7f\u7528spring-boot-starter",level:3}];function p(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Jimmer\u652f\u6301JSON\u5c5e\u6027\u3002\u5728Java/Kotlin\u5b9e\u4f53\u7c7b\u578b\u4e2d\uff0c\u8fd9\u79cd\u5c5e\u6027\u53ef\u4ee5\u88ab\u58f0\u660e\u4e3a\u9664\u4e86",(0,t.jsx)(n.code,{children:"java.lang.Object"}),"\u548c",(0,t.jsx)(n.code,{children:"kotlin.Any"}),"\u5916\u7684\u4efb\u4f55\u7c7b\u578b\uff0c\u5728\u6570\u636e\u5e93\u4e2d\uff0c\u5bf9\u5e94\u5217\u7684\u5b58\u50a8\u7684\u4fe1\u606f\u662fJSON\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"JSON\u5c5e\u6027\u662f\u7b80\u5355\u5c5e\u6027\uff0c\u800c\u975e\u5173\u8054\u5c5e\u6027\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6309\u76ee\u524d\u5b9e\u73b0\uff0cPostgres\u4e2d\u5bf9\u5e94\u5217\u7684\u7c7b\u578b\u5e94\u4e3a",(0,t.jsx)(n.code,{children:"jsonb"}),"\uff0c\u5176\u4ed6\u6570\u636e\u5e93\u4e2d\u5bf9\u5e94\u5217\u7684\u7c7b\u578b\u5e94\u4e3a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n"]})}),"\n",(0,t.jsxs)(n.p,{children:["Jimmer\u63d0\u4f9b",(0,t.jsx)(n.code,{children:"org.babyfish.jimmer.sql.Serialized"}),"\uff0c\u6709\u4e24\u79cd\u4f7f\u7528JSON\u6620\u5c04\u7684\u65b9\u5f0f"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5168\u5c40JSON\u6620\u5c04"}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u5c5e\u6027\u7684\u7c7b\u578b\u662f\u81ea\u5b9a\u4e49\u7c7b\uff0c\u800c\u975e\u6570\u7ec4\u3001\u96c6\u5408\u6216Map\u3002\u53ef\u4ee5\u7528",(0,t.jsx)(n.code,{children:"@Serialized"}),"\u4fee\u9970\u8fd9\u4e2a\u7c7b\u3002\u8fd9\u6837\uff0c\u4efb\u4f55\u5b9e\u4f53\u4e2d\u76f8\u540c\u7c7b\u578b\u7684\u5c5e\u6027\u90fd\u4f1a\u6210\u4e3aJSON\u5c5e\u6027\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5c5e\u6027\u7ea7JSON\u6620\u5c04"}),"\n",(0,t.jsxs)(n.p,{children:["\u65e0\u8bba\u5c5e\u6027\u662f\u4ec0\u4e48\u7c7b\u578b\uff0c\u90fd\u53ef\u4ee5\u4f7f\u7528",(0,t.jsx)(n.code,{children:"@Serialized"}),"\u4fee\u9970\u5f53\u524d\u5c5e\u6027\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u6570\u7ec4\u3001\u96c6\u5408\u6216Map\u7c7b\u578b\u7684\u5c5e\u6027\u5fc5\u987b\u4f7f\u7528\u5c5e\u6027\u7ea7\u6620\u5c04\uff1b\u7136\u800c\uff0c\u5bf9\u4e8e\u81ea\u5b9a\u4e49\u7684\u7c7b\u578b\u800c\u8a00\uff0c\u4f7f\u7528\u5168\u5c40\u914d\u7f6e\u6620\u5c04\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u5168\u5c40json\u6620\u5c04",children:"\u5168\u5c40JSON\u6620\u5c04"}),"\n",(0,t.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u5b9a\u4e49\u81ea\u5b9a\u4e49\u7c7b\uff0c\u5e76\u7528",(0,t.jsx)(n.code,{children:"@Serialized"}),"\u4fee\u9970"]}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="UserType.java"',children:"// highlight-next-line\n@Serialized\npublic class UserType {\n\n    ...\u7701\u7565\u6210\u5458\uff0c\u53ef\u5305\u542b\u4efb\u610f\u4fe1\u606f...\n    ...\u53ea\u8981\u652f\u6301Json\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u5373\u53ef...\n}\n"})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="UserType.kt"',children:"// highlight-next-line\n@Serialized\ndata class UserType(\n\n    ...\u7701\u7565\u53c2\u6570\uff0c\u53ef\u5305\u542b\u4efb\u4f55\u4fe1\u606f...\n    ...\u53ea\u8981\u652f\u6301Json\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u5373\u53ef...\n)\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u7136\u540e\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528",(0,t.jsx)(n.code,{children:"UserType"}),"\u7c7b\u578b\u5b9a\u4e49\u4efb\u4f55\u5b9e\u4f53\u5c5e\u6027\u4e86"]}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity\npublic interface Book {\n\n    // highlight-next-line\n    UserType userData();\n\n    ...\u7701\u7565\u5176\u4ed6\u7c7b\u578b...\n}\n"})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Entity\ninterface Book {\n\n    // highlight-next-line\n    val userData: UserType\n    \n    ...\u7701\u7565\u5176\u4ed6\u7c7b\u578b...\n}\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u5c5e\u6027\u7ea7json\u6620\u5c04",children:"\u5c5e\u6027\u7ea7JSON\u6620\u5c04"}),"\n",(0,t.jsxs)(n.p,{children:["\u76f4\u63a5\u7528",(0,t.jsx)(n.code,{children:"@Serialized"}),"\u4fee\u9970\u5c5e\u6027\u5373\u53ef"]}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @Serialized\n    List<Map<String, SomeType1>> userData1();\n\n    // highlight-next-line\n    @Serialized\n    Map<String, List<SomeType2>> userData2();\n\n    ...\u7701\u7565\u5176\u4ed6\u7c7b\u578b...\n}\n"})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Entity\ninterface Book {\n\n    // highlight-next-line\n    @Serialized\n    val userData1: List<Map<String, SomeType1>>\n    \n    // highlight-next-line\n    @Serialized\n    val userData2: Map<String, List<SomeType2>>\n    \n    ...\u7701\u7565\u5176\u4ed6\u7c7b\u578b...\n}\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"objectmapper\u914d\u7f6e",children:"ObjectMapper\u914d\u7f6e"}),"\n",(0,t.jsx)(n.h3,{id:"\u4f7f\u7528\u5e95\u5c42api",children:"\u4f7f\u7528\u5e95\u5c42API"}),"\n",(0,t.jsxs)(n.p,{children:["\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u4e3a\u88ab",(0,t.jsx)(n.code,{children:"@Serialized"}),"\u4fee\u9970\u7684\u5c5e\u6027\u914d\u7f6eJSON\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u7684ObjectMapper\u3002"]}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"ObjectMapper mapper1 = ...\u7565...;\nObjectMapper mapper2 = ...\u7565...;\nObjectMapper mapper3 = ...\u7565...;\nJSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setDefaultSerializedTypeObjectMapper(mapper1) \u2776\n    .setSerializedTypeObjectMapper(MetaConfig.class, mapper2) \u2777\n    .setSerializedTypePropMapper(TopicProps.TAGS, mapper3) \u2778\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val mapper1: ObjectMapper = ...\u7565...\nval mapper2: ObjectMapper = ...\u7565...\nval mapper3: ObjectMapper = ...\u7565...\nval sqlClient = newKSqlClient {\n    setDefaultSerializedTypeObjectMapper(mapper1) \u2776\n    setSerializedTypeObjectMapper(MetaConfig::class, mapper2) \u2777\n    setSerializedTypePropMapper(Topic::tags, mapper3) \u2778\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n"})})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2776 \u5c06\u9ed8\u8ba4\u7684ObjectMapper\u8bbe\u7f6e\u4e3a",(0,t.jsx)(n.code,{children:"mapper1"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u548c",(0,t.jsx)(n.code,{children:"setSerializedTypeObjectMapper(Object.class, mapper1)"}),"\u7b49\u4ef7"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2777 \u4efb\u4f55\u5c5e\u6027\uff0c\u53ea\u8981\u5176\u8fd4\u56de\u7c7b\u578b\u4e3aMetaConfig\u6216\u5176\u6d3e\u751f\u7c7b\u578b\uff0c\u90fd\u91c7\u7528",(0,t.jsx)(n.code,{children:"mapper2"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2778 \u660e\u786e\u8bbe\u7f6e",(0,t.jsx)(n.code,{children:"Topic.tags"}),"\u7684ObjectMapper",(0,t.jsx)(n.code,{children:"mapper3"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u88ab\u8bbe\u7f6e\u7684\u5c5e\u6027\u672a\u88ab",(0,t.jsx)(n.code,{children:"@Serialized"}),"\u4fee\u9970\uff0c\u5c06\u4f1a\u629b\u51fa\u5f02\u5e38"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u914d\u7f6e\u4f18\u5148\u7ea7\uff1a\u2778 > \u2777 > \u2776"}),"\n",(0,t.jsx)(n.h3,{id:"\u4f7f\u7528spring-boot-starter",children:"\u4f7f\u7528Spring Boot Starter"}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f7f\u7528Spring Boot Starter\uff0cSqlClient\u662f\u81ea\u52a8\u521b\u5efa\u7684\uff0c\u4f46\u662f\u7528\u6237\u53ef\u4ee5\u901a\u8fc7",(0,t.jsx)(n.code,{children:"Customizer/KCustomizer"}),"\u6765\u6539\u53d8SqlClient\u88ab\u521b\u5efa\u524d\u7684\u914d\u7f6e"]}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"// highlight-next-line\n@Component\npublic class SerializationCustomizer implements Customizer {\n\n    @Override\n    public void customize(JSqlClient.Builder builder) {\n        builder\n            .setDefaultSerializedTypeObjectMapper(...\u7565...)\n            .setSerializedTypeObjectMapper(MetaConfig.class, ...\u7565...)\n            .setSerializedTypePropMapper(TopicProps.TAGS, ...\u7565...);\n    }\n}\n"})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"// highlight-next-line\n@Component\nclass SerializationCustomizer : KCustomizer {\n    \n    override fun customize(dsl: KSqlClientDsl) {\n        dsl\n            .setDefaultSerializedTypeObjectMapper(...\u7565...)\n            .setSerializedTypeObjectMapper(MetaConfig::class, ...\u7565...)\n            .setSerializedTypePropMapper(Topic::tags, ...\u7565...);\n    }\n}\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>i});a(96540);var r=a(18215);const t={tabItem:"tabItem_Ymn6"};var l=a(74848);function i(e){let{children:n,hidden:a,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,i),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>y});var r=a(96540),t=a(18215),l=a(23104),i=a(56347),s=a(205),c=a(57485),o=a(31682),d=a(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:r,default:t}}=e;return{value:n,label:a,attributes:r,default:t}}))}(a);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:a}=e;const t=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,l=p(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[o,u]=j({queryString:a,groupId:t}),[m,g]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,d.Dv)(a);return[t,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:t}),x=(()=>{const e=o??m;return h({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{x&&c(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var g=a(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(74848);function v(e){let{className:n,block:a,selectedValue:r,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),d=e=>{const n=e.currentTarget,a=c.indexOf(n),t=s[a].value;t!==r&&(o(n),i(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...l,className:(0,t.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":r===n}),children:a??n},n)}))})}function f(e){let{lazy:n,children:a,selectedValue:l}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function S(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,b.jsx)(v,{...n,...e}),(0,b.jsx)(f,{...n,...e})]})}function y(e){const n=(0,g.A)();return(0,b.jsx)(S,{...e,children:u(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>s});var r=a(96540);const t={},l=r.createContext(t);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);