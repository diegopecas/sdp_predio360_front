"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[2432,587],{52489:(z,D,r)=>{r.d(D,{D:()=>i});var d=r(22558);function i(E){E?.writtenProperties&&E.writtenProperties.forEach(({target:y,propName:_,newOrigin:h})=>{(0,d.l)(y)&&h&&y.originOf(_)!==h&&y.updateOrigin(_,h)})}},22558:(z,D,r)=>{function d(i){return i&&"getAtOrigin"in i&&"originOf"in i}r.d(D,{l:()=>d})},42432:(z,D,r)=>{r.d(D,{xp:()=>$,Vt:()=>V});var d=r(15861),i=r(17626),E=r(84792),y=r(26584),_=r(63290),h=r(10699),v=r(21726),u=r(77712),S=(r(8314),r(4619),r(68653)),b=r(76898),Z=r(99433),c=r(52489),m=r(2004),P=r(79334),f=r(65234),R=r(38305),w=r(13812),n=r(60595);var j=r(31099),l=r(55463),T=r(88755),W=r(20677),K=r(53675),M=r(71404);const V=A=>{let g=class extends A{constructor(){var o;super(...arguments),o=this,this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,h.Ds)(function(){var e=(0,d.Z)(function*(t,s,a){switch(t){case $.SAVE:return o._save(s);case $.SAVE_AS:return o._saveAs(a,s)}});return function(t,s,a){return e.apply(this,arguments)}}())}readSpatialReference(o,e){return this._readSpatialReference(e)}_readSpatialReference(o){if(null!=o.spatialReference)return f.Z.fromJSON(o.spatialReference);const e=o.store,t=e.indexCRS||e.geographicCRS,s=t&&parseInt(t.substring(t.lastIndexOf("/")+1,t.length),10);return null!=s?new f.Z(s):null}readFullExtent(o,e,t){if(null!=o&&"object"==typeof o){const C=null==o.spatialReference?{...o,spatialReference:this._readSpatialReference(e)}:o;return m.Z.fromJSON(C,t)}const s=e.store,a=this._readSpatialReference(e);return null==a||null==s?.extent||!Array.isArray(s.extent)||s.extent.some(C=>C<N)?null:new m.Z({xmin:s.extent[0],ymin:s.extent[1],xmax:s.extent[2],ymax:s.extent[3],spatialReference:a})}parseVersionString(o){const e={major:Number.NaN,minor:Number.NaN,versionString:o},t=o.split(".");return t.length>=2&&(e.major=parseInt(t[0],10),e.minor=parseInt(t[1],10)),e}readVersion(o,e){const t=e.store,s=null!=t.version?t.version.toString():"";return this.parseVersionString(s)}readTitlePortalItem(o){return"item-title"!==this.sublayerTitleMode?void 0:o}readTitleService(o,e){const t=this.portalItem?.title;if("item-title"===this.sublayerTitleMode)return(0,R.a7)(this.url,e.name);let s=e.name;if(!s&&this.url){const a=(0,R.Qc)(this.url);null!=a&&(s=a.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&t&&(s=t+" - "+s),(0,R.ld)(s)}set url(o){const e=(0,R.XG)({layer:this,url:o,nonStandardUrlAllowed:!1,logger:_.Z.getLogger(this)});this._set("url",e.url),null!=e.layerId&&this._set("layerId",e.layerId)}writeUrl(o,e,t,s){(0,R.wH)(this,o,"layers",e,s)}get parsedUrl(){const o=this._get("url"),e=(0,v.mN)(o);return null!=this.layerId&&(e.path=`${e.path}/layers/${this.layerId}`),e}_fetchIndexAndUpdateExtent(o,e){var t=this;return(0,d.Z)(function*(){t.indexInfo=(0,n.T)(t.parsedUrl.path,t.rootNode,o,t.customParameters,t.apiKey,_.Z.getLogger(t),e),null==t.fullExtent||t.fullExtent.hasZ||t._updateExtent(yield t.indexInfo)})()}_updateExtent(o){if("page"===o?.type){const t=o.rootPage?.nodes?.[o.rootIndex%o.pageSize];if(null==t?.obb?.center||null==t.obb.halfSize)throw new y.Z("sceneservice:invalid-node-page","Invalid node page.");if(t.obb.center[0]<N||null==this.fullExtent||this.fullExtent.hasZ)return;const s=t.obb.halfSize,a=t.obb.center[2],C=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this.fullExtent.zmin=a-C,this.fullExtent.zmax=a+C}else if("node"===o?.type){const e=o.rootNode?.mbs;if(!Array.isArray(e)||4!==e.length||e[0]<N)return;const t=e[2],s=e[3],{fullExtent:a}=this;a&&(a.zmin=t-s,a.zmax=t+s)}}_fetchService(o){var e=this;return(0,d.Z)(function*(){if(null==e.url)throw new y.Z("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==e.layerId&&/SceneServer\/*$/i.test(e.url)){const t=yield e._fetchFirstLayerId(o);null!=t&&(e.layerId=t)}return e._fetchServiceLayer(o)})()}_fetchFirstLayerId(o){var e=this;return(0,d.Z)(function*(){const t=yield(0,E.Z)(e.url,{query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:o});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id})()}_fetchServiceLayer(o){var e=this;return(0,d.Z)(function*(){const t=yield(0,E.Z)(e.parsedUrl?.path??"",{query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:o});t.ssl&&(e.url=e.url.replace(/^http:/i,"https:"));let s=!1;if(t.data.layerType&&"Voxel"===t.data.layerType&&(s=!0),s)return e._fetchVoxelServiceLayer();const a=t.data;e.read(a,e._getServiceContext()),e.validateLayer(a)})()}_fetchVoxelServiceLayer(o){var e=this;return(0,d.Z)(function*(){const t=(yield(0,E.Z)(e.parsedUrl?.path+"/layer",{query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:o})).data;e.read(t,e._getServiceContext()),e.validateLayer(t)})()}_getServiceContext(){return{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}}_ensureLoadBeforeSave(){var o=this;return(0,d.Z)(function*(){yield o.load(),"beforeSave"in o&&"function"==typeof o.beforeSave&&(yield o.beforeSave())})()}validateLayer(o){}_updateTypeKeywords(o,e,t){o.typeKeywords||(o.typeKeywords=[]);const s=e.getTypeKeywords();for(const a of s)o.typeKeywords.push(a);o.typeKeywords&&(o.typeKeywords=o.typeKeywords.filter((a,C,B)=>B.indexOf(a)===C),t===L.newItem&&(o.typeKeywords=o.typeKeywords.filter(a=>"Hosted Service"!==a)))}_saveAs(o,e){var t=this;return(0,d.Z)(function*(){const s={...H,...e};let a=l.default.from(o);if(!a)throw new y.Z("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");(0,K.w)(a),a.id&&(a=a.clone(),a.id=null);const C=a.portal||j.Z.getDefault();yield t._ensureLoadBeforeSave(),a.type=F,a.portal=C;const B=(0,T.Y)(a,"portal-item",!0),G={layers:[t.write({},B)]};return yield Promise.all(B.resources.pendingOperations??[]),yield t._validateAgainstJSONSchema(G,B,s),a.url=t.url,a.title||(a.title=t.title),t._updateTypeKeywords(a,s,L.newItem),yield C.signIn(),yield C.user?.addItem({item:a,folder:s?.folder,data:G}),yield(0,W.H)(t.resourceReferences,B),t.portalItem=a,(0,c.D)(B),B.portalItem=a,a})()}_save(o){var e=this;return(0,d.Z)(function*(){const t={...H,...o};if(!e.portalItem)throw new y.Z("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if((0,K.w)(e.portalItem),e.portalItem.type!==F)throw new y.Z("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${F}"`);yield e._ensureLoadBeforeSave();const s=(0,T.Y)(e.portalItem,"portal-item",!0),a={layers:[e.write({},s)]};return yield Promise.all(s.resources.pendingOperations??[]),yield e._validateAgainstJSONSchema(a,s,t),e.portalItem.url=e.url,e.portalItem.title||(e.portalItem.title=e.title),e._updateTypeKeywords(e.portalItem,t,L.existingItem),yield(0,W.b)(e.portalItem,a,e.resourceReferences,s),(0,c.D)(s),e.portalItem})()}_validateAgainstJSONSchema(o,e,t){var s=this;return(0,d.Z)(function*(){const a=t?.validationOptions;(0,M.z)(e,{errorName:"sceneservice:save"},{ignoreUnsupported:a?.ignoreUnsupported,supplementalUnsupportedErrors:["scenemodification:unsupported"]});const C=a?.enabled,B=null;if(C&&B){const G=(yield B()).validate(o,t.portalItemLayerType);if(!G.length)return;const J=`Layer item did not validate:\n${G.join("\n")}`;if(_.Z.getLogger(s).error(`_validateAgainstJSONSchema(): ${J}`),"throw"===a.failPolicy){const Y=G.map(Q=>new y.Z("sceneservice:schema-validation",Q));throw new y.Z("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{validationErrors:Y})}}})()}};return(0,i._)([(0,u.Cb)(w.id)],g.prototype,"id",void 0),(0,i._)([(0,u.Cb)({type:f.Z})],g.prototype,"spatialReference",void 0),(0,i._)([(0,S.r)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],g.prototype,"readSpatialReference",null),(0,i._)([(0,u.Cb)({type:m.Z})],g.prototype,"fullExtent",void 0),(0,i._)([(0,S.r)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],g.prototype,"readFullExtent",null),(0,i._)([(0,u.Cb)({readOnly:!0,type:P.Z})],g.prototype,"heightModelInfo",void 0),(0,i._)([(0,u.Cb)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],g.prototype,"minScale",void 0),(0,i._)([(0,u.Cb)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],g.prototype,"maxScale",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],g.prototype,"version",void 0),(0,i._)([(0,S.r)("version",["store.version"])],g.prototype,"readVersion",null),(0,i._)([(0,u.Cb)({type:String,json:{read:{source:"copyrightText"}}})],g.prototype,"copyright",void 0),(0,i._)([(0,u.Cb)({type:String,json:{read:!1}})],g.prototype,"sublayerTitleMode",void 0),(0,i._)([(0,u.Cb)({type:String})],g.prototype,"title",void 0),(0,i._)([(0,S.r)("portal-item","title")],g.prototype,"readTitlePortalItem",null),(0,i._)([(0,S.r)("service","title",["name"])],g.prototype,"readTitleService",null),(0,i._)([(0,u.Cb)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],g.prototype,"layerId",void 0),(0,i._)([(0,u.Cb)(w.HQ)],g.prototype,"url",null),(0,i._)([(0,Z.c)("url")],g.prototype,"writeUrl",null),(0,i._)([(0,u.Cb)()],g.prototype,"parsedUrl",null),(0,i._)([(0,u.Cb)({readOnly:!0})],g.prototype,"store",void 0),(0,i._)([(0,u.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],g.prototype,"rootNode",void 0),g=(0,i._)([(0,b.j)("esri.layers.mixins.SceneService")],g),g},N=-1e38;var L,A;(A=L||(L={}))[A.existingItem=0]="existingItem",A[A.newItem=1]="newItem";const F="Scene Service",H={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var $;!function(A){A[A.SAVE=0]="SAVE",A[A.SAVE_AS=1]="SAVE_AS"}($||($={}))},60595:(z,D,r)=>{r.d(D,{T:()=>y});var d=r(15861),i=r(84792),E=r(26584);function y(h,v,u,O,x,S,b){return _.apply(this,arguments)}function _(){return(_=(0,d.Z)(function*(h,v,u,O,x,S,b){let Z=null;if(null!=u){const f=`${h}/nodepages/`,R=f+Math.floor(u.rootIndex/u.nodesPerPage);try{return{type:"page",rootPage:(yield(0,i.Z)(R,{query:{f:"json",...O,token:x},responseType:"json",signal:b})).data,rootIndex:u.rootIndex,pageSize:u.nodesPerPage,lodMetric:u.lodSelectionMetricType,urlPrefix:f}}catch(w){S?.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",R,w),Z=w}}if(!v)return null;const c=v?.split("/").pop(),m=`${h}/nodes/`,P=m+c;try{return{type:"node",rootNode:(yield(0,i.Z)(P,{query:{f:"json",...O,token:x},responseType:"json",signal:b})).data,urlPrefix:m}}catch(f){throw new E.Z("sceneservice:root-node-missing","Root node missing.",{pageError:Z,nodeError:f,url:P})}})).apply(this,arguments)}},88755:(z,D,r)=>{r.d(D,{Y:()=>y,h:()=>E});var d=r(21726),i=r(31099);function E(h,v){return{..._(h,v),readResourcePaths:[]}}function y(h,v,u){const O=(0,d.mN)(h.itemUrl);return{..._(h,v),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:O?{rootPath:O.path,writtenUrls:[]}:null,resources:u?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function _(h,v){return{origin:v,url:(0,d.mN)(h.itemUrl),portal:h.portal||i.Z.getDefault(),portalItem:h}}},10587:(z,D,r)=>{r.r(D),r.d(D,{addOrUpdateResources:()=>v,contentToBlob:()=>P,fetchResources:()=>_,getSiblingOfSameType:()=>R,getSiblingOfSameTypeI:()=>w,removeAllResources:()=>S,removeResource:()=>O,splitPrefixFileNameAndExtension:()=>c});var d=r(15861),i=r(84792),E=r(26584),y=r(21726);function _(n){return h.apply(this,arguments)}function h(){return(h=(0,d.Z)(function*(n,p={},I){yield n.load(I);const U=(0,y.v_)(n.itemUrl,"resources"),{start:j=1,num:l=10,sortOrder:T="asc",sortField:W="resource"}=p,K={query:{start:j,num:l,sortOrder:T,sortField:W,token:n.apiKey},signal:I?.signal},M=yield n.portal.request(U,K);return{total:M.total,nextStart:M.nextStart,resources:M.resources.map(({created:V,size:N,resource:L})=>({created:new Date(V),size:N,resource:n.resourceFromPath(L)}))}})).apply(this,arguments)}function v(n,p,I,U){return u.apply(this,arguments)}function u(){return(u=(0,d.Z)(function*(n,p,I,U){const j=new Map;for(const{resource:T,content:W,compress:K,access:M}of p){if(!T.hasPath())throw new E.Z(`portal-item-resource-${I}:invalid-path`,"Resource does not have a valid path");const[V,N]=Z(T.path),L=`${V}/${K??""}/${M??""}`;j.has(L)||j.set(L,{prefix:V,compress:K,access:M,files:[]}),j.get(L).files.push({fileName:N,content:W})}yield n.load(U);const l=(0,y.v_)(n.userItemUrl,"add"===I?"addResources":"updateResources");for(const{prefix:T,compress:W,access:K,files:M}of j.values())for(let N=0;N<M.length;N+=25){const L=M.slice(N,N+25),F=new FormData;T&&"."!==T&&F.append("resourcesPrefix",T),W&&F.append("compress","true"),K&&F.append("access",K);let H=0;for(const{fileName:$,content:A}of L)F.append("file"+ ++H,A,$);F.append("f","json"),yield n.portal.request(l,{method:"post",body:F,signal:U?.signal})}})).apply(this,arguments)}function O(n,p,I){return x.apply(this,arguments)}function x(){return(x=(0,d.Z)(function*(n,p,I){if(!p.hasPath())throw new E.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");yield n.load(I);const U=(0,y.v_)(n.userItemUrl,"removeResources");yield n.portal.request(U,{method:"post",query:{resource:p.path},signal:I?.signal}),p.portalItem=null})).apply(this,arguments)}function S(n,p){return b.apply(this,arguments)}function b(){return(b=(0,d.Z)(function*(n,p){yield n.load(p);const I=(0,y.v_)(n.userItemUrl,"removeResources");return n.portal.request(I,{method:"post",query:{deleteAll:!0},signal:p?.signal})})).apply(this,arguments)}function Z(n){const p=n.lastIndexOf("/");return-1===p?[".",n]:[n.slice(0,p),n.slice(p+1)]}function c(n){const[p,I]=function m(n){const p=(0,y.Ml)(n);return null==p?[n,""]:[n.slice(0,n.length-p.length-1),`.${p}`]}(n),[U,j]=Z(p);return[U,j,I]}function P(n){return f.apply(this,arguments)}function f(){return(f=(0,d.Z)(function*(n){return"blob"===n.type?n.blob:"json"===n.type?new Blob([n.jsonString],{type:"application/json"}):(yield(0,i.Z)(n.url,{responseType:"blob"})).data})).apply(this,arguments)}function R(n,p){if(!n.hasPath())return null;const[I,,U]=c(n.path);return n.portalItem.resourceFromPath((0,y.v_)(I,p+U))}function w(n,p){if(!n.hasPath())return null;const[I,,U]=c(n.path);return n.portalItem.resourceFromPath((0,y.v_)(I,p+U))}},20677:(z,D,r)=>{r.d(D,{H:()=>h,b:()=>u});var d=r(15861),i=r(26584),E=r(10699),y=r(35948),_=r(10587);function h(c,m,P){return v.apply(this,arguments)}function v(){return(v=(0,d.Z)(function*(c,m,P){const f=yield x(c,m,P);yield b(f,m,P)})).apply(this,arguments)}function u(c,m,P,f,R){return O.apply(this,arguments)}function O(){return(O=(0,d.Z)(function*(c,m,P,f,R){const w=yield x(P,f,R);yield c.update({data:m}),yield b(w,f,R)})).apply(this,arguments)}function x(c,m,P){return S.apply(this,arguments)}function S(){return(S=(0,d.Z)(function*(c,m,P){if(!m?.resources)return;const f=m.portalItem===c.portalItem?new Set(c.paths):new Set;c.paths.length=0,c.portalItem=m.portalItem;const R=new Set(m.resources.toKeep.map(l=>l.resource.path)),w=new Set,n=[];R.forEach(l=>{f.delete(l),c.paths.push(l)});const p=[],I=[],U=[];for(const l of m.resources.toUpdate)if(f.delete(l.resource.path),R.has(l.resource.path)||w.has(l.resource.path)){const{resource:T,content:W,finish:K}=l,M=(0,_.getSiblingOfSameTypeI)(T,(0,y.DO)());c.paths.push(M.path),p.push({resource:M,content:yield(0,_.contentToBlob)(W),compress:l.compress}),K&&U.push(()=>K(M))}else{c.paths.push(l.resource.path),I.push({resource:l.resource,content:yield(0,_.contentToBlob)(l.content),compress:l.compress});const T=l.finish;T&&U.push(()=>T(l.resource)),w.add(l.resource.path)}for(const l of m.resources.toAdd)if(c.paths.push(l.resource.path),f.has(l.resource.path))f.delete(l.resource.path);else{p.push({resource:l.resource,content:yield(0,_.contentToBlob)(l.content),compress:l.compress});const T=l.finish;T&&U.push(()=>T(l.resource))}if(p.length||I.length){const{addOrUpdateResources:l}=yield Promise.resolve().then(r.bind(r,10587));yield l(m.portalItem,p,"add",P),yield l(m.portalItem,I,"update",P)}if(U.forEach(l=>l()),0===n.length)return f;const j=yield(0,E.UO)(n);if((0,E.k_)(P),j.length>0)throw new i.Z("save:resources","Failed to save one or more resources",{errors:j});return f})).apply(this,arguments)}function b(c,m,P){return Z.apply(this,arguments)}function Z(){return(Z=(0,d.Z)(function*(c,m,P){if(!c||!m.portalItem)return;const f=[];for(const R of c){const w=m.portalItem.resourceFromPath(R);f.push(w.portalItem.removeResource(w,P))}yield(0,E.as)(f)})).apply(this,arguments)}},53675:(z,D,r)=>{r.d(D,{w:()=>y});var d=r(59318),i=r(26584),E=r(12680);function y(_){if(d.Z.apiKey&&(0,E.r)(_.portal.url))throw new i.Z("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${_.portal.url} when using an api key`)}},71404:(z,D,r)=>{r.d(D,{P:()=>E,z:()=>h});var d=r(15861),i=r(26584);function E(v){return y.apply(this,arguments)}function y(){return(y=(0,d.Z)(function*(v){const u=[];for(const O of v.allLayers)if("beforeSave"in O&&"function"==typeof O.beforeSave){const x=O.beforeSave();x&&u.push(x)}yield Promise.allSettled(u)})).apply(this,arguments)}const _=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function h(v,u,O){let x=(v.messages??[]).filter(({type:S})=>"error"===S).map(({name:S,message:b,details:Z})=>new i.Z(S,b,Z));if(v.blockedRelativeUrls&&(x=x.concat(v.blockedRelativeUrls.map(S=>new i.Z("url:unsupported",`Relative url '${S}' is not supported`)))),O){const{ignoreUnsupported:S,supplementalUnsupportedErrors:b=[],requiredPropertyChecksDisabled:Z}=O;S&&(x=x.filter(({name:c})=>!(_.has(c)||b.includes(c)))),Z&&(x=x.filter(c=>"web-document-write:property-required"!==c.name))}if(x.length>0)throw new i.Z(u.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:x})}}}]);