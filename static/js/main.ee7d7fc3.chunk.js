(this["webpackJsonpspotify-chronological"]=this["webpackJsonpspotify-chronological"]||[]).push([[0],{118:function(t,e,n){t.exports=n(246)},123:function(t,e,n){},124:function(t,e,n){},246:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),s=n(22),c=n.n(s),o=(n(123),n(124),n(14)),i=n.n(o),u=n(26),p=n(27),l=n(28),h=n(30),f=n(31),m=n(23),d=n(251);function v(t,e,n,a){return k.apply(this,arguments)}function k(){return(k=Object(m.a)(i.a.mark((function t(e,n,a,r){var s,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s={method:e,headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}},c="",t.next=4,fetch(a+r,s).then((function(t){return t.json()})).then((function(t){return c=t}));case 4:return console.log(c),t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t,e){return y.apply(this,arguments)}function y(){return(y=Object(m.a)(i.a.mark((function t(e,n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v("GET",n,"https://api.spotify.com/v1/albums/"+e+"/tracks","");case 2:a=t.sent,console.log(a);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t,e,n,a){return w.apply(this,arguments)}function w(){return(w=Object(m.a)(i.a.mark((function t(e,n,a,r){var s,c,o,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s={method:e,headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}},c="",t.next=4,fetch(a+r,s).then((function(t){return t.json()})).then((function(t){return c=t.items}));case 4:for(o=[],u=0;u<c.length;u++)o.push({id:c[u.toString()].id,date:c[u.toString()].release_date});return t.abrupt("return",o);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var x=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(l.a)(this,Object(h.a)(e).call(this,t))).access_token="",n.state={message:"Default content"},n}return Object(f.a)(e,t),Object(p.a)(e,[{key:"get_tracks",value:function(){var t=Object(m.a)(i.a.mark((function t(e){var n,a,r,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==this.access_token){t.next=3;break}return t.next=3,this.get_access();case 3:return n=0,t.next=6,b("GET",this.access_token,"https://api.spotify.com/v1/artists/"+e+"/albums","?offset=0&limit=50&include_groups=album,single,appears_on,compilation&market=US");case 6:a=t.sent;case 7:if(a.length/(n+1)!==50){t.next=15;break}return t.next=10,b("GET",this.access_token,"https://api.spotify.com/v1/artists/"+e+"/albums","?offset="+n+"&limit=50&include_groups=album,single,appears_on,compilation&market=US");case 10:r=t.sent,a=a.concat(r),n+=1,t.next=7;break;case 15:return console.log(a),t.next=18,g(a[0]);case 18:s=[],console.log(s);case 20:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"get_access",value:function(){var t=Object(m.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"Basic MGIzMWY3ODI2YzFhNDAxZGFkNzE2MzE0NzQ3MWNhZjU6MGM2MTE4NzZmZDdlNDBjOWI1ZWM0MGQxMjY4YTQwZGQ=",(e={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic MGIzMWY3ODI2YzFhNDAxZGFkNzE2MzE0NzQ3MWNhZjU6MGM2MTE4NzZmZDdlNDBjOWI1ZWM0MGQxMjY4YTQwZGQ="}}).body="grant_type=client_credentials",n="",t.next=6,fetch("https://accounts.spotify.com/api/token",e).then((function(t){return t.json()})).then((function(t){n=t.access_token}));case 6:this.access_token=n;case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"get_song",value:function(){var t=Object(m.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==this.access_token){t.next=3;break}return t.next=3,this.get_access();case 3:return t.next=5,v("GET",this.access_token,"https://api.spotify.com/v1/search","?q=illenium&type=artist");case 5:e=t.sent,this.setState({message:e});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement(d.a,{style:{margin:"2% 10% 2% 10%"},onClick:function(){t.get_tracks("45eNHdiiabvmbp4erw26rg")}}),r.a.createElement("div",null,this.state.message," "))}}]),e}(r.a.Component);var j=function(){return r.a.createElement("div",null,r.a.createElement(x,null,"temp"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[118,1,2]]]);
//# sourceMappingURL=main.ee7d7fc3.chunk.js.map