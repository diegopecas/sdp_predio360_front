"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[8400],{77044:(G,M,i)=>{function D(t,s){return t?s?4:3:s?3:2}function p(t,s,_,r){if(!s?.lengths.length)return null;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const o=t.coords,n=[],e=_?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:d,coords:h}=s,N=D(_,r);let O=0;for(const c of d){const u=v(e,h,O,c,_,r);u&&n.push(u),O+=c*N}if(n.sort((c,u)=>{let T=c[2]-u[2];return 0===T&&_&&(T=c[4]-u[4]),T}),n.length){let c=6*n[0][2];o[0]=n[0][0]/c,o[1]=n[0][1]/c,_&&(c=6*n[0][4],o[2]=0!==c?n[0][3]/c:0),(o[0]<e[0]||o[0]>e[1]||o[1]<e[2]||o[1]>e[3]||_&&(o[2]<e[4]||o[2]>e[5]))&&(o.length=0)}if(!o.length){const c=s.lengths[0]?function b(t,s,_,r,o){const n=D(r,o);let e=s,d=s+n,h=0,N=0,O=0,c=0;for(let u=0,T=_-1;u<T;u++,e+=n,d+=n){const y=t[e],C=t[e+1],A=t[e+2],I=t[d],E=t[d+1],P=t[d+2],g=r?a(y,C,A,I,E,P):l(y,C,I,E);if(g)if(h+=g,r){const m=j(y,C,A,I,E,P);N+=g*m[0],O+=g*m[1],c+=g*m[2]}else{const m=U(y,C,I,E);N+=g*m[0],O+=g*m[1]}}return h>0?r?[N/h,O/h,c/h]:[N/h,O/h]:_>0?r?[t[s],t[s+1],t[s+2]]:[t[s],t[s+1]]:null}(h,0,d[0],_,r):null;if(!c)return null;o[0]=c[0],o[1]=c[1],_&&c.length>2&&(o[2]=c[2])}return t}function v(t,s,_,r,o,n){const e=D(o,n);let d=_,h=_+e,N=0,O=0,c=0,u=0,T=0;for(let C=0,A=r-1;C<A;C++,d+=e,h+=e){const I=s[d],E=s[d+1],P=s[d+2],g=s[h],m=s[h+1],B=s[h+2];let f=I*m-g*E;u+=f,N+=(I+g)*f,O+=(E+m)*f,o&&(f=I*B-g*P,c+=(P+B)*f,T+=f),I<t[0]&&(t[0]=I),I>t[1]&&(t[1]=I),E<t[2]&&(t[2]=E),E>t[3]&&(t[3]=E),o&&(P<t[4]&&(t[4]=P),P>t[5]&&(t[5]=P))}if(u>0&&(u*=-1),T>0&&(T*=-1),!u)return null;const y=[N,O,.5*u];return o&&(y[3]=c,y[4]=.5*T),y}function l(t,s,_,r){const o=_-t,n=r-s;return Math.sqrt(o*o+n*n)}function a(t,s,_,r,o,n){const e=r-t,d=o-s,h=n-_;return Math.sqrt(e*e+d*d+h*h)}function U(t,s,_,r){return[t+.5*(_-t),s+.5*(r-s)]}function j(t,s,_,r,o,n){return[t+.5*(r-t),s+.5*(o-s),_+.5*(n-_)]}i.d(M,{Y:()=>p})},92794:(G,M,i)=>{i.d(M,{n:()=>b});var D=i(77044),p=i(66385),v=i(88071);const b={getObjectId:l=>l.objectId,getAttributes:l=>l.attributes,getAttribute:(l,a)=>l.attributes[a],cloneWithGeometry:(l,a)=>new p.u_(a,l.attributes,null,l.objectId),getGeometry:l=>l.geometry,getCentroid:(l,a)=>(null==l.centroid&&(l.centroid=(0,D.Y)(new v.Z,l.geometry,a.hasZ,a.hasM)),l.centroid)}},10081:(G,M,i)=>{i.r(M),i.d(M,{default:()=>n});var D=i(15861),p=i(17626),v=i(83761),b=i(61996),l=i(62208),a=i(77712),s=(i(8314),i(63290),i(4619),i(76898)),_=i(32400);let r=class extends((0,b.IG)(v.Z)){constructor(e){super(e),this.processor=null,this.slicePlaneEnabled=!1,this.layer=new o,this.suspended=!1}initialize(){this._set("processor",new _.D({owner:this}))}destroy(){this._set("processor",(0,l.SC)(this.processor))}get graphics(){return this.view?.graphics}get loadedGraphics(){return this.graphics}get updating(){return!!this.processor?.updating}get symbolUpdateType(){return this.processor.graphicsCore.symbolUpdateType}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,d){return this.processor.whenGraphicBounds(e,d)}graphicChanged(e){this.processor.graphicsCore.graphicUpdateHandler(e)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}queryGraphics(){var e=this;return(0,D.Z)(function*(){return e.loadedGraphics})()}highlight(e){return this.processor.highlight(e)}maskOccludee(e){return this.processor.maskOccludee(e)}};(0,p._)([(0,a.Cb)({readOnly:!0})],r.prototype,"graphics",null),(0,p._)([(0,a.Cb)()],r.prototype,"loadedGraphics",null),(0,p._)([(0,a.Cb)({readOnly:!0})],r.prototype,"updating",null),(0,p._)([(0,a.Cb)({constructOnly:!0})],r.prototype,"view",void 0),(0,p._)([(0,a.Cb)()],r.prototype,"processor",void 0),(0,p._)([(0,a.Cb)({type:Boolean})],r.prototype,"slicePlaneEnabled",void 0),(0,p._)([(0,a.Cb)()],r.prototype,"layer",void 0),(0,p._)([(0,a.Cb)()],r.prototype,"suspended",void 0),r=(0,p._)([(0,s.j)("esri.views.3d.layers.GraphicsView3D")],r);class o extends b.Ej{constructor(){super(),this.type="graphics-view-3d-dummy",this.id=this.uid}}const n=r}}]);