(this.webpackJsonpreact_web=this.webpackJsonpreact_web||[]).push([[0],{26:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(19),o=n.n(r),a=(n(26),n(8)),i=n(10),u=n(11),s=n(13),h=n(12),l=n(1),j=(n(27),n(17),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CONTACTS_API_URL||"http://back.npsex.com"),b=localStorage.token;b||(b=localStorage.token=Math.random().toString(36).substr(-8));var d={Accept:"application/json",Authorization:b},p=function(t){return fetch("".concat(j,"/douyu?roomNo=").concat(t),{headers:d}).then((function(t){return t.json()})).then((function(t){return t.contacts}))},O=n(3),f=function(t){Object(s.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={roomNo:"122024",streamUri:"http"},t.updateSearch=function(e){t.setState({roomNo:e.trim()})},t.clearSearch=function(){t.setState({roomNo:""})},t.queryPython=function(e){p(e).then((function(e){return t.state(e)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.roomNo,c=e.streamUri;return Object(O.jsx)("div",{className:"list-platforms",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{className:"search-room",type:"text",placeholder:"\u8f93\u5165\u623f\u95f4\u53f7",value:n,onChange:function(e){return t.updateSearch(e.target.value)}}),Object(O.jsx)("button",{onClick:function(){return t.queryPython(n)},children:"\u76f4\u64ad\u6e90\u751f\u6210"}),Object(O.jsxs)(a.b,{to:n,className:"add-contact",children:["\u590d\u5236\u623f\u95f4\u76f4\u64ad\u6e90",c]})]})})}}]),n}(c.Component),v=f,m=function(t){Object(s.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[]},t.removeContact=function(t){},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"createContact",value:function(t){}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(l.a,{path:"/",exact:!0,render:function(){return Object(O.jsx)(v,{})}}),Object(O.jsx)(l.a,{exact:!0,path:"/test"})]})}}]),n}(c.Component),S=m;o.a.render(Object(O.jsx)(a.a,{children:Object(O.jsx)(S,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.3b3c11f5.chunk.js.map