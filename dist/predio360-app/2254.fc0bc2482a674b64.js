"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[2254,5611],{34013:(Z,j,e)=>{e.d(j,{I:()=>u,b:()=>g});var f=e(13934),D=e(78925),S=e(24255),B=e(10109),A=e(67022),O=e(33726),U=e(2166),x=e(65787),L=e(17625),z=e(22355),G=e(35387),K=e(44835),P=e(16396);function g(p){const M=new z.kG,{vertex:m,fragment:b}=M;return(0,U.Sv)(m,p),M.include(S.w,p),M.attributes.add(P.T.POSITION,"vec3"),M.attributes.add(P.T.UV0,"vec2"),p.perspectiveInterpolation&&M.attributes.add(P.T.PERSPECTIVEDIVIDE,"float"),M.varyings.add("vpos","vec3"),p.multipassEnabled&&M.varyings.add("depth","float"),m.code.add(L.H`
    void main(void) {
      vpos = position;
      ${p.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${p.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}
    }
  `),M.include(D.f5,p),M.include(B.l,p),b.uniforms.add(new G.A("tex",w=>w.texture),new x.p("opacity",w=>w.opacity)),M.varyings.add("vTexCoord","vec2"),p.output===f.H_.Alpha?b.code.add(L.H`
    void main() {
      discardBySlice(vpos);
      ${p.multipassEnabled?"terrainDepthTest(depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${L.H.float(A.F)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(b.include(O.Y),b.code.add(L.H`
    void main() {
      discardBySlice(vpos);
      ${p.multipassEnabled?"terrainDepthTest(depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${L.H.float(A.F)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${p.transparencyPassType===K.A.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),M}const u=Object.freeze(Object.defineProperty({__proto__:null,build:g},Symbol.toStringTag,{value:"Module"}))},65629:(Z,j,e)=>{e.d(j,{SR:()=>L,Ui:()=>x});var f=e(86810),D=e(65401),S=e(32442),B=e(25748),A=e(91179),O=e(74618),U=e(37053);function x(a){return z(a,!0)}function L(a){return z(a,!1)}function z(a,t){if(null==a)return null;const i=a.spatialReference,n=(0,U.C5)(i),o=(0,f.AK)(a)?a.toJSON():a;if(!n)return o;const E=(0,U.sS)(i)?102100:4326,y=O.UZ[E].maxX,C=O.UZ[E].minX;if((0,A.wp)(o))return K(o,y,C);if((0,A.aW)(o))return o.points=o.points.map(c=>K(c,y,C)),o;if((0,A.YX)(o))return function G(a,t){if(!t)return a;const i=function P(a,t){const i=[],{ymin:n,ymax:o,xmin:E,xmax:y}=a,C=a.xmax-a.xmin,[c,T]=t.valid,{x:R,frameId:s}=g(a.xmin,t),{x:l,frameId:h}=g(a.xmax,t),d=R===l&&C>0;if(C>2*T){const _={xmin:E<y?R:l,ymin:n,xmax:T,ymax:o},v={xmin:c,ymin:n,xmax:E<y?l:R,ymax:o},I={xmin:0,ymin:n,xmax:T,ymax:o},W={xmin:c,ymin:n,xmax:0,ymax:o},H=[],V=[];u(_,I)&&H.push(s),u(_,W)&&V.push(s),u(v,I)&&H.push(h),u(v,W)&&V.push(h);for(let N=s+1;N<h;N++)H.push(N),V.push(N);i.push(new m(_,[s]),new m(v,[h]),new m(I,H),new m(W,V))}else R>l||d?i.push(new m({xmin:R,ymin:n,xmax:T,ymax:o},[s]),new m({xmin:c,ymin:n,xmax:l,ymax:o},[h])):i.push(new m({xmin:R,ymin:n,xmax:l,ymax:o},[s]));return i}(a,t).map(n=>n.extent);return i.length<2?i[0]||a:i.length>2?(a.xmin=t.valid[0],a.xmax=t.valid[1],a):{rings:i.map(n=>[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]])}}(o,n);if((0,A.oU)(o)||(0,A.l9)(o)){const c=(0,S.$P)(b,o),T={xmin:c[0],ymin:c[1],xmax:c[2],ymax:c[3]},R=(0,O.XZ)(T.xmin,C)*(2*y),s=0===R?o:(0,O.Sy)(o,R);return T.xmin+=R,T.xmax+=R,T.xmax>y?M(s,y,t):T.xmin<C?M(s,C,t):s}return o}function K(a,t,i){if(Array.isArray(a)){const n=a[0];if(n>t){const o=(0,O.XZ)(n,t);a[0]=n+o*(-2*t)}else if(n<i){const o=(0,O.XZ)(n,i);a[0]=n+o*(-2*i)}}else{const n=a.x;if(n>t){const o=(0,O.XZ)(n,t);a.x+=o*(-2*t)}else if(n<i){const o=(0,O.XZ)(n,i);a.x+=o*(-2*i)}}return a}function g(a,t){const[i,n]=t.valid,o=2*n;let E,y=0;return a>n?(E=Math.ceil(Math.abs(a-n)/o),a-=E*o,y=E):a<i&&(E=Math.ceil(Math.abs(a-i)/o),a+=E*o,y=-E),{x:a,frameId:y}}function u(a,t){const{xmin:i,ymin:n,xmax:o,ymax:E}=t;return p(a,i,n)&&p(a,i,E)&&p(a,o,E)&&p(a,o,n)}function p(a,t,i){return t>=a.xmin&&t<=a.xmax&&i>=a.ymin&&i<=a.ymax}function M(a,t,i=!0){const n=!(0,A.l9)(a);if(n&&(0,B.Zy)(a),i)return(new w).cut(a,t);const o=n?a.rings:a.paths,E=n?4:2,y=o.length,C=-2*t;for(let c=0;c<y;c++){const T=o[c];if(T&&T.length>=E){const R=[];for(const s of T)R.push([s[0]+C,s[1]]);o.push(R)}}return n?a.rings=o:a.paths=o,a}class m{constructor(t,i){this.extent=t,this.frameIds=i}}const b=(0,D.Ue)();class w{constructor(){this._linesIn=[],this._linesOut=[]}cut(t,i){let n;if(this._xCut=i,t.rings)this._closed=!0,n=t.rings,this._minPts=4;else{if(!t.paths)return null;this._closed=!1,n=t.paths,this._minPts=2}for(const E of n){if(!E||E.length<this._minPts)continue;let y=!0;for(const C of E)y?(this.moveTo(C),y=!1):this.lineTo(C);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),n=[];for(const E of this._linesIn)E&&E.length>=this._minPts&&n.push(E);const o=-2*this._xCut;for(const E of this._linesOut)if(E&&E.length>=this._minPts){for(const y of E)y[0]+=o;n.push(E)}return this._closed?t.rings=n:t.paths=n,t}moveTo(t){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(t[0]),this._moveTo(t[0],t[1],this._prevSide),this._prevPt=t,this._firstPt=t}lineTo(t){const i=this._side(t[0]);if(i*this._prevSide==-1){const n=this._intersect(this._prevPt,t);this._lineTo(this._xCut,n,0),this._prevSide=0,this._lineTo(t[0],t[1],i)}else this._lineTo(t[0],t[1],i);this._prevSide=i,this._prevPt=t}close(){const t=this._firstPt,i=this._prevPt;t[0]===i[0]&&t[1]===i[1]||this.lineTo(t),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(t,i,n){this._closed?(this._lineIn.push([n<=0?t:this._xCut,i]),this._lineOut.push([n>=0?t:this._xCut,i])):(n<=0&&this._lineIn.push([t,i]),n>=0&&this._lineOut.push([t,i]))}_lineTo(t,i,n){this._closed?(this._addPolyVertex(this._lineIn,n<=0?t:this._xCut,i),this._addPolyVertex(this._lineOut,n>=0?t:this._xCut,i)):n<0?(0===this._prevSide&&this._pushLineOut(),this._lineIn.push([t,i])):n>0?(0===this._prevSide&&this._pushLineIn(),this._lineOut.push([t,i])):this._prevSide<0?(this._lineIn.push([t,i]),this._lineOut.push([t,i])):this._prevSide>0&&(this._lineOut.push([t,i]),this._lineIn.push([t,i]))}_addPolyVertex(t,i,n){const o=t.length;o>1&&t[o-1][0]===i&&t[o-2][0]===i?t[o-1][1]=n:t.push([i,n])}_checkClosingPt(t){const i=t.length;i>3&&t[0][0]===this._xCut&&t[i-2][0]===this._xCut&&t[1][0]===this._xCut&&(t[0][1]=t[i-2][1],t.pop())}_side(t){return t<this._xCut?-1:t>this._xCut?1:0}_intersect(t,i){return t[1]+(this._xCut-t[0])/(i[0]-t[0])*(i[1]-t[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}},19702:(Z,j,e)=>{e.d(j,{A:()=>K});var f=e(15861),D=e(17626),S=e(54024),B=e(10699),A=e(32917),O=e(77712),z=(e(8314),e(63290),e(4619),e(76898)),G=e(36947);const K=P=>{let g=class extends P{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(u){super.postscript(u),(0,G.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}_validateHeightModelInfo(){var u=this;return(0,f.Z)(function*(){const p=new AbortController,M=p.signal;u.addHandles((0,S.kB)(()=>p.abort())),yield(0,A.N1)(()=>u.view.defaultsFromMap?.heightModelInfoReady,M),(0,B.k_)(M);const m=(0,G.Wt)(u.layer,u.view.heightModelInfo,u.supportsHeightUnitConversion);if(m)throw m})()}canResume(){const u=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!u?.minScale||!u.maxScale||u.minScale>=u.maxScale)}getSuspendInfo(){const u=super.getSuspendInfo(),p=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return p&&p.minScale&&p.maxScale&&p.minScale<p.maxScale&&(u.outsideScaleRange=!0),u}};return(0,D._)([(0,O.Cb)()],g.prototype,"view",void 0),(0,D._)([(0,O.Cb)()],g.prototype,"slicePlaneEnabled",void 0),g=(0,D._)([(0,z.j)("esri.views.3d.layers.LayerView3D")],g),g}},75602:(Z,j,e)=>{e.r(j),e.d(j,{default:()=>R});var f=e(15861),D=e(17626),S=e(26584),B=e(54024),A=e(88070),O=e(10699),U=e(32917),x=e(77712),K=(e(8314),e(63290),e(4619),e(76898)),P=e(32884),g=e(65401),u=e(17732),p=e(62600),M=e(19702),m=e(65900),b=e(94255),w=e(41120),a=e(54840),t=e(64232),i=e(81695),n=e(23147),o=e(16396),E=e(79967),y=e(45611),C=e(67969);let c=class extends((0,M.A)(y.Z)){constructor(){var s;super(...arguments),s=this,this.type="media-3d",this.drapeSourceType=p.Lw.RasterImage,this.updatePolicy=n.j.ASYNC,this._uidToElement=new Map,this._renderedElements=new Map,this._lastDrapingExtent=null,this._update=(0,O.Ds)(function(){var l=(0,f.Z)(function*(h,d,_){const v=yield s._collectMediaElements(h,d,_);s._synchronizeRenderElements(v)});return function(h,d,_){return l.apply(this,arguments)}}(),0)}initialize(){this._renderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this);const s=()=>this._updateWithLastDrapingExtent();this.addHandles([(0,B.kB)(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this)),(0,U.on)(()=>this.layer.effectiveSource,"change",s),(0,U.on)(()=>this.layer.effectiveSource,"refresh",s)]),this._updatingHandles.add(()=>this.suspended,s)}setDrapingExtent(s,l){this._lastDrapingExtent={overlays:s,spatialReference:l},this._updateWithLastDrapingExtent()}getHit(s){const l=this._uidToElement.get(s);return l?{type:"media",element:l,layer:this.layer}:null}_updateWithLastDrapingExtent(){if(null==this._lastDrapingExtent||this.suspended)return void(this._renderer&&this._synchronizeRenderElements(new Set));const{overlays:s,spatialReference:l}=this._lastDrapingExtent;this._updatingHandles.addPromise(this._update(s,l).catch(()=>{}))}_collectMediaElements(s,l,h){var d=this;return(0,f.Z)(function*(){const _=d.layer.effectiveSource;return null==_?new Set:new Set((yield Promise.all(s.map(v=>_.queryElements((0,g.HH)(v.extent,l),{signal:h})))).flat())})()}_synchronizeRenderElements(s){this._synchronizeRenderElementsRemove(s),this._synchronizeRenderElementsAdd(s)}_synchronizeRenderElementsRemove(s){const l=new Set,h=[];this._renderedElements.forEach((d,_)=>{s.has(_)||(l.add(_),null!=d.renderData&&h.push(d.renderData.renderGeometry),this._removeElement(_,d))}),this._renderer.removeGeometries(h,a.T.REMOVE)}_synchronizeRenderElementsAdd(s){for(const l of s)this._renderedElements.has(l)||this._createRenderElement(l)}_removeElement(s,{renderData:l,handle:h}){this._destroyRenderData(l),this._renderedElements.delete(s),this._uidToElement.delete(s.uid),h.remove()}_createRenderElement(s){var l=this;return(0,f.Z)(function*(){const h=new u.L({spatialReference:l.view.spatialReference,element:s}),d={renderData:null,handle:(0,B.AL)([l._updatingHandles.add(()=>s.opacity,_=>{null!=d.renderData&&d.renderData.material.setParameters({opacity:_})}),l._updatingHandles.add(()=>h.coords,()=>{null!=d.renderData?l._updateGeometry(h,d,d.renderData):l._initializeRenderData(h,d)}),l._updatingHandles.add(()=>s.content,()=>l._initializeRenderData(h,d)),(0,B.ed)(h)])};l._renderedElements.set(s,d),l._uidToElement.set(s.uid,s),l._updatingHandles.addPromise(s.load().catch(()=>{})),l._initializeRenderData(h,d)})()}_initializeRenderData(s,l){const{coords:h,element:d}=s,{contentWidth:_,contentHeight:v}=d;if(null==h||null==d.content)return void(l.renderData=this._destroyRenderData(l.renderData));if(null!=l.renderData)return;const I=this._createTexture(d.content),W=I.load(this.view._stage.renderView.renderingContext);this.view._stage.add(I),(0,O.y8)(W)&&this._updatingHandles.addPromise(W);const H=new E.j({initTextureTransparent:!0,textureId:I.id,opacity:d.opacity,transparent:!0,perspectiveInterpolation:!0}),V=this._getPositionAttributeArray(h),F=this._getPerspectiveDivideAttributeArray(V,_,v),$=[0,1,2,0,2,3],Y=new w.Z(H,[[o.T.POSITION,new b.a(V,$,3,!0)],[o.T.UV0,new b.a([0,0,1,0,1,1,0,1],$,2,!0)],[o.T.PERSPECTIVEDIVIDE,new b.a(F,$,1,!0)]]),X=new t.z(Y,{layerUid:this.layer.uid,graphicUid:d.uid});this._renderer.addGeometries([X],a.T.ADD),l.renderData={renderGeometry:X,texture:I,material:H}}_updateGeometry(s,l,h){const{coords:d,element:_}=s;if(null==d||null==_.content)return void(l.renderData=this._destroyRenderData(l.renderData));const v=this._getPositionAttributeArray(d);h.renderGeometry.geometry.setAttributeData(o.T.POSITION,v);const I=this._getPerspectiveDivideAttributeArray(v,_.contentWidth,_.contentHeight);h.renderGeometry.geometry.setAttributeData(o.T.PERSPECTIVEDIVIDE,I),this._renderer.modifyGeometries([h.renderGeometry],a.$.GEOMETRY)}_getPositionAttributeArray(s){const[l,h,d,_]=s.rings[0];return[l[0],l[1],m.gi,_[0],_[1],m.gi,d[0],d[1],m.gi,h[0],h[1],m.gi]}_getPerspectiveDivideAttributeArray(s,l,h){(0,A.E)(T,[0,0,l,0,l,h,0,h],[s[0],s[1],s[3],s[4],s[6],s[7],s[9],s[10]]);const d=T[6]/T[8]*l,_=T[7]/T[8]*h;return[1,1+d,1+d+_,1+_]}_destroyRenderData(s){if(null==s)return null;const l=s.texture;return l.unload(),this.view._stage.remove(l),this._renderer.removeGeometries([s.renderGeometry],a.T.REMOVE),null}_createTexture(s){const l=s instanceof HTMLImageElement?s.naturalWidth:s.width,h=s instanceof HTMLImageElement?s.naturalHeight:s.height;if("getFrame"in s)throw new S.Z("media-layer-view-3d","animation is not supported");return new i.x(s,{wrap:{s:C.e8.CLAMP_TO_EDGE,t:C.e8.CLAMP_TO_EDGE},preMultiplyAlpha:!0,width:l,height:h,mipmap:!0,updateCallback:()=>this.view.basemapTerrain.overlayManager.setDrawTexturesDirty()})}get test(){const s=this;return{get numberOfElements(){return s._renderedElements.size}}}};(0,D._)([(0,x.Cb)({readOnly:!0})],c.prototype,"type",void 0),(0,D._)([(0,x.Cb)()],c.prototype,"layer",void 0),c=(0,D._)([(0,K.j)("esri.views.3d.layers.MediaLayerView3D")],c);const T=(0,P.Ue)(),R=c},79967:(Z,j,e)=>{e.d(j,{j:()=>R});var f=e(60479),D=e(13934),S=e(42743),B=e(33470),A=e(40723),O=e(88569),U=e(5894),x=e(2282),L=e(16396),z=e(2770),G=e(66131),K=e(15842),P=e(42037),g=e(17626),p=(e(17625),e(651)),M=e(91056),m=e(87601),b=e(12407),w=e(64127),a=e(44835),t=e(41528),i=e(34013),n=e(67969),o=e(2078);class y extends M.A{initializeProgram(_){return new b.$(_.rctx,y.shader.get().build(this.configuration),T)}_setPipelineState(_,v){const I=this.configuration,W=_===a.A.NONE,H=_===a.A.FrontFace;return(0,o.sm)({blending:I.output!==D.H_.Color&&I.output!==D.H_.Alpha||!I.transparent?null:W?C:(0,O.j7)(_),culling:(0,o.zp)(I.cullFace),depthTest:{func:(0,O.Bh)(_)},depthWrite:W?I.writeDepth?o.LZ:null:(0,O.K5)(_),colorWrite:o.BK,stencilWrite:I.hasOccludees?w.s3:null,stencilTest:I.hasOccludees?v?w.eD:w.RY:null,polygonOffset:W||H?null:(0,O.je)(I.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(_){return _?this._occludeePipelineState:super.getPipeline()}}y.shader=new p.J(i.I,()=>e.e(8586).then(e.bind(e,18586)));const C=(0,o.if)(n.zi.ONE,n.zi.ONE_MINUS_SRC_ALPHA);class c extends t.W{constructor(){super(...arguments),this.output=D.H_.Color,this.cullFace=S.Vr.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=a.A.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}(0,g._)([(0,m.o)({count:D.H_.COUNT})],c.prototype,"output",void 0),(0,g._)([(0,m.o)({count:S.Vr.COUNT})],c.prototype,"cullFace",void 0),(0,g._)([(0,m.o)()],c.prototype,"hasSlicePlane",void 0),(0,g._)([(0,m.o)()],c.prototype,"transparent",void 0),(0,g._)([(0,m.o)()],c.prototype,"enableOffset",void 0),(0,g._)([(0,m.o)()],c.prototype,"writeDepth",void 0),(0,g._)([(0,m.o)()],c.prototype,"hasOccludees",void 0),(0,g._)([(0,m.o)({count:a.A.COUNT})],c.prototype,"transparencyPassType",void 0),(0,g._)([(0,m.o)()],c.prototype,"multipassEnabled",void 0),(0,g._)([(0,m.o)()],c.prototype,"cullAboveGround",void 0),(0,g._)([(0,m.o)()],c.prototype,"perspectiveInterpolation",void 0),(0,g._)([(0,m.o)({constValue:!1})],c.prototype,"occlusionPass",void 0);const T=new Map([[L.T.POSITION,0],[L.T.UV0,2],[L.T.PERSPECTIVEDIVIDE,3]]);class R extends K.c{constructor(_){super(_,new h),this.supportsEdges=!0,this.produces=new Map([[U.r.OPAQUE_MATERIAL,v=>v===D.H_.Highlight||(0,D.NM)(v)&&!this.parameters.transparent],[U.r.TRANSPARENT_MATERIAL,v=>(0,D.NM)(v)&&this.parameters.transparent&&this.parameters.writeDepth],[U.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,v=>(0,D.NM)(v)&&this.parameters.transparent&&!this.parameters.writeDepth],[U.r.DRAPED_MATERIAL,v=>(0,D.g)(v)]]),this._vertexAttributeLocations=T,this._configuration=new c}getConfiguration(_,v){return this._configuration.output=_,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=v.transparencyPassType,this._configuration.enableOffset=v.camera.relativeElevation<O.ve,this._configuration.multipassEnabled=v.multipassEnabled,this._configuration.cullAboveGround=v.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}createGLMaterial(_){return new s(_)}createBufferWriter(){const _=G.W1.clone();return this.parameters.perspectiveInterpolation&&_.f32(L.T.PERSPECTIVEDIVIDE),new l(_)}}class s extends B.F{constructor(_){super({..._,..._.material.parameters})}_updateParameters(_){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(y,_)}_updateOccludeeState(_){_.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:_.hasOccludees}),this._updateParameters(_))}beginSlot(_){return this._output!==D.H_.Color&&this._output!==D.H_.Alpha||this._updateOccludeeState(_),this._updateParameters(_)}}class l extends z.G{write(_,v,I,W,H){for(const V of this.vertexBufferLayout.fields.keys()){const N=I.attributes.get(V);if(N)if(V===L.T.PERSPECTIVEDIVIDE){(0,x.hu)(1===N.size);const F=W.getField(V,f.ly);F&&(0,P.XW)(N,F,H)}else(0,P.i9)(V,N,_,v,W,H)}}}class h extends A.Mt{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=S.Vr.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}},45611:(Z,j,e)=>{e.d(j,{Z:()=>g});var f=e(17626),D=e(83761),S=e(61885),B=e(61996),A=e(63290),O=e(62208),U=e(60330),x=e(77712),G=(e(8314),e(4619),e(76898)),K=e(11426);let P=class extends((0,B.IG)((0,U.v)(S.Z.EventedMixin(D.Z)))){constructor(u){super(u),this._updatingHandles=new K.R,this.layer=null,this.parent=null}initialize(){this.when().catch(u=>{if("layerview:create-error"!==u.name){const p=this.layer&&this.layer.id||"no id",M=this.layer?.title||"no title";A.Z.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${M}', id: '${p}')`,u)}})}destroy(){this._updatingHandles=(0,O.SC)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(u){this._overrideIfSome("visible",u)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const u=this.parent?.suspended?this.parent.suspendInfo:{};return this.view?.ready||(u.viewNotReady=!0),this.layer&&this.layer.loaded||(u.layerNotLoaded=!0),this.visible||(u.layerInvisible=!0),u}isUpdating(){return!1}};(0,f._)([(0,x.Cb)()],P.prototype,"fullOpacity",null),(0,f._)([(0,x.Cb)()],P.prototype,"layer",void 0),(0,f._)([(0,x.Cb)()],P.prototype,"parent",void 0),(0,f._)([(0,x.Cb)({readOnly:!0})],P.prototype,"suspended",null),(0,f._)([(0,x.Cb)({readOnly:!0})],P.prototype,"suspendInfo",null),(0,f._)([(0,x.Cb)({readOnly:!0})],P.prototype,"legendEnabled",null),(0,f._)([(0,x.Cb)({type:Boolean,readOnly:!0})],P.prototype,"updating",null),(0,f._)([(0,x.Cb)({readOnly:!0})],P.prototype,"updatingProgress",null),(0,f._)([(0,x.Cb)()],P.prototype,"visible",null),(0,f._)([(0,x.Cb)()],P.prototype,"view",void 0),P=(0,f._)([(0,G.j)("esri.views.layers.LayerView")],P);const g=P}}]);