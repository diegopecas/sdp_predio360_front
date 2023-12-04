"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[4976],{64976:(O,i,e)=>{e.r(i),e.d(i,{default:()=>h});var r=e(17626),n=e(26584),d=e(77712),E=(e(90912),e(85931),e(76898)),c=e(19702),u=e(50916),o=e(45611);let a=class extends((0,u.r)((0,c.A)(o.Z))){constructor(){super(...arguments),this.type="elevation-3d"}get tileInfo(){return this.layer.tileInfo}initialize(){const p=this.view?.map?.allLayers,t=p&&p.includes(this.layer),_=this.view?.map?.ground?.layers,s=_&&_.includes(this.layer);if(t&&!s){const l=new n.Z("layerview:elevation-layer-only","3D elevation layer '"+this.layer.id+"' can only be added to layers in map.ground");this.addResolvingPromise(Promise.reject(l))}this._addTilingSchemeMatchPromise()}};(0,r._)([(0,d.Cb)()],a.prototype,"layer",void 0),(0,r._)([(0,d.Cb)()],a.prototype,"tileInfo",null),a=(0,r._)([(0,E.j)("esri.views.3d.layers.ElevationLayerView3D")],a);const h=a},19702:(O,i,e)=>{e.d(i,{A:()=>h});var r=e(15861),n=e(17626),d=e(54024),y=e(10699),v=e(32917),E=e(77712),o=(e(90912),e(85931),e(76898)),a=e(36947);const h=p=>{let t=class extends p{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(_){super.postscript(_),(0,a.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}_validateHeightModelInfo(){var _=this;return(0,r.Z)(function*(){const s=new AbortController,l=s.signal;_.handles.add((0,d.kB)(()=>s.abort())),yield(0,v.N1)(()=>_.view.defaultsFromMap?.heightModelInfoReady,l),(0,y.k_)(l);const P=(0,a.Wt)(_.layer,_.view.heightModelInfo,_.supportsHeightUnitConversion);if(P)throw P})()}canResume(){const _=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!_||!_.minScale||!_.maxScale||_.minScale>=_.maxScale)}getSuspendInfo(){const _=super.getSuspendInfo(),s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return s&&s.minScale&&s.maxScale&&s.minScale<s.maxScale&&(_.outsideScaleRange=!0),_}};return(0,n._)([(0,E.Cb)()],t.prototype,"view",void 0),(0,n._)([(0,E.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,n._)([(0,o.j)("esri.views.3d.layers.LayerView3D")],t),t}},45611:(O,i,e)=>{e.d(i,{Z:()=>_});var r=e(17626),n=e(14517),d=e(61885),y=e(80542),v=e(61996),E=e(63290),c=e(62208),u=e(60330),o=e(77712),p=(e(90912),e(85931),e(76898));let t=class extends((0,y.p)((0,v.IG)((0,u.v)(d.Z.EventedMixin(n.Z))))){constructor(s){super(s),this.layer=null,this.parent=null}initialize(){this.when().catch(s=>{if("layerview:create-error"!==s.name){const l=this.layer&&this.layer.id||"no id",P=this.layer&&this.layer.title||"no title";E.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${P}', id: '${l}')`,s)}})}get fullOpacity(){return(0,c.Pt)(this.get("layer.opacity"),1)*(0,c.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(s){this._overrideIfSome("visible",s)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const s=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(s.viewNotReady=!0),this.layer&&this.layer.loaded||(s.layerNotLoaded=!0),this.visible||(s.layerInvisible=!0),s}isUpdating(){return!1}};(0,r._)([(0,o.Cb)()],t.prototype,"fullOpacity",null),(0,r._)([(0,o.Cb)()],t.prototype,"layer",void 0),(0,r._)([(0,o.Cb)()],t.prototype,"parent",void 0),(0,r._)([(0,o.Cb)({readOnly:!0})],t.prototype,"suspended",null),(0,r._)([(0,o.Cb)({readOnly:!0})],t.prototype,"suspendInfo",null),(0,r._)([(0,o.Cb)({readOnly:!0})],t.prototype,"legendEnabled",null),(0,r._)([(0,o.Cb)({type:Boolean,readOnly:!0})],t.prototype,"updating",null),(0,r._)([(0,o.Cb)({readOnly:!0})],t.prototype,"updatingProgress",null),(0,r._)([(0,o.Cb)()],t.prototype,"visible",null),(0,r._)([(0,o.Cb)()],t.prototype,"view",void 0),t=(0,r._)([(0,p.j)("esri.views.layers.LayerView")],t);const _=t}}]);