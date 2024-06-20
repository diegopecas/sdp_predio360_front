"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[5700],{55700:(M,g,t)=>{t.r(g),t.d(g,{default:()=>z});var v=t(15861),s=t(17626),C=t(46882),c=t(47877),I=t(63290),O=t(99959),h=t(10699),d=t(32917),o=t(77712),f=(t(8314),t(4619),t(52323)),m=t(68653),u=t(76898),P=t(99433),E=t(31283),x=t(44917),A=t(552),T=t(49286),V=t(6647),R=t(99555),U=t(30164),Z=t(55463),G=t(38953),D=t(6432),j=t(6119);const F=Symbol("WebScene");var L=t(20885),H=t(71404),w=t(32584);let a=class extends((0,A.h)((0,R.M)((0,T.q)((0,V.I)((0,j.Q)((0,D.K)((0,O.R)(x.Z)))))))){constructor(e){var i;super(e),i=this,this.allLayers=new C.Z({getCollections:()=>[this.layers],getChildrenFunction:r=>"layers"in r?r.layers:null}),this.allTables=(0,G.a)(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=(0,h.Ds)(function(){var r=(0,v.Z)(function*(l,n,b){const{save:S,saveAs:B}=yield Promise.all([t.e(8592),t.e(3724)]).then(t.bind(t,46826));switch(l){case L.x.SAVE:return S(i,n);case L.x.SAVE_AS:return B(i,b,n)}});return function(l,n,b){return r.apply(this,arguments)}}())}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([(0,d.YP)(()=>{let e=this.parent;for(;e&&"parent"in e&&e.parent;)e=e.parent;return e&&F in e},e=>{const i="prevent-adding-tables";this.removeHandles(i),e&&(this.tables.removeAll(),this.addHandles((0,d.on)(()=>this.tables,"before-add",r=>{r.preventDefault(),I.Z.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.")}),i))},d.tX),(0,d.YP)(()=>this.visible,this._onVisibilityChange.bind(this),d.Z_)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===E.s3.USER}_writeLayers(e,i,r,l){const n=[];if(!e)return n;e.forEach(b=>{const S=(0,w.Nw)(b,l.webmap?l.webmap.getLayerJSONFromResourceInfo(b):null,l);S?.layerType&&n.push(S)}),i.layers=n}set portalItem(e){this._set("portalItem",e)}readPortalItem(e,i,r){const{itemId:l,layerType:n}=i;if("GroupLayer"===n&&l)return new Z.default({id:l,portal:r?.portal})}writePortalItem(e,i){e?.id&&(i.itemId=e.id)}set visibilityMode(e){const i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible)}beforeSave(){var e=this;return(0,v.Z)(function*(){return(0,H.P)(e)})()}load(e){const i=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:U.T},e).catch(r=>{if((0,h.r9)(r),this.sourceIsPortalItem)throw r});return this.addResolvingPromise(i),Promise.resolve(this)}loadAll(){var e=this;return(0,v.Z)(function*(){return(0,c.G)(e,i=>{i(e.layers,e.tables)})})()}save(e){var i=this;return(0,v.Z)(function*(){return i._debouncedSaveOperations(L.x.SAVE,e)})()}saveAs(e,i){var r=this;return(0,v.Z)(function*(){return r._debouncedSaveOperations(L.x.SAVE_AS,i,e)})()}layerAdded(e){e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error(`Layer read to Grouplayer: uid=${e.uid}`):this.addHandles((0,d.YP)(()=>e.visible,i=>this._onChildVisibilityChange(e,i),d.Z_),e.uid)}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach(i=>{i!==e&&(i.visible=!1)})}_enforceVisibility(e,i){if(!(0,f.vw)(this).initialized)return;const r=this.layers;let l=r.find(n=>n.visible);switch(e){case"exclusive":r.length&&!l&&(l=r.at(0),l.visible=!0),this._turnOffOtherLayers(l);break;case"inherited":r.forEach(n=>{n.visible=i})}}_onVisibilityChange(e){"inherited"===this.visibilityMode&&this.layers.forEach(i=>{i.visible=e})}_onChildVisibilityChange(e,i){switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(e=>e.visible)}};(0,s._)([(0,o.Cb)({readOnly:!0,dependsOn:[]})],a.prototype,"allLayers",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],a.prototype,"allTables",void 0),(0,s._)([(0,o.Cb)({json:{read:!0,write:!0}})],a.prototype,"blendMode",void 0),(0,s._)([(0,o.Cb)()],a.prototype,"fullExtent",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],a.prototype,"sourceIsPortalItem",null),(0,s._)([(0,o.Cb)({json:{read:!1,write:{ignoreOrigin:!0}}})],a.prototype,"layers",void 0),(0,s._)([(0,P.c)("layers")],a.prototype,"_writeLayers",null),(0,s._)([(0,o.Cb)({type:["GroupLayer"]})],a.prototype,"operationalLayerType",void 0),(0,s._)([(0,o.Cb)({json:{origins:{"web-map":{read:!1,write:{overridePolicy(e,i,r){return{enabled:"Group Layer"===e?.type&&r?.initiator!==this}}}},"web-scene":{read:!1,write:!1}}}})],a.prototype,"portalItem",null),(0,s._)([(0,m.r)("web-map","portalItem",["itemId"])],a.prototype,"readPortalItem",null),(0,s._)([(0,P.c)("web-map","portalItem",{itemId:{type:String}})],a.prototype,"writePortalItem",null),(0,s._)([(0,o.Cb)()],a.prototype,"spatialReference",void 0),(0,s._)([(0,o.Cb)({json:{read:!1},readOnly:!0,value:"group"})],a.prototype,"type",void 0),(0,s._)([(0,o.Cb)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,i,r)=>{"inherited"!==e&&(i[r]=e)}}}}})],a.prototype,"visibilityMode",null),a=(0,s._)([(0,u.j)("esri.layers.GroupLayer")],a);const z=a},71404:(M,g,t)=>{t.d(g,{P:()=>C,z:()=>O});var v=t(15861),s=t(26584);function C(h){return c.apply(this,arguments)}function c(){return(c=(0,v.Z)(function*(h){const d=[];for(const o of h.allLayers)if("beforeSave"in o&&"function"==typeof o.beforeSave){const y=o.beforeSave();y&&d.push(y)}yield Promise.allSettled(d)})).apply(this,arguments)}const I=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function O(h,d,o){let y=(h.messages??[]).filter(({type:p})=>"error"===p).map(({name:p,message:f,details:m})=>new s.Z(p,f,m));if(h.blockedRelativeUrls&&(y=y.concat(h.blockedRelativeUrls.map(p=>new s.Z("url:unsupported",`Relative url '${p}' is not supported`)))),o){const{ignoreUnsupported:p,supplementalUnsupportedErrors:f=[],requiredPropertyChecksDisabled:m}=o;p&&(y=y.filter(({name:u})=>!(I.has(u)||f.includes(u)))),m&&(y=y.filter(u=>"web-document-write:property-required"!==u.name))}if(y.length>0)throw new s.Z(d.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:y})}}}]);