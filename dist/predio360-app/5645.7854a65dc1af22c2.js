"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[5645],{14259:(j,U,e)=>{e.d(U,{q:()=>u});var E,C,T={};E={get exports(){return T},set exports(d){T=d}},void 0!==(C=function(){function M(t,i,s,n,_){for(;n>s;){if(n-s>600){var a=n-s+1,h=i-s+1,p=Math.log(a),v=.5*Math.exp(2*p/3),R=.5*Math.sqrt(p*v*(a-v)/a)*(h-a/2<0?-1:1);M(t,i,Math.max(s,Math.floor(i-h*v/a+R)),Math.min(n,Math.floor(i+(a-h)*v/a+R)),_)}var A=t[i],D=s,l=n;for(P(t,s,i),_(t[n],A)>0&&P(t,s,n);D<l;){for(P(t,D,l),D++,l--;_(t[D],A)<0;)D++;for(;_(t[l],A)>0;)l--}0===_(t[s],A)?P(t,s,l):P(t,++l,n),l<=i&&(s=l+1),i<=l&&(n=l-1)}}function P(t,i,s){var n=t[i];t[i]=t[s],t[s]=n}function o(t,i){return t<i?-1:t>i?1:0}return function d(t,i,s,n,_){M(t,i,s||0,n||t.length-1,_||o)}}())&&(E.exports=C);const u=T},77044:(j,U,e)=>{e.d(U,{Y:()=>C});var E=e(62208);function y(o,t){return o?t?4:3:t?3:2}function C(o,t,i,s,n){if((0,E.Wi)(t)||!t.lengths.length)return null;const _="upperLeft"===n?.originPosition?-1:1;o.lengths.length&&(o.lengths.length=0),o.coords.length&&(o.coords.length=0);const a=o.coords,h=[],p=i?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:v,coords:R}=t,A=y(i,s);let D=0;for(const l of v){const m=T(p,R,D,l,i,s,_);m&&h.push(m),D+=l*A}if(h.sort((l,m)=>{let O=_*l[2]-_*m[2];return 0===O&&i&&(O=l[4]-m[4]),O}),h.length){let l=6*h[0][2];a[0]=h[0][0]/l,a[1]=h[0][1]/l,i&&(l=6*h[0][4],a[2]=0!==l?h[0][3]/l:0),(a[0]<p[0]||a[0]>p[1]||a[1]<p[2]||a[1]>p[3]||i&&(a[2]<p[4]||a[2]>p[5]))&&(a.length=0)}if(!a.length){const l=t.lengths[0]?function I(o,t,i,s,n){const _=y(s,n);let a=t,h=t+_,p=0,v=0,R=0,A=0;for(let D=0,l=i-1;D<l;D++,a+=_,h+=_){const m=o[a],O=o[a+1],L=o[a+2],B=o[h],r=o[h+1],c=o[h+2],g=s?d(m,O,L,B,r,c):u(m,O,B,r);if(g)if(p+=g,s){const f=P(m,O,L,B,r,c);v+=g*f[0],R+=g*f[1],A+=g*f[2]}else{const f=M(m,O,B,r);v+=g*f[0],R+=g*f[1]}}return p>0?s?[v/p,R/p,A/p]:[v/p,R/p]:i>0?s?[o[t],o[t+1],o[t+2]]:[o[t],o[t+1]]:null}(R,0,v[0],i,s):null;if(!l)return null;a[0]=l[0],a[1]=l[1],i&&l.length>2&&(a[2]=l[2])}return o}function T(o,t,i,s,n,_,a=1){const h=y(n,_);let p=i,v=i+h,R=0,A=0,D=0,l=0,m=0;for(let L=0,B=s-1;L<B;L++,p+=h,v+=h){const r=t[p],c=t[p+1],g=t[p+2],f=t[v],W=t[v+1],S=t[v+2];let b=r*W-f*c;l+=b,R+=(r+f)*b,A+=(c+W)*b,n&&(b=r*S-f*g,D+=(g+S)*b,m+=b),r<o[0]&&(o[0]=r),r>o[1]&&(o[1]=r),c<o[2]&&(o[2]=c),c>o[3]&&(o[3]=c),n&&(g<o[4]&&(o[4]=g),g>o[5]&&(o[5]=g))}if(l*a>0&&(l*=-1),m*a>0&&(m*=-1),!l)return null;const O=[R,A,.5*l];return n&&(O[3]=D,O[4]=.5*m),O}function u(o,t,i,s){const n=i-o,_=s-t;return Math.sqrt(n*n+_*_)}function d(o,t,i,s,n,_){const a=s-o,h=n-t,p=_-i;return Math.sqrt(a*a+h*h+p*p)}function M(o,t,i,s){return[o+.5*(i-o),t+.5*(s-t)]}function P(o,t,i,s,n,_){return[o+.5*(s-o),t+.5*(n-t),i+.5*(_-i)]}},19702:(j,U,e)=>{e.d(U,{A:()=>t});var E=e(15861),y=e(17626),C=e(54024),T=e(10699),I=e(32917),u=e(77712),P=(e(90912),e(85931),e(76898)),o=e(36947);const t=i=>{let s=class extends i{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(n){super.postscript(n),(0,o.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}_validateHeightModelInfo(){var n=this;return(0,E.Z)(function*(){const _=new AbortController,a=_.signal;n.handles.add((0,C.kB)(()=>_.abort())),yield(0,I.N1)(()=>n.view.defaultsFromMap?.heightModelInfoReady,a),(0,T.k_)(a);const h=(0,o.Wt)(n.layer,n.view.heightModelInfo,n.supportsHeightUnitConversion);if(h)throw h})()}canResume(){const n=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!n||!n.minScale||!n.maxScale||n.minScale>=n.maxScale)}getSuspendInfo(){const n=super.getSuspendInfo(),_=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return _&&_.minScale&&_.maxScale&&_.minScale<_.maxScale&&(n.outsideScaleRange=!0),n}};return(0,y._)([(0,u.Cb)()],s.prototype,"view",void 0),(0,y._)([(0,u.Cb)()],s.prototype,"slicePlaneEnabled",void 0),s=(0,y._)([(0,P.j)("esri.views.3d.layers.LayerView3D")],s),s}},62124:(j,U,e)=>{e.r(U),e.d(U,{default:()=>B});var E=e(15861),y=e(17626),C=e(46160),T=e(46882),I=e(62208),u=e(32917),d=e(77712),o=(e(90912),e(85931),e(76898)),t=e(99683),i=e(58924),s=e(53753),n=e(719),_=e(17718),a=e(29739),h=e(69583),p=e(19702),v=e(32400),R=e(89765),A=e(36967),D=e(23147),l=e(45611);let O=class extends((0,p.A)(l.Z)){constructor(){super(...arguments),this.type="route-3d",this.loadedGraphics=new A.g,this._byObjectID=new Map,this.slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null}initialize(){this._set("processor",new v.D({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this.updatingHandles.addOnCollectionChange(()=>this._routeItems,r=>this._routeItemsChanged(r),u.nn),this.addResolvingPromise((0,R.E)(this).then(r=>this.fullExtentInLocalViewSpatialReference=r)),this.handles.add((0,u.gx)(()=>this.view?.basemapTerrain?.ready,()=>()=>this.notifyChange("updating"),{once:!0}))}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("processor",(0,I.SC)(this.processor)),this._get("_routeItems")?.destroy()}get _routeItems(){return new T.Z({getCollections:()=>[this.layer.pointBarriers,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.stops,this.layer.directionLines,this.layer.directionPoints,(0,I.pC)(this.layer.routeInfo)?new C.Z([this.layer.routeInfo]):null]})}_routeItemsChanged(r){if(r.removed.length){this.loadedGraphics.removeMany(r.removed.map(c=>{const g=this._byObjectID.get(c);return this._byObjectID.delete(c),g}));for(const c of r.removed)this.handles.remove(c)}if(r.added.length){this.loadedGraphics.addMany(r.added.map(c=>{const g=c.toGraphic();return this._byObjectID.set(c,g),g}));for(const c of r.added)this.handles.add([(0,u.YP)(()=>c.geometry,(g,f)=>{this._updateGraphic(c,"geometry",g,f)}),(0,u.YP)(()=>c.symbol,(g,f)=>{this._updateGraphic(c,"symbol",g,f)})],c)}}get legendEnabled(){return this.canResume()&&!this.processor?.frustumVisibilitySuspended}getSuspendInfo(){const r=super.getSuspendInfo();return r.outsideScaleRange=this.processor?.scaleVisibilitySuspended??!1,r.outsideOfView=this.processor?.frustumVisibilitySuspended??!1,r}fetchPopupFeatures(r,c){return(0,E.Z)(function*(){return(0,I.Wg)(c)?.clientGraphics??[]})()}getHit(r){return this.processor.getHit(r)}whenGraphicBounds(r,c){return this.processor.whenGraphicBounds(r,c)}computeAttachmentOrigin(r,c){return this.processor?.computeAttachmentOrigin(r,c)}getSymbolLayerSize(r,c){return this.processor.getSymbolLayerSize(r,c)}queryGraphics(){var r=this;return(0,E.Z)(function*(){return new C.Z(r.loadedGraphics.toArray())})()}maskOccludee(r){return this.processor.maskOccludee(r)}highlight(r){return function m(r){return r instanceof t.Z||r instanceof i.Z||r instanceof s.Z||r instanceof n.Z||r instanceof _.Z||r instanceof a.Z||r instanceof h.Z}(r)&&(r=this._byObjectID.get(r)),this.processor.highlight(r)}get updatePolicy(){return this.processor?.graphicsCore.effectiveUpdatePolicy||D.j.SYNC}canResume(){return super.canResume()&&!this.processor?.scaleVisibilitySuspended}isUpdating(){return!(!this.processor?.updating&&this.view?.basemapTerrain?.ready)}get performanceInfo(){return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:this.processor?.elevationAlignment.updating??!1,visibilityFrustum:!this.processor?.frustumVisibilitySuspended}}_updateGraphic(r,c,g,f){const W=this._byObjectID.get(r);W[c]=g,L.graphic=W,L.property=c,L.oldValue=f,L.newValue=g,this.processor?.graphicsCore.graphicUpdateHandler(L)}};(0,y._)([(0,d.Cb)()],O.prototype,"_routeItems",null),(0,y._)([(0,d.Cb)()],O.prototype,"loadedGraphics",void 0),(0,y._)([(0,d.Cb)({readOnly:!0})],O.prototype,"legendEnabled",null),(0,y._)([(0,d.Cb)()],O.prototype,"layer",void 0),(0,y._)([(0,d.Cb)({readOnly:!0})],O.prototype,"processor",void 0),(0,y._)([(0,d.Cb)({type:Boolean})],O.prototype,"slicePlaneEnabled",void 0),O=(0,y._)([(0,o.j)("esri.views.3d.layers.RouteLayerView3D")],O);const L={graphic:null,property:null,oldValue:null,newValue:null},B=O},89765:(j,U,e)=>{e.d(U,{E:()=>T});var E=e(62208),y=e(46367),C=e(35082);function T(I){const u=I.view.spatialReference,d=I.layer.fullExtent,M=(0,E.pC)(d)&&d.spatialReference;if((0,E.Wi)(d)||!M)return Promise.resolve(null);if(M.equals(u))return Promise.resolve(d.clone());const P=(0,y.iV)(d,u);return(0,E.pC)(P)?Promise.resolve(P):I.view.state.isLocal?(0,C.projectGeometry)(d,u,I.layer.portalItem).then(o=>!I.destroyed&&o?o:null).catch(()=>null):Promise.resolve(null)}},36967:(j,U,e)=>{e.d(U,{g:()=>T});var E=e(61885),y=e(73234),C=e(28862);class T extends E.Z{constructor(){super(...arguments),this._set=new Set}clear(){if(this._set.size>0){const u=this.toArray();this._set.clear(),this.emit("after-changes",{type:y.y.REMOVE}),this.emit("change",{added:[],removed:u})}}get length(){return this._set.size}addMany(u){if(0!==u.length){for(const d of u)this._set.add(d);this.emit("after-changes",{type:y.y.ADD}),this.emit("change",{added:u,removed:[]})}}remove(u){this._set.delete(u)&&(this.emit("after-changes",{type:y.y.REMOVE}),this.emit("change",{added:[],removed:[u]}))}removeMany(u){const d=[];for(const M of u)this._set.delete(M)&&d.push(M);d.length>0&&(this.emit("after-changes",{type:y.y.REMOVE}),this.emit("change",{added:[],removed:d}))}toArray(){return[...this._set]}find(u){let d;return(0,C.f)(this._set,M=>!!u(M)&&(d=M,!0)),d}forEach(u){this._set.forEach(d=>u(d))}}},45611:(j,U,e)=>{e.d(U,{Z:()=>n});var E=e(17626),y=e(14517),C=e(61885),T=e(80542),I=e(61996),u=e(63290),d=e(62208),M=e(60330),P=e(77712),i=(e(90912),e(85931),e(76898));let s=class extends((0,T.p)((0,I.IG)((0,M.v)(C.Z.EventedMixin(y.Z))))){constructor(_){super(_),this.layer=null,this.parent=null}initialize(){this.when().catch(_=>{if("layerview:create-error"!==_.name){const a=this.layer&&this.layer.id||"no id",h=this.layer&&this.layer.title||"no title";u.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${h}', id: '${a}')`,_)}})}get fullOpacity(){return(0,d.Pt)(this.get("layer.opacity"),1)*(0,d.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(_){this._overrideIfSome("visible",_)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const _=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(_.viewNotReady=!0),this.layer&&this.layer.loaded||(_.layerNotLoaded=!0),this.visible||(_.layerInvisible=!0),_}isUpdating(){return!1}};(0,E._)([(0,P.Cb)()],s.prototype,"fullOpacity",null),(0,E._)([(0,P.Cb)()],s.prototype,"layer",void 0),(0,E._)([(0,P.Cb)()],s.prototype,"parent",void 0),(0,E._)([(0,P.Cb)({readOnly:!0})],s.prototype,"suspended",null),(0,E._)([(0,P.Cb)({readOnly:!0})],s.prototype,"suspendInfo",null),(0,E._)([(0,P.Cb)({readOnly:!0})],s.prototype,"legendEnabled",null),(0,E._)([(0,P.Cb)({type:Boolean,readOnly:!0})],s.prototype,"updating",null),(0,E._)([(0,P.Cb)({readOnly:!0})],s.prototype,"updatingProgress",null),(0,E._)([(0,P.Cb)()],s.prototype,"visible",null),(0,E._)([(0,P.Cb)()],s.prototype,"view",void 0),s=(0,E._)([(0,i.j)("esri.views.layers.LayerView")],s);const n=s}}]);