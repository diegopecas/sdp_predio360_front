"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[9851],{69851:(dt,Z,r)=>{r.r(Z),r.d(Z,{loadGLTFMesh:()=>et});var $=r(15861),I=r(91558),D=r(84792),L=r(88159),S=r(21286),U=r(86274),P=r(32884),G=r(29302),N=r(1503),V=r(61751),Q=r(27530),X=r(1607),K=r(7787),b=r(92529),v=r(60479),g=r(84161),B=r(993),H=r(81096);Object.freeze(Object.defineProperty({__proto__:null,copy:function J(t,e,n){const c=t.typedBuffer,l=t.typedBufferStride,s=e.typedBuffer,i=e.typedBufferStride,a=n?n.count:e.count;let u=(n?.dstIndex??0)*l,d=(n?.srcIndex??0)*i;for(let f=0;f<a;++f){for(let o=0;o<9;++o)c[u+o]=s[d+o];u+=l,d+=i}}},Symbol.toStringTag,{value:"Module"})),Object.freeze(Object.defineProperty({__proto__:null,copy:function W(t,e,n){const c=t.typedBuffer,l=t.typedBufferStride,s=e.typedBuffer,i=e.typedBufferStride,a=n?n.count:e.count;let u=(n?.dstIndex??0)*l,d=(n?.srcIndex??0)*i;for(let f=0;f<a;++f){for(let o=0;o<16;++o)c[u+o]=s[d+o];u+=l,d+=i}}},Symbol.toStringTag,{value:"Module"})),r(98148);var j=r(67831),F=r(9554),A=r(63470);function y(t,e){return new t(new ArrayBuffer(e*t.ElementCount*(0,H.n1)(t.ElementType)))}var Y=r(60853),w=r(9160),k=r(12495),q=r(96170),_=r(19574),tt=r(79331),E=r(67969);function et(t,e,n){return R.apply(this,arguments)}function R(){return R=(0,$.Z)(function*(t,e,n){const c=new w.C(function nt(t){const e=t?.resolveFile;return e?{busy:!1,request:function(){var n=(0,$.Z)(function*(c,l,s){const i=e?.(c)??c,a="image"===l?"image":"binary"===l?"array-buffer":"json";return(yield(0,D.Z)(i,{responseType:a,signal:null!=s?s.signal:null})).data});return function(l,s,i){return n.apply(this,arguments)}}()}:null}(n)),l=(yield(0,k.Q)(c,e,n,!0)).model,s=l.lods.shift(),i=new Map,a=new Map;l.textures.forEach((C,O)=>i.set(O,function lt(t){return new X.Z({data:((0,_.$A)(t.data),t.data),wrap:ct(t.parameters.wrap)})}(C))),l.materials.forEach((C,O)=>a.set(O,function st(t,e){const n=new I.Z(function it(t,e){return(0,N.al)(x(t[0]),x(t[1]),x(t[2]),e)}(t.color,t.opacity)),c=t.emissiveFactor?new I.Z(function mt(t){return(0,G.al)(x(t[0]),x(t[1]),x(t[2]))}(t.emissiveFactor)):null,l=s=>s?new K.Z({scale:s.scale?[s.scale[0],s.scale[1]]:[1,1],rotation:(0,S.BV)(s.rotation??0),offset:s.offset?[s.offset[0],s.offset[1]]:[0,0]}):null;return new Q.Z({color:n,colorTexture:e.get(t.textureColor),normalTexture:e.get(t.textureNormal),emissiveColor:c,emissiveTexture:e.get(t.textureEmissive),occlusionTexture:e.get(t.textureOcclusion),alphaMode:ft(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:e.get(t.textureMetallicRoughness),colorTextureTransform:l(t.colorTextureTransform),normalTextureTransform:l(t.normalTextureTransform),occlusionTextureTransform:l(t.occlusionTextureTransform),emissiveTextureTransform:l(t.emissiveTextureTransform),metallicRoughnessTextureTransform:l(t.metallicRoughnessTextureTransform)})}(C,i)));const u=function rt(t){let e=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1},c=new Map,l=new Map,s=[];for(const i of t.parts){const{attributes:{position:a,normal:u,color:d,tangent:f,texCoord0:o}}=i,m=`\n      ${T(a,c)}/\n      ${T(u,c)}/\n      ${T(d,c)}/\n      ${T(f,c)}/\n      ${T(o,c)}/\n      ${ot(i.transform)}\n    `;let p=!1;const h=(0,L.s1)(l,m,()=>(p=!0,{start:e,length:a.count}));p&&(e+=a.count),u&&(n.normal=!0),d&&(n.color=!0),f&&(n.tangent=!0),o&&(n.texCoord0=!0),s.push({gltf:i,writeVertices:p,region:h})}return{vertexAttributes:{position:y(v.fP,e),normal:n.normal?y(v.ct,e):null,tangent:n.tangent?y(v.ek,e):null,color:n.color?y(v.mc,e):null,texCoord0:n.texCoord0?y(v.Eu,e):null},parts:s,components:[]}}(s);for(const C of u.parts)at(u,C,a);const{position:d,normal:f,tangent:o,color:m,texCoord0:p}=u.vertexAttributes,h={position:d.typedBuffer,normal:null!=f?f.typedBuffer:null,tangent:null!=o?o.typedBuffer:null,uv:null!=p?p.typedBuffer:null,color:null!=m?m.typedBuffer:null},M=(0,Y.georeferenceByTransform)(h,t,n);return{transform:M.transform,vertexSpace:M.vertexSpace,components:u.components,spatialReference:t.spatialReference,vertexAttributes:new b.Q({position:M.vertexAttributes.position,normal:M.vertexAttributes.normal,tangent:M.vertexAttributes.tangent,color:h.color,uv:h.uv})}}),R.apply(this,arguments)}function T(t,e){if(null==t)return"-";const n=t.typedBuffer;return`${(0,L.s1)(e,n.buffer,()=>e.size)}/${n.byteOffset}/${n.byteLength}`}function ot(t){return null!=t?t.toString():"-"}function at(t,e,n){e.writeVertices&&function ut(t,e){const{position:n,normal:c,tangent:l,color:s,texCoord0:i}=t.vertexAttributes,a=e.region.start,{attributes:u,transform:d}=e.gltf,f=u.position.count;if((0,g.d)(n.slice(a,f),u.position,d),null!=u.normal&&null!=c){const o=(0,U.XL)((0,P.Ue)(),d),m=c.slice(a,f);(0,g.c)(m,u.normal,o),(0,S.oc)(o)&&(0,g.e)(m,m)}else null!=c&&(0,F.f)(c,0,0,1,{dstIndex:a,count:f});if(null!=u.tangent&&null!=l){const o=(0,U.XL)((0,P.Ue)(),d),m=l.slice(a,f);(0,B.a)(m,u.tangent,o),(0,S.oc)(o)&&(0,B.n)(m,m)}else null!=l&&(0,A.f)(l,0,0,1,1,{dstIndex:a,count:f});if(null!=u.texCoord0&&null!=i?(0,j.a)(i.slice(a,f),u.texCoord0):null!=i&&(0,j.f)(i,0,0,{dstIndex:a,count:f}),null!=u.color&&null!=s){const o=u.color,m=s.slice(a,f);if(4===o.elementCount)o instanceof v.ek?(0,B.b)(m,o,255):o instanceof v.mc?(0,A.a)(m,o):o instanceof v.v6&&(0,B.b)(m,o,1/256);else{(0,A.f)(m,255,255,255,255);const p=v.ne.fromTypedArray(m.typedBuffer,m.typedBufferStride);o instanceof v.ct?(0,g.f)(p,o,255):o instanceof v.ne?(0,F.a)(p,o):o instanceof v.mw&&(0,g.f)(p,o,1/256)}}else null!=s&&(0,A.f)(s.slice(a,f),255,255,255,255)}(t,e);const{indices:c,attributes:l,primitiveType:s,material:i}=e.gltf;let a=(0,q.p)(c||l.position.count,s);const u=e.region.start;if(u){const d=new Uint32Array(a);for(let f=0;f<a.length;f++)d[f]+=u;a=d}t.components.push(new V.Z({name:e.gltf.name,faces:a,material:n.get(i),shading:l.normal?"source":"flat",trustSourceNormals:!0}))}function ft(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function ct(t){return{horizontal:z(t.s),vertical:z(t.t)}}function z(t){switch(t){case E.e8.CLAMP_TO_EDGE:return"clamp";case E.e8.MIRRORED_REPEAT:return"mirror";case E.e8.REPEAT:return"repeat"}}function x(t){return t**(1/tt.j)*255}}}]);