"use strict";(self.webpackChunkpredio360_app=self.webpackChunkpredio360_app||[]).push([[7591],{37591:(I,v,l)=>{l.r(v),l.d(v,{CalciteListItem:()=>k,defineCustomElement:()=>A});var C=l(15861),n=l(76210),s=l(46203),f=l(18564),i=l(89251),u=l(24189),m=l(98635);const g=new Map,x=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteListItemSelect=(0,n.yM)(this,"calciteListItemSelect",6),this.calciteInternalListItemSelect=(0,n.yM)(this,"calciteInternalListItemSelect",6),this.calciteInternalListItemActive=(0,n.yM)(this,"calciteInternalListItemActive",6),this.calciteInternalFocusPreviousItem=(0,n.yM)(this,"calciteInternalFocusPreviousItem",6),this.handleContentSlotChange=t=>{this.hasCustomContent=(0,s.s)(t)},this.handleActionsStartSlotChange=t=>{this.hasActionsStart=(0,s.s)(t)},this.handleActionsEndSlotChange=t=>{this.hasActionsEnd=(0,s.s)(t)},this.handleContentStartSlotChange=t=>{this.hasContentStart=(0,s.s)(t)},this.handleContentEndSlotChange=t=>{this.hasContentEnd=(0,s.s)(t)},this.handleDefaultSlotChange=t=>{const{parentListEl:e}=this,a=(0,i.g)(t);(0,i.u)(a);const c=!!a.length;c&&e&&!e.openable&&(e.openable=!0),this.openable=c,c||(this.open=!1)},this.toggleOpen=()=>{this.open=!this.open},this.itemClicked=()=>{this.toggleSelected(),this.calciteInternalListItemActive.emit()},this.toggleSelected=()=>{this.disabled||("none"!==this.selectionMode&&(this.selected=!this.selected),this.calciteListItemSelect.emit())},this.handleItemKeyDown=t=>{const{key:e}=t,a=t.composedPath(),{containerEl:c,contentEl:r,actionsStartEl:p,actionsEndEl:o,open:d,openable:_}=this,h=[p,r,o].filter(Boolean),b=h.findIndex(y=>a.includes(y));if(" "===e)t.preventDefault(),this.toggleSelected();else if("ArrowRight"===e){t.preventDefault();const y=b+1;-1===b?!d&&_?(this.open=!0,this.focusCell(null)):h[0]&&this.focusCell(h[0]):h[b]&&h[y]&&this.focusCell(h[y])}else if("ArrowLeft"===e){t.preventDefault();const y=b-1;-1===b?(this.focusCell(null),d&&_?this.open=!1:this.calciteInternalFocusPreviousItem.emit()):0===b?(this.focusCell(null),c.focus()):h[b]&&h[y]&&this.focusCell(h[y])}},this.focusCellNull=()=>{this.focusCell(null)},this.focusCell=(t,e=!0)=>{const{contentEl:a,actionsStartEl:c,actionsEndEl:r,parentListEl:p}=this;e&&g.set(p,null),[c,a,r].filter(Boolean).forEach((o,d)=>{const _="tabindex";o===t?(o.setAttribute(_,"0"),e&&g.set(p,d)):o.removeAttribute(_)}),t?.focus()},this.active=!1,this.description=void 0,this.disabled=!1,this.label=void 0,this.metadata=void 0,this.open=!1,this.setSize=null,this.setPosition=null,this.selected=!1,this.value=void 0,this.selectionMode=null,this.selectionAppearance=null,this.level=null,this.visualLevel=null,this.parentListEl=void 0,this.openable=!1,this.hasActionsStart=!1,this.hasActionsEnd=!1,this.hasCustomContent=!1,this.hasContentStart=!1,this.hasContentEnd=!1}activeHandler(t){t||this.focusCell(null,!1)}handleSelectedChange(t){t&&this.calciteInternalListItemSelect.emit()}connectedCallback(){const{el:t}=this;this.parentListEl=t.closest("calcite-list"),this.level=(0,i.a)(t)+1,this.visualLevel=(0,i.a)(t,!0),this.setSelectionDefaults()}componentWillLoad(){(0,u.a)(this)}componentDidLoad(){(0,u.s)(this)}componentDidRender(){(0,f.u)(this,"managed")}setFocus(){var t=this;return(0,C.Z)(function*(){yield(0,u.c)(t);const{containerEl:e,contentEl:a,actionsStartEl:c,actionsEndEl:r,parentListEl:p}=t,o=g.get(p);if("number"!=typeof o)e?.focus();else{const d=[c,a,r].filter(Boolean);d[o]?t.focusCell(d[o]):e?.focus()}})()}renderSelected(){const{selected:t,selectionMode:e,selectionAppearance:a}=this;return"none"===e||"border"===a?null:(0,n.h)("td",{class:i.C.selectionContainer,key:"selection-container",onClick:this.itemClicked},(0,n.h)("calcite-icon",{icon:t?"multiple"===e?i.I.selectedMultiple:i.I.selectedSingle:i.I.unselected,scale:"s"}))}renderOpen(){const{el:t,open:e,openable:a,parentListEl:c}=this,r=(0,s.c)(t);return a?(0,n.h)("td",{class:i.C.openContainer,key:"open-container",onClick:this.toggleOpen},(0,n.h)("calcite-icon",{icon:e?i.I.open:"rtl"===r?i.I.closedRTL:i.I.closedLTR,scale:"s"})):c?.openable?(0,n.h)("td",{class:i.C.openContainer,key:"open-container",onClick:this.itemClicked},(0,n.h)("calcite-icon",{icon:i.I.blank,scale:"s"})):null}renderActionsStart(){const{label:t,hasActionsStart:e}=this;return(0,n.h)("td",{"aria-label":t,class:i.C.actionsStart,hidden:!e,key:"actions-start-container",ref:a=>this.actionsStartEl=a,role:"gridcell"},(0,n.h)("slot",{name:i.S.actionsStart,onSlotchange:this.handleActionsStartSlotChange}))}renderActionsEnd(){const{label:t,hasActionsEnd:e}=this;return(0,n.h)("td",{"aria-label":t,class:i.C.actionsEnd,hidden:!e,key:"actions-end-container",ref:a=>this.actionsEndEl=a,role:"gridcell"},(0,n.h)("slot",{name:i.S.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}))}renderContentStart(){const{hasContentStart:t}=this;return(0,n.h)("div",{class:i.C.contentStart,hidden:!t},(0,n.h)("slot",{name:i.S.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderCustomContent(){const{hasCustomContent:t}=this;return(0,n.h)("div",{class:i.C.customContent,hidden:!t},(0,n.h)("slot",{name:i.S.content,onSlotchange:this.handleContentSlotChange}))}renderContentEnd(){const{hasContentEnd:t}=this;return(0,n.h)("div",{class:i.C.contentEnd,hidden:!t},(0,n.h)("slot",{name:i.S.contentEnd,onSlotchange:this.handleContentEndSlotChange}))}renderContentProperties(){const{label:t,description:e,hasCustomContent:a}=this;return a||!t&&!e?null:(0,n.h)("div",{class:i.C.content,key:"content"},t?(0,n.h)("div",{class:i.C.label,key:"label"},t):null,e?(0,n.h)("div",{class:i.C.description,key:"description"},e):null)}renderContentContainer(){const{description:t,label:e,selectionMode:a,hasCustomContent:c}=this,r=c||!!e||!!t,p=[this.renderContentStart(),this.renderCustomContent(),this.renderContentProperties(),this.renderContentEnd()];return(0,n.h)("td",{"aria-label":e,class:{[i.C.contentContainer]:!0,[i.C.contentContainerSelectable]:"none"!==a,[i.C.contentContainerHasCenterContent]:r},key:"content-container",onClick:this.itemClicked,ref:o=>this.contentEl=o,role:"gridcell"},p)}render(){const{openable:t,open:e,level:a,setPosition:c,setSize:r,active:p,label:o,selected:d,selectionAppearance:_,selectionMode:h}=this,b="none"!==h&&"border"===_,y=b&&d,w=b&&!d;return(0,n.h)(n.AA,null,(0,n.h)("tr",{"aria-expanded":t?(0,s.t)(e):null,"aria-label":o,"aria-level":a,"aria-posinset":c,"aria-selected":(0,s.t)(d),"aria-setsize":r,class:{[i.C.container]:!0,[i.C.containerBorderSelected]:y,[i.C.containerBorderUnselected]:w},onFocus:this.focusCellNull,onKeyDown:this.handleItemKeyDown,ref:L=>this.containerEl=L,role:"row",style:{"--calcite-list-item-spacing-indent-multiplier":`${this.visualLevel}`},tabIndex:p?0:-1},this.renderSelected(),this.renderOpen(),this.renderActionsStart(),this.renderContentContainer(),this.renderActionsEnd()),(0,n.h)("div",{class:{[i.C.nestedContainer]:!0,[i.C.nestedContainerHidden]:t&&!e}},(0,n.h)("slot",{onSlotchange:this.handleDefaultSlotChange})))}setSelectionDefaults(){const{parentListEl:t,selectionMode:e,selectionAppearance:a}=this;t&&(e||(this.selectionMode=t.selectionMode),a||(this.selectionAppearance=t.selectionAppearance))}get el(){return this}static get watchers(){return{active:["activeHandler"],selected:["handleSelectedChange"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;flex-direction:column;--calcite-list-item-icon-color:var(--calcite-ui-brand);--calcite-list-item-spacing-indent:1rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-ui-foreground-1);font-family:var(--calcite-sans-family);padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}.container *{box-sizing:border-box}.container:hover{cursor:pointer;background-color:var(--calcite-ui-foreground-2)}.container--border-selected{border-inline-start:4px solid var(--calcite-ui-brand)}.container--border-unselected{border-inline-start:4px solid transparent}.nested-container{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1)}.nested-container--hidden{display:none}.content-container{display:flex;flex:1 1 auto;align-items:stretch;padding:0px;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}tr,td{outline-color:transparent}tr:focus,td:focus{z-index:300;outline:2px solid var(--calcite-ui-brand)}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description{font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-ui-text-1)}.description{margin-block-start:0.125rem;color:var(--calcite-ui-text-3)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-inline:0.75rem;color:var(--calcite-list-item-icon-color)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.open-container{display:flex;align-items:center}.open-container,.selection-container{cursor:pointer}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-end ::slotted(calcite-action){align-self:stretch;color:inherit}::slotted(calcite-list-item){border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3)}[hidden]{display:none}"}},[1,"calcite-list-item",{active:[4],description:[1],disabled:[516],label:[1],metadata:[16],open:[1540],setSize:[2,"set-size"],setPosition:[2,"set-position"],selected:[1540],value:[8],selectionMode:[1025,"selection-mode"],selectionAppearance:[1025,"selection-appearance"],level:[32],visualLevel:[32],parentListEl:[32],openable:[32],hasActionsStart:[32],hasActionsEnd:[32],hasCustomContent:[32],hasContentStart:[32],hasContentEnd:[32],setFocus:[64]}]);function D(){typeof customElements>"u"||["calcite-list-item","calcite-icon"].forEach(e=>{switch(e){case"calcite-list-item":customElements.get(e)||customElements.define(e,x);break;case"calcite-icon":customElements.get(e)||(0,m.d)()}})}D();const k=x,A=D},98635:(I,v,l)=>{l.d(v,{I:()=>k,d:()=>A});var C=l(15861),n=l(76210),s=l(46203),f=l(22757);const u={},m={},E={s:16,m:24,l:32};function S(){return(S=(0,C.Z)(function*({icon:t,scale:e}){const a=E[e],c=function x(t){const e=!isNaN(Number(t.charAt(0))),a=t.split("-");if(a.length>0){const r=/[a-z]/i;t=a.map((p,o)=>p.replace(r,function(_,h){return 0===o&&0===h?_:_.toUpperCase()})).join("")}return e?`i${t}`:t}(t),r="F"===c.charAt(c.length-1),o=`${r?c.substring(0,c.length-1):c}${a}${r?"F":""}`;if(u[o])return u[o];m[o]||(m[o]=fetch((0,n.K3)(`./assets/icon/${o}.json`)).then(_=>_.json()).catch(()=>(console.error(`"${o}" is not a valid calcite-ui-icon name`),"")));const d=yield m[o];return u[o]=d,d})).apply(this,arguments)}const k=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible(()=>{this.visible=!0,this.loadIconPathData()})}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}componentWillLoad(){var t=this;return(0,C.Z)(function*(){t.loadIconPathData()})()}render(){const{el:t,flipRtl:e,pathData:a,scale:c,textLabel:r}=this,p=(0,s.c)(t),o=E[c],d=!!r,_=[].concat(a||"");return(0,n.h)(n.AA,{"aria-hidden":(0,s.t)(!d),"aria-label":d?r:null,role:d?"img":null},(0,n.h)("svg",{"aria-hidden":"true",class:{"flip-rtl":"rtl"===p&&e,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${o} ${o}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},_.map(h=>(0,n.h)("path","string"==typeof h?{d:h}:{d:h.d,opacity:"opacity"in h?h.opacity:1}))))}loadIconPathData(){var t=this;return(0,C.Z)(function*(){const{icon:e,scale:a,visible:c}=t;!n.Z5.isBrowser||!e||!c||(t.pathData=yield function g(t){return S.apply(this,arguments)}({icon:e,scale:a}))})()}waitUntilVisible(t){this.intersectionObserver=(0,f.c)("intersection",e=>{e.forEach(a=>{a.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())})},{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){block-size:1rem;inline-size:1rem;min-inline-size:1rem;min-block-size:1rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem;min-inline-size:1.5rem;min-block-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem;min-inline-size:2rem;min-block-size:2rem}.flip-rtl{transform:scaleX(-1)}.svg{display:block}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function A(){typeof customElements>"u"||["calcite-icon"].forEach(e=>{"calcite-icon"===e&&(customElements.get(e)||customElements.define(e,k))})}A()},18564:(I,v,l)=>{function C(){}function n(s,f=!1){if(s.disabled)return s.el.setAttribute("tabindex","-1"),s.el.setAttribute("aria-disabled","true"),s.el.contains(document.activeElement)&&document.activeElement.blur(),void(s.el.click=C);s.el.click=HTMLElement.prototype.click,"function"==typeof f?s.el.setAttribute("tabindex",f.call(s)?"0":"-1"):!0===f?s.el.setAttribute("tabindex","0"):!1===f&&s.el.removeAttribute("tabindex"),s.el.removeAttribute("aria-disabled")}l.d(v,{u:()=>n})},24189:(I,v,l)=>{l.d(v,{a:()=>s,c:()=>i,s:()=>f});const C=new WeakMap,n=new WeakMap;function s(u){n.set(u,new Promise(m=>C.set(u,m)))}function f(u){C.get(u)()}function i(u){return n.get(u)}},22757:(I,v,l)=>{l.d(v,{c:()=>n});var C=l(76210);function n(f,i,u){if(!C.Z5.isBrowser)return;const m=function s(f){class i extends window.MutationObserver{constructor(m){super(m),this.observedEntry=[],this.callback=m}observe(m,E){return this.observedEntry.push({target:m,options:E}),super.observe(m,E)}unobserve(m){const E=this.observedEntry.filter(g=>g.target!==m);this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),E.forEach(g=>this.observe(g.target,g.options))}}return"intersection"===f?window.IntersectionObserver:"mutation"===f?i:window.ResizeObserver}(f);return new m(i,u)}}}]);