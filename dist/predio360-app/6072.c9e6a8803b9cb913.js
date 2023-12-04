"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[6072],{8377:(J,$,z)=>{z.d($,{Z:()=>W});var N=z(17626),R=z(2076),O=z(86810),B=z(77712),F=(z(90912),z(85931),z(55342)),K=z(76898);const w=new R.X({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),q=new R.X({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let C=class extends O.wq{constructor(j){super(j),this.type="class-breaks-definition",this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null}set standardDeviationInterval(j){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",j)}set definedInterval(j){"defined-interval"===this.classificationMethod&&this._set("definedInterval",j)}};(0,N._)([(0,F.J)({classBreaksDef:"class-breaks-definition"})],C.prototype,"type",void 0),(0,N._)([(0,B.Cb)({json:{write:!0}})],C.prototype,"breakCount",void 0),(0,N._)([(0,B.Cb)({json:{write:!0}})],C.prototype,"classificationField",void 0),(0,N._)([(0,B.Cb)({type:String,json:{read:w.read,write:w.write}})],C.prototype,"classificationMethod",void 0),(0,N._)([(0,B.Cb)({json:{write:!0}})],C.prototype,"normalizationField",void 0),(0,N._)([(0,B.Cb)({json:{read:q.read,write:q.write}})],C.prototype,"normalizationType",void 0),(0,N._)([(0,B.Cb)({value:null,json:{write:!0}})],C.prototype,"standardDeviationInterval",null),(0,N._)([(0,B.Cb)({value:null,json:{write:!0}})],C.prototype,"definedInterval",null),C=(0,N._)([(0,K.j)("esri.rest.support.ClassBreaksDefinition")],C);const W=C},19556:(J,$,z)=>{z.d($,{k:()=>Q});const R=z(63290).Z.getLogger("esri.rest.support.generateRendererUtils");function O(r,u){return Number(r.toFixed(u))}function Q(r){const{normalizationTotal:u}=r;return{classBreaks:X(r),normalizationTotal:u}}function X(r){const u=r.definition,{classificationMethod:a,normalizationType:c,definedInterval:v}=u,_=u.breakCount??1,h=[];let s=r.values;if(0===s.length)return[];s=s.sort((f,V)=>f-V);const g=s[0],D=s[s.length-1];if("equal-interval"===a)if(s.length>=_){const f=(D-g)/_;let V=g;for(let o=1;o<_;o++){const l=O(g+o*f,6);h.push({minValue:V,maxValue:l,label:F(V,l,c)}),V=l}h.push({minValue:V,maxValue:D,label:F(V,D,c)})}else s.forEach(f=>{h.push({minValue:f,maxValue:f,label:F(f,f,c)})});else if("natural-breaks"===a){const f=function K(r){const u=[],a=[];let c=Number.MIN_VALUE,v=1,_=-1;for(let h=0;h<r.length;h++){const s=r[h];s===c?(v++,a[_]=v):null!==s&&(u.push(s),c=s,v=1,a.push(v),_++)}return{uniqueValues:u,valueFrequency:a}}(s),o=function w(r,u,a){const c=r.length,v=[];a>c&&(a=c);for(let h=0;h<a;h++)v.push(Math.round(h*c/a-1));v.push(c-1);let _=q(v,r,u,a);return function C(r,u,a,c,v,_){let h=0,s=0,g=0,D=0,f=!0;for(let V=0;V<2&&f;V++){0===V&&(f=!1);for(let o=0;o<_-1;o++)for(;a[o+1]+1!==a[o+2];){a[o+1]=a[o+1]+1;const l=U(o,a,c,v);g=l.sbMean,h=l.sbSdcm;const d=U(o+1,a,c,v);if(D=d.sbMean,s=d.sbSdcm,!(h+s<u[o]+u[o+1])){a[o+1]=a[o+1]-1;break}u[o]=h,u[o+1]=s,r[o]=g,r[o+1]=D,f=!0}for(let o=_-1;o>0;o--)for(;a[o]!==a[o-1]+1;){a[o]=a[o]-1;const l=U(o-1,a,c,v);g=l.sbMean,h=l.sbSdcm;const d=U(o,a,c,v);if(D=d.sbMean,s=d.sbSdcm,!(h+s<u[o-1]+u[o])){a[o]=a[o]+1;break}u[o-1]=h,u[o]=s,r[o-1]=g,r[o]=D,f=!0}}return f}(_.mean,_.sdcm,v,r,u,a)&&(_=q(v,r,u,a)),v}(f.uniqueValues,r.valueFrequency||f.valueFrequency,_);let l=g;for(let d=1;d<_;d++)if(f.uniqueValues.length>d){const S=O(f.uniqueValues[o[d]],6);h.push({minValue:l,maxValue:S,label:F(l,S,c)}),l=S}h.push({minValue:l,maxValue:D,label:F(l,D,c)})}else if("quantile"===a)if(s.length>=_&&g!==D){let f=g,V=Math.ceil(s.length/_),o=0;for(let l=1;l<_;l++){let d=V+o-1;d>s.length&&(d=s.length-1),d<0&&(d=0),h.push({minValue:f,maxValue:s[d],label:F(f,s[d],c)}),f=s[d],o+=V,V=Math.ceil((s.length-o)/(_-l))}h.push({minValue:f,maxValue:D,label:F(f,D,c)})}else{let f=-1;for(let V=0;V<s.length;V++){const o=s[V];o!==f&&(f=o,h.push({minValue:f,maxValue:o,label:F(f,o,c)}),f=o)}}else if("standard-deviation"===a){const f=function j(r){let u=0;for(let a=0;a<r.length;a++)u+=r[a];return u/=r.length,u}(s),V=function Z(r,u){let a=0;for(let c=0;c<r.length;c++){const v=r[c];a+=(v-u)*(v-u)}return a/=r.length,Math.sqrt(a)}(s,f);if(0===V)h.push({minValue:s[0],maxValue:s[0],label:F(s[0],s[0],c)});else{const o=function W(r,u,a,c,v){let _=Math.max(c-r,u-c)/v/a;return _=_>=1?1:_>=.5?.5:.25,_}(g,D,_,f,V)*V;let l=0,d=g;for(let L=_;L>=1;L--){const G=O(f-(L-.5)*o,6);h.push({minValue:d,maxValue:G,label:F(d,G,c)}),d=G,l++}let S=O(f+.5*o,6);h.push({minValue:d,maxValue:S,label:F(d,S,c)}),d=S,l++;for(let L=1;L<=_;L++)S=l===2*_?D:O(f+(L+.5)*o,6),h.push({minValue:d,maxValue:S,label:F(d,S,c)}),d=S,l++}}else if("defined-interval"===a){if(!v)return h;const f=s[0],V=s[s.length-1],o=Math.ceil((V-f)/v);let l=f;for(let d=1;d<o;d++){const S=O(f+d*v,6);h.push({minValue:l,maxValue:S,label:F(l,S,c)}),l=S}h.push({minValue:l,maxValue:V,label:F(l,V,c)})}return h}function F(r,u,a){let c=null;return c=r===u?a&&"percent-of-total"===a?r+"%":r.toString():a&&"percent-of-total"===a?r+"% - "+u+"%":r+" - "+u,c}function q(r,u,a,c){let v=[],_=[],h=[],s=0;const g=[],D=[];for(let l=0;l<c;l++){const d=U(l,r,u,a);g.push(d.sbMean),D.push(d.sbSdcm),s+=D[l]}let f,V=s,o=!0;for(;o||s<V;){o=!1,v=[];for(let l=0;l<c;l++)v.push(r[l]);for(let l=0;l<c;l++)for(let d=r[l]+1;d<=r[l+1];d++)if(f=u[d],l>0&&d!==r[l+1]&&Math.abs(f-g[l])>Math.abs(f-g[l-1]))r[l]=d;else if(l<c-1&&r[l]!==d-1&&Math.abs(f-g[l])>Math.abs(f-g[l+1])){r[l+1]=d-1;break}V=s,s=0,_=[],h=[];for(let l=0;l<c;l++){_.push(g[l]),h.push(D[l]);const d=U(l,r,u,a);g[l]=d.sbMean,D[l]=d.sbSdcm,s+=D[l]}}if(s>V){for(let l=0;l<c;l++)r[l]=v[l],g[l]=_[l],D[l]=h[l];s=V}return{mean:g,sdcm:D}}function U(r,u,a,c){let v=0,_=0;for(let g=u[r]+1;g<=u[r+1];g++){const D=c[g];v+=a[g]*D,_+=D}_<=0&&R.warn("Exception in Natural Breaks calculation");const h=v/_;let s=0;for(let g=u[r]+1;g<=u[r+1];g++)s+=c[g]*(a[g]-h)**2;return{sbMean:h,sbSdcm:s}}},26072:(J,$,z)=>{z.d($,{DL:()=>l,F_:()=>_,G2:()=>f,H0:()=>j,Lq:()=>r,Qm:()=>g,S5:()=>W,XL:()=>U,eT:()=>h,fk:()=>D,i5:()=>Z,oF:()=>d,wk:()=>C});var N=z(8377),R=z(19556);const O="<Null>",B="equal-interval",Q=1,X=5,F=10,K=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,w=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),q=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function C(e){return null==e||"string"==typeof e&&!e?O:e}function W(e){return!(null!=e.normalizationField||null!=e.normalizationType||null!=e.minValue||null!=e.maxValue||e.sqlExpression&&e.supportsSQLExpression)}function j(e){const t=e.returnDistinct?[...new Set(e.values)]:e.values,n=t.filter(b=>null!=b).length,i={count:n};return e.supportsNullCount&&(i.nullcount=t.length-n),e.percentileParams&&(i.median=U(t,e.percentileParams)),i}function Z(e){const{values:t,useSampleStdDev:n,supportsNullCount:i}=e;let b=Number.POSITIVE_INFINITY,m=Number.NEGATIVE_INFINITY,p=null,M=null,y=null,E=null,T=0;const x=null==e.minValue?-1/0:e.minValue,k=null==e.maxValue?1/0:e.maxValue;for(const I of t)Number.isFinite(I)?I>=x&&I<=k&&(p=null===p?I:p+I,b=Math.min(b,I),m=Math.max(m,I),T++):"string"==typeof I&&T++;if(T&&null!=p){M=p/T;let I=0;for(const A of t)Number.isFinite(A)&&A>=x&&A<=k&&(I+=(A-M)**2);E=n?T>1?I/(T-1):0:T>0?I/T:0,y=Math.sqrt(E)}else b=null,m=null;const P={avg:M,count:T,max:m,min:b,stddev:y,sum:p,variance:E};return i&&(P.nullcount=t.length-T),e.percentileParams&&(P.median=U(t,e.percentileParams)),P}function U(e,t){const{fieldType:n,value:i,orderBy:b,isDiscrete:m}=t,p=r(n,"desc"===b);if(0===(e=[...e].filter(P=>null!=P).sort((P,I)=>p(P,I))).length)return null;if(i<=0)return e[0];if(i>=1)return e[e.length-1];const M=(e.length-1)*i,y=Math.floor(M),E=y+1,T=M%1,x=e[y],k=e[E];return E>=e.length||m||"string"==typeof x||"string"==typeof k?x:x*(1-T)+k*T}function r(e,t){const n=t?1:-1,i=function c(e){return e?(t,n)=>u(t,n,!0)??n-t:(t,n)=>u(t,n,!1)??t-n}(t),b=a(t);if(!e||!["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...w].includes(e))return(m,p)=>"number"==typeof m&&"number"==typeof p?i(m,p):"string"==typeof m&&"string"==typeof p?b(m,p):n;if("esriFieldTypeDate"===e)return(m,p)=>{const M=new Date(m).getTime(),y=new Date(p).getTime();return isNaN(M)||isNaN(y)?n:i(M,y)};if(w.has(e))return(m,p)=>i(m,p);if("esriFieldTypeString"===e)return(m,p)=>b(m,p);if("esriFieldTypeGUID"===e||"esriFieldTypeGlobalID"===e){const m=a(t);return(p,M)=>m(v(p),v(M))}return t?(m,p)=>1:(m,p)=>-1}function u(e,t,n){if(n){if(null==e)return null==t?0:1;if(null==t)return-1}else{if(null==e)return null==t?0:-1;if(null==t)return 1}return null}function a(e){return e?(t,n)=>u(t,n,!0)??((t=t.toUpperCase())>(n=n.toUpperCase())?-1:t<n?1:0):(t,n)=>u(t,n,!1)??((t=t.toUpperCase())<(n=n.toUpperCase())?-1:t>n?1:0)}function v(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function _(e,t){let n;for(n in e)q.includes(n)&&(Number.isFinite(e[n])||(e[n]=null));return t&&["avg","stddev","variance"].forEach(i=>{null!=e[i]&&(e[i]=Math.ceil(e[i]))}),e}function h(e){const t={};for(let n of e)(null==n||"string"==typeof n&&""===n.trim())&&(n=null),null==t[n]?t[n]={count:1,data:n}:t[n].count++;return{count:t}}function s(e){return"coded-value"!==e?.type?[]:e.codedValues.map(t=>t.code)}function g(e,t,n,i){const b=e.count,m=[];if(n&&t){const p=[],M=s(t[0]);for(const y of M)if(t[1]){const E=s(t[1]);for(const T of E)if(t[2]){const x=s(t[2]);for(const k of x)p.push(`${C(y)}${i}${C(T)}${i}${C(k)}`)}else p.push(`${C(y)}${i}${C(T)}`)}else p.push(y);for(const y of p)b.hasOwnProperty(y)||(b[y]={data:y,count:0})}for(const p in b){const M=b[p];m.push({value:M.data,count:M.count,label:M.label})}return{uniqueValueInfos:m}}function D(e,t,n,i){let b=null;switch(t){case"log":0!==e&&(b=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(i)&&0!==i&&(b=e/i*100);break;case"field":Number.isFinite(n)&&0!==n&&(b=e/n);break;case"natural-log":e>0&&(b=Math.log(e));break;case"square-root":e>0&&(b=e**.5)}return b}function f(e,t){const n=function o(e){const{breakCount:t,field:n,normalizationField:i,normalizationType:b}=e,m=e.classificationMethod||B;return new N.Z({breakCount:t,classificationField:n,classificationMethod:m,normalizationField:"field"===b?i:void 0,normalizationType:b,standardDeviationInterval:"standard-deviation"===m?e.standardDeviationInterval||Q:void 0})}({field:t.field,normalizationType:t.normalizationType,normalizationField:t.normalizationField,classificationMethod:t.classificationMethod,standardDeviationInterval:t.standardDeviationInterval,breakCount:t.numClasses||X});return e=function V(e,t,n){const i=t??-1/0,b=n??1/0;return e.filter(m=>Number.isFinite(m)&&m>=i&&m<=b)}(e,t.minValue,t.maxValue),(0,R.k)({definition:n,values:e,normalizationTotal:t.normalizationTotal})}function l(e,t){let n=e.classBreaks;const b=n[0].minValue,m=n[n.length-1].maxValue,p="standard-deviation"===t,M=K;return n=n.map(y=>{const E=y.label,T={minValue:y.minValue,maxValue:y.maxValue,label:E};if(p&&E){const x=E.match(M)?.map(k=>+k.trim())??[];2===x.length?(T.minStdDev=x[0],T.maxStdDev=x[1],x[0]<0&&x[1]>0&&(T.hasAvg=!0)):1===x.length&&(E.includes("<")?(T.minStdDev=null,T.maxStdDev=x[0]):E.includes(">")&&(T.minStdDev=x[0],T.maxStdDev=null))}return T}),{minValue:b,maxValue:m,classBreakInfos:n,normalizationTotal:e.normalizationTotal}}function d(e,t){const n=function S(e,t){const{field:n,classificationMethod:i,standardDeviationInterval:b,normalizationType:m,normalizationField:p,normalizationTotal:M,minValue:y,maxValue:E}=t,T=t.numBins||F;let x=null,k=null,P=null;if(i&&"equal-interval"!==i||m){const{classBreaks:I}=f(e,{field:n,normalizationType:m,normalizationField:p,normalizationTotal:M,classificationMethod:i,standardDeviationInterval:b,minValue:y,maxValue:E,numClasses:T});x=I[0].minValue,k=I[I.length-1].maxValue,P=I.map(A=>[A.minValue,A.maxValue])}else{if(null!=y&&null!=E)x=y,k=E;else{const I=Z({values:e,minValue:y,maxValue:E,useSampleStdDev:!m,supportsNullCount:W({normalizationType:m,normalizationField:p,minValue:y,maxValue:E})});x=I.min??null,k=I.max??null}P=function G(e,t,n){const i=(t-e)/n,b=[];let m,p=e;for(let M=1;M<=n;M++)m=p+i,m=Number(m.toFixed(16)),b.push([p,M===n?t:m]),p=m;return b}(x??0,k??0,T)}return{min:x,max:k,intervals:P}}(e,t),i=n.intervals,b=n.min??0,m=n.max??0,p=i.map((M,y)=>({minValue:i[y][0],maxValue:i[y][1],count:0}));for(const M of e)if(null!=M&&M>=b&&M<=m){const y=L(i,M);y>-1&&p[y].count++}return{bins:p,minValue:b,maxValue:m,normalizationTotal:t.normalizationTotal}}function L(e,t){let n=-1;for(let i=e.length-1;i>=0;i--)if(t>=e[i][0]){n=i;break}return n}}}]);