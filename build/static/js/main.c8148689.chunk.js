(this.webpackJsonpreact_web=this.webpackJsonpreact_web||[]).push([[0],{26:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(19),c=n.n(a),r=(n(26),n(9)),i=n(10),s=n(11),u=n(13),l=n(12),d=n(1),h=(n(27),n(17),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CONTACTS_API_URL||"http://back.npsex.com"),p=localStorage.token;p||(p=localStorage.token=Math.random().toString(36).substr(-8));var j={method:"GET",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded"}},m=function(t){return fetch("".concat(h,"/douyu?roomNo=").concat(t),{CROSheadersGET:j}).then((function(t){return t.json()})).then((function(t){return t.contacts}))},b=navigator.userAgent.toLowerCase(),f=function(t){return t.test(b)},O=(document.compatMode,f(/opera/)),v=f(/chrome/),y=f(/webkit/),x=!v&&f(/safari/),S=(x&&f(/version3/),x&&f(/version4/),!O&&f(/msie/)),_=(S&&f(/msie 7/),S&&f(/msie 8/),!y&&f(/gecko/)&&f(/rv:1.9/),function(){return f(/macintosh|mac os x/)}),C=(f(/adobeair/),f(/linux/),n(3)),k="http://dyscdnali1.douyucdn.cn/live/122024r69JkBOUVs.flv",g=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={roomNo:"122024",streamUri:"http"},t.updateSearch=function(e){t.setState({roomNo:e.trim()})},t.clearSearch=function(){t.setState({roomNo:""})},t.queryPython=function(e){m(e).then((function(e){return t.state(e)}))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.roomNo,o=e.streamUri,a=_()?"iina://open?url=".concat(k):"potplayer://".concat(k),c=_()?"iina://open?url=".concat(k):"potplayer://".concat(k);return Object(C.jsx)("div",{className:"list-platforms",children:Object(C.jsxs)("div",{children:[Object(C.jsx)("input",{className:"search-room",type:"text",placeholder:"\u8f93\u5165\u623f\u95f4\u53f7",value:n,onChange:function(e){return t.updateSearch(e.target.value)}}),Object(C.jsx)("button",{onClick:function(){return t.queryPython(n)},children:"\u76f4\u64ad\u6e90\u751f\u6210"}),Object(C.jsxs)("a",{className:"add-contact",href:c,target:"_blank",children:["\u590d\u5236\u623f\u95f4\u76f4\u64ad\u6e90",o]}),Object(C.jsx)("a",{className:"add-contact",href:a,target:"_blank",children:"\u5927\u5e1d\u76f4\u64ad\u6d41"})]})})}}]),n}(o.Component),T=g,N=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={contacts:[]},t.removeContact=function(t){},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"createContact",value:function(t){}},{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(d.a,{path:"/",exact:!0,render:function(){return Object(C.jsx)(T,{})}}),Object(C.jsx)(d.a,{exact:!0,path:"/test"})]})}}]),n}(o.Component),w=N;c.a.render(Object(C.jsx)(r.a,{children:Object(C.jsx)(w,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.c8148689.chunk.js.map