(this["webpackJsonpspotify-chronological"]=this["webpackJsonpspotify-chronological"]||[]).push([[0],{172:function(t,e,n){t.exports=n(304)},177:function(t,e,n){},178:function(t,e,n){},304:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),s=n(36),i=n.n(s),c=(n(177),n(178),n(19)),o=n.n(c),u=n(45),l=n(46),p=n(47),h=n(49),f=n(51),m=n(30),d=n(316),v=n(315),y=n(305),k=n(144);function b(t,e,n,r){return g.apply(this,arguments)}function g(){return(g=Object(m.a)(o.a.mark((function t(e,n,r,a){var s,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s={method:e,headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}},i="",t.next=4,fetch(r+a,s).then((function(t){return t.json()})).then((function(t){return i=t}));case 4:return t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t,e,n){return w.apply(this,arguments)}function w(){return(w=Object(m.a)(o.a.mark((function t(e,n,r){var a,s,i,c,u,l,p,h,f;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=[],t.next=3,b("GET",r,"https://api.spotify.com/v1/albums/"+e+"/tracks","");case 3:for(s=t.sent,i=0,c=!0,u=!1,l=void 0,t.prev=8,p=s.items[Symbol.iterator]();!(c=(h=p.next()).done);c=!0)f=h.value,a.push({uri:f.uri,name:f.name,date:n,order:i}),i+=1;t.next=16;break;case 12:t.prev=12,t.t0=t.catch(8),u=!0,l=t.t0;case 16:t.prev=16,t.prev=17,c||null==p.return||p.return();case 19:if(t.prev=19,!u){t.next=22;break}throw l;case 22:return t.finish(19);case 23:return t.finish(16);case 24:return t.abrupt("return",a);case 25:case"end":return t.stop()}}),t,null,[[8,12,16,24],[17,,19,23]])})))).apply(this,arguments)}function _(t,e,n,r){return j.apply(this,arguments)}function j(){return(j=Object(m.a)(o.a.mark((function t(e,n,r,a){var s,i,c,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s={method:e,headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}},i="",t.next=4,fetch(r+a,s).then((function(t){return t.json()})).then((function(t){return i=t.items}));case 4:for(c=[],u=0;u<i.length;u++)c.push({id:i[u.toString()].id,date:i[u.toString()].release_date});return t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(t,e){var n="",r=!0,a=!1,s=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){n+=i.value[e],n+="\n"}}catch(o){a=!0,s=o}finally{try{r||null==c.return||c.return()}finally{if(a)throw s}}return n}var M=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(p.a)(this,Object(h.a)(e).call(this,t))).access_token="",n.artist="",n.state={message:"Default content",copy_value:""},n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"get_tracks",value:function(){var t=Object(m.a)(o.a.mark((function t(e){var n,r,a,s,i,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==this.access_token){t.next=3;break}return t.next=3,this.get_access();case 3:return n=0,t.next=6,_("GET",this.access_token,"https://api.spotify.com/v1/artists/"+e+"/albums","?offset=0&limit=50&include_groups=album,single,appears_on,compilation&market=US");case 6:r=t.sent;case 7:if(r.length/(n+1)!==50){t.next=15;break}return t.next=10,_("GET",this.access_token,"https://api.spotify.com/v1/artists/"+e+"/albums","?offset="+n+"&limit=50&include_groups=album,single,appears_on,compilation&market=US");case 10:a=t.sent,r=r.concat(a),n+=1,t.next=7;break;case 15:return t.next=17,x(r[0].id,this.access_token);case 17:for(s=[],i=0;i<10;i++)c=x(r[i].id),s.push(c);this.setState({copy_value:E(s,"uri")}),this.setState({message:E(s,"name")}),console.log(s);case 22:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"get_artist",value:function(){var t=Object(m.a)(o.a.mark((function t(e){var n,r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n="?q="+e+"&type=artist",console.log(n),r=b("GET",this.access_token,"https://api.spotify.com/v1/search",n),a=r.artists.items[0].id,console.log(r.artists.items[0].name),this.get_tracks(a);case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"get_access",value:function(){var t=Object(m.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"Basic MGIzMWY3ODI2YzFhNDAxZGFkNzE2MzE0NzQ3MWNhZjU6MGM2MTE4NzZmZDdlNDBjOWI1ZWM0MGQxMjY4YTQwZGQ=",(e={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic MGIzMWY3ODI2YzFhNDAxZGFkNzE2MzE0NzQ3MWNhZjU6MGM2MTE4NzZmZDdlNDBjOWI1ZWM0MGQxMjY4YTQwZGQ="}}).body="grant_type=client_credentials",n="",t.next=6,fetch("https://accounts.spotify.com/api/token",e).then((function(t){return t.json()})).then((function(t){n=t.access_token}));case 6:this.access_token=n;case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"get_song",value:function(){var t=Object(m.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==this.access_token){t.next=3;break}return t.next=3,this.get_access();case 3:return t.next=5,b("GET",this.access_token,"https://api.spotify.com/v1/search","?q=illenium&type=artist");case 5:e=t.sent,this.setState({message:e});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return a.a.createElement("div",null,a.a.createElement(d.a.Field,null,a.a.createElement(v.a,{type:"text",id:"artist_id",placeholder:"insert artist id here",onChange:function(){t.artist=document.getElementById("artist_id").value}}),a.a.createElement(y.a,{onClick:function(){return t.get_artist(t.artist)}},"Look up Artist")),a.a.createElement(k.CopyToClipboard,{text:this.state.copy_value},a.a.createElement("button",null,"Copy to clipboard with button, paste into a new album!")),a.a.createElement("div",null,this.state.message," "))}}]),e}(a.a.Component);var O=function(){return a.a.createElement("div",null,a.a.createElement(M,null,"temp"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[172,1,2]]]);
//# sourceMappingURL=main.bad7f9b0.chunk.js.map