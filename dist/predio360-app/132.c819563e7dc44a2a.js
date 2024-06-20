"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[132],{65389:(E,Z,a)=>{a.d(Z,{Z:()=>y});class y{constructor(p){this.size=0,this._start=0,this.maxSize=p,this._buffer=new Array(p)}get entries(){return this._buffer}enqueue(p){if(this.size===this.maxSize){const v=this._buffer[this._start];return this._buffer[this._start]=p,this._start=(this._start+1)%this.maxSize,v}return this._buffer[(this._start+this.size++)%this.maxSize]=p,null}dequeue(){if(0===this.size)return null;const p=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,p}peek(){return 0===this.size?null:this._buffer[this._start]}find(p){if(0===this.size)return null;for(const v of this._buffer)if(null!=v&&p(v))return v;return null}clear(p){let v=this.dequeue();for(;null!=v;)p&&p(v),v=this.dequeue()}}},5075:(E,Z,a)=>{a.d(Z,{Qo:()=>l});var y=a(65389),b=a(21286);const v="__esri_timestamp__";class l{constructor(o,i,u,d,g=128){this._trackIdToObservations=new Map,this._idCounter=0,this._lastPurge=performance.now(),this._addOrUpdated=new Map,this._removed=[],this._maxAge=0,this._timeInfo=u,this._purgeOptions=d,this.store=o,this.objectIdField=i,this.purgeInterval=g,this._useGeneratedIds="__esri_stream_id__"===this.objectIdField}removeById(o){this._removed.push(o)}removeByTrackId(o){const i=this._trackIdToObservations.get(o);if(i)for(const u of i.entries)this._removed.push(u)}add(o){if(this._useGeneratedIds){const S=this._nextId();o.attributes[this.objectIdField]=S,o.objectId=S}else o.objectId=o.attributes[this.objectIdField];const i=o.objectId;if(this._addOrUpdated.set(i,o),this._maxAge=Math.max(this._maxAge,o.attributes[this._timeInfo.startTimeField]),!this._timeInfo.trackIdField)return null==this._trackIdLessObservations&&(this._trackIdLessObservations=new y.Z(1e5)),void this._trackIdLessObservations.enqueue(i);const u=o.attributes[this._timeInfo.trackIdField];if(!this._trackIdToObservations.has(u)){const w=(0,b.uZ)(null!=this._purgeOptions?.maxObservations?this._purgeOptions.maxObservations:1e3,0,1e3);this._trackIdToObservations.set(u,new y.Z(w))}const g=this._trackIdToObservations.get(u)?.enqueue(i);null!=g&&(this._addOrUpdated.has(g)?this._addOrUpdated.delete(g):this._removed.push(g))}checkForUpdates(){const o=this._getToAdd(),i=this._getToRemove(),u=performance.now();u-this._lastPurge>=this.purgeInterval&&(this._purge(u),this._lastPurge=u);const d=[];if(null!=i)for(const S of i){const w=this.store.removeById(S);null!=w&&d.push(w)}const g=[];if(null!=o){const S=new Set(i??[]);for(const w of o)S.has(w.objectId)||(w.attributes[v]=u,this.store.add(w),g.push(w))}return!(!g.length&&!d?.length||(this.store.update(g,d),0))}_getToAdd(){if(!this._addOrUpdated.size)return null;const o=new Array(this._addOrUpdated.size);let i=0;return this._addOrUpdated.forEach(u=>o[i++]=u),this._addOrUpdated.clear(),o}_getToRemove(){const o=this._removed;return this._removed.length?(this._removed=[],o):null}_nextId(){const o=this._idCounter;return this._idCounter=(this._idCounter+1)%4294967294+1,o}_purge(o){const i=this._purgeOptions;null!=i&&(this._purgeSomeByDisplayCount(i),this._purgeByAge(i),this._purgeByAgeReceived(o,i),this._purgeTracks())}_purgeSomeByDisplayCount(o){if(!o.displayCount)return;let i=this.store.size;if(i>o.displayCount){if(this._timeInfo.trackIdField)for(const u of this._trackIdToObservations.values())if(i>o.displayCount&&u.size){const d=u.dequeue();this._removed.push(d),i--}if(null!=this._trackIdLessObservations){let u=i-o.displayCount;for(;u-- >0;){const d=this._trackIdLessObservations.dequeue();null!=d&&this._removed.push(d)}}}}_purgeByAge(o){const i=this._timeInfo?.startTimeField;if(!o.age||!i)return;const d=this._maxAge-60*o.age*1e3;this.store.forEach(g=>{g.attributes[i]<d&&this._removed.push(g.objectId)})}_purgeByAgeReceived(o,i){if(!i.ageReceived)return;const u=o-60*i.ageReceived*1e3;this.store.forEach(d=>{d.attributes[v]<u&&this._removed.push(d.objectId)})}_purgeTracks(){this._trackIdToObservations.forEach((o,i)=>{0===o.size&&this._trackIdToObservations.delete(i)})}}},20901:(E,Z,a)=>{a.r(Z),a.d(Z,{createConnection:()=>B});var y=a(15861),b=a(17626),v=(a(29132),a(84792)),f=a(26584),l=a(63290),R=a(10699),o=a(21726),d=(a(8314),a(4619),a(76898)),g=a(77712),S=a(33696),w=a(61885);let T=class extends w.Z.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new f.Z("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}onMessage(e){this.emit("message-received",e)}};(0,b._)([(0,g.Cb)({readOnly:!0})],T.prototype,"connectionError",null),T=(0,b._)([(0,d.j)("esri.layers.support.StreamConnection")],T);const L=T;var O,e;(e=O||(O={}))[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED";let I=class extends L{constructor(e){super({}),this._outstandingMessages=[],this.errorString=null;const{geometryType:t,spatialReference:s,sourceSpatialReference:r}=e;this._config=e,this._featureZScaler=(0,S.k)(t,r,s),this._open()}normalizeCtorArgs(){return{}}_open(){var e=this;return(0,y.Z)(function*(){yield e._tryCreateWebSocket(),e.destroyed||(yield e._handshake())})()}destroy(){super.destroy(),null!=this._websocket&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(null==this._websocket)return"disconnected";switch(this._websocket.readyState){case O.CONNECTING:case O.OPEN:return"connected";case O.CLOSING:case O.CLOSED:return"disconnected"}}sendMessageToSocket(e){null!=this._websocket?this._websocket.send(JSON.stringify(e)):this._outstandingMessages.push(e)}sendMessageToClient(e){this._onMessage(e)}updateCustomParameters(e){this._config.customParameters=e,null!=this._websocket&&this._websocket.close()}_tryCreateWebSocket(e=this._config.source.path,t=1e3,s=0){var r=this;return(0,y.Z)(function*(){try{if(r.destroyed)return;const n=(0,o.fl)(e,r._config.customParameters??{});r._websocket=yield r._createWebSocket(n),r.notifyChange("connectionStatus")}catch(n){const c=t/1e3;return r._config.maxReconnectionAttempts&&s>=r._config.maxReconnectionAttempts?(l.Z.getLogger(r).error(new f.Z("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void r.destroy()):(l.Z.getLogger(r).error(new f.Z("websocket-connection",`Failed to connect. Attempting to reconnect in ${c}s`,n)),yield(0,R.e4)(t),r._tryCreateWebSocket(e,Math.min(1.5*t,1e3*r._config.maxReconnectionInterval),s+1))}})()}_setWebSocketJSONParseHandler(e){e.onmessage=t=>{try{const s=JSON.parse(t.data);this._onMessage(s)}catch(s){return void l.Z.getLogger(this).error(new f.Z("websocket-connection","Failed to parse message, invalid JSON",{error:s}))}}}_createWebSocket(e){return new Promise((t,s)=>{const r=new WebSocket(e);r.onopen=()=>{if(r.onopen=null,this.destroyed)return r.onclose=null,void r.close();r.onclose=n=>this._onClose(n),r.onerror=n=>this._onError(n),this._setWebSocketJSONParseHandler(r),t(r)},r.onclose=n=>{r.onopen=r.onclose=null,s(n)}})}_handshake(e=1e4){var t=this;return(0,y.Z)(function*(){const s=t._websocket;if(null==s)return;const r=(0,R.hh)(),n=s.onmessage,{filter:c,outFields:h,spatialReference:C}=t._config;return r.timeout(e),s.onmessage=k=>{let m=null;try{m=JSON.parse(k.data)}catch{}m&&"object"==typeof m||(l.Z.getLogger(t).error(new f.Z("websocket-connection","Protocol violation. Handshake failed - malformed message",k.data)),r.reject(),t.destroy()),m.spatialReference?.wkid!==C?.wkid&&(l.Z.getLogger(t).error(new f.Z("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${C.wkid}`,k.data)),r.reject(),t.destroy()),"json"!==m.format&&(l.Z.getLogger(t).error(new f.Z("websocket-connection","Protocol violation. Handshake failed - format is not set",k.data)),r.reject(),t.destroy()),c&&m.filter!==c&&l.Z.getLogger(t).error(new f.Z("websocket-connection","Tried to set filter, but server doesn't support it")),h&&m.outFields!==h&&l.Z.getLogger(t).error(new f.Z("websocket-connection","Tried to set outFields, but server doesn't support it")),s.onmessage=n;for(const _ of t._outstandingMessages)s.send(JSON.stringify(_));t._outstandingMessages=[],r.resolve()},s.send(JSON.stringify({filter:c,outFields:h,format:"json",spatialReference:{wkid:C.wkid}})),r.promise})()}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t)}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),l.Z.getLogger(this).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&l.Z.getLogger(this).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};(0,b._)([(0,g.Cb)()],I.prototype,"connectionStatus",null),(0,b._)([(0,g.Cb)()],I.prototype,"errorString",void 0),I=(0,b._)([(0,d.j)("esri.layers.graphics.sources.connections.WebSocketConnection")],I);var j=a(20477),N=a(96854),P=a(91179),M=a(65234);const U={maxQueryDepth:5,maxRecordCountFactor:3};let x=class extends I{constructor(e){super({...U,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}_open(){var e=this;return(0,y.Z)(function*(){const t=yield e._fetchServiceDefinition(e._config.source);t.timeInfo.trackIdField||l.Z.getLogger(e).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const s=e._fetchWebSocketUrl(t.streamUrls,e._config.spatialReference);e._buddyServicesQuery||(e._buddyServicesQuery=e._queryBuddyServices()),yield e._buddyServicesQuery,yield e._tryCreateWebSocket(s);const{filter:r,outFields:n}=e._config;e.destroyed||e._setFilter(r,n)})()}_onMessage(e){if("attributes"in e){let t;try{t=this._enrich(e),null!=this._featureZScaler&&this._featureZScaler(t.geometry)}catch(s){return void l.Z.getLogger(this).error(new f.Z("geoevent-connection","Failed to parse message",s))}this.onFeature(t)}else this.onMessage(e)}_fetchServiceDefinition(e){var t=this;return(0,y.Z)(function*(){const s={f:"json",...t._config.customParameters},r=(0,v.Z)(e.path,{query:s,responseType:"json"}),n=(yield r).data;return t._serviceDefinition=n,n})()}_fetchWebSocketUrl(e,t){const s=e[0],{urls:r,token:n}=s,c=this._inferWebSocketBaseUrl(r);return(0,o.fl)(`${c}/subscribe`,{outSR:""+t.wkid,token:n})}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return l.Z.getLogger(this).error(new f.Z("geoevent-connection","Unable to infer WebSocket url",e)),null}_setFilter(e,t){var s=this;return(0,y.Z)(function*(){const r=s._websocket;if(null==r||null==e&&null==t)return;const n=JSON.stringify({filter:s._serializeFilter(e,t)});let c=!1;const h=(0,R.hh)();return r.onmessage=m=>{const _=JSON.parse(m.data);_.filter&&(_.error&&(l.Z.getLogger(s).error(new f.Z("geoevent-connection","Failed to set service filter",_.error)),s._set("errorString",`Could not set service filter - ${_.error}`),h.reject(_.error)),s._setWebSocketJSONParseHandler(r),c=!0,h.resolve())},r.send(n),setTimeout(()=>{c||(s.destroyed||s._websocket!==r||l.Z.getLogger(s).error(new f.Z("geoevent-connection","Server timed out when setting filter")),h.reject())},1e4),h.promise})()}_serializeFilter(e,t){const s={};if(null==e&&null==t)return s;if(e?.geometry)try{const r=(0,P.im)(e.geometry);if("extent"!==r.type)throw new f.Z(`Expected extent but found type ${r.type}`);s.geometry=JSON.stringify(r.shiftCentralMeridian())}catch(r){l.Z.getLogger(this).error(new f.Z("geoevent-connection","Encountered an error when setting connection geometryDefinition",r))}return e?.where&&"1 = 1"!==e.where&&"1=1"!==e.where&&(s.where=e.where),null!=t&&(s.outFields=t.join(",")),s}_enrich(e){if(!this._relatedFeatures)return e;const r=this._relatedFeatures.get(e.attributes[this._serviceDefinition.relatedFeatures.joinField]);if(!r)return l.Z.getLogger(this).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:n,geometry:c}=r;for(const h in n)e.attributes[h]=n[h];return c&&(e.geometry=c),e.geometry||e.centroid||l.Z.getLogger(this).error(new f.Z("geoevent-connection","Found malformed feature - no geometry found",e)),e}_queryBuddyServices(){var e=this;return(0,y.Z)(function*(){try{const{relatedFeatures:t,keepLatestArchive:s}=e._serviceDefinition,r=e._queryRelatedFeatures(t),n=e._queryArchive(s);yield r;const c=yield n;if(!c)return;for(const h of c.features)e.onFeature(e._enrich(h))}catch(t){l.Z.getLogger(e).error(new f.Z("geoevent-connection","Encountered an error when querying buddy services",{error:t}))}})()}_queryRelatedFeatures(e){var t=this;return(0,y.Z)(function*(){if(!e)return;const s=yield t._queryBuddy(e.featuresUrl);t._addRelatedFeatures(s)})()}_queryArchive(e){var t=this;return(0,y.Z)(function*(){if(e)return t._queryBuddy(e.featuresUrl)})()}_queryBuddy(e){var t=this;return(0,y.Z)(function*(){const s=new((yield Promise.resolve().then(a.bind(a,80415))).default)({url:e}),{capabilities:r}=yield s.load(),n=r.query.supportsMaxRecordCountFactor,c=r.query.supportsPagination,h=r.query.supportsCentroid,C=t._config.maxRecordCountFactor,k=s.capabilities.query.maxRecordCount,m=n?k*C:k,_=new N.Z;if(_.outFields=t._config.outFields??["*"],_.where=t._config.filter?.where??"1=1",_.returnGeometry=!0,_.returnExceededLimitFeatures=!0,_.outSpatialReference=M.Z.fromJSON(t._config.spatialReference),h&&(_.returnCentroid=!0),n&&(_.maxRecordCountFactor=C),c)return _.num=m,s.destroy(),t._queryPages(e,_);const D=yield(0,j.JT)(e,_,t._config.sourceSpatialReference);return s.destroy(),D.data})()}_queryPages(e,t,s=[],r=0){var n=this;return(0,y.Z)(function*(){t.start=null!=t.num?r*t.num:null;const{data:c}=yield(0,j.JT)(e,t,n._config.sourceSpatialReference);return c.exceededTransferLimit&&r<(n._config.maxQueryDepth??0)?(c.features.forEach(h=>s.push(h)),n._queryPages(e,t,s,r+1)):(s.forEach(h=>c.features.push(h)),c)})()}_addRelatedFeatures(e){const t=new Map,s=e.features,r=this._serviceDefinition.relatedFeatures.joinField;for(const n of s)t.set(n.attributes[r],n);this._relatedFeatures=t}};x=(0,b._)([(0,d.j)("esri.layers.graphics.sources.connections.GeoEventConnection")],x);const z=x;let F=class extends L{constructor(e){super({}),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:s,sourceSpatialReference:r}=e;this._featureZScaler=(0,S.k)(t,r,s)}normalizeCtorArgs(){return{}}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};function W(e,t){if(null==e&&null==t)return null;const s={};return null!=t&&(s.geometry=t),null!=e&&(s.where=e),s}function B(e,t,s,r,n,c,h,C,k){const m={source:e,sourceSpatialReference:t,spatialReference:s,geometryType:r,filter:W(n,c),maxReconnectionAttempts:h,maxReconnectionInterval:C,customParameters:k};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new I(m):new z(m):new F(m)}(0,b._)([(0,g.Cb)()],F.prototype,"connectionStatus",void 0),(0,b._)([(0,g.Cb)()],F.prototype,"errorString",void 0),F=(0,b._)([(0,d.j)("esri.layers.support.ClientSideConnection")],F)}}]);