(this["webpackJsonpspotify-chronological"]=this["webpackJsonpspotify-chronological"]||[]).push([[0],{118:function(e,t,n){e.exports=n(246)},123:function(e,t,n){},124:function(e,t,n){},246:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(22),o=n.n(s),c=(n(123),n(124),n(14)),i=n.n(c),u=n(25),l=n(26),h=n(27),p=n(29),f=n(30),m=n(32),d=n(251);function k(e,t,n,a){return v.apply(this,arguments)}function v(){return(v=Object(m.a)(i.a.mark((function e(t,n,a,r){var s,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={method:t,headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}},o="",e.next=4,fetch(a+r,s).then((function(e){return e.json()})).then((function(e){return o=e}));case 4:return console.log(o),e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t,n,a){return y.apply(this,arguments)}function y(){return(y=Object(m.a)(i.a.mark((function e(t,n,a,r){var s,o,c,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={method:t,headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}},o="",e.next=4,fetch(a+r,s).then((function(e){return e.json()})).then((function(e){return o=e.items}));case 4:for(console.log(o),console.log(typeof o),console.log(o[0]),c=[],u=0;u<o.length;u++)c.push({link:o[u.toString()].external_urls.spotify,date:o[u].release_date});return e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){var t="",n=!0,a=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){t+=s.value.link}}catch(c){a=!0,r=c}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}return t}var w=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).access_token="",n.state={message:"Default content"},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"get_tracks",value:function(){var e=Object(m.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==this.access_token){e.next=3;break}return e.next=3,this.get_access();case 3:return n=0,e.next=6,g("GET",this.access_token,"https://api.spotify.com/v1/artists/"+t+"/albums","?offset=0&limit=50&include_groups=album,single,appears_on,compilation&market=US");case 6:a=e.sent,console.log("This is the number of tracks: "+a.length);case 8:if(a.length/(n+1)!==50){e.next=15;break}return e.next=11,g("GET",this.access_token,"https://api.spotify.com/v1/artists/"+t+"/albums","?offset="+n+"&limit=50&include_groups=album,single,appears_on,compilation&market=US");case 11:r=e.sent,a.push(r),e.next=8;break;case 15:this.setState({message:b(a)});case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"get_access",value:function(){var e=Object(m.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Basic MGIzMWY3ODI2YzFhNDAxZGFkNzE2MzE0NzQ3MWNhZjU6MGM2MTE4NzZmZDdlNDBjOWI1ZWM0MGQxMjY4YTQwZGQ=",(t={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic MGIzMWY3ODI2YzFhNDAxZGFkNzE2MzE0NzQ3MWNhZjU6MGM2MTE4NzZmZDdlNDBjOWI1ZWM0MGQxMjY4YTQwZGQ="}}).body="grant_type=client_credentials",n="",e.next=6,fetch("https://accounts.spotify.com/api/token",t).then((function(e){return e.json()})).then((function(e){n=e.access_token}));case 6:this.access_token=n;case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"get_song",value:function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==this.access_token){e.next=3;break}return e.next=3,this.get_access();case 3:return e.next=5,k("GET",this.access_token,"https://api.spotify.com/v1/search","?q=illenium&type=artist");case 5:t=e.sent,this.setState({message:t});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(d.a,{style:{margin:"2% 10% 2% 10%"},onClick:function(){e.get_access()}},r.a.createElement(d.a.Content,null,"Send Request")),r.a.createElement(d.a,{style:{margin:"2% 10% 2% 10%"},onClick:function(){e.get_tracks("45eNHdiiabvmbp4erw26rg")}},r.a.createElement(d.a.Content,null,"Send Request")),r.a.createElement("div",null,this.state.message," "))}}]),t}(r.a.Component);var x=function(){return r.a.createElement("div",null,r.a.createElement(w,null,"temp"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[118,1,2]]]);
//# sourceMappingURL=main.4460b3ee.chunk.js.map