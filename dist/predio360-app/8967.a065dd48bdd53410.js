"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[8967],{8967:(Z,y,r)=>{r.r(y),r.d(y,{default:()=>O});var h=r(15861),c=r(26584),f=r(63290),v=r(62208),g=r(65401),I=r(32442),T=r(53023),w=r(76530),b=r(6185),E=r(96854),F=r(55746);const m=f.Z.getLogger("esri.views.2d.layers.features.support.whereUtils"),x={getAttribute:(o,e)=>o.field(e)};function d(){return(d=(0,h.Z)(function*(o,e){const t=yield Promise.resolve().then(r.bind(r,10410));try{const i=t.WhereClause.create(o,e);if(!i.isStandardized){const s=new c.Z("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",i);m.error(s)}return s=>{const n=s.readArcadeFeature();return i.testFeature(n,x)}}catch{return m.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",o),s=>!0}})).apply(this,arguments)}class O{constructor(e){this._geometryBounds=(0,g.Ue)(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach((e,t)=>{this._idToVisibility.set(t,0)})}setKnownIds(e){for(const t of e)this._idToVisibility.set(t,1)}setTrue(e){const t=[],i=[],s=new Set(e);return this._idToVisibility.forEach((n,l)=>{const p=!!(1&this._idToVisibility.get(l)),u=s.has(l);!p&&u?t.push(l):p&&!u&&i.push(l),this._idToVisibility.set(l,u?3:0)}),{show:t,hide:i}}createQuery(){const{geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:n}=this;return E.Z.fromJSON({geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:n})}update(e,t){var i=this;return(0,h.Z)(function*(){i._hash=JSON.stringify(e);const s=yield(0,b.j6)(e,null,t);yield Promise.all([i._setGeometryFilter(s),i._setIdFilter(s),i._setAttributeFilter(s),i._setTimeFilter(s)])})()}_setAttributeFilter(e){var t=this;return(0,h.Z)(function*(){if(!e||!e.where)return t._clause=null,void(t.where=null);t._clause=yield function S(o,e){return d.apply(this,arguments)}(e.where,t._serviceInfo.fieldsIndex),t.where=e.where})()}_setIdFilter(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}_setGeometryFilter(e){var t=this;return(0,h.Z)(function*(){if(!e||!e.geometry)return t._spatialQueryOperator=null,t.geometry=null,void(t.spatialRel=null);const i=e.geometry,s=e.spatialRel||"esriSpatialRelIntersects",n=yield(0,T.cW)(s,i,t._serviceInfo.geometryType,t._serviceInfo.hasZ,t._serviceInfo.hasM);(0,I.$P)(t._geometryBounds,i),t._spatialQueryOperator=n,t.geometry=i,t.spatialRel=s})()}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=(0,w.y)(this._serviceInfo.timeInfo,e.timeExtent,F.k);else{const t=new c.Z("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);f.Z.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(t)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;const t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}_filterByTime(e){return!!(0,v.Wi)(this._timeOperator)||this._timeOperator(e)}_resetAllHiddenIds(){const e=[];return this._idToVisibility.forEach((t,i)=>{1&t||(this._idToVisibility.set(i,1),e.push(i))}),e}}}}]);