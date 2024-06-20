"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[5072,5611],{5072:(T,y,t)=>{t.r(y),t.d(y,{default:()=>U});var e=t(15861),P=t(17626),u=t(73281),C=t(46160),s=t(32917),m=(t(63290),t(8314),t(4619),t(26584),t(76898)),v=t(40342),R=t(33474),l=t(17253),O=t(56800),n=t(36275),_=t(61005),f=t(45611);let S=class extends((0,O.y)(f.Z)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}hitTest(h,E){var M=this;return(0,e.Z)(function*(){if(!M.graphicsViews.length)return null;const c=M.layer;return M.graphicsViews.reverse().flatMap(r=>{const o=M._popupTemplates.get(r),d=r.hitTest(h);for(const i of d)i.layer=c,i.sourceLayer=c,i.popupTemplate=o;return d}).map(r=>({type:"graphic",graphic:r,layer:c,mapPoint:h}))})()}update(h){if(this.graphicsViews)for(const E of this.graphicsViews)E.processUpdate(h)}attach(){this.addAttachHandles([(0,s.YP)(()=>this.layer?.featureCollections,h=>{this._clear();for(const{popupInfo:E,featureSet:M,layerDefinition:c}of h){const r=l.Z.fromJSON(M),o=new C.Z(r.features),d=c.drawingInfo,i=E?u.Z.fromJSON(E):null,g=(0,R.i)(d.renderer),A=new _.Z({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:o,renderer:g,container:new n.Z(this.view.featuresTilingScheme)});this._graphicsViewMap[r.geometryType]=A,this._popupTemplates.set(A,i),"polygon"!==r.geometryType||this.layer.polygonSymbol?"polyline"!==r.geometryType||this.layer.lineSymbol?"point"!==r.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=g.symbol):this.layer.lineSymbol=g.symbol:this.layer.polygonSymbol=g.symbol,this.graphicsViews.push(A),this.container.addChild(A.container)}},s.nn),(0,s.YP)(()=>this.layer?.polygonSymbol,h=>{this._graphicsViewMap.polygon.renderer=new v.Z({symbol:h})},s.nn),(0,s.YP)(()=>this.layer?.lineSymbol,h=>{this._graphicsViewMap.polyline.renderer=new v.Z({symbol:h})},s.nn),(0,s.YP)(()=>this.layer?.pointSymbol,h=>{this._graphicsViewMap.point.renderer=new v.Z({symbol:h})},s.nn)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const h of this.graphicsViews)h.viewChange()}_clear(){this.container.removeAllChildren();for(const h of this.graphicsViews)h.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};S=(0,P._)([(0,m.j)("esri.views.2d.layers.GeoRSSLayerView2D")],S);const U=S},56800:(T,y,t)=>{t.d(y,{y:()=>M});var n,e=t(17626),P=t(46160),u=t(89726),C=t(26584),s=t(32917),a=t(77712),m=(t(8314),t(63290),t(4619),t(76898)),v=t(83137),R=t(1011),l=t(38093),O=t(90135);let _=n=class extends O.Z{constructor(c){super(c),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new n({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,e._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],_.prototype,"left",void 0),(0,e._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],_.prototype,"right",void 0),(0,e._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],_.prototype,"top",void 0),(0,e._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],_.prototype,"bottom",void 0),_=n=(0,e._)([(0,m.j)("esri.views.layers.support.ClipRect")],_);const f=_;var S=t(74835);let U=class extends O.Z{constructor(c){super(c),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,e._)([(0,a.Cb)({type:[[[Number]]],json:{write:!0}})],U.prototype,"path",void 0),U=(0,e._)([(0,m.j)("esri.views.layers.support.Path")],U);const E=P.Z.ofType({key:"type",base:null,typeMap:{rect:f,path:U,geometry:S.Z}}),M=c=>{let r=class extends c{constructor(){super(...arguments),this.attached=!1,this.clips=new E,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){this.view?.spatialReference&&(this.view?.spatialReferenceLocked??1)&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new C.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new R.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,s.YP)(()=>this.suspended,i=>{this.container&&(this.container.visible=!i)},s.tX),(0,s.YP)(()=>this.updateSuspended,i=>{this.view&&!i&&this.updateRequested&&this.view.requestUpdate()},s.tX),(0,s.YP)(()=>this.layer?.opacity??1,i=>{this.container&&(this.container.opacity=i)},s.tX),(0,s.YP)(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",i=>{this.container&&(this.container.blendMode=i)},s.tX),(0,s.YP)(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,i=>{this.container&&(this.container.effect=i)},s.tX),(0,s.YP)(()=>this.highlightOptions,i=>this.container.highlightOptions=i,s.tX),(0,s.on)(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},s.tX),(0,s.YP)(()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}),({scale:i})=>{const g=null!=i&&this.isVisibleAtScale(i);g!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",g)},s.tX)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then(i=>{i===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const o=this.view?.spatialReference;return null==o||this.supportsSpatialReference(o)}get updateSuspended(){return this.suspended}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(o){const d=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!d)return!0;const{minScale:i,maxScale:g}=d;return(0,v.o2)(o,i,g)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(o){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",o),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(o))):this.updateRequested=!1}hitTest(o,d){return Promise.resolve(null)}supportsSpatialReference(o){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const o=super.getSuspendInfo(),d=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return d&&(o.spatialReferenceNotSupported=d),i&&(o.outsideScaleRange=i),o}addAttachHandles(o){this.addHandles(o,"attach")}};return(0,e._)([(0,a.Cb)()],r.prototype,"attached",void 0),(0,e._)([(0,a.Cb)({type:E,set(o){const d=(0,u.Z)(o,this._get("clips"),E);this._set("clips",d)}})],r.prototype,"clips",void 0),(0,e._)([(0,a.Cb)()],r.prototype,"container",void 0),(0,e._)([(0,a.Cb)()],r.prototype,"moving",void 0),(0,e._)([(0,a.Cb)({readOnly:!0})],r.prototype,"spatialReferenceSupported",null),(0,e._)([(0,a.Cb)({readOnly:!0})],r.prototype,"updateParameters",void 0),(0,e._)([(0,a.Cb)()],r.prototype,"updateRequested",void 0),(0,e._)([(0,a.Cb)()],r.prototype,"updateSuspended",null),(0,e._)([(0,a.Cb)()],r.prototype,"updating",null),(0,e._)([(0,a.Cb)()],r.prototype,"view",void 0),(0,e._)([(0,a.Cb)({readOnly:!0})],r.prototype,"visibleAtCurrentScale",void 0),(0,e._)([(0,a.Cb)({type:l.Z})],r.prototype,"highlightOptions",void 0),r=(0,e._)([(0,m.j)("esri.views.2d.layers.LayerView2D")],r),r}},45611:(T,y,t)=>{t.d(y,{Z:()=>O});var e=t(17626),P=t(83761),u=t(61885),C=t(61996),s=t(63290),a=t(62208),D=t(60330),p=t(77712),v=(t(8314),t(4619),t(76898)),R=t(11426);let l=class extends((0,C.IG)((0,D.v)(u.Z.EventedMixin(P.Z)))){constructor(n){super(n),this._updatingHandles=new R.R,this.layer=null,this.parent=null}initialize(){this.when().catch(n=>{if("layerview:create-error"!==n.name){const _=this.layer&&this.layer.id||"no id",f=this.layer?.title||"no title";s.Z.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${f}', id: '${_}')`,n)}})}destroy(){this._updatingHandles=(0,a.SC)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(n){this._overrideIfSome("visible",n)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const n=this.parent?.suspended?this.parent.suspendInfo:{};return this.view?.ready||(n.viewNotReady=!0),this.layer&&this.layer.loaded||(n.layerNotLoaded=!0),this.visible||(n.layerInvisible=!0),n}isUpdating(){return!1}};(0,e._)([(0,p.Cb)()],l.prototype,"fullOpacity",null),(0,e._)([(0,p.Cb)()],l.prototype,"layer",void 0),(0,e._)([(0,p.Cb)()],l.prototype,"parent",void 0),(0,e._)([(0,p.Cb)({readOnly:!0})],l.prototype,"suspended",null),(0,e._)([(0,p.Cb)({readOnly:!0})],l.prototype,"suspendInfo",null),(0,e._)([(0,p.Cb)({readOnly:!0})],l.prototype,"legendEnabled",null),(0,e._)([(0,p.Cb)({type:Boolean,readOnly:!0})],l.prototype,"updating",null),(0,e._)([(0,p.Cb)({readOnly:!0})],l.prototype,"updatingProgress",null),(0,e._)([(0,p.Cb)()],l.prototype,"visible",null),(0,e._)([(0,p.Cb)()],l.prototype,"view",void 0),l=(0,e._)([(0,v.j)("esri.views.layers.LayerView")],l);const O=l},90135:(T,y,t)=>{t.d(y,{Z:()=>L});var e=t(17626),P=t(86810),u=t(77712),D=(t(8314),t(63290),t(4619),t(76898));let p=class extends P.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,e._)([(0,u.Cb)({readOnly:!0})],p.prototype,"version",null),p=(0,e._)([(0,D.j)("esri.views.layers.support.ClipArea")],p);const L=p},74835:(T,y,t)=>{t.d(y,{Z:()=>_});var l,e=t(17626),u=(t(29132),t(77712)),D=(t(8314),t(63290),t(4619),t(76898)),p=t(21674),L=t(91179),m=t(90135),v=t(2004),R=t(37118);const O={base:p.Z,key:"type",typeMap:{extent:v.Z,polygon:R.Z}};let n=l=class extends m.Z{constructor(f){super(f),this.type="geometry",this.geometry=null}clone(){return new l({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,e._)([(0,u.Cb)({types:O,json:{read:L.im,write:!0}})],n.prototype,"geometry",void 0),n=l=(0,e._)([(0,D.j)("esri.views.layers.support.Geometry")],n);const _=n}}]);