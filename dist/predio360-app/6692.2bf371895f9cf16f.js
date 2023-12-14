"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[6692,5611],{19702:(g,E,e)=>{e.d(E,{A:()=>p});var r=e(15861),l=e(17626),h=e(54024),d=e(10699),n=e(32917),P=e(77712),a=(e(90912),e(85931),e(76898)),y=e(36947);const p=u=>{let t=class extends u{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(_){super.postscript(_),(0,y.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}_validateHeightModelInfo(){var _=this;return(0,r.Z)(function*(){const s=new AbortController,o=s.signal;_.handles.add((0,h.kB)(()=>s.abort())),yield(0,n.N1)(()=>_.view.defaultsFromMap?.heightModelInfoReady,o),(0,d.k_)(o);const O=(0,y.Wt)(_.layer,_.view.heightModelInfo,_.supportsHeightUnitConversion);if(O)throw O})()}canResume(){const _=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!_||!_.minScale||!_.maxScale||_.minScale>=_.maxScale)}getSuspendInfo(){const _=super.getSuspendInfo(),s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return s&&s.minScale&&s.maxScale&&s.minScale<s.maxScale&&(_.outsideScaleRange=!0),_}};return(0,l._)([(0,P.Cb)()],t.prototype,"view",void 0),(0,l._)([(0,P.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,l._)([(0,a.j)("esri.views.3d.layers.LayerView3D")],t),t}},66692:(g,E,e)=>{e.r(E),e.d(E,{default:()=>O});var r=e(15861),l=e(17626),h=e(26584),d=e(62208),n=e(77712),v=(e(90912),e(85931),e(76898)),a=e(55915),y=e(19702),p=e(50916),u=e(45611),t=e(94421),_=e(84537),s=e(94672);let o=class extends((0,t.Z)((0,p.r)((0,y.A)(u.Z)))){constructor(){super(...arguments),this.type="tile-3d",this._popupHighlightHelper=null}get imageFormatIsOpaque(){return"jpg"===this.layer.tileInfo.format}get hasMixedImageFormats(){return"mixed"===this.layer.tileInfo.format}get tileInfo(){return this.layer.tileInfo}get dataLevelRange(){if(this.tileInfo){const i=this.tileInfo.lods;return this.levelRangeFromScaleRange(i[0].scale,i[i.length-1].scale)}return{minLevel:0,maxLevel:0}}initialize(){if("web-tile"===this.layer.type){const i=this.layer.get("fullExtent.spatialReference"),c=this.layer.get("tileInfo.spatialReference");if((0,d.Wi)(i)||(0,d.Wi)(c)||!(0,a.Up)(i,c)){const M="defaults"===this.layer.originOf("fullExtent")||(0,d.Wi)(this.layer.fullExtent)?"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";this.addResolvingPromise(Promise.reject(new h.Z("layerview:incompatible-fullextent",M)))}}(0,_.Uf)(this,this.layer)&&(this._popupHighlightHelper=new _.VF({createFetchPopupFeaturesQueryGeometry:(i,c)=>(0,s.K)(i,c,this.view),layerView:this,updatingHandles:this.updatingHandles})),this._addTilingSchemeMatchPromise()}destroy(){this._popupHighlightHelper?.destroy()}fetchPopupFeatures(i,c){var M=this;return(0,r.Z)(function*(){return M._popupHighlightHelper?M._popupHighlightHelper.fetchPopupFeatures(i,c):[]})()}doRefresh(){var i=this;return(0,r.Z)(function*(){i.suspended||i.emit("data-changed")})()}};(0,l._)([(0,n.Cb)()],o.prototype,"imageFormatIsOpaque",null),(0,l._)([(0,n.Cb)()],o.prototype,"hasMixedImageFormats",null),(0,l._)([(0,n.Cb)()],o.prototype,"layer",void 0),(0,l._)([(0,n.Cb)()],o.prototype,"tileInfo",null),(0,l._)([(0,n.Cb)()],o.prototype,"dataLevelRange",null),o=(0,l._)([(0,v.j)("esri.views.3d.layers.TileLayerView3D")],o);const O=o},45611:(g,E,e)=>{e.d(E,{Z:()=>_});var r=e(17626),l=e(14517),h=e(61885),d=e(80542),n=e(61996),P=e(63290),D=e(62208),v=e(60330),a=e(77712),u=(e(90912),e(85931),e(76898));let t=class extends((0,d.p)((0,n.IG)((0,v.v)(h.Z.EventedMixin(l.Z))))){constructor(s){super(s),this.layer=null,this.parent=null}initialize(){this.when().catch(s=>{if("layerview:create-error"!==s.name){const o=this.layer&&this.layer.id||"no id",O=this.layer&&this.layer.title||"no title";P.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${O}', id: '${o}')`,s)}})}get fullOpacity(){return(0,D.Pt)(this.get("layer.opacity"),1)*(0,D.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(s){this._overrideIfSome("visible",s)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const s=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(s.viewNotReady=!0),this.layer&&this.layer.loaded||(s.layerNotLoaded=!0),this.visible||(s.layerInvisible=!0),s}isUpdating(){return!1}};(0,r._)([(0,a.Cb)()],t.prototype,"fullOpacity",null),(0,r._)([(0,a.Cb)()],t.prototype,"layer",void 0),(0,r._)([(0,a.Cb)()],t.prototype,"parent",void 0),(0,r._)([(0,a.Cb)({readOnly:!0})],t.prototype,"suspended",null),(0,r._)([(0,a.Cb)({readOnly:!0})],t.prototype,"suspendInfo",null),(0,r._)([(0,a.Cb)({readOnly:!0})],t.prototype,"legendEnabled",null),(0,r._)([(0,a.Cb)({type:Boolean,readOnly:!0})],t.prototype,"updating",null),(0,r._)([(0,a.Cb)({readOnly:!0})],t.prototype,"updatingProgress",null),(0,r._)([(0,a.Cb)()],t.prototype,"visible",null),(0,r._)([(0,a.Cb)()],t.prototype,"view",void 0),t=(0,r._)([(0,u.j)("esri.views.layers.LayerView")],t);const _=t},94421:(g,E,e)=>{e.d(E,{Z:()=>a});var r=e(17626),l=e(63290),h=e(10699),d=e(32917),n=e(77712),v=(e(90912),e(85931),e(76898));const a=y=>{let p=class extends y{initialize(){this.handles.add((0,d.on)(()=>this.layer,"refresh",u=>{this.doRefresh(u.dataChanged).catch(t=>{(0,h.D_)(t)||l.Z.getLogger(this.declaredClass).error(t)})}),"RefreshableLayerView")}};return(0,r._)([(0,n.Cb)()],p.prototype,"layer",void 0),p=(0,r._)([(0,v.j)("esri.layers.mixins.RefreshableLayerView")],p),p}}}]);