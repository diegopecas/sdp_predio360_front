"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[4079],{95324:(z,Z,c)=>{function D(p){return null!=b(p)||null!=T(p)}function U(p){return F.test(p)}function W(p){return b(p)??T(p)}function T(p){const m=new Date(p);return function R(p,m){if(Number.isNaN(p.getTime()))return!1;let M=!0;if(v&&/\d+\W*$/.test(m)){const j=m.match(/[a-zA-Z]{2,}/);if(j){let f=!1,u=0;for(;!f&&u<=j.length;)f=!S.test(j[u]),u++;M=!f}}return M}(m,p)?Number.isNaN(m.getTime())?null:m.getTime()-6e4*m.getTimezoneOffset():null}function b(p){const m=F.exec(p);if(!m?.groups)return null;const M=m.groups,j=+M.year,f=+M.month-1,u=+M.day,B=+(M.hours??"0"),P=+(M.minutes??"0"),C=+(M.seconds??"0");if(B>23||P>59||C>59)return null;const E=M.ms??"0",O=E?+E.padEnd(3,"0").substring(0,3):0;let L;return L=M.isUTC||!M.offsetSign?Date.UTC(j,f,u,B,P,C,O):6e4*("+"===M.offsetSign?-1:1)*(60*+M.offsetHours+ +M.offsetMinutes)+Date.UTC(j,f,u,B,P,C,O),Number.isNaN(L)?null:L}c.d(Z,{mu:()=>U,of:()=>D,sG:()=>W});const F=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/,S=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,v=!Number.isNaN(new Date("technology 10").getTime())},36592:(z,Z,c)=>{c.d(Z,{Q:()=>T});var D=c(85931),U=c(77029),W=c(14259);class T{constructor(e=9,r){this._compareMinX=S,this._compareMinY=v,this._toBBox=s=>s,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),r&&("function"==typeof r?this._toBBox=r:this._initFormat(r)),this.clear()}destroy(){this.clear(),P.prune(),C.prune(),E.prune(),O.prune()}all(e){this._all(this._data,e)}search(e,r){let s=this._data;const a=this._toBBox;if(u(e,s))for(P.clear();s;){for(let d=0,y=s.children.length;d<y;d++){const g=s.children[d],n=s.leaf?a(g):g;u(e,n)&&(s.leaf?r(g):f(e,n)?this._all(g,r):P.push(g))}s=P.pop()}}collides(e){let r=this._data;const s=this._toBBox;if(!u(e,r))return!1;for(P.clear();r;){for(let a=0,d=r.children.length;a<d;a++){const y=r.children[a],g=r.leaf?s(y):y;if(u(e,g)){if(r.leaf||f(e,g))return!0;P.push(y)}}r=P.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let s=0,a=e.length;s<a;s++)this.insert(e[s]);return this}let r=this._build(e.slice(0,e.length),0,e.length-1,0);if(this._data.children.length)if(this._data.height===r.height)this._splitRoot(this._data,r);else{if(this._data.height<r.height){const s=this._data;this._data=r,r=s}this._insert(r,this._data.height-r.height-1,!0)}else this._data=r;return this}insert(e){return e&&this._insert(e,this._data.height-1),this}clear(){return this._data=new l([]),this}remove(e){if(!e)return this;let r,s=this._data,a=null,d=0,y=!1;const g=this._toBBox(e);for(E.clear(),O.clear();s||E.length>0;){if(s||(s=E.pop(),a=E.data[E.length-1],d=O.pop()??0,y=!0),s.leaf&&(r=(0,D.cq)(s.children,e,s.children.length,s.indexHint),-1!==r))return s.children.splice(r,1),E.push(s),this._condense(E),this;y||s.leaf||!f(s,g)?a?(d++,s=a.children[d],y=!1):s=null:(E.push(s),O.push(d),d=0,a=s,s=s.children[0])}return this}toJSON(){return this._data}fromJSON(e){return this._data=e,this}_all(e,r){let s=e;for(C.clear();s;){if(!0===s.leaf)for(const a of s.children)r(a);else C.pushArray(s.children);s=C.pop()??null}}_build(e,r,s,a){const d=s-r+1;let y=this._maxEntries;if(d<=y){const o=new l(e.slice(r,s+1));return b(o,this._toBBox),o}a||(a=Math.ceil(Math.log(d)/Math.log(y)),y=Math.ceil(d/y**(a-1)));const g=new h([]);g.height=a;const n=Math.ceil(d/y),i=n*Math.ceil(Math.sqrt(y));B(e,r,s,i,this._compareMinX);for(let o=r;o<=s;o+=i){const _=Math.min(o+i-1,s);B(e,o,_,n,this._compareMinY);for(let I=o;I<=_;I+=n){const Y=Math.min(I+n-1,_);g.children.push(this._build(e,I,Y,a-1))}}return b(g,this._toBBox),g}_chooseSubtree(e,r,s,a){for(;a.push(r),!0!==r.leaf&&a.length-1!==s;){let d,y=1/0,g=1/0;for(let n=0,i=r.children.length;n<i;n++){const o=r.children[n],_=p(o),I=M(e,o)-_;I<g?(g=I,y=_<y?_:y,d=o):I===g&&_<y&&(y=_,d=o)}r=d||r.children[0]}return r}_insert(e,r,s){const d=s?e:(0,this._toBBox)(e);E.clear();const y=this._chooseSubtree(d,this._data,r,E);for(y.children.push(e),R(y,d);r>=0&&E.data[r].children.length>this._maxEntries;)this._split(E,r),r--;this._adjustParentBBoxes(d,E,r)}_split(e,r){const s=e.data[r],a=s.children.length,d=this._minEntries;this._chooseSplitAxis(s,d,a);const y=this._chooseSplitIndex(s,d,a);if(!y)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const g=s.children.splice(y,s.children.length-y),n=s.leaf?new l(g):new h(g);n.height=s.height,b(s,this._toBBox),b(n,this._toBBox),r?e.data[r-1].children.push(n):this._splitRoot(s,n)}_splitRoot(e,r){this._data=new h([e,r]),this._data.height=e.height+1,b(this._data,this._toBBox)}_chooseSplitIndex(e,r,s){let a,d,y;a=d=1/0;for(let g=r;g<=s-r;g++){const n=F(e,0,g,this._toBBox),i=F(e,g,s,this._toBBox),o=j(n,i),_=p(n)+p(i);o<a?(a=o,y=g,d=_<d?_:d):o===a&&_<d&&(d=_,y=g)}return y}_chooseSplitAxis(e,r,s){const a=e.leaf?this._compareMinX:S,d=e.leaf?this._compareMinY:v;this._allDistMargin(e,r,s,a)<this._allDistMargin(e,r,s,d)&&e.children.sort(a)}_allDistMargin(e,r,s,a){e.children.sort(a);const d=this._toBBox,y=F(e,0,r,d),g=F(e,s-r,s,d);let n=m(y)+m(g);for(let i=r;i<s-r;i++){const o=e.children[i];R(y,e.leaf?d(o):o),n+=m(y)}for(let i=s-r-1;i>=r;i--){const o=e.children[i];R(g,e.leaf?d(o):o),n+=m(g)}return n}_adjustParentBBoxes(e,r,s){for(let a=s;a>=0;a--)R(r.data[a],e)}_condense(e){for(let r=e.length-1;r>=0;r--){const s=e.data[r];if(0===s.children.length)if(r>0){const a=e.data[r-1],d=a.children;d.splice((0,D.cq)(d,s,d.length,a.indexHint),1)}else this.clear();else b(s,this._toBBox)}}_initFormat(e){const r=["return a"," - b",";"];this._compareMinX=new Function("a","b",r.join(e[0])),this._compareMinY=new Function("a","b",r.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function b(t,e){F(t,0,t.children.length,e,t)}function F(t,e,r,s,a){a||(a=new l([])),a.minX=1/0,a.minY=1/0,a.maxX=-1/0,a.maxY=-1/0;for(let d,y=e;y<r;y++)d=t.children[y],R(a,t.leaf?s(d):d);return a}function R(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function S(t,e){return t.minX-e.minX}function v(t,e){return t.minY-e.minY}function p(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function m(t){return t.maxX-t.minX+(t.maxY-t.minY)}function M(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function j(t,e){const r=Math.max(t.minX,e.minX),s=Math.max(t.minY,e.minY),a=Math.min(t.maxX,e.maxX),d=Math.min(t.maxY,e.maxY);return Math.max(0,a-r)*Math.max(0,d-s)}function f(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function u(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function B(t,e,r,s,a){const d=[e,r];for(;d.length;){const y=d.pop(),g=d.pop();if(y-g<=s)continue;const n=g+Math.ceil((y-g)/s/2)*s;(0,W.q)(t,n,g,y,a),d.push(g,n,n,y)}}const P=new U.Z,C=new U.Z,E=new U.Z,O=new U.Z({deallocator:void 0});class L{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class G extends L{constructor(){super(...arguments),this.height=1,this.indexHint=new D.SO}}class l extends G{constructor(e){super(),this.children=e,this.leaf=!0}}class h extends G{constructor(e){super(),this.children=e,this.leaf=!1}}},61256:(z,Z,c)=>{c.d(Z,{H:()=>S});var D=c(8314),U=c(36592),W=c(65401);const b={minX:0,minY:0,maxX:0,maxY:0};class S{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new U.Q(9,(0,D.Z)("esri-csp-restrictions")?p=>({minX:p[0],minY:p[1],maxX:p[2],maxY:p[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const p=new Array(this._idByBounds.size);let m=0;this._idByBounds.forEach((M,j)=>{p[m++]=j}),this._indexInvalid=!1,this._index.clear(),this._index.load(p)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter(p=>this._idByBounds.has(p))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const p=(0,W.cS)();for(const m of this._boundsById.values())m&&(p[0]=Math.min(m[0],p[0]),p[1]=Math.min(m[1],p[1]),p[2]=Math.max(m[2],p[2]),p[3]=Math.max(m[3],p[3]));return p}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(p){const m=this._boundsById.get(p);this._boundsById.delete(p),m&&(this._idByBounds.delete(m),this._indexInvalid||this._index.remove(m))}forEachInBounds(p,m){this._loadIndex(),function R(v,p,m){(function F(v){b.minX=v[0],b.minY=v[1],b.maxX=v[2],b.maxY=v[3]})(p),v.search(b,m)}(this._index,p,M=>m(this._idByBounds.get(M)))}get(p){return this._boundsById.get(p)}has(p){return this._boundsById.has(p)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(p,m){if(!this._indexInvalid){const M=this._boundsById.get(p);M&&(this._index.remove(M),this._idByBounds.delete(M))}this._boundsById.set(p,m),m&&(this._idByBounds.set(m,p),this._indexInvalid||(this._boundsToLoad.push(m),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},3579:(z,Z,c)=>{c.d(Z,{Z:()=>M});var D=c(85931),U=c(26584),W=c(61885),T=c(63290),b=c(5548),F=c(65401),R=c(82054),S=c(61256),v=c(16983),p=c(92794);const m=(0,b.Ue)();class M{constructor(f){this.geometryInfo=f,this._boundsStore=new S.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new W.Z,this.featureAdapter=p.n}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let f=0;return this._featuresById.forEach(u=>{null!=u.geometry&&u.geometry.coords&&(f+=u.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:f/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(f){if(null==this.fullBounds)return null;const[u,B,P,C]=this.fullBounds;return{xmin:u,ymin:B,xmax:P,ymax:C,spatialReference:(0,v.S2)(f)}}add(f){this._add(f),this._emitChanged()}addMany(f){for(const u of f)this._add(u);this._emitChanged()}upsertMany(f){const u=f.map(B=>this._upsert(B));return this._emitChanged(),u.filter(D.pC)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(f){const u=this._featuresById.get(f);return u?(this._remove(u),this._emitChanged(),u):null}removeManyById(f){this._boundsStore.invalidateIndex();for(const u of f){const B=this._featuresById.get(u);B&&this._remove(B)}this._emitChanged()}forEachBounds(f,u){for(const B of f){const P=this._boundsStore.get(B.objectId);P&&u((0,b.JR)(m,P))}}getFeature(f){return this._featuresById.get(f)}has(f){return this._featuresById.has(f)}forEach(f){this._featuresById.forEach(u=>f(u))}forEachInBounds(f,u){this._boundsStore.forEachInBounds(f,B=>{u(this._featuresById.get(B))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let f=!1;this._featuresById.forEach((u,B)=>{this._markedIds.has(B)||(f=!0,this._remove(u))}),this._markedIds.clear(),f&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(f){if(!f)return;const u=f.objectId;if(null==u)return void T.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new U.Z("featurestore:invalid-feature","feature id is missing",{feature:f}));const B=this._featuresById.get(u);let P;if(this._markedIds.add(u),B?(f.displayId=B.displayId,P=this._boundsStore.get(u),this._boundsStore.delete(u)):null!=this.onFeatureAdd&&this.onFeatureAdd(f),!f.geometry?.coords?.length)return this._boundsStore.set(u,null),void this._featuresById.set(u,f);P=(0,R.$)(P??(0,F.Ue)(),f.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),null!=P&&this._boundsStore.set(u,P),this._featuresById.set(u,f)}_upsert(f){const u=f?.objectId;if(null==u)return T.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new U.Z("featurestore:invalid-feature","feature id is missing",{feature:f})),null;const B=this._featuresById.get(u);if(!B)return this._add(f),f;this._markedIds.add(u);const{geometry:P,attributes:C}=f;for(const E in C)B.attributes[E]=C[E];return P&&(B.geometry=P,this._boundsStore.set(u,(0,R.$)((0,F.Ue)(),P,this.geometryInfo.hasZ,this.geometryInfo.hasM)??null)),B}_remove(f){null!=this.onFeatureRemove&&this.onFeatureRemove(f);const u=f.objectId;return this._markedIds.delete(u),this._boundsStore.delete(u),this._featuresById.delete(u),f}}},84079:(z,Z,c)=>{c.r(Z),c.d(Z,{default:()=>L});var D=c(15861),U=c(84792),W=c(59213),T=c(26584),b=c(63290),F=c(10699),R=c(91179),S=c(37053),v=c(82054),p=c(3579),m=c(82959),M=c(73771),j=c(58775),f=c(56554),u=c(35775),B=c(60466),P=c(85),C=c(90194),E=c(28302);const O={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class L{constructor(){var l=this;this._queryEngine=null,this._snapshotFeatures=function(){var h=(0,D.Z)(function*(t){const e=yield l._fetch(t);return l._createFeatures(e)});return function(t){return h.apply(this,arguments)}}()}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._createDefaultAttributes=null}load(l,h={}){var t=this;return(0,D.Z)(function*(){t._loadOptions={url:l.url,customParameters:l.customParameters};const e=[],[r]=yield Promise.all([l.url?t._fetch(h?.signal):null,t._checkProjection(l.spatialReference)]),s=(0,j.my)(r,{geometryType:l.geometryType}),a=l.fields||s.fields||[],d=null!=l.hasZ?l.hasZ:s.hasZ,y=s.geometryType;let g=l.objectIdField||s.objectIdFieldName||"__OBJECTID";const n=l.spatialReference||S.YU;let i=l.timeInfo;a===s.fields&&s.unknownFields.length>0&&e.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:s.unknownFields}});const o=new B.Z(a);let _=o.get(g);_?("esriFieldTypeString"!==_.type&&(_.type="esriFieldTypeOID"),_.editable=!1,_.nullable=!1,g=_.name):(_={alias:g,name:g,type:"string"===s.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},a.unshift(_));const I={};for(const x of a){if(null==x.name&&(x.name=x.alias),null==x.alias&&(x.alias=x.name),!x.name)throw new T.Z("geojson-layer:invalid-field-name","field name is missing",{field:x});if(!P.v.jsonValues.includes(x.type))throw new T.Z("geojson-layer:invalid-field-type",`invalid type for field "${x.name}"`,{field:x});if(x.name!==_.name){const w=(0,C.os)(x);void 0!==w&&(I[x.name]=w)}null==x.length&&(x.length=(0,C.ZR)(x))}if(i){if(i.startTimeField){const x=o.get(i.startTimeField);x?(i.startTimeField=x.name,x.type="esriFieldTypeDate"):i.startTimeField=null}if(i.endTimeField){const x=o.get(i.endTimeField);x?(i.endTimeField=x.name,x.type="esriFieldTypeDate"):i.endTimeField=null}if(i.trackIdField){const x=o.get(i.trackIdField);x?i.trackIdField=x.name:(i.trackIdField=null,e.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:i}}))}i.startTimeField||i.endTimeField||(e.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:i}}),i=null)}const Y=y?(0,f.bU)(y):void 0,N=o.dateFields.length?{timeZoneIANA:E.pt}:null,A={warnings:e,featureErrors:[],layerDefinition:{...O,drawingInfo:Y??void 0,templates:(0,f.Hq)(I),extent:void 0,geometryType:y,objectIdField:g,fields:a,hasZ:!!d,timeInfo:i,dateFieldsTimeReference:N}};t._queryEngine=new M.q({fieldsIndex:B.Z.fromLayerJSON({fields:a,timeInfo:i,dateFieldsTimeReference:N}),geometryType:y,hasM:!1,hasZ:d,objectIdField:g,spatialReference:n,timeInfo:i,featureStore:new p.Z({geometryType:y,hasM:!1,hasZ:d}),cacheSpatialQueries:!0});const X=t._queryEngine.fieldsIndex.requiredFields.indexOf(_);X>-1&&t._queryEngine.fieldsIndex.requiredFields.splice(X,1),t._createDefaultAttributes=(0,f.Dm)(I,g);const K=yield t._createFeatures(r);t._objectIdGenerator=t._createObjectIdGenerator(t._queryEngine,K);const q=t._normalizeFeatures(K,A.featureErrors);t._queryEngine.featureStore.addMany(q);const{fullExtent:V,timeExtent:Q}=yield t._queryEngine.fetchRecomputedExtents();if(A.layerDefinition.extent=V,Q){const{start:x,end:w}=Q;A.layerDefinition.timeInfo.timeExtent=[x,w]}return A})()}applyEdits(l){var h=this;return(0,D.Z)(function*(){const{spatialReference:t,geometryType:e}=h._queryEngine;return yield Promise.all([(0,u.b)(t,e),(0,m._W)(l.adds,t),(0,m._W)(l.updates,t)]),yield h._waitSnapshotComplete(),h._applyEdits(l)})()}queryFeatures(l={},h={}){var t=this;return(0,D.Z)(function*(){return yield t._waitSnapshotComplete(),t._queryEngine.executeQuery(l,h.signal)})()}queryFeatureCount(l={},h={}){var t=this;return(0,D.Z)(function*(){return yield t._waitSnapshotComplete(),t._queryEngine.executeQueryForCount(l,h.signal)})()}queryObjectIds(l={},h={}){var t=this;return(0,D.Z)(function*(){return yield t._waitSnapshotComplete(),t._queryEngine.executeQueryForIds(l,h.signal)})()}queryExtent(l={},h={}){var t=this;return(0,D.Z)(function*(){return yield t._waitSnapshotComplete(),t._queryEngine.executeQueryForExtent(l,h.signal)})()}querySnapping(l,h={}){var t=this;return(0,D.Z)(function*(){return yield t._waitSnapshotComplete(),t._queryEngine.executeQueryForSnapping(l,h.signal)})()}refresh(l){var h=this;return(0,D.Z)(function*(){h._loadOptions.customParameters=l,h._snapshotTask?.abort(),h._snapshotTask=(0,W.vr)(h._snapshotFeatures),h._snapshotTask.promise.then(r=>{h._queryEngine.featureStore.clear(),h._objectIdGenerator=h._createObjectIdGenerator(h._queryEngine,r);const s=h._normalizeFeatures(r);s&&h._queryEngine.featureStore.addMany(s)},r=>{h._queryEngine.featureStore.clear(),(0,F.D_)(r)||b.Z.getLogger("esri.layers.GeoJSONLayer").error(new T.Z("geojson-layer:refresh","An error occurred during refresh",{error:r}))}),yield h._waitSnapshotComplete();const{fullExtent:t,timeExtent:e}=yield h._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:e}})()}_createFeatures(l){var h=this;return(0,D.Z)(function*(){if(null==l)return[];const{geometryType:t,hasZ:e,objectIdField:r}=h._queryEngine,s=(0,j.lG)(l,{geometryType:t,hasZ:e,objectIdField:r});if(!(0,S.fS)(h._queryEngine.spatialReference,S.YU))for(const a of s)null!=a.geometry&&(a.geometry=(0,v.GH)((0,m.iV)((0,v.di)(a.geometry,h._queryEngine.geometryType,h._queryEngine.hasZ,!1),S.YU,h._queryEngine.spatialReference)));return s})()}_waitSnapshotComplete(){var l=this;return(0,D.Z)(function*(){if(l._snapshotTask&&!l._snapshotTask.finished){try{yield l._snapshotTask.promise}catch{}return l._waitSnapshotComplete()}})()}_fetch(l){var h=this;return(0,D.Z)(function*(){const{url:t,customParameters:e}=h._loadOptions,r=(yield(0,U.Z)(t,{responseType:"json",query:{...e},signal:l})).data;return(0,j.O3)(r),r})()}_normalizeFeatures(l,h){const{objectIdField:t,fieldsIndex:e}=this._queryEngine,r=[];for(const s of l){const a=this._createDefaultAttributes(),d=(0,u.O0)(e,a,s.attributes,!0);d?h?.push(d):(this._assignObjectId(a,s.attributes,!0),s.attributes=a,s.objectId=a[t],r.push(s))}return r}_applyEdits(l){var h=this;return(0,D.Z)(function*(){const{adds:t,updates:e,deletes:r}=l,s={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t?.length&&h._applyAddEdits(s,t),e?.length&&h._applyUpdateEdits(s,e),r?.length){for(const y of r)s.deleteResults.push((0,u.d1)(y));h._queryEngine.featureStore.removeManyById(r)}const{fullExtent:a,timeExtent:d}=yield h._queryEngine.fetchRecomputedExtents();return{extent:a,timeExtent:d,featureEditResults:s}})()}_applyAddEdits(l,h){const{addResults:t}=l,{geometryType:e,hasM:r,hasZ:s,objectIdField:a,spatialReference:d,featureStore:y,fieldsIndex:g}=this._queryEngine,n=[];for(const i of h){if(i.geometry&&e!==(0,R.Ji)(i.geometry)){t.push((0,u.av)("Incorrect geometry type."));continue}const o=this._createDefaultAttributes(),_=(0,u.O0)(g,o,i.attributes);if(_)t.push(_);else{if(this._assignObjectId(o,i.attributes),i.attributes=o,null!=i.uid&&(l.uidToObjectId[i.uid]=i.attributes[a]),null!=i.geometry){const I=i.geometry.spatialReference??d;i.geometry=(0,m.iV)((0,u.og)(i.geometry,I),I,d)}n.push(i),t.push((0,u.d1)(i.attributes[a]))}}y.addMany((0,v.Yn)([],n,e,s,r,a))}_applyUpdateEdits({updateResults:l},h){const{geometryType:t,hasM:e,hasZ:r,objectIdField:s,spatialReference:a,featureStore:d,fieldsIndex:y}=this._queryEngine;for(const g of h){const{attributes:n,geometry:i}=g,o=n?.[s];if(null==o){l.push((0,u.av)(`Identifier field ${s} missing`));continue}if(!d.has(o)){l.push((0,u.av)(`Feature with object id ${o} missing`));continue}const _=(0,v.EI)(d.getFeature(o),t,r,e);if(null!=i){if(t!==(0,R.Ji)(i)){l.push((0,u.av)("Incorrect geometry type."));continue}const I=i.spatialReference??a;_.geometry=(0,m.iV)((0,u.og)(i,I),I,a)}if(n){const I=(0,u.O0)(y,_.attributes,n);if(I){l.push(I);continue}}d.add((0,v.XA)(_,t,r,e,s)),l.push((0,u.d1)(o))}}_createObjectIdGenerator(l,h){const t=l.fieldsIndex.get(l.objectIdField);if("esriFieldTypeString"===t.type)return()=>t.name+"-"+Date.now().toString(16);let e=Number.NEGATIVE_INFINITY;for(const r of h)r.objectId&&(e=Math.max(e,r.objectId));return e=Math.max(0,e)+1,()=>e++}_assignObjectId(l,h,t=!1){const e=this._queryEngine.objectIdField;l[e]=t&&e in h?h[e]:this._objectIdGenerator()}_checkProjection(l){return(0,D.Z)(function*(){try{yield(0,m._W)(S.YU,l)}catch{throw new T.Z("geojson-layer","Projection not supported")}})()}}},58775:(z,Z,c)=>{c.d(Z,{O3:()=>d,lG:()=>g,my:()=>y,q9:()=>S});var D=c(95324),U=c(26584),W=c(37053),T=c(66385),b=c(88071),F=c(90194);const R={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function S(n){return R[n]}function*v(n){switch(n.type){case"Feature":yield n;break;case"FeatureCollection":for(const i of n.features)i&&(yield i)}}function*p(n){if(n)switch(n.type){case"Point":yield n.coordinates;break;case"LineString":case"MultiPoint":yield*n.coordinates;break;case"MultiLineString":case"Polygon":for(const i of n.coordinates)yield*i;break;case"MultiPolygon":for(const i of n.coordinates)for(const o of i)yield*o}}function M(n){for(const i of n)if(i.length>2)return!0;return!1}function u(n){let i=0;for(let o=0;o<n.length;o++){const _=n[o],I=n[(o+1)%n.length];i+=_[0]*I[1]-I[0]*_[1]}return i<=0}function B(n){const i=n[0],o=n[n.length-1];return i[0]===o[0]&&i[1]===o[1]&&i[2]===o[2]||n.push(i),n}function P(n,i,o){switch(i.type){case"LineString":return function C(n,i,o){return e(n,i.coordinates,o),n}(n,i,o);case"MultiLineString":return function E(n,i,o){for(const _ of i.coordinates)e(n,_,o);return n}(n,i,o);case"MultiPoint":return function O(n,i,o){return e(n,i.coordinates,o),n}(n,i,o);case"MultiPolygon":return function L(n,i,o){for(const _ of i.coordinates){h(n,_[0],o);for(let I=1;I<_.length;I++)t(n,_[I],o)}return n}(n,i,o);case"Point":return function G(n,i,o){return s(n,i.coordinates,o),n}(n,i,o);case"Polygon":return function l(n,i,o){const _=i.coordinates;h(n,_[0],o);for(let I=1;I<_.length;I++)t(n,_[I],o);return n}(n,i,o)}}function h(n,i,o){const _=B(i);!function j(n){return!u(n)}(_)?e(n,_,o):r(n,_,o)}function t(n,i,o){const _=B(i);!function f(n){return u(n)}(_)?e(n,_,o):r(n,_,o)}function e(n,i,o){for(const _ of i)s(n,_,o);n.lengths.push(i.length)}function r(n,i,o){for(let _=i.length-1;_>=0;_--)s(n,i[_],o);n.lengths.push(i.length)}function s(n,i,o){const[_,I,Y]=i;n.coords.push(_,I),o.hasZ&&n.coords.push(Y||0)}function a(n){switch(typeof n){case"string":return(0,D.mu)(n)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function d(n,i=4326){if(!n)throw new U.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==n.type&&"FeatureCollection"!==n.type)throw new U.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:n});const{crs:o}=n;if(!o)return;const _="string"==typeof o?o:"name"===o.type?o.properties.name:"EPSG"===o.type?o.properties.code:null,I=(0,W.oR)({wkid:i})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(`.*(${i})$`,"i");if(!_||!I.test(_))throw new U.Z("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:o})}function y(n,i={}){const o=[],_=new Set,I=new Set;let Y,N=!1,A=null,X=!1,{geometryType:K=null}=i,q=!1;for(const Q of v(n)){const{geometry:x,properties:w,id:H}=Q;if((!x||(K||(K=S(x.type)),S(x.type)===K))&&(N||(N=M(p(x))),X||(X=null!=H,X&&(Y=typeof H,w&&(A=Object.keys(w).filter(J=>w[J]===H)))),w&&A&&X&&null!=H&&(A.length>1?A=A.filter(J=>w[J]===H):1===A.length&&(A=w[A[0]]===H?A:[])),!q&&w)){let J=!0;for(const $ in w){if(_.has($))continue;const k=w[$];if(null==k){J=!1,I.add($);continue}const ee=a(k);if("unknown"===ee){I.add($);continue}I.delete($),_.add($);const te=(0,F.q6)($);te&&o.push({name:te,alias:$,type:ee})}q=J}}const V=(0,F.q6)(1===A?.length&&A[0]||null)??void 0;if(V)for(const Q of o)if(Q.name===V&&(0,F.H7)(Q)){Q.type="esriFieldTypeOID";break}return{fields:o,geometryType:K,hasZ:N,objectIdFieldName:V,objectIdFieldType:Y,unknownFields:Array.from(I)}}function g(n,i){return Array.from(function*m(n,i={}){const{geometryType:o,objectIdField:_}=i;for(const I of n){const{geometry:Y,properties:N,id:A}=I;if(Y&&S(Y.type)!==o)continue;const X=N||{};let K;_&&(K=X[_],null==A||K||(X[_]=K=A)),yield new T.u_(Y?P(new b.Z,Y,i):null,X,null,K??void 0)}}(v(n),i))}},56554:(z,Z,c)=>{c.d(Z,{Dm:()=>S,Hq:()=>v,MS:()=>p,bU:()=>b});var D=c(8314),U=c(58817),W=c(87757),T=c(24837);function b(m){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===m||"esriGeometryMultipoint"===m?T.I4:"esriGeometryPolyline"===m?T.ET:T.lF}}}const F=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let R=1;function S(m,M){if((0,D.Z)("esri-csp-restrictions"))return()=>({[M]:null,...m});try{let j=`this.${M} = null;`;for(const u in m)j+=`this${F.test(u)?`.${u}`:`["${u}"]`} = ${JSON.stringify(m[u])};`;const f=new Function(`\n      return class AttributesClass$${R++} {\n        constructor() {\n          ${j};\n        }\n      }\n    `)();return()=>new f}catch{return()=>({[M]:null,...m})}}function v(m={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,U.d9)(m)}}]}function p(m,M){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:m},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:M,supportsDelete:M,supportsEditing:M,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:M,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:W.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:M,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},35775:(z,Z,c)=>{c.d(Z,{O0:()=>m,av:()=>R,b:()=>P,d1:()=>v,og:()=>f});var D=c(15861),U=c(95324),W=c(37053),T=c(90194);class b{constructor(){this.code=null,this.description=null}}class F{constructor(O){this.error=new b,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=O}}function R(E){return new F(E)}class S{constructor(O){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=O}}function v(E){return new S(E)}const p=new Set;function m(E,O,L,G=!1){p.clear();for(const l in L){const h=E.get(l);if(!h)continue;const t=M(h,L[l]);if(p.add(h.name),h&&(G||h.editable)){const e=(0,T.Qc)(h,t);if(e)return R((0,T.vP)(e,h,t));O[h.name]=t}}for(const l of E?.requiredFields??[])if(!p.has(l.name))return R(`missing required field "${l.name}"`);return null}function M(E,O){let L=O;return(0,T.H7)(E)&&"string"==typeof O?L=parseFloat(O):(0,T.qN)(E)&&null!=O&&"string"!=typeof O?L=String(O):(0,T.y2)(E)&&"string"==typeof O&&(L=(0,U.sG)(O)),(0,T.Pz)(L)}let j;function f(E,O){if(!E||!(0,W.JY)(O))return E;if("rings"in E||"paths"in E){if(null==j)throw new TypeError("geometry engine not loaded");return j.simplify(O,E)}return E}function B(){return(B=(0,D.Z)(function*(){return null==j&&(j=yield Promise.all([c.e(4918),c.e(8592),c.e(5994)]).then(c.bind(c,32825))),j})).apply(this,arguments)}function P(E,O){return C.apply(this,arguments)}function C(){return C=(0,D.Z)(function*(E,O){!(0,W.JY)(E)||"esriGeometryPolygon"!==O&&"esriGeometryPolyline"!==O||(yield function u(){return B.apply(this,arguments)}())}),C.apply(this,arguments)}}}]);