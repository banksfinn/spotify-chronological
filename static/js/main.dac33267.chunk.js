(this["webpackJsonpspotify-chronological"]=this["webpackJsonpspotify-chronological"]||[]).push([[0],{62:function(e,t,n){e.exports=n(82)},67:function(e,t,n){},68:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(10),c=n.n(s),o=(n(67),n(68),n(11)),i=n(16),u=n.n(i),l=n(31),h=n(22),p=n(47),m=n(48),f=n(19),d=n(54),b=n(23),v=n(123),k=n(121),x=n(126),y=n(49),g=n(122),_=n(120),w=n(4),E=n(125),j=n(119),S=n(52),O=n.n(S);function G(e,t,n,a){return C.apply(this,arguments)}function C(){return(C=Object(b.a)(u.a.mark((function e(t,n,a,r){var s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={method:t,headers:{Authorization:"Bearer "+n,"Content-Type":"application/json",Accept:"application/json"}},c="",e.next=4,fetch(a+r,s).then((function(e){return e.json()})).then((function(e){return c=e}));case 4:return e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t,n){return z.apply(this,arguments)}function z(){return(z=Object(b.a)(u.a.mark((function e(t,n,a){var r,s,c,o,i,l,h,p,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],e.next=3,G("GET",a,"https://api.spotify.com/v1/albums/"+t+"/tracks","");case 3:for(s=e.sent,c=0,o=!0,i=!1,l=void 0,e.prev=8,h=s.items[Symbol.iterator]();!(o=(p=h.next()).done);o=!0)m=p.value,r.push({uri:m.uri,name:m.name,date:n,order:c}),c+=1;e.next=16;break;case 12:e.prev=12,e.t0=e.catch(8),i=!0,l=e.t0;case 16:e.prev=16,e.prev=17,o||null==h.return||h.return();case 19:if(e.prev=19,!i){e.next=22;break}throw l;case 22:return e.finish(19);case 23:return e.finish(16);case 24:return e.abrupt("return",r);case 25:case"end":return e.stop()}}),e,null,[[8,12,16,24],[17,,19,23]])})))).apply(this,arguments)}function T(e,t,n,a){return I.apply(this,arguments)}function I(){return(I=Object(b.a)(u.a.mark((function e(t,n,a,r){var s,c,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={method:t,headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}},c="",e.next=4,fetch(a+r,s).then((function(e){return e.json()})).then((function(e){return c=e.items}));case 4:for(o=[],i=0;i<c.length;i++)o.push({id:c[i.toString()].id,date:c[i.toString()].release_date});return e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return e=(e=e.split("-")).join(),parseInt(e,10)}function N(e,t){var n=[],a=0,r=0,s={};if(t){var c=!0,o=!1,i=void 0;try{for(var u,l=e[Symbol.iterator]();!(c=(u=l.next()).done);c=!0){var h=u.value;h.name in s?a+=1:(n.push(h),s[h.name]=1)}}catch(k){o=!0,i=k}finally{try{c||null==l.return||l.return()}finally{if(o)throw i}}}else{var p=!0,m=!1,f=void 0;try{for(var d,b=e[Symbol.iterator]();!(p=(d=b.next()).done);p=!0){var v=d.value;v.name in s?a+=1:v.name.toLowerCase().includes("remix")?r+=1:(n.push(v),s[v.name]=1)}}catch(k){m=!0,f=k}finally{try{p||null==b.return||b.return()}finally{if(m)throw f}}}return console.log("There been "+a+" songs removed after trimming, "+r+" remixes removed."),n}function W(e,t){var n="",a=!0,r=!1,s=void 0;try{for(var c,o=e[Symbol.iterator]();!(a=(c=o.next()).done);a=!0){n+=c.value[t],n+="\n"}}catch(i){r=!0,s=i}finally{try{a||null==o.return||o.return()}finally{if(r)throw s}}return n}Object(w.a)((function(e){return{tooltip:{backgroundColor:e.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:e.shadows[1],fontSize:11}}}))(x.a);var Z=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).handleSnackBoxClose=function(e,t){"clickaway"!==t&&n.setSnackboxOpen(!1)},n.openSnackBox=function(){n.setSnackboxOpen(!0)},n.access_token="",n.artist="",n.state={message:"Default content",copy_value:"",snackbox:!1,count:"We have found 0 songs (so far).",albums_incl:!1,singles_incl:!1,appears_on:!1,compilation:!1,remixes:!1},n.checkboxChange=n.checkboxChange.bind(Object(f.a)(n)),n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"get_tracks",value:function(){var e=Object(b.a)(u.a.mark((function e(t){var n,a,r,s,c,o,i,l,h,p,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==this.access_token){e.next=3;break}return e.next=3,this.get_access();case 3:if(n=0,a=[],!this.state.albums_incl){e.next=12;break}case 6:return e.next=8,T("GET",this.access_token,"https://api.spotify.com/v1/artists/"+t+"/albums","?offset="+n+"&limit=50&include_groups=album&market=US");case 8:r=e.sent,a=a.concat(r),n+=1;case 11:if(a.length/(n+1)===50){e.next=6;break}case 12:if(s=a.length,!this.state.singles_incl){e.next=21;break}n=0;case 15:return e.next=17,T("GET",this.access_token,"https://api.spotify.com/v1/artists/"+t+"/albums","?offset="+n+"&limit=50&include_groups=single&market=US");case 17:c=e.sent,a=a.concat(c),n+=1;case 20:if((a.length-s)/(n+1)===50){e.next=15;break}case 21:if(s=a.length,!this.state.appears_on){e.next=30;break}n=0;case 24:return e.next=26,T("GET",this.access_token,"https://api.spotify.com/v1/artists/"+t+"/albums","?offset="+n+"&limit=50&include_groups=appears_on&market=US");case 26:o=e.sent,a=a.concat(o),n+=1;case 29:if((a.length-s)/(n+1)===50){e.next=24;break}case 30:if(s=a.length,!this.state.compilation){e.next=39;break}n=0;case 33:return e.next=35,T("GET",this.access_token,"https://api.spotify.com/v1/artists/"+t+"/albums","?offset="+n+"&limit=50&include_groups=compilation&market=US");case 35:i=e.sent,a=a.concat(i),n+=1;case 38:if((a.length-s)/(n+1)===50){e.next=33;break}case 39:l=[],h=a.length>"1000"?"1000":a.length,p=0;case 42:if(!(p<h)){e.next=50;break}return e.next=45,M(a[p].id,a[p].date,this.access_token);case 45:m=e.sent,l=l.concat(m);case 47:p++,e.next=42;break;case 50:(l=N(l,this.state.remixes)).sort((function(e,t){return B(e.date)+.01*e.order-(B(t.date)+.01*t.order)})),this.setState({count:"We found "+l.length+" songs."}),this.setState({copy_value:W(l,"uri")}),this.openSnackBox();case 55:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"get_artist",value:function(){var e=Object(b.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==this.access_token){e.next=3;break}return e.next=3,this.get_access();case 3:return t=encodeURIComponent(t.trim()),e.next=6,G("GET",this.access_token,"https://api.spotify.com/v1/search","?q="+t+"&type=artist");case 6:n=e.sent,a=n.artists.items[0].id,this.get_tracks(a);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"get_access",value:function(){var e=Object(b.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Basic MGIzMWY3ODI2YzFhNDAxZGFkNzE2MzE0NzQ3MWNhZjU6MGM2MTE4NzZmZDdlNDBjOWI1ZWM0MGQxMjY4YTQwZGQ=",(t={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic MGIzMWY3ODI2YzFhNDAxZGFkNzE2MzE0NzQ3MWNhZjU6MGM2MTE4NzZmZDdlNDBjOWI1ZWM0MGQxMjY4YTQwZGQ="}}).body="grant_type=client_credentials",n="",e.next=6,fetch("https://accounts.spotify.com/api/token",t).then((function(e){return e.json()})).then((function(e){n=e.access_token}));case 6:this.access_token=n;case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"get_song",value:function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==this.access_token){e.next=3;break}return e.next=3,this.get_access();case 3:return e.next=5,G("GET",this.access_token,"https://api.spotify.com/v1/search","?q=illenium&type=artist");case 5:t=e.sent,this.setState({message:t});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"checkboxChange",value:function(e,t){var n=e.target.name;this.setState(Object(o.a)({},n,t))}},{key:"setSnackboxOpen",value:function(){this.setState({snackbox:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(E.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.snackbox,autoHideDuration:6e3,onClose:this.handleSnackBoxClose,message:this.state.count,action:r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{size:"small","aria-label":"close",color:"inherit",onClick:this.handleSnackBoxClose},r.a.createElement(O.a,{fontSize:"small"})))}),r.a.createElement("div",null,this.state.count," "),r.a.createElement(v.a,null,r.a.createElement(v.a.Group,{controlId:"formArtistName"},r.a.createElement(g.a,{id:"artist_id",label:"Artist Name",onChange:function(){e.artist=document.getElementById("artist_id").value},helperText:"We currently select the top artist available with that name."})),r.a.createElement(v.a.Group,{controlId:"albums_included"},r.a.createElement(_.a,{value:"albums_incl",name:"albums_incl",selected:this.state.albums_incl,onChange:this.checkboxChange(!this.state.albums_incl)},"Albums")),r.a.createElement(v.a.Group,{controlId:"singles_included"}),r.a.createElement(v.a.Group,{controlId:"appears_on_included"}),r.a.createElement(v.a.Group,{controlId:"compilations_included"}),r.a.createElement(v.a.Group,{controlId:"include_remixes"}),r.a.createElement(k.a,{variant:"primary",onClick:function(){return e.get_artist(e.artist)}},"Submit")),r.a.createElement(y.CopyToClipboard,{text:this.state.copy_value},r.a.createElement("button",null,"Copy to clipboard with button, paste into a new album!")),r.a.createElement("div",null,this.state.message," "))}}]),t}(r.a.Component);n(81);var D=function(){return r.a.createElement("div",null,r.a.createElement(Z,null,"temp"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.dac33267.chunk.js.map