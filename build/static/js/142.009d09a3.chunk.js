"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[142],{7809:function(e,n,l){l.d(n,{c:function(){return i}});var i=function(e){for(var n=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"],l=0;l<=n.length;l++)if(n[l]===n[Number(e.split("-")[1])])return"".concat(null===e||void 0===e?void 0:e.split("-")[0],"-").concat(n[l-1],"-").concat(null===e||void 0===e?void 0:e.split("-")[2])}},6638:function(e,n){n.Z=function(e,n){401===e?n("Unathorized..."):400===e?n("Bad request..."):405===e?n("Method not allowed..."):403===e?n("Error, request not allowed..."):404===e?n("Error, server rejected..."):409===e?n("Similar identity exists"):500===e&&n("Internal error...")}},8274:function(e,n,l){l.r(n),l.d(n,{default:function(){return D}});var i=l(4165),o=l(1413),t=l(5861),d=l(9439),s=l(4569),u=l.n(s),a=l(2791),r=l(5332),c=l(408),v=l(3465),h=l(6638),f=l(8781),p=l(7689),x=l(1087),m=l(7809),j=(l(4122),l(184)),w=function(e){var n,l,d,s,a=e.getData,f=e.selectedAudio,x=e.setBools,m=e.feedback,w=e.setFeedback,g=(0,v.Z)().auth,Z=(0,p.s0)(),b=function(){var e=(0,t.Z)((0,i.Z)().mark((function e(){var n,l,t,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x((function(e){return(0,o.Z)((0,o.Z)({},e),{},{showloading:!0})})),e.prev=1,e.next=4,u().put("".concat(c.C,"/delete-audios:").concat(null===f||void 0===f?void 0:f._id),{selectedItem:null===f||void 0===f?void 0:f._id},{withCredentials:!0});case 4:200===(null===(n=e.sent)||void 0===n?void 0:n.status)&&a().then((function(){x((function(e){return(0,o.Z)((0,o.Z)({},e),{},{showDeleteModal:!1})})),w("Deleted successfully...")})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),null!==e.t0&&void 0!==e.t0&&null!==(l=e.t0.response)&&void 0!==l&&l.data?401===(null===e.t0||void 0===e.t0||null===(t=e.t0.response)||void 0===t?void 0:t.status)?(0,r.Z)(g).then((function(e){var n,l;200===(null===e||void 0===e?void 0:e.status)?b():Z("/".concat(null===g||void 0===g||null===(n=g.stagenameInUrl)||void 0===n||null===(l=n.trim())||void 0===l?void 0:l.toLowerCase(),"/sign-out"))})):(x((function(e){return(0,o.Z)((0,o.Z)({},e),{},{showloading:!1})})),(0,h.Z)(null===e.t0||void 0===e.t0||null===(d=e.t0.response)||void 0===d?void 0:d.status,w)):(x((function(e){return(0,o.Z)((0,o.Z)({},e),{},{showloading:!1})})),w("Network challenges..."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("main",{className:"modal-container",children:[(0,j.jsx)("div",{className:"feedback-container",style:m?{}:{backgroundColor:"transparent"},children:(0,j.jsxs)("div",{className:"feedback",children:[m,(0,j.jsx)("span",{style:{visibility:"hidden"},children:"."})]})}),(0,j.jsxs)("div",{className:"content-container",children:[(0,j.jsx)("div",{className:"close-button-container",children:(0,j.jsx)("button",{onClick:function(e){e.preventDefault(),x((function(e){return(0,o.Z)((0,o.Z)({},e),{},{showDeleteModal:!1})})),w("")},className:"close-Icon",children:"X"})}),(0,j.jsxs)("div",{className:"content",children:[(0,j.jsxs)("p",{children:["Surely delete ",(0,j.jsx)("i",{children:(0,j.jsx)("b",{children:(null===f||void 0===f||null===(n=f.title[0])||void 0===n?void 0:n.toUpperCase())+(null===f||void 0===f||null===(l=f.title)||void 0===l||null===(d=l.slice(1,null===f||void 0===f||null===(s=f.title)||void 0===s?void 0:s.length))||void 0===d?void 0:d.toLowerCase())})})," ?"]}),(0,j.jsxs)("div",{className:"decision-buttons-container",children:[(0,j.jsx)("button",{onClick:function(e){e.preventDefault(),b()},children:"Yes"}),(0,j.jsx)("button",{onClick:function(e){e.preventDefault(),x((function(e){return(0,o.Z)((0,o.Z)({},e),{},{showDeleteModal:!1})})),w("")},children:"No"})]})]})]})]})})},g=l(6907),Z=l(9126),b=l(828),k=l(6355),C=l(978),N=l(811),D=function(){var e,n,l,s,N,D,U=(0,v.Z)().auth,_=(0,a.useState)([]),O=(0,d.Z)(_,2),I=O[0],L=O[1],A=(0,a.useState)(""),M=(0,d.Z)(A,2),S=M[0],B=M[1],E=(0,a.useState)({showloading:!1,toggler:!1,seachedItemsAvailable:!0,showDetails:!1,showDeleteModal:!1}),z=(0,d.Z)(E,2),X=z[0],F=z[1],P=(0,a.useState)({optionsOpened:[],deatilsOpened:[]}),J=(0,d.Z)(P,2),T=J[0],q=J[1],R=(0,a.useRef)(),H=(0,a.useState)(""),Q=(0,d.Z)(H,2),W=Q[0],Y=Q[1],$=(0,p.s0)(),G=(0,a.useCallback)((0,t.Z)((0,i.Z)().mark((function e(){var n,l,t,d,s,a,v;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F((function(e){return(0,o.Z)((0,o.Z)({},e),{},{showloading:!0})})),e.prev=1,e.next=4,u().get("".concat(c.C,"/get-added-audios"),{withCredentials:!0});case 4:200===(null===(n=e.sent)||void 0===n?void 0:n.status)?(null===n||void 0===n||null===(l=n.data)||void 0===l||null===(t=l.addedItems)||void 0===t?void 0:t.length)>0&&(L(null===n||void 0===n||null===(d=n.data)||void 0===d?void 0:d.addedItems),F((function(e){return(0,o.Z)((0,o.Z)({},e),{},{showloading:!1})}))):204===(null===n||void 0===n?void 0:n.status)&&(L([]),F((function(e){return(0,o.Z)((0,o.Z)({},e),{},{showloading:!1})})),B("No audios found...")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),null!==e.t0&&void 0!==e.t0&&null!==(s=e.t0.response)&&void 0!==s&&s.data?401===(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a?void 0:a.status)?(0,r.Z)(U).then((function(e){var n,l;200===e.status?G():$("/".concat(null===U||void 0===U||null===(n=U.stagenameInUrl)||void 0===n||null===(l=n.trim())||void 0===l?void 0:l.toLowerCase(),"/sign-out"))})):(F((function(e){return(0,o.Z)((0,o.Z)({},e),{},{showloading:!1})})),(0,h.Z)(null===e.t0||void 0===e.t0||null===(v=e.t0.response)||void 0===v?void 0:v.status,B)):B("Network challenges...");case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),[U,$]);return(0,a.useEffect)((function(){G()}),[G]),(0,a.useEffect)((function(){var e,n;(null===I||void 0===I?void 0:I.length)>0&&0===(null===(e=document)||void 0===e||null===(n=e.getElementsByClassName("indivial-item"))||void 0===n?void 0:n.length)&&B("No results found")}),[null===I||void 0===I?void 0:I.length]),(0,a.useEffect)((function(){S&&setTimeout((function(){B("")}),3e3)}),[S]),(0,j.jsxs)(j.Fragment,{children:[(null===X||void 0===X?void 0:X.showloading)&&(0,j.jsx)(f.Z,{}),(null===X||void 0===X?void 0:X.showDeleteModal)&&(0,j.jsx)(w,{getData:G,setBools:F,bools:X,selectedAudio:W,setFeedback:B,feedback:S}),(0,j.jsxs)("main",{className:"added-audios",style:{paddingTop:"40px"},children:[(0,j.jsxs)("div",{className:"page-heading",children:["ADDED"," ",(0,j.jsx)("i",{children:(0,j.jsx)("b",{children:"AUDIOS"})})]}),(0,j.jsx)("div",{className:"feedback-container",style:S?{}:{backgroundColor:"transparent"},children:(0,j.jsx)("div",{className:"feeback",children:!(null!==X&&void 0!==X&&X.showDeleteModal)&&S})}),(0,j.jsx)("section",{className:"search-item",children:(0,j.jsx)("input",{ref:R,placeholder:"Enter audio title to search",onChange:function(){F((function(e){return(0,o.Z)((0,o.Z)({},e),{},{toggler:!(null!==X&&void 0!==X&&X.search)})}))}})}),(0,j.jsx)("div",{className:"add-new-button-container",style:{textAlign:"center"},children:null!==U&&void 0!==U&&U.websiteCreated?(0,j.jsx)(x.rU,{to:"/".concat(null===U||void 0===U||null===(e=U.stagenameInUrl)||void 0===e||null===(n=e.trim())||void 0===n?void 0:n.toLowerCase(),"/add-audio"),children:"Add new"}):(0,j.jsx)(x.rU,{to:"/".concat(null===U||void 0===U||null===(l=U.stagenameInUrl)||void 0===l||null===(s=l.trim())||void 0===s?void 0:s.toLowerCase(),"/createwebsite"),children:"Create website"})}),(0,j.jsx)("div",{children:(0,j.jsx)("div",{className:"list-of-individual-items",style:0===(null===I||void 0===I||null===(N=I.filter((function(e){var n,l,i,o,t;return null!==R&&void 0!==R&&null!==(n=R.current)&&void 0!==n&&n.value?null===e||void 0===e||null===(l=e.headline)||void 0===l||null===(i=l.toLowerCase())||void 0===i?void 0:i.includes(null===R||void 0===R||null===(o=R.current)||void 0===o||null===(t=o.value)||void 0===t?void 0:t.toLowerCase()):e})))||void 0===N?void 0:N.length)?{width:"70vw"}:{},children:(null===I||void 0===I?void 0:I.length)>0&&(null===I||void 0===I?void 0:I.sort((function(e,n){return new Date(n.datereleased)-new Date(e.datereleased)})).filter((function(e){var n,l,i,o;return""!==(null===R||void 0===R||null===(n=R.current)||void 0===n?void 0:n.value)?null===e||void 0===e||null===(l=e.title)||void 0===l?void 0:l.toLowerCase().includes(null===R||void 0===R||null===(i=R.current)||void 0===i||null===(o=i.value)||void 0===o?void 0:o.toLowerCase()):e})).map((function(e){var n,l,i,t,d,s,u;return(0,j.jsxs)("div",{className:"indivial-item for-audios",children:[(0,j.jsxs)("div",{className:"audio-container",children:[(0,j.jsx)("div",{children:(0,j.jsx)(y,{element:e,auth:U})}),(0,j.jsx)("div",{className:"title",children:(null===e||void 0===e||null===(n=e.title[0])||void 0===n?void 0:n.toUpperCase())+(null===e||void 0===e||null===(l=e.title)||void 0===l||null===(i=l.slice(1,null===e||void 0===e||null===(t=e.title)||void 0===t?void 0:t.length))||void 0===i?void 0:i.toLowerCase())}),(0,j.jsxs)("div",{className:"details-conatiner",children:[(0,j.jsx)("div",{className:"date-released",style:{color:"black",backgroundColor:"white"},children:"Released"}),(0,j.jsxs)("div",{className:"date-released",style:{marginBottom:"5px"},children:[" ",(0,m.c)(null===e||void 0===e?void 0:e.datereleased)]}),(0,j.jsx)("div",{className:"date-released",style:{color:"wheat"},children:"Platforms"}),(0,j.jsx)("div",{className:"added-streaming-platforms",children:(0,j.jsxs)("section",{className:"platforms",children:[(0,j.jsx)("div",{children:""!==(null===e||void 0===e?void 0:e.youtube)&&(0,j.jsx)(x.rU,{onClick:function(n){var l;n.preventDefault(),null===(l=window)||void 0===l||l.open(null===e||void 0===e?void 0:e.youtube,"_blank")},to:"",children:(0,j.jsx)(Z.bUO,{size:"15PX"})})}),(0,j.jsx)("div",{children:""!==(null===e||void 0===e?void 0:e.audiomack)&&(0,j.jsx)(x.rU,{to:"",onClick:function(n){var l;n.preventDefault(),null===(l=window)||void 0===l||l.open(null===e||void 0===e?void 0:e.audiomack,"_blank")},children:(0,j.jsx)(C.$8v,{size:"15px"})})}),(0,j.jsx)("div",{children:""!==(null===e||void 0===e?void 0:e.spotify)&&(0,j.jsx)(x.rU,{to:"",onClick:function(n){var l;n.preventDefault(),null===(l=window)||void 0===l||l.open(null===e||void 0===e?void 0:e.spotify,"_blank")},children:(0,j.jsx)(b.x8t,{size:"15PX"})})}),(0,j.jsx)("div",{children:""!==(null===e||void 0===e?void 0:e.applemusic)&&(0,j.jsx)(x.rU,{to:"",onClick:function(n){var l;n.preventDefault(),null===(l=window)||void 0===l||l.open(null===e||void 0===e?void 0:e.applemusic,"_blank")},children:(0,j.jsx)(k.HjQ,{size:"15PX"})})}),(0,j.jsx)("div",{children:""!==(null===e||void 0===e?void 0:e.soundcloud)&&(0,j.jsx)(x.rU,{to:"",onClick:function(n){var l;n.preventDefault(),null===(l=window)||void 0===l||l.open(null===e||void 0===e?void 0:e.soundcloud,"_blank")},children:(0,j.jsx)(b.OSW,{size:"15PX"})})})]})})]})]}),(0,j.jsxs)("div",{className:"options-container",children:[(0,j.jsxs)("div",{children:[!(null!==T&&void 0!==T&&T.optionsOpened.includes(null===e||void 0===e?void 0:e._id))&&(0,j.jsx)("button",{className:"optionsBtn firstoptionsBtn",onClick:function(n){var l;n.preventDefault(),F((function(e){return(0,o.Z)((0,o.Z)({},e),{},{toggler:!(null!==X&&void 0!==X&&X.search)})})),null!==T&&void 0!==T&&null!==(l=T.optionsOpened)&&void 0!==l&&l.includes(null===e||void 0===e?void 0:e._id)||null===T||void 0===T||T.optionsOpened.push(null===e||void 0===e?void 0:e._id)},children:(0,j.jsx)(g.eBn,{size:"20px",style:{position:"relative",left:"10px"}})}),(null===T||void 0===T?void 0:T.optionsOpened.includes(null===e||void 0===e?void 0:e._id))&&(0,j.jsx)("button",{className:"optionsBtn",onClick:function(n){var l;if(n.preventDefault(),F((function(e){return(0,o.Z)((0,o.Z)({},e),{},{toggler:!(null!==X&&void 0!==X&&X.search)})})),null!==T&&void 0!==T&&null!==(l=T.optionsOpened)&&void 0!==l&&l.includes(null===e||void 0===e?void 0:e._id)){var i,t=null===T||void 0===T||null===(i=T.optionsOpened)||void 0===i?void 0:i.filter((function(n){return n!==(null===e||void 0===e?void 0:e._id)}));q((function(e){return(0,o.Z)((0,o.Z)({},e),{},{optionsOpened:t})}))}},children:(0,j.jsx)("b",{children:"X"})})]}),(null===T||void 0===T||null===(d=T.optionsOpened)||void 0===d?void 0:d.includes(null===e||void 0===e?void 0:e._id))&&(0,j.jsxs)("div",{className:"options",children:[(0,j.jsx)("div",{children:(0,j.jsx)(x.rU,{to:"/".concat(null===U||void 0===U||null===(s=U.stagenameInUrl)||void 0===s||null===(u=s.trim())||void 0===u?void 0:u.toLowerCase(),"/edit-audio/").concat(null===e||void 0===e?void 0:e._id),className:"edit",children:"Edit"})}),(0,j.jsx)("button",{onClick:function(n){n.preventDefault(),Y(e),F((function(e){return{showDeleteModal:!0}}))},className:"delete",children:"Delete"})]})]})]},null===e||void 0===e?void 0:e._id)})))})}),(0,j.jsx)("div",{style:{textAlign:"center",marginTop:"50px"},children:!X.showloading&&0===(null===I||void 0===I||null===(D=I.filter((function(e){var n,l,i,o,t;return null!==R&&void 0!==R&&null!==(n=R.current)&&void 0!==n&&n.value?null===e||void 0===e||null===(l=e.headline)||void 0===l||null===(i=l.toLowerCase())||void 0===i?void 0:i.includes(null===R||void 0===R||null===(o=R.current)||void 0===o||null===(t=o.value)||void 0===t?void 0:t.toLowerCase()):e})))||void 0===D?void 0:D.length)&&(0,j.jsx)("span",{children:"No results found"})})]})]})},y=function(e){var n=e.element,l=e.auth;return(0,j.jsx)("img",{src:(0,N.Z)(n),alt:null===l||void 0===l?void 0:l.stagenameInUrl})}},4122:function(){}}]);
//# sourceMappingURL=142.009d09a3.chunk.js.map