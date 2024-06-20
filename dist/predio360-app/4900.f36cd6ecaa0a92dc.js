"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[4900],{76825:(S,T,t)=>{t.d(T,{cn:()=>h,j:()=>j,lK:()=>l});const h="updating";function l(C){return"updating"===C?null:C}function j(C){return"updating"===C}},30578:(S,T,t)=>{t.d(T,{Qw:()=>K,Z6:()=>a,ZS:()=>o,sw:()=>L});var h=t(15861),l=t(59213),j=t(58817),C=t(24877);const B={setAttribute(){},rollback(){},commit(){}};var x,e;function L(e,r){const n=r.attributes[e.objectIdField];if(null==n)return B;const s=e.sessions.get(n);if(s)return s;const _=(0,j.d9)(r.attributes),p=new Set,u=e.i3sOverrides.createInteractiveEditSession(n),F=new Map;let v=x.EDITING;const g={setAttribute(O,c){if(v!==x.EDITING)return;const b=e.fieldsIndex.get(O);if(!b)return;const R=e.attributeStorageInfo.findIndex(W=>W.name===b.name);if(R<0)return;if(!(O in _))throw new Error(`Attribute "${O}" is not an attribute of the edited feature.`);u.setAttribute(R,c);const w=e.attributeStorageInfo[R];let N=!1;p.add(O),e.forEachNode((W,Z)=>{const z=((O,c)=>{const b=F.get(O);if(null==b){const R=c.indexOf(n);return F.set(O,R),R}return b})(W,Z);if(-1===z)return;const G=e.getAttributeData(W.index);if(G){const V=G[w.name];V&&(V[z]=c,e.setAttributeData(W.index,G,r),N=!0)}}),N&&e.clearMemCache()},rollback(){if(v===x.EDITING){for(const O of p)this.setAttribute(O,_[O]);u.remove(),v=x.ROLLED_BACK,e.sessions.delete(n)}},commit(){v===x.EDITING&&(u.remove(),v=x.COMMITTED,e.sessions.delete(n))}};return e.sessions.set(n,g),g}function U(e,r,n){const{gidToFeatureInfo:s,oidToFeatureInfo:_,fieldsIndex:p,objectIdField:u,globalIdField:F,featureOrIdentifierList:M}=n;if(!n.featuresResolved&&null!=M){for(const v of M){const g={feature:null,oid:-1,gid:null};if("attributes"in v){g.feature=v;const O=v.attributes;if(null!=O)for(const c in O){if(-1!==g.oid&&null!=g.gid)break;const b=p.normalizeFieldName(c);b===u&&(g.oid=O[c]??-1),b===F&&(g.gid=O[c])}}else g.oid=v.objectId??-1,g.gid=v.globalId;null!=g.gid&&s.set(g.gid,g),-1!==g.oid&&_.set(g.oid,g)}n.featuresResolved=!0}return(-1!==e?_.get(e):null)??(null!=r?s.get(r):null)}function D(e,r,n,s,_=null,p=!0){const u=[],F={gidToFeatureInfo:new Map,oidToFeatureInfo:new Map,featuresResolved:null==n,fieldsIndex:e.fieldsIndex,objectIdField:e.objectIdField,globalIdField:e.globalIdField,featureOrIdentifierList:n};for(const M of r){if(null!=M.error)continue;const v=M.objectId??-1,g=M.globalId,O=(-1===v||p?U(v,g,F):null)??{feature:null,oid:v,gid:g},c={oid:-1===v?O.oid:v,gid:g??O.gid,feature:O.feature,result:M};if(u.push(c),-1===c.oid&&null!=c.gid&&null!=_&&(c.oid=_.get(c.gid)??-1),-1===c.oid&&null!=c.gid){let b=s.get(c.gid);null==b&&(b=[],s.set(c.gid,b)),b.push(c)}}return u}function K(e,r){return A.apply(this,arguments)}function A(){return A=(0,h.Z)(function*(e,r){const n=new Map,s=D(e,r.addedFeatures,r.edits?.addFeatures,n),_=D(e,r.updatedFeatures,r.edits?.updateFeatures,n),p=D(e,r.deletedFeatures,r.edits?.deleteFeatures,n,r.globalIdToObjectId,!1);return n.size>0&&(yield function I(e,r){return y.apply(this,arguments)}(e,n)),{adds:s.filter(u=>-1!==u.oid),updates:_.filter(u=>-1!==u.oid),deletes:p.filter(u=>-1!==u.oid)}}),A.apply(this,arguments)}function y(){return(y=(0,h.Z)(function*(e,r){const n=e.i3sOverrides.layer.associatedLayer;if(null==n?.globalIdField)return;const s=n.createQuery(),{objectIdField:_,globalIdField:p}=n;s.where=Array.from(r.keys()).map(M=>`${p}='${M}'`).join(" OR "),s.returnGeometry=!1,s.outFields=[_,p],s.cacheHint=!1;const u=yield(0,l.mt)((0,C.UK)(n,s));if(!u.ok)return;const F=u.value.features;for(const M of F){const v=M.attributes[p],g=M.attributes[_];if(null==v||null==g||-1===g)continue;const O=r.get(v);if(null!=O)for(const c of O)c.oid=g}})).apply(this,arguments)}function o(e,r){const n=new Map,s=r.adds,_=r.updates,p=r.deletes;if(s.length>0)for(const u of s){const M=u.feature;"mesh"===M?.geometry?.type&&n.set(u.oid,M.geometry)}if(_.length>0)for(const u of _){const M=u.feature;"mesh"===M?.geometry?.type&&n.set(u.oid,M.geometry)}if(p.length>0)for(const u of p)n.set(u.oid,null);for(const[u,F]of n)e.i3sOverrides.updateGeometry(u,F)}function a(e,r){const n=function d(e,r){const n=r.updates;if(!n||0===n.length)return new m;const s=new m,_=new Map;for(let p=0;p<e.attributeStorageInfo.length;p++)_.set(e.attributeStorageInfo[p].name,p);return e.forEachNode((p,u)=>{for(const F of n){if(null==F.feature)continue;const M=F.feature,v=F.oid,g=u.indexOf(v);for(const O in M.attributes){const c=e.fieldsIndex.normalizeFieldName(O);P(s,p.index,c).push({featureIndex:g,featureId:v,value:M.attributes[O]})}}}),s}(e,r),s=function i(e,r){const n=new Map,s=r.adds;if(!s||0===s.length||null==e.globalIdField)return n;for(const _ of s){const u=_.feature;"mesh"===u?.geometry?.type&&n.set(_.oid,u)}return n}(e,r);if(0===n.size&&0===s.size)return;const _=new Map;for(let c=0;c<e.attributeStorageInfo.length;c++)_.set(e.attributeStorageInfo[c].name,c);let p=!1;n.forEach((c,b)=>{const R=e.getAttributeData(b);let w=!1;c.forEach((N,W)=>{const Z=null!=R?R[W]:null,z=_.get(W);for(const{featureIndex:G,value:V,featureId:Q}of N)Z&&(Z[G]=V,w=!0,p=!0),e.i3sOverrides.updateAttributeValue(Q,z,V)}),w&&e.setAttributeData(b,R,null)}),p&&e.clearMemCache();const{fieldsIndex:u,i3sOverrides:F,objectIdField:M,globalIdField:v}=e,g=F.layer.associatedLayer?.infoFor3D,O=new Set(g?[...Object.values(g.assetMapFieldRoles),...Object.values(g.transformFieldRoles)]:[]);for(const[c,b]of s){F.featureAdded(c);const{attributes:R}=b;for(const w in R){if(w!==M&&w!==v&&O.has(w))continue;const N=u.normalizeFieldName(w),W=null!=N?_.get(N):null;null!=W&&F.updateAttributeValue(c,W,R[w])}}}function P(e,r,n){const s=function f(e,r){const n=e.get(r);if(n)return n;const s=new E;return e.set(r,s),s}(e,r),_=null!=n&&s.get(n);if(_)return _;const p=new Array;return s.set(n,p),p}(e=x||(x={}))[e.EDITING=0]="EDITING",e[e.ROLLED_BACK=1]="ROLLED_BACK",e[e.COMMITTED=2]="COMMITTED";const E=Map,m=Map},89476:(S,T,t)=>{t.d(T,{l:()=>D});var h=t(17626),l=t(63290),j=t(77712),x=(t(8314),t(4619),t(76898)),L=t(80774),U=t(42964);const D=K=>{let A=class extends K{constructor(){super(...arguments),this._definitionExpressionErrors=0,this._maxDefinitionExpressionErrors=20,this.logError=I=>{this._definitionExpressionErrors<this._maxDefinitionExpressionErrors&&l.Z.getLogger(this).error("Error while evaluating definitionExpression: "+I),this._definitionExpressionErrors++,this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&l.Z.getLogger(this).error("Further errors are ignored")}}get parsedDefinitionExpression(){if(!this.i3slayer?.definitionExpression)return null;try{const I=L.WhereClause.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!I.isStandardized)return l.Z.getLogger(this).error("definitionExpression is using non standard function"),null;const y=[];return(0,U.e8)(I.fieldNames,this.i3slayer.fields,{missingFields:y}),y.length>0?(l.Z.getLogger(this).error(`definitionExpression references unknown fields: ${y.join(", ")}`),null):(this._definitionExpressionErrors=0,I)}catch(I){return l.Z.getLogger(this).error("Failed to parse definitionExpression: "+I),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:[]}_evaluateClause(I,y){try{return I.testFeature(y)}catch(o){return this.logError(o),!1}}_addDefinitionExpressionToQuery(I){if(!this.parsedDefinitionExpression)return I;const y=this.i3slayer.definitionExpression,o=I.clone();return o.where=o.where?`(${y}) AND (${o.where})`:y,o}};return(0,h._)([(0,j.Cb)({readOnly:!0})],A.prototype,"parsedDefinitionExpression",null),(0,h._)([(0,j.Cb)({readOnly:!0})],A.prototype,"definitionExpressionFields",null),A=(0,h._)([(0,x.j)("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],A),A}},40465:(S,T,t)=>{t.d(T,{i:()=>K});var h=t(15861),l=t(17626),j=t(26584),L=(t(63290),t(8314),t(4619),t(76898)),U=t(90194),D=t(10023);const K=A=>{let I=class extends A{_validateFetchPopupFeatures(y){const{layer:o}=this,{popupEnabled:a}=o;if(!a)throw new j.Z("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:o});if(!(0,D.V5)(o,y))throw new j.Z("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:o})}prepareFetchPopupFeatures(y){return(0,h.Z)(function*(){})()}fetchPopupFeaturesFromGraphics(y,o){var a=this;return(0,h.Z)(function*(){if(a._validateFetchPopupFeatures(o),0===y.length)return[];const i="scene"===a.layer.type&&null!=a.layer.associatedLayer?a.layer.associatedLayer:a.layer;let d=[];"fieldsIndex"in a.layer&&(d=(0,U.Lk)(a.layer.fieldsIndex,yield(0,D.e7)(i,(0,D.V5)(a.layer,o)))),yield a.prepareFetchPopupFeatures(d);const P=new Set,f=[],E=[];for(const r of y)(0,U.Gm)(d,r,P)?E.push(r):f.push(r);if(0===E.length)return f;const m=new Map;for(let r=0;r<y.length;r++)m.set(y[r].getObjectId()??0,r);const e=yield a.whenGraphicAttributes(E,[...P]).catch(()=>E).then(r=>f.concat(r));return e.sort((r,n)=>{const s=r.getObjectId()??0,_=m.get(s)??0,p=n.getObjectId()??0;return _-(m.get(p)??0)}),e})()}};return I=(0,l._)([(0,L.j)("esri.views.3d.layers.support.PopupSceneLayerView")],I),I}},57610:(S,T,t)=>{t.d(T,{K:()=>a});var h=t(15861),l=t(17626),j=t(83761),C=t(63290),B=t(10699),x=t(32917),L=t(77712),U=t(76898);const D=P=>{let f=class extends P{constructor(){super(...arguments),this._numUpdating=0}get updating(){return this._numUpdating>0}autoUpdateAsync(E,m){var e=this;const r=(0,B.Ds)(function(){var n=(0,h.Z)(function*(s){++e._numUpdating;try{const _=yield s;e.destroyed||e._set(E,_)}catch{C.Z.getLogger(e).warn(`Async update of "${String(E)}" failed. Async update functions should not throw exceptions.`)}--e._numUpdating});return function(s){return n.apply(this,arguments)}}());return(0,x.YP)(m,r,x.nn)}};return(0,l._)([(0,L.Cb)({readOnly:!0})],f.prototype,"updating",null),(0,l._)([(0,L.Cb)()],f.prototype,"_numUpdating",void 0),f=(0,l._)([(0,U.j)("esri.core.AsyncUpdate")],f),f};let K=class extends(D(j.Z)){};K=(0,l._)([(0,U.j)("esri.core.AsyncUpdate")],K),t(8314),t(4619);var y=t(90194);const o="esri.views.3d.layers.support.SceneLayerViewRequiredFields";let a=class extends(D(j.Z)){get layer(){return this.layerView.layer}get requiredFields(){const{layerView:{layer:{fieldsIndex:P},definitionExpressionFields:f},rendererFields:E,labelingFields:m,viewFilterFields:e}=this;return(0,y.Q0)(P,[...f??[],...E??[],...m??[],...e??[]])}constructor(P){super(P)}initialize(){var P=this;this.addHandles([this.autoUpdateAsync("rendererFields",(0,h.Z)(function*(){const{fieldsIndex:f,renderer:E}=P.layer;return E?i(m=>E.collectRequiredFields(m,f)):null})),this.autoUpdateAsync("labelingFields",(0,h.Z)(function*(){const{layer:f}=P;return f.labelsVisible?i(E=>(0,y.Mu)(E,f)):null})),this.autoUpdateAsync("viewFilterFields",()=>{const{layer:f,mergedFilter:E}=this.layerView;return i(m=>(0,y.Ll)(m,f,E))})])}};function i(P){return d.apply(this,arguments)}function d(){return(d=(0,h.Z)(function*(P){const f=new Set;try{return yield P(f),Array.from(f).sort()}catch(E){return C.Z.getLogger(o).error(E),null}})).apply(this,arguments)}(0,l._)([(0,L.Cb)()],a.prototype,"layerView",void 0),(0,l._)([(0,L.Cb)()],a.prototype,"layer",null),(0,l._)([(0,L.Cb)()],a.prototype,"requiredFields",null),(0,l._)([(0,L.Cb)()],a.prototype,"rendererFields",void 0),(0,l._)([(0,L.Cb)()],a.prototype,"labelingFields",void 0),(0,l._)([(0,L.Cb)()],a.prototype,"viewFilterFields",void 0),a=(0,l._)([(0,U.j)(o)],a)},12844:(S,T,t)=>{t.d(T,{q:()=>A});var h=t(17626),l=t(77712),x=(t(8314),t(63290),t(4619),t(76898)),L=t(76530),U=t(13812),D=t(98624),K=t(42964);const A=y=>{let o=class extends y{constructor(){super(...arguments),this.timeExtent=null}get mergedFilter(){const{filter:a,timeExtent:i}=this;if(null==i)return a;const d=a?.clone()??new D.Z;return null!=i&&(d.timeExtent=d.timeExtent?.intersection(i)??i),d}getTimeFilterDependencies(){const{timeInfo:a}=this.i3slayer;if(null==a)return[];const{startField:i,endField:d}=a;return[i,d]}addTimeFilter(a,i){if(null==i)return;const{timeInfo:d}=this.i3slayer;if(null==d)return;const{startField:P,endField:f,useTime:E}=d;if(!E||null==P&&null==f)return;const m=d.toJSON(),e=i.toJSON();a.push((r,n)=>this._timeFilter(r,n,m,e))}_timeFilter(a,i,d,P){const f=i.attributeInfo?.attributeData;if(null==f)return;const{startTimeField:E,endTimeField:m}=d;if(null!=E&&null==f[E]||null!=m&&null==f[m])return;const e=(0,L.y)(d,P,new I(f));if(null==e)return;const{featureIds:r}=i;(0,K.hv)(a,r,e)}};return(0,h._)([(0,l.Cb)(U.qG)],o.prototype,"timeExtent",void 0),(0,h._)([(0,l.Cb)()],o.prototype,"mergedFilter",null),o=(0,h._)([(0,x.j)("esri.views.3d.layers.support.TemporalSceneLayerView")],o),o};class I{constructor(o){this.attributeData=o}getAttribute(o,a){return(0,K.Jx)(this.attributeData[a],o)}getAttributeAsTimestamp(o,a){const i=this.getAttribute(o,a);return"string"==typeof i?new Date(i).getTime():"number"==typeof i||null==i?i:null}}},67966:(S,T,t)=>{t.d(T,{v:()=>l});var h=t(90194);function l(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:j,layer:{fieldsIndex:C},requiredFields:B}=this;return(0,h.Q0)(C,j.outFields?[...(0,h.Lk)(C,j.outFields),...B]:B)}}}}},78465:(S,T,t)=>{t.d(T,{Z:()=>a});var h=t(15861),l=t(17626),j=t(85931),C=t(63290),B=t(62208),x=t(76825),L=t(10699),U=t(32917),D=t(77712),A=(t(8314),t(76898)),I=t(55915),y=t(45611);let o=class extends y.Z{constructor(){super(...arguments),this.layer=null,this.filter=null,this._geometryEngine=null,this._projectionEngineLoaded=!1,this._abortController=new AbortController}get availableFields(){return[]}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(i){throw new Error("Not implemented")}get maximumNumberOfFeaturesExceeded(){return!1}get layerFilter(){return(0,x.lK)(this._layerFilter)}get _layerFilter(){const i=this.layer?.filter;if(null==i||i.geometries.length<1)return null;const d=this._geometryEngine;if(null==d||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)return x.cn;const P=i.geometries.at(0).spatialReference,f=i.geometries.toArray().map(r=>{try{r=d.simplify(r)}catch{return C.Z.getLogger(this).warnOncePerTick("Failed to simplify scene filter mask polygon. Polygon will be ignored."),null}if(null==r)return null;if(r.spatialReference.equals(P))return r;try{return(0,I.project)(r,P)}catch{return C.Z.getLogger(this).warnOncePerTick("Failed to project scene filter mask polygon. Polygon will be ignored."),null}}).filter(j.pC).sort((r,n)=>r.extent.xmin-n.extent.xmin),E=new Set,m=new Array,e=new Array;for(let r of f){const n=r.extent.xmin;if(m.length=0,E.forEach(s=>{if(n>=s.extent.xmax)return e.push(s),void E.delete(s);r.extent.ymin<=s.extent.ymax&&r.extent.ymax>=s.extent.ymin&&d.intersects(r,s)&&m.push(s)}),m.length>0){m.push(r);try{r=d.union(m)}catch{C.Z.getLogger(this).warnOncePerTick("Failed to unify filter mask polygons. Polygon will be ignored.");continue}m.pop(),m.forEach(s=>E.delete(s))}E.add(r)}return E.forEach(r=>e.push(r)),e.length>0?{spatialRelationship:i.spatialRelationship,geometries:e}:null}get _filterNeedsProjectionEngine(){const i=this.layer.filter;if(null==i||i.geometries.length<=1)return!1;const d=i.geometries.at(0).spatialReference;return i.geometries.some(({spatialReference:P})=>!P.equals(d)&&!(0,I.canProjectWithoutEngine)(P,d))}get layerFilterUpdating(){return(0,x.j)(this._layerFilter)}initialize(){var i=this;const{signal:d}=this._abortController;(0,U.N1)(()=>this.destroyed||!this._geometryEngine&&this.layer?.filter?.geometries?.length,d).then((0,h.Z)(function*(){(0,L.r9)(d),i._geometryEngine=yield Promise.all([t.e(4918),t.e(4766)]).then(t.bind(t,44766))})).catch(L.H9),this._projectionEngineLoaded=(0,I.isLoaded)(),(0,U.N1)(()=>this.destroyed||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine,d).then((0,h.Z)(function*(){(0,L.r9)(d),yield(0,I.load)(),i._projectionEngineLoaded=!0})).catch(L.H9)}destroy(){this._abortController=(0,B.IM)(this._abortController)}highlight(i){throw new Error("Not implemented")}queryFeatures(i,d){throw new Error("Not implemented")}queryObjectIds(i,d){throw new Error("Not implemented")}queryFeatureCount(i,d){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(i,d){throw new Error("Not implemented")}};(0,l._)([(0,D.Cb)()],o.prototype,"layer",void 0),(0,l._)([(0,D.Cb)()],o.prototype,"availableFields",null),(0,l._)([(0,D.Cb)()],o.prototype,"maximumNumberOfFeatures",null),(0,l._)([(0,D.Cb)({readOnly:!0})],o.prototype,"maximumNumberOfFeaturesExceeded",null),(0,l._)([(0,D.Cb)()],o.prototype,"filter",void 0),(0,l._)([(0,D.Cb)({readOnly:!0})],o.prototype,"layerFilter",null),(0,l._)([(0,D.Cb)({readOnly:!0})],o.prototype,"_layerFilter",null),(0,l._)([(0,D.Cb)()],o.prototype,"_geometryEngine",void 0),(0,l._)([(0,D.Cb)()],o.prototype,"_projectionEngineLoaded",void 0),(0,l._)([(0,D.Cb)()],o.prototype,"_filterNeedsProjectionEngine",null),(0,l._)([(0,D.Cb)()],o.prototype,"layerFilterUpdating",null),o=(0,l._)([(0,A.j)("esri.views.layers.SceneLayerView")],o);const a=o}}]);