(this["webpackJsonpspotify-chronological"]=this["webpackJsonpspotify-chronological"]||[]).push([[0],{172:function(t,e,n){t.exports=n(304)},177:function(t,e,n){},178:function(t,e,n){},304:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(36),s=n.n(c),i=(n(177),n(178),n(19)),o=n.n(i),u=n(45),p=n(46),l=n(47),h=n(49),f=n(51),m=n(30),d=n(316),v=n(315),k=n(305),y=n(144);function b(t,e,n,a){return x.apply(this,arguments)}function x(){return(x=Object(m.a)(o.a.mark((function t(e,n,a,r){var c,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={method:e,headers:{Authorization:"Bearer "+n,"Content-Type":"application/json",Accept:"application/json"}},s="",t.next=4,fetch(a+r,c).then((function(t){return t.json()})).then((function(t){return s=t}));case 4:return t.abrupt("return",s);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t,e,n){return g.apply(this,arguments)}function g(){return(g=Object(m.a)(o.a.mark((function t(e,n,a){var r,c,s,i,u,p,l,h,f;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],t.next=3,b("GET",a,"https://api.spotify.com/v1/albums/"+e+"/tracks","");case 3:for(c=t.sent,s=0,i=!0,u=!1,p=void 0,t.prev=8,l=c.items[Symbol.iterator]();!(i=(h=l.next()).done);i=!0)f=h.value,r.push({uri:f.uri,name:f.name,date:n,order:s}),s+=1;t.next=16;break;case 12:t.prev=12,t.t0=t.catch(8),u=!0,p=t.t0;case 16:t.prev=16,t.prev=17,i||null==l.return||l.return();case 19:if(t.prev=19,!u){t.next=22;break}throw p;case 22:return t.finish(19);case 23:return t.finish(16);case 24:return t.abrupt("return",r);case 25:case"end":return t.stop()}}),t,null,[[8,12,16,24],[17,,19,23]])})))).apply(this,arguments)}function w(t,e,n,a){return E.apply(this,arguments)}function E(){return(E=Object(m.a)(o.a.mark((function t(e,n,a,r){var c,s,i,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={method:e,headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}},s="",t.next=4,fetch(a+r,c).then((function(t){return t.json()})).then((function(t){return s=t.items}));case 4:for(i=[],u=0;u<s.length;u++)i.push({id:s[u.toString()].id,date:s[u.toString()].release_date});return t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(t,e){var n="",a=!0,r=!1,c=void 0;try{for(var s,i=t[Symbol.iterator]();!(a=(s=i.next()).done);a=!0){n+=s.value[e],n+="\n"}}catch(o){r=!0,c=o}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}var M=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(l.a)(this,Object(h.a)(e).call(this,t))).access_token="",n.artist="",n.state={message:"Default content",copy_value:""},n.criteria={album_incl:!0,single_incl:!0,appears_on:!1,compilation:!1},n}return Object(f.a)(e,t),Object(p.a)(e,[{key:"get_tracks",value:function(){var t=Object(m.a)(o.a.mark((function t(e){var n,a,r,c,s,i,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==this.access_token){t.next=3;break}return t.next=3,this.get_access();case 3:return n=0,a=(a="album,").slice(0,-1),t.next=8,w("GET",this.access_token,"https://api.spotify.com/v1/artists/"+e+"/albums","?offset=0&limit=50&"+a+"&market=US");case 8:r=t.sent;case 9:if(r.length/(n+1)!==50){t.next=17;break}return t.next=12,w("GET",this.access_token,"https://api.spotify.com/v1/artists/"+e+"/albums","?offset="+n+"&limit=50&include_groups=album,single,appears_on,compilation&market=US");case 12:c=t.sent,r=r.concat(c),n+=1,t.next=9;break;case 17:s=[],i=0;case 19:if(!(i<r.length)){t.next=27;break}return t.next=22,_(r[i].id,r[i].date,this.access_token);case 22:u=t.sent,s=s.concat(u);case 24:i++,t.next=19;break;case 27:this.setState({copy_value:j(s,"uri")}),this.setState({message:j(s,"name")});case 29:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"get_artist",value:function(){var t=Object(m.a)(o.a.mark((function t(e){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==this.access_token){t.next=3;break}return t.next=3,this.get_access();case 3:return e=encodeURIComponent(e.trim()),t.next=6,b("GET",this.access_token,"https://api.spotify.com/v1/search","?q="+e+"&type=artist");case 6:n=t.sent,a=n.artists.items[0].id,this.get_tracks(a);case 9:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"get_access",value:function(){var t=Object(m.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"Basic MGIzMWY3ODI2YzFhNDAxZGFkNzE2MzE0NzQ3MWNhZjU6MGM2MTE4NzZmZDdlNDBjOWI1ZWM0MGQxMjY4YTQwZGQ=",(e={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic MGIzMWY3ODI2YzFhNDAxZGFkNzE2MzE0NzQ3MWNhZjU6MGM2MTE4NzZmZDdlNDBjOWI1ZWM0MGQxMjY4YTQwZGQ="}}).body="grant_type=client_credentials",n="",t.next=6,fetch("https://accounts.spotify.com/api/token",e).then((function(t){return t.json()})).then((function(t){n=t.access_token}));case 6:this.access_token=n;case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"get_song",value:function(){var t=Object(m.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==this.access_token){t.next=3;break}return t.next=3,this.get_access();case 3:return t.next=5,b("GET",this.access_token,"https://api.spotify.com/v1/search","?q=illenium&type=artist");case 5:e=t.sent,this.setState({message:e});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement(d.a.Field,null,r.a.createElement("input",{name:"albums_incl",type:"checkbox",checked:this.criteria.album_incl}),r.a.createElement("input",{name:"singles_incl",type:"checkbox",checked:this.criteria.single_incl}),r.a.createElement("input",{name:"appears_on",type:"checkbox",checked:this.criteria.appears_on}),r.a.createElement("input",{name:"compilation",type:"checkbox",checked:this.criteria.compilation}),r.a.createElement(v.a,{type:"text",id:"artist_id",placeholder:"insert artist name here",onChange:function(){t.artist=document.getElementById("artist_id").value}}),r.a.createElement(k.a,{onClick:function(){return t.get_artist(t.artist)}},"Look up Artist")),r.a.createElement(y.CopyToClipboard,{text:this.state.copy_value},r.a.createElement("button",null,"Copy to clipboard with button, paste into a new album!")),r.a.createElement("div",null,this.state.message," "))}}]),e}(r.a.Component);var O=function(){return r.a.createElement("div",null,r.a.createElement(M,null,"temp"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[172,1,2]]]);
//# sourceMappingURL=main.9394f251.chunk.js.map