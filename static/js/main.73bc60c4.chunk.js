(this["webpackJsonpspotify-chronological"]=this["webpackJsonpspotify-chronological"]||[]).push([[0],{118:function(t,e,n){t.exports=n(246)},123:function(t,e,n){},124:function(t,e,n){},246:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),s=n(22),o=n.n(s),c=(n(123),n(124),n(14)),i=n.n(c),u=n(25),l=n(26),p=n(27),h=n(29),f=n(30),m=n(32),d=n(251);function v(t,e,n,a){return k.apply(this,arguments)}function k(){return(k=Object(m.a)(i.a.mark((function t(e,n,a,r){var s,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s={method:e,headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}},o="",t.next=4,fetch(a+r,s).then((function(t){return t.json()})).then((function(t){return o=t}));case 4:return console.log(o),t.abrupt("return",o);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t,e,n,a){return g.apply(this,arguments)}function g(){return(g=Object(m.a)(i.a.mark((function t(e,n,a,r){var s,o,c,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s={method:e,headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}},o="",t.next=4,fetch(a+r,s).then((function(t){return t.json()})).then((function(t){return o=t}));case 4:for(c in 0,u=[],console.log(o.items),o.items)u.push(c.external_urls.spotify);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var w=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(p.a)(this,Object(h.a)(e).call(this,t))).access_token="",n.state={message:"Default content"},n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"get_tracks",value:function(){var t=Object(m.a)(i.a.mark((function t(e){var n,a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=0,t.next=3,y("GET",this.access_token,"https://api.spotify.com/v1/artists/"+e+"/albums","?offset=0&limit=50&include_groups=album,single,appears_on,compilation&market=US");case 3:a=t.sent;case 4:if(a.length/(n+1)!==50){t.next=11;break}return t.next=7,y("GET",this.access_token,"https://api.spotify.com/v1/artists/"+e+"/albums","?offset="+n+"&limit=50&include_groups=album,single,appears_on,compilation&market=US");case 7:r=t.sent,a.push(r),t.next=4;break;case 11:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"get_access",value:function(){var t=Object(m.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"Basic MGIzMWY3ODI2YzFhNDAxZGFkNzE2MzE0NzQ3MWNhZjU6MGM2MTE4NzZmZDdlNDBjOWI1ZWM0MGQxMjY4YTQwZGQ=",(e={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic MGIzMWY3ODI2YzFhNDAxZGFkNzE2MzE0NzQ3MWNhZjU6MGM2MTE4NzZmZDdlNDBjOWI1ZWM0MGQxMjY4YTQwZGQ="}}).body="grant_type=client_credentials",n="",t.next=6,fetch("https://accounts.spotify.com/api/token",e).then((function(t){return t.json()})).then((function(t){n=t.access_token}));case 6:this.access_token=n;case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"get_song",value:function(){var t=Object(m.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v("GET",this.access_token,"https://api.spotify.com/v1/search","?q=illenium&type=artist");case 2:e=t.sent,this.setState({message:e});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement(d.a,{style:{margin:"2% 10% 2% 10%"},onClick:function(){t.get_access()}},r.a.createElement(d.a.Content,null,"Send Request")),r.a.createElement(d.a,{style:{margin:"2% 10% 2% 10%"},onClick:function(){t.get_tracks("45eNHdiiabvmbp4erw26rg")}},r.a.createElement(d.a.Content,null,"Send Request")),r.a.createElement("div",null,this.state.message," "))}}]),e}(r.a.Component);var b=function(){return r.a.createElement("div",null,r.a.createElement(w,null,"temp"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[118,1,2]]]);
//# sourceMappingURL=main.73bc60c4.chunk.js.map