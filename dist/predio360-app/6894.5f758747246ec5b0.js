"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[6894,2585],{46894:(Le,V,u)=>{u.r(V),u.d(V,{default:()=>st});var G,A=u(15861),a=u(17626),z=u(59318),M=u(88879),D=u(73281),E=u(84792),T=u(46160),Ue=u(46882),Pe=u(2076),Ae=u(58817),g=u(62208),ie=u(99959),Me=u(10699),w=u(32917),$=u(21726),p=u(77712),se=u(90912),I=u(68653),ae=u(76898),K=u(99433),Te=u(36054),O=u(2004),N=u(65234),oe=u(83137),je=u(37053),Ze=u(44917),We=u(552),Be=u(49286),Ve=u(6647),De=u(30346),$e=u(99555),Ge=u(97941),Y=u(22825),Xe=u(38305),le=u(13812),ue=u(51920),He=u(12585),Je=u(61996),Qe=u(66656);u(85931);let ze=0,h=G=class extends((0,Je.IG)(ie.w)){constructor(e){super(e),this.dimensions=null,this.fullExtents=null,this.legendUrl=null,this.legendEnabled=!0,this.layer=null,this.maxScale=0,this.minScale=0,this.parent=null,this.popupEnabled=!1,this.queryable=!1,this.sublayers=null,this.spatialReferences=null,this.addHandles([(0,w.on)(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},w.Z_),(0,w.on)(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},w.Z_),(0,w.YP)(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=this,n.layer=this.layer},w.Z_)])}get description(){return this._get("description")}set description(e){this._set("description",e)}get fullExtent(){return this._get("fullExtent")}set fullExtent(e){this._set("fullExtent",e)}readExtent(e,t){return(e=t.extent)?O.Z.fromJSON(e):null}get id(){return this._get("id")??ze++}set id(e){this._set("id",e)}readLegendUrl(e,t){return t?.legendUrl??t?.legendURL??null}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get name(){return this._get("name")}set name(e){this._set("name",e)}castSublayers(e){return(0,se.se)(T.Z.ofType(G),e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get visible(){return this._get("visible")}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){const e=new G;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents?.map(t=>t.clone())??null),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map(t=>t.clone())),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences?.map(t=>t)),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};(0,a._)([(0,p.Cb)()],h.prototype,"description",null),(0,a._)([(0,p.Cb)({readOnly:!0})],h.prototype,"dimensions",void 0),(0,a._)([(0,p.Cb)({value:null})],h.prototype,"fullExtent",null),(0,a._)([(0,I.r)("fullExtent",["extent"])],h.prototype,"readExtent",null),(0,a._)([(0,p.Cb)()],h.prototype,"fullExtents",void 0),(0,a._)([(0,p.Cb)({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],h.prototype,"id",null),(0,a._)([(0,p.Cb)({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],h.prototype,"legendUrl",void 0),(0,a._)([(0,I.r)(["web-document"],"legendUrl")],h.prototype,"readLegendUrl",null),(0,a._)([(0,p.Cb)({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],h.prototype,"legendEnabled",void 0),(0,a._)([(0,p.Cb)()],h.prototype,"layer",void 0),(0,a._)([(0,p.Cb)()],h.prototype,"maxScale",void 0),(0,a._)([(0,p.Cb)()],h.prototype,"minScale",void 0),(0,a._)([(0,p.Cb)({readOnly:!0})],h.prototype,"effectiveScaleRange",null),(0,a._)([(0,p.Cb)({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],h.prototype,"name",null),(0,a._)([(0,p.Cb)()],h.prototype,"parent",void 0),(0,a._)([(0,p.Cb)({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],h.prototype,"popupEnabled",void 0),(0,a._)([(0,p.Cb)({type:Boolean,json:{write:{ignoreOrigin:!0}}})],h.prototype,"queryable",void 0),(0,a._)([(0,p.Cb)()],h.prototype,"sublayers",void 0),(0,a._)([(0,Qe.p)("sublayers")],h.prototype,"castSublayers",null),(0,a._)([(0,p.Cb)({type:[Number],json:{read:{source:"spatialReferences"}}})],h.prototype,"spatialReferences",void 0),(0,a._)([(0,p.Cb)({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],h.prototype,"title",null),(0,a._)([(0,p.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],h.prototype,"visible",null),h=G=(0,a._)([(0,ae.j)("esri.layers.support.WMSSublayer")],h);const q=h;var Ke=u(26584);const X={84:4326,83:4269,27:4267};function Ye(e){if(!e)return null;const t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));const r=e.documentElement;if("ServiceExceptionReport"===r.nodeName){const C=Array.prototype.slice.call(r.childNodes).map(B=>B.textContent).join("\r\n");throw new Ke.Z("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",C)}const n=v("Capability",r),i=v("Service",r),l=n&&v("Request",n);if(!n||!i||!l)return null;const s=v("Layer",n);if(!s)return null;const d="WMS_Capabilities"===r.nodeName||"WMT_MS_Capabilities"===r.nodeName?r.getAttribute("version"):"1.3.0",o=S("Title",i,"")||S("Name",i,""),m=S("AccessConstraints",i,""),y=/^none$/i.test(m)?"":m,f=S("Abstract",i,""),x=parseInt(S("MaxWidth",i,"5000"),10),F=parseInt(S("MaxHeight",i,"5000"),10),R=ce(l,"GetMap"),W=me(l,"GetMap"),b=Z(s,d,t);if(!b)return null;let Ee,ee=0;const at=Array.prototype.slice.call(n.childNodes),ot=b.sublayers??[],te=C=>{null!=C&&ot.push(C)};at.forEach(C=>{"Layer"===C.nodeName&&(0===ee?Ee=C:(1===ee&&b.name&&(b.name="",te(Z(Ee,d,t))),te(Z(C,d,t))),ee++)});let P=b.sublayers,re=b.extent;const lt=b.fullExtents??[];if(P||(P=[]),0===P.length&&P.push(b),!re){const C=new O.Z(P[0].extent);b.extent=C.toJSON(),re=b.extent}const ut=b.spatialReferences.length>0?b.spatialReferences:pe(b),Ie=me(l,"GetFeatureInfo"),pt=Ie?ce(l,"GetFeatureInfo"):null,Ne=de(P),dt=b.minScale||0,mt=b.maxScale||0,Fe=b.dimensions??[],ct=Ne.reduce((C,B)=>C.concat(B.dimensions??[]),[]),Re=Fe.concat(ct).filter(k);let Oe=null;if(Re.length){const C=Re.map(B=>{const{extent:ne}=B;return function _e(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}(ne)?ne.map(Q=>Q.getTime()):ne?.map(Q=>[Q.min.getTime(),Q.max.getTime()])}).flat(2).filter(g.pC);Oe={startTimeField:null,endTimeField:null,trackIdField:void 0,timeExtent:[Math.min(...C),Math.max(...C)]}}return{copyright:y,description:f,dimensions:Fe,extent:re,fullExtents:lt,featureInfoFormats:pt,featureInfoUrl:Ie,mapUrl:W,maxWidth:x,maxHeight:F,maxScale:mt,minScale:dt,layers:Ne,spatialReferences:ut,supportedImageFormatTypes:R,timeInfo:Oe,title:o,version:d}}function pe(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const r=pe(t);if(r.length>0)return r}return[]}function de(e){let t=[];for(const r of e)t.push(r),r.sublayers?.length&&(t=t.concat(de(r.sublayers)),delete r.sublayers);return t}function H(e,t,r){return t.getAttribute(e)??r}function v(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(ye(n)&&n.nodeName===e)return n}return null}function J(e,t){if(null==t)return[];const r=[];for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n];ye(i)&&i.nodeName===e&&r.push(i)}return r}function S(e,t,r){return v(e,t)?.textContent??r}function j(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),i=parseFloat(e.getAttribute("miny")),l=parseFloat(e.getAttribute("maxx")),s=parseFloat(e.getAttribute("maxy"));let d,o,m,y;r?(d=isNaN(i)?-Number.MAX_VALUE:i,o=isNaN(n)?-Number.MAX_VALUE:n,m=isNaN(s)?Number.MAX_VALUE:s,y=isNaN(l)?Number.MAX_VALUE:l):(d=isNaN(n)?-Number.MAX_VALUE:n,o=isNaN(i)?-Number.MAX_VALUE:i,m=isNaN(l)?Number.MAX_VALUE:l,y=isNaN(s)?Number.MAX_VALUE:s);const f=new N.Z({wkid:t});return new O.Z({xmin:d,ymin:o,xmax:m,ymax:y,spatialReference:f})}function me(e,t){const r=v(t,e);if(r){const n=v("DCPType",r);if(n){const i=v("HTTP",n);if(i){const l=v("Get",i);if(l){let s=function ke(e,t,r,n){const i=v(e,r);return i?H(t,i,n):n}("OnlineResource","xlink:href",l,null);if(s)return s.indexOf("&")===s.length-1&&(s=s.substring(0,s.length-1)),function et(e,t){const r=[],n=(0,$.mN)(e);for(const i in n.query)n.query.hasOwnProperty(i)&&(t.includes(i.toLowerCase())||r.push(i+"="+n.query[i]));return n.path+(r.length?"?"+r.join("&"):"")}(s,["service","request"])}}}}return null}function ce(e,t){const r=J("Operation",e);if(!r.length)return J("Format",v(t,e)).map(({textContent:i})=>i).filter(g.pC);const n=[];for(const i of r)if(i.getAttribute("name")===t){const l=J("Format",i);for(const{textContent:s}of l)null!=s&&n.push(s)}return n}function fe(e,t,r){const n=v(t,e);if(!n)return r;const{textContent:i}=n;if(null==i||""===i)return r;const l=Number(i);return isNaN(l)?r:l}function Z(e,t,r){if(!e)return null;const n={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},i=v("LatLonBoundingBox",e),l=v("EX_GeographicBoundingBox",e);let s=null;i&&(s=j(i,4326)),l&&(s=new O.Z(0,0,0,0,new N.Z({wkid:4326})),s.xmin=parseFloat(S("westBoundLongitude",l,"0")),s.ymin=parseFloat(S("southBoundLatitude",l,"0")),s.xmax=parseFloat(S("eastBoundLongitude",l,"0")),s.ymax=parseFloat(S("northBoundLatitude",l,"0"))),i||l||(s=new O.Z(-180,-90,180,90,new N.Z({wkid:4326}))),n.minScale=fe(e,"MaxScaleDenominator",0),n.maxScale=fe(e,"MinScaleDenominator",0);const d=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(o=>{if("Name"===o.nodeName)n.name=o.textContent||"";else if("Title"===o.nodeName)n.title=o.textContent||"";else if("Abstract"===o.nodeName)n.description=o.textContent||"";else if("BoundingBox"===o.nodeName){const m=o.getAttribute(d);if(m&&0===m.indexOf("EPSG:")){const f=parseInt(m.substring(5),10);0===f||isNaN(f)||s||(s="1.3.0"===t?j(o,f,(0,Y.A)(f)):j(o,f))}const y=m&&m.indexOf(":");if(y&&y>-1){let f=parseInt(m.substring(y+1,m.length),10);0===f||isNaN(f)||(f=X[f]?X[f]:f);const x="1.3.0"===t?j(o,f,(0,Y.A)(f)):j(o,f);x&&n.fullExtents&&n.fullExtents.push(x)}}else if(o.nodeName===d)(o.textContent?.split(" ")??[]).forEach(m=>{const y=m.includes(":")?parseInt(m.split(":")[1],10):parseInt(m,10);if(0!==y&&!isNaN(y)){const f=X[y]?X[y]:y;n.spatialReferences.includes(f)||n.spatialReferences.push(f)}});else if("Style"!==o.nodeName||n.legendURL){if("Layer"===o.nodeName){const m=Z(o,t,r);m&&(m.parentLayerId=n.id,n.sublayers||(n.sublayers=[]),n.sublayers.push(m))}}else{const m=v("LegendURL",o);if(m){const y=v("OnlineResource",m);y&&(n.legendURL=y.getAttribute("xlink:href"))}}}),n.extent=s?.toJSON(),n.dimensions=J("Dimension",e).filter(o=>o.getAttribute("name")&&o.getAttribute("units")&&o.textContent).map(o=>{const m=o.getAttribute("name"),y=o.getAttribute("units"),f=o.textContent,x=o.getAttribute("unitSymbol")??void 0,F=o.getAttribute("default")??void 0,R="0"!==H("default",o,"0"),W="0"!==H("nearestValue",o,"0"),b="0"!==H("current",o,"0");return k({name:m,units:y})?{name:"time",units:"ISO8601",extent:ve(f),default:ve(F),multipleValues:R,nearestValue:W,current:b}:function he(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}({name:m,units:y})?{name:"elevation",units:y,extent:ge(f),unitSymbol:x,default:ge(F),multipleValues:R,nearestValue:W}:{name:m,units:y,extent:be(f),unitSymbol:x,default:be(F),multipleValues:R,nearestValue:W}}),n}function ye(e){return e.nodeType===Node.ELEMENT_NODE}function k(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function ge(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const i=n.split("/");return i.length<2?null:{min:parseFloat(i[0]),max:parseFloat(i[1]),resolution:i.length>=3&&"0"!==i[2]?parseFloat(i[2]):void 0}}).filter(g.pC):r.map(n=>parseFloat(n))}function be(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const i=n.split("/");return i.length<2?null:{min:i[0],max:i[1],resolution:i.length>=3&&"0"!==i[2]?i[2]:void 0}}).filter(g.pC):r}function ve(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const i=n.split("/");return i.length<2?null:{min:new Date(i[0]),max:new Date(i[1]),resolution:i.length>=3&&"0"!==i[2]?tt(i[2]):void 0}}).filter(g.pC):r.map(n=>new Date(n))}function tt(e){const r=e.match(/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i);return r?{years:L(r[1]),months:L(r[2]),days:L(r[3]),hours:L(r[4]),minutes:L(r[5]),seconds:L(r[6])}:null}function L(e){if(!e)return 0;const r=e.match(/(?:\d+(?:.|,)\d+|\d+)/);if(!r)return 0;const n=r[0].replace(",",".");return Number(n)}function U(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const xe=new Set([102100,3857,102113,900913]),rt=new Set([3395,54004]),_=new Pe.X({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});function Ce(e){return"text/html"===e}function we(e){return"text/plain"===e}let c=class extends((0,We.h)((0,Ge.n)((0,De.Q)((0,$e.M)((0,Be.q)((0,Ve.I)((0,ie.R)(Ze.Z)))))))){constructor(...e){super(...e),this.allSublayers=new Ue.Z({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormats=null,this.featureInfoUrl=null,this.fetchFeatureInfoFunction=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.url=null,this.version=null,this.addHandles([(0,w.on)(()=>this.sublayers,"after-add",({item:t})=>{t.parent=t.layer=this},w.Z_),(0,w.on)(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},w.Z_),(0,w.YP)(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=n.layer=this},w.Z_)])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=(0,g.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(Me.r9).then(()=>this._fetchService(t))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return r?new O.Z({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]}):null}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}get featureInfoFormat(){return(0,g.Wi)(this.featureInfoFormats)?null:this.featureInfoFormats.find(Ce)??this.featureInfoFormats.find(we)??null}set featureInfoFormat(e){(0,g.pC)(e)?(Ce(e)||we(e))&&this._override("featureInfoFormat",e):(this.revert("featureInfoFormat","service"),this._clearOverride("featureInfoFormat"))}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new N.Z(t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference?.wkid;e&&r?(t.spatialReferences=e.filter(n=>n!==r),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return Se(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return Se(t.layers,r)}writeSublayers(e,t,r,n){t.layers=[];const i=new Map,l=e.flatten(({sublayers:s})=>s??[]);for(const s of l)if("number"==typeof s.parent?.id){const d=i.get(s.parent.id);null!=d?d.push(s.id):i.set(s.parent.id,[s.id])}for(const s of l){const d={sublayer:s,...n},o=s.write({parentLayerId:"number"==typeof s.parent?.id?s.parent.id:-1},d);if(i.has(s.id)&&(o.sublayerIds=i.get(s.id)),!s.sublayers&&s.name){const m=s.write({},d);delete m.id,t.layers.push(m)}}t.visibleLayers=l.filter(({visible:s,sublayers:d})=>s&&!d).map(({name:s})=>s).toArray()}createExportImageParameters(e,t,r,n){const i=n?.pixelRatio??1,l=(0,oe.yZ)({extent:e,width:t})*i,s=new ue.j({layer:this,scale:l}),{xmin:d,ymin:o,xmax:m,ymax:y,spatialReference:f}=e,x=function nt(e,t){let r=e.wkid;return(0,g.Wi)(t)?r:(null!=r&&t.includes(r)||!e.latestWkid||(r=e.latestWkid),null!=r&&xe.has(r)?t.find(n=>xe.has(n))||t.find(n=>rt.has(n))||102100:r)}(f,this.spatialReferences),F="1.3.0"===this.version&&(0,Y.A)(x)?`${o},${d},${y},${m}`:`${d},${o},${m},${y}`,R=s.toJSON();return{bbox:F,["1.3.0"===this.version?"crs":"srs"]:null==x||isNaN(x)?void 0:"EPSG:"+x,...R}}fetchImage(e,t,r,n){var i=this;return(0,A.Z)(function*(){const l=i.mapUrl,s=i.createExportImageParameters(e,t,r,n);if(!s.layers){const f=document.createElement("canvas");return f.width=t,f.height=r,f}const d=n?.timeExtent?.start,o=n?.timeExtent?.end,m=(0,g.pC)(d)&&(0,g.pC)(o)?d.getTime()===o.getTime()?U(d):`${U(d)}/${U(o)}`:void 0,y={responseType:"image",query:i._mixCustomParameters({width:t,height:r,...s,time:m,...i.refreshParameters}),signal:n?.signal};return(0,E.default)(l??"",y).then(f=>f.data)})()}fetchImageBitmap(e,t,r,n){var i=this;return(0,A.Z)(function*(){const l=i.mapUrl??"",s=i.createExportImageParameters(e,t,r,n);if(!s.layers){const x=document.createElement("canvas");return x.width=t,x.height=r,x}const d=n?.timeExtent?.start,o=n?.timeExtent?.end,m=(0,g.pC)(d)&&(0,g.pC)(o)?d.getTime()===o.getTime()?U(d):`${U(d)}/${U(o)}`:void 0,y={responseType:"blob",query:i._mixCustomParameters({width:t,height:r,...s,time:m,...i.refreshParameters}),signal:n?.signal},{data:f}=yield(0,E.default)(l,y);return(0,He.g)(f,l)})()}fetchFeatureInfo(e,t,r,n,i){const l=(0,oe.yZ)({extent:e,width:t}),d=function qe(e){const t=e.filter(r=>r.popupEnabled&&r.name&&r.queryable);return t.length?t.map(({name:r})=>r).join():null}(new ue.j({layer:this,scale:l}).visibleSublayers);if((0,g.Wi)(this.featureInfoUrl)||(0,g.Wi)(d))return Promise.resolve([]);if((0,g.Wi)(this.fetchFeatureInfoFunction)&&(0,g.Wi)(this.featureInfoFormat))return Promise.resolve([]);const m={query_layers:d,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,..."1.3.0"===this.version?{I:n,J:i}:{x:n,y:i}},y={...this.createExportImageParameters(e,t,r),...m},f=this._mixCustomParameters(y);return(0,g.pC)(this.fetchFeatureInfoFunction)?this.fetchFeatureInfoFunction(f):this._defaultFetchFeatureInfoFunction((0,$.fl)(this.featureInfoUrl,f))}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}findSublayerByName(e){return this.allSublayers.find(t=>t.name===e)}serviceSupportsSpatialReference(e){return(0,Xe.G)(this.url)||null!=this.spatialReferences&&this.spatialReferences.some(t=>{const r=900913===t?N.Z.WebMercator:new N.Z({wkid:t});return(0,je.fS)(r,e)})}_defaultFetchFeatureInfoFunction(e){const t=document.createElement("iframe");t.src=(0,$.qg)(e),t.style.border="none",t.style.margin="0",t.style.width="100%",t.setAttribute("sandbox","");const r=new D.Z({title:this.title,content:t}),n=new M.Z({sourceLayer:this,popupTemplate:r});return Promise.resolve([n])}_fetchService(e){var t=this;return(0,A.Z)(function*(){if(!t.resourceInfo){const{path:r,query:n}=t.parsedUrl??{};n?.service&&(n.SERVICE=n.service,delete n.service),n?.request&&(n.REQUEST=n.request,delete n.request);const{data:i}=yield(0,E.default)(r??"",{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...n,...t.customParameters},responseType:"xml",signal:e});t.resourceInfo=Ye(i)}if(t.parsedUrl){const r=new $.R9(t.parsedUrl.path),{httpsDomains:n}=z.Z.request;"https"!==r.scheme||r.port&&"443"!==r.port||!r.host||n.includes(r.host)||n.push(r.host)}t.read(t.resourceInfo,{origin:"service"})})()}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function Se(e,t,r){e=e??[];const n=new Map;e.every(l=>null==l.id)&&(e=(0,Ae.d9)(e)).forEach((l,s)=>l.id=s);for(const l of e){const s=new q;s.read(l,t),r&&!r.includes(s.name)&&(s.visible=!1),n.set(s.id,s)}const i=[];for(const l of e){const s=null!=l.id?n.get(l.id):null;if(s)if(null!=l.parentLayerId&&l.parentLayerId>=0){const d=n.get(l.parentLayerId);if(!d)continue;d.sublayers||(d.sublayers=new T.Z),d.sublayers.push(s)}else i.push(s)}return i}(0,a._)([(0,p.Cb)({readOnly:!0})],c.prototype,"allSublayers",void 0),(0,a._)([(0,p.Cb)({json:{type:Object,write:!0}})],c.prototype,"customParameters",void 0),(0,a._)([(0,p.Cb)({json:{type:Object,write:!0}})],c.prototype,"customLayerParameters",void 0),(0,a._)([(0,p.Cb)({type:String,json:{write:!0}})],c.prototype,"copyright",void 0),(0,a._)([(0,p.Cb)()],c.prototype,"description",void 0),(0,a._)([(0,p.Cb)({readOnly:!0})],c.prototype,"dimensions",void 0),(0,a._)([(0,p.Cb)({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],c.prototype,"fullExtent",void 0),(0,a._)([(0,I.r)(["web-document","portal-item"],"fullExtent",["extent"])],c.prototype,"readFullExtentFromItemOrMap",null),(0,a._)([(0,K.c)(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],c.prototype,"writeFullExtent",null),(0,a._)([(0,p.Cb)()],c.prototype,"fullExtents",void 0),(0,a._)([(0,p.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"featureInfoFormat",null),(0,a._)([(0,p.Cb)({type:[String],readOnly:!0})],c.prototype,"featureInfoFormats",void 0),(0,a._)([(0,p.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"featureInfoUrl",void 0),(0,a._)([(0,p.Cb)()],c.prototype,"fetchFeatureInfoFunction",void 0),(0,a._)([(0,p.Cb)({type:String,json:{origins:{"web-document":{default:"image/png",type:_.jsonValues,read:{reader:_.read,source:"format"},write:{writer:_.write,target:"format"}}}}})],c.prototype,"imageFormat",void 0),(0,a._)([(0,I.r)("imageFormat",["supportedImageFormatTypes"])],c.prototype,"readImageFormat",null),(0,a._)([(0,p.Cb)({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],c.prototype,"imageMaxHeight",void 0),(0,a._)([(0,p.Cb)({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],c.prototype,"imageMaxWidth",void 0),(0,a._)([(0,p.Cb)()],c.prototype,"imageTransparency",void 0),(0,a._)([(0,p.Cb)(le.rn)],c.prototype,"legendEnabled",void 0),(0,a._)([(0,p.Cb)({type:["show","hide","hide-children"]})],c.prototype,"listMode",void 0),(0,a._)([(0,p.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"mapUrl",void 0),(0,a._)([(0,p.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],c.prototype,"isReference",void 0),(0,a._)([(0,p.Cb)({type:["WMS"]})],c.prototype,"operationalLayerType",void 0),(0,a._)([(0,p.Cb)()],c.prototype,"resourceInfo",void 0),(0,a._)([(0,p.Cb)({type:N.Z,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],c.prototype,"spatialReference",void 0),(0,a._)([(0,I.r)(["web-document","portal-item"],"spatialReference",["spatialReferences"])],c.prototype,"readSpatialReferenceFromItemOrDocument",null),(0,a._)([(0,p.Cb)({type:[se.z8],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],c.prototype,"spatialReferences",void 0),(0,a._)([(0,K.c)(["web-document","portal-item"],"spatialReferences")],c.prototype,"writeSpatialReferences",null),(0,a._)([(0,p.Cb)({type:T.Z.ofType(q),json:{write:{target:"layers",overridePolicy(e,t,r){if(function it(e,t){return e.some(r=>{for(const n in r)if((0,Te.d)(r,n,null,t))return!0;return!1})}(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],c.prototype,"sublayers",void 0),(0,a._)([(0,I.r)(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],c.prototype,"readSublayersFromItemOrMap",null),(0,a._)([(0,I.r)("service","sublayers",["layers"])],c.prototype,"readSublayers",null),(0,a._)([(0,K.c)("sublayers",{layers:{type:[q]},visibleLayers:{type:[String]}})],c.prototype,"writeSublayers",null),(0,a._)([(0,p.Cb)({json:{read:!1},readOnly:!0,value:"wms"})],c.prototype,"type",void 0),(0,a._)([(0,p.Cb)(le.HQ)],c.prototype,"url",void 0),(0,a._)([(0,p.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"version",void 0),c=(0,a._)([(0,ae.j)("esri.layers.WMSLayer")],c);const st=c},12585:(Le,V,u)=>{u.d(V,{g:()=>z});var A=u(15861),a=u(26584);function z(D,E){return M.apply(this,arguments)}function M(){return(M=(0,A.Z)(function*(D,E){try{return yield createImageBitmap(D)}catch(T){throw new a.Z("request:server",`Unable to load ${E}`,{url:E,error:T})}})).apply(this,arguments)}}}]);