"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[1269],{21269:(U,y,i)=>{i.r(y),i.d(y,{default:()=>T});var p=i(15861),L=i(17626),m=i(62208),S=i(10699),P=(i(63290),i(90912),i(85931),i(26584),i(8314),i(76898)),u=i(84161),c=i(28093),v=i(13777),g=i(97126),C=i(83308),E=i(82274),V=i(17827);function x(t,s,n){const o=(0,g.c)(),e=(0,g.g)(o);return(0,u.z)(e,e,t,.5),(0,u.z)(e,e,s,.5),o[3]=(0,u.i)(e,t),(0,u.a)(e,e,n),o}let f=class{constructor(){this._idToComponent=new Map,this._components=new E.Z(t=>t.bounds),this._edges=new E.Z(t=>t.bounds),this._tmpLineSegment=(0,v.Ue)(),this._tmpP1=(0,c.c)(),this._tmpP2=(0,c.c)(),this._tmpP3=(0,c.c)(),this.remoteClient=null}fetchCandidates(t,s){var n=this;return(0,p.Z)(function*(){yield Promise.resolve(),(0,S.k_)(s),yield n._ensureEdgeLocations(t,s);const o=[];return n._edges.forEachNeighbor(e=>(n._addCandidates(t,e,o),o.length<1e3),t.bounds),{result:{candidates:o}}})()}_ensureEdgeLocations(t,s){var n=this;return(0,p.Z)(function*(){const o=[];if(n._components.forEachNeighbor(a=>{if((0,m.Wi)(a.info)){const{id:r,uid:d}=a;o.push({id:r,uid:d})}return!0},t.bounds),!o.length)return;const e={components:o},h=yield n.remoteClient.invoke("fetchAllEdgeLocations",e,(0,m.Pt)(s,{}));for(const a of h.components)n._setFetchEdgeLocations(a)})()}add(t){var s=this;return(0,p.Z)(function*(){const n=new j(t.id,t.bounds);return s._idToComponent.set(n.id,n),s._components.add([n]),{result:{}}})()}remove(t){var s=this;return(0,p.Z)(function*(){const n=s._idToComponent.get(t.id);if(n){const o=[];s._edges.forEachNeighbor(e=>(e.component===n&&o.push(e),!0),n.bounds),s._edges.remove(o),s._components.remove([n]),s._idToComponent.delete(n.id)}return{result:{}}})()}_setFetchEdgeLocations(t){const s=this._idToComponent.get(t.id);if((0,m.Wi)(s)||t.uid!==s.uid)return;const n=V.n_.createView(t.locations),o=new Array(n.count),e=(0,c.c)(),h=(0,c.c)();for(let d=0;d<n.count;d++){n.position0.getVec(d,e),n.position1.getVec(d,h);const l=x(e,h,t.origin),Z=new I(s,d,l);o[d]=Z}this._edges.add(o);const{objectIds:a,origin:r}=t;s.info={locations:n,objectIds:a,origin:r}}_addCandidates(t,s,n){const{info:o}=s.component,{origin:e,objectIds:h}=o,a=o.locations,r=a.position0.getVec(s.index,this._tmpP1),d=a.position1.getVec(s.index,this._tmpP2);(0,u.a)(r,r,e),(0,u.a)(d,d,e);const l=h[a.componentIndex.get(s.index)];this._addEdgeCandidate(t,l,r,d,n),this._addVertexCandidate(t,l,r,n),this._addVertexCandidate(t,l,d,n)}_addEdgeCandidate(t,s,n,o,e){if(!(t.types&C.r.EDGE))return;const h=(0,g.g)(t.bounds),a=(0,v.zk)(n,o,this._tmpLineSegment),r=(0,v.nF)(a,h,this._tmpP3);(0,g.m)(t.bounds,r)&&e.push({type:"edge",objectId:s,target:(0,c.a)(r),distance:(0,u.i)(h,r),start:(0,c.a)(n),end:(0,c.a)(o)})}_addVertexCandidate(t,s,n,o){if(!(t.types&C.r.VERTEX))return;const e=(0,g.g)(t.bounds);(0,g.m)(t.bounds,n)&&o.push({type:"vertex",objectId:s,target:(0,c.a)(n),distance:(0,u.i)(e,n)})}};f=(0,L._)([(0,P.j)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],f);const T=f;let j=(()=>{class t{constructor(n,o){this.id=n,this.bounds=o,this.info=null,this.uid=++t.uid}}return t.uid=0,t})();class I{constructor(s,n,o){this.component=s,this.index=n,this.bounds=o}}}}]);