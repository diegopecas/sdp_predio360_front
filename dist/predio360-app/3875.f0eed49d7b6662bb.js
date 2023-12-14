"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[3875,5611],{26268:(L,P,e)=>{e.d(P,{Z:()=>m});var r=e(8314),y=e(39406),E=e(44589),C=e(8650),l=e(13382);const h=(g,a)=>g.key.level-a.key.level!=0?g.key.level-a.key.level:g.key.row-a.key.row!=0?g.key.row-a.key.row:g.key.col-a.key.col;class m extends E.Z{constructor(a){super(),this._tileInfoView=a}get requiresDedicatedFBO(){return!1}renderChildren(a){this.sortChildren(h),this.setStencilReference(a),super.renderChildren(a)}createRenderParams(a){const{state:u}=a,v=super.createRenderParams(a);return v.requiredLevel=this._tileInfoView.getClosestInfoForScale(u.scale).level,v.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(u.scale),v}prepareRenderPasses(a){const u=super.prepareRenderPasses(a);return u.push(a.registerRenderPass({name:"stencil",brushes:[l.Z],drawPhase:y.jx.DEBUG|y.jx.MAP|y.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,r.Z)("esri-tiles-debug")&&u.push(a.registerRenderPass({name:"tileInfo",brushes:[C.Z],drawPhase:y.jx.DEBUG,target:()=>this.children})),u}getStencilTarget(){return this.children}setStencilReference(a){let u=1;for(const v of this.children)v.stencilRef=u++}}},37384:(L,P,e)=>{e.d(P,{y:()=>t});var r=e(17626),y=e(46160),E=e(89726),C=e(26584),l=e(32917),h=e(77712),a=(e(90912),e(85931),e(76898)),u=e(1011),v=e(38093),I=e(86810);let p=class extends I.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,r._)([(0,h.Cb)({readOnly:!0})],p.prototype,"version",null),p=(0,r._)([(0,a.j)("esri.views.layers.support.ClipArea")],p);const M=p;var d;let c=d=class extends M{constructor(s){super(s),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new d({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,r._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"left",void 0),(0,r._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"right",void 0),(0,r._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"top",void 0),(0,r._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"bottom",void 0),c=d=(0,r._)([(0,a.j)("esri.views.layers.support.ClipRect")],c);const w=c;e(29132);var U,T=e(21674),S=e(91179),B=e(2004),b=e(37118);const O={base:T.Z,key:"type",typeMap:{extent:B.Z,polygon:b.Z}};let f=U=class extends M{constructor(s){super(s),this.type="geometry",this.geometry=null}clone(){return new U({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,h.Cb)({types:O,json:{read:S.im,write:!0}})],f.prototype,"geometry",void 0),f=U=(0,r._)([(0,a.j)("esri.views.layers.support.Geometry")],f);const W=f;let R=class extends M{constructor(s){super(s),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,r._)([(0,h.Cb)({type:[[[Number]]],json:{write:!0}})],R.prototype,"path",void 0),R=(0,r._)([(0,a.j)("esri.views.layers.support.Path")],R);const j=y.Z.ofType({key:"type",base:null,typeMap:{rect:w,path:R,geometry:W}}),t=s=>{let i=class extends s{constructor(){super(...arguments),this.attached=!1,this.clips=new j,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){this.view?.spatialReference&&(this.view?.spatialReferenceLocked??1)&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new C.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new u.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,l.YP)(()=>this.suspended,n=>{this.container&&(this.container.visible=!n),this.view&&!n&&this.updateRequested&&this.view.requestUpdate()},l.tX),(0,l.YP)(()=>this.layer?.opacity??1,n=>{this.container&&(this.container.opacity=n)},l.tX),(0,l.YP)(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",n=>{this.container&&(this.container.blendMode=n)},l.tX),(0,l.YP)(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,n=>{this.container&&(this.container.effect=n)},l.tX),(0,l.YP)(()=>this.highlightOptions,n=>this.container.highlightOptions=n,l.tX),(0,l.on)(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},l.tX),(0,l.YP)(()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}),({scale:n})=>{const A=null!=n&&this.isVisibleAtScale(n);A!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",A)},l.tX)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then(n=>{n===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const o=this.view?.spatialReference;return null==o||this.supportsSpatialReference(o)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(o){const _=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!_)return!0;const{minScale:n,maxScale:A}=_;return(0===n||o<=n)&&(0===A||o>=A)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(o){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",o),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(o))):this.updateRequested=!1}hitTest(o,_){return Promise.resolve(null)}supportsSpatialReference(o){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const o=super.getSuspendInfo(),_=!this.spatialReferenceSupported,n=this.visibleAtCurrentScale;return _&&(o.spatialReferenceNotSupported=_),n&&(o.outsideScaleRange=n),o}addAttachHandles(o){this.addHandles(o,"attach")}};return(0,r._)([(0,h.Cb)()],i.prototype,"attached",void 0),(0,r._)([(0,h.Cb)({type:j,set(o){const _=(0,E.Z)(o,this._get("clips"),j);this._set("clips",_)}})],i.prototype,"clips",void 0),(0,r._)([(0,h.Cb)()],i.prototype,"container",void 0),(0,r._)([(0,h.Cb)()],i.prototype,"moving",void 0),(0,r._)([(0,h.Cb)({readOnly:!0})],i.prototype,"spatialReferenceSupported",null),(0,r._)([(0,h.Cb)({readOnly:!0})],i.prototype,"updateParameters",void 0),(0,r._)([(0,h.Cb)()],i.prototype,"updateRequested",void 0),(0,r._)([(0,h.Cb)()],i.prototype,"updating",null),(0,r._)([(0,h.Cb)()],i.prototype,"view",void 0),(0,r._)([(0,h.Cb)({readOnly:!0})],i.prototype,"visibleAtCurrentScale",void 0),(0,r._)([(0,h.Cb)({type:v.Z})],i.prototype,"highlightOptions",void 0),i=(0,r._)([(0,a.j)("esri.views.2d.layers.LayerView2D")],i),i}},9066:(L,P,e)=>{e.r(P),e.d(P,{default:()=>j});var r=e(15861),y=e(17626),E=e(46160),C=e(46882),l=e(62208),h=e(32917),m=e(77712),u=(e(90912),e(85931),e(76898)),v=e(99683),I=e(58924),p=e(53753),M=e(719),d=e(17718),c=e(29739),w=e(69583),K=e(37384),T=e(36275),S=e(78209),B=e(45611);const b=Object.freeze({remove(){},pause(){},resume(){}}),U=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],O={graphic:null,property:null,oldValue:null,newValue:null};function f(t){return t instanceof v.Z||t instanceof I.Z||t instanceof p.Z||t instanceof M.Z||t instanceof d.Z||t instanceof c.Z||t instanceof w.Z}let D=class extends((0,K.y)(B.Z)){constructor(){super(...arguments),this._graphics=new E.Z,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new C.Z({getCollections:()=>(0,l.pC)(this.layer)&&!this.destroyed?[(0,l.pC)(this.layer.routeInfo)?new E.Z([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]:[]})}initialize(){this.updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),h.nn)}destroy(){this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),this._get("_routeItems")?.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}fetchPopupFeatures(t){var s=this;return(0,r.Z)(function*(){return s._graphicsView.hitTest(t).filter(i=>!!i.popupTemplate)})()}highlight(t){let s;s=f(t)?[this._getNetworkFeatureUid(t)]:function R(t){return Array.isArray(t)&&t.length>0&&f(t[0])}(t)?t.map(o=>this._getNetworkFeatureUid(o)):function W(t){return E.Z.isCollection(t)&&t.length&&f(t.getItemAt(0))}(t)?t.map(o=>this._getNetworkFeatureUid(o)).toArray():[t.uid];const i=s.filter(l.pC);return i.length?(this._addHighlight(i),{remove:()=>this._removeHighlight(i)}):b}hitTest(t,s){var i=this;return(0,r.Z)(function*(){if(i.suspended)return null;const o=i._graphicsView.hitTest(t).filter(l.pC).map(n=>i._networkGraphicMap.get(n));if(!o.length)return null;const{layer:_}=i;return o.reverse().map(n=>({type:"route",layer:_,mapPoint:t,networkFeature:n}))})()}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const s of t)if(this._highlightIds.has(s)){const i=this._highlightIds.get(s);this._highlightIds.set(s,i+1)}else this._highlightIds.set(s,1);this._updateHighlight()}_createGraphic(t){const s=t.toGraphic();return s.layer=this.layer,s.sourceLayer=this.layer,s}_createGraphicsView(){const t=this.view,i=new T.Z(t.featuresTilingScheme);this._graphicsView=new S.Z({container:i,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),view:t}),this.container.addChild(i),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const s=this._networkGraphicMap.get(t);return U.indexOf(s.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const s of t)if(this._highlightIds.has(s)){const i=this._highlightIds.get(s)-1;0===i?this._highlightIds.delete(s):this._highlightIds.set(s,i)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(s=>{const i=this._networkFeatureMap.get(s);return this._networkFeatureMap.delete(s),this._networkGraphicMap.delete(i),i}));for(const s of t.removed)this.removeHandles(s)}if(t.added.length){this._graphics.addMany(t.added.map(s=>{const i=this._createGraphic(s);return(0,l.Wi)(i.symbol)?null:(this._networkFeatureMap.set(s,i),this._networkGraphicMap.set(i,s),i)}).filter(l.pC));for(const s of t.added)this.addHandles([(0,h.YP)(()=>s.geometry,(i,o)=>{this._updateGraphic(s,"geometry",i,o)}),(0,h.YP)(()=>s.symbol,(i,o)=>{this._updateGraphic(s,"symbol",i,o)})],s);this._graphics.sort((s,i)=>this._getDrawOrder(s)-this._getDrawOrder(i))}}_updateGraphic(t,s,i,o){if(!this._networkFeatureMap.has(t)){const n=this._createGraphic(t);return this._networkFeatureMap.set(t,n),this._networkGraphicMap.set(n,t),void this._graphics.add(n)}const _=this._networkFeatureMap.get(t);_[s]=i,O.graphic=_,O.property=s,O.oldValue=o,O.newValue=i,this._graphicsView.graphicUpdateHandler(O)}_updateHighlight(){const t=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(t)}};(0,y._)([(0,m.Cb)()],D.prototype,"_graphics",void 0),(0,y._)([(0,m.Cb)()],D.prototype,"_routeItems",null),D=(0,y._)([(0,u.j)("esri.views.2d.layers.RouteLayerView2D")],D);const j=D},45611:(L,P,e)=>{e.d(P,{Z:()=>M});var r=e(17626),y=e(14517),E=e(61885),C=e(80542),l=e(61996),h=e(63290),m=e(62208),g=e(60330),a=e(77712),I=(e(90912),e(85931),e(76898));let p=class extends((0,C.p)((0,l.IG)((0,g.v)(E.Z.EventedMixin(y.Z))))){constructor(d){super(d),this.layer=null,this.parent=null}initialize(){this.when().catch(d=>{if("layerview:create-error"!==d.name){const c=this.layer&&this.layer.id||"no id",w=this.layer&&this.layer.title||"no title";h.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${w}', id: '${c}')`,d)}})}get fullOpacity(){return(0,m.Pt)(this.get("layer.opacity"),1)*(0,m.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(d){this._overrideIfSome("visible",d)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const d=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(d.viewNotReady=!0),this.layer&&this.layer.loaded||(d.layerNotLoaded=!0),this.visible||(d.layerInvisible=!0),d}isUpdating(){return!1}};(0,r._)([(0,a.Cb)()],p.prototype,"fullOpacity",null),(0,r._)([(0,a.Cb)()],p.prototype,"layer",void 0),(0,r._)([(0,a.Cb)()],p.prototype,"parent",void 0),(0,r._)([(0,a.Cb)({readOnly:!0})],p.prototype,"suspended",null),(0,r._)([(0,a.Cb)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,r._)([(0,a.Cb)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,r._)([(0,a.Cb)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,r._)([(0,a.Cb)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,r._)([(0,a.Cb)()],p.prototype,"visible",null),(0,r._)([(0,a.Cb)()],p.prototype,"view",void 0),p=(0,r._)([(0,I.j)("esri.views.layers.LayerView")],p);const M=p}}]);