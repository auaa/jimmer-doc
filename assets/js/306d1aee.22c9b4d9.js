"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5392],{92447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(74848),i=n(28453);const s={sidebar_position:3,title:"Save Command"},o=void 0,r={id:"mutation/save-command/index",title:"Save Command",description:"One statement to save complex data of arbitrary shape, find DIFF to change database, like React/Vue",source:"@site/docs/mutation/save-command/index.md",sourceDirName:"mutation/save-command",slug:"/mutation/save-command/",permalink:"/jimmer-doc/docs/mutation/save-command/",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/save-command/index.md",tags:[],version:"current",lastUpdatedAt:1722888025e3,sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Save Command"},sidebar:"tutorialSidebar",previous:{title:"Delete Statement",permalink:"/jimmer-doc/docs/mutation/delete-statement"},next:{title:"Basic Usage",permalink:"/jimmer-doc/docs/mutation/save-command/usage"}},d={},c=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"One statement to save complex data of arbitrary shape, find DIFF to change database, like React/Vue"})}),"\n",(0,a.jsx)(t.p,{children:"Save commands are a very powerful capability of Jimmer that can greatly simplify the development difficulty of persisting complex data structures."}),"\n",(0,a.jsxs)(t.p,{children:["If ",(0,a.jsx)(t.a,{href:"../../query/object-fetcher",children:"object fetchers"})," enable output data to be in any shape, then save commands allow input data to also be in any shape."]}),"\n",(0,a.jsxs)(t.p,{children:["For readers familiar with web frontend technologies, this can be analogized to ",(0,a.jsx)(t.code,{children:"Virtual DOM diff"})," in ",(0,a.jsx)(t.a,{href:"https://react.dev/",children:"React"})," or ",(0,a.jsx)(t.a,{href:"https://vuejs.org/",children:"Vue"}),"."]}),"\n",(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsx)(t.mdxAdmonitionTitle,{}),(0,a.jsxs)(t.p,{children:["Save command require developers to ",(0,a.jsx)(t.strong,{children:"completely change their thinking pattern"})]}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Fundamental difference in thinking"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The traditional thinking pattern:"}),"\n",(0,a.jsxs)(t.p,{children:["Manually compare the data structure to be saved with existing data in the database, and execute ",(0,a.jsx)(t.code,{children:"INSERT"}),", ",(0,a.jsx)(t.code,{children:"UPDATE"})," or ",(0,a.jsx)(t.code,{children:"DELETE"})," on the changed parts"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The thinking pattern for save command:"}),"\n",(0,a.jsxs)(t.p,{children:["Accept the data structure passed from client as a whole and just save it. Jimmer will handle everything ",(0,a.jsxs)(t.em,{children:["(automatically compare the data structure to be saved with existing data in the database, and execute ",(0,a.jsx)(t.code,{children:"INSERT"}),", ",(0,a.jsx)(t.code,{children:"UPDATE"})," or ",(0,a.jsx)(t.code,{children:"DELETE"})," on the changed parts)"]})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Old habits should be replaced by better methods"}),"\n",(0,a.jsx)(t.p,{children:"In the traditional development mode, developers like to do one thing: query an object first, then modify some of its properties, and finally save the modified object."}),"\n",(0,a.jsxs)(t.p,{children:["Although Jimmer also allows developers to do this, it is recommended to use a more performant approach, please refer to ",(0,a.jsx)(t.a,{href:"./incomplete",children:"Incomplete Object"}),"."]}),"\n"]}),"\n"]})]}),"\n",(0,a.jsx)(t.p,{children:"Calling a save command only takes one line of code, but hides countless details internally that documentation cannot exhaustively enumerate. Therefore, save commands have a dedicated sample project:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Java: ",(0,a.jsx)(t.a,{href:"https://github.com/babyfish-ct/jimmer-examples/tree/main/java/save-command",children:"jimmer-examples/java/save-command"})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Kotlin: ",(0,a.jsx)(t.a,{href:"https://github.com/babyfish-ct/jimmer-examples/tree/main/kotlin/save-command-kt",children:"jimmer-examples/kotlin/save-command-kt"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Simply open either one in an IDE, and run the unit tests."})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var a=n(96540);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);