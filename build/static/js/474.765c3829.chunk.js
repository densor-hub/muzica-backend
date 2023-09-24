"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[474],{3495:function(e,n,l){l.d(n,{fX:function(){return t},qb:function(){return i}});var t=function(e){var n=null===e||void 0===e?void 0:e.trim();if(null===n||void 0===n)return!1;var l=n.split("-")[0],t=Number(n.split("-")[1])-1,o=n.split("-")[2],r="".concat((new Date).getFullYear()),d="".concat((new Date).getMonth()),u="".concat((new Date).getDate());if(!i(n))return!1;if(Number(l)>Number(r))return!0;if(Number(l)<Number(r))return!1;if(Number(l)===Number(r)){if(Number(t>Number(d)))return!0;if(Number(t<Number(d)))return!1;if(Number(t)===Number(d)){if(Number(o)>=Number(u))return!0;if(Number(o)<Number(u))return!1}}},i=function(e){var n,l,t,i=e.trim(),o=i.split("-")[0],r=i.split("-")[1],d=i.split("-")[2];return!(!Number(o)||!Number(r)||!Number(d)||4!==(null===o||void 0===o?void 0:o.length)||null!==(n=String(o))&&void 0!==n&&n.startsWith("0")||Number(r)>12||Number(r<=0)||2!==(null===(l=String(r))||void 0===l?void 0:l.length)||d>31||Number(d<=0)||2!==(null===(t=String(d))||void 0===t?void 0:t.length))}},6638:function(e,n){n.Z=function(e,n){401===e?n("Unathorized..."):400===e?n("Bad request..."):405===e?n("Method not allowed..."):403===e?n("Error, request not allowed..."):404===e?n("Error, server rejected..."):409===e?n("Similar identity exists"):500===e&&n("Internal error...")}},4474:function(e,n,l){l.r(n);var t=l(4165),i=l(1413),o=l(5861),r=l(9439),d=l(4569),u=l.n(d),s=l(2791),a=l(408),c=l(6638),v=l(5332),h=l(3465),f=l(8781),p=l(7689),m=l(3495),x=(l(4395),l(6477),l(184));n.default=function(){var e=(0,h.Z)().auth,n=(0,p.s0)(),l=(0,s.useState)(-1),d=(0,r.Z)(l,2),b=d[0],N=d[1],j=(0,s.useMemo)((function(){return["New release","Tour","Event"]}),[]),w={valid:"white",error:"rgb(255, 71, 86)"},g=(0,s.useState)(""),Z=(0,r.Z)(g,2),y=Z[0],C=Z[1],k=(0,s.useRef)(),D=(0,s.useState)(""),E=(0,r.Z)(D,2),L=E[0],S=E[1],I=(0,s.useState)({showloading:!1}),U=(0,r.Z)(I,2),M=U[0],T=U[1],V=(0,s.useRef)([]),B=function(e){e&&!V.current.includes(e)?V.current.push(e):V.current.pop(e)},q=(0,s.useCallback)((0,o.Z)((0,t.Z)().mark((function l(){var o,r,d,s,h,f,p;return(0,t.Z)().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,u().get("".concat(a.C,"/get-upcoming:").concat(null===(o=window.location.pathname)||void 0===o?void 0:o.split("/")[(null===(r=window.location.pathname)||void 0===r?void 0:r.split("/").length)-1]),{withCredentials:!0});case 3:200===(null===(d=l.sent)||void 0===d?void 0:d.status)&&C(null===d||void 0===d||null===(s=d.data)||void 0===s?void 0:s.results),l.next=10;break;case 7:l.prev=7,l.t0=l.catch(0),null!==l.t0&&void 0!==l.t0&&null!==(h=l.t0.response)&&void 0!==h&&h.data?401===(null===l.t0||void 0===l.t0||null===(f=l.t0.response)||void 0===f?void 0:f.status)?(0,v.Z)(e).then((function(l){(0,v.Z)(e).then((function(l){var t,i;200===l.status?q():n("/".concat(null===e||void 0===e||null===(t=e.stagenameInUrl)||void 0===t||null===(i=t.trim())||void 0===i?void 0:i.toLowerCase(),"/sign-out"))}))})):(T((function(e){return(0,i.Z)((0,i.Z)({},e),{},{showloading:!1})})),(0,c.Z)(null===l.t0||void 0===l.t0||null===(p=l.t0.response)||void 0===p?void 0:p.status,S)):S("Network challenges...");case 10:case"end":return l.stop()}}),l,null,[[0,7]])}))),[e,n]);(0,s.useEffect)((function(){q()}),[q]);var Y=(0,s.useCallback)((0,o.Z)((0,t.Z)().mark((function l(){var o,r,d,s,h,f,p,x,b,N,g,Z,y,C,k,D,E,L;return(0,t.Z)().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(f={type:null===V||void 0===V||null===(o=V.current[0])||void 0===o?void 0:o.value,date:null===V||void 0===V||null===(r=V.current[1])||void 0===r?void 0:r.value,specifics:null===V||void 0===V||null===(d=V.current[2])||void 0===d?void 0:d.value,description:null===V||void 0===V||null===(s=V.current[3])||void 0===s?void 0:s.value},p=!1,x=!1,b=!1,null===(h=V.current)||void 0===h||h.forEach((function(e){if(""===(null===e||void 0===e?void 0:e.value))e.style.borderBottom="3px solid ".concat(w.error),S("Enter all fields"),x=!0;else{var n,l;if(e.style.borderBottom="3px solid ".concat(w.valid),"typeInput"===(null===e||void 0===e?void 0:e.className))j.includes((null===e||void 0===e?void 0:e.value[0].toUpperCase())+(null===e||void 0===e||null===(n=e.value)||void 0===n?void 0:n.slice(1,null===e||void 0===e||null===(l=e.value)||void 0===l?void 0:l.length).toLowerCase()))&&(p=!0);"date"!==(null===e||void 0===e?void 0:e.type)&&"date"!==(null===e||void 0===e?void 0:e.className)&&"date"!==(null===e||void 0===e?void 0:e.id)||((0,m.fX)(String(null===e||void 0===e?void 0:e.value))?b=!0:(S("Date must not be in the past"),e.style.borderBottom="3px solid ".concat(null===w||void 0===w?void 0:w.error)),(0,m.qb)(e.value)||(S("Invalid date"),e.style.borderBottom="3px solid ".concat(null===w||void 0===w?void 0:w.error)))}})),x||!p||!b){l.next=17;break}return T((function(e){return(0,i.Z)((0,i.Z)({},e),{},{showloading:!0})})),l.prev=7,l.next=10,u().patch("".concat(a.C,"/update-upcoming:").concat(null===(N=window.location.pathname)||void 0===N?void 0:N.split("/")[(null===(g=window.location.pathname)||void 0===g?void 0:g.split("/").length)-1]),f,{withCredentials:!0});case 10:200===(null===(Z=l.sent)||void 0===Z?void 0:Z.status)&&(S(""),n("/".concat(null===e||void 0===e||null===(y=e.stagenameInUrl)||void 0===y||null===(C=y.trim())||void 0===C?void 0:C.toLowerCase(),"/added-upcoming"))),l.next=17;break;case 14:l.prev=14,l.t0=l.catch(7),null!==l.t0&&void 0!==l.t0&&null!==(k=l.t0.response)&&void 0!==k&&k.data?401===(null===l.t0||void 0===l.t0||null===(E=l.t0.response)||void 0===E?void 0:E.status)?(0,v.Z)(e).then((function(l){var t,i;200===l.status?Y():n("/".concat(null===e||void 0===e||null===(t=e.stagenameInUrl)||void 0===t||null===(i=t.trim())||void 0===i?void 0:i.toLowerCase(),"/sign-out"))})):((0,c.Z)(null===l.t0||void 0===l.t0||null===(L=l.t0.response)||void 0===L?void 0:L.status,S),T((function(e){return(0,i.Z)((0,i.Z)({},e),{},{showloading:!1})}))):(null===(D=console)||void 0===D||D.log(l.t0),T((function(e){return(0,i.Z)((0,i.Z)({},e),{},{showloading:!1})})),S("Network error..."));case 17:case"end":return l.stop()}}),l,null,[[7,14]])}))),[n,e,null===w||void 0===w?void 0:w.error,null===w||void 0===w?void 0:w.valid,j]);return(0,s.useEffect)((function(){var e=function(e){k.current&&!k.current.contains(e.target)&&(T((function(e){return(0,i.Z)((0,i.Z)({},e),{},{showDropdown:!1})})),N(-1))};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[k,M,T]),(0,s.useEffect)((function(){var e=function(e){if(null!==k&&void 0!==k&&k.current){if("ArrowUp"===e.key){var n,l,t,i,o,r,d,u,s,a,c,v,h,f;if(-1===b)null===(o=k.current)||void 0===o||null===(r=o.childNodes[0])||void 0===r||null===(d=r.lastChild)||void 0===d||null===(u=d.firstChild)||void 0===u||u.focus(),N((null===(s=k.current)||void 0===s||null===(a=s.childNodes[0])||void 0===a||null===(c=a.childNodes)||void 0===c?void 0:c.length)-1);else console.log(b),N((function(e){return e-1})),0===b&&N((null===(v=k.current)||void 0===v||null===(h=v.childNodes[0])||void 0===h||null===(f=h.childNodes)||void 0===f?void 0:f.length)-1);null===(n=k.current)||void 0===n||null===(l=n.childNodes[0])||void 0===l||null===(t=l.childNodes[b])||void 0===t||null===(i=t.firstChild)||void 0===i||i.focus()}if("ArrowDown"===e.key){var p,m,x,j,w,g,Z,y,C,D,E;if(-1===b)N(1),null===(w=k.current)||void 0===w||null===(g=w.childNodes[0])||void 0===g||null===(Z=g.childNodes[0])||void 0===Z||null===(y=Z.firstChild)||void 0===y||y.focus();else N((function(e){return e+1})),b===(null===(C=k.current)||void 0===C||null===(D=C.childNodes[0])||void 0===D||null===(E=D.childNodes)||void 0===E?void 0:E.length)-1&&N(0);null===(p=k.current)||void 0===p||null===(m=p.childNodes[0])||void 0===m||null===(x=m.childNodes[b])||void 0===x||null===(j=x.firstChild)||void 0===j||j.focus()}}};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[b,k]),(0,x.jsxs)(x.Fragment,{children:[M.showloading&&(0,x.jsx)(f.Z,{}),""!==y&&(0,x.jsxs)("main",{children:[(0,x.jsx)("div",{className:"feedback-container",style:L?{}:{backgroundColor:"transparent"},children:(0,x.jsxs)("div",{className:"feeback",children:[" ",(0,x.jsx)("span",{style:{visibility:"hidden"},children:"."}),!(null!==M&&void 0!==M&&M.showDeleteModal)&&L]})}),(0,x.jsxs)("div",{className:"page-heading",children:["EDIT"," ",(0,x.jsx)("i",{children:(0,x.jsx)("b",{children:"UPCOMING"})})]}),(0,x.jsxs)("section",{className:"add-upcoming",children:[(0,x.jsx)("form",{className:"form1",children:(0,x.jsx)("table",{children:(0,x.jsxs)("tbody",{children:[(0,x.jsxs)("tr",{children:[(0,x.jsxs)("td",{className:"label",children:[(0,x.jsx)("label",{children:"Type"}),(0,x.jsx)("span",{children:"*"})]}),(0,x.jsx)("td",{children:(0,x.jsx)("input",{className:"typeInput",type:"text",ref:B,defaultValue:null===y||void 0===y?void 0:y.type,placeholder:"Select type",onClick:function(){T((function(e){return(0,i.Z)((0,i.Z)({},e),{},{showDropdown:!0})}))},onChange:function(){T((function(e){return(0,i.Z)((0,i.Z)({},e),{},{showDropdown:!0})}))}})})]}),(null===M||void 0===M?void 0:M.showDropdown)&&(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{}),(0,x.jsx)("td",{ref:k,children:(0,x.jsx)("div",{className:"type",ref:k,children:j.map((function(e,n){return(0,x.jsx)("div",{className:"individualType",children:(0,x.jsx)("button",{onClick:function(n){n.preventDefault(),V.current[0].value=e,T((function(e){return(0,i.Z)((0,i.Z)({},e),{},{showDropdown:!1})})),y&&C((function(n){return(0,i.Z)((0,i.Z)({},n),{},{type:e})}))},children:e})},n)}))})})]})]})})}),(0,x.jsx)("form",{className:"form2",children:(0,x.jsx)("table",{children:(0,x.jsxs)("tbody",{children:[(0,x.jsxs)("tr",{children:[(0,x.jsxs)("td",{className:"label",children:[" ",(0,x.jsx)("label",{children:"Date"}),(0,x.jsx)("span",{children:"*"})]}),(0,x.jsx)("td",{children:(0,x.jsx)("input",{type:"date",id:"date",className:"date",placeholder:"YYY-MM-DD",ref:B,defaultValue:null===y||void 0===y?void 0:y.date})})]}),(0,x.jsxs)("tr",{children:[(0,x.jsxs)("td",{className:"label",children:[(0,x.jsx)("label",{children:(null===y||void 0===y?void 0:y.type)===j[0]?"Title":(null===y||void 0===y?void 0:y.type)===j[1]?"Venue":(null===y||void 0===y?void 0:y.type)===j[2]?"Location":""})," ",(0,x.jsx)("span",{children:"*"})]}),(0,x.jsx)("td",{children:(0,x.jsx)("input",{type:"text",ref:B,defaultValue:null===y||void 0===y?void 0:y.specifics,placeholder:(null===y||void 0===y?void 0:y.type)===j[0]?"Title":(null===y||void 0===y?void 0:y.type)===j[1]?"Venue":(null===y||void 0===y?void 0:y.type)===j[2]?"Location":""})})]}),(0,x.jsxs)("tr",{children:[(0,x.jsxs)("td",{className:"label",children:[(0,x.jsx)("label",{children:"Description"}),(0,x.jsx)("span",{children:"*"})]}),(0,x.jsx)("td",{children:(0,x.jsx)("textarea",{type:"text",ref:B,defaultValue:null===y||void 0===y?void 0:y.description,placeholder:"Description"})})]}),(0,x.jsxs)("tr",{style:{textAlign:"center"},children:[(0,x.jsx)("td",{children:(0,x.jsx)("button",{onClick:function(e){e.preventDefault(),Y()},children:"Save"})}),(0,x.jsx)("td",{children:(0,x.jsx)("button",{onClick:function(l){var t,i;l.preventDefault(),n("/".concat(null===e||void 0===e||null===(t=e.stagenameInUrl)||void 0===t||null===(i=t.trim())||void 0===i?void 0:i.toLowerCase(),"/added-upcoming"))},children:"Cancel"})})]})]})})})]})]})]})}},4395:function(){}}]);
//# sourceMappingURL=474.765c3829.chunk.js.map