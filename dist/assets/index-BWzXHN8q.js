(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Wi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Zl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var x0={exports:{}},Jl={},v0={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),W2=Symbol.for("react.portal"),G2=Symbol.for("react.fragment"),q2=Symbol.for("react.strict_mode"),K2=Symbol.for("react.profiler"),Y2=Symbol.for("react.provider"),X2=Symbol.for("react.context"),Q2=Symbol.for("react.forward_ref"),Z2=Symbol.for("react.suspense"),J2=Symbol.for("react.memo"),eS=Symbol.for("react.lazy"),om=Symbol.iterator;function tS(e){return e===null||typeof e!="object"?null:(e=om&&e[om]||e["@@iterator"],typeof e=="function"?e:null)}var b0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w0=Object.assign,k0={};function ls(e,t,n){this.props=e,this.context=t,this.refs=k0,this.updater=n||b0}ls.prototype.isReactComponent={};ls.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ls.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function S0(){}S0.prototype=ls.prototype;function Rf(e,t,n){this.props=e,this.context=t,this.refs=k0,this.updater=n||b0}var Lf=Rf.prototype=new S0;Lf.constructor=Rf;w0(Lf,ls.prototype);Lf.isPureReactComponent=!0;var lm=Array.isArray,E0=Object.prototype.hasOwnProperty,Df={current:null},C0={key:!0,ref:!0,__self:!0,__source:!0};function T0(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)E0.call(t,r)&&!C0.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:Fa,type:e,key:s,ref:a,props:i,_owner:Df.current}}function nS(e,t){return{$$typeof:Fa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Mf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fa}function rS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var um=/\/+/g;function Mu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rS(""+e.key):t.toString(36)}function Lo(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Fa:case W2:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Mu(a,0):r,lm(i)?(n="",e!=null&&(n=e.replace(um,"$&/")+"/"),Lo(i,t,n,"",function(u){return u})):i!=null&&(Mf(i)&&(i=nS(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(um,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",lm(e))for(var o=0;o<e.length;o++){s=e[o];var l=r+Mu(s,o);a+=Lo(s,t,n,l,i)}else if(l=tS(e),typeof l=="function")for(e=l.call(e),o=0;!(s=e.next()).done;)s=s.value,l=r+Mu(s,o++),a+=Lo(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ro(e,t,n){if(e==null)return e;var r=[],i=0;return Lo(e,r,"","",function(s){return t.call(n,s,i++)}),r}function iS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ht={current:null},Do={transition:null},sS={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Do,ReactCurrentOwner:Df};function _0(){throw Error("act(...) is not supported in production builds of React.")}ce.Children={map:ro,forEach:function(e,t,n){ro(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ro(e,function(){t++}),t},toArray:function(e){return ro(e,function(t){return t})||[]},only:function(e){if(!Mf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ce.Component=ls;ce.Fragment=G2;ce.Profiler=K2;ce.PureComponent=Rf;ce.StrictMode=q2;ce.Suspense=Z2;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sS;ce.act=_0;ce.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=w0({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Df.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in t)E0.call(t,l)&&!C0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&o!==void 0?o[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:Fa,type:e.type,key:i,ref:s,props:r,_owner:a}};ce.createContext=function(e){return e={$$typeof:X2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Y2,_context:e},e.Consumer=e};ce.createElement=T0;ce.createFactory=function(e){var t=T0.bind(null,e);return t.type=e,t};ce.createRef=function(){return{current:null}};ce.forwardRef=function(e){return{$$typeof:Q2,render:e}};ce.isValidElement=Mf;ce.lazy=function(e){return{$$typeof:eS,_payload:{_status:-1,_result:e},_init:iS}};ce.memo=function(e,t){return{$$typeof:J2,type:e,compare:t===void 0?null:t}};ce.startTransition=function(e){var t=Do.transition;Do.transition={};try{e()}finally{Do.transition=t}};ce.unstable_act=_0;ce.useCallback=function(e,t){return ht.current.useCallback(e,t)};ce.useContext=function(e){return ht.current.useContext(e)};ce.useDebugValue=function(){};ce.useDeferredValue=function(e){return ht.current.useDeferredValue(e)};ce.useEffect=function(e,t){return ht.current.useEffect(e,t)};ce.useId=function(){return ht.current.useId()};ce.useImperativeHandle=function(e,t,n){return ht.current.useImperativeHandle(e,t,n)};ce.useInsertionEffect=function(e,t){return ht.current.useInsertionEffect(e,t)};ce.useLayoutEffect=function(e,t){return ht.current.useLayoutEffect(e,t)};ce.useMemo=function(e,t){return ht.current.useMemo(e,t)};ce.useReducer=function(e,t,n){return ht.current.useReducer(e,t,n)};ce.useRef=function(e){return ht.current.useRef(e)};ce.useState=function(e){return ht.current.useState(e)};ce.useSyncExternalStore=function(e,t,n){return ht.current.useSyncExternalStore(e,t,n)};ce.useTransition=function(){return ht.current.useTransition()};ce.version="18.3.1";v0.exports=ce;var E=v0.exports;const aS=Zl(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oS=E,lS=Symbol.for("react.element"),uS=Symbol.for("react.fragment"),cS=Object.prototype.hasOwnProperty,dS=oS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fS={key:!0,ref:!0,__self:!0,__source:!0};function A0(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)cS.call(t,r)&&!fS.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:lS,type:e,key:s,ref:a,props:i,_owner:dS.current}}Jl.Fragment=uS;Jl.jsx=A0;Jl.jsxs=A0;x0.exports=Jl;var c=x0.exports,I0={exports:{}},Lt={},N0={exports:{}},P0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,B){var S=L.length;L.push(B);e:for(;0<S;){var Y=S-1>>>1,ee=L[Y];if(0<i(ee,B))L[Y]=B,L[S]=ee,S=Y;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var B=L[0],S=L.pop();if(S!==B){L[0]=S;e:for(var Y=0,ee=L.length,A=ee>>>1;Y<A;){var ue=2*(Y+1)-1,Se=L[ue],se=ue+1,Ee=L[se];if(0>i(Se,S))se<ee&&0>i(Ee,Se)?(L[Y]=Ee,L[se]=S,Y=se):(L[Y]=Se,L[ue]=S,Y=ue);else if(se<ee&&0>i(Ee,S))L[Y]=Ee,L[se]=S,Y=se;else break e}}return B}function i(L,B){var S=L.sortIndex-B.sortIndex;return S!==0?S:L.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var l=[],u=[],d=1,f=null,p=3,m=!1,x=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=L)r(u),B.sortIndex=B.expirationTime,t(l,B);else break;B=n(u)}}function w(L){if(v=!1,y(L),!x)if(n(l)!==null)x=!0,le(C);else{var B=n(u);B!==null&&Q(w,B.startTime-L)}}function C(L,B){x=!1,v&&(v=!1,g(N),N=-1),m=!0;var S=p;try{for(y(B),f=n(l);f!==null&&(!(f.expirationTime>B)||L&&!j());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,p=f.priorityLevel;var ee=Y(f.expirationTime<=B);B=e.unstable_now(),typeof ee=="function"?f.callback=ee:f===n(l)&&r(l),y(B)}else r(l);f=n(l)}if(f!==null)var A=!0;else{var ue=n(u);ue!==null&&Q(w,ue.startTime-B),A=!1}return A}finally{f=null,p=S,m=!1}}var b=!1,I=null,N=-1,R=5,_=-1;function j(){return!(e.unstable_now()-_<R)}function z(){if(I!==null){var L=e.unstable_now();_=L;var B=!0;try{B=I(!0,L)}finally{B?G():(b=!1,I=null)}}else b=!1}var G;if(typeof h=="function")G=function(){h(z)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,H=q.port2;q.port1.onmessage=z,G=function(){H.postMessage(null)}}else G=function(){k(z,0)};function le(L){I=L,b||(b=!0,G())}function Q(L,B){N=k(function(){L(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){x||m||(x=!0,le(C))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(L){switch(p){case 1:case 2:case 3:var B=3;break;default:B=p}var S=p;p=B;try{return L()}finally{p=S}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,B){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var S=p;p=L;try{return B()}finally{p=S}},e.unstable_scheduleCallback=function(L,B,S){var Y=e.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?Y+S:Y):S=Y,L){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=S+ee,L={id:d++,callback:B,priorityLevel:L,startTime:S,expirationTime:ee,sortIndex:-1},S>Y?(L.sortIndex=S,t(u,L),n(l)===null&&L===n(u)&&(v?(g(N),N=-1):v=!0,Q(w,S-Y))):(L.sortIndex=ee,t(l,L),x||m||(x=!0,le(C))),L},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(L){var B=p;return function(){var S=p;p=B;try{return L.apply(this,arguments)}finally{p=S}}}})(P0);N0.exports=P0;var pS=N0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hS=E,jt=pS;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j0=new Set,sa={};function ci(e,t){Gi(e,t),Gi(e+"Capture",t)}function Gi(e,t){for(sa[e]=t,e=0;e<t.length;e++)j0.add(t[e])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=Object.prototype.hasOwnProperty,mS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cm={},dm={};function gS(e){return Qc.call(dm,e)?!0:Qc.call(cm,e)?!1:mS.test(e)?dm[e]=!0:(cm[e]=!0,!1)}function yS(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xS(e,t,n,r){if(t===null||typeof t>"u"||yS(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function mt(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new mt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new mt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new mt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new mt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new mt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new mt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new mt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new mt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new mt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ff=/[\-:]([a-z])/g;function Of(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ff,Of);Je[t]=new mt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ff,Of);Je[t]=new mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ff,Of);Je[t]=new mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new mt(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new mt(e,1,!1,e.toLowerCase(),null,!0,!0)});function zf(e,t,n,r){var i=Je.hasOwnProperty(t)?Je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xS(t,n,i,r)&&(n=null),r||i===null?gS(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Yn=hS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,io=Symbol.for("react.element"),yi=Symbol.for("react.portal"),xi=Symbol.for("react.fragment"),Uf=Symbol.for("react.strict_mode"),Zc=Symbol.for("react.profiler"),R0=Symbol.for("react.provider"),L0=Symbol.for("react.context"),Bf=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),ed=Symbol.for("react.suspense_list"),Vf=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),D0=Symbol.for("react.offscreen"),fm=Symbol.iterator;function bs(e){return e===null||typeof e!="object"?null:(e=fm&&e[fm]||e["@@iterator"],typeof e=="function"?e:null)}var De=Object.assign,Fu;function js(e){if(Fu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fu=t&&t[1]||""}return`
`+Fu+e}var Ou=!1;function zu(e,t){if(!e||Ou)return"";Ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,o=s.length-1;1<=a&&0<=o&&i[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||i[a]!==s[o]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=o);break}}}finally{Ou=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?js(e):""}function vS(e){switch(e.tag){case 5:return js(e.type);case 16:return js("Lazy");case 13:return js("Suspense");case 19:return js("SuspenseList");case 0:case 2:case 15:return e=zu(e.type,!1),e;case 11:return e=zu(e.type.render,!1),e;case 1:return e=zu(e.type,!0),e;default:return""}}function td(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xi:return"Fragment";case yi:return"Portal";case Zc:return"Profiler";case Uf:return"StrictMode";case Jc:return"Suspense";case ed:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case L0:return(e.displayName||"Context")+".Consumer";case R0:return(e._context.displayName||"Context")+".Provider";case Bf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vf:return t=e.displayName||null,t!==null?t:td(e.type)||"Memo";case tr:t=e._payload,e=e._init;try{return td(e(t))}catch{}}return null}function bS(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return td(t);case 8:return t===Uf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function M0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wS(e){var t=M0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function so(e){e._valueTracker||(e._valueTracker=wS(e))}function F0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=M0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function sl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nd(e,t){var n=t.checked;return De({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function pm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function O0(e,t){t=t.checked,t!=null&&zf(e,"checked",t,!1)}function rd(e,t){O0(e,t);var n=kr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?id(e,t.type,n):t.hasOwnProperty("defaultValue")&&id(e,t.type,kr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function id(e,t,n){(t!=="number"||sl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rs=Array.isArray;function Di(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function sd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return De({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(Rs(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kr(n)}}function z0(e,t){var n=kr(t.value),r=kr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function gm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function U0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ad(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?U0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ao,B0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ao=ao||document.createElement("div"),ao.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ao.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function aa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kS=["Webkit","ms","Moz","O"];Object.keys(Bs).forEach(function(e){kS.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bs[t]=Bs[e]})});function V0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Bs.hasOwnProperty(e)&&Bs[e]?(""+t).trim():t+"px"}function $0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=V0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var SS=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function od(e,t){if(t){if(SS[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function ld(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ud=null;function $f(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cd=null,Mi=null,Fi=null;function ym(e){if(e=Ua(e)){if(typeof cd!="function")throw Error(F(280));var t=e.stateNode;t&&(t=iu(t),cd(e.stateNode,e.type,t))}}function H0(e){Mi?Fi?Fi.push(e):Fi=[e]:Mi=e}function W0(){if(Mi){var e=Mi,t=Fi;if(Fi=Mi=null,ym(e),t)for(e=0;e<t.length;e++)ym(t[e])}}function G0(e,t){return e(t)}function q0(){}var Uu=!1;function K0(e,t,n){if(Uu)return e(t,n);Uu=!0;try{return G0(e,t,n)}finally{Uu=!1,(Mi!==null||Fi!==null)&&(q0(),W0())}}function oa(e,t){var n=e.stateNode;if(n===null)return null;var r=iu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var dd=!1;if(Bn)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){dd=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{dd=!1}function ES(e,t,n,r,i,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Vs=!1,al=null,ol=!1,fd=null,CS={onError:function(e){Vs=!0,al=e}};function TS(e,t,n,r,i,s,a,o,l){Vs=!1,al=null,ES.apply(CS,arguments)}function _S(e,t,n,r,i,s,a,o,l){if(TS.apply(this,arguments),Vs){if(Vs){var u=al;Vs=!1,al=null}else throw Error(F(198));ol||(ol=!0,fd=u)}}function di(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Y0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xm(e){if(di(e)!==e)throw Error(F(188))}function AS(e){var t=e.alternate;if(!t){if(t=di(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return xm(i),e;if(s===r)return xm(i),t;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,o=i.child;o;){if(o===n){a=!0,n=i,r=s;break}if(o===r){a=!0,r=i,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,r=i;break}if(o===r){a=!0,r=s,n=i;break}o=o.sibling}if(!a)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function X0(e){return e=AS(e),e!==null?Q0(e):null}function Q0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Q0(e);if(t!==null)return t;e=e.sibling}return null}var Z0=jt.unstable_scheduleCallback,vm=jt.unstable_cancelCallback,IS=jt.unstable_shouldYield,NS=jt.unstable_requestPaint,Ue=jt.unstable_now,PS=jt.unstable_getCurrentPriorityLevel,Hf=jt.unstable_ImmediatePriority,J0=jt.unstable_UserBlockingPriority,ll=jt.unstable_NormalPriority,jS=jt.unstable_LowPriority,ev=jt.unstable_IdlePriority,eu=null,yn=null;function RS(e){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(eu,e,void 0,(e.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:MS,LS=Math.log,DS=Math.LN2;function MS(e){return e>>>=0,e===0?32:31-(LS(e)/DS|0)|0}var oo=64,lo=4194304;function Ls(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ul(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var o=a&~i;o!==0?r=Ls(o):(s&=a,s!==0&&(r=Ls(s)))}else a=n&~i,a!==0?r=Ls(a):s!==0&&(r=Ls(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nn(t),i=1<<n,r|=e[n],t&=~i;return r}function FS(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function OS(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-nn(s),o=1<<a,l=i[a];l===-1?(!(o&n)||o&r)&&(i[a]=FS(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}}function pd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tv(){var e=oo;return oo<<=1,!(oo&4194240)&&(oo=64),e}function Bu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Oa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nn(t),e[t]=n}function zS(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-nn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Wf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ve=0;function nv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var rv,Gf,iv,sv,av,hd=!1,uo=[],fr=null,pr=null,hr=null,la=new Map,ua=new Map,ir=[],US="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bm(e,t){switch(e){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":la.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(t.pointerId)}}function ks(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Ua(t),t!==null&&Gf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function BS(e,t,n,r,i){switch(t){case"focusin":return fr=ks(fr,e,t,n,r,i),!0;case"dragenter":return pr=ks(pr,e,t,n,r,i),!0;case"mouseover":return hr=ks(hr,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return la.set(s,ks(la.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ua.set(s,ks(ua.get(s)||null,e,t,n,r,i)),!0}return!1}function ov(e){var t=Hr(e.target);if(t!==null){var n=di(t);if(n!==null){if(t=n.tag,t===13){if(t=Y0(n),t!==null){e.blockedOn=t,av(e.priority,function(){iv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=md(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ud=r,n.target.dispatchEvent(r),ud=null}else return t=Ua(n),t!==null&&Gf(t),e.blockedOn=n,!1;t.shift()}return!0}function wm(e,t,n){Mo(e)&&n.delete(t)}function VS(){hd=!1,fr!==null&&Mo(fr)&&(fr=null),pr!==null&&Mo(pr)&&(pr=null),hr!==null&&Mo(hr)&&(hr=null),la.forEach(wm),ua.forEach(wm)}function Ss(e,t){e.blockedOn===t&&(e.blockedOn=null,hd||(hd=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,VS)))}function ca(e){function t(i){return Ss(i,e)}if(0<uo.length){Ss(uo[0],e);for(var n=1;n<uo.length;n++){var r=uo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fr!==null&&Ss(fr,e),pr!==null&&Ss(pr,e),hr!==null&&Ss(hr,e),la.forEach(t),ua.forEach(t),n=0;n<ir.length;n++)r=ir[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)ov(n),n.blockedOn===null&&ir.shift()}var Oi=Yn.ReactCurrentBatchConfig,cl=!0;function $S(e,t,n,r){var i=ve,s=Oi.transition;Oi.transition=null;try{ve=1,qf(e,t,n,r)}finally{ve=i,Oi.transition=s}}function HS(e,t,n,r){var i=ve,s=Oi.transition;Oi.transition=null;try{ve=4,qf(e,t,n,r)}finally{ve=i,Oi.transition=s}}function qf(e,t,n,r){if(cl){var i=md(e,t,n,r);if(i===null)Qu(e,t,r,dl,n),bm(e,r);else if(BS(i,e,t,n,r))r.stopPropagation();else if(bm(e,r),t&4&&-1<US.indexOf(e)){for(;i!==null;){var s=Ua(i);if(s!==null&&rv(s),s=md(e,t,n,r),s===null&&Qu(e,t,r,dl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Qu(e,t,r,null,n)}}var dl=null;function md(e,t,n,r){if(dl=null,e=$f(r),e=Hr(e),e!==null)if(t=di(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Y0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return dl=e,null}function lv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(PS()){case Hf:return 1;case J0:return 4;case ll:case jS:return 16;case ev:return 536870912;default:return 16}default:return 16}}var ur=null,Kf=null,Fo=null;function uv(){if(Fo)return Fo;var e,t=Kf,n=t.length,r,i="value"in ur?ur.value:ur.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return Fo=i.slice(e,1<r?1-r:void 0)}function Oo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function co(){return!0}function km(){return!1}function Dt(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?co:km,this.isPropagationStopped=km,this}return De(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),t}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yf=Dt(us),za=De({},us,{view:0,detail:0}),WS=Dt(za),Vu,$u,Es,tu=De({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Es&&(Es&&e.type==="mousemove"?(Vu=e.screenX-Es.screenX,$u=e.screenY-Es.screenY):$u=Vu=0,Es=e),Vu)},movementY:function(e){return"movementY"in e?e.movementY:$u}}),Sm=Dt(tu),GS=De({},tu,{dataTransfer:0}),qS=Dt(GS),KS=De({},za,{relatedTarget:0}),Hu=Dt(KS),YS=De({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),XS=Dt(YS),QS=De({},us,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ZS=Dt(QS),JS=De({},us,{data:0}),Em=Dt(JS),eE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nE[e])?!!t[e]:!1}function Xf(){return rE}var iE=De({},za,{key:function(e){if(e.key){var t=eE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xf,charCode:function(e){return e.type==="keypress"?Oo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sE=Dt(iE),aE=De({},tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cm=Dt(aE),oE=De({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xf}),lE=Dt(oE),uE=De({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),cE=Dt(uE),dE=De({},tu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fE=Dt(dE),pE=[9,13,27,32],Qf=Bn&&"CompositionEvent"in window,$s=null;Bn&&"documentMode"in document&&($s=document.documentMode);var hE=Bn&&"TextEvent"in window&&!$s,cv=Bn&&(!Qf||$s&&8<$s&&11>=$s),Tm=" ",_m=!1;function dv(e,t){switch(e){case"keyup":return pE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vi=!1;function mE(e,t){switch(e){case"compositionend":return fv(t);case"keypress":return t.which!==32?null:(_m=!0,Tm);case"textInput":return e=t.data,e===Tm&&_m?null:e;default:return null}}function gE(e,t){if(vi)return e==="compositionend"||!Qf&&dv(e,t)?(e=uv(),Fo=Kf=ur=null,vi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cv&&t.locale!=="ko"?null:t.data;default:return null}}var yE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Am(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yE[e.type]:t==="textarea"}function pv(e,t,n,r){H0(r),t=fl(t,"onChange"),0<t.length&&(n=new Yf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hs=null,da=null;function xE(e){Ev(e,0)}function nu(e){var t=ki(e);if(F0(t))return e}function vE(e,t){if(e==="change")return t}var hv=!1;if(Bn){var Wu;if(Bn){var Gu="oninput"in document;if(!Gu){var Im=document.createElement("div");Im.setAttribute("oninput","return;"),Gu=typeof Im.oninput=="function"}Wu=Gu}else Wu=!1;hv=Wu&&(!document.documentMode||9<document.documentMode)}function Nm(){Hs&&(Hs.detachEvent("onpropertychange",mv),da=Hs=null)}function mv(e){if(e.propertyName==="value"&&nu(da)){var t=[];pv(t,da,e,$f(e)),K0(xE,t)}}function bE(e,t,n){e==="focusin"?(Nm(),Hs=t,da=n,Hs.attachEvent("onpropertychange",mv)):e==="focusout"&&Nm()}function wE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nu(da)}function kE(e,t){if(e==="click")return nu(t)}function SE(e,t){if(e==="input"||e==="change")return nu(t)}function EE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var un=typeof Object.is=="function"?Object.is:EE;function fa(e,t){if(un(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Qc.call(t,i)||!un(e[i],t[i]))return!1}return!0}function Pm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jm(e,t){var n=Pm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pm(n)}}function gv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yv(){for(var e=window,t=sl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=sl(e.document)}return t}function Zf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function CE(e){var t=yv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gv(n.ownerDocument.documentElement,n)){if(r!==null&&Zf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=jm(n,s);var a=jm(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var TE=Bn&&"documentMode"in document&&11>=document.documentMode,bi=null,gd=null,Ws=null,yd=!1;function Rm(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yd||bi==null||bi!==sl(r)||(r=bi,"selectionStart"in r&&Zf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ws&&fa(Ws,r)||(Ws=r,r=fl(gd,"onSelect"),0<r.length&&(t=new Yf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=bi)))}function fo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wi={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},qu={},xv={};Bn&&(xv=document.createElement("div").style,"AnimationEvent"in window||(delete wi.animationend.animation,delete wi.animationiteration.animation,delete wi.animationstart.animation),"TransitionEvent"in window||delete wi.transitionend.transition);function ru(e){if(qu[e])return qu[e];if(!wi[e])return e;var t=wi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xv)return qu[e]=t[n];return e}var vv=ru("animationend"),bv=ru("animationiteration"),wv=ru("animationstart"),kv=ru("transitionend"),Sv=new Map,Lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(e,t){Sv.set(e,t),ci(t,[e])}for(var Ku=0;Ku<Lm.length;Ku++){var Yu=Lm[Ku],_E=Yu.toLowerCase(),AE=Yu[0].toUpperCase()+Yu.slice(1);Tr(_E,"on"+AE)}Tr(vv,"onAnimationEnd");Tr(bv,"onAnimationIteration");Tr(wv,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(kv,"onTransitionEnd");Gi("onMouseEnter",["mouseout","mouseover"]);Gi("onMouseLeave",["mouseout","mouseover"]);Gi("onPointerEnter",["pointerout","pointerover"]);Gi("onPointerLeave",["pointerout","pointerover"]);ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ds));function Dm(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_S(r,t,void 0,e),e.currentTarget=null}function Ev(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;Dm(i,o,u),s=l}else for(a=0;a<r.length;a++){if(o=r[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;Dm(i,o,u),s=l}}}if(ol)throw e=fd,ol=!1,fd=null,e}function Te(e,t){var n=t[kd];n===void 0&&(n=t[kd]=new Set);var r=e+"__bubble";n.has(r)||(Cv(t,e,2,!1),n.add(r))}function Xu(e,t,n){var r=0;t&&(r|=4),Cv(n,e,r,t)}var po="_reactListening"+Math.random().toString(36).slice(2);function pa(e){if(!e[po]){e[po]=!0,j0.forEach(function(n){n!=="selectionchange"&&(IE.has(n)||Xu(n,!1,e),Xu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[po]||(t[po]=!0,Xu("selectionchange",!1,t))}}function Cv(e,t,n,r){switch(lv(t)){case 1:var i=$S;break;case 4:i=HS;break;default:i=qf}n=i.bind(null,t,n,e),i=void 0,!dd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Qu(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;o!==null;){if(a=Hr(o),a===null)return;if(l=a.tag,l===5||l===6){r=s=a;continue e}o=o.parentNode}}r=r.return}K0(function(){var u=s,d=$f(n),f=[];e:{var p=Sv.get(e);if(p!==void 0){var m=Yf,x=e;switch(e){case"keypress":if(Oo(n)===0)break e;case"keydown":case"keyup":m=sE;break;case"focusin":x="focus",m=Hu;break;case"focusout":x="blur",m=Hu;break;case"beforeblur":case"afterblur":m=Hu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Sm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=qS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=lE;break;case vv:case bv:case wv:m=XS;break;case kv:m=cE;break;case"scroll":m=WS;break;case"wheel":m=fE;break;case"copy":case"cut":case"paste":m=ZS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Cm}var v=(t&4)!==0,k=!v&&e==="scroll",g=v?p!==null?p+"Capture":null:p;v=[];for(var h=u,y;h!==null;){y=h;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,g!==null&&(w=oa(h,g),w!=null&&v.push(ha(h,w,y)))),k)break;h=h.return}0<v.length&&(p=new m(p,x,null,n,d),f.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&n!==ud&&(x=n.relatedTarget||n.fromElement)&&(Hr(x)||x[Vn]))break e;if((m||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=u,x=x?Hr(x):null,x!==null&&(k=di(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(v=Sm,w="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=Cm,w="onPointerLeave",g="onPointerEnter",h="pointer"),k=m==null?p:ki(m),y=x==null?p:ki(x),p=new v(w,h+"leave",m,n,d),p.target=k,p.relatedTarget=y,w=null,Hr(d)===u&&(v=new v(g,h+"enter",x,n,d),v.target=y,v.relatedTarget=k,w=v),k=w,m&&x)t:{for(v=m,g=x,h=0,y=v;y;y=mi(y))h++;for(y=0,w=g;w;w=mi(w))y++;for(;0<h-y;)v=mi(v),h--;for(;0<y-h;)g=mi(g),y--;for(;h--;){if(v===g||g!==null&&v===g.alternate)break t;v=mi(v),g=mi(g)}v=null}else v=null;m!==null&&Mm(f,p,m,v,!1),x!==null&&k!==null&&Mm(f,k,x,v,!0)}}e:{if(p=u?ki(u):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var C=vE;else if(Am(p))if(hv)C=SE;else{C=wE;var b=bE}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=kE);if(C&&(C=C(e,u))){pv(f,C,n,d);break e}b&&b(e,p,u),e==="focusout"&&(b=p._wrapperState)&&b.controlled&&p.type==="number"&&id(p,"number",p.value)}switch(b=u?ki(u):window,e){case"focusin":(Am(b)||b.contentEditable==="true")&&(bi=b,gd=u,Ws=null);break;case"focusout":Ws=gd=bi=null;break;case"mousedown":yd=!0;break;case"contextmenu":case"mouseup":case"dragend":yd=!1,Rm(f,n,d);break;case"selectionchange":if(TE)break;case"keydown":case"keyup":Rm(f,n,d)}var I;if(Qf)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else vi?dv(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(cv&&n.locale!=="ko"&&(vi||N!=="onCompositionStart"?N==="onCompositionEnd"&&vi&&(I=uv()):(ur=d,Kf="value"in ur?ur.value:ur.textContent,vi=!0)),b=fl(u,N),0<b.length&&(N=new Em(N,e,null,n,d),f.push({event:N,listeners:b}),I?N.data=I:(I=fv(n),I!==null&&(N.data=I)))),(I=hE?mE(e,n):gE(e,n))&&(u=fl(u,"onBeforeInput"),0<u.length&&(d=new Em("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=I))}Ev(f,t)})}function ha(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=oa(e,n),s!=null&&r.unshift(ha(e,s,i)),s=oa(e,t),s!=null&&r.push(ha(e,s,i))),e=e.return}return r}function mi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Mm(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===r)break;o.tag===5&&u!==null&&(o=u,i?(l=oa(n,s),l!=null&&a.unshift(ha(n,l,o))):i||(l=oa(n,s),l!=null&&a.push(ha(n,l,o)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var NE=/\r\n?/g,PE=/\u0000|\uFFFD/g;function Fm(e){return(typeof e=="string"?e:""+e).replace(NE,`
`).replace(PE,"")}function ho(e,t,n){if(t=Fm(t),Fm(e)!==t&&n)throw Error(F(425))}function pl(){}var xd=null,vd=null;function bd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wd=typeof setTimeout=="function"?setTimeout:void 0,jE=typeof clearTimeout=="function"?clearTimeout:void 0,Om=typeof Promise=="function"?Promise:void 0,RE=typeof queueMicrotask=="function"?queueMicrotask:typeof Om<"u"?function(e){return Om.resolve(null).then(e).catch(LE)}:wd;function LE(e){setTimeout(function(){throw e})}function Zu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ca(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ca(t)}function mr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cs=Math.random().toString(36).slice(2),mn="__reactFiber$"+cs,ma="__reactProps$"+cs,Vn="__reactContainer$"+cs,kd="__reactEvents$"+cs,DE="__reactListeners$"+cs,ME="__reactHandles$"+cs;function Hr(e){var t=e[mn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vn]||n[mn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zm(e);e!==null;){if(n=e[mn])return n;e=zm(e)}return t}e=n,n=e.parentNode}return null}function Ua(e){return e=e[mn]||e[Vn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ki(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function iu(e){return e[ma]||null}var Sd=[],Si=-1;function _r(e){return{current:e}}function _e(e){0>Si||(e.current=Sd[Si],Sd[Si]=null,Si--)}function Ce(e,t){Si++,Sd[Si]=e.current,e.current=t}var Sr={},lt=_r(Sr),vt=_r(!1),ni=Sr;function qi(e,t){var n=e.type.contextTypes;if(!n)return Sr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function bt(e){return e=e.childContextTypes,e!=null}function hl(){_e(vt),_e(lt)}function Um(e,t,n){if(lt.current!==Sr)throw Error(F(168));Ce(lt,t),Ce(vt,n)}function Tv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(F(108,bS(e)||"Unknown",i));return De({},n,r)}function ml(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sr,ni=lt.current,Ce(lt,e),Ce(vt,vt.current),!0}function Bm(e,t,n){var r=e.stateNode;if(!r)throw Error(F(169));n?(e=Tv(e,t,ni),r.__reactInternalMemoizedMergedChildContext=e,_e(vt),_e(lt),Ce(lt,e)):_e(vt),Ce(vt,n)}var Pn=null,su=!1,Ju=!1;function _v(e){Pn===null?Pn=[e]:Pn.push(e)}function FE(e){su=!0,_v(e)}function Ar(){if(!Ju&&Pn!==null){Ju=!0;var e=0,t=ve;try{var n=Pn;for(ve=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pn=null,su=!1}catch(i){throw Pn!==null&&(Pn=Pn.slice(e+1)),Z0(Hf,Ar),i}finally{ve=t,Ju=!1}}return null}var Ei=[],Ci=0,gl=null,yl=0,zt=[],Ut=0,ri=null,jn=1,Rn="";function Mr(e,t){Ei[Ci++]=yl,Ei[Ci++]=gl,gl=e,yl=t}function Av(e,t,n){zt[Ut++]=jn,zt[Ut++]=Rn,zt[Ut++]=ri,ri=e;var r=jn;e=Rn;var i=32-nn(r)-1;r&=~(1<<i),n+=1;var s=32-nn(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,jn=1<<32-nn(t)+i|n<<i|r,Rn=s+e}else jn=1<<s|n<<i|r,Rn=e}function Jf(e){e.return!==null&&(Mr(e,1),Av(e,1,0))}function ep(e){for(;e===gl;)gl=Ei[--Ci],Ei[Ci]=null,yl=Ei[--Ci],Ei[Ci]=null;for(;e===ri;)ri=zt[--Ut],zt[Ut]=null,Rn=zt[--Ut],zt[Ut]=null,jn=zt[--Ut],zt[Ut]=null}var Nt=null,At=null,Ie=!1,Jt=null;function Iv(e,t){var n=Vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Vm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Nt=e,At=mr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Nt=e,At=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ri!==null?{id:jn,overflow:Rn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Nt=e,At=null,!0):!1;default:return!1}}function Ed(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cd(e){if(Ie){var t=At;if(t){var n=t;if(!Vm(e,t)){if(Ed(e))throw Error(F(418));t=mr(n.nextSibling);var r=Nt;t&&Vm(e,t)?Iv(r,n):(e.flags=e.flags&-4097|2,Ie=!1,Nt=e)}}else{if(Ed(e))throw Error(F(418));e.flags=e.flags&-4097|2,Ie=!1,Nt=e}}}function $m(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Nt=e}function mo(e){if(e!==Nt)return!1;if(!Ie)return $m(e),Ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bd(e.type,e.memoizedProps)),t&&(t=At)){if(Ed(e))throw Nv(),Error(F(418));for(;t;)Iv(e,t),t=mr(t.nextSibling)}if($m(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){At=mr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}At=null}}else At=Nt?mr(e.stateNode.nextSibling):null;return!0}function Nv(){for(var e=At;e;)e=mr(e.nextSibling)}function Ki(){At=Nt=null,Ie=!1}function tp(e){Jt===null?Jt=[e]:Jt.push(e)}var OE=Yn.ReactCurrentBatchConfig;function Cs(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var o=i.refs;a===null?delete o[s]:o[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function go(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hm(e){var t=e._init;return t(e._payload)}function Pv(e){function t(g,h){if(e){var y=g.deletions;y===null?(g.deletions=[h],g.flags|=16):y.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=vr(g,h),g.index=0,g.sibling=null,g}function s(g,h,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<h?(g.flags|=2,h):y):(g.flags|=2,h)):(g.flags|=1048576,h)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function o(g,h,y,w){return h===null||h.tag!==6?(h=ac(y,g.mode,w),h.return=g,h):(h=i(h,y),h.return=g,h)}function l(g,h,y,w){var C=y.type;return C===xi?d(g,h,y.props.children,w,y.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===tr&&Hm(C)===h.type)?(w=i(h,y.props),w.ref=Cs(g,h,y),w.return=g,w):(w=Wo(y.type,y.key,y.props,null,g.mode,w),w.ref=Cs(g,h,y),w.return=g,w)}function u(g,h,y,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=oc(y,g.mode,w),h.return=g,h):(h=i(h,y.children||[]),h.return=g,h)}function d(g,h,y,w,C){return h===null||h.tag!==7?(h=Qr(y,g.mode,w,C),h.return=g,h):(h=i(h,y),h.return=g,h)}function f(g,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ac(""+h,g.mode,y),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case io:return y=Wo(h.type,h.key,h.props,null,g.mode,y),y.ref=Cs(g,null,h),y.return=g,y;case yi:return h=oc(h,g.mode,y),h.return=g,h;case tr:var w=h._init;return f(g,w(h._payload),y)}if(Rs(h)||bs(h))return h=Qr(h,g.mode,y,null),h.return=g,h;go(g,h)}return null}function p(g,h,y,w){var C=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:o(g,h,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case io:return y.key===C?l(g,h,y,w):null;case yi:return y.key===C?u(g,h,y,w):null;case tr:return C=y._init,p(g,h,C(y._payload),w)}if(Rs(y)||bs(y))return C!==null?null:d(g,h,y,w,null);go(g,y)}return null}function m(g,h,y,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(y)||null,o(h,g,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case io:return g=g.get(w.key===null?y:w.key)||null,l(h,g,w,C);case yi:return g=g.get(w.key===null?y:w.key)||null,u(h,g,w,C);case tr:var b=w._init;return m(g,h,y,b(w._payload),C)}if(Rs(w)||bs(w))return g=g.get(y)||null,d(h,g,w,C,null);go(h,w)}return null}function x(g,h,y,w){for(var C=null,b=null,I=h,N=h=0,R=null;I!==null&&N<y.length;N++){I.index>N?(R=I,I=null):R=I.sibling;var _=p(g,I,y[N],w);if(_===null){I===null&&(I=R);break}e&&I&&_.alternate===null&&t(g,I),h=s(_,h,N),b===null?C=_:b.sibling=_,b=_,I=R}if(N===y.length)return n(g,I),Ie&&Mr(g,N),C;if(I===null){for(;N<y.length;N++)I=f(g,y[N],w),I!==null&&(h=s(I,h,N),b===null?C=I:b.sibling=I,b=I);return Ie&&Mr(g,N),C}for(I=r(g,I);N<y.length;N++)R=m(I,g,N,y[N],w),R!==null&&(e&&R.alternate!==null&&I.delete(R.key===null?N:R.key),h=s(R,h,N),b===null?C=R:b.sibling=R,b=R);return e&&I.forEach(function(j){return t(g,j)}),Ie&&Mr(g,N),C}function v(g,h,y,w){var C=bs(y);if(typeof C!="function")throw Error(F(150));if(y=C.call(y),y==null)throw Error(F(151));for(var b=C=null,I=h,N=h=0,R=null,_=y.next();I!==null&&!_.done;N++,_=y.next()){I.index>N?(R=I,I=null):R=I.sibling;var j=p(g,I,_.value,w);if(j===null){I===null&&(I=R);break}e&&I&&j.alternate===null&&t(g,I),h=s(j,h,N),b===null?C=j:b.sibling=j,b=j,I=R}if(_.done)return n(g,I),Ie&&Mr(g,N),C;if(I===null){for(;!_.done;N++,_=y.next())_=f(g,_.value,w),_!==null&&(h=s(_,h,N),b===null?C=_:b.sibling=_,b=_);return Ie&&Mr(g,N),C}for(I=r(g,I);!_.done;N++,_=y.next())_=m(I,g,N,_.value,w),_!==null&&(e&&_.alternate!==null&&I.delete(_.key===null?N:_.key),h=s(_,h,N),b===null?C=_:b.sibling=_,b=_);return e&&I.forEach(function(z){return t(g,z)}),Ie&&Mr(g,N),C}function k(g,h,y,w){if(typeof y=="object"&&y!==null&&y.type===xi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case io:e:{for(var C=y.key,b=h;b!==null;){if(b.key===C){if(C=y.type,C===xi){if(b.tag===7){n(g,b.sibling),h=i(b,y.props.children),h.return=g,g=h;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===tr&&Hm(C)===b.type){n(g,b.sibling),h=i(b,y.props),h.ref=Cs(g,b,y),h.return=g,g=h;break e}n(g,b);break}else t(g,b);b=b.sibling}y.type===xi?(h=Qr(y.props.children,g.mode,w,y.key),h.return=g,g=h):(w=Wo(y.type,y.key,y.props,null,g.mode,w),w.ref=Cs(g,h,y),w.return=g,g=w)}return a(g);case yi:e:{for(b=y.key;h!==null;){if(h.key===b)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(g,h.sibling),h=i(h,y.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=oc(y,g.mode,w),h.return=g,g=h}return a(g);case tr:return b=y._init,k(g,h,b(y._payload),w)}if(Rs(y))return x(g,h,y,w);if(bs(y))return v(g,h,y,w);go(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,y),h.return=g,g=h):(n(g,h),h=ac(y,g.mode,w),h.return=g,g=h),a(g)):n(g,h)}return k}var Yi=Pv(!0),jv=Pv(!1),xl=_r(null),vl=null,Ti=null,np=null;function rp(){np=Ti=vl=null}function ip(e){var t=xl.current;_e(xl),e._currentValue=t}function Td(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zi(e,t){vl=e,np=Ti=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xt=!0),e.firstContext=null)}function Ht(e){var t=e._currentValue;if(np!==e)if(e={context:e,memoizedValue:t,next:null},Ti===null){if(vl===null)throw Error(F(308));Ti=e,vl.dependencies={lanes:0,firstContext:e}}else Ti=Ti.next=e;return t}var Wr=null;function sp(e){Wr===null?Wr=[e]:Wr.push(e)}function Rv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,sp(t)):(n.next=i.next,i.next=n),t.interleaved=n,$n(e,r)}function $n(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nr=!1;function ap(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function On(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,$n(e,n)}return i=r.interleaved,i===null?(t.next=t,sp(r)):(t.next=i.next,i.next=t),r.interleaved=t,$n(e,n)}function zo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wf(e,n)}}function Wm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bl(e,t,n,r){var i=e.updateQueue;nr=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;a=0,d=u=l=null,o=s;do{var p=o.lane,m=o.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=e,v=o;switch(p=t,m=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){f=x.call(m,f,p);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,p=typeof x=="function"?x.call(m,f,p):x,p==null)break e;f=De({},f,p);break e;case 2:nr=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[o]:p.push(o))}else m={eventTime:m,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=m,l=f):d=d.next=m,a|=p;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;p=o,o=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);si|=a,e.lanes=a,e.memoizedState=f}}function Gm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Ba={},xn=_r(Ba),ga=_r(Ba),ya=_r(Ba);function Gr(e){if(e===Ba)throw Error(F(174));return e}function op(e,t){switch(Ce(ya,t),Ce(ga,e),Ce(xn,Ba),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ad(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ad(t,e)}_e(xn),Ce(xn,t)}function Xi(){_e(xn),_e(ga),_e(ya)}function Dv(e){Gr(ya.current);var t=Gr(xn.current),n=ad(t,e.type);t!==n&&(Ce(ga,e),Ce(xn,n))}function lp(e){ga.current===e&&(_e(xn),_e(ga))}var je=_r(0);function wl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ec=[];function up(){for(var e=0;e<ec.length;e++)ec[e]._workInProgressVersionPrimary=null;ec.length=0}var Uo=Yn.ReactCurrentDispatcher,tc=Yn.ReactCurrentBatchConfig,ii=0,Le=null,He=null,qe=null,kl=!1,Gs=!1,xa=0,zE=0;function tt(){throw Error(F(321))}function cp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!un(e[n],t[n]))return!1;return!0}function dp(e,t,n,r,i,s){if(ii=s,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Uo.current=e===null||e.memoizedState===null?$E:HE,e=n(r,i),Gs){s=0;do{if(Gs=!1,xa=0,25<=s)throw Error(F(301));s+=1,qe=He=null,t.updateQueue=null,Uo.current=WE,e=n(r,i)}while(Gs)}if(Uo.current=Sl,t=He!==null&&He.next!==null,ii=0,qe=He=Le=null,kl=!1,t)throw Error(F(300));return e}function fp(){var e=xa!==0;return xa=0,e}function pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Le.memoizedState=qe=e:qe=qe.next=e,qe}function Wt(){if(He===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=qe===null?Le.memoizedState:qe.next;if(t!==null)qe=t,He=e;else{if(e===null)throw Error(F(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},qe===null?Le.memoizedState=qe=e:qe=qe.next=e}return qe}function va(e,t){return typeof t=="function"?t(e):t}function nc(e){var t=Wt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=He,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var o=a=null,l=null,u=s;do{var d=u.lane;if((ii&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=f,a=r):l=l.next=f,Le.lanes|=d,si|=d}u=u.next}while(u!==null&&u!==s);l===null?a=r:l.next=o,un(r,t.memoizedState)||(xt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Le.lanes|=s,si|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rc(e){var t=Wt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);un(s,t.memoizedState)||(xt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Mv(){}function Fv(e,t){var n=Le,r=Wt(),i=t(),s=!un(r.memoizedState,i);if(s&&(r.memoizedState=i,xt=!0),r=r.queue,pp(Uv.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,ba(9,zv.bind(null,n,r,i,t),void 0,null),Ke===null)throw Error(F(349));ii&30||Ov(n,t,i)}return i}function Ov(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zv(e,t,n,r){t.value=n,t.getSnapshot=r,Bv(t)&&Vv(e)}function Uv(e,t,n){return n(function(){Bv(t)&&Vv(e)})}function Bv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!un(e,n)}catch{return!0}}function Vv(e){var t=$n(e,1);t!==null&&rn(t,e,1,-1)}function qm(e){var t=pn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:e},t.queue=e,e=e.dispatch=VE.bind(null,Le,e),[t.memoizedState,e]}function ba(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $v(){return Wt().memoizedState}function Bo(e,t,n,r){var i=pn();Le.flags|=e,i.memoizedState=ba(1|t,n,void 0,r===void 0?null:r)}function au(e,t,n,r){var i=Wt();r=r===void 0?null:r;var s=void 0;if(He!==null){var a=He.memoizedState;if(s=a.destroy,r!==null&&cp(r,a.deps)){i.memoizedState=ba(t,n,s,r);return}}Le.flags|=e,i.memoizedState=ba(1|t,n,s,r)}function Km(e,t){return Bo(8390656,8,e,t)}function pp(e,t){return au(2048,8,e,t)}function Hv(e,t){return au(4,2,e,t)}function Wv(e,t){return au(4,4,e,t)}function Gv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qv(e,t,n){return n=n!=null?n.concat([e]):null,au(4,4,Gv.bind(null,t,e),n)}function hp(){}function Kv(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yv(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xv(e,t,n){return ii&21?(un(n,t)||(n=tv(),Le.lanes|=n,si|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xt=!0),e.memoizedState=n)}function UE(e,t){var n=ve;ve=n!==0&&4>n?n:4,e(!0);var r=tc.transition;tc.transition={};try{e(!1),t()}finally{ve=n,tc.transition=r}}function Qv(){return Wt().memoizedState}function BE(e,t,n){var r=xr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zv(e))Jv(t,n);else if(n=Rv(e,t,n,r),n!==null){var i=ft();rn(n,e,r,i),eb(n,t,r)}}function VE(e,t,n){var r=xr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zv(e))Jv(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,o=s(a,n);if(i.hasEagerState=!0,i.eagerState=o,un(o,a)){var l=t.interleaved;l===null?(i.next=i,sp(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Rv(e,t,i,r),n!==null&&(i=ft(),rn(n,e,r,i),eb(n,t,r))}}function Zv(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function Jv(e,t){Gs=kl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function eb(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wf(e,n)}}var Sl={readContext:Ht,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},$E={readContext:Ht,useCallback:function(e,t){return pn().memoizedState=[e,t===void 0?null:t],e},useContext:Ht,useEffect:Km,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Bo(4194308,4,Gv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Bo(4,2,e,t)},useMemo:function(e,t){var n=pn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=pn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=BE.bind(null,Le,e),[r.memoizedState,e]},useRef:function(e){var t=pn();return e={current:e},t.memoizedState=e},useState:qm,useDebugValue:hp,useDeferredValue:function(e){return pn().memoizedState=e},useTransition:function(){var e=qm(!1),t=e[0];return e=UE.bind(null,e[1]),pn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Le,i=pn();if(Ie){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),Ke===null)throw Error(F(349));ii&30||Ov(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Km(Uv.bind(null,r,s,e),[e]),r.flags|=2048,ba(9,zv.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=pn(),t=Ke.identifierPrefix;if(Ie){var n=Rn,r=jn;n=(r&~(1<<32-nn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zE++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},HE={readContext:Ht,useCallback:Kv,useContext:Ht,useEffect:pp,useImperativeHandle:qv,useInsertionEffect:Hv,useLayoutEffect:Wv,useMemo:Yv,useReducer:nc,useRef:$v,useState:function(){return nc(va)},useDebugValue:hp,useDeferredValue:function(e){var t=Wt();return Xv(t,He.memoizedState,e)},useTransition:function(){var e=nc(va)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:Mv,useSyncExternalStore:Fv,useId:Qv,unstable_isNewReconciler:!1},WE={readContext:Ht,useCallback:Kv,useContext:Ht,useEffect:pp,useImperativeHandle:qv,useInsertionEffect:Hv,useLayoutEffect:Wv,useMemo:Yv,useReducer:rc,useRef:$v,useState:function(){return rc(va)},useDebugValue:hp,useDeferredValue:function(e){var t=Wt();return He===null?t.memoizedState=e:Xv(t,He.memoizedState,e)},useTransition:function(){var e=rc(va)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:Mv,useSyncExternalStore:Fv,useId:Qv,unstable_isNewReconciler:!1};function Qt(e,t){if(e&&e.defaultProps){t=De({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function _d(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:De({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ou={isMounted:function(e){return(e=e._reactInternals)?di(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ft(),i=xr(e),s=On(r,i);s.payload=t,n!=null&&(s.callback=n),t=gr(e,s,i),t!==null&&(rn(t,e,i,r),zo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ft(),i=xr(e),s=On(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=gr(e,s,i),t!==null&&(rn(t,e,i,r),zo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ft(),r=xr(e),i=On(n,r);i.tag=2,t!=null&&(i.callback=t),t=gr(e,i,r),t!==null&&(rn(t,e,r,n),zo(t,e,r))}};function Ym(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!fa(n,r)||!fa(i,s):!0}function tb(e,t,n){var r=!1,i=Sr,s=t.contextType;return typeof s=="object"&&s!==null?s=Ht(s):(i=bt(t)?ni:lt.current,r=t.contextTypes,s=(r=r!=null)?qi(e,i):Sr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ou,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Xm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ou.enqueueReplaceState(t,t.state,null)}function Ad(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ap(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ht(s):(s=bt(t)?ni:lt.current,i.context=qi(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(_d(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ou.enqueueReplaceState(i,i.state,null),bl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Qi(e,t){try{var n="",r=t;do n+=vS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function ic(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Id(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var GE=typeof WeakMap=="function"?WeakMap:Map;function nb(e,t,n){n=On(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Cl||(Cl=!0,zd=r),Id(e,t)},n}function rb(e,t,n){n=On(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Id(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Id(e,t),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Qm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new GE;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=aC.bind(null,e,t,n),t.then(e,e))}function Zm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Jm(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=On(-1,1),t.tag=2,gr(n,t,1))),n.lanes|=1),e)}var qE=Yn.ReactCurrentOwner,xt=!1;function ct(e,t,n,r){t.child=e===null?jv(t,null,n,r):Yi(t,e.child,n,r)}function eg(e,t,n,r,i){n=n.render;var s=t.ref;return zi(t,i),r=dp(e,t,n,r,s,i),n=fp(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hn(e,t,i)):(Ie&&n&&Jf(t),t.flags|=1,ct(e,t,r,i),t.child)}function tg(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!kp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,ib(e,t,s,r,i)):(e=Wo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:fa,n(a,r)&&e.ref===t.ref)return Hn(e,t,i)}return t.flags|=1,e=vr(s,r),e.ref=t.ref,e.return=t,t.child=e}function ib(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(fa(s,r)&&e.ref===t.ref)if(xt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(xt=!0);else return t.lanes=e.lanes,Hn(e,t,i)}return Nd(e,t,n,r,i)}function sb(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(Ai,_t),_t|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ce(Ai,_t),_t|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ce(Ai,_t),_t|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Ce(Ai,_t),_t|=r;return ct(e,t,i,n),t.child}function ab(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Nd(e,t,n,r,i){var s=bt(n)?ni:lt.current;return s=qi(t,s),zi(t,i),n=dp(e,t,n,r,s,i),r=fp(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hn(e,t,i)):(Ie&&r&&Jf(t),t.flags|=1,ct(e,t,n,i),t.child)}function ng(e,t,n,r,i){if(bt(n)){var s=!0;ml(t)}else s=!1;if(zi(t,i),t.stateNode===null)Vo(e,t),tb(t,n,r),Ad(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,o=t.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ht(u):(u=bt(n)?ni:lt.current,u=qi(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||l!==u)&&Xm(t,a,r,u),nr=!1;var p=t.memoizedState;a.state=p,bl(t,r,a,i),l=t.memoizedState,o!==r||p!==l||vt.current||nr?(typeof d=="function"&&(_d(t,n,d,r),l=t.memoizedState),(o=nr||Ym(t,n,o,r,p,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=o):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Lv(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:Qt(t.type,o),a.props=u,f=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ht(l):(l=bt(n)?ni:lt.current,l=qi(t,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||p!==l)&&Xm(t,a,r,l),nr=!1,p=t.memoizedState,a.state=p,bl(t,r,a,i);var x=t.memoizedState;o!==f||p!==x||vt.current||nr?(typeof m=="function"&&(_d(t,n,m,r),x=t.memoizedState),(u=nr||Ym(t,n,u,r,p,x,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Pd(e,t,n,r,s,i)}function Pd(e,t,n,r,i,s){ab(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Bm(t,n,!1),Hn(e,t,s);r=t.stateNode,qE.current=t;var o=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Yi(t,e.child,null,s),t.child=Yi(t,null,o,s)):ct(e,t,o,s),t.memoizedState=r.state,i&&Bm(t,n,!0),t.child}function ob(e){var t=e.stateNode;t.pendingContext?Um(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Um(e,t.context,!1),op(e,t.containerInfo)}function rg(e,t,n,r,i){return Ki(),tp(i),t.flags|=256,ct(e,t,n,r),t.child}var jd={dehydrated:null,treeContext:null,retryLane:0};function Rd(e){return{baseLanes:e,cachePool:null,transitions:null}}function lb(e,t,n){var r=t.pendingProps,i=je.current,s=!1,a=(t.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ce(je,i&1),e===null)return Cd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=cu(a,r,0,null),e=Qr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Rd(n),t.memoizedState=jd,e):mp(t,a));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return KE(e,t,a,r,o,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,o=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=vr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?s=vr(o,s):(s=Qr(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?Rd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=jd,r}return s=e.child,e=s.sibling,r=vr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function mp(e,t){return t=cu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yo(e,t,n,r){return r!==null&&tp(r),Yi(t,e.child,null,n),e=mp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function KE(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=ic(Error(F(422))),yo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=cu({mode:"visible",children:r.children},i,0,null),s=Qr(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Yi(t,e.child,null,a),t.child.memoizedState=Rd(a),t.memoizedState=jd,s);if(!(t.mode&1))return yo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,s=Error(F(419)),r=ic(s,r,void 0),yo(e,t,a,r)}if(o=(a&e.childLanes)!==0,xt||o){if(r=Ke,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$n(e,i),rn(r,e,i,-1))}return wp(),r=ic(Error(F(421))),yo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=oC.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,At=mr(i.nextSibling),Nt=t,Ie=!0,Jt=null,e!==null&&(zt[Ut++]=jn,zt[Ut++]=Rn,zt[Ut++]=ri,jn=e.id,Rn=e.overflow,ri=t),t=mp(t,r.children),t.flags|=4096,t)}function ig(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Td(e.return,t,n)}function sc(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ub(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ct(e,t,r.children,n),r=je.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ig(e,n,t);else if(e.tag===19)ig(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ce(je,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&wl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),sc(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&wl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}sc(t,!0,n,null,s);break;case"together":sc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),si|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=vr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function YE(e,t,n){switch(t.tag){case 3:ob(t),Ki();break;case 5:Dv(t);break;case 1:bt(t.type)&&ml(t);break;case 4:op(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ce(xl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ce(je,je.current&1),t.flags|=128,null):n&t.child.childLanes?lb(e,t,n):(Ce(je,je.current&1),e=Hn(e,t,n),e!==null?e.sibling:null);Ce(je,je.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ub(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ce(je,je.current),r)break;return null;case 22:case 23:return t.lanes=0,sb(e,t,n)}return Hn(e,t,n)}var cb,Ld,db,fb;cb=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ld=function(){};db=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Gr(xn.current);var s=null;switch(n){case"input":i=nd(e,i),r=nd(e,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=sd(e,i),r=sd(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pl)}od(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(sa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(o=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(sa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Te("scroll",e),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};fb=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ts(e,t){if(!Ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function XE(e,t,n){var r=t.pendingProps;switch(ep(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return bt(t.type)&&hl(),nt(t),null;case 3:return r=t.stateNode,Xi(),_e(vt),_e(lt),up(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Jt!==null&&(Vd(Jt),Jt=null))),Ld(e,t),nt(t),null;case 5:lp(t);var i=Gr(ya.current);if(n=t.type,e!==null&&t.stateNode!=null)db(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(F(166));return nt(t),null}if(e=Gr(xn.current),mo(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[mn]=t,r[ma]=s,e=(t.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(i=0;i<Ds.length;i++)Te(Ds[i],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":pm(r,s),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Te("invalid",r);break;case"textarea":mm(r,s),Te("invalid",r)}od(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?r.textContent!==o&&(s.suppressHydrationWarning!==!0&&ho(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ho(r.textContent,o,e),i=["children",""+o]):sa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&Te("scroll",r)}switch(n){case"input":so(r),hm(r,s,!0);break;case"textarea":so(r),gm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=pl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=U0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[mn]=t,e[ma]=r,cb(e,t,!1,!1),t.stateNode=e;e:{switch(a=ld(n,r),n){case"dialog":Te("cancel",e),Te("close",e),i=r;break;case"iframe":case"object":case"embed":Te("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ds.length;i++)Te(Ds[i],e);i=r;break;case"source":Te("error",e),i=r;break;case"img":case"image":case"link":Te("error",e),Te("load",e),i=r;break;case"details":Te("toggle",e),i=r;break;case"input":pm(e,r),i=nd(e,r),Te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),Te("invalid",e);break;case"textarea":mm(e,r),i=sd(e,r),Te("invalid",e);break;default:i=r}od(n,i),o=i;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?$0(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&B0(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&aa(e,l):typeof l=="number"&&aa(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(sa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Te("scroll",e):l!=null&&zf(e,s,l,a))}switch(n){case"input":so(e),hm(e,r,!1);break;case"textarea":so(e),gm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Di(e,!!r.multiple,s,!1):r.defaultValue!=null&&Di(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=pl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)fb(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(F(166));if(n=Gr(ya.current),Gr(xn.current),mo(t)){if(r=t.stateNode,n=t.memoizedProps,r[mn]=t,(s=r.nodeValue!==n)&&(e=Nt,e!==null))switch(e.tag){case 3:ho(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ho(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mn]=t,t.stateNode=r}return nt(t),null;case 13:if(_e(je),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ie&&At!==null&&t.mode&1&&!(t.flags&128))Nv(),Ki(),t.flags|=98560,s=!1;else if(s=mo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(F(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[mn]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;nt(t),s=!1}else Jt!==null&&(Vd(Jt),Jt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||je.current&1?We===0&&(We=3):wp())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return Xi(),Ld(e,t),e===null&&pa(t.stateNode.containerInfo),nt(t),null;case 10:return ip(t.type._context),nt(t),null;case 17:return bt(t.type)&&hl(),nt(t),null;case 19:if(_e(je),s=t.memoizedState,s===null)return nt(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Ts(s,!1);else{if(We!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=wl(e),a!==null){for(t.flags|=128,Ts(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ce(je,je.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ue()>Zi&&(t.flags|=128,r=!0,Ts(s,!1),t.lanes=4194304)}else{if(!r)if(e=wl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ts(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Ie)return nt(t),null}else 2*Ue()-s.renderingStartTime>Zi&&n!==1073741824&&(t.flags|=128,r=!0,Ts(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ue(),t.sibling=null,n=je.current,Ce(je,r?n&1|2:n&1),t):(nt(t),null);case 22:case 23:return bp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_t&1073741824&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function QE(e,t){switch(ep(t),t.tag){case 1:return bt(t.type)&&hl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xi(),_e(vt),_e(lt),up(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return lp(t),null;case 13:if(_e(je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _e(je),null;case 4:return Xi(),null;case 10:return ip(t.type._context),null;case 22:case 23:return bp(),null;case 24:return null;default:return null}}var xo=!1,it=!1,ZE=typeof WeakSet=="function"?WeakSet:Set,W=null;function _i(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(e,t,r)}else n.current=null}function Dd(e,t,n){try{n()}catch(r){Oe(e,t,r)}}var sg=!1;function JE(e,t){if(xd=cl,e=yv(),Zf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(o=a+i),f!==s||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break t;if(p===n&&++u===i&&(o=a),p===s&&++d===r&&(l=a),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vd={focusedElem:e,selectionRange:n},cl=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,k=x.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:Qt(t.type,v),k);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(w){Oe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return x=sg,sg=!1,x}function qs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Dd(t,n,s)}i=i.next}while(i!==r)}}function lu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Md(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pb(e){var t=e.alternate;t!==null&&(e.alternate=null,pb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mn],delete t[ma],delete t[kd],delete t[DE],delete t[ME])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hb(e){return e.tag===5||e.tag===3||e.tag===4}function ag(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pl));else if(r!==4&&(e=e.child,e!==null))for(Fd(e,t,n),e=e.sibling;e!==null;)Fd(e,t,n),e=e.sibling}function Od(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Od(e,t,n),e=e.sibling;e!==null;)Od(e,t,n),e=e.sibling}var Xe=null,Zt=!1;function Qn(e,t,n){for(n=n.child;n!==null;)mb(e,t,n),n=n.sibling}function mb(e,t,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(eu,n)}catch{}switch(n.tag){case 5:it||_i(n,t);case 6:var r=Xe,i=Zt;Xe=null,Qn(e,t,n),Xe=r,Zt=i,Xe!==null&&(Zt?(e=Xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(Zt?(e=Xe,n=n.stateNode,e.nodeType===8?Zu(e.parentNode,n):e.nodeType===1&&Zu(e,n),ca(e)):Zu(Xe,n.stateNode));break;case 4:r=Xe,i=Zt,Xe=n.stateNode.containerInfo,Zt=!0,Qn(e,t,n),Xe=r,Zt=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Dd(n,t,a),i=i.next}while(i!==r)}Qn(e,t,n);break;case 1:if(!it&&(_i(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){Oe(n,t,o)}Qn(e,t,n);break;case 21:Qn(e,t,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,Qn(e,t,n),it=r):Qn(e,t,n);break;default:Qn(e,t,n)}}function og(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ZE),t.forEach(function(r){var i=lC.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,o=a;e:for(;o!==null;){switch(o.tag){case 5:Xe=o.stateNode,Zt=!1;break e;case 3:Xe=o.stateNode.containerInfo,Zt=!0;break e;case 4:Xe=o.stateNode.containerInfo,Zt=!0;break e}o=o.return}if(Xe===null)throw Error(F(160));mb(s,a,i),Xe=null,Zt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Oe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gb(t,e),t=t.sibling}function gb(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kt(t,e),fn(e),r&4){try{qs(3,e,e.return),lu(3,e)}catch(v){Oe(e,e.return,v)}try{qs(5,e,e.return)}catch(v){Oe(e,e.return,v)}}break;case 1:Kt(t,e),fn(e),r&512&&n!==null&&_i(n,n.return);break;case 5:if(Kt(t,e),fn(e),r&512&&n!==null&&_i(n,n.return),e.flags&32){var i=e.stateNode;try{aa(i,"")}catch(v){Oe(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,o=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&O0(i,s),ld(o,a);var u=ld(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?$0(i,f):d==="dangerouslySetInnerHTML"?B0(i,f):d==="children"?aa(i,f):zf(i,d,f,u)}switch(o){case"input":rd(i,s);break;case"textarea":z0(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Di(i,!!s.multiple,m,!1):p!==!!s.multiple&&(s.defaultValue!=null?Di(i,!!s.multiple,s.defaultValue,!0):Di(i,!!s.multiple,s.multiple?[]:"",!1))}i[ma]=s}catch(v){Oe(e,e.return,v)}}break;case 6:if(Kt(t,e),fn(e),r&4){if(e.stateNode===null)throw Error(F(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){Oe(e,e.return,v)}}break;case 3:if(Kt(t,e),fn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ca(t.containerInfo)}catch(v){Oe(e,e.return,v)}break;case 4:Kt(t,e),fn(e);break;case 13:Kt(t,e),fn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(xp=Ue())),r&4&&og(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(it=(u=it)||d,Kt(t,e),it=u):Kt(t,e),fn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(W=e,d=e.child;d!==null;){for(f=W=d;W!==null;){switch(p=W,m=p.child,p.tag){case 0:case 11:case 14:case 15:qs(4,p,p.return);break;case 1:_i(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){Oe(r,n,v)}}break;case 5:_i(p,p.return);break;case 22:if(p.memoizedState!==null){ug(f);continue}}m!==null?(m.return=p,W=m):ug(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=V0("display",a))}catch(v){Oe(e,e.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){Oe(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Kt(t,e),fn(e),r&4&&og(e);break;case 21:break;default:Kt(t,e),fn(e)}}function fn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hb(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(aa(i,""),r.flags&=-33);var s=ag(e);Od(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,o=ag(e);Fd(e,o,a);break;default:throw Error(F(161))}}catch(l){Oe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function eC(e,t,n){W=e,yb(e)}function yb(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||xo;if(!a){var o=i.alternate,l=o!==null&&o.memoizedState!==null||it;o=xo;var u=it;if(xo=a,(it=l)&&!u)for(W=i;W!==null;)a=W,l=a.child,a.tag===22&&a.memoizedState!==null?cg(i):l!==null?(l.return=a,W=l):cg(i);for(;s!==null;)W=s,yb(s),s=s.sibling;W=i,xo=o,it=u}lg(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):lg(e)}}function lg(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||lu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Qt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Gm(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Gm(t,a,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ca(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}it||t.flags&512&&Md(t)}catch(p){Oe(t,t.return,p)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function ug(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function cg(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{lu(4,t)}catch(l){Oe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Oe(t,i,l)}}var s=t.return;try{Md(t)}catch(l){Oe(t,s,l)}break;case 5:var a=t.return;try{Md(t)}catch(l){Oe(t,a,l)}}}catch(l){Oe(t,t.return,l)}if(t===e){W=null;break}var o=t.sibling;if(o!==null){o.return=t.return,W=o;break}W=t.return}}var tC=Math.ceil,El=Yn.ReactCurrentDispatcher,gp=Yn.ReactCurrentOwner,$t=Yn.ReactCurrentBatchConfig,me=0,Ke=null,Ve=null,Ze=0,_t=0,Ai=_r(0),We=0,wa=null,si=0,uu=0,yp=0,Ks=null,yt=null,xp=0,Zi=1/0,Nn=null,Cl=!1,zd=null,yr=null,vo=!1,cr=null,Tl=0,Ys=0,Ud=null,$o=-1,Ho=0;function ft(){return me&6?Ue():$o!==-1?$o:$o=Ue()}function xr(e){return e.mode&1?me&2&&Ze!==0?Ze&-Ze:OE.transition!==null?(Ho===0&&(Ho=tv()),Ho):(e=ve,e!==0||(e=window.event,e=e===void 0?16:lv(e.type)),e):1}function rn(e,t,n,r){if(50<Ys)throw Ys=0,Ud=null,Error(F(185));Oa(e,n,r),(!(me&2)||e!==Ke)&&(e===Ke&&(!(me&2)&&(uu|=n),We===4&&sr(e,Ze)),wt(e,r),n===1&&me===0&&!(t.mode&1)&&(Zi=Ue()+500,su&&Ar()))}function wt(e,t){var n=e.callbackNode;OS(e,t);var r=ul(e,e===Ke?Ze:0);if(r===0)n!==null&&vm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&vm(n),t===1)e.tag===0?FE(dg.bind(null,e)):_v(dg.bind(null,e)),RE(function(){!(me&6)&&Ar()}),n=null;else{switch(nv(r)){case 1:n=Hf;break;case 4:n=J0;break;case 16:n=ll;break;case 536870912:n=ev;break;default:n=ll}n=Cb(n,xb.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xb(e,t){if($o=-1,Ho=0,me&6)throw Error(F(327));var n=e.callbackNode;if(Ui()&&e.callbackNode!==n)return null;var r=ul(e,e===Ke?Ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_l(e,r);else{t=r;var i=me;me|=2;var s=bb();(Ke!==e||Ze!==t)&&(Nn=null,Zi=Ue()+500,Xr(e,t));do try{iC();break}catch(o){vb(e,o)}while(!0);rp(),El.current=s,me=i,Ve!==null?t=0:(Ke=null,Ze=0,t=We)}if(t!==0){if(t===2&&(i=pd(e),i!==0&&(r=i,t=Bd(e,i))),t===1)throw n=wa,Xr(e,0),sr(e,r),wt(e,Ue()),n;if(t===6)sr(e,r);else{if(i=e.current.alternate,!(r&30)&&!nC(i)&&(t=_l(e,r),t===2&&(s=pd(e),s!==0&&(r=s,t=Bd(e,s))),t===1))throw n=wa,Xr(e,0),sr(e,r),wt(e,Ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(F(345));case 2:Fr(e,yt,Nn);break;case 3:if(sr(e,r),(r&130023424)===r&&(t=xp+500-Ue(),10<t)){if(ul(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ft(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=wd(Fr.bind(null,e,yt,Nn),t);break}Fr(e,yt,Nn);break;case 4:if(sr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-nn(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tC(r/1960))-r,10<r){e.timeoutHandle=wd(Fr.bind(null,e,yt,Nn),r);break}Fr(e,yt,Nn);break;case 5:Fr(e,yt,Nn);break;default:throw Error(F(329))}}}return wt(e,Ue()),e.callbackNode===n?xb.bind(null,e):null}function Bd(e,t){var n=Ks;return e.current.memoizedState.isDehydrated&&(Xr(e,t).flags|=256),e=_l(e,t),e!==2&&(t=yt,yt=n,t!==null&&Vd(t)),e}function Vd(e){yt===null?yt=e:yt.push.apply(yt,e)}function nC(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!un(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sr(e,t){for(t&=~yp,t&=~uu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nn(t),r=1<<n;e[n]=-1,t&=~r}}function dg(e){if(me&6)throw Error(F(327));Ui();var t=ul(e,0);if(!(t&1))return wt(e,Ue()),null;var n=_l(e,t);if(e.tag!==0&&n===2){var r=pd(e);r!==0&&(t=r,n=Bd(e,r))}if(n===1)throw n=wa,Xr(e,0),sr(e,t),wt(e,Ue()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fr(e,yt,Nn),wt(e,Ue()),null}function vp(e,t){var n=me;me|=1;try{return e(t)}finally{me=n,me===0&&(Zi=Ue()+500,su&&Ar())}}function ai(e){cr!==null&&cr.tag===0&&!(me&6)&&Ui();var t=me;me|=1;var n=$t.transition,r=ve;try{if($t.transition=null,ve=1,e)return e()}finally{ve=r,$t.transition=n,me=t,!(me&6)&&Ar()}}function bp(){_t=Ai.current,_e(Ai)}function Xr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,jE(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(ep(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hl();break;case 3:Xi(),_e(vt),_e(lt),up();break;case 5:lp(r);break;case 4:Xi();break;case 13:_e(je);break;case 19:_e(je);break;case 10:ip(r.type._context);break;case 22:case 23:bp()}n=n.return}if(Ke=e,Ve=e=vr(e.current,null),Ze=_t=t,We=0,wa=null,yp=uu=si=0,yt=Ks=null,Wr!==null){for(t=0;t<Wr.length;t++)if(n=Wr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}Wr=null}return e}function vb(e,t){do{var n=Ve;try{if(rp(),Uo.current=Sl,kl){for(var r=Le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}kl=!1}if(ii=0,qe=He=Le=null,Gs=!1,xa=0,gp.current=null,n===null||n.return===null){We=1,wa=t,Ve=null;break}e:{var s=e,a=n.return,o=n,l=t;if(t=Ze,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Zm(a);if(m!==null){m.flags&=-257,Jm(m,a,o,s,t),m.mode&1&&Qm(s,u,t),t=m,l=u;var x=t.updateQueue;if(x===null){var v=new Set;v.add(l),t.updateQueue=v}else x.add(l);break e}else{if(!(t&1)){Qm(s,u,t),wp();break e}l=Error(F(426))}}else if(Ie&&o.mode&1){var k=Zm(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Jm(k,a,o,s,t),tp(Qi(l,o));break e}}s=l=Qi(l,o),We!==4&&(We=2),Ks===null?Ks=[s]:Ks.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=nb(s,l,t);Wm(s,g);break e;case 1:o=l;var h=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(yr===null||!yr.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=rb(s,o,t);Wm(s,w);break e}}s=s.return}while(s!==null)}kb(n)}catch(C){t=C,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function bb(){var e=El.current;return El.current=Sl,e===null?Sl:e}function wp(){(We===0||We===3||We===2)&&(We=4),Ke===null||!(si&268435455)&&!(uu&268435455)||sr(Ke,Ze)}function _l(e,t){var n=me;me|=2;var r=bb();(Ke!==e||Ze!==t)&&(Nn=null,Xr(e,t));do try{rC();break}catch(i){vb(e,i)}while(!0);if(rp(),me=n,El.current=r,Ve!==null)throw Error(F(261));return Ke=null,Ze=0,We}function rC(){for(;Ve!==null;)wb(Ve)}function iC(){for(;Ve!==null&&!IS();)wb(Ve)}function wb(e){var t=Eb(e.alternate,e,_t);e.memoizedProps=e.pendingProps,t===null?kb(e):Ve=t,gp.current=null}function kb(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=QE(n,t),n!==null){n.flags&=32767,Ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{We=6,Ve=null;return}}else if(n=XE(n,t,_t),n!==null){Ve=n;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);We===0&&(We=5)}function Fr(e,t,n){var r=ve,i=$t.transition;try{$t.transition=null,ve=1,sC(e,t,n,r)}finally{$t.transition=i,ve=r}return null}function sC(e,t,n,r){do Ui();while(cr!==null);if(me&6)throw Error(F(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(zS(e,s),e===Ke&&(Ve=Ke=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vo||(vo=!0,Cb(ll,function(){return Ui(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$t.transition,$t.transition=null;var a=ve;ve=1;var o=me;me|=4,gp.current=null,JE(e,n),gb(n,e),CE(vd),cl=!!xd,vd=xd=null,e.current=n,eC(n),NS(),me=o,ve=a,$t.transition=s}else e.current=n;if(vo&&(vo=!1,cr=e,Tl=i),s=e.pendingLanes,s===0&&(yr=null),RS(n.stateNode),wt(e,Ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Cl)throw Cl=!1,e=zd,zd=null,e;return Tl&1&&e.tag!==0&&Ui(),s=e.pendingLanes,s&1?e===Ud?Ys++:(Ys=0,Ud=e):Ys=0,Ar(),null}function Ui(){if(cr!==null){var e=nv(Tl),t=$t.transition,n=ve;try{if($t.transition=null,ve=16>e?16:e,cr===null)var r=!1;else{if(e=cr,cr=null,Tl=0,me&6)throw Error(F(331));var i=me;for(me|=4,W=e.current;W!==null;){var s=W,a=s.child;if(W.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(W=u;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:qs(8,d,s)}var f=d.child;if(f!==null)f.return=d,W=f;else for(;W!==null;){d=W;var p=d.sibling,m=d.return;if(pb(d),d===u){W=null;break}if(p!==null){p.return=m,W=p;break}W=m}}}var x=s.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}W=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,W=a;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qs(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,W=g;break e}W=s.return}}var h=e.current;for(W=h;W!==null;){a=W;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,W=y;else e:for(a=h;W!==null;){if(o=W,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:lu(9,o)}}catch(C){Oe(o,o.return,C)}if(o===a){W=null;break e}var w=o.sibling;if(w!==null){w.return=o.return,W=w;break e}W=o.return}}if(me=i,Ar(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(eu,e)}catch{}r=!0}return r}finally{ve=n,$t.transition=t}}return!1}function fg(e,t,n){t=Qi(n,t),t=nb(e,t,1),e=gr(e,t,1),t=ft(),e!==null&&(Oa(e,1,t),wt(e,t))}function Oe(e,t,n){if(e.tag===3)fg(e,e,n);else for(;t!==null;){if(t.tag===3){fg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){e=Qi(n,e),e=rb(t,e,1),t=gr(t,e,1),e=ft(),t!==null&&(Oa(t,1,e),wt(t,e));break}}t=t.return}}function aC(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&n,Ke===e&&(Ze&n)===n&&(We===4||We===3&&(Ze&130023424)===Ze&&500>Ue()-xp?Xr(e,0):yp|=n),wt(e,t)}function Sb(e,t){t===0&&(e.mode&1?(t=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):t=1);var n=ft();e=$n(e,t),e!==null&&(Oa(e,t,n),wt(e,n))}function oC(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sb(e,n)}function lC(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(t),Sb(e,n)}var Eb;Eb=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||vt.current)xt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xt=!1,YE(e,t,n);xt=!!(e.flags&131072)}else xt=!1,Ie&&t.flags&1048576&&Av(t,yl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vo(e,t),e=t.pendingProps;var i=qi(t,lt.current);zi(t,n),i=dp(null,t,r,e,i,n);var s=fp();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,bt(r)?(s=!0,ml(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ap(t),i.updater=ou,t.stateNode=i,i._reactInternals=t,Ad(t,r,e,n),t=Pd(null,t,r,!0,s,n)):(t.tag=0,Ie&&s&&Jf(t),ct(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=cC(r),e=Qt(r,e),i){case 0:t=Nd(null,t,r,e,n);break e;case 1:t=ng(null,t,r,e,n);break e;case 11:t=eg(null,t,r,e,n);break e;case 14:t=tg(null,t,r,Qt(r.type,e),n);break e}throw Error(F(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),Nd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),ng(e,t,r,i,n);case 3:e:{if(ob(t),e===null)throw Error(F(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Lv(e,t),bl(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Qi(Error(F(423)),t),t=rg(e,t,r,n,i);break e}else if(r!==i){i=Qi(Error(F(424)),t),t=rg(e,t,r,n,i);break e}else for(At=mr(t.stateNode.containerInfo.firstChild),Nt=t,Ie=!0,Jt=null,n=jv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ki(),r===i){t=Hn(e,t,n);break e}ct(e,t,r,n)}t=t.child}return t;case 5:return Dv(t),e===null&&Cd(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,bd(r,i)?a=null:s!==null&&bd(r,s)&&(t.flags|=32),ab(e,t),ct(e,t,a,n),t.child;case 6:return e===null&&Cd(t),null;case 13:return lb(e,t,n);case 4:return op(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yi(t,null,r,n):ct(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),eg(e,t,r,i,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Ce(xl,r._currentValue),r._currentValue=a,s!==null)if(un(s.value,a)){if(s.children===i.children&&!vt.current){t=Hn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=On(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Td(s.return,n,t),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(F(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Td(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ct(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,zi(t,n),i=Ht(i),r=r(i),t.flags|=1,ct(e,t,r,n),t.child;case 14:return r=t.type,i=Qt(r,t.pendingProps),i=Qt(r.type,i),tg(e,t,r,i,n);case 15:return ib(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),Vo(e,t),t.tag=1,bt(r)?(e=!0,ml(t)):e=!1,zi(t,n),tb(t,r,i),Ad(t,r,i,n),Pd(null,t,r,!0,e,n);case 19:return ub(e,t,n);case 22:return sb(e,t,n)}throw Error(F(156,t.tag))};function Cb(e,t){return Z0(e,t)}function uC(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(e,t,n,r){return new uC(e,t,n,r)}function kp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cC(e){if(typeof e=="function")return kp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bf)return 11;if(e===Vf)return 14}return 2}function vr(e,t){var n=e.alternate;return n===null?(n=Vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wo(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")kp(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case xi:return Qr(n.children,i,s,t);case Uf:a=8,i|=8;break;case Zc:return e=Vt(12,n,t,i|2),e.elementType=Zc,e.lanes=s,e;case Jc:return e=Vt(13,n,t,i),e.elementType=Jc,e.lanes=s,e;case ed:return e=Vt(19,n,t,i),e.elementType=ed,e.lanes=s,e;case D0:return cu(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R0:a=10;break e;case L0:a=9;break e;case Bf:a=11;break e;case Vf:a=14;break e;case tr:a=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=Vt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Qr(e,t,n,r){return e=Vt(7,e,r,t),e.lanes=n,e}function cu(e,t,n,r){return e=Vt(22,e,r,t),e.elementType=D0,e.lanes=n,e.stateNode={isHidden:!1},e}function ac(e,t,n){return e=Vt(6,e,null,t),e.lanes=n,e}function oc(e,t,n){return t=Vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dC(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bu(0),this.expirationTimes=Bu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Sp(e,t,n,r,i,s,a,o,l){return e=new dC(e,t,n,o,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Vt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ap(s),e}function fC(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tb(e){if(!e)return Sr;e=e._reactInternals;e:{if(di(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(bt(n))return Tv(e,n,t)}return t}function _b(e,t,n,r,i,s,a,o,l){return e=Sp(n,r,!0,e,i,s,a,o,l),e.context=Tb(null),n=e.current,r=ft(),i=xr(n),s=On(r,i),s.callback=t??null,gr(n,s,i),e.current.lanes=i,Oa(e,i,r),wt(e,r),e}function du(e,t,n,r){var i=t.current,s=ft(),a=xr(i);return n=Tb(n),t.context===null?t.context=n:t.pendingContext=n,t=On(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gr(i,t,a),e!==null&&(rn(e,i,a,s),zo(e,i,a)),a}function Al(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ep(e,t){pg(e,t),(e=e.alternate)&&pg(e,t)}function pC(){return null}var Ab=typeof reportError=="function"?reportError:function(e){console.error(e)};function Cp(e){this._internalRoot=e}fu.prototype.render=Cp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));du(e,t,null,null)};fu.prototype.unmount=Cp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ai(function(){du(null,e,null,null)}),t[Vn]=null}};function fu(e){this._internalRoot=e}fu.prototype.unstable_scheduleHydration=function(e){if(e){var t=sv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ir.length&&t!==0&&t<ir[n].priority;n++);ir.splice(n,0,e),n===0&&ov(e)}};function Tp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hg(){}function hC(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Al(a);s.call(u)}}var a=_b(t,r,e,0,null,!1,!1,"",hg);return e._reactRootContainer=a,e[Vn]=a.current,pa(e.nodeType===8?e.parentNode:e),ai(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var u=Al(l);o.call(u)}}var l=Sp(e,0,!1,null,null,!1,!1,"",hg);return e._reactRootContainer=l,e[Vn]=l.current,pa(e.nodeType===8?e.parentNode:e),ai(function(){du(t,l,n,r)}),l}function hu(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var o=i;i=function(){var l=Al(a);o.call(l)}}du(t,a,e,i)}else a=hC(n,t,e,i,r);return Al(a)}rv=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ls(t.pendingLanes);n!==0&&(Wf(t,n|1),wt(t,Ue()),!(me&6)&&(Zi=Ue()+500,Ar()))}break;case 13:ai(function(){var r=$n(e,1);if(r!==null){var i=ft();rn(r,e,1,i)}}),Ep(e,1)}};Gf=function(e){if(e.tag===13){var t=$n(e,134217728);if(t!==null){var n=ft();rn(t,e,134217728,n)}Ep(e,134217728)}};iv=function(e){if(e.tag===13){var t=xr(e),n=$n(e,t);if(n!==null){var r=ft();rn(n,e,t,r)}Ep(e,t)}};sv=function(){return ve};av=function(e,t){var n=ve;try{return ve=e,t()}finally{ve=n}};cd=function(e,t,n){switch(t){case"input":if(rd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=iu(r);if(!i)throw Error(F(90));F0(r),rd(r,i)}}}break;case"textarea":z0(e,n);break;case"select":t=n.value,t!=null&&Di(e,!!n.multiple,t,!1)}};G0=vp;q0=ai;var mC={usingClientEntryPoint:!1,Events:[Ua,ki,iu,H0,W0,vp]},_s={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gC={bundleType:_s.bundleType,version:_s.version,rendererPackageName:_s.rendererPackageName,rendererConfig:_s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=X0(e),e===null?null:e.stateNode},findFiberByHostInstance:_s.findFiberByHostInstance||pC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bo.isDisabled&&bo.supportsFiber)try{eu=bo.inject(gC),yn=bo}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mC;Lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tp(t))throw Error(F(200));return fC(e,t,null,n)};Lt.createRoot=function(e,t){if(!Tp(e))throw Error(F(299));var n=!1,r="",i=Ab;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Sp(e,1,!1,null,null,n,!1,r,i),e[Vn]=t.current,pa(e.nodeType===8?e.parentNode:e),new Cp(t)};Lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=X0(t),e=e===null?null:e.stateNode,e};Lt.flushSync=function(e){return ai(e)};Lt.hydrate=function(e,t,n){if(!pu(t))throw Error(F(200));return hu(null,e,t,!0,n)};Lt.hydrateRoot=function(e,t,n){if(!Tp(e))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=Ab;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=_b(t,null,e,1,n??null,i,!1,s,a),e[Vn]=t.current,pa(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new fu(t)};Lt.render=function(e,t,n){if(!pu(t))throw Error(F(200));return hu(null,e,t,!1,n)};Lt.unmountComponentAtNode=function(e){if(!pu(e))throw Error(F(40));return e._reactRootContainer?(ai(function(){hu(null,null,e,!1,function(){e._reactRootContainer=null,e[Vn]=null})}),!0):!1};Lt.unstable_batchedUpdates=vp;Lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!pu(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return hu(e,t,n,!1,r)};Lt.version="18.3.1-next-f1338f8080-20240426";function Ib(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ib)}catch(e){console.error(e)}}Ib(),I0.exports=Lt;var yC=I0.exports,Nb,mg=yC;Nb=mg.createRoot,mg.hydrateRoot;/**
 * react-router v7.18.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var _p=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Pb=/^[\\/]{2}/;function xC(e,t){return t+e.replace(/\\/g,"/")}var gg="popstate";function yg(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function vC(e={}){function t(r,i){var u;let s=(u=i.state)==null?void 0:u.masked,{pathname:a,search:o,hash:l}=s||r.location;return $d("",{pathname:a,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default",s?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,i){return typeof i=="string"?i:oi(i)}return wC(t,n,null,e)}function Ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function cn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function bC(){return Math.random().toString(36).substring(2,10)}function xg(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function $d(e,t,n=null,r,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?ds(t):t,state:n,key:t&&t.key||r||bC(),mask:i}}function oi({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function ds(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function wC(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,o="POP",l=null,u=d();u==null&&(u=0,a.replaceState({...a.state,idx:u},""));function d(){return(a.state||{idx:null}).idx}function f(){o="POP";let k=d(),g=k==null?null:k-u;u=k,l&&l({action:o,location:v.location,delta:g})}function p(k,g){o="PUSH";let h=yg(k)?k:$d(v.location,k,g);u=d()+1;let y=xg(h,u),w=v.createHref(h.mask||h);try{a.pushState(y,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(w)}s&&l&&l({action:o,location:v.location,delta:1})}function m(k,g){o="REPLACE";let h=yg(k)?k:$d(v.location,k,g);u=d();let y=xg(h,u),w=v.createHref(h.mask||h);a.replaceState(y,"",w),s&&l&&l({action:o,location:v.location,delta:0})}function x(k){return kC(i,k)}let v={get action(){return o},get location(){return e(i,a)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(gg,f),l=k,()=>{i.removeEventListener(gg,f),l=null}},createHref(k){return t(i,k)},createURL:x,encodeLocation(k){let g=x(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:m,go(k){return a.go(k)}};return v}function kC(e,t,n=!1){let r="http://localhost";e&&(r=e.location.origin!=="null"?e.location.origin:e.location.href),Ne(r,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:oi(t);return i=i.replace(/ $/,"%20"),!n&&Pb.test(i)&&(i=r+i),new URL(i,r)}function jb(e,t,n="/"){return SC(e,t,n,!1)}function SC(e,t,n,r,i){let s=typeof t=="string"?ds(t):t,a=Wn(s.pathname||"/",n);if(a==null)return null;let o=EC(e),l=null,u=DC(a);for(let d=0;l==null&&d<o.length;++d)l=LC(o[d],u,r);return l}function EC(e){let t=Rb(e);return CC(t),t}function Rb(e,t=[],n=[],r="",i=!1){let s=(a,o,l=i,u)=>{let d={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(r)&&l)return;Ne(d.relativePath.startsWith(r),`Absolute route path "${d.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(r.length)}let f=sn([r,d.relativePath]),p=n.concat(d);a.children&&a.children.length>0&&(Ne(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),Rb(a.children,t,p,f,l)),!(a.path==null&&!a.index)&&t.push({path:f,score:jC(f,a.index),routesMeta:p.map((m,x)=>{let[v,k]=Mb(m.relativePath,m.caseSensitive,x===p.length-1);return{...m,matcher:v,compiledParams:k}})})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,o);else for(let u of Lb(a.path))s(a,o,!0,u)}),t}function Lb(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=Lb(r.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),i&&o.push(...a),o.map(l=>e.startsWith("/")&&l===""?"/":l)}function CC(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:RC(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var TC=/^:[\w-]+$/,_C=3,AC=2,IC=1,NC=10,PC=-2,vg=e=>e==="*";function jC(e,t){let n=e.split("/"),r=n.length;return n.some(vg)&&(r+=PC),t&&(r+=AC),n.filter(i=>!vg(i)).reduce((i,s)=>i+(TC.test(s)?_C:s===""?IC:NC),r)}function RC(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function LC(e,t,n=!1){let{routesMeta:r}=e,i={},s="/",a=[];for(let o=0;o<r.length;++o){let l=r[o],u=o===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",f={path:l.relativePath,caseSensitive:l.caseSensitive,end:u},p=l.matcher&&l.compiledParams?Db(f,d,l.matcher,l.compiledParams):Il(f,d),m=l.route;if(!p&&u&&n&&!r[r.length-1].route.index&&(p=Il({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:sn([s,p.pathname]),pathnameBase:OC(sn([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=sn([s,p.pathnameBase]))}return a}function Il(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Mb(e.path,e.caseSensitive,e.end);return Db(e,t,n,r)}function Db(e,t,n,r){let i=t.match(n);if(!i)return null;let s=i[0],a=Ji(s,1),o=i.slice(1);return{params:r.reduce((u,{paramName:d,isOptional:f},p)=>{if(d==="*"){let x=o[p]||"";a=Ji(s.slice(0,s.length-x.length),1)}const m=o[p];return f&&!m?u[d]=void 0:u[d]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function Mb(e,t=!1,n=!0){cn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l,u,d)=>{if(r.push({paramName:o,isOptional:l!=null}),l){let f=d.charAt(u+a.length);return f&&f!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function DC(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return cn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Wn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function MC(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ds(e):e,s;return n?(n=Fb(n),n.startsWith("/")||n.startsWith("\\")?s=bg(n.substring(1),"/"):s=bg(n,t)):s=t,{pathname:s,search:zC(r),hash:UC(i)}}function bg(e,t){let n=Ji(t).split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function lc(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function FC(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ap(e){let t=FC(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function mu(e,t,n,r=!1){let i;typeof e=="string"?i=ds(e):(i={...e},Ne(!i.pathname||!i.pathname.includes("?"),lc("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),lc("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),lc("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,o;if(a==null)o=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}o=f>=0?t[f]:"/"}let l=MC(i,o),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}var Fb=e=>e.replace(/[\\/]{2,}/g,"/"),sn=e=>Fb(e.join("/"));function Ji(e,t=0){let n=e.length;for(;n>t&&e.charCodeAt(n-1)===47;)n--;return n===e.length?e:e.slice(0,n)}var OC=e=>Ji(e).replace(/^\/*/,"/"),zC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,UC=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,BC=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function VC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function $C(e){let t=e.map(n=>n.route.path).filter(Boolean);return sn(t)||"/"}var Ob=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function zb(e,t){let n=e;if(typeof n!="string"||!_p.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ob)try{let s=new URL(window.location.href),a=Pb.test(n)?new URL(xC(n,s.protocol)):new URL(n),o=Wn(a.pathname,t);a.origin===s.origin&&o!=null?n=o+a.search+a.hash:i=!0}catch{cn(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var wg=new URL("http://localhost");function Ip(e){if(e.createURL)return e.createURL("/");try{return new URL(e.createHref("/"),wg)}catch{return wg}}function uc(e,t){return e.origin===t.origin&&(e.origin!=="null"||e.protocol===t.protocol&&e.host===t.host)}function HC(e,t){if(e.startsWith("//"))return!0;let n=t.protocol.toLowerCase();return e.toLowerCase().startsWith(n)?t.host===""||e.slice(n.length).startsWith("//"):!1}function Np(e,t,n,r){let i=null;try{i=e==null?null:new URL(e,n)}catch{}let s=new URL(t,n),a=i!=null&&!uc(i,n),o=!uc(s,n);if(r==="reject"){if(a||o)throw new Error("External navigation is not allowed")}else if(o&&(i==null||!HC(e,i)||!uc(i,s)))throw new Error("External navigation is not allowed")}var Ub=["POST","PUT","PATCH","DELETE"];new Set(Ub);var WC=["GET",...Ub];new Set(WC);var GC=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function qC(e){try{return GC.includes(new URL(e).protocol)}catch{return!1}}var fs=E.createContext(null);fs.displayName="DataRouter";var gu=E.createContext(null);gu.displayName="DataRouterState";var Bb=E.createContext(!1);function KC(){return E.useContext(Bb)}var Vb=E.createContext({isTransitioning:!1});Vb.displayName="ViewTransition";var YC=E.createContext(new Map);YC.displayName="Fetchers";var XC=E.createContext(null);XC.displayName="Await";var Mt=E.createContext(null);Mt.displayName="Navigation";var Va=E.createContext(null);Va.displayName="Location";var Sn=E.createContext({outlet:null,matches:[],isDataRoute:!1});Sn.displayName="Route";var Pp=E.createContext(null);Pp.displayName="RouteError";var $b="REACT_ROUTER_ERROR",QC="REDIRECT",ZC="ROUTE_ERROR_RESPONSE";function JC(e){if(e.startsWith(`${$b}:${QC}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function eT(e){if(e.startsWith(`${$b}:${ZC}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new BC(t.status,t.statusText,t.data)}catch{}}function tT(e,{relative:t}={}){Ne(ps(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=E.useContext(Mt),{hash:i,pathname:s,search:a}=$a(e,{relative:t}),o=s;return n!=="/"&&(o=s==="/"?n:sn([n,s])),r.createHref({pathname:o,search:a,hash:i})}function ps(){return E.useContext(Va)!=null}function dn(){return Ne(ps(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(Va).location}var Hb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Wb(e){E.useContext(Mt).static||E.useLayoutEffect(e)}function yu(){let{isDataRoute:e}=E.useContext(Sn);return e?hT():nT()}function nT(){Ne(ps(),"useNavigate() may be used only in the context of a <Router> component.");let e=E.useContext(fs),{basename:t,navigator:n}=E.useContext(Mt),{matches:r}=E.useContext(Sn),{pathname:i}=dn(),s=JSON.stringify(Ap(r)),a=E.useRef(!1);return Wb(()=>{a.current=!0}),E.useCallback((l,u={})=>{if(cn(a.current,Hb),!a.current)return;if(typeof l=="number"){n.go(l);return}let d=mu(l,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:sn([t,d.pathname])),Np(typeof l=="string"?l:oi(l),n.createHref(d),Ip(n),"reject"),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,s,i,e])}E.createContext(null);function $a(e,{relative:t}={}){let{matches:n}=E.useContext(Sn),{pathname:r}=dn(),i=JSON.stringify(Ap(n));return E.useMemo(()=>mu(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function rT(e,t){return Gb(e,t)}function Gb(e,t,n){var k;Ne(ps(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=E.useContext(Mt),{matches:i}=E.useContext(Sn),s=i[i.length-1],a=s?s.params:{},o=s?s.pathname:"/",l=s?s.pathnameBase:"/",u=s&&s.route;{let g=u&&u.path||"";Kb(o,!u||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let d=dn(),f;if(t){let g=typeof t=="string"?ds(t):t;Ne(l==="/"||((k=g.pathname)==null?void 0:k.startsWith(l)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${g.pathname}" was given in the \`location\` prop.`),f=g}else f=d;let p=f.pathname||"/",m=p;if(l!=="/"){let g=l.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(g.length).join("/")}let x=n&&n.state.matches.length?n.state.matches.map(g=>Object.assign(g,{route:n.manifest[g.route.id]||g.route})):jb(e,{pathname:m});cn(u||x!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),cn(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=lT(x&&x.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:sn([l,r.encodeLocation?r.encodeLocation(g.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:sn([l,r.encodeLocation?r.encodeLocation(g.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:g.pathnameBase])})),i,n);return t&&v?E.createElement(Va.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...f},navigationType:"POP"}},v):v}function iT(){let e=pT(),t=VC(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",e),a=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:s},"ErrorBoundary")," or"," ",E.createElement("code",{style:s},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,a)}var sT=E.createElement(iT,null),qb=class extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=eT(e.digest);n&&(e=n)}let t=e!==void 0?E.createElement(Sn.Provider,{value:this.props.routeContext},E.createElement(Pp.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?E.createElement(aT,{error:e},t):t}};qb.contextType=Bb;var cc=new WeakMap;function aT({children:e,error:t}){let{basename:n,navigator:r}=E.useContext(Mt);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let i=JC(t.digest);if(i){let s=cc.get(t);if(s)throw s;let a=zb(i.location,n),o=a.absoluteURL||a.to;if(Np(i.location,o,Ip(r),"allow-explicit"),qC(o))throw new Error("Invalid redirect location");if(Ob&&!cc.get(t))if(a.isExternal||i.reloadDocument)window.location.href=o;else{const l=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:i.replace}));throw cc.set(t,l),l}return E.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o}`})}}return e}function oT({routeContext:e,match:t,children:n}){let r=E.useContext(fs);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),E.createElement(Sn.Provider,{value:e},n)}function lT(e,t=[],n){let r=n==null?void 0:n.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,s=r==null?void 0:r.errors;if(s!=null){let d=i.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);Ne(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,d+1))}let a=!1,o=-1;if(n&&r){a=r.renderFallback;for(let d=0;d<i.length;d++){let f=i[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(o=d),f.route.id){let{loaderData:p,errors:m}=r,x=f.route.loader&&!p.hasOwnProperty(f.route.id)&&(!m||m[f.route.id]===void 0);if(f.route.lazy||x){n.isStatic&&(a=!0),o>=0?i=i.slice(0,o+1):i=[i[0]];break}}}}let l=n==null?void 0:n.onError,u=r&&l?(d,f)=>{var p,m;l(d,{location:r.location,params:((m=(p=r.matches)==null?void 0:p[0])==null?void 0:m.params)??{},pattern:$C(r.matches),errorInfo:f})}:void 0;return i.reduceRight((d,f,p)=>{let m,x=!1,v=null,k=null;r&&(m=s&&f.route.id?s[f.route.id]:void 0,v=f.route.errorElement||sT,a&&(o<0&&p===0?(Kb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,k=null):o===p&&(x=!0,k=f.route.hydrateFallbackElement||null)));let g=t.concat(i.slice(0,p+1)),h=()=>{let y;return m?y=v:x?y=k:f.route.Component?y=E.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=d,E.createElement(oT,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:r!=null},children:y})};return r&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?E.createElement(qb,{location:r.location,revalidation:r.revalidation,component:v,error:m,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0},onError:u}):h()},null)}function jp(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function uT(e){let t=E.useContext(fs);return Ne(t,jp(e)),t}function cT(e){let t=E.useContext(gu);return Ne(t,jp(e)),t}function dT(e){let t=E.useContext(Sn);return Ne(t,jp(e)),t}function Rp(e){let t=dT(e),n=t.matches[t.matches.length-1];return Ne(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function fT(){return Rp("useRouteId")}function pT(){var r;let e=E.useContext(Pp),t=cT("useRouteError"),n=Rp("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function hT(){let{router:e}=uT("useNavigate"),t=Rp("useNavigate"),n=E.useRef(!1);return Wb(()=>{n.current=!0}),E.useCallback(async(i,s={})=>{cn(n.current,Hb),n.current&&(typeof i=="number"?await e.navigate(i):await e.navigate(i,{fromRouteId:t,...s}))},[e,t])}var kg={};function Kb(e,t,n){!t&&!kg[e]&&(kg[e]=!0,cn(!1,n))}E.memo(mT);function mT({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:s}){return Gb(e,void 0,{manifest:t,state:r,isStatic:i,onError:s})}function gT({to:e,replace:t,state:n,relative:r}){Ne(ps(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i,navigator:s}=E.useContext(Mt);cn(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=E.useContext(Sn),{pathname:o}=dn(),l=yu(),u=mu(e,Ap(a),o,r==="path");Np(typeof e=="string"?e:oi(e),s.createHref(u),Ip(s),"reject");let d=JSON.stringify(u);return E.useEffect(()=>{l(JSON.parse(d),{replace:t,state:n,relative:r})},[l,d,r,t,n]),null}function Or(e){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function yT({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:s=!1,useTransitions:a}){Ne(!ps(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),l=E.useMemo(()=>({basename:o,navigator:i,static:s,useTransitions:a,future:{}}),[o,i,s,a]);typeof n=="string"&&(n=ds(n));let{pathname:u="/",search:d="",hash:f="",state:p=null,key:m="default",mask:x}=n,v=E.useMemo(()=>{let k=Wn(u,o);return k==null?null:{location:{pathname:k,search:d,hash:f,state:p,key:m,mask:x},navigationType:r}},[o,u,d,f,p,m,r,x]);return cn(v!=null,`<Router basename="${o}"> is not able to match the URL "${u}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:E.createElement(Mt.Provider,{value:l},E.createElement(Va.Provider,{children:t,value:v}))}function xT({children:e,location:t}){return rT(Hd(e),t)}function Hd(e,t=[]){let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let s=[...t,i];if(r.type===E.Fragment){n.push.apply(n,Hd(r.props.children,s));return}Ne(r.type===Or,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Hd(r.props.children,s)),n.push(a)}),n}var Go="get",qo="application/x-www-form-urlencoded";function xu(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function vT(e){return xu(e)&&e.tagName.toLowerCase()==="button"}function bT(e){return xu(e)&&e.tagName.toLowerCase()==="form"}function wT(e){return xu(e)&&e.tagName.toLowerCase()==="input"}function kT(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ST(e,t){return e.button===0&&(!t||t==="_self")&&!kT(e)}var wo=null;function ET(){if(wo===null)try{new FormData(document.createElement("form"),0),wo=!1}catch{wo=!0}return wo}var CT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function dc(e){return e!=null&&!CT.has(e)?(cn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qo}"`),null):e}function TT(e,t){let n,r,i,s,a;if(bT(e)){let o=e.getAttribute("action");r=o?Wn(o,t):null,n=e.getAttribute("method")||Go,i=dc(e.getAttribute("enctype"))||qo,s=new FormData(e)}else if(vT(e)||wT(e)&&(e.type==="submit"||e.type==="image")){let o=e.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||o.getAttribute("action");if(r=l?Wn(l,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||Go,i=dc(e.getAttribute("formenctype"))||dc(o.getAttribute("enctype"))||qo,s=new FormData(o,e),!ET()){let{name:u,type:d,value:f}=e;if(d==="image"){let p=u?`${u}.`:"";s.append(`${p}x`,"0"),s.append(`${p}y`,"0")}else u&&s.append(u,f)}}else{if(xu(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Go,r=null,i=qo,a=e}return s&&i==="text/plain"&&(a=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Lp(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Yb(e,t,n,r){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname==="/"?i.pathname=`_root.${r}`:t&&Wn(i.pathname,t)==="/"?i.pathname=`${Ji(t)}/_root.${r}`:i.pathname=`${Ji(i.pathname)}.${r}`,i}async function _T(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function AT(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function IT(e,t,n){let r=await Promise.all(e.map(async i=>{let s=t.routes[i.route.id];if(s){let a=await _T(s,n);return a.links?a.links():[]}return[]}));return RT(r.flat(1).filter(AT).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Sg(e,t,n,r,i,s){let a=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,o=(l,u)=>{var d;return n[u].pathname!==l.pathname||((d=n[u].route.path)==null?void 0:d.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return s==="assets"?t.filter((l,u)=>a(l,u)||o(l,u)):s==="data"?t.filter((l,u)=>{var f;let d=r.routes[l.route.id];if(!d||!d.hasLoader)return!1;if(a(l,u)||o(l,u))return!0;if(l.route.shouldRevalidate){let p=l.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function NT(e,t,{includeHydrateFallback:n}={}){return PT(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function PT(e){return[...new Set(e)]}function jT(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function RT(e,t){let n=new Set;return new Set(t),e.reduce((r,i)=>{let s=JSON.stringify(jT(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function Dp(){let e=E.useContext(fs);return Lp(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function LT(){let e=E.useContext(gu);return Lp(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Mp=E.createContext(void 0);Mp.displayName="FrameworkContext";function vu(){let e=E.useContext(Mp);return Lp(e,"You must render this element inside a <HydratedRouter> element"),e}function DT(e,t){let n=E.useContext(Mp),[r,i]=E.useState(!1),[s,a]=E.useState(!1),{onFocus:o,onBlur:l,onMouseEnter:u,onMouseLeave:d,onTouchStart:f}=t,p=E.useRef(null);E.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let v=g=>{g.forEach(h=>{a(h.isIntersecting)})},k=new IntersectionObserver(v,{threshold:.5});return p.current&&k.observe(p.current),()=>{k.disconnect()}}},[e]),E.useEffect(()=>{if(r){let v=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(v)}}},[r]);let m=()=>{i(!0)},x=()=>{i(!1),a(!1)};return n?e!=="intent"?[s,p,{}]:[s,p,{onFocus:As(o,m),onBlur:As(l,x),onMouseEnter:As(u,m),onMouseLeave:As(d,x),onTouchStart:As(f,m)}]:[!1,p,{}]}function As(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function MT({page:e,...t}){let n=KC(),{nonce:r}=vu(),{router:i}=Dp(),s=E.useMemo(()=>jb(i.routes,e,i.basename),[i.routes,e,i.basename]);return s?(t.nonce==null&&r&&(t={...t,nonce:r}),n?E.createElement(OT,{page:e,matches:s,...t}):E.createElement(zT,{page:e,matches:s,...t})):null}function FT(e){let{manifest:t,routeModules:n}=vu(),[r,i]=E.useState([]);return E.useEffect(()=>{let s=!1;return IT(e,t,n).then(a=>{s||i(a)}),()=>{s=!0}},[e,t,n]),r}function OT({page:e,matches:t,...n}){let r=dn(),{future:i}=vu(),{basename:s}=Dp(),a=E.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let o=Yb(e,s,i.v8_trailingSlashAwareDataRequests,"rsc"),l=!1,u=[];for(let d of t)typeof d.route.shouldRevalidate=="function"?l=!0:u.push(d.route.id);return l&&u.length>0&&o.searchParams.set("_routes",u.join(",")),[o.pathname+o.search]},[s,i.v8_trailingSlashAwareDataRequests,e,r,t]);return E.createElement(E.Fragment,null,a.map(o=>E.createElement("link",{key:o,rel:"prefetch",as:"fetch",href:o,...n})))}function zT({page:e,matches:t,...n}){let r=dn(),{future:i,manifest:s,routeModules:a}=vu(),{basename:o}=Dp(),{loaderData:l,matches:u}=LT(),d=E.useMemo(()=>Sg(e,t,u,s,r,"data"),[e,t,u,s,r]),f=E.useMemo(()=>Sg(e,t,u,s,r,"assets"),[e,t,u,s,r]),p=E.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let v=new Set,k=!1;if(t.forEach(h=>{var w;let y=s.routes[h.route.id];!y||!y.hasLoader||(!d.some(C=>C.route.id===h.route.id)&&h.route.id in l&&((w=a[h.route.id])!=null&&w.shouldRevalidate)||y.hasClientLoader?k=!0:v.add(h.route.id))}),v.size===0)return[];let g=Yb(e,o,i.v8_trailingSlashAwareDataRequests,"data");return k&&v.size>0&&g.searchParams.set("_routes",t.filter(h=>v.has(h.route.id)).map(h=>h.route.id).join(",")),[g.pathname+g.search]},[o,i.v8_trailingSlashAwareDataRequests,l,r,s,d,t,e,a]),m=E.useMemo(()=>NT(f,s),[f,s]),x=FT(f);return E.createElement(E.Fragment,null,p.map(v=>E.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),m.map(v=>E.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),x.map(({key:v,link:k})=>E.createElement("link",{key:v,nonce:n.nonce,...k,crossOrigin:k.crossOrigin??n.crossOrigin})))}function UT(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var BT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{BT&&(window.__reactRouterVersion="7.18.5")}catch{}function VT({basename:e,children:t,useTransitions:n,window:r}){let i=E.useRef();i.current==null&&(i.current=vC({window:r,v5Compat:!0}));let s=i.current,[a,o]=E.useState({action:s.action,location:s.location}),l=E.useCallback(u=>{n===!1?o(u):E.startTransition(()=>o(u))},[n]);return E.useLayoutEffect(()=>s.listen(l),[s,l]),E.createElement(yT,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:s,useTransitions:n})}var ka=E.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:a,mask:o,state:l,target:u,to:d,preventScrollReset:f,viewTransition:p,defaultShouldRevalidate:m,...x},v){let{basename:k,navigator:g,useTransitions:h}=E.useContext(Mt),y=typeof d=="string"&&_p.test(d),w=zb(d,k);d=w.to;let C=tT(d,{relative:i}),b=dn(),I=null;if(o){let H=mu(o,[],b.mask?b.mask.pathname:"/",!0);k!=="/"&&(H.pathname=H.pathname==="/"?k:sn([k,H.pathname])),I=g.createHref(H)}let[N,R,_]=DT(r,x),j=GT(d,{replace:a,mask:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:p,defaultShouldRevalidate:m,useTransitions:h});function z(H){t&&t(H),H.defaultPrevented||j(H)}let G=!(w.isExternal||s),q=E.createElement("a",{...x,..._,href:(G?I:void 0)||w.absoluteURL||C,onClick:G?z:t,ref:UT(v,R),target:u,"data-discover":!y&&n==="render"?"true":void 0});return N&&!y?E.createElement(E.Fragment,null,q,E.createElement(MT,{page:C})):q});ka.displayName="Link";var $T=E.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:a,viewTransition:o,children:l,...u},d){let f=$a(a,{relative:u.relative}),p=dn(),m=E.useContext(gu),{navigator:x,basename:v}=E.useContext(Mt),k=m!=null&&QT(f)&&o===!0,g=x.encodeLocation?x.encodeLocation(f).pathname:f.pathname,h=p.pathname,y=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;n||(h=h.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&v&&(y=Wn(y,v)||y);const w=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let C=h===g||!i&&h.startsWith(g)&&h.charAt(w)==="/",b=y!=null&&(y===g||!i&&y.startsWith(g)&&y.charAt(g.length)==="/"),I={isActive:C,isPending:b,isTransitioning:k},N=C?t:void 0,R;typeof r=="function"?R=r(I):R=[r,C?"active":null,b?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let _=typeof s=="function"?s(I):s;return E.createElement(ka,{...u,"aria-current":N,className:R,ref:d,style:_,to:a,viewTransition:o},typeof l=="function"?l(I):l)});$T.displayName="NavLink";var HT=E.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:s,method:a=Go,action:o,onSubmit:l,relative:u,preventScrollReset:d,viewTransition:f,defaultShouldRevalidate:p,...m},x)=>{let{useTransitions:v}=E.useContext(Mt),k=YT(),g=XT(o,{relative:u}),h=a.toLowerCase()==="get"?"get":"post",y=typeof o=="string"&&_p.test(o),w=C=>{if(l&&l(C),C.defaultPrevented)return;C.preventDefault();let b=C.nativeEvent.submitter,I=(b==null?void 0:b.getAttribute("formmethod"))||a,N=()=>k(b||C.currentTarget,{fetcherKey:t,method:I,navigate:n,replace:i,state:s,relative:u,preventScrollReset:d,viewTransition:f,defaultShouldRevalidate:p});v&&n!==!1?E.startTransition(()=>N()):N()};return E.createElement("form",{ref:x,method:h,action:g,onSubmit:r?l:w,...m,"data-discover":!y&&e==="render"?"true":void 0})});HT.displayName="Form";function WT(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xb(e){let t=E.useContext(fs);return Ne(t,WT(e)),t}function GT(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:s,relative:a,viewTransition:o,defaultShouldRevalidate:l,useTransitions:u}={}){let d=yu(),f=dn(),p=$a(e,{relative:a});return E.useCallback(m=>{if(ST(m,t)){m.preventDefault();let x=n!==void 0?n:oi(f)===oi(p),v=()=>d(e,{replace:x,mask:r,state:i,preventScrollReset:s,relative:a,viewTransition:o,defaultShouldRevalidate:l});u?E.startTransition(()=>v()):v()}},[f,d,p,n,r,i,t,e,s,a,o,l,u])}var qT=0,KT=()=>`__${String(++qT)}__`;function YT(){let{router:e}=Xb("useSubmit"),{basename:t}=E.useContext(Mt),n=fT(),r=e.fetch,i=e.navigate;return E.useCallback(async(s,a={})=>{let{action:o,method:l,encType:u,formData:d,body:f}=TT(s,t);if(a.navigate===!1){let p=a.fetcherKey||KT();await r(p,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:d,body:f,formMethod:a.method||l,formEncType:a.encType||u,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:d,body:f,formMethod:a.method||l,formEncType:a.encType||u,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function XT(e,{relative:t}={}){let{basename:n}=E.useContext(Mt),r=E.useContext(Sn);Ne(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...$a(e||".",{relative:t})},a=dn();if(e==null){s.search=a.search;let o=new URLSearchParams(s.search),l=o.getAll("index");if(l.some(d=>d==="")){o.delete("index"),l.filter(f=>f).forEach(f=>o.append("index",f));let d=o.toString();s.search=d?`?${d}`:""}}return(!e||e===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:sn([n,s.pathname])),oi(s)}function QT(e,{relative:t}={}){let n=E.useContext(Vb);Ne(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Xb("useViewTransitionState"),i=$a(e,{relative:t});if(!n.isTransitioning)return!1;let s=Wn(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Wn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Il(i.pathname,a)!=null||Il(i.pathname,s)!=null}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qb=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var JT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=E.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:a,...o},l)=>E.createElement("svg",{ref:l,...JT,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Qb("lucide",i),...o},[...a.map(([u,d])=>E.createElement(u,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=(e,t)=>{const n=E.forwardRef(({className:r,...i},s)=>E.createElement(e_,{ref:s,iconNode:t,className:Qb(`lucide-${ZT(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=K("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=K("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=K("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=K("AudioLines",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=K("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=K("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=K("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=K("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=K("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=K("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=K("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=K("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=K("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=K("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=K("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=K("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=K("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=K("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=K("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=K("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=K("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=K("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=K("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=K("MessageSquarePlus",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=K("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=K("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=K("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=K("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=K("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=K("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=K("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=K("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=K("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=K("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=K("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=K("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=K("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=K("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=K("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=K("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=K("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=K("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=K("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=K("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=K("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=K("Tablet",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=K("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=K("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=K("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=K("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=K("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=K("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=K("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=K("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Xs="https://eliza-ai-voice-agent-bd.onrender.com";function y_(){const e="https://eliza-ai-voice-agent-bd.onrender.com".trim();if(typeof window>"u")return(e||Xs).replace(/\/$/,"");const t=window.location.protocol,n=window.location.hostname;return t==="https:"?e&&e.startsWith("https://")?e.replace(/\/$/,""):Xs:n==="localhost"||n==="127.0.0.1"?(e||"http://localhost:8000").replace(/\/$/,""):/^(192\.168\.|10\.|172\.(1[6-9]|2\d|3[01])\.)/.test(n)?e?e.replace(/\/$/,""):`http://${n}:8000`:(e||Xs).replace(/\/$/,"")}const es=y_();async function ts(e,t={},n=28e3){const r=new AbortController,i=setTimeout(()=>r.abort(),n),s={...t,signal:t.signal||r.signal};try{const a=await fetch(e,s);return clearTimeout(i),a}catch(a){if(clearTimeout(i),(e.includes("localhost")||e.includes("127.0.0.1")||/192\.168\.|10\./.test(e))&&!e.startsWith(Xs))try{const l=e.replace(/http:\/\/[^/]+/,Xs),u=new AbortController,d=setTimeout(()=>u.abort(),n),f=await fetch(l,{...t,signal:u.signal});return clearTimeout(d),f}catch{}throw a}}function Ca(){try{return localStorage.getItem("eliza_access_token")||""}catch{return""}}function Cg(e){try{e?localStorage.setItem("eliza_access_token",e):localStorage.removeItem("eliza_access_token")}catch{}}function Tg(){try{return localStorage.getItem("eliza_access_email")||""}catch{return""}}function _g(e){try{e?localStorage.setItem("eliza_access_email",e):localStorage.removeItem("eliza_access_email")}catch{}}function x_(){try{localStorage.removeItem("eliza_access_token"),localStorage.removeItem("eliza_access_email")}catch{}}function ko(){if(typeof window>"u")return"desktop";const e=window.innerWidth,t=(navigator.userAgent||"").toLowerCase();return/ipad|tablet/.test(t)||e>=768&&e<=1024?"tablet":/mobi|android|iphone/.test(t)||e<768?"mobile":"desktop"}function So(){if(typeof navigator>"u")return"unknown";const e=navigator.userAgent.toLowerCase();return e.includes("edg/")?"Edge":e.includes("chrome")&&!e.includes("edg/")?"Chrome":e.includes("safari")&&!e.includes("chrome")?"Safari":e.includes("firefox")?"Firefox":e.includes("opr")||e.includes("opera")?"Opera":"Browser"}async function Eo(e,t={}){var a;const n=Ca(),r={"Content-Type":"application/json",...n?{Authorization:`Bearer ${n}`}:{},...t.headers||{}},i=await ts(`${es}${e}`,{...t,headers:r}),s=await i.json().catch(()=>({}));if(!i.ok){const o=typeof s.detail=="object"&&((a=s.detail)!=null&&a.message)?s.detail.message:s.detail||s.message||`Request failed (${i.status})`,l=new Error(o);throw l.status=i.status,l.data=s,l}return s}const Ta={verifyEmail:async e=>{const t=await ts(`${es}/api/v1/access/verify-email`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,device_type:ko(),browser_name:So()})}),n=await t.json().catch(()=>({}));if(!t.ok)throw new Error(n.detail||n.message||"Failed to verify email.");return n.sessionToken&&(Cg(n.sessionToken),_g(n.email||e)),n},googleLogin:async({email:e,credential:t,name:n,picture:r}={})=>{const i=await ts(`${es}/api/v1/access/google-login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,credential:t,name:n,picture:r,device_type:ko(),browser_name:So()})}),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.detail||s.message||"Failed to log in with Google.");return s.sessionToken&&(Cg(s.sessionToken),_g(s.email||e)),s},getStatus:async()=>Eo("/api/v1/access/status"),submitQuestion:async e=>{const t={...e,device_type:ko(),browser_name:So(),request_id:typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():void 0};return Eo("/api/v1/questions",{method:"POST",body:JSON.stringify(t)})},submitFeedback:async({rating:e,category:t,message:n})=>Eo("/api/v1/feedback",{method:"POST",body:JSON.stringify({rating:e,category:t,message:n,device_type:ko(),browser_name:So()})}),getFeedbackStatus:async()=>Eo("/api/v1/feedback/status")},v_=()=>{};var Ag={};/**
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
 */const g1=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},b_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],o=e[n++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},y1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,o=a?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=s>>2,f=(s&3)<<4|o>>4;let p=(o&15)<<2|u>>6,m=u&63;l||(m=64,a||(p=64)),r.push(n[d],n[f],n[p],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(g1(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):b_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||o==null||u==null||f==null)throw new w_;const p=s<<2|o>>4;if(r.push(p),u!==64){const m=o<<4&240|u>>2;if(r.push(m),f!==64){const x=u<<6&192|f;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class w_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const k_=function(e){const t=g1(e);return y1.encodeByteArray(t,!0)},x1=function(e){return k_(e).replace(/\./g,"")},v1=function(e){try{return y1.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function S_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const E_=()=>S_().__FIREBASE_DEFAULTS__,C_=()=>{if(typeof process>"u"||typeof Ag>"u")return;const e=Ag.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},T_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&v1(e[1]);return t&&JSON.parse(t)},Gp=()=>{try{return v_()||E_()||C_()||T_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},__=e=>{var t,n;return(n=(t=Gp())==null?void 0:t.emulatorHosts)==null?void 0:n[e]},b1=()=>{var e;return(e=Gp())==null?void 0:e.config},w1=e=>{var t;return(t=Gp())==null?void 0:t[`_${e}`]};/**
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
 */class A_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function I_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function N_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function P_(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function j_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function R_(){const e=pt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function L_(){try{return typeof indexedDB=="object"}catch{return!1}}function D_(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)==null?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const M_="FirebaseError";class Ir extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=M_,Object.setPrototypeOf(this,Ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ha.prototype.create)}}class Ha{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?F_(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new Ir(i,o,r)}}function F_(e,t){try{let n=0,r="";for(;n<e.length;){const i=e.indexOf("{$",n);if(i===-1){r+=e.substring(n);break}const s=e.indexOf("}",i+2);if(s===-1){r+=e.substring(n);break}const a=e.substring(i+2,s),o=t[a];r+=e.substring(n,i)+(o!=null?String(o):`<${a}?>`),n=s+1}return r}catch{return e}}function O_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ns(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(Ig(s)&&Ig(a)){if(!ns(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ig(e){return e!==null&&typeof e=="object"}/**
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
 */function Wa(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function z_(e,t){const n=new U_(e,t);return n.subscribe.bind(n)}class U_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");B_(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=fc),i.error===void 0&&(i.error=fc),i.complete===void 0&&(i.complete=fc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function B_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function fc(){}/**
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
 */function hs(e){return e&&e._delegate?e._delegate:e}/**
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
 */function qp(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function V_(e){return(await fetch(e,{credentials:"include"})).ok}class rs{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const zr="[DEFAULT]";/**
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
 */class $_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new A_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(W_(t))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=zr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=zr){return this.instances.has(t)}getOptions(t=zr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:H_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=zr){return this.component?this.component.multipleInstances?t:zr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function H_(e){return e===zr?void 0:e}function W_(e){return e.instantiationMode==="EAGER"}/**
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
 */class G_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new $_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(we||(we={}));const q_={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},K_=we.INFO,Y_={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},X_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Y_[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class k1{constructor(t){this.name=t,this._logLevel=K_,this._logHandler=X_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in we))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?q_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...t),this._logHandler(this,we.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...t),this._logHandler(this,we.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,we.INFO,...t),this._logHandler(this,we.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,we.WARN,...t),this._logHandler(this,we.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...t),this._logHandler(this,we.ERROR,...t)}}const Q_=(e,t)=>t.some(n=>e instanceof n);let Ng,Pg;function Z_(){return Ng||(Ng=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function J_(){return Pg||(Pg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const S1=new WeakMap,Kd=new WeakMap,E1=new WeakMap,pc=new WeakMap,Kp=new WeakMap;function eA(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(wr(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&S1.set(n,e)}).catch(()=>{}),Kp.set(t,e),t}function tA(e){if(Kd.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});Kd.set(e,t)}let Yd={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Kd.get(e);if(t==="objectStoreNames")return e.objectStoreNames||E1.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function nA(e){Yd=e(Yd)}function rA(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(hc(this),t,...n);return E1.set(r,t.sort?t.sort():[t]),wr(r)}:J_().includes(e)?function(...t){return e.apply(hc(this),t),wr(S1.get(this))}:function(...t){return wr(e.apply(hc(this),t))}}function iA(e){return typeof e=="function"?rA(e):(e instanceof IDBTransaction&&tA(e),Q_(e,Z_())?new Proxy(e,Yd):e)}function wr(e){if(e instanceof IDBRequest)return eA(e);if(pc.has(e))return pc.get(e);const t=iA(e);return t!==e&&(pc.set(e,t),Kp.set(t,e)),t}const hc=e=>Kp.get(e);function sA(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=wr(a);return r&&a.addEventListener("upgradeneeded",l=>{r(wr(a.result),l.oldVersion,l.newVersion,wr(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),o.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),o}const aA=["get","getKey","getAll","getAllKeys","count"],oA=["put","add","delete","clear"],mc=new Map;function jg(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(mc.get(t))return mc.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=oA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||aA.includes(n)))return;const s=async function(a,...o){const l=this.transaction(a,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(o.shift())),(await Promise.all([u[n](...o),i&&l.done]))[0]};return mc.set(t,s),s}nA(e=>({...e,get:(t,n,r)=>jg(t,n)||e.get(t,n,r),has:(t,n)=>!!jg(t,n)||e.has(t,n)}));/**
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
 */class lA{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uA(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Xd="@firebase/app",Rg="0.16.4";/**
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
 */const Gn=new k1("@firebase/app"),cA="@firebase/app-compat",dA="@firebase/analytics-compat",fA="@firebase/analytics",pA="@firebase/app-check-compat",hA="@firebase/app-check",mA="@firebase/auth",gA="@firebase/auth-compat",yA="@firebase/database",xA="@firebase/data-connect",vA="@firebase/database-compat",bA="@firebase/functions",wA="@firebase/functions-compat",kA="@firebase/installations",SA="@firebase/installations-compat",EA="@firebase/messaging",CA="@firebase/messaging-compat",TA="@firebase/performance",_A="@firebase/performance-compat",AA="@firebase/remote-config",IA="@firebase/remote-config-compat",NA="@firebase/storage",PA="@firebase/storage-compat",jA="@firebase/firestore",RA="@firebase/ai",LA="@firebase/firestore-compat",DA="firebase",MA="13.1.0";/**
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
 */const Qd="[DEFAULT]",FA={[Xd]:"fire-core",[cA]:"fire-core-compat",[fA]:"fire-analytics",[dA]:"fire-analytics-compat",[hA]:"fire-app-check",[pA]:"fire-app-check-compat",[mA]:"fire-auth",[gA]:"fire-auth-compat",[yA]:"fire-rtdb",[xA]:"fire-data-connect",[vA]:"fire-rtdb-compat",[bA]:"fire-fn",[wA]:"fire-fn-compat",[kA]:"fire-iid",[SA]:"fire-iid-compat",[EA]:"fire-fcm",[CA]:"fire-fcm-compat",[TA]:"fire-perf",[_A]:"fire-perf-compat",[AA]:"fire-rc",[IA]:"fire-rc-compat",[NA]:"fire-gcs",[PA]:"fire-gcs-compat",[jA]:"fire-fst",[LA]:"fire-fst-compat",[RA]:"fire-vertex","fire-js":"fire-js",[DA]:"fire-js-all"};/**
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
 */const _a=new Map,OA=new Map,Zd=new Map;function Lg(e,t){try{e.container.addComponent(t)}catch(n){Gn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Aa(e){const t=e.name;if(Zd.has(t))return Gn.debug(`There were multiple attempts to register component ${t}.`),!1;Zd.set(t,e);for(const n of _a.values())Lg(n,e);for(const n of OA.values())Lg(n,e);return!0}function C1(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function gn(e){return e==null?!1:e.settings!==void 0}/**
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
 */const zA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ln=new Ha("app","Firebase",zA);/**
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
 */class UA{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
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
 */const Ga=MA;function Pl(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:Qd,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw Ln.create("bad-app-name",{appName:String(i)});if(n||(n=b1()),!n)throw Ln.create("no-options");const s=_a.get(i);if(s)if(ns(n,s.options)){if(ns(r,s.config))return s;throw Ln.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(r)})}else throw Ln.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(n)});const a=new G_(i);for(const l of Zd.values())a.addComponent(l);const o=new UA(n,r,a);return _a.set(i,o),o}function jl(e=Qd){const t=_a.get(e);if(!t&&e===Qd&&b1())return Pl();if(!t)throw Ln.create("no-app",{appName:e});return t}function Jd(){return Array.from(_a.values())}function Vi(e,t,n){let r=FA[e]??e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Gn.warn(a.join(" "));return}Aa(new rs(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const BA="firebase-heartbeat-database",VA=1,Ia="firebase-heartbeat-store";let gc=null;function T1(){return gc||(gc=sA(BA,VA,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ia)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ln.create("idb-open",{originalErrorMessage:e.message})})),gc}async function $A(e){try{const n=(await T1()).transaction(Ia),r=await n.objectStore(Ia).get(_1(e));return await n.done,r}catch(t){if(t instanceof Ir)Gn.warn(t.message);else{const n=Ln.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Gn.warn(n.message)}}}async function Dg(e,t){try{const r=(await T1()).transaction(Ia,"readwrite");await r.objectStore(Ia).put(t,_1(e)),await r.done}catch(n){if(n instanceof Ir)Gn.warn(n.message);else{const r=Ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(r.message)}}}function _1(e){return`${e.name}!${e.options.appId}`}/**
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
 */const HA=1024,WA=30;class GA{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Mg();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>WA){const a=YA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Gn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Mg(),{heartbeatsToSend:r,unsentEntries:i}=qA(this._heartbeatsCache.heartbeats),s=x1(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Gn.warn(n),""}}}function Mg(){return new Date().toISOString().substring(0,10)}function qA(e,t=HA){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Fg(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fg(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class KA{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return L_()?D_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $A(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Dg(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Dg(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Fg(e){return x1(JSON.stringify({version:2,heartbeats:e})).length}function YA(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function XA(e){Aa(new rs("platform-logger",t=>new lA(t),"PRIVATE")),Aa(new rs("heartbeat",t=>new GA(t),"PRIVATE")),Vi(Xd,Rg,e),Vi(Xd,Rg,"esm2020"),Vi("fire-js","")}/**
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
 */XA("");var QA="firebase",ZA="13.1.0";/**
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
 */Vi(QA,ZA,"app");function A1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JA=A1,I1=new Ha("auth","Firebase",A1());/**
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
 */const Rl=new k1("@firebase/auth");function Yo(e,...t){Rl.logLevel<=we.WARN&&Rl.warn(`Auth (${Ga}): ${e}`,...t)}function Xo(e,...t){Rl.logLevel<=we.ERROR&&Rl.error(`Auth (${Ga}): ${e}`,...t)}/**
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
 */function kn(e,...t){throw Yp(e,...t)}function an(e,...t){return Yp(e,...t)}function bu(e,t,n){const r={...JA(),[t]:n};return new Ha("auth","Firebase",r).create(t,{appName:e.name})}function Zr(e){return bu(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function eI(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&kn(e,"argument-error"),bu(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yp(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return I1.create(e,...t)}function te(e,t,...n){if(!e)throw Yp(t,...n)}function Dn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Xo(t),new Error(t)}function qn(e,t){e||Dn(t)}/**
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
 */function ef(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.href)||""}function tI(){return Og()==="http:"||Og()==="https:"}function Og(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.protocol)||null}/**
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
 */function nI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tI()||P_()||"connection"in navigator)?navigator.onLine:!0}function rI(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class qa{constructor(t,n){this.shortDelay=t,this.longDelay=n,qn(n>t,"Short delay should be less than long delay!"),this.isMobile=I_()||j_()}get(){return nI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xp(e,t){qn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class N1{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const iI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],aI=new qa(3e4,6e4);function Qp(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function ms(e,t,n,r,i={}){return P1(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const o=Wa({...a,key:e.config.apiKey}).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u={method:t,headers:l,...s};return N_()||(u.referrerPolicy="strict-origin-when-cross-origin"),e.emulatorConfig&&qp(e.emulatorConfig.host)&&(u.credentials="include"),N1.fetch()(await j1(e,e.config.apiHost,n,o),u)})}async function P1(e,t,n){e._canInitEmulator=!1;const r={...iI,...t};try{const i=new lI(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Co(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[l,u]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Co(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Co(e,"email-already-in-use",a);if(l==="USER_DISABLED")throw Co(e,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw bu(e,d,u);kn(e,d)}}catch(i){if(i instanceof Ir)throw i;kn(e,"network-request-failed",{message:String(i)})}}async function oI(e,t,n,r,i={}){const s=await ms(e,t,n,r,i);return"mfaPendingCredential"in s&&kn(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function j1(e,t,n,r){const i=`${t}${n}?${r}`,s=e,a=s.config.emulator?Xp(e.config,i):`${e.config.apiScheme}://${i}`;return sI.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}class lI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),aI.get())})}}function Co(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=an(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function uI(e,t){return ms(e,"POST","/v1/accounts:delete",t)}async function Ll(e,t){return ms(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Qs(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function cI(e,t=!1){const n=hs(e),r=await n.getIdToken(t),i=Zp(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qs(yc(i.auth_time)),issuedAtTime:Qs(yc(i.iat)),expirationTime:Qs(yc(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function yc(e){return Number(e)*1e3}function Zp(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Xo("JWT malformed, contained fewer than 3 sections"),null;try{const i=v1(n);return i?JSON.parse(i):(Xo("Failed to decode base64 JWT payload"),null)}catch(i){return Xo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zg(e){const t=Zp(e);return te(t,"internal-error"),te(typeof t.exp<"u","internal-error"),te(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Na(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw R1(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function R1(e){return e instanceof Ir?e.code==="auth/user-disabled"||e.code==="auth/user-token-expired":!1}/**
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
 */class dI{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class tf{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qs(this.lastLoginAt),this.creationTime=Qs(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Dl(e){var f;const t=e.auth,n=await e.getIdToken(),r=await Na(e,Ll(t,{idToken:n}));te(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?L1(i.providerUserInfo):[],a=pI(e.providerData,s),o=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),u=o?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new tf(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function fI(e){const t=hs(e);await Dl(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function pI(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function L1(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function hI(e,t){const n=await P1(e,{},async()=>{const r=Wa({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=await j1(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:o,body:r};return e.emulatorConfig&&qp(e.emulatorConfig.host)&&(l.credentials="include"),N1.fetch()(a,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mI(e,t){return ms(e,"POST","/v2/accounts:revokeToken",Qp(e,t))}/**
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
 */class $i{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){te(t.idToken,"internal-error"),te(typeof t.idToken<"u","internal-error"),te(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):zg(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){te(t.length!==0,"internal-error");const n=zg(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await hI(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new $i;return r&&(te(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new $i,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function Zn(e,t){te(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class tn{constructor({uid:t,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new dI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Na(this,this.stsTokenManager.getToken(this.auth,t));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return cI(this,t)}reload(){return fI(this)}_assign(t){this!==t&&(te(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new tn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Dl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(Zr(this.auth));const t=await this.getIdToken();return await Na(this,uI(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,a=n.photoURL??void 0,o=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:p,isAnonymous:m,providerData:x,stsTokenManager:v}=n;te(f&&v,t,"internal-error");const k=$i.fromJSON(this.name,v);te(typeof f=="string",t,"internal-error"),Zn(r,t.name),Zn(i,t.name),te(typeof p=="boolean",t,"internal-error"),te(typeof m=="boolean",t,"internal-error"),Zn(s,t.name),Zn(a,t.name),Zn(o,t.name),Zn(l,t.name),Zn(u,t.name),Zn(d,t.name);const g=new tn({uid:f,auth:t,email:i,emailVerified:p,displayName:r,isAnonymous:m,photoURL:a,phoneNumber:s,tenantId:o,stsTokenManager:k,createdAt:u,lastLoginAt:d});return x&&Array.isArray(x)&&(g.providerData=x.map(h=>({...h}))),l&&(g._redirectEventId=l),g}static async _fromIdTokenResponse(t,n,r=!1){const i=new $i;i.updateFromServerResponse(n);const s=new tn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Dl(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];te(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?L1(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),o=new $i;o.updateFromIdToken(r);const l=new tn({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:a}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new tf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const Ug=new Map;function Mn(e){qn(e instanceof Function,"Expected a class definition");let t=Ug.get(e);return t?(qn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ug.set(e,t),t)}/**
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
 */class D1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}D1.type="NONE";const Bg=D1;/**
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
 */function Qo(e,t,n){return`firebase:${e}:${t}:${n}`}class Jr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Ll(this.auth,{idToken:t}).catch(()=>{});return n?tn._fromGetAccountInfoResponse(this.auth,n,t):null}return tn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(t,n,r="authUser"){if(!n.length)return new Jr(Mn(Bg),t,r);const i=(await Promise.all(n.map(async u=>{try{if(await u._isAvailable())return u}catch{return}}))).filter(u=>u);let s=i[0]||Mn(Bg);const a=Qo(r,t.config.apiKey,t.name);let o=null;for(const u of n)try{const d=await u._get(a);if(d){let f;if(typeof d=="string"){const p=await Ll(t,{idToken:d}).catch(()=>{});if(!p)break;f=await tn._fromGetAccountInfoResponse(t,p,d)}else f=tn._fromJSON(t,d);u!==s&&(o=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Jr(s,t,r):(s=l[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(a)}catch{}})),new Jr(s,t,r))}}/**
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
 */function Vg(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(z1(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(M1(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(B1(t))return"Blackberry";if(V1(t))return"Webos";if(F1(t))return"Safari";if((t.includes("chrome/")||O1(t))&&!t.includes("edge/"))return"Chrome";if(U1(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function M1(e=pt()){return/firefox\//i.test(e)}function F1(e=pt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function O1(e=pt()){return/crios\//i.test(e)}function z1(e=pt()){return/iemobile/i.test(e)}function U1(e=pt()){return/android/i.test(e)}function B1(e=pt()){return/blackberry/i.test(e)}function V1(e=pt()){return/webos/i.test(e)}function Jp(e=pt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function gI(e=pt()){var t;return Jp(e)&&!!((t=window.navigator)!=null&&t.standalone)}function yI(){return R_()&&document.documentMode===10}function $1(e=pt()){return Jp(e)||U1(e)||V1(e)||B1(e)||/windows phone/i.test(e)||z1(e)}/**
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
 */function H1(e,t=[]){let n;switch(e){case"Browser":n=Vg(pt());break;case"Worker":n=`${Vg(pt())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ga}/${r}`}/**
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
 */class xI{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,o)=>{try{const l=t(s);a(l)}catch(l){o(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function vI(e,t={}){return ms(e,"GET","/v2/passwordPolicy",Qp(e,t))}/**
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
 */const bI=6;class wI{constructor(t){var r;const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??bI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class kI{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $g(this),this.idTokenSubscription=new $g(this),this.beforeStateQueue=new xI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=I1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted){try{this.persistenceManager=await Jr.create(this,t)}catch(a){Yo(`Failed to initialize persistence: ${a}`),this.persistenceManager=await Jr.create(this,[])}finally{(r=this._resolvePersistenceManagerAvailable)==null||r.call(this)}if(!this._deleted){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(n)}catch(a){Yo(`Failed to initialize current user: ${a}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Ll(this,{idToken:t}),r=await tn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var s;if(gn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(s=this.redirectUser)==null?void 0:s._redirectEventId,o=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===o)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Dl(t)}catch(n){if(R1(n))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=rI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(gn(this.app))return Promise.reject(Zr(this));const n=t?hs(t):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&te(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(Zr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return gn(this.app)?Promise.reject(Zr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await vI(this),n=new wI(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ha("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mI(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Mn(t)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}).catch(l=>{if(!a)if(typeof n!="function"&&n.error)n.error(l);else if(r)r(l);else throw l}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{a=!0,l()}}else{const l=t.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(t){if(this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,this.persistenceManager)try{t?await this.persistenceManager.setCurrentUser(t):await this.persistenceManager.removeCurrentUser()}catch(n){const r=(n==null?void 0:n.message)||String(n),i=bu(this,"internal-error",`An internal AuthError has occurred: ${r}`);throw i.customData={originalError:n},i}}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=H1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var n;if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return t!=null&&t.error&&Yo(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function wu(e){return hs(e)}class $g{constructor(t){this.auth=t,this.observer=null,this.addObserver=z_(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let eh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SI(e){eh=e}function EI(e){return eh.loadJS(e)}function CI(){return eh.gapiScript}function TI(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function _I(e,t){const n=C1(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ns(s,t??{}))return i;kn(i,"already-initialized")}return n.initialize({options:t})}function AI(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function II(e,t,n){const r=wu(e);te(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=W1(t),{host:a,port:o}=NI(t),l=o===null?"":`:${o}`,u={url:`${s}//${a}${l}/`},d=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(ns(u,r.config.emulator)&&ns(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,qp(a)?V_(`${s}//${a}${l}`):PI()}function W1(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function NI(e){const t=W1(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hg(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Hg(a)}}}function Hg(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function PI(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class G1{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(t){return Dn("not implemented")}_linkToIdToken(t,n){return Dn("not implemented")}_getReauthenticationResolver(t){return Dn("not implemented")}}/**
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
 */async function Hi(e,t){return oI(e,"POST","/v1/accounts:signInWithIdp",Qp(e,t))}/**
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
 */const jI="http://localhost";class li extends G1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new li(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const a=new li(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Hi(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Hi(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Hi(t,n)}buildRequest(){const t={requestUri:jI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Wa(n)}return t}}/**
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
 */class th{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ka extends th{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class ar extends Ka{constructor(){super("facebook.com")}static credential(t){return li._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ar.credentialFromTaggedObject(t)}static credentialFromError(t){return ar.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ar.credential(t.oauthAccessToken)}catch{return null}}}ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";ar.PROVIDER_ID="facebook.com";/**
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
 */class en extends Ka{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return li._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return en.credentialFromTaggedObject(t)}static credentialFromError(t){return en.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return en.credential(n,r)}catch{return null}}}en.GOOGLE_SIGN_IN_METHOD="google.com";en.PROVIDER_ID="google.com";/**
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
 */class or extends Ka{constructor(){super("github.com")}static credential(t){return li._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return or.credentialFromTaggedObject(t)}static credentialFromError(t){return or.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return or.credential(t.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
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
 */class lr extends Ka{constructor(){super("twitter.com")}static credential(t,n){return li._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return lr.credentialFromTaggedObject(t)}static credentialFromError(t){return lr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
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
 */class is{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await tn._fromIdTokenResponse(t,r,i),a=Wg(r);return new is({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Wg(r);return new is({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Wg(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Ml extends Ir{constructor(t,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ml.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Ml(t,n,r,i)}}function q1(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ml._fromErrorAndOperation(e,s,t,r):s})}async function RI(e,t,n=!1){const r=await Na(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return is._forOperation(e,"link",r)}/**
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
 */async function LI(e,t,n=!1){const{auth:r}=e;if(gn(r.app))return Promise.reject(Zr(r));const i="reauthenticate";try{const s=await Na(e,q1(r,i,t,e),n);te(s.idToken,r,"internal-error");const a=Zp(s.idToken);te(a,r,"internal-error");const{sub:o}=a;return te(e.uid===o,r,"user-mismatch"),is._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&kn(r,"user-mismatch"),s}}/**
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
 */async function DI(e,t,n=!1){if(gn(e.app))return Promise.reject(Zr(e));const r="signIn",i=await q1(e,r,t),s=await is._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function MI(e,t,n,r){return hs(e).onIdTokenChanged(t,n,r)}function FI(e,t,n){return hs(e).beforeAuthStateChanged(t,n)}const Fl="__sak";/**
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
 */class K1{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fl,"1"),this.storage.removeItem(Fl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const OI=1e3,zI=10;class Y1 extends K1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$1(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);yI()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,zI):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},OI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Y1.type="LOCAL";const UI=Y1;/**
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
 */class X1 extends K1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}X1.type="SESSION";const Q1=X1;/**
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
 */function BI(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ku{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new ku(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async u=>u(n.origin,s)),l=await BI(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ku.receivers=[];/**
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
 */function nh(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class VI{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,l)=>{const u=nh("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(p.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function vn(){return window}function $I(e){vn().location.href=e}/**
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
 */function Z1(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function HI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WI(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)==null?void 0:e.controller)||null}function GI(){return Z1()?self:null}/**
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
 */const J1="firebaseLocalStorageDb",qI=1,Ol="firebaseLocalStorage",ew="fbase_key";class Ya{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Su(e,t){return e.transaction([Ol],t?"readwrite":"readonly").objectStore(Ol)}function KI(){const e=indexedDB.deleteDatabase(J1);return new Ya(e).toPromise()}function tw(){const e=indexedDB.open(J1,qI);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ol,{keyPath:ew})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ol)?t(r):(r.close(),await KI(),t(await tw()))})})}async function Gg(e,t,n){const r=Su(e,!0).put({[ew]:t,value:n});return new Ya(r).toPromise()}async function YI(e,t){const n=Su(e,!1).get(t),r=await new Ya(n).toPromise();return r===void 0?null:r.value}function qg(e,t){const n=Su(e,!0).delete(t);return new Ya(n).toPromise()}const XI=800,QI=3;class nw{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(t=>t.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=tw(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>QI)throw r;if(this.dbPromise){const i=this.dbPromise;this.dbPromise=null;try{(await i).close()}catch{}}}}async initializeServiceWorkerMessaging(){return Z1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ku._getInstance(GI()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await HI(),!this.activeServiceWorker)return;this.sender=new VI(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(n=t[0])!=null&&n.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||WI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async t=>{await Gg(t,Fl,"1"),await qg(t,Fl)}),!0):!1}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gg(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>YI(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>qg(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){if(this.isClosing)return[];try{const t=await this._withRetries(i=>{const s=Su(i,!1).getAll();return new Ya(s).toPromise()});if(this.isClosing)return[];if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}catch(t){return this.isClosing||Yo(`Firebase Auth cross-tab polling failed with error: ${t}`),[]}}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}nw.type="LOCAL";const ZI=nw;new qa(3e4,6e4);/**
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
 */function rw(e,t){return t?Mn(t):(te(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class rh extends G1{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Hi(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Hi(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Hi(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function JI(e){return DI(e.auth,new rh(e),e.bypassAuthState)}function eN(e){const{auth:t,user:n}=e;return te(n,t,"internal-error"),LI(n,new rh(e),e.bypassAuthState)}async function tN(e){const{auth:t,user:n}=e;return te(n,t,"internal-error"),RI(n,new rh(e),e.bypassAuthState)}/**
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
 */class iw{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return JI;case"linkViaPopup":case"linkViaRedirect":return tN;case"reauthViaPopup":case"reauthViaRedirect":return eN;default:kn(this.auth,"internal-error")}}resolve(t){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const nN=new qa(2e3,1e4);async function rN(e,t,n){if(gn(e.app))return Promise.reject(an(e,"operation-not-supported-in-this-environment"));const r=wu(e);eI(e,t,th);const i=rw(r,n);return new qr(r,"signInViaPopup",t,i).executeNotNull()}class qr extends iw{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,qr.currentPopupAction&&qr.currentPopupAction.cancel(),qr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return te(t,this.auth,"internal-error"),t}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const t=nh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,nN.get())};t()}}qr.currentPopupAction=null;/**
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
 */const iN="pendingRedirect",Zo=new Map;class sN extends iw{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Zo.get(this.auth._key());if(!t){try{const r=await aN(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Zo.set(this.auth._key(),t)}return this.bypassAuthState||Zo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aN(e,t){const n=uN(t),r=lN(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function oN(e,t){Zo.set(e._key(),t)}function lN(e){return Mn(e._redirectPersistence)}function uN(e){return Qo(iN,e.config.apiKey,e.name)}async function cN(e,t,n=!1){if(gn(e.app))return Promise.reject(Zr(e));const r=wu(e),i=rw(r,t),a=await new sN(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
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
 */const dN=10*60*1e3;class fN{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!pN(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!sw(t)){const i=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=dN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kg(t))}saveEventToCache(t){this.cachedEventUids.add(Kg(t)),this.lastProcessedEventTime=Date.now()}}function Kg(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function sw({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function pN(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sw(e);default:return!1}}/**
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
 */async function hN(e,t={}){return ms(e,"GET","/v1/projects",t)}/**
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
 */const mN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gN=/^https?/;async function yN(e){if(e.config.emulator)return;const{authorizedDomains:t}=await hN(e);for(const n of t)try{if(xN(n))return}catch{}kn(e,"unauthorized-domain")}function xN(e){const t=ef(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!gN.test(n))return!1;if(mN.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const vN=new qa(3e4,6e4);function Yg(){const e=vn().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function bN(e){return new Promise((t,n)=>{var i,s,a;function r(){Yg(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Yg(),n(an(e,"network-request-failed"))},timeout:vN.get()})}if((s=(i=vn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)t(gapi.iframes.getContext());else if((a=vn().gapi)!=null&&a.load)r();else{const o=TI("iframefcb");return vn()[o]=()=>{gapi.load?r():n(an(e,"network-request-failed"))},EI(`${CI()}?onload=${o}`).catch(l=>n(l))}}).catch(t=>{throw Jo=null,t})}let Jo=null;function wN(e){return Jo=Jo||bN(e),Jo}/**
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
 */const kN=new qa(5e3,15e3),SN="__/auth/iframe",EN="emulator/auth/iframe",CN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _N(e){const t=e.config;te(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Xp(t,EN):`https://${e.config.authDomain}/${SN}`,r={apiKey:t.apiKey,appName:e.name,v:Ga},i=TN.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Wa(r).slice(1)}`}async function AN(e){const t=await wN(e),n=vn().gapi;return te(n,e,"internal-error"),t.open({where:document.body,url:_N(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=an(e,"network-request-failed"),o=vn().setTimeout(()=>{s(a)},kN.get());function l(){vn().clearTimeout(o),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
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
 */const IN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NN=500,PN=600,jN="_blank",RN="http://localhost";class Xg{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LN(e,t,n,r=NN,i=PN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l={...IN,width:r.toString(),height:i.toString(),top:s,left:a},u=pt().toLowerCase();n&&(o=O1(u)?jN:n),M1(u)&&(t=t||RN,l.scrollbars="yes");const d=Object.entries(l).reduce((p,[m,x])=>`${p}${m}=${x},`,"");if(gI(u)&&o!=="_self")return DN(t||"",o),new Xg(null);const f=window.open(t||"",o,d);te(f,e,"popup-blocked");try{f.focus()}catch{}return new Xg(f)}function DN(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const MN="__/auth/handler",FN="emulator/auth/handler",ON=encodeURIComponent("fac");async function Qg(e,t,n,r,i,s){te(e.config.authDomain,e,"auth-domain-config-required"),te(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ga,eventId:i};if(t instanceof th){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",O_(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,f]of Object.entries({}))a[d]=f}if(t instanceof Ka){const d=t.getScopes().filter(f=>f!=="");d.length>0&&(a.scopes=d.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const d of Object.keys(o))o[d]===void 0&&delete o[d];const l=await e._getAppCheckToken(),u=l?`#${ON}=${encodeURIComponent(l)}`:"";return`${zN(e)}?${Wa(o).slice(1)}${u}`}function zN({config:e}){return e.emulator?Xp(e,FN):`https://${e.authDomain}/${MN}`}/**
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
 */const xc="webStorageSupport";class UN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Q1,this._completeRedirectFn=cN,this._overrideRedirectResult=oN}async _openPopup(t,n,r,i){var a;qn((a=this.eventManagers[t._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await Qg(t,n,r,ef(),i);return LN(t,s,nh())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Qg(t,n,r,ef(),i);return $I(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await AN(t),r=new fN(t);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(xc,{type:xc},i=>{var a;const s=(a=i==null?void 0:i[0])==null?void 0:a[xc];s!==void 0&&n(!!s),kn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yN(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return $1()||F1()||Jp()}}const BN=UN;var Zg="@firebase/auth",Jg="1.13.8";/**
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
 */class VN{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $N(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HN(e){Aa(new rs("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;te(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:H1(e)},u=new kI(r,i,s,l);return AI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Aa(new rs("auth-internal",t=>{const n=wu(t.getProvider("auth").getImmediate());return(r=>new VN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vi(Zg,Jg,$N(e)),Vi(Zg,Jg,"esm2020")}/**
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
 */const WN=5*60,GN=w1("authIdTokenMaxAge")||WN;let ey=null;const qN=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>GN)return;const i=n==null?void 0:n.token;ey!==i&&(ey=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nf(e=jl()){const t=C1(e,"auth");if(t.isInitialized())return t.getImmediate();const n=_I(e,{popupRedirectResolver:BN,persistence:[ZI,UI,Q1]}),r=w1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=qN(s.toString());FI(n,a,()=>a(n.currentUser)),MI(n,o=>a(o))}}const i=__("auth");return i&&II(n,`http://${i}`),n}function KN(){var e;return((e=document.getElementsByTagName("head"))==null?void 0:e[0])??document}SI({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=an("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",KN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HN("Browser");const Fn={apiKey:"AIzaSyCAxS9gkP7rlF15piWD4xHng6cRcfv-YVI",authDomain:"elizaaivoice.firebaseapp.com",projectId:"elizaaivoice",storageBucket:"elizaaivoice.firebasestorage.app",messagingSenderId:"826705071135",appId:"1:826705071135:web:b6997ba92c34349ae9992a"};function aw(){return!!(Fn.apiKey&&Fn.authDomain&&Fn.projectId&&!Fn.apiKey.includes("YOUR_"))}let Ii=null,Ms=null,rr=null;if(aw())try{Ii=Jd().length>0?jl():Pl(Fn),Ms=nf(Ii),rr=new en,rr.setCustomParameters({prompt:"select_account"})}catch(e){console.error("Failed to initialize Firebase:",e)}async function YN(){var e;if(!aw())if(!Ii&&Fn.apiKey&&Fn.projectId)Ii=Jd().length>0?jl():Pl(Fn),Ms=nf(Ii),rr=new en,rr.setCustomParameters({prompt:"select_account"});else throw new Error("Firebase is not configured. Please add your Firebase configuration (VITE_FIREBASE_API_KEY, etc.) to .env");Ms||(Ms=nf(Ii||(Jd().length>0?jl():Pl(Fn)))),rr||(rr=new en,rr.setCustomParameters({prompt:"select_account"}));try{const n=(await rN(Ms,rr)).user,r=await n.getIdToken(!0);return{user:n,email:n.email,displayName:n.displayName||((e=n.email)==null?void 0:e.split("@")[0])||"User",photoURL:n.photoURL||"",idToken:r}}catch(t){if(t.code==="auth/popup-closed-by-user"||t.code==="auth/cancelled-popup-request"){const n=new Error("Sign-in cancelled. Please try again.");throw n.code="CANCELLED",n}throw t.code==="auth/popup-blocked"?new Error("Popup blocked by browser. Please allow popups for this site and try again."):t.code==="auth/unauthorized-domain"?new Error("This domain is not authorized in Firebase Console (Authentication > Settings > Authorized domains)."):new Error(t.message||"Failed to sign in with Google.")}}const XN=()=>c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",style:{flexShrink:0},children:[c.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),c.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),c.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"}),c.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"})]});function QN({onAccessGranted:e,onShowFeedback:t,isModal:n=!1,onClose:r}){const[i,s]=E.useState(!1),[a,o]=E.useState(""),[l,u]=E.useState(null);E.useEffect(()=>{if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}},[]);const d=async()=>{o("");try{sessionStorage.removeItem("eliza_pending_q")}catch{}s(!0);try{const p=await YN();if(!p||!p.email)throw new Error("No Google email account received from sign-in.");const m=await Ta.googleLogin({email:p.email,name:p.displayName,picture:p.photoURL,credential:p.idToken});m.blocked?(u(m),e&&e(m)):m.allowed?e&&e(m):o(m.message||"Access not available at this time.")}catch(p){p.code==="CANCELLED"?o(""):o(p.message||"Google sign-in failed. Please try again.")}finally{s(!1)}},f=p=>{if(!p)return"20 days from period start";try{return new Date(p).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return p}};return c.jsxs("div",{className:`email-gate-container ${n?"is-modal":""}`,children:[c.jsx("div",{className:"gate-glow","aria-hidden":"true"}),c.jsxs("div",{className:"gate-card",children:[r&&n&&c.jsx("button",{className:"btn-close-modal",onClick:r,"aria-label":"Close",children:c.jsx(It,{size:16})}),c.jsxs("div",{className:"brand-header",children:[c.jsx("div",{className:"brand-icon",children:c.jsx(Wd,{size:20,className:"icon-pulse"})}),c.jsxs("div",{className:"brand-text",children:[c.jsxs("h2",{children:["ELIZA",c.jsx("span",{children:"AI"})]}),c.jsx("span",{children:"VOICE INTELLIGENCE TRIAL ACCESS"})]})]}),l?c.jsxs("div",{className:"limit-block-view",children:[c.jsx("div",{className:"limit-icon-circle",children:c.jsx(Vp,{size:28})}),c.jsx("h3",{children:"Your limit is over."}),c.jsx("p",{className:"limit-thanks",children:"Thank you for your consideration."}),c.jsx("p",{className:"limit-text",children:"Please provide a review and feedback to help us improve."}),c.jsxs("div",{className:"blocked-date-badge",children:[c.jsx("span",{children:"Access restricted until"}),c.jsx("b",{children:f(l.blockedUntil)})]}),c.jsx("button",{type:"button",className:"btn-feedback-primary",onClick:()=>t&&t(l),children:"Give Feedback"}),c.jsx("button",{type:"button",className:"btn-link",onClick:()=>{u(null),d()},children:"Sign in with a different Google account"})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"gate-copy",children:[c.jsx("div",{className:"trial-pill",children:"FREE TRIAL ACCESS"}),c.jsx("h3",{children:"Start your conversation"}),c.jsxs("p",{children:["Authenticate with Google to verify your email and continue your free trial. Each account receives ",c.jsx("b",{children:"3 questions per 20-day period"}),"."]})]}),a&&c.jsxs("div",{className:"error-alert",children:[c.jsx(Up,{size:15}),c.jsx("span",{children:a})]}),c.jsx("div",{className:"google-auth-container",children:c.jsx("button",{type:"button",className:"btn-google-direct",onClick:d,disabled:i,children:i?c.jsxs("span",{className:"spinner-text",children:[c.jsx("span",{className:"gate-spinner"})," Connecting to Google..."]}):c.jsxs(c.Fragment,{children:[c.jsx(XN,{}),c.jsx("span",{children:"Sign in with Google"})]})})}),c.jsxs("div",{className:"gate-perks",children:[c.jsxs("div",{className:"perk-item",children:[c.jsx(qd,{size:13}),c.jsx("span",{children:"Zero spam · Privacy guarded"})]}),c.jsxs("div",{className:"perk-item",children:[c.jsx(Wp,{size:13}),c.jsx("span",{children:"3 questions · 20-day cycle"})]})]}),c.jsxs("div",{className:"developer-showcase-box",children:[c.jsxs("div",{className:"dev-box-top",children:[c.jsx(Nl,{size:13,className:"dev-icon"}),c.jsx("span",{children:"DEVELOPED BY AKHIL THADAKA"})]}),c.jsx("p",{children:"Full-Stack & AI Voice Developer · Actively searching for better opportunities, ready to work, and available for freelance projects."}),c.jsxs("a",{href:"tel:9121751697",className:"dev-contact-pill",children:[c.jsx(Ea,{size:12}),c.jsxs("span",{children:["Contact: ",c.jsx("b",{children:"9121751697"})]})]})]})]})]}),c.jsx("style",{children:`
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
      `})]})}function ZN({blockedUntil:e,onGiveFeedback:t}){E.useEffect(()=>{if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}},[]);const n=r=>{if(!r)return"20 days from period start";try{return new Date(r).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return r}};return c.jsxs("div",{className:"limit-exceeded-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"limit-title",children:[c.jsxs("div",{className:"limit-exceeded-modal",children:[c.jsx("div",{className:"limit-icon-wrap",children:c.jsx(r1,{size:26,className:"limit-icon"})}),c.jsx("h2",{id:"limit-title",className:"limit-title",children:"Your limit is over."}),c.jsx("p",{className:"limit-consideration",children:"Thank you for your consideration."}),c.jsx("p",{className:"limit-instructions",children:"Please provide a review and feedback to help us improve."}),c.jsxs("div",{className:"limit-date-box",children:[c.jsxs("div",{className:"date-label",children:[c.jsx(Vp,{size:12}),c.jsx("span",{children:"Next access cycle available"})]}),c.jsx("div",{className:"date-val",children:n(e)})]}),c.jsxs("button",{type:"button",className:"btn-give-feedback",onClick:t,children:[c.jsx(i1,{size:16}),c.jsx("span",{children:"Give Feedback"})]}),c.jsxs("div",{className:"developer-showcase-box",children:[c.jsxs("div",{className:"dev-box-top",children:[c.jsx(Nl,{size:12,className:"dev-icon"}),c.jsx("span",{children:"DEVELOPED BY AKHIL THADAKA"})]}),c.jsx("p",{children:"Full-Stack & AI Voice Developer · Actively searching for better opportunities, ready to work, and available for freelance projects."}),c.jsxs("a",{href:"tel:9121751697",className:"dev-contact-pill",children:[c.jsx(Ea,{size:11}),c.jsxs("span",{children:["Contact: ",c.jsx("b",{children:"9121751697"})]})]})]})]}),c.jsx("style",{children:`
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
      `})]})}const JN=["Voice Experience","Answer Quality","Freelance","Bug","Feature Request","Other"];function eP({email:e,onClose:t,onSubmitted:n}){const[r,i]=E.useState(5),[s,a]=E.useState(0),[o,l]=E.useState("Voice Experience"),[u,d]=E.useState(""),[f,p]=E.useState(!1),[m,x]=E.useState(""),[v,k]=E.useState(!1);E.useEffect(()=>{if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}},[]);const g=async h=>{h.preventDefault();const y=u.trim();if(!y||y.length<10){x("Please share at least 10 characters of feedback.");return}if(y.length>2e3){x("Feedback message must not exceed 2000 characters.");return}x(""),p(!0);try{await Ta.submitFeedback({rating:r,category:o,message:y}),k(!0),n&&n()}catch(w){x(w.message||"Failed to submit feedback. Please try again.")}finally{p(!1)}};return c.jsxs("div",{className:"feedback-modal-overlay",role:"dialog","aria-modal":"true",children:[c.jsxs("div",{className:"feedback-card",children:[c.jsxs("div",{className:"feedback-top",children:[c.jsx("div",{className:"feedback-badge",children:"FEEDBACK & REVIEW"}),t&&c.jsx("button",{className:"btn-close",onClick:t,"aria-label":"Close",children:c.jsx(It,{size:16})})]}),v?c.jsxs("div",{className:"feedback-success-state",children:[c.jsx("div",{className:"success-icon-wrap",children:c.jsx(Sa,{size:38})}),c.jsx("h3",{children:"Thank you for your feedback!"}),c.jsx("p",{children:"Your review has been saved in the database and helps us continuously refine Eliza AI."}),c.jsx("p",{className:"note-restriction",children:"The 20-day limit period remains active on your email until the scheduled expiration date."}),c.jsxs("div",{className:"developer-showcase-box",style:{marginTop:"14px"},children:[c.jsxs("div",{className:"dev-box-top",children:[c.jsx(Nl,{size:12,className:"dev-icon"}),c.jsx("span",{children:"DEVELOPED BY AKHIL THADAKA"})]}),c.jsx("p",{children:"Full-Stack & AI Voice Developer · Ready to work immediately · Available for freelance projects & better opportunities."}),c.jsxs("a",{href:"tel:9121751697",className:"dev-contact-pill",children:[c.jsx(Ea,{size:11}),c.jsxs("span",{children:["Contact: ",c.jsx("b",{children:"9121751697"})]})]})]}),t&&c.jsx("button",{type:"button",className:"btn-submit-action",onClick:t,style:{marginTop:"14px"},children:"Done"})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"feedback-intro",children:[c.jsx("h3",{children:"We appreciate your review"}),c.jsx("p",{children:"Tell us how your conversation went and what we can improve."})]}),c.jsxs("form",{onSubmit:g,className:"feedback-form",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Verified Account Email"}),c.jsx("input",{type:"email",value:e||"",disabled:!0,className:"input-disabled"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Rating"}),c.jsxs("div",{className:"star-rating-row",role:"radiogroup","aria-label":"Rating from 1 to 5 stars",children:[[1,2,3,4,5].map(h=>c.jsx("button",{type:"button",className:"star-btn",onClick:()=>i(h),onMouseEnter:()=>a(h),onMouseLeave:()=>a(0),"aria-label":`${h} star`,children:c.jsx(br,{size:20,className:`star-icon ${h<=(s||r)?"filled":"empty"}`})},h)),c.jsxs("span",{className:"rating-text",children:[r===5&&"Excellent",r===4&&"Good",r===3&&"Fair",r===2&&"Needs work",r===1&&"Poor"]})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"category-select",children:"Category"}),c.jsx("select",{id:"category-select",value:o,onChange:h=>l(h.target.value),className:"select-category",children:JN.map(h=>c.jsx("option",{value:h,children:h},h))})]}),c.jsxs("div",{className:"form-group",children:[c.jsxs("label",{htmlFor:"feedback-message",children:[c.jsx("span",{children:"Your feedback"}),c.jsxs("small",{children:[u.length,"/2000"]})]}),c.jsx("textarea",{id:"feedback-message",value:u,onChange:h=>{d(h.target.value),m&&x("")},placeholder:"Share details on your conversation, voice quality, or ideas...",rows:3,maxLength:2e3,required:!0})]}),m&&c.jsxs("div",{className:"error-alert",children:[c.jsx(Up,{size:14}),c.jsx("span",{children:m})]}),c.jsxs("div",{className:"form-actions",children:[t&&c.jsxs("button",{type:"button",className:"btn-back",onClick:t,children:[c.jsx(Fp,{size:13}),c.jsx("span",{children:"Cancel"})]}),c.jsx("button",{type:"submit",className:"btn-submit-action",disabled:f||!u.trim(),children:f?c.jsx("span",{children:"Submitting..."}):c.jsxs(c.Fragment,{children:[c.jsx("span",{children:"Submit Feedback"}),c.jsx(l1,{size:14})]})})]})]}),c.jsxs("div",{className:"developer-showcase-box",style:{marginTop:"12px"},children:[c.jsxs("div",{className:"dev-box-top",children:[c.jsx(Nl,{size:12,className:"dev-icon"}),c.jsx("span",{children:"DEVELOPED BY AKHIL THADAKA"})]}),c.jsx("p",{children:"Full-Stack & AI Voice Developer · Ready to work immediately · Available for freelance projects & better opportunities."}),c.jsxs("a",{href:"tel:9121751697",className:"dev-contact-pill",children:[c.jsx(Ea,{size:11}),c.jsxs("span",{children:["Contact: ",c.jsx("b",{children:"9121751697"})]})]})]})]})]}),c.jsx("style",{children:`
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
      `})]})}function ow(){try{let e=sessionStorage.getItem("eliza_session_id");return e||(e=typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():"sess_"+Math.random().toString(36).substring(2)+Date.now().toString(36),sessionStorage.setItem("eliza_session_id",e)),e}catch{return"anonymous-session"}}async function Yt(e,t={}){const n={"Content-Type":"application/json","X-Session-ID":ow(),...t.headers||{}},r=await ts(`${es}${e}`,{...t,headers:n}),i=await r.json().catch(()=>({}));if(!r.ok)throw new Error(i.detail||i.message||`Request failed (${r.status})`);return i}const In={health:()=>Yt("/api/v1/health"),providers:()=>Yt("/api/v1/providers"),settings:()=>Yt("/api/v1/settings"),updateSettings:e=>Yt("/api/v1/settings",{method:"PATCH",body:JSON.stringify(e)}),saveSettings:e=>Yt("/api/v1/settings",{method:"PATCH",body:JSON.stringify(e)}),conversations:()=>Yt("/api/v1/conversations"),getConversation:e=>Yt(`/api/v1/conversations/${encodeURIComponent(e)}`),conversation:e=>Yt(`/api/v1/conversations/${encodeURIComponent(e)}`),deleteConversation:e=>Yt(`/api/v1/conversations/${encodeURIComponent(e)}`,{method:"DELETE"}),chat:e=>Yt("/api/v1/chat",{method:"POST",body:JSON.stringify(e)}),audioVoices:()=>Yt("/api/v1/audio/voices"),tts:async e=>{const t={"Content-Type":"application/json","X-Session-ID":ow()};try{const n=await ts(`${es}/api/v1/audio/tts`,{method:"POST",headers:t,body:JSON.stringify(e)});if((n.headers.get("content-type")||"").includes("audio")){const s=await n.blob();return{ok:!0,blob:s,audioUrl:URL.createObjectURL(s)}}return{ok:!1,...await n.json().catch(()=>({}))}}catch(n){return{ok:!1,error:n.message}}}},lw=E.createContext({});function tP(e){const t=E.useRef(null);return t.current===null&&(t.current=e()),t.current}const ih=E.createContext(null),uw=E.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function nP(e=!0){const t=E.useContext(ih);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=E.useId();E.useEffect(()=>{e&&i(s)},[e]);const a=E.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,a]:[!0]}const sh=typeof window<"u",rP=sh?E.useLayoutEffect:E.useEffect,Pt=e=>e;let cw=Pt;function ah(e){let t;return()=>(t===void 0&&(t=e()),t)}const ss=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},zn=e=>e*1e3,Un=e=>e/1e3,iP={useManualTiming:!1};function sP(e){let t=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function o(u){s.has(u)&&(l.schedule(u),e()),u(a)}const l={schedule:(u,d=!1,f=!1)=>{const m=f&&r?t:n;return d&&s.add(u),m.has(u)||m.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(a=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(o),t.clear(),r=!1,i&&(i=!1,l.process(u))}};return l}const To=["read","resolveKeyframes","update","preRender","render","postRender"],aP=40;function dw(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,a=To.reduce((g,h)=>(g[h]=sP(s),g),{}),{read:o,resolveKeyframes:l,update:u,preRender:d,render:f,postRender:p}=a,m=()=>{const g=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(g-i.timestamp,aP),1),i.timestamp=g,i.isProcessing=!0,o.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(m))},x=()=>{n=!0,r=!0,i.isProcessing||e(m)};return{schedule:To.reduce((g,h)=>{const y=a[h];return g[h]=(w,C=!1,b=!1)=>(n||x(),y.schedule(w,C,b)),g},{}),cancel:g=>{for(let h=0;h<To.length;h++)a[To[h]].cancel(g)},state:i,steps:a}}const{schedule:Ae,cancel:Er,state:Qe,steps:vc}=dw(typeof requestAnimationFrame<"u"?requestAnimationFrame:Pt,!0),fw=E.createContext({strict:!1}),ty={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},as={};for(const e in ty)as[e]={isEnabled:t=>ty[e].some(n=>!!t[n])};function oP(e){for(const t in e)as[t]={...as[t],...e[t]}}const lP=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function zl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||lP.has(e)}let pw=e=>!zl(e);function uP(e){e&&(pw=t=>t.startsWith("on")?!zl(t):e(t))}try{uP(require("@emotion/is-prop-valid").default)}catch{}function cP(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(pw(i)||n===!0&&zl(i)||!t&&!zl(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function dP(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const Eu=E.createContext({});function Pa(e){return typeof e=="string"||Array.isArray(e)}function Cu(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const oh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],lh=["initial",...oh];function Tu(e){return Cu(e.animate)||lh.some(t=>Pa(e[t]))}function hw(e){return!!(Tu(e)||e.variants)}function fP(e,t){if(Tu(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Pa(n)?n:void 0,animate:Pa(r)?r:void 0}}return e.inherit!==!1?t:{}}function pP(e){const{initial:t,animate:n}=fP(e,E.useContext(Eu));return E.useMemo(()=>({initial:t,animate:n}),[ny(t),ny(n)])}function ny(e){return Array.isArray(e)?e.join(" "):e}const hP=Symbol.for("motionComponentSymbol");function Ni(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function mP(e,t,n){return E.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Ni(n)&&(n.current=r))},[t])}const uh=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),gP="framerAppearId",mw="data-"+uh(gP),{schedule:ch}=dw(queueMicrotask,!1),gw=E.createContext({});function yP(e,t,n,r,i){var s,a;const{visualElement:o}=E.useContext(Eu),l=E.useContext(fw),u=E.useContext(ih),d=E.useContext(uw).reducedMotion,f=E.useRef(null);r=r||l.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const p=f.current,m=E.useContext(gw);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&xP(f.current,n,i,m);const x=E.useRef(!1);E.useInsertionEffect(()=>{p&&x.current&&p.update(n,u)});const v=n[mw],k=E.useRef(!!v&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,v))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,v)));return rP(()=>{p&&(x.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),ch.render(p.render),k.current&&p.animationState&&p.animationState.animateChanges())}),E.useEffect(()=>{p&&(!k.current&&p.animationState&&p.animationState.animateChanges(),k.current&&(queueMicrotask(()=>{var g;(g=window.MotionHandoffMarkAsComplete)===null||g===void 0||g.call(window,v)}),k.current=!1))}),p}function xP(e,t,n,r){const{layoutId:i,layout:s,drag:a,dragConstraints:o,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:yw(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!a||o&&Ni(o),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function yw(e){if(e)return e.options.allowProjection!==!1?e.projection:yw(e.parent)}function vP({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var s,a;e&&oP(e);function o(u,d){let f;const p={...E.useContext(uw),...u,layoutId:bP(u)},{isStatic:m}=p,x=pP(u),v=r(u,m);if(!m&&sh){wP();const k=kP(p);f=k.MeasureLayout,x.visualElement=yP(i,v,p,t,k.ProjectionNode)}return c.jsxs(Eu.Provider,{value:x,children:[f&&x.visualElement?c.jsx(f,{visualElement:x.visualElement,...p}):null,n(i,u,mP(v,x.visualElement,d),v,m,x.visualElement)]})}o.displayName=`motion.${typeof i=="string"?i:`create(${(a=(s=i.displayName)!==null&&s!==void 0?s:i.name)!==null&&a!==void 0?a:""})`}`;const l=E.forwardRef(o);return l[hP]=i,l}function bP({layoutId:e}){const t=E.useContext(lw).id;return t&&e!==void 0?t+"-"+e:e}function wP(e,t){E.useContext(fw).strict}function kP(e){const{drag:t,layout:n}=as;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const SP=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function dh(e){return typeof e!="string"||e.includes("-")?!1:!!(SP.indexOf(e)>-1||/[A-Z]/u.test(e))}function ry(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function fh(e,t,n,r){if(typeof t=="function"){const[i,s]=ry(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=ry(r);t=t(n!==void 0?n:e.custom,i,s)}return t}const rf=e=>Array.isArray(e),EP=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),CP=e=>rf(e)?e[e.length-1]||0:e,at=e=>!!(e&&e.getVelocity);function el(e){const t=at(e)?e.get():e;return EP(t)?t.toValue():t}function TP({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,s){const a={latestValues:_P(r,i,s,e),renderState:t()};return n&&(a.onMount=o=>n({props:r,current:o,...a}),a.onUpdate=o=>n(o)),a}const xw=e=>(t,n)=>{const r=E.useContext(Eu),i=E.useContext(ih),s=()=>TP(e,t,r,i);return n?s():tP(s)};function _P(e,t,n,r){const i={},s=r(e,{});for(const p in s)i[p]=el(s[p]);let{initial:a,animate:o}=e;const l=Tu(e),u=hw(e);t&&u&&!l&&e.inherit!==!1&&(a===void 0&&(a=t.initial),o===void 0&&(o=t.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const f=d?o:a;if(f&&typeof f!="boolean"&&!Cu(f)){const p=Array.isArray(f)?f:[f];for(let m=0;m<p.length;m++){const x=fh(e,p[m]);if(x){const{transitionEnd:v,transition:k,...g}=x;for(const h in g){let y=g[h];if(Array.isArray(y)){const w=d?y.length-1:0;y=y[w]}y!==null&&(i[h]=y)}for(const h in v)i[h]=v[h]}}}return i}const gs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],fi=new Set(gs),vw=e=>t=>typeof t=="string"&&t.startsWith(e),bw=vw("--"),AP=vw("var(--"),ph=e=>AP(e)?IP.test(e.split("/*")[0].trim()):!1,IP=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ww=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Kn=(e,t,n)=>n>t?t:n<e?e:n,ys={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ja={...ys,transform:e=>Kn(0,1,e)},_o={...ys,default:1},Xa=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),er=Xa("deg"),bn=Xa("%"),J=Xa("px"),NP=Xa("vh"),PP=Xa("vw"),iy={...bn,parse:e=>bn.parse(e)/100,transform:e=>bn.transform(e*100)},jP={borderWidth:J,borderTopWidth:J,borderRightWidth:J,borderBottomWidth:J,borderLeftWidth:J,borderRadius:J,radius:J,borderTopLeftRadius:J,borderTopRightRadius:J,borderBottomRightRadius:J,borderBottomLeftRadius:J,width:J,maxWidth:J,height:J,maxHeight:J,top:J,right:J,bottom:J,left:J,padding:J,paddingTop:J,paddingRight:J,paddingBottom:J,paddingLeft:J,margin:J,marginTop:J,marginRight:J,marginBottom:J,marginLeft:J,backgroundPositionX:J,backgroundPositionY:J},RP={rotate:er,rotateX:er,rotateY:er,rotateZ:er,scale:_o,scaleX:_o,scaleY:_o,scaleZ:_o,skew:er,skewX:er,skewY:er,distance:J,translateX:J,translateY:J,translateZ:J,x:J,y:J,z:J,perspective:J,transformPerspective:J,opacity:ja,originX:iy,originY:iy,originZ:J},sy={...ys,transform:Math.round},hh={...jP,...RP,zIndex:sy,size:J,fillOpacity:ja,strokeOpacity:ja,numOctaves:sy},LP={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},DP=gs.length;function MP(e,t,n){let r="",i=!0;for(let s=0;s<DP;s++){const a=gs[s],o=e[a];if(o===void 0)continue;let l=!0;if(typeof o=="number"?l=o===(a.startsWith("scale")?1:0):l=parseFloat(o)===0,!l||n){const u=ww(o,hh[a]);if(!l){i=!1;const d=LP[a]||a;r+=`${d}(${u}) `}n&&(t[a]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function mh(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let a=!1,o=!1;for(const l in t){const u=t[l];if(fi.has(l)){a=!0;continue}else if(bw(l)){i[l]=u;continue}else{const d=ww(u,hh[l]);l.startsWith("origin")?(o=!0,s[l]=d):r[l]=d}}if(t.transform||(a||n?r.transform=MP(t,e.transform,n):r.transform&&(r.transform="none")),o){const{originX:l="50%",originY:u="50%",originZ:d=0}=s;r.transformOrigin=`${l} ${u} ${d}`}}const FP={offset:"stroke-dashoffset",array:"stroke-dasharray"},OP={offset:"strokeDashoffset",array:"strokeDasharray"};function zP(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?FP:OP;e[s.offset]=J.transform(-r);const a=J.transform(t),o=J.transform(n);e[s.array]=`${a} ${o}`}function ay(e,t,n){return typeof e=="string"?e:J.transform(t+n*e)}function UP(e,t,n){const r=ay(t,e.x,e.width),i=ay(n,e.y,e.height);return`${r} ${i}`}function gh(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:a,pathSpacing:o=1,pathOffset:l=0,...u},d,f){if(mh(e,u,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:m,dimensions:x}=e;p.transform&&(x&&(m.transform=p.transform),delete p.transform),x&&(i!==void 0||s!==void 0||m.transform)&&(m.transformOrigin=UP(x,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),a!==void 0&&zP(p,a,o,l,!1)}const yh=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),kw=()=>({...yh(),attrs:{}}),xh=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Sw(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const Ew=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Cw(e,t,n,r){Sw(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Ew.has(i)?i:uh(i),t.attrs[i])}const Ul={};function BP(e){Object.assign(Ul,e)}function Tw(e,{layout:t,layoutId:n}){return fi.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ul[e]||e==="opacity")}function vh(e,t,n){var r;const{style:i}=e,s={};for(const a in i)(at(i[a])||t.style&&at(t.style[a])||Tw(a,e)||((r=n==null?void 0:n.getValue(a))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[a]=i[a]);return s}function _w(e,t,n){const r=vh(e,t,n);for(const i in e)if(at(e[i])||at(t[i])){const s=gs.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}function VP(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const oy=["x","y","width","height","cx","cy","r"],$P={useVisualState:xw({scrapeMotionValuesFromProps:_w,createRenderState:kw,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let s=!!e.drag;if(!s){for(const o in i)if(fi.has(o)){s=!0;break}}if(!s)return;let a=!t;if(t)for(let o=0;o<oy.length;o++){const l=oy[o];e[l]!==t[l]&&(a=!0)}a&&Ae.read(()=>{VP(n,r),Ae.render(()=>{gh(r,i,xh(n.tagName),e.transformTemplate),Cw(n,r)})})}})},HP={useVisualState:xw({scrapeMotionValuesFromProps:vh,createRenderState:yh})};function Aw(e,t,n){for(const r in t)!at(t[r])&&!Tw(r,n)&&(e[r]=t[r])}function WP({transformTemplate:e},t){return E.useMemo(()=>{const n=yh();return mh(n,t,e),Object.assign({},n.vars,n.style)},[t])}function GP(e,t){const n=e.style||{},r={};return Aw(r,n,e),Object.assign(r,WP(e,t)),r}function qP(e,t){const n={},r=GP(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function KP(e,t,n,r){const i=E.useMemo(()=>{const s=kw();return gh(s,t,xh(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};Aw(s,e.style,e),i.style={...s,...i.style}}return i}function YP(e=!1){return(n,r,i,{latestValues:s},a)=>{const l=(dh(n)?KP:qP)(r,s,a,n),u=cP(r,typeof n=="string",e),d=n!==E.Fragment?{...u,...l,ref:i}:{},{children:f}=r,p=E.useMemo(()=>at(f)?f.get():f,[f]);return E.createElement(n,{...d,children:p})}}function XP(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const a={...dh(r)?$P:HP,preloadedFeatures:e,useRender:YP(i),createVisualElement:t,Component:r};return vP(a)}}function Iw(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function _u(e,t,n){const r=e.getProps();return fh(r,t,n!==void 0?n:r.custom,e)}const QP=ah(()=>window.ScrollTimeline!==void 0);class ZP{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(QP()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class JP extends ZP{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function bh(e,t){return e?e[t]||e.default||e:void 0}const sf=2e4;function Nw(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<sf;)t+=n,r=e.next(t);return t>=sf?1/0:t}function wh(e){return typeof e=="function"}function ly(e,t){e.timeline=t,e.onfinish=null}const kh=e=>Array.isArray(e)&&typeof e[0]=="number",ej={linearEasing:void 0};function tj(e,t){const n=ah(e);return()=>{var r;return(r=ej[t])!==null&&r!==void 0?r:n()}}const Bl=tj(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Pw=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=e(ss(0,i-1,s))+", ";return`linear(${r.substring(0,r.length-2)})`};function jw(e){return!!(typeof e=="function"&&Bl()||!e||typeof e=="string"&&(e in af||Bl())||kh(e)||Array.isArray(e)&&e.every(jw))}const Fs=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,af={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Fs([0,.65,.55,1]),circOut:Fs([.55,0,1,.45]),backIn:Fs([.31,.01,.66,-.59]),backOut:Fs([.33,1.53,.69,.99])};function Rw(e,t){if(e)return typeof e=="function"&&Bl()?Pw(e,t):kh(e)?Fs(e):Array.isArray(e)?e.map(n=>Rw(n,t)||af.easeOut):af[e]}const Xt={x:!1,y:!1};function Lw(){return Xt.x||Xt.y}function nj(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const s=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e)}function Dw(e,t){const n=nj(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function uy(e){return t=>{t.pointerType==="touch"||Lw()||e(t)}}function rj(e,t,n={}){const[r,i,s]=Dw(e,n),a=uy(o=>{const{target:l}=o,u=t(o);if(typeof u!="function"||!l)return;const d=uy(f=>{u(f),l.removeEventListener("pointerleave",d)});l.addEventListener("pointerleave",d,i)});return r.forEach(o=>{o.addEventListener("pointerenter",a,i)}),s}const Mw=(e,t)=>t?e===t?!0:Mw(e,t.parentElement):!1,Sh=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,ij=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function sj(e){return ij.has(e.tagName)||e.tabIndex!==-1}const Os=new WeakSet;function cy(e){return t=>{t.key==="Enter"&&e(t)}}function bc(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const aj=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=cy(()=>{if(Os.has(n))return;bc(n,"down");const i=cy(()=>{bc(n,"up")}),s=()=>bc(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function dy(e){return Sh(e)&&!Lw()}function oj(e,t,n={}){const[r,i,s]=Dw(e,n),a=o=>{const l=o.currentTarget;if(!dy(o)||Os.has(l))return;Os.add(l);const u=t(o),d=(m,x)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),!(!dy(m)||!Os.has(l))&&(Os.delete(l),typeof u=="function"&&u(m,{success:x}))},f=m=>{d(m,n.useGlobalTarget||Mw(l,m.target))},p=m=>{d(m,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(o=>{!sj(o)&&o.getAttribute("tabindex")===null&&(o.tabIndex=0),(n.useGlobalTarget?window:o).addEventListener("pointerdown",a,i),o.addEventListener("focus",u=>aj(u,i),i)}),s}function lj(e){return e==="x"||e==="y"?Xt[e]?null:(Xt[e]=!0,()=>{Xt[e]=!1}):Xt.x||Xt.y?null:(Xt.x=Xt.y=!0,()=>{Xt.x=Xt.y=!1})}const Fw=new Set(["width","height","top","left","right","bottom",...gs]);let tl;function uj(){tl=void 0}const wn={now:()=>(tl===void 0&&wn.set(Qe.isProcessing||iP.useManualTiming?Qe.timestamp:performance.now()),tl),set:e=>{tl=e,queueMicrotask(uj)}};function Eh(e,t){e.indexOf(t)===-1&&e.push(t)}function Ch(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Th{constructor(){this.subscriptions=[]}add(t){return Eh(this.subscriptions,t),()=>Ch(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const a=this.subscriptions[s];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Ow(e,t){return t?e*(1e3/t):0}const fy=30,cj=e=>!isNaN(parseFloat(e));class dj{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=wn.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=wn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=cj(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Th);const r=this.events[t].add(n);return t==="change"?()=>{r(),Ae.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=wn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>fy)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,fy);return Ow(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ra(e,t){return new dj(e,t)}function fj(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ra(n))}function pj(e,t){const n=_u(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const a in s){const o=CP(s[a]);fj(e,a,o)}}function hj(e){return!!(at(e)&&e.add)}function of(e,t){const n=e.getValue("willChange");if(hj(n))return n.add(t)}function zw(e){return e.props[mw]}const Uw=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,mj=1e-7,gj=12;function yj(e,t,n,r,i){let s,a,o=0;do a=t+(n-t)/2,s=Uw(a,r,i)-e,s>0?n=a:t=a;while(Math.abs(s)>mj&&++o<gj);return a}function Qa(e,t,n,r){if(e===t&&n===r)return Pt;const i=s=>yj(s,0,1,e,n);return s=>s===0||s===1?s:Uw(i(s),t,r)}const Bw=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Vw=e=>t=>1-e(1-t),$w=Qa(.33,1.53,.69,.99),_h=Vw($w),Hw=Bw(_h),Ww=e=>(e*=2)<1?.5*_h(e):.5*(2-Math.pow(2,-10*(e-1))),Ah=e=>1-Math.sin(Math.acos(e)),Gw=Vw(Ah),qw=Bw(Ah),Kw=e=>/^0[^.\s]+$/u.test(e);function xj(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Kw(e):!0}const Zs=e=>Math.round(e*1e5)/1e5,Ih=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function vj(e){return e==null}const bj=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Nh=(e,t)=>n=>!!(typeof n=="string"&&bj.test(n)&&n.startsWith(e)||t&&!vj(n)&&Object.prototype.hasOwnProperty.call(n,t)),Yw=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,a,o]=r.match(Ih);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(a),alpha:o!==void 0?parseFloat(o):1}},wj=e=>Kn(0,255,e),wc={...ys,transform:e=>Math.round(wj(e))},Kr={test:Nh("rgb","red"),parse:Yw("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+wc.transform(e)+", "+wc.transform(t)+", "+wc.transform(n)+", "+Zs(ja.transform(r))+")"};function kj(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const lf={test:Nh("#"),parse:kj,transform:Kr.transform},Pi={test:Nh("hsl","hue"),parse:Yw("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+bn.transform(Zs(t))+", "+bn.transform(Zs(n))+", "+Zs(ja.transform(r))+")"},rt={test:e=>Kr.test(e)||lf.test(e)||Pi.test(e),parse:e=>Kr.test(e)?Kr.parse(e):Pi.test(e)?Pi.parse(e):lf.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Kr.transform(e):Pi.transform(e)},Sj=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Ej(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Ih))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Sj))===null||n===void 0?void 0:n.length)||0)>0}const Xw="number",Qw="color",Cj="var",Tj="var(",py="${}",_j=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function La(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const o=t.replace(_j,l=>(rt.test(l)?(r.color.push(s),i.push(Qw),n.push(rt.parse(l))):l.startsWith(Tj)?(r.var.push(s),i.push(Cj),n.push(l)):(r.number.push(s),i.push(Xw),n.push(parseFloat(l))),++s,py)).split(py);return{values:n,split:o,indexes:r,types:i}}function Zw(e){return La(e).values}function Jw(e){const{split:t,types:n}=La(e),r=t.length;return i=>{let s="";for(let a=0;a<r;a++)if(s+=t[a],i[a]!==void 0){const o=n[a];o===Xw?s+=Zs(i[a]):o===Qw?s+=rt.transform(i[a]):s+=i[a]}return s}}const Aj=e=>typeof e=="number"?0:e;function Ij(e){const t=Zw(e);return Jw(e)(t.map(Aj))}const Cr={test:Ej,parse:Zw,createTransformer:Jw,getAnimatableNone:Ij},Nj=new Set(["brightness","contrast","saturate","opacity"]);function Pj(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Ih)||[];if(!r)return e;const i=n.replace(r,"");let s=Nj.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const jj=/\b([a-z-]*)\(.*?\)/gu,uf={...Cr,getAnimatableNone:e=>{const t=e.match(jj);return t?t.map(Pj).join(" "):e}},Rj={...hh,color:rt,backgroundColor:rt,outlineColor:rt,fill:rt,stroke:rt,borderColor:rt,borderTopColor:rt,borderRightColor:rt,borderBottomColor:rt,borderLeftColor:rt,filter:uf,WebkitFilter:uf},Ph=e=>Rj[e];function ek(e,t){let n=Ph(e);return n!==uf&&(n=Cr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Lj=new Set(["auto","none","0"]);function Dj(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!Lj.has(s)&&La(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=ek(n,i)}const hy=e=>e===ys||e===J,my=(e,t)=>parseFloat(e.split(", ")[t]),gy=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return my(i[1],t);{const s=r.match(/^matrix\((.+)\)$/u);return s?my(s[1],e):0}},Mj=new Set(["x","y","z"]),Fj=gs.filter(e=>!Mj.has(e));function Oj(e){const t=[];return Fj.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const os={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:gy(4,13),y:gy(5,14)};os.translateX=os.x;os.translateY=os.y;const ei=new Set;let cf=!1,df=!1;function tk(){if(df){const e=Array.from(ei).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=Oj(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,a])=>{var o;(o=r.getValue(s))===null||o===void 0||o.set(a)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}df=!1,cf=!1,ei.forEach(e=>e.complete()),ei.clear()}function nk(){ei.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(df=!0)})}function zj(){nk(),tk()}class jh{constructor(t,n,r,i,s,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ei.add(this),cf||(cf=!0,Ae.read(nk),Ae.resolveKeyframes(tk))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let s=0;s<t.length;s++)if(t[s]===null)if(s===0){const a=i==null?void 0:i.get(),o=t[t.length-1];if(a!==void 0)t[0]=a;else if(r&&n){const l=r.readValue(n,o);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=o),i&&a===void 0&&i.set(t[0])}else t[s]=t[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),ei.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ei.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const rk=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Uj=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Bj(e){const t=Uj.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function ik(e,t,n=1){const[r,i]=Bj(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const a=s.trim();return rk(a)?parseFloat(a):a}return ph(i)?ik(i,t,n+1):i}const sk=e=>t=>t.test(e),Vj={test:e=>e==="auto",parse:e=>e},ak=[ys,J,bn,er,PP,NP,Vj],yy=e=>ak.find(sk(e));class ok extends jh{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),ph(u))){const d=ik(u,n.current);d!==void 0&&(t[l]=d),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!Fw.has(r)||t.length!==2)return;const[i,s]=t,a=yy(i),o=yy(s);if(a!==o)if(hy(a)&&hy(o))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)xj(t[i])&&r.push(i);r.length&&Dj(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=os[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const a=i.length-1,o=i[a];i[a]=os[r](n.measureViewportBox(),window.getComputedStyle(n.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const xy=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Cr.test(e)||e==="0")&&!e.startsWith("url("));function $j(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Hj(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],a=xy(i,t),o=xy(s,t);return!a||!o?!1:$j(e)||(n==="spring"||wh(n))&&r}const Wj=e=>e!==null;function Au(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(Wj),s=t&&n!=="loop"&&t%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const Gj=40;class lk{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:a="loop",...o}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=wn.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:a,...o},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Gj?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&zj(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=wn.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:a,onComplete:o,onUpdate:l,isGenerator:u}=this.options;if(!u&&!Hj(t,r,i,s))if(a)this.options.duration=0;else{l&&l(Au(t,this.options,n)),o&&o(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const Re=(e,t,n)=>e+(t-e)*n;function kc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function qj({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,a=0;if(!t)i=s=a=n;else{const o=n<.5?n*(1+t):n+t-n*t,l=2*n-o;i=kc(l,o,e+1/3),s=kc(l,o,e),a=kc(l,o,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:r}}function Vl(e,t){return n=>n>0?t:e}const Sc=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Kj=[lf,Kr,Pi],Yj=e=>Kj.find(t=>t.test(e));function vy(e){const t=Yj(e);if(!t)return!1;let n=t.parse(e);return t===Pi&&(n=qj(n)),n}const by=(e,t)=>{const n=vy(e),r=vy(t);if(!n||!r)return Vl(e,t);const i={...n};return s=>(i.red=Sc(n.red,r.red,s),i.green=Sc(n.green,r.green,s),i.blue=Sc(n.blue,r.blue,s),i.alpha=Re(n.alpha,r.alpha,s),Kr.transform(i))},Xj=(e,t)=>n=>t(e(n)),Za=(...e)=>e.reduce(Xj),ff=new Set(["none","hidden"]);function Qj(e,t){return ff.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Zj(e,t){return n=>Re(e,t,n)}function Rh(e){return typeof e=="number"?Zj:typeof e=="string"?ph(e)?Vl:rt.test(e)?by:t5:Array.isArray(e)?uk:typeof e=="object"?rt.test(e)?by:Jj:Vl}function uk(e,t){const n=[...e],r=n.length,i=e.map((s,a)=>Rh(s)(s,t[a]));return s=>{for(let a=0;a<r;a++)n[a]=i[a](s);return n}}function Jj(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Rh(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function e5(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const a=t.types[s],o=e.indexes[a][i[a]],l=(n=e.values[o])!==null&&n!==void 0?n:0;r[s]=l,i[a]++}return r}const t5=(e,t)=>{const n=Cr.createTransformer(t),r=La(e),i=La(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?ff.has(e)&&!i.values.length||ff.has(t)&&!r.values.length?Qj(e,t):Za(uk(e5(r,i),i.values),n):Vl(e,t)};function ck(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Re(e,t,n):Rh(e)(e,t)}const n5=5;function dk(e,t,n){const r=Math.max(t-n5,0);return Ow(n-e(r),t-r)}const Fe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ec=.001;function r5({duration:e=Fe.duration,bounce:t=Fe.bounce,velocity:n=Fe.velocity,mass:r=Fe.mass}){let i,s,a=1-t;a=Kn(Fe.minDamping,Fe.maxDamping,a),e=Kn(Fe.minDuration,Fe.maxDuration,Un(e)),a<1?(i=u=>{const d=u*a,f=d*e,p=d-n,m=pf(u,a),x=Math.exp(-f);return Ec-p/m*x},s=u=>{const f=u*a*e,p=f*n+n,m=Math.pow(a,2)*Math.pow(u,2)*e,x=Math.exp(-f),v=pf(Math.pow(u,2),a);return(-i(u)+Ec>0?-1:1)*((p-m)*x)/v}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-Ec+d*f},s=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const o=5/e,l=s5(i,s,o);if(e=zn(e),isNaN(l))return{stiffness:Fe.stiffness,damping:Fe.damping,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const i5=12;function s5(e,t,n){let r=n;for(let i=1;i<i5;i++)r=r-e(r)/t(r);return r}function pf(e,t){return e*Math.sqrt(1-t*t)}const a5=["duration","bounce"],o5=["stiffness","damping","mass"];function wy(e,t){return t.some(n=>e[n]!==void 0)}function l5(e){let t={velocity:Fe.velocity,stiffness:Fe.stiffness,damping:Fe.damping,mass:Fe.mass,isResolvedFromDuration:!1,...e};if(!wy(e,o5)&&wy(e,a5))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*Kn(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Fe.mass,stiffness:i,damping:s}}else{const n=r5(e);t={...t,...n,mass:Fe.mass},t.isResolvedFromDuration=!0}return t}function fk(e=Fe.visualDuration,t=Fe.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],o={done:!1,value:s},{stiffness:l,damping:u,mass:d,duration:f,velocity:p,isResolvedFromDuration:m}=l5({...n,velocity:-Un(n.velocity||0)}),x=p||0,v=u/(2*Math.sqrt(l*d)),k=a-s,g=Un(Math.sqrt(l/d)),h=Math.abs(k)<5;r||(r=h?Fe.restSpeed.granular:Fe.restSpeed.default),i||(i=h?Fe.restDelta.granular:Fe.restDelta.default);let y;if(v<1){const C=pf(g,v);y=b=>{const I=Math.exp(-v*g*b);return a-I*((x+v*g*k)/C*Math.sin(C*b)+k*Math.cos(C*b))}}else if(v===1)y=C=>a-Math.exp(-g*C)*(k+(x+g*k)*C);else{const C=g*Math.sqrt(v*v-1);y=b=>{const I=Math.exp(-v*g*b),N=Math.min(C*b,300);return a-I*((x+v*g*k)*Math.sinh(N)+C*k*Math.cosh(N))/C}}const w={calculatedDuration:m&&f||null,next:C=>{const b=y(C);if(m)o.done=C>=f;else{let I=0;v<1&&(I=C===0?zn(x):dk(y,C,b));const N=Math.abs(I)<=r,R=Math.abs(a-b)<=i;o.done=N&&R}return o.value=o.done?a:b,o},toString:()=>{const C=Math.min(Nw(w),sf),b=Pw(I=>w.next(C*I).value,C,30);return C+"ms "+b}};return w}function ky({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:a,min:o,max:l,restDelta:u=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},m=N=>o!==void 0&&N<o||l!==void 0&&N>l,x=N=>o===void 0?l:l===void 0||Math.abs(o-N)<Math.abs(l-N)?o:l;let v=n*t;const k=f+v,g=a===void 0?k:a(k);g!==k&&(v=g-f);const h=N=>-v*Math.exp(-N/r),y=N=>g+h(N),w=N=>{const R=h(N),_=y(N);p.done=Math.abs(R)<=u,p.value=p.done?g:_};let C,b;const I=N=>{m(p.value)&&(C=N,b=fk({keyframes:[p.value,x(p.value)],velocity:dk(y,N,p.value),damping:i,stiffness:s,restDelta:u,restSpeed:d}))};return I(0),{calculatedDuration:null,next:N=>{let R=!1;return!b&&C===void 0&&(R=!0,w(N),I(N)),C!==void 0&&N>=C?b.next(N-C):(!R&&w(N),p)}}}const u5=Qa(.42,0,1,1),c5=Qa(0,0,.58,1),pk=Qa(.42,0,.58,1),d5=e=>Array.isArray(e)&&typeof e[0]!="number",f5={linear:Pt,easeIn:u5,easeInOut:pk,easeOut:c5,circIn:Ah,circInOut:qw,circOut:Gw,backIn:_h,backInOut:Hw,backOut:$w,anticipate:Ww},Sy=e=>{if(kh(e)){cw(e.length===4);const[t,n,r,i]=e;return Qa(t,n,r,i)}else if(typeof e=="string")return f5[e];return e};function p5(e,t,n){const r=[],i=n||ck,s=e.length-1;for(let a=0;a<s;a++){let o=i(e[a],e[a+1]);if(t){const l=Array.isArray(t)?t[a]||Pt:t;o=Za(l,o)}r.push(o)}return r}function h5(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(cw(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const a=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=p5(t,r,i),l=o.length,u=d=>{if(a&&d<e[0])return t[0];let f=0;if(l>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=ss(e[f],e[f+1],d);return o[f](p)};return n?d=>u(Kn(e[0],e[s-1],d)):u}function m5(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=ss(0,t,r);e.push(Re(n,1,i))}}function g5(e){const t=[0];return m5(t,e.length-1),t}function y5(e,t){return e.map(n=>n*t)}function x5(e,t){return e.map(()=>t||pk).splice(0,e.length-1)}function $l({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=d5(r)?r.map(Sy):Sy(r),s={done:!1,value:t[0]},a=y5(n&&n.length===t.length?n:g5(t),e),o=h5(a,t,{ease:Array.isArray(i)?i:x5(t,i)});return{calculatedDuration:e,next:l=>(s.value=o(l),s.done=l>=e,s)}}const v5=e=>{const t=({timestamp:n})=>e(n);return{start:()=>Ae.update(t,!0),stop:()=>Er(t),now:()=>Qe.isProcessing?Qe.timestamp:wn.now()}},b5={decay:ky,inertia:ky,tween:$l,keyframes:$l,spring:fk},w5=e=>e/100;class Lh extends lk{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,a=(i==null?void 0:i.KeyframeResolver)||jh,o=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new a(s,o,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:a=0}=this.options,o=wh(n)?n:b5[n]||$l;let l,u;o!==$l&&typeof t[0]!="number"&&(l=Za(w5,ck(t[0],t[1])),t=[0,100]);const d=o({...this.options,keyframes:t});s==="mirror"&&(u=o({...this.options,keyframes:[...t].reverse(),velocity:-a})),d.calculatedDuration===null&&(d.calculatedDuration=Nw(d));const{calculatedDuration:f}=d,p=f+i,m=p*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:p,totalDuration:m}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:N}=this.options;return{done:!0,value:N[N.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:a,mapPercentToKeyframes:o,keyframes:l,calculatedDuration:u,totalDuration:d,resolvedDuration:f}=r;if(this.startTime===null)return s.next(0);const{delay:p,repeat:m,repeatType:x,repeatDelay:v,onUpdate:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const g=this.currentTime-p*(this.speed>=0?1:-1),h=this.speed>=0?g<0:g>d;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let y=this.currentTime,w=s;if(m){const N=Math.min(this.currentTime,d)/f;let R=Math.floor(N),_=N%1;!_&&N>=1&&(_=1),_===1&&R--,R=Math.min(R,m+1),!!(R%2)&&(x==="reverse"?(_=1-_,v&&(_-=v/f)):x==="mirror"&&(w=a)),y=Kn(0,1,_)*f}const C=h?{done:!1,value:l[0]}:w.next(y);o&&(C.value=o(C.value));let{done:b}=C;!h&&u!==null&&(b=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const I=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&b);return I&&i!==void 0&&(C.value=Au(l,this.options,i)),k&&k(C.value),I&&this.finish(),C}get duration(){const{resolved:t}=this;return t?Un(t.calculatedDuration):0}get time(){return Un(this.currentTime)}set time(t){t=zn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Un(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=v5,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const k5=new Set(["opacity","clipPath","filter","transform"]);function S5(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:a="loop",ease:o="easeInOut",times:l}={}){const u={[t]:n};l&&(u.offset=l);const d=Rw(o,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"})}const E5=ah(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Hl=10,C5=2e4;function T5(e){return wh(e.type)||e.type==="spring"||!jw(e.ease)}function _5(e,t){const n=new Lh({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let s=0;for(;!r.done&&s<C5;)r=n.sample(s),i.push(r.value),s+=Hl;return{times:void 0,keyframes:i,duration:s-Hl,ease:"linear"}}const hk={anticipate:Ww,backInOut:Hw,circInOut:qw};function A5(e){return e in hk}class Ey extends lk{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new ok(s,(a,o)=>this.onKeyframesResolved(a,o),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:s,type:a,motionValue:o,name:l,startTime:u}=this.options;if(!o.owner||!o.owner.current)return!1;if(typeof s=="string"&&Bl()&&A5(s)&&(s=hk[s]),T5(this.options)){const{onComplete:f,onUpdate:p,motionValue:m,element:x,...v}=this.options,k=_5(t,v);t=k.keyframes,t.length===1&&(t[1]=t[0]),r=k.duration,i=k.times,s=k.ease,a="keyframes"}const d=S5(o.owner.current,l,t,{...this.options,duration:r,times:i,ease:s});return d.startTime=u??this.calcStartTime(),this.pendingTimeline?(ly(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;o.set(Au(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:a,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return Un(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return Un(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=zn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Pt;const{animation:r}=n;ly(r,t)}return Pt}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:s,ease:a,times:o}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:f,element:p,...m}=this.options,x=new Lh({...m,keyframes:r,duration:i,type:s,ease:a,times:o,isGenerator:!0}),v=zn(this.time);u.setWithVelocity(x.sample(v-Hl).value,x.sample(v).value,Hl)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:a,type:o}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=n.owner.getProps();return E5()&&r&&k5.has(r)&&!l&&!u&&!i&&s!=="mirror"&&a!==0&&o!=="inertia"}}const I5={type:"spring",stiffness:500,damping:25,restSpeed:10},N5=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),P5={type:"keyframes",duration:.8},j5={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},R5=(e,{keyframes:t})=>t.length>2?P5:fi.has(e)?e.startsWith("scale")?N5(t[1]):I5:j5;function L5({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:a,repeatDelay:o,from:l,elapsed:u,...d}){return!!Object.keys(d).length}const Dh=(e,t,n,r={},i,s)=>a=>{const o=bh(r,e)||{},l=o.delay||r.delay||0;let{elapsed:u=0}=r;u=u-zn(l);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...o,delay:-u,onUpdate:p=>{t.set(p),o.onUpdate&&o.onUpdate(p)},onComplete:()=>{a(),o.onComplete&&o.onComplete()},name:e,motionValue:t,element:s?void 0:i};L5(o)||(d={...d,...R5(e,d)}),d.duration&&(d.duration=zn(d.duration)),d.repeatDelay&&(d.repeatDelay=zn(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!s&&t.get()!==void 0){const p=Au(d.keyframes,o);if(p!==void 0)return Ae.update(()=>{d.onUpdate(p),d.onComplete()}),new JP([])}return!s&&Ey.supports(d)?new Ey(d):new Lh(d)};function D5({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function mk(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:a=e.getDefaultTransition(),transitionEnd:o,...l}=t;r&&(a=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in l){const p=e.getValue(f,(s=e.latestValues[f])!==null&&s!==void 0?s:null),m=l[f];if(m===void 0||d&&D5(d,f))continue;const x={delay:n,...bh(a||{},f)};let v=!1;if(window.MotionHandoffAnimation){const g=zw(e);if(g){const h=window.MotionHandoffAnimation(g,f,Ae);h!==null&&(x.startTime=h,v=!0)}}of(e,f),p.start(Dh(f,p,m,e.shouldReduceMotion&&Fw.has(f)?{type:!1}:x,e,v));const k=p.animation;k&&u.push(k)}return o&&Promise.all(u).then(()=>{Ae.update(()=>{o&&pj(e,o)})}),u}function hf(e,t,n={}){var r;const i=_u(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const a=i?()=>Promise.all(mk(e,i,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=s;return M5(e,t,d+u,f,p,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[u,d]=l==="beforeChildren"?[a,o]:[o,a];return u().then(()=>d())}else return Promise.all([a(),o(n.delay)])}function M5(e,t,n=0,r=0,i=1,s){const a=[],o=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>o-u*r;return Array.from(e.variantChildren).sort(F5).forEach((u,d)=>{u.notify("AnimationStart",t),a.push(hf(u,t,{...s,delay:n+l(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function F5(e,t){return e.sortNodePosition(t)}function O5(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>hf(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=hf(e,t,n);else{const i=typeof t=="function"?_u(e,t,n.custom):t;r=Promise.all(mk(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const z5=lh.length;function gk(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?gk(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<z5;n++){const r=lh[n],i=e.props[r];(Pa(i)||i===!1)&&(t[r]=i)}return t}const U5=[...oh].reverse(),B5=oh.length;function V5(e){return t=>Promise.all(t.map(({animation:n,options:r})=>O5(e,n,r)))}function $5(e){let t=V5(e),n=Cy(),r=!0;const i=l=>(u,d)=>{var f;const p=_u(e,d,l==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:m,transitionEnd:x,...v}=p;u={...u,...v,...x}}return u};function s(l){t=l(e)}function a(l){const{props:u}=e,d=gk(e.parent)||{},f=[],p=new Set;let m={},x=1/0;for(let k=0;k<B5;k++){const g=U5[k],h=n[g],y=u[g]!==void 0?u[g]:d[g],w=Pa(y),C=g===l?h.isActive:null;C===!1&&(x=k);let b=y===d[g]&&y!==u[g]&&w;if(b&&r&&e.manuallyAnimateOnMount&&(b=!1),h.protectedKeys={...m},!h.isActive&&C===null||!y&&!h.prevProp||Cu(y)||typeof y=="boolean")continue;const I=H5(h.prevProp,y);let N=I||g===l&&h.isActive&&!b&&w||k>x&&w,R=!1;const _=Array.isArray(y)?y:[y];let j=_.reduce(i(g),{});C===!1&&(j={});const{prevResolvedValues:z={}}=h,G={...z,...j},q=Q=>{N=!0,p.has(Q)&&(R=!0,p.delete(Q)),h.needsAnimating[Q]=!0;const L=e.getValue(Q);L&&(L.liveStyle=!1)};for(const Q in G){const L=j[Q],B=z[Q];if(m.hasOwnProperty(Q))continue;let S=!1;rf(L)&&rf(B)?S=!Iw(L,B):S=L!==B,S?L!=null?q(Q):p.add(Q):L!==void 0&&p.has(Q)?q(Q):h.protectedKeys[Q]=!0}h.prevProp=y,h.prevResolvedValues=j,h.isActive&&(m={...m,...j}),r&&e.blockInitialAnimation&&(N=!1),N&&(!(b&&I)||R)&&f.push(..._.map(Q=>({animation:Q,options:{type:g}})))}if(p.size){const k={};p.forEach(g=>{const h=e.getBaseTarget(g),y=e.getValue(g);y&&(y.liveStyle=!0),k[g]=h??null}),f.push({animation:k})}let v=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(v=!1),r=!1,v?t(f):Promise.resolve()}function o(l,u){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var m;return(m=p.animationState)===null||m===void 0?void 0:m.setActive(l,u)}),n[l].isActive=u;const f=a(l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:a,setActive:o,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Cy(),r=!0}}}function H5(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Iw(t,e):!1}function Lr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Cy(){return{animate:Lr(!0),whileInView:Lr(),whileHover:Lr(),whileTap:Lr(),whileDrag:Lr(),whileFocus:Lr(),exit:Lr()}}class Nr{constructor(t){this.isMounted=!1,this.node=t}update(){}}class W5 extends Nr{constructor(t){super(t),t.animationState||(t.animationState=$5(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Cu(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let G5=0;class q5 extends Nr{constructor(){super(...arguments),this.id=G5++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const K5={animation:{Feature:W5},exit:{Feature:q5}};function Da(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Ja(e){return{point:{x:e.pageX,y:e.pageY}}}const Y5=e=>t=>Sh(t)&&e(t,Ja(t));function Js(e,t,n,r){return Da(e,t,Y5(n),r)}const Ty=(e,t)=>Math.abs(e-t);function X5(e,t){const n=Ty(e.x,t.x),r=Ty(e.y,t.y);return Math.sqrt(n**2+r**2)}class yk{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Tc(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,m=X5(f.offset,{x:0,y:0})>=3;if(!p&&!m)return;const{point:x}=f,{timestamp:v}=Qe;this.history.push({...x,timestamp:v});const{onStart:k,onMove:g}=this.handlers;p||(k&&k(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Cc(p,this.transformPagePoint),Ae.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:m,onSessionEnd:x,resumeAnimation:v}=this.handlers;if(this.dragSnapToOrigin&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=Tc(f.type==="pointercancel"?this.lastMoveEventInfo:Cc(p,this.transformPagePoint),this.history);this.startEvent&&m&&m(f,k),x&&x(f,k)},!Sh(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const a=Ja(t),o=Cc(a,this.transformPagePoint),{point:l}=o,{timestamp:u}=Qe;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,Tc(o,this.history)),this.removeListeners=Za(Js(this.contextWindow,"pointermove",this.handlePointerMove),Js(this.contextWindow,"pointerup",this.handlePointerUp),Js(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Er(this.updatePoint)}}function Cc(e,t){return t?{point:t(e.point)}:e}function _y(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Tc({point:e},t){return{point:e,delta:_y(e,xk(t)),offset:_y(e,Q5(t)),velocity:Z5(t,.1)}}function Q5(e){return e[0]}function xk(e){return e[e.length-1]}function Z5(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=xk(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>zn(t)));)n--;if(!r)return{x:0,y:0};const s=Un(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const a={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}const vk=1e-4,J5=1-vk,eR=1+vk,bk=.01,tR=0-bk,nR=0+bk;function Rt(e){return e.max-e.min}function rR(e,t,n){return Math.abs(e-t)<=n}function Ay(e,t,n,r=.5){e.origin=r,e.originPoint=Re(t.min,t.max,e.origin),e.scale=Rt(n)/Rt(t),e.translate=Re(n.min,n.max,e.origin)-e.originPoint,(e.scale>=J5&&e.scale<=eR||isNaN(e.scale))&&(e.scale=1),(e.translate>=tR&&e.translate<=nR||isNaN(e.translate))&&(e.translate=0)}function ea(e,t,n,r){Ay(e.x,t.x,n.x,r?r.originX:void 0),Ay(e.y,t.y,n.y,r?r.originY:void 0)}function Iy(e,t,n){e.min=n.min+t.min,e.max=e.min+Rt(t)}function iR(e,t,n){Iy(e.x,t.x,n.x),Iy(e.y,t.y,n.y)}function Ny(e,t,n){e.min=t.min-n.min,e.max=e.min+Rt(t)}function ta(e,t,n){Ny(e.x,t.x,n.x),Ny(e.y,t.y,n.y)}function sR(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Re(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Re(n,e,r.max):Math.min(e,n)),e}function Py(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function aR(e,{top:t,left:n,bottom:r,right:i}){return{x:Py(e.x,n,i),y:Py(e.y,t,r)}}function jy(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function oR(e,t){return{x:jy(e.x,t.x),y:jy(e.y,t.y)}}function lR(e,t){let n=.5;const r=Rt(e),i=Rt(t);return i>r?n=ss(t.min,t.max-r,e.min):r>i&&(n=ss(e.min,e.max-i,t.min)),Kn(0,1,n)}function uR(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const mf=.35;function cR(e=mf){return e===!1?e=0:e===!0&&(e=mf),{x:Ry(e,"left","right"),y:Ry(e,"top","bottom")}}function Ry(e,t,n){return{min:Ly(e,t),max:Ly(e,n)}}function Ly(e,t){return typeof e=="number"?e:e[t]||0}const Dy=()=>({translate:0,scale:1,origin:0,originPoint:0}),ji=()=>({x:Dy(),y:Dy()}),My=()=>({min:0,max:0}),ze=()=>({x:My(),y:My()});function Ot(e){return[e("x"),e("y")]}function wk({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function dR({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function fR(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function _c(e){return e===void 0||e===1}function gf({scale:e,scaleX:t,scaleY:n}){return!_c(e)||!_c(t)||!_c(n)}function Ur(e){return gf(e)||kk(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function kk(e){return Fy(e.x)||Fy(e.y)}function Fy(e){return e&&e!=="0%"}function Wl(e,t,n){const r=e-n,i=t*r;return n+i}function Oy(e,t,n,r,i){return i!==void 0&&(e=Wl(e,i,r)),Wl(e,n,r)+t}function yf(e,t=0,n=1,r,i){e.min=Oy(e.min,t,n,r,i),e.max=Oy(e.max,t,n,r,i)}function Sk(e,{x:t,y:n}){yf(e.x,t.translate,t.scale,t.originPoint),yf(e.y,n.translate,n.scale,n.originPoint)}const zy=.999999999999,Uy=1.0000000000001;function pR(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,a;for(let o=0;o<i;o++){s=n[o],a=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Li(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,Sk(e,a)),r&&Ur(s.latestValues)&&Li(e,s.latestValues))}t.x<Uy&&t.x>zy&&(t.x=1),t.y<Uy&&t.y>zy&&(t.y=1)}function Ri(e,t){e.min=e.min+t,e.max=e.max+t}function By(e,t,n,r,i=.5){const s=Re(e.min,e.max,i);yf(e,t,n,s,r)}function Li(e,t){By(e.x,t.x,t.scaleX,t.scale,t.originX),By(e.y,t.y,t.scaleY,t.scale,t.originY)}function Ek(e,t){return wk(fR(e.getBoundingClientRect(),t))}function hR(e,t,n){const r=Ek(e,n),{scroll:i}=t;return i&&(Ri(r.x,i.offset.x),Ri(r.y,i.offset.y)),r}const Ck=({current:e})=>e?e.ownerDocument.defaultView:null,mR=new WeakMap;class gR{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ze(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ja(d).point)},s=(d,f)=>{const{drag:p,dragPropagation:m,onDragStart:x}=this.getProps();if(p&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=lj(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ot(k=>{let g=this.getAxisMotionValue(k).get()||0;if(bn.test(g)){const{projection:h}=this.visualElement;if(h&&h.layout){const y=h.layout.layoutBox[k];y&&(g=Rt(y)*(parseFloat(g)/100))}}this.originPoint[k]=g}),x&&Ae.postRender(()=>x(d,f)),of(this.visualElement,"transform");const{animationState:v}=this.visualElement;v&&v.setActive("whileDrag",!0)},a=(d,f)=>{const{dragPropagation:p,dragDirectionLock:m,onDirectionLock:x,onDrag:v}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:k}=f;if(m&&this.currentDirection===null){this.currentDirection=yR(k),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",f.point,k),this.updateAxis("y",f.point,k),this.visualElement.render(),v&&v(d,f)},o=(d,f)=>this.stop(d,f),l=()=>Ot(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new yk(t,{onSessionStart:i,onStart:s,onMove:a,onSessionEnd:o,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Ck(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&Ae.postRender(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Ao(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=sR(a,this.constraints[t],this.elastic[t])),s.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&Ni(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=aR(i.layoutBox,n):this.constraints=!1,this.elastic=cR(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Ot(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=uR(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Ni(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=hR(r,i.root,this.visualElement.getTransformPagePoint());let a=oR(i.layout.layoutBox,s);if(n){const o=n(dR(a));this.hasMutatedConstraints=!!o,o&&(a=wk(o))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),l=this.constraints||{},u=Ot(d=>{if(!Ao(d,n,this.currentDirection))return;let f=l&&l[d]||{};a&&(f={min:0,max:0});const p=i?200:1e6,m=i?40:1e7,x={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,x)});return Promise.all(u).then(o)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return of(this.visualElement,t),r.start(Dh(t,r,0,n,this.visualElement,!1))}stopAnimation(){Ot(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Ot(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Ot(n=>{const{drag:r}=this.getProps();if(!Ao(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:o}=i.layout.layoutBox[n];s.set(t[n]-Re(a,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Ni(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Ot(a=>{const o=this.getAxisMotionValue(a);if(o&&this.constraints!==!1){const l=o.get();i[a]=lR({min:l,max:l},this.constraints[a])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Ot(a=>{if(!Ao(a,t,null))return;const o=this.getAxisMotionValue(a),{min:l,max:u}=this.constraints[a];o.set(Re(l,u,i[a]))})}addListeners(){if(!this.visualElement.current)return;mR.set(this.visualElement,this);const t=this.visualElement.current,n=Js(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Ni(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),Ae.read(r);const a=Da(window,"resize",()=>this.scalePositionWithinConstraints()),o=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Ot(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{a(),n(),s(),o&&o()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:a=mf,dragMomentum:o=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:a,dragMomentum:o}}}function Ao(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function yR(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class xR extends Nr{constructor(t){super(t),this.removeGroupControls=Pt,this.removeListeners=Pt,this.controls=new gR(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Pt}unmount(){this.removeGroupControls(),this.removeListeners()}}const Vy=e=>(t,n)=>{e&&Ae.postRender(()=>e(t,n))};class vR extends Nr{constructor(){super(...arguments),this.removePointerDownListener=Pt}onPointerDown(t){this.session=new yk(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ck(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Vy(t),onStart:Vy(n),onMove:r,onEnd:(s,a)=>{delete this.session,i&&Ae.postRender(()=>i(s,a))}}}mount(){this.removePointerDownListener=Js(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const nl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function $y(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Is={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(J.test(e))e=parseFloat(e);else return e;const n=$y(e,t.target.x),r=$y(e,t.target.y);return`${n}% ${r}%`}},bR={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Cr.parse(e);if(i.length>5)return r;const s=Cr.createTransformer(e),a=typeof i[0]!="number"?1:0,o=n.x.scale*t.x,l=n.y.scale*t.y;i[0+a]/=o,i[1+a]/=l;const u=Re(o,l,.5);return typeof i[2+a]=="number"&&(i[2+a]/=u),typeof i[3+a]=="number"&&(i[3+a]/=u),s(i)}};class wR extends E.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;BP(kR),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),nl.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,a=r.projection;return a&&(a.isPresent=s,i||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?a.promote():a.relegate()||Ae.postRender(()=>{const o=a.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),ch.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Tk(e){const[t,n]=nP(),r=E.useContext(lw);return c.jsx(wR,{...e,layoutGroup:r,switchLayoutGroup:E.useContext(gw),isPresent:t,safeToRemove:n})}const kR={borderRadius:{...Is,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Is,borderTopRightRadius:Is,borderBottomLeftRadius:Is,borderBottomRightRadius:Is,boxShadow:bR};function SR(e,t,n){const r=at(e)?e:Ra(e);return r.start(Dh("",r,t,n)),r.animation}function ER(e){return e instanceof SVGElement&&e.tagName!=="svg"}const CR=(e,t)=>e.depth-t.depth;class TR{constructor(){this.children=[],this.isDirty=!1}add(t){Eh(this.children,t),this.isDirty=!0}remove(t){Ch(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(CR),this.isDirty=!1,this.children.forEach(t)}}function _R(e,t){const n=wn.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(Er(r),e(s-t))};return Ae.read(r,!0),()=>Er(r)}const _k=["TopLeft","TopRight","BottomLeft","BottomRight"],AR=_k.length,Hy=e=>typeof e=="string"?parseFloat(e):e,Wy=e=>typeof e=="number"||J.test(e);function IR(e,t,n,r,i,s){i?(e.opacity=Re(0,n.opacity!==void 0?n.opacity:1,NR(r)),e.opacityExit=Re(t.opacity!==void 0?t.opacity:1,0,PR(r))):s&&(e.opacity=Re(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<AR;a++){const o=`border${_k[a]}Radius`;let l=Gy(t,o),u=Gy(n,o);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Wy(l)===Wy(u)?(e[o]=Math.max(Re(Hy(l),Hy(u),r),0),(bn.test(u)||bn.test(l))&&(e[o]+="%")):e[o]=u}(t.rotate||n.rotate)&&(e.rotate=Re(t.rotate||0,n.rotate||0,r))}function Gy(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const NR=Ak(0,.5,Gw),PR=Ak(.5,.95,Pt);function Ak(e,t,n){return r=>r<e?0:r>t?1:n(ss(e,t,r))}function qy(e,t){e.min=t.min,e.max=t.max}function Ft(e,t){qy(e.x,t.x),qy(e.y,t.y)}function Ky(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Yy(e,t,n,r,i){return e-=t,e=Wl(e,1/n,r),i!==void 0&&(e=Wl(e,1/i,r)),e}function jR(e,t=0,n=1,r=.5,i,s=e,a=e){if(bn.test(t)&&(t=parseFloat(t),t=Re(a.min,a.max,t/100)-a.min),typeof t!="number")return;let o=Re(s.min,s.max,r);e===s&&(o-=t),e.min=Yy(e.min,t,n,o,i),e.max=Yy(e.max,t,n,o,i)}function Xy(e,t,[n,r,i],s,a){jR(e,t[n],t[r],t[i],t.scale,s,a)}const RR=["x","scaleX","originX"],LR=["y","scaleY","originY"];function Qy(e,t,n,r){Xy(e.x,t,RR,n?n.x:void 0,r?r.x:void 0),Xy(e.y,t,LR,n?n.y:void 0,r?r.y:void 0)}function Zy(e){return e.translate===0&&e.scale===1}function Ik(e){return Zy(e.x)&&Zy(e.y)}function Jy(e,t){return e.min===t.min&&e.max===t.max}function DR(e,t){return Jy(e.x,t.x)&&Jy(e.y,t.y)}function ex(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Nk(e,t){return ex(e.x,t.x)&&ex(e.y,t.y)}function tx(e){return Rt(e.x)/Rt(e.y)}function nx(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class MR{constructor(){this.members=[]}add(t){Eh(this.members,t),t.scheduleRender()}remove(t){if(Ch(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function FR(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,a=(n==null?void 0:n.z)||0;if((i||s||a)&&(r=`translate3d(${i}px, ${s}px, ${a}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:f,rotateY:p,skewX:m,skewY:x}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),m&&(r+=`skewX(${m}deg) `),x&&(r+=`skewY(${x}deg) `)}const o=e.x.scale*t.x,l=e.y.scale*t.y;return(o!==1||l!==1)&&(r+=`scale(${o}, ${l})`),r||"none"}const Br={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},zs=typeof window<"u"&&window.MotionDebug!==void 0,Ac=["","X","Y","Z"],OR={visibility:"hidden"},rx=1e3;let zR=0;function Ic(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Pk(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=zw(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Ae,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Pk(r)}function jk({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a={},o=t==null?void 0:t()){this.id=zR++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,zs&&(Br.totalNodes=Br.resolvedTargetDeltas=Br.recalculatedProjection=0),this.nodes.forEach(VR),this.nodes.forEach(qR),this.nodes.forEach(KR),this.nodes.forEach($R),zs&&window.MotionDebug.record(Br)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new TR)}addEventListener(a,o){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new Th),this.eventHandlers.get(a).add(o)}notifyListeners(a,...o){const l=this.eventHandlers.get(a);l&&l.notify(...o)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,o=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=ER(a),this.instance=a;const{layoutId:l,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),o&&(u||l)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=_R(p,250),nl.hasAnimatedSinceResize&&(nl.hasAnimatedSinceResize=!1,this.nodes.forEach(sx))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:m,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||d.getDefaultTransition()||JR,{onLayoutAnimationStart:k,onLayoutAnimationComplete:g}=d.getProps(),h=!this.targetLayout||!Nk(this.targetLayout,x)||m,y=!p&&m;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||p&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,y);const w={...bh(v,"layout"),onPlay:k,onComplete:g};(d.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else p||sx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Er(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(YR),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Pk(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:o,layout:l}=this.options;if(o===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ix);return}this.isUpdating||this.nodes.forEach(WR),this.isUpdating=!1,this.nodes.forEach(GR),this.nodes.forEach(UR),this.nodes.forEach(BR),this.clearAllSnapshots();const o=wn.now();Qe.delta=Kn(0,1e3/60,o-Qe.timestamp),Qe.timestamp=o,Qe.isProcessing=!0,vc.update.process(Qe),vc.preRender.process(Qe),vc.render.process(Qe),Qe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ch.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(HR),this.sharedNodes.forEach(XR)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ae.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ae.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ze(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let o=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(o=!1),o){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,o=this.projectionDelta&&!Ik(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;a&&(o||Ur(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const o=this.measurePageBox();let l=this.removeElementScroll(o);return a&&(l=this.removeTransform(l)),eL(l),{animationId:this.root.animationId,measuredBox:o,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var a;const{visualElement:o}=this.options;if(!o)return ze();const l=o.measureViewportBox();if(!(((a=this.scroll)===null||a===void 0?void 0:a.wasRoot)||this.path.some(tL))){const{scroll:d}=this.root;d&&(Ri(l.x,d.offset.x),Ri(l.y,d.offset.y))}return l}removeElementScroll(a){var o;const l=ze();if(Ft(l,a),!((o=this.scroll)===null||o===void 0)&&o.wasRoot)return l;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&Ft(l,a),Ri(l.x,f.offset.x),Ri(l.y,f.offset.y))}return l}applyTransform(a,o=!1){const l=ze();Ft(l,a);for(let u=0;u<this.path.length;u++){const d=this.path[u];!o&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Li(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Ur(d.latestValues)&&Li(l,d.latestValues)}return Ur(this.latestValues)&&Li(l,this.latestValues),l}removeTransform(a){const o=ze();Ft(o,a);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Ur(u.latestValues))continue;gf(u.latestValues)&&u.updateSnapshot();const d=ze(),f=u.measurePageBox();Ft(d,f),Qy(o,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return Ur(this.latestValues)&&Qy(o,this.latestValues),o}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Qe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var o;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Qe.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ze(),this.relativeTargetOrigin=ze(),ta(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),Ft(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ze(),this.targetWithTransforms=ze()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),iR(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ft(this.target,this.layout.layoutBox),Sk(this.target,this.targetDelta)):Ft(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ze(),this.relativeTargetOrigin=ze(),ta(this.relativeTargetOrigin,this.target,m.target),Ft(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}zs&&Br.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||gf(this.parent.latestValues)||kk(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const o=this.getLead(),l=!!this.resumingFrom||this!==o;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Qe.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;Ft(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,m=this.treeScale.y;pR(this.layoutCorrected,this.treeScale,this.path,l),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=ze());const{target:x}=o;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ky(this.prevProjectionDelta.x,this.projectionDelta.x),Ky(this.prevProjectionDelta.y,this.projectionDelta.y)),ea(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==m||!nx(this.projectionDelta.x,this.prevProjectionDelta.x)||!nx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),zs&&Br.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var o;if((o=this.options.visualElement)===null||o===void 0||o.scheduleRender(),a){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ji(),this.projectionDelta=ji(),this.projectionDeltaWithTransform=ji()}setAnimationOrigin(a,o=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},f=ji();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const p=ze(),m=l?l.source:void 0,x=this.layout?this.layout.source:void 0,v=m!==x,k=this.getStack(),g=!k||k.members.length<=1,h=!!(v&&!g&&this.options.crossfade===!0&&!this.path.some(ZR));this.animationProgress=0;let y;this.mixTargetDelta=w=>{const C=w/1e3;ax(f.x,a.x,C),ax(f.y,a.y,C),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ta(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),QR(this.relativeTarget,this.relativeTargetOrigin,p,C),y&&DR(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=ze()),Ft(y,this.relativeTarget)),v&&(this.animationValues=d,IR(d,u,this.latestValues,C,h,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Er(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ae.update(()=>{nl.hasAnimatedSinceResize=!0,this.currentAnimation=SR(0,rx,{...a,onUpdate:o=>{this.mixTargetDelta(o),a.onUpdate&&a.onUpdate(o)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(rx),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:o,target:l,layout:u,latestValues:d}=a;if(!(!o||!l||!u)){if(this!==a&&this.layout&&u&&Rk(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||ze();const f=Rt(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+f;const p=Rt(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+p}Ft(o,l),Li(o,d),ea(this.projectionDeltaWithTransform,this.layoutCorrected,o,d)}}registerSharedNode(a,o){this.sharedNodes.has(a)||this.sharedNodes.set(a,new MR),this.sharedNodes.get(a).add(o);const u=o.options.initialPromotionConfig;o.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(o):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:o,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let o=!1;const{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(o=!0),!o)return;const u={};l.z&&Ic("z",a,u,this.animationValues);for(let d=0;d<Ac.length;d++)Ic(`rotate${Ac[d]}`,a,u,this.animationValues),Ic(`skew${Ac[d]}`,a,u,this.animationValues);a.render();for(const d in u)a.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);a.scheduleRender()}getProjectionStyles(a){var o,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return OR;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=el(a==null?void 0:a.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const v={};return this.options.layoutId&&(v.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,v.pointerEvents=el(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Ur(this.latestValues)&&(v.transform=d?d({},""):"none",this.hasProjected=!1),v}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=FR(this.projectionDeltaWithTransform,this.treeScale,p),d&&(u.transform=d(p,u.transform));const{x:m,y:x}=this.projectionDelta;u.transformOrigin=`${m.origin*100}% ${x.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(o=p.opacity)!==null&&o!==void 0?o:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const v in Ul){if(p[v]===void 0)continue;const{correct:k,applyTo:g}=Ul[v],h=u.transform==="none"?p[v]:k(p[v],f);if(g){const y=g.length;for(let w=0;w<y;w++)u[g[w]]=h}else u[v]=h}return this.options.layoutId&&(u.pointerEvents=f===this?el(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var o;return(o=a.currentAnimation)===null||o===void 0?void 0:o.stop()}),this.root.nodes.forEach(ix),this.root.sharedNodes.clear()}}}function UR(e){e.updateLayout()}function BR(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,a=n.source!==e.layout.source;s==="size"?Ot(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],m=Rt(p);p.min=r[f].min,p.max=p.min+m}):Rk(s,n.layoutBox,r)&&Ot(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],m=Rt(r[f]);p.max=p.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+m)});const o=ji();ea(o,r,n.layoutBox);const l=ji();a?ea(l,e.applyTransform(i,!0),n.measuredBox):ea(l,r,n.layoutBox);const u=!Ik(o);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:m}=f;if(p&&m){const x=ze();ta(x,n.layoutBox,p.layoutBox);const v=ze();ta(v,r,m.layoutBox),Nk(x,v)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=v,e.relativeTargetOrigin=x,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:o,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function VR(e){zs&&Br.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function $R(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function HR(e){e.clearSnapshot()}function ix(e){e.clearMeasurements()}function WR(e){e.isLayoutDirty=!1}function GR(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function sx(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function qR(e){e.resolveTargetDelta()}function KR(e){e.calcProjection()}function YR(e){e.resetSkewAndRotation()}function XR(e){e.removeLeadSnapshot()}function ax(e,t,n){e.translate=Re(t.translate,0,n),e.scale=Re(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function ox(e,t,n,r){e.min=Re(t.min,n.min,r),e.max=Re(t.max,n.max,r)}function QR(e,t,n,r){ox(e.x,t.x,n.x,r),ox(e.y,t.y,n.y,r)}function ZR(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const JR={duration:.45,ease:[.4,0,.1,1]},lx=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),ux=lx("applewebkit/")&&!lx("chrome/")?Math.round:Pt;function cx(e){e.min=ux(e.min),e.max=ux(e.max)}function eL(e){cx(e.x),cx(e.y)}function Rk(e,t,n){return e==="position"||e==="preserve-aspect"&&!rR(tx(t),tx(n),.2)}function tL(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const nL=jk({attachResizeListener:(e,t)=>Da(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Nc={current:void 0},Lk=jk({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Nc.current){const e=new nL({});e.mount(window),e.setOptions({layoutScroll:!0}),Nc.current=e}return Nc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),rL={pan:{Feature:vR},drag:{Feature:xR,ProjectionNode:Lk,MeasureLayout:Tk}};function dx(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&Ae.postRender(()=>s(t,Ja(t)))}class iL extends Nr{mount(){const{current:t}=this.node;t&&(this.unmount=rj(t,n=>(dx(this.node,n,"Start"),r=>dx(this.node,r,"End"))))}unmount(){}}class sL extends Nr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Za(Da(this.node.current,"focus",()=>this.onFocus()),Da(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function fx(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&Ae.postRender(()=>s(t,Ja(t)))}class aL extends Nr{mount(){const{current:t}=this.node;t&&(this.unmount=oj(t,n=>(fx(this.node,n,"Start"),(r,{success:i})=>fx(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const xf=new WeakMap,Pc=new WeakMap,oL=e=>{const t=xf.get(e.target);t&&t(e)},lL=e=>{e.forEach(oL)};function uL({root:e,...t}){const n=e||document;Pc.has(n)||Pc.set(n,{});const r=Pc.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(lL,{root:e,...t})),r[i]}function cL(e,t,n){const r=uL(t);return xf.set(e,n),r.observe(e),()=>{xf.delete(e),r.unobserve(e)}}const dL={some:0,all:1};class fL extends Nr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:dL[i]},o=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=u?d:f;p&&p(l)};return cL(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(pL(t,n))&&this.startObserver()}unmount(){}}function pL({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const hL={inView:{Feature:fL},tap:{Feature:aL},focus:{Feature:sL},hover:{Feature:iL}},mL={layout:{ProjectionNode:Lk,MeasureLayout:Tk}},vf={current:null},Dk={current:!1};function gL(){if(Dk.current=!0,!!sh)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>vf.current=e.matches;e.addListener(t),t()}else vf.current=!1}const yL=[...ak,rt,Cr],xL=e=>yL.find(sk(e)),px=new WeakMap;function vL(e,t,n){for(const r in t){const i=t[r],s=n[r];if(at(i))e.addValue(r,i);else if(at(s))e.addValue(r,Ra(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const a=e.getValue(r);a.liveStyle===!0?a.jump(i):a.hasAnimated||a.set(i)}else{const a=e.getStaticValue(r);e.addValue(r,Ra(a!==void 0?a:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const hx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class bL{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=jh,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=wn.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,Ae.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:d}=a;this.onUpdate=d,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.blockInitialAnimation=!!s,this.isControllingVariants=Tu(n),this.isVariantNode=hw(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const m in p){const x=p[m];l[m]!==void 0&&at(x)&&x.set(l[m],!1)}}mount(t){this.current=t,px.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Dk.current||gL(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:vf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){px.delete(this.current),this.projection&&this.projection.unmount(),Er(this.notifyUpdate),Er(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=fi.has(t),i=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&Ae.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s(),a&&a(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in as){const n=as[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ze()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<hx.length;r++){const i=hx[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,a=t[s];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=vL(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Ra(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(rk(i)||Kw(i))?i=parseFloat(i):!xL(i)&&Cr.test(n)&&(i=ek(t,n)),this.setBaseTarget(t,at(i)?i.get():i)),at(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const a=fh(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);a&&(i=a[t])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!at(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Th),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Mk extends bL{constructor(){super(...arguments),this.KeyframeResolver=ok}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;at(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function wL(e){return window.getComputedStyle(e)}class kL extends Mk{constructor(){super(...arguments),this.type="html",this.renderInstance=Sw}readValueFromInstance(t,n){if(fi.has(n)){const r=Ph(n);return r&&r.default||0}else{const r=wL(t),i=(bw(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Ek(t,n)}build(t,n,r){mh(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return vh(t,n,r)}}class SL extends Mk{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ze}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(fi.has(n)){const r=Ph(n);return r&&r.default||0}return n=Ew.has(n)?n:uh(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return _w(t,n,r)}build(t,n,r){gh(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){Cw(t,n,r,i)}mount(t){this.isSVGTag=xh(t.tagName),super.mount(t)}}const EL=(e,t)=>dh(e)?new SL(t):new kL(t,{allowProjection:e!==E.Fragment}),CL=XP({...K5,...hL,...rL,...mL},EL),jc=dP(CL);function TL({status:e}){const t=e==="speaking",n=e==="listening",r=e==="thinking";return c.jsxs("div",{className:`orb-stage ${t?"is-speaking":""} ${n?"is-listening":""} ${r?"is-thinking":""}`,"aria-label":`AI status: ${e}`,children:[c.jsx(jc.div,{className:"orb-ring ring-outer",animate:{rotate:r?360:-18},transition:{duration:r?7:24,repeat:1/0,ease:"linear"}}),c.jsx(jc.div,{className:"orb-ring ring-mid",animate:{rotate:r?-360:24,scale:t?[1,1.04,1]:1},transition:{duration:t?.7:18,repeat:1/0,ease:"linear"}}),c.jsxs("div",{className:"orb-core",children:[c.jsx("div",{className:"orb-grid"}),c.jsx("div",{className:"orb-wave","aria-hidden":"true",children:[10,18,28,16,34,21,12,26,17,32,13,22,10].map((i,s)=>c.jsx(jc.span,{animate:t?{height:[i,i*1.7,i*.65,i]}:n?{height:[i,i*1.35,i]}:{height:i*.65},transition:{duration:.6+s%4*.12,repeat:1/0,delay:s*.025}},s))})]}),c.jsx("span",{className:"orb-dot dot-top"}),c.jsx("span",{className:"orb-dot dot-right"}),c.jsx("span",{className:"orb-dot dot-bottom"}),c.jsx("span",{className:"orb-dot dot-left"})]})}const dr={eliza:{id:"eliza",name:"ELIZA",gender:"Female",accent:"Indian English / Neutral",badge:"Recommended Default",role:"Female AI Assistant",description:"Warm, confident, and friendly for everyday questions & conversational AI.",lang:"en-IN",search:"Female, Conversational, Indian English",elevenlabs_voice_id:"21m00Tcm4TlvDq8ikWAM",rate:1,pitch:1.05,sample:"Hello! I am ELIZA, your conversational AI assistant. How can I help you today?",browserKeywords:["heera","neerja","veena","aditi","india","en-in","samantha","google english (india)"]},arjun:{id:"arjun",name:"ARJUN",gender:"Male",accent:"Indian English",badge:"Secondary Default",role:"Male AI Assistant",description:"Calm, mature, and articulate for technical explanations and coding help.",lang:"en-IN",search:"Male, Conversational, Indian English",elevenlabs_voice_id:"pNInz6obpgDQGcFmaJgB",rate:.96,pitch:.94,sample:"Greetings! I am Arjun. I'm ready to assist you with deep technical analysis and code.",browserKeywords:["ravi","prabhat","india","en-in","david","daniel","google english (india)"]},nova:{id:"nova",name:"NOVA",gender:"Female",accent:"General American",badge:"US Female",role:"American Female Assistant",description:"Clear, energetic, and natural for productivity and international users.",lang:"en-US",search:"Female, American, Conversational",elevenlabs_voice_id:"EXAVITQu4vr4xnSDxMaL",rate:1.02,pitch:1.06,sample:"Hi there! I'm Nova. Let's get things done quickly and smoothly.",browserKeywords:["zira","samantha","ava","jenny","en-us","google us english"]},alex:{id:"alex",name:"ALEX",gender:"Male",accent:"British English",badge:"UK Male",role:"British Male Assistant",description:"Polished, composed, and articulate for narration and professional tasks.",lang:"en-GB",search:"Male, British, Narration",elevenlabs_voice_id:"nPczCjzI2devNBz1zQrb",rate:.95,pitch:.96,sample:"Good day. I am Alex, at your service for research and comprehensive narration.",browserKeywords:["george","oliver","brian","daniel","en-gb","google uk english male"]},kavya:{id:"kavya",name:"KAVYA",gender:"Female",accent:"Hindi",badge:"Hindi Female",role:"Hindi Female Assistant",description:"Expressive, friendly, and natural for Hindi conversations and Indian users.",lang:"hi-IN",search:"Female, Hindi, Conversational",elevenlabs_voice_id:"ThT5KcBeYPX3keUQqHPh",rate:.98,pitch:1.08,sample:"नमस्ते! मैं काव्या हूँ। आपकी भाषा में आपकी सहायता करने के लिए तैयार हूँ।",browserKeywords:["kalpana","heera","swara","hindi","hi-in","google हिन्दी"]},vikram:{id:"vikram",name:"VIKRAM",gender:"Male",accent:"Hindi",badge:"Hindi Male",role:"Hindi Male Assistant",description:"Reassuring, clear, and confident for detailed explanations and voice search.",lang:"hi-IN",search:"Male, Hindi, Conversational",elevenlabs_voice_id:"VR6AewLTigWG4xSOukaG",rate:.95,pitch:.92,sample:"नमस्ते! मैं विक्रम हूँ। किसी भी विषय पर स्पष्ट और सटीक जानकारी के लिए पूछें।",browserKeywords:["hemant","madhav","ravi","hindi","hi-in","google हिन्दी"]},marcus:{id:"marcus",name:"MARCUS",gender:"Male",accent:"General American",badge:"US Male",role:"American Male Assistant",description:"Confident, relaxed, and professional for technical and business explanations.",lang:"en-US",search:"American, Male, Conversational",elevenlabs_voice_id:"ErXwobaYiN019PkySvjV",rate:.98,pitch:.92,sample:"Hey, I'm Marcus. Let's break down whatever you're working on step by step.",browserKeywords:["guy","david","mark","en-us","google us english"]},emma:{id:"emma",name:"EMMA",gender:"Female",accent:"British English",badge:"UK Female",role:"British Female Assistant",description:"Polished, articulate, and composed for professional guidance.",lang:"en-GB",search:"British, Female, Conversational",elevenlabs_voice_id:"MF3mGyEYCl7XYWbV9V6O",rate:.98,pitch:1.06,sample:"Hello. I'm Emma. I'm here to provide articulate, well-structured support.",browserKeywords:["hazel","sonia","libby","en-gb","google uk english female"]}},Rc=[{code:"en-IN",name:"English (India)",native:"English (India)",options:"Indian female / male"},{code:"hi-IN",name:"Hindi",native:"हिन्दी",options:"Female / male"},{code:"te-IN",name:"Telugu",native:"తెలుగు",options:"Female / male"},{code:"ta-IN",name:"Tamil",native:"தமிழ்",options:"Female / male"},{code:"kn-IN",name:"Kannada",native:"ಕನ್ನಡ",options:"Female / male"},{code:"ml-IN",name:"Malayalam",native:"മലയാളം",options:"Female / male"},{code:"bn-IN",name:"Bengali",native:"বাংলা",options:"Female / male"},{code:"mr-IN",name:"Marathi",native:"मराठी",options:"Female / male"},{code:"gu-IN",name:"Gujarati",native:"ગુજરાતી",options:"Female / male"},{code:"pa-IN",name:"Punjabi",native:"ਪੰਜਾਬੀ",options:"Female / male"},{code:"ur-IN",name:"Urdu",native:"اردو",options:"Female / male"},{code:"as-IN",name:"Assamese",native:"অসমীয়া",options:"Female / male"},{code:"or-IN",name:"Odia",native:"ଓଡ଼ିଆ",options:"Female / male"},{code:"sa-IN",name:"Sanskrit",native:"संस्कृतम्",options:"Female / male"},{code:"ks-IN",name:"Kashmiri",native:"कॉशुर / کٲشُر",options:"Female / male"},{code:"kok-IN",name:"Konkani",native:"कोंकणी",options:"Female / male"},{code:"ne-IN",name:"Nepali (India)",native:"नेपाली",options:"Female / male"},{code:"sd-IN",name:"Sindhi",native:"سنڌي / सिन्धी",options:"Female / male"},{code:"mni-IN",name:"Manipuri / Meitei",native:"মৈতৈলোন্",options:"Female / male"},{code:"brx-IN",name:"Bodo",native:"बड़ो",options:"Female / male"},{code:"doi-IN",name:"Dogri",native:"डोगरी",options:"Female / male"},{code:"sat-IN",name:"Santali",native:"ᱥᱟᱱᱛᱟᱲᱤ",options:"Female / male"}];let Yr=null;function Gl(){if(Yr){try{Yr.pause(),Yr.currentTime=0}catch{}Yr=null}if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}}function _L(e,t,n){if(!e||e.length===0)return null;const r=dr[t]||dr.eliza,i=(n||r.lang||"en-IN").toLowerCase(),s=i.split("-")[0],a=e.find(d=>{const f=(d.lang||"").toLowerCase(),p=(d.name||"").toLowerCase(),m=f.includes(i)||f.includes(s),x=r.browserKeywords.some(v=>p.includes(v));return m&&x});if(a)return a;const o=e.find(d=>{const f=(d.name||"").toLowerCase();return r.browserKeywords.some(p=>f.includes(p))});if(o)return o;const l=e.find(d=>(d.lang||"").toLowerCase()===i);if(l)return l;const u=e.find(d=>(d.lang||"").toLowerCase().startsWith(s));return u||e.find(d=>d.default)||e.find(d=>(d.lang||"").toLowerCase().startsWith("en"))||e[0]}async function Fk(e,t,n={}){const{onStart:r,onEnd:i,onError:s}=n;if(Gl(),!e||!e.trim()){i&&i();return}const a=(t.voice_profile||"eliza").toLowerCase(),o=dr[a]||dr.eliza;if((t.voice_engine||"auto")!=="browser")try{const u=await In.tts({text:e,voice_id:o.elevenlabs_voice_id,voice_profile:o.id,voice_lang:t.voice_lang||o.lang});if(u&&u.ok&&u.audioUrl){const d=new Audio(u.audioUrl);Yr=d,d.playbackRate=Math.max(.5,Math.min(2,Number(t.speech_rate||1))),d.onplay=()=>{r&&r()},d.onended=()=>{Yr=null,URL.revokeObjectURL(u.audioUrl),i&&i()},d.onerror=()=>{Yr=null,URL.revokeObjectURL(u.audioUrl),mx(e,t,o,n)},await d.play();return}}catch{}mx(e,t,o,n)}function mx(e,t,n,r={}){const{onStart:i,onEnd:s,onError:a}=r;if(typeof window>"u"||!("speechSynthesis"in window)){s&&s();return}try{window.speechSynthesis.paused&&window.speechSynthesis.resume(),window.speechSynthesis.cancel()}catch{}const o=window.speechSynthesis.getVoices(),l=()=>{const u=window.speechSynthesis.getVoices(),d=new SpeechSynthesisUtterance(e),f=Number(t.speech_rate||1),p=Number(t.speech_pitch||1);d.rate=Math.max(.5,Math.min(2,f*n.rate)),d.pitch=Math.max(.5,Math.min(2,p*n.pitch));let m=null;t.voice_name&&(m=u.find(x=>x.name===t.voice_name)),m||(m=_L(u,n.id,t.voice_lang||n.lang)),m?(d.voice=m,d.lang=m.lang||n.lang||"en-IN"):d.lang=n.lang||"en-IN",d.onstart=()=>{i&&i()},d.onend=()=>{s&&s()},d.onerror=x=>{a&&a(x),s&&s()},setTimeout(()=>{try{window.speechSynthesis.speak(d)}catch{s&&s()}},40)};if(o.length===0){const u=()=>{window.speechSynthesis.onvoiceschanged=null,l()};window.speechSynthesis.onvoiceschanged=u,setTimeout(()=>{window.speechSynthesis.onvoiceschanged===u&&(window.speechSynthesis.onvoiceschanged=null,l())},1e3)}else l()}const AL=[{id:"green",name:"Green",color:"#78f6a8"},{id:"amber",name:"Amber",color:"#ffc16b"},{id:"cyan",name:"Cyan",color:"#7cecff"},{id:"violet",name:"Violet",color:"#c084fc"},{id:"crimson",name:"Crimson",color:"#ff6b6b"},{id:"solar",name:"Solar",color:"#fde047"},{id:"emerald",name:"Emerald",color:"#34d399"},{id:"pink",name:"Pink",color:"#f472b6"},{id:"cobalt",name:"Cobalt",color:"#60a5fa"},{id:"orange",name:"Orange",color:"#fb923c"},{id:"mint",name:"Mint",color:"#6ee7b7"},{id:"rose",name:"Rose",color:"#fb7185"},{id:"ice",name:"Ice",color:"#a5f3fc"},{id:"lime",name:"Lime",color:"#a3e635"},{id:"teal",name:"Teal",color:"#2dd4bf"}],IL=[{id:"aurora",name:"Aurora",grad:"linear-gradient(135deg, #34d399, #7cecff, #c084fc)"},{id:"cyberpunk",name:"Cyberpunk",grad:"linear-gradient(135deg, #f472b6, #fb923c, #fde047)"},{id:"nebula",name:"Nebula",grad:"linear-gradient(135deg, #c084fc, #818cf8, #60a5fa)"},{id:"sunset",name:"Sunset",grad:"linear-gradient(135deg, #ff6b6b, #fb923c, #fde047)"},{id:"toxic",name:"Toxic",grad:"linear-gradient(135deg, #a3e635, #2dd4bf, #7cecff)"}];function NL({open:e,onClose:t,providers:n,settings:r,onChange:i}){var g;const s=n.filter(h=>h.available),a=r.default_provider==="auto"?s[0]:n.find(h=>h.id===r.default_provider),o=(a==null?void 0:a.models)||[],[l,u]=E.useState([]),[d,f]=E.useState(null);E.useEffect(()=>{var y,w;if(typeof window>"u"||!("speechSynthesis"in window))return;const h=()=>u(window.speechSynthesis.getVoices());return h(),(w=(y=window.speechSynthesis).addEventListener)==null||w.call(y,"voiceschanged",h),()=>{var C,b;return(b=(C=window.speechSynthesis).removeEventListener)==null?void 0:b.call(C,"voiceschanged",h)}},[]);const p=(h,y)=>{if(y&&y.stopPropagation&&y.stopPropagation(),d===h){Gl(),f(null);return}Gl();const w=dr[h]||dr.eliza;f(h),Fk(w.sample,{...r,voice_profile:w.id},{onEnd:()=>f(null),onError:()=>f(null)})},m=()=>{const h=r.voice_profile||"eliza";p(h)},x=h=>{const y=h==="auto"?s[0]:n.find(w=>w.id===h);i({default_provider:h,default_model:(y==null?void 0:y.default_model)||""})},v=(a==null?void 0:a.name)||(r.default_provider==="auto"?"Automatic Routing":r.default_provider),k=r.default_model||(a==null?void 0:a.default_model)||"None configured";return e?c.jsx("div",{className:"drawer-backdrop",onMouseDown:h=>h.target===h.currentTarget&&t(),children:c.jsxs("aside",{className:"settings-drawer",role:"dialog","aria-label":"Settings",children:[c.jsxs("header",{className:"drawer-header",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"SYSTEM CONFIGURATION"}),c.jsx("h2",{children:"Settings"})]}),c.jsx("button",{className:"icon-button",onClick:t,"aria-label":"Close settings",children:c.jsx(It,{size:18})})]}),c.jsxs("section",{className:"settings-section",children:[c.jsxs("div",{className:"section-heading",children:[c.jsx(i_,{size:16}),c.jsx("h3",{children:"AI Model"})]}),c.jsxs("div",{className:"active-model-card",children:[c.jsx("span",{className:"card-title",children:"Connected Backend AI Model"}),c.jsxs("span",{className:"card-value",children:[c.jsx("span",{className:`status-dot ${s.length?"online":""}`}),c.jsx("b",{children:k}),c.jsxs("small",{style:{color:"#7a9582",marginLeft:"auto",fontSize:"10px"},children:["via ",v]})]})]}),c.jsx("label",{className:"field-label",htmlFor:"provider",children:"Provider"}),c.jsxs("select",{id:"provider",value:r.default_provider||"auto",onChange:h=>x(h.target.value),children:[c.jsx("option",{value:"auto",children:"Automatic routing (prioritizes active credentials)"}),n.map(h=>c.jsxs("option",{value:h.id,disabled:!h.available,children:[h.name,h.available?` (${h.default_model||"Connected"})`:" — not configured"]},h.id))]}),c.jsxs("label",{className:"field-label",htmlFor:"model-select",children:["Model Selection ",o.length>0?`(${o.length} models available)`:""]}),o.length>0?c.jsx("select",{id:"model-select",value:r.default_model||(a==null?void 0:a.default_model)||o[0]||"",onChange:h=>i({default_model:h.target.value}),children:o.map(h=>c.jsx("option",{value:h,children:h},h))}):c.jsx("input",{id:"model",value:r.default_model||"",onChange:h=>i({default_model:h.target.value}),placeholder:(a==null?void 0:a.default_model)||((g=s[0])==null?void 0:g.default_model)||"Model identifier"}),c.jsx("p",{className:"field-help",children:"Backend is connected to active providers. Keys and credentials are securely managed on the server."})]}),c.jsxs("section",{className:"settings-section",children:[c.jsxs("div",{className:"section-heading",children:[c.jsx(Zb,{size:16}),c.jsx("h3",{children:"Voice Library & Synthesis"})]}),c.jsxs("label",{className:"toggle-row",children:[c.jsxs("span",{children:[c.jsx("b",{children:"Speak responses"}),c.jsx("small",{children:"Read the assistant's answer aloud with natural speech"})]}),c.jsx("input",{type:"checkbox",checked:r.auto_speak!==!1,onChange:h=>i({auto_speak:h.target.checked})})]}),c.jsx("label",{className:"field-label",htmlFor:"voice-engine",children:"Voice Synthesis Engine"}),c.jsxs("select",{id:"voice-engine",value:r.voice_engine||"auto",onChange:h=>i({voice_engine:h.target.value}),children:[c.jsx("option",{value:"auto",children:"ElevenLabs Neural Voice + Device Fallback (Recommended)"}),c.jsx("option",{value:"elevenlabs",children:"ElevenLabs Neural Voice Only"}),c.jsx("option",{value:"browser",children:"Device Web Speech API Only"})]}),c.jsx("p",{className:"field-help",children:"ElevenLabs provides natural, studio-quality AI voices. If unavailable or offline, the app automatically falls back to your device's browser speech engine."}),c.jsxs("label",{className:"field-label",style:{marginTop:"14px"},children:["Assistant Voice Profile (",Object.keys(dr).length," curated personas)"]}),c.jsx("div",{className:"voice-profiles-grid",children:Object.values(dr).map(h=>{const y=(r.voice_profile||"eliza").toLowerCase()===h.id,w=d===h.id;return c.jsxs("div",{className:`voice-profile-card ${y?"active":""}`,onClick:()=>i({voice_profile:h.id}),children:[c.jsxs("div",{className:"voice-card-header",children:[c.jsxs("div",{className:"voice-card-title",children:[y?c.jsx(zp,{size:14,color:"var(--accent)"}):c.jsx(Ko,{size:14}),c.jsx("span",{children:h.name}),c.jsxs("small",{style:{color:"#748a7b",fontSize:"10px"},children:["· ",h.gender]})]}),h.badge&&c.jsx("span",{className:"voice-card-badge",children:h.badge})]}),c.jsxs("div",{className:"voice-card-meta",children:[c.jsx("span",{children:h.accent}),c.jsx("span",{children:"•"}),c.jsx("span",{children:h.role})]}),c.jsx("p",{className:"voice-card-desc",children:h.description}),c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"6px"},children:[c.jsxs("small",{style:{fontSize:"9px",color:"#5a7563"},children:["Search: ",h.search]}),c.jsxs("button",{type:"button",className:`voice-preview-btn ${w?"playing":""}`,onClick:C=>p(h.id,C),title:`Preview ${h.name}'s voice`,children:[w?c.jsx(p1,{size:11}):c.jsx(Eg,{size:11}),c.jsx("span",{children:w?"Stop":"Preview"})]})]})]},h.id)})}),c.jsx("label",{className:"field-label",htmlFor:"voice-lang",style:{marginTop:"12px"},children:c.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[c.jsx(s_,{size:13})," Spoken Voice Language (",Rc.length," Indian languages supported)"]})}),c.jsxs("select",{id:"voice-lang",value:r.voice_lang||"en-IN",onChange:h=>i({voice_lang:h.target.value}),children:[c.jsxs("optgroup",{label:"Recommended Defaults & International",children:[c.jsx("option",{value:"en-IN",children:"English (India) · en-IN (Recommended Default)"}),c.jsx("option",{value:"hi-IN",children:"Hindi (हिन्दी) · hi-IN"}),c.jsx("option",{value:"en-US",children:"English (United States) · en-US"}),c.jsx("option",{value:"en-GB",children:"English (United Kingdom) · en-GB"})]}),c.jsx("optgroup",{label:"Major Indian Languages (ElevenLabs & Multilingual)",children:Rc.filter(h=>h.code!=="en-IN"&&h.code!=="hi-IN").map(h=>c.jsxs("option",{value:h.code,children:[h.name," (",h.native,") · ",h.code]},h.code))})]}),c.jsx("label",{className:"field-label",htmlFor:"speech-recognition-lang",style:{marginTop:"14px"},children:c.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[c.jsx(Gd,{size:13,color:"var(--accent)"})," Microphone Recognition Language (STT)"]})}),c.jsxs("select",{id:"speech-recognition-lang",value:r.speech_recognition_lang||"en-IN",onChange:h=>i({speech_recognition_lang:h.target.value}),children:[c.jsxs("optgroup",{label:"Standard Microphones",children:[c.jsx("option",{value:"en-IN",children:"English (India) · en-IN"}),c.jsx("option",{value:"hi-IN",children:"Hindi (हिन्दी) · hi-IN"}),c.jsx("option",{value:"en-US",children:"English (US) · en-US"}),c.jsx("option",{value:"en-GB",children:"English (UK) · en-GB"})]}),c.jsx("optgroup",{label:"All Indian Languages",children:Rc.filter(h=>h.code!=="en-IN"&&h.code!=="hi-IN").map(h=>c.jsxs("option",{value:h.code,children:[h.name," (",h.native,") · ",h.code]},h.code))})]}),c.jsx("p",{className:"field-help",children:"Microphone speech recognition and assistant voice output are configured independently. Selecting an Indian language or English for speech recognition lets you speak in your preferred tongue."}),c.jsx("label",{className:"field-label",htmlFor:"voice",style:{marginTop:"14px"},children:"Device Browser Voice Fallback (optional override)"}),c.jsxs("select",{id:"voice",value:r.voice_name||"",onChange:h=>i({voice_name:h.target.value}),children:[c.jsx("option",{value:"",children:"Auto-match installed voice based on profile"}),l.map(h=>c.jsxs("option",{value:h.name,children:[h.name," [",h.lang,"] ",h.default?" · device default":""]},`${h.name}-${h.lang}`))]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",marginTop:"12px"},children:[c.jsxs("div",{children:[c.jsxs("label",{className:"field-label",htmlFor:"rate",children:["Speed: ",Number(r.speech_rate||1).toFixed(1),"×"]}),c.jsx("input",{id:"rate",type:"range",min:"0.5",max:"2",step:"0.1",value:r.speech_rate||1,onChange:h=>i({speech_rate:Number(h.target.value)})})]}),c.jsxs("div",{children:[c.jsxs("label",{className:"field-label",htmlFor:"pitch",children:["Pitch: ",Number(r.speech_pitch||1).toFixed(1),"×"]}),c.jsx("input",{id:"pitch",type:"range",min:"0.7",max:"1.3",step:"0.05",value:r.speech_pitch||1,onChange:h=>i({speech_pitch:Number(h.target.value)})})]})]}),c.jsxs("button",{className:"text-action",type:"button",onClick:m,style:{marginTop:"10px"},children:[c.jsx(Eg,{size:13})," Test Selected Voice & Speed"]})]}),c.jsxs("section",{className:"settings-section",children:[c.jsxs("div",{className:"section-heading",children:[c.jsx(Wp,{size:16}),c.jsx("h3",{children:"Answer Quality & Persona"})]}),c.jsx("label",{className:"field-label",htmlFor:"response-style",children:"Response Persona / Profile"}),c.jsxs("select",{id:"response-style",value:r.response_style||"balanced",onChange:h=>i({response_style:h.target.value}),children:[c.jsx("option",{value:"balanced",children:"Balanced · Clear, natural & well-structured (Recommended)"}),c.jsx("option",{value:"concise",children:"Concise · Direct answer with key takeaways"}),c.jsx("option",{value:"tutor",children:"Patient Tutor · Step-by-step breakdown & analogies"}),c.jsx("option",{value:"expert",children:"Senior Expert · Technical precision & trade-offs"}),c.jsx("option",{value:"coding",children:"Software Engineer · Production code, tests & edge cases"}),c.jsx("option",{value:"creative",children:"Creative · Imaginative, original & expressive"})]}),c.jsxs("label",{className:"toggle-row",children:[c.jsxs("span",{children:[c.jsx("b",{children:"Detailed answers"}),c.jsx("small",{children:"Include comprehensive examples, edge cases, and summaries"})]}),c.jsx("input",{type:"checkbox",checked:r.detailed_responses===!0,onChange:h=>i({detailed_responses:h.target.checked})})]}),c.jsx("label",{className:"field-label",htmlFor:"custom-prompt",children:"Additional instructions (optional)"}),c.jsx("textarea",{id:"custom-prompt",rows:4,maxLength:4e3,value:r.custom_system_prompt||"",onChange:h=>i({custom_system_prompt:h.target.value}),placeholder:"Example: Explain technical concepts in simple English, include practical code examples, and outline clear next steps."}),c.jsx("p",{className:"field-help",children:"These instructions are sent with each chat request. Keep them focused on your preferred style and task; do not put API keys or private credentials here."})]}),c.jsxs("section",{className:"settings-section",children:[c.jsxs("div",{className:"section-heading",children:[c.jsx(u_,{size:16}),c.jsx("h3",{children:"Appearance & Themes"})]}),c.jsx("div",{className:"theme-category-label",children:"15 Solid Colors"}),c.jsx("div",{className:"theme-swatches-grid",children:AL.map(h=>c.jsxs("button",{type:"button",className:`theme-swatch ${r.theme===h.id?"active":""}`,onClick:()=>i({theme:h.id}),title:h.name,children:[c.jsx("span",{className:"swatch-color-pill",style:{backgroundColor:h.color}}),c.jsx("span",{className:"swatch-name",children:h.name})]},h.id))}),c.jsx("div",{className:"theme-category-label",children:"5 Gradient Mixed Themes"}),c.jsx("div",{className:"theme-swatches-grid",style:{gridTemplateColumns:"repeat(5, 1fr)"},children:IL.map(h=>c.jsxs("button",{type:"button",className:`theme-swatch ${r.theme===h.id?"active":""}`,onClick:()=>i({theme:h.id}),title:h.name,children:[c.jsx("span",{className:"swatch-color-pill",style:{background:h.grad}}),c.jsx("span",{className:"swatch-name",children:h.name})]},h.id))})]}),c.jsxs("div",{className:"dev-credit-card",children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(p_,{size:12,color:"var(--accent)"}),c.jsxs("span",{children:["Developed by ",c.jsx("strong",{children:"Akhil Thadaka"})]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginTop:"2px"},children:[c.jsx(Ea,{size:12,color:"var(--accent)"}),c.jsxs("span",{children:["Contact: ",c.jsx("a",{href:"tel:9121751697",children:"9121751697"})]})]})]}),c.jsxs("footer",{className:"drawer-footer",children:[c.jsx(f_,{size:14}),c.jsx("span",{children:"Settings save automatically for this running session."})]})]})}):null}function PL(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const jL=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,RL=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,LL={};function gx(e,t){return(LL.jsx?RL:jL).test(e)}const DL=/[ \t\n\f\r]/g;function ML(e){return typeof e=="object"?e.type==="text"?yx(e.value):!1:yx(e)}function yx(e){return e.replace(DL,"")===""}class eo{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}eo.prototype.normal={};eo.prototype.property={};eo.prototype.space=void 0;function Ok(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new eo(n,r,t)}function bf(e){return e.toLowerCase()}class kt{constructor(t,n){this.attribute=n,this.property=t}}kt.prototype.attribute="";kt.prototype.booleanish=!1;kt.prototype.boolean=!1;kt.prototype.commaOrSpaceSeparated=!1;kt.prototype.commaSeparated=!1;kt.prototype.defined=!1;kt.prototype.mustUseProperty=!1;kt.prototype.number=!1;kt.prototype.overloadedBoolean=!1;kt.prototype.property="";kt.prototype.spaceSeparated=!1;kt.prototype.space=void 0;let FL=0;const ne=pi(),Be=pi(),wf=pi(),O=pi(),be=pi(),ti=pi(),Tt=pi();function pi(){return 2**++FL}const kf=Object.freeze(Object.defineProperty({__proto__:null,boolean:ne,booleanish:Be,commaOrSpaceSeparated:Tt,commaSeparated:ti,number:O,overloadedBoolean:wf,spaceSeparated:be},Symbol.toStringTag,{value:"Module"})),Lc=Object.keys(kf);class Mh extends kt{constructor(t,n,r,i){let s=-1;if(super(t,n),xx(this,"space",i),typeof r=="number")for(;++s<Lc.length;){const a=Lc[s];xx(this,Lc[s],(r&kf[a])===kf[a])}}}Mh.prototype.defined=!0;function xx(e,t,n){n&&(e[t]=n)}function xs(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const s=new Mh(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),t[r]=s,n[bf(r)]=r,n[bf(s.attribute)]=r}return new eo(t,n,e.space)}const zk=xs({properties:{ariaActiveDescendant:null,ariaAtomic:Be,ariaAutoComplete:null,ariaBusy:Be,ariaChecked:Be,ariaColCount:O,ariaColIndex:O,ariaColSpan:O,ariaControls:be,ariaCurrent:null,ariaDescribedBy:be,ariaDetails:null,ariaDisabled:Be,ariaDropEffect:be,ariaErrorMessage:null,ariaExpanded:Be,ariaFlowTo:be,ariaGrabbed:Be,ariaHasPopup:null,ariaHidden:Be,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:be,ariaLevel:O,ariaLive:null,ariaModal:Be,ariaMultiLine:Be,ariaMultiSelectable:Be,ariaOrientation:null,ariaOwns:be,ariaPlaceholder:null,ariaPosInSet:O,ariaPressed:Be,ariaReadOnly:Be,ariaRelevant:null,ariaRequired:Be,ariaRoleDescription:be,ariaRowCount:O,ariaRowIndex:O,ariaRowSpan:O,ariaSelected:Be,ariaSetSize:O,ariaSort:null,ariaValueMax:O,ariaValueMin:O,ariaValueNow:O,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Uk(e,t){return t in e?e[t]:t}function Bk(e,t){return Uk(e,t.toLowerCase())}const OL=xs({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ti,acceptCharset:be,accessKey:be,action:null,allow:null,allowFullScreen:ne,allowPaymentRequest:ne,allowUserMedia:ne,alpha:ne,alt:null,as:null,async:ne,autoCapitalize:null,autoComplete:be,autoFocus:ne,autoPlay:ne,blocking:be,capture:null,charSet:null,checked:ne,cite:null,className:be,closedBy:null,colorSpace:null,cols:O,colSpan:O,command:null,commandFor:null,content:null,contentEditable:Be,controls:ne,controlsList:be,coords:O|ti,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ne,defer:ne,dir:null,dirName:null,disabled:ne,download:wf,draggable:Be,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ne,formTarget:null,headers:be,height:O,hidden:wf,high:O,href:null,hrefLang:null,htmlFor:be,httpEquiv:be,id:null,imageSizes:null,imageSrcSet:null,inert:ne,inputMode:null,integrity:null,is:null,isMap:ne,itemId:null,itemProp:be,itemRef:be,itemScope:ne,itemType:be,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ne,low:O,manifest:null,max:null,maxLength:O,media:null,method:null,min:null,minLength:O,multiple:ne,muted:ne,name:null,nonce:null,noModule:ne,noValidate:ne,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ne,optimum:O,pattern:null,ping:be,placeholder:null,playsInline:ne,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ne,referrerPolicy:null,rel:be,required:ne,reversed:ne,rows:O,rowSpan:O,sandbox:be,scope:null,scoped:ne,seamless:ne,selected:ne,shadowRootClonable:ne,shadowRootCustomElementRegistry:ne,shadowRootDelegatesFocus:ne,shadowRootMode:null,shadowRootSerializable:ne,shape:null,size:O,sizes:null,slot:null,span:O,spellCheck:Be,src:null,srcDoc:null,srcLang:null,srcSet:null,start:O,step:null,style:null,tabIndex:O,target:null,title:null,translate:null,type:null,typeMustMatch:ne,useMap:null,value:Be,width:O,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:be,axis:null,background:null,bgColor:null,border:O,borderColor:null,bottomMargin:O,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ne,declare:ne,event:null,face:null,frame:null,frameBorder:null,hSpace:O,leftMargin:O,link:null,longDesc:null,lowSrc:null,marginHeight:O,marginWidth:O,noResize:ne,noHref:ne,noShade:ne,noWrap:ne,object:null,profile:null,prompt:null,rev:null,rightMargin:O,rules:null,scheme:null,scrolling:Be,standby:null,summary:null,text:null,topMargin:O,valueType:null,version:null,vAlign:null,vLink:null,vSpace:O,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:ne,disablePictureInPicture:ne,disableRemotePlayback:ne,exportParts:ti,part:be,prefix:null,property:null,results:O,security:null,unselectable:null},space:"html",transform:Bk}),zL=xs({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Tt,accentHeight:O,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:O,amplitude:O,arabicForm:null,ascent:O,attributeName:null,attributeType:null,azimuth:O,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:O,by:null,calcMode:null,capHeight:O,className:be,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:O,diffuseConstant:O,direction:null,display:null,dur:null,divisor:O,dominantBaseline:null,download:ne,dx:null,dy:null,edgeMode:null,editable:null,elevation:O,enableBackground:null,end:null,event:null,exponent:O,externalResourcesRequired:null,fill:null,fillOpacity:O,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ti,g2:ti,glyphName:ti,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:O,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:O,horizOriginX:O,horizOriginY:O,id:null,ideographic:O,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:O,k:O,k1:O,k2:O,k3:O,k4:O,kernelMatrix:Tt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:O,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:O,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:O,overlineThickness:O,paintOrder:null,panose1:null,path:null,pathLength:O,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:be,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:O,pointsAtY:O,pointsAtZ:O,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Tt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Tt,rev:Tt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Tt,requiredFeatures:Tt,requiredFonts:Tt,requiredFormats:Tt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:O,specularExponent:O,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:O,strikethroughThickness:O,string:null,stroke:null,strokeDashArray:Tt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:O,strokeOpacity:O,strokeWidth:null,style:null,surfaceScale:O,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Tt,tabIndex:O,tableValues:null,target:null,targetX:O,targetY:O,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Tt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:O,underlineThickness:O,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:O,values:null,vAlphabetic:O,vMathematical:O,vectorEffect:null,vHanging:O,vIdeographic:O,version:null,vertAdvY:O,vertOriginX:O,vertOriginY:O,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:O,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Uk}),Vk=xs({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),$k=xs({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Bk}),Hk=xs({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),UL={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},BL=/[A-Z]/g,vx=/-[a-z]/g,VL=/^data[-\w.:]+$/i;function $L(e,t){const n=bf(t);let r=t,i=kt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&VL.test(t)){if(t.charAt(4)==="-"){const s=t.slice(5).replace(vx,WL);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=t.slice(4);if(!vx.test(s)){let a=s.replace(BL,HL);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=Mh}return new i(r,t)}function HL(e){return"-"+e.toLowerCase()}function WL(e){return e.charAt(1).toUpperCase()}const GL=Ok([zk,OL,Vk,$k,Hk],"html"),Fh=Ok([zk,zL,Vk,$k,Hk],"svg");function qL(e){return e.join(" ").trim()}var Oh={},bx=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,KL=/\n/g,YL=/^\s*/,XL=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,QL=/^:\s*/,ZL=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,JL=/^[;\s]*/,eD=/^\s+|\s+$/g,tD=`
`,wx="/",kx="*",$r="",nD="comment",rD="declaration";function iD(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(x){var v=x.match(KL);v&&(n+=v.length);var k=x.lastIndexOf(tD);r=~k?x.length-k:r+x.length}function s(){var x={line:n,column:r};return function(v){return v.position=new a(x),u(),v}}function a(x){this.start=x,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function o(x){var v=new Error(t.source+":"+n+":"+r+": "+x);if(v.reason=x,v.filename=t.source,v.line=n,v.column=r,v.source=e,!t.silent)throw v}function l(x){var v=x.exec(e);if(v){var k=v[0];return i(k),e=e.slice(k.length),v}}function u(){l(YL)}function d(x){var v;for(x=x||[];v=f();)v!==!1&&x.push(v);return x}function f(){var x=s();if(!(wx!=e.charAt(0)||kx!=e.charAt(1))){for(var v=2;$r!=e.charAt(v)&&(kx!=e.charAt(v)||wx!=e.charAt(v+1));)++v;if(v+=2,$r===e.charAt(v-1))return o("End of comment missing");var k=e.slice(2,v-2);return r+=2,i(k),e=e.slice(v),r+=2,x({type:nD,comment:k})}}function p(){var x=s(),v=l(XL);if(v){if(f(),!l(QL))return o("property missing ':'");var k=l(ZL),g=x({type:rD,property:Sx(v[0].replace(bx,$r)),value:k?Sx(k[0].replace(bx,$r)):$r});return l(JL),g}}function m(){var x=[];d(x);for(var v;v=p();)v!==!1&&(x.push(v),d(x));return x}return u(),m()}function Sx(e){return e?e.replace(eD,$r):$r}var sD=iD,aD=Wi&&Wi.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Oh,"__esModule",{value:!0});Oh.default=lD;const oD=aD(sD);function lD(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,oD.default)(e),i=typeof t=="function";return r.forEach(s=>{if(s.type!=="declaration")return;const{property:a,value:o}=s;i?t(a,o,s):o&&(n=n||{},n[a]=o)}),n}var Iu={};Object.defineProperty(Iu,"__esModule",{value:!0});Iu.camelCase=void 0;var uD=/^--[a-zA-Z0-9_-]+$/,cD=/-([a-z])/g,dD=/^[^-]+$/,fD=/^-(webkit|moz|ms|o|khtml)-/,pD=/^-(ms)-/,hD=function(e){return!e||dD.test(e)||uD.test(e)},mD=function(e,t){return t.toUpperCase()},Ex=function(e,t){return"".concat(t,"-")},gD=function(e,t){return t===void 0&&(t={}),hD(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(pD,Ex):e=e.replace(fD,Ex),e.replace(cD,mD))};Iu.camelCase=gD;var yD=Wi&&Wi.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},xD=yD(Oh),vD=Iu;function Sf(e,t){var n={};return!e||typeof e!="string"||(0,xD.default)(e,function(r,i){r&&i&&(n[(0,vD.camelCase)(r,t)]=i)}),n}Sf.default=Sf;var bD=Sf;const wD=Zl(bD),Wk=Gk("end"),zh=Gk("start");function Gk(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function kD(e){const t=zh(e),n=Wk(e);if(t&&n)return{start:t,end:n}}function na(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Cx(e.position):"start"in e||"end"in e?Cx(e):"line"in e||"column"in e?Ef(e):""}function Ef(e){return Tx(e&&e.line)+":"+Tx(e&&e.column)}function Cx(e){return Ef(e&&e.start)+"-"+Ef(e&&e.end)}function Tx(e){return e&&typeof e=="number"?e:1}class ut extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",s={},a=!1;if(n&&("line"in n&&"column"in n?s={place:n}:"start"in n&&"end"in n?s={place:n}:"type"in n?s={ancestors:[n],place:n.position}:s={...n}),typeof t=="string"?i=t:!s.cause&&t&&(a=!0,i=t.message,s.cause=t),!s.ruleId&&!s.source&&typeof r=="string"){const l=r.indexOf(":");l===-1?s.ruleId=r:(s.source=r.slice(0,l),s.ruleId=r.slice(l+1))}if(!s.place&&s.ancestors&&s.ancestors){const l=s.ancestors[s.ancestors.length-1];l&&(s.place=l.position)}const o=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=o?o.line:void 0,this.name=na(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=a&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}ut.prototype.file="";ut.prototype.name="";ut.prototype.reason="";ut.prototype.message="";ut.prototype.stack="";ut.prototype.column=void 0;ut.prototype.line=void 0;ut.prototype.ancestors=void 0;ut.prototype.cause=void 0;ut.prototype.fatal=void 0;ut.prototype.place=void 0;ut.prototype.ruleId=void 0;ut.prototype.source=void 0;const Uh={}.hasOwnProperty,SD=new Map,ED=/[A-Z]/g,CD=new Set(["table","tbody","thead","tfoot","tr"]),TD=new Set(["td","th"]),qk="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function _D(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=DD(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=LD(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Fh:GL,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},s=Kk(i,e,void 0);return s&&typeof s!="string"?s:i.create(e,i.Fragment,{children:s||void 0},void 0)}function Kk(e,t,n){if(t.type==="element")return AD(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return ID(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return PD(e,t,n);if(t.type==="mdxjsEsm")return ND(e,t);if(t.type==="root")return jD(e,t,n);if(t.type==="text")return RD(e,t)}function AD(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Fh,e.schema=i),e.ancestors.push(t);const s=Xk(e,t.tagName,!1),a=MD(e,t);let o=Vh(e,t);return CD.has(t.tagName)&&(o=o.filter(function(l){return typeof l=="string"?!ML(l):!0})),Yk(e,a,s,t),Bh(a,o),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function ID(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Ma(e,t.position)}function ND(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Ma(e,t.position)}function PD(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Fh,e.schema=i),e.ancestors.push(t);const s=t.name===null?e.Fragment:Xk(e,t.name,!0),a=FD(e,t),o=Vh(e,t);return Yk(e,a,s,t),Bh(a,o),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function jD(e,t,n){const r={};return Bh(r,Vh(e,t)),e.create(t,e.Fragment,r,n)}function RD(e,t){return t.value}function Yk(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Bh(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function LD(e,t,n){return r;function r(i,s,a,o){const u=Array.isArray(a.children)?n:t;return o?u(s,a,o):u(s,a)}}function DD(e,t){return n;function n(r,i,s,a){const o=Array.isArray(s.children),l=zh(r);return t(i,s,a,o,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}function MD(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Uh.call(t.properties,i)){const s=OD(e,i,t.properties[i]);if(s){const[a,o]=s;e.tableCellAlignToStyle&&a==="align"&&typeof o=="string"&&TD.has(t.tagName)?r=o:n[a]=o}}if(r){const s=n.style||(n.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function FD(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const s=r.data.estree.body[0];s.type;const a=s.expression;a.type;const o=a.properties[0];o.type,Object.assign(n,e.evaluater.evaluateExpression(o.argument))}else Ma(e,t.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const o=r.value.data.estree.body[0];o.type,s=e.evaluater.evaluateExpression(o.expression)}else Ma(e,t.position);else s=r.value===null?!0:r.value;n[i]=s}return n}function Vh(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:SD;for(;++r<t.children.length;){const s=t.children[r];let a;if(e.passKeys){const l=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(l){const u=i.get(l)||0;a=l+"-"+u,i.set(l,u+1)}}const o=Kk(e,s,a);o!==void 0&&n.push(o)}return n}function OD(e,t,n){const r=$L(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?PL(n):qL(n)),r.property==="style"){let i=typeof n=="object"?n:zD(e,String(n));return e.stylePropertyNameCase==="css"&&(i=UD(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?UL[r.property]||r.property:r.attribute,n]}}function zD(e,t){try{return wD(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new ut("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=qk+"#cannot-parse-style-attribute",i}}function Xk(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let s=-1,a;for(;++s<i.length;){const o=gx(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};a=a?{type:"MemberExpression",object:a,property:o,computed:!!(s&&o.type==="Literal"),optional:!1}:o}r=a}else r=gx(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Uh.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Ma(e)}function Ma(e,t){const n=new ut("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=qk+"#cannot-handle-mdx-estrees-without-createevaluater",n}function UD(e){const t={};let n;for(n in e)Uh.call(e,n)&&(t[BD(n)]=e[n]);return t}function BD(e){let t=e.replace(ED,VD);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function VD(e){return"-"+e.toLowerCase()}const Dc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},$D={};function $h(e,t){const n=$D,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Qk(e,r,i)}function Qk(e,t,n){if(HD(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return _x(e.children,t,n)}return Array.isArray(e)?_x(e,t,n):""}function _x(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Qk(e[i],t,n);return r.join("")}function HD(e){return!!(e&&typeof e=="object")}const Ax=document.createElement("i");function Hh(e){const t="&"+e+";";Ax.innerHTML=t;const n=Ax.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function on(e,t,n,r){const i=e.length;let s=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);s<r.length;)a=r.slice(s,s+1e4),a.unshift(t,0),e.splice(...a),s+=1e4,t+=1e4}function Bt(e,t){return e.length>0?(on(e,e.length,0,t),e):t}const Ix={}.hasOwnProperty;function Zk(e){const t={};let n=-1;for(;++n<e.length;)WD(t,e[n]);return t}function WD(e,t){let n;for(n in t){const i=(Ix.call(e,n)?e[n]:void 0)||(e[n]={}),s=t[n];let a;if(s)for(a in s){Ix.call(i,a)||(i[a]=[]);const o=s[a];GD(i[a],Array.isArray(o)?o:o?[o]:[])}}}function GD(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);on(e,0,0,r)}function Jk(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function ln(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const dt=Pr(/[A-Za-z]/),ot=Pr(/[\dA-Za-z]/),qD=Pr(/[#-'*+\--9=?A-Z^-~]/);function ql(e){return e!==null&&(e<32||e===127)}const Cf=Pr(/\d/),KD=Pr(/[\dA-Fa-f]/),YD=Pr(/[!-/:-@[-`{-~]/);function Z(e){return e!==null&&e<-2}function ke(e){return e!==null&&(e<0||e===32)}function oe(e){return e===-2||e===-1||e===32}const Nu=Pr(new RegExp("\\p{P}|\\p{S}","u")),ui=Pr(/\s/);function Pr(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function vs(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const s=e.charCodeAt(n);let a="";if(s===37&&ot(e.charCodeAt(n+1))&&ot(e.charCodeAt(n+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(a=String.fromCharCode(s));else if(s>55295&&s<57344){const o=e.charCodeAt(n+1);s<56320&&o>56319&&o<57344?(a=String.fromCharCode(s,o),i=1):a="�"}else a=String.fromCharCode(s);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function ye(e,t,n,r){const i=r?r-1:1/0;let s=0;return a;function a(l){return oe(l)?(e.enter(n),o(l)):t(l)}function o(l){return oe(l)&&s++<i?(e.consume(l),o):(e.exit(n),t(l))}}function e2(e,t,n,r,i,s){let a=0;return o;function o(d){return oe(d)?(e.enter(r),l(d)):u(d)}function l(d){return oe(d)&&a<s?(e.consume(d),a++,l):(e.exit(r),u(d))}function u(d){return a>=i?t(d):n(d)}}const XD={tokenize:QD};function QD(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),ye(e,t,"linePrefix")}function i(o){return e.enter("paragraph"),s(o)}function s(o){const l=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,a(o)}function a(o){if(o===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(o);return}return Z(o)?(e.consume(o),e.exit("chunkText"),s):(e.consume(o),a)}}let Kl=class{constructor(){this.index=new Map,this.map=[]}add(t,n,r){Nx(this,t,n,r,!1)}addBefore(t,n,r){Nx(this,t,n,r,!0)}consume(t){if(this.map.sort(function(s,a){return s[0]-a[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(const s of i)t.push(s);i=r.pop()}this.map.length=0,this.index.clear()}};function Nx(e,t,n,r,i){if(n===0&&r.length===0)return;const s=e.index.get(t);if(s){s[1]+=n,i?(r.push(...s[2]),s[2]=r):s[2].push(...r);return}const a=[t,n,r];e.map.push(a),e.index.set(t,a)}const ZD={tokenize:JD},Px={tokenize:e3};function JD(e){const t=this,n=[];let r=0,i,s,a;return o;function o(y){if(r<n.length){const w=n[r];return t.containerState=w[1],e.attempt(w[0].continuation,l,u)(y)}return u(y)}function l(y){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&h();const w=t.events.length;let C=w,b;for(;C--;)if(t.events[C][0]==="exit"&&t.events[C][1].type==="chunkFlow"){b=t.events[C][1].end;break}g(r);let I=w;for(;I<t.events.length;)t.events[I][1].end={...b},I++;const N=new Kl;return N.add(C+1,0,t.events.slice(w)),N.add(w,I-w,[]),N.consume(t.events),u(y)}return o(y)}function u(y){if(r===n.length){if(!i)return p(y);if(i.currentConstruct&&i.currentConstruct.concrete)return x(y);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Px,d,f)(y)}function d(y){return i&&h(),g(r),p(y)}function f(y){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,x(y)}function p(y){return t.containerState={},e.attempt(Px,m,x)(y)}function m(y){return r++,n.push([t.currentConstruct,t.containerState]),p(y)}function x(y){if(y===null){i&&h(),g(0),e.consume(y);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),v(y)}function v(y){if(y===null){k(e.exit("chunkFlow"),!0),g(0),e.consume(y);return}return Z(y)?(e.consume(y),k(e.exit("chunkFlow")),r=0,t.interrupt=void 0,o):(e.consume(y),v)}function k(y,w){const C=t.sliceStream(y);if(w&&C.push(null),y.previous=s,s&&(s.next=y),s=y,i.defineSkip(y.start),i.write(C),t.parser.lazy[y.start.line]){let b=i.events.length;for(;b--;)if(i.events[b][1].start.offset<a&&(!i.events[b][1].end||i.events[b][1].end.offset>a))return;const I=t.events.length;let N=I,R,_;for(;N--;)if(t.events[N][0]==="exit"&&t.events[N][1].type==="chunkFlow"){if(R){_=t.events[N][1].end;break}R=!0}for(g(r),b=I;b<t.events.length;)t.events[b][1].end={..._},b++;const j=new Kl;j.add(N+1,0,t.events.slice(I)),j.add(I,b-I,[]),j.consume(t.events)}}function g(y){let w=n.length;for(;w-- >y;){const C=n[w];t.containerState=C[1],C[0].exit.call(t,e)}n.length=y}function h(){i.write([null]),s=void 0,i=void 0,t.containerState._closeFlow=void 0}}function e3(e,t,n){return ye(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Yl(e){if(e===null||ke(e)||ui(e))return 1;if(Nu(e))return 2}function Pu(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const s=e[i].resolveAll;s&&!r.includes(s)&&(t=s(t,n),r.push(s))}return t}const Tf={name:"attention",resolveAll:t3,tokenize:n3};function t3(e,t){let n=-1,r;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){let i=n;for(;i--;)if(e[i][0]==="exit"&&e[i][1].type==="attentionSequence"&&e[i][1]._open&&t.sliceSerialize(e[i][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[i][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;const s=e[i][1].end.offset-e[i][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1,a={...e[i][1].end},o={...e[n][1].start};jx(a,-s),jx(o,s);const l={type:s>1?"strongSequence":"emphasisSequence",start:a,end:{...e[i][1].end}},u={type:s>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:o},d={type:s>1?"strongText":"emphasisText",start:{...e[i][1].end},end:{...e[n][1].start}},f={type:s>1?"strong":"emphasis",start:{...l.start},end:{...u.end}};e[i][1].end={...l.start},e[n][1].start={...u.end},r=[],e[i][1].end.offset-e[i][1].start.offset&&(r=Bt(r,[["enter",e[i][1],t],["exit",e[i][1],t]])),r=Bt(r,[["enter",f,t],["enter",l,t],["exit",l,t],["enter",d,t]]),r=Bt(r,Pu(t.parser.constructs.insideSpan.null,e.slice(i+1,n),t)),r=Bt(r,[["exit",d,t],["enter",u,t],["exit",u,t],["exit",f,t]]);let p=0;e[n][1].end.offset-e[n][1].start.offset&&(p=2,r=Bt(r,[["enter",e[n][1],t],["exit",e[n][1],t]])),on(e,i-1,n-i+3,r),n=i+r.length-p-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function n3(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Yl(r);let s;return a;function a(l){return s=l,e.enter("attentionSequence"),o(l)}function o(l){if(l===s)return e.consume(l),o;const u=e.exit("attentionSequence"),d=Yl(l),f=!d||d===2&&i||n.includes(l)&&l!==42&&l!==95,p=!i||i===2&&d||n.includes(r)&&r!==42&&r!==95;return u._open=!!(s===42?f:f&&(i||!p)),u._close=!!(s===42?p:p&&(d||!f)),t(l)}}function jx(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const r3={name:"autolink",tokenize:i3};function i3(e,t,n){let r=0;return i;function i(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(m){return dt(m)?(e.consume(m),a):m===64?n(m):u(m)}function a(m){return m===43||m===45||m===46||ot(m)?(r=1,o(m)):u(m)}function o(m){return m===58?(e.consume(m),r=0,l):(m===43||m===45||m===46||ot(m))&&r++<32?(e.consume(m),o):(r=0,u(m))}function l(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):m===null||m===32||m===60||ql(m)?n(m):(e.consume(m),l)}function u(m){return m===64?(e.consume(m),d):qD(m)?(e.consume(m),u):n(m)}function d(m){return ot(m)?f(m):n(m)}function f(m){return m===46?(e.consume(m),r=0,d):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):p(m)}function p(m){if((m===45||ot(m))&&r++<63){const x=m===45?p:f;return e.consume(m),x}return n(m)}}const to={partial:!0,tokenize:s3};function s3(e,t,n){return r;function r(s){return oe(s)?ye(e,i,"linePrefix")(s):i(s)}function i(s){return s===null||Z(s)?t(s):n(s)}}const t2={continuation:{tokenize:o3},exit:l3,name:"blockQuote",tokenize:a3};function a3(e,t,n){const r=this;return i;function i(a){if(a===62){const o=r.containerState;return o.open||(e.enter("blockQuote",{_container:!0}),o.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),s}return n(a)}function s(a){return oe(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function o3(e,t,n){const r=this;return i;function i(a){return oe(a)?ye(e,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):s(a)}function s(a){return e.attempt(t2,t,n)(a)}}function l3(e){e.exit("blockQuote")}const n2={name:"characterEscape",tokenize:u3};function u3(e,t,n){return r;function r(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),i}function i(s){return YD(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(s)}}const r2={name:"characterReference",tokenize:c3};function c3(e,t,n){const r=this;let i=0,s,a;return o;function o(f){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),l}function l(f){return f===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(f),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),s=31,a=ot,d(f))}function u(f){return f===88||f===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(f),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,a=KD,d):(e.enter("characterReferenceValue"),s=7,a=Cf,d(f))}function d(f){if(f===59&&i){const p=e.exit("characterReferenceValue");return a===ot&&!Hh(r.sliceSerialize(p))?n(f):(e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(f)&&i++<s?(e.consume(f),d):n(f)}}const _f={partial:!0,tokenize:d3};function d3(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const Rx={concrete:!0,name:"codeFenced",tokenize:f3};function f3(e,t,n){const r=this,i={partial:!0,tokenize:C};let s=0,a=0,o;return l;function l(b){return u(b)}function u(b){const I=r.events[r.events.length-1];return s=I&&I[1].type==="linePrefix"?I[2].sliceSerialize(I[1],!0).length:0,o=b,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(b)}function d(b){return b===o?(a++,e.consume(b),d):a<3?n(b):(e.exit("codeFencedFenceSequence"),oe(b)?ye(e,f,"whitespace")(b):f(b))}function f(b){return b===null||Z(b)?(e.exit("codeFencedFence"),r.interrupt?t(b):e.check(_f,v,w)(b)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(b))}function p(b){return b===null||Z(b)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),f(b)):oe(b)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ye(e,m,"whitespace")(b)):b===96&&b===o?n(b):(e.consume(b),p)}function m(b){return b===null||Z(b)?f(b):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),x(b))}function x(b){return b===null||Z(b)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),f(b)):b===96&&b===o?n(b):(e.consume(b),x)}function v(b){return e.attempt(i,w,k)(b)}function k(b){return e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),g}function g(b){return s>0&&oe(b)?ye(e,h,"linePrefix",s+1)(b):h(b)}function h(b){return b===null||Z(b)?e.check(_f,v,w)(b):(e.enter("codeFlowValue"),y(b))}function y(b){return b===null||Z(b)?(e.exit("codeFlowValue"),h(b)):(e.consume(b),y)}function w(b){return e.exit("codeFenced"),t(b)}function C(b,I,N){let R=0;return _;function _(H){return b.enter("lineEnding"),b.consume(H),b.exit("lineEnding"),j}function j(H){return b.enter("codeFencedFence"),oe(H)?ye(b,z,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(H):z(H)}function z(H){return H===o?(b.enter("codeFencedFenceSequence"),G(H)):N(H)}function G(H){return H===o?(R++,b.consume(H),G):R>=a?(b.exit("codeFencedFenceSequence"),oe(H)?ye(b,q,"whitespace")(H):q(H)):N(H)}function q(H){return H===null||Z(H)?(b.exit("codeFencedFence"),I(H)):N(H)}}}const Mc={name:"codeIndented",tokenize:h3},p3={partial:!0,tokenize:m3};function h3(e,t,n){return r;function r(o){return e.enter("codeIndented"),e2(e,i,n,"linePrefix",4,4)(o)}function i(o){return o===null?a(o):Z(o)?e.attempt(p3,i,a)(o):(e.enter("codeFlowValue"),s(o))}function s(o){return o===null||Z(o)?(e.exit("codeFlowValue"),i(o)):(e.consume(o),s)}function a(o){return e.exit("codeIndented"),t(o)}}function m3(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):Z(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):e2(e,t,s,"linePrefix",4,4)(a)}function s(a){return Z(a)?i(a):n(a)}}const g3={name:"codeText",previous:x3,resolve:y3,tokenize:v3};function y3(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function x3(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function v3(e,t,n){let r=0,i,s;return a;function a(f){return e.enter("codeText"),e.enter("codeTextSequence"),o(f)}function o(f){return f===96?(e.consume(f),r++,o):(e.exit("codeTextSequence"),l(f))}function l(f){return f===null?n(f):f===32?(e.enter("space"),e.consume(f),e.exit("space"),l):f===96?(s=e.enter("codeTextSequence"),i=0,d(f)):Z(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),l):(e.enter("codeTextData"),u(f))}function u(f){return f===null||f===32||f===96||Z(f)?(e.exit("codeTextData"),l(f)):(e.consume(f),u)}function d(f){return f===96?(e.consume(f),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(f)):(s.type="codeTextData",u(f))}}class b3{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Ns(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Ns(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Ns(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Ns(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Ns(this.left,n.reverse())}}}function Ns(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function i2(e){const t={};let n=-1,r,i,s,a,o,l,u;const d=new b3(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,s=0,s<l.length&&l[s][1].type==="lineEndingBlank"&&(s+=2),s<l.length&&l[s][1].type==="content"))for(;++s<l.length&&l[s][1].type!=="content";)l[s][1].type==="chunkText"&&(l[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,w3(d,n)),n=t[n],u=!0);else if(r[1]._container){for(s=n,i=void 0;s--;)if(a=d.get(s),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=s);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},o=d.slice(i,n),o.unshift(r),d.splice(i,n-i+1,o))}}return on(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function w3(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const s=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const o=a.events,l=[],u={};let d,f,p=-1,m=n,x=0,v=0;const k=[v];for(;m;){for(;e.get(++i)[1]!==m;);s.push(i),m._tokenizer||(d=r.sliceStream(m),m.next||d.push(null),f&&a.defineSkip(m.start),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),f=m,m=m.next}for(m=n;++p<o.length;)o[p][0]==="exit"&&o[p-1][0]==="enter"&&o[p][1].type===o[p-1][1].type&&o[p][1].start.line!==o[p][1].end.line&&(v=p+1,k.push(v),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(a.events=[],m?(m._tokenizer=void 0,m.previous=void 0):k.pop(),p=k.length;p--;){const g=o.slice(k[p],k[p+1]),h=s.pop();l.push([h,h+g.length-1]),e.splice(h,2,g)}for(l.reverse(),p=-1;++p<l.length;)u[x+l[p][0]]=x+l[p][1],x+=l[p][1]-l[p][0]-1;return u}const k3={resolve:E3,tokenize:C3},S3={partial:!0,tokenize:T3};function E3(e){return i2(e),e}function C3(e,t){let n;return r;function r(o){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(o)}function i(o){return o===null?s(o):Z(o)?e.check(S3,a,s)(o):(e.consume(o),i)}function s(o){return e.exit("chunkContent"),e.exit("content"),t(o)}function a(o){return e.consume(o),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function T3(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),ye(e,s,"linePrefix")}function s(a){if(a===null||Z(a))return n(a);const o=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&o&&o[1].type==="linePrefix"&&o[2].sliceSerialize(o[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function s2(e,t,n,r,i,s,a,o,l){const u=l||Number.POSITIVE_INFINITY;let d=0;return f;function f(g){return g===60?(e.enter(r),e.enter(i),e.enter(s),e.consume(g),e.exit(s),p):g===null||g===32||g===41||ql(g)?n(g):(e.enter(r),e.enter(a),e.enter(o),e.enter("chunkString",{contentType:"string"}),v(g))}function p(g){return g===62?(e.enter(s),e.consume(g),e.exit(s),e.exit(i),e.exit(r),t):(e.enter(o),e.enter("chunkString",{contentType:"string"}),m(g))}function m(g){return g===62?(e.exit("chunkString"),e.exit(o),p(g)):g===null||g===60||Z(g)?n(g):(e.consume(g),g===92?x:m)}function x(g){return g===60||g===62||g===92?(e.consume(g),m):m(g)}function v(g){return!d&&(g===null||g===41||ke(g))?(e.exit("chunkString"),e.exit(o),e.exit(a),e.exit(r),t(g)):d<u&&g===40?(e.consume(g),d++,v):g===41?(e.consume(g),d--,v):g===null||g===32||g===40||ql(g)?n(g):(e.consume(g),g===92?k:v)}function k(g){return g===40||g===41||g===92?(e.consume(g),v):v(g)}}function a2(e,t,n,r,i,s){const a=this;let o=0,l;return u;function u(m){return e.enter(r),e.enter(i),e.consume(m),e.exit(i),e.enter(s),d}function d(m){return o>999||m===null||m===91||m===93&&!l||m===94&&!o&&"_hiddenFootnoteSupport"in a.parser.constructs?n(m):m===93?(e.exit(s),e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):Z(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),f(m))}function f(m){return m===null||m===91||m===93||Z(m)||o++>999?(e.exit("chunkString"),d(m)):(e.consume(m),l||(l=!oe(m)),m===92?p:f)}function p(m){return m===91||m===92||m===93?(e.consume(m),o++,f):f(m)}}function o2(e,t,n,r,i,s){let a;return o;function o(p){return p===34||p===39||p===40?(e.enter(r),e.enter(i),e.consume(p),e.exit(i),a=p===40?41:p,l):n(p)}function l(p){return p===a?(e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):(e.enter(s),u(p))}function u(p){return p===a?(e.exit(s),l(a)):p===null?n(p):Z(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),ye(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(p))}function d(p){return p===a||p===null||Z(p)?(e.exit("chunkString"),u(p)):(e.consume(p),p===92?f:d)}function f(p){return p===a||p===92?(e.consume(p),d):d(p)}}function ra(e,t){let n;return r;function r(i){return Z(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):oe(i)?ye(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const _3={name:"definition",tokenize:I3},A3={partial:!0,tokenize:N3};function I3(e,t,n){const r=this;let i;return s;function s(m){return e.enter("definition"),a(m)}function a(m){return a2.call(r,e,o,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function o(m){return i=ln(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),l):n(m)}function l(m){return ke(m)?ra(e,u)(m):u(m)}function u(m){return s2(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function d(m){return e.attempt(A3,f,f)(m)}function f(m){return oe(m)?ye(e,p,"whitespace")(m):p(m)}function p(m){return m===null||Z(m)?(e.exit("definition"),r.parser.defined.push(i),t(m)):n(m)}}function N3(e,t,n){return r;function r(o){return ke(o)?ra(e,i)(o):n(o)}function i(o){return o2(e,s,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(o)}function s(o){return oe(o)?ye(e,a,"whitespace")(o):a(o)}function a(o){return o===null||Z(o)?t(o):n(o)}}const P3={name:"hardBreakEscape",tokenize:j3};function j3(e,t,n){return r;function r(s){return e.enter("hardBreakEscape"),e.consume(s),i}function i(s){return Z(s)?(e.exit("hardBreakEscape"),t(s)):n(s)}}const R3={name:"headingAtx",resolve:L3,tokenize:D3};function L3(e,t){let n=e.length-2,r=3;if(e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r){const i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},s={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"};on(e,r,n-r+1,[["enter",i,t],["enter",s,t],["exit",s,t],["exit",i,t]])}return e}function D3(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),s(d)}function s(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||ke(d)?(e.exit("atxHeadingSequence"),o(d)):n(d)}function o(d){return d===35?(e.enter("atxHeadingSequence"),l(d)):d===null||Z(d)?(e.exit("atxHeading"),t(d)):oe(d)?ye(e,o,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function l(d){return d===35?(e.consume(d),l):(e.exit("atxHeadingSequence"),o(d))}function u(d){return d===null||d===35||ke(d)?(e.exit("atxHeadingText"),o(d)):(e.consume(d),u)}}const M3=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Lx=["pre","script","style","textarea"],F3={concrete:!0,name:"htmlFlow",resolveTo:z3,tokenize:U3},O3={partial:!0,tokenize:B3};function z3(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function U3(e,t,n){const r=this;let i,s,a,o,l;return u;function u(A){return d(A)}function d(A){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(A),f}function f(A){return A===33?(e.consume(A),p):A===47?(e.consume(A),s=!0,v):A===63?(e.consume(A),i=3,r.interrupt?t:S):dt(A)?(e.consume(A),a=String.fromCharCode(A),k):n(A)}function p(A){return A===45?(e.consume(A),i=2,m):A===91?(e.consume(A),i=5,o=0,x):dt(A)?(e.consume(A),i=4,r.interrupt?t:S):n(A)}function m(A){return A===45?(e.consume(A),r.interrupt?t:S):n(A)}function x(A){const ue="CDATA[";return A===ue.charCodeAt(o++)?(e.consume(A),o===ue.length?r.interrupt?t:z:x):n(A)}function v(A){return dt(A)?(e.consume(A),a=String.fromCharCode(A),k):n(A)}function k(A){if(A===null||A===47||A===62||ke(A)){const ue=A===47,Se=a.toLowerCase();return!ue&&!s&&Lx.includes(Se)?(i=1,r.interrupt?t(A):z(A)):M3.includes(a.toLowerCase())?(i=6,ue?(e.consume(A),g):r.interrupt?t(A):z(A)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(A):s?h(A):y(A))}return A===45||ot(A)?(e.consume(A),a+=String.fromCharCode(A),k):n(A)}function g(A){return A===62?(e.consume(A),r.interrupt?t:z):n(A)}function h(A){return oe(A)?(e.consume(A),h):_(A)}function y(A){return A===47?(e.consume(A),_):A===58||A===95||dt(A)?(e.consume(A),w):oe(A)?(e.consume(A),y):_(A)}function w(A){return A===45||A===46||A===58||A===95||ot(A)?(e.consume(A),w):C(A)}function C(A){return A===61?(e.consume(A),b):oe(A)?(e.consume(A),C):y(A)}function b(A){return A===null||A===60||A===61||A===62||A===96?n(A):A===34||A===39?(e.consume(A),l=A,I):oe(A)?(e.consume(A),b):N(A)}function I(A){return A===l?(e.consume(A),l=null,R):A===null||Z(A)?n(A):(e.consume(A),I)}function N(A){return A===null||A===34||A===39||A===47||A===60||A===61||A===62||A===96||ke(A)?C(A):(e.consume(A),N)}function R(A){return A===47||A===62||oe(A)?y(A):n(A)}function _(A){return A===62?(e.consume(A),j):n(A)}function j(A){return A===null||Z(A)?z(A):oe(A)?(e.consume(A),j):n(A)}function z(A){return A===45&&i===2?(e.consume(A),le):A===60&&i===1?(e.consume(A),Q):A===62&&i===4?(e.consume(A),Y):A===63&&i===3?(e.consume(A),S):A===93&&i===5?(e.consume(A),B):Z(A)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(O3,ee,G)(A)):A===null||Z(A)?(e.exit("htmlFlowData"),G(A)):(e.consume(A),z)}function G(A){return e.check(_f,q,ee)(A)}function q(A){return e.enter("lineEnding"),e.consume(A),e.exit("lineEnding"),H}function H(A){return A===null||Z(A)?G(A):(e.enter("htmlFlowData"),z(A))}function le(A){return A===45?(e.consume(A),S):z(A)}function Q(A){return A===47?(e.consume(A),a="",L):z(A)}function L(A){if(A===62){const ue=a.toLowerCase();return Lx.includes(ue)?(e.consume(A),Y):z(A)}return dt(A)&&a.length<8?(e.consume(A),a+=String.fromCharCode(A),L):z(A)}function B(A){return A===93?(e.consume(A),S):z(A)}function S(A){return A===62?(e.consume(A),Y):A===45&&i===2?(e.consume(A),S):z(A)}function Y(A){return A===null||Z(A)?(e.exit("htmlFlowData"),ee(A)):(e.consume(A),Y)}function ee(A){return e.exit("htmlFlow"),t(A)}}function B3(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(to,t,n)}}const V3={name:"htmlText",tokenize:$3};function $3(e,t,n){const r=this;let i,s,a;return o;function o(S){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(S),l}function l(S){return S===33?(e.consume(S),u):S===47?(e.consume(S),C):S===63?(e.consume(S),y):dt(S)?(e.consume(S),N):n(S)}function u(S){return S===45?(e.consume(S),d):S===91?(e.consume(S),s=0,x):dt(S)?(e.consume(S),h):n(S)}function d(S){return S===45?(e.consume(S),m):n(S)}function f(S){return S===null?n(S):S===45?(e.consume(S),p):Z(S)?(a=f,Q(S)):(e.consume(S),f)}function p(S){return S===45?(e.consume(S),m):f(S)}function m(S){return S===62?le(S):S===45?p(S):f(S)}function x(S){const Y="CDATA[";return S===Y.charCodeAt(s++)?(e.consume(S),s===Y.length?v:x):n(S)}function v(S){return S===null?n(S):S===93?(e.consume(S),k):Z(S)?(a=v,Q(S)):(e.consume(S),v)}function k(S){return S===93?(e.consume(S),g):v(S)}function g(S){return S===62?le(S):S===93?(e.consume(S),g):v(S)}function h(S){return S===null||S===62?le(S):Z(S)?(a=h,Q(S)):(e.consume(S),h)}function y(S){return S===null?n(S):S===63?(e.consume(S),w):Z(S)?(a=y,Q(S)):(e.consume(S),y)}function w(S){return S===62?le(S):y(S)}function C(S){return dt(S)?(e.consume(S),b):n(S)}function b(S){return S===45||ot(S)?(e.consume(S),b):I(S)}function I(S){return Z(S)?(a=I,Q(S)):oe(S)?(e.consume(S),I):le(S)}function N(S){return S===45||ot(S)?(e.consume(S),N):S===47||S===62||ke(S)?R(S):n(S)}function R(S){return S===47?(e.consume(S),le):S===58||S===95||dt(S)?(e.consume(S),_):Z(S)?(a=R,Q(S)):oe(S)?(e.consume(S),R):le(S)}function _(S){return S===45||S===46||S===58||S===95||ot(S)?(e.consume(S),_):j(S)}function j(S){return S===61?(e.consume(S),z):Z(S)?(a=j,Q(S)):oe(S)?(e.consume(S),j):R(S)}function z(S){return S===null||S===60||S===61||S===62||S===96?n(S):S===34||S===39?(e.consume(S),i=S,G):Z(S)?(a=z,Q(S)):oe(S)?(e.consume(S),z):(e.consume(S),q)}function G(S){return S===i?(e.consume(S),i=void 0,H):S===null?n(S):Z(S)?(a=G,Q(S)):(e.consume(S),G)}function q(S){return S===null||S===34||S===39||S===60||S===61||S===96?n(S):S===47||S===62||ke(S)?R(S):(e.consume(S),q)}function H(S){return S===47||S===62||ke(S)?R(S):n(S)}function le(S){return S===62?(e.consume(S),e.exit("htmlTextData"),e.exit("htmlText"),t):n(S)}function Q(S){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),L}function L(S){return oe(S)?ye(e,B,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):B(S)}function B(S){return e.enter("htmlTextData"),a(S)}}const Wh={name:"labelEnd",resolveAll:q3,resolveTo:K3,tokenize:Y3},H3={tokenize:X3},W3={tokenize:Q3},G3={tokenize:Z3};function q3(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&on(e,0,e.length,n),e}function K3(e,t){let n=e.length,r=0,i,s,a;for(;n--;){const d=e[n][1];if(i){if(d.type==="link"||d.type==="labelLink"&&d._inactive)break;e[n][0]==="enter"&&d.type==="labelLink"&&(d._inactive=!0)}else if(s){if(e[n][0]==="enter"&&(d.type==="labelImage"||d.type==="labelLink")&&!d._balanced&&(i=n,d.type!=="labelLink")){r=2;break}}else d.type==="labelEnd"&&(s=n)}const o={type:e[i][1].type==="labelLink"?"link":"image",start:{...e[i][1].start},end:{...e[e.length-1][1].end}},l={type:"label",start:{...e[i][1].start},end:{...e[s][1].end}},u={type:"labelText",start:{...e[i+r+2][1].end},end:{...e[s-2][1].start}};return a=[["enter",o,t],["enter",l,t]],a=Bt(a,e.slice(i+1,i+r+3)),a=Bt(a,[["enter",u,t]]),a=Bt(a,Pu(t.parser.constructs.insideSpan.null,e.slice(i+r+4,s-3),t)),a=Bt(a,[["exit",u,t],e[s-2],e[s-1],["exit",l,t]]),a=Bt(a,e.slice(s+1)),a=Bt(a,[["exit",o,t]]),on(e,i,e.length,a),e}function Y3(e,t,n){const r=this,i=r._labelStarts;let s,a;if(i){for(;i.length>0&&i[i.length-1]._balanced;)i.pop();s=i[i.length-1]}return o;function o(p){return s?s._inactive?f(p):(a=r.parser.defined.includes(ln(r.sliceSerialize({start:s.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),l):n(p)}function l(p){return p===40?e.attempt(H3,d,a?d:f)(p):p===91?e.attempt(W3,d,a?u:f)(p):a?d(p):f(p)}function u(p){return e.attempt(G3,d,f)(p)}function d(p){return i.pop(),t(p)}function f(p){return s._balanced=!0,n(p)}}function X3(e,t,n){return r;function r(f){return e.enter("resource"),e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),i}function i(f){return ke(f)?ra(e,s)(f):s(f)}function s(f){return f===41?d(f):s2(e,a,o,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function a(f){return ke(f)?ra(e,l)(f):d(f)}function o(f){return n(f)}function l(f){return f===34||f===39||f===40?o2(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):d(f)}function u(f){return ke(f)?ra(e,d)(f):d(f)}function d(f){return f===41?(e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),e.exit("resource"),t):n(f)}}function Q3(e,t,n){const r=this;return i;function i(o){return a2.call(r,e,s,a,"reference","referenceMarker","referenceString")(o)}function s(o){return r.parser.defined.includes(ln(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(o):n(o)}function a(o){return n(o)}}function Z3(e,t,n){return r;function r(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),i}function i(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),t):n(s)}}const J3={name:"labelStartImage",resolveAll:Wh.resolveAll,tokenize:eM};function eM(e,t,n){const r=this;let i;return s;function s(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),a}function a(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),i=e.exit("labelImage"),o):n(l)}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),t(l))}}const tM={name:"labelStartLink",resolveAll:Wh.resolveAll,tokenize:nM};function nM(e,t,n){const r=this;let i;return s;function s(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),i=e.exit("labelLink"),a}function a(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),t(o))}}const Fc={name:"lineEnding",tokenize:rM};function rM(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),ye(e,t,"linePrefix")}}const rl={name:"thematicBreak",tokenize:iM};function iM(e,t,n){let r=0,i;return s;function s(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,o(u)}function o(u){return u===i?(e.enter("thematicBreakSequence"),l(u)):r>=3&&(u===null||Z(u))?(e.exit("thematicBreak"),t(u)):n(u)}function l(u){return u===i?(e.consume(u),r++,l):(e.exit("thematicBreakSequence"),oe(u)?ye(e,o,"whitespace")(u):o(u))}}const gt={continuation:{tokenize:lM},exit:cM,name:"list",tokenize:oM},sM={partial:!0,tokenize:dM},aM={partial:!0,tokenize:uM};function oM(e,t,n){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return o;function o(m){const x=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(x==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:Cf(m)){if(r.containerState.type||(r.containerState.type=x,e.enter(x,{_container:!0})),x==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(rl,n,u)(m):u(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(m)}return n(m)}function l(m){return Cf(m)&&++a<10?(e.consume(m),l):(!r.interrupt||a<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),u(m)):n(m)}function u(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(to,r.interrupt?n:d,e.attempt(sM,p,f))}function d(m){return r.containerState.initialBlankLine=!0,s++,p(m)}function f(m){return oe(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),p):n(m)}function p(m){return r.containerState.size=s+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(m)}}function lM(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(to,i,s);function i(o){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ye(e,t,"listItemIndent",r.containerState.size+1)(o)}function s(o){return r.containerState.furtherBlankLines||!oe(o)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(o)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(aM,t,a)(o))}function a(o){return r.containerState._closeFlow=!0,r.interrupt=void 0,ye(e,e.attempt(gt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o)}}function uM(e,t,n){const r=this;return ye(e,i,"listItemIndent",r.containerState.size+1);function i(s){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(s):n(s)}}function cM(e){e.exit(this.containerState.type)}function dM(e,t,n){const r=this;return ye(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const a=r.events[r.events.length-1];return!oe(s)&&a&&a[1].type==="listItemPrefixWhitespace"?t(s):n(s)}}const Dx={name:"setextUnderline",resolveTo:fM,tokenize:pM};function fM(e,t){const n=new Kl;let r=e.length,i,s,a;for(;r--;)if(e[r][0]==="enter"){if(e[r][1].type==="content"){i=r;break}e[r][1].type==="paragraph"&&(s=r)}else e[r][1].type==="content"&&n.add(r,1,[]),!a&&e[r][1].type==="definition"&&(a=r);const o={type:"setextHeading",start:{...e[i][1].start},end:{...e[e.length-1][1].end}};return e[s][1].type="setextHeadingText",a?(n.add(s,0,[["enter",o,t]]),n.add(a+1,0,[["exit",e[i][1],t]]),e[i][1].end={...e[a][1].end}):e[i][1]=o,n.add(e.length,0,[["exit",o,t]]),n.consume(e),e}function pM(e,t,n){const r=this;let i;return s;function s(u){let d=r.events.length,f;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){f=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||f)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),o(u)}function o(u){return u===i?(e.consume(u),o):(e.exit("setextHeadingLineSequence"),oe(u)?ye(e,l,"lineSuffix")(u):l(u))}function l(u){return u===null||Z(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const hM={tokenize:mM};function mM(e){const t=this,n=e.attempt(to,r,e.attempt(this.parser.constructs.flowInitial,i,ye(e,e.attempt(this.parser.constructs.flow,i,e.attempt(k3,i)),"linePrefix")));return n;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const gM={resolveAll:u2()},yM=l2("string"),xM=l2("text");function l2(e){return{resolveAll:u2(e==="text"?vM:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],s=n.attempt(i,a,o);return a;function a(d){return u(d)?s(d):o(d)}function o(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),l}function l(d){return u(d)?(n.exit("data"),s(d)):(n.consume(d),l)}function u(d){if(d===null)return!0;const f=i[d];let p=-1;if(f)for(;++p<f.length;){const m=f[p];if(!m.previous||m.previous.call(r,r.previous))return!0}return!1}}}function u2(e){return t;function t(n,r){let i=-1,s;for(;++i<=n.length;)s===void 0?n[i]&&n[i][1].type==="data"&&(s=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==s+2&&(n[s][1].end=n[i-1][1].end,n.splice(s+2,i-s-2),i=s+2),s=void 0);return e?e(n,r):n}}function vM(e,t){const n=new Kl;let r=0;for(;++r<=e.length;)if((r===e.length||e[r][1].type==="lineEnding")&&e[r-1][1].type==="data"){const i=e[r-1][1],s=t.sliceStream(i);let a=s.length,o=-1,l=0,u;for(;a--;){const d=s[a];if(typeof d=="string"){for(o=d.length;d.charCodeAt(o-1)===32;)l++,o--;if(o)break;o=-1}else if(d===-2)u=!0,l++;else if(d!==-1){a++;break}}if(t._contentTypeTextTrailing&&r===e.length&&(l=0),l){const d={type:r===e.length||u||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?o:i.start._bufferIndex+o,_index:i.start._index+a,line:i.end.line,column:i.end.column-l,offset:i.end.offset-l},end:{...i.end}};i.end={...d.start},i.start.offset===i.end.offset?Object.assign(i,d):n.add(r,0,[["enter",d,t],["exit",d,t]])}r++}return n.consume(e),e}const bM={42:gt,43:gt,45:gt,48:gt,49:gt,50:gt,51:gt,52:gt,53:gt,54:gt,55:gt,56:gt,57:gt,62:t2},wM={91:_3},kM={[-2]:Mc,[-1]:Mc,32:Mc},SM={35:R3,42:rl,45:[Dx,rl],60:F3,61:Dx,95:rl,96:Rx,126:Rx},EM={38:r2,92:n2},CM={[-5]:Fc,[-4]:Fc,[-3]:Fc,33:J3,38:r2,42:Tf,60:[r3,V3],91:tM,92:[P3,n2],93:Wh,95:Tf,96:g3},TM={null:[Tf,gM]},_M={null:[42,95]},AM={null:[]},IM=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:_M,contentInitial:wM,disable:AM,document:bM,flow:SM,flowInitial:kM,insideSpan:TM,string:EM,text:CM},Symbol.toStringTag,{value:"Module"}));function NM(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},s=[];let a=[],o=[];const l={attempt:I(C),check:I(b),consume:h,enter:y,exit:w,interrupt:I(b,{interrupt:!0})},u={code:null,containerState:{},defineSkip:v,events:[],now:x,parser:e,previous:null,sliceSerialize:p,sliceStream:m,write:f};let d=t.tokenize.call(u,l);return t.resolveAll&&s.push(t),u;function f(j){return a=Bt(a,j),k(),a[a.length-1]!==null?[]:(N(t,0),u.events=Pu(s,u.events,u),u.events)}function p(j,z){return jM(m(j),z)}function m(j){return PM(a,j)}function x(){const{_bufferIndex:j,_index:z,line:G,column:q,offset:H}=r;return{_bufferIndex:j,_index:z,line:G,column:q,offset:H}}function v(j){i[j.line]=j.column,_()}function k(){for(;r._index<a.length;){const j=a[r._index];if(typeof j=="string"){const z=r._index;for(r._bufferIndex<0&&(r._bufferIndex=0);r._index===z&&r._bufferIndex<j.length;)g(j.charCodeAt(r._bufferIndex))}else g(j)}}function g(j){d=d(j)}function h(j){Z(j)?(r.line++,r.column=1,r.offset+=j===-3?2:1,_()):j!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=j}function y(j,z){const G=z||{};return G.type=j,G.start=x(),u.events.push(["enter",G,u]),o.push(G),G}function w(j){const z=o.pop();return z.end=x(),u.events.push(["exit",z,u]),z}function C(j,z){N(j,z.from)}function b(j,z){z.restore()}function I(j,z){return G;function G(q,H,le){let Q,L,B,S;return Array.isArray(q)?ee(q):"tokenize"in q?ee([q]):Y(q);function Y(se){return Ee;function Ee($e){const Ye=$e!==null&&se[$e],pe=$e!==null&&se.null,et=[...Array.isArray(Ye)?Ye:Ye?[Ye]:[],...Array.isArray(pe)?pe:pe?[pe]:[]];return ee(et)($e)}}function ee(se){return Q=se,L=0,se.length===0?le:A(se[L])}function A(se){return Ee;function Ee($e){return S=R(),B=se,se.partial||(u.currentConstruct=se),se.name&&u.parser.constructs.disable.null.includes(se.name)?Se():se.tokenize.call(z?Object.assign(Object.create(u),z):u,l,ue,Se)($e)}}function ue(se){return j(B,S),H}function Se(se){return S.restore(),++L<Q.length?A(Q[L]):le}}}function N(j,z){j.resolveAll&&!s.includes(j)&&s.push(j),j.resolve&&on(u.events,z,u.events.length-z,j.resolve(u.events.slice(z),u)),j.resolveTo&&(u.events=j.resolveTo(u.events,u))}function R(){const j=x(),z=u.previous,G=u.currentConstruct,q=u.events.length,H=Array.from(o);return{from:q,restore:le};function le(){r=j,u.previous=z,u.currentConstruct=G,u.events.length=q,o=H,_()}}function _(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function PM(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,s=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,s)];else{if(a=e.slice(n,i),r>-1){const o=a[0];typeof o=="string"?a[0]=o.slice(r):a.shift()}s>0&&a.push(e[i].slice(0,s))}return a}function jM(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const s=e[n];let a;if(typeof s=="string")a=s;else switch(s){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(s)}i=s===-2,r.push(a)}return r.join("")}function RM(e){const r={constructs:Zk([IM,...(e||{}).extensions||[]]),content:i(XD),defined:[],document:i(ZD),flow:i(hM),lazy:{},string:i(yM),text:i(xM)};return r;function i(s){return a;function a(o){return NM(r,s,o)}}}function LM(e){for(;!i2(e););return e}const Mx=/[\0\t\n\r]/g;function DM(){let e=1,t="",n=!0,r;return i;function i(s,a,o){s=t+(typeof s=="string"?s.toString():new TextDecoder(a||void 0).decode(s));const l=[];let u=0;for(t="",n&&(s.charCodeAt(0)===65279&&u++,n=void 0);u<s.length;){Mx.lastIndex=u;const d=Mx.exec(s),f=d&&d.index!==void 0?d.index:s.length,p=s.charCodeAt(f);if(!d){t=s.slice(u);break}if(p===10&&u===f&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),u<f&&(l.push(s.slice(u,f)),e+=f-u),p){case 0:{l.push(65533),e++;break}case 9:{const m=Math.ceil(e/4)*4;for(l.push(-2);e++<m;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:r=!0,e=1}u=f+1}return o&&(r&&l.push(-5),t&&l.push(t),l.push(null)),l}}const MM=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function FM(e){return e.replace(MM,OM)}function OM(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),s=i===120||i===88;return Jk(n.slice(s?2:1),s?16:10)}return Hh(n)||e}const c2={}.hasOwnProperty;function zM(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),UM(n)(LM(RM(n).document().write(DM()(e,t,!0))))}function UM(e){const t={afterExit:[],beforeEnter:[],transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(ge),autolinkProtocol:_,autolinkEmail:_,atxHeading:a(Me),blockQuote:a(et),characterEscape:_,characterReference:_,codeFenced:a(St),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(St,o),codeText:a(Ge,o),codeTextData:_,data:_,codeFlowValue:_,definition:a(Gt),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(jr),hardBreakEscape:a(Cn),hardBreakTrailing:a(Cn),htmlFlow:a(qt,o),htmlFlowData:_,htmlText:a(qt,o),htmlTextData:_,image:a(D),label:o,link:a(ge),listItem:a(xe),listItemValue:m,listOrdered:a(re,p),listUnordered:a(re),paragraph:a(M),reference:ue,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(Me),strong:a($),thematicBreak:a(de)},exit:{atxHeading:u(),atxHeadingSequence:b,autolink:u(),autolinkEmail:pe,autolinkProtocol:Ye,blockQuote:u(),characterEscapeValue:j,characterReferenceMarkerHexadecimal:se,characterReferenceMarkerNumeric:se,characterReferenceValue:Ee,characterReference:$e,codeFenced:u(g),codeFencedFence:k,codeFencedFenceInfo:x,codeFencedFenceMeta:v,codeFlowValue:j,codeIndented:u(h),codeText:u(le),codeTextData:j,data:j,definition:u(),definitionDestinationString:C,definitionLabelString:y,definitionTitleString:w,emphasis:u(),hardBreakEscape:u(G),hardBreakTrailing:u(G),htmlFlow:u(q),htmlFlowData:j,htmlText:u(H),htmlTextData:j,image:u(L),label:S,labelText:B,lineEnding:z,link:u(Q),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:Se,resourceDestinationString:Y,resourceTitleString:ee,resource:A,setextHeading:u(R),setextHeadingLineSequence:N,setextHeadingText:I,strong:u(),thematicBreak:u()}};d2(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(P){let T={type:"root",children:[],position:void 0};const U={stack:[T],tokenStack:[],config:t,enter:l,exit:d,buffer:o,resume:f,data:n},V=[],X=[];let ie=-1;for(;++ie<P.length;)if(X.push(P[ie]),P[ie][1].type==="listOrdered"||P[ie][1].type==="listUnordered")if(P[ie][0]==="enter")V.push(X.length-1);else{const fe=V.pop();s(X,fe)}for(P=X,ie=-1;++ie<P.length;){const fe=t[P[ie][0]];P[ie][0]==="enter"&&t.beforeEnter.length>0&&i(t.beforeEnter,{...U,sliceSerialize:P[ie][2].sliceSerialize},P[ie][1]),c2.call(fe,P[ie][1].type)&&fe[P[ie][1].type].call({...U,sliceSerialize:P[ie][2].sliceSerialize},P[ie][1]),P[ie][0]==="exit"&&t.afterExit.length>0&&i(t.afterExit,{...U,sliceSerialize:P[ie][2].sliceSerialize},P[ie][1])}if(U.tokenStack.length>0){const fe=U.tokenStack[U.tokenStack.length-1];(fe[1]||Fx).call(U,void 0,fe[0])}for(T.position={start:Jn(P.length>0?P[0][1].start:{line:1,column:1,offset:0}),end:Jn(P.length>0?P[P.length-2][1].end:{line:1,column:1,offset:0})},ie=-1;++ie<t.transforms.length;)T=t.transforms[ie](T)||T;return T}function i(P,T,U){let V=-1;for(;++V<P.length;)P[V].call(T,U)}function s(P,T){const U=P.length-1;let V=T-1,X=-1,ie=!1,fe,he,Pe,Tn;const Rr=[];for(;++V<=U;){const Et=P[V];switch(Et[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Et[0]==="enter"?X++:X--,Tn=void 0;break}case"lineEndingBlank":{Et[0]==="enter"&&(fe&&!Tn&&!X&&!Pe&&(Pe=V),Tn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Tn=void 0}if(!X&&Et[0]==="enter"&&Et[1].type==="listItemPrefix"||X===-1&&Et[0]==="exit"&&(Et[1].type==="listUnordered"||Et[1].type==="listOrdered")){if(fe){let hi=V;for(he=void 0;hi--;){const _n=P[hi];if(_n[1].type==="lineEnding"||_n[1].type==="lineEndingBlank"){if(_n[0]==="exit")continue;he&&(P[he][1].type="lineEndingBlank",ie=!0),_n[1].type="lineEnding",he=hi}else if(!(_n[1].type==="linePrefix"||_n[1].type==="blockQuotePrefix"||_n[1].type==="blockQuotePrefixWhitespace"||_n[1].type==="blockQuoteMarker"||_n[1].type==="listItemIndent"))break}Pe&&(!he||Pe<he)&&(fe._spread=!0),fe.end=Object.assign({},he?P[he][1].start:Et[1].end),Rr.push({at:he||V,event:["exit",fe,Et[2]]})}if(Et[1].type==="listItemPrefix"){const hi={type:"listItem",_spread:!1,start:Object.assign({},Et[1].start),end:void 0};fe=hi,Rr.push({at:V,event:["enter",hi,Et[2]]}),Pe=void 0,Tn=!0}}}const am=P.splice(T);let Du=0;for(V=-1;++V<am.length;){for(;Du<Rr.length&&Rr[Du].at===T+V;)P.push(Rr[Du++].event);P.push(am[V])}P[T][1]._spread=ie}function a(P,T){return U;function U(V){l.call(this,P(V),V),T&&T.call(this,V)}}function o(){this.stack.push({type:"fragment",children:[]})}function l(P,T,U){this.stack[this.stack.length-1].children.push(P),this.stack.push(P),this.tokenStack.push([T,U||void 0]),P.position={start:Jn(T.start),end:void 0}}function u(P){return T;function T(U){P&&P.call(this,U),d.call(this,U)}}function d(P,T){const U=this.stack.pop(),V=this.tokenStack.pop();if(!V)throw new Error("Cannot close `"+P.type+"` ("+na({start:P.start,end:P.end})+"): it’s not open");V[0].type!==P.type&&(T?T.call(this,P,V[0]):(V[1]||Fx).call(this,P,V[0])),U.position.end=Jn(P.end)}function f(){return $h(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function m(P){if(this.data.expectingFirstListItemValue){const T=this.stack[this.stack.length-2];T.start=Number.parseInt(this.sliceSerialize(P),10),this.data.expectingFirstListItemValue=void 0}}function x(){const P=this.resume(),T=this.stack[this.stack.length-1];T.lang=P}function v(){const P=this.resume(),T=this.stack[this.stack.length-1];T.meta=P}function k(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function g(){const P=this.resume(),T=this.stack[this.stack.length-1];T.value=P.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function h(){const P=this.resume(),T=this.stack[this.stack.length-1];T.value=P.replace(/(\r?\n|\r)$/g,"")}function y(P){const T=this.resume(),U=this.stack[this.stack.length-1];U.label=T,U.identifier=ln(this.sliceSerialize(P)).toLowerCase()}function w(){const P=this.resume(),T=this.stack[this.stack.length-1];T.title=P}function C(){const P=this.resume(),T=this.stack[this.stack.length-1];T.url=P}function b(P){const T=this.stack[this.stack.length-1];if(!T.depth){const U=this.sliceSerialize(P).length;T.depth=U}}function I(){this.data.setextHeadingSlurpLineEnding=!0}function N(P){const T=this.stack[this.stack.length-1];T.depth=this.sliceSerialize(P).codePointAt(0)===61?1:2}function R(){this.data.setextHeadingSlurpLineEnding=void 0}function _(P){const U=this.stack[this.stack.length-1].children;let V=U[U.length-1];(!V||V.type!=="text")&&(V=ae(),V.position={start:Jn(P.start),end:void 0},U.push(V)),this.stack.push(V)}function j(P){const T=this.stack.pop();T.value+=this.sliceSerialize(P),T.position.end=Jn(P.end)}function z(P){const T=this.stack[this.stack.length-1];if(this.data.atHardBreak){const U=T.children[T.children.length-1];U.position.end=Jn(P.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(T.type)&&(_.call(this,P),j.call(this,P))}function G(){this.data.atHardBreak=!0}function q(){const P=this.resume(),T=this.stack[this.stack.length-1];T.value=P}function H(){const P=this.resume(),T=this.stack[this.stack.length-1];T.value=P}function le(){const P=this.resume(),T=this.stack[this.stack.length-1];T.value=P}function Q(){const P=this.stack[this.stack.length-1];if(this.data.inReference){const T=this.data.referenceType||"shortcut";P.type+="Reference",P.referenceType=T,delete P.url,delete P.title}else delete P.identifier,delete P.label;this.data.referenceType=void 0}function L(){const P=this.stack[this.stack.length-1];if(this.data.inReference){const T=this.data.referenceType||"shortcut";P.type+="Reference",P.referenceType=T,delete P.url,delete P.title}else delete P.identifier,delete P.label;this.data.referenceType=void 0}function B(P){const T=this.sliceSerialize(P),U=this.stack[this.stack.length-2];U.label=FM(T),U.identifier=ln(T).toLowerCase()}function S(){const P=this.stack[this.stack.length-1],T=this.resume(),U=this.stack[this.stack.length-1];if(this.data.inReference=!0,U.type==="link"){const V=P.children;U.children=V}else U.alt=T}function Y(){const P=this.resume(),T=this.stack[this.stack.length-1];T.url=P}function ee(){const P=this.resume(),T=this.stack[this.stack.length-1];T.title=P}function A(){this.data.inReference=void 0}function ue(){this.data.referenceType="collapsed"}function Se(P){const T=this.resume(),U=this.stack[this.stack.length-1];U.label=T,U.identifier=ln(this.sliceSerialize(P)).toLowerCase(),this.data.referenceType="full"}function se(P){this.data.characterReferenceType=P.type}function Ee(P){const T=this.sliceSerialize(P),U=this.data.characterReferenceType;let V;U?(V=Jk(T,U==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):V=Hh(T);const X=this.stack[this.stack.length-1];X.value+=V}function $e(P){const T=this.stack.pop();T.position.end=Jn(P.end)}function Ye(P){j.call(this,P);const T=this.stack[this.stack.length-1];T.url=this.sliceSerialize(P)}function pe(P){j.call(this,P);const T=this.stack[this.stack.length-1];T.url="mailto:"+this.sliceSerialize(P)}function et(){return{type:"blockquote",children:[],position:void 0}}function St(){return{type:"code",lang:null,meta:null,value:"",position:void 0}}function Ge(){return{type:"inlineCode",value:"",position:void 0}}function Gt(){return{type:"definition",identifier:"",label:null,title:null,url:"",position:void 0}}function jr(){return{type:"emphasis",children:[],position:void 0}}function Me(){return{type:"heading",depth:0,children:[],position:void 0}}function Cn(){return{type:"break",position:void 0}}function qt(){return{type:"html",value:"",position:void 0}}function D(){return{type:"image",title:null,url:"",alt:null,position:void 0}}function ge(){return{type:"link",title:null,url:"",children:[],position:void 0}}function re(P){return{type:"list",ordered:P.type==="listOrdered",start:null,spread:P._spread,children:[],position:void 0}}function xe(P){return{type:"listItem",spread:P._spread,checked:null,children:[],position:void 0}}function M(){return{type:"paragraph",children:[],position:void 0}}function $(){return{type:"strong",children:[],position:void 0}}function ae(){return{type:"text",value:"",position:void 0}}function de(){return{type:"thematicBreak",position:void 0}}}function Jn(e){return{line:e.line,column:e.column,offset:e.offset}}function d2(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?d2(e,r):BM(e,r)}}function BM(e,t){let n;for(n in t)if(c2.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"afterExit":case"beforeEnter":{const r=t[n];r&&e[n].push(r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Fx(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+na({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+na({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+na({start:t.start,end:t.end})+") is still open")}function VM(e){const t=this;t.parser=n;function n(r){return zM(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function $M(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function HM(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function WM(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(s.data={meta:t.meta}),e.patch(t,s),s=e.applyData(t,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(t,s),s}function GM(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function qM(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function KM(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=vs(r.toLowerCase()),s=e.footnoteOrder.indexOf(r);let a,o=e.footnoteCounts.get(r);o===void 0?(o=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=s+1,o+=1,e.footnoteCounts.set(r,o);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(o>1?"-"+o:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,l);const u={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(t,u),e.applyData(t,u)}function YM(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function XM(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function f2(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function QM(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return f2(e,t);const i={src:vs(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,s),e.applyData(t,s)}function ZM(e,t){const n={src:vs(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function JM(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function eF(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return f2(e,t);const i={href:vs(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function tF(e,t){const n={href:vs(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function nF(e,t,n){const r=e.all(t),i=n?rF(n):p2(t),s={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let f;d&&d.type==="element"&&d.tagName==="p"?f=d:(f={type:"element",tagName:"p",properties:{},children:[]},r.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let o=-1;for(;++o<r.length;){const d=r[o];(i||o!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const l=r[r.length-1];l&&(i||l.type!=="element"||l.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:s,children:a};return e.patch(t,u),e.applyData(t,u)}function rF(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=p2(n[r])}return t}function p2(e){const t=e.spread;return t??e.children.length>1}function iF(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const s={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,s),e.applyData(t,s)}function sF(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function aF(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function oF(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function lF(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},o=zh(t.children[1]),l=Wk(t.children[t.children.length-1]);o&&l&&(a.position={start:o,end:l}),i.push(a)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,s),e.applyData(t,s)}function uF(e,t,n){const r=n?n.children:void 0,s=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,o=a?a.length:t.children.length;let l=-1;const u=[];for(;++l<o;){const f=t.children[l],p={},m=a?a[l]:void 0;m&&(p.align=m);let x={type:"element",tagName:s,properties:p,children:[]};f&&(x.children=e.all(f),e.patch(f,x),x=e.applyData(f,x)),u.push(x)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function cF(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Ox=9,zx=32;function dF(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const s=[];for(;r;)s.push(Ux(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return s.push(Ux(t.slice(i),i>0,!1)),s.join("")}function Ux(e,t,n){let r=0,i=e.length;if(t){let s=e.codePointAt(r);for(;s===Ox||s===zx;)r++,s=e.codePointAt(r)}if(n){let s=e.codePointAt(i-1);for(;s===Ox||s===zx;)i--,s=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function fF(e,t){const n={type:"text",value:dF(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function pF(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const hF={blockquote:$M,break:HM,code:WM,delete:GM,emphasis:qM,footnoteReference:KM,heading:YM,html:XM,imageReference:QM,image:ZM,inlineCode:JM,linkReference:eF,link:tF,listItem:nF,list:iF,paragraph:sF,root:aF,strong:oF,table:lF,tableCell:cF,tableRow:uF,text:fF,thematicBreak:pF,toml:Io,yaml:Io,definition:Io,footnoteDefinition:Io};function Io(){}const h2=-1,ju=0,ia=1,Xl=2,Gh=3,qh=4,Kh=5,Yh=6,m2=7,g2=8,{defineProperty:mF}=Object,y2=typeof self=="object"?self:globalThis,Bx=(e,t)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new y2[e](t)},gF=(e,t)=>{const n=(i,s)=>(e.set(s,i),i),r=i=>{if(e.has(i))return e.get(i);const[s,a]=t[i];switch(s){case ju:case h2:return n(a,i);case ia:{const o=n([],i);for(const l of a)o.push(r(l));return o}case Xl:{const o=n({},i);for(const[l,u]of a){const d=r(l),f=r(u);d==="__proto__"?mF(o,d,{value:f,configurable:!0,enumerable:!0,writable:!0}):o[d]=f}return o}case Gh:return n(new Date(a),i);case qh:{const{source:o,flags:l}=a;return n(new RegExp(o,l),i)}case Kh:{const o=n(new Map,i);for(const[l,u]of a)o.set(r(l),r(u));return o}case Yh:{const o=n(new Set,i);for(const l of a)o.add(r(l));return o}case m2:{const{name:o,message:l}=a;return n(typeof y2[o]=="function"?Bx(o,l):new Error(l),i)}case g2:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:o}=new Uint8Array(a);return n(new DataView(o),a)}case"-0":return-0}return n(Bx(s,a),i)};return r},Vx=e=>gF(new Map,e)(0),Vr="",{toString:yF}={},{keys:xF,is:vF}=Object,Ps=e=>{const t=typeof e;if(t!=="object"||!e)return[ju,t];const n=yF.call(e).slice(8,-1);switch(n){case"Array":return[ia,Vr];case"Object":return[Xl,Vr];case"Date":return[Gh,Vr];case"RegExp":return[qh,Vr];case"Map":return[Kh,Vr];case"Set":return[Yh,Vr];case"DataView":return[ia,n]}return n.includes("Array")?[ia,n]:e instanceof Error?[m2,e.name||"Error"]:[Xl,n]},No=([e,t])=>e===ju&&(t==="function"||t==="symbol"),bF=(e,t,n,r)=>{const i=(a,o)=>{const l=r.push(a)-1;return n.set(o,l),l},s=a=>{if(n.has(a))return n.get(a);let[o,l]=Ps(a);switch(o){case ju:{let d=a;switch(l){case"bigint":o=g2,d=a.toString();break;case"number":if(!a&&vF(a,-0))return r.push(["-0"])-1;break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);d=null;break;case"undefined":return i([h2],a)}return i([o,d],a)}case ia:{if(l){let p=a;return l==="DataView"?p=new Uint8Array(a.buffer):l==="ArrayBuffer"&&(p=new Uint8Array(a)),i([l,[...p]],a)}const d=[],f=i([o,d],a);for(const p of a)d.push(s(p));return f}case Xl:{if(l)switch(l){case"BigInt":return i([l,a.toString()],a);case"Boolean":case"Number":case"String":return i([l,a.valueOf()],a)}if(t&&"toJSON"in a)return s(a.toJSON());const d=[],f=i([o,d],a);for(const p of xF(a))(e||!No(Ps(a[p])))&&d.push([s(p),s(a[p])]);return f}case Gh:return i([o,isNaN(a.getTime())?Vr:a.toISOString()],a);case qh:{const{source:d,flags:f}=a;return i([o,{source:d,flags:f}],a)}case Kh:{const d=[],f=i([o,d],a);for(const[p,m]of a)(e||!(No(Ps(p))||No(Ps(m))))&&d.push([s(p),s(m)]);return f}case Yh:{const d=[],f=i([o,d],a);for(const p of a)(e||!No(Ps(p)))&&d.push(s(p));return f}}const{message:u}=a;return i([o,{name:l,message:u}],a)};return s},$x=(e,{json:t,lossy:n}={})=>{const r=[];return bF(!(t||n),!!t,new Map,r)(e),r},Ql=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Vx($x(e,t)):structuredClone(e):(e,t)=>Vx($x(e,t));function wF(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function kF(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function SF(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||wF,r=e.options.footnoteBackLabel||kF,i=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},o=[];let l=-1;for(;++l<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[l]);if(!u)continue;const d=e.all(u),f=String(u.identifier).toUpperCase(),p=vs(f.toLowerCase());let m=0;const x=[],v=e.footnoteCounts.get(f);for(;v!==void 0&&++m<=v;){x.length>0&&x.push({type:"text",value:" "});let h=typeof n=="string"?n:n(l,m);typeof h=="string"&&(h={type:"text",value:h}),x.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+p+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(l,m),className:["data-footnote-backref"]},children:Array.isArray(h)?h:[h]})}const k=d[d.length-1];if(k&&k.type==="element"&&k.tagName==="p"){const h=k.children[k.children.length-1];h&&h.type==="text"?h.value+=" ":k.children.push({type:"text",value:" "}),k.children.push(...x)}else d.push(...x);const g={type:"element",tagName:"li",properties:{id:t+"fn-"+p},children:e.wrap(d,!0)};e.patch(u,g),o.push(g)}if(o.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Ql(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(o,!0)},{type:"text",value:`
`}]}}const Ru=function(e){if(e==null)return _F;if(typeof e=="function")return Lu(e);if(typeof e=="object")return Array.isArray(e)?EF(e):CF(e);if(typeof e=="string")return TF(e);throw new Error("Expected function, string, or object as test")};function EF(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Ru(e[n]);return Lu(r);function r(...i){let s=-1;for(;++s<t.length;)if(t[s].apply(this,i))return!0;return!1}}function CF(e){const t=e;return Lu(n);function n(r){const i=r;let s;for(s in e)if(i[s]!==t[s])return!1;return!0}}function TF(e){return Lu(t);function t(n){return n&&n.type===e}}function Lu(e){return t;function t(n,r,i){return!!(AF(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function _F(){return!0}function AF(e){return e!==null&&typeof e=="object"&&"type"in e}const x2=[],IF=!0,Af=!1,NF="skip";function v2(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const s=Ru(i),a=r?-1:1;o(e,void 0,[])();function o(l,u,d){const f=l&&typeof l=="object"?l:{};if(typeof f.type=="string"){const m=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(l.type+(m?"<"+m+">":""))+")"})}return p;function p(){let m=x2,x,v,k;if((!t||s(l,u,d[d.length-1]||void 0))&&(m=PF(n(l,d)),m[0]===Af))return m;if("children"in l&&l.children){const g=l;if(g.children&&m[0]!==NF)for(v=(r?g.children.length:-1)+a,k=d.concat(g);v>-1&&v<g.children.length;){const h=g.children[v];if(x=o(h,v,k)(),x[0]===Af)return x;v=typeof x[1]=="number"?x[1]:v+a}}return m}}}function PF(e){return Array.isArray(e)?e:typeof e=="number"?[IF,e]:e==null?x2:[e]}function Xh(e,t,n,r){let i,s,a;typeof t=="function"&&typeof n!="function"?(s=void 0,a=t,i=n):(s=t,a=n,i=r),v2(e,s,o,i);function o(l,u){const d=u[u.length-1],f=d?d.children.indexOf(l):void 0;return a(l,f,d)}}const If={}.hasOwnProperty,jF={};function RF(e,t){const n=t||jF,r=new Map,i=new Map,s=new Map,a={...hF,...n.handlers},o={all:u,applyData:DF,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:a,one:l,options:n,patch:LF,wrap:FF};return Xh(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const f=d.type==="definition"?r:i,p=String(d.identifier).toUpperCase();f.has(p)||f.set(p,d)}}),o;function l(d,f){const p=d.type,m=o.handlers[p];if(If.call(o.handlers,p)&&m)return m(o,d,f);if(o.options.passThrough&&o.options.passThrough.includes(p)){if("children"in d){const{children:v,...k}=d,g=Ql(k);return g.children=o.all(d),g}return Ql(d)}return(o.options.unknownHandler||MF)(o,d,f)}function u(d){const f=[];if("children"in d){const p=d.children;let m=-1;for(;++m<p.length;){const x=o.one(p[m],d);if(x){if(m&&p[m-1].type==="break"&&(!Array.isArray(x)&&x.type==="text"&&(x.value=Hx(x.value)),!Array.isArray(x)&&x.type==="element")){const v=x.children[0];v&&v.type==="text"&&(v.value=Hx(v.value))}Array.isArray(x)?f.push(...x):f.push(x)}}}return f}}function LF(e,t){e.position&&(t.position=kD(e))}function DF(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,s=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&s&&Object.assign(n.properties,Ql(s)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function MF(e,t){const n=t.data||{},r="value"in t&&!(If.call(n,"hProperties")||If.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function FF(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Hx(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Wx(e,t){const n=RF(e,t),r=n.one(e,void 0),i=SF(n),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function OF(e,t){return e&&"run"in e?async function(n,r){const i=Wx(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Wx(n,{file:r,...e||t})}}function Gx(e){if(e)throw e}var il=Object.prototype.hasOwnProperty,b2=Object.prototype.toString,qx=Object.defineProperty,Kx=Object.getOwnPropertyDescriptor,Yx=function(t){return typeof Array.isArray=="function"?Array.isArray(t):b2.call(t)==="[object Array]"},Xx=function(t){if(!t||b2.call(t)!=="[object Object]")return!1;var n=il.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&il.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||il.call(t,i)},Qx=function(t,n){qx&&n.name==="__proto__"?qx(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Zx=function(t,n){if(n==="__proto__")if(il.call(t,n)){if(Kx)return Kx(t,n).value}else return;return t[n]},zF=function e(){var t,n,r,i,s,a,o=arguments[0],l=1,u=arguments.length,d=!1;for(typeof o=="boolean"&&(d=o,o=arguments[1]||{},l=2),(o==null||typeof o!="object"&&typeof o!="function")&&(o={});l<u;++l)if(t=arguments[l],t!=null)for(n in t)r=Zx(o,n),i=Zx(t,n),o!==i&&(d&&i&&(Xx(i)||(s=Yx(i)))?(s?(s=!1,a=r&&Yx(r)?r:[]):a=r&&Xx(r)?r:{},Qx(o,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&Qx(o,{name:n,newValue:i}));return o};const Oc=Zl(zF);function Nf(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function UF(){const e=[],t={run:n,use:r};return t;function n(...i){let s=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);o(null,...i);function o(l,...u){const d=e[++s];let f=-1;if(l){a(l);return}for(;++f<i.length;)(u[f]===null||u[f]===void 0)&&(u[f]=i[f]);i=u,d?BF(d,o)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function BF(e,t){let n;return r;function r(...a){const o=e.length>a.length;let l;o&&a.push(i);try{l=e.apply(this,a)}catch(u){const d=u;if(o&&n)throw d;return i(d)}o||(l&&l.then&&typeof l.then=="function"?l.then(s,i):l instanceof Error?i(l):s(l))}function i(a,...o){n||(n=!0,t(a,...o))}function s(a){i(null,a)}}const hn={basename:VF,dirname:$F,extname:HF,join:WF,sep:"/"};function VF(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');no(e);let n=0,r=-1,i=e.length,s;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,o=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else a<0&&(s=!0,a=i+1),o>-1&&(e.codePointAt(i)===t.codePointAt(o--)?o<0&&(r=i):(o=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function $F(e){if(no(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function HF(e){no(e);let t=e.length,n=-1,r=0,i=-1,s=0,a;for(;t--;){const o=e.codePointAt(t);if(o===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),o===46?i<0?i=t:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||n<0||s===0||s===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function WF(...e){let t=-1,n;for(;++t<e.length;)no(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":GF(n)}function GF(e){no(e);const t=e.codePointAt(0)===47;let n=qF(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function qF(e,t){let n="",r=0,i=-1,s=0,a=-1,o,l;for(;++a<=e.length;){if(a<e.length)o=e.codePointAt(a);else{if(o===47)break;o=47}if(o===47){if(!(i===a-1||s===1))if(i!==a-1&&s===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),i=a,s=0;continue}}else if(n.length>0){n="",r=0,i=a,s=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,s=0}else o===46&&s>-1?s++:s=-1}return n}function no(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const KF={cwd:YF};function YF(){return"/"}function Pf(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function XF(e){if(typeof e=="string")e=new URL(e);else if(!Pf(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return QF(e)}function QF(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const zc=["history","path","basename","stem","extname","dirname"];class w2{constructor(t){let n;t?Pf(t)?n={path:t}:typeof t=="string"||ZF(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":KF.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<zc.length;){const s=zc[r];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let i;for(i in n)zc.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?hn.basename(this.path):void 0}set basename(t){Bc(t,"basename"),Uc(t,"basename"),this.path=hn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?hn.dirname(this.path):void 0}set dirname(t){Jx(this.basename,"dirname"),this.path=hn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?hn.extname(this.path):void 0}set extname(t){if(Uc(t,"extname"),Jx(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=hn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Pf(t)&&(t=XF(t)),Bc(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?hn.basename(this.path,this.extname):void 0}set stem(t){Bc(t,"stem"),Uc(t,"stem"),this.path=hn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new ut(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Uc(e,t){if(e&&e.includes(hn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+hn.sep+"`")}function Bc(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Jx(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function ZF(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const JF=function(e){const r=this.constructor.prototype,i=r[e],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s},eO={}.hasOwnProperty;class Qh extends JF{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=UF()}copy(){const t=new Qh;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Oc(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Hc("data",this.frozen),this.namespace[t]=n,this):eO.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Hc("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Po(t),r=this.parser||this.Parser;return Vc("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Vc("process",this.parser||this.Parser),$c("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(s,a){const o=Po(t),l=r.parse(o);r.run(l,o,function(d,f,p){if(d||!f||!p)return u(d);const m=f,x=r.stringify(m,p);rO(x)?p.value=x:p.result=x,u(d,p)});function u(d,f){d||!f?a(d):s?s(f):n(void 0,f)}}}processSync(t){let n=!1,r;return this.freeze(),Vc("processSync",this.parser||this.Parser),$c("processSync",this.compiler||this.Compiler),this.process(t,i),t0("processSync","process",n),r;function i(s,a){n=!0,Gx(s),r=a}}run(t,n,r){e0(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?s(void 0,r):new Promise(s);function s(a,o){const l=Po(n);i.run(t,l,u);function u(d,f,p){const m=f||t;d?o(d):a?a(m):r(void 0,m,p)}}}runSync(t,n){let r=!1,i;return this.run(t,n,s),t0("runSync","run",r),i;function s(a,o){Gx(a),i=o,r=!0}}stringify(t,n){this.freeze();const r=Po(n),i=this.compiler||this.Compiler;return $c("stringify",i),e0(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Hc("use",this.frozen),t!=null)if(typeof t=="function")l(t,n);else if(typeof t=="object")Array.isArray(t)?o(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function s(u){if(typeof u=="function")l(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...f]=u;l(d,f)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(u.plugins),u.settings&&(i.settings=Oc(!0,i.settings,u.settings))}function o(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const f=u[d];s(f)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function l(u,d){let f=-1,p=-1;for(;++f<r.length;)if(r[f][0]===u){p=f;break}if(p===-1)r.push([u,...d]);else if(d.length>0){let[m,...x]=d;const v=r[p][1];Nf(v)&&Nf(m)&&(m=Oc(!0,v,m)),r[p]=[u,m,...x]}}}}const tO=new Qh().freeze();function Vc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function $c(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Hc(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function e0(e){if(!Nf(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function t0(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Po(e){return nO(e)?e:new w2(e)}function nO(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function rO(e){return typeof e=="string"||iO(e)}function iO(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const sO="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",n0=[],r0={allowDangerousHtml:!0},aO=/^(https?|ircs?|mailto|xmpp)$/i,oO=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function lO(e){const t=uO(e),n=cO(e);return dO(t.runSync(t.parse(n),n),e)}function uO(e){const t=e.rehypePlugins||n0,n=e.remarkPlugins||n0,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...r0}:r0;return tO().use(VM).use(n).use(OF,r).use(t)}function cO(e){const t=e.children||"",n=new w2;return typeof t=="string"&&(n.value=t),n}function dO(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,s=t.disallowedElements,a=t.skipHtml,o=t.unwrapDisallowed,l=t.urlTransform||fO;for(const d of oO)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+sO+d.id,void 0);return Xh(e,u),_D(e,{Fragment:c.Fragment,components:i,ignoreInvalidStyle:!0,jsx:c.jsx,jsxs:c.jsxs,passKeys:!0,passNode:!0});function u(d,f,p){if(d.type==="raw"&&p&&typeof f=="number")return a?p.children.splice(f,1):p.children[f]={type:"text",value:d.value},f;if(d.type==="element"){let m;for(m in Dc)if(Object.hasOwn(Dc,m)&&Object.hasOwn(d.properties,m)){const x=d.properties[m],v=Dc[m];(v===null||v.includes(d.tagName))&&(d.properties[m]=l(String(x||""),m,d))}}if(d.type==="element"){let m=n?!n.includes(d.tagName):s?s.includes(d.tagName):!1;if(!m&&r&&typeof f=="number"&&(m=!r(d,f,p)),m&&p&&typeof f=="number")return o&&d.children?p.children.splice(f,1,...d.children):p.children.splice(f,1),f}}}function fO(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||aO.test(e.slice(0,t))?e:""}function i0(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function pO(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function hO(e,t,n){const i=Ru((n||{}).ignore||[]),s=mO(t);let a=-1;for(;++a<s.length;)v2(e,"text",o);function o(u,d){let f=-1,p;for(;++f<d.length;){const m=d[f],x=p?p.children:void 0;if(i(m,x?x.indexOf(m):void 0,p))return;p=m}if(p)return l(u,d)}function l(u,d){const f=d[d.length-1],p=s[a][0],m=s[a][1];let x=0;const k=f.children.indexOf(u);let g=!1,h=[];p.lastIndex=0;let y=p.exec(u.value);for(;y;){const C=y.index,b={index:y.index,input:y.input,stack:[...d,u]};let I=m(...y,b);if(typeof I=="string"&&(I=I.length>0?{type:"text",value:I}:void 0),I===!1)p.lastIndex=C+1;else{if(x!==C&&w({type:"text",value:u.value.slice(x,C)}),Array.isArray(I))for(const N of I)w(N);else I&&w(I);x=C+y[0].length,g=!0}if(!p.global)break;y=p.exec(u.value)}return g?(x<u.value.length&&w({type:"text",value:u.value.slice(x)}),f.children.splice(k,1,...h)):h=[u],k+h.length;function w(C){const b=h[h.length-1];b&&b.type==="text"&&C.type==="text"?b.value+=C.value:h.push(C)}}}function mO(e){if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const t=[],n=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<n.length;){const i=n[r];t.push([gO(i[0]),yO(i[1])])}return t}function gO(e){return typeof e=="string"?new RegExp(pO(e),"g"):e}function yO(e){return typeof e=="function"?e:function(){return e}}const Wc="phrasing",Gc=["autolink","link","image","label"];function xO(){return{transforms:[CO],enter:{literalAutolink:bO,literalAutolinkEmail:qc,literalAutolinkHttp:qc,literalAutolinkWww:qc},exit:{literalAutolink:EO,literalAutolinkEmail:SO,literalAutolinkHttp:wO,literalAutolinkWww:kO}}}function vO(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Wc,notInConstruct:Gc},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Wc,notInConstruct:Gc},{character:":",before:"[ps]",after:"\\/",inConstruct:Wc,notInConstruct:Gc}]}}function bO(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function qc(e){this.config.enter.autolinkProtocol.call(this,e)}function wO(e){this.config.exit.autolinkProtocol.call(this,e)}function kO(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function SO(e){this.config.exit.autolinkEmail.call(this,e)}function EO(e){this.exit(e)}function CO(e){hO(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,TO],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),_O]],{ignore:["link","linkReference"]})}function TO(e,t,n,r,i){let s="";if(!k2(i)||(/^w/i.test(t)&&(n=t+n,t="",s="http://"),!AO(n)))return!1;const a=IO(n+r);if(!a[0])return!1;const o={type:"link",title:null,url:s+t+a[0],children:[{type:"text",value:t+a[0]}]};return a[1]?[o,{type:"text",value:a[1]}]:o}function _O(e,t,n,r){return!k2(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function AO(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function IO(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const i=i0(e,"(");let s=i0(e,")");for(;r!==-1&&i>s;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),s++;return[e,n]}function k2(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||ui(n)||Nu(n))&&(!t||n!==47)}S2.peek=OO;function NO(){this.buffer()}function PO(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function jO(){this.buffer()}function RO(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function LO(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ln(this.sliceSerialize(e)).toLowerCase(),n.label=t}function DO(e){this.exit(e)}function MO(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ln(this.sliceSerialize(e)).toLowerCase(),n.label=t}function FO(e){this.exit(e)}function OO(){return"["}function S2(e,t,n,r){const i=n.createTracker(r);let s=i.move("[^");const a=n.enter("footnoteReference"),o=n.enter("reference");return s+=i.move(n.safe(n.associationId(e),{after:"]",before:s})),o(),a(),s+=i.move("]"),s}function zO(){return{enter:{gfmFootnoteCallString:NO,gfmFootnoteCall:PO,gfmFootnoteDefinitionLabelString:jO,gfmFootnoteDefinition:RO},exit:{gfmFootnoteCallString:LO,gfmFootnoteCall:DO,gfmFootnoteDefinitionLabelString:MO,gfmFootnoteDefinition:FO}}}function UO(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:S2},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,s,a){const o=s.createTracker(a);let l=o.move("[^");const u=s.enter("footnoteDefinition"),d=s.enter("label");return l+=o.move(s.safe(s.associationId(r),{before:l,after:"]"})),d(),l+=o.move("]:"),r.children&&r.children.length>0&&(o.shift(4),l+=o.move((t?`
`:" ")+s.indentLines(s.containerFlow(r,o.current()),t?E2:BO))),u(),l}}function BO(e,t,n){return t===0?e:E2(e,t,n)}function E2(e,t,n){return(n?"":"    ")+e}const VO=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Zh.attention=qO;Zh.peek=KO;function $O(){return{canContainEols:["delete"],enter:{strikethrough:WO},exit:{strikethrough:GO}}}function HO(){return{handlers:{delete:Zh},unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:VO}]}}function WO(e){this.enter({type:"delete",children:[],position:void 0},e)}function GO(e){this.exit(e)}function Zh(e,t,n,r){const i=n.createTracker(r),s=n.stack.includes("strikethrough")?"~":"~~",a=n.enter("strikethrough");let o=i.move(s);return o+=n.containerPhrasing(e,{...i.current(),before:o,after:"~"}),o+=i.move(s),a(),o}function qO(){return{construct:"strikethrough",markers:["~"],sizes:[2,1]}}function KO(){return"~"}function YO(e){return e.length}function XO(e,t){const n=t||{},r=(n.align||[]).concat(),i=n.stringLength||YO,s=[],a=[],o=[],l=[];let u=0,d=-1;for(;++d<e.length;){const v=[],k=[];let g=-1;for(e[d].length>u&&(u=e[d].length);++g<e[d].length;){const h=QO(e[d][g]);if(n.alignDelimiters!==!1){const y=i(h);k[g]=y,(l[g]===void 0||y>l[g])&&(l[g]=y)}v.push(h)}a[d]=v,o[d]=k}let f=-1;if(typeof r=="object"&&"length"in r)for(;++f<u;)s[f]=s0(r[f]);else{const v=s0(r);for(;++f<u;)s[f]=v}f=-1;const p=[],m=[];for(;++f<u;){const v=s[f];let k="",g="";v===99?(k=":",g=":"):v===108?k=":":v===114&&(g=":");let h=n.alignDelimiters===!1?1:Math.max(1,l[f]-k.length-g.length);const y=k+"-".repeat(h)+g;n.alignDelimiters!==!1&&(h=k.length+h+g.length,h>l[f]&&(l[f]=h),m[f]=h),p[f]=y}a.splice(1,0,p),o.splice(1,0,m),d=-1;const x=[];for(;++d<a.length;){const v=a[d],k=o[d];f=-1;const g=[];for(;++f<u;){const h=v[f]||"";let y="",w="";if(n.alignDelimiters!==!1){const C=l[f]-(k[f]||0),b=s[f];b===114?y=" ".repeat(C):b===99?C%2?(y=" ".repeat(C/2+.5),w=" ".repeat(C/2-.5)):(y=" ".repeat(C/2),w=y):w=" ".repeat(C)}n.delimiterStart!==!1&&!f&&g.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&h==="")&&(n.delimiterStart!==!1||f)&&g.push(" "),n.alignDelimiters!==!1&&g.push(y),g.push(h),n.alignDelimiters!==!1&&g.push(w),n.padding!==!1&&g.push(" "),(n.delimiterEnd!==!1||f!==u-1)&&g.push("|")}x.push(n.delimiterEnd===!1?g.join("").replace(/ +$/,""):g.join(""))}return x.join(`
`)}function QO(e){return e==null?"":String(e)}function s0(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}const ZO=Ru(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function JO(e,t,n,r){const i=n.enter("blockquote"),s=n.createTracker(r);s.move("> "),s.shift(2);const a=n.indentLines(n.containerFlow(e,s.current()),e4);return i(),a}function e4(e,t,n){return">"+(n?"":" ")+e}function t4(e,t){return a0(e,t.inConstruct,!0)&&!a0(e,t.notInConstruct,!1)}function a0(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function o0(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;){const s=n.unsafe[i];if(s.character===`
`&&!s.before&&!s.after&&t4(n.stack,s))return/[\t ]/.test(r.before)?"":" "}return`\\
`}function n4(e,t){const n=String(e);let r=n.indexOf(t),i=r,s=0,a=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++s>a&&(a=s):s=1,i=r+t.length,r=n.indexOf(t,i);return a}function r4(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^\n\r ]/.test(e.value)&&!/^[\t ]*(?:[\n\r]|$)|(?:^|[\n\r])[\t ]*$/.test(e.value))}function i4(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function s4(e,t,n,r){const i=i4(n),s=e.value||"";if(r4(e,n)){const f=n.enter("codeIndented"),p=n.indentLines(s,a4);return f(),p}const a=n.createTracker(r),o=i.repeat(Math.max(n4(s,i)+1,3)),l=n.enter("codeFenced"),u=i==="`"?"GraveAccent":"Tilde";let d=a.move(o);if(e.lang){const f=n.enter(`codeFencedLang${u}`);d+=a.move(n.safe(e.lang,{before:d,after:" ",encode:["`"],...a.current()})),f()}if(e.lang&&e.meta){const f=n.enter(`codeFencedMeta${u}`);d+=a.move(" "),d+=a.move(n.safe(e.meta,{before:d,after:`
`,encode:["`"],...a.current()})),f()}return d+=a.move(`
`),s&&(d+=a.move(s+`
`)),d+=a.move(o),l(),d}function a4(e,t,n){return(n?"":"    ")+e}function Jh(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function o4(e,t,n,r){const i=Jh(n),s=i==='"'?"Quote":"Apostrophe",a=n.enter("definition");let o=n.enter("label");const l=n.createTracker(r);let u=l.move("[");return u+=l.move(n.safe(n.associationId(e),{before:u,after:"]",...l.current()})),u+=l.move("]: "),o(),!e.url||/[\0- \u007F]/.test(e.url)?(o=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(o=n.enter("destinationRaw"),u+=l.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...l.current()}))),o(),e.title&&(o=n.enter(`title${s}`),u+=l.move(" "+i),u+=l.move(n.safe(e.title,{before:u,after:i,...l.current()})),u+=l.move(i),o()),a(),u}function l4(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}em.attention=u4;em.peek=c4;function em(e,t,n,r){const i=n.enter("phrasing"),s=n.containerPhrasing({type:"root",children:[e]},r);return i(),s}function u4(e,t){return{construct:"emphasis",markers:l4(t)==="*"?["*","_"]:["_","*"],sizes:[1]}}function c4(e,t,n){return n.options.emphasis||"*"}function d4(e){return"&#x"+e.toString(16).toUpperCase()+";"}function f4(e,t){let n=!1;return Xh(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,Af}),!!((!e.depth||e.depth<3)&&$h(e)&&(t.options.setext||n))}function p4(e,t,n,r){const i=Math.max(Math.min(6,e.depth||1),1),s=n.createTracker(r);if(f4(e,n)){const f=n.enter("headingSetext"),p=n.enter("phrasing"),m=n.containerPhrasing(e,{...s.current(),before:`
`,after:`
`});return p(),f(),m+`
`+(i===1?"=":"-").repeat(m.length-(Math.max(m.lastIndexOf("\r"),m.lastIndexOf(`
`))+1))}const a="#".repeat(i),o=n.enter("headingAtx"),l=n.enter("phrasing");s.move(a+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...s.current()});const d=u.charCodeAt(0);return(d===9||d===32)&&(u=d4(d)+u.slice(1)),u=u?a+" "+u:a,n.options.closeAtx&&(u+=" "+a),l(),o(),u}C2.peek=h4;function C2(e){return e.value||""}function h4(){return"<"}T2.peek=m4;function T2(e,t,n,r){const i=Jh(n),s=i==='"'?"Quote":"Apostrophe",a=n.enter("image");let o=n.enter("label");const l=n.createTracker(r);let u=l.move("![");return u+=l.move(n.safe(e.alt,{before:u,after:"]",...l.current()})),u+=l.move("]("),o(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(o=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(o=n.enter("destinationRaw"),u+=l.move(n.safe(e.url,{before:u,after:e.title?" ":")",...l.current()}))),o(),e.title&&(o=n.enter(`title${s}`),u+=l.move(" "+i),u+=l.move(n.safe(e.title,{before:u,after:i,...l.current()})),u+=l.move(i),o()),u+=l.move(")"),a(),u}function m4(){return"!"}_2.peek=g4;function _2(e,t,n,r){const i=e.referenceType,s=n.enter("imageReference");let a=n.enter("label");const o=n.createTracker(r);let l=o.move("![");const u=n.safe(e.alt,{before:l,after:"]",...o.current()});l+=o.move(u+"]["),a();const d=n.stack;n.stack=d.filter(function(p){return p!=="phrasing"}),a=n.enter("reference");const f=n.safe(n.associationId(e),{before:l,after:"]",...o.current()});return a(),n.stack=d,s(),i==="full"||!u||u!==f?l+=o.move(f+"]"):i==="shortcut"?l=l.slice(0,-1):l+=o.move("]"),l}function g4(){return"!"}A2.peek=y4;function A2(e,t,n){let r=e.value||"",i="`",s=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^\n\r ]/.test(r)&&(/^[\n\r ]/.test(r)&&/[\n\r ]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++s<n.unsafe.length;){const a=n.unsafe[s],o=n.compilePattern(a);if(!a.atBreak)continue;let l;for(;l=o.exec(r);){let u=l.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(l.index+1)}}return i+r+i}function y4(){return"`"}function I2(e,t){const n=$h(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][+\-.a-z]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}N2.peek=x4;function N2(e,t,n,r){const i=Jh(n),s=i==='"'?"Quote":"Apostrophe",a=n.createTracker(r);if(I2(e,n)){const d=n.stack;n.stack=d.filter(function(m){return m!=="phrasing"});const f=n.enter("autolink");let p=a.move("<");return p+=a.move(n.containerPhrasing(e,{before:p,after:">",...a.current()})),p+=a.move(">"),f(),n.stack=d,p}const o=n.enter("link");let l=n.enter("label"),u=a.move("[");return u+=a.move(n.containerPhrasing(e,{before:u,after:"](",...a.current()})),u+=a.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=a.move("<"),u+=a.move(n.safe(e.url,{before:u,after:">",...a.current()})),u+=a.move(">")):(l=n.enter("destinationRaw"),u+=a.move(n.safe(e.url,{before:u,after:e.title?" ":")",...a.current()}))),l(),e.title&&(l=n.enter(`title${s}`),u+=a.move(" "+i),u+=a.move(n.safe(e.title,{before:u,after:i,...a.current()})),u+=a.move(i),l()),u+=a.move(")"),o(),u}function x4(e,t,n){return I2(e,n)?"<":"["}P2.peek=v4;function P2(e,t,n,r){const i=e.referenceType,s=n.enter("linkReference");let a=n.enter("label");const o=n.createTracker(r);let l=o.move("[");const u=n.containerPhrasing(e,{before:l,after:"]",...o.current()});l+=o.move(u+"]["),a();const d=n.stack;n.stack=d.filter(function(p){return p!=="phrasing"}),a=n.enter("reference");const f=n.safe(n.associationId(e),{before:l,after:"]",...o.current()});return a(),n.stack=d,s(),i==="full"||!u||u!==f?l+=o.move(f+"]"):i==="shortcut"?l=l.slice(0,-1):l+=o.move("]"),l}function v4(){return"["}function tm(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function b4(e){const t=tm(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function w4(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function j2(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function k4(e,t,n,r){const i=n.enter("list"),s=n.bulletCurrent;let a=e.ordered?w4(n):tm(n);const o=e.ordered?a==="."?")":".":b4(n);let l=t&&n.bulletLastUsed?a===n.bulletLastUsed:!1;if(!e.ordered){const d=e.children?e.children[0]:void 0;if((a==="*"||a==="-")&&d&&(!d.children||!d.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(l=!0),j2(n)===a&&d){let f=-1;for(;++f<e.children.length;){const p=e.children[f];if(p&&p.type==="listItem"&&p.children&&p.children[0]&&p.children[0].type==="thematicBreak"){l=!0;break}}}}l&&(a=o),n.bulletCurrent=a;const u=n.containerFlow(e,r);return n.bulletLastUsed=a,n.bulletCurrent=s,i(),u}function S4(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function E4(e,t,n,r){const i=S4(n);let s=n.bulletCurrent||tm(n);t&&t.type==="list"&&t.ordered&&(s=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+s);let a=s.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(a=Math.ceil(a/4)*4);const o=n.createTracker(r);o.move(s+" ".repeat(a-s.length)),o.shift(a);const l=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,o.current()),d);return l(),u;function d(f,p,m){return p?(m?"":" ".repeat(a))+f:(m?s:s+" ".repeat(a-s.length))+f}}function C4(e,t,n,r){const i=n.enter("paragraph"),s=n.enter("phrasing"),a=n.containerPhrasing(e,r);return s(),i(),a}function T4(e,t,n,r){if(!e.children.some(function(o){return ZO(o)}))return n.containerFlow(e,r);const s=n.enter("phrasing"),a=n.containerPhrasing(e,r);return s(),a}function _4(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}nm.attention=A4;nm.peek=I4;function nm(e,t,n,r){const i=n.enter("phrasing"),s=n.containerPhrasing({type:"root",children:[e]},r);return i(),s}function A4(e,t){return{construct:"strong",markers:_4(t)==="*"?["*","_"]:["_","*"],sizes:[2]}}function I4(e,t,n){return n.options.strong||"*"}function N4(e,t,n,r){const i=t?t.children:[],s=i.indexOf(e);return n.safe(e.value,{...r,afterNode:i[s+1],beforeNode:i[s-1]})}function P4(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function j4(e,t,n){const r=(j2(n)+(n.options.ruleSpaces?" ":"")).repeat(P4(n));return n.options.ruleSpaces?r.slice(0,-1):r}const R2={blockquote:JO,break:o0,code:s4,definition:o4,emphasis:em,hardBreak:o0,heading:p4,html:C2,image:T2,imageReference:_2,inlineCode:A2,link:N2,linkReference:P2,list:k4,listItem:E4,paragraph:C4,root:T4,strong:nm,text:N4,thematicBreak:j4};function R4(){return{enter:{table:L4,tableData:l0,tableHeader:l0,tableRow:M4},exit:{codeText:F4,table:D4,tableData:Kc,tableHeader:Kc,tableRow:Kc}}}function L4(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function D4(e){this.exit(e),this.data.inTable=void 0}function M4(e){this.enter({type:"tableRow",children:[]},e)}function Kc(e){this.exit(e)}function l0(e){this.enter({type:"tableCell",children:[]},e)}function F4(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,O4));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function O4(e,t){return t==="|"?t:e}function z4(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,s=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:p,table:a,tableCell:l,tableRow:o}};function a(m,x,v,k){return u(d(m,v,k),m.align)}function o(m,x,v,k){const g=f(m,v,k),h=u([g]);return h.slice(0,h.indexOf(`
`))}function l(m,x,v,k){const g=v.enter("tableCell"),h=v.enter("phrasing"),y=v.containerPhrasing(m,{...k,before:s,after:s});return h(),g(),y}function u(m,x){return XO(m,{align:x,alignDelimiters:r,padding:n,stringLength:i})}function d(m,x,v){const k=m.children;let g=-1;const h=[],y=x.enter("table");for(;++g<k.length;)h[g]=f(k[g],x,v);return y(),h}function f(m,x,v){const k=m.children;let g=-1;const h=[],y=x.enter("tableRow");for(;++g<k.length;)h[g]=l(k[g],m,x,v);return y(),h}function p(m,x,v){let k=R2.inlineCode(m,x,v);return v.stack.includes("tableCell")&&(k=k.replace(/\|/g,"\\$&")),k}}function U4(){return{exit:{taskListCheckValueChecked:u0,taskListCheckValueUnchecked:u0,paragraph:V4}}}function B4(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:$4}}}function u0(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function V4(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const r=n.children[0];if(r&&r.type==="text"){const i=t.children;let s=-1,a;for(;++s<i.length;){const o=i[s];if(o.type==="paragraph"){a=o;break}}a===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function $4(e,t,n,r){const i=e.children[0],s=typeof e.checked=="boolean"&&i&&i.type==="paragraph",a="["+(e.checked?"x":" ")+"] ",o=n.createTracker(r);s&&o.move(a);let l=R2.listItem(e,t,n,{...r,...o.current()});return s&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),l;function u(d){return d+a}}function H4(){return[xO(),zO(),$O(),R4(),U4()]}function W4(e){return{extensions:[vO(),UO(e),HO(),z4(e),B4()]}}const G4={tokenize:Z4,partial:!0},L2={tokenize:J4,partial:!0},D2={tokenize:ez,partial:!0},M2={tokenize:tz,partial:!0},q4={tokenize:nz,partial:!0},F2={name:"wwwAutolink",tokenize:X4,previous:z2},O2={name:"protocolAutolink",tokenize:Q4,previous:U2},Xn={name:"emailAutolink",tokenize:Y4,previous:B2},En={};function K4(){return{text:En}}let Dr=48;for(;Dr<123;)En[Dr]=Xn,Dr++,Dr===58?Dr=65:Dr===91&&(Dr=97);En[43]=Xn;En[45]=Xn;En[46]=Xn;En[95]=Xn;En[72]=[Xn,O2];En[104]=[Xn,O2];En[87]=[Xn,F2];En[119]=[Xn,F2];function Y4(e,t,n){const r=this;let i,s;return a;function a(f){return!jf(f)||!B2.call(r,r.previous)||rm(r.events)?n(f):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),o(f))}function o(f){return jf(f)?(e.consume(f),o):f===64?(e.consume(f),l):n(f)}function l(f){return f===46?e.check(q4,d,u)(f):f===45||f===95||ot(f)?(s=!0,e.consume(f),l):d(f)}function u(f){return e.consume(f),i=!0,l}function d(f){return s&&i&&dt(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(f)):n(f)}}function X4(e,t,n){const r=this;return i;function i(a){return a!==87&&a!==119||!z2.call(r,r.previous)||rm(r.events)?n(a):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(G4,e.attempt(L2,e.attempt(D2,s),n),n)(a))}function s(a){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(a)}}function Q4(e,t,n){const r=this;let i="",s=!1;return a;function a(f){return(f===72||f===104)&&U2.call(r,r.previous)&&!rm(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(f),e.consume(f),o):n(f)}function o(f){if(dt(f)&&i.length<5)return i+=String.fromCodePoint(f),e.consume(f),o;if(f===58){const p=i.toLowerCase();if(p==="http"||p==="https")return e.consume(f),l}return n(f)}function l(f){return f===47?(e.consume(f),s?u:(s=!0,l)):n(f)}function u(f){return f===null||ql(f)||ke(f)||ui(f)||Nu(f)?n(f):e.attempt(L2,e.attempt(D2,d),n)(f)}function d(f){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(f)}}function Z4(e,t,n){let r=0;return i;function i(a){return(a===87||a===119)&&r<3?(r++,e.consume(a),i):a===46&&r===3?(e.consume(a),s):n(a)}function s(a){return a===null?n(a):t(a)}}function J4(e,t,n){let r,i,s;return a;function a(u){return u===46||u===95?e.check(M2,l,o)(u):u===null||ke(u)||ui(u)||u!==45&&Nu(u)?l(u):(s=!0,e.consume(u),a)}function o(u){return u===95?r=!0:(i=r,r=void 0),e.consume(u),a}function l(u){return i||r||!s?n(u):t(u)}}function ez(e,t){let n=0,r=0;return i;function i(a){return a===40?(n++,e.consume(a),i):a===41&&r<n?s(a):a===33||a===34||a===38||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===60||a===63||a===93||a===95||a===126?e.check(M2,t,s)(a):a===null||ke(a)||ui(a)?t(a):(e.consume(a),i)}function s(a){return a===41&&r++,e.consume(a),i}}function tz(e,t,n){return r;function r(o){return o===33||o===34||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===63||o===95||o===126?(e.consume(o),r):o===38?(e.consume(o),s):o===93?(e.consume(o),i):o===60||o===null||ke(o)||ui(o)?t(o):n(o)}function i(o){return o===null||o===40||o===91||ke(o)||ui(o)?t(o):r(o)}function s(o){return dt(o)?a(o):n(o)}function a(o){return o===59?(e.consume(o),r):dt(o)?(e.consume(o),a):n(o)}}function nz(e,t,n){return r;function r(s){return e.consume(s),i}function i(s){return ot(s)?n(s):t(s)}}function z2(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||ke(e)}function U2(e){return!dt(e)}function B2(e){return!(e===47||jf(e))}function jf(e){return e===43||e===45||e===46||e===95||ot(e)}function rm(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const rz={tokenize:dz,partial:!0};function iz(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:lz,continuation:{tokenize:uz},exit:cz}},text:{91:{name:"gfmFootnoteCall",tokenize:oz},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:sz,resolveTo:az}}}}function sz(e,t,n){const r=this;let i=r.events.length;const s=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let a;for(;i--;){const l=r.events[i][1];if(l.type==="labelImage"){a=l;break}if(l.type==="gfmFootnoteCall"||l.type==="labelLink"||l.type==="label"||l.type==="image"||l.type==="link")break}return o;function o(l){if(!a||!a._balanced)return n(l);const u=ln(r.sliceSerialize({start:a.end,end:r.now()}));return u.codePointAt(0)!==94||!s.includes(u.slice(1))?n(l):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(l),e.exit("gfmFootnoteCallLabelMarker"),t(l))}}function az(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const s={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},a={type:"chunkString",contentType:"string",start:Object.assign({},s.start),end:Object.assign({},s.end)},o=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",s,t],["enter",a,t],["exit",a,t],["exit",s,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...o),e}function oz(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let s=0,a;return o;function o(f){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),l}function l(f){return f!==94?n(f):(e.enter("gfmFootnoteCallMarker"),e.consume(f),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(f){if(s>999||f===93&&!a||f===null||f===91||ke(f))return n(f);if(f===93){e.exit("chunkString");const p=e.exit("gfmFootnoteCallString");return i.includes(ln(r.sliceSerialize(p)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(f)}return ke(f)||(a=!0),s++,e.consume(f),f===92?d:u}function d(f){return f===91||f===92||f===93?(e.consume(f),s++,u):u(f)}}function lz(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let s,a=0,o;return l;function l(x){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(x),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(x){return x===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(x),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",d):n(x)}function d(x){if(a>999||x===93&&!o||x===null||x===91||ke(x))return n(x);if(x===93){e.exit("chunkString");const v=e.exit("gfmFootnoteDefinitionLabelString");return s=ln(r.sliceSerialize(v)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(x),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),p}return ke(x)||(o=!0),a++,e.consume(x),x===92?f:d}function f(x){return x===91||x===92||x===93?(e.consume(x),a++,d):d(x)}function p(x){return x===58?(e.enter("definitionMarker"),e.consume(x),e.exit("definitionMarker"),i.includes(s)||i.push(s),ye(e,m,"gfmFootnoteDefinitionWhitespace")):n(x)}function m(x){return t(x)}}function uz(e,t,n){return e.check(to,t,e.attempt(rz,t,n))}function cz(e){e.exit("gfmFootnoteDefinition")}function dz(e,t,n){const r=this;return ye(e,i,"gfmFootnoteDefinitionIndent",5);function i(s){const a=r.events[r.events.length-1];return a&&a[1].type==="gfmFootnoteDefinitionIndent"&&a[2].sliceSerialize(a[1],!0).length===4?t(s):n(s)}}function fz(e){let n=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:s,resolveAll:i};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(a,o){let l=-1;for(;++l<a.length;)if(a[l][0]==="enter"&&a[l][1].type==="strikethroughSequenceTemporary"&&a[l][1]._close){let u=l;for(;u--;)if(a[u][0]==="exit"&&a[u][1].type==="strikethroughSequenceTemporary"&&a[u][1]._open&&a[l][1].end.offset-a[l][1].start.offset===a[u][1].end.offset-a[u][1].start.offset){a[l][1].type="strikethroughSequence",a[u][1].type="strikethroughSequence";const d={type:"strikethrough",start:Object.assign({},a[u][1].start),end:Object.assign({},a[l][1].end)},f={type:"strikethroughText",start:Object.assign({},a[u][1].end),end:Object.assign({},a[l][1].start)},p=[["enter",d,o],["enter",a[u][1],o],["exit",a[u][1],o],["enter",f,o]],m=o.parser.constructs.insideSpan.null;m&&on(p,p.length,0,Pu(m,a.slice(u+1,l),o)),on(p,p.length,0,[["exit",f,o],["enter",a[l][1],o],["exit",a[l][1],o],["exit",d,o]]),on(a,u-1,l-u+3,p),l=u+p.length-2;break}}for(l=-1;++l<a.length;)a[l][1].type==="strikethroughSequenceTemporary"&&(a[l][1].type="data");return a}function s(a,o,l){const u=this.previous,d=this.events;let f=0;return p;function p(x){return u===126&&d[d.length-1][1].type!=="characterEscape"?l(x):(a.enter("strikethroughSequenceTemporary"),m(x))}function m(x){const v=Yl(u);if(x===126)return f>1?l(x):(a.consume(x),f++,m);if(f<2&&!n)return l(x);const k=a.exit("strikethroughSequenceTemporary"),g=Yl(x);return k._open=!g||g===2&&!!v,k._close=!v||v===2&&!!g,o(x)}}}class pz{constructor(){this.map=[],this.index=new Map}add(t,n,r){hz(this,t,n,r)}consume(t){if(this.map.sort(function(s,a){return s[0]-a[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(const s of i)t.push(s);i=r.pop()}this.map.length=0,this.index.clear()}}function hz(e,t,n,r){if(n===0&&r.length===0)return;const i=e.index.get(t);if(i){i[1]+=n,i[2].push(...r);return}const s=[t,n,r];e.map.push(s),e.index.set(t,s)}function mz(e,t){let n=!1;const r=[];for(;t<e.length;){const i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const s=r.length-1;r[s]=r[s]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function gz(){return{flow:{null:{name:"table",tokenize:yz,resolveAll:xz}}}}function yz(e,t,n){const r=this;let i=0,s=0,a;return o;function o(_){let j=r.events.length-1;for(;j>-1;){const{type:q}=r.events[j][1];if(q==="lineEnding"||q==="linePrefix")j--;else break}const z=j>-1?r.events[j][1].type:null,G=z==="tableHead"||z==="tableRow"?b:l;return G===b&&r.parser.lazy[r.now().line]?n(_):G(_)}function l(_){return e.enter("tableHead"),e.enter("tableRow"),u(_)}function u(_){return _===124||(a=!0,s+=1),d(_)}function d(_){return _===null?n(_):Z(_)?s>1?(s=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),m):n(_):oe(_)?ye(e,d,"whitespace")(_):(s+=1,a&&(a=!1,i+=1),_===124?(e.enter("tableCellDivider"),e.consume(_),e.exit("tableCellDivider"),a=!0,d):(e.enter("data"),f(_)))}function f(_){return _===null||_===124||ke(_)?(e.exit("data"),d(_)):(e.consume(_),_===92?p:f)}function p(_){return _===92||_===124?(e.consume(_),f):f(_)}function m(_){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(_):(e.enter("tableDelimiterRow"),a=!1,oe(_)?ye(e,x,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(_):x(_))}function x(_){return _===45||_===58?k(_):_===124?(a=!0,e.enter("tableCellDivider"),e.consume(_),e.exit("tableCellDivider"),v):C(_)}function v(_){return oe(_)?ye(e,k,"whitespace")(_):k(_)}function k(_){return _===58?(s+=1,a=!0,e.enter("tableDelimiterMarker"),e.consume(_),e.exit("tableDelimiterMarker"),g):_===45?(s+=1,g(_)):_===null||Z(_)?w(_):C(_)}function g(_){return _===45?(e.enter("tableDelimiterFiller"),h(_)):C(_)}function h(_){return _===45?(e.consume(_),h):_===58?(a=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(_),e.exit("tableDelimiterMarker"),y):(e.exit("tableDelimiterFiller"),y(_))}function y(_){return oe(_)?ye(e,w,"whitespace")(_):w(_)}function w(_){return _===124?x(_):_===null||Z(_)?!a||i!==s?C(_):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(_)):C(_)}function C(_){return n(_)}function b(_){return e.enter("tableRow"),I(_)}function I(_){return _===124?(e.enter("tableCellDivider"),e.consume(_),e.exit("tableCellDivider"),I):_===null||Z(_)?(e.exit("tableRow"),t(_)):oe(_)?ye(e,I,"whitespace")(_):(e.enter("data"),N(_))}function N(_){return _===null||_===124||ke(_)?(e.exit("data"),I(_)):(e.consume(_),_===92?R:N)}function R(_){return _===92||_===124?(e.consume(_),N):N(_)}}function xz(e,t){let n=-1,r=!0,i=0,s=[0,0,0,0],a=[0,0,0,0],o=!1,l=0,u,d,f;const p=new pz;for(;++n<e.length;){const m=e[n],x=m[1];m[0]==="enter"?x.type==="tableHead"?(o=!1,l!==0&&(c0(p,t,l,u,d),d=void 0,l=0),u={type:"table",start:Object.assign({},x.start),end:Object.assign({},x.end)},p.add(n,0,[["enter",u,t]])):x.type==="tableRow"||x.type==="tableDelimiterRow"?(r=!0,f=void 0,s=[0,0,0,0],a=[0,n+1,0,0],o&&(o=!1,d={type:"tableBody",start:Object.assign({},x.start),end:Object.assign({},x.end)},p.add(n,0,[["enter",d,t]])),i=x.type==="tableDelimiterRow"?2:d?3:1):i&&(x.type==="data"||x.type==="tableDelimiterMarker"||x.type==="tableDelimiterFiller")?(r=!1,a[2]===0&&(s[1]!==0&&(a[0]=a[1],f=jo(p,t,s,i,void 0,f),s=[0,0,0,0]),a[2]=n)):x.type==="tableCellDivider"&&(r?r=!1:(s[1]!==0&&(a[0]=a[1],f=jo(p,t,s,i,void 0,f)),s=a,a=[s[1],n,0,0])):x.type==="tableHead"?(o=!0,l=n):x.type==="tableRow"||x.type==="tableDelimiterRow"?(l=n,s[1]!==0?(a[0]=a[1],f=jo(p,t,s,i,n,f)):a[1]!==0&&(f=jo(p,t,a,i,n,f)),i=0):i&&(x.type==="data"||x.type==="tableDelimiterMarker"||x.type==="tableDelimiterFiller")&&(a[3]=n)}for(l!==0&&c0(p,t,l,u,d),p.consume(t.events),n=-1;++n<t.events.length;){const m=t.events[n];m[0]==="enter"&&m[1].type==="table"&&(m[1]._align=mz(t.events,n))}return e}function jo(e,t,n,r,i,s){const a=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",o="tableContent";n[0]!==0&&(s.end=Object.assign({},gi(t.events,n[0])),e.add(n[0],0,[["exit",s,t]]));const l=gi(t.events,n[1]);if(s={type:a,start:Object.assign({},l),end:Object.assign({},l)},e.add(n[1],0,[["enter",s,t]]),n[2]!==0){const u=gi(t.events,n[2]),d=gi(t.events,n[3]),f={type:o,start:Object.assign({},u),end:Object.assign({},d)};if(e.add(n[2],0,[["enter",f,t]]),r!==2){const p=t.events[n[2]],m=t.events[n[3]];if(p[1].end=Object.assign({},m[1].end),p[1].type="chunkText",p[1].contentType="text",n[3]>n[2]+1){const x=n[2]+1,v=n[3]-n[2]-1;e.add(x,v,[])}}e.add(n[3]+1,0,[["exit",f,t]])}return i!==void 0&&(s.end=Object.assign({},gi(t.events,i)),e.add(i,0,[["exit",s,t]]),s=void 0),s}function c0(e,t,n,r,i){const s=[],a=gi(t.events,n);i&&(i.end=Object.assign({},a),s.push(["exit",i,t])),r.end=Object.assign({},a),s.push(["exit",r,t]),e.add(n+1,0,s)}function gi(e,t){const n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const vz={name:"tasklistCheck",tokenize:wz};function bz(){return{text:{91:vz}}}function wz(e,t,n){const r=this;return i;function i(l){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(l):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),s)}function s(l){return ke(l)?(e.enter("taskListCheckValueUnchecked"),e.consume(l),e.exit("taskListCheckValueUnchecked"),a):l===88||l===120?(e.enter("taskListCheckValueChecked"),e.consume(l),e.exit("taskListCheckValueChecked"),a):n(l)}function a(l){return l===93?(e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),o):n(l)}function o(l){return Z(l)?t(l):oe(l)?e.check({tokenize:kz},t,n)(l):n(l)}}function kz(e,t,n){return ye(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function Sz(e){return Zk([K4(),iz(),fz(e),gz(),bz()])}const Ez={};function Cz(e){const t=this,n=e||Ez,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),s=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),a=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(Sz(n)),s.push(H4()),a.push(W4(n))}var V2={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,a={},o={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function h(y){return y instanceof l?new l(y.type,h(y.content),y.alias):Array.isArray(y)?y.map(h):y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(h){return Object.prototype.toString.call(h).slice(8,-1)},objId:function(h){return h.__id||Object.defineProperty(h,"__id",{value:++s}),h.__id},clone:function h(y,w){w=w||{};var C,b;switch(o.util.type(y)){case"Object":if(b=o.util.objId(y),w[b])return w[b];C={},w[b]=C;for(var I in y)y.hasOwnProperty(I)&&(C[I]=h(y[I],w));return C;case"Array":return b=o.util.objId(y),w[b]?w[b]:(C=[],w[b]=C,y.forEach(function(N,R){C[R]=h(N,w)}),C);default:return y}},getLanguage:function(h){for(;h;){var y=i.exec(h.className);if(y)return y[1].toLowerCase();h=h.parentElement}return"none"},setLanguage:function(h,y){h.className=h.className.replace(RegExp(i,"gi"),""),h.classList.add("language-"+y)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(C){var h=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack)||[])[1];if(h){var y=document.getElementsByTagName("script");for(var w in y)if(y[w].src==h)return y[w]}return null}},isActive:function(h,y,w){for(var C="no-"+y;h;){var b=h.classList;if(b.contains(y))return!0;if(b.contains(C))return!1;h=h.parentElement}return!!w}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(h,y){var w=o.util.clone(o.languages[h]);for(var C in y)w[C]=y[C];return w},insertBefore:function(h,y,w,C){C=C||o.languages;var b=C[h],I={};for(var N in b)if(b.hasOwnProperty(N)){if(N==y)for(var R in w)w.hasOwnProperty(R)&&(I[R]=w[R]);w.hasOwnProperty(N)||(I[N]=b[N])}var _=C[h];return C[h]=I,o.languages.DFS(o.languages,function(j,z){z===_&&j!=h&&(this[j]=I)}),I},DFS:function h(y,w,C,b){b=b||{};var I=o.util.objId;for(var N in y)if(y.hasOwnProperty(N)){w.call(y,N,y[N],C||N);var R=y[N],_=o.util.type(R);_==="Object"&&!b[I(R)]?(b[I(R)]=!0,h(R,w,null,b)):_==="Array"&&!b[I(R)]&&(b[I(R)]=!0,h(R,w,N,b))}}},plugins:{},highlightAll:function(h,y){o.highlightAllUnder(document,h,y)},highlightAllUnder:function(h,y,w){var C={callback:w,container:h,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",C),C.elements=Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)),o.hooks.run("before-all-elements-highlight",C);for(var b=0,I;I=C.elements[b++];)o.highlightElement(I,y===!0,C.callback)},highlightElement:function(h,y,w){var C=o.util.getLanguage(h),b=o.languages[C];o.util.setLanguage(h,C);var I=h.parentElement;I&&I.nodeName.toLowerCase()==="pre"&&o.util.setLanguage(I,C);var N=h.textContent,R={element:h,language:C,grammar:b,code:N};function _(z){R.highlightedCode=z,o.hooks.run("before-insert",R),R.element.innerHTML=R.highlightedCode,o.hooks.run("after-highlight",R),o.hooks.run("complete",R),w&&w.call(R.element)}if(o.hooks.run("before-sanity-check",R),I=R.element.parentElement,I&&I.nodeName.toLowerCase()==="pre"&&!I.hasAttribute("tabindex")&&I.setAttribute("tabindex","0"),!R.code){o.hooks.run("complete",R),w&&w.call(R.element);return}if(o.hooks.run("before-highlight",R),!R.grammar){_(o.util.encode(R.code));return}if(y&&r.Worker){var j=new Worker(o.filename);j.onmessage=function(z){_(z.data)},j.postMessage(JSON.stringify({language:R.language,code:R.code,immediateClose:!0}))}else _(o.highlight(R.code,R.grammar,R.language))},highlight:function(h,y,w){var C={code:h,grammar:y,language:w};if(o.hooks.run("before-tokenize",C),!C.grammar)throw new Error('The language "'+C.language+'" has no grammar.');return C.tokens=o.tokenize(C.code,C.grammar),o.hooks.run("after-tokenize",C),l.stringify(o.util.encode(C.tokens),C.language)},tokenize:function(h,y){var w=y.rest;if(w){for(var C in w)y[C]=w[C];delete y.rest}var b=new f;return p(b,b.head,h),d(h,b,y,b.head,0),x(b)},hooks:{all:{},add:function(h,y){var w=o.hooks.all;w[h]=w[h]||[],w[h].push(y)},run:function(h,y){var w=o.hooks.all[h];if(!(!w||!w.length))for(var C=0,b;b=w[C++];)b(y)}},Token:l};r.Prism=o;function l(h,y,w,C){this.type=h,this.content=y,this.alias=w,this.length=(C||"").length|0}l.stringify=function h(y,w){if(typeof y=="string")return y;if(Array.isArray(y)){var C="";return y.forEach(function(_){C+=h(_,w)}),C}var b={type:y.type,content:h(y.content,w),tag:"span",classes:["token",y.type],attributes:{},language:w},I=y.alias;I&&(Array.isArray(I)?Array.prototype.push.apply(b.classes,I):b.classes.push(I)),o.hooks.run("wrap",b);var N="";for(var R in b.attributes)N+=" "+R+'="'+(b.attributes[R]||"").replace(/"/g,"&quot;")+'"';return"<"+b.tag+' class="'+b.classes.join(" ")+'"'+N+">"+b.content+"</"+b.tag+">"};function u(h,y,w,C){h.lastIndex=y;var b=h.exec(w);if(b&&C&&b[1]){var I=b[1].length;b.index+=I,b[0]=b[0].slice(I)}return b}function d(h,y,w,C,b,I){for(var N in w)if(!(!w.hasOwnProperty(N)||!w[N])){var R=w[N];R=Array.isArray(R)?R:[R];for(var _=0;_<R.length;++_){if(I&&I.cause==N+","+_)return;var j=R[_],z=j.inside,G=!!j.lookbehind,q=!!j.greedy,H=j.alias;if(q&&!j.pattern.global){var le=j.pattern.toString().match(/[imsuy]*$/)[0];j.pattern=RegExp(j.pattern.source,le+"g")}for(var Q=j.pattern||j,L=C.next,B=b;L!==y.tail&&!(I&&B>=I.reach);B+=L.value.length,L=L.next){var S=L.value;if(y.length>h.length)return;if(!(S instanceof l)){var Y=1,ee;if(q){if(ee=u(Q,B,h,G),!ee||ee.index>=h.length)break;var se=ee.index,A=ee.index+ee[0].length,ue=B;for(ue+=L.value.length;se>=ue;)L=L.next,ue+=L.value.length;if(ue-=L.value.length,B=ue,L.value instanceof l)continue;for(var Se=L;Se!==y.tail&&(ue<A||typeof Se.value=="string");Se=Se.next)Y++,ue+=Se.value.length;Y--,S=h.slice(B,ue),ee.index-=B}else if(ee=u(Q,0,S,G),!ee)continue;var se=ee.index,Ee=ee[0],$e=S.slice(0,se),Ye=S.slice(se+Ee.length),pe=B+S.length;I&&pe>I.reach&&(I.reach=pe);var et=L.prev;$e&&(et=p(y,et,$e),B+=$e.length),m(y,et,Y);var St=new l(N,z?o.tokenize(Ee,z):Ee,H,Ee);if(L=p(y,et,St),Ye&&p(y,L,Ye),Y>1){var Ge={cause:N+","+_,reach:pe};d(h,y,w,L.prev,B,Ge),I&&Ge.reach>I.reach&&(I.reach=Ge.reach)}}}}}}function f(){var h={value:null,prev:null,next:null},y={value:null,prev:h,next:null};h.next=y,this.head=h,this.tail=y,this.length=0}function p(h,y,w){var C=y.next,b={value:w,prev:y,next:C};return y.next=b,C.prev=b,h.length++,b}function m(h,y,w){for(var C=y.next,b=0;b<w&&C!==h.tail;b++)C=C.next;y.next=C,C.prev=y,h.length-=b}function x(h){for(var y=[],w=h.head.next;w!==h.tail;)y.push(w.value),w=w.next;return y}if(!r.document)return r.addEventListener&&(o.disableWorkerMessageHandler||r.addEventListener("message",function(h){var y=JSON.parse(h.data),w=y.language,C=y.code,b=y.immediateClose;r.postMessage(o.highlight(C,o.languages[w],w)),b&&r.close()},!1)),o;var v=o.util.currentScript();v&&(o.filename=v.src,v.hasAttribute("data-manual")&&(o.manual=!0));function k(){o.manual||o.highlightAll()}if(!o.manual){var g=document.readyState;g==="loading"||g==="interactive"&&v&&v.defer?document.addEventListener("DOMContentLoaded",k):window.requestAnimationFrame?window.requestAnimationFrame(k):window.setTimeout(k,16)}return o}(t);e.exports&&(e.exports=n),typeof Wi<"u"&&(Wi.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(i,s){var a={};a["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[s]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};o["language-"+s]={pattern:/[\s\S]+/,inside:n.languages[s]};var l={};l[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:o},n.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,i){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:n.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(r){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var s=r.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",i=function(v,k){return"✖ Error "+v+" while fetching file: "+k},s="✖ Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},o="data-src-status",l="loading",u="loaded",d="failed",f="pre[data-src]:not(["+o+'="'+u+'"]):not(['+o+'="'+l+'"])';function p(v,k,g){var h=new XMLHttpRequest;h.open("GET",v,!0),h.onreadystatechange=function(){h.readyState==4&&(h.status<400&&h.responseText?k(h.responseText):h.status>=400?g(i(h.status,h.statusText)):g(s))},h.send(null)}function m(v){var k=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v||"");if(k){var g=Number(k[1]),h=k[2],y=k[3];return h?y?[g,Number(y)]:[g,void 0]:[g,g]}}n.hooks.add("before-highlightall",function(v){v.selector+=", "+f}),n.hooks.add("before-sanity-check",function(v){var k=v.element;if(k.matches(f)){v.code="",k.setAttribute(o,l);var g=k.appendChild(document.createElement("CODE"));g.textContent=r;var h=k.getAttribute("data-src"),y=v.language;if(y==="none"){var w=(/\.(\w+)$/.exec(h)||[,"none"])[1];y=a[w]||w}n.util.setLanguage(g,y),n.util.setLanguage(k,y);var C=n.plugins.autoloader;C&&C.loadLanguages(y),p(h,function(b){k.setAttribute(o,u);var I=m(k.getAttribute("data-range"));if(I){var N=b.split(/\r\n?|\n/g),R=I[0],_=I[1]==null?N.length:I[1];R<0&&(R+=N.length),R=Math.max(0,Math.min(R-1,N.length)),_<0&&(_+=N.length),_=Math.max(0,Math.min(_,N.length)),b=N.slice(R,_).join(`
`),k.hasAttribute("data-start")||k.setAttribute("data-start",String(R+1))}g.textContent=b,n.highlightElement(g)},function(b){k.setAttribute(o,d),g.textContent=b})}}),n.plugins.fileHighlight={highlight:function(k){for(var g=(k||document).querySelectorAll(f),h=0,y;y=g[h++];)n.highlightElement(y)}};var x=!1;n.fileHighlight=function(){x||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),x=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(V2);var Tz=V2.exports;const d0=Zl(Tz);Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism);(function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,r=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function s(l,u){return l=l.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return r}).replace(/<SPREAD>/g,function(){return i}),RegExp(l,u)}i=s(i).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=s(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:s(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:s(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var a=function(l){return l?typeof l=="string"?l:typeof l.content=="string"?l.content:l.content.map(a).join(""):""},o=function(l){for(var u=[],d=0;d<l.length;d++){var f=l[d],p=!1;if(typeof f!="string"&&(f.type==="tag"&&f.content[0]&&f.content[0].type==="tag"?f.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===a(f.content[0].content[1])&&u.pop():f.content[f.content.length-1].content==="/>"||u.push({tagName:a(f.content[0].content[1]),openedBraces:0}):u.length>0&&f.type==="punctuation"&&f.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&f.type==="punctuation"&&f.content==="}"?u[u.length-1].openedBraces--:p=!0),(p||typeof f=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var m=a(f);d<l.length-1&&(typeof l[d+1]=="string"||l[d+1].type==="plain-text")&&(m+=a(l[d+1]),l.splice(d+1,1)),d>0&&(typeof l[d-1]=="string"||l[d-1].type==="plain-text")&&(m=a(l[d-1])+m,l.splice(d-1,1),d--),l[d]=new e.Token("plain-text",m,null,m)}f.content&&typeof f.content!="string"&&o(f.content)}};e.hooks.add("after-tokenize",function(l){l.language!=="jsx"&&l.language!=="tsx"||o(l.tokens)})})(Prism);(function(e){var t=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",t),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"];var n=e.languages.tsx.tag;n.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+n.pattern.source+")",n.pattern.flags),n.lookbehind=!0})(Prism);(function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},r={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:r},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:r},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:r.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:r.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var i=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],s=r.variable[1].inside,a=0;a<i.length;a++)s[i[a]]=e.languages.bash[i[a]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};(function(e){var t=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function n(d){return d=d.replace(/<inner>/g,function(){return t}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+d+")")}var r=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,i=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return r}),s=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+i+s+"(?:"+i+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+i+s+")(?:"+i+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(r),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+i+")"+s+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+i+"$"),inside:{"table-header":{pattern:RegExp(r),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:n(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(d){["url","bold","italic","strike","code-snippet"].forEach(function(f){d!==f&&(e.languages.markdown[d].inside.content.inside[f]=e.languages.markdown[f])})}),e.hooks.add("after-tokenize",function(d){if(d.language!=="markdown"&&d.language!=="md")return;function f(p){if(!(!p||typeof p=="string"))for(var m=0,x=p.length;m<x;m++){var v=p[m];if(v.type!=="code"){f(v.content);continue}var k=v.content[1],g=v.content[3];if(k&&g&&k.type==="code-language"&&g.type==="code-block"&&typeof k.content=="string"){var h=k.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");h=(/[a-z][\w-]*/i.exec(h)||[""])[0].toLowerCase();var y="language-"+h;g.alias?typeof g.alias=="string"?g.alias=[g.alias,y]:g.alias.push(y):g.alias=[y]}}}f(d.tokens)}),e.hooks.add("wrap",function(d){if(d.type==="code-block"){for(var f="",p=0,m=d.classes.length;p<m;p++){var x=d.classes[p],v=/language-(.+)/.exec(x);if(v){f=v[1];break}}var k=e.languages[f];if(k)d.content=e.highlight(u(d.content),k,f);else if(f&&f!=="none"&&e.plugins.autoloader){var g="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);d.attributes.id=g,e.plugins.autoloader.loadLanguages(f,function(){var h=document.getElementById(g);h&&(h.innerHTML=e.highlight(h.textContent,e.languages[f],f))})}}});var a=RegExp(e.languages.markup.tag.pattern.source,"gi"),o={amp:"&",lt:"<",gt:">",quot:'"'},l=String.fromCodePoint||String.fromCharCode;function u(d){var f=d.replace(a,"");return f=f.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(p,m){if(m=m.toLowerCase(),m[0]==="#"){var x;return m[1]==="x"?x=parseInt(m.slice(2),16):x=Number(m.slice(1)),l(x)}else{var v=o[m];return v||p}}),f}e.languages.md=e.languages.markdown})(Prism);(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;(function(e){var t=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return t.source});e.languages.cpp=e.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:t,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),e.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return n})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),e.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e.languages.cpp}}}}),e.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),e.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:e.languages.extend("cpp",{})}}),e.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},e.languages.cpp["base-clause"])})(Prism);(function(e){var t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,n=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,r={pattern:RegExp(/(^|[^\w.])/.source+n+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[r,{pattern:RegExp(/(^|[^\w.])/.source+n+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:r.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+n+/[A-Z]\w*\b/.source),lookbehind:!0,inside:r.inside}],keyword:t,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":r,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+n+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:r.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+n+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:r.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(Prism);(function(e){for(var t=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,n=0;n<2;n++)t=t.replace(/<self>/g,function(){return t});t=t.replace(/<self>/g,function(){return/[^\s\S]/.source}),e.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+t),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust["closure-params"].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string})(Prism);Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/});Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}});delete Prism.languages.go["class-name"];(function(e){var t=/[*&][^\s[\]{},]+/,n=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,r="(?:"+n.source+"(?:[ 	]+"+t.source+")?|"+t.source+"(?:[ 	]+"+n.source+")?)",i=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),s=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function a(o,l){l=(l||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return r}).replace(/<<value>>/g,function(){return o});return RegExp(u,l)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return r})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return r}).replace(/<<key>>/g,function(){return"(?:"+i+"|"+s+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:a(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:a(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:a(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:a(s),lookbehind:!0,greedy:!0},number:{pattern:a(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:n,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml})(Prism);function f0(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function _z({children:e}){const[t,n]=E.useState(!1),r=(e==null?void 0:e.props)||{},i=r.className||"",s=/language-(\w+)/.exec(i),a=s?s[1].toLowerCase():"",o=String(r.children||"").replace(/\n$/,""),u={py:"python",js:"javascript",ts:"typescript",sh:"bash",shell:"bash",yml:"yaml",html:"markup",xml:"markup"}[a]||a||"text",d=E.useMemo(()=>{if(!o)return"";const p=d0.languages[u];if(p)try{return d0.highlight(o,p,u)}catch{return f0(o)}return f0(o)},[o,u]),f=()=>{o&&(navigator.clipboard.writeText(o),n(!0),setTimeout(()=>n(!1),2e3))};return c.jsxs("div",{className:"code-block-wrapper",children:[c.jsxs("div",{className:"code-block-header",children:[c.jsx("span",{className:"code-block-lang",children:a||"CODE"}),c.jsxs("button",{type:"button",onClick:f,className:"copy-code-btn","aria-label":"Copy code to clipboard",children:[t?c.jsx(zp,{size:12,className:"text-accent"}):c.jsx(t1,{size:12}),c.jsx("span",{children:t?"Copied!":"Copy"})]})]}),c.jsx("pre",{className:"code-block-pre",children:c.jsx("code",{className:i||`language-${u}`,dangerouslySetInnerHTML:{__html:d}})})]})}function Az({children:e,className:t,...n}){return t&&t.includes("language-")?c.jsx("code",{className:t,...n,children:e}):c.jsx("code",{className:"inline-code",...n,children:e})}function Iz({href:e,children:t,...n}){return e&&/^(https?:|mailto:|\/|#)/i.test(e.trim())?c.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"markdown-link",...n,children:t}):c.jsx("span",{children:t})}function Nz({content:e}){return e?c.jsx("div",{className:"markdown-content",children:c.jsx(lO,{remarkPlugins:[Cz],components:{pre:_z,code:Az,a:Iz,table:({node:t,...n})=>c.jsx("div",{className:"table-wrapper",children:c.jsx("table",{className:"markdown-table",...n})})},children:e})}):null}const p0={dont:"don't",cant:"can't",wont:"won't",didnt:"didn't",doesnt:"doesn't",isnt:"isn't",arent:"aren't",wasnt:"wasn't",werent:"weren't",hasnt:"hasn't",havent:"haven't",hadnt:"hadn't",couldnt:"couldn't",shouldnt:"shouldn't",wouldnt:"wouldn't",youre:"you're",theyre:"they're",weve:"we've",theyve:"they've",youve:"you've",im:"I'm",ive:"I've",ill:"I'll",id:"I'd",youll:"you'll",theyll:"they'll",thats:"that's",whats:"what's",hows:"how's",wheres:"where's",theres:"there's",lets:"let's",itll:"it'll"},h0={grammer:"grammar",gramer:"grammar",gramar:"grammar",fropdown:"dropdown",fropdowns:"dropdowns",modelall:"models",teh:"the",hte:"the",recieve:"receive",recieved:"received",recieving:"receiving",seperate:"separate",seperated:"separated",seperating:"separating",definately:"definitely",definatly:"definitely",occured:"occurred",occuring:"occurring",untill:"until",alot:"a lot",wich:"which",becuase:"because",beleive:"believe",wierd:"weird",thier:"their",truely:"truly",goverment:"government",enviroment:"environment",tommorrow:"tomorrow",tomorow:"tomorrow",accomodate:"accommodate",embarass:"embarrass",neccessary:"necessary",necesary:"necessary",acheive:"achieve",existance:"existence",occurance:"occurrence",refering:"referring",intrest:"interest",intresting:"interesting",diffrent:"different",compleatly:"completely",usfull:"useful",helpfull:"helpful",progam:"program",progams:"programs",programing:"programming",fucntion:"function",fucntions:"functions",varible:"variable",varibles:"variables",libary:"library",libaries:"libraries",databse:"database",databses:"databases",lenght:"length",heigth:"height",hight:"height",exmaple:"example",exmaples:"examples",resposne:"response",resposnes:"responses",qustion:"question",qustions:"questions",exaplin:"explain",alright:"all right",anycase:"any case",cannot:"can not",calender:"calendar",collegue:"colleague",concious:"conscious",foregin:"foreign",gaurentee:"guarantee",happend:"happened",ignorant:"ignorant",independant:"independent",mispell:"misspell",mispelled:"misspelled",noticable:"noticeable",oppurtunity:"opportunity",persue:"pursue",posession:"possession",priviledge:"privilege",reccomend:"recommend",recommand:"recommend",succesful:"successful",suprise:"surprise",threshhold:"threshold",appreance:"appearance",appriciate:"appreciate",begining:"beginning",beeing:"being",bussiness:"business",cematography:"cinematography",definate:"definite",enviorment:"environment",experiance:"experience",finaly:"finally",foriegn:"foreign",greatful:"grateful",hapiness:"happiness",indepent:"independent",liason:"liaison",publically:"publicly",refered:"referred",relevent:"relevant",restaraunt:"restaurant",resturant:"restaurant",rhym:"rhyme",satsify:"satisfy",sepperate:"separate",serius:"serious",sponser:"sponsor",successfull:"successful",wether:"weather"},Pz=["monday","tuesday","wednesday","thursday","friday","saturday","sunday","january","february","march","april","may","june","july","august","september","october","november","december","python","javascript","typescript","react","fastapi","flask","redis","docker","ollama","eliza"];function m0(e,t){return!e||!t?t:e===e.toUpperCase()&&e.length>1?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.slice(1):t}function $2(e){if(!e)return e;const t=e.toLowerCase();return t==="i"?"I":p0[t]?m0(e,p0[t]):h0[t]?m0(e,h0[t]):Pz.includes(t)?t.charAt(0).toUpperCase()+t.slice(1):e}function Ro(e){if(!e||typeof e!="string")return"";const t=/([a-zA-Z0-9_']+|\s+|[^\s\w'])/g,n=e.match(t)||[e];let r=!0;return n.map(s=>{if(/^[.!?\n]+$/.test(s))return r=!0,s;if(/^\s+$/.test(s))return s;if(/^[a-zA-Z0-9_']+$/.test(s)){let a=$2(s);return r&&a.length>0&&(a=a.charAt(0).toUpperCase()+a.slice(1)),r=!1,a}return s}).join("")}function jz(e){if(!e)return e;const t=e.match(/^(.*?)(\b[a-zA-Z0-9_']+\b)(\s*[\s.,?!])$/);if(!t)return e;const[,n,r,i]=t,s=$2(r),a=n.trimEnd(),l=a.length===0||/[.!?\n]$/.test(a)?s.charAt(0).toUpperCase()+s.slice(1):s;return l!==r?n+l+i:e}const Rz={default_provider:"auto",default_model:"",auto_speak:!0,voice_name:"",voice_profile:"eliza",voice_lang:"en-IN",speech_recognition_lang:"en-IN",voice_engine:"auto",speech_rate:1,speech_pitch:1,response_style:"balanced",custom_system_prompt:"",detailed_responses:!1,theme:"green"},g0={balanced:"Deliver a clear, well-structured, insightful response. Lead with the direct answer or main takeaway, follow with step-by-step reasoning or context, and conclude with practical next steps. Use headings, lists, or tables where they improve readability.",concise:"Provide the most useful answer in the fewest words possible. Lead with the core conclusion, use compact bullet points where helpful, and omit filler while preserving essential caveats and accuracy.",tutor:"Act as an exceptional, patient tutor. Explain complex concepts step by step in plain language, define technical terminology clearly, provide an intuitive analogy or concrete real-world example, and finish with a brief check-for-understanding recap.",expert:"Respond as a senior subject-matter expert. Provide technical rigor, state assumptions and trade-offs explicitly, discuss architectural and edge-case implications, and give production-grade depth without unnecessary filler.",coding:"Act as a principal software engineer. Provide correct, secure, and production-ready code. Use fenced code blocks with appropriate language identifiers. Include clear explanation of edge cases, dependencies, tests, and error handling. Do not invent non-existent APIs.",creative:"Be imaginative, engaging, and articulate while remaining coherent and insightful. Explore multiple perspectives or structured creative options and explain why the best idea stands out."};function Us(e){return e?e.replace(/<\/?(?:user_input|user_message|assistant|system)[^>]*>/gi,"").trim():""}function Lz(e){return e?e.replace(new RegExp("\\p{Regional_Indicator}{2}","gu"),"").replace(/[\u{1F3F4}][\u{E0020}-\u{E007E}]+\u{E007F}/gu,"").replace(/[\uFE0E\uFE0F]?\u20E3/gu,"").replace(new RegExp("(?:\\p{Extended_Pictographic}|\\p{Emoji_Presentation}|\\p{Emoji_Modifier_Base})(?:[\\uFE0E\\uFE0F]|\\p{Emoji_Modifier})*(?:\\u200D(?:\\p{Extended_Pictographic}|\\p{Emoji_Presentation}|\\p{Emoji_Modifier_Base}|\\p{Emoji_Component})(?:[\\uFE0E\\uFE0F]|\\p{Emoji_Modifier})*)*","gu"),"").replace(/[\p{Emoji_Modifier}\uFE0E\uFE0F\u200D\u200C]/gu,"").replace(/\s+([.,!?;:])/g,"$1").replace(/\s+/g," ").trim():""}function Dz(e){if(!e)return"";let t=Us(e);return t=t.replace(/```[\s\S]*?```/g," [code snippet omitted] "),t=t.replace(/`([^`]+)`/g,"$1"),t=t.replace(/!\[([^\]]*)\]\([^)]+\)/g,""),t=t.replace(/\[([^\]]+)\]\([^)]+\)/g,"$1"),t=t.replace(/^#{1,6}\s+/gm,""),t=t.replace(/^\s*>\s+/gm,""),t=t.replace(/(\*\*|__)(.*?)\1/g,"$2"),t=t.replace(/(\*|_)(.*?)\1/g,"$2"),t=t.replace(/^[ \t]*[-*_]{3,}[ \t]*$/gm,""),t=t.replace(/\|/g," "),t=Lz(t),t=t.replace(/\s+/g," ").trim(),t}function y0(e){var r;const t=["You are ELIZA AI, a helpful, accurate, and conversational AI assistant. Answer the user's actual question directly.","IDENTITY RULES:","- Your name is strictly 'ELIZA AI' (or 'Eliza AI'). If asked who you are or what your name is, state: 'I am ELIZA AI, your advanced conversational AI assistant.'","- Never state you do not have an identity or name.","","FORMATTING & RESPONSE RULES:","- Produce clean, well-structured Markdown that can be rendered directly by the frontend.","- Adapt the structure and length to the question: simple questions deserve concise answers (1-3 sentences, no unnecessary headings); complex questions deserve detailed, organized explanations.","- Headings: Use '# Title' or '## Section' only when appropriate. Never generate repetitive headings.","- Paragraphs: One main idea per short paragraph with blank lines between them. Explain technical terms in simple English.","- Lists: Use bullet points for features, items, and collections. Use numbered lists for sequential steps and workflows.","- Bold formatting: Use bold for important terms, definitions, and key takeaways. Do not bold entire paragraphs.","- Code: Use inline `code` for identifiers. Always use fenced code blocks with language identifiers (e.g., ```python) for code examples, with correct indentation.","- Tables: Use Markdown tables (| Col 1 | Col 2 |) when comparing items or displaying structured tabular data.","- Troubleshooting: Clearly state the problem, cause, solution, and verification steps.","- Avoid filler, repetition, excessive bolding, and generic disclaimers. Maintain conversation context across follow-ups."].join(`
`),n=e.detailed_responses?"Provide thorough, comprehensive answers with practical examples, edge cases, and actionable next steps.":"Keep the response appropriately sized and focused on the core request without unnecessary filler.";return[t,g0[e.response_style]||g0.balanced,n,(r=e.custom_system_prompt)==null?void 0:r.trim()].filter(Boolean).join(`

`)}function Yc(e,t,n,r){if(typeof window>"u")return!1;const i=Dz(e);return!i||!i.trim()?!1:(Fk(i,t,{onStart:n,onEnd:r}),!0)}const Mz=E.forwardRef(function({accessData:t,freeQuestionsCount:n=0,onQuestionUsed:r,onRequestEmailGate:i,onOpenFeedback:s,isModalActive:a=!1},o){const[l,u]=E.useState([]),[d,f]=E.useState(""),[p,m]=E.useState("idle"),[x,v]=E.useState(!1),[k,g]=E.useState(!1),[h,y]=E.useState([]),[w,C]=E.useState(Rz),[b,I]=E.useState(null),[N,R]=E.useState([]),[_,j]=E.useState(""),[z,G]=E.useState(!1),[q,H]=E.useState(!1),[le,Q]=E.useState(!1),[L,B]=E.useState(!0),[S,Y]=E.useState(!1),[ee,A]=E.useState(!1),[ue,Se]=E.useState(!0),se=E.useRef(null),Ee=E.useRef(null);E.useRef(null),E.useImperativeHandle(o,()=>({sendPendingMessage:()=>{},stopVoiceAndMic:()=>{pe(),Ge()}}));const $e=E.useMemo(()=>{var de,P,T,U;const M=(de=w.default_model)==null?void 0:de.trim();if(w.default_provider==="auto"){const V=h.find(ie=>ie.available),X=((P=V==null?void 0:V.name)==null?void 0:P.toUpperCase())||"AUTO";return M?`${X} · ${M.toUpperCase()}`:"AUTO ROUTING"}const $=h.find(V=>V.id===w.default_provider),ae=((T=$==null?void 0:$.name)==null?void 0:T.toUpperCase())||((U=w.default_provider)==null?void 0:U.toUpperCase())||"MANUAL";return M?`${ae} · ${M.toUpperCase()}`:ae},[h,w.default_provider,w.default_model]),Ye=E.useCallback(async(M=!1)=>{try{const[$,ae,de,P]=await Promise.all([In.health(),In.providers(),In.settings(),In.conversations()]);G($.status==="ok"),y(ae.providers||[]),C(T=>({...T,...de})),R(P.conversations||[]),j("")}catch{if(G(!1),M||h.length===0){const $=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1");j($?"Backend unavailable. Please start the FastAPI backend server and refresh.":"Backend unavailable. Please verify that the backend on Render is active.")}}},[h.length]);E.useEffect(()=>{Ye(!0);const M=setInterval(()=>Ye(!1),2e4);return()=>clearInterval(M)},[Ye]),E.useEffect(()=>{se.current&&(se.current.scrollTop=se.current.scrollHeight)},[l,p]);const pe=E.useCallback(()=>{Gl(),p==="speaking"&&m("idle")},[p]),et=E.useCallback(M=>{if(M&&M.stopPropagation&&M.stopPropagation(),typeof window<"u"&&"speechSynthesis"in window)try{const $=new SpeechSynthesisUtterance("");$.volume=0,window.speechSynthesis.speak($)}catch{}Q($=>{const ae=!$;return ae&&pe(),ae})},[pe]),St=E.useCallback(async()=>{const M=window.SpeechRecognition||window.webkitSpeechRecognition;if(!M){j("Speech recognition is not supported in this browser. Please use Chrome or Safari over HTTPS.");return}if(pe(),typeof window<"u"&&"speechSynthesis"in window)try{const $=new SpeechSynthesisUtterance("");$.volume=0,window.speechSynthesis.speak($)}catch{}if(typeof navigator<"u"&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)try{(await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(ae=>ae.stop())}catch($){if($.name==="NotAllowedError"||$.name==="PermissionDeniedError"){j("Microphone permission was denied. Please allow microphone access in your browser settings.");return}}try{const $=new M;$.continuous=!1,$.interimResults=!0,$.maxAlternatives=1,$.lang=w.speech_recognition_lang||"en-IN",$.onstart=()=>{H(!0),m("listening"),j("")},$.onresult=ae=>{const de=Array.from(ae.results).map(P=>P[0].transcript).join("");f(de)},$.onerror=ae=>{H(!1),m("idle"),ae.error==="not-allowed"||ae.error==="service-not-allowed"?j("Microphone not eligible. Please ensure HTTPS or localhost and allow microphone permissions."):ae.error!=="no-speech"&&j(`Microphone error: ${ae.error}`)},$.onend=()=>{H(!1),m("idle")},Ee.current=$,$.start()}catch($){H(!1),m("idle"),j($.message||"Failed to start microphone.")}},[pe]),Ge=E.useCallback(()=>{Ee.current&&Ee.current.stop(),H(!1),m("idle")},[]);E.useEffect(()=>{a&&(pe(),Ge())},[a,pe,Ge]),E.useEffect(()=>{(x||k||ee)&&pe()},[x,k,ee,pe]);const Gt=M=>{const $=M.target.value;if(L){const ae=$.slice(-1);if(/[\s.,?!]/.test(ae)){const de=jz($);f(de);return}}f($)},jr=()=>{if(!d.trim())return;const M=Ro(d);f(M),Y(!0),setTimeout(()=>Y(!1),2e3)},Me=async M=>{var T,U,V,X,ie;let $=(typeof M=="string"?M:d).trim();if(!$||p==="thinking")return;if(L&&($=Ro($)),f(""),!Ca()&&n>=1&&(pe(),Ge(),i)){i();return}j(""),pe();const de={role:"user",content:$,created_at:new Date().toISOString()},P=[...l,de];u(P),m("thinking");try{const fe=Ca();let he;fe?(he=await Ta.submitQuestion({message:$,provider:w.default_provider||"auto",model:w.default_model||void 0,routing_mode:w.default_provider==="auto"?"auto":"manual",system_prompt:y0(w),conversation_id:b,history:l.slice(-10)}),r&&he.remainingQuestions!==void 0&&r(he.remainingQuestions,he.blocked,he.blockedUntil)):(he=await In.chat({message:$,provider:w.default_provider||"auto",model:w.default_model||void 0,routing_mode:w.default_provider==="auto"?"auto":"manual",system_prompt:y0(w),conversation_id:b,history:l.slice(-10)}),r&&r(2,!1,null));const Pe={role:"assistant",content:Us(he.answer),provider:he.provider,model:he.model,created_at:he.created_at||new Date().toISOString()};u([...P,Pe]),I(he.conversation_id),m("idle");const Tn=he.remainingQuestions!==void 0&&(he.remainingQuestions<=0||he.blocked)||(t==null?void 0:t.blocked)||(t==null?void 0:t.remainingQuestions)!==void 0&&t.remainingQuestions<=0;w.auto_speak&&!le&&!a&&!Tn?Yc(he.answer,w,()=>m("speaking"),()=>m("idle")):pe()}catch(fe){if(pe(),Ge(),fe.data&&(fe.data.blocked||fe.status===403||(T=fe.message)!=null&&T.includes("limit"))){const Rr=((V=(U=fe.data)==null?void 0:U.detail)==null?void 0:V.blockedUntil)||((X=fe.data)==null?void 0:X.blockedUntil);r&&r(0,!0,Rr)}m("idle");const Pe=!fe.status&&(fe.message==="Failed to fetch"||((ie=fe.message)==null?void 0:ie.includes("NetworkError"))||fe.name==="TypeError")?"Network connection issue. Please check your connection or retry in a moment.":fe.message||"Failed to reach AI provider.",Tn={role:"assistant",content:Pe,error:!0,created_at:new Date().toISOString()};u([...P,Tn]),j(Pe)}},Cn=()=>{pe(),u([]),I(null),j(""),m("idle")},qt=async M=>{var $,ae,de,P;try{pe();const T=await In.conversation(M);u(T.messages||[]),I(T.id),g(!1),j("")}catch(T){if(T.data&&(T.data.blocked||T.status===403||($=T.message)!=null&&$.includes("limit"))){const U=((de=(ae=T.data)==null?void 0:ae.detail)==null?void 0:de.blockedUntil)||((P=T.data)==null?void 0:P.blockedUntil);r&&r(0,!0,U)}j(T.message||"Failed to load conversation.")}},D=async(M,$)=>{var ae,de,P,T;$.stopPropagation();try{await In.deleteConversation(M),R(U=>U.filter(V=>V.id!==M)),b===M&&Cn()}catch(U){if(U.data&&(U.data.blocked||U.status===403||(ae=U.message)!=null&&ae.includes("limit"))){const V=((P=(de=U.data)==null?void 0:de.detail)==null?void 0:P.blockedUntil)||((T=U.data)==null?void 0:T.blockedUntil);r&&r(0,!0,V)}j(U.message||"Failed to delete conversation.")}},ge=async M=>{const $={...w,...M};C($);try{await In.saveSettings(M)}catch{}},re=M=>{navigator.clipboard.writeText(M)},xe=()=>{const M=l.map(P=>`[${P.role.toUpperCase()}] ${P.created_at||""}
${P.content}
`).join(`
---

`),$=new Blob([M],{type:"text/plain"}),ae=URL.createObjectURL($),de=document.createElement("a");de.href=ae,de.download="eliza-conversation.txt",de.click(),URL.revokeObjectURL(ae)};return c.jsxs("main",{className:`app-shell theme-${w.theme||"green"}`,children:[c.jsx("div",{className:"scanlines","aria-hidden":"true"}),c.jsxs("header",{className:"topbar",children:[c.jsxs("div",{className:"brand-lockup",children:[c.jsx("div",{className:"brand-mark",children:c.jsx(Wd,{size:20})}),c.jsxs("div",{children:[c.jsxs("div",{className:"brand-name",children:["ELIZA",c.jsx("span",{children:"AI"})]}),c.jsx("div",{className:"brand-subtitle",children:"CONVERSATIONAL INTELLIGENCE"})]})]}),c.jsxs("div",{className:"top-status",children:[c.jsx("span",{className:`status-dot ${z?"online":""}`}),z?"SYSTEM ONLINE":"BACKEND OFFLINE",c.jsx("span",{className:"status-divider"}),$e,t&&c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"status-divider"}),c.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"5px",padding:"2px 8px",borderRadius:"6px",background:"rgba(192, 132, 252, 0.15)",border:"1px solid rgba(192, 132, 252, 0.35)",color:"#c084fc",fontSize:"11px",fontFamily:"'DM Mono', monospace",fontWeight:"700"},title:`Account: ${t.email||""}`,children:["QUESTIONS REMAINING: ",t.remainingQuestions??t.remaining_questions??0,"/3"]})]})]}),c.jsxs("div",{className:"top-actions",children:[c.jsx("button",{className:"icon-button",onClick:()=>v(!0),title:"Settings","aria-label":"Settings",children:c.jsx(d_,{size:17})}),s&&c.jsxs("button",{className:"icon-button",onClick:s,title:"Give Feedback","aria-label":"Give Feedback",style:{display:"inline-flex",alignItems:"center",gap:"4px",width:"auto",padding:"8px 10px",fontSize:"12px",color:"#c084fc",borderColor:"rgba(192, 132, 252, 0.35)",background:"rgba(192, 132, 252, 0.08)"},children:[c.jsx(i1,{size:15}),c.jsx("span",{children:"Feedback"})]})]})]}),k&&c.jsxs("aside",{className:"history-panel",children:[c.jsxs("div",{className:"history-head",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"MEMORY BANK"}),c.jsx("h3",{children:"Conversations"})]}),c.jsx("button",{className:"icon-button",onClick:()=>g(!1),"aria-label":"Close history",children:c.jsx(It,{size:16})})]}),N.length===0?c.jsx("p",{className:"empty-history",children:"No saved conversations yet."}):N.map(M=>{var $;return c.jsxs("div",{className:"history-item",role:"button",tabIndex:0,onClick:()=>qt(M.id),onKeyDown:ae=>ae.key==="Enter"&&qt(M.id),children:[c.jsxs("div",{className:"history-item-copy",children:[c.jsx("b",{children:M.title||"Untitled conversation"}),c.jsxs("small",{children:[(($=M.messages)==null?void 0:$.length)||0," messages"]})]}),c.jsx("button",{className:"tiny-icon",onClick:ae=>D(M.id,ae),title:"Delete conversation","aria-label":"Delete conversation",children:c.jsx(It,{size:14})})]},M.id)})]}),c.jsxs("section",{className:"hero-layout",children:[c.jsxs("div",{className:"system-meta",children:[c.jsx("span",{children:"FIG. 01"}),c.jsx("span",{children:"NEURAL INTERFACE"}),c.jsx("span",{children:"BUILD 2.0.0"})]}),c.jsxs("div",{className:"hero-center",children:[c.jsx(TL,{status:p}),c.jsxs("div",{className:"system-title",children:[c.jsx("span",{className:"eyebrow",children:"PERSONAL AI TERMINAL"}),c.jsxs("h1",{children:["How may I ",c.jsx("em",{children:"help you?"})]}),c.jsx("p",{children:"Ask a question. Start a conversation. Explore an idea."})]}),c.jsxs("div",{className:`state-pill state-${p}`,children:[c.jsx("span",{className:"state-light"}),p==="idle"?"AWAITING INPUT":p==="thinking"?"PROCESSING REQUEST":p==="listening"?"LISTENING TO YOU":"SPEAKING RESPONSE",c.jsx("span",{className:"state-pulse",children:p==="thinking"?"•••":p==="speaking"?c.jsx(Zb,{size:14}):null})]})]}),c.jsxs("div",{className:"system-meta bottom-meta",children:[c.jsxs("span",{children:["VOICE I/O ","SpeechSynthesisUtterance"in window?"AVAILABLE":"LIMITED"]}),c.jsxs("span",{children:["MODEL ROUTING: ",$e]}),c.jsx("span",{children:"LATENCY: LIVE"})]})]}),c.jsxs("section",{className:"conversation-area",children:[c.jsxs("div",{className:"conversation-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"eyebrow",children:"LIVE TRANSMISSION"}),c.jsx("span",{className:"message-count",children:l.length?`${l.length} MESSAGES`:"NEW SESSION"})]}),c.jsxs("div",{className:"conversation-tools",style:{display:"flex",alignItems:"center",gap:"6px"},children:[c.jsxs("button",{className:"text-action",onClick:xe,disabled:!l.length,children:["Export ",c.jsx(n_,{size:13})]}),c.jsx("button",{className:"text-action",onClick:()=>u([]),disabled:!l.length,children:"Clear"}),c.jsx("button",{className:"text-action voice-toggle-btn",type:"button",onClick:et,onTouchEnd:M=>{M.preventDefault(),et(M)},title:le?"Voice response: OFF (Click to turn ON)":"Voice response: ON (Click to turn OFF)","aria-label":le?"Voice response is OFF":"Voice response is ON",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"28px",height:"28px",minWidth:"28px",padding:0,borderRadius:"6px",background:le?"rgba(255, 255, 255, 0.03)":"rgba(255, 255, 255, 0.08)",borderColor:le?"rgba(255, 255, 255, 0.08)":"rgba(255, 255, 255, 0.18)",color:le?"rgba(226, 238, 230, 0.35)":"#e2eee6",cursor:"pointer",touchAction:"manipulation"},children:le?c.jsx(g_,{size:14}):c.jsx(Ko,{size:14})})]})]}),c.jsxs("div",{className:"transcript",ref:se,children:[l.length===0?c.jsxs("div",{className:"welcome-line",children:[c.jsx("span",{className:"prompt-symbol",children:"›"}),c.jsx("span",{children:"Terminal ready. Ask anything or click the microphone to speak."}),c.jsx("span",{className:"cursor-block"})]}):l.map((M,$)=>c.jsxs("article",{className:`message message-${M.role} ${M.error?"message-error":""}`,children:[c.jsx("div",{className:"message-avatar",children:M.role==="assistant"?c.jsx(Wd,{size:14}):"YOU"}),c.jsxs("div",{className:"message-body",children:[c.jsxs("div",{className:"message-meta",children:[M.role==="assistant"?"ELIZA AI":"USER",c.jsx("span",{children:M.created_at?new Date(M.created_at).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"NOW"}),M.model&&c.jsxs("span",{className:"model-chip",children:[M.provider," / ",M.model]})]}),M.role==="assistant"&&!M.error?c.jsx(Nz,{content:Us(M.content)}):c.jsx("p",{children:Us(M.content)}),M.role==="assistant"&&!M.error&&c.jsxs("div",{className:"message-actions",children:[c.jsxs("button",{onClick:()=>re(Us(M.content)),title:"Copy response",children:[c.jsx(t1,{size:13})," Copy"]}),c.jsxs("button",{onClick:()=>Yc(M.content,w,()=>m("speaking"),()=>m("idle")),title:"Read response aloud",children:[c.jsx(Ko,{size:13})," Speak"]})]})]})]},`${M.created_at||"msg"}-${$}`)),p==="thinking"&&c.jsxs("div",{className:"thinking-line",children:[c.jsxs("span",{className:"thinking-dots",children:[c.jsx("i",{}),c.jsx("i",{}),c.jsx("i",{})]})," ","Synthesizing response..."]})]}),_&&c.jsxs("div",{className:"error-banner",children:[c.jsx("span",{children:_}),c.jsx("button",{onClick:()=>j(""),"aria-label":"Dismiss error",children:c.jsx(It,{size:14})})]}),c.jsxs("form",{className:"input-console",onSubmit:M=>{M.preventDefault();const $=L?Ro(d):d;Me($)},children:[c.jsx("div",{className:"input-prefix",children:"›"}),c.jsx("textarea",{rows:"1",value:d,onChange:Gt,onKeyDown:M=>{if(M.key==="Enter"&&!M.shiftKey){M.preventDefault();const $=L?Ro(d):d;Me($)}},placeholder:"Ask me anything, or speak to begin...","aria-label":"Your question",spellCheck:"true",autoCorrect:"on",autoCapitalize:"sentences",lang:"en"}),c.jsxs("div",{className:"input-actions",children:[d.trim()&&c.jsx("button",{type:"button",className:`console-icon ${S?"active":""}`,onClick:jr,title:S?"Grammar corrected!":"Fix grammar & spelling now","aria-label":"Fix grammar and spelling now",children:c.jsx(Wp,{size:16})}),p==="speaking"&&c.jsx("button",{type:"button",className:"console-icon",onClick:pe,title:"Stop speaking","aria-label":"Stop speaking",children:c.jsx(p1,{size:16})}),c.jsx("button",{type:"button",className:`console-icon ${q?"active":""}`,onClick:q?Ge:St,onTouchEnd:M=>{M.preventDefault(),q?Ge():St()},style:{touchAction:"manipulation"},title:q?"Stop listening":"Speak your question","aria-label":q?"Stop listening":"Speak your question",children:q?c.jsx(l_,{size:17}):c.jsx(Gd,{size:17})}),c.jsx("button",{type:"submit",className:"send-button",disabled:!d.trim()||p==="thinking","aria-label":"Send message",children:c.jsx(l1,{size:16})})]})]}),c.jsxs("div",{className:"console-foot",children:[c.jsxs("span",{children:[c.jsx("span",{className:"tiny-led"})," ENCRYPTED LOCAL CONNECTION"]}),c.jsxs("span",{children:["ENTER TO SEND ",c.jsx("i",{children:"·"})," SHIFT + ENTER FOR NEW LINE"]}),c.jsxs("span",{onClick:()=>B(M=>!M),style:{cursor:"pointer"},title:"Click to toggle auto-grammar correction",children:["AUTO-GRAMMAR ",L?"ENABLED":"OFF"]})]})]}),c.jsxs("footer",{className:"app-footer",children:[c.jsxs("span",{children:["ELIZA AI ",c.jsx("b",{children:"©"})," 2026"]}),c.jsx("span",{children:"AI makes mistakes, but every mistake drives improvement"}),c.jsx("span",{children:"DEVELOPED BY AKHIL THADAKA · READY TO WORK & FREELANCE · CONTACT: 9121751697"})]}),ee&&c.jsxs("div",{className:"accessibility-panel",role:"dialog","aria-label":"Accessibility",children:[c.jsxs("div",{className:"accessibility-head",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"ACCESSIBILITY"}),c.jsx("h3",{children:"Voice & Interaction"})]}),c.jsx("button",{className:"icon-button",onClick:()=>A(!1),"aria-label":"Close",children:c.jsx(It,{size:16})})]}),c.jsxs("label",{className:"toggle-row",children:[c.jsxs("span",{children:[c.jsx("b",{children:"Auto-grammar correction"}),c.jsx("small",{children:"Fix spelling and grammar as you type"})]}),c.jsx("input",{type:"checkbox",checked:L,onChange:M=>B(M.target.checked)})]}),c.jsxs("label",{className:"toggle-row",children:[c.jsxs("span",{children:[c.jsx("b",{children:"Show navigation bar"}),c.jsx("small",{children:"Toggle the quick-action navbar"})]}),c.jsx("input",{type:"checkbox",checked:ue,onChange:M=>Se(M.target.checked)})]}),c.jsxs("label",{className:"toggle-row",children:[c.jsxs("span",{children:[c.jsx("b",{children:"Mute voice output"}),c.jsx("small",{children:"Disable text-to-speech"})]}),c.jsx("input",{type:"checkbox",checked:le,onChange:M=>{Q(M.target.checked),M.target.checked||pe()}})]}),c.jsxs("div",{className:"accessibility-actions",children:[c.jsxs("button",{className:"text-action",type:"button",onClick:St,children:[c.jsx(Gd,{size:14})," Test microphone"]}),c.jsxs("button",{className:"text-action",type:"button",onClick:()=>Yc("Hello, I am ELIZA AI.",w,()=>m("speaking"),()=>m("idle")),children:[c.jsx(Ko,{size:14})," Test voice"]})]})]}),c.jsx(NL,{open:x,onClose:()=>v(!1),providers:h,settings:w,onChange:ge})]})});function Fz(){const[e,t]=E.useState(!0),[n,r]=E.useState({isAnonymousFree:!0,remainingQuestions:3,remaining_questions:3,blocked:!1,email:""}),[i,s]=E.useState(!1),[a,o]=E.useState(""),[l,u]=E.useState(!1),[d,f]=E.useState(!1),[p,m]=E.useState(()=>{try{return Number(sessionStorage.getItem("eliza_free_q_count")||"0")}catch{return 0}}),x=E.useRef(null),v=E.useCallback(async()=>{const C=Ca(),b=Tg();if(!C||!b){r({isAnonymousFree:!0,remainingQuestions:Math.max(0,3-p),remaining_questions:Math.max(0,3-p),blocked:!1,email:""}),t(!1);return}try{const I=await Ta.getStatus();r({...I,email:b,isAnonymousFree:!1}),(I.blocked||I.remainingQuestions<=0)&&f(!0)}catch{x_(),r({isAnonymousFree:!0,remainingQuestions:Math.max(0,3-p),remaining_questions:Math.max(0,3-p),blocked:!1,email:""})}finally{t(!1)}},[p]);E.useEffect(()=>{v();const C=typeof window<"u"&&window.location.hash||"";if(C.includes("access_token=")){const I=new URLSearchParams(C.replace(/^#/,"")).get("access_token");I&&(window.history.replaceState(null,"",window.location.pathname+window.location.search),t(!0),fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:`Bearer ${I}`}}).then(N=>N.json()).then(async N=>{if(N&&N.email){const R=await Ta.googleLogin({email:N.email,name:N.name,picture:N.picture});sessionStorage.getItem("eliza_pending_q"),sessionStorage.removeItem("eliza_pending_q"),h(R)}}).catch(N=>{console.error("Failed to verify Google email:",N)}).finally(()=>{t(!1)}))}},[v]);const k=n.blocked||n.remainingQuestions<=0,g=!!(i||k&&d||l);E.useEffect(()=>{var C,b;if(g){if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}(b=(C=x.current)==null?void 0:C.stopVoiceAndMic)==null||b.call(C)}},[g]);const h=C=>{if(s(!1),r({...C,isAnonymousFree:!1}),C.blocked||C.remainingQuestions<=0){f(!0);return}o("");try{sessionStorage.removeItem("eliza_pending_q")}catch{}},y=(C,b,I)=>{var R,_;const N=b||C<=0;if(N){if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}(_=(R=x.current)==null?void 0:R.stopVoiceAndMic)==null||_.call(R)}if(r(j=>({...j,remainingQuestions:C,remaining_questions:C,blocked:N,blockedUntil:I||(j==null?void 0:j.blockedUntil)})),!Ca()){const j=p+1;m(j);try{sessionStorage.setItem("eliza_free_q_count",String(j))}catch{}}N&&(f(!0),u(!0))},w=()=>{var C,b;if(typeof window<"u"&&"speechSynthesis"in window)try{window.speechSynthesis.cancel()}catch{}(b=(C=x.current)==null?void 0:C.stopVoiceAndMic)==null||b.call(C),o(""),s(!0)};return e?c.jsxs("div",{className:"app-init-loader",children:[c.jsx("div",{className:"init-spinner"}),c.jsx("span",{children:"Initializing Neural Interface..."}),c.jsx("style",{children:`
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
        `})]}):c.jsxs(c.Fragment,{children:[c.jsx(Mz,{ref:x,accessData:n,freeQuestionsCount:p,onQuestionUsed:y,onRequestEmailGate:w,onOpenFeedback:()=>u(!0),isModalActive:g}),i&&c.jsx(QN,{isModal:!0,onAccessGranted:h,onShowFeedback:C=>{s(!1),r(C),u(!0)},onClose:()=>s(!1)}),k&&d&&c.jsx(ZN,{blockedUntil:n.blockedUntil,onGiveFeedback:()=>u(!0)}),l&&c.jsx(eP,{email:n.email||Tg()||"visitor@trial",onClose:()=>u(!1),onSubmitted:()=>{u(!1),k&&f(!0)}})]})}function H2(){try{return localStorage.getItem("eliza_admin_token")||""}catch{return""}}function Oz(e){try{e?localStorage.setItem("eliza_admin_token",e):localStorage.removeItem("eliza_admin_token")}catch{}}function im(){try{localStorage.removeItem("eliza_admin_token")}catch{}}async function Ct(e,t={}){const n=H2(),r={"Content-Type":"application/json",...n?{Authorization:`Bearer ${n}`}:{},...t.headers||{}},i=await ts(`${es}${e}`,{...t,headers:r}),s=await i.json().catch(()=>({}));if(!i.ok){i.status===401&&typeof window<"u"&&im();const a=s.detail||s.message||`Admin request failed (${i.status})`,o=new Error(a);throw o.status=i.status,o.data=s,o}return s}const st={login:async(e,t)=>{const n=await Ct("/api/v1/admin/login",{method:"POST",body:JSON.stringify({username:e,password:t})});return n.token&&Oz(n.token),n},me:async()=>Ct("/api/v1/admin/me"),logout:async()=>{try{await Ct("/api/v1/admin/logout",{method:"POST"})}finally{im()}},getOverview:async(e="last30days",t=null,n=null)=>{const r=new URLSearchParams({preset:e});return t&&r.append("start_date",t),n&&r.append("end_date",n),Ct(`/api/v1/admin/dashboard/overview?${r.toString()}`)},getEmails:async(e={})=>{const t=new URLSearchParams;return Object.entries(e).forEach(([n,r])=>{r!=null&&r!==""&&t.append(n,r)}),Ct(`/api/v1/admin/dashboard/emails?${t.toString()}`)},getCustomerDetail:async e=>Ct(`/api/v1/admin/dashboard/emails/${encodeURIComponent(e)}`),getFeedback:async(e={})=>{const t=new URLSearchParams;return Object.entries(e).forEach(([n,r])=>{r!=null&&r!==""&&t.append(n,r)}),Ct(`/api/v1/admin/dashboard/feedback?${t.toString()}`)},updateFeedback:async(e,{status:t,admin_notes:n})=>Ct(`/api/v1/admin/dashboard/feedback/${encodeURIComponent(e)}`,{method:"PATCH",body:JSON.stringify({status:t,admin_notes:n})}),unblockCustomer:async e=>Ct(`/api/v1/admin/customers/${encodeURIComponent(e)}/unblock`,{method:"POST"}),deleteCustomer:async e=>Ct(`/api/v1/admin/customers/${encodeURIComponent(e)}`,{method:"DELETE"}),bulkDeleteCustomers:async e=>Ct("/api/v1/admin/customers/bulk-delete",{method:"POST",body:JSON.stringify({customer_ids:e})}),deleteFeedback:async e=>Ct(`/api/v1/admin/feedback/${encodeURIComponent(e)}`,{method:"DELETE"}),bulkDeleteFeedback:async e=>Ct("/api/v1/admin/feedback/bulk-delete",{method:"POST",body:JSON.stringify({feedback_ids:e})})};function zz(){const e=yu(),[t,n]=E.useState(""),[r,i]=E.useState(""),[s,a]=E.useState(!1),[o,l]=E.useState(""),u=async d=>{if(d.preventDefault(),!t.trim()||!r){l("Please provide both username and password.");return}l(""),a(!0);try{await st.login(t.trim(),r),e("/admin/dashboard",{replace:!0})}catch(f){l(f.message||"Invalid credentials. Please verify username and password.")}finally{a(!1)}};return c.jsxs("div",{className:"admin-login-wrapper theme-violet",children:[c.jsx("div",{className:"login-glow","aria-hidden":"true"}),c.jsxs("div",{className:"login-card",children:[c.jsxs("div",{className:"login-header",children:[c.jsx("div",{className:"icon-shield-wrap",children:c.jsx(c1,{size:28})}),c.jsxs("h1",{children:["ELIZA",c.jsx("span",{children:"AI"})]}),c.jsx("span",{className:"login-badge",children:"ADMINISTRATIVE CONSOLE"}),c.jsx("p",{className:"login-desc",children:"Sign in with administrator credentials to manage access, review analytics, and inspect feedback."})]}),c.jsxs("form",{onSubmit:u,className:"login-form",children:[c.jsxs("div",{className:"login-field",children:[c.jsx("label",{htmlFor:"admin-user",children:"Administrator Username"}),c.jsxs("div",{className:"input-with-icon",children:[c.jsx(m_,{size:16,className:"field-icon"}),c.jsx("input",{id:"admin-user",type:"text",value:t,onChange:d=>{n(d.target.value),o&&l("")},placeholder:"admin",autoComplete:"username",autoFocus:!0,disabled:s})]})]}),c.jsxs("div",{className:"login-field",children:[c.jsx("label",{htmlFor:"admin-pass",children:"Password"}),c.jsxs("div",{className:"input-with-icon",children:[c.jsx(r1,{size:16,className:"field-icon"}),c.jsx("input",{id:"admin-pass",type:"password",value:r,onChange:d=>{i(d.target.value),o&&l("")},placeholder:"••••••••••••",autoComplete:"current-password",disabled:s})]})]}),o&&c.jsxs("div",{className:"login-error",children:[c.jsx(Up,{size:16}),c.jsx("span",{children:o})]}),c.jsx("button",{type:"submit",className:"btn-admin-submit",disabled:s||!t.trim()||!r,children:s?c.jsx("span",{children:"Authenticating..."}):c.jsxs(c.Fragment,{children:[c.jsx("span",{children:"Sign In to Dashboard"}),c.jsx(t_,{size:16})]})})]}),c.jsx("div",{className:"login-foot",children:c.jsxs(ka,{to:"/",className:"link-back-agent",children:[c.jsx(Fp,{size:14}),c.jsx("span",{children:"Return to Voice Assistant"})]})})]}),c.jsx("style",{children:`
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
      `})]})}function sm({children:e,title:t,subtitle:n}){const r=yu(),i=dn(),[s,a]=E.useState(null),[o,l]=E.useState(!0);E.useEffect(()=>{if(!H2()){r("/admin/login",{replace:!0});return}st.me().then(p=>{a(p),l(!1)}).catch(()=>{im(),r("/admin/login",{replace:!0})})},[r]);const u=async()=>{await st.logout(),r("/admin/login")};if(o)return c.jsxs("div",{className:"admin-loading-screen",children:[c.jsx("div",{className:"admin-spinner"}),c.jsx("span",{children:"Authenticating administrator session..."}),c.jsx("style",{children:`
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
        `})]});const d=[{label:"Overview",path:"/admin/dashboard",icon:a_},{label:"Email Access & Analytics",path:"/admin/emails",icon:m1},{label:"Feedback Management",path:"/admin/feedback",icon:s1}];return c.jsxs("div",{className:"admin-container theme-violet",children:[c.jsxs("header",{className:"admin-topbar",children:[c.jsxs("div",{className:"topbar-left",children:[c.jsxs("div",{className:"admin-brand",children:[c.jsx("div",{className:"brand-badge-icon",children:c.jsx(c1,{size:18})}),c.jsxs("div",{children:[c.jsxs("div",{className:"admin-title",children:["ELIZA",c.jsx("span",{children:"AI"})," ",c.jsx("span",{className:"tag-admin",children:"ADMIN"})]}),c.jsx("div",{className:"admin-subtitle",children:"ACCESS CONTROL & ANALYTICS"})]})]}),c.jsx("nav",{className:"admin-nav-tabs",children:d.map(f=>{const p=f.icon,m=i.pathname===f.path;return c.jsxs(ka,{to:f.path,className:`nav-tab-link ${m?"active":""}`,children:[c.jsx(p,{size:16}),c.jsx("span",{children:f.label})]},f.path)})})]}),c.jsxs("div",{className:"topbar-right",children:[c.jsxs(ka,{to:"/",className:"btn-back-to-app",title:"Open Voice Agent Interface",children:[c.jsx(Fp,{size:14}),c.jsx("span",{children:"Voice Agent"})]}),c.jsxs("div",{className:"user-profile-badge",children:[c.jsx("span",{className:"dot-active"}),c.jsx("span",{className:"user-name",children:(s==null?void 0:s.username)||"Admin"})]}),c.jsxs("button",{type:"button",className:"btn-logout",onClick:u,title:"Sign out of Admin Dashboard",children:[c.jsx(o_,{size:16}),c.jsx("span",{children:"Sign Out"})]})]})]}),c.jsxs("main",{className:"admin-content-shell",children:[(t||n)&&c.jsx("div",{className:"page-header-row",children:c.jsxs("div",{children:[t&&c.jsx("h1",{className:"page-title",children:t}),n&&c.jsx("p",{className:"page-subtitle",children:n})]})}),e]}),c.jsx("style",{children:`
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
      `})]})}const Uz=[{id:"today",label:"Today"},{id:"yesterday",label:"Yesterday"},{id:"last7days",label:"Last 7 Days"},{id:"last30days",label:"Last 30 Days"},{id:"thismonth",label:"This Month"},{id:"custom",label:"Custom Range"}];function Bz(){const[e,t]=E.useState("last30days"),[n,r]=E.useState(""),[i,s]=E.useState(""),[a,o]=E.useState(null),[l,u]=E.useState(!0),[d,f]=E.useState(""),p=async(k=e,g=n,h=i)=>{u(!0),f("");try{const y=await st.getOverview(k,k==="custom"?g:null,k==="custom"?h:null);o(y)}catch(y){f(y.message||"Failed to load dashboard overview.")}finally{u(!1)}};E.useEffect(()=>{p(e,n,i)},[e]);const m=k=>{k.preventDefault(),n&&i&&p("custom",n,i)},x=(a==null?void 0:a.metrics)||{},v=(a==null?void 0:a.charts)||{};return c.jsxs(sm,{title:"System Overview & Analytics",subtitle:"Real-time access metrics, visitor sessions, and question usage from live database records.",children:[c.jsxs("div",{className:"filter-bar",children:[c.jsx("div",{className:"filter-presets",children:Uz.map(k=>c.jsx("button",{type:"button",className:`preset-btn ${e===k.id?"active":""}`,onClick:()=>t(k.id),children:k.label},k.id))}),e==="custom"&&c.jsxs("form",{onSubmit:m,className:"custom-range-form",children:[c.jsx("input",{type:"date",value:n,onChange:k=>r(k.target.value),className:"date-input","aria-label":"Start date"}),c.jsx("span",{className:"date-sep",children:"to"}),c.jsx("input",{type:"date",value:i,onChange:k=>s(k.target.value),className:"date-input","aria-label":"End date"}),c.jsx("button",{type:"submit",className:"btn-apply-date",children:"Apply"})]}),c.jsxs("button",{type:"button",className:"btn-refresh",onClick:()=>p(),disabled:l,title:"Refresh statistics",children:[c.jsx(Hp,{size:14,className:l?"spin":""}),c.jsx("span",{children:"Refresh"})]})]}),d&&c.jsxs("div",{className:"dash-error-banner",children:[c.jsx("span",{children:d}),c.jsx("button",{onClick:()=>p(),children:"Retry"})]}),c.jsxs("div",{className:"metrics-grid",children:[c.jsx(An,{title:"Total Unique Email IDs",value:x.total_emails??0,icon:m1,color:"violet"}),c.jsx(An,{title:"New Email IDs Today",value:x.new_emails_today??0,icon:h_,color:"emerald"}),c.jsx(An,{title:"Unique Visitors Today",value:x.unique_visitors_today??0,icon:$p,color:"cyan",hint:"Distinct customer IDs seen today"}),c.jsx(An,{title:"Total Access Sessions Today",value:x.total_sessions_today??0,icon:Op,color:"amber",hint:"Total daily visit records today"}),c.jsx(An,{title:"Total Accepted Questions Today",value:x.total_questions_today??0,icon:Bp,color:"violet",hint:"Deducted and processed today"}),c.jsx(An,{title:"Currently Blocked Email IDs",value:x.currently_blocked??0,icon:u1,color:"crimson",hint:"3/3 questions used in active cycle"}),c.jsx(An,{title:"Email IDs Eligible for Access",value:x.eligible_emails??0,icon:r_,color:"emerald",hint:"Active with queries remaining"}),c.jsx(An,{title:"Total Feedback Submissions",value:x.total_feedback??0,icon:s1,color:"cyan"}),c.jsx(An,{title:"Average Feedback Rating",value:`${x.average_rating??0} / 5`,icon:br,color:"solar",stars:x.average_rating??0})]}),c.jsxs("div",{className:"charts-grid",children:[c.jsxs("div",{className:"chart-card",children:[c.jsxs("div",{className:"chart-header",children:[c.jsx("h3",{children:"Daily Unique Visitors"}),c.jsx("span",{className:"chart-badge",children:"DISTINCT DAILY CUSTOMERS"})]}),c.jsx(Xc,{data:v.daily_visitors||[],color:"#c084fc",emptyText:"No visitor activity in selected date range."})]}),c.jsxs("div",{className:"chart-card",children:[c.jsxs("div",{className:"chart-header",children:[c.jsx("h3",{children:"Daily New Email Registrations"}),c.jsx("span",{className:"chart-badge",children:"NEW CUSTOMERS ONBOARDED"})]}),c.jsx(Xc,{data:v.daily_registrations||[],color:"#78f6a8",emptyText:"No registrations in selected date range."})]}),c.jsxs("div",{className:"chart-card",children:[c.jsxs("div",{className:"chart-header",children:[c.jsx("h3",{children:"Daily Question Usage"}),c.jsx("span",{className:"chart-badge",children:"ACCEPTED AI QUERIES"})]}),c.jsx(Xc,{data:v.daily_questions||[],color:"#7cecff",emptyText:"No question activity in selected date range."})]}),c.jsxs("div",{className:"chart-card-dual",children:[c.jsxs("div",{className:"chart-half",children:[c.jsxs("div",{className:"chart-header",children:[c.jsx("h3",{children:"Feedback Rating Distribution"}),c.jsx("span",{className:"chart-badge",children:"1 TO 5 STARS"})]}),c.jsx(Vz,{distribution:v.rating_distribution||{}})]}),c.jsxs("div",{className:"chart-half",children:[c.jsxs("div",{className:"chart-header",children:[c.jsx("h3",{children:"Device Distribution"}),c.jsx("span",{className:"chart-badge",children:"VISIT PLATFORMS"})]}),c.jsx($z,{devices:v.device_distribution||{}})]})]})]}),c.jsx("style",{children:`
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
      `})]})}function An({title:e,value:t,icon:n,color:r,hint:i,stars:s}){return c.jsxs("div",{className:`metric-card color-${r}`,children:[c.jsxs("div",{className:"metric-top",children:[c.jsx("span",{className:"metric-title",children:e}),c.jsx("div",{className:"metric-icon-wrap",children:c.jsx(n,{size:17})})]}),c.jsx("div",{className:"metric-val",children:t}),s!==void 0&&c.jsx("div",{className:"metric-stars",children:[1,2,3,4,5].map(a=>c.jsx(br,{size:14,fill:a<=Math.round(Number(s)||0)?"#fbbf24":"transparent",color:a<=Math.round(Number(s)||0)?"#fbbf24":"rgba(255,255,255,0.2)"},a))}),i&&c.jsx("span",{className:"metric-hint",children:i})]})}function Xc({data:e=[],color:t="#c084fc",emptyText:n="No data"}){if(!e||e.length===0)return c.jsx("div",{className:"chart-empty",children:n});const r=Math.max(...e.map(s=>s.count||0),1),i=160;return c.jsx("div",{className:"svg-chart-wrap",children:c.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"6px",height:`${i+40}px`,minWidth:`${e.length*32}px`,padding:"10px 0"},children:e.map((s,a)=>{const o=s.count||0,l=Math.max(4,Math.round(o/r*i)),u=s.date?s.date.slice(5):"";return c.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",height:"100%",justifyContent:"flex-end"},title:`${s.date}: ${o}`,children:[c.jsx("span",{style:{fontSize:"10px",color:o>0?"#ffffff":"rgba(255,255,255,0.3)",fontFamily:"DM Mono"},children:o>0?o:""}),c.jsx("div",{style:{width:"100%",maxWidth:"28px",height:`${l}px`,backgroundColor:o>0?t:"rgba(255, 255, 255, 0.05)",borderRadius:"4px 4px 0 0",transition:"height 0.3s ease"}}),c.jsx("span",{style:{fontSize:"10px",color:"rgba(226,238,230,0.5)",fontFamily:"DM Mono",whiteSpace:"nowrap"},children:u})]},a)})})})}function Vz({distribution:e={}}){const t=Object.values(e).reduce((r,i)=>r+i,0)||1,n=[5,4,3,2,1];return c.jsx("div",{className:"rating-bars-wrap",children:n.map(r=>{const i=e[r]||0,s=Math.round(i/t*100);return c.jsxs("div",{className:"rating-bar-row",children:[c.jsxs("span",{className:"star-label",children:[r," ",c.jsx(br,{size:13,fill:"#fbbf24"})]}),c.jsx("div",{className:"bar-track",children:c.jsx("div",{className:"bar-fill",style:{width:`${s}%`}})}),c.jsx("span",{className:"bar-count",children:i})]},r)})})}function $z({devices:e={}}){const t=[{key:"desktop",label:"Desktop",icon:a1},{key:"mobile",label:"Mobile",icon:d1},{key:"tablet",label:"Tablet",icon:h1},{key:"unknown",label:"Unknown",icon:Bp}];return c.jsx("div",{className:"devices-wrap",children:t.map(n=>{const r=n.icon,i=e[n.key]||0;return c.jsxs("div",{className:"device-card",children:[c.jsx("div",{className:"device-icon-box",children:c.jsx(r,{size:18})}),c.jsxs("div",{className:"device-info",children:[c.jsx("span",{className:"device-name",children:n.label}),c.jsxs("span",{className:"device-val",children:[i," visits"]})]})]},n.key)})})}function Hz(){var Cn,qt,D,ge,re,xe,M,$,ae,de,P;const[e,t]=E.useState([]),[n,r]=E.useState(0),[i,s]=E.useState(1),[a,o]=E.useState(1),[l,u]=E.useState(15),[d,f]=E.useState(""),[p,m]=E.useState(""),[x,v]=E.useState(""),[k,g]=E.useState(""),[h,y]=E.useState("newest"),[w,C]=E.useState(""),[b,I]=E.useState(""),[N,R]=E.useState(!0),[_,j]=E.useState(""),[z,G]=E.useState(new Set),[q,H]=E.useState(!1),[le,Q]=E.useState(""),[L,B]=E.useState(null),[S,Y]=E.useState(null),[ee,A]=E.useState(!1),ue=T=>{Q(T),setTimeout(()=>Q(""),4500)},Se=async()=>{R(!0),j("");try{const T=await st.getEmails({page:a,per_page:l,search:d.trim(),status:p,device:x,question_usage:k!==""?Number(k):void 0,sort_by:h,start_date:w||void 0,end_date:b||void 0});t(T.items||[]),r(T.total||0),s(T.total_pages||1)}catch(T){j(T.message||"Failed to load email records.")}finally{R(!1)}};E.useEffect(()=>{Se()},[a,l,p,x,k,h,w,b]);const se=T=>{T.preventDefault(),o(1),Se()},Ee=()=>{f(""),m(""),v(""),g(""),y("newest"),C(""),I(""),G(new Set),o(1)},$e=T=>{T.target.checked?G(new Set(e.map(U=>U.id))):G(new Set)},Ye=(T,U)=>{U&&U.stopPropagation(),G(V=>{const X=new Set(V);return X.has(T)?X.delete(T):X.add(T),X})},pe=async(T,U)=>{var V;if(U&&U.stopPropagation(),!!window.confirm("Immediately unblock this customer and restore their 3 questions access?")){H(!0);try{const X=await st.unblockCustomer(T);ue(X.message||"User unblocked successfully!"),t(ie=>ie.map(fe=>fe.id===T?{...fe,blocked:!1,access_status:"eligible",remaining_questions:3,questions_used:0,blocked_until:null}:fe)),((V=S==null?void 0:S.customer)==null?void 0:V.id)===T&&Y(ie=>({...ie,customer:{...ie.customer,status:"eligible"}}))}catch(X){alert("Failed to unblock customer: "+X.message)}finally{H(!1)}}},et=async(T,U,V)=>{if(V&&V.stopPropagation(),!!window.confirm(`Permanently delete customer ${U}? All access periods, questions, and records will be deleted.`)){H(!0);try{await st.deleteCustomer(T),ue(`Permanently deleted ${U}`),t(X=>X.filter(ie=>ie.id!==T)),r(X=>Math.max(0,X-1)),G(X=>{const ie=new Set(X);return ie.delete(T),ie}),L===T&&Gt()}catch(X){alert("Failed to delete customer: "+X.message)}finally{H(!1)}}},St=async()=>{if(z.size!==0&&window.confirm(`Permanently delete ${z.size} selected customer records? This action cannot be undone.`)){H(!0);try{const T=Array.from(z),U=await st.bulkDeleteCustomers(T);ue(U.message||`Deleted ${T.length} customers`);const V=new Set(T);t(X=>X.filter(ie=>!V.has(ie.id))),r(X=>Math.max(0,X-V.size)),G(new Set),L&&V.has(L)&&Gt()}catch(T){alert("Failed to delete records: "+T.message)}finally{H(!1)}}},Ge=async T=>{B(T),A(!0);try{const U=await st.getCustomerDetail(T);Y(U)}catch(U){alert("Failed to load customer profile: "+U.message)}finally{A(!1)}},Gt=()=>{B(null),Y(null)},jr=async()=>{try{const U=(await st.getEmails({page:1,per_page:2e3,search:d.trim(),status:p,device:x,question_usage:k!==""?Number(k):void 0,sort_by:h,start_date:w||void 0,end_date:b||void 0})).items||e;if(!U.length){alert("No records to export.");return}const X=[["Email","Status","Questions Used","Remaining Questions","First Seen","First Question","Last Active","Visits Count","Device Category","Blocked Until","Period Expires At"].join(","),...U.map(Pe=>[`"${(Pe.email||"").replace(/"/g,'""')}"`,`"${Pe.access_status||(Pe.blocked?"blocked":"active")}"`,Pe.questions_used??0,Pe.remaining_questions??0,`"${Pe.first_seen_at||""}"`,`"${Pe.first_question_at||""}"`,`"${Pe.last_activity_at||""}"`,Pe.visits_count??1,`"${Pe.device_category||"unknown"}"`,`"${Pe.blocked_until||""}"`,`"${Pe.current_period_expires_at||""}"`].join(","))].join(`
`),ie=new Blob([X],{type:"text/csv;charset=utf-8;"}),fe=URL.createObjectURL(ie),he=document.createElement("a");he.href=fe,he.setAttribute("download",`eliza-users-export-${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(he),he.click(),document.body.removeChild(he),URL.revokeObjectURL(fe)}catch(T){alert("Failed to export data: "+T.message)}},Me=T=>{if(!T)return"—";try{return new Date(T).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return T}};return c.jsxs(sm,{title:"Email IDs & Access Analytics",subtitle:"Searchable and sortable registry of all customer accounts, active restriction windows, and usage balances.",children:[le&&c.jsxs("div",{className:"admin-toast-banner",children:[c.jsx(Sa,{size:16}),c.jsx("span",{children:le})]}),c.jsxs("div",{className:"emails-toolbar",children:[c.jsxs("form",{onSubmit:se,className:"search-box",children:[c.jsx(o1,{size:16,className:"search-icon"}),c.jsx("input",{type:"text",value:d,onChange:T=>f(T.target.value),placeholder:"Search by customer email address..."}),d&&c.jsx("button",{type:"button",className:"btn-clear-input",onClick:()=>{f(""),o(1)},children:c.jsx(It,{size:14})})]}),c.jsxs("div",{className:"filter-selects",children:[c.jsxs("div",{className:"calendar-date-group",children:[c.jsx(Op,{size:14,className:"cal-icon"}),c.jsxs("div",{className:"date-field",children:[c.jsx("span",{className:"date-label",children:"From"}),c.jsx("input",{type:"date",value:w,onChange:T=>{C(T.target.value),o(1)},className:"filter-date-input"})]}),c.jsx("span",{className:"date-sep",children:"→"}),c.jsxs("div",{className:"date-field",children:[c.jsx("span",{className:"date-label",children:"To"}),c.jsx("input",{type:"date",value:b,onChange:T=>{I(T.target.value),o(1)},className:"filter-date-input"})]}),(w||b)&&c.jsx("button",{type:"button",className:"btn-clear-date",onClick:()=>{C(""),I(""),o(1)},title:"Clear date range",children:c.jsx(It,{size:13})})]}),c.jsxs("select",{value:p,onChange:T=>{m(T.target.value),o(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"All Statuses"}),c.jsx("option",{value:"eligible",children:"Eligible"}),c.jsx("option",{value:"blocked",children:"Blocked"}),c.jsx("option",{value:"active",children:"Active"}),c.jsx("option",{value:"expired",children:"Expired"})]}),c.jsxs("select",{value:k,onChange:T=>{g(T.target.value),o(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"Any Usage"}),c.jsx("option",{value:"0",children:"0 Questions (0/3)"}),c.jsx("option",{value:"1",children:"1 Question (1/3)"}),c.jsx("option",{value:"2",children:"2 Questions (2/3)"}),c.jsx("option",{value:"3",children:"3 Questions (3/3)"})]}),c.jsxs("select",{value:x,onChange:T=>{v(T.target.value),o(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"All Devices"}),c.jsx("option",{value:"desktop",children:"Desktop"}),c.jsx("option",{value:"mobile",children:"Mobile"}),c.jsx("option",{value:"tablet",children:"Tablet"})]}),c.jsxs("select",{value:h,onChange:T=>{y(T.target.value),o(1)},className:"filter-select",children:[c.jsx("option",{value:"newest",children:"Sort: Newest"}),c.jsx("option",{value:"oldest",children:"Sort: Oldest"}),c.jsx("option",{value:"most_active",children:"Sort: Most Active"})]}),c.jsx("button",{type:"button",className:"btn-action-refresh",onClick:Se,title:"Refresh records",children:c.jsx(Hp,{size:14,className:N?"spin":""})}),c.jsxs("button",{type:"button",className:"btn-action-export",onClick:jr,title:"Download all customer records as CSV",children:[c.jsx(n1,{size:14}),c.jsx("span",{children:"Export CSV"})]}),(d||p||x||k||h!=="newest"||w||b)&&c.jsx("button",{type:"button",className:"btn-clear-all",onClick:Ee,children:"Clear Filters"})]})]}),z.size>0&&c.jsxs("div",{className:"bulk-actions-card",children:[c.jsxs("div",{className:"bulk-info",children:[c.jsx(f1,{size:17,className:"bulk-icon"}),c.jsxs("span",{children:[c.jsx("b",{children:z.size})," customer(s) selected"]})]}),c.jsxs("div",{className:"bulk-btns",children:[c.jsxs("button",{type:"button",className:"btn-bulk-delete",onClick:St,disabled:q,children:[c.jsx(Bi,{size:14}),c.jsxs("span",{children:["Delete Selected (",z.size,")"]})]}),c.jsx("button",{type:"button",className:"btn-bulk-cancel",onClick:()=>G(new Set),children:"Cancel Selection"})]})]}),_&&c.jsxs("div",{className:"table-error-banner",children:[c.jsx("span",{children:_}),c.jsx("button",{onClick:Se,children:"Retry"})]}),c.jsxs("div",{className:"table-card",children:[c.jsx("div",{className:"table-responsive",children:c.jsxs("table",{className:"admin-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{style:{width:42,textAlign:"center"},children:c.jsx("input",{type:"checkbox",className:"row-checkbox",checked:e.length>0&&e.every(T=>z.has(T.id)),onChange:$e,title:"Select all on this page"})}),c.jsx("th",{children:"Email Address"}),c.jsx("th",{children:"Status"}),c.jsx("th",{children:"Usage"}),c.jsx("th",{children:"Left"}),c.jsx("th",{children:"First Seen"}),c.jsx("th",{children:"First Question"}),c.jsx("th",{children:"Last Active"}),c.jsx("th",{children:"Visits"}),c.jsx("th",{children:"Device"}),c.jsx("th",{children:"Blocked Until"}),c.jsx("th",{children:"Cycle Expiry"}),c.jsx("th",{className:"text-right",children:"Actions"})]})}),c.jsx("tbody",{children:N?c.jsx("tr",{children:c.jsxs("td",{colSpan:"13",className:"table-loading-cell",children:[c.jsx("span",{className:"table-spinner"})," Loading records..."]})}):e.length===0?c.jsx("tr",{children:c.jsx("td",{colSpan:"13",className:"table-empty-cell",children:"No matching customer emails found."})}):e.map(T=>{const U=T.blocked||T.remaining_questions!==void 0&&T.remaining_questions<=0||T.access_status==="blocked",V=z.has(T.id);return c.jsxs("tr",{className:`table-row-clickable ${V?"row-selected":""}`,onClick:()=>Ge(T.id),children:[c.jsx("td",{style:{textAlign:"center"},onClick:X=>X.stopPropagation(),children:c.jsx("input",{type:"checkbox",className:"row-checkbox",checked:V,onChange:X=>Ye(T.id,X)})}),c.jsx("td",{className:"font-semibold text-white",children:c.jsx("span",{className:"email-cell",children:T.email})}),c.jsx("td",{children:c.jsx(Wz,{status:T.access_status,blocked:T.blocked})}),c.jsx("td",{children:c.jsxs("span",{className:"usage-pill",children:[T.questions_used,"/3"]})}),c.jsx("td",{children:c.jsx("span",{className:"font-mono text-purple-200",children:T.remaining_questions})}),c.jsx("td",{className:"text-muted",children:Me(T.first_seen_at)}),c.jsx("td",{className:"text-muted",children:Me(T.first_question_at)}),c.jsx("td",{className:"text-muted",children:Me(T.last_activity_at)}),c.jsx("td",{children:c.jsx("span",{className:"font-mono",children:T.visits_count})}),c.jsx("td",{children:c.jsx(Gz,{device:T.device_category})}),c.jsx("td",{children:T.blocked_until?c.jsx("span",{className:"blocked-date-tag",children:Me(T.blocked_until)}):c.jsx("span",{className:"text-muted",children:"—"})}),c.jsx("td",{className:"text-muted",children:Me(T.current_period_expires_at)}),c.jsx("td",{className:"text-right",onClick:X=>X.stopPropagation(),children:c.jsxs("div",{className:"row-actions-group",children:[U&&c.jsxs("button",{type:"button",className:"btn-action-unblock",onClick:X=>pe(T.id,X),disabled:q,title:"Unblock customer & restore 3 questions",children:[c.jsx(qd,{size:13}),c.jsx("span",{children:"Unblock"})]}),c.jsxs("button",{type:"button",className:"btn-view-detail",onClick:()=>Ge(T.id),title:"View Customer Profile",children:[c.jsx($p,{size:13}),c.jsx("span",{children:"Details"})]}),c.jsx("button",{type:"button",className:"btn-action-delete",onClick:X=>et(T.id,T.email,X),disabled:q,title:"Permanently delete customer",children:c.jsx(Bi,{size:13})})]})})]},T.id)})})]})}),c.jsxs("div",{className:"pagination-bar",children:[c.jsxs("div",{className:"pagination-info",children:["Showing ",c.jsx("b",{children:e.length})," of ",c.jsx("b",{children:n})," total emails (Page ",a," of ",i,")"]}),c.jsxs("div",{className:"pagination-controls",children:[c.jsxs("label",{className:"page-size-label",children:[c.jsx("span",{children:"Per page:"}),c.jsxs("select",{value:l,onChange:T=>{u(Number(T.target.value)),o(1)},children:[c.jsx("option",{value:"15",children:"15"}),c.jsx("option",{value:"30",children:"30"}),c.jsx("option",{value:"50",children:"50"})]})]}),c.jsx("button",{type:"button",className:"btn-page",disabled:a<=1,onClick:()=>o(T=>Math.max(1,T-1)),title:"Previous page",children:c.jsx(Jb,{size:16})}),c.jsxs("span",{className:"current-page-num",children:[a," / ",i]}),c.jsx("button",{type:"button",className:"btn-page",disabled:a>=i,onClick:()=>o(T=>Math.min(i,T+1)),title:"Next page",children:c.jsx(e1,{size:16})})]})]})]}),L&&c.jsx("div",{className:"detail-modal-overlay",onClick:Gt,children:c.jsxs("div",{className:"detail-modal-card",onClick:T=>T.stopPropagation(),children:[c.jsxs("div",{className:"detail-modal-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"detail-eyebrow",children:"CUSTOMER PROFILE & AUDIT"}),c.jsx("h3",{children:((Cn=S==null?void 0:S.customer)==null?void 0:Cn.email)||"Loading..."})]}),c.jsxs("div",{className:"head-actions",children:[(S==null?void 0:S.customer)&&c.jsxs(c.Fragment,{children:[c.jsxs("button",{type:"button",className:"btn-drawer-unblock",onClick:T=>pe(S.customer.id,T),title:"Unblock user and restore 3 questions",children:[c.jsx(qd,{size:14})," Unblock"]}),c.jsxs("button",{type:"button",className:"btn-drawer-delete",onClick:T=>et(S.customer.id,S.customer.email,T),title:"Delete customer record",children:[c.jsx(Bi,{size:14})," Delete"]})]}),c.jsx("button",{type:"button",className:"btn-modal-close",onClick:Gt,children:c.jsx(It,{size:18})})]})]}),ee?c.jsxs("div",{className:"detail-loading",children:[c.jsx("span",{className:"table-spinner"})," Loading full customer profile..."]}):S?c.jsxs("div",{className:"detail-modal-body",children:[c.jsxs("div",{className:"profile-summary-box",children:[c.jsxs("div",{className:"summary-item",children:[c.jsx("span",{children:"First Seen"}),c.jsx("b",{children:Me((qt=S.customer)==null?void 0:qt.first_seen_at)})]}),c.jsxs("div",{className:"summary-item",children:[c.jsx("span",{children:"Last Active"}),c.jsx("b",{children:Me((D=S.customer)==null?void 0:D.last_activity_at)})]}),c.jsxs("div",{className:"summary-item",children:[c.jsx("span",{children:"Primary Device"}),c.jsx("b",{children:((ge=S.customer)==null?void 0:ge.device_type)||"unknown"})]}),c.jsxs("div",{className:"summary-item",children:[c.jsx("span",{children:"Account Status"}),c.jsx("b",{children:c.jsx("span",{className:"status-highlight",children:(re=S.customer)==null?void 0:re.status})})]})]}),c.jsxs("div",{className:"detail-section",children:[c.jsxs("h4",{children:["Access Cycles & Quotas (",((xe=S.periods)==null?void 0:xe.length)||0,")"]}),c.jsx("div",{className:"periods-list",children:(M=S.periods)==null?void 0:M.map(T=>c.jsxs("div",{className:"period-card",children:[c.jsxs("div",{className:"period-card-top",children:[c.jsx("span",{className:`period-status status-${T.status}`,children:T.status}),c.jsxs("span",{className:"period-q-count",children:["Questions: ",c.jsxs("b",{children:[T.questions_used,"/3"]})]})]}),c.jsxs("div",{className:"period-grid",children:[c.jsxs("div",{children:[c.jsx("span",{children:"Period Start"}),c.jsx("b",{children:Me(T.period_started_at)})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Expires At"}),c.jsx("b",{children:Me(T.period_expires_at)})]}),c.jsxs("div",{children:[c.jsx("span",{children:"First Question"}),c.jsx("b",{children:Me(T.first_question_at)})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Blocked Until"}),c.jsx("b",{children:Me(T.blocked_until)})]})]})]},T.id))})]}),c.jsxs("div",{className:"detail-section",children:[c.jsxs("h4",{children:["Question Usage Log (",(($=S.questions)==null?void 0:$.length)||0,")"]}),((ae=S.questions)==null?void 0:ae.length)===0?c.jsx("p",{className:"section-empty",children:"No questions submitted yet."}):c.jsx("div",{className:"log-table-wrap",children:c.jsxs("table",{className:"log-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Time"}),c.jsx("th",{children:"Status"}),c.jsx("th",{children:"Device"})]})}),c.jsx("tbody",{children:S.questions.map(T=>c.jsxs("tr",{children:[c.jsx("td",{children:Me(T.created_at)}),c.jsx("td",{children:c.jsx("span",{className:"log-badge-status",children:T.status})}),c.jsx("td",{children:T.device_type||"unknown"})]},T.id))})]})})]}),c.jsxs("div",{className:"detail-section",children:[c.jsxs("h4",{children:["Feedback Submissions (",((de=S.feedbacks)==null?void 0:de.length)||0,")"]}),((P=S.feedbacks)==null?void 0:P.length)===0?c.jsx("p",{className:"section-empty",children:"No feedback submitted by this customer."}):c.jsx("div",{className:"feedback-cards-list",children:S.feedbacks.map(T=>c.jsxs("div",{className:"feedback-mini-card",children:[c.jsxs("div",{className:"fb-mini-top",children:[c.jsx("div",{className:"fb-stars",children:[...Array(T.rating)].map((U,V)=>c.jsx(br,{size:14,fill:"#fbbf24",color:"#fbbf24"},V))}),c.jsx("span",{className:"fb-cat-tag",children:T.category}),c.jsx("span",{className:"fb-date",children:Me(T.created_at)})]}),c.jsx("p",{className:"fb-mini-msg",children:T.message})]},T.id))})]})]}):null]})}),c.jsx("style",{children:`
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
      `})]})}function Wz({status:e,blocked:t}){return t||e==="blocked"?c.jsxs("span",{className:"status-badge status-blocked",children:[c.jsx(u1,{size:12}),c.jsx("span",{children:"Blocked"})]}):e==="expired"?c.jsxs("span",{className:"status-badge status-expired",children:[c.jsx(Vp,{size:12}),c.jsx("span",{children:"Expired"})]}):e==="active"?c.jsxs("span",{className:"status-badge status-active",children:[c.jsx(Sa,{size:12}),c.jsx("span",{children:"Active"})]}):c.jsxs("span",{className:"status-badge status-eligible",children:[c.jsx(Sa,{size:12}),c.jsx("span",{children:"Eligible"})]})}function Gz({device:e}){const t=(e||"unknown").toLowerCase();let n=Bp;return t.includes("desk")?n=a1:t.includes("mob")?n=d1:t.includes("tab")&&(n=h1),c.jsxs("span",{className:"device-pill",children:[c.jsx(n,{size:12}),c.jsx("span",{children:t})]})}const qz=["Voice Experience","Answer Quality","UI/UX","Bug","Feature Request","Other"];function Kz(){const[e,t]=E.useState([]),[n,r]=E.useState({}),[i,s]=E.useState(0),[a,o]=E.useState(1),[l,u]=E.useState(1),[d,f]=E.useState(15),[p,m]=E.useState(""),[x,v]=E.useState(""),[k,g]=E.useState(""),[h,y]=E.useState(""),[w,C]=E.useState("newest"),[b,I]=E.useState(""),[N,R]=E.useState(""),[_,j]=E.useState(!0),[z,G]=E.useState(""),[q,H]=E.useState(new Set),[le,Q]=E.useState(!1),[L,B]=E.useState(""),[S,Y]=E.useState(null),[ee,A]=E.useState(!1),[ue,Se]=E.useState(""),se=D=>{B(D),setTimeout(()=>B(""),4500)},Ee=async()=>{j(!0),G("");try{const D=await st.getFeedback({page:l,per_page:d,search:p.trim(),rating:x!==""?Number(x):void 0,category:k,status:h,start_date:b||void 0,end_date:N||void 0,sort_order:w});t(D.items||[]),r(D.summary||{}),s(D.total||0),o(D.total_pages||1)}catch(D){G(D.message||"Failed to load feedback records.")}finally{j(!1)}};E.useEffect(()=>{Ee()},[l,d,x,k,h,w,b,N]);const $e=D=>{D.preventDefault(),u(1),Ee()},Ye=()=>{m(""),v(""),g(""),y(""),C("newest"),I(""),R(""),H(new Set),u(1)},pe=D=>{D.target.checked?H(new Set(e.map(ge=>ge.id))):H(new Set)},et=(D,ge)=>{ge&&ge.stopPropagation(),H(re=>{const xe=new Set(re);return xe.has(D)?xe.delete(D):xe.add(D),xe})},St=async(D,ge)=>{if(ge&&ge.stopPropagation(),!!window.confirm("Permanently delete this feedback review? This action cannot be undone.")){Q(!0);try{await st.deleteFeedback(D),se("Feedback review deleted."),t(re=>re.filter(xe=>xe.id!==D)),s(re=>Math.max(0,re-1)),H(re=>{const xe=new Set(re);return xe.delete(D),xe}),(S==null?void 0:S.id)===D&&Y(null)}catch(re){alert("Failed to delete feedback: "+re.message)}finally{Q(!1)}}},Ge=async()=>{if(q.size!==0&&window.confirm(`Permanently delete ${q.size} selected feedback reviews? This cannot be undone.`)){Q(!0);try{const D=Array.from(q),ge=await st.bulkDeleteFeedback(D);se(ge.message||`Deleted ${D.length} feedback review(s).`);const re=new Set(D);t(xe=>xe.filter(M=>!re.has(M.id))),s(xe=>Math.max(0,xe-re.size)),H(new Set),S&&re.has(S.id)&&Y(null)}catch(D){alert("Failed to bulk delete feedback: "+D.message)}finally{Q(!1)}}},Gt=async(D,ge)=>{try{const re=await st.updateFeedback(D,{status:ge});t(xe=>xe.map(M=>M.id===D?{...M,status:re.status}:M)),S&&S.id===D&&Y(xe=>({...xe,status:re.status})),se(`Feedback status updated to ${ge}.`)}catch(re){alert("Failed to update status: "+re.message)}},jr=async()=>{if(S){A(!0);try{const D=await st.updateFeedback(S.id,{admin_notes:ue});Y(ge=>({...ge,admin_notes:D.admin_notes})),t(ge=>ge.map(re=>re.id===S.id?{...re,admin_notes:D.admin_notes}:re)),se("Internal notes saved successfully.")}catch(D){alert("Failed to save admin notes: "+D.message)}finally{A(!1)}}},Me=D=>{Y(D),Se(D.admin_notes||"")},Cn=async()=>{try{const ge=(await st.getFeedback({page:1,per_page:2e3,search:p.trim(),rating:x!==""?Number(x):void 0,category:k,status:h,start_date:b||void 0,end_date:N||void 0,sort_order:w})).items||e;if(!ge.length){alert("No feedback records to export.");return}const xe=[["Date","Email","Rating","Category","Message","Device","Browser","Status","Admin Notes"].join(","),...ge.map(de=>[`"${de.created_at||""}"`,`"${(de.email||"").replace(/"/g,'""')}"`,de.rating,`"${(de.category||"").replace(/"/g,'""')}"`,`"${(de.message||"").replace(/"/g,'""').replace(/\n/g," ")}"`,`"${de.device_type||"desktop"}"`,`"${de.browser_name||"Chrome"}"`,`"${de.status||"new"}"`,`"${(de.admin_notes||"").replace(/"/g,'""').replace(/\n/g," ")}"`].join(","))].join(`
`),M=new Blob([xe],{type:"text/csv;charset=utf-8;"}),$=URL.createObjectURL(M),ae=document.createElement("a");ae.href=$,ae.setAttribute("download",`eliza-feedback-export-${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(ae),ae.click(),document.body.removeChild(ae),URL.revokeObjectURL($)}catch(D){alert("Failed to export feedback: "+D.message)}},qt=D=>{if(!D)return"—";try{return new Date(D).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return D}};return c.jsxs(sm,{title:"Feedback & Reviews Management",subtitle:"Examine visitor ratings, categorize UX evaluations, and record operational follow-ups.",children:[L&&c.jsxs("div",{className:"admin-toast-banner",children:[c.jsx(Sa,{size:16}),c.jsx("span",{children:L})]}),c.jsxs("div",{className:"fb-summary-grid",children:[c.jsxs("div",{className:"fb-summary-card",children:[c.jsx("span",{className:"summary-card-title",children:"Total Submissions"}),c.jsx("div",{className:"summary-card-val",children:n.total_feedback??0}),c.jsx("span",{className:"summary-card-sub",children:"All-time reviews received"})]}),c.jsxs("div",{className:"fb-summary-card",children:[c.jsx("span",{className:"summary-card-title",children:"Average Rating"}),c.jsxs("div",{className:"summary-card-val",children:[n.average_rating?Number(n.average_rating).toFixed(1):"0.0"," / 5"]}),c.jsx("div",{className:"stars-mini-row",children:[1,2,3,4,5].map(D=>c.jsx(br,{size:14,fill:D<=Math.round(n.average_rating||0)?"#fbbf24":"transparent",color:D<=Math.round(n.average_rating||0)?"#fbbf24":"rgba(255,255,255,0.2)"},D))})]}),c.jsxs("div",{className:"fb-summary-card",children:[c.jsx("span",{className:"summary-card-title",children:"Feedback Received Today"}),c.jsx("div",{className:"summary-card-val",children:n.feedback_today??0}),c.jsx("span",{className:"summary-card-sub",children:"Past 24 hours"})]}),c.jsxs("div",{className:"fb-summary-card",children:[c.jsx("span",{className:"summary-card-title",children:"Pending Review"}),c.jsx("div",{className:"summary-card-val",children:e.filter(D=>D.status==="new").length}),c.jsx("span",{className:"summary-card-sub",children:"Marked as 'New' on this page"})]})]}),c.jsxs("div",{className:"fb-toolbar",children:[c.jsxs("form",{onSubmit:$e,className:"search-box",children:[c.jsx(o1,{size:16,className:"search-icon"}),c.jsx("input",{type:"text",value:p,onChange:D=>m(D.target.value),placeholder:"Search feedback by email or message..."}),p&&c.jsx("button",{type:"button",className:"btn-clear-input",onClick:()=>{m(""),u(1)},children:c.jsx(It,{size:14})})]}),c.jsxs("div",{className:"fb-filters",children:[c.jsxs("div",{className:"calendar-date-group",children:[c.jsx(Op,{size:14,className:"cal-icon"}),c.jsxs("div",{className:"date-field",children:[c.jsx("span",{className:"date-label",children:"From"}),c.jsx("input",{type:"date",value:b,onChange:D=>{I(D.target.value),u(1)},className:"filter-date-input"})]}),c.jsx("span",{className:"date-sep",children:"→"}),c.jsxs("div",{className:"date-field",children:[c.jsx("span",{className:"date-label",children:"To"}),c.jsx("input",{type:"date",value:N,onChange:D=>{R(D.target.value),u(1)},className:"filter-date-input"})]}),(b||N)&&c.jsx("button",{type:"button",className:"btn-clear-date",onClick:()=>{I(""),R(""),u(1)},title:"Clear date range",children:c.jsx(It,{size:13})})]}),c.jsxs("select",{value:x,onChange:D=>{v(D.target.value),u(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"All Ratings"}),c.jsx("option",{value:"5",children:"5 Stars"}),c.jsx("option",{value:"4",children:"4 Stars"}),c.jsx("option",{value:"3",children:"3 Stars"}),c.jsx("option",{value:"2",children:"2 Stars"}),c.jsx("option",{value:"1",children:"1 Star"})]}),c.jsxs("select",{value:k,onChange:D=>{g(D.target.value),u(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"All Categories"}),qz.map(D=>c.jsx("option",{value:D,children:D},D))]}),c.jsxs("select",{value:h,onChange:D=>{y(D.target.value),u(1)},className:"filter-select",children:[c.jsx("option",{value:"",children:"All Statuses"}),c.jsx("option",{value:"new",children:"New"}),c.jsx("option",{value:"reviewed",children:"Reviewed"}),c.jsx("option",{value:"resolved",children:"Resolved"})]}),c.jsxs("select",{value:w,onChange:D=>{C(D.target.value),u(1)},className:"filter-select",children:[c.jsx("option",{value:"newest",children:"Sort: Newest"}),c.jsx("option",{value:"oldest",children:"Sort: Oldest"})]}),c.jsx("button",{type:"button",className:"btn-action-refresh",onClick:Ee,title:"Refresh feedback",children:c.jsx(Hp,{size:14,className:_?"spin":""})}),c.jsxs("button",{type:"button",className:"btn-action-export",onClick:Cn,title:"Download all feedback reviews as CSV",children:[c.jsx(n1,{size:14}),c.jsx("span",{children:"Export CSV"})]}),(p||x||k||h||w!=="newest"||b||N)&&c.jsx("button",{type:"button",className:"btn-clear-all",onClick:Ye,children:"Clear Filters"})]})]}),q.size>0&&c.jsxs("div",{className:"bulk-actions-card",children:[c.jsxs("div",{className:"bulk-info",children:[c.jsx(f1,{size:17,className:"bulk-icon"}),c.jsxs("span",{children:[c.jsx("b",{children:q.size})," review(s) selected"]})]}),c.jsxs("div",{className:"bulk-btns",children:[c.jsxs("button",{type:"button",className:"btn-bulk-delete",onClick:Ge,disabled:le,children:[c.jsx(Bi,{size:14}),c.jsxs("span",{children:["Delete Selected (",q.size,")"]})]}),c.jsx("button",{type:"button",className:"btn-bulk-cancel",onClick:()=>H(new Set),children:"Cancel Selection"})]})]}),z&&c.jsxs("div",{className:"table-error-banner",children:[c.jsx("span",{children:z}),c.jsx("button",{onClick:Ee,children:"Retry"})]}),c.jsxs("div",{className:"table-card",children:[c.jsx("div",{className:"table-responsive",children:c.jsxs("table",{className:"admin-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{style:{width:42,textAlign:"center"},children:c.jsx("input",{type:"checkbox",className:"row-checkbox",checked:e.length>0&&e.every(D=>q.has(D.id)),onChange:pe,title:"Select all on this page"})}),c.jsx("th",{children:"Date / Time"}),c.jsx("th",{children:"Email Address"}),c.jsx("th",{children:"Rating"}),c.jsx("th",{children:"Category"}),c.jsx("th",{children:"Feedback Message"}),c.jsx("th",{children:"Device"}),c.jsx("th",{children:"Browser"}),c.jsx("th",{children:"Status"}),c.jsx("th",{className:"text-right",children:"Actions"})]})}),c.jsx("tbody",{children:_?c.jsx("tr",{children:c.jsxs("td",{colSpan:"10",className:"table-loading-cell",children:[c.jsx("span",{className:"table-spinner"})," Loading feedback..."]})}):e.length===0?c.jsx("tr",{children:c.jsx("td",{colSpan:"10",className:"table-empty-cell",children:"No matching feedback entries found."})}):e.map(D=>{const ge=q.has(D.id);return c.jsxs("tr",{className:`table-row-clickable ${ge?"row-selected":""}`,onClick:()=>Me(D),children:[c.jsx("td",{style:{textAlign:"center"},onClick:re=>re.stopPropagation(),children:c.jsx("input",{type:"checkbox",className:"row-checkbox",checked:ge,onChange:re=>et(D.id,re)})}),c.jsx("td",{className:"text-muted",children:qt(D.created_at)}),c.jsx("td",{className:"font-semibold text-white",children:D.email}),c.jsx("td",{children:c.jsx("div",{className:"table-stars",children:[...Array(5)].map((re,xe)=>c.jsx(br,{size:13,fill:xe<D.rating?"#fbbf24":"transparent",color:xe<D.rating?"#fbbf24":"rgba(255,255,255,0.2)"},xe))})}),c.jsx("td",{children:c.jsx("span",{className:`cat-chip cat-chip-${(D.category||"").toLowerCase().replace(/[^a-z]/g,"")}`,children:D.category})}),c.jsx("td",{className:"message-preview-cell",children:c.jsx("p",{children:D.message})}),c.jsx("td",{children:c.jsx("span",{className:"device-chip",children:D.device_type||"desktop"})}),c.jsx("td",{children:c.jsx("span",{className:"browser-chip",children:D.browser_name||"Chrome"})}),c.jsx("td",{onClick:re=>re.stopPropagation(),children:c.jsxs("select",{value:D.status,onChange:re=>Gt(D.id,re.target.value),className:`status-dropdown status-style-${D.status}`,children:[c.jsx("option",{value:"new",children:"New"}),c.jsx("option",{value:"reviewed",children:"Reviewed"}),c.jsx("option",{value:"resolved",children:"Resolved"})]})}),c.jsx("td",{className:"text-right",onClick:re=>re.stopPropagation(),children:c.jsxs("div",{className:"row-actions-group",children:[c.jsxs("button",{type:"button",className:"btn-view-detail",onClick:()=>Me(D),title:"View Full Feedback & Notes",children:[c.jsx($p,{size:13})," View"]}),c.jsx("button",{type:"button",className:"btn-action-delete",onClick:re=>St(D.id,re),disabled:le,title:"Delete feedback entry",children:c.jsx(Bi,{size:13})})]})})]},D.id)})})]})}),c.jsxs("div",{className:"pagination-bar",children:[c.jsxs("div",{className:"pagination-info",children:["Showing ",c.jsx("b",{children:e.length})," of ",c.jsx("b",{children:i})," total reviews (Page ",l," of ",a,")"]}),c.jsxs("div",{className:"pagination-controls",children:[c.jsxs("label",{className:"page-size-label",children:[c.jsx("span",{children:"Per page:"}),c.jsxs("select",{value:d,onChange:D=>{f(Number(D.target.value)),u(1)},children:[c.jsx("option",{value:"15",children:"15"}),c.jsx("option",{value:"30",children:"30"}),c.jsx("option",{value:"50",children:"50"})]})]}),c.jsx("button",{type:"button",className:"btn-page",disabled:l<=1,onClick:()=>u(D=>Math.max(1,D-1)),title:"Previous page",children:c.jsx(Jb,{size:16})}),c.jsxs("span",{className:"current-page-num",children:[l," / ",a]}),c.jsx("button",{type:"button",className:"btn-page",disabled:l>=a,onClick:()=>u(D=>Math.min(a,D+1)),title:"Next page",children:c.jsx(e1,{size:16})})]})]})]}),S&&c.jsx("div",{className:"detail-modal-overlay",onClick:()=>Y(null),children:c.jsxs("div",{className:"detail-modal-card",onClick:D=>D.stopPropagation(),children:[c.jsxs("div",{className:"detail-modal-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"detail-eyebrow",children:"FEEDBACK INSPECTION"}),c.jsxs("h3",{children:["Review from ",S.email]})]}),c.jsxs("div",{className:"head-actions",children:[c.jsxs("button",{type:"button",className:"btn-drawer-delete",onClick:D=>St(S.id,D),title:"Delete this feedback entry",children:[c.jsx(Bi,{size:14})," Delete"]}),c.jsx("button",{type:"button",className:"btn-modal-close",onClick:()=>Y(null),children:c.jsx(It,{size:18})})]})]}),c.jsxs("div",{className:"detail-modal-body",children:[c.jsxs("div",{className:"fb-inspect-meta",children:[c.jsxs("div",{children:[c.jsx("span",{children:"Submitted At"}),c.jsx("b",{children:qt(S.created_at)})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Category"}),c.jsx("b",{children:S.category})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Device & Browser"}),c.jsxs("b",{children:[S.device_type," • ",S.browser_name]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Rating"}),c.jsx("div",{className:"table-stars",children:[...Array(S.rating)].map((D,ge)=>c.jsx(br,{size:15,fill:"#fbbf24",color:"#fbbf24"},ge))})]})]}),c.jsxs("div",{className:"fb-inspect-message-box",children:[c.jsx("span",{className:"box-label",children:"Visitor Feedback Message"}),c.jsx("p",{className:"full-message-text",children:S.message})]}),c.jsxs("div",{className:"fb-inspect-status-box",children:[c.jsx("span",{className:"box-label",children:"Resolution Status"}),c.jsx("div",{className:"status-button-group",children:["new","reviewed","resolved"].map(D=>c.jsxs("button",{type:"button",className:`status-btn ${S.status===D?"active-"+D:""}`,onClick:()=>Gt(S.id,D),children:[S.status===D&&c.jsx(zp,{size:14}),c.jsx("span",{style:{textTransform:"capitalize"},children:D})]},D))})]}),c.jsxs("div",{className:"fb-inspect-notes-box",children:[c.jsxs("div",{className:"notes-box-head",children:[c.jsx("span",{className:"box-label",children:"Administrator Internal Notes"}),c.jsxs("button",{type:"button",className:"btn-save-notes",onClick:jr,disabled:ee,children:[c.jsx(c_,{size:13}),c.jsx("span",{children:ee?"Saving...":"Save Notes"})]})]}),c.jsx("textarea",{rows:"4",value:ue,onChange:D=>Se(D.target.value),placeholder:"Record follow-up actions, customer bug reports, or engineering notes here...",className:"notes-textarea"})]})]})]})}),c.jsx("style",{children:`
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
      `})]})}Nb(document.getElementById("root")).render(c.jsx(aS.StrictMode,{children:c.jsx(VT,{children:c.jsxs(xT,{children:[c.jsx(Or,{path:"/",element:c.jsx(Fz,{})}),c.jsx(Or,{path:"/admin/login",element:c.jsx(zz,{})}),c.jsx(Or,{path:"/admin/dashboard",element:c.jsx(Bz,{})}),c.jsx(Or,{path:"/admin/emails",element:c.jsx(Hz,{})}),c.jsx(Or,{path:"/admin/feedback",element:c.jsx(Kz,{})}),c.jsx(Or,{path:"*",element:c.jsx(gT,{to:"/",replace:!0})})]})})}));
