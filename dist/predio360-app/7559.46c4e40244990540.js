"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[7559],{128:(J,U,t)=>{t.d(U,{B:()=>x});var n=t(15861),o=t(22558),p=t(21726),B=t(35948),A=t(34117),F=t(31283),h=t(77712),b=t(61556),y=t(29840);function x(l){const c=l?.origins??[void 0];return(i,L)=>{const v=function S(l,c,i){if("resource"===l?.type)return function M(l,c,i){const L=(0,A.Oe)(c,i);return{type:String,read:(v,O,C)=>{const u=(0,y.r)(v,O,C);return L.type===String?u:"function"==typeof L.type?new L.type({url:u}):void 0},write:{writer(v,O,C,u){if(!u||!u.resources)return"string"==typeof v?void(O[C]=(0,y.t)(v,u)):void(O[C]=v.write({},u));const w=function X(l){return null==l?null:"string"==typeof l?l:l.url}(v),R=(0,y.t)(w,{...u,verifyItemRelativeUrls:u&&u.verifyItemRelativeUrls?{writtenUrls:u.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},y.M.NO),Z=L.type!==String&&(!(0,o.l)(this)||u&&u.origin&&this.originIdOf(i)>(0,F.M9)(u.origin)),N={object:this,propertyName:i,value:v,targetUrl:R,dest:O,targetPropertyName:C,context:u,params:l};u&&u.portalItem&&R&&!(0,p.YP)(R)?Z?function E(l){const{context:c,targetUrl:i,params:L,value:v,dest:O,targetPropertyName:C}=l;if(!c.portalItem)return;const u=c.portalItem.resourceFromPath(i),w=I(v,i,c),R=(0,b.B)(w),Z=(0,p.Ml)(u.path),N=L?.compress??!1;R===Z?(c.resources&&f({...l,resource:u,content:w,compress:N,updates:c.resources.toUpdate}),O[C]=i):T(l)}(N):function D({context:l,targetUrl:c,dest:i,targetPropertyName:L}){l.portalItem&&l.resources&&(l.resources.toKeep.push({resource:l.portalItem.resourceFromPath(c),compress:!1}),i[L]=c)}(N):u&&u.portalItem&&(null==R||null!=(0,y.i)(R)||(0,p.jc)(R)||Z)?T(N):O[C]=R}}}}(l,c,i);switch(l?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:L,write:v}=y.a;return{read:L,write:v}}}}(l,i,L);for(const O of c){const C=(0,h.CJ)(i,O,L);for(const u in v)C[u]=v[u]}}}function T(l){const{targetUrl:c,params:i,value:L,context:v,dest:O,targetPropertyName:C}=l;if(!v.portalItem)return;const u=(0,y.p)(c),w=u?.filename??(0,B.D)(),R=i?.prefix??u?.prefix,Z=I(L,c,v),N=(0,p.v_)(R,w),_=`${N}.${(0,b.B)(Z)}`,G=v.portalItem.resourceFromPath(_);(0,p.jc)(c)&&v.resources&&v.resources.pendingOperations.push(function P(l){return m.apply(this,arguments)}(c).then(k=>{G.path=`${N}.${(0,b.B)(k)}`,O[C]=G.itemRelativeUrl}).catch(()=>{}));const q=i?.compress??!1;v.resources&&f({...l,resource:G,content:Z,compress:q,updates:v.resources.toAdd}),O[C]=G.itemRelativeUrl}function f({object:l,propertyName:c,updates:i,resource:L,content:v,compress:O}){i.push({resource:L,content:v,compress:O,finish:C=>{!function H(l,c,i){"string"==typeof l[c]?l[c]=i.url:l[c].url=i.url}(l,c,C)}})}function I(l,c,i){return"string"==typeof l?{url:c}:new Blob([JSON.stringify(l.toJSON(i))],{type:"application/json"})}function m(){return(m=(0,n.Z)(function*(l){const c=(yield Promise.resolve().then(t.bind(t,84792))).default,{data:i}=yield c(l,{responseType:"blob"});return i})).apply(this,arguments)}},27559:(J,U,t)=>{t.r(U),t.d(U,{default:()=>we});var n=t(15861),o=t(17626),p=t(88879),B=t(73281),E=(t(4832),t(49067),t(96794),t(69747),t(40425),t(69357),t(40342),t(73640),t(33474),t(32088)),D=t(84792),f=t(46160),I=t(26584),P=t(63290),m=t(62208),X=t(99959),H=t(10699),l=t(32917),c=t(21726),i=t(77712),O=(t(90912),t(85931),t(52323)),C=t(68653),u=t(76898),w=t(31283),R=t(44917),Z=t(50085),N=t(65088),_=t(6733),G=t(49286),q=t(6647),k=t(99555),ee=t(72455),me=t(59787),V=t(13812),ge=t(83989),ve=t(47058),Ie=t(74711),be=t(55911),Ce=t(60466),te=t(36630),z=t(35031),Se=t(170),de=t(62667),Ee=t(2430),re=t(86810);let W=class extends re.wq{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};(0,o._)([(0,i.Cb)({type:String,json:{read:!0,write:!0}})],W.prototype,"name",void 0),(0,o._)([(0,i.Cb)({type:String,json:{read:!0,write:!0}})],W.prototype,"field",void 0),(0,o._)([(0,i.Cb)({type:[Number],json:{read:!0,write:!0}})],W.prototype,"currentRangeExtent",void 0),(0,o._)([(0,i.Cb)({type:[Number],json:{read:!0,write:!0}})],W.prototype,"fullRangeExtent",void 0),(0,o._)([(0,i.Cb)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],W.prototype,"type",void 0),W=(0,o._)([(0,u.j)("esri.layers.support.RangeInfo")],W);var $,Le=t(72392),Oe=t(58817),Pe=t(128),ue=t(14889),se=(t(8314),t(37118)),ye=t(55915);let oe=$=class extends((0,re.eC)(f.Z.ofType(se.Z))){constructor(e){super(e)}clone(){return new $(this.items.map(e=>e.clone()))}write(e,s){return this.toJSON(s)}toJSON(e){const s=e?.layer?.spatialReference;return s?this.toArray().map(r=>{if(!s.equals(r.spatialReference)){if(!(0,ye.Up)(r.spatialReference,s))return e&&e.messages&&e.messages.push(new ue.Z("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const g=new se.Z;(0,ye.Wt)(r,g,s),r=g}const d=r.toJSON(e);return delete d.spatialReference,d}).filter(r=>null!=r):(e?.messages&&e.messages.push(new ue.Z("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map(r=>r.toJSON(e)))}static fromJSON(e,s){const r=new $;return e.forEach(d=>r.add(se.Z.fromJSON(d,s))),r}};oe=$=(0,o._)([(0,u.j)("esri.layers.support.PolygonCollection")],oe);const ie=oe;var ne,xe=t(29840);let K=ne=class extends re.wq{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new ie,this._geometriesSource=null,this._handles=new Le.Z}initialize(){this._handles.add((0,l.on)(()=>this.geometries,"after-changes",()=>this.geometries=this.geometries,l.Z_))}destroy(){this._handles.destroy()}readGeometries(e,s,r){this._geometriesSource={url:(0,xe.f)(e,r),context:r}}loadGeometries(e,s){var r=this;return(0,n.Z)(function*(){if((0,m.Wi)(r._geometriesSource))return;const{url:d,context:g}=r._geometriesSource,j=yield(0,D.default)(d,{responseType:"json",signal:(0,m.U2)(s,"signal")}),Q=e.toJSON(),ae=j.data.map(pe=>({...pe,spatialReference:Q}));r.geometries=ie.fromJSON(ae,g),r._geometriesSource=null})()}clone(){return new ne({geometries:(0,Oe.d9)(this.geometries),spatialRelationship:this.spatialRelationship})}};(0,o._)([(0,i.Cb)({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],K.prototype,"spatialRelationship",void 0),(0,o._)([(0,i.Cb)({type:ie,nonNullable:!0,json:{write:!0}}),(0,Pe.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries"})],K.prototype,"geometries",void 0),(0,o._)([(0,C.r)(["web-scene","portal-item"],"geometries")],K.prototype,"readGeometries",null),K=ne=(0,o._)([(0,u.j)("esri.layers.support.SceneFilter")],K);const je=K;var Fe=t(39683),Te=t(96854),Re=t(35560),Ue=t(49430),De=t(42964),ce=t(10023),Ae=t(92236);const Me=["3DObject","Point"],he=(0,be.v)();let a=class extends((0,_.o1)((0,ee.Vt)((0,N.Y)((0,G.q)((0,q.I)((0,k.M)((0,X.R)((0,Z.V)(R.Z))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new f.Z,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,s){return"string"==typeof e?{url:e,...s}:e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,s){const r=this.getFeatureType(s?.feature)?.domains?.[e];return r&&"inherited"!==r.type?r:this.getField(e)?.domain??null}getFeatureType(e){return null!=e&&(0,m.pC)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return(0,m.pC)(this.associatedLayer)?this.associatedLayer.types??[]:[]}get typeIdField(){return(0,m.pC)(this.associatedLayer)?this.associatedLayer.typeIdField:null}get formTemplate(){return(0,m.pC)(this.associatedLayer)?this.associatedLayer.formTemplate:null}get fieldsIndex(){return new Ce.Z(this.fields)}readNodePages(e,s,r){return"Point"===s.layerType&&(e=s.pointNodePages),null==e||"object"!=typeof e?null:z.U4.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return Ne[this.profile]||"mesh"}set renderer(e){(0,te.YN)(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){const e=(0,m.pC)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:me.C,{query:s,editing:{supportsGlobalId:r,supportsRollbackOnFailure:d,supportsUploadWithItemId:g,supportsGeometryUpdate:j,supportsReturnServiceEditsInSourceSpatialReference:Q},data:{supportsZ:ae,supportsM:pe,isVersioned:Ze,supportsAttachment:Be},operations:{supportsEditing:We,supportsAdd:Qe,supportsUpdate:Ge,supportsDelete:Ke,supportsQuery:Je,supportsQueryAttachments:Ve}}=e,Y=e.operations.supportsChangeTracking,le=(0,m.pC)(this.associatedLayer)&&(0,m.pC)(this.associatedLayer.infoFor3D)&&(0,Re.Rx)();return{query:s,editing:{supportsGlobalId:r,supportsReturnServiceEditsInSourceSpatialReference:Q,supportsRollbackOnFailure:d,supportsGeometryUpdate:le&&j,supportsUploadWithItemId:g},data:{supportsAttachment:Be,supportsZ:ae,supportsM:pe,isVersioned:Ze},operations:{supportsQuery:Je,supportsQueryAttachments:Ve,supportsEditing:We&&Y,supportsAdd:le&&Qe&&Y,supportsDelete:le&&Ke&&Y,supportsUpdate:Ge&&Y}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){return(0,m.pC)(this.associatedLayer)?this.associatedLayer.infoFor3D:null}get defaultPopupTemplate(){return(0,m.pC)(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,s){return!e&&s.fields&&s.fields.some(r=>("esriFieldTypeOID"===r.type&&(e=r.name),!!e)),e||void 0}readGlobalIdField(e,s){return!e&&s.fields&&s.fields.some(r=>("esriFieldTypeGlobalID"===r.type&&(e=r.name),!!e)),e||void 0}get displayField(){return(0,m.pC)(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,s){const r=s.store.profile;return null!=r&&fe[r]?fe[r]:(P.Z.getLogger(this.declaredClass).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const s=(0,m.pC)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(H.r9).then(()=>this._fetchService(s)).then(()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,s),this._setAssociatedFeatureLayer(s),(0,m.pC)(this.filter)?this.filter.loadGeometries(this.spatialReference):null])).then(()=>this._validateElevationInfo()).then(()=>this._applyAssociatedLayerOverrides()).then(()=>this._populateFieldUsageInfo()).then(()=>(0,Fe.y)(this,{origin:"service"},s)).then(()=>(0,te.YN)(this.renderer,this.fieldsIndex)).then(()=>this.finishLoadEditablePortalLayer(e));return this.addResolvingPromise(r),Promise.resolve(this)}beforeSave(){var e=this;return(0,n.Z)(function*(){(0,m.pC)(e.filter)&&(yield e.load())})()}createQuery(){const e=new Te.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,s){return this._getAssociatedLayerForQuery().then(r=>r.queryExtent(e||this.createQuery(),s))}queryFeatureCount(e,s){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatureCount(e||this.createQuery(),s))}queryFeatures(e,s){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatures(e||this.createQuery(),s)).then(r=>{if(r?.features)for(const d of r.features)d.layer=this,d.sourceLayer=this;return r})}queryCachedAttributes(e,s){var r=this;return(0,n.Z)(function*(){const d=(0,te.Lk)(r.fieldsIndex,yield(0,ce.e)(r,(0,ce.V)(r)));return(0,De.xe)(r.parsedUrl.path,r.attributeStorageInfo??[],e,s,d)})()}queryCachedFeature(e,s){var r=this;return(0,n.Z)(function*(){const d=yield r.queryCachedAttributes(e,[s]);if(!d||0===d.length)throw new I.Z("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const g=new p.Z;return g.attributes=d[0],g.layer=r,g.sourceLayer=r,g})()}queryObjectIds(e,s){return this._getAssociatedLayerForQuery().then(r=>r.queryObjectIds(e||this.createQuery(),s))}queryAttachments(e,s){return this._getAssociatedLayerForQuery().then(r=>r.queryAttachments(e,s))}getFieldUsageInfo(e){const s={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||s:(P.Z.getLogger(this.declaredClass).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),s)}createPopupTemplate(e){return(0,Ue.eZ)(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return(0,m.pC)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}_loadAssociatedLayerForQuery(){var e=this;return(0,n.Z)(function*(){if(yield e.load(),(0,m.Wi)(e.associatedLayer))throw new I.Z("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:e});try{yield e.associatedLayer.load()}catch(s){throw new I.Z("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:e,error:s})}return e.associatedLayer})()}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some(s=>s.name===e)}queryCachedStatistics(e,s){var r=this;return(0,n.Z)(function*(){if(yield r.load(s),!r.statisticsInfo)throw new I.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const d=r.fieldsIndex.get(e);if(!d)throw new I.Z("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const g of r.statisticsInfo)if(g.name===d.name){const j=(0,c.v_)(r.parsedUrl.path,g.href);return(0,D.default)(j,{query:{f:"json",token:r.apiKey},responseType:"json",signal:s?s.signal:null}).then(Q=>Q.data)}throw new I.Z("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")})()}saveAs(e,s){var r=this;return(0,n.Z)(function*(){return r._debouncedSaveOperations(ee.xp.SAVE_AS,{...s,getTypeKeywords:()=>r._getTypeKeywords(),portalItemLayerType:"scene"},e)})()}save(){var e=this;return(0,n.Z)(function*(){const s={getTypeKeywords:()=>e._getTypeKeywords(),portalItemLayerType:"scene"};return e._debouncedSaveOperations(ee.xp.SAVE,s)})()}applyEdits(e,s){var r=this;return(0,n.Z)(function*(){const d=yield Promise.all([t.e(8592),t.e(5362)]).then(t.bind(t,95362));if(yield r.load(),(0,m.Wi)(r.associatedLayer))throw new I.Z(`${r.type}-layer:not-editable`,"Service is not editable");return yield r.associatedLayer.load(),d.applyEdits(r,r.associatedLayer.source,e,s)})()}on(e,s){return super.on(e,s)}validateLayer(e){if(e.layerType&&!Me.includes(e.layerType))throw new I.Z("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new I.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new I.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});!function s(r,d){let g=!1,j=!1;if(null==r)g=!0,j=!0;else{const Q=d&&d.isGeographic;switch(r){case"east-north-up":case"earth-centered":g=!0,j=Q;break;case"vertex-reference-frame":g=!0,j=!Q;break;default:g=!1}}if(!g)throw new I.Z("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!j)throw new I.Z("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new I.Z("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const s=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some(g=>g.name===e.name)),r=!!((0,m.pC)(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some(g=>g&&e.name===g.name));this._fieldUsageInfo[e.name]={supportsLabelingInfo:s,supportsRenderer:s,supportsPopupTemplate:s||r,supportsLayerQuery:r}}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){if((0,m.Wi)(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const s of this.associatedLayer.fields){const r=this.getField(s.name);r?(!r.domain&&s.domain&&(r.domain=s.domain.clone()),r.editable=s.editable,r.nullable=s.nullable,r.length=s.length):(e||(e=this.fields?this.fields.slice():[]),e.push(s.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if((0,m.Wi)(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],s=(0,O.vw)(this);for(let r=0;r<e.length;r++){const d=e[r],g=this.originIdOf(d),j=this.associatedLayer.originIdOf(d);g<j&&(j===w.s3.SERVICE||j===w.s3.PORTAL_ITEM)&&s.setAtOrigin(d,this.associatedLayer[d],j)}}_setAssociatedFeatureLayer(e){var s=this;return(0,n.Z)(function*(){if(!["mesh-pyramids","points"].includes(s.profile))return;const r=new Ie.W(s.parsedUrl,s.portalItem,s.apiKey,e);try{s.associatedLayer=yield r.fetch()}catch(d){(0,H.D_)(d)||s._logWarningOnPopupEnabled()}})()}_logWarningOnPopupEnabled(){var e=this;return(0,n.Z)(function*(){yield(0,l.N1)(()=>e.popupEnabled&&null!=e.popupTemplate);const s=`this SceneLayer: ${e.title}`;null==e.attributeStorageInfo?P.Z.getLogger(e.declaredClass).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${s}`):P.Z.getLogger(e.declaredClass).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${s}`)})()}_validateElevationInfo(){const e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"relative-to-scene"===e.mode&&P.Z.getLogger(this.declaredClass).warn(".elevationInfo=","Mesh scene layers don't support relative-to-scene elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&P.Z.getLogger(this.declaredClass).warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};(0,o._)([(0,i.Cb)({types:{key:"type",base:ge.B,typeMap:{selection:ve.Z}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],a.prototype,"featureReduction",void 0),(0,o._)([(0,i.Cb)({type:[W],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],a.prototype,"rangeInfos",void 0),(0,o._)([(0,i.Cb)({json:{read:!1}})],a.prototype,"associatedLayer",void 0),(0,o._)([(0,i.Cb)({type:["show","hide"]})],a.prototype,"listMode",void 0),(0,o._)([(0,i.Cb)({type:["ArcGISSceneServiceLayer"]})],a.prototype,"operationalLayerType",void 0),(0,o._)([(0,i.Cb)({json:{read:!1},readOnly:!0})],a.prototype,"type",void 0),(0,o._)([(0,i.Cb)({...he.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"fields",void 0),(0,o._)([(0,i.Cb)()],a.prototype,"types",null),(0,o._)([(0,i.Cb)()],a.prototype,"typeIdField",null),(0,o._)([(0,i.Cb)()],a.prototype,"formTemplate",null),(0,o._)([(0,i.Cb)({readOnly:!0})],a.prototype,"fieldsIndex",null),(0,o._)([(0,i.Cb)({type:Ee.Z,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],a.prototype,"floorInfo",void 0),(0,o._)([(0,i.Cb)(he.outFields)],a.prototype,"outFields",void 0),(0,o._)([(0,i.Cb)({type:z.U4,readOnly:!0,json:{read:!1}})],a.prototype,"nodePages",void 0),(0,o._)([(0,C.r)("service","nodePages",["nodePages","pointNodePages"])],a.prototype,"readNodePages",null),(0,o._)([(0,i.Cb)({type:[z.QI],readOnly:!0})],a.prototype,"materialDefinitions",void 0),(0,o._)([(0,i.Cb)({type:[z.Yh],readOnly:!0})],a.prototype,"textureSetDefinitions",void 0),(0,o._)([(0,i.Cb)({type:[z.H3],readOnly:!0})],a.prototype,"geometryDefinitions",void 0),(0,o._)([(0,i.Cb)({readOnly:!0})],a.prototype,"serviceUpdateTimeStamp",void 0),(0,o._)([(0,i.Cb)({readOnly:!0})],a.prototype,"attributeStorageInfo",void 0),(0,o._)([(0,i.Cb)({readOnly:!0})],a.prototype,"statisticsInfo",void 0),(0,o._)([(0,i.Cb)({type:f.Z.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],a.prototype,"excludeObjectIds",void 0),(0,o._)([(0,i.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],a.prototype,"definitionExpression",void 0),(0,o._)([(0,i.Cb)({type:je,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],a.prototype,"filter",void 0),(0,o._)([(0,i.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),(0,o._)([(0,i.Cb)(V.PV)],a.prototype,"elevationInfo",null),(0,o._)([(0,i.Cb)({type:String})],a.prototype,"geometryType",null),(0,o._)([(0,i.Cb)(V.iR)],a.prototype,"labelsVisible",void 0),(0,o._)([(0,i.Cb)({type:[Se.Z],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:de.r},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:de.r},write:!0}})],a.prototype,"labelingInfo",void 0),(0,o._)([(0,i.Cb)(V.rn)],a.prototype,"legendEnabled",void 0),(0,o._)([(0,i.Cb)({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,s){if("number"==typeof e&&e>=0&&e<=1)return e;const r=s.layerDefinition?.drawingInfo?.transparency;return void 0!==r?(0,Ae.b)(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],a.prototype,"opacity",void 0),(0,o._)([(0,i.Cb)({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"priority",void 0),(0,o._)([(0,i.Cb)({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"semantic",void 0),(0,o._)([(0,i.Cb)({types:E.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],a.prototype,"renderer",null),(0,o._)([(0,i.Cb)({json:{read:!1}})],a.prototype,"cachedDrawingInfo",void 0),(0,o._)([(0,C.r)("service","cachedDrawingInfo")],a.prototype,"readCachedDrawingInfo",null),(0,o._)([(0,i.Cb)({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),(0,o._)([(0,i.Cb)({type:Boolean,json:{read:!1}})],a.prototype,"editingEnabled",null),(0,o._)([(0,i.Cb)({readOnly:!0,json:{write:!1,read:!1}})],a.prototype,"infoFor3D",null),(0,o._)([(0,i.Cb)(V.C_)],a.prototype,"popupEnabled",void 0),(0,o._)([(0,i.Cb)({type:B.Z,json:{name:"popupInfo",write:!0}})],a.prototype,"popupTemplate",void 0),(0,o._)([(0,i.Cb)({readOnly:!0,json:{read:!1}})],a.prototype,"defaultPopupTemplate",null),(0,o._)([(0,i.Cb)({type:String,json:{read:!1}})],a.prototype,"objectIdField",void 0),(0,o._)([(0,C.r)("service","objectIdField",["objectIdField","fields"])],a.prototype,"readObjectIdField",null),(0,o._)([(0,i.Cb)({type:String,json:{read:!1}})],a.prototype,"globalIdField",void 0),(0,o._)([(0,C.r)("service","globalIdField",["globalIdField","fields"])],a.prototype,"readGlobalIdField",null),(0,o._)([(0,i.Cb)({readOnly:!0,type:String,json:{read:!1}})],a.prototype,"displayField",null),(0,o._)([(0,i.Cb)({type:String,json:{read:!1}})],a.prototype,"profile",void 0),(0,o._)([(0,C.r)("service","profile",["store.profile"])],a.prototype,"readProfile",null),(0,o._)([(0,i.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],a.prototype,"normalReferenceFrame",void 0),(0,o._)([(0,i.Cb)(V.YI)],a.prototype,"screenSizePerspectiveEnabled",void 0),a=(0,o._)([(0,u.j)("esri.layers.SceneLayer")],a);const fe={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},Ne={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},we=a},35031:(J,U,t)=>{t.d(U,{H3:()=>I,QI:()=>S,U4:()=>b,Yh:()=>T});var n=t(17626),o=t(86810),p=t(77712),F=(t(90912),t(85931),t(55342)),h=t(76898);let b=class extends o.wq{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,n._)([(0,p.Cb)({type:Number})],b.prototype,"nodesPerPage",void 0),(0,n._)([(0,p.Cb)({type:Number})],b.prototype,"rootIndex",void 0),(0,n._)([(0,p.Cb)({type:String})],b.prototype,"lodSelectionMetricType",void 0),b=(0,n._)([(0,h.j)("esri.layer.support.I3SNodePageDefinition")],b);let y=class extends o.wq{constructor(){super(...arguments),this.factor=1}};(0,n._)([(0,p.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],y.prototype,"id",void 0),(0,n._)([(0,p.Cb)({type:Number})],y.prototype,"factor",void 0),y=(0,n._)([(0,h.j)("esri.layer.support.I3SMaterialTexture")],y);let x=class extends o.wq{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,n._)([(0,p.Cb)({type:[Number]})],x.prototype,"baseColorFactor",void 0),(0,n._)([(0,p.Cb)({type:y})],x.prototype,"baseColorTexture",void 0),(0,n._)([(0,p.Cb)({type:y})],x.prototype,"metallicRoughnessTexture",void 0),(0,n._)([(0,p.Cb)({type:Number})],x.prototype,"metallicFactor",void 0),(0,n._)([(0,p.Cb)({type:Number})],x.prototype,"roughnessFactor",void 0),x=(0,n._)([(0,h.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],x);let S=class extends o.wq{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,n._)([(0,F.J)({opaque:"opaque",mask:"mask",blend:"blend"})],S.prototype,"alphaMode",void 0),(0,n._)([(0,p.Cb)({type:Number})],S.prototype,"alphaCutoff",void 0),(0,n._)([(0,p.Cb)({type:Boolean})],S.prototype,"doubleSided",void 0),(0,n._)([(0,F.J)({none:"none",back:"back",front:"front"})],S.prototype,"cullFace",void 0),(0,n._)([(0,p.Cb)({type:y})],S.prototype,"normalTexture",void 0),(0,n._)([(0,p.Cb)({type:y})],S.prototype,"occlusionTexture",void 0),(0,n._)([(0,p.Cb)({type:y})],S.prototype,"emissiveTexture",void 0),(0,n._)([(0,p.Cb)({type:[Number]})],S.prototype,"emissiveFactor",void 0),(0,n._)([(0,p.Cb)({type:x})],S.prototype,"pbrMetallicRoughness",void 0),S=(0,n._)([(0,h.j)("esri.layer.support.I3SMaterialDefinition")],S);let M=class extends o.wq{};(0,n._)([(0,p.Cb)({type:String,json:{read:{source:["name","index"],reader:(P,m)=>P??`${m.index}`}}})],M.prototype,"name",void 0),(0,n._)([(0,F.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],M.prototype,"format",void 0),M=(0,n._)([(0,h.j)("esri.layer.support.I3STextureFormat")],M);let T=class extends o.wq{constructor(){super(...arguments),this.atlas=!1}};(0,n._)([(0,p.Cb)({type:[M]})],T.prototype,"formats",void 0),(0,n._)([(0,p.Cb)({type:Boolean})],T.prototype,"atlas",void 0),T=(0,n._)([(0,h.j)("esri.layer.support.I3STextureSetDefinition")],T);let E=class extends o.wq{};(0,n._)([(0,F.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],E.prototype,"type",void 0),(0,n._)([(0,p.Cb)({type:Number})],E.prototype,"component",void 0),E=(0,n._)([(0,h.j)("esri.layer.support.I3SGeometryAttribute")],E);let D=class extends o.wq{};(0,n._)([(0,F.J)({draco:"draco"})],D.prototype,"encoding",void 0),(0,n._)([(0,p.Cb)({type:[String]})],D.prototype,"attributes",void 0),D=(0,n._)([(0,h.j)("esri.layer.support.I3SGeometryCompressedAttributes")],D);let f=class extends o.wq{constructor(){super(...arguments),this.offset=0}};(0,n._)([(0,p.Cb)({type:Number})],f.prototype,"offset",void 0),(0,n._)([(0,p.Cb)({type:E})],f.prototype,"position",void 0),(0,n._)([(0,p.Cb)({type:E})],f.prototype,"normal",void 0),(0,n._)([(0,p.Cb)({type:E})],f.prototype,"uv0",void 0),(0,n._)([(0,p.Cb)({type:E})],f.prototype,"color",void 0),(0,n._)([(0,p.Cb)({type:E})],f.prototype,"uvRegion",void 0),(0,n._)([(0,p.Cb)({type:E})],f.prototype,"featureId",void 0),(0,n._)([(0,p.Cb)({type:E})],f.prototype,"faceRange",void 0),(0,n._)([(0,p.Cb)({type:D})],f.prototype,"compressedAttributes",void 0),f=(0,n._)([(0,h.j)("esri.layer.support.I3SGeometryBuffer")],f);let I=class extends o.wq{};(0,n._)([(0,F.J)({triangle:"triangle"})],I.prototype,"topology",void 0),(0,n._)([(0,p.Cb)()],I.prototype,"geometryBuffers",void 0),I=(0,n._)([(0,h.j)("esri.layer.support.I3SGeometryDefinition")],I)},59787:(J,U,t)=>{t.d(U,{C:()=>n});const n={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}},61556:(J,U,t)=>{t.d(U,{B:()=>o});var n=t(21726);function o(y){return A[function p(y){return y instanceof Blob?y.type:function B(y){const x=(0,n.Ml)(y);return b[x]||F}(y.url)}(y)]||h}const A={},F="text/plain",h=A[F],b={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const y in b)A[b[y]]=y},10023:(J,U,t)=>{t.d(U,{V:()=>F,e:()=>B});var n=t(15861),o=t(62208),p=t(36630);function B(h){return A.apply(this,arguments)}function A(){return(A=(0,n.Z)(function*(h,b=h.popupTemplate){if((0,o.Wi)(b))return[];const y=yield b.getRequiredFields(h.fieldsIndex),{lastEditInfoEnabled:x}=b,{objectIdField:S,typeIdField:M,globalIdField:T,relationships:E}=h;if(y.includes("*"))return["*"];const D=x?yield(0,p.CH)(h):[],f=(0,p.Q0)(h.fieldsIndex,[...y,...D]);return M&&f.push(M),f&&S&&h.fieldsIndex?.has(S)&&!f.includes(S)&&f.push(S),f&&T&&h.fieldsIndex?.has(T)&&!f.includes(T)&&f.push(T),E&&E.forEach(I=>{const{keyField:P}=I;f&&P&&h.fieldsIndex?.has(P)&&!f.includes(P)&&f.push(P)}),f})).apply(this,arguments)}function F(h,b){return h.popupTemplate?h.popupTemplate:(0,o.pC)(b)&&b.defaultPopupTemplateEnabled&&(0,o.pC)(h.defaultPopupTemplate)?h.defaultPopupTemplate:null}}}]);