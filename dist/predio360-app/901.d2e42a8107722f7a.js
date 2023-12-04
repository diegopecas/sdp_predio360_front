"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[901],{20901:(D,F,i)=>{i.r(F),i.d(F,{createConnection:()=>J});var g=i(15861),p=i(17626),W=(i(29132),i(84792)),u=i(26584),l=i(63290),a=i(62208),Z=i(10699),R=i(21726),w=(i(90912),i(85931),i(8314),i(76898)),S=i(77712),L=i(33696),_=i(61885);let b=class extends _.Z.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new u.Z("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}onMessage(e){this.emit("message-received",e)}};(0,p._)([(0,S.Cb)({readOnly:!0})],b.prototype,"connectionError",null),b=(0,p._)([(0,w.j)("esri.layers.support.StreamConnection")],b);const N=b;var m,e;(e=m||(m={}))[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED";let v=class extends N{constructor(e){super(),this._outstandingMessages=[],this.errorString=null;const{geometryType:t,spatialReference:o,sourceSpatialReference:r}=e;this._config=e,this._featureZScaler=(0,L.k)(t,r,o),this._open()}_open(){var e=this;return(0,g.Z)(function*(){yield e._tryCreateWebSocket(),e.destroyed||(yield e._handshake())})()}destroy(){super.destroy(),(0,a.pC)(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if((0,a.Wi)(this._websocket))return"disconnected";switch(this._websocket.readyState){case m.CONNECTING:case m.OPEN:return"connected";case m.CLOSING:case m.CLOSED:return"disconnected"}}sendMessageToSocket(e){(0,a.Wi)(this._websocket)?this._outstandingMessages.push(e):this._websocket.send(JSON.stringify(e))}sendMessageToClient(e){this._onMessage(e)}updateCustomParameters(e){this._config.customParameters=e,(0,a.pC)(this._websocket)&&this._websocket.close()}_tryCreateWebSocket(e=this._config.source.path,t=1e3,o=0){var r=this;return(0,g.Z)(function*(){try{if(r.destroyed)return;const s=(0,R.fl)(e,r._config.customParameters??{});r._websocket=yield r._createWebSocket(s),r.notifyChange("connectionStatus")}catch(s){const n=t/1e3;return r._config.maxReconnectionAttempts&&o>=r._config.maxReconnectionAttempts?(l.Z.getLogger(r.declaredClass).error(new u.Z("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void r.destroy()):(l.Z.getLogger(r.declaredClass).error(new u.Z("websocket-connection",`Failed to connect. Attempting to reconnect in ${n}s`,s)),yield(0,Z.e4)(t),r._tryCreateWebSocket(e,Math.min(1.5*t,1e3*r._config.maxReconnectionInterval),o+1))}})()}_setWebSocketJSONParseHandler(e){e.onmessage=t=>{try{const o=JSON.parse(t.data);this._onMessage(o)}catch(o){return void l.Z.getLogger(this.declaredClass).error(new u.Z("websocket-connection","Failed to parse message, invalid JSON",{error:o}))}}}_createWebSocket(e){return new Promise((t,o)=>{const r=new WebSocket(e);r.onopen=()=>{if(r.onopen=null,this.destroyed)return r.onclose=null,void r.close();r.onclose=s=>this._onClose(s),r.onerror=s=>this._onError(s),this._setWebSocketJSONParseHandler(r),t(r)},r.onclose=s=>{r.onopen=r.onclose=null,o(s)}})}_handshake(e=1e4){var t=this;return(0,g.Z)(function*(){const o=t._websocket;if((0,a.Wi)(o))return;const r=(0,Z.hh)(),s=o.onmessage,{filter:n,outFields:c,spatialReference:y}=t._config;return r.timeout(e),o.onmessage=f=>{let h=null;try{h=JSON.parse(f.data)}catch{}h&&"object"==typeof h||(l.Z.getLogger(t.declaredClass).error(new u.Z("websocket-connection","Protocol violation. Handshake failed - malformed message",f.data)),r.reject(),t.destroy()),h.spatialReference?.wkid!==y?.wkid&&(l.Z.getLogger(t.declaredClass).error(new u.Z("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${y.wkid}`,f.data)),r.reject(),t.destroy()),"json"!==h.format&&(l.Z.getLogger(t.declaredClass).error(new u.Z("websocket-connection","Protocol violation. Handshake failed - format is not set",f.data)),r.reject(),t.destroy()),n&&h.filter!==n&&l.Z.getLogger(t.declaredClass).error(new u.Z("websocket-connection","Tried to set filter, but server doesn't support it")),c&&h.outFields!==c&&l.Z.getLogger(t.declaredClass).error(new u.Z("websocket-connection","Tried to set outFields, but server doesn't support it")),o.onmessage=s;for(const d of t._outstandingMessages)o.send(JSON.stringify(d));t._outstandingMessages=[],r.resolve()},o.send(JSON.stringify({filter:n,outFields:c,format:"json",spatialReference:{wkid:y.wkid}})),r.promise})()}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)(0,a.pC)(this._featureZScaler)&&this._featureZScaler(t.geometry),this.onFeature(t)}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),l.Z.getLogger(this.declaredClass).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&l.Z.getLogger(this.declaredClass).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};(0,p._)([(0,S.Cb)()],v.prototype,"connectionStatus",null),(0,p._)([(0,S.Cb)()],v.prototype,"errorString",void 0),v=(0,p._)([(0,w.j)("esri.layers.graphics.sources.connections.WebSocketConnection")],v);var O=i(20477),E=i(96854),x=i(91179),P=i(65234);const j={maxQueryDepth:5,maxRecordCountFactor:3};let k=class extends v{constructor(e){super({...j,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}_open(){var e=this;return(0,g.Z)(function*(){const t=yield e._fetchServiceDefinition(e._config.source);t.timeInfo.trackIdField||l.Z.getLogger(e.declaredClass).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const o=e._fetchWebSocketUrl(t.streamUrls,e._config.spatialReference);e._buddyServicesQuery||(e._buddyServicesQuery=e._queryBuddyServices()),yield e._buddyServicesQuery,yield e._tryCreateWebSocket(o);const{filter:r,outFields:s}=e._config;e.destroyed||e._setFilter(r,s)})()}_onMessage(e){if("attributes"in e){let t;try{t=this._enrich(e),(0,a.pC)(this._featureZScaler)&&this._featureZScaler(t.geometry)}catch(o){return void l.Z.getLogger(this.declaredClass).error(new u.Z("geoevent-connection","Failed to parse message",o))}this.onFeature(t)}else this.onMessage(e)}_fetchServiceDefinition(e){var t=this;return(0,g.Z)(function*(){const o={f:"json",...t._config.customParameters},r=(0,W.default)(e.path,{query:o,responseType:"json"}),s=(yield r).data;return t._serviceDefinition=s,s})()}_fetchWebSocketUrl(e,t){const o=e[0],{urls:r,token:s}=o,n=this._inferWebSocketBaseUrl(r);return(0,R.fl)(`${n}/subscribe`,{outSR:""+t.wkid,token:s})}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return l.Z.getLogger(this.declaredClass).error(new u.Z("geoevent-connection","Unable to infer WebSocket url",e)),null}_setFilter(e,t){var o=this;return(0,g.Z)(function*(){const r=o._websocket;if((0,a.Wi)(r)||(0,a.Wi)(e)&&(0,a.Wi)(t))return;const s=JSON.stringify({filter:o._serializeFilter(e,t)});let n=!1;const c=(0,Z.hh)();return r.onmessage=h=>{const d=JSON.parse(h.data);d.filter&&(d.error&&(l.Z.getLogger(o.declaredClass).error(new u.Z("geoevent-connection","Failed to set service filter",d.error)),o._set("errorString",`Could not set service filter - ${d.error}`),c.reject(d.error)),o._setWebSocketJSONParseHandler(r),n=!0,c.resolve())},r.send(s),setTimeout(()=>{n||(o.destroyed||o._websocket!==r||l.Z.getLogger(o.declaredClass).error(new u.Z("geoevent-connection","Server timed out when setting filter")),c.reject())},1e4),c.promise})()}_serializeFilter(e,t){const o={};if((0,a.Wi)(e)&&(0,a.Wi)(t))return o;if((0,a.pC)(e)&&e.geometry)try{const r=(0,x.im)(e.geometry);if("extent"!==r.type)throw new u.Z(`Expected extent but found type ${r.type}`);o.geometry=JSON.stringify(r.shiftCentralMeridian())}catch(r){l.Z.getLogger(this.declaredClass).error(new u.Z("geoevent-connection","Encountered an error when setting connection geometryDefinition",r))}return(0,a.pC)(e)&&e.where&&"1 = 1"!==e.where&&"1=1"!==e.where&&(o.where=e.where),(0,a.pC)(t)&&(o.outFields=t.join(",")),o}_enrich(e){if(!this._relatedFeatures)return e;const r=this._relatedFeatures.get(e.attributes[this._serviceDefinition.relatedFeatures.joinField]);if(!r)return l.Z.getLogger(this.declaredClass).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:s,geometry:n}=r;for(const c in s)e.attributes[c]=s[c];return n&&(e.geometry=n),e.geometry||e.centroid||l.Z.getLogger(this.declaredClass).error(new u.Z("geoevent-connection","Found malformed feature - no geometry found",e)),e}_queryBuddyServices(){var e=this;return(0,g.Z)(function*(){try{const{relatedFeatures:t,keepLatestArchive:o}=e._serviceDefinition,r=e._queryRelatedFeatures(t),s=e._queryArchive(o);yield r;const n=yield s;if(!n)return;for(const c of n.features)e.onFeature(e._enrich(c))}catch(t){l.Z.getLogger(e.declaredClass).error(new u.Z("geoevent-connection","Encountered an error when querying buddy services",{error:t}))}})()}_queryRelatedFeatures(e){var t=this;return(0,g.Z)(function*(){if(!e)return;const o=yield t._queryBuddy(e.featuresUrl);t._addRelatedFeatures(o)})()}_queryArchive(e){var t=this;return(0,g.Z)(function*(){if(e)return t._queryBuddy(e.featuresUrl)})()}_queryBuddy(e){var t=this;return(0,g.Z)(function*(){const o=new((yield Promise.resolve().then(i.bind(i,80415))).default)({url:e}),{capabilities:r}=yield o.load(),s=r.query.supportsMaxRecordCountFactor,n=r.query.supportsPagination,c=r.query.supportsCentroid,y=t._config.maxRecordCountFactor,f=o.capabilities.query.maxRecordCount,h=s?f*y:f,d=new E.Z;if(d.outFields=(0,a.Pt)(t._config.outFields,["*"]),d.where=(0,a.Pt)((0,a.U2)(t._config.filter,"where"),"1=1"),d.returnGeometry=!0,d.returnExceededLimitFeatures=!0,d.outSpatialReference=P.Z.fromJSON(t._config.spatialReference),c&&(d.returnCentroid=!0),s&&(d.maxRecordCountFactor=y),n)return d.num=h,o.destroy(),t._queryPages(e,d);const U=yield(0,O.JT)(e,d,t._config.sourceSpatialReference);return o.destroy(),U.data})()}_queryPages(e,t,o=[],r=0){var s=this;return(0,g.Z)(function*(){t.start=(0,a.pC)(t.num)?r*t.num:null;const{data:n}=yield(0,O.JT)(e,t,s._config.sourceSpatialReference);return n.exceededTransferLimit&&r<(s._config.maxQueryDepth??0)?(n.features.forEach(c=>o.push(c)),s._queryPages(e,t,o,r+1)):(o.forEach(c=>n.features.push(c)),n)})()}_addRelatedFeatures(e){const t=new Map,o=e.features,r=this._serviceDefinition.relatedFeatures.joinField;for(const s of o)t.set(s.attributes[r],s);this._relatedFeatures=t}};k=(0,p._)([(0,w.j)("esri.layers.graphics.sources.connections.GeoEventConnection")],k);const M=k;let C=class extends N{constructor(e){super(),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:o,sourceSpatialReference:r}=e;this._featureZScaler=(0,L.k)(t,r,o)}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)(0,a.pC)(this._featureZScaler)&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};function J(e,t,o,r,s,n,c,y){const f={source:e,sourceSpatialReference:t,spatialReference:o,geometryType:r,filter:s,maxReconnectionAttempts:n,maxReconnectionInterval:c,customParameters:y};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new v(f):new M(f):new C(f)}(0,p._)([(0,S.Cb)()],C.prototype,"connectionStatus",void 0),(0,p._)([(0,S.Cb)()],C.prototype,"errorString",void 0),C=(0,p._)([(0,w.j)("esri.layers.support.ClientSideConnection")],C)}}]);