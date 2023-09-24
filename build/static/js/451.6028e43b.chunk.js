"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[451],{6638:function(e,n){n.Z=function(e,n){401===e?n("Unathorized..."):400===e?n("Bad request..."):405===e?n("Method not allowed..."):403===e?n("Error, request not allowed..."):404===e?n("Error, server rejected..."):409===e?n("Similar identity exists"):500===e&&n("Internal error...")}},1451:function(e,n,l){l.r(n),l.d(n,{default:function(){return m}});var i=l(4165),o=l(1413),t=l(5861),d=l(9439),s=l(4569),a=l.n(s),r=l(2791),u=l(5332),c=l(408),v=l(3465),h=l(6638),f=l(8781),p=l(7689),w=l(1087),g=(l(4122),l(184)),x=function(e){var n=e.getData,l=e.selectedNews,d=e.setBools,s=e.feedback,r=e.setFeedback,f=(0,v.Z)().auth,w=(0,p.s0)(),x=function(){var e=(0,t.Z)((0,i.Z)().mark((function e(){var t,s,v,p;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d((function(e){return(0,o.Z)((0,o.Z)({},e),{},{showloading:!0})})),e.prev=1,e.next=4,a().put("".concat(c.C,"/delete-news:").concat(null===l||void 0===l?void 0:l._id),{selectedItem:null===l||void 0===l?void 0:l._id},{withCredentials:!0});case 4:200===(null===(t=e.sent)||void 0===t?void 0:t.status)&&n().then((function(){d((function(e){return(0,o.Z)((0,o.Z)({},e),{},{showDeleteModal:!1})})),r("Deleted successfully...")})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),null!==e.t0&&void 0!==e.t0&&null!==(s=e.t0.response)&&void 0!==s&&s.data?401===(null===e.t0||void 0===e.t0||null===(v=e.t0.response)||void 0===v?void 0:v.status)?(0,u.Z)(f).then((function(e){var n,l;200===(null===e||void 0===e?void 0:e.status)?x():w("/".concat(null===f||void 0===f||null===(n=f.stagenameInUrl)||void 0===n||null===(l=n.trim())||void 0===l?void 0:l.toLowerCase(),"/sign-out"))})):(d((function(e){return(0,o.Z)((0,o.Z)({},e),{},{showloading:!1})})),(0,h.Z)(null===e.t0||void 0===e.t0||null===(p=e.t0.response)||void 0===p?void 0:p.status,r)):(d((function(e){return(0,o.Z)((0,o.Z)({},e),{},{showloading:!1})})),r("Network challenges..."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("main",{className:"modal-container",children:[(0,g.jsx)("div",{className:"feedback-container",style:s?{}:{backgroundColor:"transparent"},children:(0,g.jsxs)("div",{className:"feedback",children:[s,(0,g.jsx)("span",{style:{visibility:"hidden"},children:"."})]})}),(0,g.jsxs)("div",{className:"content-container",children:[(0,g.jsx)("div",{className:"close-button-container",children:(0,g.jsx)("button",{onClick:function(e){e.preventDefault(),d((function(e){return(0,o.Z)((0,o.Z)({},e),{},{showDeleteModal:!1})})),r("")},className:"close-Icon",children:"X"})}),(0,g.jsxs)("div",{className:"content",children:[(0,g.jsxs)("p",{children:["Surely delete ",(0,g.jsx)("i",{children:(0,g.jsx)("b",{children:"News"})})," ?"]}),(0,g.jsxs)("div",{className:"decision-buttons-container",children:[(0,g.jsx)("button",{onClick:function(e){e.preventDefault(),x()},children:"Yes"}),(0,g.jsx)("button",{onClick:function(e){e.preventDefault(),d((function(e){return(0,o.Z)((0,o.Z)({},e),{},{showDeleteModal:!1})})),r("")},children:"No"})]})]})]})]})})},m=function(){var e,n,l,s,m,Z,j=(0,v.Z)().auth,C=(0,p.s0)(),N=(0,r.useState)([]),b=(0,d.Z)(N,2),k=b[0],D=b[1],y=(0,r.useState)(""),L=(0,d.Z)(y,2),S=L[0],U=L[1],I=(0,r.useState)({showloading:!1,readMoreDetails:!1,toggler:!1,showDeleteModal:!1}),M=(0,d.Z)(I,2),O=M[0],E=M[1],_=(0,r.useState)({optionsOpened:[],deatilsOpened:[]}),A=(0,d.Z)(_,2),B=A[0],F=A[1],T=(0,r.useRef)(),q=(0,r.useState)([]),z=(0,d.Z)(q,2),R=z[0],W=z[1],X=(0,r.useCallback)((0,t.Z)((0,i.Z)().mark((function e(){var n,l,t,d,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E((function(e){return(0,o.Z)((0,o.Z)({},e),{},{showloading:!0})})),e.prev=1,e.next=4,a().get("".concat(c.C,"/get-added-news"),{withCredentials:!0});case 4:200===(null===(n=e.sent)||void 0===n?void 0:n.status)?(D(null===n||void 0===n||null===(l=n.data)||void 0===l?void 0:l.addedItems),E((function(e){return(0,o.Z)((0,o.Z)({},e),{},{showloading:!1})}))):204===(null===n||void 0===n?void 0:n.status)&&(D([]),E((function(e){return(0,o.Z)((0,o.Z)({},e),{},{showloading:!1})})),U("No news found...")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),null!==e.t0&&void 0!==e.t0&&null!==(t=e.t0.response)&&void 0!==t&&t.data?401===(null===e.t0||void 0===e.t0||null===(d=e.t0.response)||void 0===d?void 0:d.status)?(0,u.Z)(j).then((function(e){var n,l;200===e.status?X():C("/".concat(null===j||void 0===j||null===(n=j.stagenameInUrl)||void 0===n||null===(l=n.trim())||void 0===l?void 0:l.toLowerCase(),"/sign-out"))})):(E((function(e){return(0,o.Z)((0,o.Z)({},e),{},{showloading:!1})})),(0,h.Z)(null===e.t0||void 0===e.t0||null===(s=e.t0.response)||void 0===s?void 0:s.status,U)):U("Network challenges...");case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),[j,C]);return(0,r.useEffect)((function(){X()}),[X]),(0,r.useEffect)((function(){S&&setTimeout((function(){U("")}),3e3)}),[S]),(0,g.jsxs)(g.Fragment,{children:[(null===O||void 0===O?void 0:O.showDeleteModal)&&(0,g.jsx)(x,{getData:X,selectedNews:R,setBools:E,feedback:S,setFeedback:U}),(null===O||void 0===O?void 0:O.showloading)&&(0,g.jsx)(f.Z,{}),(0,g.jsxs)("main",{className:"added-news",style:{paddingTop:"40px"},children:[(0,g.jsxs)("div",{className:"page-heading",children:["ADDED"," ",(0,g.jsx)("i",{children:(0,g.jsx)("b",{children:"NEWS"})})]}),(0,g.jsx)("div",{className:"feedback-container",style:S?{}:{backgroundColor:"transparent"},children:(0,g.jsx)("div",{className:"feeback",children:!(null!==O&&void 0!==O&&O.showDeleteModal)&&S})}),(0,g.jsx)("section",{className:"search-item",children:(0,g.jsx)("input",{ref:T,placeholder:"Enter news headline to search",onChange:function(){E((function(e){return(0,o.Z)((0,o.Z)({},e),{},{toggler:!(null!==O&&void 0!==O&&O.search)})}))}})}),(0,g.jsx)("div",{className:"add-new-button-container",style:{textAlign:"center"},children:null!==j&&void 0!==j&&j.websiteCreated?(0,g.jsx)(w.rU,{to:"/".concat(null===j||void 0===j||null===(e=j.stagenameInUrl)||void 0===e||null===(n=e.trim())||void 0===n?void 0:n.toLowerCase(),"/add-news"),children:"Add new"}):(0,g.jsx)(w.rU,{to:"/".concat(null===j||void 0===j||null===(l=j.stagenameInUrl)||void 0===l||null===(s=l.trim())||void 0===s?void 0:s.toLowerCase(),"/createwebsite"),children:"Create website"})}),(0,g.jsx)("section",{className:"fornews",style:0===(null===k||void 0===k||null===(m=k.filter((function(e){var n,l,i,o,t;return null!==T&&void 0!==T&&null!==(n=T.current)&&void 0!==n&&n.value?null===e||void 0===e||null===(l=e.headline)||void 0===l||null===(i=l.toLowerCase())||void 0===i?void 0:i.includes(null===T||void 0===T||null===(o=T.current)||void 0===o||null===(t=o.value)||void 0===t?void 0:t.toLowerCase()):e})))||void 0===m?void 0:m.length)?{padding:"0px",width:"70vw",borderBottom:"0px",overflow:"hidden"}:{},children:(null===k||void 0===k?void 0:k.length)>0&&(null===k||void 0===k?void 0:k.sort((function(e,n){return new Date(null===n||void 0===n?void 0:n.date)-new Date(null===e||void 0===e?void 0:e.date)})).filter((function(e){var n,l,i,o,t;return null!==T&&void 0!==T&&null!==(n=T.current)&&void 0!==n&&n.value?null===e||void 0===e||null===(l=e.headline)||void 0===l||null===(i=l.toLowerCase())||void 0===i?void 0:i.includes(null===T||void 0===T||null===(o=T.current)||void 0===o||null===(t=o.value)||void 0===t?void 0:t.toLowerCase()):e})).map((function(e){var n,l,i,t,d,s,a,r,u,c,v;return(0,g.jsxs)("div",{className:"indivial-item",style:(null===k||void 0===k?void 0:k.length)<2?{width:"70vw"}:{},children:[(0,g.jsxs)("div",{className:"item",style:(null===k||void 0===k?void 0:k.length)<2?{width:"100%"}:{},children:[(0,g.jsx)("div",{className:"headline",children:null===e||void 0===e||null===(n=e.headline)||void 0===n?void 0:n.toUpperCase()}),String(null===B||void 0===B?void 0:B.deatilsOpened[0])!==String(null===e||void 0===e?void 0:e._id)&&(0,g.jsxs)("div",{children:[(null===e||void 0===e||null===(l=e.details[0])||void 0===l?void 0:l.toUpperCase())+(null===e||void 0===e||null===(i=e.details)||void 0===i||null===(t=i.slice(1,150))||void 0===t?void 0:t.toLowerCase())," ",(null===e||void 0===e||null===(d=e.details)||void 0===d?void 0:d.length)>150&&(0,g.jsxs)("i",{className:"read-more",onClick:function(){var n,l;(null===B||void 0===B||null===(n=B.deatilsOpened)||void 0===n?void 0:n.length)>0&&(B.deatilsOpened=[]),null===B||void 0===B||null===(l=B.deatilsOpened)||void 0===l||l.push(null===e||void 0===e?void 0:e._id),E((function(e){return(0,o.Z)((0,o.Z)({},e),{},{toggler:!(null!==O&&void 0!==O&&O.toggler)})}))},children:[" ","...read more"]})]}),String(null===B||void 0===B?void 0:B.deatilsOpened[0])===String(null===e||void 0===e?void 0:e._id)&&(0,g.jsxs)("div",{children:[(null===e||void 0===e||null===(s=e.details[0])||void 0===s?void 0:s.toUpperCase())+(null===e||void 0===e||null===(a=e.details)||void 0===a||null===(r=a.slice(1,null===e||void 0===e||null===(u=e.details)||void 0===u?void 0:u.length))||void 0===r?void 0:r.toLowerCase())," ",(0,g.jsx)("i",{className:"fold-up",onClick:function(){B.deatilsOpened=[],E((function(e){return(0,o.Z)((0,o.Z)({},e),{},{toggler:!(null!==O&&void 0!==O&&O.toggler)})})),F((function(e){return(0,o.Z)((0,o.Z)({},e),{},{deatilsOpened:[]})}))},children:"fold up"})]})]}),(0,g.jsx)("div",{className:"options-container",children:(0,g.jsxs)("div",{className:"options",children:[(0,g.jsx)(w.rU,{to:"/".concat(null===j||void 0===j||null===(c=j.stagenameInUrl)||void 0===c||null===(v=c.trim())||void 0===v?void 0:v.toLowerCase(),"/edit-news/").concat(null===e||void 0===e?void 0:e._id),className:"edit",children:"Edit"}),(0,g.jsx)("button",{onClick:function(n){n.preventDefault(),W(e),E((function(e){return{showDeleteModal:!0}}))},className:"delete",children:"Delete"})]})})]},null===e||void 0===e?void 0:e._id)})))}),(0,g.jsx)("div",{style:{textAlign:"center",marginTop:"50px"},children:!(null!==O&&void 0!==O&&O.showloading)&&0===(null===k||void 0===k||null===(Z=k.filter((function(e){var n,l,i,o,t;return null!==T&&void 0!==T&&null!==(n=T.current)&&void 0!==n&&n.value?null===e||void 0===e||null===(l=e.headline)||void 0===l||null===(i=l.toLowerCase())||void 0===i?void 0:i.includes(null===T||void 0===T||null===(o=T.current)||void 0===o||null===(t=o.value)||void 0===t?void 0:t.toLowerCase()):e})))||void 0===Z?void 0:Z.length)&&(0,g.jsx)("span",{children:"No results found"})})]})]})}},4122:function(){}}]);
//# sourceMappingURL=451.6028e43b.chunk.js.map