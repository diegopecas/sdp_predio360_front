"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[6373],{19702:(g,h,e)=>{e.d(h,{A:()=>c});var i=e(15861),n=e(17626),M=e(54024),p=e(10699),d=e(32917),v=e(77712),a=(e(90912),e(85931),e(76898)),P=e(36947);const c=u=>{let t=class extends u{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(r){super.postscript(r),(0,P.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}_validateHeightModelInfo(){var r=this;return(0,i.Z)(function*(){const s=new AbortController,l=s.signal;r.handles.add((0,M.kB)(()=>s.abort())),yield(0,d.N1)(()=>r.view.defaultsFromMap?.heightModelInfoReady,l),(0,p.k_)(l);const O=(0,P.Wt)(r.layer,r.view.heightModelInfo,r.supportsHeightUnitConversion);if(O)throw O})()}canResume(){const r=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!r||!r.minScale||!r.maxScale||r.minScale>=r.maxScale)}getSuspendInfo(){const r=super.getSuspendInfo(),s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return s&&s.minScale&&s.maxScale&&s.minScale<s.maxScale&&(r.outsideScaleRange=!0),r}};return(0,n._)([(0,v.Cb)()],t.prototype,"view",void 0),(0,n._)([(0,v.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,n._)([(0,a.j)("esri.views.3d.layers.LayerView3D")],t),t}},6373:(g,h,e)=>{e.r(h),e.d(h,{default:()=>O});var i=e(15861),n=e(17626),M=e(46160),p=e(63290),d=e(62208),v=e(32917),y=e(77712),P=(e(90912),e(85931),e(76898)),c=e(72469),u=e(19702),t=e(50916),r=e(45611),s=e(94421);let l=class extends((0,s.Z)((0,t.r)((0,u.A)(r.Z)))){constructor(){super(...arguments),this.type="wmts-3d"}get hasMixedImageFormats(){return!0}_getCompatibleTileInfoMatrixSet(o,_=!1){const E=(0,c.mt)(this.layer);if((0,d.pC)(E)){if(M.Z.isCollection(E))return E.find(f=>{const I=o(f);return(0,d.pC)(I)&&(_?p.Z.getLogger(this.declaredClass).error("The selected tile matrix set is not compatible with the view",I):this.addResolvingPromise(Promise.reject(I))),null==I});const C=o(E);return(0,d.pC)(C)&&(_?p.Z.getLogger(this.declaredClass).error("The selected tile matrix set is not compatible with the view",C):this.addResolvingPromise(Promise.reject(C))),E}return null}initialize(){this._getCompatibleTileInfoMatrixSet(_=>this._getTileInfoSupportError(_.tileInfo,_.fullExtent));const o=(0,v.N1)(()=>this.view?.basemapTerrain?.tilingSchemeLocked).then(()=>{const _=this._getCompatibleTileInfoMatrixSet(E=>this._getTileInfoError(E.tileInfo,E.fullExtent));(0,d.Wi)(_)||(null!==_.id&&this.layer.activeLayer.tileMatrixSetId!==_.id&&(this.layer.activeLayer.tileMatrixSetId=_.id),_.tileInfo&&(this.tileInfo=_.tileInfo),this.layer.fullExtent=_.fullExtent)});this.addResolvingPromise(o),this.when(()=>this._postInitialize())}refresh(){this.emit("data-changed")}canResume(){if(!super.canResume())return!1;const o=this.layer.activeLayer.tileMatrixSet;return(0,d.pC)(o)&&!this._getTileInfoError(o.tileInfo,o.fullExtent)}doRefresh(){var o=this;return(0,i.Z)(function*(){o.suspended||o.emit("data-changed")})()}_postInitialize(){this.updatingHandles.add(()=>this.layer?.activeLayer?.styleId,()=>this.refresh()),this.updatingHandles.add(()=>this.layer?.activeLayer,o=>{const _=this._getCompatibleTileInfoMatrixSet(E=>this._getTileInfoError(E.tileInfo,E.fullExtent),!0);(0,d.pC)(_)&&null!==_.id&&o.tileMatrixSetId!==_.id&&(this.layer.activeLayer.tileMatrixSetId=_.id),this.notifyChange("suspended"),this.canResume()&&this.refresh()})}_getTileInfoError(o,_){return this._getTileInfoSupportError(o,_)||this._getTileInfoCompatibilityError(o,this.view.basemapTerrain.tilingScheme)}};(0,n._)([(0,y.Cb)({readOnly:!0})],l.prototype,"hasMixedImageFormats",null),(0,n._)([(0,y.Cb)()],l.prototype,"layer",void 0),(0,n._)([(0,y.Cb)()],l.prototype,"suspended",void 0),l=(0,n._)([(0,P.j)("esri.views.3d.layers.WMTSLayerView3d")],l);const O=l},45611:(g,h,e)=>{e.d(h,{Z:()=>r});var i=e(17626),n=e(14517),M=e(61885),p=e(80542),d=e(61996),v=e(63290),y=e(62208),D=e(60330),a=e(77712),u=(e(90912),e(85931),e(76898));let t=class extends((0,p.p)((0,d.IG)((0,D.v)(M.Z.EventedMixin(n.Z))))){constructor(s){super(s),this.layer=null,this.parent=null}initialize(){this.when().catch(s=>{if("layerview:create-error"!==s.name){const l=this.layer&&this.layer.id||"no id",O=this.layer&&this.layer.title||"no title";v.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${O}', id: '${l}')`,s)}})}get fullOpacity(){return(0,y.Pt)(this.get("layer.opacity"),1)*(0,y.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(s){this._overrideIfSome("visible",s)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const s=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(s.viewNotReady=!0),this.layer&&this.layer.loaded||(s.layerNotLoaded=!0),this.visible||(s.layerInvisible=!0),s}isUpdating(){return!1}};(0,i._)([(0,a.Cb)()],t.prototype,"fullOpacity",null),(0,i._)([(0,a.Cb)()],t.prototype,"layer",void 0),(0,i._)([(0,a.Cb)()],t.prototype,"parent",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],t.prototype,"suspended",null),(0,i._)([(0,a.Cb)({readOnly:!0})],t.prototype,"suspendInfo",null),(0,i._)([(0,a.Cb)({readOnly:!0})],t.prototype,"legendEnabled",null),(0,i._)([(0,a.Cb)({type:Boolean,readOnly:!0})],t.prototype,"updating",null),(0,i._)([(0,a.Cb)({readOnly:!0})],t.prototype,"updatingProgress",null),(0,i._)([(0,a.Cb)()],t.prototype,"visible",null),(0,i._)([(0,a.Cb)()],t.prototype,"view",void 0),t=(0,i._)([(0,u.j)("esri.views.layers.LayerView")],t);const r=t},94421:(g,h,e)=>{e.d(h,{Z:()=>a});var i=e(17626),n=e(63290),M=e(10699),p=e(32917),d=e(77712),D=(e(90912),e(85931),e(76898));const a=P=>{let c=class extends P{initialize(){this.handles.add((0,p.on)(()=>this.layer,"refresh",u=>{this.doRefresh(u.dataChanged).catch(t=>{(0,M.D_)(t)||n.Z.getLogger(this.declaredClass).error(t)})}),"RefreshableLayerView")}};return(0,i._)([(0,d.Cb)()],c.prototype,"layer",void 0),c=(0,i._)([(0,D.j)("esri.layers.mixins.RefreshableLayerView")],c),c}}}]);