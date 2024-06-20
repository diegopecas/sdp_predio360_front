"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[2507,5994],{15994:(z,A,_)=>{_.d(A,{N:()=>x});const x={convertToGEGeometry:function O(t,n){return null==n?null:t.convertJSONToGeometry(n)},exportPoint:function D(t,n,l){const p=new U(t.getPointX(n),t.getPointY(n),l),f=t.hasZ(n),E=t.hasM(n);return f&&(p.z=t.getPointZ(n)),E&&(p.m=t.getPointM(n)),p},exportPolygon:function M(t,n,l){return new Z(t.exportPaths(n),l,t.hasZ(n),t.hasM(n))},exportPolyline:function g(t,n,l){return new G(t.exportPaths(n),l,t.hasZ(n),t.hasM(n))},exportMultipoint:function u(t,n,l){return new s(t.exportPoints(n),l,t.hasZ(n),t.hasM(n))},exportExtent:function o(t,n,l){const p=t.hasZ(n),f=t.hasM(n),E=new m(t.getXMin(n),t.getYMin(n),t.getXMax(n),t.getYMax(n),l);if(p){const I=t.getZExtent(n);E.zmin=I.vmin,E.zmax=I.vmax}if(f){const I=t.getMExtent(n);E.mmin=I.vmin,E.mmax=I.vmax}return E}};class U{constructor(n,l,p){this.x=n,this.y=l,this.spatialReference=p,this.z=void 0,this.m=void 0}}class Z{constructor(n,l,p,f){this.rings=n,this.spatialReference=l,this.hasZ=void 0,this.hasM=void 0,p&&(this.hasZ=p),f&&(this.hasM=f)}}class G{constructor(n,l,p,f){this.paths=n,this.spatialReference=l,this.hasZ=void 0,this.hasM=void 0,p&&(this.hasZ=p),f&&(this.hasM=f)}}class s{constructor(n,l,p,f){this.points=n,this.spatialReference=l,this.hasZ=void 0,this.hasM=void 0,p&&(this.hasZ=p),f&&(this.hasM=f)}}class m{constructor(n,l,p,f,E){this.xmin=n,this.ymin=l,this.xmax=p,this.ymax=f,this.spatialReference=E,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},77044:(z,A,_)=>{function x(s,u){return s?u?4:3:u?3:2}function O(s,u,m,o){if(!u?.lengths.length)return null;s.lengths.length&&(s.lengths.length=0),s.coords.length&&(s.coords.length=0);const t=s.coords,n=[],l=m?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:p,coords:f}=u,E=x(m,o);let I=0;for(const c of p){const r=U(l,f,I,c,m,o);r&&n.push(r),I+=c*E}if(n.sort((c,r)=>{let e=c[2]-r[2];return 0===e&&m&&(e=c[4]-r[4]),e}),n.length){let c=6*n[0][2];t[0]=n[0][0]/c,t[1]=n[0][1]/c,m&&(c=6*n[0][4],t[2]=0!==c?n[0][3]/c:0),(t[0]<l[0]||t[0]>l[1]||t[1]<l[2]||t[1]>l[3]||m&&(t[2]<l[4]||t[2]>l[5]))&&(t.length=0)}if(!t.length){const c=u.lengths[0]?function D(s,u,m,o,t){const n=x(o,t);let l=u,p=u+n,f=0,E=0,I=0,c=0;for(let r=0,e=m-1;r<e;r++,l+=n,p+=n){const h=s[l],d=s[l+1],P=s[l+2],y=s[p],v=s[p+1],a=s[p+2],i=o?M(h,d,P,y,v,a):Z(h,d,y,v);if(i)if(f+=i,o){const R=g(h,d,P,y,v,a);E+=i*R[0],I+=i*R[1],c+=i*R[2]}else{const R=G(h,d,y,v);E+=i*R[0],I+=i*R[1]}}return f>0?o?[E/f,I/f,c/f]:[E/f,I/f]:m>0?o?[s[u],s[u+1],s[u+2]]:[s[u],s[u+1]]:null}(f,0,p[0],m,o):null;if(!c)return null;t[0]=c[0],t[1]=c[1],m&&c.length>2&&(t[2]=c[2])}return s}function U(s,u,m,o,t,n){const l=x(t,n);let p=m,f=m+l,E=0,I=0,c=0,r=0,e=0;for(let d=0,P=o-1;d<P;d++,p+=l,f+=l){const y=u[p],v=u[p+1],a=u[p+2],i=u[f],R=u[f+1],S=u[f+2];let T=y*R-i*v;r+=T,E+=(y+i)*T,I+=(v+R)*T,t&&(T=y*S-i*a,c+=(a+S)*T,e+=T),y<s[0]&&(s[0]=y),y>s[1]&&(s[1]=y),v<s[2]&&(s[2]=v),v>s[3]&&(s[3]=v),t&&(a<s[4]&&(s[4]=a),a>s[5]&&(s[5]=a))}if(r>0&&(r*=-1),e>0&&(e*=-1),!r)return null;const h=[E,I,.5*r];return t&&(h[3]=c,h[4]=.5*e),h}function Z(s,u,m,o){const t=m-s,n=o-u;return Math.sqrt(t*t+n*n)}function M(s,u,m,o,t,n){const l=o-s,p=t-u,f=n-m;return Math.sqrt(l*l+p*p+f*f)}function G(s,u,m,o){return[s+.5*(m-s),u+.5*(o-u)]}function g(s,u,m,o,t,n){return[s+.5*(o-s),u+.5*(t-u),m+.5*(n-m)]}_.d(A,{Y:()=>O})},16983:(z,A,_)=>{_.d(A,{EG:()=>G,Op:()=>g,S2:()=>s});var x=_(82054),O=_(88071);const U=new O.Z,D=new O.Z,Z=new O.Z,M={esriGeometryPoint:x.fQ,esriGeometryPolyline:x.J6,esriGeometryPolygon:x.eG,esriGeometryMultipoint:x.Iv};function G(o,t,n,l=o.hasZ,p=o.hasM){if(null==t)return null;const f=o.hasZ&&l,E=o.hasM&&p;if(n){const I=(0,x.Nh)(Z,t,o.hasZ,o.hasM,"esriGeometryPoint",n,l,p);return(0,x.fQ)(I,f,E)}return(0,x.fQ)(t,f,E)}function g(o,t,n,l,p,f,E=t,I=n){const c=t&&E,r=n&&I,e=null!=l?"coords"in l?l:l.geometry:null;if(null==e)return null;if(p){let h=(0,x.zj)(D,e,t,n,o,p,E,I);return f&&(h=(0,x.Nh)(Z,h,c,r,o,f)),M[o]?.(h,c,r)??null}if(f){const h=(0,x.Nh)(Z,e,t,n,o,f,E,I);return M[o]?.(h,c,r)??null}return(0,x.hY)(U,e,t,n,E,I),M[o]?.(U,c,r)??null}function s(o){return o&&u in o?JSON.parse(JSON.stringify(o,m)):o}const u="_geVersion",m=(o,t)=>o!==u?t:void 0},82959:(z,A,_)=>{_.d(A,{_W:()=>o,iV:()=>p,oj:()=>I});var x=_(15861),O=_(85931),U=_(10699),D=_(55915),Z=_(15994),M=_(37053),G=_(46367);const g=[0,0];function s(c,r){if(!r)return null;if("x"in r){const e={x:0,y:0};return[e.x,e.y]=c(r.x,r.y,g),null!=r.z&&(e.z=r.z),null!=r.m&&(e.m=r.m),e}if("xmin"in r){const e={xmin:0,ymin:0,xmax:0,ymax:0};return[e.xmin,e.ymin]=c(r.xmin,r.ymin,g),[e.xmax,e.ymax]=c(r.xmax,r.ymax,g),r.hasZ&&(e.zmin=r.zmin,e.zmax=r.zmax,e.hasZ=!0),r.hasM&&(e.mmin=r.mmin,e.mmax=r.mmax,e.hasM=!0),e}return"rings"in r?{rings:u(r.rings,c),hasM:r.hasM,hasZ:r.hasZ}:"paths"in r?{paths:u(r.paths,c),hasM:r.hasM,hasZ:r.hasZ}:"points"in r?{points:m(r.points,c),hasM:r.hasM,hasZ:r.hasZ}:null}function u(c,r){const e=[];for(const h of c)e.push(m(h,r));return e}function m(c,r){const e=[];for(const h of c){const d=r(h[0],h[1],[0,0]);e.push(d),h.length>2&&d.push(h[2]),h.length>3&&d.push(h[3])}return e}function o(c,r){return t.apply(this,arguments)}function t(){return(t=(0,x.Z)(function*(c,r){if(!c||!r)return;const e=Array.isArray(c)?c.map(h=>null!=h.geometry?h.geometry.spatialReference:null).filter(O.pC):[c];yield(0,D.initializeProjection)(e.map(h=>({source:h,dest:r})))})).apply(this,arguments)}const n=s.bind(null,G.hG),l=s.bind(null,G.R6);function p(c,r,e,h){if(!c||(e||(e=r,r=c.spatialReference),!(0,M.JY)(r)||!(0,M.JY)(e)||(0,M.fS)(r,e)))return c;if((0,G.Q8)(r,e)){const d=(0,M.sS)(e)?n(c):l(c);return d.spatialReference=e,d}return(0,D.projectMany)(Z.N,[c],r,e,null,h)[0]}const E=new class f{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}push(r,e,h,d){var P=this;return(0,x.Z)(function*(){if(!r?.length||!e||!h||(0,M.fS)(e,h))return r;const y={geometries:r,inSpatialReference:e,outSpatialReference:h,geographicTransformation:d,resolve:(0,U.hh)()};return P._jobs.push(y),P._timer??=setTimeout(P._process,10),y.resolve.promise})()}_process(){this._timer=null;const r=this._jobs.shift();if(!r)return;const{geometries:e,inSpatialReference:h,outSpatialReference:d,resolve:P,geographicTransformation:y}=r;(0,G.Q8)(h,d)?(0,M.sS)(d)?P(e.map(n)):P(e.map(l)):P((0,D.projectMany)(Z.N,e,h,d,y,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function I(c,r,e,h){return E.push(c,r,e,h)}},56541:(z,A,_)=>{_.d(A,{Ti:()=>m,Up:()=>o,j6:()=>n});var x=_(15861),O=_(2076),U=_(16730),D=_(55915),Z=_(15176),M=_(91179),G=_(93555),g=_(37053),s=_(82959);const u=new O.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),m=Object.freeze({});function o(e,h,d){return t.apply(this,arguments)}function t(){return(t=(0,x.Z)(function*(e,h,d){const{outFields:P,orderByFields:y,groupByFieldsForStatistics:v,outStatistics:a}=e;if(P)for(let i=0;i<P.length;i++)P[i]=P[i].trim();if(y)for(let i=0;i<y.length;i++)y[i]=y[i].trim();if(v)for(let i=0;i<v.length;i++)v[i]=v[i].trim();if(a)for(let i=0;i<a.length;i++)a[i].onStatisticField&&(a[i].onStatisticField=a[i].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),n(e,h,d)})).apply(this,arguments)}function n(e,h,d){return l.apply(this,arguments)}function l(){return l=(0,x.Z)(function*(e,h,d){if(!e)return null;let{where:P}=e;if(e.where=P=P?.trim(),(!P||/^1 *= *1$/.test(P)||h&&h===P)&&(e.where=null),!e.geometry)return e;let y=yield function E(e){return I.apply(this,arguments)}(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:v}=e.geometry;y=(0,Z.aO)(y),y.spatialReference=v}if(y){yield(0,s._W)(y.spatialReference,d),y=function f(e,h){const d=e.spatialReference;return p(e,h)&&(0,M.YX)(e)?{spatialReference:d,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}(y,d);const v=(yield(0,G.aX)((0,M.im)(y)))[0];if(null==v)throw m;const a="quantizationParameters"in e&&e.quantizationParameters?.tolerance||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,i=a&&p(y,d)?{densificationStep:8*a}:void 0,R=v.toJSON(),S=(0,s.iV)(R,R.spatialReference,d,i);if(!S)throw m;S.spatialReference=d,e.geometry=S}return e}),l.apply(this,arguments)}function p(e,h){if(!e)return!1;const d=e.spatialReference;return((0,M.YX)(e)||(0,M.oU)(e)||(0,M.l9)(e))&&!(0,g.fS)(d,h)&&!(0,D.canProjectWithoutEngine)(d,h)}function I(){return I=(0,x.Z)(function*(e){const{distance:h,units:d}=e,P=e.geometry;if(null==h||"vertexAttributes"in P)return P;const y=P.spatialReference,v=d?u.fromJSON(d):(0,U.qE)(y),a=y&&((0,g.sT)(y)||(0,g.sS)(y))?P:yield(0,s._W)(y,g.YU).then(()=>(0,s.iV)(P,g.YU));return(yield function c(){return r.apply(this,arguments)}())(a.spatialReference,a,h,v)}),I.apply(this,arguments)}function r(){return(r=(0,x.Z)(function*(){return(yield Promise.all([_.e(4918),_.e(8592)]).then(_.bind(_,32825))).geodesicBuffer})).apply(this,arguments)}},53023:(z,A,_)=>{_.d(A,{hN:()=>v,P0:()=>P,cW:()=>d});var x=_(15861),O=_(26584),U=_(33190),D=_(11519),M=_(91179),G=_(37053);function g(a,i){return a?i?4:3:i?3:2}function m(a,i,R,S,T){if(!a)return!1;const N=g(i,R),{coords:j,lengths:W}=a;let C=!1,Y=0;for(const B of W)C=o(C,j,N,Y,B,S,T),Y+=B*N;return C}function o(a,i,R,S,T,N,j){let W=a,C=S;for(let Y=S,B=S+T*R;Y<B;Y+=R){C=Y+R,C===B&&(C=S);const K=i[Y],F=i[Y+1],b=i[C+1];(F<j&&b>=j||b<j&&F>=j)&&K+(j-F)/(b-F)*(i[C]-K)<N&&(W=!W)}return W}var t=_(82054),n=_(88071),l=_(16983),p=_(82959);const f="unsupported-query",E={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},I={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function d(a,i,R,S,T){if((0,M.oU)(i)&&"esriGeometryPoint"===R&&("esriSpatialRelIntersects"===a||"esriSpatialRelContains"===a)){const N=(0,t.Uy)(new n.Z,i,!1,!1);return Promise.resolve(j=>function s(a,i,R,S){return m(a,i,R,S.coords[0],S.coords[1])}(N,!1,!1,j))}if((0,M.oU)(i)&&"esriGeometryMultipoint"===R){const N=(0,t.Uy)(new n.Z,i,!1,!1);if("esriSpatialRelContains"===a)return Promise.resolve(j=>function u(a,i,R,S,T,N){const j=g(T,N),{coords:W,lengths:C}=S;if(!C)return!1;for(let Y=0,B=0;Y<C.length;Y++,B+=j)if(!m(a,i,R,W[B],W[B+1]))return!1;return!0}(N,!1,!1,j,S,T))}if((0,M.YX)(i)&&"esriGeometryPoint"===R&&("esriSpatialRelIntersects"===a||"esriSpatialRelContains"===a))return Promise.resolve(N=>(0,U.aV)(i,(0,l.Op)(R,S,T,N)));if((0,M.YX)(i)&&"esriGeometryMultipoint"===R&&"esriSpatialRelContains"===a)return Promise.resolve(N=>(0,U.lQ)(i,(0,l.Op)(R,S,T,N)));if((0,M.YX)(i)&&"esriSpatialRelIntersects"===a){const N=function Z(a){return"mesh"===a?D.h_:(0,D.IY)(a)}(R);return Promise.resolve(j=>N(i,(0,l.Op)(R,S,T,j)))}return function h(){return Promise.all([_.e(4918),_.e(8592)]).then(_.bind(_,32825))}().then(N=>{const j=N[E[a]].bind(null,i.spatialReference,i);return W=>j((0,l.Op)(R,S,T,W))})}function P(a,i,R){return y.apply(this,arguments)}function y(){return(y=(0,x.Z)(function*(a,i,R){const{spatialRel:S,geometry:T}=a;if(T){if(!function c(a){return null!=a&&!0===I.spatialRelationship[a]}(S))throw new O.Z(f,"Unsupported query spatial relationship",{query:a});if((0,G.JY)(T.spatialReference)&&(0,G.JY)(R)){if(!function r(a){return null!=a&&!0===I.queryGeometry[(0,M.Ji)(a)]}(T))throw new O.Z(f,"Unsupported query geometry type",{query:a});if(!function e(a){return null!=a&&!0===I.layerGeometry[a]}(i))throw new O.Z(f,"Unsupported layer geometry type",{query:a});if(a.outSR)return(0,p._W)(a.geometry?.spatialReference,a.outSR)}}})).apply(this,arguments)}function v(a){if((0,M.YX)(a))return!0;if((0,M.oU)(a)){for(const i of a.rings)if(5!==i.length||i[0][0]!==i[1][0]||i[0][0]!==i[4][0]||i[2][0]!==i[3][0]||i[0][1]!==i[3][1]||i[0][1]!==i[4][1]||i[1][1]!==i[2][1])return!1;return!0}return!1}},76530:(z,A,_)=>{_.d(A,{R:()=>O,y:()=>D});var x=_(15861);function O(g,s){return U.apply(this,arguments)}function U(){return(U=(0,x.Z)(function*(g,s){if(!g)return null;const u=s.featureAdapter,{startTimeField:m,endTimeField:o}=g;let t=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;if(m&&o)yield s.forEach(l=>{const p=u.getAttribute(l,m),f=u.getAttribute(l,o);null==p||isNaN(p)||(t=Math.min(t,p)),null==f||isNaN(f)||(n=Math.max(n,f))});else{const l=m||o;yield s.forEach(p=>{const f=u.getAttribute(p,l);null==f||isNaN(f)||(t=Math.min(t,f),n=Math.max(n,f))})}return{start:t,end:n}})).apply(this,arguments)}function D(g,s,u){if(!s||!g)return null;const{startTimeField:m,endTimeField:o}=g;if(!m&&!o)return null;const{start:t,end:n}=s;if(null===t&&null===n)return null;if(void 0===t&&void 0===n)return()=>!1;const l=u.getAttributeAsTimestamp?.bind(u)??u.getAttribute.bind(u);return m&&o?function Z(g,s,u,m,o){return null!=m&&null!=o?t=>{const n=g(t,s),l=g(t,u);return(null==n||n<=o)&&(null==l||l>=m)}:null!=m?t=>{const n=g(t,u);return null==n||n>=m}:null!=o?t=>{const n=g(t,s);return null==n||n<=o}:void 0}(l,m,o,t,n):function M(g,s,u,m){return null!=u&&null!=m&&u===m?o=>g(o,s)===u:null!=u&&null!=m?o=>{const t=g(o,s);return null!=t&&t>=u&&t<=m}:null!=u?o=>{const t=g(o,s);return null!=t&&t>=u}:null!=m?o=>{const t=g(o,s);return null!=t&&t<=m}:void 0}(l,m||o,t,n)}}}]);