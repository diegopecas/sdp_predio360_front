"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[5372],{55372:(X,N,A)=>{A.r(N),A.d(N,{isAnimatedPNG:()=>z,isPNG:()=>R,parseApng:()=>V});var G=A(15861),B=A(1719),S=A(10699),H=A(27422),T={exports:{}};T.exports=function(y){var l={};function s(a){if(l[a])return l[a].exports;var h=l[a]={exports:{},id:a,loaded:!1};return y[a].call(h.exports,h,h.exports,s),h.loaded=!0,h.exports}return s.m=y,s.c=l,s.p="",s(0)}([function(y,l,s){Object.defineProperty(l,"__esModule",{value:!0}),l.isNotPNG=function n(u){return u===b},l.isNotAPNG=function r(u){return u===e},l.default=function t(u){var v=new Uint8Array(u);if(Array.prototype.some.call(i,function(E,w){return E!==v[w]}))return b;var g=!1;if(o(v,function(E){return!(g="acTL"===E)}),!g)return e;var d=[],F=[],L=null,c=null,M=0,O=new h.APNG;if(o(v,function(E,w,p,k){var P=new DataView(w.buffer);switch(E){case"IHDR":L=w.subarray(p+8,p+8+k),O.width=P.getUint32(p+8),O.height=P.getUint32(p+12);break;case"acTL":O.numPlays=P.getUint32(p+8+4);break;case"fcTL":c&&(O.frames.push(c),M++),(c=new h.Frame).width=P.getUint32(p+8+4),c.height=P.getUint32(p+8+8),c.left=P.getUint32(p+8+12),c.top=P.getUint32(p+8+16);var Q=P.getUint16(p+8+20),D=P.getUint16(p+8+22);0===D&&(D=100),c.delay=1e3*Q/D,c.delay<=10&&(c.delay=100),O.playTime+=c.delay,c.disposeOp=P.getUint8(p+8+24),c.blendOp=P.getUint8(p+8+25),c.dataParts=[],0===M&&2===c.disposeOp&&(c.disposeOp=1);break;case"fdAT":c&&c.dataParts.push(w.subarray(p+8+4,p+8+k));break;case"IDAT":c&&c.dataParts.push(w.subarray(p+8,p+8+k));break;case"IEND":F.push(U(w,p,12+k));break;default:d.push(U(w,p,12+k))}}),c&&O.frames.push(c),0==O.frames.length)return e;var Z=new Blob(d),J=new Blob(F);return O.frames.forEach(function(E){var w=[];w.push(i),L.set(C(E.width),0),L.set(C(E.height),4),w.push(j("IHDR",L)),w.push(Z),E.dataParts.forEach(function(p){return w.push(j("IDAT",p))}),w.push(J),E.imageData=new Blob(w,{type:"image/png"}),delete E.dataParts,w=null}),O};var a=function f(u){return u&&u.__esModule?u:{default:u}}(s(1)),h=s(2),b=new Error("Not a PNG"),e=new Error("Not an animated PNG"),i=new Uint8Array([137,80,78,71,13,10,26,10]);function o(u,v){var g=new DataView(u.buffer),d=8,F=void 0,L=void 0,c=void 0;do{L=g.getUint32(d),c=v(F=_(u,d+4,4),u,d,L),d+=12+L}while(!1!==c&&"IEND"!=F&&d<u.length)}function _(u,v,g){var d=Array.prototype.slice.call(u.subarray(v,v+g));return String.fromCharCode.apply(String,d)}function U(u,v,g){var d=new Uint8Array(g);return d.set(u.subarray(v,v+g)),d}var j=function(u,v){var g=u.length+v.length,d=new Uint8Array(g+8),F=new DataView(d.buffer);F.setUint32(0,v.length),d.set(function m(u){for(var v=new Uint8Array(u.length),g=0;g<u.length;g++)v[g]=u.charCodeAt(g);return v}(u),4),d.set(v,8);var L=(0,a.default)(d,4,g);return F.setUint32(g+4,L),d},C=function(u){return new Uint8Array([u>>>24&255,u>>>16&255,u>>>8&255,255&u])}},function(y,l){Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(b){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=-1,r=e,i=e+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:b.length-e);r<i;r++)n=n>>>8^s[255&(n^b[r])];return-1^n};for(var s=new Uint32Array(256),a=0;a<256;a++){for(var h=a,f=0;f<8;f++)h=1&h?3988292384^h>>>1:h>>>1;s[a]=h}},function(y,l,s){Object.defineProperty(l,"__esModule",{value:!0}),l.Frame=l.APNG=void 0;var a=function(){function e(n,r){for(var i=0;i<r.length;i++){var t=r[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(n,r,i){return r&&e(n.prototype,r),i&&e(n,i),n}}(),h=function f(e){return e&&e.__esModule?e:{default:e}}(s(3));function b(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}l.APNG=function(){function e(){b(this,e),this.width=0,this.height=0,this.numPlays=0,this.playTime=0,this.frames=[]}return a(e,[{key:"createImages",value:function(){return Promise.all(this.frames.map(function(n){return n.createImage()}))}},{key:"getPlayer",value:function(n){var r=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.createImages().then(function(){return new h.default(r,n,i)})}}]),e}(),l.Frame=function(){function e(){b(this,e),this.left=0,this.top=0,this.width=0,this.height=0,this.delay=0,this.disposeOp=0,this.blendOp=0,this.imageData=null,this.imageElement=null}return a(e,[{key:"createImage",value:function(){var n=this;return this.imageElement?Promise.resolve():new Promise(function(r,i){var t=URL.createObjectURL(n.imageData);n.imageElement=document.createElement("img"),n.imageElement.onload=function(){URL.revokeObjectURL(t),r()},n.imageElement.onerror=function(){URL.revokeObjectURL(t),n.imageElement=null,i(new Error("Image creation error"))},n.imageElement.src=t})}}]),e}()},function(y,l,s){Object.defineProperty(l,"__esModule",{value:!0});var a=function(){function r(i,t){for(var o=0;o<t.length;o++){var _=t[o];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(i,_.key,_)}}return function(i,t,o){return t&&r(i.prototype,t),o&&r(i,o),i}}(),n=function(r){function i(t,o,_){!function f(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}(this,i);var m=function b(r,i){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!i||"object"!=typeof i&&"function"!=typeof i?r:i}(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return m.playbackRate=1,m._currentFrameNumber=0,m._ended=!1,m._paused=!0,m._numPlays=0,m._apng=t,m.context=o,m.stop(),_&&m.play(),m}return function e(r,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function, not "+typeof i);r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(r,i):r.__proto__=i)}(i,r),a(i,[{key:"renderNextFrame",value:function(){this._currentFrameNumber=(this._currentFrameNumber+1)%this._apng.frames.length,this._currentFrameNumber===this._apng.frames.length-1&&(this._numPlays++,0!==this._apng.numPlays&&this._numPlays>=this._apng.numPlays&&(this._ended=!0,this._paused=!0)),this._prevFrame&&1==this._prevFrame.disposeOp?this.context.clearRect(this._prevFrame.left,this._prevFrame.top,this._prevFrame.width,this._prevFrame.height):this._prevFrame&&2==this._prevFrame.disposeOp&&this.context.putImageData(this._prevFrameData,this._prevFrame.left,this._prevFrame.top);var t=this.currentFrame;this._prevFrame=t,this._prevFrameData=null,2==t.disposeOp&&(this._prevFrameData=this.context.getImageData(t.left,t.top,t.width,t.height)),0==t.blendOp&&this.context.clearRect(t.left,t.top,t.width,t.height),this.context.drawImage(t.imageElement,t.left,t.top),this.emit("frame",this._currentFrameNumber),this._ended&&this.emit("end")}},{key:"play",value:function(){var t=this;this.emit("play"),this._ended&&this.stop(),this._paused=!1;var o=performance.now()+this.currentFrame.delay/this.playbackRate;requestAnimationFrame(function m(U){if(!t._ended&&!t._paused){if(U>=o){for(;U-o>=t._apng.playTime/t.playbackRate;)o+=t._apng.playTime/t.playbackRate,t._numPlays++;do{t.renderNextFrame(),o+=t.currentFrame.delay/t.playbackRate}while(!t._ended&&U>o)}requestAnimationFrame(m)}})}},{key:"pause",value:function(){this._paused||(this.emit("pause"),this._paused=!0)}},{key:"stop",value:function(){this.emit("stop"),this._numPlays=0,this._ended=!1,this._paused=!0,this._currentFrameNumber=-1,this.context.clearRect(0,0,this._apng.width,this._apng.height),this.renderNextFrame()}},{key:"currentFrameNumber",get:function(){return this._currentFrameNumber}},{key:"currentFrame",get:function(){return this._apng.frames[this._currentFrameNumber]}},{key:"paused",get:function(){return this._paused}},{key:"ended",get:function(){return this._ended}}]),i}(function h(r){return r&&r.__esModule?r:{default:r}}(s(4)).default);l.default=n},function(y,l){function s(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function a(e){return"function"==typeof e}function f(e){return"object"==typeof e&&null!==e}function b(e){return void 0===e}y.exports=s,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._maxListeners=void 0,s.defaultMaxListeners=10,s.prototype.setMaxListeners=function(e){if(!function h(e){return"number"==typeof e}(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},s.prototype.emit=function(e){var n,r,i,t,o,_;if(this._events||(this._events={}),"error"===e&&(!this._events.error||f(this._events.error)&&!this._events.error.length)){if((n=arguments[1])instanceof Error)throw n;var m=new Error('Uncaught, unspecified "error" event. ('+n+")");throw m.context=n,m}if(b(r=this._events[e]))return!1;if(a(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:t=Array.prototype.slice.call(arguments,1),r.apply(this,t)}else if(f(r))for(t=Array.prototype.slice.call(arguments,1),i=(_=r.slice()).length,o=0;o<i;o++)_[o].apply(this,t);return!0},s.prototype.on=s.prototype.addListener=function(e,n){var r;if(!a(n))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,a(n.listener)?n.listener:n),this._events[e]?f(this._events[e])?this._events[e].push(n):this._events[e]=[this._events[e],n]:this._events[e]=n,f(this._events[e])&&!this._events[e].warned&&(r=b(this._maxListeners)?s.defaultMaxListeners:this._maxListeners)&&r>0&&this._events[e].length>r&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},s.prototype.once=function(e,n){if(!a(n))throw TypeError("listener must be a function");var r=!1;function i(){this.removeListener(e,i),r||(r=!0,n.apply(this,arguments))}return i.listener=n,this.on(e,i),this},s.prototype.removeListener=function(e,n){var r,i,t,o;if(!a(n))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(t=(r=this._events[e]).length,i=-1,r===n||a(r.listener)&&r.listener===n)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,n);else if(f(r)){for(o=t;o-- >0;)if(r[o]===n||r[o].listener&&r[o].listener===n){i=o;break}if(i<0)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,n)}return this},s.prototype.removeAllListeners=function(e){var n,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(n in this._events)"removeListener"!==n&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events={},this}if(a(r=this._events[e]))this.removeListener(e,r);else if(r)for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},s.prototype.listeners=function(e){return this._events&&this._events[e]?a(this._events[e])?[this._events[e]]:this._events[e].slice():[]},s.prototype.listenerCount=function(e){if(this._events){var n=this._events[e];if(a(n))return 1;if(n)return n.length}return 0},s.listenerCount=function(e,n){return e.listenerCount(n)}}]);const K=(0,B.g)(T.exports);function V(y,l){return x.apply(this,arguments)}function x(){return(x=(0,G.Z)(function*(y,l){const s=K(y);if(s instanceof Error)throw s;yield s.createImages(),(0,S.k_)(l);const{frames:a,width:h,height:f}=s,b=document.createElement("canvas");b.width=h,b.height=f;const e=b.getContext("2d",{willReadFrequently:!0}),n=[],r=[];let i=0;for(const t of a){const o=(0,H.HA)(t.delay||100);r.push(o),i+=o;const _=t.imageElement;e.globalCompositeOperation=0===t.blendOp?"copy":"source-over";const m=2===t.disposeOp?e.getImageData(t.left,t.top,t.width,t.height):void 0;e.drawImage(_,t.left,t.top);const U=e.getImageData(0,0,h,f);n.push(U),0===t.disposeOp||(1===t.disposeOp?e.clearRect(t.left,t.top,t.width,t.height):2===t.disposeOp&&e.putImageData(m,t.left,t.top))}return{frameCount:a.length,duration:i,frameDurations:r,getFrame:t=>n[t],width:h,height:f}})).apply(this,arguments)}const W=[137,80,78,71,13,10,26,10];function R(y){const l=new Uint8Array(y);return!W.some((s,a)=>s!==l[a])}function z(y){if(!R(y))return!1;const l=new DataView(y),s=new Uint8Array(y);let a,h=8;do{const f=l.getUint32(h);if(a=String.fromCharCode.apply(String,Array.prototype.slice.call(s.subarray(h+4,h+8))),"acTL"===a)return!0;h+=12+f}while("IEND"!==a&&h<s.length);return!1}}}]);