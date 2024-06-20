"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[2903],{72903:(b,m,r)=>{r.r(m),r.d(m,{default:()=>ht});var y=r(15861),s=r(17626),f=(r(29132),r(73281)),E=(r(4832),r(68387),r(96794),r(69747),r(40425),r(69357),r(40342),r(73640),r(33474),r(32088)),v=r(99959),D=r(10699),M=r(21726),o=r(77712),z=r(8314),A=r(63290),L=(r(4619),r(76898)),U=r(71774),H=r(44917),Q=r(26584),W=r(47996),V=r(97347),K=r(56554),Y=r(17253),B=r(2004),X=r(37118);let h=class extends W.Z{constructor(){var t;super(...arguments),t=this,this.type="geojson",this.refresh=(0,D.Ds)(function(){var e=(0,y.Z)(function*(i){yield t.load();const{extent:a,timeExtent:d}=yield t._connection.invoke("refresh",i);return t.sourceJSON.extent=a,d&&(t.sourceJSON.timeInfo.timeExtent=[d.start,d.end]),{dataChanged:!0,updates:{extent:t.sourceJSON.extent,timeInfo:t.sourceJSON.timeInfo}}});return function(i){return e.apply(this,arguments)}}())}load(t){return this.addResolvingPromise(this._startWorker(null!=t?t.signal:null)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}applyEdits(t){return this.load().then(()=>this._applyEdits(t))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatures",t?t.toJSON():null,e)).then(i=>Y.Z.fromJSON(i))}queryFeaturesJSON(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatures",t?t.toJSON():null,e))}queryFeatureCount(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e))}queryObjectIds(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryObjectIds",t?t.toJSON():null,e))}queryExtent(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryExtent",t?t.toJSON():null,e)).then(i=>({count:i.count,extent:B.Z.fromJSON(i.extent)}))}querySnapping(t,e={}){return this.load(e).then(()=>this._connection.invoke("querySnapping",t,e))}_applyEdits(t){if(!this._connection)throw new Q.Z("geojson-layer-source:edit-failure","Memory source not loaded");const e=this.layer.objectIdField,i=[],a=[],d=[];if(t.addFeatures)for(const l of t.addFeatures)i.push(this._serializeFeature(l));if(t.deleteFeatures)for(const l of t.deleteFeatures)"objectId"in l&&null!=l.objectId?a.push(l.objectId):"attributes"in l&&null!=l.attributes[e]&&a.push(l.attributes[e]);if(t.updateFeatures)for(const l of t.updateFeatures)d.push(this._serializeFeature(l));return this._connection.invoke("applyEdits",{adds:i,updates:d,deletes:a}).then(({extent:l,timeExtent:C,featureEditResults:I})=>(this.sourceJSON.extent=l,C&&(this.sourceJSON.timeInfo.timeExtent=[C.start,C.end]),this._createEditsResult(I)))}_createEditsResult(t){return{addFeatureResults:t.addResults?t.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:t.updateResults?t.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:t.deleteResults?t.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(t){const e=!0===t.success?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new Q.Z("geojson-layer-source:edit-failure",e.description,{code:e.code}):null}}_serializeFeature(t){const{attributes:e}=t,i=this._geometryForSerialization(t);return i?{geometry:i.toJSON(),attributes:e}:{attributes:e}}_geometryForSerialization(t){const{geometry:e}=t;return null==e?null:"mesh"===e.type||"extent"===e.type?X.Z.fromExtent(e.extent):e}_startWorker(t){var e=this;return(0,y.Z)(function*(){e._connection=yield(0,V.bA)("GeoJSONSourceWorker",{strategy:(0,z.Z)("feature-layers-workers")?"dedicated":"local",signal:t,registryTarget:e});const{fields:i,spatialReference:a,hasZ:d,geometryType:l,objectIdField:C,url:I,timeInfo:$,customParameters:mt}=e.layer,vt="defaults"===e.layer.originOf("spatialReference"),ft={url:I,customParameters:mt,fields:i&&i.map(F=>F.toJSON()),geometryType:U.M.toJSON(l),hasZ:d,objectIdField:C,timeInfo:$?$.toJSON():null,spatialReference:vt?null:a&&a.toJSON()},S=yield e._connection.invoke("load",ft,{signal:t});for(const F of S.warnings)A.Z.getLogger(e.layer).warn("#load()",`$${F.message} (title: '${e.layer.title||"no title"}', id: '${e.layer.id??"no id"}')`,{warning:F});S.featureErrors.length&&A.Z.getLogger(e.layer).warn("#load()",`Encountered ${S.featureErrors.length} validation errors while loading features. (title: '${e.layer.title||"no title"}', id: '${e.layer.id??"no id"}')`,{errors:S.featureErrors}),e.sourceJSON=S.layerDefinition,e.capabilities=(0,K.MS)(e.sourceJSON.hasZ,!0)})()}};(0,s._)([(0,o.Cb)()],h.prototype,"capabilities",void 0),(0,s._)([(0,o.Cb)()],h.prototype,"type",void 0),(0,s._)([(0,o.Cb)({constructOnly:!0})],h.prototype,"layer",void 0),(0,s._)([(0,o.Cb)()],h.prototype,"sourceJSON",void 0),h=(0,s._)([(0,L.j)("esri.layers.graphics.sources.GeoJSONSource")],h);var w=r(552),q=r(50107),k=r(35126),_=r(33491),tt=r(49286),et=r(17165),rt=r(6647),st=r(30346),ot=r(99555),nt=r(97941),c=r(13812),it=r(32777),at=r(36255),lt=r(55911),R=r(90194),ut=r(170),pt=r(62667),g=r(96854),dt=r(49430),yt=r(28302),G=r(65234);const ct=(0,lt.v)();let n=class extends((0,et.c)((0,q.N)((0,_.M)((0,k.b)((0,w.h)((0,nt.n)((0,ot.M)((0,st.Q)((0,tt.q)((0,rt.I)((0,v.R)(H.Z)))))))))))){constructor(t){super(t),this.copyright=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new h({layer:this}),this.spatialReference=G.Z.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson"}destroy(){this.source?.destroy()}load(t){const e=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},t).catch(D.r9).then(()=>this.source.load(t)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),(0,R.YN)(this.renderer,this.fieldsIndex),(0,R.UF)(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(e),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?(0,M.mN)(this.url):null}set renderer(t){(0,R.YN)(t,this.fieldsIndex),this._set("renderer",t)}set url(t){if(!t)return void this._set("url",t);const e=(0,M.mN)(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}applyEdits(t,e){var i=this;return(0,y.Z)(function*(){const{applyEdits:a}=yield r.e(1913).then(r.bind(r,81913));yield i.load();const d=yield a(i,i.source,t,e);return i.read({extent:i.source.sourceJSON.extent,timeInfo:i.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),d})()}on(t,e){return super.on(t,e)}createPopupTemplate(t){return(0,dt.eZ)(this,t)}createQuery(){const t=new g.Z,e=this.capabilities?.data;t.returnGeometry=!0,e&&e.supportsZ&&(t.returnZ=!0),t.outFields=["*"],t.where=this.definitionExpression||"1=1";const{timeOffset:i,timeExtent:a}=this;return t.timeExtent=null!=i&&null!=a?a.offset(-i.value,i.unit):a||null,t}getFieldDomain(t,e){return this.getField(t)?.domain}getField(t){return this.fieldsIndex.get(t)}queryFeatures(t,e){return this.load().then(()=>this.source.queryFeatures(g.Z.from(t)||this.createQuery(),e)).then(i=>{if(i?.features)for(const a of i.features)a.layer=a.sourceLayer=this;return i})}queryObjectIds(t,e){return this.load().then(()=>this.source.queryObjectIds(g.Z.from(t)||this.createQuery(),e))}queryFeatureCount(t,e){return this.load().then(()=>this.source.queryFeatureCount(g.Z.from(t)||this.createQuery(),e))}queryExtent(t,e){return this.load().then(()=>this.source.queryExtent(g.Z.from(t)||this.createQuery(),e))}hasDataChanged(){var t=this;return(0,y.Z)(function*(){try{const{dataChanged:e,updates:i}=yield t.source.refresh(t.customParameters);return null!=i&&t.read(i,{origin:"service",url:t.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1})()}};(0,s._)([(0,o.Cb)({readOnly:!0,json:{read:!1,write:!1}})],n.prototype,"capabilities",null),(0,s._)([(0,o.Cb)({type:String})],n.prototype,"copyright",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],n.prototype,"createQueryVersion",null),(0,s._)([(0,o.Cb)((0,yt.mi)("dateFieldsTimeReference"))],n.prototype,"dateFieldsTimeZone",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],n.prototype,"defaultPopupTemplate",null),(0,s._)([(0,o.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],n.prototype,"definitionExpression",void 0),(0,s._)([(0,o.Cb)({type:String})],n.prototype,"displayField",void 0),(0,s._)([(0,o.Cb)({type:Boolean})],n.prototype,"editingEnabled",void 0),(0,s._)([(0,o.Cb)(c.PV)],n.prototype,"elevationInfo",void 0),(0,s._)([(0,o.Cb)({type:[at.Z],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],n.prototype,"fields",void 0),(0,s._)([(0,o.Cb)(ct.fieldsIndex)],n.prototype,"fieldsIndex",void 0),(0,s._)([(0,o.Cb)({type:B.Z,json:{name:"extent"}})],n.prototype,"fullExtent",void 0),(0,s._)([(0,o.Cb)({type:["point","polygon","polyline","multipoint"],json:{read:{reader:U.M.read}}})],n.prototype,"geometryType",void 0),(0,s._)([(0,o.Cb)({type:Boolean})],n.prototype,"hasZ",void 0),(0,s._)([(0,o.Cb)(c.id)],n.prototype,"id",void 0),(0,s._)([(0,o.Cb)({type:Boolean,readOnly:!0})],n.prototype,"isTable",null),(0,s._)([(0,o.Cb)(c.iR)],n.prototype,"labelsVisible",void 0),(0,s._)([(0,o.Cb)({type:[ut.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:pt.r},write:!0}})],n.prototype,"labelingInfo",void 0),(0,s._)([(0,o.Cb)(c.rn)],n.prototype,"legendEnabled",void 0),(0,s._)([(0,o.Cb)({type:["show","hide"]})],n.prototype,"listMode",void 0),(0,s._)([(0,o.Cb)({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],n.prototype,"objectIdField",void 0),(0,s._)([(0,o.Cb)(c.Oh)],n.prototype,"opacity",void 0),(0,s._)([(0,o.Cb)({type:["GeoJSON"]})],n.prototype,"operationalLayerType",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],n.prototype,"parsedUrl",null),(0,s._)([(0,o.Cb)(c.C_)],n.prototype,"popupEnabled",void 0),(0,s._)([(0,o.Cb)({type:f.Z,json:{name:"popupInfo",write:!0}})],n.prototype,"popupTemplate",void 0),(0,s._)([(0,o.Cb)({types:E.A,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:E.o}}}})],n.prototype,"renderer",null),(0,s._)([(0,o.Cb)(c.YI)],n.prototype,"screenSizePerspectiveEnabled",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],n.prototype,"source",void 0),(0,s._)([(0,o.Cb)({type:G.Z})],n.prototype,"spatialReference",void 0),(0,s._)([(0,o.Cb)({type:[it.Z]})],n.prototype,"templates",void 0),(0,s._)([(0,o.Cb)()],n.prototype,"title",void 0),(0,s._)([(0,o.Cb)({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),(0,s._)([(0,o.Cb)(c.HQ)],n.prototype,"url",null),n=(0,s._)([(0,L.j)("esri.layers.GeoJSONLayer")],n);const ht=n},87757:(b,m,r)=>{r.d(m,{g:()=>y});const y={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},56554:(b,m,r)=>{r.d(m,{Dm:()=>j,Hq:()=>T,MS:()=>J,bU:()=>P});var y=r(8314),s=r(58817),x=r(87757),f=r(24837);function P(u){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===u||"esriGeometryMultipoint"===u?f.I4:"esriGeometryPolyline"===u?f.ET:f.lF}}}const N=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let Z=1;function j(u,p){if((0,y.Z)("esri-csp-restrictions"))return()=>({[p]:null,...u});try{let O=`this.${p} = null;`;for(const v in u)O+=`this${N.test(v)?`.${v}`:`["${v}"]`} = ${JSON.stringify(u[v])};`;const E=new Function(`\n      return class AttributesClass$${Z++} {\n        constructor() {\n          ${O};\n        }\n      }\n    `)();return()=>new E}catch{return()=>({[p]:null,...u})}}function T(u={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(u)}}]}function J(u,p){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:u},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:p,supportsDelete:p,supportsEditing:p,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:p,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:x.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:p,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}}}]);