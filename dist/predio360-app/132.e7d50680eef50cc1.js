"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[132,901],{65389:(L,Z,a)=>{a.d(Z,{Z:()=>v});var y=a(62208);class v{constructor(m){this.size=0,this._start=0,this.maxSize=m,this._buffer=new Array(m)}get entries(){return this._buffer}enqueue(m){if(this.size===this.maxSize){const c=this._buffer[this._start];return this._buffer[this._start]=m,this._start=(this._start+1)%this.maxSize,c}return this._buffer[(this._start+this.size++)%this.maxSize]=m,null}dequeue(){if(0===this.size)return null;const m=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,m}peek(){return 0===this.size?null:this._buffer[this._start]}find(m){if(0===this.size)return null;for(const c of this._buffer)if((0,y.pC)(c)&&m(c))return c;return null}clear(m){let c=this.dequeue();for(;(0,y.pC)(c);)m&&m(c),c=this.dequeue()}}},5075:(L,Z,a)=>{a.d(Z,{Qo:()=>h});var y=a(65389),v=a(21286),b=a(62208);const c="__esri_timestamp__";class h{constructor(o,i,u,f,p=128){this._trackIdToObservations=new Map,this._idCounter=0,this._lastPurge=performance.now(),this._addOrUpdated=new Map,this._removed=[],this._maxAge=0,this._timeInfo=u,this._purgeOptions=f,this.store=o,this.objectIdField=i,this.purgeInterval=p,this._useGeneratedIds="__esri_stream_id__"===this.objectIdField}removeById(o){this._removed.push(o)}removeByTrackId(o){const i=this._trackIdToObservations.get(o);if(i)for(const u of i.entries)this._removed.push(u)}add(o){if(this._useGeneratedIds){const p=this._nextId();o.attributes[this.objectIdField]=p,o.objectId=p}else o.objectId=o.attributes[this.objectIdField];const i=o.objectId;if(this._addOrUpdated.set(i,o),this._maxAge=Math.max(this._maxAge,o.attributes[this._timeInfo.startTimeField]),!this._timeInfo.trackIdField)return(0,b.Wi)(this._trackIdLessObservations)&&(this._trackIdLessObservations=new y.Z(1e5)),void this._trackIdLessObservations.enqueue(i);const u=o.attributes[this._timeInfo.trackIdField];if(!this._trackIdToObservations.has(u)){const p=(0,b.pC)(this._purgeOptions)&&null!=this._purgeOptions.maxObservations?this._purgeOptions.maxObservations:1e3,S=(0,v.uZ)(p,0,1e3);this._trackIdToObservations.set(u,new y.Z(S))}const f=this._trackIdToObservations.get(u)?.enqueue(i);(0,b.pC)(f)&&(this._addOrUpdated.has(f)?this._addOrUpdated.delete(f):this._removed.push(f))}checkForUpdates(){const o=this._getToAdd(),i=this._getToRemove(),u=performance.now();u-this._lastPurge>=this.purgeInterval&&(this._purge(u),this._lastPurge=u);const f=[];if((0,b.pC)(i))for(const S of i){const k=this.store.removeById(S);(0,b.pC)(k)&&f.push(k)}const p=[];if((0,b.pC)(o)){const S=new Set((0,b.Pt)(i,[]));for(const k of o)S.has(k.objectId)||(k.attributes[c]=u,this.store.add(k),p.push(k))}(p.length||f?.length)&&this.store.update(p,f)}_getToAdd(){if(!this._addOrUpdated.size)return null;const o=new Array(this._addOrUpdated.size);let i=0;return this._addOrUpdated.forEach(u=>o[i++]=u),this._addOrUpdated.clear(),o}_getToRemove(){const o=this._removed;return this._removed.length?(this._removed=[],o):null}_nextId(){const o=this._idCounter;return this._idCounter=(this._idCounter+1)%4294967294+1,o}_purge(o){const i=this._purgeOptions;(0,b.pC)(i)&&(this._purgeSomeByDisplayCount(i),this._purgeByAge(i),this._purgeByAgeReceived(o,i),this._purgeTracks())}_purgeSomeByDisplayCount(o){if(!o.displayCount)return;let i=this.store.size;if(i>o.displayCount){if(this._timeInfo.trackIdField)for(const u of this._trackIdToObservations.values())if(i>o.displayCount&&u.size){const f=(0,b.Wg)(u.dequeue());this._removed.push(f),i--}if((0,b.pC)(this._trackIdLessObservations)){let u=i-o.displayCount;for(;u-- >0;){const f=this._trackIdLessObservations.dequeue();(0,b.pC)(f)&&this._removed.push(f)}}}}_purgeByAge(o){const i=this._timeInfo?.startTimeField;if(!o.age||!i)return;const f=this._maxAge-60*o.age*1e3;this.store.forEach(p=>{p.attributes[i]<f&&this._removed.push(p.objectId)})}_purgeByAgeReceived(o,i){if(!i.ageReceived)return;const u=o-60*i.ageReceived*1e3;this.store.forEach(f=>{f.attributes[c]<u&&this._removed.push(f.objectId)})}_purgeTracks(){this._trackIdToObservations.forEach((o,i)=>{0===o.size&&this._trackIdToObservations.delete(i)})}}},20901:(L,Z,a)=>{a.r(Z),a.d(Z,{createConnection:()=>B});var y=a(15861),v=a(17626),m=(a(29132),a(84792)),c=a(26584),l=a(63290),h=a(62208),T=a(10699),o=a(21726),p=(a(90912),a(85931),a(8314),a(76898)),S=a(77712),k=a(33696),W=a(61885);let E=class extends W.Z.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new c.Z("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}onMessage(e){this.emit("message-received",e)}};(0,v._)([(0,S.Cb)({readOnly:!0})],E.prototype,"connectionError",null),E=(0,v._)([(0,p.j)("esri.layers.support.StreamConnection")],E);const P=E;var I,e;(e=I||(I={}))[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED";let F=class extends P{constructor(e){super(),this._outstandingMessages=[],this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._config=e,this._featureZScaler=(0,k.k)(t,s,r),this._open()}_open(){var e=this;return(0,y.Z)(function*(){yield e._tryCreateWebSocket(),e.destroyed||(yield e._handshake())})()}destroy(){super.destroy(),(0,h.pC)(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if((0,h.Wi)(this._websocket))return"disconnected";switch(this._websocket.readyState){case I.CONNECTING:case I.OPEN:return"connected";case I.CLOSING:case I.CLOSED:return"disconnected"}}sendMessageToSocket(e){(0,h.Wi)(this._websocket)?this._outstandingMessages.push(e):this._websocket.send(JSON.stringify(e))}sendMessageToClient(e){this._onMessage(e)}updateCustomParameters(e){this._config.customParameters=e,(0,h.pC)(this._websocket)&&this._websocket.close()}_tryCreateWebSocket(e=this._config.source.path,t=1e3,r=0){var s=this;return(0,y.Z)(function*(){try{if(s.destroyed)return;const n=(0,o.fl)(e,s._config.customParameters??{});s._websocket=yield s._createWebSocket(n),s.notifyChange("connectionStatus")}catch(n){const d=t/1e3;return s._config.maxReconnectionAttempts&&r>=s._config.maxReconnectionAttempts?(l.Z.getLogger(s.declaredClass).error(new c.Z("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void s.destroy()):(l.Z.getLogger(s.declaredClass).error(new c.Z("websocket-connection",`Failed to connect. Attempting to reconnect in ${d}s`,n)),yield(0,T.e4)(t),s._tryCreateWebSocket(e,Math.min(1.5*t,1e3*s._config.maxReconnectionInterval),r+1))}})()}_setWebSocketJSONParseHandler(e){e.onmessage=t=>{try{const r=JSON.parse(t.data);this._onMessage(r)}catch(r){return void l.Z.getLogger(this.declaredClass).error(new c.Z("websocket-connection","Failed to parse message, invalid JSON",{error:r}))}}}_createWebSocket(e){return new Promise((t,r)=>{const s=new WebSocket(e);s.onopen=()=>{if(s.onopen=null,this.destroyed)return s.onclose=null,void s.close();s.onclose=n=>this._onClose(n),s.onerror=n=>this._onError(n),this._setWebSocketJSONParseHandler(s),t(s)},s.onclose=n=>{s.onopen=s.onclose=null,r(n)}})}_handshake(e=1e4){var t=this;return(0,y.Z)(function*(){const r=t._websocket;if((0,h.Wi)(r))return;const s=(0,T.hh)(),n=r.onmessage,{filter:d,outFields:g,spatialReference:O}=t._config;return s.timeout(e),r.onmessage=C=>{let w=null;try{w=JSON.parse(C.data)}catch{}w&&"object"==typeof w||(l.Z.getLogger(t.declaredClass).error(new c.Z("websocket-connection","Protocol violation. Handshake failed - malformed message",C.data)),s.reject(),t.destroy()),w.spatialReference?.wkid!==O?.wkid&&(l.Z.getLogger(t.declaredClass).error(new c.Z("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${O.wkid}`,C.data)),s.reject(),t.destroy()),"json"!==w.format&&(l.Z.getLogger(t.declaredClass).error(new c.Z("websocket-connection","Protocol violation. Handshake failed - format is not set",C.data)),s.reject(),t.destroy()),d&&w.filter!==d&&l.Z.getLogger(t.declaredClass).error(new c.Z("websocket-connection","Tried to set filter, but server doesn't support it")),g&&w.outFields!==g&&l.Z.getLogger(t.declaredClass).error(new c.Z("websocket-connection","Tried to set outFields, but server doesn't support it")),r.onmessage=n;for(const _ of t._outstandingMessages)r.send(JSON.stringify(_));t._outstandingMessages=[],s.resolve()},r.send(JSON.stringify({filter:d,outFields:g,format:"json",spatialReference:{wkid:O.wkid}})),s.promise})()}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)(0,h.pC)(this._featureZScaler)&&this._featureZScaler(t.geometry),this.onFeature(t)}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),l.Z.getLogger(this.declaredClass).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&l.Z.getLogger(this.declaredClass).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};(0,v._)([(0,S.Cb)()],F.prototype,"connectionStatus",null),(0,v._)([(0,S.Cb)()],F.prototype,"errorString",void 0),F=(0,v._)([(0,p.j)("esri.layers.graphics.sources.connections.WebSocketConnection")],F);var j=a(20477),M=a(96854),N=a(91179),U=a(65234);const D={maxQueryDepth:5,maxRecordCountFactor:3};let x=class extends F{constructor(e){super({...D,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}_open(){var e=this;return(0,y.Z)(function*(){const t=yield e._fetchServiceDefinition(e._config.source);t.timeInfo.trackIdField||l.Z.getLogger(e.declaredClass).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const r=e._fetchWebSocketUrl(t.streamUrls,e._config.spatialReference);e._buddyServicesQuery||(e._buddyServicesQuery=e._queryBuddyServices()),yield e._buddyServicesQuery,yield e._tryCreateWebSocket(r);const{filter:s,outFields:n}=e._config;e.destroyed||e._setFilter(s,n)})()}_onMessage(e){if("attributes"in e){let t;try{t=this._enrich(e),(0,h.pC)(this._featureZScaler)&&this._featureZScaler(t.geometry)}catch(r){return void l.Z.getLogger(this.declaredClass).error(new c.Z("geoevent-connection","Failed to parse message",r))}this.onFeature(t)}else this.onMessage(e)}_fetchServiceDefinition(e){var t=this;return(0,y.Z)(function*(){const r={f:"json",...t._config.customParameters},s=(0,m.default)(e.path,{query:r,responseType:"json"}),n=(yield s).data;return t._serviceDefinition=n,n})()}_fetchWebSocketUrl(e,t){const r=e[0],{urls:s,token:n}=r,d=this._inferWebSocketBaseUrl(s);return(0,o.fl)(`${d}/subscribe`,{outSR:""+t.wkid,token:n})}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return l.Z.getLogger(this.declaredClass).error(new c.Z("geoevent-connection","Unable to infer WebSocket url",e)),null}_setFilter(e,t){var r=this;return(0,y.Z)(function*(){const s=r._websocket;if((0,h.Wi)(s)||(0,h.Wi)(e)&&(0,h.Wi)(t))return;const n=JSON.stringify({filter:r._serializeFilter(e,t)});let d=!1;const g=(0,T.hh)();return s.onmessage=w=>{const _=JSON.parse(w.data);_.filter&&(_.error&&(l.Z.getLogger(r.declaredClass).error(new c.Z("geoevent-connection","Failed to set service filter",_.error)),r._set("errorString",`Could not set service filter - ${_.error}`),g.reject(_.error)),r._setWebSocketJSONParseHandler(s),d=!0,g.resolve())},s.send(n),setTimeout(()=>{d||(r.destroyed||r._websocket!==s||l.Z.getLogger(r.declaredClass).error(new c.Z("geoevent-connection","Server timed out when setting filter")),g.reject())},1e4),g.promise})()}_serializeFilter(e,t){const r={};if((0,h.Wi)(e)&&(0,h.Wi)(t))return r;if((0,h.pC)(e)&&e.geometry)try{const s=(0,N.im)(e.geometry);if("extent"!==s.type)throw new c.Z(`Expected extent but found type ${s.type}`);r.geometry=JSON.stringify(s.shiftCentralMeridian())}catch(s){l.Z.getLogger(this.declaredClass).error(new c.Z("geoevent-connection","Encountered an error when setting connection geometryDefinition",s))}return(0,h.pC)(e)&&e.where&&"1 = 1"!==e.where&&"1=1"!==e.where&&(r.where=e.where),(0,h.pC)(t)&&(r.outFields=t.join(",")),r}_enrich(e){if(!this._relatedFeatures)return e;const s=this._relatedFeatures.get(e.attributes[this._serviceDefinition.relatedFeatures.joinField]);if(!s)return l.Z.getLogger(this.declaredClass).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:n,geometry:d}=s;for(const g in n)e.attributes[g]=n[g];return d&&(e.geometry=d),e.geometry||e.centroid||l.Z.getLogger(this.declaredClass).error(new c.Z("geoevent-connection","Found malformed feature - no geometry found",e)),e}_queryBuddyServices(){var e=this;return(0,y.Z)(function*(){try{const{relatedFeatures:t,keepLatestArchive:r}=e._serviceDefinition,s=e._queryRelatedFeatures(t),n=e._queryArchive(r);yield s;const d=yield n;if(!d)return;for(const g of d.features)e.onFeature(e._enrich(g))}catch(t){l.Z.getLogger(e.declaredClass).error(new c.Z("geoevent-connection","Encountered an error when querying buddy services",{error:t}))}})()}_queryRelatedFeatures(e){var t=this;return(0,y.Z)(function*(){if(!e)return;const r=yield t._queryBuddy(e.featuresUrl);t._addRelatedFeatures(r)})()}_queryArchive(e){var t=this;return(0,y.Z)(function*(){if(e)return t._queryBuddy(e.featuresUrl)})()}_queryBuddy(e){var t=this;return(0,y.Z)(function*(){const r=new((yield Promise.resolve().then(a.bind(a,80415))).default)({url:e}),{capabilities:s}=yield r.load(),n=s.query.supportsMaxRecordCountFactor,d=s.query.supportsPagination,g=s.query.supportsCentroid,O=t._config.maxRecordCountFactor,C=r.capabilities.query.maxRecordCount,w=n?C*O:C,_=new M.Z;if(_.outFields=(0,h.Pt)(t._config.outFields,["*"]),_.where=(0,h.Pt)((0,h.U2)(t._config.filter,"where"),"1=1"),_.returnGeometry=!0,_.returnExceededLimitFeatures=!0,_.outSpatialReference=U.Z.fromJSON(t._config.spatialReference),g&&(_.returnCentroid=!0),n&&(_.maxRecordCountFactor=O),d)return _.num=w,r.destroy(),t._queryPages(e,_);const J=yield(0,j.JT)(e,_,t._config.sourceSpatialReference);return r.destroy(),J.data})()}_queryPages(e,t,r=[],s=0){var n=this;return(0,y.Z)(function*(){t.start=(0,h.pC)(t.num)?s*t.num:null;const{data:d}=yield(0,j.JT)(e,t,n._config.sourceSpatialReference);return d.exceededTransferLimit&&s<(n._config.maxQueryDepth??0)?(d.features.forEach(g=>r.push(g)),n._queryPages(e,t,r,s+1)):(r.forEach(g=>d.features.push(g)),d)})()}_addRelatedFeatures(e){const t=new Map,r=e.features,s=this._serviceDefinition.relatedFeatures.joinField;for(const n of r)t.set(n.attributes[s],n);this._relatedFeatures=t}};x=(0,v._)([(0,p.j)("esri.layers.graphics.sources.connections.GeoEventConnection")],x);const z=x;let R=class extends P{constructor(e){super(),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._featureZScaler=(0,k.k)(t,s,r)}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)(0,h.pC)(this._featureZScaler)&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};function B(e,t,r,s,n,d,g,O){const C={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:s,filter:n,maxReconnectionAttempts:d,maxReconnectionInterval:g,customParameters:O};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new F(C):new z(C):new R(C)}(0,v._)([(0,S.Cb)()],R.prototype,"connectionStatus",void 0),(0,v._)([(0,S.Cb)()],R.prototype,"errorString",void 0),R=(0,v._)([(0,p.j)("esri.layers.support.ClientSideConnection")],R)}}]);