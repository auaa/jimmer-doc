"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5987],{76752:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>i});var a=t(74848),r=t(28453),o=(t(11470),t(19365),t(45575));const i=[...o.RM];function s(e){const n={a:"a",em:"em",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:['In order to solve the inconvenience of secondary "modification" ',(0,a.jsx)(n.em,{children:"(creating a new immutable object based on another immutable object)"})," of complex immutable objects in the current JVM ecosystem, some immutable object frameworks were born:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://immutables.github.io/immutable.html",children:"Immutables"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/inferred/FreeBuilder",children:"FreeBuilder"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://arrow-kt.io/learn/immutable-data/intro/",children:"Arrow-Kt(Kotlin)"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://kopyk.at/",children:"Kopyk(Kotlin)"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/PatilShreyas/mutekt",children:"MuteKt(Kotlin)"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Jimmer is an ORM framework, and handling deep data structures is a core issue for ORM, so Jimmer must do similar work."}),"\n",(0,a.jsxs)(n.p,{children:["Jimmer needs to provide elegant dual language support for both Java and Kotlin at the same time. None of the above solutions can meet this requirement, so Jimmer did not use any of them, but chose to transplant ",(0,a.jsx)(n.a,{href:"https://github.com/immerjs/immer",children:"immer"})," from the JavaScript/TypeScript field."]}),"\n",(0,a.jsx)(o.Ay,{}),"\n",(0,a.jsx)(n.p,{children:"This transplant is a powerful complement to the JVM ecosystem."}),"\n",(0,a.jsxs)(n.p,{children:["This framework is named Jimmer, paying tribute to ",(0,a.jsx)(n.a,{href:"https://github.com/immerjs/immer",children:"immer"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},45575:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var a=t(74848),r=t(28453),o=t(11470),i=t(19365);const s=[{value:"1. Define immutable type",id:"1-define-immutable-type",level:2},{value:"2. Create data structure from scratch",id:"2-create-data-structure-from-scratch",level:2},{value:"3. Create new data based on existing data",id:"3-create-new-data-based-on-existing-data",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Next, we will demonstrate the power of immutable objects transplanted from ",(0,a.jsx)(n.a,{href:"https://github.com/immerjs/immer",children:"immer"})," in three steps:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Define immutable types"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create an immutable data structure from scratch"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Based on an existing data structure, create a new data structure according to some desired modifications."}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["This last step is where the core value of ",(0,a.jsx)(n.a,{href:"https://github.com/immerjs/immer",children:"immer"})," lies. Please pay close attention."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"1-define-immutable-type",children:"1. Define immutable type"}),"\n",(0,a.jsxs)(n.p,{children:["To demonstrate this feature, there is no need for the ",(0,a.jsx)(n.code,{children:"@Entity"})," annotation on ORM entities, the non-ORM ",(0,a.jsx)(n.code,{children:"@Immutable"})," is sufficient."]}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(i.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="TreeNode.java"',children:"package yourpackage;\n\nimport java.util.List;\nimport org.babyfish.jimmer.Immutable;\n\n@Immutable \npublic interface TreeNode {\n    \n    String name();\n\n    List<TreeNode> childNodes();\n}\n"})})}),(0,a.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="TreeNode.kt"',children:"package yourpackage\n\nimport org.babyfish.jimmer.Immutable\n\n@Immutable\ninterface TreeNode {\n\n    val name: String\n\n    val childNodes: List<TreeNode>\n}\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"2-create-data-structure-from-scratch",children:"2. Create data structure from scratch"}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(i.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'TreeNode treeNode = Objects.createTreeNode(root -> {\n    root.setName("Root").addIntoChildNodes(food -> {\n        food\n            .setName("Food")\n            .addIntoChildNodes(drink -> {\n                drink\n                    .setName("Drink")\n                    .addIntoChildNodes(cococola -> {\n                        cococola.setName("Cococola");\n                    })\n                    .addIntoChildNodes(fanta -> {\n                        fanta.setName("Fanta");\n                    });\n                ;\n            });\n        ;\n    });\n});\n'})})}),(0,a.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val treeNode = new(TreeNode::class).by {\n    name = "Root"\n    childNodes().addBy {\n        name = "Food"\n        childNodes().addBy {\n            name = "Drinks"\n            childNodes().addBy {\n                name = "Cococola"\n            }\n            childNodes().addBy {\n                name = "Fanta"\n            }\n        }\n    }\n}\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"3-create-new-data-based-on-existing-data",children:"3. Create new data based on existing data"}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(i.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'TreeNode newTreeNode = Objects.createTreeNode(\n        // highlight-next-line\n        treeNode, // existing data\n        root -> {\n            root\n                .childNodes(false).get(0) // Food\n                .childNodes(false).get(0) // Drink\n                .childNodes(false).get(0) // Cococola\n                .setName("Cococola plus");\n        }\n);\n\n// Show that `newTreeNode` reflects the developer\'s desired modifications\n// Note that this does not affect the existing `treeNode` at all\n\nSystem.out.println("treeNode:" + treeNode);\nSystem.out.println("newTreeNode:" + newTreeNode);\n'})})}),(0,a.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'/*\n * val newTreeNode = treeNode.copy {\n *     ...\n * }\n *\n * is actually shorthand for \n * \n * val newTreeNode = new(TreeNode::class).by(treeNode) {\n *     ...\n * }\n */\nval newTreeNode = treeNode.copy {\n    childNodes()[0] // Food\n        .childNodes()[0] // Drinks\n        .childNodes()[0] // Cococola\n        .name += " plus"\n}\n\n// Show that `newTreeNode` reflects the developer\'s desired modifications\n// Note that this does not affect the existing `treeNode` at all\n\nprintln("treeNode: $treeNode")\nprintln("newTreeNode: $newTreeNode")\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"Output (the actual printed output is compact, but is formatted here for readability)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'treeNode: {\n    "name":"Root",\n    "childNodes":[\n        {\n            "name":"Food",\n            "childNodes":[\n                {\n                    "name":"Drink",\n                    "childNodes":[\n                        // highlight-next-line\n                        {"name":"Coco Cola"},\n                        {"name":"Fanta"}\n                    ]\n                }\n            ]\n        }\n    ]\n}\nnewTreeNode: {\n    "name":"Root",\n    "childNodes":[\n        {\n            "name":"Food",\n            "childNodes":[\n                {\n                    "name":"Drink",\n                    "childNodes":[\n                        // highlight-next-line\n                        {"name":"Coco Cola plus"},\n                        {"name":"Fanta"}\n                    ]\n                }\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["As you can see, ",(0,a.jsx)(n.code,{children:"treeNode"})," is unaffected, and ",(0,a.jsx)(n.code,{children:"newTreeNode"})," reflects the user's desired modifications."]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},85377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(74848),r=t(28453),o=t(76752);const i={sidebar_position:3,title:"Solution"},s=void 0,l={id:"object/immutable/solution",title:"Solution",description:"The sample code above uses a type called TreeNodeDraft, which is the interface type automatically generated by Jimmer based on the user-defined type TreeNode.",source:"@site/docs/object/immutable/solution.mdx",sourceDirName:"object/immutable",slug:"/object/immutable/solution",permalink:"/jimmer-doc/docs/object/immutable/solution",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/object/immutable/solution.mdx",tags:[],version:"current",lastUpdatedAt:1722888025e3,sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Solution"},sidebar:"tutorialSidebar",previous:{title:"Current Situation",permalink:"/jimmer-doc/docs/object/immutable/current-situation"},next:{title:"Draft",permalink:"/jimmer-doc/docs/object/draft"}},c={},d=[...o.RM];function u(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Ay,{}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["The sample code above uses a type called ",(0,a.jsx)(n.code,{children:"TreeNodeDraft"}),", which is the interface type automatically generated by Jimmer based on the user-defined type ",(0,a.jsx)(n.code,{children:"TreeNode"}),"."]}),(0,a.jsxs)(n.p,{children:["Readers can ignore this auto-generated interface for now, later documentation ",(0,a.jsx)(n.a,{href:"../draft",children:"Draft"})," will introduce it."]})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var a=t(18215);const r={tabItem:"tabItem_Ymn6"};var o=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(96540),r=t(18215),o=t(23104),i=t(56347),s=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=m(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[c,u]=p({queryString:t,groupId:r}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,d.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),j=(()=>{const e=c??f;return h({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function g(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=s[t].value;r!==a&&(c(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,r.A)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function N(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,x.jsx)(g,{...n,...e}),(0,x.jsx)(N,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,x.jsx)(v,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var a=t(96540);const r={},o=a.createContext(r);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);