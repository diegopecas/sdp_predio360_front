"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[7582,5611],{26268:(A,E,e)=>{e.d(E,{Z:()=>D});var t=e(8314),y=e(39406),m=e(44589),C=e(8650),n=e(13382);const r=(g,s)=>g.key.level-s.key.level!=0?g.key.level-s.key.level:g.key.row-s.key.row!=0?g.key.row-s.key.row:g.key.col-s.key.col;class D extends m.Z{constructor(s){super(),this._tileInfoView=s}get requiresDedicatedFBO(){return!1}renderChildren(s){this.sortChildren(r),this.setStencilReference(s),super.renderChildren(s)}createRenderParams(s){const{state:_}=s,v=super.createRenderParams(s);return v.requiredLevel=this._tileInfoView.getClosestInfoForScale(_.scale).level,v.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(_.scale),v}prepareRenderPasses(s){const _=super.prepareRenderPasses(s);return _.push(s.registerRenderPass({name:"stencil",brushes:[n.Z],drawPhase:y.jx.DEBUG|y.jx.MAP|y.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,t.Z)("esri-tiles-debug")&&_.push(s.registerRenderPass({name:"tileInfo",brushes:[C.Z],drawPhase:y.jx.DEBUG,target:()=>this.children})),_}getStencilTarget(){return this.children}setStencilReference(s){let _=1;for(const v of this.children)v.stencilRef=_++}}},63375:(A,E,e)=>{e.r(E),e.d(E,{default:()=>d});var t=e(15861),y=e(17626),m=e(88879),C=e(46160),n=e(62208),r=e(77712),s=(e(90912),e(85931),e(76898)),_=e(37384),v=e(36275),M=e(78209),h=e(45611);const f={remove(){},pause(){},resume(){}};let l=class extends((0,_.y)(h.Z)){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new M.Z({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new v.Z(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=(0,n.SC)(this.graphicsView)}hitTest(i){var a=this;return(0,t.Z)(function*(){return a.graphicsView?a.graphicsView.hitTest(i).map(c=>({type:"graphic",graphic:c,mapPoint:i,layer:a.layer})):null})()}fetchPopupFeatures(i){var a=this;return(0,t.Z)(function*(){return a.graphicsView?a.graphicsView.hitTest(i).filter(c=>!!c.popupTemplate):[]})()}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let a;"number"==typeof i?a=[i]:i instanceof m.Z?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map(O=>O&&O.uid):C.Z.isCollection(i)&&i.length>0&&(a=i.map(O=>O&&O.uid).toArray());const c=a?.filter(n.pC);return c?.length?(this._addHighlight(c),{remove:()=>this._removeHighlight(c)}):f}_addHighlight(i){for(const a of i)if(this._highlightIds.has(a)){const c=this._highlightIds.get(a);this._highlightIds.set(a,c+1)}else this._highlightIds.set(a,1);this._updateHighlight()}_removeHighlight(i){for(const a of i)if(this._highlightIds.has(a)){const c=this._highlightIds.get(a)-1;0===c?this._highlightIds.delete(a):this._highlightIds.set(a,c)}this._updateHighlight()}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()))}};(0,y._)([(0,r.Cb)()],l.prototype,"graphicsView",void 0),l=(0,y._)([(0,s.j)("esri.views.2d.layers.GraphicsLayerView2D")],l);const d=l},37384:(A,E,e)=>{e.d(E,{y:()=>W});var t=e(17626),y=e(46160),m=e(89726),C=e(26584),n=e(32917),r=e(77712),s=(e(90912),e(85931),e(76898)),_=e(1011),v=e(38093),M=e(86810);let h=class extends M.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,t._)([(0,r.Cb)({readOnly:!0})],h.prototype,"version",null),h=(0,t._)([(0,s.j)("esri.views.layers.support.ClipArea")],h);const f=h;var l;let d=l=class extends f{constructor(R){super(R),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new l({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,t._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],d.prototype,"left",void 0),(0,t._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],d.prototype,"right",void 0),(0,t._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],d.prototype,"top",void 0),(0,t._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],d.prototype,"bottom",void 0),d=l=(0,t._)([(0,s.j)("esri.views.layers.support.ClipRect")],d);const i=d;e(29132);var j,c=e(21674),O=e(91179),L=e(2004),b=e(37118);const w={base:c.Z,key:"type",typeMap:{extent:L.Z,polygon:b.Z}};let U=j=class extends f{constructor(R){super(R),this.type="geometry",this.geometry=null}clone(){return new j({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,t._)([(0,r.Cb)({types:w,json:{read:O.im,write:!0}})],U.prototype,"geometry",void 0),U=j=(0,t._)([(0,s.j)("esri.views.layers.support.Geometry")],U);const B=U;let S=class extends f{constructor(R){super(R),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,t._)([(0,r.Cb)({type:[[[Number]]],json:{write:!0}})],S.prototype,"path",void 0),S=(0,t._)([(0,s.j)("esri.views.layers.support.Path")],S);const T=y.Z.ofType({key:"type",base:null,typeMap:{rect:i,path:S,geometry:B}}),W=R=>{let u=class extends R{constructor(){super(...arguments),this.attached=!1,this.clips=new T,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){this.view?.spatialReference&&(this.view?.spatialReferenceLocked??1)&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new C.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new _.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,n.YP)(()=>this.suspended,o=>{this.container&&(this.container.visible=!o),this.view&&!o&&this.updateRequested&&this.view.requestUpdate()},n.tX),(0,n.YP)(()=>this.layer?.opacity??1,o=>{this.container&&(this.container.opacity=o)},n.tX),(0,n.YP)(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",o=>{this.container&&(this.container.blendMode=o)},n.tX),(0,n.YP)(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,o=>{this.container&&(this.container.effect=o)},n.tX),(0,n.YP)(()=>this.highlightOptions,o=>this.container.highlightOptions=o,n.tX),(0,n.on)(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},n.tX),(0,n.YP)(()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}),({scale:o})=>{const I=null!=o&&this.isVisibleAtScale(o);I!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",I)},n.tX)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then(o=>{o===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const p=this.view?.spatialReference;return null==p||this.supportsSpatialReference(p)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(p){const P=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!P)return!0;const{minScale:o,maxScale:I}=P;return(0===o||p<=o)&&(0===I||p>=I)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(p){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",p),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(p))):this.updateRequested=!1}hitTest(p,P){return Promise.resolve(null)}supportsSpatialReference(p){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const p=super.getSuspendInfo(),P=!this.spatialReferenceSupported,o=this.visibleAtCurrentScale;return P&&(p.spatialReferenceNotSupported=P),o&&(p.outsideScaleRange=o),p}addAttachHandles(p){this.addHandles(p,"attach")}};return(0,t._)([(0,r.Cb)()],u.prototype,"attached",void 0),(0,t._)([(0,r.Cb)({type:T,set(p){const P=(0,m.Z)(p,this._get("clips"),T);this._set("clips",P)}})],u.prototype,"clips",void 0),(0,t._)([(0,r.Cb)()],u.prototype,"container",void 0),(0,t._)([(0,r.Cb)()],u.prototype,"moving",void 0),(0,t._)([(0,r.Cb)({readOnly:!0})],u.prototype,"spatialReferenceSupported",null),(0,t._)([(0,r.Cb)({readOnly:!0})],u.prototype,"updateParameters",void 0),(0,t._)([(0,r.Cb)()],u.prototype,"updateRequested",void 0),(0,t._)([(0,r.Cb)()],u.prototype,"updating",null),(0,t._)([(0,r.Cb)()],u.prototype,"view",void 0),(0,t._)([(0,r.Cb)({readOnly:!0})],u.prototype,"visibleAtCurrentScale",void 0),(0,t._)([(0,r.Cb)({type:v.Z})],u.prototype,"highlightOptions",void 0),u=(0,t._)([(0,s.j)("esri.views.2d.layers.LayerView2D")],u),u}},45611:(A,E,e)=>{e.d(E,{Z:()=>f});var t=e(17626),y=e(14517),m=e(61885),C=e(80542),n=e(61996),r=e(63290),D=e(62208),g=e(60330),s=e(77712),M=(e(90912),e(85931),e(76898));let h=class extends((0,C.p)((0,n.IG)((0,g.v)(m.Z.EventedMixin(y.Z))))){constructor(l){super(l),this.layer=null,this.parent=null}initialize(){this.when().catch(l=>{if("layerview:create-error"!==l.name){const d=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";r.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${d}')`,l)}})}get fullOpacity(){return(0,D.Pt)(this.get("layer.opacity"),1)*(0,D.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(l){this._overrideIfSome("visible",l)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const l=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(l.viewNotReady=!0),this.layer&&this.layer.loaded||(l.layerNotLoaded=!0),this.visible||(l.layerInvisible=!0),l}isUpdating(){return!1}};(0,t._)([(0,s.Cb)()],h.prototype,"fullOpacity",null),(0,t._)([(0,s.Cb)()],h.prototype,"layer",void 0),(0,t._)([(0,s.Cb)()],h.prototype,"parent",void 0),(0,t._)([(0,s.Cb)({readOnly:!0})],h.prototype,"suspended",null),(0,t._)([(0,s.Cb)({readOnly:!0})],h.prototype,"suspendInfo",null),(0,t._)([(0,s.Cb)({readOnly:!0})],h.prototype,"legendEnabled",null),(0,t._)([(0,s.Cb)({type:Boolean,readOnly:!0})],h.prototype,"updating",null),(0,t._)([(0,s.Cb)({readOnly:!0})],h.prototype,"updatingProgress",null),(0,t._)([(0,s.Cb)()],h.prototype,"visible",null),(0,t._)([(0,s.Cb)()],h.prototype,"view",void 0),h=(0,t._)([(0,M.j)("esri.views.layers.LayerView")],h);const f=h}}]);