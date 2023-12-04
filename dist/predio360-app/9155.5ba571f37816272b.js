"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[9155],{36592:(se,W,d)=>{d.d(W,{Q:()=>b});var O=d(85931),K=d(62208),L=d(77029),N=d(14259);class b{constructor(e=9,s){this._compareMinX=R,this._compareMinY=y,this._toBBox=i=>i,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),s&&("function"==typeof s?this._toBBox=s:this._initFormat(s)),this.clear()}destroy(){this.clear(),V.prune(),k.prune(),A.prune(),q.prune()}all(e){this._all(this._data,e)}search(e,s){let i=this._data;const a=this._toBBox;if(P(e,i))for(V.clear();i;){for(let h=0,f=i.children.length;h<f;h++){const I=i.children[h],M=i.leaf?a(I):I;P(e,M)&&(i.leaf?s(I):g(e,M)?this._all(I,s):V.push(I))}i=V.pop()}}collides(e){let s=this._data;const i=this._toBBox;if(!P(e,s))return!1;for(V.clear();s;){for(let a=0,h=s.children.length;a<h;a++){const f=s.children[a],I=s.leaf?i(f):f;if(P(e,I)){if(s.leaf||g(e,I))return!0;V.push(f)}}s=V.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let i=0,a=e.length;i<a;i++)this.insert(e[i]);return this}let s=this._build(e.slice(0,e.length),0,e.length-1,0);if(this._data.children.length)if(this._data.height===s.height)this._splitRoot(this._data,s);else{if(this._data.height<s.height){const i=this._data;this._data=s,s=i}this._insert(s,this._data.height-s.height-1,!0)}else this._data=s;return this}insert(e){return e&&this._insert(e,this._data.height-1),this}clear(){return this._data=new ee([]),this}remove(e){if(!e)return this;let s,i=this._data,a=null,h=0,f=!1;const I=this._toBBox(e);for(A.clear(),q.clear();i||A.length>0;){if(i||(i=(0,K.j0)(A.pop()),a=A.data[A.length-1],h=q.pop()??0,f=!0),i.leaf&&(s=(0,O.cq)(i.children,e,i.children.length,i.indexHint),-1!==s))return i.children.splice(s,1),A.push(i),this._condense(A),this;f||i.leaf||!g(i,I)?a?(h++,i=a.children[h],f=!1):i=null:(A.push(i),q.push(h),h=0,a=i,i=i.children[0])}return this}toJSON(){return this._data}fromJSON(e){return this._data=e,this}_all(e,s){let i=e;for(k.clear();i;){if(!0===i.leaf)for(const a of i.children)s(a);else k.pushArray(i.children);i=k.pop()??null}}_build(e,s,i,a){const h=i-s+1;let f=this._maxEntries;if(h<=f){const F=new ee(e.slice(s,i+1));return v(F,this._toBBox),F}a||(a=Math.ceil(Math.log(h)/Math.log(f)),f=Math.ceil(h/f**(a-1)));const I=new te([]);I.height=a;const M=Math.ceil(h/f),j=M*Math.ceil(Math.sqrt(f));Y(e,s,i,j,this._compareMinX);for(let F=s;F<=i;F+=j){const Z=Math.min(F+j-1,i);Y(e,F,Z,M,this._compareMinY);for(let H=F;H<=Z;H+=M){const ae=Math.min(H+M-1,Z);I.children.push(this._build(e,H,ae,a-1))}}return v(I,this._toBBox),I}_chooseSubtree(e,s,i,a){for(;a.push(s),!0!==s.leaf&&a.length-1!==i;){let h,f=1/0,I=1/0;for(let M=0,j=s.children.length;M<j;M++){const F=s.children[M],Z=x(F),H=z(e,F)-Z;H<I?(I=H,f=Z<f?Z:f,h=F):H===I&&Z<f&&(f=Z,h=F)}s=h||s.children[0]}return s}_insert(e,s,i){const h=i?e:(0,this._toBBox)(e);A.clear();const f=this._chooseSubtree(h,this._data,s,A);for(f.children.push(e),U(f,h);s>=0&&A.data[s].children.length>this._maxEntries;)this._split(A,s),s--;this._adjustParentBBoxes(h,A,s)}_split(e,s){const i=e.data[s],a=i.children.length,h=this._minEntries;this._chooseSplitAxis(i,h,a);const f=this._chooseSplitIndex(i,h,a);if(!f)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const I=i.children.splice(f,i.children.length-f),M=i.leaf?new ee(I):new te(I);M.height=i.height,v(i,this._toBBox),v(M,this._toBBox),s?e.data[s-1].children.push(M):this._splitRoot(i,M)}_splitRoot(e,s){this._data=new te([e,s]),this._data.height=e.height+1,v(this._data,this._toBBox)}_chooseSplitIndex(e,s,i){let a,h,f;a=h=1/0;for(let I=s;I<=i-s;I++){const M=C(e,0,I,this._toBBox),j=C(e,I,i,this._toBBox),F=m(M,j),Z=x(M)+x(j);F<a?(a=F,f=I,h=Z<h?Z:h):F===a&&Z<h&&(h=Z,f=I)}return f}_chooseSplitAxis(e,s,i){const a=e.leaf?this._compareMinX:R,h=e.leaf?this._compareMinY:y;this._allDistMargin(e,s,i,a)<this._allDistMargin(e,s,i,h)&&e.children.sort(a)}_allDistMargin(e,s,i,a){e.children.sort(a);const h=this._toBBox,f=C(e,0,s,h),I=C(e,i-s,i,h);let M=T(f)+T(I);for(let j=s;j<i-s;j++){const F=e.children[j];U(f,e.leaf?h(F):F),M+=T(f)}for(let j=i-s-1;j>=s;j--){const F=e.children[j];U(I,e.leaf?h(F):F),M+=T(I)}return M}_adjustParentBBoxes(e,s,i){for(let a=i;a>=0;a--)U(s.data[a],e)}_condense(e){for(let s=e.length-1;s>=0;s--){const i=e.data[s];if(0===i.children.length)if(s>0){const a=e.data[s-1],h=a.children;h.splice((0,O.cq)(h,i,h.length,a.indexHint),1)}else this.clear();else v(i,this._toBBox)}}_initFormat(e){const s=["return a"," - b",";"];this._compareMinX=new Function("a","b",s.join(e[0])),this._compareMinY=new Function("a","b",s.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function v(u,e){C(u,0,u.children.length,e,u)}function C(u,e,s,i,a){a||(a=new ee([])),a.minX=1/0,a.minY=1/0,a.maxX=-1/0,a.maxY=-1/0;for(let h,f=e;f<s;f++)h=u.children[f],U(a,u.leaf?i(h):h);return a}function U(u,e){u.minX=Math.min(u.minX,e.minX),u.minY=Math.min(u.minY,e.minY),u.maxX=Math.max(u.maxX,e.maxX),u.maxY=Math.max(u.maxY,e.maxY)}function R(u,e){return u.minX-e.minX}function y(u,e){return u.minY-e.minY}function x(u){return(u.maxX-u.minX)*(u.maxY-u.minY)}function T(u){return u.maxX-u.minX+(u.maxY-u.minY)}function z(u,e){return(Math.max(e.maxX,u.maxX)-Math.min(e.minX,u.minX))*(Math.max(e.maxY,u.maxY)-Math.min(e.minY,u.minY))}function m(u,e){const s=Math.max(u.minX,e.minX),i=Math.max(u.minY,e.minY),a=Math.min(u.maxX,e.maxX),h=Math.min(u.maxY,e.maxY);return Math.max(0,a-s)*Math.max(0,h-i)}function g(u,e){return u.minX<=e.minX&&u.minY<=e.minY&&e.maxX<=u.maxX&&e.maxY<=u.maxY}function P(u,e){return e.minX<=u.maxX&&e.minY<=u.maxY&&e.maxX>=u.minX&&e.maxY>=u.minY}function Y(u,e,s,i,a){const h=[e,s];for(;h.length;){const f=(0,K.j0)(h.pop()),I=(0,K.j0)(h.pop());if(f-I<=i)continue;const M=I+Math.ceil((f-I)/i/2)*i;(0,N.q)(u,M,I,f,a),h.push(I,M,M,f)}}const V=new L.Z,k=new L.Z,A=new L.Z,q=new L.Z({deallocator:void 0});class re{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class oe extends re{constructor(){super(...arguments),this.height=1,this.indexHint=new O.SO}}class ee extends oe{constructor(e){super(),this.children=e,this.leaf=!0}}class te extends oe{constructor(e){super(),this.children=e,this.leaf=!1}}},61256:(se,W,d)=>{d.d(W,{H:()=>U});var O=d(8314),K=d(36592),L=d(65401);const b={minX:0,minY:0,maxX:0,maxY:0};class U{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new K.Q(9,(0,O.Z)("esri-csp-restrictions")?y=>({minX:y[0],minY:y[1],maxX:y[2],maxY:y[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const y=new Array(this._idByBounds.size);let x=0;this._idByBounds.forEach((T,z)=>{y[x++]=z}),this._indexInvalid=!1,this._index.clear(),this._index.load(y)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter(y=>this._idByBounds.has(y))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const y=(0,L.cS)();for(const x of this._boundsById.values())x&&(y[0]=Math.min(x[0],y[0]),y[1]=Math.min(x[1],y[1]),y[2]=Math.max(x[2],y[2]),y[3]=Math.max(x[3],y[3]));return y}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(y){const x=this._boundsById.get(y);this._boundsById.delete(y),x&&(this._idByBounds.delete(x),this._indexInvalid||this._index.remove(x))}forEachInBounds(y,x){this._loadIndex(),function C(R,y,x){(function v(R){b.minX=R[0],b.minY=R[1],b.maxX=R[2],b.maxY=R[3]})(y),R.search(b,x)}(this._index,y,T=>x(this._idByBounds.get(T)))}get(y){return this._boundsById.get(y)}has(y){return this._boundsById.has(y)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(y,x){if(!this._indexInvalid){const T=this._boundsById.get(y);T&&(this._index.remove(T),this._idByBounds.delete(T))}this._boundsById.set(y,x),x&&(this._idByBounds.set(x,y),this._indexInvalid||(this._boundsToLoad.push(x),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},3579:(se,W,d)=>{d.d(W,{Z:()=>T});var O=d(26584),K=d(61885),L=d(63290),N=d(62208),b=d(5548),v=d(65401),C=d(82054),U=d(61256),R=d(92794),y=d(6185);const x=(0,b.Ue)();class T{constructor(m){this.geometryInfo=m,this._boundsStore=new U.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new K.Z,this.featureAdapter=R.n}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let m=0;return this._featuresById.forEach(g=>{(0,N.pC)(g.geometry)&&g.geometry.coords&&(m+=g.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:m/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(m){if((0,N.Wi)(this.fullBounds))return null;const[g,P,Y,V]=this.fullBounds;return{xmin:g,ymin:P,xmax:Y,ymax:V,spatialReference:(0,y.S2)(m)}}add(m){this._add(m),this._emitChanged()}addMany(m){for(const g of m)this._add(g);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(m){const g=this._featuresById.get(m);return g?(this._remove(g),this._emitChanged(),g):null}removeManyById(m){this._boundsStore.invalidateIndex();for(const g of m){const P=this._featuresById.get(g);P&&this._remove(P)}this._emitChanged()}forEachBounds(m,g){for(const P of m){const Y=this._boundsStore.get(P.objectId);Y&&g((0,b.JR)(x,Y))}}getFeature(m){return this._featuresById.get(m)}has(m){return this._featuresById.has(m)}forEach(m){this._featuresById.forEach(g=>m(g))}forEachInBounds(m,g){this._boundsStore.forEachInBounds(m,P=>{g(this._featuresById.get(P))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let m=!1;this._featuresById.forEach((g,P)=>{this._markedIds.has(P)||(m=!0,this._remove(g))}),this._markedIds.clear(),m&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(m){if(!m)return;const g=m.objectId;if(null==g)return void L.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new O.Z("featurestore:invalid-feature","feature id is missing",{feature:m}));const P=this._featuresById.get(g);let Y;if(this._markedIds.add(g),P?(m.displayId=P.displayId,Y=this._boundsStore.get(g),this._boundsStore.delete(g)):(0,N.pC)(this.onFeatureAdd)&&this.onFeatureAdd(m),(0,N.Wi)(m.geometry)||!m.geometry.coords||!m.geometry.coords.length)return this._boundsStore.set(g,null),void this._featuresById.set(g,m);Y=(0,C.$)((0,N.pC)(Y)?Y:(0,v.Ue)(),m.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,N.pC)(Y)&&this._boundsStore.set(g,Y),this._featuresById.set(g,m)}_remove(m){(0,N.pC)(this.onFeatureRemove)&&this.onFeatureRemove(m);const g=m.objectId;return this._markedIds.delete(g),this._boundsStore.delete(g),this._featuresById.delete(g),m}}},92794:(se,W,d)=>{d.d(W,{n:()=>b});var O=d(62208),K=d(77044),L=d(66385),N=d(88071);const b={getObjectId:v=>v.objectId,getAttributes:v=>v.attributes,getAttribute:(v,C)=>v.attributes[C],cloneWithGeometry:(v,C)=>new L.u_(C,v.attributes,null,v.objectId),getGeometry:v=>v.geometry,getCentroid:(v,C)=>((0,O.Wi)(v.centroid)&&(v.centroid=(0,K.Y)(new N.Z,v.geometry,C.hasZ,C.hasM)),v.centroid)}},39155:(se,W,d)=>{d.r(W),d.d(W,{default:()=>pe});var O=d(15861),L=(d(29132),d(84792)),N=d(59213),b=d(26584),v=d(63290),C=d(10699),U=d(21726),R=d(55915),y=d(15994),x=d(37053),T=d(46367),z=d(66385),m=d(88071),g=d(3579),P=d(82959),Y=d(58175),V=d(75327),k=d(36630);const A=/^\s*"([\S\s]*)"\s*$/,q=/""/g,re="\n",oe=[","," ",";","|","\t"];function*ee(c,r,t){let n=0;for(;n<=c.length;){const o=c.indexOf(r,n),l=c.substring(n,o>-1?o:void 0);n+=l.length+r.length,t&&!l.trim()||(yield l)}}function te(c){const r=c.includes("\r\n")?"\r\n":re;return ee(c,r,!0)}function u(c,r){return ee(c,r,!1)}function*s(c,r,t,n=(()=>Object.create(null))){const o=te(c);o.next();let l="",_="",E=0,B=n(),S=0;e:for(const J of o){const G=u(J,t);for(const w of G)if(l+=_+w,_="",E+=h(w),E%2==0){if(E>0){const Q=A.exec(l);if(!Q){B=n(),S=0,l="",E=0;continue e}B[r[S]]=Q[1].replace(q,'"'),S++}else B[r[S]]=l,S++;l="",E=0}else _=t;0===E?(yield B,B=n(),S=0):_=re}}function i(c,r){const t=a(c,r).filter(o=>null!=o),n=t.map(o=>(0,k.q6)(o));for(let o=n.length-1;o>=0;o--)n[o]||(n.splice(o,1),t.splice(o,1));return{names:n,aliases:t}}function a(c,r){if(!c?.length)return[];const t=[];let n="",o="",l=0;const _=u(c,r);for(const E of _)if(n+=o+E,o="",l+=h(E),l%2==0){if(l>0){const B=A.exec(n);B&&t.push(B[1].replace(q,'"'))}else t.push(n);n="",l=0}else o=r;return t}function h(c){let r=0,t=0;for(t=c.indexOf('"',t);t>=0;)r++,t=c.indexOf('"',t+1);return r}function f(c,r,t){r=(0,k.q6)(r)?.toLowerCase(),t=(0,k.q6)(t)?.toLowerCase();const n=c.map(_=>_.toLowerCase()),o=r?c[n.indexOf(r)]:null,l=t?c[n.indexOf(t)]:null;return{longitudeFieldName:o||c[n.indexOf(ue.find(_=>n.includes(_)))],latitudeFieldName:l||c[n.indexOf(ae.find(_=>n.includes(_)))]}}function M(c){if(!c.length)return"string";const r=/[^+-.,0-9]/;return c.map(t=>{let n=!1;if(""!==t){if(r.test(t))n=!0;else{let o=F(t);if(!isNaN(o))return/[.,]/.test(t)||!Number.isInteger(o)||o>214783647||o<-214783648?"double":"integer";if(t.includes("E")){if(o=Number(t),!isNaN(o))return"double";if(t.includes(",")){if(t=t.replace(",","."),o=Number(t),!isNaN(o))return"double";n=!0}else n=!0}else n=!0}return n?/^[-]?\d*[.,]?\d*$/.test(t)?"string":j(new Date(t),t)?"date":"string":"string"}}).reduce((t,n)=>void 0===t?n:void 0===n?t:t===n?n:"string"===t||"string"===n?"string":"double"===t||"double"===n?"double":void 0)}function j(c,r){if(!c||"[object Date]"!==Object.prototype.toString.call(c)||isNaN(c.getTime()))return!1;let t=!0;if(!H&&/\d+\W*$/.test(r)){const n=r.match(/[a-zA-Z]{2,}/);if(n){let o=!1,l=0;for(;!o&&l<=n.length;)o=!Z.test(n[l]),l++;t=!o}}return t}const F=function(){const c=(0,V.lt)(),r=new RegExp("^"+c.regexp+"$"),t=new RegExp("["+c.group+"\\s\\xa0]","g"),n=c.factor;return o=>{const l=r.exec(o);if(c.factor=n,!l)return NaN;let _=l[1];if(!l[1]){if(!l[2])return NaN;_=l[2],c.factor*=-1}return _=_.replace(t,"").replace(c.decimal,"."),+_*c.factor}}(),Z=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,H=Number.isNaN(new Date("technology 10").getTime()),ae=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],ue=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"];var le=d(56554),de=d(60466),he=d(65234);const ce=(0,le.bU)("esriGeometryPoint"),me=["csv"],fe=[0,0];class _e{constructor(r,t){this.x=r,this.y=t}}class pe{constructor(){var r=this;this._queryEngine=null,this._snapshotFeatures=function(){var t=(0,O.Z)(function*(n){const o=yield r._fetch(n);return r._createFeatures(o)});return function(n){return t.apply(this,arguments)}}()}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}load(r,t={}){var n=this;return(0,O.Z)(function*(){n._loadOptions=r;const[o]=yield Promise.all([n._fetch(t.signal),n._checkProjection(r?.parsingOptions?.spatialReference)]),l=function ge(c,r){const t=r.parsingOptions||{},n={delimiter:t.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:t.latitudeField,longitudeFieldName:t.longitudeField}},o=n.layerDefinition={name:(0,U.vt)(r.url,me)||"csv",drawingInfo:ce,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:t.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:t.spatialReference||{wkid:4326}}},l=te(c),_=l.next().value?.trim(),E=l.next().value?.trim();if(!_)throw new b.Z("csv-layer:empty-csv","CSV is empty",{csv:c});const{delimiter:B,locationInfo:S}=function e(c,r,t){c=c.trim(),r=r?.trim();const n=[],o=Array.from(new Set([t?.delimiter,...oe])).filter(_=>null!=_);for(const _ of o){const E=a(c,_).length,B=a(r,_).length??E;E>1&&n.push({weight:Math.min(E,B),delimiter:_})}const l=n.sort(({weight:_},{weight:E})=>E-_).map(({delimiter:_})=>_);for(const _ of l){const E=f(i(c,_).names,t?.longitudeField,t?.latitudeField);if(E.longitudeFieldName&&E.latitudeFieldName)return{delimiter:_,locationInfo:E}}return{delimiter:l[0],locationInfo:null}}(_,E,t);if(!B)throw new b.Z("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:_,secondLine:E,parsingOptions:t});if(!S)throw new b.Z("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:_,secondLine:E,parsingOptions:t});n.locationInfo=S,n.delimiter=B;const{names:J,aliases:G}=i(_,B),w=function I(c,r,t,n,o){const l=[],_=s(c,t,r),E=[];for(const B of _){if(10===E.length)break;E.push(B)}for(let B=0;B<t.length;B++){const S=t[B],J=n[B];if(S===o.longitudeFieldName||S===o.latitudeFieldName)l.push({name:S,type:"esriFieldTypeDouble",alias:J});else{let G,w;switch(M(E.map(Q=>Q[S]))){case"integer":G="esriFieldTypeInteger";break;case"double":G="esriFieldTypeDouble";break;case"date":G="esriFieldTypeDate",w=36;break;default:G="esriFieldTypeString",w=255}l.push({name:S,type:G,alias:J,length:w})}}return l}(c,n.delimiter,J,G,n.locationInfo);if(t.fields?.length){const D=new de.Z(t.fields);for(const p of w){const $=D.get(p.name);$&&Object.assign(p,$)}}if(!w.some(D=>"esriFieldTypeOID"===D.type&&(o.objectIdField=D.name,!0))){const D={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};o.objectIdField=D.name,w.unshift(D)}o.fields=w;const Q=new de.Z(o.fields);if(n.locationInfo&&(n.locationInfo.latitudeFieldName=Q.get(n.locationInfo.latitudeFieldName).name,n.locationInfo.longitudeFieldName=Q.get(n.locationInfo.longitudeFieldName).name),o.timeInfo){const D=o.timeInfo;if(D.startTimeField){const p=Q.get(D.startTimeField);p?(D.startTimeField=p.name,p.type="esriFieldTypeDate"):D.startTimeField=null}if(D.endTimeField){const p=Q.get(D.endTimeField);p?(D.endTimeField=p.name,p.type="esriFieldTypeDate"):D.endTimeField=null}if(D.trackIdField){const p=Q.get(D.trackIdField);D.trackIdField=p?p.name:null}D.startTimeField||D.endTimeField||(o.timeInfo=null)}return n}(o,r);n._locationInfo=l.locationInfo,n._delimiter=l.delimiter,n._queryEngine=n._createQueryEngine(l);const _=yield n._createFeatures(o);n._queryEngine.featureStore.addMany(_);const{fullExtent:E,timeExtent:B}=yield n._queryEngine.fetchRecomputedExtents();if(l.layerDefinition.extent=E,B){const{start:S,end:J}=B;l.layerDefinition.timeInfo.timeExtent=[S,J]}return l})()}applyEdits(){return(0,O.Z)(function*(){throw new b.Z("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")})()}queryFeatures(r={},t={}){var n=this;return(0,O.Z)(function*(){return yield n._waitSnapshotComplete(),n._queryEngine.executeQuery(r,t.signal)})()}queryFeatureCount(r={},t={}){var n=this;return(0,O.Z)(function*(){return yield n._waitSnapshotComplete(),n._queryEngine.executeQueryForCount(r,t.signal)})()}queryObjectIds(r={},t={}){var n=this;return(0,O.Z)(function*(){return yield n._waitSnapshotComplete(),n._queryEngine.executeQueryForIds(r,t.signal)})()}queryExtent(r={},t={}){var n=this;return(0,O.Z)(function*(){return yield n._waitSnapshotComplete(),n._queryEngine.executeQueryForExtent(r,t.signal)})()}querySnapping(r,t={}){var n=this;return(0,O.Z)(function*(){return yield n._waitSnapshotComplete(),n._queryEngine.executeQueryForSnapping(r,t.signal)})()}refresh(r){var t=this;return(0,O.Z)(function*(){t._loadOptions.customParameters=r,t._snapshotTask?.abort(),t._snapshotTask=(0,N.vr)(t._snapshotFeatures),t._snapshotTask.promise.then(l=>{t._queryEngine.featureStore.clear(),l&&t._queryEngine.featureStore.addMany(l)},l=>{t._queryEngine.featureStore.clear(),(0,C.D_)(l)||v.Z.getLogger("esri.layers.CSVLayer").error(new b.Z("csv-layer:refresh","An error occurred during refresh",{error:l}))}),yield t._waitSnapshotComplete();const{fullExtent:n,timeExtent:o}=yield t._queryEngine.fetchRecomputedExtents();return{extent:n,timeExtent:o}})()}_waitSnapshotComplete(){var r=this;return(0,O.Z)(function*(){if(r._snapshotTask&&!r._snapshotTask.finished){try{yield r._snapshotTask.promise}catch{}return r._waitSnapshotComplete()}})()}_fetch(r){var t=this;return(0,O.Z)(function*(){const{url:n,customParameters:o}=t._loadOptions;if(!n)throw new b.Z("csv-layer:invalid-source","url not defined");const l=(0,U.mN)(n);return(yield(0,L.default)(l.path,{query:{...l.query,...o},responseType:"text",signal:r})).data})()}_createQueryEngine(r){const{objectIdField:t,fields:n,extent:o,timeInfo:l}=r.layerDefinition,_=new g.Z({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new Y.q({fields:n,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:l,objectIdField:t,spatialReference:o.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:_})}_createFeatures(r){var t=this;return(0,O.Z)(function*(){const{latitudeFieldName:n,longitudeFieldName:o}=t._locationInfo,{objectIdField:l,fieldsIndex:_,spatialReference:E}=t._queryEngine;let B=[];const S=[],J=_.fields.filter(p=>p.name!==l).map(p=>p.name);let G=0;const w={};for(const p of _.fields)if("esriFieldTypeOID"!==p.type&&"esriFieldTypeGlobalID"!==p.type){const $=(0,k.os)(p);void 0!==$&&(w[p.name]=$)}const Q=s(r,J,t._delimiter,(0,le.Dm)(w,l));for(const p of Q){const $=t._parseCoordinateValue(p[n]),ne=t._parseCoordinateValue(p[o]);if(null!=ne&&null!=$&&!isNaN($)&&!isNaN(ne)){p[n]=$,p[o]=ne;for(const X in p)if(X!==n&&X!==o)if(_.isDateField(X)){const ie=new Date(p[X]);p[X]=j(ie,p[X])?ie.getTime():null}else if(_.isNumericField(X)){const ie=F(p[X]);p[X]=isNaN(ie)?null:ie}p[l]=G,G++,B.push(new _e(ne,$)),S.push(p)}}if(!(0,x.fS)({wkid:4326},E))if((0,x.sS)(E))for(const p of B)[p.x,p.y]=(0,T.hG)(p.x,p.y,fe);else B=(0,R.oj)(y.N,B,he.Z.WGS84,E,null,null);const D=[];for(let p=0;p<B.length;p++){const{x:$,y:ne}=B[p],X=S[p];X[l]=p+1,D.push(new z.u_(new m.Z([],[$,ne]),X,null,X[l]))}return D})()}_parseCoordinateValue(r){if(null==r||""===r)return null;let t=F(r);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(r)),t}_checkProjection(r){return(0,O.Z)(function*(){try{yield(0,P._W)(x.Zn,r)}catch{throw new b.Z("csv-layer:projection-not-supported","Projection not supported")}})()}}},56554:(se,W,d)=>{d.d(W,{Dm:()=>U,Hq:()=>R,MS:()=>y,bU:()=>b});var O=d(8314),K=d(58817),L=d(87757),N=d(24837);function b(x){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===x||"esriGeometryMultipoint"===x?N.I4:"esriGeometryPolyline"===x?N.ET:N.lF}}}const v=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let C=1;function U(x,T){if((0,O.Z)("esri-csp-restrictions"))return()=>({[T]:null,...x});try{let z=`this.${T} = null;`;for(const g in x)z+=`this${v.test(g)?`.${g}`:`["${g}"]`} = ${JSON.stringify(x[g])};`;const m=new Function(`\n      return class AttributesClass$${C++} {\n        constructor() {\n          ${z};\n        }\n      }\n    `)();return()=>new m}catch{return()=>({[T]:null,...x})}}function R(x={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,K.d9)(x)}}]}function y(x,T){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:x},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:T,supportsDelete:T,supportsEditing:T,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:T,supportsExceedsLimitStatistics:!0},query:L.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:T,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);