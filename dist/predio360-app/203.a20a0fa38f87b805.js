"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[203,5611],{77044:(B,m,e)=>{function E(t,_){return t?_?4:3:_?3:2}function O(t,_,i,u){if(!_?.lengths.length)return null;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const o=t.coords,n=[],r=i?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:d,coords:p}=_,C=E(i,u);let U=0;for(const g of d){const M=f(r,p,U,g,i,u);M&&n.push(M),U+=g*C}if(n.sort((g,M)=>{let L=g[2]-M[2];return 0===L&&i&&(L=g[4]-M[4]),L}),n.length){let g=6*n[0][2];o[0]=n[0][0]/g,o[1]=n[0][1]/g,i&&(g=6*n[0][4],o[2]=0!==g?n[0][3]/g:0),(o[0]<r[0]||o[0]>r[1]||o[1]<r[2]||o[1]>r[3]||i&&(o[2]<r[4]||o[2]>r[5]))&&(o.length=0)}if(!o.length){const g=_.lengths[0]?function v(t,_,i,u,o){const n=E(u,o);let r=_,d=_+n,p=0,C=0,U=0,g=0;for(let M=0,L=i-1;M<L;M++,r+=n,d+=n){const A=t[r],j=t[r+1],W=t[r+2],R=t[d],P=t[d+1],D=t[d+2],T=u?h(A,j,W,R,P,D):a(A,j,R,P);if(T)if(p+=T,u){const s=c(A,j,W,R,P,D);C+=T*s[0],U+=T*s[1],g+=T*s[2]}else{const s=l(A,j,R,P);C+=T*s[0],U+=T*s[1]}}return p>0?u?[C/p,U/p,g/p]:[C/p,U/p]:i>0?u?[t[_],t[_+1],t[_+2]]:[t[_],t[_+1]]:null}(p,0,d[0],i,u):null;if(!g)return null;o[0]=g[0],o[1]=g[1],i&&g.length>2&&(o[2]=g[2])}return t}function f(t,_,i,u,o,n){const r=E(o,n);let d=i,p=i+r,C=0,U=0,g=0,M=0,L=0;for(let j=0,W=u-1;j<W;j++,d+=r,p+=r){const R=_[d],P=_[d+1],D=_[d+2],T=_[p],s=_[p+1],y=_[p+2];let I=R*s-T*P;M+=I,C+=(R+T)*I,U+=(P+s)*I,o&&(I=R*y-T*D,g+=(D+y)*I,L+=I),R<t[0]&&(t[0]=R),R>t[1]&&(t[1]=R),P<t[2]&&(t[2]=P),P>t[3]&&(t[3]=P),o&&(D<t[4]&&(t[4]=D),D>t[5]&&(t[5]=D))}if(M>0&&(M*=-1),L>0&&(L*=-1),!M)return null;const A=[C,U,.5*M];return o&&(A[3]=g,A[4]=.5*L),A}function a(t,_,i,u){const o=i-t,n=u-_;return Math.sqrt(o*o+n*n)}function h(t,_,i,u,o,n){const r=u-t,d=o-_,p=n-i;return Math.sqrt(r*r+d*d+p*p)}function l(t,_,i,u){return[t+.5*(i-t),_+.5*(u-_)]}function c(t,_,i,u,o,n){return[t+.5*(u-t),_+.5*(o-_),i+.5*(n-i)]}e.d(m,{Y:()=>O})},92794:(B,m,e)=>{e.d(m,{n:()=>v});var E=e(77044),O=e(66385),f=e(88071);const v={getObjectId:a=>a.objectId,getAttributes:a=>a.attributes,getAttribute:(a,h)=>a.attributes[h],cloneWithGeometry:(a,h)=>new O.u_(h,a.attributes,null,a.objectId),getGeometry:a=>a.geometry,getCentroid:(a,h)=>(null==a.centroid&&(a.centroid=(0,E.Y)(new f.Z,a.geometry,h.hasZ,h.hasM)),a.centroid)}},19702:(B,m,e)=>{e.d(m,{A:()=>u});var E=e(15861),O=e(17626),f=e(54024),v=e(10699),a=e(32917),h=e(77712),_=(e(8314),e(63290),e(4619),e(76898)),i=e(36947);const u=o=>{let n=class extends o{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(r){super.postscript(r),(0,i.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}_validateHeightModelInfo(){var r=this;return(0,E.Z)(function*(){const d=new AbortController,p=d.signal;r.addHandles((0,f.kB)(()=>d.abort())),yield(0,a.N1)(()=>r.view.defaultsFromMap?.heightModelInfoReady,p),(0,v.k_)(p);const C=(0,i.Wt)(r.layer,r.view.heightModelInfo,r.supportsHeightUnitConversion);if(C)throw C})()}canResume(){const r=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!r?.minScale||!r.maxScale||r.minScale>=r.maxScale)}getSuspendInfo(){const r=super.getSuspendInfo(),d=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return d&&d.minScale&&d.maxScale&&d.minScale<d.maxScale&&(r.outsideScaleRange=!0),r}};return(0,O._)([(0,h.Cb)()],n.prototype,"view",void 0),(0,O._)([(0,h.Cb)()],n.prototype,"slicePlaneEnabled",void 0),n=(0,O._)([(0,_.j)("esri.views.3d.layers.LayerView3D")],n),n}},62124:(B,m,e)=>{e.r(m),e.d(m,{default:()=>T});var E=e(15861),O=e(17626),f=e(46160),v=e(46882),a=e(62208),h=e(32917),l=e(77712),i=(e(8314),e(63290),e(4619),e(76898)),u=e(99683),o=e(58924),n=e(53753),r=e(719),d=e(17718),p=e(29739),C=e(69583),U=e(19702),g=e(32400),M=e(46196),L=e(89765),A=e(36967),j=e(23147),W=e(45611);let P=class extends((0,U.A)(W.Z)){constructor(){super(...arguments),this.type="route-3d",this.loadedGraphics=new A.g,this._byObjectID=new Map,this.slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null}initialize(){this._set("processor",new g.D({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this._updatingHandles.addOnCollectionChange(()=>this._routeItems,s=>this._routeItemsChanged(s),h.nn),this.addResolvingPromise((0,L.E)(this).then(s=>this.fullExtentInLocalViewSpatialReference=s)),this.addHandles((0,h.gx)(()=>this.view?.basemapTerrain?.ready,()=>()=>this.notifyChange("updating"),{once:!0}))}destroy(){this._updatingHandles.removeAll(),this._set("processor",(0,a.SC)(this.processor)),this._get("_routeItems")?.destroy()}get _routeItems(){return new v.Z({getCollections:()=>[this.layer.pointBarriers,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.stops,this.layer.directionLines,this.layer.directionPoints,null!=this.layer.routeInfo?new f.Z([this.layer.routeInfo]):null]})}_routeItemsChanged(s){if(s.removed.length){this.loadedGraphics.removeMany(s.removed.map(y=>{const I=this._byObjectID.get(y);return this._byObjectID.delete(y),I}));for(const y of s.removed)this.removeHandles(y)}if(s.added.length){this.loadedGraphics.addMany(s.added.map(y=>{const I=y.toGraphic();return this._byObjectID.set(y,I),I}));for(const y of s.added)this.addHandles([(0,h.YP)(()=>y.geometry,(I,b)=>{this._updateGraphic(y,"geometry",I,b)}),(0,h.YP)(()=>y.symbol,(I,b)=>{this._updateGraphic(y,"symbol",I,b)})],y)}}get legendEnabled(){return this.canResume()&&!this.processor?.frustumVisibilitySuspended}getSuspendInfo(){const s=super.getSuspendInfo();return s.outsideScaleRange=this.processor?.scaleVisibilitySuspended??!1,s.outsideOfView=this.processor?.frustumVisibilitySuspended??!1,s}getHit(s){return this.processor.getHit(s)}whenGraphicBounds(s,y){return this.processor.whenGraphicBounds(s,y)}computeAttachmentOrigin(s,y){return this.processor?.computeAttachmentOrigin(s,y)}getSymbolLayerSize(s,y){return this.processor.getSymbolLayerSize(s,y)}queryGraphics(){var s=this;return(0,E.Z)(function*(){return new f.Z(s.loadedGraphics.toArray())})()}maskOccludee(s){return this.processor.maskOccludee(s)}highlight(s){return function R(s){return s instanceof u.Z||s instanceof o.Z||s instanceof n.Z||s instanceof r.Z||s instanceof d.Z||s instanceof p.Z||s instanceof C.Z}(s)&&(s=this._byObjectID.get(s)),this.processor.highlight(s)}get updatePolicy(){return this.processor?.graphicsCore.effectiveUpdatePolicy||j.j.SYNC}canResume(){return super.canResume()&&!this.processor?.scaleVisibilitySuspended}isUpdating(){return!(!this.processor?.updating&&this.view?.basemapTerrain?.ready)}get performanceInfo(){return new M.W(this.processor?.graphicsCore.usedMemory??0,this.loadedGraphics.length,-1,-1,0,this.processor?.graphicsCore.performanceInfo??null)}_updateGraphic(s,y,I,b){const K=this._byObjectID.get(s);K[y]=I,D.graphic=K,D.property=y,D.oldValue=b,D.newValue=I,this.processor?.graphicsCore.graphicUpdateHandler(D)}};(0,O._)([(0,l.Cb)()],P.prototype,"_routeItems",null),(0,O._)([(0,l.Cb)()],P.prototype,"loadedGraphics",void 0),(0,O._)([(0,l.Cb)({readOnly:!0})],P.prototype,"legendEnabled",null),(0,O._)([(0,l.Cb)()],P.prototype,"layer",void 0),(0,O._)([(0,l.Cb)({readOnly:!0})],P.prototype,"processor",void 0),(0,O._)([(0,l.Cb)({type:Boolean})],P.prototype,"slicePlaneEnabled",void 0),P=(0,O._)([(0,i.j)("esri.views.3d.layers.RouteLayerView3D")],P);const D={graphic:null,property:null,oldValue:null,newValue:null},T=P},89765:(B,m,e)=>{e.d(m,{E:()=>f});var E=e(46367),O=e(35082);function f(v){const a=v.view.spatialReference,h=v.layer.fullExtent,l=null!=h&&h.spatialReference;if(null==h||!l)return Promise.resolve(null);if(l.equals(a))return Promise.resolve(h.clone());const c=(0,E.iV)(h,a);return null!=c?Promise.resolve(c):v.view.state.isLocal?(0,O.projectGeometry)(h,a,v.layer.portalItem).then(t=>!v.destroyed&&t?t:null).catch(()=>null):Promise.resolve(null)}},36967:(B,m,e)=>{e.d(m,{g:()=>a});var E=e(61885),O=e(73234),f=e(28862),v=e(37922);class a extends E.Z{constructor(){super(...arguments),this._set=new Set,this._length=(0,v.t)(0)}clear(){if(this._set.size>0){const l=this.toArray();this._set.clear(),this.emit("after-changes",{type:O.y.REMOVE}),this.emit("change",{added:[],removed:l})}}get length(){return this._length.value}addMany(l){if(0!==l.length){for(const c of l)this._set.add(c);this._length.value=this._set.size,this.emit("after-changes",{type:O.y.ADD}),this.emit("change",{added:l,removed:[]})}}remove(l){this._set.delete(l)&&(this._length.value=this._set.size,this.emit("after-changes",{type:O.y.REMOVE}),this.emit("change",{added:[],removed:[l]}))}removeMany(l){const c=[];for(const t of l)this._set.delete(t)&&c.push(t);c.length>0&&(this._length.value=this._set.size,this.emit("after-changes",{type:O.y.REMOVE}),this.emit("change",{added:[],removed:c}))}toArray(){return[...this._set]}find(l){let c;return(0,f.fn)(this._set,t=>!!l(t)&&(c=t,!0)),c}forEach(l){this._set.forEach(c=>l(c))}}},45611:(B,m,e)=>{e.d(m,{Z:()=>n});var E=e(17626),O=e(83761),f=e(61885),v=e(61996),a=e(63290),h=e(62208),l=e(60330),c=e(77712),i=(e(8314),e(4619),e(76898)),u=e(11426);let o=class extends((0,v.IG)((0,l.v)(f.Z.EventedMixin(O.Z)))){constructor(r){super(r),this._updatingHandles=new u.R,this.layer=null,this.parent=null}initialize(){this.when().catch(r=>{if("layerview:create-error"!==r.name){const d=this.layer&&this.layer.id||"no id",p=this.layer?.title||"no title";a.Z.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${p}', id: '${d}')`,r)}})}destroy(){this._updatingHandles=(0,h.SC)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(r){this._overrideIfSome("visible",r)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const r=this.parent?.suspended?this.parent.suspendInfo:{};return this.view?.ready||(r.viewNotReady=!0),this.layer&&this.layer.loaded||(r.layerNotLoaded=!0),this.visible||(r.layerInvisible=!0),r}isUpdating(){return!1}};(0,E._)([(0,c.Cb)()],o.prototype,"fullOpacity",null),(0,E._)([(0,c.Cb)()],o.prototype,"layer",void 0),(0,E._)([(0,c.Cb)()],o.prototype,"parent",void 0),(0,E._)([(0,c.Cb)({readOnly:!0})],o.prototype,"suspended",null),(0,E._)([(0,c.Cb)({readOnly:!0})],o.prototype,"suspendInfo",null),(0,E._)([(0,c.Cb)({readOnly:!0})],o.prototype,"legendEnabled",null),(0,E._)([(0,c.Cb)({type:Boolean,readOnly:!0})],o.prototype,"updating",null),(0,E._)([(0,c.Cb)({readOnly:!0})],o.prototype,"updatingProgress",null),(0,E._)([(0,c.Cb)()],o.prototype,"visible",null),(0,E._)([(0,c.Cb)()],o.prototype,"view",void 0),o=(0,E._)([(0,i.j)("esri.views.layers.LayerView")],o);const n=o}}]);