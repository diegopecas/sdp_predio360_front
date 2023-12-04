"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[5810],{75810:(f,h,e)=>{e.r(h),e.d(h,{default:()=>S});var _=e(15861),a=e(17626),y=e(84792),v=e(26584),d=e(62208),E=e(99959),p=e(10699),u=e(21726),l=e(77712),D=(e(90912),e(85931),e(68653)),O=e(76898),P=e(79334),M=e(44917),T=e(5143),C=e(65088),m=e(49286),I=e(6647),g=e(13812),U=e(91314),L=e(36596);let i=class extends((0,T.Z)((0,C.Y)((0,m.q)((0,I.I)((0,E.R)(M.Z)))))){constructor(...r){super(...r),this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=(0,L.w)()}normalizeCtorArgs(r,t){return"string"==typeof r?{url:r,...t}:r}destroy(){this._lercDecoder=(0,d.RY)(this._lercDecoder)}readVersion(r,t){let s=t.currentVersion;return s||(s=9.3),s}load(r){const t=(0,d.pC)(r)?r.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:s=>{for(let o=0;o<s.typeKeywords.length;o++)if("elevation 3d layer"===s.typeKeywords[o].toLowerCase())return!0;throw new v.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},r).catch(p.r9).then(()=>this._fetchImageService(t))),Promise.resolve(this)}fetchTile(r,t,s,o){const n=(0,d.pC)((o=o||{signal:null}).signal)?o.signal:o.signal=(new AbortController).signal,j={responseType:"array-buffer",signal:n},A={noDataValue:o.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(r,t,s,o)).then(()=>(0,y.default)(this.getTileUrl(r,t,s),j)).then(c=>this._lercDecoder.decode(c.data,A,n)).then(c=>new U.v(c))}getTileUrl(r,t,s){const n=(0,u.B7)({...this.parsedUrl.query,blankTile:!(!this.tilemapCache&&this.supportsBlankTile)&&null});return`${this.parsedUrl.path}/tile/${r}/${t}/${s}${n?"?"+n:""}`}queryElevation(r,t){var s=this;return(0,_.Z)(function*(){const{ElevationQuery:o}=yield e.e(2493).then(e.bind(e,42493));return(0,p.k_)(t),(new o).query(s,r,t)})()}createElevationSampler(r,t){var s=this;return(0,_.Z)(function*(){const{ElevationQuery:o}=yield e.e(2493).then(e.bind(e,42493));return(0,p.k_)(t),(new o).createSampler(s,r,t)})()}_fetchTileAvailability(r,t,s,o){return this.tilemapCache?this.tilemapCache.fetchAvailability(r,t,s,o):Promise.resolve("unknown")}_fetchImageService(r){var t=this;return(0,_.Z)(function*(){if(t.sourceJSON)return t.sourceJSON;const s={query:{f:"json",...t.parsedUrl.query},responseType:"json",signal:r},o=yield(0,y.default)(t.parsedUrl.path,s);o.ssl&&(t.url=t.url?.replace(/^http:/i,"https:")),t.sourceJSON=o.data,t.read(o.data,{origin:"service",url:t.parsedUrl})})()}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};(0,a._)([(0,l.Cb)({json:{read:{source:"copyrightText"}}})],i.prototype,"copyright",void 0),(0,a._)([(0,l.Cb)({readOnly:!0,type:P.Z})],i.prototype,"heightModelInfo",void 0),(0,a._)([(0,l.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),(0,a._)([(0,l.Cb)({type:["show","hide"]})],i.prototype,"listMode",void 0),(0,a._)([(0,l.Cb)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],i.prototype,"minScale",void 0),(0,a._)([(0,l.Cb)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],i.prototype,"maxScale",void 0),(0,a._)([(0,l.Cb)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],i.prototype,"opacity",void 0),(0,a._)([(0,l.Cb)({type:["ArcGISTiledElevationServiceLayer"]})],i.prototype,"operationalLayerType",void 0),(0,a._)([(0,l.Cb)()],i.prototype,"sourceJSON",void 0),(0,a._)([(0,l.Cb)({json:{read:!1},value:"elevation",readOnly:!0})],i.prototype,"type",void 0),(0,a._)([(0,l.Cb)(g.HQ)],i.prototype,"url",void 0),(0,a._)([(0,l.Cb)()],i.prototype,"version",void 0),(0,a._)([(0,D.r)("version",["currentVersion"])],i.prototype,"readVersion",null),i=(0,a._)([(0,O.j)("esri.layers.ElevationLayer")],i),i.prototype.fetchTile.__isDefault__=!0;const S=i}}]);