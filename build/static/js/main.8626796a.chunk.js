(this.webpackJsonpreact_web=this.webpackJsonpreact_web||[]).push([[0],{26:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(19),a=n.n(r),c=(n(26),n(9)),i=n(10),s=n(11),u=n(13),l=n(12),h=n(1),d=(n(27),n(17),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CONTACTS_API_URL||"http://localhost:8000"),j=localStorage.token;j||(j=localStorage.token=Math.random().toString(36).substr(-8));var p={Accept:"application/json",Authorization:j},b=function(t){return fetch("".concat(d,"/douyu?roomNo=").concat(t),{headers:p}).then((function(t){return t.json()})).then((function(t){return t.contacts}))},f=navigator.userAgent.toLowerCase(),m=function(t){return t.test(f)},v=(document.compatMode,m(/opera/)),O=m(/chrome/),y=m(/webkit/),S=!O&&m(/safari/),x=(S&&m(/version3/),S&&m(/version4/),!v&&m(/msie/)),_=(x&&m(/msie 7/),x&&m(/msie 8/),!y&&m(/gecko/)&&m(/rv:1.9/),m(/adobeair/),m(/linux/),n(3)),C="http://dyscdnali1.douyucdn.cn/live/122024r69JkBOUVs.flv",k=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={roomNo:"122024",streamUri:"http"},t.updateSearch=function(e){t.setState({roomNo:e.trim()})},t.clearSearch=function(){t.setState({roomNo:""})},t.queryPython=function(e){b(e).then((function(e){return t.state(e)}))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.roomNo,o=e.streamUri,r=m(/macintosh|mac os x/)?"iina://open?url=".concat(C):"potplayer://open?url=".concat(C);return Object(_.jsx)("div",{className:"list-platforms",children:Object(_.jsxs)("div",{children:[Object(_.jsx)("input",{className:"search-room",type:"text",placeholder:"\u8f93\u5165\u623f\u95f4\u53f7",value:n,onChange:function(e){return t.updateSearch(e.target.value)}}),Object(_.jsx)("button",{onClick:function(){return t.queryPython(n)},children:"\u76f4\u64ad\u6e90\u751f\u6210"}),Object(_.jsxs)("a",{className:"add-contact",href:r,target:"_blank",children:["\u590d\u5236\u623f\u95f4\u76f4\u64ad\u6e90",o]})]})})}}]),n}(o.Component),g=k,A=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[]},t.removeContact=function(t){},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"createContact",value:function(t){}},{key:"render",value:function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)(h.a,{path:"/",exact:!0,render:function(){return Object(_.jsx)(g,{})}}),Object(_.jsx)(h.a,{exact:!0,path:"/test"})]})}}]),n}(o.Component),N=A;a.a.render(Object(_.jsx)(c.a,{children:Object(_.jsx)(N,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.8626796a.chunk.js.map