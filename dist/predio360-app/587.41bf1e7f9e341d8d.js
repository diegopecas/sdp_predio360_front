"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[587],{10587:(C,O,p)=>{p.r(O),p.d(O,{addOrUpdateResources:()=>b,contentToBlob:()=>S,fetchResources:()=>U,getSiblingOfSameType:()=>Z,getSiblingOfSameTypeI:()=>A,removeAllResources:()=>T,removeResource:()=>M,splitPrefixFileNameAndExtension:()=>x});var _=p(15861),D=p(84792),R=p(26584),l=p(21726);function U(e){return h.apply(this,arguments)}function h(){return(h=(0,_.Z)(function*(e,t={},r){yield e.load(r);const s=(0,l.v_)(e.itemUrl,"resources"),{start:o=1,num:E=10,sortOrder:a="asc",sortField:f="resource"}=t,i={query:{start:o,num:E,sortOrder:a,sortField:f,token:e.apiKey},signal:r?.signal},n=yield e.portal.request(s,i);return{total:n.total,nextStart:n.nextStart,resources:n.resources.map(({created:m,size:u,resource:c})=>({created:new Date(m),size:u,resource:e.resourceFromPath(c)}))}})).apply(this,arguments)}function b(e,t,r,s){return y.apply(this,arguments)}function y(){return(y=(0,_.Z)(function*(e,t,r,s){const o=new Map;for(const{resource:a,content:f,compress:i,access:n}of t){if(!a.hasPath())throw new R.Z(`portal-item-resource-${r}:invalid-path`,"Resource does not have a valid path");const[m,u]=I(a.path),c=`${m}/${i??""}/${n??""}`;o.has(c)||o.set(c,{prefix:m,compress:i,access:n,files:[]}),o.get(c).files.push({fileName:u,content:f})}yield e.load(s);const E=(0,l.v_)(e.userItemUrl,"add"===r?"addResources":"updateResources");for(const{prefix:a,compress:f,access:i,files:n}of o.values())for(let u=0;u<n.length;u+=25){const c=n.slice(u,u+25),d=new FormData;a&&"."!==a&&d.append("resourcesPrefix",a),f&&d.append("compress","true"),i&&d.append("access",i);let B=0;for(const{fileName:F,content:w}of c)d.append("file"+ ++B,w,F);d.append("f","json"),yield e.portal.request(E,{method:"post",body:d,signal:s?.signal})}})).apply(this,arguments)}function M(e,t,r){return g.apply(this,arguments)}function g(){return(g=(0,_.Z)(function*(e,t,r){if(!t.hasPath())throw new R.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");yield e.load(r);const s=(0,l.v_)(e.userItemUrl,"removeResources");yield e.portal.request(s,{method:"post",query:{resource:t.path},signal:r?.signal}),t.portalItem=null})).apply(this,arguments)}function T(e,t){return v.apply(this,arguments)}function v(){return(v=(0,_.Z)(function*(e,t){yield e.load(t);const r=(0,l.v_)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:t?.signal})})).apply(this,arguments)}function I(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function x(e){const[t,r]=function j(e){const t=(0,l.Ml)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[s,o]=I(t);return[s,o,r]}function S(e){return P.apply(this,arguments)}function P(){return(P=(0,_.Z)(function*(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(yield(0,D.Z)(e.url,{responseType:"blob"})).data})).apply(this,arguments)}function Z(e,t){if(!e.hasPath())return null;const[r,,s]=x(e.path);return e.portalItem.resourceFromPath((0,l.v_)(r,t+s))}function A(e,t){if(!e.hasPath())return null;const[r,,s]=x(e.path);return e.portalItem.resourceFromPath((0,l.v_)(r,t+s))}}}]);