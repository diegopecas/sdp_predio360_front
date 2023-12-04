"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[6354],{36592:(ie,Y,l)=>{l.d(Y,{Q:()=>f});var I=l(85931),C=l(62208),N=l(77029),j=l(14259);class f{constructor(n=9,o){this._compareMinX=w,this._compareMinY=E,this._toBBox=r=>r,this._maxEntries=Math.max(4,n||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),o&&("function"==typeof o?this._toBBox=o:this._initFormat(o)),this.clear()}destroy(){this.clear(),W.prune(),G.prune(),U.prune(),V.prune()}all(n){this._all(this._data,n)}search(n,o){let r=this._data;const h=this._toBBox;if(M(n,r))for(W.clear();r;){for(let d=0,p=r.children.length;d<p;d++){const m=r.children[d],b=r.leaf?h(m):m;M(n,b)&&(r.leaf?o(m):v(n,b)?this._all(m,o):W.push(m))}r=W.pop()}}collides(n){let o=this._data;const r=this._toBBox;if(!M(n,o))return!1;for(W.clear();o;){for(let h=0,d=o.children.length;h<d;h++){const p=o.children[h],m=o.leaf?r(p):p;if(M(n,m)){if(o.leaf||v(n,m))return!0;W.push(p)}}o=W.pop()}return!1}load(n){if(!n.length)return this;if(n.length<this._minEntries){for(let r=0,h=n.length;r<h;r++)this.insert(n[r]);return this}let o=this._build(n.slice(0,n.length),0,n.length-1,0);if(this._data.children.length)if(this._data.height===o.height)this._splitRoot(this._data,o);else{if(this._data.height<o.height){const r=this._data;this._data=o,o=r}this._insert(o,this._data.height-o.height-1,!0)}else this._data=o;return this}insert(n){return n&&this._insert(n,this._data.height-1),this}clear(){return this._data=new L([]),this}remove(n){if(!n)return this;let o,r=this._data,h=null,d=0,p=!1;const m=this._toBBox(n);for(U.clear(),V.clear();r||U.length>0;){if(r||(r=(0,C.j0)(U.pop()),h=U.data[U.length-1],d=V.pop()??0,p=!0),r.leaf&&(o=(0,I.cq)(r.children,n,r.children.length,r.indexHint),-1!==o))return r.children.splice(o,1),U.push(r),this._condense(U),this;p||r.leaf||!v(r,m)?h?(d++,r=h.children[d],p=!1):r=null:(U.push(r),V.push(d),d=0,h=r,r=r.children[0])}return this}toJSON(){return this._data}fromJSON(n){return this._data=n,this}_all(n,o){let r=n;for(G.clear();r;){if(!0===r.leaf)for(const h of r.children)o(h);else G.pushArray(r.children);r=G.pop()??null}}_build(n,o,r,h){const d=r-o+1;let p=this._maxEntries;if(d<=p){const B=new L(n.slice(o,r+1));return y(B,this._toBBox),B}h||(h=Math.ceil(Math.log(d)/Math.log(p)),p=Math.ceil(d/p**(h-1)));const m=new q([]);m.height=h;const b=Math.ceil(d/p),_=b*Math.ceil(Math.sqrt(p));D(n,o,r,_,this._compareMinX);for(let B=o;B<=r;B+=_){const T=Math.min(B+_-1,r);D(n,B,T,b,this._compareMinY);for(let X=B;X<=T;X+=b){const ee=Math.min(X+b-1,T);m.children.push(this._build(n,X,ee,h-1))}}return y(m,this._toBBox),m}_chooseSubtree(n,o,r,h){for(;h.push(o),!0!==o.leaf&&h.length-1!==r;){let d,p=1/0,m=1/0;for(let b=0,_=o.children.length;b<_;b++){const B=o.children[b],T=S(B),X=J(n,B)-T;X<m?(m=X,p=T<p?T:p,d=B):X===m&&T<p&&(p=T,d=B)}o=d||o.children[0]}return o}_insert(n,o,r){const d=r?n:(0,this._toBBox)(n);U.clear();const p=this._chooseSubtree(d,this._data,o,U);for(p.children.push(n),F(p,d);o>=0&&U.data[o].children.length>this._maxEntries;)this._split(U,o),o--;this._adjustParentBBoxes(d,U,o)}_split(n,o){const r=n.data[o],h=r.children.length,d=this._minEntries;this._chooseSplitAxis(r,d,h);const p=this._chooseSplitIndex(r,d,h);if(!p)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const m=r.children.splice(p,r.children.length-p),b=r.leaf?new L(m):new q(m);b.height=r.height,y(r,this._toBBox),y(b,this._toBBox),o?n.data[o-1].children.push(b):this._splitRoot(r,b)}_splitRoot(n,o){this._data=new q([n,o]),this._data.height=n.height+1,y(this._data,this._toBBox)}_chooseSplitIndex(n,o,r){let h,d,p;h=d=1/0;for(let m=o;m<=r-o;m++){const b=A(n,0,m,this._toBBox),_=A(n,m,r,this._toBBox),B=g(b,_),T=S(b)+S(_);B<h?(h=B,p=m,d=T<d?T:d):B===h&&T<d&&(d=T,p=m)}return p}_chooseSplitAxis(n,o,r){const h=n.leaf?this._compareMinX:w,d=n.leaf?this._compareMinY:E;this._allDistMargin(n,o,r,h)<this._allDistMargin(n,o,r,d)&&n.children.sort(h)}_allDistMargin(n,o,r,h){n.children.sort(h);const d=this._toBBox,p=A(n,0,o,d),m=A(n,r-o,r,d);let b=H(p)+H(m);for(let _=o;_<r-o;_++){const B=n.children[_];F(p,n.leaf?d(B):B),b+=H(p)}for(let _=r-o-1;_>=o;_--){const B=n.children[_];F(m,n.leaf?d(B):B),b+=H(m)}return b}_adjustParentBBoxes(n,o,r){for(let h=r;h>=0;h--)F(o.data[h],n)}_condense(n){for(let o=n.length-1;o>=0;o--){const r=n.data[o];if(0===r.children.length)if(o>0){const h=n.data[o-1],d=h.children;d.splice((0,I.cq)(d,r,d.length,h.indexHint),1)}else this.clear();else y(r,this._toBBox)}}_initFormat(n){const o=["return a"," - b",";"];this._compareMinX=new Function("a","b",o.join(n[0])),this._compareMinY=new Function("a","b",o.join(n[1])),this._toBBox=new Function("a","return {minX: a"+n[0]+", minY: a"+n[1]+", maxX: a"+n[2]+", maxY: a"+n[3]+"};")}}function y(u,n){A(u,0,u.children.length,n,u)}function A(u,n,o,r,h){h||(h=new L([])),h.minX=1/0,h.minY=1/0,h.maxX=-1/0,h.maxY=-1/0;for(let d,p=n;p<o;p++)d=u.children[p],F(h,u.leaf?r(d):d);return h}function F(u,n){u.minX=Math.min(u.minX,n.minX),u.minY=Math.min(u.minY,n.minY),u.maxX=Math.max(u.maxX,n.maxX),u.maxY=Math.max(u.maxY,n.maxY)}function w(u,n){return u.minX-n.minX}function E(u,n){return u.minY-n.minY}function S(u){return(u.maxX-u.minX)*(u.maxY-u.minY)}function H(u){return u.maxX-u.minX+(u.maxY-u.minY)}function J(u,n){return(Math.max(n.maxX,u.maxX)-Math.min(n.minX,u.minX))*(Math.max(n.maxY,u.maxY)-Math.min(n.minY,u.minY))}function g(u,n){const o=Math.max(u.minX,n.minX),r=Math.max(u.minY,n.minY),h=Math.min(u.maxX,n.maxX),d=Math.min(u.maxY,n.maxY);return Math.max(0,h-o)*Math.max(0,d-r)}function v(u,n){return u.minX<=n.minX&&u.minY<=n.minY&&n.maxX<=u.maxX&&n.maxY<=u.maxY}function M(u,n){return n.minX<=u.maxX&&n.minY<=u.maxY&&n.maxX>=u.minX&&n.maxY>=u.minY}function D(u,n,o,r,h){const d=[n,o];for(;d.length;){const p=(0,C.j0)(d.pop()),m=(0,C.j0)(d.pop());if(p-m<=r)continue;const b=m+Math.ceil((p-m)/r/2)*r;(0,j.q)(u,b,m,p,h),d.push(m,b,b,p)}}const W=new N.Z,G=new N.Z,U=new N.Z,V=new N.Z({deallocator:void 0});class se{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class Q extends se{constructor(){super(...arguments),this.height=1,this.indexHint=new I.SO}}class L extends Q{constructor(n){super(),this.children=n,this.leaf=!0}}class q extends Q{constructor(n){super(),this.children=n,this.leaf=!1}}},61256:(ie,Y,l)=>{l.d(Y,{H:()=>F});var I=l(8314),C=l(36592),N=l(65401);const f={minX:0,minY:0,maxX:0,maxY:0};class F{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new C.Q(9,(0,I.Z)("esri-csp-restrictions")?E=>({minX:E[0],minY:E[1],maxX:E[2],maxY:E[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const E=new Array(this._idByBounds.size);let S=0;this._idByBounds.forEach((H,J)=>{E[S++]=J}),this._indexInvalid=!1,this._index.clear(),this._index.load(E)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter(E=>this._idByBounds.has(E))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const E=(0,N.cS)();for(const S of this._boundsById.values())S&&(E[0]=Math.min(S[0],E[0]),E[1]=Math.min(S[1],E[1]),E[2]=Math.max(S[2],E[2]),E[3]=Math.max(S[3],E[3]));return E}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(E){const S=this._boundsById.get(E);this._boundsById.delete(E),S&&(this._idByBounds.delete(S),this._indexInvalid||this._index.remove(S))}forEachInBounds(E,S){this._loadIndex(),function A(w,E,S){(function y(w){f.minX=w[0],f.minY=w[1],f.maxX=w[2],f.maxY=w[3]})(E),w.search(f,S)}(this._index,E,H=>S(this._idByBounds.get(H)))}get(E){return this._boundsById.get(E)}has(E){return this._boundsById.has(E)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(E,S){if(!this._indexInvalid){const H=this._boundsById.get(E);H&&(this._index.remove(H),this._idByBounds.delete(H))}this._boundsById.set(E,S),S&&(this._idByBounds.set(S,E),this._indexInvalid||(this._boundsToLoad.push(S),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},3579:(ie,Y,l)=>{l.d(Y,{Z:()=>H});var I=l(26584),C=l(61885),N=l(63290),j=l(62208),f=l(5548),y=l(65401),A=l(82054),F=l(61256),w=l(92794),E=l(6185);const S=(0,f.Ue)();class H{constructor(g){this.geometryInfo=g,this._boundsStore=new F.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new C.Z,this.featureAdapter=w.n}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let g=0;return this._featuresById.forEach(v=>{(0,j.pC)(v.geometry)&&v.geometry.coords&&(g+=v.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:g/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(g){if((0,j.Wi)(this.fullBounds))return null;const[v,M,D,W]=this.fullBounds;return{xmin:v,ymin:M,xmax:D,ymax:W,spatialReference:(0,E.S2)(g)}}add(g){this._add(g),this._emitChanged()}addMany(g){for(const v of g)this._add(v);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(g){const v=this._featuresById.get(g);return v?(this._remove(v),this._emitChanged(),v):null}removeManyById(g){this._boundsStore.invalidateIndex();for(const v of g){const M=this._featuresById.get(v);M&&this._remove(M)}this._emitChanged()}forEachBounds(g,v){for(const M of g){const D=this._boundsStore.get(M.objectId);D&&v((0,f.JR)(S,D))}}getFeature(g){return this._featuresById.get(g)}has(g){return this._featuresById.has(g)}forEach(g){this._featuresById.forEach(v=>g(v))}forEachInBounds(g,v){this._boundsStore.forEachInBounds(g,M=>{v(this._featuresById.get(M))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let g=!1;this._featuresById.forEach((v,M)=>{this._markedIds.has(M)||(g=!0,this._remove(v))}),this._markedIds.clear(),g&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(g){if(!g)return;const v=g.objectId;if(null==v)return void N.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new I.Z("featurestore:invalid-feature","feature id is missing",{feature:g}));const M=this._featuresById.get(v);let D;if(this._markedIds.add(v),M?(g.displayId=M.displayId,D=this._boundsStore.get(v),this._boundsStore.delete(v)):(0,j.pC)(this.onFeatureAdd)&&this.onFeatureAdd(g),(0,j.Wi)(g.geometry)||!g.geometry.coords||!g.geometry.coords.length)return this._boundsStore.set(v,null),void this._featuresById.set(v,g);D=(0,A.$)((0,j.pC)(D)?D:(0,y.Ue)(),g.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,j.pC)(D)&&this._boundsStore.set(v,D),this._featuresById.set(v,g)}_remove(g){(0,j.pC)(this.onFeatureRemove)&&this.onFeatureRemove(g);const v=g.objectId;return this._markedIds.delete(v),this._boundsStore.delete(v),this._featuresById.delete(v),g}}},92794:(ie,Y,l)=>{l.d(Y,{n:()=>f});var I=l(62208),C=l(77044),N=l(66385),j=l(88071);const f={getObjectId:y=>y.objectId,getAttributes:y=>y.attributes,getAttribute:(y,A)=>y.attributes[A],cloneWithGeometry:(y,A)=>new N.u_(A,y.attributes,null,y.objectId),getGeometry:y=>y.geometry,getCentroid:(y,A)=>((0,I.Wi)(y.centroid)&&(y.centroid=(0,C.Y)(new j.Z,y.geometry,A.hasZ,A.hasM)),y.centroid)}},86354:(ie,Y,l)=>{l.r(Y),l.d(Y,{default:()=>Ee});var I=l(15861),C=l(17626),N=l(61885),j=l(72392),f=l(62208),y=l(10699),A=l(32917),F=l(77712),E=(l(90912),l(85931)),S=l(76898),H=l(17760),J=l(65234),g=l(3579),v=l(58175),M=l(2584),D=l(96854),W=l(82706),G=l(17936),U=l(1520),V=l(83010),se=l(14517);let Q=class extends se.Z{constructor(){super(...arguments),this.updating=!1,this._pending=[]}push(e,t){this._pending.push({promise:e,callback:t}),1===this._pending.length&&this._process()}_process(){if(!this._pending.length)return void(this.updating=!1);this.updating=!0;const e=this._pending[0];e.promise.then(t=>e.callback(t)).catch(()=>{}).then(()=>{this._pending.shift(),this._process()})}};(0,C._)([(0,F.Cb)()],Q.prototype,"updating",void 0),Q=(0,C._)([(0,S.j)("esri.core.AsyncSequence")],Q);var _,e,L=l(59213),q=l(80542),u=l(54024),n=l(63290),o=l(2004),r=l(65401),h=l(82054),d=l(38305),p=l(98558),m=l(20477);class b{constructor(t,i){this.data=t,this.resolution=i,this.state={type:_.CREATED},this.alive=!0}process(t){switch(this.state.type){case _.CREATED:return this.state=this._gotoFetchCount(this.state,t),this.state.task.promise.then(t.resume,t.resume);case _.FETCH_COUNT:break;case _.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,t),this.state.task.promise.then(t.resume,t.resume);case _.FETCH_FEATURES:break;case _.FETCHED_FEATURES:this.state=this._goToDone(this.state,t)}return null}get debugInfo(){return{data:this.data,featureCount:this._featureCount,state:this._stateToString}}get _featureCount(){switch(this.state.type){case _.CREATED:case _.FETCH_COUNT:return 0;case _.FETCHED_COUNT:return this.state.featureCount;case _.FETCH_FEATURES:return this.state.previous.featureCount;case _.FETCHED_FEATURES:return this.state.features.length;case _.DONE:return this.state.previous.features.length}}get _stateToString(){switch(this.state.type){case _.CREATED:return"created";case _.FETCH_COUNT:return"fetch-count";case _.FETCHED_COUNT:return"fetched-count";case _.FETCH_FEATURES:return"fetch-features";case _.FETCHED_FEATURES:return"fetched-features";case _.DONE:return"done"}}_gotoFetchCount(t,i){var s=this;return{type:_.FETCH_COUNT,previous:t,task:(0,L.vr)(function(){var a=(0,I.Z)(function*(c){const x=yield(0,L.mt)(i.fetchCount(s,c));s.state.type===_.FETCH_COUNT&&(s.state=s._gotoFetchedCount(s.state,x.ok?x.value:1/0))});return function(c){return a.apply(this,arguments)}}())}}_gotoFetchedCount(t,i){return{type:_.FETCHED_COUNT,featureCount:i,previous:t}}_gotoFetchFeatures(t,i){var s=this;return{type:_.FETCH_FEATURES,previous:t,task:(0,L.vr)(function(){var a=(0,I.Z)(function*(c){const x=yield(0,L.mt)(i.fetchFeatures(s,t.featureCount,c));s.state.type===_.FETCH_FEATURES&&(s.state=s._gotoFetchedFeatures(s.state,x.ok?x.value:[]))});return function(c){return a.apply(this,arguments)}}())}}_gotoFetchedFeatures(t,i){return{type:_.FETCHED_FEATURES,previous:t,features:i}}_goToDone(t,i){return i.finish(this,t.features),{type:_.DONE,previous:t}}reset(){const t=this.state;switch(this.state={type:_.CREATED},t.type){case _.CREATED:case _.FETCHED_COUNT:case _.FETCHED_FEATURES:case _.DONE:break;case _.FETCH_COUNT:case _.FETCH_FEATURES:t.task.abort()}}intersects(t){return!(!(0,f.Wi)(t)&&this.data.extent)||((0,r.oJ)(t,B),(0,r.kK)(this.data.extent,B))}}(e=_||(_={}))[e.CREATED=0]="CREATED",e[e.FETCH_COUNT=1]="FETCH_COUNT",e[e.FETCHED_COUNT=2]="FETCHED_COUNT",e[e.FETCH_FEATURES=3]="FETCH_FEATURES",e[e.FETCHED_FEATURES=4]="FETCHED_FEATURES",e[e.DONE=5]="DONE";const B=(0,r.Ue)();let T=class extends q.r{get _minimumVerticesPerFeature(){switch(this.store?.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}set filter(e){const t=this._get("filter"),i=this._filterProperties(e);JSON.stringify(t)!==JSON.stringify(i)&&this._set("filter",i)}set customParameters(e){const t=this._get("customParameters");JSON.stringify(t)!==JSON.stringify(e)&&this._set("customParameters",e)}get _configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(e){const t=this._get("tileInfo");t!==e&&((0,f.pC)(e)&&(0,f.pC)(t)&&JSON.stringify(e)===JSON.stringify(t)||(this._set("tileInfo",e),this.store.tileInfo=e))}set tileSize(e){this._get("tileSize")!==e&&this._set("tileSize",e)}get updating(){return this.updatingExcludingEdits||this._pendingEdits.updating}get updatingExcludingEdits(){return this.updatingHandles.updating}get hasZ(){return this.store.featureStore.hasZ}constructor(e){super(e),this.tilesOfInterest=[],this.availability=0,this._pendingTiles=new Map,this._pendingEdits=new Q,this._pendingEditsAbortController=new AbortController}initialize(){this._initializeFetchExtent(),this.updatingHandles.add(()=>this._configuration,()=>this.refresh()),this.updatingHandles.add(()=>this.tilesOfInterest,(e,t)=>{(0,E.fS)(e,t,({id:i},{id:s})=>i===s)||this._process()},A.Z_)}destroy(){this._pendingTiles.forEach(e=>this._deletePendingTile(e)),this._pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this._pendingEditsAbortController.abort(),this._pendingEditsAbortController=null}refresh(){this.store.refresh(),this._pendingTiles.forEach(e=>this._deletePendingTile(e)),this._process()}applyEdits(e){var t=this;this._pendingEdits.push(e,function(){var i=(0,I.Z)(function*(s){if(0===s.addedFeatures.length&&0===s.updatedFeatures.length&&0===s.deletedFeatures.length)return;for(const[,c]of t._pendingTiles)c.reset();const a={...s,deletedFeatures:s.deletedFeatures.map(({objectId:c,globalId:x})=>c&&-1!==c?c:t._lookupObjectIdByGlobalId(x))};yield t.updatingHandles.addPromise(t.store.processEdits(a,(c,x)=>t._queryFeaturesById(c,x),t._pendingEditsAbortController.signal)),t._processPendingTiles()});return function(s){return i.apply(this,arguments)}}())}_initializeFetchExtent(){var e=this;if(!this.capabilities.query.supportsExtent||!(0,d.M8)(this.url))return;const t=(0,L.vr)(function(){var i=(0,I.Z)(function*(s){try{const a=yield(0,m.Vr)(e.url,new D.Z({where:"1=1",outSpatialReference:e.spatialReference,cacheHint:!!e.capabilities.query.supportsCacheHint||void 0}),{query:e._configuration.customParameters,signal:s});e.store.extent=o.Z.fromJSON(a.data?.extent)}catch(a){(0,y.r9)(a),n.Z.getLogger(e.declaredClass).warn("Failed to fetch data extent",a)}});return function(s){return i.apply(this,arguments)}}());this.updatingHandles.addPromise(t.promise.then(()=>this._process())),this.handles.add((0,u.kB)(()=>t.abort()))}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this._pendingTiles.values()).map(e=>e.debugInfo),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const[,e]of this._pendingTiles)e.alive=!1}_createPendingTiles(){const e=this._collectMissingTilesInfo();if(this._setAvailability((0,f.Wi)(e)?1:e.coveredArea/e.fullArea),!(0,f.Wi)(e))for(const{data:t,resolution:i}of e.missingTiles){const s=this._pendingTiles.get(t.id);s?(s.resolution=i,s.alive=!0):this._createPendingTile(t,i)}}_collectMissingTilesInfo(){let e=null;for(let t=this.tilesOfInterest.length-1;t>=0;t--){const s=this.store.process(this.tilesOfInterest[t],(a,c)=>this._verifyTileComplexity(a,c));(0,f.Wi)(e)?e=s:e.prepend(s)}return e}_deletePendingTiles(){for(const[,e]of this._pendingTiles)e.alive||this._deletePendingTile(e)}_processPendingTiles(){const e={fetchCount:(t,i)=>this._fetchCount(t,i),fetchFeatures:(t,i,s)=>this._fetchFeatures(t,i,s),finish:(t,i)=>this._finishPendingTile(t,i),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(e))for(const[,t]of this._pendingTiles)this._verifyTileComplexity(this.store.getFeatureCount(t.data),t.resolution)&&this.updatingHandles.addPromise(t.process(e))}_verifyTileComplexity(e,t){return this._verifyVertexComplexity(e)&&this._verifyFeatureDensity(e,t)}_verifyVertexComplexity(e){return e*this._minimumVerticesPerFeature<ae}_verifyFeatureDensity(e,t){if((0,f.Wi)(this.tileInfo))return!1;const i=this.tileSize*t;return e*(le/(i*i))<he}_ensureFetchAllCounts(e){let t=!0;for(const[,i]of this._pendingTiles)i.state.type<_.FETCHED_COUNT&&this.updatingHandles.addPromise(i.process(e)),i.state.type<=_.FETCH_COUNT&&(t=!1);return t}_finishPendingTile(e,t){this.store.add(e.data,t),this._deletePendingTile(e),this._updateAvailability()}_updateAvailability(){const e=this._collectMissingTilesInfo();this._setAvailability((0,f.Wi)(e)?1:e.coveredArea/e.fullArea)}_setAvailability(e){this._set("availability",e)}_createPendingTile(e,t){const i=new b(e,t);return this._pendingTiles.set(e.id,i),i}_deletePendingTile(e){e.reset(),this._pendingTiles.delete(e.data.id)}_fetchCount(e,t){var i=this;return(0,I.Z)(function*(){return i.store.fetchCount(e.data,i.url,i._createCountQuery(e),{query:i.customParameters,timeout:ee,signal:t})})()}_fetchFeatures(e,t,i){var s=this;return(0,I.Z)(function*(){let a=0;const c=[];let x=0,P=t;for(;;){const O=s._createFeaturesQuery(e),R=s._setPagingParameters(O,a,P),{features:Z,exceededTransferLimit:te}=yield s._queryFeatures(O,i);R&&(a+=(0,f.Wg)(O.num)),x+=Z.length;for(const Ce of Z)c.push(Ce);if(P=t-x,!R||!te||P<=0)return c}})()}_filterProperties(e){return(0,f.Wi)(e)?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}_lookupObjectIdByGlobalId(e){const t=this.globalIdField,i=this.objectIdField;if((0,f.Wi)(t))throw new Error("Expected globalIdField to be defined");let s=null;if(this.store.featureStore.forEach(a=>{e===a.attributes[t]&&(s=a.objectId??a.attributes[i])}),(0,f.Wi)(s))throw new Error(`Expected to find a feature with globalId ${e}`);return s}_queryFeaturesById(e,t){const i=this._createFeaturesQuery();return i.objectIds=e,this._queryFeatures(i,t)}_queryFeatures(e,t){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(e,t):this._queryFeaturesJSON(e,t)}_queryFeaturesPBF(e,t){var i=this;return(0,I.Z)(function*(){const{sourceSpatialReference:s}=i,{data:a}=yield(0,m.qp)(i.url,e,new p.J({sourceSpatialReference:s}),{query:i._configuration.customParameters,timeout:ee,signal:t});return(0,h.lM)(a)})()}_queryFeaturesJSON(e,t){var i=this;return(0,I.Z)(function*(){const{sourceSpatialReference:s}=i,{data:a}=yield(0,m.JT)(i.url,e,s,{query:i._configuration.customParameters,timeout:ee,signal:t});return(0,h.h_)(a,i.objectIdField)})()}_createCountQuery(e){const t=this._createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0),t}_createFeaturesQuery(e=null){const t=this._createBaseQuery(e);return t.outFields=this.globalIdField?[this.globalIdField,this.objectIdField]:[this.objectIdField],t.returnGeometry=!0,(0,f.pC)(e)&&(this.capabilities.query.supportsResultType?t.resultType="tile":this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0)),t}_createBaseQuery(e){const t=new D.Z({returnZ:this.hasZ,returnM:!1,geometry:(0,f.pC)(this.tileInfo)&&(0,f.pC)(e)?(0,r.HH)(e.data.extent,this.tileInfo.spatialReference):void 0}),i=this._configuration.filter;return(0,f.pC)(i)&&(t.where=i.where,t.gdbVersion=i.gdbVersion,t.timeExtent=i.timeExtent),t.outSpatialReference=this.spatialReference,t}_setPagingParameters(e,t,i){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:s,supportsCacheHint:a,tileMaxRecordCount:c,maxRecordCount:x,supportsResultType:P}=this.capabilities.query,O=s?D.Z.MAX_MAX_RECORD_COUNT_FACTOR:1,R=O*((P||a)&&c?c:x||X);return e.start=t,s?(e.maxRecordCountFactor=Math.min(O,Math.ceil(i/R)),e.num=Math.min(i,e.maxRecordCountFactor*R)):e.num=Math.min(i,R),!0}};(0,C._)([(0,F.Cb)({constructOnly:!0})],T.prototype,"url",void 0),(0,C._)([(0,F.Cb)({constructOnly:!0})],T.prototype,"objectIdField",void 0),(0,C._)([(0,F.Cb)({constructOnly:!0})],T.prototype,"globalIdField",void 0),(0,C._)([(0,F.Cb)({constructOnly:!0})],T.prototype,"capabilities",void 0),(0,C._)([(0,F.Cb)({constructOnly:!0})],T.prototype,"sourceSpatialReference",void 0),(0,C._)([(0,F.Cb)({constructOnly:!0})],T.prototype,"spatialReference",void 0),(0,C._)([(0,F.Cb)({constructOnly:!0})],T.prototype,"store",void 0),(0,C._)([(0,F.Cb)({readOnly:!0})],T.prototype,"_minimumVerticesPerFeature",null),(0,C._)([(0,F.Cb)()],T.prototype,"filter",null),(0,C._)([(0,F.Cb)()],T.prototype,"customParameters",null),(0,C._)([(0,F.Cb)({readOnly:!0})],T.prototype,"_configuration",null),(0,C._)([(0,F.Cb)()],T.prototype,"tileInfo",null),(0,C._)([(0,F.Cb)()],T.prototype,"tileSize",null),(0,C._)([(0,F.Cb)()],T.prototype,"tilesOfInterest",void 0),(0,C._)([(0,F.Cb)({readOnly:!0})],T.prototype,"updating",null),(0,C._)([(0,F.Cb)({readOnly:!0})],T.prototype,"updatingExcludingEdits",null),(0,C._)([(0,F.Cb)({readOnly:!0})],T.prototype,"availability",void 0),(0,C._)([(0,F.Cb)()],T.prototype,"hasZ",null),T=(0,C._)([(0,S.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],T);const X=2e3,ee=6e5,ae=1e6,le=25,he=1;var ne=l(27306),ue=l(61256),de=l(68511);class ce{constructor(){this._store=new Map,this._byteSize=0}set(t,i){this.delete(t),this._store.set(t,i),this._byteSize+=i.byteSize}delete(t){const i=this._store.get(t);return!!this._store.delete(t)&&(null!=i&&(this._byteSize-=i.byteSize),!0)}get(t){return this._used(t),this._store.get(t)}has(t){return this._used(t),this._store.has(t)}clear(){this._store.clear()}applyByteSizeLimit(t,i){for(const[s,a]of this._store){if(this._byteSize<=t)break;this.delete(s),i(a)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(t){const i=this._store.get(t);i&&(this._store.delete(t),this._store.set(t,i))}}let k=class extends se.Z{constructor(e){super(e),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*ne.Y8.MEGABYTES,this._tileBounds=new ue.H,this._tiles=new ce,this._refCounts=new Map,this._tileFeatureCounts=new Map,this._tmpBoundingRect=(0,r.Ue)()}add(e,t){const i=[];for(const s of t)this._referenceFeature(s.objectId)===z.ADDED&&i.push(s);this._addTileStorage(e,new Set(t.map(s=>s.objectId)),function _e(e){return e.reduce((t,i)=>t+function fe(e){return 32+function pe(e){if((0,f.Wi)(e))return 0;const t=(0,ne.do)(e.lengths,4);return 32+(0,ne.do)(e.coords,8)+t}(e.geometry)+(0,ne.f2)(e.attributes)}(i),0)}(t)),this.featureStore.addMany(i),this._tiles.applyByteSizeLimit(this.maximumByteSize,s=>this._removeTileStorage(s))}destroy(){this.clear(),this._tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this._tileBounds.clear(),this._tiles.clear(),this._refCounts.clear()}refresh(){this.clear(),this._tileFeatureCounts.clear()}processEdits(e,t,i){return this._processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this._processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,i)}_addTileStorage(e,t,i){const s=e.id;this._tiles.set(s,new ge(e,t,i)),this._tileBounds.set(s,e.extent),this._tileFeatureCounts.set(s,t.size)}_remove({id:e}){const t=this._tiles.get(e);t&&this._removeTileStorage(t)}_removeTileStorage(e){const t=[];for(const s of e.objectIds)this._unreferenceFeature(s)===z.REMOVED&&t.push(s);this.featureStore.removeManyById(t);const i=e.data.id;this._tiles.delete(i),this._tileBounds.delete(i)}_processEditsDelete(e){this.featureStore.removeManyById(e);for(const[,t]of this._tiles){for(const i of e)t.objectIds.delete(i);this._tileFeatureCounts.set(t.data.id,t.objectIds.size)}for(const t of e)this._refCounts.delete(t)}_processEditsRefetch(e,t,i){var s=this;return(0,I.Z)(function*(){const a=(yield t(e,i)).features,{hasZ:c,hasM:x}=s.featureStore;for(const P of a){const O=(0,h.$)(s._tmpBoundingRect,P.geometry,c,x);(0,f.Wi)(O)||s._tileBounds.forEachInBounds(O,R=>{const Z=s._tiles.get(R);s.featureStore.add(P);const te=P.objectId;Z.objectIds.has(te)||(Z.objectIds.add(te),s._referenceFeature(te),s._tileFeatureCounts.set(Z.data.id,Z.objectIds.size))})}})()}process(e,t=(()=>!0)){if((0,f.Wi)(this.tileInfo)||!e.extent||(0,f.pC)(this.extent)&&!(0,r.kK)((0,r.oJ)(this.extent,this._tmpBoundingRect),e.extent))return new re(e);if(this._tiles.has(e.id))return new re(e);const i=this._createTileTree(e,this.tileInfo);return this._simplify(i,t,null,0,1),this._collectMissingTiles(e,i,this.tileInfo)}get debugInfo(){return Array.from(this._tiles.values()).map(({data:e})=>({data:e,featureCount:this._tileFeatureCounts.get(e.id)||0}))}getFeatureCount(e){return this._tileFeatureCounts.get(e.id)??0}fetchCount(e,t,i,s){var a=this;return(0,I.Z)(function*(){const c=a._tileFeatureCounts.get(e.id);if(null!=c)return c;const x=yield(0,m.hH)(t,i,s);return a._tileFeatureCounts.set(e.id,x.data.count),x.data.count})()}_createTileTree(e,t){const i=new oe(e.level,e.row,e.col);return t.updateTileInfo(i,M.Z.ExtrapolateOptions.POWER_OF_TWO),this._tileBounds.forEachInBounds(e.extent,s=>{const a=this._tiles.get(s)?.data;a&&this._tilesAreRelated(e,a)&&this._populateChildren(i,a,t,this._tileFeatureCounts.get(a.id)||0)}),i}_tilesAreRelated(e,t){if(!e||!t)return!1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;const i=e.level<t.level,s=i?e:t,a=i?t:e,c=1<<a.level-s.level;return Math.floor(a.row/c)===s.row&&Math.floor(a.col/c)===s.col}_populateChildren(e,t,i,s){const a=t.level-e.level-1;if(a<0)return void(e.isLeaf=!0);const c=t.row>>a,x=t.col>>a,O=x-(e.col<<1)+(c-(e.row<<1)<<1),R=e.children[O];if((0,f.pC)(R))this._populateChildren(R,t,i,s);else{const Z=new oe(e.level+1,c,x);i.updateTileInfo(Z,M.Z.ExtrapolateOptions.POWER_OF_TWO),e.children[O]=Z,this._populateChildren(Z,t,i,s)}}_simplify(e,t,i,s,a){const c=a*a;if(e.isLeaf)return t(this.getFeatureCount(e),a)?0:(this._remove(e),(0,f.pC)(i)&&(i.children[s]=null),c);const x=a/2,P=x*x;let O=0;for(let R=0;R<e.children.length;R++){const Z=e.children[R];O+=(0,f.pC)(Z)?this._simplify(Z,t,e,R,x):P}return 0===O?this._mergeChildren(e):1-O/c<ye&&(this._purge(e),(0,f.pC)(i)&&(i.children[s]=null),O=c),O}_mergeChildren(e){const t=new Set;let i=0;this._forEachLeaf(e,s=>{const a=this._tiles.get(s.id);if(a){i+=a.byteSize;for(const c of a.objectIds)t.has(c)||(t.add(c),this._referenceFeature(c));this._remove(s)}}),this._addTileStorage(e,t,i),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this._tileFeatureCounts.set(e.id,t.size)}_forEachLeaf(e,t){for(const i of e.children)(0,f.Wi)(i)||(i.isLeaf?t(i):this._forEachLeaf(i,t))}_purge(e){if(!(0,f.Wi)(e))if(e.isLeaf)this._remove(e);else for(let t=0;t<e.children.length;t++)this._purge(e.children[t]),e.children[t]=null}_collectMissingTiles(e,t,i){const s=new me(i,e,this.extent);return this._collectMissingTilesRecurse(t,s,1),s.info}_collectMissingTilesRecurse(e,t,i){if(e.isLeaf)return;if(!e.hasChildren)return void t.addMissing(e.level,e.row,e.col,i);const s=i/2;for(let a=0;a<e.children.length;a++){const c=e.children[a];(0,f.Wi)(c)?t.addMissing(e.level+1,(e.row<<1)+((2&a)>>1),(e.col<<1)+(1&a),s):this._collectMissingTilesRecurse(c,t,s)}}_referenceFeature(e){const t=(this._refCounts.get(e)||0)+1;return this._refCounts.set(e,t),1===t?z.ADDED:z.UNCHANGED}_unreferenceFeature(e){const t=(this._refCounts.get(e)||0)-1;return 0===t?(this._refCounts.delete(e),z.REMOVED):(t>0&&this._refCounts.set(e,t),z.UNCHANGED)}get test(){return{tiles:Array.from(this._tiles.values()).map(e=>`${e.data.id}:[${Array.from(e.objectIds)}]`),featureReferences:Array.from(this._refCounts.keys()).map(e=>`${e}:${this._refCounts.get(e)}`)}}};(0,C._)([(0,F.Cb)({constructOnly:!0})],k.prototype,"featureStore",void 0),(0,C._)([(0,F.Cb)()],k.prototype,"tileInfo",void 0),(0,C._)([(0,F.Cb)()],k.prototype,"extent",void 0),(0,C._)([(0,F.Cb)()],k.prototype,"maximumByteSize",void 0),k=(0,C._)([(0,S.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],k);class ge{constructor(t,i,s){this.data=t,this.objectIds=i,this.byteSize=s}}class oe{constructor(t,i,s){this.level=t,this.row=i,this.col=s,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&((0,f.pC)(this.children[0])||(0,f.pC)(this.children[1])||(0,f.pC)(this.children[2])||(0,f.pC)(this.children[3]))}}class re{constructor(t,i=[]){this.missingTiles=i,this.fullArea=0,this.coveredArea=0,this.fullArea=(0,r.SO)(t.extent),this.coveredArea=this.fullArea}prepend(t){this.missingTiles=t.missingTiles.concat(this.missingTiles),this.coveredArea+=t.coveredArea,this.fullArea+=t.fullArea}}class me{constructor(t,i,s){this._tileInfo=t,this._extent=null,this.info=new re(i),(0,f.pC)(s)&&(this._extent=(0,r.oJ)(s))}addMissing(t,i,s,a){const c=new de.f(null,t,i,s);this._tileInfo.updateTileInfo(c,M.Z.ExtrapolateOptions.POWER_OF_TWO),(0,f.Wi)(c.extent)||(0,f.pC)(this._extent)&&!(0,r.kK)(this._extent,c.extent)||(this.info.missingTiles.push({data:c,resolution:a}),this.info.coveredArea-=(0,r.SO)(c.extent))}}const ye=.18751;var z;!function(e){e[e.ADDED=0]="ADDED",e[e.REMOVED=1]="REMOVED",e[e.UNCHANGED=2]="UNCHANGED"}(z||(z={}));let $=class extends N.Z.EventedAccessor{constructor(){var e;super(...arguments),e=this,this._isInitializing=!0,this.remoteClient=null,this._whenSetup=(0,y.dD)(),this._elevationAligner=(0,G.p)(),this._elevationFilter=(0,U.c)(),this._symbologyCandidatesFetcher=(0,V.k)(),this._handles=new j.Z,this._updatingHandles=new H.t,this._editsUpdatingHandles=new H.t,this._pendingApplyEdits=new Map,this._alignPointsInFeatures=function(){var t=(0,I.Z)(function*(i,s){const a={points:i},c=yield e.remoteClient.invoke("alignElevation",a,{signal:s});return(0,y.k_)(s),c});return function(i,s){return t.apply(this,arguments)}}(),this._getSymbologyCandidates=function(){var t=(0,I.Z)(function*(i,s){const a={candidates:i,spatialReference:e._spatialReference.toJSON()},c=yield e.remoteClient.invoke("getSymbologyCandidates",a,{signal:s});return(0,y.k_)(s),c});return function(i,s){return t.apply(this,arguments)}}()}get updating(){return this.updatingExcludingEdits||this._editsUpdatingHandles.updating||this._featureFetcher.updating}get updatingExcludingEdits(){return this._featureFetcher.updatingExcludingEdits||this._isInitializing||this._updatingHandles.updating}destroy(){this._featureFetcher?.destroy(),this._queryEngine?.destroy(),this._featureStore?.clear(),this._handles?.destroy()}setup(e){var t=this;return(0,I.Z)(function*(){if(t.destroyed)return{result:{}};const{geometryType:i,objectIdField:s,timeInfo:a,fields:c}=e.serviceInfo,{hasZ:x}=e,P=J.Z.fromJSON(e.spatialReference);t._spatialReference=P,t._featureStore=new g.Z({...e.serviceInfo,hasZ:x,hasM:!1}),t._queryEngine=new v.q({spatialReference:e.spatialReference,featureStore:t._featureStore,geometryType:i,fields:c,hasZ:x,hasM:!1,objectIdField:s,timeInfo:a}),t._featureFetcher=new T({store:new k({featureStore:t._featureStore}),url:e.serviceInfo.url,objectIdField:e.serviceInfo.objectIdField,globalIdField:e.serviceInfo.globalIdField,capabilities:e.serviceInfo.capabilities,spatialReference:P,sourceSpatialReference:J.Z.fromJSON(e.serviceInfo.spatialReference)});const O="3d"===e.configuration.viewType;return t._elevationAligner=(0,G.p)(O,{elevationInfo:(0,f.pC)(e.elevationInfo)?W.Z.fromJSON(e.elevationInfo):null,alignPointsInFeatures:t._alignPointsInFeatures,spatialReference:P}),t._elevationFilter=(0,U.c)(O),t._handles.add([(0,A.YP)(()=>t._featureFetcher.availability,R=>t.emit("notify-availability",{availability:R}),A.Z_),(0,A.YP)(()=>t.updating,()=>t._notifyUpdating())]),t._whenSetup.resolve(),t._isInitializing=!1,t.configure(e.configuration)})()}configure(e){var t=this;return(0,I.Z)(function*(){return yield t._updatingHandles.addPromise(t._whenSetup.promise),t._updateFeatureFetcherConfiguration(e),{result:{}}})()}fetchCandidates(e,t){var i=this;return(0,I.Z)(function*(){yield i._whenSetup.promise,(0,y.k_)(t);const s=function ve(e){return{point:e.point,mode:e.mode,distance:e.distance,types:e.types,query:(0,f.pC)(e.filter)?e.filter:{where:"1=1"}}}(e),a=(0,f.pC)(t)?t.signal:null,c=yield i._queryEngine.executeQueryForSnapping(s,a);(0,y.k_)(a);const x=yield i._elevationAligner.alignCandidates(c.candidates,a);(0,y.k_)(a);const P=yield i._symbologyCandidatesFetcher.fetch(x,a);(0,y.k_)(a);const O=0===P.length?x:x.concat(P);return{result:{candidates:i._elevationFilter.filter(s,O)}}})()}updateTiles(e,t){var i=this;return(0,I.Z)(function*(){return yield i._updatingHandles.addPromise(i._whenSetup.promise),(0,y.k_)(t),i._featureFetcher.tileSize=e.tileSize,i._featureFetcher.tilesOfInterest=e.tiles,i._featureFetcher.tileInfo=(0,f.pC)(e.tileInfo)?M.Z.fromJSON(e.tileInfo):null,K})()}refresh(e,t){var i=this;return(0,I.Z)(function*(){return yield i._updatingHandles.addPromise(i._whenSetup.promise),(0,y.k_)(t),i._featureFetcher.refresh(),K})()}whenNotUpdating(e,t){var i=this;return(0,I.Z)(function*(){return yield i._updatingHandles.addPromise(i._whenSetup.promise),(0,y.k_)(t),yield(0,A.N1)(()=>!i.updatingExcludingEdits,t),(0,y.k_)(t),K})()}getDebugInfo(e,t){var i=this;return(0,I.Z)(function*(){return(0,y.k_)(t),{result:i._featureFetcher.debugInfo}})()}beginApplyEdits(e,t){var i=this;return(0,I.Z)(function*(){i._updatingHandles.addPromise(i._whenSetup.promise),(0,y.k_)(t);const s=(0,y.dD)();return i._pendingApplyEdits.set(e.id,s),i._featureFetcher.applyEdits(s.promise),i._editsUpdatingHandles.addPromise(s.promise),K})()}endApplyEdits(e,t){var i=this;return(0,I.Z)(function*(){const s=i._pendingApplyEdits.get(e.id);return s&&s.resolve(e.edits),(0,y.k_)(t),K})()}notifyElevationSourceChange(e,t){var i=this;return(0,I.Z)(function*(){return i._elevationAligner.notifyElevationSourceChange(),K})()}notifySymbologyChange(e,t){var i=this;return(0,I.Z)(function*(){return i._symbologyCandidatesFetcher.notifySymbologyChange(),K})()}setSymbologySnappingSupported(e){var t=this;return(0,I.Z)(function*(){return t._symbologyCandidatesFetcher=(0,V.k)(e,t._getSymbologyCandidates),K})()}_updateFeatureFetcherConfiguration(e){this._featureFetcher.filter=(0,f.pC)(e.filter)?D.Z.fromJSON(e.filter):null,this._featureFetcher.customParameters=e.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};(0,C._)([(0,F.Cb)({readOnly:!0})],$.prototype,"updating",null),(0,C._)([(0,F.Cb)({readOnly:!0})],$.prototype,"updatingExcludingEdits",null),(0,C._)([(0,F.Cb)()],$.prototype,"_isInitializing",void 0),$=(0,C._)([(0,S.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],$);const Ee=$,K={result:{}}}}]);