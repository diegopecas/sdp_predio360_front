"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[1002],{81002:(Le,pr,ur)=>{ur.r(pr),ur.d(pr,{l:()=>tt});var sr,Qr=ur(1719),yr={exports:{}};sr=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0,yr.exports=function(wr={}){var _r,q,i=wr;i.ready=new Promise((r,t)=>{_r=r,q=t});var br=Object.assign({},i),Ar="./this.program",et=!0,k="";typeof document<"u"&&document.currentScript&&(k=document.currentScript.src),sr&&(k=sr),k=0!==k.indexOf("blob:")?k.substr(0,k.replace(/[?#].*/,"").lastIndexOf("/")+1):"",i.print||console.log.bind(console);var V,K,B=i.printErr||console.error.bind(console);Object.assign(i,br),br=null,i.thisProgram&&(Ar=i.thisProgram),i.wasmBinary&&(V=i.wasmBinary),"object"!=typeof WebAssembly&&Z("no native wasm support detected");var O,T,z,X,y,v,Tr,Cr,Fr=!1;function Er(){var r=K.buffer;i.HEAP8=O=new Int8Array(r),i.HEAP16=z=new Int16Array(r),i.HEAPU8=T=new Uint8Array(r),i.HEAPU16=X=new Uint16Array(r),i.HEAP32=y=new Int32Array(r),i.HEAPU32=v=new Uint32Array(r),i.HEAPF32=Tr=new Float32Array(r),i.HEAPF64=Cr=new Float64Array(r)}var Wr=[],Pr=[],Sr=[],$=0,L=null;function Z(r){i.onAbort&&i.onAbort(r),B(r="Aborted("+r+")"),Fr=!0,r+=". Build with -sASSERTIONS for more info.";var t=new WebAssembly.RuntimeError(r);throw q(t),t}var N,Or=r=>r.startsWith("data:application/octet-stream;base64,");function jr(r){if(r==N&&V)return new Uint8Array(V);throw"both async and sync fetching of the wasm failed"}function Dr(r,t,e){return function mt(r){return!V&&et&&"function"==typeof fetch?fetch(r,{credentials:"same-origin"}).then(t=>{if(!t.ok)throw"failed to load wasm binary file at '"+r+"'";return t.arrayBuffer()}).catch(()=>jr(r)):Promise.resolve().then(()=>jr(r))}(r).then(n=>WebAssembly.instantiate(n,t)).then(n=>n).then(e,n=>{B(`failed to asynchronously prepare wasm: ${n}`),Z(n)})}Or(N="lyr3DMain.wasm")||(N=function nt(r){return i.locateFile?i.locateFile(r,k):k+r}(N));var lr=r=>{for(;r.length>0;)r.shift()(i)};function gt(r){this.excPtr=r,this.ptr=r-24,this.set_type=function(t){v[this.ptr+4>>2]=t},this.get_type=function(){return v[this.ptr+4>>2]},this.set_destructor=function(t){v[this.ptr+8>>2]=t},this.get_destructor=function(){return v[this.ptr+8>>2]},this.set_caught=function(t){O[this.ptr+12>>0]=t=t?1:0},this.get_caught=function(){return 0!=O[this.ptr+12>>0]},this.set_rethrown=function(t){O[this.ptr+13>>0]=t=t?1:0},this.get_rethrown=function(){return 0!=O[this.ptr+13>>0]},this.init=function(t,e){this.set_adjusted_ptr(0),this.set_type(t),this.set_destructor(e)},this.set_adjusted_ptr=function(t){v[this.ptr+16>>2]=t},this.get_adjusted_ptr=function(){return v[this.ptr+16>>2]},this.get_exception_ptr=function(){if(Xr(this.get_type()))return v[this.excPtr>>2];var t=this.get_adjusted_ptr();return 0!==t?t:this.excPtr}}var Q={},cr=r=>{for(;r.length;){var t=r.pop();r.pop()(t)}};function rr(r){return this.fromWireType(y[r>>2])}var Mr,Rr,xr,U={},I={},tr={},kr=r=>{throw new Mr(r)},fr=(r,t,e)=>{function n(s){var c=e(s);c.length!==r.length&&kr("Mismatched type converter count");for(var f=0;f<r.length;++f)j(r[f],c[f])}r.forEach(function(s){tr[s]=t});var a=new Array(t.length),o=[],l=0;t.forEach((s,c)=>{I.hasOwnProperty(s)?a[c]=I[s]:(o.push(s),U.hasOwnProperty(s)||(U[s]=[]),U[s].push(()=>{a[c]=I[s],++l===o.length&&n(a)}))}),0===o.length&&n(a)},er={},_=r=>{for(var t="",e=r;T[e];)t+=Rr[T[e++]];return t},E=r=>{throw new xr(r)};function j(r,t,e={}){if(!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function Tt(r,t,e={}){var n=t.name;if(r||E(`type "${n}" must have a positive integer typeid pointer`),I.hasOwnProperty(r)){if(e.ignoreDuplicateRegistrations)return;E(`Cannot register type '${n}' twice`)}if(I[r]=t,delete tr[r],U.hasOwnProperty(r)){var a=U[r];delete U[r],a.forEach(o=>o())}}(r,t,e)}function $r(){this.allocated=[void 0],this.freelist=[]}var H,Hr,P=new $r,Ir=r=>{r>=P.reserved&&0==--P.get(r).refcount&&P.free(r)},M_toValue=r=>(r||E("Cannot use deleted val. handle = "+r),P.get(r).value),M_toHandle=r=>{switch(r){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return P.allocate({refcount:1,value:r})}},St=(r,t)=>{switch(t){case 4:return function(e){return this.fromWireType(Tr[e>>2])};case 8:return function(e){return this.fromWireType(Cr[e>>3])};default:throw new TypeError(`invalid float width (${t}): ${r}`)}},Mt=r=>{if(void 0===r)return"_unknown";var t=(r=r.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return t>=48&&t<=57?`_${r}`:r},xt=(r,t,e)=>{if(void 0===r[t].overloadTable){var n=r[t];r[t]=function(){return r[t].overloadTable.hasOwnProperty(arguments.length)||E(`Function '${e}' called with an invalid number of arguments (${arguments.length}) - expects one of (${r[t].overloadTable})!`),r[t].overloadTable[arguments.length].apply(this,arguments)},r[t].overloadTable=[],r[t].overloadTable[n.argCount]=n}},G=[],dr=r=>{var t=G[r];return t||(r>=G.length&&(G.length=r+1),G[r]=t=H.get(r)),t},Ut=(r,t,e)=>r.includes("j")?((r,t,e)=>{var n=i["dynCall_"+r];return e&&e.length?n.apply(null,[t].concat(e)):n.call(null,t)})(r,t,e):dr(t).apply(null,e),R=(r,t)=>{r=_(r);var n=function e(){return r.includes("j")?((r,t)=>{var e=[];return function(){return e.length=0,Object.assign(e,arguments),Ut(r,t,e)}})(r,t):dr(t)}();return"function"!=typeof n&&E(`unknown function pointer with signature ${r}: ${t}`),n},Ur=r=>{var t=Kr(r),e=_(t);return x(t),e},Gt=(r,t,e)=>{switch(t){case 1:return e?n=>O[n>>0]:n=>T[n>>0];case 2:return e?n=>z[n>>1]:n=>X[n>>1];case 4:return e?n=>y[n>>2]:n=>v[n>>2];default:throw new TypeError(`invalid integer width (${t}): ${r}`)}};function Kt(r){return this.fromWireType(v[r>>2])}var Y,r,e,Yr=(r,t,e,n)=>{if(!(n>0))return 0;for(var a=e,o=e+n-1,l=0;l<r.length;++l){var s=r.charCodeAt(l);if(s>=55296&&s<=57343&&(s=65536+((1023&s)<<10)|1023&r.charCodeAt(++l)),s<=127){if(e>=o)break;t[e++]=s}else if(s<=2047){if(e+1>=o)break;t[e++]=192|s>>6,t[e++]=128|63&s}else if(s<=65535){if(e+2>=o)break;t[e++]=224|s>>12,t[e++]=128|s>>6&63,t[e++]=128|63&s}else{if(e+3>=o)break;t[e++]=240|s>>18,t[e++]=128|s>>12&63,t[e++]=128|s>>6&63,t[e++]=128|63&s}}return t[e]=0,e-a},Vr=r=>{for(var t=0,e=0;e<r.length;++e){var n=r.charCodeAt(e);n<=127?t++:n<=2047?t+=2:n>=55296&&n<=57343?(t+=4,++e):t+=3}return t},Br=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,nr=(r,t)=>r?((r,t,e)=>{for(var n=t+e,a=t;r[a]&&!(a>=n);)++a;if(a-t>16&&r.buffer&&Br)return Br.decode(r.subarray(t,a));for(var o="";t<a;){var l=r[t++];if(128&l){var s=63&r[t++];if(192!=(224&l)){var c=63&r[t++];if((l=224==(240&l)?(15&l)<<12|s<<6|c:(7&l)<<18|s<<12|c<<6|63&r[t++])<65536)o+=String.fromCharCode(l);else{var f=l-65536;o+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else o+=String.fromCharCode((31&l)<<6|s)}else o+=String.fromCharCode(l)}return o})(T,r,t):"",zr=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,re=(r,t)=>{for(var e=r,n=e>>1,a=n+t/2;!(n>=a)&&X[n];)++n;if((e=n<<1)-r>32&&zr)return zr.decode(T.subarray(r,e));for(var o="",l=0;!(l>=t/2);++l){var s=z[r+2*l>>1];if(0==s)break;o+=String.fromCharCode(s)}return o},te=(r,t,e)=>{if(void 0===e&&(e=2147483647),e<2)return 0;for(var n=t,a=(e-=2)<2*r.length?e/2:r.length,o=0;o<a;++o){var l=r.charCodeAt(o);z[t>>1]=l,t+=2}return z[t>>1]=0,t-n},ee=r=>2*r.length,ne=(r,t)=>{for(var e=0,n="";!(e>=t/4);){var a=y[r+4*e>>2];if(0==a)break;if(++e,a>=65536){var o=a-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(a)}return n},ae=(r,t,e)=>{if(void 0===e&&(e=2147483647),e<4)return 0;for(var n=t,a=n+e-4,o=0;o<r.length;++o){var l=r.charCodeAt(o);if(l>=55296&&l<=57343&&(l=65536+((1023&l)<<10)|1023&r.charCodeAt(++o)),y[t>>2]=l,(t+=4)+4>a)break}return y[t>>2]=0,t-n},oe=r=>{for(var t=0,e=0;e<r.length;++e){var n=r.charCodeAt(e);n>=55296&&n<=57343&&++e,t+=4}return t},me={},Ce=r=>{var t=(r-K.buffer.byteLength+65535)/65536;try{return K.grow(t),Er(),1}catch{}},hr={},J=()=>{if(!J.strings){var r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:Ar||"./this.program"};for(var t in hr)void 0===hr[t]?delete r[t]:r[t]=hr[t];var e=[];for(var t in r)e.push(`${t}=${r[t]}`);J.strings=e}return J.strings},ar=r=>r%4==0&&(r%100!=0||r%400==0),Lr=[31,29,31,30,31,30,31,31,30,31,30,31],Nr=[31,28,31,30,31,30,31,31,30,31,30,31],je=(r,t)=>{for(var e=new Date(r.getTime());t>0;){var n=ar(e.getFullYear()),a=e.getMonth(),o=(n?Lr:Nr)[a];if(!(t>o-e.getDate()))return e.setDate(e.getDate()+t),e;t-=o-e.getDate()+1,e.setDate(1),a<11?e.setMonth(a+1):(e.setMonth(0),e.setFullYear(e.getFullYear()+1))}return e},Gr=(r,t)=>{r<128?t.push(r):t.push(r%128|128,r>>7)},Jr=[],qr=(r,t)=>{H.set(r,t),G[r]=H.get(r)};Mr=i.InternalError=class extends Error{constructor(r){super(r),this.name="InternalError"}},(()=>{for(var r=new Array(256),t=0;t<256;++t)r[t]=String.fromCharCode(t);Rr=r})(),xr=i.BindingError=class extends Error{constructor(r){super(r),this.name="BindingError"}},function Ft(){Object.assign($r.prototype,{get(r){return this.allocated[r]},has(r){return void 0!==this.allocated[r]},allocate(r){var t=this.freelist.pop()||this.allocated.length;return this.allocated[t]=r,t},free(r){this.allocated[r]=void 0,this.freelist.push(r)}})}(),P.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),P.reserved=P.allocated.length,i.count_emval_handles=()=>{for(var r=0,t=P.reserved;t<P.allocated.length;++t)void 0!==P.allocated[t]&&++r;return r},Hr=i.UnboundTypeError=(r=Error,e=function Vt(r,t){return{[r=Mt(r)]:function(){return t.apply(this,arguments)}}[r]}("UnboundTypeError",function(n){this.name="UnboundTypeError",this.message=n;var a=new Error(n).stack;void 0!==a&&(this.stack=this.toString()+"\n"+a.replace(/^Error(:[^\n]*)?\n/,""))}),e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:`${this.name}: ${this.message}`},e);var Be={m:(r,t,e)=>{throw new gt(r).init(t,e),r},k:r=>{var t=Q[r];delete Q[r];var e=t.elements,n=e.length,a=e.map(s=>s.getterReturnType).concat(e.map(s=>s.setterArgumentType)),o=t.rawConstructor,l=t.rawDestructor;fr([r],a,function(s){return e.forEach((c,f)=>{var h=s[f],m=c.getter,p=c.getterContext,g=s[f+n],b=c.setter,W=c.setterContext;c.read=A=>h.fromWireType(m(p,A)),c.write=(A,S)=>{var u=[];b(W,A,g.toWireType(u,S)),cr(u)}}),[{name:t.name,fromWireType:c=>{for(var f=new Array(n),h=0;h<n;++h)f[h]=e[h].read(c);return l(c),f},toWireType:(c,f)=>{if(n!==f.length)throw new TypeError(`Incorrect number of tuple elements for ${t.name}: expected=${n}, actual=${f.length}`);for(var h=o(),m=0;m<n;++m)e[m].write(h,f[m]);return null!==c&&c.push(l,h),h},argPackAdvance:8,readValueFromPointer:rr,destructorFunction:l}]})},s:r=>{var t=er[r];delete er[r];var e=t.rawConstructor,n=t.rawDestructor,a=t.fields,o=a.map(l=>l.getterReturnType).concat(a.map(l=>l.setterArgumentType));fr([r],o,l=>{var s={};return a.forEach((c,f)=>{var m=l[f],p=c.getter,g=c.getterContext,b=l[f+a.length],W=c.setter,A=c.setterContext;s[c.fieldName]={read:S=>m.fromWireType(p(g,S)),write:(S,u)=>{var d=[];W(A,S,b.toWireType(d,u)),cr(d)}}}),[{name:t.name,fromWireType:c=>{var f={};for(var h in s)f[h]=s[h].read(c);return n(c),f},toWireType:(c,f)=>{for(var h in s)if(!(h in f))throw new TypeError(`Missing field: "${h}"`);var m=e();for(h in s)s[h].write(m,f[h]);return null!==c&&c.push(n,m),m},argPackAdvance:8,readValueFromPointer:rr,destructorFunction:n}]})},u:(r,t,e,n,a)=>{},B:(r,t,e,n)=>{j(r,{name:t=_(t),fromWireType:function(a){return!!a},toWireType:function(a,o){return o?e:n},argPackAdvance:8,readValueFromPointer:function(a){return this.fromWireType(T[a])},destructorFunction:null})},A:(r,t)=>{j(r,{name:t=_(t),fromWireType:e=>{var n=M_toValue(e);return Ir(e),n},toWireType:(e,n)=>M_toHandle(n),argPackAdvance:8,readValueFromPointer:rr,destructorFunction:null})},r:(r,t,e)=>{j(r,{name:t=_(t),fromWireType:n=>n,toWireType:(n,a)=>a,argPackAdvance:8,readValueFromPointer:St(t,e),destructorFunction:null})},c:(r,t,e,n,a,o,l)=>{var s=((r,t)=>{for(var e=[],n=0;n<r;n++)e.push(v[t+4*n>>2]);return e})(t,e);r=(r=>{const t=(r=r.trim()).indexOf("(");return-1!==t?(function at(r,t){r||Z(t)}(")"==r[r.length-1],"Parentheses for argument names should match."),r.substr(0,t)):r})(r=_(r)),a=R(n,a),((r,t,e)=>{i.hasOwnProperty(r)?((void 0===e||void 0!==i[r].overloadTable&&void 0!==i[r].overloadTable[e])&&E(`Cannot register public name '${r}' twice`),xt(i,r,r),i.hasOwnProperty(e)&&E(`Cannot register multiple overloads of a function with the same number of arguments (${e})!`),i[r].overloadTable[e]=t):(i[r]=t,void 0!==e&&(i[r].numArguments=e))})(r,function(){((r,t)=>{var e=[],n={};throw t.forEach(function a(o){n[o]||I[o]||(tr[o]?tr[o].forEach(a):(e.push(o),n[o]=!0))}),new Hr(`${r}: `+e.map(Ur).join([", "]))})(`Cannot call ${r} due to unbound types`,s)},t-1),fr([],s,function(c){var f=[c[0],null].concat(c.slice(1));return((r,t,e)=>{i.hasOwnProperty(r)||kr("Replacing nonexistant public symbol"),void 0!==i[r].overloadTable&&void 0!==e?i[r].overloadTable[e]=t:(i[r]=t,i[r].argCount=e)})(r,function Rt(r,t,e,n,a,o){var l=t.length;l<2&&E("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var s=null!==t[1]&&null!==e,c=!1,f=1;f<t.length;++f)if(null!==t[f]&&void 0===t[f].destructorFunction){c=!0;break}var h="void"!==t[0].name,m=l-2,p=new Array(m),g=[],b=[];return function(){var W;arguments.length!==m&&E(`function ${r} called with ${arguments.length} arguments, expected ${m}`),b.length=0,g.length=s?2:1,g[0]=a,s&&(W=t[1].toWireType(b,this),g[1]=W);for(var A=0;A<m;++A)p[A]=t[A+2].toWireType(b,arguments[A]),g.push(p[A]);return function S(u){if(c)cr(b);else for(var d=s?1:2;d<t.length;d++)null!==t[d].destructorFunction&&t[d].destructorFunction(1===d?W:p[d-2]);if(h)return t[0].fromWireType(u)}(n.apply(null,g))}}(r,f,null,a,o),t-1),[]})},f:(r,t,e,n,a)=>{t=_(t);var o=f=>f;if(0===n){var l=32-8*e;o=f=>f<<l>>>l}var s=t.includes("unsigned");j(r,{name:t,fromWireType:o,toWireType:s?function(f,h){return h>>>0}:function(f,h){return h},argPackAdvance:8,readValueFromPointer:Gt(t,e,0!==n),destructorFunction:null})},b:(r,t,e)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][t];function a(o){return new n(O.buffer,v[o+4>>2],v[o>>2])}j(r,{name:e=_(e),fromWireType:a,argPackAdvance:8,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0})},q:(r,t)=>{var e="std::string"===(t=_(t));j(r,{name:t,fromWireType(n){var a,o=v[n>>2],l=n+4;if(e)for(var s=l,c=0;c<=o;++c){var f=l+c;if(c==o||0==T[f]){var h=nr(s,f-s);void 0===a?a=h:(a+=String.fromCharCode(0),a+=h),s=f+1}}else{var m=new Array(o);for(c=0;c<o;++c)m[c]=String.fromCharCode(T[l+c]);a=m.join("")}return x(n),a},toWireType(n,a){var o;a instanceof ArrayBuffer&&(a=new Uint8Array(a));var l="string"==typeof a;l||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int8Array||E("Cannot pass non-string to std::string"),o=e&&l?Vr(a):a.length;var s=mr(4+o+1),c=s+4;if(v[s>>2]=o,e&&l)((r,t,e)=>{Yr(r,T,t,e)})(a,c,o+1);else if(l)for(var f=0;f<o;++f){var h=a.charCodeAt(f);h>255&&(x(c),E("String has UTF-16 code units that do not fit in 8 bits")),T[c+f]=h}else for(f=0;f<o;++f)T[c+f]=a[f];return null!==n&&n.push(x,s),s},argPackAdvance:8,readValueFromPointer:Kt,destructorFunction(n){x(n)}})},o:(r,t,e)=>{var n,a,o,l,s;e=_(e),2===t?(n=re,a=te,l=ee,o=()=>X,s=1):4===t&&(n=ne,a=ae,l=oe,o=()=>v,s=2),j(r,{name:e,fromWireType:c=>{for(var f,h=v[c>>2],m=o(),p=c+4,g=0;g<=h;++g){var b=c+4+g*t;if(g==h||0==m[b>>s]){var W=n(p,b-p);void 0===f?f=W:(f+=String.fromCharCode(0),f+=W),p=b+t}}return x(c),f},toWireType:(c,f)=>{"string"!=typeof f&&E(`Cannot pass non-string to C++ string type ${e}`);var h=l(f),m=mr(4+h+t);return v[m>>2]=h>>s,a(f,m+4,h+t),null!==c&&c.push(x,m),m},argPackAdvance:8,readValueFromPointer:rr,destructorFunction(c){x(c)}})},l:(r,t,e,n,a,o)=>{Q[r]={name:_(t),rawConstructor:R(e,n),rawDestructor:R(a,o),elements:[]}},d:(r,t,e,n,a,o,l,s,c)=>{Q[r].elements.push({getterReturnType:t,getter:R(e,n),getterContext:a,setterArgumentType:o,setter:R(l,s),setterContext:c})},t:(r,t,e,n,a,o)=>{er[r]={name:_(t),rawConstructor:R(e,n),rawDestructor:R(a,o),fields:[]}},i:(r,t,e,n,a,o,l,s,c,f)=>{er[r].fields.push({fieldName:_(t),getterReturnType:e,getter:R(n,a),getterContext:o,setterArgumentType:l,setter:R(s,c),setterContext:f})},C:(r,t)=>{j(r,{isVoid:!0,name:t=_(t),argPackAdvance:0,fromWireType:()=>{},toWireType:(e,n)=>{}})},a:Ir,n:r=>{r>4&&(P.get(r).refcount+=1)},D:()=>M_toHandle([]),h:r=>M_toHandle((r=>{var t=me[r];return void 0===t?_(r):t})(r)),j:()=>M_toHandle({}),e:(r,t,e)=>{r=M_toValue(r),t=M_toValue(t),e=M_toValue(e),r[t]=e},g:(r,t)=>{var e=(r=((r,t)=>{var e=I[r];return void 0===e&&E("_emval_take_value has unknown type "+Ur(r)),e})(r)).readValueFromPointer(t);return M_toHandle(e)},p:()=>{Z("")},z:(r,t,e)=>T.copyWithin(r,t,t+e),y:r=>{var s,t=T.length,e=2147483648;if((r>>>=0)>e)return!1;for(var a=1;a<=4;a*=2){var o=t*(1+.2/a);o=Math.min(o,r+100663296);var l=Math.min(e,(s=Math.max(r,o))+(65536-s%65536)%65536);if(Ce(l))return!0}return!1},w:(r,t)=>{var e=0;return J().forEach((n,a)=>{var o=t+e;v[r+4*a>>2]=o,((r,t)=>{for(var e=0;e<r.length;++e)O[t++>>0]=r.charCodeAt(e);O[t>>0]=0})(n,o),e+=n.length+1}),0},x:(r,t)=>{var e=J();v[r>>2]=e.length;var n=0;return e.forEach(a=>n+=a.length+1),v[t>>2]=n,0},v:(r,t,e,n,a)=>((r,t,e,n)=>{var a=v[n+40>>2],o={tm_sec:y[n>>2],tm_min:y[n+4>>2],tm_hour:y[n+8>>2],tm_mday:y[n+12>>2],tm_mon:y[n+16>>2],tm_year:y[n+20>>2],tm_wday:y[n+24>>2],tm_yday:y[n+28>>2],tm_isdst:y[n+32>>2],tm_gmtoff:y[n+36>>2],tm_zone:a?nr(a):""},l=nr(e),s={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var c in s)l=l.replace(new RegExp(c,"g"),s[c]);var f=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],h=["January","February","March","April","May","June","July","August","September","October","November","December"];function m(u,d,C){for(var F="number"==typeof u?u.toString():u||"";F.length<d;)F=C[0]+F;return F}function p(u,d){return m(u,d,"0")}function g(u,d){function C(ir){return ir<0?-1:ir>0?1:0}var F;return 0===(F=C(u.getFullYear()-d.getFullYear()))&&0===(F=C(u.getMonth()-d.getMonth()))&&(F=C(u.getDate()-d.getDate())),F}function b(u){switch(u.getDay()){case 0:return new Date(u.getFullYear()-1,11,29);case 1:return u;case 2:return new Date(u.getFullYear(),0,3);case 3:return new Date(u.getFullYear(),0,2);case 4:return new Date(u.getFullYear(),0,1);case 5:return new Date(u.getFullYear()-1,11,31);case 6:return new Date(u.getFullYear()-1,11,30)}}function W(u){var d=je(new Date(u.tm_year+1900,0,1),u.tm_yday),C=new Date(d.getFullYear(),0,4),F=new Date(d.getFullYear()+1,0,4),ir=b(C),ze=b(F);return g(ir,d)<=0?g(ze,d)<=0?d.getFullYear()+1:d.getFullYear():d.getFullYear()-1}var A={"%a":u=>f[u.tm_wday].substring(0,3),"%A":u=>f[u.tm_wday],"%b":u=>h[u.tm_mon].substring(0,3),"%B":u=>h[u.tm_mon],"%C":u=>p((u.tm_year+1900)/100|0,2),"%d":u=>p(u.tm_mday,2),"%e":u=>m(u.tm_mday,2," "),"%g":u=>W(u).toString().substring(2),"%G":u=>W(u),"%H":u=>p(u.tm_hour,2),"%I":u=>{var d=u.tm_hour;return 0==d?d=12:d>12&&(d-=12),p(d,2)},"%j":u=>p(u.tm_mday+((r,t)=>{for(var e=0,n=0;n<=t;e+=r[n++]);return e})(ar(u.tm_year+1900)?Lr:Nr,u.tm_mon-1),3),"%m":u=>p(u.tm_mon+1,2),"%M":u=>p(u.tm_min,2),"%n":()=>"\n","%p":u=>u.tm_hour>=0&&u.tm_hour<12?"AM":"PM","%S":u=>p(u.tm_sec,2),"%t":()=>"\t","%u":u=>u.tm_wday||7,"%U":u=>p(Math.floor((u.tm_yday+7-u.tm_wday)/7),2),"%V":u=>{var d=Math.floor((u.tm_yday+7-(u.tm_wday+6)%7)/7);if((u.tm_wday+371-u.tm_yday-2)%7<=2&&d++,d){if(53==d){var C=(u.tm_wday+371-u.tm_yday)%7;4==C||3==C&&ar(u.tm_year)||(d=1)}}else{d=52;var F=(u.tm_wday+7-u.tm_yday-1)%7;(4==F||5==F&&ar(u.tm_year%400-1))&&d++}return p(d,2)},"%w":u=>u.tm_wday,"%W":u=>p(Math.floor((u.tm_yday+7-(u.tm_wday+6)%7)/7),2),"%y":u=>(u.tm_year+1900).toString().substring(2),"%Y":u=>u.tm_year+1900,"%z":u=>{var d=u.tm_gmtoff,C=d>=0;return d=(d=Math.abs(d)/60)/60*100+d%60,(C?"+":"-")+String("0000"+d).slice(-4)},"%Z":u=>u.tm_zone,"%%":()=>"%"};for(var c in l=l.replace(/%%/g,"\0\0"),A)l.includes(c)&&(l=l.replace(new RegExp(c,"g"),A[c](o)));var S=function De(r,t,e){var n=e>0?e:Vr(r)+1,a=new Array(n),o=Yr(r,a,0,a.length);return t&&(a.length=o),a}(l=l.replace(/\0\0/g,"%"),!1);return S.length>t?0:(((r,t)=>{O.set(r,t)})(S,r),S.length-1)})(r,t,e,n)},w=function vt(){var r={a:Be};function t(n,a){return K=(w=n.exports).E,Er(),H=w.G,function lt(r){Pr.unshift(r)}(w.F),function dt(r){if($--,i.monitorRunDependencies&&i.monitorRunDependencies($),0==$&&L){var t=L;L=null,t()}}(),w}if(function ft(r){$++,i.monitorRunDependencies&&i.monitorRunDependencies($)}(),i.instantiateWasm)try{return i.instantiateWasm(r,t)}catch(n){B(`Module.instantiateWasm callback failed with error: ${n}`),q(n)}return function pt(r,t,e,n){return r||"function"!=typeof WebAssembly.instantiateStreaming||Or(t)||"function"!=typeof fetch?Dr(t,e,n):fetch(t,{credentials:"same-origin"}).then(a=>WebAssembly.instantiateStreaming(a,e).then(n,function(o){return B(`wasm streaming compile failed: ${o}`),B("falling back to ArrayBuffer instantiation"),Dr(t,e,n)}))}(V,N,r,function e(n){t(n.instance)}).catch(q),{}}(),x=i._free=r=>(x=i._free=w.H)(r),mr=i._malloc=r=>(mr=i._malloc=w.I)(r),Kr=r=>(Kr=w.J)(r);i.__embind_initialize_bindings=()=>(i.__embind_initialize_bindings=w.K)();var or,Xr=r=>(Xr=w.L)(r);function Zr(){function r(){or||(or=!0,i.calledRun=!0,Fr||(function it(){lr(Pr)}(),_r(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),function ut(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)r=i.postRun.shift(),Sr.unshift(r);var r;lr(Sr)}()))}$>0||(function ot(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)r=i.preRun.shift(),Wr.unshift(r);var r;lr(Wr)}(),$>0||(i.setStatus?(i.setStatus("Running..."),setTimeout(function(){setTimeout(function(){i.setStatus("")},1),r()},1)):r()))}if(i.dynCall_viji=(r,t,e,n,a)=>(i.dynCall_viji=w.M)(r,t,e,n,a),i.dynCall_ji=(r,t)=>(i.dynCall_ji=w.N)(r,t),i.dynCall_viijii=(r,t,e,n,a,o,l)=>(i.dynCall_viijii=w.O)(r,t,e,n,a,o,l),i.dynCall_iiiiij=(r,t,e,n,a,o,l)=>(i.dynCall_iiiiij=w.P)(r,t,e,n,a,o,l),i.dynCall_iiiiijj=(r,t,e,n,a,o,l,s,c)=>(i.dynCall_iiiiijj=w.Q)(r,t,e,n,a,o,l,s,c),i.dynCall_iiiiiijj=(r,t,e,n,a,o,l,s,c,f)=>(i.dynCall_iiiiiijj=w.R)(r,t,e,n,a,o,l,s,c,f),i.addFunction=(r,t)=>{var e=(r=>(Y||(Y=new WeakMap,((r,t)=>{if(Y)for(var e=0;e<0+t;e++){var n=dr(e);n&&Y.set(n,e)}})(0,H.length)),Y.get(r)||0))(r);if(e)return e;var n=(()=>{if(Jr.length)return Jr.pop();try{H.grow(1)}catch(r){throw r instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":r}return H.length-1})();try{qr(n,r)}catch(o){if(!(o instanceof TypeError))throw o;var a=((r,t)=>{if("function"==typeof WebAssembly.Function)return new WebAssembly.Function((r=>{for(var t={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},e={parameters:[],results:"v"==r[0]?[]:[t[r[0]]]},n=1;n<r.length;++n)e.parameters.push(t[r[n]]);return e})(t),r);var e=[1];((r,t)=>{var e=r.slice(0,1),n=r.slice(1),a={i:127,p:127,j:126,f:125,d:124,e:111};t.push(96),Gr(n.length,t);for(var o=0;o<n.length;++o)t.push(a[n[o]]);"v"==e?t.push(0):t.push(1,a[e])})(t,e);var n=[0,97,115,109,1,0,0,0,1];Gr(e.length,n),n.push.apply(n,e),n.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var a=new WebAssembly.Module(new Uint8Array(n));return new WebAssembly.Instance(a,{e:{f:r}}).exports.f})(r,t);qr(n,a)}return Y.set(r,n),n},i.UTF8ToString=nr,L=function r(){or||Zr(),or||(L=r)},i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Zr(),wr.ready};const rt=(0,Qr.g)(yr.exports),tt=Object.freeze(Object.defineProperty({__proto__:null,default:rt},Symbol.toStringTag,{value:"Module"}))}}]);