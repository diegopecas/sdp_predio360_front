"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[7697],{77044:(te,X,p)=>{p.d(X,{Y:()=>B});var g=p(62208);function b(n,l){return n?l?4:3:l?3:2}function B(n,l,d,y,h){if((0,g.Wi)(l)||!l.lengths.length)return null;const v="upperLeft"===h?.originPosition?-1:1;n.lengths.length&&(n.lengths.length=0),n.coords.length&&(n.coords.length=0);const _=n.coords,m=[],F=d?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:E,coords:D}=l,L=b(d,y);let Q=0;for(const x of E){const j=$(F,D,Q,x,d,y,v);j&&m.push(j),Q+=x*L}if(m.sort((x,j)=>{let N=v*x[2]-v*j[2];return 0===N&&d&&(N=x[4]-j[4]),N}),m.length){let x=6*m[0][2];_[0]=m[0][0]/x,_[1]=m[0][1]/x,d&&(x=6*m[0][4],_[2]=0!==x?m[0][3]/x:0),(_[0]<F[0]||_[0]>F[1]||_[1]<F[2]||_[1]>F[3]||d&&(_[2]<F[4]||_[2]>F[5]))&&(_.length=0)}if(!_.length){const x=l.lengths[0]?function I(n,l,d,y,h){const v=b(y,h);let _=l,m=l+v,F=0,E=0,D=0,L=0;for(let Q=0,x=d-1;Q<x;Q++,_+=v,m+=v){const j=n[_],N=n[_+1],K=n[_+2],U=n[m],u=n[m+1],c=n[m+2],S=y?q(j,N,K,U,u,c):G(j,N,U,u);if(S)if(F+=S,y){const R=T(j,N,K,U,u,c);E+=S*R[0],D+=S*R[1],L+=S*R[2]}else{const R=O(j,N,U,u);E+=S*R[0],D+=S*R[1]}}return F>0?y?[E/F,D/F,L/F]:[E/F,D/F]:d>0?y?[n[l],n[l+1],n[l+2]]:[n[l],n[l+1]]:null}(D,0,E[0],d,y):null;if(!x)return null;_[0]=x[0],_[1]=x[1],d&&x.length>2&&(_[2]=x[2])}return n}function $(n,l,d,y,h,v,_=1){const m=b(h,v);let F=d,E=d+m,D=0,L=0,Q=0,x=0,j=0;for(let K=0,U=y-1;K<U;K++,F+=m,E+=m){const u=l[F],c=l[F+1],S=l[F+2],R=l[E],A=l[E+1],e=l[E+2];let r=u*A-R*c;x+=r,D+=(u+R)*r,L+=(c+A)*r,h&&(r=u*e-R*S,Q+=(S+e)*r,j+=r),u<n[0]&&(n[0]=u),u>n[1]&&(n[1]=u),c<n[2]&&(n[2]=c),c>n[3]&&(n[3]=c),h&&(S<n[4]&&(n[4]=S),S>n[5]&&(n[5]=S))}if(x*_>0&&(x*=-1),j*_>0&&(j*=-1),!x)return null;const N=[D,L,.5*x];return h&&(N[3]=Q,N[4]=.5*j),N}function G(n,l,d,y){const h=d-n,v=y-l;return Math.sqrt(h*h+v*v)}function q(n,l,d,y,h,v){const _=y-n,m=h-l,F=v-d;return Math.sqrt(_*_+m*m+F*F)}function O(n,l,d,y){return[n+.5*(d-n),l+.5*(y-l)]}function T(n,l,d,y,h,v){return[n+.5*(y-n),l+.5*(h-l),d+.5*(v-d)]}},58175:(te,X,p)=>{p.d(X,{q:()=>R});var g=p(15861),b=p(85931),B=p(26584),$=p(58817),I=p(62208),G=p(1036),q=p(10699),O=p(16730),T=p(5548),n=p(65401),l=p(32442),d=p(91179),y=p(93555),h=p(37053),v=p(82054),_=p(50736),m=p(82959),F=p(87757),E=p(83308),D=p(53023),L=p(76530),Q=p(6185),x=p(60466),j=p(46679),N=p(87091);const U="feature-store:unsupported-query",c=new G.WJ(2e6);let S=0;class R{constructor(e){this._geometryQueryCache=null,this._changeHandle=null,this.capabilities={query:F.g},this.geometryType=e.geometryType,this.hasM=!!e.hasM,this.hasZ=!!e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",()=>this.clearCache()),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new G.Xq(S+++"$$",c)),this.fieldsIndex=new x.Z(e.fields),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}destroy(){this._frameTask=(0,I.hw)(this._frameTask),this.clearCache(),(0,I.SC)(this._geometryQueryCache),this._changeHandle=(0,I.hw)(this._changeHandle),(0,I.SC)(this.fieldsIndex)}get featureAdapter(){return this.featureStore.featureAdapter}clearCache(){this._geometryQueryCache?.clear(),this._allFeaturesPromise=null,this._timeExtentPromise=null}executeQuery(e,r){var t=this;return(0,g.Z)(function*(){try{return(yield t._executeQuery(e,{},r)).createQueryResponse()}catch(i){if(i!==Q.vF)throw i;return new E.y([],e,t).createQueryResponse()}})()}executeQueryForCount(e={},r){var t=this;return(0,g.Z)(function*(){try{return(yield t._executeQuery(e,{returnGeometry:!1,returnCentroid:!1,outSR:null},r)).createQueryResponseForCount()}catch(i){if(i!==Q.vF)throw i;return 0}})()}executeQueryForExtent(e,r){var t=this;return(0,g.Z)(function*(){const i=e.outSR;try{const s=yield t._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},r),o=s.size;return o?{count:o,extent:yield t._getBounds(s.items,s.spatialReference,i||t.spatialReference)}:{count:0,extent:null}}catch(s){if(s===Q.vF)return{count:0,extent:null};throw s}})()}executeQueryForIds(e,r){var t=this;return(0,g.Z)(function*(){return t.executeQueryForIdSet(e,r).then(i=>Array.from(i))})()}executeQueryForIdSet(e,r){var t=this;return(0,g.Z)(function*(){try{const i=yield t._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},r),s=i.items,o=new Set;return yield t._reschedule(()=>{for(const a of s)o.add(i.featureAdapter.getObjectId(a))},r),o}catch(i){if(i===Q.vF)return new Set;throw i}})()}executeQueryForSnapping(e,r){var t=this;return(0,g.Z)(function*(){const{point:i,distance:s,types:o}=e;if(o===E.r.NONE)return{candidates:[]};const a=yield t._reschedule(()=>t._checkQuerySupport(e.query),r),f=!(0,h.fS)(i.spatialReference,t.spatialReference);f&&(yield(0,m._W)(i.spatialReference,t.spatialReference));const C="number"==typeof s?s:s.x,P="number"==typeof s?s:s.y,M={xmin:i.x-C,xmax:i.x+C,ymin:i.y-P,ymax:i.y+P,spatialReference:i.spatialReference},W=f?(0,m.iV)(M,t.spatialReference):M;if(!W)return{candidates:[]};const Y=(yield(0,y.aX)((0,d.im)(i),null,{signal:r}))[0],V=(yield(0,y.aX)((0,d.im)(W),null,{signal:r}))[0];if((0,I.Wi)(Y)||(0,I.Wi)(V))return{candidates:[]};const k=new E.y(yield t._reschedule(()=>t._searchFeatures(t._getQueryBBoxes(V.toJSON())),r),a,t);yield t._reschedule(()=>t._executeObjectIdsQuery(k),r),yield t._reschedule(()=>t._executeTimeQuery(k),r),yield t._reschedule(()=>t._executeAttributesQuery(k),r);const Z=Y.toJSON(),H=f?(0,m.iV)(Z,t.spatialReference):Z,J=f?Math.max(W.xmax-W.xmin,W.ymax-W.ymin)/2:s;return k.createSnappingResponse({...e,point:H,distance:J},i.spatialReference)})()}executeQueryForLatestObservations(e,r){var t=this;return(0,g.Z)(function*(){if(!t.timeInfo||!t.timeInfo.trackIdField)throw new B.Z(U,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:t.timeInfo});try{const i=yield t._executeQuery(e,{},r);return yield t._reschedule(()=>t._filterLatest(i),r),i.createQueryResponse()}catch(i){if(i!==Q.vF)throw i;return new E.y([],e,t).createQueryResponse()}})()}executeQueryForSummaryStatistics(e={},r,t){var i=this;return(0,g.Z)(function*(){const{field:s,normalizationField:o,valueExpression:a}=r;return(yield i._getQueryEngineResultForStats(e,{field:s,normalizationField:o,valueExpression:a},t)).createSummaryStatisticsResponse(r)})()}executeQueryForUniqueValues(e={},r,t){var i=this;return(0,g.Z)(function*(){const{field:s,field2:o,field3:a,valueExpression:f}=r;return(yield i._getQueryEngineResultForStats(e,{field:s,field2:o,field3:a,valueExpression:f},t)).createUniqueValuesResponse(r)})()}executeQueryForClassBreaks(e={},r,t){var i=this;return(0,g.Z)(function*(){const{field:s,normalizationField:o,valueExpression:a}=r;return(yield i._getQueryEngineResultForStats(e,{field:s,normalizationField:o,valueExpression:a},t)).createClassBreaksResponse(r)})()}executeQueryForHistogram(e={},r,t){var i=this;return(0,g.Z)(function*(){const{field:s,normalizationField:o,valueExpression:a}=r;return(yield i._getQueryEngineResultForStats(e,{field:s,normalizationField:o,valueExpression:a},t)).createHistogramResponse(r)})()}fetchRecomputedExtents(e){var r=this;return(0,g.Z)(function*(){const[t,i]=yield Promise.all(["getFullExtent"in r.featureStore&&r.featureStore.getFullExtent?Promise.resolve(r.featureStore.getFullExtent(r.spatialReference)):r._getBounds(yield r._getAllFeatures(),r.spatialReference,r.spatialReference),(0,I.pC)(r._timeExtentPromise)?r._timeExtentPromise:r._timeExtentPromise=(0,L.R)(r.timeInfo,r.featureStore)]);return(0,q.k_)(e),{fullExtent:t,timeExtent:i}})()}_getBounds(e,r,t){var i=this;return(0,g.Z)(function*(){const s=(0,T.t8)((0,T.Ue)(),T.Gv);yield i.featureStore.forEachBounds(e,f=>(0,T.TC)(s,f));const o={xmin:s[0],ymin:s[1],xmax:s[3],ymax:s[4],spatialReference:(0,Q.S2)(i.spatialReference)};i.hasZ&&isFinite(s[2])&&isFinite(s[5])&&(o.zmin=s[2],o.zmax=s[5]);const a=(0,m.iV)(o,r,t);if(a.spatialReference=(0,Q.S2)(t),a.xmax-a.xmin==0){const f=(0,O.c9)(a.spatialReference);a.xmin-=f,a.xmax+=f}if(a.ymax-a.ymin==0){const f=(0,O.c9)(a.spatialReference);a.ymin-=f,a.ymax+=f}if(i.hasZ&&null!=a.zmin&&null!=a.zmax&&a.zmax-a.zmin==0){const f=(0,O.c9)(a.spatialReference);a.zmin-=f,a.zmax+=f}return a})()}_schedule(e,r){var t=this;return(0,g.Z)(function*(){return(0,I.pC)(t._frameTask)?t._frameTask.schedule(e,r):e(N.G5)})()}_reschedule(e,r){var t=this;return(0,g.Z)(function*(){return(0,I.pC)(t._frameTask)?t._frameTask.reschedule(e,r):e(N.G5)})()}_getAllFeaturesQueryEngineResult(e){var r=this;return(0,g.Z)(function*(){return new E.y(yield r._getAllFeatures(),e,r)})()}_getAllFeatures(){var e=this;return(0,g.Z)(function*(){if((0,I.Wi)(e._allFeaturesPromise)){const i=[];e._allFeaturesPromise=(0,g.Z)(function*(){yield e.featureStore.forEach(s=>i.push(s))})().then(()=>i)}const r=e._allFeaturesPromise,t=yield r;return r===e._allFeaturesPromise?t.slice():e._getAllFeatures()})()}_executeQuery(e,r,t){var i=this;return(0,g.Z)(function*(){e=(0,$.d9)(e),e=yield i._schedule(()=>(0,Q.Up)(e,i.definitionExpression,i.spatialReference),t),e=yield i._reschedule(()=>i._checkQuerySupport(e),t),e={...e,...r};const s=yield i._reschedule(()=>i._executeSceneFilterQuery(e,t),t),o=yield i._reschedule(()=>i._executeGeometryQuery(e,s,t),t);return yield i._reschedule(()=>i._executeAggregateIdsQuery(o),t),yield i._reschedule(()=>i._executeObjectIdsQuery(o),t),yield i._reschedule(()=>i._executeTimeQuery(o),t),yield i._reschedule(()=>i._executeAttributesQuery(o),t),o})()}_executeSceneFilterQuery(e,r){var t=this;return(0,g.Z)(function*(){if((0,I.Wi)(e.sceneFilter))return null;const{outSR:i,returnGeometry:s,returnCentroid:o}=e,a=t.featureStore.featureSpatialReference,f=e.sceneFilter.geometry,C=(0,I.Wi)(a)||(0,h.fS)(a,f.spatialReference)?f:(0,m.iV)(f,a);if(!C)return null;const P=s||o,M=(0,h.JY)(i)&&!(0,h.fS)(t.spatialReference,i)&&P?function(){var Z=(0,g.Z)(function*(H){return t._project(H,i)});return function(H){return Z.apply(this,arguments)}}():Z=>Z,W=t.featureAdapter,Y=yield t._reschedule(()=>t._searchFeatures(t._getQueryBBoxes(C)),r);if("disjoint"===e.sceneFilter.spatialRelationship){if(!Y.length)return null;const Z=new Set;for(const ee of Y)Z.add(W.getObjectId(ee));const H=yield t._reschedule(()=>t._getAllFeatures(),r);return M(yield t._reschedule((0,g.Z)(function*(){const ee=yield(0,D.cW)("esriSpatialRelDisjoint",C,t.geometryType,t.hasZ,t.hasM),w=yield t._runSpatialFilter(H,z=>!Z.has(W.getObjectId(z))||ee(W.getGeometry(z)),r);return new E.y(w,e,t)}),r))}if(!Y.length)return new E.y([],e,t);if(t._canExecuteSinglePass(C,e))return M(new E.y(Y,e,t));const V=yield(0,D.cW)("esriSpatialRelContains",C,t.geometryType,t.hasZ,t.hasM),k=yield t._runSpatialFilter(Y,Z=>V(W.getGeometry(Z)),r);return M(new E.y(k,e,t))})()}_executeGeometryQuery(e,r,t){var i=this;return(0,g.Z)(function*(){if((0,I.pC)(r)&&0===r.items.length)return r;e=(0,I.pC)(r)?r.query:e;const{geometry:s,outSR:o,spatialRel:a,returnGeometry:f,returnCentroid:C}=e,P=i.featureStore.featureSpatialReference,M=!s||(0,I.Wi)(P)||(0,h.fS)(P,s.spatialReference)?s:(0,m.iV)(s,P),W=f||C,Y=(0,h.JY)(o)&&!(0,h.fS)(i.spatialReference,o),V=i._geometryQueryCache&&(0,I.Wi)(r)?JSON.stringify(Y&&W?{originalFilterGeometry:s,spatialRelationship:a,outSpatialReference:o}:{originalFilterGeometry:s,spatialRelationship:a}):null,k=V?i._geometryQueryCache.get(V):null;if((0,I.pC)(k))return new E.y(k,e,i);const Z=function(){var w=(0,g.Z)(function*(z){return Y&&W&&(yield i._project(z,o)),V&&i._geometryQueryCache.put(V,z.items,z.items.length+1),z});return function(se){return w.apply(this,arguments)}}();if(!M)return Z((0,I.pC)(r)?r:yield i._getAllFeaturesQueryEngineResult(e));const H=i.featureAdapter;let J=yield i._reschedule(()=>i._searchFeatures(i._getQueryBBoxes(s)),t);if("esriSpatialRelDisjoint"===a){if(!J.length)return Z((0,I.pC)(r)?r:yield i._getAllFeaturesQueryEngineResult(e));const w=new Set;for(const ie of J)w.add(H.getObjectId(ie));const z=(0,I.pC)(r)?r.items:yield i._reschedule(()=>i._getAllFeatures(),t);return Z(yield i._reschedule((0,g.Z)(function*(){const ie=yield(0,D.cW)(a,M,i.geometryType,i.hasZ,i.hasM),ae=yield i._runSpatialFilter(z,ne=>!w.has(H.getObjectId(ne))||ie(H.getGeometry(ne)),t);return new E.y(ae,e,i)}),t))}if((0,I.pC)(r)){const w=new b.SO;J=J.filter(z=>(0,b.cq)(r.items,z,r.items.length,w)>=0)}if(!J.length){const w=new E.y([],e,i);return V&&i._geometryQueryCache.put(V,w.items,1),w}if(i._canExecuteSinglePass(M,e))return Z(new E.y(J,e,i));const ee=yield(0,D.cW)(a,M,i.geometryType,i.hasZ,i.hasM),re=yield i._runSpatialFilter(J,w=>ee(H.getGeometry(w)),t);return Z(new E.y(re,e,i))})()}_executeAggregateIdsQuery(e){if(0===e.items.length||!e.query.aggregateIds||!e.query.aggregateIds.length||(0,I.Wi)(this.aggregateAdapter))return;const r=new Set;for(const i of e.query.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(i).forEach(s=>r.add(s));const t=this.featureAdapter.getObjectId;e.items=e.items.filter(i=>r.has(t(i)))}_executeObjectIdsQuery(e){if(0===e.items.length||!e.query.objectIds||!e.query.objectIds.length)return;const r=new Set(e.query.objectIds),t=this.featureAdapter.getObjectId;e.items=e.items.filter(i=>r.has(t(i)))}_executeTimeQuery(e){if(0===e.items.length)return;const r=(0,L.y)(this.timeInfo,e.query.timeExtent,this.featureAdapter);(0,I.Wi)(r)||(e.items=e.items.filter(r))}_executeAttributesQuery(e){if(0===e.items.length)return;const r=(0,_.Jc)(e.query.where,this.fieldsIndex);if(r){if(!r.isStandardized)throw new TypeError("Where clause is not standardized");e.items=e.items.filter(t=>r.testFeature(t,this.featureAdapter))}}_runSpatialFilter(e,r,t){var i=this;return(0,g.Z)(function*(){if(!r)return e;if((0,I.Wi)(i._frameTask))return e.filter(f=>r(f));let s=0;const o=new Array,a=function(){var f=(0,g.Z)(function*(C){for(;s<e.length;){const P=e[s++];r(P)&&(o.push(P),C.madeProgress()),C.done&&(yield i._reschedule(M=>a(M),t))}});return function(P){return f.apply(this,arguments)}}();return i._reschedule(f=>a(f),t).then(()=>o)})()}_filterLatest(e){const{trackIdField:r,startTimeField:t,endTimeField:i}=this.timeInfo,s=i||t,o=new Map,a=this.featureAdapter.getAttribute;for(const f of e.items){const C=a(f,r),P=a(f,s),M=o.get(C);(!M||P>a(M,s))&&o.set(C,f)}e.items=Array.from(o.values())}_canExecuteSinglePass(e,r){const{spatialRel:t}=r;return(0,D.hN)(e)&&("esriSpatialRelEnvelopeIntersects"===t||"esriGeometryPoint"===this.geometryType&&("esriSpatialRelIntersects"===t||"esriSpatialRelContains"===t||"esriSpatialRelWithin"===t))}_project(e,r){var t=this;return(0,g.Z)(function*(){if(!r||(0,h.fS)(t.spatialReference,r))return e;const i=t.featureAdapter,s=yield(0,m.oj)(e.items.map(o=>(0,Q.Op)(t.geometryType,t.hasZ,t.hasM,i.getGeometry(o))),t.spatialReference,r);return e.items=s.map((o,a)=>i.cloneWithGeometry(e.items[a],(0,v.GH)(o,t.hasZ,t.hasM))),e})()}_getQueryBBoxes(e){if((0,D.hN)(e)){if((0,d.YX)(e))return[(0,n.al)(e.xmin,e.ymin,e.xmax,e.ymax)];if((0,d.oU)(e))return e.rings.map(r=>(0,n.al)(Math.min(r[0][0],r[2][0]),Math.min(r[0][1],r[2][1]),Math.max(r[0][0],r[2][0]),Math.max(r[0][1],r[2][1])))}return[(0,l.$P)((0,n.Ue)(),e)]}_searchFeatures(e){var r=this;return(0,g.Z)(function*(){const t=new Set;yield Promise.all(e.map(s=>r.featureStore.forEachInBounds(s,o=>t.add(o))));const i=Array.from(t.values());return t.clear(),i})()}_checkStatisticsSupport(e,r){var t=this;return(0,g.Z)(function*(){if((e.distance??0)<0||null!=e.geometryPrecision||e.multipatchOption||e.pixelSize||e.relationParam||e.text||e.outStatistics||e.groupByFieldsForStatistics||e.having||e.orderByFields)throw new B.Z(U,"Unsupported query options",{query:e});return t._checkAttributesQuerySupport(e),Promise.all([t._checkStatisticsParamsSupport(r),(0,D.P0)(e,t.geometryType,t.spatialReference),(0,m._W)(t.spatialReference,e.outSR)]).then(()=>e)})()}_checkStatisticsParamsSupport(e){var r=this;return(0,g.Z)(function*(){let t=[];if(e.valueExpression){const{arcadeUtils:i}=yield(0,j.LC)();t=i.extractFieldNames(e.valueExpression)}if(e.field&&t.push(e.field),e.field2&&t.push(e.field2),e.field3&&t.push(e.field3),e.normalizationField&&t.push(e.normalizationField),!t.length)throw new B.Z(U,"params should have at least a field or valueExpression",{params:e});(0,_.Of)(r.fieldsIndex,t,"params contains missing fields")})()}_checkQuerySupport(e){var r=this;return(0,g.Z)(function*(){if((e.distance??0)<0||null!=e.geometryPrecision||e.multipatchOption||e.pixelSize||e.relationParam||e.text)throw new B.Z(U,"Unsupported query options",{query:e});return r._checkAttributesQuerySupport(e),r._checkStatisticsQuerySupport(e),Promise.all([(0,D.P0)(e,r.geometryType,r.spatialReference),(0,m._W)(r.spatialReference,e.outSR)]).then(()=>e)})()}_checkAttributesQuerySupport(e){const{outFields:r,orderByFields:t,returnDistinctValues:i,outStatistics:s}=e,o=s?s.map(a=>a.outStatisticFieldName&&a.outStatisticFieldName.toLowerCase()).filter(Boolean):[];if(t&&t.length>0){const a=" asc",f=" desc",C=t.map(P=>{const M=P.toLowerCase();return M.includes(a)?M.split(a)[0]:M.includes(f)?M.split(f)[0]:P}).filter(P=>!o.includes(P));(0,_.Of)(this.fieldsIndex,C,"orderByFields contains missing fields")}if(r&&r.length>0)(0,_.Of)(this.fieldsIndex,r,"outFields contains missing fields");else if(i)throw new B.Z(U,"outFields should be specified for returnDistinctValues",{query:e});(0,_.hO)(this.fieldsIndex,e.where)}_checkStatisticsQuerySupport(e){const{outStatistics:r,groupByFieldsForStatistics:t,having:i}=e,s=t&&t.length,o=r&&r.length;if(i){if(!s||!o)throw new B.Z(U,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:e});(0,_.z4)(this.fieldsIndex,i,r)}if(o){if(!function K(A){return null!=A&&A.every(e=>"exceedslimit"!==e.statisticType)}(r))return;const a=r.map(f=>f.onStatisticField).filter(Boolean);(0,_.Of)(this.fieldsIndex,a,"onStatisticFields contains missing fields"),s&&(0,_.Of)(this.fieldsIndex,t,"groupByFieldsForStatistics contains missing fields");for(const f of r){const{onStatisticField:C,statisticType:P}=f;if("percentile_disc"!==P&&"percentile_cont"!==P||!("statisticParameters"in f)){if("count"!==P&&C&&(0,_.G3)(C,this.fieldsIndex))throw new B.Z(U,"outStatistics contains non-numeric fields",{definition:f,query:e})}else{const{statisticParameters:M}=f;if(!M)throw new B.Z(U,"statisticParamters should be set for percentile type",{definition:f,query:e})}}}}_getQueryEngineResultForStats(e,r,t){var i=this;return(0,g.Z)(function*(){e=(0,$.d9)(e);try{e=yield i._schedule(()=>(0,Q.Up)(e,i.definitionExpression,i.spatialReference),t),e=yield i._reschedule(()=>i._checkStatisticsSupport(e,r),t);const s=yield i._reschedule(()=>i._executeSceneFilterQuery(e,t),t),o=yield i._reschedule(()=>i._executeGeometryQuery(e,s,t),t);return yield i._reschedule(()=>i._executeAggregateIdsQuery(o),t),yield i._reschedule(()=>i._executeObjectIdsQuery(o),t),yield i._reschedule(()=>i._executeTimeQuery(o),t),yield i._reschedule(()=>i._executeAttributesQuery(o),t),o}catch(s){if(s!==Q.vF)throw s;return new E.y([],e,i)}})()}}},87757:(te,X,p)=>{p.d(X,{g:()=>g});const g={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},53023:(te,X,p)=>{p.d(X,{hN:()=>U,P0:()=>N,cW:()=>j});var g=p(15861),b=p(26584),B=p(33190),$=p(11519),G=p(91179),q=p(37053);function O(u,c){return u?c?4:3:c?3:2}function l(u,c,S,R,A){if(!u)return!1;const e=O(c,S),{coords:r,lengths:t}=u;let i=!1,s=0;for(const o of t)i=d(i,r,e,s,o,R,A),s+=o*e;return i}function d(u,c,S,R,A,e,r){let t=u,i=R;for(let s=R,o=R+A*S;s<o;s+=S){i=s+S,i===o&&(i=R);const a=c[s],f=c[s+1],P=c[i+1];(f<r&&P>=r||P<r&&f>=r)&&a+(r-f)/(P-f)*(c[i]-a)<e&&(t=!t)}return t}var y=p(82054),h=p(88071),v=p(82959),_=p(6185);const m="feature-store:unsupported-query",F={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},E={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function j(u,c,S,R,A){if((0,G.oU)(c)&&"esriGeometryPoint"===S&&("esriSpatialRelIntersects"===u||"esriSpatialRelContains"===u)){const e=(0,y.Uy)(new h.Z,c,!1,!1);return Promise.resolve(r=>function T(u,c,S,R){return l(u,c,S,R.coords[0],R.coords[1])}(e,!1,!1,r))}if((0,G.oU)(c)&&"esriGeometryMultipoint"===S){const e=(0,y.Uy)(new h.Z,c,!1,!1);if("esriSpatialRelContains"===u)return Promise.resolve(r=>function n(u,c,S,R,A,e){const r=O(A,e),{coords:t,lengths:i}=R;if(!i)return!1;for(let s=0,o=0;s<i.length;s++,o+=r)if(!l(u,c,S,t[o],t[o+1]))return!1;return!0}(e,!1,!1,r,R,A))}if((0,G.YX)(c)&&"esriGeometryPoint"===S&&("esriSpatialRelIntersects"===u||"esriSpatialRelContains"===u))return Promise.resolve(e=>(0,B.aV)(c,(0,_.Op)(S,R,A,e)));if((0,G.YX)(c)&&"esriGeometryMultipoint"===S&&"esriSpatialRelContains"===u)return Promise.resolve(e=>(0,B.lQ)(c,(0,_.Op)(S,R,A,e)));if((0,G.YX)(c)&&"esriSpatialRelIntersects"===u){const e=function I(u){return"mesh"===u?$.h_:(0,$.IY)(u)}(S);return Promise.resolve(r=>e(c,(0,_.Op)(S,R,A,r)))}return function x(){return Promise.all([p.e(4918),p.e(8592)]).then(p.bind(p,32825))}().then(e=>{const r=e[F[u]].bind(null,c.spatialReference,c);return t=>r((0,_.Op)(S,R,A,t))})}function N(u,c,S){return K.apply(this,arguments)}function K(){return(K=(0,g.Z)(function*(u,c,S){const{spatialRel:R,geometry:A}=u;if(A){if(!function D(u){return null!=u&&!0===E.spatialRelationship[u]}(R))throw new b.Z(m,"Unsupported query spatial relationship",{query:u});if((0,q.JY)(A.spatialReference)&&(0,q.JY)(S)){if(!function L(u){return null!=u&&!0===E.queryGeometry[(0,G.Ji)(u)]}(A))throw new b.Z(m,"Unsupported query geometry type",{query:u});if(!function Q(u){return null!=u&&!0===E.layerGeometry[u]}(c))throw new b.Z(m,"Unsupported layer geometry type",{query:u});if(u.outSR)return(0,v._W)(u.geometry&&u.geometry.spatialReference,u.outSR)}}})).apply(this,arguments)}function U(u){if((0,G.YX)(u))return!0;if((0,G.oU)(u)){for(const c of u.rings)if(5!==c.length||c[0][0]!==c[1][0]||c[0][0]!==c[4][0]||c[2][0]!==c[3][0]||c[0][1]!==c[3][1]||c[0][1]!==c[4][1]||c[1][1]!==c[2][1])return!1;return!0}return!1}},76530:(te,X,p)=>{p.d(X,{R:()=>b,y:()=>$});var g=p(15861);function b(O,T){return B.apply(this,arguments)}function B(){return(B=(0,g.Z)(function*(O,T){if(!O)return null;const n=T.featureAdapter,{startTimeField:l,endTimeField:d}=O;let y=Number.POSITIVE_INFINITY,h=Number.NEGATIVE_INFINITY;if(l&&d)yield T.forEach(v=>{const _=n.getAttribute(v,l),m=n.getAttribute(v,d);null==_||isNaN(_)||(y=Math.min(y,_)),null==m||isNaN(m)||(h=Math.max(h,m))});else{const v=l||d;yield T.forEach(_=>{const m=n.getAttribute(_,v);null==m||isNaN(m)||(y=Math.min(y,m),h=Math.max(h,m))})}return{start:y,end:h}})).apply(this,arguments)}function $(O,T,n){if(!T||!O)return null;const{startTimeField:l,endTimeField:d}=O;if(!l&&!d)return null;const{start:y,end:h}=T;return null===y&&null===h?null:void 0===y&&void 0===h?()=>!1:l&&d?function I(O,T,n,l,d){return null!=l&&null!=d?y=>{const h=O.getAttribute(y,T),v=O.getAttribute(y,n);return(null==h||h<=d)&&(null==v||v>=l)}:null!=l?y=>{const h=O.getAttribute(y,n);return null==h||h>=l}:null!=d?y=>{const h=O.getAttribute(y,T);return null==h||h<=d}:void 0}(n,l,d,y,h):function G(O,T,n,l){return null!=n&&null!=l&&n===l?d=>O.getAttribute(d,T)===n:null!=n&&null!=l?d=>{const y=O.getAttribute(d,T);return y>=n&&y<=l}:null!=n?d=>O.getAttribute(d,T)>=n:null!=l?d=>O.getAttribute(d,T)<=l:void 0}(n,l||d,y,h)}}}]);