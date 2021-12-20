(this.webpackJsonpjarisnk=this.webpackJsonpjarisnk||[]).push([[0],{98:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(21),i=a.n(s),r=a(32),o=a(7),l=a(65),j=a(103),b=a(104),d=a(105),h=a(109),m=a(106),u=a(22),O=a(24),p=a(1),x=function(e){var t=Object(c.useState)(!0),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(p.jsx)("header",{className:"bg-dark fixed-top",children:Object(p.jsx)(j.a,{children:Object(p.jsx)(b.a,{children:Object(p.jsx)(d.a,{sm:"12",md:"12",lg:"12",children:Object(p.jsxs)(h.a,{className:"navbar navbar-dark navbar-expand-sm",children:[Object(p.jsx)(m.a,{children:Object(p.jsx)("a",{className:"navbar-brand",href:"/",children:Object(p.jsx)("img",{src:"logo.svg",width:"80",alt:"Logo"})})}),Object(p.jsx)("button",{className:"custom-toggler navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExample09","aria-controls":"navbarsExample09","aria-expanded":!n,"aria-label":"Toggle navigation",onClick:function(){return s(!n)},children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsx)("div",{className:"".concat(n?"collapse":""," navbar-collapse"),children:Object(p.jsxs)("ul",{className:"navbar-nav",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsxs)(r.b,{to:"/",activeClassName:"activeRoute",className:"nav-link text-bold",children:[Object(p.jsx)(u.a,{icon:O.a}),"  Discover"]})}),Object(p.jsx)("li",{children:Object(p.jsxs)(r.b,{to:"/my-movie",activeClassName:"activeRoute",className:"nav-link text-bold",children:[Object(p.jsx)(u.a,{icon:O.b})," My Movie"]})})]})})]})})})})})},v=a(11),f=a(12),g=a(14),y=a(13),N=a(48),k=a(40),w=a.n(k),_=a(107),C=a(41),L=a.n(C),M=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return Object(p.jsx)(d.a,{xs:6,md:3,children:Object(p.jsxs)("div",{className:"item-movie-inner",children:[Object(p.jsxs)(_.a,{children:[Object(p.jsx)(_.a.Toggle,{className:"card_add",children:Object(p.jsx)("span",{className:"share-toggle share-icon",children:Object(p.jsx)(L.a,{className:"fa fa-plus",name:"fa-plus"})})}),Object(p.jsxs)(_.a.Menu,{children:[Object(p.jsxs)(_.a.Item,{href:"#",children:["Add to ",Object(p.jsx)("b",{children:"List 1"})]}),Object(p.jsxs)(_.a.Item,{href:"#",children:["Add to ",Object(p.jsx)("b",{children:"List 2"})]})]})]}),Object(p.jsx)("div",{className:"poster",style:{backgroundImage:"url(https://www.themoviedb.org/t/p/w220_and_h330_face".concat(this.props.movie.poster_path,")")}}),Object(p.jsxs)("div",{className:"p-3 short-detail-movie",children:[Object(p.jsx)("p",{children:Object(p.jsxs)("b",{children:[this.props.movie.title," - ",w()(this.props.movie.release_date).format("YYYY")]})}),Object(p.jsx)("small",{children:this.props.movie.overview.substring(0,100)+"..."})]})]})})}}]),a}(c.Component),S=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(e){var c;return Object(v.a)(this,a),(c=t.call(this,e)).componentDidMount=function(){window.addEventListener("scroll",c.infiniteScroll),c.fetchData(c.state.page)},c.infiniteScroll=function(){if(window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight){var e=c.state.page;e++,c.setState({page:e}),c.fetchData(e)}},c.fetchData=function(e){fetch("https://api.themoviedb.org/3/discover/movie?page="+e+"&api_key=943cc4f77f40afc90157127eac5065c1").then((function(e){return e.json()})).then((function(e){c.setState({movies:[].concat(Object(N.a)(c.state.movies),Object(N.a)(e.results))})}))},c.state={movies:[],page:1},c}return Object(f.a)(a,[{key:"render",value:function(){return Object(p.jsx)(b.a,{children:this.state.movies.map((function(e,t){return Object(p.jsx)(M,{movie:e},t)}))})}}]),a}(c.Component),D=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return Object(p.jsx)(j.a,{children:Object(p.jsx)(b.a,{children:Object(p.jsx)(d.a,{xs:12,md:12,children:Object(p.jsx)(S,{})})})})}}]),a}(c.Component),Y=a(63),E=a(108),I=a(110),F=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)(Y.a,{className:"pl-5 btn btn-primary btn-icon btn-icon-placement-left btn-icon-with-text btn-active",type:"submit",children:[Object(p.jsx)(u.a,{icon:O.d})," Create New List"]}),Object(p.jsx)(E.a,{className:"my-4",defaultActiveKey:"0",children:Object(p.jsxs)(I.a,{children:[Object(p.jsxs)(E.a.Toggle,{as:I.a.Header,eventKey:"0",children:[Object(p.jsx)(u.a,{icon:O.c})," My List"]}),Object(p.jsx)(E.a.Collapse,{eventKey:"0",children:Object(p.jsx)(I.a.Body,{children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{className:"py-2 pe-5 position-relative ",children:Object(p.jsxs)("span",{className:"float-start w-100 text-dark",children:["My New List",Object(p.jsx)(u.a,{icon:O.e,className:"list-icon"})]})}),Object(p.jsx)("li",{className:"py-2 pe-5 position-relative ",children:Object(p.jsxs)("span",{href:"#",className:"float-start w-100 text-dark",children:["My New List",Object(p.jsx)(u.a,{icon:O.e,className:"list-icon"})]})})]})})})]})})]})}}]),a}(c.Component),T=a(64),A=a.n(T),B=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(v.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={movie:[],isLoading:!0,errors:null},e}return Object(f.a)(a,[{key:"getMovie",value:function(){var e=this;A.a.get("https://api.themoviedb.org/3/discover/movie?api_key=943cc4f77f40afc90157127eac5065c1").then((function(e){return e.data.results.map((function(e){return{id:"".concat(e.id),title:"".concat(e.title),adult:"".concat(e.adult),backdrop_path:"".concat(e.backdrop_path),original_title:"".concat(e.original_title),overview:"".concat(e.overview),poster_path:"".concat(e.poster_path),release_date:"".concat(e.release_date)}}))})).then((function(t){e.setState({movie:t,isLoading:!1})})).catch((function(t){return e.setState({error:t,isLoading:!1})}))}},{key:"componentDidMount",value:function(){this.getMovie()}},{key:"render",value:function(){var e=this.state.movie;return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsx)(b.a,{children:e.map((function(e,t){return Object(p.jsx)(d.a,{xs:6,md:4,children:Object(p.jsxs)("div",{className:"item-movie-inner",children:[Object(p.jsx)("div",{className:"card_add",children:Object(p.jsx)("span",{className:"share-toggle share-icon",children:Object(p.jsx)(L.a,{className:"fa fa-times",name:"fa-times"})})}),Object(p.jsx)("div",{className:"poster",style:{backgroundImage:"url(https://www.themoviedb.org/t/p/w220_and_h330_face".concat(e.poster_path,")")}}),Object(p.jsxs)("div",{className:"p-3 short-detail-movie",children:[Object(p.jsx)("p",{children:Object(p.jsxs)("b",{children:[e.title," - ",w()(e.release_date).format("YYYY")]})}),Object(p.jsx)("small",{children:e.overview.substring(0,100)+"..."})]})]})})}))})})}}]),a}(c.Component),H=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)(j.a,{children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(d.a,{xs:12,md:3,children:Object(p.jsx)(F,{})}),Object(p.jsx)(d.a,{xs:12,md:9,children:Object(p.jsx)(B,{})})]})})})}}]),a}(c.Component),K=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return Object(p.jsx)("footer",{className:"p-3 bg-light",children:Object(p.jsx)(j.a,{children:Object(p.jsx)(b.a,{children:Object(p.jsx)(d.a,{className:"text-center",children:Object(p.jsxs)("small",{children:["\xa9 ",(new Date).getFullYear()," Copyright: ",Object(p.jsx)("a",{href:"https://theteamtheteam.com/resume",children:" EDS"})]})})})})})}}]),a}(c.Component),P=function(){return Object(p.jsxs)(r.a,{children:[Object(p.jsx)(x,{}),Object(p.jsxs)("div",{className:"py-5",style:{backgroundImage:"url(".concat("","/assortment-cinema-elements-red-background-with-copy-space2.jpg)"),backgroundPosition:"center right",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed"},children:[Object(p.jsx)(o.a,{path:"/",exact:!0,component:D}),Object(p.jsx)(o.a,{path:"/my-movie",component:H})]}),Object(p.jsx)(K,{})]})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,111)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(P,{}),document.getElementById("root")),R()}},[[98,1,2]]]);
//# sourceMappingURL=main.ed6e3901.chunk.js.map