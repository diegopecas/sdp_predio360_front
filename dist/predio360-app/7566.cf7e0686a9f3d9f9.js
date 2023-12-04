"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[7566],{57566:(x,C,i)=>{i.r(C),i.d(C,{SceneLayerSnappingSource:()=>h});var c=i(15861),o=i(17626),b=i(14517),p=i(62208),w=i(10699),a=i(77712),f=(i(90912),i(85931),i(76898)),m=i(80542),L=i(54024),k=i(94033),H=i(28093),E=i(42930),I=i(97126),O=i(59550),V=i(75897),Z=i(70211);let u=class extends m.r{constructor(e){super(e),this.availability=0,this._ids=new Set}destroy(){this._workerHandle.destroy(),this._workerHandle=null}initialize(){this._workerHandle=new j(this.schedule,{fetchAllEdgeLocations:(e,t)=>this._fetchAllEdgeLocations(e,t)})}fetchCandidates(e,t){var r=this;return(0,c.Z)(function*(){const n=e.coordinateHelper,{point:d}=e,s=R;r.renderCoordsHelper.toRenderCoords(d,n.spatialReference,s);const y=e.distance,v="number"==typeof y?y:y.distance,g=yield r._workerHandle.invoke({bounds:(0,I.f)(s[0],s[1],s[2],v),types:e.types},t);return g.candidates.sort((S,W)=>S.distance-W.distance),g.candidates.map(S=>r._convertCandidate(n,S))})()}add(e,t){var r=this;return(0,c.Z)(function*(){r._ids.add(e.id),yield r._workerHandle.invokeMethod("add",e,t)})()}remove(e,t){var r=this;return(0,c.Z)(function*(){r._ids.delete(e.id),yield r._workerHandle.invokeMethod("remove",e,t)})()}_convertCandidate(e,t){switch(t.type){case"edge":return new V.L({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),edgeStart:this._convertRenderCoordinate(e,t.start),edgeEnd:this._convertRenderCoordinate(e,t.end),isDraped:!1});case"vertex":return new Z.x({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),isDraped:!1})}}_convertRenderCoordinate({spatialReference:e},t){const r=(0,H.c)();return this.renderCoordsHelper.fromRenderCoords(t,r,e),(0,O.uc)(r)}_fetchAllEdgeLocations(e,t){var r=this;return(0,c.Z)(function*(){const n=[],d=[];for(const{id:s,uid:y}of e.components)r._ids.has(s)&&n.push((0,c.Z)(function*(){const v=yield r.fetchEdgeLocations(s,t.signal),g=v.locations.buffer;return d.push(g),{id:s,uid:y,objectIds:v.objectIds,locations:g,origin:v.origin,type:v.type}})());return{result:{components:(yield Promise.all(n)).filter(({id:s})=>r._ids.has(s))},transferList:d}})()}};(0,o._)([(0,a.Cb)({constructOnly:!0})],u.prototype,"renderCoordsHelper",void 0),(0,o._)([(0,a.Cb)({constructOnly:!0})],u.prototype,"fetchEdgeLocations",void 0),(0,o._)([(0,a.Cb)({constructOnly:!0})],u.prototype,"schedule",void 0),(0,o._)([(0,a.Cb)({readOnly:!0})],u.prototype,"availability",void 0),u=(0,o._)([(0,f.j)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],u);class j extends E.q{constructor(t,r){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},t,{strategy:"dedicated",client:r})}}const R=(0,H.c)();let l=class extends m.r{get updating(){return this.updatingHandles.updating}constructor(e){super(e),this.availability=1,this._abortController=new AbortController}destroy(){this._tracker=(0,p.hw)(this._tracker),this._abortController=(0,p.IM)(this._abortController)}initialize(){var e=this;const{view:t}=this,r=t.resourceController;var n;this._edgeWorker=new k.D(n=>r.immediate.schedule(n)),this._workerHandle=new u({renderCoordsHelper:this.view.renderCoordsHelper,schedule:n=>r.immediate.schedule(n),fetchEdgeLocations:(n=(0,c.Z)(function*(d,s){if((0,p.Wi)(e._tracker))throw new Error("tracker-not-initialized");return e._tracker.fetchEdgeLocations(d,e._edgeWorker,s)}),function(s,y){return n.apply(this,arguments)})}),this.updatingHandles.addPromise(this._setupLayerView()),this.handles.add([(0,L.ed)(this._workerHandle),(0,L.ed)(this._edgeWorker)])}fetchCandidates(e,t){var r=this;return(0,c.Z)(function*(){return r._workerHandle.fetchCandidates(e,t)})()}refresh(){}_setupLayerView(){var e=this;return(0,c.Z)(function*(){if(e.destroyed)return;const t=(0,p.yw)(e._abortController,n=>n.signal),r=yield e.getLayerView();(0,p.Wi)(r)||(0,w.Hc)(t)||(e._tracker=r.trackSnappingSources({add:(n,d)=>{e.updatingHandles.addPromise(e._workerHandle.add({id:n,bounds:d},t))},remove:n=>{e.updatingHandles.addPromise(e._workerHandle.remove({id:n},t))}}))})()}};(0,o._)([(0,a.Cb)({constructOnly:!0})],l.prototype,"getLayerView",void 0),(0,o._)([(0,a.Cb)({constructOnly:!0})],l.prototype,"view",void 0),(0,o._)([(0,a.Cb)({readOnly:!0})],l.prototype,"updating",null),(0,o._)([(0,a.Cb)({readOnly:!0})],l.prototype,"availability",void 0),l=(0,o._)([(0,f.j)("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],l);let h=class extends b.Z{get updating(){return this._i3sSources.some(e=>e.updating)}constructor(e){super(e),this.availability=1,this._i3sSources=[]}destroy(){this._i3sSources.forEach(e=>e.destroy()),this._i3sSources.length=0}initialize(){const{view:e}=this,t=this.layerSource.layer;this._i3sSources="building-scene"===t.type?this._getBuildingSceneI3SSources(e,t):[this._getSceneLayerI3SSource(e,t)]}fetchCandidates(e,t){var r=this;return(0,c.Z)(function*(){const n=yield Promise.all(r._i3sSources.map(d=>d.fetchCandidates(e,t)));return(0,w.k_)(t),n.flat()})()}refresh(){this._i3sSources.forEach(e=>e.refresh())}_getBuildingSceneI3SSources(e,t){return t.allSublayers.toArray().map(r=>{return"building-component"===r.type?new l({getLayerView:(n=(0,c.Z)(function*(){return(yield e.whenLayerView(t)).whenSublayerView(r)}),function(){return n.apply(this,arguments)}),view:e}):null;var n}).filter(p.pC)}_getSceneLayerI3SSource(e,t){return new l({getLayerView:(r=(0,c.Z)(function*(){const n=yield e.whenLayerView(t);return"scene-layer-graphics-3d"===n.type?void 0:n}),function(){return r.apply(this,arguments)}),view:e});var r}};(0,o._)([(0,a.Cb)({constructOnly:!0})],h.prototype,"layerSource",void 0),(0,o._)([(0,a.Cb)({constructOnly:!0})],h.prototype,"view",void 0),(0,o._)([(0,a.Cb)({readOnly:!0})],h.prototype,"updating",null),(0,o._)([(0,a.Cb)({readOnly:!0})],h.prototype,"availability",void 0),h=(0,o._)([(0,f.j)("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],h)}}]);