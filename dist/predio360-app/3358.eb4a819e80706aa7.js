"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[3358],{23358:(E,p,n)=>{n.r(p),n.d(p,{execute:()=>g});var b=n(15861),c=n(26584),h=n(62208);let l;function g(o,s){let e=s.responseType;e?"array-buffer"!==e&&"blob"!==e&&"json"!==e&&"native"!==e&&"native-request-init"!==e&&"text"!==e&&(e="text"):e="json",s.responseType=e;const f=(0,h.Wg)(s.signal);return delete s.signal,globalThis.invokeStaticMessage("request",{url:o,options:s},{signal:f}).then(function(){var v=(0,b.Z)(function*(t){let i,a,_,d,r;if(t.data)if(t.data instanceof ArrayBuffer){if(!("json"!==e&&"text"!==e&&"blob"!==e||(i=new Blob([t.data]),"json"!==e&&"text"!==e||(l||(l=new FileReaderSync),d=l.readAsText(i),"json"!==e)))){try{a=JSON.parse(d||null)}catch(u){const y={...u,url:o,requestOptions:s};throw new c.Z("request:server",u.message,y)}if(a.error){const u={...a.error,url:o,requestOptions:s};throw new c.Z("request:server",a.error.message,u)}}}else"native"===e&&(t.data.signal=f,_=yield fetch(t.data.url,t.data),t.httpStatus=_.status);switch(e){case"blob":r=i;break;case"json":r=a;break;case"native":r=_;break;case"text":r=d;break;default:r=t.data}return{data:r,httpStatus:t.httpStatus,requestOptions:s,ssl:t.ssl,url:o}});return function(t){return v.apply(this,arguments)}}())}}}]);