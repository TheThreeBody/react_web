(this.webpackJsonpreact_web=this.webpackJsonpreact_web||[]).push([[0],{36:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(6),o=n.n(c),a=(n(36),n(21)),i=n(9),u=n(10),s=n(13),l=n(12),d=n(3),j=(n(37),n(14),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CONTACTS_API_URL||"http://back.npsex.com"),b=localStorage.token;b||(b=localStorage.token=Math.random().toString(36).substr(-8));var h={method:"GET",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded"}},p=function(t){return fetch("".concat(j,"/douyu?roomNo=").concat(t),{CROSheadersGET:h}).then((function(t){return t.json()})).then((function(t){return t.stream}))},f=function(t){return fetch("".concat(j,"/bilibili?roomNo=").concat(t),{CROSheadersGET:h}).then((function(t){return t.json()})).then((function(t){return t.stream}))},O=function(t){return fetch("".concat(j,"/sukiya?link=").concat(t),{CROSheadersGET:h}).then((function(t){return t.json()})).then((function(t){return t}))},y=navigator.userAgent.toLowerCase(),m=function(t){return t.test(y)},v=(document.compatMode,m(/opera/)),x=m(/chrome/),S=m(/webkit/),k=!x&&m(/safari/),C=(k&&m(/version3/),k&&m(/version4/),!v&&m(/msie/)),N=(C&&m(/msie 7/),C&&m(/msie 8/),!S&&m(/gecko/)&&m(/rv:1.9/),function(){return m(/macintosh|mac os x/)}),g=(m(/adobeair/),m(/linux/),n(2)),w="http://dyscdnali1.douyucdn.cn/live/122024r69JkBOUVs.flv",E=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={OS:"windows",roomNo:"122024",douyuStream:"",bilibiliStream:""},t.updateSearch=function(e){t.setState({roomNo:e.trim()})},t.clearSearch=function(){t.setState({roomNo:""})},t.trim=function(t){return t},t.queryDouyuPy=function(e){p(e).then((function(e){t.setState({douyuStream:e.flv})}))},t.queryBilibiliPy=function(e){f(e).then((function(e){t.setState({bilibiliStream:e})}))},t.handleQuery=function(e){t.queryDouyuPy(e),t.queryBilibiliPy(e)},t.handleEnterKey=function(e){13===e.nativeEvent.keyCode&&t.handleQuery(t.state.roomNo)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=(e.OS,e.roomNo),r=e.douyuStream,c=e.bilibiliStream,o=(N()?"iina://open?url=".concat(w):"potplayer://".concat(w),N()?"iina://open?url=".concat(r):"potplayer://".concat(r)),a=N()?"iina://open?url=".concat(c):"potplayer://".concat(c);return Object(g.jsxs)("div",{className:"list-platforms",children:[Object(g.jsxs)("div",{onKeyDown:function(e){return t.handleEnterKey(e)},children:[Object(g.jsx)("input",{className:"search-room",type:"text",placeholder:"\u8f93\u5165\u623f\u95f4\u53f7",value:n,onChange:function(e){return t.updateSearch(e.target.value)}}),Object(g.jsx)("button",{onClick:function(){return t.queryDouyuPy(n)},children:"douyu\u76f4\u64ad\u6e90\u751f\u6210"}),Object(g.jsx)("br",{}),Object(g.jsx)("p",{children:"\u6597\u9c7cLink:"}),Object(g.jsxs)("a",{className:"add-contact",href:o,target:"_blank",children:["\u6253\u5f00\u623f\u95f4\u76f4\u64ad\u6e90",r]}),Object(g.jsx)("br",{}),"\u624b\u673a\u7248\u5f00\u53d1\u4e2d"]}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{onKeyDown:function(e){return t.handleEnterKey(e)},children:[Object(g.jsx)("input",{className:"search-room",type:"text",placeholder:"\u8f93\u5165\u623f\u95f4\u53f7",value:n,onChange:function(e){return t.updateSearch(e.target.value)}}),Object(g.jsx)("button",{onClick:function(){return t.queryBilibiliPy(n)},children:"B\u7ad9\u76f4\u64ad\u6e90\u751f\u6210"}),Object(g.jsx)("p",{children:"B\u7ad9Link:"}),Object(g.jsxs)("a",{className:"add-contact",href:a,target:"_blank",children:["\u6253\u5f00\u623f\u95f4\u76f4\u64ad\u6e90",a]})]}),Object(g.jsx)("br",{})]})}}]),n}(r.Component),_=E,T=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={decodeStr:"http://cn-sukiya.csfeedback.net/sv/cn/RCN1209202100012099528818",encodeStr:"http%3A%2F%2Fcn-sukiya.csfeedback.net%2Fsv%2Fcn%2FRCN1209202100012099528818",discountNo:""},t.updateQuery=function(e){t.setState({decodeStr:e.trim()},(function(){return t.setState({encodeStr:encodeURIComponent(e)})}))},t.handleQuery=function(e){O(e).then((function(e){t.setState({discountNo:e.discountNo})}))},t.handleEnterKey=function(e){13===e.nativeEvent.keyCode&&t.handleQuery(t.state.encodeStr)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.decodeStr,r=e.encodeStr,c=e.discountNo;return Object(g.jsxs)("div",{className:"list-platforms",children:[Object(g.jsx)("input",{className:"query-link",type:"text",placeholder:"\u8f93\u5165\u98df\u5176\u5bb6\u7f51\u5740 \u4f8b:http://cn-sukiya.csfeedback.net/sv/cn/RCN1109212000012010326913",value:n,onChange:function(e){return t.updateQuery(e.target.value)},onKeyDown:function(e){return t.handleEnterKey(e)}}),Object(g.jsx)("button",{onClick:function(){return t.handleQuery(r)},children:"sukiya\u751f\u6210"}),Object(g.jsx)("br",{}),Object(g.jsxs)("p",{children:["\u98df\u5176\u5bb6discountNo\uff1a",c,Object(g.jsx)("br",{}),"encodeStr:",Object(g.jsx)("br",{}),r,Object(g.jsx)("br",{}),"decodeStr:",Object(g.jsx)("br",{}),n]})]})}}]),n}(r.Component),A=T,P=(n(45),n(47)),R=n(50),D=n(48),K=n(49),B=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(P.a,{center:[51.505,-.09],zoom:13,scrollWheelZoom:!1,children:[Object(g.jsx)(R.a,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(g.jsx)(D.a,{position:[51.505,-.09],children:Object(g.jsxs)(K.a,{children:["A pretty CSS3 popup. ",Object(g.jsx)("br",{})," Easily customizable."]})})]})}}]),n}(r.PureComponent),q=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={},t.handleApiLoaded=function(t,e){},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(g.jsx)(B,{})})}}]),n}(r.Component),F=q,L=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[]},t.removeContact=function(t){},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"createContact",value:function(t){}},{key:"render",value:function(){return Object(g.jsxs)(d.c,{children:[Object(g.jsx)(d.a,{path:"/",exact:!0,render:function(){return Object(g.jsx)(_,{})}}),Object(g.jsx)(d.a,{path:"/map",exact:!0,render:function(){return Object(g.jsx)(F,{})}}),Object(g.jsx)(d.a,{path:"/sukiya",render:function(){return Object(g.jsx)(A,{})}}),Object(g.jsx)(d.a,{exact:!0,path:"/test"})]})}}]),n}(r.Component),Q=L;o.a.render(Object(g.jsx)(a.a,{children:Object(g.jsx)(Q,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.e8f234a6.chunk.js.map