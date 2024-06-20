"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[9859],{19859:(le,D,o)=>{o.r(D),o.d(D,{default:()=>ee});var B=o(15861),l=o(17626),N=(o(29132),o(88879)),h=(o(20383),o(46160)),U=o(26584),M=o(58817),W=o(99959),A=o(94113),P=o(14889),a=o(77712),f=(o(8314),o(63290),o(68653)),L=o(76898),K=o(99433),c=o(55915),_=o(65401),J=o(93555),x=o(37053),Z=o(80415),G=o(51470),w=o(44917),F=o(1476),z=o(552),H=o(49286),$=o(6647),X=o(99555),T=o(36255),Q=o(88493),V=o(52068),v=o(57213),Y=o(35540),g=o(65234),k=o(2004);function S(t){return"markup"===t.featureCollectionType||t.layers.some(e=>null!=e.layerDefinition.visibilityField||!j(e))}function j({layerDefinition:t,featureSet:e}){const r=t.geometryType??e.geometryType;return b.find(i=>r===i.geometryTypeJSON&&t.drawingInfo?.renderer?.symbol?.type===i.identifyingSymbol.type)}function I(){return new k.Z({xmin:-180,ymin:-90,xmax:180,ymax:90})}const R=new T.Z({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),q=new T.Z({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0,length:255});let d=class extends G.Z{constructor(t){super(t),this.visibilityMode="inherited"}initialize(){for(const t of this.graphics)t.sourceLayer=this.layer;this.graphics.on("after-add",t=>{t.item.sourceLayer=this.layer}),this.graphics.on("after-remove",t=>{t.item.sourceLayer=null})}get fullExtent(){const t=this.layer?.spatialReference,e=this.fullBounds;return t?null==e?(0,c.projectOrLoad)(I(),t).geometry:(0,_.HH)(e,t):null}get fullBounds(){const t=this.layer?.spatialReference;if(!t)return null;const e=(0,_.cS)();return this.graphics.forEach(r=>{const i=null!=r.geometry?(0,c.projectOrLoad)(r.geometry,t).geometry:null;null!=i&&(0,_.jn)(e,"point"===i.type?i:i.extent,e)}),(0,_.fS)(e,_.G_)?null:e}get sublayers(){return this.graphics}};(0,l._)([(0,a.Cb)({readOnly:!0})],d.prototype,"fullExtent",null),(0,l._)([(0,a.Cb)({readOnly:!0})],d.prototype,"fullBounds",null),(0,l._)([(0,a.Cb)({readOnly:!0})],d.prototype,"sublayers",null),(0,l._)([(0,a.Cb)()],d.prototype,"layer",void 0),(0,l._)([(0,a.Cb)()],d.prototype,"layerId",void 0),(0,l._)([(0,a.Cb)({readOnly:!0})],d.prototype,"visibilityMode",void 0),d=(0,l._)([(0,L.j)("esri.layers.MapNotesLayer.MapNotesSublayer")],d);const b=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:(new Q.Z).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:(new V.Z).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:(new v.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:(new v.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:(new Y.Z).toJSON()}];let n=class extends((0,z.h)((0,X.M)((0,H.q)((0,$.I)((0,W.R)(w.Z)))))){constructor(t){super(t),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=g.Z.WGS84,this.sublayers=new h.Z(b.map(e=>new d({id:e.id,layerId:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(t,e,r){return{operations:{supportsMapNotesEditing:!S(e)&&"portal-item"!==r?.origin}}}readFeatureCollections(t,e,r){if(!S(e))return null;const i=e.layers.map(y=>{const s=new Z.default;return s.read(y,r),s});return new h.Z({items:i})}readLegacyfeatureCollectionJSON(t,e){return S(e)?(0,M.d9)(e.featureCollection):null}get fullExtent(){const t=this.spatialReference,e=(0,_.cS)();return null!=this.sublayers?this.sublayers.forEach(({fullBounds:r})=>null!=r?(0,_.jn)(e,r,e):e,e):this.featureCollectionJSON?.layers.some(r=>r.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(r=>{const i=(0,c.projectOrLoad)(r.layerDefinition.extent,t).geometry;null!=i&&(0,_.jn)(e,i,e)}),(0,_.fS)(e,_.G_)?(0,c.projectOrLoad)(I(),t).geometry:(0,_.HH)(e,t)}readMinScale(t,e){for(const r of e.layers)if(null!=r.layerDefinition.minScale)return r.layerDefinition.minScale;return 0}readMaxScale(t,e){for(const r of e.layers)if(null!=r.layerDefinition.maxScale)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(t,e){return e.layers.length?g.Z.fromJSON(e.layers[0].layerDefinition.spatialReference):g.Z.WGS84}readSublayers(t,e,r){if(S(e))return null;const i=[];let y=e.layers.reduce((s,p)=>Math.max(s,p.layerDefinition.id??-1),-1)+1;for(const s of e.layers){const{layerDefinition:p,featureSet:u}=s,O=p.id??y++,m=j(s);if(null!=m){const E=new d({id:m.id,title:p.name,layerId:O,layer:this,graphics:u.features.map(({geometry:C,symbol:te,attributes:re,popupInfo:oe})=>N.Z.fromJSON({attributes:re,geometry:C,symbol:te,popupTemplate:oe}))});i.push(E)}}return new h.Z(i)}writeSublayers(t,e,r,i){const{minScale:y,maxScale:s}=this;if(null==t)return;const p=t.some(m=>m.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(p&&i?.messages?.push(new U.Z("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")));const u=[];let O=this.spatialReference.toJSON();e:for(const m of t)for(const E of m.graphics)if(null!=E.geometry){O=E.geometry.spatialReference.toJSON();break e}for(const m of b){const E=t.find(C=>m.id===C.id);this._writeMapNoteSublayer(u,E,m,y,s,O,i)}(0,A.RB)("featureCollection.layers",u,e)}get textLayer(){return this._findSublayer("textLayer")}load(t){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},t)),Promise.resolve(this)}read(t,e){"featureCollection"in t&&(t=(0,M.d9)(t),Object.assign(t,t.featureCollection)),super.read(t,e)}beforeSave(){var t=this;return(0,B.Z)(function*(){if(null==t.sublayers)return;let e=null;const r=[];for(const y of t.sublayers)for(const s of y.graphics)if(null!=s.geometry){const p=s.geometry;e?(0,x.fS)(p.spatialReference,e)||((0,c.canProjectWithoutEngine)(p.spatialReference,e)||(0,c.isLoaded)()||(yield(0,c.load)()),s.geometry=(0,c.project)(p,e)):e=p.spatialReference,r.push(s)}const i=yield(0,J.aX)(r.map(y=>y.geometry));r.forEach((y,s)=>y.geometry=i[s])})()}_findSublayer(t){return null==this.sublayers?null:this.sublayers?.find(e=>e.id===t)??null}_writeMapNoteSublayer(t,e,r,i,y,s,p){const u=[];if(null!=e){for(const O of e.graphics)this._writeMapNote(u,O,r.geometryType,p);this._normalizeObjectIds(u,R),t.push({layerDefinition:{name:e.title,drawingInfo:{renderer:{type:"simple",symbol:(0,M.d9)(r.identifyingSymbol)}},id:e.layerId,geometryType:r.geometryTypeJSON,minScale:i,maxScale:y,objectIdField:"OBJECTID",fields:[R.toJSON(),q.toJSON()],spatialReference:s},featureSet:{features:u,geometryType:r.geometryTypeJSON}})}}_writeMapNote(t,e,r,i){if(null==e)return;const{geometry:y,symbol:s,popupTemplate:p}=e;if(null==y)return;if(y.type!==r)return void i?.messages?.push(new P.Z("map-notes-layer:invalid-geometry-type",`Geometry "${y.type}" cannot be saved in "${r}" layer`,{graphic:e}));if(null==s)return void i?.messages?.push(new P.Z("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:e}));const u={attributes:{...e.attributes},geometry:y.toJSON(),symbol:s.toJSON()};null!=p&&(u.popupInfo=p.toJSON()),t.push(u)}_normalizeObjectIds(t,e){const r=e.name;let i=(0,F.S)(r,t)+1;const y=new Set;for(const s of t){s.attributes||(s.attributes={});const{attributes:p}=s;(null==p[r]||y.has(p[r]))&&(p[r]=i++),y.add(p[r])}}};(0,l._)([(0,a.Cb)({readOnly:!0})],n.prototype,"capabilities",void 0),(0,l._)([(0,f.r)(["portal-item","web-map"],"capabilities",["layers"])],n.prototype,"readCapabilities",null),(0,l._)([(0,a.Cb)({readOnly:!0})],n.prototype,"featureCollections",void 0),(0,l._)([(0,f.r)(["web-map","portal-item"],"featureCollections",["layers"])],n.prototype,"readFeatureCollections",null),(0,l._)([(0,a.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],n.prototype,"featureCollectionJSON",void 0),(0,l._)([(0,f.r)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],n.prototype,"readLegacyfeatureCollectionJSON",null),(0,l._)([(0,a.Cb)({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],n.prototype,"featureCollectionType",void 0),(0,l._)([(0,a.Cb)({readOnly:!0})],n.prototype,"fullExtent",null),(0,l._)([(0,a.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],n.prototype,"legendEnabled",void 0),(0,l._)([(0,a.Cb)({type:["show","hide","hide-children"]})],n.prototype,"listMode",void 0),(0,l._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],n.prototype,"minScale",void 0),(0,l._)([(0,f.r)(["web-map","portal-item"],"minScale",["layers"])],n.prototype,"readMinScale",null),(0,l._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],n.prototype,"maxScale",void 0),(0,l._)([(0,f.r)(["web-map","portal-item"],"maxScale",["layers"])],n.prototype,"readMaxScale",null),(0,l._)([(0,a.Cb)({readOnly:!0})],n.prototype,"multipointLayer",null),(0,l._)([(0,a.Cb)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],n.prototype,"operationalLayerType",void 0),(0,l._)([(0,a.Cb)({readOnly:!0})],n.prototype,"pointLayer",null),(0,l._)([(0,a.Cb)({readOnly:!0})],n.prototype,"polygonLayer",null),(0,l._)([(0,a.Cb)({readOnly:!0})],n.prototype,"polylineLayer",null),(0,l._)([(0,a.Cb)({type:g.Z})],n.prototype,"spatialReference",void 0),(0,l._)([(0,f.r)(["web-map","portal-item"],"spatialReference",["layers"])],n.prototype,"readSpatialReference",null),(0,l._)([(0,a.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],n.prototype,"sublayers",void 0),(0,l._)([(0,f.r)("web-map","sublayers",["layers"])],n.prototype,"readSublayers",null),(0,l._)([(0,K.c)("web-map","sublayers")],n.prototype,"writeSublayers",null),(0,l._)([(0,a.Cb)({readOnly:!0})],n.prototype,"textLayer",null),(0,l._)([(0,a.Cb)()],n.prototype,"title",void 0),(0,l._)([(0,a.Cb)({readOnly:!0,json:{read:!1}})],n.prototype,"type",void 0),n=(0,l._)([(0,L.j)("esri.layers.MapNotesLayer")],n);const ee=n}}]);