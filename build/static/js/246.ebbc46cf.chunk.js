"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[246],{6638:function(e,n){n.Z=function(e,n){401===e?n("Unathorized..."):400===e?n("Bad request..."):405===e?n("Method not allowed..."):403===e?n("Error, request not allowed..."):404===e?n("Error, server rejected..."):409===e?n("Similar identity exists"):500===e&&n("Internal error...")}},2642:function(e,n,t){t.d(n,{Z:function(){return p}});var i=t(4165),l=t(1413),o=t(5861),a=t(9439),s=t(2791),d=t(408),r=t(4569),c=t.n(r),u=t(5332),v=t(6638),m=t(3465),f=t(7689),h=t(8781),g=t(811),x=t(184),p=function(e){var n=e.addedImages,t=e.setSelectedImage,r=e.selectedImage,p=e.setParentFeedback,j=e.showDeleteButton,k=e.getData,Z=e.setBools,w=(0,f.s0)(),b=(0,m.Z)().auth,I=(0,s.useState)(null===r||void 0===r?void 0:r.index),y=(0,a.Z)(I,2),N=y[0],D=y[1],C=(0,s.useState)(!1),S=(0,a.Z)(C,2),E=S[0],_=S[1],B=(0,s.useState)(""),F=(0,a.Z)(B,2),L=F[0],P=F[1],U=(0,s.useRef)(),q=(0,s.useRef)(),A=(0,s.useCallback)((function(e){"Escape"===(null===e||void 0===e?void 0:e.key)&&t("")}),[t]);(0,s.useEffect)((function(){var e;return null===(e=document)||void 0===e||e.addEventListener("keydown",A),function(){var e;null===(e=document)||void 0===e||e.removeEventListener("keydown",A)}}),[t,A]);var M=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var o,a,s,r,m,f;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!0),e.next=4,c().put("".concat(d.C,"/delete-images:").concat(null===(o=n[N])||void 0===o?void 0:o._id),{selectedItem:null===n||void 0===n||null===(a=n[N])||void 0===a?void 0:a._id},{withCredentials:!0});case 4:200===(null===(s=e.sent)||void 0===s?void 0:s.status)?k().then((function(){Z((function(e){return(0,l.Z)((0,l.Z)({},e),{},{showDeleteModal:!1})})),p("Deleted successfully..."),t("")})):204===(null===s||void 0===s?void 0:s.status)&&(_(!1),P("Image already deleted..")),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),null!==e.t0&&void 0!==e.t0&&null!==(r=e.t0.response)&&void 0!==r&&r.data?401===(null===e.t0||void 0===e.t0||null===(m=e.t0.response)||void 0===m?void 0:m.status)?(0,u.Z)(b).then((function(e){var n,t;200===(null===e||void 0===e?void 0:e.status)?M():w("/".concat(null===b||void 0===b||null===(n=b.stagenameInUrl)||void 0===n||null===(t=n.trim())||void 0===t?void 0:t.toLowerCase(),"/sign-out"))})):(_(!1),(0,v.Z)(null===e.t0||void 0===e.t0||null===(f=e.t0.response)||void 0===f?void 0:f.status,P)):(_(!1),P("Network challenges..."));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,x.jsxs)(x.Fragment,{children:[E&&(0,x.jsx)(h.Z,{}),(0,x.jsxs)("main",{className:"image-viewer-container",children:[(0,x.jsx)("div",{className:"close-button-container",children:(0,x.jsx)("button",{onClick:function(e){e.preventDefault(),t("")},children:"X"})}),(0,x.jsx)("div",{className:"feedback-conatiner",children:(0,x.jsx)("div",{className:"feedback",style:{textAlign:"center"},children:L})}),(0,x.jsx)("div",{className:"image-container",children:(0,x.jsx)("img",{alt:null===b||void 0===b?void 0:b.stagenameInUrl,src:(0,g.Z)(n[N])})}),(0,x.jsxs)("div",{className:"navigation-buttons",children:[(0,x.jsx)("button",{onClick:function(e){e.preventDefault(),!!0||N<=0?(D((null===n||void 0===n?void 0:n.length)-1),!1):(D((function(e){return e-1})),!1)},ref:q,children:"Previous"}),j&&(0,x.jsx)("button",{onClick:function(e){e.preventDefault(),M()},children:"Delete"}),(0,x.jsx)("button",{onClick:function(e){e.preventDefault(),!0&&N!==(null===n||void 0===n?void 0:n.length)-1?(D((function(e){return e+1})),!1):(D(0),!1)},ref:U,children:"Next"})]})]})]})}},9246:function(e,n,t){t.r(n),t.d(n,{default:function(){return r}});var i=t(1413),l=t(9439),o=t(2791),a=t(2642),s=t(811),d=t(184),r=function(e){var n=e.addedImages,t=(0,o.useState)(""),i=(0,l.Z)(t,2),r=i[0],u=i[1],v=(0,o.useState)(""),m=(0,l.Z)(v,2),f=m[0],h=m[1];return console.log((0,s.Z)(n[0])),(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("main",{className:"image-site",children:[(0,d.jsx)("div",{className:"large-icon",children:"Gallery"}),(0,d.jsx)("div",{className:"feedback-container",children:f}),0===(null===r||void 0===r?void 0:r.length)&&(null===n||void 0===n?void 0:n.length)>0?(0,d.jsx)("section",{className:"items-container",children:null===n||void 0===n?void 0:n.sort((function(e,n){return new Date(null===n||void 0===n?void 0:n.datereleased)-new Date(e.datereleased)})).map((function(e,n){return(0,d.jsx)("div",{className:"individual-item",children:(0,d.jsx)(c,{alt:"",element:e,Index:n,setSelectedImage:u})},null===e||void 0===e?void 0:e._id)}))}):(0,d.jsxs)("div",{style:{textAlign:"center",color:"white",border:"1px solid white",margin:"0 auto",padding:"20px"},children:[" ","check here from time to time for my images.."]}),r&&(0,d.jsx)(a.Z,{addedImages:n,selectedImage:r,setSelectedImage:u,setParentFeedback:h,showDeleteButton:!1})]})})},c=function(e){var n=e.element,t=e.style,l=e.alt,o=e.Index,a=e.setSelectedImage;return(0,d.jsx)("img",{src:(0,s.Z)(n),alt:l,style:(0,i.Z)({},t),onClick:function(e){a({image:{_id:null===n||void 0===n?void 0:n._id},index:o})}})}}}]);
//# sourceMappingURL=246.ebbc46cf.chunk.js.map