(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{29:function(e,t,n){e.exports=n(45)},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(23),r=n.n(o),l=(n(34),n(35),n(2)),i=n(3),s=n(5),u=n(4),m=n(6),h=n(11),p=n(9),d=(n(36),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.to,n=e.children,a=e.exact;return c.a.createElement(h.a,{path:t,exact:a,children:function(e){var a=e.match;return c.a.createElement("li",{className:a?"active":""},c.a.createElement(p.b,{to:t},n))}})}}]),t}(a.Component)),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",{className:"nav__list"},c.a.createElement("h2",null,"Blog"),c.a.createElement(d,{exact:!0,to:"/"},"Home"),c.a.createElement(d,{to:"/about"},"About"),c.a.createElement(d,{to:"/post"},"Post"),c.a.createElement(d,{to:"/send"},"Send Post")))}}]),t}(a.Component),f=n(13),E=n(14);function v(){var e=Object(f.a)(["\n   background: #f3f3f3;\n   min-height: calc(100vh);\n\n"]);return v=function(){return e},e}var g=E.a.div(v()),j=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(g,null,c.a.createElement("h1",null,"Post_About"),c.a.createElement("h4",null,"\u6473\u5370\u9019\u500b\u6df1\u591c\u7bc0\u76ee\u5354\u52a9\u6574 "),c.a.createElement("h4",null,"\u7406\u8a71\u984c \u628a \u8166\u888b\u601d\u7dd2\u7bc0\u9304"),c.a.createElement("h4",null,"\u6253\u9032\u4f86\u5148\u7a7a\u5e7e\u62cd \u7b49\u5f85\u5ee3\u544a\u6642\u9593\u7d50\u675f"),c.a.createElement("h4",null,"\u554f\u984c\u5148\u751f\u5148\u8aaa\uff08\u55e8\uff09 \u7b49\u6211\u8aaa\u958b\u59cb\u5225\u6436\u62cd"),c.a.createElement("h4",null,"\u6293\u6e96\u6642\u6a5f\u628a\u4f60\u63a5\u4f4f"),c.a.createElement("h4",null,"\u56db\u6563\u7684\u7159\u9727 \u6500\u9644 \u63d0\u554f\u662f\u5929\u8ce6"),c.a.createElement("h4",null,"\u8981\u600e\u9ebd \u8981 \u8981\u600e\u9ebc\u4fdd\u6301\u4e0d\u589c\u843d")))}}]),t}(a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Home"},c.a.createElement("h1",{style:{fontSize:"40px",paddingTop:"50px",background:"#ead1d6",minHeight:"calc(100vh)"}},"\u6b61 \u8fce\u4f60\u4f86"))}}]),t}(a.Component),y=(n(43),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={post:[],img:[]},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.postId;fetch("https://qootest.com/posts/"+t).then((function(e){return e.json()})).then((function(t){return e.setState({post:t})}));var n=this.props.location.hash.slice(1);fetch("https://api.unsplash.com/photos/?client_id=gLUTihYJ7yJzkHV1rKaXhhA65yA1ELgWvkAgkB3SQqY&per_page=30&order_by=oldest").then((function(e){return e.json()})).then((function(t){e.setState({img:t[n].urls.regular})}))}},{key:"render",value:function(){var e=this.state,t=e.post,n=e.img;return c.a.createElement("div",{className:"Post__Content"},c.a.createElement("h1",null,"Post"),n?c.a.createElement("img",{src:n,alt:""}):c.a.createElement("img",{src:"https://reurl.cc/drDEp6",alt:""}),c.a.createElement("div",{className:"Post__Title"},c.a.createElement("h1",null,t.title&&n?t.title:"loading...")),c.a.createElement("div",{className:"Post__body"},c.a.createElement("p",null,t.body)),c.a.createElement(p.b,{className:"Post__button",to:"/post"},"Back"))}}]),t}(a.Component)),_=(n(44),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={posts:[],img:[]},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.unsplash.com/photos/?client_id=gLUTihYJ7yJzkHV1rKaXhhA65yA1ELgWvkAgkB3SQqY&per_page=30&order_by=oldest").then((function(e){return e.json()})).then((function(t){e.setState({imgs:t});fetch("https://qootest.com/posts/?_sort=id&_order=desc&_limit=30").then((function(e){return e.json()})).then((function(t){e.setState({posts:t})}))}))}},{key:"render",value:function(){var e=this.state,t=e.posts,n=e.imgs,a=this.props.history;return c.a.createElement("div",{className:"Post__Content"},t.map((function(e,t){return c.a.createElement("div",{className:"Post__item",key:t,onClick:function(){a.push("/post/".concat(e.id,"#").concat(t))}},c.a.createElement("div",null,n[t]?c.a.createElement("img",{src:n[t].urls.small,alt:""}):c.a.createElement("img",{src:"https://reurl.cc/drDEp6",alt:""})),c.a.createElement("div",{className:"Post__title"},e.title?c.a.createElement("div",{className:"Post__title"},e.title):c.a.createElement("div",{className:"Post__title"},"\u7121\u6a19\u984c")))})))}}]),t}(a.Component)),k=Object(h.f)(_),C=n(28);function x(){var e=Object(f.a)(["\ntext-decoration:none;\n"]);return x=function(){return e},e}function N(){var e=Object(f.a)(["\nmargin:auto ;\nmargin-bottom: 50px;\npadding:25px;\nborder:solid;\nwidth:500px;\nheight:250px;\n"]);return N=function(){return e},e}function P(){var e=Object(f.a)(["\n  padding: 0.5em;\n  margin: 0.5em;\n  color: ",";\n  background: papayawhip;\n  border: none;\n  border-radius: 3px;\n"]);return P=function(){return e},e}var S=E.a.input(P(),(function(e){return e.inputColor||"palevioletred"})),w=E.a.div(N()),A=E.a.button(x()),T=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleTitleChange=function(e){n.setState(Object(C.a)({},e.target.name,e.target.value))},n.handleSubmit=function(){var e=n.state,t=e.title,a=e.body;fetch("https://qootest.com/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t,body:a,author:"user01"})}).then((function(e){return e.json()})).then((function(){console.log("success")})).catch((function(){alert("fail")}))},n.state={title:"",body:""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.body;return c.a.createElement("div",null,c.a.createElement(w,null,c.a.createElement("h3",null,"Blog Posts"),c.a.createElement("div",null,"title:",c.a.createElement(S,{placeholder:"title",type:"text",name:"title",value:t,onChange:this.handleTitleChange})),c.a.createElement("div",{className:"Post__input"},"body:",c.a.createElement(S,{placeholder:"body",type:"text",name:"body",value:n,onChange:this.handleTitleChange})),c.a.createElement(A,{onClick:this.handleSubmit},c.a.createElement(p.b,{to:"/post"},"submit "))))}}]),t}(a.Component);var B=function(e){return c.a.createElement(p.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(b,null),c.a.createElement("div",{className:"page"},c.a.createElement(h.c,null,c.a.createElement(h.a,{exact:!0,path:"/",component:O}),c.a.createElement(h.a,{path:"/about",component:j}),c.a.createElement(h.a,{exact:!0,path:"/post",component:k}),c.a.createElement(h.a,{exact:!0,path:"/post/:postId",component:y}),c.a.createElement(h.a,{path:"/send",component:T})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.c9d01540.chunk.js.map