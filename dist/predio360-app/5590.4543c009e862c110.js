"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[5590,5611],{24192:(z,A,f)=>{f.d(A,{Z:()=>n});var D,a,P=f(8314),U=f(27899);(a=D||(D={}))[a.varint=0]="varint",a[a.fixed64=1]="fixed64",a[a.delimited=2]="delimited",a[a.fixed32=5]="fixed32",a[a.unknown=99]="unknown";const E=4294967296,R=new TextDecoder("utf-8"),p=(0,P.Z)("safari")||(0,P.Z)("ios")?6:(0,P.Z)("ff")?12:32;class n{constructor(e,i,l=0,r=(e?e.byteLength:0)){this._tag=0,this._dataType=D.unknown,this._init(e,i,l,r)}_init(e,i,l,r){this._data=e,this._dataView=i,this._pos=l,this._end=r}asUnsafe(){return this}clone(){return new n(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(e){this._pos=e}nextTag(e){for(;;){if(this._pos===this._end)return!1;const i=this._decodeVarint();if(this._tag=i>>3,this._dataType=7&i,!e||e===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const e=this._decodeVarint();return this._tag=e>>3,this._dataType=7&e,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let e=4294967295;if(e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128||(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128)||(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128)||(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128)||(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128))return e;throw new Error("Varint overflow")}getUInt64(){return this._decodeVarint()}getSInt32(){const e=this.getUInt32();return e>>>1^-(1&e)|0}getSInt64(){return this._decodeSVarint()}getBool(){const e=0!==this._data[this._pos];return this._skip(1),e}getEnum(){return this._decodeVarint()}getFixed64(){const e=this._dataView,i=this._pos,l=e.getUint32(i,!0)+e.getUint32(i+4,!0)*E;return this._skip(8),l}getSFixed64(){const e=this._dataView,i=this._pos,l=e.getUint32(i,!0)+e.getInt32(i+4,!0)*E;return this._skip(8),l}getDouble(){const e=this._dataView.getFloat64(this._pos,!0);return this._skip(8),e}getFixed32(){const e=this._dataView.getUint32(this._pos,!0);return this._skip(4),e}getSFixed32(){const e=this._dataView.getInt32(this._pos,!0);return this._skip(4),e}getFloat(){const e=this._dataView.getFloat32(this._pos,!0);return this._skip(4),e}getString(){const e=this._getLength(),i=this._pos,l=this._toString(this._data,i,i+e);return this._skip(e),l}getBytes(){const e=this._getLength(),i=this._pos,l=this._toBytes(this._data,i,i+e);return this._skip(e),l}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(e,i,l,r){const h=this.getMessage(),c=e(h,i,l,r);return h.release(),c}processMessage(e){const i=this.getMessage(),l=e(i);return i.release(),l}getMessage(){const e=this._getLength(),i=n.pool.acquire();return i._init(this._data,this._dataView,this._pos,this._pos+e),this._skip(e),i}release(){n.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case D.varint:this._decodeVarint();break;case D.fixed64:this._skip(8);break;case D.delimited:this._skip(this._getLength());break;case D.fixed32:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(e){this._skip(e)}_skip(e){if(this._pos+e>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=e}_decodeVarint(){const e=this._data;let i=this._pos,l=0,r=0;if(this._end-i>=10)do{if(r=e[i++],l|=127&r,0==(128&r)||(r=e[i++],l|=(127&r)<<7,0==(128&r))||(r=e[i++],l|=(127&r)<<14,0==(128&r))||(r=e[i++],l|=(127&r)<<21,0==(128&r))||(r=e[i++],l+=268435456*(127&r),0==(128&r))||(r=e[i++],l+=34359738368*(127&r),0==(128&r))||(r=e[i++],l+=4398046511104*(127&r),0==(128&r))||(r=e[i++],l+=562949953421312*(127&r),0==(128&r))||(r=e[i++],l+=72057594037927940*(127&r),0==(128&r))||(r=e[i++],l+=0x8000000000000000*(127&r),0==(128&r)))break;throw new Error("Varint too long!")}while(0);else{let h=1;for(;i!==this._end&&(r=e[i],0!=(128&r));)++i,l+=(127&r)*h,h*=128;if(i===this._end)throw new Error("Varint overrun!");++i,l+=r*h}return this._pos=i,l}_decodeSVarint(){const e=this._data;let i,l=0,r=0;const h=1&e[this._pos];if(r=e[this._pos++],l|=127&r,0==(128&r)||(r=e[this._pos++],l|=(127&r)<<7,0==(128&r))||(r=e[this._pos++],l|=(127&r)<<14,0==(128&r))||(r=e[this._pos++],l|=(127&r)<<21,0==(128&r))||(r=e[this._pos++],l+=268435456*(127&r),0==(128&r))||(r=e[this._pos++],l+=34359738368*(127&r),0==(128&r))||(r=e[this._pos++],l+=4398046511104*(127&r),0==(128&r)))return h?-(l+1)/2:l/2;if(i=BigInt(l),r=e[this._pos++],i+=0x2000000000000n*BigInt(127&r),0==(128&r)||(r=e[this._pos++],i+=0x100000000000000n*BigInt(127&r),0==(128&r))||(r=e[this._pos++],i+=0x8000000000000000n*BigInt(127&r),0==(128&r)))return Number(h?-(i+1n)/2n:i/2n);throw new Error("Varint too long!")}_getLength(){if(this._dataType!==D.delimited)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(e,i,l){if((l=Math.min(this._end,l))-i>p){const c=e.subarray(i,l);return R.decode(c)}let r="",h="";for(let c=i;c<l;++c){const m=e[c];128&m?h+="%"+m.toString(16):(r+=decodeURIComponent(h)+String.fromCharCode(m),h="")}return h.length&&(r+=decodeURIComponent(h)),r}_toBytes(e,i,l){return l=Math.min(this._end,l),new Uint8Array(e.buffer,i,l-i)}}n.pool=new U.Z(n,void 0,a=>{a._data=null,a._dataView=null})},92087:(z,A,f)=>{f.d(A,{L:()=>U,v:()=>P});const P=15.5,U=1024},26996:(z,A,f)=>{f.d(A,{Y:()=>R,m:()=>p});var P=f(36161),U=f(21286),D=f(92087);const E=n=>"vertical"===n||"horizontal"===n||"cross"===n||"esriSFSCross"===n||"esriSFSVertical"===n||"esriSFSHorizontal"===n;function R(n,a,e){const i=a.style,l=(0,U.fp)(Math.ceil(e)),r=E(i)?8*l:16*l,h=2*l;n.width=r,n.height=r;const c=n.getContext("2d");c.strokeStyle="#FFFFFF",c.lineWidth=l,c.beginPath(),"vertical"!==i&&"cross"!==i&&"esriSFSCross"!==i&&"esriSFSVertical"!==i||(c.moveTo(r/2,-h),c.lineTo(r/2,r+h)),"horizontal"!==i&&"cross"!==i&&"esriSFSCross"!==i&&"esriSFSHorizontal"!==i||(c.moveTo(-h,r/2),c.lineTo(r+h,r/2)),"backward-diagonal"!==i&&"diagonal-cross"!==i&&"esriSFSDiagonalCross"!==i&&"esriSFSBackwardDiagonal"!==i||(c.moveTo(-h,-h),c.lineTo(r+h,r+h),c.moveTo(r-h,-h),c.lineTo(r+h,h),c.moveTo(-h,r-h),c.lineTo(h,r+h)),"forward-diagonal"!==i&&"diagonal-cross"!==i&&"esriSFSForwardDiagonal"!==i&&"esriSFSDiagonalCross"!==i||(c.moveTo(r+h,-h),c.lineTo(-h,r+h),c.moveTo(h,-h),c.lineTo(-h,h),c.moveTo(r+h,r-h),c.lineTo(r-h,r+h)),c.stroke();const m=c.getImageData(0,0,n.width,n.height),w=new Uint8Array(m.data);let v;for(let x=0;x<w.length;x+=4)v=w[x+3]/255,w[x]=w[x]*v,w[x+1]=w[x+1]*v,w[x+2]=w[x+2]*v;return[w,n.width,n.height,l]}function p(n,a){const e="Butt"===a,i="Square"===a,l=!e&&!i;n.length%2==1&&(n=[...n,...n]);const r=D.v,h=2*r;let c=0;for(const T of n)c+=T;const m=Math.round(c*r),w=new Float32Array(m*h),v=.5*r;let x=0,I=0,d=.5,L=!0;for(const T of n){for(x=I,I+=T*r;d<=I;){let t=.5;for(;t<h;){const o=(t-.5)*m+d-.5,s=l?(t-r)*(t-r):Math.abs(t-r);w[o]=L?e?Math.max(Math.max(x+v-d,s),Math.max(d-I+v,s)):s:l?Math.min((d-x)*(d-x)+s,(d-I)*(d-I)+s):i?Math.min(Math.max(d-x,s),Math.max(I-d,s)):Math.min(Math.max(d-x+v,s),Math.max(I+v-d,s)),t++}d++}L=!L}const C=w.length,O=new Uint8Array(4*C);for(let T=0;T<C;++T){const t=(l?Math.sqrt(w[T]):w[T])/r;(0,P.I)(t,O,4*T)}return[O,m,h]}},63631:(z,A,f)=>{f.d(A,{m:()=>C});var P=f(15861),U=f(62208),D=f(10699),E=f(21726),R=f(97347),p=f(84439);class n{constructor(t,o){this._width=0,this._height=0,this._free=[],this._width=t,this._height=o,this._free.push(new p.Z(0,0,t,o))}get width(){return this._width}get height(){return this._height}allocate(t,o){if(t>this._width||o>this._height)return new p.Z;let s=null,_=-1;for(let u=0;u<this._free.length;++u){const g=this._free[u];t<=g.width&&o<=g.height&&(null===s||g.y<=s.y&&g.x<=s.x)&&(s=g,_=u)}return null===s?new p.Z:(this._free.splice(_,1),s.width<s.height?(s.width>t&&this._free.push(new p.Z(s.x+t,s.y,s.width-t,o)),s.height>o&&this._free.push(new p.Z(s.x,s.y+o,s.width,s.height-o))):(s.width>t&&this._free.push(new p.Z(s.x+t,s.y,s.width-t,s.height)),s.height>o&&this._free.push(new p.Z(s.x,s.y+o,t,s.height-o))),new p.Z(s.x,s.y,t,o))}release(t){for(let o=0;o<this._free.length;++o){const s=this._free[o];if(s.y===t.y&&s.height===t.height&&s.x+s.width===t.x)s.width+=t.width;else if(s.x===t.x&&s.width===t.width&&s.y+s.height===t.y)s.height+=t.height;else if(t.y===s.y&&t.height===s.height&&t.x+t.width===s.x)s.x=t.x,s.width+=t.width;else{if(t.x!==s.x||t.width!==s.width||t.y+t.height!==s.y)continue;s.y=t.y,s.height+=t.height}this._free.splice(o,1),this.release(t)}this._free.push(t)}}var a=f(67969),e=f(18952),i=f(31548);class l{constructor(t,o,s){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,this.width=t,this.height=o,this._glyphSource=s,this._binPack=new n(t-4,o-4),this._glyphData.push(new Uint8Array(t*o)),this._dirties.push(!0),this._textures.push(void 0)}getGlyphItems(t,o){const s=[],_=this._glyphSource,u=new Set;for(const S of o){const b=Math.floor(.00390625*S);u.add(b)}const y=[];return u.forEach(S=>{const b=t+S;if(this._rangePromises.has(b))y.push(this._rangePromises.get(b));else{const M=_.getRange(t,S).then(()=>{this._rangePromises.delete(b)},()=>{this._rangePromises.delete(b)});this._rangePromises.set(b,M),y.push(M)}}),Promise.all(y).then(()=>{let S=this._glyphIndex[t];S||(S={},this._glyphIndex[t]=S);for(const b of o){const M=S[b];if(M){s[b]={sdf:!0,rect:M.rect,metrics:M.metrics,page:M.page,code:b};continue}const V=_.getGlyph(t,b);if(!V?.metrics)continue;const F=V.metrics;let B;if(0===F.width)B=new p.Z(0,0,0,0);else{const k=F.width+6,K=F.height+6;let Z=k%4?4-k%4:4,J=K%4?4-K%4:4;1===Z&&(Z=5),1===J&&(J=5),B=this._binPack.allocate(k+Z,K+J),B.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(void 0),this._binPack=new n(this.width-4,this.height-4),B=this._binPack.allocate(k+Z,K+J));const X=this._glyphData[this._currentPage],N=V.bitmap;let G,q;if(N)for(let j=0;j<K;j++){G=k*j,q=this.width*(B.y+j+1)+B.x;for(let H=0;H<k;H++)X[q+H+1]=N.at(G+H)}}S[b]={rect:B,metrics:F,tileIDs:null,page:this._currentPage},s[b]={sdf:!0,rect:B,metrics:F,page:this._currentPage,code:b},this._dirties[this._currentPage]=!0}return s})}removeGlyphs(t){for(const o in this._glyphIndex){const s=this._glyphIndex[o];if(!s)continue;let _;for(const u in s)if(_=s[u],_.tileIDs.delete(t),0===_.tileIDs.size){const g=this._glyphData[_.page],y=_.rect;let S,b;for(let M=0;M<y.height;M++)for(S=this.width*(y.y+M)+y.x,b=0;b<y.width;b++)g[S+b]=0;delete s[u],this._dirties[_.page]=!0}}}bind(t,o,s,_=0){if(!this._textures[s]){const g=new i.X;g.pixelFormat=a.VI.ALPHA,g.wrapMode=a.e8.CLAMP_TO_EDGE,g.width=this.width,g.height=this.height,this._textures[s]=new e.x(t,g,new Uint8Array(this.width*this.height))}const u=this._textures[s];u.setSamplingMode(o),this._dirties[s]&&u.setData(this._glyphData[s]),t.bindTexture(u,_),this._dirties[s]=!1}destroy(){this.dispose()}dispose(){this._glyphData.length=0,this._binPack=null;for(const t of this._textures)t&&t.dispose();this._textures.length=0}}var r=f(84792),h=f(24192);class c{constructor(t){if(this._metrics=[],!t)return void(this._allBitmaps=null);const o=new Map;let s=0;for(;t.next();)switch(t.tag()){case 1:{const g=t.getMessage();for(;g.next();)switch(g.tag()){case 3:{const y=g.getMessage();let S,b,M,V,F,B,W;for(;y.next();)switch(y.tag()){case 1:S=y.getUInt32();break;case 2:b=y.getBytes();break;case 3:M=y.getUInt32();break;case 4:V=y.getUInt32();break;case 5:F=y.getSInt32();break;case 6:B=y.getSInt32();break;case 7:W=y.getUInt32();break;default:y.skip()}if(y.release(),S){const k=b?.length??0;this._metrics[S]={width:M,height:V,left:F,top:B,advance:W,startOffset:s,length:k},o.set(S,b),s+=k}break}default:g.skip()}g.release();break}default:t.skip()}const _=new Uint8Array(s),u=this._metrics;for(const[g,y]of o){const{startOffset:S,length:b}=u[g];if(y)for(let M=0;M<b;++M)_[S+M]=y[M]}this._allBitmaps=_}getMetrics(t){return this._metrics[t]}getBitmap(t){if(!this._allBitmaps)return;const o=this._metrics[t];if(void 0===o)return;const{startOffset:s,length:_}=o;return 0!==_?new v(this._allBitmaps,s,_):void 0}}class m{constructor(){this._ranges=[]}get ranges(){return this._ranges}getRange(t){return this._ranges[t]}addRange(t,o){this._ranges[t]=o}}class w{constructor(t){this._glyphInfo={},this._baseURL=t}getRange(t,o){const s=this._getFontStack(t);if(s.getRange(o))return Promise.resolve();const _=256*o,u=_+255;if(this._baseURL){const g=this._baseURL.replace("{fontstack}",t).replace("{range}",_+"-"+u);return(0,r.Z)(g,{responseType:"array-buffer"}).then(y=>{s.addRange(o,new c(new h.Z(new Uint8Array(y.data),new DataView(y.data))))}).catch(()=>{s.addRange(o,new c)})}return s.addRange(o,new c),Promise.resolve()}getGlyph(t,o){const s=this._getFontStack(t);if(!s)return;const _=Math.floor(o/256),u=s.getRange(_);return u?{metrics:u.getMetrics(o),bitmap:u.getBitmap(o)}:void 0}_getFontStack(t){let o=this._glyphInfo[t];return o||(o=this._glyphInfo[t]=new m),o}}class v{constructor(t,o,s){this._array=t,this._start=o,this.length=s}at(t){return 0<=t&&t<this.length?this._array[this._start+t]:void 0}}var x=f(26996);class d{constructor(t,o,s=0){this._size=[],this._mosaicsData=[],this._textures=[],this._dirties=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects={},this.pixelRatio=1,(t<=0||o<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=t,this._pageHeight=o,s>0&&(this._maxItemSize=s),this._binPack=new n(t-4,o-4)}destroy(){this.dispose()}dispose(){this._binPack=null,this._mosaicsData.length=0,this._mosaicRects={};for(const t of this._textures)t&&t.dispose();this._textures.length=0}getWidth(t){return t>=this._size.length?-1:this._size[t][0]}getHeight(t){return t>=this._size.length?-1:this._size[t][1]}getPageSize(t){return t>=this._size.length?null:this._size[t]}setSpriteSource(t){if(this.dispose(),this.pixelRatio=t.devicePixelRatio,0===this._mosaicsData.length){this._binPack=new n(this._pageWidth-4,this._pageHeight-4);const o=Math.floor(this._pageWidth),s=Math.floor(this._pageHeight),_=new Uint32Array(o*s);this._mosaicsData[0]=_,this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0)}this._sprites=t}getSpriteItem(t,o=!1){let s,_,u=this._mosaicRects[t];if(u)return u;if(!this._sprites||"loaded"!==this._sprites.loadStatus||(t&&t.startsWith("dasharray-")?([s,_]=this._rasterizeDash(t),o=!0):s=this._sprites.getSpriteInfo(t),!s?.width||!s.height||s.width<0||s.height<0))return null;const g=s.width,y=s.height,[S,b,M]=this._allocateImage(g,y);return S.width<=0?null:(this._copy(S,s,b,M,o,_),u={type:"sprite",rect:S,width:g,height:y,sdf:s.sdf,simplePattern:!1,rasterizationScale:s.pixelRatio,page:b},this._mosaicRects[t]=u,u)}getSpriteItems(t){const o={};for(const s of t)o[s.name]=this.getSpriteItem(s.name,s.repeat);return o}getMosaicItemPosition(t,o){const s=this.getSpriteItem(t,o),_=s&&s.rect;return _?(_.width=s.width,_.height=s.height,{tl:[_.x+2,_.y+2],br:[_.x+2+s.width,_.y+2+s.height],page:s.page}):null}bind(t,o,s=0,_=0){if(s>=this._size.length||s>=this._mosaicsData.length)return;if(!this._textures[s]){const g=new i.X;g.wrapMode=a.e8.CLAMP_TO_EDGE,g.width=this._size[s][0],g.height=this._size[s][1],this._textures[s]=new e.x(t,g,new Uint8Array(this._mosaicsData[s].buffer))}const u=this._textures[s];u.setSamplingMode(o),this._dirties[s]&&u.setData(new Uint8Array(this._mosaicsData[s].buffer)),t.bindTexture(u,_),this._dirties[s]=!1}static _copyBits(t,o,s,_,u,g,y,S,b,M,V){let F=_*o+s,B=S*g+y;if(V){B-=g;for(let W=-1;W<=M;W++,F=((W+M)%M+_)*o+s,B+=g)for(let k=-1;k<=b;k++)u[B+k]=t[F+(k+b)%b]}else for(let W=0;W<M;W++){for(let k=0;k<b;k++)u[B+k]=t[F+k];F+=o,B+=g}}_copy(t,o,s,_,u,g){if(!this._sprites||"loaded"!==this._sprites.loadStatus||s>=this._mosaicsData.length)return;const y=new Uint32Array(g?g.buffer:this._sprites.image.buffer),S=this._mosaicsData[s];S&&y||console.error("Source or target images are uninitialized!"),d._copyBits(y,g?o.width:this._sprites.width,o.x,o.y,S,_[0],t.x+2,t.y+2,o.width,o.height,u),this._dirties[s]=!0}_allocateImage(t,o){t+=2,o+=2;const s=Math.max(t,o);if(this._maxItemSize&&this._maxItemSize<s){const y=new p.Z(0,0,t,o);return this._mosaicsData.push(new Uint32Array(t*o)),this._dirties.push(!0),this._size.push([t,o]),this._textures.push(void 0),[y,this._mosaicsData.length-1,[t,o]]}let _=t%4?4-t%4:4,u=o%4?4-o%4:4;1===_&&(_=5),1===u&&(u=5);const g=this._binPack.allocate(t+_,o+u);return g.width<=0?(this._dirties[this._currentPage]||(this._mosaicsData[this._currentPage]=null),this._currentPage=this._mosaicsData.length,this._mosaicsData.push(new Uint32Array(this._pageWidth*this._pageHeight)),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0),this._binPack=new n(this._pageWidth-4,this._pageHeight-4),this._allocateImage(t,o)):[g,this._currentPage,[this._pageWidth,this._pageHeight]]}_rasterizeDash(t){const s=t.match(/\[(.*?)\]/);if(!s)return null;const _=s[1].split(",").map(Number),u=t.slice(t.lastIndexOf("-")+1),[g,y,S]=(0,x.m)(_,u);return[{x:0,y:0,width:y,height:S,sdf:!0,pixelRatio:1},new Uint8Array(g.buffer)]}}var L=f(58098);class C{constructor(t,o,s,_){this._layer=t,this._styleRepository=o,this.devicePixelRatio=s,this._sourceDataMaxLOD=_,this._spriteMosaic=null,this._glyphMosaic=null,this._connection=null,this._spriteSourceAbortController=null,this._startOptionsInputSignal=null,this._inputSignalEventListener=null}destroy(){this._connection?.close(),this._connection=null,this._styleRepository=null,this._layer=null,this._spriteMosaic?.destroy(),this._spriteMosaic=null,this._glyphMosaic=null,this._spriteSourceAbortController=(0,U.IM)(this._spriteSourceAbortController),this._spriteSourcePromise=null,this._inputSignalEventListener&&this._startOptionsInputSignal?.removeEventListener("abort",this._inputSignalEventListener),this._startOptionsInputSignal=null,this._inputSignalEventListener=null}get spriteMosaic(){return this._spriteSourcePromise.then(()=>this._spriteMosaic)}get glyphMosaic(){return this._glyphMosaic}start(t){var o=this;return(0,P.Z)(function*(){o._requestSprite(t);const s=o._layer.currentStyleInfo.glyphsUrl,_=new w(s?(0,E.fl)(s,{...o._layer.customParameters,token:o._layer.apiKey}):null);o._glyphMosaic=new l(1024,1024,_),o._broadcastPromise=(0,R.bA)("WorkerTileHandler",{client:o,schedule:t.schedule,signal:t.signal}).then(u=>{if(o._layer&&(o._connection?.close(),o._connection=u,o._layer&&!o._connection.closed)){const g=u.broadcast("setStyle",{style:o._layer.currentStyleInfo.style,sourceDataMaxLOD:o._sourceDataMaxLOD},t);Promise.all(g).catch(y=>(0,D.H9)(y))}})})()}_requestSprite(t){this._spriteSourceAbortController?.abort();const o=new AbortController;this._spriteSourceAbortController=o;const s=t?.signal;this._inputSignalEventListener&&this._startOptionsInputSignal?.removeEventListener("abort",this._inputSignalEventListener),this._startOptionsInputSignal=null,s&&(this._inputSignalEventListener=function O(T){return()=>T.abort()}(o),s.addEventListener("abort",this._inputSignalEventListener,{once:!0}));const{signal:_}=o,u={...t,signal:_};this._spriteSourcePromise=this._layer.loadSpriteSource(this.devicePixelRatio,u),this._spriteSourcePromise.then(g=>{(0,D.r9)(_),this._spriteMosaic=new d(1024,1024,250),this._spriteMosaic.setSpriteSource(g)})}updateStyle(t){var o=this;return(0,P.Z)(function*(){return yield o._broadcastPromise,o._broadcastPromise=Promise.all(o._connection.broadcast("updateStyle",t)),o._broadcastPromise})()}setSpriteSource(t){const o=new d(1024,1024,250);return o.setSpriteSource(t),this._spriteMosaic=o,this._spriteSourcePromise=Promise.resolve(t),this._spriteSourceAbortController=null,o}setStyle(t,o,s){var _=this;return(0,P.Z)(function*(){yield _._broadcastPromise,_._styleRepository=t,_._sourceDataMaxLOD=s,_._requestSprite();const u=new w(_._layer.currentStyleInfo.glyphsUrl?(0,E.fl)(_._layer.currentStyleInfo.glyphsUrl,{..._._layer.customParameters,token:_._layer.apiKey}):null);return _._glyphMosaic=new l(1024,1024,u),_._broadcastPromise=Promise.all(_._connection.broadcast("setStyle",{style:o,sourceDataMaxLOD:_._sourceDataMaxLOD})),_._broadcastPromise})()}fetchTileData(t,o){var s=this;return(0,P.Z)(function*(){const _=yield s._getRefKeys(t,o);return s._getSourcesData(Object.keys(s._layer.sourceNameToSource),_,o)})()}fetchTilePBFs(t){var o=this;return(0,P.Z)(function*(){const s=Object.keys(o._layer.sourceNameToSource),_={},u=yield o._getRefKeys(t,_),g=[],y=[];for(let S=0;S<u.length;S++)if(null==u[S].value||null==s[S])y.push(null);else{const b=u[S].value,M=o._getTilePayload(b,s[S],_);M.then(V=>{g.push({...V,key:b})}),y.push(M)}return Promise.all(y).then(()=>g)})()}parseTileData(t,o){var s=this;return(0,P.Z)(function*(){const _=t&&t.data;if(!_)return null;const{sourceName2DataAndRefKey:u,transferList:g}=_;return 0===Object.keys(u).length?null:s._broadcastPromise.then(()=>s._connection.invoke("createTileAndParse",{key:t.key.id,sourceName2DataAndRefKey:u,styleLayerUIDs:t.styleLayerUIDs},{...o,transferList:g}))})()}getSprites(t){var o=this;return(0,P.Z)(function*(){return yield o._spriteSourcePromise,o._spriteMosaic.getSpriteItems(t)})()}getGlyphs(t){return this._glyphMosaic.getGlyphItems(t.font,t.codePoints)}_getTilePayload(t,o,s){var _=this;return(0,P.Z)(function*(){const u=L.Z.pool.acquire(t.id),g=_._layer.sourceNameToSource[o],{level:y,row:S,col:b}=u;L.Z.pool.release(u);try{return{protobuff:yield g.requestTile(y,S,b,s),sourceName:o}}catch(M){if((0,D.D_)(M))throw M;return{protobuff:null,sourceName:o}}})()}_getRefKeys(t,o){var s=this;return(0,P.Z)(function*(){const _=s._layer.sourceNameToSource,u=new Array;for(const g in _){const y=_[g].getRefKey(t,o);u.push(y)}return(0,D.as)(u)})()}_getSourcesData(t,o,s){const _=[];for(let u=0;u<o.length;u++)if(null==o[u].value||null==t[u])_.push(null);else{const y=this._getTilePayload(o[u].value,t[u],s);_.push(y)}return(0,D.as)(_).then(u=>{const g={},y=[];for(let S=0;S<u.length;S++){const b=u[S].value;b&&b.protobuff&&b.protobuff.byteLength>0&&(g[b.sourceName]={refKey:o[S].value.id,protobuff:b.protobuff},y.push(b.protobuff))}return{sourceName2DataAndRefKey:g,transferList:y}})}}},12378:(z,A,f)=>{f.d(A,{g:()=>D});var P=f(47132);function U(R,p){if(R.priority-p.priority)return R.priority-p.priority;const n=R.tile.key,a=p.tile.key;return n.world-a.world?n.world-a.world:n.level-a.level?n.level-a.level:n.row-a.row?n.row-a.row:n.col-a.col?n.col-a.col:R.xTile-p.xTile?R.xTile-p.xTile:R.yTile-p.yTile}class D{get running(){return this._running}constructor(p,n,a,e,i,l){this._visibleTiles=p,this._symbolRepository=n,this._createCollisionJob=a,this._assignTileSymbolsOpacity=e,this._symbolLayerSorter=i,this._isLayerVisible=l,this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}setScreenSize(p,n){this._screenWidth===p&&this._screenHeight===n||this.restart(),this._screenWidth=p,this._screenHeight=n}restart(){this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}continue(p){if(this._selectionJob||(this._selectionJob=this._createSelectionJob()),!this._selectionJobCompleted){const n=performance.now();if(!this._selectionJob.work(p)||(this._selectionJobCompleted=!0,0===(p=Math.max(0,p-(performance.now()-n)))))return!1}if(this._collisionJob||(this._collisionJob=this._createCollisionJob(this._selectionJob.sortedSymbols,this._screenWidth,this._screenHeight)),!this._collisionJobCompleted){const n=performance.now();if(!this._collisionJob.work(p)||(this._collisionJobCompleted=!0,0===(p=Math.max(0,p-(performance.now()-n)))))return!1}if(this._opacityJob||(this._opacityJob=this._createOpacityJob()),!this._opacityJobCompleted){const n=performance.now();if(!this._opacityJob.work(p)||(this._opacityJobCompleted=!0,0===(p=Math.max(0,p-(performance.now()-n)))))return!1}return this._running=!1,!0}_createSelectionJob(){const p=this._symbolRepository.uniqueSymbols;for(let h=0;h<p.length;h++){const c=p[h];for(let m=0;m<c.uniqueSymbols.length;m++){const w=c.uniqueSymbols[m];for(const v of w.tileSymbols)v.selectedForRendering=!1}}const n=[];let a=0,e=0;const i=this._isLayerVisible,r=this._symbolLayerSorter;return{work:function l(h){let c;const m=performance.now();for(;e<p.length;e++,a=0){const w=p[e],v=w.styleLayerUID;if(!i(v)){n[e]||(n[e]={styleLayerUID:v,symbols:[]});continue}n[e]=n[e]||{styleLayerUID:v,symbols:[]};const x=n[e];for(;a<w.uniqueSymbols.length;a++){if(c=w.uniqueSymbols[a],a%100==99&&performance.now()-m>h)return!1;let I=null,d=!1,L=!1;for(const C of c.tileSymbols)if(!L||!d){const O=C.tile;(!I||O.isCoverage||O.neededForCoverage&&!d)&&(I=C,(O.neededForCoverage||O.isCoverage)&&(L=!0),O.isCoverage&&(d=!0))}if(I.selectedForRendering=!0,L){x.symbols.push(I),c.show=!0;for(const C of c.parts)C.show=!0}else c.show=!1}}for(const w of n)w.symbols.sort(U);return!0},get sortedSymbols(){return n.sort(r)}}}_createOpacityJob(){const p=this._assignTileSymbolsOpacity,n=this._visibleTiles;let a=0;function e(i,l){const r=i.symbols;for(const[h,c]of r)E(c,l);p(i,l);for(const h of i.childrenTiles)e(h,l)}return{work(i){const l=performance.now();for(;a<n.length;a++){if(performance.now()-l>i)return!1;const r=n[a];null==r.parentTile&&e(r,performance.now())}return!0}}}}function E(R,p){for(const n of R){const a=n.unique;for(const e of a.parts)e.startOpacity+=(p-e.startTime)/P.v7*(e.targetOpacity>.5?1:-1),e.startOpacity=Math.min(Math.max(e.startOpacity,0),1),e.startTime=p,e.targetOpacity=a.show&&e.show?1:0}}},59047:(z,A,f)=>{f.d(A,{L:()=>R});var P=f(76763);class R{constructor(n,a,e){this.tileCoordRange=n,this._visibleTiles=a,this._createUnique=e,this._tiles=new Map,this._uniqueSymbolsReferences=new Map}get uniqueSymbols(){return null==this._uniqueSymbolLayerArray&&(this._uniqueSymbolLayerArray=this._createUniqueSymbolLayerArray()),this._uniqueSymbolLayerArray}get uniqueSymbolsReferences(){return this._uniqueSymbolsReferences}add(n,a){this._uniqueSymbolLayerArray=null;let e=this._tiles.get(n.id);e||(e={symbols:new Map},this._tiles.set(n.id,e));const i=new Map;if(a)for(const h of a)e.symbols.has(h)&&(i.set(h,e.symbols.get(h)),e.symbols.delete(h));else for(const[h,c]of n.layerData)e.symbols.has(h)&&(i.set(h,e.symbols.get(h)),e.symbols.delete(h));this._removeSymbols(i);const l=n.symbols,r=new Map;for(const[h,c]of l){let m=c.length;if(m>=32){let w=this.tileCoordRange;do{w/=2,m/=4}while(m>8&&w>64);const v=new P.HX(this.tileCoordRange,this.tileCoordRange,w);r.set(h,{flat:c,index:v}),e.symbols.set(h,{flat:c,index:v});for(const x of c)v.getCell(x.xTile,x.yTile).push(x)}else r.set(h,{flat:c}),e.symbols.set(h,{flat:c})}this._addSymbols(n.key,l)}deleteStyleLayers(n){this._uniqueSymbolLayerArray=null;for(const[a,e]of this._tiles){const i=new Map;for(const l of n)e.symbols.has(l)&&(i.set(l,e.symbols.get(l)),e.symbols.delete(l));this._removeSymbols(i),0===e.symbols.size&&this._tiles.delete(a)}}removeTile(n){this._uniqueSymbolLayerArray=null;const a=this._tiles.get(n.id);if(!a)return;const e=new Map;for(const[i,l]of n.symbols)a.symbols.has(i)&&(e.set(i,a.symbols.get(i)),a.symbols.delete(i));this._removeSymbols(e),0===a.symbols.size&&this._tiles.delete(n.id)}querySymbols(n,a,e,i){const l=[],r=this.uniqueSymbols;for(const h of r){const c=h.styleLayerUID,m=h.uniqueSymbols;for(const w of m){const v=w.tileSymbols.find(x=>x.selectedForRendering);v&&(0,P.Fe)(v,n,a*(window.devicePixelRatio||1),e)&&l.push({vtlSymbol:v,styleLayerUID:c,tileKey:v.tile.key})}}return l}_removeSymbols(n){for(const[a,{flat:e}]of n)for(const i of e){const l=i.unique,r=l.tileSymbols,h=r.length-1;for(let c=0;c<h;c++)if(r[c]===i){r[c]=r[h];break}if(r.length=h,0===h){const c=this._uniqueSymbolsReferences.get(a);c.delete(l),0===c.size&&this._uniqueSymbolsReferences.delete(a)}i.unique=null}}_addSymbols(n,a){if(0===a.size)return;const e=this._visibleTiles;for(const i of e)i.parentTile||i.key.world!==n.world||i.key.level===n.level&&!i.key.equals(n)||this._matchSymbols(i,n,a);for(const[i,l]of a)for(const r of l)if(null==r.unique){const h=this._createUnique();r.unique=h,h.tileSymbols.push(r);let c=this._uniqueSymbolsReferences.get(i);c||(c=new Set,this._uniqueSymbolsReferences.set(i,c)),c.add(h)}}_matchSymbols(n,a,e){if(n.key.level>a.level){const l=n.key.level-a.level;if(n.key.row>>l!==a.row||n.key.col>>l!==a.col)return}if(a.level>n.key.level){const l=a.level-n.key.level;if(a.row>>l!==n.key.row||a.col>>l!==n.key.col)return}if(a.equals(n.key)){for(const l of n.childrenTiles)this._matchSymbols(l,a,e);return}const i=new Map;for(const[l,r]of e){const h=[];for(const v of r){const x=(0,P.co)(this.tileCoordRange,v.xTile,a.level,a.col,n.key.level,n.key.col),I=(0,P.co)(this.tileCoordRange,v.yTile,a.level,a.row,n.key.level,n.key.row);x>=0&&x<this.tileCoordRange&&I>=0&&I<this.tileCoordRange&&h.push({symbol:v,xTransformed:x,yTransformed:I})}const c=[],m=n.key.level<a.level?1:1<<n.key.level-a.level,w=this._tiles.get(n.id).symbols.get(l);if(w){const v=w.flat;for(const x of h){let I,d=!1;const L=x.xTransformed,C=x.yTransformed;I=null!=w.index?w.index.getCell(L,C):v;const O=x.symbol,T=O.hash;for(const t of I)if(T===t.hash&&Math.abs(L-t.xTile)<=m&&Math.abs(C-t.yTile)<=m){const o=t.unique;O.unique=o,o.tileSymbols.push(O),d=!0;break}d||c.push(O)}}c.length>0&&i.set(l,c)}for(const l of n.childrenTiles)this._matchSymbols(l,a,i)}_createUniqueSymbolLayerArray(){const n=this._uniqueSymbolsReferences,a=new Array(n.size);let e,i=0;for(const[l,r]of n){const h=new Array(r.size);e=0;for(const c of r)h[e++]=c;a[i]={styleLayerUID:l,uniqueSymbols:h},i++}return a}}},78224:(z,A,f)=>{f.d(A,{f:()=>p});var P=f(2753),U=f(47132),D=f(76763),E=f(1268);function R(n,a,e,i,l,r){const{iconRotationAlignment:h,textRotationAlignment:c,iconTranslate:m,iconTranslateAnchor:w,textTranslate:v,textTranslateAnchor:x}=i;let I=0;for(const d of n.colliders){const[L,C]=0===d.partIndex?m:v,O=0===d.partIndex?w:x,T=d.minLod<=r&&r<=d.maxLod;I+=T?0:1,d.enabled=T,d.xScreen=d.xTile*l[0]+d.yTile*l[3]+l[6],d.yScreen=d.xTile*l[1]+d.yTile*l[4]+l[7],O===E.fD.MAP?(d.xScreen+=e*L-a*C,d.yScreen+=a*L+e*C):(d.xScreen+=L,d.yScreen+=C),E.aF.VIEWPORT===(0===d.partIndex?h:c)?(d.dxScreen=d.dxPixels,d.dyScreen=d.dyPixels):(d.dxScreen=e*(d.dxPixels+d.width/2)-a*(d.dyPixels+d.height/2)-d.width/2,d.dyScreen=a*(d.dxPixels+d.width/2)+e*(d.dyPixels+d.height/2)-d.height/2)}n.colliders.length>0&&I===n.colliders.length&&(n.unique.show=!1)}class p{constructor(a,e,i,l,r,h){this._symbols=a,this._styleRepository=l,this._zoom=r,this._currentLayerCursor=0,this._currentSymbolCursor=0,this._styleProps=new Map,this._allNeededMatrices=new Map,this._gridIndex=new D.HX(e,i,U.cn),this._si=Math.sin(Math.PI*h/180),this._co=Math.cos(Math.PI*h/180);for(const c of a)for(const m of c.symbols)this._allNeededMatrices.has(m.tile)||this._allNeededMatrices.set(m.tile,(0,P.d9)(m.tile.transforms.tileUnitsToPixels))}work(a){const e=this._gridIndex;function i(r){const h=r.xScreen+r.dxScreen,c=r.yScreen+r.dyScreen,m=h+r.width,w=c+r.height,[v,x,I,d]=e.getCellSpan(h,c,m,w);for(let L=x;L<=d;L++)for(let C=v;C<=I;C++){const O=e.cells[L][C];for(const T of O){const t=T.xScreen+T.dxScreen,o=T.yScreen+T.dyScreen;if(!(m<t||h>t+T.width||w<o||c>o+T.height))return!0}}return!1}const l=performance.now();for(;this._currentLayerCursor<this._symbols.length;this._currentLayerCursor++,this._currentSymbolCursor=0){const r=this._symbols[this._currentLayerCursor],h=this._getProperties(r.styleLayerUID);for(;this._currentSymbolCursor<r.symbols.length;this._currentSymbolCursor++){if(this._currentSymbolCursor%100==99&&performance.now()-l>a)return!1;const c=r.symbols[this._currentSymbolCursor];if(!c.unique.show)continue;R(c,this._si,this._co,h,this._allNeededMatrices.get(c.tile),this._zoom);const m=c.unique;if(!m.show)continue;const{iconAllowOverlap:w,iconIgnorePlacement:v,textAllowOverlap:x,textIgnorePlacement:I}=h;for(const d of c.colliders){if(!d.enabled)continue;const L=m.parts[d.partIndex];L.show&&!(d.partIndex?x:w)&&i(d)&&(d.hard?m.show=!1:L.show=!1)}if(m.show)for(const d of c.colliders){if(!d.enabled||(d.partIndex?I:v)||!m.parts[d.partIndex].show)continue;const L=d.xScreen+d.dxScreen,C=d.yScreen+d.dyScreen,O=L+d.width,T=C+d.height,[t,o,s,_]=this._gridIndex.getCellSpan(L,C,O,T);for(let u=o;u<=_;u++)for(let g=t;g<=s;g++)this._gridIndex.cells[u][g].push(d)}}}return!0}_getProperties(a){const e=this._styleProps.get(a);if(e)return e;const i=this._zoom,l=this._styleRepository.getStyleLayerByUID(a),r=l.getLayoutValue("symbol-placement",i)!==E.R.POINT;let h=l.getLayoutValue("icon-rotation-alignment",i);h===E.aF.AUTO&&(h=r?E.aF.MAP:E.aF.VIEWPORT);let c=l.getLayoutValue("text-rotation-alignment",i);c===E.aF.AUTO&&(c=r?E.aF.MAP:E.aF.VIEWPORT);const m=l.getPaintValue("icon-translate",i),w=l.getPaintValue("icon-translate-anchor",i),v=l.getPaintValue("text-translate",i),x=l.getPaintValue("text-translate-anchor",i),I={iconAllowOverlap:l.getLayoutValue("icon-allow-overlap",i),iconIgnorePlacement:l.getLayoutValue("icon-ignore-placement",i),textAllowOverlap:l.getLayoutValue("text-allow-overlap",i),textIgnorePlacement:l.getLayoutValue("text-ignore-placement",i),iconRotationAlignment:h,textRotationAlignment:c,iconTranslateAnchor:w,iconTranslate:m,textTranslateAnchor:x,textTranslate:v};return this._styleProps.set(a,I),I}}},92862:(z,A,f)=>{f.d(A,{Z:()=>E});var P=f(2584),U=f(9598),D=f(58098);class E extends U.Z{constructor(){super(...arguments),this._fullCacheLodInfos=null,this._levelByScale={}}getTileParentId(p){const n=D.Z.pool.acquire(p),a=0===n.level?null:D.Z.getId(n.level-1,n.row>>1,n.col>>1,n.world);return D.Z.pool.release(n),a}getTileCoverage(p,n,a=!0,e){const i=super.getTileCoverage(p,n,a,e);if(!i)return i;const l=1<<i.lodInfo.level;return i.spans=i.spans.filter(r=>r.row>=0&&r.row<l),i}scaleToLevel(p){if(this._fullCacheLodInfos||this._initializeFullCacheLODs(this._lodInfos),this._levelByScale[p])return this._levelByScale[p];{const n=this._fullCacheLodInfos;if(p>n[0].scale)return n[0].level;let a,e;for(let i=0;i<n.length-1;i++)if(e=n[i+1],p>e.scale)return a=n[i],a.level+(a.scale-p)/(a.scale-e.scale);return n[n.length-1].level}}_initializeFullCacheLODs(p){let n;n=0===p[0].level?p.map(a=>({level:a.level,resolution:a.resolution,scale:a.scale})):P.Z.create({size:this.tileInfo.size[0],spatialReference:this.tileInfo.spatialReference}).lods.map(i=>({level:i.level,resolution:i.resolution,scale:i.scale}));for(let a=0;a<n.length;a++)this._levelByScale[n[a].scale]=n[a].level;this._fullCacheLodInfos=n}}},45611:(z,A,f)=>{f.d(A,{Z:()=>c});var P=f(17626),U=f(83761),D=f(61885),E=f(61996),R=f(63290),p=f(62208),n=f(60330),a=f(77712),l=(f(8314),f(4619),f(76898)),r=f(11426);let h=class extends((0,E.IG)((0,n.v)(D.Z.EventedMixin(U.Z)))){constructor(m){super(m),this._updatingHandles=new r.R,this.layer=null,this.parent=null}initialize(){this.when().catch(m=>{if("layerview:create-error"!==m.name){const w=this.layer&&this.layer.id||"no id",v=this.layer?.title||"no title";R.Z.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${v}', id: '${w}')`,m)}})}destroy(){this._updatingHandles=(0,p.SC)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(m){this._overrideIfSome("visible",m)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const m=this.parent?.suspended?this.parent.suspendInfo:{};return this.view?.ready||(m.viewNotReady=!0),this.layer&&this.layer.loaded||(m.layerNotLoaded=!0),this.visible||(m.layerInvisible=!0),m}isUpdating(){return!1}};(0,P._)([(0,a.Cb)()],h.prototype,"fullOpacity",null),(0,P._)([(0,a.Cb)()],h.prototype,"layer",void 0),(0,P._)([(0,a.Cb)()],h.prototype,"parent",void 0),(0,P._)([(0,a.Cb)({readOnly:!0})],h.prototype,"suspended",null),(0,P._)([(0,a.Cb)({readOnly:!0})],h.prototype,"suspendInfo",null),(0,P._)([(0,a.Cb)({readOnly:!0})],h.prototype,"legendEnabled",null),(0,P._)([(0,a.Cb)({type:Boolean,readOnly:!0})],h.prototype,"updating",null),(0,P._)([(0,a.Cb)({readOnly:!0})],h.prototype,"updatingProgress",null),(0,P._)([(0,a.Cb)()],h.prototype,"visible",null),(0,P._)([(0,a.Cb)()],h.prototype,"view",void 0),h=(0,P._)([(0,l.j)("esri.views.layers.LayerView")],h);const c=h}}]);