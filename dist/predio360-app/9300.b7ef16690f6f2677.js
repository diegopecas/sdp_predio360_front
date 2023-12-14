"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[9300],{49300:(A,c,s)=>{s.r(c),s.d(c,{default:()=>w});var l=s(15861),_=s(17626),T=s(63290),n=s(10699),g=s(32917),f=s(77712),P=(s(90912),s(85931),s(76898)),d=s(37053),v=s(91082),m=s(37384),p=s(88893),O=s(9598),y=s(58098),R=s(8480),U=s(79527),L=s(45611),S=s(94421);const C=[102113,102100,3857,3785,900913],B=[0,0];let a=class extends((0,S.Z)((0,v.Y)((0,m.y)(L.Z)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){const e=this.tileMatrixSet?.tileInfo;e&&(this._tileInfoView=new O.Z(e),this._fetchQueue=new R.Z({tileInfoView:this._tileInfoView,concurrency:16,process:(t,i)=>this.fetchTile(t,i)}),this._tileStrategy=new U.Z({cachePolicy:"keep",resampling:!0,acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView}),this.addAttachHandles((0,g.YP)(()=>[this.layer?.activeLayer?.styleId,this.tileMatrixSet],()=>this._refresh())),super.attach())}detach(){super.detach(),this._tileStrategy?.destroy(),this._fetchQueue?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(B,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}doRefresh(){var e=this;return(0,l.Z)(function*(){!e.attached||e.updateRequested||e.suspended||e._refresh()})()}isUpdating(){return this._fetchQueue?.updating??!1}fetchTile(e,t={}){var i=this;return(0,l.Z)(function*(){const r="tilemapCache"in i.layer?i.layer.tilemapCache:null,{signal:h,resamplingLevel:E=0}=t;if(!r)return i._fetchImage(e,h);const o=new y.Z(0,0,0,0);let M;try{yield r.fetchAvailabilityUpsample(e.level,e.row,e.col,o,{signal:h}),M=yield i._fetchImage(o,h)}catch(u){if((0,n.D_)(u))throw u;if(E<3){const I=i._tileInfoView.getTileParentId(e.id);if(I){const D=new y.Z(I),V=yield i.fetchTile(D,{...t,resamplingLevel:E+1});return(0,p.i)(i._tileInfoView,V,D,e)}}throw u}return(0,p.i)(i._tileInfoView,M,o,e)})()}canResume(){return super.canResume()&&null!==this.tileMatrixSet}supportsSpatialReference(e){return this.layer.activeLayer.tileMatrixSets?.some(t=>(0,d.fS)(t.tileInfo?.spatialReference,e))??!1}_enqueueTileFetch(e){var t=this;return(0,l.Z)(function*(){if(!t._fetchQueue.has(e.key.id)){try{const i=yield t._fetchQueue.push(e.key);e.bitmap.source=i,e.bitmap.width=t._tileInfoView.tileInfo.size[0],e.bitmap.height=t._tileInfoView.tileInfo.size[1],e.once("attach",()=>t.requestUpdate())}catch(i){(0,n.D_)(i)||T.Z.getLogger(t.declaredClass).error(i)}t.requestUpdate()}})()}_fetchImage(e,t){var i=this;return(0,l.Z)(function*(){return i.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})})()}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then(i=>{e.bitmap.source=i}).catch(i=>{(0,n.D_)(i)||(e.bitmap.source=null)}).finally(()=>{e.requestRender(),t.fulfilled=!0})};this._tileRequests.set(e,t)})}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find(r=>(0,d.fS)(r.tileInfo?.spatialReference,t));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find(r=>C.includes(r.tileInfo?.spatialReference.wkid??-1))),i}};(0,_._)([(0,f.Cb)()],a.prototype,"_fetchQueue",void 0),(0,_._)([(0,f.Cb)({readOnly:!0})],a.prototype,"tileMatrixSet",null),a=(0,_._)([(0,P.j)("esri.views.2d.layers.WMTSLayerView2D")],a);const w=a}}]);