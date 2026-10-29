(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var qi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var b0={exports:{}},nu={},w0={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),Q2=Symbol.for("react.portal"),Z2=Symbol.for("react.fragment"),J2=Symbol.for("react.strict_mode"),eS=Symbol.for("react.profiler"),tS=Symbol.for("react.provider"),nS=Symbol.for("react.context"),rS=Symbol.for("react.forward_ref"),iS=Symbol.for("react.suspense"),sS=Symbol.for("react.memo"),aS=Symbol.for("react.lazy"),um=Symbol.iterator;function oS(e){return e===null||typeof e!="object"?null:(e=um&&e[um]||e["@@iterator"],typeof e=="function"?e:null)}var k0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S0=Object.assign,E0={};function cs(e,t,n){this.props=e,this.context=t,this.refs=E0,this.updater=n||k0}cs.prototype.isReactComponent={};cs.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function C0(){}C0.prototype=cs.prototype;function Mf(e,t,n){this.props=e,this.context=t,this.refs=E0,this.updater=n||k0}var Ff=Mf.prototype=new C0;Ff.constructor=Mf;S0(Ff,cs.prototype);Ff.isPureReactComponent=!0;var cm=Array.isArray,T0=Object.prototype.hasOwnProperty,Of={current:null},_0={key:!0,ref:!0,__self:!0,__source:!0};function A0(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)T0.call(t,r)&&!_0.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:Ua,type:e,key:s,ref:a,props:i,_owner:Of.current}}function lS(e,t){return{$$typeof:Ua,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function zf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ua}function uS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var dm=/\/+/g;function Ou(e,t){return typeof e=="object"&&e!==null&&e.key!=null?uS(""+e.key):t.toString(36)}function Fo(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ua:case Q2:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Ou(a,0):r,cm(i)?(n="",e!=null&&(n=e.replace(dm,"$&/")+"/"),Fo(i,t,n,"",function(u){return u})):i!=null&&(zf(i)&&(i=lS(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(dm,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",cm(e))for(var o=0;o<e.length;o++){s=e[o];var l=r+Ou(s,o);a+=Fo(s,t,n,l,i)}else if(l=oS(e),typeof l=="function")for(e=l.call(e),o=0;!(s=e.next()).done;)s=s.value,l=r+Ou(s,o++),a+=Fo(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ao(e,t,n){if(e==null)return e;var r=[],i=0;return Fo(e,r,"","",function(s){return t.call(n,s,i++)}),r}function cS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var mt={current:null},Oo={transition:null},dS={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:Oo,ReactCurrentOwner:Of};function I0(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:ao,forEach:function(e,t,n){ao(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ao(e,function(){t++}),t},toArray:function(e){return ao(e,function(t){return t})||[]},only:function(e){if(!zf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};le.Component=cs;le.Fragment=Z2;le.Profiler=eS;le.PureComponent=Mf;le.StrictMode=J2;le.Suspense=iS;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dS;le.act=I0;le.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=S0({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Of.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in t)T0.call(t,l)&&!_0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&o!==void 0?o[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:Ua,type:e.type,key:i,ref:s,props:r,_owner:a}};le.createContext=function(e){return e={$$typeof:nS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tS,_context:e},e.Consumer=e};le.createElement=A0;le.createFactory=function(e){var t=A0.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:rS,render:e}};le.isValidElement=zf;le.lazy=function(e){return{$$typeof:aS,_payload:{_status:-1,_result:e},_init:cS}};le.memo=function(e,t){return{$$typeof:sS,type:e,compare:t===void 0?null:t}};le.startTransition=function(e){var t=Oo.transition;Oo.transition={};try{e()}finally{Oo.transition=t}};le.unstable_act=I0;le.useCallback=function(e,t){return mt.current.useCallback(e,t)};le.useContext=function(e){return mt.current.useContext(e)};le.useDebugValue=function(){};le.useDeferredValue=function(e){return mt.current.useDeferredValue(e)};le.useEffect=function(e,t){return mt.current.useEffect(e,t)};le.useId=function(){return mt.current.useId()};le.useImperativeHandle=function(e,t,n){return mt.current.useImperativeHandle(e,t,n)};le.useInsertionEffect=function(e,t){return mt.current.useInsertionEffect(e,t)};le.useLayoutEffect=function(e,t){return mt.current.useLayoutEffect(e,t)};le.useMemo=function(e,t){return mt.current.useMemo(e,t)};le.useReducer=function(e,t,n){return mt.current.useReducer(e,t,n)};le.useRef=function(e){return mt.current.useRef(e)};le.useState=function(e){return mt.current.useState(e)};le.useSyncExternalStore=function(e,t,n){return mt.current.useSyncExternalStore(e,t,n)};le.useTransition=function(){return mt.current.useTransition()};le.version="18.3.1";w0.exports=le;var C=w0.exports;const fS=tu(C);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pS=C,hS=Symbol.for("react.element"),mS=Symbol.for("react.fragment"),gS=Object.prototype.hasOwnProperty,yS=pS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xS={key:!0,ref:!0,__self:!0,__source:!0};function N0(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)gS.call(t,r)&&!xS.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:hS,type:e,key:s,ref:a,props:i,_owner:yS.current}}nu.Fragment=mS;nu.jsx=N0;nu.jsxs=N0;b0.exports=nu;var c=b0.exports,P0={exports:{}},Lt={},j0={exports:{}},R0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,V){var k=L.length;L.push(V);e:for(;0<k;){var X=k-1>>>1,ee=L[X];if(0<i(ee,V))L[X]=V,L[k]=ee,k=X;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var V=L[0],k=L.pop();if(k!==V){L[0]=k;e:for(var X=0,ee=L.length,A=ee>>>1;X<A;){var se=2*(X+1)-1,be=L[se],ie=se+1,Ce=L[ie];if(0>i(be,k))ie<ee&&0>i(Ce,be)?(L[X]=Ce,L[ie]=k,X=ie):(L[X]=be,L[se]=k,X=se);else if(ie<ee&&0>i(Ce,k))L[X]=Ce,L[ie]=k,X=ie;else break e}}return V}function i(L,V){var k=L.sortIndex-V.sortIndex;return k!==0?k:L.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var l=[],u=[],d=1,f=null,p=3,h=!1,y=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=L)r(u),V.sortIndex=V.expirationTime,t(l,V);else break;V=n(u)}}function v(L){if(b=!1,x(L),!y)if(n(l)!==null)y=!0,ue(E);else{var V=n(u);V!==null&&Y(v,V.startTime-L)}}function E(L,V){y=!1,b&&(b=!1,g(P),P=-1),h=!0;var k=p;try{for(x(V),f=n(l);f!==null&&(!(f.expirationTime>V)||L&&!j());){var X=f.callback;if(typeof X=="function"){f.callback=null,p=f.priorityLevel;var ee=X(f.expirationTime<=V);V=e.unstable_now(),typeof ee=="function"?f.callback=ee:f===n(l)&&r(l),x(V)}else r(l);f=n(l)}if(f!==null)var A=!0;else{var se=n(u);se!==null&&Y(v,se.startTime-V),A=!1}return A}finally{f=null,p=k,h=!1}}var w=!1,I=null,P=-1,R=5,_=-1;function j(){return!(e.unstable_now()-_<R)}function U(){if(I!==null){var L=e.unstable_now();_=L;var V=!0;try{V=I(!0,L)}finally{V?q():(w=!1,I=null)}}else w=!1}var q;if(typeof m=="function")q=function(){m(U)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,H=Q.port2;Q.port1.onmessage=U,q=function(){H.postMessage(null)}}else q=function(){S(U,0)};function ue(L){I=L,w||(w=!0,q())}function Y(L,V){P=S(function(){L(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,ue(E))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(L){switch(p){case 1:case 2:case 3:var V=3;break;default:V=p}var k=p;p=V;try{return L()}finally{p=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,V){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var k=p;p=L;try{return V()}finally{p=k}},e.unstable_scheduleCallback=function(L,V,k){var X=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?X+k:X):k=X,L){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=k+ee,L={id:d++,callback:V,priorityLevel:L,startTime:k,expirationTime:ee,sortIndex:-1},k>X?(L.sortIndex=k,t(u,L),n(l)===null&&L===n(u)&&(b?(g(P),P=-1):b=!0,Y(v,k-X))):(L.sortIndex=ee,t(l,L),y||h||(y=!0,ue(E))),L},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(L){var V=p;return function(){var k=p;p=V;try{return L.apply(this,arguments)}finally{p=k}}}})(R0);j0.exports=R0;var vS=j0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bS=C,jt=vS;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var L0=new Set,la={};function fi(e,t){Ki(e,t),Ki(e+"Capture",t)}function Ki(e,t){for(la[e]=t,e=0;e<t.length;e++)L0.add(t[e])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=Object.prototype.hasOwnProperty,wS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fm={},pm={};function kS(e){return Jc.call(pm,e)?!0:Jc.call(fm,e)?!1:wS.test(e)?pm[e]=!0:(fm[e]=!0,!1)}function SS(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ES(e,t,n,r){if(t===null||typeof t>"u"||SS(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function gt(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Uf=/[\-:]([a-z])/g;function Bf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Uf,Bf);Je[t]=new gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Uf,Bf);Je[t]=new gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Uf,Bf);Je[t]=new gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new gt(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new gt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vf(e,t,n,r){var i=Je.hasOwnProperty(t)?Je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ES(t,n,i,r)&&(n=null),r||i===null?kS(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Qn=bS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),vi=Symbol.for("react.portal"),bi=Symbol.for("react.fragment"),$f=Symbol.for("react.strict_mode"),ed=Symbol.for("react.profiler"),D0=Symbol.for("react.provider"),M0=Symbol.for("react.context"),Hf=Symbol.for("react.forward_ref"),td=Symbol.for("react.suspense"),nd=Symbol.for("react.suspense_list"),Wf=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),F0=Symbol.for("react.offscreen"),hm=Symbol.iterator;function ks(e){return e===null||typeof e!="object"?null:(e=hm&&e[hm]||e["@@iterator"],typeof e=="function"?e:null)}var je=Object.assign,zu;function Ls(e){if(zu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zu=t&&t[1]||""}return`
`+zu+e}var Uu=!1;function Bu(e,t){if(!e||Uu)return"";Uu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,o=s.length-1;1<=a&&0<=o&&i[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||i[a]!==s[o]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=o);break}}}finally{Uu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ls(e):""}function CS(e){switch(e.tag){case 5:return Ls(e.type);case 16:return Ls("Lazy");case 13:return Ls("Suspense");case 19:return Ls("SuspenseList");case 0:case 2:case 15:return e=Bu(e.type,!1),e;case 11:return e=Bu(e.type.render,!1),e;case 1:return e=Bu(e.type,!0),e;default:return""}}function rd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bi:return"Fragment";case vi:return"Portal";case ed:return"Profiler";case $f:return"StrictMode";case td:return"Suspense";case nd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case M0:return(e.displayName||"Context")+".Consumer";case D0:return(e._context.displayName||"Context")+".Provider";case Hf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wf:return t=e.displayName||null,t!==null?t:rd(e.type)||"Memo";case rr:t=e._payload,e=e._init;try{return rd(e(t))}catch{}}return null}function TS(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rd(t);case 8:return t===$f?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Er(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function O0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _S(e){var t=O0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lo(e){e._valueTracker||(e._valueTracker=_S(e))}function z0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=O0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ll(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function id(e,t){var n=t.checked;return je({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function mm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Er(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function U0(e,t){t=t.checked,t!=null&&Vf(e,"checked",t,!1)}function sd(e,t){U0(e,t);var n=Er(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ad(e,t.type,n):t.hasOwnProperty("defaultValue")&&ad(e,t.type,Er(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ad(e,t,n){(t!=="number"||ll(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ds=Array.isArray;function Fi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Er(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function od(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return je({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ym(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(Ds(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Er(n)}}function B0(e,t){var n=Er(t.value),r=Er(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function V0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ld(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?V0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var uo,$0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(uo=uo||document.createElement("div"),uo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=uo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ua(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $s={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},AS=["Webkit","ms","Moz","O"];Object.keys($s).forEach(function(e){AS.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$s[t]=$s[e]})});function H0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$s.hasOwnProperty(e)&&$s[e]?(""+t).trim():t+"px"}function W0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=H0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var IS=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ud(e,t){if(t){if(IS[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function cd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dd=null;function Gf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fd=null,Oi=null,zi=null;function vm(e){if(e=$a(e)){if(typeof fd!="function")throw Error(F(280));var t=e.stateNode;t&&(t=ou(t),fd(e.stateNode,e.type,t))}}function G0(e){Oi?zi?zi.push(e):zi=[e]:Oi=e}function q0(){if(Oi){var e=Oi,t=zi;if(zi=Oi=null,vm(e),t)for(e=0;e<t.length;e++)vm(t[e])}}function K0(e,t){return e(t)}function Y0(){}var Vu=!1;function X0(e,t,n){if(Vu)return e(t,n);Vu=!0;try{return K0(e,t,n)}finally{Vu=!1,(Oi!==null||zi!==null)&&(Y0(),q0())}}function ca(e,t){var n=e.stateNode;if(n===null)return null;var r=ou(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var pd=!1;if($n)try{var Ss={};Object.defineProperty(Ss,"passive",{get:function(){pd=!0}}),window.addEventListener("test",Ss,Ss),window.removeEventListener("test",Ss,Ss)}catch{pd=!1}function NS(e,t,n,r,i,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Hs=!1,ul=null,cl=!1,hd=null,PS={onError:function(e){Hs=!0,ul=e}};function jS(e,t,n,r,i,s,a,o,l){Hs=!1,ul=null,NS.apply(PS,arguments)}function RS(e,t,n,r,i,s,a,o,l){if(jS.apply(this,arguments),Hs){if(Hs){var u=ul;Hs=!1,ul=null}else throw Error(F(198));cl||(cl=!0,hd=u)}}function pi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Q0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bm(e){if(pi(e)!==e)throw Error(F(188))}function LS(e){var t=e.alternate;if(!t){if(t=pi(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bm(i),e;if(s===r)return bm(i),t;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,o=i.child;o;){if(o===n){a=!0,n=i,r=s;break}if(o===r){a=!0,r=i,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,r=i;break}if(o===r){a=!0,r=s,n=i;break}o=o.sibling}if(!a)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function Z0(e){return e=LS(e),e!==null?J0(e):null}function J0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=J0(e);if(t!==null)return t;e=e.sibling}return null}var ev=jt.unstable_scheduleCallback,wm=jt.unstable_cancelCallback,DS=jt.unstable_shouldYield,MS=jt.unstable_requestPaint,ze=jt.unstable_now,FS=jt.unstable_getCurrentPriorityLevel,qf=jt.unstable_ImmediatePriority,tv=jt.unstable_UserBlockingPriority,dl=jt.unstable_NormalPriority,OS=jt.unstable_LowPriority,nv=jt.unstable_IdlePriority,ru=null,xn=null;function zS(e){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(ru,e,void 0,(e.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:VS,US=Math.log,BS=Math.LN2;function VS(e){return e>>>=0,e===0?32:31-(US(e)/BS|0)|0}var co=64,fo=4194304;function Ms(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var o=a&~i;o!==0?r=Ms(o):(s&=a,s!==0&&(r=Ms(s)))}else a=n&~i,a!==0?r=Ms(a):s!==0&&(r=Ms(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nn(t),i=1<<n,r|=e[n],t&=~i;return r}function $S(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function HS(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-nn(s),o=1<<a,l=i[a];l===-1?(!(o&n)||o&r)&&(i[a]=$S(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}}function md(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rv(){var e=co;return co<<=1,!(co&4194240)&&(co=64),e}function $u(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ba(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nn(t),e[t]=n}function WS(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-nn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Kf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var he=0;function iv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sv,Yf,av,ov,lv,gd=!1,po=[],hr=null,mr=null,gr=null,da=new Map,fa=new Map,ar=[],GS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function km(e,t){switch(e){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":da.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(t.pointerId)}}function Es(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=$a(t),t!==null&&Yf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function qS(e,t,n,r,i){switch(t){case"focusin":return hr=Es(hr,e,t,n,r,i),!0;case"dragenter":return mr=Es(mr,e,t,n,r,i),!0;case"mouseover":return gr=Es(gr,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return da.set(s,Es(da.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fa.set(s,Es(fa.get(s)||null,e,t,n,r,i)),!0}return!1}function uv(e){var t=Gr(e.target);if(t!==null){var n=pi(t);if(n!==null){if(t=n.tag,t===13){if(t=Q0(n),t!==null){e.blockedOn=t,lv(e.priority,function(){av(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dd=r,n.target.dispatchEvent(r),dd=null}else return t=$a(n),t!==null&&Yf(t),e.blockedOn=n,!1;t.shift()}return!0}function Sm(e,t,n){zo(e)&&n.delete(t)}function KS(){gd=!1,hr!==null&&zo(hr)&&(hr=null),mr!==null&&zo(mr)&&(mr=null),gr!==null&&zo(gr)&&(gr=null),da.forEach(Sm),fa.forEach(Sm)}function Cs(e,t){e.blockedOn===t&&(e.blockedOn=null,gd||(gd=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,KS)))}function pa(e){function t(i){return Cs(i,e)}if(0<po.length){Cs(po[0],e);for(var n=1;n<po.length;n++){var r=po[n];r.blockedOn===e&&(r.blockedOn=null)}}for(hr!==null&&Cs(hr,e),mr!==null&&Cs(mr,e),gr!==null&&Cs(gr,e),da.forEach(t),fa.forEach(t),n=0;n<ar.length;n++)r=ar[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)uv(n),n.blockedOn===null&&ar.shift()}var Ui=Qn.ReactCurrentBatchConfig,pl=!0;function YS(e,t,n,r){var i=he,s=Ui.transition;Ui.transition=null;try{he=1,Xf(e,t,n,r)}finally{he=i,Ui.transition=s}}function XS(e,t,n,r){var i=he,s=Ui.transition;Ui.transition=null;try{he=4,Xf(e,t,n,r)}finally{he=i,Ui.transition=s}}function Xf(e,t,n,r){if(pl){var i=yd(e,t,n,r);if(i===null)Ju(e,t,r,hl,n),km(e,r);else if(qS(i,e,t,n,r))r.stopPropagation();else if(km(e,r),t&4&&-1<GS.indexOf(e)){for(;i!==null;){var s=$a(i);if(s!==null&&sv(s),s=yd(e,t,n,r),s===null&&Ju(e,t,r,hl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ju(e,t,r,null,n)}}var hl=null;function yd(e,t,n,r){if(hl=null,e=Gf(r),e=Gr(e),e!==null)if(t=pi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Q0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return hl=e,null}function cv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(FS()){case qf:return 1;case tv:return 4;case dl:case OS:return 16;case nv:return 536870912;default:return 16}default:return 16}}var dr=null,Qf=null,Uo=null;function dv(){if(Uo)return Uo;var e,t=Qf,n=t.length,r,i="value"in dr?dr.value:dr.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return Uo=i.slice(e,1<r?1-r:void 0)}function Bo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ho(){return!0}function Em(){return!1}function Dt(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ho:Em,this.isPropagationStopped=Em,this}return je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),t}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zf=Dt(ds),Va=je({},ds,{view:0,detail:0}),QS=Dt(Va),Hu,Wu,Ts,iu=je({},Va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ts&&(Ts&&e.type==="mousemove"?(Hu=e.screenX-Ts.screenX,Wu=e.screenY-Ts.screenY):Wu=Hu=0,Ts=e),Hu)},movementY:function(e){return"movementY"in e?e.movementY:Wu}}),Cm=Dt(iu),ZS=je({},iu,{dataTransfer:0}),JS=Dt(ZS),eE=je({},Va,{relatedTarget:0}),Gu=Dt(eE),tE=je({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),nE=Dt(tE),rE=je({},ds,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),iE=Dt(rE),sE=je({},ds,{data:0}),Tm=Dt(sE),aE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lE[e])?!!t[e]:!1}function Jf(){return uE}var cE=je({},Va,{key:function(e){if(e.key){var t=aE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?oE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jf,charCode:function(e){return e.type==="keypress"?Bo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dE=Dt(cE),fE=je({},iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_m=Dt(fE),pE=je({},Va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jf}),hE=Dt(pE),mE=je({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),gE=Dt(mE),yE=je({},iu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xE=Dt(yE),vE=[9,13,27,32],ep=$n&&"CompositionEvent"in window,Ws=null;$n&&"documentMode"in document&&(Ws=document.documentMode);var bE=$n&&"TextEvent"in window&&!Ws,fv=$n&&(!ep||Ws&&8<Ws&&11>=Ws),Am=" ",Im=!1;function pv(e,t){switch(e){case"keyup":return vE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wi=!1;function wE(e,t){switch(e){case"compositionend":return hv(t);case"keypress":return t.which!==32?null:(Im=!0,Am);case"textInput":return e=t.data,e===Am&&Im?null:e;default:return null}}function kE(e,t){if(wi)return e==="compositionend"||!ep&&pv(e,t)?(e=dv(),Uo=Qf=dr=null,wi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fv&&t.locale!=="ko"?null:t.data;default:return null}}var SE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!SE[e.type]:t==="textarea"}function mv(e,t,n,r){G0(r),t=ml(t,"onChange"),0<t.length&&(n=new Zf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gs=null,ha=null;function EE(e){Tv(e,0)}function su(e){var t=Ei(e);if(z0(t))return e}function CE(e,t){if(e==="change")return t}var gv=!1;if($n){var qu;if($n){var Ku="oninput"in document;if(!Ku){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),Ku=typeof Pm.oninput=="function"}qu=Ku}else qu=!1;gv=qu&&(!document.documentMode||9<document.documentMode)}function jm(){Gs&&(Gs.detachEvent("onpropertychange",yv),ha=Gs=null)}function yv(e){if(e.propertyName==="value"&&su(ha)){var t=[];mv(t,ha,e,Gf(e)),X0(EE,t)}}function TE(e,t,n){e==="focusin"?(jm(),Gs=t,ha=n,Gs.attachEvent("onpropertychange",yv)):e==="focusout"&&jm()}function _E(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return su(ha)}function AE(e,t){if(e==="click")return su(t)}function IE(e,t){if(e==="input"||e==="change")return su(t)}function NE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var un=typeof Object.is=="function"?Object.is:NE;function ma(e,t){if(un(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Jc.call(t,i)||!un(e[i],t[i]))return!1}return!0}function Rm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lm(e,t){var n=Rm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rm(n)}}function xv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vv(){for(var e=window,t=ll();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ll(e.document)}return t}function tp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function PE(e){var t=vv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xv(n.ownerDocument.documentElement,n)){if(r!==null&&tp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Lm(n,s);var a=Lm(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jE=$n&&"documentMode"in document&&11>=document.documentMode,ki=null,xd=null,qs=null,vd=!1;function Dm(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vd||ki==null||ki!==ll(r)||(r=ki,"selectionStart"in r&&tp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qs&&ma(qs,r)||(qs=r,r=ml(xd,"onSelect"),0<r.length&&(t=new Zf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ki)))}function mo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Si={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},Yu={},bv={};$n&&(bv=document.createElement("div").style,"AnimationEvent"in window||(delete Si.animationend.animation,delete Si.animationiteration.animation,delete Si.animationstart.animation),"TransitionEvent"in window||delete Si.transitionend.transition);function au(e){if(Yu[e])return Yu[e];if(!Si[e])return e;var t=Si[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in bv)return Yu[e]=t[n];return e}var wv=au("animationend"),kv=au("animationiteration"),Sv=au("animationstart"),Ev=au("transitionend"),Cv=new Map,Mm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(e,t){Cv.set(e,t),fi(t,[e])}for(var Xu=0;Xu<Mm.length;Xu++){var Qu=Mm[Xu],RE=Qu.toLowerCase(),LE=Qu[0].toUpperCase()+Qu.slice(1);Ar(RE,"on"+LE)}Ar(wv,"onAnimationEnd");Ar(kv,"onAnimationIteration");Ar(Sv,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(Ev,"onTransitionEnd");Ki("onMouseEnter",["mouseout","mouseover"]);Ki("onMouseLeave",["mouseout","mouseover"]);Ki("onPointerEnter",["pointerout","pointerover"]);Ki("onPointerLeave",["pointerout","pointerover"]);fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fi("onBeforeInput",["compositionend","keypress","textInput","paste"]);fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fs));function Fm(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,RS(r,t,void 0,e),e.currentTarget=null}function Tv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;Fm(i,o,u),s=l}else for(a=0;a<r.length;a++){if(o=r[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;Fm(i,o,u),s=l}}}if(cl)throw e=hd,cl=!1,hd=null,e}function ke(e,t){var n=t[Ed];n===void 0&&(n=t[Ed]=new Set);var r=e+"__bubble";n.has(r)||(_v(t,e,2,!1),n.add(r))}function Zu(e,t,n){var r=0;t&&(r|=4),_v(n,e,r,t)}var go="_reactListening"+Math.random().toString(36).slice(2);function ga(e){if(!e[go]){e[go]=!0,L0.forEach(function(n){n!=="selectionchange"&&(DE.has(n)||Zu(n,!1,e),Zu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[go]||(t[go]=!0,Zu("selectionchange",!1,t))}}function _v(e,t,n,r){switch(cv(t)){case 1:var i=YS;break;case 4:i=XS;break;default:i=Xf}n=i.bind(null,t,n,e),i=void 0,!pd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ju(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;o!==null;){if(a=Gr(o),a===null)return;if(l=a.tag,l===5||l===6){r=s=a;continue e}o=o.parentNode}}r=r.return}X0(function(){var u=s,d=Gf(n),f=[];e:{var p=Cv.get(e);if(p!==void 0){var h=Zf,y=e;switch(e){case"keypress":if(Bo(n)===0)break e;case"keydown":case"keyup":h=dE;break;case"focusin":y="focus",h=Gu;break;case"focusout":y="blur",h=Gu;break;case"beforeblur":case"afterblur":h=Gu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=JS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=hE;break;case wv:case kv:case Sv:h=nE;break;case Ev:h=gE;break;case"scroll":h=QS;break;case"wheel":h=xE;break;case"copy":case"cut":case"paste":h=iE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=_m}var b=(t&4)!==0,S=!b&&e==="scroll",g=b?p!==null?p+"Capture":null:p;b=[];for(var m=u,x;m!==null;){x=m;var v=x.stateNode;if(x.tag===5&&v!==null&&(x=v,g!==null&&(v=ca(m,g),v!=null&&b.push(ya(m,v,x)))),S)break;m=m.return}0<b.length&&(p=new h(p,y,null,n,d),f.push({event:p,listeners:b}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==dd&&(y=n.relatedTarget||n.fromElement)&&(Gr(y)||y[Hn]))break e;if((h||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,h?(y=n.relatedTarget||n.toElement,h=u,y=y?Gr(y):null,y!==null&&(S=pi(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=u),h!==y)){if(b=Cm,v="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(b=_m,v="onPointerLeave",g="onPointerEnter",m="pointer"),S=h==null?p:Ei(h),x=y==null?p:Ei(y),p=new b(v,m+"leave",h,n,d),p.target=S,p.relatedTarget=x,v=null,Gr(d)===u&&(b=new b(g,m+"enter",y,n,d),b.target=x,b.relatedTarget=S,v=b),S=v,h&&y)t:{for(b=h,g=y,m=0,x=b;x;x=yi(x))m++;for(x=0,v=g;v;v=yi(v))x++;for(;0<m-x;)b=yi(b),m--;for(;0<x-m;)g=yi(g),x--;for(;m--;){if(b===g||g!==null&&b===g.alternate)break t;b=yi(b),g=yi(g)}b=null}else b=null;h!==null&&Om(f,p,h,b,!1),y!==null&&S!==null&&Om(f,S,y,b,!0)}}e:{if(p=u?Ei(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var E=CE;else if(Nm(p))if(gv)E=IE;else{E=_E;var w=TE}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=AE);if(E&&(E=E(e,u))){mv(f,E,n,d);break e}w&&w(e,p,u),e==="focusout"&&(w=p._wrapperState)&&w.controlled&&p.type==="number"&&ad(p,"number",p.value)}switch(w=u?Ei(u):window,e){case"focusin":(Nm(w)||w.contentEditable==="true")&&(ki=w,xd=u,qs=null);break;case"focusout":qs=xd=ki=null;break;case"mousedown":vd=!0;break;case"contextmenu":case"mouseup":case"dragend":vd=!1,Dm(f,n,d);break;case"selectionchange":if(jE)break;case"keydown":case"keyup":Dm(f,n,d)}var I;if(ep)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else wi?pv(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(fv&&n.locale!=="ko"&&(wi||P!=="onCompositionStart"?P==="onCompositionEnd"&&wi&&(I=dv()):(dr=d,Qf="value"in dr?dr.value:dr.textContent,wi=!0)),w=ml(u,P),0<w.length&&(P=new Tm(P,e,null,n,d),f.push({event:P,listeners:w}),I?P.data=I:(I=hv(n),I!==null&&(P.data=I)))),(I=bE?wE(e,n):kE(e,n))&&(u=ml(u,"onBeforeInput"),0<u.length&&(d=new Tm("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=I))}Tv(f,t)})}function ya(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ml(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ca(e,n),s!=null&&r.unshift(ya(e,s,i)),s=ca(e,t),s!=null&&r.push(ya(e,s,i))),e=e.return}return r}function yi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Om(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===r)break;o.tag===5&&u!==null&&(o=u,i?(l=ca(n,s),l!=null&&a.unshift(ya(n,l,o))):i||(l=ca(n,s),l!=null&&a.push(ya(n,l,o)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var ME=/\r\n?/g,FE=/\u0000|\uFFFD/g;function zm(e){return(typeof e=="string"?e:""+e).replace(ME,`
`).replace(FE,"")}function yo(e,t,n){if(t=zm(t),zm(e)!==t&&n)throw Error(F(425))}function gl(){}var bd=null,wd=null;function kd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sd=typeof setTimeout=="function"?setTimeout:void 0,OE=typeof clearTimeout=="function"?clearTimeout:void 0,Um=typeof Promise=="function"?Promise:void 0,zE=typeof queueMicrotask=="function"?queueMicrotask:typeof Um<"u"?function(e){return Um.resolve(null).then(e).catch(UE)}:Sd;function UE(e){setTimeout(function(){throw e})}function ec(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),pa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);pa(t)}function yr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fs=Math.random().toString(36).slice(2),gn="__reactFiber$"+fs,xa="__reactProps$"+fs,Hn="__reactContainer$"+fs,Ed="__reactEvents$"+fs,BE="__reactListeners$"+fs,VE="__reactHandles$"+fs;function Gr(e){var t=e[gn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Hn]||n[gn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bm(e);e!==null;){if(n=e[gn])return n;e=Bm(e)}return t}e=n,n=e.parentNode}return null}function $a(e){return e=e[gn]||e[Hn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ei(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function ou(e){return e[xa]||null}var Cd=[],Ci=-1;function Ir(e){return{current:e}}function Se(e){0>Ci||(e.current=Cd[Ci],Cd[Ci]=null,Ci--)}function we(e,t){Ci++,Cd[Ci]=e.current,e.current=t}var Cr={},lt=Ir(Cr),wt=Ir(!1),ii=Cr;function Yi(e,t){var n=e.type.contextTypes;if(!n)return Cr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function kt(e){return e=e.childContextTypes,e!=null}function yl(){Se(wt),Se(lt)}function Vm(e,t,n){if(lt.current!==Cr)throw Error(F(168));we(lt,t),we(wt,n)}function Av(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(F(108,TS(e)||"Unknown",i));return je({},n,r)}function xl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cr,ii=lt.current,we(lt,e),we(wt,wt.current),!0}function $m(e,t,n){var r=e.stateNode;if(!r)throw Error(F(169));n?(e=Av(e,t,ii),r.__reactInternalMemoizedMergedChildContext=e,Se(wt),Se(lt),we(lt,e)):Se(wt),we(wt,n)}var Rn=null,lu=!1,tc=!1;function Iv(e){Rn===null?Rn=[e]:Rn.push(e)}function $E(e){lu=!0,Iv(e)}function Nr(){if(!tc&&Rn!==null){tc=!0;var e=0,t=he;try{var n=Rn;for(he=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rn=null,lu=!1}catch(i){throw Rn!==null&&(Rn=Rn.slice(e+1)),ev(qf,Nr),i}finally{he=t,tc=!1}}return null}var Ti=[],_i=0,vl=null,bl=0,Bt=[],Vt=0,si=null,Ln=1,Dn="";function Or(e,t){Ti[_i++]=bl,Ti[_i++]=vl,vl=e,bl=t}function Nv(e,t,n){Bt[Vt++]=Ln,Bt[Vt++]=Dn,Bt[Vt++]=si,si=e;var r=Ln;e=Dn;var i=32-nn(r)-1;r&=~(1<<i),n+=1;var s=32-nn(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ln=1<<32-nn(t)+i|n<<i|r,Dn=s+e}else Ln=1<<s|n<<i|r,Dn=e}function np(e){e.return!==null&&(Or(e,1),Nv(e,1,0))}function rp(e){for(;e===vl;)vl=Ti[--_i],Ti[_i]=null,bl=Ti[--_i],Ti[_i]=null;for(;e===si;)si=Bt[--Vt],Bt[Vt]=null,Dn=Bt[--Vt],Bt[Vt]=null,Ln=Bt[--Vt],Bt[Vt]=null}var Nt=null,At=null,Te=!1,Jt=null;function Pv(e,t){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Nt=e,At=yr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Nt=e,At=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=si!==null?{id:Ln,overflow:Dn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Nt=e,At=null,!0):!1;default:return!1}}function Td(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _d(e){if(Te){var t=At;if(t){var n=t;if(!Hm(e,t)){if(Td(e))throw Error(F(418));t=yr(n.nextSibling);var r=Nt;t&&Hm(e,t)?Pv(r,n):(e.flags=e.flags&-4097|2,Te=!1,Nt=e)}}else{if(Td(e))throw Error(F(418));e.flags=e.flags&-4097|2,Te=!1,Nt=e}}}function Wm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Nt=e}function xo(e){if(e!==Nt)return!1;if(!Te)return Wm(e),Te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!kd(e.type,e.memoizedProps)),t&&(t=At)){if(Td(e))throw jv(),Error(F(418));for(;t;)Pv(e,t),t=yr(t.nextSibling)}if(Wm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){At=yr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}At=null}}else At=Nt?yr(e.stateNode.nextSibling):null;return!0}function jv(){for(var e=At;e;)e=yr(e.nextSibling)}function Xi(){At=Nt=null,Te=!1}function ip(e){Jt===null?Jt=[e]:Jt.push(e)}var HE=Qn.ReactCurrentBatchConfig;function _s(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var o=i.refs;a===null?delete o[s]:o[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function vo(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gm(e){var t=e._init;return t(e._payload)}function Rv(e){function t(g,m){if(e){var x=g.deletions;x===null?(g.deletions=[m],g.flags|=16):x.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=wr(g,m),g.index=0,g.sibling=null,g}function s(g,m,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<m?(g.flags|=2,m):x):(g.flags|=2,m)):(g.flags|=1048576,m)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function o(g,m,x,v){return m===null||m.tag!==6?(m=lc(x,g.mode,v),m.return=g,m):(m=i(m,x),m.return=g,m)}function l(g,m,x,v){var E=x.type;return E===bi?d(g,m,x.props.children,v,x.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===rr&&Gm(E)===m.type)?(v=i(m,x.props),v.ref=_s(g,m,x),v.return=g,v):(v=Ko(x.type,x.key,x.props,null,g.mode,v),v.ref=_s(g,m,x),v.return=g,v)}function u(g,m,x,v){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=uc(x,g.mode,v),m.return=g,m):(m=i(m,x.children||[]),m.return=g,m)}function d(g,m,x,v,E){return m===null||m.tag!==7?(m=Jr(x,g.mode,v,E),m.return=g,m):(m=i(m,x),m.return=g,m)}function f(g,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=lc(""+m,g.mode,x),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case oo:return x=Ko(m.type,m.key,m.props,null,g.mode,x),x.ref=_s(g,null,m),x.return=g,x;case vi:return m=uc(m,g.mode,x),m.return=g,m;case rr:var v=m._init;return f(g,v(m._payload),x)}if(Ds(m)||ks(m))return m=Jr(m,g.mode,x,null),m.return=g,m;vo(g,m)}return null}function p(g,m,x,v){var E=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:o(g,m,""+x,v);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case oo:return x.key===E?l(g,m,x,v):null;case vi:return x.key===E?u(g,m,x,v):null;case rr:return E=x._init,p(g,m,E(x._payload),v)}if(Ds(x)||ks(x))return E!==null?null:d(g,m,x,v,null);vo(g,x)}return null}function h(g,m,x,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return g=g.get(x)||null,o(m,g,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case oo:return g=g.get(v.key===null?x:v.key)||null,l(m,g,v,E);case vi:return g=g.get(v.key===null?x:v.key)||null,u(m,g,v,E);case rr:var w=v._init;return h(g,m,x,w(v._payload),E)}if(Ds(v)||ks(v))return g=g.get(x)||null,d(m,g,v,E,null);vo(m,v)}return null}function y(g,m,x,v){for(var E=null,w=null,I=m,P=m=0,R=null;I!==null&&P<x.length;P++){I.index>P?(R=I,I=null):R=I.sibling;var _=p(g,I,x[P],v);if(_===null){I===null&&(I=R);break}e&&I&&_.alternate===null&&t(g,I),m=s(_,m,P),w===null?E=_:w.sibling=_,w=_,I=R}if(P===x.length)return n(g,I),Te&&Or(g,P),E;if(I===null){for(;P<x.length;P++)I=f(g,x[P],v),I!==null&&(m=s(I,m,P),w===null?E=I:w.sibling=I,w=I);return Te&&Or(g,P),E}for(I=r(g,I);P<x.length;P++)R=h(I,g,P,x[P],v),R!==null&&(e&&R.alternate!==null&&I.delete(R.key===null?P:R.key),m=s(R,m,P),w===null?E=R:w.sibling=R,w=R);return e&&I.forEach(function(j){return t(g,j)}),Te&&Or(g,P),E}function b(g,m,x,v){var E=ks(x);if(typeof E!="function")throw Error(F(150));if(x=E.call(x),x==null)throw Error(F(151));for(var w=E=null,I=m,P=m=0,R=null,_=x.next();I!==null&&!_.done;P++,_=x.next()){I.index>P?(R=I,I=null):R=I.sibling;var j=p(g,I,_.value,v);if(j===null){I===null&&(I=R);break}e&&I&&j.alternate===null&&t(g,I),m=s(j,m,P),w===null?E=j:w.sibling=j,w=j,I=R}if(_.done)return n(g,I),Te&&Or(g,P),E;if(I===null){for(;!_.done;P++,_=x.next())_=f(g,_.value,v),_!==null&&(m=s(_,m,P),w===null?E=_:w.sibling=_,w=_);return Te&&Or(g,P),E}for(I=r(g,I);!_.done;P++,_=x.next())_=h(I,g,P,_.value,v),_!==null&&(e&&_.alternate!==null&&I.delete(_.key===null?P:_.key),m=s(_,m,P),w===null?E=_:w.sibling=_,w=_);return e&&I.forEach(function(U){return t(g,U)}),Te&&Or(g,P),E}function S(g,m,x,v){if(typeof x=="object"&&x!==null&&x.type===bi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case oo:e:{for(var E=x.key,w=m;w!==null;){if(w.key===E){if(E=x.type,E===bi){if(w.tag===7){n(g,w.sibling),m=i(w,x.props.children),m.return=g,g=m;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===rr&&Gm(E)===w.type){n(g,w.sibling),m=i(w,x.props),m.ref=_s(g,w,x),m.return=g,g=m;break e}n(g,w);break}else t(g,w);w=w.sibling}x.type===bi?(m=Jr(x.props.children,g.mode,v,x.key),m.return=g,g=m):(v=Ko(x.type,x.key,x.props,null,g.mode,v),v.ref=_s(g,m,x),v.return=g,g=v)}return a(g);case vi:e:{for(w=x.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(g,m.sibling),m=i(m,x.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=uc(x,g.mode,v),m.return=g,g=m}return a(g);case rr:return w=x._init,S(g,m,w(x._payload),v)}if(Ds(x))return y(g,m,x,v);if(ks(x))return b(g,m,x,v);vo(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,x),m.return=g,g=m):(n(g,m),m=lc(x,g.mode,v),m.return=g,g=m),a(g)):n(g,m)}return S}var Qi=Rv(!0),Lv=Rv(!1),wl=Ir(null),kl=null,Ai=null,sp=null;function ap(){sp=Ai=kl=null}function op(e){var t=wl.current;Se(wl),e._currentValue=t}function Ad(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Bi(e,t){kl=e,sp=Ai=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(bt=!0),e.firstContext=null)}function Gt(e){var t=e._currentValue;if(sp!==e)if(e={context:e,memoizedValue:t,next:null},Ai===null){if(kl===null)throw Error(F(308));Ai=e,kl.dependencies={lanes:0,firstContext:e}}else Ai=Ai.next=e;return t}var qr=null;function lp(e){qr===null?qr=[e]:qr.push(e)}function Dv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,lp(t)):(n.next=i.next,i.next=n),t.interleaved=n,Wn(e,r)}function Wn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ir=!1;function up(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Un(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Wn(e,n)}return i=r.interleaved,i===null?(t.next=t,lp(r)):(t.next=i.next,i.next=t),r.interleaved=t,Wn(e,n)}function Vo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kf(e,n)}}function qm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Sl(e,t,n,r){var i=e.updateQueue;ir=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;a=0,d=u=l=null,o=s;do{var p=o.lane,h=o.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:h,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=e,b=o;switch(p=t,h=n,b.tag){case 1:if(y=b.payload,typeof y=="function"){f=y.call(h,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,p=typeof y=="function"?y.call(h,f,p):y,p==null)break e;f=je({},f,p);break e;case 2:ir=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[o]:p.push(o))}else h={eventTime:h,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=h,l=f):d=d.next=h,a|=p;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;p=o,o=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);oi|=a,e.lanes=a,e.memoizedState=f}}function Km(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Ha={},vn=Ir(Ha),va=Ir(Ha),ba=Ir(Ha);function Kr(e){if(e===Ha)throw Error(F(174));return e}function cp(e,t){switch(we(ba,t),we(va,e),we(vn,Ha),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ld(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ld(t,e)}Se(vn),we(vn,t)}function Zi(){Se(vn),Se(va),Se(ba)}function Fv(e){Kr(ba.current);var t=Kr(vn.current),n=ld(t,e.type);t!==n&&(we(va,e),we(vn,n))}function dp(e){va.current===e&&(Se(vn),Se(va))}var Ie=Ir(0);function El(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nc=[];function fp(){for(var e=0;e<nc.length;e++)nc[e]._workInProgressVersionPrimary=null;nc.length=0}var $o=Qn.ReactCurrentDispatcher,rc=Qn.ReactCurrentBatchConfig,ai=0,Pe=null,He=null,Ge=null,Cl=!1,Ks=!1,wa=0,WE=0;function tt(){throw Error(F(321))}function pp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!un(e[n],t[n]))return!1;return!0}function hp(e,t,n,r,i,s){if(ai=s,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$o.current=e===null||e.memoizedState===null?YE:XE,e=n(r,i),Ks){s=0;do{if(Ks=!1,wa=0,25<=s)throw Error(F(301));s+=1,Ge=He=null,t.updateQueue=null,$o.current=QE,e=n(r,i)}while(Ks)}if($o.current=Tl,t=He!==null&&He.next!==null,ai=0,Ge=He=Pe=null,Cl=!1,t)throw Error(F(300));return e}function mp(){var e=wa!==0;return wa=0,e}function hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Pe.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function qt(){if(He===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=Ge===null?Pe.memoizedState:Ge.next;if(t!==null)Ge=t,He=e;else{if(e===null)throw Error(F(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Ge===null?Pe.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function ka(e,t){return typeof t=="function"?t(e):t}function ic(e){var t=qt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=He,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var o=a=null,l=null,u=s;do{var d=u.lane;if((ai&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=f,a=r):l=l.next=f,Pe.lanes|=d,oi|=d}u=u.next}while(u!==null&&u!==s);l===null?a=r:l.next=o,un(r,t.memoizedState)||(bt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Pe.lanes|=s,oi|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function sc(e){var t=qt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);un(s,t.memoizedState)||(bt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Ov(){}function zv(e,t){var n=Pe,r=qt(),i=t(),s=!un(r.memoizedState,i);if(s&&(r.memoizedState=i,bt=!0),r=r.queue,gp(Vv.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,Sa(9,Bv.bind(null,n,r,i,t),void 0,null),qe===null)throw Error(F(349));ai&30||Uv(n,t,i)}return i}function Uv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bv(e,t,n,r){t.value=n,t.getSnapshot=r,$v(t)&&Hv(e)}function Vv(e,t,n){return n(function(){$v(t)&&Hv(e)})}function $v(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!un(e,n)}catch{return!0}}function Hv(e){var t=Wn(e,1);t!==null&&rn(t,e,1,-1)}function Ym(e){var t=hn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:e},t.queue=e,e=e.dispatch=KE.bind(null,Pe,e),[t.memoizedState,e]}function Sa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wv(){return qt().memoizedState}function Ho(e,t,n,r){var i=hn();Pe.flags|=e,i.memoizedState=Sa(1|t,n,void 0,r===void 0?null:r)}function uu(e,t,n,r){var i=qt();r=r===void 0?null:r;var s=void 0;if(He!==null){var a=He.memoizedState;if(s=a.destroy,r!==null&&pp(r,a.deps)){i.memoizedState=Sa(t,n,s,r);return}}Pe.flags|=e,i.memoizedState=Sa(1|t,n,s,r)}function Xm(e,t){return Ho(8390656,8,e,t)}function gp(e,t){return uu(2048,8,e,t)}function Gv(e,t){return uu(4,2,e,t)}function qv(e,t){return uu(4,4,e,t)}function Kv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yv(e,t,n){return n=n!=null?n.concat([e]):null,uu(4,4,Kv.bind(null,t,e),n)}function yp(){}function Xv(e,t){var n=qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qv(e,t){var n=qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Zv(e,t,n){return ai&21?(un(n,t)||(n=rv(),Pe.lanes|=n,oi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,bt=!0),e.memoizedState=n)}function GE(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var r=rc.transition;rc.transition={};try{e(!1),t()}finally{he=n,rc.transition=r}}function Jv(){return qt().memoizedState}function qE(e,t,n){var r=br(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},eb(e))tb(t,n);else if(n=Dv(e,t,n,r),n!==null){var i=pt();rn(n,e,r,i),nb(n,t,r)}}function KE(e,t,n){var r=br(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(eb(e))tb(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,o=s(a,n);if(i.hasEagerState=!0,i.eagerState=o,un(o,a)){var l=t.interleaved;l===null?(i.next=i,lp(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Dv(e,t,i,r),n!==null&&(i=pt(),rn(n,e,r,i),nb(n,t,r))}}function eb(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function tb(e,t){Ks=Cl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nb(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kf(e,n)}}var Tl={readContext:Gt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},YE={readContext:Gt,useCallback:function(e,t){return hn().memoizedState=[e,t===void 0?null:t],e},useContext:Gt,useEffect:Xm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ho(4194308,4,Kv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ho(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ho(4,2,e,t)},useMemo:function(e,t){var n=hn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=hn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qE.bind(null,Pe,e),[r.memoizedState,e]},useRef:function(e){var t=hn();return e={current:e},t.memoizedState=e},useState:Ym,useDebugValue:yp,useDeferredValue:function(e){return hn().memoizedState=e},useTransition:function(){var e=Ym(!1),t=e[0];return e=GE.bind(null,e[1]),hn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Pe,i=hn();if(Te){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),qe===null)throw Error(F(349));ai&30||Uv(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Xm(Vv.bind(null,r,s,e),[e]),r.flags|=2048,Sa(9,Bv.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=hn(),t=qe.identifierPrefix;if(Te){var n=Dn,r=Ln;n=(r&~(1<<32-nn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=WE++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},XE={readContext:Gt,useCallback:Xv,useContext:Gt,useEffect:gp,useImperativeHandle:Yv,useInsertionEffect:Gv,useLayoutEffect:qv,useMemo:Qv,useReducer:ic,useRef:Wv,useState:function(){return ic(ka)},useDebugValue:yp,useDeferredValue:function(e){var t=qt();return Zv(t,He.memoizedState,e)},useTransition:function(){var e=ic(ka)[0],t=qt().memoizedState;return[e,t]},useMutableSource:Ov,useSyncExternalStore:zv,useId:Jv,unstable_isNewReconciler:!1},QE={readContext:Gt,useCallback:Xv,useContext:Gt,useEffect:gp,useImperativeHandle:Yv,useInsertionEffect:Gv,useLayoutEffect:qv,useMemo:Qv,useReducer:sc,useRef:Wv,useState:function(){return sc(ka)},useDebugValue:yp,useDeferredValue:function(e){var t=qt();return He===null?t.memoizedState=e:Zv(t,He.memoizedState,e)},useTransition:function(){var e=sc(ka)[0],t=qt().memoizedState;return[e,t]},useMutableSource:Ov,useSyncExternalStore:zv,useId:Jv,unstable_isNewReconciler:!1};function Qt(e,t){if(e&&e.defaultProps){t=je({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Id(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:je({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cu={isMounted:function(e){return(e=e._reactInternals)?pi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pt(),i=br(e),s=Un(r,i);s.payload=t,n!=null&&(s.callback=n),t=xr(e,s,i),t!==null&&(rn(t,e,i,r),Vo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pt(),i=br(e),s=Un(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=xr(e,s,i),t!==null&&(rn(t,e,i,r),Vo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pt(),r=br(e),i=Un(n,r);i.tag=2,t!=null&&(i.callback=t),t=xr(e,i,r),t!==null&&(rn(t,e,r,n),Vo(t,e,r))}};function Qm(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!ma(n,r)||!ma(i,s):!0}function rb(e,t,n){var r=!1,i=Cr,s=t.contextType;return typeof s=="object"&&s!==null?s=Gt(s):(i=kt(t)?ii:lt.current,r=t.contextTypes,s=(r=r!=null)?Yi(e,i):Cr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Zm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cu.enqueueReplaceState(t,t.state,null)}function Nd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},up(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Gt(s):(s=kt(t)?ii:lt.current,i.context=Yi(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Id(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&cu.enqueueReplaceState(i,i.state,null),Sl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ji(e,t){try{var n="",r=t;do n+=CS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function ac(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ZE=typeof WeakMap=="function"?WeakMap:Map;function ib(e,t,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Al||(Al=!0,Bd=r),Pd(e,t)},n}function sb(e,t,n){n=Un(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Pd(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pd(e,t),typeof r!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Jm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ZE;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=fC.bind(null,e,t,n),t.then(e,e))}function eg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tg(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Un(-1,1),t.tag=2,xr(n,t,1))),n.lanes|=1),e)}var JE=Qn.ReactCurrentOwner,bt=!1;function dt(e,t,n,r){t.child=e===null?Lv(t,null,n,r):Qi(t,e.child,n,r)}function ng(e,t,n,r,i){n=n.render;var s=t.ref;return Bi(t,i),r=hp(e,t,n,r,s,i),n=mp(),e!==null&&!bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gn(e,t,i)):(Te&&n&&np(t),t.flags|=1,dt(e,t,r,i),t.child)}function rg(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Cp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,ab(e,t,s,r,i)):(e=Ko(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ma,n(a,r)&&e.ref===t.ref)return Gn(e,t,i)}return t.flags|=1,e=wr(s,r),e.ref=t.ref,e.return=t,t.child=e}function ab(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(ma(s,r)&&e.ref===t.ref)if(bt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(bt=!0);else return t.lanes=e.lanes,Gn(e,t,i)}return jd(e,t,n,r,i)}function ob(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Ni,_t),_t|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,we(Ni,_t),_t|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(Ni,_t),_t|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,we(Ni,_t),_t|=r;return dt(e,t,i,n),t.child}function lb(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function jd(e,t,n,r,i){var s=kt(n)?ii:lt.current;return s=Yi(t,s),Bi(t,i),n=hp(e,t,n,r,s,i),r=mp(),e!==null&&!bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gn(e,t,i)):(Te&&r&&np(t),t.flags|=1,dt(e,t,n,i),t.child)}function ig(e,t,n,r,i){if(kt(n)){var s=!0;xl(t)}else s=!1;if(Bi(t,i),t.stateNode===null)Wo(e,t),rb(t,n,r),Nd(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,o=t.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Gt(u):(u=kt(n)?ii:lt.current,u=Yi(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||l!==u)&&Zm(t,a,r,u),ir=!1;var p=t.memoizedState;a.state=p,Sl(t,r,a,i),l=t.memoizedState,o!==r||p!==l||wt.current||ir?(typeof d=="function"&&(Id(t,n,d,r),l=t.memoizedState),(o=ir||Qm(t,n,o,r,p,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=o):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Mv(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:Qt(t.type,o),a.props=u,f=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gt(l):(l=kt(n)?ii:lt.current,l=Yi(t,l));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||p!==l)&&Zm(t,a,r,l),ir=!1,p=t.memoizedState,a.state=p,Sl(t,r,a,i);var y=t.memoizedState;o!==f||p!==y||wt.current||ir?(typeof h=="function"&&(Id(t,n,h,r),y=t.memoizedState),(u=ir||Qm(t,n,u,r,p,y,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Rd(e,t,n,r,s,i)}function Rd(e,t,n,r,i,s){lb(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&$m(t,n,!1),Gn(e,t,s);r=t.stateNode,JE.current=t;var o=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Qi(t,e.child,null,s),t.child=Qi(t,null,o,s)):dt(e,t,o,s),t.memoizedState=r.state,i&&$m(t,n,!0),t.child}function ub(e){var t=e.stateNode;t.pendingContext?Vm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vm(e,t.context,!1),cp(e,t.containerInfo)}function sg(e,t,n,r,i){return Xi(),ip(i),t.flags|=256,dt(e,t,n,r),t.child}var Ld={dehydrated:null,treeContext:null,retryLane:0};function Dd(e){return{baseLanes:e,cachePool:null,transitions:null}}function cb(e,t,n){var r=t.pendingProps,i=Ie.current,s=!1,a=(t.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),we(Ie,i&1),e===null)return _d(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=pu(a,r,0,null),e=Jr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Dd(n),t.memoizedState=Ld,e):xp(t,a));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return eC(e,t,a,r,o,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,o=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=wr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?s=wr(o,s):(s=Jr(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?Dd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=Ld,r}return s=e.child,e=s.sibling,r=wr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function xp(e,t){return t=pu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bo(e,t,n,r){return r!==null&&ip(r),Qi(t,e.child,null,n),e=xp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function eC(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=ac(Error(F(422))),bo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=pu({mode:"visible",children:r.children},i,0,null),s=Jr(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Qi(t,e.child,null,a),t.child.memoizedState=Dd(a),t.memoizedState=Ld,s);if(!(t.mode&1))return bo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,s=Error(F(419)),r=ac(s,r,void 0),bo(e,t,a,r)}if(o=(a&e.childLanes)!==0,bt||o){if(r=qe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wn(e,i),rn(r,e,i,-1))}return Ep(),r=ac(Error(F(421))),bo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=pC.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,At=yr(i.nextSibling),Nt=t,Te=!0,Jt=null,e!==null&&(Bt[Vt++]=Ln,Bt[Vt++]=Dn,Bt[Vt++]=si,Ln=e.id,Dn=e.overflow,si=t),t=xp(t,r.children),t.flags|=4096,t)}function ag(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ad(e.return,t,n)}function oc(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function db(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(dt(e,t,r.children,n),r=Ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ag(e,n,t);else if(e.tag===19)ag(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(we(Ie,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&El(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),oc(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&El(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}oc(t,!0,n,null,s);break;case"together":oc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),oi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=wr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function tC(e,t,n){switch(t.tag){case 3:ub(t),Xi();break;case 5:Fv(t);break;case 1:kt(t.type)&&xl(t);break;case 4:cp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;we(wl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(we(Ie,Ie.current&1),t.flags|=128,null):n&t.child.childLanes?cb(e,t,n):(we(Ie,Ie.current&1),e=Gn(e,t,n),e!==null?e.sibling:null);we(Ie,Ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return db(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Ie,Ie.current),r)break;return null;case 22:case 23:return t.lanes=0,ob(e,t,n)}return Gn(e,t,n)}var fb,Md,pb,hb;fb=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Md=function(){};pb=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Kr(vn.current);var s=null;switch(n){case"input":i=id(e,i),r=id(e,r),s=[];break;case"select":i=je({},i,{value:void 0}),r=je({},r,{value:void 0}),s=[];break;case"textarea":i=od(e,i),r=od(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=gl)}ud(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(la.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(o=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(la.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ke("scroll",e),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};hb=function(e,t,n,r){n!==r&&(t.flags|=4)};function As(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function nC(e,t,n){var r=t.pendingProps;switch(rp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return kt(t.type)&&yl(),nt(t),null;case 3:return r=t.stateNode,Zi(),Se(wt),Se(lt),fp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Jt!==null&&(Hd(Jt),Jt=null))),Md(e,t),nt(t),null;case 5:dp(t);var i=Kr(ba.current);if(n=t.type,e!==null&&t.stateNode!=null)pb(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(F(166));return nt(t),null}if(e=Kr(vn.current),xo(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[gn]=t,r[xa]=s,e=(t.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<Fs.length;i++)ke(Fs[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":mm(r,s),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ke("invalid",r);break;case"textarea":ym(r,s),ke("invalid",r)}ud(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?r.textContent!==o&&(s.suppressHydrationWarning!==!0&&yo(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&yo(r.textContent,o,e),i=["children",""+o]):la.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ke("scroll",r)}switch(n){case"input":lo(r),gm(r,s,!0);break;case"textarea":lo(r),xm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=gl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=V0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[gn]=t,e[xa]=r,fb(e,t,!1,!1),t.stateNode=e;e:{switch(a=cd(n,r),n){case"dialog":ke("cancel",e),ke("close",e),i=r;break;case"iframe":case"object":case"embed":ke("load",e),i=r;break;case"video":case"audio":for(i=0;i<Fs.length;i++)ke(Fs[i],e);i=r;break;case"source":ke("error",e),i=r;break;case"img":case"image":case"link":ke("error",e),ke("load",e),i=r;break;case"details":ke("toggle",e),i=r;break;case"input":mm(e,r),i=id(e,r),ke("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=je({},r,{value:void 0}),ke("invalid",e);break;case"textarea":ym(e,r),i=od(e,r),ke("invalid",e);break;default:i=r}ud(n,i),o=i;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?W0(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$0(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ua(e,l):typeof l=="number"&&ua(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(la.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ke("scroll",e):l!=null&&Vf(e,s,l,a))}switch(n){case"input":lo(e),gm(e,r,!1);break;case"textarea":lo(e),xm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Er(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Fi(e,!!r.multiple,s,!1):r.defaultValue!=null&&Fi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)hb(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(F(166));if(n=Kr(ba.current),Kr(vn.current),xo(t)){if(r=t.stateNode,n=t.memoizedProps,r[gn]=t,(s=r.nodeValue!==n)&&(e=Nt,e!==null))switch(e.tag){case 3:yo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yo(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gn]=t,t.stateNode=r}return nt(t),null;case 13:if(Se(Ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Te&&At!==null&&t.mode&1&&!(t.flags&128))jv(),Xi(),t.flags|=98560,s=!1;else if(s=xo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(F(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[gn]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;nt(t),s=!1}else Jt!==null&&(Hd(Jt),Jt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ie.current&1?We===0&&(We=3):Ep())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return Zi(),Md(e,t),e===null&&ga(t.stateNode.containerInfo),nt(t),null;case 10:return op(t.type._context),nt(t),null;case 17:return kt(t.type)&&yl(),nt(t),null;case 19:if(Se(Ie),s=t.memoizedState,s===null)return nt(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)As(s,!1);else{if(We!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=El(e),a!==null){for(t.flags|=128,As(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return we(Ie,Ie.current&1|2),t.child}e=e.sibling}s.tail!==null&&ze()>es&&(t.flags|=128,r=!0,As(s,!1),t.lanes=4194304)}else{if(!r)if(e=El(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),As(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Te)return nt(t),null}else 2*ze()-s.renderingStartTime>es&&n!==1073741824&&(t.flags|=128,r=!0,As(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ze(),t.sibling=null,n=Ie.current,we(Ie,r?n&1|2:n&1),t):(nt(t),null);case 22:case 23:return Sp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_t&1073741824&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function rC(e,t){switch(rp(t),t.tag){case 1:return kt(t.type)&&yl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(),Se(wt),Se(lt),fp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return dp(t),null;case 13:if(Se(Ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(Ie),null;case 4:return Zi(),null;case 10:return op(t.type._context),null;case 22:case 23:return Sp(),null;case 24:return null;default:return null}}var wo=!1,it=!1,iC=typeof WeakSet=="function"?WeakSet:Set,W=null;function Ii(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(e,t,r)}else n.current=null}function Fd(e,t,n){try{n()}catch(r){De(e,t,r)}}var og=!1;function sC(e,t){if(bd=pl,e=vv(),tp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(o=a+i),f!==s||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===i&&(o=a),p===s&&++d===r&&(l=a),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wd={focusedElem:e,selectionRange:n},pl=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,S=y.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:Qt(t.type,b),S);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(v){De(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return y=og,og=!1,y}function Ys(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Fd(t,n,s)}i=i.next}while(i!==r)}}function du(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Od(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mb(e){var t=e.alternate;t!==null&&(e.alternate=null,mb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gn],delete t[xa],delete t[Ed],delete t[BE],delete t[VE])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gb(e){return e.tag===5||e.tag===3||e.tag===4}function lg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gl));else if(r!==4&&(e=e.child,e!==null))for(zd(e,t,n),e=e.sibling;e!==null;)zd(e,t,n),e=e.sibling}function Ud(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ud(e,t,n),e=e.sibling;e!==null;)Ud(e,t,n),e=e.sibling}var Xe=null,Zt=!1;function Jn(e,t,n){for(n=n.child;n!==null;)yb(e,t,n),n=n.sibling}function yb(e,t,n){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(ru,n)}catch{}switch(n.tag){case 5:it||Ii(n,t);case 6:var r=Xe,i=Zt;Xe=null,Jn(e,t,n),Xe=r,Zt=i,Xe!==null&&(Zt?(e=Xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(Zt?(e=Xe,n=n.stateNode,e.nodeType===8?ec(e.parentNode,n):e.nodeType===1&&ec(e,n),pa(e)):ec(Xe,n.stateNode));break;case 4:r=Xe,i=Zt,Xe=n.stateNode.containerInfo,Zt=!0,Jn(e,t,n),Xe=r,Zt=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Fd(n,t,a),i=i.next}while(i!==r)}Jn(e,t,n);break;case 1:if(!it&&(Ii(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){De(n,t,o)}Jn(e,t,n);break;case 21:Jn(e,t,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,Jn(e,t,n),it=r):Jn(e,t,n);break;default:Jn(e,t,n)}}function ug(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new iC),t.forEach(function(r){var i=hC.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,o=a;e:for(;o!==null;){switch(o.tag){case 5:Xe=o.stateNode,Zt=!1;break e;case 3:Xe=o.stateNode.containerInfo,Zt=!0;break e;case 4:Xe=o.stateNode.containerInfo,Zt=!0;break e}o=o.return}if(Xe===null)throw Error(F(160));yb(s,a,i),Xe=null,Zt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){De(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xb(t,e),t=t.sibling}function xb(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kt(t,e),pn(e),r&4){try{Ys(3,e,e.return),du(3,e)}catch(b){De(e,e.return,b)}try{Ys(5,e,e.return)}catch(b){De(e,e.return,b)}}break;case 1:Kt(t,e),pn(e),r&512&&n!==null&&Ii(n,n.return);break;case 5:if(Kt(t,e),pn(e),r&512&&n!==null&&Ii(n,n.return),e.flags&32){var i=e.stateNode;try{ua(i,"")}catch(b){De(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,o=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&U0(i,s),cd(o,a);var u=cd(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?W0(i,f):d==="dangerouslySetInnerHTML"?$0(i,f):d==="children"?ua(i,f):Vf(i,d,f,u)}switch(o){case"input":sd(i,s);break;case"textarea":B0(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Fi(i,!!s.multiple,h,!1):p!==!!s.multiple&&(s.defaultValue!=null?Fi(i,!!s.multiple,s.defaultValue,!0):Fi(i,!!s.multiple,s.multiple?[]:"",!1))}i[xa]=s}catch(b){De(e,e.return,b)}}break;case 6:if(Kt(t,e),pn(e),r&4){if(e.stateNode===null)throw Error(F(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(b){De(e,e.return,b)}}break;case 3:if(Kt(t,e),pn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pa(t.containerInfo)}catch(b){De(e,e.return,b)}break;case 4:Kt(t,e),pn(e);break;case 13:Kt(t,e),pn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(wp=ze())),r&4&&ug(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(it=(u=it)||d,Kt(t,e),it=u):Kt(t,e),pn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(W=e,d=e.child;d!==null;){for(f=W=d;W!==null;){switch(p=W,h=p.child,p.tag){case 0:case 11:case 14:case 15:Ys(4,p,p.return);break;case 1:Ii(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(b){De(r,n,b)}}break;case 5:Ii(p,p.return);break;case 22:if(p.memoizedState!==null){dg(f);continue}}h!==null?(h.return=p,W=h):dg(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=H0("display",a))}catch(b){De(e,e.return,b)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(b){De(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Kt(t,e),pn(e),r&4&&ug(e);break;case 21:break;default:Kt(t,e),pn(e)}}function pn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gb(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ua(i,""),r.flags&=-33);var s=lg(e);Ud(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,o=lg(e);zd(e,o,a);break;default:throw Error(F(161))}}catch(l){De(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function aC(e,t,n){W=e,vb(e)}function vb(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||wo;if(!a){var o=i.alternate,l=o!==null&&o.memoizedState!==null||it;o=wo;var u=it;if(wo=a,(it=l)&&!u)for(W=i;W!==null;)a=W,l=a.child,a.tag===22&&a.memoizedState!==null?fg(i):l!==null?(l.return=a,W=l):fg(i);for(;s!==null;)W=s,vb(s),s=s.sibling;W=i,wo=o,it=u}cg(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):cg(e)}}function cg(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||du(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Qt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Km(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Km(t,a,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&pa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}it||t.flags&512&&Od(t)}catch(p){De(t,t.return,p)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function dg(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function fg(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{du(4,t)}catch(l){De(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){De(t,i,l)}}var s=t.return;try{Od(t)}catch(l){De(t,s,l)}break;case 5:var a=t.return;try{Od(t)}catch(l){De(t,a,l)}}}catch(l){De(t,t.return,l)}if(t===e){W=null;break}var o=t.sibling;if(o!==null){o.return=t.return,W=o;break}W=t.return}}var oC=Math.ceil,_l=Qn.ReactCurrentDispatcher,vp=Qn.ReactCurrentOwner,Wt=Qn.ReactCurrentBatchConfig,ce=0,qe=null,Be=null,Ze=0,_t=0,Ni=Ir(0),We=0,Ea=null,oi=0,fu=0,bp=0,Xs=null,vt=null,wp=0,es=1/0,jn=null,Al=!1,Bd=null,vr=null,ko=!1,fr=null,Il=0,Qs=0,Vd=null,Go=-1,qo=0;function pt(){return ce&6?ze():Go!==-1?Go:Go=ze()}function br(e){return e.mode&1?ce&2&&Ze!==0?Ze&-Ze:HE.transition!==null?(qo===0&&(qo=rv()),qo):(e=he,e!==0||(e=window.event,e=e===void 0?16:cv(e.type)),e):1}function rn(e,t,n,r){if(50<Qs)throw Qs=0,Vd=null,Error(F(185));Ba(e,n,r),(!(ce&2)||e!==qe)&&(e===qe&&(!(ce&2)&&(fu|=n),We===4&&or(e,Ze)),St(e,r),n===1&&ce===0&&!(t.mode&1)&&(es=ze()+500,lu&&Nr()))}function St(e,t){var n=e.callbackNode;HS(e,t);var r=fl(e,e===qe?Ze:0);if(r===0)n!==null&&wm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&wm(n),t===1)e.tag===0?$E(pg.bind(null,e)):Iv(pg.bind(null,e)),zE(function(){!(ce&6)&&Nr()}),n=null;else{switch(iv(r)){case 1:n=qf;break;case 4:n=tv;break;case 16:n=dl;break;case 536870912:n=nv;break;default:n=dl}n=_b(n,bb.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function bb(e,t){if(Go=-1,qo=0,ce&6)throw Error(F(327));var n=e.callbackNode;if(Vi()&&e.callbackNode!==n)return null;var r=fl(e,e===qe?Ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Nl(e,r);else{t=r;var i=ce;ce|=2;var s=kb();(qe!==e||Ze!==t)&&(jn=null,es=ze()+500,Zr(e,t));do try{cC();break}catch(o){wb(e,o)}while(!0);ap(),_l.current=s,ce=i,Be!==null?t=0:(qe=null,Ze=0,t=We)}if(t!==0){if(t===2&&(i=md(e),i!==0&&(r=i,t=$d(e,i))),t===1)throw n=Ea,Zr(e,0),or(e,r),St(e,ze()),n;if(t===6)or(e,r);else{if(i=e.current.alternate,!(r&30)&&!lC(i)&&(t=Nl(e,r),t===2&&(s=md(e),s!==0&&(r=s,t=$d(e,s))),t===1))throw n=Ea,Zr(e,0),or(e,r),St(e,ze()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(F(345));case 2:zr(e,vt,jn);break;case 3:if(or(e,r),(r&130023424)===r&&(t=wp+500-ze(),10<t)){if(fl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){pt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Sd(zr.bind(null,e,vt,jn),t);break}zr(e,vt,jn);break;case 4:if(or(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-nn(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*oC(r/1960))-r,10<r){e.timeoutHandle=Sd(zr.bind(null,e,vt,jn),r);break}zr(e,vt,jn);break;case 5:zr(e,vt,jn);break;default:throw Error(F(329))}}}return St(e,ze()),e.callbackNode===n?bb.bind(null,e):null}function $d(e,t){var n=Xs;return e.current.memoizedState.isDehydrated&&(Zr(e,t).flags|=256),e=Nl(e,t),e!==2&&(t=vt,vt=n,t!==null&&Hd(t)),e}function Hd(e){vt===null?vt=e:vt.push.apply(vt,e)}function lC(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!un(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function or(e,t){for(t&=~bp,t&=~fu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nn(t),r=1<<n;e[n]=-1,t&=~r}}function pg(e){if(ce&6)throw Error(F(327));Vi();var t=fl(e,0);if(!(t&1))return St(e,ze()),null;var n=Nl(e,t);if(e.tag!==0&&n===2){var r=md(e);r!==0&&(t=r,n=$d(e,r))}if(n===1)throw n=Ea,Zr(e,0),or(e,t),St(e,ze()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zr(e,vt,jn),St(e,ze()),null}function kp(e,t){var n=ce;ce|=1;try{return e(t)}finally{ce=n,ce===0&&(es=ze()+500,lu&&Nr())}}function li(e){fr!==null&&fr.tag===0&&!(ce&6)&&Vi();var t=ce;ce|=1;var n=Wt.transition,r=he;try{if(Wt.transition=null,he=1,e)return e()}finally{he=r,Wt.transition=n,ce=t,!(ce&6)&&Nr()}}function Sp(){_t=Ni.current,Se(Ni)}function Zr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,OE(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(rp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yl();break;case 3:Zi(),Se(wt),Se(lt),fp();break;case 5:dp(r);break;case 4:Zi();break;case 13:Se(Ie);break;case 19:Se(Ie);break;case 10:op(r.type._context);break;case 22:case 23:Sp()}n=n.return}if(qe=e,Be=e=wr(e.current,null),Ze=_t=t,We=0,Ea=null,bp=fu=oi=0,vt=Xs=null,qr!==null){for(t=0;t<qr.length;t++)if(n=qr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}qr=null}return e}function wb(e,t){do{var n=Be;try{if(ap(),$o.current=Tl,Cl){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cl=!1}if(ai=0,Ge=He=Pe=null,Ks=!1,wa=0,vp.current=null,n===null||n.return===null){We=1,Ea=t,Be=null;break}e:{var s=e,a=n.return,o=n,l=t;if(t=Ze,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=eg(a);if(h!==null){h.flags&=-257,tg(h,a,o,s,t),h.mode&1&&Jm(s,u,t),t=h,l=u;var y=t.updateQueue;if(y===null){var b=new Set;b.add(l),t.updateQueue=b}else y.add(l);break e}else{if(!(t&1)){Jm(s,u,t),Ep();break e}l=Error(F(426))}}else if(Te&&o.mode&1){var S=eg(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),tg(S,a,o,s,t),ip(Ji(l,o));break e}}s=l=Ji(l,o),We!==4&&(We=2),Xs===null?Xs=[s]:Xs.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=ib(s,l,t);qm(s,g);break e;case 1:o=l;var m=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(vr===null||!vr.has(x)))){s.flags|=65536,t&=-t,s.lanes|=t;var v=sb(s,o,t);qm(s,v);break e}}s=s.return}while(s!==null)}Eb(n)}catch(E){t=E,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(!0)}function kb(){var e=_l.current;return _l.current=Tl,e===null?Tl:e}function Ep(){(We===0||We===3||We===2)&&(We=4),qe===null||!(oi&268435455)&&!(fu&268435455)||or(qe,Ze)}function Nl(e,t){var n=ce;ce|=2;var r=kb();(qe!==e||Ze!==t)&&(jn=null,Zr(e,t));do try{uC();break}catch(i){wb(e,i)}while(!0);if(ap(),ce=n,_l.current=r,Be!==null)throw Error(F(261));return qe=null,Ze=0,We}function uC(){for(;Be!==null;)Sb(Be)}function cC(){for(;Be!==null&&!DS();)Sb(Be)}function Sb(e){var t=Tb(e.alternate,e,_t);e.memoizedProps=e.pendingProps,t===null?Eb(e):Be=t,vp.current=null}function Eb(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=rC(n,t),n!==null){n.flags&=32767,Be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{We=6,Be=null;return}}else if(n=nC(n,t,_t),n!==null){Be=n;return}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);We===0&&(We=5)}function zr(e,t,n){var r=he,i=Wt.transition;try{Wt.transition=null,he=1,dC(e,t,n,r)}finally{Wt.transition=i,he=r}return null}function dC(e,t,n,r){do Vi();while(fr!==null);if(ce&6)throw Error(F(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(WS(e,s),e===qe&&(Be=qe=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ko||(ko=!0,_b(dl,function(){return Vi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Wt.transition,Wt.transition=null;var a=he;he=1;var o=ce;ce|=4,vp.current=null,sC(e,n),xb(n,e),PE(wd),pl=!!bd,wd=bd=null,e.current=n,aC(n),MS(),ce=o,he=a,Wt.transition=s}else e.current=n;if(ko&&(ko=!1,fr=e,Il=i),s=e.pendingLanes,s===0&&(vr=null),zS(n.stateNode),St(e,ze()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Al)throw Al=!1,e=Bd,Bd=null,e;return Il&1&&e.tag!==0&&Vi(),s=e.pendingLanes,s&1?e===Vd?Qs++:(Qs=0,Vd=e):Qs=0,Nr(),null}function Vi(){if(fr!==null){var e=iv(Il),t=Wt.transition,n=he;try{if(Wt.transition=null,he=16>e?16:e,fr===null)var r=!1;else{if(e=fr,fr=null,Il=0,ce&6)throw Error(F(331));var i=ce;for(ce|=4,W=e.current;W!==null;){var s=W,a=s.child;if(W.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(W=u;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:Ys(8,d,s)}var f=d.child;if(f!==null)f.return=d,W=f;else for(;W!==null;){d=W;var p=d.sibling,h=d.return;if(mb(d),d===u){W=null;break}if(p!==null){p.return=h,W=p;break}W=h}}}var y=s.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var S=b.sibling;b.sibling=null,b=S}while(b!==null)}}W=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,W=a;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ys(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,W=g;break e}W=s.return}}var m=e.current;for(W=m;W!==null;){a=W;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,W=x;else e:for(a=m;W!==null;){if(o=W,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:du(9,o)}}catch(E){De(o,o.return,E)}if(o===a){W=null;break e}var v=o.sibling;if(v!==null){v.return=o.return,W=v;break e}W=o.return}}if(ce=i,Nr(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(ru,e)}catch{}r=!0}return r}finally{he=n,Wt.transition=t}}return!1}function hg(e,t,n){t=Ji(n,t),t=ib(e,t,1),e=xr(e,t,1),t=pt(),e!==null&&(Ba(e,1,t),St(e,t))}function De(e,t,n){if(e.tag===3)hg(e,e,n);else for(;t!==null;){if(t.tag===3){hg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vr===null||!vr.has(r))){e=Ji(n,e),e=sb(t,e,1),t=xr(t,e,1),e=pt(),t!==null&&(Ba(t,1,e),St(t,e));break}}t=t.return}}function fC(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pt(),e.pingedLanes|=e.suspendedLanes&n,qe===e&&(Ze&n)===n&&(We===4||We===3&&(Ze&130023424)===Ze&&500>ze()-wp?Zr(e,0):bp|=n),St(e,t)}function Cb(e,t){t===0&&(e.mode&1?(t=fo,fo<<=1,!(fo&130023424)&&(fo=4194304)):t=1);var n=pt();e=Wn(e,t),e!==null&&(Ba(e,t,n),St(e,n))}function pC(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cb(e,n)}function hC(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(t),Cb(e,n)}var Tb;Tb=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||wt.current)bt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return bt=!1,tC(e,t,n);bt=!!(e.flags&131072)}else bt=!1,Te&&t.flags&1048576&&Nv(t,bl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wo(e,t),e=t.pendingProps;var i=Yi(t,lt.current);Bi(t,n),i=hp(null,t,r,e,i,n);var s=mp();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,kt(r)?(s=!0,xl(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,up(t),i.updater=cu,t.stateNode=i,i._reactInternals=t,Nd(t,r,e,n),t=Rd(null,t,r,!0,s,n)):(t.tag=0,Te&&s&&np(t),dt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=gC(r),e=Qt(r,e),i){case 0:t=jd(null,t,r,e,n);break e;case 1:t=ig(null,t,r,e,n);break e;case 11:t=ng(null,t,r,e,n);break e;case 14:t=rg(null,t,r,Qt(r.type,e),n);break e}throw Error(F(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),jd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),ig(e,t,r,i,n);case 3:e:{if(ub(t),e===null)throw Error(F(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Mv(e,t),Sl(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Ji(Error(F(423)),t),t=sg(e,t,r,n,i);break e}else if(r!==i){i=Ji(Error(F(424)),t),t=sg(e,t,r,n,i);break e}else for(At=yr(t.stateNode.containerInfo.firstChild),Nt=t,Te=!0,Jt=null,n=Lv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xi(),r===i){t=Gn(e,t,n);break e}dt(e,t,r,n)}t=t.child}return t;case 5:return Fv(t),e===null&&_d(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,kd(r,i)?a=null:s!==null&&kd(r,s)&&(t.flags|=32),lb(e,t),dt(e,t,a,n),t.child;case 6:return e===null&&_d(t),null;case 13:return cb(e,t,n);case 4:return cp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qi(t,null,r,n):dt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),ng(e,t,r,i,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,we(wl,r._currentValue),r._currentValue=a,s!==null)if(un(s.value,a)){if(s.children===i.children&&!wt.current){t=Gn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Un(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ad(s.return,n,t),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(F(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Ad(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}dt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Bi(t,n),i=Gt(i),r=r(i),t.flags|=1,dt(e,t,r,n),t.child;case 14:return r=t.type,i=Qt(r,t.pendingProps),i=Qt(r.type,i),rg(e,t,r,i,n);case 15:return ab(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),Wo(e,t),t.tag=1,kt(r)?(e=!0,xl(t)):e=!1,Bi(t,n),rb(t,r,i),Nd(t,r,i,n),Rd(null,t,r,!0,e,n);case 19:return db(e,t,n);case 22:return ob(e,t,n)}throw Error(F(156,t.tag))};function _b(e,t){return ev(e,t)}function mC(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(e,t,n,r){return new mC(e,t,n,r)}function Cp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gC(e){if(typeof e=="function")return Cp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hf)return 11;if(e===Wf)return 14}return 2}function wr(e,t){var n=e.alternate;return n===null?(n=Ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ko(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")Cp(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case bi:return Jr(n.children,i,s,t);case $f:a=8,i|=8;break;case ed:return e=Ht(12,n,t,i|2),e.elementType=ed,e.lanes=s,e;case td:return e=Ht(13,n,t,i),e.elementType=td,e.lanes=s,e;case nd:return e=Ht(19,n,t,i),e.elementType=nd,e.lanes=s,e;case F0:return pu(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D0:a=10;break e;case M0:a=9;break e;case Hf:a=11;break e;case Wf:a=14;break e;case rr:a=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=Ht(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Jr(e,t,n,r){return e=Ht(7,e,r,t),e.lanes=n,e}function pu(e,t,n,r){return e=Ht(22,e,r,t),e.elementType=F0,e.lanes=n,e.stateNode={isHidden:!1},e}function lc(e,t,n){return e=Ht(6,e,null,t),e.lanes=n,e}function uc(e,t,n){return t=Ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function yC(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$u(0),this.expirationTimes=$u(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$u(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tp(e,t,n,r,i,s,a,o,l){return e=new yC(e,t,n,o,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ht(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},up(s),e}function xC(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ab(e){if(!e)return Cr;e=e._reactInternals;e:{if(pi(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(kt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(kt(n))return Av(e,n,t)}return t}function Ib(e,t,n,r,i,s,a,o,l){return e=Tp(n,r,!0,e,i,s,a,o,l),e.context=Ab(null),n=e.current,r=pt(),i=br(n),s=Un(r,i),s.callback=t??null,xr(n,s,i),e.current.lanes=i,Ba(e,i,r),St(e,r),e}function hu(e,t,n,r){var i=t.current,s=pt(),a=br(i);return n=Ab(n),t.context===null?t.context=n:t.pendingContext=n,t=Un(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xr(i,t,a),e!==null&&(rn(e,i,a,s),Vo(e,i,a)),a}function Pl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _p(e,t){mg(e,t),(e=e.alternate)&&mg(e,t)}function vC(){return null}var Nb=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ap(e){this._internalRoot=e}mu.prototype.render=Ap.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));hu(e,t,null,null)};mu.prototype.unmount=Ap.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;li(function(){hu(null,e,null,null)}),t[Hn]=null}};function mu(e){this._internalRoot=e}mu.prototype.unstable_scheduleHydration=function(e){if(e){var t=ov();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ar.length&&t!==0&&t<ar[n].priority;n++);ar.splice(n,0,e),n===0&&uv(e)}};function Ip(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gg(){}function bC(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Pl(a);s.call(u)}}var a=Ib(t,r,e,0,null,!1,!1,"",gg);return e._reactRootContainer=a,e[Hn]=a.current,ga(e.nodeType===8?e.parentNode:e),li(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var u=Pl(l);o.call(u)}}var l=Tp(e,0,!1,null,null,!1,!1,"",gg);return e._reactRootContainer=l,e[Hn]=l.current,ga(e.nodeType===8?e.parentNode:e),li(function(){hu(t,l,n,r)}),l}function yu(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var o=i;i=function(){var l=Pl(a);o.call(l)}}hu(t,a,e,i)}else a=bC(n,t,e,i,r);return Pl(a)}sv=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ms(t.pendingLanes);n!==0&&(Kf(t,n|1),St(t,ze()),!(ce&6)&&(es=ze()+500,Nr()))}break;case 13:li(function(){var r=Wn(e,1);if(r!==null){var i=pt();rn(r,e,1,i)}}),_p(e,1)}};Yf=function(e){if(e.tag===13){var t=Wn(e,134217728);if(t!==null){var n=pt();rn(t,e,134217728,n)}_p(e,134217728)}};av=function(e){if(e.tag===13){var t=br(e),n=Wn(e,t);if(n!==null){var r=pt();rn(n,e,t,r)}_p(e,t)}};ov=function(){return he};lv=function(e,t){var n=he;try{return he=e,t()}finally{he=n}};fd=function(e,t,n){switch(t){case"input":if(sd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ou(r);if(!i)throw Error(F(90));z0(r),sd(r,i)}}}break;case"textarea":B0(e,n);break;case"select":t=n.value,t!=null&&Fi(e,!!n.multiple,t,!1)}};K0=kp;Y0=li;var wC={usingClientEntryPoint:!1,Events:[$a,Ei,ou,G0,q0,kp]},Is={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kC={bundleType:Is.bundleType,version:Is.version,rendererPackageName:Is.rendererPackageName,rendererConfig:Is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Z0(e),e===null?null:e.stateNode},findFiberByHostInstance:Is.findFiberByHostInstance||vC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var So=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!So.isDisabled&&So.supportsFiber)try{ru=So.inject(kC),xn=So}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wC;Lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ip(t))throw Error(F(200));return xC(e,t,null,n)};Lt.createRoot=function(e,t){if(!Ip(e))throw Error(F(299));var n=!1,r="",i=Nb;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Tp(e,1,!1,null,null,n,!1,r,i),e[Hn]=t.current,ga(e.nodeType===8?e.parentNode:e),new Ap(t)};Lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=Z0(t),e=e===null?null:e.stateNode,e};Lt.flushSync=function(e){return li(e)};Lt.hydrate=function(e,t,n){if(!gu(t))throw Error(F(200));return yu(null,e,t,!0,n)};Lt.hydrateRoot=function(e,t,n){if(!Ip(e))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=Nb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Ib(t,null,e,1,n??null,i,!1,s,a),e[Hn]=t.current,ga(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new mu(t)};Lt.render=function(e,t,n){if(!gu(t))throw Error(F(200));return yu(null,e,t,!1,n)};Lt.unmountComponentAtNode=function(e){if(!gu(e))throw Error(F(40));return e._reactRootContainer?(li(function(){yu(null,null,e,!1,function(){e._reactRootContainer=null,e[Hn]=null})}),!0):!1};Lt.unstable_batchedUpdates=kp;Lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gu(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return yu(e,t,n,!1,r)};Lt.version="18.3.1-next-f1338f8080-20240426";function Pb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pb)}catch(e){console.error(e)}}Pb(),P0.exports=Lt;var SC=P0.exports,jb,yg=SC;jb=yg.createRoot,yg.hydrateRoot;/**
 * react-router v7.18.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Np=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Rb=/^[\\/]{2}/;function EC(e,t){return t+e.replace(/\\/g,"/")}var xg="popstate";function vg(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function CC(e={}){function t(r,i){var u;let s=(u=i.state)==null?void 0:u.masked,{pathname:a,search:o,hash:l}=s||r.location;return Wd("",{pathname:a,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default",s?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,i){return typeof i=="string"?i:ui(i)}return _C(t,n,null,e)}function _e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function cn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function TC(){return Math.random().toString(36).substring(2,10)}function bg(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Wd(e,t,n=null,r,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?ps(t):t,state:n,key:t&&t.key||r||TC(),mask:i}}function ui({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function ps(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function _C(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,o="POP",l=null,u=d();u==null&&(u=0,a.replaceState({...a.state,idx:u},""));function d(){return(a.state||{idx:null}).idx}function f(){o="POP";let S=d(),g=S==null?null:S-u;u=S,l&&l({action:o,location:b.location,delta:g})}function p(S,g){o="PUSH";let m=vg(S)?S:Wd(b.location,S,g);u=d()+1;let x=bg(m,u),v=b.createHref(m.mask||m);try{a.pushState(x,"",v)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(v)}s&&l&&l({action:o,location:b.location,delta:1})}function h(S,g){o="REPLACE";let m=vg(S)?S:Wd(b.location,S,g);u=d();let x=bg(m,u),v=b.createHref(m.mask||m);a.replaceState(x,"",v),s&&l&&l({action:o,location:b.location,delta:0})}function y(S){return AC(i,S)}let b={get action(){return o},get location(){return e(i,a)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(xg,f),l=S,()=>{i.removeEventListener(xg,f),l=null}},createHref(S){return t(i,S)},createURL:y,encodeLocation(S){let g=y(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:h,go(S){return a.go(S)}};return b}function AC(e,t,n=!1){let r="http://localhost";e&&(r=e.location.origin!=="null"?e.location.origin:e.location.href),_e(r,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:ui(t);return i=i.replace(/ $/,"%20"),!n&&Rb.test(i)&&(i=r+i),new URL(i,r)}function Lb(e,t,n="/"){return IC(e,t,n,!1)}function IC(e,t,n,r,i){let s=typeof t=="string"?ps(t):t,a=qn(s.pathname||"/",n);if(a==null)return null;let o=NC(e),l=null,u=BC(a);for(let d=0;l==null&&d<o.length;++d)l=UC(o[d],u,r);return l}function NC(e){let t=Db(e);return PC(t),t}function Db(e,t=[],n=[],r="",i=!1){let s=(a,o,l=i,u)=>{let d={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(r)&&l)return;_e(d.relativePath.startsWith(r),`Absolute route path "${d.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(r.length)}let f=sn([r,d.relativePath]),p=n.concat(d);a.children&&a.children.length>0&&(_e(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),Db(a.children,t,p,f,l)),!(a.path==null&&!a.index)&&t.push({path:f,score:OC(f,a.index),routesMeta:p.map((h,y)=>{let[b,S]=Ob(h.relativePath,h.caseSensitive,y===p.length-1);return{...h,matcher:b,compiledParams:S}})})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,o);else for(let u of Mb(a.path))s(a,o,!0,u)}),t}function Mb(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=Mb(r.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),i&&o.push(...a),o.map(l=>e.startsWith("/")&&l===""?"/":l)}function PC(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:zC(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var jC=/^:[\w-]+$/,RC=3,LC=2,DC=1,MC=10,FC=-2,wg=e=>e==="*";function OC(e,t){let n=e.split("/"),r=n.length;return n.some(wg)&&(r+=FC),t&&(r+=LC),n.filter(i=>!wg(i)).reduce((i,s)=>i+(jC.test(s)?RC:s===""?DC:MC),r)}function zC(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function UC(e,t,n=!1){let{routesMeta:r}=e,i={},s="/",a=[];for(let o=0;o<r.length;++o){let l=r[o],u=o===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",f={path:l.relativePath,caseSensitive:l.caseSensitive,end:u},p=l.matcher&&l.compiledParams?Fb(f,d,l.matcher,l.compiledParams):jl(f,d),h=l.route;if(!p&&u&&n&&!r[r.length-1].route.index&&(p=jl({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:sn([s,p.pathname]),pathnameBase:HC(sn([s,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(s=sn([s,p.pathnameBase]))}return a}function jl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ob(e.path,e.caseSensitive,e.end);return Fb(e,t,n,r)}function Fb(e,t,n,r){let i=t.match(n);if(!i)return null;let s=i[0],a=ts(s,1),o=i.slice(1);return{params:r.reduce((u,{paramName:d,isOptional:f},p)=>{if(d==="*"){let y=o[p]||"";a=ts(s.slice(0,s.length-y.length),1)}const h=o[p];return f&&!h?u[d]=void 0:u[d]=(h||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function Ob(e,t=!1,n=!0){cn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l,u,d)=>{if(r.push({paramName:o,isOptional:l!=null}),l){let f=d.charAt(u+a.length);return f&&f!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function BC(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return cn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function qn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function VC(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ps(e):e,s;return n?(n=zb(n),n.startsWith("/")||n.startsWith("\\")?s=kg(n.substring(1),"/"):s=kg(n,t)):s=t,{pathname:s,search:WC(r),hash:GC(i)}}function kg(e,t){let n=ts(t).split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function cc(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $C(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Pp(e){let t=$C(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function xu(e,t,n,r=!1){let i;typeof e=="string"?i=ps(e):(i={...e},_e(!i.pathname||!i.pathname.includes("?"),cc("?","pathname","search",i)),_e(!i.pathname||!i.pathname.includes("#"),cc("#","pathname","hash",i)),_e(!i.search||!i.search.includes("#"),cc("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,o;if(a==null)o=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}o=f>=0?t[f]:"/"}let l=VC(i,o),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}var zb=e=>e.replace(/[\\/]{2,}/g,"/"),sn=e=>zb(e.join("/"));function ts(e,t=0){let n=e.length;for(;n>t&&e.charCodeAt(n-1)===47;)n--;return n===e.length?e:e.slice(0,n)}var HC=e=>ts(e).replace(/^\/*/,"/"),WC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,GC=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,qC=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function KC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function YC(e){let t=e.map(n=>n.route.path).filter(Boolean);return sn(t)||"/"}var Ub=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Bb(e,t){let n=e;if(typeof n!="string"||!Np.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ub)try{let s=new URL(window.location.href),a=Rb.test(n)?new URL(EC(n,s.protocol)):new URL(n),o=qn(a.pathname,t);a.origin===s.origin&&o!=null?n=o+a.search+a.hash:i=!0}catch{cn(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Sg=new URL("http://localhost");function jp(e){if(e.createURL)return e.createURL("/");try{return new URL(e.createHref("/"),Sg)}catch{return Sg}}function dc(e,t){return e.origin===t.origin&&(e.origin!=="null"||e.protocol===t.protocol&&e.host===t.host)}function XC(e,t){if(e.startsWith("//"))return!0;let n=t.protocol.toLowerCase();return e.toLowerCase().startsWith(n)?t.host===""||e.slice(n.length).startsWith("//"):!1}function Rp(e,t,n,r){let i=null;try{i=e==null?null:new URL(e,n)}catch{}let s=new URL(t,n),a=i!=null&&!dc(i,n),o=!dc(s,n);if(r==="reject"){if(a||o)throw new Error("External navigation is not allowed")}else if(o&&(i==null||!XC(e,i)||!dc(i,s)))throw new Error("External navigation is not allowed")}var Vb=["POST","PUT","PATCH","DELETE"];new Set(Vb);var QC=["GET",...Vb];new Set(QC);var ZC=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function JC(e){try{return ZC.includes(new URL(e).protocol)}catch{return!1}}var hs=C.createContext(null);hs.displayName="DataRouter";var vu=C.createContext(null);vu.displayName="DataRouterState";var $b=C.createContext(!1);function eT(){return C.useContext($b)}var Hb=C.createContext({isTransitioning:!1});Hb.displayName="ViewTransition";var tT=C.createContext(new Map);tT.displayName="Fetchers";var nT=C.createContext(null);nT.displayName="Await";var Mt=C.createContext(null);Mt.displayName="Navigation";var Wa=C.createContext(null);Wa.displayName="Location";var En=C.createContext({outlet:null,matches:[],isDataRoute:!1});En.displayName="Route";var Lp=C.createContext(null);Lp.displayName="RouteError";var Wb="REACT_ROUTER_ERROR",rT="REDIRECT",iT="ROUTE_ERROR_RESPONSE";function sT(e){if(e.startsWith(`${Wb}:${rT}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function aT(e){if(e.startsWith(`${Wb}:${iT}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new qC(t.status,t.statusText,t.data)}catch{}}function oT(e,{relative:t}={}){_e(ms(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=C.useContext(Mt),{hash:i,pathname:s,search:a}=Ga(e,{relative:t}),o=s;return n!=="/"&&(o=s==="/"?n:sn([n,s])),r.createHref({pathname:o,search:a,hash:i})}function ms(){return C.useContext(Wa)!=null}function dn(){return _e(ms(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(Wa).location}var Gb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function qb(e){C.useContext(Mt).static||C.useLayoutEffect(e)}function bu(){let{isDataRoute:e}=C.useContext(En);return e?bT():lT()}function lT(){_e(ms(),"useNavigate() may be used only in the context of a <Router> component.");let e=C.useContext(hs),{basename:t,navigator:n}=C.useContext(Mt),{matches:r}=C.useContext(En),{pathname:i}=dn(),s=JSON.stringify(Pp(r)),a=C.useRef(!1);return qb(()=>{a.current=!0}),C.useCallback((l,u={})=>{if(cn(a.current,Gb),!a.current)return;if(typeof l=="number"){n.go(l);return}let d=xu(l,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:sn([t,d.pathname])),Rp(typeof l=="string"?l:ui(l),n.createHref(d),jp(n),"reject"),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,s,i,e])}C.createContext(null);function Ga(e,{relative:t}={}){let{matches:n}=C.useContext(En),{pathname:r}=dn(),i=JSON.stringify(Pp(n));return C.useMemo(()=>xu(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function uT(e,t){return Kb(e,t)}function Kb(e,t,n){var S;_e(ms(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=C.useContext(Mt),{matches:i}=C.useContext(En),s=i[i.length-1],a=s?s.params:{},o=s?s.pathname:"/",l=s?s.pathnameBase:"/",u=s&&s.route;{let g=u&&u.path||"";Xb(o,!u||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let d=dn(),f;if(t){let g=typeof t=="string"?ps(t):t;_e(l==="/"||((S=g.pathname)==null?void 0:S.startsWith(l)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${g.pathname}" was given in the \`location\` prop.`),f=g}else f=d;let p=f.pathname||"/",h=p;if(l!=="/"){let g=l.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(g.length).join("/")}let y=n&&n.state.matches.length?n.state.matches.map(g=>Object.assign(g,{route:n.manifest[g.route.id]||g.route})):Lb(e,{pathname:h});cn(u||y!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),cn(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=hT(y&&y.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:sn([l,r.encodeLocation?r.encodeLocation(g.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:sn([l,r.encodeLocation?r.encodeLocation(g.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:g.pathnameBase])})),i,n);return t&&b?C.createElement(Wa.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...f},navigationType:"POP"}},b):b}function cT(){let e=vT(),t=KC(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",e),a=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:s},"ErrorBoundary")," or"," ",C.createElement("code",{style:s},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,a)}var dT=C.createElement(cT,null),Yb=class extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=aT(e.digest);n&&(e=n)}let t=e!==void 0?C.createElement(En.Provider,{value:this.props.routeContext},C.createElement(Lp.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?C.createElement(fT,{error:e},t):t}};Yb.contextType=$b;var fc=new WeakMap;function fT({children:e,error:t}){let{basename:n,navigator:r}=C.useContext(Mt);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let i=sT(t.digest);if(i){let s=fc.get(t);if(s)throw s;let a=Bb(i.location,n),o=a.absoluteURL||a.to;if(Rp(i.location,o,jp(r),"allow-explicit"),JC(o))throw new Error("Invalid redirect location");if(Ub&&!fc.get(t))if(a.isExternal||i.reloadDocument)window.location.href=o;else{const l=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:i.replace}));throw fc.set(t,l),l}return C.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o}`})}}return e}function pT({routeContext:e,match:t,children:n}){let r=C.useContext(hs);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),C.createElement(En.Provider,{value:e},n)}function hT(e,t=[],n){let r=n==null?void 0:n.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,s=r==null?void 0:r.errors;if(s!=null){let d=i.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);_e(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,d+1))}let a=!1,o=-1;if(n&&r){a=r.renderFallback;for(let d=0;d<i.length;d++){let f=i[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(o=d),f.route.id){let{loaderData:p,errors:h}=r,y=f.route.loader&&!p.hasOwnProperty(f.route.id)&&(!h||h[f.route.id]===void 0);if(f.route.lazy||y){n.isStatic&&(a=!0),o>=0?i=i.slice(0,o+1):i=[i[0]];break}}}}let l=n==null?void 0:n.onError,u=r&&l?(d,f)=>{var p,h;l(d,{location:r.location,params:((h=(p=r.matches)==null?void 0:p[0])==null?void 0:h.params)??{},pattern:YC(r.matches),errorInfo:f})}:void 0;return i.reduceRight((d,f,p)=>{let h,y=!1,b=null,S=null;r&&(h=s&&f.route.id?s[f.route.id]:void 0,b=f.route.errorElement||dT,a&&(o<0&&p===0?(Xb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,S=null):o===p&&(y=!0,S=f.route.hydrateFallbackElement||null)));let g=t.concat(i.slice(0,p+1)),m=()=>{let x;return h?x=b:y?x=S:f.route.Component?x=C.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=d,C.createElement(pT,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:r!=null},children:x})};return r&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?C.createElement(Yb,{location:r.location,revalidation:r.revalidation,component:b,error:h,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0},onError:u}):m()},null)}function Dp(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mT(e){let t=C.useContext(hs);return _e(t,Dp(e)),t}function gT(e){let t=C.useContext(vu);return _e(t,Dp(e)),t}function yT(e){let t=C.useContext(En);return _e(t,Dp(e)),t}function Mp(e){let t=yT(e),n=t.matches[t.matches.length-1];return _e(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function xT(){return Mp("useRouteId")}function vT(){var r;let e=C.useContext(Lp),t=gT("useRouteError"),n=Mp("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function bT(){let{router:e}=mT("useNavigate"),t=Mp("useNavigate"),n=C.useRef(!1);return qb(()=>{n.current=!0}),C.useCallback(async(i,s={})=>{cn(n.current,Gb),n.current&&(typeof i=="number"?await e.navigate(i):await e.navigate(i,{fromRouteId:t,...s}))},[e,t])}var Eg={};function Xb(e,t,n){!t&&!Eg[e]&&(Eg[e]=!0,cn(!1,n))}C.memo(wT);function wT({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:s}){return Kb(e,void 0,{manifest:t,state:r,isStatic:i,onError:s})}function kT({to:e,replace:t,state:n,relative:r}){_e(ms(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i,navigator:s}=C.useContext(Mt);cn(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=C.useContext(En),{pathname:o}=dn(),l=bu(),u=xu(e,Pp(a),o,r==="path");Rp(typeof e=="string"?e:ui(e),s.createHref(u),jp(s),"reject");let d=JSON.stringify(u);return C.useEffect(()=>{l(JSON.parse(d),{replace:t,state:n,relative:r})},[l,d,r,t,n]),null}function Ur(e){_e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ST({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:s=!1,useTransitions:a}){_e(!ms(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),l=C.useMemo(()=>({basename:o,navigator:i,static:s,useTransitions:a,future:{}}),[o,i,s,a]);typeof n=="string"&&(n=ps(n));let{pathname:u="/",search:d="",hash:f="",state:p=null,key:h="default",mask:y}=n,b=C.useMemo(()=>{let S=qn(u,o);return S==null?null:{location:{pathname:S,search:d,hash:f,state:p,key:h,mask:y},navigationType:r}},[o,u,d,f,p,h,r,y]);return cn(b!=null,`<Router basename="${o}"> is not able to match the URL "${u}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:C.createElement(Mt.Provider,{value:l},C.createElement(Wa.Provider,{children:t,value:b}))}function ET({children:e,location:t}){return uT(Gd(e),t)}function Gd(e,t=[]){let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let s=[...t,i];if(r.type===C.Fragment){n.push.apply(n,Gd(r.props.children,s));return}_e(r.type===Ur,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_e(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Gd(r.props.children,s)),n.push(a)}),n}var Yo="get",Xo="application/x-www-form-urlencoded";function wu(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function CT(e){return wu(e)&&e.tagName.toLowerCase()==="button"}function TT(e){return wu(e)&&e.tagName.toLowerCase()==="form"}function _T(e){return wu(e)&&e.tagName.toLowerCase()==="input"}function AT(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function IT(e,t){return e.button===0&&(!t||t==="_self")&&!AT(e)}var Eo=null;function NT(){if(Eo===null)try{new FormData(document.createElement("form"),0),Eo=!1}catch{Eo=!0}return Eo}var PT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function pc(e){return e!=null&&!PT.has(e)?(cn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xo}"`),null):e}function jT(e,t){let n,r,i,s,a;if(TT(e)){let o=e.getAttribute("action");r=o?qn(o,t):null,n=e.getAttribute("method")||Yo,i=pc(e.getAttribute("enctype"))||Xo,s=new FormData(e)}else if(CT(e)||_T(e)&&(e.type==="submit"||e.type==="image")){let o=e.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||o.getAttribute("action");if(r=l?qn(l,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||Yo,i=pc(e.getAttribute("formenctype"))||pc(o.getAttribute("enctype"))||Xo,s=new FormData(o,e),!NT()){let{name:u,type:d,value:f}=e;if(d==="image"){let p=u?`${u}.`:"";s.append(`${p}x`,"0"),s.append(`${p}y`,"0")}else u&&s.append(u,f)}}else{if(wu(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Yo,r=null,i=Xo,a=e}return s&&i==="text/plain"&&(a=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Fp(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qb(e,t,n,r){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname==="/"?i.pathname=`_root.${r}`:t&&qn(i.pathname,t)==="/"?i.pathname=`${ts(t)}/_root.${r}`:i.pathname=`${ts(i.pathname)}.${r}`,i}async function RT(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function LT(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function DT(e,t,n){let r=await Promise.all(e.map(async i=>{let s=t.routes[i.route.id];if(s){let a=await RT(s,n);return a.links?a.links():[]}return[]}));return zT(r.flat(1).filter(LT).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Cg(e,t,n,r,i,s){let a=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,o=(l,u)=>{var d;return n[u].pathname!==l.pathname||((d=n[u].route.path)==null?void 0:d.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return s==="assets"?t.filter((l,u)=>a(l,u)||o(l,u)):s==="data"?t.filter((l,u)=>{var f;let d=r.routes[l.route.id];if(!d||!d.hasLoader)return!1;if(a(l,u)||o(l,u))return!0;if(l.route.shouldRevalidate){let p=l.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function MT(e,t,{includeHydrateFallback:n}={}){return FT(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function FT(e){return[...new Set(e)]}function OT(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function zT(e,t){let n=new Set;return new Set(t),e.reduce((r,i)=>{let s=JSON.stringify(OT(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function Op(){let e=C.useContext(hs);return Fp(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function UT(){let e=C.useContext(vu);return Fp(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var zp=C.createContext(void 0);zp.displayName="FrameworkContext";function ku(){let e=C.useContext(zp);return Fp(e,"You must render this element inside a <HydratedRouter> element"),e}function BT(e,t){let n=C.useContext(zp),[r,i]=C.useState(!1),[s,a]=C.useState(!1),{onFocus:o,onBlur:l,onMouseEnter:u,onMouseLeave:d,onTouchStart:f}=t,p=C.useRef(null);C.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let b=g=>{g.forEach(m=>{a(m.isIntersecting)})},S=new IntersectionObserver(b,{threshold:.5});return p.current&&S.observe(p.current),()=>{S.disconnect()}}},[e]),C.useEffect(()=>{if(r){let b=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(b)}}},[r]);let h=()=>{i(!0)},y=()=>{i(!1),a(!1)};return n?e!=="intent"?[s,p,{}]:[s,p,{onFocus:Ns(o,h),onBlur:Ns(l,y),onMouseEnter:Ns(u,h),onMouseLeave:Ns(d,y),onTouchStart:Ns(f,h)}]:[!1,p,{}]}function Ns(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function VT({page:e,...t}){let n=eT(),{nonce:r}=ku(),{router:i}=Op(),s=C.useMemo(()=>Lb(i.routes,e,i.basename),[i.routes,e,i.basename]);return s?(t.nonce==null&&r&&(t={...t,nonce:r}),n?C.createElement(HT,{page:e,matches:s,...t}):C.createElement(WT,{page:e,matches:s,...t})):null}function $T(e){let{manifest:t,routeModules:n}=ku(),[r,i]=C.useState([]);return C.useEffect(()=>{let s=!1;return DT(e,t,n).then(a=>{s||i(a)}),()=>{s=!0}},[e,t,n]),r}function HT({page:e,matches:t,...n}){let r=dn(),{future:i}=ku(),{basename:s}=Op(),a=C.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let o=Qb(e,s,i.v8_trailingSlashAwareDataRequests,"rsc"),l=!1,u=[];for(let d of t)typeof d.route.shouldRevalidate=="function"?l=!0:u.push(d.route.id);return l&&u.length>0&&o.searchParams.set("_routes",u.join(",")),[o.pathname+o.search]},[s,i.v8_trailingSlashAwareDataRequests,e,r,t]);return C.createElement(C.Fragment,null,a.map(o=>C.createElement("link",{key:o,rel:"prefetch",as:"fetch",href:o,...n})))}function WT({page:e,matches:t,...n}){let r=dn(),{future:i,manifest:s,routeModules:a}=ku(),{basename:o}=Op(),{loaderData:l,matches:u}=UT(),d=C.useMemo(()=>Cg(e,t,u,s,r,"data"),[e,t,u,s,r]),f=C.useMemo(()=>Cg(e,t,u,s,r,"assets"),[e,t,u,s,r]),p=C.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let b=new Set,S=!1;if(t.forEach(m=>{var v;let x=s.routes[m.route.id];!x||!x.hasLoader||(!d.some(E=>E.route.id===m.route.id)&&m.route.id in l&&((v=a[m.route.id])!=null&&v.shouldRevalidate)||x.hasClientLoader?S=!0:b.add(m.route.id))}),b.size===0)return[];let g=Qb(e,o,i.v8_trailingSlashAwareDataRequests,"data");return S&&b.size>0&&g.searchParams.set("_routes",t.filter(m=>b.has(m.route.id)).map(m=>m.route.id).join(",")),[g.pathname+g.search]},[o,i.v8_trailingSlashAwareDataRequests,l,r,s,d,t,e,a]),h=C.useMemo(()=>MT(f,s),[f,s]),y=$T(f);return C.createElement(C.Fragment,null,p.map(b=>C.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...n})),h.map(b=>C.createElement("link",{key:b,rel:"modulepreload",href:b,...n})),y.map(({key:b,link:S})=>C.createElement("link",{key:b,nonce:n.nonce,...S,crossOrigin:S.crossOrigin??n.crossOrigin})))}function GT(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var qT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qT&&(window.__reactRouterVersion="7.18.5")}catch{}function KT({basename:e,children:t,useTransitions:n,window:r}){let i=C.useRef();i.current==null&&(i.current=CC({window:r,v5Compat:!0}));let s=i.current,[a,o]=C.useState({action:s.action,location:s.location}),l=C.useCallback(u=>{n===!1?o(u):C.startTransition(()=>o(u))},[n]);return C.useLayoutEffect(()=>s.listen(l),[s,l]),C.createElement(ST,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:s,useTransitions:n})}var Ca=C.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:a,mask:o,state:l,target:u,to:d,preventScrollReset:f,viewTransition:p,defaultShouldRevalidate:h,...y},b){let{basename:S,navigator:g,useTransitions:m}=C.useContext(Mt),x=typeof d=="string"&&Np.test(d),v=Bb(d,S);d=v.to;let E=oT(d,{relative:i}),w=dn(),I=null;if(o){let H=xu(o,[],w.mask?w.mask.pathname:"/",!0);S!=="/"&&(H.pathname=H.pathname==="/"?S:sn([S,H.pathname])),I=g.createHref(H)}let[P,R,_]=BT(r,y),j=ZT(d,{replace:a,mask:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:p,defaultShouldRevalidate:h,useTransitions:m});function U(H){t&&t(H),H.defaultPrevented||j(H)}let q=!(v.isExternal||s),Q=C.createElement("a",{...y,..._,href:(q?I:void 0)||v.absoluteURL||E,onClick:q?U:t,ref:GT(b,R),target:u,"data-discover":!x&&n==="render"?"true":void 0});return P&&!x?C.createElement(C.Fragment,null,Q,C.createElement(VT,{page:E})):Q});Ca.displayName="Link";var YT=C.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:a,viewTransition:o,children:l,...u},d){let f=Ga(a,{relative:u.relative}),p=dn(),h=C.useContext(vu),{navigator:y,basename:b}=C.useContext(Mt),S=h!=null&&r_(f)&&o===!0,g=y.encodeLocation?y.encodeLocation(f).pathname:f.pathname,m=p.pathname,x=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;n||(m=m.toLowerCase(),x=x?x.toLowerCase():null,g=g.toLowerCase()),x&&b&&(x=qn(x,b)||x);const v=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let E=m===g||!i&&m.startsWith(g)&&m.charAt(v)==="/",w=x!=null&&(x===g||!i&&x.startsWith(g)&&x.charAt(g.length)==="/"),I={isActive:E,isPending:w,isTransitioning:S},P=E?t:void 0,R;typeof r=="function"?R=r(I):R=[r,E?"active":null,w?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let _=typeof s=="function"?s(I):s;return C.createElement(Ca,{...u,"aria-current":P,className:R,ref:d,style:_,to:a,viewTransition:o},typeof l=="function"?l(I):l)});YT.displayName="NavLink";var XT=C.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:s,method:a=Yo,action:o,onSubmit:l,relative:u,preventScrollReset:d,viewTransition:f,defaultShouldRevalidate:p,...h},y)=>{let{useTransitions:b}=C.useContext(Mt),S=t_(),g=n_(o,{relative:u}),m=a.toLowerCase()==="get"?"get":"post",x=typeof o=="string"&&Np.test(o),v=E=>{if(l&&l(E),E.defaultPrevented)return;E.preventDefault();let w=E.nativeEvent.submitter,I=(w==null?void 0:w.getAttribute("formmethod"))||a,P=()=>S(w||E.currentTarget,{fetcherKey:t,method:I,navigate:n,replace:i,state:s,relative:u,preventScrollReset:d,viewTransition:f,defaultShouldRevalidate:p});b&&n!==!1?C.startTransition(()=>P()):P()};return C.createElement("form",{ref:y,method:m,action:g,onSubmit:r?l:v,...h,"data-discover":!x&&e==="render"?"true":void 0})});XT.displayName="Form";function QT(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zb(e){let t=C.useContext(hs);return _e(t,QT(e)),t}function ZT(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:s,relative:a,viewTransition:o,defaultShouldRevalidate:l,useTransitions:u}={}){let d=bu(),f=dn(),p=Ga(e,{relative:a});return C.useCallback(h=>{if(IT(h,t)){h.preventDefault();let y=n!==void 0?n:ui(f)===ui(p),b=()=>d(e,{replace:y,mask:r,state:i,preventScrollReset:s,relative:a,viewTransition:o,defaultShouldRevalidate:l});u?C.startTransition(()=>b()):b()}},[f,d,p,n,r,i,t,e,s,a,o,l,u])}var JT=0,e_=()=>`__${String(++JT)}__`;function t_(){let{router:e}=Zb("useSubmit"),{basename:t}=C.useContext(Mt),n=xT(),r=e.fetch,i=e.navigate;return C.useCallback(async(s,a={})=>{let{action:o,method:l,encType:u,formData:d,body:f}=jT(s,t);if(a.navigate===!1){let p=a.fetcherKey||e_();await r(p,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:d,body:f,formMethod:a.method||l,formEncType:a.encType||u,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:d,body:f,formMethod:a.method||l,formEncType:a.encType||u,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function n_(e,{relative:t}={}){let{basename:n}=C.useContext(Mt),r=C.useContext(En);_e(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...Ga(e||".",{relative:t})},a=dn();if(e==null){s.search=a.search;let o=new URLSearchParams(s.search),l=o.getAll("index");if(l.some(d=>d==="")){o.delete("index"),l.filter(f=>f).forEach(f=>o.append("index",f));let d=o.toString();s.search=d?`?${d}`:""}}return(!e||e===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:sn([n,s.pathname])),ui(s)}function r_(e,{relative:t}={}){let n=C.useContext(Hb);_e(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Zb("useViewTransitionState"),i=Ga(e,{relative:t});if(!n.isTransitioning)return!1;let s=qn(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=qn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return jl(i.pathname,a)!=null||jl(i.pathname,s)!=null}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jb=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=C.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:a,...o},l)=>C.createElement("svg",{ref:l,...s_,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Jb("lucide",i),...o},[...a.map(([u,d])=>C.createElement(u,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=(e,t)=>{const n=C.forwardRef(({className:r,...i},s)=>C.createElement(a_,{ref:s,iconNode:t,className:Jb(`lucide-${i_(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=K("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=K("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=K("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=K("AudioLines",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=K("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=K("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=K("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=K("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=K("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=K("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=K("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=K("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=K("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=K("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=K("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=K("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=K("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=K("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=K("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=K("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=K("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=K("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=K("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=K("MessageSquarePlus",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=K("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=K("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=K("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=K("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=K("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=K("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=K("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=K("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=K("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=K("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=K("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=K("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=K("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=K("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=K("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=K("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=K("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=K("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=K("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=K("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=K("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=K("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=K("Tablet",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=K("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=K("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=K("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=K("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=K("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=K("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=K("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=K("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Zs="https://eliza-ai-voice-agent-bd.onrender.com";function E_(){const e="https://eliza-ai-voice-agent-bd.onrender.com".trim();if(typeof window>"u")return(e||Zs).replace(/\/$/,"");const t=window.location.protocol,n=window.location.hostname;return t==="https:"?e&&e.startsWith("https://")?e.replace(/\/$/,""):Zs:n==="localhost"||n==="127.0.0.1"?(e||"http://localhost:8000").replace(/\/$/,""):/^(192\.168\.|10\.|172\.(1[6-9]|2\d|3[01])\.)/.test(n)?e&&!e.includes("localhost")&&!e.includes("127.0.0.1")?e.replace(/\/$/,""):`http://${n}:8000`:(e||Zs).replace(/\/$/,"")}const ns=E_();async function rs(e,t={},n=45e3){const r=new AbortController,i=setTimeout(()=>r.abort(),n),s={...t,signal:t.signal||r.signal};try{let a=await fetch(e,s);return(a.status===502||a.status===503||a.status===504)&&!e.includes("localhost")&&(await new Promise(o=>setTimeout(o,3e3)),a=await fetch(e,s)),clearTimeout(i),a}catch(a){if(clearTimeout(i),(e.includes("localhost")||e.includes("127.0.0.1")||/192\.168\.|10\./.test(e))&&!e.startsWith(Zs))try{const l=e.replace(/http:\/\/[^/]+/,Zs),u=new AbortController,d=setTimeout(()=>u.abort(),n),f=await fetch(l,{...t,signal:u.signal});return clearTimeout(d),f}catch{}throw a}}function Aa(){try{return localStorage.getItem("eliza_access_token")||""}catch{return""}}function _g(e){try{e?localStorage.setItem("eliza_access_token",e):localStorage.removeItem("eliza_access_token")}catch{}}function Ag(){try{return localStorage.getItem("eliza_access_email")||""}catch{return""}}function Ig(e){try{e?localStorage.setItem("eliza_access_email",e):localStorage.removeItem("eliza_access_email")}catch{}}function C_(){try{localStorage.removeItem("eliza_access_token"),localStorage.removeItem("eliza_access_email")}catch{}}function Co(){if(typeof window>"u")return"desktop";const e=window.innerWidth,t=(navigator.userAgent||"").toLowerCase();return/ipad|tablet/.test(t)||e>=768&&e<=1024?"tablet":/mobi|android|iphone/.test(t)||e<768?"mobile":"desktop"}function To(){if(typeof navigator>"u")return"unknown";const e=navigator.userAgent.toLowerCase();return e.includes("edg/")?"Edge":e.includes("chrome")&&!e.includes("edg/")?"Chrome":e.includes("safari")&&!e.includes("chrome")?"Safari":e.includes("firefox")?"Firefox":e.includes("opr")||e.includes("opera")?"Opera":"Browser"}function Xd(e,t="Request failed"){return e?typeof e.detail=="string"?e.detail:Array.isArray(e.detail)&&e.detail.length>0?e.detail.map(n=>typeof n=="string"?n:n&&typeof n=="object"?n.msg||n.message||JSON.stringify(n):String(n)).join(", "):e.detail&&typeof e.detail=="object"&&e.detail.message?e.detail.message:typeof e.message=="string"?e.message:t:t}async function _o(e,t={}){const n=Aa(),r={"Content-Type":"application/json",...n?{Authorization:`Bearer ${n}`}:{},...t.headers||{}},i=await rs(`${ns}${e}`,{...t,headers:r}),s=await i.json().catch(()=>({}));if(!i.ok){const a=Xd(s,`Request failed (${i.status})`),o=new Error(a);throw o.status=i.status,o.data=s,o}return s}const Ia={verifyEmail:async e=>{const t=await rs(`${ns}/api/v1/access/verify-email`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,device_type:Co(),browser_name:To()})}),n=await t.json().catch(()=>({}));if(!t.ok)throw new Error(Xd(n,"Failed to verify email."));return n.sessionToken&&(_g(n.sessionToken),Ig(n.email||e)),n},googleLogin:async({email:e,credential:t,name:n,picture:r}={})=>{const i=await rs(`${ns}/api/v1/access/google-login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e||"",credential:t||"",name:(n||"").slice(0,256),picture:(r||"").slice(0,2048),device_type:Co().slice(0,64),browser_name:To().slice(0,64)})}),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(Xd(s,"Failed to log in with Google."));return s.sessionToken&&(_g(s.sessionToken),Ig(s.email||e)),s},getStatus:async()=>_o("/api/v1/access/status"),submitQuestion:async e=>{const t={...e,device_type:Co(),browser_name:To(),request_id:typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():void 0};return _o("/api/v1/questions",{method:"POST",body:JSON.stringify(t)})},submitFeedback:async({rating:e,category:t,message:n})=>_o("/api/v1/feedback",{method:"POST",body:JSON.stringify({rating:e,category:t,message:n,device_type:Co(),browser_name:To()})}),getFeedbackStatus:async()=>_o("/api/v1/feedback/status")},T_=()=>{};var Ng={};/**
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
 */const x1=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},__=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],o=e[n++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},v1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,o=a?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=s>>2,f=(s&3)<<4|o>>4;let p=(o&15)<<2|u>>6,h=u&63;l||(h=64,a||(p=64)),r.push(n[d],n[f],n[p],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(x1(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):__(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||o==null||u==null||f==null)throw new A_;const p=s<<2|o>>4;if(r.push(p),u!==64){const h=o<<4&240|u>>2;if(r.push(h),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class A_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const I_=function(e){const t=x1(e);return v1.encodeByteArray(t,!0)},b1=function(e){return I_(e).replace(/\./g,"")},w1=function(e){try{return v1.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function N_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const P_=()=>N_().__FIREBASE_DEFAULTS__,j_=()=>{if(typeof process>"u"||typeof Ng>"u")return;const e=Ng.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},R_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&w1(e[1]);return t&&JSON.parse(t)},Yp=()=>{try{return T_()||P_()||j_()||R_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},L_=e=>{var t,n;return(n=(t=Yp())==null?void 0:t.emulatorHosts)==null?void 0:n[e]},k1=()=>{var e;return(e=Yp())==null?void 0:e.config},S1=e=>{var t;return(t=Yp())==null?void 0:t[`_${e}`]};/**
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
 */class D_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function M_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function F_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function O_(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function z_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function U_(){const e=ht();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function B_(){try{return typeof indexedDB=="object"}catch{return!1}}function V_(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)==null?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const $_="FirebaseError";class Pr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=$_,Object.setPrototypeOf(this,Pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qa.prototype.create)}}class qa{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?H_(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new Pr(i,o,r)}}function H_(e,t){try{let n=0,r="";for(;n<e.length;){const i=e.indexOf("{$",n);if(i===-1){r+=e.substring(n);break}const s=e.indexOf("}",i+2);if(s===-1){r+=e.substring(n);break}const a=e.substring(i+2,s),o=t[a];r+=e.substring(n,i)+(o!=null?String(o):`<${a}?>`),n=s+1}return r}catch{return e}}function W_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function is(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(Pg(s)&&Pg(a)){if(!is(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Pg(e){return e!==null&&typeof e=="object"}/**
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
 */function Ka(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function G_(e,t){const n=new q_(e,t);return n.subscribe.bind(n)}class q_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");K_(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=hc),i.error===void 0&&(i.error=hc),i.complete===void 0&&(i.complete=hc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function K_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function hc(){}/**
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
 */function gs(e){return e&&e._delegate?e._delegate:e}/**
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
 */function Xp(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Y_(e){return(await fetch(e,{credentials:"include"})).ok}class ss{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Br="[DEFAULT]";/**
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
 */class X_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new D_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Z_(t))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Br){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Br){return this.instances.has(t)}getOptions(t=Br){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Q_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Br){return this.component?this.component.multipleInstances?t:Br:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Q_(e){return e===Br?void 0:e}function Z_(e){return e.instantiationMode==="EAGER"}/**
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
 */class J_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new X_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var xe;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(xe||(xe={}));const eA={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},tA=xe.INFO,nA={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},rA=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=nA[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class E1{constructor(t){this.name=t,this._logLevel=tA,this._logHandler=rA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in xe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?eA[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...t),this._logHandler(this,xe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...t),this._logHandler(this,xe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...t),this._logHandler(this,xe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...t),this._logHandler(this,xe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...t),this._logHandler(this,xe.ERROR,...t)}}const iA=(e,t)=>t.some(n=>e instanceof n);let jg,Rg;function sA(){return jg||(jg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aA(){return Rg||(Rg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const C1=new WeakMap,Qd=new WeakMap,T1=new WeakMap,mc=new WeakMap,Qp=new WeakMap;function oA(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(Sr(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&C1.set(n,e)}).catch(()=>{}),Qp.set(t,e),t}function lA(e){if(Qd.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});Qd.set(e,t)}let Zd={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Qd.get(e);if(t==="objectStoreNames")return e.objectStoreNames||T1.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function uA(e){Zd=e(Zd)}function cA(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(gc(this),t,...n);return T1.set(r,t.sort?t.sort():[t]),Sr(r)}:aA().includes(e)?function(...t){return e.apply(gc(this),t),Sr(C1.get(this))}:function(...t){return Sr(e.apply(gc(this),t))}}function dA(e){return typeof e=="function"?cA(e):(e instanceof IDBTransaction&&lA(e),iA(e,sA())?new Proxy(e,Zd):e)}function Sr(e){if(e instanceof IDBRequest)return oA(e);if(mc.has(e))return mc.get(e);const t=dA(e);return t!==e&&(mc.set(e,t),Qp.set(t,e)),t}const gc=e=>Qp.get(e);function fA(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=Sr(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Sr(a.result),l.oldVersion,l.newVersion,Sr(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),o.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),o}const pA=["get","getKey","getAll","getAllKeys","count"],hA=["put","add","delete","clear"],yc=new Map;function Lg(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(yc.get(t))return yc.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=hA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pA.includes(n)))return;const s=async function(a,...o){const l=this.transaction(a,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(o.shift())),(await Promise.all([u[n](...o),i&&l.done]))[0]};return yc.set(t,s),s}uA(e=>({...e,get:(t,n,r)=>Lg(t,n)||e.get(t,n,r),has:(t,n)=>!!Lg(t,n)||e.has(t,n)}));/**
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
 */class mA{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gA(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Jd="@firebase/app",Dg="0.16.4";/**
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
 */const Kn=new E1("@firebase/app"),yA="@firebase/app-compat",xA="@firebase/analytics-compat",vA="@firebase/analytics",bA="@firebase/app-check-compat",wA="@firebase/app-check",kA="@firebase/auth",SA="@firebase/auth-compat",EA="@firebase/database",CA="@firebase/data-connect",TA="@firebase/database-compat",_A="@firebase/functions",AA="@firebase/functions-compat",IA="@firebase/installations",NA="@firebase/installations-compat",PA="@firebase/messaging",jA="@firebase/messaging-compat",RA="@firebase/performance",LA="@firebase/performance-compat",DA="@firebase/remote-config",MA="@firebase/remote-config-compat",FA="@firebase/storage",OA="@firebase/storage-compat",zA="@firebase/firestore",UA="@firebase/ai",BA="@firebase/firestore-compat",VA="firebase",$A="13.1.0";/**
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
 */const ef="[DEFAULT]",HA={[Jd]:"fire-core",[yA]:"fire-core-compat",[vA]:"fire-analytics",[xA]:"fire-analytics-compat",[wA]:"fire-app-check",[bA]:"fire-app-check-compat",[kA]:"fire-auth",[SA]:"fire-auth-compat",[EA]:"fire-rtdb",[CA]:"fire-data-connect",[TA]:"fire-rtdb-compat",[_A]:"fire-fn",[AA]:"fire-fn-compat",[IA]:"fire-iid",[NA]:"fire-iid-compat",[PA]:"fire-fcm",[jA]:"fire-fcm-compat",[RA]:"fire-perf",[LA]:"fire-perf-compat",[DA]:"fire-rc",[MA]:"fire-rc-compat",[FA]:"fire-gcs",[OA]:"fire-gcs-compat",[zA]:"fire-fst",[BA]:"fire-fst-compat",[UA]:"fire-vertex","fire-js":"fire-js",[VA]:"fire-js-all"};/**
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
 */const Na=new Map,WA=new Map,tf=new Map;function Mg(e,t){try{e.container.addComponent(t)}catch(n){Kn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Pa(e){const t=e.name;if(tf.has(t))return Kn.debug(`There were multiple attempts to register component ${t}.`),!1;tf.set(t,e);for(const n of Na.values())Mg(n,e);for(const n of WA.values())Mg(n,e);return!0}function _1(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function yn(e){return e==null?!1:e.settings!==void 0}/**
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
 */const GA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mn=new qa("app","Firebase",GA);/**
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
 */class qA{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ya=$A;function Ll(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:ef,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw Mn.create("bad-app-name",{appName:String(i)});if(n||(n=k1()),!n)throw Mn.create("no-options");const s=Na.get(i);if(s)if(is(n,s.options)){if(is(r,s.config))return s;throw Mn.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(r)})}else throw Mn.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(n)});const a=new J_(i);for(const l of tf.values())a.addComponent(l);const o=new qA(n,r,a);return Na.set(i,o),o}function Dl(e=ef){const t=Na.get(e);if(!t&&e===ef&&k1())return Ll();if(!t)throw Mn.create("no-app",{appName:e});return t}function nf(){return Array.from(Na.values())}function Hi(e,t,n){let r=HA[e]??e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Kn.warn(a.join(" "));return}Pa(new ss(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const KA="firebase-heartbeat-database",YA=1,ja="firebase-heartbeat-store";let xc=null;function A1(){return xc||(xc=fA(KA,YA,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ja)}catch(n){console.warn(n)}}}}).catch(e=>{throw Mn.create("idb-open",{originalErrorMessage:e.message})})),xc}async function XA(e){try{const n=(await A1()).transaction(ja),r=await n.objectStore(ja).get(I1(e));return await n.done,r}catch(t){if(t instanceof Pr)Kn.warn(t.message);else{const n=Mn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Kn.warn(n.message)}}}async function Fg(e,t){try{const r=(await A1()).transaction(ja,"readwrite");await r.objectStore(ja).put(t,I1(e)),await r.done}catch(n){if(n instanceof Pr)Kn.warn(n.message);else{const r=Mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kn.warn(r.message)}}}function I1(e){return`${e.name}!${e.options.appId}`}/**
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
 */const QA=1024,ZA=30;class JA{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Og();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>ZA){const a=nI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Kn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Og(),{heartbeatsToSend:r,unsentEntries:i}=eI(this._heartbeatsCache.heartbeats),s=b1(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Kn.warn(n),""}}}function Og(){return new Date().toISOString().substring(0,10)}function eI(e,t=QA){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),zg(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zg(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tI{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return B_()?V_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await XA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fg(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fg(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function zg(e){return b1(JSON.stringify({version:2,heartbeats:e})).length}function nI(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function rI(e){Pa(new ss("platform-logger",t=>new mA(t),"PRIVATE")),Pa(new ss("heartbeat",t=>new JA(t),"PRIVATE")),Hi(Jd,Dg,e),Hi(Jd,Dg,"esm2020"),Hi("fire-js","")}/**
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
 */rI("");var iI="firebase",sI="13.1.0";/**
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
 */Hi(iI,sI,"app");function N1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aI=N1,P1=new qa("auth","Firebase",N1());/**
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
 */const Ml=new E1("@firebase/auth");function Zo(e,...t){Ml.logLevel<=xe.WARN&&Ml.warn(`Auth (${Ya}): ${e}`,...t)}function Jo(e,...t){Ml.logLevel<=xe.ERROR&&Ml.error(`Auth (${Ya}): ${e}`,...t)}/**
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
 */function Sn(e,...t){throw Zp(e,...t)}function an(e,...t){return Zp(e,...t)}function Su(e,t,n){const r={...aI(),[t]:n};return new qa("auth","Firebase",r).create(t,{appName:e.name})}function ei(e){return Su(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function oI(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Sn(e,"argument-error"),Su(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zp(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return P1.create(e,...t)}function te(e,t,...n){if(!e)throw Zp(t,...n)}function Fn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Jo(t),new Error(t)}function Yn(e,t){e||Fn(t)}/**
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
 */function rf(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.href)||""}function lI(){return Ug()==="http:"||Ug()==="https:"}function Ug(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.protocol)||null}/**
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
 */function uI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lI()||O_()||"connection"in navigator)?navigator.onLine:!0}function cI(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Xa{constructor(t,n){this.shortDelay=t,this.longDelay=n,Yn(n>t,"Short delay should be less than long delay!"),this.isMobile=M_()||z_()}get(){return uI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Jp(e,t){Yn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class j1{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pI=new Xa(3e4,6e4);function eh(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function ys(e,t,n,r,i={}){return R1(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const o=Ka({...a,key:e.config.apiKey}).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u={method:t,headers:l,...s};return F_()||(u.referrerPolicy="strict-origin-when-cross-origin"),e.emulatorConfig&&Xp(e.emulatorConfig.host)&&(u.credentials="include"),j1.fetch()(await L1(e,e.config.apiHost,n,o),u)})}async function R1(e,t,n){e._canInitEmulator=!1;const r={...dI,...t};try{const i=new mI(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Ao(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[l,u]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ao(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Ao(e,"email-already-in-use",a);if(l==="USER_DISABLED")throw Ao(e,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Su(e,d,u);Sn(e,d)}}catch(i){if(i instanceof Pr)throw i;Sn(e,"network-request-failed",{message:String(i)})}}async function hI(e,t,n,r,i={}){const s=await ys(e,t,n,r,i);return"mfaPendingCredential"in s&&Sn(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function L1(e,t,n,r){const i=`${t}${n}?${r}`,s=e,a=s.config.emulator?Jp(e.config,i):`${e.config.apiScheme}://${i}`;return fI.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}class mI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),pI.get())})}}function Ao(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=an(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function gI(e,t){return ys(e,"POST","/v1/accounts:delete",t)}async function Fl(e,t){return ys(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Js(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function yI(e,t=!1){const n=gs(e),r=await n.getIdToken(t),i=th(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Js(vc(i.auth_time)),issuedAtTime:Js(vc(i.iat)),expirationTime:Js(vc(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function vc(e){return Number(e)*1e3}function th(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Jo("JWT malformed, contained fewer than 3 sections"),null;try{const i=w1(n);return i?JSON.parse(i):(Jo("Failed to decode base64 JWT payload"),null)}catch(i){return Jo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Bg(e){const t=th(e);return te(t,"internal-error"),te(typeof t.exp<"u","internal-error"),te(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ra(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw D1(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function D1(e){return e instanceof Pr?e.code==="auth/user-disabled"||e.code==="auth/user-token-expired":!1}/**
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
 */class xI{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sf{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ol(e){var f;const t=e.auth,n=await e.getIdToken(),r=await Ra(e,Fl(t,{idToken:n}));te(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?M1(i.providerUserInfo):[],a=bI(e.providerData,s),o=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),u=o?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new sf(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function vI(e){const t=gs(e);await Ol(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function bI(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function M1(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function wI(e,t){const n=await R1(e,{},async()=>{const r=Ka({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=await L1(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:o,body:r};return e.emulatorConfig&&Xp(e.emulatorConfig.host)&&(l.credentials="include"),j1.fetch()(a,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kI(e,t){return ys(e,"POST","/v2/accounts:revokeToken",eh(e,t))}/**
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
 */class Wi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){te(t.idToken,"internal-error"),te(typeof t.idToken<"u","internal-error"),te(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Bg(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){te(t.length!==0,"internal-error");const n=Bg(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await wI(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Wi;return r&&(te(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Wi,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
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
 */function er(e,t){te(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class tn{constructor({uid:t,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new xI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new sf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Ra(this,this.stsTokenManager.getToken(this.auth,t));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return yI(this,t)}reload(){return vI(this)}_assign(t){this!==t&&(te(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new tn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ol(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yn(this.auth.app))return Promise.reject(ei(this.auth));const t=await this.getIdToken();return await Ra(this,gI(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,a=n.photoURL??void 0,o=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:p,isAnonymous:h,providerData:y,stsTokenManager:b}=n;te(f&&b,t,"internal-error");const S=Wi.fromJSON(this.name,b);te(typeof f=="string",t,"internal-error"),er(r,t.name),er(i,t.name),te(typeof p=="boolean",t,"internal-error"),te(typeof h=="boolean",t,"internal-error"),er(s,t.name),er(a,t.name),er(o,t.name),er(l,t.name),er(u,t.name),er(d,t.name);const g=new tn({uid:f,auth:t,email:i,emailVerified:p,displayName:r,isAnonymous:h,photoURL:a,phoneNumber:s,tenantId:o,stsTokenManager:S,createdAt:u,lastLoginAt:d});return y&&Array.isArray(y)&&(g.providerData=y.map(m=>({...m}))),l&&(g._redirectEventId=l),g}static async _fromIdTokenResponse(t,n,r=!1){const i=new Wi;i.updateFromServerResponse(n);const s=new tn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ol(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];te(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?M1(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),o=new Wi;o.updateFromIdToken(r);const l=new tn({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:a}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new sf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const Vg=new Map;function On(e){Yn(e instanceof Function,"Expected a class definition");let t=Vg.get(e);return t?(Yn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Vg.set(e,t),t)}/**
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
 */class F1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}F1.type="NONE";const $g=F1;/**
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
 */function el(e,t,n){return`firebase:${e}:${t}:${n}`}class ti{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=el(this.userKey,i.apiKey,s),this.fullPersistenceKey=el("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Fl(this.auth,{idToken:t}).catch(()=>{});return n?tn._fromGetAccountInfoResponse(this.auth,n,t):null}return tn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(t,n,r="authUser"){if(!n.length)return new ti(On($g),t,r);const i=(await Promise.all(n.map(async u=>{try{if(await u._isAvailable())return u}catch{return}}))).filter(u=>u);let s=i[0]||On($g);const a=el(r,t.config.apiKey,t.name);let o=null;for(const u of n)try{const d=await u._get(a);if(d){let f;if(typeof d=="string"){const p=await Fl(t,{idToken:d}).catch(()=>{});if(!p)break;f=await tn._fromGetAccountInfoResponse(t,p,d)}else f=tn._fromJSON(t,d);u!==s&&(o=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ti(s,t,r):(s=l[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(a)}catch{}})),new ti(s,t,r))}}/**
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
 */function Hg(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(B1(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(O1(t))return"Firefox";if(t.includes("silk/"))return"Silk";if($1(t))return"Blackberry";if(H1(t))return"Webos";if(z1(t))return"Safari";if((t.includes("chrome/")||U1(t))&&!t.includes("edge/"))return"Chrome";if(V1(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function O1(e=ht()){return/firefox\//i.test(e)}function z1(e=ht()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function U1(e=ht()){return/crios\//i.test(e)}function B1(e=ht()){return/iemobile/i.test(e)}function V1(e=ht()){return/android/i.test(e)}function $1(e=ht()){return/blackberry/i.test(e)}function H1(e=ht()){return/webos/i.test(e)}function nh(e=ht()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function SI(e=ht()){var t;return nh(e)&&!!((t=window.navigator)!=null&&t.standalone)}function EI(){return U_()&&document.documentMode===10}function W1(e=ht()){return nh(e)||V1(e)||H1(e)||$1(e)||/windows phone/i.test(e)||B1(e)}/**
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
 */function G1(e,t=[]){let n;switch(e){case"Browser":n=Hg(ht());break;case"Worker":n=`${Hg(ht())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ya}/${r}`}/**
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
 */class CI{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,o)=>{try{const l=t(s);a(l)}catch(l){o(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function TI(e,t={}){return ys(e,"GET","/v2/passwordPolicy",eh(e,t))}/**
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
 */const _I=6;class AI{constructor(t){var r;const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??_I,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class II{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wg(this),this.idTokenSubscription=new Wg(this),this.beforeStateQueue=new CI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=P1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted){try{this.persistenceManager=await ti.create(this,t)}catch(a){Zo(`Failed to initialize persistence: ${a}`),this.persistenceManager=await ti.create(this,[])}finally{(r=this._resolvePersistenceManagerAvailable)==null||r.call(this)}if(!this._deleted){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(n)}catch(a){Zo(`Failed to initialize current user: ${a}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Fl(this,{idToken:t}),r=await tn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var s;if(yn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(s=this.redirectUser)==null?void 0:s._redirectEventId,o=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===o)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ol(t)}catch(n){if(D1(n))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=cI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(yn(this.app))return Promise.reject(ei(this));const n=t?gs(t):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&te(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return yn(this.app)?Promise.reject(ei(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return yn(this.app)?Promise.reject(ei(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(On(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await TI(this),n=new AI(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new qa("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await kI(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&On(t)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await ti.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}).catch(l=>{if(!a)if(typeof n!="function"&&n.error)n.error(l);else if(r)r(l);else throw l}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{a=!0,l()}}else{const l=t.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(t){if(this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,this.persistenceManager)try{t?await this.persistenceManager.setCurrentUser(t):await this.persistenceManager.removeCurrentUser()}catch(n){const r=(n==null?void 0:n.message)||String(n),i=Su(this,"internal-error",`An internal AuthError has occurred: ${r}`);throw i.customData={originalError:n},i}}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=G1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var n;if(yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return t!=null&&t.error&&Zo(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Eu(e){return gs(e)}class Wg{constructor(t){this.auth=t,this.observer=null,this.addObserver=G_(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let rh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NI(e){rh=e}function PI(e){return rh.loadJS(e)}function jI(){return rh.gapiScript}function RI(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function LI(e,t){const n=_1(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(is(s,t??{}))return i;Sn(i,"already-initialized")}return n.initialize({options:t})}function DI(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(On);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function MI(e,t,n){const r=Eu(e);te(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=q1(t),{host:a,port:o}=FI(t),l=o===null?"":`:${o}`,u={url:`${s}//${a}${l}/`},d=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(is(u,r.config.emulator)&&is(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Xp(a)?Y_(`${s}//${a}${l}`):OI()}function q1(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function FI(e){const t=q1(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Gg(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Gg(a)}}}function Gg(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function OI(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class K1{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Fn("not implemented")}_getIdTokenResponse(t){return Fn("not implemented")}_linkToIdToken(t,n){return Fn("not implemented")}_getReauthenticationResolver(t){return Fn("not implemented")}}/**
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
 */async function Gi(e,t){return hI(e,"POST","/v1/accounts:signInWithIdp",eh(e,t))}/**
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
 */const zI="http://localhost";class ci extends K1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new ci(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const a=new ci(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Gi(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Gi(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Gi(t,n)}buildRequest(){const t={requestUri:zI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ka(n)}return t}}/**
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
 */class ih{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qa extends ih{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class lr extends Qa{constructor(){super("facebook.com")}static credential(t){return ci._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return lr.credentialFromTaggedObject(t)}static credentialFromError(t){return lr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return lr.credential(t.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";/**
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
 */class en extends Qa{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return ci._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return en.credentialFromTaggedObject(t)}static credentialFromError(t){return en.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return en.credential(n,r)}catch{return null}}}en.GOOGLE_SIGN_IN_METHOD="google.com";en.PROVIDER_ID="google.com";/**
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
 */class ur extends Qa{constructor(){super("github.com")}static credential(t){return ci._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ur.credentialFromTaggedObject(t)}static credentialFromError(t){return ur.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ur.credential(t.oauthAccessToken)}catch{return null}}}ur.GITHUB_SIGN_IN_METHOD="github.com";ur.PROVIDER_ID="github.com";/**
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
 */class cr extends Qa{constructor(){super("twitter.com")}static credential(t,n){return ci._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return cr.credentialFromTaggedObject(t)}static credentialFromError(t){return cr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.TWITTER_SIGN_IN_METHOD="twitter.com";cr.PROVIDER_ID="twitter.com";/**
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
 */class as{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await tn._fromIdTokenResponse(t,r,i),a=qg(r);return new as({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=qg(r);return new as({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function qg(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class zl extends Pr{constructor(t,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,zl.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new zl(t,n,r,i)}}function Y1(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zl._fromErrorAndOperation(e,s,t,r):s})}async function UI(e,t,n=!1){const r=await Ra(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return as._forOperation(e,"link",r)}/**
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
 */async function BI(e,t,n=!1){const{auth:r}=e;if(yn(r.app))return Promise.reject(ei(r));const i="reauthenticate";try{const s=await Ra(e,Y1(r,i,t,e),n);te(s.idToken,r,"internal-error");const a=th(s.idToken);te(a,r,"internal-error");const{sub:o}=a;return te(e.uid===o,r,"user-mismatch"),as._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Sn(r,"user-mismatch"),s}}/**
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
 */async function VI(e,t,n=!1){if(yn(e.app))return Promise.reject(ei(e));const r="signIn",i=await Y1(e,r,t),s=await as._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function $I(e,t,n,r){return gs(e).onIdTokenChanged(t,n,r)}function HI(e,t,n){return gs(e).beforeAuthStateChanged(t,n)}const Ul="__sak";/**
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
 */class X1{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ul,"1"),this.storage.removeItem(Ul),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const WI=1e3,GI=10;class Q1 extends X1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=W1(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);EI()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,GI):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},WI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Q1.type="LOCAL";const qI=Q1;/**
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
 */class Z1 extends X1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Z1.type="SESSION";const J1=Z1;/**
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
 */function KI(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Cu{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Cu(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async u=>u(n.origin,s)),l=await KI(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cu.receivers=[];/**
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
 */function sh(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class YI{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,l)=>{const u=sh("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(p.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function bn(){return window}function XI(e){bn().location.href=e}/**
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
 */function ew(){return typeof bn().WorkerGlobalScope<"u"&&typeof bn().importScripts=="function"}async function QI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZI(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)==null?void 0:e.controller)||null}function JI(){return ew()?self:null}/**
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
 */const tw="firebaseLocalStorageDb",eN=1,Bl="firebaseLocalStorage",nw="fbase_key";class Za{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tu(e,t){return e.transaction([Bl],t?"readwrite":"readonly").objectStore(Bl)}function tN(){const e=indexedDB.deleteDatabase(tw);return new Za(e).toPromise()}function rw(){const e=indexedDB.open(tw,eN);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Bl,{keyPath:nw})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Bl)?t(r):(r.close(),await tN(),t(await rw()))})})}async function Kg(e,t,n){const r=Tu(e,!0).put({[nw]:t,value:n});return new Za(r).toPromise()}async function nN(e,t){const n=Tu(e,!1).get(t),r=await new Za(n).toPromise();return r===void 0?null:r.value}function Yg(e,t){const n=Tu(e,!0).delete(t);return new Za(n).toPromise()}const rN=800,iN=3;class iw{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(t=>t.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=rw(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>iN)throw r;if(this.dbPromise){const i=this.dbPromise;this.dbPromise=null;try{(await i).close()}catch{}}}}async initializeServiceWorkerMessaging(){return ew()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cu._getInstance(JI()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await QI(),!this.activeServiceWorker)return;this.sender=new YI(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(n=t[0])!=null&&n.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ZI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async t=>{await Kg(t,Ul,"1"),await Yg(t,Ul)}),!0):!1}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kg(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>nN(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yg(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){if(this.isClosing)return[];try{const t=await this._withRetries(i=>{const s=Tu(i,!1).getAll();return new Za(s).toPromise()});if(this.isClosing)return[];if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}catch(t){return this.isClosing||Zo(`Firebase Auth cross-tab polling failed with error: ${t}`),[]}}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}iw.type="LOCAL";const sN=iw;new Xa(3e4,6e4);/**
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
 */function sw(e,t){return t?On(t):(te(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class ah extends K1{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Gi(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Gi(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Gi(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function aN(e){return VI(e.auth,new ah(e),e.bypassAuthState)}function oN(e){const{auth:t,user:n}=e;return te(n,t,"internal-error"),BI(n,new ah(e),e.bypassAuthState)}async function lN(e){const{auth:t,user:n}=e;return te(n,t,"internal-error"),UI(n,new ah(e),e.bypassAuthState)}/**
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
 */class aw{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return aN;case"linkViaPopup":case"linkViaRedirect":return lN;case"reauthViaPopup":case"reauthViaRedirect":return oN;default:Sn(this.auth,"internal-error")}}resolve(t){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uN=new Xa(2e3,1e4);async function cN(e,t,n){if(yn(e.app))return Promise.reject(an(e,"operation-not-supported-in-this-environment"));const r=Eu(e);oI(e,t,ih);const i=sw(r,n);return new Yr(r,"signInViaPopup",t,i).executeNotNull()}class Yr extends aw{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Yr.currentPopupAction&&Yr.currentPopupAction.cancel(),Yr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return te(t,this.auth,"internal-error"),t}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const t=sh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,uN.get())};t()}}Yr.currentPopupAction=null;/**
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
 */const dN="pendingRedirect",tl=new Map;class fN extends aw{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=tl.get(this.auth._key());if(!t){try{const r=await pN(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}tl.set(this.auth._key(),t)}return this.bypassAuthState||tl.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pN(e,t){const n=gN(t),r=mN(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function hN(e,t){tl.set(e._key(),t)}function mN(e){return On(e._redirectPersistence)}function gN(e){return el(dN,e.config.apiKey,e.name)}async function yN(e,t,n=!1){if(yn(e.app))return Promise.reject(ei(e));const r=Eu(e),i=sw(r,t),a=await new fN(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
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
 */const xN=10*60*1e3;class vN{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!bN(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!ow(t)){const i=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=xN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xg(t))}saveEventToCache(t){this.cachedEventUids.add(Xg(t)),this.lastProcessedEventTime=Date.now()}}function Xg(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function ow({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function bN(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ow(e);default:return!1}}/**
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
 */async function wN(e,t={}){return ys(e,"GET","/v1/projects",t)}/**
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
 */const kN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SN=/^https?/;async function EN(e){if(e.config.emulator)return;const{authorizedDomains:t}=await wN(e);for(const n of t)try{if(CN(n))return}catch{}Sn(e,"unauthorized-domain")}function CN(e){const t=rf(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!SN.test(n))return!1;if(kN.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const TN=new Xa(3e4,6e4);function Qg(){const e=bn().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function _N(e){return new Promise((t,n)=>{var i,s,a;function r(){Qg(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Qg(),n(an(e,"network-request-failed"))},timeout:TN.get()})}if((s=(i=bn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)t(gapi.iframes.getContext());else if((a=bn().gapi)!=null&&a.load)r();else{const o=RI("iframefcb");return bn()[o]=()=>{gapi.load?r():n(an(e,"network-request-failed"))},PI(`${jI()}?onload=${o}`).catch(l=>n(l))}}).catch(t=>{throw nl=null,t})}let nl=null;function AN(e){return nl=nl||_N(e),nl}/**
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
 */const IN=new Xa(5e3,15e3),NN="__/auth/iframe",PN="emulator/auth/iframe",jN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LN(e){const t=e.config;te(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Jp(t,PN):`https://${e.config.authDomain}/${NN}`,r={apiKey:t.apiKey,appName:e.name,v:Ya},i=RN.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ka(r).slice(1)}`}async function DN(e){const t=await AN(e),n=bn().gapi;return te(n,e,"internal-error"),t.open({where:document.body,url:LN(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=an(e,"network-request-failed"),o=bn().setTimeout(()=>{s(a)},IN.get());function l(){bn().clearTimeout(o),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
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
 */const MN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FN=500,ON=600,zN="_blank",UN="http://localhost";class Zg{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BN(e,t,n,r=FN,i=ON){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l={...MN,width:r.toString(),height:i.toString(),top:s,left:a},u=ht().toLowerCase();n&&(o=U1(u)?zN:n),O1(u)&&(t=t||UN,l.scrollbars="yes");const d=Object.entries(l).reduce((p,[h,y])=>`${p}${h}=${y},`,"");if(SI(u)&&o!=="_self")return VN(t||"",o),new Zg(null);const f=window.open(t||"",o,d);te(f,e,"popup-blocked");try{f.focus()}catch{}return new Zg(f)}function VN(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const $N="__/auth/handler",HN="emulator/auth/handler",WN=encodeURIComponent("fac");async function Jg(e,t,n,r,i,s){te(e.config.authDomain,e,"auth-domain-config-required"),te(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ya,eventId:i};if(t instanceof ih){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",W_(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,f]of Object.entries({}))a[d]=f}if(t instanceof Qa){const d=t.getScopes().filter(f=>f!=="");d.length>0&&(a.scopes=d.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const d of Object.keys(o))o[d]===void 0&&delete o[d];const l=await e._getAppCheckToken(),u=l?`#${WN}=${encodeURIComponent(l)}`:"";return`${GN(e)}?${Ka(o).slice(1)}${u}`}function GN({config:e}){return e.emulator?Jp(e,HN):`https://${e.authDomain}/${$N}`}/**
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
 */const bc="webStorageSupport";class qN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=J1,this._completeRedirectFn=yN,this._overrideRedirectResult=hN}async _openPopup(t,n,r,i){var a;Yn((a=this.eventManagers[t._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await Jg(t,n,r,rf(),i);return BN(t,s,sh())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Jg(t,n,r,rf(),i);return XI(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await DN(t),r=new vN(t);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(bc,{type:bc},i=>{var a;const s=(a=i==null?void 0:i[0])==null?void 0:a[bc];s!==void 0&&n(!!s),Sn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=EN(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return W1()||z1()||nh()}}const KN=qN;var ey="@firebase/auth",ty="1.13.8";/**
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
 */class YN{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function XN(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function QN(e){Pa(new ss("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;te(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:G1(e)},u=new II(r,i,s,l);return DI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Pa(new ss("auth-internal",t=>{const n=Eu(t.getProvider("auth").getImmediate());return(r=>new YN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hi(ey,ty,XN(e)),Hi(ey,ty,"esm2020")}/**
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
 */const ZN=5*60,JN=S1("authIdTokenMaxAge")||ZN;let ny=null;const e5=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>JN)return;const i=n==null?void 0:n.token;ny!==i&&(ny=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function af(e=Dl()){const t=_1(e,"auth");if(t.isInitialized())return t.getImmediate();const n=LI(e,{popupRedirectResolver:KN,persistence:[sN,qI,J1]}),r=S1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=e5(s.toString());HI(n,a,()=>a(n.currentUser)),$I(n,o=>a(o))}}const i=L_("auth");return i&&MI(n,`http://${i}`),n}function t5(){var e;return((e=document.getElementsByTagName("head"))==null?void 0:e[0])??document}NI({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=an("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",t5().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});QN("Browser");const zn={apiKey:"AIzaSyCAxS9gkP7rlF15piWD4xHng6cRcfv-YVI",authDomain:"elizaaivoice.firebaseapp.com",projectId:"elizaaivoice",storageBucket:"elizaaivoice.firebasestorage.app",messagingSenderId:"826705071135",appId:"1:826705071135:web:b6997ba92c34349ae9992a"};function lw(){return!!(zn.apiKey&&zn.authDomain&&zn.projectId&&!zn.apiKey.includes("YOUR_"))}let Pi=null,Os=null,sr=null;if(lw())try{Pi=nf().length>0?Dl():Ll(zn),Os=af(Pi),sr=new en,sr.setCustomParameters({prompt:"select_account"})}catch(e){console.error("Failed to initialize Firebase:",e)}async function n5(){var e,t;if(!lw())if(!Pi&&zn.apiKey&&zn.projectId)Pi=nf().length>0?Dl():Ll(zn),Os=af(Pi),sr=new en,sr.setCustomParameters({prompt:"select_account"});else throw new Error("Firebase is not configured. Please add your Firebase configuration (VITE_FIREBASE_API_KEY, etc.) to .env");Os||(Os=af(Pi||(nf().length>0?Dl():Ll(zn)))),sr||(sr=new en,sr.setCustomParameters({prompt:"select_account"}));try{const n=await cN(Os,sr),r=n.user;let i="";try{i=await r.getIdToken(!1)}catch{i=r.accessToken||""}return i||(i=r.accessToken||((e=n._tokenResponse)==null?void 0:e.idToken)||""),{user:r,email:r.email,displayName:r.displayName||((t=r.email)==null?void 0:t.split("@")[0])||"User",photoURL:r.photoURL||"",idToken:i}}catch(n){if(n.code==="auth/popup-closed-by-user"||n.code==="auth/cancelled-popup-request"){const r=new Error("Sign-in cancelled. Please try again.");throw r.code="CANCELLED",r}if(n.code==="auth/popup-blocked")throw new Error("Popup blocked by browser. Please allow popups for this site and try again.");if(n.code==="auth/unauthorized-domain"){const r=new Error("UNAUTHORIZED_DOMAIN");throw r.code="auth/unauthorized-domain",r}throw new Error(n.message||"Failed to sign in with Google.")}}const r5=()=>c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",style:{flexShrink:0},children:[c.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),c.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),c.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"}),c.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"})]});function i5({onAccessGranted:e,onShowFeedback:t,isModal:n=!1,onClose:r}){const[i,s]=C.useState(!1),[a,o]=C.useState(""),[l,u]=C.useState(null);C.useEffect(()=>{if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}},[]);const d=async()=>{var p;o("");try{sessionStorage.removeItem("eliza_pending_q")}catch{}s(!0);try{const h=await n5();if(!h||!h.email)throw new Error("No Google email account received from sign-in.");const y=await Ia.googleLogin({email:h.email,name:h.displayName,picture:h.photoURL,credential:h.idToken});y.blocked?(u(y),e&&e(y)):y.allowed?e&&e(y):o(y.message||"Access not available at this time.")}catch(h){if(h.code==="CANCELLED")o("");else if(h.code==="auth/unauthorized-domain"||h.message==="UNAUTHORIZED_DOMAIN"||(p=h.message)!=null&&p.includes("unauthorized-domain")){const y=typeof window<"u"?window.location.hostname:"this domain";o(`Please authorize "${y}" in Firebase Console (Authentication > Settings > Authorized domains) to allow Google Sign-In.`)}else h.code==="auth/popup-blocked"?o("Popup blocked by browser. Please allow popups for this site and try again."):o(h.message||"Google sign-in failed. Please try again.")}finally{s(!1)}},f=p=>{if(!p)return"20 days from period start";try{return new Date(p).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return p}};return c.jsxs("div",{className:`email-gate-container ${n?"is-modal":""}`,children:[c.jsx("div",{className:"gate-glow","aria-hidden":"true"}),c.jsxs("div",{className:"gate-card",children:[r&&n&&c.jsx("button",{className:"btn-close-modal",onClick:r,"aria-label":"Close",children:c.jsx(It,{size:16})}),c.jsxs("div",{className:"brand-header",children:[c.jsx("div",{className:"brand-icon",children:c.jsx(qd,{size:20,className:"icon-pulse"})}),c.jsxs("div",{className:"brand-text",children:[c.jsxs("h2",{children:["ELIZA",c.jsx("span",{children:"AI"})]}),c.jsx("span",{children:"VOICE INTELLIGENCE TRIAL ACCESS"})]})]}),l?c.jsxs("div",{className:"limit-block-view",children:[c.jsx("div",{className:"limit-icon-circle",children:c.jsx(Wp,{size:28})}),c.jsx("h3",{children:"Your limit is over."}),c.jsx("p",{className:"limit-thanks",children:"Thank you for your consideration."}),c.jsx("p",{className:"limit-text",children:"Please provide a review and feedback to help us improve."}),c.jsxs("div",{className:"blocked-date-badge",children:[c.jsx("span",{children:"Access restricted until"}),c.jsx("b",{children:f(l.blockedUntil)})]}),c.jsx("button",{type:"button",className:"btn-feedback-primary",onClick:()=>t&&t(l),children:"Give Feedback"}),c.jsx("button",{type:"button",className:"btn-link",onClick:()=>{u(null),d()},children:"Sign in with a different Google account"})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"gate-copy",children:[c.jsx("div",{className:"trial-pill",children:"FREE TRIAL ACCESS"}),c.jsx("h3",{children:"Start your conversation"}),c.jsxs("p",{children:["Authenticate with Google to verify your email and continue your free trial. Each account receives ",c.jsx("b",{children:"3 questions per 20-day period"}),"."]})]}),a&&c.jsxs("div",{className:"error-alert",children:[c.jsx($p,{size:15}),c.jsx("span",{children:a})]}),c.jsx("div",{className:"google-auth-container",children:c.jsx("button",{type:"button",className:"btn-google-direct",onClick:d,disabled:i,children:i?c.jsxs("span",{className:"spinner-text",children:[c.jsx("span",{className:"gate-spinner"})," Connecting to Google..."]}):c.jsxs(c.Fragment,{children:[c.jsx(r5,{}),c.jsx("span",{children:"Sign in with Google"})]})})}),c.jsxs("div",{className:"gate-perks",children:[c.jsxs("div",{className:"perk-item",children:[c.jsx(Yd,{size:13}),c.jsx("span",{children:"Zero spam · Privacy guarded"})]}),c.jsxs("div",{className:"perk-item",children:[c.jsx(Kp,{size:13}),c.jsx("span",{children:"3 questions · 20-day cycle"})]})]}),c.jsxs("div",{className:"developer-showcase-box",children:[c.jsxs("div",{className:"dev-box-top",children:[c.jsx(Rl,{size:13,className:"dev-icon"}),c.jsx("span",{children:"DEVELOPED BY AKHIL THADAKA"})]}),c.jsx("p",{children:"Full-Stack & AI Voice Developer · Actively searching for better opportunities, ready to work, and available for freelance projects."}),c.jsxs("a",{href:"tel:9121751697",className:"dev-contact-pill",children:[c.jsx(_a,{size:12}),c.jsxs("span",{children:["Contact: ",c.jsx("b",{children:"9121751697"})]})]})]})]})]}),c.jsx("style",{children:`
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
      `})]})}function s5({blockedUntil:e,onGiveFeedback:t}){C.useEffect(()=>{if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}},[]);const n=r=>{if(!r)return"20 days from period start";try{return new Date(r).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return r}};return c.jsxs("div",{className:"limit-exceeded-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"limit-title",children:[c.jsxs("div",{className:"limit-exceeded-modal",children:[c.jsx("div",{className:"limit-icon-wrap",children:c.jsx(s1,{size:26,className:"limit-icon"})}),c.jsx("h2",{id:"limit-title",className:"limit-title",children:"Your limit is over."}),c.jsx("p",{className:"limit-consideration",children:"Thank you for your consideration."}),c.jsx("p",{className:"limit-instructions",children:"Please provide a review and feedback to help us improve."}),c.jsxs("div",{className:"limit-date-box",children:[c.jsxs("div",{className:"date-label",children:[c.jsx(Wp,{size:12}),c.jsx("span",{children:"Next access cycle available"})]}),c.jsx("div",{className:"date-val",children:n(e)})]}),c.jsxs("button",{type:"button",className:"btn-give-feedback",onClick:t,children:[c.jsx(a1,{size:16}),c.jsx("span",{children:"Give Feedback"})]}),c.jsxs("div",{className:"developer-showcase-box",children:[c.jsxs("div",{className:"dev-box-top",children:[c.jsx(Rl,{size:12,className:"dev-icon"}),c.jsx("span",{children:"DEVELOPED BY AKHIL THADAKA"})]}),c.jsx("p",{children:"Full-Stack & AI Voice Developer · Actively searching for better opportunities, ready to work, and available for freelance projects."}),c.jsxs("a",{href:"tel:9121751697",className:"dev-contact-pill",children:[c.jsx(_a,{size:11}),c.jsxs("span",{children:["Contact: ",c.jsx("b",{children:"9121751697"})]})]})]})]}),c.jsx("style",{children:`
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
      `})]})}const a5=["Voice Experience","Answer Quality","Freelance","Bug","Feature Request","Other"];function o5({email:e,onClose:t,onSubmitted:n}){const[r,i]=C.useState(5),[s,a]=C.useState(0),[o,l]=C.useState("Voice Experience"),[u,d]=C.useState(""),[f,p]=C.useState(!1),[h,y]=C.useState(""),[b,S]=C.useState(!1);C.useEffect(()=>{if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}},[]);const g=async m=>{m.preventDefault();const x=u.trim();if(!x||x.length<10){y("Please share at least 10 characters of feedback.");return}if(x.length>2e3){y("Feedback message must not exceed 2000 characters.");return}y(""),p(!0);try{await Ia.submitFeedback({rating:r,category:o,message:x}),S(!0),n&&n()}catch(v){y(v.message||"Failed to submit feedback. Please try again.")}finally{p(!1)}};return c.jsxs("div",{className:"feedback-modal-overlay",role:"dialog","aria-modal":"true",children:[c.jsxs("div",{className:"feedback-card",children:[c.jsxs("div",{className:"feedback-top",children:[c.jsx("div",{className:"feedback-badge",children:"FEEDBACK & REVIEW"}),t&&c.jsx("button",{className:"btn-close",onClick:t,"aria-label":"Close",children:c.jsx(It,{size:16})})]}),b?c.jsxs("div",{className:"feedback-success-state",children:[c.jsx("div",{className:"success-icon-wrap",children:c.jsx(Ta,{size:38})}),c.jsx("h3",{children:"Thank you for your feedback!"}),c.jsx("p",{children:"Your review has been saved in the database and helps us continuously refine Eliza AI."}),c.jsx("p",{className:"note-restriction",children:"The 20-day limit period remains active on your email until the scheduled expiration date."}),c.jsxs("div",{className:"developer-showcase-box",style:{marginTop:"14px"},children:[c.jsxs("div",{className:"dev-box-top",children:[c.jsx(Rl,{size:12,className:"dev-icon"}),c.jsx("span",{children:"DEVELOPED BY AKHIL THADAKA"})]}),c.jsx("p",{children:"Full-Stack & AI Voice Developer · Ready to work immediately · Available for freelance projects & better opportunities."}),c.jsxs("a",{href:"tel:9121751697",className:"dev-contact-pill",children:[c.jsx(_a,{size:11}),c.jsxs("span",{children:["Contact: ",c.jsx("b",{children:"9121751697"})]})]})]}),t&&c.jsx("button",{type:"button",className:"btn-submit-action",onClick:t,style:{marginTop:"14px"},children:"Done"})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"feedback-intro",children:[c.jsx("h3",{children:"We appreciate your review"}),c.jsx("p",{children:"Tell us how your conversation went and what we can improve."})]}),c.jsxs("form",{onSubmit:g,className:"feedback-form",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Verified Account Email"}),c.jsx("input",{type:"email",value:e||"",disabled:!0,className:"input-disabled"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Rating"}),c.jsxs("div",{className:"star-rating-row",role:"radiogroup","aria-label":"Rating from 1 to 5 stars",children:[[1,2,3,4,5].map(m=>c.jsx("button",{type:"button",className:"star-btn",onClick:()=>i(m),onMouseEnter:()=>a(m),onMouseLeave:()=>a(0),"aria-label":`${m} star`,children:c.jsx(kr,{size:20,className:`star-icon ${m<=(s||r)?"filled":"empty"}`})},m)),c.jsxs("span",{className:"rating-text",children:[r===5&&"Excellent",r===4&&"Good",r===3&&"Fair",r===2&&"Needs work",r===1&&"Poor"]})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"category-select",children:"Category"}),c.jsx("select",{id:"category-select",value:o,onChange:m=>l(m.target.value),className:"select-category",children:a5.map(m=>c.jsx("option",{value:m,children:m},m))})]}),c.jsxs("div",{className:"form-group",children:[c.jsxs("label",{htmlFor:"feedback-message",children:[c.jsx("span",{children:"Your feedback"}),c.jsxs("small",{children:[u.length,"/2000"]})]}),c.jsx("textarea",{id:"feedback-message",value:u,onChange:m=>{d(m.target.value),h&&y("")},placeholder:"Share details on your conversation, voice quality, or ideas...",rows:3,maxLength:2e3,required:!0})]}),h&&c.jsxs("div",{className:"error-alert",children:[c.jsx($p,{size:14}),c.jsx("span",{children:h})]}),c.jsxs("div",{className:"form-actions",children:[t&&c.jsxs("button",{type:"button",className:"btn-back",onClick:t,children:[c.jsx(Up,{size:13}),c.jsx("span",{children:"Cancel"})]}),c.jsx("button",{type:"submit",className:"btn-submit-action",disabled:f||!u.trim(),children:f?c.jsx("span",{children:"Submitting..."}):c.jsxs(c.Fragment,{children:[c.jsx("span",{children:"Submit Feedback"}),c.jsx(c1,{size:14})]})})]})]}),c.jsxs("div",{className:"developer-showcase-box",style:{marginTop:"12px"},children:[c.jsxs("div",{className:"dev-box-top",children:[c.jsx(Rl,{size:12,className:"dev-icon"}),c.jsx("span",{children:"DEVELOPED BY AKHIL THADAKA"})]}),c.jsx("p",{children:"Full-Stack & AI Voice Developer · Ready to work immediately · Available for freelance projects & better opportunities."}),c.jsxs("a",{href:"tel:9121751697",className:"dev-contact-pill",children:[c.jsx(_a,{size:11}),c.jsxs("span",{children:["Contact: ",c.jsx("b",{children:"9121751697"})]})]})]})]})]}),c.jsx("style",{children:`
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
      `})]})}function uw(){try{let e=sessionStorage.getItem("eliza_session_id");return e||(e=typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():"sess_"+Math.random().toString(36).substring(2)+Date.now().toString(36),sessionStorage.setItem("eliza_session_id",e)),e}catch{return"anonymous-session"}}async function Yt(e,t={}){const n={"Content-Type":"application/json","X-Session-ID":uw(),...t.headers||{}},r=await rs(`${ns}${e}`,{...t,headers:n}),i=await r.json().catch(()=>({}));if(!r.ok)throw new Error(i.detail||i.message||`Request failed (${r.status})`);return i}const Pn={health:()=>Yt("/api/v1/health"),providers:()=>Yt("/api/v1/providers"),settings:()=>Yt("/api/v1/settings"),updateSettings:e=>Yt("/api/v1/settings",{method:"PATCH",body:JSON.stringify(e)}),saveSettings:e=>Yt("/api/v1/settings",{method:"PATCH",body:JSON.stringify(e)}),conversations:()=>Yt("/api/v1/conversations"),getConversation:e=>Yt(`/api/v1/conversations/${encodeURIComponent(e)}`),conversation:e=>Yt(`/api/v1/conversations/${encodeURIComponent(e)}`),deleteConversation:e=>Yt(`/api/v1/conversations/${encodeURIComponent(e)}`,{method:"DELETE"}),chat:e=>Yt("/api/v1/chat",{method:"POST",body:JSON.stringify(e)}),audioVoices:()=>Yt("/api/v1/audio/voices"),tts:async e=>{const t={"Content-Type":"application/json","X-Session-ID":uw()};try{const n=await rs(`${ns}/api/v1/audio/tts`,{method:"POST",headers:t,body:JSON.stringify(e)});if((n.headers.get("content-type")||"").includes("audio")){const s=await n.blob();return{ok:!0,blob:s,audioUrl:URL.createObjectURL(s)}}return{ok:!1,...await n.json().catch(()=>({}))}}catch(n){return{ok:!1,error:n.message}}}},cw=C.createContext({});function l5(e){const t=C.useRef(null);return t.current===null&&(t.current=e()),t.current}const oh=C.createContext(null),dw=C.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function u5(e=!0){const t=C.useContext(oh);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=C.useId();C.useEffect(()=>{e&&i(s)},[e]);const a=C.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,a]:[!0]}const lh=typeof window<"u",c5=lh?C.useLayoutEffect:C.useEffect,Pt=e=>e;let fw=Pt;function uh(e){let t;return()=>(t===void 0&&(t=e()),t)}const os=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Bn=e=>e*1e3,Vn=e=>e/1e3,d5={useManualTiming:!1};function f5(e){let t=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function o(u){s.has(u)&&(l.schedule(u),e()),u(a)}const l={schedule:(u,d=!1,f=!1)=>{const h=f&&r?t:n;return d&&s.add(u),h.has(u)||h.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(a=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(o),t.clear(),r=!1,i&&(i=!1,l.process(u))}};return l}const Io=["read","resolveKeyframes","update","preRender","render","postRender"],p5=40;function pw(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,a=Io.reduce((g,m)=>(g[m]=f5(s),g),{}),{read:o,resolveKeyframes:l,update:u,preRender:d,render:f,postRender:p}=a,h=()=>{const g=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(g-i.timestamp,p5),1),i.timestamp=g,i.isProcessing=!0,o.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},y=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:Io.reduce((g,m)=>{const x=a[m];return g[m]=(v,E=!1,w=!1)=>(n||y(),x.schedule(v,E,w)),g},{}),cancel:g=>{for(let m=0;m<Io.length;m++)a[Io[m]].cancel(g)},state:i,steps:a}}const{schedule:Ee,cancel:Tr,state:Qe,steps:wc}=pw(typeof requestAnimationFrame<"u"?requestAnimationFrame:Pt,!0),hw=C.createContext({strict:!1}),ry={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ls={};for(const e in ry)ls[e]={isEnabled:t=>ry[e].some(n=>!!t[n])};function h5(e){for(const t in e)ls[t]={...ls[t],...e[t]}}const m5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Vl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||m5.has(e)}let mw=e=>!Vl(e);function g5(e){e&&(mw=t=>t.startsWith("on")?!Vl(t):e(t))}try{g5(require("@emotion/is-prop-valid").default)}catch{}function y5(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(mw(i)||n===!0&&Vl(i)||!t&&!Vl(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function x5(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const _u=C.createContext({});function La(e){return typeof e=="string"||Array.isArray(e)}function Au(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const ch=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],dh=["initial",...ch];function Iu(e){return Au(e.animate)||dh.some(t=>La(e[t]))}function gw(e){return!!(Iu(e)||e.variants)}function v5(e,t){if(Iu(e)){const{initial:n,animate:r}=e;return{initial:n===!1||La(n)?n:void 0,animate:La(r)?r:void 0}}return e.inherit!==!1?t:{}}function b5(e){const{initial:t,animate:n}=v5(e,C.useContext(_u));return C.useMemo(()=>({initial:t,animate:n}),[iy(t),iy(n)])}function iy(e){return Array.isArray(e)?e.join(" "):e}const w5=Symbol.for("motionComponentSymbol");function ji(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function k5(e,t,n){return C.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):ji(n)&&(n.current=r))},[t])}const fh=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),S5="framerAppearId",yw="data-"+fh(S5),{schedule:ph}=pw(queueMicrotask,!1),xw=C.createContext({});function E5(e,t,n,r,i){var s,a;const{visualElement:o}=C.useContext(_u),l=C.useContext(hw),u=C.useContext(oh),d=C.useContext(dw).reducedMotion,f=C.useRef(null);r=r||l.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const p=f.current,h=C.useContext(xw);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&C5(f.current,n,i,h);const y=C.useRef(!1);C.useInsertionEffect(()=>{p&&y.current&&p.update(n,u)});const b=n[yw],S=C.useRef(!!b&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,b))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,b)));return c5(()=>{p&&(y.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),ph.render(p.render),S.current&&p.animationState&&p.animationState.animateChanges())}),C.useEffect(()=>{p&&(!S.current&&p.animationState&&p.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var g;(g=window.MotionHandoffMarkAsComplete)===null||g===void 0||g.call(window,b)}),S.current=!1))}),p}function C5(e,t,n,r){const{layoutId:i,layout:s,drag:a,dragConstraints:o,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:vw(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!a||o&&ji(o),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function vw(e){if(e)return e.options.allowProjection!==!1?e.projection:vw(e.parent)}function T5({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var s,a;e&&h5(e);function o(u,d){let f;const p={...C.useContext(dw),...u,layoutId:_5(u)},{isStatic:h}=p,y=b5(u),b=r(u,h);if(!h&&lh){A5();const S=I5(p);f=S.MeasureLayout,y.visualElement=E5(i,b,p,t,S.ProjectionNode)}return c.jsxs(_u.Provider,{value:y,children:[f&&y.visualElement?c.jsx(f,{visualElement:y.visualElement,...p}):null,n(i,u,k5(b,y.visualElement,d),b,h,y.visualElement)]})}o.displayName=`motion.${typeof i=="string"?i:`create(${(a=(s=i.displayName)!==null&&s!==void 0?s:i.name)!==null&&a!==void 0?a:""})`}`;const l=C.forwardRef(o);return l[w5]=i,l}function _5({layoutId:e}){const t=C.useContext(cw).id;return t&&e!==void 0?t+"-"+e:e}function A5(e,t){C.useContext(hw).strict}function I5(e){const{drag:t,layout:n}=ls;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const N5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function hh(e){return typeof e!="string"||e.includes("-")?!1:!!(N5.indexOf(e)>-1||/[A-Z]/u.test(e))}function sy(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function mh(e,t,n,r){if(typeof t=="function"){const[i,s]=sy(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=sy(r);t=t(n!==void 0?n:e.custom,i,s)}return t}const of=e=>Array.isArray(e),P5=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),j5=e=>of(e)?e[e.length-1]||0:e,at=e=>!!(e&&e.getVelocity);function rl(e){const t=at(e)?e.get():e;return P5(t)?t.toValue():t}function R5({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,s){const a={latestValues:L5(r,i,s,e),renderState:t()};return n&&(a.onMount=o=>n({props:r,current:o,...a}),a.onUpdate=o=>n(o)),a}const bw=e=>(t,n)=>{const r=C.useContext(_u),i=C.useContext(oh),s=()=>R5(e,t,r,i);return n?s():l5(s)};function L5(e,t,n,r){const i={},s=r(e,{});for(const p in s)i[p]=rl(s[p]);let{initial:a,animate:o}=e;const l=Iu(e),u=gw(e);t&&u&&!l&&e.inherit!==!1&&(a===void 0&&(a=t.initial),o===void 0&&(o=t.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const f=d?o:a;if(f&&typeof f!="boolean"&&!Au(f)){const p=Array.isArray(f)?f:[f];for(let h=0;h<p.length;h++){const y=mh(e,p[h]);if(y){const{transitionEnd:b,transition:S,...g}=y;for(const m in g){let x=g[m];if(Array.isArray(x)){const v=d?x.length-1:0;x=x[v]}x!==null&&(i[m]=x)}for(const m in b)i[m]=b[m]}}}return i}const xs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],hi=new Set(xs),ww=e=>t=>typeof t=="string"&&t.startsWith(e),kw=ww("--"),D5=ww("var(--"),gh=e=>D5(e)?M5.test(e.split("/*")[0].trim()):!1,M5=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Sw=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Xn=(e,t,n)=>n>t?t:n<e?e:n,vs={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Da={...vs,transform:e=>Xn(0,1,e)},No={...vs,default:1},Ja=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),nr=Ja("deg"),wn=Ja("%"),J=Ja("px"),F5=Ja("vh"),O5=Ja("vw"),ay={...wn,parse:e=>wn.parse(e)/100,transform:e=>wn.transform(e*100)},z5={borderWidth:J,borderTopWidth:J,borderRightWidth:J,borderBottomWidth:J,borderLeftWidth:J,borderRadius:J,radius:J,borderTopLeftRadius:J,borderTopRightRadius:J,borderBottomRightRadius:J,borderBottomLeftRadius:J,width:J,maxWidth:J,height:J,maxHeight:J,top:J,right:J,bottom:J,left:J,padding:J,paddingTop:J,paddingRight:J,paddingBottom:J,paddingLeft:J,margin:J,marginTop:J,marginRight:J,marginBottom:J,marginLeft:J,backgroundPositionX:J,backgroundPositionY:J},U5={rotate:nr,rotateX:nr,rotateY:nr,rotateZ:nr,scale:No,scaleX:No,scaleY:No,scaleZ:No,skew:nr,skewX:nr,skewY:nr,distance:J,translateX:J,translateY:J,translateZ:J,x:J,y:J,z:J,perspective:J,transformPerspective:J,opacity:Da,originX:ay,originY:ay,originZ:J},oy={...vs,transform:Math.round},yh={...z5,...U5,zIndex:oy,size:J,fillOpacity:Da,strokeOpacity:Da,numOctaves:oy},B5={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},V5=xs.length;function $5(e,t,n){let r="",i=!0;for(let s=0;s<V5;s++){const a=xs[s],o=e[a];if(o===void 0)continue;let l=!0;if(typeof o=="number"?l=o===(a.startsWith("scale")?1:0):l=parseFloat(o)===0,!l||n){const u=Sw(o,yh[a]);if(!l){i=!1;const d=B5[a]||a;r+=`${d}(${u}) `}n&&(t[a]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function xh(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let a=!1,o=!1;for(const l in t){const u=t[l];if(hi.has(l)){a=!0;continue}else if(kw(l)){i[l]=u;continue}else{const d=Sw(u,yh[l]);l.startsWith("origin")?(o=!0,s[l]=d):r[l]=d}}if(t.transform||(a||n?r.transform=$5(t,e.transform,n):r.transform&&(r.transform="none")),o){const{originX:l="50%",originY:u="50%",originZ:d=0}=s;r.transformOrigin=`${l} ${u} ${d}`}}const H5={offset:"stroke-dashoffset",array:"stroke-dasharray"},W5={offset:"strokeDashoffset",array:"strokeDasharray"};function G5(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?H5:W5;e[s.offset]=J.transform(-r);const a=J.transform(t),o=J.transform(n);e[s.array]=`${a} ${o}`}function ly(e,t,n){return typeof e=="string"?e:J.transform(t+n*e)}function q5(e,t,n){const r=ly(t,e.x,e.width),i=ly(n,e.y,e.height);return`${r} ${i}`}function vh(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:a,pathSpacing:o=1,pathOffset:l=0,...u},d,f){if(xh(e,u,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:h,dimensions:y}=e;p.transform&&(y&&(h.transform=p.transform),delete p.transform),y&&(i!==void 0||s!==void 0||h.transform)&&(h.transformOrigin=q5(y,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),a!==void 0&&G5(p,a,o,l,!1)}const bh=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Ew=()=>({...bh(),attrs:{}}),wh=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Cw(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const Tw=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function _w(e,t,n,r){Cw(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Tw.has(i)?i:fh(i),t.attrs[i])}const $l={};function K5(e){Object.assign($l,e)}function Aw(e,{layout:t,layoutId:n}){return hi.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!$l[e]||e==="opacity")}function kh(e,t,n){var r;const{style:i}=e,s={};for(const a in i)(at(i[a])||t.style&&at(t.style[a])||Aw(a,e)||((r=n==null?void 0:n.getValue(a))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[a]=i[a]);return s}function Iw(e,t,n){const r=kh(e,t,n);for(const i in e)if(at(e[i])||at(t[i])){const s=xs.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}function Y5(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const uy=["x","y","width","height","cx","cy","r"],X5={useVisualState:bw({scrapeMotionValuesFromProps:Iw,createRenderState:Ew,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let s=!!e.drag;if(!s){for(const o in i)if(hi.has(o)){s=!0;break}}if(!s)return;let a=!t;if(t)for(let o=0;o<uy.length;o++){const l=uy[o];e[l]!==t[l]&&(a=!0)}a&&Ee.read(()=>{Y5(n,r),Ee.render(()=>{vh(r,i,wh(n.tagName),e.transformTemplate),_w(n,r)})})}})},Q5={useVisualState:bw({scrapeMotionValuesFromProps:kh,createRenderState:bh})};function Nw(e,t,n){for(const r in t)!at(t[r])&&!Aw(r,n)&&(e[r]=t[r])}function Z5({transformTemplate:e},t){return C.useMemo(()=>{const n=bh();return xh(n,t,e),Object.assign({},n.vars,n.style)},[t])}function J5(e,t){const n=e.style||{},r={};return Nw(r,n,e),Object.assign(r,Z5(e,t)),r}function eP(e,t){const n={},r=J5(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function tP(e,t,n,r){const i=C.useMemo(()=>{const s=Ew();return vh(s,t,wh(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};Nw(s,e.style,e),i.style={...s,...i.style}}return i}function nP(e=!1){return(n,r,i,{latestValues:s},a)=>{const l=(hh(n)?tP:eP)(r,s,a,n),u=y5(r,typeof n=="string",e),d=n!==C.Fragment?{...u,...l,ref:i}:{},{children:f}=r,p=C.useMemo(()=>at(f)?f.get():f,[f]);return C.createElement(n,{...d,children:p})}}function rP(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const a={...hh(r)?X5:Q5,preloadedFeatures:e,useRender:nP(i),createVisualElement:t,Component:r};return T5(a)}}function Pw(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Nu(e,t,n){const r=e.getProps();return mh(r,t,n!==void 0?n:r.custom,e)}const iP=uh(()=>window.ScrollTimeline!==void 0);class sP{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(iP()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class aP extends sP{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function Sh(e,t){return e?e[t]||e.default||e:void 0}const lf=2e4;function jw(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<lf;)t+=n,r=e.next(t);return t>=lf?1/0:t}function Eh(e){return typeof e=="function"}function cy(e,t){e.timeline=t,e.onfinish=null}const Ch=e=>Array.isArray(e)&&typeof e[0]=="number",oP={linearEasing:void 0};function lP(e,t){const n=uh(e);return()=>{var r;return(r=oP[t])!==null&&r!==void 0?r:n()}}const Hl=lP(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Rw=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=e(os(0,i-1,s))+", ";return`linear(${r.substring(0,r.length-2)})`};function Lw(e){return!!(typeof e=="function"&&Hl()||!e||typeof e=="string"&&(e in uf||Hl())||Ch(e)||Array.isArray(e)&&e.every(Lw))}const zs=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,uf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:zs([0,.65,.55,1]),circOut:zs([.55,0,1,.45]),backIn:zs([.31,.01,.66,-.59]),backOut:zs([.33,1.53,.69,.99])};function Dw(e,t){if(e)return typeof e=="function"&&Hl()?Rw(e,t):Ch(e)?zs(e):Array.isArray(e)?e.map(n=>Dw(n,t)||uf.easeOut):uf[e]}const Xt={x:!1,y:!1};function Mw(){return Xt.x||Xt.y}function uP(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const s=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e)}function Fw(e,t){const n=uP(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function dy(e){return t=>{t.pointerType==="touch"||Mw()||e(t)}}function cP(e,t,n={}){const[r,i,s]=Fw(e,n),a=dy(o=>{const{target:l}=o,u=t(o);if(typeof u!="function"||!l)return;const d=dy(f=>{u(f),l.removeEventListener("pointerleave",d)});l.addEventListener("pointerleave",d,i)});return r.forEach(o=>{o.addEventListener("pointerenter",a,i)}),s}const Ow=(e,t)=>t?e===t?!0:Ow(e,t.parentElement):!1,Th=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,dP=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function fP(e){return dP.has(e.tagName)||e.tabIndex!==-1}const Us=new WeakSet;function fy(e){return t=>{t.key==="Enter"&&e(t)}}function kc(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const pP=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=fy(()=>{if(Us.has(n))return;kc(n,"down");const i=fy(()=>{kc(n,"up")}),s=()=>kc(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function py(e){return Th(e)&&!Mw()}function hP(e,t,n={}){const[r,i,s]=Fw(e,n),a=o=>{const l=o.currentTarget;if(!py(o)||Us.has(l))return;Us.add(l);const u=t(o),d=(h,y)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),!(!py(h)||!Us.has(l))&&(Us.delete(l),typeof u=="function"&&u(h,{success:y}))},f=h=>{d(h,n.useGlobalTarget||Ow(l,h.target))},p=h=>{d(h,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(o=>{!fP(o)&&o.getAttribute("tabindex")===null&&(o.tabIndex=0),(n.useGlobalTarget?window:o).addEventListener("pointerdown",a,i),o.addEventListener("focus",u=>pP(u,i),i)}),s}function mP(e){return e==="x"||e==="y"?Xt[e]?null:(Xt[e]=!0,()=>{Xt[e]=!1}):Xt.x||Xt.y?null:(Xt.x=Xt.y=!0,()=>{Xt.x=Xt.y=!1})}const zw=new Set(["width","height","top","left","right","bottom",...xs]);let il;function gP(){il=void 0}const kn={now:()=>(il===void 0&&kn.set(Qe.isProcessing||d5.useManualTiming?Qe.timestamp:performance.now()),il),set:e=>{il=e,queueMicrotask(gP)}};function _h(e,t){e.indexOf(t)===-1&&e.push(t)}function Ah(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Ih{constructor(){this.subscriptions=[]}add(t){return _h(this.subscriptions,t),()=>Ah(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const a=this.subscriptions[s];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Uw(e,t){return t?e*(1e3/t):0}const hy=30,yP=e=>!isNaN(parseFloat(e));class xP{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=kn.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=kn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=yP(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Ih);const r=this.events[t].add(n);return t==="change"?()=>{r(),Ee.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=kn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>hy)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,hy);return Uw(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ma(e,t){return new xP(e,t)}function vP(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ma(n))}function bP(e,t){const n=Nu(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const a in s){const o=j5(s[a]);vP(e,a,o)}}function wP(e){return!!(at(e)&&e.add)}function cf(e,t){const n=e.getValue("willChange");if(wP(n))return n.add(t)}function Bw(e){return e.props[yw]}const Vw=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,kP=1e-7,SP=12;function EP(e,t,n,r,i){let s,a,o=0;do a=t+(n-t)/2,s=Vw(a,r,i)-e,s>0?n=a:t=a;while(Math.abs(s)>kP&&++o<SP);return a}function eo(e,t,n,r){if(e===t&&n===r)return Pt;const i=s=>EP(s,0,1,e,n);return s=>s===0||s===1?s:Vw(i(s),t,r)}const $w=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Hw=e=>t=>1-e(1-t),Ww=eo(.33,1.53,.69,.99),Nh=Hw(Ww),Gw=$w(Nh),qw=e=>(e*=2)<1?.5*Nh(e):.5*(2-Math.pow(2,-10*(e-1))),Ph=e=>1-Math.sin(Math.acos(e)),Kw=Hw(Ph),Yw=$w(Ph),Xw=e=>/^0[^.\s]+$/u.test(e);function CP(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Xw(e):!0}const ea=e=>Math.round(e*1e5)/1e5,jh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function TP(e){return e==null}const _P=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Rh=(e,t)=>n=>!!(typeof n=="string"&&_P.test(n)&&n.startsWith(e)||t&&!TP(n)&&Object.prototype.hasOwnProperty.call(n,t)),Qw=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,a,o]=r.match(jh);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(a),alpha:o!==void 0?parseFloat(o):1}},AP=e=>Xn(0,255,e),Sc={...vs,transform:e=>Math.round(AP(e))},Xr={test:Rh("rgb","red"),parse:Qw("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Sc.transform(e)+", "+Sc.transform(t)+", "+Sc.transform(n)+", "+ea(Da.transform(r))+")"};function IP(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const df={test:Rh("#"),parse:IP,transform:Xr.transform},Ri={test:Rh("hsl","hue"),parse:Qw("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+wn.transform(ea(t))+", "+wn.transform(ea(n))+", "+ea(Da.transform(r))+")"},rt={test:e=>Xr.test(e)||df.test(e)||Ri.test(e),parse:e=>Xr.test(e)?Xr.parse(e):Ri.test(e)?Ri.parse(e):df.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Xr.transform(e):Ri.transform(e)},NP=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function PP(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(jh))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(NP))===null||n===void 0?void 0:n.length)||0)>0}const Zw="number",Jw="color",jP="var",RP="var(",my="${}",LP=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Fa(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const o=t.replace(LP,l=>(rt.test(l)?(r.color.push(s),i.push(Jw),n.push(rt.parse(l))):l.startsWith(RP)?(r.var.push(s),i.push(jP),n.push(l)):(r.number.push(s),i.push(Zw),n.push(parseFloat(l))),++s,my)).split(my);return{values:n,split:o,indexes:r,types:i}}function ek(e){return Fa(e).values}function tk(e){const{split:t,types:n}=Fa(e),r=t.length;return i=>{let s="";for(let a=0;a<r;a++)if(s+=t[a],i[a]!==void 0){const o=n[a];o===Zw?s+=ea(i[a]):o===Jw?s+=rt.transform(i[a]):s+=i[a]}return s}}const DP=e=>typeof e=="number"?0:e;function MP(e){const t=ek(e);return tk(e)(t.map(DP))}const _r={test:PP,parse:ek,createTransformer:tk,getAnimatableNone:MP},FP=new Set(["brightness","contrast","saturate","opacity"]);function OP(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(jh)||[];if(!r)return e;const i=n.replace(r,"");let s=FP.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const zP=/\b([a-z-]*)\(.*?\)/gu,ff={..._r,getAnimatableNone:e=>{const t=e.match(zP);return t?t.map(OP).join(" "):e}},UP={...yh,color:rt,backgroundColor:rt,outlineColor:rt,fill:rt,stroke:rt,borderColor:rt,borderTopColor:rt,borderRightColor:rt,borderBottomColor:rt,borderLeftColor:rt,filter:ff,WebkitFilter:ff},Lh=e=>UP[e];function nk(e,t){let n=Lh(e);return n!==ff&&(n=_r),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const BP=new Set(["auto","none","0"]);function VP(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!BP.has(s)&&Fa(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=nk(n,i)}const gy=e=>e===vs||e===J,yy=(e,t)=>parseFloat(e.split(", ")[t]),xy=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return yy(i[1],t);{const s=r.match(/^matrix\((.+)\)$/u);return s?yy(s[1],e):0}},$P=new Set(["x","y","z"]),HP=xs.filter(e=>!$P.has(e));function WP(e){const t=[];return HP.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const us={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:xy(4,13),y:xy(5,14)};us.translateX=us.x;us.translateY=us.y;const ni=new Set;let pf=!1,hf=!1;function rk(){if(hf){const e=Array.from(ni).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=WP(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,a])=>{var o;(o=r.getValue(s))===null||o===void 0||o.set(a)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}hf=!1,pf=!1,ni.forEach(e=>e.complete()),ni.clear()}function ik(){ni.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(hf=!0)})}function GP(){ik(),rk()}class Dh{constructor(t,n,r,i,s,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ni.add(this),pf||(pf=!0,Ee.read(ik),Ee.resolveKeyframes(rk))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let s=0;s<t.length;s++)if(t[s]===null)if(s===0){const a=i==null?void 0:i.get(),o=t[t.length-1];if(a!==void 0)t[0]=a;else if(r&&n){const l=r.readValue(n,o);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=o),i&&a===void 0&&i.set(t[0])}else t[s]=t[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),ni.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ni.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const sk=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),qP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function KP(e){const t=qP.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function ak(e,t,n=1){const[r,i]=KP(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const a=s.trim();return sk(a)?parseFloat(a):a}return gh(i)?ak(i,t,n+1):i}const ok=e=>t=>t.test(e),YP={test:e=>e==="auto",parse:e=>e},lk=[vs,J,wn,nr,O5,F5,YP],vy=e=>lk.find(ok(e));class uk extends Dh{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),gh(u))){const d=ak(u,n.current);d!==void 0&&(t[l]=d),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!zw.has(r)||t.length!==2)return;const[i,s]=t,a=vy(i),o=vy(s);if(a!==o)if(gy(a)&&gy(o))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)CP(t[i])&&r.push(i);r.length&&VP(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=us[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const a=i.length-1,o=i[a];i[a]=us[r](n.measureViewportBox(),window.getComputedStyle(n.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const by=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(_r.test(e)||e==="0")&&!e.startsWith("url("));function XP(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function QP(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],a=by(i,t),o=by(s,t);return!a||!o?!1:XP(e)||(n==="spring"||Eh(n))&&r}const ZP=e=>e!==null;function Pu(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(ZP),s=t&&n!=="loop"&&t%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const JP=40;class ck{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:a="loop",...o}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=kn.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:a,...o},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>JP?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&GP(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=kn.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:a,onComplete:o,onUpdate:l,isGenerator:u}=this.options;if(!u&&!QP(t,r,i,s))if(a)this.options.duration=0;else{l&&l(Pu(t,this.options,n)),o&&o(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const Ne=(e,t,n)=>e+(t-e)*n;function Ec(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ej({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,a=0;if(!t)i=s=a=n;else{const o=n<.5?n*(1+t):n+t-n*t,l=2*n-o;i=Ec(l,o,e+1/3),s=Ec(l,o,e),a=Ec(l,o,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:r}}function Wl(e,t){return n=>n>0?t:e}const Cc=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},tj=[df,Xr,Ri],nj=e=>tj.find(t=>t.test(e));function wy(e){const t=nj(e);if(!t)return!1;let n=t.parse(e);return t===Ri&&(n=ej(n)),n}const ky=(e,t)=>{const n=wy(e),r=wy(t);if(!n||!r)return Wl(e,t);const i={...n};return s=>(i.red=Cc(n.red,r.red,s),i.green=Cc(n.green,r.green,s),i.blue=Cc(n.blue,r.blue,s),i.alpha=Ne(n.alpha,r.alpha,s),Xr.transform(i))},rj=(e,t)=>n=>t(e(n)),to=(...e)=>e.reduce(rj),mf=new Set(["none","hidden"]);function ij(e,t){return mf.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function sj(e,t){return n=>Ne(e,t,n)}function Mh(e){return typeof e=="number"?sj:typeof e=="string"?gh(e)?Wl:rt.test(e)?ky:lj:Array.isArray(e)?dk:typeof e=="object"?rt.test(e)?ky:aj:Wl}function dk(e,t){const n=[...e],r=n.length,i=e.map((s,a)=>Mh(s)(s,t[a]));return s=>{for(let a=0;a<r;a++)n[a]=i[a](s);return n}}function aj(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Mh(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function oj(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const a=t.types[s],o=e.indexes[a][i[a]],l=(n=e.values[o])!==null&&n!==void 0?n:0;r[s]=l,i[a]++}return r}const lj=(e,t)=>{const n=_r.createTransformer(t),r=Fa(e),i=Fa(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?mf.has(e)&&!i.values.length||mf.has(t)&&!r.values.length?ij(e,t):to(dk(oj(r,i),i.values),n):Wl(e,t)};function fk(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Ne(e,t,n):Mh(e)(e,t)}const uj=5;function pk(e,t,n){const r=Math.max(t-uj,0);return Uw(n-e(r),t-r)}const Le={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Tc=.001;function cj({duration:e=Le.duration,bounce:t=Le.bounce,velocity:n=Le.velocity,mass:r=Le.mass}){let i,s,a=1-t;a=Xn(Le.minDamping,Le.maxDamping,a),e=Xn(Le.minDuration,Le.maxDuration,Vn(e)),a<1?(i=u=>{const d=u*a,f=d*e,p=d-n,h=gf(u,a),y=Math.exp(-f);return Tc-p/h*y},s=u=>{const f=u*a*e,p=f*n+n,h=Math.pow(a,2)*Math.pow(u,2)*e,y=Math.exp(-f),b=gf(Math.pow(u,2),a);return(-i(u)+Tc>0?-1:1)*((p-h)*y)/b}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-Tc+d*f},s=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const o=5/e,l=fj(i,s,o);if(e=Bn(e),isNaN(l))return{stiffness:Le.stiffness,damping:Le.damping,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const dj=12;function fj(e,t,n){let r=n;for(let i=1;i<dj;i++)r=r-e(r)/t(r);return r}function gf(e,t){return e*Math.sqrt(1-t*t)}const pj=["duration","bounce"],hj=["stiffness","damping","mass"];function Sy(e,t){return t.some(n=>e[n]!==void 0)}function mj(e){let t={velocity:Le.velocity,stiffness:Le.stiffness,damping:Le.damping,mass:Le.mass,isResolvedFromDuration:!1,...e};if(!Sy(e,hj)&&Sy(e,pj))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*Xn(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Le.mass,stiffness:i,damping:s}}else{const n=cj(e);t={...t,...n,mass:Le.mass},t.isResolvedFromDuration=!0}return t}function hk(e=Le.visualDuration,t=Le.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],o={done:!1,value:s},{stiffness:l,damping:u,mass:d,duration:f,velocity:p,isResolvedFromDuration:h}=mj({...n,velocity:-Vn(n.velocity||0)}),y=p||0,b=u/(2*Math.sqrt(l*d)),S=a-s,g=Vn(Math.sqrt(l/d)),m=Math.abs(S)<5;r||(r=m?Le.restSpeed.granular:Le.restSpeed.default),i||(i=m?Le.restDelta.granular:Le.restDelta.default);let x;if(b<1){const E=gf(g,b);x=w=>{const I=Math.exp(-b*g*w);return a-I*((y+b*g*S)/E*Math.sin(E*w)+S*Math.cos(E*w))}}else if(b===1)x=E=>a-Math.exp(-g*E)*(S+(y+g*S)*E);else{const E=g*Math.sqrt(b*b-1);x=w=>{const I=Math.exp(-b*g*w),P=Math.min(E*w,300);return a-I*((y+b*g*S)*Math.sinh(P)+E*S*Math.cosh(P))/E}}const v={calculatedDuration:h&&f||null,next:E=>{const w=x(E);if(h)o.done=E>=f;else{let I=0;b<1&&(I=E===0?Bn(y):pk(x,E,w));const P=Math.abs(I)<=r,R=Math.abs(a-w)<=i;o.done=P&&R}return o.value=o.done?a:w,o},toString:()=>{const E=Math.min(jw(v),lf),w=Rw(I=>v.next(E*I).value,E,30);return E+"ms "+w}};return v}function Ey({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:a,min:o,max:l,restDelta:u=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},h=P=>o!==void 0&&P<o||l!==void 0&&P>l,y=P=>o===void 0?l:l===void 0||Math.abs(o-P)<Math.abs(l-P)?o:l;let b=n*t;const S=f+b,g=a===void 0?S:a(S);g!==S&&(b=g-f);const m=P=>-b*Math.exp(-P/r),x=P=>g+m(P),v=P=>{const R=m(P),_=x(P);p.done=Math.abs(R)<=u,p.value=p.done?g:_};let E,w;const I=P=>{h(p.value)&&(E=P,w=hk({keyframes:[p.value,y(p.value)],velocity:pk(x,P,p.value),damping:i,stiffness:s,restDelta:u,restSpeed:d}))};return I(0),{calculatedDuration:null,next:P=>{let R=!1;return!w&&E===void 0&&(R=!0,v(P),I(P)),E!==void 0&&P>=E?w.next(P-E):(!R&&v(P),p)}}}const gj=eo(.42,0,1,1),yj=eo(0,0,.58,1),mk=eo(.42,0,.58,1),xj=e=>Array.isArray(e)&&typeof e[0]!="number",vj={linear:Pt,easeIn:gj,easeInOut:mk,easeOut:yj,circIn:Ph,circInOut:Yw,circOut:Kw,backIn:Nh,backInOut:Gw,backOut:Ww,anticipate:qw},Cy=e=>{if(Ch(e)){fw(e.length===4);const[t,n,r,i]=e;return eo(t,n,r,i)}else if(typeof e=="string")return vj[e];return e};function bj(e,t,n){const r=[],i=n||fk,s=e.length-1;for(let a=0;a<s;a++){let o=i(e[a],e[a+1]);if(t){const l=Array.isArray(t)?t[a]||Pt:t;o=to(l,o)}r.push(o)}return r}function wj(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(fw(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const a=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=bj(t,r,i),l=o.length,u=d=>{if(a&&d<e[0])return t[0];let f=0;if(l>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=os(e[f],e[f+1],d);return o[f](p)};return n?d=>u(Xn(e[0],e[s-1],d)):u}function kj(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=os(0,t,r);e.push(Ne(n,1,i))}}function Sj(e){const t=[0];return kj(t,e.length-1),t}function Ej(e,t){return e.map(n=>n*t)}function Cj(e,t){return e.map(()=>t||mk).splice(0,e.length-1)}function Gl({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=xj(r)?r.map(Cy):Cy(r),s={done:!1,value:t[0]},a=Ej(n&&n.length===t.length?n:Sj(t),e),o=wj(a,t,{ease:Array.isArray(i)?i:Cj(t,i)});return{calculatedDuration:e,next:l=>(s.value=o(l),s.done=l>=e,s)}}const Tj=e=>{const t=({timestamp:n})=>e(n);return{start:()=>Ee.update(t,!0),stop:()=>Tr(t),now:()=>Qe.isProcessing?Qe.timestamp:kn.now()}},_j={decay:Ey,inertia:Ey,tween:Gl,keyframes:Gl,spring:hk},Aj=e=>e/100;class Fh extends ck{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,a=(i==null?void 0:i.KeyframeResolver)||Dh,o=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new a(s,o,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:a=0}=this.options,o=Eh(n)?n:_j[n]||Gl;let l,u;o!==Gl&&typeof t[0]!="number"&&(l=to(Aj,fk(t[0],t[1])),t=[0,100]);const d=o({...this.options,keyframes:t});s==="mirror"&&(u=o({...this.options,keyframes:[...t].reverse(),velocity:-a})),d.calculatedDuration===null&&(d.calculatedDuration=jw(d));const{calculatedDuration:f}=d,p=f+i,h=p*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:p,totalDuration:h}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:P}=this.options;return{done:!0,value:P[P.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:a,mapPercentToKeyframes:o,keyframes:l,calculatedDuration:u,totalDuration:d,resolvedDuration:f}=r;if(this.startTime===null)return s.next(0);const{delay:p,repeat:h,repeatType:y,repeatDelay:b,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const g=this.currentTime-p*(this.speed>=0?1:-1),m=this.speed>=0?g<0:g>d;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let x=this.currentTime,v=s;if(h){const P=Math.min(this.currentTime,d)/f;let R=Math.floor(P),_=P%1;!_&&P>=1&&(_=1),_===1&&R--,R=Math.min(R,h+1),!!(R%2)&&(y==="reverse"?(_=1-_,b&&(_-=b/f)):y==="mirror"&&(v=a)),x=Xn(0,1,_)*f}const E=m?{done:!1,value:l[0]}:v.next(x);o&&(E.value=o(E.value));let{done:w}=E;!m&&u!==null&&(w=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const I=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&w);return I&&i!==void 0&&(E.value=Pu(l,this.options,i)),S&&S(E.value),I&&this.finish(),E}get duration(){const{resolved:t}=this;return t?Vn(t.calculatedDuration):0}get time(){return Vn(this.currentTime)}set time(t){t=Bn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Vn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=Tj,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const Ij=new Set(["opacity","clipPath","filter","transform"]);function Nj(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:a="loop",ease:o="easeInOut",times:l}={}){const u={[t]:n};l&&(u.offset=l);const d=Dw(o,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"})}const Pj=uh(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ql=10,jj=2e4;function Rj(e){return Eh(e.type)||e.type==="spring"||!Lw(e.ease)}function Lj(e,t){const n=new Fh({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let s=0;for(;!r.done&&s<jj;)r=n.sample(s),i.push(r.value),s+=ql;return{times:void 0,keyframes:i,duration:s-ql,ease:"linear"}}const gk={anticipate:qw,backInOut:Gw,circInOut:Yw};function Dj(e){return e in gk}class Ty extends ck{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new uk(s,(a,o)=>this.onKeyframesResolved(a,o),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:s,type:a,motionValue:o,name:l,startTime:u}=this.options;if(!o.owner||!o.owner.current)return!1;if(typeof s=="string"&&Hl()&&Dj(s)&&(s=gk[s]),Rj(this.options)){const{onComplete:f,onUpdate:p,motionValue:h,element:y,...b}=this.options,S=Lj(t,b);t=S.keyframes,t.length===1&&(t[1]=t[0]),r=S.duration,i=S.times,s=S.ease,a="keyframes"}const d=Nj(o.owner.current,l,t,{...this.options,duration:r,times:i,ease:s});return d.startTime=u??this.calcStartTime(),this.pendingTimeline?(cy(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;o.set(Pu(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:a,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return Vn(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return Vn(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Bn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Pt;const{animation:r}=n;cy(r,t)}return Pt}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:s,ease:a,times:o}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:f,element:p,...h}=this.options,y=new Fh({...h,keyframes:r,duration:i,type:s,ease:a,times:o,isGenerator:!0}),b=Bn(this.time);u.setWithVelocity(y.sample(b-ql).value,y.sample(b).value,ql)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:a,type:o}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=n.owner.getProps();return Pj()&&r&&Ij.has(r)&&!l&&!u&&!i&&s!=="mirror"&&a!==0&&o!=="inertia"}}const Mj={type:"spring",stiffness:500,damping:25,restSpeed:10},Fj=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Oj={type:"keyframes",duration:.8},zj={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Uj=(e,{keyframes:t})=>t.length>2?Oj:hi.has(e)?e.startsWith("scale")?Fj(t[1]):Mj:zj;function Bj({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:a,repeatDelay:o,from:l,elapsed:u,...d}){return!!Object.keys(d).length}const Oh=(e,t,n,r={},i,s)=>a=>{const o=Sh(r,e)||{},l=o.delay||r.delay||0;let{elapsed:u=0}=r;u=u-Bn(l);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...o,delay:-u,onUpdate:p=>{t.set(p),o.onUpdate&&o.onUpdate(p)},onComplete:()=>{a(),o.onComplete&&o.onComplete()},name:e,motionValue:t,element:s?void 0:i};Bj(o)||(d={...d,...Uj(e,d)}),d.duration&&(d.duration=Bn(d.duration)),d.repeatDelay&&(d.repeatDelay=Bn(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!s&&t.get()!==void 0){const p=Pu(d.keyframes,o);if(p!==void 0)return Ee.update(()=>{d.onUpdate(p),d.onComplete()}),new aP([])}return!s&&Ty.supports(d)?new Ty(d):new Fh(d)};function Vj({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function yk(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:a=e.getDefaultTransition(),transitionEnd:o,...l}=t;r&&(a=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in l){const p=e.getValue(f,(s=e.latestValues[f])!==null&&s!==void 0?s:null),h=l[f];if(h===void 0||d&&Vj(d,f))continue;const y={delay:n,...Sh(a||{},f)};let b=!1;if(window.MotionHandoffAnimation){const g=Bw(e);if(g){const m=window.MotionHandoffAnimation(g,f,Ee);m!==null&&(y.startTime=m,b=!0)}}cf(e,f),p.start(Oh(f,p,h,e.shouldReduceMotion&&zw.has(f)?{type:!1}:y,e,b));const S=p.animation;S&&u.push(S)}return o&&Promise.all(u).then(()=>{Ee.update(()=>{o&&bP(e,o)})}),u}function yf(e,t,n={}){var r;const i=Nu(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const a=i?()=>Promise.all(yk(e,i,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=s;return $j(e,t,d+u,f,p,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[u,d]=l==="beforeChildren"?[a,o]:[o,a];return u().then(()=>d())}else return Promise.all([a(),o(n.delay)])}function $j(e,t,n=0,r=0,i=1,s){const a=[],o=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>o-u*r;return Array.from(e.variantChildren).sort(Hj).forEach((u,d)=>{u.notify("AnimationStart",t),a.push(yf(u,t,{...s,delay:n+l(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function Hj(e,t){return e.sortNodePosition(t)}function Wj(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>yf(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=yf(e,t,n);else{const i=typeof t=="function"?Nu(e,t,n.custom):t;r=Promise.all(yk(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const Gj=dh.length;function xk(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?xk(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<Gj;n++){const r=dh[n],i=e.props[r];(La(i)||i===!1)&&(t[r]=i)}return t}const qj=[...ch].reverse(),Kj=ch.length;function Yj(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Wj(e,n,r)))}function Xj(e){let t=Yj(e),n=_y(),r=!0;const i=l=>(u,d)=>{var f;const p=Nu(e,d,l==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:h,transitionEnd:y,...b}=p;u={...u,...b,...y}}return u};function s(l){t=l(e)}function a(l){const{props:u}=e,d=xk(e.parent)||{},f=[],p=new Set;let h={},y=1/0;for(let S=0;S<Kj;S++){const g=qj[S],m=n[g],x=u[g]!==void 0?u[g]:d[g],v=La(x),E=g===l?m.isActive:null;E===!1&&(y=S);let w=x===d[g]&&x!==u[g]&&v;if(w&&r&&e.manuallyAnimateOnMount&&(w=!1),m.protectedKeys={...h},!m.isActive&&E===null||!x&&!m.prevProp||Au(x)||typeof x=="boolean")continue;const I=Qj(m.prevProp,x);let P=I||g===l&&m.isActive&&!w&&v||S>y&&v,R=!1;const _=Array.isArray(x)?x:[x];let j=_.reduce(i(g),{});E===!1&&(j={});const{prevResolvedValues:U={}}=m,q={...U,...j},Q=Y=>{P=!0,p.has(Y)&&(R=!0,p.delete(Y)),m.needsAnimating[Y]=!0;const L=e.getValue(Y);L&&(L.liveStyle=!1)};for(const Y in q){const L=j[Y],V=U[Y];if(h.hasOwnProperty(Y))continue;let k=!1;of(L)&&of(V)?k=!Pw(L,V):k=L!==V,k?L!=null?Q(Y):p.add(Y):L!==void 0&&p.has(Y)?Q(Y):m.protectedKeys[Y]=!0}m.prevProp=x,m.prevResolvedValues=j,m.isActive&&(h={...h,...j}),r&&e.blockInitialAnimation&&(P=!1),P&&(!(w&&I)||R)&&f.push(..._.map(Y=>({animation:Y,options:{type:g}})))}if(p.size){const S={};p.forEach(g=>{const m=e.getBaseTarget(g),x=e.getValue(g);x&&(x.liveStyle=!0),S[g]=m??null}),f.push({animation:S})}let b=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(b=!1),r=!1,b?t(f):Promise.resolve()}function o(l,u){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var h;return(h=p.animationState)===null||h===void 0?void 0:h.setActive(l,u)}),n[l].isActive=u;const f=a(l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:a,setActive:o,setAnimateFunction:s,getState:()=>n,reset:()=>{n=_y(),r=!0}}}function Qj(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Pw(t,e):!1}function Mr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function _y(){return{animate:Mr(!0),whileInView:Mr(),whileHover:Mr(),whileTap:Mr(),whileDrag:Mr(),whileFocus:Mr(),exit:Mr()}}class jr{constructor(t){this.isMounted=!1,this.node=t}update(){}}class Zj extends jr{constructor(t){super(t),t.animationState||(t.animationState=Xj(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Au(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let Jj=0;class eR extends jr{constructor(){super(...arguments),this.id=Jj++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const tR={animation:{Feature:Zj},exit:{Feature:eR}};function Oa(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function no(e){return{point:{x:e.pageX,y:e.pageY}}}const nR=e=>t=>Th(t)&&e(t,no(t));function ta(e,t,n,r){return Oa(e,t,nR(n),r)}const Ay=(e,t)=>Math.abs(e-t);function rR(e,t){const n=Ay(e.x,t.x),r=Ay(e.y,t.y);return Math.sqrt(n**2+r**2)}class vk{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Ac(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,h=rR(f.offset,{x:0,y:0})>=3;if(!p&&!h)return;const{point:y}=f,{timestamp:b}=Qe;this.history.push({...y,timestamp:b});const{onStart:S,onMove:g}=this.handlers;p||(S&&S(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=_c(p,this.transformPagePoint),Ee.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:h,onSessionEnd:y,resumeAnimation:b}=this.handlers;if(this.dragSnapToOrigin&&b&&b(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Ac(f.type==="pointercancel"?this.lastMoveEventInfo:_c(p,this.transformPagePoint),this.history);this.startEvent&&h&&h(f,S),y&&y(f,S)},!Th(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const a=no(t),o=_c(a,this.transformPagePoint),{point:l}=o,{timestamp:u}=Qe;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,Ac(o,this.history)),this.removeListeners=to(ta(this.contextWindow,"pointermove",this.handlePointerMove),ta(this.contextWindow,"pointerup",this.handlePointerUp),ta(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Tr(this.updatePoint)}}function _c(e,t){return t?{point:t(e.point)}:e}function Iy(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ac({point:e},t){return{point:e,delta:Iy(e,bk(t)),offset:Iy(e,iR(t)),velocity:sR(t,.1)}}function iR(e){return e[0]}function bk(e){return e[e.length-1]}function sR(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=bk(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Bn(t)));)n--;if(!r)return{x:0,y:0};const s=Vn(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const a={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}const wk=1e-4,aR=1-wk,oR=1+wk,kk=.01,lR=0-kk,uR=0+kk;function Rt(e){return e.max-e.min}function cR(e,t,n){return Math.abs(e-t)<=n}function Ny(e,t,n,r=.5){e.origin=r,e.originPoint=Ne(t.min,t.max,e.origin),e.scale=Rt(n)/Rt(t),e.translate=Ne(n.min,n.max,e.origin)-e.originPoint,(e.scale>=aR&&e.scale<=oR||isNaN(e.scale))&&(e.scale=1),(e.translate>=lR&&e.translate<=uR||isNaN(e.translate))&&(e.translate=0)}function na(e,t,n,r){Ny(e.x,t.x,n.x,r?r.originX:void 0),Ny(e.y,t.y,n.y,r?r.originY:void 0)}function Py(e,t,n){e.min=n.min+t.min,e.max=e.min+Rt(t)}function dR(e,t,n){Py(e.x,t.x,n.x),Py(e.y,t.y,n.y)}function jy(e,t,n){e.min=t.min-n.min,e.max=e.min+Rt(t)}function ra(e,t,n){jy(e.x,t.x,n.x),jy(e.y,t.y,n.y)}function fR(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Ne(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Ne(n,e,r.max):Math.min(e,n)),e}function Ry(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function pR(e,{top:t,left:n,bottom:r,right:i}){return{x:Ry(e.x,n,i),y:Ry(e.y,t,r)}}function Ly(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function hR(e,t){return{x:Ly(e.x,t.x),y:Ly(e.y,t.y)}}function mR(e,t){let n=.5;const r=Rt(e),i=Rt(t);return i>r?n=os(t.min,t.max-r,e.min):r>i&&(n=os(e.min,e.max-i,t.min)),Xn(0,1,n)}function gR(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const xf=.35;function yR(e=xf){return e===!1?e=0:e===!0&&(e=xf),{x:Dy(e,"left","right"),y:Dy(e,"top","bottom")}}function Dy(e,t,n){return{min:My(e,t),max:My(e,n)}}function My(e,t){return typeof e=="number"?e:e[t]||0}const Fy=()=>({translate:0,scale:1,origin:0,originPoint:0}),Li=()=>({x:Fy(),y:Fy()}),Oy=()=>({min:0,max:0}),Oe=()=>({x:Oy(),y:Oy()});function Ut(e){return[e("x"),e("y")]}function Sk({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function xR({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function vR(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Ic(e){return e===void 0||e===1}function vf({scale:e,scaleX:t,scaleY:n}){return!Ic(e)||!Ic(t)||!Ic(n)}function Vr(e){return vf(e)||Ek(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Ek(e){return zy(e.x)||zy(e.y)}function zy(e){return e&&e!=="0%"}function Kl(e,t,n){const r=e-n,i=t*r;return n+i}function Uy(e,t,n,r,i){return i!==void 0&&(e=Kl(e,i,r)),Kl(e,n,r)+t}function bf(e,t=0,n=1,r,i){e.min=Uy(e.min,t,n,r,i),e.max=Uy(e.max,t,n,r,i)}function Ck(e,{x:t,y:n}){bf(e.x,t.translate,t.scale,t.originPoint),bf(e.y,n.translate,n.scale,n.originPoint)}const By=.999999999999,Vy=1.0000000000001;function bR(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,a;for(let o=0;o<i;o++){s=n[o],a=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Mi(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,Ck(e,a)),r&&Vr(s.latestValues)&&Mi(e,s.latestValues))}t.x<Vy&&t.x>By&&(t.x=1),t.y<Vy&&t.y>By&&(t.y=1)}function Di(e,t){e.min=e.min+t,e.max=e.max+t}function $y(e,t,n,r,i=.5){const s=Ne(e.min,e.max,i);bf(e,t,n,s,r)}function Mi(e,t){$y(e.x,t.x,t.scaleX,t.scale,t.originX),$y(e.y,t.y,t.scaleY,t.scale,t.originY)}function Tk(e,t){return Sk(vR(e.getBoundingClientRect(),t))}function wR(e,t,n){const r=Tk(e,n),{scroll:i}=t;return i&&(Di(r.x,i.offset.x),Di(r.y,i.offset.y)),r}const _k=({current:e})=>e?e.ownerDocument.defaultView:null,kR=new WeakMap;class SR{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Oe(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(no(d).point)},s=(d,f)=>{const{drag:p,dragPropagation:h,onDragStart:y}=this.getProps();if(p&&!h&&(this.openDragLock&&this.openDragLock(),this.openDragLock=mP(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ut(S=>{let g=this.getAxisMotionValue(S).get()||0;if(wn.test(g)){const{projection:m}=this.visualElement;if(m&&m.layout){const x=m.layout.layoutBox[S];x&&(g=Rt(x)*(parseFloat(g)/100))}}this.originPoint[S]=g}),y&&Ee.postRender(()=>y(d,f)),cf(this.visualElement,"transform");const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},a=(d,f)=>{const{dragPropagation:p,dragDirectionLock:h,onDirectionLock:y,onDrag:b}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:S}=f;if(h&&this.currentDirection===null){this.currentDirection=ER(S),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,S),this.updateAxis("y",f.point,S),this.visualElement.render(),b&&b(d,f)},o=(d,f)=>this.stop(d,f),l=()=>Ut(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new vk(t,{onSessionStart:i,onStart:s,onMove:a,onSessionEnd:o,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:_k(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&Ee.postRender(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Po(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=fR(a,this.constraints[t],this.elastic[t])),s.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&ji(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=pR(i.layoutBox,n):this.constraints=!1,this.elastic=yR(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Ut(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=gR(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ji(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=wR(r,i.root,this.visualElement.getTransformPagePoint());let a=hR(i.layout.layoutBox,s);if(n){const o=n(xR(a));this.hasMutatedConstraints=!!o,o&&(a=Sk(o))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),l=this.constraints||{},u=Ut(d=>{if(!Po(d,n,this.currentDirection))return;let f=l&&l[d]||{};a&&(f={min:0,max:0});const p=i?200:1e6,h=i?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:h,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,y)});return Promise.all(u).then(o)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return cf(this.visualElement,t),r.start(Oh(t,r,0,n,this.visualElement,!1))}stopAnimation(){Ut(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Ut(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Ut(n=>{const{drag:r}=this.getProps();if(!Po(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:o}=i.layout.layoutBox[n];s.set(t[n]-Ne(a,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!ji(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Ut(a=>{const o=this.getAxisMotionValue(a);if(o&&this.constraints!==!1){const l=o.get();i[a]=mR({min:l,max:l},this.constraints[a])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Ut(a=>{if(!Po(a,t,null))return;const o=this.getAxisMotionValue(a),{min:l,max:u}=this.constraints[a];o.set(Ne(l,u,i[a]))})}addListeners(){if(!this.visualElement.current)return;kR.set(this.visualElement,this);const t=this.visualElement.current,n=ta(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();ji(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),Ee.read(r);const a=Oa(window,"resize",()=>this.scalePositionWithinConstraints()),o=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Ut(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{a(),n(),s(),o&&o()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:a=xf,dragMomentum:o=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:a,dragMomentum:o}}}function Po(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function ER(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class CR extends jr{constructor(t){super(t),this.removeGroupControls=Pt,this.removeListeners=Pt,this.controls=new SR(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Pt}unmount(){this.removeGroupControls(),this.removeListeners()}}const Hy=e=>(t,n)=>{e&&Ee.postRender(()=>e(t,n))};class TR extends jr{constructor(){super(...arguments),this.removePointerDownListener=Pt}onPointerDown(t){this.session=new vk(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:_k(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Hy(t),onStart:Hy(n),onMove:r,onEnd:(s,a)=>{delete this.session,i&&Ee.postRender(()=>i(s,a))}}}mount(){this.removePointerDownListener=ta(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const sl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Wy(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ps={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(J.test(e))e=parseFloat(e);else return e;const n=Wy(e,t.target.x),r=Wy(e,t.target.y);return`${n}% ${r}%`}},_R={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=_r.parse(e);if(i.length>5)return r;const s=_r.createTransformer(e),a=typeof i[0]!="number"?1:0,o=n.x.scale*t.x,l=n.y.scale*t.y;i[0+a]/=o,i[1+a]/=l;const u=Ne(o,l,.5);return typeof i[2+a]=="number"&&(i[2+a]/=u),typeof i[3+a]=="number"&&(i[3+a]/=u),s(i)}};class AR extends C.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;K5(IR),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),sl.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,a=r.projection;return a&&(a.isPresent=s,i||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?a.promote():a.relegate()||Ee.postRender(()=>{const o=a.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),ph.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Ak(e){const[t,n]=u5(),r=C.useContext(cw);return c.jsx(AR,{...e,layoutGroup:r,switchLayoutGroup:C.useContext(xw),isPresent:t,safeToRemove:n})}const IR={borderRadius:{...Ps,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ps,borderTopRightRadius:Ps,borderBottomLeftRadius:Ps,borderBottomRightRadius:Ps,boxShadow:_R};function NR(e,t,n){const r=at(e)?e:Ma(e);return r.start(Oh("",r,t,n)),r.animation}function PR(e){return e instanceof SVGElement&&e.tagName!=="svg"}const jR=(e,t)=>e.depth-t.depth;class RR{constructor(){this.children=[],this.isDirty=!1}add(t){_h(this.children,t),this.isDirty=!0}remove(t){Ah(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(jR),this.isDirty=!1,this.children.forEach(t)}}function LR(e,t){const n=kn.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(Tr(r),e(s-t))};return Ee.read(r,!0),()=>Tr(r)}const Ik=["TopLeft","TopRight","BottomLeft","BottomRight"],DR=Ik.length,Gy=e=>typeof e=="string"?parseFloat(e):e,qy=e=>typeof e=="number"||J.test(e);function MR(e,t,n,r,i,s){i?(e.opacity=Ne(0,n.opacity!==void 0?n.opacity:1,FR(r)),e.opacityExit=Ne(t.opacity!==void 0?t.opacity:1,0,OR(r))):s&&(e.opacity=Ne(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<DR;a++){const o=`border${Ik[a]}Radius`;let l=Ky(t,o),u=Ky(n,o);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||qy(l)===qy(u)?(e[o]=Math.max(Ne(Gy(l),Gy(u),r),0),(wn.test(u)||wn.test(l))&&(e[o]+="%")):e[o]=u}(t.rotate||n.rotate)&&(e.rotate=Ne(t.rotate||0,n.rotate||0,r))}function Ky(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const FR=Nk(0,.5,Kw),OR=Nk(.5,.95,Pt);function Nk(e,t,n){return r=>r<e?0:r>t?1:n(os(e,t,r))}function Yy(e,t){e.min=t.min,e.max=t.max}function zt(e,t){Yy(e.x,t.x),Yy(e.y,t.y)}function Xy(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Qy(e,t,n,r,i){return e-=t,e=Kl(e,1/n,r),i!==void 0&&(e=Kl(e,1/i,r)),e}function zR(e,t=0,n=1,r=.5,i,s=e,a=e){if(wn.test(t)&&(t=parseFloat(t),t=Ne(a.min,a.max,t/100)-a.min),typeof t!="number")return;let o=Ne(s.min,s.max,r);e===s&&(o-=t),e.min=Qy(e.min,t,n,o,i),e.max=Qy(e.max,t,n,o,i)}function Zy(e,t,[n,r,i],s,a){zR(e,t[n],t[r],t[i],t.scale,s,a)}const UR=["x","scaleX","originX"],BR=["y","scaleY","originY"];function Jy(e,t,n,r){Zy(e.x,t,UR,n?n.x:void 0,r?r.x:void 0),Zy(e.y,t,BR,n?n.y:void 0,r?r.y:void 0)}function ex(e){return e.translate===0&&e.scale===1}function Pk(e){return ex(e.x)&&ex(e.y)}function tx(e,t){return e.min===t.min&&e.max===t.max}function VR(e,t){return tx(e.x,t.x)&&tx(e.y,t.y)}function nx(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function jk(e,t){return nx(e.x,t.x)&&nx(e.y,t.y)}function rx(e){return Rt(e.x)/Rt(e.y)}function ix(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class $R{constructor(){this.members=[]}add(t){_h(this.members,t),t.scheduleRender()}remove(t){if(Ah(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function HR(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,a=(n==null?void 0:n.z)||0;if((i||s||a)&&(r=`translate3d(${i}px, ${s}px, ${a}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:f,rotateY:p,skewX:h,skewY:y}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),h&&(r+=`skewX(${h}deg) `),y&&(r+=`skewY(${y}deg) `)}const o=e.x.scale*t.x,l=e.y.scale*t.y;return(o!==1||l!==1)&&(r+=`scale(${o}, ${l})`),r||"none"}const $r={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Bs=typeof window<"u"&&window.MotionDebug!==void 0,Nc=["","X","Y","Z"],WR={visibility:"hidden"},sx=1e3;let GR=0;function Pc(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Rk(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Bw(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Ee,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Rk(r)}function Lk({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a={},o=t==null?void 0:t()){this.id=GR++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Bs&&($r.totalNodes=$r.resolvedTargetDeltas=$r.recalculatedProjection=0),this.nodes.forEach(YR),this.nodes.forEach(eL),this.nodes.forEach(tL),this.nodes.forEach(XR),Bs&&window.MotionDebug.record($r)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new RR)}addEventListener(a,o){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new Ih),this.eventHandlers.get(a).add(o)}notifyListeners(a,...o){const l=this.eventHandlers.get(a);l&&l.notify(...o)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,o=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=PR(a),this.instance=a;const{layoutId:l,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),o&&(u||l)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=LR(p,250),sl.hasAnimatedSinceResize&&(sl.hasAnimatedSinceResize=!1,this.nodes.forEach(ox))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:h,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||d.getDefaultTransition()||aL,{onLayoutAnimationStart:S,onLayoutAnimationComplete:g}=d.getProps(),m=!this.targetLayout||!jk(this.targetLayout,y)||h,x=!p&&h;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||x||p&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,x);const v={...Sh(b,"layout"),onPlay:S,onComplete:g};(d.shouldReduceMotion||this.options.layoutRoot)&&(v.delay=0,v.type=!1),this.startAnimation(v)}else p||ox(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Tr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(nL),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Rk(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:o,layout:l}=this.options;if(o===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ax);return}this.isUpdating||this.nodes.forEach(ZR),this.isUpdating=!1,this.nodes.forEach(JR),this.nodes.forEach(qR),this.nodes.forEach(KR),this.clearAllSnapshots();const o=kn.now();Qe.delta=Xn(0,1e3/60,o-Qe.timestamp),Qe.timestamp=o,Qe.isProcessing=!0,wc.update.process(Qe),wc.preRender.process(Qe),wc.render.process(Qe),Qe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ph.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(QR),this.sharedNodes.forEach(rL)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ee.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ee.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Oe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let o=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(o=!1),o){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,o=this.projectionDelta&&!Pk(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;a&&(o||Vr(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const o=this.measurePageBox();let l=this.removeElementScroll(o);return a&&(l=this.removeTransform(l)),oL(l),{animationId:this.root.animationId,measuredBox:o,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var a;const{visualElement:o}=this.options;if(!o)return Oe();const l=o.measureViewportBox();if(!(((a=this.scroll)===null||a===void 0?void 0:a.wasRoot)||this.path.some(lL))){const{scroll:d}=this.root;d&&(Di(l.x,d.offset.x),Di(l.y,d.offset.y))}return l}removeElementScroll(a){var o;const l=Oe();if(zt(l,a),!((o=this.scroll)===null||o===void 0)&&o.wasRoot)return l;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&zt(l,a),Di(l.x,f.offset.x),Di(l.y,f.offset.y))}return l}applyTransform(a,o=!1){const l=Oe();zt(l,a);for(let u=0;u<this.path.length;u++){const d=this.path[u];!o&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Mi(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Vr(d.latestValues)&&Mi(l,d.latestValues)}return Vr(this.latestValues)&&Mi(l,this.latestValues),l}removeTransform(a){const o=Oe();zt(o,a);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Vr(u.latestValues))continue;vf(u.latestValues)&&u.updateSnapshot();const d=Oe(),f=u.measurePageBox();zt(d,f),Jy(o,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return Vr(this.latestValues)&&Jy(o,this.latestValues),o}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Qe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var o;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Qe.timestamp,!this.targetDelta&&!this.relativeTarget){const h=this.getClosestProjectingParent();h&&h.layout&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Oe(),this.relativeTargetOrigin=Oe(),ra(this.relativeTargetOrigin,this.layout.layoutBox,h.layout.layoutBox),zt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Oe(),this.targetWithTransforms=Oe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),dR(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):zt(this.target,this.layout.layoutBox),Ck(this.target,this.targetDelta)):zt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const h=this.getClosestProjectingParent();h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Oe(),this.relativeTargetOrigin=Oe(),ra(this.relativeTargetOrigin,this.target,h.target),zt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Bs&&$r.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||vf(this.parent.latestValues)||Ek(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const o=this.getLead(),l=!!this.resumingFrom||this!==o;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Qe.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;zt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,h=this.treeScale.y;bR(this.layoutCorrected,this.treeScale,this.path,l),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Oe());const{target:y}=o;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Xy(this.prevProjectionDelta.x,this.projectionDelta.x),Xy(this.prevProjectionDelta.y,this.projectionDelta.y)),na(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==h||!ix(this.projectionDelta.x,this.prevProjectionDelta.x)||!ix(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),Bs&&$r.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var o;if((o=this.options.visualElement)===null||o===void 0||o.scheduleRender(),a){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Li(),this.projectionDelta=Li(),this.projectionDeltaWithTransform=Li()}setAnimationOrigin(a,o=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},f=Li();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const p=Oe(),h=l?l.source:void 0,y=this.layout?this.layout.source:void 0,b=h!==y,S=this.getStack(),g=!S||S.members.length<=1,m=!!(b&&!g&&this.options.crossfade===!0&&!this.path.some(sL));this.animationProgress=0;let x;this.mixTargetDelta=v=>{const E=v/1e3;lx(f.x,a.x,E),lx(f.y,a.y,E),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ra(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),iL(this.relativeTarget,this.relativeTargetOrigin,p,E),x&&VR(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=Oe()),zt(x,this.relativeTarget)),b&&(this.animationValues=d,MR(d,u,this.latestValues,E,m,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Tr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ee.update(()=>{sl.hasAnimatedSinceResize=!0,this.currentAnimation=NR(0,sx,{...a,onUpdate:o=>{this.mixTargetDelta(o),a.onUpdate&&a.onUpdate(o)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(sx),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:o,target:l,layout:u,latestValues:d}=a;if(!(!o||!l||!u)){if(this!==a&&this.layout&&u&&Dk(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Oe();const f=Rt(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+f;const p=Rt(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+p}zt(o,l),Mi(o,d),na(this.projectionDeltaWithTransform,this.layoutCorrected,o,d)}}registerSharedNode(a,o){this.sharedNodes.has(a)||this.sharedNodes.set(a,new $R),this.sharedNodes.get(a).add(o);const u=o.options.initialPromotionConfig;o.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(o):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:o,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let o=!1;const{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(o=!0),!o)return;const u={};l.z&&Pc("z",a,u,this.animationValues);for(let d=0;d<Nc.length;d++)Pc(`rotate${Nc[d]}`,a,u,this.animationValues),Pc(`skew${Nc[d]}`,a,u,this.animationValues);a.render();for(const d in u)a.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);a.scheduleRender()}getProjectionStyles(a){var o,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return WR;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=rl(a==null?void 0:a.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const b={};return this.options.layoutId&&(b.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,b.pointerEvents=rl(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Vr(this.latestValues)&&(b.transform=d?d({},""):"none",this.hasProjected=!1),b}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=HR(this.projectionDeltaWithTransform,this.treeScale,p),d&&(u.transform=d(p,u.transform));const{x:h,y}=this.projectionDelta;u.transformOrigin=`${h.origin*100}% ${y.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(o=p.opacity)!==null&&o!==void 0?o:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const b in $l){if(p[b]===void 0)continue;const{correct:S,applyTo:g}=$l[b],m=u.transform==="none"?p[b]:S(p[b],f);if(g){const x=g.length;for(let v=0;v<x;v++)u[g[v]]=m}else u[b]=m}return this.options.layoutId&&(u.pointerEvents=f===this?rl(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var o;return(o=a.currentAnimation)===null||o===void 0?void 0:o.stop()}),this.root.nodes.forEach(ax),this.root.sharedNodes.clear()}}}function qR(e){e.updateLayout()}function KR(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,a=n.source!==e.layout.source;s==="size"?Ut(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],h=Rt(p);p.min=r[f].min,p.max=p.min+h}):Dk(s,n.layoutBox,r)&&Ut(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],h=Rt(r[f]);p.max=p.min+h,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+h)});const o=Li();na(o,r,n.layoutBox);const l=Li();a?na(l,e.applyTransform(i,!0),n.measuredBox):na(l,r,n.layoutBox);const u=!Pk(o);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:h}=f;if(p&&h){const y=Oe();ra(y,n.layoutBox,p.layoutBox);const b=Oe();ra(b,r,h.layoutBox),jk(y,b)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=b,e.relativeTargetOrigin=y,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:o,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function YR(e){Bs&&$r.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function XR(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function QR(e){e.clearSnapshot()}function ax(e){e.clearMeasurements()}function ZR(e){e.isLayoutDirty=!1}function JR(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function ox(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function eL(e){e.resolveTargetDelta()}function tL(e){e.calcProjection()}function nL(e){e.resetSkewAndRotation()}function rL(e){e.removeLeadSnapshot()}function lx(e,t,n){e.translate=Ne(t.translate,0,n),e.scale=Ne(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function ux(e,t,n,r){e.min=Ne(t.min,n.min,r),e.max=Ne(t.max,n.max,r)}function iL(e,t,n,r){ux(e.x,t.x,n.x,r),ux(e.y,t.y,n.y,r)}function sL(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const aL={duration:.45,ease:[.4,0,.1,1]},cx=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),dx=cx("applewebkit/")&&!cx("chrome/")?Math.round:Pt;function fx(e){e.min=dx(e.min),e.max=dx(e.max)}function oL(e){fx(e.x),fx(e.y)}function Dk(e,t,n){return e==="position"||e==="preserve-aspect"&&!cR(rx(t),rx(n),.2)}function lL(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const uL=Lk({attachResizeListener:(e,t)=>Oa(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),jc={current:void 0},Mk=Lk({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!jc.current){const e=new uL({});e.mount(window),e.setOptions({layoutScroll:!0}),jc.current=e}return jc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),cL={pan:{Feature:TR},drag:{Feature:CR,ProjectionNode:Mk,MeasureLayout:Ak}};function px(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&Ee.postRender(()=>s(t,no(t)))}class dL extends jr{mount(){const{current:t}=this.node;t&&(this.unmount=cP(t,n=>(px(this.node,n,"Start"),r=>px(this.node,r,"End"))))}unmount(){}}class fL extends jr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=to(Oa(this.node.current,"focus",()=>this.onFocus()),Oa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function hx(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&Ee.postRender(()=>s(t,no(t)))}class pL extends jr{mount(){const{current:t}=this.node;t&&(this.unmount=hP(t,n=>(hx(this.node,n,"Start"),(r,{success:i})=>hx(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const wf=new WeakMap,Rc=new WeakMap,hL=e=>{const t=wf.get(e.target);t&&t(e)},mL=e=>{e.forEach(hL)};function gL({root:e,...t}){const n=e||document;Rc.has(n)||Rc.set(n,{});const r=Rc.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(mL,{root:e,...t})),r[i]}function yL(e,t,n){const r=gL(t);return wf.set(e,n),r.observe(e),()=>{wf.delete(e),r.unobserve(e)}}const xL={some:0,all:1};class vL extends jr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:xL[i]},o=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=u?d:f;p&&p(l)};return yL(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(bL(t,n))&&this.startObserver()}unmount(){}}function bL({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const wL={inView:{Feature:vL},tap:{Feature:pL},focus:{Feature:fL},hover:{Feature:dL}},kL={layout:{ProjectionNode:Mk,MeasureLayout:Ak}},kf={current:null},Fk={current:!1};function SL(){if(Fk.current=!0,!!lh)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>kf.current=e.matches;e.addListener(t),t()}else kf.current=!1}const EL=[...lk,rt,_r],CL=e=>EL.find(ok(e)),mx=new WeakMap;function TL(e,t,n){for(const r in t){const i=t[r],s=n[r];if(at(i))e.addValue(r,i);else if(at(s))e.addValue(r,Ma(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const a=e.getValue(r);a.liveStyle===!0?a.jump(i):a.hasAnimated||a.set(i)}else{const a=e.getStaticValue(r);e.addValue(r,Ma(a!==void 0?a:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const gx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class _L{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Dh,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=kn.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,Ee.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:d}=a;this.onUpdate=d,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.blockInitialAnimation=!!s,this.isControllingVariants=Iu(n),this.isVariantNode=gw(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in p){const y=p[h];l[h]!==void 0&&at(y)&&y.set(l[h],!1)}}mount(t){this.current=t,mx.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Fk.current||SL(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:kf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){mx.delete(this.current),this.projection&&this.projection.unmount(),Tr(this.notifyUpdate),Tr(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=hi.has(t),i=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&Ee.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s(),a&&a(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ls){const n=ls[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Oe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<gx.length;r++){const i=gx[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,a=t[s];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=TL(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Ma(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(sk(i)||Xw(i))?i=parseFloat(i):!CL(i)&&_r.test(n)&&(i=nk(t,n)),this.setBaseTarget(t,at(i)?i.get():i)),at(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const a=mh(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);a&&(i=a[t])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!at(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Ih),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Ok extends _L{constructor(){super(...arguments),this.KeyframeResolver=uk}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;at(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function AL(e){return window.getComputedStyle(e)}class IL extends Ok{constructor(){super(...arguments),this.type="html",this.renderInstance=Cw}readValueFromInstance(t,n){if(hi.has(n)){const r=Lh(n);return r&&r.default||0}else{const r=AL(t),i=(kw(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Tk(t,n)}build(t,n,r){xh(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return kh(t,n,r)}}class NL extends Ok{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Oe}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(hi.has(n)){const r=Lh(n);return r&&r.default||0}return n=Tw.has(n)?n:fh(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Iw(t,n,r)}build(t,n,r){vh(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){_w(t,n,r,i)}mount(t){this.isSVGTag=wh(t.tagName),super.mount(t)}}const PL=(e,t)=>hh(e)?new NL(t):new IL(t,{allowProjection:e!==C.Fragment}),jL=rP({...tR,...wL,...cL,...kL},PL),Lc=x5(jL);function RL({status:e}){const t=e==="speaking",n=e==="listening",r=e==="thinking";return c.jsxs("div",{className:`orb-stage ${t?"is-speaking":""} ${n?"is-listening":""} ${r?"is-thinking":""}`,"aria-label":`AI status: ${e}`,children:[c.jsx(Lc.div,{className:"orb-ring ring-outer",animate:{rotate:r?360:-18},transition:{duration:r?7:24,repeat:1/0,ease:"linear"}}),c.jsx(Lc.div,{className:"orb-ring ring-mid",animate:{rotate:r?-360:24,scale:t?[1,1.04,1]:1},transition:{duration:t?.7:18,repeat:1/0,ease:"linear"}}),c.jsxs("div",{className:"orb-core",children:[c.jsx("div",{className:"orb-grid"}),c.jsx("div",{className:"orb-wave","aria-hidden":"true",children:[10,18,28,16,34,21,12,26,17,32,13,22,10].map((i,s)=>c.jsx(Lc.span,{animate:t?{height:[i,i*1.7,i*.65,i]}:n?{height:[i,i*1.35,i]}:{height:i*.65},transition:{duration:.6+s%4*.12,repeat:1/0,delay:s*.025}},s))})]}),c.jsx("span",{className:"orb-dot dot-top"}),c.jsx("span",{className:"orb-dot dot-right"}),c.jsx("span",{className:"orb-dot dot-bottom"}),c.jsx("span",{className:"orb-dot dot-left"})]})}const pr={eliza:{id:"eliza",name:"ELIZA",gender:"Female",accent:"Indian English / Neutral",badge:"Recommended Default",role:"Female AI Assistant",description:"Warm, confident, and friendly for everyday questions & conversational AI.",lang:"en-IN",search:"Female, Conversational, Indian English",elevenlabs_voice_id:"21m00Tcm4TlvDq8ikWAM",rate:1,pitch:1.05,sample:"Hello! I am ELIZA, your conversational AI assistant. How can I help you today?",browserKeywords:["heera","neerja","veena","aditi","india","en-in","samantha","google english (india)"]},arjun:{id:"arjun",name:"ARJUN",gender:"Male",accent:"Indian English",badge:"Secondary Default",role:"Male AI Assistant",description:"Calm, mature, and articulate for technical explanations and coding help.",lang:"en-IN",search:"Male, Conversational, Indian English",elevenlabs_voice_id:"pNInz6obpgDQGcFmaJgB",rate:.96,pitch:.94,sample:"Greetings! I am Arjun. I'm ready to assist you with deep technical analysis and code.",browserKeywords:["ravi","prabhat","india","en-in","david","daniel","google english (india)"]},nova:{id:"nova",name:"NOVA",gender:"Female",accent:"General American",badge:"US Female",role:"American Female Assistant",description:"Clear, energetic, and natural for productivity and international users.",lang:"en-US",search:"Female, American, Conversational",elevenlabs_voice_id:"EXAVITQu4vr4xnSDxMaL",rate:1.02,pitch:1.06,sample:"Hi there! I'm Nova. Let's get things done quickly and smoothly.",browserKeywords:["zira","samantha","ava","jenny","en-us","google us english"]},alex:{id:"alex",name:"ALEX",gender:"Male",accent:"British English",badge:"UK Male",role:"British Male Assistant",description:"Polished, composed, and articulate for narration and professional tasks.",lang:"en-GB",search:"Male, British, Narration",elevenlabs_voice_id:"nPczCjzI2devNBz1zQrb",rate:.95,pitch:.96,sample:"Good day. I am Alex, at your service for research and comprehensive narration.",browserKeywords:["george","oliver","brian","daniel","en-gb","google uk english male"]},kavya:{id:"kavya",name:"KAVYA",gender:"Female",accent:"Hindi",badge:"Hindi Female",role:"Hindi Female Assistant",description:"Expressive, friendly, and natural for Hindi conversations and Indian users.",lang:"hi-IN",search:"Female, Hindi, Conversational",elevenlabs_voice_id:"ThT5KcBeYPX3keUQqHPh",rate:.98,pitch:1.08,sample:"नमस्ते! मैं काव्या हूँ। आपकी भाषा में आपकी सहायता करने के लिए तैयार हूँ।",browserKeywords:["kalpana","heera","swara","hindi","hi-in","google हिन्दी"]},vikram:{id:"vikram",name:"VIKRAM",gender:"Male",accent:"Hindi",badge:"Hindi Male",role:"Hindi Male Assistant",description:"Reassuring, clear, and confident for detailed explanations and voice search.",lang:"hi-IN",search:"Male, Hindi, Conversational",elevenlabs_voice_id:"VR6AewLTigWG4xSOukaG",rate:.95,pitch:.92,sample:"नमस्ते! मैं विक्रम हूँ। किसी भी विषय पर स्पष्ट और सटीक जानकारी के लिए पूछें।",browserKeywords:["hemant","madhav","ravi","hindi","hi-in","google हिन्दी"]},marcus:{id:"marcus",name:"MARCUS",gender:"Male",accent:"General American",badge:"US Male",role:"American Male Assistant",description:"Confident, relaxed, and professional for technical and business explanations.",lang:"en-US",search:"American, Male, Conversational",elevenlabs_voice_id:"ErXwobaYiN019PkySvjV",rate:.98,pitch:.92,sample:"Hey, I'm Marcus. Let's break down whatever you're working on step by step.",browserKeywords:["guy","david","mark","en-us","google us english"]},emma:{id:"emma",name:"EMMA",gender:"Female",accent:"British English",badge:"UK Female",role:"British Female Assistant",description:"Polished, articulate, and composed for professional guidance.",lang:"en-GB",search:"British, Female, Conversational",elevenlabs_voice_id:"MF3mGyEYCl7XYWbV9V6O",rate:.98,pitch:1.06,sample:"Hello. I'm Emma. I'm here to provide articulate, well-structured support.",browserKeywords:["hazel","sonia","libby","en-gb","google uk english female"]}},Dc=[{code:"en-IN",name:"English (India)",native:"English (India)",options:"Indian female / male"},{code:"hi-IN",name:"Hindi",native:"हिन्दी",options:"Female / male"},{code:"te-IN",name:"Telugu",native:"తెలుగు",options:"Female / male"},{code:"ta-IN",name:"Tamil",native:"தமிழ்",options:"Female / male"},{code:"kn-IN",name:"Kannada",native:"ಕನ್ನಡ",options:"Female / male"},{code:"ml-IN",name:"Malayalam",native:"മലയാളം",options:"Female / male"},{code:"bn-IN",name:"Bengali",native:"বাংলা",options:"Female / male"},{code:"mr-IN",name:"Marathi",native:"मराठी",options:"Female / male"},{code:"gu-IN",name:"Gujarati",native:"ગુજરાતી",options:"Female / male"},{code:"pa-IN",name:"Punjabi",native:"ਪੰਜਾਬੀ",options:"Female / male"},{code:"ur-IN",name:"Urdu",native:"اردو",options:"Female / male"},{code:"as-IN",name:"Assamese",native:"অসমীয়া",options:"Female / male"},{code:"or-IN",name:"Odia",native:"ଓଡ଼ିଆ",options:"Female / male"},{code:"sa-IN",name:"Sanskrit",native:"संस्कृतम्",options:"Female / male"},{code:"ks-IN",name:"Kashmiri",native:"कॉशुर / کٲشُر",options:"Female / male"},{code:"kok-IN",name:"Konkani",native:"कोंकणी",options:"Female / male"},{code:"ne-IN",name:"Nepali (India)",native:"नेपाली",options:"Female / male"},{code:"sd-IN",name:"Sindhi",native:"سنڌي / सिन्धी",options:"Female / male"},{code:"mni-IN",name:"Manipuri / Meitei",native:"মৈতৈলোন্",options:"Female / male"},{code:"brx-IN",name:"Bodo",native:"बड़ो",options:"Female / male"},{code:"doi-IN",name:"Dogri",native:"डोगरी",options:"Female / male"},{code:"sat-IN",name:"Santali",native:"ᱥᱟᱱᱛᱟᱲᱤ",options:"Female / male"}];let Qr=null;function Yl(){if(Qr){try{Qr.pause(),Qr.currentTime=0}catch{}Qr=null}if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}}function LL(e,t,n){if(!e||e.length===0)return null;const r=pr[t]||pr.eliza,i=(n||r.lang||"en-IN").toLowerCase(),s=i.split("-")[0],a=e.find(d=>{const f=(d.lang||"").toLowerCase(),p=(d.name||"").toLowerCase(),h=f.includes(i)||f.includes(s),y=r.browserKeywords.some(b=>p.includes(b));return h&&y});if(a)return a;const o=e.find(d=>{const f=(d.name||"").toLowerCase();return r.browserKeywords.some(p=>f.includes(p))});if(o)return o;const l=e.find(d=>(d.lang||"").toLowerCase()===i);if(l)return l;const u=e.find(d=>(d.lang||"").toLowerCase().startsWith(s));return u||e.find(d=>d.default)||e.find(d=>(d.lang||"").toLowerCase().startsWith("en"))||e[0]}async function zk(e,t,n={}){const{onStart:r,onEnd:i,onError:s}=n;if(Yl(),!e||!e.trim()){i&&i();return}const a=(t.voice_profile||"eliza").toLowerCase(),o=pr[a]||pr.eliza;if((t.voice_engine||"auto")!=="browser")try{const u=await Pn.tts({text:e,voice_id:o.elevenlabs_voice_id,voice_profile:o.id,voice_lang:t.voice_lang||o.lang});if(u&&u.ok&&u.audioUrl){const d=new Audio(u.audioUrl);Qr=d,d.playbackRate=Math.max(.5,Math.min(2,Number(t.speech_rate||1))),d.onplay=()=>{r&&r()},d.onended=()=>{Qr=null,URL.revokeObjectURL(u.audioUrl),i&&i()},d.onerror=()=>{Qr=null,URL.revokeObjectURL(u.audioUrl),yx(e,t,o,n)},await d.play();return}}catch{}yx(e,t,o,n)}function yx(e,t,n,r={}){const{onStart:i,onEnd:s,onError:a}=r;if(typeof window>"u"||!("speechSynthesis"in window)){s&&s();return}try{window.speechSynthesis.paused&&window.speechSynthesis.resume(),window.speechSynthesis.cancel()}catch{}const o=window.speechSynthesis.getVoices(),l=()=>{const u=window.speechSynthesis.getVoices(),d=new SpeechSynthesisUtterance(e),f=Number(t.speech_rate||1),p=Number(t.speech_pitch||1);d.rate=Math.max(.5,Math.min(2,f*n.rate)),d.pitch=Math.max(.5,Math.min(2,p*n.pitch));let h=null;t.voice_name&&(h=u.find(y=>y.name===t.voice_name)),h||(h=LL(u,n.id,t.voice_lang||n.lang)),h?(d.voice=h,d.lang=h.lang||n.lang||"en-IN"):d.lang=n.lang||"en-IN",d.onstart=()=>{i&&i()},d.onend=()=>{s&&s()},d.onerror=y=>{a&&a(y),s&&s()},setTimeout(()=>{try{window.speechSynthesis.speak(d)}catch{s&&s()}},40)};if(o.length===0){const u=()=>{window.speechSynthesis.onvoiceschanged=null,l()};window.speechSynthesis.onvoiceschanged=u,setTimeout(()=>{window.speechSynthesis.onvoiceschanged===u&&(window.speechSynthesis.onvoiceschanged=null,l())},1e3)}else l()}const Uk=[{id:"green",name:"Green",color:"#78f6a8",desc:"Classic Matrix Green"},{id:"amber",name:"Amber",color:"#ffc16b",desc:"Warm Amber Glow"},{id:"cyan",name:"Cyan",color:"#7cecff",desc:"Electric Cyan Pulse"},{id:"violet",name:"Violet",color:"#c084fc",desc:"Royal Violet"},{id:"crimson",name:"Crimson",color:"#ff6b6b",desc:"Vivid Crimson Red"},{id:"solar",name:"Solar",color:"#fde047",desc:"Bright Solar Gold"},{id:"emerald",name:"Emerald",color:"#34d399",desc:"Lush Emerald Jewel"},{id:"pink",name:"Pink",color:"#f472b6",desc:"Hot Neon Pink"},{id:"cobalt",name:"Cobalt",color:"#60a5fa",desc:"Deep Cobalt Azure"},{id:"orange",name:"Orange",color:"#fb923c",desc:"Radiant Tangerine"},{id:"mint",name:"Mint",color:"#6ee7b7",desc:"Fresh Mint Ice"},{id:"rose",name:"Rose",color:"#fb7185",desc:"Velvet Rose"},{id:"ice",name:"Ice",color:"#a5f3fc",desc:"Glacial Ice Blue"},{id:"lime",name:"Lime",color:"#a3e635",desc:"Acid Cyber Lime"},{id:"teal",name:"Teal",color:"#2dd4bf",desc:"Deep Lagoon Teal"}],Bk=[{id:"aurora",name:"Aurora",grad:"linear-gradient(135deg, #34d399 0%, #7cecff 50%, #c084fc 100%)",desc:"Northern Lights Trio"},{id:"cyberpunk",name:"Cyberpunk",grad:"linear-gradient(135deg, #f472b6 0%, #fb923c 50%, #fde047 100%)",desc:"Neon Tokyo Sunset"},{id:"nebula",name:"Nebula",grad:"linear-gradient(135deg, #c084fc 0%, #818cf8 50%, #60a5fa 100%)",desc:"Deep Cosmos Violet"},{id:"sunset",name:"Sunset",grad:"linear-gradient(135deg, #ff6b6b 0%, #fb923c 50%, #fde047 100%)",desc:"Golden Horizon Fire"},{id:"toxic",name:"Toxic",grad:"linear-gradient(135deg, #a3e635 0%, #2dd4bf 50%, #7cecff 100%)",desc:"Biohazard Lime Cyan"},{id:"supernova",name:"Supernova",grad:"linear-gradient(135deg, #ff416c 0%, #ff4b2b 50%, #f9d423 100%)",desc:"Blazing Stellar Flare"},{id:"cosmic",name:"Cosmic",grad:"linear-gradient(135deg, #8a2387 0%, #e94057 50%, #f27121 100%)",desc:"Interstellar Spectrum"},{id:"oceanic",name:"Oceanic",grad:"linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #00c6ff 100%)",desc:"Pacific Trench Aqua"},{id:"synthwave",name:"Synthwave",grad:"linear-gradient(135deg, #fa709a 0%, #fee140 100%)",desc:"Retro 80s Laser Glow"},{id:"midnight",name:"Midnight",grad:"linear-gradient(135deg, #30cfd0 0%, #330867 100%)",desc:"Deep Neon Night"},{id:"firefly",name:"Firefly",grad:"linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",desc:"Luminescent Meadow"},{id:"bloodmoon",name:"Bloodmoon",grad:"linear-gradient(135deg, #f857a6 0%, #ff5858 100%)",desc:"Crimson Eclipse"},{id:"emerald-dream",name:"Emerald Dream",grad:"linear-gradient(135deg, #0ba360 0%, #3cba92 50%, #96e6a1 100%)",desc:"Enchanted Jade Forest"},{id:"hyperdrive",name:"Hyperdrive",grad:"linear-gradient(135deg, #b224ef 0%, #7579ff 100%)",desc:"Warp Speed Purple"},{id:"solar-flare",name:"Solar Flare",grad:"linear-gradient(135deg, #f12711 0%, #f5af19 100%)",desc:"Thermonuclear Gold"},{id:"plasma",name:"Plasma",grad:"linear-gradient(135deg, #ff0844 0%, #ffb199 100%)",desc:"Superheated Neon Coral"},{id:"deep-space",name:"Deep Space",grad:"linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",desc:"Alien Planet Aurora"},{id:"velvet",name:"Velvet",grad:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",desc:"Royal Indigo Velvet"},{id:"hologram",name:"Hologram",grad:"linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",desc:"Iridescent Prismatic Glass"},{id:"radiance",name:"Radiance",grad:"linear-gradient(135deg, #f6d365 0%, #fda085 100%)",desc:"Sun-drenched Coral"},{id:"amethyst",name:"Amethyst",grad:"linear-gradient(135deg, #9b51e0 0%, #bb6bd9 50%, #f2994a 100%)",desc:"Geode Crystal Glow"},{id:"glitch",name:"Glitch",grad:"linear-gradient(135deg, #00f0ff 0%, #ff007f 50%, #70ff00 100%)",desc:"Tri-Color RGB Shift"},{id:"matrix",name:"Matrix",grad:"linear-gradient(135deg, #00ff87 0%, #60efff 100%)",desc:"Cybernetic Stream"},{id:"magma",name:"Magma",grad:"linear-gradient(135deg, #f77062 0%, #fe5196 100%)",desc:"Molten Core Flow"},{id:"oasis",name:"Oasis",grad:"linear-gradient(135deg, #48c6ef 0%, #6f86d6 100%)",desc:"Mirage Lagoon"},{id:"starlight",name:"Starlight",grad:"linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",desc:"Celestial Silver Violet"},{id:"frostfire",name:"Frostfire",grad:"linear-gradient(135deg, #00c6ff 0%, #0072ff 50%, #ff7675 100%)",desc:"Glacial Ice Meets Flame"},{id:"vaporwave",name:"Vaporwave",grad:"linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #a1c4fd 100%)",desc:"90s Nostalgia Mist"},{id:"cherry-blossom",name:"Cherry Blossom",grad:"linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",desc:"Tokyo Spring Sakura"},{id:"phoenix",name:"Phoenix",grad:"linear-gradient(135deg, #ff0844 0%, #ffb199 50%, #f83600 100%)",desc:"Reborn Fire Wings"},{id:"neon-abyss",name:"Neon Abyss",grad:"linear-gradient(135deg, #0acffe 0%, #495aff 100%)",desc:"Bioluminescent Depths"},{id:"quantum",name:"Quantum",grad:"linear-gradient(135deg, #0fd850 0%, #f9f047 100%)",desc:"Subatomic Particle Surge"},{id:"zenith",name:"Zenith",grad:"linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",desc:"High Altitude Stratosphere"},{id:"golden-hour",name:"Golden Hour",grad:"linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",desc:"Magic Twilight Glow"},{id:"enchanted",name:"Enchanted",grad:"linear-gradient(135deg, #13547a 0%, #80d0c7 100%)",desc:"Mystic Forest Stream"},{id:"bioluminescence",name:"Bioluminescence",grad:"linear-gradient(135deg, #2af598 0%, #009efd 100%)",desc:"Deep Ocean Neon Flow"}],ia=[...Uk,...Bk],Vk="eliza_user_selected_theme";function DL(){if(typeof window>"u")return"green";try{const t=localStorage.getItem(Vk);if(t&&ia.some(n=>n.id===t))return t}catch{}return ia[Math.floor(Math.random()*ia.length)].id}function $k(e){if(!(typeof window>"u"))try{localStorage.setItem(Vk,e)}catch{}}function ML({open:e,onClose:t,providers:n,settings:r,onChange:i}){var x;const s=n.filter(v=>v.available),a=r.default_provider==="auto"?s[0]:n.find(v=>v.id===r.default_provider),o=(a==null?void 0:a.models)||[],[l,u]=C.useState([]),[d,f]=C.useState(null);C.useEffect(()=>{var E,w;if(typeof window>"u"||!("speechSynthesis"in window))return;const v=()=>u(window.speechSynthesis.getVoices());return v(),(w=(E=window.speechSynthesis).addEventListener)==null||w.call(E,"voiceschanged",v),()=>{var I,P;return(P=(I=window.speechSynthesis).removeEventListener)==null?void 0:P.call(I,"voiceschanged",v)}},[]);const p=(v,E)=>{if(E&&E.stopPropagation&&E.stopPropagation(),d===v){Yl(),f(null);return}Yl();const w=pr[v]||pr.eliza;f(v),zk(w.sample,{...r,voice_profile:w.id},{onEnd:()=>f(null),onError:()=>f(null)})},h=()=>{const v=r.voice_profile||"eliza";p(v)},y=v=>{const E=v==="auto"?s[0]:n.find(w=>w.id===v);i({default_provider:v,default_model:(E==null?void 0:E.default_model)||""})},b=v=>{$k(v),i({theme:v})},S=()=>{const v=ia[Math.floor(Math.random()*ia.length)];b(v.id)},g=(a==null?void 0:a.name)||(r.default_provider==="auto"?"Automatic Routing":r.default_provider),m=r.default_model||(a==null?void 0:a.default_model)||"None configured";return e?c.jsx("div",{className:"drawer-backdrop",onMouseDown:v=>v.target===v.currentTarget&&t(),children:c.jsxs("aside",{className:"settings-drawer",role:"dialog","aria-label":"Settings",children:[c.jsxs("header",{className:"drawer-header",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"SYSTEM CONFIGURATION"}),c.jsx("h2",{children:"Settings"})]}),c.jsx("button",{className:"icon-button",onClick:t,"aria-label":"Close settings",children:c.jsx(It,{size:18})})]}),c.jsxs("section",{className:"settings-section",children:[c.jsxs("div",{className:"section-heading",children:[c.jsx(c_,{size:16}),c.jsx("h3",{children:"AI Model"})]}),c.jsxs("div",{className:"active-model-card",children:[c.jsx("span",{className:"card-title",children:"Connected Backend AI Model"}),c.jsxs("span",{className:"card-value",children:[c.jsx("span",{className:`status-dot ${s.length?"online":""}`}),c.jsx("b",{children:m}),c.jsxs("small",{style:{color:"#7a9582",marginLeft:"auto",fontSize:"10px"},children:["via ",g]})]})]}),c.jsx("label",{className:"field-label",htmlFor:"provider",children:"Provider"}),c.jsxs("select",{id:"provider",value:r.default_provider||"auto",onChange:v=>y(v.target.value),children:[c.jsx("option",{value:"auto",children:"Automatic routing (prioritizes active credentials)"}),n.map(v=>c.jsxs("option",{value:v.id,disabled:!v.available,children:[v.name,v.available?` (${v.default_model||"Connected"})`:" — not configured"]},v.id))]}),c.jsxs("label",{className:"field-label",htmlFor:"model-select",children:["Model Selection ",o.length>0?`(${o.length} models available)`:""]}),o.length>0?c.jsx("select",{id:"model-select",value:r.default_model||(a==null?void 0:a.default_model)||o[0]||"",onChange:v=>i({default_model:v.target.value}),children:o.map(v=>c.jsx("option",{value:v,children:v},v))}):c.jsx("input",{id:"model",value:r.default_model||"",onChange:v=>i({default_model:v.target.value}),placeholder:(a==null?void 0:a.default_model)||((x=s[0])==null?void 0:x.default_model)||"Model identifier"}),c.jsx("p",{className:"field-help",children:"Backend is connected to active providers. Keys and credentials are securely managed on the server."})]}),c.jsxs("section",{className:"settings-section",children:[c.jsxs("div",{className:"section-heading",children:[c.jsx(e1,{size:16}),c.jsx("h3",{children:"Voice Library & Synthesis"})]}),c.jsxs("label",{className:"toggle-row",children:[c.jsxs("span",{children:[c.jsx("b",{children:"Speak responses"}),c.jsx("small",{children:"Read the assistant's answer aloud with natural speech"})]}),c.jsx("input",{type:"checkbox",checked:r.auto_speak!==!1,onChange:v=>i({auto_speak:v.target.checked})})]}),c.jsx("label",{className:"field-label",htmlFor:"voice-engine",children:"Voice Synthesis Engine"}),c.jsxs("select",{id:"voice-engine",value:r.voice_engine||"auto",onChange:v=>i({voice_engine:v.target.value}),children:[c.jsx("option",{value:"auto",children:"ElevenLabs Neural Voice + Device Fallback (Recommended)"}),c.jsx("option",{value:"elevenlabs",children:"ElevenLabs Neural Voice Only"}),c.jsx("option",{value:"browser",children:"Device Web Speech API Only"})]}),c.jsx("p",{className:"field-help",children:"ElevenLabs provides natural, studio-quality AI voices. If unavailable or offline, the app automatically falls back to your device's browser speech engine."}),c.jsxs("label",{className:"field-label",style:{marginTop:"14px"},children:["Assistant Voice Profile (",Object.keys(pr).length," curated personas)"]}),c.jsx("div",{className:"voice-profiles-grid",children:Object.values(pr).map(v=>{const E=(r.voice_profile||"eliza").toLowerCase()===v.id,w=d===v.id;return c.jsxs("div",{className:`voice-profile-card ${E?"active":""}`,onClick:()=>i({voice_profile:v.id}),children:[c.jsxs("div",{className:"voice-card-header",children:[c.jsxs("div",{className:"voice-card-title",children:[E?c.jsx(Vp,{size:14,color:"var(--accent)"}):c.jsx(Qo,{size:14}),c.jsx("span",{children:v.name}),c.jsxs("small",{style:{color:"#748a7b",fontSize:"10px"},children:["· ",v.gender]})]}),v.badge&&c.jsx("span",{className:"voice-card-badge",children:v.badge})]}),c.jsxs("div",{className:"voice-card-meta",children:[c.jsx("span",{children:v.accent}),c.jsx("span",{children:"•"}),c.jsx("span",{children:v.role})]}),c.jsx("p",{className:"voice-card-desc",children:v.description}),c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"6px"},children:[c.jsxs("small",{style:{fontSize:"9px",color:"#5a7563"},children:["Search: ",v.search]}),c.jsxs("button",{type:"button",className:`voice-preview-btn ${w?"playing":""}`,onClick:I=>p(v.id,I),title:`Preview ${v.name}'s voice`,children:[w?c.jsx(m1,{size:11}):c.jsx(Tg,{size:11}),c.jsx("span",{children:w?"Stop":"Preview"})]})]})]},v.id)})}),c.jsx("label",{className:"field-label",htmlFor:"voice-lang",style:{marginTop:"12px"},children:c.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[c.jsx(d_,{size:13})," Spoken Voice Language (",Dc.length," Indian languages supported)"]})}),c.jsxs("select",{id:"voice-lang",value:r.voice_lang||"en-IN",onChange:v=>i({voice_lang:v.target.value}),children:[c.jsxs("optgroup",{label:"Recommended Defaults & International",children:[c.jsx("option",{value:"en-IN",children:"English (India) · en-IN (Recommended Default)"}),c.jsx("option",{value:"hi-IN",children:"Hindi (हिन्दी) · hi-IN"}),c.jsx("option",{value:"en-US",children:"English (United States) · en-US"}),c.jsx("option",{value:"en-GB",children:"English (United Kingdom) · en-GB"})]}),c.jsx("optgroup",{label:"Major Indian Languages (ElevenLabs & Multilingual)",children:Dc.filter(v=>v.code!=="en-IN"&&v.code!=="hi-IN").map(v=>c.jsxs("option",{value:v.code,children:[v.name," (",v.native,") · ",v.code]},v.code))})]}),c.jsx("label",{className:"field-label",htmlFor:"speech-recognition-lang",style:{marginTop:"14px"},children:c.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[c.jsx(Kd,{size:13,color:"var(--accent)"})," Microphone Recognition Language (STT)"]})}),c.jsxs("select",{id:"speech-recognition-lang",value:r.speech_recognition_lang||"en-IN",onChange:v=>i({speech_recognition_lang:v.target.value}),children:[c.jsxs("optgroup",{label:"Standard Microphones",children:[c.jsx("option",{value:"en-IN",children:"English (India) · en-IN"}),c.jsx("option",{value:"hi-IN",children:"Hindi (हिन्दी) · hi-IN"}),c.jsx("option",{value:"en-US",children:"English (US) · en-US"}),c.jsx("option",{value:"en-GB",children:"English (UK) · en-GB"})]}),c.jsx("optgroup",{label:"All Indian Languages",children:Dc.filter(v=>v.code!=="en-IN"&&v.code!=="hi-IN").map(v=>c.jsxs("option",{value:v.code,children:[v.name," (",v.native,") · ",v.code]},v.code))})]}),c.jsx("p",{className:"field-help",children:"Microphone speech recognition and assistant voice output are configured independently. Selecting an Indian language or English for speech recognition lets you speak in your preferred tongue."}),c.jsx("label",{className:"field-label",htmlFor:"voice",style:{marginTop:"14px"},children:"Device Browser Voice Fallback (optional override)"}),c.jsxs("select",{id:"voice",value:r.voice_name||"",onChange:v=>i({voice_name:v.target.value}),children:[c.jsx("option",{value:"",children:"Auto-match installed voice based on profile"}),l.map(v=>c.jsxs("option",{value:v.name,children:[v.name," [",v.lang,"] ",v.default?" · device default":""]},`${v.name}-${v.lang}`))]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",marginTop:"12px"},children:[c.jsxs("div",{children:[c.jsxs("label",{className:"field-label",htmlFor:"rate",children:["Speed: ",Number(r.speech_rate||1).toFixed(1),"×"]}),c.jsx("input",{id:"rate",type:"range",min:"0.5",max:"2",step:"0.1",value:r.speech_rate||1,onChange:v=>i({speech_rate:Number(v.target.value)})})]}),c.jsxs("div",{children:[c.jsxs("label",{className:"field-label",htmlFor:"pitch",children:["Pitch: ",Number(r.speech_pitch||1).toFixed(1),"×"]}),c.jsx("input",{id:"pitch",type:"range",min:"0.7",max:"1.3",step:"0.05",value:r.speech_pitch||1,onChange:v=>i({speech_pitch:Number(v.target.value)})})]})]}),c.jsxs("button",{className:"text-action",type:"button",onClick:h,style:{marginTop:"10px"},children:[c.jsx(Tg,{size:13})," Test Selected Voice & Speed"]})]}),c.jsxs("section",{className:"settings-section",children:[c.jsxs("div",{className:"section-heading",children:[c.jsx(Kp,{size:16}),c.jsx("h3",{children:"Answer Quality & Persona"})]}),c.jsx("label",{className:"field-label",htmlFor:"response-style",children:"Response Persona / Profile"}),c.jsxs("select",{id:"response-style",value:r.response_style||"balanced",onChange:v=>i({response_style:v.target.value}),children:[c.jsx("option",{value:"balanced",children:"Balanced · Clear, natural & well-structured (Recommended)"}),c.jsx("option",{value:"concise",children:"Concise · Direct answer with key takeaways"}),c.jsx("option",{value:"tutor",children:"Patient Tutor · Step-by-step breakdown & analogies"}),c.jsx("option",{value:"expert",children:"Senior Expert · Technical precision & trade-offs"}),c.jsx("option",{value:"coding",children:"Software Engineer · Production code, tests & edge cases"}),c.jsx("option",{value:"creative",children:"Creative · Imaginative, original & expressive"})]}),c.jsxs("label",{className:"toggle-row",children:[c.jsxs("span",{children:[c.jsx("b",{children:"Detailed answers"}),c.jsx("small",{children:"Include comprehensive examples, edge cases, and summaries"})]}),c.jsx("input",{type:"checkbox",checked:r.detailed_responses===!0,onChange:v=>i({detailed_responses:v.target.checked})})]}),c.jsx("label",{className:"field-label",htmlFor:"custom-prompt",children:"Additional instructions (optional)"}),c.jsx("textarea",{id:"custom-prompt",rows:4,maxLength:4e3,value:r.custom_system_prompt||"",onChange:v=>i({custom_system_prompt:v.target.value}),placeholder:"Example: Explain technical concepts in simple English, include practical code examples, and outline clear next steps."}),c.jsx("p",{className:"field-help",children:"These instructions are sent with each chat request. Keep them focused on your preferred style and task; do not put API keys or private credentials here."})]}),c.jsxs("section",{className:"settings-section",children:[c.jsxs("div",{className:"section-heading",style:{justifyContent:"space-between"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"9px"},children:[c.jsx(m_,{size:16}),c.jsx("h3",{children:"Appearance & Themes"})]}),c.jsxs("button",{type:"button",className:"text-action",onClick:S,style:{fontSize:"10px",padding:"3px 7px"},title:"Pick a random theme",children:[c.jsx(x_,{size:11})," Random Theme"]})]}),c.jsx("div",{className:"theme-category-label",children:"36 Gradient Mixed Themes (Dynamic Atmospheric Glow)"}),c.jsx("div",{className:"theme-swatches-grid",style:{gridTemplateColumns:"repeat(4, 1fr)",maxHeight:"240px",overflowY:"auto",paddingRight:"4px"},children:Bk.map(v=>c.jsxs("button",{type:"button",className:`theme-swatch ${r.theme===v.id?"active":""}`,onClick:()=>b(v.id),title:`${v.name}: ${v.desc}`,children:[c.jsx("span",{className:"swatch-color-pill",style:{background:v.grad}}),c.jsx("span",{className:"swatch-name",children:v.name})]},v.id))}),c.jsx("div",{className:"theme-category-label",style:{marginTop:"14px"},children:"15 Solid Minimalist Colors"}),c.jsx("div",{className:"theme-swatches-grid",style:{gridTemplateColumns:"repeat(5, 1fr)"},children:Uk.map(v=>c.jsxs("button",{type:"button",className:`theme-swatch ${r.theme===v.id?"active":""}`,onClick:()=>b(v.id),title:`${v.name}: ${v.desc}`,children:[c.jsx("span",{className:"swatch-color-pill",style:{backgroundColor:v.color}}),c.jsx("span",{className:"swatch-name",children:v.name})]},v.id))}),c.jsx("p",{className:"field-help",children:"Every new visitor is assigned a unique random theme color. When you pick your favorite theme, it stays locked until you choose to change it again."})]}),c.jsxs("div",{className:"dev-credit-card",children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(b_,{size:12,color:"var(--accent)"}),c.jsxs("span",{children:["Developed by ",c.jsx("strong",{children:"Akhil Thadaka"})]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginTop:"2px"},children:[c.jsx(_a,{size:12,color:"var(--accent)"}),c.jsxs("span",{children:["Contact: ",c.jsx("a",{href:"tel:9121751697",children:"9121751697"})]})]})]}),c.jsxs("footer",{className:"drawer-footer",children:[c.jsx(v_,{size:14}),c.jsx("span",{children:"Settings save automatically for your session."})]})]})}):null}function FL(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const OL=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,zL=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,UL={};function xx(e,t){return(UL.jsx?zL:OL).test(e)}const BL=/[ \t\n\f\r]/g;function VL(e){return typeof e=="object"?e.type==="text"?vx(e.value):!1:vx(e)}function vx(e){return e.replace(BL,"")===""}class ro{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}ro.prototype.normal={};ro.prototype.property={};ro.prototype.space=void 0;function Hk(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new ro(n,r,t)}function Sf(e){return e.toLowerCase()}class Et{constructor(t,n){this.attribute=n,this.property=t}}Et.prototype.attribute="";Et.prototype.booleanish=!1;Et.prototype.boolean=!1;Et.prototype.commaOrSpaceSeparated=!1;Et.prototype.commaSeparated=!1;Et.prototype.defined=!1;Et.prototype.mustUseProperty=!1;Et.prototype.number=!1;Et.prototype.overloadedBoolean=!1;Et.prototype.property="";Et.prototype.spaceSeparated=!1;Et.prototype.space=void 0;let $L=0;const re=mi(),Ue=mi(),Ef=mi(),O=mi(),ye=mi(),ri=mi(),Tt=mi();function mi(){return 2**++$L}const Cf=Object.freeze(Object.defineProperty({__proto__:null,boolean:re,booleanish:Ue,commaOrSpaceSeparated:Tt,commaSeparated:ri,number:O,overloadedBoolean:Ef,spaceSeparated:ye},Symbol.toStringTag,{value:"Module"})),Mc=Object.keys(Cf);class zh extends Et{constructor(t,n,r,i){let s=-1;if(super(t,n),bx(this,"space",i),typeof r=="number")for(;++s<Mc.length;){const a=Mc[s];bx(this,Mc[s],(r&Cf[a])===Cf[a])}}}zh.prototype.defined=!0;function bx(e,t,n){n&&(e[t]=n)}function bs(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const s=new zh(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),t[r]=s,n[Sf(r)]=r,n[Sf(s.attribute)]=r}return new ro(t,n,e.space)}const Wk=bs({properties:{ariaActiveDescendant:null,ariaAtomic:Ue,ariaAutoComplete:null,ariaBusy:Ue,ariaChecked:Ue,ariaColCount:O,ariaColIndex:O,ariaColSpan:O,ariaControls:ye,ariaCurrent:null,ariaDescribedBy:ye,ariaDetails:null,ariaDisabled:Ue,ariaDropEffect:ye,ariaErrorMessage:null,ariaExpanded:Ue,ariaFlowTo:ye,ariaGrabbed:Ue,ariaHasPopup:null,ariaHidden:Ue,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ye,ariaLevel:O,ariaLive:null,ariaModal:Ue,ariaMultiLine:Ue,ariaMultiSelectable:Ue,ariaOrientation:null,ariaOwns:ye,ariaPlaceholder:null,ariaPosInSet:O,ariaPressed:Ue,ariaReadOnly:Ue,ariaRelevant:null,ariaRequired:Ue,ariaRoleDescription:ye,ariaRowCount:O,ariaRowIndex:O,ariaRowSpan:O,ariaSelected:Ue,ariaSetSize:O,ariaSort:null,ariaValueMax:O,ariaValueMin:O,ariaValueNow:O,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Gk(e,t){return t in e?e[t]:t}function qk(e,t){return Gk(e,t.toLowerCase())}const HL=bs({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ri,acceptCharset:ye,accessKey:ye,action:null,allow:null,allowFullScreen:re,allowPaymentRequest:re,allowUserMedia:re,alpha:re,alt:null,as:null,async:re,autoCapitalize:null,autoComplete:ye,autoFocus:re,autoPlay:re,blocking:ye,capture:null,charSet:null,checked:re,cite:null,className:ye,closedBy:null,colorSpace:null,cols:O,colSpan:O,command:null,commandFor:null,content:null,contentEditable:Ue,controls:re,controlsList:ye,coords:O|ri,crossOrigin:null,data:null,dateTime:null,decoding:null,default:re,defer:re,dir:null,dirName:null,disabled:re,download:Ef,draggable:Ue,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:re,formTarget:null,headers:ye,height:O,hidden:Ef,high:O,href:null,hrefLang:null,htmlFor:ye,httpEquiv:ye,id:null,imageSizes:null,imageSrcSet:null,inert:re,inputMode:null,integrity:null,is:null,isMap:re,itemId:null,itemProp:ye,itemRef:ye,itemScope:re,itemType:ye,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:re,low:O,manifest:null,max:null,maxLength:O,media:null,method:null,min:null,minLength:O,multiple:re,muted:re,name:null,nonce:null,noModule:re,noValidate:re,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:re,optimum:O,pattern:null,ping:ye,placeholder:null,playsInline:re,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:re,referrerPolicy:null,rel:ye,required:re,reversed:re,rows:O,rowSpan:O,sandbox:ye,scope:null,scoped:re,seamless:re,selected:re,shadowRootClonable:re,shadowRootCustomElementRegistry:re,shadowRootDelegatesFocus:re,shadowRootMode:null,shadowRootSerializable:re,shape:null,size:O,sizes:null,slot:null,span:O,spellCheck:Ue,src:null,srcDoc:null,srcLang:null,srcSet:null,start:O,step:null,style:null,tabIndex:O,target:null,title:null,translate:null,type:null,typeMustMatch:re,useMap:null,value:Ue,width:O,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ye,axis:null,background:null,bgColor:null,border:O,borderColor:null,bottomMargin:O,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:re,declare:re,event:null,face:null,frame:null,frameBorder:null,hSpace:O,leftMargin:O,link:null,longDesc:null,lowSrc:null,marginHeight:O,marginWidth:O,noResize:re,noHref:re,noShade:re,noWrap:re,object:null,profile:null,prompt:null,rev:null,rightMargin:O,rules:null,scheme:null,scrolling:Ue,standby:null,summary:null,text:null,topMargin:O,valueType:null,version:null,vAlign:null,vLink:null,vSpace:O,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:re,disablePictureInPicture:re,disableRemotePlayback:re,exportParts:ri,part:ye,prefix:null,property:null,results:O,security:null,unselectable:null},space:"html",transform:qk}),WL=bs({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Tt,accentHeight:O,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:O,amplitude:O,arabicForm:null,ascent:O,attributeName:null,attributeType:null,azimuth:O,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:O,by:null,calcMode:null,capHeight:O,className:ye,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:O,diffuseConstant:O,direction:null,display:null,dur:null,divisor:O,dominantBaseline:null,download:re,dx:null,dy:null,edgeMode:null,editable:null,elevation:O,enableBackground:null,end:null,event:null,exponent:O,externalResourcesRequired:null,fill:null,fillOpacity:O,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ri,g2:ri,glyphName:ri,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:O,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:O,horizOriginX:O,horizOriginY:O,id:null,ideographic:O,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:O,k:O,k1:O,k2:O,k3:O,k4:O,kernelMatrix:Tt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:O,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:O,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:O,overlineThickness:O,paintOrder:null,panose1:null,path:null,pathLength:O,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ye,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:O,pointsAtY:O,pointsAtZ:O,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Tt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Tt,rev:Tt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Tt,requiredFeatures:Tt,requiredFonts:Tt,requiredFormats:Tt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:O,specularExponent:O,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:O,strikethroughThickness:O,string:null,stroke:null,strokeDashArray:Tt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:O,strokeOpacity:O,strokeWidth:null,style:null,surfaceScale:O,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Tt,tabIndex:O,tableValues:null,target:null,targetX:O,targetY:O,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Tt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:O,underlineThickness:O,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:O,values:null,vAlphabetic:O,vMathematical:O,vectorEffect:null,vHanging:O,vIdeographic:O,version:null,vertAdvY:O,vertOriginX:O,vertOriginY:O,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:O,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Gk}),Kk=bs({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Yk=bs({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:qk}),Xk=bs({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),GL={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},qL=/[A-Z]/g,wx=/-[a-z]/g,KL=/^data[-\w.:]+$/i;function YL(e,t){const n=Sf(t);let r=t,i=Et;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&KL.test(t)){if(t.charAt(4)==="-"){const s=t.slice(5).replace(wx,QL);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=t.slice(4);if(!wx.test(s)){let a=s.replace(qL,XL);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=zh}return new i(r,t)}function XL(e){return"-"+e.toLowerCase()}function QL(e){return e.charAt(1).toUpperCase()}const ZL=Hk([Wk,HL,Kk,Yk,Xk],"html"),Uh=Hk([Wk,WL,Kk,Yk,Xk],"svg");function JL(e){return e.join(" ").trim()}var Bh={},kx=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,eD=/\n/g,tD=/^\s*/,nD=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,rD=/^:\s*/,iD=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,sD=/^[;\s]*/,aD=/^\s+|\s+$/g,oD=`
`,Sx="/",Ex="*",Wr="",lD="comment",uD="declaration";function cD(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(y){var b=y.match(eD);b&&(n+=b.length);var S=y.lastIndexOf(oD);r=~S?y.length-S:r+y.length}function s(){var y={line:n,column:r};return function(b){return b.position=new a(y),u(),b}}function a(y){this.start=y,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function o(y){var b=new Error(t.source+":"+n+":"+r+": "+y);if(b.reason=y,b.filename=t.source,b.line=n,b.column=r,b.source=e,!t.silent)throw b}function l(y){var b=y.exec(e);if(b){var S=b[0];return i(S),e=e.slice(S.length),b}}function u(){l(tD)}function d(y){var b;for(y=y||[];b=f();)b!==!1&&y.push(b);return y}function f(){var y=s();if(!(Sx!=e.charAt(0)||Ex!=e.charAt(1))){for(var b=2;Wr!=e.charAt(b)&&(Ex!=e.charAt(b)||Sx!=e.charAt(b+1));)++b;if(b+=2,Wr===e.charAt(b-1))return o("End of comment missing");var S=e.slice(2,b-2);return r+=2,i(S),e=e.slice(b),r+=2,y({type:lD,comment:S})}}function p(){var y=s(),b=l(nD);if(b){if(f(),!l(rD))return o("property missing ':'");var S=l(iD),g=y({type:uD,property:Cx(b[0].replace(kx,Wr)),value:S?Cx(S[0].replace(kx,Wr)):Wr});return l(sD),g}}function h(){var y=[];d(y);for(var b;b=p();)b!==!1&&(y.push(b),d(y));return y}return u(),h()}function Cx(e){return e?e.replace(aD,Wr):Wr}var dD=cD,fD=qi&&qi.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Bh,"__esModule",{value:!0});Bh.default=hD;const pD=fD(dD);function hD(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,pD.default)(e),i=typeof t=="function";return r.forEach(s=>{if(s.type!=="declaration")return;const{property:a,value:o}=s;i?t(a,o,s):o&&(n=n||{},n[a]=o)}),n}var ju={};Object.defineProperty(ju,"__esModule",{value:!0});ju.camelCase=void 0;var mD=/^--[a-zA-Z0-9_-]+$/,gD=/-([a-z])/g,yD=/^[^-]+$/,xD=/^-(webkit|moz|ms|o|khtml)-/,vD=/^-(ms)-/,bD=function(e){return!e||yD.test(e)||mD.test(e)},wD=function(e,t){return t.toUpperCase()},Tx=function(e,t){return"".concat(t,"-")},kD=function(e,t){return t===void 0&&(t={}),bD(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(vD,Tx):e=e.replace(xD,Tx),e.replace(gD,wD))};ju.camelCase=kD;var SD=qi&&qi.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},ED=SD(Bh),CD=ju;function Tf(e,t){var n={};return!e||typeof e!="string"||(0,ED.default)(e,function(r,i){r&&i&&(n[(0,CD.camelCase)(r,t)]=i)}),n}Tf.default=Tf;var TD=Tf;const _D=tu(TD),Qk=Zk("end"),Vh=Zk("start");function Zk(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function AD(e){const t=Vh(e),n=Qk(e);if(t&&n)return{start:t,end:n}}function sa(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?_x(e.position):"start"in e||"end"in e?_x(e):"line"in e||"column"in e?_f(e):""}function _f(e){return Ax(e&&e.line)+":"+Ax(e&&e.column)}function _x(e){return _f(e&&e.start)+"-"+_f(e&&e.end)}function Ax(e){return e&&typeof e=="number"?e:1}class ut extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",s={},a=!1;if(n&&("line"in n&&"column"in n?s={place:n}:"start"in n&&"end"in n?s={place:n}:"type"in n?s={ancestors:[n],place:n.position}:s={...n}),typeof t=="string"?i=t:!s.cause&&t&&(a=!0,i=t.message,s.cause=t),!s.ruleId&&!s.source&&typeof r=="string"){const l=r.indexOf(":");l===-1?s.ruleId=r:(s.source=r.slice(0,l),s.ruleId=r.slice(l+1))}if(!s.place&&s.ancestors&&s.ancestors){const l=s.ancestors[s.ancestors.length-1];l&&(s.place=l.position)}const o=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=o?o.line:void 0,this.name=sa(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=a&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}ut.prototype.file="";ut.prototype.name="";ut.prototype.reason="";ut.prototype.message="";ut.prototype.stack="";ut.prototype.column=void 0;ut.prototype.line=void 0;ut.prototype.ancestors=void 0;ut.prototype.cause=void 0;ut.prototype.fatal=void 0;ut.prototype.place=void 0;ut.prototype.ruleId=void 0;ut.prototype.source=void 0;const $h={}.hasOwnProperty,ID=new Map,ND=/[A-Z]/g,PD=new Set(["table","tbody","thead","tfoot","tr"]),jD=new Set(["td","th"]),Jk="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function RD(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=BD(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=UD(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Uh:ZL,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},s=e2(i,e,void 0);return s&&typeof s!="string"?s:i.create(e,i.Fragment,{children:s||void 0},void 0)}function e2(e,t,n){if(t.type==="element")return LD(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return DD(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return FD(e,t,n);if(t.type==="mdxjsEsm")return MD(e,t);if(t.type==="root")return OD(e,t,n);if(t.type==="text")return zD(e,t)}function LD(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Uh,e.schema=i),e.ancestors.push(t);const s=n2(e,t.tagName,!1),a=VD(e,t);let o=Wh(e,t);return PD.has(t.tagName)&&(o=o.filter(function(l){return typeof l=="string"?!VL(l):!0})),t2(e,a,s,t),Hh(a,o),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function DD(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}za(e,t.position)}function MD(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);za(e,t.position)}function FD(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Uh,e.schema=i),e.ancestors.push(t);const s=t.name===null?e.Fragment:n2(e,t.name,!0),a=$D(e,t),o=Wh(e,t);return t2(e,a,s,t),Hh(a,o),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function OD(e,t,n){const r={};return Hh(r,Wh(e,t)),e.create(t,e.Fragment,r,n)}function zD(e,t){return t.value}function t2(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Hh(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function UD(e,t,n){return r;function r(i,s,a,o){const u=Array.isArray(a.children)?n:t;return o?u(s,a,o):u(s,a)}}function BD(e,t){return n;function n(r,i,s,a){const o=Array.isArray(s.children),l=Vh(r);return t(i,s,a,o,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}function VD(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&$h.call(t.properties,i)){const s=HD(e,i,t.properties[i]);if(s){const[a,o]=s;e.tableCellAlignToStyle&&a==="align"&&typeof o=="string"&&jD.has(t.tagName)?r=o:n[a]=o}}if(r){const s=n.style||(n.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function $D(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const s=r.data.estree.body[0];s.type;const a=s.expression;a.type;const o=a.properties[0];o.type,Object.assign(n,e.evaluater.evaluateExpression(o.argument))}else za(e,t.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const o=r.value.data.estree.body[0];o.type,s=e.evaluater.evaluateExpression(o.expression)}else za(e,t.position);else s=r.value===null?!0:r.value;n[i]=s}return n}function Wh(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:ID;for(;++r<t.children.length;){const s=t.children[r];let a;if(e.passKeys){const l=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(l){const u=i.get(l)||0;a=l+"-"+u,i.set(l,u+1)}}const o=e2(e,s,a);o!==void 0&&n.push(o)}return n}function HD(e,t,n){const r=YL(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?FL(n):JL(n)),r.property==="style"){let i=typeof n=="object"?n:WD(e,String(n));return e.stylePropertyNameCase==="css"&&(i=GD(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?GL[r.property]||r.property:r.attribute,n]}}function WD(e,t){try{return _D(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new ut("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Jk+"#cannot-parse-style-attribute",i}}function n2(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let s=-1,a;for(;++s<i.length;){const o=xx(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};a=a?{type:"MemberExpression",object:a,property:o,computed:!!(s&&o.type==="Literal"),optional:!1}:o}r=a}else r=xx(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return $h.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);za(e)}function za(e,t){const n=new ut("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Jk+"#cannot-handle-mdx-estrees-without-createevaluater",n}function GD(e){const t={};let n;for(n in e)$h.call(e,n)&&(t[qD(n)]=e[n]);return t}function qD(e){let t=e.replace(ND,KD);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function KD(e){return"-"+e.toLowerCase()}const Fc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},YD={};function Gh(e,t){const n=YD,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return r2(e,r,i)}function r2(e,t,n){if(XD(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Ix(e.children,t,n)}return Array.isArray(e)?Ix(e,t,n):""}function Ix(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=r2(e[i],t,n);return r.join("")}function XD(e){return!!(e&&typeof e=="object")}const Nx=document.createElement("i");function qh(e){const t="&"+e+";";Nx.innerHTML=t;const n=Nx.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function on(e,t,n,r){const i=e.length;let s=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);s<r.length;)a=r.slice(s,s+1e4),a.unshift(t,0),e.splice(...a),s+=1e4,t+=1e4}function $t(e,t){return e.length>0?(on(e,e.length,0,t),e):t}const Px={}.hasOwnProperty;function i2(e){const t={};let n=-1;for(;++n<e.length;)QD(t,e[n]);return t}function QD(e,t){let n;for(n in t){const i=(Px.call(e,n)?e[n]:void 0)||(e[n]={}),s=t[n];let a;if(s)for(a in s){Px.call(i,a)||(i[a]=[]);const o=s[a];ZD(i[a],Array.isArray(o)?o:o?[o]:[])}}}function ZD(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);on(e,0,0,r)}function s2(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function ln(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const ft=Rr(/[A-Za-z]/),ot=Rr(/[\dA-Za-z]/),JD=Rr(/[#-'*+\--9=?A-Z^-~]/);function Xl(e){return e!==null&&(e<32||e===127)}const Af=Rr(/\d/),e3=Rr(/[\dA-Fa-f]/),t3=Rr(/[!-/:-@[-`{-~]/);function Z(e){return e!==null&&e<-2}function ve(e){return e!==null&&(e<0||e===32)}function ae(e){return e===-2||e===-1||e===32}const Ru=Rr(new RegExp("\\p{P}|\\p{S}","u")),di=Rr(/\s/);function Rr(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function ws(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const s=e.charCodeAt(n);let a="";if(s===37&&ot(e.charCodeAt(n+1))&&ot(e.charCodeAt(n+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(a=String.fromCharCode(s));else if(s>55295&&s<57344){const o=e.charCodeAt(n+1);s<56320&&o>56319&&o<57344?(a=String.fromCharCode(s,o),i=1):a="�"}else a=String.fromCharCode(s);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function fe(e,t,n,r){const i=r?r-1:1/0;let s=0;return a;function a(l){return ae(l)?(e.enter(n),o(l)):t(l)}function o(l){return ae(l)&&s++<i?(e.consume(l),o):(e.exit(n),t(l))}}function a2(e,t,n,r,i,s){let a=0;return o;function o(d){return ae(d)?(e.enter(r),l(d)):u(d)}function l(d){return ae(d)&&a<s?(e.consume(d),a++,l):(e.exit(r),u(d))}function u(d){return a>=i?t(d):n(d)}}const n3={tokenize:r3};function r3(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),fe(e,t,"linePrefix")}function i(o){return e.enter("paragraph"),s(o)}function s(o){const l=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,a(o)}function a(o){if(o===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(o);return}return Z(o)?(e.consume(o),e.exit("chunkText"),s):(e.consume(o),a)}}let Ql=class{constructor(){this.index=new Map,this.map=[]}add(t,n,r){jx(this,t,n,r,!1)}addBefore(t,n,r){jx(this,t,n,r,!0)}consume(t){if(this.map.sort(function(s,a){return s[0]-a[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(const s of i)t.push(s);i=r.pop()}this.map.length=0,this.index.clear()}};function jx(e,t,n,r,i){if(n===0&&r.length===0)return;const s=e.index.get(t);if(s){s[1]+=n,i?(r.push(...s[2]),s[2]=r):s[2].push(...r);return}const a=[t,n,r];e.map.push(a),e.index.set(t,a)}const i3={tokenize:s3},Rx={tokenize:a3};function s3(e){const t=this,n=[];let r=0,i,s,a;return o;function o(x){if(r<n.length){const v=n[r];return t.containerState=v[1],e.attempt(v[0].continuation,l,u)(x)}return u(x)}function l(x){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&m();const v=t.events.length;let E=v,w;for(;E--;)if(t.events[E][0]==="exit"&&t.events[E][1].type==="chunkFlow"){w=t.events[E][1].end;break}g(r);let I=v;for(;I<t.events.length;)t.events[I][1].end={...w},I++;const P=new Ql;return P.add(E+1,0,t.events.slice(v)),P.add(v,I-v,[]),P.consume(t.events),u(x)}return o(x)}function u(x){if(r===n.length){if(!i)return p(x);if(i.currentConstruct&&i.currentConstruct.concrete)return y(x);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Rx,d,f)(x)}function d(x){return i&&m(),g(r),p(x)}function f(x){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,y(x)}function p(x){return t.containerState={},e.attempt(Rx,h,y)(x)}function h(x){return r++,n.push([t.currentConstruct,t.containerState]),p(x)}function y(x){if(x===null){i&&m(),g(0),e.consume(x);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),b(x)}function b(x){if(x===null){S(e.exit("chunkFlow"),!0),g(0),e.consume(x);return}return Z(x)?(e.consume(x),S(e.exit("chunkFlow")),r=0,t.interrupt=void 0,o):(e.consume(x),b)}function S(x,v){const E=t.sliceStream(x);if(v&&E.push(null),x.previous=s,s&&(s.next=x),s=x,i.defineSkip(x.start),i.write(E),t.parser.lazy[x.start.line]){let w=i.events.length;for(;w--;)if(i.events[w][1].start.offset<a&&(!i.events[w][1].end||i.events[w][1].end.offset>a))return;const I=t.events.length;let P=I,R,_;for(;P--;)if(t.events[P][0]==="exit"&&t.events[P][1].type==="chunkFlow"){if(R){_=t.events[P][1].end;break}R=!0}for(g(r),w=I;w<t.events.length;)t.events[w][1].end={..._},w++;const j=new Ql;j.add(P+1,0,t.events.slice(I)),j.add(I,w-I,[]),j.consume(t.events)}}function g(x){let v=n.length;for(;v-- >x;){const E=n[v];t.containerState=E[1],E[0].exit.call(t,e)}n.length=x}function m(){i.write([null]),s=void 0,i=void 0,t.containerState._closeFlow=void 0}}function a3(e,t,n){return fe(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Zl(e){if(e===null||ve(e)||di(e))return 1;if(Ru(e))return 2}function Lu(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const s=e[i].resolveAll;s&&!r.includes(s)&&(t=s(t,n),r.push(s))}return t}const If={name:"attention",resolveAll:o3,tokenize:l3};function o3(e,t){let n=-1,r;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){let i=n;for(;i--;)if(e[i][0]==="exit"&&e[i][1].type==="attentionSequence"&&e[i][1]._open&&t.sliceSerialize(e[i][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[i][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;const s=e[i][1].end.offset-e[i][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1,a={...e[i][1].end},o={...e[n][1].start};Lx(a,-s),Lx(o,s);const l={type:s>1?"strongSequence":"emphasisSequence",start:a,end:{...e[i][1].end}},u={type:s>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:o},d={type:s>1?"strongText":"emphasisText",start:{...e[i][1].end},end:{...e[n][1].start}},f={type:s>1?"strong":"emphasis",start:{...l.start},end:{...u.end}};e[i][1].end={...l.start},e[n][1].start={...u.end},r=[],e[i][1].end.offset-e[i][1].start.offset&&(r=$t(r,[["enter",e[i][1],t],["exit",e[i][1],t]])),r=$t(r,[["enter",f,t],["enter",l,t],["exit",l,t],["enter",d,t]]),r=$t(r,Lu(t.parser.constructs.insideSpan.null,e.slice(i+1,n),t)),r=$t(r,[["exit",d,t],["enter",u,t],["exit",u,t],["exit",f,t]]);let p=0;e[n][1].end.offset-e[n][1].start.offset&&(p=2,r=$t(r,[["enter",e[n][1],t],["exit",e[n][1],t]])),on(e,i-1,n-i+3,r),n=i+r.length-p-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function l3(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Zl(r);let s;return a;function a(l){return s=l,e.enter("attentionSequence"),o(l)}function o(l){if(l===s)return e.consume(l),o;const u=e.exit("attentionSequence"),d=Zl(l),f=!d||d===2&&i||n.includes(l)&&l!==42&&l!==95,p=!i||i===2&&d||n.includes(r)&&r!==42&&r!==95;return u._open=!!(s===42?f:f&&(i||!p)),u._close=!!(s===42?p:p&&(d||!f)),t(l)}}function Lx(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const u3={name:"autolink",tokenize:c3};function c3(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(h){return ft(h)?(e.consume(h),a):h===64?n(h):u(h)}function a(h){return h===43||h===45||h===46||ot(h)?(r=1,o(h)):u(h)}function o(h){return h===58?(e.consume(h),r=0,l):(h===43||h===45||h===46||ot(h))&&r++<32?(e.consume(h),o):(r=0,u(h))}function l(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||Xl(h)?n(h):(e.consume(h),l)}function u(h){return h===64?(e.consume(h),d):JD(h)?(e.consume(h),u):n(h)}function d(h){return ot(h)?f(h):n(h)}function f(h){return h===46?(e.consume(h),r=0,d):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):p(h)}function p(h){if((h===45||ot(h))&&r++<63){const y=h===45?p:f;return e.consume(h),y}return n(h)}}const io={partial:!0,tokenize:d3};function d3(e,t,n){return r;function r(s){return ae(s)?fe(e,i,"linePrefix")(s):i(s)}function i(s){return s===null||Z(s)?t(s):n(s)}}const o2={continuation:{tokenize:p3},exit:h3,name:"blockQuote",tokenize:f3};function f3(e,t,n){const r=this;return i;function i(a){if(a===62){const o=r.containerState;return o.open||(e.enter("blockQuote",{_container:!0}),o.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),s}return n(a)}function s(a){return ae(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function p3(e,t,n){const r=this;return i;function i(a){return ae(a)?fe(e,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):s(a)}function s(a){return e.attempt(o2,t,n)(a)}}function h3(e){e.exit("blockQuote")}const l2={name:"characterEscape",tokenize:m3};function m3(e,t,n){return r;function r(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),i}function i(s){return t3(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(s)}}const u2={name:"characterReference",tokenize:g3};function g3(e,t,n){const r=this;let i=0,s,a;return o;function o(f){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),l}function l(f){return f===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(f),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),s=31,a=ot,d(f))}function u(f){return f===88||f===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(f),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,a=e3,d):(e.enter("characterReferenceValue"),s=7,a=Af,d(f))}function d(f){if(f===59&&i){const p=e.exit("characterReferenceValue");return a===ot&&!qh(r.sliceSerialize(p))?n(f):(e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(f)&&i++<s?(e.consume(f),d):n(f)}}const Nf={partial:!0,tokenize:y3};function y3(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const Dx={concrete:!0,name:"codeFenced",tokenize:x3};function x3(e,t,n){const r=this,i={partial:!0,tokenize:E};let s=0,a=0,o;return l;function l(w){return u(w)}function u(w){const I=r.events[r.events.length-1];return s=I&&I[1].type==="linePrefix"?I[2].sliceSerialize(I[1],!0).length:0,o=w,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(w)}function d(w){return w===o?(a++,e.consume(w),d):a<3?n(w):(e.exit("codeFencedFenceSequence"),ae(w)?fe(e,f,"whitespace")(w):f(w))}function f(w){return w===null||Z(w)?(e.exit("codeFencedFence"),r.interrupt?t(w):e.check(Nf,b,v)(w)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(w))}function p(w){return w===null||Z(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),f(w)):ae(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),fe(e,h,"whitespace")(w)):w===96&&w===o?n(w):(e.consume(w),p)}function h(w){return w===null||Z(w)?f(w):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),y(w))}function y(w){return w===null||Z(w)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),f(w)):w===96&&w===o?n(w):(e.consume(w),y)}function b(w){return e.attempt(i,v,S)(w)}function S(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),g}function g(w){return s>0&&ae(w)?fe(e,m,"linePrefix",s+1)(w):m(w)}function m(w){return w===null||Z(w)?e.check(Nf,b,v)(w):(e.enter("codeFlowValue"),x(w))}function x(w){return w===null||Z(w)?(e.exit("codeFlowValue"),m(w)):(e.consume(w),x)}function v(w){return e.exit("codeFenced"),t(w)}function E(w,I,P){let R=0;return _;function _(H){return w.enter("lineEnding"),w.consume(H),w.exit("lineEnding"),j}function j(H){return w.enter("codeFencedFence"),ae(H)?fe(w,U,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(H):U(H)}function U(H){return H===o?(w.enter("codeFencedFenceSequence"),q(H)):P(H)}function q(H){return H===o?(R++,w.consume(H),q):R>=a?(w.exit("codeFencedFenceSequence"),ae(H)?fe(w,Q,"whitespace")(H):Q(H)):P(H)}function Q(H){return H===null||Z(H)?(w.exit("codeFencedFence"),I(H)):P(H)}}}const Oc={name:"codeIndented",tokenize:b3},v3={partial:!0,tokenize:w3};function b3(e,t,n){return r;function r(o){return e.enter("codeIndented"),a2(e,i,n,"linePrefix",4,4)(o)}function i(o){return o===null?a(o):Z(o)?e.attempt(v3,i,a)(o):(e.enter("codeFlowValue"),s(o))}function s(o){return o===null||Z(o)?(e.exit("codeFlowValue"),i(o)):(e.consume(o),s)}function a(o){return e.exit("codeIndented"),t(o)}}function w3(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):Z(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):a2(e,t,s,"linePrefix",4,4)(a)}function s(a){return Z(a)?i(a):n(a)}}const k3={name:"codeText",previous:E3,resolve:S3,tokenize:C3};function S3(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function E3(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function C3(e,t,n){let r=0,i,s;return a;function a(f){return e.enter("codeText"),e.enter("codeTextSequence"),o(f)}function o(f){return f===96?(e.consume(f),r++,o):(e.exit("codeTextSequence"),l(f))}function l(f){return f===null?n(f):f===32?(e.enter("space"),e.consume(f),e.exit("space"),l):f===96?(s=e.enter("codeTextSequence"),i=0,d(f)):Z(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),l):(e.enter("codeTextData"),u(f))}function u(f){return f===null||f===32||f===96||Z(f)?(e.exit("codeTextData"),l(f)):(e.consume(f),u)}function d(f){return f===96?(e.consume(f),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(f)):(s.type="codeTextData",u(f))}}class T3{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&js(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),js(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),js(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);js(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);js(this.left,n.reverse())}}}function js(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function c2(e){const t={};let n=-1,r,i,s,a,o,l,u;const d=new T3(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,s=0,s<l.length&&l[s][1].type==="lineEndingBlank"&&(s+=2),s<l.length&&l[s][1].type==="content"))for(;++s<l.length&&l[s][1].type!=="content";)l[s][1].type==="chunkText"&&(l[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,_3(d,n)),n=t[n],u=!0);else if(r[1]._container){for(s=n,i=void 0;s--;)if(a=d.get(s),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=s);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},o=d.slice(i,n),o.unshift(r),d.splice(i,n-i+1,o))}}return on(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function _3(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const s=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const o=a.events,l=[],u={};let d,f,p=-1,h=n,y=0,b=0;const S=[b];for(;h;){for(;e.get(++i)[1]!==h;);s.push(i),h._tokenizer||(d=r.sliceStream(h),h.next||d.push(null),f&&a.defineSkip(h.start),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),f=h,h=h.next}for(h=n;++p<o.length;)o[p][0]==="exit"&&o[p-1][0]==="enter"&&o[p][1].type===o[p-1][1].type&&o[p][1].start.line!==o[p][1].end.line&&(b=p+1,S.push(b),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(a.events=[],h?(h._tokenizer=void 0,h.previous=void 0):S.pop(),p=S.length;p--;){const g=o.slice(S[p],S[p+1]),m=s.pop();l.push([m,m+g.length-1]),e.splice(m,2,g)}for(l.reverse(),p=-1;++p<l.length;)u[y+l[p][0]]=y+l[p][1],y+=l[p][1]-l[p][0]-1;return u}const A3={resolve:N3,tokenize:P3},I3={partial:!0,tokenize:j3};function N3(e){return c2(e),e}function P3(e,t){let n;return r;function r(o){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(o)}function i(o){return o===null?s(o):Z(o)?e.check(I3,a,s)(o):(e.consume(o),i)}function s(o){return e.exit("chunkContent"),e.exit("content"),t(o)}function a(o){return e.consume(o),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function j3(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),fe(e,s,"linePrefix")}function s(a){if(a===null||Z(a))return n(a);const o=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&o&&o[1].type==="linePrefix"&&o[2].sliceSerialize(o[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function d2(e,t,n,r,i,s,a,o,l){const u=l||Number.POSITIVE_INFINITY;let d=0;return f;function f(g){return g===60?(e.enter(r),e.enter(i),e.enter(s),e.consume(g),e.exit(s),p):g===null||g===32||g===41||Xl(g)?n(g):(e.enter(r),e.enter(a),e.enter(o),e.enter("chunkString",{contentType:"string"}),b(g))}function p(g){return g===62?(e.enter(s),e.consume(g),e.exit(s),e.exit(i),e.exit(r),t):(e.enter(o),e.enter("chunkString",{contentType:"string"}),h(g))}function h(g){return g===62?(e.exit("chunkString"),e.exit(o),p(g)):g===null||g===60||Z(g)?n(g):(e.consume(g),g===92?y:h)}function y(g){return g===60||g===62||g===92?(e.consume(g),h):h(g)}function b(g){return!d&&(g===null||g===41||ve(g))?(e.exit("chunkString"),e.exit(o),e.exit(a),e.exit(r),t(g)):d<u&&g===40?(e.consume(g),d++,b):g===41?(e.consume(g),d--,b):g===null||g===32||g===40||Xl(g)?n(g):(e.consume(g),g===92?S:b)}function S(g){return g===40||g===41||g===92?(e.consume(g),b):b(g)}}function f2(e,t,n,r,i,s){const a=this;let o=0,l;return u;function u(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(s),d}function d(h){return o>999||h===null||h===91||h===93&&!l||h===94&&!o&&"_hiddenFootnoteSupport"in a.parser.constructs?n(h):h===93?(e.exit(s),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):Z(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),f(h))}function f(h){return h===null||h===91||h===93||Z(h)||o++>999?(e.exit("chunkString"),d(h)):(e.consume(h),l||(l=!ae(h)),h===92?p:f)}function p(h){return h===91||h===92||h===93?(e.consume(h),o++,f):f(h)}}function p2(e,t,n,r,i,s){let a;return o;function o(p){return p===34||p===39||p===40?(e.enter(r),e.enter(i),e.consume(p),e.exit(i),a=p===40?41:p,l):n(p)}function l(p){return p===a?(e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):(e.enter(s),u(p))}function u(p){return p===a?(e.exit(s),l(a)):p===null?n(p):Z(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),fe(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(p))}function d(p){return p===a||p===null||Z(p)?(e.exit("chunkString"),u(p)):(e.consume(p),p===92?f:d)}function f(p){return p===a||p===92?(e.consume(p),d):d(p)}}function aa(e,t){let n;return r;function r(i){return Z(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):ae(i)?fe(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const R3={name:"definition",tokenize:D3},L3={partial:!0,tokenize:M3};function D3(e,t,n){const r=this;let i;return s;function s(h){return e.enter("definition"),a(h)}function a(h){return f2.call(r,e,o,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function o(h){return i=ln(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),l):n(h)}function l(h){return ve(h)?aa(e,u)(h):u(h)}function u(h){return d2(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function d(h){return e.attempt(L3,f,f)(h)}function f(h){return ae(h)?fe(e,p,"whitespace")(h):p(h)}function p(h){return h===null||Z(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function M3(e,t,n){return r;function r(o){return ve(o)?aa(e,i)(o):n(o)}function i(o){return p2(e,s,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(o)}function s(o){return ae(o)?fe(e,a,"whitespace")(o):a(o)}function a(o){return o===null||Z(o)?t(o):n(o)}}const F3={name:"hardBreakEscape",tokenize:O3};function O3(e,t,n){return r;function r(s){return e.enter("hardBreakEscape"),e.consume(s),i}function i(s){return Z(s)?(e.exit("hardBreakEscape"),t(s)):n(s)}}const z3={name:"headingAtx",resolve:U3,tokenize:B3};function U3(e,t){let n=e.length-2,r=3;if(e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r){const i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},s={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"};on(e,r,n-r+1,[["enter",i,t],["enter",s,t],["exit",s,t],["exit",i,t]])}return e}function B3(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),s(d)}function s(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||ve(d)?(e.exit("atxHeadingSequence"),o(d)):n(d)}function o(d){return d===35?(e.enter("atxHeadingSequence"),l(d)):d===null||Z(d)?(e.exit("atxHeading"),t(d)):ae(d)?fe(e,o,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function l(d){return d===35?(e.consume(d),l):(e.exit("atxHeadingSequence"),o(d))}function u(d){return d===null||d===35||ve(d)?(e.exit("atxHeadingText"),o(d)):(e.consume(d),u)}}const V3=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Mx=["pre","script","style","textarea"],$3={concrete:!0,name:"htmlFlow",resolveTo:W3,tokenize:G3},H3={partial:!0,tokenize:q3};function W3(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function G3(e,t,n){const r=this;let i,s,a,o,l;return u;function u(A){return d(A)}function d(A){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(A),f}function f(A){return A===33?(e.consume(A),p):A===47?(e.consume(A),s=!0,b):A===63?(e.consume(A),i=3,r.interrupt?t:k):ft(A)?(e.consume(A),a=String.fromCharCode(A),S):n(A)}function p(A){return A===45?(e.consume(A),i=2,h):A===91?(e.consume(A),i=5,o=0,y):ft(A)?(e.consume(A),i=4,r.interrupt?t:k):n(A)}function h(A){return A===45?(e.consume(A),r.interrupt?t:k):n(A)}function y(A){const se="CDATA[";return A===se.charCodeAt(o++)?(e.consume(A),o===se.length?r.interrupt?t:U:y):n(A)}function b(A){return ft(A)?(e.consume(A),a=String.fromCharCode(A),S):n(A)}function S(A){if(A===null||A===47||A===62||ve(A)){const se=A===47,be=a.toLowerCase();return!se&&!s&&Mx.includes(be)?(i=1,r.interrupt?t(A):U(A)):V3.includes(a.toLowerCase())?(i=6,se?(e.consume(A),g):r.interrupt?t(A):U(A)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(A):s?m(A):x(A))}return A===45||ot(A)?(e.consume(A),a+=String.fromCharCode(A),S):n(A)}function g(A){return A===62?(e.consume(A),r.interrupt?t:U):n(A)}function m(A){return ae(A)?(e.consume(A),m):_(A)}function x(A){return A===47?(e.consume(A),_):A===58||A===95||ft(A)?(e.consume(A),v):ae(A)?(e.consume(A),x):_(A)}function v(A){return A===45||A===46||A===58||A===95||ot(A)?(e.consume(A),v):E(A)}function E(A){return A===61?(e.consume(A),w):ae(A)?(e.consume(A),E):x(A)}function w(A){return A===null||A===60||A===61||A===62||A===96?n(A):A===34||A===39?(e.consume(A),l=A,I):ae(A)?(e.consume(A),w):P(A)}function I(A){return A===l?(e.consume(A),l=null,R):A===null||Z(A)?n(A):(e.consume(A),I)}function P(A){return A===null||A===34||A===39||A===47||A===60||A===61||A===62||A===96||ve(A)?E(A):(e.consume(A),P)}function R(A){return A===47||A===62||ae(A)?x(A):n(A)}function _(A){return A===62?(e.consume(A),j):n(A)}function j(A){return A===null||Z(A)?U(A):ae(A)?(e.consume(A),j):n(A)}function U(A){return A===45&&i===2?(e.consume(A),ue):A===60&&i===1?(e.consume(A),Y):A===62&&i===4?(e.consume(A),X):A===63&&i===3?(e.consume(A),k):A===93&&i===5?(e.consume(A),V):Z(A)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(H3,ee,q)(A)):A===null||Z(A)?(e.exit("htmlFlowData"),q(A)):(e.consume(A),U)}function q(A){return e.check(Nf,Q,ee)(A)}function Q(A){return e.enter("lineEnding"),e.consume(A),e.exit("lineEnding"),H}function H(A){return A===null||Z(A)?q(A):(e.enter("htmlFlowData"),U(A))}function ue(A){return A===45?(e.consume(A),k):U(A)}function Y(A){return A===47?(e.consume(A),a="",L):U(A)}function L(A){if(A===62){const se=a.toLowerCase();return Mx.includes(se)?(e.consume(A),X):U(A)}return ft(A)&&a.length<8?(e.consume(A),a+=String.fromCharCode(A),L):U(A)}function V(A){return A===93?(e.consume(A),k):U(A)}function k(A){return A===62?(e.consume(A),X):A===45&&i===2?(e.consume(A),k):U(A)}function X(A){return A===null||Z(A)?(e.exit("htmlFlowData"),ee(A)):(e.consume(A),X)}function ee(A){return e.exit("htmlFlow"),t(A)}}function q3(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(io,t,n)}}const K3={name:"htmlText",tokenize:Y3};function Y3(e,t,n){const r=this;let i,s,a;return o;function o(k){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(k),l}function l(k){return k===33?(e.consume(k),u):k===47?(e.consume(k),E):k===63?(e.consume(k),x):ft(k)?(e.consume(k),P):n(k)}function u(k){return k===45?(e.consume(k),d):k===91?(e.consume(k),s=0,y):ft(k)?(e.consume(k),m):n(k)}function d(k){return k===45?(e.consume(k),h):n(k)}function f(k){return k===null?n(k):k===45?(e.consume(k),p):Z(k)?(a=f,Y(k)):(e.consume(k),f)}function p(k){return k===45?(e.consume(k),h):f(k)}function h(k){return k===62?ue(k):k===45?p(k):f(k)}function y(k){const X="CDATA[";return k===X.charCodeAt(s++)?(e.consume(k),s===X.length?b:y):n(k)}function b(k){return k===null?n(k):k===93?(e.consume(k),S):Z(k)?(a=b,Y(k)):(e.consume(k),b)}function S(k){return k===93?(e.consume(k),g):b(k)}function g(k){return k===62?ue(k):k===93?(e.consume(k),g):b(k)}function m(k){return k===null||k===62?ue(k):Z(k)?(a=m,Y(k)):(e.consume(k),m)}function x(k){return k===null?n(k):k===63?(e.consume(k),v):Z(k)?(a=x,Y(k)):(e.consume(k),x)}function v(k){return k===62?ue(k):x(k)}function E(k){return ft(k)?(e.consume(k),w):n(k)}function w(k){return k===45||ot(k)?(e.consume(k),w):I(k)}function I(k){return Z(k)?(a=I,Y(k)):ae(k)?(e.consume(k),I):ue(k)}function P(k){return k===45||ot(k)?(e.consume(k),P):k===47||k===62||ve(k)?R(k):n(k)}function R(k){return k===47?(e.consume(k),ue):k===58||k===95||ft(k)?(e.consume(k),_):Z(k)?(a=R,Y(k)):ae(k)?(e.consume(k),R):ue(k)}function _(k){return k===45||k===46||k===58||k===95||ot(k)?(e.consume(k),_):j(k)}function j(k){return k===61?(e.consume(k),U):Z(k)?(a=j,Y(k)):ae(k)?(e.consume(k),j):R(k)}function U(k){return k===null||k===60||k===61||k===62||k===96?n(k):k===34||k===39?(e.consume(k),i=k,q):Z(k)?(a=U,Y(k)):ae(k)?(e.consume(k),U):(e.consume(k),Q)}function q(k){return k===i?(e.consume(k),i=void 0,H):k===null?n(k):Z(k)?(a=q,Y(k)):(e.consume(k),q)}function Q(k){return k===null||k===34||k===39||k===60||k===61||k===96?n(k):k===47||k===62||ve(k)?R(k):(e.consume(k),Q)}function H(k){return k===47||k===62||ve(k)?R(k):n(k)}function ue(k){return k===62?(e.consume(k),e.exit("htmlTextData"),e.exit("htmlText"),t):n(k)}function Y(k){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),L}function L(k){return ae(k)?fe(e,V,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(k):V(k)}function V(k){return e.enter("htmlTextData"),a(k)}}const Kh={name:"labelEnd",resolveAll:J3,resolveTo:eM,tokenize:tM},X3={tokenize:nM},Q3={tokenize:rM},Z3={tokenize:iM};function J3(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&on(e,0,e.length,n),e}function eM(e,t){let n=e.length,r=0,i,s,a;for(;n--;){const d=e[n][1];if(i){if(d.type==="link"||d.type==="labelLink"&&d._inactive)break;e[n][0]==="enter"&&d.type==="labelLink"&&(d._inactive=!0)}else if(s){if(e[n][0]==="enter"&&(d.type==="labelImage"||d.type==="labelLink")&&!d._balanced&&(i=n,d.type!=="labelLink")){r=2;break}}else d.type==="labelEnd"&&(s=n)}const o={type:e[i][1].type==="labelLink"?"link":"image",start:{...e[i][1].start},end:{...e[e.length-1][1].end}},l={type:"label",start:{...e[i][1].start},end:{...e[s][1].end}},u={type:"labelText",start:{...e[i+r+2][1].end},end:{...e[s-2][1].start}};return a=[["enter",o,t],["enter",l,t]],a=$t(a,e.slice(i+1,i+r+3)),a=$t(a,[["enter",u,t]]),a=$t(a,Lu(t.parser.constructs.insideSpan.null,e.slice(i+r+4,s-3),t)),a=$t(a,[["exit",u,t],e[s-2],e[s-1],["exit",l,t]]),a=$t(a,e.slice(s+1)),a=$t(a,[["exit",o,t]]),on(e,i,e.length,a),e}function tM(e,t,n){const r=this,i=r._labelStarts;let s,a;if(i){for(;i.length>0&&i[i.length-1]._balanced;)i.pop();s=i[i.length-1]}return o;function o(p){return s?s._inactive?f(p):(a=r.parser.defined.includes(ln(r.sliceSerialize({start:s.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),l):n(p)}function l(p){return p===40?e.attempt(X3,d,a?d:f)(p):p===91?e.attempt(Q3,d,a?u:f)(p):a?d(p):f(p)}function u(p){return e.attempt(Z3,d,f)(p)}function d(p){return i.pop(),t(p)}function f(p){return s._balanced=!0,n(p)}}function nM(e,t,n){return r;function r(f){return e.enter("resource"),e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),i}function i(f){return ve(f)?aa(e,s)(f):s(f)}function s(f){return f===41?d(f):d2(e,a,o,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function a(f){return ve(f)?aa(e,l)(f):d(f)}function o(f){return n(f)}function l(f){return f===34||f===39||f===40?p2(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):d(f)}function u(f){return ve(f)?aa(e,d)(f):d(f)}function d(f){return f===41?(e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),e.exit("resource"),t):n(f)}}function rM(e,t,n){const r=this;return i;function i(o){return f2.call(r,e,s,a,"reference","referenceMarker","referenceString")(o)}function s(o){return r.parser.defined.includes(ln(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(o):n(o)}function a(o){return n(o)}}function iM(e,t,n){return r;function r(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),i}function i(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),t):n(s)}}const sM={name:"labelStartImage",resolveAll:Kh.resolveAll,tokenize:aM};function aM(e,t,n){const r=this;let i;return s;function s(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),a}function a(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),i=e.exit("labelImage"),o):n(l)}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),t(l))}}const oM={name:"labelStartLink",resolveAll:Kh.resolveAll,tokenize:lM};function lM(e,t,n){const r=this;let i;return s;function s(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),i=e.exit("labelLink"),a}function a(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),t(o))}}const zc={name:"lineEnding",tokenize:uM};function uM(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),fe(e,t,"linePrefix")}}const al={name:"thematicBreak",tokenize:cM};function cM(e,t,n){let r=0,i;return s;function s(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,o(u)}function o(u){return u===i?(e.enter("thematicBreakSequence"),l(u)):r>=3&&(u===null||Z(u))?(e.exit("thematicBreak"),t(u)):n(u)}function l(u){return u===i?(e.consume(u),r++,l):(e.exit("thematicBreakSequence"),ae(u)?fe(e,o,"whitespace")(u):o(u))}}const xt={continuation:{tokenize:hM},exit:gM,name:"list",tokenize:pM},dM={partial:!0,tokenize:yM},fM={partial:!0,tokenize:mM};function pM(e,t,n){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return o;function o(h){const y=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(y==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:Af(h)){if(r.containerState.type||(r.containerState.type=y,e.enter(y,{_container:!0})),y==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(al,n,u)(h):u(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(h)}return n(h)}function l(h){return Af(h)&&++a<10?(e.consume(h),l):(!r.interrupt||a<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),u(h)):n(h)}function u(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(io,r.interrupt?n:d,e.attempt(dM,p,f))}function d(h){return r.containerState.initialBlankLine=!0,s++,p(h)}function f(h){return ae(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),p):n(h)}function p(h){return r.containerState.size=s+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function hM(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(io,i,s);function i(o){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,fe(e,t,"listItemIndent",r.containerState.size+1)(o)}function s(o){return r.containerState.furtherBlankLines||!ae(o)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(o)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(fM,t,a)(o))}function a(o){return r.containerState._closeFlow=!0,r.interrupt=void 0,fe(e,e.attempt(xt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o)}}function mM(e,t,n){const r=this;return fe(e,i,"listItemIndent",r.containerState.size+1);function i(s){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(s):n(s)}}function gM(e){e.exit(this.containerState.type)}function yM(e,t,n){const r=this;return fe(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const a=r.events[r.events.length-1];return!ae(s)&&a&&a[1].type==="listItemPrefixWhitespace"?t(s):n(s)}}const Fx={name:"setextUnderline",resolveTo:xM,tokenize:vM};function xM(e,t){const n=new Ql;let r=e.length,i,s,a;for(;r--;)if(e[r][0]==="enter"){if(e[r][1].type==="content"){i=r;break}e[r][1].type==="paragraph"&&(s=r)}else e[r][1].type==="content"&&n.add(r,1,[]),!a&&e[r][1].type==="definition"&&(a=r);const o={type:"setextHeading",start:{...e[i][1].start},end:{...e[e.length-1][1].end}};return e[s][1].type="setextHeadingText",a?(n.add(s,0,[["enter",o,t]]),n.add(a+1,0,[["exit",e[i][1],t]]),e[i][1].end={...e[a][1].end}):e[i][1]=o,n.add(e.length,0,[["exit",o,t]]),n.consume(e),e}function vM(e,t,n){const r=this;let i;return s;function s(u){let d=r.events.length,f;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){f=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||f)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),o(u)}function o(u){return u===i?(e.consume(u),o):(e.exit("setextHeadingLineSequence"),ae(u)?fe(e,l,"lineSuffix")(u):l(u))}function l(u){return u===null||Z(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const bM={tokenize:wM};function wM(e){const t=this,n=e.attempt(io,r,e.attempt(this.parser.constructs.flowInitial,i,fe(e,e.attempt(this.parser.constructs.flow,i,e.attempt(A3,i)),"linePrefix")));return n;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const kM={resolveAll:m2()},SM=h2("string"),EM=h2("text");function h2(e){return{resolveAll:m2(e==="text"?CM:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],s=n.attempt(i,a,o);return a;function a(d){return u(d)?s(d):o(d)}function o(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),l}function l(d){return u(d)?(n.exit("data"),s(d)):(n.consume(d),l)}function u(d){if(d===null)return!0;const f=i[d];let p=-1;if(f)for(;++p<f.length;){const h=f[p];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function m2(e){return t;function t(n,r){let i=-1,s;for(;++i<=n.length;)s===void 0?n[i]&&n[i][1].type==="data"&&(s=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==s+2&&(n[s][1].end=n[i-1][1].end,n.splice(s+2,i-s-2),i=s+2),s=void 0);return e?e(n,r):n}}function CM(e,t){const n=new Ql;let r=0;for(;++r<=e.length;)if((r===e.length||e[r][1].type==="lineEnding")&&e[r-1][1].type==="data"){const i=e[r-1][1],s=t.sliceStream(i);let a=s.length,o=-1,l=0,u;for(;a--;){const d=s[a];if(typeof d=="string"){for(o=d.length;d.charCodeAt(o-1)===32;)l++,o--;if(o)break;o=-1}else if(d===-2)u=!0,l++;else if(d!==-1){a++;break}}if(t._contentTypeTextTrailing&&r===e.length&&(l=0),l){const d={type:r===e.length||u||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?o:i.start._bufferIndex+o,_index:i.start._index+a,line:i.end.line,column:i.end.column-l,offset:i.end.offset-l},end:{...i.end}};i.end={...d.start},i.start.offset===i.end.offset?Object.assign(i,d):n.add(r,0,[["enter",d,t],["exit",d,t]])}r++}return n.consume(e),e}const TM={42:xt,43:xt,45:xt,48:xt,49:xt,50:xt,51:xt,52:xt,53:xt,54:xt,55:xt,56:xt,57:xt,62:o2},_M={91:R3},AM={[-2]:Oc,[-1]:Oc,32:Oc},IM={35:z3,42:al,45:[Fx,al],60:$3,61:Fx,95:al,96:Dx,126:Dx},NM={38:u2,92:l2},PM={[-5]:zc,[-4]:zc,[-3]:zc,33:sM,38:u2,42:If,60:[u3,K3],91:oM,92:[F3,l2],93:Kh,95:If,96:k3},jM={null:[If,kM]},RM={null:[42,95]},LM={null:[]},DM=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:RM,contentInitial:_M,disable:LM,document:TM,flow:IM,flowInitial:AM,insideSpan:jM,string:NM,text:PM},Symbol.toStringTag,{value:"Module"}));function MM(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},s=[];let a=[],o=[];const l={attempt:I(E),check:I(w),consume:m,enter:x,exit:v,interrupt:I(w,{interrupt:!0})},u={code:null,containerState:{},defineSkip:b,events:[],now:y,parser:e,previous:null,sliceSerialize:p,sliceStream:h,write:f};let d=t.tokenize.call(u,l);return t.resolveAll&&s.push(t),u;function f(j){return a=$t(a,j),S(),a[a.length-1]!==null?[]:(P(t,0),u.events=Lu(s,u.events,u),u.events)}function p(j,U){return OM(h(j),U)}function h(j){return FM(a,j)}function y(){const{_bufferIndex:j,_index:U,line:q,column:Q,offset:H}=r;return{_bufferIndex:j,_index:U,line:q,column:Q,offset:H}}function b(j){i[j.line]=j.column,_()}function S(){for(;r._index<a.length;){const j=a[r._index];if(typeof j=="string"){const U=r._index;for(r._bufferIndex<0&&(r._bufferIndex=0);r._index===U&&r._bufferIndex<j.length;)g(j.charCodeAt(r._bufferIndex))}else g(j)}}function g(j){d=d(j)}function m(j){Z(j)?(r.line++,r.column=1,r.offset+=j===-3?2:1,_()):j!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=j}function x(j,U){const q=U||{};return q.type=j,q.start=y(),u.events.push(["enter",q,u]),o.push(q),q}function v(j){const U=o.pop();return U.end=y(),u.events.push(["exit",U,u]),U}function E(j,U){P(j,U.from)}function w(j,U){U.restore()}function I(j,U){return q;function q(Q,H,ue){let Y,L,V,k;return Array.isArray(Q)?ee(Q):"tokenize"in Q?ee([Q]):X(Q);function X(ie){return Ce;function Ce(Me){const Ke=Me!==null&&ie[Me],Ve=Me!==null&&ie.null,et=[...Array.isArray(Ke)?Ke:Ke?[Ke]:[],...Array.isArray(Ve)?Ve:Ve?[Ve]:[]];return ee(et)(Me)}}function ee(ie){return Y=ie,L=0,ie.length===0?ue:A(ie[L])}function A(ie){return Ce;function Ce(Me){return k=R(),V=ie,ie.partial||(u.currentConstruct=ie),ie.name&&u.parser.constructs.disable.null.includes(ie.name)?be():ie.tokenize.call(U?Object.assign(Object.create(u),U):u,l,se,be)(Me)}}function se(ie){return j(V,k),H}function be(ie){return k.restore(),++L<Y.length?A(Y[L]):ue}}}function P(j,U){j.resolveAll&&!s.includes(j)&&s.push(j),j.resolve&&on(u.events,U,u.events.length-U,j.resolve(u.events.slice(U),u)),j.resolveTo&&(u.events=j.resolveTo(u.events,u))}function R(){const j=y(),U=u.previous,q=u.currentConstruct,Q=u.events.length,H=Array.from(o);return{from:Q,restore:ue};function ue(){r=j,u.previous=U,u.currentConstruct=q,u.events.length=Q,o=H,_()}}function _(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function FM(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,s=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,s)];else{if(a=e.slice(n,i),r>-1){const o=a[0];typeof o=="string"?a[0]=o.slice(r):a.shift()}s>0&&a.push(e[i].slice(0,s))}return a}function OM(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const s=e[n];let a;if(typeof s=="string")a=s;else switch(s){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(s)}i=s===-2,r.push(a)}return r.join("")}function zM(e){const r={constructs:i2([DM,...(e||{}).extensions||[]]),content:i(n3),defined:[],document:i(i3),flow:i(bM),lazy:{},string:i(SM),text:i(EM)};return r;function i(s){return a;function a(o){return MM(r,s,o)}}}function UM(e){for(;!c2(e););return e}const Ox=/[\0\t\n\r]/g;function BM(){let e=1,t="",n=!0,r;return i;function i(s,a,o){s=t+(typeof s=="string"?s.toString():new TextDecoder(a||void 0).decode(s));const l=[];let u=0;for(t="",n&&(s.charCodeAt(0)===65279&&u++,n=void 0);u<s.length;){Ox.lastIndex=u;const d=Ox.exec(s),f=d&&d.index!==void 0?d.index:s.length,p=s.charCodeAt(f);if(!d){t=s.slice(u);break}if(p===10&&u===f&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),u<f&&(l.push(s.slice(u,f)),e+=f-u),p){case 0:{l.push(65533),e++;break}case 9:{const h=Math.ceil(e/4)*4;for(l.push(-2);e++<h;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:r=!0,e=1}u=f+1}return o&&(r&&l.push(-5),t&&l.push(t),l.push(null)),l}}const VM=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function $M(e){return e.replace(VM,HM)}function HM(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),s=i===120||i===88;return s2(n.slice(s?2:1),s?16:10)}return qh(n)||e}const g2={}.hasOwnProperty;function WM(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),GM(n)(UM(zM(n).document().write(BM()(e,t,!0))))}function GM(e){const t={afterExit:[],beforeEnter:[],transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(de),autolinkProtocol:_,autolinkEmail:_,atxHeading:a(ge),blockQuote:a(et),characterEscape:_,characterReference:_,codeFenced:a(Ye),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(Ye,o),codeText:a(me,o),codeTextData:_,data:_,codeFlowValue:_,definition:a(Ft),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(Tn),hardBreakEscape:a(_n),hardBreakTrailing:a(_n),htmlFlow:a(fn,o),htmlFlowData:_,htmlText:a(fn,o),htmlTextData:_,image:a(D),label:o,link:a(de),listItem:a(pe),listItemValue:h,listOrdered:a(ne,p),listUnordered:a(ne),paragraph:a(yt),reference:se,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(ge),strong:a(An),thematicBreak:a(M)},exit:{atxHeading:u(),atxHeadingSequence:w,autolink:u(),autolinkEmail:Ve,autolinkProtocol:Ke,blockQuote:u(),characterEscapeValue:j,characterReferenceMarkerHexadecimal:ie,characterReferenceMarkerNumeric:ie,characterReferenceValue:Ce,characterReference:Me,codeFenced:u(g),codeFencedFence:S,codeFencedFenceInfo:y,codeFencedFenceMeta:b,codeFlowValue:j,codeIndented:u(m),codeText:u(ue),codeTextData:j,data:j,definition:u(),definitionDestinationString:E,definitionLabelString:x,definitionTitleString:v,emphasis:u(),hardBreakEscape:u(q),hardBreakTrailing:u(q),htmlFlow:u(Q),htmlFlowData:j,htmlText:u(H),htmlTextData:j,image:u(L),label:k,labelText:V,lineEnding:U,link:u(Y),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:be,resourceDestinationString:X,resourceTitleString:ee,resource:A,setextHeading:u(R),setextHeadingLineSequence:P,setextHeadingText:I,strong:u(),thematicBreak:u()}};y2(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(N){let T={type:"root",children:[],position:void 0};const z={stack:[T],tokenStack:[],config:t,enter:l,exit:d,buffer:o,resume:f,data:n},B=[],$=[];let G=-1;for(;++G<N.length;)if($.push(N[G]),N[G][1].type==="listOrdered"||N[G][1].type==="listUnordered")if(N[G][0]==="enter")B.push($.length-1);else{const oe=B.pop();s($,oe)}for(N=$,G=-1;++G<N.length;){const oe=t[N[G][0]];N[G][0]==="enter"&&t.beforeEnter.length>0&&i(t.beforeEnter,{...z,sliceSerialize:N[G][2].sliceSerialize},N[G][1]),g2.call(oe,N[G][1].type)&&oe[N[G][1].type].call({...z,sliceSerialize:N[G][2].sliceSerialize},N[G][1]),N[G][0]==="exit"&&t.afterExit.length>0&&i(t.afterExit,{...z,sliceSerialize:N[G][2].sliceSerialize},N[G][1])}if(z.tokenStack.length>0){const oe=z.tokenStack[z.tokenStack.length-1];(oe[1]||zx).call(z,void 0,oe[0])}for(T.position={start:tr(N.length>0?N[0][1].start:{line:1,column:1,offset:0}),end:tr(N.length>0?N[N.length-2][1].end:{line:1,column:1,offset:0})},G=-1;++G<t.transforms.length;)T=t.transforms[G](T)||T;return T}function i(N,T,z){let B=-1;for(;++B<N.length;)N[B].call(T,z)}function s(N,T){const z=N.length-1;let B=T-1,$=-1,G=!1,oe,Fe,Ae,$e;const Re=[];for(;++B<=z;){const ct=N[B];switch(ct[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ct[0]==="enter"?$++:$--,$e=void 0;break}case"lineEndingBlank":{ct[0]==="enter"&&(oe&&!$e&&!$&&!Ae&&(Ae=B),$e=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:$e=void 0}if(!$&&ct[0]==="enter"&&ct[1].type==="listItemPrefix"||$===-1&&ct[0]==="exit"&&(ct[1].type==="listUnordered"||ct[1].type==="listOrdered")){if(oe){let gi=B;for(Fe=void 0;gi--;){const In=N[gi];if(In[1].type==="lineEnding"||In[1].type==="lineEndingBlank"){if(In[0]==="exit")continue;Fe&&(N[Fe][1].type="lineEndingBlank",G=!0),In[1].type="lineEnding",Fe=gi}else if(!(In[1].type==="linePrefix"||In[1].type==="blockQuotePrefix"||In[1].type==="blockQuotePrefixWhitespace"||In[1].type==="blockQuoteMarker"||In[1].type==="listItemIndent"))break}Ae&&(!Fe||Ae<Fe)&&(oe._spread=!0),oe.end=Object.assign({},Fe?N[Fe][1].start:ct[1].end),Re.push({at:Fe||B,event:["exit",oe,ct[2]]})}if(ct[1].type==="listItemPrefix"){const gi={type:"listItem",_spread:!1,start:Object.assign({},ct[1].start),end:void 0};oe=gi,Re.push({at:B,event:["enter",gi,ct[2]]}),Ae=void 0,$e=!0}}}const Lr=N.splice(T);let Dr=0;for(B=-1;++B<Lr.length;){for(;Dr<Re.length&&Re[Dr].at===T+B;)N.push(Re[Dr++].event);N.push(Lr[B])}N[T][1]._spread=G}function a(N,T){return z;function z(B){l.call(this,N(B),B),T&&T.call(this,B)}}function o(){this.stack.push({type:"fragment",children:[]})}function l(N,T,z){this.stack[this.stack.length-1].children.push(N),this.stack.push(N),this.tokenStack.push([T,z||void 0]),N.position={start:tr(T.start),end:void 0}}function u(N){return T;function T(z){N&&N.call(this,z),d.call(this,z)}}function d(N,T){const z=this.stack.pop(),B=this.tokenStack.pop();if(!B)throw new Error("Cannot close `"+N.type+"` ("+sa({start:N.start,end:N.end})+"): it’s not open");B[0].type!==N.type&&(T?T.call(this,N,B[0]):(B[1]||zx).call(this,N,B[0])),z.position.end=tr(N.end)}function f(){return Gh(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function h(N){if(this.data.expectingFirstListItemValue){const T=this.stack[this.stack.length-2];T.start=Number.parseInt(this.sliceSerialize(N),10),this.data.expectingFirstListItemValue=void 0}}function y(){const N=this.resume(),T=this.stack[this.stack.length-1];T.lang=N}function b(){const N=this.resume(),T=this.stack[this.stack.length-1];T.meta=N}function S(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function g(){const N=this.resume(),T=this.stack[this.stack.length-1];T.value=N.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function m(){const N=this.resume(),T=this.stack[this.stack.length-1];T.value=N.replace(/(\r?\n|\r)$/g,"")}function x(N){const T=this.resume(),z=this.stack[this.stack.length-1];z.label=T,z.identifier=ln(this.sliceSerialize(N)).toLowerCase()}function v(){const N=this.resume(),T=this.stack[this.stack.length-1];T.title=N}function E(){const N=this.resume(),T=this.stack[this.stack.length-1];T.url=N}function w(N){const T=this.stack[this.stack.length-1];if(!T.depth){const z=this.sliceSerialize(N).length;T.depth=z}}function I(){this.data.setextHeadingSlurpLineEnding=!0}function P(N){const T=this.stack[this.stack.length-1];T.depth=this.sliceSerialize(N).codePointAt(0)===61?1:2}function R(){this.data.setextHeadingSlurpLineEnding=void 0}function _(N){const z=this.stack[this.stack.length-1].children;let B=z[z.length-1];(!B||B.type!=="text")&&(B=Ot(),B.position={start:tr(N.start),end:void 0},z.push(B)),this.stack.push(B)}function j(N){const T=this.stack.pop();T.value+=this.sliceSerialize(N),T.position.end=tr(N.end)}function U(N){const T=this.stack[this.stack.length-1];if(this.data.atHardBreak){const z=T.children[T.children.length-1];z.position.end=tr(N.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(T.type)&&(_.call(this,N),j.call(this,N))}function q(){this.data.atHardBreak=!0}function Q(){const N=this.resume(),T=this.stack[this.stack.length-1];T.value=N}function H(){const N=this.resume(),T=this.stack[this.stack.length-1];T.value=N}function ue(){const N=this.resume(),T=this.stack[this.stack.length-1];T.value=N}function Y(){const N=this.stack[this.stack.length-1];if(this.data.inReference){const T=this.data.referenceType||"shortcut";N.type+="Reference",N.referenceType=T,delete N.url,delete N.title}else delete N.identifier,delete N.label;this.data.referenceType=void 0}function L(){const N=this.stack[this.stack.length-1];if(this.data.inReference){const T=this.data.referenceType||"shortcut";N.type+="Reference",N.referenceType=T,delete N.url,delete N.title}else delete N.identifier,delete N.label;this.data.referenceType=void 0}function V(N){const T=this.sliceSerialize(N),z=this.stack[this.stack.length-2];z.label=$M(T),z.identifier=ln(T).toLowerCase()}function k(){const N=this.stack[this.stack.length-1],T=this.resume(),z=this.stack[this.stack.length-1];if(this.data.inReference=!0,z.type==="link"){const B=N.children;z.children=B}else z.alt=T}function X(){const N=this.resume(),T=this.stack[this.stack.length-1];T.url=N}function ee(){const N=this.resume(),T=this.stack[this.stack.length-1];T.title=N}function A(){this.data.inReference=void 0}function se(){this.data.referenceType="collapsed"}function be(N){const T=this.resume(),z=this.stack[this.stack.length-1];z.label=T,z.identifier=ln(this.sliceSerialize(N)).toLowerCase(),this.data.referenceType="full"}function ie(N){this.data.characterReferenceType=N.type}function Ce(N){const T=this.sliceSerialize(N),z=this.data.characterReferenceType;let B;z?(B=s2(T,z==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):B=qh(T);const $=this.stack[this.stack.length-1];$.value+=B}function Me(N){const T=this.stack.pop();T.position.end=tr(N.end)}function Ke(N){j.call(this,N);const T=this.stack[this.stack.length-1];T.url=this.sliceSerialize(N)}function Ve(N){j.call(this,N);const T=this.stack[this.stack.length-1];T.url="mailto:"+this.sliceSerialize(N)}function et(){return{type:"blockquote",children:[],position:void 0}}function Ye(){return{type:"code",lang:null,meta:null,value:"",position:void 0}}function me(){return{type:"inlineCode",value:"",position:void 0}}function Ft(){return{type:"definition",identifier:"",label:null,title:null,url:"",position:void 0}}function Tn(){return{type:"emphasis",children:[],position:void 0}}function ge(){return{type:"heading",depth:0,children:[],position:void 0}}function _n(){return{type:"break",position:void 0}}function fn(){return{type:"html",value:"",position:void 0}}function D(){return{type:"image",title:null,url:"",alt:null,position:void 0}}function de(){return{type:"link",title:null,url:"",children:[],position:void 0}}function ne(N){return{type:"list",ordered:N.type==="listOrdered",start:null,spread:N._spread,children:[],position:void 0}}function pe(N){return{type:"listItem",spread:N._spread,checked:null,children:[],position:void 0}}function yt(){return{type:"paragraph",children:[],position:void 0}}function An(){return{type:"strong",children:[],position:void 0}}function Ot(){return{type:"text",value:"",position:void 0}}function M(){return{type:"thematicBreak",position:void 0}}}function tr(e){return{line:e.line,column:e.column,offset:e.offset}}function y2(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?y2(e,r):qM(e,r)}}function qM(e,t){let n;for(n in t)if(g2.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"afterExit":case"beforeEnter":{const r=t[n];r&&e[n].push(r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function zx(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+sa({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+sa({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+sa({start:t.start,end:t.end})+") is still open")}function KM(e){const t=this;t.parser=n;function n(r){return WM(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function YM(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function XM(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function QM(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(s.data={meta:t.meta}),e.patch(t,s),s=e.applyData(t,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(t,s),s}function ZM(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function JM(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function eF(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=ws(r.toLowerCase()),s=e.footnoteOrder.indexOf(r);let a,o=e.footnoteCounts.get(r);o===void 0?(o=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=s+1,o+=1,e.footnoteCounts.set(r,o);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(o>1?"-"+o:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,l);const u={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(t,u),e.applyData(t,u)}function tF(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function nF(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function x2(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function rF(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return x2(e,t);const i={src:ws(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,s),e.applyData(t,s)}function iF(e,t){const n={src:ws(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function sF(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function aF(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return x2(e,t);const i={href:ws(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function oF(e,t){const n={href:ws(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function lF(e,t,n){const r=e.all(t),i=n?uF(n):v2(t),s={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let f;d&&d.type==="element"&&d.tagName==="p"?f=d:(f={type:"element",tagName:"p",properties:{},children:[]},r.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let o=-1;for(;++o<r.length;){const d=r[o];(i||o!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const l=r[r.length-1];l&&(i||l.type!=="element"||l.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:s,children:a};return e.patch(t,u),e.applyData(t,u)}function uF(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=v2(n[r])}return t}function v2(e){const t=e.spread;return t??e.children.length>1}function cF(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const s={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,s),e.applyData(t,s)}function dF(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function fF(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function pF(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function hF(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},o=Vh(t.children[1]),l=Qk(t.children[t.children.length-1]);o&&l&&(a.position={start:o,end:l}),i.push(a)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,s),e.applyData(t,s)}function mF(e,t,n){const r=n?n.children:void 0,s=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,o=a?a.length:t.children.length;let l=-1;const u=[];for(;++l<o;){const f=t.children[l],p={},h=a?a[l]:void 0;h&&(p.align=h);let y={type:"element",tagName:s,properties:p,children:[]};f&&(y.children=e.all(f),e.patch(f,y),y=e.applyData(f,y)),u.push(y)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function gF(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Ux=9,Bx=32;function yF(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const s=[];for(;r;)s.push(Vx(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return s.push(Vx(t.slice(i),i>0,!1)),s.join("")}function Vx(e,t,n){let r=0,i=e.length;if(t){let s=e.codePointAt(r);for(;s===Ux||s===Bx;)r++,s=e.codePointAt(r)}if(n){let s=e.codePointAt(i-1);for(;s===Ux||s===Bx;)i--,s=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function xF(e,t){const n={type:"text",value:yF(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function vF(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const bF={blockquote:YM,break:XM,code:QM,delete:ZM,emphasis:JM,footnoteReference:eF,heading:tF,html:nF,imageReference:rF,image:iF,inlineCode:sF,linkReference:aF,link:oF,listItem:lF,list:cF,paragraph:dF,root:fF,strong:pF,table:hF,tableCell:gF,tableRow:mF,text:xF,thematicBreak:vF,toml:jo,yaml:jo,definition:jo,footnoteDefinition:jo};function jo(){}const b2=-1,Du=0,oa=1,Jl=2,Yh=3,Xh=4,Qh=5,Zh=6,w2=7,k2=8,{defineProperty:wF}=Object,S2=typeof self=="object"?self:globalThis,$x=(e,t)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new S2[e](t)},kF=(e,t)=>{const n=(i,s)=>(e.set(s,i),i),r=i=>{if(e.has(i))return e.get(i);const[s,a]=t[i];switch(s){case Du:case b2:return n(a,i);case oa:{const o=n([],i);for(const l of a)o.push(r(l));return o}case Jl:{const o=n({},i);for(const[l,u]of a){const d=r(l),f=r(u);d==="__proto__"?wF(o,d,{value:f,configurable:!0,enumerable:!0,writable:!0}):o[d]=f}return o}case Yh:return n(new Date(a),i);case Xh:{const{source:o,flags:l}=a;return n(new RegExp(o,l),i)}case Qh:{const o=n(new Map,i);for(const[l,u]of a)o.set(r(l),r(u));return o}case Zh:{const o=n(new Set,i);for(const l of a)o.add(r(l));return o}case w2:{const{name:o,message:l}=a;return n(typeof S2[o]=="function"?$x(o,l):new Error(l),i)}case k2:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:o}=new Uint8Array(a);return n(new DataView(o),a)}case"-0":return-0}return n($x(s,a),i)};return r},Hx=e=>kF(new Map,e)(0),Hr="",{toString:SF}={},{keys:EF,is:CF}=Object,Rs=e=>{const t=typeof e;if(t!=="object"||!e)return[Du,t];const n=SF.call(e).slice(8,-1);switch(n){case"Array":return[oa,Hr];case"Object":return[Jl,Hr];case"Date":return[Yh,Hr];case"RegExp":return[Xh,Hr];case"Map":return[Qh,Hr];case"Set":return[Zh,Hr];case"DataView":return[oa,n]}return n.includes("Array")?[oa,n]:e instanceof Error?[w2,e.name||"Error"]:[Jl,n]},Ro=([e,t])=>e===Du&&(t==="function"||t==="symbol"),TF=(e,t,n,r)=>{const i=(a,o)=>{const l=r.push(a)-1;return n.set(o,l),l},s=a=>{if(n.has(a))return n.get(a);let[o,l]=Rs(a);switch(o){case Du:{let d=a;switch(l){case"bigint":o=k2,d=a.toString();break;case"number":if(!a&&CF(a,-0))return r.push(["-0"])-1;break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);d=null;break;case"undefined":return i([b2],a)}return i([o,d],a)}case oa:{if(l){let p=a;return l==="DataView"?p=new Uint8Array(a.buffer):l==="ArrayBuffer"&&(p=new Uint8Array(a)),i([l,[...p]],a)}const d=[],f=i([o,d],a);for(const p of a)d.push(s(p));return f}case Jl:{if(l)switch(l){case"BigInt":return i([l,a.toString()],a);case"Boolean":case"Number":case"String":return i([l,a.valueOf()],a)}if(t&&"toJSON"in a)return s(a.toJSON());const d=[],f=i([o,d],a);for(const p of EF(a))(e||!Ro(Rs(a[p])))&&d.push([s(p),s(a[p])]);return f}case Yh:return i([o,isNaN(a.getTime())?Hr:a.toISOString()],a);case Xh:{const{source:d,flags:f}=a;return i([o,{source:d,flags:f}],a)}case Qh:{const d=[],f=i([o,d],a);for(const[p,h]of a)(e||!(Ro(Rs(p))||Ro(Rs(h))))&&d.push([s(p),s(h)]);return f}case Zh:{const d=[],f=i([o,d],a);for(const p of a)(e||!Ro(Rs(p)))&&d.push(s(p));return f}}const{message:u}=a;return i([o,{name:l,message:u}],a)};return s},Wx=(e,{json:t,lossy:n}={})=>{const r=[];return TF(!(t||n),!!t,new Map,r)(e),r},eu=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Hx(Wx(e,t)):structuredClone(e):(e,t)=>Hx(Wx(e,t));function _F(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function AF(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function IF(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||_F,r=e.options.footnoteBackLabel||AF,i=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},o=[];let l=-1;for(;++l<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[l]);if(!u)continue;const d=e.all(u),f=String(u.identifier).toUpperCase(),p=ws(f.toLowerCase());let h=0;const y=[],b=e.footnoteCounts.get(f);for(;b!==void 0&&++h<=b;){y.length>0&&y.push({type:"text",value:" "});let m=typeof n=="string"?n:n(l,h);typeof m=="string"&&(m={type:"text",value:m}),y.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+p+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(l,h),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const S=d[d.length-1];if(S&&S.type==="element"&&S.tagName==="p"){const m=S.children[S.children.length-1];m&&m.type==="text"?m.value+=" ":S.children.push({type:"text",value:" "}),S.children.push(...y)}else d.push(...y);const g={type:"element",tagName:"li",properties:{id:t+"fn-"+p},children:e.wrap(d,!0)};e.patch(u,g),o.push(g)}if(o.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...eu(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(o,!0)},{type:"text",value:`
`}]}}const Mu=function(e){if(e==null)return RF;if(typeof e=="function")return Fu(e);if(typeof e=="object")return Array.isArray(e)?NF(e):PF(e);if(typeof e=="string")return jF(e);throw new Error("Expected function, string, or object as test")};function NF(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Mu(e[n]);return Fu(r);function r(...i){let s=-1;for(;++s<t.length;)if(t[s].apply(this,i))return!0;return!1}}function PF(e){const t=e;return Fu(n);function n(r){const i=r;let s;for(s in e)if(i[s]!==t[s])return!1;return!0}}function jF(e){return Fu(t);function t(n){return n&&n.type===e}}function Fu(e){return t;function t(n,r,i){return!!(LF(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function RF(){return!0}function LF(e){return e!==null&&typeof e=="object"&&"type"in e}const E2=[],DF=!0,Pf=!1,MF="skip";function C2(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const s=Mu(i),a=r?-1:1;o(e,void 0,[])();function o(l,u,d){const f=l&&typeof l=="object"?l:{};if(typeof f.type=="string"){const h=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(l.type+(h?"<"+h+">":""))+")"})}return p;function p(){let h=E2,y,b,S;if((!t||s(l,u,d[d.length-1]||void 0))&&(h=FF(n(l,d)),h[0]===Pf))return h;if("children"in l&&l.children){const g=l;if(g.children&&h[0]!==MF)for(b=(r?g.children.length:-1)+a,S=d.concat(g);b>-1&&b<g.children.length;){const m=g.children[b];if(y=o(m,b,S)(),y[0]===Pf)return y;b=typeof y[1]=="number"?y[1]:b+a}}return h}}}function FF(e){return Array.isArray(e)?e:typeof e=="number"?[DF,e]:e==null?E2:[e]}function Jh(e,t,n,r){let i,s,a;typeof t=="function"&&typeof n!="function"?(s=void 0,a=t,i=n):(s=t,a=n,i=r),C2(e,s,o,i);function o(l,u){const d=u[u.length-1],f=d?d.children.indexOf(l):void 0;return a(l,f,d)}}const jf={}.hasOwnProperty,OF={};function zF(e,t){const n=t||OF,r=new Map,i=new Map,s=new Map,a={...bF,...n.handlers},o={all:u,applyData:BF,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:a,one:l,options:n,patch:UF,wrap:$F};return Jh(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const f=d.type==="definition"?r:i,p=String(d.identifier).toUpperCase();f.has(p)||f.set(p,d)}}),o;function l(d,f){const p=d.type,h=o.handlers[p];if(jf.call(o.handlers,p)&&h)return h(o,d,f);if(o.options.passThrough&&o.options.passThrough.includes(p)){if("children"in d){const{children:b,...S}=d,g=eu(S);return g.children=o.all(d),g}return eu(d)}return(o.options.unknownHandler||VF)(o,d,f)}function u(d){const f=[];if("children"in d){const p=d.children;let h=-1;for(;++h<p.length;){const y=o.one(p[h],d);if(y){if(h&&p[h-1].type==="break"&&(!Array.isArray(y)&&y.type==="text"&&(y.value=Gx(y.value)),!Array.isArray(y)&&y.type==="element")){const b=y.children[0];b&&b.type==="text"&&(b.value=Gx(b.value))}Array.isArray(y)?f.push(...y):f.push(y)}}}return f}}function UF(e,t){e.position&&(t.position=AD(e))}function BF(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,s=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&s&&Object.assign(n.properties,eu(s)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function VF(e,t){const n=t.data||{},r="value"in t&&!(jf.call(n,"hProperties")||jf.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function $F(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Gx(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function qx(e,t){const n=zF(e,t),r=n.one(e,void 0),i=IF(n),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function HF(e,t){return e&&"run"in e?async function(n,r){const i=qx(n,{file:r,...t});await e.run(i,r)}:function(n,r){return qx(n,{file:r,...e||t})}}function Kx(e){if(e)throw e}var ol=Object.prototype.hasOwnProperty,T2=Object.prototype.toString,Yx=Object.defineProperty,Xx=Object.getOwnPropertyDescriptor,Qx=function(t){return typeof Array.isArray=="function"?Array.isArray(t):T2.call(t)==="[object Array]"},Zx=function(t){if(!t||T2.call(t)!=="[object Object]")return!1;var n=ol.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&ol.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||ol.call(t,i)},Jx=function(t,n){Yx&&n.name==="__proto__"?Yx(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},e0=function(t,n){if(n==="__proto__")if(ol.call(t,n)){if(Xx)return Xx(t,n).value}else return;return t[n]},WF=function e(){var t,n,r,i,s,a,o=arguments[0],l=1,u=arguments.length,d=!1;for(typeof o=="boolean"&&(d=o,o=arguments[1]||{},l=2),(o==null||typeof o!="object"&&typeof o!="function")&&(o={});l<u;++l)if(t=arguments[l],t!=null)for(n in t)r=e0(o,n),i=e0(t,n),o!==i&&(d&&i&&(Zx(i)||(s=Qx(i)))?(s?(s=!1,a=r&&Qx(r)?r:[]):a=r&&Zx(r)?r:{},Jx(o,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&Jx(o,{name:n,newValue:i}));return o};const Uc=tu(WF);function Rf(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function GF(){const e=[],t={run:n,use:r};return t;function n(...i){let s=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);o(null,...i);function o(l,...u){const d=e[++s];let f=-1;if(l){a(l);return}for(;++f<i.length;)(u[f]===null||u[f]===void 0)&&(u[f]=i[f]);i=u,d?qF(d,o)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function qF(e,t){let n;return r;function r(...a){const o=e.length>a.length;let l;o&&a.push(i);try{l=e.apply(this,a)}catch(u){const d=u;if(o&&n)throw d;return i(d)}o||(l&&l.then&&typeof l.then=="function"?l.then(s,i):l instanceof Error?i(l):s(l))}function i(a,...o){n||(n=!0,t(a,...o))}function s(a){i(null,a)}}const mn={basename:KF,dirname:YF,extname:XF,join:QF,sep:"/"};function KF(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');so(e);let n=0,r=-1,i=e.length,s;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,o=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else a<0&&(s=!0,a=i+1),o>-1&&(e.codePointAt(i)===t.codePointAt(o--)?o<0&&(r=i):(o=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function YF(e){if(so(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function XF(e){so(e);let t=e.length,n=-1,r=0,i=-1,s=0,a;for(;t--;){const o=e.codePointAt(t);if(o===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),o===46?i<0?i=t:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||n<0||s===0||s===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function QF(...e){let t=-1,n;for(;++t<e.length;)so(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":ZF(n)}function ZF(e){so(e);const t=e.codePointAt(0)===47;let n=JF(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function JF(e,t){let n="",r=0,i=-1,s=0,a=-1,o,l;for(;++a<=e.length;){if(a<e.length)o=e.codePointAt(a);else{if(o===47)break;o=47}if(o===47){if(!(i===a-1||s===1))if(i!==a-1&&s===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),i=a,s=0;continue}}else if(n.length>0){n="",r=0,i=a,s=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,s=0}else o===46&&s>-1?s++:s=-1}return n}function so(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const e4={cwd:t4};function t4(){return"/"}function Lf(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function n4(e){if(typeof e=="string")e=new URL(e);else if(!Lf(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return r4(e)}function r4(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Bc=["history","path","basename","stem","extname","dirname"];class _2{constructor(t){let n;t?Lf(t)?n={path:t}:typeof t=="string"||i4(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":e4.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Bc.length;){const s=Bc[r];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let i;for(i in n)Bc.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?mn.basename(this.path):void 0}set basename(t){$c(t,"basename"),Vc(t,"basename"),this.path=mn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?mn.dirname(this.path):void 0}set dirname(t){t0(this.basename,"dirname"),this.path=mn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?mn.extname(this.path):void 0}set extname(t){if(Vc(t,"extname"),t0(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=mn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Lf(t)&&(t=n4(t)),$c(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?mn.basename(this.path,this.extname):void 0}set stem(t){$c(t,"stem"),Vc(t,"stem"),this.path=mn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new ut(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Vc(e,t){if(e&&e.includes(mn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+mn.sep+"`")}function $c(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function t0(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function i4(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const s4=function(e){const r=this.constructor.prototype,i=r[e],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s},a4={}.hasOwnProperty;class em extends s4{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=GF()}copy(){const t=new em;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Uc(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Gc("data",this.frozen),this.namespace[t]=n,this):a4.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Gc("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Lo(t),r=this.parser||this.Parser;return Hc("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Hc("process",this.parser||this.Parser),Wc("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(s,a){const o=Lo(t),l=r.parse(o);r.run(l,o,function(d,f,p){if(d||!f||!p)return u(d);const h=f,y=r.stringify(h,p);u4(y)?p.value=y:p.result=y,u(d,p)});function u(d,f){d||!f?a(d):s?s(f):n(void 0,f)}}}processSync(t){let n=!1,r;return this.freeze(),Hc("processSync",this.parser||this.Parser),Wc("processSync",this.compiler||this.Compiler),this.process(t,i),r0("processSync","process",n),r;function i(s,a){n=!0,Kx(s),r=a}}run(t,n,r){n0(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?s(void 0,r):new Promise(s);function s(a,o){const l=Lo(n);i.run(t,l,u);function u(d,f,p){const h=f||t;d?o(d):a?a(h):r(void 0,h,p)}}}runSync(t,n){let r=!1,i;return this.run(t,n,s),r0("runSync","run",r),i;function s(a,o){Kx(a),i=o,r=!0}}stringify(t,n){this.freeze();const r=Lo(n),i=this.compiler||this.Compiler;return Wc("stringify",i),n0(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Gc("use",this.frozen),t!=null)if(typeof t=="function")l(t,n);else if(typeof t=="object")Array.isArray(t)?o(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function s(u){if(typeof u=="function")l(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...f]=u;l(d,f)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(u.plugins),u.settings&&(i.settings=Uc(!0,i.settings,u.settings))}function o(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const f=u[d];s(f)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function l(u,d){let f=-1,p=-1;for(;++f<r.length;)if(r[f][0]===u){p=f;break}if(p===-1)r.push([u,...d]);else if(d.length>0){let[h,...y]=d;const b=r[p][1];Rf(b)&&Rf(h)&&(h=Uc(!0,b,h)),r[p]=[u,h,...y]}}}}const o4=new em().freeze();function Hc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Wc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Gc(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function n0(e){if(!Rf(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function r0(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Lo(e){return l4(e)?e:new _2(e)}function l4(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function u4(e){return typeof e=="string"||c4(e)}function c4(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const d4="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",i0=[],s0={allowDangerousHtml:!0},f4=/^(https?|ircs?|mailto|xmpp)$/i,p4=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function h4(e){const t=m4(e),n=g4(e);return y4(t.runSync(t.parse(n),n),e)}function m4(e){const t=e.rehypePlugins||i0,n=e.remarkPlugins||i0,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...s0}:s0;return o4().use(KM).use(n).use(HF,r).use(t)}function g4(e){const t=e.children||"",n=new _2;return typeof t=="string"&&(n.value=t),n}function y4(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,s=t.disallowedElements,a=t.skipHtml,o=t.unwrapDisallowed,l=t.urlTransform||x4;for(const d of p4)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+d4+d.id,void 0);return Jh(e,u),RD(e,{Fragment:c.Fragment,components:i,ignoreInvalidStyle:!0,jsx:c.jsx,jsxs:c.jsxs,passKeys:!0,passNode:!0});function u(d,f,p){if(d.type==="raw"&&p&&typeof f=="number")return a?p.children.splice(f,1):p.children[f]={type:"text",value:d.value},f;if(d.type==="element"){let h;for(h in Fc)if(Object.hasOwn(Fc,h)&&Object.hasOwn(d.properties,h)){const y=d.properties[h],b=Fc[h];(b===null||b.includes(d.tagName))&&(d.properties[h]=l(String(y||""),h,d))}}if(d.type==="element"){let h=n?!n.includes(d.tagName):s?s.includes(d.tagName):!1;if(!h&&r&&typeof f=="number"&&(h=!r(d,f,p)),h&&p&&typeof f=="number")return o&&d.children?p.children.splice(f,1,...d.children):p.children.splice(f,1),f}}}function x4(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||f4.test(e.slice(0,t))?e:""}function a0(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function v4(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function b4(e,t,n){const i=Mu((n||{}).ignore||[]),s=w4(t);let a=-1;for(;++a<s.length;)C2(e,"text",o);function o(u,d){let f=-1,p;for(;++f<d.length;){const h=d[f],y=p?p.children:void 0;if(i(h,y?y.indexOf(h):void 0,p))return;p=h}if(p)return l(u,d)}function l(u,d){const f=d[d.length-1],p=s[a][0],h=s[a][1];let y=0;const S=f.children.indexOf(u);let g=!1,m=[];p.lastIndex=0;let x=p.exec(u.value);for(;x;){const E=x.index,w={index:x.index,input:x.input,stack:[...d,u]};let I=h(...x,w);if(typeof I=="string"&&(I=I.length>0?{type:"text",value:I}:void 0),I===!1)p.lastIndex=E+1;else{if(y!==E&&v({type:"text",value:u.value.slice(y,E)}),Array.isArray(I))for(const P of I)v(P);else I&&v(I);y=E+x[0].length,g=!0}if(!p.global)break;x=p.exec(u.value)}return g?(y<u.value.length&&v({type:"text",value:u.value.slice(y)}),f.children.splice(S,1,...m)):m=[u],S+m.length;function v(E){const w=m[m.length-1];w&&w.type==="text"&&E.type==="text"?w.value+=E.value:m.push(E)}}}function w4(e){if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const t=[],n=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<n.length;){const i=n[r];t.push([k4(i[0]),S4(i[1])])}return t}function k4(e){return typeof e=="string"?new RegExp(v4(e),"g"):e}function S4(e){return typeof e=="function"?e:function(){return e}}const qc="phrasing",Kc=["autolink","link","image","label"];function E4(){return{transforms:[P4],enter:{literalAutolink:T4,literalAutolinkEmail:Yc,literalAutolinkHttp:Yc,literalAutolinkWww:Yc},exit:{literalAutolink:N4,literalAutolinkEmail:I4,literalAutolinkHttp:_4,literalAutolinkWww:A4}}}function C4(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:qc,notInConstruct:Kc},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:qc,notInConstruct:Kc},{character:":",before:"[ps]",after:"\\/",inConstruct:qc,notInConstruct:Kc}]}}function T4(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Yc(e){this.config.enter.autolinkProtocol.call(this,e)}function _4(e){this.config.exit.autolinkProtocol.call(this,e)}function A4(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function I4(e){this.config.exit.autolinkEmail.call(this,e)}function N4(e){this.exit(e)}function P4(e){b4(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,j4],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),R4]],{ignore:["link","linkReference"]})}function j4(e,t,n,r,i){let s="";if(!A2(i)||(/^w/i.test(t)&&(n=t+n,t="",s="http://"),!L4(n)))return!1;const a=D4(n+r);if(!a[0])return!1;const o={type:"link",title:null,url:s+t+a[0],children:[{type:"text",value:t+a[0]}]};return a[1]?[o,{type:"text",value:a[1]}]:o}function R4(e,t,n,r){return!A2(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function L4(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function D4(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const i=a0(e,"(");let s=a0(e,")");for(;r!==-1&&i>s;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),s++;return[e,n]}function A2(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||di(n)||Ru(n))&&(!t||n!==47)}I2.peek=H4;function M4(){this.buffer()}function F4(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function O4(){this.buffer()}function z4(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function U4(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ln(this.sliceSerialize(e)).toLowerCase(),n.label=t}function B4(e){this.exit(e)}function V4(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ln(this.sliceSerialize(e)).toLowerCase(),n.label=t}function $4(e){this.exit(e)}function H4(){return"["}function I2(e,t,n,r){const i=n.createTracker(r);let s=i.move("[^");const a=n.enter("footnoteReference"),o=n.enter("reference");return s+=i.move(n.safe(n.associationId(e),{after:"]",before:s})),o(),a(),s+=i.move("]"),s}function W4(){return{enter:{gfmFootnoteCallString:M4,gfmFootnoteCall:F4,gfmFootnoteDefinitionLabelString:O4,gfmFootnoteDefinition:z4},exit:{gfmFootnoteCallString:U4,gfmFootnoteCall:B4,gfmFootnoteDefinitionLabelString:V4,gfmFootnoteDefinition:$4}}}function G4(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:I2},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,s,a){const o=s.createTracker(a);let l=o.move("[^");const u=s.enter("footnoteDefinition"),d=s.enter("label");return l+=o.move(s.safe(s.associationId(r),{before:l,after:"]"})),d(),l+=o.move("]:"),r.children&&r.children.length>0&&(o.shift(4),l+=o.move((t?`
`:" ")+s.indentLines(s.containerFlow(r,o.current()),t?N2:q4))),u(),l}}function q4(e,t,n){return t===0?e:N2(e,t,n)}function N2(e,t,n){return(n?"":"    ")+e}const K4=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];tm.attention=J4;tm.peek=eO;function Y4(){return{canContainEols:["delete"],enter:{strikethrough:Q4},exit:{strikethrough:Z4}}}function X4(){return{handlers:{delete:tm},unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:K4}]}}function Q4(e){this.enter({type:"delete",children:[],position:void 0},e)}function Z4(e){this.exit(e)}function tm(e,t,n,r){const i=n.createTracker(r),s=n.stack.includes("strikethrough")?"~":"~~",a=n.enter("strikethrough");let o=i.move(s);return o+=n.containerPhrasing(e,{...i.current(),before:o,after:"~"}),o+=i.move(s),a(),o}function J4(){return{construct:"strikethrough",markers:["~"],sizes:[2,1]}}function eO(){return"~"}function tO(e){return e.length}function nO(e,t){const n=t||{},r=(n.align||[]).concat(),i=n.stringLength||tO,s=[],a=[],o=[],l=[];let u=0,d=-1;for(;++d<e.length;){const b=[],S=[];let g=-1;for(e[d].length>u&&(u=e[d].length);++g<e[d].length;){const m=rO(e[d][g]);if(n.alignDelimiters!==!1){const x=i(m);S[g]=x,(l[g]===void 0||x>l[g])&&(l[g]=x)}b.push(m)}a[d]=b,o[d]=S}let f=-1;if(typeof r=="object"&&"length"in r)for(;++f<u;)s[f]=o0(r[f]);else{const b=o0(r);for(;++f<u;)s[f]=b}f=-1;const p=[],h=[];for(;++f<u;){const b=s[f];let S="",g="";b===99?(S=":",g=":"):b===108?S=":":b===114&&(g=":");let m=n.alignDelimiters===!1?1:Math.max(1,l[f]-S.length-g.length);const x=S+"-".repeat(m)+g;n.alignDelimiters!==!1&&(m=S.length+m+g.length,m>l[f]&&(l[f]=m),h[f]=m),p[f]=x}a.splice(1,0,p),o.splice(1,0,h),d=-1;const y=[];for(;++d<a.length;){const b=a[d],S=o[d];f=-1;const g=[];for(;++f<u;){const m=b[f]||"";let x="",v="";if(n.alignDelimiters!==!1){const E=l[f]-(S[f]||0),w=s[f];w===114?x=" ".repeat(E):w===99?E%2?(x=" ".repeat(E/2+.5),v=" ".repeat(E/2-.5)):(x=" ".repeat(E/2),v=x):v=" ".repeat(E)}n.delimiterStart!==!1&&!f&&g.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&m==="")&&(n.delimiterStart!==!1||f)&&g.push(" "),n.alignDelimiters!==!1&&g.push(x),g.push(m),n.alignDelimiters!==!1&&g.push(v),n.padding!==!1&&g.push(" "),(n.delimiterEnd!==!1||f!==u-1)&&g.push("|")}y.push(n.delimiterEnd===!1?g.join("").replace(/ +$/,""):g.join(""))}return y.join(`
`)}function rO(e){return e==null?"":String(e)}function o0(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}const iO=Mu(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function sO(e,t,n,r){const i=n.enter("blockquote"),s=n.createTracker(r);s.move("> "),s.shift(2);const a=n.indentLines(n.containerFlow(e,s.current()),aO);return i(),a}function aO(e,t,n){return">"+(n?"":" ")+e}function oO(e,t){return l0(e,t.inConstruct,!0)&&!l0(e,t.notInConstruct,!1)}function l0(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function u0(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;){const s=n.unsafe[i];if(s.character===`
`&&!s.before&&!s.after&&oO(n.stack,s))return/[\t ]/.test(r.before)?"":" "}return`\\
`}function lO(e,t){const n=String(e);let r=n.indexOf(t),i=r,s=0,a=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++s>a&&(a=s):s=1,i=r+t.length,r=n.indexOf(t,i);return a}function uO(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^\n\r ]/.test(e.value)&&!/^[\t ]*(?:[\n\r]|$)|(?:^|[\n\r])[\t ]*$/.test(e.value))}function cO(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function dO(e,t,n,r){const i=cO(n),s=e.value||"";if(uO(e,n)){const f=n.enter("codeIndented"),p=n.indentLines(s,fO);return f(),p}const a=n.createTracker(r),o=i.repeat(Math.max(lO(s,i)+1,3)),l=n.enter("codeFenced"),u=i==="`"?"GraveAccent":"Tilde";let d=a.move(o);if(e.lang){const f=n.enter(`codeFencedLang${u}`);d+=a.move(n.safe(e.lang,{before:d,after:" ",encode:["`"],...a.current()})),f()}if(e.lang&&e.meta){const f=n.enter(`codeFencedMeta${u}`);d+=a.move(" "),d+=a.move(n.safe(e.meta,{before:d,after:`
`,encode:["`"],...a.current()})),f()}return d+=a.move(`
`),s&&(d+=a.move(s+`
`)),d+=a.move(o),l(),d}function fO(e,t,n){return(n?"":"    ")+e}function nm(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function pO(e,t,n,r){const i=nm(n),s=i==='"'?"Quote":"Apostrophe",a=n.enter("definition");let o=n.enter("label");const l=n.createTracker(r);let u=l.move("[");return u+=l.move(n.safe(n.associationId(e),{before:u,after:"]",...l.current()})),u+=l.move("]: "),o(),!e.url||/[\0- \u007F]/.test(e.url)?(o=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(o=n.enter("destinationRaw"),u+=l.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...l.current()}))),o(),e.title&&(o=n.enter(`title${s}`),u+=l.move(" "+i),u+=l.move(n.safe(e.title,{before:u,after:i,...l.current()})),u+=l.move(i),o()),a(),u}function hO(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}rm.attention=mO;rm.peek=gO;function rm(e,t,n,r){const i=n.enter("phrasing"),s=n.containerPhrasing({type:"root",children:[e]},r);return i(),s}function mO(e,t){return{construct:"emphasis",markers:hO(t)==="*"?["*","_"]:["_","*"],sizes:[1]}}function gO(e,t,n){return n.options.emphasis||"*"}function yO(e){return"&#x"+e.toString(16).toUpperCase()+";"}function xO(e,t){let n=!1;return Jh(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,Pf}),!!((!e.depth||e.depth<3)&&Gh(e)&&(t.options.setext||n))}function vO(e,t,n,r){const i=Math.max(Math.min(6,e.depth||1),1),s=n.createTracker(r);if(xO(e,n)){const f=n.enter("headingSetext"),p=n.enter("phrasing"),h=n.containerPhrasing(e,{...s.current(),before:`
`,after:`
`});return p(),f(),h+`
`+(i===1?"=":"-").repeat(h.length-(Math.max(h.lastIndexOf("\r"),h.lastIndexOf(`
`))+1))}const a="#".repeat(i),o=n.enter("headingAtx"),l=n.enter("phrasing");s.move(a+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...s.current()});const d=u.charCodeAt(0);return(d===9||d===32)&&(u=yO(d)+u.slice(1)),u=u?a+" "+u:a,n.options.closeAtx&&(u+=" "+a),l(),o(),u}P2.peek=bO;function P2(e){return e.value||""}function bO(){return"<"}j2.peek=wO;function j2(e,t,n,r){const i=nm(n),s=i==='"'?"Quote":"Apostrophe",a=n.enter("image");let o=n.enter("label");const l=n.createTracker(r);let u=l.move("![");return u+=l.move(n.safe(e.alt,{before:u,after:"]",...l.current()})),u+=l.move("]("),o(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(o=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(o=n.enter("destinationRaw"),u+=l.move(n.safe(e.url,{before:u,after:e.title?" ":")",...l.current()}))),o(),e.title&&(o=n.enter(`title${s}`),u+=l.move(" "+i),u+=l.move(n.safe(e.title,{before:u,after:i,...l.current()})),u+=l.move(i),o()),u+=l.move(")"),a(),u}function wO(){return"!"}R2.peek=kO;function R2(e,t,n,r){const i=e.referenceType,s=n.enter("imageReference");let a=n.enter("label");const o=n.createTracker(r);let l=o.move("![");const u=n.safe(e.alt,{before:l,after:"]",...o.current()});l+=o.move(u+"]["),a();const d=n.stack;n.stack=d.filter(function(p){return p!=="phrasing"}),a=n.enter("reference");const f=n.safe(n.associationId(e),{before:l,after:"]",...o.current()});return a(),n.stack=d,s(),i==="full"||!u||u!==f?l+=o.move(f+"]"):i==="shortcut"?l=l.slice(0,-1):l+=o.move("]"),l}function kO(){return"!"}L2.peek=SO;function L2(e,t,n){let r=e.value||"",i="`",s=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^\n\r ]/.test(r)&&(/^[\n\r ]/.test(r)&&/[\n\r ]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++s<n.unsafe.length;){const a=n.unsafe[s],o=n.compilePattern(a);if(!a.atBreak)continue;let l;for(;l=o.exec(r);){let u=l.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(l.index+1)}}return i+r+i}function SO(){return"`"}function D2(e,t){const n=Gh(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][+\-.a-z]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}M2.peek=EO;function M2(e,t,n,r){const i=nm(n),s=i==='"'?"Quote":"Apostrophe",a=n.createTracker(r);if(D2(e,n)){const d=n.stack;n.stack=d.filter(function(h){return h!=="phrasing"});const f=n.enter("autolink");let p=a.move("<");return p+=a.move(n.containerPhrasing(e,{before:p,after:">",...a.current()})),p+=a.move(">"),f(),n.stack=d,p}const o=n.enter("link");let l=n.enter("label"),u=a.move("[");return u+=a.move(n.containerPhrasing(e,{before:u,after:"](",...a.current()})),u+=a.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=a.move("<"),u+=a.move(n.safe(e.url,{before:u,after:">",...a.current()})),u+=a.move(">")):(l=n.enter("destinationRaw"),u+=a.move(n.safe(e.url,{before:u,after:e.title?" ":")",...a.current()}))),l(),e.title&&(l=n.enter(`title${s}`),u+=a.move(" "+i),u+=a.move(n.safe(e.title,{before:u,after:i,...a.current()})),u+=a.move(i),l()),u+=a.move(")"),o(),u}function EO(e,t,n){return D2(e,n)?"<":"["}F2.peek=CO;function F2(e,t,n,r){const i=e.referenceType,s=n.enter("linkReference");let a=n.enter("label");const o=n.createTracker(r);let l=o.move("[");const u=n.containerPhrasing(e,{before:l,after:"]",...o.current()});l+=o.move(u+"]["),a();const d=n.stack;n.stack=d.filter(function(p){return p!=="phrasing"}),a=n.enter("reference");const f=n.safe(n.associationId(e),{before:l,after:"]",...o.current()});return a(),n.stack=d,s(),i==="full"||!u||u!==f?l+=o.move(f+"]"):i==="shortcut"?l=l.slice(0,-1):l+=o.move("]"),l}function CO(){return"["}function im(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function TO(e){const t=im(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function _O(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function O2(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function AO(e,t,n,r){const i=n.enter("list"),s=n.bulletCurrent;let a=e.ordered?_O(n):im(n);const o=e.ordered?a==="."?")":".":TO(n);let l=t&&n.bulletLastUsed?a===n.bulletLastUsed:!1;if(!e.ordered){const d=e.children?e.children[0]:void 0;if((a==="*"||a==="-")&&d&&(!d.children||!d.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(l=!0),O2(n)===a&&d){let f=-1;for(;++f<e.children.length;){const p=e.children[f];if(p&&p.type==="listItem"&&p.children&&p.children[0]&&p.children[0].type==="thematicBreak"){l=!0;break}}}}l&&(a=o),n.bulletCurrent=a;const u=n.containerFlow(e,r);return n.bulletLastUsed=a,n.bulletCurrent=s,i(),u}function IO(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function NO(e,t,n,r){const i=IO(n);let s=n.bulletCurrent||im(n);t&&t.type==="list"&&t.ordered&&(s=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+s);let a=s.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(a=Math.ceil(a/4)*4);const o=n.createTracker(r);o.move(s+" ".repeat(a-s.length)),o.shift(a);const l=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,o.current()),d);return l(),u;function d(f,p,h){return p?(h?"":" ".repeat(a))+f:(h?s:s+" ".repeat(a-s.length))+f}}function PO(e,t,n,r){const i=n.enter("paragraph"),s=n.enter("phrasing"),a=n.containerPhrasing(e,r);return s(),i(),a}function jO(e,t,n,r){if(!e.children.some(function(o){return iO(o)}))return n.containerFlow(e,r);const s=n.enter("phrasing"),a=n.containerPhrasing(e,r);return s(),a}function RO(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}sm.attention=LO;sm.peek=DO;function sm(e,t,n,r){const i=n.enter("phrasing"),s=n.containerPhrasing({type:"root",children:[e]},r);return i(),s}function LO(e,t){return{construct:"strong",markers:RO(t)==="*"?["*","_"]:["_","*"],sizes:[2]}}function DO(e,t,n){return n.options.strong||"*"}function MO(e,t,n,r){const i=t?t.children:[],s=i.indexOf(e);return n.safe(e.value,{...r,afterNode:i[s+1],beforeNode:i[s-1]})}function FO(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function OO(e,t,n){const r=(O2(n)+(n.options.ruleSpaces?" ":"")).repeat(FO(n));return n.options.ruleSpaces?r.slice(0,-1):r}const z2={blockquote:sO,break:u0,code:dO,definition:pO,emphasis:rm,hardBreak:u0,heading:vO,html:P2,image:j2,imageReference:R2,inlineCode:L2,link:M2,linkReference:F2,list:AO,listItem:NO,paragraph:PO,root:jO,strong:sm,text:MO,thematicBreak:OO};function zO(){return{enter:{table:UO,tableData:c0,tableHeader:c0,tableRow:VO},exit:{codeText:$O,table:BO,tableData:Xc,tableHeader:Xc,tableRow:Xc}}}function UO(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function BO(e){this.exit(e),this.data.inTable=void 0}function VO(e){this.enter({type:"tableRow",children:[]},e)}function Xc(e){this.exit(e)}function c0(e){this.enter({type:"tableCell",children:[]},e)}function $O(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,HO));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function HO(e,t){return t==="|"?t:e}function WO(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,s=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:p,table:a,tableCell:l,tableRow:o}};function a(h,y,b,S){return u(d(h,b,S),h.align)}function o(h,y,b,S){const g=f(h,b,S),m=u([g]);return m.slice(0,m.indexOf(`
`))}function l(h,y,b,S){const g=b.enter("tableCell"),m=b.enter("phrasing"),x=b.containerPhrasing(h,{...S,before:s,after:s});return m(),g(),x}function u(h,y){return nO(h,{align:y,alignDelimiters:r,padding:n,stringLength:i})}function d(h,y,b){const S=h.children;let g=-1;const m=[],x=y.enter("table");for(;++g<S.length;)m[g]=f(S[g],y,b);return x(),m}function f(h,y,b){const S=h.children;let g=-1;const m=[],x=y.enter("tableRow");for(;++g<S.length;)m[g]=l(S[g],h,y,b);return x(),m}function p(h,y,b){let S=z2.inlineCode(h,y,b);return b.stack.includes("tableCell")&&(S=S.replace(/\|/g,"\\$&")),S}}function GO(){return{exit:{taskListCheckValueChecked:d0,taskListCheckValueUnchecked:d0,paragraph:KO}}}function qO(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:YO}}}function d0(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function KO(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const r=n.children[0];if(r&&r.type==="text"){const i=t.children;let s=-1,a;for(;++s<i.length;){const o=i[s];if(o.type==="paragraph"){a=o;break}}a===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function YO(e,t,n,r){const i=e.children[0],s=typeof e.checked=="boolean"&&i&&i.type==="paragraph",a="["+(e.checked?"x":" ")+"] ",o=n.createTracker(r);s&&o.move(a);let l=z2.listItem(e,t,n,{...r,...o.current()});return s&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),l;function u(d){return d+a}}function XO(){return[E4(),W4(),Y4(),zO(),GO()]}function QO(e){return{extensions:[C4(),G4(e),X4(),WO(e),qO()]}}const ZO={tokenize:iz,partial:!0},U2={tokenize:sz,partial:!0},B2={tokenize:az,partial:!0},V2={tokenize:oz,partial:!0},JO={tokenize:lz,partial:!0},$2={name:"wwwAutolink",tokenize:nz,previous:W2},H2={name:"protocolAutolink",tokenize:rz,previous:G2},Zn={name:"emailAutolink",tokenize:tz,previous:q2},Cn={};function ez(){return{text:Cn}}let Fr=48;for(;Fr<123;)Cn[Fr]=Zn,Fr++,Fr===58?Fr=65:Fr===91&&(Fr=97);Cn[43]=Zn;Cn[45]=Zn;Cn[46]=Zn;Cn[95]=Zn;Cn[72]=[Zn,H2];Cn[104]=[Zn,H2];Cn[87]=[Zn,$2];Cn[119]=[Zn,$2];function tz(e,t,n){const r=this;let i,s;return a;function a(f){return!Df(f)||!q2.call(r,r.previous)||am(r.events)?n(f):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),o(f))}function o(f){return Df(f)?(e.consume(f),o):f===64?(e.consume(f),l):n(f)}function l(f){return f===46?e.check(JO,d,u)(f):f===45||f===95||ot(f)?(s=!0,e.consume(f),l):d(f)}function u(f){return e.consume(f),i=!0,l}function d(f){return s&&i&&ft(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(f)):n(f)}}function nz(e,t,n){const r=this;return i;function i(a){return a!==87&&a!==119||!W2.call(r,r.previous)||am(r.events)?n(a):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(ZO,e.attempt(U2,e.attempt(B2,s),n),n)(a))}function s(a){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(a)}}function rz(e,t,n){const r=this;let i="",s=!1;return a;function a(f){return(f===72||f===104)&&G2.call(r,r.previous)&&!am(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(f),e.consume(f),o):n(f)}function o(f){if(ft(f)&&i.length<5)return i+=String.fromCodePoint(f),e.consume(f),o;if(f===58){const p=i.toLowerCase();if(p==="http"||p==="https")return e.consume(f),l}return n(f)}function l(f){return f===47?(e.consume(f),s?u:(s=!0,l)):n(f)}function u(f){return f===null||Xl(f)||ve(f)||di(f)||Ru(f)?n(f):e.attempt(U2,e.attempt(B2,d),n)(f)}function d(f){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(f)}}function iz(e,t,n){let r=0;return i;function i(a){return(a===87||a===119)&&r<3?(r++,e.consume(a),i):a===46&&r===3?(e.consume(a),s):n(a)}function s(a){return a===null?n(a):t(a)}}function sz(e,t,n){let r,i,s;return a;function a(u){return u===46||u===95?e.check(V2,l,o)(u):u===null||ve(u)||di(u)||u!==45&&Ru(u)?l(u):(s=!0,e.consume(u),a)}function o(u){return u===95?r=!0:(i=r,r=void 0),e.consume(u),a}function l(u){return i||r||!s?n(u):t(u)}}function az(e,t){let n=0,r=0;return i;function i(a){return a===40?(n++,e.consume(a),i):a===41&&r<n?s(a):a===33||a===34||a===38||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===60||a===63||a===93||a===95||a===126?e.check(V2,t,s)(a):a===null||ve(a)||di(a)?t(a):(e.consume(a),i)}function s(a){return a===41&&r++,e.consume(a),i}}function oz(e,t,n){return r;function r(o){return o===33||o===34||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===63||o===95||o===126?(e.consume(o),r):o===38?(e.consume(o),s):o===93?(e.consume(o),i):o===60||o===null||ve(o)||di(o)?t(o):n(o)}function i(o){return o===null||o===40||o===91||ve(o)||di(o)?t(o):r(o)}function s(o){return ft(o)?a(o):n(o)}function a(o){return o===59?(e.consume(o),r):ft(o)?(e.consume(o),a):n(o)}}function lz(e,t,n){return r;function r(s){return e.consume(s),i}function i(s){return ot(s)?n(s):t(s)}}function W2(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||ve(e)}function G2(e){return!ft(e)}function q2(e){return!(e===47||Df(e))}function Df(e){return e===43||e===45||e===46||e===95||ot(e)}function am(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const uz={tokenize:yz,partial:!0};function cz(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:hz,continuation:{tokenize:mz},exit:gz}},text:{91:{name:"gfmFootnoteCall",tokenize:pz},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:dz,resolveTo:fz}}}}function dz(e,t,n){const r=this;let i=r.events.length;const s=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let a;for(;i--;){const l=r.events[i][1];if(l.type==="labelImage"){a=l;break}if(l.type==="gfmFootnoteCall"||l.type==="labelLink"||l.type==="label"||l.type==="image"||l.type==="link")break}return o;function o(l){if(!a||!a._balanced)return n(l);const u=ln(r.sliceSerialize({start:a.end,end:r.now()}));return u.codePointAt(0)!==94||!s.includes(u.slice(1))?n(l):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(l),e.exit("gfmFootnoteCallLabelMarker"),t(l))}}function fz(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const s={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},a={type:"chunkString",contentType:"string",start:Object.assign({},s.start),end:Object.assign({},s.end)},o=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",s,t],["enter",a,t],["exit",a,t],["exit",s,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...o),e}function pz(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let s=0,a;return o;function o(f){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),l}function l(f){return f!==94?n(f):(e.enter("gfmFootnoteCallMarker"),e.consume(f),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(f){if(s>999||f===93&&!a||f===null||f===91||ve(f))return n(f);if(f===93){e.exit("chunkString");const p=e.exit("gfmFootnoteCallString");return i.includes(ln(r.sliceSerialize(p)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(f)}return ve(f)||(a=!0),s++,e.consume(f),f===92?d:u}function d(f){return f===91||f===92||f===93?(e.consume(f),s++,u):u(f)}}function hz(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let s,a=0,o;return l;function l(y){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(y),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(y){return y===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(y),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",d):n(y)}function d(y){if(a>999||y===93&&!o||y===null||y===91||ve(y))return n(y);if(y===93){e.exit("chunkString");const b=e.exit("gfmFootnoteDefinitionLabelString");return s=ln(r.sliceSerialize(b)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(y),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),p}return ve(y)||(o=!0),a++,e.consume(y),y===92?f:d}function f(y){return y===91||y===92||y===93?(e.consume(y),a++,d):d(y)}function p(y){return y===58?(e.enter("definitionMarker"),e.consume(y),e.exit("definitionMarker"),i.includes(s)||i.push(s),fe(e,h,"gfmFootnoteDefinitionWhitespace")):n(y)}function h(y){return t(y)}}function mz(e,t,n){return e.check(io,t,e.attempt(uz,t,n))}function gz(e){e.exit("gfmFootnoteDefinition")}function yz(e,t,n){const r=this;return fe(e,i,"gfmFootnoteDefinitionIndent",5);function i(s){const a=r.events[r.events.length-1];return a&&a[1].type==="gfmFootnoteDefinitionIndent"&&a[2].sliceSerialize(a[1],!0).length===4?t(s):n(s)}}function xz(e){let n=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:s,resolveAll:i};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(a,o){let l=-1;for(;++l<a.length;)if(a[l][0]==="enter"&&a[l][1].type==="strikethroughSequenceTemporary"&&a[l][1]._close){let u=l;for(;u--;)if(a[u][0]==="exit"&&a[u][1].type==="strikethroughSequenceTemporary"&&a[u][1]._open&&a[l][1].end.offset-a[l][1].start.offset===a[u][1].end.offset-a[u][1].start.offset){a[l][1].type="strikethroughSequence",a[u][1].type="strikethroughSequence";const d={type:"strikethrough",start:Object.assign({},a[u][1].start),end:Object.assign({},a[l][1].end)},f={type:"strikethroughText",start:Object.assign({},a[u][1].end),end:Object.assign({},a[l][1].start)},p=[["enter",d,o],["enter",a[u][1],o],["exit",a[u][1],o],["enter",f,o]],h=o.parser.constructs.insideSpan.null;h&&on(p,p.length,0,Lu(h,a.slice(u+1,l),o)),on(p,p.length,0,[["exit",f,o],["enter",a[l][1],o],["exit",a[l][1],o],["exit",d,o]]),on(a,u-1,l-u+3,p),l=u+p.length-2;break}}for(l=-1;++l<a.length;)a[l][1].type==="strikethroughSequenceTemporary"&&(a[l][1].type="data");return a}function s(a,o,l){const u=this.previous,d=this.events;let f=0;return p;function p(y){return u===126&&d[d.length-1][1].type!=="characterEscape"?l(y):(a.enter("strikethroughSequenceTemporary"),h(y))}function h(y){const b=Zl(u);if(y===126)return f>1?l(y):(a.consume(y),f++,h);if(f<2&&!n)return l(y);const S=a.exit("strikethroughSequenceTemporary"),g=Zl(y);return S._open=!g||g===2&&!!b,S._close=!b||b===2&&!!g,o(y)}}}class vz{constructor(){this.map=[],this.index=new Map}add(t,n,r){bz(this,t,n,r)}consume(t){if(this.map.sort(function(s,a){return s[0]-a[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(const s of i)t.push(s);i=r.pop()}this.map.length=0,this.index.clear()}}function bz(e,t,n,r){if(n===0&&r.length===0)return;const i=e.index.get(t);if(i){i[1]+=n,i[2].push(...r);return}const s=[t,n,r];e.map.push(s),e.index.set(t,s)}function wz(e,t){let n=!1;const r=[];for(;t<e.length;){const i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const s=r.length-1;r[s]=r[s]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function kz(){return{flow:{null:{name:"table",tokenize:Sz,resolveAll:Ez}}}}function Sz(e,t,n){const r=this;let i=0,s=0,a;return o;function o(_){let j=r.events.length-1;for(;j>-1;){const{type:Q}=r.events[j][1];if(Q==="lineEnding"||Q==="linePrefix")j--;else break}const U=j>-1?r.events[j][1].type:null,q=U==="tableHead"||U==="tableRow"?w:l;return q===w&&r.parser.lazy[r.now().line]?n(_):q(_)}function l(_){return e.enter("tableHead"),e.enter("tableRow"),u(_)}function u(_){return _===124||(a=!0,s+=1),d(_)}function d(_){return _===null?n(_):Z(_)?s>1?(s=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),h):n(_):ae(_)?fe(e,d,"whitespace")(_):(s+=1,a&&(a=!1,i+=1),_===124?(e.enter("tableCellDivider"),e.consume(_),e.exit("tableCellDivider"),a=!0,d):(e.enter("data"),f(_)))}function f(_){return _===null||_===124||ve(_)?(e.exit("data"),d(_)):(e.consume(_),_===92?p:f)}function p(_){return _===92||_===124?(e.consume(_),f):f(_)}function h(_){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(_):(e.enter("tableDelimiterRow"),a=!1,ae(_)?fe(e,y,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(_):y(_))}function y(_){return _===45||_===58?S(_):_===124?(a=!0,e.enter("tableCellDivider"),e.consume(_),e.exit("tableCellDivider"),b):E(_)}function b(_){return ae(_)?fe(e,S,"whitespace")(_):S(_)}function S(_){return _===58?(s+=1,a=!0,e.enter("tableDelimiterMarker"),e.consume(_),e.exit("tableDelimiterMarker"),g):_===45?(s+=1,g(_)):_===null||Z(_)?v(_):E(_)}function g(_){return _===45?(e.enter("tableDelimiterFiller"),m(_)):E(_)}function m(_){return _===45?(e.consume(_),m):_===58?(a=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(_),e.exit("tableDelimiterMarker"),x):(e.exit("tableDelimiterFiller"),x(_))}function x(_){return ae(_)?fe(e,v,"whitespace")(_):v(_)}function v(_){return _===124?y(_):_===null||Z(_)?!a||i!==s?E(_):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(_)):E(_)}function E(_){return n(_)}function w(_){return e.enter("tableRow"),I(_)}function I(_){return _===124?(e.enter("tableCellDivider"),e.consume(_),e.exit("tableCellDivider"),I):_===null||Z(_)?(e.exit("tableRow"),t(_)):ae(_)?fe(e,I,"whitespace")(_):(e.enter("data"),P(_))}function P(_){return _===null||_===124||ve(_)?(e.exit("data"),I(_)):(e.consume(_),_===92?R:P)}function R(_){return _===92||_===124?(e.consume(_),P):P(_)}}function Ez(e,t){let n=-1,r=!0,i=0,s=[0,0,0,0],a=[0,0,0,0],o=!1,l=0,u,d,f;const p=new vz;for(;++n<e.length;){const h=e[n],y=h[1];h[0]==="enter"?y.type==="tableHead"?(o=!1,l!==0&&(f0(p,t,l,u,d),d=void 0,l=0),u={type:"table",start:Object.assign({},y.start),end:Object.assign({},y.end)},p.add(n,0,[["enter",u,t]])):y.type==="tableRow"||y.type==="tableDelimiterRow"?(r=!0,f=void 0,s=[0,0,0,0],a=[0,n+1,0,0],o&&(o=!1,d={type:"tableBody",start:Object.assign({},y.start),end:Object.assign({},y.end)},p.add(n,0,[["enter",d,t]])),i=y.type==="tableDelimiterRow"?2:d?3:1):i&&(y.type==="data"||y.type==="tableDelimiterMarker"||y.type==="tableDelimiterFiller")?(r=!1,a[2]===0&&(s[1]!==0&&(a[0]=a[1],f=Do(p,t,s,i,void 0,f),s=[0,0,0,0]),a[2]=n)):y.type==="tableCellDivider"&&(r?r=!1:(s[1]!==0&&(a[0]=a[1],f=Do(p,t,s,i,void 0,f)),s=a,a=[s[1],n,0,0])):y.type==="tableHead"?(o=!0,l=n):y.type==="tableRow"||y.type==="tableDelimiterRow"?(l=n,s[1]!==0?(a[0]=a[1],f=Do(p,t,s,i,n,f)):a[1]!==0&&(f=Do(p,t,a,i,n,f)),i=0):i&&(y.type==="data"||y.type==="tableDelimiterMarker"||y.type==="tableDelimiterFiller")&&(a[3]=n)}for(l!==0&&f0(p,t,l,u,d),p.consume(t.events),n=-1;++n<t.events.length;){const h=t.events[n];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=wz(t.events,n))}return e}function Do(e,t,n,r,i,s){const a=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",o="tableContent";n[0]!==0&&(s.end=Object.assign({},xi(t.events,n[0])),e.add(n[0],0,[["exit",s,t]]));const l=xi(t.events,n[1]);if(s={type:a,start:Object.assign({},l),end:Object.assign({},l)},e.add(n[1],0,[["enter",s,t]]),n[2]!==0){const u=xi(t.events,n[2]),d=xi(t.events,n[3]),f={type:o,start:Object.assign({},u),end:Object.assign({},d)};if(e.add(n[2],0,[["enter",f,t]]),r!==2){const p=t.events[n[2]],h=t.events[n[3]];if(p[1].end=Object.assign({},h[1].end),p[1].type="chunkText",p[1].contentType="text",n[3]>n[2]+1){const y=n[2]+1,b=n[3]-n[2]-1;e.add(y,b,[])}}e.add(n[3]+1,0,[["exit",f,t]])}return i!==void 0&&(s.end=Object.assign({},xi(t.events,i)),e.add(i,0,[["exit",s,t]]),s=void 0),s}function f0(e,t,n,r,i){const s=[],a=xi(t.events,n);i&&(i.end=Object.assign({},a),s.push(["exit",i,t])),r.end=Object.assign({},a),s.push(["exit",r,t]),e.add(n+1,0,s)}function xi(e,t){const n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const Cz={name:"tasklistCheck",tokenize:_z};function Tz(){return{text:{91:Cz}}}function _z(e,t,n){const r=this;return i;function i(l){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(l):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),s)}function s(l){return ve(l)?(e.enter("taskListCheckValueUnchecked"),e.consume(l),e.exit("taskListCheckValueUnchecked"),a):l===88||l===120?(e.enter("taskListCheckValueChecked"),e.consume(l),e.exit("taskListCheckValueChecked"),a):n(l)}function a(l){return l===93?(e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),o):n(l)}function o(l){return Z(l)?t(l):ae(l)?e.check({tokenize:Az},t,n)(l):n(l)}}function Az(e,t,n){return fe(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function Iz(e){return i2([ez(),cz(),xz(e),kz(),Tz()])}const Nz={};function Pz(e){const t=this,n=e||Nz,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),s=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),a=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(Iz(n)),s.push(XO()),a.push(QO(n))}var K2={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,a={},o={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function m(x){return x instanceof l?new l(x.type,m(x.content),x.alias):Array.isArray(x)?x.map(m):x.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++s}),m.__id},clone:function m(x,v){v=v||{};var E,w;switch(o.util.type(x)){case"Object":if(w=o.util.objId(x),v[w])return v[w];E={},v[w]=E;for(var I in x)x.hasOwnProperty(I)&&(E[I]=m(x[I],v));return E;case"Array":return w=o.util.objId(x),v[w]?v[w]:(E=[],v[w]=E,x.forEach(function(P,R){E[R]=m(P,v)}),E);default:return x}},getLanguage:function(m){for(;m;){var x=i.exec(m.className);if(x)return x[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,x){m.className=m.className.replace(RegExp(i,"gi"),""),m.classList.add("language-"+x)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(E){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(E.stack)||[])[1];if(m){var x=document.getElementsByTagName("script");for(var v in x)if(x[v].src==m)return x[v]}return null}},isActive:function(m,x,v){for(var E="no-"+x;m;){var w=m.classList;if(w.contains(x))return!0;if(w.contains(E))return!1;m=m.parentElement}return!!v}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(m,x){var v=o.util.clone(o.languages[m]);for(var E in x)v[E]=x[E];return v},insertBefore:function(m,x,v,E){E=E||o.languages;var w=E[m],I={};for(var P in w)if(w.hasOwnProperty(P)){if(P==x)for(var R in v)v.hasOwnProperty(R)&&(I[R]=v[R]);v.hasOwnProperty(P)||(I[P]=w[P])}var _=E[m];return E[m]=I,o.languages.DFS(o.languages,function(j,U){U===_&&j!=m&&(this[j]=I)}),I},DFS:function m(x,v,E,w){w=w||{};var I=o.util.objId;for(var P in x)if(x.hasOwnProperty(P)){v.call(x,P,x[P],E||P);var R=x[P],_=o.util.type(R);_==="Object"&&!w[I(R)]?(w[I(R)]=!0,m(R,v,null,w)):_==="Array"&&!w[I(R)]&&(w[I(R)]=!0,m(R,v,P,w))}}},plugins:{},highlightAll:function(m,x){o.highlightAllUnder(document,m,x)},highlightAllUnder:function(m,x,v){var E={callback:v,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",E),E.elements=Array.prototype.slice.apply(E.container.querySelectorAll(E.selector)),o.hooks.run("before-all-elements-highlight",E);for(var w=0,I;I=E.elements[w++];)o.highlightElement(I,x===!0,E.callback)},highlightElement:function(m,x,v){var E=o.util.getLanguage(m),w=o.languages[E];o.util.setLanguage(m,E);var I=m.parentElement;I&&I.nodeName.toLowerCase()==="pre"&&o.util.setLanguage(I,E);var P=m.textContent,R={element:m,language:E,grammar:w,code:P};function _(U){R.highlightedCode=U,o.hooks.run("before-insert",R),R.element.innerHTML=R.highlightedCode,o.hooks.run("after-highlight",R),o.hooks.run("complete",R),v&&v.call(R.element)}if(o.hooks.run("before-sanity-check",R),I=R.element.parentElement,I&&I.nodeName.toLowerCase()==="pre"&&!I.hasAttribute("tabindex")&&I.setAttribute("tabindex","0"),!R.code){o.hooks.run("complete",R),v&&v.call(R.element);return}if(o.hooks.run("before-highlight",R),!R.grammar){_(o.util.encode(R.code));return}if(x&&r.Worker){var j=new Worker(o.filename);j.onmessage=function(U){_(U.data)},j.postMessage(JSON.stringify({language:R.language,code:R.code,immediateClose:!0}))}else _(o.highlight(R.code,R.grammar,R.language))},highlight:function(m,x,v){var E={code:m,grammar:x,language:v};if(o.hooks.run("before-tokenize",E),!E.grammar)throw new Error('The language "'+E.language+'" has no grammar.');return E.tokens=o.tokenize(E.code,E.grammar),o.hooks.run("after-tokenize",E),l.stringify(o.util.encode(E.tokens),E.language)},tokenize:function(m,x){var v=x.rest;if(v){for(var E in v)x[E]=v[E];delete x.rest}var w=new f;return p(w,w.head,m),d(m,w,x,w.head,0),y(w)},hooks:{all:{},add:function(m,x){var v=o.hooks.all;v[m]=v[m]||[],v[m].push(x)},run:function(m,x){var v=o.hooks.all[m];if(!(!v||!v.length))for(var E=0,w;w=v[E++];)w(x)}},Token:l};r.Prism=o;function l(m,x,v,E){this.type=m,this.content=x,this.alias=v,this.length=(E||"").length|0}l.stringify=function m(x,v){if(typeof x=="string")return x;if(Array.isArray(x)){var E="";return x.forEach(function(_){E+=m(_,v)}),E}var w={type:x.type,content:m(x.content,v),tag:"span",classes:["token",x.type],attributes:{},language:v},I=x.alias;I&&(Array.isArray(I)?Array.prototype.push.apply(w.classes,I):w.classes.push(I)),o.hooks.run("wrap",w);var P="";for(var R in w.attributes)P+=" "+R+'="'+(w.attributes[R]||"").replace(/"/g,"&quot;")+'"';return"<"+w.tag+' class="'+w.classes.join(" ")+'"'+P+">"+w.content+"</"+w.tag+">"};function u(m,x,v,E){m.lastIndex=x;var w=m.exec(v);if(w&&E&&w[1]){var I=w[1].length;w.index+=I,w[0]=w[0].slice(I)}return w}function d(m,x,v,E,w,I){for(var P in v)if(!(!v.hasOwnProperty(P)||!v[P])){var R=v[P];R=Array.isArray(R)?R:[R];for(var _=0;_<R.length;++_){if(I&&I.cause==P+","+_)return;var j=R[_],U=j.inside,q=!!j.lookbehind,Q=!!j.greedy,H=j.alias;if(Q&&!j.pattern.global){var ue=j.pattern.toString().match(/[imsuy]*$/)[0];j.pattern=RegExp(j.pattern.source,ue+"g")}for(var Y=j.pattern||j,L=E.next,V=w;L!==x.tail&&!(I&&V>=I.reach);V+=L.value.length,L=L.next){var k=L.value;if(x.length>m.length)return;if(!(k instanceof l)){var X=1,ee;if(Q){if(ee=u(Y,V,m,q),!ee||ee.index>=m.length)break;var ie=ee.index,A=ee.index+ee[0].length,se=V;for(se+=L.value.length;ie>=se;)L=L.next,se+=L.value.length;if(se-=L.value.length,V=se,L.value instanceof l)continue;for(var be=L;be!==x.tail&&(se<A||typeof be.value=="string");be=be.next)X++,se+=be.value.length;X--,k=m.slice(V,se),ee.index-=V}else if(ee=u(Y,0,k,q),!ee)continue;var ie=ee.index,Ce=ee[0],Me=k.slice(0,ie),Ke=k.slice(ie+Ce.length),Ve=V+k.length;I&&Ve>I.reach&&(I.reach=Ve);var et=L.prev;Me&&(et=p(x,et,Me),V+=Me.length),h(x,et,X);var Ye=new l(P,U?o.tokenize(Ce,U):Ce,H,Ce);if(L=p(x,et,Ye),Ke&&p(x,L,Ke),X>1){var me={cause:P+","+_,reach:Ve};d(m,x,v,L.prev,V,me),I&&me.reach>I.reach&&(I.reach=me.reach)}}}}}}function f(){var m={value:null,prev:null,next:null},x={value:null,prev:m,next:null};m.next=x,this.head=m,this.tail=x,this.length=0}function p(m,x,v){var E=x.next,w={value:v,prev:x,next:E};return x.next=w,E.prev=w,m.length++,w}function h(m,x,v){for(var E=x.next,w=0;w<v&&E!==m.tail;w++)E=E.next;x.next=E,E.prev=x,m.length-=w}function y(m){for(var x=[],v=m.head.next;v!==m.tail;)x.push(v.value),v=v.next;return x}if(!r.document)return r.addEventListener&&(o.disableWorkerMessageHandler||r.addEventListener("message",function(m){var x=JSON.parse(m.data),v=x.language,E=x.code,w=x.immediateClose;r.postMessage(o.highlight(E,o.languages[v],v)),w&&r.close()},!1)),o;var b=o.util.currentScript();b&&(o.filename=b.src,b.hasAttribute("data-manual")&&(o.manual=!0));function S(){o.manual||o.highlightAll()}if(!o.manual){var g=document.readyState;g==="loading"||g==="interactive"&&b&&b.defer?document.addEventListener("DOMContentLoaded",S):window.requestAnimationFrame?window.requestAnimationFrame(S):window.setTimeout(S,16)}return o}(t);e.exports&&(e.exports=n),typeof qi<"u"&&(qi.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(i,s){var a={};a["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[s]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};o["language-"+s]={pattern:/[\s\S]+/,inside:n.languages[s]};var l={};l[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:o},n.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,i){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:n.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(r){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var s=r.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",i=function(b,S){return"✖ Error "+b+" while fetching file: "+S},s="✖ Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},o="data-src-status",l="loading",u="loaded",d="failed",f="pre[data-src]:not(["+o+'="'+u+'"]):not(['+o+'="'+l+'"])';function p(b,S,g){var m=new XMLHttpRequest;m.open("GET",b,!0),m.onreadystatechange=function(){m.readyState==4&&(m.status<400&&m.responseText?S(m.responseText):m.status>=400?g(i(m.status,m.statusText)):g(s))},m.send(null)}function h(b){var S=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(b||"");if(S){var g=Number(S[1]),m=S[2],x=S[3];return m?x?[g,Number(x)]:[g,void 0]:[g,g]}}n.hooks.add("before-highlightall",function(b){b.selector+=", "+f}),n.hooks.add("before-sanity-check",function(b){var S=b.element;if(S.matches(f)){b.code="",S.setAttribute(o,l);var g=S.appendChild(document.createElement("CODE"));g.textContent=r;var m=S.getAttribute("data-src"),x=b.language;if(x==="none"){var v=(/\.(\w+)$/.exec(m)||[,"none"])[1];x=a[v]||v}n.util.setLanguage(g,x),n.util.setLanguage(S,x);var E=n.plugins.autoloader;E&&E.loadLanguages(x),p(m,function(w){S.setAttribute(o,u);var I=h(S.getAttribute("data-range"));if(I){var P=w.split(/\r\n?|\n/g),R=I[0],_=I[1]==null?P.length:I[1];R<0&&(R+=P.length),R=Math.max(0,Math.min(R-1,P.length)),_<0&&(_+=P.length),_=Math.max(0,Math.min(_,P.length)),w=P.slice(R,_).join(`
`),S.hasAttribute("data-start")||S.setAttribute("data-start",String(R+1))}g.textContent=w,n.highlightElement(g)},function(w){S.setAttribute(o,d),g.textContent=w})}}),n.plugins.fileHighlight={highlight:function(S){for(var g=(S||document).querySelectorAll(f),m=0,x;x=g[m++];)n.highlightElement(x)}};var y=!1;n.fileHighlight=function(){y||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),y=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(K2);var jz=K2.exports;const p0=tu(jz);Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism);(function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,r=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function s(l,u){return l=l.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return r}).replace(/<SPREAD>/g,function(){return i}),RegExp(l,u)}i=s(i).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=s(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:s(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:s(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var a=function(l){return l?typeof l=="string"?l:typeof l.content=="string"?l.content:l.content.map(a).join(""):""},o=function(l){for(var u=[],d=0;d<l.length;d++){var f=l[d],p=!1;if(typeof f!="string"&&(f.type==="tag"&&f.content[0]&&f.content[0].type==="tag"?f.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===a(f.content[0].content[1])&&u.pop():f.content[f.content.length-1].content==="/>"||u.push({tagName:a(f.content[0].content[1]),openedBraces:0}):u.length>0&&f.type==="punctuation"&&f.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&f.type==="punctuation"&&f.content==="}"?u[u.length-1].openedBraces--:p=!0),(p||typeof f=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var h=a(f);d<l.length-1&&(typeof l[d+1]=="string"||l[d+1].type==="plain-text")&&(h+=a(l[d+1]),l.splice(d+1,1)),d>0&&(typeof l[d-1]=="string"||l[d-1].type==="plain-text")&&(h=a(l[d-1])+h,l.splice(d-1,1),d--),l[d]=new e.Token("plain-text",h,null,h)}f.content&&typeof f.content!="string"&&o(f.content)}};e.hooks.add("after-tokenize",function(l){l.language!=="jsx"&&l.language!=="tsx"||o(l.tokens)})})(Prism);(function(e){var t=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",t),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"];var n=e.languages.tsx.tag;n.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+n.pattern.source+")",n.pattern.flags),n.lookbehind=!0})(Prism);(function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},r={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:r},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:r},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:r.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:r.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var i=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],s=r.variable[1].inside,a=0;a<i.length;a++)s[i[a]]=e.languages.bash[i[a]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};(function(e){var t=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function n(d){return d=d.replace(/<inner>/g,function(){return t}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+d+")")}var r=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,i=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return r}),s=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+i+s+"(?:"+i+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+i+s+")(?:"+i+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(r),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+i+")"+s+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+i+"$"),inside:{"table-header":{pattern:RegExp(r),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:n(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(d){["url","bold","italic","strike","code-snippet"].forEach(function(f){d!==f&&(e.languages.markdown[d].inside.content.inside[f]=e.languages.markdown[f])})}),e.hooks.add("after-tokenize",function(d){if(d.language!=="markdown"&&d.language!=="md")return;function f(p){if(!(!p||typeof p=="string"))for(var h=0,y=p.length;h<y;h++){var b=p[h];if(b.type!=="code"){f(b.content);continue}var S=b.content[1],g=b.content[3];if(S&&g&&S.type==="code-language"&&g.type==="code-block"&&typeof S.content=="string"){var m=S.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");m=(/[a-z][\w-]*/i.exec(m)||[""])[0].toLowerCase();var x="language-"+m;g.alias?typeof g.alias=="string"?g.alias=[g.alias,x]:g.alias.push(x):g.alias=[x]}}}f(d.tokens)}),e.hooks.add("wrap",function(d){if(d.type==="code-block"){for(var f="",p=0,h=d.classes.length;p<h;p++){var y=d.classes[p],b=/language-(.+)/.exec(y);if(b){f=b[1];break}}var S=e.languages[f];if(S)d.content=e.highlight(u(d.content),S,f);else if(f&&f!=="none"&&e.plugins.autoloader){var g="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);d.attributes.id=g,e.plugins.autoloader.loadLanguages(f,function(){var m=document.getElementById(g);m&&(m.innerHTML=e.highlight(m.textContent,e.languages[f],f))})}}});var a=RegExp(e.languages.markup.tag.pattern.source,"gi"),o={amp:"&",lt:"<",gt:">",quot:'"'},l=String.fromCodePoint||String.fromCharCode;function u(d){var f=d.replace(a,"");return f=f.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(p,h){if(h=h.toLowerCase(),h[0]==="#"){var y;return h[1]==="x"?y=parseInt(h.slice(2),16):y=Number(h.slice(1)),l(y)}else{var b=o[h];return b||p}}),f}e.languages.md=e.languages.markdown})(Prism);(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;(function(e){var t=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return t.source});e.languages.cpp=e.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:t,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),e.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return n})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),e.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e.languages.cpp}}}}),e.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),e.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:e.languages.extend("cpp",{})}}),e.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},e.languages.cpp["base-clause"])})(Prism);(function(e){var t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,n=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,r={pattern:RegExp(/(^|[^\w.])/.source+n+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[r,{pattern:RegExp(/(^|[^\w.])/.source+n+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:r.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+n+/[A-Z]\w*\b/.source),lookbehind:!0,inside:r.inside}],keyword:t,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":r,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+n+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:r.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+n+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:r.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(Prism);(function(e){for(var t=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,n=0;n<2;n++)t=t.replace(/<self>/g,function(){return t});t=t.replace(/<self>/g,function(){return/[^\s\S]/.source}),e.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+t),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust["closure-params"].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string})(Prism);Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/});Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}});delete Prism.languages.go["class-name"];(function(e){var t=/[*&][^\s[\]{},]+/,n=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,r="(?:"+n.source+"(?:[ 	]+"+t.source+")?|"+t.source+"(?:[ 	]+"+n.source+")?)",i=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),s=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function a(o,l){l=(l||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return r}).replace(/<<value>>/g,function(){return o});return RegExp(u,l)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return r})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return r}).replace(/<<key>>/g,function(){return"(?:"+i+"|"+s+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:a(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:a(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:a(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:a(s),lookbehind:!0,greedy:!0},number:{pattern:a(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:n,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml})(Prism);function h0(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Rz({children:e}){const[t,n]=C.useState(!1),r=(e==null?void 0:e.props)||{},i=r.className||"",s=/language-(\w+)/.exec(i),a=s?s[1].toLowerCase():"",o=String(r.children||"").replace(/\n$/,""),u={py:"python",js:"javascript",ts:"typescript",sh:"bash",shell:"bash",yml:"yaml",html:"markup",xml:"markup"}[a]||a||"text",d=C.useMemo(()=>{if(!o)return"";const p=p0.languages[u];if(p)try{return p0.highlight(o,p,u)}catch{return h0(o)}return h0(o)},[o,u]),f=()=>{o&&(navigator.clipboard.writeText(o),n(!0),setTimeout(()=>n(!1),2e3))};return c.jsxs("div",{className:"code-block-wrapper",children:[c.jsxs("div",{className:"code-block-header",children:[c.jsx("span",{className:"code-block-lang",children:a||"CODE"}),c.jsxs("button",{type:"button",onClick:f,className:"copy-code-btn","aria-label":"Copy code to clipboard",children:[t?c.jsx(Vp,{size:12,className:"text-accent"}):c.jsx(r1,{size:12}),c.jsx("span",{children:t?"Copied!":"Copy"})]})]}),c.jsx("pre",{className:"code-block-pre",children:c.jsx("code",{className:i||`language-${u}`,dangerouslySetInnerHTML:{__html:d}})})]})}function Lz({children:e,className:t,...n}){return t&&t.includes("language-")?c.jsx("code",{className:t,...n,children:e}):c.jsx("code",{className:"inline-code",...n,children:e})}function Dz({href:e,children:t,...n}){return e&&/^(https?:|mailto:|\/|#)/i.test(e.trim())?c.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"markdown-link",...n,children:t}):c.jsx("span",{children:t})}function Mz({content:e}){return e?c.jsx("div",{className:"markdown-content",children:c.jsx(h4,{remarkPlugins:[Pz],components:{pre:Rz,code:Lz,a:Dz,table:({node:t,...n})=>c.jsx("div",{className:"table-wrapper",children:c.jsx("table",{className:"markdown-table",...n})})},children:e})}):null}const m0={dont:"don't",cant:"can't",wont:"won't",didnt:"didn't",doesnt:"doesn't",isnt:"isn't",arent:"aren't",wasnt:"wasn't",werent:"weren't",hasnt:"hasn't",havent:"haven't",hadnt:"hadn't",couldnt:"couldn't",shouldnt:"shouldn't",wouldnt:"wouldn't",youre:"you're",theyre:"they're",weve:"we've",theyve:"they've",youve:"you've",im:"I'm",ive:"I've",ill:"I'll",id:"I'd",youll:"you'll",theyll:"they'll",thats:"that's",whats:"what's",hows:"how's",wheres:"where's",theres:"there's",lets:"let's",itll:"it'll"},g0={grammer:"grammar",gramer:"grammar",gramar:"grammar",fropdown:"dropdown",fropdowns:"dropdowns",modelall:"models",teh:"the",hte:"the",recieve:"receive",recieved:"received",recieving:"receiving",seperate:"separate",seperated:"separated",seperating:"separating",definately:"definitely",definatly:"definitely",occured:"occurred",occuring:"occurring",untill:"until",alot:"a lot",wich:"which",becuase:"because",beleive:"believe",wierd:"weird",thier:"their",truely:"truly",goverment:"government",enviroment:"environment",tommorrow:"tomorrow",tomorow:"tomorrow",accomodate:"accommodate",embarass:"embarrass",neccessary:"necessary",necesary:"necessary",acheive:"achieve",existance:"existence",occurance:"occurrence",refering:"referring",intrest:"interest",intresting:"interesting",diffrent:"different",compleatly:"completely",usfull:"useful",helpfull:"helpful",progam:"program",progams:"programs",programing:"programming",fucntion:"function",fucntions:"functions",varible:"variable",varibles:"variables",libary:"library",libaries:"libraries",databse:"database",databses:"databases",lenght:"length",heigth:"height",hight:"height",exmaple:"example",exmaples:"examples",resposne:"response",resposnes:"responses",qustion:"question",qustions:"questions",exaplin:"explain",alright:"all right",anycase:"any case",cannot:"can not",calender:"calendar",collegue:"colleague",concious:"conscious",foregin:"foreign",gaurentee:"guarantee",happend:"happened",ignorant:"ignorant",independant:"independent",mispell:"misspell",mispelled:"misspelled",noticable:"noticeable",oppurtunity:"opportunity",persue:"pursue",posession:"possession",priviledge:"privilege",reccomend:"recommend",recommand:"recommend",succesful:"successful",suprise:"surprise",threshhold:"threshold",appreance:"appearance",appriciate:"appreciate",begining:"beginning",beeing:"being",bussiness:"business",cematography:"cinematography",definate:"definite",enviorment:"environment",experiance:"experience",finaly:"finally",foriegn:"foreign",greatful:"grateful",hapiness:"happiness",indepent:"independent",liason:"liaison",publically:"publicly",refered:"referred",relevent:"relevant",restaraunt:"restaurant",resturant:"restaurant",rhym:"rhyme",satsify:"satisfy",sepperate:"separate",serius:"serious",sponser:"sponsor",successfull:"successful",wether:"weather"},Fz=["monday","tuesday","wednesday","thursday","friday","saturday","sunday","january","february","march","april","may","june","july","august","september","october","november","december","python","javascript","typescript","react","fastapi","flask","redis","docker","ollama","eliza"];function y0(e,t){return!e||!t?t:e===e.toUpperCase()&&e.length>1?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.slice(1):t}function Y2(e){if(!e)return e;const t=e.toLowerCase();return t==="i"?"I":m0[t]?y0(e,m0[t]):g0[t]?y0(e,g0[t]):Fz.includes(t)?t.charAt(0).toUpperCase()+t.slice(1):e}function Mo(e){if(!e||typeof e!="string")return"";const t=/([a-zA-Z0-9_']+|\s+|[^\s\w'])/g,n=e.match(t)||[e];let r=!0;return n.map(s=>{if(/^[.!?\n]+$/.test(s))return r=!0,s;if(/^\s+$/.test(s))return s;if(/^[a-zA-Z0-9_']+$/.test(s)){let a=Y2(s);return r&&a.length>0&&(a=a.charAt(0).toUpperCase()+a.slice(1)),r=!1,a}return s}).join("")}function Oz(e){if(!e)return e;const t=e.match(/^(.*?)(\b[a-zA-Z0-9_']+\b)(\s*[\s.,?!])$/);if(!t)return e;const[,n,r,i]=t,s=Y2(r),a=n.trimEnd(),l=a.length===0||/[.!?\n]$/.test(a)?s.charAt(0).toUpperCase()+s.slice(1):s;return l!==r?n+l+i:e}const zz={default_provider:"auto",default_model:"",auto_speak:!0,voice_name:"",voice_profile:"eliza",voice_lang:"en-IN",speech_recognition_lang:"en-IN",voice_engine:"auto",speech_rate:1,speech_pitch:1,response_style:"balanced",custom_system_prompt:"",detailed_responses:!1,theme:DL()},x0={balanced:"Deliver a clear, well-structured, insightful response. Lead with the direct answer or main takeaway, follow with step-by-step reasoning or context, and conclude with practical next steps. Use headings, lists, or tables where they improve readability.",concise:"Provide the most useful answer in the fewest words possible. Lead with the core conclusion, use compact bullet points where helpful, and omit filler while preserving essential caveats and accuracy.",tutor:"Act as an exceptional, patient tutor. Explain complex concepts step by step in plain language, define technical terminology clearly, provide an intuitive analogy or concrete real-world example, and finish with a brief check-for-understanding recap.",expert:"Respond as a senior subject-matter expert. Provide technical rigor, state assumptions and trade-offs explicitly, discuss architectural and edge-case implications, and give production-grade depth without unnecessary filler.",coding:"Act as a principal software engineer. Provide correct, secure, and production-ready code. Use fenced code blocks with appropriate language identifiers. Include clear explanation of edge cases, dependencies, tests, and error handling. Do not invent non-existent APIs.",creative:"Be imaginative, engaging, and articulate while remaining coherent and insightful. Explore multiple perspectives or structured creative options and explain why the best idea stands out."};function Vs(e){return e?e.replace(/<\/?(?:user_input|user_message|assistant|system)[^>]*>/gi,"").trim():""}function Uz(e){return e?e.replace(new RegExp("\\p{Regional_Indicator}{2}","gu"),"").replace(/[\u{1F3F4}][\u{E0020}-\u{E007E}]+\u{E007F}/gu,"").replace(/[\uFE0E\uFE0F]?\u20E3/gu,"").replace(new RegExp("(?:\\p{Extended_Pictographic}|\\p{Emoji_Presentation}|\\p{Emoji_Modifier_Base})(?:[\\uFE0E\\uFE0F]|\\p{Emoji_Modifier})*(?:\\u200D(?:\\p{Extended_Pictographic}|\\p{Emoji_Presentation}|\\p{Emoji_Modifier_Base}|\\p{Emoji_Component})(?:[\\uFE0E\\uFE0F]|\\p{Emoji_Modifier})*)*","gu"),"").replace(/[\p{Emoji_Modifier}\uFE0E\uFE0F\u200D\u200C]/gu,"").replace(/\s+([.,!?;:])/g,"$1").replace(/\s+/g," ").trim():""}function Bz(e){if(!e)return"";let t=Vs(e);return t=t.replace(/```[\s\S]*?```/g," [code snippet omitted] "),t=t.replace(/`([^`]+)`/g,"$1"),t=t.replace(/!\[([^\]]*)\]\([^)]+\)/g,""),t=t.replace(/\[([^\]]+)\]\([^)]+\)/g,"$1"),t=t.replace(/^#{1,6}\s+/gm,""),t=t.replace(/^\s*>\s+/gm,""),t=t.replace(/(\*\*|__)(.*?)\1/g,"$2"),t=t.replace(/(\*|_)(.*?)\1/g,"$2"),t=t.replace(/^[ \t]*[-*_]{3,}[ \t]*$/gm,""),t=t.replace(/\|/g," "),t=Uz(t),t=t.replace(/\s+/g," ").trim(),t}function v0(e){var r;const t=["You are ELIZA AI, a helpful, accurate, and conversational AI assistant. Answer the user's actual question directly.","IDENTITY RULES:","- Your name is strictly 'ELIZA AI' (or 'Eliza AI'). If asked who you are or what your name is, state: 'I am ELIZA AI, your advanced conversational AI assistant.'","- Never state you do not have an identity or name.","","FORMATTING & RESPONSE RULES:","- Produce clean, well-structured Markdown that can be rendered directly by the frontend.","- Adapt the structure and length to the question: simple questions deserve concise answers (1-3 sentences, no unnecessary headings); complex questions deserve detailed, organized explanations.","- Headings: Use '# Title' or '## Section' only when appropriate. Never generate repetitive headings.","- Paragraphs: One main idea per short paragraph with blank lines between them. Explain technical terms in simple English.","- Lists: Use bullet points for features, items, and collections. Use numbered lists for sequential steps and workflows.","- Bold formatting: Use bold for important terms, definitions, and key takeaways. Do not bold entire paragraphs.","- Code: Use inline `code` for identifiers. Always use fenced code blocks with language identifiers (e.g., ```python) for code examples, with correct indentation.","- Tables: Use Markdown tables (| Col 1 | Col 2 |) when comparing items or displaying structured tabular data.","- Troubleshooting: Clearly state the problem, cause, solution, and verification steps.","- Avoid filler, repetition, excessive bolding, and generic disclaimers. Maintain conversation context across follow-ups."].join(`
`),n=e.detailed_responses?"Provide thorough, comprehensive answers with practical examples, edge cases, and actionable next steps.":"Keep the response appropriately sized and focused on the core request without unnecessary filler.";return[t,x0[e.response_style]||x0.balanced,n,(r=e.custom_system_prompt)==null?void 0:r.trim()].filter(Boolean).join(`

`)}function Qc(e,t,n,r){if(typeof window>"u")return!1;const i=Bz(e);return!i||!i.trim()?!1:(zk(i,t,{onStart:n,onEnd:r}),!0)}const Vz=C.forwardRef(function({accessData:t,freeQuestionsCount:n=0,onQuestionUsed:r,onRequestEmailGate:i,onOpenFeedback:s,isModalActive:a=!1},o){const[l,u]=C.useState([]),[d,f]=C.useState(""),[p,h]=C.useState("idle"),[y,b]=C.useState(!1),[S,g]=C.useState(!1),[m,x]=C.useState([]),[v,E]=C.useState(zz),[w,I]=C.useState(null),[P,R]=C.useState([]),[_,j]=C.useState(""),[U,q]=C.useState(!1),[Q,H]=C.useState(!1),[ue,Y]=C.useState(!1),[L,V]=C.useState(!1),[k,X]=C.useState(!0),[ee,A]=C.useState(!1),[se,be]=C.useState(!1),[ie,Ce]=C.useState(!0),Me=C.useRef(null),Ke=C.useRef(null);C.useRef(null);const Ve=C.useRef(0);C.useImperativeHandle(o,()=>({sendPendingMessage:()=>{},stopVoiceAndMic:()=>{me(),ge()}}));const et=C.useMemo(()=>{var z,B,$,G;const M=(z=v.default_model)==null?void 0:z.trim();if(v.default_provider==="auto"){const oe=m.find(Ae=>Ae.available),Fe=((B=oe==null?void 0:oe.name)==null?void 0:B.toUpperCase())||"AUTO";return M?`${Fe} · ${M.toUpperCase()}`:"AUTO ROUTING"}const N=m.find(oe=>oe.id===v.default_provider),T=(($=N==null?void 0:N.name)==null?void 0:$.toUpperCase())||((G=v.default_provider)==null?void 0:G.toUpperCase())||"MANUAL";return M?`${T} · ${M.toUpperCase()}`:T},[m,v.default_provider,v.default_model]),Ye=C.useCallback(async(M=!1)=>{try{const[N,T,z,B]=await Promise.all([Pn.health(),Pn.providers(),Pn.settings(),Pn.conversations()]);q(N.status==="ok"),H(!1),Ve.current=0,x(T.providers||[]),E($=>{let G=$.theme;try{const oe=localStorage.getItem("eliza_user_selected_theme");oe?G=oe:$.theme?G=$.theme:z.theme&&(G=z.theme)}catch{}return{...$,...z,theme:G}}),R(B.conversations||[]),j("")}catch{q(!1);const N=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1");!N&&(M||Ve.current<12)?(H(!0),Ve.current+=1):(M||m.length===0)&&(H(!1),j(N?"Backend unavailable. Please start the FastAPI backend server and refresh.":"Backend unavailable. Please verify that the backend on Render is active."))}},[m.length]);C.useEffect(()=>{Ye(!0);const M=setInterval(()=>Ye(!1),25e3);return()=>clearInterval(M)},[Ye]),C.useEffect(()=>{if(!Q)return;const M=setInterval(()=>{Ye(!1)},4e3);return()=>clearInterval(M)},[Q,Ye]),C.useEffect(()=>{Me.current&&(Me.current.scrollTop=Me.current.scrollHeight)},[l,p]);const me=C.useCallback(()=>{Yl(),p==="speaking"&&h("idle")},[p]),Ft=C.useCallback(M=>{if(M&&M.stopPropagation&&M.stopPropagation(),typeof window<"u"&&"speechSynthesis"in window)try{const N=new SpeechSynthesisUtterance("");N.volume=0,window.speechSynthesis.speak(N)}catch{}V(N=>{const T=!N;return T&&me(),T})},[me]),Tn=C.useCallback(async()=>{const M=window.SpeechRecognition||window.webkitSpeechRecognition;if(!M){j("Speech recognition is not supported in this browser. Please use Chrome or Safari over HTTPS.");return}if(me(),typeof window<"u"&&"speechSynthesis"in window)try{const N=new SpeechSynthesisUtterance("");N.volume=0,window.speechSynthesis.speak(N)}catch{}if(typeof navigator<"u"&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)try{(await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(T=>T.stop())}catch(N){if(N.name==="NotAllowedError"||N.name==="PermissionDeniedError"){j("Microphone permission was denied. Please allow microphone access in your browser settings.");return}}try{const N=new M;N.continuous=!1,N.interimResults=!0,N.maxAlternatives=1,N.lang=v.speech_recognition_lang||"en-IN",N.onstart=()=>{Y(!0),h("listening"),j("")},N.onresult=T=>{const z=Array.from(T.results).map(B=>B[0].transcript).join("");f(z)},N.onerror=T=>{Y(!1),h("idle"),T.error==="not-allowed"||T.error==="service-not-allowed"?j("Microphone not eligible. Please ensure HTTPS or localhost and allow microphone permissions."):T.error!=="no-speech"&&j(`Microphone error: ${T.error}`)},N.onend=()=>{Y(!1),h("idle")},Ke.current=N,N.start()}catch(N){Y(!1),h("idle"),j(N.message||"Failed to start microphone.")}},[me]),ge=C.useCallback(()=>{Ke.current&&Ke.current.stop(),Y(!1),h("idle")},[]);C.useEffect(()=>{a&&(me(),ge())},[a,me,ge]),C.useEffect(()=>{(y||S||se)&&me()},[y,S,se,me]);const _n=M=>{const N=M.target.value;if(k){const T=N.slice(-1);if(/[\s.,?!]/.test(T)){const z=Oz(N);f(z);return}}f(N)},fn=()=>{if(!d.trim())return;const M=Mo(d);f(M),A(!0),setTimeout(()=>A(!1),2e3)},D=async M=>{var $,G,oe,Fe,Ae;let N=(typeof M=="string"?M:d).trim();if(!N||p==="thinking")return;if(k&&(N=Mo(N)),f(""),!Aa()&&n>=1&&(me(),ge(),i)){i();return}j(""),me();const z={role:"user",content:N,created_at:new Date().toISOString()},B=[...l,z];u(B),h("thinking");try{const $e=Aa();let Re;$e?(Re=await Ia.submitQuestion({message:N,provider:v.default_provider||"auto",model:v.default_model||void 0,routing_mode:v.default_provider==="auto"?"auto":"manual",system_prompt:v0(v),conversation_id:w,history:l.slice(-10)}),r&&Re.remainingQuestions!==void 0&&r(Re.remainingQuestions,Re.blocked,Re.blockedUntil)):(Re=await Pn.chat({message:N,provider:v.default_provider||"auto",model:v.default_model||void 0,routing_mode:v.default_provider==="auto"?"auto":"manual",system_prompt:v0(v),conversation_id:w,history:l.slice(-10)}),r&&r(2,!1,null));const Lr={role:"assistant",content:Vs(Re.answer),provider:Re.provider,model:Re.model,created_at:Re.created_at||new Date().toISOString()};u([...B,Lr]),I(Re.conversation_id),h("idle");const Dr=Re.remainingQuestions!==void 0&&(Re.remainingQuestions<=0||Re.blocked)||(t==null?void 0:t.blocked)||(t==null?void 0:t.remainingQuestions)!==void 0&&t.remainingQuestions<=0;v.auto_speak&&!L&&!a&&!Dr?Qc(Re.answer,v,()=>h("speaking"),()=>h("idle")):me()}catch($e){if(me(),ge(),$e.data&&($e.data.blocked||$e.status===403||($=$e.message)!=null&&$.includes("limit"))){const ct=((oe=(G=$e.data)==null?void 0:G.detail)==null?void 0:oe.blockedUntil)||((Fe=$e.data)==null?void 0:Fe.blockedUntil);r&&r(0,!0,ct)}h("idle");const Lr=!$e.status&&($e.message==="Failed to fetch"||((Ae=$e.message)==null?void 0:Ae.includes("NetworkError"))||$e.name==="TypeError")?"Network connection issue. Please check your connection or retry in a moment.":$e.message||"Failed to reach AI provider.",Dr={role:"assistant",content:Lr,error:!0,created_at:new Date().toISOString()};u([...B,Dr]),j(Lr)}},de=()=>{me(),u([]),I(null),j(""),h("idle")},ne=async M=>{var N,T,z,B;try{me();const $=await Pn.conversation(M);u($.messages||[]),I($.id),g(!1),j("")}catch($){if($.data&&($.data.blocked||$.status===403||(N=$.message)!=null&&N.includes("limit"))){const G=((z=(T=$.data)==null?void 0:T.detail)==null?void 0:z.blockedUntil)||((B=$.data)==null?void 0:B.blockedUntil);r&&r(0,!0,G)}j($.message||"Failed to load conversation.")}},pe=async(M,N)=>{var T,z,B,$;N.stopPropagation();try{await Pn.deleteConversation(M),R(G=>G.filter(oe=>oe.id!==M)),w===M&&de()}catch(G){if(G.data&&(G.data.blocked||G.status===403||(T=G.message)!=null&&T.includes("limit"))){const oe=((B=(z=G.data)==null?void 0:z.detail)==null?void 0:B.blockedUntil)||(($=G.data)==null?void 0:$.blockedUntil);r&&r(0,!0,oe)}j(G.message||"Failed to delete conversation.")}},yt=async M=>{M.theme&&$k(M.theme);const N={...v,...M};E(N);try{await Pn.saveSettings(M)}catch{}},An=M=>{navigator.clipboard.writeText(M)},Ot=()=>{const M=l.map(B=>`[${B.role.toUpperCase()}] ${B.created_at||""}
${B.content}
`).join(`
---

`),N=new Blob([M],{type:"text/plain"}),T=URL.createObjectURL(N),z=document.createElement("a");z.href=T,z.download="eliza-conversation.txt",z.click(),URL.revokeObjectURL(T)};return c.jsxs("main",{className:`app-shell theme-${v.theme||"green"}`,children:[c.jsx("div",{className:"scanlines","aria-hidden":"true"}),c.jsxs("header",{className:"topbar",children:[c.jsxs("div",{className:"brand-lockup",children:[c.jsx("div",{className:"brand-mark",children:c.jsx(qd,{size:20})}),c.jsxs("div",{children:[c.jsxs("div",{className:"brand-name",children:["ELIZA",c.jsx("span",{children:"AI"})]}),c.jsx("div",{className:"brand-subtitle",children:"CONVERSATIONAL INTELLIGENCE"})]})]}),c.jsxs("div",{className:"top-status",children:[c.jsx("span",{className:`status-dot ${U?"online":""}`}),U?"SYSTEM ONLINE":"BACKEND OFFLINE",c.jsx("span",{className:"status-divider"}),et,t&&c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"status-divider"}),c.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"5px",padding:"2px 8px",borderRadius:"6px",background:"rgba(192, 132, 252, 0.15)",border:"1px solid rgba(192, 132, 252, 0.35)",color:"#c084fc",fontSize:"11px",fontFamily:"'DM Mono', monospace",fontWeight:"700"},title:`Account: ${t.email||""}`,children:["QUESTIONS REMAINING: ",t.remainingQuestions??t.remaining_questions??0,"/3"]})]})]}),c.jsxs("div",{className:"top-actions",children:[c.jsx("button",{className:"icon-button",onClick:()=>b(!0),title:"Settings","aria-label":"Settings",children:c.jsx(y_,{size:17})}),s&&c.jsxs("button",{className:"icon-button",onClick:s,title:"Give Feedback","aria-label":"Give Feedback",style:{display:"inline-flex",alignItems:"center",gap:"4px",width:"auto",padding:"8px 10px",fontSize:"12px",color:"#c084fc",borderColor:"rgba(192, 132, 252, 0.35)",background:"rgba(192, 132, 252, 0.08)"},children:[c.jsx(a1,{size:15}),c.jsx("span",{children:"Feedback"})]})]})]}),S&&c.jsxs("aside",{className:"history-panel",children:[c.jsxs("div",{className:"history-head",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"MEMORY BANK"}),c.jsx("h3",{children:"Conversations"})]}),c.jsx("button",{className:"icon-button",onClick:()=>g(!1),"aria-label":"Close history",children:c.jsx(It,{size:16})})]}),P.length===0?c.jsx("p",{className:"empty-history",children:"No saved conversations yet."}):P.map(M=>{var N;return c.jsxs("div",{className:"history-item",role:"button",tabIndex:0,onClick:()=>ne(M.id),onKeyDown:T=>T.key==="Enter"&&ne(M.id),children:[c.jsxs("div",{className:"history-item-copy",children:[c.jsx("b",{children:M.title||"Untitled conversation"}),c.jsxs("small",{children:[((N=M.messages)==null?void 0:N.length)||0," messages"]})]}),c.jsx("button",{className:"tiny-icon",onClick:T=>pe(M.id,T),title:"Delete conversation","aria-label":"Delete conversation",children:c.jsx(It,{size:14})})]},M.id)})]}),c.jsxs("section",{className:"hero-layout",children:[c.jsxs("div",{className:"system-meta",children:[c.jsx("span",{children:"FIG. 01"}),c.jsx("span",{children:"NEURAL INTERFACE"}),c.jsx("span",{children:"BUILD 2.0.0"})]}),c.jsxs("div",{className:"hero-center",children:[c.jsx(RL,{status:p}),c.jsxs("div",{className:"system-title",children:[c.jsx("span",{className:"eyebrow",children:"PERSONAL AI TERMINAL"}),c.jsxs("h1",{children:["How may I ",c.jsx("em",{children:"help you?"})]}),c.jsx("p",{children:"Ask a question. Start a conversation. Explore an idea."})]}),c.jsxs("div",{className:`state-pill state-${p}`,children:[c.jsx("span",{className:"state-light"}),p==="idle"?"AWAITING INPUT":p==="thinking"?"PROCESSING REQUEST":p==="listening"?"LISTENING TO YOU":"SPEAKING RESPONSE",c.jsx("span",{className:"state-pulse",children:p==="thinking"?"•••":p==="speaking"?c.jsx(e1,{size:14}):null})]})]}),c.jsxs("div",{className:"system-meta bottom-meta",children:[c.jsxs("span",{children:["VOICE I/O ","SpeechSynthesisUtterance"in window?"AVAILABLE":"LIMITED"]}),c.jsxs("span",{children:["MODEL ROUTING: ",et]}),c.jsx("span",{children:"LATENCY: LIVE"})]})]}),c.jsxs("section",{className:"conversation-area",children:[c.jsxs("div",{className:"conversation-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"eyebrow",children:"LIVE TRANSMISSION"}),c.jsx("span",{className:"message-count",children:l.length?`${l.length} MESSAGES`:"NEW SESSION"})]}),c.jsxs("div",{className:"conversation-tools",style:{display:"flex",alignItems:"center",gap:"6px"},children:[c.jsxs("button",{className:"text-action",onClick:Ot,disabled:!l.length,children:["Export ",c.jsx(l_,{size:13})]}),c.jsx("button",{className:"text-action",onClick:()=>u([]),disabled:!l.length,children:"Clear"}),c.jsx("button",{className:"text-action voice-toggle-btn",type:"button",onClick:Ft,onTouchEnd:M=>{M.preventDefault(),Ft(M)},title:L?"Voice response: OFF (Click to turn ON)":"Voice response: ON (Click to turn OFF)","aria-label":L?"Voice response is OFF":"Voice response is ON",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"28px",height:"28px",minWidth:"28px",padding:0,borderRadius:"6px",background:L?"rgba(255, 255, 255, 0.03)":"rgba(255, 255, 255, 0.08)",borderColor:L?"rgba(255, 255, 255, 0.08)":"rgba(255, 255, 255, 0.18)",color:L?"rgba(226, 238, 230, 0.35)":"#e2eee6",cursor:"pointer",touchAction:"manipulation"},children:L?c.jsx(S_,{size:14}):c.jsx(Qo,{size:14})})]})]}),c.jsxs("div",{className:"transcript",ref:Me,children:[l.length===0?c.jsxs("div",{className:"welcome-line",children:[c.jsx("span",{className:"prompt-symbol",children:"›"}),c.jsx("span",{children:"Terminal ready. Ask anything or click the microphone to speak."}),c.jsx("span",{className:"cursor-block"})]}):l.map((M,N)=>c.jsxs("article",{className:`message message-${M.role} ${M.error?"message-error":""}`,children:[c.jsx("div",{className:"message-avatar",children:M.role==="assistant"?c.jsx(qd,{size:14}):"YOU"}),c.jsxs("div",{className:"message-body",children:[c.jsxs("div",{className:"message-meta",children:[M.role==="assistant"?"ELIZA AI":"USER",c.jsx("span",{children:M.created_at?new Date(M.created_at).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"NOW"}),M.model&&c.jsxs("span",{className:"model-chip",children:[M.provider," / ",M.model]})]}),M.role==="assistant"&&!M.error?c.jsx(Mz,{content:Vs(M.content)}):c.jsx("p",{children:Vs(M.content)}),M.role==="assistant"&&!M.error&&c.jsxs("div",{className:"message-actions",children:[c.jsxs("button",{onClick:()=>An(Vs(M.content)),title:"Copy response",children:[c.jsx(r1,{size:13})," Copy"]}),c.jsxs("button",{onClick:()=>Qc(M.content,v,()=>h("speaking"),()=>h("idle")),title:"Read response aloud",children:[c.jsx(Qo,{size:13})," Speak"]})]})]})]},`${M.created_at||"msg"}-${N}`)),p==="thinking"&&c.jsxs("div",{className:"thinking-line",children:[c.jsxs("span",{className:"thinking-dots",children:[c.jsx("i",{}),c.jsx("i",{}),c.jsx("i",{})]})," ","Synthesizing response..."]})]}),Q&&!U&&c.jsxs("div",{className:"waking-banner",children:[c.jsx("span",{className:"waking-pulse"}),c.jsx("span",{children:"Connecting to cloud backend (Render server waking up from sleep, ~30s)..."}),c.jsx("button",{type:"button",onClick:()=>Ye(!0),className:"btn-retry-quick",children:"Retry"})]}),_&&c.jsxs("div",{className:"error-banner",children:[c.jsx("span",{children:_}),c.jsxs("div",{className:"error-banner-actions",children:[c.jsx("button",{type:"button",onClick:()=>{j(""),Ye(!0)},className:"btn-retry-banner",children:"Retry"}),c.jsx("button",{type:"button",onClick:()=>j(""),"aria-label":"Dismiss error",children:c.jsx(It,{size:14})})]})]}),c.jsxs("form",{className:"input-console",onSubmit:M=>{M.preventDefault();const N=k?Mo(d):d;D(N)},children:[c.jsx("div",{className:"input-prefix",children:"›"}),c.jsx("textarea",{rows:"1",value:d,onChange:_n,onKeyDown:M=>{if(M.key==="Enter"&&!M.shiftKey){M.preventDefault();const N=k?Mo(d):d;D(N)}},placeholder:"Ask me anything, or speak to begin...","aria-label":"Your question",spellCheck:"true",autoCorrect:"on",autoCapitalize:"sentences",lang:"en"}),c.jsxs("div",{className:"input-actions",children:[d.trim()&&c.jsx("button",{type:"button",className:`console-icon ${ee?"active":""}`,onClick:fn,title:ee?"Grammar corrected!":"Fix grammar & spelling now","aria-label":"Fix grammar and spelling now",children:c.jsx(Kp,{size:16})}),p==="speaking"&&c.jsx("button",{type:"button",className:"console-icon",onClick:me,title:"Stop speaking","aria-label":"Stop speaking",children:c.jsx(m1,{size:16})}),c.jsx("button",{type:"button",className:`console-icon ${ue?"active":""}`,onClick:ue?ge:Tn,onTouchEnd:M=>{M.preventDefault(),ue?ge():Tn()},style:{touchAction:"manipulation"},title:ue?"Stop listening":"Speak your question","aria-label":ue?"Stop listening":"Speak your question",children:ue?c.jsx(h_,{size:17}):c.jsx(Kd,{size:17})}),c.jsx("button",{type:"submit",className:"send-button",disabled:!d.trim()||p==="thinking","aria-label":"Send message",children:c.jsx(c1,{size:16})})]})]}),c.jsxs("div",{className:"console-foot",children:[c.jsxs("span",{children:[c.jsx("span",{className:"tiny-led"})," ENCRYPTED LOCAL CONNECTION"]}),c.jsxs("span",{children:["ENTER TO SEND ",c.jsx("i",{children:"·"})," SHIFT + ENTER FOR NEW LINE"]}),c.jsxs("span",{onClick:()=>X(M=>!M),style:{cursor:"pointer"},title:"Click to toggle auto-grammar correction",children:["AUTO-GRAMMAR ",k?"ENABLED":"OFF"]})]})]}),c.jsxs("footer",{className:"app-footer",children:[c.jsxs("span",{children:["ELIZA AI ",c.jsx("b",{children:"©"})," 2026"]}),c.jsx("span",{children:"AI makes mistakes, but every mistake drives improvement"}),c.jsx("span",{children:"DEVELOPED BY AKHIL THADAKA · READY TO WORK & FREELANCE · CONTACT: 9121751697"})]}),se&&c.jsxs("div",{className:"accessibility-panel",role:"dialog","aria-label":"Accessibility",children:[c.jsxs("div",{className:"accessibility-head",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"ACCESSIBILITY"}),c.jsx("h3",{children:"Voice & Interaction"})]}),c.jsx("button",{className:"icon-button",onClick:()=>be(!1),"aria-label":"Close",children:c.jsx(It,{size:16})})]}),c.jsxs("label",{className:"toggle-row",children:[c.jsxs("span",{children:[c.jsx("b",{children:"Auto-grammar correction"}),c.jsx("small",{children:"Fix spelling and grammar as you type"})]}),c.jsx("input",{type:"checkbox",checked:k,onChange:M=>X(M.target.checked)})]}),c.jsxs("label",{className:"toggle-row",children:[c.jsxs("span",{children:[c.jsx("b",{children:"Show navigation bar"}),c.jsx("small",{children:"Toggle the quick-action navbar"})]}),c.jsx("input",{type:"checkbox",checked:ie,onChange:M=>Ce(M.target.checked)})]}),c.jsxs("label",{className:"toggle-row",children:[c.jsxs("span",{children:[c.jsx("b",{children:"Mute voice output"}),c.jsx("small",{children:"Disable text-to-speech"})]}),c.jsx("input",{type:"checkbox",checked:L,onChange:M=>{V(M.target.checked),M.target.checked||me()}})]}),c.jsxs("div",{className:"accessibility-actions",children:[c.jsxs("button",{className:"text-action",type:"button",onClick:Tn,children:[c.jsx(Kd,{size:14})," Test microphone"]}),c.jsxs("button",{className:"text-action",type:"button",onClick:()=>Qc("Hello, I am ELIZA AI.",v,()=>h("speaking"),()=>h("idle")),children:[c.jsx(Qo,{size:14})," Test voice"]})]})]}),c.jsx(ML,{open:y,onClose:()=>b(!1),providers:m,settings:v,onChange:yt})]})});function $z(){const[e,t]=C.useState(!0),[n,r]=C.useState({isAnonymousFree:!0,remainingQuestions:3,remaining_questions:3,blocked:!1,email:""}),[i,s]=C.useState(!1),[a,o]=C.useState(""),[l,u]=C.useState(!1),[d,f]=C.useState(!1),[p,h]=C.useState(()=>{try{return Number(sessionStorage.getItem("eliza_free_q_count")||"0")}catch{return 0}}),y=C.useRef(null),b=C.useCallback(async()=>{const E=Aa(),w=Ag();if(!E||!w){r({isAnonymousFree:!0,remainingQuestions:Math.max(0,3-p),remaining_questions:Math.max(0,3-p),blocked:!1,email:""}),t(!1);return}try{const I=await Ia.getStatus();r({...I,email:w,isAnonymousFree:!1}),(I.blocked||I.remainingQuestions<=0)&&f(!0)}catch{C_(),r({isAnonymousFree:!0,remainingQuestions:Math.max(0,3-p),remaining_questions:Math.max(0,3-p),blocked:!1,email:""})}finally{t(!1)}},[p]);C.useEffect(()=>{b();const E=typeof window<"u"&&window.location.hash||"";if(E.includes("access_token=")){const I=new URLSearchParams(E.replace(/^#/,"")).get("access_token");I&&(window.history.replaceState(null,"",window.location.pathname+window.location.search),t(!0),fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:`Bearer ${I}`}}).then(P=>P.json()).then(async P=>{if(P&&P.email){const R=await Ia.googleLogin({email:P.email,name:P.name,picture:P.picture});sessionStorage.getItem("eliza_pending_q"),sessionStorage.removeItem("eliza_pending_q"),m(R)}}).catch(P=>{console.error("Failed to verify Google email:",P)}).finally(()=>{t(!1)}))}},[b]);const S=n.blocked||n.remainingQuestions<=0,g=!!(i||S&&d||l);C.useEffect(()=>{var E,w;if(g){if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}(w=(E=y.current)==null?void 0:E.stopVoiceAndMic)==null||w.call(E)}},[g]);const m=E=>{if(s(!1),r({...E,isAnonymousFree:!1}),E.blocked||E.remainingQuestions<=0){f(!0);return}o("");try{sessionStorage.removeItem("eliza_pending_q")}catch{}},x=(E,w,I)=>{var R,_;const P=w||E<=0;if(P){if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}(_=(R=y.current)==null?void 0:R.stopVoiceAndMic)==null||_.call(R)}if(r(j=>({...j,remainingQuestions:E,remaining_questions:E,blocked:P,blockedUntil:I||(j==null?void 0:j.blockedUntil)})),!Aa()){const j=p+1;h(j);try{sessionStorage.setItem("eliza_free_q_count",String(j))}catch{}}P&&(f(!0),u(!0))},v=()=>{var E,w;if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}(w=(E=y.current)==null?void 0:E.stopVoiceAndMic)==null||w.call(E),o(""),s(!0)};return e?c.jsxs("div",{className:"app-init-loader",children:[c.jsx("div",{className:"init-spinner"}),c.jsx("span",{children:"Initializing Neural Interface..."}),c.jsx("style",{children:`
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
        `})]}):c.jsxs(c.Fragment,{children:[c.jsx(Vz,{ref:y,accessData:n,freeQuestionsCount:p,onQuestionUsed:x,onRequestEmailGate:v,onOpenFeedback:()=>u(!0),isModalActive:g}),i&&c.jsx(i5,{isModal:!0,onAccessGranted:m,onShowFeedback:E=>{s(!1),r(E),u(!0)},onClose:()=>s(!1)}),S&&d&&c.jsx(s5,{blockedUntil:n.blockedUntil,onGiveFeedback:()=>u(!0)}),l&&c.jsx(o5,{email:n.email||Ag()||"visitor@trial",onClose:()=>u(!1),onSubmitted:()=>{u(!1),S&&f(!0)}})]})}function X2(){try{return localStorage.getItem("eliza_admin_token")||""}catch{return""}}function Hz(e){try{e?localStorage.setItem("eliza_admin_token",e):localStorage.removeItem("eliza_admin_token")}catch{}}function om(){try{localStorage.removeItem("eliza_admin_token")}catch{}}async function Ct(e,t={}){const n=X2(),r={"Content-Type":"application/json",...n?{Authorization:`Bearer ${n}`}:{},...t.headers||{}},i=await rs(`${ns}${e}`,{...t,headers:r}),s=await i.json().catch(()=>({}));if(!i.ok){i.status===401&&typeof window<"u"&&om();const a=s.detail||s.message||`Admin request failed (${i.status})`,o=new Error(a);throw o.status=i.status,o.data=s,o}return s}const st={login:async(e,t)=>{const n=await Ct("/api/v1/admin/login",{method:"POST",body:JSON.stringify({username:e,password:t})});return n.token&&Hz(n.token),n},me:async()=>Ct("/api/v1/admin/me"),logout:async()=>{try{await Ct("/api/v1/admin/logout",{method:"POST"})}finally{om()}},getOverview:async(e="last30days",t=null,n=null)=>{const r=new URLSearchParams({preset:e});return t&&r.append("start_date",t),n&&r.append("end_date",n),Ct(`/api/v1/admin/dashboard/overview?${r.toString()}`)},getEmails:async(e={})=>{const t=new URLSearchParams;return Object.entries(e).forEach(([n,r])=>{r!=null&&r!==""&&t.append(n,r)}),Ct(`/api/v1/admin/dashboard/emails?${t.toString()}`)},getCustomerDetail:async e=>Ct(`/api/v1/admin/dashboard/emails/${encodeURIComponent(e)}`),getFeedback:async(e={})=>{const t=new URLSearchParams;return Object.entries(e).forEach(([n,r])=>{r!=null&&r!==""&&t.append(n,r)}),Ct(`/api/v1/admin/dashboard/feedback?${t.toString()}`)},updateFeedback:async(e,{status:t,admin_notes:n})=>Ct(`/api/v1/admin/dashboard/feedback/${encodeURIComponent(e)}`,{method:"PATCH",body:JSON.stringify({status:t,admin_notes:n})}),unblockCustomer:async e=>Ct(`/api/v1/admin/customers/${encodeURIComponent(e)}/unblock`,{method:"POST"}),deleteCustomer:async e=>Ct(`/api/v1/admin/customers/${encodeURIComponent(e)}`,{method:"DELETE"}),bulkDeleteCustomers:async e=>Ct("/api/v1/admin/customers/bulk-delete",{method:"POST",body:JSON.stringify({customer_ids:e})}),deleteFeedback:async e=>Ct(`/api/v1/admin/feedback/${encodeURIComponent(e)}`,{method:"DELETE"}),bulkDeleteFeedback:async e=>Ct("/api/v1/admin/feedback/bulk-delete",{method:"POST",body:JSON.stringify({feedback_ids:e})})};function Wz(){const e=bu(),[t,n]=C.useState(""),[r,i]=C.useState(""),[s,a]=C.useState(!1),[o,l]=C.useState(""),u=async d=>{if(d.preventDefault(),!t.trim()||!r){l("Please provide both username and password.");return}l(""),a(!0);try{await st.login(t.trim(),r),e("/admin/dashboard",{replace:!0})}catch(f){l(f.message||"Invalid credentials. Please verify username and password.")}finally{a(!1)}};return c.jsxs("div",{className:"admin-login-wrapper theme-violet",children:[c.jsx("div",{className:"login-glow","aria-hidden":"true"}),c.jsxs("div",{className:"login-card",children:[c.jsxs("div",{className:"login-header",children:[c.jsx("div",{className:"icon-shield-wrap",children:c.jsx(f1,{size:28})}),c.jsxs("h1",{children:["ELIZA",c.jsx("span",{children:"AI"})]}),c.jsx("span",{className:"login-badge",children:"ADMINISTRATIVE CONSOLE"}),c.jsx("p",{className:"login-desc",children:"Sign in with administrator credentials to manage access, review analytics, and inspect feedback."})]}),c.jsxs("form",{onSubmit:u,className:"login-form",children:[c.jsxs("div",{className:"login-field",children:[c.jsx("label",{htmlFor:"admin-user",children:"Administrator Username"}),c.jsxs("div",{className:"input-with-icon",children:[c.jsx(k_,{size:16,className:"field-icon"}),c.jsx("input",{id:"admin-user",type:"text",value:t,onChange:d=>{n(d.target.value),o&&l("")},placeholder:"admin",autoComplete:"username",autoFocus:!0,disabled:s})]})]}),c.jsxs("div",{className:"login-field",children:[c.jsx("label",{htmlFor:"admin-pass",children:"Password"}),c.jsxs("div",{className:"input-with-icon",children:[c.jsx(s1,{size:16,className:"field-icon"}),c.jsx("input",{id:"admin-pass",type:"password",value:r,onChange:d=>{i(d.target.value),o&&l("")},placeholder:"••••••••••••",autoComplete:"current-password",disabled:s})]})]}),o&&c.jsxs("div",{className:"login-error",children:[c.jsx($p,{size:16}),c.jsx("span",{children:o})]}),c.jsx("button",{type:"submit",className:"btn-admin-submit",disabled:s||!t.trim()||!r,children:s?c.jsx("span",{children:"Authenticating..."}):c.jsxs(c.Fragment,{children:[c.jsx("span",{children:"Sign In to Dashboard"}),c.jsx(o_,{size:16})]})})]}),c.jsx("div",{className:"login-foot",children:c.jsxs(Ca,{to:"/",className:"link-back-agent",children:[c.jsx(Up,{size:14}),c.jsx("span",{children:"Return to Voice Assistant"})]})})]}),c.jsx("style",{children:`
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
      `})]})}function lm({children:e,title:t,subtitle:n}){const r=bu(),i=dn(),[s,a]=C.useState(null),[o,l]=C.useState(!0);C.useEffect(()=>{if(!X2()){r("/admin/login",{replace:!0});return}st.me().then(p=>{a(p),l(!1)}).catch(()=>{om(),r("/admin/login",{replace:!0})})},[r]);const u=async()=>{await st.logout(),r("/admin/login")};if(o)return c.jsxs("div",{className:"admin-loading-screen",children:[c.jsx("div",{className:"admin-spinner"}),c.jsx("span",{children:"Authenticating administrator session..."}),c.jsx("style",{children:`
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
        `})]});const d=[{label:"Overview",path:"/admin/dashboard",icon:f_},{label:"Email Access & Analytics",path:"/admin/emails",icon:y1},{label:"Feedback Management",path:"/admin/feedback",icon:o1}];return c.jsxs("div",{className:"admin-container theme-violet",children:[c.jsxs("header",{className:"admin-topbar",children:[c.jsxs("div",{className:"topbar-left",children:[c.jsxs("div",{className:"admin-brand",children:[c.jsx("div",{className:"brand-badge-icon",children:c.jsx(f1,{size:18})}),c.jsxs("div",{children:[c.jsxs("div",{className:"admin-title",children:["ELIZA",c.jsx("span",{children:"AI"})," ",c.jsx("span",{className:"tag-admin",children:"ADMIN"})]}),c.jsx("div",{className:"admin-subtitle",children:"ACCESS CONTROL & ANALYTICS"})]})]}),c.jsx("nav",{className:"admin-nav-tabs",children:d.map(f=>{const p=f.icon,h=i.pathname===f.path;return c.jsxs(Ca,{to:f.path,className:`nav-tab-link ${h?"active":""}`,children:[c.jsx(p,{size:16}),c.jsx("span",{children:f.label})]},f.path)})})]}),c.jsxs("div",{className:"topbar-right",children:[c.jsxs(Ca,{to:"/",className:"btn-back-to-app",title:"Open Voice Agent Interface",children:[c.jsx(Up,{size:14}),c.jsx("span",{children:"Voice Agent"})]}),c.jsxs("div",{className:"user-profile-badge",children:[c.jsx("span",{className:"dot-active"}),c.jsx("span",{className:"user-name",children:(s==null?void 0:s.username)||"Admin"})]}),c.jsxs("button",{type:"button",className:"btn-logout",onClick:u,title:"Sign out of Admin Dashboard",children:[c.jsx(p_,{size:16}),c.jsx("span",{children:"Sign Out"})]})]})]}),c.jsxs("main",{className:"admin-content-shell",children:[(t||n)&&c.jsx("div",{className:"page-header-row",children:c.jsxs("div",{children:[t&&c.jsx("h1",{className:"page-title",children:t}),n&&c.jsx("p",{className:"page-subtitle",children:n})]})}),e]}),c.jsx("style",{children:`
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
      `})]})}const Gz=[{id:"today",label:"Today"},{id:"yesterday",label:"Yesterday"},{id:"last7days",label:"Last 7 Days"},{id:"last30days",label:"Last 30 Days"},{id:"thismonth",label:"This Month"},{id:"custom",label:"Custom Range"}];function qz(){const[e,t]=C.useState("last30days"),[n,r]=C.useState(""),[i,s]=C.useState(""),[a,o]=C.useState(null),[l,u]=C.useState(!0),[d,f]=C.useState(""),p=async(S=e,g=n,m=i)=>{u(!0),f("");try{const x=await st.getOverview(S,S==="custom"?g:null,S==="custom"?m:null);o(x)}catch(x){f(x.message||"Failed to load dashboard overview.")}finally{u(!1)}};C.useEffect(()=>{p(e,n,i)},[e]);const h=S=>{S.preventDefault(),n&&i&&p("custom",n,i)},y=(a==null?void 0:a.metrics)||{},b=(a==null?void 0:a.charts)||{};return c.jsxs(lm,{title:"System Overview & Analytics",subtitle:"Real-time access metrics, visitor sessions, and question usage from live database records.",children:[c.jsxs("div",{className:"filter-bar",children:[c.jsx("div",{className:"filter-presets",children:Gz.map(S=>c.jsx("button",{type:"button",className:`preset-btn ${e===S.id?"active":""}`,onClick:()=>t(S.id),children:S.label},S.id))}),e==="custom"&&c.jsxs("form",{onSubmit:h,className:"custom-range-form",children:[c.jsx("input",{type:"date",value:n,onChange:S=>r(S.target.value),className:"date-input","aria-label":"Start date"}),c.jsx("span",{className:"date-sep",children:"to"}),c.jsx("input",{type:"date",value:i,onChange:S=>s(S.target.value),className:"date-input","aria-label":"End date"}),c.jsx("button",{type:"submit",className:"btn-apply-date",children:"Apply"})]}),c.jsxs("button",{type:"button",className:"btn-refresh",onClick:()=>p(),disabled:l,title:"Refresh statistics",children:[c.jsx(qp,{size:14,className:l?"spin":""}),c.jsx("span",{children:"Refresh"})]})]}),d&&c.jsxs("div",{className:"dash-error-banner",children:[c.jsx("span",{children:d}),c.jsx("button",{onClick:()=>p(),children:"Retry"})]}),c.jsxs("div",{className:"metrics-grid",children:[c.jsx(Nn,{title:"Total Unique Email IDs",value:y.total_emails??0,icon:y1,color:"violet"}),c.jsx(Nn,{title:"New Email IDs Today",value:y.new_emails_today??0,icon:w_,color:"emerald"}),c.jsx(Nn,{title:"Unique Visitors Today",value:y.unique_visitors_today??0,icon:Gp,color:"cyan",hint:"Distinct customer IDs seen today"}),c.jsx(Nn,{title:"Total Access Sessions Today",value:y.total_sessions_today??0,icon:Bp,color:"amber",hint:"Total daily visit records today"}),c.jsx(Nn,{title:"Total Accepted Questions Today",value:y.total_questions_today??0,icon:Hp,color:"violet",hint:"Deducted and processed today"}),c.jsx(Nn,{title:"Currently Blocked Email IDs",value:y.currently_blocked??0,icon:d1,color:"crimson",hint:"3/3 questions used in active cycle"}),c.jsx(Nn,{title:"Email IDs Eligible for Access",value:y.eligible_emails??0,icon:u_,color:"emerald",hint:"Active with queries remaining"}),c.jsx(Nn,{title:"Total Feedback Submissions",value:y.total_feedback??0,icon:o1,color:"cyan"}),c.jsx(Nn,{title:"Average Feedback Rating",value:`${y.average_rating??0} / 5`,icon:kr,color:"solar",stars:y.average_rating??0})]}),c.jsxs("div",{className:"charts-grid",children:[c.jsxs("div",{className:"chart-card",children:[c.jsxs("div",{className:"chart-header",children:[c.jsx("h3",{children:"Daily Unique Visitors"}),c.jsx("span",{className:"chart-badge",children:"DISTINCT DAILY CUSTOMERS"})]}),c.jsx(Zc,{data:b.daily_visitors||[],color:"#c084fc",emptyText:"No visitor activity in selected date range."})]}),c.jsxs("div",{className:"chart-card",children:[c.jsxs("div",{className:"chart-header",children:[c.jsx("h3",{children:"Daily New Email Registrations"}),c.jsx("span",{className:"chart-badge",children:"NEW CUSTOMERS ONBOARDED"})]}),c.jsx(Zc,{data:b.daily_registrations||[],color:"#78f6a8",emptyText:"No registrations in selected date range."})]}),c.jsxs("div",{className:"chart-card",children:[c.jsxs("div",{className:"chart-header",children:[c.jsx("h3",{children:"Daily Question Usage"}),c.jsx("span",{className:"chart-badge",children:"ACCEPTED AI QUERIES"})]}),c.jsx(Zc,{data:b.daily_questions||[],color:"#7cecff",emptyText:"No question activity in selected date range."})]}),c.jsxs("div",{className:"chart-card-dual",children:[c.jsxs("div",{className:"chart-half",children:[c.jsxs("div",{className:"chart-header",children:[c.jsx("h3",{children:"Feedback Rating Distribution"}),c.jsx("span",{className:"chart-badge",children:"1 TO 5 STARS"})]}),c.jsx(Kz,{distribution:b.rating_distribution||{}})]}),c.jsxs("div",{className:"chart-half",children:[c.jsxs("div",{className:"chart-header",children:[c.jsx("h3",{children:"Device Distribution"}),c.jsx("span",{className:"chart-badge",children:"VISIT PLATFORMS"})]}),c.jsx(Yz,{devices:b.device_distribution||{}})]})]})]}),c.jsx("style",{children:`
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
      `})]})}function Nn({title:e,value:t,icon:n,color:r,hint:i,stars:s}){return c.jsxs("div",{className:`metric-card color-${r}`,children:[c.jsxs("div",{className:"metric-top",children:[c.jsx("span",{className:"metric-title",children:e}),c.jsx("div",{className:"metric-icon-wrap",children:c.jsx(n,{size:17})})]}),c.jsx("div",{className:"metric-val",children:t}),s!==void 0&&c.jsx("div",{className:"metric-stars",children:[1,2,3,4,5].map(a=>c.jsx(kr,{size:14,fill:a<=Math.round(Number(s)||0)?"#fbbf24":"transparent",color:a<=Math.round(Number(s)||0)?"#fbbf24":"rgba(255,255,255,0.2)"},a))}),i&&c.jsx("span",{className:"metric-hint",children:i})]})}function Zc({data:e=[],color:t="#c084fc",emptyText:n="No data"}){if(!e||e.length===0)return c.jsx("div",{className:"chart-empty",children:n});const r=Math.max(...e.map(s=>s.count||0),1),i=160;return c.jsx("div",{className:"svg-chart-wrap",children:c.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"6px",height:`${i+40}px`,minWidth:`${e.length*32}px`,padding:"10px 0"},children:e.map((s,a)=>{const o=s.count||0,l=Math.max(4,Math.round(o/r*i)),u=s.date?s.date.slice(5):"";return c.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",height:"100%",justifyContent:"flex-end"},title:`${s.date}: ${o}`,children:[c.jsx("span",{style:{fontSize:"10px",color:o>0?"#ffffff":"rgba(255,255,255,0.3)",fontFamily:"DM Mono"},children:o>0?o:""}),c.jsx("div",{style:{width:"100%",maxWidth:"28px",height:`${l}px`,backgroundColor:o>0?t:"rgba(255, 255, 255, 0.05)",borderRadius:"4px 4px 0 0",transition:"height 0.3s ease"}}),c.jsx("span",{style:{fontSize:"10px",color:"rgba(226,238,230,0.5)",fontFamily:"DM Mono",whiteSpace:"nowrap"},children:u})]},a)})})})}function Kz({distribution:e={}}){const t=Object.values(e).reduce((r,i)=>r+i,0)||1,n=[5,4,3,2,1];return c.jsx("div",{className:"rating-bars-wrap",children:n.map(r=>{const i=e[r]||0,s=Math.round(i/t*100);return c.jsxs("div",{className:"rating-bar-row",children:[c.jsxs("span",{className:"star-label",children:[r," ",c.jsx(kr,{size:13,fill:"#fbbf24"})]}),c.jsx("div",{className:"bar-track",children:c.jsx("div",{className:"bar-fill",style:{width:`${s}%`}})}),c.jsx("span",{className:"bar-count",children:i})]},r)})})}function Yz({devices:e={}}){const t=[{key:"desktop",label:"Desktop",icon:l1},{key:"mobile",label:"Mobile",icon:p1},{key:"tablet",label:"Tablet",icon:g1},{key:"unknown",label:"Unknown",icon:Hp}];return c.jsx("div",{className:"devices-wrap",children:t.map(n=>{const r=n.icon,i=e[n.key]||0;return c.jsxs("div",{className:"device-card",children:[c.jsx("div",{className:"device-icon-box",children:c.jsx(r,{size:18})}),c.jsxs("div",{className:"device-info",children:[c.jsx("span",{className:"device-name",children:n.label}),c.jsxs("span",{className:"device-val",children:[i," visits"]})]})]},n.key)})})}function Xz(){var _n,fn,D,de,ne,pe,yt,An,Ot,M,N;const[e,t]=C.useState([]),[n,r]=C.useState(0),[i,s]=C.useState(1),[a,o]=C.useState(1),[l,u]=C.useState(15),[d,f]=C.useState(""),[p,h]=C.useState(""),[y,b]=C.useState(""),[S,g]=C.useState(""),[m,x]=C.useState("newest"),[v,E]=C.useState(""),[w,I]=C.useState(""),[P,R]=C.useState(!0),[_,j]=C.useState(""),[U,q]=C.useState(new Set),[Q,H]=C.useState(!1),[ue,Y]=C.useState(""),[L,V]=C.useState(null),[k,X]=C.useState(null),[ee,A]=C.useState(!1),se=T=>{Y(T),setTimeout(()=>Y(""),4500)},be=async()=>{R(!0),j("");try{const T=await st.getEmails({page:a,per_page:l,search:d.trim(),status:p,device:y,question_usage:S!==""?Number(S):void 0,sort_by:m,start_date:v||void 0,end_date:w||void 0});t(T.items||[]),r(T.total||0),s(T.total_pages||1)}catch(T){j(T.message||"Failed to load email records.")}finally{R(!1)}};C.useEffect(()=>{be()},[a,l,p,y,S,m,v,w]);const ie=T=>{T.preventDefault(),o(1),be()},Ce=()=>{f(""),h(""),b(""),g(""),x("newest"),E(""),I(""),q(new Set),o(1)},Me=T=>{T.target.checked?q(new Set(e.map(z=>z.id))):q(new Set)},Ke=(T,z)=>{z&&z.stopPropagation(),q(B=>{const $=new Set(B);return $.has(T)?$.delete(T):$.add(T),$})},Ve=async(T,z)=>{var B;if(z&&z.stopPropagation(),!!window.confirm("Immediately unblock this customer and restore their 3 questions access?")){H(!0);try{const $=await st.unblockCustomer(T);se($.message||"User unblocked successfully!"),t(G=>G.map(oe=>oe.id===T?{...oe,blocked:!1,access_status:"eligible",remaining_questions:3,questions_used:0,blocked_until:null}:oe)),((B=k==null?void 0:k.customer)==null?void 0:B.id)===T&&X(G=>({...G,customer:{...G.customer,status:"eligible"}}))}catch($){alert("Failed to unblock customer: "+$.message)}finally{H(!1)}}},et=async(T,z,B)=>{if(B&&B.stopPropagation(),!!window.confirm(`Permanently delete customer ${z}? All access periods, questions, and records will be deleted.`)){H(!0);try{await st.deleteCustomer(T),se(`Permanently deleted ${z}`),t($=>$.filter(G=>G.id!==T)),r($=>Math.max(0,$-1)),q($=>{const G=new Set($);return G.delete(T),G}),L===T&&Ft()}catch($){alert("Failed to delete customer: "+$.message)}finally{H(!1)}}},Ye=async()=>{if(U.size!==0&&window.confirm(`Permanently delete ${U.size} selected customer records? This action cannot be undone.`)){H(!0);try{const T=Array.from(U),z=await st.bulkDeleteCustomers(T);se(z.message||`Deleted ${T.length} customers`);const B=new Set(T);t($=>$.filter(G=>!B.has(G.id))),r($=>Math.max(0,$-B.size)),q(new Set),L&&B.has(L)&&Ft()}catch(T){alert("Failed to delete records: "+T.message)}finally{H(!1)}}},me=async T=>{V(T),A(!0);try{const z=await st.getCustomerDetail(T);X(z)}catch(z){alert("Failed to load customer profile: "+z.message)}finally{A(!1)}},Ft=()=>{V(null),X(null)},Tn=async()=>{try{const z=(await st.getEmails({page:1,per_page:2e3,search:d.trim(),status:p,device:y,question_usage:S!==""?Number(S):void 0,sort_by:m,start_date:v||void 0,end_date:w||void 0})).items||e;if(!z.length){alert("No records to export.");return}const $=[["Email","Status","Questions Used","Remaining Questions","First Seen","First Question","Last Active","Visits Count","Device Category","Blocked Until","Period Expires At"].join(","),...z.map(Ae=>[`"${(Ae.email||"").replace(/"/g,'""')}"`,`"${Ae.access_status||(Ae.blocked?"blocked":"active")}"`,Ae.questions_used??0,Ae.remaining_questions??0,`"${Ae.first_seen_at||""}"`,`"${Ae.first_question_at||""}"`,`"${Ae.last_activity_at||""}"`,Ae.visits_count??1,`"${Ae.device_category||"unknown"}"`,`"${Ae.blocked_until||""}"`,`"${Ae.current_period_expires_at||""}"`].join(","))].join(`
`),G=new Blob([$],{type:"text/csv;charset=utf-8;"}),oe=URL.createObjectURL(G),Fe=document.createElement("a");Fe.href=oe,Fe.setAttribute("download",`eliza-users-export-${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(Fe),Fe.click(),document.body.removeChild(Fe),URL.revokeObjectURL(oe)}catch(T){alert("Failed to export data: "+T.message)}},ge=T=>{if(!T)return"—";try{return new Date(T).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return T}};return c.jsxs(lm,{title:"Email IDs & Access Analytics",subtitle:"Searchable and sortable registry of all customer accounts, active restriction windows, and usage balances.",children:[ue&&c.jsxs("div",{className:"admin-toast-banner",children:[c.jsx(Ta,{size:16}),c.jsx("span",{children:ue})]}),c.jsxs("div",{className:"emails-toolbar",children:[c.jsxs("form",{onSubmit:ie,className:"search-box",children:[c.jsx(u1,{size:16,className:"search-icon"}),c.jsx("input",{type:"text",value:d,onChange:T=>f(T.target.value),placeholder:"Search by customer email address..."}),d&&c.jsx("button",{type:"button",className:"btn-clear-input",onClick:()=>{f(""),o(1)},children:c.jsx(It,{size:14})})]}),c.jsxs("div",{className:"filter-selects",children:[c.jsxs("div",{className:"calendar-date-group",children:[c.jsx(Bp,{size:14,className:"cal-icon"}),c.jsxs("div",{className:"date-field",children:[c.jsx("span",{className:"date-label",children:"From"}),c.jsx("input",{type:"date",value:v,onChange:T=>{E(T.target.value),o(1)},className:"filter-date-input"})]}),c.jsx("span",{className:"date-sep",children:"→"}),c.jsxs("div",{className:"date-field",children:[c.jsx("span",{className:"date-label",children:"To"}),c.jsx("input",{type:"date",value:w,onChange:T=>{I(T.target.value),o(1)},className:"filter-date-input"})]}),(v||w)&&c.jsx("button",{type:"button",className:"btn-clear-date",onClick:()=>{E(""),I(""),o(1)},title:"Clear date range",children:c.jsx(It,{size:13})})]}),c.jsxs("select",{value:p,onChange:T=>{h(T.target.value),o(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"All Statuses"}),c.jsx("option",{value:"eligible",children:"Eligible"}),c.jsx("option",{value:"blocked",children:"Blocked"}),c.jsx("option",{value:"active",children:"Active"}),c.jsx("option",{value:"expired",children:"Expired"})]}),c.jsxs("select",{value:S,onChange:T=>{g(T.target.value),o(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"Any Usage"}),c.jsx("option",{value:"0",children:"0 Questions (0/3)"}),c.jsx("option",{value:"1",children:"1 Question (1/3)"}),c.jsx("option",{value:"2",children:"2 Questions (2/3)"}),c.jsx("option",{value:"3",children:"3 Questions (3/3)"})]}),c.jsxs("select",{value:y,onChange:T=>{b(T.target.value),o(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"All Devices"}),c.jsx("option",{value:"desktop",children:"Desktop"}),c.jsx("option",{value:"mobile",children:"Mobile"}),c.jsx("option",{value:"tablet",children:"Tablet"})]}),c.jsxs("select",{value:m,onChange:T=>{x(T.target.value),o(1)},className:"filter-select",children:[c.jsx("option",{value:"newest",children:"Sort: Newest"}),c.jsx("option",{value:"oldest",children:"Sort: Oldest"}),c.jsx("option",{value:"most_active",children:"Sort: Most Active"})]}),c.jsx("button",{type:"button",className:"btn-action-refresh",onClick:be,title:"Refresh records",children:c.jsx(qp,{size:14,className:P?"spin":""})}),c.jsxs("button",{type:"button",className:"btn-action-export",onClick:Tn,title:"Download all customer records as CSV",children:[c.jsx(i1,{size:14}),c.jsx("span",{children:"Export CSV"})]}),(d||p||y||S||m!=="newest"||v||w)&&c.jsx("button",{type:"button",className:"btn-clear-all",onClick:Ce,children:"Clear Filters"})]})]}),U.size>0&&c.jsxs("div",{className:"bulk-actions-card",children:[c.jsxs("div",{className:"bulk-info",children:[c.jsx(h1,{size:17,className:"bulk-icon"}),c.jsxs("span",{children:[c.jsx("b",{children:U.size})," customer(s) selected"]})]}),c.jsxs("div",{className:"bulk-btns",children:[c.jsxs("button",{type:"button",className:"btn-bulk-delete",onClick:Ye,disabled:Q,children:[c.jsx($i,{size:14}),c.jsxs("span",{children:["Delete Selected (",U.size,")"]})]}),c.jsx("button",{type:"button",className:"btn-bulk-cancel",onClick:()=>q(new Set),children:"Cancel Selection"})]})]}),_&&c.jsxs("div",{className:"table-error-banner",children:[c.jsx("span",{children:_}),c.jsx("button",{onClick:be,children:"Retry"})]}),c.jsxs("div",{className:"table-card",children:[c.jsx("div",{className:"table-responsive",children:c.jsxs("table",{className:"admin-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{style:{width:42,textAlign:"center"},children:c.jsx("input",{type:"checkbox",className:"row-checkbox",checked:e.length>0&&e.every(T=>U.has(T.id)),onChange:Me,title:"Select all on this page"})}),c.jsx("th",{children:"Email Address"}),c.jsx("th",{children:"Status"}),c.jsx("th",{children:"Usage"}),c.jsx("th",{children:"Left"}),c.jsx("th",{children:"First Seen"}),c.jsx("th",{children:"First Question"}),c.jsx("th",{children:"Last Active"}),c.jsx("th",{children:"Visits"}),c.jsx("th",{children:"Device"}),c.jsx("th",{children:"Blocked Until"}),c.jsx("th",{children:"Cycle Expiry"}),c.jsx("th",{className:"text-right",children:"Actions"})]})}),c.jsx("tbody",{children:P?c.jsx("tr",{children:c.jsxs("td",{colSpan:"13",className:"table-loading-cell",children:[c.jsx("span",{className:"table-spinner"})," Loading records..."]})}):e.length===0?c.jsx("tr",{children:c.jsx("td",{colSpan:"13",className:"table-empty-cell",children:"No matching customer emails found."})}):e.map(T=>{const z=T.blocked||T.remaining_questions!==void 0&&T.remaining_questions<=0||T.access_status==="blocked",B=U.has(T.id);return c.jsxs("tr",{className:`table-row-clickable ${B?"row-selected":""}`,onClick:()=>me(T.id),children:[c.jsx("td",{style:{textAlign:"center"},onClick:$=>$.stopPropagation(),children:c.jsx("input",{type:"checkbox",className:"row-checkbox",checked:B,onChange:$=>Ke(T.id,$)})}),c.jsx("td",{className:"font-semibold text-white",children:c.jsx("span",{className:"email-cell",children:T.email})}),c.jsx("td",{children:c.jsx(Qz,{status:T.access_status,blocked:T.blocked})}),c.jsx("td",{children:c.jsxs("span",{className:"usage-pill",children:[T.questions_used,"/3"]})}),c.jsx("td",{children:c.jsx("span",{className:"font-mono text-purple-200",children:T.remaining_questions})}),c.jsx("td",{className:"text-muted",children:ge(T.first_seen_at)}),c.jsx("td",{className:"text-muted",children:ge(T.first_question_at)}),c.jsx("td",{className:"text-muted",children:ge(T.last_activity_at)}),c.jsx("td",{children:c.jsx("span",{className:"font-mono",children:T.visits_count})}),c.jsx("td",{children:c.jsx(Zz,{device:T.device_category})}),c.jsx("td",{children:T.blocked_until?c.jsx("span",{className:"blocked-date-tag",children:ge(T.blocked_until)}):c.jsx("span",{className:"text-muted",children:"—"})}),c.jsx("td",{className:"text-muted",children:ge(T.current_period_expires_at)}),c.jsx("td",{className:"text-right",onClick:$=>$.stopPropagation(),children:c.jsxs("div",{className:"row-actions-group",children:[z&&c.jsxs("button",{type:"button",className:"btn-action-unblock",onClick:$=>Ve(T.id,$),disabled:Q,title:"Unblock customer & restore 3 questions",children:[c.jsx(Yd,{size:13}),c.jsx("span",{children:"Unblock"})]}),c.jsxs("button",{type:"button",className:"btn-view-detail",onClick:()=>me(T.id),title:"View Customer Profile",children:[c.jsx(Gp,{size:13}),c.jsx("span",{children:"Details"})]}),c.jsx("button",{type:"button",className:"btn-action-delete",onClick:$=>et(T.id,T.email,$),disabled:Q,title:"Permanently delete customer",children:c.jsx($i,{size:13})})]})})]},T.id)})})]})}),c.jsxs("div",{className:"pagination-bar",children:[c.jsxs("div",{className:"pagination-info",children:["Showing ",c.jsx("b",{children:e.length})," of ",c.jsx("b",{children:n})," total emails (Page ",a," of ",i,")"]}),c.jsxs("div",{className:"pagination-controls",children:[c.jsxs("label",{className:"page-size-label",children:[c.jsx("span",{children:"Per page:"}),c.jsxs("select",{value:l,onChange:T=>{u(Number(T.target.value)),o(1)},children:[c.jsx("option",{value:"15",children:"15"}),c.jsx("option",{value:"30",children:"30"}),c.jsx("option",{value:"50",children:"50"})]})]}),c.jsx("button",{type:"button",className:"btn-page",disabled:a<=1,onClick:()=>o(T=>Math.max(1,T-1)),title:"Previous page",children:c.jsx(t1,{size:16})}),c.jsxs("span",{className:"current-page-num",children:[a," / ",i]}),c.jsx("button",{type:"button",className:"btn-page",disabled:a>=i,onClick:()=>o(T=>Math.min(i,T+1)),title:"Next page",children:c.jsx(n1,{size:16})})]})]})]}),L&&c.jsx("div",{className:"detail-modal-overlay",onClick:Ft,children:c.jsxs("div",{className:"detail-modal-card",onClick:T=>T.stopPropagation(),children:[c.jsxs("div",{className:"detail-modal-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"detail-eyebrow",children:"CUSTOMER PROFILE & AUDIT"}),c.jsx("h3",{children:((_n=k==null?void 0:k.customer)==null?void 0:_n.email)||"Loading..."})]}),c.jsxs("div",{className:"head-actions",children:[(k==null?void 0:k.customer)&&c.jsxs(c.Fragment,{children:[c.jsxs("button",{type:"button",className:"btn-drawer-unblock",onClick:T=>Ve(k.customer.id,T),title:"Unblock user and restore 3 questions",children:[c.jsx(Yd,{size:14})," Unblock"]}),c.jsxs("button",{type:"button",className:"btn-drawer-delete",onClick:T=>et(k.customer.id,k.customer.email,T),title:"Delete customer record",children:[c.jsx($i,{size:14})," Delete"]})]}),c.jsx("button",{type:"button",className:"btn-modal-close",onClick:Ft,children:c.jsx(It,{size:18})})]})]}),ee?c.jsxs("div",{className:"detail-loading",children:[c.jsx("span",{className:"table-spinner"})," Loading full customer profile..."]}):k?c.jsxs("div",{className:"detail-modal-body",children:[c.jsxs("div",{className:"profile-summary-box",children:[c.jsxs("div",{className:"summary-item",children:[c.jsx("span",{children:"First Seen"}),c.jsx("b",{children:ge((fn=k.customer)==null?void 0:fn.first_seen_at)})]}),c.jsxs("div",{className:"summary-item",children:[c.jsx("span",{children:"Last Active"}),c.jsx("b",{children:ge((D=k.customer)==null?void 0:D.last_activity_at)})]}),c.jsxs("div",{className:"summary-item",children:[c.jsx("span",{children:"Primary Device"}),c.jsx("b",{children:((de=k.customer)==null?void 0:de.device_type)||"unknown"})]}),c.jsxs("div",{className:"summary-item",children:[c.jsx("span",{children:"Account Status"}),c.jsx("b",{children:c.jsx("span",{className:"status-highlight",children:(ne=k.customer)==null?void 0:ne.status})})]})]}),c.jsxs("div",{className:"detail-section",children:[c.jsxs("h4",{children:["Access Cycles & Quotas (",((pe=k.periods)==null?void 0:pe.length)||0,")"]}),c.jsx("div",{className:"periods-list",children:(yt=k.periods)==null?void 0:yt.map(T=>c.jsxs("div",{className:"period-card",children:[c.jsxs("div",{className:"period-card-top",children:[c.jsx("span",{className:`period-status status-${T.status}`,children:T.status}),c.jsxs("span",{className:"period-q-count",children:["Questions: ",c.jsxs("b",{children:[T.questions_used,"/3"]})]})]}),c.jsxs("div",{className:"period-grid",children:[c.jsxs("div",{children:[c.jsx("span",{children:"Period Start"}),c.jsx("b",{children:ge(T.period_started_at)})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Expires At"}),c.jsx("b",{children:ge(T.period_expires_at)})]}),c.jsxs("div",{children:[c.jsx("span",{children:"First Question"}),c.jsx("b",{children:ge(T.first_question_at)})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Blocked Until"}),c.jsx("b",{children:ge(T.blocked_until)})]})]})]},T.id))})]}),c.jsxs("div",{className:"detail-section",children:[c.jsxs("h4",{children:["Question Usage Log (",((An=k.questions)==null?void 0:An.length)||0,")"]}),((Ot=k.questions)==null?void 0:Ot.length)===0?c.jsx("p",{className:"section-empty",children:"No questions submitted yet."}):c.jsx("div",{className:"log-table-wrap",children:c.jsxs("table",{className:"log-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Time"}),c.jsx("th",{children:"Status"}),c.jsx("th",{children:"Device"})]})}),c.jsx("tbody",{children:k.questions.map(T=>c.jsxs("tr",{children:[c.jsx("td",{children:ge(T.created_at)}),c.jsx("td",{children:c.jsx("span",{className:"log-badge-status",children:T.status})}),c.jsx("td",{children:T.device_type||"unknown"})]},T.id))})]})})]}),c.jsxs("div",{className:"detail-section",children:[c.jsxs("h4",{children:["Feedback Submissions (",((M=k.feedbacks)==null?void 0:M.length)||0,")"]}),((N=k.feedbacks)==null?void 0:N.length)===0?c.jsx("p",{className:"section-empty",children:"No feedback submitted by this customer."}):c.jsx("div",{className:"feedback-cards-list",children:k.feedbacks.map(T=>c.jsxs("div",{className:"feedback-mini-card",children:[c.jsxs("div",{className:"fb-mini-top",children:[c.jsx("div",{className:"fb-stars",children:[...Array(T.rating)].map((z,B)=>c.jsx(kr,{size:14,fill:"#fbbf24",color:"#fbbf24"},B))}),c.jsx("span",{className:"fb-cat-tag",children:T.category}),c.jsx("span",{className:"fb-date",children:ge(T.created_at)})]}),c.jsx("p",{className:"fb-mini-msg",children:T.message})]},T.id))})]})]}):null]})}),c.jsx("style",{children:`
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
      `})]})}function Qz({status:e,blocked:t}){return t||e==="blocked"?c.jsxs("span",{className:"status-badge status-blocked",children:[c.jsx(d1,{size:12}),c.jsx("span",{children:"Blocked"})]}):e==="expired"?c.jsxs("span",{className:"status-badge status-expired",children:[c.jsx(Wp,{size:12}),c.jsx("span",{children:"Expired"})]}):e==="active"?c.jsxs("span",{className:"status-badge status-active",children:[c.jsx(Ta,{size:12}),c.jsx("span",{children:"Active"})]}):c.jsxs("span",{className:"status-badge status-eligible",children:[c.jsx(Ta,{size:12}),c.jsx("span",{children:"Eligible"})]})}function Zz({device:e}){const t=(e||"unknown").toLowerCase();let n=Hp;return t.includes("desk")?n=l1:t.includes("mob")?n=p1:t.includes("tab")&&(n=g1),c.jsxs("span",{className:"device-pill",children:[c.jsx(n,{size:12}),c.jsx("span",{children:t})]})}const Jz=["Voice Experience","Answer Quality","UI/UX","Bug","Feature Request","Other"];function e6(){const[e,t]=C.useState([]),[n,r]=C.useState({}),[i,s]=C.useState(0),[a,o]=C.useState(1),[l,u]=C.useState(1),[d,f]=C.useState(15),[p,h]=C.useState(""),[y,b]=C.useState(""),[S,g]=C.useState(""),[m,x]=C.useState(""),[v,E]=C.useState("newest"),[w,I]=C.useState(""),[P,R]=C.useState(""),[_,j]=C.useState(!0),[U,q]=C.useState(""),[Q,H]=C.useState(new Set),[ue,Y]=C.useState(!1),[L,V]=C.useState(""),[k,X]=C.useState(null),[ee,A]=C.useState(!1),[se,be]=C.useState(""),ie=D=>{V(D),setTimeout(()=>V(""),4500)},Ce=async()=>{j(!0),q("");try{const D=await st.getFeedback({page:l,per_page:d,search:p.trim(),rating:y!==""?Number(y):void 0,category:S,status:m,start_date:w||void 0,end_date:P||void 0,sort_order:v});t(D.items||[]),r(D.summary||{}),s(D.total||0),o(D.total_pages||1)}catch(D){q(D.message||"Failed to load feedback records.")}finally{j(!1)}};C.useEffect(()=>{Ce()},[l,d,y,S,m,v,w,P]);const Me=D=>{D.preventDefault(),u(1),Ce()},Ke=()=>{h(""),b(""),g(""),x(""),E("newest"),I(""),R(""),H(new Set),u(1)},Ve=D=>{D.target.checked?H(new Set(e.map(de=>de.id))):H(new Set)},et=(D,de)=>{de&&de.stopPropagation(),H(ne=>{const pe=new Set(ne);return pe.has(D)?pe.delete(D):pe.add(D),pe})},Ye=async(D,de)=>{if(de&&de.stopPropagation(),!!window.confirm("Permanently delete this feedback review? This action cannot be undone.")){Y(!0);try{await st.deleteFeedback(D),ie("Feedback review deleted."),t(ne=>ne.filter(pe=>pe.id!==D)),s(ne=>Math.max(0,ne-1)),H(ne=>{const pe=new Set(ne);return pe.delete(D),pe}),(k==null?void 0:k.id)===D&&X(null)}catch(ne){alert("Failed to delete feedback: "+ne.message)}finally{Y(!1)}}},me=async()=>{if(Q.size!==0&&window.confirm(`Permanently delete ${Q.size} selected feedback reviews? This cannot be undone.`)){Y(!0);try{const D=Array.from(Q),de=await st.bulkDeleteFeedback(D);ie(de.message||`Deleted ${D.length} feedback review(s).`);const ne=new Set(D);t(pe=>pe.filter(yt=>!ne.has(yt.id))),s(pe=>Math.max(0,pe-ne.size)),H(new Set),k&&ne.has(k.id)&&X(null)}catch(D){alert("Failed to bulk delete feedback: "+D.message)}finally{Y(!1)}}},Ft=async(D,de)=>{try{const ne=await st.updateFeedback(D,{status:de});t(pe=>pe.map(yt=>yt.id===D?{...yt,status:ne.status}:yt)),k&&k.id===D&&X(pe=>({...pe,status:ne.status})),ie(`Feedback status updated to ${de}.`)}catch(ne){alert("Failed to update status: "+ne.message)}},Tn=async()=>{if(k){A(!0);try{const D=await st.updateFeedback(k.id,{admin_notes:se});X(de=>({...de,admin_notes:D.admin_notes})),t(de=>de.map(ne=>ne.id===k.id?{...ne,admin_notes:D.admin_notes}:ne)),ie("Internal notes saved successfully.")}catch(D){alert("Failed to save admin notes: "+D.message)}finally{A(!1)}}},ge=D=>{X(D),be(D.admin_notes||"")},_n=async()=>{try{const de=(await st.getFeedback({page:1,per_page:2e3,search:p.trim(),rating:y!==""?Number(y):void 0,category:S,status:m,start_date:w||void 0,end_date:P||void 0,sort_order:v})).items||e;if(!de.length){alert("No feedback records to export.");return}const pe=[["Date","Email","Rating","Category","Message","Device","Browser","Status","Admin Notes"].join(","),...de.map(M=>[`"${M.created_at||""}"`,`"${(M.email||"").replace(/"/g,'""')}"`,M.rating,`"${(M.category||"").replace(/"/g,'""')}"`,`"${(M.message||"").replace(/"/g,'""').replace(/\n/g," ")}"`,`"${M.device_type||"desktop"}"`,`"${M.browser_name||"Chrome"}"`,`"${M.status||"new"}"`,`"${(M.admin_notes||"").replace(/"/g,'""').replace(/\n/g," ")}"`].join(","))].join(`
`),yt=new Blob([pe],{type:"text/csv;charset=utf-8;"}),An=URL.createObjectURL(yt),Ot=document.createElement("a");Ot.href=An,Ot.setAttribute("download",`eliza-feedback-export-${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(Ot),Ot.click(),document.body.removeChild(Ot),URL.revokeObjectURL(An)}catch(D){alert("Failed to export feedback: "+D.message)}},fn=D=>{if(!D)return"—";try{return new Date(D).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return D}};return c.jsxs(lm,{title:"Feedback & Reviews Management",subtitle:"Examine visitor ratings, categorize UX evaluations, and record operational follow-ups.",children:[L&&c.jsxs("div",{className:"admin-toast-banner",children:[c.jsx(Ta,{size:16}),c.jsx("span",{children:L})]}),c.jsxs("div",{className:"fb-summary-grid",children:[c.jsxs("div",{className:"fb-summary-card",children:[c.jsx("span",{className:"summary-card-title",children:"Total Submissions"}),c.jsx("div",{className:"summary-card-val",children:n.total_feedback??0}),c.jsx("span",{className:"summary-card-sub",children:"All-time reviews received"})]}),c.jsxs("div",{className:"fb-summary-card",children:[c.jsx("span",{className:"summary-card-title",children:"Average Rating"}),c.jsxs("div",{className:"summary-card-val",children:[n.average_rating?Number(n.average_rating).toFixed(1):"0.0"," / 5"]}),c.jsx("div",{className:"stars-mini-row",children:[1,2,3,4,5].map(D=>c.jsx(kr,{size:14,fill:D<=Math.round(n.average_rating||0)?"#fbbf24":"transparent",color:D<=Math.round(n.average_rating||0)?"#fbbf24":"rgba(255,255,255,0.2)"},D))})]}),c.jsxs("div",{className:"fb-summary-card",children:[c.jsx("span",{className:"summary-card-title",children:"Feedback Received Today"}),c.jsx("div",{className:"summary-card-val",children:n.feedback_today??0}),c.jsx("span",{className:"summary-card-sub",children:"Past 24 hours"})]}),c.jsxs("div",{className:"fb-summary-card",children:[c.jsx("span",{className:"summary-card-title",children:"Pending Review"}),c.jsx("div",{className:"summary-card-val",children:e.filter(D=>D.status==="new").length}),c.jsx("span",{className:"summary-card-sub",children:"Marked as 'New' on this page"})]})]}),c.jsxs("div",{className:"fb-toolbar",children:[c.jsxs("form",{onSubmit:Me,className:"search-box",children:[c.jsx(u1,{size:16,className:"search-icon"}),c.jsx("input",{type:"text",value:p,onChange:D=>h(D.target.value),placeholder:"Search feedback by email or message..."}),p&&c.jsx("button",{type:"button",className:"btn-clear-input",onClick:()=>{h(""),u(1)},children:c.jsx(It,{size:14})})]}),c.jsxs("div",{className:"fb-filters",children:[c.jsxs("div",{className:"calendar-date-group",children:[c.jsx(Bp,{size:14,className:"cal-icon"}),c.jsxs("div",{className:"date-field",children:[c.jsx("span",{className:"date-label",children:"From"}),c.jsx("input",{type:"date",value:w,onChange:D=>{I(D.target.value),u(1)},className:"filter-date-input"})]}),c.jsx("span",{className:"date-sep",children:"→"}),c.jsxs("div",{className:"date-field",children:[c.jsx("span",{className:"date-label",children:"To"}),c.jsx("input",{type:"date",value:P,onChange:D=>{R(D.target.value),u(1)},className:"filter-date-input"})]}),(w||P)&&c.jsx("button",{type:"button",className:"btn-clear-date",onClick:()=>{I(""),R(""),u(1)},title:"Clear date range",children:c.jsx(It,{size:13})})]}),c.jsxs("select",{value:y,onChange:D=>{b(D.target.value),u(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"All Ratings"}),c.jsx("option",{value:"5",children:"5 Stars"}),c.jsx("option",{value:"4",children:"4 Stars"}),c.jsx("option",{value:"3",children:"3 Stars"}),c.jsx("option",{value:"2",children:"2 Stars"}),c.jsx("option",{value:"1",children:"1 Star"})]}),c.jsxs("select",{value:S,onChange:D=>{g(D.target.value),u(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"All Categories"}),Jz.map(D=>c.jsx("option",{value:D,children:D},D))]}),c.jsxs("select",{value:m,onChange:D=>{x(D.target.value),u(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"All Statuses"}),c.jsx("option",{value:"new",children:"New"}),c.jsx("option",{value:"reviewed",children:"Reviewed"}),c.jsx("option",{value:"resolved",children:"Resolved"})]}),c.jsxs("select",{value:v,onChange:D=>{E(D.target.value),u(1)},className:"filter-select",children:[c.jsx("option",{value:"newest",children:"Sort: Newest"}),c.jsx("option",{value:"oldest",children:"Sort: Oldest"})]}),c.jsx("button",{type:"button",className:"btn-action-refresh",onClick:Ce,title:"Refresh feedback",children:c.jsx(qp,{size:14,className:_?"spin":""})}),c.jsxs("button",{type:"button",className:"btn-action-export",onClick:_n,title:"Download all feedback reviews as CSV",children:[c.jsx(i1,{size:14}),c.jsx("span",{children:"Export CSV"})]}),(p||y||S||m||v!=="newest"||w||P)&&c.jsx("button",{type:"button",className:"btn-clear-all",onClick:Ke,children:"Clear Filters"})]})]}),Q.size>0&&c.jsxs("div",{className:"bulk-actions-card",children:[c.jsxs("div",{className:"bulk-info",children:[c.jsx(h1,{size:17,className:"bulk-icon"}),c.jsxs("span",{children:[c.jsx("b",{children:Q.size})," review(s) selected"]})]}),c.jsxs("div",{className:"bulk-btns",children:[c.jsxs("button",{type:"button",className:"btn-bulk-delete",onClick:me,disabled:ue,children:[c.jsx($i,{size:14}),c.jsxs("span",{children:["Delete Selected (",Q.size,")"]})]}),c.jsx("button",{type:"button",className:"btn-bulk-cancel",onClick:()=>H(new Set),children:"Cancel Selection"})]})]}),U&&c.jsxs("div",{className:"table-error-banner",children:[c.jsx("span",{children:U}),c.jsx("button",{onClick:Ce,children:"Retry"})]}),c.jsxs("div",{className:"table-card",children:[c.jsx("div",{className:"table-responsive",children:c.jsxs("table",{className:"admin-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{style:{width:42,textAlign:"center"},children:c.jsx("input",{type:"checkbox",className:"row-checkbox",checked:e.length>0&&e.every(D=>Q.has(D.id)),onChange:Ve,title:"Select all on this page"})}),c.jsx("th",{children:"Date / Time"}),c.jsx("th",{children:"Email Address"}),c.jsx("th",{children:"Rating"}),c.jsx("th",{children:"Category"}),c.jsx("th",{children:"Feedback Message"}),c.jsx("th",{children:"Device"}),c.jsx("th",{children:"Browser"}),c.jsx("th",{children:"Status"}),c.jsx("th",{className:"text-right",children:"Actions"})]})}),c.jsx("tbody",{children:_?c.jsx("tr",{children:c.jsxs("td",{colSpan:"10",className:"table-loading-cell",children:[c.jsx("span",{className:"table-spinner"})," Loading feedback..."]})}):e.length===0?c.jsx("tr",{children:c.jsx("td",{colSpan:"10",className:"table-empty-cell",children:"No matching feedback entries found."})}):e.map(D=>{const de=Q.has(D.id);return c.jsxs("tr",{className:`table-row-clickable ${de?"row-selected":""}`,onClick:()=>ge(D),children:[c.jsx("td",{style:{textAlign:"center"},onClick:ne=>ne.stopPropagation(),children:c.jsx("input",{type:"checkbox",className:"row-checkbox",checked:de,onChange:ne=>et(D.id,ne)})}),c.jsx("td",{className:"text-muted",children:fn(D.created_at)}),c.jsx("td",{className:"font-semibold text-white",children:D.email}),c.jsx("td",{children:c.jsx("div",{className:"table-stars",children:[...Array(5)].map((ne,pe)=>c.jsx(kr,{size:13,fill:pe<D.rating?"#fbbf24":"transparent",color:pe<D.rating?"#fbbf24":"rgba(255,255,255,0.2)"},pe))})}),c.jsx("td",{children:c.jsx("span",{className:`cat-chip cat-chip-${(D.category||"").toLowerCase().replace(/[^a-z]/g,"")}`,children:D.category})}),c.jsx("td",{className:"message-preview-cell",children:c.jsx("p",{children:D.message})}),c.jsx("td",{children:c.jsx("span",{className:"device-chip",children:D.device_type||"desktop"})}),c.jsx("td",{children:c.jsx("span",{className:"browser-chip",children:D.browser_name||"Chrome"})}),c.jsx("td",{onClick:ne=>ne.stopPropagation(),children:c.jsxs("select",{value:D.status,onChange:ne=>Ft(D.id,ne.target.value),className:`status-dropdown status-style-${D.status}`,children:[c.jsx("option",{value:"new",children:"New"}),c.jsx("option",{value:"reviewed",children:"Reviewed"}),c.jsx("option",{value:"resolved",children:"Resolved"})]})}),c.jsx("td",{className:"text-right",onClick:ne=>ne.stopPropagation(),children:c.jsxs("div",{className:"row-actions-group",children:[c.jsxs("button",{type:"button",className:"btn-view-detail",onClick:()=>ge(D),title:"View Full Feedback & Notes",children:[c.jsx(Gp,{size:13})," View"]}),c.jsx("button",{type:"button",className:"btn-action-delete",onClick:ne=>Ye(D.id,ne),disabled:ue,title:"Delete feedback entry",children:c.jsx($i,{size:13})})]})})]},D.id)})})]})}),c.jsxs("div",{className:"pagination-bar",children:[c.jsxs("div",{className:"pagination-info",children:["Showing ",c.jsx("b",{children:e.length})," of ",c.jsx("b",{children:i})," total reviews (Page ",l," of ",a,")"]}),c.jsxs("div",{className:"pagination-controls",children:[c.jsxs("label",{className:"page-size-label",children:[c.jsx("span",{children:"Per page:"}),c.jsxs("select",{value:d,onChange:D=>{f(Number(D.target.value)),u(1)},children:[c.jsx("option",{value:"15",children:"15"}),c.jsx("option",{value:"30",children:"30"}),c.jsx("option",{value:"50",children:"50"})]})]}),c.jsx("button",{type:"button",className:"btn-page",disabled:l<=1,onClick:()=>u(D=>Math.max(1,D-1)),title:"Previous page",children:c.jsx(t1,{size:16})}),c.jsxs("span",{className:"current-page-num",children:[l," / ",a]}),c.jsx("button",{type:"button",className:"btn-page",disabled:l>=a,onClick:()=>u(D=>Math.min(a,D+1)),title:"Next page",children:c.jsx(n1,{size:16})})]})]})]}),k&&c.jsx("div",{className:"detail-modal-overlay",onClick:()=>X(null),children:c.jsxs("div",{className:"detail-modal-card",onClick:D=>D.stopPropagation(),children:[c.jsxs("div",{className:"detail-modal-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"detail-eyebrow",children:"FEEDBACK INSPECTION"}),c.jsxs("h3",{children:["Review from ",k.email]})]}),c.jsxs("div",{className:"head-actions",children:[c.jsxs("button",{type:"button",className:"btn-drawer-delete",onClick:D=>Ye(k.id,D),title:"Delete this feedback entry",children:[c.jsx($i,{size:14})," Delete"]}),c.jsx("button",{type:"button",className:"btn-modal-close",onClick:()=>X(null),children:c.jsx(It,{size:18})})]})]}),c.jsxs("div",{className:"detail-modal-body",children:[c.jsxs("div",{className:"fb-inspect-meta",children:[c.jsxs("div",{children:[c.jsx("span",{children:"Submitted At"}),c.jsx("b",{children:fn(k.created_at)})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Category"}),c.jsx("b",{children:k.category})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Device & Browser"}),c.jsxs("b",{children:[k.device_type," • ",k.browser_name]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Rating"}),c.jsx("div",{className:"table-stars",children:[...Array(k.rating)].map((D,de)=>c.jsx(kr,{size:15,fill:"#fbbf24",color:"#fbbf24"},de))})]})]}),c.jsxs("div",{className:"fb-inspect-message-box",children:[c.jsx("span",{className:"box-label",children:"Visitor Feedback Message"}),c.jsx("p",{className:"full-message-text",children:k.message})]}),c.jsxs("div",{className:"fb-inspect-status-box",children:[c.jsx("span",{className:"box-label",children:"Resolution Status"}),c.jsx("div",{className:"status-button-group",children:["new","reviewed","resolved"].map(D=>c.jsxs("button",{type:"button",className:`status-btn ${k.status===D?"active-"+D:""}`,onClick:()=>Ft(k.id,D),children:[k.status===D&&c.jsx(Vp,{size:14}),c.jsx("span",{style:{textTransform:"capitalize"},children:D})]},D))})]}),c.jsxs("div",{className:"fb-inspect-notes-box",children:[c.jsxs("div",{className:"notes-box-head",children:[c.jsx("span",{className:"box-label",children:"Administrator Internal Notes"}),c.jsxs("button",{type:"button",className:"btn-save-notes",onClick:Tn,disabled:ee,children:[c.jsx(g_,{size:13}),c.jsx("span",{children:ee?"Saving...":"Save Notes"})]})]}),c.jsx("textarea",{rows:"4",value:se,onChange:D=>be(D.target.value),placeholder:"Record follow-up actions, customer bug reports, or engineering notes here...",className:"notes-textarea"})]})]})]})}),c.jsx("style",{children:`
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
      `})]})}jb(document.getElementById("root")).render(c.jsx(fS.StrictMode,{children:c.jsx(KT,{children:c.jsxs(ET,{children:[c.jsx(Ur,{path:"/",element:c.jsx($z,{})}),c.jsx(Ur,{path:"/admin/login",element:c.jsx(Wz,{})}),c.jsx(Ur,{path:"/admin/dashboard",element:c.jsx(qz,{})}),c.jsx(Ur,{path:"/admin/emails",element:c.jsx(Xz,{})}),c.jsx(Ur,{path:"/admin/feedback",element:c.jsx(e6,{})}),c.jsx(Ur,{path:"*",element:c.jsx(kT,{to:"/",replace:!0})})]})})}));
