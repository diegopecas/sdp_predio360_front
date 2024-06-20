"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[2569],{26268:(g,h,t)=>{t.d(h,{Z:()=>D});var o=t(8314),l=t(39406),u=t(44589),c=t(13382),E=t(7590);const y=(n,_)=>n.key.level-_.key.level!=0?n.key.level-_.key.level:n.key.row-_.key.row!=0?n.key.row-_.key.row:n.key.col-_.key.col;class D extends u.Z{constructor(_){super(),this._tileInfoView=_}renderChildren(_){this.sortChildren(y),this.setStencilReference(_),super.renderChildren(_)}createRenderParams(_){const{state:r}=_,a=super.createRenderParams(_);return a.requiredLevel=this._tileInfoView.getClosestInfoForScale(r.scale).level,a.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(r.scale),a}prepareRenderPasses(_){const r=super.prepareRenderPasses(_);return r.push(_.registerRenderPass({name:"stencil",brushes:[c.Z],drawPhase:l.jx.DEBUG|l.jx.MAP|l.jx.HIGHLIGHT|l.jx.LABEL,target:()=>this.getStencilTarget()})),(0,o.Z)("esri-tiles-debug")&&r.push(_.registerRenderPass({name:"tileInfo",brushes:[E.Z],drawPhase:l.jx.DEBUG,target:()=>this.children})),r}getStencilTarget(){return this.children}setStencilReference(_){let r=1;for(const a of this.children)a.stencilRef=r++}}},49300:(g,h,t)=>{t.r(h),t.d(h,{default:()=>A});var o=t(15861),l=t(17626),u=t(63290),c=t(10699),E=t(77712),n=(t(8314),t(4619),t(76898)),_=t(37053),r=t(30026),a=t(56800),f=t(88893),M=t(9598),p=t(58098),U=t(8480),C=t(79527),B=t(45611),S=t(94421);const j=new Set([102113,102100,3857,3785,900913]),W=[0,0];let P=class extends((0,S.Z)((0,r.Y)((0,a.y)(B.Z)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){const e=this.tileMatrixSet?.tileInfo;e&&(this._tileInfoView=new M.Z(e),this._fetchQueue=new U.Z({tileInfoView:this._tileInfoView,concurrency:16,process:(s,i)=>this.fetchTile(s,i)}),this._tileStrategy=new C.Z({cachePolicy:"keep",resampling:!0,acquireTile:s=>this.acquireTile(s),releaseTile:s=>this.releaseTile(s),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add(()=>[this.layer?.activeLayer?.styleId,this.tileMatrixSet],()=>this.doRefresh())),super.attach())}detach(){super.detach(),this._tileStrategy?.destroy(),this._fetchQueue?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){return this.layer.activeLayer.tileMatrixSets?.some(s=>(0,_.fS)(s.tileInfo?.spatialReference,e))??!1}doRefresh(){var e=this;return(0,o.Z)(function*(){if(e.attached){if(e.suspended)return e._tileStrategy.clear(),void e.requestUpdate();e._fetchQueue.reset(),e._tileStrategy.refresh(s=>e._updatingHandles.addPromise(e._enqueueTileFetch(s)))}})()}acquireTile(e){const s=this._bitmapView.createTile(e),i=s.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(W,s.key),i.resolution=this._tileInfoView.getTileResolution(s.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(s)),this._bitmapView.addChild(s),this.requestUpdate(),s}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}fetchTile(e,s={}){var i=this;return(0,o.Z)(function*(){const d="tilemapCache"in i.layer?i.layer.tilemapCache:null,{signal:I,resamplingLevel:v=0}=s;if(!d)return i._fetchImage(e,I);const O=new p.Z(0,0,0,0);let L;try{yield d.fetchAvailabilityUpsample(e.level,e.row,e.col,O,{signal:I}),L=yield i._fetchImage(O,I)}catch(T){if((0,c.D_)(T))throw T;if(v<3){const R=i._tileInfoView.getTileParentId(e.id);if(R){const m=new p.Z(R),K=yield i.fetchTile(m,{...s,resamplingLevel:v+1});return(0,f.i)(i._tileInfoView,K,m,e)}}throw T}return(0,f.i)(i._tileInfoView,L,O,e)})()}canResume(){return super.canResume()&&null!==this.tileMatrixSet}_enqueueTileFetch(e){var s=this;return(0,o.Z)(function*(){if(!s._fetchQueue.has(e.key.id)){try{const i=yield s._fetchQueue.push(e.key);e.bitmap.source=i,e.bitmap.width=s._tileInfoView.tileInfo.size[0],e.bitmap.height=s._tileInfoView.tileInfo.size[1],e.once("attach",()=>s.requestUpdate())}catch(i){(0,c.D_)(i)||u.Z.getLogger(s).error(i)}s.requestUpdate()}})()}_fetchImage(e,s){var i=this;return(0,o.Z)(function*(){return i.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:s})})()}_getTileMatrixSetBySpatialReference(e){const s=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find(d=>(0,_.fS)(d.tileInfo?.spatialReference,s));return!i&&s.isWebMercator&&(i=e.tileMatrixSets.find(d=>j.has(d.tileInfo?.spatialReference.wkid??-1))),i}};(0,l._)([(0,E.Cb)({readOnly:!0})],P.prototype,"tileMatrixSet",null),P=(0,l._)([(0,n.j)("esri.views.2d.layers.WMTSLayerView2D")],P);const A=P},94421:(g,h,t)=>{t.d(h,{Z:()=>_});var o=t(17626),l=t(63290),u=t(10699),c=t(32917),n=(t(8314),t(4619),t(26584),t(76898));const _=r=>{let a=class extends r{initialize(){this.addHandles((0,c.on)(()=>this.layer,"refresh",f=>{this.doRefresh(f.dataChanged).catch(M=>{(0,u.D_)(M)||l.Z.getLogger(this).error(M)})}),"RefreshableLayerView")}};return a=(0,o._)([(0,n.j)("esri.layers.mixins.RefreshableLayerView")],a),a}}}]);