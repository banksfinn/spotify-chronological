(this["webpackJsonpspotify-chronological"]=this["webpackJsonpspotify-chronological"]||[]).push([[0],{118:function(e,n,t){e.exports=t(246)},123:function(e,n,t){},124:function(e,n,t){},246:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),c=t(21),r=t.n(c),i=(t(123),t(124),t(68)),s=t.n(i),u=t(99),l=t(24),h=t(25),p=t(26),f=t(28),m=t(29),d=t(251),w=function(e){function n(){return Object(l.a)(this,n),Object(p.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(h.a)(n,[{key:"get_access",value:function(){var e=Object(u.a)(s.a.mark((function e(){var n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic MGIzMWY3ODI2YzFhNDAxZGFkNzE2MzE0NzQ3MWNhZjU6MGM2MTE4NzZmZDdlNDBjOWI1ZWM0MGQxMjY4YTQwZGQ="}}).body="grant_type=client_credentials",t="",e.next=5,fetch("https://accounts.spotify.com/api/token",n).then((function(e){return e.json()})).then((function(e){t=e.access_token}));case 5:console.log(t+" is the access token");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return a.a.createElement(d.a,{style:{margin:"2% 10% 2% 10%"},onClick:function(){e.get_access()}},a.a.createElement(d.a.Content,null,"Send Request"))}}]),n}(a.a.Component);var v=function(){return a.a.createElement("div",null,a.a.createElement(w,null,"temp"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[118,1,2]]]);
//# sourceMappingURL=main.24c71dbe.chunk.js.map