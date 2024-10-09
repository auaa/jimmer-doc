"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2516],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,k=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),r=n(67294),l=n(34334),o=n(72389),i=n(67392),u=n(7094),s=n(12466);const p="tabList__CuJ",m="tabItem_LNqP";function c(e){var t;const{lazy:n,block:o,defaultValue:c,values:d,groupId:k,className:v}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:N}=(0,u.U)(),[O,j]=(0,r.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,s.o5)();if(null!=k){const e=h[k];null!=e&&e!==O&&f.some((t=>t.value===e))&&j(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==O&&(w(t),j(a),null!=k&&N(k,String(a)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},v)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>T.push(e),onKeyDown:P,onFocus:E,onClick:E},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":O===t})}),n??t)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},60149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=n(83117),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const i={sidebar_position:4,title:"\u4e0d\u5b8c\u6574\u5bf9\u8c61"},u=void 0,s={unversionedId:"mutation/save-command/incomplete",id:"mutation/save-command/incomplete",title:"\u4e0d\u5b8c\u6574\u5bf9\u8c61",description:"\u4fdd\u5b58\u6307\u4ee4\u7684\u53c2\u6570\u662f\u52a8\u6001\u5bf9\u8c61\uff0c\u5982\u679c\u52a8\u6001\u53ea\u6709\u90e8\u5206\u5c5e\u6027\u88ab\u6307\u5b9a\u4e86\uff0c\u90a3\u4e48\u8be5\u5bf9\u8c61\u5c31\u662f\u4e00\u4e2a\u4e0d\u5b8c\u6574\u5bf9\u8c61\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/incomplete.mdx",sourceDirName:"mutation/save-command",slug:"/mutation/save-command/incomplete",permalink:"/jimmer-doc/zh/docs/mutation/save-command/incomplete",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/incomplete.mdx",tags:[],version:"current",lastUpdatedAt:1712768787,formattedLastUpdatedAt:"2024\u5e744\u670810\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u4e0d\u5b8c\u6574\u5bf9\u8c61"},sidebar:"tutorialSidebar",previous:{title:"\u5173\u8054\u5bf9\u8c61\u4fdd\u5b58\u6a21\u5f0f",permalink:"/jimmer-doc/zh/docs/mutation/save-command/associated-save-mode"},next:{title:"\u4fdd\u5b58\u5173\u8054",permalink:"/jimmer-doc/zh/docs/mutation/save-command/association"}},p={},m=[{value:"JPA\u793a\u8303",id:"jpa\u793a\u8303",level:2},{value:"Jimmer\u793a\u8303",id:"jimmer\u793a\u8303",level:2}],c={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4fdd\u5b58\u6307\u4ee4\u7684\u53c2\u6570\u662f\u52a8\u6001\u5bf9\u8c61\uff0c\u5982\u679c\u52a8\u6001\u53ea\u6709\u90e8\u5206\u5c5e\u6027\u88ab\u6307\u5b9a\u4e86\uff0c\u90a3\u4e48\u8be5\u5bf9\u8c61\u5c31\u662f\u4e00\u4e2a\u4e0d\u5b8c\u6574\u5bf9\u8c61\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u8bf4\u660e\u4e0d\u5b8c\u6574\u5bf9\u8c61\u7684\u4ef7\u503c\uff0c\u8ba9\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u5b9e\u9645\u7684\u4f8b\u5b50\uff0c\u5c06id\u4e3a8\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Book"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"store"),"\u4fee\u6539\u4e3anull\u3002"),(0,r.kt)("p",null,"\u770b\u8d77\u6765\uff0c\u4f3c\u4e4e\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"../update-statement"},"\u4fee\u6539\u8bed\u53e5"),"\u6267\u884c\u4e00\u6761UPDATE\u8bed\u53e5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f97\u5230\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"Book"),"\u5bf9\u8c61\uff0c\u4fee\u6539\u5176null\u5c5e\u6027\uff0c\u5e76\u4fdd\u5b58\u5b83"))),(0,r.kt)("p",null,"\u5927\u90e8\u5206\u5f00\u53d1\u4eba\u5458\u90fd\u6bd4\u8f83\u504f\u597d\u7b2c\u4e8c\u79cd\u65b9\u6cd5\uff0c\u56e0\u6b64\uff0c\u672c\u6587\u8ba8\u8bba\u7b2c\u4e8c\u79cd\u65b9\u5f0f\u3002"),(0,r.kt)("h2",{id:"jpa\u793a\u8303"},"JPA\u793a\u8303"),(0,r.kt)("p",null,"\u5728\u4ecb\u7ecdJimmer\u4fdd\u5b58\u4e0d\u5b8c\u6574\u5bf9\u8c61\u7684\u529f\u80fd\u4e4b\u524d\uff0c\u8ba9\u6211\u4eec\u5148\u6765\u770b\u770b\u5982\u4f55\u4f7f\u7528JPA\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="JPA\u793a\u8303"',title:'"JPA\u793a\u8303"'},"EntityManager entityManager = ...\u4ece\u5f53\u524d\u4e8b\u52a1\u4e0a\u4e0b\u6587\u4e2d\u83b7\u53d6JPA\u4f1a\u8bdd\u5bf9\u8c61\uff0c\u7565...\nBook book = entityManager.find(Book.class, 8L);\n\nbook.setStore(null); // JPA\u4e2d\u5b9e\u4f53\u662f\u53ef\u53d8\u7684\uff0c\u5c06\u5173\u8054\u4fee\u6539\u4e3anull\n\n// \u8fd9\u91cc\u8c03\u7528merge\u4ec5\u4e3a\u4e86\u6e05\u6670\uff0c\u53ef\u4ee5\u4e0d\u8c03\uff0c\u56e0\u4e3a\u4e8b\u52a1\u63d0\u4ea4\u65f6JPA\u5fc5\u7136\u4fee\u6539\u6570\u636e\u5e93\nentityManager.merge(book);\n")),(0,r.kt)("p",null,"\u9664\u4e86\u8981\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"store"),"\u4fee\u6539\u4e3anull\u5916\uff0c\u6211\u4eec\u5e76\u4e0d\u77e5\u9053\u5176\u4ed6\u5c5e\u6027\u7684\u73b0\u6709\u503c\u3002\u5728JPA\u4e2d\uff0c\u82e6\u4e8e\u57fa\u4e8e\u7b80\u5355\u7684POJO\u7684\u5b9e\u4f53\u662f\u5f62\u72b6\u56fa\u5b9a\u9759\u6001\u7c7b\u578b\uff0c\u6211\u4eec\u4e0d\u5f97\u4e0d\u67e5\u8be2\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027\uff0c\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"store"),"\u5c5e\u6027 ",(0,r.kt)("em",{parentName:"p"},"(\u5176\u4ed6\u5c5e\u6027\u4fdd\u6301\u4e0d\u53d8)"),"\uff0c\u518d\u6b21\u4fdd\u5b58\u8fd9\u4e2a\u5bf9\u8c61\u3002"),(0,r.kt)("p",null,"\u54ea\u6015\u5bf9\u8c61\u6709\u4e0a\u767e\u4e2a\u5c5e\u6027\uff0c\u6211\u4eec\u4e5f\u4e0d\u5f97\u4e0d\u8fd9\u6837\u505a\uff0c\u8fd9\u5f62\u6210\u4e86\u975e\u5e38\u660e\u663e\u7684\u6d6a\u8d39\u3002"),(0,r.kt)("h2",{id:"jimmer\u793a\u8303"},"Jimmer\u793a\u8303"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient.update(\n    Objects.createBook(draft -> {\n        draft.setId(8L);\n        draft.setStore(null);\n    })\n);\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient.update(\n    new(Book::class).by {\n        id = 8L\n        store = null\n    }\n);\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u660e\u786e\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"update")," ",(0,r.kt)("em",{parentName:"p"},"(\u6216",(0,r.kt)("inlineCode",{parentName:"em"},"save(book, SaveMode.UPDATE_ONLY)"),")")," \u660e\u786e\u8868\u793a\u8fd9\u662f\u4e00\u4e2a\u66f4\u65b0\u64cd\u4f5c\uff0c\u907f\u514d",(0,r.kt)("inlineCode",{parentName:"p"},"UPSERT"),"\u6a21\u5f0f\u5e26\u6765\u7684\u8bd5\u63a2\u6027\u67e5\u8be2\uff0c\u7b80\u5316\u8ba8\u8bba\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u51ed\u7a7a\u634f\u9020"),"\u4e00\u4e2aBook\u5bf9\u8c61\uff0c\u53ea\u5bf9\u5176",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"\u5c5e\u6027\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"store"),"\u5c5e\u6027\u8d4b\u503c\uff0c\u800c\u5176\u4ed6\u6240\u6709\u5c5e\u6027\u90fd\u5904\u4e8e\u672a\u77e5\u72b6\u6001\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u4e0d\u5b8c\u6574\u5bf9\u8c61\u544a\u8bc9Jimmer\uff0c\u9664",(0,r.kt)("inlineCode",{parentName:"p"},"store"),"\u5c5e\u6027\u5916\uff0c\u4e0d\u4fee\u6539\u5176\u4ed6\u4efb\u4f55\u5c5e\u6027\u3002"))),(0,r.kt)("p",null,"Jimmer\u5c06\u76f4\u63a5\u751f\u6210\u5982\u4e0bSQL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"update BOOK\nset\n    STORE_ID = ? /* <null: long> */\nwhere\n    ID = ? /* 8 */\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6240\u4ee5\uff0c\u8bf7\u5fd8\u8bb0\u4ee5\u524d\u90a3\u79cd\u4f4e\u6548\u7684\u6a21\u5f0f\uff1a\u67e5\u8be2->\u4fee\u6539->\u4fdd\u5b58")))}d.isMDXComponent=!0}}]);