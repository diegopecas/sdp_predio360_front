"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[2561],{1338:(zt,xt,Y)=>{Y.d(xt,{F:()=>vt});var R=Y(76210);const dt={width:12,height:6,strokeWidth:1},vt=({floatingLayout:x,key:V,ref:q})=>{const{width:E,height:P,strokeWidth:tt}=dt,B=E/2,$="vertical"===x,gt=`M0,0 H${E} L${E-B},${P} Q${B},${P} ${B},${P} Z`;return(0,R.h)("svg",{"aria-hidden":"true",class:"calcite-floating-ui-arrow",height:E,key:V,ref:q,viewBox:`0 0 ${E} ${E+($?0:tt)}`,width:E+($?tt:0)},tt>0&&(0,R.h)("path",{class:"calcite-floating-ui-arrow__stroke",d:gt,fill:"none","stroke-width":tt+1}),(0,R.h)("path",{d:gt,stroke:"none"}))}},96678:(zt,xt,Y)=>{Y.d(xt,{S:()=>q,a:()=>Lt,b:()=>St,c:()=>Ct,d:()=>qt,f:()=>K,i:()=>Mt,r:()=>x});const K="object"==typeof global&&global&&global.Object===Object&&global;var dt="object"==typeof self&&self&&self.Object===Object&&self,vt=K||dt||Function("return this")();const x=vt;var V=vt.Symbol;const q=V;var E=Object.prototype,P=E.hasOwnProperty,tt=E.toString,B=V?V.toStringTag:void 0,wt=Object.prototype.toString,D="[object Null]",N="[object Undefined]",Z=V?V.toStringTag:void 0;function St(m){return null==m?void 0===m?N:D:Z&&Z in Object(m)?function $(m){var S=P.call(m,B),G=m[B];try{m[B]=void 0;var ot=!0}catch{}var ft=tt.call(m);return ot&&(S?m[B]=G:delete m[B]),ft}(m):function et(m){return wt.call(m)}(m)}function Ct(m){return null!=m&&"object"==typeof m}var at="[object Symbol]";function Lt(m){return"symbol"==typeof m||Ct(m)&&St(m)==at}var jt=/\s/,Dt=/^\s+/;function Mt(m){var S=typeof m;return null!=m&&("object"==S||"function"==S)}var bt=NaN,Kt=/^[-+]0x[0-9a-f]+$/i,Ft=/^0b[01]+$/i,mt=/^0o[0-7]+$/i,It=parseInt;function Nt(m){if("number"==typeof m)return m;if(Lt(m))return bt;if(Mt(m)){var S="function"==typeof m.valueOf?m.valueOf():m;m=Mt(S)?S+"":S}if("string"!=typeof m)return 0===m?m:+m;m=function Yt(m){return m&&m.slice(0,function Xt(m){for(var S=m.length;S--&&jt.test(m.charAt(S)););return S}(m)+1).replace(Dt,"")}(m);var G=Ft.test(m);return G||mt.test(m)?It(m.slice(2),G?2:8):Kt.test(m)?bt:+m}const _t=function(){return x.Date.now()};var Gt="Expected a function",Qt=Math.max,Jt=Math.min;function qt(m,S,G){var ot,ft,Ot,pt,W,ut,At=0,Ht=!1,Tt=!1,lt=!0;if("function"!=typeof m)throw new TypeError(Gt);function k(L){var nt=ot,it=ft;return ot=ft=void 0,At=L,pt=m.apply(it,nt)}function Q(L){var nt=L-ut;return void 0===ut||nt>=S||nt<0||Tt&&L-At>=Ot}function H(){var L=_t();if(Q(L))return Bt(L);W=setTimeout(H,function Ut(L){var z=S-(L-ut);return Tt?Jt(z,Ot-(L-At)):z}(L))}function Bt(L){return W=void 0,lt&&ot?k(L):(ot=ft=void 0,pt)}function Pt(){var L=_t(),nt=Q(L);if(ot=arguments,ft=this,ut=L,nt){if(void 0===W)return function rt(L){return At=L,W=setTimeout(H,S),Ht?k(L):pt}(ut);if(Tt)return clearTimeout(W),W=setTimeout(H,S),k(ut)}return void 0===W&&(W=setTimeout(H,S)),pt}return S=Nt(S)||0,Mt(G)&&(Ht=!!G.leading,Ot=(Tt="maxWait"in G)?Qt(Nt(G.maxWait)||0,S):Ot,lt="trailing"in G?!!G.trailing:lt),Pt.cancel=function Et(){void 0!==W&&clearTimeout(W),At=0,ot=ut=ft=W=void 0},Pt.flush=function te(){return void 0===W?pt:Bt(_t())},Pt}},42365:(zt,xt,Y)=>{Y.d(xt,{F:()=>Qe,a:()=>Ae,c:()=>rn,d:()=>sn,f:()=>qe,r:()=>en});var R=Y(15861),K=Y(76210),dt=Y(46203),vt=Y(96678);const x=["top","right","bottom","left"],V=["start","end"],q=x.reduce((t,e)=>t.concat(e,e+"-"+V[0],e+"-"+V[1]),[]),E=Math.min,P=Math.max,tt=Math.round,B=Math.floor,$=t=>({x:t,y:t}),gt={left:"right",right:"left",bottom:"top",top:"bottom"},wt={start:"end",end:"start"};function et(t,e,n){return P(t,E(e,n))}function D(t,e){return"function"==typeof t?t(e):t}function N(t){return t.split("-")[0]}function Z(t){return t.split("-")[1]}function St(t){return"x"===t?"y":"x"}function Ct(t){return"y"===t?"height":"width"}function at(t){return["top","bottom"].includes(N(t))?"y":"x"}function Lt(t){return St(at(t))}function jt(t,e,n){void 0===n&&(n=!1);const i=Z(t),o=Lt(t),r=Ct(o);let s="x"===o?i===(n?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=bt(s)),[s,bt(s)]}function Dt(t){return t.replace(/start|end/g,e=>wt[e])}function bt(t){return t.replace(/left|right|bottom|top/g,e=>gt[e])}function Ft(t){return"number"!=typeof t?function Kt(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function mt(t){const{x:e,y:n,width:i,height:o}=t;return{width:i,height:o,top:n,left:e,right:e+i,bottom:n+o,x:e,y:n}}function It(t,e,n){let{reference:i,floating:o}=t;const r=at(e),s=Lt(e),l=Ct(s),c=N(e),a="y"===r,d=i.x+i.width/2-o.width/2,f=i.y+i.height/2-o.height/2,h=i[l]/2-o[l]/2;let u;switch(c){case"top":u={x:d,y:i.y-o.height};break;case"bottom":u={x:d,y:i.y+i.height};break;case"right":u={x:i.x+i.width,y:f};break;case"left":u={x:i.x-o.width,y:f};break;default:u={x:i.x,y:i.y}}switch(Z(e)){case"start":u[s]-=h*(n&&a?-1:1);break;case"end":u[s]+=h*(n&&a?-1:1)}return u}const Nt=function(){var t=(0,R.Z)(function*(e,n,i){const{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:l}=i,c=s.filter(Boolean),a=yield null==l.isRTL?void 0:l.isRTL(n);let d=yield l.getElementRects({reference:e,floating:n,strategy:r}),{x:f,y:h}=It(d,o,a),u=o,g={},y=0;for(let p=0;p<c.length;p++){const{name:v,fn:w}=c[p],{x:b,y:_,data:A,reset:O}=yield w({x:f,y:h,initialPlacement:o,placement:u,strategy:r,middlewareData:g,rects:d,platform:l,elements:{reference:e,floating:n}});f=b??f,h=_??h,g={...g,[v]:{...g[v],...A}},O&&y<=50&&(y++,"object"==typeof O&&(O.placement&&(u=O.placement),O.rects&&(d=!0===O.rects?yield l.getElementRects({reference:e,floating:n,strategy:r}):O.rects),({x:f,y:h}=It(d,u,a))),p=-1)}return{x:f,y:h,placement:u,strategy:r,middlewareData:g}});return function(n,i,o){return t.apply(this,arguments)}}();function ht(t,e){return _t.apply(this,arguments)}function _t(){return(_t=(0,R.Z)(function*(t,e){var n;void 0===e&&(e={});const{x:i,y:o,platform:r,rects:s,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:h=!1,padding:u=0}=D(e,t),g=Ft(u),p=l[h?"floating"===f?"reference":"floating":f],v=mt(yield r.getClippingRect({element:null==(n=yield null==r.isElement?void 0:r.isElement(p))||n?p:p.contextElement||(yield null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:a,rootBoundary:d,strategy:c})),w="floating"===f?{x:i,y:o,width:s.floating.width,height:s.floating.height}:s.reference,b=yield null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating),_=(yield null==r.isElement?void 0:r.isElement(b))&&(yield null==r.getScale?void 0:r.getScale(b))||{x:1,y:1},A=mt(r.convertOffsetParentRelativeRectToViewportRelativeRect?yield r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:w,offsetParent:b,strategy:c}):w);return{top:(v.top-A.top+g.top)/_.y,bottom:(A.bottom-v.bottom+g.bottom)/_.y,left:(v.left-A.left+g.left)/_.x,right:(A.right-v.right+g.right)/_.x}})).apply(this,arguments)}function m(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function S(t){return x.some(e=>t[e]>=0)}function W(){return(W=(0,R.Z)(function*(t,e){const{placement:n,platform:i,elements:o}=t,r=yield null==i.isRTL?void 0:i.isRTL(o.floating),s=N(n),l=Z(n),c="y"===at(n),a=["left","top"].includes(s)?-1:1,d=r&&c?-1:1,f=D(e,t);let{mainAxis:h,crossAxis:u,alignmentAxis:g}="number"==typeof f?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return l&&"number"==typeof g&&(u="end"===l?-1*g:g),c?{x:u*d,y:h*a}:{x:h*a,y:u*d}})).apply(this,arguments)}function lt(t){return Ut(t)?(t.nodeName||"").toLowerCase():"#document"}function k(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function rt(t){var e;return null==(e=(Ut(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function Ut(t){return t instanceof Node||t instanceof k(t).Node}function Q(t){return t instanceof Element||t instanceof k(t).Element}function H(t){return t instanceof HTMLElement||t instanceof k(t).HTMLElement}function Bt(t){return!(typeof ShadowRoot>"u")&&(t instanceof ShadowRoot||t instanceof k(t).ShadowRoot)}function Et(t){const{overflow:e,overflowX:n,overflowY:i,display:o}=z(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(o)}function te(t){return["table","td","th"].includes(lt(t))}function Pt(t){const e=nt(),n=z(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(i=>(n.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(n.contain||"").includes(i))}function nt(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function it(t){return["html","body","#document"].includes(lt(t))}function z(t){return k(t).getComputedStyle(t)}function Vt(t){return Q(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function yt(t){if("html"===lt(t))return t;const e=t.assignedSlot||t.parentNode||Bt(t)&&t.host||rt(t);return Bt(e)?e.host:e}function fe(t){const e=yt(t);return it(e)?t.ownerDocument?t.ownerDocument.body:t.body:H(e)&&Et(e)?e:fe(e)}function $t(t,e,n){var i;void 0===e&&(e=[]),void 0===n&&(n=!0);const o=fe(t),r=o===(null==(i=t.ownerDocument)?void 0:i.body),s=k(o);return r?e.concat(s,s.visualViewport||[],Et(o)?o:[],s.frameElement&&n?$t(s.frameElement):[]):e.concat(o,$t(o,[],n))}function ue(t){const e=z(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const o=H(t),r=o?t.offsetWidth:n,s=o?t.offsetHeight:i,l=tt(n)!==r||tt(i)!==s;return l&&(n=r,i=s),{width:n,height:i,$:l}}function ee(t){return Q(t)?t:t.contextElement}function kt(t){const e=ee(t);if(!H(e))return $(1);const n=e.getBoundingClientRect(),{width:i,height:o,$:r}=ue(e);let s=(r?tt(n.width):n.width)/i,l=(r?tt(n.height):n.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Ee=$(0);function de(t){const e=k(t);return nt()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:Ee}function Rt(t,e,n,i){void 0===e&&(e=!1),void 0===n&&(n=!1);const o=t.getBoundingClientRect(),r=ee(t);let s=$(1);e&&(i?Q(i)&&(s=kt(i)):s=kt(t));const l=function Pe(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==k(t))&&e}(r,n,i)?de(r):$(0);let c=(o.left+l.x)/s.x,a=(o.top+l.y)/s.y,d=o.width/s.x,f=o.height/s.y;if(r){const h=k(r),u=i&&Q(i)?k(i):i;let g=h,y=g.frameElement;for(;y&&i&&u!==g;){const p=kt(y),v=y.getBoundingClientRect(),w=z(y),b=v.left+(y.clientLeft+parseFloat(w.paddingLeft))*p.x,_=v.top+(y.clientTop+parseFloat(w.paddingTop))*p.y;c*=p.x,a*=p.y,d*=p.x,f*=p.y,c+=b,a+=_,g=k(y),y=g.frameElement}}return mt({width:d,height:f,x:c,y:a})}const Re=[":popover-open",":modal"];function ne(t){return Re.some(e=>{try{return t.matches(e)}catch{return!1}})}function ge(t){return Rt(rt(t)).left+Vt(t).scrollLeft}function me(t,e,n){let i;if("viewport"===e)i=function De(t,e){const n=k(t),i=rt(t),o=n.visualViewport;let r=i.clientWidth,s=i.clientHeight,l=0,c=0;if(o){r=o.width,s=o.height;const a=nt();(!a||a&&"fixed"===e)&&(l=o.offsetLeft,c=o.offsetTop)}return{width:r,height:s,x:l,y:c}}(t,n);else if("document"===e)i=function Le(t){const e=rt(t),n=Vt(t),i=t.ownerDocument.body,o=P(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=P(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-n.scrollLeft+ge(t);const l=-n.scrollTop;return"rtl"===z(i).direction&&(s+=P(e.clientWidth,i.clientWidth)-o),{width:o,height:r,x:s,y:l}}(rt(t));else if(Q(e))i=function Me(t,e){const n=Rt(t,!0,"fixed"===e),i=n.top+t.clientTop,o=n.left+t.clientLeft,r=H(t)?kt(t):$(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:o*r.x,y:i*r.y}}(e,n);else{const o=de(t);i={...e,x:e.x-o.x,y:e.y-o.y}}return mt(i)}function he(t,e){const n=yt(t);return!(n===e||!Q(n)||it(n))&&("fixed"===z(n).position||he(n,e))}function ke(t,e){const n=e.get(t);if(n)return n;let i=$t(t,[],!1).filter(l=>Q(l)&&"body"!==lt(l)),o=null;const r="fixed"===z(t).position;let s=r?yt(t):t;for(;Q(s)&&!it(s);){const l=z(s),c=Pt(s);!c&&"fixed"===l.position&&(o=null),(r?!c&&!o:!c&&"static"===l.position&&o&&["absolute","fixed"].includes(o.position)||Et(s)&&!c&&he(t,s))?i=i.filter(d=>d!==s):o=l,s=yt(s)}return e.set(t,i),i}function $e(t,e,n){const i=H(e),o=rt(e),r="fixed"===n,s=Rt(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=$(0);if(i||!i&&!r)if(("body"!==lt(e)||Et(o))&&(l=Vt(e)),i){const f=Rt(e,!0,r,e);c.x=f.x+e.clientLeft,c.y=f.y+e.clientTop}else o&&(c.x=ge(o));return{x:s.left+l.scrollLeft-c.x,y:s.top+l.scrollTop-c.y,width:s.width,height:s.height}}function ie(t){return"static"===z(t).position}function pe(t,e){return H(t)&&"fixed"!==z(t).position?e?e(t):t.offsetParent:null}function ye(t,e){const n=k(t);if(ne(t))return n;if(!H(t)){let o=yt(t);for(;o&&!it(o);){if(Q(o)&&!ie(o))return o;o=yt(o)}return n}let i=pe(t,e);for(;i&&te(i)&&ie(i);)i=pe(i,e);return i&&it(i)&&ie(i)&&!Pt(i)?n:i||function L(t){let e=yt(t);for(;H(e)&&!it(e);){if(Pt(e))return e;e=yt(e)}return null}(t)||n}const oe={convertOffsetParentRelativeRectToViewportRelativeRect:function Se(t){let{elements:e,rect:n,offsetParent:i,strategy:o}=t;const r="fixed"===o,s=rt(i),l=!!e&&ne(e.floating);if(i===s||l&&r)return n;let c={scrollLeft:0,scrollTop:0},a=$(1);const d=$(0),f=H(i);if((f||!f&&!r)&&(("body"!==lt(i)||Et(s))&&(c=Vt(i)),H(i))){const h=Rt(i);a=kt(i),d.x=h.x+i.clientLeft,d.y=h.y+i.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-c.scrollLeft*a.x+d.x,y:n.y*a.y-c.scrollTop*a.y+d.y}},getDocumentElement:rt,getClippingRect:function Fe(t){let{element:e,boundary:n,rootBoundary:i,strategy:o}=t;const s=[..."clippingAncestors"===n?ne(e)?[]:ke(e,this._c):[].concat(n),i],c=s.reduce((a,d)=>{const f=me(e,d,o);return a.top=P(f.top,a.top),a.right=E(f.right,a.right),a.bottom=E(f.bottom,a.bottom),a.left=P(f.left,a.left),a},me(e,s[0],o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:ye,getElementRects:function(){var t=(0,R.Z)(function*(e){const n=this.getOffsetParent||ye,i=this.getDimensions,o=yield i(e.floating);return{reference:$e(e.reference,yield n(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}});return function(n){return t.apply(this,arguments)}}(),getClientRects:function Ce(t){return Array.from(t.getClientRects())},getDimensions:function Be(t){const{width:e,height:n}=ue(t);return{width:e,height:n}},getScale:kt,isElement:Q,isRTL:function je(t){return"rtl"===z(t).direction}};function Ne(t,e,n,i){void 0===i&&(i={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:s="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:c=!1}=i,a=ee(t),d=o||r?[...a?$t(a):[],...$t(e)]:[];d.forEach(v=>{o&&v.addEventListener("scroll",n,{passive:!0}),r&&v.addEventListener("resize",n)});const f=a&&l?function Ie(t,e){let i,n=null;const o=rt(t);function r(){var l;clearTimeout(i),null==(l=n)||l.disconnect(),n=null}return function s(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),r();const{left:a,top:d,width:f,height:h}=t.getBoundingClientRect();if(l||e(),!f||!h)return;const w={rootMargin:-B(d)+"px "+-B(o.clientWidth-(a+f))+"px "+-B(o.clientHeight-(d+h))+"px "+-B(a)+"px",threshold:P(0,E(1,c))||1};let b=!0;function _(A){const O=A[0].intersectionRatio;if(O!==c){if(!b)return s();O?s(!1,O):i=setTimeout(()=>{s(!1,1e-7)},1e3)}b=!1}try{n=new IntersectionObserver(_,{...w,root:o.ownerDocument})}catch{n=new IntersectionObserver(_,w)}n.observe(t)}(!0),r}(a,n):null;let h=-1,u=null;s&&(u=new ResizeObserver(v=>{let[w]=v;w&&w.target===a&&u&&(u.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var b;null==(b=u)||b.observe(e)})),n()}),a&&!c&&u.observe(a),u.observe(e));let g,y=c?Rt(t):null;return c&&function p(){const v=Rt(t);y&&(v.x!==y.x||v.y!==y.y||v.width!==y.width||v.height!==y.height)&&n(),y=v,g=requestAnimationFrame(p)}(),n(),()=>{var v;d.forEach(w=>{o&&w.removeEventListener("scroll",n),r&&w.removeEventListener("resize",n)}),f?.(),null==(v=u)||v.disconnect(),u=null,c&&cancelAnimationFrame(g)}}const He=function(t){return void 0===t&&(t=0),{name:"offset",options:t,fn:e=>(0,R.Z)(function*(){var n,i;const{x:o,y:r,placement:s,middlewareData:l}=e,c=yield function pt(t,e){return W.apply(this,arguments)}(e,t);return s===(null==(n=l.offset)?void 0:n.placement)&&null!=(i=l.arrow)&&i.alignmentOffset?{}:{x:o+c.x,y:r+c.y,data:{...c,placement:s}}})()}},Ue=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,fn:e=>(0,R.Z)(function*(){var n,i,o;const{rects:r,middlewareData:s,placement:l,platform:c,elements:a}=e,{crossAxis:d=!1,alignment:f,allowedPlacements:h=q,autoAlignment:u=!0,...g}=D(t,e),y=void 0!==f||h===q?function Qt(t,e,n){return(t?[...n.filter(o=>Z(o)===t),...n.filter(o=>Z(o)!==t)]:n.filter(o=>N(o)===o)).filter(o=>!t||Z(o)===t||!!e&&Dt(o)!==o)}(f||null,u,h):h,p=yield ht(e,g),v=(null==(n=s.autoPlacement)?void 0:n.index)||0,w=y[v];if(null==w)return{};const b=jt(w,r,yield null==c.isRTL?void 0:c.isRTL(a.floating));if(l!==w)return{reset:{placement:y[0]}};const _=[p[N(w)],p[b[0]],p[b[1]]],A=[...(null==(i=s.autoPlacement)?void 0:i.overflows)||[],{placement:w,overflows:_}],O=y[v+1];if(O)return{data:{index:v+1,overflows:A},reset:{placement:O}};const C=A.map(T=>{const M=Z(T.placement);return[T.placement,M&&d?T.overflows.slice(0,2).reduce((F,st)=>F+st,0):T.overflows[0],T.overflows]}).sort((T,M)=>T[1]-M[1]),U=(null==(o=C.filter(T=>T[2].slice(0,Z(T[0])?2:3).every(M=>M<=0))[0])?void 0:o[0])||C[0][0];return U!==l?{data:{index:v+1,overflows:A},reset:{placement:U}}:{}})()}},Ve=function(t){return void 0===t&&(t={}),{name:"shift",options:t,fn:e=>(0,R.Z)(function*(){const{x:n,y:i,placement:o}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:p=>{let{x:v,y:w}=p;return{x:v,y:w}}},...c}=D(t,e),a={x:n,y:i},d=yield ht(e,c),f=at(N(o)),h=St(f);let u=a[h],g=a[f];r&&(u=et(u+d["y"===h?"top":"left"],u,u-d["y"===h?"bottom":"right"])),s&&(g=et(g+d["y"===f?"top":"left"],g,g-d["y"===f?"bottom":"right"]));const y=l.fn({...e,[h]:u,[f]:g});return{...y,data:{x:y.x-n,y:y.y-i}}})()}},xe=function(t){return void 0===t&&(t={}),{name:"flip",options:t,fn:e=>(0,R.Z)(function*(){var n,i;const{placement:o,middlewareData:r,rects:s,initialPlacement:l,platform:c,elements:a}=e,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:h,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:y=!0,...p}=D(t,e);if(null!=(n=r.arrow)&&n.alignmentOffset)return{};const v=N(o),w=N(l)===l,b=yield null==c.isRTL?void 0:c.isRTL(a.floating),_=h||(w||!y?[bt(l)]:function Xt(t){const e=bt(t);return[Dt(t),e,Dt(e)]}(l));!h&&"none"!==g&&_.push(...function Mt(t,e,n,i){const o=Z(t);let r=function Yt(t,e,n){const i=["left","right"],o=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?o:i:e?i:o;case"left":case"right":return e?r:s;default:return[]}}(N(t),"start"===n,i);return o&&(r=r.map(s=>s+"-"+o),e&&(r=r.concat(r.map(Dt)))),r}(l,y,g,b));const A=[l,..._],O=yield ht(e,p),C=[];let j=(null==(i=r.flip)?void 0:i.overflows)||[];if(d&&C.push(O[v]),f){const F=jt(o,s,b);C.push(O[F[0]],O[F[1]])}if(j=[...j,{placement:o,overflows:C}],!C.every(F=>F<=0)){var U,T;const F=((null==(U=r.flip)?void 0:U.index)||0)+1,st=A[F];if(st)return{data:{index:F,overflows:j},reset:{placement:st}};let I=null==(T=j.filter(X=>X.overflows[0]<=0).sort((X,J)=>X.overflows[1]-J.overflows[1])[0])?void 0:T.placement;if(!I)switch(u){case"bestFit":{var M;const X=null==(M=j.map(J=>[J.placement,J.overflows.filter(ct=>ct>0).reduce((ct,ae)=>ct+ae,0)]).sort((J,ct)=>J[1]-ct[1])[0])?void 0:M[0];X&&(I=X);break}case"initialPlacement":I=l}if(o!==I)return{reset:{placement:I}}}return{}})()}},Ze=function(t){return void 0===t&&(t={}),{name:"hide",options:t,fn:e=>(0,R.Z)(function*(){const{rects:n}=e,{strategy:i="referenceHidden",...o}=D(t,e);switch(i){case"referenceHidden":{const s=m(yield ht(e,{...o,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:S(s)}}}case"escaped":{const s=m(yield ht(e,{...o,altBoundary:!0}),n.floating);return{data:{escapedOffsets:s,escaped:S(s)}}}default:return{}}})()}},ze=t=>({name:"arrow",options:t,fn:e=>(0,R.Z)(function*(){const{x:n,y:i,placement:o,rects:r,platform:s,elements:l,middlewareData:c}=e,{element:a,padding:d=0}=D(t,e)||{};if(null==a)return{};const f=Ft(d),h={x:n,y:i},u=Lt(o),g=Ct(u),y=yield s.getDimensions(a),p="y"===u,v=p?"top":"left",w=p?"bottom":"right",b=p?"clientHeight":"clientWidth",_=r.reference[g]+r.reference[u]-h[u]-r.floating[g],A=h[u]-r.reference[u],O=yield null==s.getOffsetParent?void 0:s.getOffsetParent(a);let C=O?O[b]:0;(!C||!(yield null==s.isElement?void 0:s.isElement(O)))&&(C=l.floating[b]||r.floating[g]);const j=_/2-A/2,U=C/2-y[g]/2-1,T=E(f[v],U),M=E(f[w],U),F=T,st=C-y[g]-M,I=C/2-y[g]/2+j,X=et(F,I,st),J=!c.arrow&&null!=Z(o)&&I!==X&&r.reference[g]/2-(I<F?T:M)-y[g]/2<0,ct=J?I<F?I-F:I-st:0;return{[u]:h[u]+ct,data:{[u]:X,centerOffset:I-X-ct,...J&&{alignmentOffset:ct}},reset:J}})()});function Ye(t){return function Ke(t){for(let e=t;e;e=re(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=re(t);e;e=re(e)){if(!(e instanceof Element))continue;const n=getComputedStyle(e);if("contents"!==n.display&&("static"!==n.position||"none"!==n.filter||"BODY"===e.tagName))return e}return null}(t)}function re(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function ve(t){const e=window.devicePixelRatio||1;return Math.round(t*e)/e}!function(){if(K.Z5.isBrowser){const e=oe.getOffsetParent;oe.getOffsetParent=n=>e(n,Ye)}}();const we=function(){var t=(0,R.Z)(function*(e,{referenceEl:n,floatingEl:i,overlayPositioning:o="absolute",placement:r,flipDisabled:s,flipPlacements:l,offsetDistance:c,offsetSkidding:a,arrowEl:d,type:f}){if(!n||!i)return null;const{x:h,y:u,placement:g,strategy:y,middlewareData:p}=yield((t,e,n)=>{const o={platform:oe,...n},r={...o.platform,_c:new Map};return Nt(t,e,{...o,platform:r})})(n,i,{strategy:o,placement:"auto"===r||"auto-start"===r||"auto-end"===r?void 0:tn(i,r),middleware:Je({placement:r,flipDisabled:s,flipPlacements:l,offsetDistance:c,offsetSkidding:a,arrowEl:d,type:f})});if(d&&p.arrow){const{x:A,y:O}=p.arrow,C=g.split("-")[0],j=null!=A?"left":"top",U=on[C],T={left:"",top:"",bottom:"",right:""};"floatingLayout"in e&&(e.floatingLayout="left"===C||"right"===C?"horizontal":"vertical"),Object.assign(d.style,{...T,[j]:`${"left"==j?A:O}px`,[C]:"100%",transform:U})}const w=p.hide?.referenceHidden?"hidden":null,b=w?"none":null;i.setAttribute(Ge,g);const{open:_}=e;Object.assign(i.style,{visibility:w,pointerEvents:b,position:y,transform:_?`translate(${ve(h)}px,${ve(u)}px)`:"",top:0,left:0})});return function(n,i){return t.apply(this,arguments)}}(),Ge="data-placement",be=100,_e=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end"],Qe={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active"};function Je({placement:t,flipDisabled:e,flipPlacements:n,offsetDistance:i,offsetSkidding:o,arrowEl:r,type:s}){const l=[Ve(),Ze()];if("menu"===s)return[...l,xe({fallbackPlacements:n||["top-start","top","top-end","bottom-start","bottom","bottom-end"]})];if("popover"===s||"tooltip"===s){const c=[...l,He({mainAxis:"number"==typeof i?i:0,crossAxis:"number"==typeof o?o:0})];return"auto"===t||"auto-start"===t||"auto-end"===t?c.push(Ue({alignment:"auto-start"===t?"start":"auto-end"===t?"end":null})):e||c.push(xe(n?{fallbackPlacements:n}:{})),r&&c.push(ze({element:r})),c}return[]}function qe(t,e){const n=t.filter(i=>_e.includes(i));return n.length!==t.length&&console.warn(`${e.tagName}: Invalid value found in: flipPlacements. Try any of these: ${_e.map(i=>`"${i}"`).join(", ").trim()}`,{el:e}),n}function tn(t,e){const n=["left","right"];return"rtl"===(0,dt.a)(t)&&n.reverse(),e.replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}function en(t,e){return se.apply(this,arguments)}function se(){return(se=(0,R.Z)(function*(t,e,n=!1){if(t.open&&e.floatingEl&&e.referenceEl)return Wt.get(t)?void(yield(n?function nn(t){let e=Zt.get(t);return e||(e=(0,vt.d)(we,be,{leading:!0,maxWait:be}),Zt.set(t,e),e)}(t):we)(t,e)):Oe(t,e.referenceEl,e.floatingEl)})).apply(this,arguments)}const on={top:"",left:"rotate(-90deg)",bottom:"rotate(180deg)",right:"rotate(90deg)"},Wt=new WeakMap,Zt=new WeakMap;function Oe(t,e,n){return ce.apply(this,arguments)}function ce(){return(ce=(0,R.Z)(function*(t,e,n){if(!n.isConnected)return;const i=K.Z5.isBrowser?Ne:(s,l,c)=>(c(),()=>{});let o;Wt.set(t,{state:"pending"});const r=i(e,n,()=>{const s=t.reposition();o||(o=s)});return Wt.set(t,{state:"active",cleanUp:r}),o})).apply(this,arguments)}function rn(t,e,n){return le.apply(this,arguments)}function le(){return(le=(0,R.Z)(function*(t,e,n){if(n&&e&&(Ae(t,e,n),Object.assign(n.style,{visibility:"hidden",pointerEvents:"none",position:t.overlayPositioning}),t.open))return Oe(t,e,n)})).apply(this,arguments)}function Ae(t,e,n){if(!n||!e)return;const i=Wt.get(t);"active"===i?.state&&i.cleanUp(),Wt.delete(t),Zt.get(t)?.cancel(),Zt.delete(t)}const sn=Math.ceil(Math.hypot(4,4))},2155:(zt,xt,Y)=>{Y.d(xt,{o:()=>vt});var R=Y(76210);function K(x){return"opened"in x?x.opened:x.open}function dt(x,V=!1){(V?x[x.transitionProp]:K(x))?x.onBeforeOpen():x.onBeforeClose(),(V?x[x.transitionProp]:K(x))?x.onOpen():x.onClose()}function vt(x,V=!1){(0,R.wj)(()=>{if(!x.transitionEl)return;const{transitionDuration:q,transitionProperty:E}=getComputedStyle(x.transitionEl),P=q.split(","),$=P[E.split(",").indexOf(x.openTransitionProp)]??P[0];if("0s"===$)return void dt(x,V);const gt=setTimeout(()=>{x.transitionEl.removeEventListener("transitionstart",wt),x.transitionEl.removeEventListener("transitionend",et),x.transitionEl.removeEventListener("transitioncancel",et),dt(x,V)},1e3*parseFloat($));function wt(D){D.propertyName===x.openTransitionProp&&D.target===x.transitionEl&&(clearTimeout(gt),x.transitionEl.removeEventListener("transitionstart",wt),(V?x[x.transitionProp]:K(x))?x.onBeforeOpen():x.onBeforeClose())}function et(D){D.propertyName===x.openTransitionProp&&D.target===x.transitionEl&&((V?x[x.transitionProp]:K(x))?x.onOpen():x.onClose(),x.transitionEl.removeEventListener("transitionend",et),x.transitionEl.removeEventListener("transitioncancel",et))}x.transitionEl.addEventListener("transitionstart",wt),x.transitionEl.addEventListener("transitionend",et),x.transitionEl.addEventListener("transitioncancel",et)})}}}]);