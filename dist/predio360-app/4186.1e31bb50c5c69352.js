"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[4186],{4186:(g,o,t)=>{t.r(o),t.d(o,{default:()=>u});var e=t(17626),_=t(88879),n=t(62208),i=t(32917),r=t(77712),l=(t(90912),t(85931),t(76898)),d=t(89770),c=t(62600),p=t(19702),h=t(41632),E=t(45611);let s=class extends((0,d.N)((0,p.A)(E.Z))){constructor(){super(...arguments),this.type="integrated-mesh-3d",this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this.drapeTargetType=c.al.WithoutRasterImage}get i3slayer(){return this.layer}get updatingProgressValue(){return this._controller?.updatingProgress??0}get lodFactor(){return this.view?.qualitySettings?.sceneService?.integratedMesh?.lodFactor??1}get progressiveLoadFactor(){return this.lodFactor>=1?.2:1}get layerPopupEnabled(){return!1}initialize(){this.updatingHandles.add(()=>this.layer.modifications,()=>this._loadModifications(),i.nn),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}_createLayerGraphic(){const a=new _.Z;return a.layer=this.layer,a.sourceLayer=this.layer,a}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.handles.remove("modifications"),(0,n.Wi)(this.layer.modifications))return void(this._modifications=[]);const a=this.layer.modifications;this.handles.add(this.updatingHandles.addOnCollectionChange(()=>a,()=>this._modifications=a.toArray(),i.nn),"modifications")}};(0,e._)([(0,r.Cb)()],s.prototype,"layer",void 0),(0,e._)([(0,r.Cb)()],s.prototype,"i3slayer",null),(0,e._)([(0,r.Cb)(h.q)],s.prototype,"updatingProgress",void 0),(0,e._)([(0,r.Cb)()],s.prototype,"updatingProgressValue",null),(0,e._)([(0,r.Cb)()],s.prototype,"lodFactor",null),(0,e._)([(0,r.Cb)({readOnly:!0})],s.prototype,"progressiveLoadFactor",null),s=(0,e._)([(0,l.j)("esri.views.3d.layers.SceneLayerView3D")],s);const u=s}}]);