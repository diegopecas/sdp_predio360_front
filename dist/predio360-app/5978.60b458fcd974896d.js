"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[5978],{55978:(T,p,u)=>{u.r(p),u.d(p,{registerFunctions:()=>S});var P=u(15861),i=u(25919),d=u(27187),a=u(47562),E=u(3482),f=u(62074),l=u(21674),o=u(87215);function _(r){return r instanceof l.Z}function c(r,t,s,R){return R(r,t,function(){var h=(0,P.Z)(function*(e,O,n){if(n.length<2)throw new i.aV(r,i.rH.WrongNumberOfParameters,t);if(null===(n=(0,a.G)(n))[0]&&null===n[1])return!1;if((0,a.T)(n[0])){if(n[1]instanceof l.Z)return new E.Z({parentfeatureset:n[0],relation:s,relationGeom:n[1]});if(null===n[1])return new f.Z({parentfeatureset:n[0]});throw new i.aV(r,i.rH.InvalidParameter,t)}if(_(n[0])){if(_(n[1])){switch(s){case"esriSpatialRelEnvelopeIntersects":return(0,o.kK)((0,d.SV)(n[0]),(0,d.SV)(n[1]));case"esriSpatialRelIntersects":return(0,o.kK)(n[0],n[1]);case"esriSpatialRelContains":return(0,o.r3)(n[0],n[1]);case"esriSpatialRelOverlaps":return(0,o.Nm)(n[0],n[1]);case"esriSpatialRelWithin":return(0,o.uh)(n[0],n[1]);case"esriSpatialRelTouches":return(0,o.W4)(n[0],n[1]);case"esriSpatialRelCrosses":return(0,o.jU)(n[0],n[1])}throw new i.aV(r,i.rH.InvalidParameter,t)}if((0,a.T)(n[1]))return new E.Z({parentfeatureset:n[1],relation:s,relationGeom:n[0]});if(null===n[1])return!1;throw new i.aV(r,i.rH.InvalidParameter,t)}if(null!==n[0])throw new i.aV(r,i.rH.InvalidParameter,t);return(0,a.T)(n[1])?new f.Z({parentfeatureset:n[1]}):!(n[1]instanceof l.Z||null===n[1])&&void 0});return function(e,O,n){return h.apply(this,arguments)}}())}function S(r){"async"===r.mode&&(r.functions.intersects=function(t,s){return c(t,s,"esriSpatialRelIntersects",r.standardFunctionAsync)},r.functions.envelopeintersects=function(t,s){return c(t,s,"esriSpatialRelEnvelopeIntersects",r.standardFunctionAsync)},r.signatures.push({name:"envelopeintersects",min:2,max:2}),r.functions.contains=function(t,s){return c(t,s,"esriSpatialRelContains",r.standardFunctionAsync)},r.functions.overlaps=function(t,s){return c(t,s,"esriSpatialRelOverlaps",r.standardFunctionAsync)},r.functions.within=function(t,s){return c(t,s,"esriSpatialRelWithin",r.standardFunctionAsync)},r.functions.touches=function(t,s){return c(t,s,"esriSpatialRelTouches",r.standardFunctionAsync)},r.functions.crosses=function(t,s){return c(t,s,"esriSpatialRelCrosses",r.standardFunctionAsync)},r.functions.relate=function(t,s){return r.standardFunctionAsync(t,s,(R,h,e)=>{if(e=(0,a.G)(e),(0,a.y)(e,3,3,t,s),_(e[0])&&_(e[1]))return(0,o.LV)(e[0],e[1],(0,a.j)(e[2]));if(e[0]instanceof l.Z&&null===e[1]||e[1]instanceof l.Z&&null===e[0])return!1;if((0,a.T)(e[0])&&null===e[1])return new f.Z({parentfeatureset:e[0]});if((0,a.T)(e[1])&&null===e[0])return new f.Z({parentfeatureset:e[1]});if((0,a.T)(e[0])&&e[1]instanceof l.Z)return e[0].relate(e[1],(0,a.j)(e[2]));if((0,a.T)(e[1])&&e[0]instanceof l.Z)return e[1].relate(e[0],(0,a.j)(e[2]));if(null===e[0]&&null===e[1])return!1;throw new i.aV(t,i.rH.InvalidParameter,s)})})}}}]);