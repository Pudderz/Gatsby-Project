(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return u}));var n=a("q1tI"),l=a.n(n),r=a("y0Bu"),o=a("Wbzz"),c=a("9eSz"),m=a.n(c),d=function(e){var t=e.data;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"featuredImage"},l.a.createElement(o.Link,{to:"/blogs/"+t.node.frontmatter.slug},l.a.createElement(m.a,{fluid:t.node.frontmatter.featuredImage.childImageSharp.fluid,alt:t.node.frontmatter.title,className:"image"}))),l.a.createElement("div",{className:"featuredText"},l.a.createElement("h2",null,t.node.frontmatter.title),l.a.createElement("time",null,"Posted At: ",t.node.frontmatter.postedAt),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.node.frontmatter.snippet}}),l.a.createElement(o.Link,{to:"/blogs/"+t.node.frontmatter.slug,className:"purple"},"Read More")))},s=(a("leSQ"),function(e){var t=function(t){e.onPostClick(t.currentTarget.getAttribute("data-key"))};return l.a.createElement("div",{className:"popularPosts"},l.a.createElement("h3",null,"Recent Posts"),l.a.createElement("hr",null),l.a.createElement("ul",{id:"popular"},e.data.allMdx.edges.map((function(e,a){return l.a.createElement("li",{key:""+a,onClick:t,onKeyDown:t,"data-key":""+a},l.a.createElement(m.a,{fluid:e.node.frontmatter.featuredImage.childImageSharp.fluid,alt:e.node.frontmatter.title,className:"image recentPostImage",style:{objectFit:"cover",width:"100%",height:"100%"},"data-key":""+a}),l.a.createElement("div",{className:"middle"},l.a.createElement("div",{className:"text"},l.a.createElement("p",null,e.node.frontmatter.postedAt))))}))),l.a.createElement("hr",null),l.a.createElement("div",{className:"center"},l.a.createElement(o.Link,{to:"/posts"},"All Posts")))}),i=a("F3zM");var u="3413379011";t.default=function(e){var t=e.data,a=Object(n.useState)({featuredIndex:0}),o=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null),l.a.createElement(r.a,null),l.a.createElement("main",null,l.a.createElement("div",{className:"featured"},l.a.createElement(d,{data:t.allMdx.edges[o.featuredIndex]})),l.a.createElement(s,{data:t,onPostClick:function(e){c({featuredIndex:e}),window.scrollTo({top:0,left:0,behavior:"smooth"})}})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-de0b369965aa451b6239.js.map