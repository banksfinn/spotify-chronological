(this["webpackJsonpspotify-chronological"]=this["webpackJsonpspotify-chronological"]||[]).push([[0],{118:function(t,e,n){t.exports=n(246)},123:function(t,e,n){},124:function(t,e,n){},246:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),s=n(22),c=n.n(s),o=(n(123),n(124),n(14)),i=n.n(o),u=n(26),l=n(27),p=n(28),h=n(30),f=n(31),m=n(23),v=n(251);function k(t,e,n,r){return d.apply(this,arguments)}function d(){return(d=Object(m.a)(i.a.mark((function t(e,n,r,a){var s,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s={method:e,headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}},c="",t.next=4,fetch(r+a,s).then((function(t){return t.json()})).then((function(t){return c=t}));case 4:return console.log(c),t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t,e){return g.apply(this,arguments)}function g(){return(g=Object(m.a)(i.a.mark((function t(e,n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k("GET",n,"https://api.spotify.com/v1/albums/"+e+"/tracks","").items;case 2:r=t.sent,console.log(r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t,e,n,r){return w.apply(this,arguments)}function w(){return(w=Object(m.a)(i.a.mark((function t(e,n,r,a){var s,c,o,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s={method:e,headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}},c="",t.next=4,fetch(r+a,s).then((function(t){return t.json()})).then((function(t){return c=t.items}));case 4:for(o=[],console.log(c),u=0;u<c.length;u++)o.push({link:c[u.toString()].external_urls.spotify,date:c[u].release_date});return t.abrupt("return",o);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){var e="",n=!0,r=!1,a=void 0;try{for(var s,c=t[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){e+=s.value.link,e+="\n"}}catch(o){r=!0,a=o}finally{try{n||null==c.return||c.return()}finally{if(r)throw a}}return e}var j=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(p.a)(this,Object(h.a)(e).call(this,t))).access_token="",n.state={message:"Default content"},n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"get_tracks",value:function(){var t=Object(m.a)(i.a.mark((function t(e){var n,r,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==this.access_token){t.next=3;break}return t.next=3,this.get_access();case 3:return n=0,t.next=6,b("GET",this.access_token,"https://api.spotify.com/v1/artists/"+e+"/albums","?offset=0&limit=50&include_groups=album,single,appears_on,compilation&market=US");case 6:r=t.sent;case 7:if(r.length/(n+1)!==50){t.next=15;break}return t.next=10,b("GET",this.access_token,"https://api.spotify.com/v1/artists/"+e+"/albums","?offset="+n+"&limit=50&include_groups=album,single,appears_on,compilation&market=US");case 10:a=t.sent,r=r.concat(a),n+=1,t.next=7;break;case 15:y(r[0]),this.setState({message:x(r)});case 17:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"get_access",value:function(){var t=Object(m.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"Basic MGIzMWY3ODI2YzFhNDAxZGFkNzE2MzE0NzQ3MWNhZjU6MGM2MTE4NzZmZDdlNDBjOWI1ZWM0MGQxMjY4YTQwZGQ=",(e={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic MGIzMWY3ODI2YzFhNDAxZGFkNzE2MzE0NzQ3MWNhZjU6MGM2MTE4NzZmZDdlNDBjOWI1ZWM0MGQxMjY4YTQwZGQ="}}).body="grant_type=client_credentials",n="",t.next=6,fetch("https://accounts.spotify.com/api/token",e).then((function(t){return t.json()})).then((function(t){n=t.access_token}));case 6:this.access_token=n;case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"get_song",value:function(){var t=Object(m.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==this.access_token){t.next=3;break}return t.next=3,this.get_access();case 3:return t.next=5,k("GET",this.access_token,"https://api.spotify.com/v1/search","?q=illenium&type=artist");case 5:e=t.sent,this.setState({message:e});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return a.a.createElement("div",null,a.a.createElement(v.a,{style:{margin:"2% 10% 2% 10%"},onClick:function(){t.get_tracks("45eNHdiiabvmbp4erw26rg")}}),a.a.createElement("div",null,this.state.message," "))}}]),e}(a.a.Component);var _=function(){return a.a.createElement("div",null,a.a.createElement(j,null,"temp"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[118,1,2]]]);
//# sourceMappingURL=main.02110113.chunk.js.map