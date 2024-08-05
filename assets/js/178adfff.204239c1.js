"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4620],{78337:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var t=i(74848),a=i(28453),s=i(11470),o=i(19365);const r={sidebar_position:3,title:"Define Entities"},l=void 0,c={id:"quick-view/get-started/define-entity",title:"Define Entities",description:"Unlike ORMs like JPA/Hibernate, entities in Jimmer are defined as interfaces instead of classes. The reasons are discussed in Why Interfaces.",source:"@site/docs/quick-view/get-started/define-entity.mdx",sourceDirName:"quick-view/get-started",slug:"/quick-view/get-started/define-entity",permalink:"/jimmer-doc/docs/quick-view/get-started/define-entity",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/quick-view/get-started/define-entity.mdx",tags:[],version:"current",lastUpdatedAt:1722888025e3,sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Define Entities"},sidebar:"tutorialSidebar",previous:{title:"Create Database",permalink:"/jimmer-doc/docs/quick-view/get-started/create-database"},next:{title:"Generate Code",permalink:"/jimmer-doc/docs/quick-view/get-started/generate-code"}},d={},h=[{value:"Define Non-Associated Fields",id:"define-non-associated-fields",level:2},{value:"One-to-Many Association <code>Book.store</code>",id:"one-to-many-association-bookstore",level:2},{value:"One-to-Many Association <code>BookStore.books</code>",id:"one-to-many-association-bookstorebooks",level:2},{value:"Many-to-Many Association <code>Book.authors</code>",id:"many-to-many-association-bookauthors",level:2},{value:"Many-to-Many Association <code>Author.books</code>",id:"many-to-many-association-authorbooks",level:2},{value:"Complete TreeNode Definition",id:"complete-treenode-definition",level:2},{value:"Why Interfaces",id:"why-interfaces",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Unlike ORMs like JPA/Hibernate, entities in Jimmer are defined as interfaces instead of classes. The reasons are discussed in ",(0,t.jsx)(n.a,{href:"#why-interfaces",children:"Why Interfaces"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Before defining entities, two concepts need to be introduced:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Jimmer entities are not simple Java beans, but dynamic objects."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"That is, an unset property is completely different from a property set to null."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Jimmer entities are immutable, so interfaces only have getters, no setters."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"define-non-associated-fields",children:"Define Non-Associated Fields"}),"\n",(0,t.jsxs)(n.p,{children:['Assume the entity package is "com.example.model". ',(0,t.jsx)(n.strong,{children:"Ignore associated properties first"}),", entity definitions are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"BookStore"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="BookStore.java"',children:"package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\nimport org.jetbrains.annotations.Nullable;\n\n@Entity\npublic interface BookStore {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n    \n    String name();\n\n    @Nullable\n    String website();\n}\n"})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookStore.kt"',children:"package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface BookStore {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n    \n    val name: String\n\n    val website: String?\n}\n"})})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Book"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"  ',children:"package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\nimport java.math.BigDecimal;\n\n@Entity\npublic interface Book {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n    \n    String name();\n\n    int edition();\n\n    BigDecimal price();\n}\n"})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"package com.example.model\n\nimport org.babyfish.jimmer.sql.*\nimport java.math.BigDecimal\n\n@Entity\ninterface Book {\n\n    @Id \n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n    \n    val name: String\n\n    val edition: Int\n\n    val price: BigDecimal\n}\n"})})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Author"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Author.java"',children:"package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\npublic interface Author {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n    \n    String firstName();\n\n    String lastName();\n\n    /*\n     * Gender is an enum defined later  \n     */\n    Gender gender();\n}\n"})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Author.kt"',children:"package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface Author {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n    \n    val firstName: String\n\n    val lastName: String\n\n    /*\n     * Gender is an enum defined later\n     */\n    val gender: Gender\n}\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Where ",(0,t.jsx)(n.code,{children:"Gender"})," is an enum with two options: ",(0,t.jsx)(n.code,{children:"MALE"})," and ",(0,t.jsx)(n.code,{children:"FEMALE"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"ORMs can map enums to strings (default) or numbers."}),"\n",(0,t.jsxs)(n.p,{children:["Although this example maps enum to string by default, the database has a check constraint limiting values to ",(0,t.jsx)(n.code,{children:"'M'"})," and ",(0,t.jsx)(n.code,{children:"'F'"}),", not default ",(0,t.jsx)(n.code,{children:"'MALE'"})," and ",(0,t.jsx)(n.code,{children:"'FEMALE'"}),". So the enum needs to be configured as:"]}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Author.java"',children:'package com.example.model;\n\nimport org.babyfish.jimmer.sql.EnumItem;\n\npublic enum Gender {\n\n    @EnumItem(name = "M")\n    MALE,\n\n    @EnumItem(name = "F")\n    FEMALE\n}\n'})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Author.kt" ',children:'package com.example.model\n\nimport org.babyfish.jimmer.sql.EnumItem\n\nenum class Gender {\n\n    @EnumItem(name = "M")\n    MALE,\n\n    @EnumItem(name = "F")\n    FEMALE\n}\n'})})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"TreeNode"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="TreeNode.java"',children:'package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\npublic interface TreeNode {\n\n    @Id\n    @Column(name = "NODE_ID") \n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n    \n    String name();\n}\n'})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="TreeNode.kt"',children:'package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface TreeNode {\n\n    @Id\n    @Column(name = "NODE_ID")\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n    \n    val name: String\n}\n'})})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For Java, each getter can use the traditional Java bean ",(0,t.jsx)(n.code,{children:"get/is"})," prefix like ",(0,t.jsx)(n.code,{children:"getName()"}),", or omit it like ",(0,t.jsx)(n.code,{children:"name()"})," in this example."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Breaking the Java bean convention of getter prefixes is enabled by Java 14 records, not Jimmer. The new style allows more concise immutable objects."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Jimmer entities are very sensitive to nullability:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For Kotlin, use language's own nullity."}),"\n",(0,t.jsxs)(n.li,{children:["For Java:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Primitives like boolean, char, byte, short, int, long, float, double are non-null."}),"\n",(0,t.jsx)(n.li,{children:"Boxed types like Boolean, Character, Byte, Short, Integer, Long, Float, Double are nullable."}),"\n",(0,t.jsxs)(n.li,{children:["Other types are non-null by default. Add ",(0,t.jsx)(n.code,{children:"@Nullable"})," to allow null."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Annotations used in example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@Entity"})," - Indicates entity type."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@Id"})," - Specifies ID property."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@GeneratedValue"})," - Specifies auto-generated ID, using database autoincrement here."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Java/Kotlin interface short name is converted to table name using ",(0,t.jsx)(n.code,{children:"word1Word2...WordN -> WORD1_WORD2_..._WORDN"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If mismatch, use ",(0,t.jsx)(n.code,{children:"@Table"})," on interface."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Similarly, property name is converted to column name."}),"\n",(0,t.jsxs)(n.p,{children:["If mismatch, use ",(0,t.jsx)(n.code,{children:"@Column"})," on property."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Note ",(0,t.jsx)(n.code,{children:"@Column"})," can be used on non-foreign key fields, not just foreign keys discussed later."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Entities have non-null ID like ",(0,t.jsx)(n.code,{children:"long"}),", not nullable ID like ",(0,t.jsx)(n.code,{children:"Long"}),", otherwise framework will report error."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"JPA/Hibernate users note this difference in handling ID nullability."})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"one-to-many-association-bookstore",children:["One-to-Many Association ",(0,t.jsx)(n.code,{children:"Book.store"})]}),"\n",(0,t.jsxs)(n.p,{children:["Modify ",(0,t.jsx)(n.code,{children:"Book.java"}),"/",(0,t.jsx)(n.code,{children:"Book.kt"})," to add ",(0,t.jsx)(n.code,{children:"store"})," association:"]}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"package com.example.model;\n\n...imports omitted...\n\n@Entity\npublic interface Book {\n\n    ...other properties omitted...  \n\n    // highlight-next-line\n    @ManyToOne\n    @Nullable\n    BookStore store();\n}\n"})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"package com.example.model\n\n...imports omitted...\n\n@Entity  \ninterface Book {\n\n    ...other properties omitted...\n\n    // highlight-next-line\n    @ManyToOne\n    val store: BookStore?\n}\n"})})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@ManyToOne"})," declares one-to-many association, mapping foreign key to associated entity."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Property name is converted to foreign key column like ",(0,t.jsx)(n.code,{children:"store -> STORE_ID"}),", matching database."]}),"\n",(0,t.jsxs)(n.p,{children:["If mismatch, use ",(0,t.jsx)(n.code,{children:"@JoinColumn"})," on property."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"one-to-many-association-bookstorebooks",children:["One-to-Many Association ",(0,t.jsx)(n.code,{children:"BookStore.books"})]}),"\n",(0,t.jsxs)(n.p,{children:["Modify ",(0,t.jsx)(n.code,{children:"BookStore.java"}),"/",(0,t.jsx)(n.code,{children:"BookStore.kt"})," to add ",(0,t.jsx)(n.code,{children:"books"})," association:"]}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="BookStore.java" ',children:'package com.example.model;\n\n...imports omitted...\n\n@Entity\npublic interface BookStore {\n\n    ...other properties omitted...\n\n    // highlight-next-line \n    @OneToMany(mappedBy = "store")\n    List<Book> books();\n}\n'})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookStore.kt"',children:'package com.example.model  \n\n...imports omitted...\n\n@Entity\ninterface BookStore {\n\n    ...other properties omitted...\n\n    // highlight-next-line\n    @OneToMany(mappedBy = "store") \n    val books: List<Book>\n}\n'})})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@OneToMany"})," declares one-to-many association."]}),"\n",(0,t.jsxs)(n.p,{children:["It does not map any database field, just mirrors ",(0,t.jsx)(n.code,{children:"@ManyToOne"})," to make association bidirectional."]}),"\n",(0,t.jsxs)(n.p,{children:["Here, ",(0,t.jsx)(n.code,{children:'mappedBy = "store"'})," means ",(0,t.jsx)(n.code,{children:"BookStore.books"})," is mirror of ",(0,t.jsx)(n.code,{children:"Book.store"}),"."]}),"\n",(0,t.jsxs)("div",{style:{display:"flex",alignItems:"start"},children:[(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@Entity\npublic interface BookStore {\n\n    @OneToMany(\n        // highlight-next-line\n        mappedBy = "store" \n    )\n    List<Book> books();\n\n    ...\n}\n'})})}),(0,t.jsx)("div",{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"mirror",src:i(34439).A+"",width:"130",height:"239"})})}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@Entity\npublic interface Book {\n\n    @ManyToOne\n    @Nullable\n    // highlight-next-line\n    BookStore store();\n\n    ...\n}\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["The side with ",(0,t.jsx)(n.code,{children:"mappedBy"})," is called the mirror side."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Mirroring is optional, bidirectional association is not required."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Unlike JPA/Hibernate, ",(0,t.jsx)(n.code,{children:"@OneToMany"})," in Jimmer can only mirror ",(0,t.jsx)(n.code,{children:"@ManyToOne"}),", always implying bidirection."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"many-to-many-association-bookauthors",children:["Many-to-Many Association ",(0,t.jsx)(n.code,{children:"Book.authors"})]}),"\n",(0,t.jsxs)(n.p,{children:["Modify ",(0,t.jsx)(n.code,{children:"Book.java"}),"/",(0,t.jsx)(n.code,{children:"Book.kt"})," to add ",(0,t.jsx)(n.code,{children:"authors"})," association:"]}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:'package com.example.model;\n\n...imports omitted...  \n\n@Entity\npublic interface Book {\n\n    ...other properties omitted...\n\n    // highlight-next-line\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    List<Author> authors();\n}\n'})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:'package com.example.model\n\n...imports omitted...\n\n@Entity\ninterface Book {\n\n    ...other properties omitted...\n\n    // highlight-next-line\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    val authors: List<Author>\n}\n'})})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@ManyToMany"})," declares many-to-many association."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"There are two sides of many-to-many: owner and mirror. This is the owner side."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For owner, ",(0,t.jsx)(n.code,{children:"@JoinTable"})," can specify join table:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"name: Join table name (default based on entities)"}),"\n",(0,t.jsx)(n.li,{children:"joinColumnName: FK to current entity (Book)"}),"\n",(0,t.jsx)(n.li,{children:"inverseJoinColumnName: FK to target entity (Author)"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Here ",(0,t.jsx)(n.code,{children:"@JoinTable"})," uses all default values, so it can be omitted."]})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"many-to-many-association-authorbooks",children:["Many-to-Many Association ",(0,t.jsx)(n.code,{children:"Author.books"})]}),"\n",(0,t.jsxs)(n.p,{children:["Modify ",(0,t.jsx)(n.code,{children:"Author.java"}),"/",(0,t.jsx)(n.code,{children:"Author.kt"})," to add ",(0,t.jsx)(n.code,{children:"books"})," association:"]}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Author.java" ',children:'package com.example.model;\n\n...imports omitted...\n\n@Entity\npublic interface Author {\n\n    ...other properties omitted...  \n\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    List<Book> books();\n}\n'})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Author.kt"',children:'package com.example.model\n\n...imports omitted...\n\n@Entity\ninterface Author {\n\n    ...other properties omitted...\n\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    val books: List<Book>\n} \n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Here, ",(0,t.jsx)(n.code,{children:"mappedBy"})," makes this the mirror side of the many-to-many mapping."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'@ManyToMany(mappedBy = "authors")'})," means ",(0,t.jsx)(n.code,{children:"Author.books"})," mirrors ",(0,t.jsx)(n.code,{children:"Book.authors"}),"."]}),"\n",(0,t.jsxs)("div",{style:{display:"flex",alignItems:"start"},children:[(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@Entity\npublic interface Author {\n\n    @ManyToMany(\n        // highlight-next-line\n        mappedBy = "authors"\n    )\n    List<Book> books();\n\n    ...\n}\n'})})}),(0,t.jsx)("div",{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"mirror",src:i(34439).A+"",width:"130",height:"239"})})}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(...\u7565...)\n    // highlight-next-line\n    List<Author> authors();\n\n    ...\n}\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Mirroring many-to-many is optional, bidirection association is optional. But if bidirectional, one side must be owner and the other one must be mirror."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Unlike JPA/Hibernate, owner vs mirror does not affect save behavior in Jimmer. You can choose freely."})}),"\n",(0,t.jsx)(n.h2,{id:"complete-treenode-definition",children:"Complete TreeNode Definition"}),"\n",(0,t.jsx)(n.p,{children:"Now we understand associations. Let's quickly complete TreeNode:"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="TreeNode.java" ',children:'package com.example.model;\n\n...imports omitted...\n\n@Entity\npublic interface TreeNode {\n\n    ...other properties omitted...\n\n    // highlight-next-line\n    @ManyToOne  \n    @Nullable\n    TreeNode parent();\n\n    // highlight-next-line\n    @OneToMany(mappedBy = "parent")\n    List<TreeNode> childNodes();\n}\n'})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="TreeNode.kt"',children:'package com.example.model\n\n...imports omitted... \n\n@Entity\ninterface TreeNode {\n\n    ...other properties omitted...\n\n    // highlight-next-line\n    @ManyToOne\n    val parent: TreeNode?\n\n    // highlight-next-line\n    @OneToMany(mappedBy = "parent") \n    val childNodes: List<TreeNode>\n}\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"why-interfaces",children:"Why Interfaces"}),"\n",(0,t.jsx)(n.p,{children:"We've seen entities declared as interfaces, not classes. Why?"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Dynamicity"}),"\n",(0,t.jsx)(n.p,{children:"Jimmer entities are not simple Java beans, but dynamic objects."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Unset vs null property are totally different"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Accessing non-existent property throws ",(0,t.jsx)(n.code,{children:"UnloadedException"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Serializing with Jackson omits unset properties"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"../../object/dynamic",children:"Dynamic"})," for details on dynamicity."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Benefits of dynamicity"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Easily express arbitrary complex data structures. Entities can be partial object, complete object, or aggregate root of complex tree."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Since data structure is flexible, ORM can query and save entire object graph in one go instead of individual entities."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"For querying, dynamic entity graphs can directly return from HTTP services without needing DTOs."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Compared to dynamic language ORMs"}),"\n",(0,t.jsx)(n.p,{children:"As discussed, Jimmer exploits dynamicity for flexibility unmatched by static language ORMs."}),"\n",(0,t.jsx)(n.p,{children:"But it rejects unsafety and unmaintainability of dynamic languages. Jimmer entities remain ordinary Java/Kotlin objects with all static typing, even null safety in Kotlin."}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["The only unsafety is ",(0,t.jsx)(n.code,{children:"UnloadedException"})," when accessing unloaded properties, similar to ",(0,t.jsx)(n.code,{children:"LazyInitializationException"})," in JPA/Hibernate."]}),(0,t.jsx)(n.p,{children:"This is a necessary cost universally accepted in ORM."})]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsx)(n.p,{children:"Jimmer finds the optimal balance between dynamic language flexibility and static language safety."})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Immutability"}),"\n",(0,t.jsx)(n.p,{children:"We've seen entities only have getters, meaning they are immutable."}),"\n",(0,t.jsxs)(n.p,{children:["Mutable object allows ",(0,t.jsx)(n.code,{children:"circular references"})," which the most headache problem of business system, Immutable data avoids this risk."]}),"\n",(0,t.jsx)(n.p,{children:"However, enjoying and leveraging the advantages of immutable objects while suppressing their disadvantages is not an easy thing,\nespecially for scenarios like ORM where the object hierarchy is very deep."}),"\n",(0,t.jsxs)(n.p,{children:["Luckily, in the JavaScript/TypeScript domain, there is a framework called ",(0,t.jsx)(n.a,{href:"https://github.com/immerjs/immer",children:"immer"}),"\nthat provides a perfect way to handle deep immutability. Jimmer ports ",(0,t.jsx)(n.a,{href:"https://github.com/immerjs/immer",children:"immer"}),'\nto Java/Kotlin and makes it the foundational programming model for the entire ORM.\nThe name "Jimmer" is also a tribute to ',(0,t.jsx)(n.a,{href:"https://github.com/immerjs/immer",children:"immer"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"../../object/immutable/solution",children:"Immutability/Solution"}),' for details on how to create and "modify" immutable objects.']}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In summary, because Jimmer entities themselves are dynamic and immutable, they are not simple Java objects.\nTheir types have complex internal implementations. Therefore, Jimmer chooses to have developers write interfaces,\nand generate implementations at compile-time using AnnotationProcessors (Java) or KSP (Kotlin)."})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},19365:(e,n,i)=>{i.d(n,{A:()=>o});i(96540);var t=i(18215);const a={tabItem:"tabItem_Ymn6"};var s=i(74848);function o(e){let{children:n,hidden:i,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,o),hidden:i,children:n})}},11470:(e,n,i)=>{i.d(n,{A:()=>I});var t=i(96540),a=i(18215),s=i(23104),o=i(56347),r=i(205),l=i(57485),c=i(31682),d=i(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:a}}=e;return{value:n,label:i,attributes:t,default:a}}))}(i);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function u(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:i}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function j(e){const{defaultValue:n,queryString:i=!1,groupId:a}=e,s=m(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,h]=p({queryString:i,groupId:a}),[j,x]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(i);return[a,(0,t.useCallback)((e=>{i&&s.set(e)}),[i,s])]}({groupId:a}),g=(()=>{const e=c??j;return u({value:e,tabValues:s})?e:null})();(0,r.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),x(e)}),[h,x,s]),tabValues:s}}var x=i(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=i(74848);function b(e){let{className:n,block:i,selectedValue:t,selectValue:o,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,i=l.indexOf(n),a=r[i].value;a!==t&&(c(n),o(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;n=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;n=l[i]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":i},n),children:r.map((e=>{let{value:n,label:i,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function v(e){let{lazy:n,children:i,selectedValue:a}=e;const s=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function f(e){const n=j(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,y.jsx)(b,{...n,...e}),(0,y.jsx)(v,{...n,...e})]})}function I(e){const n=(0,x.A)();return(0,y.jsx)(f,{...e,children:h(e.children)},String(n))}},34439:(e,n,i)=>{i.d(n,{A:()=>t});const t="data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDAxIiB3aWR0aD0iMTI5LjUiIGhlaWdodD0iMjM5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIj48ZGVmcyBpZD0iU3ZnanNEZWZzMTAwMiI+PC9kZWZzPjxnIGlkPSJTdmdqc0cxMDA4Ij48cGF0aCBpZD0iU3ZnanNQYXRoMTAwOSIgZD0iTTY1IDI1TDY1IDExOS41TDY1IDExOS41TDY1IDIxNCIgc3Ryb2tlPSIjMzIzMjMyIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiPjwvcGF0aD48L2c+PGcgaWQ9IlN2Z2pzRzEwMTAiIHRyYW5zZm9ybT0ibWF0cml4KDYuMTIzMjMzOTk1NzM2NzY2ZS0xNywxLC0xLDYuMTIzMjMzOTk1NzM2NzY2ZS0xNywxMDUsMjcpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAxMSIgZD0iTSAwIDBMIDE4NCAwTCAxNzQgMjBMIDEwIDIwTCAwIDBaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTIiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDEzIiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIxNDhweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSItMC42MjUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48L3RleHQ+PC9nPjwvZz48ZyBpZD0iU3ZnanNHMTAxNCIgdHJhbnNmb3JtPSJtYXRyaXgoLTEuODM2OTcwMTk4NzIxMDI5N2UtMTYsLTEsMSwtMS44MzY5NzAxOTg3MjEwMjk3ZS0xNiwyNS41MDAwMDAwMDAwMDAwMTgsMjEzLjUpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAxNSIgZD0iTSAwIDBMIDE4NyAwTCAxNzcgMjBMIDEwIDIwTCAwIDBaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTYiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDE3IiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIxNTBweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSItMC42MjUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48L3RleHQ+PC9nPjwvZz48L3N2Zz4="},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var t=i(96540);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);