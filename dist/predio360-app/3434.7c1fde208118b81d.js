"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[3434,5611],{13160:(U,C,S)=>{var D,T,l;S.d(C,{E9:()=>M,I6:()=>d,Vl:()=>D,bN:()=>w}),(l=D||(D={}))[l.Unknown=0]="Unknown",l[l.Point=1]="Point",l[l.LineString=2]="LineString",l[l.Polygon=3]="Polygon";class M{constructor(t,e){this.x=t,this.y=e}clone(){return new M(this.x,this.y)}equals(t,e){return t===this.x&&e===this.y}isEqual(t){return t.x===this.x&&t.y===this.y}setCoords(t,e){this.x=t,this.y=e}normalize(){const t=this.x,e=this.y,h=Math.sqrt(t*t+e*e);this.x/=h,this.y/=h}rightPerpendicular(){const t=this.x;this.x=this.y,this.y=-t}move(t,e){this.x+=t,this.y+=e}assign(t){this.x=t.x,this.y=t.y}assignAdd(t,e){this.x=t.x+e.x,this.y=t.y+e.y}assignSub(t,e){this.x=t.x-e.x,this.y=t.y-e.y}rotate(t,e){const h=this.x,a=this.y;this.x=h*t-a*e,this.y=h*e+a*t}scale(t){this.x*=t,this.y*=t}length(){const t=this.x,e=this.y;return Math.sqrt(t*t+e*e)}static distance(t,e){const h=e.x-t.x,a=e.y-t.y;return Math.sqrt(h*h+a*a)}static add(t,e){return new M(t.x+e.x,t.y+e.y)}static sub(t,e){return new M(t.x-e.x,t.y-e.y)}}class E{constructor(t,e,h){this.ratio=t,this.x=e,this.y=h}}class w{constructor(t,e,h,a=8,o=8){this._lines=[],this._starts=[],this.validateTessellation=!0,this._pixelRatio=a,this._pixelMargin=o,this._tileSize=512*a,this._dz=t,this._yPos=e,this._xPos=h}setPixelMargin(t){t!==this._pixelMargin&&(this._pixelMargin=t,this.setExtent(this._extent))}setExtent(t){this._extent=t,this._finalRatio=this._tileSize/t*(1<<this._dz);let e=this._pixelRatio*this._pixelMargin;e/=this._finalRatio;const h=t>>this._dz;e>h&&(e=h),this._margin=e,this._xmin=h*this._xPos-e,this._ymin=h*this._yPos-e,this._xmax=this._xmin+h+2*e,this._ymax=this._ymin+h+2*e}reset(t){this._type=t,this._lines=[],this._starts=[],this._line=null,this._start=0}moveTo(t,e){this._pushLine(),this._prevIsIn=this._isIn(t,e),this._moveTo(t,e,this._prevIsIn),this._prevPt=new M(t,e),this._firstPt=new M(t,e),this._dist=0}lineTo(t,e){const h=this._isIn(t,e),a=new M(t,e),o=M.distance(this._prevPt,a);let y,p,m,x,f,i,n,s;if(h)this._prevIsIn?this._lineTo(t,e,!0):(y=this._prevPt,p=a,m=this._intersect(p,y),this._start=this._dist+o*(1-this._r),this._lineTo(m.x,m.y,!0),this._lineTo(p.x,p.y,!0));else if(this._prevIsIn)p=this._prevPt,y=a,m=this._intersect(p,y),this._lineTo(m.x,m.y,!0),this._lineTo(y.x,y.y,!1);else{const r=this._prevPt,c=a;if(r.x<=this._xmin&&c.x<=this._xmin||r.x>=this._xmax&&c.x>=this._xmax||r.y<=this._ymin&&c.y<=this._ymin||r.y>=this._ymax&&c.y>=this._ymax)this._lineTo(c.x,c.y,!1);else{const g=[];if((r.x<this._xmin&&c.x>this._xmin||r.x>this._xmin&&c.x<this._xmin)&&(x=(this._xmin-r.x)/(c.x-r.x),s=r.y+x*(c.y-r.y),s<=this._ymin?i=!1:s>=this._ymax?i=!0:g.push(new E(x,this._xmin,s))),(r.x<this._xmax&&c.x>this._xmax||r.x>this._xmax&&c.x<this._xmax)&&(x=(this._xmax-r.x)/(c.x-r.x),s=r.y+x*(c.y-r.y),s<=this._ymin?i=!1:s>=this._ymax?i=!0:g.push(new E(x,this._xmax,s))),(r.y<this._ymin&&c.y>this._ymin||r.y>this._ymin&&c.y<this._ymin)&&(x=(this._ymin-r.y)/(c.y-r.y),n=r.x+x*(c.x-r.x),n<=this._xmin?f=!1:n>=this._xmax?f=!0:g.push(new E(x,n,this._ymin))),(r.y<this._ymax&&c.y>this._ymax||r.y>this._ymax&&c.y<this._ymax)&&(x=(this._ymax-r.y)/(c.y-r.y),n=r.x+x*(c.x-r.x),n<=this._xmin?f=!1:n>=this._xmax?f=!0:g.push(new E(x,n,this._ymax))),0===g.length)this._lineTo(f?this._xmax:this._xmin,i?this._ymax:this._ymin,!0);else if(g.length>1&&g[0].ratio>g[1].ratio)this._start=this._dist+o*g[1].ratio,this._lineTo(g[1].x,g[1].y,!0),this._lineTo(g[0].x,g[0].y,!0);else{this._start=this._dist+o*g[0].ratio;for(let b=0;b<g.length;b++)this._lineTo(g[b].x,g[b].y,!0)}this._lineTo(c.x,c.y,!1)}}this._dist+=o,this._prevIsIn=h,this._prevPt=a}close(){if(this._line.length>2){const t=this._firstPt,e=this._prevPt;t.x===e.x&&t.y===e.y||this.lineTo(t.x,t.y);const h=this._line;let a=h.length;for(;a>=4&&(h[0].x===h[1].x&&h[0].x===h[a-2].x||h[0].y===h[1].y&&h[0].y===h[a-2].y);)h.pop(),h[0].x=h[a-2].x,h[0].y=h[a-2].y,--a}}result(t=!0){return this._pushLine(),0===this._lines.length?null:(this._type===D.Polygon&&t&&_.simplify(this._tileSize,this._margin*this._finalRatio,this._lines),this._lines)}resultWithStarts(){if(this._type!==D.LineString)throw new Error("Only valid for lines");this._pushLine();const t=this._lines,e=t.length;if(0===e)return null;const h=[];for(let a=0;a<e;a++)h.push({line:t[a],start:this._starts[a]||0});return h}_isIn(t,e){return t>=this._xmin&&t<=this._xmax&&e>=this._ymin&&e<=this._ymax}_intersect(t,e){let h,a,o;if(e.x>=this._xmin&&e.x<=this._xmax)a=e.y<=this._ymin?this._ymin:this._ymax,o=(a-t.y)/(e.y-t.y),h=t.x+o*(e.x-t.x);else if(e.y>=this._ymin&&e.y<=this._ymax)h=e.x<=this._xmin?this._xmin:this._xmax,o=(h-t.x)/(e.x-t.x),a=t.y+o*(e.y-t.y);else{a=e.y<=this._ymin?this._ymin:this._ymax,h=e.x<=this._xmin?this._xmin:this._xmax;const y=(h-t.x)/(e.x-t.x),p=(a-t.y)/(e.y-t.y);y<p?(o=y,a=t.y+y*(e.y-t.y)):(o=p,h=t.x+p*(e.x-t.x))}return this._r=o,new M(h,a)}_pushLine(){this._line&&(this._type===D.Point?this._line.length>0&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===D.LineString?this._line.length>1&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===D.Polygon&&this._line.length>3&&(this._lines.push(this._line),this._starts.push(this._start))),this._line=[],this._start=0}_moveTo(t,e,h){this._type!==D.Polygon?h&&(t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),e=Math.round((e-(this._ymin+this._margin))*this._finalRatio),this._line.push(new M(t,e))):(h||(t<this._xmin&&(t=this._xmin),t>this._xmax&&(t=this._xmax),e<this._ymin&&(e=this._ymin),e>this._ymax&&(e=this._ymax)),t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),e=Math.round((e-(this._ymin+this._margin))*this._finalRatio),this._line.push(new M(t,e)),this._isH=!1,this._isV=!1)}_lineTo(t,e,h){let a,o;if(this._type!==D.Polygon)if(h){if(t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),e=Math.round((e-(this._ymin+this._margin))*this._finalRatio),this._line.length>0&&(a=this._line[this._line.length-1],a.equals(t,e)))return;this._line.push(new M(t,e))}else this._line&&this._line.length>0&&this._pushLine();else if(h||(t<this._xmin&&(t=this._xmin),t>this._xmax&&(t=this._xmax),e<this._ymin&&(e=this._ymin),e>this._ymax&&(e=this._ymax)),t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),e=Math.round((e-(this._ymin+this._margin))*this._finalRatio),this._line&&this._line.length>0){a=this._line[this._line.length-1];const y=a.x===t,p=a.y===e;if(y&&p)return;this._isH&&y||this._isV&&p?(a.x=t,a.y=e,o=this._line[this._line.length-2],o.x===t&&o.y===e?(this._line.pop(),this._line.length<=1?(this._isH=!1,this._isV=!1):(o=this._line[this._line.length-2],this._isH=o.x===t,this._isV=o.y===e)):(this._isH=o.x===t,this._isV=o.y===e)):(this._line.push(new M(t,e)),this._isH=y,this._isV=p)}else this._line.push(new M(t,e))}}class d{setExtent(t){this._ratio=4096===t?1:4096/t}get validateTessellation(){return this._ratio<1}reset(t){this._lines=[],this._line=null}moveTo(t,e){this._line&&this._lines.push(this._line),this._line=[];const h=this._ratio;this._line.push(new M(t*h,e*h))}lineTo(t,e){const h=this._ratio;this._line.push(new M(t*h,e*h))}close(){const t=this._line;t&&!t[0].isEqual(t[t.length-1])&&t.push(t[0])}result(){return this._line&&this._lines.push(this._line),0===this._lines.length?null:this._lines}}!function(l){l[l.sideLeft=0]="sideLeft",l[l.sideRight=1]="sideRight",l[l.sideTop=2]="sideTop",l[l.sideBottom=3]="sideBottom"}(T||(T={}));class _{static simplify(t,e,h){if(!h)return;const a=-e,o=t+e,y=-e,p=t+e,m=[],x=[],f=h.length;for(let n=0;n<f;++n){const s=h[n];if(!s||s.length<2)continue;let r,c=s[0];const g=s.length;for(let b=1;b<g;++b)r=s[b],c.x===r.x&&(c.x<=a&&(c.y>r.y?(m.push(n),m.push(b),m.push(T.sideLeft),m.push(-1)):(x.push(n),x.push(b),x.push(T.sideLeft),x.push(-1))),c.x>=o&&(c.y<r.y?(m.push(n),m.push(b),m.push(T.sideRight),m.push(-1)):(x.push(n),x.push(b),x.push(T.sideRight),x.push(-1)))),c.y===r.y&&(c.y<=y&&(c.x<r.x?(m.push(n),m.push(b),m.push(T.sideTop),m.push(-1)):(x.push(n),x.push(b),x.push(T.sideTop),x.push(-1))),c.y>=p&&(c.x>r.x?(m.push(n),m.push(b),m.push(T.sideBottom),m.push(-1)):(x.push(n),x.push(b),x.push(T.sideBottom),x.push(-1)))),c=r}if(0===m.length||0===x.length)return;_.fillParent(h,x,m),_.fillParent(h,m,x);const i=[];_.calcDeltas(i,x,m),_.calcDeltas(i,m,x),_.addDeltas(i,h)}static fillParent(t,e,h){const a=h.length,o=e.length;for(let y=0;y<o;y+=4){const p=e[y],m=e[y+1],x=e[y+2],f=t[p][m-1],i=t[p][m];let n=8092,s=-1;for(let r=0;r<a;r+=4){if(h[r+2]!==x)continue;const c=h[r],g=h[r+1],b=t[c][g-1],v=t[c][g];switch(x){case T.sideLeft:case T.sideRight:if(u(f.y,b.y,v.y)&&u(i.y,b.y,v.y)){const P=Math.abs(v.y-b.y);P<n&&(n=P,s=r)}break;case T.sideTop:case T.sideBottom:if(u(f.x,b.x,v.x)&&u(i.x,b.x,v.x)){const P=Math.abs(v.x-b.x);P<n&&(n=P,s=r)}}}e[y+3]=s}}static calcDeltas(t,e,h){const a=e.length;for(let o=0;o<a;o+=4){const p=_.calcDelta(o,e,h,[]);t.push(e[o]),t.push(e[o+1]),t.push(e[o+2]),t.push(p)}}static calcDelta(t,e,h,a){const o=e[t+3];if(-1===o)return 0;const y=a.length;return y>1&&a[y-2]===o?0:(a.push(o),_.calcDelta(o,h,e,a)+1)}static addDeltas(t,e){const h=t.length;let a=0;for(let o=0;o<h;o+=4){const y=t[o+3];y>a&&(a=y)}for(let o=0;o<h;o+=4){const y=e[t[o]],p=t[o+1],m=a-t[o+3];switch(t[o+2]){case T.sideLeft:y[p-1].x-=m,y[p].x-=m,1===p&&(y[y.length-1].x-=m),p===y.length-1&&(y[0].x-=m);break;case T.sideRight:y[p-1].x+=m,y[p].x+=m,1===p&&(y[y.length-1].x+=m),p===y.length-1&&(y[0].x+=m);break;case T.sideTop:y[p-1].y-=m,y[p].y-=m,1===p&&(y[y.length-1].y-=m),p===y.length-1&&(y[0].y-=m);break;case T.sideBottom:y[p-1].y+=m,y[p].y+=m,1===p&&(y[y.length-1].y+=m),p===y.length-1&&(y[0].y+=m)}}}}const u=(l,t,e)=>l>=t&&l<=e||l>=e&&l<=t},26996:(U,C,S)=>{S.d(C,{Y:()=>M,m:()=>E});var I=S(36161),D=S(21286);const T=w=>"vertical"===w||"horizontal"===w||"cross"===w||"esriSFSCross"===w||"esriSFSVertical"===w||"esriSFSHorizontal"===w;function M(w,d,_){const u=(0,D.fp)(Math.ceil(_)),l=T(d)?8*u:16*u,t=2*u;w.width=l,w.height=l;const e=w.getContext("2d");e.strokeStyle="#FFFFFF",e.lineWidth=u,e.beginPath(),"vertical"!==d&&"cross"!==d&&"esriSFSCross"!==d&&"esriSFSVertical"!==d||(e.moveTo(l/2,-t),e.lineTo(l/2,l+t)),"horizontal"!==d&&"cross"!==d&&"esriSFSCross"!==d&&"esriSFSHorizontal"!==d||(e.moveTo(-t,l/2),e.lineTo(l+t,l/2)),"forward-diagonal"!==d&&"diagonal-cross"!==d&&"esriSFSDiagonalCross"!==d&&"esriSFSForwardDiagonal"!==d||(e.moveTo(-t,-t),e.lineTo(l+t,l+t),e.moveTo(l-t,-t),e.lineTo(l+t,t),e.moveTo(-t,l-t),e.lineTo(t,l+t)),"backward-diagonal"!==d&&"diagonal-cross"!==d&&"esriSFSBackwardDiagonal"!==d&&"esriSFSDiagonalCross"!==d||(e.moveTo(l+t,-t),e.lineTo(-t,l+t),e.moveTo(t,-t),e.lineTo(-t,t),e.moveTo(l+t,l-t),e.lineTo(l-t,l+t)),e.stroke();const h=e.getImageData(0,0,w.width,w.height),a=new Uint8Array(h.data);let o;for(let y=0;y<a.length;y+=4)o=a[y+3]/255,a[y]=a[y]*o,a[y+1]=a[y+1]*o,a[y+2]=a[y+2]*o;return[a,w.width,w.height]}function E(w,d){const _="Butt"===d,u="Square"===d,l=!_&&!u;w.length%2==1&&(w=[...w,...w]);const t=15.5;let h=0;for(const s of w)h+=s;const a=Math.round(h*t),o=new Float32Array(31*a),y=7.75;let p=0,m=0,x=.5,f=!0;for(const s of w){for(p=m,m+=s*t;x<=m;){let r=.5;for(;r<31;){const c=(r-.5)*a+x-.5,g=l?(r-t)*(r-t):Math.abs(r-t);o[c]=f?_?Math.max(Math.max(p+y-x,g),Math.max(x-m+y,g)):g:l?Math.min((x-p)*(x-p)+g,(x-m)*(x-m)+g):u?Math.min(Math.max(x-p,g),Math.max(m-x,g)):Math.min(Math.max(x-p+y,g),Math.max(m+y-x,g)),r++}x++}f=!f}const i=o.length,n=new Uint8Array(4*i);for(let s=0;s<i;++s){const r=(l?Math.sqrt(o[s]):o[s])/t;(0,I.I)(r,n,4*s)}return[n,a,31]}},86575:(U,C,S)=>{S.d(C,{B1:()=>I,DQ:()=>_,DT:()=>w,JJ:()=>D,Or:()=>u,_U:()=>T,k3:()=>t,sX:()=>h});const I=Number.POSITIVE_INFINITY,D=Math.PI,T=2*D,M=128/D,w=D/180,d=1/Math.LN2;function _(o,y){return(o%=y)>=0?o:o+y}function u(o){return _(o*M,256)}function t(o){return Math.log(o)*d}function h(o,y,p){return o*(1-p)+y*p}},63631:(U,C,S)=>{S.d(C,{m:()=>x});var I=S(15861),D=S(10699),T=S(21726),M=S(59289),E=S(84439);class w{constructor(i,n){this._width=0,this._height=0,this._free=[],this._width=i,this._height=n,this._free.push(new E.Z(0,0,i,n))}get width(){return this._width}get height(){return this._height}allocate(i,n){if(i>this._width||n>this._height)return new E.Z;let s=null,r=-1;for(let c=0;c<this._free.length;++c){const g=this._free[c];i<=g.width&&n<=g.height&&(null===s||g.y<=s.y&&g.x<=s.x)&&(s=g,r=c)}return null===s?new E.Z:(this._free.splice(r,1),s.width<s.height?(s.width>i&&this._free.push(new E.Z(s.x+i,s.y,s.width-i,n)),s.height>n&&this._free.push(new E.Z(s.x,s.y+n,s.width,s.height-n))):(s.width>i&&this._free.push(new E.Z(s.x+i,s.y,s.width-i,s.height)),s.height>n&&this._free.push(new E.Z(s.x,s.y+n,i,s.height-n))),new E.Z(s.x,s.y,i,n))}release(i){for(let n=0;n<this._free.length;++n){const s=this._free[n];if(s.y===i.y&&s.height===i.height&&s.x+s.width===i.x)s.width+=i.width;else if(s.x===i.x&&s.width===i.width&&s.y+s.height===i.y)s.height+=i.height;else if(i.y===s.y&&i.height===s.height&&i.x+i.width===s.x)s.x=i.x,s.width+=i.width;else{if(i.x!==s.x||i.width!==s.width||i.y+i.height!==s.y)continue;s.y=i.y,s.height+=i.height}this._free.splice(n,1),this.release(i)}this._free.push(i)}}var d=S(67969),_=S(55086);class u{constructor(i,n,s){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,this.width=i,this.height=n,this._glyphSource=s,this._binPack=new w(i-4,n-4),this._glyphData.push(new Uint8Array(i*n)),this._dirties.push(!0),this._textures.push(void 0)}getGlyphItems(i,n){const s=[],r=this._glyphSource,c=new Set;for(const v of n){const P=Math.floor(.00390625*v);c.add(P)}const b=[];return c.forEach(v=>{if(v<=256){const P=i+v;if(this._rangePromises.has(P))b.push(this._rangePromises.get(P));else{const R=r.getRange(i,v).then(()=>{this._rangePromises.delete(P)},()=>{this._rangePromises.delete(P)});this._rangePromises.set(P,R),b.push(R)}}}),Promise.all(b).then(()=>{let v=this._glyphIndex[i];v||(v={},this._glyphIndex[i]=v);for(const P of n){const R=v[P];if(R){s[P]={sdf:!0,rect:R.rect,metrics:R.metrics,page:R.page,code:P};continue}const B=r.getGlyph(i,P);if(!B||!B.metrics)continue;const A=B.metrics;let O;if(0===A.width)O=new E.Z(0,0,0,0);else{const L=A.width+6,z=A.height+6;let W=L%4?4-L%4:4,F=z%4?4-z%4:4;1===W&&(W=5),1===F&&(F=5),O=this._binPack.allocate(L+W,z+F),O.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(void 0),this._binPack=new w(this.width-4,this.height-4),O=this._binPack.allocate(L+W,z+F));const N=this._glyphData[this._currentPage],V=B.bitmap;let H,Z;if(V)for(let J=0;J<z;J++){H=L*J,Z=this.width*(O.y+J+1)+O.x;for(let K=0;K<L;K++)N[Z+K+1]=V[H+K]}}v[P]={rect:O,metrics:A,tileIDs:null,page:this._currentPage},s[P]={sdf:!0,rect:O,metrics:A,page:this._currentPage,code:P},this._dirties[this._currentPage]=!0}return s})}removeGlyphs(i){for(const n in this._glyphIndex){const s=this._glyphIndex[n];if(!s)continue;let r;for(const c in s)if(r=s[c],r.tileIDs.delete(i),0===r.tileIDs.size){const g=this._glyphData[r.page],b=r.rect;let v,P;for(let R=0;R<b.height;R++)for(v=this.width*(b.y+R)+b.x,P=0;P<b.width;P++)g[v+P]=0;delete s[c],this._dirties[r.page]=!0}}}bind(i,n,s,r=0){this._textures[s]||(this._textures[s]=new _.x(i,{pixelFormat:d.VI.ALPHA,dataType:d.Br.UNSIGNED_BYTE,width:this.width,height:this.height},new Uint8Array(this.width*this.height)));const c=this._textures[s];c.setSamplingMode(n),this._dirties[s]&&c.setData(this._glyphData[s]),i.bindTexture(c,r),this._dirties[s]=!1}dispose(){this._binPack=null;for(const i of this._textures)i&&i.dispose();this._textures.length=0}}var l=S(84792),t=S(24192);class e{constructor(i){if(this._metrics=[],this._bitmaps=[],i)for(;i.next();)switch(i.tag()){case 1:{const n=i.getMessage();for(;n.next();)switch(n.tag()){case 3:{const s=n.getMessage();let r,c,g,b,v,P,R;for(;s.next();)switch(s.tag()){case 1:r=s.getUInt32();break;case 2:c=s.getBytes();break;case 3:g=s.getUInt32();break;case 4:b=s.getUInt32();break;case 5:v=s.getSInt32();break;case 6:P=s.getSInt32();break;case 7:R=s.getUInt32();break;default:s.skip()}s.release(),r&&(this._metrics[r]={width:g,height:b,left:v,top:P,advance:R},this._bitmaps[r]=c);break}default:n.skip()}n.release();break}default:i.skip()}}getMetrics(i){return this._metrics[i]}getBitmap(i){return this._bitmaps[i]}}class h{constructor(){this._ranges=[]}getRange(i){return this._ranges[i]}addRange(i,n){this._ranges[i]=n}}class a{constructor(i){this._glyphInfo={},this._baseURL=i}getRange(i,n){const s=this._getFontStack(i);if(s.getRange(n))return Promise.resolve();const r=256*n,c=r+255;if(this._baseURL){const g=this._baseURL.replace("{fontstack}",i).replace("{range}",r+"-"+c);return(0,l.default)(g,{responseType:"array-buffer"}).then(b=>{s.addRange(n,new e(new t.Z(new Uint8Array(b.data),new DataView(b.data))))}).catch(()=>{s.addRange(n,new e)})}return s.addRange(n,new e),Promise.resolve()}getGlyph(i,n){const s=this._getFontStack(i);if(!s)return;const r=Math.floor(n/256);if(r>256)return;const c=s.getRange(r);return c?{metrics:c.getMetrics(n),bitmap:c.getBitmap(n)}:void 0}_getFontStack(i){let n=this._glyphInfo[i];return n||(n=this._glyphInfo[i]=new h),n}}var o=S(26996);class p{constructor(i,n,s=0){this._size=[],this._mosaicsData=[],this._textures=[],this._dirties=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects={},this.pixelRatio=1,(i<=0||n<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=i,this._pageHeight=n,s>0&&(this._maxItemSize=s),this._binPack=new w(i-4,n-4)}dispose(){this._binPack=null,this._mosaicRects={};for(const i of this._textures)i&&i.dispose();this._textures.length=0}getWidth(i){return i>=this._size.length?-1:this._size[i][0]}getHeight(i){return i>=this._size.length?-1:this._size[i][1]}getPageSize(i){return i>=this._size.length?null:this._size[i]}setSpriteSource(i){if(this.dispose(),this.pixelRatio=i.devicePixelRatio,0===this._mosaicsData.length){this._binPack=new w(this._pageWidth-4,this._pageHeight-4);const n=Math.floor(this._pageWidth),s=Math.floor(this._pageHeight),r=new Uint32Array(n*s);this._mosaicsData[0]=r,this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0)}this._sprites=i}getSpriteItem(i,n=!1){let s,r,c=this._mosaicRects[i];if(c)return c;if(!this._sprites||"loaded"!==this._sprites.loadStatus||(i&&i.startsWith("dasharray-")?([s,r]=this._rasterizeDash(i),n=!0):s=this._sprites.getSpriteInfo(i),!s||!s.width||!s.height||s.width<0||s.height<0))return null;const g=s.width,b=s.height,[v,P,R]=this._allocateImage(g,b);return v.width<=0?null:(this._copy(v,s,P,R,n,r),c={rect:v,width:g,height:b,sdf:s.sdf,simplePattern:!1,pixelRatio:s.pixelRatio,page:P},this._mosaicRects[i]=c,c)}getSpriteItems(i){const n={};for(const s of i)n[s.name]=this.getSpriteItem(s.name,s.repeat);return n}getMosaicItemPosition(i,n){const s=this.getSpriteItem(i,n),r=s&&s.rect;return r?(r.width=s.width,r.height=s.height,{tl:[r.x+2,r.y+2],br:[r.x+2+s.width,r.y+2+s.height],page:s.page}):null}bind(i,n,s=0,r=0){if(s>=this._size.length||s>=this._mosaicsData.length)return;this._textures[s]||(this._textures[s]=new _.x(i,{pixelFormat:d.VI.RGBA,dataType:d.Br.UNSIGNED_BYTE,wrapMode:d.e8.CLAMP_TO_EDGE,width:this._size[s][0],height:this._size[s][1]},new Uint8Array(this._mosaicsData[s].buffer)));const c=this._textures[s];c.setSamplingMode(n),this._dirties[s]&&c.setData(new Uint8Array(this._mosaicsData[s].buffer)),i.bindTexture(c,r),this._dirties[s]=!1}static _copyBits(i,n,s,r,c,g,b,v,P,R,B){let A=r*n+s,O=v*g+b;if(B){O-=g;for(let k=-1;k<=R;k++,A=((k+R)%R+r)*n+s,O+=g)for(let L=-1;L<=P;L++)c[O+L]=i[A+(L+P)%P]}else for(let k=0;k<R;k++){for(let L=0;L<P;L++)c[O+L]=i[A+L];A+=n,O+=g}}_copy(i,n,s,r,c,g){if(!this._sprites||"loaded"!==this._sprites.loadStatus||s>=this._mosaicsData.length)return;const b=new Uint32Array(g?g.buffer:this._sprites.image.buffer),v=this._mosaicsData[s];v&&b||console.error("Source or target images are uninitialized!"),p._copyBits(b,g?n.width:this._sprites.width,n.x,n.y,v,r[0],i.x+2,i.y+2,n.width,n.height,c),this._dirties[s]=!0}_allocateImage(i,n){i+=2,n+=2;const s=Math.max(i,n);if(this._maxItemSize&&this._maxItemSize<s){const b=new E.Z(0,0,i,n);return this._mosaicsData.push(new Uint32Array(i*n)),this._dirties.push(!0),this._size.push([i,n]),this._textures.push(void 0),[b,this._mosaicsData.length-1,[i,n]]}let r=i%4?4-i%4:4,c=n%4?4-n%4:4;1===r&&(r=5),1===c&&(c=5);const g=this._binPack.allocate(i+r,n+c);return g.width<=0?(this._dirties[this._currentPage]||(this._mosaicsData[this._currentPage]=null),this._currentPage=this._mosaicsData.length,this._mosaicsData.push(new Uint32Array(this._pageWidth*this._pageHeight)),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0),this._binPack=new w(this._pageWidth-4,this._pageHeight-4),this._allocateImage(i,n)):[g,this._currentPage,[this._pageWidth,this._pageHeight]]}_rasterizeDash(i){const s=i.match(/\[(.*?)\]/);if(!s)return null;const r=s[1].split(",").map(Number),c=i.slice(i.lastIndexOf("-")+1),[g,b,v]=(0,o.m)(r,c);return[{x:0,y:0,width:b,height:v,sdf:!0,pixelRatio:1},new Uint8Array(g.buffer)]}}var m=S(58098);class x{constructor(i,n,s){this._layer=i,this._styleRepository=n,this.devicePixelRatio=s,this._spriteMosaic=null,this._glyphMosaic=null,this._connection=null}destroy(){this._connection?.close(),this._connection=null,this._styleRepository=null,this._layer=null,this._spriteMosaic=null,this._glyphMosaic=null}get spriteMosaic(){return this._spriteSourcePromise.then(()=>this._spriteMosaic)}get glyphMosaic(){return this._glyphMosaic}start(i){var n=this;return(0,I.Z)(function*(){n._spriteSourcePromise=n._layer.loadSpriteSource(n.devicePixelRatio,i),n._spriteSourcePromise.then(c=>{n._spriteMosaic=new p(1024,1024,250),n._spriteMosaic.setSpriteSource(c)});const s=n._layer.currentStyleInfo.glyphsUrl,r=new a(s?(0,T.fl)(s,{...n._layer.customParameters,token:n._layer.apiKey}):null);n._glyphMosaic=new u(1024,1024,r),n._broadcastPromise=(0,M.bA)("WorkerTileHandler",{client:n,schedule:i.schedule,signal:i.signal}).then(c=>{if(n._connection=c,n._layer&&!n._connection.closed){const g=c.broadcast("setStyle",n._layer.currentStyleInfo.style,i);Promise.all(g).catch(b=>(0,D.H9)(b))}})})()}updateStyle(i){var n=this;return(0,I.Z)(function*(){return yield n._broadcastPromise,n._broadcastPromise=Promise.all(n._connection.broadcast("updateStyle",i)),n._broadcastPromise})()}setSpriteSource(i){const n=new p(1024,1024,250);return n.setSpriteSource(i),this._spriteMosaic=n,this._spriteSourcePromise=Promise.resolve(i),n}setStyle(i,n){var s=this;return(0,I.Z)(function*(){yield s._broadcastPromise,s._styleRepository=i,s._spriteSourcePromise=s._layer.loadSpriteSource(s.devicePixelRatio,null),s._spriteSourcePromise.then(c=>{s._spriteMosaic=new p(1024,1024,250),s._spriteMosaic.setSpriteSource(c)});const r=new a(s._layer.currentStyleInfo.glyphsUrl?(0,T.fl)(s._layer.currentStyleInfo.glyphsUrl,{...s._layer.customParameters,token:s._layer.apiKey}):null);return s._glyphMosaic=new u(1024,1024,r),s._broadcastPromise=Promise.all(s._connection.broadcast("setStyle",n)),s._broadcastPromise})()}fetchTileData(i,n){return this._getRefKeys(i,n).then(s=>{const r=this._layer.sourceNameToSource,c=[];for(const g in r)c.push(g);return this._getSourcesData(c,s,n)})}parseTileData(i,n){const s=i&&i.data;if(!s)return Promise.resolve(null);const{sourceName2DataAndRefKey:r,transferList:c}=s;return 0===Object.keys(r).length?Promise.resolve(null):this._broadcastPromise.then(()=>this._connection.invoke("createTileAndParse",{key:i.key.id,sourceName2DataAndRefKey:r,styleLayerUIDs:i.styleLayerUIDs},{...n,transferList:c}))}getSprites(i){var n=this;return(0,I.Z)(function*(){return yield n._spriteSourcePromise,n._spriteMosaic.getSpriteItems(i)})()}getGlyphs(i){return this._glyphMosaic.getGlyphItems(i.font,i.codePoints)}_getTilePayload(i,n,s){var r=this;return(0,I.Z)(function*(){const c=m.Z.pool.acquire(i.id),g=r._layer.sourceNameToSource[n],{level:b,row:v,col:P}=c;m.Z.pool.release(c);try{return{protobuff:yield g.requestTile(b,v,P,s),sourceName:n}}catch(R){if((0,D.D_)(R))throw R;return{protobuff:null,sourceName:n}}})()}_getRefKeys(i,n){const s=this._layer.sourceNameToSource,r=new Array;for(const c in s){const g=s[c].getRefKey(i,n);r.push(g)}return(0,D.as)(r)}_getSourcesData(i,n,s){const r=[];for(let c=0;c<n.length;c++)if(null==n[c].value||null==i[c])r.push(null);else{const g=this._getTilePayload(n[c].value,i[c],s);r.push(g)}return(0,D.as)(r).then(c=>{const g={},b=[];for(let v=0;v<c.length;v++){const P=c[v].value;P&&P.protobuff&&P.protobuff.byteLength>0&&(g[P.sourceName]={refKey:n[v].value.id,protobuff:P.protobuff},b.push(P.protobuff))}return{sourceName2DataAndRefKey:g,transferList:b}})}}},12378:(U,C,S)=>{S.d(C,{g:()=>M});var I=S(62208),D=S(47132);function T(w,d){if(w.priority-d.priority)return w.priority-d.priority;const _=w.tile.key,u=d.tile.key;return _.world-u.world?_.world-u.world:_.level-u.level?_.level-u.level:_.row-u.row?_.row-u.row:_.col-u.col?_.col-u.col:w.xTile-d.xTile?w.xTile-d.xTile:w.yTile-d.yTile}class M{get running(){return this._running}constructor(d,_,u,l,t,e){this._visibleTiles=d,this._symbolRepository=_,this._createCollisionJob=u,this._assignTileSymbolsOpacity=l,this._symbolLayerSorter=t,this._isLayerVisible=e,this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}setScreenSize(d,_){this._screenWidth===d&&this._screenHeight===_||this.restart(),this._screenWidth=d,this._screenHeight=_}restart(){this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}continue(d){if(this._selectionJob||(this._selectionJob=this._createSelectionJob()),!this._selectionJobCompleted){const _=performance.now();if(!this._selectionJob.work(d)||(this._selectionJobCompleted=!0,0===(d=Math.max(0,d-(performance.now()-_)))))return!1}if(this._collisionJob||(this._collisionJob=this._createCollisionJob(this._selectionJob.sortedSymbols,this._screenWidth,this._screenHeight)),!this._collisionJobCompleted){const _=performance.now();if(!this._collisionJob.work(d)||(this._collisionJobCompleted=!0,0===(d=Math.max(0,d-(performance.now()-_)))))return!1}if(this._opacityJob||(this._opacityJob=this._createOpacityJob()),!this._opacityJobCompleted){const _=performance.now();if(!this._opacityJob.work(d)||(this._opacityJobCompleted=!0,0===(d=Math.max(0,d-(performance.now()-_)))))return!1}return this._running=!1,!0}_createSelectionJob(){const d=this._symbolRepository.uniqueSymbols;for(let a=0;a<d.length;a++){const o=d[a];for(let y=0;y<o.uniqueSymbols.length;y++){const p=o.uniqueSymbols[y];for(const m of p.tileSymbols)m.selectedForRendering=!1}}const _=[];let u=0,l=0;const t=this._isLayerVisible,h=this._symbolLayerSorter;return{work:function e(a){let o;const y=performance.now();for(;l<d.length;l++,u=0){const p=d[l],m=p.styleLayerUID;if(!t(m)){_[l]||(_[l]={styleLayerUID:m,symbols:[]});continue}_[l]=_[l]||{styleLayerUID:m,symbols:[]};const x=_[l];for(;u<p.uniqueSymbols.length;u++){if(o=p.uniqueSymbols[u],u%100==99&&performance.now()-y>a)return!1;let f=null,i=!1,n=!1;for(const s of o.tileSymbols)if(!n||!i){const r=s.tile;(!f||r.isCoverage||r.neededForCoverage&&!i)&&(f=s,(r.neededForCoverage||r.isCoverage)&&(n=!0),r.isCoverage&&(i=!0))}if(f.selectedForRendering=!0,n){x.symbols.push(f),o.show=!0;for(const s of o.parts)s.show=!0}else o.show=!1}}for(const p of _)p.symbols.sort(T);return!0},get sortedSymbols(){return _.sort(h)}}}_createOpacityJob(){const d=this._assignTileSymbolsOpacity,_=this._visibleTiles;let u=0;function l(t,e){const h=t.symbols;for(const[a,o]of h)E(o,e);d(t,e);for(const a of t.childrenTiles)l(a,e)}return{work(t){const e=performance.now();for(;u<_.length;u++){if(performance.now()-e>t)return!1;const h=_[u];(0,I.pC)(h.parentTile)||l(h,performance.now())}return!0}}}}function E(w,d){for(const _ of w){const u=_.unique;for(const l of u.parts)l.startOpacity+=(d-l.startTime)/D.nN*(l.targetOpacity>.5?1:-1),l.startOpacity=Math.min(Math.max(l.startOpacity,0),1),l.startTime=d,l.targetOpacity=u.show&&l.show?1:0}}},59047:(U,C,S)=>{S.d(C,{L:()=>w});var I=S(62208),D=S(76763);class w{constructor(_,u,l){this.tileCoordRange=_,this._visibleTiles=u,this._createUnique=l,this._tiles=new Map,this._uniqueSymbolsReferences=new Map}get uniqueSymbols(){return(0,I.Wi)(this._uniqueSymbolLayerArray)&&(this._uniqueSymbolLayerArray=this._createUniqueSymbolLayerArray()),this._uniqueSymbolLayerArray}add(_,u){this._uniqueSymbolLayerArray=null;let l=this._tiles.get(_.id);l||(l={symbols:new Map},this._tiles.set(_.id,l));const t=new Map;if(u)for(const a of u)l.symbols.has(a)&&(t.set(a,l.symbols.get(a)),l.symbols.delete(a));else for(const[a,o]of _.layerData)l.symbols.has(a)&&(t.set(a,l.symbols.get(a)),l.symbols.delete(a));this._removeSymbols(t);const e=_.symbols,h=new Map;for(const[a,o]of e){let y=o.length;if(y>=32){let p=this.tileCoordRange;do{p/=2,y/=4}while(y>8&&p>64);const m=new D.HX(this.tileCoordRange,this.tileCoordRange,p);h.set(a,{flat:o,index:m}),l.symbols.set(a,{flat:o,index:m});for(const x of o)m.getCell(x.xTile,x.yTile).push(x)}else h.set(a,{flat:o}),l.symbols.set(a,{flat:o})}this._addSymbols(_.key,e)}deleteStyleLayers(_){this._uniqueSymbolLayerArray=null;for(const[u,l]of this._tiles){const t=new Map;for(const e of _)l.symbols.has(e)&&(t.set(e,l.symbols.get(e)),l.symbols.delete(e));this._removeSymbols(t),0===l.symbols.size&&this._tiles.delete(u)}}removeTile(_){this._uniqueSymbolLayerArray=null;const u=this._tiles.get(_.id);if(!u)return;const l=new Map;for(const[t,e]of _.symbols)u.symbols.has(t)&&(l.set(t,u.symbols.get(t)),u.symbols.delete(t));this._removeSymbols(l),0===u.symbols.size&&this._tiles.delete(_.id)}_removeSymbols(_){for(const[u,{flat:l}]of _)for(const t of l){const e=t.unique,h=e.tileSymbols,a=h.length-1;for(let o=0;o<a;o++)if(h[o]===t){h[o]=h[a];break}if(h.length=a,0===a){const o=this._uniqueSymbolsReferences.get(u);o.delete(e),0===o.size&&this._uniqueSymbolsReferences.delete(u)}t.unique=null}}_addSymbols(_,u){if(0===u.size)return;const l=this._visibleTiles;for(const t of l)t.parentTile||t.key.world!==_.world||t.key.level===_.level&&!t.key.equals(_)||this._matchSymbols(t,_,u);for(const[t,e]of u)for(const h of e)if((0,I.Wi)(h.unique)){const a=this._createUnique();h.unique=a,a.tileSymbols.push(h);let o=this._uniqueSymbolsReferences.get(t);o||(o=new Set,this._uniqueSymbolsReferences.set(t,o)),o.add(a)}}_matchSymbols(_,u,l){if(_.key.level>u.level){const e=_.key.level-u.level;if(_.key.row>>e!==u.row||_.key.col>>e!==u.col)return}if(u.level>_.key.level){const e=u.level-_.key.level;if(u.row>>e!==_.key.row||u.col>>e!==_.key.col)return}if(u.equals(_.key)){for(const e of _.childrenTiles)this._matchSymbols(e,u,l);return}const t=new Map;for(const[e,h]of l){const a=[];for(const m of h){const x=(0,D.co)(this.tileCoordRange,m.xTile,u.level,u.col,_.key.level,_.key.col),f=(0,D.co)(this.tileCoordRange,m.yTile,u.level,u.row,_.key.level,_.key.row);x>=0&&x<this.tileCoordRange&&f>=0&&f<this.tileCoordRange&&a.push({symbol:m,xTransformed:x,yTransformed:f})}const o=[],y=_.key.level<u.level?1:1<<_.key.level-u.level,p=this._tiles.get(_.id).symbols.get(e);if(p){const m=p.flat;for(const x of a){let f,i=!1;const n=x.xTransformed,s=x.yTransformed;f=(0,I.pC)(p.index)?p.index.getCell(n,s):m;const r=x.symbol,c=r.hash;for(const g of f)if(c===g.hash&&Math.abs(n-g.xTile)<=y&&Math.abs(s-g.yTile)<=y){const b=g.unique;r.unique=b,b.tileSymbols.push(r),i=!0;break}i||o.push(r)}}o.length>0&&t.set(e,o)}for(const e of _.childrenTiles)this._matchSymbols(e,u,t)}_createUniqueSymbolLayerArray(){const _=this._uniqueSymbolsReferences,u=new Array(_.size);let l,t=0;for(const[e,h]of _){const a=new Array(h.size);l=0;for(const o of h)a[l++]=o;u[t]={styleLayerUID:e,uniqueSymbols:a},t++}return u}}},78224:(U,C,S)=>{S.d(C,{f:()=>w});var I=S(49966),D=S(47132),T=S(76763),M=S(1268);function E(d,_,u,l,t,e){const{iconRotationAlignment:h,textRotationAlignment:a,iconTranslate:o,iconTranslateAnchor:y,textTranslate:p,textTranslateAnchor:m}=l;let x=0;for(const f of d.colliders){const[i,n]=0===f.partIndex?o:p,s=0===f.partIndex?y:m,r=f.minLod<=e&&e<=f.maxLod;x+=r?0:1,f.enabled=r,f.xScreen=f.xTile*t[0]+f.yTile*t[3]+t[6],f.yScreen=f.xTile*t[1]+f.yTile*t[4]+t[7],s===M.fD.MAP?(f.xScreen+=u*i-_*n,f.yScreen+=_*i+u*n):(f.xScreen+=i,f.yScreen+=n),M.aF.VIEWPORT===(0===f.partIndex?h:a)?(f.dxScreen=f.dxPixels,f.dyScreen=f.dyPixels):(f.dxScreen=u*(f.dxPixels+f.width/2)-_*(f.dyPixels+f.height/2)-f.width/2,f.dyScreen=_*(f.dxPixels+f.width/2)+u*(f.dyPixels+f.height/2)-f.height/2)}d.colliders.length>0&&x===d.colliders.length&&(d.unique.show=!1)}class w{constructor(_,u,l,t,e,h){this._symbols=_,this._styleRepository=t,this._zoom=e,this._currentLayerCursor=0,this._currentSymbolCursor=0,this._styleProps=new Map,this._allNeededMatrices=new Map,this._gridIndex=new T.HX(u,l,D.PF),this._si=Math.sin(Math.PI*h/180),this._co=Math.cos(Math.PI*h/180);for(const a of _)for(const o of a.symbols)this._allNeededMatrices.has(o.tile)||this._allNeededMatrices.set(o.tile,(0,I.a)(o.tile.transforms.tileUnitsToPixels))}work(_){const u=this._gridIndex;function l(e){const h=e.xScreen+e.dxScreen,a=e.yScreen+e.dyScreen,o=h+e.width,y=a+e.height,[p,m,x,f]=u.getCellSpan(h,a,o,y);for(let i=m;i<=f;i++)for(let n=p;n<=x;n++){const s=u.cells[i][n];for(const r of s){const c=r.xScreen+r.dxScreen,g=r.yScreen+r.dyScreen;if(!(o<c||h>c+r.width||y<g||a>g+r.height))return!0}}return!1}const t=performance.now();for(;this._currentLayerCursor<this._symbols.length;this._currentLayerCursor++,this._currentSymbolCursor=0){const e=this._symbols[this._currentLayerCursor],h=this._getProperties(e.styleLayerUID);for(;this._currentSymbolCursor<e.symbols.length;this._currentSymbolCursor++){if(this._currentSymbolCursor%100==99&&performance.now()-t>_)return!1;const a=e.symbols[this._currentSymbolCursor];if(!a.unique.show)continue;E(a,this._si,this._co,h,this._allNeededMatrices.get(a.tile),this._zoom);const o=a.unique;if(!o.show)continue;const{iconAllowOverlap:y,iconIgnorePlacement:p,textAllowOverlap:m,textIgnorePlacement:x}=h;for(const f of a.colliders){if(!f.enabled)continue;const i=o.parts[f.partIndex];i.show&&!(f.partIndex?m:y)&&l(f)&&(f.hard?o.show=!1:i.show=!1)}if(o.show)for(const f of a.colliders){if(!f.enabled||(f.partIndex?x:p)||!o.parts[f.partIndex].show)continue;const i=f.xScreen+f.dxScreen,n=f.yScreen+f.dyScreen,s=i+f.width,r=n+f.height,[c,g,b,v]=this._gridIndex.getCellSpan(i,n,s,r);for(let P=g;P<=v;P++)for(let R=c;R<=b;R++)this._gridIndex.cells[P][R].push(f)}}}return!0}_getProperties(_){const u=this._styleProps.get(_);if(u)return u;const l=this._zoom,t=this._styleRepository.getStyleLayerByUID(_),e=t.getLayoutValue("symbol-placement",l)!==M.R.POINT;let h=t.getLayoutValue("icon-rotation-alignment",l);h===M.aF.AUTO&&(h=e?M.aF.MAP:M.aF.VIEWPORT);let a=t.getLayoutValue("text-rotation-alignment",l);a===M.aF.AUTO&&(a=e?M.aF.MAP:M.aF.VIEWPORT);const o=t.getPaintValue("icon-translate",l),y=t.getPaintValue("icon-translate-anchor",l),p=t.getPaintValue("text-translate",l),m=t.getPaintValue("text-translate-anchor",l),x={iconAllowOverlap:t.getLayoutValue("icon-allow-overlap",l),iconIgnorePlacement:t.getLayoutValue("icon-ignore-placement",l),textAllowOverlap:t.getLayoutValue("text-allow-overlap",l),textIgnorePlacement:t.getLayoutValue("text-ignore-placement",l),iconRotationAlignment:h,textRotationAlignment:a,iconTranslateAnchor:y,iconTranslate:o,textTranslateAnchor:m,textTranslate:p};return this._styleProps.set(_,x),x}}},84439:(U,C,S)=>{S.d(C,{Z:()=>I});class I{constructor(T=0,M=0,E=0,w=0){this.x=T,this.y=M,this.width=E,this.height=w}get isEmpty(){return this.width<=0||this.height<=0}union(T){this.x=Math.min(this.x,T.x),this.y=Math.min(this.y,T.y),this.width=Math.max(this.width,T.width),this.height=Math.max(this.height,T.height)}}},92862:(U,C,S)=>{S.d(C,{Z:()=>M});var I=S(2584),D=S(9598),T=S(58098);class M extends D.Z{constructor(){super(...arguments),this._fullCacheLodInfos=null,this._levelByScale={}}getTileParentId(w){const d=T.Z.pool.acquire(w),_=0===d.level?null:T.Z.getId(d.level-1,d.row>>1,d.col>>1,d.world);return T.Z.pool.release(d),_}getTileCoverage(w,d,_){const u=super.getTileCoverage(w,d,_);if(!u)return u;const l=1<<u.lodInfo.level;return u.spans=u.spans.filter(t=>t.row>=0&&t.row<l),u}scaleToLevel(w){if(this._fullCacheLodInfos||this._initializeFullCacheLODs(this._lodInfos),this._levelByScale[w])return this._levelByScale[w];{const d=this._fullCacheLodInfos;if(w>d[0].scale)return d[0].level;let _,u;for(let l=0;l<d.length-1;l++)if(u=d[l+1],w>u.scale)return _=d[l],_.level+(_.scale-w)/(_.scale-u.scale);return d[d.length-1].level}}_initializeFullCacheLODs(w){let d;d=0===w[0].level?w.map(_=>({level:_.level,resolution:_.resolution,scale:_.scale})):I.Z.create({size:this.tileInfo.size[0],spatialReference:this.tileInfo.spatialReference}).lods.map(l=>({level:l.level,resolution:l.resolution,scale:l.scale}));for(let _=0;_<d.length;_++)this._levelByScale[d[_].scale]=d[_].level;this._fullCacheLodInfos=d}}},45611:(U,C,S)=>{S.d(C,{Z:()=>a});var I=S(17626),D=S(14517),T=S(61885),M=S(80542),E=S(61996),w=S(63290),d=S(62208),_=S(60330),u=S(77712),e=(S(90912),S(85931),S(76898));let h=class extends((0,M.p)((0,E.IG)((0,_.v)(T.Z.EventedMixin(D.Z))))){constructor(o){super(o),this.layer=null,this.parent=null}initialize(){this.when().catch(o=>{if("layerview:create-error"!==o.name){const y=this.layer&&this.layer.id||"no id",p=this.layer&&this.layer.title||"no title";w.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${p}', id: '${y}')`,o)}})}get fullOpacity(){return(0,d.Pt)(this.get("layer.opacity"),1)*(0,d.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(o){this._overrideIfSome("visible",o)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const o=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(o.viewNotReady=!0),this.layer&&this.layer.loaded||(o.layerNotLoaded=!0),this.visible||(o.layerInvisible=!0),o}isUpdating(){return!1}};(0,I._)([(0,u.Cb)()],h.prototype,"fullOpacity",null),(0,I._)([(0,u.Cb)()],h.prototype,"layer",void 0),(0,I._)([(0,u.Cb)()],h.prototype,"parent",void 0),(0,I._)([(0,u.Cb)({readOnly:!0})],h.prototype,"suspended",null),(0,I._)([(0,u.Cb)({readOnly:!0})],h.prototype,"suspendInfo",null),(0,I._)([(0,u.Cb)({readOnly:!0})],h.prototype,"legendEnabled",null),(0,I._)([(0,u.Cb)({type:Boolean,readOnly:!0})],h.prototype,"updating",null),(0,I._)([(0,u.Cb)({readOnly:!0})],h.prototype,"updatingProgress",null),(0,I._)([(0,u.Cb)()],h.prototype,"visible",null),(0,I._)([(0,u.Cb)()],h.prototype,"view",void 0),h=(0,I._)([(0,e.j)("esri.views.layers.LayerView")],h);const a=h}}]);