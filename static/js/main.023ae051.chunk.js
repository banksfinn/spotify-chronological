(this["webpackJsonpspotify-chronological"]=this["webpackJsonpspotify-chronological"]||[]).push([[0],{20:function(e,t,n){e.exports=n(36)},25:function(e,t,n){},26:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(11),c=n.n(s),o=(n(25),n(26),n(12)),i=n(5),l=n.n(i),u=n(13),h=n(14),p=n(19),m=n(15),d=n(7),f=n(18),v=n(6),y=n(38),b=n(39),k=n(16);function g(e,t,n,a){return x.apply(this,arguments)}function x(){return(x=Object(v.a)(l.a.mark((function e(t,n,a,r){var s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={method:t,headers:{Authorization:"Bearer "+n,"Content-Type":"application/json",Accept:"application/json"}},c="",e.next=4,fetch(a+r,s).then((function(e){return e.json()})).then((function(e){return c=e}));case 4:return e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t,n){return E.apply(this,arguments)}function E(){return(E=Object(v.a)(l.a.mark((function e(t,n,a){var r,s,c,o,i,u,h,p,m;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],e.next=3,g("GET",a,"https://api.spotify.com/v1/albums/"+t+"/tracks","");case 3:for(s=e.sent,c=0,o=!0,i=!1,u=void 0,e.prev=8,h=s.items[Symbol.iterator]();!(o=(p=h.next()).done);o=!0)m=p.value,r.push({uri:m.uri,name:m.name,date:n,order:c}),c+=1;e.next=16;break;case 12:e.prev=12,e.t0=e.catch(8),i=!0,u=e.t0;case 16:e.prev=16,e.prev=17,o||null==h.return||h.return();case 19:if(e.prev=19,!i){e.next=22;break}throw u;case 22:return e.finish(19);case 23:return e.finish(16);case 24:return e.abrupt("return",r);case 25:case"end":return e.stop()}}),e,null,[[8,12,16,24],[17,,19,23]])})))).apply(this,arguments)}function w(e,t,n,a){return C.apply(this,arguments)}function C(){return(C=Object(v.a)(l.a.mark((function e(t,n,a,r){var s,c,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={method:t,headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}},c="",e.next=4,fetch(a+r,s).then((function(e){return e.json()})).then((function(e){return c=e.items}));case 4:for(o=[],i=0;i<c.length;i++)o.push({id:c[i.toString()].id,date:c[i.toString()].release_date});return e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t){var n=[],a=0,r=0,s={};if(t){var c=!0,o=!1,i=void 0;try{for(var l,u=e[Symbol.iterator]();!(c=(l=u.next()).done);c=!0){var h=l.value;h.name in s?a+=1:(n.push(h),s[h.name]=1)}}catch(b){o=!0,i=b}finally{try{c||null==u.return||u.return()}finally{if(o)throw i}}}else{var p=!0,m=!1,d=void 0;try{for(var f,v=e[Symbol.iterator]();!(p=(f=v.next()).done);p=!0){var y=f.value;y.name in s?a+=1:y.name.toLowerCase().includes("remix")?r+=1:(n.push(y),s[y.name]=1)}}catch(b){m=!0,d=b}finally{try{p||null==v.return||v.return()}finally{if(m)throw d}}}return console.log("There been "+a+" songs removed after trimming, "+r+" remixes removed."),n}function j(e,t){var n="",a=!0,r=!1,s=void 0;try{for(var c,o=e[Symbol.iterator]();!(a=(c=o.next()).done);a=!0){n+=c.value[t],n+="\n"}}catch(i){r=!0,s=i}finally{try{a||null==o.return||o.return()}finally{if(r)throw s}}return n}var G=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).access_token="",n.artist="",n.state={message:"Default content",copy_value:"",count:"There are 0 songs (so far)",albums_incl:!1,singles_incl:!1,appears_on:!1,compilation:!1,remixes:!1},n.handleInputChange=n.handleInputChange.bind(Object(d.a)(n)),n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"get_tracks",value:function(){var e=Object(v.a)(l.a.mark((function e(t){var n,a,r,s,c,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==this.access_token){e.next=3;break}return e.next=3,this.get_access();case 3:return n=0,a="include_groups=",a+=this.state.albums_incl?"album,":"",a+=this.state.singles_incl?"single,":"",a+=this.state.appears_on?"appears_on,":"",a=(a+=this.state.compilation?"compilation,":"").slice(0,-1),e.next=12,w("GET",this.access_token,"https://api.spotify.com/v1/artists/"+t+"/albums","?offset=0&limit=50&"+a+"&market=US");case 12:r=e.sent;case 13:if(r.length/(n+1)!==50){e.next=21;break}return e.next=16,w("GET",this.access_token,"https://api.spotify.com/v1/artists/"+t+"/albums","?offset="+n+"&limit=50&"+a+"&market=US");case 16:s=e.sent,r=r.concat(s),n+=1,e.next=13;break;case 21:c=[],o=0;case 23:if(!(o<r.length)){e.next=31;break}return e.next=26,_(r[o].id,r[o].date,this.access_token);case 26:i=e.sent,c=c.concat(i);case 28:o++,e.next=23;break;case 31:c=I(c,this.state.remixes),console.log(c[0]),console.log(c[0].date),console.log(typeof c[0].date),c.sort((function(e,t){return e.date+(1-.01*e.order)-(t.date+(1-.01*t.order))})),this.setState({count:"There are "+c.length+" songs."}),this.setState({copy_value:j(c,"uri")}),this.setState({message:j(c,"name")});case 39:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"get_artist",value:function(){var e=Object(v.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),""!==this.access_token){e.next=4;break}return e.next=4,this.get_access();case 4:return t=encodeURIComponent(t.trim()),e.next=7,g("GET",this.access_token,"https://api.spotify.com/v1/search","?q="+t+"&type=artist");case 7:n=e.sent,a=n.artists.items[0].id,this.get_tracks(a);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"get_access",value:function(){var e=Object(v.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Basic MGIzMWY3ODI2YzFhNDAxZGFkNzE2MzE0NzQ3MWNhZjU6MGM2MTE4NzZmZDdlNDBjOWI1ZWM0MGQxMjY4YTQwZGQ=",(t={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic MGIzMWY3ODI2YzFhNDAxZGFkNzE2MzE0NzQ3MWNhZjU6MGM2MTE4NzZmZDdlNDBjOWI1ZWM0MGQxMjY4YTQwZGQ="}}).body="grant_type=client_credentials",n="",e.next=6,fetch("https://accounts.spotify.com/api/token",t).then((function(e){return e.json()})).then((function(e){n=e.access_token}));case 6:this.access_token=n;case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"get_song",value:function(){var e=Object(v.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==this.access_token){e.next=3;break}return e.next=3,this.get_access();case 3:return e.next=5,g("GET",this.access_token,"https://api.spotify.com/v1/search","?q=illenium&type=artist");case 5:t=e.sent,this.setState({message:t});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleInputChange",value:function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,a=t.name;this.setState(Object(o.a)({},a,n))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,this.state.count," "),r.a.createElement(y.a,null,r.a.createElement(y.a.Group,{controlId:"formArtistName"},r.a.createElement(y.a.Label,null,"Artist Name"),r.a.createElement(y.a.Control,{type:"text",id:"artist_id",onChange:function(){e.artist=document.getElementById("artist_id").value},placeholder:"Enter artist name"}),r.a.createElement(y.a.Text,{className:"text-muted"},"We currently select the top artist available with that name.")),r.a.createElement(y.a.Group,{controlId:"albums_included"},r.a.createElement(y.a.Check,{type:"checkbox",label:"Include albums",name:"albums_incl",checked:this.state.albums_incl,onChange:this.handleInputChange})),r.a.createElement(y.a.Group,{controlId:"singles_included"},r.a.createElement(y.a.Check,{type:"checkbox",label:"Include singles",name:"singles_incl",checked:this.state.singles_incl,onChange:this.handleInputChange})),r.a.createElement(y.a.Group,{controlId:"appears_on_included"},r.a.createElement(y.a.Check,{type:"checkbox",label:"Include songs they appear on",name:"appears_on",checked:this.state.appears_on,onChange:this.handleInputChange})),r.a.createElement(y.a.Group,{controlId:"compilations_included"},r.a.createElement(y.a.Check,{type:"checkbox",label:"Include compilations",checked:this.state.compilation,name:"compilation",onChange:this.handleInputChange})),r.a.createElement(y.a.Group,{controlId:"include_remixes"},r.a.createElement(y.a.Check,{type:"checkbox",label:"Include remixes",name:"remixes",checked:this.state.remixes,onChange:this.handleInputChange})),r.a.createElement(b.a,{variant:"primary",onClick:function(){return e.get_artist(e.artist)}},"Submit")),r.a.createElement(k.CopyToClipboard,{text:this.state.copy_value},r.a.createElement("button",null,"Copy to clipboard with button, paste into a new album!")),r.a.createElement("div",null,this.state.message," "))}}]),t}(r.a.Component);n(35);var M=function(){return r.a.createElement("div",null,r.a.createElement(G,null,"temp"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.023ae051.chunk.js.map