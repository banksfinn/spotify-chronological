(this["webpackJsonpspotify-chronological"]=this["webpackJsonpspotify-chronological"]||[]).push([[0],{171:function(t,e,n){t.exports=n(300)},176:function(t,e,n){},177:function(t,e,n){},300:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),s=n(35),c=n.n(s),o=(n(176),n(177),n(20)),i=n.n(o),u=n(45),p=n(46),l=n(47),h=n(49),f=n(51),m=n(38),d=n(312),v=n(311),k=n(301);function g(t,e,n,r){return y.apply(this,arguments)}function y(){return(y=Object(m.a)(i.a.mark((function t(e,n,r,a){var s,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s={method:e,headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}},c="",t.next=4,fetch(r+a,s).then((function(t){return t.json()})).then((function(t){return c=t}));case 4:return t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t,e,n){return b.apply(this,arguments)}function b(){return(b=Object(m.a)(i.a.mark((function t(e,n,r){var a,s,c,o,u,p,l,h,f;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=[],t.next=3,g("GET",r,"https://api.spotify.com/v1/albums/"+e+"/tracks","").items;case 3:for(s=t.sent,console.log(s),console.log(typeof s),c=0,o=!0,u=!1,p=void 0,t.prev=10,l=s[Symbol.iterator]();!(o=(h=l.next()).done);o=!0)f=h.value,a.push({id:f.id,date:n,order:c}),c+=1;t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),u=!0,p=t.t0;case 18:t.prev=18,t.prev=19,o||null==l.return||l.return();case 21:if(t.prev=21,!u){t.next=24;break}throw p;case 24:return t.finish(21);case 25:return t.finish(18);case 26:return t.abrupt("return",a);case 27:case"end":return t.stop()}}),t,null,[[10,14,18,26],[19,,21,25]])})))).apply(this,arguments)}function w(t,e,n,r){return _.apply(this,arguments)}function _(){return(_=Object(m.a)(i.a.mark((function t(e,n,r,a){var s,c,o,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s={method:e,headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}},c="",t.next=4,fetch(r+a,s).then((function(t){return t.json()})).then((function(t){return c=t.items}));case 4:for(o=[],u=0;u<c.length;u++)o.push({id:c[u.toString()].id,date:c[u.toString()].release_date});return t.abrupt("return",o);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var j=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(l.a)(this,Object(h.a)(e).call(this,t))).access_token="",n.artist="",n.state={message:"Default content"},n}return Object(f.a)(e,t),Object(p.a)(e,[{key:"get_tracks",value:function(){var t=Object(m.a)(i.a.mark((function t(e){var n,r,a,s,c,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==this.access_token){t.next=3;break}return t.next=3,this.get_access();case 3:return n=0,t.next=6,w("GET",this.access_token,"https://api.spotify.com/v1/artists/"+e+"/albums","?offset=0&limit=50&include_groups=album,single,appears_on,compilation&market=US");case 6:r=t.sent;case 7:if(r.length/(n+1)!==50){t.next=15;break}return t.next=10,w("GET",this.access_token,"https://api.spotify.com/v1/artists/"+e+"/albums","?offset="+n+"&limit=50&include_groups=album,single,appears_on,compilation&market=US");case 10:a=t.sent,r=r.concat(a),n+=1,t.next=7;break;case 15:return t.next=17,x(r[0].id,this.access_token);case 17:for(s=[],c=0;c<r.length;c++)o=x(r[c].id),s.push(o);console.log(s);case 20:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"get_access",value:function(){var t=Object(m.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"Basic MGIzMWY3ODI2YzFhNDAxZGFkNzE2MzE0NzQ3MWNhZjU6MGM2MTE4NzZmZDdlNDBjOWI1ZWM0MGQxMjY4YTQwZGQ=",(e={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic MGIzMWY3ODI2YzFhNDAxZGFkNzE2MzE0NzQ3MWNhZjU6MGM2MTE4NzZmZDdlNDBjOWI1ZWM0MGQxMjY4YTQwZGQ="}}).body="grant_type=client_credentials",n="",t.next=6,fetch("https://accounts.spotify.com/api/token",e).then((function(t){return t.json()})).then((function(t){n=t.access_token}));case 6:this.access_token=n;case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"get_song",value:function(){var t=Object(m.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==this.access_token){t.next=3;break}return t.next=3,this.get_access();case 3:return t.next=5,g("GET",this.access_token,"https://api.spotify.com/v1/search","?q=illenium&type=artist");case 5:e=t.sent,this.setState({message:e});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return a.a.createElement("div",null,a.a.createElement(d.a.Field,null,a.a.createElement(v.a,{type:"text",id:"artist_id",placeholder:"insert artist id here",onChange:function(){t.artist=document.getElementById("artist_id").value}}),a.a.createElement(k.a,{onClick:function(){return t.get_tracks(t.artist)}},"Look up Artist")),a.a.createElement("div",null,this.state.message," "))}}]),e}(a.a.Component);var E=function(){return a.a.createElement("div",null,a.a.createElement(j,null,"temp"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[171,1,2]]]);
//# sourceMappingURL=main.be3a56a2.chunk.js.map