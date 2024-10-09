"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1112],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=a.createContext({}),p=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(t),c=i,g=s["".concat(m,".").concat(c)]||s[c]||u[c]||r;return t?a.createElement(g,o(o({ref:n},d),{},{components:t})):a.createElement(g,o({ref:n},d))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=s;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),i=t(34334);const r="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(83117),i=t(67294),r=t(34334),o=t(72389),l=t(67392),m=t(7094),p=t(12466);const d="tabList__CuJ",u="tabItem_LNqP";function s(e){var n;const{lazy:t,block:o,defaultValue:s,values:c,groupId:g,className:k}=e,b=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??b.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),y=(0,l.l)(h,((e,n)=>e.value===n.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===s?s:s??(null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)??b[0].props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:f}=(0,m.U)(),[_,T]=(0,i.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:I}=(0,p.o5)();if(null!=g){const e=N[g];null!=e&&e!==_&&h.some((n=>n.value===e))&&T(e)}const E=e=>{const n=e.currentTarget,t=O.indexOf(n),a=h[t].value;a!==_&&(I(n),T(a),null!=g&&f(g,String(a)))},x=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]??O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]??O[O.length-1];break}}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},k)},h.map((e=>{let{value:n,label:t,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===n?0:-1,"aria-selected":_===n,key:n,ref:e=>O.push(e),onKeyDown:x,onFocus:E,onClick:E},o,{className:(0,r.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":_===n})}),t??n)}))),t?(0,i.cloneElement)(b.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==_})))))}function c(e){const n=(0,o.Z)();return i.createElement(s,(0,a.Z)({key:String(n)},e))}},23223:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>m,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=t(83117),i=(t(67294),t(3905)),r=t(65488),o=t(85162);const l={sidebar_position:1,title:"Embedded Properties"},m=void 0,p={unversionedId:"mapping/advanced/embedded",id:"mapping/advanced/embedded",title:"Embedded Properties",description:"Embedded properties (Composite properites) merge multiple columns in the database into an integral whole, map them to a non-entity custom type, and then use this custom property to declare a property for the entity.",source:"@site/docs/mapping/advanced/embedded.mdx",sourceDirName:"mapping/advanced",slug:"/mapping/advanced/embedded",permalink:"/jimmer-doc/docs/mapping/advanced/embedded",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/advanced/embedded.mdx",tags:[],version:"current",lastUpdatedAt:1710161015,formattedLastUpdatedAt:"Mar 11, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Embedded Properties"},sidebar:"tutorialSidebar",previous:{title:"Advanced mapping",permalink:"/jimmer-doc/docs/mapping/advanced/"},next:{title:"MappedSuperclass",permalink:"/jimmer-doc/docs/mapping/advanced/mapped-super-class"}},d={},u=[{value:"As Ordinary Field",id:"as-ordinary-field",level:2},{value:"Basic Usage",id:"basic-usage",level:3},{value:"Override Column Names",id:"override-column-names",level:3},{value:"As Primary/Foreign Keys",id:"as-primaryforeign-keys",level:2},{value:"As Primary Key",id:"as-primary-key",level:3},{value:"Referenced by @JoinColumn",id:"referenced-by-joincolumn",level:3},{value:"Referenced by @JoinTable",id:"referenced-by-jointable",level:3}],s={toc:u};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Embedded properties ",(0,i.kt)("em",{parentName:"p"},"(Composite properites)")," merge multiple columns in the database into an integral whole, map them to a non-entity custom type, and then use this custom property to declare a property for the entity."),(0,i.kt)("h2",{id:"as-ordinary-field"},"As Ordinary Field"),(0,i.kt)("h3",{id:"basic-usage"},"Basic Usage"),(0,i.kt)("p",null,"First, define a composite type:"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="FullName.java"',title:'"FullName.java"'},"// highlight-next-line  \n@Embeddable\npublic interface FullName {\n\n    String firstName();\n\n    String lastName();\n}\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="FullName.kt"',title:'"FullName.kt"'},"// highlight-next-line\n@Embeddable \ninterface FullName {\n\n    val firstName: String\n    \n    val lastName: String\n}\n")))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Types defined by @Embeddable are not entity types. They must not declare id properties or association properties, otherwise compilation errors will occur.")),(0,i.kt)("p",null,"Then we can use it in another entity:"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Author.java"',title:'"Author.java"'},"@Entity\npublic interface Author {\n\n    @Id  \n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // highlight-next-line\n    FullName name();\n}\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Author.kt"',title:'"Author.kt"'},"@Entity\ninterface Author {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // highlight-next-line\n    val name: FullName\n}\n")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Unlike JPA/Hibernate, when using composite types in entities, ",(0,i.kt)("inlineCode",{parentName:"p"},"@Embedded")," is not required. In fact, Jimmer does not provide the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Embedded")," annotation at all. ")),(0,i.kt)("p",null,"The table structure corresponding to ",(0,i.kt)("inlineCode",{parentName:"p"},"Author")," is: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table author(\n    id bigint unsigned not null auto_increment primary key,\n    /* highlight-next-line */\n    first_name varchar(20) not null,\n    /* highlight-next-line */  \n    last_name varchar(20) not null\n) engine=innodb;\n")),(0,i.kt)("h3",{id:"override-column-names"},"Override Column Names"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.PropOverride")," can be used to override column names of composite type properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Define composite type ",(0,i.kt)("inlineCode",{parentName:"p"},"Point"),":"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Point.java"',title:'"Point.java"'},"@Embeddable\npublic interface Point {\n\n    int x();\n\n    int y();\n}\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Point.kt"',title:'"Point.kt"'},"@Embeddable\ninterface Point {\n\n    val x: Int\n    \n    val y: Int\n}\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Define composite type ",(0,i.kt)("inlineCode",{parentName:"p"},"Rect")," and override column names of ",(0,i.kt)("inlineCode",{parentName:"p"},"Point")," type:"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Rect.java"',title:'"Rect.java"'},'@Embeddable\npublic interface Rect {\n\n    // highlight-next-line\n    @PropOverride(prop = "x", columnName = "`LEFT`") \n    // highlight-next-line\n    @PropOverride(prop = "y", columnName = "`TOP`")\n    Point leftTop();\n\n    // highlight-next-line\n    @PropOverride(prop = "x", columnName = "`RIGHT`")\n    // highlight-next-line\n    @PropOverride(prop = "y", columnName = "BOTTOM")\n    Point rightBottom();\n}\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Rect.kt"',title:'"Rect.kt"'},'@Embeddable\ninterface Rect {\n\n    // highlight-next-line\n    @PropOverride(prop = "x", columnName = "`LEFT`")\n    // highlight-next-line  \n    @PropOverride(prop = "y", columnName = "`TOP`")\n    val leftTop: Point\n\n    // highlight-next-line\n    @PropOverride(prop = "x", columnName = "`RIGHT`") \n    // highlight-next-line\n    @PropOverride(prop = "y", columnName = "BOTTOM")\n    val rightBottom: Point\n}\n'))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Define entity type ",(0,i.kt)("inlineCode",{parentName:"p"},"Transition")," and override column names of ",(0,i.kt)("inlineCode",{parentName:"p"},"Rect")," type:"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Transition.java"',title:'"Transition.java"'},'@Entity\npublic interface Transition {\n\n    @Id\n    long id();\n\n    int millis();\n\n    Rect source();\n\n    // highlight-start\n    @PropOverride(prop = "leftTop.x", columnName = "TARGET_LEFT")\n    @PropOverride(prop = "leftTop.y", columnName = "TARGET_TOP")\n    @PropOverride(prop = "rightBottom.x", columnName = "TARGET_RIGHT")\n    @PropOverride(prop = "rightBottom.y", columnName = "TARGET_BOTTOM")\n    // highlight-end\n    Rect target();\n}\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Transition.kt"',title:'"Transition.kt"'},'@Entity\ninterface Transition {\n\n    @Id\n    val id: Long\n\n    val millis: Int\n\n    val source: Rect\n\n    // highlight-start\n    @PropOverride(prop = "leftTop.x", columnName = "TARGET_LEFT")\n    @PropOverride(prop = "leftTop.y", columnName = "TARGET_TOP")\n    @PropOverride(prop = "rightBottom.x", columnName = "TARGET_RIGHT")\n    @PropOverride(prop = "rightBottom.y", columnName = "TARGET_BOTTOM")\n    // highlight-end\n    val target: Rect\n}\n')))))),(0,i.kt)("p",null,"The table structure corresponding to ",(0,i.kt)("inlineCode",{parentName:"p"},"Transition")," is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table transition(\n    id bigint unsigned not null auto_increment primary key,\n    millis int not null,\n    `LEFT` int not null,\n    `TOP` int not null, \n    `RIGHT` int not null,\n    bottom int not null,\n    target_left int not null,\n    target_top int not null,\n    target_right int not null,\n    target_bottom int not null\n) engine=innodb;\n")),(0,i.kt)("h2",{id:"as-primaryforeign-keys"},"As Primary/Foreign Keys"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Using composite types as primary/foreign keys, that is, primary keys and foreign keys are composed of multiple columns, makes the system more complex without much benefit."),(0,i.kt)("p",{parentName:"admonition"},"Therefore, unless compatibility with legacy database design is required, the system should avoid such usage to keep primary/foreign keys simple.")),(0,i.kt)("p",null,"Let's first define a composite type:"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="UniqueId.java"',title:'"UniqueId.java"'},'// highlight-next-line\n@Embeddable\npublic interface UniqueId {\n\n    @columnName("UNIQUE_ID_DAY_NO")\n    int dayNo();\n\n    @columnName("UNIQUE_ID_SEQ_NO")  \n    int sequenceNo();\n}\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="UniqueId.kt"',title:'"UniqueId.kt"'},'// highlight-next-line\n@Embeddable\ninterface UniqueId {\n\n    @columnName("UNIQUE_ID_DAY_NO")\n    val dayNo: Int\n    \n    @columnName("UNIQUE_ID_SEQ_NO")\n    val sequenceNo: Int  \n}\n')))),(0,i.kt)("h3",{id:"as-primary-key"},"As Primary Key"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity \npublic interface Book {\n\n    @Id\n    UniqueId id();\n\n    ...Omit other code...\n}\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\ninterface Book {\n\n    @Id\n    val id: UniqueId\n\n    ...Omit other code... \n}\n")))),(0,i.kt)("p",null,"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.id")," does not override column names of ",(0,i.kt)("inlineCode",{parentName:"p"},"UniqueId")," type using ",(0,i.kt)("inlineCode",{parentName:"p"},"@PropOverride"),", the column names configured in ",(0,i.kt)("inlineCode",{parentName:"p"},"UniqueId")," are used. The corresponding DDL is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table book(\n    unique_id_day_no int not null,\n    unique_id_seq_no int not null,\n    ...Omit other columns...   \n) engine=innodb;\n\nalter table book\n    add constraint pk_book\n        primary key(unique_id_day_no, unique_id_seq_no); \n")),(0,i.kt)("h3",{id:"referenced-by-joincolumn"},"Referenced by @JoinColumn"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Chapter.java"',title:'"Chapter.java"'},'@Entity\npublic interface Chapter {\n\n    @ManyToOne\n    @JoinColumn(\n        name = "BOOK_ID_DAY_NO",\n        referencedColumnName = "UNIQUE_ID_DAY_NO" \n    )\n    @JoinColumn(\n        name = "BOOK_ID_SEQ_NO",\n        referencedColumnName = "UNIQUE_ID_SEQ_NO"\n    )\n    Book book();\n\n    ...Omit other code...\n}\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Chapter.kt"',title:'"Chapter.kt"'},'@Entity\ninterface Chapter {\n\n    @ManyToOne\n    @JoinColumn(\n        name = "BOOK_ID_DAY_NO",\n        referencedColumnName = "UNIQUE_ID_DAY_NO"\n    )\n    @JoinColumn(\n        name = "BOOK_ID_SEQ_NO",\n        referencedColumnName = "UNIQUE_ID_SEQ_NO" \n    )\n    val book: Book\n\n    ...Omit other code...\n}\n')))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Different from all the examples we have covered before, here the ",(0,i.kt)("inlineCode",{parentName:"p"},"referencedColumnName")," of the @JoinColumn annotation is specified.  "),(0,i.kt)("p",{parentName:"admonition"},"When the foreign key consists of multiple columns, multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"@JoinColumn")," annotations must be used, where each ",(0,i.kt)("inlineCode",{parentName:"p"},"@JoinColumn")," must specify ",(0,i.kt)("inlineCode",{parentName:"p"},"referencedColumnName"),".")),(0,i.kt)("p",null,"If the foreign key is real, the corresponding constraint is:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"alter table chapter\n    add constraint fk_chapter__book\n        foreign key(\n            book_id_day_no,\n            book_id_seq_id\n        ) references book(\n            unique_id_day_no,\n            unique_id_seq_no\n        );\n")),(0,i.kt)("h3",{id:"referenced-by-jointable"},"Referenced by @JoinTable"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    @Id\n    UniqueId id();\n\n    @ManyToMany\n    @JoinTable(\n        joinColumns = {\n            @JoinColumn(\n                name = "BOOK_ID_DAY_NO",\n                referencedColumnName = "UNIQUE_ID_DAY_NO"\n            ),\n            @JoinColumn(\n                name = "BOOK_ID_SEQ_NO",\n                referencedColumnName = "UNIQUE_ID_SEQ_NO"\n            )\n        }\n    )\n    // highlight-next-line\n    List<Author> authors();\n\n    ...Omit other code...\n}\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity  \ninterface Book {\n\n    @Id\n    val id: UniqueId\n\n    @ManyToMany\n    @JoinTable(\n        joinColumns = [\n            JoinColumn(\n                name = "BOOK_ID_DAY_NO",\n                referencedColumnName = "UNIQUE_ID_DAY_NO"\n            ),\n            JoinColumn(\n                name = "BOOK_ID_SEQ_NO", \n                referencedColumnName = "UNIQUE_ID_SEQ_NO"\n            )\n        ]\n    )\n    // highlight-next-line\n    val authors: List<Author>\n\n    ...Omit other code...\n}\n')))),(0,i.kt)("p",null,"If the foreign key is real, the DDL of the join table is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table book_author_mapping(\n    book_id_day_no int not null,\n    book_id_seq_id int not null,\n    author_id bigint not null\n) engine=innodb;\n\nalter table book_author_mapping\n    add constraint pk_book_author_mapping\n        primary key(\n            book_id_day_no,\n            book_id_seq_id,\n            author_id\n        );\n        \nalter table book_author_mapping\n    add constraint fk_book_author_mapping__book\n        foreign key(\n            book_id_day_no,\n            book_id_seq_id\n        ) references book(\n            unique_id_day_no,\n            unique_id_seq_no\n        );\n        \nalter table book_author_mapping\n    add constraint fk_book_author_mapping__author\n        foreign key(author_id)\n            references author(id);\n")))}c.isMDXComponent=!0}}]);