import{c as e}from"./swc.D1tPGqVW.js";import{r as t}from"./swc.Bs8cprZZ.js";import{S as s}from"./swc.DAg73LFj.js";import{i,a as o,b as n}from"./swc.D_As-1mY.js";var r,a=((r=a||{}).click="click",r.hover="hover",r.longpress="longpress",r);const l=Symbol("lastInteractionType"),h="remove-focus-ring-safari-hack";class d{constructor(e,{overlay:t,isPersistent:s,handleOverlayReady:i}){this.target=e,this.isLazilyOpen=!1,this.isPersistent=!1,this.isPersistent=!!s,this.handleOverlayReady=i,this.isPersistent&&this.init(),this.overlay=t}get activelyOpening(){return!1}get open(){var e,t;return null!=(t=null==(e=this.overlay)?void 0:e.open)?t:this.isLazilyOpen}set open(e){if(e!==this.open){if(this.isLazilyOpen=e,this.overlay)return this.overlay.open=e,void(this.target[l]=this.type);e&&(customElements.whenDefined("sp-overlay").then((async()=>{const{Overlay:e}=await import("./swc.DoQm65kg.js").then((function(e){return e.a}));this.overlay=new e,this.overlay.open=!0,this.target[l]=this.type})),import("./swc.CHZpVxlK.js"))}}get overlay(){return this._overlay}set overlay(e){var t;e&&this.overlay!==e&&(this.overlay&&this.overlay.removeController(this),this._overlay=e,this.overlay.addController(this),this.initOverlay(),this.prepareDescription(this.target),null==(t=this.handleOverlayReady)||t.call(this,this.overlay))}prepareDescription(e){}releaseDescription(){}shouldCompleteOpen(){}init(){}initOverlay(){}abort(){var e;this.releaseDescription(),null==(e=this.abortController)||e.abort()}hostConnected(){this.init()}hostDisconnected(){this.isPersistent||this.abort()}}const p=new class{constructor(e={}){this.warmUpDelay=1e3,this.coolDownDelay=1e3,this.isWarm=!1,this.timeout=0,Object.assign(this,e)}async openTimer(e){if(this.cancelCooldownTimer(),!this.component||e!==this.component)return this.component&&(this.close(this.component),this.cancelCooldownTimer()),this.component=e,!this.isWarm&&(this.promise=new Promise((e=>{this.resolve=e,this.timeout=window.setTimeout((()=>{this.resolve&&(this.resolve(!1),this.isWarm=!0)}),this.warmUpDelay)})),this.promise);if(this.promise)return this.promise;throw new Error("Inconsistent state")}close(e){this.component&&this.component===e&&(this.resetCooldownTimer(),this.timeout>0&&(clearTimeout(this.timeout),this.timeout=0),this.resolve&&(this.resolve(!0),delete this.resolve),delete this.promise,delete this.component)}resetCooldownTimer(){this.isWarm&&(this.cooldownTimeout&&window.clearTimeout(this.cooldownTimeout),this.cooldownTimeout=window.setTimeout((()=>{this.isWarm=!1,delete this.cooldownTimeout}),this.coolDownDelay))}cancelCooldownTimer(){this.cooldownTimeout&&window.clearTimeout(this.cooldownTimeout),delete this.cooldownTimeout}},c=()=>{},m=(e,t,s)=>{const i=new AbortController,o=new Map,n=()=>{i.abort(),s()};let r,a;const l=requestAnimationFrame((()=>{r=requestAnimationFrame((()=>{a=requestAnimationFrame((()=>{n()}))}))})),h=t=>{t.target===e&&(o.set(t.propertyName,o.get(t.propertyName)-1),o.get(t.propertyName)||o.delete(t.propertyName),0===o.size&&n())};e.addEventListener("transitionrun",(t=>{t.target===e&&(o.has(t.propertyName)||o.set(t.propertyName,0),o.set(t.propertyName,o.get(t.propertyName)+1),cancelAnimationFrame(l),cancelAnimationFrame(r),cancelAnimationFrame(a))}),{signal:i.signal}),e.addEventListener("transitionend",h,{signal:i.signal}),e.addEventListener("transitioncancel",h,{signal:i.signal}),t()};function u(){return new Promise((e=>requestAnimationFrame((()=>e()))))}class g extends s{constructor(){super(...arguments),this.dispose=c,this.offset=0,this.willPreventClose=!1}async applyFocus(e,t){}get delayed(){return!1}set delayed(e){}get disabled(){return!1}set disabled(e){}get elementResolver(){return this._elementResolver}set elementResolver(e){this._elementResolver=e}async ensureOnDOM(e){}async makeTransition(e){return null}async manageDelay(e){}async manageDialogOpen(){}async managePopoverOpen(){}managePosition(){}get open(){return!1}set open(e){}get placementController(){return this._placementController}set placementController(e){this._placementController=e}requestSlottable(){}returnFocus(){}get state(){return"closed"}set state(e){}manuallyKeepOpen(){}static update(){const e=new CustomEvent("sp-update-overlays",{bubbles:!0,composed:!0,cancelable:!0});document.dispatchEvent(e)}static async open(e,t,s,i){await import("./swc.CHZpVxlK.js");const o=2===arguments.length,n=s||e,r=new this;let a=!1;r.dispose=()=>{r.addEventListener("sp-closed",(()=>{a||(l(),a=!0),requestAnimationFrame((()=>{r.remove()}))})),r.open=!1,r.dispose=c};const l=((e,t,{position:s,prepareCallback:i}={position:"beforeend"})=>{let{length:o}=e;if(0===o)return()=>e;let n=1,r=0;("afterbegin"===s||"afterend"===s)&&(n=-1,r=o-1);const a=new Array(o),l=new Array(o),h=document.createComment("placeholder for reparented element");do{const o=e[r];i&&(l[r]=i(o)),a[r]=h.cloneNode();const d=o.parentElement||o.getRootNode();d&&d!==o&&d.replaceChild(a[r],o),t.insertAdjacentElement(s,o),r+=n}while(--o>0);return function(){return function(e,t,s=[]){for(let i=0;i<t.length;++i){const o=t[i],n=e[i],r=n.parentElement||n.getRootNode();s[i]&&s[i](o),r&&r!==n&&r.replaceChild(o,n),delete e[i]}return t}(a,e,l)}})([n],r,{position:"beforeend",prepareCallback:e=>{const t=e.slot;return e.removeAttribute("slot"),()=>{e.slot=t}}});if(!o&&n&&i){const s=e,o=t,a=i;return g.applyOptions(r,{...a,delayed:a.delayed||n.hasAttribute("delayed"),trigger:a.virtualTrigger||s,type:"modal"===o?"modal":"hover"===o?"hint":"auto"}),s.insertAdjacentElement("afterend",r),await r.updateComplete,r.open=!0,r.dispose}const h=t;return r.append(n),g.applyOptions(r,{...h,delayed:h.delayed||n.hasAttribute("delayed")}),r.updateComplete.then((()=>{r.open=!0})),r}static applyOptions(e,t){var s,i;e.delayed=!!t.delayed,e.receivesFocus=null!=(s=t.receivesFocus)?s:"auto",e.triggerElement=t.trigger||null,e.type=t.type||"modal",e.offset=null!=(i=t.offset)?i:0,e.placement=t.placement,e.willPreventClose=!!t.notImmediatelyClosable}disconnectedCallback(){super.disconnectedCallback()}}const v={touch:"Double tap and long press for additional options",keyboard:"Press Space or Alt+Down Arrow for additional options",mouse:"Click and hold for additional options"};const y={click:class extends d{constructor(){super(...arguments),this.type=a.click,this.preventNextToggle=!1}handleClick(){this.preventNextToggle||(this.open=!this.open),this.preventNextToggle=!1}handlePointerdown(){this.preventNextToggle=this.open}init(){var e;null==(e=this.abortController)||e.abort(),this.abortController=new AbortController;const{signal:t}=this.abortController;this.target.addEventListener("click",(()=>this.handleClick()),{signal:t}),this.target.addEventListener("pointerdown",(()=>this.handlePointerdown()),{signal:t})}},longpress:class extends d{constructor(){super(...arguments),this.type=a.longpress,this.longpressState=null,this.releaseDescription=c,this.handlePointerup=()=>{var e;clearTimeout(this.timeout),this.target&&(this.longpressState="opening"===(null==(e=this.overlay)?void 0:e.state)?"pressed":null,document.removeEventListener("pointerup",this.handlePointerup),document.removeEventListener("pointercancel",this.handlePointerup))}}get activelyOpening(){return"opening"===this.longpressState||"pressed"===this.longpressState}handleLongpress(){this.open=!0,this.longpressState="potential"===this.longpressState?"opening":"pressed"}handlePointerdown(e){!this.target||0!==e.button||(this.longpressState="potential",document.addEventListener("pointerup",this.handlePointerup),document.addEventListener("pointercancel",this.handlePointerup),"holdAffordance"in this.target)||(this.timeout=setTimeout((()=>{this.target&&this.target.dispatchEvent(new CustomEvent("longpress",{bubbles:!0,composed:!0,detail:{source:"pointer"}}))}),300))}handleKeydown(e){const{code:t,altKey:s}=e;s&&"ArrowDown"===t&&(e.stopPropagation(),e.stopImmediatePropagation())}handleKeyup(e){const{code:t,altKey:s}=e;if("Space"===t||s&&"ArrowDown"===t){if(!this.target)return;e.stopPropagation(),this.target.dispatchEvent(new CustomEvent("longpress",{bubbles:!0,composed:!0,detail:{source:"keyboard"}})),setTimeout((()=>{this.longpressState=null}))}}prepareDescription(s){if(this.releaseDescription!==c||!this.overlay.elements.length)return;const i=document.createElement("div");i.id=`longpress-describedby-descriptor-${t()}`;const r=o()||n()?"touch":"keyboard";i.textContent=v[r],i.slot="longpress-describedby-descriptor";const a=s.getRootNode();a===this.overlay.getRootNode()?this.overlay.append(i):(i.hidden=!("host"in a),s.insertAdjacentElement("afterend",i));const l=e(s,"aria-describedby",[i.id]);this.releaseDescription=()=>{l(),i.remove(),this.releaseDescription=c}}shouldCompleteOpen(){this.longpressState="pressed"===this.longpressState?null:this.longpressState}init(){var e;null==(e=this.abortController)||e.abort(),this.abortController=new AbortController;const{signal:t}=this.abortController;this.target.addEventListener("longpress",(()=>this.handleLongpress()),{signal:t}),this.target.addEventListener("pointerdown",(e=>this.handlePointerdown(e)),{signal:t}),this.prepareDescription(this.target),!this.target.holdAffordance&&(this.target.addEventListener("keydown",(e=>this.handleKeydown(e)),{signal:t}),this.target.addEventListener("keyup",(e=>this.handleKeyup(e)),{signal:t}))}},hover:class extends d{constructor(){super(...arguments),this.type=a.hover,this.elementIds=[],this.focusedin=!1,this.pointerentered=!1}handleKeyup(e){("Tab"===e.code||"Escape"===e.code)&&(this.open=!0,this.removeSafariFocusRingClass())}handleTargetFocusin(){if(this.target.matches(":focus-visible")){if(i()&&this.target[l]===a.click)return void this.target.classList.add(h);this.open=!0,this.focusedin=!0,this.removeSafariFocusRingClass()}}handleTargetFocusout(){this.removeSafariFocusRingClass(),this.focusedin=!1,!this.pointerentered&&(this.open=!1)}handleTargetPointerenter(){var e;this.hoverTimeout&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=void 0),(null==(e=this.overlay)||!e.disabled)&&(this.open=!0,this.pointerentered=!0)}handleTargetPointerleave(){this.doPointerleave()}handleHostPointerenter(){this.hoverTimeout&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=void 0)}handleHostPointerleave(){this.doPointerleave()}prepareDescription(){if(!this.overlay.elements.length)return;const e=this.target.getRootNode(),t=this.overlay.elements[0].getRootNode();e===this.overlay.getRootNode()?this.prepareOverlayRelativeDescription():e===t&&this.prepareContentRelativeDescription()}prepareOverlayRelativeDescription(){const t=e(this.target,"aria-describedby",[this.overlay.id]);this.releaseDescription=()=>{t(),this.releaseDescription=c}}prepareContentRelativeDescription(){const s=[],i=this.overlay.elements.map((e=>(s.push(e.id),e.id||(e.id=`${this.overlay.tagName.toLowerCase()}-helper-${t()}`),e.id)));this.elementIds=s;const o=e(this.target,"aria-describedby",i);this.releaseDescription=()=>{o(),this.overlay.elements.map(((e,t)=>{e.id=this.elementIds[t]})),this.releaseDescription=c}}doPointerleave(){this.pointerentered=!1;const e=this.target;this.focusedin&&e.matches(":focus-visible")||(this.hoverTimeout=setTimeout((()=>{this.open=!1}),300))}init(){var e;null==(e=this.abortController)||e.abort(),this.abortController=new AbortController;const{signal:t}=this.abortController;this.target.addEventListener("keyup",(e=>this.handleKeyup(e)),{signal:t}),this.target.addEventListener("focusin",(()=>this.handleTargetFocusin()),{signal:t}),this.target.addEventListener("focusout",(()=>this.handleTargetFocusout()),{signal:t}),this.target.addEventListener("pointerenter",(()=>this.handleTargetPointerenter()),{signal:t}),this.target.addEventListener("pointerleave",(()=>this.handleTargetPointerleave()),{signal:t}),this.overlay&&this.initOverlay()}initOverlay(){if(!this.abortController)return;const{signal:e}=this.abortController;this.overlay.addEventListener("pointerenter",(()=>this.handleHostPointerenter()),{signal:e}),this.overlay.addEventListener("pointerleave",(()=>this.handleHostPointerleave()),{signal:e})}removeSafariFocusRingClass(){i()&&this.target.classList.contains(h)&&this.target.classList.remove(h)}}};export{g as A,a as I,v as L,m as g,u as n,p as o,y as s};
//# sourceMappingURL=swc.DrEMjtNt.js.map
