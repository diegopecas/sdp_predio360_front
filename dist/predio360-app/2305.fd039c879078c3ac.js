"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[2305],{36592:(b,L,_)=>{_.d(L,{Q:()=>O});var p=_(85931),U=_(62208),C=_(77029),v=_(14259);class O{constructor(e=9,t){this._compareMinX=j,this._compareMinY=l,this._toBBox=s=>s,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this._toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),d.prune(),f.prune(),o.prune(),A.prune()}all(e){this._all(this._data,e)}search(e,t){let s=this._data;const r=this._toBBox;if(x(e,s))for(d.clear();s;){for(let i=0,h=s.children.length;i<h;i++){const c=s.children[i],y=s.leaf?r(c):c;x(e,y)&&(s.leaf?t(c):u(e,y)?this._all(c,t):d.push(c))}s=d.pop()}}collides(e){let t=this._data;const s=this._toBBox;if(!x(e,t))return!1;for(d.clear();t;){for(let r=0,i=t.children.length;r<i;r++){const h=t.children[r],c=t.leaf?s(h):h;if(x(e,c)){if(t.leaf||u(e,c))return!0;d.push(h)}}t=d.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let s=0,r=e.length;s<r;s++)this.insert(e[s]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this._data.children.length)if(this._data.height===t.height)this._splitRoot(this._data,t);else{if(this._data.height<t.height){const s=this._data;this._data=t,t=s}this._insert(t,this._data.height-t.height-1,!0)}else this._data=t;return this}insert(e){return e&&this._insert(e,this._data.height-1),this}clear(){return this._data=new Y([]),this}remove(e){if(!e)return this;let t,s=this._data,r=null,i=0,h=!1;const c=this._toBBox(e);for(o.clear(),A.clear();s||o.length>0;){if(s||(s=(0,U.j0)(o.pop()),r=o.data[o.length-1],i=A.pop()??0,h=!0),s.leaf&&(t=(0,p.cq)(s.children,e,s.children.length,s.indexHint),-1!==t))return s.children.splice(t,1),o.push(s),this._condense(o),this;h||s.leaf||!u(s,c)?r?(i++,s=r.children[i],h=!1):s=null:(o.push(s),A.push(i),i=0,r=s,s=s.children[0])}return this}toJSON(){return this._data}fromJSON(e){return this._data=e,this}_all(e,t){let s=e;for(f.clear();s;){if(!0===s.leaf)for(const r of s.children)t(r);else f.pushArray(s.children);s=f.pop()??null}}_build(e,t,s,r){const i=s-t+1;let h=this._maxEntries;if(i<=h){const E=new Y(e.slice(t,s+1));return m(E,this._toBBox),E}r||(r=Math.ceil(Math.log(i)/Math.log(h)),h=Math.ceil(i/h**(r-1)));const c=new M([]);c.height=r;const y=Math.ceil(i/h),P=y*Math.ceil(Math.sqrt(h));D(e,t,s,P,this._compareMinX);for(let E=t;E<=s;E+=P){const T=Math.min(E+P-1,s);D(e,E,T,y,this._compareMinY);for(let F=E;F<=T;F+=y){const Z=Math.min(F+y-1,T);c.children.push(this._build(e,F,Z,r-1))}}return m(c,this._toBBox),c}_chooseSubtree(e,t,s,r){for(;r.push(t),!0!==t.leaf&&r.length-1!==s;){let i,h=1/0,c=1/0;for(let y=0,P=t.children.length;y<P;y++){const E=t.children[y],T=g(E),F=X(e,E)-T;F<c?(c=F,h=T<h?T:h,i=E):F===c&&T<h&&(h=T,i=E)}t=i||t.children[0]}return t}_insert(e,t,s){const i=s?e:(0,this._toBBox)(e);o.clear();const h=this._chooseSubtree(i,this._data,t,o);for(h.children.push(e),R(h,i);t>=0&&o.data[t].children.length>this._maxEntries;)this._split(o,t),t--;this._adjustParentBBoxes(i,o,t)}_split(e,t){const s=e.data[t],r=s.children.length,i=this._minEntries;this._chooseSplitAxis(s,i,r);const h=this._chooseSplitIndex(s,i,r);if(!h)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const c=s.children.splice(h,s.children.length-h),y=s.leaf?new Y(c):new M(c);y.height=s.height,m(s,this._toBBox),m(y,this._toBBox),t?e.data[t-1].children.push(y):this._splitRoot(s,y)}_splitRoot(e,t){this._data=new M([e,t]),this._data.height=e.height+1,m(this._data,this._toBBox)}_chooseSplitIndex(e,t,s){let r,i,h;r=i=1/0;for(let c=t;c<=s-t;c++){const y=B(e,0,c,this._toBBox),P=B(e,c,s,this._toBBox),E=a(y,P),T=g(y)+g(P);E<r?(r=E,h=c,i=T<i?T:i):E===r&&T<i&&(i=T,h=c)}return h}_chooseSplitAxis(e,t,s){const r=e.leaf?this._compareMinX:j,i=e.leaf?this._compareMinY:l;this._allDistMargin(e,t,s,r)<this._allDistMargin(e,t,s,i)&&e.children.sort(r)}_allDistMargin(e,t,s,r){e.children.sort(r);const i=this._toBBox,h=B(e,0,t,i),c=B(e,s-t,s,i);let y=I(h)+I(c);for(let P=t;P<s-t;P++){const E=e.children[P];R(h,e.leaf?i(E):E),y+=I(h)}for(let P=s-t-1;P>=t;P--){const E=e.children[P];R(c,e.leaf?i(E):E),y+=I(c)}return y}_adjustParentBBoxes(e,t,s){for(let r=s;r>=0;r--)R(t.data[r],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const s=e.data[t];if(0===s.children.length)if(t>0){const r=e.data[t-1],i=r.children;i.splice((0,p.cq)(i,s,i.length,r.indexHint),1)}else this.clear();else m(s,this._toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this._compareMinX=new Function("a","b",t.join(e[0])),this._compareMinY=new Function("a","b",t.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function m(n,e){B(n,0,n.children.length,e,n)}function B(n,e,t,s,r){r||(r=new Y([])),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(let i,h=e;h<t;h++)i=n.children[h],R(r,n.leaf?s(i):i);return r}function R(n,e){n.minX=Math.min(n.minX,e.minX),n.minY=Math.min(n.minY,e.minY),n.maxX=Math.max(n.maxX,e.maxX),n.maxY=Math.max(n.maxY,e.maxY)}function j(n,e){return n.minX-e.minX}function l(n,e){return n.minY-e.minY}function g(n){return(n.maxX-n.minX)*(n.maxY-n.minY)}function I(n){return n.maxX-n.minX+(n.maxY-n.minY)}function X(n,e){return(Math.max(e.maxX,n.maxX)-Math.min(e.minX,n.minX))*(Math.max(e.maxY,n.maxY)-Math.min(e.minY,n.minY))}function a(n,e){const t=Math.max(n.minX,e.minX),s=Math.max(n.minY,e.minY),r=Math.min(n.maxX,e.maxX),i=Math.min(n.maxY,e.maxY);return Math.max(0,r-t)*Math.max(0,i-s)}function u(n,e){return n.minX<=e.minX&&n.minY<=e.minY&&e.maxX<=n.maxX&&e.maxY<=n.maxY}function x(n,e){return e.minX<=n.maxX&&e.minY<=n.maxY&&e.maxX>=n.minX&&e.maxY>=n.minY}function D(n,e,t,s,r){const i=[e,t];for(;i.length;){const h=(0,U.j0)(i.pop()),c=(0,U.j0)(i.pop());if(h-c<=s)continue;const y=c+Math.ceil((h-c)/s/2)*s;(0,v.q)(n,y,c,h,r),i.push(c,y,y,h)}}const d=new C.Z,f=new C.Z,o=new C.Z,A=new C.Z({deallocator:void 0});class W{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class S extends W{constructor(){super(...arguments),this.height=1,this.indexHint=new p.SO}}class Y extends S{constructor(e){super(),this.children=e,this.leaf=!0}}class M extends S{constructor(e){super(),this.children=e,this.leaf=!1}}},61256:(b,L,_)=>{_.d(L,{H:()=>R});var p=_(8314),U=_(36592),C=_(65401);const O={minX:0,minY:0,maxX:0,maxY:0};class R{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new U.Q(9,(0,p.Z)("esri-csp-restrictions")?l=>({minX:l[0],minY:l[1],maxX:l[2],maxY:l[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const l=new Array(this._idByBounds.size);let g=0;this._idByBounds.forEach((I,X)=>{l[g++]=X}),this._indexInvalid=!1,this._index.clear(),this._index.load(l)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter(l=>this._idByBounds.has(l))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const l=(0,C.cS)();for(const g of this._boundsById.values())g&&(l[0]=Math.min(g[0],l[0]),l[1]=Math.min(g[1],l[1]),l[2]=Math.max(g[2],l[2]),l[3]=Math.max(g[3],l[3]));return l}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(l){const g=this._boundsById.get(l);this._boundsById.delete(l),g&&(this._idByBounds.delete(g),this._indexInvalid||this._index.remove(g))}forEachInBounds(l,g){this._loadIndex(),function B(j,l,g){(function m(j){O.minX=j[0],O.minY=j[1],O.maxX=j[2],O.maxY=j[3]})(l),j.search(O,g)}(this._index,l,I=>g(this._idByBounds.get(I)))}get(l){return this._boundsById.get(l)}has(l){return this._boundsById.has(l)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(l,g){if(!this._indexInvalid){const I=this._boundsById.get(l);I&&(this._index.remove(I),this._idByBounds.delete(I))}this._boundsById.set(l,g),g&&(this._idByBounds.set(g,l),this._indexInvalid||(this._boundsToLoad.push(g),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},3579:(b,L,_)=>{_.d(L,{Z:()=>I});var p=_(26584),U=_(61885),C=_(63290),v=_(62208),O=_(5548),m=_(65401),B=_(82054),R=_(61256),j=_(92794),l=_(6185);const g=(0,O.Ue)();class I{constructor(a){this.geometryInfo=a,this._boundsStore=new R.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new U.Z,this.featureAdapter=j.n}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let a=0;return this._featuresById.forEach(u=>{(0,v.pC)(u.geometry)&&u.geometry.coords&&(a+=u.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:a/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(a){if((0,v.Wi)(this.fullBounds))return null;const[u,x,D,d]=this.fullBounds;return{xmin:u,ymin:x,xmax:D,ymax:d,spatialReference:(0,l.S2)(a)}}add(a){this._add(a),this._emitChanged()}addMany(a){for(const u of a)this._add(u);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(a){const u=this._featuresById.get(a);return u?(this._remove(u),this._emitChanged(),u):null}removeManyById(a){this._boundsStore.invalidateIndex();for(const u of a){const x=this._featuresById.get(u);x&&this._remove(x)}this._emitChanged()}forEachBounds(a,u){for(const x of a){const D=this._boundsStore.get(x.objectId);D&&u((0,O.JR)(g,D))}}getFeature(a){return this._featuresById.get(a)}has(a){return this._featuresById.has(a)}forEach(a){this._featuresById.forEach(u=>a(u))}forEachInBounds(a,u){this._boundsStore.forEachInBounds(a,x=>{u(this._featuresById.get(x))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let a=!1;this._featuresById.forEach((u,x)=>{this._markedIds.has(x)||(a=!0,this._remove(u))}),this._markedIds.clear(),a&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(a){if(!a)return;const u=a.objectId;if(null==u)return void C.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new p.Z("featurestore:invalid-feature","feature id is missing",{feature:a}));const x=this._featuresById.get(u);let D;if(this._markedIds.add(u),x?(a.displayId=x.displayId,D=this._boundsStore.get(u),this._boundsStore.delete(u)):(0,v.pC)(this.onFeatureAdd)&&this.onFeatureAdd(a),(0,v.Wi)(a.geometry)||!a.geometry.coords||!a.geometry.coords.length)return this._boundsStore.set(u,null),void this._featuresById.set(u,a);D=(0,B.$)((0,v.pC)(D)?D:(0,m.Ue)(),a.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,v.pC)(D)&&this._boundsStore.set(u,D),this._featuresById.set(u,a)}_remove(a){(0,v.pC)(this.onFeatureRemove)&&this.onFeatureRemove(a);const u=a.objectId;return this._markedIds.delete(u),this._boundsStore.delete(u),this._featuresById.delete(u),a}}},92794:(b,L,_)=>{_.d(L,{n:()=>O});var p=_(62208),U=_(77044),C=_(66385),v=_(88071);const O={getObjectId:m=>m.objectId,getAttributes:m=>m.attributes,getAttribute:(m,B)=>m.attributes[B],cloneWithGeometry:(m,B)=>new C.u_(B,m.attributes,null,m.objectId),getGeometry:m=>m.geometry,getCentroid:(m,B)=>((0,p.Wi)(m.centroid)&&(m.centroid=(0,U.Y)(new v.Z,m.geometry,B.hasZ,B.hasM)),m.centroid)}},62305:(b,L,_)=>{_.r(L),_.d(L,{default:()=>x});var p=_(15861),U=_(59213),C=_(26584),v=_(63290),O=_(62208),m=_(10699),B=_(37053),R=_(82054),j=_(3579),l=_(82959),g=_(58175),I=_(58775),X=_(35775),a=_(83774),u=_(60466);class x{constructor(){var d=this;this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=function(){var f=(0,p.Z)(function*(o){const{objectIdField:A}=d._queryEngine,W=yield(0,a.Bm)(d._getFeatureUrl??"",d._featureType.typeName,d._getFeatureOutputFormat,{customParameters:d._customParameters,dateFields:d._queryEngine.fieldsIndex.dateFields.map(M=>M.name),signal:o});yield(0,I.O3)(W),(0,m.k_)(o);const S=(0,I.lG)(W,{geometryType:d._queryEngine.geometryType,hasZ:!1,objectIdField:A});if(!(0,B.fS)(d._queryEngine.spatialReference,B.Zn))for(const M of S)(0,O.pC)(M.geometry)&&(M.geometry=(0,R.GH)((0,l.iV)((0,R.di)(M.geometry,d._queryEngine.geometryType,!1,!1),B.Zn,d._queryEngine.spatialReference)));let Y=1;for(const M of S){const n={};(0,X.O0)(d._fieldsIndex,n,M.attributes,!0),M.attributes=n,null==M.attributes[A]&&(M.objectId=M.attributes[A]=Y++)}return S});return function(o){return f.apply(this,arguments)}}()}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}load(d,f){var o=this;return(0,p.Z)(function*(){const{getFeatureUrl:A,getFeatureOutputFormat:W,spatialReference:S,fields:Y,geometryType:M,featureType:n,objectIdField:e,customParameters:t}=d;o._featureType=n,o._customParameters=t,o._getFeatureUrl=A,o._getFeatureOutputFormat=W,o._fieldsIndex=new u.Z(Y),yield o._checkProjection(S),(0,m.k_)(f),o._queryEngine=new g.q({fields:Y,geometryType:M,hasM:!1,hasZ:!1,objectIdField:e,spatialReference:S,timeInfo:null,featureStore:new j.Z({geometryType:M,hasM:!1,hasZ:!1})});const s=yield o._snapshotFeatures((0,O.Wg)(f.signal));return o._queryEngine.featureStore.addMany(s),{extent:(yield o._queryEngine.fetchRecomputedExtents()).fullExtent}})()}applyEdits(){return(0,p.Z)(function*(){throw new C.Z("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")})()}queryFeatures(d={},f={}){var o=this;return(0,p.Z)(function*(){return yield o._waitSnapshotComplete(),o._queryEngine.executeQuery(d,f.signal)})()}queryFeatureCount(d={},f={}){var o=this;return(0,p.Z)(function*(){return yield o._waitSnapshotComplete(),o._queryEngine.executeQueryForCount(d,f.signal)})()}queryObjectIds(d={},f={}){var o=this;return(0,p.Z)(function*(){return yield o._waitSnapshotComplete(),o._queryEngine.executeQueryForIds(d,f.signal)})()}queryExtent(d={},f={}){var o=this;return(0,p.Z)(function*(){return yield o._waitSnapshotComplete(),o._queryEngine.executeQueryForExtent(d,f.signal)})()}querySnapping(d,f={}){var o=this;return(0,p.Z)(function*(){return yield o._waitSnapshotComplete(),o._queryEngine.executeQueryForSnapping(d,f.signal)})()}refresh(d){var f=this;return(0,p.Z)(function*(){return f._customParameters=d,f._snapshotTask?.abort(),f._snapshotTask=(0,U.vr)(f._snapshotFeatures),f._snapshotTask.promise.then(o=>{f._queryEngine.featureStore.clear(),o&&f._queryEngine.featureStore.addMany(o)},o=>{f._queryEngine.featureStore.clear(),(0,m.D_)(o)||v.Z.getLogger("esri.layers.WFSLayer").error(new C.Z("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:o}))}),yield f._waitSnapshotComplete(),{extent:(yield f._queryEngine.fetchRecomputedExtents()).fullExtent}})()}_waitSnapshotComplete(){var d=this;return(0,p.Z)(function*(){if(d._snapshotTask&&!d._snapshotTask.finished){try{yield d._snapshotTask.promise}catch{}return d._waitSnapshotComplete()}})()}_checkProjection(d){return(0,p.Z)(function*(){try{yield(0,l._W)(B.Zn,d)}catch{throw new C.Z("unsupported-projection","Projection not supported",{spatialReference:d})}})()}}}}]);