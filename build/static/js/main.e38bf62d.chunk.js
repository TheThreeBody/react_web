(this.webpackJsonpreact_web=this.webpackJsonpreact_web||[]).push([[0],{26:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(19),o=n.n(r),a=(n(26),n(13)),i=n(8),u=n(9),s=n(11),l=n(10),d=n(2),h=(n(27),n(17),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CONTACTS_API_URL||"http://back.npsex.com"),b=localStorage.token;b||(b=localStorage.token=Math.random().toString(36).substr(-8));var j={method:"GET",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded"}},f=function(e){return fetch("".concat(h,"/douyu?roomNo=").concat(e),{CROSheadersGET:j}).then((function(e){return e.json()})).then((function(e){return e.stream}))},y=function(e){return fetch("".concat(h,"/bilibili?roomNo=").concat(e),{CROSheadersGET:j}).then((function(e){return e.json()})).then((function(e){return e.stream}))},p=function(e){return fetch("".concat(h,"/sukiya?link=").concat(e),{CROSheadersGET:j}).then((function(e){return e.json()})).then((function(e){return e}))},O=navigator.userAgent.toLowerCase(),m=function(e){return e.test(O)},v=(document.compatMode,m(/opera/)),S=m(/chrome/),x=m(/webkit/),k=!S&&m(/safari/),C=(k&&m(/version3/),k&&m(/version4/),!v&&m(/msie/)),N=(C&&m(/msie 7/),C&&m(/msie 8/),!x&&m(/gecko/)&&m(/rv:1.9/),function(){return m(/macintosh|mac os x/)}),E=(m(/adobeair/),m(/linux/),n(1)),g="http://dyscdnali1.douyucdn.cn/live/122024r69JkBOUVs.flv",w=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={OS:"windows",roomNo:"122024",douyuStream:"",bilibiliStream:""},e.updateSearch=function(t){e.setState({roomNo:t.trim()})},e.clearSearch=function(){e.setState({roomNo:""})},e.trim=function(e){return e},e.queryDouyuPy=function(t){f(t).then((function(t){e.setState({douyuStream:t.flv})}))},e.queryBilibiliPy=function(t){y(t).then((function(t){e.setState({bilibiliStream:t})}))},e.handleQuery=function(t){e.queryDouyuPy(t),e.queryBilibiliPy(t)},e.handleEnterKey=function(t){13===t.nativeEvent.keyCode&&e.handleQuery(e.state.roomNo)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=(t.OS,t.roomNo),c=t.douyuStream,r=t.bilibiliStream,o=(N()?"iina://open?url=".concat(g):"potplayer://".concat(g),N()?"iina://open?url=".concat(c):"potplayer://".concat(c)),a=N()?"iina://open?url=".concat(r):"potplayer://".concat(r);return Object(E.jsxs)("div",{className:"list-platforms",children:[Object(E.jsxs)("div",{onKeyDown:function(t){return e.handleEnterKey(t)},children:[Object(E.jsx)("input",{className:"search-room",type:"text",placeholder:"\u8f93\u5165\u623f\u95f4\u53f7",value:n,onChange:function(t){return e.updateSearch(t.target.value)}}),Object(E.jsx)("button",{onClick:function(){return e.queryDouyuPy(n)},children:"douyu\u76f4\u64ad\u6e90\u751f\u6210"}),Object(E.jsx)("br",{}),Object(E.jsx)("p",{children:"\u6597\u9c7cLink:"}),Object(E.jsxs)("a",{className:"add-contact",href:o,target:"_blank",children:["\u6253\u5f00\u623f\u95f4\u76f4\u64ad\u6e90",c]}),Object(E.jsx)("br",{}),"\u624b\u673a\u7248\u5f00\u53d1\u4e2d"]}),Object(E.jsx)("br",{}),Object(E.jsxs)("div",{onKeyDown:function(t){return e.handleEnterKey(t)},children:[Object(E.jsx)("input",{className:"search-room",type:"text",placeholder:"\u8f93\u5165\u623f\u95f4\u53f7",value:n,onChange:function(t){return e.updateSearch(t.target.value)}}),Object(E.jsx)("button",{onClick:function(){return e.queryBilibiliPy(n)},children:"B\u7ad9\u76f4\u64ad\u6e90\u751f\u6210"}),Object(E.jsx)("p",{children:"B\u7ad9Link:"}),Object(E.jsxs)("a",{className:"add-contact",href:a,target:"_blank",children:["\u6253\u5f00\u623f\u95f4\u76f4\u64ad\u6e90",a]})]})]})}}]),n}(c.Component),_=w,T=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={decodeStr:"http://cn-sukiya.csfeedback.net/sv/cn/RCN1209202100012099528818",encodeStr:"http%3A%2F%2Fcn-sukiya.csfeedback.net%2Fsv%2Fcn%2FRCN1209202100012099528818",discountNo:""},e.updateQuery=function(t){e.setState({decodeStr:t.trim()},(function(){return e.setState({encodeStr:encodeURIComponent(t)})}))},e.handleQuery=function(t){p(t).then((function(t){e.setState({discountNo:t.discountNo})}))},e.handleEnterKey=function(t){13===t.nativeEvent.keyCode&&e.handleQuery(e.state.encodeStr)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.decodeStr,c=t.encodeStr,r=t.discountNo;return Object(E.jsxs)("div",{className:"list-platforms",children:[Object(E.jsx)("input",{className:"query-link",type:"text",placeholder:"\u8f93\u5165\u98df\u5176\u5bb6\u7f51\u5740 \u4f8b:http://cn-sukiya.csfeedback.net/sv/cn/RCN1109212000012010326913",value:n,onChange:function(t){return e.updateQuery(t.target.value)},onKeyDown:function(t){return e.handleEnterKey(t)}}),Object(E.jsx)("br",{}),Object(E.jsxs)("p",{children:["\u98df\u5176\u5bb6discountNo\uff1a",r,Object(E.jsx)("br",{}),"encodeStr:",Object(E.jsx)("br",{}),c,Object(E.jsx)("br",{}),"decodeStr:",Object(E.jsx)("br",{}),n]})]})}}]),n}(c.Component),R=T,P=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[]},e.removeContact=function(e){},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"createContact",value:function(e){}},{key:"render",value:function(){return Object(E.jsxs)("div",{children:[Object(E.jsx)(d.a,{path:"/",exact:!0,render:function(){return Object(E.jsx)(_,{})}}),Object(E.jsx)(d.a,{path:"/sukiya",exact:!0,render:function(){return Object(E.jsx)(R,{})}}),Object(E.jsx)(d.a,{exact:!0,path:"/test"})]})}}]),n}(c.Component),A=P;o.a.render(Object(E.jsx)(a.a,{children:Object(E.jsx)(A,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.e38bf62d.chunk.js.map