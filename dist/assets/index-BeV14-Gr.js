(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Bi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var c0={exports:{}},Gl={},d0={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ra=Symbol.for("react.element"),L2=Symbol.for("react.portal"),M2=Symbol.for("react.fragment"),O2=Symbol.for("react.strict_mode"),F2=Symbol.for("react.profiler"),z2=Symbol.for("react.provider"),U2=Symbol.for("react.context"),B2=Symbol.for("react.forward_ref"),V2=Symbol.for("react.suspense"),$2=Symbol.for("react.memo"),H2=Symbol.for("react.lazy"),Jh=Symbol.iterator;function W2(e){return e===null||typeof e!="object"?null:(e=Jh&&e[Jh]||e["@@iterator"],typeof e=="function"?e:null)}var f0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p0=Object.assign,h0={};function ns(e,t,n){this.props=e,this.context=t,this.refs=h0,this.updater=n||f0}ns.prototype.isReactComponent={};ns.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ns.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function m0(){}m0.prototype=ns.prototype;function Tf(e,t,n){this.props=e,this.context=t,this.refs=h0,this.updater=n||f0}var _f=Tf.prototype=new m0;_f.constructor=Tf;p0(_f,ns.prototype);_f.isPureReactComponent=!0;var em=Array.isArray,g0=Object.prototype.hasOwnProperty,Af={current:null},y0={key:!0,ref:!0,__self:!0,__source:!0};function x0(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)g0.call(t,r)&&!y0.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:Ra,type:e,key:s,ref:a,props:i,_owner:Af.current}}function G2(e,t){return{$$typeof:Ra,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function If(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ra}function q2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var tm=/\/+/g;function Iu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?q2(""+e.key):t.toString(36)}function Io(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ra:case L2:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Iu(a,0):r,em(i)?(n="",e!=null&&(n=e.replace(tm,"$&/")+"/"),Io(i,t,n,"",function(u){return u})):i!=null&&(If(i)&&(i=G2(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(tm,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",em(e))for(var o=0;o<e.length;o++){s=e[o];var l=r+Iu(s,o);a+=Io(s,t,n,l,i)}else if(l=W2(e),typeof l=="function")for(e=l.call(e),o=0;!(s=e.next()).done;)s=s.value,l=r+Iu(s,o++),a+=Io(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Za(e,t,n){if(e==null)return e;var r=[],i=0;return Io(e,r,"","",function(s){return t.call(n,s,i++)}),r}function K2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ht={current:null},No={transition:null},Y2={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:No,ReactCurrentOwner:Af};function v0(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:Za,forEach:function(e,t,n){Za(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Za(e,function(){t++}),t},toArray:function(e){return Za(e,function(t){return t})||[]},only:function(e){if(!If(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};de.Component=ns;de.Fragment=M2;de.Profiler=F2;de.PureComponent=Tf;de.StrictMode=O2;de.Suspense=V2;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y2;de.act=v0;de.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=p0({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Af.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in t)g0.call(t,l)&&!y0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&o!==void 0?o[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:Ra,type:e.type,key:i,ref:s,props:r,_owner:a}};de.createContext=function(e){return e={$$typeof:U2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:z2,_context:e},e.Consumer=e};de.createElement=x0;de.createFactory=function(e){var t=x0.bind(null,e);return t.type=e,t};de.createRef=function(){return{current:null}};de.forwardRef=function(e){return{$$typeof:B2,render:e}};de.isValidElement=If;de.lazy=function(e){return{$$typeof:H2,_payload:{_status:-1,_result:e},_init:K2}};de.memo=function(e,t){return{$$typeof:$2,type:e,compare:t===void 0?null:t}};de.startTransition=function(e){var t=No.transition;No.transition={};try{e()}finally{No.transition=t}};de.unstable_act=v0;de.useCallback=function(e,t){return ht.current.useCallback(e,t)};de.useContext=function(e){return ht.current.useContext(e)};de.useDebugValue=function(){};de.useDeferredValue=function(e){return ht.current.useDeferredValue(e)};de.useEffect=function(e,t){return ht.current.useEffect(e,t)};de.useId=function(){return ht.current.useId()};de.useImperativeHandle=function(e,t,n){return ht.current.useImperativeHandle(e,t,n)};de.useInsertionEffect=function(e,t){return ht.current.useInsertionEffect(e,t)};de.useLayoutEffect=function(e,t){return ht.current.useLayoutEffect(e,t)};de.useMemo=function(e,t){return ht.current.useMemo(e,t)};de.useReducer=function(e,t,n){return ht.current.useReducer(e,t,n)};de.useRef=function(e){return ht.current.useRef(e)};de.useState=function(e){return ht.current.useState(e)};de.useSyncExternalStore=function(e,t,n){return ht.current.useSyncExternalStore(e,t,n)};de.useTransition=function(){return ht.current.useTransition()};de.version="18.3.1";d0.exports=de;var E=d0.exports;const X2=Wl(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q2=E,Z2=Symbol.for("react.element"),J2=Symbol.for("react.fragment"),eS=Object.prototype.hasOwnProperty,tS=Q2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nS={key:!0,ref:!0,__self:!0,__source:!0};function b0(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)eS.call(t,r)&&!nS.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Z2,type:e,key:s,ref:a,props:i,_owner:tS.current}}Gl.Fragment=J2;Gl.jsx=b0;Gl.jsxs=b0;c0.exports=Gl;var c=c0.exports,w0={exports:{}},Dt={},k0={exports:{}},S0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,B){var k=D.length;D.push(B);e:for(;0<k;){var K=k-1>>>1,te=D[K];if(0<i(te,B))D[K]=B,D[k]=te,k=K;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var B=D[0],k=D.pop();if(k!==B){D[0]=k;e:for(var K=0,te=D.length,A=te>>>1;K<A;){var ce=2*(K+1)-1,ke=D[ce],se=ce+1,Se=D[se];if(0>i(ke,k))se<te&&0>i(Se,ke)?(D[K]=Se,D[se]=k,K=se):(D[K]=ke,D[ce]=k,K=ce);else if(se<te&&0>i(Se,k))D[K]=Se,D[se]=k,K=se;else break e}}return B}function i(D,B){var k=D.sortIndex-B.sortIndex;return k!==0?k:D.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var l=[],u=[],d=1,f=null,p=3,h=!1,x=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(D){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=D)r(u),B.sortIndex=B.expirationTime,t(l,B);else break;B=n(u)}}function S(D){if(v=!1,y(D),!x)if(n(l)!==null)x=!0,ue(C);else{var B=n(u);B!==null&&Z(S,B.startTime-D)}}function C(D,B){x=!1,v&&(v=!1,g(N),N=-1),h=!0;var k=p;try{for(y(B),f=n(l);f!==null&&(!(f.expirationTime>B)||D&&!R());){var K=f.callback;if(typeof K=="function"){f.callback=null,p=f.priorityLevel;var te=K(f.expirationTime<=B);B=e.unstable_now(),typeof te=="function"?f.callback=te:f===n(l)&&r(l),y(B)}else r(l);f=n(l)}if(f!==null)var A=!0;else{var ce=n(u);ce!==null&&Z(S,ce.startTime-B),A=!1}return A}finally{f=null,p=k,h=!1}}var w=!1,I=null,N=-1,j=5,T=-1;function R(){return!(e.unstable_now()-T<j)}function z(){if(I!==null){var D=e.unstable_now();T=D;var B=!0;try{B=I(!0,D)}finally{B?G():(w=!1,I=null)}}else w=!1}var G;if(typeof m=="function")G=function(){m(z)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,$=q.port2;q.port1.onmessage=z,G=function(){$.postMessage(null)}}else G=function(){b(z,0)};function ue(D){I=D,w||(w=!0,G())}function Z(D,B){N=b(function(){D(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){x||h||(x=!0,ue(C))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(D){switch(p){case 1:case 2:case 3:var B=3;break;default:B=p}var k=p;p=B;try{return D()}finally{p=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,B){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var k=p;p=D;try{return B()}finally{p=k}},e.unstable_scheduleCallback=function(D,B,k){var K=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?K+k:K):k=K,D){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=k+te,D={id:d++,callback:B,priorityLevel:D,startTime:k,expirationTime:te,sortIndex:-1},k>K?(D.sortIndex=k,t(u,D),n(l)===null&&D===n(u)&&(v?(g(N),N=-1):v=!0,Z(S,k-K))):(D.sortIndex=te,t(l,D),x||h||(x=!0,ue(C))),D},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(D){var B=p;return function(){var k=p;p=B;try{return D.apply(this,arguments)}finally{p=k}}}})(S0);k0.exports=S0;var rS=k0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iS=E,Rt=rS;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var E0=new Set,ea={};function ai(e,t){Vi(e,t),Vi(e+"Capture",t)}function Vi(e,t){for(ea[e]=t,e=0;e<t.length;e++)E0.add(t[e])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=Object.prototype.hasOwnProperty,sS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nm={},rm={};function aS(e){return Hc.call(rm,e)?!0:Hc.call(nm,e)?!1:sS.test(e)?rm[e]=!0:(nm[e]=!0,!1)}function oS(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function lS(e,t,n,r){if(t===null||typeof t>"u"||oS(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function mt(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new mt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new mt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new mt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new mt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new mt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new mt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new mt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new mt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new mt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Nf=/[\-:]([a-z])/g;function Pf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Nf,Pf);Je[t]=new mt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Nf,Pf);Je[t]=new mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Nf,Pf);Je[t]=new mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new mt(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new mt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Rf(e,t,n,r){var i=Je.hasOwnProperty(t)?Je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(lS(t,n,i,r)&&(n=null),r||i===null?aS(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Gn=iS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ja=Symbol.for("react.element"),pi=Symbol.for("react.portal"),hi=Symbol.for("react.fragment"),jf=Symbol.for("react.strict_mode"),Wc=Symbol.for("react.profiler"),C0=Symbol.for("react.provider"),T0=Symbol.for("react.context"),Df=Symbol.for("react.forward_ref"),Gc=Symbol.for("react.suspense"),qc=Symbol.for("react.suspense_list"),Lf=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),_0=Symbol.for("react.offscreen"),im=Symbol.iterator;function gs(e){return e===null||typeof e!="object"?null:(e=im&&e[im]||e["@@iterator"],typeof e=="function"?e:null)}var je=Object.assign,Nu;function As(e){if(Nu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Nu=t&&t[1]||""}return`
`+Nu+e}var Pu=!1;function Ru(e,t){if(!e||Pu)return"";Pu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,o=s.length-1;1<=a&&0<=o&&i[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||i[a]!==s[o]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=o);break}}}finally{Pu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?As(e):""}function uS(e){switch(e.tag){case 5:return As(e.type);case 16:return As("Lazy");case 13:return As("Suspense");case 19:return As("SuspenseList");case 0:case 2:case 15:return e=Ru(e.type,!1),e;case 11:return e=Ru(e.type.render,!1),e;case 1:return e=Ru(e.type,!0),e;default:return""}}function Kc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hi:return"Fragment";case pi:return"Portal";case Wc:return"Profiler";case jf:return"StrictMode";case Gc:return"Suspense";case qc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case T0:return(e.displayName||"Context")+".Consumer";case C0:return(e._context.displayName||"Context")+".Provider";case Df:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lf:return t=e.displayName||null,t!==null?t:Kc(e.type)||"Memo";case er:t=e._payload,e=e._init;try{return Kc(e(t))}catch{}}return null}function cS(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kc(t);case 8:return t===jf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function br(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function A0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dS(e){var t=A0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function eo(e){e._valueTracker||(e._valueTracker=dS(e))}function I0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=A0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Yc(e,t){var n=t.checked;return je({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=br(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function N0(e,t){t=t.checked,t!=null&&Rf(e,"checked",t,!1)}function Xc(e,t){N0(e,t);var n=br(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Qc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Qc(e,t.type,br(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function am(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Qc(e,t,n){(t!=="number"||Jo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Is=Array.isArray;function Pi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+br(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return je({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function om(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(Is(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:br(n)}}function P0(e,t){var n=br(t.value),r=br(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function R0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?R0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var to,j0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(to=to||document.createElement("div"),to.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=to.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ta(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fS=["Webkit","ms","Moz","O"];Object.keys(Os).forEach(function(e){fS.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Os[t]=Os[e]})});function D0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Os.hasOwnProperty(e)&&Os[e]?(""+t).trim():t+"px"}function L0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=D0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var pS=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ed(e,t){if(t){if(pS[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function td(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nd=null;function Mf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rd=null,Ri=null,ji=null;function um(e){if(e=La(e)){if(typeof rd!="function")throw Error(O(280));var t=e.stateNode;t&&(t=Ql(t),rd(e.stateNode,e.type,t))}}function M0(e){Ri?ji?ji.push(e):ji=[e]:Ri=e}function O0(){if(Ri){var e=Ri,t=ji;if(ji=Ri=null,um(e),t)for(e=0;e<t.length;e++)um(t[e])}}function F0(e,t){return e(t)}function z0(){}var ju=!1;function U0(e,t,n){if(ju)return e(t,n);ju=!0;try{return F0(e,t,n)}finally{ju=!1,(Ri!==null||ji!==null)&&(z0(),O0())}}function na(e,t){var n=e.stateNode;if(n===null)return null;var r=Ql(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var id=!1;if(Fn)try{var ys={};Object.defineProperty(ys,"passive",{get:function(){id=!0}}),window.addEventListener("test",ys,ys),window.removeEventListener("test",ys,ys)}catch{id=!1}function hS(e,t,n,r,i,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Fs=!1,el=null,tl=!1,sd=null,mS={onError:function(e){Fs=!0,el=e}};function gS(e,t,n,r,i,s,a,o,l){Fs=!1,el=null,hS.apply(mS,arguments)}function yS(e,t,n,r,i,s,a,o,l){if(gS.apply(this,arguments),Fs){if(Fs){var u=el;Fs=!1,el=null}else throw Error(O(198));tl||(tl=!0,sd=u)}}function oi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function B0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cm(e){if(oi(e)!==e)throw Error(O(188))}function xS(e){var t=e.alternate;if(!t){if(t=oi(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return cm(i),e;if(s===r)return cm(i),t;s=s.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,o=i.child;o;){if(o===n){a=!0,n=i,r=s;break}if(o===r){a=!0,r=i,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,r=i;break}if(o===r){a=!0,r=s,n=i;break}o=o.sibling}if(!a)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function V0(e){return e=xS(e),e!==null?$0(e):null}function $0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$0(e);if(t!==null)return t;e=e.sibling}return null}var H0=Rt.unstable_scheduleCallback,dm=Rt.unstable_cancelCallback,vS=Rt.unstable_shouldYield,bS=Rt.unstable_requestPaint,Fe=Rt.unstable_now,wS=Rt.unstable_getCurrentPriorityLevel,Of=Rt.unstable_ImmediatePriority,W0=Rt.unstable_UserBlockingPriority,nl=Rt.unstable_NormalPriority,kS=Rt.unstable_LowPriority,G0=Rt.unstable_IdlePriority,ql=null,gn=null;function SS(e){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(ql,e,void 0,(e.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:TS,ES=Math.log,CS=Math.LN2;function TS(e){return e>>>=0,e===0?32:31-(ES(e)/CS|0)|0}var no=64,ro=4194304;function Ns(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function rl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var o=a&~i;o!==0?r=Ns(o):(s&=a,s!==0&&(r=Ns(s)))}else a=n&~i,a!==0?r=Ns(a):s!==0&&(r=Ns(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tn(t),i=1<<n,r|=e[n],t&=~i;return r}function _S(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AS(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-tn(s),o=1<<a,l=i[a];l===-1?(!(o&n)||o&r)&&(i[a]=_S(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}}function ad(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function q0(){var e=no;return no<<=1,!(no&4194240)&&(no=64),e}function Du(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ja(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tn(t),e[t]=n}function IS(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-tn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Ff(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var xe=0;function K0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Y0,zf,X0,Q0,Z0,od=!1,io=[],cr=null,dr=null,fr=null,ra=new Map,ia=new Map,rr=[],NS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fm(e,t){switch(e){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":ra.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(t.pointerId)}}function xs(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=La(t),t!==null&&zf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function PS(e,t,n,r,i){switch(t){case"focusin":return cr=xs(cr,e,t,n,r,i),!0;case"dragenter":return dr=xs(dr,e,t,n,r,i),!0;case"mouseover":return fr=xs(fr,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return ra.set(s,xs(ra.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ia.set(s,xs(ia.get(s)||null,e,t,n,r,i)),!0}return!1}function J0(e){var t=Br(e.target);if(t!==null){var n=oi(t);if(n!==null){if(t=n.tag,t===13){if(t=B0(n),t!==null){e.blockedOn=t,Z0(e.priority,function(){X0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ld(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nd=r,n.target.dispatchEvent(r),nd=null}else return t=La(n),t!==null&&zf(t),e.blockedOn=n,!1;t.shift()}return!0}function pm(e,t,n){Po(e)&&n.delete(t)}function RS(){od=!1,cr!==null&&Po(cr)&&(cr=null),dr!==null&&Po(dr)&&(dr=null),fr!==null&&Po(fr)&&(fr=null),ra.forEach(pm),ia.forEach(pm)}function vs(e,t){e.blockedOn===t&&(e.blockedOn=null,od||(od=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,RS)))}function sa(e){function t(i){return vs(i,e)}if(0<io.length){vs(io[0],e);for(var n=1;n<io.length;n++){var r=io[n];r.blockedOn===e&&(r.blockedOn=null)}}for(cr!==null&&vs(cr,e),dr!==null&&vs(dr,e),fr!==null&&vs(fr,e),ra.forEach(t),ia.forEach(t),n=0;n<rr.length;n++)r=rr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)J0(n),n.blockedOn===null&&rr.shift()}var Di=Gn.ReactCurrentBatchConfig,il=!0;function jS(e,t,n,r){var i=xe,s=Di.transition;Di.transition=null;try{xe=1,Uf(e,t,n,r)}finally{xe=i,Di.transition=s}}function DS(e,t,n,r){var i=xe,s=Di.transition;Di.transition=null;try{xe=4,Uf(e,t,n,r)}finally{xe=i,Di.transition=s}}function Uf(e,t,n,r){if(il){var i=ld(e,t,n,r);if(i===null)Hu(e,t,r,sl,n),fm(e,r);else if(PS(i,e,t,n,r))r.stopPropagation();else if(fm(e,r),t&4&&-1<NS.indexOf(e)){for(;i!==null;){var s=La(i);if(s!==null&&Y0(s),s=ld(e,t,n,r),s===null&&Hu(e,t,r,sl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Hu(e,t,r,null,n)}}var sl=null;function ld(e,t,n,r){if(sl=null,e=Mf(r),e=Br(e),e!==null)if(t=oi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=B0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return sl=e,null}function ev(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wS()){case Of:return 1;case W0:return 4;case nl:case kS:return 16;case G0:return 536870912;default:return 16}default:return 16}}var lr=null,Bf=null,Ro=null;function tv(){if(Ro)return Ro;var e,t=Bf,n=t.length,r,i="value"in lr?lr.value:lr.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return Ro=i.slice(e,1<r?1-r:void 0)}function jo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function so(){return!0}function hm(){return!1}function Lt(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?so:hm,this.isPropagationStopped=hm,this}return je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),t}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vf=Lt(rs),Da=je({},rs,{view:0,detail:0}),LS=Lt(Da),Lu,Mu,bs,Kl=je({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$f,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bs&&(bs&&e.type==="mousemove"?(Lu=e.screenX-bs.screenX,Mu=e.screenY-bs.screenY):Mu=Lu=0,bs=e),Lu)},movementY:function(e){return"movementY"in e?e.movementY:Mu}}),mm=Lt(Kl),MS=je({},Kl,{dataTransfer:0}),OS=Lt(MS),FS=je({},Da,{relatedTarget:0}),Ou=Lt(FS),zS=je({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),US=Lt(zS),BS=je({},rs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),VS=Lt(BS),$S=je({},rs,{data:0}),gm=Lt($S),HS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=GS[e])?!!t[e]:!1}function $f(){return qS}var KS=je({},Da,{key:function(e){if(e.key){var t=HS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?WS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$f,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),YS=Lt(KS),XS=je({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ym=Lt(XS),QS=je({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$f}),ZS=Lt(QS),JS=je({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),eE=Lt(JS),tE=je({},Kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nE=Lt(tE),rE=[9,13,27,32],Hf=Fn&&"CompositionEvent"in window,zs=null;Fn&&"documentMode"in document&&(zs=document.documentMode);var iE=Fn&&"TextEvent"in window&&!zs,nv=Fn&&(!Hf||zs&&8<zs&&11>=zs),xm=" ",vm=!1;function rv(e,t){switch(e){case"keyup":return rE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mi=!1;function sE(e,t){switch(e){case"compositionend":return iv(t);case"keypress":return t.which!==32?null:(vm=!0,xm);case"textInput":return e=t.data,e===xm&&vm?null:e;default:return null}}function aE(e,t){if(mi)return e==="compositionend"||!Hf&&rv(e,t)?(e=tv(),Ro=Bf=lr=null,mi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nv&&t.locale!=="ko"?null:t.data;default:return null}}var oE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!oE[e.type]:t==="textarea"}function sv(e,t,n,r){M0(r),t=al(t,"onChange"),0<t.length&&(n=new Vf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Us=null,aa=null;function lE(e){gv(e,0)}function Yl(e){var t=xi(e);if(I0(t))return e}function uE(e,t){if(e==="change")return t}var av=!1;if(Fn){var Fu;if(Fn){var zu="oninput"in document;if(!zu){var wm=document.createElement("div");wm.setAttribute("oninput","return;"),zu=typeof wm.oninput=="function"}Fu=zu}else Fu=!1;av=Fu&&(!document.documentMode||9<document.documentMode)}function km(){Us&&(Us.detachEvent("onpropertychange",ov),aa=Us=null)}function ov(e){if(e.propertyName==="value"&&Yl(aa)){var t=[];sv(t,aa,e,Mf(e)),U0(lE,t)}}function cE(e,t,n){e==="focusin"?(km(),Us=t,aa=n,Us.attachEvent("onpropertychange",ov)):e==="focusout"&&km()}function dE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yl(aa)}function fE(e,t){if(e==="click")return Yl(t)}function pE(e,t){if(e==="input"||e==="change")return Yl(t)}function hE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ln=typeof Object.is=="function"?Object.is:hE;function oa(e,t){if(ln(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hc.call(t,i)||!ln(e[i],t[i]))return!1}return!0}function Sm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Em(e,t){var n=Sm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sm(n)}}function lv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function uv(){for(var e=window,t=Jo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jo(e.document)}return t}function Wf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function mE(e){var t=uv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lv(n.ownerDocument.documentElement,n)){if(r!==null&&Wf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Em(n,s);var a=Em(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gE=Fn&&"documentMode"in document&&11>=document.documentMode,gi=null,ud=null,Bs=null,cd=!1;function Cm(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cd||gi==null||gi!==Jo(r)||(r=gi,"selectionStart"in r&&Wf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bs&&oa(Bs,r)||(Bs=r,r=al(ud,"onSelect"),0<r.length&&(t=new Vf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gi)))}function ao(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yi={animationend:ao("Animation","AnimationEnd"),animationiteration:ao("Animation","AnimationIteration"),animationstart:ao("Animation","AnimationStart"),transitionend:ao("Transition","TransitionEnd")},Uu={},cv={};Fn&&(cv=document.createElement("div").style,"AnimationEvent"in window||(delete yi.animationend.animation,delete yi.animationiteration.animation,delete yi.animationstart.animation),"TransitionEvent"in window||delete yi.transitionend.transition);function Xl(e){if(Uu[e])return Uu[e];if(!yi[e])return e;var t=yi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cv)return Uu[e]=t[n];return e}var dv=Xl("animationend"),fv=Xl("animationiteration"),pv=Xl("animationstart"),hv=Xl("transitionend"),mv=new Map,Tm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(e,t){mv.set(e,t),ai(t,[e])}for(var Bu=0;Bu<Tm.length;Bu++){var Vu=Tm[Bu],yE=Vu.toLowerCase(),xE=Vu[0].toUpperCase()+Vu.slice(1);Er(yE,"on"+xE)}Er(dv,"onAnimationEnd");Er(fv,"onAnimationIteration");Er(pv,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(hv,"onTransitionEnd");Vi("onMouseEnter",["mouseout","mouseover"]);Vi("onMouseLeave",["mouseout","mouseover"]);Vi("onPointerEnter",["pointerout","pointerover"]);Vi("onPointerLeave",["pointerout","pointerover"]);ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ai("onBeforeInput",["compositionend","keypress","textInput","paste"]);ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ps="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ps));function _m(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,yS(r,t,void 0,e),e.currentTarget=null}function gv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;_m(i,o,u),s=l}else for(a=0;a<r.length;a++){if(o=r[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;_m(i,o,u),s=l}}}if(tl)throw e=sd,tl=!1,sd=null,e}function Ce(e,t){var n=t[md];n===void 0&&(n=t[md]=new Set);var r=e+"__bubble";n.has(r)||(yv(t,e,2,!1),n.add(r))}function $u(e,t,n){var r=0;t&&(r|=4),yv(n,e,r,t)}var oo="_reactListening"+Math.random().toString(36).slice(2);function la(e){if(!e[oo]){e[oo]=!0,E0.forEach(function(n){n!=="selectionchange"&&(vE.has(n)||$u(n,!1,e),$u(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oo]||(t[oo]=!0,$u("selectionchange",!1,t))}}function yv(e,t,n,r){switch(ev(t)){case 1:var i=jS;break;case 4:i=DS;break;default:i=Uf}n=i.bind(null,t,n,e),i=void 0,!id||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Hu(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;o!==null;){if(a=Br(o),a===null)return;if(l=a.tag,l===5||l===6){r=s=a;continue e}o=o.parentNode}}r=r.return}U0(function(){var u=s,d=Mf(n),f=[];e:{var p=mv.get(e);if(p!==void 0){var h=Vf,x=e;switch(e){case"keypress":if(jo(n)===0)break e;case"keydown":case"keyup":h=YS;break;case"focusin":x="focus",h=Ou;break;case"focusout":x="blur",h=Ou;break;case"beforeblur":case"afterblur":h=Ou;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=mm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=OS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=ZS;break;case dv:case fv:case pv:h=US;break;case hv:h=eE;break;case"scroll":h=LS;break;case"wheel":h=nE;break;case"copy":case"cut":case"paste":h=VS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=ym}var v=(t&4)!==0,b=!v&&e==="scroll",g=v?p!==null?p+"Capture":null:p;v=[];for(var m=u,y;m!==null;){y=m;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,g!==null&&(S=na(m,g),S!=null&&v.push(ua(m,S,y)))),b)break;m=m.return}0<v.length&&(p=new h(p,x,null,n,d),f.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==nd&&(x=n.relatedTarget||n.fromElement)&&(Br(x)||x[zn]))break e;if((h||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,h?(x=n.relatedTarget||n.toElement,h=u,x=x?Br(x):null,x!==null&&(b=oi(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(h=null,x=u),h!==x)){if(v=mm,S="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=ym,S="onPointerLeave",g="onPointerEnter",m="pointer"),b=h==null?p:xi(h),y=x==null?p:xi(x),p=new v(S,m+"leave",h,n,d),p.target=b,p.relatedTarget=y,S=null,Br(d)===u&&(v=new v(g,m+"enter",x,n,d),v.target=y,v.relatedTarget=b,S=v),b=S,h&&x)t:{for(v=h,g=x,m=0,y=v;y;y=di(y))m++;for(y=0,S=g;S;S=di(S))y++;for(;0<m-y;)v=di(v),m--;for(;0<y-m;)g=di(g),y--;for(;m--;){if(v===g||g!==null&&v===g.alternate)break t;v=di(v),g=di(g)}v=null}else v=null;h!==null&&Am(f,p,h,v,!1),x!==null&&b!==null&&Am(f,b,x,v,!0)}}e:{if(p=u?xi(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var C=uE;else if(bm(p))if(av)C=pE;else{C=dE;var w=cE}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=fE);if(C&&(C=C(e,u))){sv(f,C,n,d);break e}w&&w(e,p,u),e==="focusout"&&(w=p._wrapperState)&&w.controlled&&p.type==="number"&&Qc(p,"number",p.value)}switch(w=u?xi(u):window,e){case"focusin":(bm(w)||w.contentEditable==="true")&&(gi=w,ud=u,Bs=null);break;case"focusout":Bs=ud=gi=null;break;case"mousedown":cd=!0;break;case"contextmenu":case"mouseup":case"dragend":cd=!1,Cm(f,n,d);break;case"selectionchange":if(gE)break;case"keydown":case"keyup":Cm(f,n,d)}var I;if(Hf)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else mi?rv(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(nv&&n.locale!=="ko"&&(mi||N!=="onCompositionStart"?N==="onCompositionEnd"&&mi&&(I=tv()):(lr=d,Bf="value"in lr?lr.value:lr.textContent,mi=!0)),w=al(u,N),0<w.length&&(N=new gm(N,e,null,n,d),f.push({event:N,listeners:w}),I?N.data=I:(I=iv(n),I!==null&&(N.data=I)))),(I=iE?sE(e,n):aE(e,n))&&(u=al(u,"onBeforeInput"),0<u.length&&(d=new gm("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=I))}gv(f,t)})}function ua(e,t,n){return{instance:e,listener:t,currentTarget:n}}function al(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=na(e,n),s!=null&&r.unshift(ua(e,s,i)),s=na(e,t),s!=null&&r.push(ua(e,s,i))),e=e.return}return r}function di(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Am(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===r)break;o.tag===5&&u!==null&&(o=u,i?(l=na(n,s),l!=null&&a.unshift(ua(n,l,o))):i||(l=na(n,s),l!=null&&a.push(ua(n,l,o)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var bE=/\r\n?/g,wE=/\u0000|\uFFFD/g;function Im(e){return(typeof e=="string"?e:""+e).replace(bE,`
`).replace(wE,"")}function lo(e,t,n){if(t=Im(t),Im(e)!==t&&n)throw Error(O(425))}function ol(){}var dd=null,fd=null;function pd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hd=typeof setTimeout=="function"?setTimeout:void 0,kE=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,SE=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(e){return Nm.resolve(null).then(e).catch(EE)}:hd;function EE(e){setTimeout(function(){throw e})}function Wu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),sa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);sa(t)}function pr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var is=Math.random().toString(36).slice(2),hn="__reactFiber$"+is,ca="__reactProps$"+is,zn="__reactContainer$"+is,md="__reactEvents$"+is,CE="__reactListeners$"+is,TE="__reactHandles$"+is;function Br(e){var t=e[hn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zn]||n[hn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pm(e);e!==null;){if(n=e[hn])return n;e=Pm(e)}return t}e=n,n=e.parentNode}return null}function La(e){return e=e[hn]||e[zn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function Ql(e){return e[ca]||null}var gd=[],vi=-1;function Cr(e){return{current:e}}function Te(e){0>vi||(e.current=gd[vi],gd[vi]=null,vi--)}function Ee(e,t){vi++,gd[vi]=e.current,e.current=t}var wr={},lt=Cr(wr),vt=Cr(!1),Zr=wr;function $i(e,t){var n=e.type.contextTypes;if(!n)return wr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function bt(e){return e=e.childContextTypes,e!=null}function ll(){Te(vt),Te(lt)}function Rm(e,t,n){if(lt.current!==wr)throw Error(O(168));Ee(lt,t),Ee(vt,n)}function xv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(O(108,cS(e)||"Unknown",i));return je({},n,r)}function ul(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wr,Zr=lt.current,Ee(lt,e),Ee(vt,vt.current),!0}function jm(e,t,n){var r=e.stateNode;if(!r)throw Error(O(169));n?(e=xv(e,t,Zr),r.__reactInternalMemoizedMergedChildContext=e,Te(vt),Te(lt),Ee(lt,e)):Te(vt),Ee(vt,n)}var An=null,Zl=!1,Gu=!1;function vv(e){An===null?An=[e]:An.push(e)}function _E(e){Zl=!0,vv(e)}function Tr(){if(!Gu&&An!==null){Gu=!0;var e=0,t=xe;try{var n=An;for(xe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}An=null,Zl=!1}catch(i){throw An!==null&&(An=An.slice(e+1)),H0(Of,Tr),i}finally{xe=t,Gu=!1}}return null}var bi=[],wi=0,cl=null,dl=0,zt=[],Ut=0,Jr=null,In=1,Nn="";function jr(e,t){bi[wi++]=dl,bi[wi++]=cl,cl=e,dl=t}function bv(e,t,n){zt[Ut++]=In,zt[Ut++]=Nn,zt[Ut++]=Jr,Jr=e;var r=In;e=Nn;var i=32-tn(r)-1;r&=~(1<<i),n+=1;var s=32-tn(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,In=1<<32-tn(t)+i|n<<i|r,Nn=s+e}else In=1<<s|n<<i|r,Nn=e}function Gf(e){e.return!==null&&(jr(e,1),bv(e,1,0))}function qf(e){for(;e===cl;)cl=bi[--wi],bi[wi]=null,dl=bi[--wi],bi[wi]=null;for(;e===Jr;)Jr=zt[--Ut],zt[Ut]=null,Nn=zt[--Ut],zt[Ut]=null,In=zt[--Ut],zt[Ut]=null}var Nt=null,At=null,Ae=!1,Zt=null;function wv(e,t){var n=Vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Dm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Nt=e,At=pr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Nt=e,At=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jr!==null?{id:In,overflow:Nn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Nt=e,At=null,!0):!1;default:return!1}}function yd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xd(e){if(Ae){var t=At;if(t){var n=t;if(!Dm(e,t)){if(yd(e))throw Error(O(418));t=pr(n.nextSibling);var r=Nt;t&&Dm(e,t)?wv(r,n):(e.flags=e.flags&-4097|2,Ae=!1,Nt=e)}}else{if(yd(e))throw Error(O(418));e.flags=e.flags&-4097|2,Ae=!1,Nt=e}}}function Lm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Nt=e}function uo(e){if(e!==Nt)return!1;if(!Ae)return Lm(e),Ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!pd(e.type,e.memoizedProps)),t&&(t=At)){if(yd(e))throw kv(),Error(O(418));for(;t;)wv(e,t),t=pr(t.nextSibling)}if(Lm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){At=pr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}At=null}}else At=Nt?pr(e.stateNode.nextSibling):null;return!0}function kv(){for(var e=At;e;)e=pr(e.nextSibling)}function Hi(){At=Nt=null,Ae=!1}function Kf(e){Zt===null?Zt=[e]:Zt.push(e)}var AE=Gn.ReactCurrentBatchConfig;function ws(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var o=i.refs;a===null?delete o[s]:o[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function co(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Mm(e){var t=e._init;return t(e._payload)}function Sv(e){function t(g,m){if(e){var y=g.deletions;y===null?(g.deletions=[m],g.flags|=16):y.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=yr(g,m),g.index=0,g.sibling=null,g}function s(g,m,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<m?(g.flags|=2,m):y):(g.flags|=2,m)):(g.flags|=1048576,m)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function o(g,m,y,S){return m===null||m.tag!==6?(m=Ju(y,g.mode,S),m.return=g,m):(m=i(m,y),m.return=g,m)}function l(g,m,y,S){var C=y.type;return C===hi?d(g,m,y.props.children,S,y.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===er&&Mm(C)===m.type)?(S=i(m,y.props),S.ref=ws(g,m,y),S.return=g,S):(S=Uo(y.type,y.key,y.props,null,g.mode,S),S.ref=ws(g,m,y),S.return=g,S)}function u(g,m,y,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=ec(y,g.mode,S),m.return=g,m):(m=i(m,y.children||[]),m.return=g,m)}function d(g,m,y,S,C){return m===null||m.tag!==7?(m=qr(y,g.mode,S,C),m.return=g,m):(m=i(m,y),m.return=g,m)}function f(g,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ju(""+m,g.mode,y),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ja:return y=Uo(m.type,m.key,m.props,null,g.mode,y),y.ref=ws(g,null,m),y.return=g,y;case pi:return m=ec(m,g.mode,y),m.return=g,m;case er:var S=m._init;return f(g,S(m._payload),y)}if(Is(m)||gs(m))return m=qr(m,g.mode,y,null),m.return=g,m;co(g,m)}return null}function p(g,m,y,S){var C=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:o(g,m,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ja:return y.key===C?l(g,m,y,S):null;case pi:return y.key===C?u(g,m,y,S):null;case er:return C=y._init,p(g,m,C(y._payload),S)}if(Is(y)||gs(y))return C!==null?null:d(g,m,y,S,null);co(g,y)}return null}function h(g,m,y,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(y)||null,o(m,g,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ja:return g=g.get(S.key===null?y:S.key)||null,l(m,g,S,C);case pi:return g=g.get(S.key===null?y:S.key)||null,u(m,g,S,C);case er:var w=S._init;return h(g,m,y,w(S._payload),C)}if(Is(S)||gs(S))return g=g.get(y)||null,d(m,g,S,C,null);co(m,S)}return null}function x(g,m,y,S){for(var C=null,w=null,I=m,N=m=0,j=null;I!==null&&N<y.length;N++){I.index>N?(j=I,I=null):j=I.sibling;var T=p(g,I,y[N],S);if(T===null){I===null&&(I=j);break}e&&I&&T.alternate===null&&t(g,I),m=s(T,m,N),w===null?C=T:w.sibling=T,w=T,I=j}if(N===y.length)return n(g,I),Ae&&jr(g,N),C;if(I===null){for(;N<y.length;N++)I=f(g,y[N],S),I!==null&&(m=s(I,m,N),w===null?C=I:w.sibling=I,w=I);return Ae&&jr(g,N),C}for(I=r(g,I);N<y.length;N++)j=h(I,g,N,y[N],S),j!==null&&(e&&j.alternate!==null&&I.delete(j.key===null?N:j.key),m=s(j,m,N),w===null?C=j:w.sibling=j,w=j);return e&&I.forEach(function(R){return t(g,R)}),Ae&&jr(g,N),C}function v(g,m,y,S){var C=gs(y);if(typeof C!="function")throw Error(O(150));if(y=C.call(y),y==null)throw Error(O(151));for(var w=C=null,I=m,N=m=0,j=null,T=y.next();I!==null&&!T.done;N++,T=y.next()){I.index>N?(j=I,I=null):j=I.sibling;var R=p(g,I,T.value,S);if(R===null){I===null&&(I=j);break}e&&I&&R.alternate===null&&t(g,I),m=s(R,m,N),w===null?C=R:w.sibling=R,w=R,I=j}if(T.done)return n(g,I),Ae&&jr(g,N),C;if(I===null){for(;!T.done;N++,T=y.next())T=f(g,T.value,S),T!==null&&(m=s(T,m,N),w===null?C=T:w.sibling=T,w=T);return Ae&&jr(g,N),C}for(I=r(g,I);!T.done;N++,T=y.next())T=h(I,g,N,T.value,S),T!==null&&(e&&T.alternate!==null&&I.delete(T.key===null?N:T.key),m=s(T,m,N),w===null?C=T:w.sibling=T,w=T);return e&&I.forEach(function(z){return t(g,z)}),Ae&&jr(g,N),C}function b(g,m,y,S){if(typeof y=="object"&&y!==null&&y.type===hi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ja:e:{for(var C=y.key,w=m;w!==null;){if(w.key===C){if(C=y.type,C===hi){if(w.tag===7){n(g,w.sibling),m=i(w,y.props.children),m.return=g,g=m;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===er&&Mm(C)===w.type){n(g,w.sibling),m=i(w,y.props),m.ref=ws(g,w,y),m.return=g,g=m;break e}n(g,w);break}else t(g,w);w=w.sibling}y.type===hi?(m=qr(y.props.children,g.mode,S,y.key),m.return=g,g=m):(S=Uo(y.type,y.key,y.props,null,g.mode,S),S.ref=ws(g,m,y),S.return=g,g=S)}return a(g);case pi:e:{for(w=y.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(g,m.sibling),m=i(m,y.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=ec(y,g.mode,S),m.return=g,g=m}return a(g);case er:return w=y._init,b(g,m,w(y._payload),S)}if(Is(y))return x(g,m,y,S);if(gs(y))return v(g,m,y,S);co(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,y),m.return=g,g=m):(n(g,m),m=Ju(y,g.mode,S),m.return=g,g=m),a(g)):n(g,m)}return b}var Wi=Sv(!0),Ev=Sv(!1),fl=Cr(null),pl=null,ki=null,Yf=null;function Xf(){Yf=ki=pl=null}function Qf(e){var t=fl.current;Te(fl),e._currentValue=t}function vd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Li(e,t){pl=e,Yf=ki=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xt=!0),e.firstContext=null)}function Ht(e){var t=e._currentValue;if(Yf!==e)if(e={context:e,memoizedValue:t,next:null},ki===null){if(pl===null)throw Error(O(308));ki=e,pl.dependencies={lanes:0,firstContext:e}}else ki=ki.next=e;return t}var Vr=null;function Zf(e){Vr===null?Vr=[e]:Vr.push(e)}function Cv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Zf(t)):(n.next=i.next,i.next=n),t.interleaved=n,Un(e,r)}function Un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tr=!1;function Jf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ln(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Un(e,n)}return i=r.interleaved,i===null?(t.next=t,Zf(r)):(t.next=i.next,i.next=t),r.interleaved=t,Un(e,n)}function Do(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ff(e,n)}}function Om(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function hl(e,t,n,r){var i=e.updateQueue;tr=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;a=0,d=u=l=null,o=s;do{var p=o.lane,h=o.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:h,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=e,v=o;switch(p=t,h=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){f=x.call(h,f,p);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,p=typeof x=="function"?x.call(h,f,p):x,p==null)break e;f=je({},f,p);break e;case 2:tr=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[o]:p.push(o))}else h={eventTime:h,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=h,l=f):d=d.next=h,a|=p;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;p=o,o=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);ti|=a,e.lanes=a,e.memoizedState=f}}function Fm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var Ma={},yn=Cr(Ma),da=Cr(Ma),fa=Cr(Ma);function $r(e){if(e===Ma)throw Error(O(174));return e}function ep(e,t){switch(Ee(fa,t),Ee(da,e),Ee(yn,Ma),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Jc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Jc(t,e)}Te(yn),Ee(yn,t)}function Gi(){Te(yn),Te(da),Te(fa)}function _v(e){$r(fa.current);var t=$r(yn.current),n=Jc(t,e.type);t!==n&&(Ee(da,e),Ee(yn,n))}function tp(e){da.current===e&&(Te(yn),Te(da))}var Ne=Cr(0);function ml(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qu=[];function np(){for(var e=0;e<qu.length;e++)qu[e]._workInProgressVersionPrimary=null;qu.length=0}var Lo=Gn.ReactCurrentDispatcher,Ku=Gn.ReactCurrentBatchConfig,ei=0,Re=null,He=null,qe=null,gl=!1,Vs=!1,pa=0,IE=0;function tt(){throw Error(O(321))}function rp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ln(e[n],t[n]))return!1;return!0}function ip(e,t,n,r,i,s){if(ei=s,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lo.current=e===null||e.memoizedState===null?jE:DE,e=n(r,i),Vs){s=0;do{if(Vs=!1,pa=0,25<=s)throw Error(O(301));s+=1,qe=He=null,t.updateQueue=null,Lo.current=LE,e=n(r,i)}while(Vs)}if(Lo.current=yl,t=He!==null&&He.next!==null,ei=0,qe=He=Re=null,gl=!1,t)throw Error(O(300));return e}function sp(){var e=pa!==0;return pa=0,e}function fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Re.memoizedState=qe=e:qe=qe.next=e,qe}function Wt(){if(He===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=qe===null?Re.memoizedState:qe.next;if(t!==null)qe=t,He=e;else{if(e===null)throw Error(O(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},qe===null?Re.memoizedState=qe=e:qe=qe.next=e}return qe}function ha(e,t){return typeof t=="function"?t(e):t}function Yu(e){var t=Wt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=He,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var o=a=null,l=null,u=s;do{var d=u.lane;if((ei&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=f,a=r):l=l.next=f,Re.lanes|=d,ti|=d}u=u.next}while(u!==null&&u!==s);l===null?a=r:l.next=o,ln(r,t.memoizedState)||(xt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Re.lanes|=s,ti|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xu(e){var t=Wt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);ln(s,t.memoizedState)||(xt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Av(){}function Iv(e,t){var n=Re,r=Wt(),i=t(),s=!ln(r.memoizedState,i);if(s&&(r.memoizedState=i,xt=!0),r=r.queue,ap(Rv.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,ma(9,Pv.bind(null,n,r,i,t),void 0,null),Ke===null)throw Error(O(349));ei&30||Nv(n,t,i)}return i}function Nv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pv(e,t,n,r){t.value=n,t.getSnapshot=r,jv(t)&&Dv(e)}function Rv(e,t,n){return n(function(){jv(t)&&Dv(e)})}function jv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ln(e,n)}catch{return!0}}function Dv(e){var t=Un(e,1);t!==null&&nn(t,e,1,-1)}function zm(e){var t=fn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:e},t.queue=e,e=e.dispatch=RE.bind(null,Re,e),[t.memoizedState,e]}function ma(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Lv(){return Wt().memoizedState}function Mo(e,t,n,r){var i=fn();Re.flags|=e,i.memoizedState=ma(1|t,n,void 0,r===void 0?null:r)}function Jl(e,t,n,r){var i=Wt();r=r===void 0?null:r;var s=void 0;if(He!==null){var a=He.memoizedState;if(s=a.destroy,r!==null&&rp(r,a.deps)){i.memoizedState=ma(t,n,s,r);return}}Re.flags|=e,i.memoizedState=ma(1|t,n,s,r)}function Um(e,t){return Mo(8390656,8,e,t)}function ap(e,t){return Jl(2048,8,e,t)}function Mv(e,t){return Jl(4,2,e,t)}function Ov(e,t){return Jl(4,4,e,t)}function Fv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zv(e,t,n){return n=n!=null?n.concat([e]):null,Jl(4,4,Fv.bind(null,t,e),n)}function op(){}function Uv(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bv(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vv(e,t,n){return ei&21?(ln(n,t)||(n=q0(),Re.lanes|=n,ti|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xt=!0),e.memoizedState=n)}function NE(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var r=Ku.transition;Ku.transition={};try{e(!1),t()}finally{xe=n,Ku.transition=r}}function $v(){return Wt().memoizedState}function PE(e,t,n){var r=gr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hv(e))Wv(t,n);else if(n=Cv(e,t,n,r),n!==null){var i=ft();nn(n,e,r,i),Gv(n,t,r)}}function RE(e,t,n){var r=gr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hv(e))Wv(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,o=s(a,n);if(i.hasEagerState=!0,i.eagerState=o,ln(o,a)){var l=t.interleaved;l===null?(i.next=i,Zf(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Cv(e,t,i,r),n!==null&&(i=ft(),nn(n,e,r,i),Gv(n,t,r))}}function Hv(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function Wv(e,t){Vs=gl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ff(e,n)}}var yl={readContext:Ht,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},jE={readContext:Ht,useCallback:function(e,t){return fn().memoizedState=[e,t===void 0?null:t],e},useContext:Ht,useEffect:Um,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Mo(4194308,4,Fv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mo(4,2,e,t)},useMemo:function(e,t){var n=fn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=fn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=PE.bind(null,Re,e),[r.memoizedState,e]},useRef:function(e){var t=fn();return e={current:e},t.memoizedState=e},useState:zm,useDebugValue:op,useDeferredValue:function(e){return fn().memoizedState=e},useTransition:function(){var e=zm(!1),t=e[0];return e=NE.bind(null,e[1]),fn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Re,i=fn();if(Ae){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),Ke===null)throw Error(O(349));ei&30||Nv(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Um(Rv.bind(null,r,s,e),[e]),r.flags|=2048,ma(9,Pv.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=fn(),t=Ke.identifierPrefix;if(Ae){var n=Nn,r=In;n=(r&~(1<<32-tn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=pa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=IE++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},DE={readContext:Ht,useCallback:Uv,useContext:Ht,useEffect:ap,useImperativeHandle:zv,useInsertionEffect:Mv,useLayoutEffect:Ov,useMemo:Bv,useReducer:Yu,useRef:Lv,useState:function(){return Yu(ha)},useDebugValue:op,useDeferredValue:function(e){var t=Wt();return Vv(t,He.memoizedState,e)},useTransition:function(){var e=Yu(ha)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:Av,useSyncExternalStore:Iv,useId:$v,unstable_isNewReconciler:!1},LE={readContext:Ht,useCallback:Uv,useContext:Ht,useEffect:ap,useImperativeHandle:zv,useInsertionEffect:Mv,useLayoutEffect:Ov,useMemo:Bv,useReducer:Xu,useRef:Lv,useState:function(){return Xu(ha)},useDebugValue:op,useDeferredValue:function(e){var t=Wt();return He===null?t.memoizedState=e:Vv(t,He.memoizedState,e)},useTransition:function(){var e=Xu(ha)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:Av,useSyncExternalStore:Iv,useId:$v,unstable_isNewReconciler:!1};function Xt(e,t){if(e&&e.defaultProps){t=je({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function bd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:je({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var eu={isMounted:function(e){return(e=e._reactInternals)?oi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ft(),i=gr(e),s=Ln(r,i);s.payload=t,n!=null&&(s.callback=n),t=hr(e,s,i),t!==null&&(nn(t,e,i,r),Do(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ft(),i=gr(e),s=Ln(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=hr(e,s,i),t!==null&&(nn(t,e,i,r),Do(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ft(),r=gr(e),i=Ln(n,r);i.tag=2,t!=null&&(i.callback=t),t=hr(e,i,r),t!==null&&(nn(t,e,r,n),Do(t,e,r))}};function Bm(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!oa(n,r)||!oa(i,s):!0}function qv(e,t,n){var r=!1,i=wr,s=t.contextType;return typeof s=="object"&&s!==null?s=Ht(s):(i=bt(t)?Zr:lt.current,r=t.contextTypes,s=(r=r!=null)?$i(e,i):wr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=eu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Vm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&eu.enqueueReplaceState(t,t.state,null)}function wd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Jf(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ht(s):(s=bt(t)?Zr:lt.current,i.context=$i(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(bd(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&eu.enqueueReplaceState(i,i.state,null),hl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function qi(e,t){try{var n="",r=t;do n+=uS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Qu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function kd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ME=typeof WeakMap=="function"?WeakMap:Map;function Kv(e,t,n){n=Ln(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vl||(vl=!0,Rd=r),kd(e,t)},n}function Yv(e,t,n){n=Ln(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){kd(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){kd(e,t),typeof r!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function $m(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ME;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=XE.bind(null,e,t,n),t.then(e,e))}function Hm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wm(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ln(-1,1),t.tag=2,hr(n,t,1))),n.lanes|=1),e)}var OE=Gn.ReactCurrentOwner,xt=!1;function ct(e,t,n,r){t.child=e===null?Ev(t,null,n,r):Wi(t,e.child,n,r)}function Gm(e,t,n,r,i){n=n.render;var s=t.ref;return Li(t,i),r=ip(e,t,n,r,s,i),n=sp(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bn(e,t,i)):(Ae&&n&&Gf(t),t.flags|=1,ct(e,t,r,i),t.child)}function qm(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!mp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Xv(e,t,s,r,i)):(e=Uo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:oa,n(a,r)&&e.ref===t.ref)return Bn(e,t,i)}return t.flags|=1,e=yr(s,r),e.ref=t.ref,e.return=t,t.child=e}function Xv(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(oa(s,r)&&e.ref===t.ref)if(xt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(xt=!0);else return t.lanes=e.lanes,Bn(e,t,i)}return Sd(e,t,n,r,i)}function Qv(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Ei,_t),_t|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(Ei,_t),_t|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ee(Ei,_t),_t|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Ee(Ei,_t),_t|=r;return ct(e,t,i,n),t.child}function Zv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Sd(e,t,n,r,i){var s=bt(n)?Zr:lt.current;return s=$i(t,s),Li(t,i),n=ip(e,t,n,r,s,i),r=sp(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bn(e,t,i)):(Ae&&r&&Gf(t),t.flags|=1,ct(e,t,n,i),t.child)}function Km(e,t,n,r,i){if(bt(n)){var s=!0;ul(t)}else s=!1;if(Li(t,i),t.stateNode===null)Oo(e,t),qv(t,n,r),wd(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,o=t.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ht(u):(u=bt(n)?Zr:lt.current,u=$i(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||l!==u)&&Vm(t,a,r,u),tr=!1;var p=t.memoizedState;a.state=p,hl(t,r,a,i),l=t.memoizedState,o!==r||p!==l||vt.current||tr?(typeof d=="function"&&(bd(t,n,d,r),l=t.memoizedState),(o=tr||Bm(t,n,o,r,p,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=o):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Tv(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:Xt(t.type,o),a.props=u,f=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ht(l):(l=bt(n)?Zr:lt.current,l=$i(t,l));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||p!==l)&&Vm(t,a,r,l),tr=!1,p=t.memoizedState,a.state=p,hl(t,r,a,i);var x=t.memoizedState;o!==f||p!==x||vt.current||tr?(typeof h=="function"&&(bd(t,n,h,r),x=t.memoizedState),(u=tr||Bm(t,n,u,r,p,x,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ed(e,t,n,r,s,i)}function Ed(e,t,n,r,i,s){Zv(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&jm(t,n,!1),Bn(e,t,s);r=t.stateNode,OE.current=t;var o=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Wi(t,e.child,null,s),t.child=Wi(t,null,o,s)):ct(e,t,o,s),t.memoizedState=r.state,i&&jm(t,n,!0),t.child}function Jv(e){var t=e.stateNode;t.pendingContext?Rm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rm(e,t.context,!1),ep(e,t.containerInfo)}function Ym(e,t,n,r,i){return Hi(),Kf(i),t.flags|=256,ct(e,t,n,r),t.child}var Cd={dehydrated:null,treeContext:null,retryLane:0};function Td(e){return{baseLanes:e,cachePool:null,transitions:null}}function eb(e,t,n){var r=t.pendingProps,i=Ne.current,s=!1,a=(t.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ee(Ne,i&1),e===null)return xd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ru(a,r,0,null),e=qr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Td(n),t.memoizedState=Cd,e):lp(t,a));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return FE(e,t,a,r,o,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,o=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=yr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?s=yr(o,s):(s=qr(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?Td(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=Cd,r}return s=e.child,e=s.sibling,r=yr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function lp(e,t){return t=ru({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fo(e,t,n,r){return r!==null&&Kf(r),Wi(t,e.child,null,n),e=lp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function FE(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=Qu(Error(O(422))),fo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=ru({mode:"visible",children:r.children},i,0,null),s=qr(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Wi(t,e.child,null,a),t.child.memoizedState=Td(a),t.memoizedState=Cd,s);if(!(t.mode&1))return fo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,s=Error(O(419)),r=Qu(s,r,void 0),fo(e,t,a,r)}if(o=(a&e.childLanes)!==0,xt||o){if(r=Ke,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Un(e,i),nn(r,e,i,-1))}return hp(),r=Qu(Error(O(421))),fo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=QE.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,At=pr(i.nextSibling),Nt=t,Ae=!0,Zt=null,e!==null&&(zt[Ut++]=In,zt[Ut++]=Nn,zt[Ut++]=Jr,In=e.id,Nn=e.overflow,Jr=t),t=lp(t,r.children),t.flags|=4096,t)}function Xm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),vd(e.return,t,n)}function Zu(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function tb(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ct(e,t,r.children,n),r=Ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xm(e,n,t);else if(e.tag===19)Xm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ee(Ne,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ml(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Zu(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ml(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Zu(t,!0,n,null,s);break;case"together":Zu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ti|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=yr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zE(e,t,n){switch(t.tag){case 3:Jv(t),Hi();break;case 5:_v(t);break;case 1:bt(t.type)&&ul(t);break;case 4:ep(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ee(fl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Ne,Ne.current&1),t.flags|=128,null):n&t.child.childLanes?eb(e,t,n):(Ee(Ne,Ne.current&1),e=Bn(e,t,n),e!==null?e.sibling:null);Ee(Ne,Ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return tb(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(Ne,Ne.current),r)break;return null;case 22:case 23:return t.lanes=0,Qv(e,t,n)}return Bn(e,t,n)}var nb,_d,rb,ib;nb=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_d=function(){};rb=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,$r(yn.current);var s=null;switch(n){case"input":i=Yc(e,i),r=Yc(e,r),s=[];break;case"select":i=je({},i,{value:void 0}),r=je({},r,{value:void 0}),s=[];break;case"textarea":i=Zc(e,i),r=Zc(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ol)}ed(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ea.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(o=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ea.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ce("scroll",e),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};ib=function(e,t,n,r){n!==r&&(t.flags|=4)};function ks(e,t){if(!Ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function UE(e,t,n){var r=t.pendingProps;switch(qf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return bt(t.type)&&ll(),nt(t),null;case 3:return r=t.stateNode,Gi(),Te(vt),Te(lt),np(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(uo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Zt!==null&&(Ld(Zt),Zt=null))),_d(e,t),nt(t),null;case 5:tp(t);var i=$r(fa.current);if(n=t.type,e!==null&&t.stateNode!=null)rb(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(O(166));return nt(t),null}if(e=$r(yn.current),uo(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[hn]=t,r[ca]=s,e=(t.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(i=0;i<Ps.length;i++)Ce(Ps[i],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":sm(r,s),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ce("invalid",r);break;case"textarea":om(r,s),Ce("invalid",r)}ed(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?r.textContent!==o&&(s.suppressHydrationWarning!==!0&&lo(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&lo(r.textContent,o,e),i=["children",""+o]):ea.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&Ce("scroll",r)}switch(n){case"input":eo(r),am(r,s,!0);break;case"textarea":eo(r),lm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ol)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=R0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[hn]=t,e[ca]=r,nb(e,t,!1,!1),t.stateNode=e;e:{switch(a=td(n,r),n){case"dialog":Ce("cancel",e),Ce("close",e),i=r;break;case"iframe":case"object":case"embed":Ce("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ps.length;i++)Ce(Ps[i],e);i=r;break;case"source":Ce("error",e),i=r;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),i=r;break;case"details":Ce("toggle",e),i=r;break;case"input":sm(e,r),i=Yc(e,r),Ce("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=je({},r,{value:void 0}),Ce("invalid",e);break;case"textarea":om(e,r),i=Zc(e,r),Ce("invalid",e);break;default:i=r}ed(n,i),o=i;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?L0(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&j0(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ta(e,l):typeof l=="number"&&ta(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ea.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ce("scroll",e):l!=null&&Rf(e,s,l,a))}switch(n){case"input":eo(e),am(e,r,!1);break;case"textarea":eo(e),lm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+br(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Pi(e,!!r.multiple,s,!1):r.defaultValue!=null&&Pi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ol)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)ib(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(O(166));if(n=$r(fa.current),$r(yn.current),uo(t)){if(r=t.stateNode,n=t.memoizedProps,r[hn]=t,(s=r.nodeValue!==n)&&(e=Nt,e!==null))switch(e.tag){case 3:lo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&lo(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[hn]=t,t.stateNode=r}return nt(t),null;case 13:if(Te(Ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ae&&At!==null&&t.mode&1&&!(t.flags&128))kv(),Hi(),t.flags|=98560,s=!1;else if(s=uo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(O(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(O(317));s[hn]=t}else Hi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;nt(t),s=!1}else Zt!==null&&(Ld(Zt),Zt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ne.current&1?We===0&&(We=3):hp())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return Gi(),_d(e,t),e===null&&la(t.stateNode.containerInfo),nt(t),null;case 10:return Qf(t.type._context),nt(t),null;case 17:return bt(t.type)&&ll(),nt(t),null;case 19:if(Te(Ne),s=t.memoizedState,s===null)return nt(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)ks(s,!1);else{if(We!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ml(e),a!==null){for(t.flags|=128,ks(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ee(Ne,Ne.current&1|2),t.child}e=e.sibling}s.tail!==null&&Fe()>Ki&&(t.flags|=128,r=!0,ks(s,!1),t.lanes=4194304)}else{if(!r)if(e=ml(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Ae)return nt(t),null}else 2*Fe()-s.renderingStartTime>Ki&&n!==1073741824&&(t.flags|=128,r=!0,ks(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Fe(),t.sibling=null,n=Ne.current,Ee(Ne,r?n&1|2:n&1),t):(nt(t),null);case 22:case 23:return pp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_t&1073741824&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function BE(e,t){switch(qf(t),t.tag){case 1:return bt(t.type)&&ll(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gi(),Te(vt),Te(lt),np(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return tp(t),null;case 13:if(Te(Ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));Hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Te(Ne),null;case 4:return Gi(),null;case 10:return Qf(t.type._context),null;case 22:case 23:return pp(),null;case 24:return null;default:return null}}var po=!1,it=!1,VE=typeof WeakSet=="function"?WeakSet:Set,W=null;function Si(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Me(e,t,r)}else n.current=null}function Ad(e,t,n){try{n()}catch(r){Me(e,t,r)}}var Qm=!1;function $E(e,t){if(dd=il,e=uv(),Wf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(o=a+i),f!==s||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===i&&(o=a),p===s&&++d===r&&(l=a),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fd={focusedElem:e,selectionRange:n},il=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,b=x.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:Xt(t.type,v),b);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(S){Me(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return x=Qm,Qm=!1,x}function $s(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ad(t,n,s)}i=i.next}while(i!==r)}}function tu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Id(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function sb(e){var t=e.alternate;t!==null&&(e.alternate=null,sb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[hn],delete t[ca],delete t[md],delete t[CE],delete t[TE])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ab(e){return e.tag===5||e.tag===3||e.tag===4}function Zm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ab(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ol));else if(r!==4&&(e=e.child,e!==null))for(Nd(e,t,n),e=e.sibling;e!==null;)Nd(e,t,n),e=e.sibling}function Pd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pd(e,t,n),e=e.sibling;e!==null;)Pd(e,t,n),e=e.sibling}var Xe=null,Qt=!1;function Kn(e,t,n){for(n=n.child;n!==null;)ob(e,t,n),n=n.sibling}function ob(e,t,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(ql,n)}catch{}switch(n.tag){case 5:it||Si(n,t);case 6:var r=Xe,i=Qt;Xe=null,Kn(e,t,n),Xe=r,Qt=i,Xe!==null&&(Qt?(e=Xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(Qt?(e=Xe,n=n.stateNode,e.nodeType===8?Wu(e.parentNode,n):e.nodeType===1&&Wu(e,n),sa(e)):Wu(Xe,n.stateNode));break;case 4:r=Xe,i=Qt,Xe=n.stateNode.containerInfo,Qt=!0,Kn(e,t,n),Xe=r,Qt=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Ad(n,t,a),i=i.next}while(i!==r)}Kn(e,t,n);break;case 1:if(!it&&(Si(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){Me(n,t,o)}Kn(e,t,n);break;case 21:Kn(e,t,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,Kn(e,t,n),it=r):Kn(e,t,n);break;default:Kn(e,t,n)}}function Jm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new VE),t.forEach(function(r){var i=ZE.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,o=a;e:for(;o!==null;){switch(o.tag){case 5:Xe=o.stateNode,Qt=!1;break e;case 3:Xe=o.stateNode.containerInfo,Qt=!0;break e;case 4:Xe=o.stateNode.containerInfo,Qt=!0;break e}o=o.return}if(Xe===null)throw Error(O(160));ob(s,a,i),Xe=null,Qt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Me(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lb(t,e),t=t.sibling}function lb(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kt(t,e),dn(e),r&4){try{$s(3,e,e.return),tu(3,e)}catch(v){Me(e,e.return,v)}try{$s(5,e,e.return)}catch(v){Me(e,e.return,v)}}break;case 1:Kt(t,e),dn(e),r&512&&n!==null&&Si(n,n.return);break;case 5:if(Kt(t,e),dn(e),r&512&&n!==null&&Si(n,n.return),e.flags&32){var i=e.stateNode;try{ta(i,"")}catch(v){Me(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,o=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&N0(i,s),td(o,a);var u=td(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?L0(i,f):d==="dangerouslySetInnerHTML"?j0(i,f):d==="children"?ta(i,f):Rf(i,d,f,u)}switch(o){case"input":Xc(i,s);break;case"textarea":P0(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Pi(i,!!s.multiple,h,!1):p!==!!s.multiple&&(s.defaultValue!=null?Pi(i,!!s.multiple,s.defaultValue,!0):Pi(i,!!s.multiple,s.multiple?[]:"",!1))}i[ca]=s}catch(v){Me(e,e.return,v)}}break;case 6:if(Kt(t,e),dn(e),r&4){if(e.stateNode===null)throw Error(O(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){Me(e,e.return,v)}}break;case 3:if(Kt(t,e),dn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{sa(t.containerInfo)}catch(v){Me(e,e.return,v)}break;case 4:Kt(t,e),dn(e);break;case 13:Kt(t,e),dn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(dp=Fe())),r&4&&Jm(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(it=(u=it)||d,Kt(t,e),it=u):Kt(t,e),dn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(W=e,d=e.child;d!==null;){for(f=W=d;W!==null;){switch(p=W,h=p.child,p.tag){case 0:case 11:case 14:case 15:$s(4,p,p.return);break;case 1:Si(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){Me(r,n,v)}}break;case 5:Si(p,p.return);break;case 22:if(p.memoizedState!==null){tg(f);continue}}h!==null?(h.return=p,W=h):tg(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=D0("display",a))}catch(v){Me(e,e.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){Me(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Kt(t,e),dn(e),r&4&&Jm(e);break;case 21:break;default:Kt(t,e),dn(e)}}function dn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ab(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ta(i,""),r.flags&=-33);var s=Zm(e);Pd(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,o=Zm(e);Nd(e,o,a);break;default:throw Error(O(161))}}catch(l){Me(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function HE(e,t,n){W=e,ub(e)}function ub(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||po;if(!a){var o=i.alternate,l=o!==null&&o.memoizedState!==null||it;o=po;var u=it;if(po=a,(it=l)&&!u)for(W=i;W!==null;)a=W,l=a.child,a.tag===22&&a.memoizedState!==null?ng(i):l!==null?(l.return=a,W=l):ng(i);for(;s!==null;)W=s,ub(s),s=s.sibling;W=i,po=o,it=u}eg(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):eg(e)}}function eg(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||tu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Xt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Fm(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fm(t,a,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&sa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}it||t.flags&512&&Id(t)}catch(p){Me(t,t.return,p)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function tg(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function ng(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{tu(4,t)}catch(l){Me(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Me(t,i,l)}}var s=t.return;try{Id(t)}catch(l){Me(t,s,l)}break;case 5:var a=t.return;try{Id(t)}catch(l){Me(t,a,l)}}}catch(l){Me(t,t.return,l)}if(t===e){W=null;break}var o=t.sibling;if(o!==null){o.return=t.return,W=o;break}W=t.return}}var WE=Math.ceil,xl=Gn.ReactCurrentDispatcher,up=Gn.ReactCurrentOwner,$t=Gn.ReactCurrentBatchConfig,he=0,Ke=null,Ve=null,Ze=0,_t=0,Ei=Cr(0),We=0,ga=null,ti=0,nu=0,cp=0,Hs=null,yt=null,dp=0,Ki=1/0,_n=null,vl=!1,Rd=null,mr=null,ho=!1,ur=null,bl=0,Ws=0,jd=null,Fo=-1,zo=0;function ft(){return he&6?Fe():Fo!==-1?Fo:Fo=Fe()}function gr(e){return e.mode&1?he&2&&Ze!==0?Ze&-Ze:AE.transition!==null?(zo===0&&(zo=q0()),zo):(e=xe,e!==0||(e=window.event,e=e===void 0?16:ev(e.type)),e):1}function nn(e,t,n,r){if(50<Ws)throw Ws=0,jd=null,Error(O(185));ja(e,n,r),(!(he&2)||e!==Ke)&&(e===Ke&&(!(he&2)&&(nu|=n),We===4&&ir(e,Ze)),wt(e,r),n===1&&he===0&&!(t.mode&1)&&(Ki=Fe()+500,Zl&&Tr()))}function wt(e,t){var n=e.callbackNode;AS(e,t);var r=rl(e,e===Ke?Ze:0);if(r===0)n!==null&&dm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&dm(n),t===1)e.tag===0?_E(rg.bind(null,e)):vv(rg.bind(null,e)),SE(function(){!(he&6)&&Tr()}),n=null;else{switch(K0(r)){case 1:n=Of;break;case 4:n=W0;break;case 16:n=nl;break;case 536870912:n=G0;break;default:n=nl}n=yb(n,cb.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cb(e,t){if(Fo=-1,zo=0,he&6)throw Error(O(327));var n=e.callbackNode;if(Mi()&&e.callbackNode!==n)return null;var r=rl(e,e===Ke?Ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wl(e,r);else{t=r;var i=he;he|=2;var s=fb();(Ke!==e||Ze!==t)&&(_n=null,Ki=Fe()+500,Gr(e,t));do try{KE();break}catch(o){db(e,o)}while(!0);Xf(),xl.current=s,he=i,Ve!==null?t=0:(Ke=null,Ze=0,t=We)}if(t!==0){if(t===2&&(i=ad(e),i!==0&&(r=i,t=Dd(e,i))),t===1)throw n=ga,Gr(e,0),ir(e,r),wt(e,Fe()),n;if(t===6)ir(e,r);else{if(i=e.current.alternate,!(r&30)&&!GE(i)&&(t=wl(e,r),t===2&&(s=ad(e),s!==0&&(r=s,t=Dd(e,s))),t===1))throw n=ga,Gr(e,0),ir(e,r),wt(e,Fe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(O(345));case 2:Dr(e,yt,_n);break;case 3:if(ir(e,r),(r&130023424)===r&&(t=dp+500-Fe(),10<t)){if(rl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ft(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=hd(Dr.bind(null,e,yt,_n),t);break}Dr(e,yt,_n);break;case 4:if(ir(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-tn(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*WE(r/1960))-r,10<r){e.timeoutHandle=hd(Dr.bind(null,e,yt,_n),r);break}Dr(e,yt,_n);break;case 5:Dr(e,yt,_n);break;default:throw Error(O(329))}}}return wt(e,Fe()),e.callbackNode===n?cb.bind(null,e):null}function Dd(e,t){var n=Hs;return e.current.memoizedState.isDehydrated&&(Gr(e,t).flags|=256),e=wl(e,t),e!==2&&(t=yt,yt=n,t!==null&&Ld(t)),e}function Ld(e){yt===null?yt=e:yt.push.apply(yt,e)}function GE(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ln(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ir(e,t){for(t&=~cp,t&=~nu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tn(t),r=1<<n;e[n]=-1,t&=~r}}function rg(e){if(he&6)throw Error(O(327));Mi();var t=rl(e,0);if(!(t&1))return wt(e,Fe()),null;var n=wl(e,t);if(e.tag!==0&&n===2){var r=ad(e);r!==0&&(t=r,n=Dd(e,r))}if(n===1)throw n=ga,Gr(e,0),ir(e,t),wt(e,Fe()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dr(e,yt,_n),wt(e,Fe()),null}function fp(e,t){var n=he;he|=1;try{return e(t)}finally{he=n,he===0&&(Ki=Fe()+500,Zl&&Tr())}}function ni(e){ur!==null&&ur.tag===0&&!(he&6)&&Mi();var t=he;he|=1;var n=$t.transition,r=xe;try{if($t.transition=null,xe=1,e)return e()}finally{xe=r,$t.transition=n,he=t,!(he&6)&&Tr()}}function pp(){_t=Ei.current,Te(Ei)}function Gr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,kE(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(qf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ll();break;case 3:Gi(),Te(vt),Te(lt),np();break;case 5:tp(r);break;case 4:Gi();break;case 13:Te(Ne);break;case 19:Te(Ne);break;case 10:Qf(r.type._context);break;case 22:case 23:pp()}n=n.return}if(Ke=e,Ve=e=yr(e.current,null),Ze=_t=t,We=0,ga=null,cp=nu=ti=0,yt=Hs=null,Vr!==null){for(t=0;t<Vr.length;t++)if(n=Vr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}Vr=null}return e}function db(e,t){do{var n=Ve;try{if(Xf(),Lo.current=yl,gl){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gl=!1}if(ei=0,qe=He=Re=null,Vs=!1,pa=0,up.current=null,n===null||n.return===null){We=1,ga=t,Ve=null;break}e:{var s=e,a=n.return,o=n,l=t;if(t=Ze,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=Hm(a);if(h!==null){h.flags&=-257,Wm(h,a,o,s,t),h.mode&1&&$m(s,u,t),t=h,l=u;var x=t.updateQueue;if(x===null){var v=new Set;v.add(l),t.updateQueue=v}else x.add(l);break e}else{if(!(t&1)){$m(s,u,t),hp();break e}l=Error(O(426))}}else if(Ae&&o.mode&1){var b=Hm(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Wm(b,a,o,s,t),Kf(qi(l,o));break e}}s=l=qi(l,o),We!==4&&(We=2),Hs===null?Hs=[s]:Hs.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=Kv(s,l,t);Om(s,g);break e;case 1:o=l;var m=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(mr===null||!mr.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var S=Yv(s,o,t);Om(s,S);break e}}s=s.return}while(s!==null)}hb(n)}catch(C){t=C,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function fb(){var e=xl.current;return xl.current=yl,e===null?yl:e}function hp(){(We===0||We===3||We===2)&&(We=4),Ke===null||!(ti&268435455)&&!(nu&268435455)||ir(Ke,Ze)}function wl(e,t){var n=he;he|=2;var r=fb();(Ke!==e||Ze!==t)&&(_n=null,Gr(e,t));do try{qE();break}catch(i){db(e,i)}while(!0);if(Xf(),he=n,xl.current=r,Ve!==null)throw Error(O(261));return Ke=null,Ze=0,We}function qE(){for(;Ve!==null;)pb(Ve)}function KE(){for(;Ve!==null&&!vS();)pb(Ve)}function pb(e){var t=gb(e.alternate,e,_t);e.memoizedProps=e.pendingProps,t===null?hb(e):Ve=t,up.current=null}function hb(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=BE(n,t),n!==null){n.flags&=32767,Ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{We=6,Ve=null;return}}else if(n=UE(n,t,_t),n!==null){Ve=n;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);We===0&&(We=5)}function Dr(e,t,n){var r=xe,i=$t.transition;try{$t.transition=null,xe=1,YE(e,t,n,r)}finally{$t.transition=i,xe=r}return null}function YE(e,t,n,r){do Mi();while(ur!==null);if(he&6)throw Error(O(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(IS(e,s),e===Ke&&(Ve=Ke=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ho||(ho=!0,yb(nl,function(){return Mi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$t.transition,$t.transition=null;var a=xe;xe=1;var o=he;he|=4,up.current=null,$E(e,n),lb(n,e),mE(fd),il=!!dd,fd=dd=null,e.current=n,HE(n),bS(),he=o,xe=a,$t.transition=s}else e.current=n;if(ho&&(ho=!1,ur=e,bl=i),s=e.pendingLanes,s===0&&(mr=null),SS(n.stateNode),wt(e,Fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vl)throw vl=!1,e=Rd,Rd=null,e;return bl&1&&e.tag!==0&&Mi(),s=e.pendingLanes,s&1?e===jd?Ws++:(Ws=0,jd=e):Ws=0,Tr(),null}function Mi(){if(ur!==null){var e=K0(bl),t=$t.transition,n=xe;try{if($t.transition=null,xe=16>e?16:e,ur===null)var r=!1;else{if(e=ur,ur=null,bl=0,he&6)throw Error(O(331));var i=he;for(he|=4,W=e.current;W!==null;){var s=W,a=s.child;if(W.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(W=u;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:$s(8,d,s)}var f=d.child;if(f!==null)f.return=d,W=f;else for(;W!==null;){d=W;var p=d.sibling,h=d.return;if(sb(d),d===u){W=null;break}if(p!==null){p.return=h,W=p;break}W=h}}}var x=s.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}W=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,W=a;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$s(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,W=g;break e}W=s.return}}var m=e.current;for(W=m;W!==null;){a=W;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,W=y;else e:for(a=m;W!==null;){if(o=W,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:tu(9,o)}}catch(C){Me(o,o.return,C)}if(o===a){W=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,W=S;break e}W=o.return}}if(he=i,Tr(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(ql,e)}catch{}r=!0}return r}finally{xe=n,$t.transition=t}}return!1}function ig(e,t,n){t=qi(n,t),t=Kv(e,t,1),e=hr(e,t,1),t=ft(),e!==null&&(ja(e,1,t),wt(e,t))}function Me(e,t,n){if(e.tag===3)ig(e,e,n);else for(;t!==null;){if(t.tag===3){ig(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mr===null||!mr.has(r))){e=qi(n,e),e=Yv(t,e,1),t=hr(t,e,1),e=ft(),t!==null&&(ja(t,1,e),wt(t,e));break}}t=t.return}}function XE(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&n,Ke===e&&(Ze&n)===n&&(We===4||We===3&&(Ze&130023424)===Ze&&500>Fe()-dp?Gr(e,0):cp|=n),wt(e,t)}function mb(e,t){t===0&&(e.mode&1?(t=ro,ro<<=1,!(ro&130023424)&&(ro=4194304)):t=1);var n=ft();e=Un(e,t),e!==null&&(ja(e,t,n),wt(e,n))}function QE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mb(e,n)}function ZE(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(t),mb(e,n)}var gb;gb=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||vt.current)xt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xt=!1,zE(e,t,n);xt=!!(e.flags&131072)}else xt=!1,Ae&&t.flags&1048576&&bv(t,dl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Oo(e,t),e=t.pendingProps;var i=$i(t,lt.current);Li(t,n),i=ip(null,t,r,e,i,n);var s=sp();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,bt(r)?(s=!0,ul(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jf(t),i.updater=eu,t.stateNode=i,i._reactInternals=t,wd(t,r,e,n),t=Ed(null,t,r,!0,s,n)):(t.tag=0,Ae&&s&&Gf(t),ct(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Oo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=eC(r),e=Xt(r,e),i){case 0:t=Sd(null,t,r,e,n);break e;case 1:t=Km(null,t,r,e,n);break e;case 11:t=Gm(null,t,r,e,n);break e;case 14:t=qm(null,t,r,Xt(r.type,e),n);break e}throw Error(O(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xt(r,i),Sd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xt(r,i),Km(e,t,r,i,n);case 3:e:{if(Jv(t),e===null)throw Error(O(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Tv(e,t),hl(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=qi(Error(O(423)),t),t=Ym(e,t,r,n,i);break e}else if(r!==i){i=qi(Error(O(424)),t),t=Ym(e,t,r,n,i);break e}else for(At=pr(t.stateNode.containerInfo.firstChild),Nt=t,Ae=!0,Zt=null,n=Ev(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hi(),r===i){t=Bn(e,t,n);break e}ct(e,t,r,n)}t=t.child}return t;case 5:return _v(t),e===null&&xd(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,pd(r,i)?a=null:s!==null&&pd(r,s)&&(t.flags|=32),Zv(e,t),ct(e,t,a,n),t.child;case 6:return e===null&&xd(t),null;case 13:return eb(e,t,n);case 4:return ep(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wi(t,null,r,n):ct(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xt(r,i),Gm(e,t,r,i,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Ee(fl,r._currentValue),r._currentValue=a,s!==null)if(ln(s.value,a)){if(s.children===i.children&&!vt.current){t=Bn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ln(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),vd(s.return,n,t),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(O(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),vd(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ct(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Li(t,n),i=Ht(i),r=r(i),t.flags|=1,ct(e,t,r,n),t.child;case 14:return r=t.type,i=Xt(r,t.pendingProps),i=Xt(r.type,i),qm(e,t,r,i,n);case 15:return Xv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xt(r,i),Oo(e,t),t.tag=1,bt(r)?(e=!0,ul(t)):e=!1,Li(t,n),qv(t,r,i),wd(t,r,i,n),Ed(null,t,r,!0,e,n);case 19:return tb(e,t,n);case 22:return Qv(e,t,n)}throw Error(O(156,t.tag))};function yb(e,t){return H0(e,t)}function JE(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(e,t,n,r){return new JE(e,t,n,r)}function mp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function eC(e){if(typeof e=="function")return mp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Df)return 11;if(e===Lf)return 14}return 2}function yr(e,t){var n=e.alternate;return n===null?(n=Vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Uo(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")mp(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case hi:return qr(n.children,i,s,t);case jf:a=8,i|=8;break;case Wc:return e=Vt(12,n,t,i|2),e.elementType=Wc,e.lanes=s,e;case Gc:return e=Vt(13,n,t,i),e.elementType=Gc,e.lanes=s,e;case qc:return e=Vt(19,n,t,i),e.elementType=qc,e.lanes=s,e;case _0:return ru(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C0:a=10;break e;case T0:a=9;break e;case Df:a=11;break e;case Lf:a=14;break e;case er:a=16,r=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=Vt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function qr(e,t,n,r){return e=Vt(7,e,r,t),e.lanes=n,e}function ru(e,t,n,r){return e=Vt(22,e,r,t),e.elementType=_0,e.lanes=n,e.stateNode={isHidden:!1},e}function Ju(e,t,n){return e=Vt(6,e,null,t),e.lanes=n,e}function ec(e,t,n){return t=Vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tC(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Du(0),this.expirationTimes=Du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Du(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gp(e,t,n,r,i,s,a,o,l){return e=new tC(e,t,n,o,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Vt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jf(s),e}function nC(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xb(e){if(!e)return wr;e=e._reactInternals;e:{if(oi(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(bt(n))return xv(e,n,t)}return t}function vb(e,t,n,r,i,s,a,o,l){return e=gp(n,r,!0,e,i,s,a,o,l),e.context=xb(null),n=e.current,r=ft(),i=gr(n),s=Ln(r,i),s.callback=t??null,hr(n,s,i),e.current.lanes=i,ja(e,i,r),wt(e,r),e}function iu(e,t,n,r){var i=t.current,s=ft(),a=gr(i);return n=xb(n),t.context===null?t.context=n:t.pendingContext=n,t=Ln(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=hr(i,t,a),e!==null&&(nn(e,i,a,s),Do(e,i,a)),a}function kl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yp(e,t){sg(e,t),(e=e.alternate)&&sg(e,t)}function rC(){return null}var bb=typeof reportError=="function"?reportError:function(e){console.error(e)};function xp(e){this._internalRoot=e}su.prototype.render=xp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));iu(e,t,null,null)};su.prototype.unmount=xp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ni(function(){iu(null,e,null,null)}),t[zn]=null}};function su(e){this._internalRoot=e}su.prototype.unstable_scheduleHydration=function(e){if(e){var t=Q0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rr.length&&t!==0&&t<rr[n].priority;n++);rr.splice(n,0,e),n===0&&J0(e)}};function vp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function au(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ag(){}function iC(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=kl(a);s.call(u)}}var a=vb(t,r,e,0,null,!1,!1,"",ag);return e._reactRootContainer=a,e[zn]=a.current,la(e.nodeType===8?e.parentNode:e),ni(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var u=kl(l);o.call(u)}}var l=gp(e,0,!1,null,null,!1,!1,"",ag);return e._reactRootContainer=l,e[zn]=l.current,la(e.nodeType===8?e.parentNode:e),ni(function(){iu(t,l,n,r)}),l}function ou(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var o=i;i=function(){var l=kl(a);o.call(l)}}iu(t,a,e,i)}else a=iC(n,t,e,i,r);return kl(a)}Y0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ns(t.pendingLanes);n!==0&&(Ff(t,n|1),wt(t,Fe()),!(he&6)&&(Ki=Fe()+500,Tr()))}break;case 13:ni(function(){var r=Un(e,1);if(r!==null){var i=ft();nn(r,e,1,i)}}),yp(e,1)}};zf=function(e){if(e.tag===13){var t=Un(e,134217728);if(t!==null){var n=ft();nn(t,e,134217728,n)}yp(e,134217728)}};X0=function(e){if(e.tag===13){var t=gr(e),n=Un(e,t);if(n!==null){var r=ft();nn(n,e,t,r)}yp(e,t)}};Q0=function(){return xe};Z0=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}};rd=function(e,t,n){switch(t){case"input":if(Xc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ql(r);if(!i)throw Error(O(90));I0(r),Xc(r,i)}}}break;case"textarea":P0(e,n);break;case"select":t=n.value,t!=null&&Pi(e,!!n.multiple,t,!1)}};F0=fp;z0=ni;var sC={usingClientEntryPoint:!1,Events:[La,xi,Ql,M0,O0,fp]},Ss={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aC={bundleType:Ss.bundleType,version:Ss.version,rendererPackageName:Ss.rendererPackageName,rendererConfig:Ss.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=V0(e),e===null?null:e.stateNode},findFiberByHostInstance:Ss.findFiberByHostInstance||rC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mo.isDisabled&&mo.supportsFiber)try{ql=mo.inject(aC),gn=mo}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sC;Dt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vp(t))throw Error(O(200));return nC(e,t,null,n)};Dt.createRoot=function(e,t){if(!vp(e))throw Error(O(299));var n=!1,r="",i=bb;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=gp(e,1,!1,null,null,n,!1,r,i),e[zn]=t.current,la(e.nodeType===8?e.parentNode:e),new xp(t)};Dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=V0(t),e=e===null?null:e.stateNode,e};Dt.flushSync=function(e){return ni(e)};Dt.hydrate=function(e,t,n){if(!au(t))throw Error(O(200));return ou(null,e,t,!0,n)};Dt.hydrateRoot=function(e,t,n){if(!vp(e))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=bb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=vb(t,null,e,1,n??null,i,!1,s,a),e[zn]=t.current,la(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new su(t)};Dt.render=function(e,t,n){if(!au(t))throw Error(O(200));return ou(null,e,t,!1,n)};Dt.unmountComponentAtNode=function(e){if(!au(e))throw Error(O(40));return e._reactRootContainer?(ni(function(){ou(null,null,e,!1,function(){e._reactRootContainer=null,e[zn]=null})}),!0):!1};Dt.unstable_batchedUpdates=fp;Dt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!au(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return ou(e,t,n,!1,r)};Dt.version="18.3.1-next-f1338f8080-20240426";function wb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wb)}catch(e){console.error(e)}}wb(),w0.exports=Dt;var oC=w0.exports,kb,og=oC;kb=og.createRoot,og.hydrateRoot;/**
 * react-router v7.18.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var bp=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Sb=/^[\\/]{2}/;function lC(e,t){return t+e.replace(/\\/g,"/")}var lg="popstate";function ug(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function uC(e={}){function t(r,i){var u;let s=(u=i.state)==null?void 0:u.masked,{pathname:a,search:o,hash:l}=s||r.location;return Md("",{pathname:a,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default",s?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,i){return typeof i=="string"?i:ri(i)}return dC(t,n,null,e)}function Ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function un(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function cC(){return Math.random().toString(36).substring(2,10)}function cg(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Md(e,t,n=null,r,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?ss(t):t,state:n,key:t&&t.key||r||cC(),mask:i}}function ri({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function ss(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function dC(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,o="POP",l=null,u=d();u==null&&(u=0,a.replaceState({...a.state,idx:u},""));function d(){return(a.state||{idx:null}).idx}function f(){o="POP";let b=d(),g=b==null?null:b-u;u=b,l&&l({action:o,location:v.location,delta:g})}function p(b,g){o="PUSH";let m=ug(b)?b:Md(v.location,b,g);u=d()+1;let y=cg(m,u),S=v.createHref(m.mask||m);try{a.pushState(y,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(S)}s&&l&&l({action:o,location:v.location,delta:1})}function h(b,g){o="REPLACE";let m=ug(b)?b:Md(v.location,b,g);u=d();let y=cg(m,u),S=v.createHref(m.mask||m);a.replaceState(y,"",S),s&&l&&l({action:o,location:v.location,delta:0})}function x(b){return fC(i,b)}let v={get action(){return o},get location(){return e(i,a)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(lg,f),l=b,()=>{i.removeEventListener(lg,f),l=null}},createHref(b){return t(i,b)},createURL:x,encodeLocation(b){let g=x(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:h,go(b){return a.go(b)}};return v}function fC(e,t,n=!1){let r="http://localhost";e&&(r=e.location.origin!=="null"?e.location.origin:e.location.href),Ie(r,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:ri(t);return i=i.replace(/ $/,"%20"),!n&&Sb.test(i)&&(i=r+i),new URL(i,r)}function Eb(e,t,n="/"){return pC(e,t,n,!1)}function pC(e,t,n,r,i){let s=typeof t=="string"?ss(t):t,a=Vn(s.pathname||"/",n);if(a==null)return null;let o=hC(e),l=null,u=CC(a);for(let d=0;l==null&&d<o.length;++d)l=EC(o[d],u,r);return l}function hC(e){let t=Cb(e);return mC(t),t}function Cb(e,t=[],n=[],r="",i=!1){let s=(a,o,l=i,u)=>{let d={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(r)&&l)return;Ie(d.relativePath.startsWith(r),`Absolute route path "${d.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(r.length)}let f=rn([r,d.relativePath]),p=n.concat(d);a.children&&a.children.length>0&&(Ie(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),Cb(a.children,t,p,f,l)),!(a.path==null&&!a.index)&&t.push({path:f,score:kC(f,a.index),routesMeta:p.map((h,x)=>{let[v,b]=Ab(h.relativePath,h.caseSensitive,x===p.length-1);return{...h,matcher:v,compiledParams:b}})})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,o);else for(let u of Tb(a.path))s(a,o,!0,u)}),t}function Tb(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=Tb(r.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),i&&o.push(...a),o.map(l=>e.startsWith("/")&&l===""?"/":l)}function mC(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:SC(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var gC=/^:[\w-]+$/,yC=3,xC=2,vC=1,bC=10,wC=-2,dg=e=>e==="*";function kC(e,t){let n=e.split("/"),r=n.length;return n.some(dg)&&(r+=wC),t&&(r+=xC),n.filter(i=>!dg(i)).reduce((i,s)=>i+(gC.test(s)?yC:s===""?vC:bC),r)}function SC(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function EC(e,t,n=!1){let{routesMeta:r}=e,i={},s="/",a=[];for(let o=0;o<r.length;++o){let l=r[o],u=o===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",f={path:l.relativePath,caseSensitive:l.caseSensitive,end:u},p=l.matcher&&l.compiledParams?_b(f,d,l.matcher,l.compiledParams):Sl(f,d),h=l.route;if(!p&&u&&n&&!r[r.length-1].route.index&&(p=Sl({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:rn([s,p.pathname]),pathnameBase:AC(rn([s,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(s=rn([s,p.pathnameBase]))}return a}function Sl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ab(e.path,e.caseSensitive,e.end);return _b(e,t,n,r)}function _b(e,t,n,r){let i=t.match(n);if(!i)return null;let s=i[0],a=Yi(s,1),o=i.slice(1);return{params:r.reduce((u,{paramName:d,isOptional:f},p)=>{if(d==="*"){let x=o[p]||"";a=Yi(s.slice(0,s.length-x.length),1)}const h=o[p];return f&&!h?u[d]=void 0:u[d]=(h||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function Ab(e,t=!1,n=!0){un(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l,u,d)=>{if(r.push({paramName:o,isOptional:l!=null}),l){let f=d.charAt(u+a.length);return f&&f!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function CC(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return un(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Vn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function TC(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ss(e):e,s;return n?(n=Ib(n),n.startsWith("/")||n.startsWith("\\")?s=fg(n.substring(1),"/"):s=fg(n,t)):s=t,{pathname:s,search:IC(r),hash:NC(i)}}function fg(e,t){let n=Yi(t).split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function tc(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function _C(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function wp(e){let t=_C(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function lu(e,t,n,r=!1){let i;typeof e=="string"?i=ss(e):(i={...e},Ie(!i.pathname||!i.pathname.includes("?"),tc("?","pathname","search",i)),Ie(!i.pathname||!i.pathname.includes("#"),tc("#","pathname","hash",i)),Ie(!i.search||!i.search.includes("#"),tc("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,o;if(a==null)o=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}o=f>=0?t[f]:"/"}let l=TC(i,o),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}var Ib=e=>e.replace(/[\\/]{2,}/g,"/"),rn=e=>Ib(e.join("/"));function Yi(e,t=0){let n=e.length;for(;n>t&&e.charCodeAt(n-1)===47;)n--;return n===e.length?e:e.slice(0,n)}var AC=e=>Yi(e).replace(/^\/*/,"/"),IC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,NC=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,PC=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function RC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function jC(e){let t=e.map(n=>n.route.path).filter(Boolean);return rn(t)||"/"}var Nb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Pb(e,t){let n=e;if(typeof n!="string"||!bp.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Nb)try{let s=new URL(window.location.href),a=Sb.test(n)?new URL(lC(n,s.protocol)):new URL(n),o=Vn(a.pathname,t);a.origin===s.origin&&o!=null?n=o+a.search+a.hash:i=!0}catch{un(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var pg=new URL("http://localhost");function kp(e){if(e.createURL)return e.createURL("/");try{return new URL(e.createHref("/"),pg)}catch{return pg}}function nc(e,t){return e.origin===t.origin&&(e.origin!=="null"||e.protocol===t.protocol&&e.host===t.host)}function DC(e,t){if(e.startsWith("//"))return!0;let n=t.protocol.toLowerCase();return e.toLowerCase().startsWith(n)?t.host===""||e.slice(n.length).startsWith("//"):!1}function Sp(e,t,n,r){let i=null;try{i=e==null?null:new URL(e,n)}catch{}let s=new URL(t,n),a=i!=null&&!nc(i,n),o=!nc(s,n);if(r==="reject"){if(a||o)throw new Error("External navigation is not allowed")}else if(o&&(i==null||!DC(e,i)||!nc(i,s)))throw new Error("External navigation is not allowed")}var Rb=["POST","PUT","PATCH","DELETE"];new Set(Rb);var LC=["GET",...Rb];new Set(LC);var MC=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function OC(e){try{return MC.includes(new URL(e).protocol)}catch{return!1}}var as=E.createContext(null);as.displayName="DataRouter";var uu=E.createContext(null);uu.displayName="DataRouterState";var jb=E.createContext(!1);function FC(){return E.useContext(jb)}var Db=E.createContext({isTransitioning:!1});Db.displayName="ViewTransition";var zC=E.createContext(new Map);zC.displayName="Fetchers";var UC=E.createContext(null);UC.displayName="Await";var Mt=E.createContext(null);Mt.displayName="Navigation";var Oa=E.createContext(null);Oa.displayName="Location";var kn=E.createContext({outlet:null,matches:[],isDataRoute:!1});kn.displayName="Route";var Ep=E.createContext(null);Ep.displayName="RouteError";var Lb="REACT_ROUTER_ERROR",BC="REDIRECT",VC="ROUTE_ERROR_RESPONSE";function $C(e){if(e.startsWith(`${Lb}:${BC}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function HC(e){if(e.startsWith(`${Lb}:${VC}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new PC(t.status,t.statusText,t.data)}catch{}}function WC(e,{relative:t}={}){Ie(os(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=E.useContext(Mt),{hash:i,pathname:s,search:a}=Fa(e,{relative:t}),o=s;return n!=="/"&&(o=s==="/"?n:rn([n,s])),r.createHref({pathname:o,search:a,hash:i})}function os(){return E.useContext(Oa)!=null}function cn(){return Ie(os(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(Oa).location}var Mb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ob(e){E.useContext(Mt).static||E.useLayoutEffect(e)}function cu(){let{isDataRoute:e}=E.useContext(kn);return e?iT():GC()}function GC(){Ie(os(),"useNavigate() may be used only in the context of a <Router> component.");let e=E.useContext(as),{basename:t,navigator:n}=E.useContext(Mt),{matches:r}=E.useContext(kn),{pathname:i}=cn(),s=JSON.stringify(wp(r)),a=E.useRef(!1);return Ob(()=>{a.current=!0}),E.useCallback((l,u={})=>{if(un(a.current,Mb),!a.current)return;if(typeof l=="number"){n.go(l);return}let d=lu(l,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:rn([t,d.pathname])),Sp(typeof l=="string"?l:ri(l),n.createHref(d),kp(n),"reject"),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,s,i,e])}E.createContext(null);function Fa(e,{relative:t}={}){let{matches:n}=E.useContext(kn),{pathname:r}=cn(),i=JSON.stringify(wp(n));return E.useMemo(()=>lu(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function qC(e,t){return Fb(e,t)}function Fb(e,t,n){var b;Ie(os(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=E.useContext(Mt),{matches:i}=E.useContext(kn),s=i[i.length-1],a=s?s.params:{},o=s?s.pathname:"/",l=s?s.pathnameBase:"/",u=s&&s.route;{let g=u&&u.path||"";Ub(o,!u||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let d=cn(),f;if(t){let g=typeof t=="string"?ss(t):t;Ie(l==="/"||((b=g.pathname)==null?void 0:b.startsWith(l)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${g.pathname}" was given in the \`location\` prop.`),f=g}else f=d;let p=f.pathname||"/",h=p;if(l!=="/"){let g=l.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(g.length).join("/")}let x=n&&n.state.matches.length?n.state.matches.map(g=>Object.assign(g,{route:n.manifest[g.route.id]||g.route})):Eb(e,{pathname:h});un(u||x!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),un(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=ZC(x&&x.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:rn([l,r.encodeLocation?r.encodeLocation(g.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:rn([l,r.encodeLocation?r.encodeLocation(g.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:g.pathnameBase])})),i,n);return t&&v?E.createElement(Oa.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...f},navigationType:"POP"}},v):v}function KC(){let e=rT(),t=RC(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",e),a=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:s},"ErrorBoundary")," or"," ",E.createElement("code",{style:s},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,a)}var YC=E.createElement(KC,null),zb=class extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=HC(e.digest);n&&(e=n)}let t=e!==void 0?E.createElement(kn.Provider,{value:this.props.routeContext},E.createElement(Ep.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?E.createElement(XC,{error:e},t):t}};zb.contextType=jb;var rc=new WeakMap;function XC({children:e,error:t}){let{basename:n,navigator:r}=E.useContext(Mt);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let i=$C(t.digest);if(i){let s=rc.get(t);if(s)throw s;let a=Pb(i.location,n),o=a.absoluteURL||a.to;if(Sp(i.location,o,kp(r),"allow-explicit"),OC(o))throw new Error("Invalid redirect location");if(Nb&&!rc.get(t))if(a.isExternal||i.reloadDocument)window.location.href=o;else{const l=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:i.replace}));throw rc.set(t,l),l}return E.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o}`})}}return e}function QC({routeContext:e,match:t,children:n}){let r=E.useContext(as);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),E.createElement(kn.Provider,{value:e},n)}function ZC(e,t=[],n){let r=n==null?void 0:n.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,s=r==null?void 0:r.errors;if(s!=null){let d=i.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);Ie(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,d+1))}let a=!1,o=-1;if(n&&r){a=r.renderFallback;for(let d=0;d<i.length;d++){let f=i[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(o=d),f.route.id){let{loaderData:p,errors:h}=r,x=f.route.loader&&!p.hasOwnProperty(f.route.id)&&(!h||h[f.route.id]===void 0);if(f.route.lazy||x){n.isStatic&&(a=!0),o>=0?i=i.slice(0,o+1):i=[i[0]];break}}}}let l=n==null?void 0:n.onError,u=r&&l?(d,f)=>{var p,h;l(d,{location:r.location,params:((h=(p=r.matches)==null?void 0:p[0])==null?void 0:h.params)??{},pattern:jC(r.matches),errorInfo:f})}:void 0;return i.reduceRight((d,f,p)=>{let h,x=!1,v=null,b=null;r&&(h=s&&f.route.id?s[f.route.id]:void 0,v=f.route.errorElement||YC,a&&(o<0&&p===0?(Ub("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,b=null):o===p&&(x=!0,b=f.route.hydrateFallbackElement||null)));let g=t.concat(i.slice(0,p+1)),m=()=>{let y;return h?y=v:x?y=b:f.route.Component?y=E.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=d,E.createElement(QC,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:r!=null},children:y})};return r&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?E.createElement(zb,{location:r.location,revalidation:r.revalidation,component:v,error:h,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0},onError:u}):m()},null)}function Cp(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function JC(e){let t=E.useContext(as);return Ie(t,Cp(e)),t}function eT(e){let t=E.useContext(uu);return Ie(t,Cp(e)),t}function tT(e){let t=E.useContext(kn);return Ie(t,Cp(e)),t}function Tp(e){let t=tT(e),n=t.matches[t.matches.length-1];return Ie(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function nT(){return Tp("useRouteId")}function rT(){var r;let e=E.useContext(Ep),t=eT("useRouteError"),n=Tp("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function iT(){let{router:e}=JC("useNavigate"),t=Tp("useNavigate"),n=E.useRef(!1);return Ob(()=>{n.current=!0}),E.useCallback(async(i,s={})=>{un(n.current,Mb),n.current&&(typeof i=="number"?await e.navigate(i):await e.navigate(i,{fromRouteId:t,...s}))},[e,t])}var hg={};function Ub(e,t,n){!t&&!hg[e]&&(hg[e]=!0,un(!1,n))}E.memo(sT);function sT({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:s}){return Fb(e,void 0,{manifest:t,state:r,isStatic:i,onError:s})}function aT({to:e,replace:t,state:n,relative:r}){Ie(os(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i,navigator:s}=E.useContext(Mt);un(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=E.useContext(kn),{pathname:o}=cn(),l=cu(),u=lu(e,wp(a),o,r==="path");Sp(typeof e=="string"?e:ri(e),s.createHref(u),kp(s),"reject");let d=JSON.stringify(u);return E.useEffect(()=>{l(JSON.parse(d),{replace:t,state:n,relative:r})},[l,d,r,t,n]),null}function Lr(e){Ie(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function oT({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:s=!1,useTransitions:a}){Ie(!os(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),l=E.useMemo(()=>({basename:o,navigator:i,static:s,useTransitions:a,future:{}}),[o,i,s,a]);typeof n=="string"&&(n=ss(n));let{pathname:u="/",search:d="",hash:f="",state:p=null,key:h="default",mask:x}=n,v=E.useMemo(()=>{let b=Vn(u,o);return b==null?null:{location:{pathname:b,search:d,hash:f,state:p,key:h,mask:x},navigationType:r}},[o,u,d,f,p,h,r,x]);return un(v!=null,`<Router basename="${o}"> is not able to match the URL "${u}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:E.createElement(Mt.Provider,{value:l},E.createElement(Oa.Provider,{children:t,value:v}))}function lT({children:e,location:t}){return qC(Od(e),t)}function Od(e,t=[]){let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let s=[...t,i];if(r.type===E.Fragment){n.push.apply(n,Od(r.props.children,s));return}Ie(r.type===Lr,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ie(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Od(r.props.children,s)),n.push(a)}),n}var Bo="get",Vo="application/x-www-form-urlencoded";function du(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function uT(e){return du(e)&&e.tagName.toLowerCase()==="button"}function cT(e){return du(e)&&e.tagName.toLowerCase()==="form"}function dT(e){return du(e)&&e.tagName.toLowerCase()==="input"}function fT(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function pT(e,t){return e.button===0&&(!t||t==="_self")&&!fT(e)}var go=null;function hT(){if(go===null)try{new FormData(document.createElement("form"),0),go=!1}catch{go=!0}return go}var mT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ic(e){return e!=null&&!mT.has(e)?(un(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vo}"`),null):e}function gT(e,t){let n,r,i,s,a;if(cT(e)){let o=e.getAttribute("action");r=o?Vn(o,t):null,n=e.getAttribute("method")||Bo,i=ic(e.getAttribute("enctype"))||Vo,s=new FormData(e)}else if(uT(e)||dT(e)&&(e.type==="submit"||e.type==="image")){let o=e.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||o.getAttribute("action");if(r=l?Vn(l,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||Bo,i=ic(e.getAttribute("formenctype"))||ic(o.getAttribute("enctype"))||Vo,s=new FormData(o,e),!hT()){let{name:u,type:d,value:f}=e;if(d==="image"){let p=u?`${u}.`:"";s.append(`${p}x`,"0"),s.append(`${p}y`,"0")}else u&&s.append(u,f)}}else{if(du(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Bo,r=null,i=Vo,a=e}return s&&i==="text/plain"&&(a=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function _p(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Bb(e,t,n,r){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname==="/"?i.pathname=`_root.${r}`:t&&Vn(i.pathname,t)==="/"?i.pathname=`${Yi(t)}/_root.${r}`:i.pathname=`${Yi(i.pathname)}.${r}`,i}async function yT(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xT(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function vT(e,t,n){let r=await Promise.all(e.map(async i=>{let s=t.routes[i.route.id];if(s){let a=await yT(s,n);return a.links?a.links():[]}return[]}));return ST(r.flat(1).filter(xT).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function mg(e,t,n,r,i,s){let a=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,o=(l,u)=>{var d;return n[u].pathname!==l.pathname||((d=n[u].route.path)==null?void 0:d.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return s==="assets"?t.filter((l,u)=>a(l,u)||o(l,u)):s==="data"?t.filter((l,u)=>{var f;let d=r.routes[l.route.id];if(!d||!d.hasLoader)return!1;if(a(l,u)||o(l,u))return!0;if(l.route.shouldRevalidate){let p=l.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function bT(e,t,{includeHydrateFallback:n}={}){return wT(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function wT(e){return[...new Set(e)]}function kT(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function ST(e,t){let n=new Set;return new Set(t),e.reduce((r,i)=>{let s=JSON.stringify(kT(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function Ap(){let e=E.useContext(as);return _p(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function ET(){let e=E.useContext(uu);return _p(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Ip=E.createContext(void 0);Ip.displayName="FrameworkContext";function fu(){let e=E.useContext(Ip);return _p(e,"You must render this element inside a <HydratedRouter> element"),e}function CT(e,t){let n=E.useContext(Ip),[r,i]=E.useState(!1),[s,a]=E.useState(!1),{onFocus:o,onBlur:l,onMouseEnter:u,onMouseLeave:d,onTouchStart:f}=t,p=E.useRef(null);E.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let v=g=>{g.forEach(m=>{a(m.isIntersecting)})},b=new IntersectionObserver(v,{threshold:.5});return p.current&&b.observe(p.current),()=>{b.disconnect()}}},[e]),E.useEffect(()=>{if(r){let v=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(v)}}},[r]);let h=()=>{i(!0)},x=()=>{i(!1),a(!1)};return n?e!=="intent"?[s,p,{}]:[s,p,{onFocus:Es(o,h),onBlur:Es(l,x),onMouseEnter:Es(u,h),onMouseLeave:Es(d,x),onTouchStart:Es(f,h)}]:[!1,p,{}]}function Es(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function TT({page:e,...t}){let n=FC(),{nonce:r}=fu(),{router:i}=Ap(),s=E.useMemo(()=>Eb(i.routes,e,i.basename),[i.routes,e,i.basename]);return s?(t.nonce==null&&r&&(t={...t,nonce:r}),n?E.createElement(AT,{page:e,matches:s,...t}):E.createElement(IT,{page:e,matches:s,...t})):null}function _T(e){let{manifest:t,routeModules:n}=fu(),[r,i]=E.useState([]);return E.useEffect(()=>{let s=!1;return vT(e,t,n).then(a=>{s||i(a)}),()=>{s=!0}},[e,t,n]),r}function AT({page:e,matches:t,...n}){let r=cn(),{future:i}=fu(),{basename:s}=Ap(),a=E.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let o=Bb(e,s,i.v8_trailingSlashAwareDataRequests,"rsc"),l=!1,u=[];for(let d of t)typeof d.route.shouldRevalidate=="function"?l=!0:u.push(d.route.id);return l&&u.length>0&&o.searchParams.set("_routes",u.join(",")),[o.pathname+o.search]},[s,i.v8_trailingSlashAwareDataRequests,e,r,t]);return E.createElement(E.Fragment,null,a.map(o=>E.createElement("link",{key:o,rel:"prefetch",as:"fetch",href:o,...n})))}function IT({page:e,matches:t,...n}){let r=cn(),{future:i,manifest:s,routeModules:a}=fu(),{basename:o}=Ap(),{loaderData:l,matches:u}=ET(),d=E.useMemo(()=>mg(e,t,u,s,r,"data"),[e,t,u,s,r]),f=E.useMemo(()=>mg(e,t,u,s,r,"assets"),[e,t,u,s,r]),p=E.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let v=new Set,b=!1;if(t.forEach(m=>{var S;let y=s.routes[m.route.id];!y||!y.hasLoader||(!d.some(C=>C.route.id===m.route.id)&&m.route.id in l&&((S=a[m.route.id])!=null&&S.shouldRevalidate)||y.hasClientLoader?b=!0:v.add(m.route.id))}),v.size===0)return[];let g=Bb(e,o,i.v8_trailingSlashAwareDataRequests,"data");return b&&v.size>0&&g.searchParams.set("_routes",t.filter(m=>v.has(m.route.id)).map(m=>m.route.id).join(",")),[g.pathname+g.search]},[o,i.v8_trailingSlashAwareDataRequests,l,r,s,d,t,e,a]),h=E.useMemo(()=>bT(f,s),[f,s]),x=_T(f);return E.createElement(E.Fragment,null,p.map(v=>E.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),h.map(v=>E.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),x.map(({key:v,link:b})=>E.createElement("link",{key:v,nonce:n.nonce,...b,crossOrigin:b.crossOrigin??n.crossOrigin})))}function NT(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var PT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{PT&&(window.__reactRouterVersion="7.18.5")}catch{}function RT({basename:e,children:t,useTransitions:n,window:r}){let i=E.useRef();i.current==null&&(i.current=uC({window:r,v5Compat:!0}));let s=i.current,[a,o]=E.useState({action:s.action,location:s.location}),l=E.useCallback(u=>{n===!1?o(u):E.startTransition(()=>o(u))},[n]);return E.useLayoutEffect(()=>s.listen(l),[s,l]),E.createElement(oT,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:s,useTransitions:n})}var ya=E.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:a,mask:o,state:l,target:u,to:d,preventScrollReset:f,viewTransition:p,defaultShouldRevalidate:h,...x},v){let{basename:b,navigator:g,useTransitions:m}=E.useContext(Mt),y=typeof d=="string"&&bp.test(d),S=Pb(d,b);d=S.to;let C=WC(d,{relative:i}),w=cn(),I=null;if(o){let $=lu(o,[],w.mask?w.mask.pathname:"/",!0);b!=="/"&&($.pathname=$.pathname==="/"?b:rn([b,$.pathname])),I=g.createHref($)}let[N,j,T]=CT(r,x),R=MT(d,{replace:a,mask:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:p,defaultShouldRevalidate:h,useTransitions:m});function z($){t&&t($),$.defaultPrevented||R($)}let G=!(S.isExternal||s),q=E.createElement("a",{...x,...T,href:(G?I:void 0)||S.absoluteURL||C,onClick:G?z:t,ref:NT(v,j),target:u,"data-discover":!y&&n==="render"?"true":void 0});return N&&!y?E.createElement(E.Fragment,null,q,E.createElement(TT,{page:C})):q});ya.displayName="Link";var jT=E.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:a,viewTransition:o,children:l,...u},d){let f=Fa(a,{relative:u.relative}),p=cn(),h=E.useContext(uu),{navigator:x,basename:v}=E.useContext(Mt),b=h!=null&&BT(f)&&o===!0,g=x.encodeLocation?x.encodeLocation(f).pathname:f.pathname,m=p.pathname,y=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;n||(m=m.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&v&&(y=Vn(y,v)||y);const S=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let C=m===g||!i&&m.startsWith(g)&&m.charAt(S)==="/",w=y!=null&&(y===g||!i&&y.startsWith(g)&&y.charAt(g.length)==="/"),I={isActive:C,isPending:w,isTransitioning:b},N=C?t:void 0,j;typeof r=="function"?j=r(I):j=[r,C?"active":null,w?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let T=typeof s=="function"?s(I):s;return E.createElement(ya,{...u,"aria-current":N,className:j,ref:d,style:T,to:a,viewTransition:o},typeof l=="function"?l(I):l)});jT.displayName="NavLink";var DT=E.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:s,method:a=Bo,action:o,onSubmit:l,relative:u,preventScrollReset:d,viewTransition:f,defaultShouldRevalidate:p,...h},x)=>{let{useTransitions:v}=E.useContext(Mt),b=zT(),g=UT(o,{relative:u}),m=a.toLowerCase()==="get"?"get":"post",y=typeof o=="string"&&bp.test(o),S=C=>{if(l&&l(C),C.defaultPrevented)return;C.preventDefault();let w=C.nativeEvent.submitter,I=(w==null?void 0:w.getAttribute("formmethod"))||a,N=()=>b(w||C.currentTarget,{fetcherKey:t,method:I,navigate:n,replace:i,state:s,relative:u,preventScrollReset:d,viewTransition:f,defaultShouldRevalidate:p});v&&n!==!1?E.startTransition(()=>N()):N()};return E.createElement("form",{ref:x,method:m,action:g,onSubmit:r?l:S,...h,"data-discover":!y&&e==="render"?"true":void 0})});DT.displayName="Form";function LT(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vb(e){let t=E.useContext(as);return Ie(t,LT(e)),t}function MT(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:s,relative:a,viewTransition:o,defaultShouldRevalidate:l,useTransitions:u}={}){let d=cu(),f=cn(),p=Fa(e,{relative:a});return E.useCallback(h=>{if(pT(h,t)){h.preventDefault();let x=n!==void 0?n:ri(f)===ri(p),v=()=>d(e,{replace:x,mask:r,state:i,preventScrollReset:s,relative:a,viewTransition:o,defaultShouldRevalidate:l});u?E.startTransition(()=>v()):v()}},[f,d,p,n,r,i,t,e,s,a,o,l,u])}var OT=0,FT=()=>`__${String(++OT)}__`;function zT(){let{router:e}=Vb("useSubmit"),{basename:t}=E.useContext(Mt),n=nT(),r=e.fetch,i=e.navigate;return E.useCallback(async(s,a={})=>{let{action:o,method:l,encType:u,formData:d,body:f}=gT(s,t);if(a.navigate===!1){let p=a.fetcherKey||FT();await r(p,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:d,body:f,formMethod:a.method||l,formEncType:a.encType||u,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:d,body:f,formMethod:a.method||l,formEncType:a.encType||u,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function UT(e,{relative:t}={}){let{basename:n}=E.useContext(Mt),r=E.useContext(kn);Ie(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...Fa(e||".",{relative:t})},a=cn();if(e==null){s.search=a.search;let o=new URLSearchParams(s.search),l=o.getAll("index");if(l.some(d=>d==="")){o.delete("index"),l.filter(f=>f).forEach(f=>o.append("index",f));let d=o.toString();s.search=d?`?${d}`:""}}return(!e||e===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:rn([n,s.pathname])),ri(s)}function BT(e,{relative:t}={}){let n=E.useContext(Db);Ie(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Vb("useViewTransitionState"),i=Fa(e,{relative:t});if(!n.isTransitioning)return!1;let s=Vn(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Vn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Sl(i.pathname,a)!=null||Sl(i.pathname,s)!=null}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$b=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $T={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=E.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:a,...o},l)=>E.createElement("svg",{ref:l,...$T,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:$b("lucide",i),...o},[...a.map(([u,d])=>E.createElement(u,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=(e,t)=>{const n=E.forwardRef(({className:r,...i},s)=>E.createElement(HT,{ref:s,iconNode:t,className:$b(`lucide-${VT(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=Y("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=Y("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=Y("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=Y("AudioLines",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=Y("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=Y("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=Y("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=Y("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=Y("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=Y("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=Y("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=Y("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=Y("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=Y("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=Y("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=Y("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=Y("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=Y("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=Y("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=Y("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=Y("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=Y("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=Y("MessageSquarePlus",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=Y("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=Y("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=Y("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=Y("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=Y("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=Y("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=Y("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=Y("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=Y("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=Y("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=Y("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=Y("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=Y("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=Y("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=Y("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=Y("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=Y("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=Y("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=Y("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=Y("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=Y("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=Y("Tablet",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=Y("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=Y("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=Y("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=Y("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=Y("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=Y("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=Y("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=Y("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Ud="http://localhost:8000".replace(/\/$/,"");function ba(){try{return localStorage.getItem("eliza_access_token")||""}catch{return""}}function yg(e){try{e?localStorage.setItem("eliza_access_token",e):localStorage.removeItem("eliza_access_token")}catch{}}function xg(){try{return localStorage.getItem("eliza_access_email")||""}catch{return""}}function vg(e){try{e?localStorage.setItem("eliza_access_email",e):localStorage.removeItem("eliza_access_email")}catch{}}function l_(){try{localStorage.removeItem("eliza_access_token"),localStorage.removeItem("eliza_access_email")}catch{}}function yo(){if(typeof window>"u")return"desktop";const e=window.innerWidth,t=(navigator.userAgent||"").toLowerCase();return/ipad|tablet/.test(t)||e>=768&&e<=1024?"tablet":/mobi|android|iphone/.test(t)||e<768?"mobile":"desktop"}function xo(){if(typeof navigator>"u")return"unknown";const e=navigator.userAgent.toLowerCase();return e.includes("edg/")?"Edge":e.includes("chrome")&&!e.includes("edg/")?"Chrome":e.includes("safari")&&!e.includes("chrome")?"Safari":e.includes("firefox")?"Firefox":e.includes("opr")||e.includes("opera")?"Opera":"Browser"}async function vo(e,t={}){var a;const n=ba(),r={"Content-Type":"application/json",...n?{Authorization:`Bearer ${n}`}:{},...t.headers||{}},i=await fetch(`${Ud}${e}`,{...t,headers:r}),s=await i.json().catch(()=>({}));if(!i.ok){const o=typeof s.detail=="object"&&((a=s.detail)!=null&&a.message)?s.detail.message:s.detail||s.message||`Request failed (${i.status})`,l=new Error(o);throw l.status=i.status,l.data=s,l}return s}const wa={verifyEmail:async e=>{const t=await fetch(`${Ud}/api/v1/access/verify-email`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,device_type:yo(),browser_name:xo()})}),n=await t.json().catch(()=>({}));if(!t.ok)throw new Error(n.detail||n.message||"Failed to verify email.");return n.sessionToken&&(yg(n.sessionToken),vg(n.email||e)),n},googleLogin:async({email:e,credential:t,name:n,picture:r}={})=>{const i=await fetch(`${Ud}/api/v1/access/google-login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,credential:t,name:n,picture:r,device_type:yo(),browser_name:xo()})}),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.detail||s.message||"Failed to log in with Google.");return s.sessionToken&&(yg(s.sessionToken),vg(s.email||e)),s},getStatus:async()=>vo("/api/v1/access/status"),submitQuestion:async e=>{const t={...e,device_type:yo(),browser_name:xo(),request_id:typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():void 0};return vo("/api/v1/questions",{method:"POST",body:JSON.stringify(t)})},submitFeedback:async({rating:e,category:t,message:n})=>vo("/api/v1/feedback",{method:"POST",body:JSON.stringify({rating:e,category:t,message:n,device_type:yo(),browser_name:xo()})}),getFeedbackStatus:async()=>vo("/api/v1/feedback/status")},u_=()=>{};var bg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},c_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],o=e[n++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},u1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,o=a?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=s>>2,f=(s&3)<<4|o>>4;let p=(o&15)<<2|u>>6,h=u&63;l||(h=64,a||(p=64)),r.push(n[d],n[f],n[p],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(l1(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):c_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||o==null||u==null||f==null)throw new d_;const p=s<<2|o>>4;if(r.push(p),u!==64){const h=o<<4&240|u>>2;if(r.push(h),f!==64){const x=u<<6&192|f;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class d_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const f_=function(e){const t=l1(e);return u1.encodeByteArray(t,!0)},c1=function(e){return f_(e).replace(/\./g,"")},d1=function(e){try{return u1.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=()=>p_().__FIREBASE_DEFAULTS__,m_=()=>{if(typeof process>"u"||typeof bg>"u")return;const e=bg.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},g_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&d1(e[1]);return t&&JSON.parse(t)},Fp=()=>{try{return u_()||h_()||m_()||g_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},y_=e=>{var t,n;return(n=(t=Fp())==null?void 0:t.emulatorHosts)==null?void 0:n[e]},f1=()=>{var e;return(e=Fp())==null?void 0:e.config},p1=e=>{var t;return(t=Fp())==null?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function v_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function b_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function w_(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function k_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function S_(){const e=pt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function E_(){try{return typeof indexedDB=="object"}catch{return!1}}function C_(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)==null?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="FirebaseError";class _r extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=T_,Object.setPrototypeOf(this,_r.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,za.prototype.create)}}class za{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?__(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new _r(i,o,r)}}function __(e,t){try{let n=0,r="";for(;n<e.length;){const i=e.indexOf("{$",n);if(i===-1){r+=e.substring(n);break}const s=e.indexOf("}",i+2);if(s===-1){r+=e.substring(n);break}const a=e.substring(i+2,s),o=t[a];r+=e.substring(n,i)+(o!=null?String(o):`<${a}?>`),n=s+1}return r}catch{return e}}function A_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Xi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(wg(s)&&wg(a)){if(!Xi(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function wg(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function I_(e,t){const n=new N_(e,t);return n.subscribe.bind(n)}class N_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");P_(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=ac),i.error===void 0&&(i.error=ac),i.complete===void 0&&(i.complete=ac);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function P_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ac(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(e){return e&&e._delegate?e._delegate:e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function R_(e){return(await fetch(e,{credentials:"include"})).ok}class Qi{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new x_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(L_(t))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Mr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Mr){return this.instances.has(t)}getOptions(t=Mr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:D_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Mr){return this.component?this.component.multipleInstances?t:Mr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function D_(e){return e===Mr?void 0:e}function L_(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new j_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(be||(be={}));const O_={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},F_=be.INFO,z_={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},U_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=z_[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class h1{constructor(t){this.name=t,this._logLevel=F_,this._logHandler=U_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in be))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?O_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...t),this._logHandler(this,be.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...t),this._logHandler(this,be.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,be.INFO,...t),this._logHandler(this,be.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,be.WARN,...t),this._logHandler(this,be.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...t),this._logHandler(this,be.ERROR,...t)}}const B_=(e,t)=>t.some(n=>e instanceof n);let kg,Sg;function V_(){return kg||(kg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $_(){return Sg||(Sg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const m1=new WeakMap,Bd=new WeakMap,g1=new WeakMap,oc=new WeakMap,Up=new WeakMap;function H_(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(vr(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&m1.set(n,e)}).catch(()=>{}),Up.set(t,e),t}function W_(e){if(Bd.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});Bd.set(e,t)}let Vd={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Bd.get(e);if(t==="objectStoreNames")return e.objectStoreNames||g1.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function G_(e){Vd=e(Vd)}function q_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(lc(this),t,...n);return g1.set(r,t.sort?t.sort():[t]),vr(r)}:$_().includes(e)?function(...t){return e.apply(lc(this),t),vr(m1.get(this))}:function(...t){return vr(e.apply(lc(this),t))}}function K_(e){return typeof e=="function"?q_(e):(e instanceof IDBTransaction&&W_(e),B_(e,V_())?new Proxy(e,Vd):e)}function vr(e){if(e instanceof IDBRequest)return H_(e);if(oc.has(e))return oc.get(e);const t=K_(e);return t!==e&&(oc.set(e,t),Up.set(t,e)),t}const lc=e=>Up.get(e);function Y_(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=vr(a);return r&&a.addEventListener("upgradeneeded",l=>{r(vr(a.result),l.oldVersion,l.newVersion,vr(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),o.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),o}const X_=["get","getKey","getAll","getAllKeys","count"],Q_=["put","add","delete","clear"],uc=new Map;function Eg(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(uc.get(t))return uc.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Q_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||X_.includes(n)))return;const s=async function(a,...o){const l=this.transaction(a,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(o.shift())),(await Promise.all([u[n](...o),i&&l.done]))[0]};return uc.set(t,s),s}G_(e=>({...e,get:(t,n,r)=>Eg(t,n)||e.get(t,n,r),has:(t,n)=>!!Eg(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(J_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function J_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const $d="@firebase/app",Cg="0.16.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new h1("@firebase/app"),eA="@firebase/app-compat",tA="@firebase/analytics-compat",nA="@firebase/analytics",rA="@firebase/app-check-compat",iA="@firebase/app-check",sA="@firebase/auth",aA="@firebase/auth-compat",oA="@firebase/database",lA="@firebase/data-connect",uA="@firebase/database-compat",cA="@firebase/functions",dA="@firebase/functions-compat",fA="@firebase/installations",pA="@firebase/installations-compat",hA="@firebase/messaging",mA="@firebase/messaging-compat",gA="@firebase/performance",yA="@firebase/performance-compat",xA="@firebase/remote-config",vA="@firebase/remote-config-compat",bA="@firebase/storage",wA="@firebase/storage-compat",kA="@firebase/firestore",SA="@firebase/ai",EA="@firebase/firestore-compat",CA="firebase",TA="13.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="[DEFAULT]",_A={[$d]:"fire-core",[eA]:"fire-core-compat",[nA]:"fire-analytics",[tA]:"fire-analytics-compat",[iA]:"fire-app-check",[rA]:"fire-app-check-compat",[sA]:"fire-auth",[aA]:"fire-auth-compat",[oA]:"fire-rtdb",[lA]:"fire-data-connect",[uA]:"fire-rtdb-compat",[cA]:"fire-fn",[dA]:"fire-fn-compat",[fA]:"fire-iid",[pA]:"fire-iid-compat",[hA]:"fire-fcm",[mA]:"fire-fcm-compat",[gA]:"fire-perf",[yA]:"fire-perf-compat",[xA]:"fire-rc",[vA]:"fire-rc-compat",[bA]:"fire-gcs",[wA]:"fire-gcs-compat",[kA]:"fire-fst",[EA]:"fire-fst-compat",[SA]:"fire-vertex","fire-js":"fire-js",[CA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=new Map,AA=new Map,Wd=new Map;function Tg(e,t){try{e.container.addComponent(t)}catch(n){$n.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Sa(e){const t=e.name;if(Wd.has(t))return $n.debug(`There were multiple attempts to register component ${t}.`),!1;Wd.set(t,e);for(const n of ka.values())Tg(n,e);for(const n of AA.values())Tg(n,e);return!0}function y1(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function mn(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pn=new za("app","Firebase",IA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=TA;function Cl(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:Hd,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw Pn.create("bad-app-name",{appName:String(i)});if(n||(n=f1()),!n)throw Pn.create("no-options");const s=ka.get(i);if(s)if(Xi(n,s.options)){if(Xi(r,s.config))return s;throw Pn.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(r)})}else throw Pn.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(n)});const a=new M_(i);for(const l of Wd.values())a.addComponent(l);const o=new NA(n,r,a);return ka.set(i,o),o}function Tl(e=Hd){const t=ka.get(e);if(!t&&e===Hd&&f1())return Cl();if(!t)throw Pn.create("no-app",{appName:e});return t}function Gd(){return Array.from(ka.values())}function Fi(e,t,n){let r=_A[e]??e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$n.warn(a.join(" "));return}Sa(new Qi(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA="firebase-heartbeat-database",RA=1,Ea="firebase-heartbeat-store";let cc=null;function x1(){return cc||(cc=Y_(PA,RA,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ea)}catch(n){console.warn(n)}}}}).catch(e=>{throw Pn.create("idb-open",{originalErrorMessage:e.message})})),cc}async function jA(e){try{const n=(await x1()).transaction(Ea),r=await n.objectStore(Ea).get(v1(e));return await n.done,r}catch(t){if(t instanceof _r)$n.warn(t.message);else{const n=Pn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$n.warn(n.message)}}}async function _g(e,t){try{const r=(await x1()).transaction(Ea,"readwrite");await r.objectStore(Ea).put(t,v1(e)),await r.done}catch(n){if(n instanceof _r)$n.warn(n.message);else{const r=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function v1(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=1024,LA=30;class MA{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ag();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>LA){const a=zA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$n.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ag(),{heartbeatsToSend:r,unsentEntries:i}=OA(this._heartbeatsCache.heartbeats),s=c1(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return $n.warn(n),""}}}function Ag(){return new Date().toISOString().substring(0,10)}function OA(e,t=DA){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Ig(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ig(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FA{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return E_()?C_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return _g(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return _g(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ig(e){return c1(JSON.stringify({version:2,heartbeats:e})).length}function zA(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(e){Sa(new Qi("platform-logger",t=>new Z_(t),"PRIVATE")),Sa(new Qi("heartbeat",t=>new MA(t),"PRIVATE")),Fi($d,Cg,e),Fi($d,Cg,"esm2020"),Fi("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */UA("");var BA="firebase",VA="13.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fi(BA,VA,"app");function b1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $A=b1,w1=new za("auth","Firebase",b1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=new h1("@firebase/auth");function $o(e,...t){_l.logLevel<=be.WARN&&_l.warn(`Auth (${Ba}): ${e}`,...t)}function Ho(e,...t){_l.logLevel<=be.ERROR&&_l.error(`Auth (${Ba}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(e,...t){throw Bp(e,...t)}function sn(e,...t){return Bp(e,...t)}function pu(e,t,n){const r={...$A(),[t]:n};return new za("auth","Firebase",r).create(t,{appName:e.name})}function Kr(e){return pu(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function HA(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&wn(e,"argument-error"),pu(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bp(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return w1.create(e,...t)}function ne(e,t,...n){if(!e)throw Bp(t,...n)}function Rn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ho(t),new Error(t)}function Hn(e,t){e||Rn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.href)||""}function WA(){return Ng()==="http:"||Ng()==="https:"}function Ng(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WA()||w_()||"connection"in navigator)?navigator.onLine:!0}function qA(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t,n){this.shortDelay=t,this.longDelay=n,Hn(n>t,"Short delay should be less than long delay!"),this.isMobile=v_()||k_()}get(){return GA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(e,t){Hn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],XA=new Va(3e4,6e4);function $p(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function us(e,t,n,r,i={}){return S1(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const o=Ua({...a,key:e.config.apiKey}).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u={method:t,headers:l,...s};return b_()||(u.referrerPolicy="strict-origin-when-cross-origin"),e.emulatorConfig&&zp(e.emulatorConfig.host)&&(u.credentials="include"),k1.fetch()(await E1(e,e.config.apiHost,n,o),u)})}async function S1(e,t,n){e._canInitEmulator=!1;const r={...KA,...t};try{const i=new ZA(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw bo(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[l,u]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw bo(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw bo(e,"email-already-in-use",a);if(l==="USER_DISABLED")throw bo(e,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw pu(e,d,u);wn(e,d)}}catch(i){if(i instanceof _r)throw i;wn(e,"network-request-failed",{message:String(i)})}}async function QA(e,t,n,r,i={}){const s=await us(e,t,n,r,i);return"mfaPendingCredential"in s&&wn(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function E1(e,t,n,r){const i=`${t}${n}?${r}`,s=e,a=s.config.emulator?Vp(e.config,i):`${e.config.apiScheme}://${i}`;return YA.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}class ZA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),XA.get())})}}function bo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=sn(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(e,t){return us(e,"POST","/v1/accounts:delete",t)}async function Al(e,t){return us(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function eI(e,t=!1){const n=ls(e),r=await n.getIdToken(t),i=Hp(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Gs(dc(i.auth_time)),issuedAtTime:Gs(dc(i.iat)),expirationTime:Gs(dc(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function dc(e){return Number(e)*1e3}function Hp(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ho("JWT malformed, contained fewer than 3 sections"),null;try{const i=d1(n);return i?JSON.parse(i):(Ho("Failed to decode base64 JWT payload"),null)}catch(i){return Ho("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Pg(e){const t=Hp(e);return ne(t,"internal-error"),ne(typeof t.exp<"u","internal-error"),ne(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ca(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw C1(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function C1(e){return e instanceof _r?e.code==="auth/user-disabled"||e.code==="auth/user-token-expired":!1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gs(this.lastLoginAt),this.creationTime=Gs(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Il(e){var f;const t=e.auth,n=await e.getIdToken(),r=await Ca(e,Al(t,{idToken:n}));ne(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?T1(i.providerUserInfo):[],a=rI(e.providerData,s),o=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),u=o?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Kd(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function nI(e){const t=ls(e);await Il(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function rI(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function T1(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iI(e,t){const n=await S1(e,{},async()=>{const r=Ua({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=await E1(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:o,body:r};return e.emulatorConfig&&zp(e.emulatorConfig.host)&&(l.credentials="include"),k1.fetch()(a,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function sI(e,t){return us(e,"POST","/v2/accounts:revokeToken",$p(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ne(t.idToken,"internal-error"),ne(typeof t.idToken<"u","internal-error"),ne(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Pg(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){ne(t.length!==0,"internal-error");const n=Pg(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await iI(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new zi;return r&&(ne(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new zi,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(e,t){ne(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class en{constructor({uid:t,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new tI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Kd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Ca(this,this.stsTokenManager.getToken(this.auth,t));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return eI(this,t)}reload(){return nI(this)}_assign(t){this!==t&&(ne(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new en({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Il(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mn(this.auth.app))return Promise.reject(Kr(this.auth));const t=await this.getIdToken();return await Ca(this,JA(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,a=n.photoURL??void 0,o=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:p,isAnonymous:h,providerData:x,stsTokenManager:v}=n;ne(f&&v,t,"internal-error");const b=zi.fromJSON(this.name,v);ne(typeof f=="string",t,"internal-error"),Yn(r,t.name),Yn(i,t.name),ne(typeof p=="boolean",t,"internal-error"),ne(typeof h=="boolean",t,"internal-error"),Yn(s,t.name),Yn(a,t.name),Yn(o,t.name),Yn(l,t.name),Yn(u,t.name),Yn(d,t.name);const g=new en({uid:f,auth:t,email:i,emailVerified:p,displayName:r,isAnonymous:h,photoURL:a,phoneNumber:s,tenantId:o,stsTokenManager:b,createdAt:u,lastLoginAt:d});return x&&Array.isArray(x)&&(g.providerData=x.map(m=>({...m}))),l&&(g._redirectEventId=l),g}static async _fromIdTokenResponse(t,n,r=!1){const i=new zi;i.updateFromServerResponse(n);const s=new en({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Il(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];ne(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?T1(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),o=new zi;o.updateFromIdToken(r);const l=new en({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:a}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Kd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=new Map;function jn(e){Hn(e instanceof Function,"Expected a class definition");let t=Rg.get(e);return t?(Hn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Rg.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}_1.type="NONE";const jg=_1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(e,t,n){return`firebase:${e}:${t}:${n}`}class Yr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Wo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Wo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Al(this.auth,{idToken:t}).catch(()=>{});return n?en._fromGetAccountInfoResponse(this.auth,n,t):null}return en._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(t,n,r="authUser"){if(!n.length)return new Yr(jn(jg),t,r);const i=(await Promise.all(n.map(async u=>{try{if(await u._isAvailable())return u}catch{return}}))).filter(u=>u);let s=i[0]||jn(jg);const a=Wo(r,t.config.apiKey,t.name);let o=null;for(const u of n)try{const d=await u._get(a);if(d){let f;if(typeof d=="string"){const p=await Al(t,{idToken:d}).catch(()=>{});if(!p)break;f=await en._fromGetAccountInfoResponse(t,p,d)}else f=en._fromJSON(t,d);u!==s&&(o=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Yr(s,t,r):(s=l[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(a)}catch{}})),new Yr(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(P1(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(A1(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(j1(t))return"Blackberry";if(D1(t))return"Webos";if(I1(t))return"Safari";if((t.includes("chrome/")||N1(t))&&!t.includes("edge/"))return"Chrome";if(R1(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function A1(e=pt()){return/firefox\//i.test(e)}function I1(e=pt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function N1(e=pt()){return/crios\//i.test(e)}function P1(e=pt()){return/iemobile/i.test(e)}function R1(e=pt()){return/android/i.test(e)}function j1(e=pt()){return/blackberry/i.test(e)}function D1(e=pt()){return/webos/i.test(e)}function Wp(e=pt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function aI(e=pt()){var t;return Wp(e)&&!!((t=window.navigator)!=null&&t.standalone)}function oI(){return S_()&&document.documentMode===10}function L1(e=pt()){return Wp(e)||R1(e)||D1(e)||j1(e)||/windows phone/i.test(e)||P1(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(e,t=[]){let n;switch(e){case"Browser":n=Dg(pt());break;case"Worker":n=`${Dg(pt())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ba}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,o)=>{try{const l=t(s);a(l)}catch(l){o(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uI(e,t={}){return us(e,"GET","/v2/passwordPolicy",$p(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=6;class dI{constructor(t){var r;const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??cI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lg(this),this.idTokenSubscription=new Lg(this),this.beforeStateQueue=new lI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=w1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=jn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted){try{this.persistenceManager=await Yr.create(this,t)}catch(a){$o(`Failed to initialize persistence: ${a}`),this.persistenceManager=await Yr.create(this,[])}finally{(r=this._resolvePersistenceManagerAvailable)==null||r.call(this)}if(!this._deleted){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(n)}catch(a){$o(`Failed to initialize current user: ${a}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Al(this,{idToken:t}),r=await en._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var s;if(mn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(s=this.redirectUser)==null?void 0:s._redirectEventId,o=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===o)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Il(t)}catch(n){if(C1(n))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=qA()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(mn(this.app))return Promise.reject(Kr(this));const n=t?ls(t):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&ne(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return mn(this.app)?Promise.reject(Kr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return mn(this.app)?Promise.reject(Kr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await uI(this),n=new dI(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new za("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await sI(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&jn(t)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Yr.create(this,[jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}).catch(l=>{if(!a)if(typeof n!="function"&&n.error)n.error(l);else if(r)r(l);else throw l}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{a=!0,l()}}else{const l=t.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(t){if(this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,this.persistenceManager)try{t?await this.persistenceManager.setCurrentUser(t):await this.persistenceManager.removeCurrentUser()}catch(n){const r=(n==null?void 0:n.message)||String(n),i=pu(this,"internal-error",`An internal AuthError has occurred: ${r}`);throw i.customData={originalError:n},i}}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=M1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var n;if(mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return t!=null&&t.error&&$o(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function hu(e){return ls(e)}class Lg{constructor(t){this.auth=t,this.observer=null,this.addObserver=I_(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pI(e){Gp=e}function hI(e){return Gp.loadJS(e)}function mI(){return Gp.gapiScript}function gI(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(e,t){const n=y1(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Xi(s,t??{}))return i;wn(i,"already-initialized")}return n.initialize({options:t})}function xI(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jn);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function vI(e,t,n){const r=hu(e);ne(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=O1(t),{host:a,port:o}=bI(t),l=o===null?"":`:${o}`,u={url:`${s}//${a}${l}/`},d=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(Xi(u,r.config.emulator)&&Xi(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,zp(a)?R_(`${s}//${a}${l}`):wI()}function O1(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function bI(e){const t=O1(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Mg(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Mg(a)}}}function Mg(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function wI(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(t){return Rn("not implemented")}_linkToIdToken(t,n){return Rn("not implemented")}_getReauthenticationResolver(t){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(e,t){return QA(e,"POST","/v1/accounts:signInWithIdp",$p(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI="http://localhost";class ii extends F1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new ii(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const a=new ii(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Ui(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Ui(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ui(t,n)}buildRequest(){const t={requestUri:kI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ua(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a extends qp{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends $a{constructor(){super("facebook.com")}static credential(t){return ii._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return sr.credentialFromTaggedObject(t)}static credentialFromError(t){return sr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return sr.credential(t.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends $a{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return ii._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com";Jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends $a{constructor(){super("github.com")}static credential(t){return ii._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ar.credentialFromTaggedObject(t)}static credentialFromError(t){return ar.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ar.credential(t.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends $a{constructor(){super("twitter.com")}static credential(t,n){return ii._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return or.credentialFromTaggedObject(t)}static credentialFromError(t){return or.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return or.credential(n,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await en._fromIdTokenResponse(t,r,i),a=Og(r);return new Zi({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Og(r);return new Zi({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Og(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl extends _r{constructor(t,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Nl.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Nl(t,n,r,i)}}function z1(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Nl._fromErrorAndOperation(e,s,t,r):s})}async function SI(e,t,n=!1){const r=await Ca(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Zi._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(e,t,n=!1){const{auth:r}=e;if(mn(r.app))return Promise.reject(Kr(r));const i="reauthenticate";try{const s=await Ca(e,z1(r,i,t,e),n);ne(s.idToken,r,"internal-error");const a=Hp(s.idToken);ne(a,r,"internal-error");const{sub:o}=a;return ne(e.uid===o,r,"user-mismatch"),Zi._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&wn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CI(e,t,n=!1){if(mn(e.app))return Promise.reject(Kr(e));const r="signIn",i=await z1(e,r,t),s=await Zi._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function TI(e,t,n,r){return ls(e).onIdTokenChanged(t,n,r)}function _I(e,t,n){return ls(e).beforeAuthStateChanged(t,n)}const Pl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pl,"1"),this.storage.removeItem(Pl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=1e3,II=10;class B1 extends U1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=L1(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);oI()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,II):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},AI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}B1.type="LOCAL";const NI=B1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1 extends U1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}V1.type="SESSION";const $1=V1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new mu(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async u=>u(n.origin,s)),l=await PI(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,l)=>{const u=Kp("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(p.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){return window}function jI(e){xn().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(){return typeof xn().WorkerGlobalScope<"u"&&typeof xn().importScripts=="function"}async function DI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LI(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)==null?void 0:e.controller)||null}function MI(){return H1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1="firebaseLocalStorageDb",OI=1,Rl="firebaseLocalStorage",G1="fbase_key";class Ha{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gu(e,t){return e.transaction([Rl],t?"readwrite":"readonly").objectStore(Rl)}function FI(){const e=indexedDB.deleteDatabase(W1);return new Ha(e).toPromise()}function q1(){const e=indexedDB.open(W1,OI);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Rl,{keyPath:G1})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Rl)?t(r):(r.close(),await FI(),t(await q1()))})})}async function Fg(e,t,n){const r=gu(e,!0).put({[G1]:t,value:n});return new Ha(r).toPromise()}async function zI(e,t){const n=gu(e,!1).get(t),r=await new Ha(n).toPromise();return r===void 0?null:r.value}function zg(e,t){const n=gu(e,!0).delete(t);return new Ha(n).toPromise()}const UI=800,BI=3;class K1{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(t=>t.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=q1(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>BI)throw r;if(this.dbPromise){const i=this.dbPromise;this.dbPromise=null;try{(await i).close()}catch{}}}}async initializeServiceWorkerMessaging(){return H1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mu._getInstance(MI()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await DI(),!this.activeServiceWorker)return;this.sender=new RI(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(n=t[0])!=null&&n.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||LI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async t=>{await Fg(t,Pl,"1"),await zg(t,Pl)}),!0):!1}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Fg(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>zI(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>zg(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){if(this.isClosing)return[];try{const t=await this._withRetries(i=>{const s=gu(i,!1).getAll();return new Ha(s).toPromise()});if(this.isClosing)return[];if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}catch(t){return this.isClosing||$o(`Firebase Auth cross-tab polling failed with error: ${t}`),[]}}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}K1.type="LOCAL";const VI=K1;new Va(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(e,t){return t?jn(t):(ne(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp extends F1{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ui(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ui(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ui(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function $I(e){return CI(e.auth,new Yp(e),e.bypassAuthState)}function HI(e){const{auth:t,user:n}=e;return ne(n,t,"internal-error"),EI(n,new Yp(e),e.bypassAuthState)}async function WI(e){const{auth:t,user:n}=e;return ne(n,t,"internal-error"),SI(n,new Yp(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return $I;case"linkViaPopup":case"linkViaRedirect":return WI;case"reauthViaPopup":case"reauthViaRedirect":return HI;default:wn(this.auth,"internal-error")}}resolve(t){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=new Va(2e3,1e4);async function qI(e,t,n){if(mn(e.app))return Promise.reject(sn(e,"operation-not-supported-in-this-environment"));const r=hu(e);HA(e,t,qp);const i=Y1(r,n);return new Hr(r,"signInViaPopup",t,i).executeNotNull()}class Hr extends X1{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hr.currentPopupAction&&Hr.currentPopupAction.cancel(),Hr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ne(t,this.auth,"internal-error"),t}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const t=Kp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,GI.get())};t()}}Hr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="pendingRedirect",Go=new Map;class YI extends X1{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Go.get(this.auth._key());if(!t){try{const r=await XI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Go.set(this.auth._key(),t)}return this.bypassAuthState||Go.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XI(e,t){const n=JI(t),r=ZI(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function QI(e,t){Go.set(e._key(),t)}function ZI(e){return jn(e._redirectPersistence)}function JI(e){return Wo(KI,e.config.apiKey,e.name)}async function eN(e,t,n=!1){if(mn(e.app))return Promise.reject(Kr(e));const r=hu(e),i=Y1(r,t),a=await new YI(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=10*60*1e3;class nN{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!rN(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Q1(t)){const i=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=tN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ug(t))}saveEventToCache(t){this.cachedEventUids.add(Ug(t)),this.lastProcessedEventTime=Date.now()}}function Ug(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Q1({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function rN(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Q1(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iN(e,t={}){return us(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aN=/^https?/;async function oN(e){if(e.config.emulator)return;const{authorizedDomains:t}=await iN(e);for(const n of t)try{if(lN(n))return}catch{}wn(e,"unauthorized-domain")}function lN(e){const t=qd(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!aN.test(n))return!1;if(sN.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=new Va(3e4,6e4);function Bg(){const e=xn().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function cN(e){return new Promise((t,n)=>{var i,s,a;function r(){Bg(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Bg(),n(sn(e,"network-request-failed"))},timeout:uN.get()})}if((s=(i=xn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)t(gapi.iframes.getContext());else if((a=xn().gapi)!=null&&a.load)r();else{const o=gI("iframefcb");return xn()[o]=()=>{gapi.load?r():n(sn(e,"network-request-failed"))},hI(`${mI()}?onload=${o}`).catch(l=>n(l))}}).catch(t=>{throw qo=null,t})}let qo=null;function dN(e){return qo=qo||cN(e),qo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN=new Va(5e3,15e3),pN="__/auth/iframe",hN="emulator/auth/iframe",mN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yN(e){const t=e.config;ne(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Vp(t,hN):`https://${e.config.authDomain}/${pN}`,r={apiKey:t.apiKey,appName:e.name,v:Ba},i=gN.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ua(r).slice(1)}`}async function xN(e){const t=await dN(e),n=xn().gapi;return ne(n,e,"internal-error"),t.open({where:document.body,url:yN(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=sn(e,"network-request-failed"),o=xn().setTimeout(()=>{s(a)},fN.get());function l(){xn().clearTimeout(o),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bN=500,wN=600,kN="_blank",SN="http://localhost";class Vg{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function EN(e,t,n,r=bN,i=wN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l={...vN,width:r.toString(),height:i.toString(),top:s,left:a},u=pt().toLowerCase();n&&(o=N1(u)?kN:n),A1(u)&&(t=t||SN,l.scrollbars="yes");const d=Object.entries(l).reduce((p,[h,x])=>`${p}${h}=${x},`,"");if(aI(u)&&o!=="_self")return CN(t||"",o),new Vg(null);const f=window.open(t||"",o,d);ne(f,e,"popup-blocked");try{f.focus()}catch{}return new Vg(f)}function CN(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN="__/auth/handler",_N="emulator/auth/handler",AN=encodeURIComponent("fac");async function $g(e,t,n,r,i,s){ne(e.config.authDomain,e,"auth-domain-config-required"),ne(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ba,eventId:i};if(t instanceof qp){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",A_(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,f]of Object.entries({}))a[d]=f}if(t instanceof $a){const d=t.getScopes().filter(f=>f!=="");d.length>0&&(a.scopes=d.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const d of Object.keys(o))o[d]===void 0&&delete o[d];const l=await e._getAppCheckToken(),u=l?`#${AN}=${encodeURIComponent(l)}`:"";return`${IN(e)}?${Ua(o).slice(1)}${u}`}function IN({config:e}){return e.emulator?Vp(e,_N):`https://${e.authDomain}/${TN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc="webStorageSupport";class NN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$1,this._completeRedirectFn=eN,this._overrideRedirectResult=QI}async _openPopup(t,n,r,i){var a;Hn((a=this.eventManagers[t._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await $g(t,n,r,qd(),i);return EN(t,s,Kp())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await $g(t,n,r,qd(),i);return jI(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Hn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await xN(t),r=new nN(t);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(fc,{type:fc},i=>{var a;const s=(a=i==null?void 0:i[0])==null?void 0:a[fc];s!==void 0&&n(!!s),wn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oN(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return L1()||I1()||Wp()}}const PN=NN;var Hg="@firebase/auth",Wg="1.13.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DN(e){Sa(new Qi("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:M1(e)},u=new fI(r,i,s,l);return xI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Sa(new Qi("auth-internal",t=>{const n=hu(t.getProvider("auth").getImmediate());return(r=>new RN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fi(Hg,Wg,jN(e)),Fi(Hg,Wg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=5*60,MN=p1("authIdTokenMaxAge")||LN;let Gg=null;const ON=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>MN)return;const i=n==null?void 0:n.token;Gg!==i&&(Gg=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Yd(e=Tl()){const t=y1(e,"auth");if(t.isInitialized())return t.getImmediate();const n=yI(e,{popupRedirectResolver:PN,persistence:[VI,NI,$1]}),r=p1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=ON(s.toString());_I(n,a,()=>a(n.currentUser)),TI(n,o=>a(o))}}const i=y_("auth");return i&&vI(n,`http://${i}`),n}function FN(){var e;return((e=document.getElementsByTagName("head"))==null?void 0:e[0])??document}pI({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",FN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DN("Browser");const Dn={apiKey:"AIzaSyCAxS9gkP7rlF15piWD4xHng6cRcfv-YVI",authDomain:"elizaaivoice.firebaseapp.com",projectId:"elizaaivoice",storageBucket:"elizaaivoice.firebasestorage.app",messagingSenderId:"826705071135",appId:"1:826705071135:web:b6997ba92c34349ae9992a"};function Z1(){return!!(Dn.apiKey&&Dn.authDomain&&Dn.projectId&&!Dn.apiKey.includes("YOUR_"))}let Ci=null,Rs=null,nr=null;if(Z1())try{Ci=Gd().length>0?Tl():Cl(Dn),Rs=Yd(Ci),nr=new Jt,nr.setCustomParameters({prompt:"select_account"})}catch(e){console.error("Failed to initialize Firebase:",e)}async function zN(){var e;if(!Z1())if(!Ci&&Dn.apiKey&&Dn.projectId)Ci=Gd().length>0?Tl():Cl(Dn),Rs=Yd(Ci),nr=new Jt,nr.setCustomParameters({prompt:"select_account"});else throw new Error("Firebase is not configured. Please add your Firebase configuration (VITE_FIREBASE_API_KEY, etc.) to .env");Rs||(Rs=Yd(Ci||(Gd().length>0?Tl():Cl(Dn)))),nr||(nr=new Jt,nr.setCustomParameters({prompt:"select_account"}));try{const n=(await qI(Rs,nr)).user,r=await n.getIdToken(!0);return{user:n,email:n.email,displayName:n.displayName||((e=n.email)==null?void 0:e.split("@")[0])||"User",photoURL:n.photoURL||"",idToken:r}}catch(t){if(t.code==="auth/popup-closed-by-user"||t.code==="auth/cancelled-popup-request"){const n=new Error("Sign-in cancelled. Please try again.");throw n.code="CANCELLED",n}throw t.code==="auth/popup-blocked"?new Error("Popup blocked by browser. Please allow popups for this site and try again."):t.code==="auth/unauthorized-domain"?new Error("This domain is not authorized in Firebase Console (Authentication > Settings > Authorized domains)."):new Error(t.message||"Failed to sign in with Google.")}}const UN=()=>c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",style:{flexShrink:0},children:[c.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),c.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),c.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"}),c.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"})]});function BN({onAccessGranted:e,onShowFeedback:t,isModal:n=!1,onClose:r}){const[i,s]=E.useState(!1),[a,o]=E.useState(""),[l,u]=E.useState(null);E.useEffect(()=>{if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}},[]);const d=async()=>{o("");try{sessionStorage.removeItem("eliza_pending_q")}catch{}s(!0);try{const p=await zN();if(!p||!p.email)throw new Error("No Google email account received from sign-in.");const h=await wa.googleLogin({email:p.email,name:p.displayName,picture:p.photoURL,credential:p.idToken});h.blocked?(u(h),e&&e(h)):h.allowed?e&&e(h):o(h.message||"Access not available at this time.")}catch(p){p.code==="CANCELLED"?o(""):o(p.message||"Google sign-in failed. Please try again.")}finally{s(!1)}},f=p=>{if(!p)return"20 days from period start";try{return new Date(p).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return p}};return c.jsxs("div",{className:`email-gate-container ${n?"is-modal":""}`,children:[c.jsx("div",{className:"gate-glow","aria-hidden":"true"}),c.jsxs("div",{className:"gate-card",children:[r&&n&&c.jsx("button",{className:"btn-close-modal",onClick:r,"aria-label":"Close",children:c.jsx(It,{size:16})}),c.jsxs("div",{className:"brand-header",children:[c.jsx("div",{className:"brand-icon",children:c.jsx(Fd,{size:20,className:"icon-pulse"})}),c.jsxs("div",{className:"brand-text",children:[c.jsxs("h2",{children:["ELIZA",c.jsx("span",{children:"AI"})]}),c.jsx("span",{children:"VOICE INTELLIGENCE TRIAL ACCESS"})]})]}),l?c.jsxs("div",{className:"limit-block-view",children:[c.jsx("div",{className:"limit-icon-circle",children:c.jsx(Dp,{size:28})}),c.jsx("h3",{children:"Your limit is over."}),c.jsx("p",{className:"limit-thanks",children:"Thank you for your consideration."}),c.jsx("p",{className:"limit-text",children:"Please provide a review and feedback to help us improve."}),c.jsxs("div",{className:"blocked-date-badge",children:[c.jsx("span",{children:"Access restricted until"}),c.jsx("b",{children:f(l.blockedUntil)})]}),c.jsx("button",{type:"button",className:"btn-feedback-primary",onClick:()=>t&&t(l),children:"Give Feedback"}),c.jsx("button",{type:"button",className:"btn-link",onClick:()=>{u(null),d()},children:"Sign in with a different Google account"})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"gate-copy",children:[c.jsx("div",{className:"trial-pill",children:"FREE TRIAL ACCESS"}),c.jsx("h3",{children:"Start your conversation"}),c.jsxs("p",{children:["Authenticate with Google to verify your email and continue your free trial. Each account receives ",c.jsx("b",{children:"3 questions per 20-day period"}),"."]})]}),a&&c.jsxs("div",{className:"error-alert",children:[c.jsx(Rp,{size:15}),c.jsx("span",{children:a})]}),c.jsx("div",{className:"google-auth-container",children:c.jsx("button",{type:"button",className:"btn-google-direct",onClick:d,disabled:i,children:i?c.jsxs("span",{className:"spinner-text",children:[c.jsx("span",{className:"gate-spinner"})," Connecting to Google..."]}):c.jsxs(c.Fragment,{children:[c.jsx(UN,{}),c.jsx("span",{children:"Sign in with Google"})]})})}),c.jsxs("div",{className:"gate-perks",children:[c.jsxs("div",{className:"perk-item",children:[c.jsx(zd,{size:13}),c.jsx("span",{children:"Zero spam · Privacy guarded"})]}),c.jsxs("div",{className:"perk-item",children:[c.jsx(Op,{size:13}),c.jsx("span",{children:"3 questions · 20-day cycle"})]})]}),c.jsxs("div",{className:"developer-showcase-box",children:[c.jsxs("div",{className:"dev-box-top",children:[c.jsx(El,{size:13,className:"dev-icon"}),c.jsx("span",{children:"DEVELOPED BY AKHIL THADAKA"})]}),c.jsx("p",{children:"Full-Stack & AI Voice Developer · Actively searching for better opportunities, ready to work, and available for freelance projects."}),c.jsxs("a",{href:"tel:9121751697",className:"dev-contact-pill",children:[c.jsx(va,{size:12}),c.jsxs("span",{children:["Contact: ",c.jsx("b",{children:"9121751697"})]})]})]})]})]}),c.jsx("style",{children:`
        .email-gate-container {
          position: fixed;
          inset: 0;
          background: #080d0b;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px;
          z-index: 10000;
          font-family: 'Manrope', system-ui, -apple-system, sans-serif;
          color: #e2eee6;
          overflow: hidden;
        }
        .email-gate-container.is-modal {
          background: rgba(8, 13, 11, 0.92);
          backdrop-filter: blur(16px);
        }
        .gate-glow {
          position: absolute;
          width: 440px;
          height: 440px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(192, 132, 252, 0.12), rgba(120, 246, 168, 0.04) 50%, transparent 70%);
          pointer-events: none;
          filter: blur(50px);
        }
        .gate-card {
          position: relative;
          background: #0b120e;
          border: 1px solid rgba(192, 132, 252, 0.28);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(192, 132, 252, 0.08);
          border-radius: 18px;
          width: 100%;
          max-width: 440px;
          max-height: 90vh;
          overflow-y: auto;
          padding: clamp(16px, 2.8vh, 24px) clamp(16px, 3vw, 24px);
          backdrop-filter: blur(16px);
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        .gate-card::-webkit-scrollbar {
          width: 5px;
        }
        .gate-card::-webkit-scrollbar-thumb {
          background: rgba(192, 132, 252, 0.25);
          border-radius: 3px;
        }
        .btn-close-modal {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(226, 238, 230, 0.6);
          border-radius: 50%;
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-close-modal:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.15);
        }
        .brand-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }
        .brand-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c084fc;
        }
        .icon-pulse {
          animation: pulse 2.5s infinite ease-in-out;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.06); }
        }
        .brand-text h2 {
          font-size: 16px;
          letter-spacing: 1.5px;
          font-weight: 800;
          margin: 0;
          color: #ffffff;
        }
        .brand-text h2 span {
          color: #c084fc;
          margin-left: 2px;
        }
        .brand-text span {
          display: block;
          font-size: 9px;
          letter-spacing: 1.2px;
          color: rgba(226, 238, 230, 0.5);
          font-family: 'DM Mono', monospace;
          margin-top: 1px;
        }
        .trial-pill {
          display: inline-block;
          font-size: 9px;
          font-family: 'DM Mono', monospace;
          letter-spacing: 1.2px;
          color: #c084fc;
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.28);
          padding: 2px 7px;
          border-radius: 4px;
          margin-bottom: 8px;
        }
        .gate-copy h3 {
          font-size: clamp(17px, 2.2vw, 20px);
          font-weight: 800;
          margin: 0 0 6px 0;
          color: #ffffff;
          letter-spacing: -0.3px;
        }
        .gate-copy p {
          font-size: clamp(12px, 1.4vw, 13px);
          line-height: 1.45;
          color: rgba(226, 238, 230, 0.72);
          margin: 0 0 14px 0;
        }
        .gate-copy p b {
          color: #e2eee6;
          font-weight: 600;
        }
        .error-alert {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.35);
          border-radius: 8px;
          padding: 8px 12px;
          color: #fca5a5;
          font-size: 12px;
          margin-bottom: 12px;
        }
        .google-auth-container {
          margin-bottom: 18px;
        }
        .btn-google-direct {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 16px;
          background: #ffffff;
          color: #1f2937;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        .btn-google-direct:hover {
          background: #f9fafb;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
        }
        .btn-google-direct:active {
          transform: translateY(0);
        }
        .gate-spinner {
          display: inline-block;
          width: 14px;
          height: 14px;
          border: 2px solid rgba(31, 41, 55, 0.3);
          border-top-color: #1f2937;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        .gate-spinner-light {
          display: inline-block;
          width: 13px;
          height: 13px;
          border: 2px solid rgba(11, 18, 14, 0.3);
          border-top-color: #0b120e;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .gate-perks {
          display: flex;
          justify-content: space-between;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          margin-bottom: 12px;
          font-size: 11px;
          color: rgba(226, 238, 230, 0.65);
        }
        .perk-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .perk-item svg {
          color: #c084fc;
        }

        /* Developer Showcase Box (Image 2 Requirement) */
        .developer-showcase-box {
          background: rgba(192, 132, 252, 0.06);
          border: 1px solid rgba(192, 132, 252, 0.22);
          border-radius: 11px;
          padding: 10px 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .dev-box-top {
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.8px;
          font-weight: 700;
          color: #c084fc;
        }
        .dev-icon {
          color: #c084fc;
        }
        .developer-showcase-box p {
          margin: 0;
          font-size: 11px;
          line-height: 1.35;
          color: rgba(226, 238, 230, 0.7);
        }
        .dev-contact-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.35);
          color: #e2eee6;
          padding: 3px 8px;
          border-radius: 5px;
          font-size: 11px;
          text-decoration: none;
          align-self: flex-start;
          transition: all 0.2s;
        }
        .dev-contact-pill:hover {
          background: rgba(192, 132, 252, 0.22);
          border-color: #c084fc;
          color: #ffffff;
        }
        .dev-contact-pill b {
          color: #c084fc;
        }

        /* Limit Blocked View */
        .limit-block-view {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .limit-icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.35);
          color: #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }
        .limit-block-view h3 {
          font-size: clamp(18px, 2.4vw, 21px);
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 5px 0;
        }
        .limit-thanks {
          font-size: 13px;
          color: #c084fc;
          font-weight: 600;
          margin: 0 0 6px 0;
        }
        .limit-text {
          font-size: 12px;
          color: rgba(226, 238, 230, 0.75);
          margin: 0 0 14px 0;
          line-height: 1.45;
        }
        .blocked-date-badge {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 7px 12px;
          margin-bottom: 14px;
          font-size: 11.5px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .blocked-date-badge span {
          color: rgba(226, 238, 230, 0.5);
          font-size: 9.5px;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }
        .blocked-date-badge b {
          color: #fbbf24;
          font-family: 'DM Mono', monospace;
        }
        .btn-feedback-primary {
          width: 100%;
          padding: 10px 16px;
          background: #c084fc;
          color: #0b120e;
          border: none;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          margin-bottom: 8px;
        }
        .btn-feedback-primary:hover {
          background: #d8b4fe;
        }
        .btn-link {
          background: none;
          border: none;
          color: rgba(226, 238, 230, 0.55);
          font-size: 11px;
          cursor: pointer;
          text-decoration: underline;
        }
        .btn-link:hover {
          color: #e2eee6;
        }
      `})]})}function VN({blockedUntil:e,onGiveFeedback:t}){E.useEffect(()=>{if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}},[]);const n=r=>{if(!r)return"20 days from period start";try{return new Date(r).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return r}};return c.jsxs("div",{className:"limit-exceeded-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"limit-title",children:[c.jsxs("div",{className:"limit-exceeded-modal",children:[c.jsx("div",{className:"limit-icon-wrap",children:c.jsx(Xb,{size:26,className:"limit-icon"})}),c.jsx("h2",{id:"limit-title",className:"limit-title",children:"Your limit is over."}),c.jsx("p",{className:"limit-consideration",children:"Thank you for your consideration."}),c.jsx("p",{className:"limit-instructions",children:"Please provide a review and feedback to help us improve."}),c.jsxs("div",{className:"limit-date-box",children:[c.jsxs("div",{className:"date-label",children:[c.jsx(Dp,{size:12}),c.jsx("span",{children:"Next access cycle available"})]}),c.jsx("div",{className:"date-val",children:n(e)})]}),c.jsxs("button",{type:"button",className:"btn-give-feedback",onClick:t,children:[c.jsx(Qb,{size:16}),c.jsx("span",{children:"Give Feedback"})]}),c.jsxs("div",{className:"developer-showcase-box",children:[c.jsxs("div",{className:"dev-box-top",children:[c.jsx(El,{size:12,className:"dev-icon"}),c.jsx("span",{children:"DEVELOPED BY AKHIL THADAKA"})]}),c.jsx("p",{children:"Full-Stack & AI Voice Developer · Actively searching for better opportunities, ready to work, and available for freelance projects."}),c.jsxs("a",{href:"tel:9121751697",className:"dev-contact-pill",children:[c.jsx(va,{size:11}),c.jsxs("span",{children:["Contact: ",c.jsx("b",{children:"9121751697"})]})]})]})]}),c.jsx("style",{children:`
        .limit-exceeded-overlay {
          position: fixed;
          inset: 0;
          background: rgba(8, 13, 11, 0.94);
          backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px;
          z-index: 9999;
          font-family: 'Manrope', system-ui, -apple-system, sans-serif;
          color: #e2eee6;
          overflow: hidden;
        }
        .limit-exceeded-modal {
          background: #0b120e;
          border: 1px solid rgba(192, 132, 252, 0.35);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(192, 132, 252, 0.1);
          border-radius: 18px;
          padding: clamp(16px, 2.8vh, 24px) clamp(16px, 2.8vw, 24px);
          max-width: 430px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .limit-exceeded-modal::-webkit-scrollbar {
          width: 5px;
        }
        .limit-exceeded-modal::-webkit-scrollbar-thumb {
          background: rgba(192, 132, 252, 0.25);
          border-radius: 3px;
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .limit-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.35);
          color: #c084fc;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px auto;
        }
        .limit-title {
          font-size: clamp(20px, 2.5vw, 23px);
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 6px 0;
          letter-spacing: -0.3px;
        }
        .limit-consideration {
          font-size: clamp(13px, 1.5vw, 14.5px);
          color: #e2eee6;
          margin: 0 0 4px 0;
          font-weight: 500;
        }
        .limit-instructions {
          font-size: clamp(11.5px, 1.4vw, 12.5px);
          color: rgba(226, 238, 230, 0.7);
          margin: 0 0 14px 0;
          line-height: 1.45;
        }
        .limit-date-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 10px;
          padding: 8px 12px;
          margin-bottom: 14px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .date-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          font-size: 10px;
          font-family: 'DM Mono', monospace;
          text-transform: uppercase;
          color: rgba(226, 238, 230, 0.5);
          letter-spacing: 0.5px;
        }
        .date-val {
          font-size: 12.5px;
          font-weight: 700;
          color: #c084fc;
        }
        .btn-give-feedback {
          width: 100%;
          padding: 11px 18px;
          background: #c084fc;
          color: #080d0b;
          border: none;
          border-radius: 10px;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          transition: all 0.2s;
          margin-bottom: 12px;
        }
        .btn-give-feedback:hover {
          background: #d8b4fe;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(192, 132, 252, 0.35);
        }

        /* Developer Showcase Box (Image 2 Replacement) */
        .developer-showcase-box {
          background: rgba(192, 132, 252, 0.06);
          border: 1px solid rgba(192, 132, 252, 0.22);
          border-radius: 10px;
          padding: 10px 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-align: left;
        }
        .dev-box-top {
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.8px;
          font-weight: 700;
          color: #c084fc;
        }
        .dev-icon {
          color: #c084fc;
        }
        .developer-showcase-box p {
          margin: 0;
          font-size: 11px;
          line-height: 1.35;
          color: rgba(226, 238, 230, 0.7);
        }
        .dev-contact-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.35);
          color: #e2eee6;
          padding: 3px 8px;
          border-radius: 5px;
          font-size: 11px;
          text-decoration: none;
          align-self: flex-start;
          transition: all 0.2s;
        }
        .dev-contact-pill:hover {
          background: rgba(192, 132, 252, 0.22);
          border-color: #c084fc;
          color: #ffffff;
        }
        .dev-contact-pill b {
          color: #c084fc;
        }
      `})]})}const $N=["Voice Experience","Answer Quality","Freelance","Bug","Feature Request","Other"];function HN({email:e,onClose:t,onSubmitted:n}){const[r,i]=E.useState(5),[s,a]=E.useState(0),[o,l]=E.useState("Voice Experience"),[u,d]=E.useState(""),[f,p]=E.useState(!1),[h,x]=E.useState(""),[v,b]=E.useState(!1);E.useEffect(()=>{if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}},[]);const g=async m=>{m.preventDefault();const y=u.trim();if(!y||y.length<10){x("Please share at least 10 characters of feedback.");return}if(y.length>2e3){x("Feedback message must not exceed 2000 characters.");return}x(""),p(!0);try{await wa.submitFeedback({rating:r,category:o,message:y}),b(!0),n&&n()}catch(S){x(S.message||"Failed to submit feedback. Please try again.")}finally{p(!1)}};return c.jsxs("div",{className:"feedback-modal-overlay",role:"dialog","aria-modal":"true",children:[c.jsxs("div",{className:"feedback-card",children:[c.jsxs("div",{className:"feedback-top",children:[c.jsx("div",{className:"feedback-badge",children:"FEEDBACK & REVIEW"}),t&&c.jsx("button",{className:"btn-close",onClick:t,"aria-label":"Close",children:c.jsx(It,{size:16})})]}),v?c.jsxs("div",{className:"feedback-success-state",children:[c.jsx("div",{className:"success-icon-wrap",children:c.jsx(xa,{size:38})}),c.jsx("h3",{children:"Thank you for your feedback!"}),c.jsx("p",{children:"Your review has been saved in the database and helps us continuously refine Eliza AI."}),c.jsx("p",{className:"note-restriction",children:"The 20-day limit period remains active on your email until the scheduled expiration date."}),c.jsxs("div",{className:"developer-showcase-box",style:{marginTop:"14px"},children:[c.jsxs("div",{className:"dev-box-top",children:[c.jsx(El,{size:12,className:"dev-icon"}),c.jsx("span",{children:"DEVELOPED BY AKHIL THADAKA"})]}),c.jsx("p",{children:"Full-Stack & AI Voice Developer · Ready to work immediately · Available for freelance projects & better opportunities."}),c.jsxs("a",{href:"tel:9121751697",className:"dev-contact-pill",children:[c.jsx(va,{size:11}),c.jsxs("span",{children:["Contact: ",c.jsx("b",{children:"9121751697"})]})]})]}),t&&c.jsx("button",{type:"button",className:"btn-submit-action",onClick:t,style:{marginTop:"14px"},children:"Done"})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"feedback-intro",children:[c.jsx("h3",{children:"We appreciate your review"}),c.jsx("p",{children:"Tell us how your conversation went and what we can improve."})]}),c.jsxs("form",{onSubmit:g,className:"feedback-form",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Verified Account Email"}),c.jsx("input",{type:"email",value:e||"",disabled:!0,className:"input-disabled"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Rating"}),c.jsxs("div",{className:"star-rating-row",role:"radiogroup","aria-label":"Rating from 1 to 5 stars",children:[[1,2,3,4,5].map(m=>c.jsx("button",{type:"button",className:"star-btn",onClick:()=>i(m),onMouseEnter:()=>a(m),onMouseLeave:()=>a(0),"aria-label":`${m} star`,children:c.jsx(xr,{size:20,className:`star-icon ${m<=(s||r)?"filled":"empty"}`})},m)),c.jsxs("span",{className:"rating-text",children:[r===5&&"Excellent",r===4&&"Good",r===3&&"Fair",r===2&&"Needs work",r===1&&"Poor"]})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"category-select",children:"Category"}),c.jsx("select",{id:"category-select",value:o,onChange:m=>l(m.target.value),className:"select-category",children:$N.map(m=>c.jsx("option",{value:m,children:m},m))})]}),c.jsxs("div",{className:"form-group",children:[c.jsxs("label",{htmlFor:"feedback-message",children:[c.jsx("span",{children:"Your feedback"}),c.jsxs("small",{children:[u.length,"/2000"]})]}),c.jsx("textarea",{id:"feedback-message",value:u,onChange:m=>{d(m.target.value),h&&x("")},placeholder:"Share details on your conversation, voice quality, or ideas...",rows:3,maxLength:2e3,required:!0})]}),h&&c.jsxs("div",{className:"error-alert",children:[c.jsx(Rp,{size:14}),c.jsx("span",{children:h})]}),c.jsxs("div",{className:"form-actions",children:[t&&c.jsxs("button",{type:"button",className:"btn-back",onClick:t,children:[c.jsx(Np,{size:13}),c.jsx("span",{children:"Cancel"})]}),c.jsx("button",{type:"submit",className:"btn-submit-action",disabled:f||!u.trim(),children:f?c.jsx("span",{children:"Submitting..."}):c.jsxs(c.Fragment,{children:[c.jsx("span",{children:"Submit Feedback"}),c.jsx(t1,{size:14})]})})]})]}),c.jsxs("div",{className:"developer-showcase-box",style:{marginTop:"12px"},children:[c.jsxs("div",{className:"dev-box-top",children:[c.jsx(El,{size:12,className:"dev-icon"}),c.jsx("span",{children:"DEVELOPED BY AKHIL THADAKA"})]}),c.jsx("p",{children:"Full-Stack & AI Voice Developer · Ready to work immediately · Available for freelance projects & better opportunities."}),c.jsxs("a",{href:"tel:9121751697",className:"dev-contact-pill",children:[c.jsx(va,{size:11}),c.jsxs("span",{children:["Contact: ",c.jsx("b",{children:"9121751697"})]})]})]})]})]}),c.jsx("style",{children:`
        .feedback-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(8, 13, 11, 0.92);
          backdrop-filter: blur(16px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px;
          z-index: 10000;
          font-family: 'Manrope', system-ui, -apple-system, sans-serif;
          color: #e2eee6;
          overflow: hidden;
        }
        .feedback-card {
          background: #0b120e;
          border: 1px solid rgba(192, 132, 252, 0.28);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(192, 132, 252, 0.08);
          border-radius: 16px;
          max-width: 450px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          padding: clamp(14px, 2.5vh, 20px) clamp(14px, 2.5vw, 20px);
          position: relative;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }
        .feedback-card::-webkit-scrollbar {
          width: 5px;
        }
        .feedback-card::-webkit-scrollbar-thumb {
          background: rgba(192, 132, 252, 0.25);
          border-radius: 3px;
        }
        .feedback-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .feedback-badge {
          font-size: 9.5px;
          font-family: 'DM Mono', monospace;
          letter-spacing: 1.2px;
          color: #c084fc;
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.28);
          padding: 2px 7px;
          border-radius: 4px;
        }
        .btn-close {
          background: none;
          border: none;
          color: rgba(226, 238, 230, 0.6);
          cursor: pointer;
          padding: 3px;
          display: flex;
        }
        .btn-close:hover {
          color: #ffffff;
        }
        .feedback-intro h3 {
          font-size: clamp(16px, 2vw, 19px);
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 4px 0;
        }
        .feedback-intro p {
          font-size: clamp(11.5px, 1.4vw, 12.5px);
          color: rgba(226, 238, 230, 0.7);
          margin: 0 0 12px 0;
          line-height: 1.4;
        }
        .feedback-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .form-group label {
          font-size: 11px;
          font-weight: 600;
          color: rgba(226, 238, 230, 0.75);
          font-family: 'DM Mono', monospace;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          display: flex;
          justify-content: space-between;
        }
        .form-group label small {
          text-transform: none;
          color: rgba(226, 238, 230, 0.45);
        }
        .input-disabled {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 12.5px;
          color: rgba(226, 238, 230, 0.75);
          cursor: not-allowed;
        }
        .star-rating-row {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 2px 0;
        }
        .star-btn {
          background: none;
          border: none;
          padding: 2px;
          cursor: pointer;
          transition: transform 0.15s;
        }
        .star-btn:hover {
          transform: scale(1.12);
        }
        .star-icon.filled {
          fill: #fbbf24;
          color: #fbbf24;
        }
        .star-icon.empty {
          fill: transparent;
          color: rgba(226, 238, 230, 0.3);
        }
        .rating-text {
          margin-left: 6px;
          font-size: 12px;
          font-weight: 600;
          color: #c084fc;
        }
        .select-category, textarea {
          background: #080d0b;
          border: 1px solid rgba(192, 132, 252, 0.3);
          border-radius: 8px;
          padding: 8px 12px;
          color: #ffffff;
          font-size: 12.5px;
          outline: none;
          transition: border-color 0.2s;
          box-sizing: border-box;
          font-family: inherit;
        }
        .select-category:focus, textarea:focus {
          border-color: #c084fc;
          box-shadow: 0 0 0 2px rgba(192, 132, 252, 0.15);
        }
        textarea {
          resize: vertical;
          min-height: 65px;
          line-height: 1.4;
        }
        .form-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 4px;
        }
        .btn-back {
          padding: 9px 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: #e2eee6;
          font-size: 12.5px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .btn-submit-action {
          flex: 1;
          padding: 10px 18px;
          background: #c084fc;
          color: #080d0b;
          border: none;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.2s;
        }
        .btn-submit-action:hover:not(:disabled) {
          background: #d8b4fe;
        }
        .btn-submit-action:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .error-alert {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.35);
          border-radius: 7px;
          padding: 6px 10px;
          color: #fca5a5;
          font-size: 11.5px;
        }
        .feedback-success-state {
          text-align: center;
          padding: 12px 0 6px 0;
        }
        .success-icon-wrap {
          color: #78f6a8;
          margin-bottom: 10px;
        }
        .feedback-success-state h3 {
          font-size: clamp(17px, 2.2vw, 20px);
          color: #ffffff;
          margin: 0 0 6px 0;
        }
        .feedback-success-state p {
          font-size: 12.5px;
          color: rgba(226, 238, 230, 0.75);
          line-height: 1.45;
          margin: 0 0 8px 0;
        }
        .note-restriction {
          font-size: 11px;
          color: rgba(226, 238, 230, 0.5);
          background: rgba(255, 255, 255, 0.04);
          border-radius: 7px;
          padding: 8px 12px;
          margin-bottom: 12px !important;
        }

        /* Developer Showcase Box (Image 2 Replacement) */
        .developer-showcase-box {
          background: rgba(192, 132, 252, 0.06);
          border: 1px solid rgba(192, 132, 252, 0.22);
          border-radius: 10px;
          padding: 10px 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-align: left;
        }
        .dev-box-top {
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.8px;
          font-weight: 700;
          color: #c084fc;
        }
        .dev-icon {
          color: #c084fc;
        }
        .developer-showcase-box p {
          margin: 0;
          font-size: 11px;
          line-height: 1.35;
          color: rgba(226, 238, 230, 0.7);
        }
        .dev-contact-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.35);
          color: #e2eee6;
          padding: 3px 8px;
          border-radius: 5px;
          font-size: 11px;
          text-decoration: none;
          align-self: flex-start;
          transition: all 0.2s;
        }
        .dev-contact-pill:hover {
          background: rgba(192, 132, 252, 0.22);
          border-color: #c084fc;
          color: #ffffff;
        }
        .dev-contact-pill b {
          color: #c084fc;
        }
      `})]})}const WN="http://localhost:8000".replace(/\/$/,"");function GN(){try{let e=sessionStorage.getItem("eliza_session_id");return e||(e=typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():"sess_"+Math.random().toString(36).substring(2)+Date.now().toString(36),sessionStorage.setItem("eliza_session_id",e)),e}catch{return"anonymous-session"}}async function Xn(e,t={}){const n={"Content-Type":"application/json","X-Session-ID":GN(),...t.headers||{}},r=await fetch(`${WN}${e}`,{...t,headers:n}),i=await r.json().catch(()=>({}));if(!r.ok)throw new Error(i.detail||i.message||`Request failed (${r.status})`);return i}const Qn={health:()=>Xn("/api/v1/health"),providers:()=>Xn("/api/v1/providers"),settings:()=>Xn("/api/v1/settings"),updateSettings:e=>Xn("/api/v1/settings",{method:"PATCH",body:JSON.stringify(e)}),conversations:()=>Xn("/api/v1/conversations"),getConversation:e=>Xn(`/api/v1/conversations/${encodeURIComponent(e)}`),deleteConversation:e=>Xn(`/api/v1/conversations/${encodeURIComponent(e)}`,{method:"DELETE"}),chat:e=>Xn("/api/v1/chat",{method:"POST",body:JSON.stringify(e)})},J1=E.createContext({});function qN(e){const t=E.useRef(null);return t.current===null&&(t.current=e()),t.current}const Xp=E.createContext(null),ew=E.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function KN(e=!0){const t=E.useContext(Xp);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=E.useId();E.useEffect(()=>{e&&i(s)},[e]);const a=E.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,a]:[!0]}const Qp=typeof window<"u",YN=Qp?E.useLayoutEffect:E.useEffect,Pt=e=>e;let tw=Pt;function Zp(e){let t;return()=>(t===void 0&&(t=e()),t)}const Ji=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Mn=e=>e*1e3,On=e=>e/1e3,XN={useManualTiming:!1};function QN(e){let t=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function o(u){s.has(u)&&(l.schedule(u),e()),u(a)}const l={schedule:(u,d=!1,f=!1)=>{const h=f&&r?t:n;return d&&s.add(u),h.has(u)||h.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(a=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(o),t.clear(),r=!1,i&&(i=!1,l.process(u))}};return l}const wo=["read","resolveKeyframes","update","preRender","render","postRender"],ZN=40;function nw(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,a=wo.reduce((g,m)=>(g[m]=QN(s),g),{}),{read:o,resolveKeyframes:l,update:u,preRender:d,render:f,postRender:p}=a,h=()=>{const g=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(g-i.timestamp,ZN),1),i.timestamp=g,i.isProcessing=!0,o.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},x=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:wo.reduce((g,m)=>{const y=a[m];return g[m]=(S,C=!1,w=!1)=>(n||x(),y.schedule(S,C,w)),g},{}),cancel:g=>{for(let m=0;m<wo.length;m++)a[wo[m]].cancel(g)},state:i,steps:a}}const{schedule:_e,cancel:kr,state:Qe,steps:pc}=nw(typeof requestAnimationFrame<"u"?requestAnimationFrame:Pt,!0),rw=E.createContext({strict:!1}),qg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},es={};for(const e in qg)es[e]={isEnabled:t=>qg[e].some(n=>!!t[n])};function JN(e){for(const t in e)es[t]={...es[t],...e[t]}}const eP=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function jl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||eP.has(e)}let iw=e=>!jl(e);function tP(e){e&&(iw=t=>t.startsWith("on")?!jl(t):e(t))}try{tP(require("@emotion/is-prop-valid").default)}catch{}function nP(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(iw(i)||n===!0&&jl(i)||!t&&!jl(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function rP(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const yu=E.createContext({});function Ta(e){return typeof e=="string"||Array.isArray(e)}function xu(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Jp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],eh=["initial",...Jp];function vu(e){return xu(e.animate)||eh.some(t=>Ta(e[t]))}function sw(e){return!!(vu(e)||e.variants)}function iP(e,t){if(vu(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Ta(n)?n:void 0,animate:Ta(r)?r:void 0}}return e.inherit!==!1?t:{}}function sP(e){const{initial:t,animate:n}=iP(e,E.useContext(yu));return E.useMemo(()=>({initial:t,animate:n}),[Kg(t),Kg(n)])}function Kg(e){return Array.isArray(e)?e.join(" "):e}const aP=Symbol.for("motionComponentSymbol");function Ti(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function oP(e,t,n){return E.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Ti(n)&&(n.current=r))},[t])}const th=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),lP="framerAppearId",aw="data-"+th(lP),{schedule:nh}=nw(queueMicrotask,!1),ow=E.createContext({});function uP(e,t,n,r,i){var s,a;const{visualElement:o}=E.useContext(yu),l=E.useContext(rw),u=E.useContext(Xp),d=E.useContext(ew).reducedMotion,f=E.useRef(null);r=r||l.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const p=f.current,h=E.useContext(ow);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&cP(f.current,n,i,h);const x=E.useRef(!1);E.useInsertionEffect(()=>{p&&x.current&&p.update(n,u)});const v=n[aw],b=E.useRef(!!v&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,v))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,v)));return YN(()=>{p&&(x.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),nh.render(p.render),b.current&&p.animationState&&p.animationState.animateChanges())}),E.useEffect(()=>{p&&(!b.current&&p.animationState&&p.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var g;(g=window.MotionHandoffMarkAsComplete)===null||g===void 0||g.call(window,v)}),b.current=!1))}),p}function cP(e,t,n,r){const{layoutId:i,layout:s,drag:a,dragConstraints:o,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:lw(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!a||o&&Ti(o),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function lw(e){if(e)return e.options.allowProjection!==!1?e.projection:lw(e.parent)}function dP({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var s,a;e&&JN(e);function o(u,d){let f;const p={...E.useContext(ew),...u,layoutId:fP(u)},{isStatic:h}=p,x=sP(u),v=r(u,h);if(!h&&Qp){pP();const b=hP(p);f=b.MeasureLayout,x.visualElement=uP(i,v,p,t,b.ProjectionNode)}return c.jsxs(yu.Provider,{value:x,children:[f&&x.visualElement?c.jsx(f,{visualElement:x.visualElement,...p}):null,n(i,u,oP(v,x.visualElement,d),v,h,x.visualElement)]})}o.displayName=`motion.${typeof i=="string"?i:`create(${(a=(s=i.displayName)!==null&&s!==void 0?s:i.name)!==null&&a!==void 0?a:""})`}`;const l=E.forwardRef(o);return l[aP]=i,l}function fP({layoutId:e}){const t=E.useContext(J1).id;return t&&e!==void 0?t+"-"+e:e}function pP(e,t){E.useContext(rw).strict}function hP(e){const{drag:t,layout:n}=es;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const mP=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function rh(e){return typeof e!="string"||e.includes("-")?!1:!!(mP.indexOf(e)>-1||/[A-Z]/u.test(e))}function Yg(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function ih(e,t,n,r){if(typeof t=="function"){const[i,s]=Yg(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=Yg(r);t=t(n!==void 0?n:e.custom,i,s)}return t}const Xd=e=>Array.isArray(e),gP=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),yP=e=>Xd(e)?e[e.length-1]||0:e,at=e=>!!(e&&e.getVelocity);function Ko(e){const t=at(e)?e.get():e;return gP(t)?t.toValue():t}function xP({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,s){const a={latestValues:vP(r,i,s,e),renderState:t()};return n&&(a.onMount=o=>n({props:r,current:o,...a}),a.onUpdate=o=>n(o)),a}const uw=e=>(t,n)=>{const r=E.useContext(yu),i=E.useContext(Xp),s=()=>xP(e,t,r,i);return n?s():qN(s)};function vP(e,t,n,r){const i={},s=r(e,{});for(const p in s)i[p]=Ko(s[p]);let{initial:a,animate:o}=e;const l=vu(e),u=sw(e);t&&u&&!l&&e.inherit!==!1&&(a===void 0&&(a=t.initial),o===void 0&&(o=t.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const f=d?o:a;if(f&&typeof f!="boolean"&&!xu(f)){const p=Array.isArray(f)?f:[f];for(let h=0;h<p.length;h++){const x=ih(e,p[h]);if(x){const{transitionEnd:v,transition:b,...g}=x;for(const m in g){let y=g[m];if(Array.isArray(y)){const S=d?y.length-1:0;y=y[S]}y!==null&&(i[m]=y)}for(const m in v)i[m]=v[m]}}}return i}const cs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],li=new Set(cs),cw=e=>t=>typeof t=="string"&&t.startsWith(e),dw=cw("--"),bP=cw("var(--"),sh=e=>bP(e)?wP.test(e.split("/*")[0].trim()):!1,wP=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,fw=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Wn=(e,t,n)=>n>t?t:n<e?e:n,ds={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},_a={...ds,transform:e=>Wn(0,1,e)},ko={...ds,default:1},Wa=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Jn=Wa("deg"),vn=Wa("%"),ee=Wa("px"),kP=Wa("vh"),SP=Wa("vw"),Xg={...vn,parse:e=>vn.parse(e)/100,transform:e=>vn.transform(e*100)},EP={borderWidth:ee,borderTopWidth:ee,borderRightWidth:ee,borderBottomWidth:ee,borderLeftWidth:ee,borderRadius:ee,radius:ee,borderTopLeftRadius:ee,borderTopRightRadius:ee,borderBottomRightRadius:ee,borderBottomLeftRadius:ee,width:ee,maxWidth:ee,height:ee,maxHeight:ee,top:ee,right:ee,bottom:ee,left:ee,padding:ee,paddingTop:ee,paddingRight:ee,paddingBottom:ee,paddingLeft:ee,margin:ee,marginTop:ee,marginRight:ee,marginBottom:ee,marginLeft:ee,backgroundPositionX:ee,backgroundPositionY:ee},CP={rotate:Jn,rotateX:Jn,rotateY:Jn,rotateZ:Jn,scale:ko,scaleX:ko,scaleY:ko,scaleZ:ko,skew:Jn,skewX:Jn,skewY:Jn,distance:ee,translateX:ee,translateY:ee,translateZ:ee,x:ee,y:ee,z:ee,perspective:ee,transformPerspective:ee,opacity:_a,originX:Xg,originY:Xg,originZ:ee},Qg={...ds,transform:Math.round},ah={...EP,...CP,zIndex:Qg,size:ee,fillOpacity:_a,strokeOpacity:_a,numOctaves:Qg},TP={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},_P=cs.length;function AP(e,t,n){let r="",i=!0;for(let s=0;s<_P;s++){const a=cs[s],o=e[a];if(o===void 0)continue;let l=!0;if(typeof o=="number"?l=o===(a.startsWith("scale")?1:0):l=parseFloat(o)===0,!l||n){const u=fw(o,ah[a]);if(!l){i=!1;const d=TP[a]||a;r+=`${d}(${u}) `}n&&(t[a]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function oh(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let a=!1,o=!1;for(const l in t){const u=t[l];if(li.has(l)){a=!0;continue}else if(dw(l)){i[l]=u;continue}else{const d=fw(u,ah[l]);l.startsWith("origin")?(o=!0,s[l]=d):r[l]=d}}if(t.transform||(a||n?r.transform=AP(t,e.transform,n):r.transform&&(r.transform="none")),o){const{originX:l="50%",originY:u="50%",originZ:d=0}=s;r.transformOrigin=`${l} ${u} ${d}`}}const IP={offset:"stroke-dashoffset",array:"stroke-dasharray"},NP={offset:"strokeDashoffset",array:"strokeDasharray"};function PP(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?IP:NP;e[s.offset]=ee.transform(-r);const a=ee.transform(t),o=ee.transform(n);e[s.array]=`${a} ${o}`}function Zg(e,t,n){return typeof e=="string"?e:ee.transform(t+n*e)}function RP(e,t,n){const r=Zg(t,e.x,e.width),i=Zg(n,e.y,e.height);return`${r} ${i}`}function lh(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:a,pathSpacing:o=1,pathOffset:l=0,...u},d,f){if(oh(e,u,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:h,dimensions:x}=e;p.transform&&(x&&(h.transform=p.transform),delete p.transform),x&&(i!==void 0||s!==void 0||h.transform)&&(h.transformOrigin=RP(x,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),a!==void 0&&PP(p,a,o,l,!1)}const uh=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),pw=()=>({...uh(),attrs:{}}),ch=e=>typeof e=="string"&&e.toLowerCase()==="svg";function hw(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const mw=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function gw(e,t,n,r){hw(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(mw.has(i)?i:th(i),t.attrs[i])}const Dl={};function jP(e){Object.assign(Dl,e)}function yw(e,{layout:t,layoutId:n}){return li.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Dl[e]||e==="opacity")}function dh(e,t,n){var r;const{style:i}=e,s={};for(const a in i)(at(i[a])||t.style&&at(t.style[a])||yw(a,e)||((r=n==null?void 0:n.getValue(a))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[a]=i[a]);return s}function xw(e,t,n){const r=dh(e,t,n);for(const i in e)if(at(e[i])||at(t[i])){const s=cs.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}function DP(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const Jg=["x","y","width","height","cx","cy","r"],LP={useVisualState:uw({scrapeMotionValuesFromProps:xw,createRenderState:pw,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let s=!!e.drag;if(!s){for(const o in i)if(li.has(o)){s=!0;break}}if(!s)return;let a=!t;if(t)for(let o=0;o<Jg.length;o++){const l=Jg[o];e[l]!==t[l]&&(a=!0)}a&&_e.read(()=>{DP(n,r),_e.render(()=>{lh(r,i,ch(n.tagName),e.transformTemplate),gw(n,r)})})}})},MP={useVisualState:uw({scrapeMotionValuesFromProps:dh,createRenderState:uh})};function vw(e,t,n){for(const r in t)!at(t[r])&&!yw(r,n)&&(e[r]=t[r])}function OP({transformTemplate:e},t){return E.useMemo(()=>{const n=uh();return oh(n,t,e),Object.assign({},n.vars,n.style)},[t])}function FP(e,t){const n=e.style||{},r={};return vw(r,n,e),Object.assign(r,OP(e,t)),r}function zP(e,t){const n={},r=FP(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function UP(e,t,n,r){const i=E.useMemo(()=>{const s=pw();return lh(s,t,ch(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};vw(s,e.style,e),i.style={...s,...i.style}}return i}function BP(e=!1){return(n,r,i,{latestValues:s},a)=>{const l=(rh(n)?UP:zP)(r,s,a,n),u=nP(r,typeof n=="string",e),d=n!==E.Fragment?{...u,...l,ref:i}:{},{children:f}=r,p=E.useMemo(()=>at(f)?f.get():f,[f]);return E.createElement(n,{...d,children:p})}}function VP(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const a={...rh(r)?LP:MP,preloadedFeatures:e,useRender:BP(i),createVisualElement:t,Component:r};return dP(a)}}function bw(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function bu(e,t,n){const r=e.getProps();return ih(r,t,n!==void 0?n:r.custom,e)}const $P=Zp(()=>window.ScrollTimeline!==void 0);class HP{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if($P()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class WP extends HP{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function fh(e,t){return e?e[t]||e.default||e:void 0}const Qd=2e4;function ww(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Qd;)t+=n,r=e.next(t);return t>=Qd?1/0:t}function ph(e){return typeof e=="function"}function ey(e,t){e.timeline=t,e.onfinish=null}const hh=e=>Array.isArray(e)&&typeof e[0]=="number",GP={linearEasing:void 0};function qP(e,t){const n=Zp(e);return()=>{var r;return(r=GP[t])!==null&&r!==void 0?r:n()}}const Ll=qP(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),kw=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=e(Ji(0,i-1,s))+", ";return`linear(${r.substring(0,r.length-2)})`};function Sw(e){return!!(typeof e=="function"&&Ll()||!e||typeof e=="string"&&(e in Zd||Ll())||hh(e)||Array.isArray(e)&&e.every(Sw))}const js=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Zd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:js([0,.65,.55,1]),circOut:js([.55,0,1,.45]),backIn:js([.31,.01,.66,-.59]),backOut:js([.33,1.53,.69,.99])};function Ew(e,t){if(e)return typeof e=="function"&&Ll()?kw(e,t):hh(e)?js(e):Array.isArray(e)?e.map(n=>Ew(n,t)||Zd.easeOut):Zd[e]}const Yt={x:!1,y:!1};function Cw(){return Yt.x||Yt.y}function KP(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const s=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e)}function Tw(e,t){const n=KP(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function ty(e){return t=>{t.pointerType==="touch"||Cw()||e(t)}}function YP(e,t,n={}){const[r,i,s]=Tw(e,n),a=ty(o=>{const{target:l}=o,u=t(o);if(typeof u!="function"||!l)return;const d=ty(f=>{u(f),l.removeEventListener("pointerleave",d)});l.addEventListener("pointerleave",d,i)});return r.forEach(o=>{o.addEventListener("pointerenter",a,i)}),s}const _w=(e,t)=>t?e===t?!0:_w(e,t.parentElement):!1,mh=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,XP=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function QP(e){return XP.has(e.tagName)||e.tabIndex!==-1}const Ds=new WeakSet;function ny(e){return t=>{t.key==="Enter"&&e(t)}}function hc(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const ZP=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=ny(()=>{if(Ds.has(n))return;hc(n,"down");const i=ny(()=>{hc(n,"up")}),s=()=>hc(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function ry(e){return mh(e)&&!Cw()}function JP(e,t,n={}){const[r,i,s]=Tw(e,n),a=o=>{const l=o.currentTarget;if(!ry(o)||Ds.has(l))return;Ds.add(l);const u=t(o),d=(h,x)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),!(!ry(h)||!Ds.has(l))&&(Ds.delete(l),typeof u=="function"&&u(h,{success:x}))},f=h=>{d(h,n.useGlobalTarget||_w(l,h.target))},p=h=>{d(h,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(o=>{!QP(o)&&o.getAttribute("tabindex")===null&&(o.tabIndex=0),(n.useGlobalTarget?window:o).addEventListener("pointerdown",a,i),o.addEventListener("focus",u=>ZP(u,i),i)}),s}function e5(e){return e==="x"||e==="y"?Yt[e]?null:(Yt[e]=!0,()=>{Yt[e]=!1}):Yt.x||Yt.y?null:(Yt.x=Yt.y=!0,()=>{Yt.x=Yt.y=!1})}const Aw=new Set(["width","height","top","left","right","bottom",...cs]);let Yo;function t5(){Yo=void 0}const bn={now:()=>(Yo===void 0&&bn.set(Qe.isProcessing||XN.useManualTiming?Qe.timestamp:performance.now()),Yo),set:e=>{Yo=e,queueMicrotask(t5)}};function gh(e,t){e.indexOf(t)===-1&&e.push(t)}function yh(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class xh{constructor(){this.subscriptions=[]}add(t){return gh(this.subscriptions,t),()=>yh(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const a=this.subscriptions[s];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Iw(e,t){return t?e*(1e3/t):0}const iy=30,n5=e=>!isNaN(parseFloat(e));class r5{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=bn.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=bn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=n5(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new xh);const r=this.events[t].add(n);return t==="change"?()=>{r(),_e.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=bn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>iy)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,iy);return Iw(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Aa(e,t){return new r5(e,t)}function i5(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Aa(n))}function s5(e,t){const n=bu(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const a in s){const o=yP(s[a]);i5(e,a,o)}}function a5(e){return!!(at(e)&&e.add)}function Jd(e,t){const n=e.getValue("willChange");if(a5(n))return n.add(t)}function Nw(e){return e.props[aw]}const Pw=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,o5=1e-7,l5=12;function u5(e,t,n,r,i){let s,a,o=0;do a=t+(n-t)/2,s=Pw(a,r,i)-e,s>0?n=a:t=a;while(Math.abs(s)>o5&&++o<l5);return a}function Ga(e,t,n,r){if(e===t&&n===r)return Pt;const i=s=>u5(s,0,1,e,n);return s=>s===0||s===1?s:Pw(i(s),t,r)}const Rw=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,jw=e=>t=>1-e(1-t),Dw=Ga(.33,1.53,.69,.99),vh=jw(Dw),Lw=Rw(vh),Mw=e=>(e*=2)<1?.5*vh(e):.5*(2-Math.pow(2,-10*(e-1))),bh=e=>1-Math.sin(Math.acos(e)),Ow=jw(bh),Fw=Rw(bh),zw=e=>/^0[^.\s]+$/u.test(e);function c5(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||zw(e):!0}const qs=e=>Math.round(e*1e5)/1e5,wh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function d5(e){return e==null}const f5=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,kh=(e,t)=>n=>!!(typeof n=="string"&&f5.test(n)&&n.startsWith(e)||t&&!d5(n)&&Object.prototype.hasOwnProperty.call(n,t)),Uw=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,a,o]=r.match(wh);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(a),alpha:o!==void 0?parseFloat(o):1}},p5=e=>Wn(0,255,e),mc={...ds,transform:e=>Math.round(p5(e))},Wr={test:kh("rgb","red"),parse:Uw("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+mc.transform(e)+", "+mc.transform(t)+", "+mc.transform(n)+", "+qs(_a.transform(r))+")"};function h5(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const ef={test:kh("#"),parse:h5,transform:Wr.transform},_i={test:kh("hsl","hue"),parse:Uw("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+vn.transform(qs(t))+", "+vn.transform(qs(n))+", "+qs(_a.transform(r))+")"},rt={test:e=>Wr.test(e)||ef.test(e)||_i.test(e),parse:e=>Wr.test(e)?Wr.parse(e):_i.test(e)?_i.parse(e):ef.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Wr.transform(e):_i.transform(e)},m5=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function g5(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(wh))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(m5))===null||n===void 0?void 0:n.length)||0)>0}const Bw="number",Vw="color",y5="var",x5="var(",sy="${}",v5=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ia(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const o=t.replace(v5,l=>(rt.test(l)?(r.color.push(s),i.push(Vw),n.push(rt.parse(l))):l.startsWith(x5)?(r.var.push(s),i.push(y5),n.push(l)):(r.number.push(s),i.push(Bw),n.push(parseFloat(l))),++s,sy)).split(sy);return{values:n,split:o,indexes:r,types:i}}function $w(e){return Ia(e).values}function Hw(e){const{split:t,types:n}=Ia(e),r=t.length;return i=>{let s="";for(let a=0;a<r;a++)if(s+=t[a],i[a]!==void 0){const o=n[a];o===Bw?s+=qs(i[a]):o===Vw?s+=rt.transform(i[a]):s+=i[a]}return s}}const b5=e=>typeof e=="number"?0:e;function w5(e){const t=$w(e);return Hw(e)(t.map(b5))}const Sr={test:g5,parse:$w,createTransformer:Hw,getAnimatableNone:w5},k5=new Set(["brightness","contrast","saturate","opacity"]);function S5(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(wh)||[];if(!r)return e;const i=n.replace(r,"");let s=k5.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const E5=/\b([a-z-]*)\(.*?\)/gu,tf={...Sr,getAnimatableNone:e=>{const t=e.match(E5);return t?t.map(S5).join(" "):e}},C5={...ah,color:rt,backgroundColor:rt,outlineColor:rt,fill:rt,stroke:rt,borderColor:rt,borderTopColor:rt,borderRightColor:rt,borderBottomColor:rt,borderLeftColor:rt,filter:tf,WebkitFilter:tf},Sh=e=>C5[e];function Ww(e,t){let n=Sh(e);return n!==tf&&(n=Sr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const T5=new Set(["auto","none","0"]);function _5(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!T5.has(s)&&Ia(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=Ww(n,i)}const ay=e=>e===ds||e===ee,oy=(e,t)=>parseFloat(e.split(", ")[t]),ly=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return oy(i[1],t);{const s=r.match(/^matrix\((.+)\)$/u);return s?oy(s[1],e):0}},A5=new Set(["x","y","z"]),I5=cs.filter(e=>!A5.has(e));function N5(e){const t=[];return I5.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const ts={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:ly(4,13),y:ly(5,14)};ts.translateX=ts.x;ts.translateY=ts.y;const Xr=new Set;let nf=!1,rf=!1;function Gw(){if(rf){const e=Array.from(Xr).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=N5(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,a])=>{var o;(o=r.getValue(s))===null||o===void 0||o.set(a)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}rf=!1,nf=!1,Xr.forEach(e=>e.complete()),Xr.clear()}function qw(){Xr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(rf=!0)})}function P5(){qw(),Gw()}class Eh{constructor(t,n,r,i,s,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Xr.add(this),nf||(nf=!0,_e.read(qw),_e.resolveKeyframes(Gw))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let s=0;s<t.length;s++)if(t[s]===null)if(s===0){const a=i==null?void 0:i.get(),o=t[t.length-1];if(a!==void 0)t[0]=a;else if(r&&n){const l=r.readValue(n,o);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=o),i&&a===void 0&&i.set(t[0])}else t[s]=t[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Xr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Xr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Kw=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),R5=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function j5(e){const t=R5.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Yw(e,t,n=1){const[r,i]=j5(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const a=s.trim();return Kw(a)?parseFloat(a):a}return sh(i)?Yw(i,t,n+1):i}const Xw=e=>t=>t.test(e),D5={test:e=>e==="auto",parse:e=>e},Qw=[ds,ee,vn,Jn,SP,kP,D5],uy=e=>Qw.find(Xw(e));class Zw extends Eh{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),sh(u))){const d=Yw(u,n.current);d!==void 0&&(t[l]=d),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!Aw.has(r)||t.length!==2)return;const[i,s]=t,a=uy(i),o=uy(s);if(a!==o)if(ay(a)&&ay(o))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)c5(t[i])&&r.push(i);r.length&&_5(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ts[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const a=i.length-1,o=i[a];i[a]=ts[r](n.measureViewportBox(),window.getComputedStyle(n.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const cy=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Sr.test(e)||e==="0")&&!e.startsWith("url("));function L5(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function M5(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],a=cy(i,t),o=cy(s,t);return!a||!o?!1:L5(e)||(n==="spring"||ph(n))&&r}const O5=e=>e!==null;function wu(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(O5),s=t&&n!=="loop"&&t%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const F5=40;class Jw{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:a="loop",...o}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=bn.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:a,...o},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>F5?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&P5(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=bn.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:a,onComplete:o,onUpdate:l,isGenerator:u}=this.options;if(!u&&!M5(t,r,i,s))if(a)this.options.duration=0;else{l&&l(wu(t,this.options,n)),o&&o(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const Pe=(e,t,n)=>e+(t-e)*n;function gc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function z5({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,a=0;if(!t)i=s=a=n;else{const o=n<.5?n*(1+t):n+t-n*t,l=2*n-o;i=gc(l,o,e+1/3),s=gc(l,o,e),a=gc(l,o,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:r}}function Ml(e,t){return n=>n>0?t:e}const yc=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},U5=[ef,Wr,_i],B5=e=>U5.find(t=>t.test(e));function dy(e){const t=B5(e);if(!t)return!1;let n=t.parse(e);return t===_i&&(n=z5(n)),n}const fy=(e,t)=>{const n=dy(e),r=dy(t);if(!n||!r)return Ml(e,t);const i={...n};return s=>(i.red=yc(n.red,r.red,s),i.green=yc(n.green,r.green,s),i.blue=yc(n.blue,r.blue,s),i.alpha=Pe(n.alpha,r.alpha,s),Wr.transform(i))},V5=(e,t)=>n=>t(e(n)),qa=(...e)=>e.reduce(V5),sf=new Set(["none","hidden"]);function $5(e,t){return sf.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function H5(e,t){return n=>Pe(e,t,n)}function Ch(e){return typeof e=="number"?H5:typeof e=="string"?sh(e)?Ml:rt.test(e)?fy:q5:Array.isArray(e)?ek:typeof e=="object"?rt.test(e)?fy:W5:Ml}function ek(e,t){const n=[...e],r=n.length,i=e.map((s,a)=>Ch(s)(s,t[a]));return s=>{for(let a=0;a<r;a++)n[a]=i[a](s);return n}}function W5(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Ch(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function G5(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const a=t.types[s],o=e.indexes[a][i[a]],l=(n=e.values[o])!==null&&n!==void 0?n:0;r[s]=l,i[a]++}return r}const q5=(e,t)=>{const n=Sr.createTransformer(t),r=Ia(e),i=Ia(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?sf.has(e)&&!i.values.length||sf.has(t)&&!r.values.length?$5(e,t):qa(ek(G5(r,i),i.values),n):Ml(e,t)};function tk(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Pe(e,t,n):Ch(e)(e,t)}const K5=5;function nk(e,t,n){const r=Math.max(t-K5,0);return Iw(n-e(r),t-r)}const Le={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},xc=.001;function Y5({duration:e=Le.duration,bounce:t=Le.bounce,velocity:n=Le.velocity,mass:r=Le.mass}){let i,s,a=1-t;a=Wn(Le.minDamping,Le.maxDamping,a),e=Wn(Le.minDuration,Le.maxDuration,On(e)),a<1?(i=u=>{const d=u*a,f=d*e,p=d-n,h=af(u,a),x=Math.exp(-f);return xc-p/h*x},s=u=>{const f=u*a*e,p=f*n+n,h=Math.pow(a,2)*Math.pow(u,2)*e,x=Math.exp(-f),v=af(Math.pow(u,2),a);return(-i(u)+xc>0?-1:1)*((p-h)*x)/v}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-xc+d*f},s=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const o=5/e,l=Q5(i,s,o);if(e=Mn(e),isNaN(l))return{stiffness:Le.stiffness,damping:Le.damping,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const X5=12;function Q5(e,t,n){let r=n;for(let i=1;i<X5;i++)r=r-e(r)/t(r);return r}function af(e,t){return e*Math.sqrt(1-t*t)}const Z5=["duration","bounce"],J5=["stiffness","damping","mass"];function py(e,t){return t.some(n=>e[n]!==void 0)}function eR(e){let t={velocity:Le.velocity,stiffness:Le.stiffness,damping:Le.damping,mass:Le.mass,isResolvedFromDuration:!1,...e};if(!py(e,J5)&&py(e,Z5))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*Wn(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Le.mass,stiffness:i,damping:s}}else{const n=Y5(e);t={...t,...n,mass:Le.mass},t.isResolvedFromDuration=!0}return t}function rk(e=Le.visualDuration,t=Le.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],o={done:!1,value:s},{stiffness:l,damping:u,mass:d,duration:f,velocity:p,isResolvedFromDuration:h}=eR({...n,velocity:-On(n.velocity||0)}),x=p||0,v=u/(2*Math.sqrt(l*d)),b=a-s,g=On(Math.sqrt(l/d)),m=Math.abs(b)<5;r||(r=m?Le.restSpeed.granular:Le.restSpeed.default),i||(i=m?Le.restDelta.granular:Le.restDelta.default);let y;if(v<1){const C=af(g,v);y=w=>{const I=Math.exp(-v*g*w);return a-I*((x+v*g*b)/C*Math.sin(C*w)+b*Math.cos(C*w))}}else if(v===1)y=C=>a-Math.exp(-g*C)*(b+(x+g*b)*C);else{const C=g*Math.sqrt(v*v-1);y=w=>{const I=Math.exp(-v*g*w),N=Math.min(C*w,300);return a-I*((x+v*g*b)*Math.sinh(N)+C*b*Math.cosh(N))/C}}const S={calculatedDuration:h&&f||null,next:C=>{const w=y(C);if(h)o.done=C>=f;else{let I=0;v<1&&(I=C===0?Mn(x):nk(y,C,w));const N=Math.abs(I)<=r,j=Math.abs(a-w)<=i;o.done=N&&j}return o.value=o.done?a:w,o},toString:()=>{const C=Math.min(ww(S),Qd),w=kw(I=>S.next(C*I).value,C,30);return C+"ms "+w}};return S}function hy({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:a,min:o,max:l,restDelta:u=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},h=N=>o!==void 0&&N<o||l!==void 0&&N>l,x=N=>o===void 0?l:l===void 0||Math.abs(o-N)<Math.abs(l-N)?o:l;let v=n*t;const b=f+v,g=a===void 0?b:a(b);g!==b&&(v=g-f);const m=N=>-v*Math.exp(-N/r),y=N=>g+m(N),S=N=>{const j=m(N),T=y(N);p.done=Math.abs(j)<=u,p.value=p.done?g:T};let C,w;const I=N=>{h(p.value)&&(C=N,w=rk({keyframes:[p.value,x(p.value)],velocity:nk(y,N,p.value),damping:i,stiffness:s,restDelta:u,restSpeed:d}))};return I(0),{calculatedDuration:null,next:N=>{let j=!1;return!w&&C===void 0&&(j=!0,S(N),I(N)),C!==void 0&&N>=C?w.next(N-C):(!j&&S(N),p)}}}const tR=Ga(.42,0,1,1),nR=Ga(0,0,.58,1),ik=Ga(.42,0,.58,1),rR=e=>Array.isArray(e)&&typeof e[0]!="number",iR={linear:Pt,easeIn:tR,easeInOut:ik,easeOut:nR,circIn:bh,circInOut:Fw,circOut:Ow,backIn:vh,backInOut:Lw,backOut:Dw,anticipate:Mw},my=e=>{if(hh(e)){tw(e.length===4);const[t,n,r,i]=e;return Ga(t,n,r,i)}else if(typeof e=="string")return iR[e];return e};function sR(e,t,n){const r=[],i=n||tk,s=e.length-1;for(let a=0;a<s;a++){let o=i(e[a],e[a+1]);if(t){const l=Array.isArray(t)?t[a]||Pt:t;o=qa(l,o)}r.push(o)}return r}function aR(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(tw(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const a=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=sR(t,r,i),l=o.length,u=d=>{if(a&&d<e[0])return t[0];let f=0;if(l>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=Ji(e[f],e[f+1],d);return o[f](p)};return n?d=>u(Wn(e[0],e[s-1],d)):u}function oR(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Ji(0,t,r);e.push(Pe(n,1,i))}}function lR(e){const t=[0];return oR(t,e.length-1),t}function uR(e,t){return e.map(n=>n*t)}function cR(e,t){return e.map(()=>t||ik).splice(0,e.length-1)}function Ol({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=rR(r)?r.map(my):my(r),s={done:!1,value:t[0]},a=uR(n&&n.length===t.length?n:lR(t),e),o=aR(a,t,{ease:Array.isArray(i)?i:cR(t,i)});return{calculatedDuration:e,next:l=>(s.value=o(l),s.done=l>=e,s)}}const dR=e=>{const t=({timestamp:n})=>e(n);return{start:()=>_e.update(t,!0),stop:()=>kr(t),now:()=>Qe.isProcessing?Qe.timestamp:bn.now()}},fR={decay:hy,inertia:hy,tween:Ol,keyframes:Ol,spring:rk},pR=e=>e/100;class Th extends Jw{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,a=(i==null?void 0:i.KeyframeResolver)||Eh,o=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new a(s,o,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:a=0}=this.options,o=ph(n)?n:fR[n]||Ol;let l,u;o!==Ol&&typeof t[0]!="number"&&(l=qa(pR,tk(t[0],t[1])),t=[0,100]);const d=o({...this.options,keyframes:t});s==="mirror"&&(u=o({...this.options,keyframes:[...t].reverse(),velocity:-a})),d.calculatedDuration===null&&(d.calculatedDuration=ww(d));const{calculatedDuration:f}=d,p=f+i,h=p*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:p,totalDuration:h}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:N}=this.options;return{done:!0,value:N[N.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:a,mapPercentToKeyframes:o,keyframes:l,calculatedDuration:u,totalDuration:d,resolvedDuration:f}=r;if(this.startTime===null)return s.next(0);const{delay:p,repeat:h,repeatType:x,repeatDelay:v,onUpdate:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const g=this.currentTime-p*(this.speed>=0?1:-1),m=this.speed>=0?g<0:g>d;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let y=this.currentTime,S=s;if(h){const N=Math.min(this.currentTime,d)/f;let j=Math.floor(N),T=N%1;!T&&N>=1&&(T=1),T===1&&j--,j=Math.min(j,h+1),!!(j%2)&&(x==="reverse"?(T=1-T,v&&(T-=v/f)):x==="mirror"&&(S=a)),y=Wn(0,1,T)*f}const C=m?{done:!1,value:l[0]}:S.next(y);o&&(C.value=o(C.value));let{done:w}=C;!m&&u!==null&&(w=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const I=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&w);return I&&i!==void 0&&(C.value=wu(l,this.options,i)),b&&b(C.value),I&&this.finish(),C}get duration(){const{resolved:t}=this;return t?On(t.calculatedDuration):0}get time(){return On(this.currentTime)}set time(t){t=Mn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=On(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=dR,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const hR=new Set(["opacity","clipPath","filter","transform"]);function mR(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:a="loop",ease:o="easeInOut",times:l}={}){const u={[t]:n};l&&(u.offset=l);const d=Ew(o,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"})}const gR=Zp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Fl=10,yR=2e4;function xR(e){return ph(e.type)||e.type==="spring"||!Sw(e.ease)}function vR(e,t){const n=new Th({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let s=0;for(;!r.done&&s<yR;)r=n.sample(s),i.push(r.value),s+=Fl;return{times:void 0,keyframes:i,duration:s-Fl,ease:"linear"}}const sk={anticipate:Mw,backInOut:Lw,circInOut:Fw};function bR(e){return e in sk}class gy extends Jw{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new Zw(s,(a,o)=>this.onKeyframesResolved(a,o),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:s,type:a,motionValue:o,name:l,startTime:u}=this.options;if(!o.owner||!o.owner.current)return!1;if(typeof s=="string"&&Ll()&&bR(s)&&(s=sk[s]),xR(this.options)){const{onComplete:f,onUpdate:p,motionValue:h,element:x,...v}=this.options,b=vR(t,v);t=b.keyframes,t.length===1&&(t[1]=t[0]),r=b.duration,i=b.times,s=b.ease,a="keyframes"}const d=mR(o.owner.current,l,t,{...this.options,duration:r,times:i,ease:s});return d.startTime=u??this.calcStartTime(),this.pendingTimeline?(ey(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;o.set(wu(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:a,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return On(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return On(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Mn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Pt;const{animation:r}=n;ey(r,t)}return Pt}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:s,ease:a,times:o}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:f,element:p,...h}=this.options,x=new Th({...h,keyframes:r,duration:i,type:s,ease:a,times:o,isGenerator:!0}),v=Mn(this.time);u.setWithVelocity(x.sample(v-Fl).value,x.sample(v).value,Fl)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:a,type:o}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=n.owner.getProps();return gR()&&r&&hR.has(r)&&!l&&!u&&!i&&s!=="mirror"&&a!==0&&o!=="inertia"}}const wR={type:"spring",stiffness:500,damping:25,restSpeed:10},kR=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),SR={type:"keyframes",duration:.8},ER={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},CR=(e,{keyframes:t})=>t.length>2?SR:li.has(e)?e.startsWith("scale")?kR(t[1]):wR:ER;function TR({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:a,repeatDelay:o,from:l,elapsed:u,...d}){return!!Object.keys(d).length}const _h=(e,t,n,r={},i,s)=>a=>{const o=fh(r,e)||{},l=o.delay||r.delay||0;let{elapsed:u=0}=r;u=u-Mn(l);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...o,delay:-u,onUpdate:p=>{t.set(p),o.onUpdate&&o.onUpdate(p)},onComplete:()=>{a(),o.onComplete&&o.onComplete()},name:e,motionValue:t,element:s?void 0:i};TR(o)||(d={...d,...CR(e,d)}),d.duration&&(d.duration=Mn(d.duration)),d.repeatDelay&&(d.repeatDelay=Mn(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!s&&t.get()!==void 0){const p=wu(d.keyframes,o);if(p!==void 0)return _e.update(()=>{d.onUpdate(p),d.onComplete()}),new WP([])}return!s&&gy.supports(d)?new gy(d):new Th(d)};function _R({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function ak(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:a=e.getDefaultTransition(),transitionEnd:o,...l}=t;r&&(a=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in l){const p=e.getValue(f,(s=e.latestValues[f])!==null&&s!==void 0?s:null),h=l[f];if(h===void 0||d&&_R(d,f))continue;const x={delay:n,...fh(a||{},f)};let v=!1;if(window.MotionHandoffAnimation){const g=Nw(e);if(g){const m=window.MotionHandoffAnimation(g,f,_e);m!==null&&(x.startTime=m,v=!0)}}Jd(e,f),p.start(_h(f,p,h,e.shouldReduceMotion&&Aw.has(f)?{type:!1}:x,e,v));const b=p.animation;b&&u.push(b)}return o&&Promise.all(u).then(()=>{_e.update(()=>{o&&s5(e,o)})}),u}function of(e,t,n={}){var r;const i=bu(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const a=i?()=>Promise.all(ak(e,i,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=s;return AR(e,t,d+u,f,p,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[u,d]=l==="beforeChildren"?[a,o]:[o,a];return u().then(()=>d())}else return Promise.all([a(),o(n.delay)])}function AR(e,t,n=0,r=0,i=1,s){const a=[],o=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>o-u*r;return Array.from(e.variantChildren).sort(IR).forEach((u,d)=>{u.notify("AnimationStart",t),a.push(of(u,t,{...s,delay:n+l(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function IR(e,t){return e.sortNodePosition(t)}function NR(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>of(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=of(e,t,n);else{const i=typeof t=="function"?bu(e,t,n.custom):t;r=Promise.all(ak(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const PR=eh.length;function ok(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?ok(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<PR;n++){const r=eh[n],i=e.props[r];(Ta(i)||i===!1)&&(t[r]=i)}return t}const RR=[...Jp].reverse(),jR=Jp.length;function DR(e){return t=>Promise.all(t.map(({animation:n,options:r})=>NR(e,n,r)))}function LR(e){let t=DR(e),n=yy(),r=!0;const i=l=>(u,d)=>{var f;const p=bu(e,d,l==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:h,transitionEnd:x,...v}=p;u={...u,...v,...x}}return u};function s(l){t=l(e)}function a(l){const{props:u}=e,d=ok(e.parent)||{},f=[],p=new Set;let h={},x=1/0;for(let b=0;b<jR;b++){const g=RR[b],m=n[g],y=u[g]!==void 0?u[g]:d[g],S=Ta(y),C=g===l?m.isActive:null;C===!1&&(x=b);let w=y===d[g]&&y!==u[g]&&S;if(w&&r&&e.manuallyAnimateOnMount&&(w=!1),m.protectedKeys={...h},!m.isActive&&C===null||!y&&!m.prevProp||xu(y)||typeof y=="boolean")continue;const I=MR(m.prevProp,y);let N=I||g===l&&m.isActive&&!w&&S||b>x&&S,j=!1;const T=Array.isArray(y)?y:[y];let R=T.reduce(i(g),{});C===!1&&(R={});const{prevResolvedValues:z={}}=m,G={...z,...R},q=Z=>{N=!0,p.has(Z)&&(j=!0,p.delete(Z)),m.needsAnimating[Z]=!0;const D=e.getValue(Z);D&&(D.liveStyle=!1)};for(const Z in G){const D=R[Z],B=z[Z];if(h.hasOwnProperty(Z))continue;let k=!1;Xd(D)&&Xd(B)?k=!bw(D,B):k=D!==B,k?D!=null?q(Z):p.add(Z):D!==void 0&&p.has(Z)?q(Z):m.protectedKeys[Z]=!0}m.prevProp=y,m.prevResolvedValues=R,m.isActive&&(h={...h,...R}),r&&e.blockInitialAnimation&&(N=!1),N&&(!(w&&I)||j)&&f.push(...T.map(Z=>({animation:Z,options:{type:g}})))}if(p.size){const b={};p.forEach(g=>{const m=e.getBaseTarget(g),y=e.getValue(g);y&&(y.liveStyle=!0),b[g]=m??null}),f.push({animation:b})}let v=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(v=!1),r=!1,v?t(f):Promise.resolve()}function o(l,u){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var h;return(h=p.animationState)===null||h===void 0?void 0:h.setActive(l,u)}),n[l].isActive=u;const f=a(l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:a,setActive:o,setAnimateFunction:s,getState:()=>n,reset:()=>{n=yy(),r=!0}}}function MR(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!bw(t,e):!1}function Pr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function yy(){return{animate:Pr(!0),whileInView:Pr(),whileHover:Pr(),whileTap:Pr(),whileDrag:Pr(),whileFocus:Pr(),exit:Pr()}}class Ar{constructor(t){this.isMounted=!1,this.node=t}update(){}}class OR extends Ar{constructor(t){super(t),t.animationState||(t.animationState=LR(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();xu(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let FR=0;class zR extends Ar{constructor(){super(...arguments),this.id=FR++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const UR={animation:{Feature:OR},exit:{Feature:zR}};function Na(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Ka(e){return{point:{x:e.pageX,y:e.pageY}}}const BR=e=>t=>mh(t)&&e(t,Ka(t));function Ks(e,t,n,r){return Na(e,t,BR(n),r)}const xy=(e,t)=>Math.abs(e-t);function VR(e,t){const n=xy(e.x,t.x),r=xy(e.y,t.y);return Math.sqrt(n**2+r**2)}class lk{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=bc(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,h=VR(f.offset,{x:0,y:0})>=3;if(!p&&!h)return;const{point:x}=f,{timestamp:v}=Qe;this.history.push({...x,timestamp:v});const{onStart:b,onMove:g}=this.handlers;p||(b&&b(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=vc(p,this.transformPagePoint),_e.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:h,onSessionEnd:x,resumeAnimation:v}=this.handlers;if(this.dragSnapToOrigin&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=bc(f.type==="pointercancel"?this.lastMoveEventInfo:vc(p,this.transformPagePoint),this.history);this.startEvent&&h&&h(f,b),x&&x(f,b)},!mh(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const a=Ka(t),o=vc(a,this.transformPagePoint),{point:l}=o,{timestamp:u}=Qe;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,bc(o,this.history)),this.removeListeners=qa(Ks(this.contextWindow,"pointermove",this.handlePointerMove),Ks(this.contextWindow,"pointerup",this.handlePointerUp),Ks(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),kr(this.updatePoint)}}function vc(e,t){return t?{point:t(e.point)}:e}function vy(e,t){return{x:e.x-t.x,y:e.y-t.y}}function bc({point:e},t){return{point:e,delta:vy(e,uk(t)),offset:vy(e,$R(t)),velocity:HR(t,.1)}}function $R(e){return e[0]}function uk(e){return e[e.length-1]}function HR(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=uk(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Mn(t)));)n--;if(!r)return{x:0,y:0};const s=On(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const a={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}const ck=1e-4,WR=1-ck,GR=1+ck,dk=.01,qR=0-dk,KR=0+dk;function jt(e){return e.max-e.min}function YR(e,t,n){return Math.abs(e-t)<=n}function by(e,t,n,r=.5){e.origin=r,e.originPoint=Pe(t.min,t.max,e.origin),e.scale=jt(n)/jt(t),e.translate=Pe(n.min,n.max,e.origin)-e.originPoint,(e.scale>=WR&&e.scale<=GR||isNaN(e.scale))&&(e.scale=1),(e.translate>=qR&&e.translate<=KR||isNaN(e.translate))&&(e.translate=0)}function Ys(e,t,n,r){by(e.x,t.x,n.x,r?r.originX:void 0),by(e.y,t.y,n.y,r?r.originY:void 0)}function wy(e,t,n){e.min=n.min+t.min,e.max=e.min+jt(t)}function XR(e,t,n){wy(e.x,t.x,n.x),wy(e.y,t.y,n.y)}function ky(e,t,n){e.min=t.min-n.min,e.max=e.min+jt(t)}function Xs(e,t,n){ky(e.x,t.x,n.x),ky(e.y,t.y,n.y)}function QR(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Pe(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Pe(n,e,r.max):Math.min(e,n)),e}function Sy(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function ZR(e,{top:t,left:n,bottom:r,right:i}){return{x:Sy(e.x,n,i),y:Sy(e.y,t,r)}}function Ey(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function JR(e,t){return{x:Ey(e.x,t.x),y:Ey(e.y,t.y)}}function ej(e,t){let n=.5;const r=jt(e),i=jt(t);return i>r?n=Ji(t.min,t.max-r,e.min):r>i&&(n=Ji(e.min,e.max-i,t.min)),Wn(0,1,n)}function tj(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const lf=.35;function nj(e=lf){return e===!1?e=0:e===!0&&(e=lf),{x:Cy(e,"left","right"),y:Cy(e,"top","bottom")}}function Cy(e,t,n){return{min:Ty(e,t),max:Ty(e,n)}}function Ty(e,t){return typeof e=="number"?e:e[t]||0}const _y=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ai=()=>({x:_y(),y:_y()}),Ay=()=>({min:0,max:0}),Oe=()=>({x:Ay(),y:Ay()});function Ft(e){return[e("x"),e("y")]}function fk({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function rj({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function ij(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function wc(e){return e===void 0||e===1}function uf({scale:e,scaleX:t,scaleY:n}){return!wc(e)||!wc(t)||!wc(n)}function Or(e){return uf(e)||pk(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function pk(e){return Iy(e.x)||Iy(e.y)}function Iy(e){return e&&e!=="0%"}function zl(e,t,n){const r=e-n,i=t*r;return n+i}function Ny(e,t,n,r,i){return i!==void 0&&(e=zl(e,i,r)),zl(e,n,r)+t}function cf(e,t=0,n=1,r,i){e.min=Ny(e.min,t,n,r,i),e.max=Ny(e.max,t,n,r,i)}function hk(e,{x:t,y:n}){cf(e.x,t.translate,t.scale,t.originPoint),cf(e.y,n.translate,n.scale,n.originPoint)}const Py=.999999999999,Ry=1.0000000000001;function sj(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,a;for(let o=0;o<i;o++){s=n[o],a=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Ni(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,hk(e,a)),r&&Or(s.latestValues)&&Ni(e,s.latestValues))}t.x<Ry&&t.x>Py&&(t.x=1),t.y<Ry&&t.y>Py&&(t.y=1)}function Ii(e,t){e.min=e.min+t,e.max=e.max+t}function jy(e,t,n,r,i=.5){const s=Pe(e.min,e.max,i);cf(e,t,n,s,r)}function Ni(e,t){jy(e.x,t.x,t.scaleX,t.scale,t.originX),jy(e.y,t.y,t.scaleY,t.scale,t.originY)}function mk(e,t){return fk(ij(e.getBoundingClientRect(),t))}function aj(e,t,n){const r=mk(e,n),{scroll:i}=t;return i&&(Ii(r.x,i.offset.x),Ii(r.y,i.offset.y)),r}const gk=({current:e})=>e?e.ownerDocument.defaultView:null,oj=new WeakMap;class lj{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Oe(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ka(d).point)},s=(d,f)=>{const{drag:p,dragPropagation:h,onDragStart:x}=this.getProps();if(p&&!h&&(this.openDragLock&&this.openDragLock(),this.openDragLock=e5(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ft(b=>{let g=this.getAxisMotionValue(b).get()||0;if(vn.test(g)){const{projection:m}=this.visualElement;if(m&&m.layout){const y=m.layout.layoutBox[b];y&&(g=jt(y)*(parseFloat(g)/100))}}this.originPoint[b]=g}),x&&_e.postRender(()=>x(d,f)),Jd(this.visualElement,"transform");const{animationState:v}=this.visualElement;v&&v.setActive("whileDrag",!0)},a=(d,f)=>{const{dragPropagation:p,dragDirectionLock:h,onDirectionLock:x,onDrag:v}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:b}=f;if(h&&this.currentDirection===null){this.currentDirection=uj(b),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",f.point,b),this.updateAxis("y",f.point,b),this.visualElement.render(),v&&v(d,f)},o=(d,f)=>this.stop(d,f),l=()=>Ft(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new lk(t,{onSessionStart:i,onStart:s,onMove:a,onSessionEnd:o,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:gk(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&_e.postRender(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!So(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=QR(a,this.constraints[t],this.elastic[t])),s.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&Ti(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=ZR(i.layoutBox,n):this.constraints=!1,this.elastic=nj(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Ft(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=tj(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Ti(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=aj(r,i.root,this.visualElement.getTransformPagePoint());let a=JR(i.layout.layoutBox,s);if(n){const o=n(rj(a));this.hasMutatedConstraints=!!o,o&&(a=fk(o))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),l=this.constraints||{},u=Ft(d=>{if(!So(d,n,this.currentDirection))return;let f=l&&l[d]||{};a&&(f={min:0,max:0});const p=i?200:1e6,h=i?40:1e7,x={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:h,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,x)});return Promise.all(u).then(o)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Jd(this.visualElement,t),r.start(_h(t,r,0,n,this.visualElement,!1))}stopAnimation(){Ft(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Ft(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Ft(n=>{const{drag:r}=this.getProps();if(!So(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:o}=i.layout.layoutBox[n];s.set(t[n]-Pe(a,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Ti(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Ft(a=>{const o=this.getAxisMotionValue(a);if(o&&this.constraints!==!1){const l=o.get();i[a]=ej({min:l,max:l},this.constraints[a])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Ft(a=>{if(!So(a,t,null))return;const o=this.getAxisMotionValue(a),{min:l,max:u}=this.constraints[a];o.set(Pe(l,u,i[a]))})}addListeners(){if(!this.visualElement.current)return;oj.set(this.visualElement,this);const t=this.visualElement.current,n=Ks(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Ti(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),_e.read(r);const a=Na(window,"resize",()=>this.scalePositionWithinConstraints()),o=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Ft(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{a(),n(),s(),o&&o()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:a=lf,dragMomentum:o=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:a,dragMomentum:o}}}function So(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function uj(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class cj extends Ar{constructor(t){super(t),this.removeGroupControls=Pt,this.removeListeners=Pt,this.controls=new lj(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Pt}unmount(){this.removeGroupControls(),this.removeListeners()}}const Dy=e=>(t,n)=>{e&&_e.postRender(()=>e(t,n))};class dj extends Ar{constructor(){super(...arguments),this.removePointerDownListener=Pt}onPointerDown(t){this.session=new lk(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:gk(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Dy(t),onStart:Dy(n),onMove:r,onEnd:(s,a)=>{delete this.session,i&&_e.postRender(()=>i(s,a))}}}mount(){this.removePointerDownListener=Ks(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Xo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ly(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Cs={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(ee.test(e))e=parseFloat(e);else return e;const n=Ly(e,t.target.x),r=Ly(e,t.target.y);return`${n}% ${r}%`}},fj={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Sr.parse(e);if(i.length>5)return r;const s=Sr.createTransformer(e),a=typeof i[0]!="number"?1:0,o=n.x.scale*t.x,l=n.y.scale*t.y;i[0+a]/=o,i[1+a]/=l;const u=Pe(o,l,.5);return typeof i[2+a]=="number"&&(i[2+a]/=u),typeof i[3+a]=="number"&&(i[3+a]/=u),s(i)}};class pj extends E.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;jP(hj),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Xo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,a=r.projection;return a&&(a.isPresent=s,i||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?a.promote():a.relegate()||_e.postRender(()=>{const o=a.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),nh.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function yk(e){const[t,n]=KN(),r=E.useContext(J1);return c.jsx(pj,{...e,layoutGroup:r,switchLayoutGroup:E.useContext(ow),isPresent:t,safeToRemove:n})}const hj={borderRadius:{...Cs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Cs,borderTopRightRadius:Cs,borderBottomLeftRadius:Cs,borderBottomRightRadius:Cs,boxShadow:fj};function mj(e,t,n){const r=at(e)?e:Aa(e);return r.start(_h("",r,t,n)),r.animation}function gj(e){return e instanceof SVGElement&&e.tagName!=="svg"}const yj=(e,t)=>e.depth-t.depth;class xj{constructor(){this.children=[],this.isDirty=!1}add(t){gh(this.children,t),this.isDirty=!0}remove(t){yh(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(yj),this.isDirty=!1,this.children.forEach(t)}}function vj(e,t){const n=bn.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(kr(r),e(s-t))};return _e.read(r,!0),()=>kr(r)}const xk=["TopLeft","TopRight","BottomLeft","BottomRight"],bj=xk.length,My=e=>typeof e=="string"?parseFloat(e):e,Oy=e=>typeof e=="number"||ee.test(e);function wj(e,t,n,r,i,s){i?(e.opacity=Pe(0,n.opacity!==void 0?n.opacity:1,kj(r)),e.opacityExit=Pe(t.opacity!==void 0?t.opacity:1,0,Sj(r))):s&&(e.opacity=Pe(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<bj;a++){const o=`border${xk[a]}Radius`;let l=Fy(t,o),u=Fy(n,o);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Oy(l)===Oy(u)?(e[o]=Math.max(Pe(My(l),My(u),r),0),(vn.test(u)||vn.test(l))&&(e[o]+="%")):e[o]=u}(t.rotate||n.rotate)&&(e.rotate=Pe(t.rotate||0,n.rotate||0,r))}function Fy(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const kj=vk(0,.5,Ow),Sj=vk(.5,.95,Pt);function vk(e,t,n){return r=>r<e?0:r>t?1:n(Ji(e,t,r))}function zy(e,t){e.min=t.min,e.max=t.max}function Ot(e,t){zy(e.x,t.x),zy(e.y,t.y)}function Uy(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function By(e,t,n,r,i){return e-=t,e=zl(e,1/n,r),i!==void 0&&(e=zl(e,1/i,r)),e}function Ej(e,t=0,n=1,r=.5,i,s=e,a=e){if(vn.test(t)&&(t=parseFloat(t),t=Pe(a.min,a.max,t/100)-a.min),typeof t!="number")return;let o=Pe(s.min,s.max,r);e===s&&(o-=t),e.min=By(e.min,t,n,o,i),e.max=By(e.max,t,n,o,i)}function Vy(e,t,[n,r,i],s,a){Ej(e,t[n],t[r],t[i],t.scale,s,a)}const Cj=["x","scaleX","originX"],Tj=["y","scaleY","originY"];function $y(e,t,n,r){Vy(e.x,t,Cj,n?n.x:void 0,r?r.x:void 0),Vy(e.y,t,Tj,n?n.y:void 0,r?r.y:void 0)}function Hy(e){return e.translate===0&&e.scale===1}function bk(e){return Hy(e.x)&&Hy(e.y)}function Wy(e,t){return e.min===t.min&&e.max===t.max}function _j(e,t){return Wy(e.x,t.x)&&Wy(e.y,t.y)}function Gy(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function wk(e,t){return Gy(e.x,t.x)&&Gy(e.y,t.y)}function qy(e){return jt(e.x)/jt(e.y)}function Ky(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class Aj{constructor(){this.members=[]}add(t){gh(this.members,t),t.scheduleRender()}remove(t){if(yh(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Ij(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,a=(n==null?void 0:n.z)||0;if((i||s||a)&&(r=`translate3d(${i}px, ${s}px, ${a}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:f,rotateY:p,skewX:h,skewY:x}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),h&&(r+=`skewX(${h}deg) `),x&&(r+=`skewY(${x}deg) `)}const o=e.x.scale*t.x,l=e.y.scale*t.y;return(o!==1||l!==1)&&(r+=`scale(${o}, ${l})`),r||"none"}const Fr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Ls=typeof window<"u"&&window.MotionDebug!==void 0,kc=["","X","Y","Z"],Nj={visibility:"hidden"},Yy=1e3;let Pj=0;function Sc(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function kk(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Nw(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",_e,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&kk(r)}function Sk({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a={},o=t==null?void 0:t()){this.id=Pj++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ls&&(Fr.totalNodes=Fr.resolvedTargetDeltas=Fr.recalculatedProjection=0),this.nodes.forEach(Dj),this.nodes.forEach(zj),this.nodes.forEach(Uj),this.nodes.forEach(Lj),Ls&&window.MotionDebug.record(Fr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new xj)}addEventListener(a,o){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new xh),this.eventHandlers.get(a).add(o)}notifyListeners(a,...o){const l=this.eventHandlers.get(a);l&&l.notify(...o)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,o=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=gj(a),this.instance=a;const{layoutId:l,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),o&&(u||l)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=vj(p,250),Xo.hasAnimatedSinceResize&&(Xo.hasAnimatedSinceResize=!1,this.nodes.forEach(Qy))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:h,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||d.getDefaultTransition()||Wj,{onLayoutAnimationStart:b,onLayoutAnimationComplete:g}=d.getProps(),m=!this.targetLayout||!wk(this.targetLayout,x)||h,y=!p&&h;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||p&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,y);const S={...fh(v,"layout"),onPlay:b,onComplete:g};(d.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else p||Qy(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,kr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Bj),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&kk(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:o,layout:l}=this.options;if(o===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Xy);return}this.isUpdating||this.nodes.forEach(Oj),this.isUpdating=!1,this.nodes.forEach(Fj),this.nodes.forEach(Rj),this.nodes.forEach(jj),this.clearAllSnapshots();const o=bn.now();Qe.delta=Wn(0,1e3/60,o-Qe.timestamp),Qe.timestamp=o,Qe.isProcessing=!0,pc.update.process(Qe),pc.preRender.process(Qe),pc.render.process(Qe),Qe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,nh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Mj),this.sharedNodes.forEach(Vj)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,_e.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){_e.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Oe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let o=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(o=!1),o){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,o=this.projectionDelta&&!bk(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;a&&(o||Or(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const o=this.measurePageBox();let l=this.removeElementScroll(o);return a&&(l=this.removeTransform(l)),Gj(l),{animationId:this.root.animationId,measuredBox:o,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var a;const{visualElement:o}=this.options;if(!o)return Oe();const l=o.measureViewportBox();if(!(((a=this.scroll)===null||a===void 0?void 0:a.wasRoot)||this.path.some(qj))){const{scroll:d}=this.root;d&&(Ii(l.x,d.offset.x),Ii(l.y,d.offset.y))}return l}removeElementScroll(a){var o;const l=Oe();if(Ot(l,a),!((o=this.scroll)===null||o===void 0)&&o.wasRoot)return l;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&Ot(l,a),Ii(l.x,f.offset.x),Ii(l.y,f.offset.y))}return l}applyTransform(a,o=!1){const l=Oe();Ot(l,a);for(let u=0;u<this.path.length;u++){const d=this.path[u];!o&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Ni(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Or(d.latestValues)&&Ni(l,d.latestValues)}return Or(this.latestValues)&&Ni(l,this.latestValues),l}removeTransform(a){const o=Oe();Ot(o,a);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Or(u.latestValues))continue;uf(u.latestValues)&&u.updateSnapshot();const d=Oe(),f=u.measurePageBox();Ot(d,f),$y(o,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return Or(this.latestValues)&&$y(o,this.latestValues),o}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Qe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var o;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Qe.timestamp,!this.targetDelta&&!this.relativeTarget){const h=this.getClosestProjectingParent();h&&h.layout&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Oe(),this.relativeTargetOrigin=Oe(),Xs(this.relativeTargetOrigin,this.layout.layoutBox,h.layout.layoutBox),Ot(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Oe(),this.targetWithTransforms=Oe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),XR(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ot(this.target,this.layout.layoutBox),hk(this.target,this.targetDelta)):Ot(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const h=this.getClosestProjectingParent();h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Oe(),this.relativeTargetOrigin=Oe(),Xs(this.relativeTargetOrigin,this.target,h.target),Ot(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ls&&Fr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||uf(this.parent.latestValues)||pk(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const o=this.getLead(),l=!!this.resumingFrom||this!==o;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Qe.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;Ot(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,h=this.treeScale.y;sj(this.layoutCorrected,this.treeScale,this.path,l),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Oe());const{target:x}=o;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Uy(this.prevProjectionDelta.x,this.projectionDelta.x),Uy(this.prevProjectionDelta.y,this.projectionDelta.y)),Ys(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==h||!Ky(this.projectionDelta.x,this.prevProjectionDelta.x)||!Ky(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),Ls&&Fr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var o;if((o=this.options.visualElement)===null||o===void 0||o.scheduleRender(),a){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ai(),this.projectionDelta=Ai(),this.projectionDeltaWithTransform=Ai()}setAnimationOrigin(a,o=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},f=Ai();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const p=Oe(),h=l?l.source:void 0,x=this.layout?this.layout.source:void 0,v=h!==x,b=this.getStack(),g=!b||b.members.length<=1,m=!!(v&&!g&&this.options.crossfade===!0&&!this.path.some(Hj));this.animationProgress=0;let y;this.mixTargetDelta=S=>{const C=S/1e3;Zy(f.x,a.x,C),Zy(f.y,a.y,C),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Xs(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),$j(this.relativeTarget,this.relativeTargetOrigin,p,C),y&&_j(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=Oe()),Ot(y,this.relativeTarget)),v&&(this.animationValues=d,wj(d,u,this.latestValues,C,m,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(kr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=_e.update(()=>{Xo.hasAnimatedSinceResize=!0,this.currentAnimation=mj(0,Yy,{...a,onUpdate:o=>{this.mixTargetDelta(o),a.onUpdate&&a.onUpdate(o)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Yy),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:o,target:l,layout:u,latestValues:d}=a;if(!(!o||!l||!u)){if(this!==a&&this.layout&&u&&Ek(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Oe();const f=jt(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+f;const p=jt(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+p}Ot(o,l),Ni(o,d),Ys(this.projectionDeltaWithTransform,this.layoutCorrected,o,d)}}registerSharedNode(a,o){this.sharedNodes.has(a)||this.sharedNodes.set(a,new Aj),this.sharedNodes.get(a).add(o);const u=o.options.initialPromotionConfig;o.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(o):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:o,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let o=!1;const{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(o=!0),!o)return;const u={};l.z&&Sc("z",a,u,this.animationValues);for(let d=0;d<kc.length;d++)Sc(`rotate${kc[d]}`,a,u,this.animationValues),Sc(`skew${kc[d]}`,a,u,this.animationValues);a.render();for(const d in u)a.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);a.scheduleRender()}getProjectionStyles(a){var o,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Nj;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Ko(a==null?void 0:a.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const v={};return this.options.layoutId&&(v.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,v.pointerEvents=Ko(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Or(this.latestValues)&&(v.transform=d?d({},""):"none",this.hasProjected=!1),v}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=Ij(this.projectionDeltaWithTransform,this.treeScale,p),d&&(u.transform=d(p,u.transform));const{x:h,y:x}=this.projectionDelta;u.transformOrigin=`${h.origin*100}% ${x.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(o=p.opacity)!==null&&o!==void 0?o:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const v in Dl){if(p[v]===void 0)continue;const{correct:b,applyTo:g}=Dl[v],m=u.transform==="none"?p[v]:b(p[v],f);if(g){const y=g.length;for(let S=0;S<y;S++)u[g[S]]=m}else u[v]=m}return this.options.layoutId&&(u.pointerEvents=f===this?Ko(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var o;return(o=a.currentAnimation)===null||o===void 0?void 0:o.stop()}),this.root.nodes.forEach(Xy),this.root.sharedNodes.clear()}}}function Rj(e){e.updateLayout()}function jj(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,a=n.source!==e.layout.source;s==="size"?Ft(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],h=jt(p);p.min=r[f].min,p.max=p.min+h}):Ek(s,n.layoutBox,r)&&Ft(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],h=jt(r[f]);p.max=p.min+h,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+h)});const o=Ai();Ys(o,r,n.layoutBox);const l=Ai();a?Ys(l,e.applyTransform(i,!0),n.measuredBox):Ys(l,r,n.layoutBox);const u=!bk(o);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:h}=f;if(p&&h){const x=Oe();Xs(x,n.layoutBox,p.layoutBox);const v=Oe();Xs(v,r,h.layoutBox),wk(x,v)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=v,e.relativeTargetOrigin=x,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:o,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Dj(e){Ls&&Fr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Lj(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Mj(e){e.clearSnapshot()}function Xy(e){e.clearMeasurements()}function Oj(e){e.isLayoutDirty=!1}function Fj(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Qy(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function zj(e){e.resolveTargetDelta()}function Uj(e){e.calcProjection()}function Bj(e){e.resetSkewAndRotation()}function Vj(e){e.removeLeadSnapshot()}function Zy(e,t,n){e.translate=Pe(t.translate,0,n),e.scale=Pe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Jy(e,t,n,r){e.min=Pe(t.min,n.min,r),e.max=Pe(t.max,n.max,r)}function $j(e,t,n,r){Jy(e.x,t.x,n.x,r),Jy(e.y,t.y,n.y,r)}function Hj(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Wj={duration:.45,ease:[.4,0,.1,1]},ex=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),tx=ex("applewebkit/")&&!ex("chrome/")?Math.round:Pt;function nx(e){e.min=tx(e.min),e.max=tx(e.max)}function Gj(e){nx(e.x),nx(e.y)}function Ek(e,t,n){return e==="position"||e==="preserve-aspect"&&!YR(qy(t),qy(n),.2)}function qj(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const Kj=Sk({attachResizeListener:(e,t)=>Na(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ec={current:void 0},Ck=Sk({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ec.current){const e=new Kj({});e.mount(window),e.setOptions({layoutScroll:!0}),Ec.current=e}return Ec.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Yj={pan:{Feature:dj},drag:{Feature:cj,ProjectionNode:Ck,MeasureLayout:yk}};function rx(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&_e.postRender(()=>s(t,Ka(t)))}class Xj extends Ar{mount(){const{current:t}=this.node;t&&(this.unmount=YP(t,n=>(rx(this.node,n,"Start"),r=>rx(this.node,r,"End"))))}unmount(){}}class Qj extends Ar{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=qa(Na(this.node.current,"focus",()=>this.onFocus()),Na(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function ix(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&_e.postRender(()=>s(t,Ka(t)))}class Zj extends Ar{mount(){const{current:t}=this.node;t&&(this.unmount=JP(t,n=>(ix(this.node,n,"Start"),(r,{success:i})=>ix(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const df=new WeakMap,Cc=new WeakMap,Jj=e=>{const t=df.get(e.target);t&&t(e)},eD=e=>{e.forEach(Jj)};function tD({root:e,...t}){const n=e||document;Cc.has(n)||Cc.set(n,{});const r=Cc.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(eD,{root:e,...t})),r[i]}function nD(e,t,n){const r=tD(t);return df.set(e,n),r.observe(e),()=>{df.delete(e),r.unobserve(e)}}const rD={some:0,all:1};class iD extends Ar{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:rD[i]},o=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=u?d:f;p&&p(l)};return nD(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(sD(t,n))&&this.startObserver()}unmount(){}}function sD({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const aD={inView:{Feature:iD},tap:{Feature:Zj},focus:{Feature:Qj},hover:{Feature:Xj}},oD={layout:{ProjectionNode:Ck,MeasureLayout:yk}},ff={current:null},Tk={current:!1};function lD(){if(Tk.current=!0,!!Qp)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>ff.current=e.matches;e.addListener(t),t()}else ff.current=!1}const uD=[...Qw,rt,Sr],cD=e=>uD.find(Xw(e)),sx=new WeakMap;function dD(e,t,n){for(const r in t){const i=t[r],s=n[r];if(at(i))e.addValue(r,i);else if(at(s))e.addValue(r,Aa(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const a=e.getValue(r);a.liveStyle===!0?a.jump(i):a.hasAnimated||a.set(i)}else{const a=e.getStaticValue(r);e.addValue(r,Aa(a!==void 0?a:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const ax=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class fD{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Eh,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=bn.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,_e.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:d}=a;this.onUpdate=d,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.blockInitialAnimation=!!s,this.isControllingVariants=vu(n),this.isVariantNode=sw(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in p){const x=p[h];l[h]!==void 0&&at(x)&&x.set(l[h],!1)}}mount(t){this.current=t,sx.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Tk.current||lD(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ff.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){sx.delete(this.current),this.projection&&this.projection.unmount(),kr(this.notifyUpdate),kr(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=li.has(t),i=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&_e.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s(),a&&a(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in es){const n=es[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Oe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<ax.length;r++){const i=ax[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,a=t[s];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=dD(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Aa(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(Kw(i)||zw(i))?i=parseFloat(i):!cD(i)&&Sr.test(n)&&(i=Ww(t,n)),this.setBaseTarget(t,at(i)?i.get():i)),at(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const a=ih(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);a&&(i=a[t])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!at(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new xh),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class _k extends fD{constructor(){super(...arguments),this.KeyframeResolver=Zw}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;at(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function pD(e){return window.getComputedStyle(e)}class hD extends _k{constructor(){super(...arguments),this.type="html",this.renderInstance=hw}readValueFromInstance(t,n){if(li.has(n)){const r=Sh(n);return r&&r.default||0}else{const r=pD(t),i=(dw(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return mk(t,n)}build(t,n,r){oh(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return dh(t,n,r)}}class mD extends _k{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Oe}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(li.has(n)){const r=Sh(n);return r&&r.default||0}return n=mw.has(n)?n:th(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return xw(t,n,r)}build(t,n,r){lh(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){gw(t,n,r,i)}mount(t){this.isSVGTag=ch(t.tagName),super.mount(t)}}const gD=(e,t)=>rh(e)?new mD(t):new hD(t,{allowProjection:e!==E.Fragment}),yD=VP({...UR,...aD,...Yj,...oD},gD),Tc=rP(yD);function xD({status:e}){const t=e==="speaking",n=e==="listening",r=e==="thinking";return c.jsxs("div",{className:`orb-stage ${t?"is-speaking":""} ${n?"is-listening":""} ${r?"is-thinking":""}`,"aria-label":`AI status: ${e}`,children:[c.jsx(Tc.div,{className:"orb-ring ring-outer",animate:{rotate:r?360:-18},transition:{duration:r?7:24,repeat:1/0,ease:"linear"}}),c.jsx(Tc.div,{className:"orb-ring ring-mid",animate:{rotate:r?-360:24,scale:t?[1,1.04,1]:1},transition:{duration:t?.7:18,repeat:1/0,ease:"linear"}}),c.jsxs("div",{className:"orb-core",children:[c.jsx("div",{className:"orb-grid"}),c.jsx("div",{className:"orb-wave","aria-hidden":"true",children:[10,18,28,16,34,21,12,26,17,32,13,22,10].map((i,s)=>c.jsx(Tc.span,{animate:t?{height:[i,i*1.7,i*.65,i]}:n?{height:[i,i*1.35,i]}:{height:i*.65},transition:{duration:.6+s%4*.12,repeat:1/0,delay:s*.025}},s))})]}),c.jsx("span",{className:"orb-dot dot-top"}),c.jsx("span",{className:"orb-dot dot-right"}),c.jsx("span",{className:"orb-dot dot-bottom"}),c.jsx("span",{className:"orb-dot dot-left"})]})}const vD=[{id:"green",name:"Green",color:"#78f6a8"},{id:"amber",name:"Amber",color:"#ffc16b"},{id:"cyan",name:"Cyan",color:"#7cecff"},{id:"violet",name:"Violet",color:"#c084fc"},{id:"crimson",name:"Crimson",color:"#ff6b6b"},{id:"solar",name:"Solar",color:"#fde047"},{id:"emerald",name:"Emerald",color:"#34d399"},{id:"pink",name:"Pink",color:"#f472b6"},{id:"cobalt",name:"Cobalt",color:"#60a5fa"},{id:"orange",name:"Orange",color:"#fb923c"},{id:"mint",name:"Mint",color:"#6ee7b7"},{id:"rose",name:"Rose",color:"#fb7185"},{id:"ice",name:"Ice",color:"#a5f3fc"},{id:"lime",name:"Lime",color:"#a3e635"},{id:"teal",name:"Teal",color:"#2dd4bf"}],bD=[{id:"aurora",name:"Aurora",grad:"linear-gradient(135deg, #34d399, #7cecff, #c084fc)"},{id:"cyberpunk",name:"Cyberpunk",grad:"linear-gradient(135deg, #f472b6, #fb923c, #fde047)"},{id:"nebula",name:"Nebula",grad:"linear-gradient(135deg, #c084fc, #818cf8, #60a5fa)"},{id:"sunset",name:"Sunset",grad:"linear-gradient(135deg, #ff6b6b, #fb923c, #fde047)"},{id:"toxic",name:"Toxic",grad:"linear-gradient(135deg, #a3e635, #2dd4bf, #7cecff)"}];function wD({open:e,onClose:t,providers:n,settings:r,onChange:i}){var x;const s=n.filter(v=>v.available),a=r.default_provider==="auto"?s[0]:n.find(v=>v.id===r.default_provider),o=(a==null?void 0:a.models)||[],[l,u]=E.useState([]);E.useEffect(()=>{var b,g;if(!("speechSynthesis"in window))return;const v=()=>u(window.speechSynthesis.getVoices());return v(),(g=(b=window.speechSynthesis).addEventListener)==null||g.call(b,"voiceschanged",v),()=>{var m,y;return(y=(m=window.speechSynthesis).removeEventListener)==null?void 0:y.call(m,"voiceschanged",v)}},[]);const d=()=>{if(!("speechSynthesis"in window))return;window.speechSynthesis.cancel();const v={natural:[1,1],warm:[.94,1.06],energetic:[1.08,1.08],calm:[.88,.92],narrator:[.92,.96],professional:[.98,1],female:[.95,1.12],male:[.95,.88]},[b,g]=v[r.voice_profile||"natural"]||v.natural,m=new SpeechSynthesisUtterance("Hello! I am ELIZA AI, your voice assistant. Ready whenever you are.");m.rate=Math.max(.5,Math.min(2,Number(r.speech_rate||1)*b)),m.pitch=g;const y=l.find(S=>S.name===r.voice_name);y&&(m.voice=y),window.speechSynthesis.speak(m)},f=v=>{const b=v==="auto"?s[0]:n.find(g=>g.id===v);i({default_provider:v,default_model:(b==null?void 0:b.default_model)||""})},p=(a==null?void 0:a.name)||(r.default_provider==="auto"?"Automatic Routing":r.default_provider),h=r.default_model||(a==null?void 0:a.default_model)||"None configured";return e?c.jsx("div",{className:"drawer-backdrop",onMouseDown:v=>v.target===v.currentTarget&&t(),children:c.jsxs("aside",{className:"settings-drawer",role:"dialog","aria-label":"Settings",children:[c.jsxs("header",{className:"drawer-header",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"SYSTEM CONFIGURATION"}),c.jsx("h2",{children:"Settings"})]}),c.jsx("button",{className:"icon-button",onClick:t,"aria-label":"Close settings",children:c.jsx(It,{size:18})})]}),c.jsxs("section",{className:"settings-section",children:[c.jsxs("div",{className:"section-heading",children:[c.jsx(KT,{size:16}),c.jsx("h3",{children:"AI Model"})]}),c.jsxs("div",{className:"active-model-card",children:[c.jsx("span",{className:"card-title",children:"Connected Backend AI Model"}),c.jsxs("span",{className:"card-value",children:[c.jsx("span",{className:`status-dot ${s.length?"online":""}`}),c.jsx("b",{children:h}),c.jsxs("small",{style:{color:"#7a9582",marginLeft:"auto",fontSize:"10px"},children:["via ",p]})]})]}),c.jsx("label",{className:"field-label",htmlFor:"provider",children:"Provider"}),c.jsxs("select",{id:"provider",value:r.default_provider||"auto",onChange:v=>f(v.target.value),children:[c.jsx("option",{value:"auto",children:"Automatic routing (prioritizes active credentials)"}),n.map(v=>c.jsxs("option",{value:v.id,disabled:!v.available,children:[v.name,v.available?` (${v.default_model||"Connected"})`:" — not configured"]},v.id))]}),c.jsxs("label",{className:"field-label",htmlFor:"model-select",children:["Model Selection ",o.length>0?`(${o.length} models available)`:""]}),o.length>0?c.jsx("select",{id:"model-select",value:r.default_model||(a==null?void 0:a.default_model)||o[0]||"",onChange:v=>i({default_model:v.target.value}),children:o.map(v=>c.jsx("option",{value:v,children:v},v))}):c.jsx("input",{id:"model",value:r.default_model||"",onChange:v=>i({default_model:v.target.value}),placeholder:(a==null?void 0:a.default_model)||((x=s[0])==null?void 0:x.default_model)||"Model identifier"}),c.jsx("p",{className:"field-help",children:"Backend is connected to active providers. Keys and credentials are securely managed on the server."}),c.jsx("div",{className:"provider-list",children:n.map(v=>c.jsxs("div",{className:"provider-row",children:[c.jsx("span",{className:`status-dot ${v.available?"online":""}`}),c.jsx("span",{children:v.name}),c.jsx("small",{children:v.available?v.default_model||"Connected":"Not configured"})]},v.id))})]}),c.jsxs("section",{className:"settings-section",children:[c.jsxs("div",{className:"section-heading",children:[c.jsx(Hb,{size:16}),c.jsx("h3",{children:"Voice Output"})]}),c.jsxs("label",{className:"toggle-row",children:[c.jsxs("span",{children:[c.jsx("b",{children:"Speak responses"}),c.jsx("small",{children:"Read the assistant's answer aloud with speech synthesis"})]}),c.jsx("input",{type:"checkbox",checked:r.auto_speak!==!1,onChange:v=>i({auto_speak:v.target.checked})})]}),c.jsx("label",{className:"field-label",htmlFor:"voice-profile",children:"Voice profile"}),c.jsxs("select",{id:"voice-profile",value:r.voice_profile||"natural",onChange:v=>i({voice_profile:v.target.value}),children:[c.jsx("option",{value:"natural",children:"Natural · balanced everyday voice"}),c.jsx("option",{value:"female",children:"Female · clear feminine voice"}),c.jsx("option",{value:"male",children:"Male · clear masculine voice"}),c.jsx("option",{value:"warm",children:"Warm · friendly and welcoming"}),c.jsx("option",{value:"energetic",children:"Energetic · lively and upbeat"}),c.jsx("option",{value:"calm",children:"Calm · slower and soothing"}),c.jsx("option",{value:"narrator",children:"Narrator · measured storytelling"}),c.jsx("option",{value:"professional",children:"Professional · clear and composed"})]}),c.jsx("label",{className:"field-label",htmlFor:"voice",children:"Specific browser voice (optional)"}),c.jsxs("select",{id:"voice",value:r.voice_name||"",onChange:v=>i({voice_name:v.target.value}),children:[c.jsx("option",{value:"",children:"Auto-select based on profile"}),l.map(v=>c.jsxs("option",{value:v.name,children:[v.name," (",v.lang,")",v.default?" · default":""]},`${v.name}-${v.lang}`))]}),c.jsxs("button",{className:"text-action",type:"button",onClick:d,style:{marginTop:"8px"},children:[c.jsx(e_,{size:13})," Test selected voice profile"]}),c.jsxs("label",{className:"field-label",htmlFor:"rate",style:{marginTop:"14px"},children:["Speech speed: ",Number(r.speech_rate||1).toFixed(1),"×"]}),c.jsx("input",{id:"rate",type:"range",min:"0.5",max:"2",step:"0.1",value:r.speech_rate||1,onChange:v=>i({speech_rate:Number(v.target.value)})})]}),c.jsxs("section",{className:"settings-section",children:[c.jsxs("div",{className:"section-heading",children:[c.jsx(Op,{size:16}),c.jsx("h3",{children:"Answer Quality & Persona"})]}),c.jsx("label",{className:"field-label",htmlFor:"response-style",children:"Response Persona / Profile"}),c.jsxs("select",{id:"response-style",value:r.response_style||"balanced",onChange:v=>i({response_style:v.target.value}),children:[c.jsx("option",{value:"balanced",children:"Balanced · Clear, natural & well-structured (Recommended)"}),c.jsx("option",{value:"concise",children:"Concise · Direct answer with key takeaways"}),c.jsx("option",{value:"tutor",children:"Patient Tutor · Step-by-step breakdown & analogies"}),c.jsx("option",{value:"expert",children:"Senior Expert · Technical precision & trade-offs"}),c.jsx("option",{value:"coding",children:"Software Engineer · Production code, tests & edge cases"}),c.jsx("option",{value:"creative",children:"Creative · Imaginative, original & expressive"})]}),c.jsxs("label",{className:"toggle-row",children:[c.jsxs("span",{children:[c.jsx("b",{children:"Detailed answers"}),c.jsx("small",{children:"Include comprehensive examples, edge cases, and summaries"})]}),c.jsx("input",{type:"checkbox",checked:r.detailed_responses===!0,onChange:v=>i({detailed_responses:v.target.checked})})]}),c.jsx("label",{className:"field-label",htmlFor:"custom-prompt",children:"Additional instructions (optional)"}),c.jsx("textarea",{id:"custom-prompt",rows:4,maxLength:4e3,value:r.custom_system_prompt||"",onChange:v=>i({custom_system_prompt:v.target.value}),placeholder:"Example: Explain technical concepts in simple English, include practical code examples, and outline clear next steps."}),c.jsx("p",{className:"field-help",children:"These instructions are sent with each chat request. Keep them focused on your preferred style and task; do not put API keys or private credentials here."})]}),c.jsxs("section",{className:"settings-section",children:[c.jsxs("div",{className:"section-heading",children:[c.jsx(ZT,{size:16}),c.jsx("h3",{children:"Appearance & Themes"})]}),c.jsx("div",{className:"theme-category-label",children:"15 Solid Colors"}),c.jsx("div",{className:"theme-swatches-grid",children:vD.map(v=>c.jsxs("button",{type:"button",className:`theme-swatch ${r.theme===v.id?"active":""}`,onClick:()=>i({theme:v.id}),title:v.name,children:[c.jsx("span",{className:"swatch-color-pill",style:{backgroundColor:v.color}}),c.jsx("span",{className:"swatch-name",children:v.name})]},v.id))}),c.jsx("div",{className:"theme-category-label",children:"5 Gradient Mixed Themes"}),c.jsx("div",{className:"theme-swatches-grid",style:{gridTemplateColumns:"repeat(5, 1fr)"},children:bD.map(v=>c.jsxs("button",{type:"button",className:`theme-swatch ${r.theme===v.id?"active":""}`,onClick:()=>i({theme:v.id}),title:v.name,children:[c.jsx("span",{className:"swatch-color-pill",style:{background:v.grad}}),c.jsx("span",{className:"swatch-name",children:v.name})]},v.id))})]}),c.jsxs("div",{className:"dev-credit-card",children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(i_,{size:12,color:"var(--accent)"}),c.jsxs("span",{children:["Developed by ",c.jsx("strong",{children:"Akhil Thadaka"})]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginTop:"2px"},children:[c.jsx(va,{size:12,color:"var(--accent)"}),c.jsxs("span",{children:["Contact: ",c.jsx("a",{href:"tel:9121751697",children:"9121751697"})]})]})]}),c.jsxs("footer",{className:"drawer-footer",children:[c.jsx(n_,{size:14}),c.jsx("span",{children:"Settings save automatically for this running session."})]})]})}):null}function kD(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const SD=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ED=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,CD={};function ox(e,t){return(CD.jsx?ED:SD).test(e)}const TD=/[ \t\n\f\r]/g;function _D(e){return typeof e=="object"?e.type==="text"?lx(e.value):!1:lx(e)}function lx(e){return e.replace(TD,"")===""}class Ya{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}Ya.prototype.normal={};Ya.prototype.property={};Ya.prototype.space=void 0;function Ak(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Ya(n,r,t)}function pf(e){return e.toLowerCase()}class kt{constructor(t,n){this.attribute=n,this.property=t}}kt.prototype.attribute="";kt.prototype.booleanish=!1;kt.prototype.boolean=!1;kt.prototype.commaOrSpaceSeparated=!1;kt.prototype.commaSeparated=!1;kt.prototype.defined=!1;kt.prototype.mustUseProperty=!1;kt.prototype.number=!1;kt.prototype.overloadedBoolean=!1;kt.prototype.property="";kt.prototype.spaceSeparated=!1;kt.prototype.space=void 0;let AD=0;const re=ui(),Be=ui(),hf=ui(),F=ui(),ve=ui(),Qr=ui(),Tt=ui();function ui(){return 2**++AD}const mf=Object.freeze(Object.defineProperty({__proto__:null,boolean:re,booleanish:Be,commaOrSpaceSeparated:Tt,commaSeparated:Qr,number:F,overloadedBoolean:hf,spaceSeparated:ve},Symbol.toStringTag,{value:"Module"})),_c=Object.keys(mf);class Ah extends kt{constructor(t,n,r,i){let s=-1;if(super(t,n),ux(this,"space",i),typeof r=="number")for(;++s<_c.length;){const a=_c[s];ux(this,_c[s],(r&mf[a])===mf[a])}}}Ah.prototype.defined=!0;function ux(e,t,n){n&&(e[t]=n)}function fs(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const s=new Ah(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),t[r]=s,n[pf(r)]=r,n[pf(s.attribute)]=r}return new Ya(t,n,e.space)}const Ik=fs({properties:{ariaActiveDescendant:null,ariaAtomic:Be,ariaAutoComplete:null,ariaBusy:Be,ariaChecked:Be,ariaColCount:F,ariaColIndex:F,ariaColSpan:F,ariaControls:ve,ariaCurrent:null,ariaDescribedBy:ve,ariaDetails:null,ariaDisabled:Be,ariaDropEffect:ve,ariaErrorMessage:null,ariaExpanded:Be,ariaFlowTo:ve,ariaGrabbed:Be,ariaHasPopup:null,ariaHidden:Be,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ve,ariaLevel:F,ariaLive:null,ariaModal:Be,ariaMultiLine:Be,ariaMultiSelectable:Be,ariaOrientation:null,ariaOwns:ve,ariaPlaceholder:null,ariaPosInSet:F,ariaPressed:Be,ariaReadOnly:Be,ariaRelevant:null,ariaRequired:Be,ariaRoleDescription:ve,ariaRowCount:F,ariaRowIndex:F,ariaRowSpan:F,ariaSelected:Be,ariaSetSize:F,ariaSort:null,ariaValueMax:F,ariaValueMin:F,ariaValueNow:F,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Nk(e,t){return t in e?e[t]:t}function Pk(e,t){return Nk(e,t.toLowerCase())}const ID=fs({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Qr,acceptCharset:ve,accessKey:ve,action:null,allow:null,allowFullScreen:re,allowPaymentRequest:re,allowUserMedia:re,alpha:re,alt:null,as:null,async:re,autoCapitalize:null,autoComplete:ve,autoFocus:re,autoPlay:re,blocking:ve,capture:null,charSet:null,checked:re,cite:null,className:ve,closedBy:null,colorSpace:null,cols:F,colSpan:F,command:null,commandFor:null,content:null,contentEditable:Be,controls:re,controlsList:ve,coords:F|Qr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:re,defer:re,dir:null,dirName:null,disabled:re,download:hf,draggable:Be,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:re,formTarget:null,headers:ve,height:F,hidden:hf,high:F,href:null,hrefLang:null,htmlFor:ve,httpEquiv:ve,id:null,imageSizes:null,imageSrcSet:null,inert:re,inputMode:null,integrity:null,is:null,isMap:re,itemId:null,itemProp:ve,itemRef:ve,itemScope:re,itemType:ve,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:re,low:F,manifest:null,max:null,maxLength:F,media:null,method:null,min:null,minLength:F,multiple:re,muted:re,name:null,nonce:null,noModule:re,noValidate:re,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:re,optimum:F,pattern:null,ping:ve,placeholder:null,playsInline:re,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:re,referrerPolicy:null,rel:ve,required:re,reversed:re,rows:F,rowSpan:F,sandbox:ve,scope:null,scoped:re,seamless:re,selected:re,shadowRootClonable:re,shadowRootCustomElementRegistry:re,shadowRootDelegatesFocus:re,shadowRootMode:null,shadowRootSerializable:re,shape:null,size:F,sizes:null,slot:null,span:F,spellCheck:Be,src:null,srcDoc:null,srcLang:null,srcSet:null,start:F,step:null,style:null,tabIndex:F,target:null,title:null,translate:null,type:null,typeMustMatch:re,useMap:null,value:Be,width:F,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ve,axis:null,background:null,bgColor:null,border:F,borderColor:null,bottomMargin:F,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:re,declare:re,event:null,face:null,frame:null,frameBorder:null,hSpace:F,leftMargin:F,link:null,longDesc:null,lowSrc:null,marginHeight:F,marginWidth:F,noResize:re,noHref:re,noShade:re,noWrap:re,object:null,profile:null,prompt:null,rev:null,rightMargin:F,rules:null,scheme:null,scrolling:Be,standby:null,summary:null,text:null,topMargin:F,valueType:null,version:null,vAlign:null,vLink:null,vSpace:F,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:re,disablePictureInPicture:re,disableRemotePlayback:re,exportParts:Qr,part:ve,prefix:null,property:null,results:F,security:null,unselectable:null},space:"html",transform:Pk}),ND=fs({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Tt,accentHeight:F,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:F,amplitude:F,arabicForm:null,ascent:F,attributeName:null,attributeType:null,azimuth:F,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:F,by:null,calcMode:null,capHeight:F,className:ve,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:F,diffuseConstant:F,direction:null,display:null,dur:null,divisor:F,dominantBaseline:null,download:re,dx:null,dy:null,edgeMode:null,editable:null,elevation:F,enableBackground:null,end:null,event:null,exponent:F,externalResourcesRequired:null,fill:null,fillOpacity:F,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Qr,g2:Qr,glyphName:Qr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:F,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:F,horizOriginX:F,horizOriginY:F,id:null,ideographic:F,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:F,k:F,k1:F,k2:F,k3:F,k4:F,kernelMatrix:Tt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:F,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:F,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:F,overlineThickness:F,paintOrder:null,panose1:null,path:null,pathLength:F,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ve,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:F,pointsAtY:F,pointsAtZ:F,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Tt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Tt,rev:Tt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Tt,requiredFeatures:Tt,requiredFonts:Tt,requiredFormats:Tt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:F,specularExponent:F,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:F,strikethroughThickness:F,string:null,stroke:null,strokeDashArray:Tt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:F,strokeOpacity:F,strokeWidth:null,style:null,surfaceScale:F,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Tt,tabIndex:F,tableValues:null,target:null,targetX:F,targetY:F,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Tt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:F,underlineThickness:F,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:F,values:null,vAlphabetic:F,vMathematical:F,vectorEffect:null,vHanging:F,vIdeographic:F,version:null,vertAdvY:F,vertOriginX:F,vertOriginY:F,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:F,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Nk}),Rk=fs({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),jk=fs({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Pk}),Dk=fs({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),PD={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},RD=/[A-Z]/g,cx=/-[a-z]/g,jD=/^data[-\w.:]+$/i;function DD(e,t){const n=pf(t);let r=t,i=kt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&jD.test(t)){if(t.charAt(4)==="-"){const s=t.slice(5).replace(cx,MD);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=t.slice(4);if(!cx.test(s)){let a=s.replace(RD,LD);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=Ah}return new i(r,t)}function LD(e){return"-"+e.toLowerCase()}function MD(e){return e.charAt(1).toUpperCase()}const OD=Ak([Ik,ID,Rk,jk,Dk],"html"),Ih=Ak([Ik,ND,Rk,jk,Dk],"svg");function FD(e){return e.join(" ").trim()}var Nh={},dx=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,zD=/\n/g,UD=/^\s*/,BD=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,VD=/^:\s*/,$D=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,HD=/^[;\s]*/,WD=/^\s+|\s+$/g,GD=`
`,fx="/",px="*",Ur="",qD="comment",KD="declaration";function YD(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(x){var v=x.match(zD);v&&(n+=v.length);var b=x.lastIndexOf(GD);r=~b?x.length-b:r+x.length}function s(){var x={line:n,column:r};return function(v){return v.position=new a(x),u(),v}}function a(x){this.start=x,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function o(x){var v=new Error(t.source+":"+n+":"+r+": "+x);if(v.reason=x,v.filename=t.source,v.line=n,v.column=r,v.source=e,!t.silent)throw v}function l(x){var v=x.exec(e);if(v){var b=v[0];return i(b),e=e.slice(b.length),v}}function u(){l(UD)}function d(x){var v;for(x=x||[];v=f();)v!==!1&&x.push(v);return x}function f(){var x=s();if(!(fx!=e.charAt(0)||px!=e.charAt(1))){for(var v=2;Ur!=e.charAt(v)&&(px!=e.charAt(v)||fx!=e.charAt(v+1));)++v;if(v+=2,Ur===e.charAt(v-1))return o("End of comment missing");var b=e.slice(2,v-2);return r+=2,i(b),e=e.slice(v),r+=2,x({type:qD,comment:b})}}function p(){var x=s(),v=l(BD);if(v){if(f(),!l(VD))return o("property missing ':'");var b=l($D),g=x({type:KD,property:hx(v[0].replace(dx,Ur)),value:b?hx(b[0].replace(dx,Ur)):Ur});return l(HD),g}}function h(){var x=[];d(x);for(var v;v=p();)v!==!1&&(x.push(v),d(x));return x}return u(),h()}function hx(e){return e?e.replace(WD,Ur):Ur}var XD=YD,QD=Bi&&Bi.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Nh,"__esModule",{value:!0});Nh.default=JD;const ZD=QD(XD);function JD(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,ZD.default)(e),i=typeof t=="function";return r.forEach(s=>{if(s.type!=="declaration")return;const{property:a,value:o}=s;i?t(a,o,s):o&&(n=n||{},n[a]=o)}),n}var ku={};Object.defineProperty(ku,"__esModule",{value:!0});ku.camelCase=void 0;var eL=/^--[a-zA-Z0-9_-]+$/,tL=/-([a-z])/g,nL=/^[^-]+$/,rL=/^-(webkit|moz|ms|o|khtml)-/,iL=/^-(ms)-/,sL=function(e){return!e||nL.test(e)||eL.test(e)},aL=function(e,t){return t.toUpperCase()},mx=function(e,t){return"".concat(t,"-")},oL=function(e,t){return t===void 0&&(t={}),sL(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(iL,mx):e=e.replace(rL,mx),e.replace(tL,aL))};ku.camelCase=oL;var lL=Bi&&Bi.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},uL=lL(Nh),cL=ku;function gf(e,t){var n={};return!e||typeof e!="string"||(0,uL.default)(e,function(r,i){r&&i&&(n[(0,cL.camelCase)(r,t)]=i)}),n}gf.default=gf;var dL=gf;const fL=Wl(dL),Lk=Mk("end"),Ph=Mk("start");function Mk(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function pL(e){const t=Ph(e),n=Lk(e);if(t&&n)return{start:t,end:n}}function Qs(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?gx(e.position):"start"in e||"end"in e?gx(e):"line"in e||"column"in e?yf(e):""}function yf(e){return yx(e&&e.line)+":"+yx(e&&e.column)}function gx(e){return yf(e&&e.start)+"-"+yf(e&&e.end)}function yx(e){return e&&typeof e=="number"?e:1}class ut extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",s={},a=!1;if(n&&("line"in n&&"column"in n?s={place:n}:"start"in n&&"end"in n?s={place:n}:"type"in n?s={ancestors:[n],place:n.position}:s={...n}),typeof t=="string"?i=t:!s.cause&&t&&(a=!0,i=t.message,s.cause=t),!s.ruleId&&!s.source&&typeof r=="string"){const l=r.indexOf(":");l===-1?s.ruleId=r:(s.source=r.slice(0,l),s.ruleId=r.slice(l+1))}if(!s.place&&s.ancestors&&s.ancestors){const l=s.ancestors[s.ancestors.length-1];l&&(s.place=l.position)}const o=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=o?o.line:void 0,this.name=Qs(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=a&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}ut.prototype.file="";ut.prototype.name="";ut.prototype.reason="";ut.prototype.message="";ut.prototype.stack="";ut.prototype.column=void 0;ut.prototype.line=void 0;ut.prototype.ancestors=void 0;ut.prototype.cause=void 0;ut.prototype.fatal=void 0;ut.prototype.place=void 0;ut.prototype.ruleId=void 0;ut.prototype.source=void 0;const Rh={}.hasOwnProperty,hL=new Map,mL=/[A-Z]/g,gL=new Set(["table","tbody","thead","tfoot","tr"]),yL=new Set(["td","th"]),Ok="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function xL(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=TL(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=CL(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Ih:OD,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},s=Fk(i,e,void 0);return s&&typeof s!="string"?s:i.create(e,i.Fragment,{children:s||void 0},void 0)}function Fk(e,t,n){if(t.type==="element")return vL(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return bL(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return kL(e,t,n);if(t.type==="mdxjsEsm")return wL(e,t);if(t.type==="root")return SL(e,t,n);if(t.type==="text")return EL(e,t)}function vL(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Ih,e.schema=i),e.ancestors.push(t);const s=Uk(e,t.tagName,!1),a=_L(e,t);let o=Dh(e,t);return gL.has(t.tagName)&&(o=o.filter(function(l){return typeof l=="string"?!_D(l):!0})),zk(e,a,s,t),jh(a,o),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function bL(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Pa(e,t.position)}function wL(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Pa(e,t.position)}function kL(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Ih,e.schema=i),e.ancestors.push(t);const s=t.name===null?e.Fragment:Uk(e,t.name,!0),a=AL(e,t),o=Dh(e,t);return zk(e,a,s,t),jh(a,o),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function SL(e,t,n){const r={};return jh(r,Dh(e,t)),e.create(t,e.Fragment,r,n)}function EL(e,t){return t.value}function zk(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function jh(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function CL(e,t,n){return r;function r(i,s,a,o){const u=Array.isArray(a.children)?n:t;return o?u(s,a,o):u(s,a)}}function TL(e,t){return n;function n(r,i,s,a){const o=Array.isArray(s.children),l=Ph(r);return t(i,s,a,o,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}function _L(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Rh.call(t.properties,i)){const s=IL(e,i,t.properties[i]);if(s){const[a,o]=s;e.tableCellAlignToStyle&&a==="align"&&typeof o=="string"&&yL.has(t.tagName)?r=o:n[a]=o}}if(r){const s=n.style||(n.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function AL(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const s=r.data.estree.body[0];s.type;const a=s.expression;a.type;const o=a.properties[0];o.type,Object.assign(n,e.evaluater.evaluateExpression(o.argument))}else Pa(e,t.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const o=r.value.data.estree.body[0];o.type,s=e.evaluater.evaluateExpression(o.expression)}else Pa(e,t.position);else s=r.value===null?!0:r.value;n[i]=s}return n}function Dh(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:hL;for(;++r<t.children.length;){const s=t.children[r];let a;if(e.passKeys){const l=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(l){const u=i.get(l)||0;a=l+"-"+u,i.set(l,u+1)}}const o=Fk(e,s,a);o!==void 0&&n.push(o)}return n}function IL(e,t,n){const r=DD(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?kD(n):FD(n)),r.property==="style"){let i=typeof n=="object"?n:NL(e,String(n));return e.stylePropertyNameCase==="css"&&(i=PL(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?PD[r.property]||r.property:r.attribute,n]}}function NL(e,t){try{return fL(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new ut("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Ok+"#cannot-parse-style-attribute",i}}function Uk(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let s=-1,a;for(;++s<i.length;){const o=ox(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};a=a?{type:"MemberExpression",object:a,property:o,computed:!!(s&&o.type==="Literal"),optional:!1}:o}r=a}else r=ox(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Rh.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Pa(e)}function Pa(e,t){const n=new ut("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Ok+"#cannot-handle-mdx-estrees-without-createevaluater",n}function PL(e){const t={};let n;for(n in e)Rh.call(e,n)&&(t[RL(n)]=e[n]);return t}function RL(e){let t=e.replace(mL,jL);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function jL(e){return"-"+e.toLowerCase()}const Ac={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},DL={};function Lh(e,t){const n=DL,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Bk(e,r,i)}function Bk(e,t,n){if(LL(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return xx(e.children,t,n)}return Array.isArray(e)?xx(e,t,n):""}function xx(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Bk(e[i],t,n);return r.join("")}function LL(e){return!!(e&&typeof e=="object")}const vx=document.createElement("i");function Mh(e){const t="&"+e+";";vx.innerHTML=t;const n=vx.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function an(e,t,n,r){const i=e.length;let s=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);s<r.length;)a=r.slice(s,s+1e4),a.unshift(t,0),e.splice(...a),s+=1e4,t+=1e4}function Bt(e,t){return e.length>0?(an(e,e.length,0,t),e):t}const bx={}.hasOwnProperty;function Vk(e){const t={};let n=-1;for(;++n<e.length;)ML(t,e[n]);return t}function ML(e,t){let n;for(n in t){const i=(bx.call(e,n)?e[n]:void 0)||(e[n]={}),s=t[n];let a;if(s)for(a in s){bx.call(i,a)||(i[a]=[]);const o=s[a];OL(i[a],Array.isArray(o)?o:o?[o]:[])}}}function OL(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);an(e,0,0,r)}function $k(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function on(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const dt=Ir(/[A-Za-z]/),ot=Ir(/[\dA-Za-z]/),FL=Ir(/[#-'*+\--9=?A-Z^-~]/);function Ul(e){return e!==null&&(e<32||e===127)}const xf=Ir(/\d/),zL=Ir(/[\dA-Fa-f]/),UL=Ir(/[!-/:-@[-`{-~]/);function J(e){return e!==null&&e<-2}function we(e){return e!==null&&(e<0||e===32)}function le(e){return e===-2||e===-1||e===32}const Su=Ir(new RegExp("\\p{P}|\\p{S}","u")),si=Ir(/\s/);function Ir(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function ps(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const s=e.charCodeAt(n);let a="";if(s===37&&ot(e.charCodeAt(n+1))&&ot(e.charCodeAt(n+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(a=String.fromCharCode(s));else if(s>55295&&s<57344){const o=e.charCodeAt(n+1);s<56320&&o>56319&&o<57344?(a=String.fromCharCode(s,o),i=1):a="�"}else a=String.fromCharCode(s);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function ge(e,t,n,r){const i=r?r-1:1/0;let s=0;return a;function a(l){return le(l)?(e.enter(n),o(l)):t(l)}function o(l){return le(l)&&s++<i?(e.consume(l),o):(e.exit(n),t(l))}}function Hk(e,t,n,r,i,s){let a=0;return o;function o(d){return le(d)?(e.enter(r),l(d)):u(d)}function l(d){return le(d)&&a<s?(e.consume(d),a++,l):(e.exit(r),u(d))}function u(d){return a>=i?t(d):n(d)}}const BL={tokenize:VL};function VL(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),ge(e,t,"linePrefix")}function i(o){return e.enter("paragraph"),s(o)}function s(o){const l=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,a(o)}function a(o){if(o===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(o);return}return J(o)?(e.consume(o),e.exit("chunkText"),s):(e.consume(o),a)}}let Bl=class{constructor(){this.index=new Map,this.map=[]}add(t,n,r){wx(this,t,n,r,!1)}addBefore(t,n,r){wx(this,t,n,r,!0)}consume(t){if(this.map.sort(function(s,a){return s[0]-a[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(const s of i)t.push(s);i=r.pop()}this.map.length=0,this.index.clear()}};function wx(e,t,n,r,i){if(n===0&&r.length===0)return;const s=e.index.get(t);if(s){s[1]+=n,i?(r.push(...s[2]),s[2]=r):s[2].push(...r);return}const a=[t,n,r];e.map.push(a),e.index.set(t,a)}const $L={tokenize:HL},kx={tokenize:WL};function HL(e){const t=this,n=[];let r=0,i,s,a;return o;function o(y){if(r<n.length){const S=n[r];return t.containerState=S[1],e.attempt(S[0].continuation,l,u)(y)}return u(y)}function l(y){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&m();const S=t.events.length;let C=S,w;for(;C--;)if(t.events[C][0]==="exit"&&t.events[C][1].type==="chunkFlow"){w=t.events[C][1].end;break}g(r);let I=S;for(;I<t.events.length;)t.events[I][1].end={...w},I++;const N=new Bl;return N.add(C+1,0,t.events.slice(S)),N.add(S,I-S,[]),N.consume(t.events),u(y)}return o(y)}function u(y){if(r===n.length){if(!i)return p(y);if(i.currentConstruct&&i.currentConstruct.concrete)return x(y);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(kx,d,f)(y)}function d(y){return i&&m(),g(r),p(y)}function f(y){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,x(y)}function p(y){return t.containerState={},e.attempt(kx,h,x)(y)}function h(y){return r++,n.push([t.currentConstruct,t.containerState]),p(y)}function x(y){if(y===null){i&&m(),g(0),e.consume(y);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),v(y)}function v(y){if(y===null){b(e.exit("chunkFlow"),!0),g(0),e.consume(y);return}return J(y)?(e.consume(y),b(e.exit("chunkFlow")),r=0,t.interrupt=void 0,o):(e.consume(y),v)}function b(y,S){const C=t.sliceStream(y);if(S&&C.push(null),y.previous=s,s&&(s.next=y),s=y,i.defineSkip(y.start),i.write(C),t.parser.lazy[y.start.line]){let w=i.events.length;for(;w--;)if(i.events[w][1].start.offset<a&&(!i.events[w][1].end||i.events[w][1].end.offset>a))return;const I=t.events.length;let N=I,j,T;for(;N--;)if(t.events[N][0]==="exit"&&t.events[N][1].type==="chunkFlow"){if(j){T=t.events[N][1].end;break}j=!0}for(g(r),w=I;w<t.events.length;)t.events[w][1].end={...T},w++;const R=new Bl;R.add(N+1,0,t.events.slice(I)),R.add(I,w-I,[]),R.consume(t.events)}}function g(y){let S=n.length;for(;S-- >y;){const C=n[S];t.containerState=C[1],C[0].exit.call(t,e)}n.length=y}function m(){i.write([null]),s=void 0,i=void 0,t.containerState._closeFlow=void 0}}function WL(e,t,n){return ge(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Vl(e){if(e===null||we(e)||si(e))return 1;if(Su(e))return 2}function Eu(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const s=e[i].resolveAll;s&&!r.includes(s)&&(t=s(t,n),r.push(s))}return t}const vf={name:"attention",resolveAll:GL,tokenize:qL};function GL(e,t){let n=-1,r;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){let i=n;for(;i--;)if(e[i][0]==="exit"&&e[i][1].type==="attentionSequence"&&e[i][1]._open&&t.sliceSerialize(e[i][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[i][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;const s=e[i][1].end.offset-e[i][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1,a={...e[i][1].end},o={...e[n][1].start};Sx(a,-s),Sx(o,s);const l={type:s>1?"strongSequence":"emphasisSequence",start:a,end:{...e[i][1].end}},u={type:s>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:o},d={type:s>1?"strongText":"emphasisText",start:{...e[i][1].end},end:{...e[n][1].start}},f={type:s>1?"strong":"emphasis",start:{...l.start},end:{...u.end}};e[i][1].end={...l.start},e[n][1].start={...u.end},r=[],e[i][1].end.offset-e[i][1].start.offset&&(r=Bt(r,[["enter",e[i][1],t],["exit",e[i][1],t]])),r=Bt(r,[["enter",f,t],["enter",l,t],["exit",l,t],["enter",d,t]]),r=Bt(r,Eu(t.parser.constructs.insideSpan.null,e.slice(i+1,n),t)),r=Bt(r,[["exit",d,t],["enter",u,t],["exit",u,t],["exit",f,t]]);let p=0;e[n][1].end.offset-e[n][1].start.offset&&(p=2,r=Bt(r,[["enter",e[n][1],t],["exit",e[n][1],t]])),an(e,i-1,n-i+3,r),n=i+r.length-p-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function qL(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Vl(r);let s;return a;function a(l){return s=l,e.enter("attentionSequence"),o(l)}function o(l){if(l===s)return e.consume(l),o;const u=e.exit("attentionSequence"),d=Vl(l),f=!d||d===2&&i||n.includes(l)&&l!==42&&l!==95,p=!i||i===2&&d||n.includes(r)&&r!==42&&r!==95;return u._open=!!(s===42?f:f&&(i||!p)),u._close=!!(s===42?p:p&&(d||!f)),t(l)}}function Sx(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const KL={name:"autolink",tokenize:YL};function YL(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(h){return dt(h)?(e.consume(h),a):h===64?n(h):u(h)}function a(h){return h===43||h===45||h===46||ot(h)?(r=1,o(h)):u(h)}function o(h){return h===58?(e.consume(h),r=0,l):(h===43||h===45||h===46||ot(h))&&r++<32?(e.consume(h),o):(r=0,u(h))}function l(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||Ul(h)?n(h):(e.consume(h),l)}function u(h){return h===64?(e.consume(h),d):FL(h)?(e.consume(h),u):n(h)}function d(h){return ot(h)?f(h):n(h)}function f(h){return h===46?(e.consume(h),r=0,d):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):p(h)}function p(h){if((h===45||ot(h))&&r++<63){const x=h===45?p:f;return e.consume(h),x}return n(h)}}const Xa={partial:!0,tokenize:XL};function XL(e,t,n){return r;function r(s){return le(s)?ge(e,i,"linePrefix")(s):i(s)}function i(s){return s===null||J(s)?t(s):n(s)}}const Wk={continuation:{tokenize:ZL},exit:JL,name:"blockQuote",tokenize:QL};function QL(e,t,n){const r=this;return i;function i(a){if(a===62){const o=r.containerState;return o.open||(e.enter("blockQuote",{_container:!0}),o.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),s}return n(a)}function s(a){return le(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function ZL(e,t,n){const r=this;return i;function i(a){return le(a)?ge(e,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):s(a)}function s(a){return e.attempt(Wk,t,n)(a)}}function JL(e){e.exit("blockQuote")}const Gk={name:"characterEscape",tokenize:e3};function e3(e,t,n){return r;function r(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),i}function i(s){return UL(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(s)}}const qk={name:"characterReference",tokenize:t3};function t3(e,t,n){const r=this;let i=0,s,a;return o;function o(f){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),l}function l(f){return f===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(f),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),s=31,a=ot,d(f))}function u(f){return f===88||f===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(f),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,a=zL,d):(e.enter("characterReferenceValue"),s=7,a=xf,d(f))}function d(f){if(f===59&&i){const p=e.exit("characterReferenceValue");return a===ot&&!Mh(r.sliceSerialize(p))?n(f):(e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(f)&&i++<s?(e.consume(f),d):n(f)}}const bf={partial:!0,tokenize:n3};function n3(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const Ex={concrete:!0,name:"codeFenced",tokenize:r3};function r3(e,t,n){const r=this,i={partial:!0,tokenize:C};let s=0,a=0,o;return l;function l(w){return u(w)}function u(w){const I=r.events[r.events.length-1];return s=I&&I[1].type==="linePrefix"?I[2].sliceSerialize(I[1],!0).length:0,o=w,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(w)}function d(w){return w===o?(a++,e.consume(w),d):a<3?n(w):(e.exit("codeFencedFenceSequence"),le(w)?ge(e,f,"whitespace")(w):f(w))}function f(w){return w===null||J(w)?(e.exit("codeFencedFence"),r.interrupt?t(w):e.check(bf,v,S)(w)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(w))}function p(w){return w===null||J(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),f(w)):le(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ge(e,h,"whitespace")(w)):w===96&&w===o?n(w):(e.consume(w),p)}function h(w){return w===null||J(w)?f(w):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),x(w))}function x(w){return w===null||J(w)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),f(w)):w===96&&w===o?n(w):(e.consume(w),x)}function v(w){return e.attempt(i,S,b)(w)}function b(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),g}function g(w){return s>0&&le(w)?ge(e,m,"linePrefix",s+1)(w):m(w)}function m(w){return w===null||J(w)?e.check(bf,v,S)(w):(e.enter("codeFlowValue"),y(w))}function y(w){return w===null||J(w)?(e.exit("codeFlowValue"),m(w)):(e.consume(w),y)}function S(w){return e.exit("codeFenced"),t(w)}function C(w,I,N){let j=0;return T;function T($){return w.enter("lineEnding"),w.consume($),w.exit("lineEnding"),R}function R($){return w.enter("codeFencedFence"),le($)?ge(w,z,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)($):z($)}function z($){return $===o?(w.enter("codeFencedFenceSequence"),G($)):N($)}function G($){return $===o?(j++,w.consume($),G):j>=a?(w.exit("codeFencedFenceSequence"),le($)?ge(w,q,"whitespace")($):q($)):N($)}function q($){return $===null||J($)?(w.exit("codeFencedFence"),I($)):N($)}}}const Ic={name:"codeIndented",tokenize:s3},i3={partial:!0,tokenize:a3};function s3(e,t,n){return r;function r(o){return e.enter("codeIndented"),Hk(e,i,n,"linePrefix",4,4)(o)}function i(o){return o===null?a(o):J(o)?e.attempt(i3,i,a)(o):(e.enter("codeFlowValue"),s(o))}function s(o){return o===null||J(o)?(e.exit("codeFlowValue"),i(o)):(e.consume(o),s)}function a(o){return e.exit("codeIndented"),t(o)}}function a3(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):J(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):Hk(e,t,s,"linePrefix",4,4)(a)}function s(a){return J(a)?i(a):n(a)}}const o3={name:"codeText",previous:u3,resolve:l3,tokenize:c3};function l3(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function u3(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function c3(e,t,n){let r=0,i,s;return a;function a(f){return e.enter("codeText"),e.enter("codeTextSequence"),o(f)}function o(f){return f===96?(e.consume(f),r++,o):(e.exit("codeTextSequence"),l(f))}function l(f){return f===null?n(f):f===32?(e.enter("space"),e.consume(f),e.exit("space"),l):f===96?(s=e.enter("codeTextSequence"),i=0,d(f)):J(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),l):(e.enter("codeTextData"),u(f))}function u(f){return f===null||f===32||f===96||J(f)?(e.exit("codeTextData"),l(f)):(e.consume(f),u)}function d(f){return f===96?(e.consume(f),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(f)):(s.type="codeTextData",u(f))}}class d3{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Ts(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Ts(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Ts(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Ts(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Ts(this.left,n.reverse())}}}function Ts(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Kk(e){const t={};let n=-1,r,i,s,a,o,l,u;const d=new d3(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,s=0,s<l.length&&l[s][1].type==="lineEndingBlank"&&(s+=2),s<l.length&&l[s][1].type==="content"))for(;++s<l.length&&l[s][1].type!=="content";)l[s][1].type==="chunkText"&&(l[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,f3(d,n)),n=t[n],u=!0);else if(r[1]._container){for(s=n,i=void 0;s--;)if(a=d.get(s),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=s);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},o=d.slice(i,n),o.unshift(r),d.splice(i,n-i+1,o))}}return an(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function f3(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const s=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const o=a.events,l=[],u={};let d,f,p=-1,h=n,x=0,v=0;const b=[v];for(;h;){for(;e.get(++i)[1]!==h;);s.push(i),h._tokenizer||(d=r.sliceStream(h),h.next||d.push(null),f&&a.defineSkip(h.start),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),f=h,h=h.next}for(h=n;++p<o.length;)o[p][0]==="exit"&&o[p-1][0]==="enter"&&o[p][1].type===o[p-1][1].type&&o[p][1].start.line!==o[p][1].end.line&&(v=p+1,b.push(v),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(a.events=[],h?(h._tokenizer=void 0,h.previous=void 0):b.pop(),p=b.length;p--;){const g=o.slice(b[p],b[p+1]),m=s.pop();l.push([m,m+g.length-1]),e.splice(m,2,g)}for(l.reverse(),p=-1;++p<l.length;)u[x+l[p][0]]=x+l[p][1],x+=l[p][1]-l[p][0]-1;return u}const p3={resolve:m3,tokenize:g3},h3={partial:!0,tokenize:y3};function m3(e){return Kk(e),e}function g3(e,t){let n;return r;function r(o){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(o)}function i(o){return o===null?s(o):J(o)?e.check(h3,a,s)(o):(e.consume(o),i)}function s(o){return e.exit("chunkContent"),e.exit("content"),t(o)}function a(o){return e.consume(o),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function y3(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),ge(e,s,"linePrefix")}function s(a){if(a===null||J(a))return n(a);const o=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&o&&o[1].type==="linePrefix"&&o[2].sliceSerialize(o[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function Yk(e,t,n,r,i,s,a,o,l){const u=l||Number.POSITIVE_INFINITY;let d=0;return f;function f(g){return g===60?(e.enter(r),e.enter(i),e.enter(s),e.consume(g),e.exit(s),p):g===null||g===32||g===41||Ul(g)?n(g):(e.enter(r),e.enter(a),e.enter(o),e.enter("chunkString",{contentType:"string"}),v(g))}function p(g){return g===62?(e.enter(s),e.consume(g),e.exit(s),e.exit(i),e.exit(r),t):(e.enter(o),e.enter("chunkString",{contentType:"string"}),h(g))}function h(g){return g===62?(e.exit("chunkString"),e.exit(o),p(g)):g===null||g===60||J(g)?n(g):(e.consume(g),g===92?x:h)}function x(g){return g===60||g===62||g===92?(e.consume(g),h):h(g)}function v(g){return!d&&(g===null||g===41||we(g))?(e.exit("chunkString"),e.exit(o),e.exit(a),e.exit(r),t(g)):d<u&&g===40?(e.consume(g),d++,v):g===41?(e.consume(g),d--,v):g===null||g===32||g===40||Ul(g)?n(g):(e.consume(g),g===92?b:v)}function b(g){return g===40||g===41||g===92?(e.consume(g),v):v(g)}}function Xk(e,t,n,r,i,s){const a=this;let o=0,l;return u;function u(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(s),d}function d(h){return o>999||h===null||h===91||h===93&&!l||h===94&&!o&&"_hiddenFootnoteSupport"in a.parser.constructs?n(h):h===93?(e.exit(s),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):J(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),f(h))}function f(h){return h===null||h===91||h===93||J(h)||o++>999?(e.exit("chunkString"),d(h)):(e.consume(h),l||(l=!le(h)),h===92?p:f)}function p(h){return h===91||h===92||h===93?(e.consume(h),o++,f):f(h)}}function Qk(e,t,n,r,i,s){let a;return o;function o(p){return p===34||p===39||p===40?(e.enter(r),e.enter(i),e.consume(p),e.exit(i),a=p===40?41:p,l):n(p)}function l(p){return p===a?(e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):(e.enter(s),u(p))}function u(p){return p===a?(e.exit(s),l(a)):p===null?n(p):J(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),ge(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(p))}function d(p){return p===a||p===null||J(p)?(e.exit("chunkString"),u(p)):(e.consume(p),p===92?f:d)}function f(p){return p===a||p===92?(e.consume(p),d):d(p)}}function Zs(e,t){let n;return r;function r(i){return J(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):le(i)?ge(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const x3={name:"definition",tokenize:b3},v3={partial:!0,tokenize:w3};function b3(e,t,n){const r=this;let i;return s;function s(h){return e.enter("definition"),a(h)}function a(h){return Xk.call(r,e,o,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function o(h){return i=on(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),l):n(h)}function l(h){return we(h)?Zs(e,u)(h):u(h)}function u(h){return Yk(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function d(h){return e.attempt(v3,f,f)(h)}function f(h){return le(h)?ge(e,p,"whitespace")(h):p(h)}function p(h){return h===null||J(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function w3(e,t,n){return r;function r(o){return we(o)?Zs(e,i)(o):n(o)}function i(o){return Qk(e,s,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(o)}function s(o){return le(o)?ge(e,a,"whitespace")(o):a(o)}function a(o){return o===null||J(o)?t(o):n(o)}}const k3={name:"hardBreakEscape",tokenize:S3};function S3(e,t,n){return r;function r(s){return e.enter("hardBreakEscape"),e.consume(s),i}function i(s){return J(s)?(e.exit("hardBreakEscape"),t(s)):n(s)}}const E3={name:"headingAtx",resolve:C3,tokenize:T3};function C3(e,t){let n=e.length-2,r=3;if(e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r){const i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},s={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"};an(e,r,n-r+1,[["enter",i,t],["enter",s,t],["exit",s,t],["exit",i,t]])}return e}function T3(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),s(d)}function s(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||we(d)?(e.exit("atxHeadingSequence"),o(d)):n(d)}function o(d){return d===35?(e.enter("atxHeadingSequence"),l(d)):d===null||J(d)?(e.exit("atxHeading"),t(d)):le(d)?ge(e,o,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function l(d){return d===35?(e.consume(d),l):(e.exit("atxHeadingSequence"),o(d))}function u(d){return d===null||d===35||we(d)?(e.exit("atxHeadingText"),o(d)):(e.consume(d),u)}}const _3=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Cx=["pre","script","style","textarea"],A3={concrete:!0,name:"htmlFlow",resolveTo:N3,tokenize:P3},I3={partial:!0,tokenize:R3};function N3(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function P3(e,t,n){const r=this;let i,s,a,o,l;return u;function u(A){return d(A)}function d(A){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(A),f}function f(A){return A===33?(e.consume(A),p):A===47?(e.consume(A),s=!0,v):A===63?(e.consume(A),i=3,r.interrupt?t:k):dt(A)?(e.consume(A),a=String.fromCharCode(A),b):n(A)}function p(A){return A===45?(e.consume(A),i=2,h):A===91?(e.consume(A),i=5,o=0,x):dt(A)?(e.consume(A),i=4,r.interrupt?t:k):n(A)}function h(A){return A===45?(e.consume(A),r.interrupt?t:k):n(A)}function x(A){const ce="CDATA[";return A===ce.charCodeAt(o++)?(e.consume(A),o===ce.length?r.interrupt?t:z:x):n(A)}function v(A){return dt(A)?(e.consume(A),a=String.fromCharCode(A),b):n(A)}function b(A){if(A===null||A===47||A===62||we(A)){const ce=A===47,ke=a.toLowerCase();return!ce&&!s&&Cx.includes(ke)?(i=1,r.interrupt?t(A):z(A)):_3.includes(a.toLowerCase())?(i=6,ce?(e.consume(A),g):r.interrupt?t(A):z(A)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(A):s?m(A):y(A))}return A===45||ot(A)?(e.consume(A),a+=String.fromCharCode(A),b):n(A)}function g(A){return A===62?(e.consume(A),r.interrupt?t:z):n(A)}function m(A){return le(A)?(e.consume(A),m):T(A)}function y(A){return A===47?(e.consume(A),T):A===58||A===95||dt(A)?(e.consume(A),S):le(A)?(e.consume(A),y):T(A)}function S(A){return A===45||A===46||A===58||A===95||ot(A)?(e.consume(A),S):C(A)}function C(A){return A===61?(e.consume(A),w):le(A)?(e.consume(A),C):y(A)}function w(A){return A===null||A===60||A===61||A===62||A===96?n(A):A===34||A===39?(e.consume(A),l=A,I):le(A)?(e.consume(A),w):N(A)}function I(A){return A===l?(e.consume(A),l=null,j):A===null||J(A)?n(A):(e.consume(A),I)}function N(A){return A===null||A===34||A===39||A===47||A===60||A===61||A===62||A===96||we(A)?C(A):(e.consume(A),N)}function j(A){return A===47||A===62||le(A)?y(A):n(A)}function T(A){return A===62?(e.consume(A),R):n(A)}function R(A){return A===null||J(A)?z(A):le(A)?(e.consume(A),R):n(A)}function z(A){return A===45&&i===2?(e.consume(A),ue):A===60&&i===1?(e.consume(A),Z):A===62&&i===4?(e.consume(A),K):A===63&&i===3?(e.consume(A),k):A===93&&i===5?(e.consume(A),B):J(A)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(I3,te,G)(A)):A===null||J(A)?(e.exit("htmlFlowData"),G(A)):(e.consume(A),z)}function G(A){return e.check(bf,q,te)(A)}function q(A){return e.enter("lineEnding"),e.consume(A),e.exit("lineEnding"),$}function $(A){return A===null||J(A)?G(A):(e.enter("htmlFlowData"),z(A))}function ue(A){return A===45?(e.consume(A),k):z(A)}function Z(A){return A===47?(e.consume(A),a="",D):z(A)}function D(A){if(A===62){const ce=a.toLowerCase();return Cx.includes(ce)?(e.consume(A),K):z(A)}return dt(A)&&a.length<8?(e.consume(A),a+=String.fromCharCode(A),D):z(A)}function B(A){return A===93?(e.consume(A),k):z(A)}function k(A){return A===62?(e.consume(A),K):A===45&&i===2?(e.consume(A),k):z(A)}function K(A){return A===null||J(A)?(e.exit("htmlFlowData"),te(A)):(e.consume(A),K)}function te(A){return e.exit("htmlFlow"),t(A)}}function R3(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Xa,t,n)}}const j3={name:"htmlText",tokenize:D3};function D3(e,t,n){const r=this;let i,s,a;return o;function o(k){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(k),l}function l(k){return k===33?(e.consume(k),u):k===47?(e.consume(k),C):k===63?(e.consume(k),y):dt(k)?(e.consume(k),N):n(k)}function u(k){return k===45?(e.consume(k),d):k===91?(e.consume(k),s=0,x):dt(k)?(e.consume(k),m):n(k)}function d(k){return k===45?(e.consume(k),h):n(k)}function f(k){return k===null?n(k):k===45?(e.consume(k),p):J(k)?(a=f,Z(k)):(e.consume(k),f)}function p(k){return k===45?(e.consume(k),h):f(k)}function h(k){return k===62?ue(k):k===45?p(k):f(k)}function x(k){const K="CDATA[";return k===K.charCodeAt(s++)?(e.consume(k),s===K.length?v:x):n(k)}function v(k){return k===null?n(k):k===93?(e.consume(k),b):J(k)?(a=v,Z(k)):(e.consume(k),v)}function b(k){return k===93?(e.consume(k),g):v(k)}function g(k){return k===62?ue(k):k===93?(e.consume(k),g):v(k)}function m(k){return k===null||k===62?ue(k):J(k)?(a=m,Z(k)):(e.consume(k),m)}function y(k){return k===null?n(k):k===63?(e.consume(k),S):J(k)?(a=y,Z(k)):(e.consume(k),y)}function S(k){return k===62?ue(k):y(k)}function C(k){return dt(k)?(e.consume(k),w):n(k)}function w(k){return k===45||ot(k)?(e.consume(k),w):I(k)}function I(k){return J(k)?(a=I,Z(k)):le(k)?(e.consume(k),I):ue(k)}function N(k){return k===45||ot(k)?(e.consume(k),N):k===47||k===62||we(k)?j(k):n(k)}function j(k){return k===47?(e.consume(k),ue):k===58||k===95||dt(k)?(e.consume(k),T):J(k)?(a=j,Z(k)):le(k)?(e.consume(k),j):ue(k)}function T(k){return k===45||k===46||k===58||k===95||ot(k)?(e.consume(k),T):R(k)}function R(k){return k===61?(e.consume(k),z):J(k)?(a=R,Z(k)):le(k)?(e.consume(k),R):j(k)}function z(k){return k===null||k===60||k===61||k===62||k===96?n(k):k===34||k===39?(e.consume(k),i=k,G):J(k)?(a=z,Z(k)):le(k)?(e.consume(k),z):(e.consume(k),q)}function G(k){return k===i?(e.consume(k),i=void 0,$):k===null?n(k):J(k)?(a=G,Z(k)):(e.consume(k),G)}function q(k){return k===null||k===34||k===39||k===60||k===61||k===96?n(k):k===47||k===62||we(k)?j(k):(e.consume(k),q)}function $(k){return k===47||k===62||we(k)?j(k):n(k)}function ue(k){return k===62?(e.consume(k),e.exit("htmlTextData"),e.exit("htmlText"),t):n(k)}function Z(k){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),D}function D(k){return le(k)?ge(e,B,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(k):B(k)}function B(k){return e.enter("htmlTextData"),a(k)}}const Oh={name:"labelEnd",resolveAll:F3,resolveTo:z3,tokenize:U3},L3={tokenize:B3},M3={tokenize:V3},O3={tokenize:$3};function F3(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&an(e,0,e.length,n),e}function z3(e,t){let n=e.length,r=0,i,s,a;for(;n--;){const d=e[n][1];if(i){if(d.type==="link"||d.type==="labelLink"&&d._inactive)break;e[n][0]==="enter"&&d.type==="labelLink"&&(d._inactive=!0)}else if(s){if(e[n][0]==="enter"&&(d.type==="labelImage"||d.type==="labelLink")&&!d._balanced&&(i=n,d.type!=="labelLink")){r=2;break}}else d.type==="labelEnd"&&(s=n)}const o={type:e[i][1].type==="labelLink"?"link":"image",start:{...e[i][1].start},end:{...e[e.length-1][1].end}},l={type:"label",start:{...e[i][1].start},end:{...e[s][1].end}},u={type:"labelText",start:{...e[i+r+2][1].end},end:{...e[s-2][1].start}};return a=[["enter",o,t],["enter",l,t]],a=Bt(a,e.slice(i+1,i+r+3)),a=Bt(a,[["enter",u,t]]),a=Bt(a,Eu(t.parser.constructs.insideSpan.null,e.slice(i+r+4,s-3),t)),a=Bt(a,[["exit",u,t],e[s-2],e[s-1],["exit",l,t]]),a=Bt(a,e.slice(s+1)),a=Bt(a,[["exit",o,t]]),an(e,i,e.length,a),e}function U3(e,t,n){const r=this,i=r._labelStarts;let s,a;if(i){for(;i.length>0&&i[i.length-1]._balanced;)i.pop();s=i[i.length-1]}return o;function o(p){return s?s._inactive?f(p):(a=r.parser.defined.includes(on(r.sliceSerialize({start:s.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),l):n(p)}function l(p){return p===40?e.attempt(L3,d,a?d:f)(p):p===91?e.attempt(M3,d,a?u:f)(p):a?d(p):f(p)}function u(p){return e.attempt(O3,d,f)(p)}function d(p){return i.pop(),t(p)}function f(p){return s._balanced=!0,n(p)}}function B3(e,t,n){return r;function r(f){return e.enter("resource"),e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),i}function i(f){return we(f)?Zs(e,s)(f):s(f)}function s(f){return f===41?d(f):Yk(e,a,o,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function a(f){return we(f)?Zs(e,l)(f):d(f)}function o(f){return n(f)}function l(f){return f===34||f===39||f===40?Qk(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):d(f)}function u(f){return we(f)?Zs(e,d)(f):d(f)}function d(f){return f===41?(e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),e.exit("resource"),t):n(f)}}function V3(e,t,n){const r=this;return i;function i(o){return Xk.call(r,e,s,a,"reference","referenceMarker","referenceString")(o)}function s(o){return r.parser.defined.includes(on(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(o):n(o)}function a(o){return n(o)}}function $3(e,t,n){return r;function r(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),i}function i(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),t):n(s)}}const H3={name:"labelStartImage",resolveAll:Oh.resolveAll,tokenize:W3};function W3(e,t,n){const r=this;let i;return s;function s(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),a}function a(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),i=e.exit("labelImage"),o):n(l)}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),t(l))}}const G3={name:"labelStartLink",resolveAll:Oh.resolveAll,tokenize:q3};function q3(e,t,n){const r=this;let i;return s;function s(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),i=e.exit("labelLink"),a}function a(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),t(o))}}const Nc={name:"lineEnding",tokenize:K3};function K3(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),ge(e,t,"linePrefix")}}const Qo={name:"thematicBreak",tokenize:Y3};function Y3(e,t,n){let r=0,i;return s;function s(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,o(u)}function o(u){return u===i?(e.enter("thematicBreakSequence"),l(u)):r>=3&&(u===null||J(u))?(e.exit("thematicBreak"),t(u)):n(u)}function l(u){return u===i?(e.consume(u),r++,l):(e.exit("thematicBreakSequence"),le(u)?ge(e,o,"whitespace")(u):o(u))}}const gt={continuation:{tokenize:J3},exit:tM,name:"list",tokenize:Z3},X3={partial:!0,tokenize:nM},Q3={partial:!0,tokenize:eM};function Z3(e,t,n){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return o;function o(h){const x=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(x==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:xf(h)){if(r.containerState.type||(r.containerState.type=x,e.enter(x,{_container:!0})),x==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(Qo,n,u)(h):u(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(h)}return n(h)}function l(h){return xf(h)&&++a<10?(e.consume(h),l):(!r.interrupt||a<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),u(h)):n(h)}function u(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(Xa,r.interrupt?n:d,e.attempt(X3,p,f))}function d(h){return r.containerState.initialBlankLine=!0,s++,p(h)}function f(h){return le(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),p):n(h)}function p(h){return r.containerState.size=s+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function J3(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Xa,i,s);function i(o){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ge(e,t,"listItemIndent",r.containerState.size+1)(o)}function s(o){return r.containerState.furtherBlankLines||!le(o)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(o)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Q3,t,a)(o))}function a(o){return r.containerState._closeFlow=!0,r.interrupt=void 0,ge(e,e.attempt(gt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o)}}function eM(e,t,n){const r=this;return ge(e,i,"listItemIndent",r.containerState.size+1);function i(s){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(s):n(s)}}function tM(e){e.exit(this.containerState.type)}function nM(e,t,n){const r=this;return ge(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const a=r.events[r.events.length-1];return!le(s)&&a&&a[1].type==="listItemPrefixWhitespace"?t(s):n(s)}}const Tx={name:"setextUnderline",resolveTo:rM,tokenize:iM};function rM(e,t){const n=new Bl;let r=e.length,i,s,a;for(;r--;)if(e[r][0]==="enter"){if(e[r][1].type==="content"){i=r;break}e[r][1].type==="paragraph"&&(s=r)}else e[r][1].type==="content"&&n.add(r,1,[]),!a&&e[r][1].type==="definition"&&(a=r);const o={type:"setextHeading",start:{...e[i][1].start},end:{...e[e.length-1][1].end}};return e[s][1].type="setextHeadingText",a?(n.add(s,0,[["enter",o,t]]),n.add(a+1,0,[["exit",e[i][1],t]]),e[i][1].end={...e[a][1].end}):e[i][1]=o,n.add(e.length,0,[["exit",o,t]]),n.consume(e),e}function iM(e,t,n){const r=this;let i;return s;function s(u){let d=r.events.length,f;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){f=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||f)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),o(u)}function o(u){return u===i?(e.consume(u),o):(e.exit("setextHeadingLineSequence"),le(u)?ge(e,l,"lineSuffix")(u):l(u))}function l(u){return u===null||J(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const sM={tokenize:aM};function aM(e){const t=this,n=e.attempt(Xa,r,e.attempt(this.parser.constructs.flowInitial,i,ge(e,e.attempt(this.parser.constructs.flow,i,e.attempt(p3,i)),"linePrefix")));return n;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const oM={resolveAll:Jk()},lM=Zk("string"),uM=Zk("text");function Zk(e){return{resolveAll:Jk(e==="text"?cM:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],s=n.attempt(i,a,o);return a;function a(d){return u(d)?s(d):o(d)}function o(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),l}function l(d){return u(d)?(n.exit("data"),s(d)):(n.consume(d),l)}function u(d){if(d===null)return!0;const f=i[d];let p=-1;if(f)for(;++p<f.length;){const h=f[p];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function Jk(e){return t;function t(n,r){let i=-1,s;for(;++i<=n.length;)s===void 0?n[i]&&n[i][1].type==="data"&&(s=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==s+2&&(n[s][1].end=n[i-1][1].end,n.splice(s+2,i-s-2),i=s+2),s=void 0);return e?e(n,r):n}}function cM(e,t){const n=new Bl;let r=0;for(;++r<=e.length;)if((r===e.length||e[r][1].type==="lineEnding")&&e[r-1][1].type==="data"){const i=e[r-1][1],s=t.sliceStream(i);let a=s.length,o=-1,l=0,u;for(;a--;){const d=s[a];if(typeof d=="string"){for(o=d.length;d.charCodeAt(o-1)===32;)l++,o--;if(o)break;o=-1}else if(d===-2)u=!0,l++;else if(d!==-1){a++;break}}if(t._contentTypeTextTrailing&&r===e.length&&(l=0),l){const d={type:r===e.length||u||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?o:i.start._bufferIndex+o,_index:i.start._index+a,line:i.end.line,column:i.end.column-l,offset:i.end.offset-l},end:{...i.end}};i.end={...d.start},i.start.offset===i.end.offset?Object.assign(i,d):n.add(r,0,[["enter",d,t],["exit",d,t]])}r++}return n.consume(e),e}const dM={42:gt,43:gt,45:gt,48:gt,49:gt,50:gt,51:gt,52:gt,53:gt,54:gt,55:gt,56:gt,57:gt,62:Wk},fM={91:x3},pM={[-2]:Ic,[-1]:Ic,32:Ic},hM={35:E3,42:Qo,45:[Tx,Qo],60:A3,61:Tx,95:Qo,96:Ex,126:Ex},mM={38:qk,92:Gk},gM={[-5]:Nc,[-4]:Nc,[-3]:Nc,33:H3,38:qk,42:vf,60:[KL,j3],91:G3,92:[k3,Gk],93:Oh,95:vf,96:o3},yM={null:[vf,oM]},xM={null:[42,95]},vM={null:[]},bM=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:xM,contentInitial:fM,disable:vM,document:dM,flow:hM,flowInitial:pM,insideSpan:yM,string:mM,text:gM},Symbol.toStringTag,{value:"Module"}));function wM(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},s=[];let a=[],o=[];const l={attempt:I(C),check:I(w),consume:m,enter:y,exit:S,interrupt:I(w,{interrupt:!0})},u={code:null,containerState:{},defineSkip:v,events:[],now:x,parser:e,previous:null,sliceSerialize:p,sliceStream:h,write:f};let d=t.tokenize.call(u,l);return t.resolveAll&&s.push(t),u;function f(R){return a=Bt(a,R),b(),a[a.length-1]!==null?[]:(N(t,0),u.events=Eu(s,u.events,u),u.events)}function p(R,z){return SM(h(R),z)}function h(R){return kM(a,R)}function x(){const{_bufferIndex:R,_index:z,line:G,column:q,offset:$}=r;return{_bufferIndex:R,_index:z,line:G,column:q,offset:$}}function v(R){i[R.line]=R.column,T()}function b(){for(;r._index<a.length;){const R=a[r._index];if(typeof R=="string"){const z=r._index;for(r._bufferIndex<0&&(r._bufferIndex=0);r._index===z&&r._bufferIndex<R.length;)g(R.charCodeAt(r._bufferIndex))}else g(R)}}function g(R){d=d(R)}function m(R){J(R)?(r.line++,r.column=1,r.offset+=R===-3?2:1,T()):R!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=R}function y(R,z){const G=z||{};return G.type=R,G.start=x(),u.events.push(["enter",G,u]),o.push(G),G}function S(R){const z=o.pop();return z.end=x(),u.events.push(["exit",z,u]),z}function C(R,z){N(R,z.from)}function w(R,z){z.restore()}function I(R,z){return G;function G(q,$,ue){let Z,D,B,k;return Array.isArray(q)?te(q):"tokenize"in q?te([q]):K(q);function K(se){return Se;function Se($e){const Ye=$e!==null&&se[$e],pe=$e!==null&&se.null,et=[...Array.isArray(Ye)?Ye:Ye?[Ye]:[],...Array.isArray(pe)?pe:pe?[pe]:[]];return te(et)($e)}}function te(se){return Z=se,D=0,se.length===0?ue:A(se[D])}function A(se){return Se;function Se($e){return k=j(),B=se,se.partial||(u.currentConstruct=se),se.name&&u.parser.constructs.disable.null.includes(se.name)?ke():se.tokenize.call(z?Object.assign(Object.create(u),z):u,l,ce,ke)($e)}}function ce(se){return R(B,k),$}function ke(se){return k.restore(),++D<Z.length?A(Z[D]):ue}}}function N(R,z){R.resolveAll&&!s.includes(R)&&s.push(R),R.resolve&&an(u.events,z,u.events.length-z,R.resolve(u.events.slice(z),u)),R.resolveTo&&(u.events=R.resolveTo(u.events,u))}function j(){const R=x(),z=u.previous,G=u.currentConstruct,q=u.events.length,$=Array.from(o);return{from:q,restore:ue};function ue(){r=R,u.previous=z,u.currentConstruct=G,u.events.length=q,o=$,T()}}function T(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function kM(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,s=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,s)];else{if(a=e.slice(n,i),r>-1){const o=a[0];typeof o=="string"?a[0]=o.slice(r):a.shift()}s>0&&a.push(e[i].slice(0,s))}return a}function SM(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const s=e[n];let a;if(typeof s=="string")a=s;else switch(s){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(s)}i=s===-2,r.push(a)}return r.join("")}function EM(e){const r={constructs:Vk([bM,...(e||{}).extensions||[]]),content:i(BL),defined:[],document:i($L),flow:i(sM),lazy:{},string:i(lM),text:i(uM)};return r;function i(s){return a;function a(o){return wM(r,s,o)}}}function CM(e){for(;!Kk(e););return e}const _x=/[\0\t\n\r]/g;function TM(){let e=1,t="",n=!0,r;return i;function i(s,a,o){s=t+(typeof s=="string"?s.toString():new TextDecoder(a||void 0).decode(s));const l=[];let u=0;for(t="",n&&(s.charCodeAt(0)===65279&&u++,n=void 0);u<s.length;){_x.lastIndex=u;const d=_x.exec(s),f=d&&d.index!==void 0?d.index:s.length,p=s.charCodeAt(f);if(!d){t=s.slice(u);break}if(p===10&&u===f&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),u<f&&(l.push(s.slice(u,f)),e+=f-u),p){case 0:{l.push(65533),e++;break}case 9:{const h=Math.ceil(e/4)*4;for(l.push(-2);e++<h;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:r=!0,e=1}u=f+1}return o&&(r&&l.push(-5),t&&l.push(t),l.push(null)),l}}const _M=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function AM(e){return e.replace(_M,IM)}function IM(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),s=i===120||i===88;return $k(n.slice(s?2:1),s?16:10)}return Mh(n)||e}const e2={}.hasOwnProperty;function NM(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),PM(n)(CM(EM(n).document().write(TM()(e,t,!0))))}function PM(e){const t={afterExit:[],beforeEnter:[],transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(me),autolinkProtocol:T,autolinkEmail:T,atxHeading:a(De),blockQuote:a(et),characterEscape:T,characterReference:T,codeFenced:a(St),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(St,o),codeText:a(Ge,o),codeTextData:T,data:T,codeFlowValue:T,definition:a(Gt),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(Nr),hardBreakEscape:a(En),hardBreakTrailing:a(En),htmlFlow:a(qt,o),htmlFlowData:T,htmlText:a(qt,o),htmlTextData:T,image:a(L),label:o,link:a(me),listItem:a(ye),listItemValue:h,listOrdered:a(ie,p),listUnordered:a(ie),paragraph:a(M),reference:ce,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(De),strong:a(H),thematicBreak:a(fe)},exit:{atxHeading:u(),atxHeadingSequence:w,autolink:u(),autolinkEmail:pe,autolinkProtocol:Ye,blockQuote:u(),characterEscapeValue:R,characterReferenceMarkerHexadecimal:se,characterReferenceMarkerNumeric:se,characterReferenceValue:Se,characterReference:$e,codeFenced:u(g),codeFencedFence:b,codeFencedFenceInfo:x,codeFencedFenceMeta:v,codeFlowValue:R,codeIndented:u(m),codeText:u(ue),codeTextData:R,data:R,definition:u(),definitionDestinationString:C,definitionLabelString:y,definitionTitleString:S,emphasis:u(),hardBreakEscape:u(G),hardBreakTrailing:u(G),htmlFlow:u(q),htmlFlowData:R,htmlText:u($),htmlTextData:R,image:u(D),label:k,labelText:B,lineEnding:z,link:u(Z),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:ke,resourceDestinationString:K,resourceTitleString:te,resource:A,setextHeading:u(j),setextHeadingLineSequence:N,setextHeadingText:I,strong:u(),thematicBreak:u()}};t2(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(P){let _={type:"root",children:[],position:void 0};const U={stack:[_],tokenStack:[],config:t,enter:l,exit:d,buffer:o,resume:f,data:n},V=[],X=[];let Q=-1;for(;++Q<P.length;)if(X.push(P[Q]),P[Q][1].type==="listOrdered"||P[Q][1].type==="listUnordered")if(P[Q][0]==="enter")V.push(X.length-1);else{const oe=V.pop();s(X,oe)}for(P=X,Q=-1;++Q<P.length;){const oe=t[P[Q][0]];P[Q][0]==="enter"&&t.beforeEnter.length>0&&i(t.beforeEnter,{...U,sliceSerialize:P[Q][2].sliceSerialize},P[Q][1]),e2.call(oe,P[Q][1].type)&&oe[P[Q][1].type].call({...U,sliceSerialize:P[Q][2].sliceSerialize},P[Q][1]),P[Q][0]==="exit"&&t.afterExit.length>0&&i(t.afterExit,{...U,sliceSerialize:P[Q][2].sliceSerialize},P[Q][1])}if(U.tokenStack.length>0){const oe=U.tokenStack[U.tokenStack.length-1];(oe[1]||Ax).call(U,void 0,oe[0])}for(_.position={start:Zn(P.length>0?P[0][1].start:{line:1,column:1,offset:0}),end:Zn(P.length>0?P[P.length-2][1].end:{line:1,column:1,offset:0})},Q=-1;++Q<t.transforms.length;)_=t.transforms[Q](_)||_;return _}function i(P,_,U){let V=-1;for(;++V<P.length;)P[V].call(_,U)}function s(P,_){const U=P.length-1;let V=_-1,X=-1,Q=!1,oe,ze,Ue,hs;const ms=[];for(;++V<=U;){const Et=P[V];switch(Et[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Et[0]==="enter"?X++:X--,hs=void 0;break}case"lineEndingBlank":{Et[0]==="enter"&&(oe&&!hs&&!X&&!Ue&&(Ue=V),hs=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:hs=void 0}if(!X&&Et[0]==="enter"&&Et[1].type==="listItemPrefix"||X===-1&&Et[0]==="exit"&&(Et[1].type==="listUnordered"||Et[1].type==="listOrdered")){if(oe){let ci=V;for(ze=void 0;ci--;){const Cn=P[ci];if(Cn[1].type==="lineEnding"||Cn[1].type==="lineEndingBlank"){if(Cn[0]==="exit")continue;ze&&(P[ze][1].type="lineEndingBlank",Q=!0),Cn[1].type="lineEnding",ze=ci}else if(!(Cn[1].type==="linePrefix"||Cn[1].type==="blockQuotePrefix"||Cn[1].type==="blockQuotePrefixWhitespace"||Cn[1].type==="blockQuoteMarker"||Cn[1].type==="listItemIndent"))break}Ue&&(!ze||Ue<ze)&&(oe._spread=!0),oe.end=Object.assign({},ze?P[ze][1].start:Et[1].end),ms.push({at:ze||V,event:["exit",oe,Et[2]]})}if(Et[1].type==="listItemPrefix"){const ci={type:"listItem",_spread:!1,start:Object.assign({},Et[1].start),end:void 0};oe=ci,ms.push({at:V,event:["enter",ci,Et[2]]}),Ue=void 0,hs=!0}}}const Zh=P.splice(_);let Au=0;for(V=-1;++V<Zh.length;){for(;Au<ms.length&&ms[Au].at===_+V;)P.push(ms[Au++].event);P.push(Zh[V])}P[_][1]._spread=Q}function a(P,_){return U;function U(V){l.call(this,P(V),V),_&&_.call(this,V)}}function o(){this.stack.push({type:"fragment",children:[]})}function l(P,_,U){this.stack[this.stack.length-1].children.push(P),this.stack.push(P),this.tokenStack.push([_,U||void 0]),P.position={start:Zn(_.start),end:void 0}}function u(P){return _;function _(U){P&&P.call(this,U),d.call(this,U)}}function d(P,_){const U=this.stack.pop(),V=this.tokenStack.pop();if(!V)throw new Error("Cannot close `"+P.type+"` ("+Qs({start:P.start,end:P.end})+"): it’s not open");V[0].type!==P.type&&(_?_.call(this,P,V[0]):(V[1]||Ax).call(this,P,V[0])),U.position.end=Zn(P.end)}function f(){return Lh(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function h(P){if(this.data.expectingFirstListItemValue){const _=this.stack[this.stack.length-2];_.start=Number.parseInt(this.sliceSerialize(P),10),this.data.expectingFirstListItemValue=void 0}}function x(){const P=this.resume(),_=this.stack[this.stack.length-1];_.lang=P}function v(){const P=this.resume(),_=this.stack[this.stack.length-1];_.meta=P}function b(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function g(){const P=this.resume(),_=this.stack[this.stack.length-1];_.value=P.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function m(){const P=this.resume(),_=this.stack[this.stack.length-1];_.value=P.replace(/(\r?\n|\r)$/g,"")}function y(P){const _=this.resume(),U=this.stack[this.stack.length-1];U.label=_,U.identifier=on(this.sliceSerialize(P)).toLowerCase()}function S(){const P=this.resume(),_=this.stack[this.stack.length-1];_.title=P}function C(){const P=this.resume(),_=this.stack[this.stack.length-1];_.url=P}function w(P){const _=this.stack[this.stack.length-1];if(!_.depth){const U=this.sliceSerialize(P).length;_.depth=U}}function I(){this.data.setextHeadingSlurpLineEnding=!0}function N(P){const _=this.stack[this.stack.length-1];_.depth=this.sliceSerialize(P).codePointAt(0)===61?1:2}function j(){this.data.setextHeadingSlurpLineEnding=void 0}function T(P){const U=this.stack[this.stack.length-1].children;let V=U[U.length-1];(!V||V.type!=="text")&&(V=ae(),V.position={start:Zn(P.start),end:void 0},U.push(V)),this.stack.push(V)}function R(P){const _=this.stack.pop();_.value+=this.sliceSerialize(P),_.position.end=Zn(P.end)}function z(P){const _=this.stack[this.stack.length-1];if(this.data.atHardBreak){const U=_.children[_.children.length-1];U.position.end=Zn(P.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(_.type)&&(T.call(this,P),R.call(this,P))}function G(){this.data.atHardBreak=!0}function q(){const P=this.resume(),_=this.stack[this.stack.length-1];_.value=P}function $(){const P=this.resume(),_=this.stack[this.stack.length-1];_.value=P}function ue(){const P=this.resume(),_=this.stack[this.stack.length-1];_.value=P}function Z(){const P=this.stack[this.stack.length-1];if(this.data.inReference){const _=this.data.referenceType||"shortcut";P.type+="Reference",P.referenceType=_,delete P.url,delete P.title}else delete P.identifier,delete P.label;this.data.referenceType=void 0}function D(){const P=this.stack[this.stack.length-1];if(this.data.inReference){const _=this.data.referenceType||"shortcut";P.type+="Reference",P.referenceType=_,delete P.url,delete P.title}else delete P.identifier,delete P.label;this.data.referenceType=void 0}function B(P){const _=this.sliceSerialize(P),U=this.stack[this.stack.length-2];U.label=AM(_),U.identifier=on(_).toLowerCase()}function k(){const P=this.stack[this.stack.length-1],_=this.resume(),U=this.stack[this.stack.length-1];if(this.data.inReference=!0,U.type==="link"){const V=P.children;U.children=V}else U.alt=_}function K(){const P=this.resume(),_=this.stack[this.stack.length-1];_.url=P}function te(){const P=this.resume(),_=this.stack[this.stack.length-1];_.title=P}function A(){this.data.inReference=void 0}function ce(){this.data.referenceType="collapsed"}function ke(P){const _=this.resume(),U=this.stack[this.stack.length-1];U.label=_,U.identifier=on(this.sliceSerialize(P)).toLowerCase(),this.data.referenceType="full"}function se(P){this.data.characterReferenceType=P.type}function Se(P){const _=this.sliceSerialize(P),U=this.data.characterReferenceType;let V;U?(V=$k(_,U==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):V=Mh(_);const X=this.stack[this.stack.length-1];X.value+=V}function $e(P){const _=this.stack.pop();_.position.end=Zn(P.end)}function Ye(P){R.call(this,P);const _=this.stack[this.stack.length-1];_.url=this.sliceSerialize(P)}function pe(P){R.call(this,P);const _=this.stack[this.stack.length-1];_.url="mailto:"+this.sliceSerialize(P)}function et(){return{type:"blockquote",children:[],position:void 0}}function St(){return{type:"code",lang:null,meta:null,value:"",position:void 0}}function Ge(){return{type:"inlineCode",value:"",position:void 0}}function Gt(){return{type:"definition",identifier:"",label:null,title:null,url:"",position:void 0}}function Nr(){return{type:"emphasis",children:[],position:void 0}}function De(){return{type:"heading",depth:0,children:[],position:void 0}}function En(){return{type:"break",position:void 0}}function qt(){return{type:"html",value:"",position:void 0}}function L(){return{type:"image",title:null,url:"",alt:null,position:void 0}}function me(){return{type:"link",title:null,url:"",children:[],position:void 0}}function ie(P){return{type:"list",ordered:P.type==="listOrdered",start:null,spread:P._spread,children:[],position:void 0}}function ye(P){return{type:"listItem",spread:P._spread,checked:null,children:[],position:void 0}}function M(){return{type:"paragraph",children:[],position:void 0}}function H(){return{type:"strong",children:[],position:void 0}}function ae(){return{type:"text",value:"",position:void 0}}function fe(){return{type:"thematicBreak",position:void 0}}}function Zn(e){return{line:e.line,column:e.column,offset:e.offset}}function t2(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?t2(e,r):RM(e,r)}}function RM(e,t){let n;for(n in t)if(e2.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"afterExit":case"beforeEnter":{const r=t[n];r&&e[n].push(r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Ax(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Qs({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Qs({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Qs({start:t.start,end:t.end})+") is still open")}function jM(e){const t=this;t.parser=n;function n(r){return NM(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function DM(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function LM(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function MM(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(s.data={meta:t.meta}),e.patch(t,s),s=e.applyData(t,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(t,s),s}function OM(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function FM(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function zM(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=ps(r.toLowerCase()),s=e.footnoteOrder.indexOf(r);let a,o=e.footnoteCounts.get(r);o===void 0?(o=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=s+1,o+=1,e.footnoteCounts.set(r,o);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(o>1?"-"+o:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,l);const u={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(t,u),e.applyData(t,u)}function UM(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function BM(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function n2(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function VM(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return n2(e,t);const i={src:ps(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,s),e.applyData(t,s)}function $M(e,t){const n={src:ps(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function HM(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function WM(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return n2(e,t);const i={href:ps(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function GM(e,t){const n={href:ps(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function qM(e,t,n){const r=e.all(t),i=n?KM(n):r2(t),s={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let f;d&&d.type==="element"&&d.tagName==="p"?f=d:(f={type:"element",tagName:"p",properties:{},children:[]},r.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let o=-1;for(;++o<r.length;){const d=r[o];(i||o!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const l=r[r.length-1];l&&(i||l.type!=="element"||l.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:s,children:a};return e.patch(t,u),e.applyData(t,u)}function KM(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=r2(n[r])}return t}function r2(e){const t=e.spread;return t??e.children.length>1}function YM(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const s={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,s),e.applyData(t,s)}function XM(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function QM(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function ZM(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function JM(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},o=Ph(t.children[1]),l=Lk(t.children[t.children.length-1]);o&&l&&(a.position={start:o,end:l}),i.push(a)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,s),e.applyData(t,s)}function eO(e,t,n){const r=n?n.children:void 0,s=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,o=a?a.length:t.children.length;let l=-1;const u=[];for(;++l<o;){const f=t.children[l],p={},h=a?a[l]:void 0;h&&(p.align=h);let x={type:"element",tagName:s,properties:p,children:[]};f&&(x.children=e.all(f),e.patch(f,x),x=e.applyData(f,x)),u.push(x)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function tO(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Ix=9,Nx=32;function nO(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const s=[];for(;r;)s.push(Px(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return s.push(Px(t.slice(i),i>0,!1)),s.join("")}function Px(e,t,n){let r=0,i=e.length;if(t){let s=e.codePointAt(r);for(;s===Ix||s===Nx;)r++,s=e.codePointAt(r)}if(n){let s=e.codePointAt(i-1);for(;s===Ix||s===Nx;)i--,s=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function rO(e,t){const n={type:"text",value:nO(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function iO(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const sO={blockquote:DM,break:LM,code:MM,delete:OM,emphasis:FM,footnoteReference:zM,heading:UM,html:BM,imageReference:VM,image:$M,inlineCode:HM,linkReference:WM,link:GM,listItem:qM,list:YM,paragraph:XM,root:QM,strong:ZM,table:JM,tableCell:tO,tableRow:eO,text:rO,thematicBreak:iO,toml:Eo,yaml:Eo,definition:Eo,footnoteDefinition:Eo};function Eo(){}const i2=-1,Cu=0,Js=1,$l=2,Fh=3,zh=4,Uh=5,Bh=6,s2=7,a2=8,{defineProperty:aO}=Object,o2=typeof self=="object"?self:globalThis,Rx=(e,t)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new o2[e](t)},oO=(e,t)=>{const n=(i,s)=>(e.set(s,i),i),r=i=>{if(e.has(i))return e.get(i);const[s,a]=t[i];switch(s){case Cu:case i2:return n(a,i);case Js:{const o=n([],i);for(const l of a)o.push(r(l));return o}case $l:{const o=n({},i);for(const[l,u]of a){const d=r(l),f=r(u);d==="__proto__"?aO(o,d,{value:f,configurable:!0,enumerable:!0,writable:!0}):o[d]=f}return o}case Fh:return n(new Date(a),i);case zh:{const{source:o,flags:l}=a;return n(new RegExp(o,l),i)}case Uh:{const o=n(new Map,i);for(const[l,u]of a)o.set(r(l),r(u));return o}case Bh:{const o=n(new Set,i);for(const l of a)o.add(r(l));return o}case s2:{const{name:o,message:l}=a;return n(typeof o2[o]=="function"?Rx(o,l):new Error(l),i)}case a2:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:o}=new Uint8Array(a);return n(new DataView(o),a)}case"-0":return-0}return n(Rx(s,a),i)};return r},jx=e=>oO(new Map,e)(0),zr="",{toString:lO}={},{keys:uO,is:cO}=Object,_s=e=>{const t=typeof e;if(t!=="object"||!e)return[Cu,t];const n=lO.call(e).slice(8,-1);switch(n){case"Array":return[Js,zr];case"Object":return[$l,zr];case"Date":return[Fh,zr];case"RegExp":return[zh,zr];case"Map":return[Uh,zr];case"Set":return[Bh,zr];case"DataView":return[Js,n]}return n.includes("Array")?[Js,n]:e instanceof Error?[s2,e.name||"Error"]:[$l,n]},Co=([e,t])=>e===Cu&&(t==="function"||t==="symbol"),dO=(e,t,n,r)=>{const i=(a,o)=>{const l=r.push(a)-1;return n.set(o,l),l},s=a=>{if(n.has(a))return n.get(a);let[o,l]=_s(a);switch(o){case Cu:{let d=a;switch(l){case"bigint":o=a2,d=a.toString();break;case"number":if(!a&&cO(a,-0))return r.push(["-0"])-1;break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);d=null;break;case"undefined":return i([i2],a)}return i([o,d],a)}case Js:{if(l){let p=a;return l==="DataView"?p=new Uint8Array(a.buffer):l==="ArrayBuffer"&&(p=new Uint8Array(a)),i([l,[...p]],a)}const d=[],f=i([o,d],a);for(const p of a)d.push(s(p));return f}case $l:{if(l)switch(l){case"BigInt":return i([l,a.toString()],a);case"Boolean":case"Number":case"String":return i([l,a.valueOf()],a)}if(t&&"toJSON"in a)return s(a.toJSON());const d=[],f=i([o,d],a);for(const p of uO(a))(e||!Co(_s(a[p])))&&d.push([s(p),s(a[p])]);return f}case Fh:return i([o,isNaN(a.getTime())?zr:a.toISOString()],a);case zh:{const{source:d,flags:f}=a;return i([o,{source:d,flags:f}],a)}case Uh:{const d=[],f=i([o,d],a);for(const[p,h]of a)(e||!(Co(_s(p))||Co(_s(h))))&&d.push([s(p),s(h)]);return f}case Bh:{const d=[],f=i([o,d],a);for(const p of a)(e||!Co(_s(p)))&&d.push(s(p));return f}}const{message:u}=a;return i([o,{name:l,message:u}],a)};return s},Dx=(e,{json:t,lossy:n}={})=>{const r=[];return dO(!(t||n),!!t,new Map,r)(e),r},Hl=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?jx(Dx(e,t)):structuredClone(e):(e,t)=>jx(Dx(e,t));function fO(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function pO(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function hO(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||fO,r=e.options.footnoteBackLabel||pO,i=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},o=[];let l=-1;for(;++l<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[l]);if(!u)continue;const d=e.all(u),f=String(u.identifier).toUpperCase(),p=ps(f.toLowerCase());let h=0;const x=[],v=e.footnoteCounts.get(f);for(;v!==void 0&&++h<=v;){x.length>0&&x.push({type:"text",value:" "});let m=typeof n=="string"?n:n(l,h);typeof m=="string"&&(m={type:"text",value:m}),x.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+p+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(l,h),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const b=d[d.length-1];if(b&&b.type==="element"&&b.tagName==="p"){const m=b.children[b.children.length-1];m&&m.type==="text"?m.value+=" ":b.children.push({type:"text",value:" "}),b.children.push(...x)}else d.push(...x);const g={type:"element",tagName:"li",properties:{id:t+"fn-"+p},children:e.wrap(d,!0)};e.patch(u,g),o.push(g)}if(o.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Hl(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(o,!0)},{type:"text",value:`
`}]}}const Tu=function(e){if(e==null)return xO;if(typeof e=="function")return _u(e);if(typeof e=="object")return Array.isArray(e)?mO(e):gO(e);if(typeof e=="string")return yO(e);throw new Error("Expected function, string, or object as test")};function mO(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Tu(e[n]);return _u(r);function r(...i){let s=-1;for(;++s<t.length;)if(t[s].apply(this,i))return!0;return!1}}function gO(e){const t=e;return _u(n);function n(r){const i=r;let s;for(s in e)if(i[s]!==t[s])return!1;return!0}}function yO(e){return _u(t);function t(n){return n&&n.type===e}}function _u(e){return t;function t(n,r,i){return!!(vO(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function xO(){return!0}function vO(e){return e!==null&&typeof e=="object"&&"type"in e}const l2=[],bO=!0,wf=!1,wO="skip";function u2(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const s=Tu(i),a=r?-1:1;o(e,void 0,[])();function o(l,u,d){const f=l&&typeof l=="object"?l:{};if(typeof f.type=="string"){const h=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(l.type+(h?"<"+h+">":""))+")"})}return p;function p(){let h=l2,x,v,b;if((!t||s(l,u,d[d.length-1]||void 0))&&(h=kO(n(l,d)),h[0]===wf))return h;if("children"in l&&l.children){const g=l;if(g.children&&h[0]!==wO)for(v=(r?g.children.length:-1)+a,b=d.concat(g);v>-1&&v<g.children.length;){const m=g.children[v];if(x=o(m,v,b)(),x[0]===wf)return x;v=typeof x[1]=="number"?x[1]:v+a}}return h}}}function kO(e){return Array.isArray(e)?e:typeof e=="number"?[bO,e]:e==null?l2:[e]}function Vh(e,t,n,r){let i,s,a;typeof t=="function"&&typeof n!="function"?(s=void 0,a=t,i=n):(s=t,a=n,i=r),u2(e,s,o,i);function o(l,u){const d=u[u.length-1],f=d?d.children.indexOf(l):void 0;return a(l,f,d)}}const kf={}.hasOwnProperty,SO={};function EO(e,t){const n=t||SO,r=new Map,i=new Map,s=new Map,a={...sO,...n.handlers},o={all:u,applyData:TO,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:a,one:l,options:n,patch:CO,wrap:AO};return Vh(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const f=d.type==="definition"?r:i,p=String(d.identifier).toUpperCase();f.has(p)||f.set(p,d)}}),o;function l(d,f){const p=d.type,h=o.handlers[p];if(kf.call(o.handlers,p)&&h)return h(o,d,f);if(o.options.passThrough&&o.options.passThrough.includes(p)){if("children"in d){const{children:v,...b}=d,g=Hl(b);return g.children=o.all(d),g}return Hl(d)}return(o.options.unknownHandler||_O)(o,d,f)}function u(d){const f=[];if("children"in d){const p=d.children;let h=-1;for(;++h<p.length;){const x=o.one(p[h],d);if(x){if(h&&p[h-1].type==="break"&&(!Array.isArray(x)&&x.type==="text"&&(x.value=Lx(x.value)),!Array.isArray(x)&&x.type==="element")){const v=x.children[0];v&&v.type==="text"&&(v.value=Lx(v.value))}Array.isArray(x)?f.push(...x):f.push(x)}}}return f}}function CO(e,t){e.position&&(t.position=pL(e))}function TO(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,s=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&s&&Object.assign(n.properties,Hl(s)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function _O(e,t){const n=t.data||{},r="value"in t&&!(kf.call(n,"hProperties")||kf.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function AO(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Lx(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Mx(e,t){const n=EO(e,t),r=n.one(e,void 0),i=hO(n),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function IO(e,t){return e&&"run"in e?async function(n,r){const i=Mx(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Mx(n,{file:r,...e||t})}}function Ox(e){if(e)throw e}var Zo=Object.prototype.hasOwnProperty,c2=Object.prototype.toString,Fx=Object.defineProperty,zx=Object.getOwnPropertyDescriptor,Ux=function(t){return typeof Array.isArray=="function"?Array.isArray(t):c2.call(t)==="[object Array]"},Bx=function(t){if(!t||c2.call(t)!=="[object Object]")return!1;var n=Zo.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Zo.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Zo.call(t,i)},Vx=function(t,n){Fx&&n.name==="__proto__"?Fx(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},$x=function(t,n){if(n==="__proto__")if(Zo.call(t,n)){if(zx)return zx(t,n).value}else return;return t[n]},NO=function e(){var t,n,r,i,s,a,o=arguments[0],l=1,u=arguments.length,d=!1;for(typeof o=="boolean"&&(d=o,o=arguments[1]||{},l=2),(o==null||typeof o!="object"&&typeof o!="function")&&(o={});l<u;++l)if(t=arguments[l],t!=null)for(n in t)r=$x(o,n),i=$x(t,n),o!==i&&(d&&i&&(Bx(i)||(s=Ux(i)))?(s?(s=!1,a=r&&Ux(r)?r:[]):a=r&&Bx(r)?r:{},Vx(o,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&Vx(o,{name:n,newValue:i}));return o};const Pc=Wl(NO);function Sf(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function PO(){const e=[],t={run:n,use:r};return t;function n(...i){let s=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);o(null,...i);function o(l,...u){const d=e[++s];let f=-1;if(l){a(l);return}for(;++f<i.length;)(u[f]===null||u[f]===void 0)&&(u[f]=i[f]);i=u,d?RO(d,o)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function RO(e,t){let n;return r;function r(...a){const o=e.length>a.length;let l;o&&a.push(i);try{l=e.apply(this,a)}catch(u){const d=u;if(o&&n)throw d;return i(d)}o||(l&&l.then&&typeof l.then=="function"?l.then(s,i):l instanceof Error?i(l):s(l))}function i(a,...o){n||(n=!0,t(a,...o))}function s(a){i(null,a)}}const pn={basename:jO,dirname:DO,extname:LO,join:MO,sep:"/"};function jO(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Qa(e);let n=0,r=-1,i=e.length,s;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,o=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else a<0&&(s=!0,a=i+1),o>-1&&(e.codePointAt(i)===t.codePointAt(o--)?o<0&&(r=i):(o=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function DO(e){if(Qa(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function LO(e){Qa(e);let t=e.length,n=-1,r=0,i=-1,s=0,a;for(;t--;){const o=e.codePointAt(t);if(o===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),o===46?i<0?i=t:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||n<0||s===0||s===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function MO(...e){let t=-1,n;for(;++t<e.length;)Qa(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":OO(n)}function OO(e){Qa(e);const t=e.codePointAt(0)===47;let n=FO(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function FO(e,t){let n="",r=0,i=-1,s=0,a=-1,o,l;for(;++a<=e.length;){if(a<e.length)o=e.codePointAt(a);else{if(o===47)break;o=47}if(o===47){if(!(i===a-1||s===1))if(i!==a-1&&s===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),i=a,s=0;continue}}else if(n.length>0){n="",r=0,i=a,s=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,s=0}else o===46&&s>-1?s++:s=-1}return n}function Qa(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const zO={cwd:UO};function UO(){return"/"}function Ef(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function BO(e){if(typeof e=="string")e=new URL(e);else if(!Ef(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return VO(e)}function VO(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Rc=["history","path","basename","stem","extname","dirname"];class d2{constructor(t){let n;t?Ef(t)?n={path:t}:typeof t=="string"||$O(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":zO.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Rc.length;){const s=Rc[r];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let i;for(i in n)Rc.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?pn.basename(this.path):void 0}set basename(t){Dc(t,"basename"),jc(t,"basename"),this.path=pn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?pn.dirname(this.path):void 0}set dirname(t){Hx(this.basename,"dirname"),this.path=pn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?pn.extname(this.path):void 0}set extname(t){if(jc(t,"extname"),Hx(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=pn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Ef(t)&&(t=BO(t)),Dc(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?pn.basename(this.path,this.extname):void 0}set stem(t){Dc(t,"stem"),jc(t,"stem"),this.path=pn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new ut(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function jc(e,t){if(e&&e.includes(pn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+pn.sep+"`")}function Dc(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Hx(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function $O(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const HO=function(e){const r=this.constructor.prototype,i=r[e],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s},WO={}.hasOwnProperty;class $h extends HO{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=PO()}copy(){const t=new $h;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Pc(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Oc("data",this.frozen),this.namespace[t]=n,this):WO.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Oc("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=To(t),r=this.parser||this.Parser;return Lc("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Lc("process",this.parser||this.Parser),Mc("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(s,a){const o=To(t),l=r.parse(o);r.run(l,o,function(d,f,p){if(d||!f||!p)return u(d);const h=f,x=r.stringify(h,p);KO(x)?p.value=x:p.result=x,u(d,p)});function u(d,f){d||!f?a(d):s?s(f):n(void 0,f)}}}processSync(t){let n=!1,r;return this.freeze(),Lc("processSync",this.parser||this.Parser),Mc("processSync",this.compiler||this.Compiler),this.process(t,i),Gx("processSync","process",n),r;function i(s,a){n=!0,Ox(s),r=a}}run(t,n,r){Wx(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?s(void 0,r):new Promise(s);function s(a,o){const l=To(n);i.run(t,l,u);function u(d,f,p){const h=f||t;d?o(d):a?a(h):r(void 0,h,p)}}}runSync(t,n){let r=!1,i;return this.run(t,n,s),Gx("runSync","run",r),i;function s(a,o){Ox(a),i=o,r=!0}}stringify(t,n){this.freeze();const r=To(n),i=this.compiler||this.Compiler;return Mc("stringify",i),Wx(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Oc("use",this.frozen),t!=null)if(typeof t=="function")l(t,n);else if(typeof t=="object")Array.isArray(t)?o(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function s(u){if(typeof u=="function")l(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...f]=u;l(d,f)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(u.plugins),u.settings&&(i.settings=Pc(!0,i.settings,u.settings))}function o(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const f=u[d];s(f)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function l(u,d){let f=-1,p=-1;for(;++f<r.length;)if(r[f][0]===u){p=f;break}if(p===-1)r.push([u,...d]);else if(d.length>0){let[h,...x]=d;const v=r[p][1];Sf(v)&&Sf(h)&&(h=Pc(!0,v,h)),r[p]=[u,h,...x]}}}}const GO=new $h().freeze();function Lc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Mc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Oc(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Wx(e){if(!Sf(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Gx(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function To(e){return qO(e)?e:new d2(e)}function qO(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function KO(e){return typeof e=="string"||YO(e)}function YO(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const XO="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",qx=[],Kx={allowDangerousHtml:!0},QO=/^(https?|ircs?|mailto|xmpp)$/i,ZO=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function JO(e){const t=eF(e),n=tF(e);return nF(t.runSync(t.parse(n),n),e)}function eF(e){const t=e.rehypePlugins||qx,n=e.remarkPlugins||qx,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Kx}:Kx;return GO().use(jM).use(n).use(IO,r).use(t)}function tF(e){const t=e.children||"",n=new d2;return typeof t=="string"&&(n.value=t),n}function nF(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,s=t.disallowedElements,a=t.skipHtml,o=t.unwrapDisallowed,l=t.urlTransform||rF;for(const d of ZO)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+XO+d.id,void 0);return Vh(e,u),xL(e,{Fragment:c.Fragment,components:i,ignoreInvalidStyle:!0,jsx:c.jsx,jsxs:c.jsxs,passKeys:!0,passNode:!0});function u(d,f,p){if(d.type==="raw"&&p&&typeof f=="number")return a?p.children.splice(f,1):p.children[f]={type:"text",value:d.value},f;if(d.type==="element"){let h;for(h in Ac)if(Object.hasOwn(Ac,h)&&Object.hasOwn(d.properties,h)){const x=d.properties[h],v=Ac[h];(v===null||v.includes(d.tagName))&&(d.properties[h]=l(String(x||""),h,d))}}if(d.type==="element"){let h=n?!n.includes(d.tagName):s?s.includes(d.tagName):!1;if(!h&&r&&typeof f=="number"&&(h=!r(d,f,p)),h&&p&&typeof f=="number")return o&&d.children?p.children.splice(f,1,...d.children):p.children.splice(f,1),f}}}function rF(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||QO.test(e.slice(0,t))?e:""}function Yx(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function iF(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function sF(e,t,n){const i=Tu((n||{}).ignore||[]),s=aF(t);let a=-1;for(;++a<s.length;)u2(e,"text",o);function o(u,d){let f=-1,p;for(;++f<d.length;){const h=d[f],x=p?p.children:void 0;if(i(h,x?x.indexOf(h):void 0,p))return;p=h}if(p)return l(u,d)}function l(u,d){const f=d[d.length-1],p=s[a][0],h=s[a][1];let x=0;const b=f.children.indexOf(u);let g=!1,m=[];p.lastIndex=0;let y=p.exec(u.value);for(;y;){const C=y.index,w={index:y.index,input:y.input,stack:[...d,u]};let I=h(...y,w);if(typeof I=="string"&&(I=I.length>0?{type:"text",value:I}:void 0),I===!1)p.lastIndex=C+1;else{if(x!==C&&S({type:"text",value:u.value.slice(x,C)}),Array.isArray(I))for(const N of I)S(N);else I&&S(I);x=C+y[0].length,g=!0}if(!p.global)break;y=p.exec(u.value)}return g?(x<u.value.length&&S({type:"text",value:u.value.slice(x)}),f.children.splice(b,1,...m)):m=[u],b+m.length;function S(C){const w=m[m.length-1];w&&w.type==="text"&&C.type==="text"?w.value+=C.value:m.push(C)}}}function aF(e){if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const t=[],n=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<n.length;){const i=n[r];t.push([oF(i[0]),lF(i[1])])}return t}function oF(e){return typeof e=="string"?new RegExp(iF(e),"g"):e}function lF(e){return typeof e=="function"?e:function(){return e}}const Fc="phrasing",zc=["autolink","link","image","label"];function uF(){return{transforms:[gF],enter:{literalAutolink:dF,literalAutolinkEmail:Uc,literalAutolinkHttp:Uc,literalAutolinkWww:Uc},exit:{literalAutolink:mF,literalAutolinkEmail:hF,literalAutolinkHttp:fF,literalAutolinkWww:pF}}}function cF(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Fc,notInConstruct:zc},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Fc,notInConstruct:zc},{character:":",before:"[ps]",after:"\\/",inConstruct:Fc,notInConstruct:zc}]}}function dF(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Uc(e){this.config.enter.autolinkProtocol.call(this,e)}function fF(e){this.config.exit.autolinkProtocol.call(this,e)}function pF(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function hF(e){this.config.exit.autolinkEmail.call(this,e)}function mF(e){this.exit(e)}function gF(e){sF(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,yF],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),xF]],{ignore:["link","linkReference"]})}function yF(e,t,n,r,i){let s="";if(!f2(i)||(/^w/i.test(t)&&(n=t+n,t="",s="http://"),!vF(n)))return!1;const a=bF(n+r);if(!a[0])return!1;const o={type:"link",title:null,url:s+t+a[0],children:[{type:"text",value:t+a[0]}]};return a[1]?[o,{type:"text",value:a[1]}]:o}function xF(e,t,n,r){return!f2(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function vF(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function bF(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const i=Yx(e,"(");let s=Yx(e,")");for(;r!==-1&&i>s;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),s++;return[e,n]}function f2(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||si(n)||Su(n))&&(!t||n!==47)}p2.peek=IF;function wF(){this.buffer()}function kF(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function SF(){this.buffer()}function EF(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function CF(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=on(this.sliceSerialize(e)).toLowerCase(),n.label=t}function TF(e){this.exit(e)}function _F(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=on(this.sliceSerialize(e)).toLowerCase(),n.label=t}function AF(e){this.exit(e)}function IF(){return"["}function p2(e,t,n,r){const i=n.createTracker(r);let s=i.move("[^");const a=n.enter("footnoteReference"),o=n.enter("reference");return s+=i.move(n.safe(n.associationId(e),{after:"]",before:s})),o(),a(),s+=i.move("]"),s}function NF(){return{enter:{gfmFootnoteCallString:wF,gfmFootnoteCall:kF,gfmFootnoteDefinitionLabelString:SF,gfmFootnoteDefinition:EF},exit:{gfmFootnoteCallString:CF,gfmFootnoteCall:TF,gfmFootnoteDefinitionLabelString:_F,gfmFootnoteDefinition:AF}}}function PF(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:p2},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,s,a){const o=s.createTracker(a);let l=o.move("[^");const u=s.enter("footnoteDefinition"),d=s.enter("label");return l+=o.move(s.safe(s.associationId(r),{before:l,after:"]"})),d(),l+=o.move("]:"),r.children&&r.children.length>0&&(o.shift(4),l+=o.move((t?`
`:" ")+s.indentLines(s.containerFlow(r,o.current()),t?h2:RF))),u(),l}}function RF(e,t,n){return t===0?e:h2(e,t,n)}function h2(e,t,n){return(n?"":"    ")+e}const jF=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Hh.attention=FF;Hh.peek=zF;function DF(){return{canContainEols:["delete"],enter:{strikethrough:MF},exit:{strikethrough:OF}}}function LF(){return{handlers:{delete:Hh},unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:jF}]}}function MF(e){this.enter({type:"delete",children:[],position:void 0},e)}function OF(e){this.exit(e)}function Hh(e,t,n,r){const i=n.createTracker(r),s=n.stack.includes("strikethrough")?"~":"~~",a=n.enter("strikethrough");let o=i.move(s);return o+=n.containerPhrasing(e,{...i.current(),before:o,after:"~"}),o+=i.move(s),a(),o}function FF(){return{construct:"strikethrough",markers:["~"],sizes:[2,1]}}function zF(){return"~"}function UF(e){return e.length}function BF(e,t){const n=t||{},r=(n.align||[]).concat(),i=n.stringLength||UF,s=[],a=[],o=[],l=[];let u=0,d=-1;for(;++d<e.length;){const v=[],b=[];let g=-1;for(e[d].length>u&&(u=e[d].length);++g<e[d].length;){const m=VF(e[d][g]);if(n.alignDelimiters!==!1){const y=i(m);b[g]=y,(l[g]===void 0||y>l[g])&&(l[g]=y)}v.push(m)}a[d]=v,o[d]=b}let f=-1;if(typeof r=="object"&&"length"in r)for(;++f<u;)s[f]=Xx(r[f]);else{const v=Xx(r);for(;++f<u;)s[f]=v}f=-1;const p=[],h=[];for(;++f<u;){const v=s[f];let b="",g="";v===99?(b=":",g=":"):v===108?b=":":v===114&&(g=":");let m=n.alignDelimiters===!1?1:Math.max(1,l[f]-b.length-g.length);const y=b+"-".repeat(m)+g;n.alignDelimiters!==!1&&(m=b.length+m+g.length,m>l[f]&&(l[f]=m),h[f]=m),p[f]=y}a.splice(1,0,p),o.splice(1,0,h),d=-1;const x=[];for(;++d<a.length;){const v=a[d],b=o[d];f=-1;const g=[];for(;++f<u;){const m=v[f]||"";let y="",S="";if(n.alignDelimiters!==!1){const C=l[f]-(b[f]||0),w=s[f];w===114?y=" ".repeat(C):w===99?C%2?(y=" ".repeat(C/2+.5),S=" ".repeat(C/2-.5)):(y=" ".repeat(C/2),S=y):S=" ".repeat(C)}n.delimiterStart!==!1&&!f&&g.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&m==="")&&(n.delimiterStart!==!1||f)&&g.push(" "),n.alignDelimiters!==!1&&g.push(y),g.push(m),n.alignDelimiters!==!1&&g.push(S),n.padding!==!1&&g.push(" "),(n.delimiterEnd!==!1||f!==u-1)&&g.push("|")}x.push(n.delimiterEnd===!1?g.join("").replace(/ +$/,""):g.join(""))}return x.join(`
`)}function VF(e){return e==null?"":String(e)}function Xx(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}const $F=Tu(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function HF(e,t,n,r){const i=n.enter("blockquote"),s=n.createTracker(r);s.move("> "),s.shift(2);const a=n.indentLines(n.containerFlow(e,s.current()),WF);return i(),a}function WF(e,t,n){return">"+(n?"":" ")+e}function GF(e,t){return Qx(e,t.inConstruct,!0)&&!Qx(e,t.notInConstruct,!1)}function Qx(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function Zx(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;){const s=n.unsafe[i];if(s.character===`
`&&!s.before&&!s.after&&GF(n.stack,s))return/[\t ]/.test(r.before)?"":" "}return`\\
`}function qF(e,t){const n=String(e);let r=n.indexOf(t),i=r,s=0,a=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++s>a&&(a=s):s=1,i=r+t.length,r=n.indexOf(t,i);return a}function KF(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^\n\r ]/.test(e.value)&&!/^[\t ]*(?:[\n\r]|$)|(?:^|[\n\r])[\t ]*$/.test(e.value))}function YF(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function XF(e,t,n,r){const i=YF(n),s=e.value||"";if(KF(e,n)){const f=n.enter("codeIndented"),p=n.indentLines(s,QF);return f(),p}const a=n.createTracker(r),o=i.repeat(Math.max(qF(s,i)+1,3)),l=n.enter("codeFenced"),u=i==="`"?"GraveAccent":"Tilde";let d=a.move(o);if(e.lang){const f=n.enter(`codeFencedLang${u}`);d+=a.move(n.safe(e.lang,{before:d,after:" ",encode:["`"],...a.current()})),f()}if(e.lang&&e.meta){const f=n.enter(`codeFencedMeta${u}`);d+=a.move(" "),d+=a.move(n.safe(e.meta,{before:d,after:`
`,encode:["`"],...a.current()})),f()}return d+=a.move(`
`),s&&(d+=a.move(s+`
`)),d+=a.move(o),l(),d}function QF(e,t,n){return(n?"":"    ")+e}function Wh(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function ZF(e,t,n,r){const i=Wh(n),s=i==='"'?"Quote":"Apostrophe",a=n.enter("definition");let o=n.enter("label");const l=n.createTracker(r);let u=l.move("[");return u+=l.move(n.safe(n.associationId(e),{before:u,after:"]",...l.current()})),u+=l.move("]: "),o(),!e.url||/[\0- \u007F]/.test(e.url)?(o=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(o=n.enter("destinationRaw"),u+=l.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...l.current()}))),o(),e.title&&(o=n.enter(`title${s}`),u+=l.move(" "+i),u+=l.move(n.safe(e.title,{before:u,after:i,...l.current()})),u+=l.move(i),o()),a(),u}function JF(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}Gh.attention=e4;Gh.peek=t4;function Gh(e,t,n,r){const i=n.enter("phrasing"),s=n.containerPhrasing({type:"root",children:[e]},r);return i(),s}function e4(e,t){return{construct:"emphasis",markers:JF(t)==="*"?["*","_"]:["_","*"],sizes:[1]}}function t4(e,t,n){return n.options.emphasis||"*"}function n4(e){return"&#x"+e.toString(16).toUpperCase()+";"}function r4(e,t){let n=!1;return Vh(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,wf}),!!((!e.depth||e.depth<3)&&Lh(e)&&(t.options.setext||n))}function i4(e,t,n,r){const i=Math.max(Math.min(6,e.depth||1),1),s=n.createTracker(r);if(r4(e,n)){const f=n.enter("headingSetext"),p=n.enter("phrasing"),h=n.containerPhrasing(e,{...s.current(),before:`
`,after:`
`});return p(),f(),h+`
`+(i===1?"=":"-").repeat(h.length-(Math.max(h.lastIndexOf("\r"),h.lastIndexOf(`
`))+1))}const a="#".repeat(i),o=n.enter("headingAtx"),l=n.enter("phrasing");s.move(a+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...s.current()});const d=u.charCodeAt(0);return(d===9||d===32)&&(u=n4(d)+u.slice(1)),u=u?a+" "+u:a,n.options.closeAtx&&(u+=" "+a),l(),o(),u}m2.peek=s4;function m2(e){return e.value||""}function s4(){return"<"}g2.peek=a4;function g2(e,t,n,r){const i=Wh(n),s=i==='"'?"Quote":"Apostrophe",a=n.enter("image");let o=n.enter("label");const l=n.createTracker(r);let u=l.move("![");return u+=l.move(n.safe(e.alt,{before:u,after:"]",...l.current()})),u+=l.move("]("),o(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(o=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(o=n.enter("destinationRaw"),u+=l.move(n.safe(e.url,{before:u,after:e.title?" ":")",...l.current()}))),o(),e.title&&(o=n.enter(`title${s}`),u+=l.move(" "+i),u+=l.move(n.safe(e.title,{before:u,after:i,...l.current()})),u+=l.move(i),o()),u+=l.move(")"),a(),u}function a4(){return"!"}y2.peek=o4;function y2(e,t,n,r){const i=e.referenceType,s=n.enter("imageReference");let a=n.enter("label");const o=n.createTracker(r);let l=o.move("![");const u=n.safe(e.alt,{before:l,after:"]",...o.current()});l+=o.move(u+"]["),a();const d=n.stack;n.stack=d.filter(function(p){return p!=="phrasing"}),a=n.enter("reference");const f=n.safe(n.associationId(e),{before:l,after:"]",...o.current()});return a(),n.stack=d,s(),i==="full"||!u||u!==f?l+=o.move(f+"]"):i==="shortcut"?l=l.slice(0,-1):l+=o.move("]"),l}function o4(){return"!"}x2.peek=l4;function x2(e,t,n){let r=e.value||"",i="`",s=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^\n\r ]/.test(r)&&(/^[\n\r ]/.test(r)&&/[\n\r ]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++s<n.unsafe.length;){const a=n.unsafe[s],o=n.compilePattern(a);if(!a.atBreak)continue;let l;for(;l=o.exec(r);){let u=l.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(l.index+1)}}return i+r+i}function l4(){return"`"}function v2(e,t){const n=Lh(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][+\-.a-z]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}b2.peek=u4;function b2(e,t,n,r){const i=Wh(n),s=i==='"'?"Quote":"Apostrophe",a=n.createTracker(r);if(v2(e,n)){const d=n.stack;n.stack=d.filter(function(h){return h!=="phrasing"});const f=n.enter("autolink");let p=a.move("<");return p+=a.move(n.containerPhrasing(e,{before:p,after:">",...a.current()})),p+=a.move(">"),f(),n.stack=d,p}const o=n.enter("link");let l=n.enter("label"),u=a.move("[");return u+=a.move(n.containerPhrasing(e,{before:u,after:"](",...a.current()})),u+=a.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=a.move("<"),u+=a.move(n.safe(e.url,{before:u,after:">",...a.current()})),u+=a.move(">")):(l=n.enter("destinationRaw"),u+=a.move(n.safe(e.url,{before:u,after:e.title?" ":")",...a.current()}))),l(),e.title&&(l=n.enter(`title${s}`),u+=a.move(" "+i),u+=a.move(n.safe(e.title,{before:u,after:i,...a.current()})),u+=a.move(i),l()),u+=a.move(")"),o(),u}function u4(e,t,n){return v2(e,n)?"<":"["}w2.peek=c4;function w2(e,t,n,r){const i=e.referenceType,s=n.enter("linkReference");let a=n.enter("label");const o=n.createTracker(r);let l=o.move("[");const u=n.containerPhrasing(e,{before:l,after:"]",...o.current()});l+=o.move(u+"]["),a();const d=n.stack;n.stack=d.filter(function(p){return p!=="phrasing"}),a=n.enter("reference");const f=n.safe(n.associationId(e),{before:l,after:"]",...o.current()});return a(),n.stack=d,s(),i==="full"||!u||u!==f?l+=o.move(f+"]"):i==="shortcut"?l=l.slice(0,-1):l+=o.move("]"),l}function c4(){return"["}function qh(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function d4(e){const t=qh(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function f4(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function k2(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function p4(e,t,n,r){const i=n.enter("list"),s=n.bulletCurrent;let a=e.ordered?f4(n):qh(n);const o=e.ordered?a==="."?")":".":d4(n);let l=t&&n.bulletLastUsed?a===n.bulletLastUsed:!1;if(!e.ordered){const d=e.children?e.children[0]:void 0;if((a==="*"||a==="-")&&d&&(!d.children||!d.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(l=!0),k2(n)===a&&d){let f=-1;for(;++f<e.children.length;){const p=e.children[f];if(p&&p.type==="listItem"&&p.children&&p.children[0]&&p.children[0].type==="thematicBreak"){l=!0;break}}}}l&&(a=o),n.bulletCurrent=a;const u=n.containerFlow(e,r);return n.bulletLastUsed=a,n.bulletCurrent=s,i(),u}function h4(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function m4(e,t,n,r){const i=h4(n);let s=n.bulletCurrent||qh(n);t&&t.type==="list"&&t.ordered&&(s=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+s);let a=s.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(a=Math.ceil(a/4)*4);const o=n.createTracker(r);o.move(s+" ".repeat(a-s.length)),o.shift(a);const l=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,o.current()),d);return l(),u;function d(f,p,h){return p?(h?"":" ".repeat(a))+f:(h?s:s+" ".repeat(a-s.length))+f}}function g4(e,t,n,r){const i=n.enter("paragraph"),s=n.enter("phrasing"),a=n.containerPhrasing(e,r);return s(),i(),a}function y4(e,t,n,r){if(!e.children.some(function(o){return $F(o)}))return n.containerFlow(e,r);const s=n.enter("phrasing"),a=n.containerPhrasing(e,r);return s(),a}function x4(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Kh.attention=v4;Kh.peek=b4;function Kh(e,t,n,r){const i=n.enter("phrasing"),s=n.containerPhrasing({type:"root",children:[e]},r);return i(),s}function v4(e,t){return{construct:"strong",markers:x4(t)==="*"?["*","_"]:["_","*"],sizes:[2]}}function b4(e,t,n){return n.options.strong||"*"}function w4(e,t,n,r){const i=t?t.children:[],s=i.indexOf(e);return n.safe(e.value,{...r,afterNode:i[s+1],beforeNode:i[s-1]})}function k4(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function S4(e,t,n){const r=(k2(n)+(n.options.ruleSpaces?" ":"")).repeat(k4(n));return n.options.ruleSpaces?r.slice(0,-1):r}const S2={blockquote:HF,break:Zx,code:XF,definition:ZF,emphasis:Gh,hardBreak:Zx,heading:i4,html:m2,image:g2,imageReference:y2,inlineCode:x2,link:b2,linkReference:w2,list:p4,listItem:m4,paragraph:g4,root:y4,strong:Kh,text:w4,thematicBreak:S4};function E4(){return{enter:{table:C4,tableData:Jx,tableHeader:Jx,tableRow:_4},exit:{codeText:A4,table:T4,tableData:Bc,tableHeader:Bc,tableRow:Bc}}}function C4(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function T4(e){this.exit(e),this.data.inTable=void 0}function _4(e){this.enter({type:"tableRow",children:[]},e)}function Bc(e){this.exit(e)}function Jx(e){this.enter({type:"tableCell",children:[]},e)}function A4(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,I4));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function I4(e,t){return t==="|"?t:e}function N4(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,s=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:p,table:a,tableCell:l,tableRow:o}};function a(h,x,v,b){return u(d(h,v,b),h.align)}function o(h,x,v,b){const g=f(h,v,b),m=u([g]);return m.slice(0,m.indexOf(`
`))}function l(h,x,v,b){const g=v.enter("tableCell"),m=v.enter("phrasing"),y=v.containerPhrasing(h,{...b,before:s,after:s});return m(),g(),y}function u(h,x){return BF(h,{align:x,alignDelimiters:r,padding:n,stringLength:i})}function d(h,x,v){const b=h.children;let g=-1;const m=[],y=x.enter("table");for(;++g<b.length;)m[g]=f(b[g],x,v);return y(),m}function f(h,x,v){const b=h.children;let g=-1;const m=[],y=x.enter("tableRow");for(;++g<b.length;)m[g]=l(b[g],h,x,v);return y(),m}function p(h,x,v){let b=S2.inlineCode(h,x,v);return v.stack.includes("tableCell")&&(b=b.replace(/\|/g,"\\$&")),b}}function P4(){return{exit:{taskListCheckValueChecked:e0,taskListCheckValueUnchecked:e0,paragraph:j4}}}function R4(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:D4}}}function e0(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function j4(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const r=n.children[0];if(r&&r.type==="text"){const i=t.children;let s=-1,a;for(;++s<i.length;){const o=i[s];if(o.type==="paragraph"){a=o;break}}a===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function D4(e,t,n,r){const i=e.children[0],s=typeof e.checked=="boolean"&&i&&i.type==="paragraph",a="["+(e.checked?"x":" ")+"] ",o=n.createTracker(r);s&&o.move(a);let l=S2.listItem(e,t,n,{...r,...o.current()});return s&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),l;function u(d){return d+a}}function L4(){return[uF(),NF(),DF(),E4(),P4()]}function M4(e){return{extensions:[cF(),PF(e),LF(),N4(e),R4()]}}const O4={tokenize:$4,partial:!0},E2={tokenize:H4,partial:!0},C2={tokenize:W4,partial:!0},T2={tokenize:G4,partial:!0},F4={tokenize:q4,partial:!0},_2={name:"wwwAutolink",tokenize:B4,previous:I2},A2={name:"protocolAutolink",tokenize:V4,previous:N2},qn={name:"emailAutolink",tokenize:U4,previous:P2},Sn={};function z4(){return{text:Sn}}let Rr=48;for(;Rr<123;)Sn[Rr]=qn,Rr++,Rr===58?Rr=65:Rr===91&&(Rr=97);Sn[43]=qn;Sn[45]=qn;Sn[46]=qn;Sn[95]=qn;Sn[72]=[qn,A2];Sn[104]=[qn,A2];Sn[87]=[qn,_2];Sn[119]=[qn,_2];function U4(e,t,n){const r=this;let i,s;return a;function a(f){return!Cf(f)||!P2.call(r,r.previous)||Yh(r.events)?n(f):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),o(f))}function o(f){return Cf(f)?(e.consume(f),o):f===64?(e.consume(f),l):n(f)}function l(f){return f===46?e.check(F4,d,u)(f):f===45||f===95||ot(f)?(s=!0,e.consume(f),l):d(f)}function u(f){return e.consume(f),i=!0,l}function d(f){return s&&i&&dt(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(f)):n(f)}}function B4(e,t,n){const r=this;return i;function i(a){return a!==87&&a!==119||!I2.call(r,r.previous)||Yh(r.events)?n(a):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(O4,e.attempt(E2,e.attempt(C2,s),n),n)(a))}function s(a){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(a)}}function V4(e,t,n){const r=this;let i="",s=!1;return a;function a(f){return(f===72||f===104)&&N2.call(r,r.previous)&&!Yh(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(f),e.consume(f),o):n(f)}function o(f){if(dt(f)&&i.length<5)return i+=String.fromCodePoint(f),e.consume(f),o;if(f===58){const p=i.toLowerCase();if(p==="http"||p==="https")return e.consume(f),l}return n(f)}function l(f){return f===47?(e.consume(f),s?u:(s=!0,l)):n(f)}function u(f){return f===null||Ul(f)||we(f)||si(f)||Su(f)?n(f):e.attempt(E2,e.attempt(C2,d),n)(f)}function d(f){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(f)}}function $4(e,t,n){let r=0;return i;function i(a){return(a===87||a===119)&&r<3?(r++,e.consume(a),i):a===46&&r===3?(e.consume(a),s):n(a)}function s(a){return a===null?n(a):t(a)}}function H4(e,t,n){let r,i,s;return a;function a(u){return u===46||u===95?e.check(T2,l,o)(u):u===null||we(u)||si(u)||u!==45&&Su(u)?l(u):(s=!0,e.consume(u),a)}function o(u){return u===95?r=!0:(i=r,r=void 0),e.consume(u),a}function l(u){return i||r||!s?n(u):t(u)}}function W4(e,t){let n=0,r=0;return i;function i(a){return a===40?(n++,e.consume(a),i):a===41&&r<n?s(a):a===33||a===34||a===38||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===60||a===63||a===93||a===95||a===126?e.check(T2,t,s)(a):a===null||we(a)||si(a)?t(a):(e.consume(a),i)}function s(a){return a===41&&r++,e.consume(a),i}}function G4(e,t,n){return r;function r(o){return o===33||o===34||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===63||o===95||o===126?(e.consume(o),r):o===38?(e.consume(o),s):o===93?(e.consume(o),i):o===60||o===null||we(o)||si(o)?t(o):n(o)}function i(o){return o===null||o===40||o===91||we(o)||si(o)?t(o):r(o)}function s(o){return dt(o)?a(o):n(o)}function a(o){return o===59?(e.consume(o),r):dt(o)?(e.consume(o),a):n(o)}}function q4(e,t,n){return r;function r(s){return e.consume(s),i}function i(s){return ot(s)?n(s):t(s)}}function I2(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||we(e)}function N2(e){return!dt(e)}function P2(e){return!(e===47||Cf(e))}function Cf(e){return e===43||e===45||e===46||e===95||ot(e)}function Yh(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const K4={tokenize:nz,partial:!0};function Y4(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:J4,continuation:{tokenize:ez},exit:tz}},text:{91:{name:"gfmFootnoteCall",tokenize:Z4},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:X4,resolveTo:Q4}}}}function X4(e,t,n){const r=this;let i=r.events.length;const s=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let a;for(;i--;){const l=r.events[i][1];if(l.type==="labelImage"){a=l;break}if(l.type==="gfmFootnoteCall"||l.type==="labelLink"||l.type==="label"||l.type==="image"||l.type==="link")break}return o;function o(l){if(!a||!a._balanced)return n(l);const u=on(r.sliceSerialize({start:a.end,end:r.now()}));return u.codePointAt(0)!==94||!s.includes(u.slice(1))?n(l):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(l),e.exit("gfmFootnoteCallLabelMarker"),t(l))}}function Q4(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const s={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},a={type:"chunkString",contentType:"string",start:Object.assign({},s.start),end:Object.assign({},s.end)},o=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",s,t],["enter",a,t],["exit",a,t],["exit",s,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...o),e}function Z4(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let s=0,a;return o;function o(f){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),l}function l(f){return f!==94?n(f):(e.enter("gfmFootnoteCallMarker"),e.consume(f),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(f){if(s>999||f===93&&!a||f===null||f===91||we(f))return n(f);if(f===93){e.exit("chunkString");const p=e.exit("gfmFootnoteCallString");return i.includes(on(r.sliceSerialize(p)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(f)}return we(f)||(a=!0),s++,e.consume(f),f===92?d:u}function d(f){return f===91||f===92||f===93?(e.consume(f),s++,u):u(f)}}function J4(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let s,a=0,o;return l;function l(x){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(x),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(x){return x===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(x),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",d):n(x)}function d(x){if(a>999||x===93&&!o||x===null||x===91||we(x))return n(x);if(x===93){e.exit("chunkString");const v=e.exit("gfmFootnoteDefinitionLabelString");return s=on(r.sliceSerialize(v)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(x),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),p}return we(x)||(o=!0),a++,e.consume(x),x===92?f:d}function f(x){return x===91||x===92||x===93?(e.consume(x),a++,d):d(x)}function p(x){return x===58?(e.enter("definitionMarker"),e.consume(x),e.exit("definitionMarker"),i.includes(s)||i.push(s),ge(e,h,"gfmFootnoteDefinitionWhitespace")):n(x)}function h(x){return t(x)}}function ez(e,t,n){return e.check(Xa,t,e.attempt(K4,t,n))}function tz(e){e.exit("gfmFootnoteDefinition")}function nz(e,t,n){const r=this;return ge(e,i,"gfmFootnoteDefinitionIndent",5);function i(s){const a=r.events[r.events.length-1];return a&&a[1].type==="gfmFootnoteDefinitionIndent"&&a[2].sliceSerialize(a[1],!0).length===4?t(s):n(s)}}function rz(e){let n=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:s,resolveAll:i};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(a,o){let l=-1;for(;++l<a.length;)if(a[l][0]==="enter"&&a[l][1].type==="strikethroughSequenceTemporary"&&a[l][1]._close){let u=l;for(;u--;)if(a[u][0]==="exit"&&a[u][1].type==="strikethroughSequenceTemporary"&&a[u][1]._open&&a[l][1].end.offset-a[l][1].start.offset===a[u][1].end.offset-a[u][1].start.offset){a[l][1].type="strikethroughSequence",a[u][1].type="strikethroughSequence";const d={type:"strikethrough",start:Object.assign({},a[u][1].start),end:Object.assign({},a[l][1].end)},f={type:"strikethroughText",start:Object.assign({},a[u][1].end),end:Object.assign({},a[l][1].start)},p=[["enter",d,o],["enter",a[u][1],o],["exit",a[u][1],o],["enter",f,o]],h=o.parser.constructs.insideSpan.null;h&&an(p,p.length,0,Eu(h,a.slice(u+1,l),o)),an(p,p.length,0,[["exit",f,o],["enter",a[l][1],o],["exit",a[l][1],o],["exit",d,o]]),an(a,u-1,l-u+3,p),l=u+p.length-2;break}}for(l=-1;++l<a.length;)a[l][1].type==="strikethroughSequenceTemporary"&&(a[l][1].type="data");return a}function s(a,o,l){const u=this.previous,d=this.events;let f=0;return p;function p(x){return u===126&&d[d.length-1][1].type!=="characterEscape"?l(x):(a.enter("strikethroughSequenceTemporary"),h(x))}function h(x){const v=Vl(u);if(x===126)return f>1?l(x):(a.consume(x),f++,h);if(f<2&&!n)return l(x);const b=a.exit("strikethroughSequenceTemporary"),g=Vl(x);return b._open=!g||g===2&&!!v,b._close=!v||v===2&&!!g,o(x)}}}class iz{constructor(){this.map=[],this.index=new Map}add(t,n,r){sz(this,t,n,r)}consume(t){if(this.map.sort(function(s,a){return s[0]-a[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(const s of i)t.push(s);i=r.pop()}this.map.length=0,this.index.clear()}}function sz(e,t,n,r){if(n===0&&r.length===0)return;const i=e.index.get(t);if(i){i[1]+=n,i[2].push(...r);return}const s=[t,n,r];e.map.push(s),e.index.set(t,s)}function az(e,t){let n=!1;const r=[];for(;t<e.length;){const i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const s=r.length-1;r[s]=r[s]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function oz(){return{flow:{null:{name:"table",tokenize:lz,resolveAll:uz}}}}function lz(e,t,n){const r=this;let i=0,s=0,a;return o;function o(T){let R=r.events.length-1;for(;R>-1;){const{type:q}=r.events[R][1];if(q==="lineEnding"||q==="linePrefix")R--;else break}const z=R>-1?r.events[R][1].type:null,G=z==="tableHead"||z==="tableRow"?w:l;return G===w&&r.parser.lazy[r.now().line]?n(T):G(T)}function l(T){return e.enter("tableHead"),e.enter("tableRow"),u(T)}function u(T){return T===124||(a=!0,s+=1),d(T)}function d(T){return T===null?n(T):J(T)?s>1?(s=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(T),e.exit("lineEnding"),h):n(T):le(T)?ge(e,d,"whitespace")(T):(s+=1,a&&(a=!1,i+=1),T===124?(e.enter("tableCellDivider"),e.consume(T),e.exit("tableCellDivider"),a=!0,d):(e.enter("data"),f(T)))}function f(T){return T===null||T===124||we(T)?(e.exit("data"),d(T)):(e.consume(T),T===92?p:f)}function p(T){return T===92||T===124?(e.consume(T),f):f(T)}function h(T){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(T):(e.enter("tableDelimiterRow"),a=!1,le(T)?ge(e,x,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(T):x(T))}function x(T){return T===45||T===58?b(T):T===124?(a=!0,e.enter("tableCellDivider"),e.consume(T),e.exit("tableCellDivider"),v):C(T)}function v(T){return le(T)?ge(e,b,"whitespace")(T):b(T)}function b(T){return T===58?(s+=1,a=!0,e.enter("tableDelimiterMarker"),e.consume(T),e.exit("tableDelimiterMarker"),g):T===45?(s+=1,g(T)):T===null||J(T)?S(T):C(T)}function g(T){return T===45?(e.enter("tableDelimiterFiller"),m(T)):C(T)}function m(T){return T===45?(e.consume(T),m):T===58?(a=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(T),e.exit("tableDelimiterMarker"),y):(e.exit("tableDelimiterFiller"),y(T))}function y(T){return le(T)?ge(e,S,"whitespace")(T):S(T)}function S(T){return T===124?x(T):T===null||J(T)?!a||i!==s?C(T):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(T)):C(T)}function C(T){return n(T)}function w(T){return e.enter("tableRow"),I(T)}function I(T){return T===124?(e.enter("tableCellDivider"),e.consume(T),e.exit("tableCellDivider"),I):T===null||J(T)?(e.exit("tableRow"),t(T)):le(T)?ge(e,I,"whitespace")(T):(e.enter("data"),N(T))}function N(T){return T===null||T===124||we(T)?(e.exit("data"),I(T)):(e.consume(T),T===92?j:N)}function j(T){return T===92||T===124?(e.consume(T),N):N(T)}}function uz(e,t){let n=-1,r=!0,i=0,s=[0,0,0,0],a=[0,0,0,0],o=!1,l=0,u,d,f;const p=new iz;for(;++n<e.length;){const h=e[n],x=h[1];h[0]==="enter"?x.type==="tableHead"?(o=!1,l!==0&&(t0(p,t,l,u,d),d=void 0,l=0),u={type:"table",start:Object.assign({},x.start),end:Object.assign({},x.end)},p.add(n,0,[["enter",u,t]])):x.type==="tableRow"||x.type==="tableDelimiterRow"?(r=!0,f=void 0,s=[0,0,0,0],a=[0,n+1,0,0],o&&(o=!1,d={type:"tableBody",start:Object.assign({},x.start),end:Object.assign({},x.end)},p.add(n,0,[["enter",d,t]])),i=x.type==="tableDelimiterRow"?2:d?3:1):i&&(x.type==="data"||x.type==="tableDelimiterMarker"||x.type==="tableDelimiterFiller")?(r=!1,a[2]===0&&(s[1]!==0&&(a[0]=a[1],f=_o(p,t,s,i,void 0,f),s=[0,0,0,0]),a[2]=n)):x.type==="tableCellDivider"&&(r?r=!1:(s[1]!==0&&(a[0]=a[1],f=_o(p,t,s,i,void 0,f)),s=a,a=[s[1],n,0,0])):x.type==="tableHead"?(o=!0,l=n):x.type==="tableRow"||x.type==="tableDelimiterRow"?(l=n,s[1]!==0?(a[0]=a[1],f=_o(p,t,s,i,n,f)):a[1]!==0&&(f=_o(p,t,a,i,n,f)),i=0):i&&(x.type==="data"||x.type==="tableDelimiterMarker"||x.type==="tableDelimiterFiller")&&(a[3]=n)}for(l!==0&&t0(p,t,l,u,d),p.consume(t.events),n=-1;++n<t.events.length;){const h=t.events[n];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=az(t.events,n))}return e}function _o(e,t,n,r,i,s){const a=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",o="tableContent";n[0]!==0&&(s.end=Object.assign({},fi(t.events,n[0])),e.add(n[0],0,[["exit",s,t]]));const l=fi(t.events,n[1]);if(s={type:a,start:Object.assign({},l),end:Object.assign({},l)},e.add(n[1],0,[["enter",s,t]]),n[2]!==0){const u=fi(t.events,n[2]),d=fi(t.events,n[3]),f={type:o,start:Object.assign({},u),end:Object.assign({},d)};if(e.add(n[2],0,[["enter",f,t]]),r!==2){const p=t.events[n[2]],h=t.events[n[3]];if(p[1].end=Object.assign({},h[1].end),p[1].type="chunkText",p[1].contentType="text",n[3]>n[2]+1){const x=n[2]+1,v=n[3]-n[2]-1;e.add(x,v,[])}}e.add(n[3]+1,0,[["exit",f,t]])}return i!==void 0&&(s.end=Object.assign({},fi(t.events,i)),e.add(i,0,[["exit",s,t]]),s=void 0),s}function t0(e,t,n,r,i){const s=[],a=fi(t.events,n);i&&(i.end=Object.assign({},a),s.push(["exit",i,t])),r.end=Object.assign({},a),s.push(["exit",r,t]),e.add(n+1,0,s)}function fi(e,t){const n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const cz={name:"tasklistCheck",tokenize:fz};function dz(){return{text:{91:cz}}}function fz(e,t,n){const r=this;return i;function i(l){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(l):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),s)}function s(l){return we(l)?(e.enter("taskListCheckValueUnchecked"),e.consume(l),e.exit("taskListCheckValueUnchecked"),a):l===88||l===120?(e.enter("taskListCheckValueChecked"),e.consume(l),e.exit("taskListCheckValueChecked"),a):n(l)}function a(l){return l===93?(e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),o):n(l)}function o(l){return J(l)?t(l):le(l)?e.check({tokenize:pz},t,n)(l):n(l)}}function pz(e,t,n){return ge(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function hz(e){return Vk([z4(),Y4(),rz(e),oz(),dz()])}const mz={};function gz(e){const t=this,n=e||mz,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),s=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),a=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(hz(n)),s.push(L4()),a.push(M4(n))}var R2={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,a={},o={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function m(y){return y instanceof l?new l(y.type,m(y.content),y.alias):Array.isArray(y)?y.map(m):y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++s}),m.__id},clone:function m(y,S){S=S||{};var C,w;switch(o.util.type(y)){case"Object":if(w=o.util.objId(y),S[w])return S[w];C={},S[w]=C;for(var I in y)y.hasOwnProperty(I)&&(C[I]=m(y[I],S));return C;case"Array":return w=o.util.objId(y),S[w]?S[w]:(C=[],S[w]=C,y.forEach(function(N,j){C[j]=m(N,S)}),C);default:return y}},getLanguage:function(m){for(;m;){var y=i.exec(m.className);if(y)return y[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,y){m.className=m.className.replace(RegExp(i,"gi"),""),m.classList.add("language-"+y)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(C){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack)||[])[1];if(m){var y=document.getElementsByTagName("script");for(var S in y)if(y[S].src==m)return y[S]}return null}},isActive:function(m,y,S){for(var C="no-"+y;m;){var w=m.classList;if(w.contains(y))return!0;if(w.contains(C))return!1;m=m.parentElement}return!!S}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(m,y){var S=o.util.clone(o.languages[m]);for(var C in y)S[C]=y[C];return S},insertBefore:function(m,y,S,C){C=C||o.languages;var w=C[m],I={};for(var N in w)if(w.hasOwnProperty(N)){if(N==y)for(var j in S)S.hasOwnProperty(j)&&(I[j]=S[j]);S.hasOwnProperty(N)||(I[N]=w[N])}var T=C[m];return C[m]=I,o.languages.DFS(o.languages,function(R,z){z===T&&R!=m&&(this[R]=I)}),I},DFS:function m(y,S,C,w){w=w||{};var I=o.util.objId;for(var N in y)if(y.hasOwnProperty(N)){S.call(y,N,y[N],C||N);var j=y[N],T=o.util.type(j);T==="Object"&&!w[I(j)]?(w[I(j)]=!0,m(j,S,null,w)):T==="Array"&&!w[I(j)]&&(w[I(j)]=!0,m(j,S,N,w))}}},plugins:{},highlightAll:function(m,y){o.highlightAllUnder(document,m,y)},highlightAllUnder:function(m,y,S){var C={callback:S,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",C),C.elements=Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)),o.hooks.run("before-all-elements-highlight",C);for(var w=0,I;I=C.elements[w++];)o.highlightElement(I,y===!0,C.callback)},highlightElement:function(m,y,S){var C=o.util.getLanguage(m),w=o.languages[C];o.util.setLanguage(m,C);var I=m.parentElement;I&&I.nodeName.toLowerCase()==="pre"&&o.util.setLanguage(I,C);var N=m.textContent,j={element:m,language:C,grammar:w,code:N};function T(z){j.highlightedCode=z,o.hooks.run("before-insert",j),j.element.innerHTML=j.highlightedCode,o.hooks.run("after-highlight",j),o.hooks.run("complete",j),S&&S.call(j.element)}if(o.hooks.run("before-sanity-check",j),I=j.element.parentElement,I&&I.nodeName.toLowerCase()==="pre"&&!I.hasAttribute("tabindex")&&I.setAttribute("tabindex","0"),!j.code){o.hooks.run("complete",j),S&&S.call(j.element);return}if(o.hooks.run("before-highlight",j),!j.grammar){T(o.util.encode(j.code));return}if(y&&r.Worker){var R=new Worker(o.filename);R.onmessage=function(z){T(z.data)},R.postMessage(JSON.stringify({language:j.language,code:j.code,immediateClose:!0}))}else T(o.highlight(j.code,j.grammar,j.language))},highlight:function(m,y,S){var C={code:m,grammar:y,language:S};if(o.hooks.run("before-tokenize",C),!C.grammar)throw new Error('The language "'+C.language+'" has no grammar.');return C.tokens=o.tokenize(C.code,C.grammar),o.hooks.run("after-tokenize",C),l.stringify(o.util.encode(C.tokens),C.language)},tokenize:function(m,y){var S=y.rest;if(S){for(var C in S)y[C]=S[C];delete y.rest}var w=new f;return p(w,w.head,m),d(m,w,y,w.head,0),x(w)},hooks:{all:{},add:function(m,y){var S=o.hooks.all;S[m]=S[m]||[],S[m].push(y)},run:function(m,y){var S=o.hooks.all[m];if(!(!S||!S.length))for(var C=0,w;w=S[C++];)w(y)}},Token:l};r.Prism=o;function l(m,y,S,C){this.type=m,this.content=y,this.alias=S,this.length=(C||"").length|0}l.stringify=function m(y,S){if(typeof y=="string")return y;if(Array.isArray(y)){var C="";return y.forEach(function(T){C+=m(T,S)}),C}var w={type:y.type,content:m(y.content,S),tag:"span",classes:["token",y.type],attributes:{},language:S},I=y.alias;I&&(Array.isArray(I)?Array.prototype.push.apply(w.classes,I):w.classes.push(I)),o.hooks.run("wrap",w);var N="";for(var j in w.attributes)N+=" "+j+'="'+(w.attributes[j]||"").replace(/"/g,"&quot;")+'"';return"<"+w.tag+' class="'+w.classes.join(" ")+'"'+N+">"+w.content+"</"+w.tag+">"};function u(m,y,S,C){m.lastIndex=y;var w=m.exec(S);if(w&&C&&w[1]){var I=w[1].length;w.index+=I,w[0]=w[0].slice(I)}return w}function d(m,y,S,C,w,I){for(var N in S)if(!(!S.hasOwnProperty(N)||!S[N])){var j=S[N];j=Array.isArray(j)?j:[j];for(var T=0;T<j.length;++T){if(I&&I.cause==N+","+T)return;var R=j[T],z=R.inside,G=!!R.lookbehind,q=!!R.greedy,$=R.alias;if(q&&!R.pattern.global){var ue=R.pattern.toString().match(/[imsuy]*$/)[0];R.pattern=RegExp(R.pattern.source,ue+"g")}for(var Z=R.pattern||R,D=C.next,B=w;D!==y.tail&&!(I&&B>=I.reach);B+=D.value.length,D=D.next){var k=D.value;if(y.length>m.length)return;if(!(k instanceof l)){var K=1,te;if(q){if(te=u(Z,B,m,G),!te||te.index>=m.length)break;var se=te.index,A=te.index+te[0].length,ce=B;for(ce+=D.value.length;se>=ce;)D=D.next,ce+=D.value.length;if(ce-=D.value.length,B=ce,D.value instanceof l)continue;for(var ke=D;ke!==y.tail&&(ce<A||typeof ke.value=="string");ke=ke.next)K++,ce+=ke.value.length;K--,k=m.slice(B,ce),te.index-=B}else if(te=u(Z,0,k,G),!te)continue;var se=te.index,Se=te[0],$e=k.slice(0,se),Ye=k.slice(se+Se.length),pe=B+k.length;I&&pe>I.reach&&(I.reach=pe);var et=D.prev;$e&&(et=p(y,et,$e),B+=$e.length),h(y,et,K);var St=new l(N,z?o.tokenize(Se,z):Se,$,Se);if(D=p(y,et,St),Ye&&p(y,D,Ye),K>1){var Ge={cause:N+","+T,reach:pe};d(m,y,S,D.prev,B,Ge),I&&Ge.reach>I.reach&&(I.reach=Ge.reach)}}}}}}function f(){var m={value:null,prev:null,next:null},y={value:null,prev:m,next:null};m.next=y,this.head=m,this.tail=y,this.length=0}function p(m,y,S){var C=y.next,w={value:S,prev:y,next:C};return y.next=w,C.prev=w,m.length++,w}function h(m,y,S){for(var C=y.next,w=0;w<S&&C!==m.tail;w++)C=C.next;y.next=C,C.prev=y,m.length-=w}function x(m){for(var y=[],S=m.head.next;S!==m.tail;)y.push(S.value),S=S.next;return y}if(!r.document)return r.addEventListener&&(o.disableWorkerMessageHandler||r.addEventListener("message",function(m){var y=JSON.parse(m.data),S=y.language,C=y.code,w=y.immediateClose;r.postMessage(o.highlight(C,o.languages[S],S)),w&&r.close()},!1)),o;var v=o.util.currentScript();v&&(o.filename=v.src,v.hasAttribute("data-manual")&&(o.manual=!0));function b(){o.manual||o.highlightAll()}if(!o.manual){var g=document.readyState;g==="loading"||g==="interactive"&&v&&v.defer?document.addEventListener("DOMContentLoaded",b):window.requestAnimationFrame?window.requestAnimationFrame(b):window.setTimeout(b,16)}return o}(t);e.exports&&(e.exports=n),typeof Bi<"u"&&(Bi.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(i,s){var a={};a["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[s]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};o["language-"+s]={pattern:/[\s\S]+/,inside:n.languages[s]};var l={};l[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:o},n.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,i){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:n.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(r){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var s=r.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",i=function(v,b){return"✖ Error "+v+" while fetching file: "+b},s="✖ Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},o="data-src-status",l="loading",u="loaded",d="failed",f="pre[data-src]:not(["+o+'="'+u+'"]):not(['+o+'="'+l+'"])';function p(v,b,g){var m=new XMLHttpRequest;m.open("GET",v,!0),m.onreadystatechange=function(){m.readyState==4&&(m.status<400&&m.responseText?b(m.responseText):m.status>=400?g(i(m.status,m.statusText)):g(s))},m.send(null)}function h(v){var b=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v||"");if(b){var g=Number(b[1]),m=b[2],y=b[3];return m?y?[g,Number(y)]:[g,void 0]:[g,g]}}n.hooks.add("before-highlightall",function(v){v.selector+=", "+f}),n.hooks.add("before-sanity-check",function(v){var b=v.element;if(b.matches(f)){v.code="",b.setAttribute(o,l);var g=b.appendChild(document.createElement("CODE"));g.textContent=r;var m=b.getAttribute("data-src"),y=v.language;if(y==="none"){var S=(/\.(\w+)$/.exec(m)||[,"none"])[1];y=a[S]||S}n.util.setLanguage(g,y),n.util.setLanguage(b,y);var C=n.plugins.autoloader;C&&C.loadLanguages(y),p(m,function(w){b.setAttribute(o,u);var I=h(b.getAttribute("data-range"));if(I){var N=w.split(/\r\n?|\n/g),j=I[0],T=I[1]==null?N.length:I[1];j<0&&(j+=N.length),j=Math.max(0,Math.min(j-1,N.length)),T<0&&(T+=N.length),T=Math.max(0,Math.min(T,N.length)),w=N.slice(j,T).join(`
`),b.hasAttribute("data-start")||b.setAttribute("data-start",String(j+1))}g.textContent=w,n.highlightElement(g)},function(w){b.setAttribute(o,d),g.textContent=w})}}),n.plugins.fileHighlight={highlight:function(b){for(var g=(b||document).querySelectorAll(f),m=0,y;y=g[m++];)n.highlightElement(y)}};var x=!1;n.fileHighlight=function(){x||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),x=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(R2);var yz=R2.exports;const n0=Wl(yz);Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism);(function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,r=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function s(l,u){return l=l.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return r}).replace(/<SPREAD>/g,function(){return i}),RegExp(l,u)}i=s(i).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=s(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:s(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:s(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var a=function(l){return l?typeof l=="string"?l:typeof l.content=="string"?l.content:l.content.map(a).join(""):""},o=function(l){for(var u=[],d=0;d<l.length;d++){var f=l[d],p=!1;if(typeof f!="string"&&(f.type==="tag"&&f.content[0]&&f.content[0].type==="tag"?f.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===a(f.content[0].content[1])&&u.pop():f.content[f.content.length-1].content==="/>"||u.push({tagName:a(f.content[0].content[1]),openedBraces:0}):u.length>0&&f.type==="punctuation"&&f.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&f.type==="punctuation"&&f.content==="}"?u[u.length-1].openedBraces--:p=!0),(p||typeof f=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var h=a(f);d<l.length-1&&(typeof l[d+1]=="string"||l[d+1].type==="plain-text")&&(h+=a(l[d+1]),l.splice(d+1,1)),d>0&&(typeof l[d-1]=="string"||l[d-1].type==="plain-text")&&(h=a(l[d-1])+h,l.splice(d-1,1),d--),l[d]=new e.Token("plain-text",h,null,h)}f.content&&typeof f.content!="string"&&o(f.content)}};e.hooks.add("after-tokenize",function(l){l.language!=="jsx"&&l.language!=="tsx"||o(l.tokens)})})(Prism);(function(e){var t=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",t),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"];var n=e.languages.tsx.tag;n.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+n.pattern.source+")",n.pattern.flags),n.lookbehind=!0})(Prism);(function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},r={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:r},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:r},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:r.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:r.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var i=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],s=r.variable[1].inside,a=0;a<i.length;a++)s[i[a]]=e.languages.bash[i[a]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};(function(e){var t=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function n(d){return d=d.replace(/<inner>/g,function(){return t}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+d+")")}var r=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,i=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return r}),s=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+i+s+"(?:"+i+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+i+s+")(?:"+i+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(r),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+i+")"+s+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+i+"$"),inside:{"table-header":{pattern:RegExp(r),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:n(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(d){["url","bold","italic","strike","code-snippet"].forEach(function(f){d!==f&&(e.languages.markdown[d].inside.content.inside[f]=e.languages.markdown[f])})}),e.hooks.add("after-tokenize",function(d){if(d.language!=="markdown"&&d.language!=="md")return;function f(p){if(!(!p||typeof p=="string"))for(var h=0,x=p.length;h<x;h++){var v=p[h];if(v.type!=="code"){f(v.content);continue}var b=v.content[1],g=v.content[3];if(b&&g&&b.type==="code-language"&&g.type==="code-block"&&typeof b.content=="string"){var m=b.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");m=(/[a-z][\w-]*/i.exec(m)||[""])[0].toLowerCase();var y="language-"+m;g.alias?typeof g.alias=="string"?g.alias=[g.alias,y]:g.alias.push(y):g.alias=[y]}}}f(d.tokens)}),e.hooks.add("wrap",function(d){if(d.type==="code-block"){for(var f="",p=0,h=d.classes.length;p<h;p++){var x=d.classes[p],v=/language-(.+)/.exec(x);if(v){f=v[1];break}}var b=e.languages[f];if(b)d.content=e.highlight(u(d.content),b,f);else if(f&&f!=="none"&&e.plugins.autoloader){var g="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);d.attributes.id=g,e.plugins.autoloader.loadLanguages(f,function(){var m=document.getElementById(g);m&&(m.innerHTML=e.highlight(m.textContent,e.languages[f],f))})}}});var a=RegExp(e.languages.markup.tag.pattern.source,"gi"),o={amp:"&",lt:"<",gt:">",quot:'"'},l=String.fromCodePoint||String.fromCharCode;function u(d){var f=d.replace(a,"");return f=f.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(p,h){if(h=h.toLowerCase(),h[0]==="#"){var x;return h[1]==="x"?x=parseInt(h.slice(2),16):x=Number(h.slice(1)),l(x)}else{var v=o[h];return v||p}}),f}e.languages.md=e.languages.markdown})(Prism);(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;(function(e){var t=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return t.source});e.languages.cpp=e.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:t,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),e.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return n})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),e.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e.languages.cpp}}}}),e.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),e.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:e.languages.extend("cpp",{})}}),e.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},e.languages.cpp["base-clause"])})(Prism);(function(e){var t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,n=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,r={pattern:RegExp(/(^|[^\w.])/.source+n+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[r,{pattern:RegExp(/(^|[^\w.])/.source+n+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:r.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+n+/[A-Z]\w*\b/.source),lookbehind:!0,inside:r.inside}],keyword:t,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":r,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+n+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:r.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+n+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:r.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(Prism);(function(e){for(var t=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,n=0;n<2;n++)t=t.replace(/<self>/g,function(){return t});t=t.replace(/<self>/g,function(){return/[^\s\S]/.source}),e.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+t),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust["closure-params"].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string})(Prism);Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/});Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}});delete Prism.languages.go["class-name"];(function(e){var t=/[*&][^\s[\]{},]+/,n=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,r="(?:"+n.source+"(?:[ 	]+"+t.source+")?|"+t.source+"(?:[ 	]+"+n.source+")?)",i=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),s=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function a(o,l){l=(l||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return r}).replace(/<<value>>/g,function(){return o});return RegExp(u,l)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return r})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return r}).replace(/<<key>>/g,function(){return"(?:"+i+"|"+s+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:a(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:a(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:a(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:a(s),lookbehind:!0,greedy:!0},number:{pattern:a(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:n,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml})(Prism);function r0(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function xz({children:e}){const[t,n]=E.useState(!1),r=(e==null?void 0:e.props)||{},i=r.className||"",s=/language-(\w+)/.exec(i),a=s?s[1].toLowerCase():"",o=String(r.children||"").replace(/\n$/,""),u={py:"python",js:"javascript",ts:"typescript",sh:"bash",shell:"bash",yml:"yaml",html:"markup",xml:"markup"}[a]||a||"text",d=E.useMemo(()=>{if(!o)return"";const p=n0.languages[u];if(p)try{return n0.highlight(o,p,u)}catch{return r0(o)}return r0(o)},[o,u]),f=()=>{o&&(navigator.clipboard.writeText(o),n(!0),setTimeout(()=>n(!1),2e3))};return c.jsxs("div",{className:"code-block-wrapper",children:[c.jsxs("div",{className:"code-block-header",children:[c.jsx("span",{className:"code-block-lang",children:a||"CODE"}),c.jsxs("button",{type:"button",onClick:f,className:"copy-code-btn","aria-label":"Copy code to clipboard",children:[t?c.jsx(Wb,{size:12,className:"text-accent"}):c.jsx(Kb,{size:12}),c.jsx("span",{children:t?"Copied!":"Copy"})]})]}),c.jsx("pre",{className:"code-block-pre",children:c.jsx("code",{className:i||`language-${u}`,dangerouslySetInnerHTML:{__html:d}})})]})}function vz({children:e,className:t,...n}){return t&&t.includes("language-")?c.jsx("code",{className:t,...n,children:e}):c.jsx("code",{className:"inline-code",...n,children:e})}function bz({href:e,children:t,...n}){return e&&/^(https?:|mailto:|\/|#)/i.test(e.trim())?c.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"markdown-link",...n,children:t}):c.jsx("span",{children:t})}function wz({content:e}){return e?c.jsx("div",{className:"markdown-content",children:c.jsx(JO,{remarkPlugins:[gz],components:{pre:xz,code:vz,a:bz,table:({node:t,...n})=>c.jsx("div",{className:"table-wrapper",children:c.jsx("table",{className:"markdown-table",...n})})},children:e})}):null}const i0={dont:"don't",cant:"can't",wont:"won't",didnt:"didn't",doesnt:"doesn't",isnt:"isn't",arent:"aren't",wasnt:"wasn't",werent:"weren't",hasnt:"hasn't",havent:"haven't",hadnt:"hadn't",couldnt:"couldn't",shouldnt:"shouldn't",wouldnt:"wouldn't",youre:"you're",theyre:"they're",weve:"we've",theyve:"they've",youve:"you've",im:"I'm",ive:"I've",ill:"I'll",id:"I'd",youll:"you'll",theyll:"they'll",thats:"that's",whats:"what's",hows:"how's",wheres:"where's",theres:"there's",lets:"let's",itll:"it'll"},s0={grammer:"grammar",gramer:"grammar",gramar:"grammar",fropdown:"dropdown",fropdowns:"dropdowns",modelall:"models",teh:"the",hte:"the",recieve:"receive",recieved:"received",recieving:"receiving",seperate:"separate",seperated:"separated",seperating:"separating",definately:"definitely",definatly:"definitely",occured:"occurred",occuring:"occurring",untill:"until",alot:"a lot",wich:"which",becuase:"because",beleive:"believe",wierd:"weird",thier:"their",truely:"truly",goverment:"government",enviroment:"environment",tommorrow:"tomorrow",tomorow:"tomorrow",accomodate:"accommodate",embarass:"embarrass",neccessary:"necessary",necesary:"necessary",acheive:"achieve",existance:"existence",occurance:"occurrence",refering:"referring",intrest:"interest",intresting:"interesting",diffrent:"different",compleatly:"completely",usfull:"useful",helpfull:"helpful",progam:"program",progams:"programs",programing:"programming",fucntion:"function",fucntions:"functions",varible:"variable",varibles:"variables",libary:"library",libaries:"libraries",databse:"database",databses:"databases",lenght:"length",heigth:"height",hight:"height",exmaple:"example",exmaples:"examples",resposne:"response",resposnes:"responses",qustion:"question",qustions:"questions",exaplin:"explain",alright:"all right",anycase:"any case",cannot:"can not",calender:"calendar",collegue:"colleague",concious:"conscious",foregin:"foreign",gaurentee:"guarantee",happend:"happened",ignorant:"ignorant",independant:"independent",mispell:"misspell",mispelled:"misspelled",noticable:"noticeable",oppurtunity:"opportunity",persue:"pursue",posession:"possession",priviledge:"privilege",reccomend:"recommend",recommand:"recommend",succesful:"successful",suprise:"surprise",threshhold:"threshold",appreance:"appearance",appriciate:"appreciate",begining:"beginning",beeing:"being",bussiness:"business",cematography:"cinematography",definate:"definite",enviorment:"environment",experiance:"experience",finaly:"finally",foriegn:"foreign",greatful:"grateful",hapiness:"happiness",indepent:"independent",liason:"liaison",publically:"publicly",refered:"referred",relevent:"relevant",restaraunt:"restaurant",resturant:"restaurant",rhym:"rhyme",satsify:"satisfy",sepperate:"separate",serius:"serious",sponser:"sponsor",successfull:"successful",wether:"weather"},kz=["monday","tuesday","wednesday","thursday","friday","saturday","sunday","january","february","march","april","may","june","july","august","september","october","november","december","python","javascript","typescript","react","fastapi","flask","redis","docker","ollama","eliza"];function a0(e,t){return!e||!t?t:e===e.toUpperCase()&&e.length>1?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.slice(1):t}function j2(e){if(!e)return e;const t=e.toLowerCase();return t==="i"?"I":i0[t]?a0(e,i0[t]):s0[t]?a0(e,s0[t]):kz.includes(t)?t.charAt(0).toUpperCase()+t.slice(1):e}function Ao(e){if(!e||typeof e!="string")return"";const t=/([a-zA-Z0-9_']+|\s+|[^\s\w'])/g,n=e.match(t)||[e];let r=!0;return n.map(s=>{if(/^[.!?\n]+$/.test(s))return r=!0,s;if(/^\s+$/.test(s))return s;if(/^[a-zA-Z0-9_']+$/.test(s)){let a=j2(s);return r&&a.length>0&&(a=a.charAt(0).toUpperCase()+a.slice(1)),r=!1,a}return s}).join("")}function Sz(e){if(!e)return e;const t=e.match(/^(.*?)(\b[a-zA-Z0-9_']+\b)(\s*[\s.,?!])$/);if(!t)return e;const[,n,r,i]=t,s=j2(r),a=n.trimEnd(),l=a.length===0||/[.!?\n]$/.test(a)?s.charAt(0).toUpperCase()+s.slice(1):s;return l!==r?n+l+i:e}const Ez={default_provider:"auto",default_model:"",auto_speak:!0,voice_name:"",voice_profile:"natural",speech_rate:1,response_style:"balanced",custom_system_prompt:"",detailed_responses:!1,theme:"green"},o0={natural:{rate:1,pitch:1,keywords:["natural","google","microsoft","aria","samantha"]},warm:{rate:.94,pitch:1.06,keywords:["warm","jenny","samantha","aria","female"]},energetic:{rate:1.08,pitch:1.08,keywords:["energetic","guy","ava","emma"]},calm:{rate:.88,pitch:.92,keywords:["calm","soft","serena","david"]},narrator:{rate:.92,pitch:.96,keywords:["narrator","daniel","george","alex"]},professional:{rate:.98,pitch:1,keywords:["professional","aria","jenny","david","google"]},female:{rate:.95,pitch:1.12,keywords:["female","woman","samantha","aria","jenny","victoria","zira","hazel","kate","catherine"]},male:{rate:.95,pitch:.88,keywords:["male","man","david","daniel","george","fred","brian","thomas","mike"]}},l0={balanced:"Deliver a clear, well-structured, insightful response. Lead with the direct answer or main takeaway, follow with step-by-step reasoning or context, and conclude with practical next steps. Use headings, lists, or tables where they improve readability.",concise:"Provide the most useful answer in the fewest words possible. Lead with the core conclusion, use compact bullet points where helpful, and omit filler while preserving essential caveats and accuracy.",tutor:"Act as an exceptional, patient tutor. Explain complex concepts step by step in plain language, define technical terminology clearly, provide an intuitive analogy or concrete real-world example, and finish with a brief check-for-understanding recap.",expert:"Respond as a senior subject-matter expert. Provide technical rigor, state assumptions and trade-offs explicitly, discuss architectural and edge-case implications, and give production-grade depth without unnecessary filler.",coding:"Act as a principal software engineer. Provide correct, secure, and production-ready code. Use fenced code blocks with appropriate language identifiers. Include clear explanation of edge cases, dependencies, tests, and error handling. Do not invent non-existent APIs.",creative:"Be imaginative, engaging, and articulate while remaining coherent and insightful. Explore multiple perspectives or structured creative options and explain why the best idea stands out."};function Ms(e){return e?e.replace(/<\/?(?:user_input|user_message|assistant|system)[^>]*>/gi,"").trim():""}function Cz(e){return e?e.replace(new RegExp("\\p{Regional_Indicator}{2}","gu"),"").replace(/[\u{1F3F4}][\u{E0020}-\u{E007E}]+\u{E007F}/gu,"").replace(/[\uFE0E\uFE0F]?\u20E3/gu,"").replace(new RegExp("(?:\\p{Extended_Pictographic}|\\p{Emoji_Presentation}|\\p{Emoji_Modifier_Base})(?:[\\uFE0E\\uFE0F]|\\p{Emoji_Modifier})*(?:\\u200D(?:\\p{Extended_Pictographic}|\\p{Emoji_Presentation}|\\p{Emoji_Modifier_Base}|\\p{Emoji_Component})(?:[\\uFE0E\\uFE0F]|\\p{Emoji_Modifier})*)*","gu"),"").replace(/[\p{Emoji_Modifier}\uFE0E\uFE0F\u200D\u200C]/gu,"").replace(/\s+([.,!?;:])/g,"$1").replace(/\s+/g," ").trim():""}function Tz(e){if(!e)return"";let t=Ms(e);return t=t.replace(/```[\s\S]*?```/g," [code snippet omitted] "),t=t.replace(/`([^`]+)`/g,"$1"),t=t.replace(/!\[([^\]]*)\]\([^)]+\)/g,""),t=t.replace(/\[([^\]]+)\]\([^)]+\)/g,"$1"),t=t.replace(/^#{1,6}\s+/gm,""),t=t.replace(/^\s*>\s+/gm,""),t=t.replace(/(\*\*|__)(.*?)\1/g,"$2"),t=t.replace(/(\*|_)(.*?)\1/g,"$2"),t=t.replace(/^[ \t]*[-*_]{3,}[ \t]*$/gm,""),t=t.replace(/\|/g," "),t=Cz(t),t=t.replace(/\s+/g," ").trim(),t}function u0(e){var r;const t=["You are ELIZA AI, a helpful, accurate, and conversational AI assistant. Answer the user's actual question directly.","IDENTITY RULES:","- Your name is strictly 'ELIZA AI' (or 'Eliza AI'). If asked who you are or what your name is, state: 'I am ELIZA AI, your advanced conversational AI assistant.'","- Never state you do not have an identity or name.","","FORMATTING & RESPONSE RULES:","- Produce clean, well-structured Markdown that can be rendered directly by the frontend.","- Adapt the structure and length to the question: simple questions deserve concise answers (1-3 sentences, no unnecessary headings); complex questions deserve detailed, organized explanations.","- Headings: Use '# Title' or '## Section' only when appropriate. Never generate repetitive headings.","- Paragraphs: One main idea per short paragraph with blank lines between them. Explain technical terms in simple English.","- Lists: Use bullet points for features, items, and collections. Use numbered lists for sequential steps and workflows.","- Bold formatting: Use bold for important terms, definitions, and key takeaways. Do not bold entire paragraphs.","- Code: Use inline `code` for identifiers. Always use fenced code blocks with language identifiers (e.g., ```python) for code examples, with correct indentation.","- Tables: Use Markdown tables (| Col 1 | Col 2 |) when comparing items or displaying structured tabular data.","- Troubleshooting: Clearly state the problem, cause, solution, and verification steps.","- Avoid filler, repetition, excessive bolding, and generic disclaimers. Maintain conversation context across follow-ups."].join(`
`),n=e.detailed_responses?"Provide thorough, comprehensive answers with practical examples, edge cases, and actionable next steps.":"Keep the response appropriately sized and focused on the core request without unnecessary filler.";return[t,l0[e.response_style]||l0.balanced,n,(r=e.custom_system_prompt)==null?void 0:r.trim()].filter(Boolean).join(`

`)}function Vc(e,t,n,r){if(typeof window>"u"||!("speechSynthesis"in window))return!1;try{window.speechSynthesis.paused&&window.speechSynthesis.resume(),window.speechSynthesis.cancel()}catch{}const i=Tz(e);if(!i||!i.trim())return!1;function s(){var p;const o=new SpeechSynthesisUtterance(i),l=o0[t.voice_profile]||o0.natural;o.rate=Math.max(.5,Math.min(2,Number(t.speech_rate||1)*l.rate)),o.pitch=l.pitch;const u=window.speechSynthesis.getVoices(),d=u.find(h=>h.name===t.voice_name),f=u.find(h=>l.keywords.some(x=>h.name.toLowerCase().includes(x)));return d?o.voice=d:f&&(o.voice=f),o.lang=((p=d||f)==null?void 0:p.lang)||"en-US",o.onstart=n,o.onend=r,o.onerror=()=>{r&&r()},setTimeout(()=>{try{window.speechSynthesis.speak(o)}catch{r&&r()}},40),!0}if(window.speechSynthesis.getVoices().length===0){const o=()=>{window.speechSynthesis.onvoiceschanged=null,s()};return window.speechSynthesis.onvoiceschanged=o,setTimeout(()=>{window.speechSynthesis.onvoiceschanged===o&&(window.speechSynthesis.onvoiceschanged=null,s())},1e3),!0}return s()}const _z=E.forwardRef(function({accessData:t,freeQuestionsCount:n=0,onQuestionUsed:r,onRequestEmailGate:i,onOpenFeedback:s,isModalActive:a=!1},o){const[l,u]=E.useState([]),[d,f]=E.useState(""),[p,h]=E.useState("idle"),[x,v]=E.useState(!1),[b,g]=E.useState(!1),[m,y]=E.useState([]),[S,C]=E.useState(Ez),[w,I]=E.useState(null),[N,j]=E.useState([]),[T,R]=E.useState(""),[z,G]=E.useState(!1),[q,$]=E.useState(!1),[ue,Z]=E.useState(!1),[D,B]=E.useState(!0),[k,K]=E.useState(!1),[te,A]=E.useState(!1),[ce,ke]=E.useState(!0),se=E.useRef(null),Se=E.useRef(null);E.useRef(null),E.useImperativeHandle(o,()=>({sendPendingMessage:()=>{},stopVoiceAndMic:()=>{pe(),Ge()}}));const $e=E.useMemo(()=>{var fe,P,_,U;const M=(fe=S.default_model)==null?void 0:fe.trim();if(S.default_provider==="auto"){const V=m.find(Q=>Q.available),X=((P=V==null?void 0:V.name)==null?void 0:P.toUpperCase())||"AUTO";return M?`${X} · ${M.toUpperCase()}`:"AUTO ROUTING"}const H=m.find(V=>V.id===S.default_provider),ae=((_=H==null?void 0:H.name)==null?void 0:_.toUpperCase())||((U=S.default_provider)==null?void 0:U.toUpperCase())||"MANUAL";return M?`${ae} · ${M.toUpperCase()}`:ae},[m,S.default_provider,S.default_model]),Ye=E.useCallback(async()=>{try{const[M,H,ae,fe]=await Promise.all([Qn.health(),Qn.providers(),Qn.settings(),Qn.conversations()]);G(M.status==="ok"),y(H.providers||[]),C(P=>({...P,...ae})),j(fe.conversations||[]),R("")}catch{G(!1);const M=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1");R(M?"Backend unavailable. Please start the FastAPI backend server and refresh.":"Backend unavailable. Please verify that the backend on Render is active.")}},[]);E.useEffect(()=>{Ye();const M=setInterval(Ye,15e3);return()=>clearInterval(M)},[Ye]),E.useEffect(()=>{se.current&&(se.current.scrollTop=se.current.scrollHeight)},[l,p]);const pe=E.useCallback(()=>{"speechSynthesis"in window&&window.speechSynthesis.cancel(),p==="speaking"&&h("idle")},[p]),et=E.useCallback(M=>{if(M&&M.stopPropagation&&M.stopPropagation(),typeof window<"u"&&"speechSynthesis"in window)try{const H=new SpeechSynthesisUtterance("");H.volume=0,window.speechSynthesis.speak(H)}catch{}Z(H=>{const ae=!H;return ae&&pe(),ae})},[pe]),St=E.useCallback(async()=>{const M=window.SpeechRecognition||window.webkitSpeechRecognition;if(!M){R("Speech recognition is not supported in this browser. Please use Chrome or Safari over HTTPS.");return}if(pe(),typeof window<"u"&&"speechSynthesis"in window)try{const H=new SpeechSynthesisUtterance("");H.volume=0,window.speechSynthesis.speak(H)}catch{}if(typeof navigator<"u"&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)try{(await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(ae=>ae.stop())}catch(H){if(H.name==="NotAllowedError"||H.name==="PermissionDeniedError"){R("Microphone permission was denied. Please allow microphone access in your browser settings.");return}}try{const H=new M;H.continuous=!1,H.interimResults=!0,H.maxAlternatives=1,H.lang=navigator.language||"en-US",H.onstart=()=>{$(!0),h("listening"),R("")},H.onresult=ae=>{const fe=Array.from(ae.results).map(P=>P[0].transcript).join("");f(fe)},H.onerror=ae=>{$(!1),h("idle"),ae.error==="not-allowed"||ae.error==="service-not-allowed"?R("Microphone not eligible. Please ensure HTTPS or localhost and allow microphone permissions."):ae.error!=="no-speech"&&R(`Microphone error: ${ae.error}`)},H.onend=()=>{$(!1),h("idle")},Se.current=H,H.start()}catch(H){$(!1),h("idle"),R(H.message||"Failed to start microphone.")}},[pe]),Ge=E.useCallback(()=>{Se.current&&Se.current.stop(),$(!1),h("idle")},[]);E.useEffect(()=>{a&&(pe(),Ge())},[a,pe,Ge]),E.useEffect(()=>{(x||b||te)&&pe()},[x,b,te,pe]);const Gt=M=>{const H=M.target.value;if(D){const ae=H.slice(-1);if(/[\s.,?!]/.test(ae)){const fe=Sz(H);f(fe);return}}f(H)},Nr=()=>{if(!d.trim())return;const M=Ao(d);f(M),K(!0),setTimeout(()=>K(!1),2e3)},De=async M=>{var _,U,V,X;let H=(typeof M=="string"?M:d).trim();if(!H||p==="thinking")return;if(D&&(H=Ao(H)),f(""),!ba()&&n>=1&&(pe(),Ge(),i)){i();return}R(""),pe();const fe={role:"user",content:H,created_at:new Date().toISOString()},P=[...l,fe];u(P),h("thinking");try{const Q=ba();let oe;Q?(oe=await wa.submitQuestion({message:H,provider:S.default_provider||"auto",model:S.default_model||void 0,routing_mode:S.default_provider==="auto"?"auto":"manual",system_prompt:u0(S),conversation_id:w,history:l.slice(-10)}),r&&oe.remainingQuestions!==void 0&&r(oe.remainingQuestions,oe.blocked,oe.blockedUntil)):(oe=await Qn.chat({message:H,provider:S.default_provider||"auto",model:S.default_model||void 0,routing_mode:S.default_provider==="auto"?"auto":"manual",system_prompt:u0(S),conversation_id:w,history:l.slice(-10)}),r&&r(2,!1,null));const ze={role:"assistant",content:Ms(oe.answer),provider:oe.provider,model:oe.model,created_at:oe.created_at||new Date().toISOString()};u([...P,ze]),I(oe.conversation_id),h("idle");const Ue=oe.remainingQuestions!==void 0&&(oe.remainingQuestions<=0||oe.blocked)||(t==null?void 0:t.blocked)||(t==null?void 0:t.remainingQuestions)!==void 0&&t.remainingQuestions<=0;S.auto_speak&&!ue&&!a&&!Ue?Vc(oe.answer,S,()=>h("speaking"),()=>h("idle")):pe()}catch(Q){if(pe(),Ge(),Q.data&&(Q.data.blocked||Q.status===403||(_=Q.message)!=null&&_.includes("limit"))){const ze=((V=(U=Q.data)==null?void 0:U.detail)==null?void 0:V.blockedUntil)||((X=Q.data)==null?void 0:X.blockedUntil);r&&r(0,!0,ze)}h("idle");const oe={role:"assistant",content:Q.message||"Failed to reach AI provider.",error:!0,created_at:new Date().toISOString()};u([...P,oe]),R(Q.message||"Request failed.")}},En=()=>{pe(),u([]),I(null),R(""),h("idle")},qt=async M=>{var H,ae,fe,P;try{pe();const _=await Qn.conversation(M);u(_.messages||[]),I(_.id),g(!1),R("")}catch(_){if(_.data&&(_.data.blocked||_.status===403||(H=_.message)!=null&&H.includes("limit"))){const U=((fe=(ae=_.data)==null?void 0:ae.detail)==null?void 0:fe.blockedUntil)||((P=_.data)==null?void 0:P.blockedUntil);r&&r(0,!0,U)}R(_.message||"Failed to load conversation.")}},L=async(M,H)=>{var ae,fe,P,_;H.stopPropagation();try{await Qn.deleteConversation(M),j(U=>U.filter(V=>V.id!==M)),w===M&&En()}catch(U){if(U.data&&(U.data.blocked||U.status===403||(ae=U.message)!=null&&ae.includes("limit"))){const V=((P=(fe=U.data)==null?void 0:fe.detail)==null?void 0:P.blockedUntil)||((_=U.data)==null?void 0:_.blockedUntil);r&&r(0,!0,V)}R(U.message||"Failed to delete conversation.")}},me=async M=>{const H={...S,...M};C(H);try{await Qn.saveSettings(M)}catch{}},ie=M=>{navigator.clipboard.writeText(M)},ye=()=>{const M=l.map(P=>`[${P.role.toUpperCase()}] ${P.created_at||""}
${P.content}
`).join(`
---

`),H=new Blob([M],{type:"text/plain"}),ae=URL.createObjectURL(H),fe=document.createElement("a");fe.href=ae,fe.download="eliza-conversation.txt",fe.click(),URL.revokeObjectURL(ae)};return c.jsxs("main",{className:`app-shell theme-${S.theme||"green"}`,children:[c.jsx("div",{className:"scanlines","aria-hidden":"true"}),c.jsxs("header",{className:"topbar",children:[c.jsxs("div",{className:"brand-lockup",children:[c.jsx("div",{className:"brand-mark",children:c.jsx(Fd,{size:20})}),c.jsxs("div",{children:[c.jsxs("div",{className:"brand-name",children:["ELIZA",c.jsx("span",{children:"AI"})]}),c.jsx("div",{className:"brand-subtitle",children:"CONVERSATIONAL INTELLIGENCE"})]})]}),c.jsxs("div",{className:"top-status",children:[c.jsx("span",{className:`status-dot ${z?"online":""}`}),z?"SYSTEM ONLINE":"BACKEND OFFLINE",c.jsx("span",{className:"status-divider"}),$e,t&&c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"status-divider"}),c.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"5px",padding:"2px 8px",borderRadius:"6px",background:"rgba(192, 132, 252, 0.15)",border:"1px solid rgba(192, 132, 252, 0.35)",color:"#c084fc",fontSize:"11px",fontFamily:"'DM Mono', monospace",fontWeight:"700"},title:`Account: ${t.email||""}`,children:["QUESTIONS REMAINING: ",t.remainingQuestions??t.remaining_questions??0,"/3"]})]})]}),c.jsxs("div",{className:"top-actions",children:[c.jsx("button",{className:"icon-button",onClick:()=>v(!0),title:"Settings","aria-label":"Settings",children:c.jsx(t_,{size:17})}),s&&c.jsxs("button",{className:"icon-button",onClick:s,title:"Give Feedback","aria-label":"Give Feedback",style:{display:"inline-flex",alignItems:"center",gap:"4px",width:"auto",padding:"8px 10px",fontSize:"12px",color:"#c084fc",borderColor:"rgba(192, 132, 252, 0.35)",background:"rgba(192, 132, 252, 0.08)"},children:[c.jsx(Qb,{size:15}),c.jsx("span",{children:"Feedback"})]})]})]}),b&&c.jsxs("aside",{className:"history-panel",children:[c.jsxs("div",{className:"history-head",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"MEMORY BANK"}),c.jsx("h3",{children:"Conversations"})]}),c.jsx("button",{className:"icon-button",onClick:()=>g(!1),"aria-label":"Close history",children:c.jsx(It,{size:16})})]}),N.length===0?c.jsx("p",{className:"empty-history",children:"No saved conversations yet."}):N.map(M=>{var H;return c.jsxs("div",{className:"history-item",role:"button",tabIndex:0,onClick:()=>qt(M.id),onKeyDown:ae=>ae.key==="Enter"&&qt(M.id),children:[c.jsxs("div",{className:"history-item-copy",children:[c.jsx("b",{children:M.title||"Untitled conversation"}),c.jsxs("small",{children:[((H=M.messages)==null?void 0:H.length)||0," messages"]})]}),c.jsx("button",{className:"tiny-icon",onClick:ae=>L(M.id,ae),title:"Delete conversation","aria-label":"Delete conversation",children:c.jsx(It,{size:14})})]},M.id)})]}),c.jsxs("section",{className:"hero-layout",children:[c.jsxs("div",{className:"system-meta",children:[c.jsx("span",{children:"FIG. 01"}),c.jsx("span",{children:"NEURAL INTERFACE"}),c.jsx("span",{children:"BUILD 2.0.0"})]}),c.jsxs("div",{className:"hero-center",children:[c.jsx(xD,{status:p}),c.jsxs("div",{className:"system-title",children:[c.jsx("span",{className:"eyebrow",children:"PERSONAL AI TERMINAL"}),c.jsxs("h1",{children:["How may I ",c.jsx("em",{children:"help you?"})]}),c.jsx("p",{children:"Ask a question. Start a conversation. Explore an idea."})]}),c.jsxs("div",{className:`state-pill state-${p}`,children:[c.jsx("span",{className:"state-light"}),p==="idle"?"AWAITING INPUT":p==="thinking"?"PROCESSING REQUEST":p==="listening"?"LISTENING TO YOU":"SPEAKING RESPONSE",c.jsx("span",{className:"state-pulse",children:p==="thinking"?"•••":p==="speaking"?c.jsx(Hb,{size:14}):null})]})]}),c.jsxs("div",{className:"system-meta bottom-meta",children:[c.jsxs("span",{children:["VOICE I/O ","SpeechSynthesisUtterance"in window?"AVAILABLE":"LIMITED"]}),c.jsxs("span",{children:["MODEL ROUTING: ",$e]}),c.jsx("span",{children:"LATENCY: LIVE"})]})]}),c.jsxs("section",{className:"conversation-area",children:[c.jsxs("div",{className:"conversation-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"eyebrow",children:"LIVE TRANSMISSION"}),c.jsx("span",{className:"message-count",children:l.length?`${l.length} MESSAGES`:"NEW SESSION"})]}),c.jsxs("div",{className:"conversation-tools",style:{display:"flex",alignItems:"center",gap:"6px"},children:[c.jsxs("button",{className:"text-action",onClick:ye,disabled:!l.length,children:["Export ",c.jsx(GT,{size:13})]}),c.jsx("button",{className:"text-action",onClick:()=>u([]),disabled:!l.length,children:"Clear"}),c.jsx("button",{className:"text-action voice-toggle-btn",type:"button",onClick:et,onTouchEnd:M=>{M.preventDefault(),et(M)},title:ue?"Voice response: OFF (Click to turn ON)":"Voice response: ON (Click to turn OFF)","aria-label":ue?"Voice response is OFF":"Voice response is ON",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"28px",height:"28px",minWidth:"28px",padding:0,borderRadius:"6px",background:ue?"rgba(255, 255, 255, 0.03)":"rgba(255, 255, 255, 0.08)",borderColor:ue?"rgba(255, 255, 255, 0.08)":"rgba(255, 255, 255, 0.18)",color:ue?"rgba(226, 238, 230, 0.35)":"#e2eee6",cursor:"pointer",touchAction:"manipulation"},children:ue?c.jsx(o_,{size:14}):c.jsx(sc,{size:14})})]})]}),c.jsxs("div",{className:"transcript",ref:se,children:[l.length===0?c.jsxs("div",{className:"welcome-line",children:[c.jsx("span",{className:"prompt-symbol",children:"›"}),c.jsx("span",{children:"Terminal ready. Ask anything or click the microphone to speak."}),c.jsx("span",{className:"cursor-block"})]}):l.map((M,H)=>c.jsxs("article",{className:`message message-${M.role} ${M.error?"message-error":""}`,children:[c.jsx("div",{className:"message-avatar",children:M.role==="assistant"?c.jsx(Fd,{size:14}):"YOU"}),c.jsxs("div",{className:"message-body",children:[c.jsxs("div",{className:"message-meta",children:[M.role==="assistant"?"ELIZA AI":"USER",c.jsx("span",{children:M.created_at?new Date(M.created_at).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"NOW"}),M.model&&c.jsxs("span",{className:"model-chip",children:[M.provider," / ",M.model]})]}),M.role==="assistant"&&!M.error?c.jsx(wz,{content:Ms(M.content)}):c.jsx("p",{children:Ms(M.content)}),M.role==="assistant"&&!M.error&&c.jsxs("div",{className:"message-actions",children:[c.jsxs("button",{onClick:()=>ie(Ms(M.content)),title:"Copy response",children:[c.jsx(Kb,{size:13})," Copy"]}),c.jsxs("button",{onClick:()=>Vc(M.content,S,()=>h("speaking"),()=>h("idle")),title:"Read response aloud",children:[c.jsx(sc,{size:13})," Speak"]})]})]})]},`${M.created_at||"msg"}-${H}`)),p==="thinking"&&c.jsxs("div",{className:"thinking-line",children:[c.jsxs("span",{className:"thinking-dots",children:[c.jsx("i",{}),c.jsx("i",{}),c.jsx("i",{})]})," ","Synthesizing response..."]})]}),T&&c.jsxs("div",{className:"error-banner",children:[c.jsx("span",{children:T}),c.jsx("button",{onClick:()=>R(""),"aria-label":"Dismiss error",children:c.jsx(It,{size:14})})]}),c.jsxs("form",{className:"input-console",onSubmit:M=>{M.preventDefault();const H=D?Ao(d):d;De(H)},children:[c.jsx("div",{className:"input-prefix",children:"›"}),c.jsx("textarea",{rows:"1",value:d,onChange:Gt,onKeyDown:M=>{if(M.key==="Enter"&&!M.shiftKey){M.preventDefault();const H=D?Ao(d):d;De(H)}},placeholder:"Ask me anything, or speak to begin...","aria-label":"Your question",spellCheck:"true",autoCorrect:"on",autoCapitalize:"sentences",lang:"en"}),c.jsxs("div",{className:"input-actions",children:[d.trim()&&c.jsx("button",{type:"button",className:`console-icon ${k?"active":""}`,onClick:Nr,title:k?"Grammar corrected!":"Fix grammar & spelling now","aria-label":"Fix grammar and spelling now",children:c.jsx(Op,{size:16})}),p==="speaking"&&c.jsx("button",{type:"button",className:"console-icon",onClick:pe,title:"Stop speaking","aria-label":"Stop speaking",children:c.jsx(r_,{size:16})}),c.jsx("button",{type:"button",className:`console-icon ${q?"active":""}`,onClick:q?Ge:St,onTouchEnd:M=>{M.preventDefault(),q?Ge():St()},style:{touchAction:"manipulation"},title:q?"Stop listening":"Speak your question","aria-label":q?"Stop listening":"Speak your question",children:q?c.jsx(QT,{size:17}):c.jsx(gg,{size:17})}),c.jsx("button",{type:"submit",className:"send-button",disabled:!d.trim()||p==="thinking","aria-label":"Send message",children:c.jsx(t1,{size:16})})]})]}),c.jsxs("div",{className:"console-foot",children:[c.jsxs("span",{children:[c.jsx("span",{className:"tiny-led"})," ENCRYPTED LOCAL CONNECTION"]}),c.jsxs("span",{children:["ENTER TO SEND ",c.jsx("i",{children:"·"})," SHIFT + ENTER FOR NEW LINE"]}),c.jsxs("span",{onClick:()=>B(M=>!M),style:{cursor:"pointer"},title:"Click to toggle auto-grammar correction",children:["AUTO-GRAMMAR ",D?"ENABLED":"OFF"]})]})]}),c.jsxs("footer",{className:"app-footer",children:[c.jsxs("span",{children:["ELIZA AI ",c.jsx("b",{children:"©"})," 2026"]}),c.jsx("span",{children:"AI makes mistakes, but every mistake drives improvement"}),c.jsx("span",{children:"DEVELOPED BY AKHIL THADAKA · READY TO WORK & FREELANCE · CONTACT: 9121751697"})]}),te&&c.jsxs("div",{className:"accessibility-panel",role:"dialog","aria-label":"Accessibility",children:[c.jsxs("div",{className:"accessibility-head",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"ACCESSIBILITY"}),c.jsx("h3",{children:"Voice & Interaction"})]}),c.jsx("button",{className:"icon-button",onClick:()=>A(!1),"aria-label":"Close",children:c.jsx(It,{size:16})})]}),c.jsxs("label",{className:"toggle-row",children:[c.jsxs("span",{children:[c.jsx("b",{children:"Auto-grammar correction"}),c.jsx("small",{children:"Fix spelling and grammar as you type"})]}),c.jsx("input",{type:"checkbox",checked:D,onChange:M=>B(M.target.checked)})]}),c.jsxs("label",{className:"toggle-row",children:[c.jsxs("span",{children:[c.jsx("b",{children:"Show navigation bar"}),c.jsx("small",{children:"Toggle the quick-action navbar"})]}),c.jsx("input",{type:"checkbox",checked:ce,onChange:M=>ke(M.target.checked)})]}),c.jsxs("label",{className:"toggle-row",children:[c.jsxs("span",{children:[c.jsx("b",{children:"Mute voice output"}),c.jsx("small",{children:"Disable text-to-speech"})]}),c.jsx("input",{type:"checkbox",checked:ue,onChange:M=>{Z(M.target.checked),M.target.checked||pe()}})]}),c.jsxs("div",{className:"accessibility-actions",children:[c.jsxs("button",{className:"text-action",type:"button",onClick:St,children:[c.jsx(gg,{size:14})," Test microphone"]}),c.jsxs("button",{className:"text-action",type:"button",onClick:()=>Vc("Hello, I am ELIZA AI.",S,()=>h("speaking"),()=>h("idle")),children:[c.jsx(sc,{size:14})," Test voice"]})]})]}),c.jsx(wD,{open:x,onClose:()=>v(!1),providers:m,settings:S,onChange:me})]})});function Az(){const[e,t]=E.useState(!0),[n,r]=E.useState({isAnonymousFree:!0,remainingQuestions:3,remaining_questions:3,blocked:!1,email:""}),[i,s]=E.useState(!1),[a,o]=E.useState(""),[l,u]=E.useState(!1),[d,f]=E.useState(!1),[p,h]=E.useState(()=>{try{return Number(sessionStorage.getItem("eliza_free_q_count")||"0")}catch{return 0}}),x=E.useRef(null),v=E.useCallback(async()=>{const C=ba(),w=xg();if(!C||!w){r({isAnonymousFree:!0,remainingQuestions:Math.max(0,3-p),remaining_questions:Math.max(0,3-p),blocked:!1,email:""}),t(!1);return}try{const I=await wa.getStatus();r({...I,email:w,isAnonymousFree:!1}),(I.blocked||I.remainingQuestions<=0)&&f(!0)}catch{l_(),r({isAnonymousFree:!0,remainingQuestions:Math.max(0,3-p),remaining_questions:Math.max(0,3-p),blocked:!1,email:""})}finally{t(!1)}},[p]);E.useEffect(()=>{v();const C=typeof window<"u"&&window.location.hash||"";if(C.includes("access_token=")){const I=new URLSearchParams(C.replace(/^#/,"")).get("access_token");I&&(window.history.replaceState(null,"",window.location.pathname+window.location.search),t(!0),fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:`Bearer ${I}`}}).then(N=>N.json()).then(async N=>{if(N&&N.email){const j=await wa.googleLogin({email:N.email,name:N.name,picture:N.picture});sessionStorage.getItem("eliza_pending_q"),sessionStorage.removeItem("eliza_pending_q"),m(j)}}).catch(N=>{console.error("Failed to verify Google email:",N)}).finally(()=>{t(!1)}))}},[v]);const b=n.blocked||n.remainingQuestions<=0,g=!!(i||b&&d||l);E.useEffect(()=>{var C,w;if(g){if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}(w=(C=x.current)==null?void 0:C.stopVoiceAndMic)==null||w.call(C)}},[g]);const m=C=>{if(s(!1),r({...C,isAnonymousFree:!1}),C.blocked||C.remainingQuestions<=0){f(!0);return}o("");try{sessionStorage.removeItem("eliza_pending_q")}catch{}},y=(C,w,I)=>{var j,T;const N=w||C<=0;if(N){if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}(T=(j=x.current)==null?void 0:j.stopVoiceAndMic)==null||T.call(j)}if(r(R=>({...R,remainingQuestions:C,remaining_questions:C,blocked:N,blockedUntil:I||(R==null?void 0:R.blockedUntil)})),!ba()){const R=p+1;h(R);try{sessionStorage.setItem("eliza_free_q_count",String(R))}catch{}}N&&(f(!0),u(!0))},S=()=>{var C,w;if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}(w=(C=x.current)==null?void 0:C.stopVoiceAndMic)==null||w.call(C),o(""),s(!0)};return e?c.jsxs("div",{className:"app-init-loader",children:[c.jsx("div",{className:"init-spinner"}),c.jsx("span",{children:"Initializing Neural Interface..."}),c.jsx("style",{children:`
          .app-init-loader {
            height: 100vh;
            background: #080d0b;
            color: #e2eee6;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 16px;
            font-family: 'Manrope', sans-serif;
          }
          .init-spinner {
            width: 36px;
            height: 36px;
            border: 3px solid rgba(192, 132, 252, 0.2);
            border-top-color: #c084fc;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `})]}):c.jsxs(c.Fragment,{children:[c.jsx(_z,{ref:x,accessData:n,freeQuestionsCount:p,onQuestionUsed:y,onRequestEmailGate:S,onOpenFeedback:()=>u(!0),isModalActive:g}),i&&c.jsx(BN,{isModal:!0,onAccessGranted:m,onShowFeedback:C=>{s(!1),r(C),u(!0)},onClose:()=>s(!1)}),b&&d&&c.jsx(VN,{blockedUntil:n.blockedUntil,onGiveFeedback:()=>u(!0)}),l&&c.jsx(HN,{email:n.email||xg()||"visitor@trial",onClose:()=>u(!1),onSubmitted:()=>{u(!1),b&&f(!0)}})]})}const Iz="http://localhost:8000".replace(/\/$/,"");function D2(){try{return localStorage.getItem("eliza_admin_token")||""}catch{return""}}function Nz(e){try{e?localStorage.setItem("eliza_admin_token",e):localStorage.removeItem("eliza_admin_token")}catch{}}function Xh(){try{localStorage.removeItem("eliza_admin_token")}catch{}}async function Ct(e,t={}){const n=D2(),r={"Content-Type":"application/json",...n?{Authorization:`Bearer ${n}`}:{},...t.headers||{}},i=await fetch(`${Iz}${e}`,{...t,headers:r}),s=await i.json().catch(()=>({}));if(!i.ok){i.status===401&&typeof window<"u"&&Xh();const a=s.detail||s.message||`Admin request failed (${i.status})`,o=new Error(a);throw o.status=i.status,o.data=s,o}return s}const st={login:async(e,t)=>{const n=await Ct("/api/v1/admin/login",{method:"POST",body:JSON.stringify({username:e,password:t})});return n.token&&Nz(n.token),n},me:async()=>Ct("/api/v1/admin/me"),logout:async()=>{try{await Ct("/api/v1/admin/logout",{method:"POST"})}finally{Xh()}},getOverview:async(e="last30days",t=null,n=null)=>{const r=new URLSearchParams({preset:e});return t&&r.append("start_date",t),n&&r.append("end_date",n),Ct(`/api/v1/admin/dashboard/overview?${r.toString()}`)},getEmails:async(e={})=>{const t=new URLSearchParams;return Object.entries(e).forEach(([n,r])=>{r!=null&&r!==""&&t.append(n,r)}),Ct(`/api/v1/admin/dashboard/emails?${t.toString()}`)},getCustomerDetail:async e=>Ct(`/api/v1/admin/dashboard/emails/${encodeURIComponent(e)}`),getFeedback:async(e={})=>{const t=new URLSearchParams;return Object.entries(e).forEach(([n,r])=>{r!=null&&r!==""&&t.append(n,r)}),Ct(`/api/v1/admin/dashboard/feedback?${t.toString()}`)},updateFeedback:async(e,{status:t,admin_notes:n})=>Ct(`/api/v1/admin/dashboard/feedback/${encodeURIComponent(e)}`,{method:"PATCH",body:JSON.stringify({status:t,admin_notes:n})}),unblockCustomer:async e=>Ct(`/api/v1/admin/customers/${encodeURIComponent(e)}/unblock`,{method:"POST"}),deleteCustomer:async e=>Ct(`/api/v1/admin/customers/${encodeURIComponent(e)}`,{method:"DELETE"}),bulkDeleteCustomers:async e=>Ct("/api/v1/admin/customers/bulk-delete",{method:"POST",body:JSON.stringify({customer_ids:e})}),deleteFeedback:async e=>Ct(`/api/v1/admin/feedback/${encodeURIComponent(e)}`,{method:"DELETE"}),bulkDeleteFeedback:async e=>Ct("/api/v1/admin/feedback/bulk-delete",{method:"POST",body:JSON.stringify({feedback_ids:e})})};function Pz(){const e=cu(),[t,n]=E.useState(""),[r,i]=E.useState(""),[s,a]=E.useState(!1),[o,l]=E.useState(""),u=async d=>{if(d.preventDefault(),!t.trim()||!r){l("Please provide both username and password.");return}l(""),a(!0);try{await st.login(t.trim(),r),e("/admin/dashboard",{replace:!0})}catch(f){l(f.message||"Invalid credentials. Please verify username and password.")}finally{a(!1)}};return c.jsxs("div",{className:"admin-login-wrapper theme-violet",children:[c.jsx("div",{className:"login-glow","aria-hidden":"true"}),c.jsxs("div",{className:"login-card",children:[c.jsxs("div",{className:"login-header",children:[c.jsx("div",{className:"icon-shield-wrap",children:c.jsx(r1,{size:28})}),c.jsxs("h1",{children:["ELIZA",c.jsx("span",{children:"AI"})]}),c.jsx("span",{className:"login-badge",children:"ADMINISTRATIVE CONSOLE"}),c.jsx("p",{className:"login-desc",children:"Sign in with administrator credentials to manage access, review analytics, and inspect feedback."})]}),c.jsxs("form",{onSubmit:u,className:"login-form",children:[c.jsxs("div",{className:"login-field",children:[c.jsx("label",{htmlFor:"admin-user",children:"Administrator Username"}),c.jsxs("div",{className:"input-with-icon",children:[c.jsx(a_,{size:16,className:"field-icon"}),c.jsx("input",{id:"admin-user",type:"text",value:t,onChange:d=>{n(d.target.value),o&&l("")},placeholder:"admin",autoComplete:"username",autoFocus:!0,disabled:s})]})]}),c.jsxs("div",{className:"login-field",children:[c.jsx("label",{htmlFor:"admin-pass",children:"Password"}),c.jsxs("div",{className:"input-with-icon",children:[c.jsx(Xb,{size:16,className:"field-icon"}),c.jsx("input",{id:"admin-pass",type:"password",value:r,onChange:d=>{i(d.target.value),o&&l("")},placeholder:"••••••••••••",autoComplete:"current-password",disabled:s})]})]}),o&&c.jsxs("div",{className:"login-error",children:[c.jsx(Rp,{size:16}),c.jsx("span",{children:o})]}),c.jsx("button",{type:"submit",className:"btn-admin-submit",disabled:s||!t.trim()||!r,children:s?c.jsx("span",{children:"Authenticating..."}):c.jsxs(c.Fragment,{children:[c.jsx("span",{children:"Sign In to Dashboard"}),c.jsx(WT,{size:16})]})})]}),c.jsx("div",{className:"login-foot",children:c.jsxs(ya,{to:"/",className:"link-back-agent",children:[c.jsx(Np,{size:14}),c.jsx("span",{children:"Return to Voice Assistant"})]})})]}),c.jsx("style",{children:`
        .admin-login-wrapper {
          min-height: 100vh;
          background: #080d0b;
          color: #e2eee6;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          position: relative;
          font-family: 'Manrope', system-ui, -apple-system, sans-serif;
          overflow: hidden;
        }
        .login-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(192, 132, 252, 0.16), transparent 70%);
          filter: blur(60px);
          pointer-events: none;
        }
        .login-card {
          position: relative;
          background: #0b120e;
          border: 1px solid rgba(192, 132, 252, 0.3);
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.8), 0 0 50px rgba(192, 132, 252, 0.1);
          border-radius: 20px;
          max-width: 440px;
          width: 100%;
          padding: 40px 34px;
        }
        .login-header {
          text-align: center;
          margin-bottom: 28px;
        }
        .icon-shield-wrap {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: rgba(192, 132, 252, 0.14);
          border: 1px solid rgba(192, 132, 252, 0.4);
          color: #c084fc;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px auto;
        }
        .login-header h1 {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: 2px;
          margin: 0 0 6px 0;
          color: #ffffff;
        }
        .login-header h1 span {
          color: #c084fc;
        }
        .login-badge {
          display: inline-block;
          font-size: 10px;
          font-family: 'DM Mono', monospace;
          letter-spacing: 1.5px;
          color: #c084fc;
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.25);
          padding: 3px 10px;
          border-radius: 6px;
          margin-bottom: 12px;
        }
        .login-desc {
          font-size: 13px;
          color: rgba(226, 238, 230, 0.65);
          line-height: 1.5;
          margin: 0;
        }
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .login-field {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .login-field label {
          font-size: 11.5px;
          font-weight: 600;
          text-transform: uppercase;
          font-family: 'DM Mono', monospace;
          color: rgba(226, 238, 230, 0.65);
          letter-spacing: 0.5px;
        }
        .input-with-icon {
          position: relative;
          display: flex;
          align-items: center;
        }
        .field-icon {
          position: absolute;
          left: 14px;
          color: rgba(226, 238, 230, 0.4);
          pointer-events: none;
        }
        .input-with-icon input {
          width: 100%;
          background: #080d0b;
          border: 1px solid rgba(192, 132, 252, 0.3);
          border-radius: 10px;
          padding: 12px 14px 12px 42px;
          color: #ffffff;
          font-size: 14.5px;
          outline: none;
          transition: all 0.2s;
        }
        .input-with-icon input:focus {
          border-color: #c084fc;
          box-shadow: 0 0 0 3px rgba(192, 132, 252, 0.18);
        }
        .login-error {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 8px;
          color: #fca5a5;
          font-size: 13px;
        }
        .btn-admin-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 14px 20px;
          background: #c084fc;
          color: #080d0b;
          border: none;
          border-radius: 10px;
          font-size: 14.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 4px;
        }
        .btn-admin-submit:hover:not(:disabled) {
          background: #d8b4fe;
          transform: translateY(-1px);
          box-shadow: 0 4px 18px rgba(192, 132, 252, 0.35);
        }
        .btn-admin-submit:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .login-foot {
          margin-top: 24px;
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          text-align: center;
        }
        .link-back-agent {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          color: rgba(226, 238, 230, 0.5);
          text-decoration: none;
          transition: color 0.2s;
        }
        .link-back-agent:hover {
          color: #c084fc;
        }
      `})]})}function Qh({children:e,title:t,subtitle:n}){const r=cu(),i=cn(),[s,a]=E.useState(null),[o,l]=E.useState(!0);E.useEffect(()=>{if(!D2()){r("/admin/login",{replace:!0});return}st.me().then(p=>{a(p),l(!1)}).catch(()=>{Xh(),r("/admin/login",{replace:!0})})},[r]);const u=async()=>{await st.logout(),r("/admin/login")};if(o)return c.jsxs("div",{className:"admin-loading-screen",children:[c.jsx("div",{className:"admin-spinner"}),c.jsx("span",{children:"Authenticating administrator session..."}),c.jsx("style",{children:`
          .admin-loading-screen {
            height: 100vh;
            background: #080d0b;
            color: #e2eee6;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 16px;
            font-family: 'Manrope', sans-serif;
          }
          .admin-spinner {
            width: 36px;
            height: 36px;
            border: 3px solid rgba(192, 132, 252, 0.2);
            border-top-color: #c084fc;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `})]});const d=[{label:"Overview",path:"/admin/dashboard",icon:YT},{label:"Email Access & Analytics",path:"/admin/emails",icon:o1},{label:"Feedback Management",path:"/admin/feedback",icon:Zb}];return c.jsxs("div",{className:"admin-container theme-violet",children:[c.jsxs("header",{className:"admin-topbar",children:[c.jsxs("div",{className:"topbar-left",children:[c.jsxs("div",{className:"admin-brand",children:[c.jsx("div",{className:"brand-badge-icon",children:c.jsx(r1,{size:18})}),c.jsxs("div",{children:[c.jsxs("div",{className:"admin-title",children:["ELIZA",c.jsx("span",{children:"AI"})," ",c.jsx("span",{className:"tag-admin",children:"ADMIN"})]}),c.jsx("div",{className:"admin-subtitle",children:"ACCESS CONTROL & ANALYTICS"})]})]}),c.jsx("nav",{className:"admin-nav-tabs",children:d.map(f=>{const p=f.icon,h=i.pathname===f.path;return c.jsxs(ya,{to:f.path,className:`nav-tab-link ${h?"active":""}`,children:[c.jsx(p,{size:16}),c.jsx("span",{children:f.label})]},f.path)})})]}),c.jsxs("div",{className:"topbar-right",children:[c.jsxs(ya,{to:"/",className:"btn-back-to-app",title:"Open Voice Agent Interface",children:[c.jsx(Np,{size:14}),c.jsx("span",{children:"Voice Agent"})]}),c.jsxs("div",{className:"user-profile-badge",children:[c.jsx("span",{className:"dot-active"}),c.jsx("span",{className:"user-name",children:(s==null?void 0:s.username)||"Admin"})]}),c.jsxs("button",{type:"button",className:"btn-logout",onClick:u,title:"Sign out of Admin Dashboard",children:[c.jsx(XT,{size:16}),c.jsx("span",{children:"Sign Out"})]})]})]}),c.jsxs("main",{className:"admin-content-shell",children:[(t||n)&&c.jsx("div",{className:"page-header-row",children:c.jsxs("div",{children:[t&&c.jsx("h1",{className:"page-title",children:t}),n&&c.jsx("p",{className:"page-subtitle",children:n})]})}),e]}),c.jsx("style",{children:`
        .admin-container {
          height: 100vh;
          height: 100dvh;
          overflow-y: auto;
          overflow-x: hidden;
          background: #080d0b;
          color: #e2eee6;
          font-family: 'Manrope', system-ui, -apple-system, sans-serif;
          display: flex;
          flex-direction: column;
          scrollbar-width: thin;
          scrollbar-color: rgba(192, 132, 252, 0.4) #080d0b;
        }
        .admin-container::-webkit-scrollbar {
          width: 8px;
        }
        .admin-container::-webkit-scrollbar-track {
          background: #080d0b;
        }
        .admin-container::-webkit-scrollbar-thumb {
          background: rgba(192, 132, 252, 0.35);
          border-radius: 4px;
        }
        .admin-container::-webkit-scrollbar-thumb:hover {
          background: rgba(192, 132, 252, 0.6);
        }
        .admin-content-shell {
          flex: 1;
          padding: 28px 32px 140px 32px;
          max-width: 1480px;
          width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }
        .admin-topbar {
          background: #0b120e;
          border-bottom: 1px solid rgba(192, 132, 252, 0.2);
          padding: 0 28px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .topbar-left {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .admin-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .brand-badge-icon {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background: rgba(192, 132, 252, 0.15);
          border: 1px solid rgba(192, 132, 252, 0.4);
          color: #c084fc;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .admin-title {
          font-size: 16px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .admin-title span {
          color: #c084fc;
        }
        .tag-admin {
          background: #c084fc;
          color: #080d0b !important;
          font-size: 9px;
          font-weight: 800;
          padding: 2px 6px;
          border-radius: 4px;
          margin-left: 6px;
          letter-spacing: 1px;
        }
        .admin-subtitle {
          font-size: 9.5px;
          font-family: 'DM Mono', monospace;
          letter-spacing: 1px;
          color: rgba(226, 238, 230, 0.45);
        }
        .admin-nav-tabs {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav-tab-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 13.5px;
          font-weight: 600;
          color: rgba(226, 238, 230, 0.65);
          text-decoration: none;
          transition: all 0.2s;
        }
        .nav-tab-link:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
        }
        .nav-tab-link.active {
          color: #c084fc;
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.3);
        }
        .topbar-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .btn-back-to-app {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          color: rgba(226, 238, 230, 0.6);
          text-decoration: none;
          padding: 6px 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.2s;
        }
        .btn-back-to-app:hover {
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.2);
        }
        .user-profile-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 13px;
        }
        .dot-active {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #78f6a8;
          box-shadow: 0 0 8px rgba(120, 246, 168, 0.6);
        }
        .user-name {
          font-weight: 600;
          color: #e2eee6;
        }
        .btn-logout {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 8px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #fca5a5;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-logout:hover {
          background: rgba(239, 68, 68, 0.2);
          border-color: #ef4444;
          color: #ffffff;
        }
        .page-header-row {
          margin-bottom: 28px;
        }
        .page-title {
          font-size: 24px;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 6px 0;
          letter-spacing: -0.4px;
        }
        .page-subtitle {
          font-size: 14px;
          color: rgba(226, 238, 230, 0.6);
          margin: 0;
        }
        @media (max-width: 900px) {
          .admin-topbar {
            padding: 0 16px;
            height: auto;
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
            padding-bottom: 12px;
          }
          .topbar-left {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .admin-nav-tabs {
            overflow-x: auto;
            width: 100%;
          }
          .admin-content-shell {
            padding: 20px 16px;
          }
        }
      `})]})}const Rz=[{id:"today",label:"Today"},{id:"yesterday",label:"Yesterday"},{id:"last7days",label:"Last 7 Days"},{id:"last30days",label:"Last 30 Days"},{id:"thismonth",label:"This Month"},{id:"custom",label:"Custom Range"}];function jz(){const[e,t]=E.useState("last30days"),[n,r]=E.useState(""),[i,s]=E.useState(""),[a,o]=E.useState(null),[l,u]=E.useState(!0),[d,f]=E.useState(""),p=async(b=e,g=n,m=i)=>{u(!0),f("");try{const y=await st.getOverview(b,b==="custom"?g:null,b==="custom"?m:null);o(y)}catch(y){f(y.message||"Failed to load dashboard overview.")}finally{u(!1)}};E.useEffect(()=>{p(e,n,i)},[e]);const h=b=>{b.preventDefault(),n&&i&&p("custom",n,i)},x=(a==null?void 0:a.metrics)||{},v=(a==null?void 0:a.charts)||{};return c.jsxs(Qh,{title:"System Overview & Analytics",subtitle:"Real-time access metrics, visitor sessions, and question usage from live database records.",children:[c.jsxs("div",{className:"filter-bar",children:[c.jsx("div",{className:"filter-presets",children:Rz.map(b=>c.jsx("button",{type:"button",className:`preset-btn ${e===b.id?"active":""}`,onClick:()=>t(b.id),children:b.label},b.id))}),e==="custom"&&c.jsxs("form",{onSubmit:h,className:"custom-range-form",children:[c.jsx("input",{type:"date",value:n,onChange:b=>r(b.target.value),className:"date-input","aria-label":"Start date"}),c.jsx("span",{className:"date-sep",children:"to"}),c.jsx("input",{type:"date",value:i,onChange:b=>s(b.target.value),className:"date-input","aria-label":"End date"}),c.jsx("button",{type:"submit",className:"btn-apply-date",children:"Apply"})]}),c.jsxs("button",{type:"button",className:"btn-refresh",onClick:()=>p(),disabled:l,title:"Refresh statistics",children:[c.jsx(Mp,{size:14,className:l?"spin":""}),c.jsx("span",{children:"Refresh"})]})]}),d&&c.jsxs("div",{className:"dash-error-banner",children:[c.jsx("span",{children:d}),c.jsx("button",{onClick:()=>p(),children:"Retry"})]}),c.jsxs("div",{className:"metrics-grid",children:[c.jsx(Tn,{title:"Total Unique Email IDs",value:x.total_emails??0,icon:o1,color:"violet"}),c.jsx(Tn,{title:"New Email IDs Today",value:x.new_emails_today??0,icon:s_,color:"emerald"}),c.jsx(Tn,{title:"Unique Visitors Today",value:x.unique_visitors_today??0,icon:Lp,color:"cyan",hint:"Distinct customer IDs seen today"}),c.jsx(Tn,{title:"Total Access Sessions Today",value:x.total_sessions_today??0,icon:Pp,color:"amber",hint:"Total daily visit records today"}),c.jsx(Tn,{title:"Total Accepted Questions Today",value:x.total_questions_today??0,icon:jp,color:"violet",hint:"Deducted and processed today"}),c.jsx(Tn,{title:"Currently Blocked Email IDs",value:x.currently_blocked??0,icon:n1,color:"crimson",hint:"3/3 questions used in active cycle"}),c.jsx(Tn,{title:"Email IDs Eligible for Access",value:x.eligible_emails??0,icon:qT,color:"emerald",hint:"Active with queries remaining"}),c.jsx(Tn,{title:"Total Feedback Submissions",value:x.total_feedback??0,icon:Zb,color:"cyan"}),c.jsx(Tn,{title:"Average Feedback Rating",value:`${x.average_rating??0} / 5`,icon:xr,color:"solar",stars:x.average_rating??0})]}),c.jsxs("div",{className:"charts-grid",children:[c.jsxs("div",{className:"chart-card",children:[c.jsxs("div",{className:"chart-header",children:[c.jsx("h3",{children:"Daily Unique Visitors"}),c.jsx("span",{className:"chart-badge",children:"DISTINCT DAILY CUSTOMERS"})]}),c.jsx($c,{data:v.daily_visitors||[],color:"#c084fc",emptyText:"No visitor activity in selected date range."})]}),c.jsxs("div",{className:"chart-card",children:[c.jsxs("div",{className:"chart-header",children:[c.jsx("h3",{children:"Daily New Email Registrations"}),c.jsx("span",{className:"chart-badge",children:"NEW CUSTOMERS ONBOARDED"})]}),c.jsx($c,{data:v.daily_registrations||[],color:"#78f6a8",emptyText:"No registrations in selected date range."})]}),c.jsxs("div",{className:"chart-card",children:[c.jsxs("div",{className:"chart-header",children:[c.jsx("h3",{children:"Daily Question Usage"}),c.jsx("span",{className:"chart-badge",children:"ACCEPTED AI QUERIES"})]}),c.jsx($c,{data:v.daily_questions||[],color:"#7cecff",emptyText:"No question activity in selected date range."})]}),c.jsxs("div",{className:"chart-card-dual",children:[c.jsxs("div",{className:"chart-half",children:[c.jsxs("div",{className:"chart-header",children:[c.jsx("h3",{children:"Feedback Rating Distribution"}),c.jsx("span",{className:"chart-badge",children:"1 TO 5 STARS"})]}),c.jsx(Dz,{distribution:v.rating_distribution||{}})]}),c.jsxs("div",{className:"chart-half",children:[c.jsxs("div",{className:"chart-header",children:[c.jsx("h3",{children:"Device Distribution"}),c.jsx("span",{className:"chart-badge",children:"VISIT PLATFORMS"})]}),c.jsx(Lz,{devices:v.device_distribution||{}})]})]})]}),c.jsx("style",{children:`
        .filter-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 24px;
          background: #0b120e;
          border: 1px solid rgba(192, 132, 252, 0.2);
          border-radius: 12px;
          padding: 10px 14px;
        }
        .filter-presets {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }
        .preset-btn {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(226, 238, 230, 0.75);
          font-size: 12.5px;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .preset-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
        }
        .preset-btn.active {
          background: rgba(192, 132, 252, 0.16);
          border-color: #c084fc;
          color: #c084fc;
        }
        .custom-range-form {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .date-input {
          background: #080d0b;
          border: 1px solid rgba(192, 132, 252, 0.3);
          border-radius: 6px;
          padding: 5px 10px;
          font-size: 12px;
          color: #ffffff;
          outline: none;
        }
        .date-sep {
          font-size: 12px;
          color: rgba(226, 238, 230, 0.5);
        }
        .btn-apply-date {
          background: #c084fc;
          color: #080d0b;
          font-weight: 700;
          border: none;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
        }
        .btn-refresh {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(226, 238, 230, 0.7);
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 12.5px;
          cursor: pointer;
        }
        .btn-refresh:hover:not(:disabled) {
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.2);
        }
        .spin {
          animation: spin 1s linear infinite;
        }
        .dash-error-banner {
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 10px;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #fca5a5;
          font-size: 13.5px;
          margin-bottom: 20px;
        }
        .dash-error-banner button {
          background: #ef4444;
          color: #ffffff;
          border: none;
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
        }
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
          margin-bottom: 28px;
        }
        .metric-card {
          background: #0b120e;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 14px;
          padding: 20px 22px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          transition: transform 0.2s, border-color 0.2s;
        }
        .metric-card:hover {
          transform: translateY(-2px);
          border-color: rgba(192, 132, 252, 0.35);
        }
        .metric-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .metric-title {
          font-size: 12px;
          font-weight: 600;
          color: rgba(226, 238, 230, 0.6);
          font-family: 'DM Mono', monospace;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .metric-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .color-violet .metric-icon-wrap { background: rgba(192, 132, 252, 0.15); color: #c084fc; }
        .color-emerald .metric-icon-wrap { background: rgba(52, 211, 153, 0.15); color: #34d399; }
        .color-cyan .metric-icon-wrap { background: rgba(124, 236, 255, 0.15); color: #7cecff; }
        .color-amber .metric-icon-wrap { background: rgba(255, 193, 107, 0.15); color: #ffc16b; }
        .color-crimson .metric-icon-wrap { background: rgba(255, 107, 107, 0.15); color: #ff6b6b; }
        .color-solar .metric-icon-wrap { background: rgba(253, 224, 71, 0.15); color: #fde047; }
        .metric-val {
          font-size: 26px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.5px;
        }
        .metric-stars {
          display: flex;
          align-items: center;
          gap: 3px;
          margin-top: 4px;
        }
        .metric-hint {
          font-size: 11px;
          color: rgba(226, 238, 230, 0.4);
          margin-top: auto;
        }
        .charts-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .chart-card {
          background: #0b120e;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 24px;
        }
        .chart-card-dual {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 900px) {
          .chart-card-dual {
            grid-template-columns: 1fr;
          }
        }
        .chart-half {
          background: #0b120e;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 24px;
        }
        .chart-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .chart-header h3 {
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }
        .chart-badge {
          font-size: 10px;
          font-family: 'DM Mono', monospace;
          color: rgba(226, 238, 230, 0.5);
          letter-spacing: 1px;
        }
        /* SVG Bar Chart Styling */
        .svg-chart-wrap {
          width: 100%;
          overflow-x: auto;
        }
        .chart-empty {
          padding: 40px 0;
          text-align: center;
          color: rgba(226, 238, 230, 0.4);
          font-size: 13.5px;
        }
        /* Rating distribution styling */
        .rating-bars-wrap {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .rating-bar-row {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 12.5px;
        }
        .star-label {
          width: 60px;
          display: flex;
          align-items: center;
          gap: 4px;
          font-family: 'DM Mono', monospace;
          color: #fbbf24;
        }
        .bar-track {
          flex: 1;
          height: 10px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 5px;
          overflow: hidden;
        }
        .bar-fill {
          height: 100%;
          background: #fbbf24;
          border-radius: 5px;
          transition: width 0.4s ease;
        }
        .bar-count {
          width: 36px;
          text-align: right;
          font-family: 'DM Mono', monospace;
          color: rgba(226, 238, 230, 0.65);
        }
        /* Device distribution styling */
        .devices-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .device-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .device-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(192, 132, 252, 0.12);
          color: #c084fc;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .device-info {
          display: flex;
          flex-direction: column;
        }
        .device-name {
          font-size: 12px;
          font-family: 'DM Mono', monospace;
          color: rgba(226, 238, 230, 0.6);
          text-transform: uppercase;
        }
        .device-val {
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
        }
      `})]})}function Tn({title:e,value:t,icon:n,color:r,hint:i,stars:s}){return c.jsxs("div",{className:`metric-card color-${r}`,children:[c.jsxs("div",{className:"metric-top",children:[c.jsx("span",{className:"metric-title",children:e}),c.jsx("div",{className:"metric-icon-wrap",children:c.jsx(n,{size:17})})]}),c.jsx("div",{className:"metric-val",children:t}),s!==void 0&&c.jsx("div",{className:"metric-stars",children:[1,2,3,4,5].map(a=>c.jsx(xr,{size:14,fill:a<=Math.round(Number(s)||0)?"#fbbf24":"transparent",color:a<=Math.round(Number(s)||0)?"#fbbf24":"rgba(255,255,255,0.2)"},a))}),i&&c.jsx("span",{className:"metric-hint",children:i})]})}function $c({data:e=[],color:t="#c084fc",emptyText:n="No data"}){if(!e||e.length===0)return c.jsx("div",{className:"chart-empty",children:n});const r=Math.max(...e.map(s=>s.count||0),1),i=160;return c.jsx("div",{className:"svg-chart-wrap",children:c.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"6px",height:`${i+40}px`,minWidth:`${e.length*32}px`,padding:"10px 0"},children:e.map((s,a)=>{const o=s.count||0,l=Math.max(4,Math.round(o/r*i)),u=s.date?s.date.slice(5):"";return c.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",height:"100%",justifyContent:"flex-end"},title:`${s.date}: ${o}`,children:[c.jsx("span",{style:{fontSize:"10px",color:o>0?"#ffffff":"rgba(255,255,255,0.3)",fontFamily:"DM Mono"},children:o>0?o:""}),c.jsx("div",{style:{width:"100%",maxWidth:"28px",height:`${l}px`,backgroundColor:o>0?t:"rgba(255, 255, 255, 0.05)",borderRadius:"4px 4px 0 0",transition:"height 0.3s ease"}}),c.jsx("span",{style:{fontSize:"10px",color:"rgba(226,238,230,0.5)",fontFamily:"DM Mono",whiteSpace:"nowrap"},children:u})]},a)})})})}function Dz({distribution:e={}}){const t=Object.values(e).reduce((r,i)=>r+i,0)||1,n=[5,4,3,2,1];return c.jsx("div",{className:"rating-bars-wrap",children:n.map(r=>{const i=e[r]||0,s=Math.round(i/t*100);return c.jsxs("div",{className:"rating-bar-row",children:[c.jsxs("span",{className:"star-label",children:[r," ",c.jsx(xr,{size:13,fill:"#fbbf24"})]}),c.jsx("div",{className:"bar-track",children:c.jsx("div",{className:"bar-fill",style:{width:`${s}%`}})}),c.jsx("span",{className:"bar-count",children:i})]},r)})})}function Lz({devices:e={}}){const t=[{key:"desktop",label:"Desktop",icon:Jb},{key:"mobile",label:"Mobile",icon:i1},{key:"tablet",label:"Tablet",icon:a1},{key:"unknown",label:"Unknown",icon:jp}];return c.jsx("div",{className:"devices-wrap",children:t.map(n=>{const r=n.icon,i=e[n.key]||0;return c.jsxs("div",{className:"device-card",children:[c.jsx("div",{className:"device-icon-box",children:c.jsx(r,{size:18})}),c.jsxs("div",{className:"device-info",children:[c.jsx("span",{className:"device-name",children:n.label}),c.jsxs("span",{className:"device-val",children:[i," visits"]})]})]},n.key)})})}function Mz(){var En,qt,L,me,ie,ye,M,H,ae,fe,P;const[e,t]=E.useState([]),[n,r]=E.useState(0),[i,s]=E.useState(1),[a,o]=E.useState(1),[l,u]=E.useState(15),[d,f]=E.useState(""),[p,h]=E.useState(""),[x,v]=E.useState(""),[b,g]=E.useState(""),[m,y]=E.useState("newest"),[S,C]=E.useState(""),[w,I]=E.useState(""),[N,j]=E.useState(!0),[T,R]=E.useState(""),[z,G]=E.useState(new Set),[q,$]=E.useState(!1),[ue,Z]=E.useState(""),[D,B]=E.useState(null),[k,K]=E.useState(null),[te,A]=E.useState(!1),ce=_=>{Z(_),setTimeout(()=>Z(""),4500)},ke=async()=>{j(!0),R("");try{const _=await st.getEmails({page:a,per_page:l,search:d.trim(),status:p,device:x,question_usage:b!==""?Number(b):void 0,sort_by:m,start_date:S||void 0,end_date:w||void 0});t(_.items||[]),r(_.total||0),s(_.total_pages||1)}catch(_){R(_.message||"Failed to load email records.")}finally{j(!1)}};E.useEffect(()=>{ke()},[a,l,p,x,b,m,S,w]);const se=_=>{_.preventDefault(),o(1),ke()},Se=()=>{f(""),h(""),v(""),g(""),y("newest"),C(""),I(""),G(new Set),o(1)},$e=_=>{_.target.checked?G(new Set(e.map(U=>U.id))):G(new Set)},Ye=(_,U)=>{U&&U.stopPropagation(),G(V=>{const X=new Set(V);return X.has(_)?X.delete(_):X.add(_),X})},pe=async(_,U)=>{var V;if(U&&U.stopPropagation(),!!window.confirm("Immediately unblock this customer and restore their 3 questions access?")){$(!0);try{const X=await st.unblockCustomer(_);ce(X.message||"User unblocked successfully!"),t(Q=>Q.map(oe=>oe.id===_?{...oe,blocked:!1,access_status:"eligible",remaining_questions:3,questions_used:0,blocked_until:null}:oe)),((V=k==null?void 0:k.customer)==null?void 0:V.id)===_&&K(Q=>({...Q,customer:{...Q.customer,status:"eligible"}}))}catch(X){alert("Failed to unblock customer: "+X.message)}finally{$(!1)}}},et=async(_,U,V)=>{if(V&&V.stopPropagation(),!!window.confirm(`Permanently delete customer ${U}? All access periods, questions, and records will be deleted.`)){$(!0);try{await st.deleteCustomer(_),ce(`Permanently deleted ${U}`),t(X=>X.filter(Q=>Q.id!==_)),r(X=>Math.max(0,X-1)),G(X=>{const Q=new Set(X);return Q.delete(_),Q}),D===_&&Gt()}catch(X){alert("Failed to delete customer: "+X.message)}finally{$(!1)}}},St=async()=>{if(z.size!==0&&window.confirm(`Permanently delete ${z.size} selected customer records? This action cannot be undone.`)){$(!0);try{const _=Array.from(z),U=await st.bulkDeleteCustomers(_);ce(U.message||`Deleted ${_.length} customers`);const V=new Set(_);t(X=>X.filter(Q=>!V.has(Q.id))),r(X=>Math.max(0,X-V.size)),G(new Set),D&&V.has(D)&&Gt()}catch(_){alert("Failed to delete records: "+_.message)}finally{$(!1)}}},Ge=async _=>{B(_),A(!0);try{const U=await st.getCustomerDetail(_);K(U)}catch(U){alert("Failed to load customer profile: "+U.message)}finally{A(!1)}},Gt=()=>{B(null),K(null)},Nr=async()=>{try{const U=(await st.getEmails({page:1,per_page:2e3,search:d.trim(),status:p,device:x,question_usage:b!==""?Number(b):void 0,sort_by:m,start_date:S||void 0,end_date:w||void 0})).items||e;if(!U.length){alert("No records to export.");return}const X=[["Email","Status","Questions Used","Remaining Questions","First Seen","First Question","Last Active","Visits Count","Device Category","Blocked Until","Period Expires At"].join(","),...U.map(Ue=>[`"${(Ue.email||"").replace(/"/g,'""')}"`,`"${Ue.access_status||(Ue.blocked?"blocked":"active")}"`,Ue.questions_used??0,Ue.remaining_questions??0,`"${Ue.first_seen_at||""}"`,`"${Ue.first_question_at||""}"`,`"${Ue.last_activity_at||""}"`,Ue.visits_count??1,`"${Ue.device_category||"unknown"}"`,`"${Ue.blocked_until||""}"`,`"${Ue.current_period_expires_at||""}"`].join(","))].join(`
`),Q=new Blob([X],{type:"text/csv;charset=utf-8;"}),oe=URL.createObjectURL(Q),ze=document.createElement("a");ze.href=oe,ze.setAttribute("download",`eliza-users-export-${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(ze),ze.click(),document.body.removeChild(ze),URL.revokeObjectURL(oe)}catch(_){alert("Failed to export data: "+_.message)}},De=_=>{if(!_)return"—";try{return new Date(_).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return _}};return c.jsxs(Qh,{title:"Email IDs & Access Analytics",subtitle:"Searchable and sortable registry of all customer accounts, active restriction windows, and usage balances.",children:[ue&&c.jsxs("div",{className:"admin-toast-banner",children:[c.jsx(xa,{size:16}),c.jsx("span",{children:ue})]}),c.jsxs("div",{className:"emails-toolbar",children:[c.jsxs("form",{onSubmit:se,className:"search-box",children:[c.jsx(e1,{size:16,className:"search-icon"}),c.jsx("input",{type:"text",value:d,onChange:_=>f(_.target.value),placeholder:"Search by customer email address..."}),d&&c.jsx("button",{type:"button",className:"btn-clear-input",onClick:()=>{f(""),o(1)},children:c.jsx(It,{size:14})})]}),c.jsxs("div",{className:"filter-selects",children:[c.jsxs("div",{className:"calendar-date-group",children:[c.jsx(Pp,{size:14,className:"cal-icon"}),c.jsxs("div",{className:"date-field",children:[c.jsx("span",{className:"date-label",children:"From"}),c.jsx("input",{type:"date",value:S,onChange:_=>{C(_.target.value),o(1)},className:"filter-date-input"})]}),c.jsx("span",{className:"date-sep",children:"→"}),c.jsxs("div",{className:"date-field",children:[c.jsx("span",{className:"date-label",children:"To"}),c.jsx("input",{type:"date",value:w,onChange:_=>{I(_.target.value),o(1)},className:"filter-date-input"})]}),(S||w)&&c.jsx("button",{type:"button",className:"btn-clear-date",onClick:()=>{C(""),I(""),o(1)},title:"Clear date range",children:c.jsx(It,{size:13})})]}),c.jsxs("select",{value:p,onChange:_=>{h(_.target.value),o(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"All Statuses"}),c.jsx("option",{value:"eligible",children:"Eligible"}),c.jsx("option",{value:"blocked",children:"Blocked"}),c.jsx("option",{value:"active",children:"Active"}),c.jsx("option",{value:"expired",children:"Expired"})]}),c.jsxs("select",{value:b,onChange:_=>{g(_.target.value),o(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"Any Usage"}),c.jsx("option",{value:"0",children:"0 Questions (0/3)"}),c.jsx("option",{value:"1",children:"1 Question (1/3)"}),c.jsx("option",{value:"2",children:"2 Questions (2/3)"}),c.jsx("option",{value:"3",children:"3 Questions (3/3)"})]}),c.jsxs("select",{value:x,onChange:_=>{v(_.target.value),o(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"All Devices"}),c.jsx("option",{value:"desktop",children:"Desktop"}),c.jsx("option",{value:"mobile",children:"Mobile"}),c.jsx("option",{value:"tablet",children:"Tablet"})]}),c.jsxs("select",{value:m,onChange:_=>{y(_.target.value),o(1)},className:"filter-select",children:[c.jsx("option",{value:"newest",children:"Sort: Newest"}),c.jsx("option",{value:"oldest",children:"Sort: Oldest"}),c.jsx("option",{value:"most_active",children:"Sort: Most Active"})]}),c.jsx("button",{type:"button",className:"btn-action-refresh",onClick:ke,title:"Refresh records",children:c.jsx(Mp,{size:14,className:N?"spin":""})}),c.jsxs("button",{type:"button",className:"btn-action-export",onClick:Nr,title:"Download all customer records as CSV",children:[c.jsx(Yb,{size:14}),c.jsx("span",{children:"Export CSV"})]}),(d||p||x||b||m!=="newest"||S||w)&&c.jsx("button",{type:"button",className:"btn-clear-all",onClick:Se,children:"Clear Filters"})]})]}),z.size>0&&c.jsxs("div",{className:"bulk-actions-card",children:[c.jsxs("div",{className:"bulk-info",children:[c.jsx(s1,{size:17,className:"bulk-icon"}),c.jsxs("span",{children:[c.jsx("b",{children:z.size})," customer(s) selected"]})]}),c.jsxs("div",{className:"bulk-btns",children:[c.jsxs("button",{type:"button",className:"btn-bulk-delete",onClick:St,disabled:q,children:[c.jsx(Oi,{size:14}),c.jsxs("span",{children:["Delete Selected (",z.size,")"]})]}),c.jsx("button",{type:"button",className:"btn-bulk-cancel",onClick:()=>G(new Set),children:"Cancel Selection"})]})]}),T&&c.jsxs("div",{className:"table-error-banner",children:[c.jsx("span",{children:T}),c.jsx("button",{onClick:ke,children:"Retry"})]}),c.jsxs("div",{className:"table-card",children:[c.jsx("div",{className:"table-responsive",children:c.jsxs("table",{className:"admin-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{style:{width:42,textAlign:"center"},children:c.jsx("input",{type:"checkbox",className:"row-checkbox",checked:e.length>0&&e.every(_=>z.has(_.id)),onChange:$e,title:"Select all on this page"})}),c.jsx("th",{children:"Email Address"}),c.jsx("th",{children:"Status"}),c.jsx("th",{children:"Usage"}),c.jsx("th",{children:"Left"}),c.jsx("th",{children:"First Seen"}),c.jsx("th",{children:"First Question"}),c.jsx("th",{children:"Last Active"}),c.jsx("th",{children:"Visits"}),c.jsx("th",{children:"Device"}),c.jsx("th",{children:"Blocked Until"}),c.jsx("th",{children:"Cycle Expiry"}),c.jsx("th",{className:"text-right",children:"Actions"})]})}),c.jsx("tbody",{children:N?c.jsx("tr",{children:c.jsxs("td",{colSpan:"13",className:"table-loading-cell",children:[c.jsx("span",{className:"table-spinner"})," Loading records..."]})}):e.length===0?c.jsx("tr",{children:c.jsx("td",{colSpan:"13",className:"table-empty-cell",children:"No matching customer emails found."})}):e.map(_=>{const U=_.blocked||_.remaining_questions!==void 0&&_.remaining_questions<=0||_.access_status==="blocked",V=z.has(_.id);return c.jsxs("tr",{className:`table-row-clickable ${V?"row-selected":""}`,onClick:()=>Ge(_.id),children:[c.jsx("td",{style:{textAlign:"center"},onClick:X=>X.stopPropagation(),children:c.jsx("input",{type:"checkbox",className:"row-checkbox",checked:V,onChange:X=>Ye(_.id,X)})}),c.jsx("td",{className:"font-semibold text-white",children:c.jsx("span",{className:"email-cell",children:_.email})}),c.jsx("td",{children:c.jsx(Oz,{status:_.access_status,blocked:_.blocked})}),c.jsx("td",{children:c.jsxs("span",{className:"usage-pill",children:[_.questions_used,"/3"]})}),c.jsx("td",{children:c.jsx("span",{className:"font-mono text-purple-200",children:_.remaining_questions})}),c.jsx("td",{className:"text-muted",children:De(_.first_seen_at)}),c.jsx("td",{className:"text-muted",children:De(_.first_question_at)}),c.jsx("td",{className:"text-muted",children:De(_.last_activity_at)}),c.jsx("td",{children:c.jsx("span",{className:"font-mono",children:_.visits_count})}),c.jsx("td",{children:c.jsx(Fz,{device:_.device_category})}),c.jsx("td",{children:_.blocked_until?c.jsx("span",{className:"blocked-date-tag",children:De(_.blocked_until)}):c.jsx("span",{className:"text-muted",children:"—"})}),c.jsx("td",{className:"text-muted",children:De(_.current_period_expires_at)}),c.jsx("td",{className:"text-right",onClick:X=>X.stopPropagation(),children:c.jsxs("div",{className:"row-actions-group",children:[U&&c.jsxs("button",{type:"button",className:"btn-action-unblock",onClick:X=>pe(_.id,X),disabled:q,title:"Unblock customer & restore 3 questions",children:[c.jsx(zd,{size:13}),c.jsx("span",{children:"Unblock"})]}),c.jsxs("button",{type:"button",className:"btn-view-detail",onClick:()=>Ge(_.id),title:"View Customer Profile",children:[c.jsx(Lp,{size:13}),c.jsx("span",{children:"Details"})]}),c.jsx("button",{type:"button",className:"btn-action-delete",onClick:X=>et(_.id,_.email,X),disabled:q,title:"Permanently delete customer",children:c.jsx(Oi,{size:13})})]})})]},_.id)})})]})}),c.jsxs("div",{className:"pagination-bar",children:[c.jsxs("div",{className:"pagination-info",children:["Showing ",c.jsx("b",{children:e.length})," of ",c.jsx("b",{children:n})," total emails (Page ",a," of ",i,")"]}),c.jsxs("div",{className:"pagination-controls",children:[c.jsxs("label",{className:"page-size-label",children:[c.jsx("span",{children:"Per page:"}),c.jsxs("select",{value:l,onChange:_=>{u(Number(_.target.value)),o(1)},children:[c.jsx("option",{value:"15",children:"15"}),c.jsx("option",{value:"30",children:"30"}),c.jsx("option",{value:"50",children:"50"})]})]}),c.jsx("button",{type:"button",className:"btn-page",disabled:a<=1,onClick:()=>o(_=>Math.max(1,_-1)),title:"Previous page",children:c.jsx(Gb,{size:16})}),c.jsxs("span",{className:"current-page-num",children:[a," / ",i]}),c.jsx("button",{type:"button",className:"btn-page",disabled:a>=i,onClick:()=>o(_=>Math.min(i,_+1)),title:"Next page",children:c.jsx(qb,{size:16})})]})]})]}),D&&c.jsx("div",{className:"detail-modal-overlay",onClick:Gt,children:c.jsxs("div",{className:"detail-modal-card",onClick:_=>_.stopPropagation(),children:[c.jsxs("div",{className:"detail-modal-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"detail-eyebrow",children:"CUSTOMER PROFILE & AUDIT"}),c.jsx("h3",{children:((En=k==null?void 0:k.customer)==null?void 0:En.email)||"Loading..."})]}),c.jsxs("div",{className:"head-actions",children:[(k==null?void 0:k.customer)&&c.jsxs(c.Fragment,{children:[c.jsxs("button",{type:"button",className:"btn-drawer-unblock",onClick:_=>pe(k.customer.id,_),title:"Unblock user and restore 3 questions",children:[c.jsx(zd,{size:14})," Unblock"]}),c.jsxs("button",{type:"button",className:"btn-drawer-delete",onClick:_=>et(k.customer.id,k.customer.email,_),title:"Delete customer record",children:[c.jsx(Oi,{size:14})," Delete"]})]}),c.jsx("button",{type:"button",className:"btn-modal-close",onClick:Gt,children:c.jsx(It,{size:18})})]})]}),te?c.jsxs("div",{className:"detail-loading",children:[c.jsx("span",{className:"table-spinner"})," Loading full customer profile..."]}):k?c.jsxs("div",{className:"detail-modal-body",children:[c.jsxs("div",{className:"profile-summary-box",children:[c.jsxs("div",{className:"summary-item",children:[c.jsx("span",{children:"First Seen"}),c.jsx("b",{children:De((qt=k.customer)==null?void 0:qt.first_seen_at)})]}),c.jsxs("div",{className:"summary-item",children:[c.jsx("span",{children:"Last Active"}),c.jsx("b",{children:De((L=k.customer)==null?void 0:L.last_activity_at)})]}),c.jsxs("div",{className:"summary-item",children:[c.jsx("span",{children:"Primary Device"}),c.jsx("b",{children:((me=k.customer)==null?void 0:me.device_type)||"unknown"})]}),c.jsxs("div",{className:"summary-item",children:[c.jsx("span",{children:"Account Status"}),c.jsx("b",{children:c.jsx("span",{className:"status-highlight",children:(ie=k.customer)==null?void 0:ie.status})})]})]}),c.jsxs("div",{className:"detail-section",children:[c.jsxs("h4",{children:["Access Cycles & Quotas (",((ye=k.periods)==null?void 0:ye.length)||0,")"]}),c.jsx("div",{className:"periods-list",children:(M=k.periods)==null?void 0:M.map(_=>c.jsxs("div",{className:"period-card",children:[c.jsxs("div",{className:"period-card-top",children:[c.jsx("span",{className:`period-status status-${_.status}`,children:_.status}),c.jsxs("span",{className:"period-q-count",children:["Questions: ",c.jsxs("b",{children:[_.questions_used,"/3"]})]})]}),c.jsxs("div",{className:"period-grid",children:[c.jsxs("div",{children:[c.jsx("span",{children:"Period Start"}),c.jsx("b",{children:De(_.period_started_at)})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Expires At"}),c.jsx("b",{children:De(_.period_expires_at)})]}),c.jsxs("div",{children:[c.jsx("span",{children:"First Question"}),c.jsx("b",{children:De(_.first_question_at)})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Blocked Until"}),c.jsx("b",{children:De(_.blocked_until)})]})]})]},_.id))})]}),c.jsxs("div",{className:"detail-section",children:[c.jsxs("h4",{children:["Question Usage Log (",((H=k.questions)==null?void 0:H.length)||0,")"]}),((ae=k.questions)==null?void 0:ae.length)===0?c.jsx("p",{className:"section-empty",children:"No questions submitted yet."}):c.jsx("div",{className:"log-table-wrap",children:c.jsxs("table",{className:"log-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Time"}),c.jsx("th",{children:"Status"}),c.jsx("th",{children:"Device"})]})}),c.jsx("tbody",{children:k.questions.map(_=>c.jsxs("tr",{children:[c.jsx("td",{children:De(_.created_at)}),c.jsx("td",{children:c.jsx("span",{className:"log-badge-status",children:_.status})}),c.jsx("td",{children:_.device_type||"unknown"})]},_.id))})]})})]}),c.jsxs("div",{className:"detail-section",children:[c.jsxs("h4",{children:["Feedback Submissions (",((fe=k.feedbacks)==null?void 0:fe.length)||0,")"]}),((P=k.feedbacks)==null?void 0:P.length)===0?c.jsx("p",{className:"section-empty",children:"No feedback submitted by this customer."}):c.jsx("div",{className:"feedback-cards-list",children:k.feedbacks.map(_=>c.jsxs("div",{className:"feedback-mini-card",children:[c.jsxs("div",{className:"fb-mini-top",children:[c.jsx("div",{className:"fb-stars",children:[...Array(_.rating)].map((U,V)=>c.jsx(xr,{size:14,fill:"#fbbf24",color:"#fbbf24"},V))}),c.jsx("span",{className:"fb-cat-tag",children:_.category}),c.jsx("span",{className:"fb-date",children:De(_.created_at)})]}),c.jsx("p",{className:"fb-mini-msg",children:_.message})]},_.id))})]})]}):null]})}),c.jsx("style",{children:`
        .admin-toast-banner {
          position: sticky;
          top: 10px;
          z-index: 100;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #064e3b;
          border: 1px solid #10b981;
          color: #a7f3d0;
          padding: 10px 18px;
          border-radius: 10px;
          margin-bottom: 18px;
          font-size: 13.5px;
          font-weight: 600;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          animation: slideDown 0.25s ease-out;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .emails-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 20px;
        }
        .search-box {
          position: relative;
          display: flex;
          align-items: center;
          flex: 1;
          min-width: 280px;
          max-width: 420px;
        }
        .search-icon {
          position: absolute;
          left: 14px;
          color: rgba(226, 238, 230, 0.4);
          pointer-events: none;
        }
        .search-box input {
          width: 100%;
          background: #0b120e;
          border: 1px solid rgba(192, 132, 252, 0.3);
          border-radius: 10px;
          padding: 10px 36px 10px 40px;
          font-size: 13.5px;
          color: #ffffff;
          outline: none;
        }
        .search-box input:focus {
          border-color: #c084fc;
        }
        .btn-clear-input {
          position: absolute;
          right: 12px;
          background: none;
          border: none;
          color: rgba(226, 238, 230, 0.5);
          cursor: pointer;
        }
        .filter-selects {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .calendar-date-group {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #0b120e;
          border: 1px solid rgba(192, 132, 252, 0.3);
          border-radius: 9px;
          padding: 5px 10px;
        }
        .cal-icon {
          color: #c084fc;
        }
        .date-field {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .date-label {
          font-size: 10.5px;
          font-family: 'DM Mono', monospace;
          color: rgba(226, 238, 230, 0.5);
          text-transform: uppercase;
        }
        .filter-date-input {
          background: #080d0b;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 6px;
          color: #ffffff;
          padding: 4px 6px;
          font-size: 11.5px;
          outline: none;
        }
        .filter-date-input::-webkit-calendar-picker-indicator {
          filter: invert(1);
          cursor: pointer;
        }
        .date-sep {
          color: rgba(226, 238, 230, 0.4);
          font-size: 12px;
        }
        .btn-clear-date {
          background: none;
          border: none;
          color: rgba(226, 238, 230, 0.6);
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 2px;
        }
        .btn-clear-date:hover {
          color: #fca5a5;
        }
        .filter-select {
          background: #0b120e;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 12.5px;
          color: #e2eee6;
          outline: none;
          cursor: pointer;
        }
        .filter-select option {
          background: #0b120e;
          color: #ffffff;
        }
        .btn-action-refresh {
          background: #0b120e;
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(226, 238, 230, 0.7);
          padding: 8px 12px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: all 0.2s;
        }
        .btn-action-refresh:hover {
          color: #ffffff;
          border-color: rgba(192, 132, 252, 0.4);
          background: rgba(192, 132, 252, 0.08);
        }
        .btn-action-export {
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.35);
          color: #d8b4fe;
          padding: 8px 14px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          font-weight: 700;
          transition: all 0.2s;
        }
        .btn-action-export:hover {
          background: #c084fc;
          border-color: #c084fc;
          color: #080d0b;
        }
        .btn-clear-all {
          background: none;
          border: none;
          color: #c084fc;
          font-size: 12px;
          cursor: pointer;
          text-decoration: underline;
        }
        /* Bulk Actions Card */
        .bulk-actions-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          background: rgba(192, 132, 252, 0.1);
          border: 1px solid rgba(192, 132, 252, 0.4);
          border-radius: 12px;
          margin-bottom: 16px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        }
        .bulk-info {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13.5px;
          color: #ffffff;
        }
        .bulk-icon {
          color: #c084fc;
        }
        .bulk-btns {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .btn-bulk-delete {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #dc2626;
          border: 1px solid #ef4444;
          color: #ffffff;
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 12.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-bulk-delete:hover:not(:disabled) {
          background: #b91c1c;
        }
        .btn-bulk-cancel {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: rgba(226, 238, 230, 0.8);
          padding: 7px 12px;
          border-radius: 8px;
          font-size: 12px;
          cursor: pointer;
        }
        .row-checkbox {
          width: 16px;
          height: 16px;
          accent-color: #c084fc;
          cursor: pointer;
        }
        .table-card {
          background: #0b120e;
          border: 1px solid rgba(192, 132, 252, 0.18);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          margin-bottom: 40px;
        }
        .table-responsive {
          width: 100%;
          overflow-x: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(192, 132, 252, 0.35) #0b120e;
        }
        .table-responsive::-webkit-scrollbar {
          height: 8px;
        }
        .table-responsive::-webkit-scrollbar-track {
          background: #0b120e;
        }
        .table-responsive::-webkit-scrollbar-thumb {
          background: rgba(192, 132, 252, 0.35);
          border-radius: 4px;
        }
        .admin-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 13px;
        }
        .admin-table thead th {
          position: sticky;
          top: 0;
          background: #0e1612;
          z-index: 5;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 14px 14px;
          font-size: 11px;
          font-family: 'DM Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: rgba(226, 238, 230, 0.7);
          white-space: nowrap;
        }
        .admin-table td {
          padding: 13px 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          white-space: nowrap;
        }
        .table-row-clickable {
          cursor: pointer;
          transition: background 0.15s;
        }
        .table-row-clickable:hover {
          background: rgba(192, 132, 252, 0.05);
        }
        .row-selected {
          background: rgba(192, 132, 252, 0.08) !important;
        }
        .email-cell {
          font-weight: 600;
          color: #ffffff;
        }
        .text-muted {
          color: rgba(226, 238, 230, 0.55);
        }
        .font-mono {
          font-family: 'DM Mono', monospace;
        }
        .usage-pill {
          display: inline-block;
          font-family: 'DM Mono', monospace;
          font-size: 11.5px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #ffffff;
        }
        .blocked-date-tag {
          font-family: 'DM Mono', monospace;
          color: #fca5a5;
          font-size: 11.5px;
        }
        .row-actions-group {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .btn-action-unblock {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.5);
          color: #6ee7b7;
          padding: 5px 10px;
          border-radius: 6px;
          font-size: 11.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-action-unblock:hover {
          background: #10b981;
          color: #080d0b;
        }
        .btn-view-detail {
          background: rgba(192, 132, 252, 0.1);
          border: 1px solid rgba(192, 132, 252, 0.35);
          color: #d8b4fe;
          padding: 5px 10px;
          border-radius: 6px;
          font-size: 11.5px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: all 0.2s;
        }
        .btn-view-detail:hover {
          background: rgba(192, 132, 252, 0.25);
          color: #ffffff;
        }
        .btn-action-delete {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #fca5a5;
          padding: 5px 8px;
          border-radius: 6px;
          font-size: 11.5px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          transition: all 0.2s;
        }
        .btn-action-delete:hover {
          background: #ef4444;
          color: #ffffff;
        }
        .table-loading-cell, .table-empty-cell {
          text-align: center;
          padding: 48px 0;
          color: rgba(226, 238, 230, 0.5);
        }
        .table-spinner {
          width: 14px;
          height: 14px;
          border: 2px solid rgba(192, 132, 252, 0.3);
          border-top-color: #c084fc;
          border-radius: 50%;
          display: inline-block;
          animation: spin 0.8s linear infinite;
          vertical-align: middle;
          margin-right: 6px;
        }
        .pagination-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 12.5px;
        }
        .pagination-info b {
          color: #ffffff;
        }
        .pagination-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .page-size-label {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(226, 238, 230, 0.6);
        }
        .page-size-label select {
          background: #080d0b;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 6px;
          color: #ffffff;
          padding: 3px 6px;
          font-size: 12px;
        }
        .btn-page {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #e2eee6;
          padding: 5px 8px;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        .btn-page:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .current-page-num {
          font-family: 'DM Mono', monospace;
          color: #c084fc;
          font-weight: 700;
        }
        /* Detail Drawer Modal */
        .detail-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(8, 13, 11, 0.85);
          backdrop-filter: blur(12px);
          display: flex;
          justify-content: flex-end;
          z-index: 1000;
        }
        .detail-modal-card {
          width: 100%;
          max-width: 640px;
          background: #0b120e;
          border-left: 1px solid rgba(192, 132, 252, 0.3);
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          box-shadow: -10px 0 40px rgba(0, 0, 0, 0.7);
        }
        .detail-modal-head {
          padding: 22px 28px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.02);
          position: sticky;
          top: 0;
          z-index: 10;
        }
        .head-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .btn-drawer-unblock {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.5);
          color: #6ee7b7;
          padding: 6px 12px;
          border-radius: 7px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }
        .btn-drawer-unblock:hover {
          background: #10b981;
          color: #080d0b;
        }
        .btn-drawer-delete {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #fca5a5;
          padding: 6px 12px;
          border-radius: 7px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }
        .btn-drawer-delete:hover {
          background: #ef4444;
          color: #ffffff;
        }
        .detail-eyebrow {
          font-size: 10px;
          font-family: 'DM Mono', monospace;
          letter-spacing: 1px;
          color: #c084fc;
        }
        .detail-modal-head h3 {
          font-size: 17px;
          font-weight: 700;
          color: #ffffff;
          margin: 4px 0 0 0;
        }
        .btn-modal-close {
          background: none;
          border: none;
          color: rgba(226, 238, 230, 0.6);
          cursor: pointer;
          padding: 4px;
        }
        .detail-modal-body {
          padding: 24px 28px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .profile-summary-box {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 12px;
          padding: 16px;
        }
        .summary-item span {
          display: block;
          font-size: 11px;
          font-family: 'DM Mono', monospace;
          color: rgba(226, 238, 230, 0.5);
          text-transform: uppercase;
        }
        .summary-item b {
          font-size: 13.5px;
          color: #ffffff;
        }
        .status-highlight {
          color: #c084fc;
          text-transform: uppercase;
        }
        .detail-section h4 {
          font-size: 13px;
          font-family: 'DM Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: rgba(226, 238, 230, 0.7);
          margin: 0 0 12px 0;
        }
        .periods-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .period-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          padding: 14px;
        }
        .period-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .period-status {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          padding: 2px 6px;
          border-radius: 4px;
          text-transform: uppercase;
        }
        .period-status.status-active {
          background: rgba(52, 211, 153, 0.15);
          color: #34d399;
        }
        .period-status.status-blocked {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
        }
        .period-status.status-expired {
          background: rgba(156, 163, 175, 0.15);
          color: #9ca3af;
        }
        .period-q-count {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: rgba(226, 238, 230, 0.8);
        }
        .period-q-count b {
          color: #ffffff;
        }
        .period-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 12px;
          font-size: 12px;
        }
        .period-grid span {
          display: block;
          font-size: 10px;
          color: rgba(226, 238, 230, 0.45);
        }
        .period-grid b {
          color: #ffffff;
          font-weight: 500;
        }
        .log-table-wrap {
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          overflow: hidden;
        }
        .log-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 12px;
        }
        .log-table th {
          background: rgba(255, 255, 255, 0.03);
          padding: 8px 12px;
          font-size: 10.5px;
          color: rgba(226, 238, 230, 0.5);
          text-align: left;
        }
        .log-table td {
          padding: 8px 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }
        .log-badge-status {
          background: rgba(192, 132, 252, 0.15);
          color: #c084fc;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 10.5px;
          font-family: 'DM Mono', monospace;
        }
        .feedback-cards-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .feedback-mini-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          padding: 12px;
        }
        .fb-mini-top {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }
        .fb-stars {
          display: flex;
          gap: 2px;
        }
        .fb-cat-tag {
          font-size: 10.5px;
          font-family: 'DM Mono', monospace;
          color: #c084fc;
          background: rgba(192, 132, 252, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
        }
        .fb-date {
          font-size: 11px;
          color: rgba(226, 238, 230, 0.45);
          margin-left: auto;
        }
        .fb-mini-msg {
          font-size: 12.5px;
          color: rgba(226, 238, 230, 0.85);
          margin: 0;
          line-height: 1.4;
        }
        .section-empty {
          color: rgba(226, 238, 230, 0.4);
          font-size: 12.5px;
          margin: 0;
        }
        .detail-loading {
          padding: 48px;
          text-align: center;
          color: rgba(226, 238, 230, 0.5);
        }
      `})]})}function Oz({status:e,blocked:t}){return t||e==="blocked"?c.jsxs("span",{className:"status-badge status-blocked",children:[c.jsx(n1,{size:12}),c.jsx("span",{children:"Blocked"})]}):e==="expired"?c.jsxs("span",{className:"status-badge status-expired",children:[c.jsx(Dp,{size:12}),c.jsx("span",{children:"Expired"})]}):e==="active"?c.jsxs("span",{className:"status-badge status-active",children:[c.jsx(xa,{size:12}),c.jsx("span",{children:"Active"})]}):c.jsxs("span",{className:"status-badge status-eligible",children:[c.jsx(xa,{size:12}),c.jsx("span",{children:"Eligible"})]})}function Fz({device:e}){const t=(e||"unknown").toLowerCase();let n=jp;return t.includes("desk")?n=Jb:t.includes("mob")?n=i1:t.includes("tab")&&(n=a1),c.jsxs("span",{className:"device-pill",children:[c.jsx(n,{size:12}),c.jsx("span",{children:t})]})}const zz=["Voice Experience","Answer Quality","UI/UX","Bug","Feature Request","Other"];function Uz(){const[e,t]=E.useState([]),[n,r]=E.useState({}),[i,s]=E.useState(0),[a,o]=E.useState(1),[l,u]=E.useState(1),[d,f]=E.useState(15),[p,h]=E.useState(""),[x,v]=E.useState(""),[b,g]=E.useState(""),[m,y]=E.useState(""),[S,C]=E.useState("newest"),[w,I]=E.useState(""),[N,j]=E.useState(""),[T,R]=E.useState(!0),[z,G]=E.useState(""),[q,$]=E.useState(new Set),[ue,Z]=E.useState(!1),[D,B]=E.useState(""),[k,K]=E.useState(null),[te,A]=E.useState(!1),[ce,ke]=E.useState(""),se=L=>{B(L),setTimeout(()=>B(""),4500)},Se=async()=>{R(!0),G("");try{const L=await st.getFeedback({page:l,per_page:d,search:p.trim(),rating:x!==""?Number(x):void 0,category:b,status:m,start_date:w||void 0,end_date:N||void 0,sort_order:S});t(L.items||[]),r(L.summary||{}),s(L.total||0),o(L.total_pages||1)}catch(L){G(L.message||"Failed to load feedback records.")}finally{R(!1)}};E.useEffect(()=>{Se()},[l,d,x,b,m,S,w,N]);const $e=L=>{L.preventDefault(),u(1),Se()},Ye=()=>{h(""),v(""),g(""),y(""),C("newest"),I(""),j(""),$(new Set),u(1)},pe=L=>{L.target.checked?$(new Set(e.map(me=>me.id))):$(new Set)},et=(L,me)=>{me&&me.stopPropagation(),$(ie=>{const ye=new Set(ie);return ye.has(L)?ye.delete(L):ye.add(L),ye})},St=async(L,me)=>{if(me&&me.stopPropagation(),!!window.confirm("Permanently delete this feedback review? This action cannot be undone.")){Z(!0);try{await st.deleteFeedback(L),se("Feedback review deleted."),t(ie=>ie.filter(ye=>ye.id!==L)),s(ie=>Math.max(0,ie-1)),$(ie=>{const ye=new Set(ie);return ye.delete(L),ye}),(k==null?void 0:k.id)===L&&K(null)}catch(ie){alert("Failed to delete feedback: "+ie.message)}finally{Z(!1)}}},Ge=async()=>{if(q.size!==0&&window.confirm(`Permanently delete ${q.size} selected feedback reviews? This cannot be undone.`)){Z(!0);try{const L=Array.from(q),me=await st.bulkDeleteFeedback(L);se(me.message||`Deleted ${L.length} feedback review(s).`);const ie=new Set(L);t(ye=>ye.filter(M=>!ie.has(M.id))),s(ye=>Math.max(0,ye-ie.size)),$(new Set),k&&ie.has(k.id)&&K(null)}catch(L){alert("Failed to bulk delete feedback: "+L.message)}finally{Z(!1)}}},Gt=async(L,me)=>{try{const ie=await st.updateFeedback(L,{status:me});t(ye=>ye.map(M=>M.id===L?{...M,status:ie.status}:M)),k&&k.id===L&&K(ye=>({...ye,status:ie.status})),se(`Feedback status updated to ${me}.`)}catch(ie){alert("Failed to update status: "+ie.message)}},Nr=async()=>{if(k){A(!0);try{const L=await st.updateFeedback(k.id,{admin_notes:ce});K(me=>({...me,admin_notes:L.admin_notes})),t(me=>me.map(ie=>ie.id===k.id?{...ie,admin_notes:L.admin_notes}:ie)),se("Internal notes saved successfully.")}catch(L){alert("Failed to save admin notes: "+L.message)}finally{A(!1)}}},De=L=>{K(L),ke(L.admin_notes||"")},En=async()=>{try{const me=(await st.getFeedback({page:1,per_page:2e3,search:p.trim(),rating:x!==""?Number(x):void 0,category:b,status:m,start_date:w||void 0,end_date:N||void 0,sort_order:S})).items||e;if(!me.length){alert("No feedback records to export.");return}const ye=[["Date","Email","Rating","Category","Message","Device","Browser","Status","Admin Notes"].join(","),...me.map(fe=>[`"${fe.created_at||""}"`,`"${(fe.email||"").replace(/"/g,'""')}"`,fe.rating,`"${(fe.category||"").replace(/"/g,'""')}"`,`"${(fe.message||"").replace(/"/g,'""').replace(/\n/g," ")}"`,`"${fe.device_type||"desktop"}"`,`"${fe.browser_name||"Chrome"}"`,`"${fe.status||"new"}"`,`"${(fe.admin_notes||"").replace(/"/g,'""').replace(/\n/g," ")}"`].join(","))].join(`
`),M=new Blob([ye],{type:"text/csv;charset=utf-8;"}),H=URL.createObjectURL(M),ae=document.createElement("a");ae.href=H,ae.setAttribute("download",`eliza-feedback-export-${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(ae),ae.click(),document.body.removeChild(ae),URL.revokeObjectURL(H)}catch(L){alert("Failed to export feedback: "+L.message)}},qt=L=>{if(!L)return"—";try{return new Date(L).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return L}};return c.jsxs(Qh,{title:"Feedback & Reviews Management",subtitle:"Examine visitor ratings, categorize UX evaluations, and record operational follow-ups.",children:[D&&c.jsxs("div",{className:"admin-toast-banner",children:[c.jsx(xa,{size:16}),c.jsx("span",{children:D})]}),c.jsxs("div",{className:"fb-summary-grid",children:[c.jsxs("div",{className:"fb-summary-card",children:[c.jsx("span",{className:"summary-card-title",children:"Total Submissions"}),c.jsx("div",{className:"summary-card-val",children:n.total_feedback??0}),c.jsx("span",{className:"summary-card-sub",children:"All-time reviews received"})]}),c.jsxs("div",{className:"fb-summary-card",children:[c.jsx("span",{className:"summary-card-title",children:"Average Rating"}),c.jsxs("div",{className:"summary-card-val",children:[n.average_rating?Number(n.average_rating).toFixed(1):"0.0"," / 5"]}),c.jsx("div",{className:"stars-mini-row",children:[1,2,3,4,5].map(L=>c.jsx(xr,{size:14,fill:L<=Math.round(n.average_rating||0)?"#fbbf24":"transparent",color:L<=Math.round(n.average_rating||0)?"#fbbf24":"rgba(255,255,255,0.2)"},L))})]}),c.jsxs("div",{className:"fb-summary-card",children:[c.jsx("span",{className:"summary-card-title",children:"Feedback Received Today"}),c.jsx("div",{className:"summary-card-val",children:n.feedback_today??0}),c.jsx("span",{className:"summary-card-sub",children:"Past 24 hours"})]}),c.jsxs("div",{className:"fb-summary-card",children:[c.jsx("span",{className:"summary-card-title",children:"Pending Review"}),c.jsx("div",{className:"summary-card-val",children:e.filter(L=>L.status==="new").length}),c.jsx("span",{className:"summary-card-sub",children:"Marked as 'New' on this page"})]})]}),c.jsxs("div",{className:"fb-toolbar",children:[c.jsxs("form",{onSubmit:$e,className:"search-box",children:[c.jsx(e1,{size:16,className:"search-icon"}),c.jsx("input",{type:"text",value:p,onChange:L=>h(L.target.value),placeholder:"Search feedback by email or message..."}),p&&c.jsx("button",{type:"button",className:"btn-clear-input",onClick:()=>{h(""),u(1)},children:c.jsx(It,{size:14})})]}),c.jsxs("div",{className:"fb-filters",children:[c.jsxs("div",{className:"calendar-date-group",children:[c.jsx(Pp,{size:14,className:"cal-icon"}),c.jsxs("div",{className:"date-field",children:[c.jsx("span",{className:"date-label",children:"From"}),c.jsx("input",{type:"date",value:w,onChange:L=>{I(L.target.value),u(1)},className:"filter-date-input"})]}),c.jsx("span",{className:"date-sep",children:"→"}),c.jsxs("div",{className:"date-field",children:[c.jsx("span",{className:"date-label",children:"To"}),c.jsx("input",{type:"date",value:N,onChange:L=>{j(L.target.value),u(1)},className:"filter-date-input"})]}),(w||N)&&c.jsx("button",{type:"button",className:"btn-clear-date",onClick:()=>{I(""),j(""),u(1)},title:"Clear date range",children:c.jsx(It,{size:13})})]}),c.jsxs("select",{value:x,onChange:L=>{v(L.target.value),u(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"All Ratings"}),c.jsx("option",{value:"5",children:"5 Stars"}),c.jsx("option",{value:"4",children:"4 Stars"}),c.jsx("option",{value:"3",children:"3 Stars"}),c.jsx("option",{value:"2",children:"2 Stars"}),c.jsx("option",{value:"1",children:"1 Star"})]}),c.jsxs("select",{value:b,onChange:L=>{g(L.target.value),u(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"All Categories"}),zz.map(L=>c.jsx("option",{value:L,children:L},L))]}),c.jsxs("select",{value:m,onChange:L=>{y(L.target.value),u(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"All Statuses"}),c.jsx("option",{value:"new",children:"New"}),c.jsx("option",{value:"reviewed",children:"Reviewed"}),c.jsx("option",{value:"resolved",children:"Resolved"})]}),c.jsxs("select",{value:S,onChange:L=>{C(L.target.value),u(1)},className:"filter-select",children:[c.jsx("option",{value:"newest",children:"Sort: Newest"}),c.jsx("option",{value:"oldest",children:"Sort: Oldest"})]}),c.jsx("button",{type:"button",className:"btn-action-refresh",onClick:Se,title:"Refresh feedback",children:c.jsx(Mp,{size:14,className:T?"spin":""})}),c.jsxs("button",{type:"button",className:"btn-action-export",onClick:En,title:"Download all feedback reviews as CSV",children:[c.jsx(Yb,{size:14}),c.jsx("span",{children:"Export CSV"})]}),(p||x||b||m||S!=="newest"||w||N)&&c.jsx("button",{type:"button",className:"btn-clear-all",onClick:Ye,children:"Clear Filters"})]})]}),q.size>0&&c.jsxs("div",{className:"bulk-actions-card",children:[c.jsxs("div",{className:"bulk-info",children:[c.jsx(s1,{size:17,className:"bulk-icon"}),c.jsxs("span",{children:[c.jsx("b",{children:q.size})," review(s) selected"]})]}),c.jsxs("div",{className:"bulk-btns",children:[c.jsxs("button",{type:"button",className:"btn-bulk-delete",onClick:Ge,disabled:ue,children:[c.jsx(Oi,{size:14}),c.jsxs("span",{children:["Delete Selected (",q.size,")"]})]}),c.jsx("button",{type:"button",className:"btn-bulk-cancel",onClick:()=>$(new Set),children:"Cancel Selection"})]})]}),z&&c.jsxs("div",{className:"table-error-banner",children:[c.jsx("span",{children:z}),c.jsx("button",{onClick:Se,children:"Retry"})]}),c.jsxs("div",{className:"table-card",children:[c.jsx("div",{className:"table-responsive",children:c.jsxs("table",{className:"admin-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{style:{width:42,textAlign:"center"},children:c.jsx("input",{type:"checkbox",className:"row-checkbox",checked:e.length>0&&e.every(L=>q.has(L.id)),onChange:pe,title:"Select all on this page"})}),c.jsx("th",{children:"Date / Time"}),c.jsx("th",{children:"Email Address"}),c.jsx("th",{children:"Rating"}),c.jsx("th",{children:"Category"}),c.jsx("th",{children:"Feedback Message"}),c.jsx("th",{children:"Device"}),c.jsx("th",{children:"Browser"}),c.jsx("th",{children:"Status"}),c.jsx("th",{className:"text-right",children:"Actions"})]})}),c.jsx("tbody",{children:T?c.jsx("tr",{children:c.jsxs("td",{colSpan:"10",className:"table-loading-cell",children:[c.jsx("span",{className:"table-spinner"})," Loading feedback..."]})}):e.length===0?c.jsx("tr",{children:c.jsx("td",{colSpan:"10",className:"table-empty-cell",children:"No matching feedback entries found."})}):e.map(L=>{const me=q.has(L.id);return c.jsxs("tr",{className:`table-row-clickable ${me?"row-selected":""}`,onClick:()=>De(L),children:[c.jsx("td",{style:{textAlign:"center"},onClick:ie=>ie.stopPropagation(),children:c.jsx("input",{type:"checkbox",className:"row-checkbox",checked:me,onChange:ie=>et(L.id,ie)})}),c.jsx("td",{className:"text-muted",children:qt(L.created_at)}),c.jsx("td",{className:"font-semibold text-white",children:L.email}),c.jsx("td",{children:c.jsx("div",{className:"table-stars",children:[...Array(5)].map((ie,ye)=>c.jsx(xr,{size:13,fill:ye<L.rating?"#fbbf24":"transparent",color:ye<L.rating?"#fbbf24":"rgba(255,255,255,0.2)"},ye))})}),c.jsx("td",{children:c.jsx("span",{className:`cat-chip cat-chip-${(L.category||"").toLowerCase().replace(/[^a-z]/g,"")}`,children:L.category})}),c.jsx("td",{className:"message-preview-cell",children:c.jsx("p",{children:L.message})}),c.jsx("td",{children:c.jsx("span",{className:"device-chip",children:L.device_type||"desktop"})}),c.jsx("td",{children:c.jsx("span",{className:"browser-chip",children:L.browser_name||"Chrome"})}),c.jsx("td",{onClick:ie=>ie.stopPropagation(),children:c.jsxs("select",{value:L.status,onChange:ie=>Gt(L.id,ie.target.value),className:`status-dropdown status-style-${L.status}`,children:[c.jsx("option",{value:"new",children:"New"}),c.jsx("option",{value:"reviewed",children:"Reviewed"}),c.jsx("option",{value:"resolved",children:"Resolved"})]})}),c.jsx("td",{className:"text-right",onClick:ie=>ie.stopPropagation(),children:c.jsxs("div",{className:"row-actions-group",children:[c.jsxs("button",{type:"button",className:"btn-view-detail",onClick:()=>De(L),title:"View Full Feedback & Notes",children:[c.jsx(Lp,{size:13})," View"]}),c.jsx("button",{type:"button",className:"btn-action-delete",onClick:ie=>St(L.id,ie),disabled:ue,title:"Delete feedback entry",children:c.jsx(Oi,{size:13})})]})})]},L.id)})})]})}),c.jsxs("div",{className:"pagination-bar",children:[c.jsxs("div",{className:"pagination-info",children:["Showing ",c.jsx("b",{children:e.length})," of ",c.jsx("b",{children:i})," total reviews (Page ",l," of ",a,")"]}),c.jsxs("div",{className:"pagination-controls",children:[c.jsxs("label",{className:"page-size-label",children:[c.jsx("span",{children:"Per page:"}),c.jsxs("select",{value:d,onChange:L=>{f(Number(L.target.value)),u(1)},children:[c.jsx("option",{value:"15",children:"15"}),c.jsx("option",{value:"30",children:"30"}),c.jsx("option",{value:"50",children:"50"})]})]}),c.jsx("button",{type:"button",className:"btn-page",disabled:l<=1,onClick:()=>u(L=>Math.max(1,L-1)),title:"Previous page",children:c.jsx(Gb,{size:16})}),c.jsxs("span",{className:"current-page-num",children:[l," / ",a]}),c.jsx("button",{type:"button",className:"btn-page",disabled:l>=a,onClick:()=>u(L=>Math.min(a,L+1)),title:"Next page",children:c.jsx(qb,{size:16})})]})]})]}),k&&c.jsx("div",{className:"detail-modal-overlay",onClick:()=>K(null),children:c.jsxs("div",{className:"detail-modal-card",onClick:L=>L.stopPropagation(),children:[c.jsxs("div",{className:"detail-modal-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"detail-eyebrow",children:"FEEDBACK INSPECTION"}),c.jsxs("h3",{children:["Review from ",k.email]})]}),c.jsxs("div",{className:"head-actions",children:[c.jsxs("button",{type:"button",className:"btn-drawer-delete",onClick:L=>St(k.id,L),title:"Delete this feedback entry",children:[c.jsx(Oi,{size:14})," Delete"]}),c.jsx("button",{type:"button",className:"btn-modal-close",onClick:()=>K(null),children:c.jsx(It,{size:18})})]})]}),c.jsxs("div",{className:"detail-modal-body",children:[c.jsxs("div",{className:"fb-inspect-meta",children:[c.jsxs("div",{children:[c.jsx("span",{children:"Submitted At"}),c.jsx("b",{children:qt(k.created_at)})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Category"}),c.jsx("b",{children:k.category})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Device & Browser"}),c.jsxs("b",{children:[k.device_type," • ",k.browser_name]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Rating"}),c.jsx("div",{className:"table-stars",children:[...Array(k.rating)].map((L,me)=>c.jsx(xr,{size:15,fill:"#fbbf24",color:"#fbbf24"},me))})]})]}),c.jsxs("div",{className:"fb-inspect-message-box",children:[c.jsx("span",{className:"box-label",children:"Visitor Feedback Message"}),c.jsx("p",{className:"full-message-text",children:k.message})]}),c.jsxs("div",{className:"fb-inspect-status-box",children:[c.jsx("span",{className:"box-label",children:"Resolution Status"}),c.jsx("div",{className:"status-button-group",children:["new","reviewed","resolved"].map(L=>c.jsxs("button",{type:"button",className:`status-btn ${k.status===L?"active-"+L:""}`,onClick:()=>Gt(k.id,L),children:[k.status===L&&c.jsx(Wb,{size:14}),c.jsx("span",{style:{textTransform:"capitalize"},children:L})]},L))})]}),c.jsxs("div",{className:"fb-inspect-notes-box",children:[c.jsxs("div",{className:"notes-box-head",children:[c.jsx("span",{className:"box-label",children:"Administrator Internal Notes"}),c.jsxs("button",{type:"button",className:"btn-save-notes",onClick:Nr,disabled:te,children:[c.jsx(JT,{size:13}),c.jsx("span",{children:te?"Saving...":"Save Notes"})]})]}),c.jsx("textarea",{rows:"4",value:ce,onChange:L=>ke(L.target.value),placeholder:"Record follow-up actions, customer bug reports, or engineering notes here...",className:"notes-textarea"})]})]})]})}),c.jsx("style",{children:`
        .admin-toast-banner {
          position: sticky;
          top: 10px;
          z-index: 100;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #064e3b;
          border: 1px solid #10b981;
          color: #a7f3d0;
          padding: 10px 18px;
          border-radius: 10px;
          margin-bottom: 18px;
          font-size: 13.5px;
          font-weight: 600;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          animation: slideDown 0.25s ease-out;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fb-summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }
        .fb-summary-card {
          background: #0b120e;
          border: 1px solid rgba(192, 132, 252, 0.18);
          border-radius: 12px;
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .summary-card-title {
          font-size: 11px;
          font-family: 'DM Mono', monospace;
          text-transform: uppercase;
          color: rgba(226, 238, 230, 0.55);
          letter-spacing: 0.5px;
        }
        .summary-card-val {
          font-size: 26px;
          font-weight: 800;
          color: #ffffff;
        }
        .summary-card-sub {
          font-size: 12px;
          color: rgba(226, 238, 230, 0.45);
        }
        .stars-mini-row {
          display: flex;
          gap: 3px;
          margin-top: 2px;
        }
        .fb-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 20px;
        }
        .search-box {
          position: relative;
          display: flex;
          align-items: center;
          flex: 1;
          min-width: 280px;
          max-width: 440px;
        }
        .search-icon {
          position: absolute;
          left: 14px;
          color: rgba(226, 238, 230, 0.45);
          pointer-events: none;
        }
        .search-box input {
          width: 100%;
          background: #0b120e;
          border: 1px solid rgba(192, 132, 252, 0.3);
          border-radius: 10px;
          padding: 10px 36px 10px 40px;
          font-size: 13.5px;
          color: #ffffff;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .search-box input::placeholder {
          color: rgba(226, 238, 230, 0.4);
        }
        .search-box input:focus {
          border-color: #c084fc;
          box-shadow: 0 0 0 2px rgba(192, 132, 252, 0.15);
        }
        .btn-clear-input {
          position: absolute;
          right: 12px;
          background: none;
          border: none;
          color: rgba(226, 238, 230, 0.5);
          cursor: pointer;
        }
        .fb-filters {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .calendar-date-group {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #0b120e;
          border: 1px solid rgba(192, 132, 252, 0.3);
          border-radius: 9px;
          padding: 5px 10px;
        }
        .cal-icon {
          color: #c084fc;
        }
        .date-field {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .date-label {
          font-size: 10.5px;
          font-family: 'DM Mono', monospace;
          color: rgba(226, 238, 230, 0.5);
          text-transform: uppercase;
        }
        .filter-date-input {
          background: #080d0b;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 6px;
          color: #ffffff;
          padding: 4px 6px;
          font-size: 11.5px;
          outline: none;
        }
        .filter-date-input::-webkit-calendar-picker-indicator {
          filter: invert(1);
          cursor: pointer;
        }
        .date-sep {
          color: rgba(226, 238, 230, 0.4);
          font-size: 12px;
        }
        .btn-clear-date {
          background: none;
          border: none;
          color: rgba(226, 238, 230, 0.6);
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 2px;
        }
        .btn-clear-date:hover {
          color: #fca5a5;
        }
        .filter-select {
          background: #0b120e;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          padding: 9px 12px;
          font-size: 12.5px;
          color: #e2eee6;
          outline: none;
          cursor: pointer;
          transition: border-color 0.2s;
        }
        .filter-select:focus {
          border-color: #c084fc;
        }
        .filter-select option {
          background: #0b120e;
          color: #ffffff;
        }
        .btn-action-refresh {
          background: #0b120e;
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(226, 238, 230, 0.7);
          padding: 8px 12px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: all 0.2s;
        }
        .btn-action-refresh:hover {
          color: #ffffff;
          border-color: rgba(192, 132, 252, 0.4);
          background: rgba(192, 132, 252, 0.08);
        }
        .btn-action-export {
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.35);
          color: #d8b4fe;
          padding: 8px 14px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          font-weight: 700;
          transition: all 0.2s;
        }
        .btn-action-export:hover {
          background: #c084fc;
          border-color: #c084fc;
          color: #080d0b;
        }
        .btn-clear-all {
          background: none;
          border: none;
          color: #c084fc;
          font-size: 12px;
          cursor: pointer;
          text-decoration: underline;
        }
        /* Bulk Actions Card */
        .bulk-actions-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          background: rgba(192, 132, 252, 0.1);
          border: 1px solid rgba(192, 132, 252, 0.4);
          border-radius: 12px;
          margin-bottom: 16px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        }
        .bulk-info {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13.5px;
          color: #ffffff;
        }
        .bulk-icon {
          color: #c084fc;
        }
        .bulk-btns {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .btn-bulk-delete {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #dc2626;
          border: 1px solid #ef4444;
          color: #ffffff;
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 12.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-bulk-delete:hover:not(:disabled) {
          background: #b91c1c;
        }
        .btn-bulk-cancel {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: rgba(226, 238, 230, 0.8);
          padding: 7px 12px;
          border-radius: 8px;
          font-size: 12px;
          cursor: pointer;
        }
        .row-checkbox {
          width: 16px;
          height: 16px;
          accent-color: #c084fc;
          cursor: pointer;
        }
        .table-card {
          background: #0b120e;
          border: 1px solid rgba(192, 132, 252, 0.18);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          margin-bottom: 40px;
        }
        .table-responsive {
          width: 100%;
          overflow-x: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(192, 132, 252, 0.35) #0b120e;
        }
        .table-responsive::-webkit-scrollbar {
          height: 8px;
        }
        .table-responsive::-webkit-scrollbar-track {
          background: #0b120e;
        }
        .table-responsive::-webkit-scrollbar-thumb {
          background: rgba(192, 132, 252, 0.35);
          border-radius: 4px;
        }
        .admin-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 13px;
        }
        .admin-table thead th {
          position: sticky;
          top: 0;
          background: #0e1612;
          z-index: 5;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 14px 14px;
          font-size: 11px;
          font-family: 'DM Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: rgba(226, 238, 230, 0.7);
          white-space: nowrap;
        }
        .admin-table td {
          padding: 13px 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          white-space: nowrap;
        }
        .table-row-clickable {
          cursor: pointer;
          transition: background 0.15s;
        }
        .table-row-clickable:hover {
          background: rgba(192, 132, 252, 0.05);
        }
        .row-selected {
          background: rgba(192, 132, 252, 0.08) !important;
        }
        .cat-chip {
          display: inline-block;
          font-size: 11.5px;
          font-family: 'DM Mono', monospace;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
        }
        .cat-chip-voiceexperience {
          color: #d8b4fe;
          background: rgba(192, 132, 252, 0.18);
          border: 1px solid rgba(192, 132, 252, 0.45);
        }
        .cat-chip-answerquality {
          color: #93c5fd;
          background: rgba(59, 130, 246, 0.18);
          border: 1px solid rgba(59, 130, 246, 0.45);
        }
        .cat-chip-bug {
          color: #fca5a5;
          background: rgba(239, 68, 68, 0.18);
          border: 1px solid rgba(239, 68, 68, 0.45);
        }
        .cat-chip-uiux {
          color: #fde047;
          background: rgba(234, 179, 8, 0.18);
          border: 1px solid rgba(234, 179, 8, 0.45);
        }
        .cat-chip-featurerequest {
          color: #6ee7b7;
          background: rgba(16, 185, 129, 0.18);
          border: 1px solid rgba(16, 185, 129, 0.45);
        }
        .cat-chip-other {
          color: #cbd5e1;
          background: rgba(148, 163, 184, 0.18);
          border: 1px solid rgba(148, 163, 184, 0.45);
        }
        .device-chip {
          display: inline-block;
          font-size: 11.5px;
          font-family: 'DM Mono', monospace;
          color: rgba(226, 238, 230, 0.85);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 3px 8px;
          border-radius: 5px;
        }
        .browser-chip {
          display: inline-block;
          font-size: 11.5px;
          font-family: 'DM Mono', monospace;
          color: #7cecff;
          background: rgba(124, 236, 255, 0.08);
          border: 1px solid rgba(124, 236, 255, 0.25);
          padding: 3px 8px;
          border-radius: 5px;
        }
        .message-preview-cell {
          max-width: 320px;
        }
        .message-preview-cell p {
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: rgba(226, 238, 230, 0.9);
        }
        .status-dropdown {
          background: #080d0b;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 6px;
          padding: 5px 10px;
          font-size: 11.5px;
          font-family: 'DM Mono', monospace;
          font-weight: 600;
          cursor: pointer;
          outline: none;
        }
        .status-dropdown option {
          background: #080d0b;
          color: #ffffff;
        }
        .status-style-new {
          color: #7cecff;
          border-color: rgba(124, 236, 255, 0.45);
          background: rgba(124, 236, 255, 0.06);
        }
        .status-style-reviewed {
          color: #fbbf24;
          border-color: rgba(251, 191, 36, 0.45);
          background: rgba(251, 191, 36, 0.06);
        }
        .status-style-resolved {
          color: #34d399;
          border-color: rgba(52, 211, 153, 0.45);
          background: rgba(52, 211, 153, 0.06);
        }
        .row-actions-group {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .btn-view-detail {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 5px 10px;
          border-radius: 6px;
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.35);
          color: #e9d5ff;
          font-size: 11.5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-view-detail:hover {
          background: rgba(192, 132, 252, 0.25);
          color: #ffffff;
        }
        .btn-action-delete {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #fca5a5;
          padding: 5px 8px;
          border-radius: 6px;
          font-size: 11.5px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          transition: all 0.2s;
        }
        .btn-action-delete:hover {
          background: #ef4444;
          color: #ffffff;
        }
        .table-loading-cell, .table-empty-cell {
          text-align: center;
          padding: 48px 0;
          color: rgba(226, 238, 230, 0.5);
        }
        .table-spinner {
          width: 14px;
          height: 14px;
          border: 2px solid rgba(192, 132, 252, 0.3);
          border-top-color: #c084fc;
          border-radius: 50%;
          display: inline-block;
          animation: spin 0.8s linear infinite;
          vertical-align: middle;
          margin-right: 6px;
        }
        .pagination-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 12.5px;
        }
        .pagination-info b {
          color: #ffffff;
        }
        .pagination-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .page-size-label {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(226, 238, 230, 0.6);
        }
        .page-size-label select {
          background: #080d0b;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 6px;
          color: #ffffff;
          padding: 3px 6px;
          font-size: 12px;
        }
        .btn-page {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #e2eee6;
          padding: 5px 8px;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        .btn-page:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .current-page-num {
          font-family: 'DM Mono', monospace;
          color: #c084fc;
          font-weight: 700;
        }
        /* Detail Drawer Modal */
        .detail-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(8, 13, 11, 0.85);
          backdrop-filter: blur(12px);
          display: flex;
          justify-content: flex-end;
          z-index: 1000;
        }
        .detail-modal-card {
          width: 100%;
          max-width: 600px;
          background: #0b120e;
          border-left: 1px solid rgba(192, 132, 252, 0.3);
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          box-shadow: -10px 0 40px rgba(0, 0, 0, 0.7);
        }
        .detail-modal-head {
          padding: 22px 28px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.02);
          position: sticky;
          top: 0;
          z-index: 10;
        }
        .head-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .btn-drawer-delete {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #fca5a5;
          padding: 6px 12px;
          border-radius: 7px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }
        .btn-drawer-delete:hover {
          background: #ef4444;
          color: #ffffff;
        }
        .detail-eyebrow {
          font-size: 10px;
          font-family: 'DM Mono', monospace;
          letter-spacing: 1px;
          color: #c084fc;
        }
        .detail-modal-head h3 {
          font-size: 17px;
          font-weight: 700;
          color: #ffffff;
          margin: 4px 0 0 0;
        }
        .btn-modal-close {
          background: none;
          border: none;
          color: rgba(226, 238, 230, 0.6);
          cursor: pointer;
          padding: 4px;
        }
        .detail-modal-body {
          padding: 24px 28px;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .fb-inspect-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 12px;
          padding: 16px;
        }
        .fb-inspect-meta span {
          display: block;
          font-size: 11px;
          font-family: 'DM Mono', monospace;
          color: rgba(226, 238, 230, 0.5);
          text-transform: uppercase;
        }
        .fb-inspect-meta b {
          font-size: 13.5px;
          color: #ffffff;
        }
        .box-label {
          display: block;
          font-size: 11px;
          font-family: 'DM Mono', monospace;
          color: rgba(226, 238, 230, 0.6);
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .fb-inspect-message-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          padding: 16px;
        }
        .full-message-text {
          font-size: 14px;
          line-height: 1.5;
          color: #ffffff;
          margin: 0;
          white-space: pre-wrap;
        }
        .fb-inspect-status-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .status-button-group {
          display: flex;
          gap: 8px;
        }
        .status-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.02);
          color: rgba(226, 238, 230, 0.6);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .status-btn:hover {
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.25);
        }
        .status-btn.active-new {
          background: rgba(124, 236, 255, 0.15);
          border-color: #7cecff;
          color: #7cecff;
        }
        .status-btn.active-reviewed {
          background: rgba(251, 191, 36, 0.15);
          border-color: #fbbf24;
          color: #fbbf24;
        }
        .status-btn.active-resolved {
          background: rgba(52, 211, 153, 0.15);
          border-color: #34d399;
          color: #34d399;
        }
        .fb-inspect-notes-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .notes-box-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .btn-save-notes {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #c084fc;
          border: none;
          color: #080d0b;
          font-size: 12px;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: 6px;
          cursor: pointer;
        }
        .btn-save-notes:hover {
          background: #d8b4fe;
        }
        .notes-textarea {
          width: 100%;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 12px;
          font-size: 13px;
          color: #ffffff;
          outline: none;
          resize: vertical;
        }
        .notes-textarea:focus {
          border-color: #c084fc;
        }
      `})]})}kb(document.getElementById("root")).render(c.jsx(X2.StrictMode,{children:c.jsx(RT,{children:c.jsxs(lT,{children:[c.jsx(Lr,{path:"/",element:c.jsx(Az,{})}),c.jsx(Lr,{path:"/admin/login",element:c.jsx(Pz,{})}),c.jsx(Lr,{path:"/admin/dashboard",element:c.jsx(jz,{})}),c.jsx(Lr,{path:"/admin/emails",element:c.jsx(Mz,{})}),c.jsx(Lr,{path:"/admin/feedback",element:c.jsx(Uz,{})}),c.jsx(Lr,{path:"*",element:c.jsx(aT,{to:"/",replace:!0})})]})})}));
