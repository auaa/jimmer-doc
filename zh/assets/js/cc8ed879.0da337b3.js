"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2956],{89313:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var r=l(74848),d=l(28453),i=l(11470),a=l(19365);const s={sidebar_position:1,title:"\u5b9e\u4f53\u8868"},t=void 0,c={id:"mapping/advanced/logical-deleted/entity",title:"\u5b9e\u4f53\u8868",description:"\u60f3\u8ba9\u5b9e\u4f53\u652f\u6301\u903b\u8f91\u5220\u9664\uff0c\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a\u88aborg.babyfish.jimmer.sql.LogicalDeleted\u6807\u8bb0\u7684\u6807\u5fd7\u5c5e\u6027\uff0c\u4ee5\u8868\u793a\u8be5\u6570\u636e\u662f\u6b63\u5e38\u7684\u8fd8\u662f\u5df2\u7ecf\u88ab\u5220\u9664\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/logical-deleted/entity.mdx",sourceDirName:"mapping/advanced/logical-deleted",slug:"/mapping/advanced/logical-deleted/entity",permalink:"/jimmer-doc/zh/docs/mapping/advanced/logical-deleted/entity",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/logical-deleted/entity.mdx",tags:[],version:"current",lastUpdatedAt:1722888025e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5b9e\u4f53\u8868"},sidebar:"tutorialSidebar",previous:{title:"\u903b\u8f91\u5220\u9664",permalink:"/jimmer-doc/zh/docs/mapping/advanced/logical-deleted/"},next:{title:"\u4e2d\u95f4\u8868",permalink:"/jimmer-doc/zh/docs/mapping/advanced/logical-deleted/join-table"}},o={},h=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u591a\u7248\u672c\u6570\u636e",id:"\u591a\u7248\u672c\u6570\u636e",level:2},{value:"\u5bf9\u4e2d\u95f4\u8868\u7684\u5f71\u54cd",id:"\u5bf9\u4e2d\u95f4\u8868\u7684\u5f71\u54cd",level:2}];function j(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u60f3\u8ba9\u5b9e\u4f53\u652f\u6301\u903b\u8f91\u5220\u9664\uff0c\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a\u88ab",(0,r.jsx)(n.code,{children:"org.babyfish.jimmer.sql.LogicalDeleted"}),"\u6807\u8bb0\u7684\u6807\u5fd7\u5c5e\u6027\uff0c\u4ee5\u8868\u793a\u8be5\u6570\u636e\u662f\u6b63\u5e38\u7684\u8fd8\u662f\u5df2\u7ecf\u88ab\u5220\u9664\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u65e6\u4e3a\u5b9e\u4f53\u914d\u7f6e\u4e86\u903b\u8f91\u5220\u9664\u5c5e\u6027"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f00\u53d1\u4eba\u5458\u8c03\u7528API\u5220\u9664\u67d0\u4e2a\u5b9e\u4f53\u5bf9\u8c61\u65f6\uff0cJimmer\u5e76\u4e0d\u4f1a\u7528SQL\u7684",(0,r.jsx)(n.code,{children:"delete"}),"\u8bed\u53e5\u771f\u6b63\u5220\u9664\u6570\u636e\uff0c\u800c\u662f\u4f7f\u7528",(0,r.jsx)(n.code,{children:"update"}),"\u8bed\u53e5\u628a\u8be5\u5b9e\u4f53\u7684\u903b\u8f91\u5220\u9664\u5c5e\u6027\u8bbe\u7f6e\u4e3a\u201c\u5df2\u7ecf\u88ab\u5220\u9664\u201c"]}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u4ed6\u60c5\u51b5\uff1a\u5373\u4fbf\u5b9e\u4f53\u5177\u5907\u903b\u8f91\u5220\u9664\u5c5e\u6027\uff0cJimmer\u4e5f\u63d0\u4f9bAPI\u8ba9\u5f00\u53d1\u4eba\u5458\u901a\u8fc7\u989d\u5916\u7684\u53c2\u6570\u5f3a\u884c\u771f\u6b63\u5220\u9664\u5bf9\u8c61\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u9488\u5bf9\u5b9e\u4f53\u7684SQL\u67e5\u8be2\u90fd\u4f1a\u88ab\u81ea\u52a8\u52a0\u4e0a",(0,r.jsx)(n.code,{children:"where \u8f6f\u5220\u9664\u6807\u5fd7 <> \u5df2\u7ecf\u88ab\u5220\u9664"}),"\u7684\u6761\u4ef6\uff0c\u4ece\u800c\u8425\u9020\u51fa\u67d0\u4e9b\u6570\u636e\u5df2\u7ecf\u88ab\u5220\u9664\u7684\u5047\u8c61\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["\u672c\u6587\u53ea\u4ecb\u7ecd\u903b\u8f91\u5220\u9664\u6807\u5fd7\u5b57\u6bb5\u7684\u6620\u5c04\uff0c\u81f3\u4e8e\u903b\u8f91\u5220\u9664\u529f\u80fd\u7684\u7684\u4f7f\u7528\uff0c\u8bf7\u53c2\u89c1",(0,r.jsx)(n.a,{href:"../../../query/global-filter/logical-deleted",children:"\u5168\u5c40\u8fc7\u6ee4\u5668/\u903b\u8f91\u5220\u9664"}),"\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u7528\u6cd5",children:"\u7528\u6cd5"}),"\n",(0,r.jsx)(n.p,{children:"\u903b\u8f91\u5220\u9664\u6807\u5fd7\u5c5e\u6027\u53ef\u4ee5\u662f\u5982\u4e0b\u7c7b\u578b\u4e4b\u4e00"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"boolean\uff1a\u5fc5\u987b\u975enull"}),"\n",(0,r.jsx)(n.li,{children:"int\uff1a\u5fc5\u987b\u975enull"}),"\n",(0,r.jsx)(n.li,{children:"\u679a\u4e3e\uff1a\u5fc5\u987b\u975enull"}),"\n",(0,r.jsx)(n.li,{children:"long/Long\uff1anull\u6216\u975enull\u7686\u53ef"}),"\n",(0,r.jsx)(n.li,{children:"UUID: null\u6216\u975enull\u7686\u53ef"}),"\n",(0,r.jsx)(n.li,{children:"\u65e5\u671f\uff1a\u5fc5\u987b\u53efnull"}),"\n"]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"\u7c7b\u578b"}),(0,r.jsx)("th",{children:"\u4ee3\u7801"}),(0,r.jsx)("th",{children:"\u5220\u9664\u72b6\u6001"}),(0,r.jsx)("th",{children:"\u521d\u59cb\u72b6\u6001"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{rowspan:"2",children:"boolean"}),(0,r.jsx)("td",{children:(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@LogicalDeleted("true")\nboolean deleted();\n'})})}),(0,r.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'@LogicalDeleted("true")\nval deleted: Boolean\n'})})})]})}),(0,r.jsx)("td",{children:"true"}),(0,r.jsx)("td",{children:"false"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@LogicalDeleted("false")\nval active: Boolean;\n'})})}),(0,r.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'@LogicalDeleted("false")\nval active: Boolean\n'})})})]})}),(0,r.jsx)("td",{children:"false"}),(0,r.jsx)("td",{children:"true"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"int"}),(0,r.jsx)("td",{children:(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Default("0")\n@LogicalDeleted("1")\nint state();\n'})})}),(0,r.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'@Default("0")\n@LogicalDeleted("1")\nval state: Int\n'})})})]})}),(0,r.jsx)("td",{children:"1"}),(0,r.jsx)("td",{children:"0"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"\u679a\u4e3e"}),(0,r.jsx)("td",{children:(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Default("INITIALIZED")\n@LogicalDeleted("DELETED")\nState state();\n'})})}),(0,r.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'@Default("INITIALIZED")\n@LogicalDeleted("DELETED")\nval state: State\n'})})})]})}),(0,r.jsx)("td",{children:"DELETED"}),(0,r.jsx)("td",{children:"INITIALIZED"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"\u2729"}),(0,r.jsx)(n.p,{children:"long"})]}),(0,r.jsx)("td",{children:(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@LogicalDeleted\nlong deletedMillis();\n"})})}),(0,r.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"@LogicalDeleted\nval deletedMillis: Long\n"})})})]})}),(0,r.jsx)("td",{children:"\u5f53\u524d\u65f6\u949f\u6beb\u79d2\u6570"}),(0,r.jsx)("td",{children:"0L"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"\u2729"}),(0,r.jsx)(n.p,{children:"Nullable Long"})]}),(0,r.jsx)("td",{children:(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@LogicalDeleted\nLong deletedMillis();\n"})})}),(0,r.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"@LogicalDeleted\nval deletedMillis: Long?\n"})})})]})}),(0,r.jsx)("td",{children:"\u5f53\u524d\u65f6\u949f\u6beb\u79d2\u6570"}),(0,r.jsx)("td",{children:"null"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"\u2729"}),(0,r.jsx)(n.p,{children:"UUID"})]}),(0,r.jsx)("td",{children:(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@LogicalDeleted\nUUID deletedData();\n"})})}),(0,r.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"@LogicalDeleted\nval deletedData: UUID\n"})})})]})}),(0,r.jsx)("td",{children:"\u968f\u673aUUID"}),(0,r.jsx)("td",{children:"\u6240\u6709\u5b57\u8282\u4e3a0\u7684UUID"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"\u2729"}),(0,r.jsx)(n.p,{children:"Nullable UUID"})]}),(0,r.jsx)("td",{children:(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@Nullable\n@LogicalDeleted\nUUID deletedData();\n"})})}),(0,r.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"@LogicalDeleted\nval deletedData: UUID?\n"})})})]})}),(0,r.jsx)("td",{children:"\u968f\u673aUUID"}),(0,r.jsx)("td",{children:"null"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{rowspan:"2",children:(0,r.jsx)(n.p,{children:"Nullable LocalDateTime"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"\u2729"}),(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Nullable\n@LogicalDeleted("now")\nUUID deletedTime();\n'})})}),(0,r.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'@LogicalDeleted("now")\nval deletedTime: LocalDateTime?\n'})})})]})]}),(0,r.jsx)("td",{children:"\u5f53\u524d\u65f6\u95f4"}),(0,r.jsx)("td",{children:"null"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Nullable\n@LogicalDeleted("null")\nUUID createdTime();\n'})})}),(0,r.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'@LogicalDeleted("null")\nval createdTime: LocalDateTime?\n'})})})]})}),(0,r.jsx)("td",{children:"null"}),(0,r.jsx)("td",{children:"\u5f53\u524d\u65f6\u95f4"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u4e2d"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u7b2c\u4e00\u5217\u6216\u7b2c\u4e8c\u5217\u4e2d\u7684 \u2729 \u8868\u793a\u5f53\u524d\u914d\u7f6e\u65b9\u6cd5\u652f\u6301\u4e0b\u4e00\u8282\u5373\u5c06\u8ba8\u8bba\u7684\u591a\u7248\u672c\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"\u652f\u6301\u903b\u8f91\u5220\u9664\u5374\u4e0d\u8003\u8651\u591a\u7248\u672c\u6570\u636e\u7684\u95ee\u9898\uff0c\u662f\u4e00\u79cd\u6210\u719f\u5ea6\u4e0d\u9ad8\u7684\u8003\u8651\uff0c\u56e0\u6b64\u5efa\u8bae\u4f7f\u7528\u652f\u6301\u591a\u7248\u672c\u7684\u903b\u8f91\u5220\u9664\u914d\u7f6e\u3002"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"\u5f53\u524d\u65f6\u949f\u6beb\u79d2\u6570"}),"\uff0c\u9ed8\u8ba4\u884c\u4e3a\u662f",(0,r.jsx)(n.code,{children:"System.currentMillis()"}),"\uff0c\u5373\u662f\u9ed8\u8ba4\u7684",(0,r.jsx)(n.code,{children:"org.babyfish.jimmer.sql.meta.LogicalDeletedLongGenerator"}),"\u7684\u884c\u4e3a\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u5bf9\u6b64\u884c\u4e3a\u4e0d\u6ee1\u610f\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u7c7b\u5b9e\u73b0",(0,r.jsx)(n.code,{children:"LogicalDeletedValueGenerator<Long>"}),"\u63a5\u53e3\uff0c\u5e76\u7528\u5982\u4e0b\u914d\u7f6e"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"@LogicalDeleted(generatedType = YourGenerator.class)"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@LogicalDeleted(generatedRef = YourGenerator.class)"}),"\uff0c\u8fd9\u91cc",(0,r.jsx)(n.code,{children:"generatorRef"}),"\u8868\u793a\u5bf9\u8c61\u5728IOC\u5bb9\u5668\u7ba1\u7406\u6846\u67b6\u4e2d\u7684\u540d\u79f0"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"\u968f\u673aUUD"}),"\uff0c\u9ed8\u8ba4\u884c\u4e3a\u662f",(0,r.jsx)(n.code,{children:"UUID.randomUUID()"}),"\uff0c\u5373\u662f\u9ed8\u8ba4\u7684",(0,r.jsx)(n.code,{children:"org.babyfish.jimmer.sql.meta.LogicalDeletedUUIDGenerator"}),"\u7684\u884c\u4e3a\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u5bf9\u6b64\u884c\u4e3a\u4e0d\u6ee1\u610f\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u7c7b\u5b9e\u73b0",(0,r.jsx)(n.code,{children:"LogicalDeletedValueGenerator<UUID>"}),"\u63a5\u53e3\uff0c\u5e76\u7528\u5982\u4e0b\u914d\u7f6e"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"@LogicalDeleted(generatedType = YourGenerator.class)"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@LogicalDeleted(generatedRef = YourGenerator.class)"}),"\uff0c\u8fd9\u91cc",(0,r.jsx)(n.code,{children:"generatorRef"}),"\u8868\u793a\u5bf9\u8c61\u5728IOC\u5bb9\u5668\u7ba1\u7406\u6846\u67b6\u4e2d\u7684\u540d\u79f0"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u591a\u7248\u672c\u6570\u636e",children:"\u591a\u7248\u672c\u6570\u636e"}),"\n",(0,r.jsxs)(n.p,{children:["\u903b\u8f91\u5220\u9664\u5e76\u4e0d\u4f1a\u5bfc\u81f4\u6570\u636e\u88ab\u771f\u6b63\u5220\u9664\uff0c\u53ea\u4f1a\u5bfc\u81f4\u6570\u636e\u88ab\u9690\u85cf\uff0c\u8fd9\u4ee3\u8868\u7740\u6570\u636e\u51fa\u73b0\u591a\u7248\u672c\u95ee\u9898\u3002\u6b64\u95ee\u9898\u5728",(0,r.jsx)(n.a,{href:"../key#%E5%A4%9A%E7%89%88%E6%9C%AC%E6%94%AF%E6%8C%81",children:"Key/\u591a\u7248\u672c\u652f\u6301"}),"\u4e2d\u4e5f\u6709\u9610\u8ff0\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u652f\u6301\u591a\u7248\u672c\u7684long\u7c7b\u578b\u903b\u8f91\u5220\u9664\u4e3a\u4f8b"}),"\n",(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@Entity\npublic interface Book {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    @Key\n    String name();\n\n    @Key\n    int edition();\n\n    // highlight-next-line\n    @LogicalDeleted\n    long deletedMillis();\n\n    BigDecimal price();\n\n    @ManyToOne\n    BookStore store();\n}\n"})})}),(0,r.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"@Entity\ninterface Book {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    @Key\n    val name: String\n\n    @Key\n    val edition: String\n\n    // highlight-next-line\n    @LogicalDeleted\n    val deletedMillis: Long\n\n    val price: BigDecimal\n\n    @ManyToOne\n    val store: BookStore\n}\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["\u867d\u7136",(0,r.jsx)(n.code,{children:"Book"}),"\u5bf9\u8c61\u7684Key\u4e3a",(0,r.jsx)(n.code,{children:"name"}),"\u548c",(0,r.jsx)(n.code,{children:"edition"}),"\uff0c\u4f46\u662f\u7531\u4e8e",(0,r.jsx)(n.code,{children:"deletedMillis"}),"\u5c5e\u6027\u4e3a\u903b\u8f91\u5220\u9664\u6807\u5fd7\uff0c\u6240\u4ee5\u6570\u636e\u5e93\u5c42\u9762\u7684\u975e\u4e3b\u952eUNIQUE\u7ea6\u675f\u5e94\u8be5\u4e3a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"alter table BOOK\n    add constraint uq_key_BOOK\n        unique(NAME, EDITION, DELETED_MILLIS);\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5047\u5982\u8868\u683c\u8f93\u5165\u5982\u4e0b"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"ID"}),(0,r.jsx)(n.th,{children:"NAME"}),(0,r.jsx)(n.th,{children:"EDITION"}),(0,r.jsx)(n.th,{children:"PRICE"}),(0,r.jsx)(n.th,{children:"STORE_ID"}),(0,r.jsx)(n.th,{children:"DELETED_MILLIS"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1027"}),(0,r.jsx)(n.td,{children:"SQL in Action"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"49.99"}),(0,r.jsx)(n.td,{children:"23"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1026"}),(0,r.jsx)(n.td,{children:"SQL in Action"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"55.99"}),(0,r.jsx)(n.td,{children:"22"}),(0,r.jsx)(n.td,{children:"1708796420956"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1025"}),(0,r.jsx)(n.td,{children:"SQL in Action"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"47.99"}),(0,r.jsx)(n.td,{children:"23"}),(0,r.jsx)(n.td,{children:"1708234681901"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3131"}),(0,r.jsx)(n.td,{children:"SQL in Action"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"59.99"}),(0,r.jsx)(n.td,{children:"23"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3130"}),(0,r.jsx)(n.td,{children:"SQL in Action"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"53.99"}),(0,r.jsx)(n.td,{children:"22"}),(0,r.jsx)(n.td,{children:"1708722582793"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3129"}),(0,r.jsx)(n.td,{children:"SQL in Action"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"58.99"}),(0,r.jsx)(n.td,{children:"23"}),(0,r.jsx)(n.td,{children:"1708664484823"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u4e2d\u67094\u6761\u5173\u8054\u6570\u636e\u88ab\u9690\u85cf\uff0c\u6709\u6548\u6570\u636e\u53ea\u6709\u4e24\u6761"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"ID"}),(0,r.jsx)(n.th,{children:"NAME"}),(0,r.jsx)(n.th,{children:"EDITION"}),(0,r.jsx)(n.th,{children:"PRICE"}),(0,r.jsx)(n.th,{children:"STORE_ID"}),(0,r.jsx)(n.th,{children:"DELETED_MILLIS"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1027"}),(0,r.jsx)(n.td,{children:"SQL in Action"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"49.99"}),(0,r.jsx)(n.td,{children:"23"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3131"}),(0,r.jsx)(n.td,{children:"SQL in Action"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"59.99"}),(0,r.jsx)(n.td,{children:"23"}),(0,r.jsx)(n.td,{children:"0"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u5bf9\u4e2d\u95f4\u8868\u7684\u5f71\u54cd",children:"\u5bf9\u4e2d\u95f4\u8868\u7684\u5f71\u54cd"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u5b9e\u4f53\u88ab\u903b\u8f91\u5220\u9664\uff0c\u90a3\u4e48\u548c\u5b83\u76f8\u5173\u7684\u57fa\u4e8e\u4e2d\u95f4\u8868 ",(0,r.jsxs)(n.em,{children:["(\u91c7\u7528",(0,r.jsx)(n.code,{children:"@JoinTable"}),"\u7684\u6ce8\u89e3)"]})," \u7684\u5173\u8054\u4f1a\u53d7\u5230\u4f55\u79cd\u5f71\u54cd\u5462\uff1f"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4e2d\u95f4\u8868\u4e5f\u652f\u6301\u903b\u8f91\u5220\u9664\uff0c\u5373",(0,r.jsx)(n.code,{children:"@JoinTable"}),"\u6ce8\u89e3\u7684",(0,r.jsx)(n.code,{children:"logicalDeletedFilter"}),"\u53c2\u6570\u88ab\u6307\u5b9a\uff0c\u4e0e\u88ab\u903b\u8f91\u5220\u9664\u5b9e\u4f53\u76f8\u5173\u7684\u4e2d\u95f4\u8868\u8bb0\u5f55\u4e5f\u4f1a\u88ab\u903b\u8f91\u5220\u9664\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.a,{href:"./join-table",children:"\u4e0b\u4e00\u7bc7\u6587\u6863"}),"\u4e2d\uff0c\u6211\u4eec\u5c06\u4f1a\u8be6\u7ec6\u8ba8\u8bba\u4e2d\u95f4\u8868\u7684\u903b\u8f91\u5220\u9664\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c",(0,r.jsx)(n.code,{children:"@JoinTable"}),"\u6ce8\u89e3\u7684",(0,r.jsx)(n.code,{children:"deletedWhenEndpointIsLogicallyDeleted"}),"\u53c2\u6570\u88ab\u8bbe\u7f6e\u4e3atrue\uff0c\u4e0e\u88ab\u903b\u8f91\u5220\u9664\u5b9e\u4f53\u76f8\u5173\u7684\u4e2d\u95f4\u8868\u8bb0\u5f55\u4f1a\u88ab\u7269\u7406\u5220\u9664\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4ee5\u4e0a\u4e24\u4e2a\u6761\u4ef6\u90fd\u4e0d\u6ee1\u8db3\uff0c\u90a3\u4e48\u4e0e\u88ab\u903b\u8f91\u5220\u9664\u5b9e\u4f53\u76f8\u5173\u7684\u4e2d\u95f4\u8868\u8bb0\u5f55\u5c06\u4e0d\u4f1a\u88ab\u505a\u51fa\u4efb\u4f55\u5904\u7406\u3002"}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},19365:(e,n,l)=>{l.d(n,{A:()=>a});l(96540);var r=l(18215);const d={tabItem:"tabItem_Ymn6"};var i=l(74848);function a(e){let{children:n,hidden:l,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(d.tabItem,a),hidden:l,children:n})}},11470:(e,n,l)=>{l.d(n,{A:()=>I});var r=l(96540),d=l(18215),i=l(23104),a=l(56347),s=l(205),t=l(57485),c=l(31682),o=l(70679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function j(e){const{values:n,children:l}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:l,attributes:r,default:d}}=e;return{value:n,label:l,attributes:r,default:d}}))}(l);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function u(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:l}=e;const d=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,t.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(d.location.search);n.set(i,e),d.replace({...d.location,search:n.toString()})}),[i,d])]}function g(e){const{defaultValue:n,queryString:l=!1,groupId:d}=e,i=j(e),[a,t]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=l.find((e=>e.default))??l[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,h]=x({queryString:l,groupId:d}),[g,p]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[d,i]=(0,o.Dv)(l);return[d,(0,r.useCallback)((e=>{l&&i.set(e)}),[l,i])]}({groupId:d}),m=(()=>{const e=c??g;return u({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{m&&t(m)}),[m]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);t(e),h(e),p(e)}),[h,p,i]),tabValues:i}}var p=l(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=l(74848);function b(e){let{className:n,block:l,selectedValue:r,selectValue:a,tabValues:s}=e;const t=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),o=e=>{const n=e.currentTarget,l=t.indexOf(n),d=s[l].value;d!==r&&(c(n),a(d))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const l=t.indexOf(e.currentTarget)+1;n=t[l]??t[0];break}case"ArrowLeft":{const l=t.indexOf(e.currentTarget)-1;n=t[l]??t[t.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.A)("tabs",{"tabs--block":l},n),children:s.map((e=>{let{value:n,label:l,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>t.push(e),onKeyDown:h,onClick:o,...i,className:(0,d.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":r===n}),children:l??n},n)}))})}function f(e){let{lazy:n,children:l,selectedValue:d}=e;const i=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===d));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==d})))})}function D(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,d.A)("tabs-container",m.tabList),children:[(0,v.jsx)(b,{...n,...e}),(0,v.jsx)(f,{...n,...e})]})}function I(e){const n=(0,p.A)();return(0,v.jsx)(D,{...e,children:h(e.children)},String(n))}},28453:(e,n,l)=>{l.d(n,{R:()=>a,x:()=>s});var r=l(96540);const d={},i=r.createContext(d);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);