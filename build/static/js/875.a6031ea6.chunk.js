"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[875],{3843:function(n,e,l){l.d(e,{Xc:function(){return i},go:function(){return t}});var i=function(n){if(!n||null===n||void 0===n)return""===n||" "===n?n.trim():n;var e,l=[];if(n.split(" ").length<2)return!1;for(var i=0;i<n.split(" ").length;i++)""!==n.split(" ")[i]&&l.push(n.split(" ")[i]);if(l.length<2)return!1;for(i=0;i<=l.length;i++){if(i!==l.length){var t=l[i];e=e+" "+(t.slice(0,1).toUpperCase()+t.slice(1,t.length).toLowerCase()).trim()}if(i===l.length)return e.split("undefined")[1].trim()}},t=function(n){return""===n||null===n||void 0===n?""===n||" "===n?n.trim():n:2===n.split("@").length&&(!o(n.split("@")[1])&&!o(n.split("@")[0])&&(!(n.split("@")[1].split(".").length<=1)&&(""!==n.split("@")[1].split(".")[1]&&""!==n.split("@")[1].split(".")[0]&&!n.endsWith("."))))},o=function(n){return!!(n.includes("~")||n.includes("!")||n.includes("#")||n.includes("$")||n.includes("%")||n.includes("^")||n.includes("&")||n.includes("*")||n.includes("(")||n.includes(")")||n.includes("_")||n.includes("=")||n.includes("+")||n.includes("?")||n.includes("/")||n.includes(">")||n.includes(",")||n.includes("<")||n.includes("|")||n.includes("@"))}},6638:function(n,e){e.Z=function(n,e){401===n?e("Unathorized..."):400===n?e("Bad request..."):405===n?e("Method not allowed..."):403===n?e("Error, request not allowed..."):404===n?e("Error, server rejected..."):409===n?e("Similar identity exists"):500===n&&e("Internal error...")}},4875:function(n,e,l){l.r(e),l.d(e,{default:function(){return j}});var i=l(4165),t=l(1413),o=l(5861),d=l(9439),s=l(5332),u=l(6638),a=l(4569),r=l.n(a),c=l(8781),v=l(408),f=l(2791),h=l(3465),p=l(7689),m=l(3700),g=l(3843),x=(l(4122),l(184)),Z=function(n){var e=n.setLogics,l=n.setFeedback,a=n.getData,m=n.feedback,g=(0,h.Z)(),Z=g.auth,w=g.setAuth,b=(0,f.useState)({showloading:!1}),j=(0,d.Z)(b,2),y=j[0],k=j[1],N=(0,p.s0)(),C=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(){var o,d,c,f,h;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!==Z&&void 0!==Z&&Z.image&&""!==(null===Z||void 0===Z?void 0:Z.image)){n.next=4;break}l("No Display picture available"),n.next=16;break;case 4:return n.prev=4,k((function(n){return(0,t.Z)((0,t.Z)({},n),{},{showloading:!0})})),n.next=8,null===r()||void 0===r()?void 0:r().put("".concat(v.C,"/user"),{action:"DP"},{withCredentials:!0});case 8:200===(null===(o=n.sent)||void 0===o?void 0:o.status)&&(w(null===o||void 0===o?void 0:o.data),a().then((function(){e((function(n){return(0,t.Z)((0,t.Z)({},n),{},{showloading:!1,showDeleteProfilePicturModal:!1})})),l("Display picture deleted successfully")}))),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(4),null===(d=console)||void 0===d||d.log(n.t0),null!==n.t0&&void 0!==n.t0&&null!==(c=n.t0.response)&&void 0!==c&&c.data?401===(null===n.t0||void 0===n.t0||null===(f=n.t0.response)||void 0===f?void 0:f.status)?(0,s.Z)(Z).then((function(n){var e,l;200===(null===n||void 0===n?void 0:n.status)?C():N("/".concat(null===Z||void 0===Z||null===(e=Z.stagenameInUrl)||void 0===e||null===(l=e.trim())||void 0===l?void 0:l.toLowerCase(),"/sign-out"))})):(k((function(n){return(0,t.Z)((0,t.Z)({},n),{},{showloading:!1})})),(0,u.Z)(null===n.t0||void 0===n.t0||null===(h=n.t0.response)||void 0===h?void 0:h.status,l)):(k((function(n){return(0,t.Z)((0,t.Z)({},n),{},{showloading:!1})})),l("Network challenges..."));case 16:case"end":return n.stop()}}),n,null,[[4,12]])})));return function(){return n.apply(this,arguments)}}();return(0,x.jsxs)(x.Fragment,{children:[(null===y||void 0===y?void 0:y.showloading)&&(0,x.jsx)(c.Z,{}),(0,x.jsxs)("main",{className:"modal-container",children:[(0,x.jsx)("div",{className:"feedback-container",style:m?{}:{backgroundColor:"transparent"},children:(0,x.jsxs)("div",{className:"feedback",children:[m,(0,x.jsx)("span",{style:{visibility:"hidden"},children:"."})]})}),(0,x.jsxs)("div",{className:"content-container",children:[(0,x.jsx)("div",{className:"close-button-container",children:(0,x.jsx)("button",{className:"close-Icon",onClick:function(n){n.preventDefault(),e((function(n){return(0,t.Z)((0,t.Z)({},n),{},{showDeleteProfilePicturModal:!1})}))},children:"X"})}),(0,x.jsxs)("div",{className:"content",children:[(0,x.jsx)("div",{children:"Surely delete display picture ?"}),(0,x.jsxs)("div",{className:"decision-buttons-container",children:[(0,x.jsx)("button",{onClick:function(n){n.preventDefault(),C()},children:"Yes"}),(0,x.jsx)("button",{onClick:function(){e((function(n){return(0,t.Z)((0,t.Z)({},n),{},{showDeleteProfilePicturModal:!1})}))},children:"Cancel"})]})]})]})]})]})},w=l(6355),b=(l(6477),l(469),l(811)),j=function(){var n=(0,h.Z)(),e=n.auth,l=n.setAuth,a=(0,p.s0)(),b=(0,f.useState)(""),j=(0,d.Z)(b,2),k=j[0],N=j[1],C=(0,f.useState)({showloading:!1,showGenderOptionsBtns:!1,editMode:!1,showDeleteProfilePicturModal:!1}),D=(0,d.Z)(C,2),P=D[0],B=D[1],I=(0,f.useState)(""),E=(0,d.Z)(I,2),O=E[0],M=E[1],U=(0,f.useState)(""),S=(0,d.Z)(U,2),L=S[0],G=S[1],F=(0,f.useState)(""),T=(0,d.Z)(F,2),q=T[0],R=T[1],V=["Male","Female"],A={valid:"white",error:"rgb(255, 71, 86)"},X=(0,f.useRef)([]),z=(0,f.useRef)(),W=function(n){var e,l;!n||null!==X&&void 0!==X&&null!==(e=X.current)&&void 0!==e&&e.includes(n)||(null===X||void 0===X||null===(l=X.current)||void 0===l||l.push(n))},H=(0,f.useCallback)((0,o.Z)((0,i.Z)().mark((function n(){var l,o,d,c,f,h;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,B((function(n){return(0,t.Z)((0,t.Z)({},n),{},{showloading:!0})})),n.next=4,r().get("".concat(v.C,"/user"),{withCredentials:!0});case 4:if(200!==(null===(l=n.sent)||void 0===l?void 0:l.status)){n.next=10;break}return N(null===l||void 0===l?void 0:l.data),M(null===l||void 0===l||null===(o=l.data)||void 0===o?void 0:o.phone),B((function(n){return(0,t.Z)((0,t.Z)({},n),{},{showloading:!1})})),n.abrupt("return",null===l||void 0===l?void 0:l.status);case 10:n.next=16;break;case 12:n.prev=12,n.t0=n.catch(0),null===(d=console)||void 0===d||d.log(n.t0),null!==n.t0&&void 0!==n.t0&&null!==(c=n.t0.response)&&void 0!==c&&c.data?401===(null===n.t0||void 0===n.t0||null===(f=n.t0.response)||void 0===f?void 0:f.status)?(0,s.Z)(e).then((function(n){var l,i;200===(null===n||void 0===n?void 0:n.status)?H():a("/".concat(null===e||void 0===e||null===(l=e.stagenameInUrl)||void 0===l||null===(i=l.trim())||void 0===i?void 0:i.toLowerCase(),"/sign-out"))})):(B((function(n){return(0,t.Z)((0,t.Z)({},n),{},{showloading:!1})})),(0,u.Z)(null===n.t0||void 0===n.t0||null===(h=n.t0.response)||void 0===h?void 0:h.status,G)):(B((function(n){return(0,t.Z)((0,t.Z)({},n),{},{showloading:!1})})),G("Network challenges..."));case 16:case"end":return n.stop()}}),n,null,[[0,12]])}))),[e,a]);(0,f.useEffect)((function(){H()}),[H]),(0,f.useEffect)((function(){L&&setTimeout((function(){G("")}),3e3)}),[L]);var Y=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(){var o,d,c,f,h,p,x,Z,w,b,j,y,k,N,C,D,I,E,M,U,S,L,F;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(h=!1,null===P||void 0===P||!P.showGenderOptionsBtns){n.next=5;break}G("Select gender"),n.next=20;break;case 5:if(!0,null===X||void 0===X||null===(p=X.current)||void 0===p||p.forEach((function(n){"email"!==(null===n||void 0===n?void 0:n.className)&&""===(null===n||void 0===n?void 0:n.value)&&G("Enter required fields"),"gender"!==(null===n||void 0===n?void 0:n.className)&&"stagename"!==(null===n||void 0===n?void 0:n.className)&&"fullname"!==(null===n||void 0===n?void 0:n.className)||(""===(null===n||void 0===n?void 0:n.value)?n.style.borderBottom="3px solid ".concat(null===A||void 0===A?void 0:A.error):n.style.borderBottom="3px solid ".concat(null===A||void 0===A?void 0:A.valid)),"fullname"===(null===n||void 0===n?void 0:n.className)&&((0,g.Xc)(null===n||void 0===n?void 0:n.value)?(n.style.borderBottom="3px solid ".concat(null===A||void 0===A?void 0:A.valid),o=!0):(G("Invalid fullname"),n.style.borderBottom="3px solid ".concat(null===A||void 0===A?void 0:A.error))),"email"===(null===n||void 0===n?void 0:n.className)&&null!==n&&void 0!==n&&n.value&&(h=!0,(0,g.go)(null===n||void 0===n?void 0:n.value)?(n.style.borderBottom="3px solid ".concat(null===A||void 0===A?void 0:A.valid),d=!0):(n.style.borderBottom="3px solid ".concat(null===A||void 0===A?void 0:A.error),G("Invalid email"))),"stagename"===(null===n||void 0===n?void 0:n.className)&&""!==(null===n||void 0===n?void 0:n.value)&&(c=!0)})),O?(0,m.yf)(O)?(document.getElementsByClassName("PhoneInput")[0].style.borderBottom="3px solid ".concat(null===A||void 0===A?void 0:A.valid),f=!0):(G("Invalid number"),document.getElementsByClassName("PhoneInput")[0].style.borderBottom="3px solid ".concat(null===A||void 0===A?void 0:A.error)):(G("Enter required fields"),document.getElementsByClassName("PhoneInput")[0].style.borderBottom="3px solid ".concat(null===A||void 0===A?void 0:A.error)),!(o&&(!h||h&&d)&&c&&f)){n.next=20;break}return n.prev=9,B((function(n){return(0,t.Z)((0,t.Z)({},n),{},{showloading:!0})})),n.next=13,null===r()||void 0===r()?void 0:r().post("".concat(v.C,"/user"),{fullname:null===X||void 0===X||null===(x=X.current[0])||void 0===x?void 0:x.value.trim(),phone:O.trim(),gender:null===X||void 0===X||null===(Z=X.current[2])||void 0===Z?void 0:Z.value.trim(),stagename:null===X||void 0===X||null===(w=X.current[3])||void 0===w?void 0:w.value.trim(),email:null===X||void 0===X||null===(b=X.current[4])||void 0===b?void 0:b.value.trim()},{withCredentials:!0});case 13:200===(null===(j=n.sent)||void 0===j?void 0:j.status)?(l({accessToken:null===j||void 0===j||null===(y=j.data)||void 0===y?void 0:y.accessToken,id:null===e||void 0===e?void 0:e.id,stagename:null===j||void 0===j||null===(k=j.data)||void 0===k?void 0:k.stagename,stagenameInUrl:null===j||void 0===j||null===(N=j.data)||void 0===N?void 0:N.stagenameInUrl,profilePicture:null===j||void 0===j||null===(C=j.data)||void 0===C?void 0:C.profilePicture,websiteCreated:null===j||void 0===j||null===(D=j.data)||void 0===D?void 0:D.websiteCreated}),a("/".concat(null===j||void 0===j||null===(I=j.data)||void 0===I||null===(E=I.stagenameInUrl)||void 0===E||null===(M=E.trim())||void 0===M?void 0:M.toLowerCase(),"/settings")),null===X||void 0===X||null===(U=X.current)||void 0===U||U.forEach((function(n){n.readOnly=!0})),B((function(n){return(0,t.Z)((0,t.Z)({},n),{},{showloading:!1,editMode:!1})})),G("Saved successfully")):204===(null===j||void 0===j?void 0:j.status)&&(B((function(n){return(0,t.Z)((0,t.Z)({},n),{},{showloading:!1})})),G("Could not save, try again later")),n.next=20;break;case 17:n.prev=17,n.t0=n.catch(9),null!==n.t0&&void 0!==n.t0&&null!==(S=n.t0.response)&&void 0!==S&&S.data?401===(null===n.t0||void 0===n.t0||null===(L=n.t0.response)||void 0===L?void 0:L.status)?(0,s.Z)(e).then((function(n){var l,i;200===(null===n||void 0===n?void 0:n.status)?Y():a("/".concat(null===e||void 0===e||null===(l=e.stagenameInUrl)||void 0===l||null===(i=l.trim())||void 0===i?void 0:i.toLowerCase(),"/sign-out"))})):(B((function(n){return(0,t.Z)((0,t.Z)({},n),{},{showloading:!1})})),(0,u.Z)(null===n.t0||void 0===n.t0||null===(F=n.t0.response)||void 0===F?void 0:F.status,G)):(B((function(n){return(0,t.Z)((0,t.Z)({},n),{},{showloading:!1})})),G("Network challenges..."));case 20:case"end":return n.stop()}}),n,null,[[9,17]])})));return function(){return n.apply(this,arguments)}}(),$=function n(){null===X||void 0===X||X.current.forEach(function(){var d=(0,o.Z)((0,i.Z)().mark((function o(d){var c,f,h,p,m,g,x;return(0,i.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if("file"!==d.type){i.next=18;break}if(0===(null===d||void 0===d||null===(c=d.files)||void 0===c?void 0:c.length)){i.next=18;break}return R((function(n){return(0,t.Z)((0,t.Z)({},n),{},{url:URL.createObjectURL(d.files[0]),image:d.files[0]})})),null===(f=new FormData)||void 0===f||f.append("file",null===d||void 0===d?void 0:d.files[0]),null===f||void 0===f||f.append("image",q),i.prev=6,B((function(n){return(0,t.Z)((0,t.Z)({},n),{},{showloading:!0})})),i.next=10,null===r()||void 0===r()?void 0:r().post("".concat(v.C,"/user"),f,{withCredentials:!0});case 10:200===(null===(h=i.sent)||void 0===h?void 0:h.status)&&(B((function(n){return(0,t.Z)((0,t.Z)({},n),{},{showloading:!1})})),l((function(n){var e;return(0,t.Z)((0,t.Z)({},n),{},{image:null===h||void 0===h||null===(e=h.data)||void 0===e?void 0:e.image})})),H().then((function(n){200===n&&(B((function(n){return(0,t.Z)((0,t.Z)({},n),{},{showDeleteProfilePicturModal:!1})})),G("Display picture saved successfully"))}))),i.next=18;break;case 14:i.prev=14,i.t0=i.catch(6),null===(p=console)||void 0===p||p.log(i.t0),null!==i.t0&&void 0!==i.t0&&null!==(m=i.t0.response)&&void 0!==m&&m.data?401===(null===i.t0||void 0===i.t0||null===(g=i.t0.response)||void 0===g?void 0:g.status)?(0,s.Z)(e).then((function(l){var i,t;200===(null===l||void 0===l?void 0:l.status)?n():a("/".concat(null===e||void 0===e||null===(i=e.stagenameInUrl)||void 0===i||null===(t=i.trim())||void 0===t?void 0:t.toLowerCase(),"/sign-out"))})):(B((function(n){return(0,t.Z)((0,t.Z)({},n),{},{showloading:!1})})),(0,u.Z)(null===i.t0||void 0===i.t0||null===(x=i.t0.response)||void 0===x?void 0:x.status,G)):(B((function(n){return(0,t.Z)((0,t.Z)({},n),{},{showloading:!1})})),G("Network challenges..."));case 18:case"end":return i.stop()}}),o,null,[[6,14]])})));return function(n){return d.apply(this,arguments)}}())};return(0,f.useEffect)((function(){L&&setTimeout((function(){G("")}),3e3)}),[L]),(0,x.jsxs)(x.Fragment,{children:[(null===P||void 0===P?void 0:P.showloading)&&(0,x.jsx)(c.Z,{}),(null===P||void 0===P?void 0:P.showDeleteProfilePicturModal)&&(0,x.jsx)(Z,{setFeedback:G,setLogics:B,getData:H}),(0,x.jsxs)("main",{className:"settings",style:{paddingTop:"40px"},children:[(0,x.jsx)("div",{className:"reset-password-request-btn",children:null!==k&&void 0!==k&&k.image&&""!==(null===k||void 0===k?void 0:k.image)?(0,x.jsxs)("div",{children:[(0,x.jsx)("button",{onClick:function(n){var e;n.preventDefault(),null===X||void 0===X||null===(e=X.current)||void 0===e||e.find((function(n){return"file"===(null===n||void 0===n?void 0:n.type)})).click()},children:"Change DP"}),(0,x.jsx)("button",{onClick:function(n){n.preventDefault(),B((function(n){return(0,t.Z)((0,t.Z)({},n),{},{showDeleteProfilePicturModal:!0})}))},children:"Remove DP"})]}):(0,x.jsx)("button",{onClick:function(n){var e;n.preventDefault(),null===X||void 0===X||null===(e=X.current)||void 0===e||e.find((function(n){return"file"===(null===n||void 0===n?void 0:n.type)})).click()},children:"Upload DP"})}),(0,x.jsx)("div",{className:"feedback-container",style:L?{margin:"0px",position:"relative",top:"-5px"}:{backgroundColor:"transparent",margin:"0px"},children:(0,x.jsxs)("div",{className:"feedback",children:[(0,x.jsx)("span",{style:{visibility:"hidden"},children:"."}),L]})}),""!==(null===k||void 0===k?void 0:k.length)&&(0,x.jsxs)("section",{className:"general-settings",children:[(0,x.jsx)("div",{className:"image-container",children:""!==(null===k||void 0===k?void 0:k.image)&&void 0!==(null===k||void 0===k?void 0:k.image)&&null!==(null===k||void 0===k?void 0:k.image)?(0,x.jsx)(y,{element:k,alt:null===e||void 0===e?void 0:e.stagenameInUrl}):(0,x.jsx)(w.m3W,{size:"30px"})}),(0,x.jsx)("div",{className:"heading",children:"Account details"}),(0,x.jsx)("div",{className:"label",children:"Full name"}),(0,x.jsx)("div",{className:"input-container",children:(0,x.jsx)("input",{className:"fullname",ref:W,defaultValue:null===k||void 0===k?void 0:k.fullname,readOnly:!0})}),(0,x.jsx)("div",{className:"label",children:"Phone"}),(0,x.jsx)("div",{className:"input-container",ref:z,children:(0,x.jsx)(m.ZP,{onChange:M,defaultCountry:"GH",ref:W,value:O,readOnly:!0})}),(0,x.jsx)("div",{className:"label",children:"Gender"}),(0,x.jsxs)("div",{className:"input-container",children:[(0,x.jsx)("input",{readOnly:!0,style:null!==P&&void 0!==P&&P.showGenderOptionsBtns?{height:"0px",width:"0px",visibility:"hidden",overflow:"hidden",opacity:"0"}:{},className:"gender",ref:W,defaultValue:null===k||void 0===k?void 0:k.gender,onChange:function(n){"Tab"!==n.key&&B((function(n){return(0,t.Z)((0,t.Z)({},n),{},{showGenderOptionsBtns:!0})}))}}),(null===P||void 0===P?void 0:P.showGenderOptionsBtns)&&(0,x.jsx)("div",{className:"genderOptionsBtns-container",children:null===V||void 0===V?void 0:V.map((function(n,e){return(0,x.jsx)("button",{onClick:function(e){e.preventDefault(),B((function(n){return(0,t.Z)((0,t.Z)({},n),{},{showGenderOptionsBtns:!1})})),X.current[2].value=n},children:n},e)}))})]}),(0,x.jsx)("div",{className:"label",children:"Stage name"}),(0,x.jsx)("div",{className:"input-container",children:(0,x.jsx)("input",{className:"stagename",ref:W,defaultValue:null===k||void 0===k?void 0:k.stagename,readOnly:!0})}),(0,x.jsx)("div",{className:"label",children:"Email"}),(0,x.jsx)("div",{className:"input-container",children:(0,x.jsx)("input",{className:"email",ref:W,defaultValue:null===k||void 0===k?void 0:k.email,readOnly:!0})}),(null===P||void 0===P?void 0:P.editMode)&&(0,x.jsxs)("div",{className:"decision-buttons-container",children:[(0,x.jsx)("button",{onClick:function(n){n.preventDefault(),Y()},children:"Save"}),(0,x.jsx)("button",{onClick:function(n){var e;n.preventDefault(),null===X||void 0===X||null===(e=X.current)||void 0===e||e.forEach((function(n){n.readOnly=!0})),B((function(n){return(0,t.Z)((0,t.Z)({},n),{},{editMode:!1})}))},children:"Cancel"})]}),!(null!==P&&void 0!==P&&P.editMode)&&(0,x.jsx)("div",{className:"decision-buttons-container",children:(0,x.jsx)("button",{onClick:function(n){var e,l;n.preventDefault(),null===X||void 0===X||null===(e=X.current)||void 0===e||e.forEach((function(n){n.readOnly=!1})),B((function(n){return(0,t.Z)((0,t.Z)({},n),{},{editMode:!0})})),null===X||void 0===X||null===(l=X.current[0])||void 0===l||l.focus()},children:"Click here to edit"})})]}),(0,x.jsx)("section",{children:(0,x.jsx)("div",{className:"input-container",style:{height:"0px",width:"0px",overflow:"0px",visibility:"hidden",opacity:"0"},children:(0,x.jsx)("input",{type:"file",ref:W,onChange:function(n){$()},accept:".jpg,.jpeg,.png,.svg,.heic",style:{height:"0px",width:"0px",overflow:"0px",visibility:"hidden",opacity:"0"}})})})]})]})},y=function(n){var e=n.element,l=n.auth;return(0,x.jsx)("img",{src:(0,b.Z)(e),alt:null===l||void 0===l?void 0:l.stagenameInUrl})}},4122:function(){},469:function(){}}]);
//# sourceMappingURL=875.a6031ea6.chunk.js.map