"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4583],{19365:(e,n,s)=>{s.d(n,{A:()=>l});s(96540);var r=s(18215);const i={tabItem:"tabItem_Ymn6"};var t=s(74848);function l(e){let{children:n,hidden:s,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,l),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>y});var r=s(96540),i=s(18215),t=s(23104),l=s(56347),o=s(205),d=s(57485),c=s(31682),a=s(70679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:i}}=e;return{value:n,label:s,attributes:r,default:i}}))}(s);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function j(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:s}=e;const i=(0,l.W6)(),t=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,d.aZ)(t),(0,r.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(i.location.search);n.set(t,e),i.replace({...i.location,search:n.toString()})}),[t,i])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,t=x(e),[l,d]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:t}))),[c,h]=u({queryString:s,groupId:i}),[m,p]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,t]=(0,a.Dv)(s);return[i,(0,r.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:i}),f=(()=>{const e=c??m;return j({value:e,tabValues:t})?e:null})();(0,o.A)((()=>{f&&d(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!j({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),p(e)}),[h,p,t]),tabValues:t}}var p=s(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=s(74848);function v(e){let{className:n,block:s,selectedValue:r,selectValue:l,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),a=e=>{const n=e.currentTarget,s=d.indexOf(n),i=o[s].value;i!==r&&(c(n),l(i))},h=e=>{let n=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const s=d.indexOf(e.currentTarget)+1;n=d[s]??d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;n=d[s]??d[d.length-1];break}}n?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:t}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:h,onClick:a,...t,className:(0,i.A)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function b(e){let{lazy:n,children:s,selectedValue:i}=e;const t=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function A(e){const n=m(e);return(0,k.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,k.jsx)(v,{...n,...e}),(0,k.jsx)(b,{...n,...e})]})}function y(e){const n=(0,p.A)();return(0,k.jsx)(A,{...e,children:h(e.children)},String(n))}},66971:(e,n,s)=>{s.d(n,{a:()=>m});var r=s(96540),i=s(72774),t=s(63051),l=s(28968),o=s(48875),d=s(44676),c=s(47859),a=s(4671),h=s(99343),x=s(7324),j=s(39781),u=s(74848);const m=(0,r.memo)((e=>{let{open:n,fullScreen:s=!1,title:o,maxWidth:m="md",onClose:f,children:k}=e;const[v,b]=(0,r.useState)(s),A=(0,r.useCallback)((()=>{b((e=>!e))}),[]);return(0,u.jsxs)(t.A,{open:n,onClose:f,fullScreen:v,TransitionComponent:p,maxWidth:m,children:[(0,u.jsx)(i.A,{sx:{position:"relative"},children:(0,u.jsxs)(d.A,{children:[(0,u.jsx)(c.A,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:o}),(0,u.jsx)(a.A,{onClick:A,style:{color:"white"},children:v?(0,u.jsx)(x.A,{}):(0,u.jsx)(h.A,{})}),(0,u.jsx)(a.A,{"aria-label":"close",onClick:f,style:{color:"white"},children:(0,u.jsx)(j.A,{})})]})}),(0,u.jsx)(l.A,{children:k})]})})),p=r.forwardRef((function(e,n){return(0,u.jsx)(o.A,{direction:"up",ref:n,...e})}))},74400:(e,n,s)=>{s.d(n,{l:()=>o});var r=s(96540),i=s(67512),t=s(66971),l=s(74848);const o=(0,r.memo)((e=>{let{buttonText:n,fullScreen:s=!1,title:o=n,variant:d="outlined",maxWidth:c,useOriginalText:a=!0,children:h}=e;const[x,j]=(0,r.useState)(!1),u=(0,r.useCallback)((e=>{j(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),m=(0,r.useCallback)((()=>{j(!1)}),[]),p=a?{textTransform:"none"}:{};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.A,{"data-is-view-more-button":"true",onClick:u,variant:d,size:"small",style:p,children:n}),(0,l.jsx)(t.a,{open:x,onClose:m,title:o,maxWidth:c,fullScreen:s,children:h})]})}))},49462:(e,n,s)=>{s.r(n),s.d(n,{default:()=>re});var r=s(96540),i=s.t(r,2),t=s(20053),l=s(9909),o=s(28774),d=s(44586);const c={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};var a=s(16712),h=s(1489),x=s(50173),j=s(37340),u=s(53951);function m(e,n,s,i,t){const[l,o]=r.useState((()=>t&&s?s(e).matches:i?i(e).matches:n));return(0,x.A)((()=>{let n=!0;if(!s)return;const r=s(e),i=()=>{n&&o(r.matches)};return i(),r.addListener(i),()=>{n=!1,r.removeListener(i)}}),[e,s]),l}const p=i.useSyncExternalStore;function f(e,n,s,i,t){const l=r.useCallback((()=>n),[n]),o=r.useMemo((()=>{if(t&&s)return()=>s(e).matches;if(null!==i){const{matches:n}=i(e);return()=>n}return l}),[l,e,i,t,s]),[d,c]=r.useMemo((()=>{if(null===s)return[l,()=>()=>{}];const n=s(e);return[()=>n.matches,e=>(n.addListener(e),()=>{n.removeListener(e)})]}),[l,s,e]);return p(c,d,o)}var k=s(21432),v=s(11470),b=s(19365),A=s(27293),y=s(74400),B=s(74848);const g=(0,r.memo)((()=>{const e=(0,a.o)(),[n,s]=(0,r.useState)(),i=(0,r.useCallback)((e=>{s(e)}),[]),[t,l]=(0,r.useState)(),o={hoverId:n,onHoverIdChange:i,activeId:t,onActiveIdChange:(0,r.useCallback)((e=>{l(e)}),[])};(0,r.useEffect)((()=>{const e=()=>{l(void 0)};return document.body.addEventListener("click",e,!0),()=>{document.body.removeEventListener("click",e,!0)}}),[]);return function(e,n={}){const s=(0,u.A)(),r="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:i=!1,matchMedia:t=(r?window.matchMedia:null),ssrMatchMedia:l=null,noSsr:o=!1}=(0,j.A)({name:"MuiUseMediaQuery",props:n,theme:s});let d="function"==typeof e?e(s):e;return d=d.replace(/^@media( ?)/m,""),(void 0!==p?f:m)(d,i,t,l,o)}("(min-width:1024px)")?(0,B.jsxs)(h.Ay,{container:!0,children:[(0,B.jsx)(h.Ay,{item:!0,xs:6,style:S,children:(0,B.jsx)("h2",{children:e?"\u7528\u6cd51. \u67e5\u8be2\u5b9e\u4f53":"Usage1. Query Entities"})}),(0,B.jsx)(h.Ay,{item:!0,xs:6,style:{...S,borderLeft:"solid 1px white"},children:(0,B.jsx)("h2",{children:e?"\u7528\u6cd52. \u67e5\u8be2DTO":"Usage2. Query DTOs"})}),(0,B.jsx)(h.Ay,{item:!0,xs:6,style:{...T,borderBottom:"dotted 1px gray"},children:(0,B.jsx)(I,{...o})}),(0,B.jsx)(h.Ay,{item:!0,xs:6,style:{...T,borderLeft:"solid 1px black",borderBottom:"dotted 1px gray"},children:(0,B.jsx)(N,{...o})}),(0,B.jsx)(h.Ay,{item:!0,xs:6,style:T,children:(0,B.jsx)(w,{...o})}),(0,B.jsx)(h.Ay,{item:!0,xs:6,style:{...T,borderLeft:"solid 1px black"},children:(0,B.jsx)(O,{...o})})]}):(0,B.jsxs)(h.Ay,{container:!0,children:[(0,B.jsx)(h.Ay,{item:!0,xs:12,style:S,children:(0,B.jsx)("h2",{children:e?"\u7528\u6cd51. \u67e5\u8be2\u5b9e\u4f53":"Usage1. Query Entities"})}),(0,B.jsx)(h.Ay,{item:!0,xs:12,style:T,children:(0,B.jsx)(I,{...o})}),(0,B.jsx)(h.Ay,{item:!0,xs:12,style:T,children:(0,B.jsx)(w,{...o})}),(0,B.jsx)(h.Ay,{item:!0,xs:12,style:S,children:(0,B.jsx)("h2",{children:e?"\u7528\u6cd52. \u67e5\u8be2DTO":"Usage2. Query DTOs"})}),(0,B.jsx)(h.Ay,{item:!0,xs:12,style:T,children:(0,B.jsx)(N,{...o})}),(0,B.jsx)(h.Ay,{item:!0,xs:12,style:T,children:(0,B.jsx)(O,{...o})})]})})),I=e=>{const n=(0,a.o)(),s=(0,r.useMemo)((()=>n?"\u6309\u6307\u5b9a\u7684\u5f62\u72b6\u67e5\u8be2\u5b9e\u4f53":"Query entities by specified shape"),[n]),i=(0,r.useMemo)((()=>(0,B.jsxs)("div",{children:[n?"`Book`\u7684\u6240\u6709\u6807\u91cf\u5c5e\u6027":"All scalar properties of `Book`",(0,B.jsxs)("ul",{children:[(0,B.jsx)("li",{children:"`Book.id`"}),(0,B.jsx)("li",{children:"`Book.name`"}),(0,B.jsx)("li",{children:"`Book.edition`"}),(0,B.jsx)("li",{children:"`Book.price`"})]})]})),[n]);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("div",{children:(0,B.jsx)("h3",{children:n?"\u67e5\u8be2\u4ee3\u7801":"Query Code"})}),(0,B.jsxs)(v.A,{groupId:"quckdemo-language",children:[(0,B.jsx)(b.A,{value:"java",label:"Java",children:(0,B.jsxs)("div",{style:L,children:[(0,B.jsxs)(V,{children:[(0,B.jsx)(E,{children:"BookTable"})," ",(0,B.jsx)(q,{children:"table"}),(0,B.jsx)(D,{children:" = "}),(0,B.jsx)(E,{children:"BookTable"}),(0,B.jsx)(_,{}),"$;",(0,B.jsx)(F,{children:"Or `Tables.BOOK_TABLE`"})]}),(0,B.jsx)(V,{children:"\xa0"}),(0,B.jsxs)(V,{children:[(0,B.jsx)(E,{children:"List"}),(0,B.jsx)(D,{children:"<"}),(0,B.jsx)(E,{children:"Book"}),(0,B.jsx)(D,{children:">"})," ",(0,B.jsx)(q,{children:"books"}),(0,B.jsx)(D,{children:" = "}),(0,B.jsx)(q,{children:"sqlClient"})]}),(0,B.jsxs)(V,{mouseId:"createQuery",...e,indent:1,children:[(0,B.jsx)(_,{}),"createQuery",(0,B.jsx)(D,{children:"("}),(0,B.jsx)(q,{children:"table"}),(0,B.jsx)(D,{children:")"})]}),(0,B.jsxs)(V,{mouseId:"where",...e,indent:1,children:[(0,B.jsx)(_,{}),"where",(0,B.jsx)(D,{children:"("}),(0,B.jsx)(q,{children:"table"}),(0,B.jsx)(_,{}),"name",(0,B.jsx)(D,{children:"()."}),"eq",(0,B.jsx)(D,{children:"("}),(0,B.jsx)(Q,{children:'"Learning GraphQL"'}),(0,B.jsx)(D,{children:")"}),(0,B.jsx)(D,{children:")"})]}),(0,B.jsxs)(V,{mouseId:"select",...e,indent:1,children:[(0,B.jsx)(_,{}),"select",(0,B.jsx)(D,{children:"("})]}),(0,B.jsxs)(V,{mouseId:"fetcher",...e,indent:2,tooltip:s,children:[(0,B.jsx)(q,{children:"table"}),(0,B.jsx)(_,{}),"fetch",(0,B.jsx)(D,{children:"("})]}),(0,B.jsxs)(V,{...e,indent:3,children:[(0,B.jsx)(E,{children:"BookFetcher"}),(0,B.jsx)(_,{}),"$",(0,B.jsx)(F,{children:"Or `Fetchers.BOOK_FETCHER`"})]}),(0,B.jsxs)(V,{mouseId:"allScalars",...e,indent:4,tooltip:i,children:[(0,B.jsx)(_,{}),"allScalarFields",(0,B.jsx)(D,{children:"()"})]}),(0,B.jsxs)(V,{mouseId:"Book.store",...e,indent:4,tooltip:P(n,"Book.store","MANY-TO-ONE",!0),children:[(0,B.jsx)(_,{}),"store",(0,B.jsx)(D,{children:"("})]}),(0,B.jsxs)(V,{...e,indent:5,children:[(0,B.jsx)(E,{children:"BookStoreFecher"}),(0,B.jsx)(_,{}),"$",(0,B.jsx)(F,{children:"Or `Fetchers.BOOK_STORE_FETCHER`"})]}),(0,B.jsxs)(V,{mouseId:"BookStore.name",...e,indent:6,tooltip:P(n,"BookStore.name"),children:[(0,B.jsx)(_,{}),"name",(0,B.jsx)(D,{children:"()"})]}),(0,B.jsx)(V,{...e,indent:4,children:(0,B.jsx)(D,{children:")"})}),(0,B.jsxs)(V,{mouseId:"Book.authors",...e,indent:4,tooltip:P(n,"Book.authors","MANY-TO-MANY",!0),children:[(0,B.jsx)(_,{}),"authors",(0,B.jsx)(D,{children:"("})]}),(0,B.jsxs)(V,{...e,indent:5,children:[(0,B.jsx)(E,{children:"AuthorFetcher"}),(0,B.jsx)(_,{}),"$",(0,B.jsx)(F,{children:"Or `Fetchers.AUTHOR_FETCHER`"})]}),(0,B.jsxs)(V,{mouseId:"Author.firstName",...e,indent:6,tooltip:P(n,"Author.firstName"),children:[(0,B.jsx)(_,{}),"firstName",(0,B.jsx)(D,{children:"()"})]}),(0,B.jsxs)(V,{mouseId:"Author.lastName",...e,indent:6,tooltip:P(n,"Author.lastName"),children:[(0,B.jsx)(_,{}),"lastName",(0,B.jsx)(D,{children:"()"})]}),(0,B.jsx)(V,{...e,indent:4,children:(0,B.jsx)(D,{children:")"})}),(0,B.jsx)(V,{...e,indent:2,children:(0,B.jsx)(D,{children:")"})}),(0,B.jsx)(V,{...e,indent:1,children:(0,B.jsx)(D,{children:")"})}),(0,B.jsxs)(V,{mouseId:"execute",...e,indent:1,children:[(0,B.jsx)(_,{}),"execute",(0,B.jsx)(D,{children:"()"}),";"]})]})}),(0,B.jsx)(b.A,{value:"kotlin",label:"Kotlin",children:(0,B.jsxs)("div",{style:L,children:[(0,B.jsxs)(V,{children:[(0,B.jsx)(Y,{children:"val "}),(0,B.jsx)(q,{children:"books"}),(0,B.jsx)(D,{children:" = "}),(0,B.jsx)(q,{children:"sqlClient"})]}),(0,B.jsxs)(V,{mouseId:"createQuery",...e,indent:1,children:[(0,B.jsx)(_,{}),"createQuery",(0,B.jsx)(D,{children:"("}),(0,B.jsx)(E,{children:"Book"}),(0,B.jsx)(D,{children:"::"}),(0,B.jsx)(Y,{children:"class"}),(0,B.jsx)(D,{children:") {"})]}),(0,B.jsxs)(V,{mouseId:"where",...e,indent:2,children:["where",(0,B.jsx)(D,{children:"("}),(0,B.jsx)(q,{children:"table"}),(0,B.jsx)(_,{}),"name eq ",(0,B.jsx)(Q,{children:'"Learning GraphQL"'}),(0,B.jsx)(D,{children:")"})]}),(0,B.jsxs)(V,{mouseId:"select",...e,indent:2,children:["select",(0,B.jsx)(D,{children:"("})]}),(0,B.jsxs)(V,{mouseId:"fetcher",...e,indent:3,tooltip:s,children:[(0,B.jsx)(q,{children:"table"}),(0,B.jsx)(_,{}),"fetchBy",(0,B.jsx)(D,{children:"{"})]}),(0,B.jsxs)(V,{mouseId:"allScalars",...e,indent:4,tooltip:i,children:["allScalarFields",(0,B.jsx)(D,{children:"()"})]}),(0,B.jsxs)(V,{mouseId:"Book.store",...e,indent:4,tooltip:P(n,"Book.store","MANY-TO-ONE",!0),children:["store ",(0,B.jsx)(D,{children:"{"})]}),(0,B.jsxs)(V,{mouseId:"BookStore.name",...e,indent:5,tooltip:P(n,"BookStore.name"),children:["name",(0,B.jsx)(D,{children:"()"})]}),(0,B.jsx)(V,{...e,indent:4,children:(0,B.jsx)(D,{children:"}"})}),(0,B.jsxs)(V,{mouseId:"Book.authors",...e,indent:4,tooltip:P(n,"Book.authors","MANY-TO-MANY",!0),children:["authors ",(0,B.jsx)(D,{children:"{"})]}),(0,B.jsxs)(V,{mouseId:"Author.firstName",...e,indent:5,tooltip:P(n,"Author.firstName"),children:["firstName",(0,B.jsx)(D,{children:"()"})]}),(0,B.jsxs)(V,{mouseId:"Author.lastName",...e,indent:5,tooltip:P(n,"Author.lastName"),children:["lastName",(0,B.jsx)(D,{children:"()"})]}),(0,B.jsx)(V,{...e,indent:4,children:(0,B.jsx)(D,{children:"}"})}),(0,B.jsx)(V,{...e,indent:3,children:(0,B.jsx)(D,{children:"}"})}),(0,B.jsx)(V,{...e,indent:2,children:(0,B.jsx)(D,{children:")"})}),(0,B.jsx)(V,{...e,indent:1,children:(0,B.jsx)(D,{children:"}"})}),(0,B.jsxs)(V,{mouseId:"execute",...e,indent:1,children:[(0,B.jsx)(_,{}),"execute",(0,B.jsx)(D,{children:"()"})]})]})})]})]})},N=e=>{const n=(0,a.o)(),s=(0,r.useMemo)((()=>n?"\u6309\u6307\u5b9a\u7684\u7c7b\u578b\u67e5\u8be2DTO":"Query DTOs by specified type"),[n]),i=(0,r.useMemo)((()=>(0,B.jsxs)("div",{children:[n?"`Book`\u7684\u6240\u6709\u6807\u91cf\u5c5e\u6027":"All scalar properties of `Book`",(0,B.jsxs)("ul",{children:[(0,B.jsx)("li",{children:"`Book.id`"}),(0,B.jsx)("li",{children:"`Book.name`"}),(0,B.jsx)("li",{children:"`Book.edition`"}),(0,B.jsx)("li",{children:"`Book.price`"})]})]})),[n]);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("div",{children:(0,B.jsx)("h3",{children:n?"DTO\u4ee3\u7801":"DTO Code"})}),(0,B.jsxs)("div",{style:L,children:[(0,B.jsxs)(V,{children:[(0,B.jsx)(Y,{children:"export "}),"com",(0,B.jsx)(_,{}),"yourcompany",(0,B.jsx)(_,{}),"yourpackage",(0,B.jsx)(_,{}),"Book"]}),(0,B.jsxs)(V,{...e,indent:1,children:[(0,B.jsx)(D,{children:"-> "}),(0,B.jsx)(Y,{children:"package "}),"com",(0,B.jsx)(_,{}),"yourcompany",(0,B.jsx)(_,{}),"yourpackage",(0,B.jsx)(_,{}),"dto"]}),(0,B.jsx)(V,{children:"\xa0"}),(0,B.jsxs)(V,{mouseId:"fetcher",...e,tooltip:n?"DTO\u5b9a\u4e49\u5f62\u72b6":"DTO defines shape",children:[(0,B.jsx)(E,{children:"BookDetailView"}),(0,B.jsx)(D,{children:" {"})]}),(0,B.jsxs)(V,{mouseId:"allScalars",...e,indent:1,tooltip:i,children:[(0,B.jsx)(D,{children:"#"}),"allScalars"]}),(0,B.jsxs)(V,{mouseId:"Book.store",...e,indent:1,tooltip:P(n,"Book.store","MANY-TO-ONE"),children:["store",(0,B.jsx)(D,{children:" {"})]}),(0,B.jsx)(V,{mouseId:"BookStore.id",...e,indent:2,tooltip:P(n,"BookStore.id"),children:"id"}),(0,B.jsx)(V,{mouseId:"BookStore.name",...e,indent:2,tooltip:P(n,"BookStore.name"),children:"name"}),(0,B.jsx)(V,{...e,indent:1,children:(0,B.jsx)(D,{children:" }"})}),(0,B.jsxs)(V,{mouseId:"Book.authors",...e,indent:1,tooltip:P(n,"Book.authors","MANY-TO-MANY"),children:["authors",(0,B.jsx)(D,{children:" {"})]}),(0,B.jsx)(V,{mouseId:"Author.id",...e,indent:2,tooltip:P(n,"Author.id"),children:"id"}),(0,B.jsx)(V,{mouseId:"Author.firstName",...e,indent:2,tooltip:P(n,"Author.firstName"),children:"firstName"}),(0,B.jsx)(V,{mouseId:"Author.lastName",...e,indent:2,tooltip:P(n,"Author.lastName"),children:"lastName"}),(0,B.jsx)(V,{indent:1,children:(0,B.jsx)(D,{children:" }"})}),(0,B.jsx)(V,{children:"}"})]}),n&&(0,B.jsxs)(A.A,{type:"info",children:["\u7f16\u8bd1\u540e\uff0c\u81ea\u52a8\u751f\u6210Java/Kotlin\u7c7b\u578b ",(0,B.jsx)(y.l,{buttonText:"BookDetailView",title:"\u81ea\u52a8\u751f\u6210\u7684\u7c7b\u578b`BookDetailView`",children:(0,B.jsx)(K,{})})]}),!n&&(0,B.jsxs)(A.A,{type:"info",children:["After compilation, A new java/kotlin type ",(0,B.jsx)(y.l,{buttonText:"BookDetailView",title:"Generated type `BookDetailView`",children:(0,B.jsx)(K,{})})," will be automatically generated."]}),(0,B.jsx)("div",{children:"\xa0"}),(0,B.jsx)("div",{children:(0,B.jsx)("h3",{children:n?"\u67e5\u8be2\u4ee3\u7801":"Query Code"})}),(0,B.jsxs)(v.A,{groupId:"quckdemo-language",children:[(0,B.jsx)(b.A,{value:"java",label:"Java",children:(0,B.jsxs)("div",{style:L,children:[(0,B.jsxs)(V,{children:[(0,B.jsx)(E,{children:"BookTable"})," ",(0,B.jsx)(q,{children:"table"}),(0,B.jsx)(D,{children:" = "}),(0,B.jsx)(E,{children:"BookTable"}),(0,B.jsx)(_,{}),"$;",(0,B.jsx)(F,{children:"Or `Tables.BOOK`"})]}),(0,B.jsx)(V,{children:"\xa0"}),(0,B.jsxs)(V,{children:[(0,B.jsx)(E,{children:"List"}),(0,B.jsx)(D,{children:"<"}),(0,B.jsx)(E,{children:"BookDetailView"}),(0,B.jsx)(D,{children:">"})," ",(0,B.jsx)(q,{children:"books"}),(0,B.jsx)(D,{children:" = "}),(0,B.jsx)(q,{children:"sqlClient"})]}),(0,B.jsxs)(V,{mouseId:"createQuery",...e,indent:1,children:[(0,B.jsx)(_,{}),"createQuery",(0,B.jsx)(D,{children:"("}),(0,B.jsx)(q,{children:"table"}),(0,B.jsx)(D,{children:")"})]}),(0,B.jsxs)(V,{mouseId:"where",...e,indent:1,children:[(0,B.jsx)(_,{}),"where",(0,B.jsx)(D,{children:"("}),(0,B.jsx)(q,{children:"table"}),(0,B.jsx)(_,{}),"name",(0,B.jsx)(D,{children:"()."}),"eq",(0,B.jsx)(D,{children:"("}),(0,B.jsx)(Q,{children:'"Learning GraphQL"'}),(0,B.jsx)(D,{children:")"}),(0,B.jsx)(D,{children:")"})]}),(0,B.jsxs)(V,{mouseId:"select",...e,indent:1,children:[(0,B.jsx)(_,{}),"select",(0,B.jsx)(D,{children:"("})]}),(0,B.jsxs)(V,{mouseId:"fetcher",...e,indent:2,tooltip:s,children:[(0,B.jsx)(q,{children:"table"}),(0,B.jsx)(_,{}),"fetch",(0,B.jsx)(D,{children:"("}),(0,B.jsx)(E,{children:"BookDetailView"}),(0,B.jsx)(_,{}),(0,B.jsx)(Y,{children:"class"}),(0,B.jsx)(D,{children:")"})]}),(0,B.jsx)(V,{indent:1,children:(0,B.jsx)(D,{children:")"})}),(0,B.jsxs)(V,{mouseId:"execute",...e,indent:1,children:[(0,B.jsx)(_,{}),"execute",(0,B.jsx)(D,{children:"()"}),";"]})]})}),(0,B.jsx)(b.A,{value:"kotlin",label:"Kotlin",children:(0,B.jsxs)("div",{style:L,children:[(0,B.jsxs)(V,{children:[(0,B.jsx)(Y,{children:"val "}),(0,B.jsx)(q,{children:"books"}),(0,B.jsx)(D,{children:" = "}),(0,B.jsx)(q,{children:"sqlClient"})]}),(0,B.jsxs)(V,{mouseId:"createQuery",...e,indent:1,children:[(0,B.jsx)(_,{}),"createQuery",(0,B.jsx)(D,{children:"("}),(0,B.jsx)(E,{children:"Book"}),(0,B.jsx)(D,{children:"::"}),(0,B.jsx)(Y,{children:"class"}),(0,B.jsx)(D,{children:") {"})]}),(0,B.jsxs)(V,{mouseId:"where",...e,indent:2,children:["where",(0,B.jsx)(D,{children:"("}),(0,B.jsx)(q,{children:"table"}),(0,B.jsx)(_,{}),"name eq ",(0,B.jsx)(Q,{children:'"Learning GraphQL"'}),(0,B.jsx)(D,{children:")"})]}),(0,B.jsxs)(V,{mouseId:"select",...e,indent:2,children:["select",(0,B.jsx)(D,{children:"("})]}),(0,B.jsxs)(V,{mouseId:"fetcher",...e,indent:3,tooltip:s,children:[(0,B.jsx)(q,{children:"table"}),(0,B.jsx)(_,{}),"fetch",(0,B.jsx)(D,{children:"("}),(0,B.jsx)(E,{children:"BookDetailView"}),(0,B.jsx)(D,{children:"::"}),(0,B.jsx)(Y,{children:"class"}),(0,B.jsx)(D,{children:")"})]}),(0,B.jsx)(V,{indent:2,children:(0,B.jsx)(D,{children:")"})}),(0,B.jsx)(V,{...e,indent:1,children:(0,B.jsx)(D,{children:"}"})}),(0,B.jsxs)(V,{mouseId:"execute",...e,indent:1,children:[(0,B.jsx)(_,{}),"execute",(0,B.jsx)(D,{children:"()"})]})]})})]})]})},w=e=>{const n=(0,a.o)();return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("h2",{children:n?"\u67e5\u8be2\u5230\u7684\u5b9e\u4f53":"Entities that was queried"}),(0,B.jsxs)("div",{style:L,children:[(0,B.jsx)(V,{children:(0,B.jsx)(D,{children:"["})}),(0,B.jsx)(V,{...e,indent:1,children:(0,B.jsx)(D,{children:"{"})}),(0,B.jsxs)(V,{mouseId:"Book.id",...e,indent:2,tooltip:P(n,"Book.id"),children:[(0,B.jsx)(R,{prop:"id"}),(0,B.jsx)(Q,{children:"1"}),(0,B.jsx)(z,{})]}),(0,B.jsxs)(V,{mouseId:"Book.name",...e,indent:2,tooltip:P(n,"Book.name"),children:[(0,B.jsx)(R,{prop:"name"}),(0,B.jsx)(Q,{children:'"Learning GraphQL"'}),(0,B.jsx)(z,{})]}),(0,B.jsxs)(V,{mouseId:"Book.edition",...e,indent:2,tooltip:P(n,"Book.edition"),children:[(0,B.jsx)(R,{prop:"edition"}),(0,B.jsx)(Q,{children:"1"}),(0,B.jsx)(z,{})]}),(0,B.jsxs)(V,{mouseId:"Book.price",...e,indent:2,tooltip:P(n,"Book.price"),children:[(0,B.jsx)(R,{prop:"price"}),(0,B.jsx)(Q,{children:"50"}),(0,B.jsx)(z,{})]}),(0,B.jsxs)(V,{mouseId:"Book.store",...e,indent:2,tooltip:P(n,"Book.store","MANY-TO-ONE"),children:[(0,B.jsx)(R,{prop:"store"}),(0,B.jsx)(D,{children:"{"})]}),(0,B.jsxs)(V,{mouseId:"BookStore.id",...e,indent:3,tooltip:P(n,"BookStore.id"),children:[(0,B.jsx)(R,{prop:"id"}),(0,B.jsx)(Q,{children:"1"}),(0,B.jsx)(z,{})]}),(0,B.jsxs)(V,{mouseId:"BookStore.name",...e,indent:3,tooltip:P(n,"BookStore.name"),children:[(0,B.jsx)(R,{prop:"name"}),(0,B.jsx)(Q,{children:'"O\'REILLY"'})]}),(0,B.jsxs)(V,{...e,indent:2,children:[(0,B.jsx)(D,{children:"}"}),(0,B.jsx)(z,{})]}),(0,B.jsxs)(V,{mouseId:"Book.authors",...e,indent:2,tooltip:P(n,"Book.authors","MANY-TO-MANY"),children:[(0,B.jsx)(R,{prop:"authors"}),(0,B.jsx)(D,{children:"["})]}),(0,B.jsx)(V,{...e,indent:3,children:(0,B.jsx)(D,{children:"{"})}),(0,B.jsxs)(V,{mouseId:"Author.id#1",...e,indent:4,tooltip:P(n,"Author.id"),children:[(0,B.jsx)(R,{prop:"id"}),(0,B.jsx)(Q,{children:"2"}),(0,B.jsx)(z,{})]}),(0,B.jsxs)(V,{mouseId:"Author.firstName#1",...e,indent:4,tooltip:P(n,"Author.firstName"),children:[(0,B.jsx)(R,{prop:"firstName"}),(0,B.jsx)(Q,{children:'"Alex"'})]}),(0,B.jsxs)(V,{mouseId:"Author.lastName#1",...e,indent:4,tooltip:P(n,"Author.lastName"),children:[(0,B.jsx)(R,{prop:"lastName"}),(0,B.jsx)(Q,{children:'"Banks"'})]}),(0,B.jsxs)(V,{...e,indent:3,children:[(0,B.jsx)(D,{children:"}"}),(0,B.jsx)(z,{})]}),(0,B.jsx)(V,{...e,indent:3,children:(0,B.jsx)(D,{children:"{"})}),(0,B.jsxs)(V,{mouseId:"Author.id#2",...e,indent:4,tooltip:P(n,"Author.id"),children:[(0,B.jsx)(R,{prop:"id"}),(0,B.jsx)(Q,{children:"1"}),(0,B.jsx)(z,{})]}),(0,B.jsxs)(V,{mouseId:"Author.firstName#2",...e,indent:4,tooltip:P(n,"Author.firstName"),children:[(0,B.jsx)(R,{prop:"firstName"}),(0,B.jsx)(Q,{children:'"Eve"'})]}),(0,B.jsxs)(V,{mouseId:"Author.lastName#2",...e,indent:4,tooltip:P(n,"Author.lastName"),children:[(0,B.jsx)(R,{prop:"lastName"}),(0,B.jsx)(Q,{children:'"Procello"'})]}),(0,B.jsx)(V,{...e,indent:3,children:(0,B.jsx)(D,{children:"}"})}),(0,B.jsx)(V,{...e,indent:2,children:(0,B.jsx)(D,{children:"]"})}),(0,B.jsx)(V,{...e,indent:1,children:(0,B.jsx)(D,{children:"},"})}),(0,B.jsx)(V,{...e,indent:1,children:(0,B.jsx)("span",{style:M,children:n?"...\u7701\u7565\u66f4\u591a\u6570\u636e...":"...Omit more data..."})}),(0,B.jsx)(V,{children:(0,B.jsx)(D,{children:"]"})})]})]})},O=e=>{const n=(0,a.o)();return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("h2",{children:n?"\u67e5\u8be2\u5230\u7684DTO":"DTOs that was queried"}),(0,B.jsxs)("div",{style:L,children:[(0,B.jsx)(V,{children:(0,B.jsx)(D,{children:"["})}),(0,B.jsxs)(V,{...e,indent:1,children:[(0,B.jsx)(E,{children:"BookDetailView"}),(0,B.jsx)(D,{children:"("})]}),(0,B.jsxs)(V,{mouseId:"Book.id",...e,indent:2,tooltip:P(n,"Book.id"),children:[(0,B.jsx)($,{prop:"id"}),(0,B.jsx)(Q,{children:"1"}),(0,B.jsx)(z,{})]}),(0,B.jsxs)(V,{mouseId:"Book.name",...e,indent:2,tooltip:P(n,"Book.name"),children:[(0,B.jsx)($,{prop:"name"}),(0,B.jsx)(Q,{children:"Learning GraphQL"}),(0,B.jsx)(z,{})]}),(0,B.jsxs)(V,{mouseId:"Book.edition",...e,indent:2,tooltip:P(n,"Book.edition"),children:[(0,B.jsx)($,{prop:"edition"}),(0,B.jsx)(Q,{children:"1"}),(0,B.jsx)(z,{})]}),(0,B.jsxs)(V,{mouseId:"Book.price",...e,indent:2,tooltip:P(n,"Book.price"),children:[(0,B.jsx)($,{prop:"price"}),(0,B.jsx)(Q,{children:"50"}),(0,B.jsx)(z,{})]}),(0,B.jsxs)(V,{mouseId:"Book.store",...e,indent:2,tooltip:P(n,"Book.store","MANY-TO-ONE"),children:[(0,B.jsx)($,{prop:"store"}),(0,B.jsx)(E,{children:"BookDetailView.TargetOf_store"}),(0,B.jsx)(D,{children:"("})]}),(0,B.jsxs)(V,{mouseId:"BookStore.id",...e,indent:3,tooltip:P(n,"BookStore.id"),children:[(0,B.jsx)($,{prop:"id"}),(0,B.jsx)(Q,{children:"1"}),(0,B.jsx)(z,{})]}),(0,B.jsxs)(V,{mouseId:"BookStore.name",...e,indent:3,tooltip:P(n,"BookStore.name"),children:[(0,B.jsx)($,{prop:"name"}),(0,B.jsx)(Q,{children:"O'REILLY"})]}),(0,B.jsxs)(V,{...e,indent:2,children:[(0,B.jsx)(D,{children:")"}),(0,B.jsx)(z,{})]}),(0,B.jsxs)(V,{mouseId:"Book.authors",...e,indent:2,tooltip:P(n,"Book.authors","MANY-TO-MANY"),children:[(0,B.jsx)($,{prop:"authors"}),(0,B.jsx)(D,{children:"["})]}),(0,B.jsxs)(V,{...e,indent:3,children:[(0,B.jsx)(E,{children:"BookDetailView.TargetOf_authors"}),(0,B.jsx)(D,{children:"("})]}),(0,B.jsxs)(V,{mouseId:"Author.id#1",...e,indent:4,tooltip:P(n,"Author.id"),children:[(0,B.jsx)($,{prop:"id"}),(0,B.jsx)(Q,{children:"2"}),(0,B.jsx)(z,{})]}),(0,B.jsxs)(V,{mouseId:"Author.firstName#1",...e,indent:4,tooltip:P(n,"Author.firstName"),children:[(0,B.jsx)($,{prop:"firstName"}),(0,B.jsx)(Q,{children:"Alex"})]}),(0,B.jsxs)(V,{mouseId:"Author.lastName#1",...e,indent:4,tooltip:P(n,"Author.lastName"),children:[(0,B.jsx)($,{prop:"lastName"}),(0,B.jsx)(Q,{children:"Banks"})]}),(0,B.jsxs)(V,{...e,indent:3,children:[(0,B.jsx)(D,{children:")"}),(0,B.jsx)(z,{})]}),(0,B.jsxs)(V,{...e,indent:3,children:[(0,B.jsx)(E,{children:"BookDetailView.TargetOf_authors"}),(0,B.jsx)(D,{children:"("})]}),(0,B.jsxs)(V,{mouseId:"Author.id#2",...e,indent:4,tooltip:P(n,"Author.id"),children:[(0,B.jsx)($,{prop:"id"}),(0,B.jsx)(Q,{children:"1"}),(0,B.jsx)(z,{})]}),(0,B.jsxs)(V,{mouseId:"Author.firstName#2",...e,indent:4,tooltip:P(n,"Author.firstName"),children:[(0,B.jsx)($,{prop:"firstName"}),(0,B.jsx)(Q,{children:"Eve"})]}),(0,B.jsxs)(V,{mouseId:"Author.lastName#2",...e,indent:4,tooltip:P(n,"Author.lastName"),children:[(0,B.jsx)($,{prop:"lastName"}),(0,B.jsx)(Q,{children:"Procello"})]}),(0,B.jsx)(V,{...e,indent:3,children:(0,B.jsx)(D,{children:")"})}),(0,B.jsx)(V,{...e,indent:2,children:(0,B.jsx)(D,{children:"]"})}),(0,B.jsx)(V,{...e,indent:1,children:(0,B.jsx)(D,{children:"),"})}),(0,B.jsx)(V,{...e,indent:1,children:(0,B.jsx)("span",{style:M,children:n?"...\u7701\u7565\u66f4\u591a\u6570\u636e...":"...Omit more data..."})}),(0,B.jsx)(V,{children:(0,B.jsx)(D,{children:"]"})})]})]})},T={padding:"1rem",whiteSpace:"nowrap"},S={...T,backgroundColor:"#1976d2",color:"white"},L={margin:"1rem 0 1rem 0",padding:"0.5rem",backgroundColor:"#212121",color:"white",overflow:"hidden"},C={position:"absolute",backgroundColor:"#212121",opacity:.8,transform:"translateY(-50%)",padding:"1rem",border:"solid 1px white",borderRadius:"0.5rem",pointerEvents:"none"},M={color:"#c62828",fontWeight:"bold"},V=e=>{let{indent:n=0,tooltip:s,children:i,mouseId:t,hoverId:l,onHoverIdChange:o,activeId:d,onActiveIdChange:c}=e;const a=(0,r.useMemo)((()=>G(t,d)?H:G(t,l)?J:void 0),[t,l,d]),h=(0,r.useMemo)((()=>null!=t&&(G(t,l)||void 0===l&&G(t,d))&&void 0!==s),[t,l,s]),x=(0,r.useRef)(null),[j,u]=(0,r.useState)({x:0,y:0});(0,r.useEffect)((()=>{const e=()=>{if(null!=x.current){let e=x.current;const n={x:e.offsetHeight,y:e.offsetHeight/2};for(;e&&(n.x+=e.offsetLeft,n.y+=e.offsetTop,!e.offsetParent||1==e.offsetParent.nodeType);)e=e.offsetParent;u(n)}};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[x.current]);const m=(0,r.useCallback)((()=>{void 0!==o&&o(t)}),[o]),p=(0,r.useCallback)((()=>{void 0!==o&&o(void 0)}),[o]),f=(0,r.useCallback)((()=>{void 0!==c&&c(t)}),[c]);return(0,B.jsxs)("div",{style:{paddingLeft:1.5*n+"rem",backgroundColor:a},onMouseEnter:m,onMouseLeave:p,onClick:f,children:[i,(0,B.jsxs)("div",{style:{display:"inline-block"},ref:x,children:["\xa0",h&&(0,B.jsx)("div",{style:{...C,left:j.x,top:j.y},children:s})]})]})},E=e=>{let{children:n}=e;return(0,B.jsx)("span",{style:{color:"#4db6ac"},children:n})},D=e=>{let{children:n}=e;return(0,B.jsx)("span",{style:{color:"#9575cd"},children:n})},_=()=>(0,B.jsx)(D,{children:"."}),q=e=>{let{children:n}=e;return(0,B.jsx)("span",{style:{color:"#dce775"},children:n})},Q=e=>{let{children:n}=e;return(0,B.jsx)("span",{style:{color:"#81c784"},children:n})},Y=e=>{let{children:n}=e;return(0,B.jsx)("span",{style:{color:"#64b5f6",fontWeight:"bold"},children:n})},F=e=>{let{children:n}=e;return(0,B.jsxs)("span",{style:{color:"#757575",fontStyle:"italic"},children:[" // ",n]})},R=e=>{let{prop:n}=e;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)("span",{children:['"',n,'"']}),(0,B.jsx)(D,{children:": "})]})},$=e=>{let{prop:n}=e;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("span",{children:n}),(0,B.jsx)(D,{children:"="})]})},z=()=>(0,B.jsx)(D,{children:","});function P(e,n,s,r){if(void 0===s&&(s="SCALAR"),void 0===r&&(r=!1),r)return(0,B.jsxs)("div",{children:[P(e,n,s,!1),(0,B.jsx)("div",{style:{borderLeft:"solid 10px #81c784",color:"#81c784",paddingLeft:"0.5rem"},children:e?"\u6ce8\u610f\uff0c\u5173\u8054id\u88ab\u81ea\u52a8\u6293\u53d6":"Notes: Associated id is fetched automatcially"})]});switch(s){case"MANY-TO-ONE":return(e?"\u591a\u5bf9\u4e00\u5173\u8054":"Many-to-one association")+" `"+n+"`";case"MANY-TO-MANY":return(e?"\u591a\u5bf9\u591a\u5173\u8054":"Many-to-many association")+" `"+n+"`";default:return(e?"\u6807\u91cf\u5c5e\u6027":"Scalar property")+" `"+n+"`"}}function G(e,n){if(void 0!==n){if(e===n)return!0;const s=n.lastIndexOf("#");if(-1!==s){if(n.substring(0,s)===e)return!0}if("allScalars"===e&&void 0!==n&&-1!==U.indexOf(n))return!0}return!1}const K=()=>{const e=(0,a.o)(),n=(0,r.useMemo)((()=>W.split("<omit>").join(e?"...\u7701\u7565\u66f4\u591a\u6210\u5458...":"...Omit other members...")),[e]),s=(0,r.useMemo)((()=>X.split("<omit>").join(e?"...\u7701\u7565\u66f4\u591a\u6210\u5458...":"...Omit other members...")),[e]);return(0,B.jsxs)(v.A,{groupId:"quckdemo-language",children:[(0,B.jsx)(b.A,{value:"java",label:"Java",children:(0,B.jsx)(k.A,{language:"java",title:"BookDetailView.java",children:n})}),(0,B.jsx)(b.A,{value:"kotlin",label:"Kotlin",children:(0,B.jsx)(k.A,{language:"kotlin",title:"BookDetailView.kt",children:s})})]})},U=["Book.id","Book.name","Book.edition","Book.price"],H="#1a237e",J="#7986cb",W='@GeneratedBy(file = "<yourproject>/src/main/dto/Book.dto")\npublic class BookDetailView implements View<Book> {\n    \n    private long id;\n    \n    private String name;\n\n    private int edition;\n\n    private BigDecimal;\n\n    @Nullable\n    private TargetOf_store store;\n\n    private List<TargetOf_authors> authors;\n\n    <omit>\n\n    public static class TargetOf_store implements View<BookStore> {\n\n        private long id;\n\n        private String name;\n\n        <omit>\n    }\n\n    public static class TargetOf_authors implements View<Author> {\n\n        private long id;\n\n        private String firstName;\n\n        private String lastName;\n\n        <omit>\n    }\n}',X='@GeneratedBy(file = "<yourproject>/src/main/dto/Book.dto")\nopen class BookDetailView(\n    val id: Long,\n    val name: String,\n    val edition: Int,\n    val price: BigPrice,\n    val store: BookDetailView.TargetOf_store? = null,\n    val authors: List<BookDetailView.TargetOf_authors> = emptyList()\n): View<Book> {\n\n    <omit>\n\n    open class TargetOf_store(\n        val id: Long,\n        val name: String\n    ): View<BookStore> {\n\n        <omit>\n    }\n\n    open class TargetOf_authors(\n        val id: Long,\n        val firstName: String,\n        val lastName: String\n    ): View<Author> {\n\n        <omit>\n    }\n}';function Z(){const{i18n:e}=(0,d.A)();return(0,B.jsx)("div",{className:"container",children:(0,B.jsxs)("div",{className:"row",children:[(0,B.jsx)("div",{children:"\xa0"}),(0,B.jsx)(g,{})]})})}var ee=s(92303);function ne(e){let{children:n,fallback:s}=e;return(0,ee.A)()?(0,B.jsx)(B.Fragment,{children:n?.()}):s??null}function se(){const{siteConfig:e,i18n:n}=(0,d.A)(),s=(0,r.useMemo)((()=>{const e=n.currentLocale;return"zh"===e||"zh_CN"==e||"zh_cn"==e}),[n.currentLocale]),i=(0,r.useMemo)((()=>s?"Jimmer, \u9488\u5bf9Java\u548cKotlin\u7684\u9769\u547d\u6027ORM":e.title),[s,e.title]),l=(0,r.useMemo)((()=>s?"\u4e0d\u53ea\u662fORM\uff0c\u8fd8\u662f\u4e00\u5957\u96c6\u6210\u5316\u65b9\u6848":e.tagline),[s,e.tagline]),a=(0,r.useMemo)((()=>s?"\u8fdb\u5165\u6559\u7a0b":"Goto Tutorial"),[s]);return(0,B.jsx)("header",{className:(0,t.A)("hero hero--primary",c.heroBanner),children:(0,B.jsxs)("div",{className:"container",children:[(0,B.jsx)("h1",{className:"hero__title",children:i}),(0,B.jsx)("p",{className:"hero__subtitle",children:l}),(0,B.jsx)("div",{className:c.buttons,children:(0,B.jsx)(o.A,{className:"button button--secondary button--lg",to:"/docs/overview/welcome",children:a})})]})})}function re(){const{siteConfig:e}=(0,d.A)();return(0,B.jsx)(ne,{children:()=>(0,B.jsxs)(l.A,{title:`${e.title} documentation`,description:"Description will go into a meta tag in <head />",children:[(0,B.jsx)(se,{}),(0,B.jsx)("main",{children:(0,B.jsx)(Z,{})})]})})}},16712:(e,n,s)=>{s.d(n,{o:()=>i});var r=s(44586);function i(){const{i18n:e}=(0,r.A)(),n=e.currentLocale;return"zh"===n||"zh_cn"===n||"zh_CN"==n}}}]);