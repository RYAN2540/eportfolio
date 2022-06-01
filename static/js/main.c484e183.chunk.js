(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(9),c=n(3),i=n(1),s=n(0),r=Object(i.createContext)(),o=function(e){var t=e.children,n=Object(i.useState)("light"),a=Object(c.a)(n,2),o=a[0],l=a[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");l(e.matches?"dark":"light"),e.addEventListener("change",(function(e){l(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(r.Provider,{value:[{themeName:o,toggleTheme:function(){var e="dark"===o?"light":"dark";localStorage.setItem("themeName",e),l(e)}}],children:t})},l="https://ryan2540.github.io/eportfolio/",h="RR.",j="Ryan Rotich",d="Full Stack Web Developer",b="Im a Full Stack Web Developer quite passionate,adaptable,resilient and a team player.Ready to start my career in the Tech Industry.Having months of experience working on various projects and also learning to work with a team profession software developers to create web applications more about that in the Resume",u="https://drive.google.com/file/d/1O0fqIOkx0yAU53sCKbfS-tV_IM545fmq/view?usp=sharing",m={linkedin:"https://www.linkedin.com/in/ryan-rotich-16157b23a/",github:"https://github.com/RYAN2540"},p=[{name:"Insta Clone",description:"Insta Clone is a Django based carbon copy of the popular Instagram web app.",stack:["Html","CSS","Python","Django","Cloudinary"],sourceCode:"https://github.com/RYAN2540/Insta-Clone",livePreview:"https://instagram-ryan.herokuapp.com/"},{name:"Neighborhood Watch",description:"Neighborhood Watch is a neighborhood app tailored for a specific neighborhood.Users may take on either of the two user roles, i.e occupant or administrator.The roles of the administrator involve: adding occupants,adding amenities and general oversight of neighborhood activities.An occupant is able to make a post visible to the neighborhood and also add a business they think would interest other occupants.",stack:["Html","CSS","Python","Django","Cloudinary"],sourceCode:"https://github.com/RYAN2540/neighborhood-watch",livePreview:"https://neighborhood-ryan.herokuapp.com/"},{name:"GitHubSearch",description:"An Angular app that allows one to search for GitHub users and repositories",stack:["Angular CLI v9.1.4","Typescript","Bootstrap","HTML","CSS"],sourceCode:"https://github.com/RYAN2540/GitHubSearch",livePreview:"https://ryan2540.github.io/eportfolio/GitHubSearch/"},{name:"Akan name Generator",description:"A web application that takes a users birthday and calculates the day of the week they were born and then depending on their gender outputs their Akan Name. Akan names are derived from Ghanian culture. Frequently in Ghana, children are given their first name as a day name which corresponds to the day in the week they were born.",stack:["HTML","CSS","JavaScript"],sourceCode:"https://github.com/RYAN2540/Akan-Name-Generator",livePreview:"https://akan-name-generator.netlify.app/"},{name:"La Galleria",description:"La Galleria is a Django based personal gallery.",stack:["Python v3.9.0, Django 3.0.7, Javascript, Cloudinary, Bootstrap, HTML, CSS"],sourceCode:"https://github.com/RYAN2540/La-Galleria",livePreview:"https://lagalleria.herokuapp.com/"},{name:"GiphyForU",description:"Is an app that is used to view trending gifs and search the respective searched gifs and sttickers.",stack:["HTML","CSS","JavaScript","TypeScript"],sourceCode:"https://github.com/RYAN2540/GiphyForU",livePreview:"https://ryan2540.github.io/eportfolio/GiphyForU/"}],O=["HTML5","CSS3","JavaScript","TypeScript","Bootstrap","Angular","Python","Flask","PostgreSQL","Django","RestfulAPI"],f="mailto:ryankrotich@gmail.com",g=n(16),k=n.n(g),v=n(14),x=n.n(v),N=n(18),y=n.n(N),_=n(17),w=n.n(_),C=(n(28),function(){var e=Object(i.useContext)(r),t=Object(c.a)(e,1)[0],n=t.themeName,a=t.toggleTheme,o=Object(i.useState)(!1),l=Object(c.a)(o,2),h=l[0],j=l[1],d=function(){return j(!h)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:h?"flex":null},className:"nav__list",children:[p.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,O.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,f?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:a,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(x.a,{}):Object(s.jsx)(k.a,{})}),Object(s.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:h?Object(s.jsx)(w.a,{}):Object(s.jsx)(y.a,{})})]})}),S=(n(32),function(){var e=l,t=h;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(C,{})]})}),A=n(11),P=n.n(A),R=n(19),G=n.n(R),I=(n(33),function(){var e=j,t=d,n=b,a=u,c=m;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:n&&n}),Object(s.jsxs)("div",{className:"about__contact center",children:[a&&Object(s.jsx)("a",{href:a,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),c&&Object(s.jsxs)(s.Fragment,{children:[c.github&&Object(s.jsx)("a",{href:c.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(P.a,{})}),c.linkedin&&Object(s.jsx)("a",{href:c.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(G.a,{})})]})]})]})}),H=n(7),L=n.n(H),T=n(20),D=n.n(T),E=(n(35),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},L()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(P.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(D.a,{})})]})}),F=(n(36),function(){return p.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(s.jsx)(E,{project:e},L()())}))})]}):null}),Y=(n(37),function(){return O.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},L()())}))})]}):null}),M=n(21),J=n.n(M),U=(n(38),function(){var e=Object(i.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?a(!0):a(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(J.a,{fontSize:"large"})})}):null}),q=(n(39),function(){return f?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(f),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),B=(n(40),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://ryan2540.github.io/eportfolio/",className:"link footer__link",children:"| Ryan Rotich | Tel:254790421677 | Email:ryankrotich@gmail.com |"})})}),W=(n(41),function(){var e=Object(i.useContext)(r),t=Object(c.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(S,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(I,{}),Object(s.jsx)(F,{}),Object(s.jsx)(Y,{}),Object(s.jsx)(q,{})]}),Object(s.jsx)(U,{}),Object(s.jsx)(B,{})]})});n(42);Object(a.render)(Object(s.jsx)(o,{children:Object(s.jsx)(W,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.c484e183.chunk.js.map